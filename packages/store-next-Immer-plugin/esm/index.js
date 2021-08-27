import produce from 'immer';
/**
 * 使用这个插件后，store-next的将可以使用effects处理异步
 * @param Store
 * @returns
 */
export default function ImmerPlugin(Store) {
    Store.prototype.dispatchModuleAction = function (moduleName, actionName, payload) {
        var _a, _b;
        if (!moduleName)
            return;
        const reducer = (_b = (_a = this._reducers) === null || _a === void 0 ? void 0 : _a[moduleName]) === null || _b === void 0 ? void 0 : _b[actionName];
        if (!reducer)
            throw new Error(`not found reducer ${actionName}`);
        const prevState = this._state[moduleName];
        this._state[moduleName] = produce(prevState, (draft) => reducer(draft, payload)
        // Options.patchListener as PatchListener | undefined
        );
        // 触发react组件更新
        this.publish(`storeChange.${moduleName}`, this._state[moduleName]);
    };
    // const originInitialBase = Store.prototype.initialBase
    // Store.prototype.initialBase = function (options?: Options<S>) {
    //   originInitialBase.call(this, options)
    //   Object.keys(this._state).forEach((module) => {
    //     this._state[module] = produce(
    //       this._state[module],
    //       (draft: Draft<S>) => draft
    //       // Options.patchListener as PatchListener | undefined
    //     )
    //   })
    //   const { _base, ...moduleReducers } = this._reducers
    //   this._reducers = Object.entries(moduleReducers).reduce(
    //     (prev, [module, moduleReducers]) => ({ ...prev, [module]: getReducersImmer(moduleReducers) }),
    //     { _base }
    //   )
    //   console.log('_reducers', this._reducers, moduleReducers)
    // }
    // const originRegisterModule = Store.prototype.registerModule
    // Store.prototype.registerModule = function (moduleName: string, initialModule: Module) {
    //   originRegisterModule.call(this, moduleName, initialModule)
    //   if (this._reducers[moduleName]) {
    //     this._reducers[moduleName] = getReducersImmer(this._reducers[moduleName])
    //   }
    // }
    // Store.prototype._setState = function(nextState: {} | S) {
    //   this._state = nextState
    //   this.publish('storeChange', this._state)
    // }
    return function initial(store) { };
}
function getReducersImmer(reducers) {
    return Object.entries(reducers).reduce((prevReducers, [reducerAction, reducer]) => (prevState, payload) => (Object.assign(Object.assign({}, prevReducers), { [reducerAction]: produce(prevState, (draft) => reducer(draft, payload)) })), {});
}
