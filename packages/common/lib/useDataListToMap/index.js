"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * 转化一个扁平数据为[{id, value}, {id, value}]为{ [id1]: value1, [id2]: value2 }
 * @param data
 * @param options
 * @returns
 */
function useDataListToMap(data, _a) {
    var _b = (_a === void 0 ? {} : _a).key, key = _b === void 0 ? 'id' : _b;
    return react_1.useMemo(function () {
        return data.reduce(function (prev, cur) {
            prev[cur[key]] = cur;
            return prev;
        }, {});
    }, [data, key]);
}
exports.default = useDataListToMap;
