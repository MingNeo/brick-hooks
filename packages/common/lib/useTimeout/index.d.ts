declare type Callback = () => {};
/**
 * 方便使用setTimeout的hook
 */
export default function useTimeout<S extends Callback>(callback: S, time?: number): void;
export {};
