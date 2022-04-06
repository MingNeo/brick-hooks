import createStore from './createStore'
export { default as createApp, createContainer } from './createApp'
export * from './types'

const {
  StoreClass: Store,
  store,
  useStore,
  registerModule,
  usePlugins,
  getStoreState,
  setStoreState,
  dispatch,
} = createStore()

export { Store, store, useStore, createStore, registerModule, usePlugins, getStoreState, setStoreState, dispatch }
