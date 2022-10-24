import { useCallback, useEffect, useRef, useState } from 'react'

type Callback = (...args: any[]) => Promise<any>
interface Options {
  interval?: number // 轮询间隔时间
  retryCount?: number // 轮询失败后重试次数
  onSuccess?: (data: any) => boolean | void // 成功后的回调函数
  onFail?: (data: any) => void // 失败后的回调函数
}

/**
 * 轮询一个请求
 * @param callback
 * @param options
 * @returns
 */
const usePolling = (callback: Callback, options: Options) => {
  const { interval = 3000, retryCount = 0, onSuccess, onFail } = options
  // callback 是必填的
  if (!callback) {
    throw new Error('No callback provided to poll. ')
  }
  const [{ isPolling, data, error, pollingCount }, setState] = useState({
    isPolling: false,
    data: undefined,
    error: null,
    pollingCount: 0,
  })

  const infoRef = useRef<{
    interval?: number
    retryCount?: number
    isPolling?: boolean
    isMounted?: boolean
    pollTimer?: number
    callback?: Callback
    onSuccess?: (data: any) => any
    onFail?: (data: any) => any
  }>({
    isMounted: false,
    retryCount,
  })
  infoRef.current.interval = interval
  infoRef.current.isPolling = isPolling
  infoRef.current.callback = callback
  infoRef.current.onSuccess = onSuccess
  infoRef.current.onFail = onFail

  const stopPolling = () => {
    if (infoRef.current.pollTimer) {
      clearTimeout(infoRef.current.pollTimer)
      infoRef.current.pollTimer = null
    }
    if (infoRef.current.isMounted) {
      setState((prev) => ({ ...prev, isPolling: false }))
    }
  }

  const runPolling = useCallback(() => {
    infoRef.current.pollTimer = setTimeout(async () => {
      const { callback, onSuccess, onFail, isPolling } = infoRef.current
      callback()
        .then((data) => {
          // 如果返回true，则继续轮询
          const continuePolling = onSuccess?.(data)
          setState((prev) => ({ ...prev, data, pollingCount: prev.pollingCount + 1, error: null }))
          isPolling && continuePolling ? runPolling() : stopPolling()
        })
        .catch((err) => {
          onFail?.(err)
          setState((prev) => ({ ...prev, pollingCount: prev.pollingCount + 1, error: err }))
          if (infoRef.current.retryCount > 0) {
            infoRef.current.retryCount--
            runPolling()
          } else {
            stopPolling()
          }
        })
    }, infoRef.current.interval)
  }, [])

  const startPolling = useCallback(() => {
    // 开始时重置重试次数
    infoRef.current.retryCount = retryCount
    setState((prev) => ({ ...prev, pollingCount: 0, isPolling: true }))
    runPolling()
  }, [retryCount, runPolling])

  useEffect(() => {
    const info = infoRef.current
    info.isMounted = true
    startPolling()
    return () => {
      info.isMounted = false
      stopPolling()
    }
  }, [startPolling])

  return { isPolling, pollingCount, result: data, error, startPolling, stopPolling }
}

export default usePolling
