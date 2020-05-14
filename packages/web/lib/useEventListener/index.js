"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * 使用事件的hook
 * @param eventName
 * @param handler
 * @param options
 * @returns
 */
function useEventListener(eventName, handler, options) {
    var ref = react_1.useRef();
    var handlerRef = react_1.useRef();
    react_1.useEffect(function () {
        handlerRef.current = handler;
    }, [handler]);
    react_1.useEffect(function () {
        var capture = options.capture, dom = options.dom;
        var element = dom || ref.current || window;
        var eventListener = function (event) { return handlerRef.current && handlerRef.current(event); };
        element.addEventListener(eventName, eventListener, capture);
        return function () {
            element.removeEventListener(eventName, eventListener, capture);
        };
    }, [eventName, options]);
    return ref;
}
exports.default = useEventListener;
