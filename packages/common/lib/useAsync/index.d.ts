declare type AsyncFunction = (...args: any[]) => Promise<any>;
interface Options {
    immediate?: boolean;
    setState?: (...args: any[]) => void;
}
/**
 * 仅对异步函数做简单处理，返回一个新的函数和loading状态
 * @param asyncFunction
 * @param options.immediate 是否组件加载时自动执行
 * @param options.setState 更新state方法，一般情况下直接.then后处理即可，但有时候希望自动同步状态，则可以配置setState方法
 */
export default function useAsync<A extends AsyncFunction>(asyncFunction: A, { immediate, setState }?: Options): [(...args: any[]) => Promise<unknown>, {
    result: undefined;
    error: undefined;
    loading: boolean;
    pendingCount: number;
}];
export {};
