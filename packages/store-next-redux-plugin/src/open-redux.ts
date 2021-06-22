/* eslint-disable react-hooks/rules-of-hooks */
import { createReduxStore, UnsubscribeFn, EnhancedStore } from './create-redux-store'



/**
 * 当这个插件开启时，store-next的state会同步到redux-dev-tool
 * 具体来说，开启这个插件的时候，所有的store操作被redux接管，并在redux数据变化后通知到store-next更新数据
 * @param store store-next的store实例
 * @param reduxStoreName 
 * @param initialState 
 * @param reducers 
 * @returns 
 */
export default function openRedux(store, reduxStoreName, initialState, reducers) {
  // TODO 热更新的情况下需要特殊处理
  const reduxStore: EnhancedStore = createReduxStore({ name: reduxStoreName, initialState, reducers })

  const dispatch = (action: any) => {
    if (action && typeof action === 'object' && typeof action.type === 'string') {
      reduxStore?.dispatch(action)
    }
  }

  // 订阅redux store的state并返回解除订阅的函数
  // 当redux store的state变化时，触发store-next的数据变更
  const unsubscribe: UnsubscribeFn = reduxStore?.subscribe(() => {
    const storeState: any = reduxStore?.getState()
    const prevState = store.getState()

    // 合并实际的module和注册的module
    Object.keys(storeState).forEach(item => store._modules.add(item))

    Array.from(store._modules).forEach((modeuleName: string) => {
      const moduleState = storeState[modeuleName]
      if (prevState[modeuleName] !== moduleState) {
        store._setModuleState(modeuleName, moduleState, false)
      }
      prevState[modeuleName] = moduleState
    })
  })

  return {
    registerModule: reduxStore.registerModule,
    dispatch,
    unsubscribe,
    replaceReducer: reduxStore.replaceReducer,
    reduxStore,
  }
}
