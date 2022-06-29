import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { formatTime as formatTimeByString, isBrowser } from '../utils'

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

type Running = () => number

interface StateProps {
  countup: number // 计时时间timestamp
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
  const [{ status, countup }, setState] = useState<StateProps>({
    status: 'idle',
    countup: 0,
  })

  const formatedCountup = useMemo(() => formatTime(countup, format), [countup, format])

  // 停止计时
  const stop = useCallback(
    (reset = false) => {
      clearInterval(intervalRef.current)
      clearTimeout(timerRef.current)
      statusRef.current = 'finished'
      onFinished && onFinished(countup, formatTime(countup, format))
      runningListRef.current = []
      setState((prev) => ({ ...prev, countup: reset ? 0 : prev.countup, status: 'finished' }))
    },
    [onFinished, countup, format]
  )

  // 重置计时
  const reset = useCallback(() => {
    clearInterval(intervalRef.current)
    clearTimeout(timerRef.current)
    statusRef.current = 'idle'
    runningListRef.current = []
    setState((prev) => ({ ...prev, countup: 0, status: 'idle' }))
  }, [])

  // 开始计时
  const start = useCallback(() => {
    onStart && onStart()
    setState((prev) => ({ ...prev, status: 'running' }))
    statusRef.current = 'running'
    let startTime = Date.now()
    const running = () => {
      // 每次都取当前时间比较，而非减去step的时间，防止进入后台等造成不准确的情况
      let currentCountup = Math.max(Date.now() - startTime, 0)
      const isOvertime = maxLength && currentCountup >= maxLength
      if (isOvertime && loopWhenEnd) {
        currentCountup = 0
        startTime = Date.now()
      }
      const formatedProgress = formatTime(currentCountup, format)

      setState((prev) => ({ ...prev, countup: currentCountup }))
      onStep && onStep(currentCountup, formatedProgress)

      // 超时并且不循环的话停止计时
      isOvertime && !loopWhenEnd && stop()
      return currentCountup
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
        const loop = () => {
          // 维护一个running函数数组，用于暂停和恢复
          const current = runningListRef.current.splice(0, 1)[0]
          const progress = current?.()
          if ((loopWhenEnd || progress > 0) && statusRef.current === 'running') {
            runningListRef.current.push(running)
            requestAnimFrame(loop)
          }
        }
        runningListRef.current.push(running)
        loop()
      }, 0)
    }
  }, [format, maxLength, onStart, onStep, step, stop, loopWhenEnd])

  useEffect(() => {
    autoRun && start()

    return () => {
      intervalRef.current && clearInterval(intervalRef.current)
      timerRef.current && clearTimeout(timerRef.current)
    }
  }, [])

  return { status, formatedCountup, countup, start, stop, reset }
}

function formatTime(timestamp: number, format: string | ((progress: number) => string)) {
  // eslint-disable-next-line no-nested-ternary
  return typeof format === 'string'
    ? formatTimeByString(timestamp, format)
    : typeof format === 'function'
    ? format(timestamp)
    : ''
}
