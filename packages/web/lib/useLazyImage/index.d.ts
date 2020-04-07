/**
 * 对图片自动判断是否在可视区域并进行懒加载
 * 图片不设置src而设置一个sourceAttr，并使用这个hook
 * @param querySelector
 * @param sourceAttr
 */
export default function useLazyImages(querySelector: string, sourceAttr?: string): void;
