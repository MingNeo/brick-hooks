"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * 滚动到当前容器的顶部，用于如切换tab时重置列表位置等
 */
function useScrollToTop(ref) {
    var scrollRef = react_1.useRef();
    if (ref) {
        scrollRef.current = ref;
    }
    var scrollToTop = react_1.useCallback(function (top) {
        if (top === void 0) { top = 0; }
        setTimeout(function () {
            if (scrollRef.current && scrollRef.current.scrollTo) {
                scrollRef.current.scrollTo({ index: top });
            }
            else if (scrollRef.current && scrollRef.current.scrollTop) {
                scrollRef.current.scrollTop(top);
            }
        }, 0);
    }, []);
    return { scrollRef: scrollRef, scrollToTop: scrollToTop };
}
exports.default = useScrollToTop;
