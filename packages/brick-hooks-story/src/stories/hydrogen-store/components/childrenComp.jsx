import React from 'react'

export default function ChildrenComp(props) {
  return (
    <div style={{ background: 'powderblue', margin: '10px 0', padding: 10, paddingTop: 0 }}>
      <h3>{props.title || ''}</h3>
      {props.children}
    </div>
  )
}
