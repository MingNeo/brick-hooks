import { useEffect } from 'react';
/**
 * 对useObjectState等自动包装成useStore的全局数据,
 * useState、useObjectState、useMethods等通用，如果已存在该store module,则对state进行合并
 * @param moduleName
 * @param stateHookResult
 * @returns
 */
export default function useStoreWrap(moduleName, state, { store, assign = true } = {}) {
    useEffect(() => {
        store === null || store === void 0 ? void 0 : store.setModuleState(moduleName, state, assign);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);
}