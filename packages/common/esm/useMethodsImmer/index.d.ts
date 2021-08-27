import { Draft, PatchListener } from 'immer';
export { Draft };
declare type Reducer<S> = (state: Draft<S>, payload: any) => void;
declare type Methods<S> = Record<string, Reducer<S>>;
declare type Actions = Record<string, (payload: any) => void>;
interface Options {
    patchListener?: PatchListener;
}
export default function useMethodsImmer<S>(methods: Methods<S>, initialState: any, initializer?: any, Options?: Options): [S, Actions];
