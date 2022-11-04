(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[3197],{57190:function(d,o,n){"use strict";n.d(o,{m:function(){return e.m}});var e=n(11019),u=n(6929)},74992:function(d,o,n){"use strict";n.r(o);var e=n(62472),u=n(34019),c=n(81056),i=n(94834),l=e.memo(t=>{var r=t.demos,a=r["usehistoryref-demo"].component;return e.createElement(e.Fragment,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usehistoryref"},e.createElement(u.AnchorLink,{to:"#usehistoryref","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useHistoryRef"),e.createElement("p",null,"\u521B\u5EFA\u3001\u5B58\u50A8\u3001\u7BA1\u7406\u5386\u53F2\u3002\u5E76\u53EF\u8FDB\u884C undo\u3001redo \u7B49\u64CD\u4F5C\u3002\u8FD4\u56DE\u4E00\u4E2A ref \u5BF9\u8C61"),e.createElement("h3",{id:"\u6F14\u793A"},e.createElement(u.AnchorLink,{to:"#\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6F14\u793A")),e.createElement(c.default,r["usehistoryref-demo"].previewerProps,e.createElement(a,null)),e.createElement("div",{className:"markdown"},e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(u.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(i.Z,{code:`function MyComponent() {
  const { undo, redo, push, last, undoList, redoList, history } = useHistoryRef()
  return <div>...</div>
}`,lang:"javascript"}),e.createElement("p",null,"\u9ED8\u8BA4\u4F7F\u7528 JSON.stringify\u3001JSON.parse \u6765\u8FDB\u884C\u6570\u636E\u7684\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 dump\u3001parse \u53C2\u6570\u624B\u5DE5\u5904\u7406"),e.createElement(i.Z,{code:`function MyComponent() {
  const { undo, redo, push, last, undoList, redoList, history } = useHistoryRef({
    dump: (source) => source,
    parse: (value) => value,
  })
  return <div>...</div>
}`,lang:"javascript"}),e.createElement("h4",{id:"\u53D8\u5316\u65F6\u89E6\u53D1\u6E32\u67D3"},e.createElement(u.AnchorLink,{to:"#\u53D8\u5316\u65F6\u89E6\u53D1\u6E32\u67D3","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u53D8\u5316\u65F6\u89E6\u53D1\u6E32\u67D3"),e.createElement("p",null,"\u672C hook \u8FD4\u56DE\u503C\u5E76\u4E0D\u662F react \u7684 state\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u89E6\u53D1\u7EC4\u4EF6\u66F4\u65B0\u3002\u53EF\u4F7F\u7528 onUpdate \u53C2\u6570\u8FDB\u884C\u81EA\u5B9A\u4E49\u5904\u7406\u6216\u4F7F\u7528 useHistoryState"),e.createElement(i.Z,{code:`function MyComponent() {
  const [count, { inc }] = useCounter(0)
  const forceUpdate = useForceRender()
  const { undo, redo, push, last, undoList, redoList, history } = useHistoryRef({
    onUpdate: (nextState) => {
      // \u5386\u53F2\u53D1\u751F\u53D8\u5316\u6216\u89E6\u53D1undo\u7B49\u64CD\u4F5C\u65F6\uFF0C\u5F3A\u5236\u7EC4\u4EF6\u66F4\u65B0
      forceUpdate()
    },
  })

  useEffect(() => {
    // count\u53D8\u5316\u65F6\u5B58\u50A8\u5386\u53F2
    push(count)
  }, [count])

  return (
    <div>
      <p>inputValue: {count}</p>
      <button onClick={(e) => inc()}>inc</button>
      <button disabled={undoList.length < 1} onClick={undo}>
        undo {undoList.length}
      </button>
      <button disabled={redoList.length < 1} onClick={redo}>
        redo
      </button>
      <p>last: {JSON.stringify(last)}</p>
      <p>undoList: {JSON.stringify(undoList)}</p>
      <p>history: {JSON.stringify(history)}</p>
      <p>redoList: {JSON.stringify(redoList)}</p>
    </div>
  )
}`,lang:"javascript"}),e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(u.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(i.Z,{code:`function useHistoryRef<Raw, Serialized = Raw>(options?: {
  max?: number // \u6700\u591A\u4FDD\u5B58\u591A\u5C11\u6761\u6570\u636E\uFF0C\u9ED8\u8BA4\u4E0D\u9650\u5236
  dump?: (source: Raw) => Serialized // \u5E8F\u5217\u5316\u6570\u636E\u7684\u51FD\u6570
  parse?: <Raw>(value: Serialized) => Raw // \u53CD\u5E8F\u5217\u5316\u6570\u636E\u7684\u51FD\u6570
  onUpdate?: (value: Raw, dump: HistoryStock<Serialized>) => void // \u66F4\u65B0\u6570\u636E\u7684\u56DE\u8C03
}): {
  source: Raw // \u539F\u59CB\u6570\u636E
  history: HistoryStock<Serialized>[] // \u5386\u53F2\u8BB0\u5F55\u5217\u8868
  last: HistoryStock<Serialized> // \u6700\u540E\u4E00\u6761\u5386\u53F2\u8BB0\u5F55
  undoList: HistoryStock<Serialized>[] // \u5386\u53F2\u8BB0\u5F55\u5217\u8868\uFF0C\u540Chistory
  redoList: HistoryStock<Serialized>[] // \u91CD\u505A\u7684\u5386\u53F2\u8BB0\u5F55\u5217\u8868
  canUndo: boolean // \u662F\u5426\u53EF\u4EE5\u64A4\u9500
  canRedo: boolean // \u662F\u5426\u53EF\u4EE5\u91CD\u505A
  undo(): void // \u64A4\u9500
  redo(): void // \u91CD\u505A
  clear(): void // \u6E05\u7A7A\u5386\u53F2\u8BB0\u5F55
  push(newSource: Raw): void // \u521B\u5EFA\u4E00\u6761\u65B0\u5386\u53F2
  reset(): void // \u91CD\u7F6E\u5230\u6700\u8FD1\u7684\u8BB0\u5F55
  getHistory: HistoryStock<Serialized>[]
  getUndoList: HistoryStock<Serialized>[]
  getRedoList: HistoryStock<Serialized>[]
}`,lang:"typescript"}))))});o.default=t=>{var r=e.useContext(u.context),a=r.demos;return e.useEffect(()=>{var s;t!=null&&(s=t.location)!==null&&s!==void 0&&s.hash&&u.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e.createElement(l,{demos:a})}}}]);
