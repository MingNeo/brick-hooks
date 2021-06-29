declare type OnAppStateChange = (nextState: any, prevState: any) => any;
/**
 * 获取当前App前后台的状态
 * @param {*} navigation
 * @param {*} onAppStateChange
 */
export default function useAppState(onAppStateChange: OnAppStateChange): void;
export {};
