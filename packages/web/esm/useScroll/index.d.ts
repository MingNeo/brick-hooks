/**
 * 此hooks用于获取一个scroll的滚动值,且提供一个方法滚动到当前容器的顶部，用于如切换tab时重置列表位置等
 */
export default function useScroll(): {
    x: number;
    y: number;
    scrollRef: import("react").MutableRefObject<any>;
    scrollToTop: (top?: any) => void;
};
