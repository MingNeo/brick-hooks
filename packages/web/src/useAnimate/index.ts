import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useIsoEffect } from 'brick-hooks'
import uuid from 'uuid'
import useStyle from '../useStyle'
import createDangerousStringForStyles, { bounceKeyFrames } from './helper'

interface Options {
  from?: any
  to?: any
  range?: any
  duration?: number
  easing?: 'linear' | 'ease' | 'in' | 'out' | 'inOut' | 'bounce'
  delay?: number
  loop?: number
  autoRun?: boolean
  keyframesName?: string
  shouldReset?: boolean
  defaultUseFrom?: boolean
  reverse?: boolean
}

export default function useAnimate({
  from,
  to,
  range,
  duration = 500,
  easing = 'ease',
  delay = 0,
  loop = 1,
  autoRun = true,
  keyframesName,
  defaultUseFrom = true,
  reverse = false,
}: Options = {}): any[] {
  const uuidRef = useRef()
  if (!uuidRef.current) {
    uuidRef.current = uuid()
  }

  const fromRef = useRef(defaultUseFrom ? from : {})
  const timerRef = useRef<any>()

  const [style, setStyle] = useState(fromRef.current)
  const id = useMemo(() => keyframesName ?? `keyframe-${uuidRef.current}`, [keyframesName])

  useStyle(!keyframesName && from && to ? getKeyFramesStyle({ id, from, to, range, easing }) : undefined, id, {
    removeOnDestroy: true,
  })

  const reset = useCallback(() => setStyle({ ...fromRef.current }), [])

  const start = useCallback(() => {
    if (!timerRef.current) {
      reset()
      timerRef.current = setTimeout(() => {
        const animation = `${duration}ms ${easing === 'bounce' ? 'linear' : easing} ${delay}ms ${
          loop === -1 ? 'infinite' : loop
        } ${reverse ? 'reverse' : 'normal'} both running ${id}`
        setStyle({
          ...fromRef.current,
          animation,
          WebkitAnimation: animation,
        })
        timerRef.current = null
      }, 0)
    }
  }, [reset, duration, easing, delay, loop, id, reverse])

  useIsoEffect(() => {
    autoRun && start()
  }, [autoRun, start])

  useEffect(() => {
    return () => {
      timerRef.current && clearTimeout(timerRef.current)
      reset()
    }
  }, [])

  return [style, { start, reset }]
}

// 对单条style值进行处理
function getKeyFramesStyle({ id, from, to, range, easing }) {
  const isMulti = Array.isArray(to)
  const inputRange = range?.length
    ? range
    : isMulti
    ? to.reduce((prev, curr, i) => [...prev, i === to.length - 1 ? 1 : (1 / to.length) * (i + 1)], [0])
    : [0, 1]
  const outputRange = isMulti ? [from, ...to] : [from, to]

  return `
    @keyframes ${id} {
      ${easing === 'bounce' ? bounceKeyFrames(outputRange[outputRange.length - 1]) : ''}

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
