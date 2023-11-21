import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { formatTime as formatTimeByString, isBrowser, getTimeByString, getformatTimeInfo, invariant } from '../utils'

interface CountDownOptions {
  /**
   * @description 倒计时时长，格式毫秒, 与endTime二者只能填一个
   */
  total?: number
  /**
   * @description 结束时间，时间戳格式 或 "yyyy-mm-dd HH:MM:SS"
   */
  endTime?: number | string
  /**
   * @description 展示的格式，如"hh:mm:ss", 或使用函数自行格式化
   */
  format?: string | ((progress: number) => string)
  /**
   * @description 倒计时间隔的时间，默认为1000，小于17时按浏览器帧率显示
   */
  step?: number
  /**
   * @description 开始倒计时回调
   */
  onStart?: () => void
  /**
   * @description 倒计时过程中回调
   */
  onStep?: (step: number, formatedProgress: string) => void
  /**
   * @description 倒计时结束回调
   */
  onFinished?: () => void
  /**
   * @description 自定义渲染
   */
  autoRun?: boolean
}

interface StateProps {
  endTime: number // 结束时间
  countdown: number // 倒计时时间timestamp
  status: 'idle' | 'running' | 'pause' | 'resumed' | 'finished'
}

export default function useCountDown({
  onStart,
  onStep,
  onFinished,
  step,
  format = 'hh:mm:ss',
  endTime,
  total,
  autoRun = true,
}: CountDownOptions) {
  invariant(!!endTime || !!total, 'endTime and total need least one')
  invariant(!endTime || !total, 'endTime and total need only one')
  const intervalRef = useRef({ timer: undefined, type: '' })
  const timerRef = useRef<any>(null)
  const statusRef = useRef<string>('idle')
  const endTimeRef = useRef(
    typeof endTime === 'string' ? getTimeByString(endTime) : endTime || Date.now() + (total || 0),
  )
  const [{ endTime: endTimeState, status, countdown }, setState] = useState<StateProps>({
    status: 'idle',
    endTime: endTimeRef.current,
    countdown: 0,
  })

  const timeoutType = useRef(getTimeoutType(step))

  const formatedCountdown = useMemo(() => formatTime(countdown, format), [countdown, format])
  const timeoutFn = useMemo(() => getTimeoutMethod(step), [step])
  intervalRef.current.type = timeoutFn.type

  // 停止倒计时
  const stop = useCallback(() => {
    clearTimer(intervalRef.current.timer, timeoutType.current)
    clearTimeout(timerRef.current)
    setState((prev) => ({ ...prev, countdown: 0, status: 'finished' }))
    statusRef.current = 'finished'
    onFinished?.()
  }, [onFinished, setState])

  // 开始倒计时
  const start = useCallback(() => {
    clearTimer(intervalRef.current.timer, timeoutType.current)
    onStart?.()
    endTimeRef.current = !endTime ? Date.now() + (total || 0) : endTimeRef.current
    setState((prev) => ({ ...prev, status: 'running', endTime: endTimeRef.current }))
    statusRef.current = 'running'

    const running = () => {
      // 每次都取当前时间比较，而非减去step的时间，防止进入后台等造成不准确的情况
      const currentCountDown = Math.max(endTimeRef.current - Date.now(), 0)
      const formatedProgress = formatTime(currentCountDown, format)

      setState((prev) => ({ ...prev, countdown: currentCountDown }))
      onStep?.(currentCountDown, formatedProgress)

      currentCountDown === 0 && stop()
      return currentCountDown
    }

    timerRef.current = setTimeout(() => {
      const loop = () => {
        clearTimer(intervalRef.current.timer, timeoutType.current)
        clearTimeout(timerRef.current)

        const progress = running()

        if (progress > 0 && statusRef.current === 'running') {
          intervalRef.current.timer = timeoutFn(loop)
        }
      }
      loop()
    }, 0)
  }, [endTime, format, onStart, onStep, stop, total, timeoutFn])

  useEffect(() => {
    autoRun && start()

    const interval = intervalRef.current
    const timerType = timeoutType.current
    return () => {
      clearTimer(interval.timer, timerType)
      timerRef.current && clearTimeout(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    status,
    endTime: endTimeState,
    formatedCountdown,
    countdown,
    ...getformatTimeInfo(countdown),
    start,
    stop,
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

function clearTimer(timer: number, timeoutType: string) {
  if (!timer) return

  if (timeoutType === 'raf') {
    try {
      const clearRaf = window.cancelAnimationFrame || (window as any).webkitCancelAnimationFrame
      clearRaf(timer)
    } catch (error) {}
    return
  }

  if (timeoutType === 'timeout') {
    try {
      clearTimeout(timer)
    } catch (error) {}
    return
  }

  try {
    clearInterval(timer)
  } catch (error) {}
}

type TimerCallback = { (callback: () => void): number; type?: any }

function getTimeoutType(step: number) {
  return isBrowser && (window.requestAnimationFrame || (window as any).webkitRequestAnimationFrame) && step < 17 ? 'raf' : 'timeout'
}

function getTimeoutMethod(step: number): TimerCallback {
  if (getTimeoutType(step) === 'raf') {
    return window.requestAnimationFrame || (window as any).webkitRequestAnimationFrame
  }

  const delay = (step && step >= 17) || !isBrowser ? step : 1000 / 60
  let offset = 0 // 误差时间
  let count = 0
  let nextDelay = delay
  const start = Date.now()

  return (callback: () => void) => {
    nextDelay = delay - offset
    return setTimeout(() => {
      offset = Date.now() - start - count * delay
      count++
      callback()
    }, nextDelay) as unknown as number
  }
}
