;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [6935],
  {
    9597: function (i, c, o) {
      'use strict'
      o.r(c)
      var e = o(67294),
        t = o(36445),
        u = e.memo((n) => {
          var l = n.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h1',
                { id: 'brick-hooks' },
                e.createElement(
                  t.AnchorLink,
                  { to: '#brick-hooks', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'brick-hooks',
              ),
              e.createElement(
                'h2',
                { id: 'about' },
                e.createElement(
                  t.AnchorLink,
                  { to: '#about', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'About ',
                e.createElement('a', { name: 'about' }),
              ),
              e.createElement('p', null, '\u81EA\u5B9A\u4E49 hooks \u96C6\u5408\uFF0C\u5305\u542B'),
              e.createElement(
                'ul',
                null,
                e.createElement(
                  'li',
                  null,
                  '\u5168\u5C40\u72B6\u6001\u7BA1\u7406 ',
                  e.createElement(t.Link, { to: 'packages/store-next/README' }, 'hydrogen-store'),
                ),
                e.createElement(
                  'li',
                  null,
                  '\u901A\u7528 hooks ',
                  e.createElement(t.Link, { to: 'packages/common/README' }, 'brick-hooks'),
                ),
                e.createElement(
                  'li',
                  null,
                  '\u4EC5\u9002\u7528 web \u7684 hooks ',
                  e.createElement(t.Link, { to: 'packages/web/README' }, 'brick-hooks-web'),
                ),
                e.createElement(
                  'li',
                  null,
                  '\u4EC5\u9002\u7528 react-native \u7684 hooks ',
                  e.createElement(t.Link, { to: 'packages/native/README' }, 'brick-hooks-native'),
                ),
                e.createElement(
                  'li',
                  null,
                  '\u9002\u7528 react-navigation4 \u7684 hooks ',
                  e.createElement(t.Link, { to: 'packages/react-navigation4/README' }, 'brick-hooks-react-navigation4'),
                ),
                e.createElement(
                  'li',
                  null,
                  '\u4E1A\u52A1 hooks ',
                  e.createElement(t.Link, { to: 'packages/business/README' }, 'brick-hooks-business'),
                ),
              ),
            ),
          )
        })
      c.default = (n) => {
        var l = e.useContext(t.context),
          r = l.demos
        return (
          e.useEffect(() => {
            var a
            n != null &&
              (a = n.location) !== null &&
              a !== void 0 &&
              a.hash &&
              t.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))
          }, []),
          e.createElement(u, { demos: r })
        )
      }
    },
  },
])
