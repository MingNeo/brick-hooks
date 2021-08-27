declare class ListNode {
    prev: any;
    next: any;
    key: any;
    constructor(key: any);
}
interface Node extends ListNode {
}
/**
 * 双向链表
 */
export default class LinkedList {
    head: any;
    static createNode(key: any): ListNode;
    insert(node: Node): void;
    search(key: any): any;
    delete(node: {
        prev: any;
        next: any;
    }): void;
}
export {};
