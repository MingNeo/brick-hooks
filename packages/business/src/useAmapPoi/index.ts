import { formatPoiInfo } from './helper'

interface Props {
  state?: Record<string, any>
  setState?: (nextState: any) => any
  services?: {
    getAmapNearby?: any
    searchPoiList?: any
    getPoiDelivery?: any
  }
}

/**
 * 获取高德地图poi，主要用于临时的poi，如创建地址时选择poi
 * @param props.setState setState可以直接使用useState，如果需要全局使用，可以替换成useStore的setState
 * @returns
 */
export default function useAmapPoi({
  state = {},
  setState,
  services: { getAmapNearby, searchPoiList, getPoiDelivery } = {},
}: Props = {}) {
  const { currentPoi, currentLocation } = state

  // 设置临时的地址选择
  const setPoi = async ({
    city,
    cityname,
    latitude,
    longitude,
    street,
    ...others
  }: Record<string, any>) => {
    const newPoiData: Record<string, any> = {
      city: null,
      latitude: null,
      longitude: null,
      street: '',
    }

    if (!latitude || !longitude) {
      setState((prevState) => ({ ...prevState, currentPoi: newPoiData }))
      return
    }
    if (!city && !cityname) {
      const data = await getAmapNearby({ latitude, longitude })
      if (!data.city && !data.cityname) return
      newPoiData.city = data.city || data.cityname
      newPoiData.poiId = newPoiData.poiId || data.pois?.[0]?.poiId
    } else {
      newPoiData.city = city
    }

    setState((prevState) => ({
      ...prevState,
      currentPoi: { ...newPoiData, latitude, longitude, street, ...others },
    }))
  }

  // 根据城市/搜索关键字获取地址列表
  const onsearchPoiList = async (params) => {
    const { city } = currentLocation || {}
    const data = await searchPoiList({ ...params, city: city || params.city })
    return data || []
  }

  /**
   * 根据定位获取几条附近的Poi
   */
  const getNearByListByPois = async ({
    latitude,
    longitude,
    size = 5,
    isAllCover = true,
    current = false,
  }: any = {}) => {
    const data = await getAmapNearby({ latitude, longitude })
    const pois =
      data.pois
        ?.splice(0, size)
        .map((poi: any) => ({ ...poi, city: data.city || data.cityname })) || []

    if (!data.latitude || !data.longitude) {
      return []
    }

    // 地图等当前定位列表里增加当前定位点
    if (current === true) {
      pois.unshift(formatPoiInfo(data)) // 名字太长优化
    }

    // 有时候需要查询poi是否在范围内
    if (!isAllCover && getPoiDelivery) {
      const isCovers = await getPoiDelivery(pois)
      return pois.map((poi = {}, i: number) => ({ ...poi, isCover: isCovers[i] || false }))
    }
    return pois.map((poi = {}) => ({ ...poi, isCover: true }))
  }

  return {
    currentPoi,
    setPoi,
    getNearbyPois: getNearByListByPois, // 获取附近的poi
    onsearchPoiList,
  }
}
