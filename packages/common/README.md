# `brick-hooks`

> 可用于React/React-native 的React Hooks Library
部分仅可用于web/react-native的hook见 brick-hooks-web、brick-hooks-native

## Usage

```
const { useArray } = require('brick-hooks');
```

[文档](https://terminus-org.erda.cloud/terminus/workBench/projects/213/apps/6541/repo/tree/master/packages/common/README.md) 

#### 全局状态管理
[useStore](./src/useStore/README.md) 更好用的全局状态管理。导出[hydrogen-store](https://terminus-org.erda.cloud/terminus/workBench/projects/213/apps/6541/repo/tree/master/packages/store-next/README.md)的useStore

#### 处理请求
[useAsync](./src/useAsync/README.md) 对请求进行简单处理，自动处理loading

#### 简化数据处理
[useArray](./src/useArray/README.md) 方便使用数组

[useCounter](./src/useCounter/README.md) 步进器数字处理

[useToggle](./src/useToggle/README.md) 方便切换布尔值

[useSet](./src/useSet/README.md) 方便使用set

[useListData](./src/useListData/README.md) 将列表类型数据方便的自动进行对象、tree、分组等转化

[useListState](./src/useListState/README.md) 创建/维护列表类型数据，方便的自动进行对象、tree、分组等转化

[useDataListToTree](./src/useDataListToTree/README.md) useListData中转化为tree的封装，将列表类型数据转化为树的格式

[useDataListToMap](./src/useDataListToMap/README.md) useListData中转化为Object的封装

[useDataTreeToList](./src/useDataTreeToList/README.md) 将树的格式的数据转化为列表

[useDeepCompare](./src/useDeepCompare/README.md) 对数据进行深比较，返回比较结果和深克隆的新值

[useTrim](./src/useTrim/README.md) 对字符串进行自动去除空格

[useTrimValue](./src/useTrimValue/README.md) 创建一个字符串state，并对字符串进行自动去除空格

[useMemoCompare](./src/useMemoCompare/README.md) 根据指定函数判断一个数据是否应该触发更新，返回新的值

#### 开发方式
[useMethods](./src/useMethods/README.md) & [useMethodsImmer](./src/useMethods/README.md) 使用useMethods 或者 useMethodsImmer替代useState、useReducer，可以使你早下班一个小时

[useObjectState](./src/useObjectState/README.md) useMethods的更进一步封装，对于obj类型的state集合使用，类似于class组件的state，同样提供了方便使用的reducer等能力
[useObjectStateImmer](./src/useObjectStateIMmer/README.md) useObjectState的immer版本

[useReducerImmer](./src/useReducerImmer/README.md) 官方useReducer的Immer版本，通常情况下使用useMthods、useObjectState更佳

[useEventBus](./src/useEventBus/README.md) 提供一个Pub/Sub模式的hook，快速跨组件进行事件发布订阅

[useForceRender](./src/useForceRender/README.md) 返回一个强制更新的函数，调用时强制触发组件更新

#### 生命周期
[useDidMount](./src/useDidMount/README.md) 提供一个类似于componentDidMount生命周期的hook
[useDidUpdate](./src/useDidUpdate/README.md) 提供一个类似于componentDidUpdate生命周期的hook，首次不执行，仅更新时执行方法
[useWillUnmount](./src/useWillUnmount/README.md) 提供一个类似于componentWillUnmount生命周期的hook
[useUnmountedRef](./src/useUnmountedRef/README.md) 返回一个ref，ref的值为当前是否已卸载

#### debug
[useLogRender](./src/useLogRender/README.md) 打印触发当前组件渲染的state
[useRenderCount](./src/useRenderCount/README.md) 打印当前组件渲染的次数


#### 常见简单业务
[useListChecked](./src/useListChecked/README.md) 列表的单选、多选、选中全部

[useListViewData](./src/useListViewData/README.md) 列表页的请求、请求下一页等能力

[useInput](./src/useInput/README.md) 对input进行自动管理数据

#### 其他

[useIsoEffect](./src/useIsoEffect/README.md) 当当前环境为浏览器的时候，使用useLayoutEffect 替代 useEffect。用于一些动画等需要即时更新

[usePrevious](./src/usePrevious/README.md) 获取上一次的值，默认为最近一次更新前的值。也可以配置为每次rerender时触发

[useInterval](./src/useInterval/README.md) 方便使用setInterval

[useTimeout](./src/useTimeout/README.md) 方便使用setTimeout

[useDebounceEffect](./src/useDebounceEffect/README.md) 提供一个防抖的Effect

[useDebounceFn](./src/useDebounceFn/README.md) 对函数进行自动防抖处理

[useDebounceState](./src/useDebounceState/README.md) 使用防抖更新的useState

[useDebounceValue](./src/useDebounceValue/README.md) 对变化进行防抖处理的value

[useThrottleFn](./src/useThrottleFn/README.md) 对函数进行自动节流处理

[useRefCallback](./src/useRefCallback/README.md) 对函数使用React.useRef存储，保证任何依赖更新函数引用都不会改变

