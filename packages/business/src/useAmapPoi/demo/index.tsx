import { useInput } from 'brick-hooks'
import React, { useEffect } from 'react'
import useAmapPoi from '..'
import useAmapLocation from '../../useAmapLocation'
import './index.css'

const defaultIcon = (
  <svg
    className="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="4449"
    width="20"
    height="20"
  >
    <path
      // eslint-disable-next-line max-len
      d="M512 1011.2l-25.6-25.6C268.8 748.8 160 569.6 160 448c0-198.4 153.6-352 352-352s352 153.6 352 352c0 128-108.8 307.2-326.4 537.6l-25.6 25.6zM512 160c-160 0-288 128-288 288 0 102.4 96 256 288 473.6 192-204.8 288-364.8 288-473.6 0-160-128-288-288-288z"
      p-id="4450"
    ></path>
    <path
      // eslint-disable-next-line max-len
      d="M512 608C422.4 608 352 537.6 352 448S422.4 288 512 288s160 70.4 160 160S601.6 608 512 608z m0-256c-51.2 0-96 44.8-96 96S460.8 544 512 544 608 499.2 608 448 563.2 352 512 352z"
      p-id="4451"
    ></path>
  </svg>
)

export default function Demo() {
  const { location, loading, loadLocation } = useAmapLocation({ amapKey: 'e2a0790d42bc5bfdebceb30b2b71f349' })
  const { currentPoi, pois, nearbyPois, onSelectPoi, setCurrentPois, getNearbyPois, searchPois } = useAmapPoi({
    amapKey: 'e2a0790d42bc5bfdebceb30b2b71f349',
  })

  useEffect(() => {
    location && setCurrentPois(location)
    getNearbyPois({ current: location })
  }, [location])

  console.log('🚀 ~ file: demo.tsx ~ line 8 ~ Demo ~ pois', pois)

  return (
    <div style={{ width: '200px' }}>
      <div className="location-bar">
        <div className="left">
          <span>{defaultIcon}</span>
          <span>{loading ? '正在定位' : currentPoi?.name}</span>
        </div>
        <div className="right" onClick={loadLocation}>
          重新定位
        </div>
      </div>
      <div>
        <h4>附近</h4>
        <ul style={{ fontSize: '13px', textAlign: 'left', padding: 0, listStyle: 'none' }}>
          {nearbyPois?.map((v) => (
            <li
              key={v.id}
              style={currentPoi?.name === v.name ? { background: 'blue', color: 'white' } : {}}
              onClick={() => onSelectPoi(v)}
            >
              {v.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4>搜索poi</h4>
        <Search searchPois={searchPois} />
        <ul>
          {pois?.map((v, i) => (
            <li key={i}>{v.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Search({ searchPois }) {
  const { value, bindEvent } = useInput('')
  return (
    <div>
      <input type="text" {...bindEvent} />
      <button onClick={() => searchPois({ address: value })}>搜索</button>
    </div>
  )
}
