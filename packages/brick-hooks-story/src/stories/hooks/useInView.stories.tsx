import React from 'react'
import { Demo as WebDemo } from '../../../../web/src/useInView/demo'
import { Demo as NativeDemo } from '../../../../native/src/useInView/demo'

export default {
  title: 'useInView',
}

export const WebUseInView = () => <WebDemo />

WebUseInView.story = {
  name: 'brick-hooks-web useInView',
}

export const NativeInView = () => <NativeDemo />

NativeInView.story = {
  name: 'brick-hooks-native useInView',
}
