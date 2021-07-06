"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * 滚动到当前容器的顶部，用于如切换tab时重置列表位置等
 */
function useScrollToTop(ref) {
    var scrollRef = react_1.useRef();
    if (ref) {
        scrollRef.current = ref.current;
    }
    var scrollToTop = react_1.useCallback(function (top) {
        if (top === void 0) { top = 0; }
        setTimeout(function () {
            var _a, _b;
            (_b = (_a = scrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo) === null || _b === void 0 ? void 0 : _b.call(_a, { y: top });
        }, 0);
    }, []);
    return { scrollRef: scrollRef, scrollToTop: scrollToTop };
}
exports.default = useScrollToTop;
