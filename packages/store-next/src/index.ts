import { Store } from './store'
import createStore from './base';
export * from './types'

const { store, useStore, registerModule, usePlugins, getStoreState, setStoreState, dispatch } =
  createStore()

export {
  Store,
  store,
  useStore,
  createStore,
  registerModule,
  usePlugins,
  getStoreState,
  setStoreState,
  dispatch,
}
