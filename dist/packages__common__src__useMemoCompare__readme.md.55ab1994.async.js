;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [6843],
  {
    48307: function (m, u, t) {
      'use strict'
      t.r(u)
      var e = t(67294),
        o = t(36445),
        s = t(91485),
        c = e.memo((n) => {
          var r = n.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'usememocompare' },
                e.createElement(
                  o.AnchorLink,
                  { to: '#usememocompare', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useMemoCompare',
              ),
              e.createElement(
                'p',
                null,
                '\u7528\u4E8E\u7B80\u5316\u67D0\u4E9B\u7279\u6B8A\u60C5\u51B5\u4E0B useMemo \u7684\u5224\u65AD',
              ),
              e.createElement(s.Z, {
                code: `function MyComponent({ obj }) {
  const [state, setState] = useState()

  const objMemo = useMemoCompare(obj, (prev, next) => {
    return prev && prev.id === next.id
  })

  // \u4EC5\u5F53obj\u4E2D\u7684id\u53D8\u5316\u65F6\u89E6\u53D1
  useEffect(() => {
    return setState(objMemo.id)
  }, [objMemo])

  return <div> ... </div>
}`,
                lang: 'javascript',
              }),
              e.createElement(s.Z, {
                code: `// \u6211\u4EEC\u9700\u8981\u5728obj.id\u53D8\u66F4\u7684\u65F6\u5019\u89E6\u53D1\u52A8\u4F5C\uFF0C\u4F46\u662F\u5982\u679Cdeps\u76F4\u63A5\u4F9D\u8D56obj\uFF0C\u90A3\u4E48obj\u91CC\u7684\u4EFB\u4F55\u5C5E\u6027\u53D8\u5316\u90FD\u4F1A\u89E6\u53D1\u6E32\u67D3\u3002
useEffect(() => {
  return setState(obj.id)
}, [obj])

// deps\u91CC\u9762\u4F7F\u7528obj.id \u4E5F\u4E0D\u884C\uFF0C\u56E0\u4E3A\u6211\u4EECuseEffect\u91CC\u9762\u5E76\u6CA1\u6709\u7528\u5230obj.id\uFF0C\u6240\u4EE5eslint-plugin-hooks\u4F1A\u63D0\u793A\u9519\u8BEF\uFF0C
// \u6211\u4EEC\u8FD8\u9700\u8981eslint-disable-next-line\u624D\u80FD\u6D88\u9664\u9519\u8BEF\u3002
// \u4F7F\u7528\u6B64hooks\u5373\u53EF\u907F\u514D\u8FD9\u79CD\u60C5\u51B5
useEffect(() => {
  return obj.someMethod().then((value) => setState(value))
}, [obj.id])`,
                lang: 'javascript',
              }),
            ),
          )
        })
      u.default = (n) => {
        var r = e.useContext(o.context),
          l = r.demos
        return (
          e.useEffect(() => {
            var a
            n != null &&
              (a = n.location) !== null &&
              a !== void 0 &&
              a.hash &&
              o.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))
          }, []),
          e.createElement(c, { demos: l })
        )
      }
    },
  },
])
