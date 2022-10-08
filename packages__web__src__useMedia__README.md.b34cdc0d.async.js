(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[9107],{68650:function(d,i,a){"use strict";a.r(i);var e=a(67294),n=a(36445),l=a(91485),r=e.memo(u=>{var o=u.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usemedia"},e.createElement(n.AnchorLink,{to:"#usemedia","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useMedia"),e.createElement("p",null,"\u901A\u8FC7 js \u65B9\u4FBF\u4F7F\u7528\u5A92\u4F53\u67E5\u8BE2"),e.createElement("p",null,"mediaQueryValueList \u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5F53\u6709\u591A\u6761 mediaQuery \u5339\u914D\u65F6\uFF0C\u4F1A\u6839\u636E\u6570\u7EC4 index \u7684\u987A\u5E8F\u83B7\u53D6\u7B2C\u4E00\u4E2A\u5339\u914D\u7684 value \u5982\u8FC7\u8BBE\u7F6E\u521D\u59CB\u503C\uFF0C\u5219\u521D\u59CB\u72B6\u6001\u4E0D\u6839\u636E\u5A92\u4F53\u67E5\u8BE2\u5224\u65AD\uFF0C\u800C\u4F7F\u7528\u521D\u59CB\u503C"),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(n.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(n.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(l.Z,{code:"function useMedia<T = any>(mediaQueryValueList: MediaQueryValueList, initialValue?: T): T",lang:"typescript"}),e.createElement(l.Z,{code:`// \u6805\u683C\u5E03\u5C40\u65F6\uFF0C\u4E0D\u540C\u5C3A\u5BF8\u4F7F\u7528\u4E0D\u540C\u7684\u5BBD\u5EA6
// \u7528\u4E8E\u5C4F\u5E55\u5C3A\u5BF8breakpoint\u7684\u60C5\u51B5\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528useBreakpoint
function MyComponent() {
  const mediaQueryValueList = [
    {
      media: '(min-width: 1200px)',
      value: 6,
    },
    {
      media: '(min-width: 768px) and (max-width: 992px)',
      value: 24,
    },
  ]
  const col = useMedia(mediaQueryValueList)
}

// \u6839\u636E\u7CFB\u7EDF\u4E3B\u9898\u8272\u5207\u6362\u6837\u5F0F
function MyComponent() {
  const mediaQueryValueList = [
    {
      media: '(prefers-color-scheme: light)',
      value: { background: '#fff', color: '#000' },
    },
    {
      media: '(prefers-color-scheme: dark)',
      value: { background: '#000', color: '#fff' },
    },
  ]
  const style = useMedia(mediaQueryValueList, mediaQueryValueList[0].value)

  return <div style={style}>{/* ... */}</div>
}`,lang:"javascript"})))});i.default=u=>{var o=e.useContext(n.context),c=o.demos;return e.useEffect(()=>{var t;u!=null&&(t=u.location)!==null&&t!==void 0&&t.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e.createElement(r,{demos:c})}}}]);
