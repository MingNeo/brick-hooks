(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[8238],{29991:function(l,i,n){"use strict";n.r(i);var e=n(67294),a=n(36445),s=n(91485),r=e.memo(t=>{var c=t.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usenavigationstate"},e.createElement(a.AnchorLink,{to:"#usenavigationstate","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useNavigationState"),e.createElement("p",null,"\u83B7\u53D6\u5F53\u524D navigation.state"),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(a.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(s.Z,{code:`import { useEffect } from 'react'
import useNavigationState from 'brick-hooks-react-navigation4'

function myComp() {
  const state = useNavigationState()
}

// or
function myComp(navigation) {
  // \u53EF\u4EE5\u4F20\u9012\u4E00\u4E2A\u9ED8\u8BA4\u7684navigation\uFF0C\u5F53\u901A\u8FC7NavigationContext\u83B7\u53D6\u4E0D\u5230navigation\u65F6\u4F1A\u4F7F\u7528
  const state = useNavigationState(navigation)
}`,lang:"javascript"})))});i.default=t=>{var c=e.useContext(a.context),u=c.demos;return e.useEffect(()=>{var o;t!=null&&(o=t.location)!==null&&o!==void 0&&o.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e.createElement(r,{demos:u})}}}]);
