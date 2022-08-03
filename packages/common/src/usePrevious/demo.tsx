import React from 'react'
import { useCounter, useForceRender, usePrevious } from '../'

export const EqualsModeTrueDemo = () => {
  const [count, { inc, dec }] = useCounter(0)
  const last = usePrevious(count)
  const forceUpdate = useForceRender()

  return (
    <div>
      <button onClick={() => inc()}>+</button>
      <button onClick={() => dec()}>-</button>
      <button onClick={() => forceUpdate()}>强制渲染</button>
      <p>current {count}</p>
      <p>previous {last}</p>
    </div>
  )
}

export const EqualsModeFalseDemo = () => {
  const [count, { inc, dec }] = useCounter(0)
  const last = usePrevious(count, false)
  const forceUpdate = useForceRender()

  return (
    <div>
      <button onClick={() => inc()}>+</button>
      <button onClick={() => dec()}>-</button>
      <button onClick={() => forceUpdate()}>强制渲染</button>
      <p>current {count}</p>
      <p>previous {last}</p>
    </div>
  )
}
