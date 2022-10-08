;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [9911],
  {
    90245: function (d, a, u) {
      'use strict'
      u.r(a)
      var e = u(67294),
        n = u(36445),
        l = u(91485),
        s = e.memo((t) => {
          var c = t.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'usedebounceeffect' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#usedebounceeffect', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useDebounceEffect',
              ),
              e.createElement(
                'p',
                null,
                '\u63D0\u4F9B\u4E00\u4E2A\u9632\u6296\u7684 effect\uFF0C\u5F53 dep \u53D8\u5316\u65F6\u8FDB\u884C\u9632\u6296\u5904\u7406\uFF0C\u800C\u975E\u6BCF\u6B21\u90FD\u89E6\u53D1',
              ),
              e.createElement(l.Z, {
                code: `useDebounceEffect(
  () => {
    setResultData(state)
  },
  200,
  [state]
)`,
                lang: 'javascript',
              }),
            ),
          )
        })
      a.default = (t) => {
        var c = e.useContext(n.context),
          r = c.demos
        return (
          e.useEffect(() => {
            var o
            t != null &&
              (o = t.location) !== null &&
              o !== void 0 &&
              o.hash &&
              n.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))
          }, []),
          e.createElement(s, { demos: r })
        )
      }
    },
  },
])
