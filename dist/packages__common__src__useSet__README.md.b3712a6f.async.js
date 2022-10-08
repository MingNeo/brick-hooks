;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [45],
  {
    84530: function (s, c, a) {
      'use strict'
      a.r(c)
      var e = a(67294),
        t = a(36445),
        o = a(91485),
        u = e.memo((n) => {
          var r = n.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'useset' },
                e.createElement(
                  t.AnchorLink,
                  { to: '#useset', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useSet',
              ),
              e.createElement(
                'p',
                null,
                '\u5BF9 Set \u7C7B\u578B\u7684\u6570\u636E\u8FDB\u884C\u5904\u7406\uFF0C\u53EF\u4EE5\u76F4\u63A5\u64CD\u4F5C Set \u65B9\u6CD5',
              ),
              e.createElement(
                'h3',
                { id: '\u7528\u6CD5' },
                e.createElement(
                  t.AnchorLink,
                  { to: '#\u7528\u6CD5', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7528\u6CD5',
              ),
              e.createElement(o.Z, {
                code: `function MyComponent() {
  const [testSet, testSetMethods] = useSet(new Set([1, 2, 3]))

  const handleButtonAClick = () => testSetMethods.add(4) // next testSet: [1, 2, 3, 4]
  return <Child>...</Child>
}`,
                lang: 'javascript',
              }),
              e.createElement(
                'h3',
                { id: 'actions' },
                e.createElement(
                  t.AnchorLink,
                  { to: '#actions', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'actions',
              ),
              e.createElement(
                'h4',
                { id: 'add' },
                e.createElement(
                  t.AnchorLink,
                  { to: '#add', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'add',
              ),
              e.createElement('p', null, '\u540C Set.prototype.add'),
              e.createElement(
                'h4',
                { id: 'delete' },
                e.createElement(
                  t.AnchorLink,
                  { to: '#delete', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'delete',
              ),
              e.createElement('p', null, '\u540C Set.prototype.delete'),
              e.createElement(
                'h4',
                { id: 'has' },
                e.createElement(
                  t.AnchorLink,
                  { to: '#has', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'has',
              ),
              e.createElement('p', null, '\u540C Set.prototype.has'),
              e.createElement(
                'h4',
                { id: 'toggle' },
                e.createElement(
                  t.AnchorLink,
                  { to: '#toggle', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'toggle',
              ),
              e.createElement('p', null, '\u5BF9\u6307\u5B9A\u503C\u8FDB\u884C toggle'),
              e.createElement(o.Z, {
                code: `function MyComponent() {
  const [testSet, testSetMethods] = useSet(new Set([1, 2, 3]))

  const handleButtonAClick = () => testSetMethods.toggle(4) // next testSet: [1, 2, 3, 4]
  return <Child>...</Child>
}`,
                lang: 'javascript',
              }),
              e.createElement(
                'h4',
                { id: 'reset' },
                e.createElement(
                  t.AnchorLink,
                  { to: '#reset', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'reset',
              ),
              e.createElement('p', null, '\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C'),
            ),
          )
        })
      c.default = (n) => {
        var r = e.useContext(t.context),
          i = r.demos
        return (
          e.useEffect(() => {
            var l
            n != null &&
              (l = n.location) !== null &&
              l !== void 0 &&
              l.hash &&
              t.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))
          }, []),
          e.createElement(u, { demos: i })
        )
      }
    },
  },
])
