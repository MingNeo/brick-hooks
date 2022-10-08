(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[4302],{44702:function(l,i,n){"use strict";n.r(i);var e=n(67294),o=n(36445),a=n(91485),r=e.memo(u=>{var s=u.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usecookie"},e.createElement(o.AnchorLink,{to:"#usecookie","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useCookie"),e.createElement("p",null,"\u65B9\u4FBF\u4F7F\u7528 cookie"),e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(o.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(a.Z,{code:`function useCookie(key: string): [
  string,
  SetItem,
  {
    get: () => string
    refresh: () => void
  },
]

const SetItem: (
  name: string,
  value: string | number | boolean,
  options: {
    days: any
    path: any
  },
) => Promise<unknown>`,lang:"typescript"}),e.createElement("p",null,"js \u65E0\u6CD5\u81EA\u52A8\u76D1\u542C cookie \u6539\u53D8\uFF0C\u56E0\u6B64\uFF0CuseCookie \u8FD4\u56DE\u7684 cookie item \u503C\u4E0D\u4F1A\u81EA\u52A8\u66F4\u65B0\u3002\u53EF\u4EE5\u4F7F\u7528 refreshItem \u6765\u5237\u65B0\u4E3A cookie \u4E2D\u6700\u65B0\u503C\uFF0C\u6216\u4F7F\u7528 api.get \u65B9\u6CD5\u83B7\u53D6\u6700\u65B0\u503C"),e.createElement(a.Z,{code:`const [userCookie, updateUserCookie, userCookieAPi] = useCookie('userName')

// \u8BBE\u7F6E\u503C
await updateUserCookie('klose')
// \u83B7\u53D6\u6700\u65B0
userCookieAPi.get()
// \u5237\u65B0userCookie\u6570\u636E
userCookieAPi.refresh()
// \u5220\u9664userCookie\u6570\u636E
userCookieAPi.delete()`,lang:"javascript"})))});i.default=u=>{var s=e.useContext(o.context),c=s.demos;return e.useEffect(()=>{var t;u!=null&&(t=u.location)!==null&&t!==void 0&&t.hash&&o.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e.createElement(r,{demos:c})}}}]);
