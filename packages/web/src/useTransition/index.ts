import { useLayoutEffect } from 'react'
import useAnimate from '../useAnimate'

export default function useTransition({ from, to, reverse = false, ...config }) {
  const [style, api] = useAnimate({
    from,
    to,
    autoRun: false,
    ...config,
  })

  const [reverseStyle, reverseApi] = useAnimate({
    from,
    to,
    autoRun: false,
    reverse: true,
    ...config,
  })

  useLayoutEffect(() => {
    if (!reverse) {
      api.start()
    } else {
      reverseApi.start()
    }
  }, [reverse])

  return [!reverse ? style : reverseStyle]
}
