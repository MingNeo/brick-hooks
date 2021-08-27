import useMethods from '../useMethods';
// export interface SetMethods<S> {
//   add: (item: S) => void
//   remove: (item: S) => void
//   toggle: (item: S) => void
//   reset: () => void
//   has: (item: S) => boolean
// }
const methods = {
    add: (prevState, item) => new Set(Array.from(prevState.add(item))),
    delete: (prevState, item) => new Set(Array.from((prevState.delete(item), prevState))),
    has: (prevState, item) => prevState.has(item),
    toggle: (prevState, item) => new Set(Array.from(prevState.has(item) ? (prevState.delete(item), prevState) : prevState.add(item))),
    reset: (prevState, initialSet) => new Set(initialSet),
};
const useSet = (initialSet = new Set()) => {
    return useMethods(methods, initialSet);
};
export default useSet;
