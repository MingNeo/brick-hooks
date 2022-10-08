;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [3788],
  {
    88892: function (d, c, n) {
      'use strict'
      n.r(c)
      var e = n(67294),
        a = n(36445),
        s = n(91485),
        l = e.memo((t) => {
          var u = t.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'usedebouncestate' },
                e.createElement(
                  a.AnchorLink,
                  { to: '#usedebouncestate', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useDebounceState',
              ),
              e.createElement('p', null, '\u521B\u5EFA\u4E00\u4E2A debounce \u7684 state'),
              e.createElement(s.Z, {
                code: 'const [state, setDebounceState] = useDebounceState(initialState, 200)',
                lang: 'javascript',
              }),
            ),
          )
        })
      c.default = (t) => {
        var u = e.useContext(a.context),
          r = u.demos
        return (
          e.useEffect(() => {
            var o
            t != null &&
              (o = t.location) !== null &&
              o !== void 0 &&
              o.hash &&
              a.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))
          }, []),
          e.createElement(l, { demos: r })
        )
      }
    },
  },
])
