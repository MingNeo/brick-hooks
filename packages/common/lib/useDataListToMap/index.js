"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var useListData_1 = __importDefault(require("../useListData"));
/**
 * 转化一个扁平数据为[{id, value}, {id, value}]为{ [id1]: value1, [id2]: value2 }
 * @param data
 * @param options
 * @returns
 */
function useDataListToMap(data, _a) {
    var _b = (_a === void 0 ? {} : _a).key, key = _b === void 0 ? 'id' : _b;
    return useListData_1.default(data, function (originValue, _a) {
        var transObj = _a.transObj;
        return transObj(originValue, { key: key });
    });
}
exports.default = useDataListToMap;
