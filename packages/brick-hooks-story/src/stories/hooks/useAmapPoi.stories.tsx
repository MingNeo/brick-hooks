import React, { useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo'
import useAmapPoi from 'brick-hooks-business/src/useAmapPoiWeb'
import { setAmapKey, loadScript } from 'brick-hooks-business/src/useAmapPoiWeb/helper'

setAmapKey('e2a0790d42bc5bfdebceb30b2b71f349')
storiesOf('useAmapPoi', module).add('default', () => {
  useEffect(() => {
    loadScript()
  }, [])
  const { currentPoi, pois, nearbyPois, onSelectPoi, getNearbyPois, searchPois } = useAmapPoi({})

  return (
    <div>
      {JSON.stringify(currentPoi)}
      <div style={{ display: 'flex' }}>
        <ul>
          {pois?.map((v) => (
            <li>{v.name}</li>
          ))}
        </ul>
        <ul>
          {nearbyPois?.map((v) => (
            <li style={{ background: currentPoi?.name === v.name ? 'blue' : 'white' }} onClick={() => onSelectPoi(v)}>
              {v.name}
            </li>
          ))}
        </ul>
      </div>

      <Button onClick={() => searchPois({ city: '青岛', address: '五四广场' })}>搜索五四广场</Button>
      <Button onClick={() => getNearbyPois({ latitude: '36.062687', longitude: '120.384599' })}>
        获取五四广场附近
      </Button>
    </div>
  )
})
