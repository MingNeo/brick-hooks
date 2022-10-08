;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [5948],
  {
    90334: function (i, o, a) {
      'use strict'
      a.r(o)
      var e = a(67294),
        t = a(36445),
        c = a(91485),
        r = e.memo((u) => {
          var l = u.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'usedarkmode' },
                e.createElement(
                  t.AnchorLink,
                  { to: '#usedarkmode', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useDarkMode',
              ),
              e.createElement('p', null, '\u65B9\u4FBF\u5207\u6362 DarkMode'),
              e.createElement(
                'h3',
                { id: '\u7C7B\u578B\u58F0\u660E' },
                e.createElement(
                  t.AnchorLink,
                  { to: '#\u7C7B\u578B\u58F0\u660E', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7C7B\u578B\u58F0\u660E',
              ),
              e.createElement(c.Z, {
                code: 'function useDarkMode({ className }?: { className?: string }): [boolean, (value: boolean) => void]',
                lang: 'typescript',
              }),
              e.createElement(
                'p',
                null,
                'js \u65E0\u6CD5\u81EA\u52A8\u76D1\u542C cookie \u6539\u53D8\uFF0C\u56E0\u6B64\uFF0CuseDarkMode \u8FD4\u56DE\u7684 cookie item \u503C\u4E0D\u4F1A\u81EA\u52A8\u66F4\u65B0\u3002\u53EF\u4EE5\u4F7F\u7528 refreshItem \u6765\u5237\u65B0\u4E3A cookie \u4E2D\u6700\u65B0\u503C\uFF0C\u6216\u4F7F\u7528 api.get \u65B9\u6CD5\u83B7\u53D6\u6700\u65B0\u503C',
              ),
              e.createElement(c.Z, {
                code: `const [isDark, toggleDark] = useDarkMode({ className: 'dark' })

toggleDark()`,
                lang: 'javascript',
              }),
            ),
          )
        })
      o.default = (u) => {
        var l = e.useContext(t.context),
          s = l.demos
        return (
          e.useEffect(() => {
            var n
            u != null &&
              (n = u.location) !== null &&
              n !== void 0 &&
              n.hash &&
              t.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))
          }, []),
          e.createElement(r, { demos: s })
        )
      }
    },
  },
])
