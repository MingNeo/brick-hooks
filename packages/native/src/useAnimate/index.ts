import { useMemo, useRef } from 'react'
import useAnimateValue from '../useAnimateValue'

const transformKeys = [
  'matrix',
  'perspective',
  'rotate',
  'rotateX',
  'rotateY',
  'rotateZ',
  'scale',
  'scaleX',
  'scaleY',
  'translateX',
  'translateY',
  'skewX',
  'skewY',
]

interface AnimateOptions {
  from: Record<string, any>
  to:  Record<string, any> | Record<string, any>[]
  range?: number[]
  onAnimationEnd?: any
  loop?: number
  duration?: number
  delay?: number
  easing?: any
  isInteraction?: boolean
  useNativeDriver?: boolean
  autoRun?: boolean
  shouldReset?: boolean
}

export default function useAnimate({
  from,
  to,
  range = [],
  ...config
}: AnimateOptions): [any, { start: any; reset: any; animatedValue: any; interpolate: any }] {
  const styleRef = useRef<any>({ from, to })
  styleRef.current = { from, to }

  const { interpolate, start, reset, animatedValue } = useAnimateValue({
    from: 0,
    to: 1,
    ...config,
  })

  return useMemo(() => {
    const styles = Object.entries(styleRef.current.from || {}).reduce((prev: any, [key, initialStyle]) => {
      const currTo = Array.isArray(styleRef.current.to)
        ? styleRef.current.to.map((v) => v[key] ?? initialStyle)
        : styleRef.current.to[key]
      const current = getInterpolateStyle({ interpolate, to: currTo, initialStyle, range })

      if (transformKeys.includes(key)) {
        prev.transform = [...(prev.transform || []), { [key]: current }]
        return prev
      }
      return { ...prev, [key]: current }
    }, {})

    return [styles, { start, reset, animatedValue, interpolate }]
  }, [])
}

// 对单条style值使用差值进行处理
function getInterpolateStyle({ interpolate, to, initialStyle, range }) {
  const isMulti = Array.isArray(to)
  const inputRange = range?.length
    ? range
    : isMulti
    ? to.reduce((prev, curr, i) => [...prev, i === to.length - 1 ? 1 : (1 / to.length) * (i + 1)], [0])
    : [0, 1]
  const outputRange = isMulti
    ? to.reduce((prev, curr) => [...prev, curr ?? prev[prev.length - 1] ?? initialStyle], [initialStyle])
    : [initialStyle, to ?? initialStyle]
  return interpolate({ inputRange, outputRange })
}
