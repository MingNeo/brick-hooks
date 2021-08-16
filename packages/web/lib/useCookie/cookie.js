"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookie = exports.setCookie = void 0;
exports.setCookie = function (name, value, options) {
    var expires = new Date(Date.now() + options.days * 864e5).toUTCString();
    return new Promise(function (resolve, reject) {
        try {
            document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=" + options.path;
            resolve(true);
        }
        catch (err) {
            console.log(err);
            reject(err);
        }
    });
};
exports.getCookie = function (name) {
    try {
        return (document.cookie || '').split('; ').reduce(function (prev, curr) {
            var parts = curr.split('=');
            return parts[0] === name ? decodeURIComponent(parts[1]) : prev;
        }, '');
    }
    catch (err) {
        console.log(err);
        return '';
    }
};
