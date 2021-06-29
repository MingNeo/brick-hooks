declare type Callback = (...args: any[]) => any;
/**
 * 方便使用setInterval的hook
 * @param callback
 * @param time
 * @returns  stopInterval
 */
export default function useInterval(callback: Callback, time?: number): {
    isRunning: boolean;
    start: () => void;
    stop: () => void;
};
export {};
