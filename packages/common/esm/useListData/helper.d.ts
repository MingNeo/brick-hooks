declare type Data = Record<string, any>[];
export declare function transformListToTree(data: Data, { parentId, id, children, topParentId }?: {
    parentId?: string;
    id?: string;
    children?: string;
    topParentId?: number;
}): Record<string, any>[];
export declare function transformListToMap(data: Data, { key }?: {
    key?: string;
}): any;
export declare function transformListToGroup(data?: Data, { groupKey }?: {
    groupKey?: string;
}): {};
export declare function transformListToPartition(data?: Data, { groupKey }?: {
    groupKey?: string;
}): unknown[];
/**
 * 字段展开
 * @param data
 * @returns
 */
export declare function transformListToFoldList(data?: Data, { fields }?: {
    fields?: string[];
}): any[];
export {};
