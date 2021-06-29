import { EffectCallback } from 'react';
/**
 * 一个防抖触发的useEffect
 * @param callback
 * @param wait
 */
export default function useDebounceEffect(callback: EffectCallback, wait?: number, deps?: any[]): void;
