import { act, renderHook } from '@testing-library/react-hooks'
import useAsync from '../src/useAsync'

let fetchFn = (params) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: [1] })
    }, 100)
  })
}

describe('useAsync 校验', () => {
  it('引用正常', () => {
    expect(useAsync).toBeDefined()
  })

  it('初始状态正常', () => {
    const { result } = renderHook(
      ({ fetchFn }) => {
        return useAsync(fetchFn)
      },
      { initialProps: { fetchFn } }
    )
    const [, { result: resultData, loading }] = result.current
    expect(resultData).toEqual(undefined)
    expect(loading).toEqual(false)
  })

  it('请求正常', async () => {
    const { result, waitForNextUpdate } = renderHook(
      ({ fetchFn }) => {
        return useAsync(fetchFn)
      },
      { initialProps: { fetchFn } }
    )

    {
      let [, { loading }] = result.current
      expect(loading).toEqual(false)
    }

    await act(async () => {
      result.current[0]().then((response: any) => {
        let [, { loading }] = result.current
        expect(loading).toEqual(false)
        expect(response).toEqual({ data: [1] })
      })
      await waitForNextUpdate()
      {
        let [, { loading }] = result.current
        expect(loading).toEqual(true)
      }
    })
    await waitForNextUpdate()
    {
      let [, { result: listData, loading }] = result.current
      expect(listData).toEqual({ data: [1] })
      expect(loading).toEqual(false)
    }
  })
})
