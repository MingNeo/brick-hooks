;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [1079],
  {
    23159: function (s, a, t) {
      'use strict'
      t.r(a)
      var e = t(67294),
        o = t(36445),
        c = e.memo((n) => {
          var l = n.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'useonline' },
                e.createElement(
                  o.AnchorLink,
                  { to: '#useonline', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useOnline',
              ),
              e.createElement('p', null, '\u65B9\u4FBF\u83B7\u53D6\u5F53\u524D\u662F\u5426\u5728\u7EBF\u72B6\u6001'),
            ),
          )
        })
      a.default = (n) => {
        var l = e.useContext(o.context),
          r = l.demos
        return (
          e.useEffect(() => {
            var u
            n != null &&
              (u = n.location) !== null &&
              u !== void 0 &&
              u.hash &&
              o.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))
          }, []),
          e.createElement(c, { demos: r })
        )
      }
    },
  },
])
