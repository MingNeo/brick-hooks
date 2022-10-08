(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[8009],{91799:function(h,c,u){"use strict";u.r(c);var e=u(67294),t=u(36445),a=u(91485),r=e.memo(n=>{var l=n.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"useinput"},e.createElement(t.AnchorLink,{to:"#useinput","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useInput"),e.createElement("p",null,"\u7528\u4E8E\u666E\u901A input\u3002\u6709\u4E9B input \u4F60\u6CA1\u6709\u653E\u5728\u8868\u5355\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A hook \u8FDB\u884C\u65B9\u4FBF\u5904\u7406"),e.createElement(a.Z,{code:`function MyComponent() {
  let { value, onChange } = useInput('xxx');
  return <input value={value} onChange={onChange} />;
}
  // \u7B49\u540C\u4E8E
function MyComponent() {
  const [value, setValue] = useState('xxx')
  const onChange = useCallback((e) => {
    setValue(event.currentTarget.value)
  }, [])
  return <input value={value} onChange={onChange} />;
}`,lang:"javascript"}),e.createElement("p",null,"\u81EA\u5B9A\u4E49valueKey,\u5982checkbox\u53D6\u503C\u4E3Aevent.currentTarget.checked \u800C\u975Eevent.currentTarget.value"),e.createElement(a.Z,{code:`function MyComponent() {
  const {value, onChange} = useInput(false, 'checked');
  return <input type="checkbox" checked={value} onChange={onChange} />;
}`,lang:"javascript"}),e.createElement("p",null,"\u81EA\u5B9A\u4E49onChange"),e.createElement(a.Z,{code:`// \u81EA\u5B9A\u4E49onChange
function MyComponent() {
  const {value, onChange} = useInput(false, (val, event) => { ... });
  return <input value={value} onChange={onChange} />;
}
function MyComponent() {
  const {value, onChange} = useInput(false, 'checked',  (val, event) => { ... });
  return <input type="checkbox" checked={value} onChange={onChange} />;
}`,lang:"javascript"})))});c.default=n=>{var l=e.useContext(t.context),s=l.demos;return e.useEffect(()=>{var o;n!=null&&(o=n.location)!==null&&o!==void 0&&o.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))},[]),e.createElement(r,{demos:s})}}}]);
