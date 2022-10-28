import React from 'react'
import { ScrollView, View } from 'react-native-web'
import useNativeInView from '.'

export const Demo = () => {
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
