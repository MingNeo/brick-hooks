"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var linkedList_1 = __importDefault(require("./linkedList"));
// TODO 一个链表，实际使用场景应该不多，后续可能去掉
function useLinkedList() {
    return new linkedList_1.default();
}
exports.default = useLinkedList;
