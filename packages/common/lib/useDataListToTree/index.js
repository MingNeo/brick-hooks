"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function transformListToTree(data, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.parentId, parentId = _c === void 0 ? 'pid' : _c, _d = _b.id, id = _d === void 0 ? 'id' : _d, _e = _b.children, children = _e === void 0 ? 'children' : _e, _f = _b.topParentId, topParentId = _f === void 0 ? 0 : _f;
    var cloneData = JSON.parse(JSON.stringify(data));
    return cloneData.filter(function (parent) {
        var childrenItem = cloneData.filter(function (child) { return parent[id] === child[parentId]; });
        if (childrenItem.length) {
            parent[children] = childrenItem;
        }
        return parent[parentId] === topParentId;
    });
}
// 转化一个扁平数据为树形数据
function useDataListToTree(data) {
    return react_1.useMemo(function () { return transformListToTree(data); }, [data]);
}
exports.default = useDataListToTree;
