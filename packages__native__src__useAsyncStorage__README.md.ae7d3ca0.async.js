(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[4176],{51243:function(i,s,a){"use strict";a.r(s);var e=a(67294),n=a(36445),c=a(91485),r=e.memo(t=>{var o=t.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"useasyncstorage"},e.createElement(n.AnchorLink,{to:"#useasyncstorage","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useAsyncStorage"),e.createElement("p",null,"\u65B9\u4FBF\u4F7F\u7528 react-native \u7684 AsyncStorage\uFF0C\u53EF\u4EE5\u76F4\u63A5\u66F4\u65B0 obj\u3001\u6570\u7EC4\u7B49\u683C\u5F0F\uFF0C\u8FD9\u4E2A hook \u4F1A\u81EA\u52A8\u8F6C\u5316\u4E3A string \u5E76\u5B58\u50A8"),e.createElement(c.Z,{code:`const { getValue, setValue, clear } = useAsyncStorage('user')

const userCacheValue = await getValue()
const setUserCacheValue = await setValue({ id: 1, name: 'klose' })

// \u4E5F\u53EF\u4EE5\u589E\u52A0\u4E00\u4E2A\u76D1\u542C\u51FD\u6570\uFF0C\u5F53\u4F7F\u7528useAsyncStorage\u7684setValue\u3001clear\u66F4\u65B0storage\u6570\u636E\u65F6\uFF0C\u89E6\u53D1\u56DE\u8C03
// \u5982\u5C06storage\u7684\u503C\u7ED1\u5B9A\u5230\u4E00\u4E2Astate\uFF0Cstorage\u53D8\u5316\u65F6\u89E6\u53D1\u7EC4\u4EF6\u6E32\u67D3
const [cacheUser, setCacheUser] = useState()
useAsyncStorage('user', (newUserCacheValue) => {
  // ...
  setCacheUser(newUserCacheValue)
})`,lang:"javascript"})))});s.default=t=>{var o=e.useContext(n.context),l=o.demos;return e.useEffect(()=>{var u;t!=null&&(u=t.location)!==null&&u!==void 0&&u.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e.createElement(r,{demos:l})}}}]);
