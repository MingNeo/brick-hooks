import { renderHook } from '@testing-library/react-hooks'
import jestDiff from 'jest-diff'
import useDataFlatToTree from '../src/useDataFlatToTree'

const mockData = [
  { id: 'a', pid: 0, value: '陕西' },
  { id: 1, pid: 'a', value: '西安' },
  { id: 2, pid: 'a', value: '渭南' },
  { id: 3, pid: 'a', value: '咸阳' },
  { id: 'b', pid: 0, value: '广东' },
  { id: 11, pid: 'b', value: '广州' },
  { id: 12, pid: 'b', value: '深圳' },
  { id: 13, pid: 'b', value: '潮汕' },
  { id: 'c', pid: 0, value: '湖南' },
  { id: 21, pid: 'c', value: '长沙' },
  { id: 22, pid: 'c', value: '常德' },
  { id: 23, pid: 'c', value: '岳阳' },
]

const mockResult = [
  {
    id: 'a',
    pid: 0,
    value: '陕西',
    children: [
      { id: 1, pid: 'a', value: '西安' },
      { id: 2, pid: 'a', value: '渭南' },
      { id: 3, pid: 'a', value: '咸阳' },
    ],
  },
  {
    id: 'b',
    pid: 0,
    value: '广东',
    children: [
      { id: 11, pid: 'b', value: '广州' },
      { id: 12, pid: 'b', value: '深圳' },
      { id: 13, pid: 'b', value: '潮汕' },
    ],
  },
  {
    id: 'c',
    pid: 0,
    value: '湖南',
    children: [
      { id: 21, pid: 'c', value: '长沙' },
      { id: 22, pid: 'c', value: '常德' },
      { id: 23, pid: 'c', value: '岳阳' },
    ],
  },
]

describe('useDataFlatToTree 校验', () => {
  it('引用正常', () => {
    expect(useDataFlatToTree).toBeDefined()
  })

  it('初始状态正常', () => {
    const { result } = renderHook(({ initialValue }) => useDataFlatToTree(initialValue), {
      initialProps: { initialValue: mockData },
    })
    expect(jestDiff(result.current, mockResult)).toBe('Compared values have no visual difference.')
  })
})
