## useForceRender

强制渲染组件。一个非常有用的 hooks，尤其是你在封装自定义组件的时候。

比如你通过 pub/sub 订阅了一个事件，或某个ref的值更新后，需要手工触发组件的渲染，就可以使用这个 hook。

### 用法

```javascript
import { useForceRender } from 'brick-hooks'

function MyComponent() {
  const forceUpdate = useForceRender()

  useSubscribe(('loginEventBus', payload) => {
    forceUpdate()
  })
}
```
