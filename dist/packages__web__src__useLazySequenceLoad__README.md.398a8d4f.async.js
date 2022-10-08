;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [6392],
  {
    5572: function (l, a, o) {
      'use strict'
      o.r(a)
      var u = o(67294),
        n = o(36445),
        E = o(91485),
        r = u.memo((e) => {
          var i = e.demos
          return u.createElement(
            u.Fragment,
            null,
            u.createElement(
              'div',
              { className: 'markdown' },
              u.createElement(
                'h2',
                { id: 'uselazysequenceload' },
                u.createElement(
                  n.AnchorLink,
                  { to: '#uselazysequenceload', 'aria-hidden': 'true', tabIndex: -1 },
                  u.createElement('span', { className: 'icon icon-link' }),
                ),
                'useLazySequenceLoad',
              ),
              u.createElement(
                'p',
                null,
                '\u5217\u8868\u9875\u4EE5\u5206\u7EC4\u6A21\u5F0F\u6309\u9700\u52A0\u8F7D\u4E0B\u4E00\u7EC4\uFF0C\u9002\u7528\u6BCF\u4E2A item \u5404\u4E0D\u76F8\u540C\u60C5\u51B5\u3002\u5982\u9996\u9875\u88C5\u4FEE/\u4FE1\u606F\u6D41\u3002\u57FA\u4E8E useListSequenceLoad \u53CA useInView \u81EA\u52A8\u8FDB\u884C\u61D2\u52A0\u8F7D\u3002',
              ),
              u.createElement(
                'p',
                null,
                '\u4F46\u662F\u5BF9\u4E8E\u9996\u9875\u52A8\u6001\u88C5\u4FEE\u7684\u697C\u5C42\u3001\u4FE1\u606F\u6D41\u5217\u8868\u7B49\u6BCF\u4E2A item \u9AD8\u5EA6\u90FD\u4E0D\u76F8\u540C\uFF0C\u65E0\u6CD5\u9884\u5148\u5360\u4F4D\uFF0C\u4E14\u6570\u636E\u901A\u5E38\u7531 item \u7EC4\u4EF6\u81EA\u8EAB\u53D1\u9001\u8BF7\u6C42\u83B7\u53D6\u3002\u5219\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A hooks \u8FDB\u884C\u6309\u987A\u5E8F\u5206\u7EC4\u61D2\u52A0\u8F7D\u3002\u6BCF\u6B21\u90FD\u52A0\u8F7D\u6307\u5B9A\u6570\u91CF\u7684\u7EC4\u4EF6\u3002\u9700\u8981\u5728\u5217\u8868\u5E95\u90E8\u8BBE\u7F6E\u4E00\u4E2A loading \u7EC4\u4EF6\uFF0C\u5F53 loading \u8FDB\u5165\u53EF\u89C6\u533A\u57DF\u65F6\uFF0C\u5219\u89E6\u53D1\u52A0\u8F7D',
              ),
              u.createElement(
                'p',
                null,
                '\u4E00\u822C\u7684\u5217\u8868\u61D2\u52A0\u8F7D\u4E0D\u4E00\u5B9A\u9002\u7528 useLazySequenceLoad\uFF0C\u53EF\u4EE5\u5728\u6BCF\u4E2A item \u4E2D\u5355\u72EC\u4F7F\u7528 brickHooksWeb.useInView\u3002',
              ),
              u.createElement(
                'h3',
                { id: '\u7C7B\u578B\u58F0\u660E' },
                u.createElement(
                  n.AnchorLink,
                  { to: '#\u7C7B\u578B\u58F0\u660E', 'aria-hidden': 'true', tabIndex: -1 },
                  u.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7C7B\u578B\u58F0\u660E',
              ),
              u.createElement(E.Z, {
                code: `function useLazySequenceLoad(
  listData: Record<string, any>[],
  { target, root, groupSize, onLoadingInView }: Options,
): {
  showfooterLoading: boolean
  showList: any[]
  rootProps: {
    ref: (ref: any) => any
  }
  loadingProps: {
    ref: (ref: any) => any
  }
}`,
                lang: 'typescript',
              }),
              u.createElement(
                'h3',
                { id: '\u7528\u6CD5' },
                u.createElement(
                  n.AnchorLink,
                  { to: '#\u7528\u6CD5', 'aria-hidden': 'true', tabIndex: -1 },
                  u.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7528\u6CD5',
              ),
              u.createElement(E.Z, {
                code: `function Container() {
  const { showfooterLoading, showList, rootProps, loadingProps } = useLazySequenceLoad(list, { groupSize: 3 })

  return (
    <div>
      <div>\u5DF2\u52A0\u8F7D\u5217: {showList.map((v, i: number) => i + 1).join(',')}</div>
      <div {...rootProps} style={containerStyle}>
        {showList.map((item) => (
          <Item key={item.id}>{item.value}</Item>
        ))}
        {showfooterLoading ? <div {...loadingProps}>Loading</div> : null}
      </div>
    </div>
  )
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      a.default = (e) => {
        var i = u.useContext(n.context),
          s = i.demos
        return (
          u.useEffect(() => {
            var t
            e != null &&
              (t = e.location) !== null &&
              t !== void 0 &&
              t.hash &&
              n.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))
          }, []),
          u.createElement(r, { demos: s })
        )
      }
    },
  },
])
