import React from 'react'
import { Demo1, Demo2 } from './../../../../native/src/useAnimateValue/demo'

export default {
  title: 'useAnimateValue',
}

export const Default = () => <Demo1 />

Default.story = {
  name: 'default',
}

export const UseAnimateValueWithAnimated = () => <Demo2 />

UseAnimateValueWithAnimated.story = {
  name: 'useAnimateValue: 搭配Animated原生写法',
}
