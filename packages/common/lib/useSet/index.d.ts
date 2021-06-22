declare const useSet: <S>(initialSet?: Set<S>) => [Set<S>, Record<string, (...args: any[]) => void>, (actionName: string, ...args: any[]) => void];
export default useSet;
