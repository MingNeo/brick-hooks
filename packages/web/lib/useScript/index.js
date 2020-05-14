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
// 向页面中插入一段script
function useScript(src) {
    var _a = __read(react_1.useState(src ? 'loading' : ''), 2), status = _a[0], setStatus = _a[1];
    react_1.useEffect(function () {
        if (!src) {
            setStatus('');
            return;
        }
        var script = document.querySelector("script[src=\"" + src + "\"]");
        if (!script) {
            script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.setAttribute('data-status', 'loading');
            document.body.appendChild(script);
            var setAttributeFromEvent = function (event) {
                ;
                script.setAttribute('data-status', event.type === 'load' ? 'success' : 'error');
            };
            script.addEventListener('load', setAttributeFromEvent);
            script.addEventListener('error', setAttributeFromEvent);
        }
        else {
            setStatus(script.getAttribute('data-status'));
        }
        var setStateFromEvent = function (event) {
            setStatus(event.type === 'load' ? 'success' : 'error');
        };
        script.addEventListener('load', setStateFromEvent);
        script.addEventListener('error', setStateFromEvent);
        return function () {
            if (script) {
                script.removeEventListener('load', setStateFromEvent);
                script.removeEventListener('error', setStateFromEvent);
            }
        };
    }, [src]);
    return status;
}
exports.default = useScript;
