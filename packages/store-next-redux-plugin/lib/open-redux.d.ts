import { UnsubscribeFn } from './create-redux-store';
/**
 * 当这个插件开启时，store-next的state会同步到redux-dev-tool
 * 具体来说，开启这个插件的时候，所有的store操作被redux接管，并在redux数据变化后通知到store-next更新数据
 * @param store store-next的store实例
 * @param reduxStoreName
 * @param initialState
 * @param reducers
 * @returns
 */
export default function openRedux(store: any, reduxStoreName: any, initialState: any, reducers: any): {
    registerModule: any;
    dispatch: (action: any) => void;
    unsubscribe: UnsubscribeFn;
    replaceReducer: any;
    reduxStore: any;
};
