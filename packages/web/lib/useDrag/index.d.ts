declare type OnDragMoving = (style: {
    top: number;
    left: number;
}) => void;
/**
 * 可以快速给一个绝对定位的节点提供自由拖拽能力
 * @param props
 * @returns
 */
export default function useDrag(props: {
    id?: any;
    styles?: any;
    onDragMoving: OnDragMoving;
}): {
    readyDrag: (e: MouseEvent) => void;
};
export {};
