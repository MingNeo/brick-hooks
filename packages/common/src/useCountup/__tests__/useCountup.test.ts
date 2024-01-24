import { act, renderHook } from '@testing-library/react-hooks'
import useCountup from '..'

jest.useFakeTimers()

describe('useCountup 校验', () => {
  it('引用正常', () => {
    expect(useCountup).toBeDefined()
  })

  it('初始状态正常', () => {
    const { result } = renderHook(() => useCountup({ maxLength: 50000, format: 's.SS', step: 10, autoRun: false }))
    expect(result.current.formatedCountup).toBe('0.00')
    expect(result.current.countup).toBe(0)
    // expect(result.current.minute).toBe(0)
    // expect(result.current.second).toBe(0)
    // expect(result.current.millisecond).toBe(0)
  })

  it('counts up', () => {
    const { result } = renderHook(() => useCountup({ maxLength: 5000, format: 'm:s', step: 10, autoRun: true }))
    expect(result.current.formatedCountup).toBe('0:0')

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(result.current.formatedCountup).toBe('0:4')
    // expect(result.current.minute).toBe(0)
    // expect(result.current.second).toBe(4)
  })
})
