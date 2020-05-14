import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { useStore } from '../src/index'

const mockData = {
  test: {
    initState: {
      aaa: 1,
    },
  },
}

describe('useStore 校验', () => {
  it('引用正常', () => {
    expect(useStore).toBeDefined()
  })

  // it('初始状态正常', async () => {
  //   const { result } = renderHook(
  //     ({ value }) => {
  //       return useStore(value)
  //     },
  //     { initialProps: { value: 'test' } }
  //   )
  //   console.log(result.current)
  // })

  // it('修改正常', () => {
  //   const { result } = renderHook(
  //     ({ value }) => {
  //       return useStore(value)
  //     },
  //     { initialProps: { value: 0 } }
  //   )
  //   act(() => {
  //     result.current.onChange({ currentTarget: { value: 1 } })
  //   })

  //   expect(result.current.value).toEqual(1)
  // })
})
