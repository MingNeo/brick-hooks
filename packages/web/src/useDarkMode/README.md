## useDarkMode

方便切换DarkMode

```typescript
function useDarkMode({ className }?: {
  className?: string;
}): [boolean, (value: boolean) => void]
```

js无法自动监听cookie改变，因此，useDarkMode返回的cookie item值不会自动更新。
可以使用refreshItem来刷新为cookie中最新值，或使用api.get方法获取最新值

```javascript
const [isDark, toggleDark] = useDarkMode({ className: 'dark' });

toggleDark()
```
