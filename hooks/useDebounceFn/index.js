import { useRef, useCallback } from 'react';

/**
 * 处理一个函数返回防抖的函数
 * @param fn
 * @param wait
 * @param options //todo maxWait、trailing、leading
 */
export default function useDebounceFn(
  fn,
  wait = 0,
  // options = {},
) {
//   const { deps } = options
  const timer = useRef();
  const argsRef = useRef();

  const fnRef = useRef();
  fnRef.current = fn;

  const cancel = useCallback(() => {
    clearTimeout(timer.current);
  }, []);

  const debounceFn = useCallback((...args) => {
    argsRef.current = args;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      cancel();
      fnRef.current.apply(null, args);
    }, wait);
  }, [cancel, wait]);

  //   useEffect(() => {
  //     // 如果配置了deps，即自动在deps变化的时候执行debounceFn
  //     if (deps) debounceFn()
  //     return cancel
  //   }, [cancel, debounceFn, deps])

  return [debounceFn, cancel];
}
