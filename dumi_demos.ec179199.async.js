;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [8336],
  {
    73602: function (p, c, i) {
      'use strict'
      i.d(c, {
        m: function () {
          return o.m
        },
      })
      var o = i(67624),
        s = i(93142)
    },
    49410: function (p, c, i) {
      'use strict'
      Object.defineProperty(c, '__esModule', { value: !0 }), (c.default = void 0)
      function o() {
        const e = m(i(67294))
        return (
          (o = function () {
            return e
          }),
          e
        )
      }
      function s() {
        const e = i(36445)
        return (
          (s = function () {
            return e
          }),
          e
        )
      }
      function m(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function d(e, n) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          n &&
            (r = r.filter(function (f) {
              return Object.getOwnPropertyDescriptor(e, f).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function l(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = arguments[n] != null ? arguments[n] : {}
          n % 2
            ? d(Object(t), !0).forEach(function (r) {
                _(e, r, t[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
              })
        }
        return e
      }
      function _(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 })
            : (e[n] = t),
          e
        )
      }
      const O = (e) => e.render()
      var h = (e, n) => {
        let t = []
        const r = e.match.params.uuid,
          f = e.location.query.wrapper === void 0,
          a = n[r]
        if (a) {
          const u = l(
            l({}, a.previewerProps),
            {},
            { hideActions: (a.previewerProps.hideActions || []).concat(['EXTERNAL']) },
          )
          e.location.query.capture !== void 0 &&
            ((u.motions = (u.motions || []).slice()),
            u.motions.unshift('autoplay'),
            u.motions.every((P) => !P.startsWith('capture')) && u.motions.push('capture:[id|=root]')),
            f
              ? (t = [
                  o().default.createElement(O, {
                    render: () => (
                      (0, s().useMotions)(
                        u.motions || [],
                        typeof window != 'undefined' ? document.documentElement : null,
                      ),
                      o().default.createElement('div', {}, o().default.createElement(a.component))
                    ),
                  }),
                ])
              : (t = [u, o().default.createElement(a.component)])
        }
        return t
      }
      c.default = h
    },
  },
])
