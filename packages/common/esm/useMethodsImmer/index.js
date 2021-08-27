import produce from 'immer';
import { useMemo, useReducer } from 'react';
export default function useMethodsImmer(methods, initialState, initializer = undefined, Options = {}) {
    const immerReducer = useMemo(() => {
        return (state, action) => {
            const draftState = produce(state, (draft) => {
                const method = methods[action.type];
                if (method) {
                    const result = method(draft, action.payload);
                    return result;
                }
            }, Options.patchListener);
            return draftState;
        };
    }, [methods, Options.patchListener]);
    const [draftState, dispatch] = useReducer(immerReducer, initialState, initializer);
    const actions = useMemo(() => {
        const actionTypes = Object.keys(methods);
        return actionTypes.reduce((prev, type) => {
            prev[type] = (payload) => dispatch({ type, payload });
            return prev;
        }, {});
        // 因为使用immer，此处并不需要监听state变动，methods也应该是静态配置好的，不会动态增加
        // 但是actions下的reducer应当是纯函数，不然会造成引用的其他state不是最新值
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return [draftState, actions];
}
