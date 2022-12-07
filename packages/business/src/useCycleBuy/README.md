---
nav:
  path: /business
---

# useCycleBuy

日期周期/区间选择，用于周期购等场景

### 演示

<code src="./demo.tsx"></code>

### 用法

```javascript
function Comp() {
  const {
    dates,
    setDates,
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
      <div>{cycle === 'custom' && <RangePicker disabledDate={checkDateDisable} onChange={setRange} />}</div>
      result: {JSON.stringify(dates, undefined, 2)}
    </>
  )
}
```
