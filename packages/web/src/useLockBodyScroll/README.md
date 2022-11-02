---
nav:
  path: /web
---

## useLockBodyScroll

在 modal 弹窗等界面中，有时候会触发背景页面的滚动。使用此 hook 将锁定背景页面

### 用法

```javascript
function Modal() {
  // 添加此hook 即可
  useLockBodyScroll()

  return <div></div>
}
```
