"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7263],
  {
    43568: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return c;
        },
        yA: function () {
          return l;
        },
      });
      var i = t(2067),
        a = t(96560);
      let l = (e) => {
        let { className: n } = e;
        return (0, i.jsx)("svg", {
          viewBox: "0 0 79 33",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: (0, a.cn)("h-full", n),
          children: (0, i.jsx)("path", {
            d: "M76.8328 0.807308C77.708 0.260294 78.8433 0.889519 78.8433 1.92162V14.2464C78.8433 15.6056 78.1431 16.869 76.9904 17.5894L53.8448 32.0554C52.9696 32.6024 51.8343 31.9732 51.8343 30.9411V22.0297C51.8343 19.9655 49.5638 18.7071 47.8133 19.8011L27.9277 32.2296C27.0525 32.7766 25.9172 32.1474 25.9172 31.1153V22.2038C25.9172 20.1396 23.6467 18.8811 21.8963 19.9751L2.01068 32.4036C1.13547 32.9506 0.000190735 32.3214 0.000190735 31.2893V18.9645C0.000190735 17.6053 0.700394 16.342 1.853 15.6216L24.9986 1.15556C25.8739 0.608547 27.0091 1.23777 27.0091 2.26987V11.1814C27.0091 13.2456 29.2797 14.504 31.0301 13.41L50.9157 0.981509C51.7909 0.434496 52.9262 1.06372 52.9262 2.09582V11.0072C52.9262 13.0714 55.1968 14.3298 56.9472 13.2358L76.8328 0.807308Z",
            fill: "currentColor",
          }),
        });
      };
      function o(e) {
        let { responsive: n, className: t } = e;
        return (0, i.jsx)("div", {
          className: (0, a.cn)(
            "font-65 font-wide uppercase leading-none tracking-wider",
            "h-full pt-[4px]",
            { "hidden md:block": n },
            t
          ),
          children: "metadrop",
        });
      }
      function c(e) {
        let {
          include: n = "all",
          tagline: t,
          className: c,
          responsive: r,
          innerClassName: s,
        } = e;
        return t
          ? (0, i.jsxs)("div", {
              className: (0, a.cn)(
                "flex items-center justify-start gap-3 text-gray-95",
                c
              ),
              children: [
                (0, i.jsx)(l, { className: "h-6" }),
                (0, i.jsxs)("div", {
                  className: "hidden flex-col text-sm md:flex",
                  children: [
                    (0, i.jsx)("span", {
                      className: "font-wide uppercase tracking-wide",
                      children: "Metadrop",
                    }),
                    (0, i.jsx)("span", {
                      className: "-mt-[4px] text-gray-70",
                      children: t,
                    }),
                  ],
                }),
              ],
            })
          : (0, i.jsxs)("div", {
              className: (0, a.cn)("flex items-center gap-5", c),
              children: [
                ("all" === n || "logoImage" === n) &&
                  (0, i.jsx)(l, { className: s }),
                ("all" === n || "logoWord" === n) &&
                  (0, i.jsx)(o, { responsive: r, className: s }),
              ],
            });
      }
    },
    60107: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(69436),
        a = t(11664);
      function l(e, n) {
        return (0, a.ZP)(
          e ? "/".concat(n ? "public" : "v1", "/coins/").concat(e) : null,
          (e) => (0, i.Z)(e, { redirectToLogin: !0 })
        );
      }
    },
    62678: function (e, n, t) {
      t.d(n, {
        S: function () {
          return c;
        },
      });
      var i = t(60107),
        a = t(3476),
        l = t(60171),
        o = t(15039);
      let c = () => {
        let e = (0, l.useParams)().coinId,
          { data: n } = (0, i.Z)(e),
          [t, c] = (0, o.useState)({}),
          [r, s] = (0, o.useState)({}),
          [d, u] = (0, o.useState)(0);
        return (
          (0, o.useEffect)(() => {
            let t = async () => {
              let t;
              let i = (0, a.dZ)({ id: e }),
                l = i.cast(null == n ? void 0 : n.coin);
              try {
                await i.validate(l, {
                  abortEarly: !1,
                  context: { isFinal: !0, unit: "wei" },
                });
              } catch (e) {
                "ValidationError" === e.name
                  ? (t = e.inner.reduce((e, n) => {
                      let { path: t, ...i } = n;
                      return { ...e, [t]: i };
                    }, {}))
                  : console.log("Error validating coin:", e);
              }
              let { fields: o } = i.describe({
                  context: { isFinal: !0 },
                  value: l,
                }),
                r =
                  Object.entries(o).filter((e) => {
                    let [n, { optional: t }] = e;
                    return t;
                  }).length - 0;
              s(t), c(o), u(r);
            };
            (null == n ? void 0 : n.coin) && t();
          }, [null == n ? void 0 : n.coin, e]),
          {
            requiredCount: d,
            errorsCount: r ? Object.keys(r).length : 0,
            errors: r,
            fields: t,
          }
        );
      };
    },
    7263: function (e, n, t) {
      t.d(n, {
        G: function () {
          return k;
        },
      });
      var i = t(2067),
        a = t(2384),
        l = t(15955),
        o = t(60107),
        c = t(96560),
        r = t(69436);
      function s(e) {
        return !!e;
      }
      var d = t(43568),
        u = t(71335),
        h = t.n(u),
        f = t(60171),
        p = t(62678);
      function m() {
        (0, f.useRouter)();
        let e = (0, f.useParams)().coinId,
          { requiredCount: n, errorsCount: t } = (0, p.S)();
        return (0, i.jsxs)(h(), {
          className: "group relative text-left",
          href: "/app/coins/[coinId]/review-and-launch?coinId=".concat(e),
          as: "/app/coins/".concat(e, "/review-and-launch"),
          prefetch: !0,
          children: [
            (0, i.jsxs)("div", {
              className: (0, c.cn)(
                "relative z-10 flex flex-col gap-2 rounded-md bg-gray-20 px-4 pb-3 pt-4 text-gray-95 transition-all",
                "group-hover:bg-gray-30"
              ),
              children: [
                (0, i.jsx)(d.ZP, { include: "logoImage", className: "h-4" }),
                (0, i.jsx)("div", {
                  className: "font-bold",
                  children: "Launch your coin",
                }),
                (0, i.jsx)("div", {
                  className: (0, c.cn)("mb-1 text-sm", "text-gray-60"),
                  children: "Get your coin ready to launch on Metadrop.",
                }),
                (0, i.jsx)("div", {
                  className: "h-[4px] overflow-hidden rounded-full bg-gray-50",
                  children: (0, i.jsx)("div", {
                    className:
                      "h-full rounded-full bg-highlight !transition-all",
                    style: { width: "".concat((1 - t / n) * 100, "%") },
                  }),
                }),
                (0, i.jsx)(a.default, {
                  className: "-ml-1 mt-2 w-[calc(100%+0.5rem)]",
                  label: "Review & Launch",
                  Component: "div",
                  htmlType: "button",
                  children: "Review & Launch",
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: (0, c.cn)(
                "mx-4 h-2 rounded-b-md opacity-[0.5]",
                "inset-4 bg-gray-20",
                "transition-all group-hover:h-3 group-hover:bg-gray-30 "
              ),
            }),
            (0, i.jsx)("div", {
              className: (0, c.cn)(
                "mx-8 h-2 rounded-b-md opacity-[0.25]",
                "inset-4 bg-gray-20",
                "transition-all group-hover:h-3 group-hover:bg-gray-30"
              ),
            }),
          ],
        });
      }
      var v = t(83297),
        b = t(42482),
        g = t(36013),
        x = t(74734),
        y = t(44544),
        I = t(59757),
        j = t(9038),
        w = t(637),
        C = t(28967),
        N = t(15039);
      let A = (e) => {
          let { coin: n } = e,
            { coinId: t } = (0, f.useParams)(),
            { mutate: l } = (0, o.Z)(t),
            [c, s] = (0, N.useState)(!1),
            d = (null == n ? void 0 : n.contractVerifiedAt) !== null,
            u =
              (0, b.G)(
                (null == n ? void 0 : n.verificationRequestedAt) &&
                  (0, j.m)(null == n ? void 0 : n.verificationRequestedAt, 10)
              ) && !!(null == n ? void 0 : n.verificationRequestedAt),
            h = async () => {
              s(!0);
              try {
                await (0, r.Z)("/v1/coins/".concat(t, "/verify"), {
                  method: "POST",
                }),
                  v.A.success(
                    "Verifying contract. This can take up to 5 minutes."
                  ),
                  setTimeout(() => l, 5e3);
              } catch (e) {
                v.A.error(e), s(!1);
              }
            };
          return (0, i.jsx)(w.M, {
            initial: !1,
            children:
              !d &&
              (0, i.jsx)(C.E.div, {
                ...(0, x.g)(),
                className: "w-full",
                children: (0, i.jsx)(a.default, {
                  onClick: h,
                  disabled: c || u,
                  fullWidth: !0,
                  children: d ? "Verified" : "Verify Contract",
                }),
              }),
          });
        },
        S = () => {
          let { data: e } = (0, y.Z)(),
            { coinId: n } = (0, f.useParams)(),
            t = null == e ? void 0 : e.user,
            l = (0, f.useRouter)();
          return (null == t ? void 0 : t.isMetadropTeam)
            ? (0, i.jsx)(a.default, {
                onClick: async () => {
                  let { coin: e } = await (0, r.Z)(
                    "/internal/coins/".concat(n, "/duplicate"),
                    { method: "POST" }
                  );
                  l.push("/app/coins/".concat(e.id));
                },
                children: "Duplicate Coin",
              })
            : null;
        },
        T = () => {
          var e, n, t;
          let { coinId: l } = (0, f.useParams)(),
            { data: c } = (0, o.Z)(l);
          return (0, i.jsxs)("div", {
            className: "flex flex-col gap-2",
            children: [
              (0, i.jsx)(S, {}),
              (0, i.jsx)(A, { coin: null == c ? void 0 : c.coin }),
              (0, i.jsx)("hr", { className: "my-1 border-gray-20" }),
              (0, i.jsx)(a.default, {
                target: "_blank",
                as: "/coins/".concat(null == c ? void 0 : c.coin.slug),
                href: "/coins/[slug]?slug=".concat(
                  null == c ? void 0 : c.coin.slug
                ),
                children: "View profile",
              }),
              (0, i.jsxs)(a.default, {
                type: "secondary",
                target: "_blank",
                href: ""
                  .concat(
                    g.kh[
                      null == c
                        ? void 0
                        : null === (e = c.coin) || void 0 === e
                        ? void 0
                        : e.chainId
                    ],
                    "/address/"
                  )
                  .concat(
                    null == c
                      ? void 0
                      : null === (n = c.coin) || void 0 === n
                      ? void 0
                      : n.erc20Address
                  ),
                children: [
                  "View on ",
                  g.O0[
                    null == c
                      ? void 0
                      : null === (t = c.coin) || void 0 === t
                      ? void 0
                      : t.chainId
                  ],
                ],
              }),
            ],
          });
        },
        k = () => {
          var e;
          let n = (0, f.useParams)().coinId,
            { data: t, isLoading: a } = (0, o.Z)(n),
            r = !!(null == t
              ? void 0
              : null === (e = t.coin) || void 0 === e
              ? void 0
              : e.erc20Address),
            d = !I.Y;
          return {
            links: (0, N.useMemo)(() => {
              let e = (e) => ({
                href: "/app/coins/[coinId]".concat(e, "?coinId=").concat(n),
                as: "/app/coins/".concat(n).concat(e),
              });
              return a
                ? [{ label: "Loading Coin...", links: [] }]
                : r
                ? [
                    {
                      label: "Coin Dashboard",
                      links: [
                        {
                          label: "Dashboard",
                          ...e(""),
                          Icon: l.DashboardFastIcon,
                        },
                        {
                          label: "Coin Profile",
                          ...e("/profile"),
                          Icon: l.CryptoIcon,
                        },
                        {
                          label: "Socials",
                          ...e("/socials"),
                          Icon: (e) => {
                            let { className: n } = e;
                            return (0, i.jsx)(l.WebsiteIcon, {
                              className: (0, c.cn)("p-[3px]", n),
                            });
                          },
                        },
                        {
                          label: "Anti-Bot",
                          ...e("/anti-bot"),
                          Icon: l.ShieldIcon,
                        },
                        { label: "Taxes", ...e("/taxes"), Icon: l.PercentIcon },
                        {
                          label: "Liquidity",
                          ...e("/liquidity"),
                          Icon: l.DatabaseIcon,
                        },
                        {
                          label: "Telegram",
                          badge: "soon",
                          Icon: l.TelegramIcon,
                        },
                        {
                          label: "Activity",
                          badge: "soon",
                          Icon: l.AITextIcon,
                        },
                        {
                          label: "Analytics",
                          badge: "soon",
                          Icon: l.TrendingIcon,
                        },
                      ].filter(s),
                    },
                  ]
                : [
                    {
                      links: [
                        { label: "Coin Setup", ...e("/"), Icon: l.CryptoIcon },
                        {
                          label: "Socials",
                          ...e("/socials"),
                          Icon: (e) => {
                            let { className: n } = e;
                            return (0, i.jsx)(l.WebsiteIcon, {
                              className: (0, c.cn)("p-[3px]", n),
                            });
                          },
                        },
                        {
                          label: "Distribution",
                          ...e("/distribution"),
                          Icon: l.TransferIcon,
                        },
                        {
                          label: "Anti-Bot",
                          ...e("/anti-bot"),
                          Icon: l.ShieldIcon,
                        },
                        { label: "Taxes", ...e("/taxes"), Icon: l.PercentIcon },
                        d && {
                          label: "Fair Launch",
                          ...e("/fair-launch"),
                          Icon: l.PoolPaddedIcon,
                        },
                      ].filter(s),
                    },
                  ];
            }, [a, d, r, n, null == t ? void 0 : t.coin.driPoolEnabled]),
            footer: (0, N.useMemo)(
              () => (r ? (0, i.jsx)(T, {}) : (0, i.jsx)(m, {})),
              [r]
            ),
          };
        };
    },
    42482: function (e, n, t) {
      t.d(n, {
        G: function () {
          return o;
        },
        m: function () {
          return l;
        },
      });
      var i = t(23987),
        a = t(15039);
      let l = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1e3,
            n = arguments.length > 1 ? arguments[1] : void 0,
            [t, i] = (0, a.useState)(new Date());
          return (
            (0, a.useEffect)(() => {
              let t = setInterval(() => {
                let e = new Date();
                n && e > n && clearInterval(t), i(e);
              }, e);
              return () => clearInterval(t);
            }),
            t
          );
        },
        o = (e) => {
          let [n, t] = (0, a.useState)((0, i.R)(new Date(), e));
          return (
            (0, a.useEffect)(() => {
              let a;
              if (!n && !(0, i.R)(new Date(), e)) return;
              let l = () => {
                let n =
                  (null == e ? void 0 : e.getTime()) - new Date().getTime();
                if (!(0, i.R)(new Date(), e)) {
                  t(!1);
                  return;
                }
                t(!0), (a = setTimeout(l, Math.min(n, 1728e6)));
              };
              return l(), () => clearTimeout(a);
            }, [null == e ? void 0 : e.getTime()]),
            n
          );
        };
    },
    36013: function (e, n, t) {
      t.d(n, {
        HI: function () {
          return b;
        },
        O0: function () {
          return f;
        },
        V3: function () {
          return p;
        },
        ZD: function () {
          return v;
        },
        kh: function () {
          return h;
        },
        s4: function () {
          return m;
        },
      });
      var i = t(48213),
        a = t(57214),
        l = t(13027),
        o = t(33731),
        c = t(5781),
        r = t(12618),
        s = t(23123),
        d = t(18507),
        u = t(67934);
      let h = {
          [i.R.id]: "https://etherscan.io",
          [a.F.id]: "https://sepolia.etherscan.io",
          [l.y.id]: "https://arbiscan.io",
          [o.Z.id]: "https://sepolia.arbiscan.io",
          [c.A.id]: "https://blastscan.io",
          [r.d.id]: "https://sepolia.blastscan.io",
          [s.u.id]: "https://basescan.org",
          [d.L.id]: "https://sepolia.basescan.org",
          [u.c.id]: "https://eth95.dev",
        },
        f = {
          [i.R.id]: "Etherscan",
          [a.F.id]: "Etherscan Sepolia",
          [c.A.id]: "Blastscan",
          [r.d.id]: "Blastscan Sepolia",
          [s.u.id]: "Basescan",
          [d.L.id]: "Basescan Sepolia",
          [l.y.id]: "Arbitrum",
          [o.Z.id]: "Arbitrum Sepolia",
          [u.c.id]: "Eth95",
        },
        p = {
          [i.R.id]: "eth",
          [a.F.id]: "",
          [u.c.id]: "",
          [l.y.id]: "arbitrum",
          [o.Z.id]: "",
          [c.A.id]: "blastmainnet",
          [r.d.id]: "blast",
          [s.u.id]: "base",
          [d.L.id]: "",
        },
        m = {
          [i.R.id]: "ethereum",
          [a.F.id]: "",
          [l.y.id]: "arbitrum",
          [o.Z.id]: "",
          [c.A.id]: "blast",
          [r.d.id]: "",
          [s.u.id]: "base",
          [d.L.id]: "",
          [u.c.id]: "",
        },
        v = {
          [i.R.id]: "eth",
          [a.F.id]: "sepolia-testnet",
          [l.y.id]: "arbitrum",
          [c.A.id]: "blast",
          [r.d.id]: "",
          [s.u.id]: "base",
          [d.L.id]: "base",
          [u.c.id]: "",
        };
      function b(e, n, t) {
        return null === e
          ? void 0
          : m[e] && n
          ? "https://dexscreener.com/"
              .concat(m[e], "/")
              .concat(n, "?embed=1&theme=dark&trades=0&info=0")
          : p[e] && t
          ? "https://www.defined.fi/"
              .concat(p[e], "/")
              .concat(
                t,
                "?embedded=1&hideTxTable=1&hideSidebar=1&embedColorMode=HEX_SCREAMER"
              )
          : null;
      }
    },
    74734: function (e, n, t) {
      t.d(n, {
        g: function () {
          return i;
        },
      });
      let i = function () {
        let { delay: e = 0, duration: n = 0.06 } =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return {
          transition: { duration: n, type: "tween", delay: e },
          animate: { opacity: 1, scale: 1 },
          exit: { scale: 0.9, opacity: 0 },
          initial: { opacity: 0, scale: 0.9 },
        };
      };
    },
  },
]);
