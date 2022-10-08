;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [5942],
  {
    9095: function (s, a, t) {
      'use strict'
      t.r(a)
      var e = t(67294),
        n = t(36445),
        i = t(91485),
        c = e.memo((u) => {
          var l = u.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h1',
                { id: 'usetimeoutfn' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#usetimeoutfn', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useTimeoutFn',
              ),
              e.createElement('p', null, '\u4F18\u96C5\u4F7F\u7528 setTimeout \u51FD\u6570\u7684 hook'),
              e.createElement(
                'ul',
                null,
                e.createElement('li', null, '\u7EC4\u4EF6\u5378\u8F7D\u7684\u65F6\u5019\u81EA\u52A8 clearTimeout'),
                e.createElement(
                  'li',
                  null,
                  '\u8FD4\u56DE\u4E00\u4E2A promise\uFF0CsetTimeout \u6267\u884C\u5B8C\u6BD5\u53EF\u4EE5\u7EE7\u7EED\u5904\u7406',
                ),
                e.createElement('li', null, '\u8FD4\u56DE\u662F\u5426\u6B63\u5728\u7B49\u5F85\u6267\u884C isPending'),
                e.createElement('li', null, '\u5141\u8BB8\u624B\u5DE5\u8C03\u7528 stop \u7ED3\u675F\u7B49\u5F85'),
              ),
              e.createElement(
                'h2',
                { id: '\u7528\u6CD5' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#\u7528\u6CD5', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7528\u6CD5 ',
                e.createElement('a', { name: 'usage' }),
              ),
              e.createElement(i.Z, {
                code: `const [value, { inc }] = useCounter(0)
const [startTimeout, { isPending, stop }] = useTimeoutFn(inc, 100)

startTimeout()

// \u8FD4\u56DE\u4E00\u4E2Apromise\uFF0CsetTimeout\u6267\u884C\u5B8C\u6BD5\u53EF\u4EE5\u7EE7\u7EED\u5904\u7406
startTimeout().then(() => {
  /* ... */
})
// or
await startTimeout()`,
                lang: 'javascript',
              }),
            ),
          )
        })
      a.default = (u) => {
        var l = e.useContext(n.context),
          m = l.demos
        return (
          e.useEffect(() => {
            var o
            u != null &&
              (o = u.location) !== null &&
              o !== void 0 &&
              o.hash &&
              n.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))
          }, []),
          e.createElement(c, { demos: m })
        )
      }
    },
  },
])
