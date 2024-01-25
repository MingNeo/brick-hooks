import { useEffect, useRef, useReducer } from 'react'
import { isBrowser, isNil } from '../utils'

export default function useQueryParams(queryStr?: string) {
  const [,forceUpdate] = useReducer(x => x + 1, 0)
  const queryParamsRef = useRef(getQueryParams(queryStr ?? (isBrowser ? window?.location?.search : '')))

  useEffect(() => {
    if(!isNil(queryStr)) {
      queryParamsRef.current = getQueryParams(queryStr)
      forceUpdate()
      return;
    }

    if (!isBrowser) {
      return;
    }

    const eventCallback = () => {
      queryParamsRef.current = getQueryParams(window?.location?.search)
      forceUpdate()
    }

    window.addEventListener('popstate', eventCallback, false);
    window.addEventListener('hashchange', eventCallback, false);
      
    return () => {
      window.removeEventListener('popstate', eventCallback);
      window.removeEventListener('hashchange', eventCallback);
    }
  }, [queryStr])

  const setQueryParams = (newQueryParams: Record<string, string | number>) => {
    queryParamsRef.current = newQueryParams
    forceUpdate()
    setQueryString(newQueryParams)
  }

  return [queryParamsRef.current, setQueryParams]
}

function getQueryParams(search = '') {
  try {
    const params = new URLSearchParams(`?${search.split('?')[1] || search}`)
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
