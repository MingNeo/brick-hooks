;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [1769],
  {
    67866: function (K, g, T) {
      'use strict'
      T.r(g),
        T.d(g, {
          ApplyPluginsType: function () {
            return oe
          },
          Link: function () {
            return u
          },
          MemoryRouter: function () {
            return A.VA
          },
          NavLink: function () {
            return o
          },
          Plugin: function () {
            return Le
          },
          Prompt: function () {
            return A.NL
          },
          Redirect: function () {
            return A.l_
          },
          Route: function () {
            return A.AW
          },
          Router: function () {
            return A.F0
          },
          StaticRouter: function () {
            return A.gx
          },
          Switch: function () {
            return A.rs
          },
          __RouterContext: function () {
            return A.s6
          },
          createBrowserHistory: function () {
            return w.lX
          },
          createHashHistory: function () {
            return w.q_
          },
          createMemoryHistory: function () {
            return w.PP
          },
          dynamic: function () {
            return Re
          },
          isBrowser: function () {
            return Ce
          },
          matchPath: function () {
            return A.LX
          },
          useHistory: function () {
            return A.k6
          },
          useLocation: function () {
            return A.TH
          },
          useParams: function () {
            return A.UO
          },
          useRouteMatch: function () {
            return A.$B
          },
          withRouter: function () {
            return A.EN
          },
        })
      var w = T(7962),
        A = T(1201)
      function R(l, y) {
        return (
          (R = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (v, P) {
                return (v.__proto__ = P), v
              }),
          R(l, y)
        )
      }
      function j(l, y) {
        ;(l.prototype = Object.create(y.prototype)), (l.prototype.constructor = l), R(l, y)
      }
      var E = T(67294)
      function C() {
        return (
          (C = Object.assign
            ? Object.assign.bind()
            : function (l) {
                for (var y = 1; y < arguments.length; y++) {
                  var p = arguments[y]
                  for (var v in p) Object.prototype.hasOwnProperty.call(p, v) && (l[v] = p[v])
                }
                return l
              }),
          C.apply(this, arguments)
        )
      }
      function D(l, y) {
        if (l == null) return {}
        var p = {},
          v = Object.keys(l),
          P,
          I
        for (I = 0; I < v.length; I++) (P = v[I]), !(y.indexOf(P) >= 0) && (p[P] = l[P])
        return p
      }
      var k = T(2177),
        m = (function (l) {
          j(y, l)
          function y() {
            for (var v, P = arguments.length, I = new Array(P), $ = 0; $ < P; $++) I[$] = arguments[$]
            return (v = l.call.apply(l, [this].concat(I)) || this), (v.history = (0, w.lX)(v.props)), v
          }
          var p = y.prototype
          return (
            (p.render = function () {
              return E.createElement(A.F0, { history: this.history, children: this.props.children })
            }),
            y
          )
        })(E.Component),
        f = (function (l) {
          j(y, l)
          function y() {
            for (var v, P = arguments.length, I = new Array(P), $ = 0; $ < P; $++) I[$] = arguments[$]
            return (v = l.call.apply(l, [this].concat(I)) || this), (v.history = (0, w.q_)(v.props)), v
          }
          var p = y.prototype
          return (
            (p.render = function () {
              return E.createElement(A.F0, { history: this.history, children: this.props.children })
            }),
            y
          )
        })(E.Component),
        c = function (y, p) {
          return typeof y == 'function' ? y(p) : y
        },
        r = function (y, p) {
          return typeof y == 'string' ? (0, w.ob)(y, null, null, p) : y
        },
        a = function (y) {
          return y
        },
        n = E.forwardRef
      typeof n == 'undefined' && (n = a)
      function t(l) {
        return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey)
      }
      var e = n(function (l, y) {
          var p = l.innerRef,
            v = l.navigate,
            P = l.onClick,
            I = D(l, ['innerRef', 'navigate', 'onClick']),
            $ = I.target,
            H = C({}, I, {
              onClick: function (W) {
                try {
                  P && P(W)
                } catch (z) {
                  throw (W.preventDefault(), z)
                }
                !W.defaultPrevented && W.button === 0 && (!$ || $ === '_self') && !t(W) && (W.preventDefault(), v())
              },
            })
          return a !== n ? (H.ref = y || p) : (H.ref = p), E.createElement('a', H)
        }),
        u = n(function (l, y) {
          var p = l.component,
            v = p === void 0 ? e : p,
            P = l.replace,
            I = l.to,
            $ = l.innerRef,
            H = D(l, ['component', 'replace', 'to', 'innerRef'])
          return E.createElement(A.s6.Consumer, null, function (M) {
            M || (0, k.Z)(!1)
            var W = M.history,
              z = r(c(I, M.location), M.location),
              J = z ? W.createHref(z) : '',
              B = C({}, H, {
                href: J,
                navigate: function () {
                  var ye = c(I, M.location),
                    Z = P ? W.replace : W.push
                  Z(ye)
                },
              })
            return a !== n ? (B.ref = y || $) : (B.innerRef = $), E.createElement(v, B)
          })
        })
      if (!1) var i, h
      var _ = function (y) {
          return y
        },
        b = E.forwardRef
      typeof b == 'undefined' && (b = _)
      function d() {
        for (var l = arguments.length, y = new Array(l), p = 0; p < l; p++) y[p] = arguments[p]
        return y
          .filter(function (v) {
            return v
          })
          .join(' ')
      }
      var o = b(function (l, y) {
        var p = l['aria-current'],
          v = p === void 0 ? 'page' : p,
          P = l.activeClassName,
          I = P === void 0 ? 'active' : P,
          $ = l.activeStyle,
          H = l.className,
          M = l.exact,
          W = l.isActive,
          z = l.location,
          J = l.sensitive,
          B = l.strict,
          Q = l.style,
          ye = l.to,
          Z = l.innerRef,
          Me = D(l, [
            'aria-current',
            'activeClassName',
            'activeStyle',
            'className',
            'exact',
            'isActive',
            'location',
            'sensitive',
            'strict',
            'style',
            'to',
            'innerRef',
          ])
        return E.createElement(A.s6.Consumer, null, function (Oe) {
          Oe || (0, k.Z)(!1)
          var me = z || Oe.location,
            Ae = r(c(ye, me), me),
            Se = Ae.pathname,
            Te = Se && Se.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
            Pe = Te ? (0, A.LX)(me.pathname, { path: Te, exact: M, sensitive: J, strict: B }) : null,
            be = !!(W ? W(Pe, me) : Pe),
            De = be ? d(H, I) : H,
            $e = be ? C({}, Q, {}, $) : Q,
            _e = C({ 'aria-current': (be && v) || null, className: De, style: $e, to: Ae }, Me)
          return _ !== b ? (_e.ref = y || Z) : (_e.innerRef = Z), E.createElement(u, _e)
        })
      })
      if (!1) var s
      var O = T(67161)
      function S(l, y) {
        var p = Object.keys(l)
        if (Object.getOwnPropertySymbols) {
          var v = Object.getOwnPropertySymbols(l)
          y &&
            (v = v.filter(function (P) {
              return Object.getOwnPropertyDescriptor(l, P).enumerable
            })),
            p.push.apply(p, v)
        }
        return p
      }
      function L(l) {
        for (var y = 1; y < arguments.length; y++) {
          var p = arguments[y] != null ? arguments[y] : {}
          y % 2
            ? S(Object(p), !0).forEach(function (v) {
                Y(l, v, p[v])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(p))
            : S(Object(p)).forEach(function (v) {
                Object.defineProperty(l, v, Object.getOwnPropertyDescriptor(p, v))
              })
        }
        return l
      }
      function x(l) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (x = function (y) {
                return typeof y
              })
            : (x = function (y) {
                return y && typeof Symbol == 'function' && y.constructor === Symbol && y !== Symbol.prototype
                  ? 'symbol'
                  : typeof y
              }),
          x(l)
        )
      }
      function N(l, y, p, v, P, I, $) {
        try {
          var H = l[I]($),
            M = H.value
        } catch (W) {
          p(W)
          return
        }
        H.done ? y(M) : Promise.resolve(M).then(v, P)
      }
      function U(l) {
        return function () {
          var y = this,
            p = arguments
          return new Promise(function (v, P) {
            var I = l.apply(y, p)
            function $(M) {
              N(I, v, P, $, H, 'next', M)
            }
            function H(M) {
              N(I, v, P, $, H, 'throw', M)
            }
            $(void 0)
          })
        }
      }
      function F(l, y) {
        if (!(l instanceof y)) throw new TypeError('Cannot call a class as a function')
      }
      function G(l, y) {
        for (var p = 0; p < y.length; p++) {
          var v = y[p]
          ;(v.enumerable = v.enumerable || !1),
            (v.configurable = !0),
            'value' in v && (v.writable = !0),
            Object.defineProperty(l, v.key, v)
        }
      }
      function V(l, y, p) {
        return y && G(l.prototype, y), p && G(l, p), l
      }
      function Y(l, y, p) {
        return (
          y in l
            ? Object.defineProperty(l, y, { value: p, enumerable: !0, configurable: !0, writable: !0 })
            : (l[y] = p),
          l
        )
      }
      function ee(l) {
        return te(l) || he(l) || fe(l) || ae()
      }
      function te(l) {
        if (Array.isArray(l)) return l
      }
      function he(l) {
        if ((typeof Symbol != 'undefined' && l[Symbol.iterator] != null) || l['@@iterator'] != null)
          return Array.from(l)
      }
      function fe(l, y) {
        if (!!l) {
          if (typeof l == 'string') return ue(l, y)
          var p = Object.prototype.toString.call(l).slice(8, -1)
          if ((p === 'Object' && l.constructor && (p = l.constructor.name), p === 'Map' || p === 'Set'))
            return Array.from(l)
          if (p === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)) return ue(l, y)
        }
      }
      function ue(l, y) {
        ;(y == null || y > l.length) && (y = l.length)
        for (var p = 0, v = new Array(y); p < y; p++) v[p] = l[p]
        return v
      }
      function ae() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function le(l, y) {
        var p = (typeof Symbol != 'undefined' && l[Symbol.iterator]) || l['@@iterator']
        if (!p) {
          if (Array.isArray(l) || (p = fe(l)) || (y && l && typeof l.length == 'number')) {
            p && (l = p)
            var v = 0,
              P = function () {}
            return {
              s: P,
              n: function () {
                return v >= l.length ? { done: !0 } : { done: !1, value: l[v++] }
              },
              e: function (M) {
                throw M
              },
              f: P,
            }
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
        }
        var I = !0,
          $ = !1,
          H
        return {
          s: function () {
            p = p.call(l)
          },
          n: function () {
            var M = p.next()
            return (I = M.done), M
          },
          e: function (M) {
            ;($ = !0), (H = M)
          },
          f: function () {
            try {
              !I && p.return != null && p.return()
            } finally {
              if ($) throw H
            }
          },
        }
      }
      var ve = (0, E.createContext)(null),
        de = [],
        ie = [],
        X = !1
      function q(l) {
        var y = l(),
          p = { loading: !0, loaded: null, error: null }
        return (
          (p.promise = y
            .then(function (v) {
              return (p.loading = !1), (p.loaded = v), v
            })
            .catch(function (v) {
              throw ((p.loading = !1), (p.error = v), v)
            })),
          p
        )
      }
      function re(l) {
        var y = { loading: !1, loaded: {}, error: null },
          p = []
        try {
          Object.keys(l).forEach(function (v) {
            var P = q(l[v])
            P.loading ? (y.loading = !0) : ((y.loaded[v] = P.loaded), (y.error = P.error)),
              p.push(P.promise),
              P.promise
                .then(function (I) {
                  y.loaded[v] = I
                })
                .catch(function (I) {
                  y.error = I
                })
          })
        } catch (v) {
          y.error = v
        }
        return (
          (y.promise = Promise.all(p)
            .then(function (v) {
              return (y.loading = !1), v
            })
            .catch(function (v) {
              throw ((y.loading = !1), v)
            })),
          y
        )
      }
      function pe(l) {
        return l && l.__esModule ? l.default : l
      }
      function Ee(l, y) {
        return (0, E.createElement)(pe(l), y)
      }
      function we(l, y) {
        var p = Object.assign(
            { loader: null, loading: null, delay: 200, timeout: null, render: Ee, webpack: null, modules: null },
            y,
          ),
          v = null
        function P() {
          if (!v) {
            var M = new je(l, p)
            v = {
              getCurrentValue: M.getCurrentValue.bind(M),
              subscribe: M.subscribe.bind(M),
              retry: M.retry.bind(M),
              promise: M.promise.bind(M),
            }
          }
          return v.promise()
        }
        if (
          (typeof window == 'undefined' && de.push(P),
          !X && typeof window != 'undefined' && typeof p.webpack == 'function')
        ) {
          var I = p.webpack()
          ie.push(function (M) {
            var W = le(I),
              z
            try {
              for (W.s(); !(z = W.n()).done; ) {
                var J = z.value
                if (M.indexOf(J) !== -1) return P()
              }
            } catch (B) {
              W.e(B)
            } finally {
              W.f()
            }
          })
        }
        var $ = function (W, z) {
            P()
            var J = (0, E.useContext)(ve),
              B = (0, O.useSubscription)(v)
            return (
              (0, E.useImperativeHandle)(z, function () {
                return { retry: v.retry }
              }),
              J &&
                Array.isArray(p.modules) &&
                p.modules.forEach(function (Q) {
                  J(Q)
                }),
              B.loading || B.error
                ? (0, E.createElement)(p.loading, {
                    isLoading: B.loading,
                    pastDelay: B.pastDelay,
                    timedOut: B.timedOut,
                    error: B.error,
                    retry: v.retry,
                  })
                : B.loaded
                ? p.render(B.loaded, W)
                : null
            )
          },
          H = (0, E.forwardRef)($)
        return (
          (H.preload = function () {
            return P()
          }),
          (H.displayName = 'LoadableComponent'),
          H
        )
      }
      var je = (function () {
        function l(y, p) {
          F(this, l),
            (this._loadFn = y),
            (this._opts = p),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry()
        }
        return (
          V(l, [
            {
              key: 'promise',
              value: function () {
                return this._res.promise
              },
            },
            {
              key: 'retry',
              value: function () {
                var p = this
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 })
                var v = this._res,
                  P = this._opts
                v.loading &&
                  (typeof P.delay == 'number' &&
                    (P.delay === 0
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          p._update({ pastDelay: !0 })
                        }, P.delay))),
                  typeof P.timeout == 'number' &&
                    (this._timeout = setTimeout(function () {
                      p._update({ timedOut: !0 })
                    }, P.timeout))),
                  this._res.promise
                    .then(function () {
                      p._update(), p._clearTimeouts()
                    })
                    .catch(function (I) {
                      p._update(), p._clearTimeouts()
                    }),
                  this._update({})
              },
            },
            {
              key: '_update',
              value: function (p) {
                ;(this._state = L(L({}, this._state), p)),
                  this._callbacks.forEach(function (v) {
                    return v()
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
                return L(
                  L({}, this._state),
                  {},
                  { error: this._res.error, loaded: this._res.loaded, loading: this._res.loading },
                )
              },
            },
            {
              key: 'subscribe',
              value: function (p) {
                var v = this
                return (
                  this._callbacks.add(p),
                  function () {
                    v._callbacks.delete(p)
                  }
                )
              },
            },
          ]),
          l
        )
      })()
      function ce(l) {
        return we(q, l)
      }
      function ke(l) {
        if (typeof l.render != 'function') throw new Error('LoadableMap requires a `render(loaded, props)` function')
        return we(re, l)
      }
      ce.Map = ke
      function ge(l, y) {
        for (var p = []; l.length; ) {
          var v = l.pop()
          p.push(v(y))
        }
        return Promise.all(p).then(function () {
          if (l.length) return ge(l, y)
        })
      }
      ;(ce.preloadAll = function () {
        return new Promise(function (l, y) {
          ge(de).then(l, y)
        })
      }),
        (ce.preloadReady = function () {
          var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
          return new Promise(function (y) {
            var p = function () {
              return (X = !0), y()
            }
            ge(ie, l).then(p, p)
          })
        }),
        typeof window != 'undefined' && (window.__NEXT_PRELOADREADY = ce.preloadReady)
      function Re(l) {
        var y = ce,
          p = {
            loading: function (P) {
              var I = P.error,
                $ = P.isLoading
              return (0, E.createElement)('p', null, 'loading...')
            },
          }
        if (typeof l == 'function') p.loader = l
        else if (x(l) === 'object') p = L(L({}, p), l)
        else throw new Error('Unexpect arguments '.concat(l))
        return y(p)
      }
      function ne(l, y) {
        if (!l) throw new Error(y)
      }
      var Ce = function () {
          return (
            typeof window != 'undefined' &&
            typeof window.document != 'undefined' &&
            typeof window.document.createElement != 'undefined'
          )
        },
        oe
      ;(function (l) {
        ;(l.compose = 'compose'), (l.modify = 'modify'), (l.event = 'event')
      })(oe || (oe = {}))
      function Ie(l) {
        var y = l.fns,
          p = l.args
        if (y.length === 1) return y[0]
        var v = y.pop()
        return y.reduce(function (P, I) {
          return function () {
            return I(P, p)
          }
        }, v)
      }
      function se(l) {
        return !!l && x(l) === 'object' && typeof l.then == 'function'
      }
      var Le = (function () {
        function l(y) {
          F(this, l),
            (this.validKeys = void 0),
            (this.hooks = {}),
            (this.validKeys = (y == null ? void 0 : y.validKeys) || [])
        }
        return (
          V(l, [
            {
              key: 'register',
              value: function (p) {
                var v = this
                ne(!!p.apply, 'register failed, plugin.apply must supplied'),
                  ne(!!p.path, 'register failed, plugin.path must supplied'),
                  Object.keys(p.apply).forEach(function (P) {
                    ne(
                      v.validKeys.indexOf(P) > -1,
                      'register failed, invalid key '.concat(P, ' from plugin ').concat(p.path, '.'),
                    ),
                      v.hooks[P] || (v.hooks[P] = []),
                      (v.hooks[P] = v.hooks[P].concat(p.apply[P]))
                  })
              },
            },
            {
              key: 'getHooks',
              value: function (p) {
                var v = p.split('.'),
                  P = ee(v),
                  I = P[0],
                  $ = P.slice(1),
                  H = this.hooks[I] || []
                return (
                  $.length &&
                    (H = H.map(function (M) {
                      try {
                        var W = M,
                          z = le($),
                          J
                        try {
                          for (z.s(); !(J = z.n()).done; ) {
                            var B = J.value
                            W = W[B]
                          }
                        } catch (Q) {
                          z.e(Q)
                        } finally {
                          z.f()
                        }
                        return W
                      } catch (Q) {
                        return null
                      }
                    }).filter(Boolean)),
                  H
                )
              },
            },
            {
              key: 'applyPlugins',
              value: function (p) {
                var v = p.key,
                  P = p.type,
                  I = p.initialValue,
                  $ = p.args,
                  H = p.async,
                  M = this.getHooks(v) || []
                switch (($ && ne(x($) === 'object', 'applyPlugins failed, args must be plain object.'), P)) {
                  case oe.modify:
                    return H
                      ? M.reduce(
                          (function () {
                            var W = U(
                              regeneratorRuntime.mark(function z(J, B) {
                                var Q
                                return regeneratorRuntime.wrap(function (Z) {
                                  for (;;)
                                    switch ((Z.prev = Z.next)) {
                                      case 0:
                                        if (
                                          (ne(
                                            typeof B == 'function' || x(B) === 'object' || se(B),
                                            'applyPlugins failed, all hooks for key '.concat(
                                              v,
                                              ' must be function, plain object or Promise.',
                                            ),
                                          ),
                                          !se(J))
                                        ) {
                                          Z.next = 5
                                          break
                                        }
                                        return (Z.next = 4), J
                                      case 4:
                                        J = Z.sent
                                      case 5:
                                        if (typeof B != 'function') {
                                          Z.next = 16
                                          break
                                        }
                                        if (((Q = B(J, $)), !se(Q))) {
                                          Z.next = 13
                                          break
                                        }
                                        return (Z.next = 10), Q
                                      case 10:
                                        return Z.abrupt('return', Z.sent)
                                      case 13:
                                        return Z.abrupt('return', Q)
                                      case 14:
                                        Z.next = 21
                                        break
                                      case 16:
                                        if (!se(B)) {
                                          Z.next = 20
                                          break
                                        }
                                        return (Z.next = 19), B
                                      case 19:
                                        B = Z.sent
                                      case 20:
                                        return Z.abrupt('return', L(L({}, J), B))
                                      case 21:
                                      case 'end':
                                        return Z.stop()
                                    }
                                }, z)
                              }),
                            )
                            return function (z, J) {
                              return W.apply(this, arguments)
                            }
                          })(),
                          se(I) ? I : Promise.resolve(I),
                        )
                      : M.reduce(function (W, z) {
                          return (
                            ne(
                              typeof z == 'function' || x(z) === 'object',
                              'applyPlugins failed, all hooks for key '.concat(v, ' must be function or plain object.'),
                            ),
                            typeof z == 'function' ? z(W, $) : L(L({}, W), z)
                          )
                        }, I)
                  case oe.event:
                    return M.forEach(function (W) {
                      ne(
                        typeof W == 'function',
                        'applyPlugins failed, all hooks for key '.concat(v, ' must be function.'),
                      ),
                        W($)
                    })
                  case oe.compose:
                    return function () {
                      return Ie({ fns: M.concat(I), args: $ })()
                    }
                }
              },
            },
          ]),
          l
        )
      })()
    },
    19661: function (K, g, T) {
      'use strict'
      Object.defineProperty(g, '__esModule', { value: !0 }), (g.getParameters = void 0)
      var w = T(26961)
      function A(j) {
        return w.compressToBase64(j).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
      }
      function R(j) {
        return A(JSON.stringify(j))
      }
      g.getParameters = R
    },
    12662: function (K, g, T) {
      'use strict'
      ;(g.__esModule = !0), (g.getParameters = void 0)
      var w = T(19661)
      g.getParameters = w.getParameters
    },
    735: function (K) {
      'use strict'
      const g = (T, { target: w = document.body } = {}) => {
        const A = document.createElement('textarea'),
          R = document.activeElement
        ;(A.value = T),
          A.setAttribute('readonly', ''),
          (A.style.contain = 'strict'),
          (A.style.position = 'absolute'),
          (A.style.left = '-9999px'),
          (A.style.fontSize = '12pt')
        const j = document.getSelection()
        let E = !1
        j.rangeCount > 0 && (E = j.getRangeAt(0)),
          w.append(A),
          A.select(),
          (A.selectionStart = 0),
          (A.selectionEnd = T.length)
        let C = !1
        try {
          C = document.execCommand('copy')
        } catch (D) {}
        return A.remove(), E && (j.removeAllRanges(), j.addRange(E)), R && R.focus(), C
      }
      ;(K.exports = g), (K.exports.default = g)
    },
    64372: function (K, g, T) {
      'use strict'
      function w(d) {
        return (
          (w =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (o) {
                  return typeof o
                }
              : function (o) {
                  return o && typeof Symbol == 'function' && o.constructor === Symbol && o !== Symbol.prototype
                    ? 'symbol'
                    : typeof o
                }),
          w(d)
        )
      }
      Object.defineProperty(g, '__esModule', { value: !0 }), (g.default = void 0)
      var A = D(T(67294)),
        R = T(67866),
        j = E(T(93096))
      function E(d) {
        return d && d.__esModule ? d : { default: d }
      }
      function C(d) {
        if (typeof WeakMap != 'function') return null
        var o = new WeakMap(),
          s = new WeakMap()
        return (C = function (S) {
          return S ? s : o
        })(d)
      }
      function D(d, o) {
        if (!o && d && d.__esModule) return d
        if (d === null || (w(d) !== 'object' && typeof d != 'function')) return { default: d }
        var s = C(o)
        if (s && s.has(d)) return s.get(d)
        var O = {},
          S = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var L in d)
          if (L !== 'default' && Object.prototype.hasOwnProperty.call(d, L)) {
            var x = S ? Object.getOwnPropertyDescriptor(d, L) : null
            x && (x.get || x.set) ? Object.defineProperty(O, L, x) : (O[L] = d[L])
          }
        return (O.default = d), s && s.set(d, O), O
      }
      function k() {
        return (
          (k = Object.assign
            ? Object.assign.bind()
            : function (d) {
                for (var o = 1; o < arguments.length; o++) {
                  var s = arguments[o]
                  for (var O in s) Object.prototype.hasOwnProperty.call(s, O) && (d[O] = s[O])
                }
                return d
              }),
          k.apply(this, arguments)
        )
      }
      function m(d, o) {
        return n(d) || a(d, o) || c(d, o) || f()
      }
      function f() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function c(d, o) {
        if (!!d) {
          if (typeof d == 'string') return r(d, o)
          var s = Object.prototype.toString.call(d).slice(8, -1)
          if ((s === 'Object' && d.constructor && (s = d.constructor.name), s === 'Map' || s === 'Set'))
            return Array.from(d)
          if (s === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return r(d, o)
        }
      }
      function r(d, o) {
        ;(o == null || o > d.length) && (o = d.length)
        for (var s = 0, O = new Array(o); s < o; s++) O[s] = d[s]
        return O
      }
      function a(d, o) {
        var s = d == null ? null : (typeof Symbol != 'undefined' && d[Symbol.iterator]) || d['@@iterator']
        if (s != null) {
          var O = [],
            S = !0,
            L = !1,
            x,
            N
          try {
            for (s = s.call(d); !(S = (x = s.next()).done) && (O.push(x.value), !(o && O.length === o)); S = !0);
          } catch (U) {
            ;(L = !0), (N = U)
          } finally {
            try {
              !S && s.return != null && s.return()
            } finally {
              if (L) throw N
            }
          }
          return O
        }
      }
      function n(d) {
        if (Array.isArray(d)) return d
      }
      function t(d, o) {
        if (!(d instanceof o)) throw new TypeError('Cannot call a class as a function')
      }
      function e(d, o) {
        for (var s = 0; s < o.length; s++) {
          var O = o[s]
          ;(O.enumerable = O.enumerable || !1),
            (O.configurable = !0),
            'value' in O && (O.writable = !0),
            Object.defineProperty(d, O.key, O)
        }
      }
      function u(d, o, s) {
        return o && e(d.prototype, o), s && e(d, s), Object.defineProperty(d, 'prototype', { writable: !1 }), d
      }
      var i = new ((function () {
        function d() {
          t(this, d),
            (this.anchors = []),
            (this.listeners = []),
            (this.listener = void 0),
            (this.listener = (0, j.default)(this._matchActiveAnchor.bind(this), 200))
        }
        return (
          u(d, [
            {
              key: '_matchActiveAnchor',
              value: function () {
                var s = this,
                  O = this.anchors.findIndex(function (x, N) {
                    return x.getBoundingClientRect().top > 128 || N === s.anchors.length - 1
                  }),
                  S = this.anchors[Math.max(0, O - 1)],
                  L = S.parentElement.id
                this.listeners.forEach(function (x) {
                  return x(L)
                })
              },
            },
            {
              key: 'watch',
              value: function (s) {
                this.anchors.length === 0 &&
                  typeof window != 'undefined' &&
                  window.addEventListener('scroll', this.listener),
                  this.anchors.push(s),
                  this.listener()
              },
            },
            {
              key: 'unwatch',
              value: function (s) {
                this.anchors.splice(
                  this.anchors.findIndex(function (O) {
                    return O === s
                  }),
                  1,
                ),
                  this.anchors.length === 0 &&
                    typeof window != 'undefined' &&
                    window.removeEventListener('scroll', this.listener)
              },
            },
            {
              key: 'listen',
              value: function (s) {
                this.listeners.push(s)
              },
            },
            {
              key: 'unlisten',
              value: function (s) {
                this.listeners.splice(
                  this.listeners.findIndex(function (O) {
                    return O === s
                  }),
                  1,
                )
              },
            },
          ]),
          d
        )
      })())()
      function h(d) {
        return d.offsetTop + (d.offsetParent ? h(d.offsetParent) : 0)
      }
      var _ = function d(o) {
        var s,
          O = ((s = o.to.match(/(#[^&?]*)/)) === null || s === void 0 ? void 0 : s[1]) || '',
          S = (0, A.useRef)(null),
          L = (0, A.useState)(!1),
          x = m(L, 2),
          N = x[0],
          U = x[1]
        return (
          (0, A.useEffect)(function () {
            var F, G
            if (
              ['H1', 'H2', 'H3'].includes(
                (F = S.current) === null || F === void 0 || (G = F.parentElement) === null || G === void 0
                  ? void 0
                  : G.tagName,
              ) &&
              S.current.parentElement.id
            ) {
              var V = S.current
              return (
                i.watch(V),
                function () {
                  i.unwatch(V)
                }
              )
            }
            var Y = function (te) {
              U(O === '#'.concat(te))
            }
            return (
              i.listen(Y),
              function () {
                return i.unlisten(Y)
              }
            )
          }, []),
          A.default.createElement(
            R.NavLink,
            k({}, o, {
              ref: S,
              onClick: function () {
                return d.scrollToAnchor(O.substring(1))
              },
              isActive: function () {
                return N
              },
            }),
          )
        )
      }
      _.scrollToAnchor = function (d) {
        window.requestAnimationFrame(function () {
          var o = document.getElementById(decodeURIComponent(d))
          o && window.scrollTo(0, h(o) - 100)
        })
      }
      var b = _
      g.default = b
    },
    55324: function (K, g, T) {
      'use strict'
      Object.defineProperty(g, '__esModule', { value: !0 }), (g.default = g.LinkWrapper = void 0)
      var w = j(T(67294)),
        A = T(67866),
        R = ['to']
      function j(f) {
        return f && f.__esModule ? f : { default: f }
      }
      function E() {
        return (
          (E = Object.assign
            ? Object.assign.bind()
            : function (f) {
                for (var c = 1; c < arguments.length; c++) {
                  var r = arguments[c]
                  for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (f[a] = r[a])
                }
                return f
              }),
          E.apply(this, arguments)
        )
      }
      function C(f, c) {
        if (f == null) return {}
        var r = D(f, c),
          a,
          n
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(f)
          for (n = 0; n < t.length; n++)
            (a = t[n]), !(c.indexOf(a) >= 0) && (!Object.prototype.propertyIsEnumerable.call(f, a) || (r[a] = f[a]))
        }
        return r
      }
      function D(f, c) {
        if (f == null) return {}
        var r = {},
          a = Object.keys(f),
          n,
          t
        for (t = 0; t < a.length; t++) (n = a[t]), !(c.indexOf(n) >= 0) && (r[n] = f[n])
        return r
      }
      var k = function (c) {
        return function (r) {
          var a = r.to,
            n = C(r, R),
            t = /^(\w+:)?\/\/|^(mailto|tel):/.test(a) || !a,
            e = w.default.isValidElement(n.children)
          return w.default.createElement(
            c,
            E(
              {
                to: a || '',
                component: t
                  ? function () {
                      return w.default.createElement(
                        'a',
                        { target: '_blank', rel: 'noopener noreferrer', href: a },
                        n.children,
                        a &&
                          !e &&
                          w.default.createElement(
                            'svg',
                            {
                              xmlns: 'http://www.w3.org/2000/svg',
                              'aria-hidden': 'true',
                              x: '0px',
                              y: '0px',
                              viewBox: '0 0 100 100',
                              width: '15',
                              height: '15',
                              className: '__dumi-default-external-link-icon',
                            },
                            w.default.createElement('path', {
                              fill: 'currentColor',
                              d: 'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z',
                            }),
                            w.default.createElement('polygon', {
                              fill: 'currentColor',
                              points:
                                '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9',
                            }),
                          ),
                      )
                    }
                  : void 0,
              },
              n,
              t
                ? {}
                : {
                    onClick: function () {
                      var i
                      window.scrollTo({ top: 0 })
                      for (var h = arguments.length, _ = new Array(h), b = 0; b < h; b++) _[b] = arguments[b]
                      ;(i = n.onClick) === null || i === void 0 || i.apply(this, _)
                    },
                  },
            ),
          )
        }
      }
      g.LinkWrapper = k
      var m = k(A.Link)
      g.default = m
    },
    62801: function (K, g, T) {
      'use strict'
      Object.defineProperty(g, '__esModule', { value: !0 }), (g.default = void 0)
      var w = T(67866),
        A = T(55324),
        R = (0, A.LinkWrapper)(w.NavLink)
      g.default = R
    },
    66394: function (K, g, T) {
      'use strict'
      Object.defineProperty(g, '__esModule', { value: !0 }), (g.default = void 0)
      function w() {
        const j = A(T(67294))
        return (
          (w = function () {
            return j
          }),
          j
        )
      }
      function A(j) {
        return j && j.__esModule ? j : { default: j }
      }
      var R = w().default.createContext({
        config: {
          mode: 'doc',
          title: '',
          navs: {},
          menus: {},
          locales: [],
          repository: { branch: 'master' },
          theme: {},
        },
        meta: { title: '' },
        menu: [],
        nav: [],
        base: '',
        routes: [],
        apis: {},
        demos: {},
      })
      g.default = R
    },
    64501: function (K, g, T) {
      'use strict'
      Object.defineProperty(g, '__esModule', { value: !0 }), (g.default = void 0)
      function w() {
        const r = T(67294)
        return (
          (w = function () {
            return r
          }),
          r
        )
      }
      var A = R(T(66394))
      function R(r) {
        return r && r.__esModule ? r : { default: r }
      }
      function j(r, a) {
        return m(r) || k(r, a) || C(r, a) || E()
      }
      function E() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function C(r, a) {
        if (!!r) {
          if (typeof r == 'string') return D(r, a)
          var n = Object.prototype.toString.call(r).slice(8, -1)
          if ((n === 'Object' && r.constructor && (n = r.constructor.name), n === 'Map' || n === 'Set'))
            return Array.from(r)
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return D(r, a)
        }
      }
      function D(r, a) {
        ;(a == null || a > r.length) && (a = r.length)
        for (var n = 0, t = new Array(a); n < a; n++) t[n] = r[n]
        return t
      }
      function k(r, a) {
        var n = r == null ? null : (typeof Symbol != 'undefined' && r[Symbol.iterator]) || r['@@iterator']
        if (n != null) {
          var t = [],
            e = !0,
            u = !1,
            i,
            h
          try {
            for (n = n.call(r); !(e = (i = n.next()).done) && (t.push(i.value), !(a && t.length === a)); e = !0);
          } catch (_) {
            ;(u = !0), (h = _)
          } finally {
            try {
              !e && n.return != null && n.return()
            } finally {
              if (u) throw h
            }
          }
          return t
        }
      }
      function m(r) {
        if (Array.isArray(r)) return r
      }
      function f(r, a, n) {
        return Object.entries(r[a]).reduce(
          (t, [e, u]) => (
            (t[e] = u.map((i) => {
              const h = { description: i.description }
              return (
                Object.keys(i).forEach((_) => {
                  if (_.startsWith('description.')) {
                    const b = _.match(/^description\.(.*)$/),
                      d = j(b, 2),
                      o = d[1]
                    o && o === n && (h.description = i[_])
                  } else h[_] = i[_]
                }),
                h
              )
            })),
            t
          ),
          {},
        )
      }
      var c = (r) => {
        const a = (0, w().useContext)(A.default),
          n = a.locale,
          t = a.apis,
          e = (0, w().useState)(f(t, r, n)),
          u = j(e, 2),
          i = u[0],
          h = u[1]
        return (
          (0, w().useEffect)(() => {
            h(f(t, r, n))
          }, [t, r, n]),
          i
        )
      }
      g.default = c
    },
    24161: function (K, g, T) {
      'use strict'
      Object.defineProperty(g, '__esModule', { value: !0 }), (g.default = void 0)
      function w() {
        const t = T(67294)
        return (
          (w = function () {
            return t
          }),
          t
        )
      }
      function A() {
        const t = T(12662)
        return (
          (A = function () {
            return t
          }),
          t
        )
      }
      function R(t, e) {
        return k(t) || D(t, e) || E(t, e) || j()
      }
      function j() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function E(t, e) {
        if (!!t) {
          if (typeof t == 'string') return C(t, e)
          var u = Object.prototype.toString.call(t).slice(8, -1)
          if ((u === 'Object' && t.constructor && (u = t.constructor.name), u === 'Map' || u === 'Set'))
            return Array.from(t)
          if (u === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return C(t, e)
        }
      }
      function C(t, e) {
        ;(e == null || e > t.length) && (e = t.length)
        for (var u = 0, i = new Array(e); u < e; u++) i[u] = t[u]
        return i
      }
      function D(t, e) {
        var u = t == null ? null : (typeof Symbol != 'undefined' && t[Symbol.iterator]) || t['@@iterator']
        if (u != null) {
          var i = [],
            h = !0,
            _ = !1,
            b,
            d
          try {
            for (u = u.call(t); !(h = (b = u.next()).done) && (i.push(b.value), !(e && i.length === e)); h = !0);
          } catch (o) {
            ;(_ = !0), (d = o)
          } finally {
            try {
              !h && u.return != null && u.return()
            } finally {
              if (_) throw d
            }
          }
          return i
        }
      }
      function k(t) {
        if (Array.isArray(t)) return t
      }
      const m = 'https://codesandbox.io/api/v1/sandboxes/define',
        f = (t, e) => {
          if (t === 'react-dom')
            return `/**
* This is an auto-generated demo by dumi
* if you think it is not working as expected,
* please report the issue at
* https://github.com/umijs/dumi/issues
**/
    
import React from 'react';
import ReactDOM from 'react-dom';
${e}
import App from './App';
    
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);`
          if (t === 'react-dom/client')
            return `/**
* This is an auto-generated demo by dumi
* if you think it is not working as expected,
* please report the issue at
* https://github.com/umijs/dumi/issues
**/
import React from 'react';
import { createRoot } from "react-dom/client";
${e}
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);`
        },
        c = (t) =>
          t.includes("import React from 'react';")
            ? t
            : `import React from 'react';
${t}`
      function r(t) {
        const e = document.createElement('span')
        e.innerHTML = t
        const u = e.textContent
        return e.remove(), u
      }
      function a(t) {
        var e
        const u = Boolean(t.sources._.tsx),
          i = u ? '.tsx' : '.jsx',
          h = {},
          _ = {},
          b = Object.values(t.dependencies).filter((s) => s.css),
          d = `App${i}`,
          o = `index${i}`
        return (
          Object.entries(t.dependencies).forEach(([s, { version: O }]) => {
            _[s] = O
          }),
          _['react-dom'] || (_['react-dom'] = _.react || 'latest'),
          (h['sandbox.config.json'] = {
            content: JSON.stringify({ template: u ? 'create-react-app-typescript' : 'create-react-app' }, null, 2),
            isBinary: !1,
          }),
          (h['package.json'] = {
            content: JSON.stringify(
              {
                name: t.title,
                description: r(t.description) || 'An auto-generated demo by dumi',
                main: o,
                dependencies: _,
                devDependencies: u ? { typescript: '^3' } : {},
              },
              null,
              2,
            ),
            isBinary: !1,
          }),
          (h['index.html'] = { content: '<div style="margin: 16px;" id="root"></div>', isBinary: !1 }),
          (h[o] = {
            content: f(
              (_ == null || (e = _['react-dom']) === null || e === void 0 ? void 0 : e.startsWith('18.')) ||
                _.react === 'latest'
                ? 'react-dom/client'
                : 'react-dom',
              b.map(({ css: s }) => `import '${s}';`).join(`
`),
            ),
            isBinary: !1,
          }),
          Object.entries(t.sources).forEach(([s, { tsx: O, jsx: S, content: L }]) => {
            h[s === '_' ? d : s] = { content: c(O || S || L), isBinary: !1 }
          }),
          (0, A().getParameters)({ files: h })
        )
      }
      var n = (t, e = m) => {
        const u = (0, w().useState)(),
          i = R(u, 2),
          h = i[0],
          _ = i[1]
        return (
          (0, w().useEffect)(() => {
            if (t) {
              const b = document.createElement('form'),
                d = document.createElement('input'),
                o = a(t)
              return (
                (b.method = 'POST'),
                (b.target = '_blank'),
                (b.style.display = 'none'),
                (b.action = e),
                b.appendChild(d),
                b.setAttribute('data-demo', t.title || ''),
                (d.name = 'parameters'),
                (d.value = o),
                document.body.appendChild(b),
                _(() => () => b.submit()),
                () => b.remove()
              )
            }
          }, [t]),
          h
        )
      }
      g.default = n
    },
    94217: function (K, g, T) {
      'use strict'
      Object.defineProperty(g, '__esModule', { value: !0 }), (g.default = void 0)
      function w() {
        const c = T(67294)
        return (
          (w = function () {
            return c
          }),
          c
        )
      }
      function A() {
        const c = R(T(735))
        return (
          (A = function () {
            return c
          }),
          c
        )
      }
      function R(c) {
        return c && c.__esModule ? c : { default: c }
      }
      function j(c, r) {
        return m(c) || k(c, r) || C(c, r) || E()
      }
      function E() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function C(c, r) {
        if (!!c) {
          if (typeof c == 'string') return D(c, r)
          var a = Object.prototype.toString.call(c).slice(8, -1)
          if ((a === 'Object' && c.constructor && (a = c.constructor.name), a === 'Map' || a === 'Set'))
            return Array.from(c)
          if (a === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return D(c, r)
        }
      }
      function D(c, r) {
        ;(r == null || r > c.length) && (r = c.length)
        for (var a = 0, n = new Array(r); a < r; a++) n[a] = c[a]
        return n
      }
      function k(c, r) {
        var a = c == null ? null : (typeof Symbol != 'undefined' && c[Symbol.iterator]) || c['@@iterator']
        if (a != null) {
          var n = [],
            t = !0,
            e = !1,
            u,
            i
          try {
            for (a = a.call(c); !(t = (u = a.next()).done) && (n.push(u.value), !(r && n.length === r)); t = !0);
          } catch (h) {
            ;(e = !0), (i = h)
          } finally {
            try {
              !t && a.return != null && a.return()
            } finally {
              if (e) throw i
            }
          }
          return n
        }
      }
      function m(c) {
        if (Array.isArray(c)) return c
      }
      var f = () => {
        const c = (0, w().useState)(),
          r = j(c, 2),
          a = r[0],
          n = r[1],
          t = (0, w().useState)('ready'),
          e = j(t, 2),
          u = e[0],
          i = e[1]
        return [
          (0, w().useCallback)((_) => {
            ;(0, A().default)(_),
              i('copied'),
              clearTimeout(a),
              n(
                setTimeout(() => {
                  i('ready')
                }, 2e3),
              )
          }, []),
          u,
        ]
      }
      g.default = f
    },
    23297: function (K, g, T) {
      'use strict'
      Object.defineProperty(g, '__esModule', { value: !0 }), (g.getDemoUrl = g.getDemoRouteName = g.default = void 0)
      function w() {
        const n = T(67294)
        return (
          (w = function () {
            return n
          }),
          n
        )
      }
      var A = R(T(66394))
      function R(n) {
        return n && n.__esModule ? n : { default: n }
      }
      function j(n, t) {
        return m(n) || k(n, t) || C(n, t) || E()
      }
      function E() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function C(n, t) {
        if (!!n) {
          if (typeof n == 'string') return D(n, t)
          var e = Object.prototype.toString.call(n).slice(8, -1)
          if ((e === 'Object' && n.constructor && (e = n.constructor.name), e === 'Map' || e === 'Set'))
            return Array.from(n)
          if (e === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return D(n, t)
        }
      }
      function D(n, t) {
        ;(t == null || t > n.length) && (t = n.length)
        for (var e = 0, u = new Array(t); e < t; e++) u[e] = n[e]
        return u
      }
      function k(n, t) {
        var e = n == null ? null : (typeof Symbol != 'undefined' && n[Symbol.iterator]) || n['@@iterator']
        if (e != null) {
          var u = [],
            i = !0,
            h = !1,
            _,
            b
          try {
            for (e = e.call(n); !(i = (_ = e.next()).done) && (u.push(_.value), !(t && u.length === t)); i = !0);
          } catch (d) {
            ;(h = !0), (b = d)
          } finally {
            try {
              !i && e.return != null && e.return()
            } finally {
              if (h) throw b
            }
          }
          return u
        }
      }
      function m(n) {
        if (Array.isArray(n)) return n
      }
      function f() {
        return { NODE_ENV: 'production' }.PLATFORM_TYPE === 'BASEMENT'
      }
      const c = () => (f() ? '_demos' : '~demos')
      g.getDemoRouteName = c
      const r = (n, t) => {
        var e
        const u = window,
          i = u.location,
          h = i.href,
          _ = i.origin,
          b = h.split(/#\//),
          d = j(b, 2),
          o = d[0]
        return [
          typeof d[1] == 'string' ? `${o}#` : _,
          `${((e = window) === null || e === void 0 ? void 0 : e.routerBase) || ''}/`.replace(/\/\/$/, '/'),
          c(),
          '/',
          n,
          `${t ? '.html' : ''}`,
        ].join('')
      }
      g.getDemoUrl = r
      var a = (n) => {
        const t = (0, w().useContext)(A.default),
          e = t.config,
          u = (0, w().useState)(''),
          i = j(u, 2),
          h = i[0],
          _ = i[1]
        return (
          (0, w().useEffect)(() => {
            _(n ? r(n, e.exportStatic && e.exportStatic.htmlSuffix) : null)
          }, [n, e]),
          h
        )
      }
      g.default = a
    },
    3429: function (K, g, T) {
      'use strict'
      Object.defineProperty(g, '__esModule', { value: !0 }), (g.default = void 0)
      function w() {
        const m = T(67294)
        return (
          (w = function () {
            return m
          }),
          m
        )
      }
      function A(m, f) {
        return D(m) || C(m, f) || j(m, f) || R()
      }
      function R() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function j(m, f) {
        if (!!m) {
          if (typeof m == 'string') return E(m, f)
          var c = Object.prototype.toString.call(m).slice(8, -1)
          if ((c === 'Object' && m.constructor && (c = m.constructor.name), c === 'Map' || c === 'Set'))
            return Array.from(m)
          if (c === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return E(m, f)
        }
      }
      function E(m, f) {
        ;(f == null || f > m.length) && (f = m.length)
        for (var c = 0, r = new Array(f); c < f; c++) r[c] = m[c]
        return r
      }
      function C(m, f) {
        var c = m == null ? null : (typeof Symbol != 'undefined' && m[Symbol.iterator]) || m['@@iterator']
        if (c != null) {
          var r = [],
            a = !0,
            n = !1,
            t,
            e
          try {
            for (c = c.call(m); !(a = (t = c.next()).done) && (r.push(t.value), !(f && r.length === f)); a = !0);
          } catch (u) {
            ;(n = !0), (e = u)
          } finally {
            try {
              !a && c.return != null && c.return()
            } finally {
              if (n) throw e
            }
          }
          return r
        }
      }
      function D(m) {
        if (Array.isArray(m)) return m
      }
      var k = (m, f) => {
        const c = (...e) => {
            const u = {}
            return (
              Object.keys(e[1]).forEach((i) => {
                const h = (i.match(/^(.+)\.([^_]+)$/) || []).slice(1),
                  _ = A(h, 2),
                  b = _[0],
                  d = _[1]
                ;(!d || d === e[0]) && (u[b || i] = e[1][i])
              }),
              u
            )
          },
          r = (0, w().useState)(c(m, f)),
          a = A(r, 2),
          n = a[0],
          t = a[1]
        return (
          (0, w().useEffect)(() => {
            t(c(m, f))
          }, [m, f]),
          n
        )
      }
      g.default = k
    },
    7140: function (K, g, T) {
      'use strict'
      Object.defineProperty(g, '__esModule', { value: !0 }), (g.default = void 0)
      function w() {
        const f = T(67294)
        return (
          (w = function () {
            return f
          }),
          f
        )
      }
      function A(f, c) {
        return D(f) || C(f, c) || j(f, c) || R()
      }
      function R() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function j(f, c) {
        if (!!f) {
          if (typeof f == 'string') return E(f, c)
          var r = Object.prototype.toString.call(f).slice(8, -1)
          if ((r === 'Object' && f.constructor && (r = f.constructor.name), r === 'Map' || r === 'Set'))
            return Array.from(f)
          if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return E(f, c)
        }
      }
      function E(f, c) {
        ;(c == null || c > f.length) && (c = f.length)
        for (var r = 0, a = new Array(c); r < c; r++) a[r] = f[r]
        return a
      }
      function C(f, c) {
        var r = f == null ? null : (typeof Symbol != 'undefined' && f[Symbol.iterator]) || f['@@iterator']
        if (r != null) {
          var a = [],
            n = !0,
            t = !1,
            e,
            u
          try {
            for (r = r.call(f); !(n = (e = r.next()).done) && (a.push(e.value), !(c && a.length === c)); n = !0);
          } catch (i) {
            ;(t = !0), (u = i)
          } finally {
            try {
              !n && r.return != null && r.return()
            } finally {
              if (t) throw u
            }
          }
          return a
        }
      }
      function D(f) {
        if (Array.isArray(f)) return f
      }
      function k(f, c, r, a = 0) {
        var n
        if (a < c.length) {
          const t = c[a],
            e = () => k(f, c, r, a + 1),
            u = t.match(/^([^:]+):?(.*)$/) || [],
            i = A(u, 3),
            h = i[1],
            _ = i[2]
          switch (h) {
            case 'autoplay':
              e()
              break
            case 'click':
              const b = _.match(/^(global\()?(.+?)\)?$/) || [],
                d = A(b, 3),
                o = d[1],
                s = d[2]
              ;(n = (o ? document : f).querySelector(s)) === null || n === void 0 || n.click(), e()
              break
            case 'timeout':
              setTimeout(e, Number(_))
              break
            case 'capture':
              window.postMessage({ type: 'dumi:capture-element', value: _ }, '*'), e()
              break
            default:
              console.warn(`[dumi: motion] unknown motion '${t}', skip.`), e()
          }
        } else r()
      }
      var m = (f, c) => {
        const r = (0, w().useState)(!1),
          a = A(r, 2),
          n = a[0],
          t = a[1],
          e = (0, w().useCallback)(() => {
            n ||
              (k(c, f, () => {
                t(!1)
              }),
              t(!0))
          }, [f, c, n])
        return (
          (0, w().useEffect)(() => {
            f[0] === 'autoplay' && c && e()
          }, [f, c]),
          [e, n]
        )
      }
      g.default = m
    },
    59827: function (K, g, T) {
      'use strict'
      Object.defineProperty(g, '__esModule', { value: !0 }), (g.default = void 0)
      function w() {
        const a = T(67294)
        return (
          (w = function () {
            return a
          }),
          a
        )
      }
      function A(a, n) {
        return D(a) || C(a, n) || j(a, n) || R()
      }
      function R() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function j(a, n) {
        if (!!a) {
          if (typeof a == 'string') return E(a, n)
          var t = Object.prototype.toString.call(a).slice(8, -1)
          if ((t === 'Object' && a.constructor && (t = a.constructor.name), t === 'Map' || t === 'Set'))
            return Array.from(a)
          if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return E(a, n)
        }
      }
      function E(a, n) {
        ;(n == null || n > a.length) && (n = a.length)
        for (var t = 0, e = new Array(n); t < n; t++) e[t] = a[t]
        return e
      }
      function C(a, n) {
        var t = a == null ? null : (typeof Symbol != 'undefined' && a[Symbol.iterator]) || a['@@iterator']
        if (t != null) {
          var e = [],
            u = !0,
            i = !1,
            h,
            _
          try {
            for (t = t.call(a); !(u = (h = t.next()).done) && (e.push(h.value), !(n && e.length === n)); u = !0);
          } catch (b) {
            ;(i = !0), (_ = b)
          } finally {
            try {
              !u && t.return != null && t.return()
            } finally {
              if (i) throw _
            }
          }
          return e
        }
      }
      function D(a) {
        if (Array.isArray(a)) return a
      }
      const k = 'data-prefers-color',
        m = 'dumi:prefers-color'
      let f
      class c {
        constructor() {
          ;(this.color = void 0),
            (this.callbacks = []),
            (this.color = localStorage.getItem(m) || document.documentElement.getAttribute(k)),
            ['light', 'dark'].forEach((n) => {
              const t = this.getColorMedia(n),
                e = (u) => {
                  u.matches &&
                    this.color === 'auto' &&
                    (document.documentElement.setAttribute(k, n), this.applyCallbacks())
                }
              t.addEventListener ? t.addEventListener('change', e) : t.addListener && t.addListener(e)
            })
        }
        getColorMedia(n) {
          return window.matchMedia(`(prefers-color-scheme: ${n})`)
        }
        isColorMode(n) {
          return this.getColorMedia(n).matches
        }
        applyCallbacks() {
          this.callbacks.forEach((n) => n(this.color))
        }
        listen(n) {
          this.callbacks.push(n)
        }
        unlisten(n) {
          this.callbacks.splice(this.callbacks.indexOf(n), 1)
        }
        set(n) {
          return (
            (this.color = n),
            localStorage.setItem(m, n),
            this.applyCallbacks(),
            n === 'auto'
              ? document.documentElement.setAttribute(k, this.isColorMode('dark') ? 'dark' : 'light')
              : document.documentElement.setAttribute(k, n),
            n
          )
        }
      }
      var r = () => {
        const a = (0, w().useState)(),
          n = A(a, 2),
          t = n[0],
          e = n[1],
          u = (0, w().useCallback)((i) => {
            f.set(i)
          }, [])
        return (0, w().useEffect)(() => ((f = f || new c()), f.listen(e), e(f.color), () => f.unlisten(e)), []), [t, u]
      }
      g.default = r
    },
    69002: function (K, g, T) {
      'use strict'
      Object.defineProperty(g, '__esModule', { value: !0 }), (g.default = void 0)
      function w() {
        const e = T(67294)
        return (
          (w = function () {
            return e
          }),
          e
        )
      }
      function A(e, u) {
        var i = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var h = Object.getOwnPropertySymbols(e)
          u &&
            (h = h.filter(function (_) {
              return Object.getOwnPropertyDescriptor(e, _).enumerable
            })),
            i.push.apply(i, h)
        }
        return i
      }
      function R(e) {
        for (var u = 1; u < arguments.length; u++) {
          var i = arguments[u] != null ? arguments[u] : {}
          u % 2
            ? A(Object(i), !0).forEach(function (h) {
                j(e, h, i[h])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : A(Object(i)).forEach(function (h) {
                Object.defineProperty(e, h, Object.getOwnPropertyDescriptor(i, h))
              })
        }
        return e
      }
      function j(e, u, i) {
        return (
          u in e
            ? Object.defineProperty(e, u, { value: i, enumerable: !0, configurable: !0, writable: !0 })
            : (e[u] = i),
          e
        )
      }
      function E(e, u) {
        return f(e) || m(e, u) || D(e, u) || C()
      }
      function C() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function D(e, u) {
        if (!!e) {
          if (typeof e == 'string') return k(e, u)
          var i = Object.prototype.toString.call(e).slice(8, -1)
          if ((i === 'Object' && e.constructor && (i = e.constructor.name), i === 'Map' || i === 'Set'))
            return Array.from(e)
          if (i === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return k(e, u)
        }
      }
      function k(e, u) {
        ;(u == null || u > e.length) && (u = e.length)
        for (var i = 0, h = new Array(u); i < u; i++) h[i] = e[i]
        return h
      }
      function m(e, u) {
        var i = e == null ? null : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator']
        if (i != null) {
          var h = [],
            _ = !0,
            b = !1,
            d,
            o
          try {
            for (i = i.call(e); !(_ = (d = i.next()).done) && (h.push(d.value), !(u && h.length === u)); _ = !0);
          } catch (s) {
            ;(b = !0), (o = s)
          } finally {
            try {
              !_ && i.return != null && i.return()
            } finally {
              if (b) throw o
            }
          }
          return h
        }
      }
      function f(e) {
        if (Array.isArray(e)) return e
      }
      const c = 'https://riddle.alibaba-inc.com/riddles/define'
      let r
      const a = () => {
        const e = (0, w().useState)(Boolean(r)),
          u = E(e, 2),
          i = u[0],
          h = u[1]
        return (
          (0, w().useEffect)(() => {
            if (r === void 0) {
              const _ = document.createElement('img')
              setTimeout(() => {
                ;(_.src = ''), _.remove()
              }, 200),
                (_.onload = () => {
                  ;(r = !0), h(!0), _.remove()
                }),
                (_.src =
                  'https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png')
            }
          }, []),
          i
        )
      }
      function n(e) {
        let u = e.sources._.tsx || e.sources._.jsx
        return (
          (u = u
            .replace(
              /^/,
              `import ReactDOM from 'react-dom';
`,
            )
            .replace('export default', 'const DumiDemo =').concat(`
ReactDOM.render(<DumiDemo />, mountNode);`)),
          u
        )
      }
      var t = (e) => {
        const u = (0, w().useState)(),
          i = E(u, 2),
          h = i[0],
          _ = i[1],
          b = a()
        return (
          (0, w().useEffect)(() => {
            if (e && b && Object.keys(e.sources).length === 1) {
              var d
              const o = document.createElement('form'),
                s = document.createElement('input')
              return (
                (o.method = 'POST'),
                (o.target = '_blank'),
                (o.style.display = 'none'),
                (o.action = c),
                o.appendChild(s),
                o.setAttribute('data-demo', e.title || ''),
                (s.name = 'data'),
                (s.value = JSON.stringify({
                  title: e.titlle,
                  js: n(e),
                  css: Object.entries(e.dependencies)
                    .filter(([, O]) => O.css)
                    .map(([O, { version: S, css: L }]) => `@import '~${L.replace(new RegExp(`^(${O})`), `$1@${S}`)}';`)
                    .concat(
                      e.background
                        ? `body {
  background: ${e.background};
}`
                        : '',
                    ).join(`
`),
                  json: JSON.stringify(
                    {
                      description: e.description,
                      dependencies: Object.entries(e.dependencies).reduce(
                        (O, [S, { version: L }]) => R(R({}, O), {}, { [S]: L }),
                        {
                          'react-dom':
                            ((d = e.dependencies.react) === null || d === void 0 ? void 0 : d.version) || 'latest',
                        },
                      ),
                    },
                    null,
                    2,
                  ),
                })),
                document.body.appendChild(o),
                _(() => () => o.submit()),
                () => o.remove()
              )
            }
          }, [e, b]),
          h
        )
      }
      g.default = t
    },
    70572: function (K, g, T) {
      'use strict'
      Object.defineProperty(g, '__esModule', { value: !0 }), (g.default = void 0)
      function w() {
        const t = T(67294)
        return (
          (w = function () {
            return t
          }),
          t
        )
      }
      var A = T(36445)
      function R(t, e) {
        var u = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t)
          e &&
            (i = i.filter(function (h) {
              return Object.getOwnPropertyDescriptor(t, h).enumerable
            })),
            u.push.apply(u, i)
        }
        return u
      }
      function j(t) {
        for (var e = 1; e < arguments.length; e++) {
          var u = arguments[e] != null ? arguments[e] : {}
          e % 2
            ? R(Object(u), !0).forEach(function (i) {
                E(t, i, u[i])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(u))
            : R(Object(u)).forEach(function (i) {
                Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(u, i))
              })
        }
        return t
      }
      function E(t, e, u) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: u, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = u),
          t
        )
      }
      function C(t, e) {
        return c(t) || f(t, e) || k(t, e) || D()
      }
      function D() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function k(t, e) {
        if (!!t) {
          if (typeof t == 'string') return m(t, e)
          var u = Object.prototype.toString.call(t).slice(8, -1)
          if ((u === 'Object' && t.constructor && (u = t.constructor.name), u === 'Map' || u === 'Set'))
            return Array.from(t)
          if (u === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return m(t, e)
        }
      }
      function m(t, e) {
        ;(e == null || e > t.length) && (e = t.length)
        for (var u = 0, i = new Array(e); u < e; u++) i[u] = t[u]
        return i
      }
      function f(t, e) {
        var u = t == null ? null : (typeof Symbol != 'undefined' && t[Symbol.iterator]) || t['@@iterator']
        if (u != null) {
          var i = [],
            h = !0,
            _ = !1,
            b,
            d
          try {
            for (u = u.call(t); !(h = (b = u.next()).done) && (i.push(b.value), !(e && i.length === e)); h = !0);
          } catch (o) {
            ;(_ = !0), (d = o)
          } finally {
            try {
              !h && u.return != null && u.return()
            } finally {
              if (_) throw d
            }
          }
          return i
        }
      }
      function c(t) {
        if (Array.isArray(t)) return t
      }
      const r = (t) => {
          const e = (0, w().useContext)(A.context),
            u = e.locale,
            i = e.routes,
            h = e.config.locales,
            _ = (0, w().useState)([]),
            b = C(_, 2),
            d = b[0],
            o = b[1],
            s = (0, w().useState)([]),
            O = C(s, 2),
            S = O[0],
            L = O[1]
          return (
            (0, w().useEffect)(() => {
              o(
                i
                  .filter(({ title: x, meta: N }) => {
                    const U = (N == null ? void 0 : N.locale) === u,
                      F = !(N == null ? void 0 : N.locale) && (!h.length || u === h[0].name)
                    return x && (F || U)
                  })
                  .reduce((x, N) => {
                    var U, F, G
                    const V = {
                      title: ((U = N.meta) === null || U === void 0 ? void 0 : U.title) || N.title,
                      path: N.path,
                    }
                    return (
                      ((F = N.meta) === null || F === void 0 ? void 0 : F.group) && (V.parent = N.meta.group),
                      x.push(V),
                      x.push(
                        ...(((G = N.meta) === null || G === void 0 ? void 0 : G.slugs) || [])
                          .filter(({ value: Y }) => {
                            var ee
                            return Y !== (((ee = N.meta) === null || ee === void 0 ? void 0 : ee.title) || N.title)
                          })
                          .map((Y) => ({ title: Y.value, path: `${N.path}#${Y.heading}`, parent: V })),
                      ),
                      x
                    )
                  }, []),
              )
            }, [i.length, u]),
            (0, w().useEffect)(() => {
              const x = t == null ? void 0 : t.trim().toUpperCase()
              if (x) {
                const N = []
                for (let U = 0; U < d.length; U += 1) d[U].title.toUpperCase().indexOf(x) > -1 && N.push(d[U])
                L(N)
              } else L([])
            }, [t, d.length]),
            S
          )
        },
        a = () => {
          const t = (0, w().useContext)(A.context),
            e = t.config.algolia
          return (0, w().useCallback)(
            (i) => {
              window.docsearch(j({ inputSelector: i }, e))
            },
            [e],
          )
        }
      var n = (t) => {
        const e = (0, w().useContext)(A.context),
          u = e.config,
          i = r(t),
          h = a()
        return u.algolia ? h : i
      }
      g.default = n
    },
    29142: function (K, g, T) {
      'use strict'
      Object.defineProperty(g, '__esModule', { value: !0 }), (g.default = void 0)
      function w() {
        const r = T(67294)
        return (
          (w = function () {
            return r
          }),
          r
        )
      }
      function A() {
        const r = R(T(26961))
        return (
          (A = function () {
            return r
          }),
          r
        )
      }
      function R(r) {
        return r && r.__esModule ? r : { default: r }
      }
      function j(r, a) {
        return m(r) || k(r, a) || C(r, a) || E()
      }
      function E() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function C(r, a) {
        if (!!r) {
          if (typeof r == 'string') return D(r, a)
          var n = Object.prototype.toString.call(r).slice(8, -1)
          if ((n === 'Object' && r.constructor && (n = r.constructor.name), n === 'Map' || n === 'Set'))
            return Array.from(r)
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return D(r, a)
        }
      }
      function D(r, a) {
        ;(a == null || a > r.length) && (a = r.length)
        for (var n = 0, t = new Array(a); n < a; n++) t[n] = r[n]
        return t
      }
      function k(r, a) {
        var n = r == null ? null : (typeof Symbol != 'undefined' && r[Symbol.iterator]) || r['@@iterator']
        if (n != null) {
          var t = [],
            e = !0,
            u = !1,
            i,
            h
          try {
            for (n = n.call(r); !(e = (i = n.next()).done) && (t.push(i.value), !(a && t.length === a)); e = !0);
          } catch (_) {
            ;(u = !0), (h = _)
          } finally {
            try {
              !e && n.return != null && n.return()
            } finally {
              if (u) throw h
            }
          }
          return t
        }
      }
      function m(r) {
        if (Array.isArray(r)) return r
      }
      const f = { 'zh-CN': 'https://www.typescriptlang.org/zh/play', 'en-US': 'https://www.typescriptlang.org/play' }
      var c = (r, a) => {
        const n = (...h) =>
            `${
              /^zh|cn$/.test(h[0]) ? f['zh-CN'] : f['en-US']
            }?skipLibCheck=true&jsx=1#code/${A().default.compressToEncodedURIComponent(h[1])}`,
          t = (0, w().useState)(n(r, a)),
          e = j(t, 2),
          u = e[0],
          i = e[1]
        return (
          (0, w().useEffect)(() => {
            i(n(r, a))
          }, [r, a]),
          u
        )
      }
      g.default = c
    },
    36445: function (K, g, T) {
      'use strict'
      Object.defineProperty(g, '__esModule', { value: !0 }),
        Object.defineProperty(g, 'AnchorLink', {
          enumerable: !0,
          get: function () {
            return j.default
          },
        }),
        Object.defineProperty(g, 'Link', {
          enumerable: !0,
          get: function () {
            return A.default
          },
        }),
        Object.defineProperty(g, 'NavLink', {
          enumerable: !0,
          get: function () {
            return R.default
          },
        }),
        Object.defineProperty(g, 'context', {
          enumerable: !0,
          get: function () {
            return w.default
          },
        }),
        Object.defineProperty(g, 'getDemoUrl', {
          enumerable: !0,
          get: function () {
            return c.getDemoUrl
          },
        }),
        Object.defineProperty(g, 'useApiData', {
          enumerable: !0,
          get: function () {
            return r.default
          },
        }),
        Object.defineProperty(g, 'useCodeSandbox', {
          enumerable: !0,
          get: function () {
            return m.default
          },
        }),
        Object.defineProperty(g, 'useCopy', {
          enumerable: !0,
          get: function () {
            return C.default
          },
        }),
        Object.defineProperty(g, 'useDemoUrl', {
          enumerable: !0,
          get: function () {
            return c.default
          },
        }),
        Object.defineProperty(g, 'useLocaleProps', {
          enumerable: !0,
          get: function () {
            return f.default
          },
        }),
        Object.defineProperty(g, 'useMotions', {
          enumerable: !0,
          get: function () {
            return k.default
          },
        }),
        Object.defineProperty(g, 'usePrefersColor', {
          enumerable: !0,
          get: function () {
            return n.default
          },
        }),
        Object.defineProperty(g, 'useRiddle', {
          enumerable: !0,
          get: function () {
            return D.default
          },
        }),
        Object.defineProperty(g, 'useSearch', {
          enumerable: !0,
          get: function () {
            return E.default
          },
        }),
        Object.defineProperty(g, 'useTSPlaygroundUrl', {
          enumerable: !0,
          get: function () {
            return a.default
          },
        })
      var w = u(T(66394)),
        A = u(T(55324)),
        R = u(T(62801)),
        j = u(T(64372)),
        E = u(T(70572)),
        C = u(T(94217)),
        D = u(T(69002)),
        k = u(T(7140)),
        m = u(T(24161)),
        f = u(T(3429)),
        c = e(T(23297)),
        r = u(T(64501)),
        a = u(T(29142)),
        n = u(T(59827))
      function t(i) {
        if (typeof WeakMap != 'function') return null
        var h = new WeakMap(),
          _ = new WeakMap()
        return (t = function (d) {
          return d ? _ : h
        })(i)
      }
      function e(i, h) {
        if (!h && i && i.__esModule) return i
        if (i === null || (typeof i != 'object' && typeof i != 'function')) return { default: i }
        var _ = t(h)
        if (_ && _.has(i)) return _.get(i)
        var b = {},
          d = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var o in i)
          if (o !== 'default' && Object.prototype.hasOwnProperty.call(i, o)) {
            var s = d ? Object.getOwnPropertyDescriptor(i, o) : null
            s && (s.get || s.set) ? Object.defineProperty(b, o, s) : (b[o] = i[o])
          }
        return (b.default = i), _ && _.set(i, b), b
      }
      function u(i) {
        return i && i.__esModule ? i : { default: i }
      }
    },
    93096: function (K, g, T) {
      var w = 'Expected a function',
        A = 0 / 0,
        R = '[object Symbol]',
        j = /^\s+|\s+$/g,
        E = /^[-+]0x[0-9a-f]+$/i,
        C = /^0b[01]+$/i,
        D = /^0o[0-7]+$/i,
        k = parseInt,
        m = typeof T.g == 'object' && T.g && T.g.Object === Object && T.g,
        f = typeof self == 'object' && self && self.Object === Object && self,
        c = m || f || Function('return this')(),
        r = Object.prototype,
        a = r.toString,
        n = Math.max,
        t = Math.min,
        e = function () {
          return c.Date.now()
        }
      function u(o, s, O) {
        var S,
          L,
          x,
          N,
          U,
          F,
          G = 0,
          V = !1,
          Y = !1,
          ee = !0
        if (typeof o != 'function') throw new TypeError(w)
        ;(s = d(s) || 0),
          h(O) &&
            ((V = !!O.leading),
            (Y = 'maxWait' in O),
            (x = Y ? n(d(O.maxWait) || 0, s) : x),
            (ee = 'trailing' in O ? !!O.trailing : ee))
        function te(X) {
          var q = S,
            re = L
          return (S = L = void 0), (G = X), (N = o.apply(re, q)), N
        }
        function he(X) {
          return (G = X), (U = setTimeout(ae, s)), V ? te(X) : N
        }
        function fe(X) {
          var q = X - F,
            re = X - G,
            pe = s - q
          return Y ? t(pe, x - re) : pe
        }
        function ue(X) {
          var q = X - F,
            re = X - G
          return F === void 0 || q >= s || q < 0 || (Y && re >= x)
        }
        function ae() {
          var X = e()
          if (ue(X)) return le(X)
          U = setTimeout(ae, fe(X))
        }
        function le(X) {
          return (U = void 0), ee && S ? te(X) : ((S = L = void 0), N)
        }
        function ve() {
          U !== void 0 && clearTimeout(U), (G = 0), (S = F = L = U = void 0)
        }
        function de() {
          return U === void 0 ? N : le(e())
        }
        function ie() {
          var X = e(),
            q = ue(X)
          if (((S = arguments), (L = this), (F = X), q)) {
            if (U === void 0) return he(F)
            if (Y) return (U = setTimeout(ae, s)), te(F)
          }
          return U === void 0 && (U = setTimeout(ae, s)), N
        }
        return (ie.cancel = ve), (ie.flush = de), ie
      }
      function i(o, s, O) {
        var S = !0,
          L = !0
        if (typeof o != 'function') throw new TypeError(w)
        return (
          h(O) && ((S = 'leading' in O ? !!O.leading : S), (L = 'trailing' in O ? !!O.trailing : L)),
          u(o, s, { leading: S, maxWait: s, trailing: L })
        )
      }
      function h(o) {
        var s = typeof o
        return !!o && (s == 'object' || s == 'function')
      }
      function _(o) {
        return !!o && typeof o == 'object'
      }
      function b(o) {
        return typeof o == 'symbol' || (_(o) && a.call(o) == R)
      }
      function d(o) {
        if (typeof o == 'number') return o
        if (b(o)) return A
        if (h(o)) {
          var s = typeof o.valueOf == 'function' ? o.valueOf() : o
          o = h(s) ? s + '' : s
        }
        if (typeof o != 'string') return o === 0 ? o : +o
        o = o.replace(j, '')
        var O = C.test(o)
        return O || D.test(o) ? k(o.slice(2), O ? 2 : 8) : E.test(o) ? A : +o
      }
      K.exports = i
    },
    26961: function (K, g, T) {
      var w,
        A = (function () {
          var R = String.fromCharCode,
            j = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            E = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
            C = {}
          function D(m, f) {
            if (!C[m]) {
              C[m] = {}
              for (var c = 0; c < m.length; c++) C[m][m.charAt(c)] = c
            }
            return C[m][f]
          }
          var k = {
            compressToBase64: function (m) {
              if (m == null) return ''
              var f = k._compress(m, 6, function (c) {
                return j.charAt(c)
              })
              switch (f.length % 4) {
                default:
                case 0:
                  return f
                case 1:
                  return f + '==='
                case 2:
                  return f + '=='
                case 3:
                  return f + '='
              }
            },
            decompressFromBase64: function (m) {
              return m == null
                ? ''
                : m == ''
                ? null
                : k._decompress(m.length, 32, function (f) {
                    return D(j, m.charAt(f))
                  })
            },
            compressToUTF16: function (m) {
              return m == null
                ? ''
                : k._compress(m, 15, function (f) {
                    return R(f + 32)
                  }) + ' '
            },
            decompressFromUTF16: function (m) {
              return m == null
                ? ''
                : m == ''
                ? null
                : k._decompress(m.length, 16384, function (f) {
                    return m.charCodeAt(f) - 32
                  })
            },
            compressToUint8Array: function (m) {
              for (var f = k.compress(m), c = new Uint8Array(f.length * 2), r = 0, a = f.length; r < a; r++) {
                var n = f.charCodeAt(r)
                ;(c[r * 2] = n >>> 8), (c[r * 2 + 1] = n % 256)
              }
              return c
            },
            decompressFromUint8Array: function (m) {
              if (m == null) return k.decompress(m)
              for (var f = new Array(m.length / 2), c = 0, r = f.length; c < r; c++)
                f[c] = m[c * 2] * 256 + m[c * 2 + 1]
              var a = []
              return (
                f.forEach(function (n) {
                  a.push(R(n))
                }),
                k.decompress(a.join(''))
              )
            },
            compressToEncodedURIComponent: function (m) {
              return m == null
                ? ''
                : k._compress(m, 6, function (f) {
                    return E.charAt(f)
                  })
            },
            decompressFromEncodedURIComponent: function (m) {
              return m == null
                ? ''
                : m == ''
                ? null
                : ((m = m.replace(/ /g, '+')),
                  k._decompress(m.length, 32, function (f) {
                    return D(E, m.charAt(f))
                  }))
            },
            compress: function (m) {
              return k._compress(m, 16, function (f) {
                return R(f)
              })
            },
            _compress: function (m, f, c) {
              if (m == null) return ''
              var r,
                a,
                n = {},
                t = {},
                e = '',
                u = '',
                i = '',
                h = 2,
                _ = 3,
                b = 2,
                d = [],
                o = 0,
                s = 0,
                O
              for (O = 0; O < m.length; O += 1)
                if (
                  ((e = m.charAt(O)),
                  Object.prototype.hasOwnProperty.call(n, e) || ((n[e] = _++), (t[e] = !0)),
                  (u = i + e),
                  Object.prototype.hasOwnProperty.call(n, u))
                )
                  i = u
                else {
                  if (Object.prototype.hasOwnProperty.call(t, i)) {
                    if (i.charCodeAt(0) < 256) {
                      for (r = 0; r < b; r++) (o = o << 1), s == f - 1 ? ((s = 0), d.push(c(o)), (o = 0)) : s++
                      for (a = i.charCodeAt(0), r = 0; r < 8; r++)
                        (o = (o << 1) | (a & 1)), s == f - 1 ? ((s = 0), d.push(c(o)), (o = 0)) : s++, (a = a >> 1)
                    } else {
                      for (a = 1, r = 0; r < b; r++)
                        (o = (o << 1) | a), s == f - 1 ? ((s = 0), d.push(c(o)), (o = 0)) : s++, (a = 0)
                      for (a = i.charCodeAt(0), r = 0; r < 16; r++)
                        (o = (o << 1) | (a & 1)), s == f - 1 ? ((s = 0), d.push(c(o)), (o = 0)) : s++, (a = a >> 1)
                    }
                    h--, h == 0 && ((h = Math.pow(2, b)), b++), delete t[i]
                  } else
                    for (a = n[i], r = 0; r < b; r++)
                      (o = (o << 1) | (a & 1)), s == f - 1 ? ((s = 0), d.push(c(o)), (o = 0)) : s++, (a = a >> 1)
                  h--, h == 0 && ((h = Math.pow(2, b)), b++), (n[u] = _++), (i = String(e))
                }
              if (i !== '') {
                if (Object.prototype.hasOwnProperty.call(t, i)) {
                  if (i.charCodeAt(0) < 256) {
                    for (r = 0; r < b; r++) (o = o << 1), s == f - 1 ? ((s = 0), d.push(c(o)), (o = 0)) : s++
                    for (a = i.charCodeAt(0), r = 0; r < 8; r++)
                      (o = (o << 1) | (a & 1)), s == f - 1 ? ((s = 0), d.push(c(o)), (o = 0)) : s++, (a = a >> 1)
                  } else {
                    for (a = 1, r = 0; r < b; r++)
                      (o = (o << 1) | a), s == f - 1 ? ((s = 0), d.push(c(o)), (o = 0)) : s++, (a = 0)
                    for (a = i.charCodeAt(0), r = 0; r < 16; r++)
                      (o = (o << 1) | (a & 1)), s == f - 1 ? ((s = 0), d.push(c(o)), (o = 0)) : s++, (a = a >> 1)
                  }
                  h--, h == 0 && ((h = Math.pow(2, b)), b++), delete t[i]
                } else
                  for (a = n[i], r = 0; r < b; r++)
                    (o = (o << 1) | (a & 1)), s == f - 1 ? ((s = 0), d.push(c(o)), (o = 0)) : s++, (a = a >> 1)
                h--, h == 0 && ((h = Math.pow(2, b)), b++)
              }
              for (a = 2, r = 0; r < b; r++)
                (o = (o << 1) | (a & 1)), s == f - 1 ? ((s = 0), d.push(c(o)), (o = 0)) : s++, (a = a >> 1)
              for (;;)
                if (((o = o << 1), s == f - 1)) {
                  d.push(c(o))
                  break
                } else s++
              return d.join('')
            },
            decompress: function (m) {
              return m == null
                ? ''
                : m == ''
                ? null
                : k._decompress(m.length, 32768, function (f) {
                    return m.charCodeAt(f)
                  })
            },
            _decompress: function (m, f, c) {
              var r = [],
                a,
                n = 4,
                t = 4,
                e = 3,
                u = '',
                i = [],
                h,
                _,
                b,
                d,
                o,
                s,
                O,
                S = { val: c(0), position: f, index: 1 }
              for (h = 0; h < 3; h += 1) r[h] = h
              for (b = 0, o = Math.pow(2, 2), s = 1; s != o; )
                (d = S.val & S.position),
                  (S.position >>= 1),
                  S.position == 0 && ((S.position = f), (S.val = c(S.index++))),
                  (b |= (d > 0 ? 1 : 0) * s),
                  (s <<= 1)
              switch ((a = b)) {
                case 0:
                  for (b = 0, o = Math.pow(2, 8), s = 1; s != o; )
                    (d = S.val & S.position),
                      (S.position >>= 1),
                      S.position == 0 && ((S.position = f), (S.val = c(S.index++))),
                      (b |= (d > 0 ? 1 : 0) * s),
                      (s <<= 1)
                  O = R(b)
                  break
                case 1:
                  for (b = 0, o = Math.pow(2, 16), s = 1; s != o; )
                    (d = S.val & S.position),
                      (S.position >>= 1),
                      S.position == 0 && ((S.position = f), (S.val = c(S.index++))),
                      (b |= (d > 0 ? 1 : 0) * s),
                      (s <<= 1)
                  O = R(b)
                  break
                case 2:
                  return ''
              }
              for (r[3] = O, _ = O, i.push(O); ; ) {
                if (S.index > m) return ''
                for (b = 0, o = Math.pow(2, e), s = 1; s != o; )
                  (d = S.val & S.position),
                    (S.position >>= 1),
                    S.position == 0 && ((S.position = f), (S.val = c(S.index++))),
                    (b |= (d > 0 ? 1 : 0) * s),
                    (s <<= 1)
                switch ((O = b)) {
                  case 0:
                    for (b = 0, o = Math.pow(2, 8), s = 1; s != o; )
                      (d = S.val & S.position),
                        (S.position >>= 1),
                        S.position == 0 && ((S.position = f), (S.val = c(S.index++))),
                        (b |= (d > 0 ? 1 : 0) * s),
                        (s <<= 1)
                    ;(r[t++] = R(b)), (O = t - 1), n--
                    break
                  case 1:
                    for (b = 0, o = Math.pow(2, 16), s = 1; s != o; )
                      (d = S.val & S.position),
                        (S.position >>= 1),
                        S.position == 0 && ((S.position = f), (S.val = c(S.index++))),
                        (b |= (d > 0 ? 1 : 0) * s),
                        (s <<= 1)
                    ;(r[t++] = R(b)), (O = t - 1), n--
                    break
                  case 2:
                    return i.join('')
                }
                if ((n == 0 && ((n = Math.pow(2, e)), e++), r[O])) u = r[O]
                else if (O === t) u = _ + _.charAt(0)
                else return null
                i.push(u), (r[t++] = _ + u.charAt(0)), n--, (_ = u), n == 0 && ((n = Math.pow(2, e)), e++)
              }
            },
          }
          return k
        })()
      ;(w = function () {
        return A
      }.call(g, T, g, K)),
        w !== void 0 && (K.exports = w)
    },
  },
])
