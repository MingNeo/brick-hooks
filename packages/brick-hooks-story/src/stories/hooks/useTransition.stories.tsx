import React from 'react'
import { Demo1, Demo2, Demo3, Demo4 } from './../../../../native/src/useTransition/demo'

export default {
  title: 'useTransition',
}

export const UseTransition = () => <Demo1 />

UseTransition.story = {
  name: 'useTransition',
}

// 在两个组件间切换
export const StoryDemo2 = () => <Demo2 />

StoryDemo2.story = {
  name: '在两个组件间切换',
}

// 组合多个组件过渡动画

export const StoryDemo3 = () => <Demo3 />

StoryDemo3.story = {
  name: '组合多个组件过渡动画',
}

export const StoryDemo4 = () => <Demo4 />
StoryDemo4.story = {
  name: '组合多个组件过渡动画2',
}
