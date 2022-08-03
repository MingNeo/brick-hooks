import React, { useEffect } from 'react'
import useAmapPoiWeb from '.'
import { setAmapKey, loadScript } from './helper'

setAmapKey('e2a0790d42bc5bfdebceb30b2b71f349')
export default function Demo() {
  useEffect(() => {
    loadScript()
  }, [])
  const { currentPoi, pois, nearbyPois, onSelectPoi, getNearbyPois, searchPois } = useAmapPoiWeb({})

  return (
    <div>
      {JSON.stringify(currentPoi)}
      <div style={{ display: 'flex' }}>
        <ul>
          {pois?.map((v) => (
            <li>{v.name}</li>
          ))}
        </ul>
        <ul>
          {nearbyPois?.map((v) => (
            <li style={{ background: currentPoi?.name === v.name ? 'blue' : 'white' }} onClick={() => onSelectPoi(v)}>
              {v.name}
            </li>
          ))}
        </ul>
      </div>

      <button onClick={() => searchPois({ city: '青岛', address: '五四广场' })}>搜索五四广场</button>
      <button onClick={() => getNearbyPois({ latitude: '36.062687', longitude: '120.384599' })}>
        获取五四广场附近
      </button>
    </div>
  )
}
