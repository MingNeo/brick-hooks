;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [3166],
  {
    53424: function (m, u, n) {
      'use strict'
      n.r(u)
      var e = n(67294),
        a = n(36445),
        c = n(91485),
        s = e.memo((t) => {
          var l = t.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'useappstate' },
                e.createElement(
                  a.AnchorLink,
                  { to: '#useappstate', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useAppState',
              ),
              e.createElement('p', null, '\u65B9\u4FBF\u76D1\u542C app \u524D\u540E\u53F0\u5207\u6362'),
              e.createElement(c.Z, {
                code: `useAppState((nextState, prevState) => {
  // ...
})`,
                lang: 'javascript',
              }),
            ),
          )
        })
      u.default = (t) => {
        var l = e.useContext(a.context),
          r = l.demos
        return (
          e.useEffect(() => {
            var o
            t != null &&
              (o = t.location) !== null &&
              o !== void 0 &&
              o.hash &&
              a.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))
          }, []),
          e.createElement(s, { demos: r })
        )
      }
    },
  },
])
