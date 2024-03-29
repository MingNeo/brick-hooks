import { useRef, useEffect } from 'react'

/**
 * 提供一个类似于componentDidUpdate生命周期的hooks，首次不执行，仅更新时执行方法
 */
export default function useDidUpdate(fn: () => void, dep?: any[]) {
  const ref = useRef({ fn, mounted: false })
  ref.current.fn = fn

  useEffect(() => {
    if (!ref.current.mounted) {
      ref.current.mounted = true
    } else {
      ref.current.fn()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dep)
}
