import React, { useEffect } from 'react'
import useAmapPoi from '.'

export default function Demo() {
  const { currentPoi, pois, nearbyPois, onSelectPoi, setCurrentPos, getNearbyPois, searchPois } = useAmapPoi({
    amapKey: 'e2a0790d42bc5bfdebceb30b2b71f349',
  })

  useEffect(() => {
    setCurrentPos({ latitude: '36.062687', longitude: '120.384599' })
  }, [])

  console.log('🚀 ~ file: demo.tsx ~ line 8 ~ Demo ~ pois', pois)

  return (
    <div>
      <div>{currentPoi?.city}</div>
      <div style={{ display: 'flex' }}>
        <ul>
          {pois?.map((v, i) => (
            <li key={i}>{v.name}</li>
          ))}
        </ul>
        <ul>
          {nearbyPois?.map((v) => (
            <li
              key={v.id}
              style={{ background: currentPoi?.name === v.name ? 'blue' : 'white' }}
              onClick={() => onSelectPoi(v)}
            >
              {v.name}
            </li>
          ))}
        </ul>
      </div>

      <button onClick={() => searchPois({ city: '青岛', address: '五四广场' })}>搜索五四广场</button>
      <button onClick={() => getNearbyPois({ current: { latitude: '36.062687', longitude: '120.384599' } })}>
        获取五四广场附近
      </button>
    </div>
  )
}
