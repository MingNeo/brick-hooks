(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[6969],{73602:function(s,o,e){"use strict";e.d(o,{m:function(){return n.m}});var n=e(67624),t=e(93142)},14090:function(s,o,e){"use strict";e.r(o);var n=e(67294),t=e(36445),c=e(26328),u=e(91485),m=n.memo(l=>{var a=l.demos,i=a["usepolling-demo"].component;return n.createElement(n.Fragment,null,n.createElement(n.Fragment,null,n.createElement("div",{className:"markdown"},n.createElement("h2",{id:"usepolling"},n.createElement(t.AnchorLink,{to:"#usepolling","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"usePolling"),n.createElement("p",null,"\u8F6E\u8BE2"),n.createElement("h3",{id:"\u6F14\u793A"},n.createElement(t.AnchorLink,{to:"#\u6F14\u793A","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u6F14\u793A")),n.createElement(c.default,a["usepolling-demo"].previewerProps,n.createElement(i,null)),n.createElement("div",{className:"markdown"},n.createElement("h3",{id:"\u7528\u6CD5"},n.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),n.createElement(u.Z,{code:`function MyComponent() {
  const { result, isPolling, error, startPolling, stopPolling } = usePolling(fetchData, {
    interval: 500,
    retryCount: 2,
    onSuccess: (data: any) => {
      // ...
    },
    onFail: (error) => {
      // ...
    },
  })

  const handleClick = () => {
    isPolling ? stopPolling() : startPolling()
  }

  return (
    <div>
      <button onClick={handleClick}>{isPolling ? '\u505C\u6B62\u8F6E\u8BE2' : '\u70B9\u51FB\u5F00\u59CB\u8F6E\u8BE2'}</button>
      <p>{isPolling ? 'polling...' : ''}</p>
      <p>{error ? error.message : result}</p>
    </div>
  )
}`,lang:"javascript"}),n.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},n.createElement(t.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),n.createElement(u.Z,{code:`type Callback = (...args: any[]) => Promise<any>

interface Options {
  interval?: number // \u8F6E\u8BE2\u95F4\u9694\u65F6\u95F4
  retryCount?: number // \u8F6E\u8BE2\u5931\u8D25\u540E\u91CD\u8BD5\u6B21\u6570
  onSuccess?: (data: any) => boolean | void // \u6210\u529F\u540E\u7684\u56DE\u8C03\u51FD\u6570, \u8FD4\u56DEtrue\u65F6\u4F1A\u7EE7\u7EED\u8F6E\u8BE2
  onFail?: (data: any) => void // \u5931\u8D25\u540E\u7684\u56DE\u8C03\u51FD\u6570
}

const usePolling: (
  callback: Callback,
  options: Options,
) => {
  isPolling: boolean
  startPolling: () => void
  stopPolling: () => void
  result: any
  error: any
}`,lang:"typescript"}))))});o.default=l=>{var a=n.useContext(t.context),i=a.demos;return n.useEffect(()=>{var r;l!=null&&(r=l.location)!==null&&r!==void 0&&r.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(l.location.hash.slice(1)))},[]),n.createElement(m,{demos:i})}}}]);
