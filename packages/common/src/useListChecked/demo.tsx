import React from 'react'
import useListChecked from '.'

export default function Demo({ list = [{ id: 'A1' }, { id: 'A2' }, { id: 'A3' }] }) {
  const { isAllChecked, checkedIds, toggleChecked, toggleAllChecked } = useListChecked(list, [])

  return (
    <div>
      <span>
        <input type="checkbox" checked={isAllChecked} onChange={() => toggleAllChecked()} />
        全选
      </span>
      {list.map((v) => (
        <div key={v.id}>
          <input type="checkbox" checked={checkedIds.includes(v.id)} onChange={() => toggleChecked(v.id)} />
          {v.id}
        </div>
      ))}
    </div>
  )
}
