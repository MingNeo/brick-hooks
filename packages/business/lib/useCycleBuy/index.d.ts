declare type IKeyMap = Record<string, number | string>;
interface IdefaultData {
    model?: string | number;
    cycle?: string | number;
    dates?: string[];
    range?: any[];
}
interface IOptions extends Record<string, any> {
    modelKeyMap?: IKeyMap;
    cycleKeyMap?: IKeyMap;
    models?: {
        label: string;
        value: string | number;
    }[];
    cycles?: {
        label: string;
        value: string | number;
    }[];
    onChangeModel?: (val: string | number) => any;
    onChangeField?: (val: string | number) => any;
}
/**
 * 日期周期/区间选择，用于周期购等场景
 */
export default function useDateCycle(defaultData?: IdefaultData, options?: IOptions): {
    dates: string[];
    onChangeDates: (newDates: any) => void;
    model: string | number;
    models: any;
    cycles: any;
    range: any;
    setRange: (...args: any[]) => void;
    onChangeModel: (newModel: string | number) => void;
    cycle: string | number;
    onChangeCycle: (newCycle: string | number) => void;
    checkDateDisable: (current: any) => boolean;
};
export declare const getDateRange: (dates: any[]) => any;
export {};
