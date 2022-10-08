;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [1174],
  {
    38096: function (s, i, t) {
      'use strict'
      t.r(i)
      var e = t(67294),
        u = t(36445),
        o = t(91485),
        c = e.memo((n) => {
          var l = n.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'usebreakpoint' },
                e.createElement(
                  u.AnchorLink,
                  { to: '#usebreakpoint', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useBreakpoint',
              ),
              e.createElement(
                'p',
                null,
                '\u65B9\u4FBF\u5BF9\u4E0D\u540C\u5C4F\u5E55\u5C3A\u5BF8\u4F7F\u7528\u4E0D\u540C\u6570\u636E\u57FA\u4E8E useMedia, \u901A\u8FC7 js \u65B9\u4FBF\u4F7F\u7528\u5A92\u4F53\u67E5\u8BE2\u3002',
              ),
              e.createElement(
                'h2',
                { id: '\u7528\u6CD5' },
                e.createElement(
                  u.AnchorLink,
                  { to: '#\u7528\u6CD5', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7528\u6CD5 ',
                e.createElement('a', { name: 'usage' }),
              ),
              e.createElement(
                'p',
                null,
                'breakpointList \u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5F53\u6709\u591A\u6761\u5339\u914D\u65F6\uFF0C\u4F1A\u6839\u636E\u6570\u7EC4 index \u7684\u987A\u5E8F\u83B7\u53D6\u7B2C\u4E00\u4E2A\u5339\u914D\u7684 value',
              ),
              e.createElement(
                'p',
                null,
                '\u5982\u8FC7\u8BBE\u7F6E\u521D\u59CB\u503C\uFF0C\u5219\u521D\u59CB\u72B6\u6001\u4E0D\u6839\u636E\u5A92\u4F53\u67E5\u8BE2\u5224\u65AD\uFF0C\u800C\u4F7F\u7528\u521D\u59CB\u503C',
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
              e.createElement(o.Z, {
                code: 'function useBreakpoint(breakpointList: BreakpointList, initialValue?: any): any',
                lang: 'typescript',
              }),
              e.createElement(o.Z, {
                code: `// \u6805\u683C\u5E03\u5C40\u65F6\uFF0C\u5C4F\u5E55\u5BBD\u5EA6\u5927\u4E8E1200 \u5219\u7EC4\u4EF6\u5BBD\u5EA6\u8BBE\u4E3A25%\uFF0C768-992\u4E3A50%\uFF0C\u5C0F\u4E8E768\u4E3A100%
function MyComponent() {
  const breakpointList = [
    { min: 1200, value: 6 },
    { min: 768, max: 992, value: 12 },
    { max: 768, value: 24 },
  ]
  const col = useBreakpoint(breakpointList)
}

// \u4E0D\u540C\u5C3A\u5BF8\u4F7F\u7528\u4E0D\u540C\u7684style\u6837\u5F0F
function MyComponent() {
  const breakpointList = [
    {
      min: 1200,
      value: { width: '100%' },
    },
    {
      min: 768,
      max: 992,
      value: { width: '50%' },
    },
  ]
  const style = useBreakpoint(breakpointList, 1)

  return <div style={style}>{/* ... */}</div>
}

// \u6307\u5B9A\u5C3A\u5BF8\u8BBE\u5907\u7C7B\u578B
function MyComponent() {
  const breakpointList = [
    { min: 1200, value: 'pc' },
    { min: 768, max: 992, value: 'pad' },
    { max: 768, value: 'mobile' },
  ]
  const type = useBreakpoint(breakpointList, 'pc')
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      i.default = (n) => {
        var l = e.useContext(u.context),
          r = l.demos
        return (
          e.useEffect(() => {
            var a
            n != null &&
              (a = n.location) !== null &&
              a !== void 0 &&
              a.hash &&
              u.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))
          }, []),
          e.createElement(c, { demos: r })
        )
      }
    },
  },
])
