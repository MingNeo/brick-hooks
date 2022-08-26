import { act, renderHook } from '@testing-library/react-hooks'
import useCountdown from '..'

jest.useFakeTimers()

describe('useCountdown 校验', () => {
  it('引用正常', () => {
    expect(useCountdown).toBeDefined()
  })

  it('初始状态正常', () => {
    const { result } = renderHook(() => useCountdown({ total: 5000, format: 's.SS', step: 10, autoRun: false }))
    expect(result.current.formatedCountdown).toBe('0.00')
    expect(result.current.countdown).toBe(0)
    expect(result.current.minutes).toBe(0)
    expect(result.current.seconds).toBe(0)
    expect(result.current.millisecond).toBe(0)
  })

  it('counts down', () => {
    const { result } = renderHook(() => useCountdown({ total: 5000, format: 'm:s', step: 10, autoRun: true }))
    expect(result.current.formatedCountdown).toBe('0:0')

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(result.current.formatedCountdown).toBe('0:4')
    expect(result.current.minutes).toBe(0)
    expect(result.current.seconds).toBe(4)
  })
})
