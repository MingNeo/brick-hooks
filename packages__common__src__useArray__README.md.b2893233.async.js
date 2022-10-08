;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [3160],
  {
    27518: function () {},
    25367: function (p, A, l) {
      'use strict'
      l.r(A)
      var e = l(67294),
        u = l(36445),
        c = l(91485),
        _ = l(45306),
        B = e.memo((a) => {
          var h = a.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'usearray' },
                e.createElement(
                  u.AnchorLink,
                  { to: '#usearray', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useArray',
              ),
              e.createElement(
                'p',
                null,
                '\u5BF9\u6570\u7EC4\u7C7B\u578B\u7684\u6570\u636E\u8FDB\u884C\u5904\u7406\uFF0C\u53EF\u4EE5\u76F4\u63A5\u64CD\u4F5C\u6570\u7EC4\u65B9\u6CD5',
              ),
              e.createElement(
                'h3',
                { id: '\u7528\u6CD5' },
                e.createElement(
                  u.AnchorLink,
                  { to: '#\u7528\u6CD5', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7528\u6CD5',
              ),
              e.createElement(c.Z, {
                code: `function MyComponent() {
  const [testArray, testArrayMethods] = useArray([1, 2, 3])

  const handleButtonAClick = () => testArrayMethods.push(4) // next testArray: [1, 2, 3, 4]
  return <Child>...</Child>
}`,
                lang: 'javascript',
              }),
              e.createElement(
                'h3',
                { id: 'actions' },
                e.createElement(
                  u.AnchorLink,
                  { to: '#actions', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'actions',
              ),
              e.createElement(
                _.Z,
                null,
                e.createElement(
                  'thead',
                  null,
                  e.createElement(
                    'tr',
                    null,
                    e.createElement('th', null, '\u65B9\u6CD5'),
                    e.createElement('th', null, '\u8BF4\u660E'),
                  ),
                ),
                e.createElement(
                  'tbody',
                  null,
                  e.createElement(
                    'tr',
                    null,
                    e.createElement('td', null, 'set'),
                    e.createElement('td', null, '\u8BBE\u7F6E\u6570\u7EC4\u7684\u503C'),
                  ),
                  e.createElement(
                    'tr',
                    null,
                    e.createElement('td', null, 'push'),
                    e.createElement('td', null, '\u540C Array.prototype.push'),
                  ),
                  e.createElement(
                    'tr',
                    null,
                    e.createElement('td', null, 'slice'),
                    e.createElement('td', null, '\u540C Array.prototype.slice'),
                  ),
                  e.createElement(
                    'tr',
                    null,
                    e.createElement('td', null, 'pop'),
                    e.createElement('td', null, '\u540C Array.prototype.pop'),
                  ),
                  e.createElement(
                    'tr',
                    null,
                    e.createElement('td', null, 'clear'),
                    e.createElement('td', null, '\u6E05\u7A7A'),
                  ),
                  e.createElement(
                    'tr',
                    null,
                    e.createElement('td', null, 'reverse'),
                    e.createElement('td', null, '\u540C Array.prototype.reverse'),
                  ),
                  e.createElement(
                    'tr',
                    null,
                    e.createElement('td', null, 'concat'),
                    e.createElement('td', null, '\u540C Array.prototype.concat'),
                  ),
                  e.createElement(
                    'tr',
                    null,
                    e.createElement('td', null, 'sort'),
                    e.createElement('td', null, '\u540C Array.prototype.sort'),
                  ),
                  e.createElement(
                    'tr',
                    null,
                    e.createElement('td', null, 'sortBy'),
                    e.createElement(
                      'td',
                      null,
                      '\u57FA\u4E8E\u6307\u5B9A\u5B57\u6BB5\u505A\u5347\u964D\u5E8F\u6392\u5E8F, \u9ED8\u8BA4\u4E3A ASC\uFF0C\u8BE6\u60C5\u89C1 useArray',
                    ),
                  ),
                  e.createElement(
                    'tr',
                    null,
                    e.createElement('td', null, 'remove'),
                    e.createElement('td', null, '\u79FB\u9664\u6307\u5B9A\u503C\uFF0C\u8BE6\u60C5\u89C1 useArray'),
                  ),
                  e.createElement(
                    'tr',
                    null,
                    e.createElement('td', null, 'removeById'),
                    e.createElement(
                      'td',
                      null,
                      '\u5F53\u6570\u636E\u683C\u5F0F\u4E3A[',
                      '{',
                      " id: 'xxx', value, ... ",
                      '}',
                      ', ...]\u65F6\uFF0C\u6839\u636E id \u79FB\u9664\u5BF9\u5E94\u7684\u503C',
                    ),
                  ),
                  e.createElement(
                    'tr',
                    null,
                    e.createElement('td', null, 'removeIndex'),
                    e.createElement('td', null, '\u79FB\u9664\u6307\u5B9A index \u7684\u503C'),
                  ),
                ),
              ),
              e.createElement(
                'h5',
                { id: 'sortby' },
                e.createElement(
                  u.AnchorLink,
                  { to: '#sortby', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'sortBy',
              ),
              e.createElement(
                'p',
                null,
                '\u57FA\u4E8E\u6307\u5B9A\u5B57\u6BB5\u505A\u5347\u964D\u5E8F\u6392\u5E8F, \u9ED8\u8BA4\u4E3A ASC',
              ),
              e.createElement(c.Z, {
                code: `function MyComponent() {
  const [testArray, testArrayMethods] = useArray([{ a: 2 }, { a: 1 }])

  const handleButtonAClick = () => testArrayMethods.sortBy({ field: 'a', order: 'ASC' })
  // next testArray: [{a: 1}, {a:2}]
  return <Child>...</Child>
}`,
                lang: 'javascript',
              }),
              e.createElement('p', null, '\u8BBE\u7F6E\u6570\u636E\u4E3A[]'),
              e.createElement(
                'h5',
                { id: 'remove' },
                e.createElement(
                  u.AnchorLink,
                  { to: '#remove', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'remove',
              ),
              e.createElement('p', null, '\u8FDB\u884C\u6D45\u6BD4\u8F83\u79FB\u9664\u5339\u914D\u7684\u503C'),
              e.createElement(c.Z, {
                code: `function MyComponent() {
  const [testArray, testArrayMethods] = useArray([1, 2, 3])

  const handleButtonAClick = () => testArrayMethods.remove(2) // next testArray: [1, 3]
  return <Child>...</Child>
}`,
                lang: 'javascript',
              }),
              e.createElement(
                'h5',
                { id: 'removebyid' },
                e.createElement(
                  u.AnchorLink,
                  { to: '#removebyid', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'removeById',
              ),
              e.createElement(
                'p',
                null,
                '\u5F53\u6570\u636E\u683C\u5F0F\u4E3A[',
                '{',
                " id: 'xxx', value, ... ",
                '}',
                ', ...]\u65F6\uFF0C\u6839\u636E id \u79FB\u9664\u5BF9\u5E94\u7684\u503C',
              ),
              e.createElement(c.Z, {
                code: `function MyComponent() {
  const [testArray, testArrayMethods] = useArray([
    { id: 1, value: 1 },
    { id: 2, value: 2 },
  ])

  const handleButtonAClick = () => testArrayMethods.removeById(2) // next testArray: [{ id: 1, value: 1 }]
  return <Child>...</Child>
}`,
                lang: 'javascript',
              }),
              e.createElement(
                'h5',
                { id: 'removeindex' },
                e.createElement(
                  u.AnchorLink,
                  { to: '#removeindex', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'removeIndex',
              ),
              e.createElement('p', null, '\u79FB\u9664\u6307\u5B9A index \u7684\u503C'),
              e.createElement(c.Z, {
                code: `function MyComponent() {
  const [testArray, testArrayMethods] = useArray([
    { id: 1, value: 1 },
    { id: 2, value: 2 },
  ])

  const handleButtonAClick = () => testArrayMethods.removeIndex(1) // next testArray: [{ id: 1, value: 1 }]
  return <Child>...</Child>
}`,
                lang: 'javascript',
              }),
            ),
          )
        })
      A.default = (a) => {
        var h = e.useContext(u.context),
          v = h.demos
        return (
          e.useEffect(() => {
            var d
            a != null &&
              (d = a.location) !== null &&
              d !== void 0 &&
              d.hash &&
              u.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))
          }, []),
          e.createElement(B, { demos: v })
        )
      }
    },
    45306: function (p, A, l) {
      'use strict'
      var e = l(67294),
        u = l(93096),
        c = l.n(u),
        _ = l(27518),
        B = l.n(_)
      function a(t, r) {
        return D(t) || M(t, r) || v(t, r) || h()
      }
      function h() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function v(t, r) {
        if (!!t) {
          if (typeof t == 'string') return d(t, r)
          var n = Object.prototype.toString.call(t).slice(8, -1)
          if ((n === 'Object' && t.constructor && (n = t.constructor.name), n === 'Map' || n === 'Set'))
            return Array.from(t)
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(t, r)
        }
      }
      function d(t, r) {
        ;(r == null || r > t.length) && (r = t.length)
        for (var n = 0, o = new Array(r); n < r; n++) o[n] = t[n]
        return o
      }
      function M(t, r) {
        var n = t == null ? null : (typeof Symbol != 'undefined' && t[Symbol.iterator]) || t['@@iterator']
        if (n != null) {
          var o = [],
            i = !0,
            E = !1,
            y,
            C
          try {
            for (n = n.call(t); !(i = (y = n.next()).done) && (o.push(y.value), !(r && o.length === r)); i = !0);
          } catch (f) {
            ;(E = !0), (C = f)
          } finally {
            try {
              !i && n.return != null && n.return()
            } finally {
              if (E) throw C
            }
          }
          return o
        }
      }
      function D(t) {
        if (Array.isArray(t)) return t
      }
      var b = function (r) {
        var n = r.children,
          o = (0, e.useRef)(),
          i = (0, e.useState)(!1),
          E = a(i, 2),
          y = E[0],
          C = E[1],
          f = (0, e.useState)(!1),
          F = a(f, 2),
          I = F[0],
          x = F[1]
        return (
          (0, e.useEffect)(function () {
            var s = o.current,
              m = c()(function () {
                C(s.scrollLeft > 0), x(s.scrollLeft < s.scrollWidth - s.offsetWidth)
              }, 100)
            return (
              m(),
              s.addEventListener('scroll', m),
              window.addEventListener('resize', m),
              function () {
                s.removeEventListener('scroll', m), window.removeEventListener('resize', m)
              }
            )
          }, []),
          e.createElement(
            'div',
            { className: '__dumi-default-table' },
            e.createElement(
              'div',
              {
                className: '__dumi-default-table-content',
                ref: o,
                'data-left-folded': y || void 0,
                'data-right-folded': I || void 0,
              },
              e.createElement('table', null, n),
            ),
          )
        )
      }
      A.Z = b
    },
  },
])
