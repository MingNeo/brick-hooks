;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [9171],
  {
    4567: function (F, a, t) {
      'use strict'
      t.r(a)
      var u = t(67294),
        n = t(36445),
        E = t(91485),
        r = u.memo((e) => {
          var l = e.demos
          return u.createElement(
            u.Fragment,
            null,
            u.createElement(
              'div',
              { className: 'markdown' },
              u.createElement(
                'h2',
                { id: 'usedeepcompare' },
                u.createElement(
                  n.AnchorLink,
                  { to: '#usedeepcompare', 'aria-hidden': 'true', tabIndex: -1 },
                  u.createElement('span', { className: 'icon icon-link' }),
                ),
                'useDeepCompare',
              ),
              u.createElement(
                'ul',
                null,
                u.createElement(
                  'li',
                  null,
                  '\u5728\u6BCF\u6B21\u66F4\u65B0\u65F6\u8FDB\u884C\u6DF1\u6BD4\u8F83\uFF0C\u5E76\u8FD4\u56DE\u65B0\u7684\u503C',
                ),
                u.createElement('li', null, '\u6DF1\u6BD4\u8F83\u6BD4\u8F83\u8017\u6027\u80FD\uFF0C\u614E\u7528'),
              ),
              u.createElement(
                'p',
                null,
                '\u4E00\u822C\u60C5\u51B5\u4E0B\u6570\u636E\u662F immutable \u7684\uFF0C\u5E76\u4E0D\u9700\u8981\u4F7F\u7528\u8FD9\u4E2A hook \u8FDB\u884C\u6DF1\u6BD4\u8F83\u3002 \u4E14\u8FD9\u4E2A hook \u4E0D\u4F1A\u76D1\u542C\u6570\u636E\uFF0C\u4EC5\u4EC5\u662F\u5728\u7EC4\u4EF6/hook render \u7684\u65F6\u5019\u8FDB\u884C\u6BD4\u8F83\u5E76\u8FD4\u56DE\u65B0\u503C',
              ),
              u.createElement(E.Z, {
                code: `function MyComponent(props) {
  const treeData = useDeepCompare(props.data)
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      a.default = (e) => {
        var l = u.useContext(n.context),
          c = l.demos
        return (
          u.useEffect(() => {
            var o
            e != null &&
              (o = e.location) !== null &&
              o !== void 0 &&
              o.hash &&
              n.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))
          }, []),
          u.createElement(r, { demos: c })
        )
      }
    },
  },
])
