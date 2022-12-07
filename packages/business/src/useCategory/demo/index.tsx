import React from 'react'
import { useCategory } from '..'
import { categoryJson, items } from '../mock'
import './index.css'

/**
 * 三级
 */

const Category2 = (props) => {
  const { categorys, flatNodes, activeIds, handleActive } = useCategory({
    data: categoryJson,
  })
  return (
    <div className="container">
      <header className="header">
        {categorys?.level1?.map((v) => {
          return (
            <div key={v.id} className={`item ${v.isActive ? 'active' : ''}`} onClick={() => handleActive(v.id)}>
              {v.name}
            </div>
          )
        })}
      </header>
      <div style={{ display: 'flex', flex: 1 }}>
        <div className="left">
          {categorys?.level2?.map((v, i) => {
            return (
              <div
                key={v.id}
                className={`second-item ${v.isActive ? 'active' : ''}`}
                onClick={() => handleActive(v.id)}
              >
                {v.name}
              </div>
            )
          })}
        </div>
        <div className="right">
          {items
            .filter((v) => activeIds[1] && activeIds[1] === v.categoryId)
            .map((v) => (
              <div key={v.id}>
                <div key={v.id}>{v.name}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Category2
