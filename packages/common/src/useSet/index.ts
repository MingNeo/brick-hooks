import useMethods from '../useMethods'

// export interface SetMethods<S> {
//   add: (item: S) => void
//   remove: (item: S) => void
//   toggle: (item: S) => void
//   reset: () => void
//   has: (item: S) => boolean
// }

const methods = {
  add: (prevState: Set<any>, item: any) => new Set(Array.from(prevState.add(item))),
  delete: (prevState: Set<any>, item: any) =>
    new Set(Array.from((prevState.delete(item), prevState))),
  has: (prevState: Set<any>, item: any) => prevState.has(item),
  toggle: (prevState: Set<any>, item: any) =>
    new Set(
      Array.from(prevState.has(item) ? (prevState.delete(item), prevState) : prevState.add(item))
    ),
  reset: (prevState: Set<any>, initialSet: Set<any>) => new Set(initialSet),
}

const useSet = <S>(initialSet = new Set<S>()) => {
  return useMethods(methods as any, initialSet)
}

export default useSet
