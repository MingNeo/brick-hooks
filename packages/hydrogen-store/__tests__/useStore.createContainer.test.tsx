import { renderHook, act } from '@testing-library/react-hooks'
import { createContainer } from '../src/index'

const mockTestModuleModel = {
  state: {
    count: 1,
  },
  reducers: {
    changeValue: (state, payload) => ({ ...state, ...payload }),
  },
}

const { Provider, useStore } = createContainer(mockTestModuleModel)

describe('useStore createContainer test', () => {
  it('引用正常', () => {
    expect(useStore).toBeDefined()
  })

  it('初始状态正常', async () => {
    const { result } = renderHook(() => useStore(), { wrapper: Provider })
    expect(result.current[0]).toEqual({ count: 1 })
  })

  it('setStore 默认修改正常', () => {
    const { result } = renderHook(() => {
      return useStore()
    }, { wrapper: Provider })

    const { result: result2 } = renderHook(() => {
      return useStore()
    }, { wrapper: Provider })

    act(() => result.current[1]({ setStateCount: 2 }))
    expect(result.current[0]).toEqual({ count: 1, setStateCount: 2 })
    expect(result2.current[0]).toEqual({ count: 1, setStateCount: 2 })
    act(() => result.current[1]({ setStateCount: 2 }, false))
    expect(result.current[0]).toEqual({ setStateCount: 2 })
  })

  it('setStore 全局不合并修改正常', () => {
    const { result } = renderHook(() => {
      return useStore(false)
    }, { wrapper: Provider })

    act(() => result.current[1]({ setStateCount: 2 }))
    expect(result.current[0]).toEqual({ setStateCount: 2 })
    act(() => result.current[1]({ count: 1 }, true))
    expect(result.current[0]).toEqual({ count: 1, setStateCount: 2 })
  })

  it('methods & dispatch 正常', () => {
    const { result } = renderHook(() => {
      const [state, setState, { dispatch, changeValue }] = useStore()
      return { state, setState, dispatch, changeValue }
    }, { wrapper: Provider })
    act(() => {
      result.current.changeValue({ setStateCount: 2 })
    })

    expect(result.current.state).toEqual({ count: 1, setStateCount: 2 })

    act(() => {
      result.current.dispatch('changeValue', { dispatchCount: 3 })
    })
    expect(result.current.state).toEqual({ count: 1, setStateCount: 2, dispatchCount: 3 })
  })
})

