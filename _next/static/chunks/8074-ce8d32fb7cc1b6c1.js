(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8074],
  {
    13070: function (t, e, n) {
      "use strict";
      n.d(e, {
        r: function () {
          return r;
        },
      });
      let r = (t, e, n) => {
        let r = e - t;
        return ((((n - t) % r) + r) % r) + t;
      };
    },
    38941: function (t, e, n) {
      var r = n(29283).Symbol;
      t.exports = r;
    },
    12453: function (t, e, n) {
      var r = n(47275),
        o = n(53914),
        i = n(28035),
        c = n(64592),
        u = n(84660),
        f = n(43694),
        l = Object.prototype.hasOwnProperty;
      t.exports = function (t, e) {
        var n = i(t),
          s = !n && o(t),
          a = !n && !s && c(t),
          p = !n && !s && !a && f(t),
          d = n || s || a || p,
          g = d ? r(t.length, String) : [],
          h = g.length;
        for (var v in t)
          (e || l.call(t, v)) &&
            !(
              d &&
              ("length" == v ||
                (a && ("offset" == v || "parent" == v)) ||
                (p &&
                  ("buffer" == v || "byteLength" == v || "byteOffset" == v)) ||
                u(v, h))
            ) &&
            g.push(v);
        return g;
      };
    },
    61661: function (t) {
      t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r; )
          o[n] = e(t[n], n, t);
        return o;
      };
    },
    52848: function (t, e, n) {
      var r = n(26513),
        o = n(37571);
      t.exports = function (t) {
        return o(r(t));
      };
    },
    40389: function (t, e, n) {
      var r = n(38941),
        o = n(24793),
        i = n(15798),
        c = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : c && c in Object(t)
          ? o(t)
          : i(t);
      };
    },
    71660: function (t, e, n) {
      var r = n(40389),
        o = n(45376);
      t.exports = function (t) {
        return o(t) && "[object Arguments]" == r(t);
      };
    },
    15113: function (t, e, n) {
      var r = n(40389),
        o = n(90236),
        i = n(45376),
        c = {};
      (c["[object Float32Array]"] =
        c["[object Float64Array]"] =
        c["[object Int8Array]"] =
        c["[object Int16Array]"] =
        c["[object Int32Array]"] =
        c["[object Uint8Array]"] =
        c["[object Uint8ClampedArray]"] =
        c["[object Uint16Array]"] =
        c["[object Uint32Array]"] =
          !0),
        (c["[object Arguments]"] =
          c["[object Array]"] =
          c["[object ArrayBuffer]"] =
          c["[object Boolean]"] =
          c["[object DataView]"] =
          c["[object Date]"] =
          c["[object Error]"] =
          c["[object Function]"] =
          c["[object Map]"] =
          c["[object Number]"] =
          c["[object Object]"] =
          c["[object RegExp]"] =
          c["[object Set]"] =
          c["[object String]"] =
          c["[object WeakMap]"] =
            !1),
        (t.exports = function (t) {
          return i(t) && o(t.length) && !!c[r(t)];
        });
    },
    65142: function (t, e, n) {
      var r = n(22688),
        o = n(67190),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (!r(t)) return o(t);
        var e = [];
        for (var n in Object(t))
          i.call(t, n) && "constructor" != n && e.push(n);
        return e;
      };
    },
    73753: function (t) {
      var e = Math.floor,
        n = Math.random;
      t.exports = function (t, r) {
        return t + e(n() * (r - t + 1));
      };
    },
    50459: function (t, e, n) {
      var r = n(37571),
        o = n(45877);
      t.exports = function (t) {
        return r(o(t));
      };
    },
    47275: function (t) {
      t.exports = function (t, e) {
        for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
        return r;
      };
    },
    7261: function (t) {
      t.exports = function (t) {
        return function (e) {
          return t(e);
        };
      };
    },
    16133: function (t, e, n) {
      var r = n(61661);
      t.exports = function (t, e) {
        return r(e, function (e) {
          return t[e];
        });
      };
    },
    26513: function (t) {
      t.exports = function (t, e) {
        var n = -1,
          r = t.length;
        for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
        return e;
      };
    },
    12080: function (t, e, n) {
      var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
      t.exports = r;
    },
    24793: function (t, e, n) {
      var r = n(38941),
        o = Object.prototype,
        i = o.hasOwnProperty,
        c = o.toString,
        u = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        var e = i.call(t, u),
          n = t[u];
        try {
          t[u] = void 0;
          var r = !0;
        } catch (t) {}
        var o = c.call(t);
        return r && (e ? (t[u] = n) : delete t[u]), o;
      };
    },
    84660: function (t) {
      var e = /^(?:0|[1-9]\d*)$/;
      t.exports = function (t, n) {
        var r = typeof t;
        return (
          !!(n = null == n ? 9007199254740991 : n) &&
          ("number" == r || ("symbol" != r && e.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < n
        );
      };
    },
    22688: function (t) {
      var e = Object.prototype;
      t.exports = function (t) {
        var n = t && t.constructor;
        return t === (("function" == typeof n && n.prototype) || e);
      };
    },
    67190: function (t, e, n) {
      var r = n(75307)(Object.keys, Object);
      t.exports = r;
    },
    14650: function (t, e, n) {
      t = n.nmd(t);
      var r = n(12080),
        o = e && !e.nodeType && e,
        i = o && t && !t.nodeType && t,
        c = i && i.exports === o && r.process,
        u = (function () {
          try {
            var t = i && i.require && i.require("util").types;
            if (t) return t;
            return c && c.binding && c.binding("util");
          } catch (t) {}
        })();
      t.exports = u;
    },
    15798: function (t) {
      var e = Object.prototype.toString;
      t.exports = function (t) {
        return e.call(t);
      };
    },
    75307: function (t) {
      t.exports = function (t, e) {
        return function (n) {
          return t(e(n));
        };
      };
    },
    29283: function (t, e, n) {
      var r = n(12080),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
      t.exports = i;
    },
    37571: function (t, e, n) {
      var r = n(73753);
      t.exports = function (t, e) {
        var n = -1,
          o = t.length,
          i = o - 1;
        for (e = void 0 === e ? o : e; ++n < e; ) {
          var c = r(n, i),
            u = t[c];
          (t[c] = t[n]), (t[n] = u);
        }
        return (t.length = e), t;
      };
    },
    53914: function (t, e, n) {
      var r = n(71660),
        o = n(45376),
        i = Object.prototype,
        c = i.hasOwnProperty,
        u = i.propertyIsEnumerable,
        f = r(
          (function () {
            return arguments;
          })()
        )
          ? r
          : function (t) {
              return o(t) && c.call(t, "callee") && !u.call(t, "callee");
            };
      t.exports = f;
    },
    28035: function (t) {
      var e = Array.isArray;
      t.exports = e;
    },
    88243: function (t, e, n) {
      var r = n(57868),
        o = n(90236);
      t.exports = function (t) {
        return null != t && o(t.length) && !r(t);
      };
    },
    64592: function (t, e, n) {
      t = n.nmd(t);
      var r = n(29283),
        o = n(65190),
        i = e && !e.nodeType && e,
        c = i && t && !t.nodeType && t,
        u = c && c.exports === i ? r.Buffer : void 0,
        f = u ? u.isBuffer : void 0;
      t.exports = f || o;
    },
    57868: function (t, e, n) {
      var r = n(40389),
        o = n(34578);
      t.exports = function (t) {
        if (!o(t)) return !1;
        var e = r(t);
        return (
          "[object Function]" == e ||
          "[object GeneratorFunction]" == e ||
          "[object AsyncFunction]" == e ||
          "[object Proxy]" == e
        );
      };
    },
    90236: function (t) {
      t.exports = function (t) {
        return (
          "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        );
      };
    },
    34578: function (t) {
      t.exports = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
    },
    45376: function (t) {
      t.exports = function (t) {
        return null != t && "object" == typeof t;
      };
    },
    43694: function (t, e, n) {
      var r = n(15113),
        o = n(7261),
        i = n(14650),
        c = i && i.isTypedArray,
        u = c ? o(c) : r;
      t.exports = u;
    },
    44867: function (t, e, n) {
      var r = n(12453),
        o = n(65142),
        i = n(88243);
      t.exports = function (t) {
        return i(t) ? r(t) : o(t);
      };
    },
    14091: function (t, e, n) {
      var r = n(52848),
        o = n(50459),
        i = n(28035);
      t.exports = function (t) {
        return (i(t) ? r : o)(t);
      };
    },
    65190: function (t) {
      t.exports = function () {
        return !1;
      };
    },
    45877: function (t, e, n) {
      var r = n(16133),
        o = n(44867);
      t.exports = function (t) {
        return null == t ? [] : r(t, o(t));
      };
    },
    18951: function (t, e, n) {
      "use strict";
      n.d(e, {
        p: function () {
          return c;
        },
      });
      var r = n(15039),
        o = n(57886),
        i = n(11417);
      function c(t) {
        let e = (0, r.useRef)(0),
          { isStatic: n } = (0, r.useContext)(o._);
        (0, r.useEffect)(() => {
          if (n) return;
          let r = ({ timestamp: n, delta: r }) => {
            e.current || (e.current = n), t(n - e.current, r);
          };
          return i.Wi.update(r, !0), () => (0, i.Pn)(r);
        }, [t]);
      }
    },
    58222: function (t, e, n) {
      "use strict";
      n.d(e, {
        W: function () {
          return o;
        },
      });
      var r = n(15039);
      function o(t, e, n) {
        (0, r.useInsertionEffect)(() => t.on(e, n), [t, e, n]);
      }
    },
    46993: function (t, e, n) {
      "use strict";
      n.d(e, {
        c: function () {
          return u;
        },
      });
      var r = n(15039),
        o = n(76593),
        i = n(57886),
        c = n(15644);
      function u(t) {
        let e = (0, c.h)(() => (0, o.BX)(t)),
          { isStatic: n } = (0, r.useContext)(i._);
        if (n) {
          let [, n] = (0, r.useState)(t);
          (0, r.useEffect)(() => e.on("change", n), []);
        }
        return e;
      }
    },
    46489: function (t, e, n) {
      "use strict";
      let r, o;
      n.d(e, {
        v: function () {
          return z;
        },
      });
      var i = n(76593),
        c = n(15644),
        u = n(15039),
        f = n(33324);
      let l = new WeakMap();
      function s({ target: t, contentRect: e, borderBoxSize: n }) {
        var r;
        null === (r = l.get(t)) ||
          void 0 === r ||
          r.forEach((r) => {
            r({
              target: t,
              contentSize: e,
              get size() {
                return (function (t, e) {
                  if (e) {
                    let { inlineSize: t, blockSize: n } = e[0];
                    return { width: t, height: n };
                  }
                  return t instanceof SVGElement && "getBBox" in t
                    ? t.getBBox()
                    : { width: t.offsetWidth, height: t.offsetHeight };
                })(t, n);
              },
            });
          });
      }
      function a(t) {
        t.forEach(s);
      }
      let p = new Set();
      var d = n(16267),
        g = n(31792);
      let h = () => ({
          current: 0,
          offset: [],
          progress: 0,
          scrollLength: 0,
          targetOffset: 0,
          targetLength: 0,
          containerLength: 0,
          velocity: 0,
        }),
        v = () => ({ time: 0, x: h(), y: h() }),
        y = {
          x: { length: "Width", position: "Left" },
          y: { length: "Height", position: "Top" },
        };
      function b(t, e, n, r) {
        let o = n[e],
          { length: i, position: c } = y[e],
          u = o.current,
          f = n.time;
        (o.current = t["scroll" + c]),
          (o.scrollLength = t["scroll" + i] - t["client" + i]),
          (o.offset.length = 0),
          (o.offset[0] = 0),
          (o.offset[1] = o.scrollLength),
          (o.progress = (0, d.Y)(0, o.scrollLength, o.current));
        let l = r - f;
        o.velocity = l > 50 ? 0 : (0, g.R)(o.current - u, l);
      }
      let x = {
          All: [
            [0, 0],
            [1, 1],
          ],
        },
        m = { start: 0, center: 0.5, end: 1 };
      function j(t, e, n = 0) {
        let r = 0;
        if ((void 0 !== m[t] && (t = m[t]), "string" == typeof t)) {
          let e = parseFloat(t);
          t.endsWith("px")
            ? (r = e)
            : t.endsWith("%")
            ? (t = e / 100)
            : t.endsWith("vw")
            ? (r = (e / 100) * document.documentElement.clientWidth)
            : t.endsWith("vh")
            ? (r = (e / 100) * document.documentElement.clientHeight)
            : (t = e);
        }
        return "number" == typeof t && (r = e * t), n + r;
      }
      let w = [0, 0];
      var E = n(78314),
        A = n(39276);
      let O = { x: 0, y: 0 };
      var W = n(11417);
      let S = new WeakMap(),
        L = new WeakMap(),
        B = new WeakMap(),
        P = (t) => (t === document.documentElement ? window : t);
      var k = n(17563);
      function T(t, e) {
        (0, f.K)(
          !!(!e || e.current),
          `You have defined a ${t} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
        );
      }
      let H = () => ({
        scrollX: (0, i.BX)(0),
        scrollY: (0, i.BX)(0),
        scrollXProgress: (0, i.BX)(0),
        scrollYProgress: (0, i.BX)(0),
      });
      function z({ container: t, target: e, layoutEffect: n = !0, ...i } = {}) {
        let s = (0, c.h)(H);
        return (
          (n ? k.L : u.useEffect)(
            () => (
              T("target", e),
              T("container", t),
              (function (
                t,
                { container: e = document.documentElement, ...n } = {}
              ) {
                let i = B.get(e);
                i || ((i = new Set()), B.set(e, i));
                let c = (function (t, e, n, r = {}) {
                  return {
                    measure: () =>
                      (function (t, e = t, n) {
                        if (
                          ((n.x.targetOffset = 0),
                          (n.y.targetOffset = 0),
                          e !== t)
                        ) {
                          let r = e;
                          for (; r && r !== t; )
                            (n.x.targetOffset += r.offsetLeft),
                              (n.y.targetOffset += r.offsetTop),
                              (r = r.offsetParent);
                        }
                        (n.x.targetLength =
                          e === t ? e.scrollWidth : e.clientWidth),
                          (n.y.targetLength =
                            e === t ? e.scrollHeight : e.clientHeight),
                          (n.x.containerLength = t.clientWidth),
                          (n.y.containerLength = t.clientHeight);
                      })(t, r.target, n),
                    update: (e) => {
                      b(t, "x", n, e),
                        b(t, "y", n, e),
                        (n.time = e),
                        (r.offset || r.target) &&
                          (function (t, e, n) {
                            let { offset: r = x.All } = n,
                              { target: o = t, axis: i = "y" } = n,
                              c = "y" === i ? "height" : "width",
                              u =
                                o !== t
                                  ? (function (t, e) {
                                      let n = { x: 0, y: 0 },
                                        r = t;
                                      for (; r && r !== e; )
                                        if (r instanceof HTMLElement)
                                          (n.x += r.offsetLeft),
                                            (n.y += r.offsetTop),
                                            (r = r.offsetParent);
                                        else if ("svg" === r.tagName) {
                                          let t = r.getBoundingClientRect(),
                                            e = (r =
                                              r.parentElement).getBoundingClientRect();
                                          (n.x += t.left - e.left),
                                            (n.y += t.top - e.top);
                                        } else if (
                                          r instanceof SVGGraphicsElement
                                        ) {
                                          let { x: t, y: e } = r.getBBox();
                                          (n.x += t), (n.y += e);
                                          let o = null,
                                            i = r.parentNode;
                                          for (; !o; )
                                            "svg" === i.tagName && (o = i),
                                              (i = r.parentNode);
                                          r = o;
                                        } else break;
                                      return n;
                                    })(o, t)
                                  : O,
                              f =
                                o === t
                                  ? {
                                      width: t.scrollWidth,
                                      height: t.scrollHeight,
                                    }
                                  : "getBBox" in o && "svg" !== o.tagName
                                  ? o.getBBox()
                                  : {
                                      width: o.clientWidth,
                                      height: o.clientHeight,
                                    },
                              l = {
                                width: t.clientWidth,
                                height: t.clientHeight,
                              };
                            e[i].offset.length = 0;
                            let s = !e[i].interpolate,
                              a = r.length;
                            for (let t = 0; t < a; t++) {
                              let n = (function (t, e, n, r) {
                                let o = Array.isArray(t) ? t : w,
                                  i = 0;
                                return (
                                  "number" == typeof t
                                    ? (o = [t, t])
                                    : "string" == typeof t &&
                                      (o = (t = t.trim()).includes(" ")
                                        ? t.split(" ")
                                        : [t, m[t] ? t : "0"]),
                                  j(o[0], n, r) - j(o[1], e)
                                );
                              })(r[t], l[c], f[c], u[i]);
                              s ||
                                n === e[i].interpolatorOffsets[t] ||
                                (s = !0),
                                (e[i].offset[t] = n);
                            }
                            s &&
                              ((e[i].interpolate = (0, E.s)(
                                e[i].offset,
                                (0, A.Y)(r)
                              )),
                              (e[i].interpolatorOffsets = [...e[i].offset])),
                              (e[i].progress = e[i].interpolate(e[i].current));
                          })(t, n, r);
                    },
                    notify: () => e(n),
                  };
                })(e, t, v(), n);
                if ((i.add(c), !S.has(e))) {
                  let t = () => {
                      for (let t of i) t.measure();
                    },
                    n = () => {
                      for (let t of i) t.update(W.frameData.timestamp);
                    },
                    c = () => {
                      for (let t of i) t.notify();
                    },
                    u = () => {
                      W.Wi.read(t, !1, !0),
                        W.Wi.read(n, !1, !0),
                        W.Wi.update(c, !1, !0);
                    };
                  S.set(e, u);
                  let s = P(e);
                  window.addEventListener("resize", u, { passive: !0 }),
                    e !== document.documentElement &&
                      L.set(
                        e,
                        "function" == typeof e
                          ? (p.add(e),
                            o ||
                              ((o = () => {
                                let t = {
                                    width: window.innerWidth,
                                    height: window.innerHeight,
                                  },
                                  e = {
                                    target: window,
                                    size: t,
                                    contentSize: t,
                                  };
                                p.forEach((t) => t(e));
                              }),
                              window.addEventListener("resize", o)),
                            () => {
                              p.delete(e), !p.size && o && (o = void 0);
                            })
                          : (function (t, e) {
                              r ||
                                "undefined" == typeof ResizeObserver ||
                                (r = new ResizeObserver(a));
                              let n = (function (t, e, n) {
                                var r;
                                if ("string" == typeof t) {
                                  let o = document;
                                  e &&
                                    ((0, f.k)(
                                      !!e.current,
                                      "Scope provided, but no element detected."
                                    ),
                                    (o = e.current)),
                                    n
                                      ? ((null !== (r = n[t]) &&
                                          void 0 !== r) ||
                                          (n[t] = o.querySelectorAll(t)),
                                        (t = n[t]))
                                      : (t = o.querySelectorAll(t));
                                } else t instanceof Element && (t = [t]);
                                return Array.from(t || []);
                              })(t);
                              return (
                                n.forEach((t) => {
                                  let n = l.get(t);
                                  n || ((n = new Set()), l.set(t, n)),
                                    n.add(e),
                                    null == r || r.observe(t);
                                }),
                                () => {
                                  n.forEach((t) => {
                                    let n = l.get(t);
                                    null == n || n.delete(e),
                                      (null == n ? void 0 : n.size) ||
                                        null == r ||
                                        r.unobserve(t);
                                  });
                                }
                              );
                            })(e, u)
                      ),
                    s.addEventListener("scroll", u, { passive: !0 });
                }
                let u = S.get(e);
                return (
                  W.Wi.read(u, !1, !0),
                  () => {
                    var t;
                    (0, W.Pn)(u);
                    let n = B.get(e);
                    if (!n || (n.delete(c), n.size)) return;
                    let r = S.get(e);
                    S.delete(e),
                      r &&
                        (P(e).removeEventListener("scroll", r),
                        null === (t = L.get(e)) || void 0 === t || t(),
                        window.removeEventListener("resize", r));
                  }
                );
              })(
                ({ x: t, y: e }) => {
                  s.scrollX.set(t.current),
                    s.scrollXProgress.set(t.progress),
                    s.scrollY.set(e.current),
                    s.scrollYProgress.set(e.progress);
                },
                {
                  ...i,
                  container: (null == t ? void 0 : t.current) || void 0,
                  target: (null == e ? void 0 : e.current) || void 0,
                }
              )
            ),
            [t, e, JSON.stringify(i.offset)]
          ),
          s
        );
      }
    },
    90567: function (t, e, n) {
      "use strict";
      n.d(e, {
        q: function () {
          return s;
        },
      });
      var r = n(15039),
        o = n(21487),
        i = n(46993),
        c = n(57886),
        u = n(17563),
        f = n(97961),
        l = n(11417);
      function s(t, e = {}) {
        let { isStatic: n } = (0, r.useContext)(c._),
          s = (0, r.useRef)(null),
          a = (0, i.c)((0, o.i)(t) ? t.get() : t),
          p = () => {
            s.current && s.current.stop();
          };
        return (
          (0, r.useInsertionEffect)(
            () =>
              a.attach((t, r) => {
                if (n) return r(t);
                let o = s.current;
                return (
                  o && 0 === o.time && o.sample(l.frameData.delta),
                  p(),
                  (s.current = (0, f.y)({
                    keyframes: [a.get(), t],
                    velocity: a.getVelocity(),
                    type: "spring",
                    restDelta: 0.001,
                    restSpeed: 0.01,
                    ...e,
                    onUpdate: r,
                  })),
                  a.get()
                );
              }, p),
            [JSON.stringify(e)]
          ),
          (0, u.L)(() => {
            if ((0, o.i)(t)) return t.on("change", (t) => a.set(parseFloat(t)));
          }, [a]),
          a
        );
      }
    },
    42636: function (t, e, n) {
      "use strict";
      n.d(e, {
        H: function () {
          return p;
        },
      });
      var r = n(78314);
      let o = (t) => t && "object" == typeof t && t.mix,
        i = (t) => (o(t) ? t.mix : void 0);
      var c = n(46993),
        u = n(17563),
        f = n(11417);
      function l(t, e) {
        let n = (0, c.c)(e()),
          r = () => n.set(e());
        return (
          r(),
          (0, u.L)(() => {
            let e = () => f.Wi.update(r, !1, !0),
              n = t.map((t) => t.on("change", e));
            return () => {
              n.forEach((t) => t()), (0, f.Pn)(r);
            };
          }),
          n
        );
      }
      var s = n(15644),
        a = n(76593);
      function p(t, e, n, o) {
        if ("function" == typeof t)
          return (function (t) {
            (a.S1.current = []), t();
            let e = l(a.S1.current, t);
            return (a.S1.current = void 0), e;
          })(t);
        let c =
          "function" == typeof e
            ? e
            : (function (...t) {
                let e = !Array.isArray(t[0]),
                  n = e ? 0 : -1,
                  o = t[0 + n],
                  c = t[1 + n],
                  u = t[2 + n],
                  f = t[3 + n],
                  l = (0, r.s)(c, u, { mixer: i(u[0]), ...f });
                return e ? l(o) : l;
              })(e, n, o);
        return Array.isArray(t) ? d(t, c) : d([t], ([t]) => c(t));
      }
      function d(t, e) {
        let n = (0, s.h)(() => []);
        return l(t, () => {
          n.length = 0;
          let r = t.length;
          for (let e = 0; e < r; e++) n[e] = t[e].get();
          return e(n);
        });
      }
    },
    12067: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return c;
        },
      });
      var r = n(58222),
        o = n(46993),
        i = n(11417);
      function c(t) {
        let e = (0, o.c)(t.getVelocity()),
          n = () => {
            let r = t.getVelocity();
            e.set(r), r && i.Wi.update(n);
          };
        return (
          (0, r.W)(t, "change", () => {
            i.Wi.update(n, !1, !0);
          }),
          e
        );
      }
    },
  },
]);
