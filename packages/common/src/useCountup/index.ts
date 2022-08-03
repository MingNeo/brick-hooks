import { useCallback, useEffect, useRef } from 'react'
import useForceRender from '../useForceRender'
import { formatTime as formatTimeByString, isBrowser, setIntervalBySetTimeout, clearTimer } from '../utils'

interface CountupProps {
  format?: string | ((progress: number) => string) // 展示的格式
  step?: number // 循环的时间
  onStart?: () => void
  onStep?: (countup: number, formatedCountup: string) => void
  onFinished?: (countup: number, formatedCountup: string) => void
  autoRun?: boolean
  maxLength?: number // 最长时间,格式毫秒,超过时根据loopWhenEnd进行重置或停止计时
  loopWhenEnd?: boolean // 是否循环计时，值为true时计时结束时自动从0重新开始计时, 否则停止
}

type Running = () => { countup: number; formatedCountup: string }

interface StateProps {
  status: 'idle' | 'running' | 'pause' | 'finished'
}

/**
 * 计时hooks，可以用于天、时、分、秒、毫秒的计时
 */
export default function useCountup({
  onStart,
  onStep,
  onFinished,
  step,
  format = 'dd hh:mm:ss.SSS',
  maxLength,
  autoRun = true,
  loopWhenEnd = false,
}: CountupProps) {
  const intervalRef = useRef<number | null>(null)
  const timerRef = useRef<number | null>(null)
  const statusRef = useRef<string>('idle')
  const runningListRef = useRef<Running[]>([])
  const countUpRef = useRef<number>(0)

  const forceUpdate = useForceRender()

  const setCountup = useCallback((value, shouldForceUpdate = false) => {
    countUpRef.current = value
    shouldForceUpdate && forceUpdate()
  }, [])

  const formatedCountup = formatTime(countUpRef.current, format)

  // 停止计时
  const stop = useCallback(
    (reset = false) => {
      clearTimer(intervalRef.current)
      clearTimeout(timerRef.current)
      statusRef.current = 'finished'
      onFinished && onFinished(countUpRef.current, formatTime(countUpRef.current, format))
      runningListRef.current = []
      setCountup(reset ? 0 : countUpRef.current, true)
    },
    [onFinished, format]
  )

  // 重置计时
  const reset = useCallback(() => {
    clearTimer(intervalRef.current)
    clearTimeout(timerRef.current)
    statusRef.current = 'idle'
    runningListRef.current = []
    setCountup(0, true)
  }, [])

  const getCurrentCountup = useCallback(
    (startTime) => {
      // 每次都取当前时间比较，而非减去step的时间，防止进入后台等造成不准确的情况
      let currentCountup = Math.max(Date.now() - startTime, 0)
      const isOvertime = maxLength && currentCountup >= maxLength
      if (isOvertime) {
        if (loopWhenEnd) {
          currentCountup = 0
          startTime = Date.now()
        } else {
          currentCountup = maxLength
        }
      }
      const formatedProgress = formatTime(currentCountup, format)

      setCountup(currentCountup, true)
      onStep && onStep(currentCountup, formatedProgress)

      // 超时并且不循环的话停止计时
      isOvertime && !loopWhenEnd && stop()
      return { countup: currentCountup, formatedCountup: formatedProgress }
    },
    [maxLength, loopWhenEnd, onStep, format]
  )

  // 开始计时
  const start = useCallback(() => {
    onStart && onStart()
    let startTime = Date.now()
    const running = () => getCurrentCountup(startTime)

    const raf = isBrowser ? window.requestAnimationFrame || (window as any).webkitRequestAnimationFrame : undefined
    // 如果不计毫秒、或者指定步长超过1/60秒、或在非浏览器端，则使用setTimeout
    const isUseInterval = !raf || (step && step >= 17) || (typeof format === 'string' && !/S+/gi.test(format))

    timerRef.current = setTimeout(() => {
      statusRef.current = 'running'
      runningListRef.current.push(running)
      const loop = () => {
        clearTimer(intervalRef.current)
        clearTimeout(timerRef.current)
        // const progress = running()
        // 维护一个running函数数组，用于暂停和恢复
        const current = runningListRef.current.splice(0, 1)[0]
        const progress = current?.()
        if ((loopWhenEnd || progress.countup > 0) && statusRef.current === 'running') {
          runningListRef.current.push(running)
          intervalRef.current = isUseInterval ? setIntervalBySetTimeout(running, step) : raf(loop)
        }
      }
      loop()
    }, 0)
  }, [format, onStart, step, loopWhenEnd, getCurrentCountup])

  useEffect(() => {
    autoRun && start()

    return () => {
      clearTimer(intervalRef.current)
      timerRef.current && clearTimeout(timerRef.current)
    }
  }, [])

  return {
    status: statusRef.current,
    formatedCountup,
    countup: countUpRef.current,
    start,
    stop,
    reset,
    getCurrentCountup,
  }
}

function formatTime(timestamp: number, format: string | ((progress: number) => string)) {
  // eslint-disable-next-line no-nested-ternary
  return typeof format === 'string'
    ? formatTimeByString(timestamp, format)
    : typeof format === 'function'
    ? format(timestamp)
    : ''
}
