(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3152],
  {
    15351: function (e) {
      "use strict";
      e.exports = function (e) {
        if ("number" != typeof e || Number.isNaN(e))
          throw TypeError(`Expected a number, got ${typeof e}`);
        let t = e < 0,
          i = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
        if ((t && (e = -e), e < 1)) return `${(t ? "-" : "") + e} B`;
        let r = Math.min(
          Math.floor(Math.log(e) / Math.log(1024)),
          i.length - 1
        );
        e = Number(e / 1024 ** r);
        let n = i[r];
        return e >= 10 || e % 1 == 0
          ? `${(t ? "-" : "") + e.toFixed(0)} ${n}`
          : `${(t ? "-" : "") + e.toFixed(1)} ${n}`;
      };
    },
    14486: function (e) {
      e.exports = function (e, t) {
        if (e === t) return !0;
        for (var i in e) if (!(i in t)) return !1;
        for (var i in t) if (e[i] !== t[i]) return !1;
        return !0;
      };
    },
    62011: function (e, t, i) {
      var r = i(63556)(i(29283), "DataView");
      e.exports = r;
    },
    91051: function (e, t, i) {
      var r = i(63556)(i(29283), "Map");
      e.exports = r;
    },
    75399: function (e, t, i) {
      var r = i(63556)(i(29283), "Promise");
      e.exports = r;
    },
    57991: function (e, t, i) {
      var r = i(63556)(i(29283), "Set");
      e.exports = r;
    },
    47729: function (e, t, i) {
      var r = i(63556)(i(29283), "WeakMap");
      e.exports = r;
    },
    71660: function (e, t, i) {
      var r = i(40389),
        n = i(45376);
      e.exports = function (e) {
        return n(e) && "[object Arguments]" == r(e);
      };
    },
    32948: function (e, t, i) {
      var r = i(57868),
        n = i(97441),
        s = i(34578),
        o = i(34198),
        a = /^\[object .+?Constructor\]$/,
        l = Object.prototype,
        u = Function.prototype.toString,
        h = l.hasOwnProperty,
        d = RegExp(
          "^" +
            u
              .call(h)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      e.exports = function (e) {
        return !(!s(e) || n(e)) && (r(e) ? d : a).test(o(e));
      };
    },
    15113: function (e, t, i) {
      var r = i(40389),
        n = i(90236),
        s = i(45376),
        o = {};
      (o["[object Float32Array]"] =
        o["[object Float64Array]"] =
        o["[object Int8Array]"] =
        o["[object Int16Array]"] =
        o["[object Int32Array]"] =
        o["[object Uint8Array]"] =
        o["[object Uint8ClampedArray]"] =
        o["[object Uint16Array]"] =
        o["[object Uint32Array]"] =
          !0),
        (o["[object Arguments]"] =
          o["[object Array]"] =
          o["[object ArrayBuffer]"] =
          o["[object Boolean]"] =
          o["[object DataView]"] =
          o["[object Date]"] =
          o["[object Error]"] =
          o["[object Function]"] =
          o["[object Map]"] =
          o["[object Number]"] =
          o["[object Object]"] =
          o["[object RegExp]"] =
          o["[object Set]"] =
          o["[object String]"] =
          o["[object WeakMap]"] =
            !1),
        (e.exports = function (e) {
          return s(e) && n(e.length) && !!o[r(e)];
        });
    },
    65142: function (e, t, i) {
      var r = i(22688),
        n = i(67190),
        s = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (!r(e)) return n(e);
        var t = [];
        for (var i in Object(e))
          s.call(e, i) && "constructor" != i && t.push(i);
        return t;
      };
    },
    7261: function (e) {
      e.exports = function (e) {
        return function (t) {
          return e(t);
        };
      };
    },
    97922: function (e, t, i) {
      var r = i(29283)["__core-js_shared__"];
      e.exports = r;
    },
    63556: function (e, t, i) {
      var r = i(32948),
        n = i(78985);
      e.exports = function (e, t) {
        var i = n(e, t);
        return r(i) ? i : void 0;
      };
    },
    39725: function (e, t, i) {
      var r = i(62011),
        n = i(91051),
        s = i(75399),
        o = i(57991),
        a = i(47729),
        l = i(40389),
        u = i(34198),
        h = "[object Map]",
        d = "[object Promise]",
        p = "[object Set]",
        c = "[object WeakMap]",
        f = "[object DataView]",
        m = u(r),
        g = u(n),
        y = u(s),
        v = u(o),
        b = u(a),
        w = l;
      ((r && w(new r(new ArrayBuffer(1))) != f) ||
        (n && w(new n()) != h) ||
        (s && w(s.resolve()) != d) ||
        (o && w(new o()) != p) ||
        (a && w(new a()) != c)) &&
        (w = function (e) {
          var t = l(e),
            i = "[object Object]" == t ? e.constructor : void 0,
            r = i ? u(i) : "";
          if (r)
            switch (r) {
              case m:
                return f;
              case g:
                return h;
              case y:
                return d;
              case v:
                return p;
              case b:
                return c;
            }
          return t;
        }),
        (e.exports = w);
    },
    78985: function (e) {
      e.exports = function (e, t) {
        return null == e ? void 0 : e[t];
      };
    },
    97441: function (e, t, i) {
      var r,
        n = i(97922),
        s = (r = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + r
          : "";
      e.exports = function (e) {
        return !!s && s in e;
      };
    },
    22688: function (e) {
      var t = Object.prototype;
      e.exports = function (e) {
        var i = e && e.constructor;
        return e === (("function" == typeof i && i.prototype) || t);
      };
    },
    67190: function (e, t, i) {
      var r = i(75307)(Object.keys, Object);
      e.exports = r;
    },
    14650: function (e, t, i) {
      e = i.nmd(e);
      var r = i(12080),
        n = t && !t.nodeType && t,
        s = n && e && !e.nodeType && e,
        o = s && s.exports === n && r.process,
        a = (function () {
          try {
            var e = s && s.require && s.require("util").types;
            if (e) return e;
            return o && o.binding && o.binding("util");
          } catch (e) {}
        })();
      e.exports = a;
    },
    75307: function (e) {
      e.exports = function (e, t) {
        return function (i) {
          return e(t(i));
        };
      };
    },
    34198: function (e) {
      var t = Function.prototype.toString;
      e.exports = function (e) {
        if (null != e) {
          try {
            return t.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      };
    },
    53914: function (e, t, i) {
      var r = i(71660),
        n = i(45376),
        s = Object.prototype,
        o = s.hasOwnProperty,
        a = s.propertyIsEnumerable,
        l = r(
          (function () {
            return arguments;
          })()
        )
          ? r
          : function (e) {
              return n(e) && o.call(e, "callee") && !a.call(e, "callee");
            };
      e.exports = l;
    },
    28035: function (e) {
      var t = Array.isArray;
      e.exports = t;
    },
    88243: function (e, t, i) {
      var r = i(57868),
        n = i(90236);
      e.exports = function (e) {
        return null != e && n(e.length) && !r(e);
      };
    },
    64592: function (e, t, i) {
      e = i.nmd(e);
      var r = i(29283),
        n = i(65190),
        s = t && !t.nodeType && t,
        o = s && e && !e.nodeType && e,
        a = o && o.exports === s ? r.Buffer : void 0,
        l = a ? a.isBuffer : void 0;
      e.exports = l || n;
    },
    67381: function (e, t, i) {
      var r = i(65142),
        n = i(39725),
        s = i(53914),
        o = i(28035),
        a = i(88243),
        l = i(64592),
        u = i(22688),
        h = i(43694),
        d = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (null == e) return !0;
        if (
          a(e) &&
          (o(e) ||
            "string" == typeof e ||
            "function" == typeof e.splice ||
            l(e) ||
            h(e) ||
            s(e))
        )
          return !e.length;
        var t = n(e);
        if ("[object Map]" == t || "[object Set]" == t) return !e.size;
        if (u(e)) return !r(e).length;
        for (var i in e) if (d.call(e, i)) return !1;
        return !0;
      };
    },
    57868: function (e, t, i) {
      var r = i(40389),
        n = i(34578);
      e.exports = function (e) {
        if (!n(e)) return !1;
        var t = r(e);
        return (
          "[object Function]" == t ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      };
    },
    90236: function (e) {
      e.exports = function (e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
    },
    43694: function (e, t, i) {
      var r = i(15113),
        n = i(7261),
        s = i(14650),
        o = s && s.isTypedArray,
        a = o ? n(o) : r;
      e.exports = a;
    },
    65190: function (e) {
      e.exports = function () {
        return !1;
      };
    },
    85902: function (e, t, i) {
      var r = i(64735),
        n = i(34578);
      e.exports = function (e, t, i) {
        var s = !0,
          o = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        return (
          n(i) &&
            ((s = "leading" in i ? !!i.leading : s),
            (o = "trailing" in i ? !!i.trailing : o)),
          r(e, t, { leading: s, maxWait: t, trailing: o })
        );
      };
    },
    22648: function (e, t, i) {
      var r = i(39742),
        n = /[\/\+\.]/;
      e.exports = function (e, t) {
        function i(t) {
          var i = r(t, e, n);
          return i && i.length >= 2;
        }
        return t ? i(t.split(";")[0]) : i;
      };
    },
    2373: function (e) {
      e.exports = function () {
        var e = {},
          t = (e._fns = {});
        return (
          (e.emit = function (e, i, r, n, s, o, a) {
            var l = (function (e) {
              for (
                var i = t[e] ? t[e] : [],
                  r = e.indexOf(":"),
                  n = -1 === r ? [e] : [e.substring(0, r), e.substring(r + 1)],
                  s = Object.keys(t),
                  o = 0,
                  a = s.length;
                o < a;
                o++
              ) {
                var l = s[o];
                if (
                  ("*" === l && (i = i.concat(t[l])),
                  2 === n.length && n[0] === l)
                ) {
                  i = i.concat(t[l]);
                  break;
                }
              }
              return i;
            })(e);
            l.length &&
              (function (e, t, i) {
                for (var r = 0, n = t.length; r < n && t[r]; r++)
                  (t[r].event = e), t[r].apply(t[r], i);
              })(e, l, [i, r, n, s, o, a]);
          }),
          (e.on = function (e, i) {
            t[e] || (t[e] = []), t[e].push(i);
          }),
          (e.once = function (t, i) {
            this.on(t, function r() {
              i.apply(this, arguments), e.off(t, r);
            });
          }),
          (e.off = function (e, t) {
            var i = [];
            if (e && t)
              for (
                var r = this._fns[e], n = 0, s = r ? r.length : 0;
                n < s;
                n++
              )
                r[n] !== t && i.push(r[n]);
            i.length ? (this._fns[e] = i) : delete this._fns[e];
          }),
          e
        );
      };
    },
    17398: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          Component: function () {
            return E;
          },
          Fragment: function () {
            return C;
          },
          cloneElement: function () {
            return j;
          },
          createContext: function () {
            return z;
          },
          createElement: function () {
            return P;
          },
          createRef: function () {
            return S;
          },
          h: function () {
            return P;
          },
          hydrate: function () {
            return L;
          },
          isValidElement: function () {
            return o;
          },
          options: function () {
            return n;
          },
          render: function () {
            return B;
          },
          toChildArray: function () {
            return function e(t, i) {
              return (
                (i = i || []),
                null == t ||
                  "boolean" == typeof t ||
                  (v(t)
                    ? t.some(function (t) {
                        e(t, i);
                      })
                    : i.push(t)),
                i
              );
            };
          },
        });
      var r,
        n,
        s,
        o,
        a,
        l,
        u,
        h,
        d,
        p,
        c,
        f,
        m = {},
        g = [],
        y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        v = Array.isArray;
      function b(e, t) {
        for (var i in t) e[i] = t[i];
        return e;
      }
      function w(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
      }
      function P(e, t, i) {
        var n,
          s,
          o,
          a = {};
        for (o in t)
          "key" == o ? (n = t[o]) : "ref" == o ? (s = t[o]) : (a[o] = t[o]);
        if (
          (arguments.length > 2 &&
            (a.children = arguments.length > 3 ? r.call(arguments, 2) : i),
          "function" == typeof e && null != e.defaultProps)
        )
          for (o in e.defaultProps)
            void 0 === a[o] && (a[o] = e.defaultProps[o]);
        return _(e, a, n, s, null);
      }
      function _(e, t, i, r, o) {
        var a = {
          type: e,
          props: t,
          key: i,
          ref: r,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          constructor: void 0,
          __v: null == o ? ++s : o,
          __i: -1,
          __u: 0,
        };
        return null == o && null != n.vnode && n.vnode(a), a;
      }
      function S() {
        return { current: null };
      }
      function C(e) {
        return e.children;
      }
      function E(e, t) {
        (this.props = e), (this.context = t);
      }
      function F(e, t) {
        if (null == t) return e.__ ? F(e.__, e.__i + 1) : null;
        for (var i; t < e.__k.length; t++)
          if (null != (i = e.__k[t]) && null != i.__e) return i.__e;
        return "function" == typeof e.type ? F(e) : null;
      }
      function T(e) {
        ((!e.__d && (e.__d = !0) && a.push(e) && !O.__r++) ||
          l !== n.debounceRendering) &&
          ((l = n.debounceRendering) || u)(O);
      }
      function O() {
        var e, t, i, r, s, o, l, u;
        for (a.sort(h); (e = a.shift()); )
          e.__d &&
            ((t = a.length),
            (r = void 0),
            (o = (s = (i = e).__v).__e),
            (l = []),
            (u = []),
            i.__P &&
              (((r = b({}, s)).__v = s.__v + 1),
              n.vnode && n.vnode(r),
              U(
                i.__P,
                r,
                s,
                i.__n,
                void 0 !== i.__P.ownerSVGElement,
                32 & s.__u ? [o] : null,
                l,
                null == o ? F(s) : o,
                !!(32 & s.__u),
                u
              ),
              (r.__v = s.__v),
              (r.__.__k[r.__i] = r),
              R(l, r, u),
              r.__e != o &&
                (function e(t) {
                  var i, r;
                  if (null != (t = t.__) && null != t.__c) {
                    for (
                      t.__e = t.__c.base = null, i = 0;
                      i < t.__k.length;
                      i++
                    )
                      if (null != (r = t.__k[i]) && null != r.__e) {
                        t.__e = t.__c.base = r.__e;
                        break;
                      }
                    return e(t);
                  }
                })(r)),
            a.length > t && a.sort(h));
        O.__r = 0;
      }
      function k(e, t, i, r, n, s, o, a, l, u, h) {
        var d,
          p,
          c,
          f,
          y,
          b = (r && r.__k) || g,
          w = t.length;
        for (
          i.__d = l,
            (function (e, t, i) {
              var r,
                n,
                s,
                o,
                a,
                l = t.length,
                u = i.length,
                h = u,
                d = 0;
              for (e.__k = [], r = 0; r < l; r++)
                (o = r + d),
                  null !=
                  (n = e.__k[r] =
                    null == (n = t[r]) ||
                    "boolean" == typeof n ||
                    "function" == typeof n
                      ? null
                      : "string" == typeof n ||
                        "number" == typeof n ||
                        "bigint" == typeof n ||
                        n.constructor == String
                      ? _(null, n, null, null, null)
                      : v(n)
                      ? _(C, { children: n }, null, null, null)
                      : void 0 === n.constructor && n.__b > 0
                      ? _(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v)
                      : n)
                    ? ((n.__ = e),
                      (n.__b = e.__b + 1),
                      (a = (function (e, t, i, r) {
                        var n = e.key,
                          s = e.type,
                          o = i - 1,
                          a = i + 1,
                          l = t[i];
                        if (
                          null === l ||
                          (l &&
                            n == l.key &&
                            s === l.type &&
                            0 == (131072 & l.__u))
                        )
                          return i;
                        if (r > (null != l && 0 == (131072 & l.__u) ? 1 : 0))
                          for (; o >= 0 || a < t.length; ) {
                            if (o >= 0) {
                              if (
                                (l = t[o]) &&
                                0 == (131072 & l.__u) &&
                                n == l.key &&
                                s === l.type
                              )
                                return o;
                              o--;
                            }
                            if (a < t.length) {
                              if (
                                (l = t[a]) &&
                                0 == (131072 & l.__u) &&
                                n == l.key &&
                                s === l.type
                              )
                                return a;
                              a++;
                            }
                          }
                        return -1;
                      })(n, i, o, h)),
                      (n.__i = a),
                      (s = null),
                      -1 !== a && (h--, (s = i[a]) && (s.__u |= 131072)),
                      null == s || null === s.__v
                        ? (-1 == a && d--,
                          "function" != typeof n.type && (n.__u |= 65536))
                        : a !== o &&
                          (a === o + 1
                            ? d++
                            : a > o
                            ? h > l - o
                              ? (d += a - o)
                              : d--
                            : a < o
                            ? a == o - 1 && (d = a - o)
                            : (d = 0),
                          a !== r + d && (n.__u |= 65536)))
                    : (s = i[o]) &&
                      null == s.key &&
                      s.__e &&
                      0 == (131072 & s.__u) &&
                      (s.__e == e.__d && (e.__d = F(s)),
                      M(s, s, !1),
                      (i[o] = null),
                      h--);
              if (h)
                for (r = 0; r < u; r++)
                  null != (s = i[r]) &&
                    0 == (131072 & s.__u) &&
                    (s.__e == e.__d && (e.__d = F(s)), M(s, s));
            })(i, t, b),
            l = i.__d,
            d = 0;
          d < w;
          d++
        )
          null != (c = i.__k[d]) &&
            "boolean" != typeof c &&
            "function" != typeof c &&
            ((p = -1 === c.__i ? m : b[c.__i] || m),
            (c.__i = d),
            U(e, c, p, n, s, o, a, l, u, h),
            (f = c.__e),
            c.ref &&
              p.ref != c.ref &&
              (p.ref && I(p.ref, null, c), h.push(c.ref, c.__c || f, c)),
            null == y && null != f && (y = f),
            65536 & c.__u || p.__k === c.__k
              ? (l && !l.isConnected && (l = F(p)),
                (l = (function e(t, i, r) {
                  var n, s;
                  if ("function" == typeof t.type) {
                    for (n = t.__k, s = 0; n && s < n.length; s++)
                      n[s] && ((n[s].__ = t), (i = e(n[s], i, r)));
                    return i;
                  }
                  t.__e != i && (r.insertBefore(t.__e, i || null), (i = t.__e));
                  do i = i && i.nextSibling;
                  while (null != i && 8 === i.nodeType);
                  return i;
                })(c, l, e)))
              : "function" == typeof c.type && void 0 !== c.__d
              ? (l = c.__d)
              : f && (l = f.nextSibling),
            (c.__d = void 0),
            (c.__u &= -196609));
        (i.__d = l), (i.__e = y);
      }
      function x(e, t, i) {
        "-" === t[0]
          ? e.setProperty(t, null == i ? "" : i)
          : (e[t] =
              null == i
                ? ""
                : "number" != typeof i || y.test(t)
                ? i
                : i + "px");
      }
      function A(e, t, i, r, n) {
        var s;
        e: if ("style" === t) {
          if ("string" == typeof i) e.style.cssText = i;
          else {
            if (("string" == typeof r && (e.style.cssText = r = ""), r))
              for (t in r) (i && t in i) || x(e.style, t, "");
            if (i) for (t in i) (r && i[t] === r[t]) || x(e.style, t, i[t]);
          }
        } else if ("o" === t[0] && "n" === t[1])
          (s = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
            (t =
              t.toLowerCase() in e || "onFocusOut" === t || "onFocusIn" === t
                ? t.toLowerCase().slice(2)
                : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + s] = i),
            i
              ? r
                ? (i.u = r.u)
                : ((i.u = d), e.addEventListener(t, s ? c : p, s))
              : e.removeEventListener(t, s ? c : p, s);
        else {
          if (n) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
          else if (
            "width" != t &&
            "height" != t &&
            "href" != t &&
            "list" != t &&
            "form" != t &&
            "tabIndex" != t &&
            "download" != t &&
            "rowSpan" != t &&
            "colSpan" != t &&
            "role" != t &&
            t in e
          )
            try {
              e[t] = null == i ? "" : i;
              break e;
            } catch (e) {}
          "function" == typeof i ||
            (null == i || (!1 === i && "-" !== t[4])
              ? e.removeAttribute(t)
              : e.setAttribute(t, i));
        }
      }
      function D(e) {
        return function (t) {
          if (this.l) {
            var i = this.l[t.type + e];
            if (null == t.t) t.t = d++;
            else if (t.t < i.u) return;
            return i(n.event ? n.event(t) : t);
          }
        };
      }
      function U(e, t, i, s, o, a, l, u, h, d) {
        var p,
          c,
          f,
          g,
          y,
          P,
          _,
          S,
          T,
          O,
          x,
          D,
          U,
          R,
          I,
          M = t.type;
        if (void 0 !== t.constructor) return null;
        128 & i.__u && ((h = !!(32 & i.__u)), (a = [(u = t.__e = i.__e)])),
          (p = n.__b) && p(t);
        e: if ("function" == typeof M)
          try {
            if (
              ((S = t.props),
              (T = (p = M.contextType) && s[p.__c]),
              (O = p ? (T ? T.props.value : p.__) : s),
              i.__c
                ? (_ = (c = t.__c = i.__c).__ = c.__E)
                : ("prototype" in M && M.prototype.render
                    ? (t.__c = c = new M(S, O))
                    : ((t.__c = c = new E(S, O)),
                      (c.constructor = M),
                      (c.render = N)),
                  T && T.sub(c),
                  (c.props = S),
                  c.state || (c.state = {}),
                  (c.context = O),
                  (c.__n = s),
                  (f = c.__d = !0),
                  (c.__h = []),
                  (c._sb = [])),
              null == c.__s && (c.__s = c.state),
              null != M.getDerivedStateFromProps &&
                (c.__s == c.state && (c.__s = b({}, c.__s)),
                b(c.__s, M.getDerivedStateFromProps(S, c.__s))),
              (g = c.props),
              (y = c.state),
              (c.__v = t),
              f)
            )
              null == M.getDerivedStateFromProps &&
                null != c.componentWillMount &&
                c.componentWillMount(),
                null != c.componentDidMount && c.__h.push(c.componentDidMount);
            else {
              if (
                (null == M.getDerivedStateFromProps &&
                  S !== g &&
                  null != c.componentWillReceiveProps &&
                  c.componentWillReceiveProps(S, O),
                !c.__e &&
                  ((null != c.shouldComponentUpdate &&
                    !1 === c.shouldComponentUpdate(S, c.__s, O)) ||
                    t.__v === i.__v))
              ) {
                for (
                  t.__v !== i.__v &&
                    ((c.props = S), (c.state = c.__s), (c.__d = !1)),
                    t.__e = i.__e,
                    t.__k = i.__k,
                    t.__k.forEach(function (e) {
                      e && (e.__ = t);
                    }),
                    x = 0;
                  x < c._sb.length;
                  x++
                )
                  c.__h.push(c._sb[x]);
                (c._sb = []), c.__h.length && l.push(c);
                break e;
              }
              null != c.componentWillUpdate &&
                c.componentWillUpdate(S, c.__s, O),
                null != c.componentDidUpdate &&
                  c.__h.push(function () {
                    c.componentDidUpdate(g, y, P);
                  });
            }
            if (
              ((c.context = O),
              (c.props = S),
              (c.__P = e),
              (c.__e = !1),
              (D = n.__r),
              (U = 0),
              "prototype" in M && M.prototype.render)
            ) {
              for (
                c.state = c.__s,
                  c.__d = !1,
                  D && D(t),
                  p = c.render(c.props, c.state, c.context),
                  R = 0;
                R < c._sb.length;
                R++
              )
                c.__h.push(c._sb[R]);
              c._sb = [];
            } else
              do
                (c.__d = !1),
                  D && D(t),
                  (p = c.render(c.props, c.state, c.context)),
                  (c.state = c.__s);
              while (c.__d && ++U < 25);
            (c.state = c.__s),
              null != c.getChildContext &&
                (s = b(b({}, s), c.getChildContext())),
              f ||
                null == c.getSnapshotBeforeUpdate ||
                (P = c.getSnapshotBeforeUpdate(g, y)),
              k(
                e,
                v(
                  (I =
                    null != p && p.type === C && null == p.key
                      ? p.props.children
                      : p)
                )
                  ? I
                  : [I],
                t,
                i,
                s,
                o,
                a,
                l,
                u,
                h,
                d
              ),
              (c.base = t.__e),
              (t.__u &= -161),
              c.__h.length && l.push(c),
              _ && (c.__E = c.__ = null);
          } catch (e) {
            (t.__v = null),
              h || null != a
                ? ((t.__e = u),
                  (t.__u |= h ? 160 : 32),
                  (a[a.indexOf(u)] = null))
                : ((t.__e = i.__e), (t.__k = i.__k)),
              n.__e(e, t, i);
          }
        else
          null == a && t.__v === i.__v
            ? ((t.__k = i.__k), (t.__e = i.__e))
            : (t.__e = (function (e, t, i, n, s, o, a, l, u) {
                var h,
                  d,
                  p,
                  c,
                  f,
                  g,
                  y,
                  b = i.props,
                  P = t.props,
                  _ = t.type;
                if (("svg" === _ && (s = !0), null != o)) {
                  for (h = 0; h < o.length; h++)
                    if (
                      (f = o[h]) &&
                      "setAttribute" in f == !!_ &&
                      (_ ? f.localName === _ : 3 === f.nodeType)
                    ) {
                      (e = f), (o[h] = null);
                      break;
                    }
                }
                if (null == e) {
                  if (null === _) return document.createTextNode(P);
                  (e = s
                    ? document.createElementNS("http://www.w3.org/2000/svg", _)
                    : document.createElement(_, P.is && P)),
                    (o = null),
                    (l = !1);
                }
                if (null === _) b === P || (l && e.data === P) || (e.data = P);
                else {
                  if (
                    ((o = o && r.call(e.childNodes)),
                    (b = i.props || m),
                    !l && null != o)
                  )
                    for (b = {}, h = 0; h < e.attributes.length; h++)
                      b[(f = e.attributes[h]).name] = f.value;
                  for (h in b)
                    (f = b[h]),
                      "children" == h ||
                        ("dangerouslySetInnerHTML" == h
                          ? (p = f)
                          : "key" === h || h in P || A(e, h, null, f, s));
                  for (h in P)
                    (f = P[h]),
                      "children" == h
                        ? (c = f)
                        : "dangerouslySetInnerHTML" == h
                        ? (d = f)
                        : "value" == h
                        ? (g = f)
                        : "checked" == h
                        ? (y = f)
                        : "key" === h ||
                          (l && "function" != typeof f) ||
                          b[h] === f ||
                          A(e, h, f, b[h], s);
                  if (d)
                    l ||
                      (p &&
                        (d.__html === p.__html || d.__html === e.innerHTML)) ||
                      (e.innerHTML = d.__html),
                      (t.__k = []);
                  else if (
                    (p && (e.innerHTML = ""),
                    k(
                      e,
                      v(c) ? c : [c],
                      t,
                      i,
                      n,
                      s && "foreignObject" !== _,
                      o,
                      a,
                      o ? o[0] : i.__k && F(i, 0),
                      l,
                      u
                    ),
                    null != o)
                  )
                    for (h = o.length; h--; ) null != o[h] && w(o[h]);
                  l ||
                    ((h = "value"),
                    void 0 === g ||
                      (g === e[h] &&
                        ("progress" !== _ || g) &&
                        ("option" !== _ || g === b[h])) ||
                      A(e, h, g, b[h], !1),
                    (h = "checked"),
                    void 0 !== y && y !== e[h] && A(e, h, y, b[h], !1));
                }
                return e;
              })(i.__e, t, i, s, o, a, l, h, d));
        (p = n.diffed) && p(t);
      }
      function R(e, t, i) {
        t.__d = void 0;
        for (var r = 0; r < i.length; r++) I(i[r], i[++r], i[++r]);
        n.__c && n.__c(t, e),
          e.some(function (t) {
            try {
              (e = t.__h),
                (t.__h = []),
                e.some(function (e) {
                  e.call(t);
                });
            } catch (e) {
              n.__e(e, t.__v);
            }
          });
      }
      function I(e, t, i) {
        try {
          "function" == typeof e ? e(t) : (e.current = t);
        } catch (e) {
          n.__e(e, i);
        }
      }
      function M(e, t, i) {
        var r, s;
        if (
          (n.unmount && n.unmount(e),
          (r = e.ref) && ((r.current && r.current !== e.__e) || I(r, null, t)),
          null != (r = e.__c))
        ) {
          if (r.componentWillUnmount)
            try {
              r.componentWillUnmount();
            } catch (e) {
              n.__e(e, t);
            }
          r.base = r.__P = null;
        }
        if ((r = e.__k))
          for (s = 0; s < r.length; s++)
            r[s] && M(r[s], t, i || "function" != typeof e.type);
        i || null == e.__e || w(e.__e), (e.__c = e.__ = e.__e = e.__d = void 0);
      }
      function N(e, t, i) {
        return this.constructor(e, i);
      }
      function B(e, t, i) {
        var s, o, a, l;
        n.__ && n.__(e, t),
          (o = (s = "function" == typeof i) ? null : (i && i.__k) || t.__k),
          (a = []),
          (l = []),
          U(
            t,
            (e = ((!s && i) || t).__k = P(C, null, [e])),
            o || m,
            m,
            void 0 !== t.ownerSVGElement,
            !s && i
              ? [i]
              : o
              ? null
              : t.firstChild
              ? r.call(t.childNodes)
              : null,
            a,
            !s && i ? i : o ? o.__e : t.firstChild,
            s,
            l
          ),
          R(a, e, l);
      }
      function L(e, t) {
        B(e, t, L);
      }
      function j(e, t, i) {
        var n,
          s,
          o,
          a,
          l = b({}, e.props);
        for (o in (e.type && e.type.defaultProps && (a = e.type.defaultProps),
        t))
          "key" == o
            ? (n = t[o])
            : "ref" == o
            ? (s = t[o])
            : (l[o] = void 0 === t[o] && void 0 !== a ? a[o] : t[o]);
        return (
          arguments.length > 2 &&
            (l.children = arguments.length > 3 ? r.call(arguments, 2) : i),
          _(e.type, l, n || e.key, s || e.ref, null)
        );
      }
      function z(e, t) {
        var i = {
          __c: (t = "__cC" + f++),
          __: e,
          Consumer: function (e, t) {
            return e.children(t);
          },
          Provider: function (e) {
            var i, r;
            return (
              this.getChildContext ||
                ((i = []),
                ((r = {})[t] = this),
                (this.getChildContext = function () {
                  return r;
                }),
                (this.shouldComponentUpdate = function (e) {
                  this.props.value !== e.value &&
                    i.some(function (e) {
                      (e.__e = !0), T(e);
                    });
                }),
                (this.sub = function (e) {
                  i.push(e);
                  var t = e.componentWillUnmount;
                  e.componentWillUnmount = function () {
                    i.splice(i.indexOf(e), 1), t && t.call(e);
                  };
                })),
              e.children
            );
          },
        };
        return (i.Provider.__ = i.Consumer.contextType = i);
      }
      (r = g.slice),
        (n = {
          __e: function (e, t, i, r) {
            for (var n, s, o; (t = t.__); )
              if ((n = t.__c) && !n.__)
                try {
                  if (
                    ((s = n.constructor) &&
                      null != s.getDerivedStateFromError &&
                      (n.setState(s.getDerivedStateFromError(e)), (o = n.__d)),
                    null != n.componentDidCatch &&
                      (n.componentDidCatch(e, r || {}), (o = n.__d)),
                    o)
                  )
                    return (n.__E = n);
                } catch (t) {
                  e = t;
                }
            throw e;
          },
        }),
        (s = 0),
        (o = function (e) {
          return null != e && null == e.constructor;
        }),
        (E.prototype.setState = function (e, t) {
          var i;
          (i =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = b({}, this.state))),
            "function" == typeof e && (e = e(b({}, i), this.props)),
            e && b(i, e),
            null != e && this.__v && (t && this._sb.push(t), T(this));
        }),
        (E.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), T(this));
        }),
        (E.prototype.render = C),
        (a = []),
        (u =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (h = function (e, t) {
          return e.__v.__b - t.__v.__b;
        }),
        (O.__r = 0),
        (d = 0),
        (p = D(!1)),
        (c = D(!0)),
        (f = 0);
    },
    98293: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          useCallback: function () {
            return F;
          },
          useContext: function () {
            return T;
          },
          useDebugValue: function () {
            return O;
          },
          useEffect: function () {
            return P;
          },
          useErrorBoundary: function () {
            return k;
          },
          useId: function () {
            return x;
          },
          useImperativeHandle: function () {
            return C;
          },
          useLayoutEffect: function () {
            return _;
          },
          useMemo: function () {
            return E;
          },
          useReducer: function () {
            return w;
          },
          useRef: function () {
            return S;
          },
          useState: function () {
            return b;
          },
        });
      var r,
        n,
        s,
        o,
        a = i(17398),
        l = 0,
        u = [],
        h = [],
        d = a.options,
        p = d.__b,
        c = d.__r,
        f = d.diffed,
        m = d.__c,
        g = d.unmount,
        y = d.__;
      function v(e, t) {
        d.__h && d.__h(n, e, l || t), (l = 0);
        var i = n.__H || (n.__H = { __: [], __h: [] });
        return e >= i.__.length && i.__.push({ __V: h }), i.__[e];
      }
      function b(e) {
        return (l = 1), w(M, e);
      }
      function w(e, t, i) {
        var s = v(r++, 2);
        if (
          ((s.t = e),
          !s.__c &&
            ((s.__ = [
              i ? i(t) : M(void 0, t),
              function (e) {
                var t = s.__N ? s.__N[0] : s.__[0],
                  i = s.t(t, e);
                t !== i && ((s.__N = [i, s.__[1]]), s.__c.setState({}));
              },
            ]),
            (s.__c = n),
            !n.u))
        ) {
          var o = function (e, t, i) {
            if (!s.__c.__H) return !0;
            var r = s.__c.__H.__.filter(function (e) {
              return !!e.__c;
            });
            if (
              r.every(function (e) {
                return !e.__N;
              })
            )
              return !a || a.call(this, e, t, i);
            var n = !1;
            return (
              r.forEach(function (e) {
                if (e.__N) {
                  var t = e.__[0];
                  (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (n = !0);
                }
              }),
              !(!n && s.__c.props === e) && (!a || a.call(this, e, t, i))
            );
          };
          n.u = !0;
          var a = n.shouldComponentUpdate,
            l = n.componentWillUpdate;
          (n.componentWillUpdate = function (e, t, i) {
            if (this.__e) {
              var r = a;
              (a = void 0), o(e, t, i), (a = r);
            }
            l && l.call(this, e, t, i);
          }),
            (n.shouldComponentUpdate = o);
        }
        return s.__N || s.__;
      }
      function P(e, t) {
        var i = v(r++, 3);
        !d.__s && I(i.__H, t) && ((i.__ = e), (i.i = t), n.__H.__h.push(i));
      }
      function _(e, t) {
        var i = v(r++, 4);
        !d.__s && I(i.__H, t) && ((i.__ = e), (i.i = t), n.__h.push(i));
      }
      function S(e) {
        return (
          (l = 5),
          E(function () {
            return { current: e };
          }, [])
        );
      }
      function C(e, t, i) {
        (l = 6),
          _(
            function () {
              return "function" == typeof e
                ? (e(t()),
                  function () {
                    return e(null);
                  })
                : e
                ? ((e.current = t()),
                  function () {
                    return (e.current = null);
                  })
                : void 0;
            },
            null == i ? i : i.concat(e)
          );
      }
      function E(e, t) {
        var i = v(r++, 7);
        return I(i.__H, t)
          ? ((i.__V = e()), (i.i = t), (i.__h = e), i.__V)
          : i.__;
      }
      function F(e, t) {
        return (
          (l = 8),
          E(function () {
            return e;
          }, t)
        );
      }
      function T(e) {
        var t = n.context[e.__c],
          i = v(r++, 9);
        return (
          (i.c = e),
          t ? (null == i.__ && ((i.__ = !0), t.sub(n)), t.props.value) : e.__
        );
      }
      function O(e, t) {
        d.useDebugValue && d.useDebugValue(t ? t(e) : e);
      }
      function k(e) {
        var t = v(r++, 10),
          i = b();
        return (
          (t.__ = e),
          n.componentDidCatch ||
            (n.componentDidCatch = function (e, r) {
              t.__ && t.__(e, r), i[1](e);
            }),
          [
            i[0],
            function () {
              i[1](void 0);
            },
          ]
        );
      }
      function x() {
        var e = v(r++, 11);
        if (!e.__) {
          for (var t = n.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
          var i = t.__m || (t.__m = [0, 0]);
          e.__ = "P" + i[0] + "-" + i[1]++;
        }
        return e.__;
      }
      function A() {
        for (var e; (e = u.shift()); )
          if (e.__P && e.__H)
            try {
              e.__H.__h.forEach(U), e.__H.__h.forEach(R), (e.__H.__h = []);
            } catch (t) {
              (e.__H.__h = []), d.__e(t, e.__v);
            }
      }
      (d.__b = function (e) {
        (n = null), p && p(e);
      }),
        (d.__ = function (e, t) {
          e && t.__k && t.__k.__m && (e.__m = t.__k.__m), y && y(e, t);
        }),
        (d.__r = function (e) {
          c && c(e), (r = 0);
          var t = (n = e.__c).__H;
          t &&
            (s === n
              ? ((t.__h = []),
                (n.__h = []),
                t.__.forEach(function (e) {
                  e.__N && (e.__ = e.__N), (e.__V = h), (e.__N = e.i = void 0);
                }))
              : (t.__h.forEach(U), t.__h.forEach(R), (t.__h = []), (r = 0))),
            (s = n);
        }),
        (d.diffed = function (e) {
          f && f(e);
          var t = e.__c;
          t &&
            t.__H &&
            (t.__H.__h.length &&
              ((1 !== u.push(t) && o === d.requestAnimationFrame) ||
                (
                  (o = d.requestAnimationFrame) ||
                  function (e) {
                    var t,
                      i = function () {
                        clearTimeout(r),
                          D && cancelAnimationFrame(t),
                          setTimeout(e);
                      },
                      r = setTimeout(i, 100);
                    D && (t = requestAnimationFrame(i));
                  }
                )(A)),
            t.__H.__.forEach(function (e) {
              e.i && (e.__H = e.i),
                e.__V !== h && (e.__ = e.__V),
                (e.i = void 0),
                (e.__V = h);
            })),
            (s = n = null);
        }),
        (d.__c = function (e, t) {
          t.some(function (e) {
            try {
              e.__h.forEach(U),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || R(e);
                }));
            } catch (i) {
              t.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (t = []),
                d.__e(i, e.__v);
            }
          }),
            m && m(e, t);
        }),
        (d.unmount = function (e) {
          g && g(e);
          var t,
            i = e.__c;
          i &&
            i.__H &&
            (i.__H.__.forEach(function (e) {
              try {
                U(e);
              } catch (e) {
                t = e;
              }
            }),
            (i.__H = void 0),
            t && d.__e(t, i.__v));
        });
      var D = "function" == typeof requestAnimationFrame;
      function U(e) {
        var t = n,
          i = e.__c;
        "function" == typeof i && ((e.__c = void 0), i()), (n = t);
      }
      function R(e) {
        var t = n;
        (e.__c = e.__()), (n = t);
      }
      function I(e, t) {
        return (
          !e ||
          e.length !== t.length ||
          t.some(function (t, i) {
            return t !== e[i];
          })
        );
      }
      function M(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
    },
    58046: function (e, t, i) {
      "use strict";
      var r = i(60878);
      function n() {}
      function s() {}
      (s.resetWarningCache = n),
        (e.exports = function () {
          function e(e, t, i, n, s, o) {
            if (o !== r) {
              var a = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((a.name = "Invariant Violation"), a);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var i = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: s,
            resetWarningCache: n,
          };
          return (i.PropTypes = i), i;
        });
    },
    45608: function (e, t, i) {
      e.exports = i(58046)();
    },
    60878: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    37347: function (e, t, i) {
      e.exports = i(8233);
    },
    8233: function (e, t, i) {
      var r = i(73863);
      (t.operation = function (e) {
        return new r(t.timeouts(e), {
          forever: e && (e.forever || e.retries === 1 / 0),
          unref: e && e.unref,
          maxRetryTime: e && e.maxRetryTime,
        });
      }),
        (t.timeouts = function (e) {
          if (e instanceof Array) return [].concat(e);
          var t = {
            retries: 10,
            factor: 2,
            minTimeout: 1e3,
            maxTimeout: 1 / 0,
            randomize: !1,
          };
          for (var i in e) t[i] = e[i];
          if (t.minTimeout > t.maxTimeout)
            throw Error("minTimeout is greater than maxTimeout");
          for (var r = [], n = 0; n < t.retries; n++)
            r.push(this.createTimeout(n, t));
          return (
            e && e.forever && !r.length && r.push(this.createTimeout(n, t)),
            r.sort(function (e, t) {
              return e - t;
            }),
            r
          );
        }),
        (t.createTimeout = function (e, t) {
          return Math.min(
            Math.round(
              (t.randomize ? Math.random() + 1 : 1) *
                Math.max(t.minTimeout, 1) *
                Math.pow(t.factor, e)
            ),
            t.maxTimeout
          );
        }),
        (t.wrap = function (e, i, r) {
          if ((i instanceof Array && ((r = i), (i = null)), !r))
            for (var n in ((r = []), e)) "function" == typeof e[n] && r.push(n);
          for (var s = 0; s < r.length; s++) {
            var o = r[s],
              a = e[o];
            (e[o] = function (r) {
              var n = t.operation(i),
                s = Array.prototype.slice.call(arguments, 1),
                o = s.pop();
              s.push(function (e) {
                n.retry(e) ||
                  (e && (arguments[0] = n.mainError()),
                  o.apply(this, arguments));
              }),
                n.attempt(function () {
                  r.apply(e, s);
                });
            }.bind(e, a)),
              (e[o].options = i);
          }
        });
    },
    73863: function (e) {
      function t(e, t) {
        "boolean" == typeof t && (t = { forever: t }),
          (this._originalTimeouts = JSON.parse(JSON.stringify(e))),
          (this._timeouts = e),
          (this._options = t || {}),
          (this._maxRetryTime = (t && t.maxRetryTime) || 1 / 0),
          (this._fn = null),
          (this._errors = []),
          (this._attempts = 1),
          (this._operationTimeout = null),
          (this._operationTimeoutCb = null),
          (this._timeout = null),
          (this._operationStart = null),
          (this._timer = null),
          this._options.forever &&
            (this._cachedTimeouts = this._timeouts.slice(0));
      }
      (e.exports = t),
        (t.prototype.reset = function () {
          (this._attempts = 1),
            (this._timeouts = this._originalTimeouts.slice(0));
        }),
        (t.prototype.stop = function () {
          this._timeout && clearTimeout(this._timeout),
            this._timer && clearTimeout(this._timer),
            (this._timeouts = []),
            (this._cachedTimeouts = null);
        }),
        (t.prototype.retry = function (e) {
          if ((this._timeout && clearTimeout(this._timeout), !e)) return !1;
          var t = new Date().getTime();
          if (e && t - this._operationStart >= this._maxRetryTime)
            return (
              this._errors.push(e),
              this._errors.unshift(Error("RetryOperation timeout occurred")),
              !1
            );
          this._errors.push(e);
          var i = this._timeouts.shift();
          if (void 0 === i) {
            if (!this._cachedTimeouts) return !1;
            this._errors.splice(0, this._errors.length - 1),
              (i = this._cachedTimeouts.slice(-1));
          }
          var r = this;
          return (
            (this._timer = setTimeout(function () {
              r._attempts++,
                r._operationTimeoutCb &&
                  ((r._timeout = setTimeout(function () {
                    r._operationTimeoutCb(r._attempts);
                  }, r._operationTimeout)),
                  r._options.unref && r._timeout.unref()),
                r._fn(r._attempts);
            }, i)),
            this._options.unref && this._timer.unref(),
            !0
          );
        }),
        (t.prototype.attempt = function (e, t) {
          (this._fn = e),
            t &&
              (t.timeout && (this._operationTimeout = t.timeout),
              t.cb && (this._operationTimeoutCb = t.cb));
          var i = this;
          this._operationTimeoutCb &&
            (this._timeout = setTimeout(function () {
              i._operationTimeoutCb();
            }, i._operationTimeout)),
            (this._operationStart = new Date().getTime()),
            this._fn(this._attempts);
        }),
        (t.prototype.try = function (e) {
          console.log("Using RetryOperation.try() is deprecated"),
            this.attempt(e);
        }),
        (t.prototype.start = function (e) {
          console.log("Using RetryOperation.start() is deprecated"),
            this.attempt(e);
        }),
        (t.prototype.start = t.prototype.try),
        (t.prototype.errors = function () {
          return this._errors;
        }),
        (t.prototype.attempts = function () {
          return this._attempts;
        }),
        (t.prototype.mainError = function () {
          if (0 === this._errors.length) return null;
          for (
            var e = {}, t = null, i = 0, r = 0;
            r < this._errors.length;
            r++
          ) {
            var n = this._errors[r],
              s = n.message,
              o = (e[s] || 0) + 1;
            (e[s] = o), o >= i && ((t = n), (i = o));
          }
          return t;
        });
    },
    39742: function (e) {
      "use strict";
      function t(e, t) {
        (this.text = e = e || ""),
          (this.hasWild = ~e.indexOf("*")),
          (this.separator = t),
          (this.parts = e.split(t));
      }
      (t.prototype.match = function (e) {
        var t,
          i,
          r = !0,
          n = this.parts,
          s = n.length;
        if ("string" == typeof e || e instanceof String) {
          if (this.hasWild || this.text == e) {
            for (t = 0, i = (e || "").split(this.separator); r && t < s; t++)
              "*" !== n[t] && (r = t < i.length && n[t] === i[t]);
            r = r && i;
          } else r = !1;
        } else if ("function" == typeof e.splice)
          for (r = [], t = e.length; t--; )
            this.match(e[t]) && (r[r.length] = e[t]);
        else if ("object" == typeof e)
          for (var o in ((r = {}), e)) this.match(o) && (r[o] = e[o]);
        return r;
      }),
        (e.exports = function (e, i, r) {
          var n = new t(e, r || /[\/\.]/);
          return void 0 !== i ? n.match(i) : n;
        });
    },
    37993: function (e, t) {
      var i;
      /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function n() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var i = arguments[t];
            i &&
              (e = s(
                e,
                (function (e) {
                  if ("string" == typeof e || "number" == typeof e) return e;
                  if ("object" != typeof e) return "";
                  if (Array.isArray(e)) return n.apply(null, e);
                  if (
                    e.toString !== Object.prototype.toString &&
                    !e.toString.toString().includes("[native code]")
                  )
                    return e.toString();
                  var t = "";
                  for (var i in e) r.call(e, i) && e[i] && (t = s(t, i));
                  return t;
                })(i)
              ));
          }
          return e;
        }
        function s(e, t) {
          return t ? (e ? e + " " + t : e + t) : e;
        }
        e.exports
          ? ((n.default = n), (e.exports = n))
          : void 0 !==
              (i = function () {
                return n;
              }.apply(t, [])) && (e.exports = i);
      })();
    },
    1585: function (e, t, i) {
      "use strict";
      i.d(t, {
        E: function () {
          return X;
        },
      });
      var r,
        n,
        s,
        o,
        a,
        l,
        u,
        h,
        d,
        p,
        c = i(15039),
        f = i(16619),
        m = i(22558),
        g = i(89342),
        y = i(60652);
      let v =
        null != (p = c.useId)
          ? p
          : function () {
              let e = (0, y.H)(),
                [t, i] = c.useState(e ? () => m.O.nextId() : null);
              return (
                (0, g.e)(() => {
                  null === t && i(m.O.nextId());
                }, [t]),
                null != t ? "" + t : void 0
              );
            };
      var b = i(81617),
        w = i(30824);
      let P = (0, c.createContext)(null);
      function _() {
        let [e, t] = (0, c.useState)([]);
        return [
          e.length > 0 ? e.join(" ") : void 0,
          (0, c.useMemo)(
            () =>
              function (e) {
                let i = (0, f.z)(
                    (e) => (
                      t((t) => [...t, e]),
                      () =>
                        t((t) => {
                          let i = t.slice(),
                            r = i.indexOf(e);
                          return -1 !== r && i.splice(r, 1), i;
                        })
                    )
                  ),
                  r = (0, c.useMemo)(
                    () => ({
                      register: i,
                      slot: e.slot,
                      name: e.name,
                      props: e.props,
                    }),
                    [i, e.slot, e.name, e.props]
                  );
                return c.createElement(P.Provider, { value: r }, e.children);
              },
            [t]
          ),
        ];
      }
      let S = Object.assign(
        (0, w.yV)(function (e, t) {
          let i = v(),
            { id: r = `headlessui-description-${i}`, ...n } = e,
            s = (function e() {
              let t = (0, c.useContext)(P);
              if (null === t) {
                let t = Error(
                  "You used a <Description /> component, but it is not inside a relevant parent."
                );
                throw (
                  (Error.captureStackTrace && Error.captureStackTrace(t, e), t)
                );
              }
              return t;
            })(),
            o = (0, b.T)(t);
          (0, g.e)(() => s.register(r), [r, s.register]);
          let a = { ref: o, ...s.props, id: r };
          return (0,
          w.sY)({ ourProps: a, theirProps: n, slot: s.slot || {}, defaultTag: "p", name: s.name || "Description" });
        }),
        {}
      );
      var C =
        (((r = C || {}).Space = " "),
        (r.Enter = "Enter"),
        (r.Escape = "Escape"),
        (r.Backspace = "Backspace"),
        (r.Delete = "Delete"),
        (r.ArrowLeft = "ArrowLeft"),
        (r.ArrowUp = "ArrowUp"),
        (r.ArrowRight = "ArrowRight"),
        (r.ArrowDown = "ArrowDown"),
        (r.Home = "Home"),
        (r.End = "End"),
        (r.PageUp = "PageUp"),
        (r.PageDown = "PageDown"),
        (r.Tab = "Tab"),
        r);
      let E = (0, c.createContext)(null);
      function F() {
        let [e, t] = (0, c.useState)([]);
        return [
          e.length > 0 ? e.join(" ") : void 0,
          (0, c.useMemo)(
            () =>
              function (e) {
                let i = (0, f.z)(
                    (e) => (
                      t((t) => [...t, e]),
                      () =>
                        t((t) => {
                          let i = t.slice(),
                            r = i.indexOf(e);
                          return -1 !== r && i.splice(r, 1), i;
                        })
                    )
                  ),
                  r = (0, c.useMemo)(
                    () => ({
                      register: i,
                      slot: e.slot,
                      name: e.name,
                      props: e.props,
                    }),
                    [i, e.slot, e.name, e.props]
                  );
                return c.createElement(E.Provider, { value: r }, e.children);
              },
            [t]
          ),
        ];
      }
      let T = Object.assign(
        (0, w.yV)(function (e, t) {
          let i = v(),
            { id: r = `headlessui-label-${i}`, passive: n = !1, ...s } = e,
            o = (function e() {
              let t = (0, c.useContext)(E);
              if (null === t) {
                let t = Error(
                  "You used a <Label /> component, but it is not inside a relevant parent."
                );
                throw (
                  (Error.captureStackTrace && Error.captureStackTrace(t, e), t)
                );
              }
              return t;
            })(),
            a = (0, b.T)(t);
          (0, g.e)(() => o.register(r), [r, o.register]);
          let l = { ref: a, ...o.props, id: r };
          return (
            n &&
              ("onClick" in l && (delete l.htmlFor, delete l.onClick),
              "onClick" in s && delete s.onClick),
            (0, w.sY)({
              ourProps: l,
              theirProps: s,
              slot: o.slot || {},
              defaultTag: "label",
              name: o.name || "Label",
            })
          );
        }),
        {}
      );
      var O = i(15341),
        k = i(61189),
        x = i(41250),
        A =
          (((n = A || {})[(n.None = 1)] = "None"),
          (n[(n.Focusable = 2)] = "Focusable"),
          (n[(n.Hidden = 4)] = "Hidden"),
          n);
      let D = (0, w.yV)(function (e, t) {
        var i;
        let { features: r = 1, ...n } = e,
          s = {
            ref: t,
            "aria-hidden":
              (2 & r) == 2 || (null != (i = n["aria-hidden"]) ? i : void 0),
            style: {
              position: "fixed",
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
              ...((4 & r) == 4 && (2 & r) != 2 && { display: "none" }),
            },
          };
        return (0,
        w.sY)({ ourProps: s, theirProps: n, slot: {}, defaultTag: "div", name: "Hidden" });
      });
      function U(e) {
        let t = e.parentElement,
          i = null;
        for (; t && !(t instanceof HTMLFieldSetElement); )
          t instanceof HTMLLegendElement && (i = t), (t = t.parentElement);
        let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
        return (
          !(
            r &&
            (function (e) {
              if (!e) return !1;
              let t = e.previousElementSibling;
              for (; null !== t; ) {
                if (t instanceof HTMLLegendElement) return !1;
                t = t.previousElementSibling;
              }
              return !0;
            })(i)
          ) && r
        );
      }
      let R = [
        "[contentEditable=true]",
        "[tabindex]",
        "a[href]",
        "area[href]",
        "button:not([disabled])",
        "iframe",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
      ]
        .map((e) => `${e}:not([tabindex='-1'])`)
        .join(",");
      var I =
          (((s = I || {})[(s.First = 1)] = "First"),
          (s[(s.Previous = 2)] = "Previous"),
          (s[(s.Next = 4)] = "Next"),
          (s[(s.Last = 8)] = "Last"),
          (s[(s.WrapAround = 16)] = "WrapAround"),
          (s[(s.NoScroll = 32)] = "NoScroll"),
          s),
        M =
          (((o = M || {})[(o.Error = 0)] = "Error"),
          (o[(o.Overflow = 1)] = "Overflow"),
          (o[(o.Success = 2)] = "Success"),
          (o[(o.Underflow = 3)] = "Underflow"),
          o),
        N =
          (((a = N || {})[(a.Previous = -1)] = "Previous"),
          (a[(a.Next = 1)] = "Next"),
          a),
        B =
          (((l = B || {})[(l.Strict = 0)] = "Strict"),
          (l[(l.Loose = 1)] = "Loose"),
          l),
        L =
          (((u = L || {})[(u.Keyboard = 0)] = "Keyboard"),
          (u[(u.Mouse = 1)] = "Mouse"),
          u);
      function j(e, t = (e) => e) {
        return e.slice().sort((e, i) => {
          let r = t(e),
            n = t(i);
          if (null === r || null === n) return 0;
          let s = r.compareDocumentPosition(n);
          return s & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : s & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
        });
      }
      function z(
        e,
        t,
        { sorted: i = !0, relativeTo: r = null, skipElements: n = [] } = {}
      ) {
        var s, o, a;
        let l = Array.isArray(e)
            ? e.length > 0
              ? e[0].ownerDocument
              : document
            : e.ownerDocument,
          u = Array.isArray(e)
            ? i
              ? j(e)
              : e
            : (function (e = document.body) {
                return null == e
                  ? []
                  : Array.from(e.querySelectorAll(R)).sort((e, t) =>
                      Math.sign(
                        (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                          (t.tabIndex || Number.MAX_SAFE_INTEGER)
                      )
                    );
              })(e);
        n.length > 0 && u.length > 1 && (u = u.filter((e) => !n.includes(e))),
          (r = null != r ? r : l.activeElement);
        let h = (() => {
            if (5 & t) return 1;
            if (10 & t) return -1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          d = (() => {
            if (1 & t) return 0;
            if (2 & t) return Math.max(0, u.indexOf(r)) - 1;
            if (4 & t) return Math.max(0, u.indexOf(r)) + 1;
            if (8 & t) return u.length - 1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          p = 32 & t ? { preventScroll: !0 } : {},
          c = 0,
          f = u.length,
          m;
        do {
          if (c >= f || c + f <= 0) return 0;
          let e = d + c;
          if (16 & t) e = (e + f) % f;
          else {
            if (e < 0) return 3;
            if (e >= f) return 1;
          }
          null == (m = u[e]) || m.focus(p), (c += h);
        } while (m !== l.activeElement);
        return (
          6 & t &&
            null !=
              (a =
                null == (o = null == (s = m) ? void 0 : s.matches)
                  ? void 0
                  : o.call(s, "textarea,input")) &&
            a &&
            m.select(),
          2
        );
      }
      function $(e, t) {
        return e ? e + "[" + t + "]" : t;
      }
      "undefined" != typeof window &&
        "undefined" != typeof document &&
        (document.addEventListener(
          "keydown",
          (e) => {
            e.metaKey ||
              e.altKey ||
              e.ctrlKey ||
              (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ),
        document.addEventListener(
          "click",
          (e) => {
            1 === e.detail
              ? delete document.documentElement.dataset.headlessuiFocusVisible
              : 0 === e.detail &&
                (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ));
      var q = i(57827),
        H =
          (((h = H || {})[(h.RegisterOption = 0)] = "RegisterOption"),
          (h[(h.UnregisterOption = 1)] = "UnregisterOption"),
          h);
      let V = {
          0(e, t) {
            let i = [
              ...e.options,
              { id: t.id, element: t.element, propsRef: t.propsRef },
            ];
            return { ...e, options: j(i, (e) => e.element.current) };
          },
          1(e, t) {
            let i = e.options.slice(),
              r = e.options.findIndex((e) => e.id === t.id);
            return -1 === r ? e : (i.splice(r, 1), { ...e, options: i });
          },
        },
        W = (0, c.createContext)(null);
      W.displayName = "RadioGroupDataContext";
      let G = (0, c.createContext)(null);
      function K(e, t) {
        return (0, q.E)(t.type, V, e, t);
      }
      G.displayName = "RadioGroupActionsContext";
      var Z =
        (((d = Z || {})[(d.Empty = 1)] = "Empty"),
        (d[(d.Active = 2)] = "Active"),
        d);
      let X = Object.assign(
        (0, w.yV)(function (e, t) {
          let i = v(),
            {
              id: r = `headlessui-radiogroup-${i}`,
              value: n,
              defaultValue: s,
              form: o,
              name: a,
              onChange: l,
              by: u = (e, t) => e === t,
              disabled: h = !1,
              ...d
            } = e,
            p = (0, f.z)(
              "string" == typeof u
                ? (e, t) =>
                    (null == e ? void 0 : e[u]) === (null == t ? void 0 : t[u])
                : u
            ),
            [m, y] = (0, c.useReducer)(K, { options: [] }),
            P = m.options,
            [S, E] = F(),
            [T, k] = _(),
            U = (0, c.useRef)(null),
            R = (0, b.T)(U, t),
            [N, B] = (function (e, t, i) {
              let [r, n] = (0, c.useState)(i),
                s = void 0 !== e,
                o = (0, c.useRef)(s),
                a = (0, c.useRef)(!1),
                l = (0, c.useRef)(!1);
              return (
                !s || o.current || a.current
                  ? s ||
                    !o.current ||
                    l.current ||
                    ((l.current = !0),
                    (o.current = s),
                    console.error(
                      "A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen."
                    ))
                  : ((a.current = !0),
                    (o.current = s),
                    console.error(
                      "A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen."
                    )),
                [
                  s ? e : r,
                  (0, f.z)((e) => (s || n(e), null == t ? void 0 : t(e))),
                ]
              );
            })(n, l, s),
            L = (0, c.useMemo)(
              () => P.find((e) => !e.propsRef.current.disabled),
              [P]
            ),
            j = (0, c.useMemo)(
              () => P.some((e) => p(e.propsRef.current.value, N)),
              [P, N]
            ),
            q = (0, f.z)((e) => {
              var t;
              if (h || p(e, N)) return !1;
              let i =
                null == (t = P.find((t) => p(t.propsRef.current.value, e)))
                  ? void 0
                  : t.propsRef.current;
              return (null == i || !i.disabled) && (null == B || B(e), !0);
            });
          !(function ({ container: e, accept: t, walk: i, enabled: r = !0 }) {
            let n = (0, c.useRef)(t),
              s = (0, c.useRef)(i);
            (0, c.useEffect)(() => {
              (n.current = t), (s.current = i);
            }, [t, i]),
              (0, g.e)(() => {
                if (!e || !r) return;
                let t = (0, x.r)(e);
                if (!t) return;
                let i = n.current,
                  o = s.current,
                  a = Object.assign((e) => i(e), { acceptNode: i }),
                  l = t.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, a, !1);
                for (; l.nextNode(); ) o(l.currentNode);
              }, [e, r, n, s]);
          })({
            container: U.current,
            accept: (e) =>
              "radio" === e.getAttribute("role")
                ? NodeFilter.FILTER_REJECT
                : e.hasAttribute("role")
                ? NodeFilter.FILTER_SKIP
                : NodeFilter.FILTER_ACCEPT,
            walk(e) {
              e.setAttribute("role", "none");
            },
          });
          let H = (0, f.z)((e) => {
              let t = U.current;
              if (!t) return;
              let i = (0, x.r)(t),
                r = P.filter((e) => !1 === e.propsRef.current.disabled).map(
                  (e) => e.element.current
                );
              switch (e.key) {
                case C.Enter:
                  !(function (e) {
                    var t, i;
                    let r =
                      null != (t = null == e ? void 0 : e.form)
                        ? t
                        : e.closest("form");
                    if (r) {
                      for (let t of r.elements)
                        if (
                          t !== e &&
                          (("INPUT" === t.tagName && "submit" === t.type) ||
                            ("BUTTON" === t.tagName && "submit" === t.type) ||
                            ("INPUT" === t.nodeName && "image" === t.type))
                        ) {
                          t.click();
                          return;
                        }
                      null == (i = r.requestSubmit) || i.call(r);
                    }
                  })(e.currentTarget);
                  break;
                case C.ArrowLeft:
                case C.ArrowUp:
                  if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    z(r, I.Previous | I.WrapAround) === M.Success)
                  ) {
                    let e = P.find(
                      (e) =>
                        e.element.current ===
                        (null == i ? void 0 : i.activeElement)
                    );
                    e && q(e.propsRef.current.value);
                  }
                  break;
                case C.ArrowRight:
                case C.ArrowDown:
                  if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    z(r, I.Next | I.WrapAround) === M.Success)
                  ) {
                    let e = P.find(
                      (e) =>
                        e.element.current ===
                        (null == i ? void 0 : i.activeElement)
                    );
                    e && q(e.propsRef.current.value);
                  }
                  break;
                case C.Space: {
                  e.preventDefault(), e.stopPropagation();
                  let t = P.find(
                    (e) =>
                      e.element.current ===
                      (null == i ? void 0 : i.activeElement)
                  );
                  t && q(t.propsRef.current.value);
                }
              }
            }),
            V = (0, f.z)(
              (e) => (y({ type: 0, ...e }), () => y({ type: 1, id: e.id }))
            ),
            Z = (0, c.useMemo)(
              () => ({
                value: N,
                firstOption: L,
                containsCheckedOption: j,
                disabled: h,
                compare: p,
                ...m,
              }),
              [N, L, j, h, p, m]
            ),
            X = (0, c.useMemo)(
              () => ({ registerOption: V, change: q }),
              [V, q]
            ),
            Y = (0, c.useMemo)(() => ({ value: N }), [N]),
            J = (0, c.useRef)(null),
            Q = (function () {
              let [e] = (0, c.useState)(function e() {
                let t = [],
                  i = {
                    addEventListener: (e, t, r, n) => (
                      e.addEventListener(t, r, n),
                      i.add(() => e.removeEventListener(t, r, n))
                    ),
                    requestAnimationFrame(...e) {
                      let t = requestAnimationFrame(...e);
                      return i.add(() => cancelAnimationFrame(t));
                    },
                    nextFrame: (...e) =>
                      i.requestAnimationFrame(() =>
                        i.requestAnimationFrame(...e)
                      ),
                    setTimeout(...e) {
                      let t = setTimeout(...e);
                      return i.add(() => clearTimeout(t));
                    },
                    microTask(...e) {
                      let t = { current: !0 };
                      return (
                        (0, O.Y)(() => {
                          t.current && e[0]();
                        }),
                        i.add(() => {
                          t.current = !1;
                        })
                      );
                    },
                    style(e, t, i) {
                      let r = e.style.getPropertyValue(t);
                      return (
                        Object.assign(e.style, { [t]: i }),
                        this.add(() => {
                          Object.assign(e.style, { [t]: r });
                        })
                      );
                    },
                    group(t) {
                      let i = e();
                      return t(i), this.add(() => i.dispose());
                    },
                    add: (e) => (
                      t.push(e),
                      () => {
                        let i = t.indexOf(e);
                        if (i >= 0) for (let e of t.splice(i, 1)) e();
                      }
                    ),
                    dispose() {
                      for (let e of t.splice(0)) e();
                    },
                  };
                return i;
              });
              return (0, c.useEffect)(() => () => e.dispose(), [e]), e;
            })();
          return (
            (0, c.useEffect)(() => {
              J.current &&
                void 0 !== s &&
                Q.addEventListener(J.current, "reset", () => {
                  q(s);
                });
            }, [J, q]),
            c.createElement(
              k,
              { name: "RadioGroup.Description" },
              c.createElement(
                E,
                { name: "RadioGroup.Label" },
                c.createElement(
                  G.Provider,
                  { value: X },
                  c.createElement(
                    W.Provider,
                    { value: Z },
                    null != a &&
                      null != N &&
                      (function e(t = {}, i = null, r = []) {
                        for (let [n, s] of Object.entries(t))
                          !(function t(i, r, n) {
                            if (Array.isArray(n))
                              for (let [e, s] of n.entries())
                                t(i, $(r, e.toString()), s);
                            else
                              n instanceof Date
                                ? i.push([r, n.toISOString()])
                                : "boolean" == typeof n
                                ? i.push([r, n ? "1" : "0"])
                                : "string" == typeof n
                                ? i.push([r, n])
                                : "number" == typeof n
                                ? i.push([r, `${n}`])
                                : null == n
                                ? i.push([r, ""])
                                : e(n, r, i);
                          })(r, $(i, n), s);
                        return r;
                      })({ [a]: N }).map(([e, t], i) =>
                        c.createElement(D, {
                          features: A.Hidden,
                          ref:
                            0 === i
                              ? (e) => {
                                  var t;
                                  J.current =
                                    null !=
                                    (t = null == e ? void 0 : e.closest("form"))
                                      ? t
                                      : null;
                                }
                              : void 0,
                          ...(0, w.oA)({
                            key: e,
                            as: "input",
                            type: "radio",
                            checked: null != t,
                            hidden: !0,
                            readOnly: !0,
                            form: o,
                            name: e,
                            value: t,
                          }),
                        })
                      ),
                    (0, w.sY)({
                      ourProps: {
                        ref: R,
                        id: r,
                        role: "radiogroup",
                        "aria-labelledby": S,
                        "aria-describedby": T,
                        onKeyDown: H,
                      },
                      theirProps: d,
                      slot: Y,
                      defaultTag: "div",
                      name: "RadioGroup",
                    })
                  )
                )
              )
            )
          );
        }),
        {
          Option: (0, w.yV)(function (e, t) {
            var i;
            let r = v(),
              {
                id: n = `headlessui-radiogroup-option-${r}`,
                value: s,
                disabled: o = !1,
                ...a
              } = e,
              l = (0, c.useRef)(null),
              u = (0, b.T)(l, t),
              [h, d] = F(),
              [p, m] = _(),
              {
                addFlag: y,
                removeFlag: P,
                hasFlag: S,
              } = (function (e = 0) {
                let t;
                let [i, r] = (0, c.useState)(e),
                  n =
                    ((t = (0, c.useRef)(!1)),
                    (0, g.e)(
                      () => (
                        (t.current = !0),
                        () => {
                          t.current = !1;
                        }
                      ),
                      []
                    ),
                    t),
                  s = (0, c.useCallback)(
                    (e) => {
                      n.current && r((t) => t | e);
                    },
                    [i, n]
                  ),
                  o = (0, c.useCallback)((e) => !!(i & e), [i]);
                return {
                  flags: i,
                  addFlag: s,
                  hasFlag: o,
                  removeFlag: (0, c.useCallback)(
                    (e) => {
                      n.current && r((t) => t & ~e);
                    },
                    [r, n]
                  ),
                  toggleFlag: (0, c.useCallback)(
                    (e) => {
                      n.current && r((t) => t ^ e);
                    },
                    [r]
                  ),
                };
              })(1),
              C = (0, k.E)({ value: s, disabled: o }),
              E = (function e(t) {
                let i = (0, c.useContext)(W);
                if (null === i) {
                  let i = Error(
                    `<${t} /> is missing a parent <RadioGroup /> component.`
                  );
                  throw (
                    (Error.captureStackTrace && Error.captureStackTrace(i, e),
                    i)
                  );
                }
                return i;
              })("RadioGroup.Option"),
              T = (function e(t) {
                let i = (0, c.useContext)(G);
                if (null === i) {
                  let i = Error(
                    `<${t} /> is missing a parent <RadioGroup /> component.`
                  );
                  throw (
                    (Error.captureStackTrace && Error.captureStackTrace(i, e),
                    i)
                  );
                }
                return i;
              })("RadioGroup.Option");
            (0,
            g.e)(() => T.registerOption({ id: n, element: l, propsRef: C }), [n, T, l, C]);
            let O = (0, f.z)((e) => {
                var t;
                if (U(e.currentTarget)) return e.preventDefault();
                T.change(s) && (y(2), null == (t = l.current) || t.focus());
              }),
              x = (0, f.z)((e) => {
                if (U(e.currentTarget)) return e.preventDefault();
                y(2);
              }),
              A = (0, f.z)(() => P(2)),
              D = (null == (i = E.firstOption) ? void 0 : i.id) === n,
              R = E.disabled || o,
              I = E.compare(E.value, s),
              M = {
                ref: u,
                id: n,
                role: "radio",
                "aria-checked": I ? "true" : "false",
                "aria-labelledby": h,
                "aria-describedby": p,
                "aria-disabled": !!R || void 0,
                tabIndex: R
                  ? -1
                  : I || (!E.containsCheckedOption && D)
                  ? 0
                  : -1,
                onClick: R ? void 0 : O,
                onFocus: R ? void 0 : x,
                onBlur: R ? void 0 : A,
              },
              N = (0, c.useMemo)(
                () => ({ checked: I, disabled: R, active: S(2) }),
                [I, R, S]
              );
            return c.createElement(
              m,
              { name: "RadioGroup.Description" },
              c.createElement(
                d,
                { name: "RadioGroup.Label" },
                (0, w.sY)({
                  ourProps: M,
                  theirProps: a,
                  slot: N,
                  defaultTag: "div",
                  name: "RadioGroup.Option",
                })
              )
            );
          }),
          Label: T,
          Description: S,
        }
      );
    },
    16619: function (e, t, i) {
      "use strict";
      i.d(t, {
        z: function () {
          return s;
        },
      });
      var r = i(15039),
        n = i(61189);
      let s = function (e) {
        let t = (0, n.E)(e);
        return r.useCallback((...e) => t.current(...e), [t]);
      };
    },
    89342: function (e, t, i) {
      "use strict";
      i.d(t, {
        e: function () {
          return s;
        },
      });
      var r = i(15039),
        n = i(22558);
      let s = (e, t) => {
        n.O.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t);
      };
    },
    61189: function (e, t, i) {
      "use strict";
      i.d(t, {
        E: function () {
          return s;
        },
      });
      var r = i(15039),
        n = i(89342);
      function s(e) {
        let t = (0, r.useRef)(e);
        return (
          (0, n.e)(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
    },
    60652: function (e, t, i) {
      "use strict";
      i.d(t, {
        H: function () {
          return o;
        },
      });
      var r,
        n = i(15039),
        s = i(22558);
      function o() {
        let e;
        let t =
            ((e = "undefined" == typeof document),
            (0, (r || (r = i.t(n, 2))).useSyncExternalStore)(
              () => () => {},
              () => !1,
              () => !e
            )),
          [o, a] = n.useState(s.O.isHandoffComplete);
        return (
          o && !1 === s.O.isHandoffComplete && a(!1),
          n.useEffect(() => {
            !0 !== o && a(!0);
          }, [o]),
          n.useEffect(() => s.O.handoff(), []),
          !t && o
        );
      }
    },
    81617: function (e, t, i) {
      "use strict";
      i.d(t, {
        T: function () {
          return a;
        },
        h: function () {
          return o;
        },
      });
      var r = i(15039),
        n = i(16619);
      let s = Symbol();
      function o(e, t = !0) {
        return Object.assign(e, { [s]: t });
      }
      function a(...e) {
        let t = (0, r.useRef)(e);
        (0, r.useEffect)(() => {
          t.current = e;
        }, [e]);
        let i = (0, n.z)((e) => {
          for (let i of t.current)
            null != i && ("function" == typeof i ? i(e) : (i.current = e));
        });
        return e.every((e) => null == e || (null == e ? void 0 : e[s]))
          ? void 0
          : i;
      }
    },
    22558: function (e, t, i) {
      "use strict";
      i.d(t, {
        O: function () {
          return a;
        },
      });
      var r = Object.defineProperty,
        n = (e, t, i) =>
          t in e
            ? r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        s = (e, t, i) => (n(e, "symbol" != typeof t ? t + "" : t, i), i);
      class o {
        constructor() {
          s(this, "current", this.detect()),
            s(this, "handoffState", "pending"),
            s(this, "currentId", 0);
        }
        set(e) {
          this.current !== e &&
            ((this.handoffState = "pending"),
            (this.currentId = 0),
            (this.current = e));
        }
        reset() {
          this.set(this.detect());
        }
        nextId() {
          return ++this.currentId;
        }
        get isServer() {
          return "server" === this.current;
        }
        get isClient() {
          return "client" === this.current;
        }
        detect() {
          return "undefined" == typeof window || "undefined" == typeof document
            ? "server"
            : "client";
        }
        handoff() {
          "pending" === this.handoffState && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
          return "complete" === this.handoffState;
        }
      }
      let a = new o();
    },
    57827: function (e, t, i) {
      "use strict";
      function r(e, t, ...i) {
        if (e in t) {
          let r = t[e];
          return "function" == typeof r ? r(...i) : r;
        }
        let n = Error(
          `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t
          )
            .map((e) => `"${e}"`)
            .join(", ")}.`
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(n, r), n);
      }
      i.d(t, {
        E: function () {
          return r;
        },
      });
    },
    15341: function (e, t, i) {
      "use strict";
      function r(e) {
        "function" == typeof queueMicrotask
          ? queueMicrotask(e)
          : Promise.resolve()
              .then(e)
              .catch((e) =>
                setTimeout(() => {
                  throw e;
                })
              );
      }
      i.d(t, {
        Y: function () {
          return r;
        },
      });
    },
    41250: function (e, t, i) {
      "use strict";
      i.d(t, {
        r: function () {
          return n;
        },
      });
      var r = i(22558);
      function n(e) {
        return r.O.isServer
          ? null
          : e instanceof Node
          ? e.ownerDocument
          : null != e &&
            e.hasOwnProperty("current") &&
            e.current instanceof Node
          ? e.current.ownerDocument
          : document;
      }
    },
    30824: function (e, t, i) {
      "use strict";
      i.d(t, {
        oA: function () {
          return m;
        },
        yV: function () {
          return f;
        },
        sY: function () {
          return h;
        },
      });
      var r,
        n,
        s = i(15039);
      function o(...e) {
        return Array.from(
          new Set(e.flatMap((e) => ("string" == typeof e ? e.split(" ") : [])))
        )
          .filter(Boolean)
          .join(" ");
      }
      var a = i(57827),
        l =
          (((r = l || {})[(r.None = 0)] = "None"),
          (r[(r.RenderStrategy = 1)] = "RenderStrategy"),
          (r[(r.Static = 2)] = "Static"),
          r),
        u =
          (((n = u || {})[(n.Unmount = 0)] = "Unmount"),
          (n[(n.Hidden = 1)] = "Hidden"),
          n);
      function h({
        ourProps: e,
        theirProps: t,
        slot: i,
        defaultTag: r,
        features: n,
        visible: s = !0,
        name: o,
        mergeRefs: l,
      }) {
        l = null != l ? l : p;
        let u = c(t, e);
        if (s) return d(u, i, r, o, l);
        let h = null != n ? n : 0;
        if (2 & h) {
          let { static: e = !1, ...t } = u;
          if (e) return d(t, i, r, o, l);
        }
        if (1 & h) {
          let { unmount: e = !0, ...t } = u;
          return (0, a.E)(e ? 0 : 1, {
            0: () => null,
            1: () =>
              d({ ...t, hidden: !0, style: { display: "none" } }, i, r, o, l),
          });
        }
        return d(u, i, r, o, l);
      }
      function d(e, t = {}, i, r, n) {
        let {
            as: a = i,
            children: l,
            refName: u = "ref",
            ...h
          } = g(e, ["unmount", "static"]),
          d = void 0 !== e.ref ? { [u]: e.ref } : {},
          p = "function" == typeof l ? l(t) : l;
        "className" in h &&
          h.className &&
          "function" == typeof h.className &&
          (h.className = h.className(t));
        let f = {};
        if (t) {
          let e = !1,
            i = [];
          for (let [r, n] of Object.entries(t))
            "boolean" == typeof n && (e = !0), !0 === n && i.push(r);
          e && (f["data-headlessui-state"] = i.join(" "));
        }
        if (a === s.Fragment && Object.keys(m(h)).length > 0) {
          if (!(0, s.isValidElement)(p) || (Array.isArray(p) && p.length > 1))
            throw Error(
              [
                'Passing props on "Fragment"!',
                "",
                `The current component <${r} /> is rendering a "Fragment".`,
                "However we need to passthrough the following props:",
                Object.keys(h).map((e) => `  - ${e}`).join(`
`),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ].map((e) => `  - ${e}`).join(`
`),
              ].join(`
`)
            );
          let e = p.props,
            t =
              "function" == typeof (null == e ? void 0 : e.className)
                ? (...t) =>
                    o(null == e ? void 0 : e.className(...t), h.className)
                : o(null == e ? void 0 : e.className, h.className);
          return (0, s.cloneElement)(
            p,
            Object.assign(
              {},
              c(p.props, m(g(h, ["ref"]))),
              f,
              d,
              { ref: n(p.ref, d.ref) },
              t ? { className: t } : {}
            )
          );
        }
        return (0, s.createElement)(
          a,
          Object.assign(
            {},
            g(h, ["ref"]),
            a !== s.Fragment && d,
            a !== s.Fragment && f
          ),
          p
        );
      }
      function p(...e) {
        return e.every((e) => null == e)
          ? void 0
          : (t) => {
              for (let i of e)
                null != i && ("function" == typeof i ? i(t) : (i.current = t));
            };
      }
      function c(...e) {
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let t = {},
          i = {};
        for (let r of e)
          for (let e in r)
            e.startsWith("on") && "function" == typeof r[e]
              ? (null != i[e] || (i[e] = []), i[e].push(r[e]))
              : (t[e] = r[e]);
        if (t.disabled || t["aria-disabled"])
          return Object.assign(
            t,
            Object.fromEntries(Object.keys(i).map((e) => [e, void 0]))
          );
        for (let e in i)
          Object.assign(t, {
            [e](t, ...r) {
              for (let n of i[e]) {
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                n(t, ...r);
              }
            },
          });
        return t;
      }
      function f(e) {
        var t;
        return Object.assign((0, s.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function m(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function g(e, t = []) {
        let i = Object.assign({}, e);
        for (let e of t) e in i && delete i[e];
        return i;
      }
    },
    46986: function (e, t, i) {
      "use strict";
      i.d(t, {
        fC: function () {
          return S;
        },
        z$: function () {
          return C;
        },
      });
      var r = i(65122),
        n = i(15039),
        s = i(41633),
        o = i(70686),
        a = i(65727),
        l = i(75347),
        u = i(84245),
        h = i(24735),
        d = i(95502),
        p = i(94221);
      let c = "Checkbox",
        [f, m] = (0, o.b)(c),
        [g, y] = f(c),
        v = (0, n.forwardRef)((e, t) => {
          let {
              __scopeCheckbox: i,
              name: o,
              checked: u,
              defaultChecked: h,
              required: d,
              disabled: c,
              value: f = "on",
              onCheckedChange: m,
              ...y
            } = e,
            [v, b] = (0, n.useState)(null),
            S = (0, s.e)(t, (e) => b(e)),
            C = (0, n.useRef)(!1),
            E = !v || !!v.closest("form"),
            [F = !1, T] = (0, l.T)({ prop: u, defaultProp: h, onChange: m }),
            O = (0, n.useRef)(F);
          return (
            (0, n.useEffect)(() => {
              let e = null == v ? void 0 : v.form;
              if (e) {
                let t = () => T(O.current);
                return (
                  e.addEventListener("reset", t),
                  () => e.removeEventListener("reset", t)
                );
              }
            }, [v, T]),
            (0, n.createElement)(
              g,
              { scope: i, state: F, disabled: c },
              (0, n.createElement)(
                p.WV.button,
                (0, r.Z)(
                  {
                    type: "button",
                    role: "checkbox",
                    "aria-checked": P(F) ? "mixed" : F,
                    "aria-required": d,
                    "data-state": _(F),
                    "data-disabled": c ? "" : void 0,
                    disabled: c,
                    value: f,
                  },
                  y,
                  {
                    ref: S,
                    onKeyDown: (0, a.M)(e.onKeyDown, (e) => {
                      "Enter" === e.key && e.preventDefault();
                    }),
                    onClick: (0, a.M)(e.onClick, (e) => {
                      T((e) => !!P(e) || !e),
                        E &&
                          ((C.current = e.isPropagationStopped()),
                          C.current || e.stopPropagation());
                    }),
                  }
                )
              ),
              E &&
                (0, n.createElement)(w, {
                  control: v,
                  bubbles: !C.current,
                  name: o,
                  value: f,
                  checked: F,
                  required: d,
                  disabled: c,
                  style: { transform: "translateX(-100%)" },
                })
            )
          );
        }),
        b = (0, n.forwardRef)((e, t) => {
          let { __scopeCheckbox: i, forceMount: s, ...o } = e,
            a = y("CheckboxIndicator", i);
          return (0, n.createElement)(
            d.z,
            { present: s || P(a.state) || !0 === a.state },
            (0, n.createElement)(
              p.WV.span,
              (0, r.Z)(
                {
                  "data-state": _(a.state),
                  "data-disabled": a.disabled ? "" : void 0,
                },
                o,
                { ref: t, style: { pointerEvents: "none", ...e.style } }
              )
            )
          );
        }),
        w = (e) => {
          let { control: t, checked: i, bubbles: s = !0, ...o } = e,
            a = (0, n.useRef)(null),
            l = (0, u.D)(i),
            d = (0, h.t)(t);
          return (
            (0, n.useEffect)(() => {
              let e = a.current,
                t = Object.getOwnPropertyDescriptor(
                  window.HTMLInputElement.prototype,
                  "checked"
                ).set;
              if (l !== i && t) {
                let r = new Event("click", { bubbles: s });
                (e.indeterminate = P(i)),
                  t.call(e, !P(i) && i),
                  e.dispatchEvent(r);
              }
            }, [l, i, s]),
            (0, n.createElement)(
              "input",
              (0, r.Z)(
                {
                  type: "checkbox",
                  "aria-hidden": !0,
                  defaultChecked: !P(i) && i,
                },
                o,
                {
                  tabIndex: -1,
                  ref: a,
                  style: {
                    ...e.style,
                    ...d,
                    position: "absolute",
                    pointerEvents: "none",
                    opacity: 0,
                    margin: 0,
                  },
                }
              )
            )
          );
        };
      function P(e) {
        return "indeterminate" === e;
      }
      function _(e) {
        return P(e) ? "indeterminate" : e ? "checked" : "unchecked";
      }
      let S = v,
        C = b;
    },
    80037: function (e, t, i) {
      "use strict";
      i.d(t, {
        B: function () {
          return a;
        },
      });
      var r = i(15039),
        n = i(70686),
        s = i(41633),
        o = i(22353);
      function a(e) {
        let t = e + "CollectionProvider",
          [i, a] = (0, n.b)(t),
          [l, u] = i(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          h = e + "CollectionSlot",
          d = r.forwardRef((e, t) => {
            let { scope: i, children: n } = e,
              a = u(h, i),
              l = (0, s.e)(t, a.collectionRef);
            return r.createElement(o.g7, { ref: l }, n);
          }),
          p = e + "CollectionItemSlot",
          c = "data-radix-collection-item";
        return [
          {
            Provider: (e) => {
              let { scope: t, children: i } = e,
                n = r.useRef(null),
                s = r.useRef(new Map()).current;
              return r.createElement(
                l,
                { scope: t, itemMap: s, collectionRef: n },
                i
              );
            },
            Slot: d,
            ItemSlot: r.forwardRef((e, t) => {
              let { scope: i, children: n, ...a } = e,
                l = r.useRef(null),
                h = (0, s.e)(t, l),
                d = u(p, i);
              return (
                r.useEffect(
                  () => (
                    d.itemMap.set(l, { ref: l, ...a }),
                    () => void d.itemMap.delete(l)
                  )
                ),
                r.createElement(o.g7, { [c]: "", ref: h }, n)
              );
            }),
          },
          function (t) {
            let i = u(e + "CollectionConsumer", t);
            return r.useCallback(() => {
              let e = i.collectionRef.current;
              if (!e) return [];
              let t = Array.from(e.querySelectorAll(`[${c}]`));
              return Array.from(i.itemMap.values()).sort(
                (e, i) => t.indexOf(e.ref.current) - t.indexOf(i.ref.current)
              );
            }, [i.collectionRef, i.itemMap]);
          },
          a,
        ];
      }
    },
    66059: function (e, t, i) {
      "use strict";
      i.d(t, {
        gm: function () {
          return s;
        },
      });
      var r = i(15039);
      let n = (0, r.createContext)(void 0);
      function s(e) {
        let t = (0, r.useContext)(n);
        return e || t || "ltr";
      }
    },
    94511: function (e, t, i) {
      "use strict";
      i.d(t, {
        VY: function () {
          return eb;
        },
        ZA: function () {
          return eP;
        },
        JO: function () {
          return ey;
        },
        ck: function () {
          return e_;
        },
        eT: function () {
          return eS;
        },
        h_: function () {
          return ev;
        },
        fC: function () {
          return ef;
        },
        Z0: function () {
          return eC;
        },
        xz: function () {
          return em;
        },
        B4: function () {
          return eg;
        },
        l_: function () {
          return ew;
        },
      });
      var r = i(65122),
        n = i(15039),
        s = i(68946);
      function o(e, [t, i]) {
        return Math.min(i, Math.max(t, e));
      }
      var a = i(65727),
        l = i(80037),
        u = i(41633),
        h = i(70686),
        d = i(66059),
        p = i(10094),
        c = i(71746),
        f = i(46201),
        m = i(89219),
        g = i(15755),
        y = i(22843),
        v = i(94221),
        b = i(22353),
        w = i(8035),
        P = i(75347),
        _ = i(17772),
        S = i(84245),
        C = i(88097),
        E = i(52871),
        F = i(43022);
      let T = [" ", "Enter", "ArrowUp", "ArrowDown"],
        O = [" ", "Enter"],
        k = "Select",
        [x, A, D] = (0, l.B)(k),
        [U, R] = (0, h.b)(k, [D, g.D7]),
        I = (0, g.D7)(),
        [M, N] = U(k),
        [B, L] = U(k),
        j = (0, n.forwardRef)((e, t) => {
          let { __scopeSelect: i, disabled: s = !1, ...o } = e,
            l = I(i),
            h = N("SelectTrigger", i),
            d = h.disabled || s,
            p = (0, u.e)(t, h.onTriggerChange),
            c = A(i),
            [f, m, y] = ep((e) => {
              let t = c().filter((e) => !e.disabled),
                i = t.find((e) => e.value === h.value),
                r = ec(t, e, i);
              void 0 !== r && h.onValueChange(r.value);
            }),
            b = () => {
              d || (h.onOpenChange(!0), y());
            };
          return (0, n.createElement)(
            g.ee,
            (0, r.Z)({ asChild: !0 }, l),
            (0, n.createElement)(
              v.WV.button,
              (0, r.Z)(
                {
                  type: "button",
                  role: "combobox",
                  "aria-controls": h.contentId,
                  "aria-expanded": h.open,
                  "aria-required": h.required,
                  "aria-autocomplete": "none",
                  dir: h.dir,
                  "data-state": h.open ? "open" : "closed",
                  disabled: d,
                  "data-disabled": d ? "" : void 0,
                  "data-placeholder": eh(h.value) ? "" : void 0,
                },
                o,
                {
                  ref: p,
                  onClick: (0, a.M)(o.onClick, (e) => {
                    e.currentTarget.focus();
                  }),
                  onPointerDown: (0, a.M)(o.onPointerDown, (e) => {
                    let t = e.target;
                    t.hasPointerCapture(e.pointerId) &&
                      t.releasePointerCapture(e.pointerId),
                      0 === e.button &&
                        !1 === e.ctrlKey &&
                        (b(),
                        (h.triggerPointerDownPosRef.current = {
                          x: Math.round(e.pageX),
                          y: Math.round(e.pageY),
                        }),
                        e.preventDefault());
                  }),
                  onKeyDown: (0, a.M)(o.onKeyDown, (e) => {
                    let t = "" !== f.current;
                    e.ctrlKey ||
                      e.altKey ||
                      e.metaKey ||
                      1 !== e.key.length ||
                      m(e.key),
                      (!t || " " !== e.key) &&
                        T.includes(e.key) &&
                        (b(), e.preventDefault());
                  }),
                }
              )
            )
          );
        }),
        z = (0, n.forwardRef)((e, t) => {
          let {
              __scopeSelect: i,
              className: s,
              style: o,
              children: a,
              placeholder: l = "",
              ...h
            } = e,
            d = N("SelectValue", i),
            { onValueNodeHasChildrenChange: p } = d,
            c = void 0 !== a,
            f = (0, u.e)(t, d.onValueNodeChange);
          return (
            (0, _.b)(() => {
              p(c);
            }, [p, c]),
            (0, n.createElement)(
              v.WV.span,
              (0, r.Z)({}, h, { ref: f, style: { pointerEvents: "none" } }),
              eh(d.value) ? (0, n.createElement)(n.Fragment, null, l) : a
            )
          );
        }),
        $ = (0, n.forwardRef)((e, t) => {
          let { __scopeSelect: i, children: s, ...o } = e;
          return (0, n.createElement)(
            v.WV.span,
            (0, r.Z)({ "aria-hidden": !0 }, o, { ref: t }),
            s || "▼"
          );
        }),
        q = "SelectContent",
        H = (0, n.forwardRef)((e, t) => {
          let i = N(q, e.__scopeSelect),
            [o, a] = (0, n.useState)();
          return ((0, _.b)(() => {
            a(new DocumentFragment());
          }, []),
          i.open)
            ? (0, n.createElement)(G, (0, r.Z)({}, e, { ref: t }))
            : o
            ? (0, s.createPortal)(
                (0, n.createElement)(
                  V,
                  { scope: e.__scopeSelect },
                  (0, n.createElement)(
                    x.Slot,
                    { scope: e.__scopeSelect },
                    (0, n.createElement)("div", null, e.children)
                  )
                ),
                o
              )
            : null;
        }),
        [V, W] = U(q),
        G = (0, n.forwardRef)((e, t) => {
          let {
              __scopeSelect: i,
              position: s = "item-aligned",
              onCloseAutoFocus: o,
              onEscapeKeyDown: l,
              onPointerDownOutside: h,
              side: d,
              sideOffset: m,
              align: g,
              alignOffset: y,
              arrowPadding: v,
              collisionBoundary: w,
              collisionPadding: P,
              sticky: _,
              hideWhenDetached: S,
              avoidCollisions: C,
              ...T
            } = e,
            O = N(q, i),
            [k, x] = (0, n.useState)(null),
            [D, U] = (0, n.useState)(null),
            R = (0, u.e)(t, (e) => x(e)),
            [I, M] = (0, n.useState)(null),
            [B, L] = (0, n.useState)(null),
            j = A(i),
            [z, $] = (0, n.useState)(!1),
            H = (0, n.useRef)(!1);
          (0, n.useEffect)(() => {
            if (k) return (0, E.Ry)(k);
          }, [k]),
            (0, c.EW)();
          let W = (0, n.useCallback)(
              (e) => {
                let [t, ...i] = j().map((e) => e.ref.current),
                  [r] = i.slice(-1),
                  n = document.activeElement;
                for (let i of e)
                  if (
                    i === n ||
                    (null == i || i.scrollIntoView({ block: "nearest" }),
                    i === t && D && (D.scrollTop = 0),
                    i === r && D && (D.scrollTop = D.scrollHeight),
                    null == i || i.focus(),
                    document.activeElement !== n)
                  )
                    return;
              },
              [j, D]
            ),
            G = (0, n.useCallback)(() => W([I, k]), [W, I, k]);
          (0, n.useEffect)(() => {
            z && G();
          }, [z, G]);
          let { onOpenChange: X, triggerPointerDownPosRef: Y } = O;
          (0, n.useEffect)(() => {
            if (k) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  var i, r, n, s;
                  e = {
                    x: Math.abs(
                      Math.round(t.pageX) -
                        (null !==
                          (i =
                            null === (r = Y.current) || void 0 === r
                              ? void 0
                              : r.x) && void 0 !== i
                          ? i
                          : 0)
                    ),
                    y: Math.abs(
                      Math.round(t.pageY) -
                        (null !==
                          (n =
                            null === (s = Y.current) || void 0 === s
                              ? void 0
                              : s.y) && void 0 !== n
                          ? n
                          : 0)
                    ),
                  };
                },
                i = (i) => {
                  e.x <= 10 && e.y <= 10
                    ? i.preventDefault()
                    : k.contains(i.target) || X(!1),
                    document.removeEventListener("pointermove", t),
                    (Y.current = null);
                };
              return (
                null !== Y.current &&
                  (document.addEventListener("pointermove", t),
                  document.addEventListener("pointerup", i, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  document.removeEventListener("pointermove", t),
                    document.removeEventListener("pointerup", i, {
                      capture: !0,
                    });
                }
              );
            }
          }, [k, X, Y]),
            (0, n.useEffect)(() => {
              let e = () => X(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e);
                }
              );
            }, [X]);
          let [J, Q] = ep((e) => {
              let t = j().filter((e) => !e.disabled),
                i = t.find((e) => e.ref.current === document.activeElement),
                r = ec(t, e, i);
              r && setTimeout(() => r.ref.current.focus());
            }),
            ee = (0, n.useCallback)(
              (e, t, i) => {
                let r = !H.current && !i;
                ((void 0 !== O.value && O.value === t) || r) &&
                  (M(e), r && (H.current = !0));
              },
              [O.value]
            ),
            et = (0, n.useCallback)(
              () => (null == k ? void 0 : k.focus()),
              [k]
            ),
            ei = (0, n.useCallback)(
              (e, t, i) => {
                let r = !H.current && !i;
                ((void 0 !== O.value && O.value === t) || r) && L(e);
              },
              [O.value]
            ),
            er = "popper" === s ? Z : K;
          return (0, n.createElement)(
            V,
            {
              scope: i,
              content: k,
              viewport: D,
              onViewportChange: U,
              itemRefCallback: ee,
              selectedItem: I,
              onItemLeave: et,
              itemTextRefCallback: ei,
              focusSelectedItem: G,
              selectedItemText: B,
              position: s,
              isPositioned: z,
              searchRef: J,
            },
            (0, n.createElement)(
              F.Z,
              { as: b.g7, allowPinchZoom: !0 },
              (0, n.createElement)(
                f.M,
                {
                  asChild: !0,
                  trapped: O.open,
                  onMountAutoFocus: (e) => {
                    e.preventDefault();
                  },
                  onUnmountAutoFocus: (0, a.M)(o, (e) => {
                    var t;
                    null === (t = O.trigger) ||
                      void 0 === t ||
                      t.focus({ preventScroll: !0 }),
                      e.preventDefault();
                  }),
                },
                (0, n.createElement)(
                  p.XB,
                  {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: l,
                    onPointerDownOutside: h,
                    onFocusOutside: (e) => e.preventDefault(),
                    onDismiss: () => O.onOpenChange(!1),
                  },
                  (0, n.createElement)(
                    er,
                    (0, r.Z)(
                      {
                        role: "listbox",
                        id: O.contentId,
                        "data-state": O.open ? "open" : "closed",
                        dir: O.dir,
                        onContextMenu: (e) => e.preventDefault(),
                      },
                      T,
                      er === Z
                        ? {
                            side: d,
                            sideOffset: m,
                            align: g,
                            alignOffset: y,
                            arrowPadding: v,
                            collisionBoundary: w,
                            collisionPadding: P,
                            sticky: _,
                            hideWhenDetached: S,
                            avoidCollisions: C,
                          }
                        : {},
                      {
                        onPlaced: () => $(!0),
                        ref: R,
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          outline: "none",
                          ...T.style,
                        },
                        onKeyDown: (0, a.M)(T.onKeyDown, (e) => {
                          let t = e.ctrlKey || e.altKey || e.metaKey;
                          if (
                            ("Tab" === e.key && e.preventDefault(),
                            t || 1 !== e.key.length || Q(e.key),
                            ["ArrowUp", "ArrowDown", "Home", "End"].includes(
                              e.key
                            ))
                          ) {
                            let t = j()
                              .filter((e) => !e.disabled)
                              .map((e) => e.ref.current);
                            if (
                              (["ArrowUp", "End"].includes(e.key) &&
                                (t = t.slice().reverse()),
                              ["ArrowUp", "ArrowDown"].includes(e.key))
                            ) {
                              let i = e.target,
                                r = t.indexOf(i);
                              t = t.slice(r + 1);
                            }
                            setTimeout(() => W(t)), e.preventDefault();
                          }
                        }),
                      }
                    )
                  )
                )
              )
            )
          );
        }),
        K = (0, n.forwardRef)((e, t) => {
          let { __scopeSelect: i, onPlaced: s, ...a } = e,
            l = N(q, i),
            h = W(q, i),
            [d, p] = (0, n.useState)(null),
            [c, f] = (0, n.useState)(null),
            m = (0, u.e)(t, (e) => f(e)),
            g = A(i),
            y = (0, n.useRef)(!1),
            b = (0, n.useRef)(!0),
            {
              viewport: w,
              selectedItem: P,
              selectedItemText: S,
              focusSelectedItem: C,
            } = h,
            E = (0, n.useCallback)(() => {
              if (l.trigger && l.valueNode && d && c && w && P && S) {
                let e = l.trigger.getBoundingClientRect(),
                  t = c.getBoundingClientRect(),
                  i = l.valueNode.getBoundingClientRect(),
                  r = S.getBoundingClientRect();
                if ("rtl" !== l.dir) {
                  let n = r.left - t.left,
                    s = i.left - n,
                    a = e.left - s,
                    l = e.width + a,
                    u = Math.max(l, t.width),
                    h = o(s, [10, window.innerWidth - 10 - u]);
                  (d.style.minWidth = l + "px"), (d.style.left = h + "px");
                } else {
                  let n = t.right - r.right,
                    s = window.innerWidth - i.right - n,
                    a = window.innerWidth - e.right - s,
                    l = e.width + a,
                    u = Math.max(l, t.width),
                    h = o(s, [10, window.innerWidth - 10 - u]);
                  (d.style.minWidth = l + "px"), (d.style.right = h + "px");
                }
                let n = g(),
                  a = window.innerHeight - 20,
                  u = w.scrollHeight,
                  h = window.getComputedStyle(c),
                  p = parseInt(h.borderTopWidth, 10),
                  f = parseInt(h.paddingTop, 10),
                  m = parseInt(h.borderBottomWidth, 10),
                  v = p + f + u + parseInt(h.paddingBottom, 10) + m,
                  b = Math.min(5 * P.offsetHeight, v),
                  _ = window.getComputedStyle(w),
                  C = parseInt(_.paddingTop, 10),
                  E = parseInt(_.paddingBottom, 10),
                  F = e.top + e.height / 2 - 10,
                  T = P.offsetHeight / 2,
                  O = p + f + (P.offsetTop + T);
                if (O <= F) {
                  let e = P === n[n.length - 1].ref.current;
                  d.style.bottom = "0px";
                  let t = c.clientHeight - w.offsetTop - w.offsetHeight;
                  d.style.height =
                    O + Math.max(a - F, T + (e ? E : 0) + t + m) + "px";
                } else {
                  let e = P === n[0].ref.current;
                  d.style.top = "0px";
                  let t = Math.max(F, p + w.offsetTop + (e ? C : 0) + T);
                  (d.style.height = t + (v - O) + "px"),
                    (w.scrollTop = O - F + w.offsetTop);
                }
                (d.style.margin = "10px 0"),
                  (d.style.minHeight = b + "px"),
                  (d.style.maxHeight = a + "px"),
                  null == s || s(),
                  requestAnimationFrame(() => (y.current = !0));
              }
            }, [g, l.trigger, l.valueNode, d, c, w, P, S, l.dir, s]);
          (0, _.b)(() => E(), [E]);
          let [F, T] = (0, n.useState)();
          (0, _.b)(() => {
            c && T(window.getComputedStyle(c).zIndex);
          }, [c]);
          let O = (0, n.useCallback)(
            (e) => {
              e &&
                !0 === b.current &&
                (E(), null == C || C(), (b.current = !1));
            },
            [E, C]
          );
          return (0, n.createElement)(
            X,
            {
              scope: i,
              contentWrapper: d,
              shouldExpandOnScrollRef: y,
              onScrollButtonChange: O,
            },
            (0, n.createElement)(
              "div",
              {
                ref: p,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  position: "fixed",
                  zIndex: F,
                },
              },
              (0, n.createElement)(
                v.WV.div,
                (0, r.Z)({}, a, {
                  ref: m,
                  style: {
                    boxSizing: "border-box",
                    maxHeight: "100%",
                    ...a.style,
                  },
                })
              )
            )
          );
        }),
        Z = (0, n.forwardRef)((e, t) => {
          let {
              __scopeSelect: i,
              align: s = "start",
              collisionPadding: o = 10,
              ...a
            } = e,
            l = I(i);
          return (0, n.createElement)(
            g.VY,
            (0, r.Z)({}, l, a, {
              ref: t,
              align: s,
              collisionPadding: o,
              style: {
                boxSizing: "border-box",
                ...a.style,
                "--radix-select-content-transform-origin":
                  "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width":
                  "var(--radix-popper-available-width)",
                "--radix-select-content-available-height":
                  "var(--radix-popper-available-height)",
                "--radix-select-trigger-width":
                  "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height":
                  "var(--radix-popper-anchor-height)",
              },
            })
          );
        }),
        [X, Y] = U(q, {}),
        J = "SelectViewport",
        Q = (0, n.forwardRef)((e, t) => {
          let { __scopeSelect: i, ...s } = e,
            o = W(J, i),
            l = Y(J, i),
            h = (0, u.e)(t, o.onViewportChange),
            d = (0, n.useRef)(0);
          return (0, n.createElement)(
            n.Fragment,
            null,
            (0, n.createElement)("style", {
              dangerouslySetInnerHTML: {
                __html:
                  "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
              },
            }),
            (0, n.createElement)(
              x.Slot,
              { scope: i },
              (0, n.createElement)(
                v.WV.div,
                (0, r.Z)(
                  { "data-radix-select-viewport": "", role: "presentation" },
                  s,
                  {
                    ref: h,
                    style: {
                      position: "relative",
                      flex: 1,
                      overflow: "auto",
                      ...s.style,
                    },
                    onScroll: (0, a.M)(s.onScroll, (e) => {
                      let t = e.currentTarget,
                        { contentWrapper: i, shouldExpandOnScrollRef: r } = l;
                      if (null != r && r.current && i) {
                        let e = Math.abs(d.current - t.scrollTop);
                        if (e > 0) {
                          let r = window.innerHeight - 20,
                            n = Math.max(
                              parseFloat(i.style.minHeight),
                              parseFloat(i.style.height)
                            );
                          if (n < r) {
                            let s = n + e,
                              o = Math.min(r, s),
                              a = s - o;
                            (i.style.height = o + "px"),
                              "0px" === i.style.bottom &&
                                ((t.scrollTop = a > 0 ? a : 0),
                                (i.style.justifyContent = "flex-end"));
                          }
                        }
                      }
                      d.current = t.scrollTop;
                    }),
                  }
                )
              )
            )
          );
        }),
        [ee, et] = U("SelectGroup"),
        ei = (0, n.forwardRef)((e, t) => {
          let { __scopeSelect: i, ...s } = e,
            o = (0, m.M)();
          return (0, n.createElement)(
            ee,
            { scope: i, id: o },
            (0, n.createElement)(
              v.WV.div,
              (0, r.Z)({ role: "group", "aria-labelledby": o }, s, { ref: t })
            )
          );
        }),
        er = "SelectItem",
        [en, es] = U(er),
        eo = (0, n.forwardRef)((e, t) => {
          let {
              __scopeSelect: i,
              value: s,
              disabled: o = !1,
              textValue: l,
              ...h
            } = e,
            d = N(er, i),
            p = W(er, i),
            c = d.value === s,
            [f, g] = (0, n.useState)(null != l ? l : ""),
            [y, b] = (0, n.useState)(!1),
            w = (0, u.e)(t, (e) => {
              var t;
              return null === (t = p.itemRefCallback) || void 0 === t
                ? void 0
                : t.call(p, e, s, o);
            }),
            P = (0, m.M)(),
            _ = () => {
              o || (d.onValueChange(s), d.onOpenChange(!1));
            };
          if ("" === s)
            throw Error(
              "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
            );
          return (0, n.createElement)(
            en,
            {
              scope: i,
              value: s,
              disabled: o,
              textId: P,
              isSelected: c,
              onItemTextChange: (0, n.useCallback)((e) => {
                g((t) => {
                  var i;
                  return (
                    t ||
                    (null !== (i = null == e ? void 0 : e.textContent) &&
                    void 0 !== i
                      ? i
                      : ""
                    ).trim()
                  );
                });
              }, []),
            },
            (0, n.createElement)(
              x.ItemSlot,
              { scope: i, value: s, disabled: o, textValue: f },
              (0, n.createElement)(
                v.WV.div,
                (0, r.Z)(
                  {
                    role: "option",
                    "aria-labelledby": P,
                    "data-highlighted": y ? "" : void 0,
                    "aria-selected": c && y,
                    "data-state": c ? "checked" : "unchecked",
                    "aria-disabled": o || void 0,
                    "data-disabled": o ? "" : void 0,
                    tabIndex: o ? void 0 : -1,
                  },
                  h,
                  {
                    ref: w,
                    onFocus: (0, a.M)(h.onFocus, () => b(!0)),
                    onBlur: (0, a.M)(h.onBlur, () => b(!1)),
                    onPointerUp: (0, a.M)(h.onPointerUp, _),
                    onPointerMove: (0, a.M)(h.onPointerMove, (e) => {
                      if (o) {
                        var t;
                        null === (t = p.onItemLeave) ||
                          void 0 === t ||
                          t.call(p);
                      } else e.currentTarget.focus({ preventScroll: !0 });
                    }),
                    onPointerLeave: (0, a.M)(h.onPointerLeave, (e) => {
                      if (e.currentTarget === document.activeElement) {
                        var t;
                        null === (t = p.onItemLeave) ||
                          void 0 === t ||
                          t.call(p);
                      }
                    }),
                    onKeyDown: (0, a.M)(h.onKeyDown, (e) => {
                      var t;
                      ((null === (t = p.searchRef) || void 0 === t
                        ? void 0
                        : t.current) !== "" &&
                        " " === e.key) ||
                        (O.includes(e.key) && _(),
                        " " === e.key && e.preventDefault());
                    }),
                  }
                )
              )
            )
          );
        }),
        ea = "SelectItemText",
        el = (0, n.forwardRef)((e, t) => {
          let { __scopeSelect: i, className: o, style: a, ...l } = e,
            h = N(ea, i),
            d = W(ea, i),
            p = es(ea, i),
            c = L(ea, i),
            [f, m] = (0, n.useState)(null),
            g = (0, u.e)(
              t,
              (e) => m(e),
              p.onItemTextChange,
              (e) => {
                var t;
                return null === (t = d.itemTextRefCallback) || void 0 === t
                  ? void 0
                  : t.call(d, e, p.value, p.disabled);
              }
            ),
            y = null == f ? void 0 : f.textContent,
            b = (0, n.useMemo)(
              () =>
                (0, n.createElement)(
                  "option",
                  { key: p.value, value: p.value, disabled: p.disabled },
                  y
                ),
              [p.disabled, p.value, y]
            ),
            { onNativeOptionAdd: w, onNativeOptionRemove: P } = c;
          return (
            (0, _.b)(() => (w(b), () => P(b)), [w, P, b]),
            (0, n.createElement)(
              n.Fragment,
              null,
              (0, n.createElement)(
                v.WV.span,
                (0, r.Z)({ id: p.textId }, l, { ref: g })
              ),
              p.isSelected && h.valueNode && !h.valueNodeHasChildren
                ? (0, s.createPortal)(l.children, h.valueNode)
                : null
            )
          );
        }),
        eu =
          ((e, t) => {
            let { __scopeSelect: i, onAutoScroll: s, ...o } = e,
              l = W("SelectScrollButton", i),
              u = (0, n.useRef)(null),
              h = A(i),
              d = (0, n.useCallback)(() => {
                null !== u.current &&
                  (window.clearInterval(u.current), (u.current = null));
              }, []);
            return (
              (0, n.useEffect)(() => () => d(), [d]),
              (0, _.b)(() => {
                var e;
                let t = h().find(
                  (e) => e.ref.current === document.activeElement
                );
                null == t ||
                  null === (e = t.ref.current) ||
                  void 0 === e ||
                  e.scrollIntoView({ block: "nearest" });
              }, [h]),
              (0, n.createElement)(
                v.WV.div,
                (0, r.Z)({ "aria-hidden": !0 }, o, {
                  ref: t,
                  style: { flexShrink: 0, ...o.style },
                  onPointerDown: (0, a.M)(o.onPointerDown, () => {
                    null === u.current &&
                      (u.current = window.setInterval(s, 50));
                  }),
                  onPointerMove: (0, a.M)(o.onPointerMove, () => {
                    var e;
                    null === (e = l.onItemLeave) || void 0 === e || e.call(l),
                      null === u.current &&
                        (u.current = window.setInterval(s, 50));
                  }),
                  onPointerLeave: (0, a.M)(o.onPointerLeave, () => {
                    d();
                  }),
                })
              )
            );
          },
          (0, n.forwardRef)((e, t) => {
            let { __scopeSelect: i, ...s } = e;
            return (0, n.createElement)(
              v.WV.div,
              (0, r.Z)({ "aria-hidden": !0 }, s, { ref: t })
            );
          }));
      function eh(e) {
        return "" === e || void 0 === e;
      }
      let ed = (0, n.forwardRef)((e, t) => {
        let { value: i, ...s } = e,
          o = (0, n.useRef)(null),
          a = (0, u.e)(t, o),
          l = (0, S.D)(i);
        return (
          (0, n.useEffect)(() => {
            let e = o.current,
              t = Object.getOwnPropertyDescriptor(
                window.HTMLSelectElement.prototype,
                "value"
              ).set;
            if (l !== i && t) {
              let r = new Event("change", { bubbles: !0 });
              t.call(e, i), e.dispatchEvent(r);
            }
          }, [l, i]),
          (0, n.createElement)(
            C.T,
            { asChild: !0 },
            (0, n.createElement)(
              "select",
              (0, r.Z)({}, s, { ref: a, defaultValue: i })
            )
          )
        );
      });
      function ep(e) {
        let t = (0, w.W)(e),
          i = (0, n.useRef)(""),
          r = (0, n.useRef)(0),
          s = (0, n.useCallback)(
            (e) => {
              let n = i.current + e;
              t(n),
                (function e(t) {
                  (i.current = t),
                    window.clearTimeout(r.current),
                    "" !== t &&
                      (r.current = window.setTimeout(() => e(""), 1e3));
                })(n);
            },
            [t]
          ),
          o = (0, n.useCallback)(() => {
            (i.current = ""), window.clearTimeout(r.current);
          }, []);
        return (
          (0, n.useEffect)(() => () => window.clearTimeout(r.current), []),
          [i, s, o]
        );
      }
      function ec(e, t, i) {
        var r;
        let n =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          s =
            ((r = Math.max(i ? e.indexOf(i) : -1, 0)),
            e.map((t, i) => e[(r + i) % e.length]));
        1 === n.length && (s = s.filter((e) => e !== i));
        let o = s.find((e) =>
          e.textValue.toLowerCase().startsWith(n.toLowerCase())
        );
        return o !== i ? o : void 0;
      }
      ed.displayName = "BubbleSelect";
      let ef = (e) => {
          let {
              __scopeSelect: t,
              children: i,
              open: r,
              defaultOpen: s,
              onOpenChange: o,
              value: a,
              defaultValue: l,
              onValueChange: u,
              dir: h,
              name: p,
              autoComplete: c,
              disabled: f,
              required: y,
            } = e,
            v = I(t),
            [b, w] = (0, n.useState)(null),
            [_, S] = (0, n.useState)(null),
            [C, E] = (0, n.useState)(!1),
            F = (0, d.gm)(h),
            [T = !1, O] = (0, P.T)({ prop: r, defaultProp: s, onChange: o }),
            [k, A] = (0, P.T)({ prop: a, defaultProp: l, onChange: u }),
            D = (0, n.useRef)(null),
            U = !b || !!b.closest("form"),
            [R, N] = (0, n.useState)(new Set()),
            L = Array.from(R)
              .map((e) => e.props.value)
              .join(";");
          return (0, n.createElement)(
            g.fC,
            v,
            (0, n.createElement)(
              M,
              {
                required: y,
                scope: t,
                trigger: b,
                onTriggerChange: w,
                valueNode: _,
                onValueNodeChange: S,
                valueNodeHasChildren: C,
                onValueNodeHasChildrenChange: E,
                contentId: (0, m.M)(),
                value: k,
                onValueChange: A,
                open: T,
                onOpenChange: O,
                dir: F,
                triggerPointerDownPosRef: D,
                disabled: f,
              },
              (0, n.createElement)(
                x.Provider,
                { scope: t },
                (0, n.createElement)(
                  B,
                  {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: (0, n.useCallback)((e) => {
                      N((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: (0, n.useCallback)((e) => {
                      N((t) => {
                        let i = new Set(t);
                        return i.delete(e), i;
                      });
                    }, []),
                  },
                  i
                )
              ),
              U
                ? (0, n.createElement)(
                    ed,
                    {
                      key: L,
                      "aria-hidden": !0,
                      required: y,
                      tabIndex: -1,
                      name: p,
                      autoComplete: c,
                      value: k,
                      onChange: (e) => A(e.target.value),
                      disabled: f,
                    },
                    void 0 === k
                      ? (0, n.createElement)("option", { value: "" })
                      : null,
                    Array.from(R)
                  )
                : null
            )
          );
        },
        em = j,
        eg = z,
        ey = $,
        ev = (e) => (0, n.createElement)(y.h, (0, r.Z)({ asChild: !0 }, e)),
        eb = H,
        ew = Q,
        eP = ei,
        e_ = eo,
        eS = el,
        eC = eu;
    },
    84245: function (e, t, i) {
      "use strict";
      i.d(t, {
        D: function () {
          return n;
        },
      });
      var r = i(15039);
      function n(e) {
        let t = (0, r.useRef)({ value: e, previous: e });
        return (0, r.useMemo)(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e]
        );
      }
    },
    83397: function (e, t, i) {
      "use strict";
      function r(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      i.d(t, {
        nT: function () {
          return eO;
        },
      });
      let n = /\W|_/g;
      function s(e, { ignoreKeys: t } = { ignoreKeys: [] }) {
        return Array.isArray(e) ? e.map((e) => o(e, { ignoreKeys: t })) : e;
      }
      function o(e, { ignoreKeys: t } = { ignoreKeys: [] }) {
        if (Array.isArray(e)) return s(e, { ignoreKeys: t });
        if (!r(e)) return e;
        let i = {};
        for (let a of Object.keys(e)) {
          let l = e[a];
          if (t.includes(a)) {
            i[a] = l;
            continue;
          }
          r(l)
            ? (l = o(l, { ignoreKeys: t }))
            : Array.isArray(l) && (l = s(l, { ignoreKeys: t })),
            (i[
              a
                .split(n)
                .map(
                  (e, t) =>
                    e.charAt(0)[t > 0 ? "toUpperCase" : "toLowerCase"]() +
                    e.slice(1)
                )
                .join("")
            ] = l);
        }
        return i;
      }
      let a = (e) => new Promise((t) => setTimeout(t, e)),
        l = { factor: 2, time: 100 };
      class u extends Error {}
      class h extends u {
        originalProgressEvent;
        constructor(e) {
          super(),
            (this.name = "NetworkError"),
            (this.message = "Network error"),
            Object.setPrototypeOf(this, h.prototype),
            (this.originalProgressEvent = e);
        }
      }
      let d = (e, t) => {
        e &&
          (e.aborted
            ? Promise.resolve().then(t)
            : e.addEventListener("abort", () => t(), { once: !0 }));
      };
      class p extends u {
        isCancel = !0;
        constructor(e = "Request canceled") {
          super(e),
            (this.name = "CancelError"),
            Object.setPrototypeOf(this, p.prototype);
        }
      }
      let c = 500,
        f = ({ check: e, interval: t = c, timeout: i, signal: r }) =>
          new Promise((n, s) => {
            let o, a;
            d(r, () => {
              o && clearTimeout(o), s(new p("Poll cancelled"));
            }),
              i &&
                (a = setTimeout(() => {
                  o && clearTimeout(o), s(new p("Timed out"));
                }, i));
            let l = () => {
              try {
                Promise.resolve(e(r))
                  .then((e) => {
                    e ? (a && clearTimeout(a), n(e)) : (o = setTimeout(l, t));
                  })
                  .catch((e) => {
                    a && clearTimeout(a), s(e);
                  });
              } catch (e) {
                a && clearTimeout(a), s(e);
              }
            };
            o = setTimeout(l, 0);
          }),
        m = {
          baseCDN: "https://ucarecdn.com",
          baseURL: "https://upload.uploadcare.com",
          maxContentLength: 52428800,
          retryThrottledRequestMaxTimes: 1,
          retryNetworkErrorMaxTimes: 3,
          multipartMinFileSize: 26214400,
          multipartChunkSize: 5242880,
          multipartMinLastPartSize: 1048576,
          maxConcurrentRequests: 4,
          pollingTimeoutMilliseconds: 1e4,
          pusherKey: "79ae88bd931ea68464d9",
        },
        g = "application/octet-stream",
        y = "original",
        v = ({
          method: e,
          url: t,
          data: i,
          headers: r = {},
          signal: n,
          onProgress: s,
        }) =>
          new Promise((o, a) => {
            let l = new XMLHttpRequest(),
              u = e?.toUpperCase() || "GET",
              c = !1;
            l.open(u, t, !0),
              r &&
                Object.entries(r).forEach((e) => {
                  let [t, i] = e;
                  void 0 === i || Array.isArray(i) || l.setRequestHeader(t, i);
                }),
              (l.responseType = "text"),
              d(n, () => {
                (c = !0), l.abort(), a(new p());
              }),
              (l.onload = () => {
                if (200 != l.status)
                  a(Error(`Error ${l.status}: ${l.statusText}`));
                else {
                  let e = l
                      .getAllResponseHeaders()
                      .trim()
                      .split(/[\r\n]+/),
                    a = {};
                  e.forEach(function (e) {
                    let t = e.split(": "),
                      i = t.shift(),
                      r = t.join(": ");
                    i && void 0 !== i && (a[i] = r);
                  }),
                    o({
                      request: {
                        method: u,
                        url: t,
                        data: i,
                        headers: r || void 0,
                        signal: n,
                        onProgress: s,
                      },
                      data: l.response,
                      headers: a,
                      status: l.status,
                    });
                }
              }),
              (l.onerror = (e) => {
                c || a(new h(e));
              }),
              s &&
                "function" == typeof s &&
                (l.upload.onprogress = (e) => {
                  e.lengthComputable
                    ? s({ isComputable: !0, value: e.loaded / e.total })
                    : s({ isComputable: !1 });
                }),
              i ? l.send(i) : l.send();
          }),
        b = ({ name: e }) => (e ? [e] : []);
      var w,
        P,
        _,
        S,
        C = () => new FormData();
      let E = (e) => !1,
        F = (e) => "undefined" != typeof Blob && e instanceof Blob,
        T = (e) => "undefined" != typeof File && e instanceof File,
        O = (e) =>
          !!e &&
          "object" == typeof e &&
          !Array.isArray(e) &&
          "uri" in e &&
          "string" == typeof e.uri,
        k = (e) => F(e) || T(e) || E() || O(e),
        x = (e) => "string" == typeof e || "number" == typeof e || void 0 === e,
        A = (e) => !!e && "object" == typeof e && !Array.isArray(e),
        D = (e) => !!e && "object" == typeof e && "data" in e && k(e.data);
      function U(e) {
        let t = C();
        for (let i of (function (e) {
          let t = [];
          for (let [i, r] of Object.entries(e))
            !(function e(t, i, r) {
              if (Array.isArray(r)) for (let n of r) e(t, `${i}[]`, n);
              else if (D(r)) {
                let { name: e, contentType: n } = r,
                  s = (function (e, ...t) {
                    return e;
                  })(r.data, e, n ?? g),
                  o = b({ name: e, contentType: n });
                t.push([i, s, ...o]);
              } else if (A(r))
                for (let [e, n] of Object.entries(r))
                  void 0 !== n && t.push([`${i}[${e}]`, String(n)]);
              else x(r) && r && t.push([i, r.toString()]);
            })(t, i, r);
          return t;
        })(e)) {
          let [e, r, ...n] = i;
          t.append(e, r, ...n);
        }
        return t;
      }
      class R extends u {
        code;
        request;
        response;
        headers;
        constructor(e, t, i, r, n) {
          super(),
            (this.name = "UploadError"),
            (this.message = e),
            (this.code = t),
            (this.request = i),
            (this.response = r),
            (this.headers = n),
            Object.setPrototypeOf(this, R.prototype);
        }
      }
      let I = (e) => {
          let t = new URLSearchParams();
          for (let [i, r] of Object.entries(e))
            r && "object" == typeof r && !Array.isArray(r)
              ? Object.entries(r)
                  .filter((e) => e[1] ?? !1)
                  .forEach((e) => t.set(`${i}[${e[0]}]`, String(e[1])))
              : Array.isArray(r)
              ? r.forEach((e) => {
                  t.append(`${i}[]`, e);
                })
              : "string" == typeof r && r
              ? t.set(i, r)
              : "number" == typeof r && t.set(i, r.toString());
          return t.toString();
        },
        M = (e, t, i) => {
          let r = new URL(e);
          return (
            (r.pathname = (r.pathname + t).replace("//", "/")),
            i && (r.search = I(i)),
            r.toString()
          );
        };
      function N(e) {
        return (function ({
          libraryName: e,
          libraryVersion: t,
          userAgent: i,
          publicKey: r = "",
          integration: n = "",
        }) {
          let s = "JavaScript";
          if ("string" == typeof i) return i;
          if ("function" == typeof i)
            return i({
              publicKey: r,
              libraryName: e,
              libraryVersion: t,
              languageName: s,
              integration: n,
            });
          let o = [e, t, r].filter(Boolean).join("/"),
            a = [s, n].filter(Boolean).join("; ");
          return `${o} (${a})`;
        })({
          libraryName: "UploadcareUploadClient",
          libraryVersion: "6.14.1",
          ...e,
        });
      }
      function B(e, t) {
        let { retryThrottledRequestMaxTimes: i, retryNetworkErrorMaxTimes: r } =
          t;
        return (function (e, t = l) {
          let i = 0;
          return (function e(r) {
            let n = Math.round(t.time * t.factor ** i);
            return r({
              attempt: i,
              retry: (t) => a(t ?? n).then(() => ((i += 1), e(r))),
            });
          })(e);
        })(({ attempt: t, retry: n }) =>
          e().catch((e) => {
            if ("response" in e && e?.code === "RequestThrottledError" && t < i)
              return n(
                (function (e) {
                  let { headers: t } = e || {};
                  if (!t || "string" != typeof t["retry-after"]) return 15e3;
                  let i = parseInt(t["retry-after"], 10);
                  return Number.isFinite(i) ? 1e3 * i : 15e3;
                })(e)
              );
            if (e instanceof h && t < r) return n((t + 1) * 1e3);
            throw e;
          })
        );
      }
      let L = (e) => {
          let t = "";
          return (F(e) || T(e) || O(e)) && (t = e.type), t || g;
        },
        j = (e) => {
          let t = "";
          return (
            T(e) && e.name
              ? (t = e.name)
              : F(e) || E()
              ? (t = "")
              : O(e) && e.name && (t = e.name),
            t || y
          );
        };
      function z(e) {
        return void 0 === e || "auto" === e ? "auto" : e ? "1" : "0";
      }
      function $(
        e,
        {
          publicKey: t,
          fileName: i,
          contentType: r,
          baseURL: n = m.baseURL,
          secureSignature: s,
          secureExpire: a,
          store: l,
          signal: u,
          onProgress: h,
          source: d = "local",
          integration: p,
          userAgent: c,
          retryThrottledRequestMaxTimes: f = m.retryThrottledRequestMaxTimes,
          retryNetworkErrorMaxTimes: g = m.retryNetworkErrorMaxTimes,
          metadata: y,
        }
      ) {
        return B(
          () =>
            v({
              method: "POST",
              url: M(n, "/base/", { jsonerrors: 1 }),
              headers: {
                "X-UC-User-Agent": N({
                  publicKey: t,
                  integration: p,
                  userAgent: c,
                }),
              },
              data: U({
                file: { data: e, name: i || j(e), contentType: r || L(e) },
                UPLOADCARE_PUB_KEY: t,
                UPLOADCARE_STORE: z(l),
                signature: s,
                expire: a,
                source: d,
                metadata: y,
              }),
              signal: u,
              onProgress: h,
            }).then(({ data: e, headers: t, request: i }) => {
              let r = o(JSON.parse(e));
              if (!("error" in r)) return r;
              throw new R(r.error.content, r.error.errorCode, i, r, t);
            }),
          { retryNetworkErrorMaxTimes: g, retryThrottledRequestMaxTimes: f }
        );
      }
      function q(
        e,
        {
          publicKey: t,
          baseURL: i = m.baseURL,
          store: r,
          fileName: n,
          checkForUrlDuplicates: s,
          saveUrlForRecurrentUploads: a,
          secureSignature: l,
          secureExpire: u,
          source: h = "url",
          signal: d,
          integration: p,
          userAgent: c,
          retryThrottledRequestMaxTimes: f = m.retryThrottledRequestMaxTimes,
          retryNetworkErrorMaxTimes: g = m.retryNetworkErrorMaxTimes,
          metadata: y,
        }
      ) {
        return B(
          () =>
            v({
              method: "POST",
              headers: {
                "X-UC-User-Agent": N({
                  publicKey: t,
                  integration: p,
                  userAgent: c,
                }),
              },
              url: M(i, "/from_url/", {
                jsonerrors: 1,
                pub_key: t,
                source_url: e,
                store: z(r),
                filename: n,
                check_URL_duplicates: s ? 1 : void 0,
                save_URL_duplicates: a ? 1 : void 0,
                signature: l,
                expire: u,
                source: h,
                metadata: y,
              }),
              signal: d,
            }).then(({ data: e, headers: t, request: i }) => {
              let r = o(JSON.parse(e));
              if (!("error" in r)) return r;
              throw new R(r.error.content, r.error.errorCode, i, r, t);
            }),
          { retryNetworkErrorMaxTimes: g, retryThrottledRequestMaxTimes: f }
        );
      }
      ((w = _ || (_ = {})).Token = "token"),
        (w.FileInfo = "file_info"),
        ((P = S || (S = {})).Unknown = "unknown"),
        (P.Waiting = "waiting"),
        (P.Progress = "progress"),
        (P.Error = "error"),
        (P.Success = "success");
      let H = (e) => "status" in e && e.status === S.Error;
      function V(
        e,
        {
          publicKey: t,
          baseURL: i = m.baseURL,
          signal: r,
          integration: n,
          userAgent: s,
          retryThrottledRequestMaxTimes: a = m.retryThrottledRequestMaxTimes,
          retryNetworkErrorMaxTimes: l = m.retryNetworkErrorMaxTimes,
        } = {}
      ) {
        return B(
          () =>
            v({
              method: "GET",
              headers: t
                ? {
                    "X-UC-User-Agent": N({
                      publicKey: t,
                      integration: n,
                      userAgent: s,
                    }),
                  }
                : void 0,
              url: M(i, "/from_url/status/", { jsonerrors: 1, token: e }),
              signal: r,
            }).then(({ data: e, headers: t, request: i }) => {
              let r = o(JSON.parse(e));
              if (!("error" in r) || H(r)) return r;
              throw new R(r.error.content, r.error.errorCode, i, r, t);
            }),
          { retryNetworkErrorMaxTimes: l, retryThrottledRequestMaxTimes: a }
        );
      }
      function W(
        e,
        {
          publicKey: t,
          baseURL: i = m.baseURL,
          jsonpCallback: r,
          secureSignature: n,
          secureExpire: s,
          signal: a,
          source: l,
          integration: u,
          userAgent: h,
          retryThrottledRequestMaxTimes: d = m.retryThrottledRequestMaxTimes,
          retryNetworkErrorMaxTimes: p = m.retryNetworkErrorMaxTimes,
        }
      ) {
        return B(
          () =>
            v({
              method: "POST",
              headers: {
                "X-UC-User-Agent": N({
                  publicKey: t,
                  integration: u,
                  userAgent: h,
                }),
              },
              url: M(i, "/group/", { jsonerrors: 1 }),
              data: U({
                files: e,
                callback: r,
                pub_key: t,
                signature: n,
                expire: s,
                source: l,
              }),
              signal: a,
            }).then(({ data: e, headers: t, request: i }) => {
              let r = o(JSON.parse(e));
              if (!("error" in r)) return r;
              throw new R(r.error.content, r.error.errorCode, i, r, t);
            }),
          { retryNetworkErrorMaxTimes: p, retryThrottledRequestMaxTimes: d }
        );
      }
      function G(
        e,
        {
          publicKey: t,
          baseURL: i = m.baseURL,
          signal: r,
          source: n,
          integration: s,
          userAgent: a,
          retryThrottledRequestMaxTimes: l = m.retryThrottledRequestMaxTimes,
          retryNetworkErrorMaxTimes: u = m.retryNetworkErrorMaxTimes,
        }
      ) {
        return B(
          () =>
            v({
              method: "GET",
              headers: {
                "X-UC-User-Agent": N({
                  publicKey: t,
                  integration: s,
                  userAgent: a,
                }),
              },
              url: M(i, "/info/", {
                jsonerrors: 1,
                pub_key: t,
                file_id: e,
                source: n,
              }),
              signal: r,
            }).then(({ data: e, headers: t, request: i }) => {
              let r = o(JSON.parse(e));
              if (!("error" in r)) return r;
              throw new R(r.error.content, r.error.errorCode, i, r, t);
            }),
          { retryThrottledRequestMaxTimes: l, retryNetworkErrorMaxTimes: u }
        );
      }
      function K(
        e,
        {
          publicKey: t,
          contentType: i,
          fileName: r,
          multipartChunkSize: n = m.multipartChunkSize,
          baseURL: s = "",
          secureSignature: a,
          secureExpire: l,
          store: u,
          signal: h,
          source: d = "local",
          integration: p,
          userAgent: c,
          retryThrottledRequestMaxTimes: f = m.retryThrottledRequestMaxTimes,
          retryNetworkErrorMaxTimes: b = m.retryNetworkErrorMaxTimes,
          metadata: w,
        }
      ) {
        return B(
          () =>
            v({
              method: "POST",
              url: M(s, "/multipart/start/", { jsonerrors: 1 }),
              headers: {
                "X-UC-User-Agent": N({
                  publicKey: t,
                  integration: p,
                  userAgent: c,
                }),
              },
              data: U({
                filename: r || y,
                size: e,
                content_type: i || g,
                part_size: n,
                UPLOADCARE_STORE: z(u),
                UPLOADCARE_PUB_KEY: t,
                signature: a,
                expire: l,
                source: d,
                metadata: w,
              }),
              signal: h,
            }).then(({ data: e, headers: t, request: i }) => {
              let r = o(JSON.parse(e));
              if (!("error" in r))
                return (
                  (r.parts = Object.keys(r.parts).map(
                    (e) => r.parts[Number(e)]
                  )),
                  r
                );
              throw new R(r.error.content, r.error.errorCode, i, r, t);
            }),
          { retryThrottledRequestMaxTimes: f, retryNetworkErrorMaxTimes: b }
        );
      }
      function Z(
        e,
        t,
        {
          contentType: i,
          signal: r,
          onProgress: n,
          retryThrottledRequestMaxTimes: s = m.retryThrottledRequestMaxTimes,
          retryNetworkErrorMaxTimes: o = m.retryNetworkErrorMaxTimes,
        }
      ) {
        return B(
          () =>
            v({
              method: "PUT",
              url: t,
              data: e,
              onProgress: n,
              signal: r,
              headers: { "Content-Type": i || g },
            })
              .then((e) => (n && n({ isComputable: !0, value: 1 }), e))
              .then(({ status: e }) => ({ code: e })),
          { retryThrottledRequestMaxTimes: s, retryNetworkErrorMaxTimes: o }
        );
      }
      function X(
        e,
        {
          publicKey: t,
          baseURL: i = m.baseURL,
          source: r = "local",
          signal: n,
          integration: s,
          userAgent: a,
          retryThrottledRequestMaxTimes: l = m.retryThrottledRequestMaxTimes,
          retryNetworkErrorMaxTimes: u = m.retryNetworkErrorMaxTimes,
        }
      ) {
        return B(
          () =>
            v({
              method: "POST",
              url: M(i, "/multipart/complete/", { jsonerrors: 1 }),
              headers: {
                "X-UC-User-Agent": N({
                  publicKey: t,
                  integration: s,
                  userAgent: a,
                }),
              },
              data: U({ uuid: e, UPLOADCARE_PUB_KEY: t, source: r }),
              signal: n,
            }).then(({ data: e, headers: t, request: i }) => {
              let r = o(JSON.parse(e));
              if (!("error" in r)) return r;
              throw new R(r.error.content, r.error.errorCode, i, r, t);
            }),
          { retryThrottledRequestMaxTimes: l, retryNetworkErrorMaxTimes: u }
        );
      }
      function Y(
        e,
        {
          publicKey: t,
          baseURL: i,
          source: r,
          integration: n,
          userAgent: s,
          retryThrottledRequestMaxTimes: o,
          retryNetworkErrorMaxTimes: a,
          signal: l,
          onProgress: u,
        }
      ) {
        return f({
          check: (l) =>
            G(e, {
              publicKey: t,
              baseURL: i,
              signal: l,
              source: r,
              integration: n,
              userAgent: s,
              retryThrottledRequestMaxTimes: o,
              retryNetworkErrorMaxTimes: a,
            }).then((e) =>
              e.isReady ? e : (u && u({ isComputable: !0, value: 1 }), !1)
            ),
          signal: l,
        });
      }
      class J {
        uuid;
        name = null;
        size = null;
        isStored = null;
        isImage = null;
        mimeType = null;
        cdnUrl = null;
        s3Url = null;
        originalFilename = null;
        imageInfo = null;
        videoInfo = null;
        contentInfo = null;
        metadata = null;
        s3Bucket = null;
        defaultEffects = null;
        constructor(e, { baseCDN: t = m.baseCDN, fileName: i } = {}) {
          let { uuid: r, s3Bucket: n } = e,
            s = M(t, `${r}/`),
            o = n
              ? M(`https://${n}.s3.amazonaws.com/`, `${r}/${e.filename}`)
              : null;
          (this.uuid = r),
            (this.name = i || e.filename),
            (this.size = e.size),
            (this.isStored = e.isStored),
            (this.isImage = e.isImage),
            (this.mimeType = e.mimeType),
            (this.cdnUrl = s),
            (this.originalFilename = e.originalFilename),
            (this.imageInfo = e.imageInfo),
            (this.videoInfo = e.videoInfo),
            (this.contentInfo = e.contentInfo),
            (this.metadata = e.metadata || null),
            (this.s3Bucket = n || null),
            (this.s3Url = o),
            "defaultEffects" in e && (this.defaultEffects = e.defaultEffects);
        }
      }
      let Q = (
          e,
          {
            publicKey: t,
            fileName: i,
            baseURL: r,
            secureSignature: n,
            secureExpire: s,
            store: o,
            contentType: a,
            signal: l,
            onProgress: u,
            source: h,
            integration: d,
            userAgent: p,
            retryThrottledRequestMaxTimes: c,
            retryNetworkErrorMaxTimes: f,
            baseCDN: m,
            metadata: g,
          }
        ) =>
          $(e, {
            publicKey: t,
            fileName: i,
            contentType: a,
            baseURL: r,
            secureSignature: n,
            secureExpire: s,
            store: o,
            signal: l,
            onProgress: u,
            source: h,
            integration: d,
            userAgent: p,
            retryThrottledRequestMaxTimes: c,
            retryNetworkErrorMaxTimes: f,
            metadata: g,
          })
            .then(({ file: e }) =>
              Y(e, {
                publicKey: t,
                baseURL: r,
                source: h,
                integration: d,
                userAgent: p,
                retryThrottledRequestMaxTimes: c,
                retryNetworkErrorMaxTimes: f,
                onProgress: u,
                signal: l,
              })
            )
            .then((e) => new J(e, { baseCDN: m })),
        ee = (
          e,
          {
            publicKey: t,
            fileName: i,
            baseURL: r,
            signal: n,
            onProgress: s,
            source: o,
            integration: a,
            userAgent: l,
            retryThrottledRequestMaxTimes: u,
            retryNetworkErrorMaxTimes: h,
            baseCDN: d,
          }
        ) =>
          G(e, {
            publicKey: t,
            baseURL: r,
            signal: n,
            source: o,
            integration: a,
            userAgent: l,
            retryThrottledRequestMaxTimes: u,
            retryNetworkErrorMaxTimes: h,
          })
            .then((e) => new J(e, { baseCDN: d, fileName: i }))
            .then((e) => (s && s({ isComputable: !0, value: 1 }), e)),
        et = (e, { signal: t } = {}) => {
          let i = null,
            r = null,
            n = e.map(() => new AbortController()),
            s = (e) => () => {
              (r = e), n.forEach((t, i) => i !== e && t.abort());
            };
          return (
            d(t, () => {
              n.forEach((e) => e.abort());
            }),
            Promise.all(
              e.map((e, t) => {
                let r = s(t);
                return Promise.resolve()
                  .then(() => e({ stopRace: r, signal: n[t].signal }))
                  .then((e) => (r(), e))
                  .catch((e) => ((i = e), null));
              })
            ).then((e) => {
              if (null !== r) return e[r];
              throw i;
            })
          );
        };
      var ei = window.WebSocket;
      class er {
        events = Object.create({});
        emit(e, t) {
          this.events[e]?.forEach((e) => e(t));
        }
        on(e, t) {
          (this.events[e] = this.events[e] || []), this.events[e].push(t);
        }
        off(e, t) {
          t
            ? (this.events[e] = this.events[e].filter((e) => e !== t))
            : (this.events[e] = []);
        }
      }
      let en = (e, t) =>
        "success" === e
          ? { status: S.Success, ...t }
          : "progress" === e
          ? { status: S.Progress, ...t }
          : { status: S.Error, ...t };
      class es {
        key;
        disconnectTime;
        ws = void 0;
        queue = [];
        isConnected = !1;
        subscribers = 0;
        emmitter = new er();
        disconnectTimeoutId = null;
        constructor(e, t = 3e4) {
          (this.key = e), (this.disconnectTime = t);
        }
        connect() {
          if (
            (this.disconnectTimeoutId && clearTimeout(this.disconnectTimeoutId),
            !this.isConnected && !this.ws)
          ) {
            let e = `wss://ws.pusherapp.com/app/${this.key}?protocol=5&client=js&version=1.12.2`;
            (this.ws = new ei(e)),
              this.ws.addEventListener("error", (e) => {
                this.emmitter.emit("error", Error(e.message));
              }),
              this.emmitter.on("connected", () => {
                (this.isConnected = !0),
                  this.queue.forEach((e) => this.send(e.event, e.data)),
                  (this.queue = []);
              }),
              this.ws.addEventListener("message", (e) => {
                let t = JSON.parse(e.data.toString());
                switch (t.event) {
                  case "pusher:connection_established":
                    this.emmitter.emit("connected", void 0);
                    break;
                  case "pusher:ping":
                    this.send("pusher:pong", {});
                    break;
                  case "progress":
                  case "success":
                  case "fail":
                    this.emmitter.emit(
                      t.channel,
                      en(t.event, JSON.parse(t.data))
                    );
                }
              });
          }
        }
        disconnect() {
          let e = () => {
            this.ws?.close(), (this.ws = void 0), (this.isConnected = !1);
          };
          this.disconnectTime
            ? (this.disconnectTimeoutId = setTimeout(() => {
                e();
              }, this.disconnectTime))
            : e();
        }
        send(e, t) {
          let i = JSON.stringify({ event: e, data: t });
          this.ws?.send(i);
        }
        subscribe(e, t) {
          (this.subscribers += 1), this.connect();
          let i = `task-status-${e}`,
            r = { event: "pusher:subscribe", data: { channel: i } };
          this.emmitter.on(i, t),
            this.isConnected ? this.send(r.event, r.data) : this.queue.push(r);
        }
        unsubscribe(e) {
          this.subscribers -= 1;
          let t = `task-status-${e}`,
            i = { event: "pusher:unsubscribe", data: { channel: t } };
          this.emmitter.off(t),
            this.isConnected
              ? this.send(i.event, i.data)
              : (this.queue = this.queue.filter((e) => e.data.channel !== t)),
            0 === this.subscribers && this.disconnect();
        }
        onError(e) {
          return (
            this.emmitter.on("error", e), () => this.emmitter.off("error", e)
          );
        }
      }
      let eo = null,
        ea = (e) => (
          eo || (eo = new es(e, "undefined" == typeof window ? 0 : 3e4)), eo
        ),
        el = (e) => {
          ea(e).connect();
        },
        eu = ({ token: e, pusherKey: t, signal: i, onProgress: r }) =>
          new Promise((n, s) => {
            let o = ea(t),
              a = o.onError(s),
              l = () => {
                a(), o.unsubscribe(e);
              };
            d(i, () => {
              l(), s(new p("pusher cancelled"));
            }),
              o.subscribe(e, (e) => {
                switch (e.status) {
                  case S.Progress:
                    r &&
                      ("unknown" === e.total
                        ? r({ isComputable: !1 })
                        : r({ isComputable: !0, value: e.done / e.total }));
                    break;
                  case S.Success:
                    l(),
                      r && r({ isComputable: !0, value: e.done / e.total }),
                      n(e);
                    break;
                  case S.Error:
                    l(), s(new R(e.msg, e.error_code));
                }
              });
          }),
        eh = (
          e,
          {
            publicKey: t,
            fileName: i,
            baseURL: r,
            baseCDN: n,
            checkForUrlDuplicates: s,
            saveUrlForRecurrentUploads: o,
            secureSignature: a,
            secureExpire: l,
            store: u,
            signal: h,
            onProgress: d,
            source: p,
            integration: c,
            userAgent: g,
            retryThrottledRequestMaxTimes: y,
            pusherKey: v = m.pusherKey,
            metadata: b,
          }
        ) =>
          Promise.resolve(el(v))
            .then(() =>
              q(e, {
                publicKey: t,
                fileName: i,
                baseURL: r,
                checkForUrlDuplicates: s,
                saveUrlForRecurrentUploads: o,
                secureSignature: a,
                secureExpire: l,
                store: u,
                signal: h,
                source: p,
                integration: c,
                userAgent: g,
                retryThrottledRequestMaxTimes: y,
                metadata: b,
              })
            )
            .catch((e) => {
              let t = ea(v);
              return t?.disconnect(), Promise.reject(e);
            })
            .then((e) =>
              e.type === _.FileInfo
                ? e
                : et(
                    [
                      ({ signal: i }) =>
                        (function ({
                          token: e,
                          publicKey: t,
                          baseURL: i,
                          integration: r,
                          userAgent: n,
                          retryThrottledRequestMaxTimes: s,
                          retryNetworkErrorMaxTimes: o,
                          onProgress: a,
                          signal: l,
                        }) {
                          return f({
                            check: (l) =>
                              V(e, {
                                publicKey: t,
                                baseURL: i,
                                integration: r,
                                userAgent: n,
                                retryThrottledRequestMaxTimes: s,
                                retryNetworkErrorMaxTimes: o,
                                signal: l,
                              }).then((t) => {
                                switch (t.status) {
                                  case S.Error:
                                    return new R(t.error, t.errorCode);
                                  case S.Waiting:
                                    return !1;
                                  case S.Unknown:
                                    return new R(`Token "${e}" was not found.`);
                                  case S.Progress:
                                    return (
                                      a &&
                                        ("unknown" === t.total
                                          ? a({ isComputable: !1 })
                                          : a({
                                              isComputable: !0,
                                              value: t.done / t.total,
                                            })),
                                      !1
                                    );
                                  case S.Success:
                                    return (
                                      a &&
                                        a({
                                          isComputable: !0,
                                          value: t.done / t.total,
                                        }),
                                      t
                                    );
                                  default:
                                    throw Error("Unknown status");
                                }
                              }),
                            signal: l,
                          });
                        })({
                          token: e.token,
                          publicKey: t,
                          baseURL: r,
                          integration: c,
                          userAgent: g,
                          retryThrottledRequestMaxTimes: y,
                          onProgress: d,
                          signal: i,
                        }),
                      ({ signal: t }) =>
                        eu({
                          token: e.token,
                          pusherKey: v,
                          signal: t,
                          onProgress: d,
                        }),
                    ],
                    { signal: h }
                  )
            )
            .then((e) => {
              if (e instanceof R) throw e;
              return e;
            })
            .then((e) =>
              Y(e.uuid, {
                publicKey: t,
                baseURL: r,
                integration: c,
                userAgent: g,
                retryThrottledRequestMaxTimes: y,
                onProgress: d,
                signal: h,
              })
            )
            .then((e) => new J(e, { baseCDN: n })),
        ed = new WeakMap(),
        ep = async (e) => {
          if (ed.has(e)) return ed.get(e);
          let t = await fetch(e.uri).then((e) => e.blob());
          return ed.set(e, t), t;
        },
        ec = async (e) => {
          if (T(e) || F(e)) return e.size;
          if (O(e)) return (await ep(e)).size;
          throw Error("Unknown file type. Cannot determine file size.");
        },
        ef = (e, t = m.multipartMinFileSize) => e >= t,
        em = (e) =>
          !k(e) &&
          /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/.test(
            e
          ),
        eg = (e) => {
          let t = RegExp(
            "^(?:\\w+:)?\\/\\/([^\\s\\.]+\\.\\S{2}|localhost[\\:?\\d]*)\\S*$"
          );
          return !k(e) && t.test(e);
        },
        ey = (e, t) =>
          new Promise((i, r) => {
            let n = [],
              s = !1,
              o = t.length,
              a = [...t],
              l = () => {
                let e = t.length - a.length,
                  u = a.shift();
                u &&
                  u()
                    .then((t) => {
                      s || ((n[e] = t), (o -= 1) ? l() : i(n));
                    })
                    .catch((e) => {
                      (s = !0), r(e);
                    });
              };
            for (let t = 0; t < e; t++) l();
          }),
        ev = (e, t, i, r) => {
          let n = r * t;
          return e.slice(n, Math.min(n + r, i));
        },
        eb = async (e, t, i) => (r) => ev(e, r, t, i),
        ew = (
          e,
          t,
          {
            publicKey: i,
            contentType: r,
            onProgress: n,
            signal: s,
            integration: o,
            retryThrottledRequestMaxTimes: a,
            retryNetworkErrorMaxTimes: l,
          }
        ) =>
          Z(e, t, {
            publicKey: i,
            contentType: r,
            onProgress: n,
            signal: s,
            integration: o,
            retryThrottledRequestMaxTimes: a,
            retryNetworkErrorMaxTimes: l,
          }),
        eP = async (
          e,
          {
            publicKey: t,
            fileName: i,
            fileSize: r,
            baseURL: n,
            secureSignature: s,
            secureExpire: o,
            store: a,
            signal: l,
            onProgress: u,
            source: h,
            integration: d,
            userAgent: p,
            retryThrottledRequestMaxTimes: c,
            retryNetworkErrorMaxTimes: f,
            contentType: g,
            multipartChunkSize: y = m.multipartChunkSize,
            maxConcurrentRequests: v = m.maxConcurrentRequests,
            baseCDN: b,
            metadata: w,
          }
        ) => {
          let P;
          let _ = r ?? (await ec(e)),
            S = (e, t) => {
              if (!u) return;
              P || (P = Array(e).fill(0));
              let i = (e) => e.reduce((e, t) => e + t, 0);
              return (r) => {
                r.isComputable &&
                  ((P[t] = r.value), u({ isComputable: !0, value: i(P) / e }));
              };
            };
          return K(_, {
            publicKey: t,
            contentType: (g ||= L(e)),
            fileName: i || j(e),
            baseURL: n,
            secureSignature: s,
            secureExpire: o,
            store: a,
            signal: l,
            source: h,
            integration: d,
            userAgent: p,
            retryThrottledRequestMaxTimes: c,
            retryNetworkErrorMaxTimes: f,
            metadata: w,
          })
            .then(async ({ uuid: i, parts: r }) => {
              let n = await eb(e, _, y);
              return Promise.all([
                i,
                ey(
                  v,
                  r.map(
                    (e, i) => () =>
                      ew(n(i), e, {
                        publicKey: t,
                        contentType: g,
                        onProgress: S(r.length, i),
                        signal: l,
                        integration: d,
                        retryThrottledRequestMaxTimes: c,
                        retryNetworkErrorMaxTimes: f,
                      })
                  )
                ),
              ]);
            })
            .then(([e]) =>
              X(e, {
                publicKey: t,
                baseURL: n,
                source: h,
                integration: d,
                userAgent: p,
                retryThrottledRequestMaxTimes: c,
                retryNetworkErrorMaxTimes: f,
              })
            )
            .then((e) =>
              e.isReady
                ? e
                : Y(e.uuid, {
                    publicKey: t,
                    baseURL: n,
                    source: h,
                    integration: d,
                    userAgent: p,
                    retryThrottledRequestMaxTimes: c,
                    retryNetworkErrorMaxTimes: f,
                    onProgress: u,
                    signal: l,
                  })
            )
            .then((e) => new J(e, { baseCDN: b }));
        };
      async function e_(
        e,
        {
          publicKey: t,
          fileName: i,
          baseURL: r = m.baseURL,
          secureSignature: n,
          secureExpire: s,
          store: o,
          signal: a,
          onProgress: l,
          source: u,
          integration: h,
          userAgent: d,
          retryThrottledRequestMaxTimes: p,
          retryNetworkErrorMaxTimes: c,
          contentType: f,
          multipartMinFileSize: g,
          multipartChunkSize: y,
          maxConcurrentRequests: v,
          baseCDN: b = m.baseCDN,
          checkForUrlDuplicates: w,
          saveUrlForRecurrentUploads: P,
          pusherKey: _,
          metadata: S,
        }
      ) {
        if (k(e)) {
          let m = await ec(e);
          return ef(m, g)
            ? eP(e, {
                publicKey: t,
                contentType: f,
                multipartChunkSize: y,
                fileSize: m,
                fileName: i,
                baseURL: r,
                secureSignature: n,
                secureExpire: s,
                store: o,
                signal: a,
                onProgress: l,
                source: u,
                integration: h,
                userAgent: d,
                maxConcurrentRequests: v,
                retryThrottledRequestMaxTimes: p,
                retryNetworkErrorMaxTimes: c,
                baseCDN: b,
                metadata: S,
              })
            : Q(e, {
                publicKey: t,
                fileName: i,
                contentType: f,
                baseURL: r,
                secureSignature: n,
                secureExpire: s,
                store: o,
                signal: a,
                onProgress: l,
                source: u,
                integration: h,
                userAgent: d,
                retryThrottledRequestMaxTimes: p,
                retryNetworkErrorMaxTimes: c,
                baseCDN: b,
                metadata: S,
              });
        }
        if (eg(e))
          return eh(e, {
            publicKey: t,
            fileName: i,
            baseURL: r,
            baseCDN: b,
            checkForUrlDuplicates: w,
            saveUrlForRecurrentUploads: P,
            secureSignature: n,
            secureExpire: s,
            store: o,
            signal: a,
            onProgress: l,
            source: u,
            integration: h,
            userAgent: d,
            retryThrottledRequestMaxTimes: p,
            retryNetworkErrorMaxTimes: c,
            pusherKey: _,
            metadata: S,
          });
        if (em(e))
          return ee(e, {
            publicKey: t,
            fileName: i,
            baseURL: r,
            signal: a,
            onProgress: l,
            source: u,
            integration: h,
            userAgent: d,
            retryThrottledRequestMaxTimes: p,
            retryNetworkErrorMaxTimes: c,
            baseCDN: b,
          });
        throw TypeError(`File uploading from "${e}" is not supported`);
      }
      class eS {
        uuid;
        filesCount;
        totalSize;
        isStored;
        isImage;
        cdnUrl;
        files;
        createdAt;
        storedAt = null;
        constructor(e, { baseCDN: t = m.baseCDN } = {}) {
          (this.uuid = e.id), (this.filesCount = e.filesCount);
          let i = e.files.filter(Boolean);
          (this.totalSize = Object.values(i).reduce((e, t) => e + t.size, 0)),
            (this.isStored = !!e.datetimeStored),
            (this.isImage = !!Object.values(i).filter((e) => e.isImage).length),
            (this.cdnUrl = e.cdnUrl),
            (this.files = i.map((e) => new J(e, { baseCDN: t }))),
            (this.createdAt = e.datetimeCreated),
            (this.storedAt = e.datetimeStored);
        }
      }
      let eC = (e) => {
          for (let t of e) if (!k(t)) return !1;
          return !0;
        },
        eE = (e) => {
          for (let t of e) if (!em(t)) return !1;
          return !0;
        },
        eF = (e) => {
          for (let t of e) if (!eg(t)) return !1;
          return !0;
        },
        eT = (e, t) => ({ ...t, ...e });
      class eO {
        settings;
        constructor(e) {
          this.settings = Object.assign({}, m, e);
        }
        updateSettings(e) {
          this.settings = Object.assign(this.settings, e);
        }
        getSettings() {
          return this.settings;
        }
        base(e, t = {}) {
          return $(e, eT(t, this.getSettings()));
        }
        info(e, t = {}) {
          return G(e, eT(t, this.getSettings()));
        }
        fromUrl(e, t = {}) {
          return q(e, eT(t, this.getSettings()));
        }
        fromUrlStatus(e, t = {}) {
          return V(e, eT(t, this.getSettings()));
        }
        group(e, t = {}) {
          return W(e, eT(t, this.getSettings()));
        }
        groupInfo(e, t = {}) {
          return (function (
            e,
            {
              publicKey: t,
              baseURL: i = m.baseURL,
              signal: r,
              source: n,
              integration: s,
              userAgent: a,
              retryThrottledRequestMaxTimes:
                l = m.retryThrottledRequestMaxTimes,
              retryNetworkErrorMaxTimes: u = m.retryNetworkErrorMaxTimes,
            }
          ) {
            return B(
              () =>
                v({
                  method: "GET",
                  headers: {
                    "X-UC-User-Agent": N({
                      publicKey: t,
                      integration: s,
                      userAgent: a,
                    }),
                  },
                  url: M(i, "/group/info/", {
                    jsonerrors: 1,
                    pub_key: t,
                    group_id: e,
                    source: n,
                  }),
                  signal: r,
                }).then(({ data: e, headers: t, request: i }) => {
                  let r = o(JSON.parse(e));
                  if (!("error" in r)) return r;
                  throw new R(r.error.content, r.error.errorCode, i, r, t);
                }),
              { retryThrottledRequestMaxTimes: l, retryNetworkErrorMaxTimes: u }
            );
          })(e, eT(t, this.getSettings()));
        }
        multipartStart(e, t = {}) {
          return K(e, eT(t, this.getSettings()));
        }
        multipartUpload(e, t, i = {}) {
          return Z(e, t, eT(i, this.getSettings()));
        }
        multipartComplete(e, t = {}) {
          return X(e, eT(t, this.getSettings()));
        }
        uploadFile(e, t = {}) {
          return e_(e, eT(t, this.getSettings()));
        }
        uploadFileGroup(e, t = {}) {
          return (function (
            e,
            {
              publicKey: t,
              fileName: i,
              baseURL: r = m.baseURL,
              secureSignature: n,
              secureExpire: s,
              store: o,
              signal: a,
              onProgress: l,
              source: u,
              integration: h,
              userAgent: d,
              retryThrottledRequestMaxTimes: p,
              retryNetworkErrorMaxTimes: c,
              contentType: f,
              multipartChunkSize: g = m.multipartChunkSize,
              baseCDN: y = m.baseCDN,
              checkForUrlDuplicates: v,
              saveUrlForRecurrentUploads: b,
              jsonpCallback: w,
            }
          ) {
            let P;
            if (!eC(e) && !eF(e) && !eE(e))
              throw TypeError(`Group uploading from "${e}" is not supported`);
            let _ = !0,
              S = e.length,
              C = (e, t) => {
                if (!l) return;
                P || (P = Array(e).fill(0));
                let i = (t) => t.reduce((e, t) => e + t) / e;
                return (e) => {
                  if (!e.isComputable || !_) {
                    (_ = !1), l({ isComputable: !1 });
                    return;
                  }
                  (P[t] = e.value), l({ isComputable: !0, value: i(P) });
                };
              };
            return Promise.all(
              e.map((e, l) =>
                k(e) || eg(e)
                  ? e_(e, {
                      publicKey: t,
                      fileName: i,
                      baseURL: r,
                      secureSignature: n,
                      secureExpire: s,
                      store: o,
                      signal: a,
                      onProgress: C(S, l),
                      source: u,
                      integration: h,
                      userAgent: d,
                      retryThrottledRequestMaxTimes: p,
                      retryNetworkErrorMaxTimes: c,
                      contentType: f,
                      multipartChunkSize: g,
                      baseCDN: y,
                      checkForUrlDuplicates: v,
                      saveUrlForRecurrentUploads: b,
                    }).then((e) => e.uuid)
                  : e
              )
            ).then((e) =>
              W(e, {
                publicKey: t,
                baseURL: r,
                jsonpCallback: w,
                secureSignature: n,
                secureExpire: s,
                signal: a,
                source: u,
                integration: h,
                userAgent: d,
                retryThrottledRequestMaxTimes: p,
                retryNetworkErrorMaxTimes: c,
              })
                .then((e) => new eS(e, { baseCDN: y }))
                .then((e) => (l && l({ isComputable: !0, value: 1 }), e))
            );
          })(e, eT(t, this.getSettings()));
        }
        isReadyPoll(e, t = {}) {
          return Y(e, eT(t, this.getSettings()));
        }
      }
    },
    11702: function (e, t, i) {
      "use strict";
      let r, n, s;
      i.d(t, {
        Z: function () {
          return il;
        },
      });
      var o = i(6524);
      class a extends Error {
        constructor() {
          super(...arguments), (this.name = "UserFacingApiError");
        }
      }
      var l = i(37347);
      let u = Object.prototype.toString,
        h = (e) => "[object Error]" === u.call(e),
        d = new Set([
          "network error",
          "Failed to fetch",
          "NetworkError when attempting to fetch resource.",
          "The Internet connection appears to be offline.",
          "Load failed",
          "Network request failed",
          "fetch failed",
          "terminated",
        ]);
      class p extends Error {
        constructor(e) {
          super(),
            e instanceof Error
              ? ((this.originalError = e), ({ message: e } = e))
              : ((this.originalError = Error(e)),
                (this.originalError.stack = this.stack)),
            (this.name = "AbortError"),
            (this.message = e);
        }
      }
      let c = (e, t, i) => {
        let r = i.retries - (t - 1);
        return (e.attemptNumber = t), (e.retriesLeft = r), e;
      };
      async function f(e, t) {
        return new Promise((i, r) => {
          t = {
            onFailedAttempt() {},
            retries: 10,
            shouldRetry: () => !0,
            ...t,
          };
          let n = l.operation(t),
            s = () => {
              n.stop(), r(t.signal?.reason);
            };
          t.signal &&
            !t.signal.aborted &&
            t.signal.addEventListener("abort", s, { once: !0 });
          let o = () => {
            t.signal?.removeEventListener("abort", s), n.stop();
          };
          n.attempt(async (s) => {
            try {
              let t = await e(s);
              o(), i(t);
            } catch (e) {
              try {
                if (!(e instanceof Error))
                  throw TypeError(
                    `Non-error was thrown: "${e}". You should only throw errors.`
                  );
                if (e instanceof p) throw e.originalError;
                if (
                  e instanceof TypeError &&
                  !(
                    e &&
                    h(e) &&
                    "TypeError" === e.name &&
                    "string" == typeof e.message &&
                    ("Load failed" === e.message
                      ? void 0 === e.stack
                      : d.has(e.message))
                  )
                )
                  throw e;
                if (
                  (c(e, s, t),
                  (await t.shouldRetry(e)) || (n.stop(), r(e)),
                  await t.onFailedAttempt(e),
                  !n.retry(e))
                )
                  throw n.mainError();
              } catch (e) {
                c(e, s, t), o(), r(e);
              }
            }
          });
        });
      }
      class m extends Error {
        constructor(e, t) {
          void 0 === t && (t = null),
            super(
              "This looks like a network error, the endpoint might be blocked by an internet provider or a firewall."
            ),
            (this.cause = e),
            (this.isNetworkError = !0),
            (this.request = t);
        }
      }
      function g(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      class y extends Error {
        constructor(e, t) {
          super(e),
            (this.cause = null == t ? void 0 : t.cause),
            this.cause && g(this.cause, "isNetworkError")
              ? (this.isNetworkError = this.cause.isNetworkError)
              : (this.isNetworkError = !1);
        }
      }
      var v = i(85902)(
        function (e, t, i) {
          let { progress: r, bytesUploaded: n, bytesTotal: s } = t;
          r &&
            (e.uppy.log(`Upload progress: ${r}`),
            e.uppy.emit("upload-progress", i, {
              uploader: e,
              bytesUploaded: n,
              bytesTotal: s,
            }));
        },
        300,
        { leading: !0, trailing: !0 }
      );
      class b extends Error {
        constructor() {
          super("Authorization required"),
            (this.name = "AuthError"),
            (this.isAuthError = !0);
        }
      }
      function w(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e, t))
          throw TypeError("attempted to use private field on non-instance");
        return e;
      }
      var P = 0;
      function _(e) {
        return "__private_" + P++ + "_" + e;
      }
      class S extends Error {
        constructor(e) {
          let { statusCode: t, message: i } = e;
          super(i), (this.name = "HttpError"), (this.statusCode = t);
        }
      }
      async function C(e) {
        let t;
        if (401 === e.status) throw new b();
        if (e.ok) return e.json();
        let i = `Failed request with status: ${e.status}. ${e.statusText}`;
        try {
          (t = await e.json()).message && (i = `${i} message: ${t.message}`),
            t.requestId && (i = `${i} request-Id: ${t.requestId}`);
        } catch (e) {
          throw Error(i, { cause: e });
        }
        if (e.status >= 400 && e.status <= 499 && t.message)
          throw new a(t.message);
        throw new S({ statusCode: e.status, message: i });
      }
      var E = _("companionHeaders"),
        F = _("getUrl"),
        T = _("requestSocketToken"),
        O = _("awaitRemoteFileUpload");
      r = Symbol.for("uppy test: getCompanionHeaders");
      class k {
        constructor(e, t) {
          Object.defineProperty(this, O, { value: A }),
            Object.defineProperty(this, F, { value: x }),
            Object.defineProperty(this, E, { writable: !0, value: void 0 }),
            Object.defineProperty(this, T, {
              writable: !0,
              value: async (e) => {
                var t;
                let { file: i, postBody: r, signal: n } = e;
                if ((null == (t = i.remote) ? void 0 : t.url) == null)
                  throw Error("Cannot connect to an undefined URL");
                return (
                  await this.post(
                    i.remote.url,
                    { ...i.remote.body, ...r },
                    { signal: n }
                  )
                ).token;
              },
            }),
            (this.uppy = e),
            (this.opts = t),
            (this.onReceiveResponse = this.onReceiveResponse.bind(this)),
            (w(this, E)[E] = null == t ? void 0 : t.companionHeaders);
        }
        setCompanionHeaders(e) {
          w(this, E)[E] = e;
        }
        [r]() {
          return w(this, E)[E];
        }
        get hostname() {
          let { companion: e } = this.uppy.getState(),
            t = this.opts.companionUrl;
          return (e && e[t] ? e[t] : t).replace(/\/$/, "");
        }
        async headers(e) {
          return (
            void 0 === e && (e = !1),
            {
              ...{
                Accept: "application/json",
                ...(e ? void 0 : { "Content-Type": "application/json" }),
              },
              ...w(this, E)[E],
            }
          );
        }
        onReceiveResponse(e) {
          let { headers: t } = e,
            i = this.uppy.getState().companion || {},
            r = this.opts.companionUrl;
          t.has("i-am") &&
            t.get("i-am") !== i[r] &&
            this.uppy.setState({ companion: { ...i, [r]: t.get("i-am") } });
        }
        async request(e) {
          let {
            path: t,
            method: i = "GET",
            data: r,
            skipPostResponse: n,
            signal: s,
          } = e;
          try {
            let e = await this.headers(!r),
              o = await (function () {
                return fetch(...arguments).catch((e) => {
                  if ("AbortError" === e.name) throw e;
                  throw new m(e);
                });
              })(w(this, F)[F](t), {
                method: i,
                signal: s,
                headers: e,
                credentials: this.opts.companionCookiesRule || "same-origin",
                body: r ? JSON.stringify(r) : null,
              });
            return n || this.onReceiveResponse(o), await C(o);
          } catch (e) {
            if (
              e.isAuthError ||
              "UserFacingApiError" === e.name ||
              "AbortError" === e.name
            )
              throw e;
            throw new y(`Could not ${i} ${w(this, F)[F](t)}`, { cause: e });
          }
        }
        async get(e, t) {
          return (
            "boolean" == typeof t && (t = { skipPostResponse: t }),
            this.request({ ...t, path: e })
          );
        }
        async post(e, t, i) {
          return (
            "boolean" == typeof i && (i = { skipPostResponse: i }),
            this.request({ ...i, path: e, method: "POST", data: t })
          );
        }
        async delete(e, t, i) {
          return (
            "boolean" == typeof i && (i = { skipPostResponse: i }),
            this.request({ ...i, path: e, method: "DELETE", data: t })
          );
        }
        async uploadRemoteFile(e, t, i) {
          var r = this;
          try {
            let { signal: n, getQueue: s } = i || {};
            return await f(
              async () => {
                var i;
                let o =
                  null == (i = this.uppy.getFile(e.id))
                    ? void 0
                    : i.serverToken;
                if (null != o)
                  return (
                    this.uppy.log(`Connecting to exiting websocket ${o}`),
                    w(this, O)[O]({ file: e, queue: s(), signal: n })
                  );
                let a = s().wrapPromiseFunction(
                    async function () {
                      try {
                        return await w(r, T)[T](...arguments);
                      } catch (t) {
                        if (t.isAuthError) throw new p(t);
                        if (null == t.cause) throw t;
                        let e = t.cause;
                        if (
                          "HttpError" === e.name &&
                          !(
                            [408, 409, 429, 418, 423].includes(e.statusCode) ||
                            (e.statusCode >= 500 &&
                              e.statusCode <= 599 &&
                              ![501, 505].includes(e.statusCode))
                          )
                        )
                          throw new p(e);
                        throw e;
                      }
                    },
                    { priority: -1 }
                  ),
                  l = await a({ file: e, postBody: t, signal: n }).abortOn(n);
                if (this.uppy.getFile(e.id))
                  return (
                    this.uppy.setFileState(e.id, { serverToken: l }),
                    w(this, O)[O]({
                      file: this.uppy.getFile(e.id),
                      queue: s(),
                      signal: n,
                    })
                  );
              },
              {
                retries: 10,
                signal: n,
                onFailedAttempt: (e) =>
                  this.uppy.log(
                    `Retrying upload due to: ${e.message}`,
                    "warning"
                  ),
              }
            );
          } catch (t) {
            if ("AbortError" === t.name) return;
            throw (this.uppy.emit("upload-error", e, t), t);
          }
        }
      }
      function x(e) {
        return /^(https?:|)\/\//.test(e) ? e : `${this.hostname}/${e}`;
      }
      async function A(e) {
        let t,
          { file: i, queue: r, signal: n } = e,
          { capabilities: s } = this.uppy.getState();
        try {
          return await new Promise((e, o) => {
            let a, l, u;
            let h = i.serverToken,
              d = (function (e) {
                var t;
                let i =
                    null ==
                    (t =
                      /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(
                        e
                      ))
                      ? void 0
                      : t[1],
                  r = /^http:\/\//i.test(e) ? "ws" : "wss";
                return `${r}://${i}`;
              })(i.remote.companionUrl),
              { isPaused: p } = i,
              c = (e, t) => {
                if (null == a || a.readyState !== a.OPEN) {
                  var r;
                  this.uppy.log(
                    `Cannot send "${e}" to socket ${
                      i.id
                    } because the socket state was ${String(
                      null == (r = a) ? void 0 : r.readyState
                    )}`,
                    "warning"
                  );
                  return;
                }
                a.send(
                  JSON.stringify({ action: e, payload: null != t ? t : {} })
                );
              };
            function m() {
              s.resumableUploads && (p ? c("pause") : c("resume"));
            }
            let g = async () => {
                l && l.abort(), (l = new AbortController());
                let t = (e) => {
                  var t;
                  this.uppy.setFileState(i.id, { serverToken: null }),
                    null == (t = l) || null == t.abort || t.abort(),
                    o(e);
                };
                function n() {
                  clearTimeout(u),
                    p ||
                      (u = setTimeout(
                        () =>
                          t(
                            Error(
                              "Timeout waiting for message from Companion socket"
                            )
                          ),
                        3e5
                      ));
                }
                try {
                  await r
                    .wrapPromiseFunction(async () => {
                      let r = async () =>
                        new Promise((r, s) => {
                          (a = new WebSocket(`${d}/api/${h}`)),
                            n(),
                            a.addEventListener("close", () => {
                              (a = void 0),
                                s(Error("Socket closed unexpectedly"));
                            }),
                            a.addEventListener("error", (e) => {
                              var t;
                              this.uppy.log(
                                `Companion socket error ${JSON.stringify(
                                  e
                                )}, closing socket`,
                                "warning"
                              ),
                                null == (t = a) || t.close();
                            }),
                            a.addEventListener("open", () => {
                              m();
                            }),
                            a.addEventListener("message", (r) => {
                              n();
                              try {
                                let { action: t, payload: n } = JSON.parse(
                                  r.data
                                );
                                switch (t) {
                                  case "progress":
                                    v(this, n, this.uppy.getFile(i.id));
                                    break;
                                  case "success": {
                                    var s, o, a, u;
                                    let t =
                                      null == (s = n.response)
                                        ? void 0
                                        : s.responseText;
                                    this.uppy.emit(
                                      "upload-success",
                                      this.uppy.getFile(i.id),
                                      {
                                        uploadURL: n.url,
                                        status:
                                          null !=
                                          (o =
                                            null == (a = n.response)
                                              ? void 0
                                              : a.status)
                                            ? o
                                            : 200,
                                        body: t ? JSON.parse(t) : void 0,
                                      }
                                    ),
                                      null == (u = l) ||
                                        null == u.abort ||
                                        u.abort(),
                                      e();
                                    break;
                                  }
                                  case "error": {
                                    let { message: e } = n.error;
                                    throw Object.assign(Error(e), {
                                      cause: n.error,
                                    });
                                  }
                                  default:
                                    this.uppy.log(
                                      `Companion socket unknown action ${t}`,
                                      "warning"
                                    );
                                }
                              } catch (e) {
                                t(e);
                              }
                            });
                          let o = () => {
                            this.uppy.log(`Closing socket ${i.id}`, "info"),
                              clearTimeout(u),
                              a && a.close(),
                              (a = void 0);
                          };
                          l.signal.addEventListener("abort", () => {
                            o();
                          });
                        });
                      await f(r, {
                        retries: 10,
                        signal: l.signal,
                        onFailedAttempt: () => {
                          l.signal.aborted ||
                            this.uppy.log(`Retrying websocket ${i.id}`, "info");
                        },
                      });
                    })()
                    .abortOn(l.signal);
                } catch (e) {
                  if (l.signal.aborted) return;
                  t(e);
                }
              },
              y = (e) => {
                if (s.resumableUploads) {
                  if (((p = e), a && m(), e)) {
                    var t;
                    null == (t = l) || null == t.abort || t.abort();
                  } else g();
                }
              },
              b = (t) => {
                var r;
                s.individualCancellation &&
                  t.id === i.id &&
                  (c("cancel"),
                  null == (r = l) || null == r.abort || r.abort(),
                  this.uppy.log(`upload ${i.id} was removed`, "info"),
                  e());
              },
              w = (t) => {
                var r;
                let { reason: n } = t;
                "user" === n && c("cancel"),
                  null == (r = l) || null == r.abort || r.abort(),
                  this.uppy.log(`upload ${i.id} was canceled`, "info"),
                  e();
              },
              P = (e, t) => {
                e === i.id && y(t);
              },
              _ = () => y(!0),
              S = () => y(!1);
            this.uppy.on("file-removed", b),
              this.uppy.on("cancel-all", w),
              this.uppy.on("upload-pause", P),
              this.uppy.on("pause-all", _),
              this.uppy.on("resume-all", S),
              (t = () => {
                this.uppy.off("file-removed", b),
                  this.uppy.off("cancel-all", w),
                  this.uppy.off("upload-pause", P),
                  this.uppy.off("pause-all", _),
                  this.uppy.off("resume-all", S);
              }),
              n.addEventListener("abort", () => {
                var e;
                null == (e = l) || e.abort();
              }),
              g();
          });
        } finally {
          null == t || t();
        }
      }
      function D(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e, t))
          throw TypeError("attempted to use private field on non-instance");
        return e;
      }
      (k.VERSION = "3.8.0"),
        i(2373),
        Symbol.for("uppy test: getSocket"),
        Symbol.for("uppy test: getQueued");
      var U = 0;
      function R(e) {
        return "__private_" + U++ + "_" + e;
      }
      var I = R("uppy"),
        M = R("events");
      class N {
        constructor(e) {
          Object.defineProperty(this, I, { writable: !0, value: void 0 }),
            Object.defineProperty(this, M, { writable: !0, value: [] }),
            (D(this, I)[I] = e);
        }
        on(e, t) {
          return D(this, M)[M].push([e, t]), D(this, I)[I].on(e, t);
        }
        remove() {
          for (let [e, t] of D(this, M)[M].splice(0)) D(this, I)[I].off(e, t);
        }
        onFilePause(e, t) {
          this.on("upload-pause", (i, r) => {
            e === i && t(r);
          });
        }
        onFileRemove(e, t) {
          this.on("file-removed", (i) => {
            e === i.id && t(i.id);
          });
        }
        onPause(e, t) {
          this.on("upload-pause", (i, r) => {
            e === i && t(r);
          });
        }
        onRetry(e, t) {
          this.on("upload-retry", (i) => {
            e === i && t();
          });
        }
        onRetryAll(e, t) {
          this.on("retry-all", () => {
            D(this, I)[I].getFile(e) && t();
          });
        }
        onPauseAll(e, t) {
          this.on("pause-all", () => {
            D(this, I)[I].getFile(e) && t();
          });
        }
        onCancelAll(e, t) {
          var i = this;
          this.on("cancel-all", function () {
            D(i, I)[I].getFile(e) && t(...arguments);
          });
        }
        onResumeAll(e, t) {
          this.on("resume-all", () => {
            D(this, I)[I].getFile(e) && t();
          });
        }
      }
      function B(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e, t))
          throw TypeError("attempted to use private field on non-instance");
        return e;
      }
      var L = 0;
      function j(e) {
        return "__private_" + L++ + "_" + e;
      }
      function z(e) {
        if (null != e) {
          var t;
          let i = () => this.abort(e.reason);
          e.addEventListener("abort", i, { once: !0 });
          let r = () => {
            e.removeEventListener("abort", i);
          };
          null == (t = this.then) || t.call(this, r, r);
        }
        return this;
      }
      var $ = j("activeRequests"),
        q = j("queuedHandlers"),
        H = j("paused"),
        V = j("pauseTimer"),
        W = j("downLimit"),
        G = j("upperLimit"),
        K = j("rateLimitingTimer"),
        Z = j("call"),
        X = j("queueNext"),
        Y = j("next"),
        J = j("queue"),
        Q = j("dequeue"),
        ee = j("resume"),
        et = j("increaseLimit");
      class ei {
        constructor(e) {
          Object.defineProperty(this, Q, { value: ea }),
            Object.defineProperty(this, J, { value: eo }),
            Object.defineProperty(this, Y, { value: es }),
            Object.defineProperty(this, X, { value: en }),
            Object.defineProperty(this, Z, { value: er }),
            Object.defineProperty(this, $, { writable: !0, value: 0 }),
            Object.defineProperty(this, q, { writable: !0, value: [] }),
            Object.defineProperty(this, H, { writable: !0, value: !1 }),
            Object.defineProperty(this, V, { writable: !0, value: void 0 }),
            Object.defineProperty(this, W, { writable: !0, value: 1 }),
            Object.defineProperty(this, G, { writable: !0, value: void 0 }),
            Object.defineProperty(this, K, { writable: !0, value: void 0 }),
            Object.defineProperty(this, ee, {
              writable: !0,
              value: () => this.resume(),
            }),
            Object.defineProperty(this, et, {
              writable: !0,
              value: () => {
                if (B(this, H)[H]) {
                  B(this, K)[K] = setTimeout(B(this, et)[et], 0);
                  return;
                }
                (B(this, W)[W] = this.limit),
                  (this.limit = Math.ceil((B(this, G)[G] + B(this, W)[W]) / 2));
                for (let e = B(this, W)[W]; e <= this.limit; e++)
                  B(this, X)[X]();
                B(this, G)[G] - B(this, W)[W] > 3
                  ? (B(this, K)[K] = setTimeout(B(this, et)[et], 2e3))
                  : (B(this, W)[W] = Math.floor(B(this, W)[W] / 2));
              },
            }),
            "number" != typeof e || 0 === e
              ? (this.limit = 1 / 0)
              : (this.limit = e);
        }
        run(e, t) {
          return !B(this, H)[H] && B(this, $)[$] < this.limit
            ? B(this, Z)[Z](e)
            : B(this, J)[J](e, t);
        }
        wrapSyncFunction(e, t) {
          var i = this;
          return function () {
            for (var r = arguments.length, n = Array(r), s = 0; s < r; s++)
              n[s] = arguments[s];
            let o = i.run(
              () => (e(...n), queueMicrotask(() => o.done()), () => {}),
              t
            );
            return {
              abortOn: z,
              abort() {
                o.abort();
              },
            };
          };
        }
        wrapPromiseFunction(e, t) {
          var i = this;
          return function () {
            let r;
            for (var n = arguments.length, s = Array(n), o = 0; o < n; o++)
              s[o] = arguments[o];
            let a = new Promise((n, o) => {
              r = i.run(() => {
                let t, i;
                try {
                  i = Promise.resolve(e(...s));
                } catch (e) {
                  i = Promise.reject(e);
                }
                return (
                  i.then(
                    (e) => {
                      t ? o(t) : (r.done(), n(e));
                    },
                    (e) => {
                      t ? o(t) : (r.done(), o(e));
                    }
                  ),
                  (e) => {
                    t = Error("Cancelled", { cause: e });
                  }
                );
              }, t);
            });
            return (
              (a.abort = (e) => {
                r.abort(e);
              }),
              (a.abortOn = z),
              a
            );
          };
        }
        resume() {
          (B(this, H)[H] = !1), clearTimeout(B(this, V)[V]);
          for (let e = 0; e < this.limit; e++) B(this, X)[X]();
        }
        pause(e) {
          void 0 === e && (e = null),
            (B(this, H)[H] = !0),
            clearTimeout(B(this, V)[V]),
            null != e && (B(this, V)[V] = setTimeout(B(this, ee)[ee], e));
        }
        rateLimit(e) {
          clearTimeout(B(this, K)[K]),
            this.pause(e),
            this.limit > 1 &&
              Number.isFinite(this.limit) &&
              ((B(this, G)[G] = this.limit - 1),
              (this.limit = B(this, W)[W]),
              (B(this, K)[K] = setTimeout(B(this, et)[et], e)));
        }
        get isPaused() {
          return B(this, H)[H];
        }
      }
      function er(e) {
        let t;
        B(this, $)[$] += 1;
        let i = !1;
        try {
          t = e();
        } catch (e) {
          throw ((B(this, $)[$] -= 1), e);
        }
        return {
          abort: (e) => {
            i ||
              ((i = !0),
              (B(this, $)[$] -= 1),
              null == t || t(e),
              B(this, X)[X]());
          },
          done: () => {
            i || ((i = !0), (B(this, $)[$] -= 1), B(this, X)[X]());
          },
        };
      }
      function en() {
        queueMicrotask(() => B(this, Y)[Y]());
      }
      function es() {
        if (
          B(this, H)[H] ||
          B(this, $)[$] >= this.limit ||
          0 === B(this, q)[q].length
        )
          return;
        let e = B(this, q)[q].shift();
        if (null == e) throw Error("Invariant violation: next is null");
        let t = B(this, Z)[Z](e.fn);
        (e.abort = t.abort), (e.done = t.done);
      }
      function eo(e, t) {
        let i = {
            fn: e,
            priority: (null == t ? void 0 : t.priority) || 0,
            abort: () => {
              B(this, Q)[Q](i);
            },
            done: () => {
              throw Error(
                "Cannot mark a queued request as done: this indicates a bug"
              );
            },
          },
          r = B(this, q)[q].findIndex((e) => i.priority > e.priority);
        return (
          -1 === r ? B(this, q)[q].push(i) : B(this, q)[q].splice(r, 0, i), i
        );
      }
      function ea(e) {
        let t = B(this, q)[q].indexOf(e);
        -1 !== t && B(this, q)[q].splice(t, 1);
      }
      let el = Symbol("__queue");
      function eu(e) {
        let t = (e) => "error" in e && !!e.error;
        return e.filter((e) => !t(e));
      }
      function eh(e) {
        return e.filter((e) => {
          var t;
          return (
            !(null != (t = e.progress) && t.uploadStarted) || !e.isRestored
          );
        });
      }
      let { AbortController: ed } = globalThis,
        { AbortSignal: ep } = globalThis,
        ec = function (e, t) {
          void 0 === e && (e = "Aborted");
          let i = new DOMException(e, "AbortError");
          return (
            null != t &&
              g(t, "cause") &&
              Object.defineProperty(i, "cause", {
                __proto__: null,
                configurable: !0,
                writable: !0,
                value: t.cause,
              }),
            i
          );
        };
      function ef(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e, t))
          throw TypeError("attempted to use private field on non-instance");
        return e;
      }
      var em = 0;
      function eg(e) {
        return "__private_" + em++ + "_" + e;
      }
      let ey = {
          getChunkSize: (e) => Math.ceil(e.size / 1e4),
          onProgress() {},
          onPartComplete() {},
          onSuccess() {},
          onError(e) {
            throw e;
          },
        },
        ev = Symbol("pausing upload, not an actual error");
      var eb = eg("abortController"),
        ew = eg("chunks"),
        eP = eg("chunkState"),
        e_ = eg("data"),
        eS = eg("file"),
        eC = eg("uploadHasStarted"),
        eE = eg("onError"),
        eF = eg("onSuccess"),
        eT = eg("shouldUseMultipart"),
        eO = eg("isRestoring"),
        ek = eg("onReject"),
        ex = eg("maxMultipartParts"),
        eA = eg("minPartSize"),
        eD = eg("initChunks"),
        eU = eg("createUpload"),
        eR = eg("resumeUpload"),
        eI = eg("onPartProgress"),
        eM = eg("onPartComplete"),
        eN = eg("abortUpload");
      class eB {
        constructor(e, t) {
          var i;
          Object.defineProperty(this, eN, { value: e$ }),
            Object.defineProperty(this, eR, { value: ez }),
            Object.defineProperty(this, eU, { value: ej }),
            Object.defineProperty(this, eD, { value: eL }),
            Object.defineProperty(this, eb, { writable: !0, value: new ed() }),
            Object.defineProperty(this, ew, { writable: !0, value: void 0 }),
            Object.defineProperty(this, eP, { writable: !0, value: void 0 }),
            Object.defineProperty(this, e_, { writable: !0, value: void 0 }),
            Object.defineProperty(this, eS, { writable: !0, value: void 0 }),
            Object.defineProperty(this, eC, { writable: !0, value: !1 }),
            Object.defineProperty(this, eE, { writable: !0, value: void 0 }),
            Object.defineProperty(this, eF, { writable: !0, value: void 0 }),
            Object.defineProperty(this, eT, { writable: !0, value: void 0 }),
            Object.defineProperty(this, eO, { writable: !0, value: void 0 }),
            Object.defineProperty(this, ek, {
              writable: !0,
              value: (e) =>
                (null == e ? void 0 : e.cause) === ev
                  ? null
                  : ef(this, eE)[eE](e),
            }),
            Object.defineProperty(this, ex, { writable: !0, value: 1e4 }),
            Object.defineProperty(this, eA, { writable: !0, value: 5242880 }),
            Object.defineProperty(this, eI, {
              writable: !0,
              value: (e) => (t) => {
                if (!t.lengthComputable) return;
                ef(this, eP)[eP][e].uploaded = (function (e) {
                  if ("string" == typeof e) return parseInt(e, 10);
                  if ("number" == typeof e) return e;
                  throw TypeError("Expected a number");
                })(t.loaded);
                let i = ef(this, eP)[eP].reduce((e, t) => e + t.uploaded, 0);
                this.options.onProgress(i, ef(this, e_)[e_].size);
              },
            }),
            Object.defineProperty(this, eM, {
              writable: !0,
              value: (e) => (t) => {
                (ef(this, ew)[ew][e] = null),
                  (ef(this, eP)[eP][e].etag = t),
                  (ef(this, eP)[eP][e].done = !0),
                  this.options.onPartComplete({ PartNumber: e + 1, ETag: t });
              },
            }),
            (this.options = { ...ey, ...t }),
            null != (i = this.options).getChunkSize ||
              (i.getChunkSize = ey.getChunkSize),
            (ef(this, e_)[e_] = e),
            (ef(this, eS)[eS] = t.file),
            (ef(this, eF)[eF] = this.options.onSuccess),
            (ef(this, eE)[eE] = this.options.onError),
            (ef(this, eT)[eT] = this.options.shouldUseMultipart),
            (ef(this, eO)[eO] = t.uploadId && t.key),
            ef(this, eD)[eD]();
        }
        start() {
          ef(this, eC)[eC]
            ? (ef(this, eb)[eb].signal.aborted || ef(this, eb)[eb].abort(ev),
              (ef(this, eb)[eb] = new ed()),
              ef(this, eR)[eR]())
            : ef(this, eO)[eO]
            ? (this.options.companionComm.restoreUploadFile(ef(this, eS)[eS], {
                uploadId: this.options.uploadId,
                key: this.options.key,
              }),
              ef(this, eR)[eR]())
            : ef(this, eU)[eU]();
        }
        pause() {
          ef(this, eb)[eb].abort(ev), (ef(this, eb)[eb] = new ed());
        }
        abort(e) {
          null != e && e.really ? ef(this, eN)[eN]() : this.pause();
        }
        get chunkState() {
          return ef(this, eP)[eP];
        }
      }
      function eL() {
        let e = ef(this, e_)[e_].size,
          t =
            "function" == typeof ef(this, eT)[eT]
              ? ef(this, eT)[eT](ef(this, eS)[eS])
              : !!ef(this, eT)[eT];
        if (t && e > ef(this, eA)[eA]) {
          let i = Math.max(
              this.options.getChunkSize(ef(this, e_)[e_]),
              ef(this, eA)[eA]
            ),
            r = Math.floor(e / i);
          r > ef(this, ex)[ex] &&
            ((r = ef(this, ex)[ex]), (i = e / ef(this, ex)[ex])),
            (ef(this, ew)[ew] = Array(r));
          for (let r = 0, n = 0; r < e; r += i, n++) {
            let s = Math.min(e, r + i),
              o = () => {
                let e = r;
                return ef(this, e_)[e_].slice(e, s);
              };
            if (
              ((ef(this, ew)[ew][n] = {
                getData: o,
                onProgress: ef(this, eI)[eI](n),
                onComplete: ef(this, eM)[eM](n),
                shouldUseMultipart: t,
              }),
              ef(this, eO)[eO])
            ) {
              let t = r + i > e ? e - r : i;
              ef(this, ew)[ew][n].setAsUploaded = () => {
                (ef(this, ew)[ew][n] = null),
                  (ef(this, eP)[eP][n].uploaded = t);
              };
            }
          }
        } else
          ef(this, ew)[ew] = [
            {
              getData: () => ef(this, e_)[e_],
              onProgress: ef(this, eI)[eI](0),
              onComplete: ef(this, eM)[eM](0),
              shouldUseMultipart: t,
            },
          ];
        ef(this, eP)[eP] = ef(this, ew)[ew].map(() => ({ uploaded: 0 }));
      }
      function ej() {
        this.options.companionComm
          .uploadFile(
            ef(this, eS)[eS],
            ef(this, ew)[ew],
            ef(this, eb)[eb].signal
          )
          .then(ef(this, eF)[eF], ef(this, ek)[ek]),
          (ef(this, eC)[eC] = !0);
      }
      function ez() {
        this.options.companionComm
          .resumeUploadFile(
            ef(this, eS)[eS],
            ef(this, ew)[ew],
            ef(this, eb)[eb].signal
          )
          .then(ef(this, eF)[eF], ef(this, ek)[ek]);
      }
      function e$() {
        ef(this, eb)[eb].abort(),
          this.options.companionComm
            .abortFileUpload(ef(this, eS)[eS])
            .catch((e) => this.options.log(e));
      }
      function eq(e) {
        if (null != e && e.aborted)
          throw ec("The operation was aborted", { cause: e.reason });
      }
      let eH = new TextEncoder(),
        eV = { name: "HMAC", hash: "SHA-256" };
      async function eW(e) {
        let { subtle: t } = globalThis.crypto;
        return t.digest(eV.hash, eH.encode(e));
      }
      async function eG(e) {
        let { subtle: t } = globalThis.crypto;
        return t.importKey(
          "raw",
          "string" == typeof e ? eH.encode(e) : e,
          eV,
          !1,
          ["sign"]
        );
      }
      function eK(e) {
        let t = new Uint8Array(e),
          i = "";
        for (let e = 0; e < t.length; e++)
          i += t[e].toString(16).padStart(2, "0");
        return i;
      }
      async function eZ(e, t) {
        let { subtle: i } = globalThis.crypto;
        return i.sign(eV, await eG(e), eH.encode(t));
      }
      async function eX(e) {
        let {
            accountKey: t,
            accountSecret: i,
            sessionToken: r,
            bucketName: n,
            Key: s,
            Region: o,
            expires: a,
            uploadId: l,
            partNumber: u,
          } = e,
          h = `${n}.s3.${o}.amazonaws.com`,
          d = `/${encodeURI(s).replace(
            /[;?:@&=+$,#!'()*]/g,
            (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
          )}`,
          p = "UNSIGNED-PAYLOAD",
          c = new Date().toISOString().replace(/[-:]|\.\d+/g, ""),
          f = c.slice(0, 8),
          m = `${f}/${o}/s3/aws4_request`,
          g = new URL(`https://${h}${d}`);
        g.searchParams.set("X-Amz-Algorithm", "AWS4-HMAC-SHA256"),
          g.searchParams.set("X-Amz-Content-Sha256", p),
          g.searchParams.set("X-Amz-Credential", `${t}/${m}`),
          g.searchParams.set("X-Amz-Date", c),
          g.searchParams.set("X-Amz-Expires", a),
          g.searchParams.set("X-Amz-Security-Token", r),
          g.searchParams.set("X-Amz-SignedHeaders", "host"),
          u && g.searchParams.set("partNumber", u),
          l && g.searchParams.set("uploadId", l),
          g.searchParams.set("x-id", u && l ? "UploadPart" : "PutObject");
        let y = (function (e) {
            let {
                method: t = "PUT",
                CanonicalUri: i = "/",
                CanonicalQueryString: r = "",
                SignedHeaders: n,
                HashedPayload: s,
              } = e,
              o = Object.keys(n)
                .map((e) => e.toLowerCase())
                .sort();
            return [
              t,
              i,
              r,
              ...o.map((e) => `${e}:${n[e]}`),
              "",
              o.join(";"),
              s,
            ].join("\n");
          })({
            CanonicalUri: d,
            CanonicalQueryString: g.search.slice(1),
            SignedHeaders: { host: h },
            HashedPayload: p,
          }),
          v = ["AWS4-HMAC-SHA256", c, m, eK(await eW(y))].join("\n"),
          b = await eZ(`AWS4${i}`, f),
          w = await eZ(b, o),
          P = await eZ(w, "s3"),
          _ = await eZ(P, "aws4_request"),
          S = eK(await eZ(_, v));
        return g.searchParams.set("X-Amz-Signature", S), g;
      }
      function eY(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e, t))
          throw TypeError("attempted to use private field on non-instance");
        return e;
      }
      var eJ = 0;
      function eQ(e) {
        return "__private_" + eJ++ + "_" + e;
      }
      var e0 = eQ("abortMultipartUpload"),
        e1 = eQ("cache"),
        e5 = eQ("createMultipartUpload"),
        e2 = eQ("fetchSignature"),
        e3 = eQ("getUploadParameters"),
        e8 = eQ("listParts"),
        e4 = eQ("previousRetryDelay"),
        e6 = eQ("requests"),
        e7 = eQ("retryDelays"),
        e9 = eQ("sendCompletionRequest"),
        te = eQ("setS3MultipartState"),
        tt = eQ("uploadPartBytes"),
        ti = eQ("getFile"),
        tr = eQ("shouldRetry"),
        tn = eQ("nonMultipartUpload");
      class ts {
        constructor(e, t, i, r) {
          Object.defineProperty(this, tn, { value: ta }),
            Object.defineProperty(this, tr, { value: to }),
            Object.defineProperty(this, e0, { writable: !0, value: void 0 }),
            Object.defineProperty(this, e1, {
              writable: !0,
              value: new WeakMap(),
            }),
            Object.defineProperty(this, e5, { writable: !0, value: void 0 }),
            Object.defineProperty(this, e2, { writable: !0, value: void 0 }),
            Object.defineProperty(this, e3, { writable: !0, value: void 0 }),
            Object.defineProperty(this, e8, { writable: !0, value: void 0 }),
            Object.defineProperty(this, e4, { writable: !0, value: void 0 }),
            Object.defineProperty(this, e6, { writable: !0, value: void 0 }),
            Object.defineProperty(this, e7, { writable: !0, value: void 0 }),
            Object.defineProperty(this, e9, { writable: !0, value: void 0 }),
            Object.defineProperty(this, te, { writable: !0, value: void 0 }),
            Object.defineProperty(this, tt, { writable: !0, value: void 0 }),
            Object.defineProperty(this, ti, { writable: !0, value: void 0 }),
            (eY(this, e6)[e6] = e),
            (eY(this, te)[te] = i),
            (eY(this, ti)[ti] = r),
            this.setOptions(t);
        }
        setOptions(e) {
          let t = eY(this, e6)[e6];
          if (
            ("abortMultipartUpload" in e &&
              (eY(this, e0)[e0] = t.wrapPromiseFunction(
                e.abortMultipartUpload,
                { priority: 1 }
              )),
            "createMultipartUpload" in e &&
              (eY(this, e5)[e5] = t.wrapPromiseFunction(
                e.createMultipartUpload,
                { priority: -1 }
              )),
            "signPart" in e &&
              (eY(this, e2)[e2] = t.wrapPromiseFunction(e.signPart)),
            "listParts" in e &&
              (eY(this, e8)[e8] = t.wrapPromiseFunction(e.listParts)),
            "completeMultipartUpload" in e &&
              (eY(this, e9)[e9] = t.wrapPromiseFunction(
                e.completeMultipartUpload,
                { priority: 1 }
              )),
            "retryDelays" in e)
          ) {
            var i;
            eY(this, e7)[e7] = null != (i = e.retryDelays) ? i : [];
          }
          "uploadPartBytes" in e &&
            (eY(this, tt)[tt] = t.wrapPromiseFunction(e.uploadPartBytes, {
              priority: 1 / 0,
            })),
            "getUploadParameters" in e &&
              (eY(this, e3)[e3] = t.wrapPromiseFunction(e.getUploadParameters));
        }
        async getUploadId(e, t) {
          let i;
          for (; null != (i = eY(this, e1)[e1].get(e.data)); )
            try {
              return await i;
            } catch {}
          let r = eY(this, e5)[e5](eY(this, ti)[ti](e), t),
            n = () => {
              r.abort(t.reason), eY(this, e1)[e1].delete(e.data);
            };
          return (
            t.addEventListener("abort", n, { once: !0 }),
            eY(this, e1)[e1].set(e.data, r),
            r.then(
              async (i) => {
                t.removeEventListener("abort", n),
                  eY(this, te)[te](e, i),
                  eY(this, e1)[e1].set(e.data, i);
              },
              () => {
                t.removeEventListener("abort", n),
                  eY(this, e1)[e1].delete(e.data);
              }
            ),
            r
          );
        }
        async abortFileUpload(e) {
          let t;
          let i = eY(this, e1)[e1].get(e.data);
          if (null != i) {
            eY(this, e1)[e1].delete(e.data),
              eY(this, te)[te](e, Object.create(null));
            try {
              t = await i;
            } catch {
              return;
            }
            await eY(this, e0)[e0](eY(this, ti)[ti](e), t);
          }
        }
        async uploadFile(e, t, i) {
          if ((eq(i), 1 === t.length && !t[0].shouldUseMultipart))
            return eY(this, tn)[tn](e, t[0], i);
          let { uploadId: r, key: n } = await this.getUploadId(e, i);
          eq(i);
          try {
            let s = await Promise.all(
              t.map((t, r) => this.uploadChunk(e, r + 1, t, i))
            );
            return (
              eq(i),
              await eY(this, e9)
                [e9](
                  eY(this, ti)[ti](e),
                  { key: n, uploadId: r, parts: s, signal: i },
                  i
                )
                .abortOn(i)
            );
          } catch (t) {
            throw (
              ((null == t ? void 0 : t.cause) !== ev &&
                (null == t ? void 0 : t.name) !== "AbortError" &&
                this.abortFileUpload(e),
              t)
            );
          }
        }
        restoreUploadFile(e, t) {
          eY(this, e1)[e1].set(e.data, t);
        }
        async resumeUploadFile(e, t, i) {
          if (
            (eq(i), 1 === t.length && null != t[0] && !t[0].shouldUseMultipart)
          )
            return eY(this, tn)[tn](e, t[0], i);
          let { uploadId: r, key: n } = await this.getUploadId(e, i);
          eq(i);
          let s = await eY(this, e8)
            [e8](eY(this, ti)[ti](e), { uploadId: r, key: n, signal: i }, i)
            .abortOn(i);
          eq(i);
          let o = await Promise.all(
            t.map((t, r) => {
              let n = r + 1,
                o = s.find((e) => {
                  let { PartNumber: t } = e;
                  return t === n;
                });
              return null == o
                ? this.uploadChunk(e, n, t, i)
                : (null == t || null == t.setAsUploaded || t.setAsUploaded(),
                  { PartNumber: n, ETag: o.ETag });
            })
          );
          return (
            eq(i),
            eY(this, e9)
              [e9](
                eY(this, ti)[ti](e),
                { key: n, uploadId: r, parts: o, signal: i },
                i
              )
              .abortOn(i)
          );
        }
        async uploadChunk(e, t, i, r) {
          eq(r);
          let { uploadId: n, key: s } = await this.getUploadId(e, r),
            o = eY(this, e7)[e7].values(),
            a = eY(this, e7)[e7].values(),
            l = () => {
              let e = o.next();
              return null == e || e.done ? null : e.value;
            };
          for (;;) {
            let o;
            eq(r);
            let u = i.getData(),
              { onProgress: h, onComplete: d } = i;
            try {
              o = await eY(this, e2)
                [e2](eY(this, ti)[ti](e), {
                  uploadId: n,
                  key: s,
                  partNumber: t,
                  body: u,
                  signal: r,
                })
                .abortOn(r);
            } catch (t) {
              let e = l();
              if (null == e || r.aborted) throw t;
              await new Promise((t) => setTimeout(t, e));
              continue;
            }
            eq(r);
            try {
              return {
                PartNumber: t,
                ...(await eY(this, tt)
                  [tt]({
                    signature: o,
                    body: u,
                    size: u.size,
                    onProgress: h,
                    onComplete: d,
                    signal: r,
                  })
                  .abortOn(r)),
              };
            } catch (e) {
              if (!(await eY(this, tr)[tr](e, a))) throw e;
            }
          }
        }
      }
      async function to(e, t) {
        var i;
        let r = eY(this, e6)[e6],
          n = null == e || null == (i = e.source) ? void 0 : i.status;
        if (null == n) return !1;
        if (403 === n && "Request has expired" === e.message) {
          if (!r.isPaused) {
            if (1 === r.limit || null == eY(this, e4)[e4]) {
              let e = t.next();
              if (null == e || e.done) return !1;
              eY(this, e4)[e4] = e.value;
            }
            r.rateLimit(0),
              await new Promise((e) => setTimeout(e, eY(this, e4)[e4]));
          }
        } else if (429 === n) {
          if (!r.isPaused) {
            let e = t.next();
            if (null == e || e.done) return !1;
            r.rateLimit(e.value);
          }
        } else if (n > 400 && n < 500 && 409 !== n) return !1;
        else if ("undefined" != typeof navigator && !1 === navigator.onLine)
          r.isPaused ||
            (r.pause(),
            window.addEventListener(
              "online",
              () => {
                r.resume();
              },
              { once: !0 }
            ));
        else {
          let e = t.next();
          if (null == e || e.done) return !1;
          await new Promise((t) => setTimeout(t, e.value));
        }
        return !0;
      }
      async function ta(e, t, i) {
        let r;
        let {
            method: n = "POST",
            url: s,
            fields: o,
            headers: a,
          } = await eY(this, e3)
            [e3](eY(this, ti)[ti](e), { signal: i })
            .abortOn(i),
          l = t.getData();
        if ("POST" === n.toUpperCase()) {
          let e = new FormData();
          Object.entries(o).forEach((t) => {
            let [i, r] = t;
            return e.set(i, r);
          }),
            e.set("file", l),
            (r = e);
        } else r = l;
        let { onProgress: u, onComplete: h } = t,
          d = await eY(this, tt)
            [tt]({
              signature: { url: s, headers: a, method: n },
              body: r,
              size: l.size,
              onProgress: u,
              onComplete: h,
              signal: i,
            })
            .abortOn(i);
        return "location" in d
          ? d
          : {
              location: (function (e) {
                let t = new URL(e);
                return (t.search = ""), (t.hash = ""), t.href;
              })(s),
              ...d,
            };
      }
      function tl(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e, t))
          throw TypeError("attempted to use private field on non-instance");
        return e;
      }
      var tu = 0;
      function th(e) {
        return "__private_" + tu++ + "_" + e;
      }
      function td(e) {
        if (null != e && e.error) {
          let t = Error(e.message);
          throw (Object.assign(t, e.error), t);
        }
        return e;
      }
      function tp(e) {
        let t = e.Expiration;
        if (t) {
          let e = Math.floor((new Date(t) - Date.now()) / 1e3);
          if (e > 9) return e;
        }
      }
      function tc(e) {
        let { meta: t, allowedMetaFields: i, querify: r = !1 } = e,
          n = null != i ? i : Object.keys(t);
        return t
          ? Object.fromEntries(
              n
                .filter((e) => null != t[e])
                .map((e) => [r ? `metadata[${e}]` : e, String(t[e])])
            )
          : {};
      }
      let tf = {
        allowedMetaFields: null,
        limit: 6,
        getTemporarySecurityCredentials: !1,
        shouldUseMultipart: (e) => 0 !== e.size,
        retryDelays: [0, 1e3, 3e3, 5e3],
        companionHeaders: {},
      };
      var tm = th("companionCommunicationQueue"),
        tg = th("client"),
        ty = th("cachedTemporaryCredentials"),
        tv = th("getTemporarySecurityCredentials"),
        tb = th("setS3MultipartState"),
        tw = th("getFile"),
        tP = th("uploadLocalFile"),
        t_ = th("getCompanionClientArgs"),
        tS = th("upload"),
        tC = th("setCompanionHeaders"),
        tE = th("setResumableUploadsCapability"),
        tF = th("resetResumableCapability");
      n = Symbol.for("uppy test: getClient");
      class tT extends o.Z {
        constructor(e, t) {
          var i;
          super(e, {
            ...tf,
            uploadPartBytes: tT.uploadPartBytes,
            createMultipartUpload: null,
            listParts: null,
            abortMultipartUpload: null,
            completeMultipartUpload: null,
            signPart: null,
            getUploadParameters: null,
            ...t,
          }),
            Object.defineProperty(this, t_, { value: tx }),
            Object.defineProperty(this, tP, { value: tk }),
            Object.defineProperty(this, tv, { value: tO }),
            Object.defineProperty(this, tm, { writable: !0, value: void 0 }),
            Object.defineProperty(this, tg, { writable: !0, value: void 0 }),
            Object.defineProperty(this, ty, { writable: !0, value: void 0 }),
            Object.defineProperty(this, tb, {
              writable: !0,
              value: (e, t) => {
                let { key: i, uploadId: r } = t,
                  n = this.uppy.getFile(e.id);
                null != n &&
                  this.uppy.setFileState(e.id, {
                    s3Multipart: { ...n.s3Multipart, key: i, uploadId: r },
                  });
              },
            }),
            Object.defineProperty(this, tw, {
              writable: !0,
              value: (e) => this.uppy.getFile(e.id) || e,
            }),
            Object.defineProperty(this, tS, {
              writable: !0,
              value: async (e) => {
                if (0 === e.length) return;
                let t = eu(this.uppy.getFilesByIds(e)),
                  i = eh(t);
                this.uppy.emit("upload-start", i);
                let r = t.map((e) => {
                    if (e.isRemote) {
                      tl(this, tE)[tE](!1);
                      let t = new AbortController(),
                        i = (i) => {
                          i.id === e.id && t.abort();
                        };
                      this.uppy.on("file-removed", i);
                      let r = this.uppy
                        .getRequestClientForFile(e)
                        .uploadRemoteFile(e, tl(this, t_)[t_](e), {
                          signal: t.signal,
                          getQueue: () => this.requests,
                        });
                      return (
                        this.requests.wrapSyncFunction(
                          () => {
                            this.uppy.off("file-removed", i);
                          },
                          { priority: -1 }
                        )(),
                        r
                      );
                    }
                    return tl(this, tP)[tP](e);
                  }),
                  n = await Promise.all(r);
                return tl(this, tE)[tE](!0), n;
              },
            }),
            Object.defineProperty(this, tC, {
              writable: !0,
              value: () => {
                tl(this, tg)[tg].setCompanionHeaders(
                  this.opts.companionHeaders
                );
              },
            }),
            Object.defineProperty(this, tE, {
              writable: !0,
              value: (e) => {
                let { capabilities: t } = this.uppy.getState();
                this.uppy.setState({
                  capabilities: { ...t, resumableUploads: e },
                });
              },
            }),
            Object.defineProperty(this, tF, {
              writable: !0,
              value: () => {
                tl(this, tE)[tE](!0);
              },
            }),
            (this.type = "uploader"),
            (this.id = this.opts.id || "AwsS3Multipart"),
            (this.title = "AWS S3 Multipart"),
            (tl(this, tg)[tg] = new k(e, t));
          let r = {
            createMultipartUpload: this.createMultipartUpload,
            listParts: this.listParts,
            abortMultipartUpload: this.abortMultipartUpload,
            completeMultipartUpload: this.completeMultipartUpload,
            signPart:
              null != t && t.getTemporarySecurityCredentials
                ? this.createSignedURL
                : this.signPart,
            getUploadParameters:
              null != t && t.getTemporarySecurityCredentials
                ? this.createSignedURL
                : this.getUploadParameters,
          };
          for (let e of Object.keys(r))
            null == this.opts[e] && (this.opts[e] = r[e].bind(this));
          (null == t ? void 0 : t.prepareUploadParts) != null &&
            null == t.signPart &&
            (this.opts.signPart = async (e, i) => {
              let {
                  uploadId: r,
                  key: n,
                  partNumber: s,
                  body: o,
                  signal: a,
                } = i,
                { presignedUrls: l, headers: u } = await t.prepareUploadParts(
                  e,
                  {
                    uploadId: r,
                    key: n,
                    parts: [{ number: s, chunk: o }],
                    signal: a,
                  }
                );
              return {
                url: null == l ? void 0 : l[s],
                headers: null == u ? void 0 : u[s],
              };
            }),
            (this.requests =
              null != (i = this.opts.rateLimitedQueue)
                ? i
                : new ei(this.opts.limit)),
            (tl(this, tm)[tm] = new ts(
              this.requests,
              this.opts,
              tl(this, tb)[tb],
              tl(this, tw)[tw]
            )),
            (this.uploaders = Object.create(null)),
            (this.uploaderEvents = Object.create(null)),
            (this.uploaderSockets = Object.create(null));
        }
        [n]() {
          return tl(this, tg)[tg];
        }
        setOptions(e) {
          tl(this, tm)[tm].setOptions(e),
            super.setOptions(e),
            tl(this, tC)[tC]();
        }
        resetUploaderReferences(e, t) {
          this.uploaders[e] &&
            (this.uploaders[e].abort({
              really: (null == t ? void 0 : t.abort) || !1,
            }),
            (this.uploaders[e] = null)),
            this.uploaderEvents[e] &&
              (this.uploaderEvents[e].remove(),
              (this.uploaderEvents[e] = null)),
            this.uploaderSockets[e] &&
              (this.uploaderSockets[e].close(),
              (this.uploaderSockets[e] = null));
        }
        assertHost(e) {
          if (!this.opts.companionUrl)
            throw Error(
              `Expected a \`companionUrl\` option containing a Companion address, or if you are not using Companion, a custom \`${e}\` implementation.`
            );
        }
        createMultipartUpload(e, t) {
          this.assertHost("createMultipartUpload"), eq(t);
          let i = tc({
            meta: e.meta,
            allowedMetaFields: this.opts.allowedMetaFields,
          });
          return tl(this, tg)
            [tg].post(
              "s3/multipart",
              { filename: e.name, type: e.type, metadata: i },
              { signal: t }
            )
            .then(td);
        }
        listParts(e, t, i) {
          let { key: r, uploadId: n, signal: s } = t;
          null != s || (s = i), this.assertHost("listParts"), eq(s);
          let o = encodeURIComponent(r);
          return tl(this, tg)
            [tg].get(`s3/multipart/${n}?key=${o}`, { signal: s })
            .then(td);
        }
        completeMultipartUpload(e, t, i) {
          let { key: r, uploadId: n, parts: s, signal: o } = t;
          null != o || (o = i),
            this.assertHost("completeMultipartUpload"),
            eq(o);
          let a = encodeURIComponent(r),
            l = encodeURIComponent(n);
          return tl(this, tg)
            [tg].post(
              `s3/multipart/${l}/complete?key=${a}`,
              { parts: s },
              { signal: o }
            )
            .then(td);
        }
        async createSignedURL(e, t) {
          let i = await tl(this, tv)[tv](t),
            r = tp(i.credentials) || 604800,
            { uploadId: n, key: s, partNumber: o } = t;
          return {
            method: "PUT",
            expires: r,
            fields: {},
            url: `${await eX({
              accountKey: i.credentials.AccessKeyId,
              accountSecret: i.credentials.SecretAccessKey,
              sessionToken: i.credentials.SessionToken,
              expires: r,
              bucketName: i.bucket,
              Region: i.region,
              Key: null != s ? s : `${crypto.randomUUID()}-${e.name}`,
              uploadId: n,
              partNumber: o,
            })}`,
            headers: { "Content-Type": e.type },
          };
        }
        signPart(e, t) {
          let { uploadId: i, key: r, partNumber: n, signal: s } = t;
          if (
            (this.assertHost("signPart"),
            eq(s),
            null == i || null == r || null == n)
          )
            throw Error(
              "Cannot sign without a key, an uploadId, and a partNumber"
            );
          let o = encodeURIComponent(r);
          return tl(this, tg)
            [tg].get(`s3/multipart/${i}/${n}?key=${o}`, { signal: s })
            .then(td);
        }
        abortMultipartUpload(e, t, i) {
          let { key: r, uploadId: n, signal: s } = t;
          null != s || (s = i), this.assertHost("abortMultipartUpload");
          let o = encodeURIComponent(r),
            a = encodeURIComponent(n);
          return tl(this, tg)
            [tg].delete(`s3/multipart/${a}?key=${o}`, void 0, { signal: s })
            .then(td);
        }
        getUploadParameters(e, t) {
          let { meta: i } = e,
            { type: r, name: n } = i,
            s = tc({
              meta: i,
              allowedMetaFields: this.opts.allowedMetaFields,
              querify: !0,
            }),
            o = new URLSearchParams({ filename: n, type: r, ...s });
          return tl(this, tg)[tg].get(`s3/params?${o}`, t);
        }
        static async uploadPartBytes(e) {
          let {
            signature: { url: t, expires: i, headers: r, method: n = "PUT" },
            body: s,
            size: o = s.size,
            onProgress: a,
            onComplete: l,
            signal: u,
          } = e;
          if ((eq(u), null == t))
            throw Error("Cannot upload to an undefined URL");
          return new Promise((e, h) => {
            let d = new XMLHttpRequest();
            function p() {
              d.abort();
            }
            function c() {
              null == u || u.removeEventListener("abort", p);
            }
            d.open(n, t, !0),
              r &&
                Object.keys(r).forEach((e) => {
                  d.setRequestHeader(e, r[e]);
                }),
              (d.responseType = "text"),
              "number" == typeof i && (d.timeout = 1e3 * i),
              null == u || u.addEventListener("abort", p),
              d.upload.addEventListener("progress", (e) => {
                a(e);
              }),
              d.addEventListener("abort", () => {
                c(), h(ec());
              }),
              d.addEventListener("timeout", () => {
                c();
                let e = Error("Request has expired");
                (e.source = { status: 403 }), h(e);
              }),
              d.addEventListener("load", (t) => {
                if (
                  (c(),
                  403 === d.status &&
                    d.responseText.includes(
                      "<Message>Request has expired</Message>"
                    ))
                ) {
                  let e = Error("Request has expired");
                  (e.source = d), h(e);
                  return;
                }
                if (d.status < 200 || d.status >= 300) {
                  let e = Error("Non 2xx");
                  (e.source = d), h(e);
                  return;
                }
                null == a || a({ loaded: o, lengthComputable: !0 });
                let i = d.getResponseHeader("ETag"),
                  r = d.getResponseHeader("Location");
                if (
                  ("POST" === n.toUpperCase() &&
                    null === r &&
                    console.warn(
                      "AwsS3/Multipart: Could not read the Location header. This likely means CORS is not configured correctly on the S3 Bucket. See https://uppy.io/docs/aws-s3-multipart#S3-Bucket-Configuration for instructions."
                    ),
                  null === i)
                ) {
                  h(
                    Error(
                      "AwsS3/Multipart: Could not read the ETag header. This likely means CORS is not configured correctly on the S3 Bucket. See https://uppy.io/docs/aws-s3-multipart#S3-Bucket-Configuration for instructions."
                    )
                  );
                  return;
                }
                null == l || l(i),
                  e({ ETag: i, ...(r ? { location: r } : void 0) });
              }),
              d.addEventListener("error", (e) => {
                c();
                let t = Error("Unknown error");
                (t.source = e.target), h(t);
              }),
              d.send(s);
          });
        }
        install() {
          tl(this, tE)[tE](!0),
            this.uppy.addPreProcessor(tl(this, tC)[tC]),
            this.uppy.addUploader(tl(this, tS)[tS]),
            this.uppy.on("cancel-all", tl(this, tF)[tF]);
        }
        uninstall() {
          this.uppy.removePreProcessor(tl(this, tC)[tC]),
            this.uppy.removeUploader(tl(this, tS)[tS]),
            this.uppy.off("cancel-all", tl(this, tF)[tF]);
        }
      }
      async function tO(e) {
        return (
          eq(null == e ? void 0 : e.signal),
          null == tl(this, ty)[ty] &&
            (!0 === this.opts.getTemporarySecurityCredentials
              ? (this.assertHost("getTemporarySecurityCredentials"),
                (tl(this, ty)[ty] = tl(this, tg)[tg].get("s3/sts", e).then(td)))
              : (tl(this, ty)[ty] =
                  this.opts.getTemporarySecurityCredentials(e)),
            (tl(this, ty)[ty] = await tl(this, ty)[ty]),
            setTimeout(() => {
              tl(this, ty)[ty] = null;
            }, 500 * (tp(tl(this, ty)[ty].credentials) || 0))),
          tl(this, ty)[ty]
        );
      }
      function tk(e) {
        var t = this;
        return new Promise((i, r) => {
          let n = new eB(e.data, {
            companionComm: tl(this, tm)[tm],
            log: function () {
              return t.uppy.log(...arguments);
            },
            getChunkSize: this.opts.getChunkSize
              ? this.opts.getChunkSize.bind(this)
              : null,
            onProgress: (t, i) => {
              this.uppy.emit("upload-progress", this.uppy.getFile(e.id), {
                uploader: this,
                bytesUploaded: t,
                bytesTotal: i,
              });
            },
            onError: (t) => {
              this.uppy.log(t),
                this.uppy.emit("upload-error", e, t),
                this.resetUploaderReferences(e.id),
                r(t);
            },
            onSuccess: (t) => {
              let r = { body: { ...t }, status: 200, uploadURL: t.location };
              this.resetUploaderReferences(e.id),
                this.uppy.emit("upload-success", tl(this, tw)[tw](e), r),
                t.location &&
                  this.uppy.log(`Download ${e.name} from ${t.location}`),
                i();
            },
            onPartComplete: (t) => {
              this.uppy.emit(
                "s3-multipart:part-uploaded",
                tl(this, tw)[tw](e),
                t
              );
            },
            file: e,
            shouldUseMultipart: this.opts.shouldUseMultipart,
            ...e.s3Multipart,
          });
          this.uploaders[e.id] = n;
          let s = new N(this.uppy);
          (this.uploaderEvents[e.id] = s),
            s.onFileRemove(e.id, (t) => {
              n.abort(),
                this.resetUploaderReferences(e.id, { abort: !0 }),
                i(`upload ${t} was removed`);
            }),
            s.onCancelAll(e.id, (t) => {
              (null == t ? void 0 : t.reason) === "user" &&
                (n.abort(), this.resetUploaderReferences(e.id, { abort: !0 })),
                i(`upload ${e.id} was canceled`);
            }),
            s.onFilePause(e.id, (e) => {
              e ? n.pause() : n.start();
            }),
            s.onPauseAll(e.id, () => {
              n.pause();
            }),
            s.onResumeAll(e.id, () => {
              n.start();
            }),
            n.start();
        });
      }
      function tx(e) {
        var t;
        return {
          ...(null == (t = e.remote) ? void 0 : t.body),
          protocol: "s3-multipart",
          size: e.data.size,
          metadata: e.meta,
        };
      }
      tT.VERSION = "3.11.0";
      var tA = i(59326);
      function tD(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e, t))
          throw TypeError("attempted to use private field on non-instance");
        return e;
      }
      var tU = 0;
      function tR(e) {
        return "__private_" + tU++ + "_" + e;
      }
      var tI = tR("uppy"),
        tM = tR("events");
      class tN {
        constructor(e) {
          Object.defineProperty(this, tI, { writable: !0, value: void 0 }),
            Object.defineProperty(this, tM, { writable: !0, value: [] }),
            (tD(this, tI)[tI] = e);
        }
        on(e, t) {
          return tD(this, tM)[tM].push([e, t]), tD(this, tI)[tI].on(e, t);
        }
        remove() {
          for (let [e, t] of tD(this, tM)[tM].splice(0))
            tD(this, tI)[tI].off(e, t);
        }
        onFilePause(e, t) {
          this.on("upload-pause", (i, r) => {
            e === i && t(r);
          });
        }
        onFileRemove(e, t) {
          this.on("file-removed", (i) => {
            e === i.id && t(i.id);
          });
        }
        onPause(e, t) {
          this.on("upload-pause", (i, r) => {
            e === i && t(r);
          });
        }
        onRetry(e, t) {
          this.on("upload-retry", (i) => {
            e === i && t();
          });
        }
        onRetryAll(e, t) {
          this.on("retry-all", () => {
            tD(this, tI)[tI].getFile(e) && t();
          });
        }
        onPauseAll(e, t) {
          this.on("pause-all", () => {
            tD(this, tI)[tI].getFile(e) && t();
          });
        }
        onCancelAll(e, t) {
          var i = this;
          this.on("cancel-all", function () {
            tD(i, tI)[tI].getFile(e) && t(...arguments);
          });
        }
        onResumeAll(e, t) {
          this.on("resume-all", () => {
            tD(this, tI)[tI].getFile(e) && t();
          });
        }
      }
      function tB(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e, t))
          throw TypeError("attempted to use private field on non-instance");
        return e;
      }
      var tL = 0;
      function tj(e) {
        return "__private_" + tL++ + "_" + e;
      }
      var tz = tj("aliveTimer"),
        t$ = tj("isDone"),
        tq = tj("onTimedOut"),
        tH = tj("timeout");
      class tV {
        constructor(e, t) {
          Object.defineProperty(this, tz, { writable: !0, value: void 0 }),
            Object.defineProperty(this, t$, { writable: !0, value: !1 }),
            Object.defineProperty(this, tq, { writable: !0, value: void 0 }),
            Object.defineProperty(this, tH, { writable: !0, value: void 0 }),
            (tB(this, tH)[tH] = e),
            (tB(this, tq)[tq] = t);
        }
        progress() {
          !tB(this, t$)[t$] &&
            tB(this, tH)[tH] > 0 &&
            (clearTimeout(tB(this, tz)[tz]),
            (tB(this, tz)[tz] = setTimeout(
              tB(this, tq)[tq],
              tB(this, tH)[tH]
            )));
        }
        done() {
          tB(this, t$)[t$] ||
            (clearTimeout(tB(this, tz)[tz]),
            (tB(this, tz)[tz] = void 0),
            (tB(this, t$)[t$] = !0));
        }
      }
      function tW(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e, t))
          throw TypeError("attempted to use private field on non-instance");
        return e;
      }
      var tG = 0;
      function tK(e) {
        return "__private_" + tG++ + "_" + e;
      }
      function tZ(e, t) {
        if (e && ((0 !== e.readyState && 4 !== e.readyState) || 0 === e.status))
          return new m(t, e);
        let i = new y("Upload error", { cause: t });
        return (i.request = e), i;
      }
      let tX = (e) => e.data;
      var tY = tK("addEventHandlerForFile"),
        tJ = tK("addEventHandlerIfFileStillExists");
      class tQ {
        constructor(e, t) {
          Object.defineProperty(this, tJ, { value: t1 }),
            Object.defineProperty(this, tY, { value: t0 }),
            (this.uppy = e),
            (this.opts = { validateStatus: (e) => e >= 200 && e < 300, ...t }),
            (this.requests = t[el]),
            (this.uploaderEvents = Object.create(null)),
            (this.i18n = t.i18n);
        }
        getOptions(e) {
          var t;
          let { uppy: i } = this,
            r = i.getState().xhrUpload;
          return {
            ...this.opts,
            ...(r || {}),
            ...(e.xhrUpload || {}),
            headers: {
              ...this.opts.headers,
              ...(null == r ? void 0 : r.headers),
              ...(null == (t = e.xhrUpload) ? void 0 : t.headers),
            },
          };
        }
        uploadLocalFile(e) {
          let t = this.getOptions(e);
          return new Promise((i, r) => {
            let n = t.formData
                ? (function (e, t) {
                    let i = new FormData();
                    !(function (e, t, i) {
                      (Array.isArray(i.allowedMetaFields)
                        ? i.allowedMetaFields
                        : Object.keys(t)
                      ).forEach((i) => {
                        e.append(i, t[i]);
                      });
                    })(i, e.meta, t);
                    let r = e.data.slice(0, e.data.size, e.meta.type);
                    return (
                      e.name
                        ? i.append(t.fieldName, r, e.meta.name)
                        : i.append(t.fieldName, r),
                      i
                    );
                  })(e, t)
                : tX(e, t),
              s = new XMLHttpRequest();
            this.uploaderEvents[e.id] = new tN(this.uppy);
            let o = new tV(t.timeout, () => {
                s.abort(), l.done();
                let i = Error(
                  this.i18n("timedOut", { seconds: Math.ceil(t.timeout / 1e3) })
                );
                this.uppy.emit("upload-error", e, i), r(i);
              }),
              a = (0, tA.x)();
            s.upload.addEventListener("loadstart", () => {
              this.uppy.log(`[AwsS3/XHRUpload] ${a} started`);
            }),
              s.upload.addEventListener("progress", (t) => {
                this.uppy.log(
                  `[AwsS3/XHRUpload] ${a} progress: ${t.loaded} / ${t.total}`
                ),
                  o.progress(),
                  t.lengthComputable &&
                    this.uppy.emit("upload-progress", this.uppy.getFile(e.id), {
                      uploader: this,
                      bytesUploaded: t.loaded,
                      bytesTotal: t.total,
                    });
              }),
              s.addEventListener("load", (n) => {
                if (
                  (this.uppy.log(`[AwsS3/XHRUpload] ${a} finished`),
                  o.done(),
                  l.done(),
                  this.uploaderEvents[e.id] &&
                    (this.uploaderEvents[e.id].remove(),
                    (this.uploaderEvents[e.id] = null)),
                  t.validateStatus(n.target.status, s.responseText, s))
                ) {
                  let r = t.getResponseData(s.responseText, s),
                    o = r[t.responseUrlFieldName],
                    a = { status: n.target.status, body: r, uploadURL: o };
                  return (
                    this.uppy.emit(
                      "upload-success",
                      this.uppy.getFile(e.id),
                      a
                    ),
                    o && this.uppy.log(`Download ${e.name} from ${o}`),
                    i(e)
                  );
                }
                let u = t.getResponseData(s.responseText, s),
                  h = tZ(s, t.getResponseError(s.responseText, s)),
                  d = { status: n.target.status, body: u };
                return this.uppy.emit("upload-error", e, h, d), r(h);
              }),
              s.addEventListener("error", () => {
                this.uppy.log(`[AwsS3/XHRUpload] ${a} errored`),
                  o.done(),
                  l.done(),
                  this.uploaderEvents[e.id] &&
                    (this.uploaderEvents[e.id].remove(),
                    (this.uploaderEvents[e.id] = null));
                let i = tZ(s, t.getResponseError(s.responseText, s));
                return this.uppy.emit("upload-error", e, i), r(i);
              }),
              s.open(t.method.toUpperCase(), t.endpoint, !0),
              (s.withCredentials = !!t.withCredentials),
              "" !== t.responseType && (s.responseType = t.responseType),
              Object.keys(t.headers).forEach((e) => {
                s.setRequestHeader(e, t.headers[e]);
              });
            let l = this.requests.run(
              () => (
                s.send(n),
                () => {
                  o.done(), s.abort();
                }
              ),
              { priority: 1 }
            );
            tW(this, tY)[tY]("file-removed", e.id, () => {
              l.abort(), r(Error("File removed"));
            }),
              tW(this, tJ)[tJ]("cancel-all", e.id, function (e) {
                let { reason: t } = void 0 === e ? {} : e;
                "user" === t && l.abort(), r(Error("Upload cancelled"));
              });
          });
        }
      }
      function t0(e, t, i) {
        this.uploaderEvents[t].on(e, (e) => {
          var r;
          t === (null != (r = null == e ? void 0 : e.id) ? r : e) && i();
        });
      }
      function t1(e, t, i) {
        var r = this;
        this.uploaderEvents[t].on(e, function () {
          r.uppy.getFile(t) && i(...arguments);
        });
      }
      var t5 = function (e, t) {
          let i = t.headers
            ? t.headers["content-type"]
            : t.getResponseHeader("Content-Type");
          if ("string" == typeof i) {
            let t = i.replace(/;.*$/, "").toLowerCase();
            if (
              "application/xml" === t ||
              "text/xml" === t ||
              ("text/html" === t && /^<\?xml /.test(e))
            )
              return !0;
          }
          return !1;
        },
        t2 = {
          strings: {
            timedOut: "Upload stalled for %{seconds} seconds, aborting.",
          },
        };
      function t3(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e, t))
          throw TypeError("attempted to use private field on non-instance");
        return e;
      }
      var t8 = 0;
      function t4(e) {
        return "__private_" + t8++ + "_" + e;
      }
      function t6(e, t) {
        let i = e.indexOf(`<${t}>`),
          r = e.indexOf(`</${t}>`, i);
        return -1 !== i && -1 !== r ? e.slice(i + t.length + 2, r) : "";
      }
      function t7(e) {
        if (e && e.error) {
          let t = Error(e.message);
          throw (Object.assign(t, e.error), t);
        }
        return e;
      }
      function t9(e, t) {
        if (t5(e, t)) return Error(t6(e, "Message"));
      }
      let ie = !1;
      var it = t4("client"),
        ii = t4("requests"),
        ir = t4("uploader"),
        is = t4("handleUpload"),
        io = t4("setCompanionHeaders"),
        ia = t4("getCompanionClientArgs");
      s = Symbol.for("uppy test: getClient");
      class il extends o.Z {
        constructor(e, t) {
          if ((null == t ? void 0 : t.shouldUseMultipart) != null)
            return new tT(e, t);
          super(e, t),
            Object.defineProperty(this, it, { writable: !0, value: void 0 }),
            Object.defineProperty(this, ii, { writable: !0, value: void 0 }),
            Object.defineProperty(this, ir, { writable: !0, value: void 0 }),
            Object.defineProperty(this, is, {
              writable: !0,
              value: async (e) => {
                let t = Object.create(null);
                function i(e) {
                  var i;
                  let { id: r } = e;
                  null == (i = t[r]) || i.abort();
                }
                this.uppy.on("file-removed", i);
                let r = eh(eu(this.uppy.getFilesByIds(e)));
                this.uppy.emit("upload-start", r);
                let n = t3(this, ii)[ii].wrapPromiseFunction((e) =>
                    this.opts.getUploadParameters(e)
                  ),
                  s = e.length;
                return Promise.allSettled(
                  e.map(
                    (e, i) => (
                      (t[e] = n(this.uppy.getFile(e))),
                      t[e]
                        .then((r) => {
                          delete t[e];
                          let n = this.uppy.getFile(e);
                          !(function (e, t) {
                            if (
                              !(
                                null != t &&
                                "string" == typeof t.url &&
                                ("object" == typeof t.fields ||
                                  null == t.fields)
                              )
                            )
                              throw TypeError(`AwsS3: got incorrect result from 'getUploadParameters()' for file '${
                                e.name
                              }', expected an object '{ url, method, fields, headers }' but got '${JSON.stringify(
                                t
                              )}' instead.
See https://uppy.io/docs/aws-s3/#getUploadParameters-file for more on the expected format.`);
                            if (
                              !(
                                null == t.method || /^p(u|os)t$/i.test(t.method)
                              )
                            )
                              throw TypeError(`AwsS3: got incorrect method from 'getUploadParameters()' for file '${e.name}', expected  'PUT' or 'POST' but got '${t.method}' instead.
See https://uppy.io/docs/aws-s3/#getUploadParameters-file for more on the expected format.`);
                          })(n, r);
                          let {
                              method: o = "POST",
                              url: a,
                              fields: l,
                              headers: u,
                            } = r,
                            h = {
                              method: o,
                              formData: "POST" === o.toUpperCase(),
                              endpoint: a,
                              allowedMetaFields: l ? Object.keys(l) : [],
                            };
                          return (
                            u && (h.headers = u),
                            this.uppy.setFileState(n.id, {
                              meta: { ...n.meta, ...l },
                              xhrUpload: h,
                            }),
                            this.uploadFile(n.id, i, s)
                          );
                        })
                        .catch((i) => {
                          delete t[e];
                          let r = this.uppy.getFile(e);
                          return (
                            this.uppy.emit("upload-error", r, i),
                            Promise.reject(i)
                          );
                        })
                    )
                  )
                ).finally(() => {
                  this.uppy.off("file-removed", i);
                });
              },
            }),
            Object.defineProperty(this, io, {
              writable: !0,
              value: () => (
                t3(this, it)[it].setCompanionHeaders(
                  this.opts.companionHeaders
                ),
                Promise.resolve()
              ),
            }),
            Object.defineProperty(this, ia, {
              writable: !0,
              value: (e) => {
                let t = t3(this, ir)[ir].getOptions(e),
                  i = Array.isArray(t.allowedMetaFields)
                    ? t.allowedMetaFields
                    : Object.keys(e.meta);
                return {
                  ...e.remote.body,
                  protocol: "multipart",
                  endpoint: t.endpoint,
                  size: e.data.size,
                  fieldname: t.fieldName,
                  metadata: Object.fromEntries(i.map((t) => [t, e.meta[t]])),
                  httpMethod: t.method,
                  useFormData: t.formData,
                  headers:
                    "function" == typeof t.headers ? t.headers(e) : t.headers,
                };
              },
            }),
            (this.type = "uploader"),
            (this.id = this.opts.id || "AwsS3"),
            (this.title = "AWS S3"),
            (this.defaultLocale = t2);
          let i = {
            timeout: 3e4,
            limit: 0,
            allowedMetaFields: [],
            getUploadParameters: this.getUploadParameters.bind(this),
            shouldUseMultipart: !1,
            companionHeaders: {},
          };
          if (
            ((this.opts = { ...i, ...t }),
            (null == t ? void 0 : t.allowedMetaFields) === void 0 &&
              "metaFields" in this.opts)
          )
            throw Error(
              "The `metaFields` option has been renamed to `allowedMetaFields`."
            );
          this.i18nInit(),
            (t3(this, it)[it] = new k(e, t)),
            (t3(this, ii)[ii] = new ei(this.opts.limit));
        }
        [s]() {
          return t3(this, it)[it];
        }
        get client() {
          return t3(this, it)[it];
        }
        set client(e) {
          t3(this, it)[it] = e;
        }
        getUploadParameters(e) {
          if (!this.opts.companionUrl)
            throw Error(
              "Expected a `companionUrl` option containing a Companion address."
            );
          let t = e.meta.name,
            { type: i } = e.meta,
            r = Object.fromEntries(
              this.opts.allowedMetaFields
                .filter((t) => null != e.meta[t])
                .map((t) => [`metadata[${t}]`, e.meta[t].toString()])
            ),
            n = new URLSearchParams({ filename: t, type: i, ...r });
          return t3(this, it)[it].get(`s3/params?${n}`).then(t7);
        }
        uploadFile(e, t, i) {
          let r = this.uppy.getFile(e);
          if ((this.uppy.log(`uploading ${t} of ${i}`), r.error))
            throw Error(r.error);
          if (r.isRemote) {
            let e = new AbortController(),
              t = (t) => {
                t.id === r.id && e.abort();
              };
            this.uppy.on("file-removed", t);
            let i = this.uppy
              .getRequestClientForFile(r)
              .uploadRemoteFile(r, t3(this, ia)[ia](r), {
                signal: e.signal,
                getQueue: () => t3(this, ii)[ii],
              });
            return (
              t3(this, ii)[ii].wrapSyncFunction(
                () => {
                  this.uppy.off("file-removed", t);
                },
                { priority: -1 }
              )(),
              i
            );
          }
          return t3(this, ir)[ir].uploadLocalFile(r, t, i);
        }
        install() {
          let { uppy: e } = this;
          e.addPreProcessor(t3(this, io)[io]), e.addUploader(t3(this, is)[is]);
          let t = {
            fieldName: "file",
            responseUrlFieldName: "location",
            timeout: this.opts.timeout,
            [el]: t3(this, ii)[ii],
            responseType: "text",
            getResponseData:
              this.opts.getResponseData ||
              function (t, i) {
                var r, n;
                return t5(t, i)
                  ? {
                      location:
                        ((r = i.responseURL),
                        (n = t6(t, "Location")),
                        r ||
                          n.startsWith("https://") ||
                          n.startsWith("http://") ||
                          (n = `https://${n}`),
                        new URL(n, r || void 0).toString()),
                      bucket: t6(t, "Bucket"),
                      key: t6(t, "Key"),
                      etag: t6(t, "ETag"),
                    }
                  : "POST" === this.method.toUpperCase()
                  ? (ie ||
                      (e.log(
                        "[AwsS3] No response data found, make sure to set the success_action_status AWS SDK option to 201. See https://uppy.io/docs/aws-s3/#POST-Uploads",
                        "warning"
                      ),
                      (ie = !0)),
                    { location: null })
                  : i.responseURL
                  ? { location: i.responseURL.replace(/\?.*$/, "") }
                  : { location: null };
              },
            getResponseError: t9,
          };
          (t.i18n = this.i18n), (t3(this, ir)[ir] = new tQ(e, t));
        }
        uninstall() {
          this.uppy.removePreProcessor(t3(this, io)[io]),
            this.uppy.removeUploader(t3(this, is)[is]);
        }
      }
      il.VERSION = "3.6.2";
    },
    6524: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return n;
        },
      });
      var r = i(88616);
      class n {
        constructor(e, t) {
          (this.uppy = e), (this.opts = null != t ? t : {});
        }
        getPluginState() {
          let { plugins: e } = this.uppy.getState();
          return (null == e ? void 0 : e[this.id]) || {};
        }
        setPluginState(e) {
          if (!e) return;
          let { plugins: t } = this.uppy.getState();
          this.uppy.setState({
            plugins: { ...t, [this.id]: { ...t[this.id], ...e } },
          });
        }
        setOptions(e) {
          (this.opts = { ...this.opts, ...e }),
            this.setPluginState(void 0),
            this.i18nInit();
        }
        i18nInit() {
          let e = new r.Z([
            this.defaultLocale,
            this.uppy.locale,
            this.opts.locale,
          ]);
          (this.i18n = e.translate.bind(e)),
            (this.i18nArray = e.translateArray.bind(e)),
            this.setPluginState(void 0);
        }
        addTarget(e) {
          throw Error(
            "Extend the addTarget method to add your plugin to another plugin's target"
          );
        }
        install() {}
        uninstall() {}
        update(e) {}
        afterUpdate() {}
      }
    },
    40458: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = i(17398),
        n = i(59097),
        s = i(6003),
        o = i(6524);
      function a(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e, t))
          throw TypeError("attempted to use private field on non-instance");
        return e;
      }
      var l = 0,
        u = "__private_" + l++ + "_updateUI";
      class h extends o.Z {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, u, { writable: !0, value: void 0 });
        }
        getTargetPlugin(e) {
          let t;
          return (
            "function" == typeof (null == e ? void 0 : e.addTarget)
              ? (t = e) instanceof h ||
                console.warn(
                  Error(
                    "The provided plugin is not an instance of UIPlugin. This is an indication of a bug with the way Uppy is bundled.",
                    { cause: { targetPlugin: t, UIPlugin: h } }
                  )
                )
              : "function" == typeof e &&
                this.uppy.iteratePlugins((i) => {
                  i instanceof e && (t = i);
                }),
            t
          );
        }
        mount(e, t) {
          var i, o;
          let l = t.id,
            h = (void 0 === i && (i = document), "string" == typeof e)
              ? i.querySelector(e)
              : (0, n.Z)(e)
              ? e
              : null;
          if (h) {
            let t, i;
            this.isTargetDOMEl = !0;
            let n = document.createElement("div");
            return (
              n.classList.add("uppy-Root"),
              (a(this, u)[u] =
                ((o = (e) => {
                  this.uppy.getPlugin(this.id) &&
                    ((0, r.render)(this.render(e), n), this.afterUpdate());
                }),
                (i = null),
                function () {
                  for (
                    var e = arguments.length, r = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    r[n] = arguments[n];
                  return (
                    (t = r),
                    i ||
                      (i = Promise.resolve().then(() => ((i = null), o(...t)))),
                    i
                  );
                })),
              this.uppy.log(`Installing ${l} to a DOM element '${e}'`),
              this.opts.replaceTargetContent && (h.innerHTML = ""),
              (0, r.render)(this.render(this.uppy.getState()), n),
              (this.el = n),
              h.appendChild(n),
              (n.dir = this.opts.direction || (0, s.Z)(n) || "ltr"),
              this.onMount(),
              this.el
            );
          }
          let d = this.getTargetPlugin(e);
          if (d)
            return (
              this.uppy.log(`Installing ${l} to ${d.id}`),
              (this.parent = d),
              (this.el = d.addTarget(t)),
              this.onMount(),
              this.el
            );
          this.uppy.log(`Not installing ${l}`);
          let p = `Invalid target option given to ${l}.`;
          throw (
            ("function" == typeof e
              ? (p +=
                  " The given target is not a Plugin class. Please check that you're not specifying a React Component instead of a plugin. If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly.")
              : (p +=
                  "If you meant to target an HTML element, please make sure that the element exists. Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. (see https://github.com/transloadit/uppy/issues/1042)\n\nIf you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct."),
            Error(p))
          );
        }
        render(e) {
          throw Error(
            "Extend the render method to add your plugin to a DOM element"
          );
        }
        update(e) {
          if (null != this.el) {
            var t, i;
            null == (t = (i = a(this, u))[u]) || t.call(i, e);
          }
        }
        unmount() {
          if (this.isTargetDOMEl) {
            var e;
            null == (e = this.el) || e.remove();
          }
          this.onUnmount();
        }
        onMount() {}
        onUnmount() {}
      }
      var d = h;
    },
    39930: function (e, t, i) {
      "use strict";
      let r, n;
      i.d(t, {
        Z: function () {
          return ec;
        },
      });
      var s = i(88616),
        o = i(2373),
        a = i(59326),
        l = i(85902);
      function u(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e, t))
          throw TypeError("attempted to use private field on non-instance");
        return e;
      }
      var h = 0;
      function d(e) {
        return "__private_" + h++ + "_" + e;
      }
      var p = d("callbacks"),
        c = d("publish");
      class f {
        constructor() {
          Object.defineProperty(this, c, { value: m }),
            (this.state = {}),
            Object.defineProperty(this, p, { writable: !0, value: new Set() });
        }
        getState() {
          return this.state;
        }
        setState(e) {
          let t = { ...this.state },
            i = { ...this.state, ...e };
          (this.state = i), u(this, c)[c](t, i, e);
        }
        subscribe(e) {
          return (
            u(this, p)[p].add(e),
            () => {
              u(this, p)[p].delete(e);
            }
          );
        }
      }
      function m() {
        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        u(this, p)[p].forEach((e) => {
          e(...t);
        });
      }
      f.VERSION = "3.2.2";
      var g = i(68954),
        y = i(67706),
        v = i(49971);
      function b(e) {
        return e < 10 ? `0${e}` : e.toString();
      }
      function w() {
        let e = new Date(),
          t = b(e.getHours()),
          i = b(e.getMinutes()),
          r = b(e.getSeconds());
        return `${t}:${i}:${r}`;
      }
      let P = {
          debug: () => {},
          warn: () => {},
          error: function () {
            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
              t[i] = arguments[i];
            return console.error(`[Uppy] [${w()}]`, ...t);
          },
        },
        _ = {
          debug: function () {
            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
              t[i] = arguments[i];
            return console.debug(`[Uppy] [${w()}]`, ...t);
          },
          warn: function () {
            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
              t[i] = arguments[i];
            return console.warn(`[Uppy] [${w()}]`, ...t);
          },
          error: function () {
            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
              t[i] = arguments[i];
            return console.error(`[Uppy] [${w()}]`, ...t);
          },
        };
      var S = i(15351),
        C = i(22648);
      let E = {
        maxFileSize: null,
        minFileSize: null,
        maxTotalFileSize: null,
        maxNumberOfFiles: null,
        minNumberOfFiles: null,
        allowedFileTypes: null,
        requiredMetaFields: [],
      };
      class F extends Error {
        constructor(e, t) {
          var i;
          super(e),
            (this.isRestriction = !0),
            (this.isUserFacing =
              null == (i = null == t ? void 0 : t.isUserFacing) || i),
            null != t && t.file && (this.file = t.file);
        }
      }
      class T {
        constructor(e, t) {
          (this.i18n = t),
            (this.getOpts = () => {
              var t;
              let i = e();
              if (
                (null == (t = i.restrictions) ? void 0 : t.allowedFileTypes) !=
                  null &&
                !Array.isArray(i.restrictions.allowedFileTypes)
              )
                throw TypeError(
                  "`restrictions.allowedFileTypes` must be an array"
                );
              return i;
            });
        }
        validateAggregateRestrictions(e, t) {
          let { maxTotalFileSize: i, maxNumberOfFiles: r } =
            this.getOpts().restrictions;
          if (r && e.filter((e) => !e.isGhost).length + t.length > r)
            throw new F(
              `${this.i18n("youCanOnlyUploadX", { smart_count: r })}`
            );
          if (i) {
            let r = e.reduce((e, t) => {
              var i;
              return e + (null != (i = t.size) ? i : 0);
            }, 0);
            for (let e of t)
              if (null != e.size && (r += e.size) > i)
                throw new F(
                  this.i18n("exceedsSize", { size: S(i), file: e.name })
                );
          }
        }
        validateSingleFile(e) {
          let {
            maxFileSize: t,
            minFileSize: i,
            allowedFileTypes: r,
          } = this.getOpts().restrictions;
          if (
            r &&
            !r.some((t) =>
              t.includes("/")
                ? !!e.type && C(e.type.replace(/;.*?$/, ""), t)
                : "." === t[0] &&
                  !!e.extension &&
                  e.extension.toLowerCase() === t.slice(1).toLowerCase()
            )
          ) {
            let t = r.join(", ");
            throw new F(this.i18n("youCanOnlyUploadFileTypes", { types: t }), {
              file: e,
            });
          }
          if (t && null != e.size && e.size > t)
            throw new F(
              this.i18n("exceedsSize", { size: S(t), file: e.name }),
              { file: e }
            );
          if (i && null != e.size && e.size < i)
            throw new F(this.i18n("inferiorSize", { size: S(i) }), { file: e });
        }
        validate(e, t) {
          t.forEach((e) => {
            this.validateSingleFile(e);
          }),
            this.validateAggregateRestrictions(e, t);
        }
        validateMinNumberOfFiles(e) {
          let { minNumberOfFiles: t } = this.getOpts().restrictions;
          if (t && Object.keys(e).length < t)
            throw new F(
              this.i18n("youHaveToAtLeastSelectX", { smart_count: t })
            );
        }
        getMissingRequiredMetaFields(e) {
          let t = new F(
              this.i18n("missingRequiredMetaFieldOnFile", { fileName: e.name })
            ),
            { requiredMetaFields: i } = this.getOpts().restrictions,
            r = [];
          for (let t of i)
            (Object.hasOwn(e.meta, t) && "" !== e.meta[t]) || r.push(t);
          return { missingFields: r, error: t };
        }
      }
      var O = {
        strings: {
          addBulkFilesFailed: {
            0: "Failed to add %{smart_count} file due to an internal error",
            1: "Failed to add %{smart_count} files due to internal errors",
          },
          youCanOnlyUploadX: {
            0: "You can only upload %{smart_count} file",
            1: "You can only upload %{smart_count} files",
          },
          youHaveToAtLeastSelectX: {
            0: "You have to select at least %{smart_count} file",
            1: "You have to select at least %{smart_count} files",
          },
          exceedsSize: "%{file} exceeds maximum allowed size of %{size}",
          missingRequiredMetaField: "Missing required meta fields",
          missingRequiredMetaFieldOnFile:
            "Missing required meta fields in %{fileName}",
          inferiorSize: "This file is smaller than the allowed size of %{size}",
          youCanOnlyUploadFileTypes: "You can only upload: %{types}",
          noMoreFilesAllowed: "Cannot add more files",
          noDuplicates:
            "Cannot add the duplicate file '%{fileName}', it already exists",
          companionError: "Connection with Companion failed",
          authAborted: "Authentication aborted",
          companionUnauthorizeHint:
            "To unauthorize to your %{provider} account, please go to %{url}",
          failedToUpload: "Failed to upload %{file}",
          noInternetConnection: "No Internet connection",
          connectedToInternet: "Connected to the Internet",
          noFilesFound: "You have no files or folders here",
          noSearchResults:
            "Unfortunately, there are no results for this search",
          selectX: { 0: "Select %{smart_count}", 1: "Select %{smart_count}" },
          allFilesFromFolderNamed: "All files from folder %{name}",
          openFolderNamed: "Open folder %{name}",
          cancel: "Cancel",
          logOut: "Log out",
          filter: "Filter",
          resetFilter: "Reset filter",
          loading: "Loading...",
          loadedXFiles: "Loaded %{numFiles} files",
          authenticateWithTitle:
            "Please authenticate with %{pluginName} to select files",
          authenticateWith: "Connect to %{pluginName}",
          signInWithGoogle: "Sign in with Google",
          searchImages: "Search for images",
          enterTextToSearch: "Enter text to search for images",
          search: "Search",
          resetSearch: "Reset search",
          emptyFolderAdded: "No files were added from empty folder",
          addedNumFiles: "Added %{numFiles} file(s)",
          folderAlreadyAdded: 'The folder "%{folder}" was already added',
          folderAdded: {
            0: "Added %{smart_count} file from %{folder}",
            1: "Added %{smart_count} files from %{folder}",
          },
          additionalRestrictionsFailed:
            "%{count} additional restrictions were not fulfilled",
        },
      };
      function k(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e, t))
          throw TypeError("attempted to use private field on non-instance");
        return e;
      }
      var x = 0;
      function A(e) {
        return "__private_" + x++ + "_" + e;
      }
      let D = {
        totalProgress: 0,
        allowNewUpload: !0,
        error: null,
        recoveredState: null,
      };
      var U = A("plugins"),
        R = A("restricter"),
        I = A("storeUnsubscribe"),
        M = A("emitter"),
        N = A("preProcessors"),
        B = A("uploaders"),
        L = A("postProcessors"),
        j = A("informAndEmit"),
        z = A("checkRequiredMetaFieldsOnFile"),
        $ = A("checkRequiredMetaFields"),
        q = A("assertNewUploadAllowed"),
        H = A("transformFile"),
        V = A("startIfAutoProceed"),
        W = A("checkAndUpdateFileState"),
        G = A("addListeners"),
        K = A("updateOnlineStatus"),
        Z = A("requestClientById"),
        X = A("createUpload"),
        Y = A("getUpload"),
        J = A("removeUpload"),
        Q = A("runUpload");
      (r = Symbol.for("uppy test: getPlugins")),
        (n = Symbol.for("uppy test: createUpload"));
      class ee {
        constructor(e) {
          Object.defineProperty(this, Q, { value: ep }),
            Object.defineProperty(this, J, { value: ed }),
            Object.defineProperty(this, Y, { value: eh }),
            Object.defineProperty(this, X, { value: eu }),
            Object.defineProperty(this, G, { value: el }),
            Object.defineProperty(this, W, { value: ea }),
            Object.defineProperty(this, V, { value: eo }),
            Object.defineProperty(this, H, { value: es }),
            Object.defineProperty(this, q, { value: en }),
            Object.defineProperty(this, $, { value: er }),
            Object.defineProperty(this, z, { value: ei }),
            Object.defineProperty(this, j, { value: et }),
            Object.defineProperty(this, U, {
              writable: !0,
              value: Object.create(null),
            }),
            Object.defineProperty(this, R, { writable: !0, value: void 0 }),
            Object.defineProperty(this, I, { writable: !0, value: void 0 }),
            Object.defineProperty(this, M, { writable: !0, value: o() }),
            Object.defineProperty(this, N, { writable: !0, value: new Set() }),
            Object.defineProperty(this, B, { writable: !0, value: new Set() }),
            Object.defineProperty(this, L, { writable: !0, value: new Set() }),
            (this.scheduledAutoProceed = null),
            (this.wasOffline = !1),
            (this.calculateProgress = l(
              (e, t) => {
                let i = this.getFile(null == e ? void 0 : e.id);
                if (null == e || !i) {
                  this.log(
                    `Not setting progress for a file that has been removed: ${
                      null == e ? void 0 : e.id
                    }`
                  );
                  return;
                }
                if (100 === i.progress.percentage) {
                  this.log(
                    `Not setting progress for a file that has been already uploaded: ${e.id}`
                  );
                  return;
                }
                let r = Number.isFinite(t.bytesTotal) && t.bytesTotal > 0;
                this.setFileState(e.id, {
                  progress: {
                    ...i.progress,
                    bytesUploaded: t.bytesUploaded,
                    bytesTotal: t.bytesTotal,
                    percentage: r
                      ? Math.round((t.bytesUploaded / t.bytesTotal) * 100)
                      : 0,
                  },
                }),
                  this.calculateTotalProgress();
              },
              500,
              { leading: !0, trailing: !0 }
            )),
            Object.defineProperty(this, K, {
              writable: !0,
              value: this.updateOnlineStatus.bind(this),
            }),
            Object.defineProperty(this, Z, { writable: !0, value: new Map() }),
            (this.defaultLocale = O);
          let t = {
              id: "uppy",
              autoProceed: !1,
              allowMultipleUploadBatches: !0,
              debug: !1,
              restrictions: E,
              meta: {},
              onBeforeFileAdded: (e, t) => !Object.hasOwn(t, e.id),
              onBeforeUpload: (e) => e,
              store: new f(),
              logger: P,
              infoTimeout: 5e3,
            },
            i = { ...t, ...e };
          (this.opts = {
            ...i,
            restrictions: { ...t.restrictions, ...(e && e.restrictions) },
          }),
            e && e.logger && e.debug
              ? this.log(
                  "You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.",
                  "warning"
                )
              : e && e.debug && (this.opts.logger = _),
            this.log(`Using Core v${ee.VERSION}`),
            this.i18nInit(),
            (this.store = this.opts.store),
            this.setState({
              ...D,
              plugins: {},
              files: {},
              currentUploads: {},
              capabilities: {
                uploadProgress: (function (e) {
                  if (
                    (null == e &&
                      "undefined" != typeof navigator &&
                      (e = navigator.userAgent),
                    !e)
                  )
                    return !0;
                  let t = /Edge\/(\d+\.\d+)/.exec(e);
                  if (!t) return !0;
                  let i = t[1].split(".", 2),
                    r = parseInt(i[0], 10),
                    n = parseInt(i[1], 10);
                  return (
                    r < 15 ||
                    (15 === r && n < 15063) ||
                    r > 18 ||
                    (18 === r && n >= 18218)
                  );
                })(),
                individualCancellation: !0,
                resumableUploads: !1,
              },
              meta: { ...this.opts.meta },
              info: [],
            }),
            (k(this, R)[R] = new T(() => this.opts, this.i18n)),
            (k(this, I)[I] = this.store.subscribe((e, t, i) => {
              this.emit("state-update", e, t, i), this.updateAll(t);
            })),
            this.opts.debug &&
              "undefined" != typeof window &&
              (window[this.opts.id] = this),
            k(this, G)[G]();
        }
        emit(e) {
          for (
            var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            i[r - 1] = arguments[r];
          k(this, M)[M].emit(e, ...i);
        }
        on(e, t) {
          return k(this, M)[M].on(e, t), this;
        }
        once(e, t) {
          return k(this, M)[M].once(e, t), this;
        }
        off(e, t) {
          return k(this, M)[M].off(e, t), this;
        }
        updateAll(e) {
          this.iteratePlugins((t) => {
            t.update(e);
          });
        }
        setState(e) {
          this.store.setState(e);
        }
        getState() {
          return this.store.getState();
        }
        patchFilesState(e) {
          let t = this.getState().files;
          this.setState({
            files: {
              ...t,
              ...Object.fromEntries(
                Object.entries(e).map((e) => {
                  let [i, r] = e;
                  return [i, { ...t[i], ...r }];
                })
              ),
            },
          });
        }
        setFileState(e, t) {
          if (!this.getState().files[e])
            throw Error(
              `Can’t set state for ${e} (the file could have been removed)`
            );
          this.patchFilesState({ [e]: t });
        }
        i18nInit() {
          let e = new s.Z([this.defaultLocale, this.opts.locale], {
            onMissingKey: (e) => this.log(`Missing i18n string: ${e}`, "error"),
          });
          (this.i18n = e.translate.bind(e)),
            (this.i18nArray = e.translateArray.bind(e)),
            (this.locale = e.locale);
        }
        setOptions(e) {
          (this.opts = {
            ...this.opts,
            ...e,
            restrictions: {
              ...this.opts.restrictions,
              ...(null == e ? void 0 : e.restrictions),
            },
          }),
            e.meta && this.setMeta(e.meta),
            this.i18nInit(),
            e.locale &&
              this.iteratePlugins((t) => {
                t.setOptions(e);
              }),
            this.setState(void 0);
        }
        resetProgress() {
          let e = {
              percentage: 0,
              bytesUploaded: 0,
              uploadComplete: !1,
              uploadStarted: null,
            },
            t = { ...this.getState().files },
            i = {};
          Object.keys(t).forEach((r) => {
            i[r] = { ...t[r], progress: { ...t[r].progress, ...e } };
          }),
            this.setState({ files: i, ...D }),
            this.emit("reset-progress");
        }
        clearUploadedFiles() {
          this.setState({ ...D, files: {} });
        }
        addPreProcessor(e) {
          k(this, N)[N].add(e);
        }
        removePreProcessor(e) {
          return k(this, N)[N].delete(e);
        }
        addPostProcessor(e) {
          k(this, L)[L].add(e);
        }
        removePostProcessor(e) {
          return k(this, L)[L].delete(e);
        }
        addUploader(e) {
          k(this, B)[B].add(e);
        }
        removeUploader(e) {
          return k(this, B)[B].delete(e);
        }
        setMeta(e) {
          let t = { ...this.getState().meta, ...e },
            i = { ...this.getState().files };
          Object.keys(i).forEach((t) => {
            i[t] = { ...i[t], meta: { ...i[t].meta, ...e } };
          }),
            this.log("Adding metadata:"),
            this.log(e),
            this.setState({ meta: t, files: i });
        }
        setFileMeta(e, t) {
          let i = { ...this.getState().files };
          if (!i[e]) {
            this.log(
              "Was trying to set metadata for a file that has been removed: ",
              e
            );
            return;
          }
          let r = { ...i[e].meta, ...t };
          (i[e] = { ...i[e], meta: r }), this.setState({ files: i });
        }
        getFile(e) {
          return this.getState().files[e];
        }
        getFiles() {
          let { files: e } = this.getState();
          return Object.values(e);
        }
        getFilesByIds(e) {
          return e.map((e) => this.getFile(e));
        }
        getObjectOfFilesPerState() {
          let { files: e, totalProgress: t, error: i } = this.getState(),
            r = Object.values(e),
            n = r.filter((e) => {
              let { progress: t } = e;
              return !t.uploadComplete && t.uploadStarted;
            }),
            s = r.filter((e) => !e.progress.uploadStarted),
            o = r.filter(
              (e) =>
                e.progress.uploadStarted ||
                e.progress.preprocess ||
                e.progress.postprocess
            ),
            a = r.filter((e) => e.progress.uploadStarted),
            l = r.filter((e) => e.isPaused),
            u = r.filter((e) => e.progress.uploadComplete),
            h = r.filter((e) => e.error),
            d = n.filter((e) => !e.isPaused),
            p = r.filter(
              (e) => e.progress.preprocess || e.progress.postprocess
            );
          return {
            newFiles: s,
            startedFiles: o,
            uploadStartedFiles: a,
            pausedFiles: l,
            completeFiles: u,
            erroredFiles: h,
            inProgressFiles: n,
            inProgressNotPausedFiles: d,
            processingFiles: p,
            isUploadStarted: a.length > 0,
            isAllComplete: 100 === t && u.length === r.length && 0 === p.length,
            isAllErrored: !!i && h.length === r.length,
            isAllPaused: 0 !== n.length && l.length === n.length,
            isUploadInProgress: n.length > 0,
            isSomeGhost: r.some((e) => e.isGhost),
          };
        }
        validateRestrictions(e, t) {
          void 0 === t && (t = this.getFiles());
          try {
            k(this, R)[R].validate(t, [e]);
          } catch (e) {
            return e;
          }
          return null;
        }
        checkIfFileAlreadyExists(e) {
          let { files: t } = this.getState();
          return !!t[e] && !t[e].isGhost;
        }
        addFile(e) {
          k(this, q)[q](e);
          let {
              nextFilesState: t,
              validFilesToAdd: i,
              errors: r,
            } = k(this, W)[W]([e]),
            n = r.filter((e) => e.isRestriction);
          if ((k(this, j)[j](n), r.length > 0)) throw r[0];
          this.setState({ files: t });
          let [s] = i;
          return (
            this.emit("file-added", s),
            this.emit("files-added", i),
            this.log(`Added file: ${s.name}, ${s.id}, mime type: ${s.type}`),
            k(this, V)[V](),
            s.id
          );
        }
        addFiles(e) {
          k(this, q)[q]();
          let {
              nextFilesState: t,
              validFilesToAdd: i,
              errors: r,
            } = k(this, W)[W](e),
            n = r.filter((e) => e.isRestriction);
          k(this, j)[j](n);
          let s = r.filter((e) => !e.isRestriction);
          if (s.length > 0) {
            let e = "Multiple errors occurred while adding files:\n";
            if (
              (s.forEach((t) => {
                e += `
 * ${t.message}`;
              }),
              this.info(
                {
                  message: this.i18n("addBulkFilesFailed", {
                    smart_count: s.length,
                  }),
                  details: e,
                },
                "error",
                this.opts.infoTimeout
              ),
              "function" == typeof AggregateError)
            )
              throw AggregateError(s, e);
            {
              let t = Error(e);
              throw ((t.errors = s), t);
            }
          }
          this.setState({ files: t }),
            i.forEach((e) => {
              this.emit("file-added", e);
            }),
            this.emit("files-added", i),
            i.length > 5
              ? this.log(`Added batch of ${i.length} files`)
              : Object.values(i).forEach((e) => {
                  this.log(`Added file: ${e.name}
 id: ${e.id}
 type: ${e.type}`);
                }),
            i.length > 0 && k(this, V)[V]();
        }
        removeFiles(e, t) {
          let { files: i, currentUploads: r } = this.getState(),
            n = { ...i },
            s = { ...r },
            o = Object.create(null);
          function a(e) {
            return void 0 === o[e];
          }
          e.forEach((e) => {
            i[e] && ((o[e] = i[e]), delete n[e]);
          }),
            Object.keys(s).forEach((e) => {
              let t = r[e].fileIDs.filter(a);
              if (0 === t.length) {
                delete s[e];
                return;
              }
              let { capabilities: i } = this.getState();
              if (t.length !== r[e].fileIDs.length && !i.individualCancellation)
                throw Error("individualCancellation is disabled");
              s[e] = { ...r[e], fileIDs: t };
            });
          let l = { currentUploads: s, files: n };
          0 === Object.keys(n).length &&
            ((l.allowNewUpload = !0),
            (l.error = null),
            (l.recoveredState = null)),
            this.setState(l),
            this.calculateTotalProgress();
          let u = Object.keys(o);
          u.forEach((e) => {
            this.emit("file-removed", o[e], t);
          }),
            u.length > 5
              ? this.log(`Removed ${u.length} files`)
              : this.log(`Removed files: ${u.join(", ")}`);
        }
        removeFile(e, t) {
          this.removeFiles([e], t);
        }
        pauseResume(e) {
          if (
            !this.getState().capabilities.resumableUploads ||
            this.getFile(e).progress.uploadComplete
          )
            return;
          let t = !this.getFile(e).isPaused;
          return (
            this.setFileState(e, { isPaused: t }),
            this.emit("upload-pause", e, t),
            t
          );
        }
        pauseAll() {
          let e = { ...this.getState().files };
          Object.keys(e)
            .filter(
              (t) =>
                !e[t].progress.uploadComplete && e[t].progress.uploadStarted
            )
            .forEach((t) => {
              let i = { ...e[t], isPaused: !0 };
              e[t] = i;
            }),
            this.setState({ files: e }),
            this.emit("pause-all");
        }
        resumeAll() {
          let e = { ...this.getState().files };
          Object.keys(e)
            .filter(
              (t) =>
                !e[t].progress.uploadComplete && e[t].progress.uploadStarted
            )
            .forEach((t) => {
              let i = { ...e[t], isPaused: !1, error: null };
              e[t] = i;
            }),
            this.setState({ files: e }),
            this.emit("resume-all");
        }
        retryAll() {
          let e = { ...this.getState().files },
            t = Object.keys(e).filter((t) => e[t].error);
          if (
            (t.forEach((t) => {
              let i = { ...e[t], isPaused: !1, error: null };
              e[t] = i;
            }),
            this.setState({ files: e, error: null }),
            this.emit("retry-all", t),
            0 === t.length)
          )
            return Promise.resolve({ successful: [], failed: [] });
          let i = k(this, X)[X](t, { forceAllowNewUpload: !0 });
          return k(this, Q)[Q](i);
        }
        cancelAll(e) {
          let { reason: t = "user" } = void 0 === e ? {} : e;
          if ((this.emit("cancel-all", { reason: t }), "user" === t)) {
            let { files: e } = this.getState(),
              t = Object.keys(e);
            t.length && this.removeFiles(t, "cancel-all"), this.setState(D);
          }
        }
        retryUpload(e) {
          this.setFileState(e, { error: null, isPaused: !1 }),
            this.emit("upload-retry", e);
          let t = k(this, X)[X]([e], { forceAllowNewUpload: !0 });
          return k(this, Q)[Q](t);
        }
        logout() {
          this.iteratePlugins((e) => {
            var t;
            null == (t = e.provider) || null == t.logout || t.logout();
          });
        }
        calculateTotalProgress() {
          let e = this.getFiles().filter(
            (e) =>
              e.progress.uploadStarted ||
              e.progress.preprocess ||
              e.progress.postprocess
          );
          if (0 === e.length) {
            this.emit("progress", 0), this.setState({ totalProgress: 0 });
            return;
          }
          let t = e.filter((e) => null != e.progress.bytesTotal),
            i = e.filter((e) => null == e.progress.bytesTotal);
          if (0 === t.length) {
            let t = 100 * e.length,
              r = i.reduce((e, t) => e + t.progress.percentage, 0);
            this.setState({ totalProgress: Math.round((r / t) * 100) });
            return;
          }
          let r = t.reduce((e, t) => {
              var i;
              return e + (null != (i = t.progress.bytesTotal) ? i : 0);
            }, 0),
            n = r / t.length;
          r += n * i.length;
          let s = 0;
          t.forEach((e) => {
            s += e.progress.bytesUploaded;
          }),
            i.forEach((e) => {
              s += (n * (e.progress.percentage || 0)) / 100;
            });
          let o = 0 === r ? 0 : Math.round((s / r) * 100);
          o > 100 && (o = 100),
            this.setState({ totalProgress: o }),
            this.emit("progress", o);
        }
        updateOnlineStatus() {
          var e;
          null == (e = window.navigator.onLine) || e
            ? (this.emit("is-online"),
              this.wasOffline &&
                (this.emit("back-online"),
                this.info(this.i18n("connectedToInternet"), "success", 3e3),
                (this.wasOffline = !1)))
            : (this.emit("is-offline"),
              this.info(this.i18n("noInternetConnection"), "error", 0),
              (this.wasOffline = !0));
        }
        getID() {
          return this.opts.id;
        }
        use(e, t) {
          if ("function" != typeof e)
            throw TypeError(
              `Expected a plugin class, but got ${
                null === e ? "null" : typeof e
              }. Please verify that the plugin was imported and spelled correctly.`
            );
          let i = new e(this, t),
            r = i.id;
          if (!r) throw Error("Your plugin must have an id");
          if (!i.type) throw Error("Your plugin must have a type");
          let n = this.getPlugin(r);
          if (n)
            throw Error(`Already found a plugin named '${n.id}'. Tried to use: '${r}'.
Uppy plugins must have unique \`id\` options. See https://uppy.io/docs/plugins/#id.`);
          return (
            e.VERSION && this.log(`Using ${r} v${e.VERSION}`),
            i.type in k(this, U)[U]
              ? k(this, U)[U][i.type].push(i)
              : (k(this, U)[U][i.type] = [i]),
            i.install(),
            this.emit("plugin-added", i),
            this
          );
        }
        getPlugin(e) {
          for (let t of Object.values(k(this, U)[U])) {
            let i = t.find((t) => t.id === e);
            if (null != i) return i;
          }
        }
        [r](e) {
          return k(this, U)[U][e];
        }
        iteratePlugins(e) {
          Object.values(k(this, U)[U]).flat(1).forEach(e);
        }
        removePlugin(e) {
          this.log(`Removing plugin ${e.id}`),
            this.emit("plugin-remove", e),
            e.uninstall && e.uninstall();
          let t = k(this, U)[U][e.type],
            i = t.findIndex((t) => t.id === e.id);
          -1 !== i && t.splice(i, 1);
          let r = { plugins: { ...this.getState().plugins, [e.id]: void 0 } };
          this.setState(r);
        }
        close(e) {
          let { reason: t } = void 0 === e ? {} : e;
          this.log(
            `Closing Uppy instance ${this.opts.id}: removing all files and uninstalling plugins`
          ),
            this.cancelAll({ reason: t }),
            k(this, I)[I](),
            this.iteratePlugins((e) => {
              this.removePlugin(e);
            }),
            "undefined" != typeof window &&
              window.removeEventListener &&
              (window.removeEventListener("online", k(this, K)[K]),
              window.removeEventListener("offline", k(this, K)[K]));
        }
        hideInfo() {
          let { info: e } = this.getState();
          this.setState({ info: e.slice(1) }), this.emit("info-hidden");
        }
        info(e, t, i) {
          void 0 === t && (t = "info"), void 0 === i && (i = 3e3);
          let r = "object" == typeof e;
          this.setState({
            info: [
              ...this.getState().info,
              {
                type: t,
                message: r ? e.message : e,
                details: r ? e.details : null,
              },
            ],
          }),
            setTimeout(() => this.hideInfo(), i),
            this.emit("info-visible");
        }
        log(e, t) {
          let { logger: i } = this.opts;
          switch (t) {
            case "error":
              i.error(e);
              break;
            case "warning":
              i.warn(e);
              break;
            default:
              i.debug(e);
          }
        }
        registerRequestClient(e, t) {
          k(this, Z)[Z].set(e, t);
        }
        getRequestClientForFile(e) {
          if (!e.remote)
            throw Error(
              `Tried to get RequestClient for a non-remote file ${e.id}`
            );
          let t = k(this, Z)[Z].get(e.remote.requestClientId);
          if (null == t)
            throw Error(
              `requestClientId "${e.remote.requestClientId}" not registered for file "${e.id}"`
            );
          return t;
        }
        restore(e) {
          return (this.log(`Core: attempting to restore upload "${e}"`),
          this.getState().currentUploads[e])
            ? k(this, Q)[Q](e)
            : (k(this, J)[J](e), Promise.reject(Error("Nonexistent upload")));
        }
        [n]() {
          return k(this, X)[X](...arguments);
        }
        addResultData(e, t) {
          if (!k(this, Y)[Y](e)) {
            this.log(
              `Not setting result for an upload that has been removed: ${e}`
            );
            return;
          }
          let { currentUploads: i } = this.getState(),
            r = { ...i[e], result: { ...i[e].result, ...t } };
          this.setState({ currentUploads: { ...i, [e]: r } });
        }
        upload() {
          var e;
          (null != (e = k(this, U)[U].uploader) && e.length) ||
            this.log("No uploader type plugins are used", "warning");
          let { files: t } = this.getState(),
            i = this.opts.onBeforeUpload(t);
          return !1 === i
            ? Promise.reject(
                Error(
                  "Not starting the upload because onBeforeUpload returned false"
                )
              )
            : (i &&
                "object" == typeof i &&
                ((t = i), this.setState({ files: t })),
              Promise.resolve()
                .then(() => k(this, R)[R].validateMinNumberOfFiles(t))
                .catch((e) => {
                  throw (k(this, j)[j]([e]), e);
                })
                .then(() => {
                  if (!k(this, $)[$](t))
                    throw new F(this.i18n("missingRequiredMetaField"));
                })
                .catch((e) => {
                  throw e;
                })
                .then(() => {
                  let { currentUploads: e } = this.getState(),
                    i = Object.values(e).flatMap((e) => e.fileIDs),
                    r = [];
                  Object.keys(t).forEach((e) => {
                    let t = this.getFile(e);
                    t.progress.uploadStarted ||
                      -1 !== i.indexOf(e) ||
                      r.push(t.id);
                  });
                  let n = k(this, X)[X](r);
                  return k(this, Q)[Q](n);
                })
                .catch((e) => {
                  throw (this.emit("error", e), this.log(e, "error"), e);
                }));
        }
      }
      function et(e) {
        for (let t of e)
          t.isRestriction
            ? this.emit("restriction-failed", t.file, t)
            : this.emit("error", t, t.file),
            this.log(t, "warning");
        let t = e.filter((e) => e.isUserFacing),
          i = t.slice(0, 4),
          r = t.slice(4);
        i.forEach((e) => {
          let { message: t, details: i = "" } = e;
          this.info({ message: t, details: i }, "error", this.opts.infoTimeout);
        }),
          r.length > 0 &&
            this.info({
              message: this.i18n("additionalRestrictionsFailed", {
                count: r.length,
              }),
            });
      }
      function ei(e) {
        let { missingFields: t, error: i } = k(this, R)[
          R
        ].getMissingRequiredMetaFields(e);
        return (
          !(t.length > 0) ||
          (this.setFileState(e.id, { missingRequiredMetaFields: t }),
          this.log(i.message),
          this.emit("restriction-failed", e, i),
          !1)
        );
      }
      function er(e) {
        let t = !0;
        for (let i of Object.values(e)) k(this, z)[z](i) || (t = !1);
        return t;
      }
      function en(e) {
        let { allowNewUpload: t } = this.getState();
        if (!1 === t) {
          let t = new F(this.i18n("noMoreFilesAllowed"), { file: e });
          throw (k(this, j)[j]([t]), t);
        }
      }
      function es(e) {
        let t =
            e instanceof File
              ? { name: e.name, type: e.type, size: e.size, data: e }
              : e,
          i = (0, g.Z)(t),
          r = t.name
            ? t.name
            : "image" === i.split("/")[0]
            ? `${i.split("/")[0]}.${i.split("/")[1]}`
            : "noname",
          n = (0, y.Z)(r).extension,
          s = (0, v.H)(t),
          o = t.meta || {};
        (o.name = r), (o.type = i);
        let a = Number.isFinite(t.data.size) ? t.data.size : null;
        return {
          source: t.source || "",
          id: s,
          name: r,
          extension: n || "",
          meta: { ...this.getState().meta, ...o },
          type: i,
          data: t.data,
          progress: {
            percentage: 0,
            bytesUploaded: 0,
            bytesTotal: a,
            uploadComplete: !1,
            uploadStarted: null,
          },
          size: a,
          isGhost: !1,
          isRemote: t.isRemote || !1,
          remote: t.remote || "",
          preview: t.preview,
        };
      }
      function eo() {
        this.opts.autoProceed &&
          !this.scheduledAutoProceed &&
          (this.scheduledAutoProceed = setTimeout(() => {
            (this.scheduledAutoProceed = null),
              this.upload().catch((e) => {
                e.isRestriction || this.log(e.stack || e.message || e);
              });
          }, 4));
      }
      function ea(e) {
        let { files: t } = this.getState(),
          i = { ...t },
          r = [],
          n = [];
        for (let o of e)
          try {
            var s;
            let e = k(this, H)[H](o),
              n = null == (s = t[e.id]) ? void 0 : s.isGhost;
            n &&
              ((e = { ...t[e.id], isGhost: !1, data: o.data }),
              this.log(
                `Replaced the blob in the restored ghost file: ${e.name}, ${e.id}`
              ));
            let a = this.opts.onBeforeFileAdded(e, i);
            if (!a && this.checkIfFileAlreadyExists(e.id))
              throw new F(this.i18n("noDuplicates", { fileName: e.name }), {
                file: o,
              });
            if (!1 !== a || n) "object" == typeof a && null !== a && (e = a);
            else
              throw new F(
                "Cannot add the file because onBeforeFileAdded returned false.",
                { isUserFacing: !1, file: o }
              );
            k(this, R)[R].validateSingleFile(e), (i[e.id] = e), r.push(e);
          } catch (e) {
            n.push(e);
          }
        try {
          k(this, R)[R].validateAggregateRestrictions(Object.values(t), r);
        } catch (e) {
          return (
            n.push(e), { nextFilesState: t, validFilesToAdd: [], errors: n }
          );
        }
        return { nextFilesState: i, validFilesToAdd: r, errors: n };
      }
      function el() {
        let e = (e, t, i) => {
          let r = e.message || "Unknown error";
          e.details && (r += ` ${e.details}`),
            this.setState({ error: r }),
            null != t &&
              t.id in this.getState().files &&
              this.setFileState(t.id, { error: r, response: i });
        };
        this.on("error", e),
          this.on("upload-error", (t, i, r) => {
            if ((e(i, t, r), "object" == typeof i && i.message)) {
              var n;
              this.log(i.message, "error");
              let e = Error(
                this.i18n("failedToUpload", {
                  file: null != (n = null == t ? void 0 : t.name) ? n : "",
                })
              );
              (e.isUserFacing = !0),
                (e.details = i.message),
                i.details && (e.details += ` ${i.details}`),
                k(this, j)[j]([e]);
            } else k(this, j)[j]([i]);
          });
        let t = null;
        this.on("upload-stalled", (e, i) => {
          let { message: r } = e,
            n = i.map((e) => e.meta.name).join(", ");
          t ||
            (this.info(
              { message: r, details: n },
              "warning",
              this.opts.infoTimeout
            ),
            (t = setTimeout(() => {
              t = null;
            }, this.opts.infoTimeout))),
            this.log(`${r} ${n}`.trim(), "warning");
        }),
          this.on("upload", () => {
            this.setState({ error: null });
          });
        let i = (e) => {
          let t = Object.fromEntries(
            e
              .filter((e) => {
                let t = null != e && this.getFile(e.id);
                return (
                  t ||
                    this.log(
                      `Not setting progress for a file that has been removed: ${
                        null == e ? void 0 : e.id
                      }`
                    ),
                  t
                );
              })
              .map((e) => [
                e.id,
                {
                  progress: {
                    uploadStarted: Date.now(),
                    uploadComplete: !1,
                    percentage: 0,
                    bytesUploaded: 0,
                    bytesTotal: e.size,
                  },
                },
              ])
          );
          this.patchFilesState(t);
        };
        this.on("upload-start", (e) => {
          e.forEach((e) => {
            this.emit("upload-started", e);
          }),
            i(e);
        }),
          this.on("upload-progress", this.calculateProgress),
          this.on("upload-success", (e, t) => {
            if (null == e || !this.getFile(e.id)) {
              this.log(
                `Not setting progress for a file that has been removed: ${
                  null == e ? void 0 : e.id
                }`
              );
              return;
            }
            let i = this.getFile(e.id).progress;
            this.setFileState(e.id, {
              progress: {
                ...i,
                postprocess:
                  k(this, L)[L].size > 0 ? { mode: "indeterminate" } : void 0,
                uploadComplete: !0,
                percentage: 100,
                bytesUploaded: i.bytesTotal,
              },
              response: t,
              uploadURL: t.uploadURL,
              isPaused: !1,
            }),
              null == e.size &&
                this.setFileState(e.id, {
                  size: t.bytesUploaded || i.bytesTotal,
                }),
              this.calculateTotalProgress();
          }),
          this.on("preprocess-progress", (e, t) => {
            if (null == e || !this.getFile(e.id)) {
              this.log(
                `Not setting progress for a file that has been removed: ${
                  null == e ? void 0 : e.id
                }`
              );
              return;
            }
            this.setFileState(e.id, {
              progress: { ...this.getFile(e.id).progress, preprocess: t },
            });
          }),
          this.on("preprocess-complete", (e) => {
            if (null == e || !this.getFile(e.id)) {
              this.log(
                `Not setting progress for a file that has been removed: ${
                  null == e ? void 0 : e.id
                }`
              );
              return;
            }
            let t = { ...this.getState().files };
            (t[e.id] = { ...t[e.id], progress: { ...t[e.id].progress } }),
              delete t[e.id].progress.preprocess,
              this.setState({ files: t });
          }),
          this.on("postprocess-progress", (e, t) => {
            if (null == e || !this.getFile(e.id)) {
              this.log(
                `Not setting progress for a file that has been removed: ${
                  null == e ? void 0 : e.id
                }`
              );
              return;
            }
            this.setFileState(e.id, {
              progress: {
                ...this.getState().files[e.id].progress,
                postprocess: t,
              },
            });
          }),
          this.on("postprocess-complete", (e) => {
            if (null == e || !this.getFile(e.id)) {
              this.log(
                `Not setting progress for a file that has been removed: ${
                  null == e ? void 0 : e.id
                }`
              );
              return;
            }
            let t = { ...this.getState().files };
            (t[e.id] = { ...t[e.id], progress: { ...t[e.id].progress } }),
              delete t[e.id].progress.postprocess,
              this.setState({ files: t });
          }),
          this.on("restored", () => {
            this.calculateTotalProgress();
          }),
          this.on("dashboard:file-edit-complete", (e) => {
            e && k(this, z)[z](e);
          }),
          "undefined" != typeof window &&
            window.addEventListener &&
            (window.addEventListener("online", k(this, K)[K]),
            window.addEventListener("offline", k(this, K)[K]),
            setTimeout(k(this, K)[K], 3e3));
      }
      function eu(e, t) {
        void 0 === t && (t = {});
        let { forceAllowNewUpload: i = !1 } = t,
          { allowNewUpload: r, currentUploads: n } = this.getState();
        if (!r && !i)
          throw Error("Cannot create a new upload: already uploading.");
        let s = (0, a.x)();
        return (
          this.emit("upload", { id: s, fileIDs: e }),
          this.setState({
            allowNewUpload:
              !1 !== this.opts.allowMultipleUploadBatches &&
              !1 !== this.opts.allowMultipleUploads,
            currentUploads: { ...n, [s]: { fileIDs: e, step: 0, result: {} } },
          }),
          s
        );
      }
      function eh(e) {
        let { currentUploads: t } = this.getState();
        return t[e];
      }
      function ed(e) {
        let t = { ...this.getState().currentUploads };
        delete t[e], this.setState({ currentUploads: t });
      }
      async function ep(e) {
        let t;
        let i = () => {
            let { currentUploads: t } = this.getState();
            return t[e];
          },
          r = i(),
          n = [...k(this, N)[N], ...k(this, B)[B], ...k(this, L)[L]];
        try {
          for (let t = r.step || 0; t < n.length && r; t++) {
            let s = n[t];
            this.setState({
              currentUploads: {
                ...this.getState().currentUploads,
                [e]: { ...r, step: t },
              },
            });
            let { fileIDs: o } = r;
            await s(o, e), (r = i());
          }
        } catch (t) {
          throw (k(this, J)[J](e), t);
        }
        if (r) {
          r.fileIDs.forEach((e) => {
            let t = this.getFile(e);
            t && t.progress.postprocess && this.emit("postprocess-complete", t);
          });
          let t = r.fileIDs.map((e) => this.getFile(e)),
            n = t.filter((e) => !e.error),
            s = t.filter((e) => e.error);
          this.addResultData(e, { successful: n, failed: s, uploadID: e }),
            (r = i());
        }
        return (
          r && ((t = r.result), this.emit("complete", t), k(this, J)[J](e)),
          null == t &&
            this.log(
              `Not setting result for an upload that has been removed: ${e}`
            ),
          t
        );
      }
      ee.VERSION = "3.10.0";
      var ec = ee;
    },
    57124: function (e, t, i) {
      "use strict";
      let r;
      i.d(t, {
        v0: function () {
          return i5;
        },
      });
      var n,
        s,
        o,
        a,
        l,
        u,
        h,
        d,
        p,
        c,
        f,
        m,
        g,
        y,
        v,
        b,
        w,
        P,
        _,
        S,
        C,
        E,
        F,
        T,
        O,
        k,
        x,
        A = i(15039),
        D = i(45608),
        U = i(40458);
      function R(e, t, i, r) {
        return 0 === i || e === t
          ? e
          : 0 === r
          ? t
          : e + (t - e) * 2 ** (-r / i);
      }
      var I = i(6003),
        M = {
          STATE_ERROR: "error",
          STATE_WAITING: "waiting",
          STATE_PREPROCESSING: "preprocessing",
          STATE_UPLOADING: "uploading",
          STATE_POSTPROCESSING: "postprocessing",
          STATE_COMPLETE: "complete",
        },
        N = i(17398),
        B = i(37993);
      function L(e) {
        let t;
        let i = [],
          r = "indeterminate";
        for (let { progress: n } of Object.values(e)) {
          let { preprocess: e, postprocess: s } = n;
          null == t && (e || s) && ({ mode: r, message: t } = e || s),
            (null == e ? void 0 : e.mode) === "determinate" && i.push(e.value),
            (null == s ? void 0 : s.mode) === "determinate" && i.push(s.value);
        }
        return {
          mode: r,
          message: t,
          value: i.reduce((e, t) => e + t / i.length, 0),
        };
      }
      var j = i(15351);
      let z = `\u00B7`,
        $ = () => ` ${z} `;
      function q(e) {
        let {
            newFiles: t,
            isUploadStarted: i,
            recoveredState: r,
            i18n: n,
            uploadState: s,
            isSomeGhost: o,
            startUpload: a,
          } = e,
          l = B(
            "uppy-u-reset",
            "uppy-c-btn",
            "uppy-StatusBar-actionBtn",
            "uppy-StatusBar-actionBtn--upload",
            { "uppy-c-btn-primary": s === M.STATE_WAITING },
            { "uppy-StatusBar-actionBtn--disabled": o }
          ),
          u = n(t && i && !r ? "uploadXNewFiles" : "uploadXFiles", {
            smart_count: t,
          });
        return (0, N.h)(
          "button",
          {
            type: "button",
            className: l,
            "aria-label": n("uploadXFiles", { smart_count: t }),
            onClick: a,
            disabled: o,
            "data-uppy-super-focusable": !0,
          },
          u
        );
      }
      function H(e) {
        let { i18n: t, uppy: i } = e;
        return (0, N.h)(
          "button",
          {
            type: "button",
            className:
              "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--retry",
            "aria-label": t("retryUpload"),
            onClick: () => i.retryAll().catch(() => {}),
            "data-uppy-super-focusable": !0,
            "data-cy": "retry",
          },
          (0, N.h)(
            "svg",
            {
              "aria-hidden": "true",
              focusable: "false",
              className: "uppy-c-icon",
              width: "8",
              height: "10",
              viewBox: "0 0 8 10",
            },
            (0, N.h)("path", {
              d: "M4 2.408a2.75 2.75 0 1 0 2.75 2.75.626.626 0 0 1 1.25.018v.023a4 4 0 1 1-4-4.041V.25a.25.25 0 0 1 .389-.208l2.299 1.533a.25.25 0 0 1 0 .416l-2.3 1.533A.25.25 0 0 1 4 3.316v-.908z",
            })
          ),
          t("retry")
        );
      }
      function V(e) {
        let { i18n: t, uppy: i } = e;
        return (0, N.h)(
          "button",
          {
            type: "button",
            className: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
            title: t("cancel"),
            "aria-label": t("cancel"),
            onClick: () => i.cancelAll(),
            "data-cy": "cancel",
            "data-uppy-super-focusable": !0,
          },
          (0, N.h)(
            "svg",
            {
              "aria-hidden": "true",
              focusable: "false",
              className: "uppy-c-icon",
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
            },
            (0, N.h)(
              "g",
              { fill: "none", fillRule: "evenodd" },
              (0, N.h)("circle", { fill: "#888", cx: "8", cy: "8", r: "8" }),
              (0, N.h)("path", {
                fill: "#FFF",
                d: "M9.283 8l2.567 2.567-1.283 1.283L8 9.283 5.433 11.85 4.15 10.567 6.717 8 4.15 5.433 5.433 4.15 8 6.717l2.567-2.567 1.283 1.283z",
              })
            )
          )
        );
      }
      function W(e) {
        let {
            isAllPaused: t,
            i18n: i,
            isAllComplete: r,
            resumableUploads: n,
            uppy: s,
          } = e,
          o = i(t ? "resume" : "pause");
        return (0, N.h)(
          "button",
          {
            title: o,
            "aria-label": o,
            className: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
            type: "button",
            onClick: function () {
              if (!r) {
                if (!n) {
                  s.cancelAll();
                  return;
                }
                if (t) {
                  s.resumeAll();
                  return;
                }
                s.pauseAll();
              }
            },
            "data-cy": "togglePauseResume",
            "data-uppy-super-focusable": !0,
          },
          (0, N.h)(
            "svg",
            {
              "aria-hidden": "true",
              focusable: "false",
              className: "uppy-c-icon",
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
            },
            (0, N.h)(
              "g",
              { fill: "none", fillRule: "evenodd" },
              (0, N.h)("circle", { fill: "#888", cx: "8", cy: "8", r: "8" }),
              (0, N.h)("path", {
                fill: "#FFF",
                d: t
                  ? "M6 4.25L11.5 8 6 11.75z"
                  : "M5 4.5h2v7H5v-7zm4 0h2v7H9v-7z",
              })
            )
          )
        );
      }
      function G(e) {
        let { i18n: t, doneButtonHandler: i } = e;
        return (0, N.h)(
          "button",
          {
            type: "button",
            className:
              "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--done",
            onClick: i,
            "data-uppy-super-focusable": !0,
          },
          t("done")
        );
      }
      function K() {
        return (0, N.h)(
          "svg",
          {
            className: "uppy-StatusBar-spinner",
            "aria-hidden": "true",
            focusable: "false",
            width: "14",
            height: "14",
          },
          (0, N.h)("path", {
            d: "M13.983 6.547c-.12-2.509-1.64-4.893-3.939-5.936-2.48-1.127-5.488-.656-7.556 1.094C.524 3.367-.398 6.048.162 8.562c.556 2.495 2.46 4.52 4.94 5.183 2.932.784 5.61-.602 7.256-3.015-1.493 1.993-3.745 3.309-6.298 2.868-2.514-.434-4.578-2.349-5.153-4.84a6.226 6.226 0 0 1 2.98-6.778C6.34.586 9.74 1.1 11.373 3.493c.407.596.693 1.282.842 1.988.127.598.073 1.197.161 1.794.078.525.543 1.257 1.15.864.525-.341.49-1.05.456-1.592-.007-.15.02.3 0 0",
            fillRule: "evenodd",
          })
        );
      }
      function Z(e) {
        let { progress: t } = e,
          { value: i, mode: r, message: n } = t,
          s = `\u00B7`;
        return (0, N.h)(
          "div",
          { className: "uppy-StatusBar-content" },
          (0, N.h)(K, null),
          "determinate" === r ? `${Math.round(100 * i)}% ${s} ` : "",
          n
        );
      }
      function X(e) {
        let {
            numUploads: t,
            complete: i,
            totalUploadedSize: r,
            totalSize: n,
            totalETA: s,
            i18n: o,
          } = e,
          a = t > 1;
        return (0, N.h)(
          "div",
          { className: "uppy-StatusBar-statusSecondary" },
          a && o("filesUploadedOfTotal", { complete: i, smart_count: t }),
          (0, N.h)(
            "span",
            { className: "uppy-StatusBar-additionalInfo" },
            a && $(),
            o("dataUploadedOfTotal", { complete: j(r), total: j(n) }),
            $(),
            o("xTimeLeft", {
              time: (function (e) {
                let t = {
                    hours: Math.floor(e / 3600) % 24,
                    minutes: Math.floor(e / 60) % 60,
                    seconds: Math.floor(e % 60),
                  },
                  i = 0 === t.hours ? "" : `${t.hours}h`,
                  r =
                    0 === t.minutes
                      ? ""
                      : `${
                          0 === t.hours
                            ? t.minutes
                            : ` ${t.minutes.toString(10).padStart(2, "0")}`
                        }m`,
                  n =
                    0 !== t.hours
                      ? ""
                      : `${
                          0 === t.minutes
                            ? t.seconds
                            : ` ${t.seconds.toString(10).padStart(2, "0")}`
                        }s`;
                return `${i}${r}${n}`;
              })(s),
            })
          )
        );
      }
      function Y(e) {
        let { i18n: t, complete: i, numUploads: r } = e;
        return (0, N.h)(
          "div",
          { className: "uppy-StatusBar-statusSecondary" },
          t("filesUploadedOfTotal", { complete: i, smart_count: r })
        );
      }
      function J(e) {
        let { i18n: t, newFiles: i, startUpload: r } = e,
          n = B(
            "uppy-u-reset",
            "uppy-c-btn",
            "uppy-StatusBar-actionBtn",
            "uppy-StatusBar-actionBtn--uploadNewlyAdded"
          );
        return (0, N.h)(
          "div",
          { className: "uppy-StatusBar-statusSecondary" },
          (0, N.h)(
            "div",
            { className: "uppy-StatusBar-statusSecondaryHint" },
            t("xMoreFilesAdded", { smart_count: i })
          ),
          (0, N.h)(
            "button",
            {
              type: "button",
              className: n,
              "aria-label": t("uploadXFiles", { smart_count: i }),
              onClick: r,
            },
            t("upload")
          )
        );
      }
      function Q(e) {
        let {
            i18n: t,
            supportsUploadProgress: i,
            totalProgress: r,
            showProgressDetails: n,
            isUploadStarted: s,
            isAllComplete: o,
            isAllPaused: a,
            newFiles: l,
            numUploads: u,
            complete: h,
            totalUploadedSize: d,
            totalSize: p,
            totalETA: c,
            startUpload: f,
          } = e,
          m = l && s;
        if (!s || o) return null;
        let g = t(a ? "paused" : "uploading");
        return (0, N.h)(
          "div",
          { className: "uppy-StatusBar-content", "aria-label": g, title: g },
          a ? null : (0, N.h)(K, null),
          (0, N.h)(
            "div",
            { className: "uppy-StatusBar-status" },
            (0, N.h)(
              "div",
              { className: "uppy-StatusBar-statusPrimary" },
              i ? `${g}: ${r}%` : g
            ),
            a || m || !n
              ? null
              : i
              ? (0, N.h)(X, {
                  numUploads: u,
                  complete: h,
                  totalUploadedSize: d,
                  totalSize: p,
                  totalETA: c,
                  i18n: t,
                })
              : (0, N.h)(Y, { i18n: t, complete: h, numUploads: u }),
            m ? (0, N.h)(J, { i18n: t, newFiles: l, startUpload: f }) : null
          )
        );
      }
      function ee(e) {
        let { i18n: t } = e;
        return (0, N.h)(
          "div",
          {
            className: "uppy-StatusBar-content",
            role: "status",
            title: t("complete"),
          },
          (0, N.h)(
            "div",
            { className: "uppy-StatusBar-status" },
            (0, N.h)(
              "div",
              { className: "uppy-StatusBar-statusPrimary" },
              (0, N.h)(
                "svg",
                {
                  "aria-hidden": "true",
                  focusable: "false",
                  className: "uppy-StatusBar-statusIndicator uppy-c-icon",
                  width: "15",
                  height: "11",
                  viewBox: "0 0 15 11",
                },
                (0, N.h)("path", {
                  d: "M.414 5.843L1.627 4.63l3.472 3.472L13.202 0l1.212 1.213L5.1 10.528z",
                })
              ),
              t("complete")
            )
          )
        );
      }
      function et(e) {
        let { error: t, i18n: i, complete: r, numUploads: n } = e;
        return (0, N.h)(
          "div",
          { className: "uppy-StatusBar-content", title: i("uploadFailed") },
          (0, N.h)(
            "svg",
            {
              "aria-hidden": "true",
              focusable: "false",
              className: "uppy-StatusBar-statusIndicator uppy-c-icon",
              width: "11",
              height: "11",
              viewBox: "0 0 11 11",
            },
            (0, N.h)("path", {
              d: "M4.278 5.5L0 1.222 1.222 0 5.5 4.278 9.778 0 11 1.222 6.722 5.5 11 9.778 9.778 11 5.5 6.722 1.222 11 0 9.778z",
            })
          ),
          (0, N.h)(
            "div",
            { className: "uppy-StatusBar-status" },
            (0, N.h)(
              "div",
              { className: "uppy-StatusBar-statusPrimary" },
              i("uploadFailed"),
              (0, N.h)(
                "button",
                {
                  className: "uppy-u-reset uppy-StatusBar-details",
                  "aria-label": i("showErrorDetails"),
                  "data-microtip-position": "top-right",
                  "data-microtip-size": "medium",
                  onClick: function () {
                    let e = `${i("uploadFailed")} 

 ${t}`;
                    alert(e);
                  },
                  type: "button",
                },
                "?"
              )
            ),
            (0, N.h)(Y, { i18n: i, complete: r, numUploads: n })
          )
        );
      }
      let {
        STATE_ERROR: ei,
        STATE_WAITING: er,
        STATE_PREPROCESSING: en,
        STATE_UPLOADING: es,
        STATE_POSTPROCESSING: eo,
        STATE_COMPLETE: ea,
      } = M;
      function el(e) {
        let {
            newFiles: t,
            allowNewUpload: i,
            isUploadInProgress: r,
            isAllPaused: n,
            resumableUploads: s,
            error: o,
            hideUploadButton: a,
            hidePauseResumeButton: l,
            hideCancelButton: u,
            hideRetryButton: h,
            recoveredState: d,
            uploadState: p,
            totalProgress: c,
            files: f,
            supportsUploadProgress: m,
            hideAfterFinish: g,
            isSomeGhost: y,
            doneButtonHandler: v,
            isUploadStarted: b,
            i18n: w,
            startUpload: P,
            uppy: _,
            isAllComplete: S,
            showProgressDetails: C,
            numUploads: E,
            complete: F,
            totalSize: T,
            totalETA: O,
            totalUploadedSize: k,
          } = e,
          x = (function () {
            switch (p) {
              case eo:
              case en: {
                let e = L(f);
                if ("determinate" === e.mode) return 100 * e.value;
                return c;
              }
              case ei:
                return null;
              case es:
                if (!m) return null;
                return c;
              default:
                return c;
            }
          })(),
          A = (function () {
            if (d) return !1;
            switch (p) {
              case er:
                return a || 0 === t;
              case ea:
                return g;
              default:
                return !1;
            }
          })(),
          D = null != x ? x : 100,
          U = !o && t && !r && !n && i && !a,
          R = !u && p !== er && p !== ea,
          I = s && !l && p === es,
          M = o && !S && !h,
          j = v && p === ea,
          z = B("uppy-StatusBar-progress", {
            "is-indeterminate": (function () {
              switch (p) {
                case eo:
                case en: {
                  let { mode: e } = L(f);
                  return "indeterminate" === e;
                }
                case es:
                  if (!m) return !0;
                  return !1;
                default:
                  return !1;
              }
            })(),
          }),
          $ = B("uppy-StatusBar", `is-${p}`, { "has-ghosts": y });
        return (0, N.h)(
          "div",
          { className: $, "aria-hidden": A },
          (0, N.h)("div", {
            className: z,
            style: { width: `${D}%` },
            role: "progressbar",
            "aria-label": `${D}%`,
            "aria-valuetext": `${D}%`,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": x,
          }),
          (() => {
            switch (p) {
              case en:
              case eo:
                return (0, N.h)(Z, { progress: L(f) });
              case ea:
                return (0, N.h)(ee, { i18n: w });
              case ei:
                return (0, N.h)(et, {
                  error: o,
                  i18n: w,
                  numUploads: E,
                  complete: F,
                });
              case es:
                return (0, N.h)(Q, {
                  i18n: w,
                  supportsUploadProgress: m,
                  totalProgress: c,
                  showProgressDetails: C,
                  isUploadStarted: b,
                  isAllComplete: S,
                  isAllPaused: n,
                  newFiles: t,
                  numUploads: E,
                  complete: F,
                  totalUploadedSize: k,
                  totalSize: T,
                  totalETA: O,
                  startUpload: P,
                });
              default:
                return null;
            }
          })(),
          (0, N.h)(
            "div",
            { className: "uppy-StatusBar-actions" },
            d || U
              ? (0, N.h)(q, {
                  newFiles: t,
                  isUploadStarted: b,
                  recoveredState: d,
                  i18n: w,
                  isSomeGhost: y,
                  startUpload: P,
                  uploadState: p,
                })
              : null,
            M ? (0, N.h)(H, { i18n: w, uppy: _ }) : null,
            I
              ? (0, N.h)(W, {
                  isAllPaused: n,
                  i18n: w,
                  isAllComplete: S,
                  resumableUploads: s,
                  uppy: _,
                })
              : null,
            R ? (0, N.h)(V, { i18n: w, uppy: _ }) : null,
            j ? (0, N.h)(G, { i18n: w, doneButtonHandler: v }) : null
          )
        );
      }
      el.defaultProps = {
        doneButtonHandler: void 0,
        hideAfterFinish: !1,
        hideCancelButton: !1,
        hidePauseResumeButton: !1,
        hideRetryButton: !1,
        hideUploadButton: void 0,
        showProgressDetails: void 0,
      };
      var eu = {
        strings: {
          uploading: "Uploading",
          complete: "Complete",
          uploadFailed: "Upload failed",
          paused: "Paused",
          retry: "Retry",
          cancel: "Cancel",
          pause: "Pause",
          resume: "Resume",
          done: "Done",
          filesUploadedOfTotal: {
            0: "%{complete} of %{smart_count} file uploaded",
            1: "%{complete} of %{smart_count} files uploaded",
          },
          dataUploadedOfTotal: "%{complete} of %{total}",
          xTimeLeft: "%{time} left",
          uploadXFiles: {
            0: "Upload %{smart_count} file",
            1: "Upload %{smart_count} files",
          },
          uploadXNewFiles: {
            0: "Upload +%{smart_count} file",
            1: "Upload +%{smart_count} files",
          },
          upload: "Upload",
          retryUpload: "Retry upload",
          xMoreFilesAdded: {
            0: "%{smart_count} more file added",
            1: "%{smart_count} more files added",
          },
          showErrorDetails: "Show error details",
        },
      };
      function eh(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e, t))
          throw TypeError("attempted to use private field on non-instance");
        return e;
      }
      var ed = 0;
      function ep(e) {
        return "__private_" + ed++ + "_" + e;
      }
      let ec = {
        target: "body",
        hideUploadButton: !1,
        hideRetryButton: !1,
        hidePauseResumeButton: !1,
        hideCancelButton: !1,
        showProgressDetails: !1,
        hideAfterFinish: !0,
        doneButtonHandler: null,
      };
      var ef = ep("lastUpdateTime"),
        em = ep("previousUploadedBytes"),
        eg = ep("previousSpeed"),
        ey = ep("previousETA"),
        ev = ep("computeSmoothETA"),
        eb = ep("onUploadStart");
      class ew extends U.Z {
        constructor(e, t) {
          super(e, { ...ec, ...t }),
            Object.defineProperty(this, ev, { value: eP }),
            Object.defineProperty(this, ef, { writable: !0, value: void 0 }),
            Object.defineProperty(this, em, { writable: !0, value: void 0 }),
            Object.defineProperty(this, eg, { writable: !0, value: void 0 }),
            Object.defineProperty(this, ey, { writable: !0, value: void 0 }),
            (this.startUpload = () => this.uppy.upload().catch(() => {})),
            Object.defineProperty(this, eb, {
              writable: !0,
              value: () => {
                let { recoveredState: e } = this.uppy.getState();
                if (((eh(this, eg)[eg] = null), (eh(this, ey)[ey] = null), e)) {
                  (eh(this, em)[em] = Object.values(e.files).reduce((e, t) => {
                    let { progress: i } = t;
                    return e + i.bytesUploaded;
                  }, 0)),
                    this.uppy.emit("restore-confirmed");
                  return;
                }
                (eh(this, ef)[ef] = performance.now()), (eh(this, em)[em] = 0);
              },
            }),
            (this.id = this.opts.id || "StatusBar"),
            (this.title = "StatusBar"),
            (this.type = "progressindicator"),
            (this.defaultLocale = eu),
            this.i18nInit(),
            (this.render = this.render.bind(this)),
            (this.install = this.install.bind(this));
        }
        render(e) {
          let {
              capabilities: t,
              files: i,
              allowNewUpload: r,
              totalProgress: n,
              error: s,
              recoveredState: o,
            } = e,
            {
              newFiles: a,
              startedFiles: l,
              completeFiles: u,
              isUploadStarted: h,
              isAllComplete: d,
              isAllErrored: p,
              isAllPaused: c,
              isUploadInProgress: f,
              isSomeGhost: m,
            } = this.uppy.getObjectOfFilesPerState(),
            g = o ? Object.values(i) : a,
            y = !!t.resumableUploads,
            v = !1 !== t.uploadProgress,
            b = 0,
            w = 0;
          l.forEach((e) => {
            (b += e.progress.bytesTotal || 0),
              (w += e.progress.bytesUploaded || 0);
          });
          let P = eh(this, ev)[ev]({ uploaded: w, total: b, remaining: b - w });
          return el({
            error: s,
            uploadState: (function (e, t, i, r) {
              if (e) return M.STATE_ERROR;
              if (t) return M.STATE_COMPLETE;
              if (i) return M.STATE_WAITING;
              let n = M.STATE_WAITING,
                s = Object.keys(r);
              for (let e = 0; e < s.length; e++) {
                let { progress: t } = r[s[e]];
                if (t.uploadStarted && !t.uploadComplete)
                  return M.STATE_UPLOADING;
                t.preprocess && (n = M.STATE_PREPROCESSING),
                  t.postprocess &&
                    n !== M.STATE_PREPROCESSING &&
                    (n = M.STATE_POSTPROCESSING);
              }
              return n;
            })(s, d, o, e.files || {}),
            allowNewUpload: r,
            totalProgress: n,
            totalSize: b,
            totalUploadedSize: w,
            isAllComplete: !1,
            isAllPaused: c,
            isAllErrored: p,
            isUploadStarted: h,
            isUploadInProgress: f,
            isSomeGhost: m,
            recoveredState: o,
            complete: u.length,
            newFiles: g.length,
            numUploads: l.length,
            totalETA: P,
            files: i,
            i18n: this.i18n,
            uppy: this.uppy,
            startUpload: this.startUpload,
            doneButtonHandler: this.opts.doneButtonHandler,
            resumableUploads: y,
            supportsUploadProgress: v,
            showProgressDetails: this.opts.showProgressDetails,
            hideUploadButton: this.opts.hideUploadButton,
            hideRetryButton: this.opts.hideRetryButton,
            hidePauseResumeButton: this.opts.hidePauseResumeButton,
            hideCancelButton: this.opts.hideCancelButton,
            hideAfterFinish: this.opts.hideAfterFinish,
            isTargetDOMEl: this.isTargetDOMEl,
          });
        }
        onMount() {
          let e = this.el;
          (0, I.Z)(e) || (e.dir = "ltr");
        }
        install() {
          let { target: e } = this.opts;
          e && this.mount(e, this),
            this.uppy.on("upload", eh(this, eb)[eb]),
            (eh(this, ef)[ef] = performance.now()),
            (eh(this, em)[em] = this.uppy
              .getFiles()
              .reduce((e, t) => e + t.progress.bytesUploaded, 0));
        }
        uninstall() {
          this.unmount(), this.uppy.off("upload", eh(this, eb)[eb]);
        }
      }
      function eP(e) {
        var t, i, r;
        if (0 === e.total || 0 === e.remaining) return 0;
        null != (t = eh(this, ef))[ef] || (t[ef] = performance.now());
        let n = performance.now() - eh(this, ef)[ef];
        if (0 === n)
          return (
            Math.round((null != (i = eh(this, ey)[ey]) ? i : 0) / 100) / 10
          );
        let s = e.uploaded - eh(this, em)[em];
        if (((eh(this, em)[em] = e.uploaded), s <= 0))
          return (
            Math.round((null != (r = eh(this, ey)[ey]) ? r : 0) / 100) / 10
          );
        let o = s / n,
          a = null == eh(this, eg)[eg] ? o : R(o, eh(this, eg)[eg], 2e3, n);
        eh(this, eg)[eg] = a;
        let l = e.remaining / a,
          u = Math.max(eh(this, ey)[ey] - n, 0),
          h = null == eh(this, ey)[ey] ? l : R(l, u, 2e3, n);
        return (
          (eh(this, ey)[ey] = h),
          (eh(this, ef)[ef] = performance.now()),
          Math.round(h / 100) / 10
        );
      }
      ew.VERSION = "3.3.1";
      class e_ extends N.Component {
        constructor() {
          super(...arguments), (this.ref = (0, N.createRef)());
        }
        componentWillEnter(e) {
          (this.ref.current.style.opacity = "1"),
            (this.ref.current.style.transform = "none"),
            setTimeout(e, 300);
        }
        componentWillLeave(e) {
          (this.ref.current.style.opacity = "0"),
            (this.ref.current.style.transform = "translateY(350%)"),
            setTimeout(e, 300);
        }
        render() {
          let { children: e } = this.props;
          return (0, N.h)(
            "div",
            { className: "uppy-Informer-animated", ref: this.ref },
            e
          );
        }
      }
      function eS(e) {
        let t = {};
        for (let i = 0; i < e.length; i++)
          null != e[i] &&
            (t[
              (function (e, t) {
                var i;
                return null != (i = null == e ? void 0 : e.key) ? i : t;
              })(e[i], i.toString(36))
            ] = e[i]);
        return t;
      }
      class eC extends N.Component {
        constructor(e, t) {
          super(e, t),
            (this.refs = {}),
            (this.state = {
              children: eS(
                (0, N.toChildArray)((0, N.toChildArray)(this.props.children)) ||
                  []
              ),
            }),
            (this.performAppear = this.performAppear.bind(this)),
            (this.performEnter = this.performEnter.bind(this)),
            (this.performLeave = this.performLeave.bind(this));
        }
        componentWillMount() {
          (this.currentlyTransitioningKeys = {}),
            (this.keysToAbortLeave = []),
            (this.keysToEnter = []),
            (this.keysToLeave = []);
        }
        componentDidMount() {
          let e = this.state.children;
          for (let t in e) e[t] && this.performAppear(t);
        }
        componentWillReceiveProps(e) {
          let t;
          let i = eS((0, N.toChildArray)(e.children) || []),
            r = this.state.children;
          for (t in (this.setState((e) => ({
            children: (function (e, t) {
              (e = e || {}), (t = t || {});
              let i = (i) => (t.hasOwnProperty(i) ? t[i] : e[i]),
                r = {},
                n = [];
              for (let i in e)
                t.hasOwnProperty(i)
                  ? n.length && ((r[i] = n), (n = []))
                  : n.push(i);
              let s = {};
              for (let e in t) {
                if (r.hasOwnProperty(e))
                  for (let t = 0; t < r[e].length; t++) {
                    let n = r[e][t];
                    s[r[e][t]] = i(n);
                  }
                s[e] = i(e);
              }
              for (let e = 0; e < n.length; e++) s[n[e]] = i(n[e]);
              return s;
            })(e.children, i),
          })),
          i))
            if (i.hasOwnProperty(t)) {
              let e = r && r.hasOwnProperty(t);
              i[t] && e && this.currentlyTransitioningKeys[t]
                ? (this.keysToEnter.push(t), this.keysToAbortLeave.push(t))
                : !i[t] ||
                  e ||
                  this.currentlyTransitioningKeys[t] ||
                  this.keysToEnter.push(t);
            }
          for (t in r)
            if (r.hasOwnProperty(t)) {
              let e = i && i.hasOwnProperty(t);
              !r[t] ||
                e ||
                this.currentlyTransitioningKeys[t] ||
                this.keysToLeave.push(t);
            }
        }
        componentDidUpdate() {
          let { keysToEnter: e } = this;
          (this.keysToEnter = []), e.forEach(this.performEnter);
          let { keysToLeave: t } = this;
          (this.keysToLeave = []), t.forEach(this.performLeave);
        }
        _finishAbort(e) {
          let t = this.keysToAbortLeave.indexOf(e);
          -1 !== t && this.keysToAbortLeave.splice(t, 1);
        }
        performAppear(e) {
          this.currentlyTransitioningKeys[e] = !0;
          let t = this.refs[e];
          null != t && t.componentWillAppear
            ? t.componentWillAppear(this._handleDoneAppearing.bind(this, e))
            : this._handleDoneAppearing(e);
        }
        _handleDoneAppearing(e) {
          let t = this.refs[e];
          null != t && t.componentDidAppear && t.componentDidAppear(),
            delete this.currentlyTransitioningKeys[e],
            this._finishAbort(e);
          let i = eS((0, N.toChildArray)(this.props.children) || []);
          (i && i.hasOwnProperty(e)) || this.performLeave(e);
        }
        performEnter(e) {
          this.currentlyTransitioningKeys[e] = !0;
          let t = this.refs[e];
          null != t && t.componentWillEnter
            ? t.componentWillEnter(this._handleDoneEntering.bind(this, e))
            : this._handleDoneEntering(e);
        }
        _handleDoneEntering(e) {
          let t = this.refs[e];
          null != t && t.componentDidEnter && t.componentDidEnter(),
            delete this.currentlyTransitioningKeys[e],
            this._finishAbort(e);
          let i = eS((0, N.toChildArray)(this.props.children) || []);
          (i && i.hasOwnProperty(e)) || this.performLeave(e);
        }
        performLeave(e) {
          if (-1 !== this.keysToAbortLeave.indexOf(e)) return;
          this.currentlyTransitioningKeys[e] = !0;
          let t = this.refs[e];
          null != t && t.componentWillLeave
            ? t.componentWillLeave(this._handleDoneLeaving.bind(this, e))
            : this._handleDoneLeaving(e);
        }
        _handleDoneLeaving(e) {
          if (-1 !== this.keysToAbortLeave.indexOf(e)) return;
          let t = this.refs[e];
          null != t && t.componentDidLeave && t.componentDidLeave(),
            delete this.currentlyTransitioningKeys[e];
          let i = eS((0, N.toChildArray)(this.props.children) || []);
          if (i && i.hasOwnProperty(e)) this.performEnter(e);
          else {
            let t = Object.assign({}, this.state.children);
            delete t[e], this.setState({ children: t });
          }
        }
        render(e, t) {
          let {
              childFactory: i,
              transitionLeave: r,
              transitionName: n,
              transitionAppear: s,
              transitionEnter: o,
              transitionLeaveTimeout: a,
              transitionEnterTimeout: l,
              transitionAppearTimeout: u,
              component: h,
              ...d
            } = e,
            { children: p } = t,
            c = Object.entries(p)
              .map((e) => {
                let [t, r] = e;
                if (!r) return;
                let n = (function (e, t) {
                  let i = e._ptgLinkedRefs || (e._ptgLinkedRefs = {});
                  return (
                    i[t] ||
                    (i[t] = (i) => {
                      e.refs[t] = i;
                    })
                  );
                })(this, t);
                return (0, N.cloneElement)(i(r), { ref: n, key: t });
              })
              .filter(Boolean);
          return (0, N.h)(h, d, c);
        }
      }
      eC.defaultProps = { component: "span", childFactory: (e) => e };
      class eE extends U.Z {
        constructor(e, t) {
          super(e, t),
            (this.render = (e) =>
              (0, N.h)(
                "div",
                { className: "uppy uppy-Informer" },
                (0, N.h)(
                  eC,
                  null,
                  e.info.map((e) =>
                    (0, N.h)(
                      e_,
                      { key: e.message },
                      (0, N.h)(
                        "p",
                        { role: "alert" },
                        e.message,
                        " ",
                        e.details &&
                          (0, N.h)(
                            "span",
                            {
                              "aria-label": e.details,
                              "data-microtip-position": "top-left",
                              "data-microtip-size": "medium",
                              role: "tooltip",
                              onClick: () =>
                                alert(`${e.message} 

 ${e.details}`),
                            },
                            "?"
                          )
                      )
                    )
                  )
                )
              )),
            (this.type = "progressindicator"),
            (this.id = this.opts.id || "Informer"),
            (this.title = "Informer");
        }
        install() {
          let { target: e } = this.opts;
          e && this.mount(e, this);
        }
      }
      eE.VERSION = "3.1.0";
      var eF = i(19084),
        eT = i(59097),
        eO = function (e) {
          if ("string" == typeof e) {
            let t = document.querySelectorAll(e);
            return 0 === t.length ? null : Array.from(t);
          }
          return "object" == typeof e && (0, eT.Z)(e) ? [e] : null;
        },
        ek = Array.from;
      async function* ex(e, t) {
        for (let {
          lastResortFile: i,
          fileSystemHandle: r,
        } of await Promise.all(
          Array.from(e.items, async (e) => {
            let i;
            return (
              null != i ||
                (i = (function e(t, i) {
                  return null == t
                    ? t
                    : {
                        kind: t.isFile
                          ? "file"
                          : t.isDirectory
                          ? "directory"
                          : void 0,
                        name: t.name,
                        getFile: () => new Promise((e, i) => t.file(e, i)),
                        async *values() {
                          let r = t.createReader(),
                            n = await new Promise((t) => {
                              !(function e(t, i, r, n) {
                                let { onSuccess: s } = n;
                                t.readEntries(
                                  (n) => {
                                    let o = [...i, ...n];
                                    n.length
                                      ? queueMicrotask(() => {
                                          e(t, o, r, { onSuccess: s });
                                        })
                                      : s(o);
                                  },
                                  (e) => {
                                    r(e), s(i);
                                  }
                                );
                              })(r, [], i, {
                                onSuccess: (r) => t(r.map((t) => e(t, i))),
                              });
                            });
                          yield* n;
                        },
                        isSameEntry: void 0,
                      };
                })(
                  "function" == typeof e.getAsEntry
                    ? e.getAsEntry()
                    : e.webkitGetAsEntry(),
                  t
                )),
              { fileSystemHandle: i, lastResortFile: e.getAsFile() }
            );
          })
        ))
          if (null != r)
            try {
              yield* (function e(t, i, r) {
                try {
                  return (
                    void 0 === r && (r = void 0),
                    (async function* () {
                      let n = () => `${i}/${t.name}`;
                      if ("file" === t.kind) {
                        let e = await t.getFile();
                        null != e
                          ? ((e.relativePath = i ? n() : null), yield e)
                          : null != r && (yield r);
                      } else if ("directory" === t.kind)
                        for await (let r of t.values())
                          yield* e(r, i ? n() : t.name);
                      else null != r && (yield r);
                    })()
                  );
                } catch (e) {
                  return Promise.reject(e);
                }
              })(r, "", i);
            } catch (e) {
              null != i ? yield i : t(e);
            }
          else null != i && (yield i);
      }
      async function eA(e, t) {
        var i;
        let r =
          null != (i = null == t ? void 0 : t.logDropError)
            ? i
            : Function.prototype;
        try {
          let t = [];
          for await (let i of ex(e, r)) t.push(i);
          return t;
        } catch {
          return Promise.resolve(ek(e.files));
        }
      }
      var eD = i(6721);
      class eU extends Error {
        constructor(e) {
          super(e), (this.name = "TimeoutError");
        }
      }
      class eR extends Error {
        constructor(e) {
          super(), (this.name = "AbortError"), (this.message = e);
        }
      }
      let eI = (e) =>
          void 0 === globalThis.DOMException ? new eR(e) : new DOMException(e),
        eM = (e) => {
          let t =
            void 0 === e.reason ? eI("This operation was aborted.") : e.reason;
          return t instanceof Error ? t : eI(t);
        };
      var eN = function (e, t, i, r) {
        if ("a" === i && !r)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
      };
      class eB {
        constructor() {
          n.set(this, []);
        }
        enqueue(e, t) {
          let i = { priority: (t = { priority: 0, ...t }).priority, run: e };
          if (
            this.size &&
            eN(this, n, "f")[this.size - 1].priority >= t.priority
          ) {
            eN(this, n, "f").push(i);
            return;
          }
          let r = (function (e, t, i) {
            let r = 0,
              n = e.length;
            for (; n > 0; ) {
              let s = Math.trunc(n / 2),
                o = r + s;
              0 >= i(e[o], t) ? ((r = ++o), (n -= s + 1)) : (n = s);
            }
            return r;
          })(eN(this, n, "f"), i, (e, t) => t.priority - e.priority);
          eN(this, n, "f").splice(r, 0, i);
        }
        dequeue() {
          let e = eN(this, n, "f").shift();
          return null == e ? void 0 : e.run;
        }
        filter(e) {
          return eN(this, n, "f")
            .filter((t) => t.priority === e.priority)
            .map((e) => e.run);
        }
        get size() {
          return eN(this, n, "f").length;
        }
      }
      n = new WeakMap();
      var eL = function (e, t, i, r, n) {
          if ("m" === r) throw TypeError("Private method is not writable");
          if ("a" === r && !n)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i), i;
        },
        ej = function (e, t, i, r) {
          if ("a" === i && !r)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        };
      class ez extends Error {}
      class e$ extends eD.v {
        constructor(e) {
          var t, i, r, n;
          if (
            (super(),
            s.add(this),
            o.set(this, void 0),
            a.set(this, void 0),
            l.set(this, 0),
            u.set(this, void 0),
            h.set(this, void 0),
            d.set(this, 0),
            p.set(this, void 0),
            c.set(this, void 0),
            f.set(this, void 0),
            m.set(this, void 0),
            g.set(this, 0),
            y.set(this, void 0),
            v.set(this, void 0),
            b.set(this, void 0),
            Object.defineProperty(this, "timeout", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            !(
              "number" ==
                typeof (e = {
                  carryoverConcurrencyCount: !1,
                  intervalCap: Number.POSITIVE_INFINITY,
                  interval: 0,
                  concurrency: Number.POSITIVE_INFINITY,
                  autoStart: !0,
                  queueClass: eB,
                  ...e,
                }).intervalCap && e.intervalCap >= 1
            ))
          )
            throw TypeError(
              `Expected \`intervalCap\` to be a number from 1 and up, got \`${
                null !==
                  (i =
                    null === (t = e.intervalCap) || void 0 === t
                      ? void 0
                      : t.toString()) && void 0 !== i
                  ? i
                  : ""
              }\` (${typeof e.intervalCap})`
            );
          if (
            void 0 === e.interval ||
            !(Number.isFinite(e.interval) && e.interval >= 0)
          )
            throw TypeError(
              `Expected \`interval\` to be a finite number >= 0, got \`${
                null !==
                  (n =
                    null === (r = e.interval) || void 0 === r
                      ? void 0
                      : r.toString()) && void 0 !== n
                  ? n
                  : ""
              }\` (${typeof e.interval})`
            );
          eL(this, o, e.carryoverConcurrencyCount, "f"),
            eL(
              this,
              a,
              e.intervalCap === Number.POSITIVE_INFINITY || 0 === e.interval,
              "f"
            ),
            eL(this, u, e.intervalCap, "f"),
            eL(this, h, e.interval, "f"),
            eL(this, f, new e.queueClass(), "f"),
            eL(this, m, e.queueClass, "f"),
            (this.concurrency = e.concurrency),
            (this.timeout = e.timeout),
            eL(this, b, !0 === e.throwOnTimeout, "f"),
            eL(this, v, !1 === e.autoStart, "f");
        }
        get concurrency() {
          return ej(this, y, "f");
        }
        set concurrency(e) {
          if (!("number" == typeof e && e >= 1))
            throw TypeError(
              `Expected \`concurrency\` to be a number from 1 and up, got \`${e}\` (${typeof e})`
            );
          eL(this, y, e, "f"), ej(this, s, "m", O).call(this);
        }
        async add(e, t = {}) {
          return (
            (t = {
              timeout: this.timeout,
              throwOnTimeout: ej(this, b, "f"),
              ...t,
            }),
            new Promise((i, r) => {
              ej(this, f, "f").enqueue(async () => {
                var n, o, a;
                eL(this, g, ((o = ej(this, g, "f")), ++o), "f"),
                  eL(this, l, ((a = ej(this, l, "f")), ++a), "f");
                try {
                  if (
                    null === (n = t.signal) || void 0 === n ? void 0 : n.aborted
                  )
                    throw new ez("The task was aborted.");
                  let r = e({ signal: t.signal });
                  t.timeout &&
                    (r = (function (e, t, i, r) {
                      let n;
                      let s = new Promise((s, o) => {
                        if ("number" != typeof t || 1 !== Math.sign(t))
                          throw TypeError(
                            `Expected \`milliseconds\` to be a positive number, got \`${t}\``
                          );
                        if (t === Number.POSITIVE_INFINITY) {
                          s(e);
                          return;
                        }
                        if (
                          (r = {
                            customTimers: { setTimeout, clearTimeout },
                            ...r,
                          }).signal
                        ) {
                          let { signal: e } = r;
                          e.aborted && o(eM(e)),
                            e.addEventListener("abort", () => {
                              o(eM(e));
                            });
                        }
                        (n = r.customTimers.setTimeout.call(
                          void 0,
                          () => {
                            if ("function" == typeof i) {
                              try {
                                s(i());
                              } catch (e) {
                                o(e);
                              }
                              return;
                            }
                            let r =
                                "string" == typeof i
                                  ? i
                                  : `Promise timed out after ${t} milliseconds`,
                              n = i instanceof Error ? i : new eU(r);
                            "function" == typeof e.cancel && e.cancel(), o(n);
                          },
                          t
                        )),
                          (async () => {
                            try {
                              s(await e);
                            } catch (e) {
                              o(e);
                            } finally {
                              r.customTimers.clearTimeout.call(void 0, n);
                            }
                          })();
                      });
                      return (
                        (s.clear = () => {
                          clearTimeout(n), (n = void 0);
                        }),
                        s
                      );
                    })(Promise.resolve(r), t.timeout)),
                    t.signal &&
                      (r = Promise.race([
                        r,
                        ej(this, s, "m", k).call(this, t.signal),
                      ]));
                  let o = await r;
                  i(o), this.emit("completed", o);
                } catch (e) {
                  if (e instanceof eU && !t.throwOnTimeout) {
                    i();
                    return;
                  }
                  r(e), this.emit("error", e);
                } finally {
                  ej(this, s, "m", _).call(this);
                }
              }, t),
                this.emit("add"),
                ej(this, s, "m", E).call(this);
            })
          );
        }
        async addAll(e, t) {
          return Promise.all(e.map(async (e) => this.add(e, t)));
        }
        start() {
          return (
            ej(this, v, "f") &&
              (eL(this, v, !1, "f"), ej(this, s, "m", O).call(this)),
            this
          );
        }
        pause() {
          eL(this, v, !0, "f");
        }
        clear() {
          eL(this, f, new (ej(this, m, "f"))(), "f");
        }
        async onEmpty() {
          0 !== ej(this, f, "f").size &&
            (await ej(this, s, "m", x).call(this, "empty"));
        }
        async onSizeLessThan(e) {
          ej(this, f, "f").size < e ||
            (await ej(this, s, "m", x).call(
              this,
              "next",
              () => ej(this, f, "f").size < e
            ));
        }
        async onIdle() {
          (0 !== ej(this, g, "f") || 0 !== ej(this, f, "f").size) &&
            (await ej(this, s, "m", x).call(this, "idle"));
        }
        get size() {
          return ej(this, f, "f").size;
        }
        sizeBy(e) {
          return ej(this, f, "f").filter(e).length;
        }
        get pending() {
          return ej(this, g, "f");
        }
        get isPaused() {
          return ej(this, v, "f");
        }
      }
      (o = new WeakMap()),
        (a = new WeakMap()),
        (l = new WeakMap()),
        (u = new WeakMap()),
        (h = new WeakMap()),
        (d = new WeakMap()),
        (p = new WeakMap()),
        (c = new WeakMap()),
        (f = new WeakMap()),
        (m = new WeakMap()),
        (g = new WeakMap()),
        (y = new WeakMap()),
        (v = new WeakMap()),
        (b = new WeakMap()),
        (s = new WeakSet()),
        (w = function () {
          return ej(this, a, "f") || ej(this, l, "f") < ej(this, u, "f");
        }),
        (P = function () {
          return ej(this, g, "f") < ej(this, y, "f");
        }),
        (_ = function () {
          var e;
          eL(this, g, ((e = ej(this, g, "f")), --e), "f"),
            ej(this, s, "m", E).call(this),
            this.emit("next");
        }),
        (S = function () {
          ej(this, s, "m", T).call(this),
            ej(this, s, "m", F).call(this),
            eL(this, c, void 0, "f");
        }),
        (C = function () {
          let e = Date.now();
          if (void 0 === ej(this, p, "f")) {
            let t = ej(this, d, "f") - e;
            if (!(t < 0))
              return (
                void 0 === ej(this, c, "f") &&
                  eL(
                    this,
                    c,
                    setTimeout(() => {
                      ej(this, s, "m", S).call(this);
                    }, t),
                    "f"
                  ),
                !0
              );
            eL(this, l, ej(this, o, "f") ? ej(this, g, "f") : 0, "f");
          }
          return !1;
        }),
        (E = function () {
          if (0 === ej(this, f, "f").size)
            return (
              ej(this, p, "f") && clearInterval(ej(this, p, "f")),
              eL(this, p, void 0, "f"),
              this.emit("empty"),
              0 === ej(this, g, "f") && this.emit("idle"),
              !1
            );
          if (!ej(this, v, "f")) {
            let e = !ej(this, s, "a", C);
            if (ej(this, s, "a", w) && ej(this, s, "a", P)) {
              let t = ej(this, f, "f").dequeue();
              return (
                !!t &&
                (this.emit("active"),
                t(),
                e && ej(this, s, "m", F).call(this),
                !0)
              );
            }
          }
          return !1;
        }),
        (F = function () {
          ej(this, a, "f") ||
            void 0 !== ej(this, p, "f") ||
            (eL(
              this,
              p,
              setInterval(() => {
                ej(this, s, "m", T).call(this);
              }, ej(this, h, "f")),
              "f"
            ),
            eL(this, d, Date.now() + ej(this, h, "f"), "f"));
        }),
        (T = function () {
          0 === ej(this, l, "f") &&
            0 === ej(this, g, "f") &&
            ej(this, p, "f") &&
            (clearInterval(ej(this, p, "f")), eL(this, p, void 0, "f")),
            eL(this, l, ej(this, o, "f") ? ej(this, g, "f") : 0, "f"),
            ej(this, s, "m", O).call(this);
        }),
        (O = function () {
          for (; ej(this, s, "m", E).call(this); );
        }),
        (k = async function (e) {
          return new Promise((t, i) => {
            e.addEventListener(
              "abort",
              () => {
                i(new ez("The task was aborted."));
              },
              { once: !0 }
            );
          });
        }),
        (x = async function (e, t) {
          return new Promise((i) => {
            let r = () => {
              (!t || t()) && (this.off(e, r), i());
            };
            this.on(e, r);
          });
        });
      var eq = i(49971),
        eH = i(98293);
      function eV() {
        return (0, N.h)(
          "svg",
          {
            width: "26",
            height: "26",
            viewBox: "0 0 26 26",
            xmlns: "http://www.w3.org/2000/svg",
          },
          (0, N.h)(
            "g",
            { fill: "none", "fill-rule": "evenodd" },
            (0, N.h)("circle", { fill: "#FFF", cx: "13", cy: "13", r: "13" }),
            (0, N.h)("path", {
              d: "M21.64 13.205c0-.639-.057-1.252-.164-1.841H13v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z",
              fill: "#4285F4",
              "fill-rule": "nonzero",
            }),
            (0, N.h)("path", {
              d: "M13 22c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H4.957v2.332A8.997 8.997 0 0013 22z",
              fill: "#34A853",
              "fill-rule": "nonzero",
            }),
            (0, N.h)("path", {
              d: "M7.964 14.71A5.41 5.41 0 017.682 13c0-.593.102-1.17.282-1.71V8.958H4.957A8.996 8.996 0 004 13c0 1.452.348 2.827.957 4.042l3.007-2.332z",
              fill: "#FBBC05",
              "fill-rule": "nonzero",
            }),
            (0, N.h)("path", {
              d: "M13 7.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C17.463 4.891 15.426 4 13 4a8.997 8.997 0 00-8.043 4.958l3.007 2.332C8.672 9.163 10.656 7.58 13 7.58z",
              fill: "#EA4335",
              "fill-rule": "nonzero",
            }),
            (0, N.h)("path", { d: "M4 4h18v18H4z" })
          )
        );
      }
      function eW(e) {
        let { pluginName: t, i18n: i, onAuth: r } = e,
          n = "Google Drive" === t,
          s = (0, eH.useCallback)(
            (e) => {
              e.preventDefault(), r();
            },
            [r]
          );
        return (0, N.h)(
          "form",
          { onSubmit: s },
          n
            ? (0, N.h)(
                "button",
                {
                  type: "submit",
                  className:
                    "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Provider-authBtn uppy-Provider-btn-google",
                  "data-uppy-super-focusable": !0,
                },
                (0, N.h)(eV, null),
                i("signInWithGoogle")
              )
            : (0, N.h)(
                "button",
                {
                  type: "submit",
                  className:
                    "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Provider-authBtn",
                  "data-uppy-super-focusable": !0,
                },
                i("authenticateWith", { pluginName: t })
              )
        );
      }
      let eG = (e) => {
        let { pluginName: t, i18n: i, onAuth: r } = e;
        return (0, N.h)(eW, { pluginName: t, i18n: i, onAuth: r });
      };
      function eK(e) {
        let {
          loading: t,
          pluginName: i,
          pluginIcon: r,
          i18n: n,
          handleAuth: s,
          renderForm: o = eG,
        } = e;
        return (0, N.h)(
          "div",
          { className: "uppy-Provider-auth" },
          (0, N.h)("div", { className: "uppy-Provider-authIcon" }, r()),
          (0, N.h)(
            "div",
            { className: "uppy-Provider-authTitle" },
            n("authenticateWithTitle", { pluginName: i })
          ),
          (0, N.h)(
            "div",
            { className: "uppy-Provider-authForm" },
            o({ pluginName: i, i18n: n, loading: t, onAuth: s })
          )
        );
      }
      function eZ(e) {
        let { i18n: t, logout: i, username: r } = e;
        return (0, N.h)(
          N.Fragment,
          null,
          (0, N.h)(
            "span",
            { className: "uppy-ProviderBrowser-user", key: "username" },
            r
          ),
          (0, N.h)(
            "button",
            {
              type: "button",
              onClick: i,
              className:
                "uppy-u-reset uppy-c-btn uppy-ProviderBrowser-userLogout",
              key: "logout",
            },
            t("logOut")
          )
        );
      }
      let eX = (e) => {
        let { getFolder: t, title: i, isLast: r } = e;
        return (0, N.h)(
          N.Fragment,
          null,
          (0, N.h)(
            "button",
            {
              type: "button",
              className: "uppy-u-reset uppy-c-btn",
              onClick: t,
            },
            i
          ),
          r ? "" : " / "
        );
      };
      function eY(e) {
        let { getFolder: t, title: i, breadcrumbsIcon: r, breadcrumbs: n } = e;
        return (0, N.h)(
          "div",
          { className: "uppy-Provider-breadcrumbs" },
          (0, N.h)("div", { className: "uppy-Provider-breadcrumbsIcon" }, r),
          n.map((e, r) =>
            (0, N.h)(eX, {
              key: e.id,
              getFolder: () => t(e.requestPath, e.name),
              title: 0 === r ? i : e.name,
              isLast: r + 1 === n.length,
            })
          )
        );
      }
      function eJ(e) {
        return (0, N.h)(
          N.Fragment,
          null,
          e.showBreadcrumbs &&
            (0, N.h)(eY, {
              getFolder: e.getFolder,
              breadcrumbs: e.breadcrumbs,
              breadcrumbsIcon: e.pluginIcon && e.pluginIcon(),
              title: e.title,
            }),
          (0, N.h)(eZ, { logout: e.logout, username: e.username, i18n: e.i18n })
        );
      }
      var eQ = i(67706);
      function e0(e) {
        return {
          ...e,
          type: e.mimeType,
          extension: e.name ? (0, eQ.Z)(e.name).extension : null,
        };
      }
      function e1() {
        return (e1 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i)
                  Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      let e5 = { position: "relative", width: "100%", minHeight: "100%" },
        e2 = {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          overflow: "visible",
        };
      class e3 extends N.Component {
        constructor(e) {
          super(e),
            (this.handleScroll = () => {
              this.setState({ offset: this.base.scrollTop });
            }),
            (this.handleResize = () => {
              this.resize();
            }),
            (this.focusElement = null),
            (this.state = { offset: 0, height: 0 });
        }
        componentDidMount() {
          this.resize(), window.addEventListener("resize", this.handleResize);
        }
        componentWillUpdate() {
          this.base.contains(document.activeElement) &&
            (this.focusElement = document.activeElement);
        }
        componentDidUpdate() {
          this.focusElement &&
            this.focusElement.parentNode &&
            document.activeElement !== this.focusElement &&
            this.focusElement.focus(),
            (this.focusElement = null),
            this.resize();
        }
        componentWillUnmount() {
          window.removeEventListener("resize", this.handleResize);
        }
        resize() {
          let { height: e } = this.state;
          e !== this.base.offsetHeight &&
            this.setState({ height: this.base.offsetHeight });
        }
        render(e) {
          let {
              data: t,
              rowHeight: i,
              renderRow: r,
              overscanCount: n = 10,
              ...s
            } = e,
            { offset: o, height: a } = this.state,
            l = Math.floor(o / i),
            u = Math.floor(a / i);
          n && ((l = Math.max(0, l - (l % n))), (u += n));
          let h = l + u + 4,
            d = t.slice(l, h),
            p = { ...e5, height: t.length * i },
            c = { ...e2, top: l * i };
          return (0, N.h)(
            "div",
            e1({ onScroll: this.handleScroll }, s),
            (0, N.h)(
              "div",
              { role: "presentation", style: p },
              (0, N.h)("div", { role: "presentation", style: c }, d.map(r))
            )
          );
        }
      }
      var e8 = i(59326);
      function e4(e) {
        let {
            search: t,
            searchOnInput: i,
            searchTerm: r,
            showButton: n,
            inputLabel: s,
            clearSearchLabel: o,
            buttonLabel: a,
            clearSearch: l,
            inputClassName: u,
            buttonCSSClassName: h,
          } = e,
          [d, p] = (0, eH.useState)(null != r ? r : ""),
          c = (0, eH.useCallback)(
            (e) => {
              e.preventDefault(), t(d);
            },
            [t, d]
          ),
          f = (0, eH.useCallback)(
            (e) => {
              let r = e.target.value;
              p(r), i && t(r);
            },
            [p, i, t]
          ),
          [m] = (0, eH.useState)(() => {
            let e = document.createElement("form");
            return e.setAttribute("tabindex", "-1"), (e.id = (0, e8.x)()), e;
          });
        return (
          (0, eH.useEffect)(
            () => (
              document.body.appendChild(m),
              m.addEventListener("submit", c),
              () => {
                m.removeEventListener("submit", c),
                  document.body.removeChild(m);
              }
            ),
            [m, c]
          ),
          (0, N.h)(
            N.Fragment,
            null,
            (0, N.h)("input", {
              className: `uppy-u-reset ${u}`,
              type: "search",
              "aria-label": s,
              placeholder: s,
              value: d,
              onInput: f,
              form: m.id,
              "data-uppy-super-focusable": !0,
            }),
            !n &&
              (0, N.h)(
                "svg",
                {
                  "aria-hidden": "true",
                  focusable: "false",
                  className:
                    "uppy-c-icon uppy-ProviderBrowser-searchFilterIcon",
                  width: "12",
                  height: "12",
                  viewBox: "0 0 12 12",
                },
                (0, N.h)("path", {
                  d: "M8.638 7.99l3.172 3.172a.492.492 0 1 1-.697.697L7.91 8.656a4.977 4.977 0 0 1-2.983.983C2.206 9.639 0 7.481 0 4.819 0 2.158 2.206 0 4.927 0c2.721 0 4.927 2.158 4.927 4.82a4.74 4.74 0 0 1-1.216 3.17zm-3.71.685c2.176 0 3.94-1.726 3.94-3.856 0-2.129-1.764-3.855-3.94-3.855C2.75.964.984 2.69.984 4.819c0 2.13 1.765 3.856 3.942 3.856z",
                })
              ),
            !n &&
              d &&
              (0, N.h)(
                "button",
                {
                  className:
                    "uppy-u-reset uppy-ProviderBrowser-searchFilterReset",
                  type: "button",
                  "aria-label": o,
                  title: o,
                  onClick: () => {
                    p(""), l && l();
                  },
                },
                (0, N.h)(
                  "svg",
                  {
                    "aria-hidden": "true",
                    focusable: "false",
                    className: "uppy-c-icon",
                    viewBox: "0 0 19 19",
                  },
                  (0, N.h)("path", {
                    d: "M17.318 17.232L9.94 9.854 9.586 9.5l-.354.354-7.378 7.378h.707l-.62-.62v.706L9.318 9.94l.354-.354-.354-.354L1.94 1.854v.707l.62-.62h-.706l7.378 7.378.354.354.354-.354 7.378-7.378h-.707l.622.62v-.706L9.854 9.232l-.354.354.354.354 7.378 7.378.708-.707-7.38-7.378v.708l7.38-7.38.353-.353-.353-.353-.622-.622-.353-.353-.354.352-7.378 7.38h.708L2.56 1.23 2.208.88l-.353.353-.622.62-.353.355.352.353 7.38 7.38v-.708l-7.38 7.38-.353.353.352.353.622.622.353.353.354-.353 7.38-7.38h-.708l7.38 7.38z",
                  })
                )
              ),
            n &&
              (0, N.h)(
                "button",
                {
                  className: `uppy-u-reset uppy-c-btn uppy-c-btn-primary ${h}`,
                  type: "submit",
                  form: m.id,
                },
                a
              )
          )
        );
      }
      function e6(e) {
        let { cancel: t, done: i, i18n: r, selected: n } = e;
        return (0, N.h)(
          "div",
          { className: "uppy-ProviderBrowser-footer" },
          (0, N.h)(
            "button",
            {
              className: "uppy-u-reset uppy-c-btn uppy-c-btn-primary",
              onClick: i,
              type: "button",
            },
            r("selectX", { smart_count: n })
          ),
          (0, N.h)(
            "button",
            {
              className: "uppy-u-reset uppy-c-btn uppy-c-btn-link",
              onClick: t,
              type: "button",
            },
            r("cancel")
          )
        );
      }
      function e7() {
        return (0, N.h)(
          "svg",
          {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            width: 11,
            height: 14.5,
            viewBox: "0 0 44 58",
          },
          (0, N.h)("path", {
            d: "M27.437.517a1 1 0 0 0-.094.03H4.25C2.037.548.217 2.368.217 4.58v48.405c0 2.212 1.82 4.03 4.03 4.03H39.03c2.21 0 4.03-1.818 4.03-4.03V15.61a1 1 0 0 0-.03-.28 1 1 0 0 0 0-.093 1 1 0 0 0-.03-.032 1 1 0 0 0 0-.03 1 1 0 0 0-.032-.063 1 1 0 0 0-.03-.063 1 1 0 0 0-.032 0 1 1 0 0 0-.03-.063 1 1 0 0 0-.032-.03 1 1 0 0 0-.03-.063 1 1 0 0 0-.063-.062l-14.593-14a1 1 0 0 0-.062-.062A1 1 0 0 0 28 .708a1 1 0 0 0-.374-.157 1 1 0 0 0-.156 0 1 1 0 0 0-.03-.03l-.003-.003zM4.25 2.547h22.218v9.97c0 2.21 1.82 4.03 4.03 4.03h10.564v36.438a2.02 2.02 0 0 1-2.032 2.032H4.25c-1.13 0-2.032-.9-2.032-2.032V4.58c0-1.13.902-2.032 2.03-2.032zm24.218 1.345l10.375 9.937.75.718H30.5c-1.13 0-2.032-.9-2.032-2.03V3.89z",
          })
        );
      }
      function e9() {
        return (0, N.h)(
          "svg",
          {
            "aria-hidden": "true",
            focusable: "false",
            className: "uppy-c-icon",
            style: { minWidth: 16, marginRight: 3 },
            viewBox: "0 0 276.157 276.157",
          },
          (0, N.h)("path", {
            d: "M273.08 101.378c-3.3-4.65-8.86-7.32-15.254-7.32h-24.34V67.59c0-10.2-8.3-18.5-18.5-18.5h-85.322c-3.63 0-9.295-2.875-11.436-5.805l-6.386-8.735c-4.982-6.814-15.104-11.954-23.546-11.954H58.73c-9.292 0-18.638 6.608-21.737 15.372l-2.033 5.752c-.958 2.71-4.72 5.37-7.596 5.37H18.5C8.3 49.09 0 57.39 0 67.59v167.07c0 .886.16 1.73.443 2.52.152 3.306 1.18 6.424 3.053 9.064 3.3 4.652 8.86 7.32 15.255 7.32h188.487c11.395 0 23.27-8.425 27.035-19.18l40.677-116.188c2.11-6.035 1.43-12.164-1.87-16.816zM18.5 64.088h8.864c9.295 0 18.64-6.607 21.738-15.37l2.032-5.75c.96-2.712 4.722-5.373 7.597-5.373h29.565c3.63 0 9.295 2.876 11.437 5.806l6.386 8.735c4.982 6.815 15.104 11.954 23.546 11.954h85.322c1.898 0 3.5 1.602 3.5 3.5v26.47H69.34c-11.395 0-23.27 8.423-27.035 19.178L15 191.23V67.59c0-1.898 1.603-3.5 3.5-3.5zm242.29 49.15l-40.676 116.188c-1.674 4.78-7.812 9.135-12.877 9.135H18.75c-1.447 0-2.576-.372-3.02-.997-.442-.625-.422-1.814.057-3.18l40.677-116.19c1.674-4.78 7.812-9.134 12.877-9.134h188.487c1.448 0 2.577.372 3.02.997.443.625.423 1.814-.056 3.18z",
          })
        );
      }
      function te() {
        return (0, N.h)(
          "svg",
          {
            "aria-hidden": "true",
            focusable: "false",
            style: { width: 16, marginRight: 4 },
            viewBox: "0 0 58 58",
          },
          (0, N.h)("path", {
            d: "M36.537 28.156l-11-7a1.005 1.005 0 0 0-1.02-.033C24.2 21.3 24 21.635 24 22v14a1 1 0 0 0 1.537.844l11-7a1.002 1.002 0 0 0 0-1.688zM26 34.18V23.82L34.137 29 26 34.18z",
          }),
          (0, N.h)("path", {
            d: "M57 6H1a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h56a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM10 28H2v-9h8v9zm-8 2h8v9H2v-9zm10 10V8h34v42H12V40zm44-12h-8v-9h8v9zm-8 2h8v9h-8v-9zm8-22v9h-8V8h8zM2 8h8v9H2V8zm0 42v-9h8v9H2zm54 0h-8v-9h8v9z",
          })
        );
      }
      function tt(e) {
        let { itemIconString: t } = e;
        if (null === t) return null;
        switch (t) {
          case "file":
            return (0, N.h)(e7, null);
          case "folder":
            return (0, N.h)(e9, null);
          case "video":
            return (0, N.h)(te, null);
          default: {
            let { alt: i } = e;
            return (0, N.h)("img", {
              src: t,
              alt: i,
              referrerPolicy: "no-referrer",
              loading: "lazy",
              width: 16,
              height: 16,
            });
          }
        }
      }
      var ti = function (e) {
        let {
            className: t,
            isDisabled: i,
            restrictionError: r,
            isChecked: n,
            title: s,
            itemIconEl: o,
            showTitles: a,
            toggleCheckbox: l,
            recordShiftKeyPress: u,
            id: h,
            children: d,
          } = e,
          p = B(
            "uppy-u-reset",
            "uppy-ProviderBrowserItem-checkbox",
            "uppy-ProviderBrowserItem-checkbox--grid",
            { "uppy-ProviderBrowserItem-checkbox--is-checked": n }
          );
        return (0, N.h)(
          "li",
          {
            className: t,
            title: i ? (null == r ? void 0 : r.message) : void 0,
          },
          (0, N.h)("input", {
            type: "checkbox",
            className: p,
            onChange: l,
            onKeyDown: u,
            onMouseDown: u,
            name: "listitem",
            id: h,
            checked: n,
            disabled: i,
            "data-uppy-super-focusable": !0,
          }),
          (0, N.h)(
            "label",
            {
              htmlFor: h,
              "aria-label": s,
              className: "uppy-u-reset uppy-ProviderBrowserItem-inner",
            },
            o,
            a && s,
            d
          )
        );
      };
      function tr(e) {
        let {
          className: t,
          isDisabled: i,
          restrictionError: r,
          isCheckboxDisabled: n,
          isChecked: s,
          toggleCheckbox: o,
          recordShiftKeyPress: a,
          type: l,
          id: u,
          itemIconEl: h,
          title: d,
          handleFolderClick: p,
          showTitles: c,
          i18n: f,
        } = e;
        return (0, N.h)(
          "li",
          {
            className: t,
            title: i ? (null == r ? void 0 : r.message) : void 0,
          },
          n
            ? null
            : (0, N.h)("input", {
                type: "checkbox",
                className: `uppy-u-reset uppy-ProviderBrowserItem-checkbox ${
                  s ? "uppy-ProviderBrowserItem-checkbox--is-checked" : ""
                }`,
                onChange: o,
                onKeyDown: a,
                onMouseDown: a,
                name: "listitem",
                id: u,
                checked: s,
                "aria-label":
                  "file" === l
                    ? null
                    : f("allFilesFromFolderNamed", { name: d }),
                disabled: i,
                "data-uppy-super-focusable": !0,
              }),
          "file" === l
            ? (0, N.h)(
                "label",
                {
                  htmlFor: u,
                  className: "uppy-u-reset uppy-ProviderBrowserItem-inner",
                },
                (0, N.h)(
                  "div",
                  { className: "uppy-ProviderBrowserItem-iconWrap" },
                  h
                ),
                c && d
              )
            : (0, N.h)(
                "button",
                {
                  type: "button",
                  className:
                    "uppy-u-reset uppy-c-btn uppy-ProviderBrowserItem-inner",
                  onClick: p,
                  "aria-label": f("openFolderNamed", { name: d }),
                },
                (0, N.h)(
                  "div",
                  { className: "uppy-ProviderBrowserItem-iconWrap" },
                  h
                ),
                c && (0, N.h)("span", null, d)
              )
        );
      }
      function tn() {
        return (tn = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i)
                  Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function ts(e) {
        let {
            author: t,
            getItemIcon: i,
            isChecked: r,
            isDisabled: n,
            viewType: s,
          } = e,
          o = i(),
          a = B(
            "uppy-ProviderBrowserItem",
            { "uppy-ProviderBrowserItem--selected": r },
            { "uppy-ProviderBrowserItem--disabled": n },
            { "uppy-ProviderBrowserItem--noPreview": "video" === o }
          ),
          l = (0, N.h)(tt, { itemIconString: o });
        switch (s) {
          case "grid":
            return (0, N.h)(ti, tn({}, e, { className: a, itemIconEl: l }));
          case "list":
            return (0, N.h)(tr, tn({}, e, { className: a, itemIconEl: l }));
          case "unsplash":
            return (0, N.h)(
              ti,
              tn({}, e, { className: a, itemIconEl: l }),
              (0, N.h)(
                "a",
                {
                  href: `${t.url}?utm_source=Companion&utm_medium=referral`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "uppy-ProviderBrowserItem-author",
                  tabIndex: -1,
                },
                t.name
              )
            );
          default:
            throw Error(`There is no such type ${s}`);
        }
      }
      function to(e) {
        let {
          currentSelection: t,
          uppyFiles: i,
          viewType: r,
          isChecked: n,
          toggleCheckbox: s,
          recordShiftKeyPress: o,
          showTitles: a,
          i18n: l,
          validateRestrictions: u,
          getNextFolder: h,
          f: d,
        } = e;
        if (d.isFolder)
          return ts({
            showTitles: a,
            viewType: r,
            i18n: l,
            id: d.id,
            title: d.name,
            getItemIcon: () => d.icon,
            isChecked: n(d),
            toggleCheckbox: (e) => s(e, d),
            recordShiftKeyPress: o,
            type: "folder",
            isDisabled: !1,
            isCheckboxDisabled: "shared-with-me" === d.id,
            handleFolderClick: () => h(d),
          });
        let p = u(e0(d), [...i, ...t]);
        return ts({
          id: d.id,
          title: d.name,
          author: d.author,
          getItemIcon: () => d.icon,
          isChecked: n(d),
          toggleCheckbox: (e) => s(e, d),
          isCheckboxDisabled: !1,
          recordShiftKeyPress: o,
          showTitles: a,
          viewType: r,
          i18n: l,
          type: "file",
          isDisabled: !!p && !n(d),
          restrictionError: p,
        });
      }
      var ta = function (e) {
        let {
            currentSelection: t,
            folders: i,
            files: r,
            uppyFiles: n,
            viewType: s,
            headerComponent: o,
            showBreadcrumbs: a,
            isChecked: l,
            toggleCheckbox: u,
            recordShiftKeyPress: h,
            handleScroll: d,
            showTitles: p,
            i18n: c,
            validateRestrictions: f,
            isLoading: m,
            showSearchFilter: g,
            search: y,
            searchTerm: v,
            clearSearch: b,
            searchOnInput: w,
            searchInputLabel: P,
            clearSearchLabel: _,
            getNextFolder: S,
            cancel: C,
            done: E,
            noResultsLabel: F,
            loadAllFiles: T,
          } = e,
          O = t.length,
          k = (0, eH.useMemo)(() => [...i, ...r], [i, r]);
        return (0, N.h)(
          "div",
          {
            className: B(
              "uppy-ProviderBrowser",
              `uppy-ProviderBrowser-viewType--${s}`
            ),
          },
          o &&
            (0, N.h)(
              "div",
              { className: "uppy-ProviderBrowser-header" },
              (0, N.h)(
                "div",
                {
                  className: B(
                    "uppy-ProviderBrowser-headerBar",
                    !a && "uppy-ProviderBrowser-headerBar--simple"
                  ),
                },
                o
              )
            ),
          g &&
            (0, N.h)(
              "div",
              { class: "uppy-ProviderBrowser-searchFilter" },
              (0, N.h)(e4, {
                search: y,
                searchTerm: v,
                clearSearch: b,
                inputLabel: P,
                clearSearchLabel: _,
                inputClassName: "uppy-ProviderBrowser-searchFilterInput",
                searchOnInput: w,
              })
            ),
          m
            ? (0, N.h)(
                "div",
                { className: "uppy-Provider-loading" },
                (0, N.h)("span", null, c("loading"))
              )
            : i.length || r.length
            ? T
              ? (0, N.h)(
                  "div",
                  { className: "uppy-ProviderBrowser-body" },
                  (0, N.h)(
                    "ul",
                    { className: "uppy-ProviderBrowser-list" },
                    (0, N.h)(e3, {
                      data: k,
                      renderRow: (e) =>
                        (0, N.h)(to, {
                          currentSelection: t,
                          uppyFiles: n,
                          viewType: s,
                          isChecked: l,
                          toggleCheckbox: u,
                          recordShiftKeyPress: h,
                          showTitles: p,
                          i18n: c,
                          validateRestrictions: f,
                          getNextFolder: S,
                          f: e,
                        }),
                      rowHeight: 31,
                    })
                  )
                )
              : (0, N.h)(
                  "div",
                  { className: "uppy-ProviderBrowser-body" },
                  (0, N.h)(
                    "ul",
                    {
                      className: "uppy-ProviderBrowser-list",
                      onScroll: d,
                      role: "listbox",
                      tabIndex: -1,
                    },
                    k.map((e) =>
                      (0, N.h)(to, {
                        currentSelection: t,
                        uppyFiles: n,
                        viewType: s,
                        isChecked: l,
                        toggleCheckbox: u,
                        recordShiftKeyPress: h,
                        showTitles: p,
                        i18n: c,
                        validateRestrictions: f,
                        getNextFolder: S,
                        f: e,
                      })
                    )
                  )
                )
            : (0, N.h)("div", { className: "uppy-Provider-empty" }, F),
          O > 0 && (0, N.h)(e6, { selected: O, done: E, cancel: C, i18n: c })
        );
      };
      class tl extends N.Component {
        componentWillUnmount() {
          let { onUnmount: e } = this.props;
          e();
        }
        render() {
          let { children: e } = this.props;
          return (0, N.toChildArray)(e)[0];
        }
      }
      var tu = i(68954),
        th = i(96880);
      class td {
        constructor(e, t) {
          (this.filterItems = (e) => {
            let t = this.plugin.getPluginState();
            return t.filterInput && "" !== t.filterInput
              ? e.filter(
                  (e) =>
                    -1 !==
                    e.name.toLowerCase().indexOf(t.filterInput.toLowerCase())
                )
              : e;
          }),
            (this.recordShiftKeyPress = (e) => {
              this.isShiftKeyPressed = e.shiftKey;
            }),
            (this.isChecked = (e) => {
              let { currentSelection: t } = this.plugin.getPluginState();
              return t.some((t) => t.id === e.id);
            }),
            (this.plugin = e),
            (this.provider = t.provider),
            (this.opts = t),
            (this.isHandlingScroll = !1),
            (this.preFirstRender = this.preFirstRender.bind(this)),
            (this.handleError = this.handleError.bind(this)),
            (this.clearSelection = this.clearSelection.bind(this)),
            (this.cancelPicking = this.cancelPicking.bind(this));
        }
        preFirstRender() {
          this.plugin.setPluginState({ didFirstRender: !0 }),
            this.plugin.onFirstRender();
        }
        shouldHandleScroll(e) {
          let { scrollHeight: t, scrollTop: i, offsetHeight: r } = e.target;
          return t - (i + r) < 50 && !this.isHandlingScroll;
        }
        clearSelection() {
          this.plugin.setPluginState({ currentSelection: [], filterInput: "" });
        }
        cancelPicking() {
          this.clearSelection();
          let e = this.plugin.uppy.getPlugin("Dashboard");
          e && e.hideAllPanels();
        }
        handleError(e) {
          var t;
          let { uppy: i } = this.plugin,
            r = i.i18n("companionError");
          i.log(e.toString()),
            e.isAuthError ||
              (null == (t = e.cause) ? void 0 : t.name) === "AbortError" ||
              i.info({ message: r, details: e.toString() }, "error", 5e3);
        }
        registerRequestClient() {
          (this.requestClientId = this.provider.provider),
            this.plugin.uppy.registerRequestClient(
              this.requestClientId,
              this.provider
            );
        }
        getTagFile(e) {
          let t = {
              id: e.id,
              source: this.plugin.id,
              name: e.name || e.id,
              type: e.mimeType,
              isRemote: !0,
              data: e,
              meta: {},
              body: { fileId: e.id },
              remote: {
                companionUrl: this.plugin.opts.companionUrl,
                url: `${this.provider.fileUrl(e.requestPath)}`,
                body: { fileId: e.id },
                providerName: this.provider.name,
                provider: this.provider.provider,
                requestClientId: this.requestClientId,
              },
            },
            i = (0, tu.Z)(t);
          return (
            i && (0, th.Z)(i) && (t.preview = e.thumbnail),
            e.author &&
              (null != e.author.name &&
                (t.meta.authorName = String(e.author.name)),
              e.author.url && (t.meta.authorUrl = e.author.url)),
            null != e.relDirPath &&
              (t.meta.relativePath = e.relDirPath
                ? `${e.relDirPath}/${t.name}`
                : null),
            null != e.absDirPath &&
              (t.meta.absolutePath = e.absDirPath
                ? `/${e.absDirPath}/${t.name}`
                : `/${t.name}`),
            t
          );
        }
        toggleCheckbox(e, t) {
          e.stopPropagation(), e.preventDefault(), e.currentTarget.focus();
          let { folders: i, files: r } = this.plugin.getPluginState(),
            n = this.filterItems(i.concat(r));
          if (this.lastCheckbox && this.isShiftKeyPressed) {
            let { currentSelection: e } = this.plugin.getPluginState(),
              i = n.indexOf(this.lastCheckbox),
              r = n.indexOf(t),
              s = i < r ? n.slice(i, r + 1) : n.slice(r, i + 1),
              o = [];
            for (let e of s) {
              let { uppy: t } = this.plugin,
                i = t.validateRestrictions(e0(e), [...t.getFiles(), ...o]);
              i
                ? t.info({ message: i.message }, "error", t.opts.infoTimeout)
                : o.push(e);
            }
            this.plugin.setPluginState({
              currentSelection: [...new Set([...e, ...o])],
            });
            return;
          }
          this.lastCheckbox = t;
          let { currentSelection: s } = this.plugin.getPluginState();
          this.isChecked(t)
            ? this.plugin.setPluginState({
                currentSelection: s.filter((e) => e.id !== t.id),
              })
            : this.plugin.setPluginState({ currentSelection: s.concat([t]) });
        }
        setLoading(e) {
          this.plugin.setPluginState({ loading: e });
        }
      }
      function tp(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e, t))
          throw TypeError("attempted to use private field on non-instance");
        return e;
      }
      var tc = 0;
      function tf(e) {
        return "__private_" + tc++ + "_" + e;
      }
      function tm(e, t) {
        return e ? `${e}/${t}` : t;
      }
      function tg() {
        return (0, N.h)(
          "svg",
          {
            "aria-hidden": "true",
            focusable: "false",
            width: "30",
            height: "30",
            viewBox: "0 0 30 30",
          },
          (0, N.h)("path", {
            d: "M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm4.258-12.676v6.846h-8.426v-6.846H5.204l9.82-12.364 9.82 12.364H19.26z",
          })
        );
      }
      let ty = {
        viewType: "list",
        showTitles: !0,
        showFilter: !0,
        showBreadcrumbs: !0,
        loadAllFiles: !1,
      };
      var tv = tf("abortController"),
        tb = tf("withAbort"),
        tw = tf("list"),
        tP = tf("listFilesAndFolders"),
        t_ = tf("recursivelyListAllFiles");
      class tS extends td {
        constructor(e, t) {
          super(e, { ...ty, ...t }),
            Object.defineProperty(this, t_, { value: tT }),
            Object.defineProperty(this, tP, { value: tF }),
            Object.defineProperty(this, tw, { value: tE }),
            Object.defineProperty(this, tb, { value: tC }),
            Object.defineProperty(this, tv, { writable: !0, value: void 0 }),
            (this.filterQuery = this.filterQuery.bind(this)),
            (this.clearFilter = this.clearFilter.bind(this)),
            (this.getFolder = this.getFolder.bind(this)),
            (this.getNextFolder = this.getNextFolder.bind(this)),
            (this.logout = this.logout.bind(this)),
            (this.handleAuth = this.handleAuth.bind(this)),
            (this.handleScroll = this.handleScroll.bind(this)),
            (this.donePicking = this.donePicking.bind(this)),
            (this.render = this.render.bind(this)),
            this.plugin.setPluginState({
              authenticated: void 0,
              files: [],
              folders: [],
              breadcrumbs: [],
              filterInput: "",
              isSearchVisible: !1,
              currentSelection: [],
            }),
            this.registerRequestClient();
        }
        tearDown() {}
        async getFolder(e, t) {
          this.setLoading(!0);
          try {
            await tp(this, tb)[tb](async (i) => {
              this.lastCheckbox = void 0;
              let { breadcrumbs: r } = this.plugin.getPluginState(),
                n = r.findIndex((t) => e === t.requestPath);
              (r =
                -1 !== n
                  ? r.slice(0, n + 1)
                  : [...r, { requestPath: e, name: t }]),
                (this.nextPagePath = e);
              let s = [],
                o = [];
              do {
                let { files: e, folders: t } = await tp(this, tP)[tP]({
                  breadcrumbs: r,
                  signal: i,
                });
                (s = s.concat(e)),
                  (o = o.concat(t)),
                  this.setLoading(
                    this.plugin.uppy.i18n("loadedXFiles", {
                      numFiles: s.length + o.length,
                    })
                  );
              } while (this.opts.loadAllFiles && this.nextPagePath);
              this.plugin.setPluginState({
                folders: o,
                files: s,
                breadcrumbs: r,
                filterInput: "",
              });
            });
          } catch (e) {
            if ((null == e ? void 0 : e.name) === "UserFacingApiError") {
              this.plugin.uppy.info(
                { message: this.plugin.uppy.i18n(e.message) },
                "warning",
                5e3
              );
              return;
            }
            this.handleError(e);
          } finally {
            this.setLoading(!1);
          }
        }
        getNextFolder(e) {
          this.getFolder(e.requestPath, e.name), (this.lastCheckbox = void 0);
        }
        async logout() {
          try {
            await tp(this, tb)[tb](async (e) => {
              let t = await this.provider.logout({ signal: e });
              if (t.ok) {
                if (!t.revoked) {
                  let e = this.plugin.uppy.i18n("companionUnauthorizeHint", {
                    provider: this.plugin.title,
                    url: t.manual_revoke_url,
                  });
                  this.plugin.uppy.info(e, "info", 7e3);
                }
                this.plugin.setPluginState({
                  authenticated: !1,
                  files: [],
                  folders: [],
                  breadcrumbs: [],
                  filterInput: "",
                });
              }
            });
          } catch (e) {
            this.handleError(e);
          }
        }
        filterQuery(e) {
          this.plugin.setPluginState({ filterInput: e });
        }
        clearFilter() {
          this.plugin.setPluginState({ filterInput: "" });
        }
        async handleAuth(e) {
          try {
            await tp(this, tb)[tb](async (t) => {
              this.setLoading(!0),
                await this.provider.login({ authFormData: e, signal: t }),
                this.plugin.setPluginState({ authenticated: !0 }),
                this.preFirstRender();
            });
          } catch (e) {
            if ("UserFacingApiError" === e.name) {
              this.plugin.uppy.info(
                { message: this.plugin.uppy.i18n(e.message) },
                "warning",
                5e3
              );
              return;
            }
            this.plugin.uppy.log(`login failed: ${e.message}`);
          } finally {
            this.setLoading(!1);
          }
        }
        async handleScroll(e) {
          if (this.shouldHandleScroll(e) && this.nextPagePath) {
            this.isHandlingScroll = !0;
            try {
              await tp(this, tb)[tb](async (e) => {
                let {
                    files: t,
                    folders: i,
                    breadcrumbs: r,
                  } = this.plugin.getPluginState(),
                  { files: n, folders: s } = await tp(this, tP)[tP]({
                    breadcrumbs: r,
                    signal: e,
                  }),
                  o = t.concat(n),
                  a = i.concat(s);
                this.plugin.setPluginState({ folders: a, files: o });
              });
            } catch (e) {
              this.handleError(e);
            } finally {
              this.isHandlingScroll = !1;
            }
          }
        }
        async donePicking() {
          this.setLoading(!0);
          try {
            await tp(this, tb)[tb](async (e) => {
              let { currentSelection: t } = this.plugin.getPluginState(),
                i = [],
                r = [];
              for (let n of t) {
                let { requestPath: t } = n,
                  s = (e) => ({
                    ...e,
                    relDirPath: e.absDirPath
                      .replace(n.absDirPath, "")
                      .replace(/^\//, ""),
                  });
                if (n.isFolder) {
                  let o,
                    a = !0,
                    l = 0,
                    u = new e$({ concurrency: 6 }),
                    h = (e) => {
                      for (let t of e) {
                        let e = this.getTagFile(t),
                          i = (0, eq.H)(e);
                        this.plugin.uppy.checkIfFileAlreadyExists(i) ||
                          (r.push(s(t)),
                          l++,
                          this.setLoading(
                            this.plugin.uppy.i18n("addedNumFiles", {
                              numFiles: l,
                            })
                          )),
                          (a = !1);
                      }
                    };
                  await tp(this, t_)[t_]({
                    requestPath: t,
                    absDirPath: tm(n.absDirPath, n.name),
                    relDirPath: n.name,
                    queue: u,
                    onFiles: h,
                    signal: e,
                  }),
                    await u.onIdle(),
                    (o = a
                      ? this.plugin.uppy.i18n("emptyFolderAdded")
                      : 0 === l
                      ? this.plugin.uppy.i18n("folderAlreadyAdded", {
                          folder: n.name,
                        })
                      : this.plugin.uppy.i18n("folderAdded", {
                          smart_count: l,
                          folder: n.name,
                        })),
                    i.push(o);
                } else r.push(s(n));
              }
              this.plugin.uppy.log("Adding files from a remote provider"),
                this.plugin.uppy.addFiles(
                  r.map((e) => this.getTagFile(e, this.requestClientId))
                ),
                this.plugin.setPluginState({ filterInput: "" }),
                i.forEach((e) => this.plugin.uppy.info(e)),
                this.clearSelection();
            });
          } catch (e) {
            this.handleError(e);
          } finally {
            this.setLoading(!1);
          }
        }
        render(e, t) {
          var i = this;
          void 0 === t && (t = {});
          let { authenticated: r, didFirstRender: n } =
              this.plugin.getPluginState(),
            { i18n: s } = this.plugin.uppy;
          n || this.preFirstRender();
          let o = { ...this.opts, ...t },
            {
              files: a,
              folders: l,
              filterInput: u,
              loading: h,
              currentSelection: d,
            } = this.plugin.getPluginState(),
            { isChecked: p, recordShiftKeyPress: c, filterItems: f } = this,
            m = "" !== u,
            g = this.plugin.icon || tg,
            y = {
              showBreadcrumbs: o.showBreadcrumbs,
              getFolder: this.getFolder,
              breadcrumbs: this.plugin.getPluginState().breadcrumbs,
              pluginIcon: g,
              title: this.plugin.title,
              logout: this.logout,
              username: this.username,
              i18n: s,
            },
            v = {
              isChecked: p,
              toggleCheckbox: this.toggleCheckbox.bind(this),
              recordShiftKeyPress: c,
              currentSelection: d,
              files: m ? f(a) : a,
              folders: m ? f(l) : l,
              getNextFolder: this.getNextFolder,
              getFolder: this.getFolder,
              loadAllFiles: this.opts.loadAllFiles,
              showSearchFilter: o.showFilter,
              search: this.filterQuery,
              clearSearch: this.clearFilter,
              searchTerm: u,
              searchOnInput: !0,
              searchInputLabel: s("filter"),
              clearSearchLabel: s("resetFilter"),
              noResultsLabel: s("noFilesFound"),
              logout: this.logout,
              handleScroll: this.handleScroll,
              done: this.donePicking,
              cancel: this.cancelPicking,
              headerComponent: (0, N.h)(eJ, y),
              title: this.plugin.title,
              viewType: o.viewType,
              showTitles: o.showTitles,
              showBreadcrumbs: o.showBreadcrumbs,
              pluginIcon: g,
              i18n: this.plugin.uppy.i18n,
              uppyFiles: this.plugin.uppy.getFiles(),
              validateRestrictions: function () {
                return i.plugin.uppy.validateRestrictions(...arguments);
              },
              isLoading: h,
            };
          return !1 === r
            ? (0, N.h)(
                tl,
                { onUnmount: this.clearSelection },
                (0, N.h)(eK, {
                  pluginName: this.plugin.title,
                  pluginIcon: g,
                  handleAuth: this.handleAuth,
                  i18n: this.plugin.uppy.i18nArray,
                  renderForm: this.opts.renderAuthForm,
                  loading: h,
                })
              )
            : (0, N.h)(tl, { onUnmount: this.clearSelection }, (0, N.h)(ta, v));
        }
      }
      async function tC(e) {
        var t;
        null == (t = tp(this, tv)[tv]) || t.abort();
        let i = new AbortController();
        tp(this, tv)[tv] = i;
        let r = () => {
          i.abort(), this.clearSelection();
        };
        try {
          this.plugin.uppy.on("dashboard:close-panel", r),
            this.plugin.uppy.on("cancel-all", r),
            await e(i.signal);
        } finally {
          this.plugin.uppy.off("dashboard:close-panel", r),
            this.plugin.uppy.off("cancel-all", r),
            (tp(this, tv)[tv] = void 0);
        }
      }
      async function tE(e) {
        let { requestPath: t, absDirPath: i, signal: r } = e,
          {
            username: n,
            nextPagePath: s,
            items: o,
          } = await this.provider.list(t, { signal: r });
        return (
          (this.username = n || this.username),
          { items: o.map((e) => ({ ...e, absDirPath: i })), nextPagePath: s }
        );
      }
      async function tF(e) {
        let { breadcrumbs: t, signal: i } = e,
          r = t
            .slice(1)
            .map((e) => e.name)
            .join("/"),
          { items: n, nextPagePath: s } = await tp(this, tw)[tw]({
            requestPath: this.nextPagePath,
            absDirPath: r,
            signal: i,
          });
        this.nextPagePath = s;
        let o = [],
          a = [];
        return (
          n.forEach((e) => {
            e.isFolder ? a.push(e) : o.push(e);
          }),
          { files: o, folders: a }
        );
      }
      async function tT(e) {
        let {
            requestPath: t,
            absDirPath: i,
            relDirPath: r,
            queue: n,
            onFiles: s,
            signal: o,
          } = e,
          a = t;
        for (; a; ) {
          let e = await tp(this, tw)[tw]({
            requestPath: a,
            absDirPath: i,
            signal: o,
          });
          a = e.nextPagePath;
          let t = e.items.filter((e) => !e.isFolder),
            l = e.items.filter((e) => e.isFolder);
          s(t);
          let u = l.map(async (e) =>
            n.add(async () =>
              tp(this, t_)[t_]({
                requestPath: e.requestPath,
                absDirPath: tm(i, e.name),
                relDirPath: tm(r, e.name),
                queue: n,
                onFiles: s,
                signal: o,
              })
            )
          );
          await Promise.all(u);
        }
      }
      function tO(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e, t))
          throw TypeError("attempted to use private field on non-instance");
        return e;
      }
      tS.VERSION = "3.11.0";
      var tk = 0;
      let tx = {
          isInputMode: !0,
          files: [],
          folders: [],
          breadcrumbs: [],
          filterInput: "",
          currentSelection: [],
          searchTerm: null,
        },
        tA = {
          viewType: "grid",
          showTitles: !0,
          showFilter: !0,
          showBreadcrumbs: !0,
        };
      var tD = "__private_" + tk++ + "_updateFilesAndInputMode";
      class tU extends td {
        constructor(e, t) {
          super(e, { ...tA, ...t }),
            Object.defineProperty(this, tD, { value: tR }),
            (this.nextPageQuery = null),
            (this.search = this.search.bind(this)),
            (this.clearSearch = this.clearSearch.bind(this)),
            (this.resetPluginState = this.resetPluginState.bind(this)),
            (this.handleScroll = this.handleScroll.bind(this)),
            (this.donePicking = this.donePicking.bind(this)),
            (this.render = this.render.bind(this)),
            this.plugin.setPluginState(tx),
            this.registerRequestClient();
        }
        tearDown() {}
        resetPluginState() {
          this.plugin.setPluginState(tx);
        }
        async search(e) {
          let { searchTerm: t } = this.plugin.getPluginState();
          if (!e || e !== t) {
            this.setLoading(!0);
            try {
              let t = await this.provider.search(e);
              tO(this, tD)[tD](t, []);
            } catch (e) {
              this.handleError(e);
            } finally {
              this.setLoading(!1);
            }
          }
        }
        clearSearch() {
          this.plugin.setPluginState({
            currentSelection: [],
            files: [],
            searchTerm: null,
          });
        }
        async handleScroll(e) {
          let t = this.nextPageQuery || null;
          if (this.shouldHandleScroll(e) && t) {
            this.isHandlingScroll = !0;
            try {
              let { files: e, searchTerm: i } = this.plugin.getPluginState(),
                r = await this.provider.search(i, t);
              tO(this, tD)[tD](r, e);
            } catch (e) {
              this.handleError(e);
            } finally {
              this.isHandlingScroll = !1;
            }
          }
        }
        donePicking() {
          let { currentSelection: e } = this.plugin.getPluginState();
          this.plugin.uppy.log("Adding remote search provider files"),
            this.plugin.uppy.addFiles(e.map((e) => this.getTagFile(e))),
            this.resetPluginState();
        }
        render(e, t) {
          var i = this;
          void 0 === t && (t = {});
          let {
              didFirstRender: r,
              isInputMode: n,
              searchTerm: s,
            } = this.plugin.getPluginState(),
            { i18n: o } = this.plugin.uppy;
          r || this.preFirstRender();
          let a = { ...this.opts, ...t },
            {
              files: l,
              folders: u,
              filterInput: h,
              loading: d,
              currentSelection: p,
            } = this.plugin.getPluginState(),
            { isChecked: c, filterItems: f, recordShiftKeyPress: m } = this,
            g = "" !== h,
            y = {
              isChecked: c,
              toggleCheckbox: this.toggleCheckbox.bind(this),
              recordShiftKeyPress: m,
              currentSelection: p,
              files: g ? f(l) : l,
              folders: g ? f(u) : u,
              handleScroll: this.handleScroll,
              done: this.donePicking,
              cancel: this.cancelPicking,
              showSearchFilter: a.showFilter,
              search: this.search,
              clearSearch: this.clearSearch,
              searchTerm: s,
              searchOnInput: !1,
              searchInputLabel: o("search"),
              clearSearchLabel: o("resetSearch"),
              noResultsLabel: o("noSearchResults"),
              title: this.plugin.title,
              viewType: a.viewType,
              showTitles: a.showTitles,
              showFilter: a.showFilter,
              isLoading: d,
              showBreadcrumbs: a.showBreadcrumbs,
              pluginIcon: this.plugin.icon,
              i18n: o,
              uppyFiles: this.plugin.uppy.getFiles(),
              validateRestrictions: function () {
                return i.plugin.uppy.validateRestrictions(...arguments);
              },
            };
          return n
            ? (0, N.h)(
                tl,
                { onUnmount: this.resetPluginState },
                (0, N.h)(
                  "div",
                  { className: "uppy-SearchProvider" },
                  (0, N.h)(e4, {
                    search: this.search,
                    inputLabel: o("enterTextToSearch"),
                    buttonLabel: o("searchImages"),
                    inputClassName:
                      "uppy-c-textInput uppy-SearchProvider-input",
                    buttonCSSClassName: "uppy-SearchProvider-searchButton",
                    showButton: !0,
                  })
                )
              )
            : (0, N.h)(
                tl,
                { onUnmount: this.resetPluginState },
                (0, N.h)(ta, y)
              );
        }
      }
      function tR(e, t) {
        (this.nextPageQuery = e.nextPageQuery),
          e.items.forEach((e) => {
            t.push(e);
          }),
          this.plugin.setPluginState({
            currentSelection: [],
            isInputMode: !1,
            files: t,
            searchTerm: e.searchedFor,
          });
      }
      tU.VERSION = "3.11.0";
      var tI =
        Number.isNaN ||
        function (e) {
          return "number" == typeof e && e != e;
        };
      function tM(e, t) {
        if (e.length !== t.length) return !1;
        for (var i, r, n = 0; n < e.length; n++)
          if (!((i = e[n]) === (r = t[n]) || (tI(i) && tI(r)))) return !1;
        return !0;
      }
      function tN(e, t) {
        void 0 === t && (t = tM);
        var i = null;
        function r() {
          for (var r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n];
          if (i && i.lastThis === this && t(r, i.lastArgs)) return i.lastResult;
          var s = e.apply(this, r);
          return (i = { lastResult: s, lastArgs: r, lastThis: this }), s;
        }
        return (
          (r.clear = function () {
            i = null;
          }),
          r
        );
      }
      var tB = [
        'a[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])',
        'area[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])',
        "input:not([disabled]):not([inert]):not([aria-hidden])",
        "select:not([disabled]):not([inert]):not([aria-hidden])",
        "textarea:not([disabled]):not([inert]):not([aria-hidden])",
        "button:not([disabled]):not([inert]):not([aria-hidden])",
        'iframe:not([tabindex^="-"]):not([inert]):not([aria-hidden])',
        'object:not([tabindex^="-"]):not([inert]):not([aria-hidden])',
        'embed:not([tabindex^="-"]):not([inert]):not([aria-hidden])',
        '[contenteditable]:not([tabindex^="-"]):not([inert]):not([aria-hidden])',
        '[tabindex]:not([tabindex^="-"]):not([inert]):not([aria-hidden])',
      ];
      function tL(e, t) {
        if (t) {
          let i = e.querySelector(`[data-uppy-paneltype="${t}"]`);
          if (i) return i;
        }
        return e;
      }
      function tj(e, t) {
        let i = t[0];
        i && (i.focus(), e.preventDefault());
      }
      function tz(e, t, i) {
        let r = tL(i, t),
          n = ek(r.querySelectorAll(tB)),
          s = n.indexOf(document.activeElement);
        r.contains(document.activeElement)
          ? e.shiftKey && 0 === s
            ? (function (e, t) {
                let i = t[t.length - 1];
                i && (i.focus(), e.preventDefault());
              })(e, n)
            : e.shiftKey || s !== n.length - 1 || tj(e, n)
          : tj(e, n);
      }
      var t$ = i(64735);
      function tq() {
        let e = document.body;
        return !!(
          "draggable" in e &&
          "ondragstart" in e &&
          "ondrop" in e &&
          "FormData" in window &&
          "FileReader" in window
        );
      }
      var tH = i(14486);
      function tV(e) {
        let t = {
          color: "#838999",
          icon: (0, N.h)(
            "svg",
            {
              "aria-hidden": "true",
              focusable: "false",
              className: "uppy-c-icon",
              width: "25",
              height: "25",
              viewBox: "0 0 25 25",
            },
            (0, N.h)(
              "g",
              { fill: "#A7AFB7", fillRule: "nonzero" },
              (0, N.h)("path", {
                d: "M5.5 22a.5.5 0 0 1-.5-.5v-18a.5.5 0 0 1 .5-.5h10.719a.5.5 0 0 1 .367.16l3.281 3.556a.5.5 0 0 1 .133.339V21.5a.5.5 0 0 1-.5.5h-14zm.5-1h13V7.25L16 4H6v17z",
              }),
              (0, N.h)("path", { d: "M15 4v3a1 1 0 0 0 1 1h3V7h-3V4h-1z" })
            )
          ),
        };
        if (!e) return t;
        let i = e.split("/")[0],
          r = e.split("/")[1];
        return "text" === i
          ? {
              color: "#5a5e69",
              icon: (0, N.h)(
                "svg",
                {
                  "aria-hidden": "true",
                  focusable: "false",
                  className: "uppy-c-icon",
                  width: "25",
                  height: "25",
                  viewBox: "0 0 25 25",
                },
                (0, N.h)("path", {
                  d: "M4.5 7h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z",
                  fill: "#5A5E69",
                  fillRule: "nonzero",
                })
              ),
            }
          : "image" === i
          ? {
              color: "#686de0",
              icon: (0, N.h)(
                "svg",
                {
                  "aria-hidden": "true",
                  focusable: "false",
                  width: "25",
                  height: "25",
                  viewBox: "0 0 25 25",
                },
                (0, N.h)(
                  "g",
                  { fill: "#686DE0", fillRule: "evenodd" },
                  (0, N.h)("path", {
                    d: "M5 7v10h15V7H5zm0-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z",
                    fillRule: "nonzero",
                  }),
                  (0, N.h)("path", {
                    d: "M6.35 17.172l4.994-5.026a.5.5 0 0 1 .707 0l2.16 2.16 3.505-3.505a.5.5 0 0 1 .707 0l2.336 2.31-.707.72-1.983-1.97-3.505 3.505a.5.5 0 0 1-.707 0l-2.16-2.159-3.938 3.939-1.409.026z",
                    fillRule: "nonzero",
                  }),
                  (0, N.h)("circle", { cx: "7.5", cy: "9.5", r: "1.5" })
                )
              ),
            }
          : "audio" === i
          ? {
              color: "#068dbb",
              icon: (0, N.h)(
                "svg",
                {
                  "aria-hidden": "true",
                  focusable: "false",
                  className: "uppy-c-icon",
                  width: "25",
                  height: "25",
                  viewBox: "0 0 25 25",
                },
                (0, N.h)("path", {
                  d: "M9.5 18.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V7.25a.5.5 0 0 1 .379-.485l9-2.25A.5.5 0 0 1 18.5 5v11.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V8.67l-8 2v7.97zm8-11v-2l-8 2v2l8-2zM7 19.64c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1zm9-2c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1z",
                  fill: "#049BCF",
                  fillRule: "nonzero",
                })
              ),
            }
          : "video" === i
          ? {
              color: "#19af67",
              icon: (0, N.h)(
                "svg",
                {
                  "aria-hidden": "true",
                  focusable: "false",
                  className: "uppy-c-icon",
                  width: "25",
                  height: "25",
                  viewBox: "0 0 25 25",
                },
                (0, N.h)("path", {
                  d: "M16 11.834l4.486-2.691A1 1 0 0 1 22 10v6a1 1 0 0 1-1.514.857L16 14.167V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2.834zM15 9H5v8h10V9zm1 4l5 3v-6l-5 3z",
                  fill: "#19AF67",
                  fillRule: "nonzero",
                })
              ),
            }
          : "application" === i && "pdf" === r
          ? {
              color: "#e25149",
              icon: (0, N.h)(
                "svg",
                {
                  "aria-hidden": "true",
                  focusable: "false",
                  className: "uppy-c-icon",
                  width: "25",
                  height: "25",
                  viewBox: "0 0 25 25",
                },
                (0, N.h)("path", {
                  d: "M9.766 8.295c-.691-1.843-.539-3.401.747-3.726 1.643-.414 2.505.938 2.39 3.299-.039.79-.194 1.662-.537 3.148.324.49.66.967 1.055 1.51.17.231.382.488.629.757 1.866-.128 3.653.114 4.918.655 1.487.635 2.192 1.685 1.614 2.84-.566 1.133-1.839 1.084-3.416.249-1.141-.604-2.457-1.634-3.51-2.707a13.467 13.467 0 0 0-2.238.426c-1.392 4.051-4.534 6.453-5.707 4.572-.986-1.58 1.38-4.206 4.914-5.375.097-.322.185-.656.264-1.001.08-.353.306-1.31.407-1.737-.678-1.059-1.2-2.031-1.53-2.91zm2.098 4.87c-.033.144-.068.287-.104.427l.033-.01-.012.038a14.065 14.065 0 0 1 1.02-.197l-.032-.033.052-.004a7.902 7.902 0 0 1-.208-.271c-.197-.27-.38-.526-.555-.775l-.006.028-.002-.003c-.076.323-.148.632-.186.8zm5.77 2.978c1.143.605 1.832.632 2.054.187.26-.519-.087-1.034-1.113-1.473-.911-.39-2.175-.608-3.55-.608.845.766 1.787 1.459 2.609 1.894zM6.559 18.789c.14.223.693.16 1.425-.413.827-.648 1.61-1.747 2.208-3.206-2.563 1.064-4.102 2.867-3.633 3.62zm5.345-10.97c.088-1.793-.351-2.48-1.146-2.28-.473.119-.564 1.05-.056 2.405.213.566.52 1.188.908 1.859.18-.858.268-1.453.294-1.984z",
                  fill: "#E2514A",
                  fillRule: "nonzero",
                })
              ),
            }
          : "application" === i &&
            -1 !==
              [
                "zip",
                "x-7z-compressed",
                "x-rar-compressed",
                "x-tar",
                "x-gzip",
                "x-apple-diskimage",
              ].indexOf(r)
          ? {
              color: "#00C469",
              icon: (0, N.h)(
                "svg",
                {
                  "aria-hidden": "true",
                  focusable: "false",
                  width: "25",
                  height: "25",
                  viewBox: "0 0 25 25",
                },
                (0, N.h)("path", {
                  d: "M10.45 2.05h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V2.55a.5.5 0 0 1 .5-.5zm2.05 1.024h1.05a.5.5 0 0 1 .5.5V3.6a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5v-.001zM10.45 0h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 3.074h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 1.024h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm-2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-1.656 3.074l-.82 5.946c.52.302 1.174.458 1.976.458.803 0 1.455-.156 1.975-.458l-.82-5.946h-2.311zm0-1.025h2.312c.512 0 .946.378 1.015.885l.82 5.946c.056.412-.142.817-.501 1.026-.686.398-1.515.597-2.49.597-.974 0-1.804-.199-2.49-.597a1.025 1.025 0 0 1-.5-1.026l.819-5.946c.07-.507.503-.885 1.015-.885zm.545 6.6a.5.5 0 0 1-.397-.561l.143-.999a.5.5 0 0 1 .495-.429h.74a.5.5 0 0 1 .495.43l.143.998a.5.5 0 0 1-.397.561c-.404.08-.819.08-1.222 0z",
                  fill: "#00C469",
                  fillRule: "nonzero",
                })
              ),
            }
          : t;
      }
      function tW(e) {
        let { file: t } = e;
        if (t.preview)
          return (0, N.h)("img", {
            className: "uppy-Dashboard-Item-previewImg",
            alt: t.name,
            src: t.preview,
          });
        let { color: i, icon: r } = tV(t.type);
        return (0, N.h)(
          "div",
          { className: "uppy-Dashboard-Item-previewIconWrap" },
          (0, N.h)(
            "span",
            {
              className: "uppy-Dashboard-Item-previewIcon",
              style: { color: i },
            },
            r
          ),
          (0, N.h)(
            "svg",
            {
              "aria-hidden": "true",
              focusable: "false",
              className: "uppy-Dashboard-Item-previewIconBg",
              width: "58",
              height: "76",
              viewBox: "0 0 58 76",
            },
            (0, N.h)("rect", {
              fill: "#FFF",
              width: "58",
              height: "76",
              rx: "3",
              fillRule: "evenodd",
            })
          )
        );
      }
      let tG = (e, t) =>
        ("function" == typeof t ? t() : t).filter((t) => t.id === e)[0].name;
      function tK(e) {
        let { file: t, toggleFileCard: i, i18n: r, metaFields: n } = e,
          { missingRequiredMetaFields: s } = t;
        if (!(null != s && s.length)) return null;
        let o = s.map((e) => tG(e, n)).join(", ");
        return (0, N.h)(
          "div",
          { className: "uppy-Dashboard-Item-errorMessage" },
          r("missingRequiredMetaFields", { smart_count: s.length, fields: o }),
          " ",
          (0, N.h)(
            "button",
            {
              type: "button",
              class: "uppy-u-reset uppy-Dashboard-Item-errorMessageBtn",
              onClick: () => i(!0, t.id),
            },
            r("editFile")
          )
        );
      }
      function tZ(e) {
        let {
            file: t,
            i18n: i,
            toggleFileCard: r,
            metaFields: n,
            showLinkToFileUploadResult: s,
          } = e,
          o = t.preview ? "rgba(255, 255, 255, 0.5)" : tV(t.type).color;
        return (0, N.h)(
          "div",
          {
            className: "uppy-Dashboard-Item-previewInnerWrap",
            style: { backgroundColor: o },
          },
          s &&
            t.uploadURL &&
            (0, N.h)(
              "a",
              {
                className: "uppy-Dashboard-Item-previewLink",
                href: t.uploadURL,
                rel: "noreferrer noopener",
                target: "_blank",
                "aria-label": t.meta.name,
              },
              (0, N.h)("span", { hidden: !0 }, t.meta.name)
            ),
          (0, N.h)(tW, { file: t }),
          (0, N.h)(tK, { file: t, i18n: i, toggleFileCard: r, metaFields: n })
        );
      }
      function tX(e) {
        return e.isUploaded
          ? e.i18n("uploadComplete")
          : e.error
          ? e.i18n("retryUpload")
          : e.resumableUploads
          ? e.file.isPaused
            ? e.i18n("resumeUpload")
            : e.i18n("pauseUpload")
          : e.individualCancellation
          ? e.i18n("cancelUpload")
          : "";
      }
      function tY(e) {
        return (0, N.h)(
          "div",
          { className: "uppy-Dashboard-Item-progress" },
          (0, N.h)(
            "button",
            {
              className:
                "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-progressIndicator",
              type: "button",
              "aria-label": tX(e),
              title: tX(e),
              onClick: () =>
                (function (e) {
                  if (!e.isUploaded) {
                    if (e.error && !e.hideRetryButton) {
                      e.uppy.retryUpload(e.file.id);
                      return;
                    }
                    e.resumableUploads && !e.hidePauseResumeButton
                      ? e.uppy.pauseResume(e.file.id)
                      : e.individualCancellation &&
                        !e.hideCancelButton &&
                        e.uppy.removeFile(e.file.id);
                  }
                })(e),
            },
            e.children
          )
        );
      }
      function tJ(e) {
        let { children: t } = e;
        return (0, N.h)(
          "svg",
          {
            "aria-hidden": "true",
            focusable: "false",
            width: "70",
            height: "70",
            viewBox: "0 0 36 36",
            className: "uppy-c-icon uppy-Dashboard-Item-progressIcon--circle",
          },
          t
        );
      }
      function tQ(e) {
        let { progress: t } = e,
          i = 2 * Math.PI * 15;
        return (0, N.h)(
          "g",
          null,
          (0, N.h)("circle", {
            className: "uppy-Dashboard-Item-progressIcon--bg",
            r: "15",
            cx: "18",
            cy: "18",
            "stroke-width": "2",
            fill: "none",
          }),
          (0, N.h)("circle", {
            className: "uppy-Dashboard-Item-progressIcon--progress",
            r: "15",
            cx: "18",
            cy: "18",
            transform: "rotate(-90, 18, 18)",
            fill: "none",
            "stroke-width": "2",
            "stroke-dasharray": i,
            "stroke-dashoffset": i - (i / 100) * t,
          })
        );
      }
      function t0(e) {
        return e.file.progress.uploadStarted
          ? e.isUploaded
            ? (0, N.h)(
                "div",
                { className: "uppy-Dashboard-Item-progress" },
                (0, N.h)(
                  "div",
                  { className: "uppy-Dashboard-Item-progressIndicator" },
                  (0, N.h)(
                    tJ,
                    null,
                    (0, N.h)("circle", {
                      r: "15",
                      cx: "18",
                      cy: "18",
                      fill: "#1bb240",
                    }),
                    (0, N.h)("polygon", {
                      className: "uppy-Dashboard-Item-progressIcon--check",
                      transform: "translate(2, 3)",
                      points:
                        "14 22.5 7 15.2457065 8.99985857 13.1732815 14 18.3547104 22.9729883 9 25 11.1005634",
                    })
                  )
                )
              )
            : e.recoveredState
            ? void 0
            : e.error && !e.hideRetryButton
            ? (0, N.h)(
                tY,
                e,
                (0, N.h)(
                  "svg",
                  {
                    "aria-hidden": "true",
                    focusable: "false",
                    className:
                      "uppy-c-icon uppy-Dashboard-Item-progressIcon--retry",
                    width: "28",
                    height: "31",
                    viewBox: "0 0 16 19",
                  },
                  (0, N.h)("path", {
                    d: "M16 11a8 8 0 1 1-8-8v2a6 6 0 1 0 6 6h2z",
                  }),
                  (0, N.h)("path", { d: "M7.9 3H10v2H7.9z" }),
                  (0, N.h)("path", {
                    d: "M8.536.5l3.535 3.536-1.414 1.414L7.12 1.914z",
                  }),
                  (0, N.h)("path", {
                    d: "M10.657 2.621l1.414 1.415L8.536 7.57 7.12 6.157z",
                  })
                )
              )
            : e.resumableUploads && !e.hidePauseResumeButton
            ? (0, N.h)(
                tY,
                e,
                (0, N.h)(
                  tJ,
                  null,
                  (0, N.h)(tQ, { progress: e.file.progress.percentage }),
                  e.file.isPaused
                    ? (0, N.h)("polygon", {
                        className: "uppy-Dashboard-Item-progressIcon--play",
                        transform: "translate(3, 3)",
                        points: "12 20 12 10 20 15",
                      })
                    : (0, N.h)(
                        "g",
                        {
                          className: "uppy-Dashboard-Item-progressIcon--pause",
                          transform: "translate(14.5, 13)",
                        },
                        (0, N.h)("rect", {
                          x: "0",
                          y: "0",
                          width: "2",
                          height: "10",
                          rx: "0",
                        }),
                        (0, N.h)("rect", {
                          x: "5",
                          y: "0",
                          width: "2",
                          height: "10",
                          rx: "0",
                        })
                      )
                )
              )
            : e.resumableUploads ||
              !e.individualCancellation ||
              e.hideCancelButton
            ? (0, N.h)(
                "div",
                { className: "uppy-Dashboard-Item-progress" },
                (0, N.h)(
                  "div",
                  { className: "uppy-Dashboard-Item-progressIndicator" },
                  (0, N.h)(
                    tJ,
                    null,
                    (0, N.h)(tQ, { progress: e.file.progress.percentage })
                  )
                )
              )
            : (0, N.h)(
                tY,
                e,
                (0, N.h)(
                  tJ,
                  null,
                  (0, N.h)(tQ, { progress: e.file.progress.percentage }),
                  (0, N.h)("polygon", {
                    className: "cancel",
                    transform: "translate(2, 2)",
                    points:
                      "19.8856516 11.0625 16 14.9481516 12.1019737 11.0625 11.0625 12.1143484 14.9481516 16 11.0625 19.8980263 12.1019737 20.9375 16 17.0518484 19.8856516 20.9375 20.9375 19.8980263 17.0518484 16 20.9375 12",
                  })
                )
              )
          : null;
      }
      function t1(e, t) {
        if (0 === t) return "";
        if (e.length <= t) return e;
        if (t <= 4) return `${e.slice(0, t - 1)}…`;
        let i = t - 3;
        return (
          e.slice(0, Math.ceil(i / 2)) + "..." + e.slice(-Math.floor(i / 2))
        );
      }
      let t5 = (e) => {
          let { author: t, name: i } = e.file.meta;
          return (0, N.h)(
            "div",
            { className: "uppy-Dashboard-Item-name", title: i },
            t1(
              i,
              e.isSingleFile && e.containerHeight >= 350
                ? 90
                : e.containerWidth <= 352
                ? 35
                : e.containerWidth <= 576
                ? 60
                : t
                ? 20
                : 30
            )
          );
        },
        t2 = (e) => {
          var t;
          let { author: i } = e.file.meta,
            r = null == (t = e.file.remote) ? void 0 : t.providerName,
            n = `\u00B7`;
          return i
            ? (0, N.h)(
                "div",
                { className: "uppy-Dashboard-Item-author" },
                (0, N.h)(
                  "a",
                  {
                    href: `${i.url}?utm_source=Companion&utm_medium=referral`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  t1(i.name, 13)
                ),
                r ? (0, N.h)(N.Fragment, null, ` ${n} `, r, ` ${n} `) : null
              )
            : null;
        },
        t3 = (e) =>
          e.file.size &&
          (0, N.h)(
            "div",
            { className: "uppy-Dashboard-Item-statusSize" },
            j(e.file.size)
          ),
        t8 = (e) =>
          e.file.isGhost &&
          (0, N.h)(
            "span",
            null,
            " • ",
            (0, N.h)(
              "button",
              {
                className:
                  "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-reSelect",
                type: "button",
                onClick: e.toggleAddFilesPanel,
              },
              e.i18n("reSelect")
            )
          ),
        t4 = (e) => {
          let { file: t, onClick: i } = e;
          return t.error
            ? (0, N.h)(
                "button",
                {
                  className:
                    "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-errorDetails",
                  "aria-label": t.error,
                  "data-microtip-position": "bottom",
                  "data-microtip-size": "medium",
                  onClick: i,
                  type: "button",
                },
                "?"
              )
            : null;
        };
      function t6(e) {
        let { file: t } = e;
        return (0, N.h)(
          "div",
          {
            className: "uppy-Dashboard-Item-fileInfo",
            "data-uppy-file-source": t.source,
          },
          (0, N.h)(
            "div",
            { className: "uppy-Dashboard-Item-fileName" },
            t5(e),
            (0, N.h)(t4, { file: e.file, onClick: () => alert(e.file.error) })
          ),
          (0, N.h)(
            "div",
            { className: "uppy-Dashboard-Item-status" },
            t2(e),
            t3(e),
            t8(e)
          ),
          (0, N.h)(tK, {
            file: e.file,
            i18n: e.i18n,
            toggleFileCard: e.toggleFileCard,
            metaFields: e.metaFields,
          })
        );
      }
      function t7(e) {
        let {
          file: t,
          uploadInProgressOrComplete: i,
          metaFields: r,
          canEditFile: n,
          i18n: s,
          onClick: o,
        } = e;
        return (!i && r && r.length > 0) || (!i && n(t))
          ? (0, N.h)(
              "button",
              {
                className:
                  "uppy-u-reset uppy-c-btn uppy-Dashboard-Item-action uppy-Dashboard-Item-action--edit",
                type: "button",
                "aria-label": s("editFileWithFilename", { file: t.meta.name }),
                title: s("editFileWithFilename", { file: t.meta.name }),
                onClick: () => o(),
              },
              (0, N.h)(
                "svg",
                {
                  "aria-hidden": "true",
                  focusable: "false",
                  className: "uppy-c-icon",
                  width: "14",
                  height: "14",
                  viewBox: "0 0 14 14",
                },
                (0, N.h)(
                  "g",
                  { fillRule: "evenodd" },
                  (0, N.h)("path", {
                    d: "M1.5 10.793h2.793A1 1 0 0 0 5 10.5L11.5 4a1 1 0 0 0 0-1.414L9.707.793a1 1 0 0 0-1.414 0l-6.5 6.5A1 1 0 0 0 1.5 8v2.793zm1-1V8L9 1.5l1.793 1.793-6.5 6.5H2.5z",
                    fillRule: "nonzero",
                  }),
                  (0, N.h)("rect", {
                    x: "1",
                    y: "12.293",
                    width: "11",
                    height: "1",
                    rx: ".5",
                  }),
                  (0, N.h)("path", {
                    fillRule: "nonzero",
                    d: "M6.793 2.5L9.5 5.207l.707-.707L7.5 1.793z",
                  })
                )
              )
            )
          : null;
      }
      function t9(e) {
        let { i18n: t, onClick: i, file: r } = e;
        return (0, N.h)(
          "button",
          {
            className:
              "uppy-u-reset uppy-Dashboard-Item-action uppy-Dashboard-Item-action--remove",
            type: "button",
            "aria-label": t("removeFile", { file: r.meta.name }),
            title: t("removeFile", { file: r.meta.name }),
            onClick: () => i(),
          },
          (0, N.h)(
            "svg",
            {
              "aria-hidden": "true",
              focusable: "false",
              className: "uppy-c-icon",
              width: "18",
              height: "18",
              viewBox: "0 0 18 18",
            },
            (0, N.h)("path", {
              d: "M9 0C4.034 0 0 4.034 0 9s4.034 9 9 9 9-4.034 9-9-4.034-9-9-9z",
            }),
            (0, N.h)("path", {
              fill: "#FFF",
              d: "M13 12.222l-.778.778L9 9.778 5.778 13 5 12.222 8.222 9 5 5.778 5.778 5 9 8.222 12.222 5l.778.778L9.778 9z",
            })
          )
        );
      }
      let ie = (e, t) => {
        var i, r;
        ((i = t.file.uploadURL),
        void 0 === (r = t.i18n("copyLinkToClipboardFallback")) &&
          (r = "Copy the URL below"),
        new Promise((e) => {
          let t = document.createElement("textarea");
          t.setAttribute("style", {
            position: "fixed",
            top: 0,
            left: 0,
            width: "2em",
            height: "2em",
            padding: 0,
            border: "none",
            outline: "none",
            boxShadow: "none",
            background: "transparent",
          }),
            (t.value = i),
            document.body.appendChild(t),
            t.select();
          let n = (n) => {
            document.body.removeChild(t), window.prompt(r, i), e();
          };
          try {
            if (!document.execCommand("copy"))
              return n("copy command unavailable");
            return document.body.removeChild(t), e();
          } catch (e) {
            return document.body.removeChild(t), n(e);
          }
        }))
          .then(() => {
            t.uppy.log("Link copied to clipboard."),
              t.uppy.info(t.i18n("copyLinkToClipboardSuccess"), "info", 3e3);
          })
          .catch(t.uppy.log)
          .then(() => e.target.focus({ preventScroll: !0 }));
      };
      function it(e) {
        let { i18n: t } = e;
        return (0, N.h)(
          "button",
          {
            className:
              "uppy-u-reset uppy-Dashboard-Item-action uppy-Dashboard-Item-action--copyLink",
            type: "button",
            "aria-label": t("copyLink"),
            title: t("copyLink"),
            onClick: (t) => ie(t, e),
          },
          (0, N.h)(
            "svg",
            {
              "aria-hidden": "true",
              focusable: "false",
              className: "uppy-c-icon",
              width: "14",
              height: "14",
              viewBox: "0 0 14 12",
            },
            (0, N.h)("path", {
              d: "M7.94 7.703a2.613 2.613 0 0 1-.626 2.681l-.852.851a2.597 2.597 0 0 1-1.849.766A2.616 2.616 0 0 1 2.764 7.54l.852-.852a2.596 2.596 0 0 1 2.69-.625L5.267 7.099a1.44 1.44 0 0 0-.833.407l-.852.851a1.458 1.458 0 0 0 1.03 2.486c.39 0 .755-.152 1.03-.426l.852-.852c.231-.231.363-.522.406-.824l1.04-1.038zm4.295-5.937A2.596 2.596 0 0 0 10.387 1c-.698 0-1.355.272-1.849.766l-.852.851a2.614 2.614 0 0 0-.624 2.688l1.036-1.036c.041-.304.173-.6.407-.833l.852-.852c.275-.275.64-.426 1.03-.426a1.458 1.458 0 0 1 1.03 2.486l-.852.851a1.442 1.442 0 0 1-.824.406l-1.04 1.04a2.596 2.596 0 0 0 2.683-.628l.851-.85a2.616 2.616 0 0 0 0-3.697zm-6.88 6.883a.577.577 0 0 0 .82 0l3.474-3.474a.579.579 0 1 0-.819-.82L5.355 7.83a.579.579 0 0 0 0 .819z",
            })
          )
        );
      }
      function ii(e) {
        let {
          uppy: t,
          file: i,
          uploadInProgressOrComplete: r,
          canEditFile: n,
          metaFields: s,
          showLinkToFileUploadResult: o,
          showRemoveButton: a,
          i18n: l,
          toggleFileCard: u,
          openFileEditor: h,
        } = e;
        return (0, N.h)(
          "div",
          { className: "uppy-Dashboard-Item-actionWrapper" },
          (0, N.h)(t7, {
            i18n: l,
            file: i,
            uploadInProgressOrComplete: r,
            canEditFile: n,
            metaFields: s,
            onClick: () => {
              s && s.length > 0 ? u(!0, i.id) : h(i);
            },
          }),
          o && i.uploadURL ? (0, N.h)(it, { file: i, uppy: t, i18n: l }) : null,
          a
            ? (0, N.h)(t9, {
                i18n: l,
                file: i,
                uppy: t,
                onClick: () => t.removeFile(i.id, "removed-by-user"),
              })
            : null
        );
      }
      class ir extends N.Component {
        componentDidMount() {
          let { file: e } = this.props;
          e.preview || this.props.handleRequestThumbnail(e);
        }
        shouldComponentUpdate(e) {
          return !tH(this.props, e);
        }
        componentDidUpdate() {
          let { file: e } = this.props;
          e.preview || this.props.handleRequestThumbnail(e);
        }
        componentWillUnmount() {
          let { file: e } = this.props;
          e.preview || this.props.handleCancelThumbnail(e);
        }
        render() {
          let { file: e } = this.props,
            t = e.progress.preprocess || e.progress.postprocess,
            i = e.progress.uploadComplete && !t && !e.error,
            r = e.progress.uploadStarted || t,
            n = (e.progress.uploadStarted && !e.progress.uploadComplete) || t,
            s = e.error || !1,
            { isGhost: o } = e,
            a = this.props.individualCancellation ? !i : !n && !i;
          i && this.props.showRemoveButtonAfterComplete && (a = !0);
          let l = B({
            "uppy-Dashboard-Item": !0,
            "is-inprogress": n && !this.props.recoveredState,
            "is-processing": t,
            "is-complete": i,
            "is-error": !!s,
            "is-resumable": this.props.resumableUploads,
            "is-noIndividualCancellation": !this.props.individualCancellation,
            "is-ghost": o,
          });
          return (0, N.h)(
            "div",
            { className: l, id: `uppy_${e.id}`, role: this.props.role },
            (0, N.h)(
              "div",
              { className: "uppy-Dashboard-Item-preview" },
              (0, N.h)(tZ, {
                file: e,
                showLinkToFileUploadResult:
                  this.props.showLinkToFileUploadResult,
                i18n: this.props.i18n,
                toggleFileCard: this.props.toggleFileCard,
                metaFields: this.props.metaFields,
              }),
              (0, N.h)(t0, {
                uppy: this.props.uppy,
                file: e,
                error: s,
                isUploaded: i,
                hideRetryButton: this.props.hideRetryButton,
                hideCancelButton: this.props.hideCancelButton,
                hidePauseResumeButton: this.props.hidePauseResumeButton,
                recoveredState: this.props.recoveredState,
                showRemoveButtonAfterComplete:
                  this.props.showRemoveButtonAfterComplete,
                resumableUploads: this.props.resumableUploads,
                individualCancellation: this.props.individualCancellation,
                i18n: this.props.i18n,
              })
            ),
            (0, N.h)(
              "div",
              { className: "uppy-Dashboard-Item-fileInfoAndButtons" },
              (0, N.h)(t6, {
                file: e,
                id: this.props.id,
                acquirers: this.props.acquirers,
                containerWidth: this.props.containerWidth,
                containerHeight: this.props.containerHeight,
                i18n: this.props.i18n,
                toggleAddFilesPanel: this.props.toggleAddFilesPanel,
                toggleFileCard: this.props.toggleFileCard,
                metaFields: this.props.metaFields,
                isSingleFile: this.props.isSingleFile,
              }),
              (0, N.h)(ii, {
                file: e,
                metaFields: this.props.metaFields,
                showLinkToFileUploadResult:
                  this.props.showLinkToFileUploadResult,
                showRemoveButton: a,
                canEditFile: this.props.canEditFile,
                uploadInProgressOrComplete: r,
                toggleFileCard: this.props.toggleFileCard,
                openFileEditor: this.props.openFileEditor,
                uppy: this.props.uppy,
                i18n: this.props.i18n,
              })
            )
          );
        }
      }
      function is(e) {
        let {
            id: t,
            error: i,
            i18n: r,
            uppy: n,
            files: s,
            acquirers: o,
            resumableUploads: a,
            hideRetryButton: l,
            hidePauseResumeButton: u,
            hideCancelButton: h,
            showLinkToFileUploadResult: d,
            showRemoveButtonAfterComplete: p,
            isWide: c,
            metaFields: f,
            isSingleFile: m,
            toggleFileCard: g,
            handleRequestThumbnail: y,
            handleCancelThumbnail: v,
            recoveredState: b,
            individualCancellation: w,
            itemsPerRow: P,
            openFileEditor: _,
            canEditFile: S,
            toggleAddFilesPanel: C,
            containerWidth: E,
            containerHeight: F,
          } = e,
          T = 1 === P ? 71 : 200,
          O = (0, eH.useMemo)(() => {
            let e = Object.keys(s);
            return (
              b && e.sort((e, t) => s[t].isGhost - s[e].isGhost),
              (function (e, t) {
                let i = [],
                  r = [];
                return (
                  e.forEach((e) => {
                    r.length < t ? r.push(e) : (i.push(r), (r = [e]));
                  }),
                  r.length && i.push(r),
                  i
                );
              })(e, P)
            );
          }, [s, P, b]),
          k = (e) =>
            (0, N.h)(
              "div",
              {
                class: "uppy-Dashboard-filesInner",
                role: "presentation",
                key: e[0],
              },
              e.map((e) =>
                (0, N.h)(ir, {
                  key: e,
                  uppy: n,
                  id: t,
                  error: i,
                  i18n: r,
                  acquirers: o,
                  resumableUploads: a,
                  individualCancellation: w,
                  hideRetryButton: l,
                  hidePauseResumeButton: u,
                  hideCancelButton: h,
                  showLinkToFileUploadResult: d,
                  showRemoveButtonAfterComplete: p,
                  isWide: c,
                  metaFields: f,
                  recoveredState: b,
                  isSingleFile: m,
                  containerWidth: E,
                  containerHeight: F,
                  toggleFileCard: g,
                  handleRequestThumbnail: y,
                  handleCancelThumbnail: v,
                  role: "listitem",
                  openFileEditor: _,
                  canEditFile: S,
                  toggleAddFilesPanel: C,
                  file: s[e],
                })
              )
            );
        return m
          ? (0, N.h)("div", { class: "uppy-Dashboard-files" }, k(O[0]))
          : (0, N.h)(e3, {
              class: "uppy-Dashboard-files",
              role: "list",
              data: O,
              renderRow: k,
              rowHeight: T,
            });
      }
      r = Symbol.for("uppy test: disable unused locale key warning");
      class io extends N.Component {
        constructor() {
          super(...arguments),
            (this.triggerFileInputClick = () => {
              this.fileInput.click();
            }),
            (this.triggerFolderInputClick = () => {
              this.folderInput.click();
            }),
            (this.triggerVideoCameraInputClick = () => {
              this.mobileVideoFileInput.click();
            }),
            (this.triggerPhotoCameraInputClick = () => {
              this.mobilePhotoFileInput.click();
            }),
            (this.onFileInputChange = (e) => {
              this.props.handleInputChange(e), (e.target.value = null);
            }),
            (this.renderHiddenInput = (e, t) =>
              (0, N.h)("input", {
                className: "uppy-Dashboard-input",
                hidden: !0,
                "aria-hidden": "true",
                tabIndex: -1,
                webkitdirectory: e,
                type: "file",
                name: "files[]",
                multiple: 1 !== this.props.maxNumberOfFiles,
                onChange: this.onFileInputChange,
                accept: this.props.allowedFileTypes,
                ref: t,
              })),
            (this.renderHiddenCameraInput = (e, t, i) =>
              (0, N.h)("input", {
                className: "uppy-Dashboard-input",
                hidden: !0,
                "aria-hidden": "true",
                tabIndex: -1,
                type: "file",
                name: `camera-${e}`,
                onChange: this.onFileInputChange,
                capture: t,
                accept: { photo: "image/*", video: "video/*" }[e],
                ref: i,
              })),
            (this.renderMyDeviceAcquirer = () =>
              (0, N.h)(
                "div",
                {
                  className: "uppy-DashboardTab",
                  role: "presentation",
                  "data-uppy-acquirer-id": "MyDevice",
                },
                (0, N.h)(
                  "button",
                  {
                    type: "button",
                    className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
                    role: "tab",
                    tabIndex: 0,
                    "data-uppy-super-focusable": !0,
                    onClick: this.triggerFileInputClick,
                  },
                  (0, N.h)(
                    "div",
                    { className: "uppy-DashboardTab-inner" },
                    (0, N.h)(
                      "svg",
                      {
                        className: "uppy-DashboardTab-iconMyDevice",
                        "aria-hidden": "true",
                        focusable: "false",
                        width: "32",
                        height: "32",
                        viewBox: "0 0 32 32",
                      },
                      (0, N.h)("path", {
                        d: "M8.45 22.087l-1.305-6.674h17.678l-1.572 6.674H8.45zm4.975-12.412l1.083 1.765a.823.823 0 00.715.386h7.951V13.5H8.587V9.675h4.838zM26.043 13.5h-1.195v-2.598c0-.463-.336-.75-.798-.75h-8.356l-1.082-1.766A.823.823 0 0013.897 8H7.728c-.462 0-.815.256-.815.718V13.5h-.956a.97.97 0 00-.746.37.972.972 0 00-.19.81l1.724 8.565c.095.44.484.755.933.755H24c.44 0 .824-.3.929-.727l2.043-8.568a.972.972 0 00-.176-.825.967.967 0 00-.753-.38z",
                        fill: "currentcolor",
                        "fill-rule": "evenodd",
                      })
                    )
                  ),
                  (0, N.h)(
                    "div",
                    { className: "uppy-DashboardTab-name" },
                    this.props.i18n("myDevice")
                  )
                )
              )),
            (this.renderPhotoCamera = () =>
              (0, N.h)(
                "div",
                {
                  className: "uppy-DashboardTab",
                  role: "presentation",
                  "data-uppy-acquirer-id": "MobilePhotoCamera",
                },
                (0, N.h)(
                  "button",
                  {
                    type: "button",
                    className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
                    role: "tab",
                    tabIndex: 0,
                    "data-uppy-super-focusable": !0,
                    onClick: this.triggerPhotoCameraInputClick,
                  },
                  (0, N.h)(
                    "div",
                    { className: "uppy-DashboardTab-inner" },
                    (0, N.h)(
                      "svg",
                      {
                        "aria-hidden": "true",
                        focusable: "false",
                        width: "32",
                        height: "32",
                        viewBox: "0 0 32 32",
                      },
                      (0, N.h)("path", {
                        d: "M23.5 9.5c1.417 0 2.5 1.083 2.5 2.5v9.167c0 1.416-1.083 2.5-2.5 2.5h-15c-1.417 0-2.5-1.084-2.5-2.5V12c0-1.417 1.083-2.5 2.5-2.5h2.917l1.416-2.167C13 7.167 13.25 7 13.5 7h5c.25 0 .5.167.667.333L20.583 9.5H23.5zM16 11.417a4.706 4.706 0 00-4.75 4.75 4.704 4.704 0 004.75 4.75 4.703 4.703 0 004.75-4.75c0-2.663-2.09-4.75-4.75-4.75zm0 7.825c-1.744 0-3.076-1.332-3.076-3.074 0-1.745 1.333-3.077 3.076-3.077 1.744 0 3.074 1.333 3.074 3.076s-1.33 3.075-3.074 3.075z",
                        fill: "#02B383",
                        "fill-rule": "nonzero",
                      })
                    )
                  ),
                  (0, N.h)(
                    "div",
                    { className: "uppy-DashboardTab-name" },
                    this.props.i18n("takePictureBtn")
                  )
                )
              )),
            (this.renderVideoCamera = () =>
              (0, N.h)(
                "div",
                {
                  className: "uppy-DashboardTab",
                  role: "presentation",
                  "data-uppy-acquirer-id": "MobileVideoCamera",
                },
                (0, N.h)(
                  "button",
                  {
                    type: "button",
                    className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
                    role: "tab",
                    tabIndex: 0,
                    "data-uppy-super-focusable": !0,
                    onClick: this.triggerVideoCameraInputClick,
                  },
                  (0, N.h)(
                    "div",
                    { className: "uppy-DashboardTab-inner" },
                    (0, N.h)(
                      "svg",
                      {
                        "aria-hidden": "true",
                        width: "32",
                        height: "32",
                        viewBox: "0 0 32 32",
                      },
                      (0, N.h)("path", {
                        fill: "#FF675E",
                        fillRule: "nonzero",
                        d: "m21.254 14.277 2.941-2.588c.797-.313 1.243.818 1.09 1.554-.01 2.094.02 4.189-.017 6.282-.126.915-1.145 1.08-1.58.34l-2.434-2.142c-.192.287-.504 1.305-.738.468-.104-1.293-.028-2.596-.05-3.894.047-.312.381.823.426 1.069.063-.384.206-.744.362-1.09zm-12.939-3.73c3.858.013 7.717-.025 11.574.02.912.129 1.492 1.237 1.351 2.217-.019 2.412.04 4.83-.03 7.239-.17 1.025-1.166 1.59-2.029 1.429-3.705-.012-7.41.025-11.114-.019-.913-.129-1.492-1.237-1.352-2.217.018-2.404-.036-4.813.029-7.214.136-.82.83-1.473 1.571-1.454z ",
                      })
                    )
                  ),
                  (0, N.h)(
                    "div",
                    { className: "uppy-DashboardTab-name" },
                    this.props.i18n("recordVideoBtn")
                  )
                )
              )),
            (this.renderBrowseButton = (e, t) => {
              let i = this.props.acquirers.length;
              return (0, N.h)(
                "button",
                {
                  type: "button",
                  className: "uppy-u-reset uppy-c-btn uppy-Dashboard-browse",
                  onClick: t,
                  "data-uppy-super-focusable": 0 === i,
                },
                e
              );
            }),
            (this.renderDropPasteBrowseTagline = (e) => {
              let t = this.renderBrowseButton(
                  this.props.i18n("browseFiles"),
                  this.triggerFileInputClick
                ),
                i = this.renderBrowseButton(
                  this.props.i18n("browseFolders"),
                  this.triggerFolderInputClick
                ),
                r = this.props.fileManagerSelectionType,
                n = r.charAt(0).toUpperCase() + r.slice(1);
              return (0, N.h)(
                "div",
                { class: "uppy-Dashboard-AddFiles-title" },
                this.props.disableLocalFiles
                  ? this.props.i18n("importFiles")
                  : e > 0
                  ? this.props.i18nArray(`dropPasteImport${n}`, {
                      browseFiles: t,
                      browseFolders: i,
                      browse: t,
                    })
                  : this.props.i18nArray(`dropPaste${n}`, {
                      browseFiles: t,
                      browseFolders: i,
                      browse: t,
                    })
              );
            }),
            (this.renderAcquirer = (e) => {
              var t;
              return (0, N.h)(
                "div",
                {
                  className: "uppy-DashboardTab",
                  role: "presentation",
                  "data-uppy-acquirer-id": e.id,
                },
                (0, N.h)(
                  "button",
                  {
                    type: "button",
                    className: "uppy-u-reset uppy-c-btn uppy-DashboardTab-btn",
                    role: "tab",
                    tabIndex: 0,
                    "data-cy": e.id,
                    "aria-controls": `uppy-DashboardContent-panel--${e.id}`,
                    "aria-selected":
                      (null == (t = this.props.activePickerPanel)
                        ? void 0
                        : t.id) === e.id,
                    "data-uppy-super-focusable": !0,
                    onClick: () => this.props.showPanel(e.id),
                  },
                  (0, N.h)(
                    "div",
                    { className: "uppy-DashboardTab-inner" },
                    e.icon()
                  ),
                  (0, N.h)(
                    "div",
                    { className: "uppy-DashboardTab-name" },
                    e.name
                  )
                )
              );
            }),
            (this.renderAcquirers = (e) => {
              let t = [...e],
                i = t.splice(e.length - 2, e.length);
              return (0, N.h)(
                N.Fragment,
                null,
                t.map((e) => this.renderAcquirer(e)),
                (0, N.h)(
                  "span",
                  { role: "presentation", style: { "white-space": "nowrap" } },
                  i.map((e) => this.renderAcquirer(e))
                )
              );
            }),
            (this.renderSourcesList = (e, t) => {
              let {
                  showNativePhotoCameraButton: i,
                  showNativeVideoCameraButton: r,
                } = this.props,
                n = [],
                s = "myDevice";
              t || n.push({ key: s, elements: this.renderMyDeviceAcquirer() }),
                i &&
                  n.push({
                    key: "nativePhotoCameraButton",
                    elements: this.renderPhotoCamera(),
                  }),
                r &&
                  n.push({
                    key: "nativePhotoCameraButton",
                    elements: this.renderVideoCamera(),
                  }),
                n.push(
                  ...e.map((e) => ({
                    key: e.id,
                    elements: this.renderAcquirer(e),
                  }))
                ),
                1 === n.length && n[0].key === s && (n = []);
              let o = [...n],
                a = o.splice(n.length - 2, n.length),
                l = (e) =>
                  e.map((e) => {
                    let { key: t, elements: i } = e;
                    return (0, N.h)(N.Fragment, { key: t }, i);
                  });
              return (0, N.h)(
                N.Fragment,
                null,
                this.renderDropPasteBrowseTagline(n.length),
                (0, N.h)(
                  "div",
                  {
                    className: "uppy-Dashboard-AddFiles-list",
                    role: "tablist",
                  },
                  l(o),
                  (0, N.h)(
                    "span",
                    {
                      role: "presentation",
                      style: { "white-space": "nowrap" },
                    },
                    l(a)
                  )
                )
              );
            });
        }
        [r]() {
          this.props.i18nArray("dropPasteBoth"),
            this.props.i18nArray("dropPasteFiles"),
            this.props.i18nArray("dropPasteFolders"),
            this.props.i18nArray("dropPasteImportBoth"),
            this.props.i18nArray("dropPasteImportFiles"),
            this.props.i18nArray("dropPasteImportFolders");
        }
        renderPoweredByUppy() {
          let { i18nArray: e } = this.props,
            t = e("poweredBy", {
              uppy: (0, N.h)(
                "span",
                null,
                (0, N.h)(
                  "svg",
                  {
                    "aria-hidden": "true",
                    focusable: "false",
                    className: "uppy-c-icon uppy-Dashboard-poweredByIcon",
                    width: "11",
                    height: "11",
                    viewBox: "0 0 11 11",
                  },
                  (0, N.h)("path", {
                    d: "M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z",
                    fillRule: "evenodd",
                  })
                ),
                (0, N.h)(
                  "span",
                  { className: "uppy-Dashboard-poweredByUppy" },
                  "Uppy"
                )
              ),
            });
          return (0, N.h)(
            "a",
            {
              tabIndex: -1,
              href: "https://uppy.io",
              rel: "noreferrer noopener",
              target: "_blank",
              className: "uppy-Dashboard-poweredBy",
            },
            t
          );
        }
        render() {
          let {
            showNativePhotoCameraButton: e,
            showNativeVideoCameraButton: t,
            nativeCameraFacingMode: i,
          } = this.props;
          return (0, N.h)(
            "div",
            { className: "uppy-Dashboard-AddFiles" },
            this.renderHiddenInput(!1, (e) => {
              this.fileInput = e;
            }),
            this.renderHiddenInput(!0, (e) => {
              this.folderInput = e;
            }),
            e &&
              this.renderHiddenCameraInput("photo", i, (e) => {
                this.mobilePhotoFileInput = e;
              }),
            t &&
              this.renderHiddenCameraInput("video", i, (e) => {
                this.mobileVideoFileInput = e;
              }),
            this.renderSourcesList(
              this.props.acquirers,
              this.props.disableLocalFiles
            ),
            (0, N.h)(
              "div",
              { className: "uppy-Dashboard-AddFiles-info" },
              this.props.note &&
                (0, N.h)(
                  "div",
                  { className: "uppy-Dashboard-note" },
                  this.props.note
                ),
              this.props.proudlyDisplayPoweredByUppy &&
                this.renderPoweredByUppy(this.props)
            )
          );
        }
      }
      var ia = (e) =>
          (0, N.h)(
            "div",
            {
              className: B("uppy-Dashboard-AddFilesPanel", e.className),
              "data-uppy-panelType": "AddFiles",
              "aria-hidden": !e.showAddFilesPanel,
            },
            (0, N.h)(
              "div",
              { className: "uppy-DashboardContent-bar" },
              (0, N.h)(
                "div",
                {
                  className: "uppy-DashboardContent-title",
                  role: "heading",
                  "aria-level": "1",
                },
                e.i18n("addingMoreFiles")
              ),
              (0, N.h)(
                "button",
                {
                  className: "uppy-DashboardContent-back",
                  type: "button",
                  onClick: () => e.toggleAddFilesPanel(!1),
                },
                e.i18n("back")
              )
            ),
            (0, N.h)(io, e)
          ),
        il = function (e) {
          let { tagName: t } = e.target;
          if ("INPUT" === t || "TEXTAREA" === t) {
            e.stopPropagation();
            return;
          }
          e.preventDefault(), e.stopPropagation();
        },
        iu = function (e) {
          let {
            activePickerPanel: t,
            className: i,
            hideAllPanels: r,
            i18n: n,
            state: s,
            uppy: o,
          } = e;
          return (0, N.h)(
            "div",
            {
              className: B("uppy-DashboardContent-panel", i),
              role: "tabpanel",
              "data-uppy-panelType": "PickerPanel",
              id: `uppy-DashboardContent-panel--${t.id}`,
              onDragOver: il,
              onDragLeave: il,
              onDrop: il,
              onPaste: il,
            },
            (0, N.h)(
              "div",
              { className: "uppy-DashboardContent-bar" },
              (0, N.h)(
                "div",
                {
                  className: "uppy-DashboardContent-title",
                  role: "heading",
                  "aria-level": "1",
                },
                n("importFrom", { name: t.name })
              ),
              (0, N.h)(
                "button",
                {
                  className: "uppy-DashboardContent-back",
                  type: "button",
                  onClick: r,
                },
                n("cancel")
              )
            ),
            (0, N.h)(
              "div",
              { className: "uppy-DashboardContent-panelBody" },
              o.getPlugin(t.id).render(s)
            )
          );
        },
        ih = function (e) {
          let t = e.files[e.fileCardFor];
          return (0, N.h)(
            "div",
            {
              className: B("uppy-DashboardContent-panel", e.className),
              role: "tabpanel",
              "data-uppy-panelType": "FileEditor",
              id: "uppy-DashboardContent-panel--editor",
            },
            (0, N.h)(
              "div",
              { className: "uppy-DashboardContent-bar" },
              (0, N.h)(
                "div",
                {
                  className: "uppy-DashboardContent-title",
                  role: "heading",
                  "aria-level": "1",
                },
                e.i18nArray("editing", {
                  file: (0, N.h)(
                    "span",
                    { className: "uppy-DashboardContent-titleFile" },
                    t.meta ? t.meta.name : t.name
                  ),
                })
              ),
              (0, N.h)(
                "button",
                {
                  className: "uppy-DashboardContent-back",
                  type: "button",
                  onClick: () => {
                    e.uppy.emit("file-editor:cancel", t), e.closeFileEditor();
                  },
                },
                e.i18n("cancel")
              ),
              (0, N.h)(
                "button",
                {
                  className: "uppy-DashboardContent-save",
                  type: "button",
                  onClick: e.saveFileEditor,
                },
                e.i18n("save")
              )
            ),
            (0, N.h)(
              "div",
              { className: "uppy-DashboardContent-panelBody" },
              e.editors.map((t) => e.uppy.getPlugin(t.id).render(e.state))
            )
          );
        };
      let id = {
        STATE_ERROR: "error",
        STATE_WAITING: "waiting",
        STATE_PREPROCESSING: "preprocessing",
        STATE_UPLOADING: "uploading",
        STATE_POSTPROCESSING: "postprocessing",
        STATE_COMPLETE: "complete",
        STATE_PAUSED: "paused",
      };
      function ip(e) {
        let {
          files: t,
          i18n: i,
          isAllComplete: r,
          isAllErrored: n,
          isAllPaused: s,
          inProgressNotPausedFiles: o,
          newFiles: a,
          processingFiles: l,
        } = e;
        switch (
          (function (e, t, i, r) {
            if ((void 0 === r && (r = {}), e)) return id.STATE_ERROR;
            if (t) return id.STATE_COMPLETE;
            if (i) return id.STATE_PAUSED;
            let n = id.STATE_WAITING,
              s = Object.keys(r);
            for (let e = 0; e < s.length; e++) {
              let { progress: t } = r[s[e]];
              if (t.uploadStarted && !t.uploadComplete)
                return id.STATE_UPLOADING;
              t.preprocess &&
                n !== id.STATE_UPLOADING &&
                (n = id.STATE_PREPROCESSING),
                t.postprocess &&
                  n !== id.STATE_UPLOADING &&
                  n !== id.STATE_PREPROCESSING &&
                  (n = id.STATE_POSTPROCESSING);
            }
            return n;
          })(n, r, s, t)
        ) {
          case "uploading":
            return i("uploadingXFiles", { smart_count: o.length });
          case "preprocessing":
          case "postprocessing":
            return i("processingXFiles", { smart_count: l.length });
          case "paused":
            return i("uploadPaused");
          case "waiting":
            return i("xFilesSelected", { smart_count: a.length });
          case "complete":
            return i("uploadComplete");
          case "error":
            return i("error");
        }
      }
      var ic = function (e) {
        let {
            i18n: t,
            isAllComplete: i,
            hideCancelButton: r,
            maxNumberOfFiles: n,
            toggleAddFilesPanel: s,
            uppy: o,
          } = e,
          { allowNewUpload: a } = e;
        return (
          a && n && (a = e.totalFileCount < e.maxNumberOfFiles),
          (0, N.h)(
            "div",
            { className: "uppy-DashboardContent-bar" },
            i || r
              ? (0, N.h)("div", null)
              : (0, N.h)(
                  "button",
                  {
                    className: "uppy-DashboardContent-back",
                    type: "button",
                    onClick: () => o.cancelAll(),
                  },
                  t("cancel")
                ),
            (0, N.h)(
              "div",
              {
                className: "uppy-DashboardContent-title",
                role: "heading",
                "aria-level": "1",
              },
              (0, N.h)(ip, e)
            ),
            a
              ? (0, N.h)(
                  "button",
                  {
                    className: "uppy-DashboardContent-addMore",
                    type: "button",
                    "aria-label": t("addMoreFiles"),
                    title: t("addMoreFiles"),
                    onClick: () => s(!0),
                  },
                  (0, N.h)(
                    "svg",
                    {
                      "aria-hidden": "true",
                      focusable: "false",
                      className: "uppy-c-icon",
                      width: "15",
                      height: "15",
                      viewBox: "0 0 15 15",
                    },
                    (0, N.h)("path", {
                      d: "M8 6.5h6a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8v6a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V8h-6a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h6v-6A.5.5 0 0 1 7 0h.5a.5.5 0 0 1 .5.5v6z",
                    })
                  ),
                  (0, N.h)(
                    "span",
                    { className: "uppy-DashboardContent-addMoreCaption" },
                    t("addMore")
                  )
                )
              : (0, N.h)("div", null)
          )
        );
      };
      function im(e) {
        let {
            computedMetaFields: t,
            requiredMetaFields: i,
            updateMeta: r,
            form: n,
            formState: s,
          } = e,
          o = {
            text: "uppy-u-reset uppy-c-textInput uppy-Dashboard-FileCard-input",
          };
        return t.map((e) => {
          let t = `uppy-Dashboard-FileCard-input-${e.id}`,
            a = i.includes(e.id);
          return (0, N.h)(
            "fieldset",
            { key: e.id, className: "uppy-Dashboard-FileCard-fieldset" },
            (0, N.h)(
              "label",
              { className: "uppy-Dashboard-FileCard-label", htmlFor: t },
              e.name
            ),
            void 0 !== e.render
              ? e.render(
                  {
                    value: s[e.id],
                    onChange: (t) => r(t, e.id),
                    fieldCSSClasses: o,
                    required: a,
                    form: n.id,
                  },
                  N.h
                )
              : (0, N.h)("input", {
                  className: o.text,
                  id: t,
                  form: n.id,
                  type: e.type || "text",
                  required: a,
                  value: s[e.id],
                  placeholder: e.placeholder,
                  onInput: (t) => r(t.target.value, e.id),
                  "data-uppy-super-focusable": !0,
                })
          );
        });
      }
      function ig(e) {
        var t;
        let {
            files: i,
            fileCardFor: r,
            toggleFileCard: n,
            saveFileCard: s,
            metaFields: o,
            requiredMetaFields: a,
            openFileEditor: l,
            i18n: u,
            i18nArray: h,
            className: d,
            canEditFile: p,
          } = e,
          c = i[r],
          f = null != (t = "function" == typeof o ? o(i[r]) : o) ? t : [],
          m = p(c),
          g = {};
        f.forEach((e) => {
          var t;
          g[e.id] = null != (t = c.meta[e.id]) ? t : "";
        });
        let [y, v] = (0, eH.useState)(g),
          b = (0, eH.useCallback)(
            (e) => {
              e.preventDefault(), s(y, r);
            },
            [s, y, r]
          ),
          w = () => {
            n(!1);
          },
          [P] = (0, eH.useState)(() => {
            let e = document.createElement("form");
            return e.setAttribute("tabindex", "-1"), (e.id = (0, e8.x)()), e;
          });
        return (
          (0, eH.useEffect)(
            () => (
              document.body.appendChild(P),
              P.addEventListener("submit", b),
              () => {
                P.removeEventListener("submit", b),
                  document.body.removeChild(P);
              }
            ),
            [P, b]
          ),
          (0, N.h)(
            "div",
            {
              className: B("uppy-Dashboard-FileCard", d),
              "data-uppy-panelType": "FileCard",
              onDragOver: il,
              onDragLeave: il,
              onDrop: il,
              onPaste: il,
            },
            (0, N.h)(
              "div",
              { className: "uppy-DashboardContent-bar" },
              (0, N.h)(
                "div",
                {
                  className: "uppy-DashboardContent-title",
                  role: "heading",
                  "aria-level": "1",
                },
                h("editing", {
                  file: (0, N.h)(
                    "span",
                    { className: "uppy-DashboardContent-titleFile" },
                    c.meta ? c.meta.name : c.name
                  ),
                })
              ),
              (0, N.h)(
                "button",
                {
                  className: "uppy-DashboardContent-back",
                  type: "button",
                  form: P.id,
                  title: u("finishEditingFile"),
                  onClick: w,
                },
                u("cancel")
              )
            ),
            (0, N.h)(
              "div",
              { className: "uppy-Dashboard-FileCard-inner" },
              (0, N.h)(
                "div",
                {
                  className: "uppy-Dashboard-FileCard-preview",
                  style: { backgroundColor: tV(c.type).color },
                },
                (0, N.h)(tW, { file: c }),
                m &&
                  (0, N.h)(
                    "button",
                    {
                      type: "button",
                      className:
                        "uppy-u-reset uppy-c-btn uppy-Dashboard-FileCard-edit",
                      onClick: (e) => {
                        b(e), l(c);
                      },
                    },
                    u("editImage")
                  )
              ),
              (0, N.h)(
                "div",
                { className: "uppy-Dashboard-FileCard-info" },
                (0, N.h)(im, {
                  computedMetaFields: f,
                  requiredMetaFields: a,
                  updateMeta: (e, t) => {
                    v({ ...y, [t]: e });
                  },
                  form: P,
                  formState: y,
                })
              ),
              (0, N.h)(
                "div",
                { className: "uppy-Dashboard-FileCard-actions" },
                (0, N.h)(
                  "button",
                  {
                    className:
                      "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Dashboard-FileCard-actionsBtn",
                    type: "submit",
                    form: P.id,
                  },
                  u("saveChanges")
                ),
                (0, N.h)(
                  "button",
                  {
                    className:
                      "uppy-u-reset uppy-c-btn uppy-c-btn-link uppy-Dashboard-FileCard-actionsBtn",
                    type: "button",
                    onClick: w,
                    form: P.id,
                  },
                  u("cancel")
                )
              )
            )
          )
        );
      }
      let iy = "uppy-transition-slideDownUp";
      var iv = function (e) {
        let { children: t } = e,
          [i, r] = (0, eH.useState)(null),
          [n, s] = (0, eH.useState)(""),
          o = (0, eH.useRef)(),
          a = (0, eH.useRef)(),
          l = (0, eH.useRef)(),
          u = () => {
            s(`${iy}-enter`),
              cancelAnimationFrame(l.current),
              clearTimeout(a.current),
              (a.current = void 0),
              (l.current = requestAnimationFrame(() => {
                s(`${iy}-enter ${iy}-enter-active`),
                  (o.current = setTimeout(() => {
                    s("");
                  }, 250));
              }));
          },
          h = () => {
            s(`${iy}-leave`),
              cancelAnimationFrame(l.current),
              clearTimeout(o.current),
              (o.current = void 0),
              (l.current = requestAnimationFrame(() => {
                s(`${iy}-leave ${iy}-leave-active`),
                  (a.current = setTimeout(() => {
                    r(null), s("");
                  }, 250));
              }));
          };
        return ((0, eH.useEffect)(() => {
          let e = (0, N.toChildArray)(t)[0];
          i !== e && (e && !i ? u() : !i || e || a.current || h(), r(e));
        }, [t, i]),
        (0, eH.useEffect)(
          () => () => {
            clearTimeout(o.current),
              clearTimeout(a.current),
              cancelAnimationFrame(l.current);
          },
          []
        ),
        i)
          ? (0, N.cloneElement)(i, { className: B(n, i.props.className) })
          : null;
      };
      function ib() {
        return (ib = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i)
                  Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var iw = {
        strings: {
          closeModal: "Close Modal",
          addMoreFiles: "Add more files",
          addingMoreFiles: "Adding more files",
          importFrom: "Import from %{name}",
          dashboardWindowTitle: "Uppy Dashboard Window (Press escape to close)",
          dashboardTitle: "Uppy Dashboard",
          copyLinkToClipboardSuccess: "Link copied to clipboard.",
          copyLinkToClipboardFallback: "Copy the URL below",
          copyLink: "Copy link",
          back: "Back",
          removeFile: "Remove file",
          editFile: "Edit file",
          editImage: "Edit image",
          editing: "Editing %{file}",
          error: "Error",
          finishEditingFile: "Finish editing file",
          saveChanges: "Save changes",
          myDevice: "My Device",
          dropHint: "Drop your files here",
          uploadComplete: "Upload complete",
          uploadPaused: "Upload paused",
          resumeUpload: "Resume upload",
          pauseUpload: "Pause upload",
          retryUpload: "Retry upload",
          cancelUpload: "Cancel upload",
          xFilesSelected: {
            0: "%{smart_count} file selected",
            1: "%{smart_count} files selected",
          },
          uploadingXFiles: {
            0: "Uploading %{smart_count} file",
            1: "Uploading %{smart_count} files",
          },
          processingXFiles: {
            0: "Processing %{smart_count} file",
            1: "Processing %{smart_count} files",
          },
          poweredBy: "Powered by %{uppy}",
          addMore: "Add more",
          editFileWithFilename: "Edit file %{file}",
          save: "Save",
          cancel: "Cancel",
          dropPasteFiles: "Drop files here or %{browseFiles}",
          dropPasteFolders: "Drop files here or %{browseFolders}",
          dropPasteBoth: "Drop files here, %{browseFiles} or %{browseFolders}",
          dropPasteImportFiles:
            "Drop files here, %{browseFiles} or import from:",
          dropPasteImportFolders:
            "Drop files here, %{browseFolders} or import from:",
          dropPasteImportBoth:
            "Drop files here, %{browseFiles}, %{browseFolders} or import from:",
          importFiles: "Import files from:",
          browseFiles: "browse files",
          browseFolders: "browse folders",
          recoveredXFiles: {
            0: "We could not fully recover 1 file. Please re-select it and resume the upload.",
            1: "We could not fully recover %{smart_count} files. Please re-select them and resume the upload.",
          },
          recoveredAllFiles:
            "We restored all files. You can now resume the upload.",
          sessionRestored: "Session restored",
          reSelect: "Re-select",
          missingRequiredMetaFields: {
            0: "Missing required meta field: %{fields}.",
            1: "Missing required meta fields: %{fields}.",
          },
          takePictureBtn: "Take Picture",
          recordVideoBtn: "Record Video",
        },
      };
      function iP(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e, t))
          throw TypeError("attempted to use private field on non-instance");
        return e;
      }
      var i_ = 0;
      function iS(e) {
        return "__private_" + i_++ + "_" + e;
      }
      let iC = tN.default || tN;
      function iE() {
        let e = {};
        return (
          (e.promise = new Promise((t, i) => {
            (e.resolve = t), (e.reject = i);
          })),
          e
        );
      }
      let iF = {
        target: "body",
        metaFields: [],
        inline: !1,
        width: 750,
        height: 550,
        thumbnailWidth: 280,
        thumbnailType: "image/jpeg",
        waitForThumbnailsBeforeUpload: !1,
        defaultPickerIcon: tg,
        showLinkToFileUploadResult: !1,
        showProgressDetails: !1,
        hideUploadButton: !1,
        hideCancelButton: !1,
        hideRetryButton: !1,
        hidePauseResumeButton: !1,
        hideProgressAfterFinish: !1,
        note: null,
        closeModalOnClickOutside: !1,
        closeAfterFinish: !1,
        singleFileFullScreen: !0,
        disableStatusBar: !1,
        disableInformer: !1,
        disableThumbnailGenerator: !1,
        disablePageScrollWhenModalOpen: !0,
        animateOpenClose: !0,
        fileManagerSelectionType: "files",
        proudlyDisplayPoweredByUppy: !0,
        showSelectedFiles: !0,
        showRemoveButtonAfterComplete: !1,
        browserBackButtonClose: !1,
        showNativePhotoCameraButton: !1,
        showNativeVideoCameraButton: !1,
        theme: "light",
        autoOpen: null,
        autoOpenFileEditor: !1,
        disabled: !1,
        disableLocalFiles: !1,
        doneButtonHandler: null,
        onRequestCloseModal: null,
      };
      var iT = iS("disabledNodes"),
        iO = iS("generateLargeThumbnailIfSingleFile"),
        ik = iS("openFileEditorWhenFilesAdded"),
        ix = iS("attachRenderFunctionToTarget"),
        iA = iS("isTargetSupported"),
        iD = iS("getAcquirers"),
        iU = iS("getProgressIndicators"),
        iR = iS("getEditors"),
        iI = iS("addSpecifiedPluginsFromOptions"),
        iM = iS("autoDiscoverPlugins"),
        iN = iS("addSupportedPluginIfNoTarget");
      class iB extends U.Z {
        constructor(e, t) {
          var i, r;
          let n;
          super(e, {
            ...iF,
            ...t,
            autoOpen: t
              ? void 0 === t.autoOpen
                ? t.autoOpenFileEditor
                  ? "imageEditor"
                  : null
                : t.autoOpen
              : null,
          }),
            Object.defineProperty(this, iT, { writable: !0, value: void 0 }),
            (this.modalName = `uppy-Dashboard-${(0, e8.x)()}`),
            (this.superFocus =
              ((n = !1),
              t$((e, t) => {
                let i = tL(e, t),
                  r = i.contains(document.activeElement);
                if (r && n) return;
                let s = i.querySelector("[data-uppy-super-focusable]");
                if (!r || s) {
                  if (s) s.focus({ preventScroll: !0 }), (n = !0);
                  else {
                    let e = i.querySelector(tB);
                    null == e || e.focus({ preventScroll: !0 }), (n = !1);
                  }
                }
              }, 260))),
            (this.ifFocusedOnUppyRecently = !1),
            (this.removeTarget = (e) => {
              let t = this.getPluginState().targets.filter(
                (t) => t.id !== e.id
              );
              this.setPluginState({ targets: t });
            }),
            (this.addTarget = (e) => {
              let t = e.id || e.constructor.name,
                i = e.title || t,
                r = e.type;
              if (
                "acquirer" !== r &&
                "progressindicator" !== r &&
                "editor" !== r
              )
                return (
                  this.uppy.log(
                    "Dashboard: can only be targeted by plugins of types: acquirer, progressindicator, editor",
                    "error"
                  ),
                  null
                );
              let n = this.getPluginState().targets.slice();
              return (
                n.push({ id: t, name: i, type: r }),
                this.setPluginState({ targets: n }),
                this.el
              );
            }),
            (this.hideAllPanels = () => {
              var e;
              let t = this.getPluginState(),
                i = {
                  activePickerPanel: void 0,
                  showAddFilesPanel: !1,
                  activeOverlayType: null,
                  fileCardFor: null,
                  showFileEditor: !1,
                };
              (t.activePickerPanel !== i.activePickerPanel ||
                t.showAddFilesPanel !== i.showAddFilesPanel ||
                t.showFileEditor !== i.showFileEditor ||
                t.activeOverlayType !== i.activeOverlayType) &&
                (this.setPluginState(i),
                this.uppy.emit(
                  "dashboard:close-panel",
                  null == (e = t.activePickerPanel) ? void 0 : e.id
                ));
            }),
            (this.showPanel = (e) => {
              let { targets: t } = this.getPluginState(),
                i = t.find((t) => "acquirer" === t.type && t.id === e);
              this.setPluginState({
                activePickerPanel: i,
                activeOverlayType: "PickerPanel",
              }),
                this.uppy.emit("dashboard:show-panel", e);
            }),
            (this.canEditFile = (e) => {
              let { targets: t } = this.getPluginState();
              return iP(this, iR)
                [iR](t)
                .some((t) => this.uppy.getPlugin(t.id).canEditFile(e));
            }),
            (this.openFileEditor = (e) => {
              let { targets: t } = this.getPluginState(),
                i = iP(this, iR)[iR](t);
              this.setPluginState({
                showFileEditor: !0,
                fileCardFor: e.id || null,
                activeOverlayType: "FileEditor",
              }),
                i.forEach((t) => {
                  this.uppy.getPlugin(t.id).selectFile(e);
                });
            }),
            (this.closeFileEditor = () => {
              let { metaFields: e } = this.getPluginState();
              e && e.length > 0
                ? this.setPluginState({
                    showFileEditor: !1,
                    activeOverlayType: "FileCard",
                  })
                : this.setPluginState({
                    showFileEditor: !1,
                    fileCardFor: null,
                    activeOverlayType: "AddFiles",
                  });
            }),
            (this.saveFileEditor = () => {
              let { targets: e } = this.getPluginState();
              iP(this, iR)
                [iR](e)
                .forEach((e) => {
                  this.uppy.getPlugin(e.id).save();
                }),
                this.closeFileEditor();
            }),
            (this.openModal = () => {
              let { promise: e, resolve: t } = iE();
              if (
                ((this.savedScrollPosition = window.pageYOffset),
                (this.savedActiveElement = document.activeElement),
                this.opts.disablePageScrollWhenModalOpen &&
                  document.body.classList.add("uppy-Dashboard-isFixed"),
                this.opts.animateOpenClose && this.getPluginState().isClosing)
              ) {
                let e = () => {
                  this.setPluginState({ isHidden: !1 }),
                    this.el.removeEventListener("animationend", e, !1),
                    t();
                };
                this.el.addEventListener("animationend", e, !1);
              } else this.setPluginState({ isHidden: !1 }), t();
              return (
                this.opts.browserBackButtonClose && this.updateBrowserHistory(),
                document.addEventListener("keydown", this.handleKeyDownInModal),
                this.uppy.emit("dashboard:modal-open"),
                e
              );
            }),
            (this.closeModal = (e) => {
              var t, i;
              let r = null == (t = null == e ? void 0 : e.manualClose) || t,
                { isHidden: n, isClosing: s } = this.getPluginState();
              if (n || s) return;
              let { promise: o, resolve: a } = iE();
              if (
                (this.opts.disablePageScrollWhenModalOpen &&
                  document.body.classList.remove("uppy-Dashboard-isFixed"),
                this.opts.animateOpenClose)
              ) {
                this.setPluginState({ isClosing: !0 });
                let e = () => {
                  this.setPluginState({ isHidden: !0, isClosing: !1 }),
                    this.superFocus.cancel(),
                    this.savedActiveElement.focus(),
                    this.el.removeEventListener("animationend", e, !1),
                    a();
                };
                this.el.addEventListener("animationend", e, !1);
              } else
                this.setPluginState({ isHidden: !0 }),
                  this.superFocus.cancel(),
                  this.savedActiveElement.focus(),
                  a();
              return (
                document.removeEventListener(
                  "keydown",
                  this.handleKeyDownInModal
                ),
                r &&
                  this.opts.browserBackButtonClose &&
                  null != (i = history.state) &&
                  i[this.modalName] &&
                  history.back(),
                this.uppy.emit("dashboard:modal-closed"),
                o
              );
            }),
            (this.isModalOpen = () => !this.getPluginState().isHidden),
            (this.requestCloseModal = () =>
              this.opts.onRequestCloseModal
                ? this.opts.onRequestCloseModal()
                : this.closeModal()),
            (this.setDarkModeCapability = (e) => {
              let { capabilities: t } = this.uppy.getState();
              this.uppy.setState({ capabilities: { ...t, darkMode: e } });
            }),
            (this.handleSystemDarkModeChange = (e) => {
              let t = e.matches;
              this.uppy.log(`[Dashboard] Dark mode is ${t ? "on" : "off"}`),
                this.setDarkModeCapability(t);
            }),
            (this.toggleFileCard = (e, t) => {
              let i = this.uppy.getFile(t);
              e
                ? this.uppy.emit("dashboard:file-edit-start", i)
                : this.uppy.emit("dashboard:file-edit-complete", i),
                this.setPluginState({
                  fileCardFor: e ? t : null,
                  activeOverlayType: e ? "FileCard" : null,
                });
            }),
            (this.toggleAddFilesPanel = (e) => {
              this.setPluginState({
                showAddFilesPanel: e,
                activeOverlayType: e ? "AddFiles" : null,
              });
            }),
            (this.addFiles = (e) => {
              let t = e.map((e) => ({
                source: this.id,
                name: e.name,
                type: e.type,
                data: e,
                meta: {
                  relativePath: e.relativePath || e.webkitRelativePath || null,
                },
              }));
              try {
                this.uppy.addFiles(t);
              } catch (e) {
                this.uppy.log(e);
              }
            }),
            (this.startListeningToResize = () => {
              (this.resizeObserver = new ResizeObserver((e) => {
                let { width: t, height: i } = e[0].contentRect;
                this.setPluginState({
                  containerWidth: t,
                  containerHeight: i,
                  areInsidesReadyToBeVisible: !0,
                });
              })),
                this.resizeObserver.observe(
                  this.el.querySelector(".uppy-Dashboard-inner")
                ),
                (this.makeDashboardInsidesVisibleAnywayTimeout = setTimeout(
                  () => {
                    let e = this.getPluginState(),
                      t = !this.opts.inline && e.isHidden;
                    e.areInsidesReadyToBeVisible ||
                      t ||
                      (this.uppy.log(
                        "[Dashboard] resize event didn’t fire on time: defaulted to mobile layout",
                        "warning"
                      ),
                      this.setPluginState({ areInsidesReadyToBeVisible: !0 }));
                  },
                  1e3
                ));
            }),
            (this.stopListeningToResize = () => {
              this.resizeObserver.disconnect(),
                clearTimeout(this.makeDashboardInsidesVisibleAnywayTimeout);
            }),
            (this.recordIfFocusedOnUppyRecently = (e) => {
              this.el.contains(e.target)
                ? (this.ifFocusedOnUppyRecently = !0)
                : ((this.ifFocusedOnUppyRecently = !1),
                  this.superFocus.cancel());
            }),
            (this.disableInteractiveElements = (e) => {
              var t;
              let i =
                null != (t = iP(this, iT)[iT])
                  ? t
                  : ek(
                      this.el.querySelectorAll([
                        "a[href]",
                        "input:not([disabled])",
                        "select:not([disabled])",
                        "textarea:not([disabled])",
                        "button:not([disabled])",
                        '[role="button"]:not([disabled])',
                      ])
                    ).filter(
                      (e) => !e.classList.contains("uppy-Dashboard-close")
                    );
              for (let t of i)
                "A" === t.tagName
                  ? t.setAttribute("aria-disabled", e)
                  : (t.disabled = e);
              e ? (iP(this, iT)[iT] = i) : (iP(this, iT)[iT] = null),
                (this.dashboardIsDisabled = e);
            }),
            (this.updateBrowserHistory = () => {
              var e;
              (null != (e = history.state) && e[this.modalName]) ||
                history.pushState(
                  { ...history.state, [this.modalName]: !0 },
                  ""
                ),
                window.addEventListener("popstate", this.handlePopState, !1);
            }),
            (this.handlePopState = (e) => {
              var t;
              !this.isModalOpen() ||
                (e.state && e.state[this.modalName]) ||
                this.closeModal({ manualClose: !1 }),
                !this.isModalOpen() &&
                  null != (t = e.state) &&
                  t[this.modalName] &&
                  history.back();
            }),
            (this.handleKeyDownInModal = (e) => {
              27 === e.keyCode && this.requestCloseModal(),
                9 === e.keyCode &&
                  tz(e, this.getPluginState().activeOverlayType, this.el);
            }),
            (this.handleClickOutside = () => {
              this.opts.closeModalOnClickOutside && this.requestCloseModal();
            }),
            (this.handlePaste = (e) => {
              this.uppy.iteratePlugins((t) => {
                "acquirer" === t.type &&
                  (null == t.handleRootPaste || t.handleRootPaste(e));
              });
              let t = ek(e.clipboardData.files);
              t.length > 0 &&
                (this.uppy.log("[Dashboard] Files pasted"), this.addFiles(t));
            }),
            (this.handleInputChange = (e) => {
              e.preventDefault();
              let t = ek(e.target.files);
              t.length > 0 &&
                (this.uppy.log("[Dashboard] Files selected through input"),
                this.addFiles(t));
            }),
            (this.handleDragOver = (e) => {
              var t, i;
              e.preventDefault(), e.stopPropagation();
              let r = (() => {
                  let t = !0;
                  return (
                    this.uppy.iteratePlugins((i) => {
                      null != i.canHandleRootDrop &&
                        i.canHandleRootDrop(e) &&
                        (t = !0);
                    }),
                    t
                  );
                })(),
                n = (() => {
                  let { types: t } = e.dataTransfer;
                  return t.some((e) => "Files" === e);
                })();
              if (
                (!r && !n) ||
                this.opts.disabled ||
                (this.opts.disableLocalFiles && (n || !r)) ||
                !this.uppy.getState().allowNewUpload
              ) {
                (e.dataTransfer.dropEffect = "none"),
                  clearTimeout(this.removeDragOverClassTimeout);
                return;
              }
              (e.dataTransfer.dropEffect = "copy"),
                clearTimeout(this.removeDragOverClassTimeout),
                this.setPluginState({ isDraggingOver: !0 }),
                null == (t = (i = this.opts).onDragOver) || t.call(i, e);
            }),
            (this.handleDragLeave = (e) => {
              var t, i;
              e.preventDefault(),
                e.stopPropagation(),
                clearTimeout(this.removeDragOverClassTimeout),
                (this.removeDragOverClassTimeout = setTimeout(() => {
                  this.setPluginState({ isDraggingOver: !1 });
                }, 50)),
                null == (t = (i = this.opts).onDragLeave) || t.call(i, e);
            }),
            (this.handleDrop = async (e) => {
              var t, i;
              e.preventDefault(),
                e.stopPropagation(),
                clearTimeout(this.removeDragOverClassTimeout),
                this.setPluginState({ isDraggingOver: !1 }),
                this.uppy.iteratePlugins((t) => {
                  "acquirer" === t.type &&
                    (null == t.handleRootDrop || t.handleRootDrop(e));
                });
              let r = !1;
              this.uppy.log("[Dashboard] Processing dropped files");
              let n = await eA(e.dataTransfer, {
                logDropError: (e) => {
                  this.uppy.log(e, "error"),
                    r || (this.uppy.info(e.message, "error"), (r = !0));
                },
              });
              n.length > 0 &&
                (this.uppy.log("[Dashboard] Files dropped"), this.addFiles(n)),
                null == (t = (i = this.opts).onDrop) || t.call(i, e);
            }),
            (this.handleRequestThumbnail = (e) => {
              this.opts.waitForThumbnailsBeforeUpload ||
                this.uppy.emit("thumbnail:request", e);
            }),
            (this.handleCancelThumbnail = (e) => {
              this.opts.waitForThumbnailsBeforeUpload ||
                this.uppy.emit("thumbnail:cancel", e);
            }),
            (this.handleKeyDownInInline = (e) => {
              if (9 === e.keyCode) {
                var t, i;
                (t = this.getPluginState().activeOverlayType),
                  (i = this.el),
                  null === t || tz(e, t, i);
              }
            }),
            (this.handlePasteOnBody = (e) => {
              this.el.contains(document.activeElement) && this.handlePaste(e);
            }),
            (this.handleComplete = (e) => {
              let { failed: t } = e;
              this.opts.closeAfterFinish &&
                !(null != t && t.length) &&
                this.requestCloseModal();
            }),
            (this.handleCancelRestore = () => {
              this.uppy.emit("restore-canceled");
            }),
            Object.defineProperty(this, iO, {
              writable: !0,
              value: () => {
                if (this.opts.disableThumbnailGenerator) return;
                let e = this.uppy.getFiles();
                if (1 === e.length) {
                  let t = this.uppy.getPlugin(`${this.id}:ThumbnailGenerator`);
                  null == t || t.setOptions({ thumbnailWidth: 600 });
                  let i = { ...e[0], preview: void 0 };
                  null == t ||
                    t.requestThumbnail(i).then(() => {
                      null == t ||
                        t.setOptions({
                          thumbnailWidth: this.opts.thumbnailWidth,
                        });
                    });
                }
              },
            }),
            Object.defineProperty(this, ik, {
              writable: !0,
              value: (e) => {
                let t = e[0],
                  { metaFields: i } = this.getPluginState(),
                  r = i && i.length > 0,
                  n = this.canEditFile(t);
                r && "metaEditor" === this.opts.autoOpen
                  ? this.toggleFileCard(!0, t.id)
                  : n &&
                    "imageEditor" === this.opts.autoOpen &&
                    this.openFileEditor(t);
              },
            }),
            (this.initEvents = () => {
              if (this.opts.trigger && !this.opts.inline) {
                let e = eO(this.opts.trigger);
                e
                  ? e.forEach((e) =>
                      e.addEventListener("click", this.openModal)
                    )
                  : this.uppy.log(
                      "Dashboard modal trigger not found. Make sure `trigger` is set in Dashboard options, unless you are planning to call `dashboard.openModal()` method yourself",
                      "warning"
                    );
              }
              this.startListeningToResize(),
                document.addEventListener("paste", this.handlePasteOnBody),
                this.uppy.on("plugin-added", iP(this, iN)[iN]),
                this.uppy.on("plugin-remove", this.removeTarget),
                this.uppy.on("file-added", this.hideAllPanels),
                this.uppy.on("dashboard:modal-closed", this.hideAllPanels),
                this.uppy.on("complete", this.handleComplete),
                this.uppy.on("files-added", iP(this, iO)[iO]),
                this.uppy.on("file-removed", iP(this, iO)[iO]),
                document.addEventListener(
                  "focus",
                  this.recordIfFocusedOnUppyRecently,
                  !0
                ),
                document.addEventListener(
                  "click",
                  this.recordIfFocusedOnUppyRecently,
                  !0
                ),
                this.opts.inline &&
                  this.el.addEventListener(
                    "keydown",
                    this.handleKeyDownInInline
                  ),
                this.opts.autoOpen &&
                  this.uppy.on("files-added", iP(this, ik)[ik]);
            }),
            (this.removeEvents = () => {
              let e = eO(this.opts.trigger);
              !this.opts.inline &&
                e &&
                e.forEach((e) =>
                  e.removeEventListener("click", this.openModal)
                ),
                this.stopListeningToResize(),
                document.removeEventListener("paste", this.handlePasteOnBody),
                window.removeEventListener("popstate", this.handlePopState, !1),
                this.uppy.off("plugin-added", iP(this, iN)[iN]),
                this.uppy.off("plugin-remove", this.removeTarget),
                this.uppy.off("file-added", this.hideAllPanels),
                this.uppy.off("dashboard:modal-closed", this.hideAllPanels),
                this.uppy.off("complete", this.handleComplete),
                this.uppy.off("files-added", iP(this, iO)[iO]),
                this.uppy.off("file-removed", iP(this, iO)[iO]),
                document.removeEventListener(
                  "focus",
                  this.recordIfFocusedOnUppyRecently
                ),
                document.removeEventListener(
                  "click",
                  this.recordIfFocusedOnUppyRecently
                ),
                this.opts.inline &&
                  this.el.removeEventListener(
                    "keydown",
                    this.handleKeyDownInInline
                  ),
                this.opts.autoOpen &&
                  this.uppy.off("files-added", iP(this, ik)[ik]);
            }),
            (this.superFocusOnEachUpdate = () => {
              let e = this.el.contains(document.activeElement),
                t =
                  document.activeElement === document.body ||
                  null === document.activeElement,
                i = 0 === this.uppy.getState().info.length,
                r = !this.opts.inline;
              i && (r || e || (t && this.ifFocusedOnUppyRecently))
                ? this.superFocus(
                    this.el,
                    this.getPluginState().activeOverlayType
                  )
                : this.superFocus.cancel();
            }),
            (this.afterUpdate = () => {
              if (this.opts.disabled && !this.dashboardIsDisabled) {
                this.disableInteractiveElements(!0);
                return;
              }
              !this.opts.disabled &&
                this.dashboardIsDisabled &&
                this.disableInteractiveElements(!1),
                this.superFocusOnEachUpdate();
            }),
            (this.saveFileCard = (e, t) => {
              this.uppy.setFileMeta(t, e), this.toggleFileCard(!1, t);
            }),
            Object.defineProperty(this, ix, {
              writable: !0,
              value: (e) => {
                let t = this.uppy.getPlugin(e.id);
                return {
                  ...e,
                  icon: t.icon || this.opts.defaultPickerIcon,
                  render: t.render,
                };
              },
            }),
            Object.defineProperty(this, iA, {
              writable: !0,
              value: (e) => {
                let t = this.uppy.getPlugin(e.id);
                return "function" != typeof t.isSupported || t.isSupported();
              },
            }),
            Object.defineProperty(this, iD, {
              writable: !0,
              value: iC((e) =>
                e
                  .filter((e) => "acquirer" === e.type && iP(this, iA)[iA](e))
                  .map(iP(this, ix)[ix])
              ),
            }),
            Object.defineProperty(this, iU, {
              writable: !0,
              value: iC((e) =>
                e
                  .filter((e) => "progressindicator" === e.type)
                  .map(iP(this, ix)[ix])
              ),
            }),
            Object.defineProperty(this, iR, {
              writable: !0,
              value: iC((e) =>
                e.filter((e) => "editor" === e.type).map(iP(this, ix)[ix])
              ),
            }),
            (this.render = (e) => {
              let t;
              let i = this.getPluginState(),
                { files: r, capabilities: n, allowNewUpload: s } = e,
                {
                  newFiles: o,
                  uploadStartedFiles: a,
                  completeFiles: l,
                  erroredFiles: u,
                  inProgressFiles: h,
                  inProgressNotPausedFiles: d,
                  processingFiles: p,
                  isUploadStarted: c,
                  isAllComplete: f,
                  isAllErrored: m,
                  isAllPaused: g,
                } = this.uppy.getObjectOfFilesPerState(),
                y = iP(this, iD)[iD](i.targets),
                v = iP(this, iU)[iU](i.targets),
                b = iP(this, iR)[iR](i.targets);
              return (
                (t =
                  "auto" === this.opts.theme
                    ? n.darkMode
                      ? "dark"
                      : "light"
                    : this.opts.theme),
                0 >
                  ["files", "folders", "both"].indexOf(
                    this.opts.fileManagerSelectionType
                  ) &&
                  ((this.opts.fileManagerSelectionType = "files"),
                  console.warn(
                    `Unsupported option for "fileManagerSelectionType". Using default of "${this.opts.fileManagerSelectionType}".`
                  )),
                (function (e) {
                  let t = 0 === e.totalFileCount,
                    i = 1 === e.totalFileCount,
                    r = e.containerWidth > 576,
                    n = e.containerHeight > 330,
                    s = B({
                      "uppy-Dashboard": !0,
                      "uppy-Dashboard--isDisabled": e.disabled,
                      "uppy-Dashboard--animateOpenClose": e.animateOpenClose,
                      "uppy-Dashboard--isClosing": e.isClosing,
                      "uppy-Dashboard--isDraggingOver": e.isDraggingOver,
                      "uppy-Dashboard--modal": !e.inline,
                      "uppy-size--md": e.containerWidth > 576,
                      "uppy-size--lg": e.containerWidth > 700,
                      "uppy-size--xl": e.containerWidth > 900,
                      "uppy-size--height-md": e.containerHeight > 330,
                      "uppy-Dashboard--isAddFilesPanelVisible":
                        e.showAddFilesPanel,
                      "uppy-Dashboard--isInnerWrapVisible":
                        e.areInsidesReadyToBeVisible,
                      "uppy-Dashboard--singleFile":
                        e.singleFileFullScreen && i && n,
                    }),
                    o = 1;
                  e.containerWidth > 900
                    ? (o = 5)
                    : e.containerWidth > 700
                    ? (o = 4)
                    : e.containerWidth > 576 && (o = 3);
                  let a = e.showSelectedFiles && !t,
                    l = e.recoveredState
                      ? Object.keys(e.recoveredState.files).length
                      : null,
                    u = e.files
                      ? Object.keys(e.files).filter((t) => e.files[t].isGhost)
                          .length
                      : null;
                  return (0, N.h)(
                    "div",
                    {
                      className: s,
                      "data-uppy-theme": e.theme,
                      "data-uppy-num-acquirers": e.acquirers.length,
                      "data-uppy-drag-drop-supported":
                        !e.disableLocalFiles && tq(),
                      "aria-hidden": e.inline ? "false" : e.isHidden,
                      "aria-disabled": e.disabled,
                      "aria-label": e.inline
                        ? e.i18n("dashboardTitle")
                        : e.i18n("dashboardWindowTitle"),
                      onPaste: e.handlePaste,
                      onDragOver: e.handleDragOver,
                      onDragLeave: e.handleDragLeave,
                      onDrop: e.handleDrop,
                    },
                    (0, N.h)("div", {
                      "aria-hidden": "true",
                      className: "uppy-Dashboard-overlay",
                      tabIndex: -1,
                      onClick: e.handleClickOutside,
                    }),
                    (0, N.h)(
                      "div",
                      {
                        className: "uppy-Dashboard-inner",
                        "aria-modal": !e.inline && "true",
                        role: e.inline ? void 0 : "dialog",
                        style: {
                          width: e.inline && e.width ? e.width : "",
                          height: e.inline && e.height ? e.height : "",
                        },
                      },
                      e.inline
                        ? null
                        : (0, N.h)(
                            "button",
                            {
                              className: "uppy-u-reset uppy-Dashboard-close",
                              type: "button",
                              "aria-label": e.i18n("closeModal"),
                              title: e.i18n("closeModal"),
                              onClick: e.closeModal,
                            },
                            (0, N.h)("span", { "aria-hidden": "true" }, "\xd7")
                          ),
                      (0, N.h)(
                        "div",
                        { className: "uppy-Dashboard-innerWrap" },
                        (0, N.h)(
                          "div",
                          { className: "uppy-Dashboard-dropFilesHereHint" },
                          e.i18n("dropHint")
                        ),
                        a && (0, N.h)(ic, e),
                        l &&
                          (0, N.h)(
                            "div",
                            { className: "uppy-Dashboard-serviceMsg" },
                            (0, N.h)(
                              "svg",
                              {
                                className: "uppy-Dashboard-serviceMsg-icon",
                                "aria-hidden": "true",
                                focusable: "false",
                                width: "21",
                                height: "16",
                                viewBox: "0 0 24 19",
                              },
                              (0, N.h)(
                                "g",
                                {
                                  transform: "translate(0 -1)",
                                  fill: "none",
                                  fillRule: "evenodd",
                                },
                                (0, N.h)("path", {
                                  d: "M12.857 1.43l10.234 17.056A1 1 0 0122.234 20H1.766a1 1 0 01-.857-1.514L11.143 1.429a1 1 0 011.714 0z",
                                  fill: "#FFD300",
                                }),
                                (0, N.h)("path", {
                                  fill: "#000",
                                  d: "M11 6h2l-.3 8h-1.4z",
                                }),
                                (0, N.h)("circle", {
                                  fill: "#000",
                                  cx: "12",
                                  cy: "17",
                                  r: "1",
                                })
                              )
                            ),
                            (0, N.h)(
                              "strong",
                              { className: "uppy-Dashboard-serviceMsg-title" },
                              e.i18n("sessionRestored")
                            ),
                            (0, N.h)(
                              "div",
                              { className: "uppy-Dashboard-serviceMsg-text" },
                              u > 0
                                ? e.i18n("recoveredXFiles", { smart_count: u })
                                : e.i18n("recoveredAllFiles")
                            )
                          ),
                        a
                          ? (0, N.h)(is, {
                              id: e.id,
                              error: e.error,
                              i18n: e.i18n,
                              uppy: e.uppy,
                              files: e.files,
                              acquirers: e.acquirers,
                              resumableUploads: e.resumableUploads,
                              hideRetryButton: e.hideRetryButton,
                              hidePauseResumeButton: e.hidePauseResumeButton,
                              hideCancelButton: e.hideCancelButton,
                              showLinkToFileUploadResult:
                                e.showLinkToFileUploadResult,
                              showRemoveButtonAfterComplete:
                                e.showRemoveButtonAfterComplete,
                              isWide: e.isWide,
                              metaFields: e.metaFields,
                              toggleFileCard: e.toggleFileCard,
                              handleRequestThumbnail: e.handleRequestThumbnail,
                              handleCancelThumbnail: e.handleCancelThumbnail,
                              recoveredState: e.recoveredState,
                              individualCancellation: e.individualCancellation,
                              openFileEditor: e.openFileEditor,
                              canEditFile: e.canEditFile,
                              toggleAddFilesPanel: e.toggleAddFilesPanel,
                              isSingleFile: i,
                              itemsPerRow: o,
                            })
                          : (0, N.h)(io, ib({}, e, { isSizeMD: r })),
                        (0, N.h)(
                          iv,
                          null,
                          e.showAddFilesPanel
                            ? (0, N.h)(
                                ia,
                                ib({ key: "AddFiles" }, e, { isSizeMD: r })
                              )
                            : null
                        ),
                        (0, N.h)(
                          iv,
                          null,
                          e.fileCardFor
                            ? (0, N.h)(ig, ib({ key: "FileCard" }, e))
                            : null
                        ),
                        (0, N.h)(
                          iv,
                          null,
                          e.activePickerPanel
                            ? (0, N.h)(iu, ib({ key: "Picker" }, e))
                            : null
                        ),
                        (0, N.h)(
                          iv,
                          null,
                          e.showFileEditor
                            ? (0, N.h)(ih, ib({ key: "Editor" }, e))
                            : null
                        ),
                        (0, N.h)(
                          "div",
                          { className: "uppy-Dashboard-progressindicators" },
                          e.progressindicators.map((t) =>
                            e.uppy.getPlugin(t.id).render(e.state)
                          )
                        )
                      )
                    )
                  );
                })({
                  state: e,
                  isHidden: i.isHidden,
                  files: r,
                  newFiles: o,
                  uploadStartedFiles: a,
                  completeFiles: l,
                  erroredFiles: u,
                  inProgressFiles: h,
                  inProgressNotPausedFiles: d,
                  processingFiles: p,
                  isUploadStarted: c,
                  isAllComplete: f,
                  isAllErrored: m,
                  isAllPaused: g,
                  totalFileCount: Object.keys(r).length,
                  totalProgress: e.totalProgress,
                  allowNewUpload: s,
                  acquirers: y,
                  theme: t,
                  disabled: this.opts.disabled,
                  disableLocalFiles: this.opts.disableLocalFiles,
                  direction: this.opts.direction,
                  activePickerPanel: i.activePickerPanel,
                  showFileEditor: i.showFileEditor,
                  saveFileEditor: this.saveFileEditor,
                  closeFileEditor: this.closeFileEditor,
                  disableInteractiveElements: this.disableInteractiveElements,
                  animateOpenClose: this.opts.animateOpenClose,
                  isClosing: i.isClosing,
                  progressindicators: v,
                  editors: b,
                  autoProceed: this.uppy.opts.autoProceed,
                  id: this.id,
                  closeModal: this.requestCloseModal,
                  handleClickOutside: this.handleClickOutside,
                  handleInputChange: this.handleInputChange,
                  handlePaste: this.handlePaste,
                  inline: this.opts.inline,
                  showPanel: this.showPanel,
                  hideAllPanels: this.hideAllPanels,
                  i18n: this.i18n,
                  i18nArray: this.i18nArray,
                  uppy: this.uppy,
                  note: this.opts.note,
                  recoveredState: e.recoveredState,
                  metaFields: i.metaFields,
                  resumableUploads: n.resumableUploads || !1,
                  individualCancellation: n.individualCancellation,
                  isMobileDevice: n.isMobileDevice,
                  fileCardFor: i.fileCardFor,
                  toggleFileCard: this.toggleFileCard,
                  toggleAddFilesPanel: this.toggleAddFilesPanel,
                  showAddFilesPanel: i.showAddFilesPanel,
                  saveFileCard: this.saveFileCard,
                  openFileEditor: this.openFileEditor,
                  canEditFile: this.canEditFile,
                  width: this.opts.width,
                  height: this.opts.height,
                  showLinkToFileUploadResult:
                    this.opts.showLinkToFileUploadResult,
                  fileManagerSelectionType: this.opts.fileManagerSelectionType,
                  proudlyDisplayPoweredByUppy:
                    this.opts.proudlyDisplayPoweredByUppy,
                  hideCancelButton: this.opts.hideCancelButton,
                  hideRetryButton: this.opts.hideRetryButton,
                  hidePauseResumeButton: this.opts.hidePauseResumeButton,
                  showRemoveButtonAfterComplete:
                    this.opts.showRemoveButtonAfterComplete,
                  containerWidth: i.containerWidth,
                  containerHeight: i.containerHeight,
                  areInsidesReadyToBeVisible: i.areInsidesReadyToBeVisible,
                  isTargetDOMEl: this.isTargetDOMEl,
                  parentElement: this.el,
                  allowedFileTypes:
                    this.uppy.opts.restrictions.allowedFileTypes,
                  maxNumberOfFiles:
                    this.uppy.opts.restrictions.maxNumberOfFiles,
                  requiredMetaFields:
                    this.uppy.opts.restrictions.requiredMetaFields,
                  showSelectedFiles: this.opts.showSelectedFiles,
                  showNativePhotoCameraButton:
                    this.opts.showNativePhotoCameraButton,
                  showNativeVideoCameraButton:
                    this.opts.showNativeVideoCameraButton,
                  nativeCameraFacingMode: this.opts.nativeCameraFacingMode,
                  singleFileFullScreen: this.opts.singleFileFullScreen,
                  handleCancelRestore: this.handleCancelRestore,
                  handleRequestThumbnail: this.handleRequestThumbnail,
                  handleCancelThumbnail: this.handleCancelThumbnail,
                  isDraggingOver: i.isDraggingOver,
                  handleDragOver: this.handleDragOver,
                  handleDragLeave: this.handleDragLeave,
                  handleDrop: this.handleDrop,
                })
              );
            }),
            Object.defineProperty(this, iI, {
              writable: !0,
              value: () => {
                (this.opts.plugins || []).forEach((e) => {
                  let t = this.uppy.getPlugin(e);
                  t
                    ? t.mount(this, t)
                    : this.uppy.log(
                        `[Uppy] Dashboard could not find plugin '${e}', make sure to uppy.use() the plugins you are specifying`,
                        "warning"
                      );
                });
              },
            }),
            Object.defineProperty(this, iM, {
              writable: !0,
              value: () => {
                this.uppy.iteratePlugins(iP(this, iN)[iN]);
              },
            }),
            Object.defineProperty(this, iN, {
              writable: !0,
              value: (e) => {
                var t;
                e &&
                  !(null != (t = e.opts) && t.target) &&
                  ["acquirer", "editor"].includes(e.type) &&
                  !this.getPluginState().targets.some((t) => e.id === t.id) &&
                  e.mount(this, e);
              },
            }),
            (this.install = () => {
              this.setPluginState({
                isHidden: !0,
                fileCardFor: null,
                activeOverlayType: null,
                showAddFilesPanel: !1,
                activePickerPanel: void 0,
                showFileEditor: !1,
                metaFields: this.opts.metaFields,
                targets: [],
                areInsidesReadyToBeVisible: !1,
                isDraggingOver: !1,
              });
              let { inline: e, closeAfterFinish: t } = this.opts;
              if (e && t)
                throw Error(
                  "[Dashboard] `closeAfterFinish: true` cannot be used on an inline Dashboard, because an inline Dashboard cannot be closed at all. Either set `inline: false`, or disable the `closeAfterFinish` option."
                );
              let { allowMultipleUploads: i, allowMultipleUploadBatches: r } =
                this.uppy.opts;
              (i || r) &&
                t &&
                this.uppy.log(
                  "[Dashboard] When using `closeAfterFinish`, we recommended setting the `allowMultipleUploadBatches` option to `false` in the Uppy constructor. See https://uppy.io/docs/uppy/#allowMultipleUploads-true",
                  "warning"
                );
              let { target: n } = this.opts;
              n && this.mount(n, this),
                this.opts.disableStatusBar ||
                  this.uppy.use(ew, {
                    id: `${this.id}:StatusBar`,
                    target: this,
                    hideUploadButton: this.opts.hideUploadButton,
                    hideRetryButton: this.opts.hideRetryButton,
                    hidePauseResumeButton: this.opts.hidePauseResumeButton,
                    hideCancelButton: this.opts.hideCancelButton,
                    showProgressDetails: this.opts.showProgressDetails,
                    hideAfterFinish: this.opts.hideProgressAfterFinish,
                    locale: this.opts.locale,
                    doneButtonHandler: this.opts.doneButtonHandler,
                  }),
                this.opts.disableInformer ||
                  this.uppy.use(eE, {
                    id: `${this.id}:Informer`,
                    target: this,
                  }),
                this.opts.disableThumbnailGenerator ||
                  this.uppy.use(eF.Z, {
                    id: `${this.id}:ThumbnailGenerator`,
                    thumbnailWidth: this.opts.thumbnailWidth,
                    thumbnailHeight: this.opts.thumbnailHeight,
                    thumbnailType: this.opts.thumbnailType,
                    waitForThumbnailsBeforeUpload:
                      this.opts.waitForThumbnailsBeforeUpload,
                    lazy: !this.opts.waitForThumbnailsBeforeUpload,
                  }),
                (this.darkModeMediaQuery =
                  "undefined" != typeof window && window.matchMedia
                    ? window.matchMedia("(prefers-color-scheme: dark)")
                    : null);
              let s =
                !!this.darkModeMediaQuery && this.darkModeMediaQuery.matches;
              if (
                (this.uppy.log(`[Dashboard] Dark mode is ${s ? "on" : "off"}`),
                this.setDarkModeCapability(s),
                "auto" === this.opts.theme)
              ) {
                var o;
                null == (o = this.darkModeMediaQuery) ||
                  o.addListener(this.handleSystemDarkModeChange);
              }
              iP(this, iI)[iI](), iP(this, iM)[iM](), this.initEvents();
            }),
            (this.uninstall = () => {
              if (!this.opts.disableInformer) {
                let e = this.uppy.getPlugin(`${this.id}:Informer`);
                e && this.uppy.removePlugin(e);
              }
              if (!this.opts.disableStatusBar) {
                let e = this.uppy.getPlugin(`${this.id}:StatusBar`);
                e && this.uppy.removePlugin(e);
              }
              if (!this.opts.disableThumbnailGenerator) {
                let e = this.uppy.getPlugin(`${this.id}:ThumbnailGenerator`);
                e && this.uppy.removePlugin(e);
              }
              if (
                ((this.opts.plugins || []).forEach((e) => {
                  let t = this.uppy.getPlugin(e);
                  t && t.unmount();
                }),
                "auto" === this.opts.theme)
              ) {
                var e;
                null == (e = this.darkModeMediaQuery) ||
                  e.removeListener(this.handleSystemDarkModeChange);
              }
              this.opts.disablePageScrollWhenModalOpen &&
                document.body.classList.remove("uppy-Dashboard-isFixed"),
                this.unmount(),
                this.removeEvents();
            }),
            (this.id = this.opts.id || "Dashboard"),
            (this.title = "Dashboard"),
            (this.type = "orchestrator"),
            (this.defaultLocale = iw),
            null != (i = this.opts).doneButtonHandler ||
              (i.doneButtonHandler = () => {
                this.uppy.clearUploadedFiles(), this.requestCloseModal();
              }),
            null != (r = this.opts).onRequestCloseModal ||
              (r.onRequestCloseModal = () => this.closeModal()),
            this.i18nInit();
        }
      }
      iB.VERSION = "3.8.0";
      var iL = i(39930);
      let ij = D.instanceOf(iL.Z),
        iz = D.arrayOf(D.string),
        i$ = D.shape({ strings: D.object, pluralize: D.func }),
        iq = D.shape({
          id: D.string.isRequired,
          name: D.string.isRequired,
          placeholder: D.string,
        }),
        iH = D.oneOfType([D.arrayOf(iq), D.func]),
        iV = D.oneOfType([D.string, D.number]),
        iW = [
          "defaultChecked",
          "defaultValue",
          "suppressContentEditableWarning",
          "suppressHydrationWarning",
          "dangerouslySetInnerHTML",
          "accessKey",
          "className",
          "contentEditable",
          "contextMenu",
          "dir",
          "draggable",
          "hidden",
          "id",
          "lang",
          "placeholder",
          "slot",
          "spellCheck",
          "style",
          "tabIndex",
          "title",
          "translate",
          "radioGroup",
          "role",
          "about",
          "datatype",
          "inlist",
          "prefix",
          "property",
          "resource",
          "typeof",
          "vocab",
          "autoCapitalize",
          "autoCorrect",
          "autoSave",
          "color",
          "itemProp",
          "itemScope",
          "itemType",
          "itemID",
          "itemRef",
          "results",
          "security",
          "unselectable",
          "inputMode",
          "is",
          "onCopy",
          "onCopyCapture",
          "onCut",
          "onCutCapture",
          "onPaste",
          "onPasteCapture",
          "onCompositionEnd",
          "onCompositionEndCapture",
          "onCompositionStart",
          "onCompositionStartCapture",
          "onCompositionUpdate",
          "onCompositionUpdateCapture",
          "onFocus",
          "onFocusCapture",
          "onBlur",
          "onBlurCapture",
          "onChange",
          "onChangeCapture",
          "onBeforeInput",
          "onBeforeInputCapture",
          "onInput",
          "onInputCapture",
          "onReset",
          "onResetCapture",
          "onSubmit",
          "onSubmitCapture",
          "onInvalid",
          "onInvalidCapture",
          "onLoad",
          "onLoadCapture",
          "onError",
          "onErrorCapture",
          "onKeyDown",
          "onKeyDownCapture",
          "onKeyPress",
          "onKeyPressCapture",
          "onKeyUp",
          "onKeyUpCapture",
          "onAbort",
          "onAbortCapture",
          "onCanPlay",
          "onCanPlayCapture",
          "onCanPlayThrough",
          "onCanPlayThroughCapture",
          "onDurationChange",
          "onDurationChangeCapture",
          "onEmptied",
          "onEmptiedCapture",
          "onEncrypted",
          "onEncryptedCapture",
          "onEnded",
          "onEndedCapture",
          "onLoadedData",
          "onLoadedDataCapture",
          "onLoadedMetadata",
          "onLoadedMetadataCapture",
          "onLoadStart",
          "onLoadStartCapture",
          "onPause",
          "onPauseCapture",
          "onPlay",
          "onPlayCapture",
          "onPlaying",
          "onPlayingCapture",
          "onProgress",
          "onProgressCapture",
          "onRateChange",
          "onRateChangeCapture",
          "onSeeked",
          "onSeekedCapture",
          "onSeeking",
          "onSeekingCapture",
          "onStalled",
          "onStalledCapture",
          "onSuspend",
          "onSuspendCapture",
          "onTimeUpdate",
          "onTimeUpdateCapture",
          "onVolumeChange",
          "onVolumeChangeCapture",
          "onWaiting",
          "onWaitingCapture",
          "onAuxClick",
          "onAuxClickCapture",
          "onClick",
          "onClickCapture",
          "onContextMenu",
          "onContextMenuCapture",
          "onDoubleClick",
          "onDoubleClickCapture",
          "onDrag",
          "onDragCapture",
          "onDragEnd",
          "onDragEndCapture",
          "onDragEnter",
          "onDragEnterCapture",
          "onDragExit",
          "onDragExitCapture",
          "onDragLeave",
          "onDragLeaveCapture",
          "onDragOver",
          "onDragOverCapture",
          "onDragStart",
          "onDragStartCapture",
          "onDrop",
          "onDropCapture",
          "onMouseDown",
          "onMouseDownCapture",
          "onMouseEnter",
          "onMouseLeave",
          "onMouseMove",
          "onMouseMoveCapture",
          "onMouseOut",
          "onMouseOutCapture",
          "onMouseOver",
          "onMouseOverCapture",
          "onMouseUp",
          "onMouseUpCapture",
          "onSelect",
          "onSelectCapture",
          "onTouchCancel",
          "onTouchCancelCapture",
          "onTouchEnd",
          "onTouchEndCapture",
          "onTouchMove",
          "onTouchMoveCapture",
          "onTouchStart",
          "onTouchStartCapture",
          "onPointerDown",
          "onPointerDownCapture",
          "onPointerMove",
          "onPointerMoveCapture",
          "onPointerUp",
          "onPointerUpCapture",
          "onPointerCancel",
          "onPointerCancelCapture",
          "onPointerEnter",
          "onPointerEnterCapture",
          "onPointerLeave",
          "onPointerLeaveCapture",
          "onPointerOver",
          "onPointerOverCapture",
          "onPointerOut",
          "onPointerOutCapture",
          "onGotPointerCapture",
          "onGotPointerCaptureCapture",
          "onLostPointerCapture",
          "onLostPointerCaptureCapture",
          "onScroll",
          "onScrollCapture",
          "onWheel",
          "onWheelCapture",
          "onAnimationStart",
          "onAnimationStartCapture",
          "onAnimationEnd",
          "onAnimationEndCapture",
          "onAnimationIteration",
          "onAnimationIterationCapture",
          "onTransitionEnd",
          "onTransitionEndCapture",
        ],
        iG = /^(aria-|data-)/;
      var iK = (e) =>
        Object.fromEntries(
          Object.entries(e).filter((e) => {
            let [t] = e;
            return iG.test(t) || iW.includes(t);
          })
        );
      function iZ(e, t) {
        return Object.keys(e).some(
          (i) => !Object.hasOwn(e, i) && e[i] !== t[i]
        );
      }
      class iX extends A.Component {
        componentDidMount() {
          this.installPlugin();
        }
        componentDidUpdate(e) {
          if (e.uppy !== this.props.uppy)
            this.uninstallPlugin(e), this.installPlugin();
          else if (iZ(this.props, e)) {
            let { uppy: e, ...t } = { ...this.props, target: this.container };
            this.plugin.setOptions(t);
          }
        }
        componentWillUnmount() {
          this.uninstallPlugin();
        }
        installPlugin() {
          let { uppy: e, ...t } = {
            id: "react:Dashboard",
            inline: !0,
            ...this.props,
            target: this.container,
          };
          e.use(iB, t), (this.plugin = e.getPlugin(t.id));
        }
        uninstallPlugin(e) {
          void 0 === e && (e = this.props);
          let { uppy: t } = e;
          t.removePlugin(this.plugin);
        }
        render() {
          return (0, A.createElement)("div", {
            className: "uppy-Container",
            ref: (e) => {
              this.container = e;
            },
            ...iK(this.props),
          });
        }
      }
      iX.propsTypes = {
        uppy: ij,
        disableInformer: D.bool,
        disableStatusBar: D.bool,
        disableThumbnailGenerator: D.bool,
        height: iV,
        hideProgressAfterFinish: D.bool,
        hideUploadButton: D.bool,
        locale: i$,
        metaFields: iH,
        note: D.string,
        plugins: iz,
        proudlyDisplayPoweredByUppy: D.bool,
        showProgressDetails: D.bool,
        width: iV,
        thumbnailType: D.string,
        thumbnailWidth: D.number,
      };
      class iY extends A.Component {
        componentDidMount() {
          this.installPlugin();
        }
        componentDidUpdate(e) {
          let { uppy: t, open: i, onRequestClose: r } = this.props;
          if (e.uppy !== t) this.uninstallPlugin(e), this.installPlugin();
          else if (iZ(this.props, e)) {
            let { uppy: e, ...t } = {
              ...this.props,
              inline: !1,
              onRequestCloseModal: r,
            };
            this.plugin.setOptions(t);
          }
          e.open && !i
            ? this.plugin.closeModal()
            : !e.open && i && this.plugin.openModal();
        }
        componentWillUnmount() {
          this.uninstallPlugin();
        }
        installPlugin() {
          let {
              target: e = this.container,
              open: t,
              onRequestClose: i,
              uppy: r,
              ...n
            } = this.props,
            s = {
              ...n,
              id: "react:DashboardModal",
              inline: !1,
              target: e,
              open: t,
              onRequestCloseModal: i,
            };
          r.use(iB, s),
            (this.plugin = r.getPlugin(s.id)),
            t && this.plugin.openModal();
        }
        uninstallPlugin(e) {
          void 0 === e && (e = this.props);
          let { uppy: t } = e;
          t.removePlugin(this.plugin);
        }
        render() {
          return (0, A.createElement)("div", {
            className: "uppy-Container",
            ref: (e) => {
              this.container = e;
            },
            ...iK(this.props),
          });
        }
      }
      (iY.propTypes = {
        uppy: ij.isRequired,
        target:
          "undefined" != typeof window
            ? D.instanceOf(window.HTMLElement)
            : D.any,
        open: D.bool,
        onRequestClose: D.func,
        closeModalOnClickOutside: D.bool,
        disablePageScrollWhenModalOpen: D.bool,
        plugins: iz,
        width: iV,
        height: iV,
        showProgressDetails: D.bool,
        note: D.string,
        metaFields: iH,
        proudlyDisplayPoweredByUppy: D.bool,
        autoOpenFileEditor: D.bool,
        animateOpenClose: D.bool,
        browserBackButtonClose: D.bool,
        closeAfterFinish: D.bool,
        disableStatusBar: D.bool,
        disableInformer: D.bool,
        disableThumbnailGenerator: D.bool,
        disableLocalFiles: D.bool,
        disabled: D.bool,
        hideCancelButton: D.bool,
        hidePauseResumeButton: D.bool,
        hideProgressAfterFinish: D.bool,
        hideRetryButton: D.bool,
        hideUploadButton: D.bool,
        showLinkToFileUploadResult: D.bool,
        showRemoveButtonAfterComplete: D.bool,
        showSelectedFiles: D.bool,
        waitForThumbnailsBeforeUpload: D.bool,
        fileManagerSelectionType: D.string,
        theme: D.string,
        thumbnailType: D.string,
        thumbnailWidth: D.number,
        locale: i$,
      }),
        (iY.defaultProps = {
          metaFields: [],
          plugins: [],
          width: 750,
          height: 550,
          thumbnailWidth: 280,
          thumbnailType: "image/jpeg",
          waitForThumbnailsBeforeUpload: !1,
          showLinkToFileUploadResult: !1,
          showProgressDetails: !1,
          hideUploadButton: !1,
          hideCancelButton: !1,
          hideRetryButton: !1,
          hidePauseResumeButton: !1,
          hideProgressAfterFinish: !1,
          note: null,
          closeModalOnClickOutside: !1,
          closeAfterFinish: !1,
          disableStatusBar: !1,
          disableInformer: !1,
          disableThumbnailGenerator: !1,
          disablePageScrollWhenModalOpen: !0,
          animateOpenClose: !0,
          fileManagerSelectionType: "files",
          proudlyDisplayPoweredByUppy: !0,
          showSelectedFiles: !0,
          showRemoveButtonAfterComplete: !1,
          browserBackButtonClose: !1,
          theme: "light",
          autoOpenFileEditor: !1,
          disabled: !1,
          disableLocalFiles: !1,
          open: void 0,
          target: void 0,
          locale: null,
          onRequestClose: void 0,
        });
      var iJ = {
        strings: { dropHereOr: "Drop here or %{browse}", browse: "browse" },
      };
      let iQ = { inputName: "files[]", width: "100%", height: "100%" };
      class i0 extends U.Z {
        constructor(e, t) {
          super(e, { ...iQ, ...t }),
            (this.isDragDropSupported = tq()),
            (this.addFiles = (e) => {
              let t = e.map((e) => ({
                source: this.id,
                name: e.name,
                type: e.type,
                data: e,
                meta: { relativePath: e.relativePath || null },
              }));
              try {
                this.uppy.addFiles(t);
              } catch (e) {
                this.uppy.log(e);
              }
            }),
            (this.onInputChange = (e) => {
              let t = ek(e.target.files);
              t.length > 0 &&
                (this.uppy.log("[DragDrop] Files selected through input"),
                this.addFiles(t)),
                (e.target.value = null);
            }),
            (this.handleDragOver = (e) => {
              var t, i;
              e.preventDefault(), e.stopPropagation();
              let { types: r } = e.dataTransfer,
                n = r.some((e) => "Files" === e),
                { allowNewUpload: s } = this.uppy.getState();
              if (!n || !s) {
                (e.dataTransfer.dropEffect = "none"),
                  clearTimeout(this.removeDragOverClassTimeout);
                return;
              }
              (e.dataTransfer.dropEffect = "copy"),
                clearTimeout(this.removeDragOverClassTimeout),
                this.setPluginState({ isDraggingOver: !0 }),
                null == (t = (i = this.opts).onDragOver) || t.call(i, e);
            }),
            (this.handleDragLeave = (e) => {
              var t, i;
              e.preventDefault(),
                e.stopPropagation(),
                clearTimeout(this.removeDragOverClassTimeout),
                (this.removeDragOverClassTimeout = setTimeout(() => {
                  this.setPluginState({ isDraggingOver: !1 });
                }, 50)),
                null == (t = (i = this.opts).onDragLeave) || t.call(i, e);
            }),
            (this.handleDrop = async (e) => {
              var t, i;
              e.preventDefault(),
                e.stopPropagation(),
                clearTimeout(this.removeDragOverClassTimeout),
                this.setPluginState({ isDraggingOver: !1 });
              let r = await eA(e.dataTransfer, {
                logDropError: (e) => {
                  this.uppy.log(e, "error");
                },
              });
              r.length > 0 &&
                (this.uppy.log("[DragDrop] Files dropped"), this.addFiles(r)),
                null == (t = (i = this.opts).onDrop) || t.call(i, e);
            }),
            (this.type = "acquirer"),
            (this.id = this.opts.id || "DragDrop"),
            (this.title = "Drag & Drop"),
            (this.defaultLocale = iJ),
            this.i18nInit();
        }
        renderHiddenFileInput() {
          let { restrictions: e } = this.uppy.opts;
          return (0, N.h)("input", {
            className: "uppy-DragDrop-input",
            type: "file",
            hidden: !0,
            ref: (e) => {
              this.fileInputRef = e;
            },
            name: this.opts.inputName,
            multiple: 1 !== e.maxNumberOfFiles,
            accept: e.allowedFileTypes,
            onChange: this.onInputChange,
          });
        }
        static renderArrowSvg() {
          return (0, N.h)(
            "svg",
            {
              "aria-hidden": "true",
              focusable: "false",
              className: "uppy-c-icon uppy-DragDrop-arrow",
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
            },
            (0, N.h)("path", {
              d: "M11 10V0H5v10H2l6 6 6-6h-3zm0 0",
              fillRule: "evenodd",
            })
          );
        }
        renderLabel() {
          return (0, N.h)(
            "div",
            { className: "uppy-DragDrop-label" },
            this.i18nArray("dropHereOr", {
              browse: (0, N.h)(
                "span",
                { className: "uppy-DragDrop-browse" },
                this.i18n("browse")
              ),
            })
          );
        }
        renderNote() {
          return (0, N.h)(
            "span",
            { className: "uppy-DragDrop-note" },
            this.opts.note
          );
        }
        render() {
          let e = `uppy-u-reset
      uppy-DragDrop-container
      ${this.isDragDropSupported ? "uppy-DragDrop--isDragDropSupported" : ""}
      ${
        this.getPluginState().isDraggingOver
          ? "uppy-DragDrop--isDraggingOver"
          : ""
      }
    `,
            t = { width: this.opts.width, height: this.opts.height };
          return (0, N.h)(
            "button",
            {
              type: "button",
              className: e,
              style: t,
              onClick: () => this.fileInputRef.click(),
              onDragOver: this.handleDragOver,
              onDragLeave: this.handleDragLeave,
              onDrop: this.handleDrop,
            },
            this.renderHiddenFileInput(),
            (0, N.h)(
              "div",
              { className: "uppy-DragDrop-inner" },
              i0.renderArrowSvg(),
              this.renderLabel(),
              this.renderNote()
            )
          );
        }
        install() {
          let { target: e } = this.opts;
          this.setPluginState({ isDraggingOver: !1 }), e && this.mount(e, this);
        }
        uninstall() {
          this.unmount();
        }
      }
      i0.VERSION = "3.1.0";
      class i1 extends A.Component {
        componentDidMount() {
          this.installPlugin();
        }
        componentDidUpdate(e) {
          if (e.uppy !== this.props.uppy)
            this.uninstallPlugin(e), this.installPlugin();
          else if (iZ(this.props, e)) {
            let { uppy: e, ...t } = { ...this.props, target: this.container };
            this.plugin.setOptions(t);
          }
        }
        componentWillUnmount() {
          this.uninstallPlugin();
        }
        installPlugin() {
          let {
              uppy: e,
              locale: t,
              inputName: i,
              width: r,
              height: n,
              note: s,
            } = this.props,
            o = {
              id: "react:DragDrop",
              locale: t,
              inputName: i,
              width: r,
              height: n,
              note: s,
              target: this.container,
            };
          e.use(i0, o), (this.plugin = e.getPlugin(o.id));
        }
        uninstallPlugin(e) {
          void 0 === e && (e = this.props);
          let { uppy: t } = e;
          t.removePlugin(this.plugin);
        }
        render() {
          return (0, A.createElement)("div", {
            className: "uppy-Container",
            ref: (e) => {
              this.container = e;
            },
            ...iK(this.props),
          });
        }
      }
      (i1.propTypes = {
        uppy: ij.isRequired,
        locale: i$,
        inputName: D.string,
        width: D.string,
        height: D.string,
        note: D.string,
      }),
        (i1.defaultProps = {
          locale: null,
          inputName: "files[]",
          width: "100%",
          height: "100%",
          note: null,
        });
      var i5 = i1;
      let i2 = { target: "body", fixed: !1, hideAfterFinish: !0 };
      class i3 extends U.Z {
        constructor(e, t) {
          super(e, { ...i2, ...t }),
            (this.id = this.opts.id || "ProgressBar"),
            (this.title = "Progress Bar"),
            (this.type = "progressindicator"),
            (this.render = this.render.bind(this));
        }
        render(e) {
          let t = e.totalProgress || 0,
            i = (0 === t || 100 === t) && this.opts.hideAfterFinish;
          return (0, N.h)(
            "div",
            {
              className: "uppy uppy-ProgressBar",
              style: { position: this.opts.fixed ? "fixed" : "initial" },
              "aria-hidden": i,
            },
            (0, N.h)("div", {
              className: "uppy-ProgressBar-inner",
              style: { width: `${t}%` },
            }),
            (0, N.h)("div", { className: "uppy-ProgressBar-percentage" }, t)
          );
        }
        install() {
          let { target: e } = this.opts;
          e && this.mount(e, this);
        }
        uninstall() {
          this.unmount();
        }
      }
      i3.VERSION = "3.1.1";
      class i8 extends A.Component {
        componentDidMount() {
          this.installPlugin();
        }
        componentDidUpdate(e) {
          if (e.uppy !== this.props.uppy)
            this.uninstallPlugin(e), this.installPlugin();
          else if (iZ(this.props, e)) {
            let { uppy: e, ...t } = { ...this.props, target: this.container };
            this.plugin.setOptions(t);
          }
        }
        componentWillUnmount() {
          this.uninstallPlugin();
        }
        installPlugin() {
          let { uppy: e, fixed: t, hideAfterFinish: i } = this.props,
            r = {
              id: "react:ProgressBar",
              fixed: t,
              hideAfterFinish: i,
              target: this.container,
            };
          e.use(i3, r), (this.plugin = e.getPlugin(r.id));
        }
        uninstallPlugin(e) {
          void 0 === e && (e = this.props);
          let { uppy: t } = e;
          t.removePlugin(this.plugin);
        }
        render() {
          return (0, A.createElement)("div", {
            className: "uppy-Container",
            ref: (e) => {
              this.container = e;
            },
            ...iK(this.props),
          });
        }
      }
      (i8.propTypes = {
        uppy: ij.isRequired,
        fixed: D.bool,
        hideAfterFinish: D.bool,
      }),
        (i8.defaultProps = { fixed: !1, hideAfterFinish: !0 });
      class i4 extends A.Component {
        componentDidMount() {
          this.installPlugin();
        }
        componentDidUpdate(e) {
          if (e.uppy !== this.props.uppy)
            this.uninstallPlugin(e), this.installPlugin();
          else if (iZ(this.props, e)) {
            let { uppy: e, ...t } = { ...this.props, target: this.container };
            this.plugin.setOptions(t);
          }
        }
        componentWillUnmount() {
          this.uninstallPlugin();
        }
        installPlugin() {
          let {
              uppy: e,
              hideUploadButton: t,
              hideRetryButton: i,
              hidePauseResumeButton: r,
              hideCancelButton: n,
              showProgressDetails: s,
              hideAfterFinish: o,
              doneButtonHandler: a,
            } = this.props,
            l = {
              id: "react:StatusBar",
              hideUploadButton: t,
              hideRetryButton: i,
              hidePauseResumeButton: r,
              hideCancelButton: n,
              showProgressDetails: s,
              hideAfterFinish: o,
              doneButtonHandler: a,
              target: this.container,
            };
          e.use(ew, l), (this.plugin = e.getPlugin(l.id));
        }
        uninstallPlugin(e) {
          void 0 === e && (e = this.props);
          let { uppy: t } = e;
          t.removePlugin(this.plugin);
        }
        render() {
          return (0, A.createElement)("div", {
            className: "uppy-Container",
            ref: (e) => {
              this.container = e;
            },
            ...iK(this.props),
          });
        }
      }
      (i4.propTypes = {
        uppy: ij.isRequired,
        hideUploadButton: D.bool,
        hideRetryButton: D.bool,
        hidePauseResumeButton: D.bool,
        hideCancelButton: D.bool,
        showProgressDetails: D.bool,
        hideAfterFinish: D.bool,
        doneButtonHandler: D.func,
      }),
        (i4.defaultProps = {
          hideUploadButton: !1,
          hideRetryButton: !1,
          hidePauseResumeButton: !1,
          hideCancelButton: !1,
          showProgressDetails: !1,
          hideAfterFinish: !0,
          doneButtonHandler: null,
        });
      var i6 = { strings: { chooseFiles: "Choose files" } };
      let i7 = { pretty: !0, inputName: "files[]" };
      class i9 extends U.Z {
        constructor(e, t) {
          super(e, { ...i7, ...t }),
            (this.id = this.opts.id || "FileInput"),
            (this.title = "File Input"),
            (this.type = "acquirer"),
            (this.defaultLocale = i6),
            this.i18nInit(),
            (this.render = this.render.bind(this)),
            (this.handleInputChange = this.handleInputChange.bind(this)),
            (this.handleClick = this.handleClick.bind(this));
        }
        addFiles(e) {
          let t = e.map((e) => ({
            source: this.id,
            name: e.name,
            type: e.type,
            data: e,
          }));
          try {
            this.uppy.addFiles(t);
          } catch (e) {
            this.uppy.log(e);
          }
        }
        handleInputChange(e) {
          this.uppy.log("[FileInput] Something selected through input...");
          let t = ek(e.target.files);
          this.addFiles(t), (e.target.value = null);
        }
        handleClick() {
          this.input.click();
        }
        render() {
          let { restrictions: e } = this.uppy.opts,
            t = e.allowedFileTypes ? e.allowedFileTypes.join(",") : void 0;
          return (0, N.h)(
            "div",
            { className: "uppy-FileInput-container" },
            (0, N.h)("input", {
              className: "uppy-FileInput-input",
              style: this.opts.pretty
                ? {
                    width: "0.1px",
                    height: "0.1px",
                    opacity: 0,
                    overflow: "hidden",
                    position: "absolute",
                    zIndex: -1,
                  }
                : void 0,
              type: "file",
              name: this.opts.inputName,
              onChange: this.handleInputChange,
              multiple: 1 !== e.maxNumberOfFiles,
              accept: t,
              ref: (e) => {
                this.input = e;
              },
            }),
            this.opts.pretty &&
              (0, N.h)(
                "button",
                {
                  className: "uppy-FileInput-btn",
                  type: "button",
                  onClick: this.handleClick,
                },
                this.i18n("chooseFiles")
              )
          );
        }
        install() {
          let { target: e } = this.opts;
          e && this.mount(e, this);
        }
        uninstall() {
          this.unmount();
        }
      }
      i9.VERSION = "3.1.0";
      class re extends A.Component {
        componentDidMount() {
          this.installPlugin();
        }
        componentDidUpdate(e) {
          e.uppy !== this.props.uppy &&
            (this.uninstallPlugin(e), this.installPlugin());
        }
        componentWillUnmount() {
          this.uninstallPlugin();
        }
        installPlugin() {
          let { uppy: e, locale: t, pretty: i, inputName: r } = this.props,
            n = {
              id: "react:FileInput",
              locale: t,
              pretty: i,
              inputName: r,
              target: this.container,
            };
          e.use(i9, n), (this.plugin = e.getPlugin(n.id));
        }
        uninstallPlugin(e) {
          void 0 === e && (e = this.props);
          let { uppy: t } = e;
          t.removePlugin(this.plugin);
        }
        render() {
          return (0, A.createElement)("div", {
            className: "uppy-Container",
            ref: (e) => {
              this.container = e;
            },
          });
        }
      }
      (re.propTypes = {
        uppy: ij.isRequired,
        locale: i$,
        pretty: D.bool,
        inputName: D.string,
      }),
        (re.defaultProps = {
          locale: void 0,
          pretty: !0,
          inputName: "files[]",
        });
    },
    19084: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return eS;
        },
      });
      var r = i(40458);
      let n = /^data:([^/]+\/[^,;]+(?:[^,]*?))(;base64)?,([\s\S]*)$/;
      function s(e) {
        return e.startsWith("blob:");
      }
      var o = i(96880),
        a = i(26182),
        l = i(30410).Buffer;
      function u(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      var h = "undefined" != typeof self ? self : global;
      let d = "undefined" != typeof navigator,
        p = d && "undefined" == typeof HTMLImageElement,
        c = !(
          "undefined" == typeof global ||
          void 0 === a ||
          !a.versions ||
          !a.versions.node
        ),
        f = h.Buffer,
        m = !!f,
        g = (e) => void 0 !== e;
      function y(e) {
        return (
          void 0 === e ||
          (e instanceof Map
            ? 0 === e.size
            : 0 === Object.values(e).filter(g).length)
        );
      }
      function v(e) {
        let t = Error(e);
        throw (delete t.stack, t);
      }
      function b(e) {
        let t;
        let i =
          ((t = 0),
          e.ifd0.enabled && (t += 1024),
          e.exif.enabled && (t += 2048),
          e.makerNote && (t += 2048),
          e.userComment && (t += 1024),
          e.gps.enabled && (t += 512),
          e.interop.enabled && (t += 100),
          e.ifd1.enabled && (t += 1024),
          t + 2048);
        return (
          e.jfif.enabled && (i += 50),
          e.xmp.enabled && (i += 2e4),
          e.iptc.enabled && (i += 14e3),
          e.icc.enabled && (i += 6e3),
          i
        );
      }
      let w = (e) => String.fromCharCode.apply(null, e),
        P =
          "undefined" != typeof TextDecoder ? new TextDecoder("utf-8") : void 0;
      class _ {
        static from(e, t) {
          return e instanceof this && e.le === t
            ? e
            : new _(e, void 0, void 0, t);
        }
        constructor(e, t = 0, i, r) {
          if (
            ("boolean" == typeof r && (this.le = r),
            Array.isArray(e) && (e = new Uint8Array(e)),
            0 === e)
          )
            (this.byteOffset = 0), (this.byteLength = 0);
          else if (e instanceof ArrayBuffer) {
            void 0 === i && (i = e.byteLength - t);
            let r = new DataView(e, t, i);
            this._swapDataView(r);
          } else if (
            e instanceof Uint8Array ||
            e instanceof DataView ||
            e instanceof _
          ) {
            void 0 === i && (i = e.byteLength - t),
              (t += e.byteOffset) + i > e.byteOffset + e.byteLength &&
                v("Creating view outside of available memory in ArrayBuffer");
            let r = new DataView(e.buffer, t, i);
            this._swapDataView(r);
          } else if ("number" == typeof e) {
            let t = new DataView(new ArrayBuffer(e));
            this._swapDataView(t);
          } else v("Invalid input argument for BufferView: " + e);
        }
        _swapArrayBuffer(e) {
          this._swapDataView(new DataView(e));
        }
        _swapBuffer(e) {
          this._swapDataView(
            new DataView(e.buffer, e.byteOffset, e.byteLength)
          );
        }
        _swapDataView(e) {
          (this.dataView = e),
            (this.buffer = e.buffer),
            (this.byteOffset = e.byteOffset),
            (this.byteLength = e.byteLength);
        }
        _lengthToEnd(e) {
          return this.byteLength - e;
        }
        set(e, t, i = _) {
          return (
            e instanceof DataView || e instanceof _
              ? (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength))
              : e instanceof ArrayBuffer && (e = new Uint8Array(e)),
            e instanceof Uint8Array ||
              v("BufferView.set(): Invalid data argument."),
            this.toUint8().set(e, t),
            new i(this, t, e.byteLength)
          );
        }
        subarray(e, t) {
          return (t = t || this._lengthToEnd(e)), new _(this, e, t);
        }
        toUint8() {
          return new Uint8Array(this.buffer, this.byteOffset, this.byteLength);
        }
        getUint8Array(e, t) {
          return new Uint8Array(this.buffer, this.byteOffset + e, t);
        }
        getString(e = 0, t = this.byteLength) {
          let i = this.getUint8Array(e, t);
          return P
            ? P.decode(i)
            : m
            ? l.from(i).toString("utf8")
            : decodeURIComponent(escape(w(i)));
        }
        getLatin1String(e = 0, t = this.byteLength) {
          return w(this.getUint8Array(e, t));
        }
        getUnicodeString(e = 0, t = this.byteLength) {
          let i = [];
          for (let r = 0; r < t && e + r < this.byteLength; r += 2)
            i.push(this.getUint16(e + r));
          return w(i);
        }
        getInt8(e) {
          return this.dataView.getInt8(e);
        }
        getUint8(e) {
          return this.dataView.getUint8(e);
        }
        getInt16(e, t = this.le) {
          return this.dataView.getInt16(e, t);
        }
        getInt32(e, t = this.le) {
          return this.dataView.getInt32(e, t);
        }
        getUint16(e, t = this.le) {
          return this.dataView.getUint16(e, t);
        }
        getUint32(e, t = this.le) {
          return this.dataView.getUint32(e, t);
        }
        getFloat32(e, t = this.le) {
          return this.dataView.getFloat32(e, t);
        }
        getFloat64(e, t = this.le) {
          return this.dataView.getFloat64(e, t);
        }
        getFloat(e, t = this.le) {
          return this.dataView.getFloat32(e, t);
        }
        getDouble(e, t = this.le) {
          return this.dataView.getFloat64(e, t);
        }
        getUintBytes(e, t, i) {
          switch (t) {
            case 1:
              return this.getUint8(e, i);
            case 2:
              return this.getUint16(e, i);
            case 4:
              return this.getUint32(e, i);
            case 8:
              return this.getUint64 && this.getUint64(e, i);
          }
        }
        getUint(e, t, i) {
          switch (t) {
            case 8:
              return this.getUint8(e, i);
            case 16:
              return this.getUint16(e, i);
            case 32:
              return this.getUint32(e, i);
            case 64:
              return this.getUint64 && this.getUint64(e, i);
          }
        }
        toString(e) {
          return this.dataView.toString(e, this.constructor.name);
        }
        ensureChunk() {}
      }
      function S(e, t) {
        v(`${e} '${t}' was not loaded, try using full build of exifr.`);
      }
      class C extends Map {
        constructor(e) {
          super(), (this.kind = e);
        }
        get(e, t) {
          var i;
          return (
            this.has(e) || S(this.kind, e),
            t &&
              (e in t || ((i = this.kind), v(`Unknown ${i} '${e}'.`)),
              t[e].enabled || S(this.kind, e)),
            super.get(e)
          );
        }
        keyList() {
          return Array.from(this.keys());
        }
      }
      var E = new C("file parser"),
        F = new C("segment parser"),
        T = new C("file reader");
      let O = h.fetch;
      function k(e, t) {
        return e.startsWith("data:") || e.length > 1e4
          ? A(e, t, "base64")
          : c && e.includes("://")
          ? x(e, t, "url", D)
          : c
          ? A(e, t, "fs")
          : d
          ? x(e, t, "url", D)
          : void v("Invalid input argument");
      }
      async function x(e, t, i, r) {
        return T.has(i)
          ? A(e, t, i)
          : r
          ? (async function (e, t) {
              return new _(await t(e));
            })(e, r)
          : void v(`Parser ${i} is not loaded`);
      }
      async function A(e, t, i) {
        let r = new (T.get(i))(e, t);
        return await r.read(), r;
      }
      let D = (e) => O(e).then((e) => e.arrayBuffer()),
        U = (e) =>
          new Promise((t, i) => {
            let r = new FileReader();
            (r.onloadend = () => t(r.result || new ArrayBuffer())),
              (r.onerror = i),
              r.readAsArrayBuffer(e);
          });
      class R extends Map {
        get tagKeys() {
          return (
            this.allKeys || (this.allKeys = Array.from(this.keys())),
            this.allKeys
          );
        }
        get tagValues() {
          return (
            this.allValues || (this.allValues = Array.from(this.values())),
            this.allValues
          );
        }
      }
      function I(e, t, i) {
        let r = new R();
        for (let [e, t] of i) r.set(e, t);
        if (Array.isArray(t)) for (let i of t) e.set(i, r);
        else e.set(t, r);
        return r;
      }
      function M(e, t, i) {
        let r,
          n = e.get(t);
        for (r of i) n.set(r[0], r[1]);
      }
      let N = new Map(),
        B = new Map(),
        L = new Map(),
        j = [
          "chunked",
          "firstChunkSize",
          "firstChunkSizeNode",
          "firstChunkSizeBrowser",
          "chunkSize",
          "chunkLimit",
        ],
        z = ["jfif", "xmp", "icc", "iptc", "ihdr"],
        $ = ["tiff", ...z],
        q = ["ifd0", "ifd1", "exif", "gps", "interop"],
        H = [...$, ...q],
        V = ["makerNote", "userComment"],
        W = [
          "translateKeys",
          "translateValues",
          "reviveValues",
          "multiSegment",
        ],
        G = [...W, "sanitize", "mergeOutput", "silentErrors"];
      class K {
        get translate() {
          return (
            this.translateKeys || this.translateValues || this.reviveValues
          );
        }
      }
      class Z extends K {
        get needed() {
          return this.enabled || this.deps.size > 0;
        }
        constructor(e, t, i, r) {
          if (
            (super(),
            u(this, "enabled", !1),
            u(this, "skip", new Set()),
            u(this, "pick", new Set()),
            u(this, "deps", new Set()),
            u(this, "translateKeys", !1),
            u(this, "translateValues", !1),
            u(this, "reviveValues", !1),
            (this.key = e),
            (this.enabled = t),
            (this.parse = this.enabled),
            this.applyInheritables(r),
            (this.canBeFiltered = q.includes(e)),
            this.canBeFiltered && (this.dict = N.get(e)),
            void 0 !== i)
          ) {
            if (Array.isArray(i))
              (this.parse = this.enabled = !0),
                this.canBeFiltered &&
                  i.length > 0 &&
                  this.translateTagSet(i, this.pick);
            else if ("object" == typeof i) {
              if (
                ((this.enabled = !0),
                (this.parse = !1 !== i.parse),
                this.canBeFiltered)
              ) {
                let { pick: e, skip: t } = i;
                e && e.length > 0 && this.translateTagSet(e, this.pick),
                  t && t.length > 0 && this.translateTagSet(t, this.skip);
              }
              this.applyInheritables(i);
            } else
              !0 === i || !1 === i
                ? (this.parse = this.enabled = i)
                : v(`Invalid options argument: ${i}`);
          }
        }
        applyInheritables(e) {
          let t, i;
          for (t of W) void 0 !== (i = e[t]) && (this[t] = i);
        }
        translateTagSet(e, t) {
          if (this.dict) {
            let i,
              r,
              { tagKeys: n, tagValues: s } = this.dict;
            for (i of e)
              "string" == typeof i
                ? (-1 === (r = s.indexOf(i)) && (r = n.indexOf(Number(i))),
                  -1 !== r && t.add(Number(n[r])))
                : t.add(i);
          } else for (let i of e) t.add(i);
        }
        finalizeFilters() {
          !this.enabled && this.deps.size > 0
            ? ((this.enabled = !0), et(this.pick, this.deps))
            : this.enabled && this.pick.size > 0 && et(this.pick, this.deps);
        }
      }
      var X = {
          jfif: !1,
          tiff: !0,
          xmp: !1,
          icc: !1,
          iptc: !1,
          ifd0: !0,
          ifd1: !1,
          exif: !0,
          gps: !0,
          interop: !1,
          ihdr: void 0,
          makerNote: !1,
          userComment: !1,
          multiSegment: !1,
          skip: [],
          pick: [],
          translateKeys: !0,
          translateValues: !0,
          reviveValues: !0,
          sanitize: !0,
          mergeOutput: !0,
          silentErrors: !0,
          chunked: !0,
          firstChunkSize: void 0,
          firstChunkSizeNode: 512,
          firstChunkSizeBrowser: 65536,
          chunkSize: 65536,
          chunkLimit: 5,
        },
        Y = new Map();
      class J extends K {
        static useCached(e) {
          let t = Y.get(e);
          return void 0 !== t || ((t = new this(e)), Y.set(e, t)), t;
        }
        constructor(e) {
          super(),
            !0 === e
              ? this.setupFromTrue()
              : void 0 === e
              ? this.setupFromUndefined()
              : Array.isArray(e)
              ? this.setupFromArray(e)
              : "object" == typeof e
              ? this.setupFromObject(e)
              : v(`Invalid options argument ${e}`),
            void 0 === this.firstChunkSize &&
              (this.firstChunkSize = d
                ? this.firstChunkSizeBrowser
                : this.firstChunkSizeNode),
            this.mergeOutput && (this.ifd1.enabled = !1),
            this.filterNestedSegmentTags(),
            this.traverseTiffDependencyTree(),
            this.checkLoadedPlugins();
        }
        setupFromUndefined() {
          let e;
          for (e of j) this[e] = X[e];
          for (e of G) this[e] = X[e];
          for (e of V) this[e] = X[e];
          for (e of H) this[e] = new Z(e, X[e], void 0, this);
        }
        setupFromTrue() {
          let e;
          for (e of j) this[e] = X[e];
          for (e of G) this[e] = X[e];
          for (e of V) this[e] = !0;
          for (e of H) this[e] = new Z(e, !0, void 0, this);
        }
        setupFromArray(e) {
          let t;
          for (t of j) this[t] = X[t];
          for (t of G) this[t] = X[t];
          for (t of V) this[t] = X[t];
          for (t of H) this[t] = new Z(t, !1, void 0, this);
          this.setupGlobalFilters(e, void 0, q);
        }
        setupFromObject(e) {
          let t;
          for (t of ((q.ifd0 = q.ifd0 || q.image),
          (q.ifd1 = q.ifd1 || q.thumbnail),
          Object.assign(this, e),
          j))
            this[t] = ee(e[t], X[t]);
          for (t of G) this[t] = ee(e[t], X[t]);
          for (t of V) this[t] = ee(e[t], X[t]);
          for (t of $) this[t] = new Z(t, X[t], e[t], this);
          for (t of q) this[t] = new Z(t, X[t], e[t], this.tiff);
          this.setupGlobalFilters(e.pick, e.skip, q, H),
            !0 === e.tiff
              ? this.batchEnableWithBool(q, !0)
              : !1 === e.tiff
              ? this.batchEnableWithUserValue(q, e)
              : Array.isArray(e.tiff)
              ? this.setupGlobalFilters(e.tiff, void 0, q)
              : "object" == typeof e.tiff &&
                this.setupGlobalFilters(e.tiff.pick, e.tiff.skip, q);
        }
        batchEnableWithBool(e, t) {
          for (let i of e) this[i].enabled = t;
        }
        batchEnableWithUserValue(e, t) {
          for (let i of e) {
            let e = t[i];
            this[i].enabled = !1 !== e && void 0 !== e;
          }
        }
        setupGlobalFilters(e, t, i, r = i) {
          if (e && e.length) {
            for (let e of r) this[e].enabled = !1;
            for (let [t, r] of Q(e, i))
              et(this[t].pick, r), (this[t].enabled = !0);
          } else if (t && t.length)
            for (let [e, r] of Q(t, i)) et(this[e].skip, r);
        }
        filterNestedSegmentTags() {
          let { ifd0: e, exif: t, xmp: i, iptc: r, icc: n } = this;
          this.makerNote ? t.deps.add(37500) : t.skip.add(37500),
            this.userComment ? t.deps.add(37510) : t.skip.add(37510),
            i.enabled || e.skip.add(700),
            r.enabled || e.skip.add(33723),
            n.enabled || e.skip.add(34675);
        }
        traverseTiffDependencyTree() {
          let { ifd0: e, exif: t, gps: i, interop: r } = this;
          for (let n of (r.needed && (t.deps.add(40965), e.deps.add(40965)),
          t.needed && e.deps.add(34665),
          i.needed && e.deps.add(34853),
          (this.tiff.enabled =
            q.some((e) => !0 === this[e].enabled) ||
            this.makerNote ||
            this.userComment),
          q))
            this[n].finalizeFilters();
        }
        get onlyTiff() {
          return (
            !z.map((e) => this[e].enabled).some((e) => !0 === e) &&
            this.tiff.enabled
          );
        }
        checkLoadedPlugins() {
          for (let e of $)
            this[e].enabled && !F.has(e) && S("segment parser", e);
        }
      }
      function Q(e, t) {
        let i,
          r,
          n,
          s,
          o = [];
        for (n of t) {
          for (s of ((i = N.get(n)), (r = []), i))
            (e.includes(s[0]) || e.includes(s[1])) && r.push(s[0]);
          r.length && o.push([n, r]);
        }
        return o;
      }
      function ee(e, t) {
        return void 0 !== e ? e : void 0 !== t ? t : void 0;
      }
      function et(e, t) {
        for (let i of t) e.add(i);
      }
      u(J, "default", X);
      class ei {
        constructor(e) {
          u(this, "parsers", {}),
            u(this, "output", {}),
            u(this, "errors", []),
            u(this, "pushToErrors", (e) => this.errors.push(e)),
            (this.options = J.useCached(e));
        }
        async read(e) {
          var t;
          this.file = await ((t = this.options),
          "string" == typeof e
            ? k(e, t)
            : d && !p && e instanceof HTMLImageElement
            ? k(e.src, t)
            : e instanceof Uint8Array ||
              e instanceof ArrayBuffer ||
              e instanceof DataView
            ? new _(e)
            : d && e instanceof Blob
            ? x(e, t, "blob", U)
            : void v("Invalid input argument"));
        }
        setup() {
          if (this.fileParser) return;
          let { file: e } = this,
            t = e.getUint16(0);
          for (let [i, r] of E)
            if (r.canHandle(e, t))
              return (
                (this.fileParser = new r(
                  this.options,
                  this.file,
                  this.parsers
                )),
                (e[i] = !0)
              );
          this.file.close && this.file.close(), v("Unknown file format");
        }
        async parse() {
          let { output: e, errors: t } = this;
          return (
            this.setup(),
            this.options.silentErrors
              ? (await this.executeParsers().catch(this.pushToErrors),
                t.push(...this.fileParser.errors))
              : await this.executeParsers(),
            this.file.close && this.file.close(),
            this.options.silentErrors && t.length > 0 && (e.errors = t),
            y(e) ? void 0 : e
          );
        }
        async executeParsers() {
          let { output: e } = this;
          await this.fileParser.parse();
          let t = Object.values(this.parsers).map(async (t) => {
            let i = await t.parse();
            t.assignToOutput(e, i);
          });
          this.options.silentErrors &&
            (t = t.map((e) => e.catch(this.pushToErrors))),
            await Promise.all(t);
        }
        async extractThumbnail() {
          var e;
          this.setup();
          let { options: t, file: i } = this,
            r = F.get("tiff", t);
          if (
            (i.tiff
              ? (e = { start: 0, type: "tiff" })
              : i.jpeg && (e = await this.fileParser.getOrFindSegment("tiff")),
            void 0 === e)
          )
            return;
          let n = await this.fileParser.ensureSegmentChunk(e),
            s = (this.parsers.tiff = new r(n, t, i)),
            o = await s.extractThumbnail();
          return i.close && i.close(), o;
        }
      }
      async function er(e, t) {
        let i = new ei(t);
        return await i.read(e), i.parse();
      }
      var en = Object.freeze({
        __proto__: null,
        parse: er,
        Exifr: ei,
        fileParsers: E,
        segmentParsers: F,
        fileReaders: T,
        tagKeys: N,
        tagValues: B,
        tagRevivers: L,
        createDictionary: I,
        extendDictionary: M,
        fetchUrlAsArrayBuffer: D,
        readBlobAsArrayBuffer: U,
        chunkedProps: j,
        otherSegments: z,
        segments: $,
        tiffBlocks: q,
        segmentsAndBlocks: H,
        tiffExtractables: V,
        inheritables: W,
        allFormatters: G,
        Options: J,
      });
      class es {
        static findPosition(e, t) {
          let i = e.getUint16(t + 2) + 2,
            r =
              "function" == typeof this.headerLength
                ? this.headerLength(e, t, i)
                : this.headerLength,
            n = t + r,
            s = i - r;
          return {
            offset: t,
            length: i,
            headerLength: r,
            start: n,
            size: s,
            end: n + s,
          };
        }
        static parse(e, t = {}) {
          return new this(e, new J({ [this.type]: t }), e).parse();
        }
        normalizeInput(e) {
          return e instanceof _ ? e : new _(e);
        }
        constructor(e, t = {}, i) {
          u(this, "errors", []),
            u(this, "raw", new Map()),
            u(this, "handleError", (e) => {
              if (!this.options.silentErrors) throw e;
              this.errors.push(e.message);
            }),
            (this.chunk = this.normalizeInput(e)),
            (this.file = i),
            (this.type = this.constructor.type),
            (this.globalOptions = this.options = t),
            (this.localOptions = t[this.type]),
            (this.canTranslate =
              this.localOptions && this.localOptions.translate);
        }
        translate() {
          this.canTranslate &&
            (this.translated = this.translateBlock(this.raw, this.type));
        }
        get output() {
          return this.translated
            ? this.translated
            : this.raw
            ? Object.fromEntries(this.raw)
            : void 0;
        }
        translateBlock(e, t) {
          let i = L.get(t),
            r = B.get(t),
            n = N.get(t),
            s = this.options[t],
            o = s.reviveValues && !!i,
            a = s.translateValues && !!r,
            l = s.translateKeys && !!n,
            u = {};
          for (let [t, s] of e)
            o && i.has(t)
              ? (s = i.get(t)(s))
              : a && r.has(t) && (s = this.translateValue(s, r.get(t))),
              l && n.has(t) && (t = n.get(t) || t),
              (u[t] = s);
          return u;
        }
        translateValue(e, t) {
          return t[e] || t.DEFAULT || e;
        }
        assignToOutput(e, t) {
          this.assignObjectToOutput(e, this.constructor.type, t);
        }
        assignObjectToOutput(e, t, i) {
          if (this.globalOptions.mergeOutput) return Object.assign(e, i);
          e[t] ? Object.assign(e[t], i) : (e[t] = i);
        }
      }
      u(es, "headerLength", 4),
        u(es, "type", void 0),
        u(es, "multiSegment", !1),
        u(es, "canHandle", () => !1);
      class eo extends class {
        constructor(e, t, i) {
          u(this, "errors", []),
            u(this, "ensureSegmentChunk", async (e) => {
              let t = e.start,
                i = e.size || 65536;
              if (this.file.chunked) {
                if (this.file.available(t, i))
                  e.chunk = this.file.subarray(t, i);
                else
                  try {
                    e.chunk = await this.file.readChunk(t, i);
                  } catch (t) {
                    v(
                      `Couldn't read segment: ${JSON.stringify(e)}. ${
                        t.message
                      }`
                    );
                  }
              } else
                this.file.byteLength > t + i
                  ? (e.chunk = this.file.subarray(t, i))
                  : void 0 === e.size
                  ? (e.chunk = this.file.subarray(t))
                  : v("Segment unreachable: " + JSON.stringify(e));
              return e.chunk;
            }),
            this.extendOptions && this.extendOptions(e),
            (this.options = e),
            (this.file = t),
            (this.parsers = i);
        }
        injectSegment(e, t) {
          this.options[e].enabled && this.createParser(e, t);
        }
        createParser(e, t) {
          let i = new (F.get(e))(t, this.options, this.file);
          return (this.parsers[e] = i);
        }
        createParsers(e) {
          for (let t of e) {
            let { type: e, chunk: i } = t,
              r = this.options[e];
            if (r && r.enabled) {
              let t = this.parsers[e];
              (t && t.append) || t || this.createParser(e, i);
            }
          }
        }
        async readSegments(e) {
          let t = e.map(this.ensureSegmentChunk);
          await Promise.all(t);
        }
      } {
        constructor(...e) {
          super(...e),
            u(this, "appSegments", []),
            u(this, "jpegSegments", []),
            u(this, "unknownSegments", []);
        }
        static canHandle(e, t) {
          return 65496 === t;
        }
        async parse() {
          await this.findAppSegments(),
            await this.readSegments(this.appSegments),
            this.mergeMultiSegments(),
            this.createParsers(this.mergedAppSegments || this.appSegments);
        }
        setupSegmentFinderArgs(e) {
          !0 === e
            ? ((this.findAll = !0), (this.wanted = new Set(F.keyList())))
            : ((e =
                void 0 === e
                  ? F.keyList().filter((e) => this.options[e].enabled)
                  : e.filter((e) => this.options[e].enabled && F.has(e))),
              (this.findAll = !1),
              (this.remaining = new Set(e)),
              (this.wanted = new Set(e))),
            (this.unfinishedMultiSegment = !1);
        }
        async findAppSegments(e = 0, t) {
          this.setupSegmentFinderArgs(t);
          let { file: i, findAll: r, wanted: n, remaining: s } = this;
          if (
            (!r &&
              this.file.chunked &&
              (r = Array.from(n).some((e) => {
                let t = F.get(e),
                  i = this.options[e];
                return t.multiSegment && i.multiSegment;
              })) &&
              (await this.file.readWhole()),
            (e = this.findAppSegmentsInRange(e, i.byteLength)),
            !this.options.onlyTiff && i.chunked)
          ) {
            let t = !1;
            for (
              ;
              s.size > 0 &&
              !t &&
              (i.canReadNextChunk || this.unfinishedMultiSegment);

            ) {
              let { nextChunkOffset: r } = i,
                n = this.appSegments.some(
                  (e) =>
                    !this.file.available(
                      e.offset || e.start,
                      e.length || e.size
                    )
                );
              if (
                ((t =
                  e > r && !n
                    ? !(await i.readNextChunk(e))
                    : !(await i.readNextChunk(r))),
                void 0 === (e = this.findAppSegmentsInRange(e, i.byteLength)))
              )
                return;
            }
          }
        }
        findAppSegmentsInRange(e, t) {
          t -= 2;
          let i,
            r,
            n,
            s,
            o,
            a,
            { file: l, findAll: u, wanted: h, remaining: d, options: p } = this;
          for (; e < t; e++)
            if (255 === l.getUint8(e)) {
              var c;
              if ((c = i = l.getUint8(e + 1)) >= 224 && c <= 239) {
                if (
                  ((r = l.getUint16(e + 2)),
                  (n = (function (e, t, i) {
                    for (let [r, n] of F) if (n.canHandle(e, t, i)) return r;
                  })(l, e, r)) &&
                    h.has(n) &&
                    ((o = (s = F.get(n)).findPosition(l, e)),
                    (a = p[n]),
                    (o.type = n),
                    this.appSegments.push(o),
                    !u &&
                      (s.multiSegment && a.multiSegment
                        ? ((this.unfinishedMultiSegment =
                            o.chunkNumber < o.chunkCount),
                          this.unfinishedMultiSegment || d.delete(n))
                        : d.delete(n),
                      0 === d.size)))
                )
                  break;
                p.recordUnknownSegments &&
                  (((o = es.findPosition(l, e)).marker = i),
                  this.unknownSegments.push(o)),
                  (e += r + 1);
              } else if (
                192 === i ||
                194 === i ||
                196 === i ||
                219 === i ||
                221 === i ||
                218 === i ||
                254 === i
              ) {
                if (
                  ((r = l.getUint16(e + 2)), 218 === i && !1 !== p.stopAfterSos)
                )
                  return;
                p.recordJpegSegments &&
                  this.jpegSegments.push({ offset: e, length: r, marker: i }),
                  (e += r + 1);
              }
            }
          return e;
        }
        mergeMultiSegments() {
          if (!this.appSegments.some((e) => e.multiSegment)) return;
          let e = (function (e, t) {
            let i,
              r,
              n,
              s = new Map();
            for (let o = 0; o < e.length; o++)
              (r = (i = e[o])[t]),
                s.has(r) ? (n = s.get(r)) : s.set(r, (n = [])),
                n.push(i);
            return Array.from(s);
          })(this.appSegments, "type");
          this.mergedAppSegments = e.map(([e, t]) => {
            let i = F.get(e, this.options);
            return i.handleMultiSegments
              ? { type: e, chunk: i.handleMultiSegments(t) }
              : t[0];
          });
        }
        getSegment(e) {
          return this.appSegments.find((t) => t.type === e);
        }
        async getOrFindSegment(e) {
          let t = this.getSegment(e);
          return (
            void 0 === t &&
              (await this.findAppSegments(0, [e]), (t = this.getSegment(e))),
            t
          );
        }
      }
      u(eo, "type", "jpeg"), E.set("jpeg", eo);
      let ea = [void 0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, 4];
      class el extends es {
        parseHeader() {
          var e = this.chunk.getUint16();
          18761 === e ? (this.le = !0) : 19789 === e && (this.le = !1),
            (this.chunk.le = this.le),
            (this.headerParsed = !0);
        }
        parseTags(e, t, i = new Map()) {
          let { pick: r, skip: n } = this.options[t],
            s = (r = new Set(r)).size > 0,
            o = 0 === n.size,
            a = this.chunk.getUint16(e);
          e += 2;
          for (let l = 0; l < a; l++) {
            let a = this.chunk.getUint16(e);
            if (s) {
              if (
                r.has(a) &&
                (i.set(a, this.parseTag(e, a, t)), r.delete(a), 0 === r.size)
              )
                break;
            } else (!o && n.has(a)) || i.set(a, this.parseTag(e, a, t));
            e += 12;
          }
          return i;
        }
        parseTag(e, t, i) {
          var r;
          let { chunk: n } = this,
            s = n.getUint16(e + 2),
            o = n.getUint32(e + 4),
            a = ea[s];
          if (
            (a * o <= 4 ? (e += 8) : (e = n.getUint32(e + 8)),
            (s < 1 || s > 13) &&
              v(
                `Invalid TIFF value type. block: ${i.toUpperCase()}, tag: ${t.toString(
                  16
                )}, type: ${s}, offset ${e}`
              ),
            e > n.byteLength &&
              v(
                `Invalid TIFF value offset. block: ${i.toUpperCase()}, tag: ${t.toString(
                  16
                )}, type: ${s}, offset ${e} is outside of chunk size ${
                  n.byteLength
                }`
              ),
            1 === s)
          )
            return n.getUint8Array(e, o);
          if (2 === s)
            return "" ===
              (r = (function (e) {
                for (; e.endsWith("\x00"); ) e = e.slice(0, -1);
                return e;
              })((r = n.getString(e, o))).trim())
              ? void 0
              : r;
          if (7 === s) return n.getUint8Array(e, o);
          if (1 === o) return this.parseTagValue(s, e);
          {
            let t = new ((function (e) {
              switch (e) {
                case 1:
                  return Uint8Array;
                case 3:
                  return Uint16Array;
                case 4:
                  return Uint32Array;
                case 5:
                case 10:
                default:
                  return Array;
                case 6:
                  return Int8Array;
                case 8:
                  return Int16Array;
                case 9:
                  return Int32Array;
                case 11:
                  return Float32Array;
                case 12:
                  return Float64Array;
              }
            })(s))(o);
            for (let i = 0; i < o; i++)
              (t[i] = this.parseTagValue(s, e)), (e += a);
            return t;
          }
        }
        parseTagValue(e, t) {
          let { chunk: i } = this;
          switch (e) {
            case 1:
              return i.getUint8(t);
            case 3:
              return i.getUint16(t);
            case 4:
            case 13:
              return i.getUint32(t);
            case 5:
              return i.getUint32(t) / i.getUint32(t + 4);
            case 6:
              return i.getInt8(t);
            case 8:
              return i.getInt16(t);
            case 9:
              return i.getInt32(t);
            case 10:
              return i.getInt32(t) / i.getInt32(t + 4);
            case 11:
              return i.getFloat(t);
            case 12:
              return i.getDouble(t);
            default:
              v(`Invalid tiff type ${e}`);
          }
        }
      }
      class eu extends el {
        static canHandle(e, t) {
          return (
            225 === e.getUint8(t + 1) &&
            1165519206 === e.getUint32(t + 4) &&
            0 === e.getUint16(t + 8)
          );
        }
        async parse() {
          this.parseHeader();
          let { options: e } = this;
          return (
            e.ifd0.enabled && (await this.parseIfd0Block()),
            e.exif.enabled && (await this.safeParse("parseExifBlock")),
            e.gps.enabled && (await this.safeParse("parseGpsBlock")),
            e.interop.enabled && (await this.safeParse("parseInteropBlock")),
            e.ifd1.enabled && (await this.safeParse("parseThumbnailBlock")),
            this.createOutput()
          );
        }
        safeParse(e) {
          let t = this[e]();
          return void 0 !== t.catch && (t = t.catch(this.handleError)), t;
        }
        findIfd0Offset() {
          void 0 === this.ifd0Offset &&
            (this.ifd0Offset = this.chunk.getUint32(4));
        }
        findIfd1Offset() {
          if (void 0 === this.ifd1Offset) {
            this.findIfd0Offset();
            let e = this.chunk.getUint16(this.ifd0Offset),
              t = this.ifd0Offset + 2 + 12 * e;
            this.ifd1Offset = this.chunk.getUint32(t);
          }
        }
        parseBlock(e, t) {
          let i = new Map();
          return (this[t] = i), this.parseTags(e, t, i), i;
        }
        async parseIfd0Block() {
          if (this.ifd0) return;
          let { file: e } = this;
          this.findIfd0Offset(),
            this.ifd0Offset < 8 && v("Malformed EXIF data"),
            !e.chunked &&
              this.ifd0Offset > e.byteLength &&
              v(`IFD0 offset points to outside of file.
this.ifd0Offset: ${this.ifd0Offset}, file.byteLength: ${e.byteLength}`),
            e.tiff && (await e.ensureChunk(this.ifd0Offset, b(this.options)));
          let t = this.parseBlock(this.ifd0Offset, "ifd0");
          return 0 !== t.size
            ? ((this.exifOffset = t.get(34665)),
              (this.interopOffset = t.get(40965)),
              (this.gpsOffset = t.get(34853)),
              (this.xmp = t.get(700)),
              (this.iptc = t.get(33723)),
              (this.icc = t.get(34675)),
              this.options.sanitize &&
                (t.delete(34665),
                t.delete(40965),
                t.delete(34853),
                t.delete(700),
                t.delete(33723),
                t.delete(34675)),
              t)
            : void 0;
        }
        async parseExifBlock() {
          if (
            this.exif ||
            (this.ifd0 || (await this.parseIfd0Block()),
            void 0 === this.exifOffset)
          )
            return;
          this.file.tiff &&
            (await this.file.ensureChunk(this.exifOffset, b(this.options)));
          let e = this.parseBlock(this.exifOffset, "exif");
          return (
            this.interopOffset || (this.interopOffset = e.get(40965)),
            (this.makerNote = e.get(37500)),
            (this.userComment = e.get(37510)),
            this.options.sanitize &&
              (e.delete(40965), e.delete(37500), e.delete(37510)),
            this.unpack(e, 41728),
            this.unpack(e, 41729),
            e
          );
        }
        unpack(e, t) {
          let i = e.get(t);
          i && 1 === i.length && e.set(t, i[0]);
        }
        async parseGpsBlock() {
          if (
            this.gps ||
            (this.ifd0 || (await this.parseIfd0Block()),
            void 0 === this.gpsOffset)
          )
            return;
          let e = this.parseBlock(this.gpsOffset, "gps");
          return (
            e &&
              e.has(2) &&
              e.has(4) &&
              (e.set("latitude", eh(...e.get(2), e.get(1))),
              e.set("longitude", eh(...e.get(4), e.get(3)))),
            e
          );
        }
        async parseInteropBlock() {
          if (
            !this.interop &&
            (this.ifd0 || (await this.parseIfd0Block()),
            void 0 !== this.interopOffset ||
              this.exif ||
              (await this.parseExifBlock()),
            void 0 !== this.interopOffset)
          )
            return this.parseBlock(this.interopOffset, "interop");
        }
        async parseThumbnailBlock(e = !1) {
          if (
            !this.ifd1 &&
            !this.ifd1Parsed &&
            (!this.options.mergeOutput || e)
          )
            return (
              this.findIfd1Offset(),
              this.ifd1Offset > 0 &&
                (this.parseBlock(this.ifd1Offset, "ifd1"),
                (this.ifd1Parsed = !0)),
              this.ifd1
            );
        }
        async extractThumbnail() {
          if (
            (this.headerParsed || this.parseHeader(),
            this.ifd1Parsed || (await this.parseThumbnailBlock(!0)),
            void 0 === this.ifd1)
          )
            return;
          let e = this.ifd1.get(513),
            t = this.ifd1.get(514);
          return this.chunk.getUint8Array(e, t);
        }
        get image() {
          return this.ifd0;
        }
        get thumbnail() {
          return this.ifd1;
        }
        createOutput() {
          let e,
            t,
            i,
            r = {};
          for (t of q)
            if (!y((e = this[t]))) {
              if (
                ((i = this.canTranslate
                  ? this.translateBlock(e, t)
                  : Object.fromEntries(e)),
                this.options.mergeOutput)
              ) {
                if ("ifd1" === t) continue;
                Object.assign(r, i);
              } else r[t] = i;
            }
          return (
            this.makerNote && (r.makerNote = this.makerNote),
            this.userComment && (r.userComment = this.userComment),
            r
          );
        }
        assignToOutput(e, t) {
          if (this.globalOptions.mergeOutput) Object.assign(e, t);
          else
            for (let [i, r] of Object.entries(t))
              this.assignObjectToOutput(e, i, r);
        }
      }
      function eh(e, t, i, r) {
        var n = e + t / 60 + i / 3600;
        return ("S" !== r && "W" !== r) || (n *= -1), n;
      }
      u(eu, "type", "tiff"),
        u(eu, "headerLength", 10),
        F.set("tiff", eu),
        Object.freeze({
          __proto__: null,
          default: en,
          Exifr: ei,
          fileParsers: E,
          segmentParsers: F,
          fileReaders: T,
          tagKeys: N,
          tagValues: B,
          tagRevivers: L,
          createDictionary: I,
          extendDictionary: M,
          fetchUrlAsArrayBuffer: D,
          readBlobAsArrayBuffer: U,
          chunkedProps: j,
          otherSegments: z,
          segments: $,
          tiffBlocks: q,
          segmentsAndBlocks: H,
          tiffExtractables: V,
          inheritables: W,
          allFormatters: G,
          Options: J,
          parse: er,
        });
      let ed = {
        ifd0: !1,
        ifd1: !1,
        exif: !1,
        gps: !1,
        interop: !1,
        sanitize: !1,
        reviveValues: !0,
        translateKeys: !1,
        translateValues: !1,
        mergeOutput: !1,
      };
      Object.assign({}, ed, { firstChunkSize: 4e4, gps: [1, 2, 3, 4] }),
        Object.assign({}, ed, { tiff: !1, ifd1: !0, mergeOutput: !1 });
      let ep = Object.assign({}, ed, { firstChunkSize: 4e4, ifd0: [274] });
      async function ec(e) {
        let t = new ei(ep);
        await t.read(e);
        let i = await t.parse();
        if (i && i.ifd0) return i.ifd0[274];
      }
      let ef = Object.freeze({
          1: { dimensionSwapped: !1, scaleX: 1, scaleY: 1, deg: 0, rad: 0 },
          2: { dimensionSwapped: !1, scaleX: -1, scaleY: 1, deg: 0, rad: 0 },
          3: {
            dimensionSwapped: !1,
            scaleX: 1,
            scaleY: 1,
            deg: 180,
            rad: (180 * Math.PI) / 180,
          },
          4: {
            dimensionSwapped: !1,
            scaleX: -1,
            scaleY: 1,
            deg: 180,
            rad: (180 * Math.PI) / 180,
          },
          5: {
            dimensionSwapped: !0,
            scaleX: 1,
            scaleY: -1,
            deg: 90,
            rad: (90 * Math.PI) / 180,
          },
          6: {
            dimensionSwapped: !0,
            scaleX: 1,
            scaleY: 1,
            deg: 90,
            rad: (90 * Math.PI) / 180,
          },
          7: {
            dimensionSwapped: !0,
            scaleX: 1,
            scaleY: -1,
            deg: 270,
            rad: (270 * Math.PI) / 180,
          },
          8: {
            dimensionSwapped: !0,
            scaleX: 1,
            scaleY: 1,
            deg: 270,
            rad: (270 * Math.PI) / 180,
          },
        }),
        em = !0,
        eg = !0;
      if ("object" == typeof navigator) {
        let e = navigator.userAgent;
        if (e.includes("iPad") || e.includes("iPhone")) {
          let t = e.match(/OS (\d+)_(\d+)/);
          if (t) {
            let [, e, i] = t;
            (em = Number(e) + 0.1 * Number(i) < 13.4), (eg = !1);
          }
        } else if (e.includes("OS X 10")) {
          let [, t] = e.match(/OS X 10[_.](\d+)/);
          em = eg = 15 > Number(t);
        }
        if (e.includes("Chrome/")) {
          let [, t] = e.match(/Chrome\/(\d+)/);
          em = eg = 81 > Number(t);
        } else if (e.includes("Firefox/")) {
          let [, t] = e.match(/Firefox\/(\d+)/);
          em = eg = 77 > Number(t);
        }
      }
      async function ey(e) {
        let t = await ec(e);
        return Object.assign({ canvas: em, css: eg }, ef[t]);
      }
      class ev extends _ {
        constructor(...e) {
          super(...e),
            u(this, "ranges", new eb()),
            0 !== this.byteLength && this.ranges.add(0, this.byteLength);
        }
        _tryExtend(e, t, i) {
          if (0 === e && 0 === this.byteLength && i) {
            let e = new DataView(i.buffer || i, i.byteOffset, i.byteLength);
            this._swapDataView(e);
          } else {
            let i = e + t;
            if (i > this.byteLength) {
              let { dataView: e } = this._extend(i);
              this._swapDataView(e);
            }
          }
        }
        _extend(e) {
          let t;
          t = m ? f.allocUnsafe(e) : new Uint8Array(e);
          let i = new DataView(t.buffer, t.byteOffset, t.byteLength);
          return (
            t.set(
              new Uint8Array(this.buffer, this.byteOffset, this.byteLength),
              0
            ),
            { uintView: t, dataView: i }
          );
        }
        subarray(e, t, i = !1) {
          return (
            (t = t || this._lengthToEnd(e)),
            i && this._tryExtend(e, t),
            this.ranges.add(e, t),
            super.subarray(e, t)
          );
        }
        set(e, t, i = !1) {
          i && this._tryExtend(t, e.byteLength, e);
          let r = super.set(e, t);
          return this.ranges.add(t, r.byteLength), r;
        }
        async ensureChunk(e, t) {
          this.chunked &&
            (this.ranges.available(e, t) || (await this.readChunk(e, t)));
        }
        available(e, t) {
          return this.ranges.available(e, t);
        }
      }
      class eb {
        constructor() {
          u(this, "list", []);
        }
        get length() {
          return this.list.length;
        }
        add(e, t, i = 0) {
          let r = e + t,
            n = this.list.filter((t) => {
              var i, n, s, o, a, l;
              return (
                (i = e),
                (n = t.offset),
                (s = r),
                (i <= n && n <= s) ||
                  ((o = e), (a = t.end), (l = r), o <= a && a <= l)
              );
            });
          if (n.length > 0) {
            (e = Math.min(e, ...n.map((e) => e.offset))),
              (t = (r = Math.max(r, ...n.map((e) => e.end))) - e);
            let i = n.shift();
            (i.offset = e),
              (i.length = t),
              (i.end = r),
              (this.list = this.list.filter((e) => !n.includes(e)));
          } else this.list.push({ offset: e, length: t, end: r });
        }
        available(e, t) {
          let i = e + t;
          return this.list.some((t) => t.offset <= e && i <= t.end);
        }
      }
      class ew extends ev {
        constructor(e, t) {
          super(0),
            u(this, "chunksRead", 0),
            (this.input = e),
            (this.options = t);
        }
        async readWhole() {
          (this.chunked = !1), await this.readChunk(this.nextChunkOffset);
        }
        async readChunked() {
          (this.chunked = !0),
            await this.readChunk(0, this.options.firstChunkSize);
        }
        async readNextChunk(e = this.nextChunkOffset) {
          if (this.fullyRead) return this.chunksRead++, !1;
          let t = this.options.chunkSize,
            i = await this.readChunk(e, t);
          return !!i && i.byteLength === t;
        }
        async readChunk(e, t) {
          if ((this.chunksRead++, 0 !== (t = this.safeWrapAddress(e, t))))
            return this._readChunk(e, t);
        }
        safeWrapAddress(e, t) {
          return void 0 !== this.size && e + t > this.size
            ? Math.max(0, this.size - e)
            : t;
        }
        get nextChunkOffset() {
          if (0 !== this.ranges.list.length) return this.ranges.list[0].length;
        }
        get canReadNextChunk() {
          return this.chunksRead < this.options.chunkLimit;
        }
        get fullyRead() {
          return void 0 !== this.size && this.nextChunkOffset === this.size;
        }
        read() {
          return this.options.chunked ? this.readChunked() : this.readWhole();
        }
        close() {}
      }
      T.set(
        "blob",
        class extends ew {
          async readWhole() {
            this.chunked = !1;
            let e = await U(this.input);
            this._swapArrayBuffer(e);
          }
          readChunked() {
            return (
              (this.chunked = !0),
              (this.size = this.input.size),
              super.readChunked()
            );
          }
          async _readChunk(e, t) {
            let i = t ? e + t : void 0,
              r = this.input.slice(e, i),
              n = await U(r);
            return this.set(n, e, !0);
          }
        }
      );
      var eP = {
        strings: { generatingThumbnails: "Generating thumbnails..." },
      };
      let e_ = {
        thumbnailWidth: null,
        thumbnailHeight: null,
        thumbnailType: "image/jpeg",
        waitForThumbnailsBeforeUpload: !1,
        lazy: !1,
      };
      class eS extends r.Z {
        constructor(e, t) {
          if (
            (super(e, { ...e_, ...t }),
            (this.onFileAdded = (e) => {
              !e.preview &&
                e.data &&
                (0, o.Z)(e.type) &&
                !e.isRemote &&
                this.addToQueue(e.id);
            }),
            (this.onCancelRequest = (e) => {
              let t = this.queue.indexOf(e.id);
              -1 !== t && this.queue.splice(t, 1);
            }),
            (this.onFileRemoved = (e) => {
              let t = this.queue.indexOf(e.id);
              -1 !== t && this.queue.splice(t, 1),
                e.preview && s(e.preview) && URL.revokeObjectURL(e.preview);
            }),
            (this.onRestored = () => {
              this.uppy
                .getFiles()
                .filter((e) => e.isRestored)
                .forEach((e) => {
                  (!e.preview || s(e.preview)) && this.addToQueue(e.id);
                });
            }),
            (this.onAllFilesRemoved = () => {
              this.queue = [];
            }),
            (this.waitUntilAllProcessed = (e) => {
              e.forEach((e) => {
                let t = this.uppy.getFile(e);
                this.uppy.emit("preprocess-progress", t, {
                  mode: "indeterminate",
                  message: this.i18n("generatingThumbnails"),
                });
              });
              let t = () => {
                e.forEach((e) => {
                  let t = this.uppy.getFile(e);
                  this.uppy.emit("preprocess-complete", t);
                });
              };
              return new Promise((e) => {
                this.queueProcessing
                  ? this.uppy.once("thumbnail:all-generated", () => {
                      t(), e();
                    })
                  : (t(), e());
              });
            }),
            (this.type = "modifier"),
            (this.id = this.opts.id || "ThumbnailGenerator"),
            (this.title = "Thumbnail Generator"),
            (this.queue = []),
            (this.queueProcessing = !1),
            (this.defaultThumbnailDimension = 200),
            (this.thumbnailType = this.opts.thumbnailType),
            (this.defaultLocale = eP),
            this.i18nInit(),
            this.opts.lazy && this.opts.waitForThumbnailsBeforeUpload)
          )
            throw Error(
              "ThumbnailGenerator: The `lazy` and `waitForThumbnailsBeforeUpload` options are mutually exclusive. Please ensure at most one of them is set to `true`."
            );
        }
        createThumbnail(e, t, i) {
          let r = URL.createObjectURL(e.data);
          return Promise.all([
            new Promise((e, t) => {
              let i = new Image();
              (i.src = r),
                i.addEventListener("load", () => {
                  URL.revokeObjectURL(r), e(i);
                }),
                i.addEventListener("error", (e) => {
                  URL.revokeObjectURL(r),
                    t(e.error || Error("Could not create thumbnail"));
                });
            }),
            ey(e.data).catch(() => 1),
          ])
            .then((e) => {
              let [r, s] = e,
                o = this.getProportionalDimensions(r, t, i, s.deg),
                a = (function (e, t) {
                  let i = e.width,
                    r = e.height;
                  (90 === t.deg || 270 === t.deg) &&
                    ((i = e.height), (r = e.width));
                  let n = document.createElement("canvas");
                  (n.width = i), (n.height = r);
                  let s = n.getContext("2d");
                  return (
                    s.translate(i / 2, r / 2),
                    t.canvas && (s.rotate(t.rad), s.scale(t.scaleX, t.scaleY)),
                    s.drawImage(
                      e,
                      -e.width / 2,
                      -e.height / 2,
                      e.width,
                      e.height
                    ),
                    n
                  );
                })(r, s);
              return (function (e, t, i) {
                try {
                  e.getContext("2d").getImageData(0, 0, 1, 1);
                } catch (e) {
                  if (18 === e.code)
                    return Promise.reject(
                      Error(
                        "cannot read image, probably an svg with external resources"
                      )
                    );
                }
                return e.toBlob
                  ? new Promise((r) => {
                      e.toBlob(r, t, i);
                    }).then((e) => {
                      if (null === e)
                        throw Error(
                          "cannot read image, probably an svg with external resources"
                        );
                      return e;
                    })
                  : Promise.resolve()
                      .then(() =>
                        (function (e, t, i) {
                          var r, s;
                          let o;
                          let a = n.exec(e),
                            l =
                              null !=
                              (r =
                                null != (s = t.mimeType)
                                  ? s
                                  : null == a
                                  ? void 0
                                  : a[1])
                                ? r
                                : "plain/text";
                          if ((null == a ? void 0 : a[2]) != null) {
                            let e = atob(decodeURIComponent(a[3])),
                              t = new Uint8Array(e.length);
                            for (let i = 0; i < e.length; i++)
                              t[i] = e.charCodeAt(i);
                            o = [t];
                          } else
                            (null == a ? void 0 : a[3]) != null &&
                              (o = [decodeURIComponent(a[3])]);
                          return new Blob(o, { type: l });
                        })(e.toDataURL(t, i), {})
                      )
                      .then((e) => {
                        if (null === e)
                          throw Error(
                            "could not extract blob, probably an old browser"
                          );
                        return e;
                      });
              })(
                this.resizeImage(a, o.width, o.height),
                this.thumbnailType,
                80
              );
            })
            .then((e) => URL.createObjectURL(e));
        }
        getProportionalDimensions(e, t, i, r) {
          let n = e.width / e.height;
          return ((90 === r || 270 === r) && (n = e.height / e.width),
          null != t)
            ? { width: t, height: Math.round(t / n) }
            : null != i
            ? { width: Math.round(i * n), height: i }
            : {
                width: this.defaultThumbnailDimension,
                height: Math.round(this.defaultThumbnailDimension / n),
              };
        }
        resizeImage(e, t, i) {
          let r = (function (e) {
              let t = e.width / e.height,
                i = Math.floor(Math.sqrt(5e6 * t)),
                r = Math.floor(5e6 / Math.sqrt(5e6 * t));
              if (
                (i > 4096 && (r = Math.round((i = 4096) / t)),
                r > 4096 && (i = Math.round(t * (r = 4096))),
                e.width > i)
              ) {
                let t = document.createElement("canvas");
                return (
                  (t.width = i),
                  (t.height = r),
                  t.getContext("2d").drawImage(e, 0, 0, i, r),
                  t
                );
              }
              return e;
            })(e),
            n = Math.ceil(Math.log2(r.width / t));
          n < 1 && (n = 1);
          let s = t * 2 ** (n - 1),
            o = i * 2 ** (n - 1);
          for (; n--; ) {
            let e = document.createElement("canvas");
            (e.width = s),
              (e.height = o),
              e.getContext("2d").drawImage(r, 0, 0, s, o),
              (r = e),
              (s = Math.round(s / 2)),
              (o = Math.round(o / 2));
          }
          return r;
        }
        setPreviewURL(e, t) {
          this.uppy.setFileState(e, { preview: t });
        }
        addToQueue(e) {
          this.queue.push(e),
            !1 === this.queueProcessing && this.processQueue();
        }
        processQueue() {
          if (((this.queueProcessing = !0), this.queue.length > 0)) {
            let e = this.uppy.getFile(this.queue.shift());
            return e
              ? this.requestThumbnail(e)
                  .catch(() => {})
                  .then(() => this.processQueue())
              : (this.uppy.log(
                  "[ThumbnailGenerator] file was removed before a thumbnail could be generated, but not removed from the queue. This is probably a bug",
                  "error"
                ),
                Promise.resolve());
          }
          return (
            (this.queueProcessing = !1),
            this.uppy.log("[ThumbnailGenerator] Emptied thumbnail queue"),
            this.uppy.emit("thumbnail:all-generated"),
            Promise.resolve()
          );
        }
        requestThumbnail(e) {
          return (0, o.Z)(e.type) && !e.isRemote
            ? this.createThumbnail(
                e,
                this.opts.thumbnailWidth,
                this.opts.thumbnailHeight
              )
                .then((t) => {
                  this.setPreviewURL(e.id, t),
                    this.uppy.log(
                      `[ThumbnailGenerator] Generated thumbnail for ${e.id}`
                    ),
                    this.uppy.emit(
                      "thumbnail:generated",
                      this.uppy.getFile(e.id),
                      t
                    );
                })
                .catch((t) => {
                  this.uppy.log(
                    `[ThumbnailGenerator] Failed thumbnail for ${e.id}:`,
                    "warning"
                  ),
                    this.uppy.log(t, "warning"),
                    this.uppy.emit(
                      "thumbnail:error",
                      this.uppy.getFile(e.id),
                      t
                    );
                })
            : Promise.resolve();
        }
        install() {
          this.uppy.on("file-removed", this.onFileRemoved),
            this.uppy.on("cancel-all", this.onAllFilesRemoved),
            this.opts.lazy
              ? (this.uppy.on("thumbnail:request", this.onFileAdded),
                this.uppy.on("thumbnail:cancel", this.onCancelRequest))
              : (this.uppy.on("thumbnail:request", this.onFileAdded),
                this.uppy.on("file-added", this.onFileAdded),
                this.uppy.on("restored", this.onRestored)),
            this.opts.waitForThumbnailsBeforeUpload &&
              this.uppy.addPreProcessor(this.waitUntilAllProcessed);
        }
        uninstall() {
          this.uppy.off("file-removed", this.onFileRemoved),
            this.uppy.off("cancel-all", this.onAllFilesRemoved),
            this.opts.lazy
              ? (this.uppy.off("thumbnail:request", this.onFileAdded),
                this.uppy.off("thumbnail:cancel", this.onCancelRequest))
              : (this.uppy.off("thumbnail:request", this.onFileAdded),
                this.uppy.off("file-added", this.onFileAdded),
                this.uppy.off("restored", this.onRestored)),
            this.opts.waitForThumbnailsBeforeUpload &&
              this.uppy.removePreProcessor(this.waitUntilAllProcessed);
        }
      }
      eS.VERSION = "3.1.0";
    },
    88616: function (e, t, i) {
      "use strict";
      function r(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e, t))
          throw TypeError("attempted to use private field on non-instance");
        return e;
      }
      i.d(t, {
        Z: function () {
          return h;
        },
      });
      var n = 0;
      function s(e) {
        return "__private_" + n++ + "_" + e;
      }
      /**
       * Takes a string with placeholder variables like `%{smart_count} file selected`
       * and replaces it with values from options `{smart_count: 5}`
       *
       * @license https://github.com/airbnb/polyglot.js/blob/master/LICENSE
       * taken from https://github.com/airbnb/polyglot.js/blob/master/lib/polyglot.js#L299
       *
       * @param phrase that needs interpolation, with placeholders
       * @param options with values that will be used to replace placeholders
       */ function o(e, t) {
        let i = /\$/g,
          r = [e];
        if (null == t) return r;
        for (let e of Object.keys(t))
          if ("_" !== e) {
            let n = t[e];
            "string" == typeof n && (n = i[Symbol.replace](n, "$$$$")),
              (r = (function (e, t, i) {
                let r = [];
                return (
                  e.forEach((e) =>
                    "string" != typeof e
                      ? r.push(e)
                      : t[Symbol.split](e).forEach((e, t, n) => {
                          "" !== e && r.push(e), t < n.length - 1 && r.push(i);
                        })
                  ),
                  r
                );
              })(r, RegExp(`%\\{${e}\\}`, "g"), n));
          }
        return r;
      }
      let a = (e) => {
        throw Error(`missing string: ${e}`);
      };
      var l = s("onMissingKey"),
        u = s("apply");
      class h {
        constructor(e, t) {
          let { onMissingKey: i = a } = void 0 === t ? {} : t;
          Object.defineProperty(this, u, { value: d }),
            Object.defineProperty(this, l, { writable: !0, value: void 0 }),
            (this.locale = {
              strings: {},
              pluralize: (e) => (1 === e ? 0 : 1),
            }),
            Array.isArray(e)
              ? e.forEach(r(this, u)[u], this)
              : r(this, u)[u](e),
            (r(this, l)[l] = i);
        }
        translate(e, t) {
          return this.translateArray(e, t).join("");
        }
        translateArray(e, t) {
          let i = this.locale.strings[e];
          if (
            (null == i && (r(this, l)[l](e), (i = e)), "object" == typeof i)
          ) {
            if (t && void 0 !== t.smart_count)
              return o(i[this.locale.pluralize(t.smart_count)], t);
            throw Error(
              "Attempted to use a string with plural forms, but no value was given for %{smart_count}"
            );
          }
          if ("string" != typeof i) throw Error("string was not a string");
          return o(i, t);
        }
      }
      function d(e) {
        if (!(null != e && e.strings)) return;
        let t = this.locale;
        Object.assign(this.locale, {
          strings: { ...t.strings, ...e.strings },
          pluralize: e.pluralize || t.pluralize,
        });
      }
    },
    49971: function (e, t, i) {
      "use strict";
      i.d(t, {
        H: function () {
          return s;
        },
      });
      var r = i(68954);
      function n(e) {
        let t = "";
        return (
          e.replace(
            /[^A-Z0-9]/gi,
            (e) => ((t += `-${e.charCodeAt(0).toString(32)}`), "/")
          ) + t
        );
      }
      function s(e) {
        var t;
        let i;
        if (
          e.isRemote &&
          e.remote &&
          new Set(["box", "dropbox", "drive", "facebook", "unsplash"]).has(
            e.remote.provider
          )
        )
          return e.id;
        let s = (0, r.Z)(e);
        return (
          (t = { ...e, type: s }),
          (i = "uppy"),
          "string" == typeof t.name && (i += `-${n(t.name.toLowerCase())}`),
          void 0 !== t.type && (i += `-${t.type}`),
          t.meta &&
            "string" == typeof t.meta.relativePath &&
            (i += `-${n(t.meta.relativePath.toLowerCase())}`),
          void 0 !== t.data.size && (i += `-${t.data.size}`),
          void 0 !== t.data.lastModified && (i += `-${t.data.lastModified}`),
          i
        );
      }
    },
    67706: function (e, t, i) {
      "use strict";
      function r(e) {
        let t = e.lastIndexOf(".");
        return -1 === t || t === e.length - 1
          ? { name: e, extension: void 0 }
          : { name: e.slice(0, t), extension: e.slice(t + 1) };
      }
      i.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    68954: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = i(67706),
        n = {
          __proto__: null,
          md: "text/markdown",
          markdown: "text/markdown",
          mp4: "video/mp4",
          mp3: "audio/mp3",
          svg: "image/svg+xml",
          jpg: "image/jpeg",
          png: "image/png",
          webp: "image/webp",
          gif: "image/gif",
          heic: "image/heic",
          heif: "image/heif",
          yaml: "text/yaml",
          yml: "text/yaml",
          csv: "text/csv",
          tsv: "text/tab-separated-values",
          tab: "text/tab-separated-values",
          avi: "video/x-msvideo",
          mks: "video/x-matroska",
          mkv: "video/x-matroska",
          mov: "video/quicktime",
          dicom: "application/dicom",
          doc: "application/msword",
          docm: "application/vnd.ms-word.document.macroenabled.12",
          docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          dot: "application/msword",
          dotm: "application/vnd.ms-word.template.macroenabled.12",
          dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
          xla: "application/vnd.ms-excel",
          xlam: "application/vnd.ms-excel.addin.macroenabled.12",
          xlc: "application/vnd.ms-excel",
          xlf: "application/x-xliff+xml",
          xlm: "application/vnd.ms-excel",
          xls: "application/vnd.ms-excel",
          xlsb: "application/vnd.ms-excel.sheet.binary.macroenabled.12",
          xlsm: "application/vnd.ms-excel.sheet.macroenabled.12",
          xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          xlt: "application/vnd.ms-excel",
          xltm: "application/vnd.ms-excel.template.macroenabled.12",
          xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
          xlw: "application/vnd.ms-excel",
          txt: "text/plain",
          text: "text/plain",
          conf: "text/plain",
          log: "text/plain",
          pdf: "application/pdf",
          zip: "application/zip",
          "7z": "application/x-7z-compressed",
          rar: "application/x-rar-compressed",
          tar: "application/x-tar",
          gz: "application/gzip",
          dmg: "application/x-apple-diskimage",
        };
      function s(e) {
        var t;
        if (e.type) return e.type;
        let i = e.name
          ? null == (t = (0, r.Z)(e.name).extension)
            ? void 0
            : t.toLowerCase()
          : null;
        return i && i in n ? n[i] : "application/octet-stream";
      }
    },
    6003: function (e, t) {
      "use strict";
      t.Z = function (e) {
        for (var t; e && !e.dir; ) e = e.parentNode;
        return null == (t = e) ? void 0 : t.dir;
      };
    },
    59097: function (e, t, i) {
      "use strict";
      function r(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "nodeType" in e &&
          e.nodeType === Node.ELEMENT_NODE
        );
      }
      i.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    96880: function (e, t, i) {
      "use strict";
      function r(e) {
        return (
          !!e && /^[^/]+\/(jpe?g|gif|png|svg|svg\+xml|bmp|webp|avif)$/.test(e)
        );
      }
      i.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    59326: function (e, t, i) {
      "use strict";
      i.d(t, {
        x: function () {
          return r;
        },
      });
      let r = (e = 21) => {
        let t = "",
          i = e;
        for (; i--; )
          t +=
            "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[
              (64 * Math.random()) | 0
            ];
        return t;
      };
    },
  },
]);
