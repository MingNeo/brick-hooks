interface CounterOptions {
    min?: number;
    max?: number;
    step?: number;
}
/**
 * 数字步进
 * @param {number} initialValue 默认值
 * @param {object} options 配置
 */
export default function useCounter(initialValue?: number, options?: CounterOptions): [number, {
    set: (nextValue: number | ((value: number) => number)) => void;
    inc: (step?: number) => void;
    dec: (step?: number) => void;
    reset: () => void;
}];
export {};
