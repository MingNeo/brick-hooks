;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [6889],
  {
    87757: function (E, x, f) {
      E.exports = f(51776)
    },
    72187: function () {},
    20497: function () {},
    94184: function (E, x) {
      var f,
        i
        /*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
      ;(function () {
        'use strict'
        var y = {}.hasOwnProperty
        function g() {
          for (var M = [], I = 0; I < arguments.length; I++) {
            var A = arguments[I]
            if (!!A) {
              var L = typeof A
              if (L === 'string' || L === 'number') M.push(A)
              else if (Array.isArray(A)) {
                if (A.length) {
                  var G = g.apply(null, A)
                  G && M.push(G)
                }
              } else if (L === 'object')
                if (A.toString === Object.prototype.toString) for (var O in A) y.call(A, O) && A[O] && M.push(O)
                else M.push(A.toString())
            }
          }
          return M.join(' ')
        }
        E.exports
          ? ((g.default = g), (E.exports = g))
          : ((f = []),
            (i = function () {
              return g
            }.apply(x, f)),
            i !== void 0 && (E.exports = i))
      })()
    },
    16889: function (E, x, f) {
      'use strict'
      f.r(x),
        f.d(x, {
          default: function () {
            return Ov
          },
        })
      var i = f(67294)
      function y() {
        return (
          (y =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }),
          y.apply(this, arguments)
        )
      }
      function g(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function M(e) {
        if (Array.isArray(e)) return e
      }
      function I(e, t) {
        var n = e == null ? null : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator']
        if (n != null) {
          var r = [],
            a = !0,
            u = !1,
            o,
            c
          try {
            for (n = n.call(e); !(a = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); a = !0);
          } catch (s) {
            ;(u = !0), (c = s)
          } finally {
            try {
              !a && n.return != null && n.return()
            } finally {
              if (u) throw c
            }
          }
          return r
        }
      }
      function A(e, t) {
        ;(t == null || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function L(e, t) {
        if (!!e) {
          if (typeof e == 'string') return A(e, t)
          var n = Object.prototype.toString.call(e).slice(8, -1)
          if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
            return Array.from(e)
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(e, t)
        }
      }
      function G() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function O(e, t) {
        return M(e) || I(e, t) || L(e, t) || G()
      }
      function re(e) {
        return (
          (re =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (t) {
                  return typeof t
                }
              : function (t) {
                  return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t
                }),
          re(e)
        )
      }
      function Te(e, t) {
        if (e == null) return {}
        var n = {},
          r = Object.keys(e),
          a,
          u
        for (u = 0; u < r.length; u++) (a = r[u]), !(t.indexOf(a) >= 0) && (n[a] = e[a])
        return n
      }
      function z(e, t) {
        if (e == null) return {}
        var n = Te(e, t),
          r,
          a
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e)
          for (a = 0; a < u.length; a++)
            (r = u[a]), !(t.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, r) || (n[r] = e[r]))
        }
        return n
      }
      function ue(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {}
          t % 2
            ? ue(Object(n), !0).forEach(function (r) {
                g(e, r, n[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ue(Object(n)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
              })
        }
        return e
      }
      var Se = f(94184),
        X = f.n(Se),
        ge = f(59864)
      function ve(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          n = []
        return (
          i.Children.forEach(e, function (r) {
            ;(r == null && !t.keepEmpty) ||
              (Array.isArray(r)
                ? (n = n.concat(ve(r)))
                : (0, ge.isFragment)(r) && r.props
                ? (n = n.concat(ve(r.props.children, t)))
                : n.push(r))
          }),
          n
        )
      }
      var se = function () {
        if (typeof navigator == 'undefined' || typeof window == 'undefined') return !1
        var e = navigator.userAgent || navigator.vendor || window.opera
        return !!(
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
            e,
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
            e == null ? void 0 : e.substr(0, 4),
          )
        )
      }
      function ke(e) {
        if (Array.isArray(e)) return e
      }
      function we(e, t) {
        var n = e == null ? null : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator']
        if (n != null) {
          var r = [],
            a = !0,
            u = !1,
            o,
            c
          try {
            for (n = n.call(e); !(a = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); a = !0);
          } catch (s) {
            ;(u = !0), (c = s)
          } finally {
            try {
              !a && n.return != null && n.return()
            } finally {
              if (u) throw c
            }
          }
          return r
        }
      }
      function De(e, t) {
        ;(t == null || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function Pe(e, t) {
        if (!!e) {
          if (typeof e == 'string') return De(e, t)
          var n = Object.prototype.toString.call(e).slice(8, -1)
          if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
            return Array.from(e)
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return De(e, t)
        }
      }
      function Me() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function Qe(e, t) {
        return ke(e) || we(e, t) || Pe(e, t) || Me()
      }
      function $e(e, t) {
        var n = t || {},
          r = n.defaultValue,
          a = n.value,
          u = n.onChange,
          o = n.postState,
          c = i.useState(function () {
            return a !== void 0
              ? a
              : r !== void 0
              ? typeof r == 'function'
                ? r()
                : r
              : typeof e == 'function'
              ? e()
              : e
          }),
          s = Qe(c, 2),
          l = s[0],
          d = s[1],
          v = a !== void 0 ? a : l
        o && (v = o(v))
        var m = i.useRef(u)
        m.current = u
        var p = i.useCallback(
            function (S) {
              d(S), v !== S && m.current && m.current(S, v)
            },
            [v, m],
          ),
          h = i.useRef(!0)
        return (
          i.useEffect(
            function () {
              if (h.current) {
                h.current = !1
                return
              }
              a === void 0 && d(a)
            },
            [a],
          ),
          [v, p]
        )
      }
      function ct(e) {
        if (Array.isArray(e)) return A(e)
      }
      function xe(e) {
        if ((typeof Symbol != 'undefined' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
          return Array.from(e)
      }
      function pt() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function Ge(e) {
        return ct(e) || xe(e) || L(e) || pt()
      }
      var nn = function (t) {
          return +setTimeout(t, 16)
        },
        zt = function (t) {
          return clearTimeout(t)
        }
      typeof window != 'undefined' &&
        'requestAnimationFrame' in window &&
        ((nn = function (t) {
          return window.requestAnimationFrame(t)
        }),
        (zt = function (t) {
          return window.cancelAnimationFrame(t)
        }))
      var Fn = 0,
        Fr = new Map()
      function ti(e) {
        Fr.delete(e)
      }
      function Fe(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1
        Fn += 1
        var n = Fn
        function r(a) {
          if (a === 0) ti(n), e()
          else {
            var u = nn(function () {
              r(a - 1)
            })
            Fr.set(n, u)
          }
        }
        return r(t), n
      }
      Fe.cancel = function (e) {
        var t = Fr.get(e)
        return ti(t), zt(t)
      }
      var Ur = {}
      function ms(e, t) {}
      function hs(e, t) {}
      function Nv() {
        Ur = {}
      }
      function ni(e, t, n) {
        !t && !Ur[n] && (e(!1, n), (Ur[n] = !0))
      }
      function gs(e, t) {
        ni(ms, e, t)
      }
      function Iv(e, t) {
        ni(hs, e, t)
      }
      var ri = gs
      function Kr(e) {
        return (
          (Kr =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (t) {
                  return typeof t
                }
              : function (t) {
                  return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t
                }),
          Kr(e)
        )
      }
      function ys(e, t, n) {
        var r = i.useRef({})
        return (
          (!('value' in r.current) || n(r.current.condition, t)) &&
            ((r.current.value = e()), (r.current.condition = t)),
          r.current.value
        )
      }
      function Wr(e, t) {
        typeof e == 'function' ? e(t) : Kr(e) === 'object' && e && 'current' in e && (e.current = t)
      }
      function Un() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        var r = t.filter(function (a) {
          return a
        })
        return r.length <= 1
          ? r[0]
          : function (a) {
              t.forEach(function (u) {
                Wr(u, a)
              })
            }
      }
      function kv() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        return useMemo(
          function () {
            return Un.apply(void 0, t)
          },
          t,
          function (r, a) {
            return (
              r.length === a.length &&
              r.every(function (u, o) {
                return u === a[o]
              })
            )
          },
        )
      }
      function oi(e) {
        var t,
          n,
          r = (0, ge.isMemo)(e) ? e.type.type : e.type
        return !(
          (typeof r == 'function' && !((t = r.prototype) === null || t === void 0 ? void 0 : t.render)) ||
          (typeof e == 'function' && !((n = e.prototype) === null || n === void 0 ? void 0 : n.render))
        )
      }
      var mt = f(73935)
      function En(e) {
        return e instanceof HTMLElement ? e : mt.findDOMNode(e)
      }
      var ii = (function () {
          if (typeof Map != 'undefined') return Map
          function e(t, n) {
            var r = -1
            return (
              t.some(function (a, u) {
                return a[0] === n ? ((r = u), !0) : !1
              }),
              r
            )
          }
          return (function () {
            function t() {
              this.__entries__ = []
            }
            return (
              Object.defineProperty(t.prototype, 'size', {
                get: function () {
                  return this.__entries__.length
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.get = function (n) {
                var r = e(this.__entries__, n),
                  a = this.__entries__[r]
                return a && a[1]
              }),
              (t.prototype.set = function (n, r) {
                var a = e(this.__entries__, n)
                ~a ? (this.__entries__[a][1] = r) : this.__entries__.push([n, r])
              }),
              (t.prototype.delete = function (n) {
                var r = this.__entries__,
                  a = e(r, n)
                ~a && r.splice(a, 1)
              }),
              (t.prototype.has = function (n) {
                return !!~e(this.__entries__, n)
              }),
              (t.prototype.clear = function () {
                this.__entries__.splice(0)
              }),
              (t.prototype.forEach = function (n, r) {
                r === void 0 && (r = null)
                for (var a = 0, u = this.__entries__; a < u.length; a++) {
                  var o = u[a]
                  n.call(r, o[1], o[0])
                }
              }),
              t
            )
          })()
        })(),
        Br = typeof window != 'undefined' && typeof document != 'undefined' && window.document === document,
        Kn = (function () {
          return typeof f.g != 'undefined' && f.g.Math === Math
            ? f.g
            : typeof self != 'undefined' && self.Math === Math
            ? self
            : typeof window != 'undefined' && window.Math === Math
            ? window
            : Function('return this')()
        })(),
        bs = (function () {
          return typeof requestAnimationFrame == 'function'
            ? requestAnimationFrame.bind(Kn)
            : function (e) {
                return setTimeout(function () {
                  return e(Date.now())
                }, 1e3 / 60)
              }
        })(),
        Es = 2
      function Ss(e, t) {
        var n = !1,
          r = !1,
          a = 0
        function u() {
          n && ((n = !1), e()), r && c()
        }
        function o() {
          bs(u)
        }
        function c() {
          var s = Date.now()
          if (n) {
            if (s - a < Es) return
            r = !0
          } else (n = !0), (r = !1), setTimeout(o, t)
          a = s
        }
        return c
      }
      var ws = 20,
        _s = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
        Cs = typeof MutationObserver != 'undefined',
        Ts = (function () {
          function e() {
            ;(this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = Ss(this.refresh.bind(this), ws))
          }
          return (
            (e.prototype.addObserver = function (t) {
              ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
            }),
            (e.prototype.removeObserver = function (t) {
              var n = this.observers_,
                r = n.indexOf(t)
              ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_()
            }),
            (e.prototype.refresh = function () {
              var t = this.updateObservers_()
              t && this.refresh()
            }),
            (e.prototype.updateObservers_ = function () {
              var t = this.observers_.filter(function (n) {
                return n.gatherActive(), n.hasActive()
              })
              return (
                t.forEach(function (n) {
                  return n.broadcastActive()
                }),
                t.length > 0
              )
            }),
            (e.prototype.connect_ = function () {
              !Br ||
                this.connected_ ||
                (document.addEventListener('transitionend', this.onTransitionEnd_),
                window.addEventListener('resize', this.refresh),
                Cs
                  ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener('DOMSubtreeModified', this.refresh), (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0))
            }),
            (e.prototype.disconnect_ = function () {
              !Br ||
                !this.connected_ ||
                (document.removeEventListener('transitionend', this.onTransitionEnd_),
                window.removeEventListener('resize', this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ && document.removeEventListener('DOMSubtreeModified', this.refresh),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1))
            }),
            (e.prototype.onTransitionEnd_ = function (t) {
              var n = t.propertyName,
                r = n === void 0 ? '' : n,
                a = _s.some(function (u) {
                  return !!~r.indexOf(u)
                })
              a && this.refresh()
            }),
            (e.getInstance = function () {
              return this.instance_ || (this.instance_ = new e()), this.instance_
            }),
            (e.instance_ = null),
            e
          )
        })(),
        ai = function (e, t) {
          for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var a = r[n]
            Object.defineProperty(e, a, { value: t[a], enumerable: !1, writable: !1, configurable: !0 })
          }
          return e
        },
        rn = function (e) {
          var t = e && e.ownerDocument && e.ownerDocument.defaultView
          return t || Kn
        },
        ui = Bn(0, 0, 0, 0)
      function Wn(e) {
        return parseFloat(e) || 0
      }
      function si(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
        return t.reduce(function (r, a) {
          var u = e['border-' + a + '-width']
          return r + Wn(u)
        }, 0)
      }
      function Ps(e) {
        for (var t = ['top', 'right', 'bottom', 'left'], n = {}, r = 0, a = t; r < a.length; r++) {
          var u = a[r],
            o = e['padding-' + u]
          n[u] = Wn(o)
        }
        return n
      }
      function Ms(e) {
        var t = e.getBBox()
        return Bn(0, 0, t.width, t.height)
      }
      function xs(e) {
        var t = e.clientWidth,
          n = e.clientHeight
        if (!t && !n) return ui
        var r = rn(e).getComputedStyle(e),
          a = Ps(r),
          u = a.left + a.right,
          o = a.top + a.bottom,
          c = Wn(r.width),
          s = Wn(r.height)
        if (
          (r.boxSizing === 'border-box' &&
            (Math.round(c + u) !== t && (c -= si(r, 'left', 'right') + u),
            Math.round(s + o) !== n && (s -= si(r, 'top', 'bottom') + o)),
          !Os(e))
        ) {
          var l = Math.round(c + u) - t,
            d = Math.round(s + o) - n
          Math.abs(l) !== 1 && (c -= l), Math.abs(d) !== 1 && (s -= d)
        }
        return Bn(a.left, a.top, c, s)
      }
      var Rs = (function () {
        return typeof SVGGraphicsElement != 'undefined'
          ? function (e) {
              return e instanceof rn(e).SVGGraphicsElement
            }
          : function (e) {
              return e instanceof rn(e).SVGElement && typeof e.getBBox == 'function'
            }
      })()
      function Os(e) {
        return e === rn(e).document.documentElement
      }
      function As(e) {
        return Br ? (Rs(e) ? Ms(e) : xs(e)) : ui
      }
      function Ns(e) {
        var t = e.x,
          n = e.y,
          r = e.width,
          a = e.height,
          u = typeof DOMRectReadOnly != 'undefined' ? DOMRectReadOnly : Object,
          o = Object.create(u.prototype)
        return ai(o, { x: t, y: n, width: r, height: a, top: n, right: t + r, bottom: a + n, left: t }), o
      }
      function Bn(e, t, n, r) {
        return { x: e, y: t, width: n, height: r }
      }
      var Is = (function () {
          function e(t) {
            ;(this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = Bn(0, 0, 0, 0)),
              (this.target = t)
          }
          return (
            (e.prototype.isActive = function () {
              var t = As(this.target)
              return (this.contentRect_ = t), t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
            }),
            (e.prototype.broadcastRect = function () {
              var t = this.contentRect_
              return (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
            }),
            e
          )
        })(),
        ks = (function () {
          function e(t, n) {
            var r = Ns(n)
            ai(this, { target: t, contentRect: r })
          }
          return e
        })(),
        Ls = (function () {
          function e(t, n, r) {
            if (((this.activeObservations_ = []), (this.observations_ = new ii()), typeof t != 'function'))
              throw new TypeError('The callback provided as parameter 1 is not a function.')
            ;(this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r)
          }
          return (
            (e.prototype.observe = function (t) {
              if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.')
              if (!(typeof Element == 'undefined' || !(Element instanceof Object))) {
                if (!(t instanceof rn(t).Element)) throw new TypeError('parameter 1 is not of type "Element".')
                var n = this.observations_
                n.has(t) || (n.set(t, new Is(t)), this.controller_.addObserver(this), this.controller_.refresh())
              }
            }),
            (e.prototype.unobserve = function (t) {
              if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.')
              if (!(typeof Element == 'undefined' || !(Element instanceof Object))) {
                if (!(t instanceof rn(t).Element)) throw new TypeError('parameter 1 is not of type "Element".')
                var n = this.observations_
                !n.has(t) || (n.delete(t), n.size || this.controller_.removeObserver(this))
              }
            }),
            (e.prototype.disconnect = function () {
              this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
            }),
            (e.prototype.gatherActive = function () {
              var t = this
              this.clearActive(),
                this.observations_.forEach(function (n) {
                  n.isActive() && t.activeObservations_.push(n)
                })
            }),
            (e.prototype.broadcastActive = function () {
              if (!!this.hasActive()) {
                var t = this.callbackCtx_,
                  n = this.activeObservations_.map(function (r) {
                    return new ks(r.target, r.broadcastRect())
                  })
                this.callback_.call(t, n, t), this.clearActive()
              }
            }),
            (e.prototype.clearActive = function () {
              this.activeObservations_.splice(0)
            }),
            (e.prototype.hasActive = function () {
              return this.activeObservations_.length > 0
            }),
            e
          )
        })(),
        ci = typeof WeakMap != 'undefined' ? new WeakMap() : new ii(),
        li = (function () {
          function e(t) {
            if (!(this instanceof e)) throw new TypeError('Cannot call a class as a function.')
            if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.')
            var n = Ts.getInstance(),
              r = new Ls(t, n, this)
            ci.set(this, r)
          }
          return e
        })()
      ;['observe', 'unobserve', 'disconnect'].forEach(function (e) {
        li.prototype[e] = function () {
          var t
          return (t = ci.get(this))[e].apply(t, arguments)
        }
      })
      var Ds = (function () {
          return typeof Kn.ResizeObserver != 'undefined' ? Kn.ResizeObserver : li
        })(),
        fi = Ds,
        Dt = new Map()
      function js(e) {
        e.forEach(function (t) {
          var n,
            r = t.target
          ;(n = Dt.get(r)) === null ||
            n === void 0 ||
            n.forEach(function (a) {
              return a(r)
            })
        })
      }
      var di = new fi(js),
        Lv = null,
        Dv = null
      function Vs(e, t) {
        Dt.has(e) || (Dt.set(e, new Set()), di.observe(e)), Dt.get(e).add(t)
      }
      function Hs(e, t) {
        Dt.has(e) && (Dt.get(e).delete(t), Dt.get(e).size || (di.unobserve(e), Dt.delete(e)))
      }
      function $t(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function vi(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      function Gt(e, t, n) {
        return t && vi(e.prototype, t), n && vi(e, n), Object.defineProperty(e, 'prototype', { writable: !1 }), e
      }
      function zr(e, t) {
        return (
          (zr =
            Object.setPrototypeOf ||
            function (r, a) {
              return (r.__proto__ = a), r
            }),
          zr(e, t)
        )
      }
      function Yt(e, t) {
        if (typeof t != 'function' && t !== null)
          throw new TypeError('Super expression must either be null or a function')
        ;(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && zr(e, t)
      }
      function zn(e) {
        return (
          (zn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (n) {
                return n.__proto__ || Object.getPrototypeOf(n)
              }),
          zn(e)
        )
      }
      function Fs() {
        if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham) return !1
        if (typeof Proxy == 'function') return !0
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
        } catch (e) {
          return !1
        }
      }
      function pi(e) {
        if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      function Us(e, t) {
        if (t && (re(t) === 'object' || typeof t == 'function')) return t
        if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined')
        return pi(e)
      }
      function Xt(e) {
        var t = Fs()
        return function () {
          var r = zn(e),
            a
          if (t) {
            var u = zn(this).constructor
            a = Reflect.construct(r, arguments, u)
          } else a = r.apply(this, arguments)
          return Us(this, a)
        }
      }
      var Ks = (function (e) {
          Yt(n, e)
          var t = Xt(n)
          function n() {
            return $t(this, n), t.apply(this, arguments)
          }
          return (
            Gt(n, [
              {
                key: 'render',
                value: function () {
                  return this.props.children
                },
              },
            ]),
            n
          )
        })(i.Component),
        $r = i.createContext(null)
      function Ws(e) {
        var t = e.children,
          n = e.onBatchResize,
          r = i.useRef(0),
          a = i.useRef([]),
          u = i.useContext($r),
          o = i.useCallback(
            function (c, s, l) {
              r.current += 1
              var d = r.current
              a.current.push({ size: c, element: s, data: l }),
                Promise.resolve().then(function () {
                  d === r.current && (n == null || n(a.current), (a.current = []))
                }),
                u == null || u(c, s, l)
            },
            [n, u],
          )
        return i.createElement($r.Provider, { value: o }, t)
      }
      function Bs(e) {
        var t = e.children,
          n = e.disabled,
          r = i.useRef(null),
          a = i.useRef(null),
          u = i.useContext($r),
          o = typeof t == 'function',
          c = o ? t(r) : t,
          s = i.useRef({ width: -1, height: -1, offsetWidth: -1, offsetHeight: -1 }),
          l = !o && i.isValidElement(c) && oi(c),
          d = l ? c.ref : null,
          v = i.useMemo(
            function () {
              return Un(d, r)
            },
            [d, r],
          ),
          m = i.useRef(e)
        m.current = e
        var p = i.useCallback(function (h) {
          var S = m.current,
            T = S.onResize,
            D = S.data,
            V = h.getBoundingClientRect(),
            F = V.width,
            N = V.height,
            j = h.offsetWidth,
            k = h.offsetHeight,
            B = Math.floor(F),
            K = Math.floor(N)
          if (
            s.current.width !== B ||
            s.current.height !== K ||
            s.current.offsetWidth !== j ||
            s.current.offsetHeight !== k
          ) {
            var U = { width: B, height: K, offsetWidth: j, offsetHeight: k }
            s.current = U
            var w = j === Math.round(F) ? F : j,
              b = k === Math.round(N) ? N : k,
              _ = P(P({}, U), {}, { offsetWidth: w, offsetHeight: b })
            u == null || u(_, h, D),
              T &&
                Promise.resolve().then(function () {
                  T(_, h)
                })
          }
        }, [])
        return (
          i.useEffect(
            function () {
              var h = En(r.current) || En(a.current)
              return (
                h && !n && Vs(h, p),
                function () {
                  return Hs(h, p)
                }
              )
            },
            [r.current, n],
          ),
          i.createElement(Ks, { ref: a }, l ? i.cloneElement(c, { ref: v }) : c)
        )
      }
      var zs = 'rc-observer-key'
      function mi(e) {
        var t = e.children,
          n = typeof t == 'function' ? [t] : ve(t)
        return n.map(function (r, a) {
          var u = (r == null ? void 0 : r.key) || ''.concat(zs, '-').concat(a)
          return i.createElement(Bs, y({}, e, { key: u }), r)
        })
      }
      mi.Collection = Ws
      var $n = mi
      function hi(e) {
        var t = (0, i.useRef)(),
          n = (0, i.useRef)(!1)
        function r() {
          for (var a = arguments.length, u = new Array(a), o = 0; o < a; o++) u[o] = arguments[o]
          n.current ||
            (Fe.cancel(t.current),
            (t.current = Fe(function () {
              e.apply(void 0, u)
            })))
        }
        return (
          (0, i.useEffect)(function () {
            return (
              (n.current = !1),
              function () {
                ;(n.current = !0), Fe.cancel(t.current)
              }
            )
          }, []),
          r
        )
      }
      function $s(e) {
        var t = (0, i.useRef)([]),
          n = (0, i.useState)({}),
          r = O(n, 2),
          a = r[1],
          u = (0, i.useRef)(typeof e == 'function' ? e() : e),
          o = hi(function () {
            var s = u.current
            t.current.forEach(function (l) {
              s = l(s)
            }),
              (t.current = []),
              (u.current = s),
              a({})
          })
        function c(s) {
          t.current.push(s), o()
        }
        return [u.current, c]
      }
      var ce = {
          MAC_ENTER: 3,
          BACKSPACE: 8,
          TAB: 9,
          NUM_CENTER: 12,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          PAUSE: 19,
          CAPS_LOCK: 20,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          PRINT_SCREEN: 44,
          INSERT: 45,
          DELETE: 46,
          ZERO: 48,
          ONE: 49,
          TWO: 50,
          THREE: 51,
          FOUR: 52,
          FIVE: 53,
          SIX: 54,
          SEVEN: 55,
          EIGHT: 56,
          NINE: 57,
          QUESTION_MARK: 63,
          A: 65,
          B: 66,
          C: 67,
          D: 68,
          E: 69,
          F: 70,
          G: 71,
          H: 72,
          I: 73,
          J: 74,
          K: 75,
          L: 76,
          M: 77,
          N: 78,
          O: 79,
          P: 80,
          Q: 81,
          R: 82,
          S: 83,
          T: 84,
          U: 85,
          V: 86,
          W: 87,
          X: 88,
          Y: 89,
          Z: 90,
          META: 91,
          WIN_KEY_RIGHT: 92,
          CONTEXT_MENU: 93,
          NUM_ZERO: 96,
          NUM_ONE: 97,
          NUM_TWO: 98,
          NUM_THREE: 99,
          NUM_FOUR: 100,
          NUM_FIVE: 101,
          NUM_SIX: 102,
          NUM_SEVEN: 103,
          NUM_EIGHT: 104,
          NUM_NINE: 105,
          NUM_MULTIPLY: 106,
          NUM_PLUS: 107,
          NUM_MINUS: 109,
          NUM_PERIOD: 110,
          NUM_DIVISION: 111,
          F1: 112,
          F2: 113,
          F3: 114,
          F4: 115,
          F5: 116,
          F6: 117,
          F7: 118,
          F8: 119,
          F9: 120,
          F10: 121,
          F11: 122,
          F12: 123,
          NUMLOCK: 144,
          SEMICOLON: 186,
          DASH: 189,
          EQUALS: 187,
          COMMA: 188,
          PERIOD: 190,
          SLASH: 191,
          APOSTROPHE: 192,
          SINGLE_QUOTE: 222,
          OPEN_SQUARE_BRACKET: 219,
          BACKSLASH: 220,
          CLOSE_SQUARE_BRACKET: 221,
          WIN_KEY: 224,
          MAC_FF_META: 224,
          WIN_IME: 229,
          isTextModifyingKeyEvent: function (t) {
            var n = t.keyCode
            if ((t.altKey && !t.ctrlKey) || t.metaKey || (n >= ce.F1 && n <= ce.F12)) return !1
            switch (n) {
              case ce.ALT:
              case ce.CAPS_LOCK:
              case ce.CONTEXT_MENU:
              case ce.CTRL:
              case ce.DOWN:
              case ce.END:
              case ce.ESC:
              case ce.HOME:
              case ce.INSERT:
              case ce.LEFT:
              case ce.MAC_FF_META:
              case ce.META:
              case ce.NUMLOCK:
              case ce.NUM_CENTER:
              case ce.PAGE_DOWN:
              case ce.PAGE_UP:
              case ce.PAUSE:
              case ce.PRINT_SCREEN:
              case ce.RIGHT:
              case ce.SHIFT:
              case ce.UP:
              case ce.WIN_KEY:
              case ce.WIN_KEY_RIGHT:
                return !1
              default:
                return !0
            }
          },
          isCharacterKey: function (t) {
            if (
              (t >= ce.ZERO && t <= ce.NINE) ||
              (t >= ce.NUM_ZERO && t <= ce.NUM_MULTIPLY) ||
              (t >= ce.A && t <= ce.Z) ||
              (window.navigator.userAgent.indexOf('WebKit') !== -1 && t === 0)
            )
              return !0
            switch (t) {
              case ce.SPACE:
              case ce.QUESTION_MARK:
              case ce.NUM_PLUS:
              case ce.NUM_MINUS:
              case ce.NUM_PERIOD:
              case ce.NUM_DIVISION:
              case ce.SEMICOLON:
              case ce.DASH:
              case ce.EQUALS:
              case ce.COMMA:
              case ce.PERIOD:
              case ce.SLASH:
              case ce.APOSTROPHE:
              case ce.SINGLE_QUOTE:
              case ce.OPEN_SQUARE_BRACKET:
              case ce.BACKSLASH:
              case ce.CLOSE_SQUARE_BRACKET:
                return !0
              default:
                return !1
            }
          },
        },
        Ye = ce
      function Gs(e, t) {
        var n,
          r = e.prefixCls,
          a = e.id,
          u = e.active,
          o = e.tab,
          c = o.key,
          s = o.tab,
          l = o.disabled,
          d = o.closeIcon,
          v = e.closable,
          m = e.renderWrapper,
          p = e.removeAriaLabel,
          h = e.editable,
          S = e.onClick,
          T = e.onRemove,
          D = e.onFocus,
          V = e.style,
          F = ''.concat(r, '-tab')
        i.useEffect(function () {
          return T
        }, [])
        var N = h && v !== !1 && !l
        function j(K) {
          l || S(K)
        }
        function k(K) {
          K.preventDefault(), K.stopPropagation(), h.onEdit('remove', { key: c, event: K })
        }
        var B = i.createElement(
          'div',
          {
            key: c,
            ref: t,
            className: X()(
              F,
              ((n = {}),
              g(n, ''.concat(F, '-with-remove'), N),
              g(n, ''.concat(F, '-active'), u),
              g(n, ''.concat(F, '-disabled'), l),
              n),
            ),
            style: V,
            onClick: j,
          },
          i.createElement(
            'div',
            {
              role: 'tab',
              'aria-selected': u,
              id: a && ''.concat(a, '-tab-').concat(c),
              className: ''.concat(F, '-btn'),
              'aria-controls': a && ''.concat(a, '-panel-').concat(c),
              'aria-disabled': l,
              tabIndex: l ? null : 0,
              onClick: function (U) {
                U.stopPropagation(), j(U)
              },
              onKeyDown: function (U) {
                ;[Ye.SPACE, Ye.ENTER].includes(U.which) && (U.preventDefault(), j(U))
              },
              onFocus: D,
            },
            s,
          ),
          N &&
            i.createElement(
              'button',
              {
                type: 'button',
                'aria-label': p || 'remove',
                tabIndex: 0,
                className: ''.concat(F, '-remove'),
                onClick: function (U) {
                  U.stopPropagation(), k(U)
                },
              },
              d || h.removeIcon || '\xD7',
            ),
        )
        return m ? m(B) : B
      }
      var Ys = i.forwardRef(Gs),
        gi = { width: 0, height: 0, left: 0, top: 0 }
      function Xs(e, t, n) {
        return (0, i.useMemo)(
          function () {
            for (
              var r,
                a = new Map(),
                u = t.get((r = e[0]) === null || r === void 0 ? void 0 : r.key) || gi,
                o = u.left + u.width,
                c = 0;
              c < e.length;
              c += 1
            ) {
              var s = e[c].key,
                l = t.get(s)
              if (!l) {
                var d
                l = t.get((d = e[c - 1]) === null || d === void 0 ? void 0 : d.key) || gi
              }
              var v = a.get(s) || P({}, l)
              ;(v.right = o - v.left - v.width), a.set(s, v)
            }
            return a
          },
          [
            e
              .map(function (r) {
                return r.key
              })
              .join('_'),
            t,
            n,
          ],
        )
      }
      var yi = { width: 0, height: 0, left: 0, top: 0, right: 0 }
      function Qs(e, t, n, r, a) {
        var u = a.tabs,
          o = a.tabPosition,
          c = a.rtl,
          s,
          l,
          d
        ;['top', 'bottom'].includes(o)
          ? ((s = 'width'), (l = c ? 'right' : 'left'), (d = Math.abs(t.left)))
          : ((s = 'height'), (l = 'top'), (d = -t.top))
        var v = t[s],
          m = n[s],
          p = r[s],
          h = v
        return (
          m + p > v && m < v && (h = v - p),
          (0, i.useMemo)(
            function () {
              if (!u.length) return [0, 0]
              for (var S = u.length, T = S, D = 0; D < S; D += 1) {
                var V = e.get(u[D].key) || yi
                if (V[l] + V[s] > d + h) {
                  T = D - 1
                  break
                }
              }
              for (var F = 0, N = S - 1; N >= 0; N -= 1) {
                var j = e.get(u[N].key) || yi
                if (j[l] < d) {
                  F = N + 1
                  break
                }
              }
              return [F, T]
            },
            [
              e,
              d,
              h,
              o,
              u
                .map(function (S) {
                  return S.key
                })
                .join('_'),
              c,
            ],
          )
        )
      }
      var Zs = f(96774),
        bi = f.n(Zs)
      function jt() {
        return !!(typeof window != 'undefined' && window.document && window.document.createElement)
      }
      var Js = jt() ? i.useLayoutEffect : i.useEffect,
        qs = Js,
        ec = [
          'prefixCls',
          'invalidate',
          'item',
          'renderItem',
          'responsive',
          'registerSize',
          'itemKey',
          'className',
          'style',
          'children',
          'display',
          'order',
          'component',
        ],
        on = void 0
      function tc(e, t) {
        var n = e.prefixCls,
          r = e.invalidate,
          a = e.item,
          u = e.renderItem,
          o = e.responsive,
          c = e.registerSize,
          s = e.itemKey,
          l = e.className,
          d = e.style,
          v = e.children,
          m = e.display,
          p = e.order,
          h = e.component,
          S = h === void 0 ? 'div' : h,
          T = z(e, ec),
          D = o && !m
        function V(B) {
          c(s, B)
        }
        i.useEffect(function () {
          return function () {
            V(null)
          }
        }, [])
        var F = u && a !== on ? u(a) : v,
          N
        r ||
          (N = {
            opacity: D ? 0 : 1,
            height: D ? 0 : on,
            overflowY: D ? 'hidden' : on,
            order: o ? p : on,
            pointerEvents: D ? 'none' : on,
            position: D ? 'absolute' : on,
          })
        var j = {}
        D && (j['aria-hidden'] = !0)
        var k = i.createElement(S, y({ className: X()(!r && n, l), style: P(P({}, N), d) }, j, T, { ref: t }), F)
        return (
          o &&
            (k = i.createElement(
              $n,
              {
                onResize: function (K) {
                  var U = K.offsetWidth
                  V(U)
                },
              },
              k,
            )),
          k
        )
      }
      var Ei = i.forwardRef(tc)
      Ei.displayName = 'Item'
      var Gn = Ei
      function nc() {
        var e = (0, i.useState)({}),
          t = O(e, 2),
          n = t[1],
          r = (0, i.useRef)([]),
          a = (0, i.useRef)(!1),
          u = 0,
          o = 0
        ;(0, i.useEffect)(function () {
          return function () {
            a.current = !0
          }
        }, [])
        function c(s) {
          var l = u
          ;(u += 1), r.current.length < l + 1 && (r.current[l] = s)
          var d = r.current[l]
          function v(m) {
            ;(r.current[l] = typeof m == 'function' ? m(r.current[l]) : m),
              Fe.cancel(o),
              (o = Fe(function () {
                a.current || n({})
              }))
          }
          return [d, v]
        }
        return c
      }
      var rc = ['component'],
        oc = ['className'],
        ic = ['className'],
        ac = function (t, n) {
          var r = i.useContext(Yn)
          if (!r) {
            var a = t.component,
              u = a === void 0 ? 'div' : a,
              o = z(t, rc)
            return i.createElement(u, y({}, o, { ref: n }))
          }
          var c = r.className,
            s = z(r, oc),
            l = t.className,
            d = z(t, ic)
          return i.createElement(
            Yn.Provider,
            { value: null },
            i.createElement(Gn, y({ ref: n, className: X()(c, l) }, s, d)),
          )
        },
        Si = i.forwardRef(ac)
      Si.displayName = 'RawItem'
      var uc = Si,
        sc = [
          'prefixCls',
          'data',
          'renderItem',
          'renderRawItem',
          'itemKey',
          'itemWidth',
          'ssr',
          'style',
          'className',
          'maxCount',
          'renderRest',
          'renderRawRest',
          'suffix',
          'component',
          'itemComponent',
          'onVisibleChange',
        ],
        Yn = i.createContext(null),
        wi = 'responsive',
        _i = 'invalidate'
      function cc(e) {
        return '+ '.concat(e.length, ' ...')
      }
      function lc(e, t) {
        var n = e.prefixCls,
          r = n === void 0 ? 'rc-overflow' : n,
          a = e.data,
          u = a === void 0 ? [] : a,
          o = e.renderItem,
          c = e.renderRawItem,
          s = e.itemKey,
          l = e.itemWidth,
          d = l === void 0 ? 10 : l,
          v = e.ssr,
          m = e.style,
          p = e.className,
          h = e.maxCount,
          S = e.renderRest,
          T = e.renderRawRest,
          D = e.suffix,
          V = e.component,
          F = V === void 0 ? 'div' : V,
          N = e.itemComponent,
          j = e.onVisibleChange,
          k = z(e, sc),
          B = nc(),
          K = v === 'full',
          U = B(null),
          w = O(U, 2),
          b = w[0],
          _ = w[1],
          R = b || 0,
          H = B(new Map()),
          C = O(H, 2),
          Y = C[0],
          q = C[1],
          ee = B(0),
          J = O(ee, 2),
          ae = J[0],
          pe = J[1],
          Z = B(0),
          $ = O(Z, 2),
          oe = $[0],
          te = $[1],
          me = B(0),
          Ce = O(me, 2),
          fe = Ce[0],
          Re = Ce[1],
          _e = (0, i.useState)(null),
          ie = O(_e, 2),
          Ee = ie[0],
          he = ie[1],
          Ae = (0, i.useState)(null),
          de = O(Ae, 2),
          je = de[0],
          Ue = de[1],
          W = i.useMemo(
            function () {
              return je === null && K ? Number.MAX_SAFE_INTEGER : je || 0
            },
            [je, b],
          ),
          Q = (0, i.useState)(!1),
          ne = O(Q, 2),
          Ut = ne[0],
          et = ne[1],
          Ot = ''.concat(r, '-item'),
          wt = Math.max(ae, oe),
          tt = u.length && h === wi,
          At = h === _i,
          _t = tt || (typeof h == 'number' && u.length > h),
          nt = (0, i.useMemo)(
            function () {
              var be = u
              return (
                tt
                  ? b === null && K
                    ? (be = u)
                    : (be = u.slice(0, Math.min(u.length, R / d)))
                  : typeof h == 'number' && (be = u.slice(0, h)),
                be
              )
            },
            [u, d, b, h, tt],
          ),
          ot = (0, i.useMemo)(
            function () {
              return tt ? u.slice(W + 1) : u.slice(nt.length)
            },
            [u, nt, tt, W],
          ),
          dt = (0, i.useCallback)(
            function (be, Le) {
              var He
              return typeof s == 'function'
                ? s(be)
                : (He = s && (be == null ? void 0 : be[s])) !== null && He !== void 0
                ? He
                : Le
            },
            [s],
          ),
          it = (0, i.useCallback)(
            o ||
              function (be) {
                return be
              },
            [o],
          )
        function Ke(be, Le) {
          Ue(be), Le || (et(be < u.length - 1), j == null || j(be))
        }
        function gt(be, Le) {
          _(Le.clientWidth)
        }
        function yt(be, Le) {
          q(function (He) {
            var qe = new Map(He)
            return Le === null ? qe.delete(be) : qe.set(be, Le), qe
          })
        }
        function rt(be, Le) {
          te(Le), pe(oe)
        }
        function Xe(be, Le) {
          Re(Le)
        }
        function Ct(be) {
          return Y.get(dt(nt[be], be))
        }
        qs(
          function () {
            if (R && wt && nt) {
              var be = fe,
                Le = nt.length,
                He = Le - 1
              if (!Le) {
                Ke(0), he(null)
                return
              }
              for (var qe = 0; qe < Le; qe += 1) {
                var ut = Ct(qe)
                if (ut === void 0) {
                  Ke(qe - 1, !0)
                  break
                }
                if (((be += ut), (He === 0 && be <= R) || (qe === He - 1 && be + Ct(He) <= R))) {
                  Ke(He), he(null)
                  break
                } else if (be + wt > R) {
                  Ke(qe - 1), he(be - ut - fe + oe)
                  break
                }
              }
              D && Ct(0) + fe > R && he(null)
            }
          },
          [R, Y, oe, fe, dt, nt],
        )
        var Nt = Ut && !!ot.length,
          Kt = {}
        Ee !== null && tt && (Kt = { position: 'absolute', left: Ee, top: 0 })
        var vt = { prefixCls: Ot, responsive: tt, component: N, invalidate: At },
          at = c
            ? function (be, Le) {
                var He = dt(be, Le)
                return i.createElement(
                  Yn.Provider,
                  {
                    key: He,
                    value: P(P({}, vt), {}, { order: Le, item: be, itemKey: He, registerSize: yt, display: Le <= W }),
                  },
                  c(be, Le),
                )
              }
            : function (be, Le) {
                var He = dt(be, Le)
                return i.createElement(
                  Gn,
                  y({}, vt, {
                    order: Le,
                    key: He,
                    item: be,
                    renderItem: it,
                    itemKey: He,
                    registerSize: yt,
                    display: Le <= W,
                  }),
                )
              },
          Wt,
          It = {
            order: Nt ? W : Number.MAX_SAFE_INTEGER,
            className: ''.concat(Ot, '-rest'),
            registerSize: rt,
            display: Nt,
          }
        if (T) T && (Wt = i.createElement(Yn.Provider, { value: P(P({}, vt), It) }, T(ot)))
        else {
          var Jt = S || cc
          Wt = i.createElement(Gn, y({}, vt, It), typeof Jt == 'function' ? Jt(ot) : Jt)
        }
        var Bt = i.createElement(
          F,
          y({ className: X()(!At && r, p), style: m, ref: t }, k),
          nt.map(at),
          _t ? Wt : null,
          D &&
            i.createElement(
              Gn,
              y({}, vt, { order: W, className: ''.concat(Ot, '-suffix'), registerSize: Xe, display: !0, style: Kt }),
              D,
            ),
        )
        return tt && (Bt = i.createElement($n, { onResize: gt }, Bt)), Bt
      }
      var Sn = i.forwardRef(lc)
      ;(Sn.displayName = 'Overflow'), (Sn.Item = uc), (Sn.RESPONSIVE = wi), (Sn.INVALIDATE = _i)
      var fc = Sn,
        wn = fc
      function dc(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function Ci(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function vc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {}
          t % 2
            ? Ci(Object(n), !0).forEach(function (r) {
                dc(e, r, n[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ci(Object(n)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
              })
        }
        return e
      }
      function Ti(e, t) {
        var n = vc({}, e)
        return (
          Array.isArray(t) &&
            t.forEach(function (r) {
              delete n[r]
            }),
          n
        )
      }
      var pc = ['children', 'locked'],
        ht = i.createContext(null)
      function mc(e, t) {
        var n = P({}, e)
        return (
          Object.keys(t).forEach(function (r) {
            var a = t[r]
            a !== void 0 && (n[r] = a)
          }),
          n
        )
      }
      function _n(e) {
        var t = e.children,
          n = e.locked,
          r = z(e, pc),
          a = i.useContext(ht),
          u = ys(
            function () {
              return mc(a, r)
            },
            [a, r],
            function (o, c) {
              return !n && (o[0] !== c[0] || !bi()(o[1], c[1]))
            },
          )
        return i.createElement(ht.Provider, { value: u }, t)
      }
      function Pi(e, t, n, r) {
        var a = i.useContext(ht),
          u = a.activeKey,
          o = a.onActive,
          c = a.onInactive,
          s = { active: u === e }
        return (
          t ||
            ((s.onMouseEnter = function (l) {
              n == null || n({ key: e, domEvent: l }), o(e)
            }),
            (s.onMouseLeave = function (l) {
              r == null || r({ key: e, domEvent: l }), c(e)
            })),
          s
        )
      }
      var hc = ['item']
      function Xn(e) {
        var t = e.item,
          n = z(e, hc)
        return (
          Object.defineProperty(n, 'item', {
            get: function () {
              return (
                ri(
                  !1,
                  '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.',
                ),
                t
              )
            },
          }),
          n
        )
      }
      function Mi(e) {
        var t = e.icon,
          n = e.props,
          r = e.children,
          a
        return typeof t == 'function' ? (a = i.createElement(t, P({}, n))) : (a = t), a || r || null
      }
      function xi(e) {
        var t = i.useContext(ht),
          n = t.mode,
          r = t.rtl,
          a = t.inlineIndent
        if (n !== 'inline') return null
        var u = e
        return r ? { paddingRight: u * a } : { paddingLeft: u * a }
      }
      var gc = [],
        Ri = i.createContext(null)
      function Qn() {
        return i.useContext(Ri)
      }
      var Oi = i.createContext(gc)
      function Cn(e) {
        var t = i.useContext(Oi)
        return i.useMemo(
          function () {
            return e !== void 0 ? [].concat(Ge(t), [e]) : t
          },
          [t, e],
        )
      }
      var Ai = i.createContext(null),
        Ni = i.createContext(null)
      function Gr(e, t) {
        return e === void 0 ? null : ''.concat(e, '-').concat(t)
      }
      function Ii(e) {
        var t = i.useContext(Ni)
        return Gr(t, e)
      }
      var yc = i.createContext({}),
        Yr = yc,
        bc = ['title', 'attribute', 'elementRef'],
        Ec = [
          'style',
          'className',
          'eventKey',
          'warnKey',
          'disabled',
          'itemIcon',
          'children',
          'role',
          'onMouseEnter',
          'onMouseLeave',
          'onClick',
          'onKeyDown',
          'onFocus',
        ],
        Sc = ['active'],
        wc = (function (e) {
          Yt(n, e)
          var t = Xt(n)
          function n() {
            return $t(this, n), t.apply(this, arguments)
          }
          return (
            Gt(n, [
              {
                key: 'render',
                value: function () {
                  var a = this.props,
                    u = a.title,
                    o = a.attribute,
                    c = a.elementRef,
                    s = z(a, bc),
                    l = Ti(s, ['eventKey'])
                  return (
                    ri(!o, '`attribute` of Menu.Item is deprecated. Please pass attribute directly.'),
                    i.createElement(wn.Item, y({}, o, { title: typeof u == 'string' ? u : void 0 }, l, { ref: c }))
                  )
                },
              },
            ]),
            n
          )
        })(i.Component),
        _c = function (t) {
          var n,
            r = t.style,
            a = t.className,
            u = t.eventKey,
            o = t.warnKey,
            c = t.disabled,
            s = t.itemIcon,
            l = t.children,
            d = t.role,
            v = t.onMouseEnter,
            m = t.onMouseLeave,
            p = t.onClick,
            h = t.onKeyDown,
            S = t.onFocus,
            T = z(t, Ec),
            D = Ii(u),
            V = i.useContext(ht),
            F = V.prefixCls,
            N = V.onItemClick,
            j = V.disabled,
            k = V.overflowDisabled,
            B = V.itemIcon,
            K = V.selectedKeys,
            U = V.onActive,
            w = i.useContext(Yr),
            b = w._internalRenderMenuItem,
            _ = ''.concat(F, '-item'),
            R = i.useRef(),
            H = i.useRef(),
            C = j || c,
            Y = Cn(u),
            q = function (_e) {
              return { key: u, keyPath: Ge(Y).reverse(), item: R.current, domEvent: _e }
            },
            ee = s || B,
            J = Pi(u, C, v, m),
            ae = J.active,
            pe = z(J, Sc),
            Z = K.includes(u),
            $ = xi(Y.length),
            oe = function (_e) {
              if (!C) {
                var ie = q(_e)
                p == null || p(Xn(ie)), N(ie)
              }
            },
            te = function (_e) {
              if ((h == null || h(_e), _e.which === Ye.ENTER)) {
                var ie = q(_e)
                p == null || p(Xn(ie)), N(ie)
              }
            },
            me = function (_e) {
              U(u), S == null || S(_e)
            },
            Ce = {}
          t.role === 'option' && (Ce['aria-selected'] = Z)
          var fe = i.createElement(
            wc,
            y(
              {
                ref: R,
                elementRef: H,
                role: d === null ? 'none' : d || 'menuitem',
                tabIndex: c ? null : -1,
                'data-menu-id': k && D ? null : D,
              },
              T,
              pe,
              Ce,
              {
                component: 'li',
                'aria-disabled': c,
                style: P(P({}, $), r),
                className: X()(
                  _,
                  ((n = {}),
                  g(n, ''.concat(_, '-active'), ae),
                  g(n, ''.concat(_, '-selected'), Z),
                  g(n, ''.concat(_, '-disabled'), C),
                  n),
                  a,
                ),
                onClick: oe,
                onKeyDown: te,
                onFocus: me,
              },
            ),
            l,
            i.createElement(Mi, { props: P(P({}, t), {}, { isSelected: Z }), icon: ee }),
          )
          return b && (fe = b(fe, t, { selected: Z })), fe
        }
      function Cc(e) {
        var t = e.eventKey,
          n = Qn(),
          r = Cn(t)
        return (
          i.useEffect(
            function () {
              if (n)
                return (
                  n.registerPath(t, r),
                  function () {
                    n.unregisterPath(t, r)
                  }
                )
            },
            [r],
          ),
          n ? null : i.createElement(_c, e)
        )
      }
      var Zn = Cc,
        Tc = ['label', 'children', 'key', 'type']
      function Xr(e, t) {
        return ve(e).map(function (n, r) {
          if (i.isValidElement(n)) {
            var a,
              u,
              o = n.key,
              c = (a = (u = n.props) === null || u === void 0 ? void 0 : u.eventKey) !== null && a !== void 0 ? a : o,
              s = c == null
            s && (c = 'tmp_key-'.concat([].concat(Ge(t), [r]).join('-')))
            var l = { key: c, eventKey: c }
            return i.cloneElement(n, l)
          }
          return n
        })
      }
      function Qr(e) {
        return (e || [])
          .map(function (t, n) {
            if (t && re(t) === 'object') {
              var r = t.label,
                a = t.children,
                u = t.key,
                o = t.type,
                c = z(t, Tc),
                s = u != null ? u : 'tmp-'.concat(n)
              return a || o === 'group'
                ? o === 'group'
                  ? i.createElement(iu, y({ key: s }, c, { title: r }), Qr(a))
                  : i.createElement(wo, y({ key: s }, c, { title: r }), Qr(a))
                : o === 'divider'
                ? i.createElement(au, y({ key: s }, c))
                : i.createElement(Zn, y({ key: s }, c), r)
            }
            return null
          })
          .filter(function (t) {
            return t
          })
      }
      function Pc(e, t, n) {
        var r = e
        return t && (r = Qr(t)), Xr(r, n)
      }
      function an(e) {
        var t = i.useRef(e)
        t.current = e
        var n = i.useCallback(function () {
          for (var r, a = arguments.length, u = new Array(a), o = 0; o < a; o++) u[o] = arguments[o]
          return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(u))
        }, [])
        return e ? n : void 0
      }
      var Mc = ['className', 'children'],
        xc = function (t, n) {
          var r = t.className,
            a = t.children,
            u = z(t, Mc),
            o = i.useContext(ht),
            c = o.prefixCls,
            s = o.mode,
            l = o.rtl
          return i.createElement(
            'ul',
            y(
              {
                className: X()(
                  c,
                  l && ''.concat(c, '-rtl'),
                  ''.concat(c, '-sub'),
                  ''.concat(c, '-').concat(s === 'inline' ? 'inline' : 'vertical'),
                  r,
                ),
              },
              u,
              { 'data-menu-list': !0, ref: n },
            ),
            a,
          )
        },
        ki = i.forwardRef(xc)
      ki.displayName = 'SubMenuList'
      var Li = ki
      function Jn(e, t) {
        return e ? e.contains(t) : !1
      }
      function Tn(e, t, n, r) {
        var a = mt.unstable_batchedUpdates
          ? function (o) {
              mt.unstable_batchedUpdates(n, o)
            }
          : n
        return (
          e.addEventListener && e.addEventListener(t, a, r),
          {
            remove: function () {
              e.removeEventListener && e.removeEventListener(t, a)
            },
          }
        )
      }
      var Rc = (0, i.forwardRef)(function (e, t) {
          var n = e.didUpdate,
            r = e.getContainer,
            a = e.children,
            u = (0, i.useRef)()
          ;(0, i.useImperativeHandle)(t, function () {
            return {}
          })
          var o = (0, i.useRef)(!1)
          return (
            !o.current && jt() && ((u.current = r()), (o.current = !0)),
            (0, i.useEffect)(function () {
              n == null || n(e)
            }),
            (0, i.useEffect)(function () {
              return function () {
                var c, s
                ;(c = u.current) === null ||
                  c === void 0 ||
                  (s = c.parentNode) === null ||
                  s === void 0 ||
                  s.removeChild(u.current)
              }
            }, []),
            u.current ? mt.createPortal(a, u.current) : null
          )
        }),
        Oc = Rc
      function Ac(e, t, n) {
        return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1]
      }
      function Nc(e, t, n) {
        var r = e[t] || {}
        return P(P({}, r), n)
      }
      function Ic(e, t, n, r) {
        for (var a = n.points, u = Object.keys(e), o = 0; o < u.length; o += 1) {
          var c = u[o]
          if (Ac(e[c].points, a, r)) return ''.concat(t, '-placement-').concat(c)
        }
        return ''
      }
      function Di(e, t) {
        var n = {}
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n['Webkit'.concat(e)] = 'webkit'.concat(t)),
          (n['Moz'.concat(e)] = 'moz'.concat(t)),
          (n['ms'.concat(e)] = 'MS'.concat(t)),
          (n['O'.concat(e)] = 'o'.concat(t.toLowerCase())),
          n
        )
      }
      function kc(e, t) {
        var n = { animationend: Di('Animation', 'AnimationEnd'), transitionend: Di('Transition', 'TransitionEnd') }
        return (
          e &&
            ('AnimationEvent' in t || delete n.animationend.animation,
            'TransitionEvent' in t || delete n.transitionend.transition),
          n
        )
      }
      var Lc = kc(jt(), typeof window != 'undefined' ? window : {}),
        ji = {}
      if (jt()) {
        var Dc = document.createElement('div')
        ji = Dc.style
      }
      var qn = {}
      function Vi(e) {
        if (qn[e]) return qn[e]
        var t = Lc[e]
        if (t)
          for (var n = Object.keys(t), r = n.length, a = 0; a < r; a += 1) {
            var u = n[a]
            if (Object.prototype.hasOwnProperty.call(t, u) && u in ji) return (qn[e] = t[u]), qn[e]
          }
        return ''
      }
      var Hi = Vi('animationend'),
        Fi = Vi('transitionend'),
        Ui = !!(Hi && Fi),
        Ki = Hi || 'animationend',
        Wi = Fi || 'transitionend'
      function Bi(e, t) {
        if (!e) return null
        if (re(e) === 'object') {
          var n = t.replace(/-\w/g, function (r) {
            return r[1].toUpperCase()
          })
          return e[n]
        }
        return ''.concat(e, '-').concat(t)
      }
      var Pn = 'none',
        er = 'appear',
        tr = 'enter',
        nr = 'leave',
        zi = 'none',
        Pt = 'prepare',
        un = 'start',
        sn = 'active',
        Zr = 'end'
      function rr(e) {
        var t = (0, i.useRef)(!1),
          n = (0, i.useState)(e),
          r = O(n, 2),
          a = r[0],
          u = r[1]
        function o(c) {
          t.current || u(c)
        }
        return (
          (0, i.useEffect)(function () {
            return function () {
              t.current = !0
            }
          }, []),
          [a, o]
        )
      }
      var jc = jt() ? i.useLayoutEffect : i.useEffect,
        $i = jc,
        Vc = function () {
          var e = i.useRef(null)
          function t() {
            Fe.cancel(e.current)
          }
          function n(r) {
            var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2
            t()
            var u = Fe(function () {
              a <= 1
                ? r({
                    isCanceled: function () {
                      return u !== e.current
                    },
                  })
                : n(r, a - 1)
            })
            e.current = u
          }
          return (
            i.useEffect(function () {
              return function () {
                t()
              }
            }, []),
            [n, t]
          )
        },
        Gi = [Pt, un, sn, Zr],
        Yi = !1,
        Hc = !0
      function Xi(e) {
        return e === sn || e === Zr
      }
      var Fc = function (e, t) {
          var n = rr(zi),
            r = O(n, 2),
            a = r[0],
            u = r[1],
            o = Vc(),
            c = O(o, 2),
            s = c[0],
            l = c[1]
          function d() {
            u(Pt)
          }
          return (
            $i(
              function () {
                if (a !== zi && a !== Zr) {
                  var v = Gi.indexOf(a),
                    m = Gi[v + 1],
                    p = t(a)
                  p === Yi
                    ? u(m)
                    : s(function (h) {
                        function S() {
                          h.isCanceled() || u(m)
                        }
                        p === !0 ? S() : Promise.resolve(p).then(S)
                      })
                }
              },
              [e, a],
            ),
            i.useEffect(function () {
              return function () {
                l()
              }
            }, []),
            [d, a]
          )
        },
        Uc = function (e) {
          var t = (0, i.useRef)(),
            n = (0, i.useRef)(e)
          n.current = e
          var r = i.useCallback(function (o) {
            n.current(o)
          }, [])
          function a(o) {
            o && (o.removeEventListener(Wi, r), o.removeEventListener(Ki, r))
          }
          function u(o) {
            t.current && t.current !== o && a(t.current),
              o && o !== t.current && (o.addEventListener(Wi, r), o.addEventListener(Ki, r), (t.current = o))
          }
          return (
            i.useEffect(function () {
              return function () {
                a(t.current)
              }
            }, []),
            [u, a]
          )
        }
      function Kc(e, t, n, r) {
        var a = r.motionEnter,
          u = a === void 0 ? !0 : a,
          o = r.motionAppear,
          c = o === void 0 ? !0 : o,
          s = r.motionLeave,
          l = s === void 0 ? !0 : s,
          d = r.motionDeadline,
          v = r.motionLeaveImmediately,
          m = r.onAppearPrepare,
          p = r.onEnterPrepare,
          h = r.onLeavePrepare,
          S = r.onAppearStart,
          T = r.onEnterStart,
          D = r.onLeaveStart,
          V = r.onAppearActive,
          F = r.onEnterActive,
          N = r.onLeaveActive,
          j = r.onAppearEnd,
          k = r.onEnterEnd,
          B = r.onLeaveEnd,
          K = r.onVisibleChanged,
          U = rr(),
          w = O(U, 2),
          b = w[0],
          _ = w[1],
          R = rr(Pn),
          H = O(R, 2),
          C = H[0],
          Y = H[1],
          q = rr(null),
          ee = O(q, 2),
          J = ee[0],
          ae = ee[1],
          pe = (0, i.useRef)(!1),
          Z = (0, i.useRef)(null),
          $ = (0, i.useRef)(!1),
          oe = (0, i.useRef)(null)
        function te() {
          var W = n()
          return W || oe.current
        }
        var me = (0, i.useRef)(!1)
        function Ce(W) {
          var Q = te()
          if (!(W && !W.deadline && W.target !== Q)) {
            var ne
            C === er && me.current
              ? (ne = j == null ? void 0 : j(Q, W))
              : C === tr && me.current
              ? (ne = k == null ? void 0 : k(Q, W))
              : C === nr && me.current && (ne = B == null ? void 0 : B(Q, W)),
              ne !== !1 && !$.current && (Y(Pn), ae(null))
          }
        }
        var fe = Uc(Ce),
          Re = O(fe, 1),
          _e = Re[0],
          ie = i.useMemo(
            function () {
              var W, Q, ne
              switch (C) {
                case er:
                  return (W = {}), g(W, Pt, m), g(W, un, S), g(W, sn, V), W
                case tr:
                  return (Q = {}), g(Q, Pt, p), g(Q, un, T), g(Q, sn, F), Q
                case nr:
                  return (ne = {}), g(ne, Pt, h), g(ne, un, D), g(ne, sn, N), ne
                default:
                  return {}
              }
            },
            [C],
          ),
          Ee = Fc(C, function (W) {
            if (W === Pt) {
              var Q = ie[Pt]
              return Q ? Q(te()) : Yi
            }
            if (de in ie) {
              var ne
              ae(((ne = ie[de]) === null || ne === void 0 ? void 0 : ne.call(ie, te(), null)) || null)
            }
            return (
              de === sn &&
                (_e(te()),
                d > 0 &&
                  (clearTimeout(Z.current),
                  (Z.current = setTimeout(function () {
                    Ce({ deadline: !0 })
                  }, d)))),
              Hc
            )
          }),
          he = O(Ee, 2),
          Ae = he[0],
          de = he[1],
          je = Xi(de)
        ;(me.current = je),
          $i(
            function () {
              _(t)
              var W = pe.current
              if (((pe.current = !0), !!e)) {
                var Q
                !W && t && c && (Q = er),
                  W && t && u && (Q = tr),
                  ((W && !t && l) || (!W && v && !t && l)) && (Q = nr),
                  Q && (Y(Q), Ae())
              }
            },
            [t],
          ),
          (0, i.useEffect)(
            function () {
              ;((C === er && !c) || (C === tr && !u) || (C === nr && !l)) && Y(Pn)
            },
            [c, u, l],
          ),
          (0, i.useEffect)(function () {
            return function () {
              clearTimeout(Z.current), ($.current = !0)
            }
          }, []),
          (0, i.useEffect)(
            function () {
              b !== void 0 && C === Pn && (K == null || K(b))
            },
            [b, C],
          )
        var Ue = J
        return ie[Pt] && de === un && (Ue = P({ transition: 'none' }, Ue)), [C, de, Ue, b != null ? b : t]
      }
      var Wc = (function (e) {
          Yt(n, e)
          var t = Xt(n)
          function n() {
            return $t(this, n), t.apply(this, arguments)
          }
          return (
            Gt(n, [
              {
                key: 'render',
                value: function () {
                  return this.props.children
                },
              },
            ]),
            n
          )
        })(i.Component),
        Bc = Wc
      function zc(e) {
        var t = e
        re(e) === 'object' && (t = e.transitionSupport)
        function n(a) {
          return !!(a.motionName && t)
        }
        var r = i.forwardRef(function (a, u) {
          var o = a.visible,
            c = o === void 0 ? !0 : o,
            s = a.removeOnLeave,
            l = s === void 0 ? !0 : s,
            d = a.forceRender,
            v = a.children,
            m = a.motionName,
            p = a.leavedClassName,
            h = a.eventProps,
            S = n(a),
            T = (0, i.useRef)(),
            D = (0, i.useRef)()
          function V() {
            try {
              return T.current instanceof HTMLElement ? T.current : En(D.current)
            } catch (C) {
              return null
            }
          }
          var F = Kc(S, c, V, a),
            N = O(F, 4),
            j = N[0],
            k = N[1],
            B = N[2],
            K = N[3],
            U = i.useRef(K)
          K && (U.current = !0)
          var w = i.useCallback(function (C) {
              ;(T.current = C), Wr(u, C)
            }, []),
            b,
            _ = P(P({}, h), {}, { visible: c })
          if (!v) b = null
          else if (j === Pn || !n(a))
            K
              ? (b = v(P({}, _), w))
              : !l && U.current
              ? (b = v(P(P({}, _), {}, { className: p }), w))
              : d
              ? (b = v(P(P({}, _), {}, { style: { display: 'none' } }), w))
              : (b = null)
          else {
            var R, H
            k === Pt ? (H = 'prepare') : Xi(k) ? (H = 'active') : k === un && (H = 'start'),
              (b = v(
                P(
                  P({}, _),
                  {},
                  {
                    className: X()(
                      Bi(m, j),
                      ((R = {}), g(R, Bi(m, ''.concat(j, '-').concat(H)), H), g(R, m, typeof m == 'string'), R),
                    ),
                    style: B,
                  },
                ),
                w,
              ))
          }
          return i.createElement(Bc, { ref: D }, b)
        })
        return (r.displayName = 'CSSMotion'), r
      }
      var Qi = zc(Ui),
        Jr = 'add',
        qr = 'keep',
        eo = 'remove',
        Zi = 'removed'
      function $c(e) {
        var t
        return (
          e && re(e) === 'object' && 'key' in e ? (t = e) : (t = { key: e }), P(P({}, t), {}, { key: String(t.key) })
        )
      }
      function to() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
        return e.map($c)
      }
      function Gc() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
          t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
          n = [],
          r = 0,
          a = t.length,
          u = to(e),
          o = to(t)
        u.forEach(function (l) {
          for (var d = !1, v = r; v < a; v += 1) {
            var m = o[v]
            if (m.key === l.key) {
              r < v &&
                ((n = n.concat(
                  o.slice(r, v).map(function (p) {
                    return P(P({}, p), {}, { status: Jr })
                  }),
                )),
                (r = v)),
                n.push(P(P({}, m), {}, { status: qr })),
                (r += 1),
                (d = !0)
              break
            }
          }
          d || n.push(P(P({}, l), {}, { status: eo }))
        }),
          r < a &&
            (n = n.concat(
              o.slice(r).map(function (l) {
                return P(P({}, l), {}, { status: Jr })
              }),
            ))
        var c = {}
        n.forEach(function (l) {
          var d = l.key
          c[d] = (c[d] || 0) + 1
        })
        var s = Object.keys(c).filter(function (l) {
          return c[l] > 1
        })
        return (
          s.forEach(function (l) {
            ;(n = n.filter(function (d) {
              var v = d.key,
                m = d.status
              return v !== l || m !== eo
            })),
              n.forEach(function (d) {
                d.key === l && (d.status = qr)
              })
          }),
          n
        )
      }
      var Yc = ['component', 'children', 'onVisibleChanged'],
        Xc = ['status'],
        Qc = [
          'eventProps',
          'visible',
          'children',
          'motionName',
          'motionAppear',
          'motionEnter',
          'motionLeave',
          'motionLeaveImmediately',
          'motionDeadline',
          'removeOnLeave',
          'leavedClassName',
          'onAppearStart',
          'onAppearActive',
          'onAppearEnd',
          'onEnterStart',
          'onEnterActive',
          'onEnterEnd',
          'onLeaveStart',
          'onLeaveActive',
          'onLeaveEnd',
        ]
      function Zc(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qi,
          n = (function (r) {
            Yt(u, r)
            var a = Xt(u)
            function u() {
              var o
              $t(this, u)
              for (var c = arguments.length, s = new Array(c), l = 0; l < c; l++) s[l] = arguments[l]
              return (
                (o = a.call.apply(a, [this].concat(s))),
                (o.state = { keyEntities: [] }),
                (o.removeKey = function (d) {
                  o.setState(function (v) {
                    var m = v.keyEntities
                    return {
                      keyEntities: m.map(function (p) {
                        return p.key !== d ? p : P(P({}, p), {}, { status: Zi })
                      }),
                    }
                  })
                }),
                o
              )
            }
            return (
              Gt(
                u,
                [
                  {
                    key: 'render',
                    value: function () {
                      var c = this,
                        s = this.state.keyEntities,
                        l = this.props,
                        d = l.component,
                        v = l.children,
                        m = l.onVisibleChanged,
                        p = z(l, Yc),
                        h = d || i.Fragment,
                        S = {}
                      return (
                        Qc.forEach(function (T) {
                          ;(S[T] = p[T]), delete p[T]
                        }),
                        delete p.keys,
                        i.createElement(
                          h,
                          p,
                          s.map(function (T) {
                            var D = T.status,
                              V = z(T, Xc),
                              F = D === Jr || D === qr
                            return i.createElement(
                              t,
                              y({}, S, {
                                key: V.key,
                                visible: F,
                                eventProps: V,
                                onVisibleChanged: function (j) {
                                  m == null || m(j, { key: V.key }), j || c.removeKey(V.key)
                                },
                              }),
                              v,
                            )
                          }),
                        )
                      )
                    },
                  },
                ],
                [
                  {
                    key: 'getDerivedStateFromProps',
                    value: function (c, s) {
                      var l = c.keys,
                        d = s.keyEntities,
                        v = to(l),
                        m = Gc(d, v)
                      return {
                        keyEntities: m.filter(function (p) {
                          var h = d.find(function (S) {
                            var T = S.key
                            return p.key === T
                          })
                          return !(h && h.status === Zi && p.status === eo)
                        }),
                      }
                    },
                  },
                ],
              ),
              u
            )
          })(i.Component)
        return (n.defaultProps = { component: 'div' }), n
      }
      var jv = Zc(Ui),
        no = Qi
      function Ji(e) {
        var t = e.prefixCls,
          n = e.motion,
          r = e.animation,
          a = e.transitionName
        return n || (r ? { motionName: ''.concat(t, '-').concat(r) } : a ? { motionName: a } : null)
      }
      function Jc(e) {
        var t = e.prefixCls,
          n = e.visible,
          r = e.zIndex,
          a = e.mask,
          u = e.maskMotion,
          o = e.maskAnimation,
          c = e.maskTransitionName
        if (!a) return null
        var s = {}
        return (
          (u || c || o) &&
            (s = P({ motionAppear: !0 }, Ji({ motion: u, prefixCls: t, transitionName: c, animation: o }))),
          i.createElement(no, y({}, s, { visible: n, removeOnLeave: !0 }), function (l) {
            var d = l.className
            return i.createElement('div', { style: { zIndex: r }, className: X()(''.concat(t, '-mask'), d) })
          })
        )
      }
      var qi = function (e) {
        if (!e) return !1
        if (e.offsetParent) return !0
        if (e.getBBox) {
          var t = e.getBBox()
          if (t.width || t.height) return !0
        }
        if (e.getBoundingClientRect) {
          var n = e.getBoundingClientRect()
          if (n.width || n.height) return !0
        }
        return !1
      }
      function ea(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function ta(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {}
          t % 2
            ? ea(Object(n), !0).forEach(function (r) {
                qc(e, r, n[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ea(Object(n)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
              })
        }
        return e
      }
      function or(e) {
        return (
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? (or = function (t) {
                return typeof t
              })
            : (or = function (t) {
                return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t
              }),
          or(e)
        )
      }
      function qc(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      var Mn,
        el = { Webkit: '-webkit-', Moz: '-moz-', ms: '-ms-', O: '-o-' }
      function ir() {
        if (Mn !== void 0) return Mn
        Mn = ''
        var e = document.createElement('p').style,
          t = 'Transform'
        for (var n in el) n + t in e && (Mn = n)
        return Mn
      }
      function na() {
        return ir() ? ''.concat(ir(), 'TransitionProperty') : 'transitionProperty'
      }
      function ar() {
        return ir() ? ''.concat(ir(), 'Transform') : 'transform'
      }
      function ra(e, t) {
        var n = na()
        n && ((e.style[n] = t), n !== 'transitionProperty' && (e.style.transitionProperty = t))
      }
      function ro(e, t) {
        var n = ar()
        n && ((e.style[n] = t), n !== 'transform' && (e.style.transform = t))
      }
      function tl(e) {
        return e.style.transitionProperty || e.style[na()]
      }
      function nl(e) {
        var t = window.getComputedStyle(e, null),
          n = t.getPropertyValue('transform') || t.getPropertyValue(ar())
        if (n && n !== 'none') {
          var r = n.replace(/[^0-9\-.,]/g, '').split(',')
          return { x: parseFloat(r[12] || r[4], 0), y: parseFloat(r[13] || r[5], 0) }
        }
        return { x: 0, y: 0 }
      }
      var rl = /matrix\((.*)\)/,
        ol = /matrix3d\((.*)\)/
      function il(e, t) {
        var n = window.getComputedStyle(e, null),
          r = n.getPropertyValue('transform') || n.getPropertyValue(ar())
        if (r && r !== 'none') {
          var a,
            u = r.match(rl)
          if (u)
            (u = u[1]),
              (a = u.split(',').map(function (c) {
                return parseFloat(c, 10)
              })),
              (a[4] = t.x),
              (a[5] = t.y),
              ro(e, 'matrix('.concat(a.join(','), ')'))
          else {
            var o = r.match(ol)[1]
            ;(a = o.split(',').map(function (c) {
              return parseFloat(c, 10)
            })),
              (a[12] = t.x),
              (a[13] = t.y),
              ro(e, 'matrix3d('.concat(a.join(','), ')'))
          }
        } else ro(e, 'translateX('.concat(t.x, 'px) translateY(').concat(t.y, 'px) translateZ(0)'))
      }
      var al = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        xn
      function oa(e) {
        var t = e.style.display
        ;(e.style.display = 'none'), e.offsetHeight, (e.style.display = t)
      }
      function cn(e, t, n) {
        var r = n
        if (or(t) === 'object') {
          for (var a in t) t.hasOwnProperty(a) && cn(e, a, t[a])
          return
        }
        if (typeof r != 'undefined') {
          typeof r == 'number' && (r = ''.concat(r, 'px')), (e.style[t] = r)
          return
        }
        return xn(e, t)
      }
      function ul(e) {
        var t,
          n,
          r,
          a = e.ownerDocument,
          u = a.body,
          o = a && a.documentElement
        return (
          (t = e.getBoundingClientRect()),
          (n = t.left),
          (r = t.top),
          (n -= o.clientLeft || u.clientLeft || 0),
          (r -= o.clientTop || u.clientTop || 0),
          { left: n, top: r }
        )
      }
      function ia(e, t) {
        var n = e['page'.concat(t ? 'Y' : 'X', 'Offset')],
          r = 'scroll'.concat(t ? 'Top' : 'Left')
        if (typeof n != 'number') {
          var a = e.document
          ;(n = a.documentElement[r]), typeof n != 'number' && (n = a.body[r])
        }
        return n
      }
      function aa(e) {
        return ia(e)
      }
      function ua(e) {
        return ia(e, !0)
      }
      function Rn(e) {
        var t = ul(e),
          n = e.ownerDocument,
          r = n.defaultView || n.parentWindow
        return (t.left += aa(r)), (t.top += ua(r)), t
      }
      function oo(e) {
        return e != null && e == e.window
      }
      function sa(e) {
        return oo(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument
      }
      function sl(e, t, n) {
        var r = n,
          a = '',
          u = sa(e)
        return (r = r || u.defaultView.getComputedStyle(e, null)), r && (a = r.getPropertyValue(t) || r[t]), a
      }
      var cl = new RegExp('^('.concat(al, ')(?!px)[a-z%]+$'), 'i'),
        ll = /^(top|right|bottom|left)$/,
        io = 'currentStyle',
        ao = 'runtimeStyle',
        Qt = 'left',
        fl = 'px'
      function dl(e, t) {
        var n = e[io] && e[io][t]
        if (cl.test(n) && !ll.test(t)) {
          var r = e.style,
            a = r[Qt],
            u = e[ao][Qt]
          ;(e[ao][Qt] = e[io][Qt]),
            (r[Qt] = t === 'fontSize' ? '1em' : n || 0),
            (n = r.pixelLeft + fl),
            (r[Qt] = a),
            (e[ao][Qt] = u)
        }
        return n === '' ? 'auto' : n
      }
      typeof window != 'undefined' && (xn = window.getComputedStyle ? sl : dl)
      function ur(e, t) {
        return e === 'left' ? (t.useCssRight ? 'right' : e) : t.useCssBottom ? 'bottom' : e
      }
      function ca(e) {
        if (e === 'left') return 'right'
        if (e === 'right') return 'left'
        if (e === 'top') return 'bottom'
        if (e === 'bottom') return 'top'
      }
      function la(e, t, n) {
        cn(e, 'position') === 'static' && (e.style.position = 'relative')
        var r = -999,
          a = -999,
          u = ur('left', n),
          o = ur('top', n),
          c = ca(u),
          s = ca(o)
        u !== 'left' && (r = 999), o !== 'top' && (a = 999)
        var l = '',
          d = Rn(e)
        ;('left' in t || 'top' in t) && ((l = tl(e) || ''), ra(e, 'none')),
          'left' in t && ((e.style[c] = ''), (e.style[u] = ''.concat(r, 'px'))),
          'top' in t && ((e.style[s] = ''), (e.style[o] = ''.concat(a, 'px'))),
          oa(e)
        var v = Rn(e),
          m = {}
        for (var p in t)
          if (t.hasOwnProperty(p)) {
            var h = ur(p, n),
              S = p === 'left' ? r : a,
              T = d[p] - v[p]
            h === p ? (m[h] = S + T) : (m[h] = S - T)
          }
        cn(e, m), oa(e), ('left' in t || 'top' in t) && ra(e, l)
        var D = {}
        for (var V in t)
          if (t.hasOwnProperty(V)) {
            var F = ur(V, n),
              N = t[V] - d[V]
            V === F ? (D[F] = m[F] + N) : (D[F] = m[F] - N)
          }
        cn(e, D)
      }
      function vl(e, t) {
        var n = Rn(e),
          r = nl(e),
          a = { x: r.x, y: r.y }
        'left' in t && (a.x = r.x + t.left - n.left), 'top' in t && (a.y = r.y + t.top - n.top), il(e, a)
      }
      function pl(e, t, n) {
        if (n.ignoreShake) {
          var r = Rn(e),
            a = r.left.toFixed(0),
            u = r.top.toFixed(0),
            o = t.left.toFixed(0),
            c = t.top.toFixed(0)
          if (a === o && u === c) return
        }
        n.useCssRight || n.useCssBottom
          ? la(e, t, n)
          : n.useCssTransform && ar() in document.body.style
          ? vl(e, t)
          : la(e, t, n)
      }
      function uo(e, t) {
        for (var n = 0; n < e.length; n++) t(e[n])
      }
      function fa(e) {
        return xn(e, 'boxSizing') === 'border-box'
      }
      var ml = ['margin', 'border', 'padding'],
        so = -1,
        hl = 2,
        co = 1,
        gl = 0
      function yl(e, t, n) {
        var r = {},
          a = e.style,
          u
        for (u in t) t.hasOwnProperty(u) && ((r[u] = a[u]), (a[u] = t[u]))
        n.call(e)
        for (u in t) t.hasOwnProperty(u) && (a[u] = r[u])
      }
      function On(e, t, n) {
        var r = 0,
          a,
          u,
          o
        for (u = 0; u < t.length; u++)
          if (((a = t[u]), a))
            for (o = 0; o < n.length; o++) {
              var c = void 0
              a === 'border' ? (c = ''.concat(a).concat(n[o], 'Width')) : (c = a + n[o]),
                (r += parseFloat(xn(e, c)) || 0)
            }
        return r
      }
      var Et = {
        getParent: function (t) {
          var n = t
          do n.nodeType === 11 && n.host ? (n = n.host) : (n = n.parentNode)
          while (n && n.nodeType !== 1 && n.nodeType !== 9)
          return n
        },
      }
      uo(['Width', 'Height'], function (e) {
        ;(Et['doc'.concat(e)] = function (t) {
          var n = t.document
          return Math.max(
            n.documentElement['scroll'.concat(e)],
            n.body['scroll'.concat(e)],
            Et['viewport'.concat(e)](n),
          )
        }),
          (Et['viewport'.concat(e)] = function (t) {
            var n = 'client'.concat(e),
              r = t.document,
              a = r.body,
              u = r.documentElement,
              o = u[n]
            return (r.compatMode === 'CSS1Compat' && o) || (a && a[n]) || o
          })
      })
      function da(e, t, n) {
        var r = n
        if (oo(e)) return t === 'width' ? Et.viewportWidth(e) : Et.viewportHeight(e)
        if (e.nodeType === 9) return t === 'width' ? Et.docWidth(e) : Et.docHeight(e)
        var a = t === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'],
          u = t === 'width' ? e.getBoundingClientRect().width : e.getBoundingClientRect().height,
          o = fa(e),
          c = 0
        ;(u == null || u <= 0) &&
          ((u = void 0),
          (c = xn(e, t)),
          (c == null || Number(c) < 0) && (c = e.style[t] || 0),
          (c = parseFloat(c) || 0)),
          r === void 0 && (r = o ? co : so)
        var s = u !== void 0 || o,
          l = u || c
        return r === so
          ? s
            ? l - On(e, ['border', 'padding'], a)
            : c
          : s
          ? r === co
            ? l
            : l + (r === hl ? -On(e, ['border'], a) : On(e, ['margin'], a))
          : c + On(e, ml.slice(r), a)
      }
      var bl = { position: 'absolute', visibility: 'hidden', display: 'block' }
      function va() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        var r,
          a = t[0]
        return (
          a.offsetWidth !== 0
            ? (r = da.apply(void 0, t))
            : yl(a, bl, function () {
                r = da.apply(void 0, t)
              }),
          r
        )
      }
      uo(['width', 'height'], function (e) {
        var t = e.charAt(0).toUpperCase() + e.slice(1)
        Et['outer'.concat(t)] = function (r, a) {
          return r && va(r, e, a ? gl : co)
        }
        var n = e === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom']
        Et[e] = function (r, a) {
          var u = a
          if (u !== void 0) {
            if (r) {
              var o = fa(r)
              return o && (u += On(r, ['padding', 'border'], n)), cn(r, e, u)
            }
            return
          }
          return r && va(r, e, so)
        }
      })
      function pa(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        return e
      }
      var ye = {
        getWindow: function (t) {
          if (t && t.document && t.setTimeout) return t
          var n = t.ownerDocument || t
          return n.defaultView || n.parentWindow
        },
        getDocument: sa,
        offset: function (t, n, r) {
          if (typeof n != 'undefined') pl(t, n, r || {})
          else return Rn(t)
        },
        isWindow: oo,
        each: uo,
        css: cn,
        clone: function (t) {
          var n,
            r = {}
          for (n in t) t.hasOwnProperty(n) && (r[n] = t[n])
          var a = t.overflow
          if (a) for (n in t) t.hasOwnProperty(n) && (r.overflow[n] = t.overflow[n])
          return r
        },
        mix: pa,
        getWindowScrollLeft: function (t) {
          return aa(t)
        },
        getWindowScrollTop: function (t) {
          return ua(t)
        },
        merge: function () {
          for (var t = {}, n = 0; n < arguments.length; n++)
            ye.mix(t, n < 0 || arguments.length <= n ? void 0 : arguments[n])
          return t
        },
        viewportWidth: 0,
        viewportHeight: 0,
      }
      pa(ye, Et)
      var lo = ye.getParent
      function fo(e) {
        if (ye.isWindow(e) || e.nodeType === 9) return null
        var t = ye.getDocument(e),
          n = t.body,
          r,
          a = ye.css(e, 'position'),
          u = a === 'fixed' || a === 'absolute'
        if (!u) return e.nodeName.toLowerCase() === 'html' ? null : lo(e)
        for (r = lo(e); r && r !== n && r.nodeType !== 9; r = lo(r))
          if (((a = ye.css(r, 'position')), a !== 'static')) return r
        return null
      }
      var ma = ye.getParent
      function El(e) {
        if (ye.isWindow(e) || e.nodeType === 9) return !1
        var t = ye.getDocument(e),
          n = t.body,
          r = null
        for (r = ma(e); r && r !== n && r !== t; r = ma(r)) {
          var a = ye.css(r, 'position')
          if (a === 'fixed') return !0
        }
        return !1
      }
      function vo(e, t) {
        for (
          var n = { left: 0, right: Infinity, top: 0, bottom: Infinity },
            r = fo(e),
            a = ye.getDocument(e),
            u = a.defaultView || a.parentWindow,
            o = a.body,
            c = a.documentElement;
          r;

        ) {
          if (
            (navigator.userAgent.indexOf('MSIE') === -1 || r.clientWidth !== 0) &&
            r !== o &&
            r !== c &&
            ye.css(r, 'overflow') !== 'visible'
          ) {
            var s = ye.offset(r)
            ;(s.left += r.clientLeft),
              (s.top += r.clientTop),
              (n.top = Math.max(n.top, s.top)),
              (n.right = Math.min(n.right, s.left + r.clientWidth)),
              (n.bottom = Math.min(n.bottom, s.top + r.clientHeight)),
              (n.left = Math.max(n.left, s.left))
          } else if (r === o || r === c) break
          r = fo(r)
        }
        var l = null
        if (!ye.isWindow(e) && e.nodeType !== 9) {
          l = e.style.position
          var d = ye.css(e, 'position')
          d === 'absolute' && (e.style.position = 'fixed')
        }
        var v = ye.getWindowScrollLeft(u),
          m = ye.getWindowScrollTop(u),
          p = ye.viewportWidth(u),
          h = ye.viewportHeight(u),
          S = c.scrollWidth,
          T = c.scrollHeight,
          D = window.getComputedStyle(o)
        if (
          (D.overflowX === 'hidden' && (S = u.innerWidth),
          D.overflowY === 'hidden' && (T = u.innerHeight),
          e.style && (e.style.position = l),
          t || El(e))
        )
          (n.left = Math.max(n.left, v)),
            (n.top = Math.max(n.top, m)),
            (n.right = Math.min(n.right, v + p)),
            (n.bottom = Math.min(n.bottom, m + h))
        else {
          var V = Math.max(S, v + p)
          n.right = Math.min(n.right, V)
          var F = Math.max(T, m + h)
          n.bottom = Math.min(n.bottom, F)
        }
        return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left ? n : null
      }
      function Sl(e, t, n, r) {
        var a = ye.clone(e),
          u = { width: t.width, height: t.height }
        return (
          r.adjustX && a.left < n.left && (a.left = n.left),
          r.resizeWidth && a.left >= n.left && a.left + u.width > n.right && (u.width -= a.left + u.width - n.right),
          r.adjustX && a.left + u.width > n.right && (a.left = Math.max(n.right - u.width, n.left)),
          r.adjustY && a.top < n.top && (a.top = n.top),
          r.resizeHeight && a.top >= n.top && a.top + u.height > n.bottom && (u.height -= a.top + u.height - n.bottom),
          r.adjustY && a.top + u.height > n.bottom && (a.top = Math.max(n.bottom - u.height, n.top)),
          ye.mix(a, u)
        )
      }
      function po(e) {
        var t, n, r
        if (!ye.isWindow(e) && e.nodeType !== 9) (t = ye.offset(e)), (n = ye.outerWidth(e)), (r = ye.outerHeight(e))
        else {
          var a = ye.getWindow(e)
          ;(t = { left: ye.getWindowScrollLeft(a), top: ye.getWindowScrollTop(a) }),
            (n = ye.viewportWidth(a)),
            (r = ye.viewportHeight(a))
        }
        return (t.width = n), (t.height = r), t
      }
      function ha(e, t) {
        var n = t.charAt(0),
          r = t.charAt(1),
          a = e.width,
          u = e.height,
          o = e.left,
          c = e.top
        return (
          n === 'c' ? (c += u / 2) : n === 'b' && (c += u),
          r === 'c' ? (o += a / 2) : r === 'r' && (o += a),
          { left: o, top: c }
        )
      }
      function sr(e, t, n, r, a) {
        var u = ha(t, n[1]),
          o = ha(e, n[0]),
          c = [o.left - u.left, o.top - u.top]
        return { left: Math.round(e.left - c[0] + r[0] - a[0]), top: Math.round(e.top - c[1] + r[1] - a[1]) }
      }
      function ga(e, t, n) {
        return e.left < n.left || e.left + t.width > n.right
      }
      function ya(e, t, n) {
        return e.top < n.top || e.top + t.height > n.bottom
      }
      function wl(e, t, n) {
        return e.left > n.right || e.left + t.width < n.left
      }
      function _l(e, t, n) {
        return e.top > n.bottom || e.top + t.height < n.top
      }
      function cr(e, t, n) {
        var r = []
        return (
          ye.each(e, function (a) {
            r.push(
              a.replace(t, function (u) {
                return n[u]
              }),
            )
          }),
          r
        )
      }
      function lr(e, t) {
        return (e[t] = -e[t]), e
      }
      function ba(e, t) {
        var n
        return (
          /%$/.test(e) ? (n = (parseInt(e.substring(0, e.length - 1), 10) / 100) * t) : (n = parseInt(e, 10)), n || 0
        )
      }
      function Ea(e, t) {
        ;(e[0] = ba(e[0], t.width)), (e[1] = ba(e[1], t.height))
      }
      function Sa(e, t, n, r) {
        var a = n.points,
          u = n.offset || [0, 0],
          o = n.targetOffset || [0, 0],
          c = n.overflow,
          s = n.source || e
        ;(u = [].concat(u)), (o = [].concat(o)), (c = c || {})
        var l = {},
          d = 0,
          v = !!(c && c.alwaysByViewport),
          m = vo(s, v),
          p = po(s)
        Ea(u, p), Ea(o, t)
        var h = sr(p, t, a, u, o),
          S = ye.merge(p, h)
        if (m && (c.adjustX || c.adjustY) && r) {
          if (c.adjustX && ga(h, p, m)) {
            var T = cr(a, /[lr]/gi, { l: 'r', r: 'l' }),
              D = lr(u, 0),
              V = lr(o, 0),
              F = sr(p, t, T, D, V)
            wl(F, p, m) || ((d = 1), (a = T), (u = D), (o = V))
          }
          if (c.adjustY && ya(h, p, m)) {
            var N = cr(a, /[tb]/gi, { t: 'b', b: 't' }),
              j = lr(u, 1),
              k = lr(o, 1),
              B = sr(p, t, N, j, k)
            _l(B, p, m) || ((d = 1), (a = N), (u = j), (o = k))
          }
          d && ((h = sr(p, t, a, u, o)), ye.mix(S, h))
          var K = ga(h, p, m),
            U = ya(h, p, m)
          if (K || U) {
            var w = a
            K && (w = cr(a, /[lr]/gi, { l: 'r', r: 'l' })),
              U && (w = cr(a, /[tb]/gi, { t: 'b', b: 't' })),
              (a = w),
              (u = n.offset || [0, 0]),
              (o = n.targetOffset || [0, 0])
          }
          ;(l.adjustX = c.adjustX && K), (l.adjustY = c.adjustY && U), (l.adjustX || l.adjustY) && (S = Sl(h, p, m, l))
        }
        return (
          S.width !== p.width && ye.css(s, 'width', ye.width(s) + S.width - p.width),
          S.height !== p.height && ye.css(s, 'height', ye.height(s) + S.height - p.height),
          ye.offset(
            s,
            { left: S.left, top: S.top },
            {
              useCssRight: n.useCssRight,
              useCssBottom: n.useCssBottom,
              useCssTransform: n.useCssTransform,
              ignoreShake: n.ignoreShake,
            },
          ),
          { points: a, offset: u, targetOffset: o, overflow: l }
        )
      }
      function Cl(e, t) {
        var n = vo(e, t),
          r = po(e)
        return !n || r.left + r.width <= n.left || r.top + r.height <= n.top || r.left >= n.right || r.top >= n.bottom
      }
      function mo(e, t, n) {
        var r = n.target || t,
          a = po(r),
          u = !Cl(r, n.overflow && n.overflow.alwaysByViewport)
        return Sa(e, a, n, u)
      }
      ;(mo.__getOffsetParent = fo), (mo.__getVisibleRectForElement = vo)
      function Tl(e, t, n) {
        var r,
          a,
          u = ye.getDocument(e),
          o = u.defaultView || u.parentWindow,
          c = ye.getWindowScrollLeft(o),
          s = ye.getWindowScrollTop(o),
          l = ye.viewportWidth(o),
          d = ye.viewportHeight(o)
        'pageX' in t ? (r = t.pageX) : (r = c + t.clientX), 'pageY' in t ? (a = t.pageY) : (a = s + t.clientY)
        var v = { left: r, top: a, width: 0, height: 0 },
          m = r >= 0 && r <= c + l && a >= 0 && a <= s + d,
          p = [n.points[0], 'cc']
        return Sa(e, v, ta(ta({}, n), {}, { points: p }), m)
      }
      var Vv = null,
        Pl = f(18446),
        Ml = f.n(Pl)
      function xl(e, t) {
        return e === t
          ? !0
          : !e || !t
          ? !1
          : 'pageX' in t && 'pageY' in t
          ? e.pageX === t.pageX && e.pageY === t.pageY
          : 'clientX' in t && 'clientY' in t
          ? e.clientX === t.clientX && e.clientY === t.clientY
          : !1
      }
      function Rl(e, t) {
        e !== document.activeElement && Jn(t, e) && typeof e.focus == 'function' && e.focus()
      }
      function wa(e, t) {
        var n = null,
          r = null
        function a(o) {
          var c = O(o, 1),
            s = c[0].target
          if (!!document.documentElement.contains(s)) {
            var l = s.getBoundingClientRect(),
              d = l.width,
              v = l.height,
              m = Math.floor(d),
              p = Math.floor(v)
            ;(n !== m || r !== p) &&
              Promise.resolve().then(function () {
                t({ width: m, height: p })
              }),
              (n = m),
              (r = p)
          }
        }
        var u = new fi(a)
        return (
          e && u.observe(e),
          function () {
            u.disconnect()
          }
        )
      }
      var Ol = function (e, t) {
        var n = i.useRef(!1),
          r = i.useRef(null)
        function a() {
          window.clearTimeout(r.current)
        }
        function u(o) {
          if (!n.current || o === !0) {
            if (e() === !1) return
            ;(n.current = !0),
              a(),
              (r.current = window.setTimeout(function () {
                n.current = !1
              }, t))
          } else
            a(),
              (r.current = window.setTimeout(function () {
                ;(n.current = !1), u()
              }, t))
        }
        return [
          u,
          function () {
            ;(n.current = !1), a()
          },
        ]
      }
      function _a(e) {
        return typeof e != 'function' ? null : e()
      }
      function Ca(e) {
        return re(e) !== 'object' || !e ? null : e
      }
      var Al = function (t, n) {
          var r = t.children,
            a = t.disabled,
            u = t.target,
            o = t.align,
            c = t.onAlign,
            s = t.monitorWindowResize,
            l = t.monitorBufferTime,
            d = l === void 0 ? 0 : l,
            v = i.useRef({}),
            m = i.useRef(),
            p = i.Children.only(r),
            h = i.useRef({})
          ;(h.current.disabled = a), (h.current.target = u), (h.current.align = o), (h.current.onAlign = c)
          var S = Ol(function () {
              var k = h.current,
                B = k.disabled,
                K = k.target,
                U = k.align,
                w = k.onAlign
              if (!B && K) {
                var b = m.current,
                  _,
                  R = _a(K),
                  H = Ca(K)
                ;(v.current.element = R), (v.current.point = H), (v.current.align = U)
                var C = document,
                  Y = C.activeElement
                return R && qi(R) ? (_ = mo(b, R, U)) : H && (_ = Tl(b, H, U)), Rl(Y, b), w && _ && w(b, _), !0
              }
              return !1
            }, d),
            T = O(S, 2),
            D = T[0],
            V = T[1],
            F = i.useRef({ cancel: function () {} }),
            N = i.useRef({ cancel: function () {} })
          i.useEffect(function () {
            var k = _a(u),
              B = Ca(u)
            m.current !== N.current.element &&
              (N.current.cancel(), (N.current.element = m.current), (N.current.cancel = wa(m.current, D))),
              (v.current.element !== k || !xl(v.current.point, B) || !Ml()(v.current.align, o)) &&
                (D(),
                F.current.element !== k && (F.current.cancel(), (F.current.element = k), (F.current.cancel = wa(k, D))))
          }),
            i.useEffect(
              function () {
                a ? V() : D()
              },
              [a],
            )
          var j = i.useRef(null)
          return (
            i.useEffect(
              function () {
                s
                  ? j.current || (j.current = Tn(window, 'resize', D))
                  : j.current && (j.current.remove(), (j.current = null))
              },
              [s],
            ),
            i.useEffect(function () {
              return function () {
                F.current.cancel(), N.current.cancel(), j.current && j.current.remove(), V()
              }
            }, []),
            i.useImperativeHandle(n, function () {
              return {
                forceAlign: function () {
                  return D(!0)
                },
              }
            }),
            i.isValidElement(p) && (p = i.cloneElement(p, { ref: Un(p.ref, m) })),
            p
          )
        },
        Ta = i.forwardRef(Al)
      Ta.displayName = 'Align'
      var Nl = Ta,
        Pa = Nl,
        Il = f(87757),
        Ma = f.n(Il)
      function xa(e, t, n, r, a, u, o) {
        try {
          var c = e[u](o),
            s = c.value
        } catch (l) {
          n(l)
          return
        }
        c.done ? t(s) : Promise.resolve(s).then(r, a)
      }
      function kl(e) {
        return function () {
          var t = this,
            n = arguments
          return new Promise(function (r, a) {
            var u = e.apply(t, n)
            function o(s) {
              xa(u, r, a, o, c, 'next', s)
            }
            function c(s) {
              xa(u, r, a, o, c, 'throw', s)
            }
            o(void 0)
          })
        }
      }
      var Ra = ['measure', 'align', null, 'motion'],
        Ll = function (e, t) {
          var n = (0, i.useState)(null),
            r = O(n, 2),
            a = r[0],
            u = r[1],
            o = (0, i.useRef)(),
            c = (0, i.useRef)(!1)
          function s(v) {
            c.current || u(v)
          }
          function l() {
            Fe.cancel(o.current)
          }
          function d(v) {
            l(),
              (o.current = Fe(function () {
                s(function (m) {
                  switch (a) {
                    case 'align':
                      return 'motion'
                    case 'motion':
                      return 'stable'
                    default:
                  }
                  return m
                }),
                  v == null || v()
              }))
          }
          return (
            (0, i.useEffect)(
              function () {
                s('measure')
              },
              [e],
            ),
            (0, i.useEffect)(
              function () {
                switch (a) {
                  case 'measure':
                    t()
                    break
                  default:
                }
                a &&
                  (o.current = Fe(
                    kl(
                      Ma().mark(function v() {
                        var m, p
                        return Ma().wrap(function (S) {
                          for (;;)
                            switch ((S.prev = S.next)) {
                              case 0:
                                ;(m = Ra.indexOf(a)), (p = Ra[m + 1]), p && m !== -1 && s(p)
                              case 3:
                              case 'end':
                                return S.stop()
                            }
                        }, v)
                      }),
                    ),
                  ))
              },
              [a],
            ),
            (0, i.useEffect)(function () {
              return function () {
                ;(c.current = !0), l()
              }
            }, []),
            [a, d]
          )
        },
        Dl = function (e) {
          var t = i.useState({ width: 0, height: 0 }),
            n = O(t, 2),
            r = n[0],
            a = n[1]
          function u(c) {
            a({ width: c.offsetWidth, height: c.offsetHeight })
          }
          var o = i.useMemo(
            function () {
              var c = {}
              if (e) {
                var s = r.width,
                  l = r.height
                e.indexOf('height') !== -1 && l
                  ? (c.height = l)
                  : e.indexOf('minHeight') !== -1 && l && (c.minHeight = l),
                  e.indexOf('width') !== -1 && s ? (c.width = s) : e.indexOf('minWidth') !== -1 && s && (c.minWidth = s)
              }
              return c
            },
            [e, r],
          )
          return [o, u]
        },
        Oa = i.forwardRef(function (e, t) {
          var n = e.visible,
            r = e.prefixCls,
            a = e.className,
            u = e.style,
            o = e.children,
            c = e.zIndex,
            s = e.stretch,
            l = e.destroyPopupOnHide,
            d = e.forceRender,
            v = e.align,
            m = e.point,
            p = e.getRootDomNode,
            h = e.getClassNameFromAlign,
            S = e.onAlign,
            T = e.onMouseEnter,
            D = e.onMouseLeave,
            V = e.onMouseDown,
            F = e.onTouchStart,
            N = (0, i.useRef)(),
            j = (0, i.useRef)(),
            k = (0, i.useState)(),
            B = O(k, 2),
            K = B[0],
            U = B[1],
            w = Dl(s),
            b = O(w, 2),
            _ = b[0],
            R = b[1]
          function H() {
            s && R(p())
          }
          var C = Ll(n, H),
            Y = O(C, 2),
            q = Y[0],
            ee = Y[1],
            J = (0, i.useRef)()
          function ae() {
            return m || p
          }
          function pe() {
            var fe
            ;(fe = N.current) === null || fe === void 0 || fe.forceAlign()
          }
          function Z(fe, Re) {
            var _e = h(Re)
            K !== _e && U(_e),
              q === 'align' &&
                (K !== _e
                  ? Promise.resolve().then(function () {
                      pe()
                    })
                  : ee(function () {
                      var ie
                      ;(ie = J.current) === null || ie === void 0 || ie.call(J)
                    }),
                S == null || S(fe, Re))
          }
          var $ = P({}, Ji(e))
          ;['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function (fe) {
            var Re = $[fe]
            $[fe] = function (_e, ie) {
              return ee(), Re == null ? void 0 : Re(_e, ie)
            }
          })
          function oe() {
            return new Promise(function (fe) {
              J.current = fe
            })
          }
          i.useEffect(
            function () {
              !$.motionName && q === 'motion' && ee()
            },
            [$.motionName, q],
          ),
            i.useImperativeHandle(t, function () {
              return {
                forceAlign: pe,
                getElement: function () {
                  return j.current
                },
              }
            })
          var te = P(
              P({}, _),
              {},
              {
                zIndex: c,
                opacity: q === 'motion' || q === 'stable' || !n ? void 0 : 0,
                pointerEvents: q === 'stable' ? void 0 : 'none',
              },
              u,
            ),
            me = !0
          ;(v == null ? void 0 : v.points) && (q === 'align' || q === 'stable') && (me = !1)
          var Ce = o
          return (
            i.Children.count(o) > 1 && (Ce = i.createElement('div', { className: ''.concat(r, '-content') }, o)),
            i.createElement(
              no,
              y({ visible: n, ref: j, leavedClassName: ''.concat(r, '-hidden') }, $, {
                onAppearPrepare: oe,
                onEnterPrepare: oe,
                removeOnLeave: l,
                forceRender: d,
              }),
              function (fe, Re) {
                var _e = fe.className,
                  ie = fe.style,
                  Ee = X()(r, a, K, _e)
                return i.createElement(
                  Pa,
                  { target: ae(), key: 'popup', ref: N, monitorWindowResize: !0, disabled: me, align: v, onAlign: Z },
                  i.createElement(
                    'div',
                    {
                      ref: Re,
                      className: Ee,
                      onMouseEnter: T,
                      onMouseLeave: D,
                      onMouseDownCapture: V,
                      onTouchStartCapture: F,
                      style: P(P({}, ie), te),
                    },
                    Ce,
                  ),
                )
              },
            )
          )
        })
      Oa.displayName = 'PopupInner'
      var jl = Oa,
        Aa = i.forwardRef(function (e, t) {
          var n = e.prefixCls,
            r = e.visible,
            a = e.zIndex,
            u = e.children,
            o = e.mobile
          o = o === void 0 ? {} : o
          var c = o.popupClassName,
            s = o.popupStyle,
            l = o.popupMotion,
            d = l === void 0 ? {} : l,
            v = o.popupRender,
            m = i.useRef()
          i.useImperativeHandle(t, function () {
            return {
              forceAlign: function () {},
              getElement: function () {
                return m.current
              },
            }
          })
          var p = P({ zIndex: a }, s),
            h = u
          return (
            i.Children.count(u) > 1 && (h = i.createElement('div', { className: ''.concat(n, '-content') }, u)),
            v && (h = v(h)),
            i.createElement(no, y({ visible: r, ref: m, removeOnLeave: !0 }, d), function (S, T) {
              var D = S.className,
                V = S.style,
                F = X()(n, c, D)
              return i.createElement('div', { ref: T, className: F, style: P(P({}, V), p) }, h)
            })
          )
        })
      Aa.displayName = 'MobilePopupInner'
      var Vl = Aa,
        Hl = ['visible', 'mobile'],
        Na = i.forwardRef(function (e, t) {
          var n = e.visible,
            r = e.mobile,
            a = z(e, Hl),
            u = (0, i.useState)(n),
            o = O(u, 2),
            c = o[0],
            s = o[1],
            l = (0, i.useState)(!1),
            d = O(l, 2),
            v = d[0],
            m = d[1],
            p = P(P({}, a), {}, { visible: c })
          ;(0, i.useEffect)(
            function () {
              s(n), n && r && m(se())
            },
            [n, r],
          )
          var h = v ? i.createElement(Vl, y({}, p, { mobile: r, ref: t })) : i.createElement(jl, y({}, p, { ref: t }))
          return i.createElement('div', null, i.createElement(Jc, p), h)
        })
      Na.displayName = 'Popup'
      var Fl = Na,
        Ul = i.createContext(null),
        Ia = Ul
      function ho() {}
      function Kl() {
        return ''
      }
      function Wl(e) {
        return e ? e.ownerDocument : window.document
      }
      var Bl = [
        'onClick',
        'onMouseDown',
        'onTouchStart',
        'onMouseEnter',
        'onMouseLeave',
        'onFocus',
        'onBlur',
        'onContextMenu',
      ]
      function zl(e) {
        var t = (function (n) {
          Yt(a, n)
          var r = Xt(a)
          function a(u) {
            var o
            $t(this, a),
              (o = r.call(this, u)),
              (o.popupRef = i.createRef()),
              (o.triggerRef = i.createRef()),
              (o.attachId = void 0),
              (o.clickOutsideHandler = void 0),
              (o.touchOutsideHandler = void 0),
              (o.contextMenuOutsideHandler1 = void 0),
              (o.contextMenuOutsideHandler2 = void 0),
              (o.mouseDownTimeout = void 0),
              (o.focusTime = void 0),
              (o.preClickTime = void 0),
              (o.preTouchTime = void 0),
              (o.delayTimer = void 0),
              (o.hasPopupMouseDown = void 0),
              (o.onMouseEnter = function (s) {
                var l = o.props.mouseEnterDelay
                o.fireEvents('onMouseEnter', s), o.delaySetPopupVisible(!0, l, l ? null : s)
              }),
              (o.onMouseMove = function (s) {
                o.fireEvents('onMouseMove', s), o.setPoint(s)
              }),
              (o.onMouseLeave = function (s) {
                o.fireEvents('onMouseLeave', s), o.delaySetPopupVisible(!1, o.props.mouseLeaveDelay)
              }),
              (o.onPopupMouseEnter = function () {
                o.clearDelayTimer()
              }),
              (o.onPopupMouseLeave = function (s) {
                var l
                ;(s.relatedTarget &&
                  !s.relatedTarget.setTimeout &&
                  Jn((l = o.popupRef.current) === null || l === void 0 ? void 0 : l.getElement(), s.relatedTarget)) ||
                  o.delaySetPopupVisible(!1, o.props.mouseLeaveDelay)
              }),
              (o.onFocus = function (s) {
                o.fireEvents('onFocus', s),
                  o.clearDelayTimer(),
                  o.isFocusToShow() && ((o.focusTime = Date.now()), o.delaySetPopupVisible(!0, o.props.focusDelay))
              }),
              (o.onMouseDown = function (s) {
                o.fireEvents('onMouseDown', s), (o.preClickTime = Date.now())
              }),
              (o.onTouchStart = function (s) {
                o.fireEvents('onTouchStart', s), (o.preTouchTime = Date.now())
              }),
              (o.onBlur = function (s) {
                o.fireEvents('onBlur', s),
                  o.clearDelayTimer(),
                  o.isBlurToHide() && o.delaySetPopupVisible(!1, o.props.blurDelay)
              }),
              (o.onContextMenu = function (s) {
                s.preventDefault(), o.fireEvents('onContextMenu', s), o.setPopupVisible(!0, s)
              }),
              (o.onContextMenuClose = function () {
                o.isContextMenuToShow() && o.close()
              }),
              (o.onClick = function (s) {
                if ((o.fireEvents('onClick', s), o.focusTime)) {
                  var l
                  if (
                    (o.preClickTime && o.preTouchTime
                      ? (l = Math.min(o.preClickTime, o.preTouchTime))
                      : o.preClickTime
                      ? (l = o.preClickTime)
                      : o.preTouchTime && (l = o.preTouchTime),
                    Math.abs(l - o.focusTime) < 20)
                  )
                    return
                  o.focusTime = 0
                }
                ;(o.preClickTime = 0),
                  (o.preTouchTime = 0),
                  o.isClickToShow() &&
                    (o.isClickToHide() || o.isBlurToHide()) &&
                    s &&
                    s.preventDefault &&
                    s.preventDefault()
                var d = !o.state.popupVisible
                ;((o.isClickToHide() && !d) || (d && o.isClickToShow())) && o.setPopupVisible(!o.state.popupVisible, s)
              }),
              (o.onPopupMouseDown = function () {
                if (
                  ((o.hasPopupMouseDown = !0),
                  clearTimeout(o.mouseDownTimeout),
                  (o.mouseDownTimeout = window.setTimeout(function () {
                    o.hasPopupMouseDown = !1
                  }, 0)),
                  o.context)
                ) {
                  var s
                  ;(s = o.context).onPopupMouseDown.apply(s, arguments)
                }
              }),
              (o.onDocumentClick = function (s) {
                if (!(o.props.mask && !o.props.maskClosable)) {
                  var l = s.target,
                    d = o.getRootDomNode(),
                    v = o.getPopupDomNode()
                  ;(!Jn(d, l) || o.isContextMenuOnly()) && !Jn(v, l) && !o.hasPopupMouseDown && o.close()
                }
              }),
              (o.getRootDomNode = function () {
                var s = o.props.getTriggerDOMNode
                if (s) return s(o.triggerRef.current)
                try {
                  var l = En(o.triggerRef.current)
                  if (l) return l
                } catch (d) {}
                return mt.findDOMNode(pi(o))
              }),
              (o.getPopupClassNameFromAlign = function (s) {
                var l = [],
                  d = o.props,
                  v = d.popupPlacement,
                  m = d.builtinPlacements,
                  p = d.prefixCls,
                  h = d.alignPoint,
                  S = d.getPopupClassNameFromAlign
                return v && m && l.push(Ic(m, p, s, h)), S && l.push(S(s)), l.join(' ')
              }),
              (o.getComponent = function () {
                var s = o.props,
                  l = s.prefixCls,
                  d = s.destroyPopupOnHide,
                  v = s.popupClassName,
                  m = s.onPopupAlign,
                  p = s.popupMotion,
                  h = s.popupAnimation,
                  S = s.popupTransitionName,
                  T = s.popupStyle,
                  D = s.mask,
                  V = s.maskAnimation,
                  F = s.maskTransitionName,
                  N = s.maskMotion,
                  j = s.zIndex,
                  k = s.popup,
                  B = s.stretch,
                  K = s.alignPoint,
                  U = s.mobile,
                  w = s.forceRender,
                  b = o.state,
                  _ = b.popupVisible,
                  R = b.point,
                  H = o.getPopupAlign(),
                  C = {}
                return (
                  o.isMouseEnterToShow() && (C.onMouseEnter = o.onPopupMouseEnter),
                  o.isMouseLeaveToHide() && (C.onMouseLeave = o.onPopupMouseLeave),
                  (C.onMouseDown = o.onPopupMouseDown),
                  (C.onTouchStart = o.onPopupMouseDown),
                  i.createElement(
                    Fl,
                    y(
                      {
                        prefixCls: l,
                        destroyPopupOnHide: d,
                        visible: _,
                        point: K && R,
                        className: v,
                        align: H,
                        onAlign: m,
                        animation: h,
                        getClassNameFromAlign: o.getPopupClassNameFromAlign,
                      },
                      C,
                      {
                        stretch: B,
                        getRootDomNode: o.getRootDomNode,
                        style: T,
                        mask: D,
                        zIndex: j,
                        transitionName: S,
                        maskAnimation: V,
                        maskTransitionName: F,
                        maskMotion: N,
                        ref: o.popupRef,
                        motion: p,
                        mobile: U,
                        forceRender: w,
                      },
                    ),
                    typeof k == 'function' ? k() : k,
                  )
                )
              }),
              (o.attachParent = function (s) {
                Fe.cancel(o.attachId)
                var l = o.props,
                  d = l.getPopupContainer,
                  v = l.getDocument,
                  m = o.getRootDomNode(),
                  p
                d ? (m || d.length === 0) && (p = d(m)) : (p = v(o.getRootDomNode()).body),
                  p
                    ? p.appendChild(s)
                    : (o.attachId = Fe(function () {
                        o.attachParent(s)
                      }))
              }),
              (o.getContainer = function () {
                var s = o.props.getDocument,
                  l = s(o.getRootDomNode()).createElement('div')
                return (
                  (l.style.position = 'absolute'),
                  (l.style.top = '0'),
                  (l.style.left = '0'),
                  (l.style.width = '100%'),
                  o.attachParent(l),
                  l
                )
              }),
              (o.setPoint = function (s) {
                var l = o.props.alignPoint
                !l || !s || o.setState({ point: { pageX: s.pageX, pageY: s.pageY } })
              }),
              (o.handlePortalUpdate = function () {
                o.state.prevPopupVisible !== o.state.popupVisible &&
                  o.props.afterPopupVisibleChange(o.state.popupVisible)
              }),
              (o.triggerContextValue = { onPopupMouseDown: o.onPopupMouseDown })
            var c
            return (
              'popupVisible' in u ? (c = !!u.popupVisible) : (c = !!u.defaultPopupVisible),
              (o.state = { prevPopupVisible: c, popupVisible: c }),
              Bl.forEach(function (s) {
                o['fire'.concat(s)] = function (l) {
                  o.fireEvents(s, l)
                }
              }),
              o
            )
          }
          return (
            Gt(
              a,
              [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this.componentDidUpdate()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function () {
                    var o = this.props,
                      c = this.state
                    if (c.popupVisible) {
                      var s
                      !this.clickOutsideHandler &&
                        (this.isClickToHide() || this.isContextMenuToShow()) &&
                        ((s = o.getDocument(this.getRootDomNode())),
                        (this.clickOutsideHandler = Tn(s, 'mousedown', this.onDocumentClick))),
                        this.touchOutsideHandler ||
                          ((s = s || o.getDocument(this.getRootDomNode())),
                          (this.touchOutsideHandler = Tn(s, 'touchstart', this.onDocumentClick))),
                        !this.contextMenuOutsideHandler1 &&
                          this.isContextMenuToShow() &&
                          ((s = s || o.getDocument(this.getRootDomNode())),
                          (this.contextMenuOutsideHandler1 = Tn(s, 'scroll', this.onContextMenuClose))),
                        !this.contextMenuOutsideHandler2 &&
                          this.isContextMenuToShow() &&
                          (this.contextMenuOutsideHandler2 = Tn(window, 'blur', this.onContextMenuClose))
                      return
                    }
                    this.clearOutsideHandler()
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.clearDelayTimer(),
                      this.clearOutsideHandler(),
                      clearTimeout(this.mouseDownTimeout),
                      Fe.cancel(this.attachId)
                  },
                },
                {
                  key: 'getPopupDomNode',
                  value: function () {
                    var o
                    return ((o = this.popupRef.current) === null || o === void 0 ? void 0 : o.getElement()) || null
                  },
                },
                {
                  key: 'getPopupAlign',
                  value: function () {
                    var o = this.props,
                      c = o.popupPlacement,
                      s = o.popupAlign,
                      l = o.builtinPlacements
                    return c && l ? Nc(l, c, s) : s
                  },
                },
                {
                  key: 'setPopupVisible',
                  value: function (o, c) {
                    var s = this.props.alignPoint,
                      l = this.state.popupVisible
                    this.clearDelayTimer(),
                      l !== o &&
                        ('popupVisible' in this.props || this.setState({ popupVisible: o, prevPopupVisible: l }),
                        this.props.onPopupVisibleChange(o)),
                      s && c && o && this.setPoint(c)
                  },
                },
                {
                  key: 'delaySetPopupVisible',
                  value: function (o, c, s) {
                    var l = this,
                      d = c * 1e3
                    if ((this.clearDelayTimer(), d)) {
                      var v = s ? { pageX: s.pageX, pageY: s.pageY } : null
                      this.delayTimer = window.setTimeout(function () {
                        l.setPopupVisible(o, v), l.clearDelayTimer()
                      }, d)
                    } else this.setPopupVisible(o, s)
                  },
                },
                {
                  key: 'clearDelayTimer',
                  value: function () {
                    this.delayTimer && (clearTimeout(this.delayTimer), (this.delayTimer = null))
                  },
                },
                {
                  key: 'clearOutsideHandler',
                  value: function () {
                    this.clickOutsideHandler && (this.clickOutsideHandler.remove(), (this.clickOutsideHandler = null)),
                      this.contextMenuOutsideHandler1 &&
                        (this.contextMenuOutsideHandler1.remove(), (this.contextMenuOutsideHandler1 = null)),
                      this.contextMenuOutsideHandler2 &&
                        (this.contextMenuOutsideHandler2.remove(), (this.contextMenuOutsideHandler2 = null)),
                      this.touchOutsideHandler && (this.touchOutsideHandler.remove(), (this.touchOutsideHandler = null))
                  },
                },
                {
                  key: 'createTwoChains',
                  value: function (o) {
                    var c = this.props.children.props,
                      s = this.props
                    return c[o] && s[o] ? this['fire'.concat(o)] : c[o] || s[o]
                  },
                },
                {
                  key: 'isClickToShow',
                  value: function () {
                    var o = this.props,
                      c = o.action,
                      s = o.showAction
                    return c.indexOf('click') !== -1 || s.indexOf('click') !== -1
                  },
                },
                {
                  key: 'isContextMenuOnly',
                  value: function () {
                    var o = this.props.action
                    return o === 'contextMenu' || (o.length === 1 && o[0] === 'contextMenu')
                  },
                },
                {
                  key: 'isContextMenuToShow',
                  value: function () {
                    var o = this.props,
                      c = o.action,
                      s = o.showAction
                    return c.indexOf('contextMenu') !== -1 || s.indexOf('contextMenu') !== -1
                  },
                },
                {
                  key: 'isClickToHide',
                  value: function () {
                    var o = this.props,
                      c = o.action,
                      s = o.hideAction
                    return c.indexOf('click') !== -1 || s.indexOf('click') !== -1
                  },
                },
                {
                  key: 'isMouseEnterToShow',
                  value: function () {
                    var o = this.props,
                      c = o.action,
                      s = o.showAction
                    return c.indexOf('hover') !== -1 || s.indexOf('mouseEnter') !== -1
                  },
                },
                {
                  key: 'isMouseLeaveToHide',
                  value: function () {
                    var o = this.props,
                      c = o.action,
                      s = o.hideAction
                    return c.indexOf('hover') !== -1 || s.indexOf('mouseLeave') !== -1
                  },
                },
                {
                  key: 'isFocusToShow',
                  value: function () {
                    var o = this.props,
                      c = o.action,
                      s = o.showAction
                    return c.indexOf('focus') !== -1 || s.indexOf('focus') !== -1
                  },
                },
                {
                  key: 'isBlurToHide',
                  value: function () {
                    var o = this.props,
                      c = o.action,
                      s = o.hideAction
                    return c.indexOf('focus') !== -1 || s.indexOf('blur') !== -1
                  },
                },
                {
                  key: 'forcePopupAlign',
                  value: function () {
                    if (this.state.popupVisible) {
                      var o
                      ;(o = this.popupRef.current) === null || o === void 0 || o.forceAlign()
                    }
                  },
                },
                {
                  key: 'fireEvents',
                  value: function (o, c) {
                    var s = this.props.children.props[o]
                    s && s(c)
                    var l = this.props[o]
                    l && l(c)
                  },
                },
                {
                  key: 'close',
                  value: function () {
                    this.setPopupVisible(!1)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var o = this.state.popupVisible,
                      c = this.props,
                      s = c.children,
                      l = c.forceRender,
                      d = c.alignPoint,
                      v = c.className,
                      m = c.autoDestroy,
                      p = i.Children.only(s),
                      h = { key: 'trigger' }
                    this.isContextMenuToShow()
                      ? (h.onContextMenu = this.onContextMenu)
                      : (h.onContextMenu = this.createTwoChains('onContextMenu')),
                      this.isClickToHide() || this.isClickToShow()
                        ? ((h.onClick = this.onClick),
                          (h.onMouseDown = this.onMouseDown),
                          (h.onTouchStart = this.onTouchStart))
                        : ((h.onClick = this.createTwoChains('onClick')),
                          (h.onMouseDown = this.createTwoChains('onMouseDown')),
                          (h.onTouchStart = this.createTwoChains('onTouchStart'))),
                      this.isMouseEnterToShow()
                        ? ((h.onMouseEnter = this.onMouseEnter), d && (h.onMouseMove = this.onMouseMove))
                        : (h.onMouseEnter = this.createTwoChains('onMouseEnter')),
                      this.isMouseLeaveToHide()
                        ? (h.onMouseLeave = this.onMouseLeave)
                        : (h.onMouseLeave = this.createTwoChains('onMouseLeave')),
                      this.isFocusToShow() || this.isBlurToHide()
                        ? ((h.onFocus = this.onFocus), (h.onBlur = this.onBlur))
                        : ((h.onFocus = this.createTwoChains('onFocus')), (h.onBlur = this.createTwoChains('onBlur')))
                    var S = X()(p && p.props && p.props.className, v)
                    S && (h.className = S)
                    var T = P({}, h)
                    oi(p) && (T.ref = Un(this.triggerRef, p.ref))
                    var D = i.cloneElement(p, T),
                      V
                    return (
                      (o || this.popupRef.current || l) &&
                        (V = i.createElement(
                          e,
                          { key: 'portal', getContainer: this.getContainer, didUpdate: this.handlePortalUpdate },
                          this.getComponent(),
                        )),
                      !o && m && (V = null),
                      i.createElement(Ia.Provider, { value: this.triggerContextValue }, D, V)
                    )
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (o, c) {
                    var s = o.popupVisible,
                      l = {}
                    return (
                      s !== void 0 &&
                        c.popupVisible !== s &&
                        ((l.popupVisible = s), (l.prevPopupVisible = c.popupVisible)),
                      l
                    )
                  },
                },
              ],
            ),
            a
          )
        })(i.Component)
        return (
          (t.contextType = Ia),
          (t.defaultProps = {
            prefixCls: 'rc-trigger-popup',
            getPopupClassNameFromAlign: Kl,
            getDocument: Wl,
            onPopupVisibleChange: ho,
            afterPopupVisibleChange: ho,
            onPopupAlign: ho,
            popupClassName: '',
            mouseEnterDelay: 0,
            mouseLeaveDelay: 0.1,
            focusDelay: 0,
            blurDelay: 0.15,
            popupStyle: {},
            destroyPopupOnHide: !1,
            popupAlign: {},
            defaultPopupVisible: !1,
            mask: !1,
            maskClosable: !0,
            action: [],
            showAction: [],
            hideAction: [],
            autoDestroy: !1,
          }),
          t
        )
      }
      var $l = zl(Oc),
        Vt = { adjustX: 1, adjustY: 1 },
        Gl = {
          topLeft: { points: ['bl', 'tl'], overflow: Vt, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: Vt, offset: [0, 7] },
          leftTop: { points: ['tr', 'tl'], overflow: Vt, offset: [-4, 0] },
          rightTop: { points: ['tl', 'tr'], overflow: Vt, offset: [4, 0] },
        },
        Yl = {
          topLeft: { points: ['bl', 'tl'], overflow: Vt, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: Vt, offset: [0, 7] },
          rightTop: { points: ['tr', 'tl'], overflow: Vt, offset: [-4, 0] },
          leftTop: { points: ['tl', 'tr'], overflow: Vt, offset: [4, 0] },
        },
        Hv = null
      function ka(e, t, n) {
        if (t) return t
        if (n) return n[e] || n.other
      }
      var Xl = {
        horizontal: 'bottomLeft',
        vertical: 'rightTop',
        'vertical-left': 'rightTop',
        'vertical-right': 'leftTop',
      }
      function Ql(e) {
        var t = e.prefixCls,
          n = e.visible,
          r = e.children,
          a = e.popup,
          u = e.popupClassName,
          o = e.popupOffset,
          c = e.disabled,
          s = e.mode,
          l = e.onVisibleChange,
          d = i.useContext(ht),
          v = d.getPopupContainer,
          m = d.rtl,
          p = d.subMenuOpenDelay,
          h = d.subMenuCloseDelay,
          S = d.builtinPlacements,
          T = d.triggerSubMenuAction,
          D = d.forceSubMenuRender,
          V = d.rootClassName,
          F = d.motion,
          N = d.defaultMotions,
          j = i.useState(!1),
          k = O(j, 2),
          B = k[0],
          K = k[1],
          U = P(m ? P({}, Yl) : P({}, Gl), S),
          w = Xl[s],
          b = ka(s, F, N),
          _ = P(P({}, b), {}, { leavedClassName: ''.concat(t, '-hidden'), removeOnLeave: !1, motionAppear: !0 }),
          R = i.useRef()
        return (
          i.useEffect(
            function () {
              return (
                (R.current = Fe(function () {
                  K(n)
                })),
                function () {
                  Fe.cancel(R.current)
                }
              )
            },
            [n],
          ),
          i.createElement(
            $l,
            {
              prefixCls: t,
              popupClassName: X()(''.concat(t, '-popup'), g({}, ''.concat(t, '-rtl'), m), u, V),
              stretch: s === 'horizontal' ? 'minWidth' : null,
              getPopupContainer: v,
              builtinPlacements: U,
              popupPlacement: w,
              popupVisible: B,
              popup: a,
              popupAlign: o && { offset: o },
              action: c ? [] : [T],
              mouseEnterDelay: p,
              mouseLeaveDelay: h,
              onPopupVisibleChange: l,
              forceRender: D,
              popupMotion: _,
            },
            r,
          )
        )
      }
      function La(e, t) {
        var n = {}
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n['Webkit'.concat(e)] = 'webkit'.concat(t)),
          (n['Moz'.concat(e)] = 'moz'.concat(t)),
          (n['ms'.concat(e)] = 'MS'.concat(t)),
          (n['O'.concat(e)] = 'o'.concat(t.toLowerCase())),
          n
        )
      }
      function Zl(e, t) {
        var n = { animationend: La('Animation', 'AnimationEnd'), transitionend: La('Transition', 'TransitionEnd') }
        return (
          e &&
            ('AnimationEvent' in t || delete n.animationend.animation,
            'TransitionEvent' in t || delete n.transitionend.transition),
          n
        )
      }
      var Jl = Zl(jt(), typeof window != 'undefined' ? window : {}),
        Da = {}
      if (jt()) {
        var ql = document.createElement('div')
        Da = ql.style
      }
      var fr = {}
      function ja(e) {
        if (fr[e]) return fr[e]
        var t = Jl[e]
        if (t)
          for (var n = Object.keys(t), r = n.length, a = 0; a < r; a += 1) {
            var u = n[a]
            if (Object.prototype.hasOwnProperty.call(t, u) && u in Da) return (fr[e] = t[u]), fr[e]
          }
        return ''
      }
      var Va = ja('animationend'),
        Ha = ja('transitionend'),
        Fa = !!(Va && Ha),
        Ua = Va || 'animationend',
        Ka = Ha || 'transitionend'
      function Wa(e, t) {
        if (!e) return null
        if (re(e) === 'object') {
          var n = t.replace(/-\w/g, function (r) {
            return r[1].toUpperCase()
          })
          return e[n]
        }
        return ''.concat(e, '-').concat(t)
      }
      var An = 'none',
        dr = 'appear',
        vr = 'enter',
        pr = 'leave',
        Ba = 'none',
        Mt = 'prepare',
        ln = 'start',
        fn = 'active',
        go = 'end'
      function mr(e) {
        var t = (0, i.useRef)(!1),
          n = (0, i.useState)(e),
          r = O(n, 2),
          a = r[0],
          u = r[1]
        function o(c) {
          t.current || u(c)
        }
        return (
          (0, i.useEffect)(function () {
            return function () {
              t.current = !0
            }
          }, []),
          [a, o]
        )
      }
      var ef = jt() ? i.useLayoutEffect : i.useEffect,
        za = ef,
        tf = function () {
          var e = i.useRef(null)
          function t() {
            Fe.cancel(e.current)
          }
          function n(r) {
            var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2
            t()
            var u = Fe(function () {
              a <= 1
                ? r({
                    isCanceled: function () {
                      return u !== e.current
                    },
                  })
                : n(r, a - 1)
            })
            e.current = u
          }
          return (
            i.useEffect(function () {
              return function () {
                t()
              }
            }, []),
            [n, t]
          )
        },
        $a = [Mt, ln, fn, go],
        Ga = !1,
        nf = !0
      function Ya(e) {
        return e === fn || e === go
      }
      var rf = function (e, t) {
          var n = mr(Ba),
            r = O(n, 2),
            a = r[0],
            u = r[1],
            o = tf(),
            c = O(o, 2),
            s = c[0],
            l = c[1]
          function d() {
            u(Mt)
          }
          return (
            za(
              function () {
                if (a !== Ba && a !== go) {
                  var v = $a.indexOf(a),
                    m = $a[v + 1],
                    p = t(a)
                  p === Ga
                    ? u(m)
                    : s(function (h) {
                        function S() {
                          h.isCanceled() || u(m)
                        }
                        p === !0 ? S() : Promise.resolve(p).then(S)
                      })
                }
              },
              [e, a],
            ),
            i.useEffect(function () {
              return function () {
                l()
              }
            }, []),
            [d, a]
          )
        },
        of = function (e) {
          var t = (0, i.useRef)(),
            n = (0, i.useRef)(e)
          n.current = e
          var r = i.useCallback(function (o) {
            n.current(o)
          }, [])
          function a(o) {
            o && (o.removeEventListener(Ka, r), o.removeEventListener(Ua, r))
          }
          function u(o) {
            t.current && t.current !== o && a(t.current),
              o && o !== t.current && (o.addEventListener(Ka, r), o.addEventListener(Ua, r), (t.current = o))
          }
          return (
            i.useEffect(function () {
              return function () {
                a(t.current)
              }
            }, []),
            [u, a]
          )
        }
      function af(e, t, n, r) {
        var a = r.motionEnter,
          u = a === void 0 ? !0 : a,
          o = r.motionAppear,
          c = o === void 0 ? !0 : o,
          s = r.motionLeave,
          l = s === void 0 ? !0 : s,
          d = r.motionDeadline,
          v = r.motionLeaveImmediately,
          m = r.onAppearPrepare,
          p = r.onEnterPrepare,
          h = r.onLeavePrepare,
          S = r.onAppearStart,
          T = r.onEnterStart,
          D = r.onLeaveStart,
          V = r.onAppearActive,
          F = r.onEnterActive,
          N = r.onLeaveActive,
          j = r.onAppearEnd,
          k = r.onEnterEnd,
          B = r.onLeaveEnd,
          K = r.onVisibleChanged,
          U = mr(),
          w = O(U, 2),
          b = w[0],
          _ = w[1],
          R = mr(An),
          H = O(R, 2),
          C = H[0],
          Y = H[1],
          q = mr(null),
          ee = O(q, 2),
          J = ee[0],
          ae = ee[1],
          pe = (0, i.useRef)(!1),
          Z = (0, i.useRef)(null),
          $ = (0, i.useRef)(!1),
          oe = (0, i.useRef)(null)
        function te() {
          var W = n()
          return W || oe.current
        }
        var me = (0, i.useRef)(!1)
        function Ce(W) {
          var Q = te()
          if (!(W && !W.deadline && W.target !== Q)) {
            var ne
            C === dr && me.current
              ? (ne = j == null ? void 0 : j(Q, W))
              : C === vr && me.current
              ? (ne = k == null ? void 0 : k(Q, W))
              : C === pr && me.current && (ne = B == null ? void 0 : B(Q, W)),
              ne !== !1 && !$.current && (Y(An), ae(null))
          }
        }
        var fe = of(Ce),
          Re = O(fe, 1),
          _e = Re[0],
          ie = i.useMemo(
            function () {
              var W, Q, ne
              switch (C) {
                case dr:
                  return (W = {}), g(W, Mt, m), g(W, ln, S), g(W, fn, V), W
                case vr:
                  return (Q = {}), g(Q, Mt, p), g(Q, ln, T), g(Q, fn, F), Q
                case pr:
                  return (ne = {}), g(ne, Mt, h), g(ne, ln, D), g(ne, fn, N), ne
                default:
                  return {}
              }
            },
            [C],
          ),
          Ee = rf(C, function (W) {
            if (W === Mt) {
              var Q = ie[Mt]
              return Q ? Q(te()) : Ga
            }
            if (de in ie) {
              var ne
              ae(((ne = ie[de]) === null || ne === void 0 ? void 0 : ne.call(ie, te(), null)) || null)
            }
            return (
              de === fn &&
                (_e(te()),
                d > 0 &&
                  (clearTimeout(Z.current),
                  (Z.current = setTimeout(function () {
                    Ce({ deadline: !0 })
                  }, d)))),
              nf
            )
          }),
          he = O(Ee, 2),
          Ae = he[0],
          de = he[1],
          je = Ya(de)
        ;(me.current = je),
          za(
            function () {
              _(t)
              var W = pe.current
              if (((pe.current = !0), !!e)) {
                var Q
                !W && t && c && (Q = dr),
                  W && t && u && (Q = vr),
                  ((W && !t && l) || (!W && v && !t && l)) && (Q = pr),
                  Q && (Y(Q), Ae())
              }
            },
            [t],
          ),
          (0, i.useEffect)(
            function () {
              ;((C === dr && !c) || (C === vr && !u) || (C === pr && !l)) && Y(An)
            },
            [c, u, l],
          ),
          (0, i.useEffect)(function () {
            return function () {
              clearTimeout(Z.current), ($.current = !0)
            }
          }, []),
          (0, i.useEffect)(
            function () {
              b !== void 0 && C === An && (K == null || K(b))
            },
            [b, C],
          )
        var Ue = J
        return ie[Mt] && de === ln && (Ue = P({ transition: 'none' }, Ue)), [C, de, Ue, b != null ? b : t]
      }
      var uf = (function (e) {
          Yt(n, e)
          var t = Xt(n)
          function n() {
            return $t(this, n), t.apply(this, arguments)
          }
          return (
            Gt(n, [
              {
                key: 'render',
                value: function () {
                  return this.props.children
                },
              },
            ]),
            n
          )
        })(i.Component),
        sf = uf
      function cf(e) {
        var t = e
        re(e) === 'object' && (t = e.transitionSupport)
        function n(a) {
          return !!(a.motionName && t)
        }
        var r = i.forwardRef(function (a, u) {
          var o = a.visible,
            c = o === void 0 ? !0 : o,
            s = a.removeOnLeave,
            l = s === void 0 ? !0 : s,
            d = a.forceRender,
            v = a.children,
            m = a.motionName,
            p = a.leavedClassName,
            h = a.eventProps,
            S = n(a),
            T = (0, i.useRef)(),
            D = (0, i.useRef)()
          function V() {
            try {
              return T.current instanceof HTMLElement ? T.current : En(D.current)
            } catch (C) {
              return null
            }
          }
          var F = af(S, c, V, a),
            N = O(F, 4),
            j = N[0],
            k = N[1],
            B = N[2],
            K = N[3],
            U = i.useRef(K)
          K && (U.current = !0)
          var w = i.useCallback(function (C) {
              ;(T.current = C), Wr(u, C)
            }, []),
            b,
            _ = P(P({}, h), {}, { visible: c })
          if (!v) b = null
          else if (j === An || !n(a))
            K
              ? (b = v(P({}, _), w))
              : !l && U.current
              ? (b = v(P(P({}, _), {}, { className: p }), w))
              : d
              ? (b = v(P(P({}, _), {}, { style: { display: 'none' } }), w))
              : (b = null)
          else {
            var R, H
            k === Mt ? (H = 'prepare') : Ya(k) ? (H = 'active') : k === ln && (H = 'start'),
              (b = v(
                P(
                  P({}, _),
                  {},
                  {
                    className: X()(
                      Wa(m, j),
                      ((R = {}), g(R, Wa(m, ''.concat(j, '-').concat(H)), H), g(R, m, typeof m == 'string'), R),
                    ),
                    style: B,
                  },
                ),
                w,
              ))
          }
          return i.createElement(sf, { ref: D }, b)
        })
        return (r.displayName = 'CSSMotion'), r
      }
      var Xa = cf(Fa),
        yo = 'add',
        bo = 'keep',
        Eo = 'remove',
        Qa = 'removed'
      function lf(e) {
        var t
        return (
          e && re(e) === 'object' && 'key' in e ? (t = e) : (t = { key: e }), P(P({}, t), {}, { key: String(t.key) })
        )
      }
      function So() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
        return e.map(lf)
      }
      function ff() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
          t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
          n = [],
          r = 0,
          a = t.length,
          u = So(e),
          o = So(t)
        u.forEach(function (l) {
          for (var d = !1, v = r; v < a; v += 1) {
            var m = o[v]
            if (m.key === l.key) {
              r < v &&
                ((n = n.concat(
                  o.slice(r, v).map(function (p) {
                    return P(P({}, p), {}, { status: yo })
                  }),
                )),
                (r = v)),
                n.push(P(P({}, m), {}, { status: bo })),
                (r += 1),
                (d = !0)
              break
            }
          }
          d || n.push(P(P({}, l), {}, { status: Eo }))
        }),
          r < a &&
            (n = n.concat(
              o.slice(r).map(function (l) {
                return P(P({}, l), {}, { status: yo })
              }),
            ))
        var c = {}
        n.forEach(function (l) {
          var d = l.key
          c[d] = (c[d] || 0) + 1
        })
        var s = Object.keys(c).filter(function (l) {
          return c[l] > 1
        })
        return (
          s.forEach(function (l) {
            ;(n = n.filter(function (d) {
              var v = d.key,
                m = d.status
              return v !== l || m !== Eo
            })),
              n.forEach(function (d) {
                d.key === l && (d.status = bo)
              })
          }),
          n
        )
      }
      var df = ['component', 'children', 'onVisibleChanged'],
        vf = ['status'],
        pf = [
          'eventProps',
          'visible',
          'children',
          'motionName',
          'motionAppear',
          'motionEnter',
          'motionLeave',
          'motionLeaveImmediately',
          'motionDeadline',
          'removeOnLeave',
          'leavedClassName',
          'onAppearStart',
          'onAppearActive',
          'onAppearEnd',
          'onEnterStart',
          'onEnterActive',
          'onEnterEnd',
          'onLeaveStart',
          'onLeaveActive',
          'onLeaveEnd',
        ]
      function mf(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xa,
          n = (function (r) {
            Yt(u, r)
            var a = Xt(u)
            function u() {
              var o
              $t(this, u)
              for (var c = arguments.length, s = new Array(c), l = 0; l < c; l++) s[l] = arguments[l]
              return (
                (o = a.call.apply(a, [this].concat(s))),
                (o.state = { keyEntities: [] }),
                (o.removeKey = function (d) {
                  o.setState(function (v) {
                    var m = v.keyEntities
                    return {
                      keyEntities: m.map(function (p) {
                        return p.key !== d ? p : P(P({}, p), {}, { status: Qa })
                      }),
                    }
                  })
                }),
                o
              )
            }
            return (
              Gt(
                u,
                [
                  {
                    key: 'render',
                    value: function () {
                      var c = this,
                        s = this.state.keyEntities,
                        l = this.props,
                        d = l.component,
                        v = l.children,
                        m = l.onVisibleChanged,
                        p = z(l, df),
                        h = d || i.Fragment,
                        S = {}
                      return (
                        pf.forEach(function (T) {
                          ;(S[T] = p[T]), delete p[T]
                        }),
                        delete p.keys,
                        i.createElement(
                          h,
                          p,
                          s.map(function (T) {
                            var D = T.status,
                              V = z(T, vf),
                              F = D === yo || D === bo
                            return i.createElement(
                              t,
                              y({}, S, {
                                key: V.key,
                                visible: F,
                                eventProps: V,
                                onVisibleChanged: function (j) {
                                  m == null || m(j, { key: V.key }), j || c.removeKey(V.key)
                                },
                              }),
                              v,
                            )
                          }),
                        )
                      )
                    },
                  },
                ],
                [
                  {
                    key: 'getDerivedStateFromProps',
                    value: function (c, s) {
                      var l = c.keys,
                        d = s.keyEntities,
                        v = So(l),
                        m = ff(d, v)
                      return {
                        keyEntities: m.filter(function (p) {
                          var h = d.find(function (S) {
                            var T = S.key
                            return p.key === T
                          })
                          return !(h && h.status === Qa && p.status === Eo)
                        }),
                      }
                    },
                  },
                ],
              ),
              u
            )
          })(i.Component)
        return (n.defaultProps = { component: 'div' }), n
      }
      var Fv = mf(Fa),
        hf = Xa
      function gf(e) {
        var t = e.id,
          n = e.open,
          r = e.keyPath,
          a = e.children,
          u = 'inline',
          o = i.useContext(ht),
          c = o.prefixCls,
          s = o.forceSubMenuRender,
          l = o.motion,
          d = o.defaultMotions,
          v = o.mode,
          m = i.useRef(!1)
        m.current = v === u
        var p = i.useState(!m.current),
          h = O(p, 2),
          S = h[0],
          T = h[1],
          D = m.current ? n : !1
        i.useEffect(
          function () {
            m.current && T(!1)
          },
          [v],
        )
        var V = P({}, ka(u, l, d))
        r.length > 1 && (V.motionAppear = !1)
        var F = V.onVisibleChanged
        return (
          (V.onVisibleChanged = function (N) {
            return !m.current && !N && T(!0), F == null ? void 0 : F(N)
          }),
          S
            ? null
            : i.createElement(
                _n,
                { mode: u, locked: !m.current },
                i.createElement(
                  hf,
                  y({ visible: D }, V, { forceRender: s, removeOnLeave: !1, leavedClassName: ''.concat(c, '-hidden') }),
                  function (N) {
                    var j = N.className,
                      k = N.style
                    return i.createElement(Li, { id: t, className: j, style: k }, a)
                  },
                ),
              )
        )
      }
      var yf = [
          'style',
          'className',
          'title',
          'eventKey',
          'warnKey',
          'disabled',
          'internalPopupClose',
          'children',
          'itemIcon',
          'expandIcon',
          'popupClassName',
          'popupOffset',
          'onClick',
          'onMouseEnter',
          'onMouseLeave',
          'onTitleClick',
          'onTitleMouseEnter',
          'onTitleMouseLeave',
        ],
        bf = ['active'],
        Ef = function (t) {
          var n,
            r = t.style,
            a = t.className,
            u = t.title,
            o = t.eventKey,
            c = t.warnKey,
            s = t.disabled,
            l = t.internalPopupClose,
            d = t.children,
            v = t.itemIcon,
            m = t.expandIcon,
            p = t.popupClassName,
            h = t.popupOffset,
            S = t.onClick,
            T = t.onMouseEnter,
            D = t.onMouseLeave,
            V = t.onTitleClick,
            F = t.onTitleMouseEnter,
            N = t.onTitleMouseLeave,
            j = z(t, yf),
            k = Ii(o),
            B = i.useContext(ht),
            K = B.prefixCls,
            U = B.mode,
            w = B.openKeys,
            b = B.disabled,
            _ = B.overflowDisabled,
            R = B.activeKey,
            H = B.selectedKeys,
            C = B.itemIcon,
            Y = B.expandIcon,
            q = B.onItemClick,
            ee = B.onOpenChange,
            J = B.onActive,
            ae = i.useContext(Yr),
            pe = ae._internalRenderSubMenuItem,
            Z = i.useContext(Ai),
            $ = Z.isSubPathKey,
            oe = Cn(),
            te = ''.concat(K, '-submenu'),
            me = b || s,
            Ce = i.useRef(),
            fe = i.useRef(),
            Re = v || C,
            _e = m || Y,
            ie = w.includes(o),
            Ee = !_ && ie,
            he = $(H, o),
            Ae = Pi(o, me, F, N),
            de = Ae.active,
            je = z(Ae, bf),
            Ue = i.useState(!1),
            W = O(Ue, 2),
            Q = W[0],
            ne = W[1],
            Ut = function (Xe) {
              me || ne(Xe)
            },
            et = function (Xe) {
              Ut(!0), T == null || T({ key: o, domEvent: Xe })
            },
            Ot = function (Xe) {
              Ut(!1), D == null || D({ key: o, domEvent: Xe })
            },
            wt = i.useMemo(
              function () {
                return de || (U !== 'inline' ? Q || $([R], o) : !1)
              },
              [U, de, R, Q, o, $],
            ),
            tt = xi(oe.length),
            At = function (Xe) {
              me || (V == null || V({ key: o, domEvent: Xe }), U === 'inline' && ee(o, !ie))
            },
            _t = an(function (rt) {
              S == null || S(Xn(rt)), q(rt)
            }),
            nt = function (Xe) {
              U !== 'inline' && ee(o, Xe)
            },
            ot = function () {
              J(o)
            },
            dt = k && ''.concat(k, '-popup'),
            it = i.createElement(
              'div',
              y(
                {
                  role: 'menuitem',
                  style: tt,
                  className: ''.concat(te, '-title'),
                  tabIndex: me ? null : -1,
                  ref: Ce,
                  title: typeof u == 'string' ? u : null,
                  'data-menu-id': _ && k ? null : k,
                  'aria-expanded': Ee,
                  'aria-haspopup': !0,
                  'aria-controls': dt,
                  'aria-disabled': me,
                  onClick: At,
                  onFocus: ot,
                },
                je,
              ),
              u,
              i.createElement(
                Mi,
                { icon: U !== 'horizontal' ? _e : null, props: P(P({}, t), {}, { isOpen: Ee, isSubMenu: !0 }) },
                i.createElement('i', { className: ''.concat(te, '-arrow') }),
              ),
            ),
            Ke = i.useRef(U)
          if ((U !== 'inline' && (Ke.current = oe.length > 1 ? 'vertical' : U), !_)) {
            var gt = Ke.current
            it = i.createElement(
              Ql,
              {
                mode: gt,
                prefixCls: te,
                visible: !l && Ee && U !== 'inline',
                popupClassName: p,
                popupOffset: h,
                popup: i.createElement(
                  _n,
                  { mode: gt === 'horizontal' ? 'vertical' : gt },
                  i.createElement(Li, { id: dt, ref: fe }, d),
                ),
                disabled: me,
                onVisibleChange: nt,
              },
              it,
            )
          }
          var yt = i.createElement(
            wn.Item,
            y({ role: 'none' }, j, {
              component: 'li',
              style: r,
              className: X()(
                te,
                ''.concat(te, '-').concat(U),
                a,
                ((n = {}),
                g(n, ''.concat(te, '-open'), Ee),
                g(n, ''.concat(te, '-active'), wt),
                g(n, ''.concat(te, '-selected'), he),
                g(n, ''.concat(te, '-disabled'), me),
                n),
              ),
              onMouseEnter: et,
              onMouseLeave: Ot,
            }),
            it,
            !_ && i.createElement(gf, { id: dt, open: Ee, keyPath: oe }, d),
          )
          return (
            pe && (yt = pe(yt, t, { selected: he, active: wt, open: Ee, disabled: me })),
            i.createElement(
              _n,
              { onItemClick: _t, mode: U === 'horizontal' ? 'vertical' : U, itemIcon: Re, expandIcon: _e },
              yt,
            )
          )
        }
      function wo(e) {
        var t = e.eventKey,
          n = e.children,
          r = Cn(t),
          a = Xr(n, r),
          u = Qn()
        i.useEffect(
          function () {
            if (u)
              return (
                u.registerPath(t, r),
                function () {
                  u.unregisterPath(t, r)
                }
              )
          },
          [r],
        )
        var o
        return u ? (o = a) : (o = i.createElement(Ef, e, a)), i.createElement(Oi.Provider, { value: r }, o)
      }
      function Sf(e) {
        if (Array.isArray(e)) return De(e)
      }
      function wf(e) {
        if ((typeof Symbol != 'undefined' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
          return Array.from(e)
      }
      function _f() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function Cf(e) {
        return Sf(e) || wf(e) || Pe(e) || _f()
      }
      function Za(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
        if (qi(e)) {
          var n = e.nodeName.toLowerCase(),
            r =
              ['input', 'select', 'textarea', 'button'].includes(n) ||
              e.isContentEditable ||
              (n === 'a' && !!e.getAttribute('href')),
            a = e.getAttribute('tabindex'),
            u = Number(a),
            o = null
          return (
            a && !Number.isNaN(u) ? (o = u) : r && o === null && (o = 0),
            r && e.disabled && (o = null),
            o !== null && (o >= 0 || (t && o < 0))
          )
        }
        return !1
      }
      function Ja(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          n = Cf(e.querySelectorAll('*')).filter(function (r) {
            return Za(r, t)
          })
        return Za(e, t) && n.unshift(e), n
      }
      var hr = null
      function Uv() {
        hr = document.activeElement
      }
      function Kv() {
        hr = null
      }
      function Wv() {
        if (hr)
          try {
            hr.focus()
          } catch (e) {}
      }
      function Bv(e, t) {
        if (t.keyCode === 9) {
          var n = Ja(e),
            r = n[t.shiftKey ? 0 : n.length - 1],
            a = r === document.activeElement || e === document.activeElement
          if (a) {
            var u = n[t.shiftKey ? n.length - 1 : 0]
            u.focus(), t.preventDefault()
          }
        }
      }
      var _o = Ye.LEFT,
        Co = Ye.RIGHT,
        To = Ye.UP,
        gr = Ye.DOWN,
        yr = Ye.ENTER,
        qa = Ye.ESC,
        Nn = Ye.HOME,
        In = Ye.END,
        eu = [To, gr, _o, Co]
      function Tf(e, t, n, r) {
        var a,
          u,
          o,
          c,
          s = 'prev',
          l = 'next',
          d = 'children',
          v = 'parent'
        if (e === 'inline' && r === yr) return { inlineTrigger: !0 }
        var m = ((a = {}), g(a, To, s), g(a, gr, l), a),
          p = ((u = {}), g(u, _o, n ? l : s), g(u, Co, n ? s : l), g(u, gr, d), g(u, yr, d), u),
          h =
            ((o = {}), g(o, To, s), g(o, gr, l), g(o, yr, d), g(o, qa, v), g(o, _o, n ? d : v), g(o, Co, n ? v : d), o),
          S = { inline: m, horizontal: p, vertical: h, inlineSub: m, horizontalSub: h, verticalSub: h },
          T = (c = S[''.concat(e).concat(t ? '' : 'Sub')]) === null || c === void 0 ? void 0 : c[r]
        switch (T) {
          case s:
            return { offset: -1, sibling: !0 }
          case l:
            return { offset: 1, sibling: !0 }
          case v:
            return { offset: -1, sibling: !1 }
          case d:
            return { offset: 1, sibling: !1 }
          default:
            return null
        }
      }
      function Pf(e) {
        for (var t = e; t; ) {
          if (t.getAttribute('data-menu-list')) return t
          t = t.parentElement
        }
        return null
      }
      function Mf(e, t) {
        for (var n = e || document.activeElement; n; ) {
          if (t.has(n)) return n
          n = n.parentElement
        }
        return null
      }
      function tu(e, t) {
        var n = Ja(e, !0)
        return n.filter(function (r) {
          return t.has(r)
        })
      }
      function nu(e, t, n) {
        var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1
        if (!e) return null
        var a = tu(e, t),
          u = a.length,
          o = a.findIndex(function (c) {
            return n === c
          })
        return r < 0 ? (o === -1 ? (o = u - 1) : (o -= 1)) : r > 0 && (o += 1), (o = (o + u) % u), a[o]
      }
      function xf(e, t, n, r, a, u, o, c, s, l) {
        var d = i.useRef(),
          v = i.useRef()
        v.current = t
        var m = function () {
          Fe.cancel(d.current)
        }
        return (
          i.useEffect(function () {
            return function () {
              m()
            }
          }, []),
          function (p) {
            var h = p.which
            if ([].concat(eu, [yr, qa, Nn, In]).includes(h)) {
              var S,
                T,
                D,
                V = function () {
                  ;(S = new Set()), (T = new Map()), (D = new Map())
                  var C = u()
                  return (
                    C.forEach(function (Y) {
                      var q = document.querySelector("[data-menu-id='".concat(Gr(r, Y), "']"))
                      q && (S.add(q), D.set(q, Y), T.set(Y, q))
                    }),
                    S
                  )
                }
              V()
              var F = T.get(t),
                N = Mf(F, S),
                j = D.get(N),
                k = Tf(e, o(j, !0).length === 1, n, h)
              if (!k && h !== Nn && h !== In) return
              ;(eu.includes(h) || [Nn, In].includes(h)) && p.preventDefault()
              var B = function (C) {
                if (C) {
                  var Y = C,
                    q = C.querySelector('a')
                  ;(q == null ? void 0 : q.getAttribute('href')) && (Y = q)
                  var ee = D.get(C)
                  c(ee),
                    m(),
                    (d.current = Fe(function () {
                      v.current === ee && Y.focus()
                    }))
                }
              }
              if ([Nn, In].includes(h) || k.sibling || !N) {
                var K
                !N || e === 'inline' ? (K = a.current) : (K = Pf(N))
                var U,
                  w = tu(K, S)
                h === Nn ? (U = w[0]) : h === In ? (U = w[w.length - 1]) : (U = nu(K, S, N, k.offset)), B(U)
              } else if (k.inlineTrigger) s(j)
              else if (k.offset > 0)
                s(j, !0),
                  m(),
                  (d.current = Fe(function () {
                    V()
                    var H = N.getAttribute('aria-controls'),
                      C = document.getElementById(H),
                      Y = nu(C, S)
                    B(Y)
                  }, 5))
              else if (k.offset < 0) {
                var b = o(j, !0),
                  _ = b[b.length - 2],
                  R = T.get(_)
                s(_, !1), B(R)
              }
            }
            l == null || l(p)
          }
        )
      }
      var Rf = Math.random().toFixed(5).toString().slice(2),
        ru = 0
      function Of(e) {
        var t = $e(e, { value: e }),
          n = O(t, 2),
          r = n[0],
          a = n[1]
        return (
          i.useEffect(function () {
            ru += 1
            var u = ''.concat(Rf, '-').concat(ru)
            a('rc-menu-uuid-'.concat(u))
          }, []),
          r
        )
      }
      function Af(e) {
        Promise.resolve().then(e)
      }
      var Po = '__RC_UTIL_PATH_SPLIT__',
        ou = function (t) {
          return t.join(Po)
        },
        Nf = function (t) {
          return t.split(Po)
        },
        Mo = 'rc-menu-more'
      function If() {
        var e = i.useState({}),
          t = O(e, 2),
          n = t[1],
          r = (0, i.useRef)(new Map()),
          a = (0, i.useRef)(new Map()),
          u = i.useState([]),
          o = O(u, 2),
          c = o[0],
          s = o[1],
          l = (0, i.useRef)(0),
          d = (0, i.useRef)(!1),
          v = function () {
            d.current || n({})
          },
          m = (0, i.useCallback)(function (F, N) {
            var j = ou(N)
            a.current.set(j, F), r.current.set(F, j), (l.current += 1)
            var k = l.current
            Af(function () {
              k === l.current && v()
            })
          }, []),
          p = (0, i.useCallback)(function (F, N) {
            var j = ou(N)
            a.current.delete(j), r.current.delete(F)
          }, []),
          h = (0, i.useCallback)(function (F) {
            s(F)
          }, []),
          S = (0, i.useCallback)(
            function (F, N) {
              var j = r.current.get(F) || '',
                k = Nf(j)
              return N && c.includes(k[0]) && k.unshift(Mo), k
            },
            [c],
          ),
          T = (0, i.useCallback)(
            function (F, N) {
              return F.some(function (j) {
                var k = S(j, !0)
                return k.includes(N)
              })
            },
            [S],
          ),
          D = function () {
            var N = Ge(r.current.keys())
            return c.length && N.push(Mo), N
          },
          V = (0, i.useCallback)(function (F) {
            var N = ''.concat(r.current.get(F)).concat(Po),
              j = new Set()
            return (
              Ge(a.current.keys()).forEach(function (k) {
                k.startsWith(N) && j.add(a.current.get(k))
              }),
              j
            )
          }, [])
        return (
          i.useEffect(function () {
            return function () {
              d.current = !0
            }
          }, []),
          {
            registerPath: m,
            unregisterPath: p,
            refreshOverflowKeys: h,
            isSubPathKey: T,
            getKeyPath: S,
            getKeys: D,
            getSubPathKeys: V,
          }
        )
      }
      var kf = [
          'prefixCls',
          'rootClassName',
          'style',
          'className',
          'tabIndex',
          'items',
          'children',
          'direction',
          'id',
          'mode',
          'inlineCollapsed',
          'disabled',
          'disabledOverflow',
          'subMenuOpenDelay',
          'subMenuCloseDelay',
          'forceSubMenuRender',
          'defaultOpenKeys',
          'openKeys',
          'activeKey',
          'defaultActiveFirst',
          'selectable',
          'multiple',
          'defaultSelectedKeys',
          'selectedKeys',
          'onSelect',
          'onDeselect',
          'inlineIndent',
          'motion',
          'defaultMotions',
          'triggerSubMenuAction',
          'builtinPlacements',
          'itemIcon',
          'expandIcon',
          'overflowedIndicator',
          'overflowedIndicatorPopupClassName',
          'getPopupContainer',
          'onClick',
          'onOpenChange',
          'onKeyDown',
          'openAnimation',
          'openTransitionName',
          '_internalRenderMenuItem',
          '_internalRenderSubMenuItem',
        ],
        dn = [],
        Lf = i.forwardRef(function (e, t) {
          var n,
            r,
            a = e.prefixCls,
            u = a === void 0 ? 'rc-menu' : a,
            o = e.rootClassName,
            c = e.style,
            s = e.className,
            l = e.tabIndex,
            d = l === void 0 ? 0 : l,
            v = e.items,
            m = e.children,
            p = e.direction,
            h = e.id,
            S = e.mode,
            T = S === void 0 ? 'vertical' : S,
            D = e.inlineCollapsed,
            V = e.disabled,
            F = e.disabledOverflow,
            N = e.subMenuOpenDelay,
            j = N === void 0 ? 0.1 : N,
            k = e.subMenuCloseDelay,
            B = k === void 0 ? 0.1 : k,
            K = e.forceSubMenuRender,
            U = e.defaultOpenKeys,
            w = e.openKeys,
            b = e.activeKey,
            _ = e.defaultActiveFirst,
            R = e.selectable,
            H = R === void 0 ? !0 : R,
            C = e.multiple,
            Y = C === void 0 ? !1 : C,
            q = e.defaultSelectedKeys,
            ee = e.selectedKeys,
            J = e.onSelect,
            ae = e.onDeselect,
            pe = e.inlineIndent,
            Z = pe === void 0 ? 24 : pe,
            $ = e.motion,
            oe = e.defaultMotions,
            te = e.triggerSubMenuAction,
            me = te === void 0 ? 'hover' : te,
            Ce = e.builtinPlacements,
            fe = e.itemIcon,
            Re = e.expandIcon,
            _e = e.overflowedIndicator,
            ie = _e === void 0 ? '...' : _e,
            Ee = e.overflowedIndicatorPopupClassName,
            he = e.getPopupContainer,
            Ae = e.onClick,
            de = e.onOpenChange,
            je = e.onKeyDown,
            Ue = e.openAnimation,
            W = e.openTransitionName,
            Q = e._internalRenderMenuItem,
            ne = e._internalRenderSubMenuItem,
            Ut = z(e, kf),
            et = i.useMemo(
              function () {
                return Pc(m, v, dn)
              },
              [m, v],
            ),
            Ot = i.useState(!1),
            wt = O(Ot, 2),
            tt = wt[0],
            At = wt[1],
            _t = i.useRef(),
            nt = Of(h),
            ot = p === 'rtl',
            dt = i.useMemo(
              function () {
                return (T === 'inline' || T === 'vertical') && D ? ['vertical', D] : [T, !1]
              },
              [T, D],
            ),
            it = O(dt, 2),
            Ke = it[0],
            gt = it[1],
            yt = i.useState(0),
            rt = O(yt, 2),
            Xe = rt[0],
            Ct = rt[1],
            Nt = Xe >= et.length - 1 || Ke !== 'horizontal' || F,
            Kt = $e(U, {
              value: w,
              postState: function (Oe) {
                return Oe || dn
              },
            }),
            vt = O(Kt, 2),
            at = vt[0],
            Wt = vt[1],
            It = function (Oe) {
              Wt(Oe), de == null || de(Oe)
            },
            Jt = i.useState(at),
            Bt = O(Jt, 2),
            be = Bt[0],
            Le = Bt[1],
            He = Ke === 'inline',
            qe = i.useRef(!1)
          i.useEffect(
            function () {
              He && Le(at)
            },
            [at],
          ),
            i.useEffect(
              function () {
                !qe.current || (He ? Wt(be) : It(dn))
              },
              [He],
            ),
            i.useEffect(function () {
              return (
                (qe.current = !0),
                function () {
                  qe.current = !1
                }
              )
            }, [])
          var ut = If(),
            jn = ut.registerPath,
            Rr = ut.unregisterPath,
            Or = ut.refreshOverflowKeys,
            Ar = ut.isSubPathKey,
            Zo = ut.getKeyPath,
            Tt = ut.getKeys,
            Nr = ut.getSubPathKeys,
            Ir = i.useMemo(
              function () {
                return { registerPath: jn, unregisterPath: Rr }
              },
              [jn, Rr],
            ),
            kr = i.useMemo(
              function () {
                return { isSubPathKey: Ar }
              },
              [Ar],
            )
          i.useEffect(
            function () {
              Or(
                Nt
                  ? dn
                  : et.slice(Xe + 1).map(function (Ve) {
                      return Ve.key
                    }),
              )
            },
            [Xe, Nt],
          )
          var qt = $e(b || (_ && ((n = et[0]) === null || n === void 0 ? void 0 : n.key)), { value: b }),
            yn = O(qt, 2),
            kt = yn[0],
            bn = yn[1],
            Lr = an(function (Ve) {
              bn(Ve)
            }),
            Ie = an(function () {
              bn(void 0)
            })
          ;(0, i.useImperativeHandle)(t, function () {
            return {
              list: _t.current,
              focus: function (Oe) {
                var ze,
                  bt =
                    kt != null
                      ? kt
                      : (ze = et.find(function (Av) {
                          return !Av.props.disabled
                        })) === null || ze === void 0
                      ? void 0
                      : ze.key
                if (bt) {
                  var st, tn, Hn
                  ;(st = _t.current) === null ||
                    st === void 0 ||
                    (tn = st.querySelector("li[data-menu-id='".concat(Gr(nt, bt), "']"))) === null ||
                    tn === void 0 ||
                    (Hn = tn.focus) === null ||
                    Hn === void 0 ||
                    Hn.call(tn, Oe)
                }
              },
            }
          })
          var Ne = $e(q || [], {
              value: ee,
              postState: function (Oe) {
                return Array.isArray(Oe) ? Oe : Oe == null ? dn : [Oe]
              },
            }),
            Be = O(Ne, 2),
            Ze = Be[0],
            Lt = Be[1],
            en = function (Oe) {
              if (H) {
                var ze = Oe.key,
                  bt = Ze.includes(ze),
                  st
                Y
                  ? bt
                    ? (st = Ze.filter(function (Hn) {
                        return Hn !== ze
                      }))
                    : (st = [].concat(Ge(Ze), [ze]))
                  : (st = [ze]),
                  Lt(st)
                var tn = P(P({}, Oe), {}, { selectedKeys: st })
                bt ? ae == null || ae(tn) : J == null || J(tn)
              }
              !Y && at.length && Ke !== 'inline' && It(dn)
            },
            Vn = an(function (Ve) {
              Ae == null || Ae(Xn(Ve)), en(Ve)
            }),
            Dr = an(function (Ve, Oe) {
              var ze = at.filter(function (st) {
                return st !== Ve
              })
              if (Oe) ze.push(Ve)
              else if (Ke !== 'inline') {
                var bt = Nr(Ve)
                ze = ze.filter(function (st) {
                  return !bt.has(st)
                })
              }
              bi()(at, ze) || It(ze)
            }),
            jr = an(he),
            Vr = function (Oe, ze) {
              var bt = ze != null ? ze : !at.includes(Oe)
              Dr(Oe, bt)
            },
            Jo = xf(Ke, kt, ot, nt, _t, Tt, Zo, bn, Vr, je)
          i.useEffect(function () {
            At(!0)
          }, [])
          var qo = i.useMemo(
              function () {
                return { _internalRenderMenuItem: Q, _internalRenderSubMenuItem: ne }
              },
              [Q, ne],
            ),
            Hr =
              Ke !== 'horizontal' || F
                ? et
                : et.map(function (Ve, Oe) {
                    return i.createElement(_n, { key: Ve.key, overflowDisabled: Oe > Xe }, Ve)
                  }),
            ei = i.createElement(
              wn,
              y(
                {
                  id: h,
                  ref: _t,
                  prefixCls: ''.concat(u, '-overflow'),
                  component: 'ul',
                  itemComponent: Zn,
                  className: X()(
                    u,
                    ''.concat(u, '-root'),
                    ''.concat(u, '-').concat(Ke),
                    s,
                    ((r = {}), g(r, ''.concat(u, '-inline-collapsed'), gt), g(r, ''.concat(u, '-rtl'), ot), r),
                    o,
                  ),
                  dir: p,
                  style: c,
                  role: 'menu',
                  tabIndex: d,
                  data: Hr,
                  renderRawItem: function (Oe) {
                    return Oe
                  },
                  renderRawRest: function (Oe) {
                    var ze = Oe.length,
                      bt = ze ? et.slice(-ze) : null
                    return i.createElement(
                      wo,
                      { eventKey: Mo, title: ie, disabled: Nt, internalPopupClose: ze === 0, popupClassName: Ee },
                      bt,
                    )
                  },
                  maxCount: Ke !== 'horizontal' || F ? wn.INVALIDATE : wn.RESPONSIVE,
                  ssr: 'full',
                  'data-menu-list': !0,
                  onVisibleChange: function (Oe) {
                    Ct(Oe)
                  },
                  onKeyDown: Jo,
                },
                Ut,
              ),
            )
          return i.createElement(
            Yr.Provider,
            { value: qo },
            i.createElement(
              Ni.Provider,
              { value: nt },
              i.createElement(
                _n,
                {
                  prefixCls: u,
                  rootClassName: o,
                  mode: Ke,
                  openKeys: at,
                  rtl: ot,
                  disabled: V,
                  motion: tt ? $ : null,
                  defaultMotions: tt ? oe : null,
                  activeKey: kt,
                  onActive: Lr,
                  onInactive: Ie,
                  selectedKeys: Ze,
                  inlineIndent: Z,
                  subMenuOpenDelay: j,
                  subMenuCloseDelay: B,
                  forceSubMenuRender: K,
                  builtinPlacements: Ce,
                  triggerSubMenuAction: me,
                  getPopupContainer: jr,
                  itemIcon: fe,
                  expandIcon: Re,
                  onItemClick: Vn,
                  onOpenChange: Dr,
                },
                i.createElement(Ai.Provider, { value: kr }, ei),
                i.createElement(
                  'div',
                  { style: { display: 'none' }, 'aria-hidden': !0 },
                  i.createElement(Ri.Provider, { value: Ir }, et),
                ),
              ),
            ),
          )
        }),
        Df = Lf,
        jf = ['className', 'title', 'eventKey', 'children'],
        Vf = ['children'],
        Hf = function (t) {
          var n = t.className,
            r = t.title,
            a = t.eventKey,
            u = t.children,
            o = z(t, jf),
            c = i.useContext(ht),
            s = c.prefixCls,
            l = ''.concat(s, '-item-group')
          return i.createElement(
            'li',
            y({}, o, {
              onClick: function (v) {
                return v.stopPropagation()
              },
              className: X()(l, n),
            }),
            i.createElement('div', { className: ''.concat(l, '-title'), title: typeof r == 'string' ? r : void 0 }, r),
            i.createElement('ul', { className: ''.concat(l, '-list') }, u),
          )
        }
      function iu(e) {
        var t = e.children,
          n = z(e, Vf),
          r = Cn(n.eventKey),
          a = Xr(t, r),
          u = Qn()
        return u ? a : i.createElement(Hf, Ti(n, ['warnKey']), a)
      }
      function au(e) {
        var t = e.className,
          n = e.style,
          r = i.useContext(ht),
          a = r.prefixCls,
          u = Qn()
        return u ? null : i.createElement('li', { className: X()(''.concat(a, '-item-divider'), t), style: n })
      }
      var kn = Df
      ;(kn.Item = Zn), (kn.SubMenu = wo), (kn.ItemGroup = iu), (kn.Divider = au)
      var Ff = kn
      function uu(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function su(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {}
          t % 2
            ? su(Object(n), !0).forEach(function (r) {
                uu(e, r, n[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : su(Object(n)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
              })
        }
        return e
      }
      function Uf(e) {
        if (Array.isArray(e)) return e
      }
      function Kf(e, t) {
        var n = e == null ? null : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator']
        if (n != null) {
          var r = [],
            a = !0,
            u = !1,
            o,
            c
          try {
            for (n = n.call(e); !(a = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); a = !0);
          } catch (s) {
            ;(u = !0), (c = s)
          } finally {
            try {
              !a && n.return != null && n.return()
            } finally {
              if (u) throw c
            }
          }
          return r
        }
      }
      function xo(e, t) {
        ;(t == null || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function cu(e, t) {
        if (!!e) {
          if (typeof e == 'string') return xo(e, t)
          var n = Object.prototype.toString.call(e).slice(8, -1)
          if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
            return Array.from(e)
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return xo(e, t)
        }
      }
      function Wf() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function St(e, t) {
        return Uf(e) || Kf(e, t) || cu(e, t) || Wf()
      }
      function Bf(e, t) {
        if (e == null) return {}
        var n = {},
          r = Object.keys(e),
          a,
          u
        for (u = 0; u < r.length; u++) (a = r[u]), !(t.indexOf(a) >= 0) && (n[a] = e[a])
        return n
      }
      function lu(e, t) {
        if (e == null) return {}
        var n = Bf(e, t),
          r,
          a
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e)
          for (a = 0; a < u.length; a++)
            (r = u[a]), !(t.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, r) || (n[r] = e[r]))
        }
        return n
      }
      function Ht() {
        return (
          (Ht = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
          Ht.apply(this, arguments)
        )
      }
      function zf(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function fu(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      function $f(e, t, n) {
        return t && fu(e.prototype, t), n && fu(e, n), Object.defineProperty(e, 'prototype', { writable: !1 }), e
      }
      function du(e) {
        if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      function Ro(e, t) {
        return (
          (Ro = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (r, a) {
                return (r.__proto__ = a), r
              }),
          Ro(e, t)
        )
      }
      function Gf(e, t) {
        if (typeof t != 'function' && t !== null)
          throw new TypeError('Super expression must either be null or a function')
        ;(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && Ro(e, t)
      }
      function br(e) {
        return (
          (br = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (n) {
                return n.__proto__ || Object.getPrototypeOf(n)
              }),
          br(e)
        )
      }
      function Yf() {
        if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham) return !1
        if (typeof Proxy == 'function') return !0
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
        } catch (e) {
          return !1
        }
      }
      function Ln(e) {
        return (
          (Ln =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (t) {
                  return typeof t
                }
              : function (t) {
                  return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t
                }),
          Ln(e)
        )
      }
      function Xf(e, t) {
        if (t && (Ln(t) === 'object' || typeof t == 'function')) return t
        if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined')
        return du(e)
      }
      function Qf(e) {
        var t = Yf()
        return function () {
          var r = br(e),
            a
          if (t) {
            var u = br(this).constructor
            a = Reflect.construct(r, arguments, u)
          } else a = r.apply(this, arguments)
          return Xf(this, a)
        }
      }
      var vu = function (t) {
          return +setTimeout(t, 16)
        },
        pu = function (t) {
          return clearTimeout(t)
        }
      typeof window != 'undefined' &&
        'requestAnimationFrame' in window &&
        ((vu = function (t) {
          return window.requestAnimationFrame(t)
        }),
        (pu = function (t) {
          return window.cancelAnimationFrame(t)
        }))
      var mu = 0,
        Oo = new Map()
      function hu(e) {
        Oo.delete(e)
      }
      function Ft(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1
        mu += 1
        var n = mu
        function r(a) {
          if (a === 0) hu(n), e()
          else {
            var u = vu(function () {
              r(a - 1)
            })
            Oo.set(n, u)
          }
        }
        return r(t), n
      }
      Ft.cancel = function (e) {
        var t = Oo.get(e)
        return hu(t), pu(t)
      }
      function Ao(e, t) {
        return e ? e.contains(t) : !1
      }
      function Zf(e) {
        return e instanceof HTMLElement ? e : mt.findDOMNode(e)
      }
      function zv(e, t, n) {
        var r = React.useRef({})
        return (
          (!('value' in r.current) || n(r.current.condition, t)) &&
            ((r.current.value = e()), (r.current.condition = t)),
          r.current.value
        )
      }
      function Jf(e, t) {
        typeof e == 'function' ? e(t) : Ln(e) === 'object' && e && 'current' in e && (e.current = t)
      }
      function gu() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        var r = t.filter(function (a) {
          return a
        })
        return r.length <= 1
          ? r[0]
          : function (a) {
              t.forEach(function (u) {
                Jf(u, a)
              })
            }
      }
      function $v() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        return useMemo(
          function () {
            return gu.apply(void 0, t)
          },
          t,
          function (r, a) {
            return (
              r.length === a.length &&
              r.every(function (u, o) {
                return u === a[o]
              })
            )
          },
        )
      }
      function qf(e) {
        var t,
          n,
          r = (0, ge.isMemo)(e) ? e.type.type : e.type
        return !(
          (typeof r == 'function' && !((t = r.prototype) === null || t === void 0 ? void 0 : t.render)) ||
          (typeof e == 'function' && !((n = e.prototype) === null || n === void 0 ? void 0 : n.render))
        )
      }
      function Er(e, t, n, r) {
        var a = mt.unstable_batchedUpdates
          ? function (o) {
              mt.unstable_batchedUpdates(n, o)
            }
          : n
        return (
          e.addEventListener && e.addEventListener(t, a, r),
          {
            remove: function () {
              e.removeEventListener && e.removeEventListener(t, a, r)
            },
          }
        )
      }
      function yu() {
        return !!(typeof window != 'undefined' && window.document && window.document.createElement)
      }
      var ed = (0, i.forwardRef)(function (e, t) {
          var n = e.didUpdate,
            r = e.getContainer,
            a = e.children,
            u = (0, i.useRef)(),
            o = (0, i.useRef)()
          ;(0, i.useImperativeHandle)(t, function () {
            return {}
          })
          var c = (0, i.useRef)(!1)
          return (
            !c.current && yu() && ((o.current = r()), (u.current = o.current.parentNode), (c.current = !0)),
            (0, i.useEffect)(function () {
              n == null || n(e)
            }),
            (0, i.useEffect)(function () {
              return (
                o.current.parentNode === null && u.current !== null && u.current.appendChild(o.current),
                function () {
                  var s, l
                  ;(s = o.current) === null ||
                    s === void 0 ||
                    (l = s.parentNode) === null ||
                    l === void 0 ||
                    l.removeChild(o.current)
                }
              )
            }, []),
            o.current ? mt.createPortal(a, o.current) : null
          )
        }),
        td = ed
      function nd(e, t, n) {
        return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1]
      }
      function rd(e, t, n) {
        var r = e[t] || {}
        return Je(Je({}, r), n)
      }
      function od(e, t, n, r) {
        for (var a = n.points, u = Object.keys(e), o = 0; o < u.length; o += 1) {
          var c = u[o]
          if (nd(e[c].points, a, r)) return ''.concat(t, '-placement-').concat(c)
        }
        return ''
      }
      var id = function () {
        if (typeof navigator == 'undefined' || typeof window == 'undefined') return !1
        var e = navigator.userAgent || navigator.vendor || window.opera
        return (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
            e,
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
            e == null ? void 0 : e.substr(0, 4),
          )
        )
      }
      function lt(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function bu(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function We(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {}
          t % 2
            ? bu(Object(n), !0).forEach(function (r) {
                lt(e, r, n[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : bu(Object(n)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
              })
        }
        return e
      }
      function ad(e) {
        if (Array.isArray(e)) return e
      }
      function ud(e, t) {
        var n = e == null ? null : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator']
        if (n != null) {
          var r = [],
            a = !0,
            u = !1,
            o,
            c
          try {
            for (n = n.call(e); !(a = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); a = !0);
          } catch (s) {
            ;(u = !0), (c = s)
          } finally {
            try {
              !a && n.return != null && n.return()
            } finally {
              if (u) throw c
            }
          }
          return r
        }
      }
      function Eu(e, t) {
        ;(t == null || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function sd(e, t) {
        if (!!e) {
          if (typeof e == 'string') return Eu(e, t)
          var n = Object.prototype.toString.call(e).slice(8, -1)
          if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
            return Array.from(e)
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Eu(e, t)
        }
      }
      function cd() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function xt(e, t) {
        return ad(e) || ud(e, t) || sd(e, t) || cd()
      }
      function vn(e) {
        return (
          (vn =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (t) {
                  return typeof t
                }
              : function (t) {
                  return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t
                }),
          vn(e)
        )
      }
      function ld(e) {
        return e instanceof HTMLElement ? e : mt.findDOMNode(e)
      }
      function No(e) {
        return (
          (No =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (t) {
                  return typeof t
                }
              : function (t) {
                  return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t
                }),
          No(e)
        )
      }
      function Gv(e, t, n) {
        var r = React.useRef({})
        return (
          (!('value' in r.current) || n(r.current.condition, t)) &&
            ((r.current.value = e()), (r.current.condition = t)),
          r.current.value
        )
      }
      function Su(e, t) {
        typeof e == 'function' ? e(t) : No(e) === 'object' && e && 'current' in e && (e.current = t)
      }
      function fd() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        var r = t.filter(function (a) {
          return a
        })
        return r.length <= 1
          ? r[0]
          : function (a) {
              t.forEach(function (u) {
                Su(u, a)
              })
            }
      }
      function Yv() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        return useMemo(
          function () {
            return fd.apply(void 0, t)
          },
          t,
          function (r, a) {
            return (
              r.length === a.length &&
              r.every(function (u, o) {
                return u === a[o]
              })
            )
          },
        )
      }
      function Xv(e) {
        var t,
          n,
          r = isMemo(e) ? e.type.type : e.type
        return !(
          (typeof r == 'function' && !((t = r.prototype) === null || t === void 0 ? void 0 : t.render)) ||
          (typeof e == 'function' && !((n = e.prototype) === null || n === void 0 ? void 0 : n.render))
        )
      }
      function Io() {
        return !!(typeof window != 'undefined' && window.document && window.document.createElement)
      }
      function wu(e, t) {
        var n = {}
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n['Webkit'.concat(e)] = 'webkit'.concat(t)),
          (n['Moz'.concat(e)] = 'moz'.concat(t)),
          (n['ms'.concat(e)] = 'MS'.concat(t)),
          (n['O'.concat(e)] = 'o'.concat(t.toLowerCase())),
          n
        )
      }
      function dd(e, t) {
        var n = { animationend: wu('Animation', 'AnimationEnd'), transitionend: wu('Transition', 'TransitionEnd') }
        return (
          e &&
            ('AnimationEvent' in t || delete n.animationend.animation,
            'TransitionEvent' in t || delete n.transitionend.transition),
          n
        )
      }
      var vd = dd(Io(), typeof window != 'undefined' ? window : {}),
        _u = {}
      if (Io()) {
        var pd = document.createElement('div')
        _u = pd.style
      }
      var Sr = {}
      function Cu(e) {
        if (Sr[e]) return Sr[e]
        var t = vd[e]
        if (t)
          for (var n = Object.keys(t), r = n.length, a = 0; a < r; a += 1) {
            var u = n[a]
            if (Object.prototype.hasOwnProperty.call(t, u) && u in _u) return (Sr[e] = t[u]), Sr[e]
          }
        return ''
      }
      var Tu = Cu('animationend'),
        Pu = Cu('transitionend'),
        Mu = !!(Tu && Pu),
        xu = Tu || 'animationend',
        Ru = Pu || 'transitionend'
      function Ou(e, t) {
        if (!e) return null
        if (vn(e) === 'object') {
          var n = t.replace(/-\w/g, function (r) {
            return r[1].toUpperCase()
          })
          return e[n]
        }
        return ''.concat(e, '-').concat(t)
      }
      var Dn = 'none',
        wr = 'appear',
        _r = 'enter',
        Cr = 'leave',
        Au = 'none',
        Rt = 'prepare',
        pn = 'start',
        mn = 'active',
        ko = 'end'
      function Tr(e) {
        var t = (0, i.useRef)(!1),
          n = (0, i.useState)(e),
          r = xt(n, 2),
          a = r[0],
          u = r[1]
        function o(c) {
          t.current || u(c)
        }
        return (
          (0, i.useEffect)(function () {
            return function () {
              t.current = !0
            }
          }, []),
          [a, o]
        )
      }
      var md = Io() ? i.useLayoutEffect : i.useEffect,
        Nu = md,
        Iu = function (t) {
          return +setTimeout(t, 16)
        },
        ku = function (t) {
          return clearTimeout(t)
        }
      typeof window != 'undefined' &&
        'requestAnimationFrame' in window &&
        ((Iu = function (t) {
          return window.requestAnimationFrame(t)
        }),
        (ku = function (t) {
          return window.cancelAnimationFrame(t)
        }))
      var Lu = 0,
        Lo = new Map()
      function Du(e) {
        Lo.delete(e)
      }
      function Do(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1
        Lu += 1
        var n = Lu
        function r(a) {
          if (a === 0) Du(n), e()
          else {
            var u = Iu(function () {
              r(a - 1)
            })
            Lo.set(n, u)
          }
        }
        return r(t), n
      }
      Do.cancel = function (e) {
        var t = Lo.get(e)
        return Du(t), ku(t)
      }
      var hd = function () {
          var e = i.useRef(null)
          function t() {
            Do.cancel(e.current)
          }
          function n(r) {
            var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2
            t()
            var u = Do(function () {
              a <= 1
                ? r({
                    isCanceled: function () {
                      return u !== e.current
                    },
                  })
                : n(r, a - 1)
            })
            e.current = u
          }
          return (
            i.useEffect(function () {
              return function () {
                t()
              }
            }, []),
            [n, t]
          )
        },
        ju = [Rt, pn, mn, ko],
        Vu = !1,
        gd = !0
      function Hu(e) {
        return e === mn || e === ko
      }
      var yd = function (e, t) {
          var n = Tr(Au),
            r = xt(n, 2),
            a = r[0],
            u = r[1],
            o = hd(),
            c = xt(o, 2),
            s = c[0],
            l = c[1]
          function d() {
            u(Rt)
          }
          return (
            Nu(
              function () {
                if (a !== Au && a !== ko) {
                  var v = ju.indexOf(a),
                    m = ju[v + 1],
                    p = t(a)
                  p === Vu
                    ? u(m)
                    : s(function (h) {
                        function S() {
                          h.isCanceled() || u(m)
                        }
                        p === !0 ? S() : Promise.resolve(p).then(S)
                      })
                }
              },
              [e, a],
            ),
            i.useEffect(function () {
              return function () {
                l()
              }
            }, []),
            [d, a]
          )
        },
        bd = function (e) {
          var t = (0, i.useRef)(),
            n = (0, i.useRef)(e)
          n.current = e
          var r = i.useCallback(function (o) {
            n.current(o)
          }, [])
          function a(o) {
            o && (o.removeEventListener(Ru, r), o.removeEventListener(xu, r))
          }
          function u(o) {
            t.current && t.current !== o && a(t.current),
              o && o !== t.current && (o.addEventListener(Ru, r), o.addEventListener(xu, r), (t.current = o))
          }
          return (
            i.useEffect(function () {
              return function () {
                a(t.current)
              }
            }, []),
            [u, a]
          )
        }
      function Ed(e, t, n, r) {
        var a = r.motionEnter,
          u = a === void 0 ? !0 : a,
          o = r.motionAppear,
          c = o === void 0 ? !0 : o,
          s = r.motionLeave,
          l = s === void 0 ? !0 : s,
          d = r.motionDeadline,
          v = r.motionLeaveImmediately,
          m = r.onAppearPrepare,
          p = r.onEnterPrepare,
          h = r.onLeavePrepare,
          S = r.onAppearStart,
          T = r.onEnterStart,
          D = r.onLeaveStart,
          V = r.onAppearActive,
          F = r.onEnterActive,
          N = r.onLeaveActive,
          j = r.onAppearEnd,
          k = r.onEnterEnd,
          B = r.onLeaveEnd,
          K = r.onVisibleChanged,
          U = Tr(),
          w = xt(U, 2),
          b = w[0],
          _ = w[1],
          R = Tr(Dn),
          H = xt(R, 2),
          C = H[0],
          Y = H[1],
          q = Tr(null),
          ee = xt(q, 2),
          J = ee[0],
          ae = ee[1],
          pe = (0, i.useRef)(!1),
          Z = (0, i.useRef)(null),
          $ = (0, i.useRef)(!1),
          oe = (0, i.useRef)(null)
        function te() {
          var W = n()
          return W || oe.current
        }
        var me = (0, i.useRef)(!1)
        function Ce(W) {
          var Q = te()
          if (!(W && !W.deadline && W.target !== Q)) {
            var ne
            C === wr && me.current
              ? (ne = j == null ? void 0 : j(Q, W))
              : C === _r && me.current
              ? (ne = k == null ? void 0 : k(Q, W))
              : C === Cr && me.current && (ne = B == null ? void 0 : B(Q, W)),
              ne !== !1 && !$.current && (Y(Dn), ae(null))
          }
        }
        var fe = bd(Ce),
          Re = xt(fe, 1),
          _e = Re[0],
          ie = i.useMemo(
            function () {
              var W, Q, ne
              switch (C) {
                case wr:
                  return (W = {}), lt(W, Rt, m), lt(W, pn, S), lt(W, mn, V), W
                case _r:
                  return (Q = {}), lt(Q, Rt, p), lt(Q, pn, T), lt(Q, mn, F), Q
                case Cr:
                  return (ne = {}), lt(ne, Rt, h), lt(ne, pn, D), lt(ne, mn, N), ne
                default:
                  return {}
              }
            },
            [C],
          ),
          Ee = yd(C, function (W) {
            if (W === Rt) {
              var Q = ie[Rt]
              return Q ? Q(te()) : Vu
            }
            if (de in ie) {
              var ne
              ae(((ne = ie[de]) === null || ne === void 0 ? void 0 : ne.call(ie, te(), null)) || null)
            }
            return (
              de === mn &&
                (_e(te()),
                d > 0 &&
                  (clearTimeout(Z.current),
                  (Z.current = setTimeout(function () {
                    Ce({ deadline: !0 })
                  }, d)))),
              gd
            )
          }),
          he = xt(Ee, 2),
          Ae = he[0],
          de = he[1],
          je = Hu(de)
        ;(me.current = je),
          Nu(
            function () {
              _(t)
              var W = pe.current
              if (((pe.current = !0), !!e)) {
                var Q
                !W && t && c && (Q = wr),
                  W && t && u && (Q = _r),
                  ((W && !t && l) || (!W && v && !t && l)) && (Q = Cr),
                  Q && (Y(Q), Ae())
              }
            },
            [t],
          ),
          (0, i.useEffect)(
            function () {
              ;((C === wr && !c) || (C === _r && !u) || (C === Cr && !l)) && Y(Dn)
            },
            [c, u, l],
          ),
          (0, i.useEffect)(function () {
            return function () {
              clearTimeout(Z.current), ($.current = !0)
            }
          }, []),
          (0, i.useEffect)(
            function () {
              b !== void 0 && C === Dn && (K == null || K(b))
            },
            [b, C],
          )
        var Ue = J
        return ie[Rt] && de === pn && (Ue = We({ transition: 'none' }, Ue)), [C, de, Ue, b != null ? b : t]
      }
      function Fu(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function Uu(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      function Ku(e, t, n) {
        return t && Uu(e.prototype, t), n && Uu(e, n), Object.defineProperty(e, 'prototype', { writable: !1 }), e
      }
      function jo(e, t) {
        return (
          (jo =
            Object.setPrototypeOf ||
            function (r, a) {
              return (r.__proto__ = a), r
            }),
          jo(e, t)
        )
      }
      function Wu(e, t) {
        if (typeof t != 'function' && t !== null)
          throw new TypeError('Super expression must either be null or a function')
        ;(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && jo(e, t)
      }
      function Pr(e) {
        return (
          (Pr = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (n) {
                return n.__proto__ || Object.getPrototypeOf(n)
              }),
          Pr(e)
        )
      }
      function Sd() {
        if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham) return !1
        if (typeof Proxy == 'function') return !0
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
        } catch (e) {
          return !1
        }
      }
      function wd(e) {
        if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      function _d(e, t) {
        if (t && (vn(t) === 'object' || typeof t == 'function')) return t
        if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined')
        return wd(e)
      }
      function Bu(e) {
        var t = Sd()
        return function () {
          var r = Pr(e),
            a
          if (t) {
            var u = Pr(this).constructor
            a = Reflect.construct(r, arguments, u)
          } else a = r.apply(this, arguments)
          return _d(this, a)
        }
      }
      var Cd = (function (e) {
          Wu(n, e)
          var t = Bu(n)
          function n() {
            return Fu(this, n), t.apply(this, arguments)
          }
          return (
            Ku(n, [
              {
                key: 'render',
                value: function () {
                  return this.props.children
                },
              },
            ]),
            n
          )
        })(i.Component),
        Td = Cd
      function Pd(e) {
        var t = e
        vn(e) === 'object' && (t = e.transitionSupport)
        function n(a) {
          return !!(a.motionName && t)
        }
        var r = i.forwardRef(function (a, u) {
          var o = a.visible,
            c = o === void 0 ? !0 : o,
            s = a.removeOnLeave,
            l = s === void 0 ? !0 : s,
            d = a.forceRender,
            v = a.children,
            m = a.motionName,
            p = a.leavedClassName,
            h = a.eventProps,
            S = n(a),
            T = (0, i.useRef)(),
            D = (0, i.useRef)()
          function V() {
            try {
              return T.current instanceof HTMLElement ? T.current : ld(D.current)
            } catch (C) {
              return null
            }
          }
          var F = Ed(S, c, V, a),
            N = xt(F, 4),
            j = N[0],
            k = N[1],
            B = N[2],
            K = N[3],
            U = i.useRef(K)
          K && (U.current = !0)
          var w = i.useCallback(function (C) {
              ;(T.current = C), Su(u, C)
            }, []),
            b,
            _ = We(We({}, h), {}, { visible: c })
          if (!v) b = null
          else if (j === Dn || !n(a))
            K
              ? (b = v(We({}, _), w))
              : !l && U.current
              ? (b = v(We(We({}, _), {}, { className: p }), w))
              : d
              ? (b = v(We(We({}, _), {}, { style: { display: 'none' } }), w))
              : (b = null)
          else {
            var R, H
            k === Rt ? (H = 'prepare') : Hu(k) ? (H = 'active') : k === pn && (H = 'start'),
              (b = v(
                We(
                  We({}, _),
                  {},
                  {
                    className: X()(
                      Ou(m, j),
                      ((R = {}), lt(R, Ou(m, ''.concat(j, '-').concat(H)), H), lt(R, m, typeof m == 'string'), R),
                    ),
                    style: B,
                  },
                ),
                w,
              ))
          }
          return i.createElement(Td, { ref: D }, b)
        })
        return (r.displayName = 'CSSMotion'), r
      }
      var zu = Pd(Mu)
      function Vo() {
        return (
          (Vo =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }),
          Vo.apply(this, arguments)
        )
      }
      function Md(e, t) {
        if (e == null) return {}
        var n = {},
          r = Object.keys(e),
          a,
          u
        for (u = 0; u < r.length; u++) (a = r[u]), !(t.indexOf(a) >= 0) && (n[a] = e[a])
        return n
      }
      function $u(e, t) {
        if (e == null) return {}
        var n = Md(e, t),
          r,
          a
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e)
          for (a = 0; a < u.length; a++)
            (r = u[a]), !(t.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, r) || (n[r] = e[r]))
        }
        return n
      }
      var Ho = 'add',
        Fo = 'keep',
        Uo = 'remove',
        Gu = 'removed'
      function xd(e) {
        var t
        return (
          e && vn(e) === 'object' && 'key' in e ? (t = e) : (t = { key: e }), We(We({}, t), {}, { key: String(t.key) })
        )
      }
      function Ko() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
        return e.map(xd)
      }
      function Rd() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
          t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
          n = [],
          r = 0,
          a = t.length,
          u = Ko(e),
          o = Ko(t)
        u.forEach(function (l) {
          for (var d = !1, v = r; v < a; v += 1) {
            var m = o[v]
            if (m.key === l.key) {
              r < v &&
                ((n = n.concat(
                  o.slice(r, v).map(function (p) {
                    return We(We({}, p), {}, { status: Ho })
                  }),
                )),
                (r = v)),
                n.push(We(We({}, m), {}, { status: Fo })),
                (r += 1),
                (d = !0)
              break
            }
          }
          d || n.push(We(We({}, l), {}, { status: Uo }))
        }),
          r < a &&
            (n = n.concat(
              o.slice(r).map(function (l) {
                return We(We({}, l), {}, { status: Ho })
              }),
            ))
        var c = {}
        n.forEach(function (l) {
          var d = l.key
          c[d] = (c[d] || 0) + 1
        })
        var s = Object.keys(c).filter(function (l) {
          return c[l] > 1
        })
        return (
          s.forEach(function (l) {
            ;(n = n.filter(function (d) {
              var v = d.key,
                m = d.status
              return v !== l || m !== Uo
            })),
              n.forEach(function (d) {
                d.key === l && (d.status = Fo)
              })
          }),
          n
        )
      }
      var Od = ['component', 'children', 'onVisibleChanged'],
        Ad = ['status'],
        Nd = [
          'eventProps',
          'visible',
          'children',
          'motionName',
          'motionAppear',
          'motionEnter',
          'motionLeave',
          'motionLeaveImmediately',
          'motionDeadline',
          'removeOnLeave',
          'leavedClassName',
          'onAppearStart',
          'onAppearActive',
          'onAppearEnd',
          'onEnterStart',
          'onEnterActive',
          'onEnterEnd',
          'onLeaveStart',
          'onLeaveActive',
          'onLeaveEnd',
        ]
      function Id(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zu,
          n = (function (r) {
            Wu(u, r)
            var a = Bu(u)
            function u() {
              var o
              Fu(this, u)
              for (var c = arguments.length, s = new Array(c), l = 0; l < c; l++) s[l] = arguments[l]
              return (
                (o = a.call.apply(a, [this].concat(s))),
                (o.state = { keyEntities: [] }),
                (o.removeKey = function (d) {
                  o.setState(function (v) {
                    var m = v.keyEntities
                    return {
                      keyEntities: m.map(function (p) {
                        return p.key !== d ? p : We(We({}, p), {}, { status: Gu })
                      }),
                    }
                  })
                }),
                o
              )
            }
            return (
              Ku(
                u,
                [
                  {
                    key: 'render',
                    value: function () {
                      var c = this,
                        s = this.state.keyEntities,
                        l = this.props,
                        d = l.component,
                        v = l.children,
                        m = l.onVisibleChanged,
                        p = $u(l, Od),
                        h = d || i.Fragment,
                        S = {}
                      return (
                        Nd.forEach(function (T) {
                          ;(S[T] = p[T]), delete p[T]
                        }),
                        delete p.keys,
                        i.createElement(
                          h,
                          p,
                          s.map(function (T) {
                            var D = T.status,
                              V = $u(T, Ad),
                              F = D === Ho || D === Fo
                            return i.createElement(
                              t,
                              Vo({}, S, {
                                key: V.key,
                                visible: F,
                                eventProps: V,
                                onVisibleChanged: function (j) {
                                  m == null || m(j, { key: V.key }), j || c.removeKey(V.key)
                                },
                              }),
                              v,
                            )
                          }),
                        )
                      )
                    },
                  },
                ],
                [
                  {
                    key: 'getDerivedStateFromProps',
                    value: function (c, s) {
                      var l = c.keys,
                        d = s.keyEntities,
                        v = Ko(l),
                        m = Rd(d, v)
                      return {
                        keyEntities: m.filter(function (p) {
                          var h = d.find(function (S) {
                            var T = S.key
                            return p.key === T
                          })
                          return !(h && h.status === Gu && p.status === Uo)
                        }),
                      }
                    },
                  },
                ],
              ),
              u
            )
          })(i.Component)
        return (n.defaultProps = { component: 'div' }), n
      }
      var Qv = Id(Mu),
        Wo = zu
      function Yu(e) {
        var t = e.prefixCls,
          n = e.motion,
          r = e.animation,
          a = e.transitionName
        return n || (r ? { motionName: ''.concat(t, '-').concat(r) } : a ? { motionName: a } : null)
      }
      function kd(e) {
        var t = e.prefixCls,
          n = e.visible,
          r = e.zIndex,
          a = e.mask,
          u = e.maskMotion,
          o = e.maskAnimation,
          c = e.maskTransitionName
        if (!a) return null
        var s = {}
        return (
          (u || c || o) &&
            (s = Je({ motionAppear: !0 }, Yu({ motion: u, prefixCls: t, transitionName: c, animation: o }))),
          i.createElement(Wo, Ht({}, s, { visible: n, removeOnLeave: !0 }), function (l) {
            var d = l.className
            return i.createElement('div', { style: { zIndex: r }, className: X()(''.concat(t, '-mask'), d) })
          })
        )
      }
      var Bo = yu() ? i.useLayoutEffect : i.useEffect,
        Xu = Bo,
        Zv = function (t, n) {
          var r = React.useRef(!0)
          Bo(function () {
            if (!r.current) return t()
          }, n),
            Bo(function () {
              return (
                (r.current = !1),
                function () {
                  r.current = !0
                }
              )
            }, [])
        }
      function zo() {
        'use strict'
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ zo =
          function () {
            return e
          }
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r = typeof Symbol == 'function' ? Symbol : {},
          a = r.iterator || '@@iterator',
          u = r.asyncIterator || '@@asyncIterator',
          o = r.toStringTag || '@@toStringTag'
        function c(w, b, _) {
          return Object.defineProperty(w, b, { value: _, enumerable: !0, configurable: !0, writable: !0 }), w[b]
        }
        try {
          c({}, '')
        } catch (w) {
          c = function (_, R, H) {
            return (_[R] = H)
          }
        }
        function s(w, b, _, R) {
          var H = b && b.prototype instanceof v ? b : v,
            C = Object.create(H.prototype),
            Y = new B(R || [])
          return (
            (C._invoke = (function (q, ee, J) {
              var ae = 'suspendedStart'
              return function (pe, Z) {
                if (ae === 'executing') throw new Error('Generator is already running')
                if (ae === 'completed') {
                  if (pe === 'throw') throw Z
                  return U()
                }
                for (J.method = pe, J.arg = Z; ; ) {
                  var $ = J.delegate
                  if ($) {
                    var oe = N($, J)
                    if (oe) {
                      if (oe === d) continue
                      return oe
                    }
                  }
                  if (J.method === 'next') J.sent = J._sent = J.arg
                  else if (J.method === 'throw') {
                    if (ae === 'suspendedStart') throw ((ae = 'completed'), J.arg)
                    J.dispatchException(J.arg)
                  } else J.method === 'return' && J.abrupt('return', J.arg)
                  ae = 'executing'
                  var te = l(q, ee, J)
                  if (te.type === 'normal') {
                    if (((ae = J.done ? 'completed' : 'suspendedYield'), te.arg === d)) continue
                    return { value: te.arg, done: J.done }
                  }
                  te.type === 'throw' && ((ae = 'completed'), (J.method = 'throw'), (J.arg = te.arg))
                }
              }
            })(w, _, Y)),
            C
          )
        }
        function l(w, b, _) {
          try {
            return { type: 'normal', arg: w.call(b, _) }
          } catch (R) {
            return { type: 'throw', arg: R }
          }
        }
        e.wrap = s
        var d = {}
        function v() {}
        function m() {}
        function p() {}
        var h = {}
        c(h, a, function () {
          return this
        })
        var S = Object.getPrototypeOf,
          T = S && S(S(K([])))
        T && T !== t && n.call(T, a) && (h = T)
        var D = (p.prototype = v.prototype = Object.create(h))
        function V(w) {
          ;['next', 'throw', 'return'].forEach(function (b) {
            c(w, b, function (_) {
              return this._invoke(b, _)
            })
          })
        }
        function F(w, b) {
          function _(H, C, Y, q) {
            var ee = l(w[H], w, C)
            if (ee.type !== 'throw') {
              var J = ee.arg,
                ae = J.value
              return ae && Ln(ae) == 'object' && n.call(ae, '__await')
                ? b.resolve(ae.__await).then(
                    function (pe) {
                      _('next', pe, Y, q)
                    },
                    function (pe) {
                      _('throw', pe, Y, q)
                    },
                  )
                : b.resolve(ae).then(
                    function (pe) {
                      ;(J.value = pe), Y(J)
                    },
                    function (pe) {
                      return _('throw', pe, Y, q)
                    },
                  )
            }
            q(ee.arg)
          }
          var R
          this._invoke = function (H, C) {
            function Y() {
              return new b(function (q, ee) {
                _(H, C, q, ee)
              })
            }
            return (R = R ? R.then(Y, Y) : Y())
          }
        }
        function N(w, b) {
          var _ = w.iterator[b.method]
          if (_ === void 0) {
            if (((b.delegate = null), b.method === 'throw')) {
              if (w.iterator.return && ((b.method = 'return'), (b.arg = void 0), N(w, b), b.method === 'throw'))
                return d
              ;(b.method = 'throw'), (b.arg = new TypeError("The iterator does not provide a 'throw' method"))
            }
            return d
          }
          var R = l(_, w.iterator, b.arg)
          if (R.type === 'throw') return (b.method = 'throw'), (b.arg = R.arg), (b.delegate = null), d
          var H = R.arg
          return H
            ? H.done
              ? ((b[w.resultName] = H.value),
                (b.next = w.nextLoc),
                b.method !== 'return' && ((b.method = 'next'), (b.arg = void 0)),
                (b.delegate = null),
                d)
              : H
            : ((b.method = 'throw'),
              (b.arg = new TypeError('iterator result is not an object')),
              (b.delegate = null),
              d)
        }
        function j(w) {
          var b = { tryLoc: w[0] }
          1 in w && (b.catchLoc = w[1]), 2 in w && ((b.finallyLoc = w[2]), (b.afterLoc = w[3])), this.tryEntries.push(b)
        }
        function k(w) {
          var b = w.completion || {}
          ;(b.type = 'normal'), delete b.arg, (w.completion = b)
        }
        function B(w) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]), w.forEach(j, this), this.reset(!0)
        }
        function K(w) {
          if (w) {
            var b = w[a]
            if (b) return b.call(w)
            if (typeof w.next == 'function') return w
            if (!isNaN(w.length)) {
              var _ = -1,
                R = function H() {
                  for (; ++_ < w.length; ) if (n.call(w, _)) return (H.value = w[_]), (H.done = !1), H
                  return (H.value = void 0), (H.done = !0), H
                }
              return (R.next = R)
            }
          }
          return { next: U }
        }
        function U() {
          return { value: void 0, done: !0 }
        }
        return (
          (m.prototype = p),
          c(D, 'constructor', p),
          c(p, 'constructor', m),
          (m.displayName = c(p, o, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (w) {
            var b = typeof w == 'function' && w.constructor
            return !!b && (b === m || (b.displayName || b.name) === 'GeneratorFunction')
          }),
          (e.mark = function (w) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(w, p) : ((w.__proto__ = p), c(w, o, 'GeneratorFunction')),
              (w.prototype = Object.create(D)),
              w
            )
          }),
          (e.awrap = function (w) {
            return { __await: w }
          }),
          V(F.prototype),
          c(F.prototype, u, function () {
            return this
          }),
          (e.AsyncIterator = F),
          (e.async = function (w, b, _, R, H) {
            H === void 0 && (H = Promise)
            var C = new F(s(w, b, _, R), H)
            return e.isGeneratorFunction(b)
              ? C
              : C.next().then(function (Y) {
                  return Y.done ? Y.value : C.next()
                })
          }),
          V(D),
          c(D, o, 'Generator'),
          c(D, a, function () {
            return this
          }),
          c(D, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (w) {
            var b = []
            for (var _ in w) b.push(_)
            return (
              b.reverse(),
              function R() {
                for (; b.length; ) {
                  var H = b.pop()
                  if (H in w) return (R.value = H), (R.done = !1), R
                }
                return (R.done = !0), R
              }
            )
          }),
          (e.values = K),
          (B.prototype = {
            constructor: B,
            reset: function (b) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
                !b)
              )
                for (var _ in this) _.charAt(0) === 't' && n.call(this, _) && !isNaN(+_.slice(1)) && (this[_] = void 0)
            },
            stop: function () {
              this.done = !0
              var b = this.tryEntries[0].completion
              if (b.type === 'throw') throw b.arg
              return this.rval
            },
            dispatchException: function (b) {
              if (this.done) throw b
              var _ = this
              function R(J, ae) {
                return (
                  (Y.type = 'throw'), (Y.arg = b), (_.next = J), ae && ((_.method = 'next'), (_.arg = void 0)), !!ae
                )
              }
              for (var H = this.tryEntries.length - 1; H >= 0; --H) {
                var C = this.tryEntries[H],
                  Y = C.completion
                if (C.tryLoc === 'root') return R('end')
                if (C.tryLoc <= this.prev) {
                  var q = n.call(C, 'catchLoc'),
                    ee = n.call(C, 'finallyLoc')
                  if (q && ee) {
                    if (this.prev < C.catchLoc) return R(C.catchLoc, !0)
                    if (this.prev < C.finallyLoc) return R(C.finallyLoc)
                  } else if (q) {
                    if (this.prev < C.catchLoc) return R(C.catchLoc, !0)
                  } else {
                    if (!ee) throw new Error('try statement without catch or finally')
                    if (this.prev < C.finallyLoc) return R(C.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (b, _) {
              for (var R = this.tryEntries.length - 1; R >= 0; --R) {
                var H = this.tryEntries[R]
                if (H.tryLoc <= this.prev && n.call(H, 'finallyLoc') && this.prev < H.finallyLoc) {
                  var C = H
                  break
                }
              }
              C && (b === 'break' || b === 'continue') && C.tryLoc <= _ && _ <= C.finallyLoc && (C = null)
              var Y = C ? C.completion : {}
              return (
                (Y.type = b),
                (Y.arg = _),
                C ? ((this.method = 'next'), (this.next = C.finallyLoc), d) : this.complete(Y)
              )
            },
            complete: function (b, _) {
              if (b.type === 'throw') throw b.arg
              return (
                b.type === 'break' || b.type === 'continue'
                  ? (this.next = b.arg)
                  : b.type === 'return'
                  ? ((this.rval = this.arg = b.arg), (this.method = 'return'), (this.next = 'end'))
                  : b.type === 'normal' && _ && (this.next = _),
                d
              )
            },
            finish: function (b) {
              for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
                var R = this.tryEntries[_]
                if (R.finallyLoc === b) return this.complete(R.completion, R.afterLoc), k(R), d
              }
            },
            catch: function (b) {
              for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
                var R = this.tryEntries[_]
                if (R.tryLoc === b) {
                  var H = R.completion
                  if (H.type === 'throw') {
                    var C = H.arg
                    k(R)
                  }
                  return C
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (b, _, R) {
              return (
                (this.delegate = { iterator: K(b), resultName: _, nextLoc: R }),
                this.method === 'next' && (this.arg = void 0),
                d
              )
            },
          }),
          e
        )
      }
      function Qu(e, t, n, r, a, u, o) {
        try {
          var c = e[u](o),
            s = c.value
        } catch (l) {
          n(l)
          return
        }
        c.done ? t(s) : Promise.resolve(s).then(r, a)
      }
      function Ld(e) {
        return function () {
          var t = this,
            n = arguments
          return new Promise(function (r, a) {
            var u = e.apply(t, n)
            function o(s) {
              Qu(u, r, a, o, c, 'next', s)
            }
            function c(s) {
              Qu(u, r, a, o, c, 'throw', s)
            }
            o(void 0)
          })
        }
      }
      function Dd(e) {
        var t = i.useRef(!1),
          n = i.useState(e),
          r = St(n, 2),
          a = r[0],
          u = r[1]
        i.useEffect(function () {
          return (
            (t.current = !1),
            function () {
              t.current = !0
            }
          )
        }, [])
        function o(c, s) {
          ;(s && t.current) || u(c)
        }
        return [a, o]
      }
      var Zu = ['measure', 'alignPre', 'align', null, 'motion'],
        jd = function (e, t) {
          var n = Dd(null),
            r = St(n, 2),
            a = r[0],
            u = r[1],
            o = (0, i.useRef)()
          function c(d) {
            u(d, !0)
          }
          function s() {
            Ft.cancel(o.current)
          }
          function l(d) {
            s(),
              (o.current = Ft(function () {
                c(function (v) {
                  switch (a) {
                    case 'align':
                      return 'motion'
                    case 'motion':
                      return 'stable'
                    default:
                  }
                  return v
                }),
                  d == null || d()
              }))
          }
          return (
            (0, i.useEffect)(
              function () {
                c('measure')
              },
              [e],
            ),
            (0, i.useEffect)(
              function () {
                switch (a) {
                  case 'measure':
                    t()
                    break
                  default:
                }
                a &&
                  (o.current = Ft(
                    Ld(
                      zo().mark(function d() {
                        var v, m
                        return zo().wrap(function (h) {
                          for (;;)
                            switch ((h.prev = h.next)) {
                              case 0:
                                ;(v = Zu.indexOf(a)), (m = Zu[v + 1]), m && v !== -1 && c(m)
                              case 3:
                              case 'end':
                                return h.stop()
                            }
                        }, d)
                      }),
                    ),
                  ))
              },
              [a],
            ),
            (0, i.useEffect)(function () {
              return function () {
                s()
              }
            }, []),
            [a, l]
          )
        },
        Vd = function (e) {
          var t = i.useState({ width: 0, height: 0 }),
            n = St(t, 2),
            r = n[0],
            a = n[1]
          function u(c) {
            a({ width: c.offsetWidth, height: c.offsetHeight })
          }
          var o = i.useMemo(
            function () {
              var c = {}
              if (e) {
                var s = r.width,
                  l = r.height
                e.indexOf('height') !== -1 && l
                  ? (c.height = l)
                  : e.indexOf('minHeight') !== -1 && l && (c.minHeight = l),
                  e.indexOf('width') !== -1 && s ? (c.width = s) : e.indexOf('minWidth') !== -1 && s && (c.minWidth = s)
              }
              return c
            },
            [e, r],
          )
          return [o, u]
        },
        Ju = i.forwardRef(function (e, t) {
          var n = e.visible,
            r = e.prefixCls,
            a = e.className,
            u = e.style,
            o = e.children,
            c = e.zIndex,
            s = e.stretch,
            l = e.destroyPopupOnHide,
            d = e.forceRender,
            v = e.align,
            m = e.point,
            p = e.getRootDomNode,
            h = e.getClassNameFromAlign,
            S = e.onAlign,
            T = e.onMouseEnter,
            D = e.onMouseLeave,
            V = e.onMouseDown,
            F = e.onTouchStart,
            N = e.onClick,
            j = (0, i.useRef)(),
            k = (0, i.useRef)(),
            B = (0, i.useState)(),
            K = St(B, 2),
            U = K[0],
            w = K[1],
            b = Vd(s),
            _ = St(b, 2),
            R = _[0],
            H = _[1]
          function C() {
            s && H(p())
          }
          var Y = jd(n, C),
            q = St(Y, 2),
            ee = q[0],
            J = q[1],
            ae = (0, i.useState)(0),
            pe = St(ae, 2),
            Z = pe[0],
            $ = pe[1],
            oe = (0, i.useRef)()
          Xu(
            function () {
              ee === 'alignPre' && $(0)
            },
            [ee],
          )
          function te() {
            return m || p
          }
          function me() {
            var he
            ;(he = j.current) === null || he === void 0 || he.forceAlign()
          }
          function Ce(he, Ae) {
            var de = h(Ae)
            U !== de && w(de),
              $(function (je) {
                return je + 1
              }),
              ee === 'align' && (S == null || S(he, Ae))
          }
          Xu(
            function () {
              ee === 'align' &&
                (Z < 2
                  ? me()
                  : J(function () {
                      var he
                      ;(he = oe.current) === null || he === void 0 || he.call(oe)
                    }))
            },
            [Z],
          )
          var fe = Je({}, Yu(e))
          ;['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function (he) {
            var Ae = fe[he]
            fe[he] = function (de, je) {
              return J(), Ae == null ? void 0 : Ae(de, je)
            }
          })
          function Re() {
            return new Promise(function (he) {
              oe.current = he
            })
          }
          i.useEffect(
            function () {
              !fe.motionName && ee === 'motion' && J()
            },
            [fe.motionName, ee],
          ),
            i.useImperativeHandle(t, function () {
              return {
                forceAlign: me,
                getElement: function () {
                  return k.current
                },
              }
            })
          var _e = Je(
              Je({}, R),
              {},
              {
                zIndex: c,
                opacity: ee === 'motion' || ee === 'stable' || !n ? void 0 : 0,
                pointerEvents: !n && ee !== 'stable' ? 'none' : void 0,
              },
              u,
            ),
            ie = !0
          ;(v == null ? void 0 : v.points) && (ee === 'align' || ee === 'stable') && (ie = !1)
          var Ee = o
          return (
            i.Children.count(o) > 1 && (Ee = i.createElement('div', { className: ''.concat(r, '-content') }, o)),
            i.createElement(
              Wo,
              Ht({ visible: n, ref: k, leavedClassName: ''.concat(r, '-hidden') }, fe, {
                onAppearPrepare: Re,
                onEnterPrepare: Re,
                removeOnLeave: l,
                forceRender: d,
              }),
              function (he, Ae) {
                var de = he.className,
                  je = he.style,
                  Ue = X()(r, a, U, de)
                return i.createElement(
                  Pa,
                  { target: te(), key: 'popup', ref: j, monitorWindowResize: !0, disabled: ie, align: v, onAlign: Ce },
                  i.createElement(
                    'div',
                    {
                      ref: Ae,
                      className: Ue,
                      onMouseEnter: T,
                      onMouseLeave: D,
                      onMouseDownCapture: V,
                      onTouchStartCapture: F,
                      onClick: N,
                      style: Je(Je({}, je), _e),
                    },
                    Ee,
                  ),
                )
              },
            )
          )
        })
      Ju.displayName = 'PopupInner'
      var Hd = Ju,
        qu = i.forwardRef(function (e, t) {
          var n = e.prefixCls,
            r = e.visible,
            a = e.zIndex,
            u = e.children,
            o = e.mobile
          o = o === void 0 ? {} : o
          var c = o.popupClassName,
            s = o.popupStyle,
            l = o.popupMotion,
            d = l === void 0 ? {} : l,
            v = o.popupRender,
            m = e.onClick,
            p = i.useRef()
          i.useImperativeHandle(t, function () {
            return {
              forceAlign: function () {},
              getElement: function () {
                return p.current
              },
            }
          })
          var h = Je({ zIndex: a }, s),
            S = u
          return (
            i.Children.count(u) > 1 && (S = i.createElement('div', { className: ''.concat(n, '-content') }, u)),
            v && (S = v(S)),
            i.createElement(Wo, Ht({ visible: r, ref: p, removeOnLeave: !0 }, d), function (T, D) {
              var V = T.className,
                F = T.style,
                N = X()(n, c, V)
              return i.createElement('div', { ref: D, className: N, onClick: m, style: Je(Je({}, F), h) }, S)
            })
          )
        })
      qu.displayName = 'MobilePopupInner'
      var Fd = qu,
        Ud = ['visible', 'mobile'],
        es = i.forwardRef(function (e, t) {
          var n = e.visible,
            r = e.mobile,
            a = lu(e, Ud),
            u = (0, i.useState)(n),
            o = St(u, 2),
            c = o[0],
            s = o[1],
            l = (0, i.useState)(!1),
            d = St(l, 2),
            v = d[0],
            m = d[1],
            p = Je(Je({}, a), {}, { visible: c })
          ;(0, i.useEffect)(
            function () {
              s(n), n && r && m(id())
            },
            [n, r],
          )
          var h = v ? i.createElement(Fd, Ht({}, p, { mobile: r, ref: t })) : i.createElement(Hd, Ht({}, p, { ref: t }))
          return i.createElement('div', null, i.createElement(kd, p), h)
        })
      es.displayName = 'Popup'
      var Kd = es,
        Wd = i.createContext(null),
        ts = Wd
      function $o() {}
      function Bd() {
        return ''
      }
      function zd(e) {
        return e ? e.ownerDocument : window.document
      }
      var $d = [
        'onClick',
        'onMouseDown',
        'onTouchStart',
        'onMouseEnter',
        'onMouseLeave',
        'onFocus',
        'onBlur',
        'onContextMenu',
      ]
      function Gd(e) {
        var t = (function (n) {
          Gf(a, n)
          var r = Qf(a)
          function a(u) {
            var o
            zf(this, a),
              (o = r.call(this, u)),
              (o.popupRef = i.createRef()),
              (o.triggerRef = i.createRef()),
              (o.portalContainer = void 0),
              (o.attachId = void 0),
              (o.clickOutsideHandler = void 0),
              (o.touchOutsideHandler = void 0),
              (o.contextMenuOutsideHandler1 = void 0),
              (o.contextMenuOutsideHandler2 = void 0),
              (o.mouseDownTimeout = void 0),
              (o.focusTime = void 0),
              (o.preClickTime = void 0),
              (o.preTouchTime = void 0),
              (o.delayTimer = void 0),
              (o.hasPopupMouseDown = void 0),
              (o.onMouseEnter = function (s) {
                var l = o.props.mouseEnterDelay
                o.fireEvents('onMouseEnter', s), o.delaySetPopupVisible(!0, l, l ? null : s)
              }),
              (o.onMouseMove = function (s) {
                o.fireEvents('onMouseMove', s), o.setPoint(s)
              }),
              (o.onMouseLeave = function (s) {
                o.fireEvents('onMouseLeave', s), o.delaySetPopupVisible(!1, o.props.mouseLeaveDelay)
              }),
              (o.onPopupMouseEnter = function () {
                o.clearDelayTimer()
              }),
              (o.onPopupMouseLeave = function (s) {
                var l
                ;(s.relatedTarget &&
                  !s.relatedTarget.setTimeout &&
                  Ao((l = o.popupRef.current) === null || l === void 0 ? void 0 : l.getElement(), s.relatedTarget)) ||
                  o.delaySetPopupVisible(!1, o.props.mouseLeaveDelay)
              }),
              (o.onFocus = function (s) {
                o.fireEvents('onFocus', s),
                  o.clearDelayTimer(),
                  o.isFocusToShow() && ((o.focusTime = Date.now()), o.delaySetPopupVisible(!0, o.props.focusDelay))
              }),
              (o.onMouseDown = function (s) {
                o.fireEvents('onMouseDown', s), (o.preClickTime = Date.now())
              }),
              (o.onTouchStart = function (s) {
                o.fireEvents('onTouchStart', s), (o.preTouchTime = Date.now())
              }),
              (o.onBlur = function (s) {
                o.fireEvents('onBlur', s),
                  o.clearDelayTimer(),
                  o.isBlurToHide() && o.delaySetPopupVisible(!1, o.props.blurDelay)
              }),
              (o.onContextMenu = function (s) {
                s.preventDefault(), o.fireEvents('onContextMenu', s), o.setPopupVisible(!0, s)
              }),
              (o.onContextMenuClose = function () {
                o.isContextMenuToShow() && o.close()
              }),
              (o.onClick = function (s) {
                if ((o.fireEvents('onClick', s), o.focusTime)) {
                  var l
                  if (
                    (o.preClickTime && o.preTouchTime
                      ? (l = Math.min(o.preClickTime, o.preTouchTime))
                      : o.preClickTime
                      ? (l = o.preClickTime)
                      : o.preTouchTime && (l = o.preTouchTime),
                    Math.abs(l - o.focusTime) < 20)
                  )
                    return
                  o.focusTime = 0
                }
                ;(o.preClickTime = 0),
                  (o.preTouchTime = 0),
                  o.isClickToShow() &&
                    (o.isClickToHide() || o.isBlurToHide()) &&
                    s &&
                    s.preventDefault &&
                    s.preventDefault()
                var d = !o.state.popupVisible
                ;((o.isClickToHide() && !d) || (d && o.isClickToShow())) && o.setPopupVisible(!o.state.popupVisible, s)
              }),
              (o.onPopupMouseDown = function () {
                if (
                  ((o.hasPopupMouseDown = !0),
                  clearTimeout(o.mouseDownTimeout),
                  (o.mouseDownTimeout = window.setTimeout(function () {
                    o.hasPopupMouseDown = !1
                  }, 0)),
                  o.context)
                ) {
                  var s
                  ;(s = o.context).onPopupMouseDown.apply(s, arguments)
                }
              }),
              (o.onDocumentClick = function (s) {
                if (!(o.props.mask && !o.props.maskClosable)) {
                  var l = s.target,
                    d = o.getRootDomNode(),
                    v = o.getPopupDomNode()
                  ;(!Ao(d, l) || o.isContextMenuOnly()) && !Ao(v, l) && !o.hasPopupMouseDown && o.close()
                }
              }),
              (o.getRootDomNode = function () {
                var s = o.props.getTriggerDOMNode
                if (s) return s(o.triggerRef.current)
                try {
                  var l = Zf(o.triggerRef.current)
                  if (l) return l
                } catch (d) {}
                return mt.findDOMNode(du(o))
              }),
              (o.getPopupClassNameFromAlign = function (s) {
                var l = [],
                  d = o.props,
                  v = d.popupPlacement,
                  m = d.builtinPlacements,
                  p = d.prefixCls,
                  h = d.alignPoint,
                  S = d.getPopupClassNameFromAlign
                return v && m && l.push(od(m, p, s, h)), S && l.push(S(s)), l.join(' ')
              }),
              (o.getComponent = function () {
                var s = o.props,
                  l = s.prefixCls,
                  d = s.destroyPopupOnHide,
                  v = s.popupClassName,
                  m = s.onPopupAlign,
                  p = s.popupMotion,
                  h = s.popupAnimation,
                  S = s.popupTransitionName,
                  T = s.popupStyle,
                  D = s.mask,
                  V = s.maskAnimation,
                  F = s.maskTransitionName,
                  N = s.maskMotion,
                  j = s.zIndex,
                  k = s.popup,
                  B = s.stretch,
                  K = s.alignPoint,
                  U = s.mobile,
                  w = s.forceRender,
                  b = s.onPopupClick,
                  _ = o.state,
                  R = _.popupVisible,
                  H = _.point,
                  C = o.getPopupAlign(),
                  Y = {}
                return (
                  o.isMouseEnterToShow() && (Y.onMouseEnter = o.onPopupMouseEnter),
                  o.isMouseLeaveToHide() && (Y.onMouseLeave = o.onPopupMouseLeave),
                  (Y.onMouseDown = o.onPopupMouseDown),
                  (Y.onTouchStart = o.onPopupMouseDown),
                  i.createElement(
                    Kd,
                    Ht(
                      {
                        prefixCls: l,
                        destroyPopupOnHide: d,
                        visible: R,
                        point: K && H,
                        className: v,
                        align: C,
                        onAlign: m,
                        animation: h,
                        getClassNameFromAlign: o.getPopupClassNameFromAlign,
                      },
                      Y,
                      {
                        stretch: B,
                        getRootDomNode: o.getRootDomNode,
                        style: T,
                        mask: D,
                        zIndex: j,
                        transitionName: S,
                        maskAnimation: V,
                        maskTransitionName: F,
                        maskMotion: N,
                        ref: o.popupRef,
                        motion: p,
                        mobile: U,
                        forceRender: w,
                        onClick: b,
                      },
                    ),
                    typeof k == 'function' ? k() : k,
                  )
                )
              }),
              (o.attachParent = function (s) {
                Ft.cancel(o.attachId)
                var l = o.props,
                  d = l.getPopupContainer,
                  v = l.getDocument,
                  m = o.getRootDomNode(),
                  p
                d ? (m || d.length === 0) && (p = d(m)) : (p = v(o.getRootDomNode()).body),
                  p
                    ? p.appendChild(s)
                    : (o.attachId = Ft(function () {
                        o.attachParent(s)
                      }))
              }),
              (o.getContainer = function () {
                if (!o.portalContainer) {
                  var s = o.props.getDocument,
                    l = s(o.getRootDomNode()).createElement('div')
                  ;(l.style.position = 'absolute'),
                    (l.style.top = '0'),
                    (l.style.left = '0'),
                    (l.style.width = '100%'),
                    (o.portalContainer = l)
                }
                return o.attachParent(o.portalContainer), o.portalContainer
              }),
              (o.setPoint = function (s) {
                var l = o.props.alignPoint
                !l || !s || o.setState({ point: { pageX: s.pageX, pageY: s.pageY } })
              }),
              (o.handlePortalUpdate = function () {
                o.state.prevPopupVisible !== o.state.popupVisible &&
                  o.props.afterPopupVisibleChange(o.state.popupVisible)
              }),
              (o.triggerContextValue = { onPopupMouseDown: o.onPopupMouseDown })
            var c
            return (
              'popupVisible' in u ? (c = !!u.popupVisible) : (c = !!u.defaultPopupVisible),
              (o.state = { prevPopupVisible: c, popupVisible: c }),
              $d.forEach(function (s) {
                o['fire'.concat(s)] = function (l) {
                  o.fireEvents(s, l)
                }
              }),
              o
            )
          }
          return (
            $f(
              a,
              [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this.componentDidUpdate()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function () {
                    var o = this.props,
                      c = this.state
                    if (c.popupVisible) {
                      var s
                      !this.clickOutsideHandler &&
                        (this.isClickToHide() || this.isContextMenuToShow()) &&
                        ((s = o.getDocument(this.getRootDomNode())),
                        (this.clickOutsideHandler = Er(s, 'mousedown', this.onDocumentClick))),
                        this.touchOutsideHandler ||
                          ((s = s || o.getDocument(this.getRootDomNode())),
                          (this.touchOutsideHandler = Er(s, 'touchstart', this.onDocumentClick))),
                        !this.contextMenuOutsideHandler1 &&
                          this.isContextMenuToShow() &&
                          ((s = s || o.getDocument(this.getRootDomNode())),
                          (this.contextMenuOutsideHandler1 = Er(s, 'scroll', this.onContextMenuClose))),
                        !this.contextMenuOutsideHandler2 &&
                          this.isContextMenuToShow() &&
                          (this.contextMenuOutsideHandler2 = Er(window, 'blur', this.onContextMenuClose))
                      return
                    }
                    this.clearOutsideHandler()
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.clearDelayTimer(),
                      this.clearOutsideHandler(),
                      clearTimeout(this.mouseDownTimeout),
                      Ft.cancel(this.attachId)
                  },
                },
                {
                  key: 'getPopupDomNode',
                  value: function () {
                    var o
                    return ((o = this.popupRef.current) === null || o === void 0 ? void 0 : o.getElement()) || null
                  },
                },
                {
                  key: 'getPopupAlign',
                  value: function () {
                    var o = this.props,
                      c = o.popupPlacement,
                      s = o.popupAlign,
                      l = o.builtinPlacements
                    return c && l ? rd(l, c, s) : s
                  },
                },
                {
                  key: 'setPopupVisible',
                  value: function (o, c) {
                    var s = this.props.alignPoint,
                      l = this.state.popupVisible
                    this.clearDelayTimer(),
                      l !== o &&
                        ('popupVisible' in this.props || this.setState({ popupVisible: o, prevPopupVisible: l }),
                        this.props.onPopupVisibleChange(o)),
                      s && c && o && this.setPoint(c)
                  },
                },
                {
                  key: 'delaySetPopupVisible',
                  value: function (o, c, s) {
                    var l = this,
                      d = c * 1e3
                    if ((this.clearDelayTimer(), d)) {
                      var v = s ? { pageX: s.pageX, pageY: s.pageY } : null
                      this.delayTimer = window.setTimeout(function () {
                        l.setPopupVisible(o, v), l.clearDelayTimer()
                      }, d)
                    } else this.setPopupVisible(o, s)
                  },
                },
                {
                  key: 'clearDelayTimer',
                  value: function () {
                    this.delayTimer && (clearTimeout(this.delayTimer), (this.delayTimer = null))
                  },
                },
                {
                  key: 'clearOutsideHandler',
                  value: function () {
                    this.clickOutsideHandler && (this.clickOutsideHandler.remove(), (this.clickOutsideHandler = null)),
                      this.contextMenuOutsideHandler1 &&
                        (this.contextMenuOutsideHandler1.remove(), (this.contextMenuOutsideHandler1 = null)),
                      this.contextMenuOutsideHandler2 &&
                        (this.contextMenuOutsideHandler2.remove(), (this.contextMenuOutsideHandler2 = null)),
                      this.touchOutsideHandler && (this.touchOutsideHandler.remove(), (this.touchOutsideHandler = null))
                  },
                },
                {
                  key: 'createTwoChains',
                  value: function (o) {
                    var c = this.props.children.props,
                      s = this.props
                    return c[o] && s[o] ? this['fire'.concat(o)] : c[o] || s[o]
                  },
                },
                {
                  key: 'isClickToShow',
                  value: function () {
                    var o = this.props,
                      c = o.action,
                      s = o.showAction
                    return c.indexOf('click') !== -1 || s.indexOf('click') !== -1
                  },
                },
                {
                  key: 'isContextMenuOnly',
                  value: function () {
                    var o = this.props.action
                    return o === 'contextMenu' || (o.length === 1 && o[0] === 'contextMenu')
                  },
                },
                {
                  key: 'isContextMenuToShow',
                  value: function () {
                    var o = this.props,
                      c = o.action,
                      s = o.showAction
                    return c.indexOf('contextMenu') !== -1 || s.indexOf('contextMenu') !== -1
                  },
                },
                {
                  key: 'isClickToHide',
                  value: function () {
                    var o = this.props,
                      c = o.action,
                      s = o.hideAction
                    return c.indexOf('click') !== -1 || s.indexOf('click') !== -1
                  },
                },
                {
                  key: 'isMouseEnterToShow',
                  value: function () {
                    var o = this.props,
                      c = o.action,
                      s = o.showAction
                    return c.indexOf('hover') !== -1 || s.indexOf('mouseEnter') !== -1
                  },
                },
                {
                  key: 'isMouseLeaveToHide',
                  value: function () {
                    var o = this.props,
                      c = o.action,
                      s = o.hideAction
                    return c.indexOf('hover') !== -1 || s.indexOf('mouseLeave') !== -1
                  },
                },
                {
                  key: 'isFocusToShow',
                  value: function () {
                    var o = this.props,
                      c = o.action,
                      s = o.showAction
                    return c.indexOf('focus') !== -1 || s.indexOf('focus') !== -1
                  },
                },
                {
                  key: 'isBlurToHide',
                  value: function () {
                    var o = this.props,
                      c = o.action,
                      s = o.hideAction
                    return c.indexOf('focus') !== -1 || s.indexOf('blur') !== -1
                  },
                },
                {
                  key: 'forcePopupAlign',
                  value: function () {
                    if (this.state.popupVisible) {
                      var o
                      ;(o = this.popupRef.current) === null || o === void 0 || o.forceAlign()
                    }
                  },
                },
                {
                  key: 'fireEvents',
                  value: function (o, c) {
                    var s = this.props.children.props[o]
                    s && s(c)
                    var l = this.props[o]
                    l && l(c)
                  },
                },
                {
                  key: 'close',
                  value: function () {
                    this.setPopupVisible(!1)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var o = this.state.popupVisible,
                      c = this.props,
                      s = c.children,
                      l = c.forceRender,
                      d = c.alignPoint,
                      v = c.className,
                      m = c.autoDestroy,
                      p = i.Children.only(s),
                      h = { key: 'trigger' }
                    this.isContextMenuToShow()
                      ? (h.onContextMenu = this.onContextMenu)
                      : (h.onContextMenu = this.createTwoChains('onContextMenu')),
                      this.isClickToHide() || this.isClickToShow()
                        ? ((h.onClick = this.onClick),
                          (h.onMouseDown = this.onMouseDown),
                          (h.onTouchStart = this.onTouchStart))
                        : ((h.onClick = this.createTwoChains('onClick')),
                          (h.onMouseDown = this.createTwoChains('onMouseDown')),
                          (h.onTouchStart = this.createTwoChains('onTouchStart'))),
                      this.isMouseEnterToShow()
                        ? ((h.onMouseEnter = this.onMouseEnter), d && (h.onMouseMove = this.onMouseMove))
                        : (h.onMouseEnter = this.createTwoChains('onMouseEnter')),
                      this.isMouseLeaveToHide()
                        ? (h.onMouseLeave = this.onMouseLeave)
                        : (h.onMouseLeave = this.createTwoChains('onMouseLeave')),
                      this.isFocusToShow() || this.isBlurToHide()
                        ? ((h.onFocus = this.onFocus), (h.onBlur = this.onBlur))
                        : ((h.onFocus = this.createTwoChains('onFocus')), (h.onBlur = this.createTwoChains('onBlur')))
                    var S = X()(p && p.props && p.props.className, v)
                    S && (h.className = S)
                    var T = Je({}, h)
                    qf(p) && (T.ref = gu(this.triggerRef, p.ref))
                    var D = i.cloneElement(p, T),
                      V
                    return (
                      (o || this.popupRef.current || l) &&
                        (V = i.createElement(
                          e,
                          { key: 'portal', getContainer: this.getContainer, didUpdate: this.handlePortalUpdate },
                          this.getComponent(),
                        )),
                      !o && m && (V = null),
                      i.createElement(ts.Provider, { value: this.triggerContextValue }, D, V)
                    )
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (o, c) {
                    var s = o.popupVisible,
                      l = {}
                    return (
                      s !== void 0 &&
                        c.popupVisible !== s &&
                        ((l.popupVisible = s), (l.prevPopupVisible = c.popupVisible)),
                      l
                    )
                  },
                },
              ],
            ),
            a
          )
        })(i.Component)
        return (
          (t.contextType = ts),
          (t.defaultProps = {
            prefixCls: 'rc-trigger-popup',
            getPopupClassNameFromAlign: Bd,
            getDocument: zd,
            onPopupVisibleChange: $o,
            afterPopupVisibleChange: $o,
            onPopupAlign: $o,
            popupClassName: '',
            mouseEnterDelay: 0,
            mouseLeaveDelay: 0.1,
            focusDelay: 0,
            blurDelay: 0.15,
            popupStyle: {},
            destroyPopupOnHide: !1,
            popupAlign: {},
            defaultPopupVisible: !1,
            mask: !1,
            maskClosable: !0,
            action: [],
            showAction: [],
            hideAction: [],
            autoDestroy: !1,
          }),
          t
        )
      }
      var Yd = Gd(td),
        hn = { adjustX: 1, adjustY: 1 },
        gn = [0, 0],
        Xd = {
          topLeft: { points: ['bl', 'tl'], overflow: hn, offset: [0, -4], targetOffset: gn },
          topCenter: { points: ['bc', 'tc'], overflow: hn, offset: [0, -4], targetOffset: gn },
          topRight: { points: ['br', 'tr'], overflow: hn, offset: [0, -4], targetOffset: gn },
          bottomLeft: { points: ['tl', 'bl'], overflow: hn, offset: [0, 4], targetOffset: gn },
          bottomCenter: { points: ['tc', 'bc'], overflow: hn, offset: [0, 4], targetOffset: gn },
          bottomRight: { points: ['tr', 'br'], overflow: hn, offset: [0, 4], targetOffset: gn },
        },
        Qd = Xd,
        le = {
          MAC_ENTER: 3,
          BACKSPACE: 8,
          TAB: 9,
          NUM_CENTER: 12,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          PAUSE: 19,
          CAPS_LOCK: 20,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          PRINT_SCREEN: 44,
          INSERT: 45,
          DELETE: 46,
          ZERO: 48,
          ONE: 49,
          TWO: 50,
          THREE: 51,
          FOUR: 52,
          FIVE: 53,
          SIX: 54,
          SEVEN: 55,
          EIGHT: 56,
          NINE: 57,
          QUESTION_MARK: 63,
          A: 65,
          B: 66,
          C: 67,
          D: 68,
          E: 69,
          F: 70,
          G: 71,
          H: 72,
          I: 73,
          J: 74,
          K: 75,
          L: 76,
          M: 77,
          N: 78,
          O: 79,
          P: 80,
          Q: 81,
          R: 82,
          S: 83,
          T: 84,
          U: 85,
          V: 86,
          W: 87,
          X: 88,
          Y: 89,
          Z: 90,
          META: 91,
          WIN_KEY_RIGHT: 92,
          CONTEXT_MENU: 93,
          NUM_ZERO: 96,
          NUM_ONE: 97,
          NUM_TWO: 98,
          NUM_THREE: 99,
          NUM_FOUR: 100,
          NUM_FIVE: 101,
          NUM_SIX: 102,
          NUM_SEVEN: 103,
          NUM_EIGHT: 104,
          NUM_NINE: 105,
          NUM_MULTIPLY: 106,
          NUM_PLUS: 107,
          NUM_MINUS: 109,
          NUM_PERIOD: 110,
          NUM_DIVISION: 111,
          F1: 112,
          F2: 113,
          F3: 114,
          F4: 115,
          F5: 116,
          F6: 117,
          F7: 118,
          F8: 119,
          F9: 120,
          F10: 121,
          F11: 122,
          F12: 123,
          NUMLOCK: 144,
          SEMICOLON: 186,
          DASH: 189,
          EQUALS: 187,
          COMMA: 188,
          PERIOD: 190,
          SLASH: 191,
          APOSTROPHE: 192,
          SINGLE_QUOTE: 222,
          OPEN_SQUARE_BRACKET: 219,
          BACKSLASH: 220,
          CLOSE_SQUARE_BRACKET: 221,
          WIN_KEY: 224,
          MAC_FF_META: 224,
          WIN_IME: 229,
          isTextModifyingKeyEvent: function (t) {
            var n = t.keyCode
            if ((t.altKey && !t.ctrlKey) || t.metaKey || (n >= le.F1 && n <= le.F12)) return !1
            switch (n) {
              case le.ALT:
              case le.CAPS_LOCK:
              case le.CONTEXT_MENU:
              case le.CTRL:
              case le.DOWN:
              case le.END:
              case le.ESC:
              case le.HOME:
              case le.INSERT:
              case le.LEFT:
              case le.MAC_FF_META:
              case le.META:
              case le.NUMLOCK:
              case le.NUM_CENTER:
              case le.PAGE_DOWN:
              case le.PAGE_UP:
              case le.PAUSE:
              case le.PRINT_SCREEN:
              case le.RIGHT:
              case le.SHIFT:
              case le.UP:
              case le.WIN_KEY:
              case le.WIN_KEY_RIGHT:
                return !1
              default:
                return !0
            }
          },
          isCharacterKey: function (t) {
            if (
              (t >= le.ZERO && t <= le.NINE) ||
              (t >= le.NUM_ZERO && t <= le.NUM_MULTIPLY) ||
              (t >= le.A && t <= le.Z) ||
              (window.navigator.userAgent.indexOf('WebKit') !== -1 && t === 0)
            )
              return !0
            switch (t) {
              case le.SPACE:
              case le.QUESTION_MARK:
              case le.NUM_PLUS:
              case le.NUM_MINUS:
              case le.NUM_PERIOD:
              case le.NUM_DIVISION:
              case le.SEMICOLON:
              case le.DASH:
              case le.EQUALS:
              case le.COMMA:
              case le.PERIOD:
              case le.SLASH:
              case le.APOSTROPHE:
              case le.SINGLE_QUOTE:
              case le.OPEN_SQUARE_BRACKET:
              case le.BACKSLASH:
              case le.CLOSE_SQUARE_BRACKET:
                return !0
              default:
                return !1
            }
          },
        },
        ns = le
      function Zd(e) {
        if (Array.isArray(e)) return xo(e)
      }
      function Jd(e) {
        if ((typeof Symbol != 'undefined' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
          return Array.from(e)
      }
      function qd() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function ev(e) {
        return Zd(e) || Jd(e) || cu(e) || qd()
      }
      var tv = function (e) {
        if (!e) return !1
        if (e instanceof HTMLElement && e.offsetParent) return !0
        if (e instanceof SVGGraphicsElement && e.getBBox) {
          var t = e.getBBox(),
            n = t.width,
            r = t.height
          if (n || r) return !0
        }
        if (e instanceof HTMLElement && e.getBoundingClientRect) {
          var a = e.getBoundingClientRect(),
            u = a.width,
            o = a.height
          if (u || o) return !0
        }
        return !1
      }
      function rs(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
        if (tv(e)) {
          var n = e.nodeName.toLowerCase(),
            r =
              ['input', 'select', 'textarea', 'button'].includes(n) ||
              e.isContentEditable ||
              (n === 'a' && !!e.getAttribute('href')),
            a = e.getAttribute('tabindex'),
            u = Number(a),
            o = null
          return (
            a && !Number.isNaN(u) ? (o = u) : r && o === null && (o = 0),
            r && e.disabled && (o = null),
            o !== null && (o >= 0 || (t && o < 0))
          )
        }
        return !1
      }
      function os(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          n = ev(e.querySelectorAll('*')).filter(function (r) {
            return rs(r, t)
          })
        return rs(e, t) && n.unshift(e), n
      }
      var Mr = null
      function Jv() {
        Mr = document.activeElement
      }
      function qv() {
        Mr = null
      }
      function ep() {
        if (Mr)
          try {
            Mr.focus()
          } catch (e) {}
      }
      function tp(e, t) {
        if (t.keyCode === 9) {
          var n = os(e),
            r = n[t.shiftKey ? 0 : n.length - 1],
            a = r === document.activeElement || e === document.activeElement
          if (a) {
            var u = n[t.shiftKey ? n.length - 1 : 0]
            u.focus(), t.preventDefault()
          }
        }
      }
      var nv = ns.ESC,
        rv = ns.TAB
      function ov(e) {
        var t = e.visible,
          n = e.setTriggerVisible,
          r = e.triggerRef,
          a = e.onVisibleChange,
          u = e.autoFocus,
          o = i.useRef(!1),
          c = function () {
            if (t && r.current) {
              var v, m, p, h
              ;(v = r.current) === null ||
                v === void 0 ||
                (m = v.triggerRef) === null ||
                m === void 0 ||
                (p = m.current) === null ||
                p === void 0 ||
                (h = p.focus) === null ||
                h === void 0 ||
                h.call(p),
                n(!1),
                typeof a == 'function' && a(!1)
            }
          },
          s = function () {
            var v,
              m,
              p,
              h,
              S = os(
                (v = r.current) === null ||
                  v === void 0 ||
                  (m = v.popupRef) === null ||
                  m === void 0 ||
                  (p = m.current) === null ||
                  p === void 0 ||
                  (h = p.getElement) === null ||
                  h === void 0
                  ? void 0
                  : h.call(p),
              ),
              T = S[0]
            return (T == null ? void 0 : T.focus) ? (T.focus(), (o.current = !0), !0) : !1
          },
          l = function (v) {
            switch (v.keyCode) {
              case nv:
                c()
                break
              case rv: {
                var m = !1
                o.current || (m = s()), m ? v.preventDefault() : c()
                break
              }
            }
          }
        i.useEffect(
          function () {
            return t
              ? (window.addEventListener('keydown', l),
                u && Ft(s, 3),
                function () {
                  window.removeEventListener('keydown', l), (o.current = !1)
                })
              : function () {
                  o.current = !1
                }
          },
          [t],
        )
      }
      var iv = [
        'arrow',
        'prefixCls',
        'transitionName',
        'animation',
        'align',
        'placement',
        'placements',
        'getPopupContainer',
        'showAction',
        'hideAction',
        'overlayClassName',
        'overlayStyle',
        'visible',
        'trigger',
        'autoFocus',
      ]
      function av(e, t) {
        var n = e.arrow,
          r = n === void 0 ? !1 : n,
          a = e.prefixCls,
          u = a === void 0 ? 'rc-dropdown' : a,
          o = e.transitionName,
          c = e.animation,
          s = e.align,
          l = e.placement,
          d = l === void 0 ? 'bottomLeft' : l,
          v = e.placements,
          m = v === void 0 ? Qd : v,
          p = e.getPopupContainer,
          h = e.showAction,
          S = e.hideAction,
          T = e.overlayClassName,
          D = e.overlayStyle,
          V = e.visible,
          F = e.trigger,
          N = F === void 0 ? ['hover'] : F,
          j = e.autoFocus,
          k = lu(e, iv),
          B = i.useState(),
          K = St(B, 2),
          U = K[0],
          w = K[1],
          b = 'visible' in e ? V : U,
          _ = i.useRef(null)
        i.useImperativeHandle(t, function () {
          return _.current
        }),
          ov({ visible: b, setTriggerVisible: w, triggerRef: _, onVisibleChange: e.onVisibleChange, autoFocus: j })
        var R = function () {
            var $ = e.overlay,
              oe
            return typeof $ == 'function' ? (oe = $()) : (oe = $), oe
          },
          H = function ($) {
            var oe = e.onOverlayClick
            w(!1), oe && oe($)
          },
          C = function ($) {
            var oe = e.onVisibleChange
            w($), typeof oe == 'function' && oe($)
          },
          Y = function () {
            var $ = R()
            return i.createElement(
              i.Fragment,
              null,
              r && i.createElement('div', { className: ''.concat(u, '-arrow') }),
              $,
            )
          },
          q = function () {
            var $ = e.overlay
            return typeof $ == 'function' ? Y : Y()
          },
          ee = function () {
            var $ = e.minOverlayWidthMatchTrigger,
              oe = e.alignPoint
            return 'minOverlayWidthMatchTrigger' in e ? $ : !oe
          },
          J = function () {
            var $ = e.openClassName
            return $ !== void 0 ? $ : ''.concat(u, '-open')
          },
          ae = function () {
            var $ = e.children,
              oe = $.props ? $.props : {},
              te = X()(oe.className, J())
            return b && $ ? i.cloneElement($, { className: te }) : $
          },
          pe = S
        return (
          !pe && N.indexOf('contextMenu') !== -1 && (pe = ['click']),
          i.createElement(
            Yd,
            Je(
              Je({ builtinPlacements: m }, k),
              {},
              {
                prefixCls: u,
                ref: _,
                popupClassName: X()(T, uu({}, ''.concat(u, '-show-arrow'), r)),
                popupStyle: D,
                action: N,
                showAction: h,
                hideAction: pe || [],
                popupPlacement: d,
                popupAlign: s,
                popupTransitionName: o,
                popupAnimation: c,
                popupVisible: b,
                stretch: ee() ? 'minWidth' : '',
                popup: q(),
                onPopupVisibleChange: C,
                onPopupClick: H,
                getPopupContainer: p,
              },
            ),
            ae(),
          )
        )
      }
      var uv = i.forwardRef(av),
        sv = uv
      function cv(e, t) {
        var n = e.prefixCls,
          r = e.editable,
          a = e.locale,
          u = e.style
        return !r || r.showAdd === !1
          ? null
          : i.createElement(
              'button',
              {
                ref: t,
                type: 'button',
                className: ''.concat(n, '-nav-add'),
                style: u,
                'aria-label': (a == null ? void 0 : a.addAriaLabel) || 'Add tab',
                onClick: function (c) {
                  r.onEdit('add', { event: c })
                },
              },
              r.addIcon || '+',
            )
      }
      var is = i.forwardRef(cv)
      function lv(e, t) {
        var n = e.prefixCls,
          r = e.id,
          a = e.tabs,
          u = e.locale,
          o = e.mobile,
          c = e.moreIcon,
          s = c === void 0 ? 'More' : c,
          l = e.moreTransitionName,
          d = e.style,
          v = e.className,
          m = e.editable,
          p = e.tabBarGutter,
          h = e.rtl,
          S = e.removeAriaLabel,
          T = e.onTabClick,
          D = e.getPopupContainer,
          V = e.popupClassName,
          F = (0, i.useState)(!1),
          N = O(F, 2),
          j = N[0],
          k = N[1],
          B = (0, i.useState)(null),
          K = O(B, 2),
          U = K[0],
          w = K[1],
          b = ''.concat(r, '-more-popup'),
          _ = ''.concat(n, '-dropdown'),
          R = U !== null ? ''.concat(b, '-').concat(U) : null,
          H = u == null ? void 0 : u.dropdownAriaLabel
        function C(Z, $) {
          Z.preventDefault(), Z.stopPropagation(), m.onEdit('remove', { key: $, event: Z })
        }
        var Y = i.createElement(
          Ff,
          {
            onClick: function ($) {
              var oe = $.key,
                te = $.domEvent
              T(oe, te), k(!1)
            },
            prefixCls: ''.concat(_, '-menu'),
            id: b,
            tabIndex: -1,
            role: 'listbox',
            'aria-activedescendant': R,
            selectedKeys: [U],
            'aria-label': H !== void 0 ? H : 'expanded dropdown',
          },
          a.map(function (Z) {
            var $ = m && Z.closable !== !1 && !Z.disabled
            return i.createElement(
              Zn,
              {
                key: Z.key,
                id: ''.concat(b, '-').concat(Z.key),
                role: 'option',
                'aria-controls': r && ''.concat(r, '-panel-').concat(Z.key),
                disabled: Z.disabled,
              },
              i.createElement('span', null, Z.tab),
              $ &&
                i.createElement(
                  'button',
                  {
                    type: 'button',
                    'aria-label': S || 'remove',
                    tabIndex: 0,
                    className: ''.concat(_, '-menu-item-remove'),
                    onClick: function (te) {
                      te.stopPropagation(), C(te, Z.key)
                    },
                  },
                  Z.closeIcon || m.removeIcon || '\xD7',
                ),
            )
          }),
        )
        function q(Z) {
          for (
            var $ = a.filter(function (fe) {
                return !fe.disabled
              }),
              oe =
                $.findIndex(function (fe) {
                  return fe.key === U
                }) || 0,
              te = $.length,
              me = 0;
            me < te;
            me += 1
          ) {
            oe = (oe + Z + te) % te
            var Ce = $[oe]
            if (!Ce.disabled) {
              w(Ce.key)
              return
            }
          }
        }
        function ee(Z) {
          var $ = Z.which
          if (!j) {
            ;[Ye.DOWN, Ye.SPACE, Ye.ENTER].includes($) && (k(!0), Z.preventDefault())
            return
          }
          switch ($) {
            case Ye.UP:
              q(-1), Z.preventDefault()
              break
            case Ye.DOWN:
              q(1), Z.preventDefault()
              break
            case Ye.ESC:
              k(!1)
              break
            case Ye.SPACE:
            case Ye.ENTER:
              U !== null && T(U, Z)
              break
          }
        }
        ;(0, i.useEffect)(
          function () {
            var Z = document.getElementById(R)
            Z && Z.scrollIntoView && Z.scrollIntoView(!1)
          },
          [U],
        ),
          (0, i.useEffect)(
            function () {
              j || w(null)
            },
            [j],
          )
        var J = g({}, h ? 'marginRight' : 'marginLeft', p)
        a.length || ((J.visibility = 'hidden'), (J.order = 1))
        var ae = X()(g({}, ''.concat(_, '-rtl'), h)),
          pe = o
            ? null
            : i.createElement(
                sv,
                {
                  prefixCls: _,
                  overlay: Y,
                  trigger: ['hover'],
                  visible: a.length ? j : !1,
                  transitionName: l,
                  onVisibleChange: k,
                  overlayClassName: X()(ae, V),
                  mouseEnterDelay: 0.1,
                  mouseLeaveDelay: 0.1,
                  getPopupContainer: D,
                },
                i.createElement(
                  'button',
                  {
                    type: 'button',
                    className: ''.concat(n, '-nav-more'),
                    style: J,
                    tabIndex: -1,
                    'aria-hidden': 'true',
                    'aria-haspopup': 'listbox',
                    'aria-controls': b,
                    id: ''.concat(r, '-more'),
                    'aria-expanded': j,
                    onKeyDown: ee,
                  },
                  s,
                ),
              )
        return i.createElement(
          'div',
          { className: X()(''.concat(n, '-nav-operations'), v), style: d, ref: t },
          pe,
          i.createElement(is, { prefixCls: n, locale: u, editable: m }),
        )
      }
      var fv = i.memo(i.forwardRef(lv), function (e, t) {
          return t.tabMoving
        }),
        Go = (0, i.createContext)(null),
        dv = 0.1,
        as = 0.01,
        xr = 20,
        us = Math.pow(0.995, xr)
      function vv(e, t) {
        var n = (0, i.useState)(),
          r = O(n, 2),
          a = r[0],
          u = r[1],
          o = (0, i.useState)(0),
          c = O(o, 2),
          s = c[0],
          l = c[1],
          d = (0, i.useState)(0),
          v = O(d, 2),
          m = v[0],
          p = v[1],
          h = (0, i.useState)(),
          S = O(h, 2),
          T = S[0],
          D = S[1],
          V = (0, i.useRef)()
        function F(U) {
          var w = U.touches[0],
            b = w.screenX,
            _ = w.screenY
          u({ x: b, y: _ }), window.clearInterval(V.current)
        }
        function N(U) {
          if (!!a) {
            U.preventDefault()
            var w = U.touches[0],
              b = w.screenX,
              _ = w.screenY
            u({ x: b, y: _ })
            var R = b - a.x,
              H = _ - a.y
            t(R, H)
            var C = Date.now()
            l(C), p(C - s), D({ x: R, y: H })
          }
        }
        function j() {
          if (!!a && (u(null), D(null), T)) {
            var U = T.x / m,
              w = T.y / m,
              b = Math.abs(U),
              _ = Math.abs(w)
            if (Math.max(b, _) < dv) return
            var R = U,
              H = w
            V.current = window.setInterval(function () {
              if (Math.abs(R) < as && Math.abs(H) < as) {
                window.clearInterval(V.current)
                return
              }
              ;(R *= us), (H *= us), t(R * xr, H * xr)
            }, xr)
          }
        }
        var k = (0, i.useRef)()
        function B(U) {
          var w = U.deltaX,
            b = U.deltaY,
            _ = 0,
            R = Math.abs(w),
            H = Math.abs(b)
          R === H
            ? (_ = k.current === 'x' ? w : b)
            : R > H
            ? ((_ = w), (k.current = 'x'))
            : ((_ = b), (k.current = 'y')),
            t(-_, -_) && U.preventDefault()
        }
        var K = (0, i.useRef)(null)
        ;(K.current = { onTouchStart: F, onTouchMove: N, onTouchEnd: j, onWheel: B }),
          i.useEffect(function () {
            function U(R) {
              K.current.onTouchStart(R)
            }
            function w(R) {
              K.current.onTouchMove(R)
            }
            function b(R) {
              K.current.onTouchEnd(R)
            }
            function _(R) {
              K.current.onWheel(R)
            }
            return (
              document.addEventListener('touchmove', w, { passive: !1 }),
              document.addEventListener('touchend', b, { passive: !1 }),
              e.current.addEventListener('touchstart', U, { passive: !1 }),
              e.current.addEventListener('wheel', _),
              function () {
                document.removeEventListener('touchmove', w), document.removeEventListener('touchend', b)
              }
            )
          }, [])
      }
      function pv() {
        var e = (0, i.useRef)(new Map())
        function t(r) {
          return e.current.has(r) || e.current.set(r, i.createRef()), e.current.get(r)
        }
        function n(r) {
          e.current.delete(r)
        }
        return [t, n]
      }
      function ss(e, t) {
        var n = i.useRef(e),
          r = i.useState({}),
          a = O(r, 2),
          u = a[1]
        function o(c) {
          var s = typeof c == 'function' ? c(n.current) : c
          s !== n.current && t(s, n.current), (n.current = s), u({})
        }
        return [n.current, o]
      }
      var cs = function (t) {
        var n = t.position,
          r = t.prefixCls,
          a = t.extra
        if (!a) return null
        var u,
          o = {}
        return (
          a && re(a) === 'object' && !i.isValidElement(a) ? (o = a) : (o.right = a),
          n === 'right' && (u = o.right),
          n === 'left' && (u = o.left),
          u ? i.createElement('div', { className: ''.concat(r, '-extra-content') }, u) : null
        )
      }
      function mv(e, t) {
        var n,
          r = i.useContext(Go),
          a = r.prefixCls,
          u = r.tabs,
          o = e.className,
          c = e.style,
          s = e.id,
          l = e.animated,
          d = e.activeKey,
          v = e.rtl,
          m = e.extra,
          p = e.editable,
          h = e.locale,
          S = e.tabPosition,
          T = e.tabBarGutter,
          D = e.children,
          V = e.onTabClick,
          F = e.onTabScroll,
          N = (0, i.useRef)(),
          j = (0, i.useRef)(),
          k = (0, i.useRef)(),
          B = (0, i.useRef)(),
          K = pv(),
          U = O(K, 2),
          w = U[0],
          b = U[1],
          _ = S === 'top' || S === 'bottom',
          R = ss(0, function (Ie, Ne) {
            _ && F && F({ direction: Ie > Ne ? 'left' : 'right' })
          }),
          H = O(R, 2),
          C = H[0],
          Y = H[1],
          q = ss(0, function (Ie, Ne) {
            !_ && F && F({ direction: Ie > Ne ? 'top' : 'bottom' })
          }),
          ee = O(q, 2),
          J = ee[0],
          ae = ee[1],
          pe = (0, i.useState)(0),
          Z = O(pe, 2),
          $ = Z[0],
          oe = Z[1],
          te = (0, i.useState)(0),
          me = O(te, 2),
          Ce = me[0],
          fe = me[1],
          Re = (0, i.useState)(null),
          _e = O(Re, 2),
          ie = _e[0],
          Ee = _e[1],
          he = (0, i.useState)(null),
          Ae = O(he, 2),
          de = Ae[0],
          je = Ae[1],
          Ue = (0, i.useState)(0),
          W = O(Ue, 2),
          Q = W[0],
          ne = W[1],
          Ut = (0, i.useState)(0),
          et = O(Ut, 2),
          Ot = et[0],
          wt = et[1],
          tt = $s(new Map()),
          At = O(tt, 2),
          _t = At[0],
          nt = At[1],
          ot = Xs(u, _t, $),
          dt = ''.concat(a, '-nav-operations-hidden'),
          it = 0,
          Ke = 0
        _
          ? v
            ? ((it = 0), (Ke = Math.max(0, $ - ie)))
            : ((it = Math.min(0, ie - $)), (Ke = 0))
          : ((it = Math.min(0, de - Ce)), (Ke = 0))
        function gt(Ie) {
          return Ie < it ? it : Ie > Ke ? Ke : Ie
        }
        var yt = (0, i.useRef)(),
          rt = (0, i.useState)(),
          Xe = O(rt, 2),
          Ct = Xe[0],
          Nt = Xe[1]
        function Kt() {
          Nt(Date.now())
        }
        function vt() {
          window.clearTimeout(yt.current)
        }
        vv(N, function (Ie, Ne) {
          function Be(Ze, Lt) {
            Ze(function (en) {
              var Vn = gt(en + Lt)
              return Vn
            })
          }
          if (_) {
            if (ie >= $) return !1
            Be(Y, Ie)
          } else {
            if (de >= Ce) return !1
            Be(ae, Ne)
          }
          return vt(), Kt(), !0
        }),
          (0, i.useEffect)(
            function () {
              return (
                vt(),
                Ct &&
                  (yt.current = window.setTimeout(function () {
                    Nt(0)
                  }, 100)),
                vt
              )
            },
            [Ct],
          )
        function at() {
          var Ie = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d,
            Ne = ot.get(Ie) || { width: 0, height: 0, left: 0, right: 0, top: 0 }
          if (_) {
            var Be = C
            v
              ? Ne.right < C
                ? (Be = Ne.right)
                : Ne.right + Ne.width > C + ie && (Be = Ne.right + Ne.width - ie)
              : Ne.left < -C
              ? (Be = -Ne.left)
              : Ne.left + Ne.width > -C + ie && (Be = -(Ne.left + Ne.width - ie)),
              ae(0),
              Y(gt(Be))
          } else {
            var Ze = J
            Ne.top < -J ? (Ze = -Ne.top) : Ne.top + Ne.height > -J + de && (Ze = -(Ne.top + Ne.height - de)),
              Y(0),
              ae(gt(Ze))
          }
        }
        var Wt = Qs(
            ot,
            { width: ie, height: de, left: C, top: J },
            { width: $, height: Ce },
            { width: Q, height: Ot },
            P(P({}, e), {}, { tabs: u }),
          ),
          It = O(Wt, 2),
          Jt = It[0],
          Bt = It[1],
          be = {}
        S === 'top' || S === 'bottom' ? (be[v ? 'marginRight' : 'marginLeft'] = T) : (be.marginTop = T)
        var Le = u.map(function (Ie, Ne) {
            var Be = Ie.key
            return i.createElement(Ys, {
              id: s,
              prefixCls: a,
              key: Be,
              tab: Ie,
              style: Ne === 0 ? void 0 : be,
              closable: Ie.closable,
              editable: p,
              active: Be === d,
              renderWrapper: D,
              removeAriaLabel: h == null ? void 0 : h.removeAriaLabel,
              ref: w(Be),
              onClick: function (Lt) {
                V(Be, Lt)
              },
              onRemove: function () {
                b(Be)
              },
              onFocus: function () {
                at(Be), Kt(), !!N.current && (v || (N.current.scrollLeft = 0), (N.current.scrollTop = 0))
              },
            })
          }),
          He = hi(function () {
            var Ie,
              Ne,
              Be,
              Ze,
              Lt,
              en,
              Vn = ((Ie = N.current) === null || Ie === void 0 ? void 0 : Ie.offsetWidth) || 0,
              Dr = ((Ne = N.current) === null || Ne === void 0 ? void 0 : Ne.offsetHeight) || 0,
              jr = ((Be = B.current) === null || Be === void 0 ? void 0 : Be.offsetWidth) || 0,
              Vr = ((Ze = B.current) === null || Ze === void 0 ? void 0 : Ze.offsetHeight) || 0
            Ee(Vn), je(Dr), ne(jr), wt(Vr)
            var Jo = (((Lt = j.current) === null || Lt === void 0 ? void 0 : Lt.offsetWidth) || 0) - jr,
              qo = (((en = j.current) === null || en === void 0 ? void 0 : en.offsetHeight) || 0) - Vr
            oe(Jo),
              fe(qo),
              nt(function () {
                var Hr = new Map()
                return (
                  u.forEach(function (ei) {
                    var Ve = ei.key,
                      Oe = w(Ve).current
                    Oe &&
                      Hr.set(Ve, {
                        width: Oe.offsetWidth,
                        height: Oe.offsetHeight,
                        left: Oe.offsetLeft,
                        top: Oe.offsetTop,
                      })
                  }),
                  Hr
                )
              })
          }),
          qe = u.slice(0, Jt),
          ut = u.slice(Bt + 1),
          jn = [].concat(Ge(qe), Ge(ut)),
          Rr = (0, i.useState)(),
          Or = O(Rr, 2),
          Ar = Or[0],
          Zo = Or[1],
          Tt = ot.get(d),
          Nr = (0, i.useRef)()
        function Ir() {
          Fe.cancel(Nr.current)
        }
        ;(0, i.useEffect)(
          function () {
            var Ie = {}
            return (
              Tt &&
                (_
                  ? (v ? (Ie.right = Tt.right) : (Ie.left = Tt.left), (Ie.width = Tt.width))
                  : ((Ie.top = Tt.top), (Ie.height = Tt.height))),
              Ir(),
              (Nr.current = Fe(function () {
                Zo(Ie)
              })),
              Ir
            )
          },
          [Tt, _, v],
        ),
          (0, i.useEffect)(
            function () {
              at()
            },
            [d, Tt, ot, _],
          ),
          (0, i.useEffect)(
            function () {
              He()
            },
            [
              v,
              T,
              d,
              u
                .map(function (Ie) {
                  return Ie.key
                })
                .join('_'),
            ],
          )
        var kr = !!jn.length,
          qt = ''.concat(a, '-nav-wrap'),
          yn,
          kt,
          bn,
          Lr
        return (
          _
            ? v
              ? ((kt = C > 0), (yn = C + ie < $))
              : ((yn = C < 0), (kt = -C + ie < $))
            : ((bn = J < 0), (Lr = -J + de < Ce)),
          i.createElement(
            'div',
            {
              ref: t,
              role: 'tablist',
              className: X()(''.concat(a, '-nav'), o),
              style: c,
              onKeyDown: function () {
                Kt()
              },
            },
            i.createElement(cs, { position: 'left', extra: m, prefixCls: a }),
            i.createElement(
              $n,
              { onResize: He },
              i.createElement(
                'div',
                {
                  className: X()(
                    qt,
                    ((n = {}),
                    g(n, ''.concat(qt, '-ping-left'), yn),
                    g(n, ''.concat(qt, '-ping-right'), kt),
                    g(n, ''.concat(qt, '-ping-top'), bn),
                    g(n, ''.concat(qt, '-ping-bottom'), Lr),
                    n),
                  ),
                  ref: N,
                },
                i.createElement(
                  $n,
                  { onResize: He },
                  i.createElement(
                    'div',
                    {
                      ref: j,
                      className: ''.concat(a, '-nav-list'),
                      style: {
                        transform: 'translate('.concat(C, 'px, ').concat(J, 'px)'),
                        transition: Ct ? 'none' : void 0,
                      },
                    },
                    Le,
                    i.createElement(is, {
                      ref: B,
                      prefixCls: a,
                      locale: h,
                      editable: p,
                      style: P(P({}, Le.length === 0 ? void 0 : be), {}, { visibility: kr ? 'hidden' : null }),
                    }),
                    i.createElement('div', {
                      className: X()(''.concat(a, '-ink-bar'), g({}, ''.concat(a, '-ink-bar-animated'), l.inkBar)),
                      style: Ar,
                    }),
                  ),
                ),
              ),
            ),
            i.createElement(
              fv,
              y({}, e, {
                removeAriaLabel: h == null ? void 0 : h.removeAriaLabel,
                ref: k,
                prefixCls: a,
                tabs: jn,
                className: !kr && dt,
                tabMoving: !!Ct,
              }),
            ),
            i.createElement(cs, { position: 'right', extra: m, prefixCls: a }),
          )
        )
      }
      var ls = i.forwardRef(mv)
      function hv(e) {
        var t = e.id,
          n = e.activeKey,
          r = e.animated,
          a = e.tabPosition,
          u = e.rtl,
          o = e.destroyInactiveTabPane,
          c = i.useContext(Go),
          s = c.prefixCls,
          l = c.tabs,
          d = r.tabPane,
          v = l.findIndex(function (m) {
            return m.key === n
          })
        return i.createElement(
          'div',
          { className: X()(''.concat(s, '-content-holder')) },
          i.createElement(
            'div',
            {
              className: X()(
                ''.concat(s, '-content'),
                ''.concat(s, '-content-').concat(a),
                g({}, ''.concat(s, '-content-animated'), d),
              ),
              style: v && d ? g({}, u ? 'marginRight' : 'marginLeft', '-'.concat(v, '00%')) : null,
            },
            l.map(function (m) {
              return i.cloneElement(m.node, {
                key: m.key,
                prefixCls: s,
                tabKey: m.key,
                id: t,
                animated: d,
                active: m.key === n,
                destroyInactiveTabPane: o,
              })
            }),
          ),
        )
      }
      function fs(e) {
        var t = e.prefixCls,
          n = e.forceRender,
          r = e.className,
          a = e.style,
          u = e.id,
          o = e.active,
          c = e.animated,
          s = e.destroyInactiveTabPane,
          l = e.tabKey,
          d = e.children,
          v = i.useState(n),
          m = O(v, 2),
          p = m[0],
          h = m[1]
        i.useEffect(
          function () {
            o ? h(!0) : s && h(!1)
          },
          [o, s],
        )
        var S = {}
        return (
          o || (c ? ((S.visibility = 'hidden'), (S.height = 0), (S.overflowY = 'hidden')) : (S.display = 'none')),
          i.createElement(
            'div',
            {
              id: u && ''.concat(u, '-panel-').concat(l),
              role: 'tabpanel',
              tabIndex: o ? 0 : -1,
              'aria-labelledby': u && ''.concat(u, '-tab-').concat(l),
              'aria-hidden': !o,
              style: P(P({}, S), a),
              className: X()(''.concat(t, '-tabpane'), o && ''.concat(t, '-tabpane-active'), r),
            },
            (o || p || n) && d,
          )
        )
      }
      var gv = [
          'id',
          'prefixCls',
          'className',
          'children',
          'direction',
          'activeKey',
          'defaultActiveKey',
          'editable',
          'animated',
          'tabPosition',
          'tabBarGutter',
          'tabBarStyle',
          'tabBarExtraContent',
          'locale',
          'moreIcon',
          'moreTransitionName',
          'destroyInactiveTabPane',
          'renderTabBar',
          'onChange',
          'onTabClick',
          'onTabScroll',
          'getPopupContainer',
          'popupClassName',
        ],
        ds = 0
      function yv(e) {
        return ve(e)
          .map(function (t) {
            if (i.isValidElement(t)) {
              var n = t.key !== void 0 ? String(t.key) : void 0
              return P(P({ key: n }, t.props), {}, { node: t })
            }
            return null
          })
          .filter(function (t) {
            return t
          })
      }
      function bv(e, t) {
        var n,
          r = e.id,
          a = e.prefixCls,
          u = a === void 0 ? 'rc-tabs' : a,
          o = e.className,
          c = e.children,
          s = e.direction,
          l = e.activeKey,
          d = e.defaultActiveKey,
          v = e.editable,
          m = e.animated,
          p = m === void 0 ? { inkBar: !0, tabPane: !1 } : m,
          h = e.tabPosition,
          S = h === void 0 ? 'top' : h,
          T = e.tabBarGutter,
          D = e.tabBarStyle,
          V = e.tabBarExtraContent,
          F = e.locale,
          N = e.moreIcon,
          j = e.moreTransitionName,
          k = e.destroyInactiveTabPane,
          B = e.renderTabBar,
          K = e.onChange,
          U = e.onTabClick,
          w = e.onTabScroll,
          b = e.getPopupContainer,
          _ = e.popupClassName,
          R = z(e, gv),
          H = yv(c),
          C = s === 'rtl',
          Y
        p === !1
          ? (Y = { inkBar: !1, tabPane: !1 })
          : p === !0
          ? (Y = { inkBar: !0, tabPane: !0 })
          : (Y = P({ inkBar: !0, tabPane: !1 }, re(p) === 'object' ? p : {}))
        var q = (0, i.useState)(!1),
          ee = O(q, 2),
          J = ee[0],
          ae = ee[1]
        ;(0, i.useEffect)(function () {
          ae(se())
        }, [])
        var pe = $e(
            function () {
              var W
              return (W = H[0]) === null || W === void 0 ? void 0 : W.key
            },
            { value: l, defaultValue: d },
          ),
          Z = O(pe, 2),
          $ = Z[0],
          oe = Z[1],
          te = (0, i.useState)(function () {
            return H.findIndex(function (W) {
              return W.key === $
            })
          }),
          me = O(te, 2),
          Ce = me[0],
          fe = me[1]
        ;(0, i.useEffect)(
          function () {
            var W = H.findIndex(function (ne) {
              return ne.key === $
            })
            if (W === -1) {
              var Q
              ;(W = Math.max(0, Math.min(Ce, H.length - 1))), oe((Q = H[W]) === null || Q === void 0 ? void 0 : Q.key)
            }
            fe(W)
          },
          [
            H.map(function (W) {
              return W.key
            }).join('_'),
            $,
            Ce,
          ],
        )
        var Re = $e(null, { value: r }),
          _e = O(Re, 2),
          ie = _e[0],
          Ee = _e[1],
          he = S
        J && !['left', 'right'].includes(S) && (he = 'top'),
          (0, i.useEffect)(function () {
            r || (Ee('rc-tabs-'.concat(ds)), (ds += 1))
          }, [])
        function Ae(W, Q) {
          U == null || U(W, Q)
          var ne = W !== $
          oe(W), ne && (K == null || K(W))
        }
        var de = { id: ie, activeKey: $, animated: Y, tabPosition: he, rtl: C, mobile: J },
          je,
          Ue = P(
            P({}, de),
            {},
            {
              editable: v,
              locale: F,
              moreIcon: N,
              moreTransitionName: j,
              tabBarGutter: T,
              onTabClick: Ae,
              onTabScroll: w,
              extra: V,
              style: D,
              panes: c,
              getPopupContainer: b,
              popupClassName: _,
            },
          )
        return (
          B ? (je = B(Ue, ls)) : (je = i.createElement(ls, Ue)),
          i.createElement(
            Go.Provider,
            { value: { tabs: H, prefixCls: u } },
            i.createElement(
              'div',
              y(
                {
                  ref: t,
                  id: r,
                  className: X()(
                    u,
                    ''.concat(u, '-').concat(he),
                    ((n = {}),
                    g(n, ''.concat(u, '-mobile'), J),
                    g(n, ''.concat(u, '-editable'), v),
                    g(n, ''.concat(u, '-rtl'), C),
                    n),
                    o,
                  ),
                },
                R,
              ),
              je,
              i.createElement(hv, y({ destroyInactiveTabPane: k }, de, { animated: Y })),
            ),
          )
        )
      }
      var vs = i.forwardRef(bv)
      vs.TabPane = fs
      var Ev = vs,
        Sv = Ev,
        wv = f(35800),
        Yo = f(73602),
        ft = f(36445),
        _v = f(91485),
        np = f(72187)
      function Xo() {
        return (
          (Xo = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
          Xo.apply(this, arguments)
        )
      }
      var Cv = function (e) {
          return i.createElement('div', Xo({ className: '__dumi-default-alert' }, e))
        },
        rp = f(20497)
      function Zt(e, t) {
        return xv(e) || Mv(e, t) || Pv(e, t) || Tv()
      }
      function Tv() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function Pv(e, t) {
        if (!!e) {
          if (typeof e == 'string') return ps(e, t)
          var n = Object.prototype.toString.call(e).slice(8, -1)
          if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
            return Array.from(e)
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ps(e, t)
        }
      }
      function ps(e, t) {
        ;(t == null || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function Mv(e, t) {
        var n = e == null ? null : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator']
        if (n != null) {
          var r = [],
            a = !0,
            u = !1,
            o,
            c
          try {
            for (n = n.call(e); !(a = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); a = !0);
          } catch (s) {
            ;(u = !0), (c = s)
          } finally {
            try {
              !a && n.return != null && n.return()
            } finally {
              if (u) throw c
            }
          }
          return r
        }
      }
      function xv(e) {
        if (Array.isArray(e)) return e
      }
      function Qo(e, t) {
        var n,
          r = (n = e.match(/\.(\w+)$/)) === null || n === void 0 ? void 0 : n[1]
        return r || (r = t.tsx ? 'tsx' : 'jsx'), r
      }
      var Rv = function (t) {
          var n,
            r,
            a,
            u = (0, i.useRef)(),
            o = (0, i.useContext)(ft.context),
            c = o.locale,
            s = (0, ft.useLocaleProps)(c, t),
            l = (0, ft.useDemoUrl)(s.identifier),
            d = s.demoUrl || l,
            v = (Yo.m === null || Yo.m === void 0 ? void 0 : Yo.m.location.hash) === '#'.concat(s.identifier),
            m = Object.keys(s.sources).length === 1,
            p = (0, ft.useCodeSandbox)(
              ((n = s.hideActions) === null || n === void 0 ? void 0 : n.includes('CSB')) ? null : s,
            ),
            h = (0, ft.useRiddle)(
              ((r = s.hideActions) === null || r === void 0 ? void 0 : r.includes('RIDDLE')) ? null : s,
            ),
            S = (0, ft.useMotions)(s.motions || [], u.current),
            T = Zt(S, 2),
            D = T[0],
            V = T[1],
            F = (0, ft.useCopy)(),
            N = Zt(F, 2),
            j = N[0],
            k = N[1],
            B = (0, i.useState)(function () {
              return s.sources._ ? '_' : Object.keys(s.sources)[0]
            }),
            K = Zt(B, 2),
            U = K[0],
            w = K[1],
            b = (0, i.useState)(Qo(U, s.sources[U])),
            _ = Zt(b, 2),
            R = _[0],
            H = _[1],
            C = (0, i.useState)(Boolean(s.defaultShowCode)),
            Y = Zt(C, 2),
            q = Y[0],
            ee = Y[1],
            J = (0, i.useState)(Math.random()),
            ae = Zt(J, 2),
            pe = ae[0],
            Z = ae[1],
            $ = s.sources[U][R] || s.sources[U].content,
            oe = (0, ft.useTSPlaygroundUrl)(c, $),
            te = (0, i.useRef)(),
            me = (0, ft.usePrefersColor)(),
            Ce = Zt(me, 1),
            fe = Ce[0],
            Re = s.actionBarRender,
            _e =
              Re === void 0
                ? function (Ee) {
                    return Ee
                  }
                : Re
          ;(0, i.useEffect)(
            function () {
              Z(Math.random())
            },
            [fe],
          )
          function ie(Ee) {
            w(Ee), H(Qo(Ee, s.sources[Ee]))
          }
          return i.createElement(
            'div',
            {
              style: s.style,
              className: [s.className, '__dumi-default-previewer', v ? '__dumi-default-previewer-target' : '']
                .filter(Boolean)
                .join(' '),
              id: s.identifier,
              'data-debug': s.debug || void 0,
              'data-iframe': s.iframe || void 0,
            },
            s.iframe && i.createElement('div', { className: '__dumi-default-previewer-browser-nav' }),
            i.createElement(
              'div',
              {
                ref: u,
                className: '__dumi-default-previewer-demo',
                style: {
                  transform: s.transform ? 'translate(0, 0)' : void 0,
                  padding: s.compact || (s.iframe && s.compact !== !1) ? '0' : void 0,
                  background: s.background,
                },
              },
              s.iframe
                ? i.createElement('iframe', {
                    title: 'dumi-previewer',
                    style: { height: String(s.iframe).replace(/(\d)$/, '$1px') },
                    key: pe,
                    src: d,
                    ref: te,
                  })
                : i.createElement(
                    wv.ErrorBoundary,
                    {
                      fallbackRender: function (he) {
                        var Ae = he.error
                        return i.createElement(
                          Cv,
                          { type: 'error' },
                          i.createElement('h4', null, Ae.message || 'This demo has been crashed.'),
                          Ae.stack &&
                            i.createElement(
                              'details',
                              null,
                              i.createElement('summary', null, 'Error stack'),
                              i.createElement('pre', null, Ae.stack),
                            ),
                        )
                      },
                    },
                    s.children,
                  ),
            ),
            i.createElement(
              'div',
              { className: '__dumi-default-previewer-desc', 'data-title': s.title },
              s.title && i.createElement(ft.AnchorLink, { to: '#'.concat(s.identifier) }, s.title),
              s.description && i.createElement('div', { dangerouslySetInnerHTML: { __html: s.description } }),
            ),
            i.createElement(
              'div',
              { className: '__dumi-default-previewer-actions' },
              _e(
                i.createElement(
                  i.Fragment,
                  null,
                  p &&
                    i.createElement('button', {
                      title: 'Open demo on CodeSandbox.io',
                      className: '__dumi-default-icon',
                      role: 'codesandbox',
                      onClick: p,
                    }),
                  h &&
                    i.createElement('button', {
                      title: 'Open demo on Riddle',
                      className: '__dumi-default-icon',
                      role: 'riddle',
                      onClick: h,
                    }),
                  s.motions &&
                    i.createElement('button', {
                      title: 'Execute motions',
                      className: '__dumi-default-icon',
                      role: 'motions',
                      disabled: V,
                      onClick: function () {
                        return D()
                      },
                    }),
                  s.iframe &&
                    i.createElement('button', {
                      title: 'Reload demo iframe page',
                      className: '__dumi-default-icon',
                      role: 'refresh',
                      onClick: function () {
                        return Z(Math.random())
                      },
                    }),
                  !((a = s.hideActions) === null || a === void 0 ? void 0 : a.includes('EXTERNAL')) &&
                    i.createElement(
                      ft.Link,
                      { target: '_blank', to: d },
                      i.createElement('button', {
                        title: 'Open demo in new tab',
                        className: '__dumi-default-icon',
                        role: 'open-demo',
                        type: 'button',
                      }),
                    ),
                  i.createElement('span', null),
                  i.createElement('button', {
                    title: 'Copy source code',
                    className: '__dumi-default-icon',
                    role: 'copy',
                    'data-status': k,
                    onClick: function () {
                      return j($)
                    },
                  }),
                  R === 'tsx' &&
                    q &&
                    i.createElement(
                      ft.Link,
                      { target: '_blank', to: oe },
                      i.createElement('button', {
                        title: 'Get JSX via TypeScript Playground',
                        className: '__dumi-default-icon',
                        role: 'change-tsx',
                        type: 'button',
                      }),
                    ),
                  i.createElement('button', {
                    title: 'Toggle source code panel',
                    className: '__dumi-default-icon'.concat(q ? ' __dumi-default-btn-expand' : ''),
                    role: 'source',
                    type: 'button',
                    onClick: function () {
                      return ee(!q)
                    },
                  }),
                ),
              ),
            ),
            q &&
              i.createElement(
                'div',
                { className: '__dumi-default-previewer-source-wrapper' },
                !m &&
                  i.createElement(
                    Sv,
                    {
                      className: '__dumi-default-previewer-source-tab',
                      prefixCls: '__dumi-default-tabs',
                      moreIcon: '\xB7\xB7\xB7',
                      defaultActiveKey: U,
                      onChange: ie,
                    },
                    Object.keys(s.sources).map(function (Ee) {
                      return i.createElement(fs, {
                        tab: Ee === '_' ? 'index.'.concat(Qo(Ee, s.sources[Ee])) : Ee,
                        key: Ee,
                      })
                    }),
                  ),
                i.createElement(
                  'div',
                  { className: '__dumi-default-previewer-source' },
                  i.createElement(_v.Z, { code: $, lang: R, showCopy: !1 }),
                ),
              ),
          )
        },
        Ov = Rv
    },
    18552: function (E, x, f) {
      var i = f(10852),
        y = f(55639),
        g = i(y, 'DataView')
      E.exports = g
    },
    1989: function (E, x, f) {
      var i = f(51789),
        y = f(80401),
        g = f(57667),
        M = f(21327),
        I = f(81866)
      function A(L) {
        var G = -1,
          O = L == null ? 0 : L.length
        for (this.clear(); ++G < O; ) {
          var re = L[G]
          this.set(re[0], re[1])
        }
      }
      ;(A.prototype.clear = i),
        (A.prototype.delete = y),
        (A.prototype.get = g),
        (A.prototype.has = M),
        (A.prototype.set = I),
        (E.exports = A)
    },
    38407: function (E, x, f) {
      var i = f(27040),
        y = f(14125),
        g = f(82117),
        M = f(67518),
        I = f(54705)
      function A(L) {
        var G = -1,
          O = L == null ? 0 : L.length
        for (this.clear(); ++G < O; ) {
          var re = L[G]
          this.set(re[0], re[1])
        }
      }
      ;(A.prototype.clear = i),
        (A.prototype.delete = y),
        (A.prototype.get = g),
        (A.prototype.has = M),
        (A.prototype.set = I),
        (E.exports = A)
    },
    57071: function (E, x, f) {
      var i = f(10852),
        y = f(55639),
        g = i(y, 'Map')
      E.exports = g
    },
    83369: function (E, x, f) {
      var i = f(24785),
        y = f(11285),
        g = f(96e3),
        M = f(49916),
        I = f(95265)
      function A(L) {
        var G = -1,
          O = L == null ? 0 : L.length
        for (this.clear(); ++G < O; ) {
          var re = L[G]
          this.set(re[0], re[1])
        }
      }
      ;(A.prototype.clear = i),
        (A.prototype.delete = y),
        (A.prototype.get = g),
        (A.prototype.has = M),
        (A.prototype.set = I),
        (E.exports = A)
    },
    53818: function (E, x, f) {
      var i = f(10852),
        y = f(55639),
        g = i(y, 'Promise')
      E.exports = g
    },
    58525: function (E, x, f) {
      var i = f(10852),
        y = f(55639),
        g = i(y, 'Set')
      E.exports = g
    },
    88668: function (E, x, f) {
      var i = f(83369),
        y = f(90619),
        g = f(72385)
      function M(I) {
        var A = -1,
          L = I == null ? 0 : I.length
        for (this.__data__ = new i(); ++A < L; ) this.add(I[A])
      }
      ;(M.prototype.add = M.prototype.push = y), (M.prototype.has = g), (E.exports = M)
    },
    46384: function (E, x, f) {
      var i = f(38407),
        y = f(37465),
        g = f(63779),
        M = f(67599),
        I = f(44758),
        A = f(34309)
      function L(G) {
        var O = (this.__data__ = new i(G))
        this.size = O.size
      }
      ;(L.prototype.clear = y),
        (L.prototype.delete = g),
        (L.prototype.get = M),
        (L.prototype.has = I),
        (L.prototype.set = A),
        (E.exports = L)
    },
    62705: function (E, x, f) {
      var i = f(55639),
        y = i.Symbol
      E.exports = y
    },
    11149: function (E, x, f) {
      var i = f(55639),
        y = i.Uint8Array
      E.exports = y
    },
    70577: function (E, x, f) {
      var i = f(10852),
        y = f(55639),
        g = i(y, 'WeakMap')
      E.exports = g
    },
    34963: function (E) {
      function x(f, i) {
        for (var y = -1, g = f == null ? 0 : f.length, M = 0, I = []; ++y < g; ) {
          var A = f[y]
          i(A, y, f) && (I[M++] = A)
        }
        return I
      }
      E.exports = x
    },
    14636: function (E, x, f) {
      var i = f(22545),
        y = f(35694),
        g = f(1469),
        M = f(44144),
        I = f(65776),
        A = f(36719),
        L = Object.prototype,
        G = L.hasOwnProperty
      function O(re, Te) {
        var z = g(re),
          ue = !z && y(re),
          P = !z && !ue && M(re),
          Se = !z && !ue && !P && A(re),
          X = z || ue || P || Se,
          ge = X ? i(re.length, String) : [],
          ve = ge.length
        for (var se in re)
          (Te || G.call(re, se)) &&
            !(
              X &&
              (se == 'length' ||
                (P && (se == 'offset' || se == 'parent')) ||
                (Se && (se == 'buffer' || se == 'byteLength' || se == 'byteOffset')) ||
                I(se, ve))
            ) &&
            ge.push(se)
        return ge
      }
      E.exports = O
    },
    62488: function (E) {
      function x(f, i) {
        for (var y = -1, g = i.length, M = f.length; ++y < g; ) f[M + y] = i[y]
        return f
      }
      E.exports = x
    },
    82908: function (E) {
      function x(f, i) {
        for (var y = -1, g = f == null ? 0 : f.length; ++y < g; ) if (i(f[y], y, f)) return !0
        return !1
      }
      E.exports = x
    },
    18470: function (E, x, f) {
      var i = f(77813)
      function y(g, M) {
        for (var I = g.length; I--; ) if (i(g[I][0], M)) return I
        return -1
      }
      E.exports = y
    },
    68866: function (E, x, f) {
      var i = f(62488),
        y = f(1469)
      function g(M, I, A) {
        var L = I(M)
        return y(M) ? L : i(L, A(M))
      }
      E.exports = g
    },
    44239: function (E, x, f) {
      var i = f(62705),
        y = f(89607),
        g = f(2333),
        M = '[object Null]',
        I = '[object Undefined]',
        A = i ? i.toStringTag : void 0
      function L(G) {
        return G == null ? (G === void 0 ? I : M) : A && A in Object(G) ? y(G) : g(G)
      }
      E.exports = L
    },
    9454: function (E, x, f) {
      var i = f(44239),
        y = f(37005),
        g = '[object Arguments]'
      function M(I) {
        return y(I) && i(I) == g
      }
      E.exports = M
    },
    90939: function (E, x, f) {
      var i = f(2492),
        y = f(37005)
      function g(M, I, A, L, G) {
        return M === I ? !0 : M == null || I == null || (!y(M) && !y(I)) ? M !== M && I !== I : i(M, I, A, L, g, G)
      }
      E.exports = g
    },
    2492: function (E, x, f) {
      var i = f(46384),
        y = f(67114),
        g = f(18351),
        M = f(16096),
        I = f(64160),
        A = f(1469),
        L = f(44144),
        G = f(36719),
        O = 1,
        re = '[object Arguments]',
        Te = '[object Array]',
        z = '[object Object]',
        ue = Object.prototype,
        P = ue.hasOwnProperty
      function Se(X, ge, ve, se, ke, we) {
        var De = A(X),
          Pe = A(ge),
          Me = De ? Te : I(X),
          Qe = Pe ? Te : I(ge)
        ;(Me = Me == re ? z : Me), (Qe = Qe == re ? z : Qe)
        var $e = Me == z,
          ct = Qe == z,
          xe = Me == Qe
        if (xe && L(X)) {
          if (!L(ge)) return !1
          ;(De = !0), ($e = !1)
        }
        if (xe && !$e) return we || (we = new i()), De || G(X) ? y(X, ge, ve, se, ke, we) : g(X, ge, Me, ve, se, ke, we)
        if (!(ve & O)) {
          var pt = $e && P.call(X, '__wrapped__'),
            Ge = ct && P.call(ge, '__wrapped__')
          if (pt || Ge) {
            var nn = pt ? X.value() : X,
              zt = Ge ? ge.value() : ge
            return we || (we = new i()), ke(nn, zt, ve, se, we)
          }
        }
        return xe ? (we || (we = new i()), M(X, ge, ve, se, ke, we)) : !1
      }
      E.exports = Se
    },
    28458: function (E, x, f) {
      var i = f(23560),
        y = f(15346),
        g = f(13218),
        M = f(80346),
        I = /[\\^$.*+?()[\]{}|]/g,
        A = /^\[object .+?Constructor\]$/,
        L = Function.prototype,
        G = Object.prototype,
        O = L.toString,
        re = G.hasOwnProperty,
        Te = RegExp(
          '^' +
            O.call(re)
              .replace(I, '\\$&')
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$',
        )
      function z(ue) {
        if (!g(ue) || y(ue)) return !1
        var P = i(ue) ? Te : A
        return P.test(M(ue))
      }
      E.exports = z
    },
    38749: function (E, x, f) {
      var i = f(44239),
        y = f(41780),
        g = f(37005),
        M = '[object Arguments]',
        I = '[object Array]',
        A = '[object Boolean]',
        L = '[object Date]',
        G = '[object Error]',
        O = '[object Function]',
        re = '[object Map]',
        Te = '[object Number]',
        z = '[object Object]',
        ue = '[object RegExp]',
        P = '[object Set]',
        Se = '[object String]',
        X = '[object WeakMap]',
        ge = '[object ArrayBuffer]',
        ve = '[object DataView]',
        se = '[object Float32Array]',
        ke = '[object Float64Array]',
        we = '[object Int8Array]',
        De = '[object Int16Array]',
        Pe = '[object Int32Array]',
        Me = '[object Uint8Array]',
        Qe = '[object Uint8ClampedArray]',
        $e = '[object Uint16Array]',
        ct = '[object Uint32Array]',
        xe = {}
      ;(xe[se] = xe[ke] = xe[we] = xe[De] = xe[Pe] = xe[Me] = xe[Qe] = xe[$e] = xe[ct] = !0),
        (xe[M] =
          xe[I] =
          xe[ge] =
          xe[A] =
          xe[ve] =
          xe[L] =
          xe[G] =
          xe[O] =
          xe[re] =
          xe[Te] =
          xe[z] =
          xe[ue] =
          xe[P] =
          xe[Se] =
          xe[X] =
            !1)
      function pt(Ge) {
        return g(Ge) && y(Ge.length) && !!xe[i(Ge)]
      }
      E.exports = pt
    },
    280: function (E, x, f) {
      var i = f(25726),
        y = f(86916),
        g = Object.prototype,
        M = g.hasOwnProperty
      function I(A) {
        if (!i(A)) return y(A)
        var L = []
        for (var G in Object(A)) M.call(A, G) && G != 'constructor' && L.push(G)
        return L
      }
      E.exports = I
    },
    22545: function (E) {
      function x(f, i) {
        for (var y = -1, g = Array(f); ++y < f; ) g[y] = i(y)
        return g
      }
      E.exports = x
    },
    7518: function (E) {
      function x(f) {
        return function (i) {
          return f(i)
        }
      }
      E.exports = x
    },
    74757: function (E) {
      function x(f, i) {
        return f.has(i)
      }
      E.exports = x
    },
    14429: function (E, x, f) {
      var i = f(55639),
        y = i['__core-js_shared__']
      E.exports = y
    },
    67114: function (E, x, f) {
      var i = f(88668),
        y = f(82908),
        g = f(74757),
        M = 1,
        I = 2
      function A(L, G, O, re, Te, z) {
        var ue = O & M,
          P = L.length,
          Se = G.length
        if (P != Se && !(ue && Se > P)) return !1
        var X = z.get(L),
          ge = z.get(G)
        if (X && ge) return X == G && ge == L
        var ve = -1,
          se = !0,
          ke = O & I ? new i() : void 0
        for (z.set(L, G), z.set(G, L); ++ve < P; ) {
          var we = L[ve],
            De = G[ve]
          if (re) var Pe = ue ? re(De, we, ve, G, L, z) : re(we, De, ve, L, G, z)
          if (Pe !== void 0) {
            if (Pe) continue
            se = !1
            break
          }
          if (ke) {
            if (
              !y(G, function (Me, Qe) {
                if (!g(ke, Qe) && (we === Me || Te(we, Me, O, re, z))) return ke.push(Qe)
              })
            ) {
              se = !1
              break
            }
          } else if (!(we === De || Te(we, De, O, re, z))) {
            se = !1
            break
          }
        }
        return z.delete(L), z.delete(G), se
      }
      E.exports = A
    },
    18351: function (E, x, f) {
      var i = f(62705),
        y = f(11149),
        g = f(77813),
        M = f(67114),
        I = f(68776),
        A = f(21814),
        L = 1,
        G = 2,
        O = '[object Boolean]',
        re = '[object Date]',
        Te = '[object Error]',
        z = '[object Map]',
        ue = '[object Number]',
        P = '[object RegExp]',
        Se = '[object Set]',
        X = '[object String]',
        ge = '[object Symbol]',
        ve = '[object ArrayBuffer]',
        se = '[object DataView]',
        ke = i ? i.prototype : void 0,
        we = ke ? ke.valueOf : void 0
      function De(Pe, Me, Qe, $e, ct, xe, pt) {
        switch (Qe) {
          case se:
            if (Pe.byteLength != Me.byteLength || Pe.byteOffset != Me.byteOffset) return !1
            ;(Pe = Pe.buffer), (Me = Me.buffer)
          case ve:
            return !(Pe.byteLength != Me.byteLength || !xe(new y(Pe), new y(Me)))
          case O:
          case re:
          case ue:
            return g(+Pe, +Me)
          case Te:
            return Pe.name == Me.name && Pe.message == Me.message
          case P:
          case X:
            return Pe == Me + ''
          case z:
            var Ge = I
          case Se:
            var nn = $e & L
            if ((Ge || (Ge = A), Pe.size != Me.size && !nn)) return !1
            var zt = pt.get(Pe)
            if (zt) return zt == Me
            ;($e |= G), pt.set(Pe, Me)
            var Fn = M(Ge(Pe), Ge(Me), $e, ct, xe, pt)
            return pt.delete(Pe), Fn
          case ge:
            if (we) return we.call(Pe) == we.call(Me)
        }
        return !1
      }
      E.exports = De
    },
    16096: function (E, x, f) {
      var i = f(58234),
        y = 1,
        g = Object.prototype,
        M = g.hasOwnProperty
      function I(A, L, G, O, re, Te) {
        var z = G & y,
          ue = i(A),
          P = ue.length,
          Se = i(L),
          X = Se.length
        if (P != X && !z) return !1
        for (var ge = P; ge--; ) {
          var ve = ue[ge]
          if (!(z ? ve in L : M.call(L, ve))) return !1
        }
        var se = Te.get(A),
          ke = Te.get(L)
        if (se && ke) return se == L && ke == A
        var we = !0
        Te.set(A, L), Te.set(L, A)
        for (var De = z; ++ge < P; ) {
          ve = ue[ge]
          var Pe = A[ve],
            Me = L[ve]
          if (O) var Qe = z ? O(Me, Pe, ve, L, A, Te) : O(Pe, Me, ve, A, L, Te)
          if (!(Qe === void 0 ? Pe === Me || re(Pe, Me, G, O, Te) : Qe)) {
            we = !1
            break
          }
          De || (De = ve == 'constructor')
        }
        if (we && !De) {
          var $e = A.constructor,
            ct = L.constructor
          $e != ct &&
            'constructor' in A &&
            'constructor' in L &&
            !(typeof $e == 'function' && $e instanceof $e && typeof ct == 'function' && ct instanceof ct) &&
            (we = !1)
        }
        return Te.delete(A), Te.delete(L), we
      }
      E.exports = I
    },
    31957: function (E, x, f) {
      var i = typeof f.g == 'object' && f.g && f.g.Object === Object && f.g
      E.exports = i
    },
    58234: function (E, x, f) {
      var i = f(68866),
        y = f(99551),
        g = f(3674)
      function M(I) {
        return i(I, g, y)
      }
      E.exports = M
    },
    45050: function (E, x, f) {
      var i = f(37019)
      function y(g, M) {
        var I = g.__data__
        return i(M) ? I[typeof M == 'string' ? 'string' : 'hash'] : I.map
      }
      E.exports = y
    },
    10852: function (E, x, f) {
      var i = f(28458),
        y = f(47801)
      function g(M, I) {
        var A = y(M, I)
        return i(A) ? A : void 0
      }
      E.exports = g
    },
    89607: function (E, x, f) {
      var i = f(62705),
        y = Object.prototype,
        g = y.hasOwnProperty,
        M = y.toString,
        I = i ? i.toStringTag : void 0
      function A(L) {
        var G = g.call(L, I),
          O = L[I]
        try {
          L[I] = void 0
          var re = !0
        } catch (z) {}
        var Te = M.call(L)
        return re && (G ? (L[I] = O) : delete L[I]), Te
      }
      E.exports = A
    },
    99551: function (E, x, f) {
      var i = f(34963),
        y = f(70479),
        g = Object.prototype,
        M = g.propertyIsEnumerable,
        I = Object.getOwnPropertySymbols,
        A = I
          ? function (L) {
              return L == null
                ? []
                : ((L = Object(L)),
                  i(I(L), function (G) {
                    return M.call(L, G)
                  }))
            }
          : y
      E.exports = A
    },
    64160: function (E, x, f) {
      var i = f(18552),
        y = f(57071),
        g = f(53818),
        M = f(58525),
        I = f(70577),
        A = f(44239),
        L = f(80346),
        G = '[object Map]',
        O = '[object Object]',
        re = '[object Promise]',
        Te = '[object Set]',
        z = '[object WeakMap]',
        ue = '[object DataView]',
        P = L(i),
        Se = L(y),
        X = L(g),
        ge = L(M),
        ve = L(I),
        se = A
      ;((i && se(new i(new ArrayBuffer(1))) != ue) ||
        (y && se(new y()) != G) ||
        (g && se(g.resolve()) != re) ||
        (M && se(new M()) != Te) ||
        (I && se(new I()) != z)) &&
        (se = function (ke) {
          var we = A(ke),
            De = we == O ? ke.constructor : void 0,
            Pe = De ? L(De) : ''
          if (Pe)
            switch (Pe) {
              case P:
                return ue
              case Se:
                return G
              case X:
                return re
              case ge:
                return Te
              case ve:
                return z
            }
          return we
        }),
        (E.exports = se)
    },
    47801: function (E) {
      function x(f, i) {
        return f == null ? void 0 : f[i]
      }
      E.exports = x
    },
    51789: function (E, x, f) {
      var i = f(94536)
      function y() {
        ;(this.__data__ = i ? i(null) : {}), (this.size = 0)
      }
      E.exports = y
    },
    80401: function (E) {
      function x(f) {
        var i = this.has(f) && delete this.__data__[f]
        return (this.size -= i ? 1 : 0), i
      }
      E.exports = x
    },
    57667: function (E, x, f) {
      var i = f(94536),
        y = '__lodash_hash_undefined__',
        g = Object.prototype,
        M = g.hasOwnProperty
      function I(A) {
        var L = this.__data__
        if (i) {
          var G = L[A]
          return G === y ? void 0 : G
        }
        return M.call(L, A) ? L[A] : void 0
      }
      E.exports = I
    },
    21327: function (E, x, f) {
      var i = f(94536),
        y = Object.prototype,
        g = y.hasOwnProperty
      function M(I) {
        var A = this.__data__
        return i ? A[I] !== void 0 : g.call(A, I)
      }
      E.exports = M
    },
    81866: function (E, x, f) {
      var i = f(94536),
        y = '__lodash_hash_undefined__'
      function g(M, I) {
        var A = this.__data__
        return (this.size += this.has(M) ? 0 : 1), (A[M] = i && I === void 0 ? y : I), this
      }
      E.exports = g
    },
    65776: function (E) {
      var x = 9007199254740991,
        f = /^(?:0|[1-9]\d*)$/
      function i(y, g) {
        var M = typeof y
        return (
          (g = g == null ? x : g),
          !!g && (M == 'number' || (M != 'symbol' && f.test(y))) && y > -1 && y % 1 == 0 && y < g
        )
      }
      E.exports = i
    },
    37019: function (E) {
      function x(f) {
        var i = typeof f
        return i == 'string' || i == 'number' || i == 'symbol' || i == 'boolean' ? f !== '__proto__' : f === null
      }
      E.exports = x
    },
    15346: function (E, x, f) {
      var i = f(14429),
        y = (function () {
          var M = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || '')
          return M ? 'Symbol(src)_1.' + M : ''
        })()
      function g(M) {
        return !!y && y in M
      }
      E.exports = g
    },
    25726: function (E) {
      var x = Object.prototype
      function f(i) {
        var y = i && i.constructor,
          g = (typeof y == 'function' && y.prototype) || x
        return i === g
      }
      E.exports = f
    },
    27040: function (E) {
      function x() {
        ;(this.__data__ = []), (this.size = 0)
      }
      E.exports = x
    },
    14125: function (E, x, f) {
      var i = f(18470),
        y = Array.prototype,
        g = y.splice
      function M(I) {
        var A = this.__data__,
          L = i(A, I)
        if (L < 0) return !1
        var G = A.length - 1
        return L == G ? A.pop() : g.call(A, L, 1), --this.size, !0
      }
      E.exports = M
    },
    82117: function (E, x, f) {
      var i = f(18470)
      function y(g) {
        var M = this.__data__,
          I = i(M, g)
        return I < 0 ? void 0 : M[I][1]
      }
      E.exports = y
    },
    67518: function (E, x, f) {
      var i = f(18470)
      function y(g) {
        return i(this.__data__, g) > -1
      }
      E.exports = y
    },
    54705: function (E, x, f) {
      var i = f(18470)
      function y(g, M) {
        var I = this.__data__,
          A = i(I, g)
        return A < 0 ? (++this.size, I.push([g, M])) : (I[A][1] = M), this
      }
      E.exports = y
    },
    24785: function (E, x, f) {
      var i = f(1989),
        y = f(38407),
        g = f(57071)
      function M() {
        ;(this.size = 0), (this.__data__ = { hash: new i(), map: new (g || y)(), string: new i() })
      }
      E.exports = M
    },
    11285: function (E, x, f) {
      var i = f(45050)
      function y(g) {
        var M = i(this, g).delete(g)
        return (this.size -= M ? 1 : 0), M
      }
      E.exports = y
    },
    96e3: function (E, x, f) {
      var i = f(45050)
      function y(g) {
        return i(this, g).get(g)
      }
      E.exports = y
    },
    49916: function (E, x, f) {
      var i = f(45050)
      function y(g) {
        return i(this, g).has(g)
      }
      E.exports = y
    },
    95265: function (E, x, f) {
      var i = f(45050)
      function y(g, M) {
        var I = i(this, g),
          A = I.size
        return I.set(g, M), (this.size += I.size == A ? 0 : 1), this
      }
      E.exports = y
    },
    68776: function (E) {
      function x(f) {
        var i = -1,
          y = Array(f.size)
        return (
          f.forEach(function (g, M) {
            y[++i] = [M, g]
          }),
          y
        )
      }
      E.exports = x
    },
    94536: function (E, x, f) {
      var i = f(10852),
        y = i(Object, 'create')
      E.exports = y
    },
    86916: function (E, x, f) {
      var i = f(5569),
        y = i(Object.keys, Object)
      E.exports = y
    },
    31167: function (E, x, f) {
      E = f.nmd(E)
      var i = f(31957),
        y = x && !x.nodeType && x,
        g = y && !0 && E && !E.nodeType && E,
        M = g && g.exports === y,
        I = M && i.process,
        A = (function () {
          try {
            var L = g && g.require && g.require('util').types
            return L || (I && I.binding && I.binding('util'))
          } catch (G) {}
        })()
      E.exports = A
    },
    2333: function (E) {
      var x = Object.prototype,
        f = x.toString
      function i(y) {
        return f.call(y)
      }
      E.exports = i
    },
    5569: function (E) {
      function x(f, i) {
        return function (y) {
          return f(i(y))
        }
      }
      E.exports = x
    },
    55639: function (E, x, f) {
      var i = f(31957),
        y = typeof self == 'object' && self && self.Object === Object && self,
        g = i || y || Function('return this')()
      E.exports = g
    },
    90619: function (E) {
      var x = '__lodash_hash_undefined__'
      function f(i) {
        return this.__data__.set(i, x), this
      }
      E.exports = f
    },
    72385: function (E) {
      function x(f) {
        return this.__data__.has(f)
      }
      E.exports = x
    },
    21814: function (E) {
      function x(f) {
        var i = -1,
          y = Array(f.size)
        return (
          f.forEach(function (g) {
            y[++i] = g
          }),
          y
        )
      }
      E.exports = x
    },
    37465: function (E, x, f) {
      var i = f(38407)
      function y() {
        ;(this.__data__ = new i()), (this.size = 0)
      }
      E.exports = y
    },
    63779: function (E) {
      function x(f) {
        var i = this.__data__,
          y = i.delete(f)
        return (this.size = i.size), y
      }
      E.exports = x
    },
    67599: function (E) {
      function x(f) {
        return this.__data__.get(f)
      }
      E.exports = x
    },
    44758: function (E) {
      function x(f) {
        return this.__data__.has(f)
      }
      E.exports = x
    },
    34309: function (E, x, f) {
      var i = f(38407),
        y = f(57071),
        g = f(83369),
        M = 200
      function I(A, L) {
        var G = this.__data__
        if (G instanceof i) {
          var O = G.__data__
          if (!y || O.length < M - 1) return O.push([A, L]), (this.size = ++G.size), this
          G = this.__data__ = new g(O)
        }
        return G.set(A, L), (this.size = G.size), this
      }
      E.exports = I
    },
    80346: function (E) {
      var x = Function.prototype,
        f = x.toString
      function i(y) {
        if (y != null) {
          try {
            return f.call(y)
          } catch (g) {}
          try {
            return y + ''
          } catch (g) {}
        }
        return ''
      }
      E.exports = i
    },
    77813: function (E) {
      function x(f, i) {
        return f === i || (f !== f && i !== i)
      }
      E.exports = x
    },
    35694: function (E, x, f) {
      var i = f(9454),
        y = f(37005),
        g = Object.prototype,
        M = g.hasOwnProperty,
        I = g.propertyIsEnumerable,
        A = i(
          (function () {
            return arguments
          })(),
        )
          ? i
          : function (L) {
              return y(L) && M.call(L, 'callee') && !I.call(L, 'callee')
            }
      E.exports = A
    },
    1469: function (E) {
      var x = Array.isArray
      E.exports = x
    },
    98612: function (E, x, f) {
      var i = f(23560),
        y = f(41780)
      function g(M) {
        return M != null && y(M.length) && !i(M)
      }
      E.exports = g
    },
    44144: function (E, x, f) {
      E = f.nmd(E)
      var i = f(55639),
        y = f(95062),
        g = x && !x.nodeType && x,
        M = g && !0 && E && !E.nodeType && E,
        I = M && M.exports === g,
        A = I ? i.Buffer : void 0,
        L = A ? A.isBuffer : void 0,
        G = L || y
      E.exports = G
    },
    18446: function (E, x, f) {
      var i = f(90939)
      function y(g, M) {
        return i(g, M)
      }
      E.exports = y
    },
    23560: function (E, x, f) {
      var i = f(44239),
        y = f(13218),
        g = '[object AsyncFunction]',
        M = '[object Function]',
        I = '[object GeneratorFunction]',
        A = '[object Proxy]'
      function L(G) {
        if (!y(G)) return !1
        var O = i(G)
        return O == M || O == I || O == g || O == A
      }
      E.exports = L
    },
    41780: function (E) {
      var x = 9007199254740991
      function f(i) {
        return typeof i == 'number' && i > -1 && i % 1 == 0 && i <= x
      }
      E.exports = f
    },
    13218: function (E) {
      function x(f) {
        var i = typeof f
        return f != null && (i == 'object' || i == 'function')
      }
      E.exports = x
    },
    37005: function (E) {
      function x(f) {
        return f != null && typeof f == 'object'
      }
      E.exports = x
    },
    36719: function (E, x, f) {
      var i = f(38749),
        y = f(7518),
        g = f(31167),
        M = g && g.isTypedArray,
        I = M ? y(M) : i
      E.exports = I
    },
    3674: function (E, x, f) {
      var i = f(14636),
        y = f(280),
        g = f(98612)
      function M(I) {
        return g(I) ? i(I) : y(I)
      }
      E.exports = M
    },
    70479: function (E) {
      function x() {
        return []
      }
      E.exports = x
    },
    95062: function (E) {
      function x() {
        return !1
      }
      E.exports = x
    },
    35800: function (E, x, f) {
      ;(function (i, y) {
        y(x, f(67294))
      })(this, function (i, y) {
        'use strict'
        function g(z) {
          if (z && z.__esModule) return z
          var ue = Object.create(null)
          return (
            z &&
              Object.keys(z).forEach(function (P) {
                if (P !== 'default') {
                  var Se = Object.getOwnPropertyDescriptor(z, P)
                  Object.defineProperty(
                    ue,
                    P,
                    Se.get
                      ? Se
                      : {
                          enumerable: !0,
                          get: function () {
                            return z[P]
                          },
                        },
                  )
                }
              }),
            (ue.default = z),
            Object.freeze(ue)
          )
        }
        var M = g(y)
        function I(z, ue) {
          return (
            (I =
              Object.setPrototypeOf ||
              function (Se, X) {
                return (Se.__proto__ = X), Se
              }),
            I(z, ue)
          )
        }
        function A(z, ue) {
          ;(z.prototype = Object.create(ue.prototype)), (z.prototype.constructor = z), I(z, ue)
        }
        var L = function (ue, P) {
            return (
              ue === void 0 && (ue = []),
              P === void 0 && (P = []),
              ue.length !== P.length ||
                ue.some(function (Se, X) {
                  return !Object.is(Se, P[X])
                })
            )
          },
          G = { error: null },
          O = (function (z) {
            A(ue, z)
            function ue() {
              for (var Se, X = arguments.length, ge = new Array(X), ve = 0; ve < X; ve++) ge[ve] = arguments[ve]
              return (
                (Se = z.call.apply(z, [this].concat(ge)) || this),
                (Se.state = G),
                (Se.resetErrorBoundary = function () {
                  for (var se, ke = arguments.length, we = new Array(ke), De = 0; De < ke; De++) we[De] = arguments[De]
                  Se.props.onReset == null || (se = Se.props).onReset.apply(se, we), Se.reset()
                }),
                Se
              )
            }
            ue.getDerivedStateFromError = function (X) {
              return { error: X }
            }
            var P = ue.prototype
            return (
              (P.reset = function () {
                this.setState(G)
              }),
              (P.componentDidCatch = function (X, ge) {
                var ve, se
                ;(ve = (se = this.props).onError) == null || ve.call(se, X, ge)
              }),
              (P.componentDidUpdate = function (X, ge) {
                var ve = this.state.error,
                  se = this.props.resetKeys
                if (ve !== null && ge.error !== null && L(X.resetKeys, se)) {
                  var ke, we
                  ;(ke = (we = this.props).onResetKeysChange) == null || ke.call(we, X.resetKeys, se), this.reset()
                }
              }),
              (P.render = function () {
                var X = this.state.error,
                  ge = this.props,
                  ve = ge.fallbackRender,
                  se = ge.FallbackComponent,
                  ke = ge.fallback
                if (X !== null) {
                  var we = { error: X, resetErrorBoundary: this.resetErrorBoundary }
                  if (M.isValidElement(ke)) return ke
                  if (typeof ve == 'function') return ve(we)
                  if (se) return M.createElement(se, we)
                  throw new Error(
                    'react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop',
                  )
                }
                return this.props.children
              }),
              ue
            )
          })(M.Component)
        function re(z, ue) {
          var P = function (ge) {
              return M.createElement(O, ue, M.createElement(z, ge))
            },
            Se = z.displayName || z.name || 'Unknown'
          return (P.displayName = 'withErrorBoundary(' + Se + ')'), P
        }
        function Te(z) {
          var ue = M.useState(null),
            P = ue[0],
            Se = ue[1]
          if (z != null) throw z
          if (P != null) throw P
          return Se
        }
        ;(i.ErrorBoundary = O),
          (i.useErrorHandler = Te),
          (i.withErrorBoundary = re),
          Object.defineProperty(i, '__esModule', { value: !0 })
      })
    },
    96774: function (E) {
      E.exports = function (f, i, y, g) {
        var M = y ? y.call(g, f, i) : void 0
        if (M !== void 0) return !!M
        if (f === i) return !0
        if (typeof f != 'object' || !f || typeof i != 'object' || !i) return !1
        var I = Object.keys(f),
          A = Object.keys(i)
        if (I.length !== A.length) return !1
        for (var L = Object.prototype.hasOwnProperty.bind(i), G = 0; G < I.length; G++) {
          var O = I[G]
          if (!L(O)) return !1
          var re = f[O],
            Te = i[O]
          if (((M = y ? y.call(g, re, Te, O) : void 0), M === !1 || (M === void 0 && re !== Te))) return !1
        }
        return !0
      }
    },
  },
])
