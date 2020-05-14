declare type SetStoreAction<S> = S | ((prevState: S) => S);
declare type SetStore<A> = (value: A) => void;
/**
 * 获取store state和set方法的hook，返回state和setState用法同React.useState，但setState多了一个isAssign参数
 * @param storeContext
 * @param moduleName
 * @param assign 是否在执行set方法更新数据时使用自动浅合并而非替换,如果数据格式不是object，此设置无效
 * @returns
 */
export default function useStore<S>(storeContext: any, moduleName?: string, assign?: boolean): [S, SetStore<SetStoreAction<S>>, (actionName: string, ...args: any[]) => void];
export {};
