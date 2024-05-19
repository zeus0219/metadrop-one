"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1763, 7263],
  {
    43568: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return o;
        },
        yA: function () {
          return a;
        },
      });
      var i = t(2067),
        l = t(96560);
      let a = (e) => {
        let { className: n } = e;
        return (0, i.jsx)("svg", {
          viewBox: "0 0 79 33",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: (0, l.cn)("h-full", n),
          children: (0, i.jsx)("path", {
            d: "M76.8328 0.807308C77.708 0.260294 78.8433 0.889519 78.8433 1.92162V14.2464C78.8433 15.6056 78.1431 16.869 76.9904 17.5894L53.8448 32.0554C52.9696 32.6024 51.8343 31.9732 51.8343 30.9411V22.0297C51.8343 19.9655 49.5638 18.7071 47.8133 19.8011L27.9277 32.2296C27.0525 32.7766 25.9172 32.1474 25.9172 31.1153V22.2038C25.9172 20.1396 23.6467 18.8811 21.8963 19.9751L2.01068 32.4036C1.13547 32.9506 0.000190735 32.3214 0.000190735 31.2893V18.9645C0.000190735 17.6053 0.700394 16.342 1.853 15.6216L24.9986 1.15556C25.8739 0.608547 27.0091 1.23777 27.0091 2.26987V11.1814C27.0091 13.2456 29.2797 14.504 31.0301 13.41L50.9157 0.981509C51.7909 0.434496 52.9262 1.06372 52.9262 2.09582V11.0072C52.9262 13.0714 55.1968 14.3298 56.9472 13.2358L76.8328 0.807308Z",
            fill: "currentColor",
          }),
        });
      };
      function r(e) {
        let { responsive: n, className: t } = e;
        return (0, i.jsx)("div", {
          className: (0, l.cn)(
            "font-65 font-wide uppercase leading-none tracking-wider",
            "h-full pt-[4px]",
            { "hidden md:block": n },
            t
          ),
          children: "metadrop",
        });
      }
      function o(e) {
        let {
          include: n = "all",
          tagline: t,
          className: o,
          responsive: s,
          innerClassName: c,
        } = e;
        return t
          ? (0, i.jsxs)("div", {
              className: (0, l.cn)(
                "flex items-center justify-start gap-3 text-gray-95",
                o
              ),
              children: [
                (0, i.jsx)(a, { className: "h-6" }),
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
              className: (0, l.cn)("flex items-center gap-5", o),
              children: [
                ("all" === n || "logoImage" === n) &&
                  (0, i.jsx)(a, { className: c }),
                ("all" === n || "logoWord" === n) &&
                  (0, i.jsx)(r, { responsive: s, className: c }),
              ],
            });
      }
    },
    40207: function (e, n, t) {
      t.d(n, {
        u: function () {
          return s;
        },
      });
      var i = t(2067),
        l = t(10025),
        a = t(67552),
        r = t(25704),
        o = t(48028);
      let s = (e) => {
        let {
            title: n,
            description: t,
            switchProps: s,
            children: c,
            invertSwitch: d,
            alwaysShowDescription: u,
          } = e,
          { values: h } = (0, o.u6)(),
          p = (0, a.B4)();
        return (0, i.jsxs)("div", {
          className: "px-1 pb-2 pt-2",
          children: [
            (0, i.jsxs)("div", {
              className: "flex items-center justify-between pl-2 pr-1",
              children: [
                (0, i.jsx)("div", {
                  className: "flex items-center gap-2 text-gray-95",
                  children: n,
                }),
                s &&
                  (0, i.jsx)(l.Z, {
                    checkedLabel: "On",
                    uncheckedLabel: "Off",
                    ...s,
                    disabled: s.disabled || p,
                  }),
              ],
            }),
            (0, i.jsx)(r.fC, {
              open: !!(
                t &&
                (u || ((null == s ? void 0 : s.name) && h[s.name]))
              ),
              children: (0, i.jsx)(r.VY, {
                className: "CollapsibleContent pl-7 pr-6 text-sm text-gray-50",
                children: (0, i.jsx)("div", {
                  className: "mb-2 mt-4",
                  children: t,
                }),
              }),
            }),
            c &&
              (0, i.jsx)(r.fC, {
                open: !!(!s || (d ? !h[s.name] : h[s.name])),
                children: (0, i.jsx)(r.VY, {
                  className: "CollapsibleContent gap-2 px-3 pb-2",
                  children: (0, i.jsx)("div", {
                    className: "flex flex-col gap-2",
                    children: c,
                  }),
                }),
              }),
          ],
        });
      };
    },
    60107: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = t(69436),
        l = t(11664);
      function a(e, n) {
        return (0, l.ZP)(
          e ? "/".concat(n ? "public" : "v1", "/coins/").concat(e) : null,
          (e) => (0, i.Z)(e, { redirectToLogin: !0 })
        );
      }
    },
    80054: function (e, n, t) {
      var i = t(2067),
        l = t(69436),
        a = t(60107),
        r = t(44544),
        o = t(74354),
        s = t(3476),
        c = t(15039),
        d = t(83297),
        u = t(36221);
      n.Z = function (e) {
        var n;
        let { coin: t, title: h, children: p } = e,
          m = (null == t ? void 0 : t.id) || "",
          { data: f } = (0, r.Z)(),
          { mutate: x } = (0, a.Z)(m),
          v = (0, c.useMemo)(() => {
            var e;
            return (0, s.dZ)({
              deployerAddress:
                null == f
                  ? void 0
                  : null === (e = f.user) || void 0 === e
                  ? void 0
                  : e.ethAddress,
            });
          }, [
            null == f
              ? void 0
              : null === (n = f.user) || void 0 === n
              ? void 0
              : n.ethAddress,
          ]),
          b = (0, c.useCallback)(
            async (e) => {
              let {
                  projectBuyTaxPercent: n,
                  projectSellTaxPercent: t,
                  maxTokensPerWalletPercent: i,
                  maxTokensPerTxnPercent: a,
                  ...r
                } = e,
                o = { ...r };
              void 0 !== n &&
                (o.projectBuyTaxBasisPoints =
                  null === n ? null : Math.round(100 * n)),
                void 0 !== t &&
                  (o.projectSellTaxBasisPoints =
                    null === t ? null : Math.round(100 * t)),
                void 0 !== i &&
                  (o.maxTokensPerWalletBasisPoints =
                    null === i ? null : Math.round(100 * i)),
                void 0 !== a &&
                  (o.maxTokensPerTxnBasisPoints =
                    null === a ? null : Math.round(100 * a)),
                !1 === e.buyTaxEnabled && (o.projectBuyTaxBasisPoints = null),
                !1 === e.sellTaxEnabled && (o.projectSellTaxBasisPoints = null);
              let { coin: s, notice: c } = await (0, l.Z)(
                "/v1/coins/".concat(m),
                { method: "PATCH", body: (0, u.qC)(o) }
              );
              c && d.A.info(c), x({ coin: s });
            },
            [m, x]
          );
        return (0, i.jsx)(o.uC, {
          schema: v,
          completeResource: t,
          resourceReady: !!t,
          onSubmit: b,
          children: () => (0, i.jsx)(i.Fragment, { children: p }),
        });
      };
    },
    13633: function (e, n, t) {
      t.d(n, {
        _: function () {
          return c;
        },
      });
      var i = t(2067),
        l = t(2384),
        a = t(15955),
        r = t(96560),
        o = t(7263),
        s = t(60171);
      function c(e) {
        var n;
        let { current: t } = e,
          c = (0, s.useParams)().coinId,
          { links: d } = (0, o.G)(),
          u = (null === (n = d[0]) || void 0 === n ? void 0 : n.links) || [];
        if (0 === u.length) return null;
        let h = u.findIndex((e) => {
            var n, i;
            return null === (i = e.as) || void 0 === i
              ? void 0
              : null === (n = i.includes) || void 0 === n
              ? void 0
              : n.call(i, t);
          }),
          p = u[h - 1],
          m = u[h + 1] || {
            href: "/app/coins/[coinId]/review-and-launch?coinId=".concat(c),
            as: "/app/coins/".concat(c, "/review-and-launch"),
            label: "Review & Launch",
          };
        return (
          null == p || delete p.Icon,
          null == m || delete m.Icon,
          (0, i.jsxs)("div", {
            className: (0, r.cn)(
              "col-span-2 col-start-2 mt-4 flex justify-between px-3",
              !p && "justify-end"
            ),
            children: [
              p &&
                (0, i.jsx)(l.default, {
                  type: "secondary",
                  ...p,
                  leftIcon: (0, i.jsx)(a.ArrowLeftIcon, {}),
                  htmlType: "button",
                  children: p.label,
                }),
              m &&
                (0, i.jsx)(l.default, {
                  type: "secondary",
                  ...m,
                  rightIcon: (0, i.jsx)(a.ArrowRightIcon, {}),
                  htmlType: "button",
                  children: m.label,
                }),
            ],
          })
        );
      }
    },
    62678: function (e, n, t) {
      t.d(n, {
        S: function () {
          return o;
        },
      });
      var i = t(60107),
        l = t(3476),
        a = t(60171),
        r = t(15039);
      let o = () => {
        let e = (0, a.useParams)().coinId,
          { data: n } = (0, i.Z)(e),
          [t, o] = (0, r.useState)({}),
          [s, c] = (0, r.useState)({}),
          [d, u] = (0, r.useState)(0);
        return (
          (0, r.useEffect)(() => {
            let t = async () => {
              let t;
              let i = (0, l.dZ)({ id: e }),
                a = i.cast(null == n ? void 0 : n.coin);
              try {
                await i.validate(a, {
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
              let { fields: r } = i.describe({
                  context: { isFinal: !0 },
                  value: a,
                }),
                s =
                  Object.entries(r).filter((e) => {
                    let [n, { optional: t }] = e;
                    return t;
                  }).length - 0;
              c(t), o(r), u(s);
            };
            (null == n ? void 0 : n.coin) && t();
          }, [null == n ? void 0 : n.coin, e]),
          {
            requiredCount: d,
            errorsCount: s ? Object.keys(s).length : 0,
            errors: s,
            fields: t,
          }
        );
      };
    },
    7263: function (e, n, t) {
      t.d(n, {
        G: function () {
          return B;
        },
      });
      var i = t(2067),
        l = t(2384),
        a = t(15955),
        r = t(60107),
        o = t(96560),
        s = t(69436);
      function c(e) {
        return !!e;
      }
      var d = t(43568),
        u = t(71335),
        h = t.n(u),
        p = t(60171),
        m = t(62678);
      function f() {
        (0, p.useRouter)();
        let e = (0, p.useParams)().coinId,
          { requiredCount: n, errorsCount: t } = (0, m.S)();
        return (0, i.jsxs)(h(), {
          className: "group relative text-left",
          href: "/app/coins/[coinId]/review-and-launch?coinId=".concat(e),
          as: "/app/coins/".concat(e, "/review-and-launch"),
          prefetch: !0,
          children: [
            (0, i.jsxs)("div", {
              className: (0, o.cn)(
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
                  className: (0, o.cn)("mb-1 text-sm", "text-gray-60"),
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
                (0, i.jsx)(l.default, {
                  className: "-ml-1 mt-2 w-[calc(100%+0.5rem)]",
                  label: "Review & Launch",
                  Component: "div",
                  htmlType: "button",
                  children: "Review & Launch",
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: (0, o.cn)(
                "mx-4 h-2 rounded-b-md opacity-[0.5]",
                "inset-4 bg-gray-20",
                "transition-all group-hover:h-3 group-hover:bg-gray-30 "
              ),
            }),
            (0, i.jsx)("div", {
              className: (0, o.cn)(
                "mx-8 h-2 rounded-b-md opacity-[0.25]",
                "inset-4 bg-gray-20",
                "transition-all group-hover:h-3 group-hover:bg-gray-30"
              ),
            }),
          ],
        });
      }
      var x = t(83297),
        v = t(42482),
        b = t(36013),
        g = t(74734),
        y = t(44544),
        j = t(59757),
        I = t(9038),
        N = t(637),
        w = t(28967),
        P = t(15039);
      let T = (e) => {
          let { coin: n } = e,
            { coinId: t } = (0, p.useParams)(),
            { mutate: a } = (0, r.Z)(t),
            [o, c] = (0, P.useState)(!1),
            d = (null == n ? void 0 : n.contractVerifiedAt) !== null,
            u =
              (0, v.G)(
                (null == n ? void 0 : n.verificationRequestedAt) &&
                  (0, I.m)(null == n ? void 0 : n.verificationRequestedAt, 10)
              ) && !!(null == n ? void 0 : n.verificationRequestedAt),
            h = async () => {
              c(!0);
              try {
                await (0, s.Z)("/v1/coins/".concat(t, "/verify"), {
                  method: "POST",
                }),
                  x.A.success(
                    "Verifying contract. This can take up to 5 minutes."
                  ),
                  setTimeout(() => a, 5e3);
              } catch (e) {
                x.A.error(e), c(!1);
              }
            };
          return (0, i.jsx)(N.M, {
            initial: !1,
            children:
              !d &&
              (0, i.jsx)(w.E.div, {
                ...(0, g.g)(),
                className: "w-full",
                children: (0, i.jsx)(l.default, {
                  onClick: h,
                  disabled: o || u,
                  fullWidth: !0,
                  children: d ? "Verified" : "Verify Contract",
                }),
              }),
          });
        },
        S = () => {
          let { data: e } = (0, y.Z)(),
            { coinId: n } = (0, p.useParams)(),
            t = null == e ? void 0 : e.user,
            a = (0, p.useRouter)();
          return (null == t ? void 0 : t.isMetadropTeam)
            ? (0, i.jsx)(l.default, {
                onClick: async () => {
                  let { coin: e } = await (0, s.Z)(
                    "/internal/coins/".concat(n, "/duplicate"),
                    { method: "POST" }
                  );
                  a.push("/app/coins/".concat(e.id));
                },
                children: "Duplicate Coin",
              })
            : null;
        },
        C = () => {
          var e, n, t;
          let { coinId: a } = (0, p.useParams)(),
            { data: o } = (0, r.Z)(a);
          return (0, i.jsxs)("div", {
            className: "flex flex-col gap-2",
            children: [
              (0, i.jsx)(S, {}),
              (0, i.jsx)(T, { coin: null == o ? void 0 : o.coin }),
              (0, i.jsx)("hr", { className: "my-1 border-gray-20" }),
              (0, i.jsx)(l.default, {
                target: "_blank",
                as: "/coins/".concat(null == o ? void 0 : o.coin.slug),
                href: "/coins/[slug]?slug=".concat(
                  null == o ? void 0 : o.coin.slug
                ),
                children: "View profile",
              }),
              (0, i.jsxs)(l.default, {
                type: "secondary",
                target: "_blank",
                href: ""
                  .concat(
                    b.kh[
                      null == o
                        ? void 0
                        : null === (e = o.coin) || void 0 === e
                        ? void 0
                        : e.chainId
                    ],
                    "/address/"
                  )
                  .concat(
                    null == o
                      ? void 0
                      : null === (n = o.coin) || void 0 === n
                      ? void 0
                      : n.erc20Address
                  ),
                children: [
                  "View on ",
                  b.O0[
                    null == o
                      ? void 0
                      : null === (t = o.coin) || void 0 === t
                      ? void 0
                      : t.chainId
                  ],
                ],
              }),
            ],
          });
        },
        B = () => {
          var e;
          let n = (0, p.useParams)().coinId,
            { data: t, isLoading: l } = (0, r.Z)(n),
            s = !!(null == t
              ? void 0
              : null === (e = t.coin) || void 0 === e
              ? void 0
              : e.erc20Address),
            d = !j.Y;
          return {
            links: (0, P.useMemo)(() => {
              let e = (e) => ({
                href: "/app/coins/[coinId]".concat(e, "?coinId=").concat(n),
                as: "/app/coins/".concat(n).concat(e),
              });
              return l
                ? [{ label: "Loading Coin...", links: [] }]
                : s
                ? [
                    {
                      label: "Coin Dashboard",
                      links: [
                        {
                          label: "Dashboard",
                          ...e(""),
                          Icon: a.DashboardFastIcon,
                        },
                        {
                          label: "Coin Profile",
                          ...e("/profile"),
                          Icon: a.CryptoIcon,
                        },
                        {
                          label: "Socials",
                          ...e("/socials"),
                          Icon: (e) => {
                            let { className: n } = e;
                            return (0, i.jsx)(a.WebsiteIcon, {
                              className: (0, o.cn)("p-[3px]", n),
                            });
                          },
                        },
                        {
                          label: "Anti-Bot",
                          ...e("/anti-bot"),
                          Icon: a.ShieldIcon,
                        },
                        { label: "Taxes", ...e("/taxes"), Icon: a.PercentIcon },
                        {
                          label: "Liquidity",
                          ...e("/liquidity"),
                          Icon: a.DatabaseIcon,
                        },
                        {
                          label: "Telegram",
                          badge: "soon",
                          Icon: a.TelegramIcon,
                        },
                        {
                          label: "Activity",
                          badge: "soon",
                          Icon: a.AITextIcon,
                        },
                        {
                          label: "Analytics",
                          badge: "soon",
                          Icon: a.TrendingIcon,
                        },
                      ].filter(c),
                    },
                  ]
                : [
                    {
                      links: [
                        { label: "Coin Setup", ...e("/"), Icon: a.CryptoIcon },
                        {
                          label: "Socials",
                          ...e("/socials"),
                          Icon: (e) => {
                            let { className: n } = e;
                            return (0, i.jsx)(a.WebsiteIcon, {
                              className: (0, o.cn)("p-[3px]", n),
                            });
                          },
                        },
                        {
                          label: "Distribution",
                          ...e("/distribution"),
                          Icon: a.TransferIcon,
                        },
                        {
                          label: "Anti-Bot",
                          ...e("/anti-bot"),
                          Icon: a.ShieldIcon,
                        },
                        { label: "Taxes", ...e("/taxes"), Icon: a.PercentIcon },
                        d && {
                          label: "Fair Launch",
                          ...e("/fair-launch"),
                          Icon: a.PoolPaddedIcon,
                        },
                      ].filter(c),
                    },
                  ];
            }, [l, d, s, n, null == t ? void 0 : t.coin.driPoolEnabled]),
            footer: (0, P.useMemo)(
              () => (s ? (0, i.jsx)(C, {}) : (0, i.jsx)(f, {})),
              [s]
            ),
          };
        };
    },
    42747: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = t(2067),
        l = t(96560),
        a = t(15039),
        r = t(37397),
        o = t(637),
        s = t(28967);
      let c = {
          initial: { maxHeight: 0 },
          show: { maxHeight: 20 },
          hide: { maxHeight: 0, transition: { delay: 0.1, duration: 0.1 } },
        },
        d = (e) => ({
          initial: { paddingBottom: 0, height: 0 },
          show: {
            height: e,
            transition: { delay: 0.05, duration: 0.1 },
            transitionEnd: { height: "auto" },
          },
          hide: { height: 0, transition: { delay: 0.05, duration: 0.1 } },
        }),
        u = {
          initial: { opacity: 0, scale: 0.95 },
          show: {
            opacity: 1,
            scale: 1,
            transition: { delay: 0.15, duration: 0.05 },
          },
          hide: { opacity: 0, scale: 0.95 },
        };
      var h = (e) => {
        let {
            className: n = "",
            children: t,
            dir: h = "col",
            bg: p = "bg-gray-95",
            style: m,
          } = e,
          f = (0, a.useRef)([]),
          [x, v] = (0, a.useState)([]),
          b = (0, a.useCallback)(() => {
            let e = f.current.map((e) => (null == e ? void 0 : e.clientHeight));
            v((n) => (n.length !== f.current.length ? e : n));
          }, [t, v]);
        return (
          (0, a.useLayoutEffect)(() => {
            b();
          }, [b]),
          (0, i.jsx)("div", {
            className: (0, l.cn)(n, "dripping-boxes"),
            style: m,
            children: (0, i.jsx)("div", {
              className: (0, l.cn)("row" === h && "flex"),
              children: (0, i.jsx)(o.M, {
                initial: !1,
                children: a.Children.map(t, (e, n) => {
                  if (!e) return null;
                  let t = (0, l.cn)(e.props.className)
                    .split(" ")
                    .filter((e) => e.match(/bg|rounded|drips/))
                    .sort((e) => e.indexOf("drips"))
                    .map((e) => e.replace("drips-bg-", "bg-"))
                    .map((e) => e.replace("drips-rounded-", "rounded-"));
                  return (0, i.jsxs)(i.Fragment, {
                    children: [
                      0 !== n &&
                        (0, i.jsx)(s.E.div, {
                          className:
                            "joint flex justify-center overflow-hidden",
                          variants: c,
                          initial: "hide",
                          animate: "show",
                          exit: "hide",
                          children: (0, i.jsx)(r.ZP, { bg: p, dir: h }),
                        }),
                      (0, i.jsx)(s.E.div, {
                        className: (0, l.cn)(
                          " overflow-hidden rounded-[var(--drip-rounded)]",
                          p,
                          t,
                          e.props.wrapperClassName
                        ),
                        variants: d(x[n]),
                        initial: "hide",
                        animate: "show",
                        exit: "hide",
                        children: (0, i.jsx)(s.E.div, {
                          ref: (e) => (f.current[n] = e),
                          variants: u,
                          initial: "hide",
                          animate: "show",
                          exit: "hide",
                          children: a.cloneElement(e, {
                            className: (0, l.cn)(
                              "p-4 rounded-[var(--drip-rounded)] mx-auto",
                              p,
                              e.props.className
                            ),
                          }),
                        }),
                      }),
                    ],
                  });
                }),
              }),
            }),
          })
        );
      };
    },
    33862: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(2067),
        l = t(15039),
        a = (e, n, t) => {
          if (!e) throw Error("useLocalStorage key may not be falsy");
          let i = t ? (t.raw ? (e) => e : t.deserializer) : JSON.parse,
            a = (0, l.useRef)((e) => {
              try {
                let l = t ? (t.raw ? String : t.serializer) : JSON.stringify,
                  a = localStorage.getItem(e);
                if (null !== a) return i(a);
                return n && localStorage.setItem(e, l(n)), n;
              } catch (e) {
                return n;
              }
            }),
            [r, o] = (0, l.useState)(() => a.current(e));
          (0, l.useEffect)(() => o(a.current(e)), [e]);
          let s = (0, l.useCallback)(
            (n) => {
              try {
                let l;
                let a = "function" == typeof n ? n(r) : n;
                if (void 0 === a) return;
                (l = t
                  ? t.raw
                    ? "string" == typeof a
                      ? a
                      : JSON.stringify(a)
                    : t.serializer
                    ? t.serializer(a)
                    : JSON.stringify(a)
                  : JSON.stringify(a)),
                  localStorage.setItem(e, l),
                  o(i(l));
              } catch (e) {}
            },
            [e, o, r]
          );
          return [
            r,
            s,
            (0, l.useCallback)(() => {
              try {
                localStorage.removeItem(e), o(void 0);
              } catch (e) {}
            }, [e, o]),
          ];
        },
        r = t(96560),
        o = t(637),
        s = t(28967),
        c = t(15955);
      function d(e) {
        let {
            color: n = "lavender",
            children: t,
            id: l,
            dismissable: d = !1,
            className: u = "",
          } = e,
          [h, p] = a("drip-notice-".concat(l), !1);
        return (0, i.jsx)(o.M, {
          children:
            !h &&
            (0, i.jsxs)(s.E.div, {
              className: (0, r.cn)(
                " flex items-center justify-between rounded-md border border-lavender px-2 py-1 ",
                {
                  " bg-lavender-background  text-lavender": "lavender" === n,
                  "bg-yellow text-yellow ": "yellow" === n,
                },
                u
              ),
              initial: { opacity: 1, maxHeight: 140 },
              animate: { opacity: 1, maxHeight: 140 },
              exit: { opacity: 0, maxHeight: 0 },
              children: [
                (0, i.jsxs)("div", {
                  className: "flex items-start gap-1",
                  children: [
                    (0, i.jsx)(c.StarIcon, {
                      className: "size-icon-sm shrink-0 translate-y-[3px]",
                    }),
                    (0, i.jsx)("div", {
                      className: "pb-[0.1rem] text-sm",
                      children: t,
                    }),
                  ],
                }),
                d &&
                  (0, i.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      p(!0);
                    },
                    children: (0, i.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "14",
                      height: "14",
                      fill: "none",
                      viewBox: "0 0 14 14",
                      children: (0, i.jsx)("path", {
                        fill: "#fff",
                        fillOpacity: "1",
                        fillRule: "evenodd",
                        d: "M.333 7a6.667 6.667 0 1113.334 0A6.667 6.667 0 01.333 7zm5.139-2.471a.667.667 0 10-.943.942L6.057 7 4.53 8.529a.667.667 0 10.943.942L7 7.943 8.53 9.47a.667.667 0 10.943-.942L7.943 7l1.529-1.529a.667.667 0 10-.943-.942L7 6.057 5.472 4.53z",
                        clipRule: "evenodd",
                      }),
                    }),
                  }),
              ],
            }),
        });
      }
    },
    42482: function (e, n, t) {
      t.d(n, {
        G: function () {
          return r;
        },
        m: function () {
          return a;
        },
      });
      var i = t(23987),
        l = t(15039);
      let a = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1e3,
            n = arguments.length > 1 ? arguments[1] : void 0,
            [t, i] = (0, l.useState)(new Date());
          return (
            (0, l.useEffect)(() => {
              let t = setInterval(() => {
                let e = new Date();
                n && e > n && clearInterval(t), i(e);
              }, e);
              return () => clearInterval(t);
            }),
            t
          );
        },
        r = (e) => {
          let [n, t] = (0, l.useState)((0, i.R)(new Date(), e));
          return (
            (0, l.useEffect)(() => {
              let l;
              if (!n && !(0, i.R)(new Date(), e)) return;
              let a = () => {
                let n =
                  (null == e ? void 0 : e.getTime()) - new Date().getTime();
                if (!(0, i.R)(new Date(), e)) {
                  t(!1);
                  return;
                }
                t(!0), (l = setTimeout(a, Math.min(n, 1728e6)));
              };
              return a(), () => clearTimeout(l);
            }, [null == e ? void 0 : e.getTime()]),
            n
          );
        };
    },
    36013: function (e, n, t) {
      t.d(n, {
        HI: function () {
          return v;
        },
        O0: function () {
          return p;
        },
        V3: function () {
          return m;
        },
        ZD: function () {
          return x;
        },
        kh: function () {
          return h;
        },
        s4: function () {
          return f;
        },
      });
      var i = t(48213),
        l = t(57214),
        a = t(13027),
        r = t(33731),
        o = t(5781),
        s = t(12618),
        c = t(23123),
        d = t(18507),
        u = t(67934);
      let h = {
          [i.R.id]: "https://etherscan.io",
          [l.F.id]: "https://sepolia.etherscan.io",
          [a.y.id]: "https://arbiscan.io",
          [r.Z.id]: "https://sepolia.arbiscan.io",
          [o.A.id]: "https://blastscan.io",
          [s.d.id]: "https://sepolia.blastscan.io",
          [c.u.id]: "https://basescan.org",
          [d.L.id]: "https://sepolia.basescan.org",
          [u.c.id]: "https://eth95.dev",
        },
        p = {
          [i.R.id]: "Etherscan",
          [l.F.id]: "Etherscan Sepolia",
          [o.A.id]: "Blastscan",
          [s.d.id]: "Blastscan Sepolia",
          [c.u.id]: "Basescan",
          [d.L.id]: "Basescan Sepolia",
          [a.y.id]: "Arbitrum",
          [r.Z.id]: "Arbitrum Sepolia",
          [u.c.id]: "Eth95",
        },
        m = {
          [i.R.id]: "eth",
          [l.F.id]: "",
          [u.c.id]: "",
          [a.y.id]: "arbitrum",
          [r.Z.id]: "",
          [o.A.id]: "blastmainnet",
          [s.d.id]: "blast",
          [c.u.id]: "base",
          [d.L.id]: "",
        },
        f = {
          [i.R.id]: "ethereum",
          [l.F.id]: "",
          [a.y.id]: "arbitrum",
          [r.Z.id]: "",
          [o.A.id]: "blast",
          [s.d.id]: "",
          [c.u.id]: "base",
          [d.L.id]: "",
          [u.c.id]: "",
        },
        x = {
          [i.R.id]: "eth",
          [l.F.id]: "sepolia-testnet",
          [a.y.id]: "arbitrum",
          [o.A.id]: "blast",
          [s.d.id]: "",
          [c.u.id]: "base",
          [d.L.id]: "base",
          [u.c.id]: "",
        };
      function v(e, n, t) {
        return null === e
          ? void 0
          : f[e] && n
          ? "https://dexscreener.com/"
              .concat(f[e], "/")
              .concat(n, "?embed=1&theme=dark&trades=0&info=0")
          : m[e] && t
          ? "https://www.defined.fi/"
              .concat(m[e], "/")
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
    61722: function (e, n, t) {
      t.d(n, {
        s3: function () {
          return i;
        },
      }),
        t(73671),
        t(32013),
        t(9755),
        t(67934),
        t(48213),
        t(57214),
        t(12618),
        t(5781),
        t(18507),
        t(23123),
        t(33731),
        t(13027),
        t(26182);
      let i = (e) => null;
    },
    83165: function (e, n, t) {
      t.d(n, {
        Er: function () {
          return i.Er;
        },
        GG: function () {
          return i.GG;
        },
        Ns: function () {
          return i.Ns;
        },
        aK: function () {
          return i.aK;
        },
        gr: function () {
          return i.gr;
        },
        py: function () {
          return i.py;
        },
      });
      var i = t(20886);
      t(56837), t(36565), t(61722);
    },
    41696: function (e, n, t) {
      t.d(n, {
        am: function () {
          return a;
        },
        zn: function () {
          return r;
        },
      });
      var i = t(83165),
        l = t(60808);
      let a = (e) => {
          let n = i.Ns.taxPeriodInDays,
            t = i.Ns.minBuyAbsoluteBasisPoints,
            a = i.Ns.minSellAbsoluteBasisPoints,
            r = i.Ns.buyProportionBasisPoints,
            o = i.Ns.sellProportionBasisPoints,
            s = i.py[e.chainId],
            c = null == s ? void 0 : s.metadropTreasury,
            d = 0n;
          if (e.buyTaxEnabled) {
            let n = (Number(r) / 1e4) * Number(e.projectBuyTaxBasisPoints);
            d = BigInt(Math.floor(Math.max(Number(t), n)));
          }
          let u = 0n;
          if (e.sellTaxEnabled) {
            let n = (Number(o) / 1e4) * Number(e.projectSellTaxBasisPoints);
            u = BigInt(Math.floor(Math.max(Number(a), n)));
          }
          return {
            projectBuyTaxPercent: (0, l._d)(e.projectBuyTaxBasisPoints),
            projectSellTaxPercent: (0, l._d)(e.projectSellTaxBasisPoints),
            metadropTaxRecipient: c,
            metadropTaxPeriodInDays: n,
            metadropBuyTaxBasisPoints: d,
            metadropSellTaxBasisPoints: u,
            metadropMinBuyTaxBasisPoints: t,
            metadropMinSellTaxBasisPoints: a,
            metadropBuyTaxProportionBasisPoints: r,
            metadropSellTaxProportionBasisPoints: o,
            metadropBuyTaxPercent: (0, l._d)(Number(d)),
            metadropSellTaxPercent: (0, l._d)(Number(u)),
            metadropMinBuyTaxPercent: (0, l._d)(Number(t)),
            metadropMinSellTaxPercent: (0, l._d)(Number(a)),
            metadropBuyTaxProportionPercent: (0, l._d)(Number(r)),
            metadropSellTaxProportionPercent: (0, l._d)(Number(o)),
          };
        },
        r = (e) => {
          var n, t, l;
          let a =
              void 0 !== e.lpFundingWei && null !== e.lpFundingWei
                ? String(2n * BigInt(e.lpFundingWei))
                : null,
            r =
              null !== (n = e.poolDurationInMinutes) && void 0 !== n
                ? n
                : i.Er.durationInMinutes;
          if (0 === r) throw Error("Pool duration cannot be 0");
          return {
            poolVestingInSeconds:
              null !== (t = e.poolVestingInSeconds) && void 0 !== t
                ? t
                : i.Er.poolVestingInSeconds,
            poolMaxInitialBuyWei: e.poolMaxInitialBuyWei
              ? e.poolMaxInitialBuyWei
              : a,
            poolPerTxnMinWei:
              null !== (l = e.poolPerTxnMinWei) && void 0 !== l
                ? l
                : i.Er.poolPerTxnMinWei,
            poolDurationInMinutes: r,
          };
        };
    },
    60808: function (e, n, t) {
      t.d(n, {
        Ob: function () {
          return l;
        },
        _d: function () {
          return i;
        },
        pC: function () {
          return a;
        },
      });
      let i = (e) => (null === e ? null : e / 100),
        l = (e, n) =>
          null === n || null === e || void 0 === n || void 0 === e
            ? null
            : (e * BigInt(n) * BigInt(1e9)) / BigInt(1e4) / BigInt(1e9),
        a = (e, n) => (n ? (e * BigInt(1e4)) / n : BigInt(0));
    },
  },
]);
