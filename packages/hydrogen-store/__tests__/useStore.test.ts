import { renderHook, act } from '@testing-library/react-hooks'
import { useStore as useBaseStore, registerModule } from '../src/index'

const mockTestModuleModel = {
  state: {
    count: 1,
  },
  reducers: {
    changeValue: (state, payload) => ({ ...state, ...payload }),
  },
}

export function testUseStore(useStore, useGlobal = false) {
  describe('useStore 校验', () => {
    it('引用正常', () => {
      expect(useStore).toBeDefined()
    })

    useGlobal && registerModule('test', mockTestModuleModel)

    it('初始状态正常', async () => {
      const { result } = renderHook(() => {
        return useStore('test')
      })
      expect(result.current[0]).toEqual({ count: 1 })
    })

    it('setStore 默认修改正常', () => {
      const { result } = renderHook(() => {
        return useStore('test')
      })

      act(() => result.current[1]({ setStateCount: 2 }))
      expect(result.current[0]).toEqual({ count: 1, setStateCount: 2 })
      act(() => result.current[1]({ setStateCount: 2 }, false))
      expect(result.current[0]).toEqual({ setStateCount: 2 })
    })

    it('setStore 全局不合并修改正常', () => {
      const { result } = renderHook(() => {
        return useStore('test', false)
      })

      act(() => result.current[1]({ setStateCount: 2 }))
      expect(result.current[0]).toEqual({ setStateCount: 2 })
      act(() => result.current[1]({ count: 1 }, true))
      expect(result.current[0]).toEqual({ count: 1, setStateCount: 2 })
    })

    it('methods & dispatch 正常', () => {
      const { result } = renderHook(() => {
        const [state, setState, { dispatch, changeValue }] = useStore('test')
        return { state, setState, dispatch, changeValue }
      })
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
}

testUseStore(useBaseStore, true)
