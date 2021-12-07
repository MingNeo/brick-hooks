## useStyle

向页面中插入一段Style
为防止重复插入, id 是必填的

```typescript
function useStyle(styleContent: string, id: string): void
```

```javascript
const style = `
.title {
  width: 200px;
  height: 20px;
}
`
function MyComponent() {
  useStyle(title, 'styleUserTitle'); 
}
```
