import { useLayoutEffect } from 'react'
import useAnimate from '../useAnimate'

export default function useTransition({ from, to, reverse = false, ...config }) {
  const [style, api] = useAnimate({
    from,
    to,
    autoRun: false,
    ...config,
  })

  useLayoutEffect(() => {
    console.log('reverse', reverse)
    api.start({ reverse })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reverse])

  return [style]
}
