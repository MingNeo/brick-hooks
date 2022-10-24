import React from 'react'
import 'antd/es/cascader/style/css'
import areaJson from './area'
import useCascader from '..'

const fetchSub = ({ id = 0 }: any = {}) => {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve(id === 0 ? areaJson.filter((v) => !v.pid) : areaJson.filter((v) => v.pid === id))
    }, 100)
  })
}

export default function Demo() {
  const { checkedIds, activeIds, maxLevel, flatNodes, loadSub, setActive, toggleChecked } = useCascader({
    fetchSub,
    parentIdKey: 'pid',
  })

  return (
    <div>
      {JSON.stringify(activeIds)}
      {/* <div>{JSON.stringify(flatNodes)}</div> */}

      <div style={{ display: 'flex' }}>
        {new Array(maxLevel).fill(0).map((v, i) => (
          <div key={i}>
            <h3>第{i + 1}级</h3>
            <ul>
              {flatNodes
                .filter((v) => v.level === i + 1 && v.pid === activeIds[i - 1])
                .map((v) => {
                  return (
                    <div
                      key={v.id}
                      onClick={() => {
                        setActive(v)
                        loadSub(v)
                      }}
                    >
                      <input type="checkbox" checked={checkedIds.includes(v.id)} onChange={() => toggleChecked(v.id)} />{' '}
                      {v.name}
                    </div>
                  )
                })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
