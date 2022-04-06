import { useEffect, useRef, useCallback } from 'react'
import { Animated, Platform, Easing, EasingFunction } from 'react-native'

type EasingType =
  | 'linear'
  | 'ease'
  | 'quad'
  | 'cubic'
  | 'sin'
  | 'circle'
  | 'exp'
  | 'bounce'
  | 'in'
  | 'out'
  | 'inOut'
  | ((value: number) => number)

export interface Options {
  from: number
  to: number
  onAnimationEnd?: any

  loop?: number

  duration?: number
  delay?: number
  easing?: EasingType

  isInteraction?: boolean
  useNativeDriver?: boolean

  autoRun?: boolean
  shouldReset?: boolean
}

/**
 * @function useAnimateValue
 * @param {number} from - 动画处理的值
 * @param {number|{ value: number, duration: number }[]} to - 动画结束时的值
 * @param {boolean} bounce - 是否将动画循环回初始状态
 * @param {number} loop - 动画循环的次数，如果-1则无限循环
 *
 * @param {number} duration -  动画的持续时间（毫秒）
 * @param {number} delay - 开始动画前的延迟时间（毫秒）。默认为 0.
 * @param {function} easing - 缓动函数。 默认为Easing.inOut(Easing.ease)。
 * @param {function} onAnimationEnd - 动画结束后回调，如果动画无限循环则永远不会调用
 *
 * @param {boolean} isInteraction - 指定本动画是否在InteractionManager的队列中注册以影响其任务调度。默认值为 true。
 * @param {string} useNativeDriver - 启用原生动画驱动。默认启用
 *
 * @param {boolean} autoRun - hook加载时自动执行动画，默认为true
 * @param {boolean} shouldReset - 动画开始时先重置动画
 */
const useAnimateValue = ({
  from = 0,
  to: toValue = 1,
  loop = 1,
  duration = 500,
  delay = 0,
  easing,

  onAnimationEnd,
  isInteraction = true,
  useNativeDriver = Platform.OS !== 'web',

  autoRun = true,
  shouldReset = true,
}: Options) => {
  const animatedValueRef = useRef(new Animated.Value(from))
  const animatedValue = animatedValueRef.current
  const animateEasingFn = getEasingFunction(easing) as EasingFunction
  const baseOptions = {
    easing: animateEasingFn,
    isInteraction,
    duration: duration,
    useNativeDriver,
  }

  const animationBase = Animated.timing(animatedValue, {
    delay,
    toValue,
    ...baseOptions,
  })

  const interpolate = useCallback(
    ({ inputRange, outputRange, ...config }) =>
      animatedValue.interpolate({
        inputRange: inputRange || [from, toValue],
        outputRange,
        ...config,
      }),
    [animatedValue, from, toValue]
  )

  const animation = [0, 1].includes(loop) ? animationBase : Animated.loop(animationBase, { iterations: loop })

  const reset = useCallback(() => {
    animation.reset()
  }, [animation])

  const start = useCallback(() => {
    shouldReset && animation.reset()

    const animationCb = () => {
      onAnimationEnd && onAnimationEnd({ animation, animatedValue })
    }

    if (delay) {
      Animated.sequence([Animated.delay(delay), animation]).start(animationCb)
    } else {
      animation.start(animationCb)
    }
  }, [animatedValue, animation, onAnimationEnd, delay, shouldReset])

  useEffect(() => {
    autoRun && start()
  }, [autoRun])

  return { animatedValue, interpolate, animation, start, reset }
}

export default useAnimateValue

function getEasingFunction(type: EasingType) {
  if (typeof type === 'string') {
    switch (type) {
      case 'in':
      case 'out':
      case 'inOut':
        return Easing[type](Easing.ease)
      default:
        return Easing[type] ? Easing[type] : type
    }
  }
}
