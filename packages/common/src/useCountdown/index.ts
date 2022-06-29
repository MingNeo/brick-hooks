import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { formatTime as formatTimeByString, getTimeByString, invariant, isBrowser } from '../utils'

interface CountDownProps {
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
  format = 'dd hh:mm:ss',
  endTime,
  total,
  autoRun = true,
}: CountDownProps) {
  invariant(!!endTime || !!total, 'endTime and total need least one')
  invariant(!endTime || !total, 'endTime and total need only one')
  const intervalRef = useRef<number | null>(null)
  const timerRef = useRef<number | null>(null)
  const statusRef = useRef<string>('idle')
  const [{ endTime: endTimeState, status, countdown }, setState] = useState<StateProps>({
    status: 'idle',
    endTime: typeof endTime === 'string' ? getTimeByString(endTime) : endTime || Date.now() + (total || 0),
    countdown: 0,
  })

  const formatedCountdown = useMemo(() => formatTime(countdown, format), [countdown, format])

  // 停止倒计时
  const stop = useCallback(() => {
    clearInterval(intervalRef.current)
    clearTimeout(timerRef.current)
    setState((prev) => ({ ...prev, countdown: 0, status: 'finished' }))
    statusRef.current = 'finished'
    onFinished && onFinished()
  }, [onFinished, setState])

  // 开始倒计时
  const start = useCallback(() => {
    onStart && onStart()
    setState((prev) => ({ ...prev, status: 'running' }))
    statusRef.current = 'running'
    const running = () => {
      // 每次都取当前时间比较，而非减去step的时间，防止进入后台等造成不准确的情况
      const currentCountDown = Math.max(endTimeState - Date.now(), 0)
      const formatedProgress = formatTime(currentCountDown, format)

      setState((prev) => ({ ...prev, countdown: currentCountDown }))
      onStep && onStep(currentCountDown, formatedProgress)

      currentCountDown === 0 && stop()
      return currentCountDown
    }

    if ((step && step >= 17) || !isBrowser) {
      intervalRef.current = setInterval(() => {
        running()
      }, step)
    } else {
      const requestAnimFrame =
        window.requestAnimationFrame ||
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.webkitRequestAnimationFrame ||
        ((callback) => {
          window.setTimeout(callback, 1000 / 60)
        })

      timerRef.current = setTimeout(() => {
        (function loop() {
          const progress = running()
          if (progress > 0 && statusRef.current === 'running') {
            requestAnimFrame(loop)
          }
        })()
      }, 0)
    }
  }, [endTimeState, format, onStart, onStep, setState, step, stop])

  useEffect(() => {
    autoRun && start()

    return () => {
      intervalRef.current && clearInterval(intervalRef.current)
      timerRef.current && clearTimeout(timerRef.current)
    }
  }, [])

  return { status, endTime: endTimeState, formatedCountdown, countdown, start, stop }
}

function formatTime(timestamp: number, format: string | ((progress: number) => string)) {
  // eslint-disable-next-line no-nested-ternary
  return typeof format === 'string'
    ? formatTimeByString(timestamp, format)
    : typeof format === 'function'
    ? format(timestamp)
    : ''
}
