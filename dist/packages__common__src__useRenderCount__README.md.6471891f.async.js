;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [703],
  {
    4050: function (d, u, t) {
      'use strict'
      t.r(u)
      var e = t(67294),
        o = t(36445),
        c = t(91485),
        l = e.memo((n) => {
          var a = n.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'userendercount' },
                e.createElement(
                  o.AnchorLink,
                  { to: '#userendercount', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useRenderCount',
              ),
              e.createElement('p', null, '\u6E32\u67D3\u6B21\u6570'),
              e.createElement(c.Z, {
                code: `function MyComponent() {
  const renderCount = useRenderCount()

  useEffect(() => {
    console.log('renderCount', renderCount)
  })
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      u.default = (n) => {
        var a = e.useContext(o.context),
          s = a.demos
        return (
          e.useEffect(() => {
            var r
            n != null &&
              (r = n.location) !== null &&
              r !== void 0 &&
              r.hash &&
              o.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))
          }, []),
          e.createElement(l, { demos: s })
        )
      }
    },
  },
])
