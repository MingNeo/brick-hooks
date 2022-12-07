import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { isBrowser } from '../utils'

export default function useQueryParams(queryStr: string) {
  const [queryParams, setQueryParams] = useState(
    getQueryParams(queryStr || (isBrowser ? window?.location?.search : '')),
  )

  const { search } = useLocation()

  useEffect(() => {
    setQueryParams(getQueryParams(search))
  }, [search])

  return {
    queryParams,
    set: setQueryString,
    remove: removeQueryByKey,
  }
}

function getQueryParams(search = '') {
  try {
    const params = new URLSearchParams(`?${search.split('?')[1]}`)
    const result = {}
    params.forEach((value, key) => (result[key] = value))
    return result
  } catch (error) {
    return {}
  }
}

function setQueryString(params: object, refresh = true) {
  if (isBrowser) {
    const current = getQueryParams(window.location.search) || {}
    const search =
      '?' +
      Object.entries({ ...current, ...params })
        .filter((param) => param[1])
        .map((param) => `${param[0]}=${param[1]}`)
        .join('&')
    if (refresh) {
      window.location.search = search
    }
    window.history.replaceState(window.history.state, '', window.location.pathname + search)
  }
}

function removeQueryByKey(key: string, refresh = true) {
  if (isBrowser) {
    const current = getQueryParams(window.location.search) || {}
    const search =
      '?' +
      Object.entries(current)
        .filter((param) => param[1] && param[0] !== key)
        .map((param) => `${param[0]}=${param[1]}`)
        .join('&')
    if (refresh) {
      window.location.search = search
    }
    window.history.replaceState(window.history.state, '', window.location.pathname + search)
  }
}
