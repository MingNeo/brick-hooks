import { useState } from 'react'
import isEqual from 'lodash.isequal'
import cloneDeep from 'lodash.clonedeep'

/**
 * 在每次更新时进行深比较，并返回新的值
 * 深比较比较耗性能，慎用
 */
export default function useDeepCompare(value: any) {
  const [state, setState] = useState({ value, isEqual: true })

  if (value && !isEqual(value, state.value)) {
    setState({ isEqual: false, value: cloneDeep(value) })
  }

  return state
}
