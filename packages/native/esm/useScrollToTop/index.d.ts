import { ScrollView } from 'react-native';
/**
 * 滚动到当前容器的顶部，用于如切换tab时重置列表位置等
 */
export default function useScrollToTop(ref: any): {
    scrollRef: import("react").MutableRefObject<ScrollView>;
    scrollToTop: (top?: any) => void;
};