import { useRefCallback } from 'brick-hooks'
import { useEffect, useState } from 'react'
import useEventListener from '../useEventListener'
import { isBrowser } from '../utils'

const useWindowResize = (
  callback?: (windowSize: { width: number; height: number }) => void,
): { width?: number; height?: number } => {
  const [size, setSize] = useState(
    isBrowser
      ? {
          width: window.innerWidth,
          height: window.innerHeight,
        }
      : {},
  )

  const refCallback = useRefCallback(callback)

  useEventListener('resize', () => {
    setSize({ width: window.innerWidth, height: window.innerHeight })
  })

  useEffect(() => {
    refCallback(size)
  }, [size, refCallback])

  return size
}

export default useWindowResize
