export declare function setStorage(storageType: string, key: string, value: Record<string, any> | any[] | string | number): void;
export declare function getStorage(storageType: string, key: string): any;
export declare function removeStorage(storageType: string, key: string): void;
export declare function parseValue(value: string | number | Record<string, any> | any[]): string | number | Record<string, any>;
