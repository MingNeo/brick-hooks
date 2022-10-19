import React from 'react'
import useCounter from '.'

export default function Demo({ initialValue = 0, min = 0, max = 100 }) {
  const [count, actions] = useCounter(initialValue, { min, max })
  return (
    <div style={{ display: 'flex', width: '130px', justifyContent: 'space-between' }}>
      <button onClick={() => actions.dec()}>-</button>
      {count}
      <button onClick={() => actions.inc()}>+</button>
      <button onClick={() => actions.reset()}>reset</button>
    </div>
  )
}
