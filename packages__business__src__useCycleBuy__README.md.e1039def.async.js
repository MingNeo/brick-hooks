(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[1977],{73602:function(s,u,n){"use strict";n.d(u,{m:function(){return e.m}});var e=n(67624),t=n(93142)},31592:function(s,u,n){"use strict";n.r(u);var e=n(67294),t=n(36445),d=n(72356),i=n(91485),r=e.memo(a=>{var l=a.demos,o=l["usecyclebuy-demo"].component;return e.createElement(e.Fragment,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h1",{id:"usecyclebuy"},e.createElement(t.AnchorLink,{to:"#usecyclebuy","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useCycleBuy"),e.createElement("p",null,"\u65E5\u671F\u5468\u671F/\u533A\u95F4\u9009\u62E9\uFF0C\u7528\u4E8E\u5468\u671F\u8D2D\u7B49\u573A\u666F"),e.createElement("h3",{id:"\u6F14\u793A"},e.createElement(t.AnchorLink,{to:"#\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6F14\u793A")),e.createElement(d.default,l["usecyclebuy-demo"].previewerProps,e.createElement(o,null)),e.createElement("div",{className:"markdown"},e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(i.Z,{code:`function Comp() {
  const {
    dates,
    setDates,
    model,
    models,
    cycles,
    range, // \u8FD4\u56DE\u4E00\u4E2A
    setRange,
    setModel,
    cycle,
    setCycle,
    checkDateDisable,
  } = useCycleBuy({ model: 'singleday', cycle: 'custom' })
  const onModelChange = (e) => {
    setModel(e.target.value)
  }
  const onCycleChange = (e) => {
    setCycle(e.target.value)
  }
  return (
    <>
      <div>
        <Radio.Group onChange={onModelChange} defaultValue={model}>
          {models.map((v) => (
            <Radio.Button key={v.key} value={v.value}>
              {v.name}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
      <div>
        {model !== 'singleday' && (
          <Radio.Group onChange={onCycleChange} defaultValue={cycle}>
            {cycles.map((v) => (
              <Radio.Button key={v.key} value={v.value}>
                {v.name}
              </Radio.Button>
            ))}
          </Radio.Group>
        )}
      </div>
      <div>{cycle === 'custom' && <RangePicker disabledDate={checkDateDisable} onChange={setRange} />}</div>
      result: {JSON.stringify(dates)}
    </>
  )
}`,lang:"javascript"}))))});u.default=a=>{var l=e.useContext(t.context),o=l.demos;return e.useEffect(()=>{var c;a!=null&&(c=a.location)!==null&&c!==void 0&&c.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),e.createElement(r,{demos:o})}}}]);
