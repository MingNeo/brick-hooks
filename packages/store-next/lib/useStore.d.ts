declare type SetStoreAction<S> = S | ((prevState: S) => S);
declare type SetStore<A> = (value: A) => void;
/**
 * 获取store state和set方法的hook，返回state和setState用法同React.useState。
 * setState增加了一个merge参数，设为true时使用类似类组件的this.setState的自动合并方式
 * @param storeContext
 * @param moduleName
 * @param autoMerge 是否在执行set方法更新数据时使用自动浅合并而非替换,如果数据格式不是object，此设置无效
 * @returns {array} [state, setState, dispatch] dispatch方法可以触发注册的reducer
 */
export default function useStore<S>(storeContext: any, moduleName?: string, autoMerge?: boolean): [S, SetStore<SetStoreAction<S>>, (actionName: string, ...args: any[]) => void];
export {};
