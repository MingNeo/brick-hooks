;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [6393],
  {
    14359: function (i, s, n) {
      'use strict'
      n.r(s)
      var e = n(67294),
        u = n(36445),
        l = n(91485),
        r = e.memo((t) => {
          var a = t.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'usestyle' },
                e.createElement(
                  u.AnchorLink,
                  { to: '#usestyle', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useStyle',
              ),
              e.createElement(
                'p',
                null,
                '\u5411\u9875\u9762\u4E2D\u63D2\u5165\u4E00\u6BB5 Style \u4E3A\u9632\u6B62\u91CD\u590D\u63D2\u5165, id \u662F\u5FC5\u586B\u7684, \u4F1A\u5728 style \u6807\u7B7E\u4E0A\u6DFB\u52A0 id \u5C5E\u6027',
              ),
              e.createElement(
                'h3',
                { id: '\u7C7B\u578B\u58F0\u660E' },
                e.createElement(
                  u.AnchorLink,
                  { to: '#\u7C7B\u578B\u58F0\u660E', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7C7B\u578B\u58F0\u660E',
              ),
              e.createElement(l.Z, {
                code: `function useStyle(
  styleContent: string,
  id: string,
  {
    removeOnDestroy,
  }?: {
    removeOnDestroy?: boolean
  },
): () => void`,
                lang: 'typescript',
              }),
              e.createElement(l.Z, {
                code: `const style = \`
.title {
  width: 200px;
  height: 20px;
}
\`

function MyComponent() {
  useStyle(style, 'styleUserTitle')
}`,
                lang: 'javascript',
              }),
              e.createElement('p', null, '\u7EC4\u4EF6\u5378\u8F7D\u65F6\u5019\u81EA\u52A8\u79FB\u9664 style'),
              e.createElement(l.Z, {
                code: "useStyle(style, 'styleUserTitle', { removeOnDestroy: true })",
                lang: 'javascript',
              }),
              e.createElement('p', null, '\u7EC4\u4EF6\u5378\u8F7D\u65F6\u5019\u81EA\u52A8\u79FB\u9664 style'),
              e.createElement(l.Z, {
                code: `const removeStyle = useStyle(style, 'styleUserTitle')

const handleRemoveStyle = () => removeStyle()`,
                lang: 'javascript',
              }),
            ),
          )
        })
      s.default = (t) => {
        var a = e.useContext(u.context),
          c = a.demos
        return (
          e.useEffect(() => {
            var o
            t != null &&
              (o = t.location) !== null &&
              o !== void 0 &&
              o.hash &&
              u.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))
          }, []),
          e.createElement(r, { demos: c })
        )
      }
    },
  },
])
