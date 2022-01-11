import useIsoEffect from '../utils/useIsoEffect';
import useAnimate from '../useAnimate'

export default function useTransition({ from, to, reverse = false, ...config }) {
  const [style, api] = useAnimate({
    from,
    to,
    autoRun: false,
    ...config,
  })

  const [reverseStyle, reverseApi] = useAnimate({
    from: to,
    to: from,
    autoRun: false,
    ...config,
  })

  useIsoEffect(() => {
    if (!reverse) {
      api.start()
    } else {
      reverseApi.start()
    }
  }, [reverse])

  return [!reverse ? style : reverseStyle]
}
