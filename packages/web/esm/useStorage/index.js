import { useState, useEffect, useMemo, useRef } from 'react';
import { getStorage, setStorage, parseValue, removeStorage } from './helper';
function isNil(value) {
    return value === undefined || value === null;
}
/**
 *
 * @param itemName
 * @param initialValue
 * @param watchStorageChange 监听storage事件，即使不是使用当前hooks修改storage，也会更新value
 */
export default function useStorage(itemName, initialValue = undefined, { watchStorageChange = false, storageType = 'localStorage' } = {}) {
    const initialValueRef = useRef(initialValue);
    const [value, setStateValue] = useState(() => getStorage(storageType, itemName) || initialValue);
    const methods = useMemo(() => {
        const setValue = (value) => {
            setStorage(storageType, itemName, !isNil(value) ? value : initialValueRef.current);
            watchStorageChange ||
                (!isNil(value)
                    ? setStateValue(parseValue(value))
                    : setStateValue(initialValueRef.current));
        };
        const clear = () => {
            removeStorage(storageType, itemName);
            setValue(undefined);
        };
        return { setValue, clear };
    }, [itemName, storageType, watchStorageChange]);
    useEffect(() => {
        if (!(window === null || window === void 0 ? void 0 : window.localStorage) || !watchStorageChange) {
            return;
        }
        // 当storage变化的时候更新state以触发组件render
        const onStorage = (e) => {
            if (e.key === itemName) {
                setStateValue(isNil(e.newValue) ? parseValue(e.newValue) : initialValueRef.current);
            }
        };
        // watchStorageChange 为 true时， 监听storage事件，即使直接修改也触发更新当前value
        window.addEventListener('storage', onStorage);
        return () => {
            window.removeEventListener('storage', onStorage);
        };
    }, [itemName, watchStorageChange]);
    return [value, methods.setValue, { clear: methods.clear }];
}
export const useLocalStorage = (itemName, initialValue = undefined, { watchStorageChange = false } = {}) => {
    return useStorage(itemName, initialValue, { watchStorageChange, storageType: 'localStorage' });
};
export const useSessionStorage = (itemName, initialValue = undefined, { watchStorageChange = false } = {}) => {
    return useStorage(itemName, initialValue, {
        watchStorageChange,
        storageType: 'sessionStorage',
    });
};
