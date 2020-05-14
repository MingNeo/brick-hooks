/**
 * 使用事件的hook
 * @param eventName
 * @param handler
 * @param options
 * @returns
 */
declare function useEventListener(eventName: string, handler: Function, options: {
    capture: any;
    dom: Element;
}): import("react").MutableRefObject<undefined>;
export default useEventListener;
