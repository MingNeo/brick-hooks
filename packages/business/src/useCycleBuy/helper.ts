import moment from 'dayjs'

export const defaultModelKeyMap = {
  singleday: 'singleday', // 单次
  everyday: 'everyday', // 每日送
  weekday: 'weekday', // 工作日送
  oddday: 'oddday', // 单日
  evenday: 'evenday', // 双日
  threeday: 'threeday', // 三日送
  weekend: 'weekend', // 周末送
}

export const defaultModelMap = {
  singleday: {
    key: 'singleday',
    value: 'singleday',
    disabled: () => false,
  }, // 单次
  everyday: {
    key: 'everyday',
    value: 'everyday',
    disabled: () => false,
  }, // 每日送
  weekday: {
    key: 'weekday',
    value: 'weekday',
    disabled: (current) => [1, 2, 3, 4, 5].includes(current.day()),
  }, // 工作日送
  oddday: {
    key: 'oddday',
    value: 'oddday',
    disabled: (current) => current.date() % 2 === 0,
  }, // 单日
  evenday: {
    key: 'evenday',
    value: 'evenday',
    disabled: (current) => current.date() % 2 !== 0,
  }, // 双日
  threeday: {
    key: 'threeday',
    value: 'threeday',
    disabled: (current) => current.date() % 3 !== 0,
  }, // 三日送
  weekend: {
    key: 'weekend',
    value: 'weekend',
    disabled: (current) => [0, 6].includes(current.day()),
  }, // 周末送
}

export const defaultCycleMap = {
  custom: {
    key: 'custom',
    value: 0,
    check: (current) => true,
  }, // 自选
  nextMonth: {
    key: 'nextMonth',
    value: 1,
    check: (current) => isInMonthRange(current, 1),
  }, // 下个月
  nextTwoMonth: {
    key: 'nextTwoMonth',
    value: 2,
    check: (current) => isInMonthRange(current, 2),
  }, // 下两个月
  nextThreeMonth: {
    key: 'nextThreeMonth',
    value: 3,
    check: (current) => isInMonthRange(current, 3),
  }, // 下三个月
}

export function formatDatas(dates: any[]): any {
  const sortValue = dates.sort((a: any, b: any) => moment(a).diff(b))
  return {
    range: sortValue.length ? [moment(sortValue[0]), moment(sortValue[sortValue.length - 1])] : [],
    dates: sortValue,
  }
}

/**
 * 是否在下n个月
 * @param {*} current 当前时间 moment对象
 * @param {*} m 月份间隔
 */
export function isInMonthRange(current: any, m: number = 1) {
  const [start, end] = getMonthRange(moment(), m)
  return current.isBetween(start, end, 'day', '[]')
}

// 获取连续日期内的所有时间
export function getRangeDate([start, end] = []) {
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

export const getMonthRange = (current: any, m: number = 1): [any?, any?] => {
  return [moment(current).add(1, 'M').date(1), moment(current).add(m, 'M').endOf('month')]
}
