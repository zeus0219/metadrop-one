"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3525],
  {
    52871: function (e, t, n) {
      n.d(t, {
        Ry: function () {
          return l;
        },
      });
      var r = new WeakMap(),
        o = new WeakMap(),
        i = {},
        a = 0,
        u = function (e) {
          return e && (e.host || u(e.parentNode));
        },
        c = function (e, t, n, c) {
          var l = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = u(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          i[n] || (i[n] = new WeakMap());
          var f = i[n],
            s = [],
            d = new Set(),
            p = new Set(l),
            m = function (e) {
              !e || d.has(e) || (d.add(e), m(e.parentNode));
            };
          l.forEach(m);
          var h = function (e) {
            !e ||
              p.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (d.has(e)) h(e);
                else
                  try {
                    var t = e.getAttribute(c),
                      i = null !== t && "false" !== t,
                      a = (r.get(e) || 0) + 1,
                      u = (f.get(e) || 0) + 1;
                    r.set(e, a),
                      f.set(e, u),
                      s.push(e),
                      1 === a && i && o.set(e, !0),
                      1 === u && e.setAttribute(n, "true"),
                      i || e.setAttribute(c, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            h(t),
            d.clear(),
            a++,
            function () {
              s.forEach(function (e) {
                var t = r.get(e) - 1,
                  i = f.get(e) - 1;
                r.set(e, t),
                  f.set(e, i),
                  t || (o.has(e) || e.removeAttribute(c), o.delete(e)),
                  i || e.removeAttribute(n);
              }),
                --a ||
                  ((r = new WeakMap()),
                  (r = new WeakMap()),
                  (o = new WeakMap()),
                  (i = {}));
            }
          );
        },
        l = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
              c(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    43022: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return z;
        },
      });
      var r,
        o,
        i,
        a,
        u,
        c,
        l = n(26211),
        f = n(15039),
        s = "right-scroll-bar-position",
        d = "width-before-scroll-bar";
      function p(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var m = "undefined" != typeof window ? f.useLayoutEffect : f.useEffect,
        h = new WeakMap(),
        v =
          (void 0 === r && (r = {}),
          ((void 0 === o &&
            (o = function (e) {
              return e;
            }),
          (i = []),
          (a = !1),
          (u = {
            read: function () {
              if (a)
                throw Error(
                  "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                );
              return i.length ? i[i.length - 1] : null;
            },
            useMedium: function (e) {
              var t = o(e, a);
              return (
                i.push(t),
                function () {
                  i = i.filter(function (e) {
                    return e !== t;
                  });
                }
              );
            },
            assignSyncMedium: function (e) {
              for (a = !0; i.length; ) {
                var t = i;
                (i = []), t.forEach(e);
              }
              i = {
                push: function (t) {
                  return e(t);
                },
                filter: function () {
                  return i;
                },
              };
            },
            assignMedium: function (e) {
              a = !0;
              var t = [];
              if (i.length) {
                var n = i;
                (i = []), n.forEach(e), (t = i);
              }
              var r = function () {
                  var n = t;
                  (t = []), n.forEach(e);
                },
                o = function () {
                  return Promise.resolve().then(r);
                };
              o(),
                (i = {
                  push: function (e) {
                    t.push(e), o();
                  },
                  filter: function (e) {
                    return (t = t.filter(e)), i;
                  },
                });
            },
          })).options = (0, l.__assign)({ async: !0, ssr: !1 }, r)),
          u),
        g = function () {},
        y = f.forwardRef(function (e, t) {
          var n,
            r,
            o,
            i,
            a = f.useRef(null),
            u = f.useState({
              onScrollCapture: g,
              onWheelCapture: g,
              onTouchMoveCapture: g,
            }),
            c = u[0],
            s = u[1],
            d = e.forwardProps,
            y = e.children,
            b = e.className,
            E = e.removeScrollBar,
            w = e.enabled,
            S = e.shards,
            A = e.sideCar,
            x = e.noIsolation,
            C = e.inert,
            I = e.allowPinchZoom,
            N = e.as,
            T = (0, l.__rest)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
            ]),
            k =
              ((n = [a, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return p(t, e);
                });
              }),
              ((o = (0, f.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (i = o.facade),
              m(
                function () {
                  var e = h.get(i);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = i.current;
                    t.forEach(function (e) {
                      r.has(e) || p(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || p(e, o);
                      });
                  }
                  h.set(i, n);
                },
                [n]
              ),
              i),
            L = (0, l.__assign)((0, l.__assign)({}, T), c);
          return f.createElement(
            f.Fragment,
            null,
            w &&
              f.createElement(A, {
                sideCar: v,
                removeScrollBar: E,
                shards: S,
                noIsolation: x,
                inert: C,
                setCallbacks: s,
                allowPinchZoom: !!I,
                lockRef: a,
              }),
            d
              ? f.cloneElement(
                  f.Children.only(y),
                  (0, l.__assign)((0, l.__assign)({}, L), { ref: k })
                )
              : f.createElement(
                  void 0 === N ? "div" : N,
                  (0, l.__assign)({}, L, { className: b, ref: k }),
                  y
                )
          );
        });
      (y.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (y.classNames = { fullWidth: d, zeroRight: s });
      var b = function (e) {
        var t = e.sideCar,
          n = (0, l.__rest)(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return f.createElement(r, (0, l.__assign)({}, n));
      };
      b.isSideCarExport = !0;
      var E = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = c || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var o, i;
                (o = t).styleSheet
                  ? (o.styleSheet.cssText = r)
                  : o.appendChild(document.createTextNode(r)),
                  (i = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(i);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        w = function () {
          var e = E();
          return function (t, n) {
            f.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        S = function () {
          var e = w();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        A = { left: 0, top: 0, right: 0, gap: 0 },
        x = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        C = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [x(n), x(r), x(o)];
        },
        I = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return A;
          var t = C(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        N = S(),
        T = "data-scroll-locked",
        k = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            u = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(T, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(u, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(u, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(s, " {\n    right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(d, " {\n    margin-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(s, " .")
              .concat(s, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(d, " .")
              .concat(d, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(T, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(u, "px;\n  }\n")
          );
        },
        L = function () {
          var e = parseInt(document.body.getAttribute(T) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        _ = function () {
          f.useEffect(function () {
            return (
              document.body.setAttribute(T, (L() + 1).toString()),
              function () {
                var e = L() - 1;
                e <= 0
                  ? document.body.removeAttribute(T)
                  : document.body.setAttribute(T, e.toString());
              }
            );
          }, []);
        },
        M = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          _();
          var i = f.useMemo(
            function () {
              return I(o);
            },
            [o]
          );
          return f.createElement(N, {
            styles: k(i, !t, o, n ? "" : "!important"),
          });
        },
        R = !1;
      if ("undefined" != typeof window)
        try {
          var j = Object.defineProperty({}, "passive", {
            get: function () {
              return (R = !0), !0;
            },
          });
          window.addEventListener("test", j, j),
            window.removeEventListener("test", j, j);
        } catch (e) {
          R = !1;
        }
      var P = !!R && { passive: !1 },
        $ = function (e, t) {
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        W = function (e, t) {
          var n = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              Z(e, n))
            ) {
              var r = O(e, n);
              if (r[1] > r[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== document.body);
          return !1;
        },
        Z = function (e, t) {
          return "v" === e ? $(t, "overflowY") : $(t, "overflowX");
        },
        O = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        F = function (e, t, n, r, o) {
          var i,
            a =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            u = a * r,
            c = n.target,
            l = t.contains(c),
            f = !1,
            s = u > 0,
            d = 0,
            p = 0;
          do {
            var m = O(e, c),
              h = m[0],
              v = m[1] - m[2] - a * h;
            (h || v) && Z(e, c) && ((d += v), (p += h)), (c = c.parentNode);
          } while (
            (!l && c !== document.body) ||
            (l && (t.contains(c) || t === c))
          );
          return (
            s && ((o && 0 === d) || (!o && u > d))
              ? (f = !0)
              : !s && ((o && 0 === p) || (!o && -u > p)) && (f = !0),
            f
          );
        },
        U = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        B = function (e) {
          return [e.deltaX, e.deltaY];
        },
        D = function (e) {
          return e && "current" in e ? e.current : e;
        },
        K = 0,
        X = [],
        q =
          (v.useMedium(function (e) {
            var t = f.useRef([]),
              n = f.useRef([0, 0]),
              r = f.useRef(),
              o = f.useState(K++)[0],
              i = f.useState(function () {
                return S();
              })[0],
              a = f.useRef(e);
            f.useEffect(
              function () {
                a.current = e;
              },
              [e]
            ),
              f.useEffect(
                function () {
                  if (e.inert) {
                    document.body.classList.add(
                      "block-interactivity-".concat(o)
                    );
                    var t = (0, l.__spreadArray)(
                      [e.lockRef.current],
                      (e.shards || []).map(D),
                      !0
                    ).filter(Boolean);
                    return (
                      t.forEach(function (e) {
                        return e.classList.add(
                          "allow-interactivity-".concat(o)
                        );
                      }),
                      function () {
                        document.body.classList.remove(
                          "block-interactivity-".concat(o)
                        ),
                          t.forEach(function (e) {
                            return e.classList.remove(
                              "allow-interactivity-".concat(o)
                            );
                          });
                      }
                    );
                  }
                },
                [e.inert, e.lockRef.current, e.shards]
              );
            var u = f.useCallback(function (e, t) {
                if ("touches" in e && 2 === e.touches.length)
                  return !a.current.allowPinchZoom;
                var o,
                  i = U(e),
                  u = n.current,
                  c = "deltaX" in e ? e.deltaX : u[0] - i[0],
                  l = "deltaY" in e ? e.deltaY : u[1] - i[1],
                  f = e.target,
                  s = Math.abs(c) > Math.abs(l) ? "h" : "v";
                if ("touches" in e && "h" === s && "range" === f.type)
                  return !1;
                var d = W(s, f);
                if (!d) return !0;
                if (
                  (d ? (o = s) : ((o = "v" === s ? "h" : "v"), (d = W(s, f))),
                  !d)
                )
                  return !1;
                if (
                  (!r.current &&
                    "changedTouches" in e &&
                    (c || l) &&
                    (r.current = o),
                  !o)
                )
                  return !0;
                var p = r.current || o;
                return F(p, t, e, "h" === p ? c : l, !0);
              }, []),
              c = f.useCallback(function (e) {
                if (X.length && X[X.length - 1] === i) {
                  var n = "deltaY" in e ? B(e) : U(e),
                    r = t.current.filter(function (t) {
                      var r;
                      return (
                        t.name === e.type &&
                        t.target === e.target &&
                        (r = t.delta)[0] === n[0] &&
                        r[1] === n[1]
                      );
                    })[0];
                  if (r && r.should) {
                    e.cancelable && e.preventDefault();
                    return;
                  }
                  if (!r) {
                    var o = (a.current.shards || [])
                      .map(D)
                      .filter(Boolean)
                      .filter(function (t) {
                        return t.contains(e.target);
                      });
                    (o.length > 0 ? u(e, o[0]) : !a.current.noIsolation) &&
                      e.cancelable &&
                      e.preventDefault();
                  }
                }
              }, []),
              s = f.useCallback(function (e, n, r, o) {
                var i = { name: e, delta: n, target: r, should: o };
                t.current.push(i),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== i;
                    });
                  }, 1);
              }, []),
              d = f.useCallback(function (e) {
                (n.current = U(e)), (r.current = void 0);
              }, []),
              p = f.useCallback(function (t) {
                s(t.type, B(t), t.target, u(t, e.lockRef.current));
              }, []),
              m = f.useCallback(function (t) {
                s(t.type, U(t), t.target, u(t, e.lockRef.current));
              }, []);
            f.useEffect(function () {
              return (
                X.push(i),
                e.setCallbacks({
                  onScrollCapture: p,
                  onWheelCapture: p,
                  onTouchMoveCapture: m,
                }),
                document.addEventListener("wheel", c, P),
                document.addEventListener("touchmove", c, P),
                document.addEventListener("touchstart", d, P),
                function () {
                  (X = X.filter(function (e) {
                    return e !== i;
                  })),
                    document.removeEventListener("wheel", c, P),
                    document.removeEventListener("touchmove", c, P),
                    document.removeEventListener("touchstart", d, P);
                }
              );
            }, []);
            var h = e.removeScrollBar,
              v = e.inert;
            return f.createElement(
              f.Fragment,
              null,
              v
                ? f.createElement(i, {
                    styles: "\n  .block-interactivity-"
                      .concat(
                        o,
                        " {pointer-events: none;}\n  .allow-interactivity-"
                      )
                      .concat(o, " {pointer-events: all;}\n"),
                  })
                : null,
              h ? f.createElement(M, { gapMode: "margin" }) : null
            );
          }),
          b),
        Y = f.forwardRef(function (e, t) {
          return f.createElement(
            y,
            (0, l.__assign)({}, e, { ref: t, sideCar: q })
          );
        });
      Y.classNames = y.classNames;
      var z = Y;
    },
    39014: function (e, t, n) {
      n.d(t, {
        FF: function () {
          return S;
        },
        S5: function () {
          return p;
        },
        Wd: function () {
          return v;
        },
        bytesToNumberBE: function () {
          return f;
        },
        ci: function () {
          return u;
        },
        dQ: function () {
          return g;
        },
        eV: function () {
          return h;
        },
        hexToBytes: function () {
          return l;
        },
        n$: function () {
          return E;
        },
        ql: function () {
          return m;
        },
        tL: function () {
          return d;
        },
        ty: function () {
          return s;
        },
      }),
        BigInt(0);
      let r = BigInt(1),
        o = BigInt(2),
        i = (e) => e instanceof Uint8Array,
        a = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function u(e) {
        if (!i(e)) throw Error("Uint8Array expected");
        let t = "";
        for (let n = 0; n < e.length; n++) t += a[e[n]];
        return t;
      }
      function c(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return BigInt("" === e ? "0" : `0x${e}`);
      }
      function l(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        let t = e.length;
        if (t % 2)
          throw Error(
            "padded hex string expected, got unpadded hex of length " + t
          );
        let n = new Uint8Array(t / 2);
        for (let t = 0; t < n.length; t++) {
          let r = 2 * t,
            o = Number.parseInt(e.slice(r, r + 2), 16);
          if (Number.isNaN(o) || o < 0) throw Error("Invalid byte sequence");
          n[t] = o;
        }
        return n;
      }
      function f(e) {
        return c(u(e));
      }
      function s(e) {
        if (!i(e)) throw Error("Uint8Array expected");
        return c(u(Uint8Array.from(e).reverse()));
      }
      function d(e, t) {
        return l(e.toString(16).padStart(2 * t, "0"));
      }
      function p(e, t) {
        return d(e, t).reverse();
      }
      function m(e, t, n) {
        let r;
        if ("string" == typeof t)
          try {
            r = l(t);
          } catch (n) {
            throw Error(
              `${e} must be valid hex string, got "${t}". Cause: ${n}`
            );
          }
        else if (i(t)) r = Uint8Array.from(t);
        else throw Error(`${e} must be hex string or Uint8Array`);
        let o = r.length;
        if ("number" == typeof n && o !== n)
          throw Error(`${e} expected ${n} bytes, got ${o}`);
        return r;
      }
      function h(...e) {
        let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
          n = 0;
        return (
          e.forEach((e) => {
            if (!i(e)) throw Error("Uint8Array expected");
            t.set(e, n), (n += e.length);
          }),
          t
        );
      }
      function v(e, t) {
        if (e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      let g = (e) => (o << BigInt(e - 1)) - r,
        y = (e) => new Uint8Array(e),
        b = (e) => Uint8Array.from(e);
      function E(e, t, n) {
        if ("number" != typeof e || e < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof t || t < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof n) throw Error("hmacFn must be a function");
        let r = y(e),
          o = y(e),
          i = 0,
          a = () => {
            r.fill(1), o.fill(0), (i = 0);
          },
          u = (...e) => n(o, r, ...e),
          c = (e = y()) => {
            (o = u(b([0]), e)),
              (r = u()),
              0 !== e.length && ((o = u(b([1]), e)), (r = u()));
          },
          l = () => {
            if (i++ >= 1e3) throw Error("drbg: tried 1000 values");
            let e = 0,
              n = [];
            for (; e < t; ) {
              let t = (r = u()).slice();
              n.push(t), (e += r.length);
            }
            return h(...n);
          };
        return (e, t) => {
          let n;
          for (a(), c(e); !(n = t(l())); ) c();
          return a(), n;
        };
      }
      let w = {
        bigint: (e) => "bigint" == typeof e,
        function: (e) => "function" == typeof e,
        boolean: (e) => "boolean" == typeof e,
        string: (e) => "string" == typeof e,
        stringOrUint8Array: (e) =>
          "string" == typeof e || e instanceof Uint8Array,
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) =>
          "function" == typeof e && Number.isSafeInteger(e.outputLen),
      };
      function S(e, t, n = {}) {
        let r = (t, n, r) => {
          let o = w[n];
          if ("function" != typeof o)
            throw Error(`Invalid validator "${n}", expected function`);
          let i = e[t];
          if ((!r || void 0 !== i) && !o(i, e))
            throw Error(
              `Invalid param ${String(t)}=${i} (${typeof i}), expected ${n}`
            );
        };
        for (let [e, n] of Object.entries(t)) r(e, n, !1);
        for (let [e, t] of Object.entries(n)) r(e, t, !0);
        return e;
      }
    },
    71746: function (e, t, n) {
      n.d(t, {
        EW: function () {
          return i;
        },
      });
      var r = n(15039);
      let o = 0;
      function i() {
        (0, r.useEffect)(() => {
          var e, t;
          let n = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement(
              "afterbegin",
              null !== (e = n[0]) && void 0 !== e ? e : a()
            ),
            document.body.insertAdjacentElement(
              "beforeend",
              null !== (t = n[1]) && void 0 !== t ? t : a()
            ),
            o++,
            () => {
              1 === o &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                o--;
            }
          );
        }, []);
      }
      function a() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
    },
    46201: function (e, t, n) {
      let r;
      n.d(t, {
        M: function () {
          return d;
        },
      });
      var o = n(65122),
        i = n(15039),
        a = n(41633),
        u = n(94221),
        c = n(8035);
      let l = "focusScope.autoFocusOnMount",
        f = "focusScope.autoFocusOnUnmount",
        s = { bubbles: !1, cancelable: !0 },
        d = (0, i.forwardRef)((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: d,
              onUnmountAutoFocus: g,
              ...y
            } = e,
            [b, E] = (0, i.useState)(null),
            w = (0, c.W)(d),
            S = (0, c.W)(g),
            A = (0, i.useRef)(null),
            x = (0, a.e)(t, (e) => E(e)),
            C = (0, i.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (0, i.useEffect)(() => {
            if (r) {
              function e(e) {
                if (C.paused || !b) return;
                let t = e.target;
                b.contains(t) ? (A.current = t) : h(A.current, { select: !0 });
              }
              function t(e) {
                if (C.paused || !b) return;
                let t = e.relatedTarget;
                null === t || b.contains(t) || h(A.current, { select: !0 });
              }
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && h(b);
              });
              return (
                b && n.observe(b, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, b, C.paused]),
            (0, i.useEffect)(() => {
              if (b) {
                v.add(C);
                let e = document.activeElement;
                if (!b.contains(e)) {
                  let t = new CustomEvent(l, s);
                  b.addEventListener(l, w),
                    b.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let n = document.activeElement;
                        for (let r of e)
                          if (
                            (h(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        p(b).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && h(b));
                }
                return () => {
                  b.removeEventListener(l, w),
                    setTimeout(() => {
                      let t = new CustomEvent(f, s);
                      b.addEventListener(f, S),
                        b.dispatchEvent(t),
                        t.defaultPrevented ||
                          h(null != e ? e : document.body, { select: !0 }),
                        b.removeEventListener(f, S),
                        v.remove(C);
                    }, 0);
                };
              }
            }, [b, w, S, C]);
          let I = (0, i.useCallback)(
            (e) => {
              if ((!n && !r) || C.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, i] = (function (e) {
                    let t = p(e);
                    return [m(t, e), m(t.reverse(), e)];
                  })(t);
                r && i
                  ? e.shiftKey || o !== i
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && h(i, { select: !0 }))
                    : (e.preventDefault(), n && h(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, C.paused]
          );
          return (0, i.createElement)(
            u.WV.div,
            (0, o.Z)({ tabIndex: -1 }, y, { ref: x, onKeyDown: I })
          );
        });
      function p(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function m(e, t) {
        for (let n of e)
          if (
            !(function (e, { upTo: t }) {
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function h(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      let v =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            e !== t && (null == t || t.pause()), (r = g(r, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (r = g(r, e))[0]) || void 0 === t || t.resume();
          },
        });
      function g(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
    },
    7600: function (e, t, n) {
      var r = n(48717).Z.Symbol;
      t.Z = r;
    },
    17996: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(7600),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        u = r.Z ? r.Z.toStringTag : void 0,
        c = function (e) {
          var t = i.call(e, u),
            n = e[u];
          try {
            e[u] = void 0;
            var r = !0;
          } catch (e) {}
          var o = a.call(e);
          return r && (t ? (e[u] = n) : delete e[u]), o;
        },
        l = Object.prototype.toString,
        f = r.Z ? r.Z.toStringTag : void 0,
        s = function (e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : f && f in Object(e)
            ? c(e)
            : l.call(e);
        };
    },
    64380: function (e, t) {
      var n =
        "object" == typeof global &&
        global &&
        global.Object === Object &&
        global;
      t.Z = n;
    },
    48717: function (e, t, n) {
      var r = n(64380),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r.Z || o || Function("return this")();
      t.Z = i;
    },
    84639: function (e, t) {
      t.Z = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    96786: function (e, t) {
      t.Z = function (e) {
        return null != e && "object" == typeof e;
      };
    },
    55357: function (e, t, n) {
      var r = n(17996),
        o = n(96786);
      t.Z = function (e) {
        return (
          "symbol" == typeof e ||
          ((0, o.Z)(e) && "[object Symbol]" == (0, r.Z)(e))
        );
      };
    },
    78906: function (e, t, n) {
      n.d(t, {
        r: function () {
          return a;
        },
      });
      var r = n(42196),
        o = n(52796),
        i = n(66616);
      function a(e, t) {
        let n =
            "string" == typeof e
              ? (0, o.qX)(e)
              : e.raw instanceof Uint8Array
              ? e.raw
              : (0, o.O0)(e.raw),
          a = (0, o.qX)(`Ethereum Signed Message:
${n.length}`);
        return (0, i.w)((0, r.zo)([a, n]), t);
      }
    },
    21249: function (e, t, n) {
      n.d(t, {
        J: function () {
          return c;
        },
      });
      var r = n(68882),
        o = n(42196),
        i = n(98617),
        a = n(66616),
        u = n(51216);
      function c(e) {
        let { domain: t = {}, message: n, primaryType: r } = e,
          i = { EIP712Domain: (0, u.cj)({ domain: t }), ...e.types };
        (0, u.iC)({ domain: t, message: n, primaryType: r, types: i });
        let c = ["0x1901"];
        return (
          t &&
            c.push(
              (function ({ domain: e, types: t }) {
                return l({ data: e, primaryType: "EIP712Domain", types: t });
              })({ domain: t, types: i })
            ),
          "EIP712Domain" !== r &&
            c.push(l({ data: n, primaryType: r, types: i })),
          (0, a.w)((0, o.zo)(c))
        );
      }
      function l({ data: e, primaryType: t, types: n }) {
        let o = (function e({ data: t, primaryType: n, types: o }) {
          let u = [{ type: "bytes32" }],
            c = [
              (function ({ primaryType: e, types: t }) {
                let n = (0, i.NC)(
                  (function ({ primaryType: e, types: t }) {
                    let n = "",
                      r = (function e(
                        { primaryType: t, types: n },
                        r = new Set()
                      ) {
                        let o = t.match(/^\w*/u),
                          i = o?.[0];
                        if (r.has(i) || void 0 === n[i]) return r;
                        for (let t of (r.add(i), n[i]))
                          e({ primaryType: t.type, types: n }, r);
                        return r;
                      })({ primaryType: e, types: t });
                    for (let o of (r.delete(e), [e, ...Array.from(r).sort()]))
                      n += `${o}(${t[o]
                        .map(({ name: e, type: t }) => `${t} ${e}`)
                        .join(",")})`;
                    return n;
                  })({ primaryType: e, types: t })
                );
                return (0, a.w)(n);
              })({ primaryType: n, types: o }),
            ];
          for (let l of o[n]) {
            let [n, f] = (function t({ types: n, name: o, type: u, value: c }) {
              if (void 0 !== n[u])
                return [
                  { type: "bytes32" },
                  (0, a.w)(e({ data: c, primaryType: u, types: n })),
                ];
              if ("bytes" === u) {
                let e = c.length % 2 ? "0" : "";
                return (
                  (c = `0x${e + c.slice(2)}`),
                  [{ type: "bytes32" }, (0, a.w)(c)]
                );
              }
              if ("string" === u)
                return [{ type: "bytes32" }, (0, a.w)((0, i.NC)(c))];
              if (u.lastIndexOf("]") === u.length - 1) {
                let e = u.slice(0, u.lastIndexOf("[")),
                  i = c.map((r) => t({ name: o, type: e, types: n, value: r }));
                return [
                  { type: "bytes32" },
                  (0, a.w)(
                    (0, r.E)(
                      i.map(([e]) => e),
                      i.map(([, e]) => e)
                    )
                  ),
                ];
              }
              return [{ type: u }, c];
            })({ types: o, name: l.name, type: l.type, value: t[l.name] });
            u.push(n), c.push(f);
          }
          return (0, r.E)(u, c);
        })({ data: e, primaryType: t, types: n });
        return (0, a.w)(o);
      }
    },
    51216: function (e, t, n) {
      n.d(t, {
        cj: function () {
          return s;
        },
        iC: function () {
          return f;
        },
      });
      var r = n(18007),
        o = n(21997),
        i = n(79173),
        a = n(36338),
        u = n(98617);
      let c = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        l =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
      function f(e) {
        let { domain: t, message: n, primaryType: f, types: s } = e,
          d = (e, t) => {
            for (let n of e) {
              let { name: e, type: f } = n,
                p = t[e],
                m = f.match(l);
              if (m && ("number" == typeof p || "bigint" == typeof p)) {
                let [e, t, n] = m;
                (0, u.eC)(p, { signed: "int" === t, size: parseInt(n) / 8 });
              }
              if ("address" === f && "string" == typeof p && !(0, i.U)(p))
                throw new o.b({ address: p });
              let h = f.match(c);
              if (h) {
                let [e, t] = h;
                if (t && (0, a.d)(p) !== parseInt(t))
                  throw new r.KY({
                    expectedSize: parseInt(t),
                    givenSize: (0, a.d)(p),
                  });
              }
              let v = s[f];
              v && d(v, p);
            }
          };
        s.EIP712Domain && t && d(s.EIP712Domain, t),
          "EIP712Domain" !== f && d(s[f], n);
      }
      function s({ domain: e }) {
        return [
          "string" == typeof e?.name && { name: "name", type: "string" },
          e?.version && { name: "version", type: "string" },
          "number" == typeof e?.chainId && { name: "chainId", type: "uint256" },
          e?.verifyingContract && {
            name: "verifyingContract",
            type: "address",
          },
          e?.salt && { name: "salt", type: "bytes32" },
        ].filter(Boolean);
      }
    },
  },
]);
