import moment from 'dayjs'
import { useCallback, useMemo, useState } from 'react'
import { isNil } from '../utils'
import { defaultCycles, defaultModels, formatDatas, getMap, getRangeDate } from './helper'

interface Data {
  model?: string | number
  cycle?: string | number
  dates?: string[]
  range?: string[]
}

interface Model {
  key: string
  value: string
  name: string
  disabled: () => boolean
}

interface Cycle {
  key: string
  value: string
  name: string
  check?: (current: any) => boolean
  range: (current: any) => [any?, any?]
}

interface Options {
  models?: Model[]
  cycles?: Cycle[]
}

/**
 * 日期周期/区间选择，用于周期购等场景
 */
export default function useCycleBuy(defaultData: Data = {}, options: Options = {}) {
  const { models = defaultModels as unknown as Model[], cycles = defaultCycles as unknown as Cycle[] } = options
  const { model: defaultModel = '', cycle: defaultCycle = '', dates: defaultDates = [] } = defaultData

  const modelMap = useMemo(() => getMap(models), [models])
  const cycleMap = useMemo(() => getMap(cycles), [cycles])

  const [{ dates, model, cycle, range }, setState] = useState<Data>({
    dates: defaultDates || [],
    model: defaultModel,
    cycle: defaultCycle,
    range: formatDatas(defaultDates || [])?.range,
  })

  const getDates = useCallback(
    ({ model, range }) => {
      const getIsDisabled = modelMap[model]?.disabled || (() => false)
      // // 过滤掉禁用的日期
      return getRangeDate(range).filter((date) => !getIsDisabled(date))
    },
    [modelMap],
  )

  // 当日期为连续时间段时
  const setRangeAndDates = useCallback(
    ({ cycle: newCycle, model: newModel, dates: newDates, range: newRange }, willSetRangeBydate = false) => {
      setState((prev: Data) => {
        let currentRange = prev.range?.length ? prev.range : []
        const nextState: Data = {}
        if (newRange) {
          currentRange = newRange
        } else if (willSetRangeBydate || newDates) {
          currentRange = formatDatas(newDates || prev.dates)?.range
        } else if (!isNil(newCycle) && newCycle !== cycleMap.custom.key) {
          const current = moment()
          currentRange = cycleMap[newCycle]?.range(current)
        }
        nextState.range = currentRange
        const dateList = getDates({ model: newModel || prev.model, range: currentRange })
        return {
          ...prev,
          cycle: newCycle ?? prev.cycle,
          model: newModel ?? prev.model,
          dates: dateList,
          range: currentRange,
        }
      })
    },
    [setState, cycleMap, getDates],
  )

  const setModel = (newModel: string | number) => {
    setRangeAndDates({ model: newModel })
  }

  const setCycle = (newCycle: string | number) => {
    setRangeAndDates({ cycle: newCycle })
  }

  const setDates = (newDates: string[], willSetRangeBydate = false) => {
    setRangeAndDates({ dates: newDates, willSetRangeBydate })
  }

  const setRange = (newRange: string[]) => {
    setRangeAndDates({ range: newRange })
  }

  // 校验当前时间点是否可选
  const checkDateDisable = useCallback(
    (current) => {
      const startDate = moment().add(2, 'd')
      // 当前日期两天之后之前禁选
      if (current && (current.isSame(startDate, 'day') || current.isBefore(startDate, 'day'))) return true
      if (!(cycleMap[cycle]?.check || (() => true))(current, cycle, cycleMap)) return true
      const getIsDisabled = modelMap[model]?.disabled || (() => false)
      return getIsDisabled(current)
    },
    [cycle, cycleMap, modelMap, model],
  )

  return {
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
  }
}
