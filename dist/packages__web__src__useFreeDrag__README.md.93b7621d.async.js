;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [3814],
  {
    5503: function (i, a, t) {
      'use strict'
      t.r(a)
      var e = t(67294),
        u = t(36445),
        l = t(91485),
        c = e.memo((n) => {
          var r = n.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'usefreedrag' },
                e.createElement(
                  u.AnchorLink,
                  { to: '#usefreedrag', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useFreeDrag',
              ),
              e.createElement(
                'p',
                null,
                '\u53EF\u4EE5\u5FEB\u901F\u7ED9\u4E00\u4E2A\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u8282\u70B9\u63D0\u4F9B\u81EA\u7531\u62D6\u62FD\u80FD\u529B',
              ),
              e.createElement(l.Z, {
                code: `function Comp() {
  const { onMousedown, dragStyle } = useFreeDrag((rect) => {
    console.log(rect)
  })

  return (
    <div style={{ position: 'relative', height: 450, width: '100%' }}>
      <div
        onMousedown={onMousedown}
        style={{ height: 50, width: 50, backgroundColor: 'blue', ...dragStyle }}
      />
    </div>
  )
}`,
                lang: 'javascript',
              }),
              e.createElement(
                'p',
                null,
                '\u5982\u679C\u521D\u59CB\u72B6\u6001\u4E0D\u662F left:0,top:0\uFF0C\u5219\u9700\u8981\u8BBE\u7F6E initialRect',
              ),
              e.createElement(l.Z, {
                code: 'const { onMousedown, dragStyle } = useFreeDrag(() => {}, { initialRect: { left: 10, top: 10 })',
                lang: 'javascript',
              }),
            ),
          )
        })
      a.default = (n) => {
        var r = e.useContext(u.context),
          s = r.demos
        return (
          e.useEffect(() => {
            var o
            n != null &&
              (o = n.location) !== null &&
              o !== void 0 &&
              o.hash &&
              u.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))
          }, []),
          e.createElement(c, { demos: s })
        )
      }
    },
  },
])
