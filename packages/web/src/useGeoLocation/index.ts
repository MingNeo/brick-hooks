/* eslint-disable no-undef */
import { useAsync } from 'brick-hooks'
import { useCallback, useEffect, useReducer, useRef } from 'react'
import { isBrowser } from '../utils'

export const defaultNavigator = isBrowser ? window.navigator : undefined

export interface UseGeolocationOptions {
  enableHighAccuracy?: boolean
  maximumAge?: number
  timeout?: number
  navigator?: Navigator
  watch?: boolean
}

/**
 * 获取浏览器geo定位
 */
export default function useGeolocation(options: UseGeolocationOptions = {}) {
  const {
    enableHighAccuracy = true,
    maximumAge = 30000,
    timeout = 27000,
    navigator = defaultNavigator,
    watch = false,
  } = options

  const isSupportedRef = useRef(!!(navigator && 'geolocation' in navigator))

  const [, forceUpdate] = useReducer((prev) => prev + 1, 0)

  const timestamp = useRef<number | null>(null)
  const error = useRef(null)
  const coords = useRef({
    accuracy: 0,
    latitude: Infinity,
    longitude: Infinity,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null,
  })

  const updatePosition = (position) => {
    timestamp.current = position.timestamp
    coords.current = {
      accuracy: position.coords.accuracy,
      altitude: position.coords.altitude,
      altitudeAccuracy: position.coords.altitudeAccuracy,
      heading: position.coords.heading,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      speed: position.coords.speed,
    }
    error.current = null
    forceUpdate()
  }

  const onError = (err) => {
    console.log(err)
    error.current = err
    forceUpdate()
  }

  const getCurrentPosition = useCallback(() => {
    return new Promise((resolve, reject) => {
      navigator!.geolocation.getCurrentPosition(
        (position) => {
          updatePosition(position)
          resolve(position)
        },
        (error) => {
          onError(error)
          reject(error)
        },
        {
          enableHighAccuracy,
          maximumAge,
          timeout,
        },
      )
    })
  }, [enableHighAccuracy, maximumAge, navigator, timeout])

  const [getCurrentPositionAsync, { loading }] = useAsync(getCurrentPosition)

  useEffect(() => {
    let watcher: number
    if (isSupportedRef.current) {
      if (watch) {
        watcher = navigator!.geolocation.watchPosition(updatePosition, onError, {
          enableHighAccuracy,
          maximumAge,
          timeout,
        })
      } else {
        getCurrentPositionAsync()
      }
    }

    return () => {
      if (watcher && navigator) navigator.geolocation.clearWatch(watcher)
    }
  }, [enableHighAccuracy, getCurrentPositionAsync, maximumAge, navigator, timeout, watch])

  return {
    isSupported: isSupportedRef.current,
    location: coords.current,
    timestamp: timestamp.current,
    error: error.current,
    loading,
    loadLocation: getCurrentPositionAsync,
  }
}

export type UseGeolocationReturn = ReturnType<typeof useGeolocation>
