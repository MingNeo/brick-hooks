;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [7637],
  {
    41086: function (s, E, t) {
      'use strict'
      t.r(E)
      var u = t(67294),
        e = t(36445),
        o = t(91485),
        r = u.memo((n) => {
          var i = n.demos
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
                  e.AnchorLink,
                  { to: '#uselazysequenceload', 'aria-hidden': 'true', tabIndex: -1 },
                  u.createElement('span', { className: 'icon icon-link' }),
                ),
                'useLazySequenceLoad',
              ),
              u.createElement(
                'p',
                null,
                '\u5217\u8868\u9875\u4EE5\u5206\u7EC4\u6A21\u5F0F\u6309\u9700\u52A0\u8F7D\u4E0B\u4E00\u7EC4\uFF0C\u9002\u7528\u6BCF\u4E2A item \u5404\u4E0D\u76F8\u540C\u60C5\u51B5\u3002\u5982\u9996\u9875\u88C5\u4FEE/\u4FE1\u606F\u6D41\u57FA\u4E8E useListSequenceLoad \u53CA useInView \u81EA\u52A8\u8FDB\u884C\u61D2\u52A0\u8F7D\u3002\u5217\u8868\u5E95\u90E8\u5FC5\u987B\u6709\u4E00\u4E2A Loading\uFF0C\u7528\u4E8E\u5224\u65AD\u662F\u5426\u9700\u8981\u52A0\u8F7D\u4E0B\u4E00\u7EC4\u3002(\u53EF\u4EE5\u8BBE\u7F6E\u4E0D\u53EF\u89C1)',
              ),
              u.createElement(
                'p',
                null,
                '\u4F46\u662F\u5BF9\u4E8E\u9996\u9875\u52A8\u6001\u88C5\u4FEE\u7684\u697C\u5C42\u3001\u4FE1\u606F\u6D41\u5217\u8868\u7B49\u6BCF\u4E2A item \u9AD8\u5EA6\u90FD\u4E0D\u76F8\u540C\uFF0C\u65E0\u6CD5\u9884\u5148\u5360\u4F4D\uFF0C\u4E14\u6570\u636E\u901A\u5E38\u7531 item \u7EC4\u4EF6\u81EA\u8EAB\u53D1\u9001\u8BF7\u6C42\u83B7\u53D6\u3002\u5219\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A hooks \u8FDB\u884C\u6309\u987A\u5E8F\u5206\u7EC4\u61D2\u52A0\u8F7D\u3002\u6BCF\u6B21\u90FD\u52A0\u8F7D\u6307\u5B9A\u6570\u91CF\u7684\u7EC4\u4EF6\u3002',
              ),
              u.createElement(
                'p',
                null,
                '\u4E00\u822C\u7684\u5217\u8868\u61D2\u52A0\u8F7D\u4E0D\u4E00\u5B9A\u9002\u7528 useLazySequenceLoad\uFF0C\u53EF\u4EE5\u5728\u6BCF\u4E2A item \u4E2D\u5355\u72EC\u4F7F\u7528 brickHooksWeb.useInView\u3002',
              ),
              u.createElement(
                'h3',
                { id: '\u7528\u6CD5' },
                u.createElement(
                  e.AnchorLink,
                  { to: '#\u7528\u6CD5', 'aria-hidden': 'true', tabIndex: -1 },
                  u.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7528\u6CD5',
              ),
              u.createElement(
                'h3',
                { id: '\u7C7B\u578B\u58F0\u660E' },
                u.createElement(
                  e.AnchorLink,
                  { to: '#\u7C7B\u578B\u58F0\u660E', 'aria-hidden': 'true', tabIndex: -1 },
                  u.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7C7B\u578B\u58F0\u660E',
              ),
              u.createElement(o.Z, {
                code: `function useLazySequenceLoad(
  listData: any,
  { target, root, groupSize, onLoadingInView }: Options,
): {
  showfooterLoading: boolean
  showList: any[]
  rootProps: {
    ref: (ref: any) => any
    onScroll: DebunceFn
  }
  loadingProps: {
    ref: (ref: any) => any
  }
}`,
                lang: 'typescript',
              }),
              u.createElement(o.Z, {
                code: `function Container() {
  const { showfooterLoading, showList, rootProps, loadingProps } = useLazySequenceLoad(list, { groupSize: 3 })

  return (
    <View>
      <View {...rootProps} style={containerStyle}>
        {showList.map((item) => (
          <Item key={item.id}>{item.value}</Item>
        ))}
        {showfooterLoading ? (
          <View {...loadingProps}>
            <Text>Loading</Text>
          </View>
        ) : null}
      </View>
    </View>
  )
}`,
                lang: 'javascript',
              }),
              u.createElement(
                'p',
                null,
                '\u5982\u9700\u63D0\u524D\u89E6\u53D1 inView\uFF0C\u53EF\u4EE5\u4F7F\u7528',
                u.createElement(
                  e.Link,
                  { to: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API' },
                  'rootMargin',
                ),
              ),
              u.createElement(o.Z, {
                code: `// \u8DDD\u79BB\u53EF\u89C6\u533A\u57DF100\u50CF\u7D20\u65F6\u63D0\u524D\u52A0\u8F7D
useLazySequenceLoad(list, { groupSize: 3, rootMargin: 100 })`,
                lang: 'javascript',
              }),
            ),
          )
        })
      E.default = (n) => {
        var i = u.useContext(e.context),
          l = i.demos
        return (
          u.useEffect(() => {
            var a
            n != null &&
              (a = n.location) !== null &&
              a !== void 0 &&
              a.hash &&
              e.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))
          }, []),
          u.createElement(r, { demos: l })
        )
      }
    },
  },
])
