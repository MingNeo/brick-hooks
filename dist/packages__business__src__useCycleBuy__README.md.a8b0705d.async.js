;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [1977],
  {
    31592: function (i, l, a) {
      'use strict'
      a.r(l)
      var e = a(67294),
        t = a(36445),
        c = a(91485),
        s = e.memo((n) => {
          var u = n.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h1',
                { id: 'usecyclebuy' },
                e.createElement(
                  t.AnchorLink,
                  { to: '#usecyclebuy', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useCycleBuy',
              ),
              e.createElement(
                'p',
                null,
                '\u65E5\u671F\u5468\u671F/\u533A\u95F4\u9009\u62E9\uFF0C\u7528\u4E8E\u5468\u671F\u8D2D\u7B49\u573A\u666F',
              ),
              e.createElement(c.Z, {
                code: `function Comp() {
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
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      l.default = (n) => {
        var u = e.useContext(t.context),
          d = u.demos
        return (
          e.useEffect(() => {
            var o
            n != null &&
              (o = n.location) !== null &&
              o !== void 0 &&
              o.hash &&
              t.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))
          }, []),
          e.createElement(s, { demos: d })
        )
      }
    },
  },
])
