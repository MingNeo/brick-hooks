import React from 'react'
import useCountDown from '.'

export const Demo1 = () => {
  const { formatedCountdown } = useCountDown({ endTime: Date.now() + 1000000, step: 1000 })

  return (
    <div>
      <p>设置指定时间倒计时</p>
      <p>{formatedCountdown}S</p>
    </div>
  )
}

export const Demo2 = () => {
  const { formatedCountdown, start } = useCountDown({ total: 5000, format: 's.SS', step: 10, autoRun: false })

  return (
    <div>
      <button onClick={start}>每次5秒倒计时</button>
      <p>{formatedCountdown}S</p>
    </div>
  )
}

export default function Demo() {
  return (
    <div>
      <Demo1 />
      <Demo2 />
    </div>
  )
}
