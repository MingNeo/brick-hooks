declare const useSet: <S>(initialSet?: Set<S>) => [Set<S>, import("../useMethods").BoundMethods, (actionName: string, ...args: any[]) => void];
export default useSet;
