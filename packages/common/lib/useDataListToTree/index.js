"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var useListData_1 = __importDefault(require("../useListData"));
// 转化一个扁平数据为树形数据
function useDataListToTree(data, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.parentId, parentId = _c === void 0 ? 'pid' : _c, _d = _b.id, id = _d === void 0 ? 'id' : _d, _e = _b.children, children = _e === void 0 ? 'children' : _e, _f = _b.topParentId, topParentId = _f === void 0 ? 0 : _f;
    return useListData_1.default(data, function (originValue, _a) {
        var transTree = _a.transTree;
        return transTree(originValue, { parentId: parentId, id: id, children: children, topParentId: topParentId });
    });
}
exports.default = useDataListToTree;
