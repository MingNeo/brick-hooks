var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import AsyncStorage from '@react-native-community/async-storage';
export function setStorage(key, value) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield AsyncStorage.setItem(key, JSON.stringify(value));
        }
        catch (error) {
            console.log(error);
            if (typeof value === 'string') {
                yield AsyncStorage.setItem(key, value);
            }
            else if (typeof value === 'number') {
                yield AsyncStorage.setItem(key, `${value}`);
            }
        }
        return true;
    });
}
export function getStorage(key) {
    return __awaiter(this, void 0, void 0, function* () {
        const value = yield AsyncStorage.getItem(key);
        try {
            return JSON.parse(value);
        }
        catch (error) {
            // if error, return value
            console.log(error);
            return value;
        }
    });
}
export function parseValue(value) {
    let result;
    switch (typeof value) {
        case 'string':
            try {
                result = JSON.parse(value);
            }
            catch (e) {
                console.log(e);
                result = value;
            }
            break;
        default:
            result = value;
    }
    return result;
}
export const removeStorage = (key) => {
    return AsyncStorage.removeItem(key);
};
