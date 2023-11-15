# `brick-hooks`

> 可用于 React/React-native 的 React Hooks Library. 部分仅可用于 web/react-native 的 hook 见 brick-hooks-web、brick-hooks-native

[在线文档](https://mingneo.github.io/brick-hooks/)

## 用法

```
import { useArray } from 'brick-hooks';
```

#### 全局状态管理

[useStore](https://mingneo.github.io/brick-hooks/useStore) 更好用的全局状态管理。导出[hydrogen-store](https://github.com/MingNeo/hydrogen-store)的 useStore

#### 处理请求

[useAsync](https://mingneo.github.io/brick-hooks/useAsync) 对请求进行简单处理，自动处理 loading

#### 简化数据处理

[useArray](https://mingneo.github.io/brick-hooks/useArray) 方便使用数组

[useCounter](https://mingneo.github.io/brick-hooks/useCounter) 步进器数字处理

[useToggle](https://mingneo.github.io/brick-hooks/useToggle) 方便切换布尔值

[useSet](https://mingneo.github.io/brick-hooks/useSet) 方便使用 set

[useListData](https://mingneo.github.io/brick-hooks/useListData) 将列表类型数据方便的自动进行对象、tree、分组等转化

[useListState](https://mingneo.github.io/brick-hooks/useListState) 创建/维护列表类型数据，方便的自动进行对象、tree、分组等转化

[useDataListToTree](https://mingneo.github.io/brick-hooks/useDataListToTree) useListData 中转化为 tree 的封装，将列表类型数据转化为树的格式

[useDataListToMap](https://mingneo.github.io/brick-hooks/useDataListToMap) useListData 中转化为 Object 的封装

[useDataTreeToList](https://mingneo.github.io/brick-hooks/useDataTreeToList) 将树的格式的数据转化为列表

[useDeepCompare](https://mingneo.github.io/brick-hooks/useDeepCompare) 对数据进行深比较，返回比较结果和深克隆的新值

[useTrim](https://mingneo.github.io/brick-hooks/useTrim) 对字符串进行自动去除空格

[useTrimValue](https://mingneo.github.io/brick-hooks/useTrimValue) 创建一个字符串 state，并对字符串进行自动去除空格

[useMemoCompare](https://mingneo.github.io/brick-hooks/useMemoCompare) 根据指定函数判断一个数据是否应该触发更新，返回新的值

#### 开发方式

[useMethods](https://mingneo.github.io/brick-hooks/useMethods) 使用 useMethods 替代 useState、useReducer，可以使你早下班一个小时

[useMethodsImmer](https://mingneo.github.io/brick-hooks/useMethods) 使用 useMethodsImmer 替代 useState、useReducer，向 vuex 一样管理 reducer! 可以使你早下班一个小时

[useObjectState](https://mingneo.github.io/brick-hooks/useObjectState) useMethods 的更进一步封装，对于 obj 类型的 state 集合使用，类似于 class 组件的 state，同样提供了方便使用的 reducer 等能力

[useObjectStateImmer](https://mingneo.github.io/brick-hooks/useObjectStateIMmer) useObjectState 的 immer 版本

[useReducerImmer](https://mingneo.github.io/brick-hooks/useReducerImmer) 官方 useReducer 的 Immer 版本，通常情况下使用 useMthods、useObjectState 更佳

[useEventBus](https://mingneo.github.io/brick-hooks/useEventBus) 提供一个 Pub/Sub 模式的 hook，快速跨组件进行事件发布订阅

[useForceRender](https://mingneo.github.io/brick-hooks/useForceRender) 返回一个强制更新的函数，调用时强制触发组件更新

#### 生命周期

[useDidMount](https://mingneo.github.io/brick-hooks/useDidMount) 提供一个类似于 componentDidMount 生命周期的 hook

[useDidUpdate](https://mingneo.github.io/brick-hooks/useDidUpdate) 提供一个类似于 componentDidUpdate 生命周期的 hook，首次不执行，仅更新时执行方法

[useWillUnmount](https://mingneo.github.io/brick-hooks/useWillUnmount) 提供一个类似于 componentWillUnmount 生命周期的 hook

[useUnmountedRef](https://mingneo.github.io/brick-hooks/useUnmountedRef) 返回一个 ref，ref 的值为当前是否已卸载

#### debug

[useLogRender](https://mingneo.github.io/brick-hooks/useLogRender) 打印触发当前组件渲染的 state

[useRenderCount](https://mingneo.github.io/brick-hooks/useRenderCount) 打印当前组件渲染的次数

#### 常见简单业务

[useListChecked](https://mingneo.github.io/brick-hooks/useListChecked) 列表的单选、多选、选中全部

[useListViewData](https://mingneo.github.io/brick-hooks/useListViewData) 列表页的请求、请求下一页等能力

[useInput](https://mingneo.github.io/brick-hooks/useInput) 对 input 进行自动管理数据

[useCountdown](https://mingneo.github.io/brick-hooks/useCountdown) 倒计时、天时分秒毫秒

[useCountup](https://mingneo.github.io/brick-hooks/useCountup) 计时、天时分秒毫秒

[useListSequenceLoad](https://mingneo.github.io/brick-hooks/useListSequenceLoad) 信息列表分组懒加载，可用于首页等每个组件都自己维护状态/请求等的组件

[useHistoryRef](https://mingneo.github.io/brick-hooks/useHistoryRef) 创建、管理历史记录，并可进行回退、重做功能。返回 ref

[useHistoryState](https://mingneo.github.io/brick-hooks/useHistoryState) 创建、管理历史记录，并可进行回退、重做功能。

#### 其他

[useIsoEffect](https://mingneo.github.io/brick-hooks/useIsoEffect) 当当前环境为浏览器的时候，使用 useLayoutEffect 替代 useEffect。用于一些动画等需要即时更新

[useEffectWithPrev](https://mingneo.github.io/brick-hooks/useEffectWithPrev) 同 useEffect，不同的是，回调函数提供一个参数，为上一次的 deps

[useMemoWithPrev](https://mingneo.github.io/brick-hooks/useMemoWithPrev) 同 useMemo，不同的是，回调函数提供两个参数，为上一次的 deps 及上次的 value

[usePrevious](https://mingneo.github.io/brick-hooks/usePrevious) 获取上一次的值，默认为最近一次更新前的值。也可以配置为每次 rerender 时触发

[useInterval](https://mingneo.github.io/brick-hooks/useInterval) 方便使用 setInterval

[useTimeout](https://mingneo.github.io/brick-hooks/useTimeout) 方便使用 setTimeout

[useTimeoutFn](https://mingneo.github.io/brick-hooks/useTimeoutFn) 方便使用 setTimeout,返回一个安全包裹的 setTimeout 函数

[useDebounceEffect](https://mingneo.github.io/brick-hooks/useDebounceEffect) 提供一个防抖的 Effect

[useEffectMaunal](https://mingneo.github.io/brick-hooks/useEffectMaunal) 同 useEffect，不同的是，不通过 deps 进行触发, 而通过返回一个更新函数触发 effect callback

[useDebounceFn](https://mingneo.github.io/brick-hooks/useDebounceFn) 对函数进行自动防抖处理

[useDebounceState](https://mingneo.github.io/brick-hooks/useDebounceState) 使用防抖更新的 useState

[useDebounceValue](https://mingneo.github.io/brick-hooks/useDebounceValue) 对变化进行防抖处理的 value

[useThrottleFn](https://mingneo.github.io/brick-hooks/useThrottleFn) 对函数进行自动节流处理

[useRefCallback](https://mingneo.github.io/brick-hooks/useRefCallback) 对函数使用 React.useRef 存储，保证任何依赖更新函数引用都不会改变

[useRefValue](https://mingneo.github.io/brick-hooks/useRefValue) 使用 ref 存储的 value
