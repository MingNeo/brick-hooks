declare type Callback = () => {};
/**
 * 方便使用setInterval的hook
 * @param callback
 * @param time
 */
export default function useInterval<C extends Callback>(callback: C, time?: number): void;
export {};
