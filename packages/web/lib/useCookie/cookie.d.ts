export declare const setCookie: (name: string, value: string | number | boolean, options: {
    days: any;
    path: any;
}) => Promise<unknown>;
export declare const getCookie: (name: string) => string;
