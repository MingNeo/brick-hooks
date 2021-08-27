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
export function transformListToTree(data, { parentId = 'pid', id = 'id', children = 'children', topParentId = 0 } = {}) {
    const cloneData = JSON.parse(JSON.stringify(data));
    return cloneData.filter((parent) => {
        const childrenItem = cloneData.filter((child) => parent[id] === child[parentId]);
        if (childrenItem.length) {
            parent[children] = childrenItem;
        }
        return parent[parentId] === topParentId;
    });
}
export function transformListToMap(data, { key = 'id' } = {}) {
    return data.reduce((prev, cur) => {
        prev[cur[key]] = cur;
        return prev;
    }, {});
}
export function transformListToGroup(data = [], { groupKey } = {}) {
    const groupByDataMap = {};
    if (groupKey) {
        data.forEach((item) => {
            groupByDataMap[item[groupKey]] = [...(groupByDataMap[item[groupKey]] || []), item].filter((v) => !!v);
        });
        return groupByDataMap;
    }
    else {
        return data;
    }
}
export function transformListToPartition(data = [], { groupKey } = {}) {
    const groupMap = transformListToGroup(data, { groupKey });
    return Object.values(groupMap);
}
/**
 * 字段展开
 * @param data
 * @returns
 */
export function transformListToFoldList(data = [], { fields } = {}) {
    return fields.reduce((prev, field) => [...prev, ...foldData(data, { field })], []);
}
function foldData(data = [], { field }) {
    return data.reduce((prev, item) => {
        const { field: fieldValue } = item, restData = __rest(item, ["field"]);
        return [...prev, Object.assign({ key: field, value: fieldValue }, restData)];
    }, []);
}
