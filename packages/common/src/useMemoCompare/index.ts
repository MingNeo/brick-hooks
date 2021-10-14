import { useEffect, useRef } from 'react'

/**
 * 这个hooks 返回一个memo的值，可以使用compare函数与自身的上一次值做比较
 */
export default function useMemoCompare(nextValue: any, compare: (prev: any, curr: any) => any) {
  const previousRef = useRef()

  const isEqual = compare(previousRef.current, nextValue)

  useEffect(() => {
    if (!isEqual) {
      previousRef.current = nextValue
    }
  })

  return isEqual ? previousRef.current : nextValue
}
