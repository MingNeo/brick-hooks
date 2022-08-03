import React from 'react'
import useInView from '.'

export const Demo = () => {
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
