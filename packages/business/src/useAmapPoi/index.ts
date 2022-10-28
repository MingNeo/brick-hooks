import { useState, useRef } from 'react'
import { isBrowser } from '../utils'
import { formatPoiInfo, getNearByInfos, loadAmapScript, searchPois } from './helper'

type Location = {
  latitude?: string
  longitude?: string
  [x: string]: any
}

type Poi = {
  latitude?: string
  longitude?: string
  [x: string]: any
}

interface AmapNearByPoiInfo extends Poi {
  pois: Poi[]
  [x: string]: any
}

export type GetNearByInfos = (location: Location | Poi) => Promise<AmapNearByPoiInfo>

interface Options {
  defaultPoi?: Poi // 指定默认poi 格式为高德地图Poi格式
  currentLocation?: {
    city?: string
    latitude?: string
    longitude?: string
    [x: string]: any
  } // 当前定位信息，通常无需传这个值，searchPois时如不传city，则使用此处当前定位的城市
  services?: {
    getNearByPoiList?: GetNearByInfos // 自行封装的获取附近的poi列表的服务，使用获取附近Poi功能必传。
    searchPoiList?: any // 自行封装的搜索poi的服务，使用搜索poi功能必传
  }
  onCurrentPoiChange?: (poi: Poi) => void
  formatPoi?: (poi: Poi) => Poi

  amapKey?: string
}

type GetNearbyPois = (options?: {
  current: Location
  size?: number // 展示数量
  formatPois?: ((pois: Poi[]) => Poi[]) | ((pois: Poi[]) => Promise<Poi[]>)
  showCurrent?: boolean
}) => Promise<Poi[]>

interface UseAmapPoiRetrun {
  currentPoi: Poi
  pois: any[]
  nearbyPois: any[]
  onSelectPoi: (poi: Poi) => Promise<void>
  getNearbyPois: GetNearbyPois
  searchPois: (params: any) => Promise<Poi[]>
  setCurrentPois: (current: Poi) => Promise<Poi>
}

/**
 * 获取高德地图poi，主要用于临时的poi，如创建地址时选择poi。包含查询展示poi列表，选中poi相关逻辑
 * @returns
 */
export default function useAmapPoi({
  defaultPoi,
  currentLocation,
  services: { getNearByPoiList, searchPoiList } = {},
  onCurrentPoiChange,
  formatPoi = formatPoiInfo,
  amapKey,
}: Options = {}): UseAmapPoiRetrun {
  const loadedScriptRef = useRef<boolean>(false)
  if (isBrowser) {
    // 如果是浏览器端使用，默认可以不传service而使用内置的
    getNearByPoiList = getNearByPoiList || getNearByInfos
    searchPoiList = searchPoiList || searchPois
    if (!loadedScriptRef.current && amapKey) {
      loadedScriptRef.current = true
      loadAmapScript(amapKey)
    }
  }

  const [currentPoi, setCurrentPoi] = useState(defaultPoi)
  const [pois, setPois] = useState([])
  const [nearbyPois, setNearbyPois] = useState([])

  const handleSetCurrentPos = async (poi: Location | Poi) => {
    if (!poi.latitude || !poi.longitude) {
      setCurrentPoi({})
      return
    }

    let newPoiData: any = {}
    if ((!newPoiData.city || !newPoiData.poiId) && getNearByPoiList) {
      const data = await getNearByPoiList(poi)
      const closestPoi = data.pois?.[0]
      if (!newPoiData.poiId) {
        newPoiData =
          newPoiData.poiId || data.poiId ? { ...newPoiData, poiId: newPoiData.poiId || data.poiId } : { ...closestPoi }
      }
      newPoiData.city = newPoiData.city || data.city || data.cityname || closestPoi?.city || closestPoi?.cityname
    }
    newPoiData = await formatPoi(newPoiData)
    if (!newPoiData.city) return
    setCurrentPoi(newPoiData)
    return newPoiData
  }

  // 设置临时的地址选择
  const onSelectPoi = async (poi: Poi) => {
    let newPoiData
    try {
      newPoiData = await handleSetCurrentPos(poi)
      onCurrentPoiChange && onCurrentPoiChange(newPoiData)
    } catch (error) {
      console.log('select poi error')
    }
  }

  // 根据城市/搜索关键字获取地址列表， 如不传city，则使用当前定位的城市
  const handleSearchPois = async (params) => {
    if (!searchPoiList) {
      throw new Error('please set service searchPoiList')
    }
    try {
      const resultPois = (await searchPoiList({ ...params, city: params.city || currentLocation?.city })) || []
      setPois(resultPois)
      return resultPois
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * 根据定位获取几条附近的Poi
   */
  const getNearbyPois: GetNearbyPois = async ({
    current,
    size = 5,
    formatPois = (pois: Poi[]) => pois.map(formatPoi),
    showCurrent = false,
  }) => {
    if (!getNearByPoiList) {
      throw new Error('please set service getNearByPoiList')
    }
    const result = await getNearByPoiList(current)
    const showPois: Poi[] =
      result.pois
        ?.splice(0, size)
        .map((poi: Poi) => ({ ...poi, city: poi.city || current.city || current.cityname })) || []

    if (!result.latitude || !result.longitude || !showPois?.length) {
      setNearbyPois([])
      return []
    }

    // 地图等当前定位列表里增加当前定位点
    if (showCurrent) {
      showPois.unshift(current)
    }

    // 有时候需要查询poi是否在范围内等处理
    const formatedPois = await formatPois(showPois)
    setNearbyPois(formatedPois)
  }

  return {
    currentPoi,
    pois,
    nearbyPois,
    onSelectPoi,
    setCurrentPois: handleSetCurrentPos,
    getNearbyPois, // 获取附近的poi
    searchPois: handleSearchPois,
  }
}
