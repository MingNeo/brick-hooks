import moment from 'dayjs'

export const defaultModels = [
  {
    key: 'singleday',
    value: 'singleday',
    name: '单次购',
    disabled: () => false,
  }, // 单次
  {
    key: 'everyday',
    value: 'everyday',
    name: '每日送',
    disabled: () => false,
  }, // 每日送
  {
    key: 'weekday',
    value: 'weekday',
    name: '工作日送',
    disabled: (current) => [0, 6].includes(moment(current).day()),
  }, // 工作日送
  {
    key: 'oddday',
    value: 'oddday',
    name: '单日送',
    disabled: (current) => moment(current).date() % 2 === 0,
  }, // 单日
  {
    key: 'evenday',
    value: 'evenday',
    name: '双日送',
    disabled: (current) => moment(current).date() % 2 !== 0,
  }, // 双日
  {
    key: 'threeday',
    value: 'threeday',
    name: '三日送',
    disabled: (current) => moment(current).date() % 3 !== 0,
  }, // 三日送
  {
    key: 'weekend',
    value: 'weekend',
    name: '周末送',
    disabled: (current) => [1, 2, 3, 4, 5].includes(moment(current).day()),
  }, // 周末送
]

export const defaultCycles = [
  {
    key: 'custom',
    value: 'custom',
    name: '随心订',
    check: (current) => true,
    range: (current) => getMonthRange(current, 0),
  }, // 自选
  {
    key: 'nextMonth',
    value: 'nextMonth',
    name: '下个月',
    check: (current) => isInMonthRange(current, 1),
    range: (current) => getMonthRange(current, 1),
  }, // 下个月
  {
    key: 'nextTwoMonth',
    value: 'nextTwoMonth',
    name: '下两个月',
    check: (current) => isInMonthRange(current, 2),
    range: (current) => getMonthRange(current, 2),
  }, // 下两个月
  {
    key: 'nextThreeMonth',
    value: 'nextThreeMonth',
    name: '下三个月',
    check: (current) => isInMonthRange(current, 3),
    range: (current) => getMonthRange(current, 3),
  }, // 下三个月
]

export const getMap = (arr) => arr.reduce((prev, cur) => ({ ...prev, [cur.key]: cur }), {})

export function formatDatas(dates: any[]): any {
  const sortValue = dates.sort((a: any, b: any) => moment(a).diff(b))
  return {
    range: sortValue.length ? [sortValue[0], sortValue[sortValue.length - 1]] : [],
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
  return current.isAfter(moment(start).subtract(1, 'day'), 'day') && current.isBefore(moment(end).add(1, 'day'), 'day')
}

// 获取连续日期内的所有时间
export function getRangeDate([start, end] = []) {
  let next = moment(start)
  const list = []
  while (next) {
    if (end) {
      if (next.isSame(end)) {
        list.push(next.format('YYYY-MM-DD'))
        next = undefined
      } else if (next.isBefore(end)) {
        list.push(next.format('YYYY-MM-DD'))
        next = next.add(1, 'd')
      } else {
        next = undefined
      }
    } else {
      list.push(next.format('YYYY-MM-DD'))
      next = undefined
    }
  }
  return list
}

export const getMonthRange = (current: any, m: number = 1): [any?, any?] => {
  return [moment(current).add(1, 'M').date(1), moment(current).add(m, 'M').endOf('month')]
}
