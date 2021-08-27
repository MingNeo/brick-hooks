declare type OnDragMoving = (rect: {
    top: number;
    left: number;
}) => void;
interface Rect {
    top: number;
    left: number;
}
/**
 * 可以快速给一个绝对定位的节点提供自由拖拽能力
 * @param props
 * @returns
 */
export default function useDrag({ rect: initialRect, onDragMoving, }?: {
    rect?: Rect;
    onDragMoving?: OnDragMoving;
}): {
    onMousedown: (e: MouseEvent) => void;
    readyDrag: (e: MouseEvent) => void;
    rect: {
        top: number;
        left: number;
        disX: any;
        disY: any;
    };
};
export {};
