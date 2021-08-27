import { useReducer } from 'react';
/**
 * 返回一个forceUpdate方法，每次调用触发函数组件强制更新
 */
export default function useForceRender() {
    return useReducer((n) => n + 1, 0)[1];
}
