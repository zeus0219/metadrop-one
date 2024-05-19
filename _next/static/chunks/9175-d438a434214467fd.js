(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9175],
  {
    78688: function (e, t, n) {
      var r = n(15039),
        o = r && "object" == typeof r && "default" in r ? r : { default: r };
      !(function (e) {
        if (!e || "undefined" == typeof window) return;
        let t = document.createElement("style");
        t.setAttribute("type", "text/css"),
          (t.innerHTML = e),
          document.head.appendChild(t);
      })(
        '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'
      );
      let i = r.forwardRef(function (
        {
          style: e = {},
          className: t = "",
          autoFill: n = !1,
          play: i = !0,
          pauseOnHover: a = !1,
          pauseOnClick: l = !1,
          direction: u = "left",
          speed: s = 50,
          delay: c = 0,
          loop: f = 0,
          gradient: d = !1,
          gradientColor: v = "white",
          gradientWidth: m = 200,
          onFinish: g,
          onCycleComplete: p,
          onMount: h,
          children: w,
        },
        E
      ) {
        let [y, R] = r.useState(0),
          [M, b] = r.useState(0),
          [C, x] = r.useState(1),
          [N, T] = r.useState(!1),
          L = r.useRef(null),
          _ = E || L,
          k = r.useRef(null),
          S = r.useCallback(() => {
            if (k.current && _.current) {
              let e = _.current.getBoundingClientRect(),
                t = k.current.getBoundingClientRect(),
                r = e.width,
                o = t.width;
              ("up" === u || "down" === u) && ((r = e.height), (o = t.height)),
                n && r && o ? x(o < r ? Math.ceil(r / o) : 1) : x(1),
                R(r),
                b(o);
            }
          }, [n, _, u]);
        r.useEffect(() => {
          if (N && (S(), k.current && _.current)) {
            let e = new ResizeObserver(() => S());
            return (
              e.observe(_.current),
              e.observe(k.current),
              () => {
                e && e.disconnect();
              }
            );
          }
        }, [S, _, N]),
          r.useEffect(() => {
            S();
          }, [S, w]),
          r.useEffect(() => {
            T(!0);
          }, []),
          r.useEffect(() => {
            "function" == typeof h && h();
          }, []);
        let W = r.useMemo(
            () => (n ? (M * C) / s : M < y ? y / s : M / s),
            [n, y, M, C, s]
          ),
          P = r.useMemo(
            () =>
              Object.assign(Object.assign({}, e), {
                "--pause-on-hover": !i || a ? "paused" : "running",
                "--pause-on-click": !i || (a && !l) || l ? "paused" : "running",
                "--width": "up" === u || "down" === u ? "100vh" : "100%",
                "--transform":
                  "up" === u
                    ? "rotate(-90deg)"
                    : "down" === u
                    ? "rotate(90deg)"
                    : "none",
              }),
            [e, i, a, l, u]
          ),
          I = r.useMemo(
            () => ({
              "--gradient-color": v,
              "--gradient-width": "number" == typeof m ? `${m}px` : m,
            }),
            [v, m]
          ),
          A = r.useMemo(
            () => ({
              "--play": i ? "running" : "paused",
              "--direction": "left" === u ? "normal" : "reverse",
              "--duration": `${W}s`,
              "--delay": `${c}s`,
              "--iteration-count": f ? `${f}` : "infinite",
              "--min-width": n ? "auto" : "100%",
            }),
            [i, u, W, c, f, n]
          ),
          D = r.useMemo(
            () => ({
              "--transform":
                "up" === u
                  ? "rotate(90deg)"
                  : "down" === u
                  ? "rotate(-90deg)"
                  : "none",
            }),
            [u]
          ),
          V = r.useCallback(
            (e) =>
              [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                o.default.createElement(
                  r.Fragment,
                  { key: t },
                  r.Children.map(w, (e) =>
                    o.default.createElement(
                      "div",
                      { style: D, className: "rfm-child" },
                      e
                    )
                  )
                )
              ),
            [D, w]
          );
        return N
          ? o.default.createElement(
              "div",
              { ref: _, style: P, className: "rfm-marquee-container " + t },
              d &&
                o.default.createElement("div", {
                  style: I,
                  className: "rfm-overlay",
                }),
              o.default.createElement(
                "div",
                {
                  className: "rfm-marquee",
                  style: A,
                  onAnimationIteration: p,
                  onAnimationEnd: g,
                },
                o.default.createElement(
                  "div",
                  { className: "rfm-initial-child-container", ref: k },
                  r.Children.map(w, (e) =>
                    o.default.createElement(
                      "div",
                      { style: D, className: "rfm-child" },
                      e
                    )
                  )
                ),
                V(C - 1)
              ),
              o.default.createElement(
                "div",
                { className: "rfm-marquee", style: A },
                V(C)
              )
            )
          : null;
      });
      t.Z = i;
    },
    55433: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var o = {
        randomUUID:
          "undefined" != typeof crypto &&
          crypto.randomUUID &&
          crypto.randomUUID.bind(crypto),
      };
      let i = new Uint8Array(16),
        a = [];
      for (let e = 0; e < 256; ++e) a.push((e + 256).toString(16).slice(1));
      var l = function (e, t, n) {
        if (o.randomUUID && !t && !e) return o.randomUUID();
        let l =
          (e = e || {}).random ||
          (
            e.rng ||
            function () {
              if (
                !r &&
                !(r =
                  "undefined" != typeof crypto &&
                  crypto.getRandomValues &&
                  crypto.getRandomValues.bind(crypto))
              )
                throw Error(
                  "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                );
              return r(i);
            }
          )();
        if (((l[6] = (15 & l[6]) | 64), (l[8] = (63 & l[8]) | 128), t)) {
          n = n || 0;
          for (let e = 0; e < 16; ++e) t[n + e] = l[e];
          return t;
        }
        return (function (e, t = 0) {
          return (
            a[e[t + 0]] +
            a[e[t + 1]] +
            a[e[t + 2]] +
            a[e[t + 3]] +
            "-" +
            a[e[t + 4]] +
            a[e[t + 5]] +
            "-" +
            a[e[t + 6]] +
            a[e[t + 7]] +
            "-" +
            a[e[t + 8]] +
            a[e[t + 9]] +
            "-" +
            a[e[t + 10]] +
            a[e[t + 11]] +
            a[e[t + 12]] +
            a[e[t + 13]] +
            a[e[t + 14]] +
            a[e[t + 15]]
          );
        })(l);
      };
    },
    80037: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return l;
        },
      });
      var r = n(15039),
        o = n(70686),
        i = n(41633),
        a = n(22353);
      function l(e) {
        let t = e + "CollectionProvider",
          [n, l] = (0, o.b)(t),
          [u, s] = n(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          c = e + "CollectionSlot",
          f = r.forwardRef((e, t) => {
            let { scope: n, children: o } = e,
              l = s(c, n),
              u = (0, i.e)(t, l.collectionRef);
            return r.createElement(a.g7, { ref: u }, o);
          }),
          d = e + "CollectionItemSlot",
          v = "data-radix-collection-item";
        return [
          {
            Provider: (e) => {
              let { scope: t, children: n } = e,
                o = r.useRef(null),
                i = r.useRef(new Map()).current;
              return r.createElement(
                u,
                { scope: t, itemMap: i, collectionRef: o },
                n
              );
            },
            Slot: f,
            ItemSlot: r.forwardRef((e, t) => {
              let { scope: n, children: o, ...l } = e,
                u = r.useRef(null),
                c = (0, i.e)(t, u),
                f = s(d, n);
              return (
                r.useEffect(
                  () => (
                    f.itemMap.set(u, { ref: u, ...l }),
                    () => void f.itemMap.delete(u)
                  )
                ),
                r.createElement(a.g7, { [v]: "", ref: c }, o)
              );
            }),
          },
          function (t) {
            let n = s(e + "CollectionConsumer", t);
            return r.useCallback(() => {
              let e = n.collectionRef.current;
              if (!e) return [];
              let t = Array.from(e.querySelectorAll(`[${v}]`));
              return Array.from(n.itemMap.values()).sort(
                (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
              );
            }, [n.collectionRef, n.itemMap]);
          },
          l,
        ];
      }
    },
    66059: function (e, t, n) {
      "use strict";
      n.d(t, {
        gm: function () {
          return i;
        },
      });
      var r = n(15039);
      let o = (0, r.createContext)(void 0);
      function i(e) {
        let t = (0, r.useContext)(o);
        return e || t || "ltr";
      }
    },
    20454: function (e, t, n) {
      "use strict";
      n.d(t, {
        VY: function () {
          return ep;
        },
        aV: function () {
          return ef;
        },
        ck: function () {
          return ed;
        },
        fC: function () {
          return ec;
        },
        l_: function () {
          return eh;
        },
        rU: function () {
          return em;
        },
        xz: function () {
          return ev;
        },
        z$: function () {
          return eg;
        },
      });
      var r = n(65122),
        o = n(15039),
        i = n(68946),
        a = n(70686),
        l = n(65727),
        u = n(94221),
        s = n(75347),
        c = n(41633),
        f = n(66059),
        d = n(95502),
        v = n(89219),
        m = n(80037),
        g = n(10094),
        p = n(84245),
        h = n(17772),
        w = n(8035),
        E = n(88097);
      let y = "NavigationMenu",
        [R, M, b] = (0, m.B)(y),
        [C, x, N] = (0, m.B)(y),
        [T, L] = (0, a.b)(y, [b, N]),
        [_, k] = T(y),
        [S, W] = T(y),
        P = (0, o.forwardRef)((e, t) => {
          let {
              __scopeNavigationMenu: n,
              value: i,
              onValueChange: a,
              defaultValue: l,
              delayDuration: d = 200,
              skipDelayDuration: v = 300,
              orientation: m = "horizontal",
              dir: g,
              ...p
            } = e,
            [h, w] = (0, o.useState)(null),
            E = (0, c.e)(t, (e) => w(e)),
            y = (0, f.gm)(g),
            R = (0, o.useRef)(0),
            M = (0, o.useRef)(0),
            b = (0, o.useRef)(0),
            [C, x] = (0, o.useState)(!0),
            [N = "", T] = (0, s.T)({
              prop: i,
              onChange: (e) => {
                let t = v > 0;
                "" !== e
                  ? (window.clearTimeout(b.current), t && x(!1))
                  : (window.clearTimeout(b.current),
                    (b.current = window.setTimeout(() => x(!0), v))),
                  null == a || a(e);
              },
              defaultProp: l,
            }),
            L = (0, o.useCallback)(() => {
              window.clearTimeout(M.current),
                (M.current = window.setTimeout(() => T(""), 150));
            }, [T]),
            _ = (0, o.useCallback)(
              (e) => {
                window.clearTimeout(M.current), T(e);
              },
              [T]
            ),
            k = (0, o.useCallback)(
              (e) => {
                N === e
                  ? window.clearTimeout(M.current)
                  : (R.current = window.setTimeout(() => {
                      window.clearTimeout(M.current), T(e);
                    }, d));
              },
              [N, T, d]
            );
          return (
            (0, o.useEffect)(
              () => () => {
                window.clearTimeout(R.current),
                  window.clearTimeout(M.current),
                  window.clearTimeout(b.current);
              },
              []
            ),
            (0, o.createElement)(
              I,
              {
                scope: n,
                isRootMenu: !0,
                value: N,
                dir: y,
                orientation: m,
                rootNavigationMenu: h,
                onTriggerEnter: (e) => {
                  window.clearTimeout(R.current), C ? k(e) : _(e);
                },
                onTriggerLeave: () => {
                  window.clearTimeout(R.current), L();
                },
                onContentEnter: () => window.clearTimeout(M.current),
                onContentLeave: L,
                onItemSelect: (e) => {
                  T((t) => (t === e ? "" : e));
                },
                onItemDismiss: () => T(""),
              },
              (0, o.createElement)(
                u.WV.nav,
                (0, r.Z)(
                  { "aria-label": "Main", "data-orientation": m, dir: y },
                  p,
                  { ref: E }
                )
              )
            )
          );
        }),
        I = (e) => {
          let {
              scope: t,
              isRootMenu: n,
              rootNavigationMenu: r,
              dir: i,
              orientation: a,
              children: l,
              value: u,
              onItemSelect: s,
              onItemDismiss: c,
              onTriggerEnter: f,
              onTriggerLeave: d,
              onContentEnter: m,
              onContentLeave: g,
            } = e,
            [h, E] = (0, o.useState)(null),
            [y, M] = (0, o.useState)(new Map()),
            [b, C] = (0, o.useState)(null);
          return (0, o.createElement)(
            _,
            {
              scope: t,
              isRootMenu: n,
              rootNavigationMenu: r,
              value: u,
              previousValue: (0, p.D)(u),
              baseId: (0, v.M)(),
              dir: i,
              orientation: a,
              viewport: h,
              onViewportChange: E,
              indicatorTrack: b,
              onIndicatorTrackChange: C,
              onTriggerEnter: (0, w.W)(f),
              onTriggerLeave: (0, w.W)(d),
              onContentEnter: (0, w.W)(m),
              onContentLeave: (0, w.W)(g),
              onItemSelect: (0, w.W)(s),
              onItemDismiss: (0, w.W)(c),
              onViewportContentChange: (0, o.useCallback)((e, t) => {
                M((n) => (n.set(e, t), new Map(n)));
              }, []),
              onViewportContentRemove: (0, o.useCallback)((e) => {
                M((t) => (t.has(e) ? (t.delete(e), new Map(t)) : t));
              }, []),
            },
            (0, o.createElement)(
              R.Provider,
              { scope: t },
              (0, o.createElement)(S, { scope: t, items: y }, l)
            )
          );
        },
        A = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, ...i } = e,
            a = k("NavigationMenuList", n),
            l = (0, o.createElement)(
              u.WV.ul,
              (0, r.Z)({ "data-orientation": a.orientation }, i, { ref: t })
            );
          return (0, o.createElement)(
            u.WV.div,
            { style: { position: "relative" }, ref: a.onIndicatorTrackChange },
            (0, o.createElement)(
              R.Slot,
              { scope: n },
              a.isRootMenu ? (0, o.createElement)(ee, { asChild: !0 }, l) : l
            )
          );
        }),
        [D, V] = T("NavigationMenuItem"),
        O = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, value: i, ...a } = e,
            l = (0, v.M)(),
            s = (0, o.useRef)(null),
            c = (0, o.useRef)(null),
            f = (0, o.useRef)(null),
            d = (0, o.useRef)(() => {}),
            m = (0, o.useRef)(!1),
            g = (0, o.useCallback)((e = "start") => {
              if (s.current) {
                d.current();
                let t = er(s.current);
                t.length && eo("start" === e ? t : t.reverse());
              }
            }, []),
            p = (0, o.useCallback)(() => {
              if (s.current) {
                let e = er(s.current);
                e.length &&
                  (d.current =
                    (e.forEach((e) => {
                      (e.dataset.tabindex = e.getAttribute("tabindex") || ""),
                        e.setAttribute("tabindex", "-1");
                    }),
                    () => {
                      e.forEach((e) => {
                        let t = e.dataset.tabindex;
                        e.setAttribute("tabindex", t);
                      });
                    }));
              }
            }, []);
          return (0, o.createElement)(
            D,
            {
              scope: n,
              value: i || l || "LEGACY_REACT_AUTO_VALUE",
              triggerRef: c,
              contentRef: s,
              focusProxyRef: f,
              wasEscapeCloseRef: m,
              onEntryKeyDown: g,
              onFocusProxyEnter: g,
              onRootContentClose: p,
              onContentFocusOutside: p,
            },
            (0, o.createElement)(u.WV.li, (0, r.Z)({}, a, { ref: t }))
          );
        }),
        F = "NavigationMenuTrigger",
        z = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, disabled: i, ...a } = e,
            s = k(F, e.__scopeNavigationMenu),
            f = V(F, e.__scopeNavigationMenu),
            d = (0, o.useRef)(null),
            v = (0, c.e)(d, f.triggerRef, t),
            m = el(s.baseId, f.value),
            g = eu(s.baseId, f.value),
            p = (0, o.useRef)(!1),
            h = (0, o.useRef)(!1),
            w = f.value === s.value;
          return (0, o.createElement)(
            o.Fragment,
            null,
            (0, o.createElement)(
              R.ItemSlot,
              { scope: n, value: f.value },
              (0, o.createElement)(
                en,
                { asChild: !0 },
                (0, o.createElement)(
                  u.WV.button,
                  (0, r.Z)(
                    {
                      id: m,
                      disabled: i,
                      "data-disabled": i ? "" : void 0,
                      "data-state": ea(w),
                      "aria-expanded": w,
                      "aria-controls": g,
                    },
                    a,
                    {
                      ref: v,
                      onPointerEnter: (0, l.M)(e.onPointerEnter, () => {
                        (h.current = !1), (f.wasEscapeCloseRef.current = !1);
                      }),
                      onPointerMove: (0, l.M)(
                        e.onPointerMove,
                        es(() => {
                          i ||
                            h.current ||
                            f.wasEscapeCloseRef.current ||
                            p.current ||
                            (s.onTriggerEnter(f.value), (p.current = !0));
                        })
                      ),
                      onPointerLeave: (0, l.M)(
                        e.onPointerLeave,
                        es(() => {
                          i || (s.onTriggerLeave(), (p.current = !1));
                        })
                      ),
                      onClick: (0, l.M)(e.onClick, () => {
                        s.onItemSelect(f.value), (h.current = w);
                      }),
                      onKeyDown: (0, l.M)(e.onKeyDown, (e) => {
                        let t = {
                          horizontal: "ArrowDown",
                          vertical:
                            "rtl" === s.dir ? "ArrowLeft" : "ArrowRight",
                        }[s.orientation];
                        w &&
                          e.key === t &&
                          (f.onEntryKeyDown(), e.preventDefault());
                      }),
                    }
                  )
                )
              )
            ),
            w &&
              (0, o.createElement)(
                o.Fragment,
                null,
                (0, o.createElement)(E.f, {
                  "aria-hidden": !0,
                  tabIndex: 0,
                  ref: f.focusProxyRef,
                  onFocus: (e) => {
                    let t = f.contentRef.current,
                      n = e.relatedTarget,
                      r = n === d.current,
                      o = null == t ? void 0 : t.contains(n);
                    (r || !o) && f.onFocusProxyEnter(r ? "start" : "end");
                  },
                }),
                s.viewport && (0, o.createElement)("span", { "aria-owns": g })
              )
          );
        }),
        B = "navigationMenu.linkSelect",
        H = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, active: i, onSelect: a, ...s } = e;
          return (0, o.createElement)(
            en,
            { asChild: !0 },
            (0, o.createElement)(
              u.WV.a,
              (0, r.Z)(
                {
                  "data-active": i ? "" : void 0,
                  "aria-current": i ? "page" : void 0,
                },
                s,
                {
                  ref: t,
                  onClick: (0, l.M)(
                    e.onClick,
                    (e) => {
                      let t = e.target,
                        n = new CustomEvent(B, { bubbles: !0, cancelable: !0 });
                      if (
                        (t.addEventListener(
                          B,
                          (e) => (null == a ? void 0 : a(e)),
                          { once: !0 }
                        ),
                        (0, u.jH)(t, n),
                        !n.defaultPrevented && !e.metaKey)
                      ) {
                        let e = new CustomEvent(Y, {
                          bubbles: !0,
                          cancelable: !0,
                        });
                        (0, u.jH)(t, e);
                      }
                    },
                    { checkForDefaultPrevented: !1 }
                  ),
                }
              )
            )
          );
        }),
        K = "NavigationMenuIndicator",
        Z = (0, o.forwardRef)((e, t) => {
          let { forceMount: n, ...a } = e,
            l = k(K, e.__scopeNavigationMenu),
            u = !!l.value;
          return l.indicatorTrack
            ? i.createPortal(
                (0, o.createElement)(
                  d.z,
                  { present: n || u },
                  (0, o.createElement)(U, (0, r.Z)({}, a, { ref: t }))
                ),
                l.indicatorTrack
              )
            : null;
        }),
        U = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, ...i } = e,
            a = k(K, n),
            l = M(n),
            [s, c] = (0, o.useState)(null),
            [f, d] = (0, o.useState)(null),
            v = "horizontal" === a.orientation,
            m = !!a.value;
          (0, o.useEffect)(() => {
            var e;
            let t =
              null === (e = l().find((e) => e.value === a.value)) ||
              void 0 === e
                ? void 0
                : e.ref.current;
            t && c(t);
          }, [l, a.value]);
          let g = () => {
            s &&
              d({
                size: v ? s.offsetWidth : s.offsetHeight,
                offset: v ? s.offsetLeft : s.offsetTop,
              });
          };
          return (
            ei(s, g),
            ei(a.indicatorTrack, g),
            f
              ? (0, o.createElement)(
                  u.WV.div,
                  (0, r.Z)(
                    {
                      "aria-hidden": !0,
                      "data-state": m ? "visible" : "hidden",
                      "data-orientation": a.orientation,
                    },
                    i,
                    {
                      ref: t,
                      style: {
                        position: "absolute",
                        ...(v
                          ? {
                              left: 0,
                              width: f.size + "px",
                              transform: `translateX(${f.offset}px)`,
                            }
                          : {
                              top: 0,
                              height: f.size + "px",
                              transform: `translateY(${f.offset}px)`,
                            }),
                        ...i.style,
                      },
                    }
                  )
                )
              : null
          );
        }),
        $ = "NavigationMenuContent",
        X = (0, o.forwardRef)((e, t) => {
          let { forceMount: n, ...i } = e,
            a = k($, e.__scopeNavigationMenu),
            u = V($, e.__scopeNavigationMenu),
            s = (0, c.e)(u.contentRef, t),
            f = u.value === a.value,
            v = {
              value: u.value,
              triggerRef: u.triggerRef,
              focusProxyRef: u.focusProxyRef,
              wasEscapeCloseRef: u.wasEscapeCloseRef,
              onContentFocusOutside: u.onContentFocusOutside,
              onRootContentClose: u.onRootContentClose,
              ...i,
            };
          return a.viewport
            ? (0, o.createElement)(
                q,
                (0, r.Z)({ forceMount: n }, v, { ref: s })
              )
            : (0, o.createElement)(
                d.z,
                { present: n || f },
                (0, o.createElement)(
                  j,
                  (0, r.Z)({ "data-state": ea(f) }, v, {
                    ref: s,
                    onPointerEnter: (0, l.M)(
                      e.onPointerEnter,
                      a.onContentEnter
                    ),
                    onPointerLeave: (0, l.M)(
                      e.onPointerLeave,
                      es(a.onContentLeave)
                    ),
                    style: {
                      pointerEvents: !f && a.isRootMenu ? "none" : void 0,
                      ...v.style,
                    },
                  })
                )
              );
        }),
        q = (0, o.forwardRef)((e, t) => {
          let { onViewportContentChange: n, onViewportContentRemove: r } = k(
            $,
            e.__scopeNavigationMenu
          );
          return (
            (0, h.b)(() => {
              n(e.value, { ref: t, ...e });
            }, [e, t, n]),
            (0, h.b)(() => () => r(e.value), [e.value, r]),
            null
          );
        }),
        Y = "navigationMenu.rootContentDismiss",
        j = (0, o.forwardRef)((e, t) => {
          let {
              __scopeNavigationMenu: n,
              value: i,
              triggerRef: a,
              focusProxyRef: u,
              wasEscapeCloseRef: s,
              onRootContentClose: f,
              onContentFocusOutside: d,
              ...v
            } = e,
            m = k($, n),
            p = (0, o.useRef)(null),
            h = (0, c.e)(p, t),
            w = el(m.baseId, i),
            E = eu(m.baseId, i),
            y = M(n),
            R = (0, o.useRef)(null),
            { onItemDismiss: b } = m;
          (0, o.useEffect)(() => {
            let e = p.current;
            if (m.isRootMenu && e) {
              let t = () => {
                var t;
                b(),
                  f(),
                  e.contains(document.activeElement) &&
                    (null === (t = a.current) || void 0 === t || t.focus());
              };
              return (
                e.addEventListener(Y, t), () => e.removeEventListener(Y, t)
              );
            }
          }, [m.isRootMenu, e.value, a, b, f]);
          let C = (0, o.useMemo)(() => {
            let e = y().map((e) => e.value);
            "rtl" === m.dir && e.reverse();
            let t = e.indexOf(m.value),
              n = e.indexOf(m.previousValue),
              r = i === m.value,
              o = n === e.indexOf(i);
            if (!r && !o) return R.current;
            let a = (() => {
              if (t !== n) {
                if (r && -1 !== n) return t > n ? "from-end" : "from-start";
                if (o && -1 !== t) return t > n ? "to-start" : "to-end";
              }
              return null;
            })();
            return (R.current = a), a;
          }, [m.previousValue, m.value, m.dir, y, i]);
          return (0, o.createElement)(
            ee,
            { asChild: !0 },
            (0, o.createElement)(
              g.XB,
              (0, r.Z)(
                {
                  id: E,
                  "aria-labelledby": w,
                  "data-motion": C,
                  "data-orientation": m.orientation,
                },
                v,
                {
                  ref: h,
                  onDismiss: () => {
                    var e;
                    let t = new Event(Y, { bubbles: !0, cancelable: !0 });
                    null === (e = p.current) ||
                      void 0 === e ||
                      e.dispatchEvent(t);
                  },
                  onFocusOutside: (0, l.M)(e.onFocusOutside, (e) => {
                    var t;
                    d();
                    let n = e.target;
                    null !== (t = m.rootNavigationMenu) &&
                      void 0 !== t &&
                      t.contains(n) &&
                      e.preventDefault();
                  }),
                  onPointerDownOutside: (0, l.M)(
                    e.onPointerDownOutside,
                    (e) => {
                      var t;
                      let n = e.target,
                        r = y().some((e) => {
                          var t;
                          return null === (t = e.ref.current) || void 0 === t
                            ? void 0
                            : t.contains(n);
                        }),
                        o =
                          m.isRootMenu &&
                          (null === (t = m.viewport) || void 0 === t
                            ? void 0
                            : t.contains(n));
                      (r || o || !m.isRootMenu) && e.preventDefault();
                    }
                  ),
                  onKeyDown: (0, l.M)(e.onKeyDown, (e) => {
                    let t = e.altKey || e.ctrlKey || e.metaKey;
                    if ("Tab" === e.key && !t) {
                      let t = er(e.currentTarget),
                        r = document.activeElement,
                        o = t.findIndex((e) => e === r);
                      if (
                        eo(
                          e.shiftKey
                            ? t.slice(0, o).reverse()
                            : t.slice(o + 1, t.length)
                        )
                      )
                        e.preventDefault();
                      else {
                        var n;
                        null === (n = u.current) || void 0 === n || n.focus();
                      }
                    }
                  }),
                  onEscapeKeyDown: (0, l.M)(e.onEscapeKeyDown, (e) => {
                    s.current = !0;
                  }),
                }
              )
            )
          );
        }),
        G = "NavigationMenuViewport",
        J = (0, o.forwardRef)((e, t) => {
          let { forceMount: n, ...i } = e,
            a = !!k(G, e.__scopeNavigationMenu).value;
          return (0, o.createElement)(
            d.z,
            { present: n || a },
            (0, o.createElement)(Q, (0, r.Z)({}, i, { ref: t }))
          );
        }),
        Q = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, children: i, ...a } = e,
            s = k(G, n),
            f = (0, c.e)(t, s.onViewportChange),
            v = W($, e.__scopeNavigationMenu),
            [m, g] = (0, o.useState)(null),
            [p, h] = (0, o.useState)(null),
            w = m ? (null == m ? void 0 : m.width) + "px" : void 0,
            E = m ? (null == m ? void 0 : m.height) + "px" : void 0,
            y = !!s.value,
            R = y ? s.value : s.previousValue;
          return (
            ei(p, () => {
              p && g({ width: p.offsetWidth, height: p.offsetHeight });
            }),
            (0, o.createElement)(
              u.WV.div,
              (0, r.Z)(
                { "data-state": ea(y), "data-orientation": s.orientation },
                a,
                {
                  ref: f,
                  style: {
                    pointerEvents: !y && s.isRootMenu ? "none" : void 0,
                    "--radix-navigation-menu-viewport-width": w,
                    "--radix-navigation-menu-viewport-height": E,
                    ...a.style,
                  },
                  onPointerEnter: (0, l.M)(e.onPointerEnter, s.onContentEnter),
                  onPointerLeave: (0, l.M)(
                    e.onPointerLeave,
                    es(s.onContentLeave)
                  ),
                }
              ),
              Array.from(v.items).map(
                ([e, { ref: t, forceMount: n, ...i }]) => {
                  let a = R === e;
                  return (0, o.createElement)(
                    d.z,
                    { key: e, present: n || a },
                    (0, o.createElement)(
                      j,
                      (0, r.Z)({}, i, {
                        ref: (0, c.F)(t, (e) => {
                          a && e && h(e);
                        }),
                      })
                    )
                  );
                }
              )
            )
          );
        }),
        ee = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, ...i } = e,
            a = k("FocusGroup", n);
          return (0, o.createElement)(
            C.Provider,
            { scope: n },
            (0, o.createElement)(
              C.Slot,
              { scope: n },
              (0, o.createElement)(
                u.WV.div,
                (0, r.Z)({ dir: a.dir }, i, { ref: t })
              )
            )
          );
        }),
        et = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
        en = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, ...i } = e,
            a = x(n),
            s = k("FocusGroupItem", n);
          return (0, o.createElement)(
            C.ItemSlot,
            { scope: n },
            (0, o.createElement)(
              u.WV.button,
              (0, r.Z)({}, i, {
                ref: t,
                onKeyDown: (0, l.M)(e.onKeyDown, (e) => {
                  if (["Home", "End", ...et].includes(e.key)) {
                    let t = a().map((e) => e.ref.current);
                    if (
                      ([
                        "rtl" === s.dir ? "ArrowRight" : "ArrowLeft",
                        "ArrowUp",
                        "End",
                      ].includes(e.key) && t.reverse(),
                      et.includes(e.key))
                    ) {
                      let n = t.indexOf(e.currentTarget);
                      t = t.slice(n + 1);
                    }
                    setTimeout(() => eo(t)), e.preventDefault();
                  }
                }),
              })
            )
          );
        });
      function er(e) {
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
      function eo(e) {
        let t = document.activeElement;
        return e.some(
          (e) => e === t || (e.focus(), document.activeElement !== t)
        );
      }
      function ei(e, t) {
        let n = (0, w.W)(t);
        (0, h.b)(() => {
          let t = 0;
          if (e) {
            let r = new ResizeObserver(() => {
              cancelAnimationFrame(t), (t = window.requestAnimationFrame(n));
            });
            return (
              r.observe(e),
              () => {
                window.cancelAnimationFrame(t), r.unobserve(e);
              }
            );
          }
        }, [e, n]);
      }
      function ea(e) {
        return e ? "open" : "closed";
      }
      function el(e, t) {
        return `${e}-trigger-${t}`;
      }
      function eu(e, t) {
        return `${e}-content-${t}`;
      }
      function es(e) {
        return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
      }
      let ec = P,
        ef = A,
        ed = O,
        ev = z,
        em = H,
        eg = Z,
        ep = X,
        eh = J;
    },
    84245: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return o;
        },
      });
      var r = n(15039);
      function o(e) {
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
    58222: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return o;
        },
      });
      var r = n(15039);
      function o(e, t, n) {
        (0, r.useInsertionEffect)(() => e.on(t, n), [e, t, n]);
      }
    },
    46489: function (e, t, n) {
      "use strict";
      let r, o;
      n.d(t, {
        v: function () {
          return I;
        },
      });
      var i = n(76593),
        a = n(15644),
        l = n(15039),
        u = n(33324);
      let s = new WeakMap();
      function c({ target: e, contentRect: t, borderBoxSize: n }) {
        var r;
        null === (r = s.get(e)) ||
          void 0 === r ||
          r.forEach((r) => {
            r({
              target: e,
              contentSize: t,
              get size() {
                return (function (e, t) {
                  if (t) {
                    let { inlineSize: e, blockSize: n } = t[0];
                    return { width: e, height: n };
                  }
                  return e instanceof SVGElement && "getBBox" in e
                    ? e.getBBox()
                    : { width: e.offsetWidth, height: e.offsetHeight };
                })(e, n);
              },
            });
          });
      }
      function f(e) {
        e.forEach(c);
      }
      let d = new Set();
      var v = n(16267),
        m = n(31792);
      let g = () => ({
          current: 0,
          offset: [],
          progress: 0,
          scrollLength: 0,
          targetOffset: 0,
          targetLength: 0,
          containerLength: 0,
          velocity: 0,
        }),
        p = () => ({ time: 0, x: g(), y: g() }),
        h = {
          x: { length: "Width", position: "Left" },
          y: { length: "Height", position: "Top" },
        };
      function w(e, t, n, r) {
        let o = n[t],
          { length: i, position: a } = h[t],
          l = o.current,
          u = n.time;
        (o.current = e["scroll" + a]),
          (o.scrollLength = e["scroll" + i] - e["client" + i]),
          (o.offset.length = 0),
          (o.offset[0] = 0),
          (o.offset[1] = o.scrollLength),
          (o.progress = (0, v.Y)(0, o.scrollLength, o.current));
        let s = r - u;
        o.velocity = s > 50 ? 0 : (0, m.R)(o.current - l, s);
      }
      let E = {
          All: [
            [0, 0],
            [1, 1],
          ],
        },
        y = { start: 0, center: 0.5, end: 1 };
      function R(e, t, n = 0) {
        let r = 0;
        if ((void 0 !== y[e] && (e = y[e]), "string" == typeof e)) {
          let t = parseFloat(e);
          e.endsWith("px")
            ? (r = t)
            : e.endsWith("%")
            ? (e = t / 100)
            : e.endsWith("vw")
            ? (r = (t / 100) * document.documentElement.clientWidth)
            : e.endsWith("vh")
            ? (r = (t / 100) * document.documentElement.clientHeight)
            : (e = t);
        }
        return "number" == typeof e && (r = t * e), n + r;
      }
      let M = [0, 0];
      var b = n(78314),
        C = n(39276);
      let x = { x: 0, y: 0 };
      var N = n(11417);
      let T = new WeakMap(),
        L = new WeakMap(),
        _ = new WeakMap(),
        k = (e) => (e === document.documentElement ? window : e);
      var S = n(17563);
      function W(e, t) {
        (0, u.K)(
          !!(!t || t.current),
          `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
        );
      }
      let P = () => ({
        scrollX: (0, i.BX)(0),
        scrollY: (0, i.BX)(0),
        scrollXProgress: (0, i.BX)(0),
        scrollYProgress: (0, i.BX)(0),
      });
      function I({ container: e, target: t, layoutEffect: n = !0, ...i } = {}) {
        let c = (0, a.h)(P);
        return (
          (n ? S.L : l.useEffect)(
            () => (
              W("target", t),
              W("container", e),
              (function (
                e,
                { container: t = document.documentElement, ...n } = {}
              ) {
                let i = _.get(t);
                i || ((i = new Set()), _.set(t, i));
                let a = (function (e, t, n, r = {}) {
                  return {
                    measure: () =>
                      (function (e, t = e, n) {
                        if (
                          ((n.x.targetOffset = 0),
                          (n.y.targetOffset = 0),
                          t !== e)
                        ) {
                          let r = t;
                          for (; r && r !== e; )
                            (n.x.targetOffset += r.offsetLeft),
                              (n.y.targetOffset += r.offsetTop),
                              (r = r.offsetParent);
                        }
                        (n.x.targetLength =
                          t === e ? t.scrollWidth : t.clientWidth),
                          (n.y.targetLength =
                            t === e ? t.scrollHeight : t.clientHeight),
                          (n.x.containerLength = e.clientWidth),
                          (n.y.containerLength = e.clientHeight);
                      })(e, r.target, n),
                    update: (t) => {
                      w(e, "x", n, t),
                        w(e, "y", n, t),
                        (n.time = t),
                        (r.offset || r.target) &&
                          (function (e, t, n) {
                            let { offset: r = E.All } = n,
                              { target: o = e, axis: i = "y" } = n,
                              a = "y" === i ? "height" : "width",
                              l =
                                o !== e
                                  ? (function (e, t) {
                                      let n = { x: 0, y: 0 },
                                        r = e;
                                      for (; r && r !== t; )
                                        if (r instanceof HTMLElement)
                                          (n.x += r.offsetLeft),
                                            (n.y += r.offsetTop),
                                            (r = r.offsetParent);
                                        else if ("svg" === r.tagName) {
                                          let e = r.getBoundingClientRect(),
                                            t = (r =
                                              r.parentElement).getBoundingClientRect();
                                          (n.x += e.left - t.left),
                                            (n.y += e.top - t.top);
                                        } else if (
                                          r instanceof SVGGraphicsElement
                                        ) {
                                          let { x: e, y: t } = r.getBBox();
                                          (n.x += e), (n.y += t);
                                          let o = null,
                                            i = r.parentNode;
                                          for (; !o; )
                                            "svg" === i.tagName && (o = i),
                                              (i = r.parentNode);
                                          r = o;
                                        } else break;
                                      return n;
                                    })(o, e)
                                  : x,
                              u =
                                o === e
                                  ? {
                                      width: e.scrollWidth,
                                      height: e.scrollHeight,
                                    }
                                  : "getBBox" in o && "svg" !== o.tagName
                                  ? o.getBBox()
                                  : {
                                      width: o.clientWidth,
                                      height: o.clientHeight,
                                    },
                              s = {
                                width: e.clientWidth,
                                height: e.clientHeight,
                              };
                            t[i].offset.length = 0;
                            let c = !t[i].interpolate,
                              f = r.length;
                            for (let e = 0; e < f; e++) {
                              let n = (function (e, t, n, r) {
                                let o = Array.isArray(e) ? e : M,
                                  i = 0;
                                return (
                                  "number" == typeof e
                                    ? (o = [e, e])
                                    : "string" == typeof e &&
                                      (o = (e = e.trim()).includes(" ")
                                        ? e.split(" ")
                                        : [e, y[e] ? e : "0"]),
                                  R(o[0], n, r) - R(o[1], t)
                                );
                              })(r[e], s[a], u[a], l[i]);
                              c ||
                                n === t[i].interpolatorOffsets[e] ||
                                (c = !0),
                                (t[i].offset[e] = n);
                            }
                            c &&
                              ((t[i].interpolate = (0, b.s)(
                                t[i].offset,
                                (0, C.Y)(r)
                              )),
                              (t[i].interpolatorOffsets = [...t[i].offset])),
                              (t[i].progress = t[i].interpolate(t[i].current));
                          })(e, n, r);
                    },
                    notify: () => t(n),
                  };
                })(t, e, p(), n);
                if ((i.add(a), !T.has(t))) {
                  let e = () => {
                      for (let e of i) e.measure();
                    },
                    n = () => {
                      for (let e of i) e.update(N.frameData.timestamp);
                    },
                    a = () => {
                      for (let e of i) e.notify();
                    },
                    l = () => {
                      N.Wi.read(e, !1, !0),
                        N.Wi.read(n, !1, !0),
                        N.Wi.update(a, !1, !0);
                    };
                  T.set(t, l);
                  let c = k(t);
                  window.addEventListener("resize", l, { passive: !0 }),
                    t !== document.documentElement &&
                      L.set(
                        t,
                        "function" == typeof t
                          ? (d.add(t),
                            o ||
                              ((o = () => {
                                let e = {
                                    width: window.innerWidth,
                                    height: window.innerHeight,
                                  },
                                  t = {
                                    target: window,
                                    size: e,
                                    contentSize: e,
                                  };
                                d.forEach((e) => e(t));
                              }),
                              window.addEventListener("resize", o)),
                            () => {
                              d.delete(t), !d.size && o && (o = void 0);
                            })
                          : (function (e, t) {
                              r ||
                                "undefined" == typeof ResizeObserver ||
                                (r = new ResizeObserver(f));
                              let n = (function (e, t, n) {
                                var r;
                                if ("string" == typeof e) {
                                  let o = document;
                                  t &&
                                    ((0, u.k)(
                                      !!t.current,
                                      "Scope provided, but no element detected."
                                    ),
                                    (o = t.current)),
                                    n
                                      ? ((null !== (r = n[e]) &&
                                          void 0 !== r) ||
                                          (n[e] = o.querySelectorAll(e)),
                                        (e = n[e]))
                                      : (e = o.querySelectorAll(e));
                                } else e instanceof Element && (e = [e]);
                                return Array.from(e || []);
                              })(e);
                              return (
                                n.forEach((e) => {
                                  let n = s.get(e);
                                  n || ((n = new Set()), s.set(e, n)),
                                    n.add(t),
                                    null == r || r.observe(e);
                                }),
                                () => {
                                  n.forEach((e) => {
                                    let n = s.get(e);
                                    null == n || n.delete(t),
                                      (null == n ? void 0 : n.size) ||
                                        null == r ||
                                        r.unobserve(e);
                                  });
                                }
                              );
                            })(t, l)
                      ),
                    c.addEventListener("scroll", l, { passive: !0 });
                }
                let l = T.get(t);
                return (
                  N.Wi.read(l, !1, !0),
                  () => {
                    var e;
                    (0, N.Pn)(l);
                    let n = _.get(t);
                    if (!n || (n.delete(a), n.size)) return;
                    let r = T.get(t);
                    T.delete(t),
                      r &&
                        (k(t).removeEventListener("scroll", r),
                        null === (e = L.get(t)) || void 0 === e || e(),
                        window.removeEventListener("resize", r));
                  }
                );
              })(
                ({ x: e, y: t }) => {
                  c.scrollX.set(e.current),
                    c.scrollXProgress.set(e.progress),
                    c.scrollY.set(t.current),
                    c.scrollYProgress.set(t.progress);
                },
                {
                  ...i,
                  container: (null == e ? void 0 : e.current) || void 0,
                  target: (null == t ? void 0 : t.current) || void 0,
                }
              )
            ),
            [e, t, JSON.stringify(i.offset)]
          ),
          c
        );
      }
    },
  },
]);
