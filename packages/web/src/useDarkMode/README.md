---
nav:
  path: /web
---

## useDarkMode

方便切换 DarkMode

### 类型声明

```typescript
function useDarkMode({ className }?: { className?: string }): [boolean, (value: boolean) => void]
```

### 用法

```javascript
const [isDark, toggleDark] = useDarkMode({ className: 'dark' })

toggleDark()
```
