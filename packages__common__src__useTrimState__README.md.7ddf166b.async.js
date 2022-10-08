;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [8100],
  {
    75514: function (c, s, n) {
      'use strict'
      n.r(s)
      var e = n(67294),
        u = n(36445),
        l = n(91485),
        r = e.memo((t) => {
          var o = t.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'usetrimvalue' },
                e.createElement(
                  u.AnchorLink,
                  { to: '#usetrimvalue', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useTrimValue',
              ),
              e.createElement(
                'p',
                null,
                '\u521B\u5EFA\u4E00\u4E2A\u5B57\u7B26\u4E32 state\uFF0C\u5E76\u5BF9\u5B57\u7B26\u4E32\u6570\u636E\u8FDB\u884C\u81EA\u52A8\u53BB\u6389\u7A7A\u683C\u7684\u5904\u7406',
              ),
              e.createElement(
                'h3',
                { id: '\u7C7B\u578B\u58F0\u660E' },
                e.createElement(
                  u.AnchorLink,
                  { to: '#\u7C7B\u578B\u58F0\u660E', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7C7B\u578B\u58F0\u660E',
              ),
              e.createElement(l.Z, {
                code: 'function useTrimValue(initialValue: string | undefined, fullTrim?: boolean): [string, setTrimState]',
                lang: 'typescript',
              }),
              e.createElement(
                'h3',
                { id: '\u7528\u6CD5' },
                e.createElement(
                  u.AnchorLink,
                  { to: '#\u7528\u6CD5', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7528\u6CD5',
              ),
              e.createElement(l.Z, {
                code: `function MyComponent(props) {
  // \u9ED8\u8BA4\u4EC5\u79FB\u9664\u9996\u5C3E\u7A7A\u683C
  const [value, setTrimValue] = useTrimValue(props.text) // ' ss ss ' => 'ss sss'
  // \u7B2C\u4E8C\u4E2A\u53C2\u6570\u63A7\u5236\u662F\u5426\u53BB\u9664\u5B57\u7B26\u4E32\u4E2D\u6240\u6709\u7684\u7A7A\u683C
  const [value, setTrimValue] = useTrimValue(props.text, true) // ' ss ss ' => 'sssss'
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      s.default = (t) => {
        var o = e.useContext(u.context),
          i = o.demos
        return (
          e.useEffect(() => {
            var a
            t != null &&
              (a = t.location) !== null &&
              a !== void 0 &&
              a.hash &&
              u.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))
          }, []),
          e.createElement(r, { demos: i })
        )
      }
    },
  },
])
