import React from 'react'
import useCountUp from '.'

export const Countup = ({ total }) => {
  const { formatedCountup } = useCountUp({ maxLength: total, format: 'dd hh:mm:ss' })

  return <>{formatedCountup}</>
}

export const Demo2 = () => {
  const { formatedCountup, start } = useCountUp({ maxLength: 50000, format: 's.SS', step: 10, autoRun: false })

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
      <p>计时10分钟</p>
      <Countup total={1000 * 60 * 10} />
      <p>计时1分钟</p>
      <Countup total={100 * 60 * 10} />
      <Demo2 />
    </div>
  )
}
