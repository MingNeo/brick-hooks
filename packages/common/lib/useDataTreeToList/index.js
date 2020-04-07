"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * 将一个树转化为数组
 * @param data
 * @param pid
 * @param param2
 * @returns
 */
function transformTreeToList(data, pid, _a) {
    if (pid === void 0) { pid = 0; }
    var _b = (_a === void 0 ? {} : _a).pidKey, pidKey = _b === void 0 ? 'pid' : _b;
    var newData = [];
    data.forEach(function (item) {
        var _a;
        var children = item.children, restData = __rest(item, ["children"]);
        newData.push(__assign(__assign({}, restData), (_a = {}, _a[pidKey] = pid, _a)));
        if (children) {
            newData.push.apply(newData, __spread(transformTreeToList(children, item.id)));
            delete item.children;
        }
    });
    return newData;
}
// 转化一个树形数据为扁平数据
function useDataTreeToList(data) {
    return react_1.useMemo(function () { return transformTreeToList(data); }, [data]);
}
exports.default = useDataTreeToList;
