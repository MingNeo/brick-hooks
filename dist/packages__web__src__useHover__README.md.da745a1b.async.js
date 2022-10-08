;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [9585],
  {
    26733: function (d, u, o) {
      'use strict'
      o.r(u)
      var e = o(67294),
        t = o(36445),
        s = o(91485),
        a = e.memo((n) => {
          var c = n.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'usehover' },
                e.createElement(
                  t.AnchorLink,
                  { to: '#usehover', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useHover',
              ),
              e.createElement('p', null, '\u65B9\u4FBF\u6DFB\u52A0\u9F20\u6807\u60AC\u6D6E\u5904\u7406'),
              e.createElement(s.Z, {
                code: `function MyComponent() {
  const ref = useRef()
  const isHover = useHover(ref)

  return <div ref={node => ref.current = node}></div>
}
function MyComponent() {
  const ref = useRef()
  const onOver = () => {/* ... */}
  const onOut = () => {/* ... */}
  const isHover = useHover(ref, { onOver, onOut })

  return <div ref={node => ref.current = node}></div>
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      u.default = (n) => {
        var c = e.useContext(t.context),
          l = c.demos
        return (
          e.useEffect(() => {
            var r
            n != null &&
              (r = n.location) !== null &&
              r !== void 0 &&
              r.hash &&
              t.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))
          }, []),
          e.createElement(a, { demos: l })
        )
      }
    },
  },
])
