import { useState, useCallback } from 'react'
import moment from 'dayjs'
// import business from 'moment-business'

interface DefaultData {
  model?: string
  cycle?: string
}

interface CheckDateDisable {
  (currennt: any): boolean
}

const methods = {
  everyday: () => false,
  weekday: (currentMoment) => [1, 2, 3, 4, 5].includes(currentMoment.day()),
  oddday: (currentMoment) => currentMoment.date() % 2 === 0,
  evenday: (currentMoment) => currentMoment.date() % 2 !== 0,
  threeday: (currentMoment) => currentMoment.date() % 3 !== 0,
  weekend: (currentMoment) => [0, 6].includes(currentMoment.day()),
}

/**
 * 日期周期/区间选择，用于周期购等场景
 */
export default function useDateCycle(defaultData: DefaultData = {}) {
  // model type everyday 每日送 weekday 工作日送 oddday 单日 evenday 双日 threeday 三日送 weekend 周末送
  const [model, setModel] = useState(defaultData.model || '')
  // 周期 自选、下个月、下两个月、下三个月
  const [cycle, setCycle] = useState(defaultData.cycle || '')

  // 校验当前时间点是否可选
  const checkDateDisable: CheckDateDisable = useCallback(
    (current) => {
      // 当前日期两天之后之前禁选
      if (current && (current as any).isSameOrBefore(moment().add(2, 'd'))) return true
      if (!isCycleInRange(current, cycle)) return true

      return methods[model] ? methods[model](current) : false
    },
    [model, cycle]
  )

  return {
    model,
    onChangeModel: setModel,
    cycle,
    onChangeCycle: setCycle,
    checkDateDisable,
  }
}

function isCycleInRange(current: any, cycle: any) {
  switch (cycle) {
    case 'nextMonth':
      return isInMonthRange(current, 1)
    case 'nextTwoMonth':
      return isInMonthRange(current, 2)
    case 'nextThreeMonth':
      return isInMonthRange(current, 3)
    default:
      return true
  }
}

/**
 *
 * @param {*} current 当前时间 moment对象
 * @param {*} m 月份间隔
 */
function isInMonthRange(current: any, m: number = 1) {
  return current.isBetween(moment().add(1, 'M').date(1), moment().add(m, 'M').endOf('month'), undefined, '[]')
}
