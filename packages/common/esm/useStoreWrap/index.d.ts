import { Store } from 'hydrogen-store';
interface Options<S> {
    store?: Store<S>;
    assign?: boolean;
}
/**
 * 对useObjectState等自动包装成useStore的全局数据,
 * useState、useObjectState、useMethods等通用，如果已存在该store module,则对state进行合并
 * @param moduleName
 * @param stateHookResult
 * @returns
 */
export default function useStoreWrap<S extends Record<string, any>>(moduleName: string, state: S, { store, assign }?: Options<S>): void;
export {};
