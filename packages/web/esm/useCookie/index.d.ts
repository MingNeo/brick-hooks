declare type SetItem = (value: string | number | boolean, options?: {
    days: number;
    path: string;
}) => void;
export default function useCookie(key: string): [string, SetItem, {
    getItem: () => string;
    refreshItem: () => void;
}];
export {};
