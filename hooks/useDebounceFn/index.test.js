import { act, renderHook } from '@testing-library/react-hooks'
import useDebounceFn from './index'

describe('useDebounceFn 校验', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('引用正常', () => {
    expect(useDebounceFn).toBeDefined()
  })

  let value = 0
  const testFn = n => {
    value += n
  }

  const { result } = renderHook(
    () => {
      return useDebounceFn(testFn, 100)
    },
  )

  it('初始状态正常', () => {
    act(() => {
      expect(value).toEqual(0)
      result.current[0](1)
      jest.runAllTimers()
      expect(value).toEqual(1)
      testFn(1)
      testFn(1)
      expect(value).toEqual(3)
    })
  })

  it('防抖正常', () => {
    value = 0
    act(() => {
      expect(value).toEqual(0)
      result.current[0](1)
      result.current[0](1)
      result.current[0](1)
      result.current[0](1)
      result.current[0](1)
      jest.runAllTimers()
      expect(value).toEqual(1)
    })
  })

  // it('自执行正常', () => {
  //   value = 0
  //   let state = 0
  //   const testFn1 = () => value++
  //   const newHook = renderHook(
  //     ({testFn1, wait, options}) => {
  //       return useDebounceFn(testFn1, wait, options)
  //     },
  //     {initialProps: {testFn1, wait: 100, options:  { deps: [state] }}},
  //   )
  //   act(() => {
  //     expect(value).toEqual(0)
  //     state = 2
  //     newHook.rerender()
  //     state = 3
  //     newHook.rerender()
  //     jest.runAllTimers()
  //     expect(value).toEqual(1)
  //   })
  // })
})
