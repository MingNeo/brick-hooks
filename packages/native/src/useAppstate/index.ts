import { useEffect, useRef } from 'react'
import { AppState, AppStateStatus } from 'react-native'

type OnAppStateChange = (nextState: any, prevState: any) => any

/**
 * 获取当前App前后台的状态
 * @param {*} navigation
 * @param {*} onAppStateChange
 */
export default function useAppState(onAppStateChange: OnAppStateChange) {
  const handleChangeRef = useRef<(nextState: any) => any>()
  const currentStateRef = useRef<AppStateStatus>()

  handleChangeRef.current = function (nextState) {
    const prevState = currentStateRef.current
    currentStateRef.current = AppState.currentState
    onAppStateChange(nextState, prevState)
  }

  useEffect(() => {
    const handleAppStateChange = handleChangeRef.current
    AppState.addEventListener('change', handleAppStateChange)
    return () => {
      AppState.removeEventListener('change', handleAppStateChange)
    }
  }, [])
}
