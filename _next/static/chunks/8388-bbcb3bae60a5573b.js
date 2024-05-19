(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8388],
  {
    60171: function (e, t, n) {
      e.exports = n(79193);
    },
    65122: function (e, t, n) {
      "use strict";
      function r() {
        return (r = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    65727: function (e, t, n) {
      "use strict";
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((null == e || e(r), !1 === n || !r.defaultPrevented))
            return null == t ? void 0 : t(r);
        };
      }
      n.d(t, {
        M: function () {
          return r;
        },
      });
    },
    41633: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return o;
        },
        e: function () {
          return i;
        },
      });
      var r = n(15039);
      function o(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function i(...e) {
        return (0, r.useCallback)(o(...e), e);
      }
    },
    70686: function (e, t, n) {
      "use strict";
      n.d(t, {
        b: function () {
          return i;
        },
        k: function () {
          return o;
        },
      });
      var r = n(15039);
      function o(e, t) {
        let n = (0, r.createContext)(t);
        function o(e) {
          let { children: t, ...o } = e,
            i = (0, r.useMemo)(() => o, Object.values(o));
          return (0, r.createElement)(n.Provider, { value: i }, t);
        }
        return (
          (o.displayName = e + "Provider"),
          [
            o,
            function (o) {
              let i = (0, r.useContext)(n);
              if (i) return i;
              if (void 0 !== t) return t;
              throw Error(`\`${o}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function i(e, t = []) {
        let n = [],
          o = () => {
            let t = n.map((e) => (0, r.createContext)(e));
            return function (n) {
              let o = (null == n ? void 0 : n[e]) || t;
              return (0, r.useMemo)(
                () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
                [n, o]
              );
            };
          };
        return (
          (o.scopeName = e),
          [
            function (t, o) {
              let i = (0, r.createContext)(o),
                l = n.length;
              function u(t) {
                let { scope: n, children: o, ...u } = t,
                  a = (null == n ? void 0 : n[e][l]) || i,
                  s = (0, r.useMemo)(() => u, Object.values(u));
                return (0, r.createElement)(a.Provider, { value: s }, o);
              }
              return (
                (n = [...n, o]),
                (u.displayName = t + "Provider"),
                [
                  u,
                  function (n, u) {
                    let a = (null == u ? void 0 : u[e][l]) || i,
                      s = (0, r.useContext)(a);
                    if (s) return s;
                    if (void 0 !== o) return o;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`];
                    return { ...t, ...o };
                  }, {});
                  return (0, r.useMemo)(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(o, ...t),
          ]
        );
      }
    },
    10094: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        XB: function () {
          return d;
        },
      });
      var o = n(65122),
        i = n(15039),
        l = n(65727),
        u = n(94221),
        a = n(41633),
        s = n(8035);
      let c = "dismissableLayer.update",
        f = (0, i.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        d = (0, i.forwardRef)((e, t) => {
          var n;
          let {
              disableOutsidePointerEvents: d = !1,
              onEscapeKeyDown: h,
              onPointerDownOutside: v,
              onFocusOutside: g,
              onInteractOutside: y,
              onDismiss: w,
              ...b
            } = e,
            x = (0, i.useContext)(f),
            [E, C] = (0, i.useState)(null),
            T =
              null !== (n = null == E ? void 0 : E.ownerDocument) &&
              void 0 !== n
                ? n
                : null == globalThis
                ? void 0
                : globalThis.document,
            [, P] = (0, i.useState)({}),
            R = (0, a.e)(t, (e) => C(e)),
            O = Array.from(x.layers),
            [L] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1),
            A = O.indexOf(L),
            D = E ? O.indexOf(E) : -1,
            S = x.layersWithOutsidePointerEventsDisabled.size > 0,
            M = D >= A,
            k = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, s.W)(e),
                r = (0, i.useRef)(!1),
                o = (0, i.useRef)(() => {});
              return (
                (0, i.useEffect)(() => {
                  let e = (e) => {
                      if (e.target && !r.current) {
                        let r = { originalEvent: e };
                        function i() {
                          m("dismissableLayer.pointerDownOutside", n, r, {
                            discrete: !0,
                          });
                        }
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", o.current),
                            (o.current = i),
                            t.addEventListener("click", o.current, {
                              once: !0,
                            }))
                          : i();
                      } else t.removeEventListener("click", o.current);
                      r.current = !1;
                    },
                    i = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(i),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", o.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...x.branches].some((e) => e.contains(t));
              !M ||
                n ||
                (null == v || v(e),
                null == y || y(e),
                e.defaultPrevented || null == w || w());
            }, T),
            _ = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, s.W)(e),
                r = (0, i.useRef)(!1);
              return (
                (0, i.useEffect)(() => {
                  let e = (e) => {
                    e.target &&
                      !r.current &&
                      m(
                        "dismissableLayer.focusOutside",
                        n,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, n]),
                {
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...x.branches].some((e) => e.contains(t)) ||
                (null == g || g(e),
                null == y || y(e),
                e.defaultPrevented || null == w || w());
            }, T);
          return (
            !(function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, s.W)(e);
              (0, i.useEffect)(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e),
                  () => t.removeEventListener("keydown", e)
                );
              }, [n, t]);
            })((e) => {
              D !== x.layers.size - 1 ||
                (null == h || h(e),
                !e.defaultPrevented && w && (e.preventDefault(), w()));
            }, T),
            (0, i.useEffect)(() => {
              if (E)
                return (
                  d &&
                    (0 === x.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = T.body.style.pointerEvents),
                      (T.body.style.pointerEvents = "none")),
                    x.layersWithOutsidePointerEventsDisabled.add(E)),
                  x.layers.add(E),
                  p(),
                  () => {
                    d &&
                      1 === x.layersWithOutsidePointerEventsDisabled.size &&
                      (T.body.style.pointerEvents = r);
                  }
                );
            }, [E, T, d, x]),
            (0, i.useEffect)(
              () => () => {
                E &&
                  (x.layers.delete(E),
                  x.layersWithOutsidePointerEventsDisabled.delete(E),
                  p());
              },
              [E, x]
            ),
            (0, i.useEffect)(() => {
              let e = () => P({});
              return (
                document.addEventListener(c, e),
                () => document.removeEventListener(c, e)
              );
            }, []),
            (0, i.createElement)(
              u.WV.div,
              (0, o.Z)({}, b, {
                ref: R,
                style: {
                  pointerEvents: S ? (M ? "auto" : "none") : void 0,
                  ...e.style,
                },
                onFocusCapture: (0, l.M)(e.onFocusCapture, _.onFocusCapture),
                onBlurCapture: (0, l.M)(e.onBlurCapture, _.onBlurCapture),
                onPointerDownCapture: (0, l.M)(
                  e.onPointerDownCapture,
                  k.onPointerDownCapture
                ),
              })
            )
          );
        });
      function p() {
        let e = new CustomEvent(c);
        document.dispatchEvent(e);
      }
      function m(e, t, n, { discrete: r }) {
        let o = n.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && o.addEventListener(e, t, { once: !0 }),
          r ? (0, u.jH)(o, i) : o.dispatchEvent(i);
      }
    },
    89219: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return a;
        },
      });
      var r,
        o = n(15039),
        i = n(17772);
      let l = (r || (r = n.t(o, 2)))["useId".toString()] || (() => void 0),
        u = 0;
      function a(e) {
        let [t, n] = o.useState(l());
        return (
          (0, i.b)(() => {
            e || n((e) => (null != e ? e : String(u++)));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    15755: function (e, t, n) {
      "use strict";
      n.d(t, {
        ee: function () {
          return eW;
        },
        Eh: function () {
          return eF;
        },
        VY: function () {
          return eH;
        },
        fC: function () {
          return eN;
        },
        D7: function () {
          return eE;
        },
      });
      var r = n(65122),
        o = n(15039);
      let i = ["top", "right", "bottom", "left"],
        l = Math.min,
        u = Math.max,
        a = Math.round,
        s = Math.floor,
        c = (e) => ({ x: e, y: e }),
        f = { left: "right", right: "left", bottom: "top", top: "bottom" },
        d = { start: "end", end: "start" };
      function p(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function m(e) {
        return e.split("-")[0];
      }
      function h(e) {
        return e.split("-")[1];
      }
      function v(e) {
        return "x" === e ? "y" : "x";
      }
      function g(e) {
        return "y" === e ? "height" : "width";
      }
      function y(e) {
        return ["top", "bottom"].includes(m(e)) ? "y" : "x";
      }
      function w(e) {
        return e.replace(/start|end/g, (e) => d[e]);
      }
      function b(e) {
        return e.replace(/left|right|bottom|top/g, (e) => f[e]);
      }
      function x(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function E(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height,
        };
      }
      function C(e, t, n) {
        let r,
          { reference: o, floating: i } = e,
          l = y(t),
          u = v(y(t)),
          a = g(u),
          s = m(t),
          c = "y" === l,
          f = o.x + o.width / 2 - i.width / 2,
          d = o.y + o.height / 2 - i.height / 2,
          p = o[a] / 2 - i[a] / 2;
        switch (s) {
          case "top":
            r = { x: f, y: o.y - i.height };
            break;
          case "bottom":
            r = { x: f, y: o.y + o.height };
            break;
          case "right":
            r = { x: o.x + o.width, y: d };
            break;
          case "left":
            r = { x: o.x - i.width, y: d };
            break;
          default:
            r = { x: o.x, y: o.y };
        }
        switch (h(t)) {
          case "start":
            r[u] -= p * (n && c ? -1 : 1);
            break;
          case "end":
            r[u] += p * (n && c ? -1 : 1);
        }
        return r;
      }
      let T = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: i = [],
            platform: l,
          } = n,
          u = i.filter(Boolean),
          a = await (null == l.isRTL ? void 0 : l.isRTL(t)),
          s = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: c, y: f } = C(s, r, a),
          d = r,
          p = {},
          m = 0;
        for (let n = 0; n < u.length; n++) {
          let { name: i, fn: h } = u[n],
            {
              x: v,
              y: g,
              data: y,
              reset: w,
            } = await h({
              x: c,
              y: f,
              initialPlacement: r,
              placement: d,
              strategy: o,
              middlewareData: p,
              rects: s,
              platform: l,
              elements: { reference: e, floating: t },
            });
          (c = null != v ? v : c),
            (f = null != g ? g : f),
            (p = { ...p, [i]: { ...p[i], ...y } }),
            w &&
              m <= 50 &&
              (m++,
              "object" == typeof w &&
                (w.placement && (d = w.placement),
                w.rects &&
                  (s =
                    !0 === w.rects
                      ? await l.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : w.rects),
                ({ x: c, y: f } = C(s, d, a))),
              (n = -1));
        }
        return { x: c, y: f, placement: d, strategy: o, middlewareData: p };
      };
      async function P(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: o, platform: i, rects: l, elements: u, strategy: a } = e,
          {
            boundary: s = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: f = "floating",
            altBoundary: d = !1,
            padding: m = 0,
          } = p(t, e),
          h = x(m),
          v = u[d ? ("floating" === f ? "reference" : "floating") : f],
          g = E(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(v))) ||
                n
                  ? v
                  : v.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(u.floating))),
              boundary: s,
              rootBoundary: c,
              strategy: a,
            })
          ),
          y = "floating" === f ? { ...l.floating, x: r, y: o } : l.reference,
          w = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(u.floating)),
          b = ((await (null == i.isElement ? void 0 : i.isElement(w))) &&
            (await (null == i.getScale ? void 0 : i.getScale(w)))) || {
            x: 1,
            y: 1,
          },
          C = E(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: u,
                  rect: y,
                  offsetParent: w,
                  strategy: a,
                })
              : y
          );
        return {
          top: (g.top - C.top + h.top) / b.y,
          bottom: (C.bottom - g.bottom + h.bottom) / b.y,
          left: (g.left - C.left + h.left) / b.x,
          right: (C.right - g.right + h.right) / b.x,
        };
      }
      function R(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function O(e) {
        return i.some((t) => e[t] >= 0);
      }
      async function L(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          l = m(n),
          u = h(n),
          a = "y" === y(n),
          s = ["left", "top"].includes(l) ? -1 : 1,
          c = i && a ? -1 : 1,
          f = p(t, e),
          {
            mainAxis: d,
            crossAxis: v,
            alignmentAxis: g,
          } = "number" == typeof f
            ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
            : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...f };
        return (
          u && "number" == typeof g && (v = "end" === u ? -1 * g : g),
          a ? { x: v * c, y: d * s } : { x: d * s, y: v * c }
        );
      }
      function A(e) {
        return M(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function D(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function S(e) {
        var t;
        return null ==
          (t = (M(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function M(e) {
        return e instanceof Node || e instanceof D(e).Node;
      }
      function k(e) {
        return e instanceof Element || e instanceof D(e).Element;
      }
      function _(e) {
        return e instanceof HTMLElement || e instanceof D(e).HTMLElement;
      }
      function N(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof D(e).ShadowRoot)
        );
      }
      function W(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = V(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function H(e) {
        let t = F(),
          n = V(e);
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (n.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function F() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function I(e) {
        return ["html", "body", "#document"].includes(A(e));
      }
      function V(e) {
        return D(e).getComputedStyle(e);
      }
      function $(e) {
        return k(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function z(e) {
        if ("html" === A(e)) return e;
        let t = e.assignedSlot || e.parentNode || (N(e) && e.host) || S(e);
        return N(t) ? t.host : t;
      }
      function B(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = (function e(t) {
            let n = z(t);
            return I(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : _(n) && W(n)
              ? n
              : e(n);
          })(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          l = D(o);
        return i
          ? t.concat(
              l,
              l.visualViewport || [],
              W(o) ? o : [],
              l.frameElement && n ? B(l.frameElement) : []
            )
          : t.concat(o, B(o, [], n));
      }
      function Z(e) {
        let t = V(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = _(e),
          i = o ? e.offsetWidth : n,
          l = o ? e.offsetHeight : r,
          u = a(n) !== i || a(r) !== l;
        return u && ((n = i), (r = l)), { width: n, height: r, $: u };
      }
      function j(e) {
        return k(e) ? e : e.contextElement;
      }
      function U(e) {
        let t = j(e);
        if (!_(t)) return c(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: i } = Z(t),
          l = (i ? a(n.width) : n.width) / r,
          u = (i ? a(n.height) : n.height) / o;
        return (
          (l && Number.isFinite(l)) || (l = 1),
          (u && Number.isFinite(u)) || (u = 1),
          { x: l, y: u }
        );
      }
      let Y = c(0);
      function X(e) {
        let t = D(e);
        return F() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : Y;
      }
      function K(e, t, n, r) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let i = e.getBoundingClientRect(),
          l = j(e),
          u = c(1);
        t && (r ? k(r) && (u = U(r)) : (u = U(e)));
        let a = (void 0 === (o = n) && (o = !1), r && (!o || r === D(l)) && o)
            ? X(l)
            : c(0),
          s = (i.left + a.x) / u.x,
          f = (i.top + a.y) / u.y,
          d = i.width / u.x,
          p = i.height / u.y;
        if (l) {
          let e = D(l),
            t = r && k(r) ? D(r) : r,
            n = e,
            o = n.frameElement;
          for (; o && r && t !== n; ) {
            let e = U(o),
              t = o.getBoundingClientRect(),
              r = V(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (s *= e.x),
              (f *= e.y),
              (d *= e.x),
              (p *= e.y),
              (s += i),
              (f += l),
              (o = (n = D(o)).frameElement);
          }
        }
        return E({ width: d, height: p, x: s, y: f });
      }
      let q = [":popover-open", ":modal"];
      function G(e) {
        return q.some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function J(e) {
        return K(S(e)).left + $(e).scrollLeft;
      }
      function Q(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = D(e),
              r = S(e),
              o = n.visualViewport,
              i = r.clientWidth,
              l = r.clientHeight,
              u = 0,
              a = 0;
            if (o) {
              (i = o.width), (l = o.height);
              let e = F();
              (!e || (e && "fixed" === t)) &&
                ((u = o.offsetLeft), (a = o.offsetTop));
            }
            return { width: i, height: l, x: u, y: a };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = S(e),
              n = $(e),
              r = e.ownerDocument.body,
              o = u(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              i = u(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              l = -n.scrollLeft + J(e),
              a = -n.scrollTop;
            return (
              "rtl" === V(r).direction &&
                (l += u(t.clientWidth, r.clientWidth) - o),
              { width: o, height: i, x: l, y: a }
            );
          })(S(e));
        else if (k(t))
          r = (function (e, t) {
            let n = K(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = _(e) ? U(e) : c(1),
              l = e.clientWidth * i.x;
            return {
              width: l,
              height: e.clientHeight * i.y,
              x: o * i.x,
              y: r * i.y,
            };
          })(t, n);
        else {
          let n = X(e);
          r = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return E(r);
      }
      function ee(e, t) {
        return _(e) && "fixed" !== V(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function et(e, t) {
        let n = D(e);
        if (!_(e) || G(e)) return n;
        let r = ee(e, t);
        for (
          ;
          r &&
          ["table", "td", "th"].includes(A(r)) &&
          "static" === V(r).position;

        )
          r = ee(r, t);
        return r &&
          ("html" === A(r) ||
            ("body" === A(r) && "static" === V(r).position && !H(r)))
          ? n
          : r ||
              (function (e) {
                let t = z(e);
                for (; _(t) && !I(t); ) {
                  if (H(t)) return t;
                  t = z(t);
                }
                return null;
              })(e) ||
              n;
      }
      let en = async function (e) {
          let t = this.getOffsetParent || et,
            n = this.getDimensions;
          return {
            reference: (function (e, t, n) {
              let r = _(t),
                o = S(t),
                i = "fixed" === n,
                l = K(e, !0, i, t),
                u = { scrollLeft: 0, scrollTop: 0 },
                a = c(0);
              if (r || (!r && !i)) {
                if ((("body" !== A(t) || W(o)) && (u = $(t)), r)) {
                  let e = K(t, !0, i, t);
                  (a.x = e.x + t.clientLeft), (a.y = e.y + t.clientTop);
                } else o && (a.x = J(o));
              }
              return {
                x: l.left + u.scrollLeft - a.x,
                y: l.top + u.scrollTop - a.y,
                width: l.width,
                height: l.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, ...(await n(e.floating)) },
          };
        },
        er = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
              i = "fixed" === o,
              l = S(r),
              u = !!t && G(t.floating);
            if (r === l || (u && i)) return n;
            let a = { scrollLeft: 0, scrollTop: 0 },
              s = c(1),
              f = c(0),
              d = _(r);
            if (
              (d || (!d && !i)) &&
              (("body" !== A(r) || W(l)) && (a = $(r)), _(r))
            ) {
              let e = K(r);
              (s = U(r)), (f.x = e.x + r.clientLeft), (f.y = e.y + r.clientTop);
            }
            return {
              width: n.width * s.x,
              height: n.height * s.y,
              x: n.x * s.x - a.scrollLeft * s.x + f.x,
              y: n.y * s.y - a.scrollTop * s.y + f.y,
            };
          },
          getDocumentElement: S,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
              i = [
                ...("clippingAncestors" === n
                  ? (function (e, t) {
                      let n = t.get(e);
                      if (n) return n;
                      let r = B(e, [], !1).filter(
                          (e) => k(e) && "body" !== A(e)
                        ),
                        o = null,
                        i = "fixed" === V(e).position,
                        l = i ? z(e) : e;
                      for (; k(l) && !I(l); ) {
                        let t = V(l),
                          n = H(l);
                        n || "fixed" !== t.position || (o = null),
                          (
                            i
                              ? !n && !o
                              : (!n &&
                                  "static" === t.position &&
                                  !!o &&
                                  ["absolute", "fixed"].includes(o.position)) ||
                                (W(l) &&
                                  !n &&
                                  (function e(t, n) {
                                    let r = z(t);
                                    return (
                                      !(r === n || !k(r) || I(r)) &&
                                      ("fixed" === V(r).position || e(r, n))
                                    );
                                  })(e, l))
                          )
                            ? (r = r.filter((e) => e !== l))
                            : (o = t),
                          (l = z(l));
                      }
                      return t.set(e, r), r;
                    })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              a = i[0],
              s = i.reduce((e, n) => {
                let r = Q(t, n, o);
                return (
                  (e.top = u(r.top, e.top)),
                  (e.right = l(r.right, e.right)),
                  (e.bottom = l(r.bottom, e.bottom)),
                  (e.left = u(r.left, e.left)),
                  e
                );
              }, Q(t, a, o));
            return {
              width: s.right - s.left,
              height: s.bottom - s.top,
              x: s.left,
              y: s.top,
            };
          },
          getOffsetParent: et,
          getElementRects: en,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = Z(e);
            return { width: t, height: n };
          },
          getScale: U,
          isElement: k,
          isRTL: function (e) {
            return "rtl" === V(e).direction;
          },
        },
        eo = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: a,
                elements: s,
                middlewareData: c,
              } = t,
              { element: f, padding: d = 0 } = p(e, t) || {};
            if (null == f) return {};
            let m = x(d),
              w = { x: n, y: r },
              b = v(y(o)),
              E = g(b),
              C = await a.getDimensions(f),
              T = "y" === b,
              P = T ? "clientHeight" : "clientWidth",
              R = i.reference[E] + i.reference[b] - w[b] - i.floating[E],
              O = w[b] - i.reference[b],
              L = await (null == a.getOffsetParent
                ? void 0
                : a.getOffsetParent(f)),
              A = L ? L[P] : 0;
            (A && (await (null == a.isElement ? void 0 : a.isElement(L)))) ||
              (A = s.floating[P] || i.floating[E]);
            let D = A / 2 - C[E] / 2 - 1,
              S = l(m[T ? "top" : "left"], D),
              M = l(m[T ? "bottom" : "right"], D),
              k = A - C[E] - M,
              _ = A / 2 - C[E] / 2 + (R / 2 - O / 2),
              N = u(S, l(_, k)),
              W =
                !c.arrow &&
                null != h(o) &&
                _ !== N &&
                i.reference[E] / 2 - (_ < S ? S : M) - C[E] / 2 < 0,
              H = W ? (_ < S ? _ - S : _ - k) : 0;
            return {
              [b]: w[b] + H,
              data: {
                [b]: N,
                centerOffset: _ - N - H,
                ...(W && { alignmentOffset: H }),
              },
              reset: W,
            };
          },
        }),
        ei = (e, t, n) => {
          let r = new Map(),
            o = { platform: er, ...n },
            i = { ...o.platform, _c: r };
          return T(e, t, { ...o, platform: i });
        };
      var el = n(68946);
      let eu = (e) => ({
        name: "arrow",
        options: e,
        fn(t) {
          let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
          return n && {}.hasOwnProperty.call(n, "current")
            ? null != n.current
              ? eo({ element: n.current, padding: r }).fn(t)
              : {}
            : n
            ? eo({ element: n, padding: r }).fn(t)
            : {};
        },
      });
      var ea = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
      function es(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!es(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !es(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function ec(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function ef(e, t) {
        let n = ec(e);
        return Math.round(t * n) / n;
      }
      function ed(e) {
        let t = o.useRef(e);
        return (
          ea(() => {
            t.current = e;
          }),
          t
        );
      }
      var ep = n(94221);
      let em = (0, o.forwardRef)((e, t) => {
        let { children: n, width: i = 10, height: l = 5, ...u } = e;
        return (0, o.createElement)(
          ep.WV.svg,
          (0, r.Z)({}, u, {
            ref: t,
            width: i,
            height: l,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
          }),
          e.asChild
            ? n
            : (0, o.createElement)("polygon", { points: "0,0 30,0 15,10" })
        );
      });
      var eh = n(41633),
        ev = n(70686),
        eg = n(8035),
        ey = n(17772),
        ew = n(24735);
      let eb = "Popper",
        [ex, eE] = (0, ev.b)(eb),
        [eC, eT] = ex(eb),
        eP = (0, o.forwardRef)((e, t) => {
          let { __scopePopper: n, virtualRef: i, ...l } = e,
            u = eT("PopperAnchor", n),
            a = (0, o.useRef)(null),
            s = (0, eh.e)(t, a);
          return (
            (0, o.useEffect)(() => {
              u.onAnchorChange((null == i ? void 0 : i.current) || a.current);
            }),
            i
              ? null
              : (0, o.createElement)(ep.WV.div, (0, r.Z)({}, l, { ref: s }))
          );
        }),
        eR = "PopperContent",
        [eO, eL] = ex(eR),
        eA = (0, o.forwardRef)((e, t) => {
          var n, i, a, c, f, d, x, E, C, T, A, D, M, k;
          let {
              __scopePopper: _,
              side: N = "bottom",
              sideOffset: W = 0,
              align: H = "center",
              alignOffset: F = 0,
              arrowPadding: I = 0,
              avoidCollisions: V = !0,
              collisionBoundary: $ = [],
              collisionPadding: z = 0,
              sticky: Z = "partial",
              hideWhenDetached: U = !1,
              updatePositionStrategy: Y = "optimized",
              onPlaced: X,
              ...q
            } = e,
            G = eT(eR, _),
            [J, Q] = (0, o.useState)(null),
            ee = (0, eh.e)(t, (e) => Q(e)),
            [et, en] = (0, o.useState)(null),
            er = (0, ew.t)(et),
            eo =
              null !== (n = null == er ? void 0 : er.width) && void 0 !== n
                ? n
                : 0,
            em =
              null !== (i = null == er ? void 0 : er.height) && void 0 !== i
                ? i
                : 0,
            ev =
              "number" == typeof z
                ? z
                : { top: 0, right: 0, bottom: 0, left: 0, ...z },
            eb = Array.isArray($) ? $ : [$],
            ex = eb.length > 0,
            eE = { padding: ev, boundary: eb.filter(eM), altBoundary: ex },
            {
              refs: eC,
              floatingStyles: eP,
              placement: eL,
              isPositioned: eA,
              middlewareData: eD,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: r = [],
                  platform: i,
                  elements: { reference: l, floating: u } = {},
                  transform: a = !0,
                  whileElementsMounted: s,
                  open: c,
                } = e,
                [f, d] = o.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, m] = o.useState(r);
              es(p, r) || m(r);
              let [h, v] = o.useState(null),
                [g, y] = o.useState(null),
                w = o.useCallback((e) => {
                  e !== C.current && ((C.current = e), v(e));
                }, []),
                b = o.useCallback((e) => {
                  e !== T.current && ((T.current = e), y(e));
                }, []),
                x = l || h,
                E = u || g,
                C = o.useRef(null),
                T = o.useRef(null),
                P = o.useRef(f),
                R = null != s,
                O = ed(s),
                L = ed(i),
                A = o.useCallback(() => {
                  if (!C.current || !T.current) return;
                  let e = { placement: t, strategy: n, middleware: p };
                  L.current && (e.platform = L.current),
                    ei(C.current, T.current, e).then((e) => {
                      let t = { ...e, isPositioned: !0 };
                      D.current &&
                        !es(P.current, t) &&
                        ((P.current = t),
                        el.flushSync(() => {
                          d(t);
                        }));
                    });
                }, [p, t, n, L]);
              ea(() => {
                !1 === c &&
                  P.current.isPositioned &&
                  ((P.current.isPositioned = !1),
                  d((e) => ({ ...e, isPositioned: !1 })));
              }, [c]);
              let D = o.useRef(!1);
              ea(
                () => (
                  (D.current = !0),
                  () => {
                    D.current = !1;
                  }
                ),
                []
              ),
                ea(() => {
                  if ((x && (C.current = x), E && (T.current = E), x && E)) {
                    if (O.current) return O.current(x, E, A);
                    A();
                  }
                }, [x, E, A, O, R]);
              let S = o.useMemo(
                  () => ({
                    reference: C,
                    floating: T,
                    setReference: w,
                    setFloating: b,
                  }),
                  [w, b]
                ),
                M = o.useMemo(() => ({ reference: x, floating: E }), [x, E]),
                k = o.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!M.floating) return e;
                  let t = ef(M.floating, f.x),
                    r = ef(M.floating, f.y);
                  return a
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(ec(M.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, a, M.floating, f.x, f.y]);
              return o.useMemo(
                () => ({
                  ...f,
                  update: A,
                  refs: S,
                  elements: M,
                  floatingStyles: k,
                }),
                [f, A, S, M, k]
              );
            })({
              strategy: "fixed",
              placement: N + ("center" !== H ? "-" + H : ""),
              whileElementsMounted: (...e) =>
                (function (e, t, n, r) {
                  let o;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: i = !0,
                      ancestorResize: a = !0,
                      elementResize: c = "function" == typeof ResizeObserver,
                      layoutShift: f = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: d = !1,
                    } = r,
                    p = j(e),
                    m = i || a ? [...(p ? B(p) : []), ...B(t)] : [];
                  m.forEach((e) => {
                    i && e.addEventListener("scroll", n, { passive: !0 }),
                      a && e.addEventListener("resize", n);
                  });
                  let h =
                      p && f
                        ? (function (e, t) {
                            let n,
                              r = null,
                              o = S(e);
                            function i() {
                              var e;
                              clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                (r = null);
                            }
                            return (
                              !(function a(c, f) {
                                void 0 === c && (c = !1),
                                  void 0 === f && (f = 1),
                                  i();
                                let {
                                  left: d,
                                  top: p,
                                  width: m,
                                  height: h,
                                } = e.getBoundingClientRect();
                                if ((c || t(), !m || !h)) return;
                                let v = s(p),
                                  g = s(o.clientWidth - (d + m)),
                                  y = {
                                    rootMargin:
                                      -v +
                                      "px " +
                                      -g +
                                      "px " +
                                      -s(o.clientHeight - (p + h)) +
                                      "px " +
                                      -s(d) +
                                      "px",
                                    threshold: u(0, l(1, f)) || 1,
                                  },
                                  w = !0;
                                function b(e) {
                                  let t = e[0].intersectionRatio;
                                  if (t !== f) {
                                    if (!w) return a();
                                    t
                                      ? a(!1, t)
                                      : (n = setTimeout(() => {
                                          a(!1, 1e-7);
                                        }, 100));
                                  }
                                  w = !1;
                                }
                                try {
                                  r = new IntersectionObserver(b, {
                                    ...y,
                                    root: o.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(b, y);
                                }
                                r.observe(e);
                              })(!0),
                              i
                            );
                          })(p, n)
                        : null,
                    v = -1,
                    g = null;
                  c &&
                    ((g = new ResizeObserver((e) => {
                      let [r] = e;
                      r &&
                        r.target === p &&
                        g &&
                        (g.unobserve(t),
                        cancelAnimationFrame(v),
                        (v = requestAnimationFrame(() => {
                          var e;
                          null == (e = g) || e.observe(t);
                        }))),
                        n();
                    })),
                    p && !d && g.observe(p),
                    g.observe(t));
                  let y = d ? K(e) : null;
                  return (
                    d &&
                      (function t() {
                        let r = K(e);
                        y &&
                          (r.x !== y.x ||
                            r.y !== y.y ||
                            r.width !== y.width ||
                            r.height !== y.height) &&
                          n(),
                          (y = r),
                          (o = requestAnimationFrame(t));
                      })(),
                    n(),
                    () => {
                      var e;
                      m.forEach((e) => {
                        i && e.removeEventListener("scroll", n),
                          a && e.removeEventListener("resize", n);
                      }),
                        null == h || h(),
                        null == (e = g) || e.disconnect(),
                        (g = null),
                        d && cancelAnimationFrame(o);
                    }
                  );
                })(...e, { animationFrame: "always" === Y }),
              elements: { reference: G.anchor },
              middleware: [
                {
                  name: "offset",
                  options: (C = { mainAxis: W + em, alignmentAxis: F }),
                  async fn(e) {
                    var t, n;
                    let { x: r, y: o, placement: i, middlewareData: l } = e,
                      u = await L(e, C);
                    return i ===
                      (null == (t = l.offset) ? void 0 : t.placement) &&
                      null != (n = l.arrow) &&
                      n.alignmentOffset
                      ? {}
                      : {
                          x: r + u.x,
                          y: o + u.y,
                          data: { ...u, placement: i },
                        };
                  },
                },
                V && {
                  name: "shift",
                  options: (A = {
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter:
                      "partial" === Z
                        ? (void 0 === T && (T = {}),
                          {
                            options: T,
                            fn(e) {
                              let {
                                  x: t,
                                  y: n,
                                  placement: r,
                                  rects: o,
                                  middlewareData: i,
                                } = e,
                                {
                                  offset: l = 0,
                                  mainAxis: u = !0,
                                  crossAxis: a = !0,
                                } = p(T, e),
                                s = { x: t, y: n },
                                c = y(r),
                                f = v(c),
                                d = s[f],
                                h = s[c],
                                g = p(l, e),
                                w =
                                  "number" == typeof g
                                    ? { mainAxis: g, crossAxis: 0 }
                                    : { mainAxis: 0, crossAxis: 0, ...g };
                              if (u) {
                                let e = "y" === f ? "height" : "width",
                                  t =
                                    o.reference[f] - o.floating[e] + w.mainAxis,
                                  n =
                                    o.reference[f] +
                                    o.reference[e] -
                                    w.mainAxis;
                                d < t ? (d = t) : d > n && (d = n);
                              }
                              if (a) {
                                var b, x;
                                let e = "y" === f ? "width" : "height",
                                  t = ["top", "left"].includes(m(r)),
                                  n =
                                    o.reference[c] -
                                    o.floating[e] +
                                    ((t &&
                                      (null == (b = i.offset)
                                        ? void 0
                                        : b[c])) ||
                                      0) +
                                    (t ? 0 : w.crossAxis),
                                  l =
                                    o.reference[c] +
                                    o.reference[e] +
                                    (t
                                      ? 0
                                      : (null == (x = i.offset)
                                          ? void 0
                                          : x[c]) || 0) -
                                    (t ? w.crossAxis : 0);
                                h < n ? (h = n) : h > l && (h = l);
                              }
                              return { [f]: d, [c]: h };
                            },
                          })
                        : void 0,
                    ...eE,
                  }),
                  async fn(e) {
                    let { x: t, y: n, placement: r } = e,
                      {
                        mainAxis: o = !0,
                        crossAxis: i = !1,
                        limiter: a = {
                          fn: (e) => {
                            let { x: t, y: n } = e;
                            return { x: t, y: n };
                          },
                        },
                        ...s
                      } = p(A, e),
                      c = { x: t, y: n },
                      f = await P(e, s),
                      d = y(m(r)),
                      h = v(d),
                      g = c[h],
                      w = c[d];
                    if (o) {
                      let e = "y" === h ? "top" : "left",
                        t = "y" === h ? "bottom" : "right",
                        n = g + f[e],
                        r = g - f[t];
                      g = u(n, l(g, r));
                    }
                    if (i) {
                      let e = "y" === d ? "top" : "left",
                        t = "y" === d ? "bottom" : "right",
                        n = w + f[e],
                        r = w - f[t];
                      w = u(n, l(w, r));
                    }
                    let b = a.fn({ ...e, [h]: g, [d]: w });
                    return { ...b, data: { x: b.x - t, y: b.y - n } };
                  },
                },
                V && {
                  name: "flip",
                  options: (D = { ...eE }),
                  async fn(e) {
                    var t, n, r, o, i;
                    let {
                        placement: l,
                        middlewareData: u,
                        rects: a,
                        initialPlacement: s,
                        platform: c,
                        elements: f,
                      } = e,
                      {
                        mainAxis: d = !0,
                        crossAxis: x = !0,
                        fallbackPlacements: E,
                        fallbackStrategy: C = "bestFit",
                        fallbackAxisSideDirection: T = "none",
                        flipAlignment: R = !0,
                        ...O
                      } = p(D, e);
                    if (null != (t = u.arrow) && t.alignmentOffset) return {};
                    let L = m(l),
                      A = m(s) === s,
                      S = await (null == c.isRTL
                        ? void 0
                        : c.isRTL(f.floating)),
                      M =
                        E ||
                        (A || !R
                          ? [b(s)]
                          : (function (e) {
                              let t = b(e);
                              return [w(e), t, w(t)];
                            })(s));
                    E ||
                      "none" === T ||
                      M.push(
                        ...(function (e, t, n, r) {
                          let o = h(e),
                            i = (function (e, t, n) {
                              let r = ["left", "right"],
                                o = ["right", "left"];
                              switch (e) {
                                case "top":
                                case "bottom":
                                  if (n) return t ? o : r;
                                  return t ? r : o;
                                case "left":
                                case "right":
                                  return t
                                    ? ["top", "bottom"]
                                    : ["bottom", "top"];
                                default:
                                  return [];
                              }
                            })(m(e), "start" === n, r);
                          return (
                            o &&
                              ((i = i.map((e) => e + "-" + o)),
                              t && (i = i.concat(i.map(w)))),
                            i
                          );
                        })(s, R, T, S)
                      );
                    let k = [s, ...M],
                      _ = await P(e, O),
                      N = [],
                      W = (null == (n = u.flip) ? void 0 : n.overflows) || [];
                    if ((d && N.push(_[L]), x)) {
                      let e = (function (e, t, n) {
                        void 0 === n && (n = !1);
                        let r = h(e),
                          o = v(y(e)),
                          i = g(o),
                          l =
                            "x" === o
                              ? r === (n ? "end" : "start")
                                ? "right"
                                : "left"
                              : "start" === r
                              ? "bottom"
                              : "top";
                        return (
                          t.reference[i] > t.floating[i] && (l = b(l)),
                          [l, b(l)]
                        );
                      })(l, a, S);
                      N.push(_[e[0]], _[e[1]]);
                    }
                    if (
                      ((W = [...W, { placement: l, overflows: N }]),
                      !N.every((e) => e <= 0))
                    ) {
                      let e =
                          ((null == (r = u.flip) ? void 0 : r.index) || 0) + 1,
                        t = k[e];
                      if (t)
                        return {
                          data: { index: e, overflows: W },
                          reset: { placement: t },
                        };
                      let n =
                        null ==
                        (o = W.filter((e) => e.overflows[0] <= 0).sort(
                          (e, t) => e.overflows[1] - t.overflows[1]
                        )[0])
                          ? void 0
                          : o.placement;
                      if (!n)
                        switch (C) {
                          case "bestFit": {
                            let e =
                              null ==
                              (i = W.map((e) => [
                                e.placement,
                                e.overflows
                                  .filter((e) => e > 0)
                                  .reduce((e, t) => e + t, 0),
                              ]).sort((e, t) => e[1] - t[1])[0])
                                ? void 0
                                : i[0];
                            e && (n = e);
                            break;
                          }
                          case "initialPlacement":
                            n = s;
                        }
                      if (l !== n) return { reset: { placement: n } };
                    }
                    return {};
                  },
                },
                {
                  name: "size",
                  options: (M = {
                    ...eE,
                    apply: ({
                      elements: e,
                      rects: t,
                      availableWidth: n,
                      availableHeight: r,
                    }) => {
                      let { width: o, height: i } = t.reference,
                        l = e.floating.style;
                      l.setProperty("--radix-popper-available-width", `${n}px`),
                        l.setProperty(
                          "--radix-popper-available-height",
                          `${r}px`
                        ),
                        l.setProperty("--radix-popper-anchor-width", `${o}px`),
                        l.setProperty("--radix-popper-anchor-height", `${i}px`);
                    },
                  }),
                  async fn(e) {
                    let t, n;
                    let {
                        placement: r,
                        rects: o,
                        platform: i,
                        elements: a,
                      } = e,
                      { apply: s = () => {}, ...c } = p(M, e),
                      f = await P(e, c),
                      d = m(r),
                      v = h(r),
                      g = "y" === y(r),
                      { width: w, height: b } = o.floating;
                    "top" === d || "bottom" === d
                      ? ((t = d),
                        (n =
                          v ===
                          ((await (null == i.isRTL
                            ? void 0
                            : i.isRTL(a.floating)))
                            ? "start"
                            : "end")
                            ? "left"
                            : "right"))
                      : ((n = d), (t = "end" === v ? "top" : "bottom"));
                    let x = b - f[t],
                      E = w - f[n],
                      C = !e.middlewareData.shift,
                      T = x,
                      R = E;
                    if (g) {
                      let e = w - f.left - f.right;
                      R = v || C ? l(E, e) : e;
                    } else {
                      let e = b - f.top - f.bottom;
                      T = v || C ? l(x, e) : e;
                    }
                    if (C && !v) {
                      let e = u(f.left, 0),
                        t = u(f.right, 0),
                        n = u(f.top, 0),
                        r = u(f.bottom, 0);
                      g
                        ? (R =
                            w -
                            2 *
                              (0 !== e || 0 !== t ? e + t : u(f.left, f.right)))
                        : (T =
                            b -
                            2 *
                              (0 !== n || 0 !== r
                                ? n + r
                                : u(f.top, f.bottom)));
                    }
                    await s({ ...e, availableWidth: R, availableHeight: T });
                    let O = await i.getDimensions(a.floating);
                    return w !== O.width || b !== O.height
                      ? { reset: { rects: !0 } }
                      : {};
                  },
                },
                et && eu({ element: et, padding: I }),
                ek({ arrowWidth: eo, arrowHeight: em }),
                U && {
                  name: "hide",
                  options: (k = { strategy: "referenceHidden", ...eE }),
                  async fn(e) {
                    let { rects: t } = e,
                      { strategy: n = "referenceHidden", ...r } = p(k, e);
                    switch (n) {
                      case "referenceHidden": {
                        let n = R(
                          await P(e, { ...r, elementContext: "reference" }),
                          t.reference
                        );
                        return {
                          data: {
                            referenceHiddenOffsets: n,
                            referenceHidden: O(n),
                          },
                        };
                      }
                      case "escaped": {
                        let n = R(
                          await P(e, { ...r, altBoundary: !0 }),
                          t.floating
                        );
                        return { data: { escapedOffsets: n, escaped: O(n) } };
                      }
                      default:
                        return {};
                    }
                  },
                },
              ],
            }),
            [eS, eN] = e_(eL),
            eW = (0, eg.W)(X);
          (0, ey.b)(() => {
            eA && (null == eW || eW());
          }, [eA, eW]);
          let eH = null === (a = eD.arrow) || void 0 === a ? void 0 : a.x,
            eF = null === (c = eD.arrow) || void 0 === c ? void 0 : c.y,
            eI =
              (null === (f = eD.arrow) || void 0 === f
                ? void 0
                : f.centerOffset) !== 0,
            [eV, e$] = (0, o.useState)();
          return (
            (0, ey.b)(() => {
              J && e$(window.getComputedStyle(J).zIndex);
            }, [J]),
            (0, o.createElement)(
              "div",
              {
                ref: eC.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...eP,
                  transform: eA ? eP.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: eV,
                  "--radix-popper-transform-origin": [
                    null === (d = eD.transformOrigin) || void 0 === d
                      ? void 0
                      : d.x,
                    null === (x = eD.transformOrigin) || void 0 === x
                      ? void 0
                      : x.y,
                  ].join(" "),
                },
                dir: e.dir,
              },
              (0, o.createElement)(
                eO,
                {
                  scope: _,
                  placedSide: eS,
                  onArrowChange: en,
                  arrowX: eH,
                  arrowY: eF,
                  shouldHideArrow: eI,
                },
                (0, o.createElement)(
                  ep.WV.div,
                  (0, r.Z)({ "data-side": eS, "data-align": eN }, q, {
                    ref: ee,
                    style: {
                      ...q.style,
                      animation: eA ? void 0 : "none",
                      opacity:
                        null !== (E = eD.hide) &&
                        void 0 !== E &&
                        E.referenceHidden
                          ? 0
                          : void 0,
                    },
                  })
                )
              )
            )
          );
        }),
        eD = { top: "bottom", right: "left", bottom: "top", left: "right" },
        eS = (0, o.forwardRef)(function (e, t) {
          let { __scopePopper: n, ...i } = e,
            l = eL("PopperArrow", n),
            u = eD[l.placedSide];
          return (0,
          o.createElement)("span", { ref: l.onArrowChange, style: { position: "absolute", left: l.arrowX, top: l.arrowY, [u]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[l.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[l.placedSide], visibility: l.shouldHideArrow ? "hidden" : void 0 } }, (0, o.createElement)(em, (0, r.Z)({}, i, { ref: t, style: { ...i.style, display: "block" } })));
        });
      function eM(e) {
        return null !== e;
      }
      let ek = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, i, l;
          let { placement: u, rects: a, middlewareData: s } = t,
            c =
              (null === (n = s.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            f = c ? 0 : e.arrowWidth,
            d = c ? 0 : e.arrowHeight,
            [p, m] = e_(u),
            h = { start: "0%", center: "50%", end: "100%" }[m],
            v =
              (null !==
                (r = null === (o = s.arrow) || void 0 === o ? void 0 : o.x) &&
              void 0 !== r
                ? r
                : 0) +
              f / 2,
            g =
              (null !==
                (i = null === (l = s.arrow) || void 0 === l ? void 0 : l.y) &&
              void 0 !== i
                ? i
                : 0) +
              d / 2,
            y = "",
            w = "";
          return (
            "bottom" === p
              ? ((y = c ? h : `${v}px`), (w = `${-d}px`))
              : "top" === p
              ? ((y = c ? h : `${v}px`), (w = `${a.floating.height + d}px`))
              : "right" === p
              ? ((y = `${-d}px`), (w = c ? h : `${g}px`))
              : "left" === p &&
                ((y = `${a.floating.width + d}px`), (w = c ? h : `${g}px`)),
            { data: { x: y, y: w } }
          );
        },
      });
      function e_(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      let eN = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, i] = (0, o.useState)(null);
          return (0, o.createElement)(
            eC,
            { scope: t, anchor: r, onAnchorChange: i },
            n
          );
        },
        eW = eP,
        eH = eA,
        eF = eS;
    },
    22843: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return u;
        },
      });
      var r = n(65122),
        o = n(15039),
        i = n(68946),
        l = n(94221);
      let u = (0, o.forwardRef)((e, t) => {
        var n;
        let {
          container: u = null == globalThis
            ? void 0
            : null === (n = globalThis.document) || void 0 === n
            ? void 0
            : n.body,
          ...a
        } = e;
        return u
          ? i.createPortal(
              (0, o.createElement)(l.WV.div, (0, r.Z)({}, a, { ref: t })),
              u
            )
          : null;
      });
    },
    95502: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return u;
        },
      });
      var r = n(15039),
        o = n(68946),
        i = n(41633),
        l = n(17772);
      let u = (e) => {
        let { present: t, children: n } = e,
          u = (function (e) {
            var t, n;
            let [i, u] = (0, r.useState)(),
              s = (0, r.useRef)({}),
              c = (0, r.useRef)(e),
              f = (0, r.useRef)("none"),
              [d, p] =
                ((t = e ? "mounted" : "unmounted"),
                (n = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                (0, r.useReducer)((e, t) => {
                  let r = n[e][t];
                  return null != r ? r : e;
                }, t));
            return (
              (0, r.useEffect)(() => {
                let e = a(s.current);
                f.current = "mounted" === d ? e : "none";
              }, [d]),
              (0, l.b)(() => {
                let t = s.current,
                  n = c.current;
                if (n !== e) {
                  let r = f.current,
                    o = a(t);
                  e
                    ? p("MOUNT")
                    : "none" === o ||
                      (null == t ? void 0 : t.display) === "none"
                    ? p("UNMOUNT")
                    : n && r !== o
                    ? p("ANIMATION_OUT")
                    : p("UNMOUNT"),
                    (c.current = e);
                }
              }, [e, p]),
              (0, l.b)(() => {
                if (i) {
                  let e = (e) => {
                      let t = a(s.current).includes(e.animationName);
                      e.target === i &&
                        t &&
                        (0, o.flushSync)(() => p("ANIMATION_END"));
                    },
                    t = (e) => {
                      e.target === i && (f.current = a(s.current));
                    };
                  return (
                    i.addEventListener("animationstart", t),
                    i.addEventListener("animationcancel", e),
                    i.addEventListener("animationend", e),
                    () => {
                      i.removeEventListener("animationstart", t),
                        i.removeEventListener("animationcancel", e),
                        i.removeEventListener("animationend", e);
                    }
                  );
                }
                p("ANIMATION_END");
              }, [i, p]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(d),
                ref: (0, r.useCallback)((e) => {
                  e && (s.current = getComputedStyle(e)), u(e);
                }, []),
              }
            );
          })(t),
          s =
            "function" == typeof n
              ? n({ present: u.isPresent })
              : r.Children.only(n),
          c = (0, i.e)(u.ref, s.ref);
        return "function" == typeof n || u.isPresent
          ? (0, r.cloneElement)(s, { ref: c })
          : null;
      };
      function a(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      u.displayName = "Presence";
    },
    94221: function (e, t, n) {
      "use strict";
      n.d(t, {
        WV: function () {
          return u;
        },
        jH: function () {
          return a;
        },
      });
      var r = n(65122),
        o = n(15039),
        i = n(68946),
        l = n(22353);
      let u = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ].reduce((e, t) => {
        let n = (0, o.forwardRef)((e, n) => {
          let { asChild: i, ...u } = e,
            a = i ? l.g7 : t;
          return (
            (0, o.useEffect)(() => {
              window[Symbol.for("radix-ui")] = !0;
            }, []),
            (0, o.createElement)(a, (0, r.Z)({}, u, { ref: n }))
          );
        });
        return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
      }, {});
      function a(e, t) {
        e && (0, i.flushSync)(() => e.dispatchEvent(t));
      }
    },
    22353: function (e, t, n) {
      "use strict";
      n.d(t, {
        A4: function () {
          return a;
        },
        g7: function () {
          return l;
        },
      });
      var r = n(65122),
        o = n(15039),
        i = n(41633);
      let l = (0, o.forwardRef)((e, t) => {
        let { children: n, ...i } = e,
          l = o.Children.toArray(n),
          a = l.find(s);
        if (a) {
          let e = a.props.children,
            n = l.map((t) =>
              t !== a
                ? t
                : o.Children.count(e) > 1
                ? o.Children.only(null)
                : (0, o.isValidElement)(e)
                ? e.props.children
                : null
            );
          return (0, o.createElement)(
            u,
            (0, r.Z)({}, i, { ref: t }),
            (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, n) : null
          );
        }
        return (0, o.createElement)(u, (0, r.Z)({}, i, { ref: t }), n);
      });
      l.displayName = "Slot";
      let u = (0, o.forwardRef)((e, t) => {
        let { children: n, ...r } = e;
        return (0, o.isValidElement)(n)
          ? (0, o.cloneElement)(n, {
              ...(function (e, t) {
                let n = { ...t };
                for (let r in t) {
                  let o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r)
                    ? o && i
                      ? (n[r] = (...e) => {
                          i(...e), o(...e);
                        })
                      : o && (n[r] = o)
                    : "style" === r
                    ? (n[r] = { ...o, ...i })
                    : "className" === r &&
                      (n[r] = [o, i].filter(Boolean).join(" "));
                }
                return { ...e, ...n };
              })(r, n.props),
              ref: t ? (0, i.F)(t, n.ref) : n.ref,
            })
          : o.Children.count(n) > 1
          ? o.Children.only(null)
          : null;
      });
      u.displayName = "SlotClone";
      let a = ({ children: e }) => (0, o.createElement)(o.Fragment, null, e);
      function s(e) {
        return (0, o.isValidElement)(e) && e.type === a;
      }
    },
    87907: function (e, t, n) {
      "use strict";
      n.d(t, {
        NM: function () {
          return M;
        },
        VY: function () {
          return B;
        },
        _v: function () {
          return _;
        },
        fC: function () {
          return V;
        },
        h_: function () {
          return z;
        },
        u: function () {
          return R;
        },
        xz: function () {
          return $;
        },
        zt: function () {
          return I;
        },
      });
      var r = n(65122),
        o = n(15039),
        i = n(65727),
        l = n(41633),
        u = n(70686),
        a = n(10094),
        s = n(89219),
        c = n(15755),
        f = n(22843),
        d = n(95502),
        p = n(94221),
        m = n(22353),
        h = n(75347),
        v = n(88097);
      let [g, y] = (0, u.b)("Tooltip", [c.D7]),
        w = (0, c.D7)(),
        b = "tooltip.open",
        [x, E] = g("TooltipProvider"),
        C = "Tooltip",
        [T, P] = g(C),
        R = (e) => {
          let {
              __scopeTooltip: t,
              children: n,
              open: r,
              defaultOpen: i = !1,
              onOpenChange: l,
              disableHoverableContent: u,
              delayDuration: a,
            } = e,
            f = E(C, e.__scopeTooltip),
            d = w(t),
            [p, m] = (0, o.useState)(null),
            v = (0, s.M)(),
            g = (0, o.useRef)(0),
            y = null != u ? u : f.disableHoverableContent,
            x = null != a ? a : f.delayDuration,
            P = (0, o.useRef)(!1),
            [R = !1, O] = (0, h.T)({
              prop: r,
              defaultProp: i,
              onChange: (e) => {
                e
                  ? (f.onOpen(), document.dispatchEvent(new CustomEvent(b)))
                  : f.onClose(),
                  null == l || l(e);
              },
            }),
            L = (0, o.useMemo)(
              () =>
                R ? (P.current ? "delayed-open" : "instant-open") : "closed",
              [R]
            ),
            A = (0, o.useCallback)(() => {
              window.clearTimeout(g.current), (P.current = !1), O(!0);
            }, [O]),
            D = (0, o.useCallback)(() => {
              window.clearTimeout(g.current), O(!1);
            }, [O]),
            S = (0, o.useCallback)(() => {
              window.clearTimeout(g.current),
                (g.current = window.setTimeout(() => {
                  (P.current = !0), O(!0);
                }, x));
            }, [x, O]);
          return (
            (0, o.useEffect)(() => () => window.clearTimeout(g.current), []),
            (0, o.createElement)(
              c.fC,
              d,
              (0, o.createElement)(
                T,
                {
                  scope: t,
                  contentId: v,
                  open: R,
                  stateAttribute: L,
                  trigger: p,
                  onTriggerChange: m,
                  onTriggerEnter: (0, o.useCallback)(() => {
                    f.isOpenDelayed ? S() : A();
                  }, [f.isOpenDelayed, S, A]),
                  onTriggerLeave: (0, o.useCallback)(() => {
                    y ? D() : window.clearTimeout(g.current);
                  }, [D, y]),
                  onOpen: A,
                  onClose: D,
                  disableHoverableContent: y,
                },
                n
              )
            )
          );
        },
        O = "TooltipTrigger",
        L = (0, o.forwardRef)((e, t) => {
          let { __scopeTooltip: n, ...u } = e,
            a = P(O, n),
            s = E(O, n),
            f = w(n),
            d = (0, o.useRef)(null),
            m = (0, l.e)(t, d, a.onTriggerChange),
            h = (0, o.useRef)(!1),
            v = (0, o.useRef)(!1),
            g = (0, o.useCallback)(() => (h.current = !1), []);
          return (
            (0, o.useEffect)(
              () => () => document.removeEventListener("pointerup", g),
              [g]
            ),
            (0, o.createElement)(
              c.ee,
              (0, r.Z)({ asChild: !0 }, f),
              (0, o.createElement)(
                p.WV.button,
                (0, r.Z)(
                  {
                    "aria-describedby": a.open ? a.contentId : void 0,
                    "data-state": a.stateAttribute,
                  },
                  u,
                  {
                    ref: m,
                    onPointerMove: (0, i.M)(e.onPointerMove, (e) => {
                      "touch" === e.pointerType ||
                        v.current ||
                        s.isPointerInTransitRef.current ||
                        (a.onTriggerEnter(), (v.current = !0));
                    }),
                    onPointerLeave: (0, i.M)(e.onPointerLeave, () => {
                      a.onTriggerLeave(), (v.current = !1);
                    }),
                    onPointerDown: (0, i.M)(e.onPointerDown, () => {
                      (h.current = !0),
                        document.addEventListener("pointerup", g, { once: !0 });
                    }),
                    onFocus: (0, i.M)(e.onFocus, () => {
                      h.current || a.onOpen();
                    }),
                    onBlur: (0, i.M)(e.onBlur, a.onClose),
                    onClick: (0, i.M)(e.onClick, a.onClose),
                  }
                )
              )
            )
          );
        }),
        A = "TooltipPortal",
        [D, S] = g(A, { forceMount: void 0 }),
        M = (e) => {
          let {
              __scopeTooltip: t,
              forceMount: n,
              children: r,
              container: i,
            } = e,
            l = P(A, t);
          return (0, o.createElement)(
            D,
            { scope: t, forceMount: n },
            (0, o.createElement)(
              d.z,
              { present: n || l.open },
              (0, o.createElement)(f.h, { asChild: !0, container: i }, r)
            )
          );
        },
        k = "TooltipContent",
        _ = (0, o.forwardRef)((e, t) => {
          let n = S(k, e.__scopeTooltip),
            { forceMount: i = n.forceMount, side: l = "top", ...u } = e,
            a = P(k, e.__scopeTooltip);
          return (0, o.createElement)(
            d.z,
            { present: i || a.open },
            a.disableHoverableContent
              ? (0, o.createElement)(F, (0, r.Z)({ side: l }, u, { ref: t }))
              : (0, o.createElement)(N, (0, r.Z)({ side: l }, u, { ref: t }))
          );
        }),
        N = (0, o.forwardRef)((e, t) => {
          let n = P(k, e.__scopeTooltip),
            i = E(k, e.__scopeTooltip),
            u = (0, o.useRef)(null),
            a = (0, l.e)(t, u),
            [s, c] = (0, o.useState)(null),
            { trigger: f, onClose: d } = n,
            p = u.current,
            { onPointerInTransitChange: m } = i,
            h = (0, o.useCallback)(() => {
              c(null), m(!1);
            }, [m]),
            v = (0, o.useCallback)(
              (e, t) => {
                let n = e.currentTarget,
                  r = { x: e.clientX, y: e.clientY },
                  o = (function (e, t) {
                    let n = Math.abs(t.top - e.y),
                      r = Math.abs(t.bottom - e.y),
                      o = Math.abs(t.right - e.x),
                      i = Math.abs(t.left - e.x);
                    switch (Math.min(n, r, o, i)) {
                      case i:
                        return "left";
                      case o:
                        return "right";
                      case n:
                        return "top";
                      case r:
                        return "bottom";
                      default:
                        throw Error("unreachable");
                    }
                  })(r, n.getBoundingClientRect());
                c(
                  (function (e) {
                    let t = e.slice();
                    return (
                      t.sort((e, t) =>
                        e.x < t.x
                          ? -1
                          : e.x > t.x
                          ? 1
                          : e.y < t.y
                          ? -1
                          : e.y > t.y
                          ? 1
                          : 0
                      ),
                      (function (e) {
                        if (e.length <= 1) return e.slice();
                        let t = [];
                        for (let n = 0; n < e.length; n++) {
                          let r = e[n];
                          for (; t.length >= 2; ) {
                            let e = t[t.length - 1],
                              n = t[t.length - 2];
                            if (
                              (e.x - n.x) * (r.y - n.y) >=
                              (e.y - n.y) * (r.x - n.x)
                            )
                              t.pop();
                            else break;
                          }
                          t.push(r);
                        }
                        t.pop();
                        let n = [];
                        for (let t = e.length - 1; t >= 0; t--) {
                          let r = e[t];
                          for (; n.length >= 2; ) {
                            let e = n[n.length - 1],
                              t = n[n.length - 2];
                            if (
                              (e.x - t.x) * (r.y - t.y) >=
                              (e.y - t.y) * (r.x - t.x)
                            )
                              n.pop();
                            else break;
                          }
                          n.push(r);
                        }
                        return (n.pop(),
                        1 === t.length &&
                          1 === n.length &&
                          t[0].x === n[0].x &&
                          t[0].y === n[0].y)
                          ? t
                          : t.concat(n);
                      })(t)
                    );
                  })([
                    ...(function (e, t, n = 5) {
                      let r = [];
                      switch (t) {
                        case "top":
                          r.push(
                            { x: e.x - n, y: e.y + n },
                            { x: e.x + n, y: e.y + n }
                          );
                          break;
                        case "bottom":
                          r.push(
                            { x: e.x - n, y: e.y - n },
                            { x: e.x + n, y: e.y - n }
                          );
                          break;
                        case "left":
                          r.push(
                            { x: e.x + n, y: e.y - n },
                            { x: e.x + n, y: e.y + n }
                          );
                          break;
                        case "right":
                          r.push(
                            { x: e.x - n, y: e.y - n },
                            { x: e.x - n, y: e.y + n }
                          );
                      }
                      return r;
                    })(r, o),
                    ...(function (e) {
                      let { top: t, right: n, bottom: r, left: o } = e;
                      return [
                        { x: o, y: t },
                        { x: n, y: t },
                        { x: n, y: r },
                        { x: o, y: r },
                      ];
                    })(t.getBoundingClientRect()),
                  ])
                ),
                  m(!0);
              },
              [m]
            );
          return (
            (0, o.useEffect)(() => () => h(), [h]),
            (0, o.useEffect)(() => {
              if (f && p) {
                let e = (e) => v(e, p),
                  t = (e) => v(e, f);
                return (
                  f.addEventListener("pointerleave", e),
                  p.addEventListener("pointerleave", t),
                  () => {
                    f.removeEventListener("pointerleave", e),
                      p.removeEventListener("pointerleave", t);
                  }
                );
              }
            }, [f, p, v, h]),
            (0, o.useEffect)(() => {
              if (s) {
                let e = (e) => {
                  let t = e.target,
                    n = { x: e.clientX, y: e.clientY },
                    r =
                      (null == f ? void 0 : f.contains(t)) ||
                      (null == p ? void 0 : p.contains(t)),
                    o = !(function (e, t) {
                      let { x: n, y: r } = e,
                        o = !1;
                      for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                        let l = t[e].x,
                          u = t[e].y,
                          a = t[i].x,
                          s = t[i].y;
                        u > r != s > r &&
                          n < ((a - l) * (r - u)) / (s - u) + l &&
                          (o = !o);
                      }
                      return o;
                    })(n, s);
                  r ? h() : o && (h(), d());
                };
                return (
                  document.addEventListener("pointermove", e),
                  () => document.removeEventListener("pointermove", e)
                );
              }
            }, [f, p, s, d, h]),
            (0, o.createElement)(F, (0, r.Z)({}, e, { ref: a }))
          );
        }),
        [W, H] = g(C, { isInside: !1 }),
        F = (0, o.forwardRef)((e, t) => {
          let {
              __scopeTooltip: n,
              children: i,
              "aria-label": l,
              onEscapeKeyDown: u,
              onPointerDownOutside: s,
              ...f
            } = e,
            d = P(k, n),
            p = w(n),
            { onClose: h } = d;
          return (
            (0, o.useEffect)(
              () => (
                document.addEventListener(b, h),
                () => document.removeEventListener(b, h)
              ),
              [h]
            ),
            (0, o.useEffect)(() => {
              if (d.trigger) {
                let e = (e) => {
                  let t = e.target;
                  null != t && t.contains(d.trigger) && h();
                };
                return (
                  window.addEventListener("scroll", e, { capture: !0 }),
                  () => window.removeEventListener("scroll", e, { capture: !0 })
                );
              }
            }, [d.trigger, h]),
            (0, o.createElement)(
              a.XB,
              {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: u,
                onPointerDownOutside: s,
                onFocusOutside: (e) => e.preventDefault(),
                onDismiss: h,
              },
              (0, o.createElement)(
                c.VY,
                (0, r.Z)({ "data-state": d.stateAttribute }, p, f, {
                  ref: t,
                  style: {
                    ...f.style,
                    "--radix-tooltip-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width":
                      "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height":
                      "var(--radix-popper-anchor-height)",
                  },
                }),
                (0, o.createElement)(m.A4, null, i),
                (0, o.createElement)(
                  W,
                  { scope: n, isInside: !0 },
                  (0, o.createElement)(
                    v.f,
                    { id: d.contentId, role: "tooltip" },
                    l || i
                  )
                )
              )
            )
          );
        }),
        I = (e) => {
          let {
              __scopeTooltip: t,
              delayDuration: n = 700,
              skipDelayDuration: r = 300,
              disableHoverableContent: i = !1,
              children: l,
            } = e,
            [u, a] = (0, o.useState)(!0),
            s = (0, o.useRef)(!1),
            c = (0, o.useRef)(0);
          return (
            (0, o.useEffect)(() => {
              let e = c.current;
              return () => window.clearTimeout(e);
            }, []),
            (0, o.createElement)(
              x,
              {
                scope: t,
                isOpenDelayed: u,
                delayDuration: n,
                onOpen: (0, o.useCallback)(() => {
                  window.clearTimeout(c.current), a(!1);
                }, []),
                onClose: (0, o.useCallback)(() => {
                  window.clearTimeout(c.current),
                    (c.current = window.setTimeout(() => a(!0), r));
                }, [r]),
                isPointerInTransitRef: s,
                onPointerInTransitChange: (0, o.useCallback)((e) => {
                  s.current = e;
                }, []),
                disableHoverableContent: i,
              },
              l
            )
          );
        },
        V = R,
        $ = L,
        z = M,
        B = _;
    },
    8035: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return o;
        },
      });
      var r = n(15039);
      function o(e) {
        let t = (0, r.useRef)(e);
        return (
          (0, r.useEffect)(() => {
            t.current = e;
          }),
          (0, r.useMemo)(
            () =>
              (...e) => {
                var n;
                return null === (n = t.current) || void 0 === n
                  ? void 0
                  : n.call(t, ...e);
              },
            []
          )
        );
      }
    },
    75347: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return i;
        },
      });
      var r = n(15039),
        o = n(8035);
      function i({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        let [i, l] = (function ({ defaultProp: e, onChange: t }) {
            let n = (0, r.useState)(e),
              [i] = n,
              l = (0, r.useRef)(i),
              u = (0, o.W)(t);
            return (
              (0, r.useEffect)(() => {
                l.current !== i && (u(i), (l.current = i));
              }, [i, l, u]),
              n
            );
          })({ defaultProp: t, onChange: n }),
          u = void 0 !== e,
          a = u ? e : i,
          s = (0, o.W)(n);
        return [
          a,
          (0, r.useCallback)(
            (t) => {
              if (u) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && s(n);
              } else l(t);
            },
            [u, e, l, s]
          ),
        ];
      }
    },
    17772: function (e, t, n) {
      "use strict";
      n.d(t, {
        b: function () {
          return o;
        },
      });
      var r = n(15039);
      let o = (null == globalThis ? void 0 : globalThis.document)
        ? r.useLayoutEffect
        : () => {};
    },
    24735: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return i;
        },
      });
      var r = n(15039),
        o = n(17772);
      function i(e) {
        let [t, n] = (0, r.useState)(void 0);
        return (
          (0, o.b)(() => {
            if (e) {
              n({ width: e.offsetWidth, height: e.offsetHeight });
              let t = new ResizeObserver((t) => {
                let r, o;
                if (!Array.isArray(t) || !t.length) return;
                let i = t[0];
                if ("borderBoxSize" in i) {
                  let e = i.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (r = t.inlineSize), (o = t.blockSize);
                } else (r = e.offsetWidth), (o = e.offsetHeight);
                n({ width: r, height: o });
              });
              return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
            }
            n(void 0);
          }, [e]),
          t
        );
      }
    },
    88097: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return l;
        },
        f: function () {
          return u;
        },
      });
      var r = n(65122),
        o = n(15039),
        i = n(94221);
      let l = (0, o.forwardRef)((e, t) =>
          (0, o.createElement)(
            i.WV.span,
            (0, r.Z)({}, e, {
              ref: t,
              style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...e.style,
              },
            })
          )
        ),
        u = l;
    },
  },
]);
