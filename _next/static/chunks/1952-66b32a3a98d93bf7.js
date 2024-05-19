(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1952],
  {
    61200: function (e, t, n) {
      "use strict";
      var r = n(90275),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          a,
          i,
          u,
          c,
          l,
          s,
          f,
          d = !1;
        t || (t = {}), (i = t.debug || !1);
        try {
          if (
            ((c = r()),
            (l = document.createRange()),
            (s = document.getSelection()),
            ((f = document.createElement("span")).textContent = e),
            (f.ariaHidden = "true"),
            (f.style.all = "unset"),
            (f.style.position = "fixed"),
            (f.style.top = 0),
            (f.style.clip = "rect(0, 0, 0, 0)"),
            (f.style.whiteSpace = "pre"),
            (f.style.webkitUserSelect = "text"),
            (f.style.MozUserSelect = "text"),
            (f.style.msUserSelect = "text"),
            (f.style.userSelect = "text"),
            f.addEventListener("copy", function (n) {
              if ((n.stopPropagation(), t.format)) {
                if ((n.preventDefault(), void 0 === n.clipboardData)) {
                  i && console.warn("unable to use e.clipboardData"),
                    i && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var r = o[t.format] || o.default;
                  window.clipboardData.setData(r, e);
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(t.format, e);
              }
              t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
            }),
            document.body.appendChild(f),
            l.selectNodeContents(f),
            s.addRange(l),
            !document.execCommand("copy"))
          )
            throw Error("copy command was unsuccessful");
          d = !0;
        } catch (r) {
          i && console.error("unable to copy using execCommand: ", r),
            i && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (d = !0);
          } catch (r) {
            i && console.error("unable to copy using clipboardData: ", r),
              i && console.error("falling back to prompt"),
              (n =
                "message" in t
                  ? t.message
                  : "Copy to clipboard: #{key}, Enter"),
              (a =
                (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C"),
              (u = n.replace(/#{\s*key\s*}/g, a)),
              window.prompt(u, e);
          }
        } finally {
          s &&
            ("function" == typeof s.removeRange
              ? s.removeRange(l)
              : s.removeAllRanges()),
            f && document.body.removeChild(f),
            c();
        }
        return d;
      };
    },
    95599: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(61200),
        o = n.n(r),
        a = n(15039),
        i = function (e) {
          void 0 === e && (e = {});
          var t = (0, a.useState)(e),
            n = t[0],
            r = t[1];
          return [
            n,
            (0, a.useCallback)(function (e) {
              r(function (t) {
                return Object.assign({}, t, e instanceof Function ? e(t) : e);
              });
            }, []),
          ];
        },
        u = function () {
          var e,
            t,
            n =
              ((e = (0, a.useRef)(!1)),
              (t = (0, a.useCallback)(function () {
                return e.current;
              }, [])),
              (0, a.useEffect)(function () {
                return (
                  (e.current = !0),
                  function () {
                    e.current = !1;
                  }
                );
              }, []),
              t),
            r = i({ value: void 0, error: void 0, noUserInteraction: !0 }),
            u = r[0],
            c = r[1];
          return [
            u,
            (0, a.useCallback)(function (e) {
              if (n())
                try {
                  if ("string" != typeof e && "number" != typeof e) {
                    var t,
                      r,
                      a = Error(
                        "Cannot copy typeof " +
                          typeof e +
                          " to clipboard, must be a string"
                      );
                    c({ value: e, error: a, noUserInteraction: !0 });
                    return;
                  }
                  if ("" === e) {
                    var a = Error("Cannot copy empty string to clipboard.");
                    c({ value: e, error: a, noUserInteraction: !0 });
                    return;
                  }
                  (r = e.toString()),
                    (t = o()(r)),
                    c({ value: r, error: void 0, noUserInteraction: t });
                } catch (e) {
                  c({ value: r, error: e, noUserInteraction: t });
                }
            }, []),
          ];
        };
    },
    90275: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, n = [], r = 0;
          r < e.rangeCount;
          r++
        )
          n.push(e.getRangeAt(r));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                n.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
    79648: function (e, t, n) {
      "use strict";
      n.d(t, {
        Dx: function () {
          return Q;
        },
        VY: function () {
          return K;
        },
        aV: function () {
          return $;
        },
        fC: function () {
          return V;
        },
        h_: function () {
          return z;
        },
        x8: function () {
          return H;
        },
        xz: function () {
          return X;
        },
      });
      var r = n(65122),
        o = n(15039),
        a = n(65727),
        i = n(41633),
        u = n(70686),
        c = n(89219),
        l = n(75347),
        s = n(10094),
        f = n(46201),
        d = n(22843),
        p = n(95502),
        g = n(94221),
        v = n(71746),
        m = n(43022),
        y = n(52871),
        C = n(22353);
      let b = "Dialog",
        [h, w] = (0, u.b)(b),
        [D, E] = h(b),
        R = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...u } = e,
            c = E("DialogTrigger", n),
            l = (0, i.e)(t, c.triggerRef);
          return (0, o.createElement)(
            g.WV.button,
            (0, r.Z)(
              {
                type: "button",
                "aria-haspopup": "dialog",
                "aria-expanded": c.open,
                "aria-controls": c.contentId,
                "data-state": S(c.open),
              },
              u,
              { ref: l, onClick: (0, a.M)(e.onClick, c.onOpenToggle) }
            )
          );
        }),
        _ = "DialogPortal",
        [x, O] = h(_, { forceMount: void 0 }),
        A = "DialogOverlay",
        I = (0, o.forwardRef)((e, t) => {
          let n = O(A, e.__scopeDialog),
            { forceMount: a = n.forceMount, ...i } = e,
            u = E(A, e.__scopeDialog);
          return u.modal
            ? (0, o.createElement)(
                p.z,
                { present: a || u.open },
                (0, o.createElement)(k, (0, r.Z)({}, i, { ref: t }))
              )
            : null;
        }),
        k = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...a } = e,
            i = E(A, n);
          return (0, o.createElement)(
            m.Z,
            { as: C.g7, allowPinchZoom: !0, shards: [i.contentRef] },
            (0, o.createElement)(
              g.WV.div,
              (0, r.Z)({ "data-state": S(i.open) }, a, {
                ref: t,
                style: { pointerEvents: "auto", ...a.style },
              })
            )
          );
        }),
        M = "DialogContent",
        N = (0, o.forwardRef)((e, t) => {
          let n = O(M, e.__scopeDialog),
            { forceMount: a = n.forceMount, ...i } = e,
            u = E(M, e.__scopeDialog);
          return (0, o.createElement)(
            p.z,
            { present: a || u.open },
            u.modal
              ? (0, o.createElement)(F, (0, r.Z)({}, i, { ref: t }))
              : (0, o.createElement)(U, (0, r.Z)({}, i, { ref: t }))
          );
        }),
        F = (0, o.forwardRef)((e, t) => {
          let n = E(M, e.__scopeDialog),
            u = (0, o.useRef)(null),
            c = (0, i.e)(t, n.contentRef, u);
          return (
            (0, o.useEffect)(() => {
              let e = u.current;
              if (e) return (0, y.Ry)(e);
            }, []),
            (0, o.createElement)(
              Z,
              (0, r.Z)({}, e, {
                ref: c,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: (0, a.M)(e.onCloseAutoFocus, (e) => {
                  var t;
                  e.preventDefault(),
                    null === (t = n.triggerRef.current) ||
                      void 0 === t ||
                      t.focus();
                }),
                onPointerDownOutside: (0, a.M)(e.onPointerDownOutside, (e) => {
                  let t = e.detail.originalEvent,
                    n = 0 === t.button && !0 === t.ctrlKey;
                  (2 === t.button || n) && e.preventDefault();
                }),
                onFocusOutside: (0, a.M)(e.onFocusOutside, (e) =>
                  e.preventDefault()
                ),
              })
            )
          );
        }),
        U = (0, o.forwardRef)((e, t) => {
          let n = E(M, e.__scopeDialog),
            a = (0, o.useRef)(!1),
            i = (0, o.useRef)(!1);
          return (0, o.createElement)(
            Z,
            (0, r.Z)({}, e, {
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: (t) => {
                var r, o;
                null === (r = e.onCloseAutoFocus) ||
                  void 0 === r ||
                  r.call(e, t),
                  t.defaultPrevented ||
                    (a.current ||
                      null === (o = n.triggerRef.current) ||
                      void 0 === o ||
                      o.focus(),
                    t.preventDefault()),
                  (a.current = !1),
                  (i.current = !1);
              },
              onInteractOutside: (t) => {
                var r, o;
                null === (r = e.onInteractOutside) ||
                  void 0 === r ||
                  r.call(e, t),
                  t.defaultPrevented ||
                    ((a.current = !0),
                    "pointerdown" !== t.detail.originalEvent.type ||
                      (i.current = !0));
                let u = t.target;
                (null === (o = n.triggerRef.current) || void 0 === o
                  ? void 0
                  : o.contains(u)) && t.preventDefault(),
                  "focusin" === t.detail.originalEvent.type &&
                    i.current &&
                    t.preventDefault();
              },
            })
          );
        }),
        Z = (0, o.forwardRef)((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: a,
              onOpenAutoFocus: u,
              onCloseAutoFocus: c,
              ...l
            } = e,
            d = E(M, n),
            p = (0, o.useRef)(null),
            g = (0, i.e)(t, p);
          return (
            (0, v.EW)(),
            (0, o.createElement)(
              o.Fragment,
              null,
              (0, o.createElement)(
                f.M,
                {
                  asChild: !0,
                  loop: !0,
                  trapped: a,
                  onMountAutoFocus: u,
                  onUnmountAutoFocus: c,
                },
                (0, o.createElement)(
                  s.XB,
                  (0, r.Z)(
                    {
                      role: "dialog",
                      id: d.contentId,
                      "aria-describedby": d.descriptionId,
                      "aria-labelledby": d.titleId,
                      "data-state": S(d.open),
                    },
                    l,
                    { ref: g, onDismiss: () => d.onOpenChange(!1) }
                  )
                )
              ),
              !1
            )
          );
        }),
        T = "DialogTitle",
        L = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...a } = e,
            i = E(T, n);
          return (0, o.createElement)(
            g.WV.h2,
            (0, r.Z)({ id: i.titleId }, a, { ref: t })
          );
        }),
        P = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...i } = e,
            u = E("DialogClose", n);
          return (0, o.createElement)(
            g.WV.button,
            (0, r.Z)({ type: "button" }, i, {
              ref: t,
              onClick: (0, a.M)(e.onClick, () => u.onOpenChange(!1)),
            })
          );
        });
      function S(e) {
        return e ? "open" : "closed";
      }
      let [q, W] = (0, u.k)("DialogTitleWarning", {
          contentName: M,
          titleName: T,
          docsSlug: "dialog",
        }),
        V = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: a,
              onOpenChange: i,
              modal: u = !0,
            } = e,
            s = (0, o.useRef)(null),
            f = (0, o.useRef)(null),
            [d = !1, p] = (0, l.T)({ prop: r, defaultProp: a, onChange: i });
          return (0, o.createElement)(
            D,
            {
              scope: t,
              triggerRef: s,
              contentRef: f,
              contentId: (0, c.M)(),
              titleId: (0, c.M)(),
              descriptionId: (0, c.M)(),
              open: d,
              onOpenChange: p,
              onOpenToggle: (0, o.useCallback)(() => p((e) => !e), [p]),
              modal: u,
            },
            n
          );
        },
        X = R,
        z = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: r,
              container: a,
            } = e,
            i = E(_, t);
          return (0, o.createElement)(
            x,
            { scope: t, forceMount: n },
            o.Children.map(r, (e) =>
              (0, o.createElement)(
                p.z,
                { present: n || i.open },
                (0, o.createElement)(d.h, { asChild: !0, container: a }, e)
              )
            )
          );
        },
        $ = I,
        K = N,
        Q = L,
        H = P;
    },
    42837: function (e, t, n) {
      "use strict";
      n.d(t, {
        n: function () {
          return a;
        },
      });
      var r = n(28194),
        o = n(21596);
      function a(e, t) {
        let n = +(0, r.Q)(e);
        return (0, o.L)(e, n + t);
      }
    },
    9038: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return a;
        },
      });
      var r = n(42837),
        o = n(45823);
      function a(e, t) {
        return (0, r.n)(e, t * o.yJ);
      }
    },
    23987: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return o;
        },
      });
      var r = n(28194);
      function o(e, t) {
        return +(0, r.Q)(e) < +(0, r.Q)(t);
      }
    },
    79895: function (e, t, n) {
      "use strict";
      n.d(t, {
        w: function () {
          return s;
        },
      });
      var r = n(40206),
        o = n(86626),
        a = n(98617),
        i = n(73600),
        u = n(68490),
        c = n(93351),
        l = n(18158);
      async function s(
        e,
        {
          address: t,
          blockNumber: n,
          blockTag: s,
          gatewayUrls: f,
          strict: d,
          universalResolverAddress: p,
        }
      ) {
        let g = p;
        if (!g) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          g = (0, o.L)({
            blockNumber: n,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        let v = `${t.toLowerCase().substring(2)}.addr.reverse`;
        try {
          let o = {
              address: g,
              abi: r.du,
              functionName: "reverse",
              args: [(0, a.NC)((0, u.T)(v))],
              blockNumber: n,
              blockTag: s,
            },
            i = (0, c.s)(e, l.L, "readContract"),
            [d, p] = f ? await i({ ...o, args: [...o.args, f] }) : await i(o);
          if (t.toLowerCase() !== p.toLowerCase()) return null;
          return d;
        } catch (e) {
          if (d) throw e;
          if ((0, i.c)(e, "reverse")) return null;
          throw e;
        }
      }
    },
    93676: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return o;
        },
      });
      var r = n(82701);
      function o(e) {
        if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]"))
          return null;
        let t = `0x${e.slice(1, 65)}`;
        return (0, r.v)(t) ? t : null;
      }
    },
    73600: function (e, t, n) {
      "use strict";
      n.d(t, {
        c: function () {
          return i;
        },
      });
      var r = n(55237),
        o = n(70778),
        a = n(63759);
      function i(e, t) {
        if (!(e instanceof o.G)) return !1;
        let n = e.walk((e) => e instanceof a.Lu);
        return (
          n instanceof a.Lu &&
          (!!(
            n.data?.errorName === "ResolverNotFound" ||
            n.data?.errorName === "ResolverWildcardNotSupported" ||
            n.data?.errorName === "ResolverNotContract" ||
            n.data?.errorName === "ResolverError" ||
            n.data?.errorName === "HttpError" ||
            n.reason?.includes(
              "Wildcard on non-extended resolvers is not supported"
            )
          ) ||
            ("reverse" === t && n.reason === r.$[50]))
        );
      }
    },
    68490: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return u;
        },
      });
      var r = n(52796),
        o = n(98617),
        a = n(66616),
        i = n(93676);
      function u(e) {
        let t = e.replace(/^\.|\.$/gm, "");
        if (0 === t.length) return new Uint8Array(1);
        let n = new Uint8Array((0, r.qX)(t).byteLength + 2),
          u = 0,
          c = t.split(".");
        for (let e = 0; e < c.length; e++) {
          let t = (0, r.qX)(c[e]);
          if (t.byteLength > 255) {
            var l;
            t = (0, r.qX)(
              ((l = (function (e) {
                let t = new Uint8Array(32).fill(0);
                return e ? (0, i.i)(e) || (0, a.w)((0, r.qX)(e)) : (0, o.ci)(t);
              })(c[e])),
              `[${l.slice(2)}]`)
            );
          }
          (n[u] = t.length), n.set(t, u + 1), (u += t.length + 1);
        }
        return n.byteLength !== u + 1 ? n.slice(0, u + 1) : n;
      }
    },
    68343: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return l;
        },
      });
      var r = n(79895),
        o = n(85978),
        a = n(99631),
        i = n(23753),
        u = n(13173),
        c = n(8979);
      function l(e = {}) {
        let { address: t, query: n = {} } = e,
          l = (0, c.Z)(e),
          s = (0, u.x)(),
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: a, ...i } = t[1];
                if (!n) throw Error("address is required");
                return (function (e, t) {
                  let { chainId: n, ...a } = t,
                    i = e.getClient({ chainId: n });
                  return (0, o.s)(i, r.w, "getEnsName")(a);
                })(e, { ...i, address: n });
              },
              queryKey: (function (e = {}) {
                return ["ensName", (0, a.O)(e)];
              })(t),
            };
          })(l, { ...e, chainId: e.chainId ?? s }),
          d = !!(t && (n.enabled ?? !0));
        return (0, i.aM)({ ...n, ...f, enabled: d });
      }
    },
  },
]);
