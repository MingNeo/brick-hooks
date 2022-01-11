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
