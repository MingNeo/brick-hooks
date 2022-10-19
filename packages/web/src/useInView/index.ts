import 'intersection-observer'
import { useEffect, useRef, useState } from 'react'

interface Status {
  isInView: boolean
  ratio: number
}

function useInView(
  options: {
    target?: any
    root?: any
    onInView?: (status: Status) => any
    onOutView?: (status: Status) => any
    rootMargin?: number
    threshold?: number | number[]
  } = {},
) {
  const {
    target,
    root,
    onInView, // 提供一个接收监听的回调函数
    onOutView, // 提供一个接收监听的回调函数
    rootMargin = 0, // 参见https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    threshold = 0, // 参见https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  } = options
  const containerRef = useRef<any>()

  let rootRef
  if (root) {
    if (Object.prototype.hasOwnProperty.call(root, 'current')) {
      rootRef = root
    } else {
      containerRef.current = root
    }
  }
  rootRef = rootRef || containerRef
  const targetRef = useRef<any>(target?.current ? target.current : target)

  const onInViewRef = useRef<any>()
  onInViewRef.current = onInView

  const onOutViewRef = useRef<any>()
  onOutViewRef.current = onOutView

  const [status, setStatus] = useState({ isInView: false, ratio: 0 })

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const newStatus = { isInView: entry.isIntersecting, ratio: entry.intersectionRatio }
          setStatus(newStatus)
          entry.isIntersecting ? onInViewRef.current?.(newStatus) : onOutViewRef.current?.(newStatus)
        })
      },
      {
        root: rootRef.current || null,
        rootMargin: `${rootMargin || 0}px`,
        threshold,
      },
    )
    io.observe(targetRef.current)
    return () => {
      io.disconnect()
    }
  }, [rootMargin, rootRef, threshold])

  return {
    ...status,
    rootProps: {
      ref: (ref: any) => (rootRef.current = ref),
    },
    targetProps: {
      ref: (ref: any) => (targetRef.current = ref),
    },
  }
}

export default useInView
