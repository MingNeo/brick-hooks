;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [4503],
  {
    50245: function (m, c, a) {
      'use strict'
      a.r(c)
      var e = a(67294),
        n = a(36445),
        o = a(91485),
        r = e.memo((t) => {
          var u = t.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'usekey' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#usekey', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useKey',
              ),
              e.createElement('p', null, '\u76D1\u542C\u952E\u76D8\u6309\u4E0B'),
              e.createElement(
                'h3',
                { id: '\u7C7B\u578B\u58F0\u660E' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#\u7C7B\u578B\u58F0\u660E', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7C7B\u578B\u58F0\u660E',
              ),
              e.createElement(o.Z, {
                code: `function useKey<T extends Element>(
  fn?: Handler,
  options?: {
    key?: number
    event?: 'keydown' | 'keypress' | 'keyup'
    target?: T | null
    ctrlKey?: boolean
    altKey?: boolean
    shiftKey?: boolean
    metaKey?: boolean
    capture?: any
    once?: boolean
    passive?: boolean
    signal?: AbortSignal
  },
): void`,
                lang: 'typescript',
              }),
              e.createElement(
                'h3',
                { id: '\u7528\u6CD5' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#\u7528\u6CD5', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7528\u6CD5',
              ),
              e.createElement(o.Z, {
                code: `function Comp() {
  useKey((e) => {
    if (e.key === 13) {
      // ...
    }
  })
}`,
                lang: 'javascript',
              }),
              e.createElement('p', null, '\u6216'),
              e.createElement(o.Z, {
                code: `function Comp() {
  useKey(
    (e) => {
      // ...
    },
    { key: 13 },
  )
}`,
                lang: 'javascript',
              }),
              e.createElement(
                'h4',
                { id: '\u76D1\u542C-ctrlkeyaltkeyshiftkeymetakeywindowcommand' },
                e.createElement(
                  n.AnchorLink,
                  {
                    to: '#\u76D1\u542C-ctrlkeyaltkeyshiftkeymetakeywindowcommand',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u76D1\u542C ctrlKey\u3001altKey\u3001shiftKey\u3001metaKey(window/command)',
              ),
              e.createElement(o.Z, {
                code: `function Comp() {
  useKey(
    (e) => {
      // ...
    },
    { key: 13, ctrlKey: true },
  )
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      c.default = (t) => {
        var u = e.useContext(n.context),
          i = u.demos
        return (
          e.useEffect(() => {
            var l
            t != null &&
              (l = t.location) !== null &&
              l !== void 0 &&
              l.hash &&
              n.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))
          }, []),
          e.createElement(r, { demos: i })
        )
      }
    },
  },
])
