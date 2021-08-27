## useStyle

向页面中插入一段Style
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
