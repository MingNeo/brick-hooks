;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [5554],
  {
    3166: function (i, a, u) {
      'use strict'
      u.r(a)
      var e = u(67294),
        n = u(36445),
        c = u(91485),
        l = e.memo((t) => {
          var d = t.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'usedidupdate' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#usedidupdate', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useDidUpdate',
              ),
              e.createElement(
                'p',
                null,
                '\u63D0\u4F9B\u4E00\u4E2A\u7C7B\u4F3C\u4E8E componentDidUpdate \u751F\u547D\u5468\u671F\u7684 hooks\uFF0C\u9996\u6B21\u4E0D\u6267\u884C\uFF0C\u4EC5\u66F4\u65B0\u65F6\u6267\u884C\u65B9\u6CD5',
              ),
              e.createElement(c.Z, {
                code: `function MyComponent() {
  useDidUpdate(() => {
    // ...
  }, [...deps])
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      a.default = (t) => {
        var d = e.useContext(n.context),
          s = d.demos
        return (
          e.useEffect(() => {
            var o
            t != null &&
              (o = t.location) !== null &&
              o !== void 0 &&
              o.hash &&
              n.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))
          }, []),
          e.createElement(l, { demos: s })
        )
      }
    },
  },
])
