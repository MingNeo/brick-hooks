import React, { useEffect } from 'react'
import useCounter from '../useCounter'
import useHistoryRef from '.'

export default function Demo({ max = 10 } = {}) {
  const [count, { inc }] = useCounter(0)
  const { undo, redo, push, last, undoList, redoList, history } = useHistoryRef({
    max, renderOnChange: true
  })

  useEffect(() => {
    push(count)
  }, [count, push])

  return (
    <div>
      <p>inputValue: {count}</p>
      <button onClick={(e) => inc()}>inc</button>
      <button disabled={undoList.length < 1} onClick={undo}>
        undo {undoList.length}
      </button>
      <button disabled={redoList.length < 1} onClick={redo}>
        redo
      </button>
      <p>last: {JSON.stringify(last, undefined, 2)}</p>
      <p>undoList: {JSON.stringify(undoList, undefined, 2)}</p>
      <p>history: {JSON.stringify(history, undefined, 2)}</p>
      <p>redoList: {JSON.stringify(redoList, undefined, 2)}</p>
    </div>
  )
}
