/* eslint-disable max-len */
import React, { useEffect, useState } from 'react'
import { useToggle } from 'brick-hooks'
import useTransition from '.'

export function Demo1() {
  const [visible, toggleVisible] = useToggle(true)
  const [style] = useTransition({
    from: {
      opacity: 0,
      marginLeft: 0,
      width: 50,
      height: 50,
    },
    to: {
      opacity: 1,
      marginLeft: 500,
      width: 200,
      height: 200,
    },
    loop: 1,
    duration: 300,
    autoRun: true,
    reverse: !visible,
  })
  return (
    <>
      <div
        style={{
          backgroundColor: 'powderblue',
          ...style,
        }}
      />
      <div>
        <button onClick={() => toggleVisible()}>Fade {visible ? 'Out' : 'In'}</button>
      </div>
    </>
  )
}

function Transition({ visible, from, to, style, children }: any) {
  const [transStyle] = useTransition({
    from,
    to,
    loop: 1,
    duration: 1000,
    autoRun: true,
    reverse: !visible,
    // delay: 100,
  })

  return <div style={{ ...style, ...transStyle }}>{children}</div>
}

// 在两个组件间切换
export function Demo2() {
  const from = { opacity: 0 }
  const to = { opacity: 1 }
  const [visible, toggleVisible] = useToggle(true)

  return (
    <>
      <div style={{ position: 'relative', height: 200 }}>
        <Transition from={from} to={to} visible={visible} style={{ position: 'absolute' }}>
          <div
            style={{
              width: 100,
              height: 100,
              background:
                'url(data:image/webp;base64,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)',
            }}
          ></div>
        </Transition>
        <Transition from={to} to={from} visible={visible} style={{ position: 'absolute' }}>
          <div
            style={{
              width: 100,
              height: 100,
              background:
                'url(data:image/webp;base64,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)',
            }}
          ></div>
        </Transition>
      </div>
      <div>
        <button onClick={() => toggleVisible()}>toggle</button>
      </div>
    </>
  )
}

// 组合多个组件过渡动画
export function Demo3() {
  const [visible, toggleVisible] = useToggle(true)
  const [compAStyle] = useTransition({
    from: {
      opacity: 0,
      left: 0,
      width: 400,
      height: 0,
    },
    to: {
      opacity: 1,
      width: 400,
      height: 400,
    },
    loop: 1,
    duration: 600,
    autoRun: true,
    reverse: !visible, // delay: 100,
  })
  const [compBStyle] = useTransition({
    from: {
      opacity: 0,
      top: 0,
      left: 400,
      width: 50,
      height: 50,
    },
    to: {
      opacity: 1,
      left: 0,
      width: 200,
      height: 200,
    },
    loop: 1,
    duration: 600,
    autoRun: true,
    reverse: !visible, // delay: 100,
  })
  return (
    <>
      <div>
        <button onClick={() => toggleVisible()}>toggle</button>
      </div>
      <div
        style={{
          position: 'relative',
          height: 450,
        }}
      >
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'powderblue',
            ...compAStyle,
          }}
        />
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'red',
            ...compBStyle,
          }}
        />
      </div>
    </>
  )
}

const styles = [
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)',
  'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
  'linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)',
  'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
]
const list = new Array(7).fill(1).map((v, i: number) => ({
  id: i + 1,
  value: i + 1,
  styleColor: styles[i],
})) // 组合多个组件过渡动画2

function shuffle(arr) {
  const result = []
  let random
  while (arr.length > 0) {
    random = Math.floor(Math.random() * arr.length)
    result.push(arr[random])
    arr.splice(random, 1)
  }
  return result
}

export const Demo4 = () => {
  const [rows, set] = useState(list)
  useEffect(() => {
    const timer = setInterval(() => {
      set(shuffle)
    }, 2000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const Item = (props) => {
    const [style] = useTransition({
      from: {
        opacity: 0,
        top: props.value * 60,
      },
      to: {
        opacity: 1,
        top: props.index * 60,
      },
      autoRun: true,
    })
    return (
      <div
        style={{
          position: 'absolute',
          background: props.styleColor,
          width: '100%',
          height: 50,
          ...style,
        }}
      >
        <div>{props.value}</div>
      </div>
    )
  }

  return (
    <div
      style={{
        position: 'relative',
        height: 450,
      }}
    >
      {rows.map((v, index) => (
        <Item key={v.id} {...v} index={index} />
      ))}
    </div>
  )
}

export default Demo3
