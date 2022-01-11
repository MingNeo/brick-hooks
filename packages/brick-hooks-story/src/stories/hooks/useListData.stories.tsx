import React from 'react'
import useListData from 'brick-hooks/src/useListData'
import ReactJson from 'react-json-view'

export default {
  title: 'useListData',
}

function ShowResult ({ origin, result }) {
  const options = {
    enableClipboard: false,
    displayDataTypes: false,
    displayObjectSize: false,
    name: null,
    quotesOnKeys: false,
    displayArrayKey: false
  }
  return <div>
    <div>origin: <ReactJson src={origin} { ...options} /></div>
    <div>result: <ReactJson src={result} { ...options} /></div>
  </div>
}

export const Default = () => {
  const initialValue = [
    { id: 'q1', city: 'qingdao', value: 0 },
    { id: 'q2', city: 'qingdao', value: 1 },
    { id: 'h1', city: 'hangzhou', value: 2 },
    { id: 'h2', city: 'hangzhou', value: 3 },
  ]
  
  const data = useListData(initialValue, (originValue, { chain }) =>
    chain(originValue)
      .filter((v) => v.value !== 0)
      .partition({ groupKey: 'city' })
      .value()
  )

  return <ShowResult origin={initialValue} result={data} />
}

Default.story = {
  name: 'default',
}

export const TransObj = () => {
  const initialValue = [
    { id: 'a001', pid: 0, value: '山东' },
    { id: 'a002', pid: 'a001', value: '济南' },
    { id: 'a003', pid: 'a001', value: '青岛' },
    { id: 'a004', pid: 'a001', value: '烟台' },
  ]
  
  const data = useListData(initialValue, (originValue, { transObj }) => transObj(originValue))

  return <ShowResult origin={initialValue} result={data} />
}

TransObj.story = {
  name: 'TransObj',
}

export const TransTree = () => {
  const initialValue = [
    { id: 'a001', pid: 0, value: '山东' },
    { id: 'a002', pid: 'a001', value: '济南' },
    { id: 'a003', pid: 'a001', value: '青岛' },
    { id: 'a004', pid: 'a001', value: '烟台' },
  ]
  
  const data = useListData(initialValue, (originValue, { transTree }) => transTree(originValue))

  return <ShowResult origin={initialValue} result={data} />
}

TransTree.story = {
  name: 'TransTree',
}

export const TransToGroup = () => {
  const initialValue = [
    { id: 'q1', city: 'qingdao', value: 0 },
    { id: 'q2', city: 'qingdao', value: 1 },
    { id: 'h1', city: 'hangzhou', value: 2 },
    { id: 'h2', city: 'hangzhou', value: 3 },
  ]
  
  const data = useListData(initialValue, (value, { group }) => group(value, { groupKey: 'city' }))

  return <ShowResult origin={initialValue} result={data} />
}

TransToGroup.story = {
  name: 'TransToGroup',
}

export const TransToPartition = () => {
  const initialValue = [
    { id: 'q1', city: 'qingdao', value: 0 },
    { id: 'q2', city: 'qingdao', value: 1 },
    { id: 'h1', city: 'hangzhou', value: 2 },
    { id: 'h2', city: 'hangzhou', value: 3 },
  ]
  
  const data = useListData(initialValue, (originValue, { partition }) => partition(originValue, { groupKey: 'city' }))

  return <ShowResult origin={initialValue} result={data} />
}

TransToPartition.story = {
  name: 'TransToPartition',
}