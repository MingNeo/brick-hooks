import React, { useEffect } from 'react'
import useCounter from '../useCounter'
import useHistoryState from '.'

export function Demo({ max = 5 } = {}) {
  const [count, { inc }] = useCounter(0)
  const { undo, redo, push, last, undoList, redoList, history } = useHistoryState({
    max,
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
      <p>last: {JSON.stringify(last)}</p>
      <p>undoList: {JSON.stringify(undoList)}</p>
      <p>history: {JSON.stringify(history)}</p>
      <p>redoList: {JSON.stringify(redoList)}</p>
    </div>
  )
}
