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
 * 此hooks用于获取一个scroll的滚动值,且提供一个方法滚动到当前容器的顶部，用于如切换tab时重置列表位置等
 */
function useScroll() {
    var _a = __read(react_1.useState([0, 0]), 2), pos = _a[0], setPos = _a[1];
    var scrollRef = react_1.useRef();
    react_1.useEffect(function () {
        var current = scrollRef.current;
        function handleScroll() {
            setPos([current.scrollLeft, current.scrollTop]);
        }
        current.addEventListener('scroll', handleScroll, false);
        return function () {
            current.removeEventListener('scroll', handleScroll, false);
        };
    }, []);
    var scrollToTop = react_1.useCallback(function (top) {
        if (top === void 0) { top = 0; }
        setTimeout(function () { return scrollRef.current && scrollRef.current.scrollTo(top); }, 0);
    }, []);
    var _b = __read(pos, 2), x = _b[0], y = _b[1];
    return { x: x, y: y, scrollRef: scrollRef, scrollToTop: scrollToTop };
}
exports.default = useScroll;
