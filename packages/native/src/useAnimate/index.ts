import { useEffect, useRef, useCallback } from 'react'
import { Animated } from 'react-native'

/**
 * @function useAnimate
 * @param {number} from - 动画处理的值
 * @param {number} to - 动画结束时的值
 * @param {boolean} bounce - 是否将动画循环回初始状态
 * @param {number} iterations - 动画循环的次数，如果-1则无限循环
 * @param {function} callback - 动画结束后回调，设置后动画将只执行一遍。
 * 
 * @param {number} duration -  动画的持续时间（毫秒），如果开启bounce，则单次时间减半
 * @param {function} easing - 缓动函数。 默认为Easing.inOut(Easing.ease)。
 * @param {number} delay - 开始动画前的延迟时间（毫秒）。默认为 0.
 * @param {boolean} isInteraction - 指定本动画是否在InteractionManager的队列中注册以影响其任务调度。默认值为 true。
 * @param {string} useNativeDriver - 启用原生动画驱动。默认启用 
 * 
 * @param {boolean} autoRun - 自动执行动画，默认为true
 * @param {boolean} shouldReset - 动画开始时先重置动画
 */
const useAnimate = ({
  from: fromValue = 0,
  to: toValue = 1,
  bounce = false,
  iterations = 1,
  callback,

  duration = 500,
  delay = 0,
  easing,
  isInteraction = true,
  useNativeDriver = true,

  autoRun = true,
  shouldReset = true,
}) => {
  const animatedValueRef = useRef(new Animated.Value(fromValue))
  const animatedValue = animatedValueRef.current
  const baseOptions = {
    easing,
    isInteraction,
    duration: bounce ? duration / 2 : duration,
    // duration: duration,
    useNativeDriver,
  }

  const sequence = [
    Animated.timing(animatedValue, {
      delay,
      toValue,
      ...baseOptions,
    }),
  ]

  if (bounce) {
    sequence.push(
      Animated.timing(animatedValue, {
        toValue: fromValue,
        ...baseOptions,
      })
    )
  }
  const sequenceAnimation = Animated.sequence(sequence)

  const interpolate = useCallback(
    ({ inputRange, outputRange, ...config }) =>
      animatedValue.interpolate({
        inputRange: inputRange || [Math.min(fromValue, toValue), Math.max(fromValue, toValue)],
        outputRange,
        ...config,
      }),
    [animatedValue, fromValue, toValue]
  )

  // 设置了回调的话，动画强制只执行一遍，否则则执行指定的次数。
  const animation =
    iterations === 1 || iterations === 0 || callback
      ? sequenceAnimation
      : Animated.loop(sequenceAnimation, { iterations })

  const reset = useCallback(() => {
    animation.reset()
  }, [animation])

  const start = useCallback(
    (nextAnimation?: any) => {
      shouldReset && animation.reset()

      const callbackAnimation = () => {
        callback && callback({ animation, animatedValue })
        nextAnimation && nextAnimation()
      }

      if (delay) {
        Animated.sequence([Animated.delay(delay), animation]).start(callbackAnimation)
      } else {
        animation.start(callbackAnimation)
      }
    },
    [animatedValue, animation, callback, delay, shouldReset]
  )

  useEffect(() => {
    autoRun && start()
  }, [autoRun, start])

  return { interpolate, animatedValue, start, reset }
}

export default useAnimate
