(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[3772],{67915:function(i,r,t){"use strict";t.r(r);var e=t(67294),a=t(36445),o=t(91485),u=e.memo(n=>{var c=n.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usestorage"},e.createElement(a.AnchorLink,{to:"#usestorage","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useStorage"),e.createElement("p",null,"\u65B9\u4FBF\u4F7F\u7528 localStorage \u548C sessionStorage"),e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(a.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(o.Z,{code:`function useStorage(
  itemName: string,
  initialValue?: any,
  {
    watchStorageChange,
    storageType,
  }?: {
    watchStorageChange?: boolean
    storageType?: string
  },
): [
  any,
  (value?: string | number | Record<string, any> | any[]) => void,
  {
    clear: () => void
  },
]`,lang:"typescript"}),e.createElement(o.Z,{code:`// localStorage
const [cacheUserInfo, setCacheUserInfo, { clear }] = useStorage('user', {})
// sessionStorage
const [cacheUserInfo, setCacheUserInfo, { clear }] = useStorage('user', {}, { storageType: 'sessionStorage' })
// watchStorageChange \u4E3Atrue\u65F6\uFF0C\u76D1\u542Cstorage\u4E8B\u4EF6\uFF0C\u5373\u4F7F\u5728\u5176\u4ED6\u7EC4\u4EF6\u4E2D\u901A\u8FC7\u539F\u751F\u7B49\u65B9\u5F0F\u66F4\u65B0storage\uFF0C\u4E5F\u4F1A\u89E6\u53D1\u5F53\u524D\u72B6\u6001\u66F4\u65B0\u53CA\u7EC4\u4EF6rerender
const [cacheUserInfo, setCacheUserInfo, { clear }] = useStorage('user', {}, { watchStorageChange: true })

setCacheUserInfo({ userName: 'klose' })`,lang:"javascript"}),e.createElement("h3",{id:"uselocalstorage--usesessionstorage"},e.createElement(a.AnchorLink,{to:"#uselocalstorage--usesessionstorage","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useLocalStorage & useSessionStorage"),e.createElement("p",null,"\u5BF9 useStorage \u8FDB\u884C\u7B80\u5355\u5C01\u88C5\uFF0C\u65E0\u9700\u624B\u5DE5\u914D\u7F6E storageType"),e.createElement(o.Z,{code:"const [cacheUserInfo, setCacheUserInfo, { clear }] = useSessionStorage('user', {})",lang:"javascript"})))});r.default=n=>{var c=e.useContext(a.context),l=c.demos;return e.useEffect(()=>{var s;n!=null&&(s=n.location)!==null&&s!==void 0&&s.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))},[]),e.createElement(u,{demos:l})}}}]);
