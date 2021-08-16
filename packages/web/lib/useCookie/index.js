"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var cookie_1 = require("./cookie");
function useCookie(key) {
    var getItem = function () { return cookie_1.getCookie(key); };
    var _a = __read(react_1.useState(getItem), 2), item = _a[0], setItem = _a[1];
    var updateItem = function (value, options) {
        if (options === void 0) { options = { days: 7, path: '/' }; }
        setItem(value);
        cookie_1.setCookie(key, value, options);
    };
    var refreshItem = function () {
        var newItem = getItem();
        setItem(newItem);
    };
    return [item, updateItem, { getItem: getItem, refreshItem: refreshItem }];
}
exports.default = useCookie;
