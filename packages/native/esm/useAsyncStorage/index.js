var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useMemo } from 'react';
import { createEventBus } from 'brick-hooks';
import { getStorage, setStorage, parseValue, removeStorage } from './helper';
const { publish, useSubscribe } = createEventBus();
const EVENT_TYPE = '__USE_STORAGE_CHANGE';
/**
 * 方便使用react-native的AsyncStorage
 * @param itemName
 * @param onStorageValueChange 当storage数据变化时触发回调函数，仅对使用useStorage的setValue/clear方法更新数据有效。
 */
export default function useAsyncStorage(itemName, onStorageValueChange) {
    // 当storage数据变化时触发回调函数
    useSubscribe(EVENT_TYPE, (nextValue) => {
        const value = nextValue === undefined ? nextValue : parseValue(nextValue);
        onStorageValueChange && onStorageValueChange(value);
    });
    return useMemo(() => {
        const getValue = (itemName) => __awaiter(this, void 0, void 0, function* () { return getStorage(itemName); });
        const setValue = (value) => __awaiter(this, void 0, void 0, function* () {
            publish(EVENT_TYPE, value);
            yield setStorage(itemName, value);
        });
        const clear = () => {
            removeStorage(itemName);
            publish(EVENT_TYPE, undefined);
        };
        return { getValue, setValue, clear };
    }, [itemName]);
}
