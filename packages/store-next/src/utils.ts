export function combineFlatReducers(modules = {}, defaultReducers = {}): any {
  return Object.entries(modules).reduce(
    (prev, [moduleName, value]: any[]) => {
      if (!value?.reducers) return prev

      Object.entries(value?.reducers).forEach(([actionName, reducer]) => {
        prev[`${moduleName}/${actionName}`] = reducer
      })
      return prev
    },
    { ...defaultReducers }
  )
}

export function combineReducers(reducers = {}, defaultReducers = {}) {
  return Object.entries(reducers).reduce(
    (prev, [moduleName, value]: any[]) => {
      if (value) prev[moduleName] = value
      return prev
    },
    { _base: defaultReducers }
  )
}

export function combState(modules = {}) {
  return Object.entries(modules).reduce((prev, [moduleName, value]: any[]) => {
    if (value) prev[moduleName] = value.state
    return prev
  }, {} as any)
}

export function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}
