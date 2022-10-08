;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [2938],
  {
    35022: function (s, o, u) {
      'use strict'
      u.r(o)
      var e = u(67294),
        t = u(36445),
        l = u(91485),
        r = e.memo((n) => {
          var i = n.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'uselink' },
                e.createElement(
                  t.AnchorLink,
                  { to: '#uselink', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useLink',
              ),
              e.createElement(
                'p',
                null,
                '\u5411\u9875\u9762\u4E2D\u63D2\u5165\u4E00\u6BB5 Link \u4E3A\u9632\u6B62\u91CD\u590D\u63D2\u5165, id \u662F\u5FC5\u586B\u7684, \u4F1A\u5728 link \u6807\u7B7E\u4E0A\u6DFB\u52A0 id \u5C5E\u6027',
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
              e.createElement(l.Z, {
                code: `function useLink(
  href: string,
  id?: string,
  {
    removeOnDestroy,
  }?: {
    removeOnDestroy?: boolean
  },
): () => void`,
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
              e.createElement(l.Z, {
                code: `const style = \`
.title {
  width: 200px;
  height: 20px;
}
\`

function MyComponent() {
  useLink(style, 'styleUserTitle')
}`,
                lang: 'javascript',
              }),
              e.createElement('p', null, '\u7EC4\u4EF6\u5378\u8F7D\u65F6\u5019\u81EA\u52A8\u79FB\u9664 style'),
              e.createElement(l.Z, {
                code: "useLink(style, 'styleUserTitle', { removeOnDestroy: true })",
                lang: 'javascript',
              }),
              e.createElement('p', null, '\u7EC4\u4EF6\u5378\u8F7D\u65F6\u5019\u81EA\u52A8\u79FB\u9664 style'),
              e.createElement(l.Z, {
                code: `const removeStyle = useLink(style, 'styleUserTitle')

const handleRemoveStyle = () => removeStyle()`,
                lang: 'javascript',
              }),
            ),
          )
        })
      o.default = (n) => {
        var i = e.useContext(t.context),
          c = i.demos
        return (
          e.useEffect(() => {
            var a
            n != null &&
              (a = n.location) !== null &&
              a !== void 0 &&
              a.hash &&
              t.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))
          }, []),
          e.createElement(r, { demos: c })
        )
      }
    },
  },
])
