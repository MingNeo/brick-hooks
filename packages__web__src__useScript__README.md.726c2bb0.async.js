(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[4855],{77612:function(i,c,a){"use strict";a.r(c);var e=a(67294),t=a(36445),u=a(91485),l=e.memo(n=>{var s=n.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usescript"},e.createElement(t.AnchorLink,{to:"#usescript","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useScript"),e.createElement("p",null,"\u5411\u9875\u9762\u4E2D\u63D2\u5165\u4E00\u4E2A script \u6587\u4EF6"),e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(t.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(u.Z,{code:`function useScript(
  src: string,
  onLoaded: (status: string) => void,
  options?: {
    async?: boolean // default: true script\u6807\u7B7E\u4F7F\u7528\u5F02\u6B65\u6A21\u5F0F
    manual?: boolean // default: false \u624B\u52A8\u6A21\u5F0F
    removeOnDestroy?: boolean // default: false \u5378\u8F7D\u7EC4\u4EF6\u65F6\u5220\u9664script\u6807\u7B7E
  },
): {
  status: 'idle' | 'loading' | 'success' | 'error'
  load: () => Promise<Element>
  ref: any
}`,lang:"typescript"}),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(u.Z,{code:`function MyComponent() {
  const { status } = useScript('http://xxx.cdn.com/moment.js')

  useEffect(() => {
    if (status === 'success') {
      // ...
    }
  }, [status])

  return <Child>...</Child>
}`,lang:"javascript"}),e.createElement("p",null,"\u4E5F\u53EF\u4EE5\u4F7F\u7528 onLoaded"),e.createElement(u.Z,{code:`function MyComponent() {
  useScript('http://xxx.cdn.com/moment.js', (e) => {
    // ...
  })
}`,lang:"javascript"}),e.createElement("p",null,"\u8BBE\u7F6E manual\uFF0C\u901A\u8FC7 load \u624B\u52A8\u52A0\u8F7D\u6216\u5B89\u5168\u6267\u884C\u52A0\u8F7D\u540E\u7684\u903B\u8F91"),e.createElement(u.Z,{code:`function MyComponent() {
  const { status, load } = useScript('http://xxx.cdn.com/moment.js', () => {}, { manual: true })

  const handleClick = async () => {
    await load()
    // ...
  }
}`,lang:"javascript"}),e.createElement("p",null,"\u4E0D\u540C\u7EC4\u4EF6\u540C\u6837 script \u4E0D\u4F1A\u91CD\u590D\u63D2\u5165"),e.createElement(u.Z,{code:`// http://xxx.cdn.com/moment.js \u53EA\u4F1A\u63D2\u5165\u4E00\u6B21
function MyComponent1() {
  const { status } = useScript('http://xxx.cdn.com/moment.js')
}
function MyComponent2() {
  const { status } = useScript('http://xxx.cdn.com/moment.js')
}`,lang:"javascript"})))});c.default=n=>{var s=e.useContext(t.context),r=s.demos;return e.useEffect(()=>{var o;n!=null&&(o=n.location)!==null&&o!==void 0&&o.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))},[]),e.createElement(l,{demos:r})}}}]);
