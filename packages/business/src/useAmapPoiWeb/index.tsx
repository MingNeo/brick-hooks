import { useState } from 'react'
import useAmapPoi, { GetNearByInfos } from '../useAmapPoi'
import { getNearByInfos, searchPois } from './helper'

type Poi = Record<string, any>

/**
 * 获取高德地图poi，主要用于临时的poi，如创建地址时选择poi。包含查询展示poi列表，选中poi相关逻辑
 * @returns
 */
export default function useAmapPoiWeb({
  defaultPoi,
  currentLocation,
  services: { getNearByPoiList = getNearByInfos, searchPoiList = searchPois } = {},
  nearbyShowCurrent = true,
  onChange,
  formatPoi,
}: {
  defaultPoi?: Poi
  currentLocation?: Record<string, any>
  services?: {
    getNearByPoiList?: GetNearByInfos
    searchPoiList?: any
  }
  nearbyShowCurrent?: boolean
  onChange?: (poi: Poi) => void
  formatPoi?: (poi: Poi, getNearByPoiList?: any) => Poi
} = {}) {
  return useAmapPoi({
    defaultPoi,
    currentLocation,
    services: { getNearByPoiList, searchPoiList },
    nearbyShowCurrent,
    onChange,
    formatPoi,
  })
}
