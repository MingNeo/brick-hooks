"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListNode = /** @class */ (function () {
    function ListNode(key) {
        this.prev = null;
        this.next = null;
        this.key = null;
        // 指向前一个节点
        this.prev = null;
        // 指向后一个节点
        this.next = null;
        // 节点的数据(或者用于查找的键)
        this.key = key;
    }
    return ListNode;
}());
/**
 * 双向链表
 */
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.createNode = function (key) {
        return new ListNode(key);
    };
    LinkedList.prototype.insert = function (node) {
        node.prev = null;
        node.next = this.head;
        if (this.head) {
            this.head.prev = node;
        }
        this.head = node;
    };
    LinkedList.prototype.search = function (key) {
        var node = this.head;
        while (node !== null && node.key !== key) {
            node = node.next;
        }
        return node;
    };
    LinkedList.prototype.delete = function (node) {
        var prev = node.prev, next = node.next;
        delete node.prev;
        delete node.next;
        if (node === this.head) {
            this.head = next;
        }
        if (prev) {
            prev.next = next;
        }
        if (next) {
            next.prev = prev;
        }
    };
    return LinkedList;
}());
exports.default = LinkedList;
