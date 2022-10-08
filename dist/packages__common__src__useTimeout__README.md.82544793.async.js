;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [3299],
  {
    1010: function (i, u, n) {
      'use strict'
      n.r(u)
      var e = n(67294),
        o = n(36445),
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
                { id: 'usetimeout' },
                e.createElement(
                  o.AnchorLink,
                  { to: '#usetimeout', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useTimeout',
              ),
              e.createElement('p', null, '\u65B9\u4FBF\u4F7F\u7528 setTimeout'),
              e.createElement(c.Z, {
                code: `useTimeout(() => {
  // ...
}, 200)`,
                lang: 'javascript',
              }),
            ),
          )
        })
      u.default = (t) => {
        var l = e.useContext(o.context),
          m = l.demos
        return (
          e.useEffect(() => {
            var a
            t != null &&
              (a = t.location) !== null &&
              a !== void 0 &&
              a.hash &&
              o.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))
          }, []),
          e.createElement(s, { demos: m })
        )
      }
    },
  },
])
