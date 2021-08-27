const getStorageInstance = (storageType) => storageType === 'sessionStorage' ? window.sessionStorage : window.localStorage;
export function setStorage(storageType, key, value) {
    const storage = getStorageInstance(storageType);
    try {
        storage.setItem(key, JSON.stringify(value));
    }
    catch (error) {
        console.log(error);
        if (typeof value === 'string') {
            storage.setItem(key, value);
        }
        else if (typeof value === 'number') {
            storage.setItem(key, `${value}`);
        }
    }
}
export function getStorage(storageType, key) {
    const storage = getStorageInstance(storageType);
    if (!storage) {
        return undefined;
    }
    const value = storage === null || storage === void 0 ? void 0 : storage.getItem(key);
    try {
        return JSON.parse(value);
    }
    catch (error) {
        // if error, return value
        console.log(error);
        return value;
    }
}
export function removeStorage(storageType, key) {
    const storage = getStorageInstance(storageType);
    try {
        storage.removeItem(key);
    }
    catch (error) {
        console.log(error);
    }
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
