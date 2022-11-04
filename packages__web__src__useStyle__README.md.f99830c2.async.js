(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[6393],{73602:function(c,l,t){"use strict";t.d(l,{m:function(){return e.m}});var e=t(67624),n=t(93142)},14359:function(c,l,t){"use strict";t.r(l);var e=t(67294),n=t(36445),i=t(26328),a=t(91485),m=e.memo(u=>{var o=u.demos,s=o["usestyle-demo"].component;return e.createElement(e.Fragment,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usestyle"},e.createElement(n.AnchorLink,{to:"#usestyle","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useStyle"),e.createElement("p",null,"\u5411\u9875\u9762\u4E2D\u63D2\u5165\u4E00\u6BB5 Style \u4E3A\u9632\u6B62\u91CD\u590D\u63D2\u5165, id \u662F\u5FC5\u586B\u7684, \u4F1A\u5728 style \u6807\u7B7E\u4E0A\u6DFB\u52A0 id \u5C5E\u6027"),e.createElement("h3",{id:"\u6F14\u793A"},e.createElement(n.AnchorLink,{to:"#\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6F14\u793A")),e.createElement(i.default,o["usestyle-demo"].previewerProps,e.createElement(s,null)),e.createElement("div",{className:"markdown"},e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(n.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(a.Z,{code:`function useStyle(
  styleContent: string,
  id: string,
  options?: {
    removeOnDestroy?: boolean
  },
): () => void`,lang:"typescript"}),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(n.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(a.Z,{code:`const style = \`
.title {
  width: 200px;
  height: 20px;
}
\`

function MyComponent() {
  useStyle(style, 'styleUserTitle')
}`,lang:"javascript"}),e.createElement("p",null,"\u7EC4\u4EF6\u5378\u8F7D\u65F6\u5019\u81EA\u52A8\u79FB\u9664 style"),e.createElement(a.Z,{code:"useStyle(style, 'styleUserTitle', { removeOnDestroy: true })",lang:"javascript"}),e.createElement("p",null,"\u7EC4\u4EF6\u5378\u8F7D\u65F6\u5019\u624B\u52A8\u79FB\u9664 style"),e.createElement(a.Z,{code:`const removeStyle = useStyle(style, 'styleUserTitle')

const handleRemoveStyle = () => removeStyle()`,lang:"javascript"}))))});l.default=u=>{var o=e.useContext(n.context),s=o.demos;return e.useEffect(()=>{var r;u!=null&&(r=u.location)!==null&&r!==void 0&&r.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e.createElement(m,{demos:s})}}}]);
