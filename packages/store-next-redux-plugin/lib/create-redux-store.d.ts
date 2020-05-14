export declare type UnsubscribeFn = () => void;
export declare type EnhancedStore = any;
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: any;
    }
}
export declare const createReduxStore: any;
