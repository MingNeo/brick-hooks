import { renderHook } from '@testing-library/react-hooks'
import jestDiff from 'jest-diff'
import useDataListToMap from '../src/useDataListToMap'

const mockData = [
  { id: 'a', value: 'A' },
  { id: 'b', value: 'B' },
  { id: 'c', value: 'C' },
  { id: 'd', value: 'D' }
]

const mockResult = {
  a: { id: 'a', value: 'A' },
  b: { id: 'b', value: 'B' },
  c: { id: 'c', value: 'C' },
  d: { id: 'd', value: 'D' }
}

describe('useDataListToMap 校验', () => {
  it('引用正常', () => {
    expect(useDataListToMap).toBeDefined()
  })

  it('初始状态正常', () => {
    const { result } = renderHook(({ initialValue }) => useDataListToMap(initialValue), {
      initialProps: { initialValue: mockData },
    })
    expect(jestDiff(result.current, mockResult)).toMatch('Compared values have no visual difference.')
  })
})
