import { useCallback, useEffect } from 'react'
import moment from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import { usePrevious, useMethods } from 'brick-hooks'
import { defaultModelMap, defaultCycleMap, getMonthRange, formatDatas, getRangeDate } from './helper'

moment.extend(isSameOrAfter)

function isNil(value) {
  return value !== '' && value !== undefined && value !== null
}

type IKeyMap = Record<string, number | string>

interface IdefaultData {
  model?: string | number
  cycle?: string | number
  dates?: string[]
  range?: any[]
}

interface IOptions extends Record<string, any> {
  modelKeyMap?: IKeyMap
  cycleKeyMap?: IKeyMap
  models?: { label: string; value: string | number }[]
  cycles?: { label: string; value: string | number }[]
  onChangeModel?: (val: string | number) => any
  onChangeField?: (val: string | number) => any
}

const methods = {
  setState: (state, payload) => ({ ...state, ...payload }),
  setDates: (state, nextValue) => ({ ...state, dates: nextValue }),
  setModel: (state, nextValue) => ({ ...state, model: nextValue }),
  setCycle: (state, nextValue) => ({ ...state, cycle: nextValue }),
  setRange: (state, nextValue) => ({ ...state, dates: nextValue }),
}

/**
 * 日期周期/区间选择，用于周期购等场景
 */
export default function useCycleBuy(defaultData: IdefaultData = {}, options: IOptions = {}) {
  const { modelMap = defaultModelMap, cycleMap = defaultCycleMap, customModels, customCycles } = options
  const { model: defaultModel = '', cycle: defaultCycle = '', dates: defaultDates = [] } = defaultData

  const [{ dates, model, cycle, range }, dateCycleMethods] = useMethods(methods, {
    dates: defaultDates || [],
    model: defaultModel,
    cycle: defaultCycle,
    range: formatDatas(defaultDates || [])?.range,
  })

  const models = customModels || [
    { label: '单次购', value: modelMap.singleday.key },
    { label: '每日送', value: modelMap.everyday.key },
    { label: '工作日送', value: modelMap.weekday.key },
    { label: '单日送', value: modelMap.oddday.key },
    { label: '双日送', value: modelMap.evenday.key },
    { label: '三日送', value: modelMap.threeday.key },
    { label: '周末送', value: modelMap.weekend.key },
  ]

  const cycles = customCycles || [
    { label: '随心订', value: cycleMap.custom.key },
    { label: '下个月', value: cycleMap.nextMonth.key },
    { label: '下两个月', value: cycleMap.nextTwoMonth.key },
    { label: '下三个月', value: cycleMap.nextThreeMonth.key },
  ]

  // 当日期为连续时间段时
  const setRangeAndDates = useCallback(
    ({ cycle: newCycle, model: newModel, dates: newDates }, setRangeBydate = false) => {
      let currentRange = range && range.length ? range : []
      if (isNil(newCycle) && newCycle !== cycleMap.custom.key) {
        const current = moment()
        const monthNum = cycleMap[newCycle]?.value
        currentRange = getMonthRange(current, monthNum)
        dateCycleMethods.setRange(currentRange as any[])
      } else if (setRangeBydate || !range?.length) {
        currentRange = formatDatas(newDates || dates)?.range
        dateCycleMethods.setRange(currentRange as any[])
      }

      const getIsDisabled = modelMap[newModel || model]?.disabled || (() => false)
      // 过滤掉禁用的日期
      const dateList = getRangeDate(currentRange as any).filter((date) => !getIsDisabled(date))
      dateCycleMethods.setDates(dateList)
    },
    [model, range, dates, modelMap, cycleMap, dateCycleMethods]
  )

  const onChangeModel = (newModel: string | number) => {
    dateCycleMethods.setModel(newModel)
    setRangeAndDates({ cycle, model: newModel })
  }

  const onChangeCycle = (newCycle: string | number) => {
    dateCycleMethods.setCycle(newCycle)
    setRangeAndDates({ cycle: newCycle, model })
  }

  const onChangeDates = (newDates: any) => {
    // setDates(newDates);
    setRangeAndDates({ cycle, model, dates: newDates }, true)
  }

  // const prevModel = usePrevious(model)
  // const prevCycle = usePrevious(cycle)

  useEffect(() => {
    dateCycleMethods.setModel(defaultData.model)
  }, [dateCycleMethods, defaultData.model])

  useEffect(() => {
    dateCycleMethods.setCycle(defaultData.cycle)
  }, [dateCycleMethods, defaultData.cycle])

  // 校验当前时间点是否可选
  const checkDateDisable = useCallback(
    (current) => {
      // 当前日期两天之后之前禁选
      if (current && current.isSameOrBefore(moment().add(2, 'd'))) return true
      if (!isCycleInRange(current, cycle, cycleMap)) return true
      const getIsDisabled = modelMap[model]?.disabled || (() => false)
      const isDisabled = getIsDisabled(current)
      return isDisabled
    },
    [cycle, cycleMap, modelMap, model]
  )

  return {
    dates,
    onChangeDates,
    model,
    models,
    cycles,
    range, // 返回一个
    setRange: dateCycleMethods.setRange,
    onChangeModel,
    cycle,
    onChangeCycle,
    checkDateDisable,
  }
}

function isCycleInRange(current: any, cycle: string | number, cycleMap: any) {
  const isInMonthRange = cycleMap[cycle] || (() => true)
  return isInMonthRange(current)
}
