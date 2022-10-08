# `brick-hooks`

> 可用于 React/React-native 的 React Hooks Library 部分仅可用于 web/react-native 的 hook 见 brick-hooks-web、brick-hooks-native

## 用法

```
const { useArray } = require('brick-hooks');
```

[文档](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/README.md)

#### 全局状态管理

[useStore](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useStore/README.md) 更好用的全局状态管理。导出[hydrogen-store](https://github.com/MingNeo/hydrogen-store)的 useStore

#### 处理请求

[useAsync](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useAsync/README.md) 对请求进行简单处理，自动处理 loading

#### 简化数据处理

[useArray](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useArray/README.md) 方便使用数组

[useCounter](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useCounter/README.md) 步进器数字处理

[useToggle](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useToggle/README.md) 方便切换布尔值

[useSet](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useSet/README.md) 方便使用 set

[useListData](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useListData/README.md) 将列表类型数据方便的自动进行对象、tree、分组等转化

[useListState](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useListState/README.md) 创建/维护列表类型数据，方便的自动进行对象、tree、分组等转化

[useDataListToTree](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useDataListToTree/README.md) useListData 中转化为 tree 的封装，将列表类型数据转化为树的格式

[useDataListToMap](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useDataListToMap/README.md) useListData 中转化为 Object 的封装

[useDataTreeToList](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useDataTreeToList/README.md) 将树的格式的数据转化为列表

[useDeepCompare](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useDeepCompare/README.md) 对数据进行深比较，返回比较结果和深克隆的新值

[useTrim](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useTrim/README.md) 对字符串进行自动去除空格

[useTrimValue](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useTrimValue/README.md) 创建一个字符串 state，并对字符串进行自动去除空格

[useMemoCompare](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useMemoCompare/README.md) 根据指定函数判断一个数据是否应该触发更新，返回新的值

#### 开发方式

[useMethods](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useMethods/README.md) 使用 useMethods 替代 useState、useReducer，可以使你早下班一个小时

[useMethodsImmer](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useMethods/README.md) 使用 useMethodsImmer 替代 useState、useReducer，向 vuex 一样管理 reducer! 可以使你早下班一个小时

[useObjectState](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useObjectState/README.md) useMethods 的更进一步封装，对于 obj 类型的 state 集合使用，类似于 class 组件的 state，同样提供了方便使用的 reducer 等能力

[useObjectStateImmer](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useObjectStateIMmer/README.md) useObjectState 的 immer 版本

[useReducerImmer](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useReducerImmer/README.md) 官方 useReducer 的 Immer 版本，通常情况下使用 useMthods、useObjectState 更佳

[useEventBus](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useEventBus/README.md) 提供一个 Pub/Sub 模式的 hook，快速跨组件进行事件发布订阅

[useForceRender](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useForceRender/README.md) 返回一个强制更新的函数，调用时强制触发组件更新

#### 生命周期

[useDidMount](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useDidMount/README.md) 提供一个类似于 componentDidMount 生命周期的 hook

[useDidUpdate](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useDidUpdate/README.md) 提供一个类似于 componentDidUpdate 生命周期的 hook，首次不执行，仅更新时执行方法

[useWillUnmount](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useWillUnmount/README.md) 提供一个类似于 componentWillUnmount 生命周期的 hook

[useUnmountedRef](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useUnmountedRef/README.md) 返回一个 ref，ref 的值为当前是否已卸载

#### debug

[useLogRender](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useLogRender/README.md) 打印触发当前组件渲染的 state

[useRenderCount](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useRenderCount/README.md) 打印当前组件渲染的次数

#### 常见简单业务

[useListChecked](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useListChecked/README.md) 列表的单选、多选、选中全部

[useListViewData](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useListViewData/README.md) 列表页的请求、请求下一页等能力

[useInput](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useInput/README.md) 对 input 进行自动管理数据

[useCountdown](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useCountdown/README.md) 倒计时、天时分秒毫秒

[useCountup](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useCountup/README.md) 计时、天时分秒毫秒

[useListSequenceLoad](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useListSequenceLoad/README.md) 信息列表分组懒加载，可用于首页等每个组件都自己维护状态/请求等的组件

[useHistoryRef](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useHistoryRef/README.md) 创建、管理历史记录，并可进行回退、重做功能。返回 ref

[useHistoryState](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useHistoryState/README.md) 创建、管理历史记录，并可进行回退、重做功能。

#### 其他

[useIsoEffect](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useIsoEffect/README.md) 当当前环境为浏览器的时候，使用 useLayoutEffect 替代 useEffect。用于一些动画等需要即时更新

[usePrevious](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/usePrevious/README.md) 获取上一次的值，默认为最近一次更新前的值。也可以配置为每次 rerender 时触发

[useInterval](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useInterval/README.md) 方便使用 setInterval

[useTimeout](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useTimeout/README.md) 方便使用 setTimeout

[useTimeoutFn](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useTimeoutFn/README.md) 方便使用 setTimeout,返回一个安全包裹的 setTimeout 函数

[useDebounceEffect](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useDebounceEffect/README.md) 提供一个防抖的 Effect

[useEffectMaunal](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useEffectMaunal/README.md) 同 useEffect，不同的是，不通过 deps 进行触发, 而通过返回一个更新函数触发 effect callback

[useDebounceFn](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useDebounceFn/README.md) 对函数进行自动防抖处理

[useDebounceState](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useDebounceState/README.md) 使用防抖更新的 useState

[useDebounceValue](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useDebounceValue/README.md) 对变化进行防抖处理的 value

[useThrottleFn](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useThrottleFn/README.md) 对函数进行自动节流处理

[useRefCallback](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useRefCallback/README.md) 对函数使用 React.useRef 存储，保证任何依赖更新函数引用都不会改变

[useValueRef](https://github.com/MingNeo/brick-hooks/blob/master/packages/common/src/useValueRef/README.md) 使用 ref 存储的 value
