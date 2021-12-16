## useScript

向页面中插入一个script文件
```javascript
function MyComponent() {
  const { status } = useScript('http://xxx.cdn.com/moment.js'); 

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

  // 也可以注册一个函数监听状态
  useScript('http://xxx.cdn.com/moment.js', (e) => {
    // ...
  }); 

  // 也可以通过load加载或安全执行加载后的逻辑
  const { status, load } = useScript('http://xxx.cdn.com/moment.js');

  const handleClick = async () => {
    await load();
    // ...
  }
  return <Child>...</Child>;
}
```
