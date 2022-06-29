export function invariant(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(message)
  }
}

export function isNil(value: any) {
  return value === undefined || value === null
}

export function isObject(value: any) {
  return typeof value === 'object' && Object.prototype.toString.call(value) === '[object Object]'
}

export function chunkArray(array, size = 1) {
  const length = array?.length || 0
  if (!length || size < 1) {
    return []
  }

  let index = 0
  const result = []

  while (index < length) {
    result.push(array.slice(index, (index += size)))
  }
  return result
}

export const isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement)

export const formatTime = (timestamp: number, format = 'dd hh:mm:ss.SSS'): string => {
  let formatedStr = format
  const dateFormat: any = {
    'd+': Math.floor(timestamp / 1000 / 60 / 60 / 24), // 天
    'h+': Math.floor((timestamp / 1000 / 60 / 60) % 24), // 时
    'm+': Math.floor((timestamp / 1000 / 60) % 60), // 分
    's+': Math.floor((timestamp / 1000) % 60), // 秒
    'S+': timestamp % 1000,
  }

  Object.entries(dateFormat).forEach(([key, value]) => {
    const reg = new RegExp(`(${key})`)
    if (reg.test(formatedStr))
      formatedStr = formatedStr.replace(reg, (m) => {
        if (key === 'S+') {
          return `${value}${new Array(m.length).join('0')}`.slice(0, m.length)
        }
        return m.length === 1 ? `${value}` : `00${value}`.substring(`${value}`.length)
      })
  })
  return formatedStr
}

const TIME_FORMAT_REG = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/

export const getDateByString = (date: string, utc = false) => {
  if (typeof date === 'string' && !/Z$/i.test(date)) {
    const d = date.match(TIME_FORMAT_REG) as any[]

    if (d) {
      const m = d[2] - 1 || 0
      const ms = (d[7] || '0').substring(0, 3)

      if (utc) {
        return new Date(Date.UTC(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms))
      }

      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms)
    }
  }

  return new Date(date)
}

export const getTimeByString = (date: string, utc = false) => getDateByString(date, utc).getTime()
