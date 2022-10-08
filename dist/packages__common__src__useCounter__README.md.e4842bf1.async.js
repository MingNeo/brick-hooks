;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [1512],
  {
    54952: function (r, i, c) {
      'use strict'
      c.r(i)
      var e = c(67294),
        n = c(36445),
        a = c(91485),
        s = e.memo((t) => {
          var u = t.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'usecounter' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#usecounter', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useCounter',
              ),
              e.createElement(a.Z, {
                code: `function MyComponent() {
  const [count, actions] = useCounter(0, { min: 0, max: 3 })

  return <Child>...</Child>
}`,
                lang: 'javascript',
              }),
              e.createElement(
                'h4',
                { id: 'actions' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#actions', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'actions',
              ),
              e.createElement(
                'h5',
                { id: 'actionsinc' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#actionsinc', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'actions.inc',
              ),
              e.createElement('p', null, '\u6570\u5B57\u589E\u52A0\u6307\u5B9A\u6570\u503C\uFF0C\u9ED8\u8BA4\u4E3A 1'),
              e.createElement(a.Z, {
                code: `const [count, actions] = useCounter(0, { min: 0, max: 3 });

  actions.inc() // count: oldCount + 1
  actions.inc(3) // count: oldCount + 3
}`,
                lang: 'javascript',
              }),
              e.createElement(
                'h5',
                { id: 'actionsdec' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#actionsdec', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'actions.dec',
              ),
              e.createElement('p', null, '\u6570\u5B57\u51CF\u5C11\u6307\u5B9A\u6570\u503C\uFF0C\u9ED8\u8BA4\u4E3A 1'),
              e.createElement(a.Z, {
                code: `const [count, actions] = useCounter(0, { min: 0, max: 3 });

  actions.inc() // count: oldCount - 1
  actions.inc(3) // count: oldCount - 3
}`,
                lang: 'javascript',
              }),
              e.createElement(
                'h5',
                { id: 'actionreset' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#actionreset', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'action.reset',
              ),
              e.createElement('p', null, '\u6570\u5B57\u91CD\u7F6E\u4E3A initialValue'),
              e.createElement(a.Z, {
                code: `const [count, actions] = useCounter(0, { min: 0, max: 3 });

  actions.reset() // count: 0
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      i.default = (t) => {
        var u = e.useContext(n.context),
          l = u.demos
        return (
          e.useEffect(() => {
            var o
            t != null &&
              (o = t.location) !== null &&
              o !== void 0 &&
              o.hash &&
              n.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))
          }, []),
          e.createElement(s, { demos: l })
        )
      }
    },
  },
])
