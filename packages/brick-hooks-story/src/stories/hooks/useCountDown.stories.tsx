import React from 'react'
import useCountDown from 'brick-hooks/src/useCountdown'

export default {
  title: 'useCountDown',
}

// export const useCountDownDemo1 = () => {
//   const { formatedCountdown } = useCountDown({ endTime: '2022-04-22 00:00:00' })

//   return <div>{formatedCountdown}</div>
// }

// useCountDownDemo1.story = {
//   name: 'useCountDown entTime',
// }

// export const useCountDownDemo2 = () => {
//   const { formatedCountdown } = useCountDown({ total: 10000, format: 's.SS', step: 10 })

//   return <div>{formatedCountdown}S</div>
// }

// useCountDownDemo2.story = {
//   name: 'useCountDown total',
// }

export const useCountDownDemo3 = () => {
  const { countdown } = useCountDown({ total: 10000, format: 's.SS', step: 10 })

  return <div>
    <p>{((10000 - countdown) / 1000).toFixed(2)}S</p>
    {/* {10 - formatedCountdown}S */}
  </div>
}

useCountDownDemo3.story = {
  name: '掐表读秒',
}
