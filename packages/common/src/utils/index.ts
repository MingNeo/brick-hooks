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