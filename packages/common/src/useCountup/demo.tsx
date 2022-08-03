import React from 'react'
import useCountUp from '.'

export const Demo1 = () => {
  const { formatedCountup } = useCountUp({ maxLength: 1000 * 60 * 10, format: 'dd hh:mm:ss' })

  return (
    <div>
      <p>计时10分钟</p>
      <p>{formatedCountup}</p>
    </div>
  )
}

export const Demo2 = () => {
  const { formatedCountup, start } = useCountUp({ maxLength: 5000, format: 's.SS', step: 10, autoRun: false })

  return (
    <div>
      <button onClick={start}>每次5秒计时</button>
      <p>{formatedCountup}S</p>
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
