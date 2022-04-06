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
      let [, { loading, status }] = result.current
      expect(loading).toEqual(false)
      expect(status).toEqual('idle')
    }

    await act(async () => {
      result.current[0]().then((response: any) => {
        expect(result.current[1].loading).toEqual(false)
        expect(result.current[1].status).toEqual('success')
        expect(response).toEqual({ data: [1] })
      })
      result.current[0]()
      await waitForNextUpdate()
      expect(result.current[1].loading).toEqual(true)
      expect(result.current[1].status).toEqual('loading')
    })
    await waitForNextUpdate()

    expect(result.current[1].result).toEqual({ data: [1] })
    expect(result.current[1].loading).toEqual(false)
    expect(result.current[1].status).toEqual('success')
  })

  it('debounce正常', async () => {
    let data = 0
    let fetchDataCb = (value) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (value) data = value
          else data += 1
          resolve({ data })
        }, 100)
      })
    }
    const { result, waitForNextUpdate } = renderHook(
      ({ fetchDataCb }) => {
        return useAsync(fetchDataCb, { debounceTime: 300 })
      },
      { initialProps: { fetchDataCb } }
    )

    expect(result.current[1].loading).toEqual(false)

    // 直接请求
    await act(async () => {
      const applyResult = result.current[0]()
      expect(applyResult).toEqual(undefined)
    })
    await waitForNextUpdate()
    expect(result.current[1].loading).toEqual(true)
    await waitForNextUpdate()
    expect(result.current[1].result).toEqual({ data: 1 })
    expect(result.current[1].loading).toEqual(false)

    // debounce请求
    await act(async () => {
      result.current[0]()
      await waitForNextUpdate()
      expect(result.current[1].loading).toEqual(true)
      result.current[0]()
      result.current[0]()
      result.current[0]()
      result.current[0]()
      result.current[0]()
    })
    await waitForNextUpdate()
    expect(result.current[1].result).toEqual({ data: 2 })
    expect(result.current[1].loading).toEqual(false)

    // debounce会使用最后一次的参数
    await act(async () => {
      result.current[0](300)
      result.current[0]()
      result.current[0]()
      result.current[0]()
      result.current[0](100)
    })
    await waitForNextUpdate()
    expect(result.current[1].loading).toEqual(true)
    await waitForNextUpdate()
    expect(result.current[1].result).toEqual({ data: 100 })
    expect(result.current[1].loading).toEqual(false)
  })
})