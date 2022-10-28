(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[3384],{73602:function(d,u,n){"use strict";n.d(u,{m:function(){return e.m}});var e=n(67624),t=n(93142)},74644:function(d,u,n){"use strict";n.r(u);var e=n(67294),t=n(36445),s=n(32295),i=n(91485),r=e.memo(c=>{var l=c.demos,o=l["uselistchecked-demo"].component;return e.createElement(e.Fragment,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"uselistchecked"},e.createElement(t.AnchorLink,{to:"#uselistchecked","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useListChecked"),e.createElement("p",null,"\u5BF9\u5217\u8868\u63D0\u4F9B\u5355\u9009\u3001\u591A\u9009\u80FD\u529B, \u5982\u8D2D\u7269\u8F66\u3001\u5E26 checkbox \u7684\u5217\u8868\u7B49"),e.createElement("h3",{id:"\u6F14\u793A"},e.createElement(t.AnchorLink,{to:"#\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6F14\u793A")),e.createElement(s.default,l["uselistchecked-demo"].previewerProps,e.createElement(o,null)),e.createElement("div",{className:"markdown"},e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(t.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(i.Z,{code:`interface Item extends Record<string, any> {
  id: string
}
function useListChecked(
  items?: Item[],
  defaultSelecteds?: string[],
): {
  isAllChecked: boolean
  checkedIds: string[]
  setChecked: (key: string, checked: boolean) => void
  toggleChecked: (key: string, checked?: boolean) => void
  toggleAllChecked: (checked?: boolean) => void
  clearChecked: () => void
  updateItems: (items: Item[]) => void
}`,lang:"typescript"}),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(i.Z,{code:`function Comp() {
  const { isAllChecked, checkedIds, toggleChecked, toggleAllChecked, clearChecked } = useListChecked([1, 2, 3], [1, 2])

  return (
    <div>
      <ul>
        <li>
          <Checkbox onClick={() => toggleChecked(id)} />
        </li>
      </ul>
      <button onClick={toggleAllChecked}>\u5168\u9009</button>
      <button onClick={clearChecked}>\u6E05\u7A7A</button>
    </div>
  )
}`,lang:"javascript"}))))});u.default=c=>{var l=e.useContext(t.context),o=l.demos;return e.useEffect(()=>{var a;c!=null&&(a=c.location)!==null&&a!==void 0&&a.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(c.location.hash.slice(1)))},[]),e.createElement(r,{demos:o})}}}]);
