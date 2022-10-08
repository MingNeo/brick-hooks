# `hydrogen-store-redux-plugin`

> hydrogen-store redux 插件，用于使用 redux-dev-tool，但是对业务代码不会有任何影响

即使因为种种原因你不想使用 redux 了，但是否时常会怀念 redux-devtool 的方便？hydrogen-store 可以方便开启 redux-devtool。仅需引入一个插件

### 用法

#### 用法 redux devtool

```javascript
import { usePlugins } from 'hydrogen-store'
import reduxPlugin from 'hydrogen-store-redux-plugin'

usePlugins([reduxPlugin])
```

好了，现在可以愉快的使用 redux devtool 进行调试了。hydrogen-store 本身不依赖 redux，使用 redux 和不使用 redux 对于业务代码完全没有影响，你可以通过环境变量/打包配置等开启或禁用它。

使用独立实例时需配置 devtoolId，用来在 devtool 中加以区分
