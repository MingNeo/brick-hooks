;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [8142],
  {
    84825: function (i, a, t) {
      'use strict'
      t.r(a)
      var e = t(67294),
        o = t(36445),
        l = t(91485),
        s = e.memo((n) => {
          var c = n.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'usedidmount' },
                e.createElement(
                  o.AnchorLink,
                  { to: '#usedidmount', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useDidMount',
              ),
              e.createElement(
                'p',
                null,
                '\u63D0\u4F9B\u4E00\u4E2A\u7C7B\u4F3C\u4E8E class\u7EC4\u4EF6 \u751F\u547D\u5468\u671F\u7684 hooks',
              ),
              e.createElement(l.Z, {
                code: `function MyComponent() {
  useDidMount(() => {
    // ...
  })
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      a.default = (n) => {
        var c = e.useContext(o.context),
          d = c.demos
        return (
          e.useEffect(() => {
            var u
            n != null &&
              (u = n.location) !== null &&
              u !== void 0 &&
              u.hash &&
              o.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))
          }, []),
          e.createElement(s, { demos: d })
        )
      }
    },
  },
])
