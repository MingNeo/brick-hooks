import React, { useMemo } from 'react'
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
  const { loading, checkedIds, activeIds, maxLevel, flatNodes, loadSub, setActive, toggleChecked } = useCascader({
    fetchSub,
    parentIdKey: 'pid',
    data: useMemo(() => areaJson.filter((v) => !v.pid), []),
  })

  const clumns = new Array(maxLevel).fill(0).map((v, i) => ({
    level: i + 1,
    list: flatNodes
      .filter((v) => v.level === i + 1 && (i < 1 || v.pid === activeIds[i - 1]))
      .map((v) => ({
        ...v,
        isActive: activeIds.includes(v.id),
        checked: checkedIds.includes(v.id),
      })),
  }))

  return (
    <div>
      {/* <p>activeIds: {JSON.stringify(activeIds, undefined, 2)}</p> */}
      <p>checkedIds: {JSON.stringify(checkedIds, undefined, 2)}</p>
      {loading ? 'loading' : ''}
      <div style={{ display: 'flex' }}>
        {clumns.map(({ level, list }) => (
          <div key={level}>
            <h3>第{level}级</h3>
            <ul style={{ padding: 0, marginRight: 10 }}>
              {list.map((v) => (
                <div
                  key={v.id}
                  style={v.isActive ? { background: 'blue', color: 'white' } : {}}
                  onClick={() => {
                    setActive(v.id)
                    loadSub(v.id)
                  }}
                >
                  <input type="checkbox" checked={v.checked} onChange={() => toggleChecked(v.id)} /> {v.name}
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* <div>{JSON.stringify(flatNodes)}</div> */}
    </div>
  )
}
