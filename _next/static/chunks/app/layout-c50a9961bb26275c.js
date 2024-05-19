(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185, 3804],
  {
    73804: function () {},
    43942: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 38757, 23)),
        Promise.resolve().then(n.bind(n, 48901)),
        Promise.resolve().then(n.bind(n, 12955)),
        Promise.resolve().then(n.bind(n, 48259)),
        Promise.resolve().then(n.bind(n, 94329)),
        Promise.resolve().then(n.bind(n, 66350)),
        Promise.resolve().then(n.bind(n, 40486)),
        Promise.resolve().then(n.bind(n, 8133));
    },
    12955: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CountdownContext: function () {
            return m;
          },
          CountdownProvider: function () {
            return p;
          },
          timeRenderers: function () {
            return h;
          },
        });
      var r = n(2067),
        s = n(96560),
        a = n(77297),
        i = n(48255),
        o = n(87710),
        l = n.n(o),
        c = n(15039);
      let u = { days: "d", hours: "h", minutes: "m", seconds: "s" },
        d = (e, t) => {
          let n = [];
          return (
            ["days", "hours", "minutes", "seconds"].forEach((r, s) => {
              if (n.length === t) return;
              let a = e[r];
              (a > 0 || n.length > 0 || (0 === n.length && s >= 4 - t)) &&
                n.push({ [r]: a });
            }),
            n.reduce((e, t) => ({ ...e, ...t }), {})
          );
        },
        h = {
          clock: function (e) {
            let { unitsCount: t = 2 } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = d(e, t);
            return (0, r.jsx)("span", {
              className: (0, s.cn)("tabular-nums"),
              children: Object.entries(n).map((e, t) => {
                let [s, i] = e;
                return (0, r.jsxs)(
                  c.Fragment,
                  {
                    children: [
                      0 !== t &&
                        (0, r.jsx)("span", {
                          className: "timer-semi",
                          children: ":",
                        }),
                      (0, r.jsx)("span", {
                        children:
                          t === n.length - 1
                            ? (0, r.jsx)(f, { seconds: i })
                            : (0, a.Bu)(Math.max(0, i), 2),
                      }),
                    ],
                  },
                  "count-d-".concat(t)
                );
              }),
            });
          },
          verbal: function (e) {
            let {
                unitsCount: t = 2,
                zeroPads: n = 0,
                joinWithAnd: i = !1,
                abbreviated: o = !1,
                hideTrailingZero: c = !1,
              } = arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
              d = [];
            return (
              ["days", "hours", "minutes", "seconds"].forEach((s, i) => {
                if (d.length === t) return;
                let h = e[s];
                (h > 0 ||
                  (c ? d.length > 0 && h > 0 : d.length > 0) ||
                  (3 === i && 0 === d.length)) &&
                  void 0 !== h &&
                  d.push({
                    v:
                      "seconds" === s
                        ? (0, r.jsx)(f, { seconds: h })
                        : (0, a.Bu)(h, n),
                    k: o ? u[s] : l()(s, h),
                  });
              }),
              (0, r.jsx)("span", {
                className: (0, s.cn)("tabular-nums"),
                children: d.length
                  ? d.map((e, t) => {
                      let { k: n, v: s } = e;
                      return (0, r.jsxs)(r.Fragment, {
                        children: [
                          1 === t && " ".concat(o ? "" : "and "),
                          s,
                          !o && " ",
                          n,
                        ],
                      });
                    })
                  : "",
              })
            );
          },
          columns: (e, t) => {
            let { days: n, hours: i, minutes: o, seconds: l } = e,
              {
                abbreviated: c,
                unitsCount: h,
                labelClassName: m,
                numberClassName: p,
                wrapperClassName: x,
              } = t,
              g = d({ days: n, hours: i, minutes: o, seconds: l }, h);
            return (0, r.jsx)("div", {
              className: (0, s.cn)("grid items-center gap-2 tabular-nums"),
              style: {
                gridTemplateColumns: "repeat(".concat(
                  Object.entries(g).length,
                  ", 1fr)"
                ),
              },
              children: Object.entries(g).map((e, t) => {
                let [n, i] = e;
                return (0, r.jsxs)(
                  "div",
                  {
                    className: (0, s.cn)(
                      "relative flex items-baseline gap-2",
                      x
                    ),
                    children: [
                      (0, r.jsx)("div", {
                        className: (0, s.cn)(
                          "counter font-normal leading-[1em]",
                          p
                        ),
                        children: isNaN(i)
                          ? (0, r.jsx)("span", {
                              className: "placeholder w-[2ch]",
                            })
                          : t === h
                          ? (0, r.jsx)(f, { seconds: i })
                          : (0, a.Bu)(Math.max(0, i), 2),
                      }),
                      (0, r.jsx)("div", {
                        className: (0, s.cn)(
                          "counter-label origin-bottom-left text-base uppercase text-muted",
                          "font-mono",
                          m
                        ),
                        children: c ? u[n] : n,
                      }),
                    ],
                  },
                  n
                );
              }),
            });
          },
        },
        f = (e) => {
          let { seconds: t } = e,
            [n, i] = (0, c.useState)(!1);
          (0, c.useEffect)(() => {
            let e;
            if (t < 0)
              return (
                i(!0),
                (e = setTimeout(() => i(!1), 200)),
                () => {
                  clearTimeout(e);
                }
              );
          }, [t]);
          let o = t < 0 ? "0" : (0, a.Bu)(t, 2)[0],
            l = t < 0 ? "0" : (0, a.Bu)(t, 2)[1];
          return (0, r.jsxs)("span", {
            children: [
              (0, r.jsx)("span", { children: o }),
              (0, r.jsx)("span", {
                className: (0, s.cn)(n && "shake inline-block"),
                children: l,
              }),
            ],
          });
        };
      t.default = (e) => {
        let {
          date: t,
          cache: n,
          renderer: s = "verbal",
          className: a,
          timeOver: i,
          prepend: o,
          append: l,
          ...u
        } = e;
        if (!n) throw Error("missing key");
        let { timers: d, addTimer: f, removeTimer: p } = (0, c.useContext)(m);
        (0, c.useEffect)(
          () => (
            f(n, t),
            () => {
              p(n);
            }
          ),
          [null == t ? void 0 : t.toString(), n, f, p]
        );
        let x = d[n];
        if (!x) return null;
        let g = x.timeLeft;
        return g <= 0 && i
          ? (0, r.jsx)("span", { className: a, children: i })
          : (0, r.jsxs)("span", {
              className: a,
              children: [
                o || null,
                h[s](
                  {
                    days: Math.floor(g / 86400),
                    hours: Math.floor((g % 86400) / 3600),
                    minutes: Math.floor((g % 3600) / 60),
                    seconds: Math.floor((g % 60) / 1),
                  },
                  u
                ),
                l || null,
              ],
            });
      };
      let m = (0, c.createContext)(null),
        p = (e) => {
          let { children: t } = e,
            [n, s] = (0, c.useState)({}),
            a = (0, c.useCallback)(
              function (e, t) {
                let n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  r = Math.max(0, (0, i.c)(t, new Date()));
                s((s) => {
                  var a, i;
                  let o = n
                    ? s[e].consumers
                    : (null !==
                        (i =
                          null === (a = s[e]) || void 0 === a
                            ? void 0
                            : a.consumers) && void 0 !== i
                        ? i
                        : 0) + 1;
                  return { ...s, [e]: { timeLeft: r, date: t, consumers: o } };
                });
              },
              [s]
            ),
            o = (0, c.useCallback)(
              (e) => {
                s((t) => {
                  var n;
                  let r = { ...t };
                  return (
                    (null === (n = r[e]) || void 0 === n
                      ? void 0
                      : n.consumers) > 1
                      ? (r[e].consumers -= 1)
                      : delete r[e],
                    r
                  );
                });
              },
              [s]
            );
          return (
            (0, c.useEffect)(() => {
              let e = setInterval(() => {
                s((e) => {
                  let t = { ...e };
                  for (let e in t) {
                    let n = (0, i.c)(t[e].date, new Date());
                    t[e].timeLeft = n;
                  }
                  return t;
                });
              }, 1e3);
              return () => {
                clearInterval(e);
              };
            }, [s]),
            (0, r.jsx)(m.Provider, {
              value: { timers: n, addTimer: a, removeTimer: o },
              children: t,
            })
          );
        };
    },
    37397: function (e, t, n) {
      "use strict";
      n.d(t, {
        UH: function () {
          return i;
        },
      });
      var r = n(2067),
        s = n(96560);
      let a = (e) => {
          let { className: t = "", style: n = {} } = e;
          return (0, r.jsxs)("svg", {
            className: (0, s.cn)("w-auto", t),
            width: "10",
            height: "20",
            viewBox: "0 0 10 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            style: n,
            children: [
              (0, r.jsx)("path", {
                d: "M0 4.37114e-07L9.53674e-07 10C7.12263e-07 4.47715 4.47715 2.41411e-07 10 0L0 4.37114e-07Z",
                fill: "var(--bg-color)",
              }),
              (0, r.jsx)("path", {
                d: "M9.53674e-07 10C1.19509e-06 15.5228 4.47715 20 10 20H9.53674e-07V10Z",
                fill: "var(--bg-color)",
              }),
            ],
          });
        },
        i = (e) => {
          let { className: t = "", useCurrentColor: n = !1 } = e;
          return (0, r.jsx)("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: (0, r.jsx)("path", {
              d: "M20 20H0V0C0 11.0457 8.9543 20 20 20Z",
              fill: n ? "currentColor" : "var(--bg-color)",
            }),
          });
        };
      t.ZP = (e) => {
        let { className: t = "", style: n, bg: i, dir: o = "col" } = e;
        return (0, r.jsxs)("div", {
          className: (0, s.cn)(
            t,
            i,
            "w-full",
            "flex justify-center",
            "col" === o ? "flex-row" : "flex-col"
          ),
          style: {
            color: "var(--bg-color)",
            backgroundColor: "transparent",
            ...n,
          },
          children: [
            (0, r.jsx)(a, {
              className: (0, s.cn)("rotate-180", "row" === o && "rotate-270"),
              style: { height: "var(--joint-height)" },
            }),
            (0, r.jsx)("div", {
              className: "max-w-[80%]",
              style: {
                width: "var(--joint-width)",
                backgroundColor: "var(--bg-color)",
              },
            }),
            (0, r.jsx)(a, {
              className: (0, s.cn)("row" === o && "rotate-90"),
              style: { height: "var(--joint-height)" },
            }),
          ],
        });
      };
    },
    48259: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Tooltip: function () {
            return l;
          },
          TooltipContent: function () {
            return u;
          },
          TooltipProvider: function () {
            return o;
          },
          TooltipTrigger: function () {
            return c;
          },
        });
      var r = n(2067),
        s = n(15039),
        a = n(87907),
        i = n(96560);
      let o = (e) => (0, r.jsx)(a.zt, { delayDuration: 150, ...e }),
        l = a.fC,
        c = (e) =>
          (0, r.jsx)(a.xz, {
            ...e,
            className: (0, i.cn)("cursor-auto", e.className),
            type: "button",
          }),
        u = s.forwardRef((e, t) => {
          let { className: n, sideOffset: s = 8, side: o = "bottom", ...l } = e;
          return (
            l.children &&
            (0, r.jsx)(a.VY, {
              ref: t,
              sideOffset: s,
              side: o,
              className: (0, i.cn)(
                "z-50 animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
                "px-3 pb-[11px] pt-[9px]",
                "popover",
                "text-pretty",
                "shadow-lg",
                "text-sm font-normal",
                "max-w-xs",
                n
              ),
              avoidCollisions: !0,
              ...l,
            })
          );
        });
      u.displayName = a.VY.displayName;
    },
    94329: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          SSRProvider: function () {
            return i;
          },
          useIsSSR: function () {
            return o;
          },
        });
      var r = n(2067),
        s = n(15039);
      let a = s.createContext(!0);
      function i(e) {
        let { children: t } = e,
          [n, i] = (0, s.useState)(!0);
        return (
          (0, s.useEffect)(() => {
            i(!1);
          }, []),
          (0, r.jsx)(a.Provider, { value: n, children: t })
        );
      }
      function o() {
        return (0, s.useContext)(a);
      }
    },
    66350: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Web3Provider: function () {
            return U;
          },
          config: function () {
            return E;
          },
          siweClient: function () {
            return B;
          },
        });
      var r = n(2067),
        s = n(77977),
        a = n(15039),
        i = n(11664),
        o = n(56837),
        l = n(36565),
        c = n(61436),
        u = n(89721),
        d = n(48902),
        h = n(74427),
        f = n(71335),
        m = n.n(f),
        p = n(60171),
        x = n(71970),
        g = n(19144),
        v = n(32013),
        j = n(36602),
        w = n(48213),
        b = n(13027),
        y = n(57214),
        N = n(5781),
        C = n(12618),
        k = n(23123),
        M = n(18507),
        O = n(33731),
        P = n(67934),
        S = n(33999);
      let T = "k9foTw_WO85JKGo5hOYksSk8qdsqt7ub",
        E = (0, g._)(
          (0, d._K)({
            chains: l.DZ.flat().filter(Boolean),
            transports: {
              [w.R.id]: (0, v.d)(
                "https://eth-mainnet.g.alchemy.com/v2/".concat(T)
              ),
              [b.y.id]: (0, v.d)(
                "https://arb-mainnet.g.alchemy.com/v2/".concat(T)
              ),
              [y.F.id]: (0, v.d)(
                "https://eth-sepolia.g.alchemy.com/v2/".concat(T)
              ),
              [N.A.id]: (0, v.d)(N.A.rpcUrls.default.http[0]),
              [C.d.id]: (0, v.d)(C.d.rpcUrls.default.http[0]),
              [k.u.id]: (0, v.d)(k.u.rpcUrls.default.http[0]),
              [M.L.id]: (0, v.d)(M.L.rpcUrls.default.http[0]),
              [O.Z.id]: (0, v.d)(O.Z.rpcUrls.default.http[0]),
              [P.c.id]: (0, v.d)(P.c.rpcUrls.default.http[0]),
              [S.d.id]: (0, v.d)(S.d.rpcUrls.default.http[0]),
            },
            walletConnectProjectId: "8fbaffe4a1bd3c713111bef616fed5cd",
            appName: "Metadrop",
            appUrl: "https://metadrop.com",
            appIcon: s.L.appIcon,
          })
        ),
        I = new c.S(),
        B = (0, h.F)({ apiRoutePrefix: "/api/auth/siwe" }),
        L = {
          disclaimer: (0, r.jsxs)(r.Fragment, {
            children: [
              "By connecting your wallet you agree to the",
              " ",
              (0, r.jsx)(m(), {
                target: "_blank",
                href: s.L.documents.termsOfUse,
                rel: "noreferrer",
                children: "Terms of Use",
              }),
              ".",
            ],
          }),
          initialChainId: 0,
        },
        U = (e) => {
          let { children: t } = e,
            n = (0, i.kY)(),
            s = (function (e) {
              let { cache: t, mutate: n } = (0, i.kY)();
              return (0, a.useCallback)(
                function () {
                  for (
                    var r = arguments.length, s = Array(r), a = 0;
                    a < r;
                    a++
                  )
                    s[a] = arguments[a];
                  if (!(t instanceof Map))
                    throw Error(
                      "matchMutate requires the cache provider to be a Map instance"
                    );
                  let i = [];
                  for (let n of t.keys()) n.includes(e) && i.push(n);
                  return Promise.all(i.map((e) => n(e, ...s)));
                },
                [e, n, t]
              );
            })("/v1"),
            l = (0, p.usePathname)().startsWith("/app");
          return (0, r.jsx)(j.F, {
            config: E,
            children: (0, r.jsx)(u.aH, {
              client: I,
              children: (0, r.jsx)(B.Provider, {
                enabled: l,
                signOutOnDisconnect: !0,
                signOutOnAccountChange: !0,
                signOutOnNetworkChange: !1,
                nonceRefetchInterval: 3e5,
                sessionRefetchInterval: 3e5,
                getNonce: async () =>
                  fetch("".concat(o.T, "/auth/nonce"), {
                    credentials: "include",
                  }).then((e) => e.text()),
                createMessage: (e) => {
                  let { nonce: t, address: n, chainId: r } = e;
                  return new x.SiweMessage({
                    version: "1",
                    domain: window.location.host,
                    uri: window.location.origin,
                    address: n,
                    chainId: r,
                    nonce: t,
                    statement:
                      "Sign in to Metadrop with your Ethereum address.",
                  }).prepareMessage();
                },
                verifyMessage: async (e) => {
                  let { message: t, signature: n } = e;
                  return fetch("".concat(o.T, "/auth/verify"), {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({ message: t, signature: n }),
                  }).then((e) => e.ok);
                },
                getSession: async () => {
                  let e = await fetch("".concat(o.T, "/auth/session"), {
                    credentials: "include",
                  });
                  if (!e.ok) throw Error("Failed to fetch SIWE session");
                  let { address: t, chainId: r } = await e.json();
                  return (
                    await n.mutate("/auth/user"),
                    t && r ? { address: t, chainId: r } : null
                  );
                },
                signOut: async () => {
                  try {
                    return (
                      await fetch("".concat(o.T, "/auth/logout"), {
                        credentials: "include",
                      }),
                      await n.mutate("/auth/user"),
                      await s(),
                      !0
                    );
                  } catch (e) {}
                },
                children: (0, r.jsx)(d.bO, { options: L, children: t }),
              }),
            }),
          });
        };
    },
    40486: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MDToaster: function () {
            return c;
          },
        });
      var r = n(2067),
        s = n(52464),
        a = n.n(s),
        i = n(15955),
        o = n(83297),
        l = n(68020);
      let c = () =>
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(a(), { id: "c65cc9028314fa53", children: "" }),
            (0, r.jsx)(o.x, {
              position: "bottom-right",
              toastOptions: {
                className: "popover w-full p-4",
                unstyled: !0,
                classNames: {
                  title: "",
                  description: "text-gray-95",
                  error: "text-negative",
                  success: "text-positive",
                },
              },
              icons: {
                success: (0, r.jsx)(i.CheckmarkIcon, {
                  className: "size-icon-md",
                }),
                info: (0, r.jsx)(i.LightbulbSimpleIcon, {
                  className: "size-icon-md",
                }),
                warning: (0, r.jsx)(i.ExclamationMarkCircledIcon, {
                  className: "size-icon-md",
                }),
                error: (0, r.jsx)(i.ExclamationMarkCircledIcon, {
                  className: "size-icon-md",
                }),
                loading: (0, r.jsx)(l.Z, { className: "size-icon-md" }),
              },
            }),
          ],
        });
    },
    36565: function (e, t, n) {
      "use strict";
      n.d(t, {
        DZ: function () {
          return f;
        },
        Gw: function () {
          return h;
        },
        rq: function () {
          return p;
        },
        zK: function () {
          return m;
        },
      });
      var r = n(48213),
        s = n(5781),
        a = n(23123),
        i = n(13027),
        o = n(12618),
        l = n(57214),
        c = n(18507),
        u = n(33731),
        d = n(56837);
      let h = [r.R, s.A, a.u, !d.Y && [i.y, o.d, l.F, c.L, u.Z], !1]
          .flat()
          .filter(Boolean),
        f = [r.R, a.u, !d.Y && [i.y, o.d, l.F, c.L, u.Z], !1]
          .flat()
          .filter(Boolean),
        m = (e) =>
          h.find((t) => {
            let { id: n } = t;
            return n === e;
          }),
        p = (e) =>
          Object.entries(e).reduce((e, t) => {
            let [n, r] = t;
            return h.map((e) => e.id).includes(Number(n))
              ? { ...e, [n]: r }
              : e;
          }, {});
    },
    38757: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        1765, 4979, 894, 775, 9745, 2005, 1664, 4356, 9041, 8158, 4910, 5060,
        8388, 2469, 3297, 2105, 2418, 4505, 9042, 1214, 9552, 5955, 8451, 5906,
        8282, 4665, 1744,
      ],
      function () {
        return e((e.s = 43942));
      }
    ),
      (_N_E = e.O());
  },
]);
