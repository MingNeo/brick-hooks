;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [6987],
  {
    50144: function (d, u, n) {
      'use strict'
      n.r(u)
      var e = n(67294),
        a = n(36445),
        c = n(91485),
        r = e.memo((t) => {
          var l = t.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'useupdateref' },
                e.createElement(
                  a.AnchorLink,
                  { to: '#useupdateref', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useUpdateRef',
              ),
              e.createElement(
                'p',
                null,
                '\u8FD4\u56DE\u4E00\u4E2Aref\uFF0Cref\u7684\u503C\u4E3Avalue\u7684\u6700\u65B0\u503C',
              ),
              e.createElement(c.Z, {
                code: `function MyComponent() {
  const valueRef = useUpdateRef(value)
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      u.default = (t) => {
        var l = e.useContext(a.context),
          s = l.demos
        return (
          e.useEffect(() => {
            var o
            t != null &&
              (o = t.location) !== null &&
              o !== void 0 &&
              o.hash &&
              a.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))
          }, []),
          e.createElement(r, { demos: s })
        )
      }
    },
  },
])
