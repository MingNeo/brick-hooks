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
/**
 *  向页面中插入一段script
 */
function useScript(src, onStatusChange) {
    var _a = __read(react_1.useState(src ? 'loading' : ''), 2), status = _a[0], setStatus = _a[1];
    var methods = react_1.useRef({ onStatusChange: onStatusChange });
    react_1.useEffect(function () {
        if (!src) {
            setStatus('');
            return;
        }
        var script = document.querySelector("script[src=\"" + src + "\"]");
        var changeStatusFromEvent = function (event) {
            setStatus(event.type === 'load' ? 'success' : 'error');
            methods.current.onStatusChange && methods.current.onStatusChange(event.type);
            // whenLoaded 只执行一次
            if (event.type === 'load' &&
                methods.current.whenLoaded &&
                !methods.current.whenLoaded.fired) {
                methods.current.whenLoaded.fired = true;
                methods.current.whenLoaded();
            }
        };
        if (!script) {
            script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.setAttribute('data-status', 'loading');
            document.body.appendChild(script);
            var originOnStatusChange_1 = changeStatusFromEvent;
            changeStatusFromEvent = function (event) {
                originOnStatusChange_1(event);
                script.setAttribute('data-status', event.type === 'load' ? 'success' : 'error');
            };
        }
        else {
            setStatus(script.getAttribute('data-status'));
        }
        script.addEventListener('load', changeStatusFromEvent);
        script.addEventListener('error', changeStatusFromEvent);
        return function () {
            if (script) {
                script.removeEventListener('load', changeStatusFromEvent);
                script.removeEventListener('error', changeStatusFromEvent);
            }
        };
    }, [src]);
    var whenLoaded = function (cb) {
        methods.current.whenLoaded = function () {
            cb();
        };
    };
    return { status: status, whenLoaded: whenLoaded };
}
exports.default = useScript;
