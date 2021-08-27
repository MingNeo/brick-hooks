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
import { useMemo } from 'react';
/**
 * 将一个树转化为数组
 * @param data
 * @param pid
 * @param param2
 * @returns
 */
function transformTreeToList(data, pid = 0, { pidKey = 'pid' } = {}) {
    const newData = [];
    data.forEach((item) => {
        const { children } = item, restData = __rest(item, ["children"]);
        newData.push(Object.assign(Object.assign({}, restData), { [pidKey]: pid }));
        if (children) {
            newData.push(...transformTreeToList(children, item.id));
            delete item.children;
        }
    });
    return newData;
}
// 转化一个树形数据为扁平数据
export default function useDataTreeToList(data) {
    return useMemo(() => transformTreeToList(data), [data]);
}
