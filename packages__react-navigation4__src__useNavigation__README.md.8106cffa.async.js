(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[5624],{47179:function(l,i,t){"use strict";t.r(i);var n=t(62472),a=t(34019),r=t(94834),u=n.memo(e=>{var c=e.demos;return n.createElement(n.Fragment,null,n.createElement("div",{className:"markdown"},n.createElement("h2",{id:"usenavigation"},n.createElement(a.AnchorLink,{to:"#usenavigation","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"useNavigation"),n.createElement("p",null,"\u83B7\u53D6\u5F53\u524D navigation"),n.createElement("h3",{id:"\u7528\u6CD5"},n.createElement(a.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),n.createElement(r.Z,{code:`import { useEffect } from 'react'
import useNavigation from 'brick-hooks-react-navigation4'

function myComp() {
  const navigation = useNavigation()
}

// or
function myComp(navigation) {
  // \u53EF\u4EE5\u4F20\u9012\u4E00\u4E2A\u9ED8\u8BA4\u7684navigation\uFF0C\u5F53\u901A\u8FC7NavigationContext\u83B7\u53D6\u4E0D\u5230navigation\u65F6\u4F1A\u4F7F\u7528
  const nav = useNavigation(navigation)
}`,lang:"javascript"})))});i.default=e=>{var c=n.useContext(a.context),s=c.demos;return n.useEffect(()=>{var o;e!=null&&(o=e.location)!==null&&o!==void 0&&o.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))},[]),n.createElement(u,{demos:s})}}}]);
