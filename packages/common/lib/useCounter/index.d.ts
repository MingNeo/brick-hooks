interface CounterOptions {
    min?: number;
    max?: number;
    step?: number;
}
export declare const arrayMethods: {
    inc: (state: any, step: any) => any;
    dec: (state: any, step: any) => number;
    reset: (state: any, initialValue: any) => any;
};
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
