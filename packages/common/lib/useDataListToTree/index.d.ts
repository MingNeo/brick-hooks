declare type Data = Record<string, any>[];
export default function useDataListToTree(data: Data, { parentId, id, children, topParentId }?: {
    parentId?: string;
    id?: string;
    children?: string;
    topParentId?: number;
}): any;
export {};
