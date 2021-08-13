/**
 * 打印当前组件/hooks中哪个参数变化了引起更新、组件渲染次数
 * 这个hooks在生产中一定要禁用掉！！
 * @param {*} props
 * @param {*} customCallback 可以通过callback自行进行打印输出
 * @returns renderTimes 组件渲染了多少次
 */
export default function useLogRender(props: Record<string, any>, customCallback: (changesObj: {}) => any): number;
