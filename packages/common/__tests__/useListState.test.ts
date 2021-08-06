import { renderHook } from '@testing-library/react-hooks'
import jestDiff from 'jest-diff'
import { act } from 'react-test-renderer'
import useListState from '../src/useListState'

const mockData = [
  { id: 'a001', pid: 0, value: '山东' },
  { id: 'a002', pid: 'a001', value: '济南' },
  { id: 'a003', pid: 'a001', value: '青岛' },
  { id: 'a004', pid: 'a001', value: '烟台' },
]

const mapResult = {
  a001: { id: 'a001', pid: 0, value: '山东' },
  a002: { id: 'a002', pid: 'a001', value: '济南' },
  a003: { id: 'a003', pid: 'a001', value: '青岛' },
  a004: { id: 'a004', pid: 'a001', value: '烟台' },
}

describe('useListState 校验', () => {
  it('引用正常', () => {
    expect(useListState).toBeDefined()
  })

  describe('transObj 校验正常', () => {
    it('初始状态正常', () => {
      const { result } = renderHook(
        ({ initialValue }) =>
          useListState(initialValue, (originValue, { transObj }) => transObj(originValue)),
        {
          initialProps: { initialValue: mockData },
        }
      )

      expect(jestDiff(result.current[0], mapResult)).toMatch(
        'Compared values have no visual difference.'
      )
    })

    it('更新值正常', () => {
      const { result } = renderHook(
        ({ initialValue }) =>
          useListState(initialValue, (originValue) => originValue),
        {
          initialProps: { initialValue: [] },
        }
      )

      expect(result.current[0]).toEqual([])

      act(() => {
        result.current[1].set([1])
      })
      console.log('result.current[0]', result.current[0])

      expect(result.current[0]).toEqual([1])
    })
  })

  const treeResult = [
    {
      id: 'a001',
      pid: 0,
      value: '山东',
      children: [
        { id: 'a002', pid: 'a001', value: '济南' },
        { id: 'a003', pid: 'a001', value: '青岛' },
        { id: 'a004', pid: 'a001', value: '烟台' },
      ],
    },
  ]

  describe('transObj 校验正常', () => {
    it('初始状态正常', () => {
      const { result } = renderHook(
        ({ initialValue }) =>
          useListState(initialValue, (originValue, { transTree }) => transTree(originValue)),
        {
          initialProps: { initialValue: mockData },
        }
      )

      expect(jestDiff(result.current[0], treeResult)).toMatch(
        'Compared values have no visual difference.'
      )
    })
  })

  const groupResult = {
    0: [{ id: 'a001', pid: 0, value: '山东' }],
    a001: [
      { id: 'a002', pid: 'a001', value: '济南' },
      { id: 'a003', pid: 'a001', value: '青岛' },
      { id: 'a004', pid: 'a001', value: '烟台' },
    ],
  }

  describe('group 校验正常', () => {
    it('初始状态正常', () => {
      const { result } = renderHook(
        ({ initialValue }) =>
          useListState(initialValue, (originValue, { group }) =>
            group(originValue, { groupKey: 'pid' })
          ),
        {
          initialProps: { initialValue: mockData },
        }
      )
      console.log('result.current[0]', result.current[0])

      expect(jestDiff(result.current[0], groupResult)).toMatch(
        'Compared values have no visual difference.'
      )
    })
  })

  const partitionResult = [
    [{ id: 'a001', pid: 0, value: '山东' }],
    [
      { id: 'a002', pid: 'a001', value: '济南' },
      { id: 'a003', pid: 'a001', value: '青岛' },
      { id: 'a004', pid: 'a001', value: '烟台' },
    ],
  ]

  describe('partition 校验正常', () => {
    it('初始状态正常', () => {
      const { result } = renderHook(
        ({ initialValue }) =>
          useListState(initialValue, (originValue, { partition }) =>
            partition(originValue, { groupKey: 'pid' })
          ),
        {
          initialProps: { initialValue: mockData },
        }
      )
      console.log('result.current[0]', result.current[0])

      expect(jestDiff(result.current[0], partitionResult)).toMatch(
        'Compared values have no visual difference.'
      )
    })
  })

  const mockChainData = [
    { id: 'a001', pid: 0, value: '山东' },
    { id: 'a002', pid: 'a001', value: '济南' },
    { id: 'a003', pid: 'a001', value: '青岛' },
    { id: 'a004', pid: 'a001', value: '烟台' },
    { id: 'a004', pid: 'a001', value: '烟台', ignore: true },
  ]
  describe('chain 校验正常', () => {
    it('初始状态正常', () => {
      const { result } = renderHook(
        ({ initialValue }) =>
          useListState(initialValue, (originValue, { chain }) =>
            chain(originValue)
              .filter((v) => !v.ignore)
              .partition({ groupKey: 'pid' })
              .value()
          ),
        {
          initialProps: { initialValue: mockChainData },
        }
      )
      console.log('result.current[0]', result.current[0])

      expect(jestDiff(result.current[0], partitionResult)).toMatch(
        'Compared values have no visual difference.'
      )
    })
  })
})
