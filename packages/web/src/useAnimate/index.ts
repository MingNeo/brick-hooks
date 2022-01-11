import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import uuid from 'uuid'
import useStyle from '../useStyle'
import createDangerousStringForStyles from './helper'

interface Options {
  from?: any
  to?: any
  range?: any
  duration?: number
  easing?: 'linear' | 'ease' | 'in' | 'out' | 'inOut'
  delay?: number
  loop?: number
  autoRun?: boolean
  keyframesName?: string
  shouldReset?: boolean
}

export default function useCssAnimate({
  from,
  to,
  range,
  duration = 500,
  easing = 'ease',
  delay = 0,
  loop = 1,
  autoRun = true,
  keyframesName
}: Options = {}): any[] {
  const uuidRef = useRef()
  if (!uuidRef.current) {
    uuidRef.current = uuid()
  }

  const fromRef = useRef(from)
  const timerRef = useRef<number>()

  const [style, setStyle] = useState(fromRef.current)
  const id = useMemo(() => keyframesName ?? `keyframe-${uuidRef.current}`, [keyframesName])

  useStyle(!keyframesName && from && to ? getKeyFramesStyle({ id, from, to, range }) : undefined, id, {
    removeOnDestroy: true,
  })

  const reset = useCallback(() => setStyle({ ...fromRef.current }), [])

  const start = useCallback(() => {
    if (!timerRef.current) {
      reset()
      timerRef.current = setTimeout(() => {
        setStyle({
          ...fromRef.current,
          animation: `${duration}ms ${easing} ${delay}ms ${loop === -1 ? 'infinite' : loop} normal both running ${id}`,
          WebkitAnimation: `${duration}ms ${easing} ${delay}ms ${
            loop === -1 ? 'infinite' : loop
          } normal both running ${id}`,
        })
        timerRef.current = null
      }, 0)
    }
  }, [reset, duration, easing, delay, loop, id])

  useEffect(() => {
    autoRun && start()
  }, [autoRun, start])

  useEffect(() => {
    return () => {
      timerRef.current && clearTimeout(timerRef.current)
    }
  }, [])

  return [style, { start, reset }]
}

// 对单条style值进行处理
function getKeyFramesStyle({ id, from, to, range }) {
  const isMulti = Array.isArray(to)
  const inputRange = range?.length
    ? range
    : isMulti
    ? to.reduce((prev, curr, i) => [...prev, i === to.length - 1 ? 1 : (1 / to.length) * (i + 1)], [0])
    : [0, 1]
  const outputRange = isMulti ? [from, ...to] : [from, to]

  return `
  @keyframes ${id} {
    ${inputRange
      .map((v, i) => {
        return `
      ${v * 100}% {
        ${createDangerousStringForStyles(outputRange[i])}
      }
      `
      })
      .join('')}
  }
`
}
