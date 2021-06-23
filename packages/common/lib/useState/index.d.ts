/**
 * 自动进行合并的setState，基本可以认为等同于class组件的this.setState
 * @param initialState 同React.setState参数
 * @param merge 是否合并，默认为true，设为false则当前hooks完全等于React.useState
 * @returns
 */
export default function useState<S extends Record<string, any> | undefined>(initialState: S, merge?: boolean): any;
