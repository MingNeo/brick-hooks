import React from 'react'
import usePolling from '.'

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const fetchData = () =>
  wait(400).then(() => {
    const num = Math.random()
    if (num > 0.3) {
      return Array.from('🙁😂🌝😏😎👍👌🚗')[~~(num * 8)]
    } else {
      throw Error('未成功，继续尝试中')
    }
  })

export default function Demo() {
  const { result, error, pollingCount, isPolling, startPolling, stopPolling } = usePolling(fetchData, {
    interval: 500,
    retryCount: 2,
  })

  const handleClick = () => {
    isPolling ? stopPolling() : startPolling()
  }

  return (
    <div>
      <button onClick={handleClick}>{isPolling ? '停止轮询' : '点击开始轮询'}</button>
      <p>pollingCount: {pollingCount}</p>
      <p>{isPolling ? 'polling...' : ''}</p>
      <p>{error ? error.message : result}</p>
    </div>
  )
}
