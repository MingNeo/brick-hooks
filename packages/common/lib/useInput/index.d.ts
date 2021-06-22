/// <reference types="react" />
declare type OnChange = string | ((event: Event) => void);
/**
 *
 * @param initialValue 默认值
 * @param [valueKey] 可选，取值的key，默认为value
 * @param [onChange]  可选，onChange事件
 */
export default function useInput(initialValue: any, valueKey?: string, onChange?: OnChange): {
    value: any;
    onChange: (event: any) => void;
    setValue: import("react").Dispatch<any>;
    bindEvent: {
        value: any;
        onChange: (event: any) => void;
    };
};
export {};
