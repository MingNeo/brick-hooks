export type StoreState = Record<string, any>
export type Dispatch<A> = (value: A) => void | StoreState | Promise<any>
export interface Module {
  state: StoreState
  reducers?: Record<string, any>
}
export type Modules = Record<string, Module>
export type Plugin = <StoreClass>(Store: StoreClass) => (store: any) => any
export interface Options<S = Record<string, any>> extends Record<string, any> {
  modules?: Modules
  plugins?: Plugin[]
  devtoolId?: string
  initialState?: S
}

// useStore
export type StoreHookDispatch = (actionName: string, ...args: any[]) => void
export type SetStoreAction<S> = S | ((prevState: S) => S)
export type SetStore<A> = (value: A, merge?: boolean) => void
export type BoundMethods<S> = Record<string, (state: S, payload?: any) => S>
export type ToolMethods<S> = {
  dispatch: StoreHookDispatch
} & Exclude<Record<string, (payload?: any) => S>, 'dispatch'>
export interface Methods<S> {
  setStore: SetStore<SetStoreAction<S>>
  dispatch: StoreHookDispatch
  boundMethods: BoundMethods<S>
}
export type UseStore = <S>(
  moduleName?: string,
  autoMerge?: boolean,
  willUpdate?: boolean
) => [S, SetStore<SetStoreAction<S>>, ToolMethods<S>]
export type UseStoreByContext = <S>(
  storeContext: any,
  moduleName?: string,
  autoMerge?: boolean,
  willUpdate?: boolean
) => [S, SetStore<SetStoreAction<S>>, ToolMethods<S>]  