"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * 对useObjectState等自动包装成useStore的全局数据,
 * useState、useObjectState、useMethods等通用，如果已存在该store module,则对state进行合并
 * @param moduleName
 * @param stateHookResult
 * @returns
 */
function useStoreWrap(moduleName, state, _a) {
    var _b = _a === void 0 ? {} : _a, store = _b.store, _c = _b.assign, assign = _c === void 0 ? true : _c;
    react_1.useEffect(function () {
        store === null || store === void 0 ? void 0 : store.setModuleState(moduleName, state, assign);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);
}
exports.default = useStoreWrap;
