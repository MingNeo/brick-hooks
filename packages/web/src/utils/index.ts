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

/**
 * @example '2px' + 1 = '3px'
 * @example '15em' + (-2) = '13em'
 */
 export function increaseWithUnit(target: string | number, delta: number): string | number {
  if (typeof target === 'number')
    return target + delta
  const value = target.match(/^-?[0-9]+\.?[0-9]*/)?.[0] || ''
  const unit = target.slice(value.length)
  const result = (parseFloat(value) + delta)
  if (Number.isNaN(result))
    return target
  return result + unit
}