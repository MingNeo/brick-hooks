## useDarkMode

方便切换 DarkMode

### 类型声明

```typescript
function useDarkMode({ className }?: { className?: string }): [boolean, (value: boolean) => void]
```

js 无法自动监听 cookie 改变，因此，useDarkMode 返回的 cookie item 值不会自动更新。可以使用 refreshItem 来刷新为 cookie 中最新值，或使用 api.get 方法获取最新值

```javascript
const [isDark, toggleDark] = useDarkMode({ className: 'dark' })

toggleDark()
```
