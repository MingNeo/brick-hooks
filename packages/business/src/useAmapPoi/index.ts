import { useState } from 'react'
import { formatPoiInfo } from './helper'

type Poi = Record<string, any>

interface AmapNearByPoiInfo extends Poi {
  pois: Poi[]
  [x: string]: any
}

export type GetNearByInfos = ({
  latitude,
  longitude,
}: {
  latitude?: string
  longitude?: string
  [x: string]: any
}) => Promise<AmapNearByPoiInfo>

interface Options {
  defaultPoi?: Poi
  currentLocation?: Record<string, any>
  services?: {
    getNearByPoiList?: GetNearByInfos
    searchPoiList?: any
  }
  nearbyShowCurrent?: boolean
  onChange?: (poi: Poi) => void
  formatPoi?: (poi: Poi) => Poi
}

/**
 * 获取高德地图poi，主要用于临时的poi，如创建地址时选择poi。包含查询展示poi列表，选中poi相关逻辑
 * @returns
 */
export default function useAmapPoi({
  defaultPoi,
  currentLocation,
  services: { getNearByPoiList, searchPoiList } = {},
  nearbyShowCurrent = true,
  onChange,
  formatPoi = formatPoiInfo,
}: Options = {}) {
  const [currentPoi, setCurrentPoi] = useState(defaultPoi)
  const [pois, setPois] = useState([])
  const [nearbyPois, setNearbyPois] = useState([])

  // 设置临时的地址选择
  const onSelectPoi = async (poi: Poi) => {
    if (!poi.latitude || !poi.longitude) {
      setCurrentPoi({})
      return
    }

    const newPoiData = await formatPoi(poi)
    if (!newPoiData.city || !newPoiData.poiId) {
      const data = await getNearByPoiList({ latitude: poi.latitude, longitude: poi.longitude })
      newPoiData.city =
        newPoiData.city || data.city || data.cityname || data.pois?.[0]?.city || data.pois?.[0]?.cityname
      newPoiData.poiId = newPoiData.poiId || data.poiId || data.pois?.[0]?.poiId
      if (!newPoiData.city) return
    }
    setCurrentPoi(newPoiData)
    onChange && onChange(newPoiData)
  }

  // 根据城市/搜索关键字获取地址列表， 如不传city，则使用当前定位的城市
  const searchPois = async (params) => {
    const resultPois = (await searchPoiList({ ...params, city: params.city || currentLocation?.city })) || []
    setPois(resultPois)
    return resultPois
  }

  /**
   * 根据定位获取几条附近的Poi
   */
  const getNearbyPois = async (
    {
      latitude,
      longitude,
      size = 5,
      formatPois = (pois: Poi[]) => pois.map(formatPoi),
      showCurrent = nearbyShowCurrent,
    }: {
      latitude: string
      longitude: string
      size?: number
      formatPois?: ((pois: Poi) => Poi[]) | ((pois: Poi) => Promise<Poi[]>)
      showCurrent?: boolean
    } = {} as any
  ) => {
    const { pois, ...current } = await getNearByPoiList({ latitude, longitude })
    const showPois: Poi[] =
      pois?.splice(0, size).map((poi: Poi) => ({ ...poi, city: poi.city || current.city || current.cityname })) || []

    if (!current.latitude || !current.longitude || !showPois?.length) {
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
    getNearbyPois, // 获取附近的poi
    searchPois,
  }
}
