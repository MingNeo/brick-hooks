import { act, renderHook } from '@testing-library/react-hooks'
import useMemoWithPrev from '..'

describe('useMemoWithPrev 校验', () => {
  it('引用正常', () => {
    expect(useMemoWithPrev).toBeDefined()
  })

  it('run success', async () => {
    const { result, rerender } = renderHook(
      (props) => {
        return useMemoWithPrev(
          (prevDeps, prevValue) => {
            return {
              prev: prevValue,
              prevDep: prevDeps[0],
              current: props.value + 1,
            }
          },
          [props.value],
        )
      },
      {
        initialProps: { value: 0 },
      },
    )

    expect(result.current).toEqual({
      prev: undefined,
      prevDep: 0,
      current: 1,
    })

    act(() => {
      rerender({ value: 1 })
    })

    expect(result.current).toEqual({
      prev: {
        current: 1,
        prev: undefined,
        prevDep: 0,
      },
      prevDep: 0,
      current: 2,
    })
  })
})
