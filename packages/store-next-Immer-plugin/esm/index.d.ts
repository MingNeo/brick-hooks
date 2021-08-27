/**
 * 使用这个插件后，store-next的将可以使用effects处理异步
 * @param Store
 * @returns
 */
export default function ImmerPlugin<S>(Store: any): (store: any) => void;
