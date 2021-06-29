"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseValue = exports.removeStorage = exports.getStorage = exports.setStorage = void 0;
var getStorageInstance = function (storageType) { return storageType === 'sessionStorage' ? window.sessionStorage : window.localStorage; };
function setStorage(storageType, key, value) {
    var storage = getStorageInstance(storageType);
    try {
        storage.setItem(key, JSON.stringify(value));
    }
    catch (error) {
        console.log(error);
        if (typeof value === 'string') {
            storage.setItem(key, value);
        }
        else if (typeof value === 'number') {
            storage.setItem(key, "" + value);
        }
    }
}
exports.setStorage = setStorage;
function getStorage(storageType, key) {
    var storage = getStorageInstance(storageType);
    if (!storage) {
        return undefined;
    }
    var value = storage === null || storage === void 0 ? void 0 : storage.getItem(key);
    try {
        return JSON.parse(value);
    }
    catch (error) {
        // if error, return value
        console.log(error);
        return value;
    }
}
exports.getStorage = getStorage;
function removeStorage(storageType, key) {
    var storage = getStorageInstance(storageType);
    try {
        storage.removeItem(key);
    }
    catch (error) {
        console.log(error);
    }
}
exports.removeStorage = removeStorage;
function parseValue(value) {
    var result;
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
exports.parseValue = parseValue;
