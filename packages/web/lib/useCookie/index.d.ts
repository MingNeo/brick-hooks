export default function useCookie(key: any, initialValue: string | number | boolean): [any, (value: string | number | boolean, options?: {
    days: number;
    path: string;
}) => void];
