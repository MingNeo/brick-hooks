;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [1101],
  {
    58393: function (d, a, t) {
      'use strict'
      t.r(a)
      var e = t(67294),
        o = t(36445),
        l = t(91485),
        c = e.memo((n) => {
          var r = n.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'uselogrender' },
                e.createElement(
                  o.AnchorLink,
                  { to: '#uselogrender', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useLogRender',
              ),
              e.createElement(
                'p',
                null,
                '\u8C03\u8BD5\u7528\uFF0C\u6253\u5370\u89E6\u53D1\u6E32\u67D3\u7684 state\u3002 \u751F\u4EA7\u73AF\u5883\u5E94\u8BE5\u7981\u7528',
              ),
              e.createElement(l.Z, {
                code: `function MyComponent(props) {
  useLogRender(props)
  // console: [render count]: 1 [why-update]: { a }
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      a.default = (n) => {
        var r = e.useContext(o.context),
          s = r.demos
        return (
          e.useEffect(() => {
            var u
            n != null &&
              (u = n.location) !== null &&
              u !== void 0 &&
              u.hash &&
              o.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))
          }, []),
          e.createElement(c, { demos: s })
        )
      }
    },
  },
])
