;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [1184],
  {
    63225: function (m, u, n) {
      'use strict'
      n.r(u)
      var e = n(67294),
        s = n(36445),
        a = n(91485),
        c = e.memo((t) => {
          var r = t.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'usetrim' },
                e.createElement(
                  s.AnchorLink,
                  { to: '#usetrim', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useTrim',
              ),
              e.createElement(
                'p',
                null,
                '\u5BF9\u5B57\u7B26\u4E32\u6570\u636E\u8FDB\u884C\u81EA\u52A8\u53BB\u6389\u7A7A\u683C\u7684\u5904\u7406',
              ),
              e.createElement(a.Z, {
                code: `function MyComponent(props) {
  // \u9ED8\u8BA4\u4EC5\u79FB\u9664\u9996\u5C3E\u7A7A\u683C
  const trimedText = useTrim(props.text) // ' ss ss ' => 'ss sss'
  const trimedText = useTrim(props.text, true) // ' ss ss ' => 'sssss'
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      u.default = (t) => {
        var r = e.useContext(s.context),
          l = r.demos
        return (
          e.useEffect(() => {
            var o
            t != null &&
              (o = t.location) !== null &&
              o !== void 0 &&
              o.hash &&
              s.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))
          }, []),
          e.createElement(c, { demos: l })
        )
      }
    },
  },
])
