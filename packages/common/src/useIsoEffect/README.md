## useIsoEffect

替换useLayoutEffect，以兼容ssr，在server端自动使用useEffect

```typescript
(effect: React.EffectCallback, deps?: React.DependencyList) => void
```

### 使用
```javascript
function MyComponent() {
  useIsoEffect(() => {
    // ...
  }, [])
}
```