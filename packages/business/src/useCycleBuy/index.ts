import { useCallback, useEffect } from 'react'
import moment from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import { usePrevious, useMethods } from 'brick-hooks'
import { defaultModelKeyMap, defaultCycleKeyMap } from './defaultKeyMap'

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
export default function useDateCycle(defaultData: IdefaultData = {}, options: IOptions = {}) {
  const {
    modelKeyMap = defaultModelKeyMap,
    cycleKeyMap = defaultCycleKeyMap,
    customModels,
    customCycles,
  } = options
  const {
    model: defaultModel = '',
    cycle: defaultCycle = '',
    dates: defaultDates = [],
  } = defaultData

  const [{ dates, model, cycle, range }, dateCycleMethods] = useMethods(methods, {
    dates: defaultDates || [],
    model: defaultModel,
    cycle: defaultCycle,
    range: getDateRange(defaultDates || []),
  })

  const models = customModels || [
    { label: '单次购', value: modelKeyMap.singleday },
    { label: '每日送', value: modelKeyMap.everyday },
    { label: '工作日送', value: modelKeyMap.weekday },
    { label: '单日送', value: modelKeyMap.oddday },
    { label: '双日送', value: modelKeyMap.evenday },
    { label: '三日送', value: modelKeyMap.threeday },
    { label: '周末送', value: modelKeyMap.weekend },
  ]

  const cycles = customCycles || [
    { label: '随心订', value: cycleKeyMap.custom },
    { label: '下个月', value: cycleKeyMap.nextMonth },
    { label: '下两个月', value: cycleKeyMap.nextTwoMonth },
    { label: '下三个月', value: cycleKeyMap.nextThreeMonth },
  ]

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

  const setRangeAndDates = useCallback(
    ({ cycle: newCycle, model: newModel, dates: newDates }, setRangeBydate = false) => {
      let currentRange = range && range.length ? range : []
      if (isNil(newCycle) && newCycle !== cycleKeyMap.custom) {
        const current = moment()
        const monthNum = {
          [cycleKeyMap.nextMonth]: 1,
          [cycleKeyMap.nextTwoMonth]: 2,
          [cycleKeyMap.nextThreeMonth]: 3,
        }[newCycle]
        currentRange = getMonthRange(current, monthNum)
        dateCycleMethods.setRange(currentRange as any[])
      } else if (setRangeBydate || !range) {
        currentRange = getDateRange(newDates || dates)
        dateCycleMethods.setRange(currentRange as any[])
      }

      const dateList = getRangeDate(currentRange as any).filter(
        (date) => !getIsDateDisabled(date, newModel || model, modelKeyMap)
      )
      dateCycleMethods.setDates(dateList)
    },
    [model, range, cycle, dates, modelKeyMap]
  )

  // const prevModel = usePrevious(model)
  // const prevCycle = usePrevious(cycle)

  useEffect(() => {
    dateCycleMethods.setModel(defaultData.model)
  }, [defaultData.model])

  useEffect(() => {
    dateCycleMethods.setCycle(defaultData.cycle)
  }, [defaultData.cycle])

  // 校验当前时间点是否可选
  const checkDateDisable = useCallback(
    (current) => {
      // 当前日期两天之后之前禁选
      if (current && current.isSameOrBefore(moment().add(2, 'd'))) return true
      if (!isCycleInRange(current, cycle, cycleKeyMap)) return true

      const isDisabled = getIsDateDisabled(current, model, modelKeyMap)
      return isDisabled
    },
    [model, cycle, modelKeyMap, cycleKeyMap]
  )

  return {
    dates,
    onChangeDates,
    model,
    models,
    cycles,
    range,
    setRange: dateCycleMethods.setRange,
    onChangeModel,
    cycle,
    onChangeCycle,
    checkDateDisable,
  }
}

function getIsDateDisabled(current: any, model: any, modelKeyMap: IKeyMap) {
  const currDate = moment(current)
  switch (model) {
    case modelKeyMap.everyday:
      return false
    case modelKeyMap.weekday:
      return [1, 2, 3, 4, 5].includes(currDate.day())
    case modelKeyMap.oddday:
      return currDate.date() % 2 === 0
    case modelKeyMap.evenday:
      return currDate.date() % 2 !== 0
    case modelKeyMap.threeday:
      return currDate.date() % 3 !== 0
    case modelKeyMap.weekend:
      return [0, 6].includes(currDate.day())
    default:
      return false
  }
}

function isCycleInRange(current: any, cycle: string | number, cycleKeyMap: IKeyMap) {
  switch (cycle) {
    case cycleKeyMap.nextMonth:
      return isInMonthRange(current, 1)
    case cycleKeyMap.nextTwoMonth:
      return isInMonthRange(current, 2)
    case cycleKeyMap.nextThreeMonth:
      return isInMonthRange(current, 3)
    default:
      return true
  }
}

const getMonthRange = (current: any, m: number = 1): [any?, any?] => {
  return [moment(current).add(1, 'M').date(1), moment(current).add(m, 'M').endOf('month')]
}

export const getDateRange = (dates: any[]): any => {
  const sortValue = dates.sort((a: any, b: any) => moment(a).diff(b))
  return sortValue.length ? [moment(sortValue[0]), moment(sortValue[sortValue.length - 1])] : []
}

/**
 *
 * @param {*} current 当前时间 moment对象
 * @param {*} m 月份间隔
 */
function isInMonthRange(current: any, m: number = 1) {
  const [start, end] = getMonthRange(moment(), m)
  return current.isBetween(start, end, 'day', '[]')
}

// 获取连续日期内的所有时间
function getRangeDate([start, end] = []) {
  const current = moment(start)
  const list = []
  let next = true
  while (next) {
    if ((current as any).isSameOrBefore(end)) {
      list.push(current.format('YYYY-MM-DD'))
      current.add(1, 'd')
    } else {
      next = false
    }
  }
  return list
}
