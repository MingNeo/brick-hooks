;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [9963],
  {
    38539: function () {},
    52631: function () {},
    74974: function () {},
    23331: function () {},
    42685: function () {},
    57319: function () {},
    60376: function () {},
    75290: function (we, Q, M) {
      'use strict'
      M.d(Q, {
        Z: function () {
          return t
        },
      })
      function t() {
        return (
          (t =
            Object.assign ||
            function (w) {
              for (var R = 1; R < arguments.length; R++) {
                var U = arguments[R]
                for (var G in U) Object.prototype.hasOwnProperty.call(U, G) && (w[G] = U[G])
              }
              return w
            }),
          t.apply(this, arguments)
        )
      }
    },
    56500: function (we, Q, M) {
      'use strict'
      var t
      function w(u) {
        return (
          (w =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (c) {
                  return typeof c
                }
              : function (c) {
                  return c && typeof Symbol == 'function' && c.constructor === Symbol && c !== Symbol.prototype
                    ? 'symbol'
                    : typeof c
                }),
          w(u)
        )
      }
      ;(t = { value: !0 }), (Q.Z = void 0)
      var R = Ee(M(67294)),
        U = G(M(66394))
      function G(u) {
        return u && u.__esModule ? u : { default: u }
      }
      function re(u) {
        if (typeof WeakMap != 'function') return null
        var c = new WeakMap(),
          l = new WeakMap()
        return (re = function (g) {
          return g ? l : c
        })(u)
      }
      function Ee(u, c) {
        if (!c && u && u.__esModule) return u
        if (u === null || (w(u) !== 'object' && typeof u != 'function')) return { default: u }
        var l = re(c)
        if (l && l.has(u)) return l.get(u)
        var d = {},
          g = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var v in u)
          if (v !== 'default' && Object.prototype.hasOwnProperty.call(u, v)) {
            var k = g ? Object.getOwnPropertyDescriptor(u, v) : null
            k && (k.get || k.set) ? Object.defineProperty(d, v, k) : (d[v] = u[v])
          }
        return (d.default = u), l && l.set(u, d), d
      }
      function ce(u, c) {
        var l = (typeof Symbol != 'undefined' && u[Symbol.iterator]) || u['@@iterator']
        if (!l) {
          if (Array.isArray(u) || (l = ue(u)) || (c && u && typeof u.length == 'number')) {
            l && (u = l)
            var d = 0,
              g = function () {}
            return {
              s: g,
              n: function () {
                return d >= u.length ? { done: !0 } : { done: !1, value: u[d++] }
              },
              e: function (P) {
                throw P
              },
              f: g,
            }
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
        }
        var v = !0,
          k = !1,
          j
        return {
          s: function () {
            l = l.call(u)
          },
          n: function () {
            var P = l.next()
            return (v = P.done), P
          },
          e: function (P) {
            ;(k = !0), (j = P)
          },
          f: function () {
            try {
              !v && l.return != null && l.return()
            } finally {
              if (k) throw j
            }
          },
        }
      }
      function q(u, c) {
        return fe(u) || se(u, c) || ue(u, c) || ge()
      }
      function ge() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function ue(u, c) {
        if (!!u) {
          if (typeof u == 'string') return ae(u, c)
          var l = Object.prototype.toString.call(u).slice(8, -1)
          if ((l === 'Object' && u.constructor && (l = u.constructor.name), l === 'Map' || l === 'Set'))
            return Array.from(u)
          if (l === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)) return ae(u, c)
        }
      }
      function ae(u, c) {
        ;(c == null || c > u.length) && (c = u.length)
        for (var l = 0, d = new Array(c); l < c; l++) d[l] = u[l]
        return d
      }
      function se(u, c) {
        var l = u == null ? null : (typeof Symbol != 'undefined' && u[Symbol.iterator]) || u['@@iterator']
        if (l != null) {
          var d = [],
            g = !0,
            v = !1,
            k,
            j
          try {
            for (l = l.call(u); !(g = (k = l.next()).done) && (d.push(k.value), !(c && d.length === c)); g = !0);
          } catch ($) {
            ;(v = !0), (j = $)
          } finally {
            try {
              !g && l.return != null && l.return()
            } finally {
              if (v) throw j
            }
          }
          return d
        }
      }
      function fe(u) {
        if (Array.isArray(u)) return u
      }
      function oe(u, c) {
        var l = Object.keys(u)
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(u)
          c &&
            (d = d.filter(function (g) {
              return Object.getOwnPropertyDescriptor(u, g).enumerable
            })),
            l.push.apply(l, d)
        }
        return l
      }
      function ee(u) {
        for (var c = 1; c < arguments.length; c++) {
          var l = arguments[c] != null ? arguments[c] : {}
          c % 2
            ? oe(Object(l), !0).forEach(function (d) {
                _e(u, d, l[d])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(l))
            : oe(Object(l)).forEach(function (d) {
                Object.defineProperty(u, d, Object.getOwnPropertyDescriptor(l, d))
              })
        }
        return u
      }
      function _e(u, c, l) {
        return (
          c in u
            ? Object.defineProperty(u, c, { value: l, enumerable: !0, configurable: !0, writable: !0 })
            : (u[c] = l),
          u
        )
      }
      var de = function (c, l) {
          var d = function () {
              for (var P, I = arguments.length, A = new Array(I), S = 0; S < I; S++) A[S] = arguments[S]
              var F = A[1].replace(/([^^])\/$/, '$1')
              return ee(
                ee(
                  {},
                  ((P = A[0].find(function (e) {
                    var i = e.path
                    return i === F
                  })) === null || P === void 0
                    ? void 0
                    : P.meta) || {},
                ),
                {},
                { __pathname: l },
              )
            },
            g = (0, R.useState)(d(c, l)),
            v = q(g, 2),
            k = v[0],
            j = v[1]
          return (
            (0, R.useLayoutEffect)(
              function () {
                j(d(c, l))
              },
              [l],
            ),
            k
          )
        },
        me = function (c, l) {
          var d = function () {
              for (var P, I = arguments.length, A = new Array(I), S = 0; S < I; S++) A[S] = arguments[S]
              return (
                ((P = A[0].find(function (F) {
                  return new RegExp('/'.concat(F.name, '(/|$)')).test(A[1])
                })) === null || P === void 0
                  ? void 0
                  : P.name) || c[0].name
              )
            },
            g = (0, R.useState)(d(c, l)),
            v = q(g, 2),
            k = v[0],
            j = v[1]
          return (
            (0, R.useLayoutEffect)(
              function () {
                j(d(c, l))
              },
              [l],
            ),
            k
          )
        },
        pe = function (c, l, d) {
          var g = function () {
              for (var I, A = arguments.length, S = new Array(A), F = 0; F < A; F++) S[F] = arguments[F]
              for (var e = S[0].navs[S[1]] || [], i = '*', o = e.length - 1; o >= 0; o -= 1) {
                var s = e[o],
                  h = [s].concat(s.children).filter(Boolean),
                  L = h.find(function (W) {
                    return W.path && new RegExp('^'.concat(W.path.replace(/\.html$/, ''), '(/|.|$)')).test(S[2])
                  })
                if (L) {
                  i = L.path
                  break
                }
              }
              return ((I = S[0].menus[S[1]]) === null || I === void 0 ? void 0 : I[i]) || []
            },
            v = (0, R.useState)(g(c, l, d)),
            k = q(v, 2),
            j = k[0],
            $ = k[1]
          return (
            (0, R.useLayoutEffect)(
              function () {
                $(g(c, l, d))
              },
              [c.navs, c.menus, l, d],
            ),
            j
          )
        },
        ne = function (c, l, d) {
          var g = function () {
              for (var I = arguments.length, A = new Array(I), S = 0; S < I; S++) A[S] = arguments[S]
              return A[0] === A[1][0].name ? A[2].path : ''.concat(d.path, '/').concat(c).replace(/\/\//, '/')
            },
            v = (0, R.useState)(g(c, l, d)),
            k = q(v, 2),
            j = k[0],
            $ = k[1]
          return (
            (0, R.useLayoutEffect)(
              function () {
                $(g(c, l, d))
              },
              [c],
            ),
            j
          )
        },
        ie = function u(c) {
          var l,
            d = ce(c),
            g
          try {
            for (d.s(); !(g = d.n()).done; ) {
              var v = g.value
              if (v.__dumiRoot) {
                l = v.routes
                break
              } else if (v.routes && (l = u(v.routes))) break
            }
          } catch (k) {
            d.e(k)
          } finally {
            d.f()
          }
          return l
        },
        le = function (c) {
          var l = c.location,
            d = c.route,
            g = c.children,
            v = c.config,
            k = c.apis,
            j = c.demos,
            $ = l.pathname.replace(d.path.replace(/^\/$/, '//'), ''),
            P = ie(c.routes) || [],
            I = de(P, l.pathname),
            A = me(v.locales, $),
            S = pe(v, A, l.pathname),
            F = ne(A, v.locales, d)
          return R.default.createElement(
            U.default.Provider,
            {
              value: {
                config: v,
                meta: I.__pathname === l.pathname ? I : {},
                locale: A,
                nav: v.navs[A] || [],
                menu: S,
                base: F,
                routes: P,
                apis: k,
                demos: j,
              },
            },
            g,
          )
        },
        he = le
      Q.Z = he
    },
    17204: function (we, Q, M) {
      'use strict'
      M.r(Q),
        M.d(Q, {
          default: function () {
            return X
          },
        })
      var t = M(67294),
        w = M(36445),
        R = M(73602),
        U = M(52631),
        G = function (a) {
          var r = a.location,
            f = (0, t.useContext)(w.context),
            m = f.base,
            p = f.locale,
            _ = f.config.locales,
            x = _.find(function (O) {
              var C = O.name
              return C !== p
            })
          function D(O) {
            var C = m.replace('/'.concat(p), ''),
              y = r.pathname.replace(new RegExp('^'.concat(m, '(/|$)')), ''.concat(C, '$1')) || '/'
            if (O !== _[0].name) {
              var z = ''.concat(C, '/').concat(O).replace(/\/\//, '/'),
                T = r.pathname.replace(m.replace(/^\/$/, '//'), '')
              return ''.concat(z).concat(T).replace(/\/$/, '')
            }
            return y
          }
          return x
            ? t.createElement(
                'div',
                { className: '__dumi-default-locale-select', 'data-locale-count': _.length },
                _.length > 2
                  ? t.createElement(
                      'select',
                      {
                        value: p,
                        onChange: function (C) {
                          return R.m.push(D(C.target.value))
                        },
                      },
                      _.map(function (O) {
                        return t.createElement('option', { value: O.name, key: O.name }, O.label)
                      }),
                    )
                  : t.createElement(w.Link, { to: D(x.name) }, x.label),
              )
            : null
        },
        re = G,
        Ee = M(74974),
        ce = function (a) {
          var r = a.onMobileMenuClick,
            f = a.navPrefix,
            m = a.location,
            p = a.darkPrefix,
            _ = (0, t.useContext)(w.context),
            x = _.base,
            D = _.config,
            O = D.mode,
            C = D.title,
            y = D.logo,
            z = _.nav
          return t.createElement(
            'div',
            { className: '__dumi-default-navbar', 'data-mode': O },
            t.createElement('button', { className: '__dumi-default-navbar-toggle', onClick: r }),
            t.createElement(
              w.Link,
              {
                className: '__dumi-default-navbar-logo',
                style: { backgroundImage: y && "url('".concat(y, "')") },
                to: x,
                'data-plaintext': y === !1 || void 0,
              },
              C,
            ),
            t.createElement(
              'nav',
              null,
              f,
              z.map(function (T) {
                var te,
                  B =
                    Boolean((te = T.children) === null || te === void 0 ? void 0 : te.length) &&
                    t.createElement(
                      'ul',
                      null,
                      T.children.map(function (Y) {
                        return t.createElement(
                          'li',
                          { key: Y.path },
                          t.createElement(w.NavLink, { to: Y.path }, Y.title),
                        )
                      }),
                    )
                return t.createElement(
                  'span',
                  { key: T.title || T.path },
                  T.path ? t.createElement(w.NavLink, { to: T.path, key: T.path }, T.title) : T.title,
                  B,
                )
              }),
              t.createElement(
                'div',
                { className: '__dumi-default-navbar-tool' },
                t.createElement(re, { location: m }),
                p,
              ),
            ),
          )
        },
        q = ce,
        ge = M(57319),
        ue = ['slugs']
      function ae() {
        return (
          (ae = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var a = 1; a < arguments.length; a++) {
                  var r = arguments[a]
                  for (var f in r) Object.prototype.hasOwnProperty.call(r, f) && (n[f] = r[f])
                }
                return n
              }),
          ae.apply(this, arguments)
        )
      }
      function se(n, a) {
        if (n == null) return {}
        var r = fe(n, a),
          f,
          m
        if (Object.getOwnPropertySymbols) {
          var p = Object.getOwnPropertySymbols(n)
          for (m = 0; m < p.length; m++)
            (f = p[m]), !(a.indexOf(f) >= 0) && (!Object.prototype.propertyIsEnumerable.call(n, f) || (r[f] = n[f]))
        }
        return r
      }
      function fe(n, a) {
        if (n == null) return {}
        var r = {},
          f = Object.keys(n),
          m,
          p
        for (p = 0; p < f.length; p++) (m = f[p]), !(a.indexOf(m) >= 0) && (r[m] = n[m])
        return r
      }
      var oe = function (a) {
          var r = a.slugs,
            f = se(a, ue)
          return t.createElement(
            'ul',
            ae({ role: 'slug-list' }, f),
            r
              .filter(function (m) {
                var p = m.depth
                return p > 1 && p < 4
              })
              .map(function (m) {
                return t.createElement(
                  'li',
                  { key: m.heading, title: m.value, 'data-depth': m.depth },
                  t.createElement(w.AnchorLink, { to: '#'.concat(m.heading) }, t.createElement('span', null, m.value)),
                )
              }),
          )
        },
        ee = oe,
        _e = M(42685),
        de = function (a) {
          var r = a.mobileMenuCollapsed,
            f = a.location,
            m = a.darkPrefix,
            p = (0, t.useContext)(w.context),
            _ = p.config,
            x = _.logo,
            D = _.title,
            O = _.description,
            C = _.mode,
            y = _.repository.url,
            z = p.menu,
            T = p.nav,
            te = p.base,
            B = p.meta,
            Y = Boolean((B.hero || B.features || B.gapless) && C === 'site') || B.sidemenu === !1 || void 0
          return t.createElement(
            'div',
            { className: '__dumi-default-menu', 'data-mode': C, 'data-hidden': Y, 'data-mobile-show': !r || void 0 },
            t.createElement(
              'div',
              { className: '__dumi-default-menu-inner' },
              t.createElement(
                'div',
                { className: '__dumi-default-menu-header' },
                t.createElement(w.Link, {
                  to: te,
                  className: '__dumi-default-menu-logo',
                  style: { backgroundImage: x && "url('".concat(x, "')") },
                }),
                t.createElement('h1', null, D),
                t.createElement('p', null, O),
                /github\.com/.test(y) &&
                  C === 'doc' &&
                  t.createElement(
                    'p',
                    null,
                    t.createElement('object', {
                      type: 'image/svg+xml',
                      data: 'https://img.shields.io/github/stars'.concat(
                        y.match(/((\/[^\/]+){2})$/)[1],
                        '?style=social',
                      ),
                    }),
                  ),
              ),
              t.createElement(
                'div',
                { className: '__dumi-default-menu-mobile-area' },
                !!T.length &&
                  t.createElement(
                    'ul',
                    { className: '__dumi-default-menu-nav-list' },
                    T.map(function (b) {
                      var N,
                        Z =
                          Boolean((N = b.children) === null || N === void 0 ? void 0 : N.length) &&
                          t.createElement(
                            'ul',
                            null,
                            b.children.map(function (K) {
                              return t.createElement(
                                'li',
                                { key: K.path || K.title },
                                t.createElement(w.NavLink, { to: K.path }, K.title),
                              )
                            }),
                          )
                      return t.createElement(
                        'li',
                        { key: b.path || b.title },
                        b.path ? t.createElement(w.NavLink, { to: b.path }, b.title) : b.title,
                        Z,
                      )
                    }),
                  ),
                t.createElement(re, { location: f }),
                m,
              ),
              t.createElement(
                'ul',
                { className: '__dumi-default-menu-list' },
                !Y &&
                  z.map(function (b) {
                    var N,
                      Z = Boolean((N = B.slugs) === null || N === void 0 ? void 0 : N.length),
                      K = b.children && Boolean(b.children.length),
                      be = B.toc === 'menu' && !K && Z && b.path === f.pathname.replace(/([^^])\/$/, '$1'),
                      ke = K
                        ? b.children.map(function (J) {
                            return J.path
                          })
                        : [
                            b.path,
                            f.pathname.startsWith(''.concat(b.path, '/')) && B.title === b.title ? f.pathname : null,
                          ]
                    return t.createElement(
                      'li',
                      { key: b.path || b.title },
                      t.createElement(
                        w.NavLink,
                        {
                          to: b.path,
                          isActive: function () {
                            return ke.includes(f.pathname)
                          },
                        },
                        b.title,
                      ),
                      Boolean(b.children && b.children.length) &&
                        t.createElement(
                          'ul',
                          null,
                          b.children.map(function (J) {
                            return t.createElement(
                              'li',
                              { key: J.path },
                              t.createElement(
                                w.NavLink,
                                { to: J.path, exact: !0 },
                                t.createElement('span', null, J.title),
                              ),
                              Boolean(B.toc === 'menu' && typeof window != 'undefined' && J.path === f.pathname && Z) &&
                                t.createElement(ee, { slugs: B.slugs }),
                            )
                          }),
                        ),
                      be && t.createElement(ee, { slugs: B.slugs }),
                    )
                  }),
              ),
            ),
          )
        },
        me = de,
        pe = M(23331)
      function ne() {
        return (
          (ne = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var a = 1; a < arguments.length; a++) {
                  var r = arguments[a]
                  for (var f in r) Object.prototype.hasOwnProperty.call(r, f) && (n[f] = r[f])
                }
                return n
              }),
          ne.apply(this, arguments)
        )
      }
      function ie(n, a) {
        return l(n) || c(n, a) || he(n, a) || le()
      }
      function le() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function he(n, a) {
        if (!!n) {
          if (typeof n == 'string') return u(n, a)
          var r = Object.prototype.toString.call(n).slice(8, -1)
          if ((r === 'Object' && n.constructor && (r = n.constructor.name), r === 'Map' || r === 'Set'))
            return Array.from(n)
          if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(n, a)
        }
      }
      function u(n, a) {
        ;(a == null || a > n.length) && (a = n.length)
        for (var r = 0, f = new Array(a); r < a; r++) f[r] = n[r]
        return f
      }
      function c(n, a) {
        var r = n == null ? null : (typeof Symbol != 'undefined' && n[Symbol.iterator]) || n['@@iterator']
        if (r != null) {
          var f = [],
            m = !0,
            p = !1,
            _,
            x
          try {
            for (r = r.call(n); !(m = (_ = r.next()).done) && (f.push(_.value), !(a && f.length === a)); m = !0);
          } catch (D) {
            ;(p = !0), (x = D)
          } finally {
            try {
              !m && r.return != null && r.return()
            } finally {
              if (p) throw x
            }
          }
          return f
        }
      }
      function l(n) {
        if (Array.isArray(n)) return n
      }
      var d = function (a, r) {
          var f = r.toLowerCase().indexOf(a.toLowerCase()),
            m = a.length
          return t.createElement(
            t.Fragment,
            null,
            r.substring(0, f),
            t.createElement('span', { className: '__dumi-default-search-highlight' }, r.substring(f, f + m)),
            r.substring(f + m, r.length),
          )
        },
        g = function () {
          var n = (0, t.useState)(''),
            a = ie(n, 2),
            r = a[0],
            f = a[1],
            m = (0, t.useState)([]),
            p = ie(m, 2),
            _ = p[0],
            x = p[1],
            D = (0, t.useRef)(),
            O = (0, w.useSearch)(r),
            C = t.createElement(
              'svg',
              {
                className: '__dumi-default-search-empty',
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
                'p-id': '2347',
                width: '32',
                height: '32',
              },
              t.createElement('path', {
                d: 'M855.6 427.2H168.5c-12.7 0-24.4 6.9-30.6 18L4.4 684.7C1.5 689.9 0 695.8 0 701.8v287.1c0 19.4 15.7 35.1 35.1 35.1H989c19.4 0 35.1-15.7 35.1-35.1V701.8c0-6-1.5-11.8-4.4-17.1L886.2 445.2c-6.2-11.1-17.9-18-30.6-18zM673.4 695.6c-16.5 0-30.8 11.5-34.3 27.7-12.7 58.5-64.8 102.3-127.2 102.3s-114.5-43.8-127.2-102.3c-3.5-16.1-17.8-27.7-34.3-27.7H119c-26.4 0-43.3-28-31.1-51.4l81.7-155.8c6.1-11.6 18-18.8 31.1-18.8h622.4c13 0 25 7.2 31.1 18.8l81.7 155.8c12.2 23.4-4.7 51.4-31.1 51.4H673.4zM819.9 209.5c-1-1.8-2.1-3.7-3.2-5.5-9.8-16.6-31.1-22.2-47.8-12.6L648.5 261c-17 9.8-22.7 31.6-12.6 48.4 0.9 1.4 1.7 2.9 2.5 4.4 9.5 17 31.2 22.8 48 13L807 257.3c16.7-9.7 22.4-31 12.9-47.8zM375.4 261.1L255 191.6c-16.7-9.6-38-4-47.8 12.6-1.1 1.8-2.1 3.6-3.2 5.5-9.5 16.8-3.8 38.1 12.9 47.8L337.3 327c16.9 9.7 38.6 4 48-13.1 0.8-1.5 1.7-2.9 2.5-4.4 10.2-16.8 4.5-38.6-12.4-48.4zM512 239.3h2.5c19.5 0.3 35.5-15.5 35.5-35.1v-139c0-19.3-15.6-34.9-34.8-35.1h-6.4C489.6 30.3 474 46 474 65.2v139c0 19.5 15.9 35.4 35.5 35.1h2.5z',
              }),
            )
          return (
            (0, t.useEffect)(
              function () {
                Array.isArray(O) ? x(O) : typeof O == 'function' && O('.'.concat(D.current.className))
              },
              [O],
            ),
            t.createElement(
              'div',
              { className: '__dumi-default-search' },
              t.createElement(
                'input',
                ne(
                  { className: '__dumi-default-search-input', type: 'search', ref: D },
                  Array.isArray(O)
                    ? {
                        value: r,
                        onChange: function (z) {
                          return f(z.target.value)
                        },
                      }
                    : {},
                ),
              ),
              t.createElement(
                'ul',
                null,
                _.length > 0 &&
                  _.map(function (y) {
                    var z
                    return t.createElement(
                      'li',
                      {
                        key: y.path,
                        onClick: function () {
                          return f('')
                        },
                      },
                      t.createElement(
                        w.AnchorLink,
                        { to: y.path },
                        ((z = y.parent) === null || z === void 0 ? void 0 : z.title) &&
                          t.createElement('span', null, y.parent.title),
                        d(r, y.title),
                      ),
                    )
                  }),
                _.length === 0 && r && t.createElement('li', { style: { textAlign: 'center' } }, C),
              ),
            )
          )
        },
        v = M(38539)
      function k(n, a) {
        return A(n) || I(n, a) || $(n, a) || j()
      }
      function j() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function $(n, a) {
        if (!!n) {
          if (typeof n == 'string') return P(n, a)
          var r = Object.prototype.toString.call(n).slice(8, -1)
          if ((r === 'Object' && n.constructor && (r = n.constructor.name), r === 'Map' || r === 'Set'))
            return Array.from(n)
          if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return P(n, a)
        }
      }
      function P(n, a) {
        ;(a == null || a > n.length) && (a = n.length)
        for (var r = 0, f = new Array(a); r < a; r++) f[r] = n[r]
        return f
      }
      function I(n, a) {
        var r = n == null ? null : (typeof Symbol != 'undefined' && n[Symbol.iterator]) || n['@@iterator']
        if (r != null) {
          var f = [],
            m = !0,
            p = !1,
            _,
            x
          try {
            for (r = r.call(n); !(m = (_ = r.next()).done) && (f.push(_.value), !(a && f.length === a)); m = !0);
          } catch (D) {
            ;(p = !0), (x = D)
          } finally {
            try {
              !m && r.return != null && r.return()
            } finally {
              if (p) throw x
            }
          }
          return f
        }
      }
      function A(n) {
        if (Array.isArray(n)) return n
      }
      var S = function (a) {
          var r = a.darkSwitch,
            f = a.onDarkSwitchClick,
            m = a.isSideMenu,
            p = ['dark', 'light', 'auto'],
            _ = (0, w.usePrefersColor)(),
            x = k(_, 2),
            D = x[0],
            O = x[1],
            C = D,
            y = t.createElement(
              'svg',
              {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
                'p-id': '4026',
                width: '22',
                height: '22',
              },
              t.createElement('path', {
                d: 'M915.2 476.16h-43.968c-24.704 0-44.736 16-44.736 35.84s20.032 35.904 44.736 35.904H915.2c24.768 0 44.8-16.064 44.8-35.904s-20.032-35.84-44.8-35.84zM512 265.6c-136.704 0-246.464 109.824-246.464 246.4 0 136.704 109.76 246.464 246.464 246.464S758.4 648.704 758.4 512c0-136.576-109.696-246.4-246.4-246.4z m0 425.6c-99.008 0-179.2-80.128-179.2-179.2 0-98.944 80.192-179.2 179.2-179.2S691.2 413.056 691.2 512c0 99.072-80.192 179.2-179.2 179.2zM197.44 512c0-19.84-19.136-35.84-43.904-35.84H108.8c-24.768 0-44.8 16-44.8 35.84s20.032 35.904 44.8 35.904h44.736c24.768 0 43.904-16.064 43.904-35.904zM512 198.464c19.776 0 35.84-20.032 35.84-44.8v-44.8C547.84 84.032 531.84 64 512 64s-35.904 20.032-35.904 44.8v44.8c0 24.768 16.128 44.864 35.904 44.864z m0 627.136c-19.776 0-35.904 20.032-35.904 44.8v44.736C476.096 940.032 492.16 960 512 960s35.84-20.032 35.84-44.8v-44.736c0-24.768-16.064-44.864-35.84-44.864z m329.92-592.832c17.472-17.536 20.288-43.072 6.4-57.024-14.016-14.016-39.488-11.2-57.024 6.336-4.736 4.864-26.496 26.496-31.36 31.36-17.472 17.472-20.288 43.008-6.336 57.024 13.952 14.016 39.488 11.2 57.024-6.336 4.8-4.864 26.496-26.56 31.296-31.36zM213.376 759.936c-4.864 4.8-26.56 26.624-31.36 31.36-17.472 17.472-20.288 42.944-6.4 56.96 14.016 13.952 39.552 11.2 57.024-6.336 4.8-4.736 26.56-26.496 31.36-31.36 17.472-17.472 20.288-43.008 6.336-56.96-14.016-13.952-39.552-11.072-56.96 6.336z m19.328-577.92c-17.536-17.536-43.008-20.352-57.024-6.336-14.08 14.016-11.136 39.488 6.336 57.024 4.864 4.864 26.496 26.56 31.36 31.424 17.536 17.408 43.008 20.288 56.96 6.336 14.016-14.016 11.264-39.488-6.336-57.024-4.736-4.864-26.496-26.56-31.296-31.424z m527.168 628.608c4.864 4.864 26.624 26.624 31.36 31.424 17.536 17.408 43.072 20.224 57.088 6.336 13.952-14.016 11.072-39.552-6.4-57.024-4.864-4.8-26.56-26.496-31.36-31.36-17.472-17.408-43.072-20.288-57.024-6.336-13.952 14.016-11.008 39.488 6.336 56.96z',
                'p-id': '4027',
              }),
            ),
            z = t.createElement(
              'svg',
              {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
                'p-id': '3854',
                width: '22',
                height: '22',
              },
              t.createElement('path', {
                d: 'M991.816611 674.909091a69.166545 69.166545 0 0 0-51.665455-23.272727 70.795636 70.795636 0 0 0-27.438545 5.585454A415.674182 415.674182 0 0 1 754.993338 698.181818c-209.594182 0-393.472-184.785455-393.472-395.636363 0-52.363636 38.539636-119.621818 69.515637-173.614546 4.887273-8.610909 9.634909-16.756364 14.103272-24.901818A69.818182 69.818182 0 0 0 384.631156 0a70.842182 70.842182 0 0 0-27.438545 5.585455C161.678429 90.298182 14.362065 307.898182 14.362065 512c0 282.298182 238.824727 512 532.38691 512a522.286545 522.286545 0 0 0 453.957818-268.334545A69.818182 69.818182 0 0 0 991.816611 674.909091zM546.679156 954.181818c-248.785455 0-462.941091-192-462.941091-442.181818 0-186.647273 140.637091-372.829091 300.939637-442.181818-36.817455 65.629091-92.578909 151.970909-92.578909 232.727273 0 250.181818 214.109091 465.454545 462.917818 465.454545a488.331636 488.331636 0 0 0 185.181091-46.545455 453.003636 453.003636 0 0 1-393.565091 232.727273z m103.656728-669.323636l-14.266182 83.781818a34.909091 34.909091 0 0 0 50.362182 36.770909l74.775272-39.563636 74.752 39.563636a36.142545 36.142545 0 0 0 16.174546 3.956364 34.909091 34.909091 0 0 0 34.210909-40.727273l-14.289455-83.781818 60.509091-59.345455a35.025455 35.025455 0 0 0-19.223272-59.578182l-83.61891-12.101818-37.376-76.101818a34.56 34.56 0 0 0-62.254545 0l-37.376 76.101818-83.618909 12.101818a34.909091 34.909091 0 0 0-19.246546 59.578182z m70.423272-64.698182a34.280727 34.280727 0 0 0 26.135273-19.083636l14.312727-29.090909 14.336 29.090909a34.257455 34.257455 0 0 0 26.135273 19.083636l32.046546 4.887273-23.272728 22.574545a35.234909 35.234909 0 0 0-10.007272 30.952727l5.46909 32.116364-28.625454-15.127273a34.490182 34.490182 0 0 0-32.302546 0l-28.695272 15.127273 5.469091-32.116364a35.141818 35.141818 0 0 0-9.984-30.952727l-23.272728-22.574545z',
                'p-id': '3855',
              }),
            ),
            T = t.createElement(
              'svg',
              {
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
                'p-id': '11002',
                width: '22',
                height: '22',
              },
              t.createElement('path', {
                d: 'M127.658667 492.885333c0-51.882667 10.24-101.717333 30.378666-149.162666s47.786667-88.064 81.92-122.538667 75.093333-61.781333 122.538667-81.92 96.938667-30.378667 149.162667-30.378667 101.717333 10.24 149.162666 30.378667 88.405333 47.786667 122.88 81.92 61.781333 75.093333 81.92 122.538667 30.378667 96.938667 30.378667 149.162666-10.24 101.717333-30.378667 149.162667-47.786667 88.405333-81.92 122.88-75.093333 61.781333-122.88 81.92-97.28 30.378667-149.162666 30.378667-101.717333-10.24-149.162667-30.378667-88.064-47.786667-122.538667-81.92-61.781333-75.093333-81.92-122.88-30.378667-96.938667-30.378666-149.162667z m329.045333 0c0 130.048 13.994667 244.394667 41.984 343.381334h12.970667c46.762667 0 91.136-9.216 133.461333-27.306667s78.848-42.666667 109.568-73.386667 54.954667-67.242667 73.386667-109.568 27.306667-86.698667 27.306666-133.461333c0-46.421333-9.216-90.794667-27.306666-133.12s-42.666667-78.848-73.386667-109.568-67.242667-54.954667-109.568-73.386667-86.698667-27.306667-133.461333-27.306666h-11.605334c-28.672 123.562667-43.349333 237.909333-43.349333 343.722666z',
                'p-id': '11003',
              }),
            ),
            te = p.filter(function (b) {
              return b !== C
            }),
            B = function (N, Z) {
              !m && f && f(N), Z !== C && O(Z)
            },
            Y = function (N) {
              switch (N) {
                case 'dark':
                  return t.createElement(
                    'button',
                    {
                      key: 'dumi-dark-btn-moon',
                      title: 'Dark theme',
                      onClick: function (K) {
                        return B(K, N)
                      },
                      className: '__dumi-default-dark-moon '.concat(N === C ? '__dumi-default-dark-switch-active' : ''),
                    },
                    z,
                  )
                case 'light':
                  return t.createElement(
                    'button',
                    {
                      key: 'dumi-dark-btn-sun',
                      title: 'Light theme',
                      onClick: function (K) {
                        return B(K, N)
                      },
                      className: '__dumi-default-dark-sun '.concat(N === C ? '__dumi-default-dark-switch-active' : ''),
                    },
                    y,
                  )
                case 'auto':
                  return t.createElement(
                    'button',
                    {
                      key: 'dumi-dark-btn-auto',
                      title: 'Default to system',
                      onClick: function (K) {
                        return B(K, N)
                      },
                      className: '__dumi-default-dark-auto '.concat(N === C ? '__dumi-default-dark-switch-active' : ''),
                    },
                    T,
                  )
                default:
              }
            }
          return t.createElement(
            'div',
            { className: '__dumi-default-dark' },
            t.createElement(
              'div',
              { className: '__dumi-default-dark-switch '.concat(!m && r ? '__dumi-default-dark-switch-open' : '') },
              m
                ? p.map(function (b) {
                    return Y(b)
                  })
                : Y(C),
            ),
            !m &&
              r &&
              t.createElement(
                'div',
                { className: '__dumi-default-dark-switch-list' },
                te.map(function (b) {
                  return Y(b)
                }),
              ),
          )
        },
        F = S,
        e = M(60376)
      function i(n, a) {
        return W(n) || L(n, a) || s(n, a) || o()
      }
      function o() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function s(n, a) {
        if (!!n) {
          if (typeof n == 'string') return h(n, a)
          var r = Object.prototype.toString.call(n).slice(8, -1)
          if ((r === 'Object' && n.constructor && (r = n.constructor.name), r === 'Map' || r === 'Set'))
            return Array.from(n)
          if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return h(n, a)
        }
      }
      function h(n, a) {
        ;(a == null || a > n.length) && (a = n.length)
        for (var r = 0, f = new Array(a); r < a; r++) f[r] = n[r]
        return f
      }
      function L(n, a) {
        var r = n == null ? null : (typeof Symbol != 'undefined' && n[Symbol.iterator]) || n['@@iterator']
        if (r != null) {
          var f = [],
            m = !0,
            p = !1,
            _,
            x
          try {
            for (r = r.call(n); !(m = (_ = r.next()).done) && (f.push(_.value), !(a && f.length === a)); m = !0);
          } catch (D) {
            ;(p = !0), (x = D)
          } finally {
            try {
              !m && r.return != null && r.return()
            } finally {
              if (p) throw x
            }
          }
          return f
        }
      }
      function W(n) {
        if (Array.isArray(n)) return n
      }
      var H = function (a) {
          return t.createElement(
            t.Fragment,
            null,
            t.createElement(
              'div',
              { className: '__dumi-default-layout-hero' },
              a.image && t.createElement('img', { src: a.image }),
              t.createElement('h1', null, a.title),
              t.createElement('div', { dangerouslySetInnerHTML: { __html: a.desc } }),
              a.actions &&
                a.actions.map(function (r) {
                  return t.createElement(
                    w.Link,
                    { to: r.link, key: r.text },
                    t.createElement('button', { type: 'button' }, r.text),
                  )
                }),
            ),
          )
        },
        E = function (a) {
          return t.createElement(
            'div',
            { className: '__dumi-default-layout-features' },
            a.map(function (r) {
              return t.createElement(
                'dl',
                { key: r.title, style: { backgroundImage: r.icon ? 'url('.concat(r.icon, ')') : void 0 } },
                r.link
                  ? t.createElement(w.Link, { to: r.link }, t.createElement('dt', null, r.title))
                  : t.createElement('dt', null, r.title),
                t.createElement('dd', { dangerouslySetInnerHTML: { __html: r.desc } }),
              )
            }),
          )
        },
        V = function (a) {
          var r,
            f,
            m = a.children,
            p = a.location,
            _ = (0, t.useContext)(w.context),
            x = _.config,
            D = x.mode,
            O = x.repository,
            C = _.nav,
            y = _.meta,
            z = _.locale,
            T = O.url,
            te = O.branch,
            B = O.platform,
            Y = (0, t.useState)(!0),
            b = i(Y, 2),
            N = b[0],
            Z = b[1],
            K = (0, t.useState)(!1),
            be = i(K, 2),
            ke = be[0],
            J = be[1],
            Se = D === 'site',
            ve = Se && y.hero,
            ye = Se && y.features,
            De = y.sidemenu !== !1 && !ve && !ye && !y.gapless,
            Pe =
              !ve &&
              !ye &&
              Boolean((r = y.slugs) === null || r === void 0 ? void 0 : r.length) &&
              (y.toc === 'content' || y.toc === void 0) &&
              !y.gapless,
            Ae = /^zh|cn$/i.test(z),
            Ce = new Date(y.updatedTime),
            Ie = ''
              .concat(Ce.toLocaleDateString([], { hour12: !1 }), ' ')
              .concat(Ce.toLocaleTimeString([], { hour12: !1 })),
            Oe =
              { github: 'GitHub', gitlab: 'GitLab' }[
                ((f = (T || '').match(/(github|gitlab)/)) === null || f === void 0 ? void 0 : f[1]) || 'nothing'
              ] || B
          return t.createElement(
            'div',
            {
              className: '__dumi-default-layout',
              'data-route': p.pathname,
              'data-show-sidemenu': String(De),
              'data-show-slugs': String(Pe),
              'data-site-mode': Se,
              'data-gapless': String(!!y.gapless),
              onClick: function () {
                J(!1), !N && Z(!0)
              },
            },
            t.createElement(q, {
              location: p,
              navPrefix: t.createElement(g, null),
              darkPrefix: t.createElement(F, {
                darkSwitch: ke,
                onDarkSwitchClick: function (xe) {
                  J(function (Le) {
                    return !Le
                  }),
                    xe.stopPropagation()
                },
                isSideMenu: !1,
              }),
              onMobileMenuClick: function (xe) {
                Z(function (Le) {
                  return !Le
                }),
                  xe.stopPropagation()
              },
            }),
            t.createElement(me, {
              darkPrefix: t.createElement(F, { darkSwitch: ke, isSideMenu: !0 }),
              mobileMenuCollapsed: N,
              location: p,
            }),
            Pe && t.createElement(ee, { slugs: y.slugs, className: '__dumi-default-layout-toc' }),
            ve && H(y.hero),
            ye && E(y.features),
            t.createElement(
              'div',
              { className: '__dumi-default-layout-content' },
              m,
              !ve &&
                !ye &&
                y.filePath &&
                !y.gapless &&
                t.createElement(
                  'div',
                  { className: '__dumi-default-layout-footer-meta' },
                  Oe &&
                    t.createElement(
                      w.Link,
                      { to: ''.concat(T, '/edit/').concat(te, '/').concat(y.filePath) },
                      Ae ? '\u5728 '.concat(Oe, ' \u4E0A\u7F16\u8F91\u6B64\u9875') : 'Edit this doc on '.concat(Oe),
                    ),
                  t.createElement(
                    'span',
                    { 'data-updated-text': Ae ? '\u6700\u540E\u66F4\u65B0\u65F6\u95F4\uFF1A' : 'Last update: ' },
                    Ie,
                  ),
                ),
              (ve || ye) &&
                y.footer &&
                t.createElement('div', {
                  className: '__dumi-default-layout-footer',
                  dangerouslySetInnerHTML: { __html: y.footer },
                }),
            ),
          )
        },
        X = V
    },
    79004: function (we, Q, M) {
      'use strict'
      M.d(Q, {
        D8: function () {
          return j
        },
      })
      var t = M(67294),
        w = M(67161)
      function R(e, i) {
        var o = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e)
          i &&
            (s = s.filter(function (h) {
              return Object.getOwnPropertyDescriptor(e, h).enumerable
            })),
            o.push.apply(o, s)
        }
        return o
      }
      function U(e) {
        for (var i = 1; i < arguments.length; i++) {
          var o = arguments[i] != null ? arguments[i] : {}
          i % 2
            ? R(Object(o), !0).forEach(function (s) {
                ue(e, s, o[s])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : R(Object(o)).forEach(function (s) {
                Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(o, s))
              })
        }
        return e
      }
      function G(e) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (G = function (i) {
                return typeof i
              })
            : (G = function (i) {
                return i && typeof Symbol == 'function' && i.constructor === Symbol && i !== Symbol.prototype
                  ? 'symbol'
                  : typeof i
              }),
          G(e)
        )
      }
      function re(e, i, o, s, h, L, W) {
        try {
          var H = e[L](W),
            E = H.value
        } catch (V) {
          o(V)
          return
        }
        H.done ? i(E) : Promise.resolve(E).then(s, h)
      }
      function Ee(e) {
        return function () {
          var i = this,
            o = arguments
          return new Promise(function (s, h) {
            var L = e.apply(i, o)
            function W(E) {
              re(L, s, h, W, H, 'next', E)
            }
            function H(E) {
              re(L, s, h, W, H, 'throw', E)
            }
            W(void 0)
          })
        }
      }
      function ce(e, i) {
        if (!(e instanceof i)) throw new TypeError('Cannot call a class as a function')
      }
      function q(e, i) {
        for (var o = 0; o < i.length; o++) {
          var s = i[o]
          ;(s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            'value' in s && (s.writable = !0),
            Object.defineProperty(e, s.key, s)
        }
      }
      function ge(e, i, o) {
        return i && q(e.prototype, i), o && q(e, o), e
      }
      function ue(e, i, o) {
        return (
          i in e
            ? Object.defineProperty(e, i, { value: o, enumerable: !0, configurable: !0, writable: !0 })
            : (e[i] = o),
          e
        )
      }
      function ae(e) {
        return se(e) || fe(e) || oe(e) || _e()
      }
      function se(e) {
        if (Array.isArray(e)) return e
      }
      function fe(e) {
        if ((typeof Symbol != 'undefined' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
          return Array.from(e)
      }
      function oe(e, i) {
        if (!!e) {
          if (typeof e == 'string') return ee(e, i)
          var o = Object.prototype.toString.call(e).slice(8, -1)
          if ((o === 'Object' && e.constructor && (o = e.constructor.name), o === 'Map' || o === 'Set'))
            return Array.from(e)
          if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return ee(e, i)
        }
      }
      function ee(e, i) {
        ;(i == null || i > e.length) && (i = e.length)
        for (var o = 0, s = new Array(i); o < i; o++) s[o] = e[o]
        return s
      }
      function _e() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function de(e, i) {
        var o = (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator']
        if (!o) {
          if (Array.isArray(e) || (o = oe(e)) || (i && e && typeof e.length == 'number')) {
            o && (e = o)
            var s = 0,
              h = function () {}
            return {
              s: h,
              n: function () {
                return s >= e.length ? { done: !0 } : { done: !1, value: e[s++] }
              },
              e: function (E) {
                throw E
              },
              f: h,
            }
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
        }
        var L = !0,
          W = !1,
          H
        return {
          s: function () {
            o = o.call(e)
          },
          n: function () {
            var E = o.next()
            return (L = E.done), E
          },
          e: function (E) {
            ;(W = !0), (H = E)
          },
          f: function () {
            try {
              !L && o.return != null && o.return()
            } finally {
              if (W) throw H
            }
          },
        }
      }
      var me = (0, t.createContext)(null),
        pe = [],
        ne = [],
        ie = !1
      function le(e) {
        var i = e(),
          o = { loading: !0, loaded: null, error: null }
        return (
          (o.promise = i
            .then(function (s) {
              return (o.loading = !1), (o.loaded = s), s
            })
            .catch(function (s) {
              throw ((o.loading = !1), (o.error = s), s)
            })),
          o
        )
      }
      function he(e) {
        var i = { loading: !1, loaded: {}, error: null },
          o = []
        try {
          Object.keys(e).forEach(function (s) {
            var h = le(e[s])
            h.loading ? (i.loading = !0) : ((i.loaded[s] = h.loaded), (i.error = h.error)),
              o.push(h.promise),
              h.promise
                .then(function (L) {
                  i.loaded[s] = L
                })
                .catch(function (L) {
                  i.error = L
                })
          })
        } catch (s) {
          i.error = s
        }
        return (
          (i.promise = Promise.all(o)
            .then(function (s) {
              return (i.loading = !1), s
            })
            .catch(function (s) {
              throw ((i.loading = !1), s)
            })),
          i
        )
      }
      function u(e) {
        return e && e.__esModule ? e.default : e
      }
      function c(e, i) {
        return (0, t.createElement)(u(e), i)
      }
      function l(e, i) {
        var o = Object.assign(
            { loader: null, loading: null, delay: 200, timeout: null, render: c, webpack: null, modules: null },
            i,
          ),
          s = null
        function h() {
          if (!s) {
            var E = new d(e, o)
            s = {
              getCurrentValue: E.getCurrentValue.bind(E),
              subscribe: E.subscribe.bind(E),
              retry: E.retry.bind(E),
              promise: E.promise.bind(E),
            }
          }
          return s.promise()
        }
        if (
          (typeof window == 'undefined' && pe.push(h),
          !ie && typeof window != 'undefined' && typeof o.webpack == 'function')
        ) {
          var L = o.webpack()
          ne.push(function (E) {
            var V = de(L),
              X
            try {
              for (V.s(); !(X = V.n()).done; ) {
                var n = X.value
                if (E.indexOf(n) !== -1) return h()
              }
            } catch (a) {
              V.e(a)
            } finally {
              V.f()
            }
          })
        }
        var W = function (V, X) {
            h()
            var n = (0, t.useContext)(me),
              a = (0, w.useSubscription)(s)
            return (
              (0, t.useImperativeHandle)(X, function () {
                return { retry: s.retry }
              }),
              n &&
                Array.isArray(o.modules) &&
                o.modules.forEach(function (r) {
                  n(r)
                }),
              a.loading || a.error
                ? (0, t.createElement)(o.loading, {
                    isLoading: a.loading,
                    pastDelay: a.pastDelay,
                    timedOut: a.timedOut,
                    error: a.error,
                    retry: s.retry,
                  })
                : a.loaded
                ? o.render(a.loaded, V)
                : null
            )
          },
          H = (0, t.forwardRef)(W)
        return (
          (H.preload = function () {
            return h()
          }),
          (H.displayName = 'LoadableComponent'),
          H
        )
      }
      var d = (function () {
        function e(i, o) {
          ce(this, e),
            (this._loadFn = i),
            (this._opts = o),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry()
        }
        return (
          ge(e, [
            {
              key: 'promise',
              value: function () {
                return this._res.promise
              },
            },
            {
              key: 'retry',
              value: function () {
                var o = this
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 })
                var s = this._res,
                  h = this._opts
                s.loading &&
                  (typeof h.delay == 'number' &&
                    (h.delay === 0
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          o._update({ pastDelay: !0 })
                        }, h.delay))),
                  typeof h.timeout == 'number' &&
                    (this._timeout = setTimeout(function () {
                      o._update({ timedOut: !0 })
                    }, h.timeout))),
                  this._res.promise
                    .then(function () {
                      o._update(), o._clearTimeouts()
                    })
                    .catch(function (L) {
                      o._update(), o._clearTimeouts()
                    }),
                  this._update({})
              },
            },
            {
              key: '_update',
              value: function (o) {
                ;(this._state = U(U({}, this._state), o)),
                  this._callbacks.forEach(function (s) {
                    return s()
                  })
              },
            },
            {
              key: '_clearTimeouts',
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout)
              },
            },
            {
              key: 'getCurrentValue',
              value: function () {
                return U(
                  U({}, this._state),
                  {},
                  { error: this._res.error, loaded: this._res.loaded, loading: this._res.loading },
                )
              },
            },
            {
              key: 'subscribe',
              value: function (o) {
                var s = this
                return (
                  this._callbacks.add(o),
                  function () {
                    s._callbacks.delete(o)
                  }
                )
              },
            },
          ]),
          e
        )
      })()
      function g(e) {
        return l(le, e)
      }
      function v(e) {
        if (typeof e.render != 'function') throw new Error('LoadableMap requires a `render(loaded, props)` function')
        return l(he, e)
      }
      g.Map = v
      function k(e, i) {
        for (var o = []; e.length; ) {
          var s = e.pop()
          o.push(s(i))
        }
        return Promise.all(o).then(function () {
          if (e.length) return k(e, i)
        })
      }
      ;(g.preloadAll = function () {
        return new Promise(function (e, i) {
          k(pe).then(e, i)
        })
      }),
        (g.preloadReady = function () {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
          return new Promise(function (i) {
            var o = function () {
              return (ie = !0), i()
            }
            k(ne, e).then(o, o)
          })
        }),
        typeof window != 'undefined' && (window.__NEXT_PRELOADREADY = g.preloadReady)
      function j(e) {
        var i = g,
          o = {
            loading: function (h) {
              var L = h.error,
                W = h.isLoading
              return (0, t.createElement)('p', null, 'loading...')
            },
          }
        if (typeof e == 'function') o.loader = e
        else if (G(e) === 'object') o = U(U({}, o), e)
        else throw new Error('Unexpect arguments '.concat(e))
        return i(o)
      }
      function $(e, i) {
        if (!e) throw new Error(i)
      }
      var P = function () {
          return (
            typeof window != 'undefined' &&
            typeof window.document != 'undefined' &&
            typeof window.document.createElement != 'undefined'
          )
        },
        I
      ;(function (e) {
        ;(e.compose = 'compose'), (e.modify = 'modify'), (e.event = 'event')
      })(I || (I = {}))
      function A(e) {
        var i = e.fns,
          o = e.args
        if (i.length === 1) return i[0]
        var s = i.pop()
        return i.reduce(function (h, L) {
          return function () {
            return L(h, o)
          }
        }, s)
      }
      function S(e) {
        return !!e && G(e) === 'object' && typeof e.then == 'function'
      }
      var F = null
    },
  },
])
