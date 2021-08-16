## useScript

向页面中插入一个script文件
```javascript
function MyComponent() {
  const status = useScript('http://xxx.cdn.com/moment.js'); 

  useEffect(() => {
    switch(status) {
      case 'success':
        // ...
        break;
      case 'loading':
        // ...
        break;
      case 'error':
        // ...
        break;
      default: break;
    }
  }, [status])
  return <Child>...</Child>;
}
```
