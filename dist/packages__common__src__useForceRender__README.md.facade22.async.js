;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [2499],
  {
    55175: function (s, E, n) {
      'use strict'
      n.r(E)
      var u = n(67294),
        o = n(36445),
        c = n(91485),
        r = u.memo((e) => {
          var a = e.demos
          return u.createElement(
            u.Fragment,
            null,
            u.createElement(
              'div',
              { className: 'markdown' },
              u.createElement(
                'h2',
                { id: 'useforcerender' },
                u.createElement(
                  o.AnchorLink,
                  { to: '#useforcerender', 'aria-hidden': 'true', tabIndex: -1 },
                  u.createElement('span', { className: 'icon icon-link' }),
                ),
                'useForceRender',
              ),
              u.createElement(
                'p',
                null,
                '\u8FD9\u4E5F\u662F\u4E00\u4E2A\u975E\u5E38\u6709\u7528\u7684 hooks\uFF0C\u5C24\u5176\u662F\u4F60\u5728\u5C01\u88C5\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u65F6\u5019\u3002 \u6BD4\u5982\u4F60\u901A\u8FC7 pub/sub \u8BA2\u9605\u4E86\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u9700\u8981\u624B\u5DE5\u89E6\u53D1\u7EC4\u4EF6\u7684\u6E32\u67D3\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A hook',
              ),
              u.createElement(c.Z, {
                code: `function MyComponent() {
  const forceUpdate = useForceRender()
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      E.default = (e) => {
        var a = u.useContext(o.context),
          l = a.demos
        return (
          u.useEffect(() => {
            var t
            e != null &&
              (t = e.location) !== null &&
              t !== void 0 &&
              t.hash &&
              o.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))
          }, []),
          u.createElement(r, { demos: l })
        )
      }
    },
  },
])
