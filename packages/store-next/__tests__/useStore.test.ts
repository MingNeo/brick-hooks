import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { useStore as useBaseStore, registerModule } from '../src/index'

const mockTestModuleModel = {
  state: {
    a: 1,
  },
  reducers: {
    changeValue: (state, payload) => ({ ...state, ...payload }),
  },
}

export function testUseStore(useStore) {
  describe('useStore 校验', () => {
    it('引用正常', () => {
      expect(useStore).toBeDefined()
    })

    registerModule('test', mockTestModuleModel)

    it('初始状态正常', async () => {
      const { result } = renderHook(() => {
        return useStore('test')
      })
      expect(result.current[0]).toEqual({ a: 1 })
    })

    it('setStore 默认修改正常', () => {
      const { result } = renderHook(() => {
        return useStore('test')
      })

      act(() => result.current[1]({ b: 2 }))
      expect(result.current[0]).toEqual({ a: 1, b: 2 })
      act(() => result.current[1]({ b: 2 }, false))
      expect(result.current[0]).toEqual({ b: 2 })
    })

    it('setStore 全局不合并修改正常', () => {
      const { result } = renderHook(() => {
        return useStore('test', false)
      })

      act(() => result.current[1]({ b: 2 }))
      expect(result.current[0]).toEqual({ b: 2 })
      act(() => result.current[1]({ a: 1 }, true))
      expect(result.current[0]).toEqual({ a: 1, b: 2 })
    })

    it('methods & dispatch 正常', () => {
      const { result } = renderHook(() => {
        return useStore('test')
      })
      act(() => {
        const [, , { changeValue }] = result.current
        changeValue({ b: 2 })
      })

      expect(result.current[0]).toEqual({ a: 1, b: 2 })

      act(() => {
        const [, , { dispatch }] = result.current
        dispatch('changeValue', { c: 3 })
      })
      expect(result.current[0]).toEqual({ a: 1, b: 2, c: 3 })
    })
  })
}

testUseStore(useBaseStore)
