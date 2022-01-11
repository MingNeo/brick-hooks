import React, { useState } from 'react'
import { Button } from '@storybook/react/demo'
import { usePrevious, useForceRender, useCounter } from 'brick-hooks'

export default {
  title: 'usePrevious',
}

export const EqualsModeTrue = () => {
  const [count, { inc, dec }] = useCounter(0)
  const last = usePrevious(count)
  const forceUpdate = useForceRender()

  return (
    <div>
      <Button onClick={() => inc()}>+</Button>
      <Button onClick={() => dec()}>-</Button>
      <Button onClick={() => forceUpdate()}>强制渲染</Button>
      <p>current {count}</p>
      <p>previous {last}</p>
    </div>
  )
}

EqualsModeTrue.story = {
  name: 'equalsMode true',
}

export const EqualsModeFalse = () => {
  const [count, { inc, dec }] = useCounter(0)
  const last = usePrevious(count, false)
  const forceUpdate = useForceRender()

  return (
    <div>
      <Button onClick={() => inc()}>+</Button>
      <Button onClick={() => dec()}>-</Button>
      <Button onClick={() => forceUpdate()}>强制渲染</Button>
      <p>current {count}</p>
      <p>previous {last}</p>
    </div>
  )
}

EqualsModeFalse.story = {
  name: 'equalsMode false',
}
