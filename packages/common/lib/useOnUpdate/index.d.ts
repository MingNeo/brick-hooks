/**
 * 提供一个类似于componentDidUpdate生命周期的hooks，首次不执行，仅更新时执行方法
 * @param fn
 * @param dep
 */
export default function useOnUpdate(fn: () => void, dep?: any[]): void;
