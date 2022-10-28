## useEventBus

提供一个 Pub/Sub 的 hook，可用作跨组件通信。

### 用法

#### 直接使用全局 bus

> ！全局 bus 不要在 server 端使用，如需开启 ssr，使用 createEventBus。

使用 useEventBus

```javascript
import { useEventBus } from 'brick-hooks'
function Component1() {
  const { useSubscribe, publish } = useEventBus();
  useSubscribe(('loginEventBus', payload) => {
    // ...
  })
}

// 在任意组件中触发
const { publish } = useEventBus();
const handleChange = (payload) => publish('loginEventBus', payload)
```

返回指定事件的 useSubscribe、publish

```javascript
import { useEventBus } from 'brick-hooks'
function Component1() {
  const { useSubscribe, publish } = useEventBus('loginEventBus')
  useSubscribe((payload) => {
    // ...
  })
  const handleChange = (payload) => publish(payload)
}

function Component2() {
  const { publish } = useEventBus('loginEventBus')
  const handleChange = (payload) => publish(payload)
}
```

直接使用 全局 useSubscribe、publish

```javascript
import { useSubscribe, publish } from 'brick-hooks'
function Component1() {
  useSubscribe(('loginEventBus', payload) => {
    // ...
  })

  const handleChange = (value) => publish('loginEventBus', value)
}

function Component2() {
  const handleChange = (value) => publish('loginEventBus', value)

  return <Child onClick={handleChange} />;
}
```

#### 独立 eventBus 实例

通过 createEventBus 创建一个独立的 eventBus 实例，即可与全局的 eventBus 隔离开来。

如果使用 ssr，则必须使用独立 eventBus 实例，推荐直接使用 createContextEventBus

```javascript
import { createEventBus } from 'brick-hooks'
const { publish, useSubscribe, useEventBus } = createEventBus()
```

#### 创建一个独立的，且使用 react context 的 eventBus 及相关 hooks

```javascript
import { createContextEventBus } from 'brick-hooks'
const ExampleEventBus = createContextEventBus()

function Component1() {
  const { useSubscribe, publish } = ExampleEventBus.useEventBus();
  useSubscribe(('loginEventBus', payload) => {
    // ...
  })
}

function Component2() {
  // 也可以使用React.useContext
  const { publish } = React.useContext(ExampleEventBus);
  const handleChange = (payload) => publish('loginEventBus', payload)
}

function Parent() {
  return <ExampleEventBus.Provider>
    <Component1 />
    <Component2 />
  </ExampleEventBus.Provider>
}
```
