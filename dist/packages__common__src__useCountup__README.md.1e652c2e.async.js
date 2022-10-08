;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [4399],
  {
    73602: function (r, u, n) {
      'use strict'
      n.d(u, {
        m: function () {
          return e.m
        },
      })
      var e = n(67624),
        o = n(93142)
    },
    1505: function (r, u, n) {
      'use strict'
      n.r(u)
      var e = n(67294),
        o = n(36445),
        m = n(16889),
        s = e.memo((t) => {
          var a = t.demos,
            l = a['usecountup-demo'].component
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              e.Fragment,
              null,
              e.createElement(
                'div',
                { className: 'markdown' },
                e.createElement(
                  'h2',
                  { id: 'usecountup' },
                  e.createElement(
                    o.AnchorLink,
                    { to: '#usecountup', 'aria-hidden': 'true', tabIndex: -1 },
                    e.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'useCountUp',
                ),
                e.createElement('p', null, '\u8BA1\u65F6'),
                e.createElement(
                  'h3',
                  { id: '\u6F14\u793A' },
                  e.createElement(
                    o.AnchorLink,
                    { to: '#\u6F14\u793A', 'aria-hidden': 'true', tabIndex: -1 },
                    e.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u6F14\u793A',
                ),
              ),
              e.createElement(m.default, a['usecountup-demo'].previewerProps, e.createElement(l, null)),
            ),
          )
        })
      u.default = (t) => {
        var a = e.useContext(o.context),
          l = a.demos
        return (
          e.useEffect(() => {
            var c
            t != null &&
              (c = t.location) !== null &&
              c !== void 0 &&
              c.hash &&
              o.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))
          }, []),
          e.createElement(s, { demos: l })
        )
      }
    },
  },
])
