;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [3384],
  {
    74644: function (s, l, c) {
      'use strict'
      c.r(l)
      var e = c(67294),
        t = c(36445),
        o = c(91485),
        d = e.memo((n) => {
          var a = n.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'uselistchecked' },
                e.createElement(
                  t.AnchorLink,
                  { to: '#uselistchecked', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useListChecked',
              ),
              e.createElement(
                'p',
                null,
                '\u5BF9\u5217\u8868\u63D0\u4F9B\u5355\u9009\u3001\u591A\u9009\u80FD\u529B, \u5982\u8D2D\u7269\u8F66\u3001\u5E26 checkbox \u7684\u5217\u8868\u7B49',
              ),
              e.createElement(
                'h3',
                { id: '\u7C7B\u578B\u58F0\u660E' },
                e.createElement(
                  t.AnchorLink,
                  { to: '#\u7C7B\u578B\u58F0\u660E', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7C7B\u578B\u58F0\u660E',
              ),
              e.createElement(o.Z, {
                code: `function useListChecked(
  items?: (string | number)[],
  defaultSelecteds?: (string | number)[],
): {
  isAllChecked: boolean
  checkedIds: string[]
  checkedMap: {}
  setChecked: (key: string, checked: boolean) => void
  toggleChecked: (key: string, checked?: boolean) => void
  toggleAllChecked: (checked: any) => void
  clearChecked: () => void
}`,
                lang: 'typescript',
              }),
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
                code: `function Comp() {
  const { isAllChecked, checkedIds, toggleChecked, toggleAllChecked, clearChecked } = useListChecked([1, 2, 3], [1, 2])

  return (
    <div>
      <ul>
        <li>
          <Checkbox onClick={() => toggleChecked(id)} />
        </li>
      </ul>
      <button onClick={toggleAllChecked}>\u5168\u9009</button>
      <button onClick={clearChecked}>\u6E05\u7A7A</button>
    </div>
  )
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      l.default = (n) => {
        var a = e.useContext(t.context),
          i = a.demos
        return (
          e.useEffect(() => {
            var u
            n != null &&
              (u = n.location) !== null &&
              u !== void 0 &&
              u.hash &&
              t.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))
          }, []),
          e.createElement(d, { demos: i })
        )
      }
    },
  },
])
