/* eslint-disable no-void */
import { renderHook, act } from '@testing-library/react-hooks'
// eslint-disable-next-line import/no-unresolved
import useOnLine from '../src/useOnline'

describe('useOnLine', () => {
  const changeNavigator = (onLine: boolean | undefined) => {
    delete global.navigator
    global.navigator = { onLine } as any
  }

  it('initial online', () => {
    changeNavigator(true)
    const { result } = renderHook(() => useOnLine())
    expect(result.current).toBe(true)
  })

  it('initial offline', () => {
    changeNavigator(false)
    const { result } = renderHook(() => useOnLine())
    expect(result.current).toBe(false)
  })

  it('not supported', () => {
    changeNavigator(undefined)
    const { result } = renderHook(() => useOnLine())
    expect(result.current).toBe(true)
  })

  it('switch offline', () => {
    changeNavigator(true)
    const { result } = renderHook(() => useOnLine())
    act(() => void window.dispatchEvent(new Event('offline')))
    expect(result.current).toBe(false)
  })

  it('switch online', () => {
    changeNavigator(false)
    const { result } = renderHook(() => useOnLine())
    act(() => void window.dispatchEvent(new Event('online')))
    expect(result.current).toBe(true)
  })
})
