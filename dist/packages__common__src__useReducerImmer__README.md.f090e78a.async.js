;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [7543],
  {
    24186: function (s, a, n) {
      'use strict'
      n.r(a)
      var e = n(67294),
        t = n(36445),
        o = n(91485),
        i = e.memo((u) => {
          var c = u.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'usereducerimmer' },
                e.createElement(
                  t.AnchorLink,
                  { to: '#usereducerimmer', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useReducerImmer',
              ),
              e.createElement(
                'p',
                null,
                '\u63D0\u4F9B\u4E00\u4E2A\u4F7F\u7528 immer \u7684 useReducer\uFF0C\u9664\u4E86 reducer \u53EF\u4EE5\u4F7F\u7528 immer \u7684\u65B9\u5F0F\u76F4\u63A5\u4FEE\u6539\u6570\u636E\u5916\uFF0C\u4E0E useReducer \u4FDD\u6301\u4E00\u81F4',
              ),
              e.createElement(
                'p',
                null,
                '\u591A\u6570\u60C5\u51B5\u4E0B\u4F7F\u7528 useObjectStateImmer\u3001userMethodsImmer \u66F4\u7B80\u5355\u6E05\u6670\uFF0C\u8003\u8651\u8981\u4E0D\u8981\u53BB\u6389\u8FD9\u4E2A hooks\u3002',
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
                code: `// immer\u7248\u672C
// immer\u7248\u672C\u7684\u7279\u70B9\u5C31\u662F\u4F7F\u7528immer\uFF0C\u56E0\u6B64\u6570\u636E\u7684\u64CD\u4F5C\u53EF\u4EE5\u65E0\u9700\u4E00\u5C42\u5C42\u521B\u5EFA\u65B0\u7684\u5BF9\u8C61\uFF0C\u5BF9\u6570\u636E\u8FDB\u884C\u76F4\u63A5\u4FEE\u6539\u5C31\u53EF\u4EE5
const reducer = (state, action) => {
  switch (action.type) {
    case 'incB':
      state.a.b += 1
      break
    default:
      return
  }
}

function MyComponent({ obj }) {
  const initialValue = { a: { b: 0 } }
  const [state, dispatch] = useReducerImmer(reducer, initialValue)

  return (
    <div>
      <button onClick={() => dispatch({ type: 'incB' })}>incB</button>
    </div>
  )
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      a.default = (u) => {
        var c = e.useContext(t.context),
          m = c.demos
        return (
          e.useEffect(() => {
            var r
            u != null &&
              (r = u.location) !== null &&
              r !== void 0 &&
              r.hash &&
              t.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))
          }, []),
          e.createElement(i, { demos: m })
        )
      }
    },
  },
])
