import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  formatTime as formatTimeByString,
  isBrowser,
  getTimeByString,
  getformatTimeInfo,
  invariant,
  setIntervalBySetTimeout,
  clearTimer,
} from '../utils'

interface CountDownOptions {
  total?: number // 倒计时时间，格式毫秒
  endTime?: number | string // 结束时间，时间戳格式 或 "yyyy-mm-dd HH:MM:SS"
  format?: string | ((progress: number) => string) // 展示的格式
  step?: number // 循环的时间
  onStart?: () => void
  onStep?: (step: number, formatedProgress: string) => void
  onFinished?: () => void
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
  const intervalRef = useRef<number | null>(null)
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

  const formatedCountdown = useMemo(() => formatTime(countdown, format), [countdown, format])

  // 停止倒计时
  const stop = useCallback(() => {
    clearTimer(intervalRef.current)
    clearTimeout(timerRef.current)
    setState((prev) => ({ ...prev, countdown: 0, status: 'finished' }))
    statusRef.current = 'finished'
    onFinished?.()
  }, [onFinished, setState])

  // 开始倒计时
  const start = useCallback(() => {
    clearTimer(intervalRef.current)
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

    const raf =
      window.requestAnimationFrame ||
      (window as any).webkitRequestAnimationFrame ||
      // eslint-disable-next-line no-undef
      ((callback: TimerHandler) => setTimeout(callback, 1000 / 60))
    const isUseInterval = (step && step >= 17) || !isBrowser

    timerRef.current = setTimeout(() => {
      const loop = () => {
        clearTimer(intervalRef.current)
        clearTimeout(timerRef.current)
        const progress = running()
        if (progress > 0 && statusRef.current === 'running') {
          intervalRef.current = isUseInterval ? setIntervalBySetTimeout(running, step) : raf(loop)
        }
      }
      loop()
    }, 0)
  }, [endTime, format, onStart, onStep, step, stop, total])

  useEffect(() => {
    autoRun && start()

    return () => {
      clearTimer(intervalRef.current)
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
