import { useEffect } from 'react'
import useNavigation from '../useNavigation'

export default function useFocusEffect(effect: Function, navigation?: any) {
  const nav = useNavigation<any>(navigation)

  useEffect(() => {
    let isFocused = false
    let cleanup: (() => void) | void

    const callback = () => {
      const destroy = effect()

      if (destroy === undefined || typeof destroy === 'function') {
        return destroy
      }
    }

    if (nav.isFocused()) {
      cleanup = callback()
      isFocused = true
    }

    const focusListener = nav.addListener('willFocus', () => {
      if (isFocused) {
        return
      }

      cleanup && cleanup()

      cleanup = callback()
      isFocused = true
    })

    const blurListener = navigation.addListener('willBlur', () => {
      cleanup && cleanup()

      cleanup = undefined
      isFocused = false
    })

    return () => {
      cleanup && cleanup()

      focusListener.remove()
      blurListener.remove()
    }
  }, [nav, effect])
}
