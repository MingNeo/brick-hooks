interface DefaultData {
    model?: string;
    cycle?: string;
}
interface CheckDateDisable {
    (currennt: any): boolean;
}
/**
 * 日期周期/区间选择，用于周期购等场景
 */
export default function useDateCycle(defaultData?: DefaultData): {
    model: string;
    onChangeModel: import("react").Dispatch<import("react").SetStateAction<string>>;
    cycle: string;
    onChangeCycle: import("react").Dispatch<import("react").SetStateAction<string>>;
    checkDateDisable: CheckDateDisable;
};
export {};
