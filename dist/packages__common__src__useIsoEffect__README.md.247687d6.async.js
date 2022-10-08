;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [3251],
  {
    29309: function (i, c, a) {
      'use strict'
      a.r(c)
      var e = a(67294),
        n = a(36445),
        o = a(91485),
        l = e.memo((t) => {
          var s = t.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'useisoeffect' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#useisoeffect', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useIsoEffect',
              ),
              e.createElement(
                'p',
                null,
                '\u66FF\u6362 useLayoutEffect\uFF0C\u4EE5\u517C\u5BB9 ssr\uFF0C\u5728 server \u7AEF\u81EA\u52A8\u4F7F\u7528 useEffect',
              ),
              e.createElement(
                'h3',
                { id: '\u7C7B\u578B\u58F0\u660E' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#\u7C7B\u578B\u58F0\u660E', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7C7B\u578B\u58F0\u660E',
              ),
              e.createElement(o.Z, {
                code: '(effect: React.EffectCallback, deps?: React.DependencyList) => void',
                lang: 'typescript',
              }),
              e.createElement(
                'h3',
                { id: '\u7528\u6CD5' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#\u7528\u6CD5', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7528\u6CD5',
              ),
              e.createElement(o.Z, {
                code: `function MyComponent() {
  useIsoEffect(() => {
    // ...
  }, [])
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      c.default = (t) => {
        var s = e.useContext(n.context),
          r = s.demos
        return (
          e.useEffect(() => {
            var u
            t != null &&
              (u = t.location) !== null &&
              u !== void 0 &&
              u.hash &&
              n.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))
          }, []),
          e.createElement(l, { demos: r })
        )
      }
    },
  },
])
