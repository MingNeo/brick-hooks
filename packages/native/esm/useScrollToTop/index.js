import { useCallback, useRef } from 'react';
/**
 * 滚动到当前容器的顶部，用于如切换tab时重置列表位置等
 */
export default function useScrollToTop(ref) {
    const scrollRef = useRef();
    if (ref) {
        scrollRef.current = ref.current;
    }
    const scrollToTop = useCallback((top = 0) => {
        setTimeout(() => {
            var _a, _b;
            (_b = (_a = scrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo) === null || _b === void 0 ? void 0 : _b.call(_a, { y: top });
        }, 0);
    }, []);
    return { scrollRef, scrollToTop };
}
