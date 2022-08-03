import React from 'react'
import { Demo } from '../../../../common/src/useListSequenceLoad/demo'
import useInView from '../../../../web/src/useInView'
import { Demo1, Demo2 } from '../../../../web/src/useLazySequenceLoad/demo'

export default {
  title: 'useListSequenceLoad',
}

function Loading({ loadNextGroupAsync, rootRef, ...restProps }) {
  const { targetProps } = useInView({
    root: rootRef,
    onInView: loadNextGroupAsync,
  })
  return (
    <div {...targetProps} {...restProps}>
      Loading
    </div>
  )
}

export const Default = () => <Demo Loading={Loading} />

Default.story = {
  name: '搭配useInView使用',
}

export const UseLazySequenceLoadDemo = () => <Demo1 />

UseLazySequenceLoadDemo.story = {
  name: 'UseLazySequenceLoad',
}

export const UseLazySequenceLoadDemo2 = () => <Demo2 />

UseLazySequenceLoadDemo2.story = {
  name: 'UseLazySequenceLoad 设置rootMargin 来提前加载',
}
