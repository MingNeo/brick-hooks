/* eslint-disable no-void */
import { renderHook, act } from '@testing-library/react-hooks'
// eslint-disable-next-line import/no-unresolved
import useOnLine from '../src/useOnline'

describe('useOnLine', () => {
  const changeNavigator = (onLine: boolean | undefined) => {
    global.navigator = { onLine } as any
  }

  it('initial online', () => {
    changeNavigator(true)
    const { result } = renderHook(() => useOnLine())
    expect(result.current).toBe(true)
    // delete global.navigator
  })

  it('initial offline', () => {
    changeNavigator(false)
    const { result } = renderHook(() => useOnLine())
    expect(result.current).toBe(false)
    // delete global.navigator
  })

  it('not supported', () => {
    changeNavigator(undefined)
    const { result } = renderHook(() => useOnLine())
    expect(result.current).toBe(true)
    // delete global.navigator
  })

  it('switch offline', () => {
    changeNavigator(true)
    const { result } = renderHook(() => useOnLine())
    // navigator.onLine = false
    act(() => void window.dispatchEvent(new Event('offline')))
    expect(result.current).toBe(false)
    // delete global.navigator
  })

  it('switch online', () => {
    changeNavigator(false)
    const { result } = renderHook(() => useOnLine())
    // navigator.onLine = true
    act(() => void window.dispatchEvent(new Event('online')))
    expect(result.current).toBe(true)
    // delete global.navigator
  })
})
