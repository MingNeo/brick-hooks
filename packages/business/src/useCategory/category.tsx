import React from 'react'
import { useCategory } from '.'
import { categoryJson } from './mock'

export const Category = (props) => {
  const { categorys, handleActive } = useCategory({
    data: categoryJson,
  })
  return (
    <div style={{ display: 'flex', width: '300px', height: '600px' }}>
      <div style={{ width: '60px', height: '100%', border: 'solid' }}>
        {categorys?.level1?.map((v, i) => {
          return (
            <div
              key={v.id}
              style={v.isActive ? { background: 'blue', color: 'white' } : {}}
              onClick={() => handleActive(v.id)}
            >
              {v.name}
            </div>
          )
        })}
      </div>
      <div style={{ flex: 1, height: '100%', border: 'solid' }}>
        {categorys?.level2?.map((v) => (
          <div>
            <div key={v.id}>{v.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
