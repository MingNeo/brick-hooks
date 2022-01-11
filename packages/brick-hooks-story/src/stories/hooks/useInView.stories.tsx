import React from 'react'
import useInView from 'brick-hooks-web/src/useInView'
import useNativeInView from 'brick-hooks-native/src/useInView'
import { ScrollView, View } from 'react-native'

export default {
  title: 'useInView',
}

export const WebUseInView = () => {
  const { isInView, rootProps, targetProps } = useInView()

  return (
    <>
      <div>{isInView ? '进入可视区域了' : '不在可视区域'}</div>
      <div style={{ width: '100%', height: 100, overflow: 'scroll', border: '1px solid' }} {...rootProps}>
        <div
          style={{
            width: 200,
            height: 50,
            backgroundColor: 'powderblue',
            marginTop: 300,
            marginBottom: 300,
          }}
          {...targetProps}
        />
      </div>
    </>
  )
}

WebUseInView.story = {
  name: 'brick-hooks-web useInView',
}

export const WebNativeInView = () => {
  const { isInView, rootProps, targetProps } = useNativeInView()

  return (
    <>
      <div>{isInView ? '进入可视区域了' : '不在可视区域'}</div>

      <ScrollView style={{ width: '100%', height: 100, overflow: 'scroll' }} {...rootProps} scrollEventThrottle={0}>
        <View
          style={{
            width: 200,
            height: 50,
            backgroundColor: 'powderblue',
            marginTop: 300,
            marginBottom: 300,
          }}
          {...targetProps}
        />
      </ScrollView>
      <div>{isInView ? '进入可视区域了' : '不在可视区域'}</div>
    </>
  )
}

WebNativeInView.story = {
  name: 'brick-hooks-native useInView',
}
