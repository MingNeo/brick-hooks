(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[346],{73602:function(E,o,e){"use strict";e.d(o,{m:function(){return u.m}});var u=e(67624),n=e(93142)},38348:function(E,o,e){"use strict";e.r(o);var u=e(67294),n=e(36445),l=e(72356),s=e(91485),c=u.memo(t=>{var a=t.demos,i=a["uselistsequenceload-demo"].component;return u.createElement(u.Fragment,null,u.createElement(u.Fragment,null,u.createElement("div",{className:"markdown"},u.createElement("h2",{id:"uselistsequenceload"},u.createElement(n.AnchorLink,{to:"#uselistsequenceload","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"useListSequenceLoad"),u.createElement("p",null,"\u5217\u8868\u9875\u4EE5\u5206\u7EC4\u6A21\u5F0F\u6309\u9700\u52A0\u8F7D\u4E0B\u4E00\u7EC4\uFF0C\u9002\u7528\u6BCF\u4E2A item \u5404\u4E0D\u76F8\u540C\u60C5\u51B5\u3002\u5982\u9996\u9875\u88C5\u4FEE/\u4FE1\u606F\u6D41\u3002"),u.createElement("p",null,"\u591A\u6570\u60C5\u51B5\u4E0B\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 brick-hooks-native/brick-hooks-web \u7684 useLazySequenceLoad\u3002"),u.createElement("p",null,"useLazySequenceLoad \u57FA\u4E8E\u672C hook \u53CA useInView \u81EA\u52A8\u8FDB\u884C\u61D2\u52A0\u8F7D\u3002"),u.createElement("p",null,"\u4F46\u662F\u5BF9\u4E8E\u9996\u9875\u52A8\u6001\u88C5\u4FEE\u7684\u697C\u5C42\u3001\u4FE1\u606F\u6D41\u5217\u8868\u7B49\u6BCF\u4E2A item \u9AD8\u5EA6\u90FD\u4E0D\u76F8\u540C\uFF0C\u65E0\u6CD5\u9884\u5148\u5360\u4F4D\uFF0C\u4E14\u6570\u636E\u901A\u5E38\u7531 item \u7EC4\u4EF6\u81EA\u8EAB\u53D1\u9001\u8BF7\u6C42\u83B7\u53D6\u3002\u5219\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A hooks \u8FDB\u884C\u6309\u987A\u5E8F\u5206\u7EC4\u61D2\u52A0\u8F7D\u3002\u6BCF\u6B21\u90FD\u52A0\u8F7D\u6307\u5B9A\u6570\u91CF\u7684\u7EC4\u4EF6\u3002"),u.createElement("p",null,"\u4E00\u822C\u7684\u5217\u8868\u61D2\u52A0\u8F7D\u4E0D\u4E00\u5B9A\u9002\u7528 useListSequenceLoad\uFF0C\u53EF\u4EE5\u5728\u6BCF\u4E2A item \u4E2D\u5355\u72EC\u4F7F\u7528 brickHooksWeb.useInView\u3002"),u.createElement("h3",{id:"\u6F14\u793A"},u.createElement(n.AnchorLink,{to:"#\u6F14\u793A","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"\u6F14\u793A")),u.createElement(l.default,a["uselistsequenceload-demo"].previewerProps,u.createElement(i,null)),u.createElement("div",{className:"markdown"},u.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},u.createElement(n.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),u.createElement(s.Z,{code:`function useListSequenceLoad(
  listData?: any[],
  { groupSize }?: Options,
): {
  showList: any[]
  isAllLoaded: boolean
  showfooterLoading: boolean
  nextRenderIndex: number
  loadNextGroup: () => void
  reset: () => void
}`,lang:"typescript"}),u.createElement("h3",{id:"\u7528\u6CD5"},u.createElement(n.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),u.createElement(s.Z,{code:`function Container() {
  const rootRef = useRef<any>()
  const { showfooterLoading, showList, loadNextGroup } = useListSequenceLoad(list, { groupSize: 3 })

  return (
    <div ref={(ref) => (rootRef.current = ref)} className="container">
      {showList.map((item) => <Item key={item.id}>{item.value}</Item>)}
      {!!showfooterLoading && <Loading onInView={loadNextGroup} rootRef={rootRef} />}
    </div>
  )
}

function Loading({ onInView, rootRef, ...restProps }) {
  const { targetProps } = useInView({ root: rootRef, onInView })
  return (
    <div {...targetProps} {...restProps}> Loading </div>
  )
}`,lang:"javascript"}))))});o.default=t=>{var a=u.useContext(n.context),i=a.demos;return u.useEffect(()=>{var r;t!=null&&(r=t.location)!==null&&r!==void 0&&r.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),u.createElement(c,{demos:i})}}}]);
