import React from 'react'
import { DatePicker, Radio } from 'antd'
import 'antd/es/date-picker/style/css'
import 'antd/es/radio/style/css'
import useCycleBuy from '.'

const { RangePicker } = DatePicker

const UseCycleBuy = () => {
  const {
    dates,
    model,
    models,
    cycles,
    range, // 返回一个
    setRange,
    setModel,
    cycle,
    setCycle,
    checkDateDisable,
  } = useCycleBuy({ model: 'singleday', cycle: 'custom' })
  const onModelChange = (e) => {
    setModel(e.target.value)
  }
  const onCycleChange = (e) => {
    setCycle(e.target.value)
  }
  return (
    <>
      <div>
        <Radio.Group onChange={onModelChange} defaultValue={model}>
          {models.map((v) => (
            <Radio.Button key={v.key} value={v.value}>
              {v.name}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>

      <div>
        {model !== 'singleday' && (
          <Radio.Group onChange={onCycleChange} defaultValue={cycle}>
            {cycles.map((v) => (
              <Radio.Button key={v.key} value={v.value}>
                {v.name}
              </Radio.Button>
            ))}
          </Radio.Group>
        )}
      </div>

      <div>
        {cycle === 'custom' && (
          <RangePicker
            disabledDate={checkDateDisable}
            onChange={(values, formatString) => setRange(values.map((v) => v.format()))}
          />
        )}
      </div>

      {JSON.stringify(dates, undefined, 2)}
      {JSON.stringify(range, undefined, 2)}
    </>
  )
}

export default UseCycleBuy
