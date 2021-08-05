export declare type StoreHookDispatchEffect = (actionName: string, ...args: any[]) => any;
export declare function getEffects(modules?: {}): {};
/**
 * 使用这个插件后，store-next的将可以使用effects处理异步
 * @param Store
 * @returns
 */
export default function effectPlugin<S>(Store: any): (store: any) => void;
