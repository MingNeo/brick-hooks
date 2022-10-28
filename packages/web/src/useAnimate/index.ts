import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useIsoEffect } from 'brick-hooks'
import uuid from 'uuid'
import useStyle from '../useStyle'
import createDangerousStringForStyles, { bounceKeyFrames } from './helper'

interface Style extends Record<string, string> {}

interface Options {
  from?: Style
  to?: Style | Style[]
  range?: number[]
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
}: Options = {}): [Record<string, any>, { start: (options: { reverse?: boolean }) => void; reset: () => void }] {
  const uuidRef = useRef()
  if (!uuidRef.current) {
    uuidRef.current = uuid()
  }

  const fromRef = useRef(defaultUseFrom ? from : {})
  const toRef = useRef(to)
  toRef.current = to
  const rangeRef = useRef(range)
  rangeRef.current = range
  const timerRef = useRef<any>()

  const [style, setStyle] = useState(fromRef.current)
  const id = useMemo(() => keyframesName ?? `keyframe-${uuidRef.current}`, [keyframesName])

  useEffect(() => {
    console.log('first')
  }, [])

  useStyle(
    useMemo(() => {
      if (!keyframesName && fromRef.current && toRef.current) {
        const styleContent = getKeyFramesStyle({
          id,
          from: fromRef.current,
          to: toRef.current,
          range: rangeRef.current,
          easing,
        })
        return `${styleContent}`
      } else {
        return undefined
      }
    }, [easing, id, keyframesName]),
    id,
    {
      removeOnDestroy: true,
    },
  )

  const reset = useCallback(() => setStyle({ ...fromRef.current }), [])

  const start = useCallback(
    ({ reverse: currentReverse }: { reverse?: boolean } = {}) => {
      if (!timerRef.current) {
        reset()
        timerRef.current = setTimeout(() => {
          const animation = `${duration}ms ${easing === 'bounce' ? 'linear' : easing} ${delay}ms ${
            loop === -1 ? 'infinite' : loop
          } ${currentReverse || reverse ? 'reverse' : 'normal'} both running ${id}`

          setStyle({
            backfaceVisibility: 'hidden',
            // perspective: '1000',
            ...fromRef.current,
            animation,
            WebkitAnimation: animation,
          })
          timerRef.current = null
        }, 0)
      }
    },
    [reset, duration, easing, delay, loop, id, reverse],
  )

  useIsoEffect(() => {
    autoRun && start()
  }, [autoRun, start])

  useEffect(() => {
    return () => {
      timerRef.current && clearTimeout(timerRef.current)
      reset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
