;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [1402],
  {
    58067: function (m, a, t) {
      'use strict'
      t.r(a)
      var e = t(67294),
        o = t(36445),
        s = t(91485),
        l = e.memo((n) => {
          var c = n.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'usefocusapp' },
                e.createElement(
                  o.AnchorLink,
                  { to: '#usefocusapp', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useFocusApp',
              ),
              e.createElement('p', null, '\u76D1\u542C app focus(\u4ECE\u540E\u53F0\u5207\u6362\u5230\u524D\u53F0)'),
              e.createElement(s.Z, {
                code: `useFocusApp(() => {
  // ...onFocus
})`,
                lang: 'javascript',
              }),
            ),
          )
        })
      a.default = (n) => {
        var c = e.useContext(o.context),
          r = c.demos
        return (
          e.useEffect(() => {
            var u
            n != null &&
              (u = n.location) !== null &&
              u !== void 0 &&
              u.hash &&
              o.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))
          }, []),
          e.createElement(l, { demos: r })
        )
      }
    },
  },
])
