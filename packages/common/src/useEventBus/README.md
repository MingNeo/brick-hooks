## useEventBus

提供一个Pub/Sub的hook，可用作跨组件通信。

#### 直接使用全局bus
使用useEventBus
```javascript
import { useEventBus } from 'brick-hooks'
function Component1() {
  const { useSubscribe, publish } = useEventBus('loginEventBus');
  useSubscribe(payload => { /* ... */})
  const handleChange = (payload) => publish(payload)
}

function Component2() {
  const { publish } = useEventBus('loginEventBus');
  const handleChange = (payload) => publish(payload)
}
```

```javascript
import { useEventBus } from 'brick-hooks'
function Component1() {
  const { useSubscribe, publish } = useEventBus();
  useSubscribe(('loginEventBus', payload) => { /* ... */})
  const handleChange = (payload) => publish('loginEventBus', payload)
}

function Component2() {
  const { publish } = useEventBus();
  const handleChange = (payload) => publish('loginEventBus', payload)
}
```

也可以直接使用useSubscribe、publish
```javascript
import { useSubscribe, publish } from 'brick-hooks'
function Component1() {
  useSubscribe(('loginEventBus', payload) => { /* ... */})

  const handleChange = (value) => publish('loginEventBus', value)
}

function Component2() {
  const handleChange = (value) => publish('loginEventBus', value)

  return <Child onClick={handleChange} />;
}
```

#### 创建一个独立的eventBus实例及相关hooks
通过createEventBus创建一个独立的eventBus实例，即可与全局的eventBus隔离开来
```javascript
import { createEventBus } from 'brick-hooks'
const { publish, useSubscribe, useEventBus } = createEventBus()
```

#### 创建一个独立的，且使用react context 的eventBus及相关hooks
```javascript
import { createContextEventBus } from 'brick-hooks'
const ExampleEventBus = createContextEventBus()

function Component1() {
  const { useSubscribe, publish } = ExampleEventBus.useEventBus();
  useSubscribe(('loginEventBus', payload) => { /* ... */})
}

function Component2() {
  // 也可以直接使用React.useContext
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

