import React from 'react'
import useGeoLocation from '..'
import './index.css'

const DefaultIcon = (
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

export default function LocationBar() {
  const { location, loading, loadLocation } = useGeoLocation()

  return (
    <div className="location-bar">
      <div className="left">
        <span>{DefaultIcon}</span>
        <span>{loading ? '正在定位' : `${location?.latitude}, ${location?.longitude}`}</span>
      </div>
      <div className="right" onClick={loadLocation}>
        重新定位
      </div>
    </div>
  )
}
