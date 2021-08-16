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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var brick_hooks_1 = require("brick-hooks");
function useScrollInView(options, dep) {
    var containerRef = options.containerRef, targetRef = options.targetRef, onScroll = options.onScroll;
    var handleScroll = react_1.useCallback(function (event) {
        var _a, _b;
        var containerH = (_a = containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) === null || _a === void 0 ? void 0 : _a.clientHeight;
        // 获取滚动距离
        var rect = (_b = targetRef === null || targetRef === void 0 ? void 0 : targetRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
        // top 是loading组件的位置
        var top = rect ? rect.top : 0;
        onScroll({ isInView: top < containerH, targetTop: top, containerH: containerH });
    }, [onScroll]);
    var handleScrollDebounce = brick_hooks_1.useDebounceFn(handleScroll);
    react_1.useEffect(function () {
        if (!containerRef || !targetRef)
            return;
        var containerDom = containerRef.current;
        containerDom.addEventListener('scroll', handleScrollDebounce);
        return function () {
            containerDom.removeEventListener('scroll', handleScrollDebounce);
        };
    }, __spread([handleScrollDebounce], dep));
}
exports.default = useScrollInView;
