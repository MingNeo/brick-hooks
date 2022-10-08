;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [5165],
  {
    43036: function (i, c, n) {
      'use strict'
      n.r(c)
      var e = n(67294),
        t = n(36445),
        r = n(91485),
        a = e.memo((o) => {
          var s = o.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'usescrolltotop' },
                e.createElement(
                  t.AnchorLink,
                  { to: '#usescrolltotop', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useScrollToTop',
              ),
              e.createElement('p', null, '\u65B9\u4FBF\u6EDA\u52A8 ScrollView \u5230\u9876\u90E8'),
              e.createElement(r.Z, {
                code: `function Comp() {
  const ref = React.useRef(null)
  const scrollToTop = useScrollToTop(ref)

  return (
    <ScrollView ref={ref}>
      {/* content */}
      <Touchable onPress={() => scrollToTop()}></Touchable>
    </ScrollView>
  )
}`,
                lang: 'javascript',
              }),
              e.createElement(r.Z, {
                code: `function Comp() {
  const ref = React.useRef(null)

  useScrollToTop(
    React.useRef({
      scrollToTop: () => ref.current?.scrollToOffset({ offset: -100 }),
    }),
  )

  return <ScrollView ref={ref}>{/* content */}</ScrollView>
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      c.default = (o) => {
        var s = e.useContext(t.context),
          u = s.demos
        return (
          e.useEffect(() => {
            var l
            o != null &&
              (l = o.location) !== null &&
              l !== void 0 &&
              l.hash &&
              t.AnchorLink.scrollToAnchor(decodeURIComponent(o.location.hash.slice(1)))
          }, []),
          e.createElement(a, { demos: u })
        )
      }
    },
  },
])
