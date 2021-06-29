export declare function setStorage(key: string, value: any): Promise<void>;
export declare function getStorage(key: string): Promise<any>;
export declare function parseValue(value: string | number | Record<string, any> | any[]): string | number | Record<string, any>;
export declare const removeStorage: (key: string) => Promise<void>;
