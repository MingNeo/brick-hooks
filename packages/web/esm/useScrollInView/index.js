import { useEffect, useCallback } from 'react';
import { useDebounceFn } from 'brick-hooks';
function useScrollInView(options, dep) {
    const { containerRef, targetRef, onScroll, } = options;
    const handleScroll = useCallback((event) => {
        var _a, _b;
        const containerH = (_a = containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) === null || _a === void 0 ? void 0 : _a.clientHeight;
        // 获取滚动距离
        const rect = (_b = targetRef === null || targetRef === void 0 ? void 0 : targetRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
        // top 是loading组件的位置
        const top = rect ? rect.top : 0;
        onScroll({ isInView: top < containerH, targetTop: top, containerH });
    }, [onScroll]);
    const handleScrollDebounce = useDebounceFn(handleScroll);
    useEffect(() => {
        if (!containerRef || !targetRef)
            return;
        const containerDom = containerRef.current;
        containerDom.addEventListener('scroll', handleScrollDebounce);
        return () => {
            containerDom.removeEventListener('scroll', handleScrollDebounce);
        };
    }, [handleScrollDebounce, ...dep]);
}
export default useScrollInView;
