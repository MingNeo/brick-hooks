declare type CheckIsInWindow = (node: HTMLElement) => boolean;
/**
 * 对图片自动判断是否在可视区域并进行懒加载
 * 图片不设置src而设置一个sourceAttr，并使用这个hook
 * @param querySelector
 * @param options.sourceAttr
 * @param options.checkIsInWindow 自定义检测是否在视口中
 */
export default function useLazyImages(querySelector: string, { sourceAttr, checkIsInWindow }?: {
    sourceAttr?: string;
    checkIsInWindow?: CheckIsInWindow;
}): void;
export {};
