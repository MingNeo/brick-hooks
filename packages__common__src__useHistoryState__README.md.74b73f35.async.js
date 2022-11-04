(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[4632],{16754:function(l,a,o){"use strict";o.r(a);var e=o(62472),t=o(34019),u=o(94834),s=e.memo(n=>{var r=n.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usehistorystate"},e.createElement(t.AnchorLink,{to:"#usehistorystate","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useHistoryState"),e.createElement("p",null,"\u521B\u5EFA\u3001\u5B58\u50A8\u3001\u7BA1\u7406\u5386\u53F2\u3002\u5E76\u53EF\u8FDB\u884C undo\u3001redo \u7B49\u64CD\u4F5C\u3002"),e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(t.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(u.Z,{code:`function useHistoryState<Raw, Serialized = Raw>(options?: {
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
}`,lang:"typescript"}),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(u.Z,{code:`function MyComponent() {
  const { undo, redo, push, last, undoList, redoList, history } = useHistoryState()
  return (
    <div>
      <button onClick={(e) => push(Date.now())}>inc</button>
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
}`,lang:"javascript"}),e.createElement("p",null,"\u9ED8\u8BA4\u4F7F\u7528 JSON.stringify\u3001JSON.parse \u6765\u8FDB\u884C\u6570\u636E\u7684\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 dump\u3001parse \u53C2\u6570\u624B\u5DE5\u5904\u7406"),e.createElement(u.Z,{code:`function MyComponent() {
  const { undo, redo, push, last, undoList, redoList, history } = useHistoryState({
    dump: (source) => source,
    parse: (value) => value,
  })
  return <div>...</div>
}`,lang:"javascript"})))});a.default=n=>{var r=e.useContext(t.context),d=r.demos;return e.useEffect(()=>{var i;n!=null&&(i=n.location)!==null&&i!==void 0&&i.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))},[]),e.createElement(s,{demos:d})}}}]);
