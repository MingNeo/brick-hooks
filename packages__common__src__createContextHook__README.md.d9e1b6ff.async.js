(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[2990],{98656:function(E,r,t){"use strict";t.r(r);var u=t(67294),s=t(36445),a=t(91485),o=u.memo(e=>{var d=e.demos;return u.createElement(u.Fragment,null,u.createElement("div",{className:"markdown"},u.createElement("h2",{id:"createcontexthook"},u.createElement(s.AnchorLink,{to:"#createcontexthook","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"createContextHook"),u.createElement("p",null,"\u8FD9\u4E0D\u662F\u4E00\u4E2A React Hook\uFF0C\u800C\u662F\u4E00\u4E2A\u5DE5\u5382\u51FD\u6570\uFF0C\u4F5C\u7528\u662F\u5BF9\u81EA\u5B9A\u4E49 hooks \u81EA\u52A8\u8FDB\u884C React.context \u5305\u88F9\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u8FDB\u884C\u72B6\u6001\u7684\u5171\u4EAB \u751A\u81F3\u53EF\u4EE5\u4E0D\u4F7F\u7528\u5168\u5C40\u72B6\u6001\u7BA1\u7406\u5E93\uFF0C\u4EC5\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u6765\u7BA1\u7406\u72B6\u6001 \u53EF\u7528\u4E8E\u66FF\u4EE3\u624B\u5DE5\u4F7F\u7528 React context\u3001unstated-next \u7B49"),u.createElement(a.Z,{code:`function useAddressContainer({ addressList }) {
  const [xxx, setXXX] = useStore('address')
  const [addressState, setAddressState, { setDefault, deleteAddress }] = useObjectState({
    addressList,
  }, addressMethods)
  return { addressState, setDefault, deleteAddress }
}

const { Provider, useHook: useAddress } = createContextHook(useAddressContainer)

function AddressParent() {
  const initialState = {
    addressList: [],
  }
  return <Provider {...initialState}>{children}</Provider>
}

function AddressList() {
  const { addressState } = useAddress()
}

function AddressItem(props) {
  const { setDefault, deleteAddress } = useAddress()
}`,lang:"javascript"}),u.createElement("h4",{id:"\u901A\u8FC7-getter-\u5206\u53D1-hooks"},u.createElement(s.AnchorLink,{to:"#\u901A\u8FC7-getter-\u5206\u53D1-hooks","aria-hidden":"true",tabIndex:-1},u.createElement("span",{className:"icon icon-link"})),"\u901A\u8FC7 getter \u5206\u53D1 hooks"),u.createElement("p",null,"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F7F\u7528 useHook \u5C06\u8FD4\u56DE\u6240\u6709\u7684\u6570\u636E \u901A\u5E38\u53EF\u4EE5\u518D\u81EA\u5DF1\u505A\u4E00\u4E2A\u81EA\u5B9A\u4E49 Hooks \u6765\u7EC6\u5316\u4F7F\u7528\uFF0CcreateContextHook \u4F7F\u7528 getter \u7B80\u5316\u4E86\u8FD9\u4E00\u8FC7\u7A0B\u3002"),u.createElement("p",null,"\u9700\u8981\u8FD4\u56DE\u67D0\u4E2A\u503C\uFF0C\u5C31\u5728 getter \u4E2D\u76F4\u63A5\u8FD4\u56DE\u5C31\u53EF\u4EE5\u3002 \u5982\u679C\u9700\u8981\u81EA\u884C\u7EC4\u88C5\u6210\u7B80\u5316\u7684\u683C\u5F0F\uFF0C\u5982\u539F\u59CB result \u4E3A","{"," a, b, c, setState ","}","\uFF0C\u60F3\u8981\u81EA\u884C\u7EC4\u88C5\u6210[a, setState] \u6216 ","{"," a, setState ","}","\u7684\u683C\u5F0F \u5219\u9700\u8981\u7528\u5230\u81EA\u5B9A\u4E49\u51FD\u6570 wrapperState \u5305\u88F9\u8FD4\u56DE\u503C\u3002 \u5305\u88F9\u540E\u4F1A\u5BF9 obj/array \u7684\u6240\u6709\u5B50\u6570\u636E\u4E0E\u5386\u53F2\u6570\u636E\u8FDB\u884C\u6D45\u6BD4\u8F83\u3002\u5982\u679C prev !== current\uFF0C\u4F46\u662F\u6240\u6709\u7684\u5B50\u8282\u70B9\u90FD\u76F8\u7B49\uFF0C\u5219\u4F1A\u5224\u5B9A\u4E3A\u76F8\u7B49\u3002"),u.createElement("p",null,"\u6CE8\u610F\uFF0C\u76F4\u63A5\u8FD4\u56DE\u6570\u636E\uFF0C\u6216\u6570\u636E\u672C\u8EAB\u662F obj/array \u683C\u5F0F\u4E0D\u9700\u8981\u8FDB\u884C\u5305\u88F9\u5904\u7406\u3002\u4EC5\u5F53\u4F60\u81EA\u884C\u88C5\u914D\u6570\u636E\u6216\u9700\u8981\u5BF9obj\u3001array\u7684\u6240\u6709\u5C5E\u6027\u8FDB\u884C\u6D45\u6BD4\u8F83\u65F6\u4F7F\u7528"),u.createElement(a.Z,{code:`function useAddressContainer({ addressList }) {
  const [xxx, setXXX] = useStore('address')
  const [addressState, setAddressState, { setDefault, deleteAddress }] = useObjectState({
    addressList,
  })
  return { addressState, setAddressState, setDefault, deleteAddress }
}

const { Provider, useHook: useAddress } = createContextHook(useAddressContainer, {
  useAddressList: (result) => result.addressState.addressList,
  useAddressState: (result, { wrapperState }) => wrapperState([result.addressState, result.setAddressState]),
  useAddressController: (result, { wrapperState }) =>
    wrapperState({ setDefault: result.setDefault, deleteAddress: result.deleteAddress }),
})

function AddressParent() {
  const initialState = {
    addressList: [],
  }
  return <Provider {...initialState}>{children}</Provider>
}

function AddressList() {
  const addressList = useAddressList()
}`,lang:"javascript"})))});r.default=e=>{var d=u.useContext(s.context),F=d.demos;return u.useEffect(()=>{var n;e!=null&&(n=e.location)!==null&&n!==void 0&&n.hash&&s.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))},[]),u.createElement(o,{demos:F})}}}]);
