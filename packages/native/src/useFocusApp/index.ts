import useAppState from '../useAppstate'

export default function useFocusApp(onFocusApp: () => void) {
  const handleAppStateChange = (nextState: string, currentState: string) => {
    if (['inactive', 'background'].includes(currentState) && nextState === 'active') {
      onFocusApp()
    }
  }
  useAppState(handleAppStateChange)
}
