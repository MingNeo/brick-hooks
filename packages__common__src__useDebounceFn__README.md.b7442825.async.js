;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [4607],
  {
    12415: function (d, c, t) {
      'use strict'
      t.r(c)
      var e = t(67294),
        a = t(36445),
        l = t(91485),
        s = e.memo((n) => {
          var u = n.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'usedebouncefn' },
                e.createElement(
                  a.AnchorLink,
                  { to: '#usedebouncefn', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useDebounceFn',
              ),
              e.createElement('p', null, '\u5BF9\u51FD\u6570\u8FDB\u884C\u9632\u6296\u5904\u7406'),
              e.createElement(l.Z, {
                code: `const getData = async () => {}
const [debounceCb, cancel] = useDebounceFn(getData, 200)

// leading\u53C2\u6570\u63A7\u5236\u89E6\u53D1debounce\u65F6\u7ACB\u5373\u89E6\u53D1\u51FD\u6570\u7136\u540E\u518D\u7B49\u5F85\uFF0C\u9ED8\u8BA4\u4E3Afalse
// trailing\u53C2\u6570\u63A7\u5236debounce\u7ED3\u675F\u65F6\u89E6\u53D1\u51FD\u6570\uFF0C\u9ED8\u8BA4\u4E3Atrue
// \u5982\u7528\u4E8E\u9875\u9762\u70B9\u51FB\u8DF3\u8F6C\u9632\u6B62\u591A\u6B21\u70B9\u51FB\uFF0C\u5E94\u8BE5\u914D\u7F6Eleading\u4E3Atrue\u3001trailing\u4E3Afalse\uFF0C\u610F\u4E3A\u7ACB\u5373\u89E6\u53D1\u8DF3\u8F6C\u540C\u65F6\u6307\u5B9A\u65F6\u95F4\u5185\u4E0D\u518D\u54CD\u5E94
const [debounceCb, cancel] = useDebounceFn(getData, 200, { leading: true, trailing: false })`,
                lang: 'javascript',
              }),
            ),
          )
        })
      c.default = (n) => {
        var u = e.useContext(a.context),
          r = u.demos
        return (
          e.useEffect(() => {
            var o
            n != null &&
              (o = n.location) !== null &&
              o !== void 0 &&
              o.hash &&
              a.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))
          }, []),
          e.createElement(s, { demos: r })
        )
      }
    },
  },
])
