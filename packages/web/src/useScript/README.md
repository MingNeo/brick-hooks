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
  useScript('http://xxx.cdn.com/moment.js', (status) => {
    if(status === 'success') {
      // ...
    }
  }); 

  // 也可以通过whenLoaded监听状态加载成功，whenLoaded的回调函数只会执行一次
  const { status, whenLoaded } = useScript('http://xxx.cdn.com/moment.js');

  const handleClick = () => {
    if(status === 'success') {
      // ...
    } else {
      whenLoaded(() => {
        // ...
      })
    }
  }
  return <Child>...</Child>;
}
```
