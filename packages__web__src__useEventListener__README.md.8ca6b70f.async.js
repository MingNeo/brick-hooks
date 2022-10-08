(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[996],{56517:function(i,r,t){"use strict";t.r(r);var e=t(67294),u=t(36445),s=t(91485),a=e.memo(n=>{var c=n.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"useeventlistener"},e.createElement(u.AnchorLink,{to:"#useeventlistener","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useEventListener"),e.createElement("p",null,"\u65B9\u4FBF\u4E3Adom\u8282\u70B9\u7ED1\u5B9Aevent\uFF0C\u7EC4\u4EF6\u5378\u8F7D\u65F6\u81EA\u52A8\u8FDB\u884C\u89E3\u7ED1"),e.createElement(s.Z,{code:`// \u901A\u8FC7dom\u6307\u5B9A\u9700\u8981\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u8282\u70B9\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\u4E14\u672A\u4F7F\u7528ref\u5219\u4F1A\u9ED8\u8BA4\u4F7F\u7528window
useEventListener('resize', (e) => {
  // ...
}, { dom: window })

useEventListener('click', (e) => {
  // ...
}, { dom: document.querySelector('#xxx'), capture: true })

// \u4F7F\u7528ref
const ref = useEventListener('click', (e) => {
  // ...
})

return <div ref={node => ref.current = node}></div>`,lang:"javascript"})))});r.default=n=>{var c=e.useContext(u.context),l=c.demos;return e.useEffect(()=>{var o;n!=null&&(o=n.location)!==null&&o!==void 0&&o.hash&&u.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))},[]),e.createElement(a,{demos:l})}}}]);
