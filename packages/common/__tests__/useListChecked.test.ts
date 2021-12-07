import { act, renderHook } from '@testing-library/react-hooks'
import useListCheck from '../src/useListChecked/index'

describe('useListCheck 校验', () => {
  it('引用Hooks正常', () => {
    expect(useListCheck).toBeDefined()
  })

  let allIds = new Array(10).fill(0).map((v, i) => `id-${i}`)
  let selecteds = ['id-1', 'id-2']

  it('初始状态正常', () => {
    let { result } = renderHook(({ allIds, selecteds }) => useListCheck(allIds, selecteds), {
      initialProps: { allIds, selecteds },
    })
    expect(result.current.isAllChecked).toBe(false)
    expect(Object.values(result.current.checkedMap)).toHaveLength(10)
    expect(Object.values(result.current.checkedIds)).toEqual(selecteds)
  })

  it('切换全选正常', () => {
    let { result } = renderHook(({ allIds, selecteds }) => useListCheck(allIds, selecteds), {
      initialProps: { allIds, selecteds },
    })
    act(() => {
      result.current.toggleAllChecked(true)
    })

    expect(result.current.isAllChecked).toBeTruthy()
    expect(result.current.checkedIds).toEqual(allIds)
    expect(result.current.checkedMap).toEqual(allIds.reduce((prev, curr) => ({ ...prev, [curr]: true }), {}))

    act(() => {
      result.current.toggleAllChecked(false)
    })

    expect(result.current.isAllChecked).not.toBeTruthy()
    expect(result.current.checkedIds).toEqual([])
  })

  it('列表变化正常', () => {
    let { result, rerender } = renderHook(({ allIds, selecteds }) => useListCheck(allIds, selecteds), {
      initialProps: { allIds, selecteds },
    })
    act(() => {
      rerender({ allIds: [...allIds, 'id-10'], selecteds })
    })
    expect(Object.values(result.current.checkedMap)).toHaveLength(11)
    expect(result.current.checkedMap['id-10']).toBeDefined()
    expect(result.current.checkedIds).not.toContain('id-10')
    act(() => {
      result.current.setChecked('id-10', true)
    })

    expect(result.current.checkedIds).toContain('id-10')
  })

  it('清空所有状态正常', () => {
    let { result } = renderHook(({ allIds, selecteds }) => useListCheck(allIds, selecteds), {
      initialProps: { allIds, selecteds },
    })
    act(() => {
      result.current.clearChecked()
    })

    expect(result.current.isAllChecked).not.toBeTruthy()
    expect(result.current.checkedIds).toEqual([])
    expect(result.current.checkedMap).toEqual({})
  })
})
