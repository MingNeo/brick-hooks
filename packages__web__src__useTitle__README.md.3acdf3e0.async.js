;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [5330],
  {
    77782: function (r, l, n) {
      'use strict'
      n.r(l)
      var e = n(67294),
        o = n(36445),
        c = n(91485),
        s = e.memo((t) => {
          var a = t.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'usetitle' },
                e.createElement(
                  o.AnchorLink,
                  { to: '#usetitle', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useTitle',
              ),
              e.createElement(
                'p',
                null,
                '\u65B9\u4FBF\u8BBE\u7F6E\u9875\u9762title\uFF0C\u53D8\u5316\u65F6\u81EA\u52A8\u66F4\u65B0',
              ),
              e.createElement(c.Z, {
                code: `function Home(props){
  useTitle(props.title)
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      l.default = (t) => {
        var a = e.useContext(o.context),
          i = a.demos
        return (
          e.useEffect(() => {
            var u
            t != null &&
              (u = t.location) !== null &&
              u !== void 0 &&
              u.hash &&
              o.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))
          }, []),
          e.createElement(s, { demos: i })
        )
      }
    },
  },
])
