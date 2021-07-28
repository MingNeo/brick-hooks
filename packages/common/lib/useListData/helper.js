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
exports.transformListToFoldList = exports.transformListToPartition = exports.transformListToGroup = exports.transformListToMap = exports.transformListToTree = void 0;
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
exports.transformListToTree = transformListToTree;
function transformListToMap(data, _a) {
    var _b = (_a === void 0 ? {} : _a).key, key = _b === void 0 ? 'id' : _b;
    return data.reduce(function (prev, cur) {
        prev[cur[key]] = cur;
        return prev;
    }, {});
}
exports.transformListToMap = transformListToMap;
function transformListToGroup(data, _a) {
    if (data === void 0) { data = []; }
    var groupKey = (_a === void 0 ? {} : _a).groupKey;
    var groupByDataMap = {};
    if (groupKey) {
        data.forEach(function (item) {
            groupByDataMap[item[groupKey]] = __spread((groupByDataMap[item[groupKey]] || []), [item]).filter(function (v) { return !!v; });
        });
        return groupByDataMap;
    }
    else {
        return data;
    }
}
exports.transformListToGroup = transformListToGroup;
function transformListToPartition(data, _a) {
    if (data === void 0) { data = []; }
    var groupKey = (_a === void 0 ? {} : _a).groupKey;
    var groupMap = transformListToGroup(data, { groupKey: groupKey });
    return Object.values(groupMap);
}
exports.transformListToPartition = transformListToPartition;
/**
 * 字段展开
 * @param data
 * @returns
 */
function transformListToFoldList(data, _a) {
    if (data === void 0) { data = []; }
    var fields = (_a === void 0 ? {} : _a).fields;
    return fields.reduce(function (prev, field) { return __spread(prev, foldData(data, { field: field })); }, []);
}
exports.transformListToFoldList = transformListToFoldList;
function foldData(data, _a) {
    if (data === void 0) { data = []; }
    var field = _a.field;
    return data.reduce(function (prev, item) {
        var fieldValue = item.field, restData = __rest(item, ["field"]);
        return __spread(prev, [__assign({ key: field, value: fieldValue }, restData)]);
    }, []);
}
