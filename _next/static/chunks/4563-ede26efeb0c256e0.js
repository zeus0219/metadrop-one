(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4563],
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
          s,
          l,
          f,
          d = !1;
        t || (t = {}), (i = t.debug || !1);
        try {
          if (
            ((c = r()),
            (s = document.createRange()),
            (l = document.getSelection()),
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
            s.selectNodeContents(f),
            l.addRange(s),
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
          l &&
            ("function" == typeof l.removeRange
              ? l.removeRange(s)
              : l.removeAllRanges()),
            f && document.body.removeChild(f),
            c();
        }
        return d;
      };
    },
    13359: function (e) {
      let t = (e, t, n) =>
        (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? e + (t - e) * 6 * n
          : n < 0.5
          ? t
          : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e;
      e.exports = (e, n, r) => {
        let o, a, i;
        if (((e /= 360), 0 == n)) o = a = i = r;
        else {
          let u = r < 0.5 ? r * (1 + n) : r + n - r * n,
            c = 2 * r - u;
          (o = t(c, u, e + 1 / 3)), (a = t(c, u, e)), (i = t(c, u, e - 1 / 3));
        }
        return [
          Math.max(0, Math.min(Math.round(255 * o), 255)),
          Math.max(0, Math.min(Math.round(255 * a), 255)),
          Math.max(0, Math.min(Math.round(255 * i), 255)),
        ];
      };
    },
    69239: function (e) {
      e.exports = (e, t, n) => [
        [e, t, n],
        [(e + 120) % 360, t, n],
        [(e + 240) % 360, t, n],
      ];
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
    10105: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(15039);
      function o(e) {
        var t = (0, r.useRef)();
        return (
          (0, r.useEffect)(function () {
            t.current = e;
          }),
          t.current
        );
      }
    },
    81345: function (e) {
      "use strict";
      e.exports = function (e) {
        for (var t = 5381, n = e.length; n; ) t = (33 * t) ^ e.charCodeAt(--n);
        return t >>> 0;
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
    21714: function (e, t, n) {
      "use strict";
      n.d(t, {
        VY: function () {
          return N;
        },
        fC: function () {
          return S;
        },
        h_: function () {
          return U;
        },
        xz: function () {
          return Z;
        },
      });
      var r = n(65122),
        o = n(15039),
        a = n(65727),
        i = n(41633),
        u = n(70686),
        c = n(10094),
        s = n(71746),
        l = n(46201),
        f = n(89219),
        d = n(15755),
        p = n(22843),
        h = n(95502),
        v = n(94221),
        m = n(22353),
        g = n(75347),
        y = n(52871),
        w = n(43022);
      let C = "Popover",
        [b, E] = (0, u.b)(C, [d.D7]),
        x = (0, d.D7)(),
        [D, P] = b(C),
        R = (0, o.forwardRef)((e, t) => {
          let { __scopePopover: n, ...u } = e,
            c = P("PopoverTrigger", n),
            s = x(n),
            l = (0, i.e)(t, c.triggerRef),
            f = (0, o.createElement)(
              v.WV.button,
              (0, r.Z)(
                {
                  type: "button",
                  "aria-haspopup": "dialog",
                  "aria-expanded": c.open,
                  "aria-controls": c.contentId,
                  "data-state": q(c.open),
                },
                u,
                { ref: l, onClick: (0, a.M)(e.onClick, c.onOpenToggle) }
              )
            );
          return c.hasCustomAnchor
            ? f
            : (0, o.createElement)(d.ee, (0, r.Z)({ asChild: !0 }, s), f);
        }),
        F = "PopoverPortal",
        [I, M] = b(F, { forceMount: void 0 }),
        k = "PopoverContent",
        O = (0, o.forwardRef)((e, t) => {
          let n = M(k, e.__scopePopover),
            { forceMount: a = n.forceMount, ...i } = e,
            u = P(k, e.__scopePopover);
          return (0, o.createElement)(
            h.z,
            { present: a || u.open },
            u.modal
              ? (0, o.createElement)(_, (0, r.Z)({}, i, { ref: t }))
              : (0, o.createElement)(A, (0, r.Z)({}, i, { ref: t }))
          );
        }),
        _ = (0, o.forwardRef)((e, t) => {
          let n = P(k, e.__scopePopover),
            u = (0, o.useRef)(null),
            c = (0, i.e)(t, u),
            s = (0, o.useRef)(!1);
          return (
            (0, o.useEffect)(() => {
              let e = u.current;
              if (e) return (0, y.Ry)(e);
            }, []),
            (0, o.createElement)(
              w.Z,
              { as: m.g7, allowPinchZoom: !0 },
              (0, o.createElement)(
                T,
                (0, r.Z)({}, e, {
                  ref: c,
                  trapFocus: n.open,
                  disableOutsidePointerEvents: !0,
                  onCloseAutoFocus: (0, a.M)(e.onCloseAutoFocus, (e) => {
                    var t;
                    e.preventDefault(),
                      s.current ||
                        null === (t = n.triggerRef.current) ||
                        void 0 === t ||
                        t.focus();
                  }),
                  onPointerDownOutside: (0, a.M)(
                    e.onPointerDownOutside,
                    (e) => {
                      let t = e.detail.originalEvent,
                        n = 0 === t.button && !0 === t.ctrlKey,
                        r = 2 === t.button || n;
                      s.current = r;
                    },
                    { checkForDefaultPrevented: !1 }
                  ),
                  onFocusOutside: (0, a.M)(
                    e.onFocusOutside,
                    (e) => e.preventDefault(),
                    { checkForDefaultPrevented: !1 }
                  ),
                })
              )
            )
          );
        }),
        A = (0, o.forwardRef)((e, t) => {
          let n = P(k, e.__scopePopover),
            a = (0, o.useRef)(!1),
            i = (0, o.useRef)(!1);
          return (0, o.createElement)(
            T,
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
        T = (0, o.forwardRef)((e, t) => {
          let {
              __scopePopover: n,
              trapFocus: a,
              onOpenAutoFocus: i,
              onCloseAutoFocus: u,
              disableOutsidePointerEvents: f,
              onEscapeKeyDown: p,
              onPointerDownOutside: h,
              onFocusOutside: v,
              onInteractOutside: m,
              ...g
            } = e,
            y = P(k, n),
            w = x(n);
          return (
            (0, s.EW)(),
            (0, o.createElement)(
              l.M,
              {
                asChild: !0,
                loop: !0,
                trapped: a,
                onMountAutoFocus: i,
                onUnmountAutoFocus: u,
              },
              (0, o.createElement)(
                c.XB,
                {
                  asChild: !0,
                  disableOutsidePointerEvents: f,
                  onInteractOutside: m,
                  onEscapeKeyDown: p,
                  onPointerDownOutside: h,
                  onFocusOutside: v,
                  onDismiss: () => y.onOpenChange(!1),
                },
                (0, o.createElement)(
                  d.VY,
                  (0, r.Z)(
                    {
                      "data-state": q(y.open),
                      role: "dialog",
                      id: y.contentId,
                    },
                    w,
                    g,
                    {
                      ref: t,
                      style: {
                        ...g.style,
                        "--radix-popover-content-transform-origin":
                          "var(--radix-popper-transform-origin)",
                        "--radix-popover-content-available-width":
                          "var(--radix-popper-available-width)",
                        "--radix-popover-content-available-height":
                          "var(--radix-popper-available-height)",
                        "--radix-popover-trigger-width":
                          "var(--radix-popper-anchor-width)",
                        "--radix-popover-trigger-height":
                          "var(--radix-popper-anchor-height)",
                      },
                    }
                  )
                )
              )
            )
          );
        });
      function q(e) {
        return e ? "open" : "closed";
      }
      let S = (e) => {
          let {
              __scopePopover: t,
              children: n,
              open: r,
              defaultOpen: a,
              onOpenChange: i,
              modal: u = !1,
            } = e,
            c = x(t),
            s = (0, o.useRef)(null),
            [l, p] = (0, o.useState)(!1),
            [h = !1, v] = (0, g.T)({ prop: r, defaultProp: a, onChange: i });
          return (0, o.createElement)(
            d.fC,
            c,
            (0, o.createElement)(
              D,
              {
                scope: t,
                contentId: (0, f.M)(),
                triggerRef: s,
                open: h,
                onOpenChange: v,
                onOpenToggle: (0, o.useCallback)(() => v((e) => !e), [v]),
                hasCustomAnchor: l,
                onCustomAnchorAdd: (0, o.useCallback)(() => p(!0), []),
                onCustomAnchorRemove: (0, o.useCallback)(() => p(!1), []),
                modal: u,
              },
              n
            )
          );
        },
        Z = R,
        U = (e) => {
          let {
              __scopePopover: t,
              forceMount: n,
              children: r,
              container: a,
            } = e,
            i = P(F, t);
          return (0, o.createElement)(
            I,
            { scope: t, forceMount: n },
            (0, o.createElement)(
              h.z,
              { present: n || i.open },
              (0, o.createElement)(p.h, { asChild: !0, container: a }, r)
            )
          );
        },
        N = O;
    },
    54350: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return o;
        },
      });
      var r = n(92931);
      function o(e, t = {}) {
        let n = (function (e, t = {}) {
          let n;
          try {
            n = e.getClient(t);
          } catch {}
          return n;
        })(e, t);
        return n?.extend(r.I);
      }
    },
    38372: function (e, t, n) {
      "use strict";
      n.d(t, {
        e: function () {
          return c;
        },
      });
      var r = n(91815),
        o = n(27769),
        a = n(96454),
        i = n(22936),
        u = n(85978);
      async function c(e, t) {
        let { chainId: n, timeout: c = 0, ...s } = t,
          l = e.getClient({ chainId: n }),
          f = (0, u.s)(l, o.e, "waitForTransactionReceipt"),
          d = await f({ ...s, timeout: c });
        if ("reverted" === d.status) {
          let e = (0, u.s)(l, a.f, "getTransaction"),
            t = await e({ hash: d.transactionHash }),
            n = (0, u.s)(l, i.RE, "call"),
            o = await n({
              ...t,
              gasPrice: "eip1559" !== t.type ? t.gasPrice : void 0,
              maxFeePerGas: "eip1559" === t.type ? t.maxFeePerGas : void 0,
              maxPriorityFeePerGas:
                "eip1559" === t.type ? t.maxPriorityFeePerGas : void 0,
            });
          throw Error((0, r.rR)(`0x${o.substring(138)}`));
        }
        return { ...d, chainId: l.chain.id };
      }
    },
    83781: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return a;
        },
      });
      var r = n(28194),
        o = n(21596);
      function a(e, t) {
        let n = (0, r.Q)(e);
        return isNaN(t)
          ? (0, o.L)(e, NaN)
          : (t && n.setDate(n.getDate() + t), n);
      }
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
    4897: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return m;
        },
      });
      var r = n(9566),
        o = n(19551),
        a = n(29893),
        i = n(11588),
        u = n(213),
        c = n(98816),
        s = n(38319),
        l = n(12800),
        f = n(93351),
        d = n(31095),
        p = n(72002),
        h = n(40156),
        v = n(30722);
      async function m(e, t) {
        let {
          account: n = e.account,
          chain: m = e.chain,
          accessList: g,
          data: y,
          gas: w,
          gasPrice: C,
          maxFeePerGas: b,
          maxPriorityFeePerGas: E,
          nonce: x,
          to: D,
          value: P,
          ...R
        } = t;
        if (!n)
          throw new o.o({ docsPath: "/docs/actions/wallet/sendTransaction" });
        let F = (0, r.T)(n);
        try {
          let n;
          if (
            ((0, d.F)(t),
            null !== m &&
              ((n = await (0, f.s)(e, p.L, "getChainId")({})),
              (0, a.q)({ currentChainId: n, chain: m })),
            "local" === F.type)
          ) {
            let t = await (0, f.s)(
              e,
              h.Z,
              "prepareTransactionRequest"
            )({
              account: F,
              accessList: g,
              chain: m,
              data: y,
              gas: w,
              gasPrice: C,
              maxFeePerGas: b,
              maxPriorityFeePerGas: E,
              nonce: x,
              to: D,
              value: P,
              ...R,
            });
            n || (n = await (0, f.s)(e, p.L, "getChainId")({}));
            let r = m?.serializers?.transaction,
              o = await F.signTransaction(
                { ...t, chainId: n },
                { serializer: r }
              );
            return await (0, f.s)(
              e,
              v.p,
              "sendRawTransaction"
            )({ serializedTransaction: o });
          }
          let r = e.chain?.formatters?.transactionRequest?.format,
            o = (r || l.tG)({
              ...(0, s.K)(R, { format: r }),
              accessList: g,
              data: y,
              from: F.address,
              gas: w,
              gasPrice: C,
              maxFeePerGas: b,
              maxPriorityFeePerGas: E,
              nonce: x,
              to: D,
              value: P,
            });
          return await e.request(
            { method: "eth_sendTransaction", params: [o] },
            { retryCount: 0 }
          );
        } catch (e) {
          throw (function (e, { docsPath: t, ...n }) {
            let r = (() => {
              let t = (0, c.k)(e, n);
              return t instanceof i.cj ? e : t;
            })();
            return new u.mk(r, { docsPath: t, ...n });
          })(e, { ...t, account: F, chain: t.chain || void 0 });
        }
      }
    },
    81452: function (e, t, n) {
      "use strict";
      n.d(t, {
        n: function () {
          return i;
        },
      });
      var r = n(824),
        o = n(93351),
        a = n(4897);
      async function i(e, t) {
        let {
            abi: n,
            address: i,
            args: u,
            dataSuffix: c,
            functionName: s,
            ...l
          } = t,
          f = (0, r.R)({ abi: n, args: u, functionName: s });
        return (0, o.s)(
          e,
          a.T,
          "sendTransaction"
        )({ data: `${f}${c ? c.replace("0x", "") : ""}`, to: i, ...l });
      }
    },
    73671: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return a;
        },
      });
      var r = n(42529),
        o = n(92931);
      function a(e) {
        let { key: t = "public", name: n = "Public Client" } = e;
        return (0, r.e)({ ...e, key: t, name: n, type: "publicClient" }).extend(
          o.I
        );
      }
    },
    9755: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return i;
        },
      });
      var r = n(814),
        o = n(91389),
        a = n(52887);
      function i(e, t = {}) {
        let {
          key: n = "fallback",
          name: i = "Fallback",
          rank: u = !1,
          retryCount: c,
          retryDelay: s,
        } = t;
        return ({ chain: t, pollingInterval: l = 4e3, timeout: f, ...d }) => {
          let p = e,
            h = () => {},
            v = (0, a.q)(
              {
                key: n,
                name: i,
                async request({ method: e, params: n }) {
                  let o = async (a = 0) => {
                    let i = p[a]({ ...d, chain: t, retryCount: 0, timeout: f });
                    try {
                      let t = await i.request({ method: e, params: n });
                      return (
                        h({
                          method: e,
                          params: n,
                          response: t,
                          transport: i,
                          status: "success",
                        }),
                        t
                      );
                    } catch (t) {
                      if (
                        (h({
                          error: t,
                          method: e,
                          params: n,
                          transport: i,
                          status: "error",
                        }),
                        ("code" in t &&
                          "number" == typeof t.code &&
                          (t.code === r.KB.code ||
                            t.code === r.ab.code ||
                            5e3 === t.code)) ||
                          a === p.length - 1)
                      )
                        throw t;
                      return o(a + 1);
                    }
                  };
                  return o();
                },
                retryCount: c,
                retryDelay: s,
                type: "fallback",
              },
              {
                onResponse: (e) => (h = e),
                transports: p.map((e) => e({ chain: t, retryCount: 0 })),
              }
            );
          if (u) {
            let e = "object" == typeof u ? u : {};
            !(function ({
              chain: e,
              interval: t = 4e3,
              onTransports: n,
              sampleCount: r = 10,
              timeout: a = 1e3,
              transports: i,
              weights: u = {},
            }) {
              let { stability: c = 0.7, latency: s = 0.3 } = u,
                l = [],
                f = async () => {
                  let u = await Promise.all(
                    i.map(async (t) => {
                      let n, r;
                      let o = t({ chain: e, retryCount: 0, timeout: a }),
                        i = Date.now();
                      try {
                        await o.request({ method: "net_listening" }), (r = 1);
                      } catch {
                        r = 0;
                      } finally {
                        n = Date.now();
                      }
                      return { latency: n - i, success: r };
                    })
                  );
                  l.push(u), l.length > r && l.shift();
                  let d = Math.max(
                    ...l.map((e) => Math.max(...e.map(({ latency: e }) => e)))
                  );
                  n(
                    i
                      .map((e, t) => {
                        let n = l.map((e) => e[t].latency),
                          r = n.reduce((e, t) => e + t, 0) / n.length,
                          o = l.map((e) => e[t].success),
                          a = o.reduce((e, t) => e + t, 0) / o.length;
                        return 0 === a ? [0, t] : [s * (1 - r / d) + c * a, t];
                      })
                      .sort((e, t) => t[0] - e[0])
                      .map(([, e]) => i[e])
                  ),
                    await (0, o.D)(t),
                    f();
                };
              f();
            })({
              chain: t,
              interval: e.interval ?? l,
              onTransports: (e) => (p = e),
              sampleCount: e.sampleCount,
              timeout: e.timeout,
              transports: p,
              weights: e.weights,
            });
          }
          return v;
        };
      }
    },
    93961: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return r;
        },
      });
      let r = "0x0000000000000000000000000000000000000000";
    },
    89026: function (e, t, n) {
      "use strict";
      n.d(t, {
        zL: function () {
          return o;
        },
        zg: function () {
          return r;
        },
      });
      let r = 2n ** 32n - 1n,
        o = 2n ** 256n - 1n;
    },
    29893: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return o;
        },
      });
      var r = n(18741);
      function o({ chain: e, currentChainId: t }) {
        if (!e) throw new r.Bk();
        if (t !== e.id) throw new r.Yl({ chain: e, currentChainId: t });
      }
    },
    13506: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return i;
        },
      });
      var r = n(54350),
        o = n(52635),
        a = n(8979);
      function i(e = {}) {
        let t = (0, a.Z)(e);
        return (0, o.useSyncExternalStoreWithSelector)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe(() => (0, r.u)(e), n, {
                equalityFn: (e, t) => e?.uid === t?.uid,
              });
            })(t, { onChange: e }),
          () => (0, r.u)(t, e),
          () => (0, r.u)(t, e),
          (e) => e,
          (e, t) => e?.uid === t?.uid
        );
      }
    },
    74020: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return c;
        },
      });
      var r = n(64456),
        o = n(99631),
        a = n(23753),
        i = n(13173),
        u = n(8979);
      function c(e = {}) {
        let { abi: t, address: n, functionName: c, query: s = {} } = e,
          l = (0, u.Z)(e),
          f = (0, i.x)(),
          d = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let o = t.abi;
                if (!o) throw Error("abi is required");
                let { address: a, functionName: i, scopeKey: u, ...c } = n[1];
                if (!a) throw Error("address is required");
                if (!i) throw Error("functionName is required");
                let s = c.args;
                return (0, r.L)(e, {
                  abi: o,
                  address: a,
                  functionName: i,
                  args: s,
                  ...c,
                });
              },
              queryKey: (function (e = {}) {
                let { abi: t, ...n } = e;
                return ["readContract", (0, o.O)(n)];
              })(t),
            };
          })(l, { ...e, chainId: e.chainId ?? f }),
          p = !!(n && t && c && (s.enabled ?? !0));
        return (0, a.aM)({
          ...s,
          ...d,
          enabled: p,
          structuralSharing: s.structuralSharing ?? a.if,
        });
      }
    },
    91873: function (e, t, n) {
      "use strict";
      n.d(t, {
        N: function () {
          return s;
        },
      });
      var r = n(62383),
        o = n(99631),
        a = n(15039),
        i = n(23753),
        u = n(13173),
        c = n(8979);
      function s(e = {}) {
        let { contracts: t = [], query: n = {} } = e,
          s = (0, c.Z)(e),
          l = (0, u.x)(),
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let o = [],
                  a = n[1].contracts.length;
                for (let e = 0; e < a; e++) {
                  let r = n[1].contracts[e],
                    a = t.contracts?.[e].abi;
                  o.push({ ...r, abi: a });
                }
                let { scopeKey: i, ...u } = n[1];
                return (0, r.J)(e, { ...u, contracts: o });
              },
              queryKey: (function (e = {}) {
                let t = [];
                for (let n of e.contracts ?? []) {
                  let { abi: r, ...o } = n;
                  t.push({ ...o, chainId: o.chainId ?? e.chainId });
                }
                return ["readContracts", (0, o.O)({ ...e, contracts: t })];
              })(t),
            };
          })(s, { ...e, chainId: l }),
          d = (0, a.useMemo)(() => {
            let e = !1;
            for (let n of t) {
              let { abi: t, address: r, functionName: o } = n;
              if (!t || !r || !o) {
                e = !1;
                break;
              }
              e = !0;
            }
            return !!(e && (n.enabled ?? !0));
          }, [t, n.enabled]);
        return (0, i.aM)({
          ...f,
          ...n,
          enabled: d,
          structuralSharing: n.structuralSharing ?? i.if,
        });
      }
    },
    53953: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return f;
        },
      });
      var r = n(29297),
        o = n(81452),
        a = n(85978),
        i = n(13360),
        u = n(9077);
      async function c(e, t) {
        let n;
        let { abi: r, chainId: o, connector: c, ...s } = t;
        n = t.account
          ? t.account
          : (await (0, i.e)(e, { chainId: o, connector: c })).account;
        let l = e.getClient({ chainId: o }),
          f = (0, a.s)(l, u.a, "simulateContract"),
          { result: d, request: p } = await f({ ...s, abi: r, account: n });
        return {
          chainId: l.chain.id,
          result: d,
          request: { __mode: "prepared", ...p, chainId: o },
        };
      }
      async function s(e, t) {
        let n, r;
        let { account: u, chainId: s, connector: l, __mode: f, ...d } = t;
        if (
          ((n =
            "object" == typeof u && "local" === u.type
              ? e.getClient({ chainId: s })
              : await (0, i.e)(e, { account: u, chainId: s, connector: l })),
          "prepared" === f)
        )
          r = d;
        else {
          let { request: t } = await c(e, { ...d, account: u });
          r = t;
        }
        let p = (0, a.s)(n, o.n, "writeContract");
        return await p({
          ...r,
          ...(u ? { account: u } : {}),
          chain: s ? { id: s } : null,
        });
      }
      var l = n(8979);
      function f(e = {}) {
        var t;
        let { mutation: n } = e,
          o =
            ((t = (0, l.Z)(e)),
            { mutationFn: (e) => s(t, e), mutationKey: ["writeContract"] }),
          { mutate: a, mutateAsync: i, ...u } = (0, r.D)({ ...n, ...o });
        return { ...u, writeContract: a, writeContractAsync: i };
      }
    },
  },
]);
