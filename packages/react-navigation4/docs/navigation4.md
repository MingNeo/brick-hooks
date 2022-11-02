# `brick-hooks-react-navigation4`

> 用于 react-navigation4 的 hooks

### 用法

```javascript
import { useFocusEffect } from 'brick-hooks-react-navigation4'
```

[useFocusEffect](https://mingneo.github.io/brick-hooks/navigation4/useFocusEffect) 监听页面 focus，兼容 react-navigation5 的 useFocusEffect

[useIsFocused](https://mingneo.github.io/brick-hooks/navigation4/useIsFocused) 自动获取页面是否为 focus

[useNavigation](https://mingneo.github.io/brick-hooks/navigation4/useNavigation) 方便使用 navigation 实例，兼容 react-navigation5 内置 hook

[usePageFocus](https://mingneo.github.io/brick-hooks/navigation4/usePageFocus) 与 useFocusEffect 类似，但是传入的 effect 函数无需要使用 useCallback 处理

[useScrollToTop](https://mingneo.github.io/brick-hooks/navigation4/useScrollToTop) 页面 focus 时自动滚动到 top
