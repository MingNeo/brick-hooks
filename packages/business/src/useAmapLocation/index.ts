import { useAsync } from 'brick-hooks'
import { useEffect, useState } from 'react'
import { getLocationByAmap } from './helper'

type Location = {
  latitude?: string
  longitude?: string
  city?: string
  [x: string]: any
}

/**
 * 使用高德地图获取定位
 * @returns
 */
export default function useAmapLocation({ amapKey, getLocation = getLocationByAmapWebFn(amapKey) }: any = {}) {
  const [location, setLocation] = useState<Location>()
  const loadLocation = () =>
    getLocation()
      .then((data: Location) => {
        setLocation(data)
        return data
      })
      .catch(Promise.reject)

  const [loadLocationAsync, { loading }] = useAsync(loadLocation)

  useEffect(() => {
    loadLocationAsync()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    location,
    loading,
    loadLocation: loadLocationAsync,
  }
}

function getLocationByAmapWebFn(amapKey) {
  return () => getLocationByAmap(amapKey)
}
