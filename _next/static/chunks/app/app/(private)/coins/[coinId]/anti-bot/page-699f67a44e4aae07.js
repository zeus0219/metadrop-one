(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [180, 7263],
  {
    63775: function (e, n, t) {
      Promise.resolve().then(t.bind(t, 41408));
    },
    43568: function (e, n, t) {
      "use strict";
      t.d(n, {
        ZP: function () {
          return o;
        },
        yA: function () {
          return r;
        },
      });
      var i = t(2067),
        a = t(96560);
      let r = (e) => {
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
      function l(e) {
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
              className: (0, a.cn)(
                "flex items-center justify-start gap-3 text-gray-95",
                o
              ),
              children: [
                (0, i.jsx)(r, { className: "h-6" }),
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
              className: (0, a.cn)("flex items-center gap-5", o),
              children: [
                ("all" === n || "logoImage" === n) &&
                  (0, i.jsx)(r, { className: c }),
                ("all" === n || "logoWord" === n) &&
                  (0, i.jsx)(l, { responsive: s, className: c }),
              ],
            });
      }
    },
    40207: function (e, n, t) {
      "use strict";
      t.d(n, {
        u: function () {
          return s;
        },
      });
      var i = t(2067),
        a = t(10025),
        r = t(67552),
        l = t(25704),
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
          m = (0, r.B4)();
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
                  (0, i.jsx)(a.Z, {
                    checkedLabel: "On",
                    uncheckedLabel: "Off",
                    ...s,
                    disabled: s.disabled || m,
                  }),
              ],
            }),
            (0, i.jsx)(l.fC, {
              open: !!(
                t &&
                (u || ((null == s ? void 0 : s.name) && h[s.name]))
              ),
              children: (0, i.jsx)(l.VY, {
                className: "CollapsibleContent pl-7 pr-6 text-sm text-gray-50",
                children: (0, i.jsx)("div", {
                  className: "mb-2 mt-4",
                  children: t,
                }),
              }),
            }),
            c &&
              (0, i.jsx)(l.fC, {
                open: !!(!s || (d ? !h[s.name] : h[s.name])),
                children: (0, i.jsx)(l.VY, {
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
      "use strict";
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = t(69436),
        a = t(11664);
      function r(e, n) {
        return (0, a.ZP)(
          e ? "/".concat(n ? "public" : "v1", "/coins/").concat(e) : null,
          (e) => (0, i.Z)(e, { redirectToLogin: !0 })
        );
      }
    },
    53720: function (e, n, t) {
      "use strict";
      t.d(n, {
        b: function () {
          return o;
        },
      });
      var i = t(55482),
        a = t(25463),
        r = t(91610),
        l = t(76859);
      let o = function () {
        let {
          erc20Address: e,
          chainId: n,
          coinType: t,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, i.G)({
          contracts: (0, r.V)(
            [
              "owner",
              "projectBuyTaxBasisPoints",
              "metadropBuyTaxBasisPoints",
              "metadropSellTaxBasisPoints",
              "metadropTaxPeriodInDays",
              "projectSellTaxBasisPoints",
              "maxTokensPerTransaction",
              "maxTokensPerWallet",
              "totalSupply",
              "symbol",
              "name",
              "lpLockupInDays",
              { functionName: "fundedDate", parseAs: "date" },
              "lpSupply",
              "autoBurnBasisPoints",
              "burnLPTokens",
            ],
            { address: e, chainId: n, abi: a.gH }
          ),
          query: { enabled: !!(e && t === l.CoinType.METADROP) },
          watch: !0,
        });
      };
    },
    80054: function (e, n, t) {
      "use strict";
      var i = t(2067),
        a = t(69436),
        r = t(60107),
        l = t(44544),
        o = t(74354),
        s = t(3476),
        c = t(15039),
        d = t(83297),
        u = t(36221);
      n.Z = function (e) {
        var n;
        let { coin: t, title: h, children: m } = e,
          f = (null == t ? void 0 : t.id) || "",
          { data: p } = (0, l.Z)(),
          { mutate: x } = (0, r.Z)(f),
          b = (0, c.useMemo)(() => {
            var e;
            return (0, s.dZ)({
              deployerAddress:
                null == p
                  ? void 0
                  : null === (e = p.user) || void 0 === e
                  ? void 0
                  : e.ethAddress,
            });
          }, [
            null == p
              ? void 0
              : null === (n = p.user) || void 0 === n
              ? void 0
              : n.ethAddress,
          ]),
          v = (0, c.useCallback)(
            async (e) => {
              let {
                  projectBuyTaxPercent: n,
                  projectSellTaxPercent: t,
                  maxTokensPerWalletPercent: i,
                  maxTokensPerTxnPercent: r,
                  ...l
                } = e,
                o = { ...l };
              void 0 !== n &&
                (o.projectBuyTaxBasisPoints =
                  null === n ? null : Math.round(100 * n)),
                void 0 !== t &&
                  (o.projectSellTaxBasisPoints =
                    null === t ? null : Math.round(100 * t)),
                void 0 !== i &&
                  (o.maxTokensPerWalletBasisPoints =
                    null === i ? null : Math.round(100 * i)),
                void 0 !== r &&
                  (o.maxTokensPerTxnBasisPoints =
                    null === r ? null : Math.round(100 * r)),
                !1 === e.buyTaxEnabled && (o.projectBuyTaxBasisPoints = null),
                !1 === e.sellTaxEnabled && (o.projectSellTaxBasisPoints = null);
              let { coin: s, notice: c } = await (0, a.Z)(
                "/v1/coins/".concat(f),
                { method: "PATCH", body: (0, u.qC)(o) }
              );
              c && d.A.info(c), x({ coin: s });
            },
            [f, x]
          );
        return (0, i.jsx)(o.uC, {
          schema: b,
          completeResource: t,
          resourceReady: !!t,
          onSubmit: v,
          children: () => (0, i.jsx)(i.Fragment, { children: m }),
        });
      };
    },
    13633: function (e, n, t) {
      "use strict";
      t.d(n, {
        _: function () {
          return c;
        },
      });
      var i = t(2067),
        a = t(2384),
        r = t(15955),
        l = t(96560),
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
          m = u[h - 1],
          f = u[h + 1] || {
            href: "/app/coins/[coinId]/review-and-launch?coinId=".concat(c),
            as: "/app/coins/".concat(c, "/review-and-launch"),
            label: "Review & Launch",
          };
        return (
          null == m || delete m.Icon,
          null == f || delete f.Icon,
          (0, i.jsxs)("div", {
            className: (0, l.cn)(
              "col-span-2 col-start-2 mt-4 flex justify-between px-3",
              !m && "justify-end"
            ),
            children: [
              m &&
                (0, i.jsx)(a.default, {
                  type: "secondary",
                  ...m,
                  leftIcon: (0, i.jsx)(r.ArrowLeftIcon, {}),
                  htmlType: "button",
                  children: m.label,
                }),
              f &&
                (0, i.jsx)(a.default, {
                  type: "secondary",
                  ...f,
                  rightIcon: (0, i.jsx)(r.ArrowRightIcon, {}),
                  htmlType: "button",
                  children: f.label,
                }),
            ],
          })
        );
      }
    },
    62678: function (e, n, t) {
      "use strict";
      t.d(n, {
        S: function () {
          return o;
        },
      });
      var i = t(60107),
        a = t(3476),
        r = t(60171),
        l = t(15039);
      let o = () => {
        let e = (0, r.useParams)().coinId,
          { data: n } = (0, i.Z)(e),
          [t, o] = (0, l.useState)({}),
          [s, c] = (0, l.useState)({}),
          [d, u] = (0, l.useState)(0);
        return (
          (0, l.useEffect)(() => {
            let t = async () => {
              let t;
              let i = (0, a.dZ)({ id: e }),
                r = i.cast(null == n ? void 0 : n.coin);
              try {
                await i.validate(r, {
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
              let { fields: l } = i.describe({
                  context: { isFinal: !0 },
                  value: r,
                }),
                s =
                  Object.entries(l).filter((e) => {
                    let [n, { optional: t }] = e;
                    return t;
                  }).length - 0;
              c(t), o(l), u(s);
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
    41408: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return E;
          },
          taxSidebarProps: function () {
            return S;
          },
        });
      var i = t(2067),
        a = t(15955),
        r = t(60107),
        l = t(83297),
        o = t(30156),
        s = t(60171),
        c = t(15039),
        d = t(79953),
        u = t(45574),
        h = t(67552),
        m = t(69436),
        f = t(53720),
        p = t(25463),
        x = t(60808),
        b = t(3476),
        v = t(48028),
        y = t(91818),
        g = t(42747),
        w = t(33862),
        j = t(43413),
        I = t(91461),
        T = t(40207),
        P = (e) => {
          let { coin: n, postDeploy: t = !1 } = e,
            {
              values: r,
              isSubmitting: l,
              dirty: o,
              errors: s,
              setFieldValue: c,
              initialValues: d,
            } = (0, v.u6)(),
            u = !1,
            h = !1;
          return (
            t &&
              ((0 === d.maxTokensPerWalletPercent ||
                100 === d.maxTokensPerWalletPercent) &&
                (u = !0),
              (0 === d.maxTokensPerTxnPercent ||
                100 === d.maxTokensPerTxnPercent) &&
                (h = !0)),
            (0, i.jsxs)("div", {
              className: "rounded-md bg-gray-20 p-2",
              children: [
                (0, i.jsx)("div", {
                  className: "mb-2 flex flex-col gap-2",
                  children: (0, i.jsx)(w.Z, {
                    id: "taxes-notice2",
                    children: r.driPoolEnabled
                      ? "Anti-bot protections are unavailable when using fair launches"
                      : t
                      ? "You can only increase or disable your anti-bot limits."
                      : "Once you launch your coin, you can only increase or disable your anti-bot limits.",
                  }),
                }),
                (0, i.jsxs)(g.Z, {
                  bg: "bg-gray-10",
                  style: { "--joint-height": "10px" },
                  children: [
                    (0, i.jsx)("div", {
                      className: "rounded-sm  p-0",
                      children: (0, i.jsx)(T.u, {
                        title: "Limit per wallet",
                        switchProps: {
                          disabled: u || r.driPoolEnabled,
                          name: "maxTokensPerWalletEnabled",
                          checkedLabel: "On",
                          uncheckedLabel: "Off",
                          onChange: (e) => {
                            e || t || c("maxTokensPerWalletPercent", "");
                          },
                        },
                        children: (0, i.jsx)(I.Z, {
                          className: "mt-4",
                          jointIcon: a.MenuSimpleIcon,
                          activeInputProps: {
                            name: "maxTokensPerWalletPercent",
                          },
                          disabledInputProps: {
                            name: "any",
                            unit: (0, i.jsx)("span", {
                              className: "font-mono",
                              children: null == n ? void 0 : n.symbol,
                            }),
                            value: r.maxTokensPerWalletPercent
                              ? Number(
                                  (0, x.Ob)(
                                    BigInt(
                                      (null == n ? void 0 : n.supply) || 0
                                    ),
                                    BigInt(
                                      Math.round(
                                        100 * r.maxTokensPerWalletPercent
                                      )
                                    )
                                  )
                                ) || 0
                              : "-",
                          },
                        }),
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "rounded-sm p-0",
                      children: (0, i.jsx)(T.u, {
                        title: "Limit per transaction",
                        switchProps: {
                          name: "maxTokensPerTxnEnabled",
                          checkedLabel: "On",
                          uncheckedLabel: "Off",
                          disabled: h || r.driPoolEnabled,
                          onChange: (e) => {
                            e || t || c("maxTokensPerTxnPercent", "");
                          },
                        },
                        children: (0, i.jsx)(I.Z, {
                          className: "mt-4",
                          jointIcon: a.MenuSimpleIcon,
                          activeInputProps: { name: "maxTokensPerTxnPercent" },
                          disabledInputProps: {
                            name: "any",
                            unit: (0, i.jsx)("span", {
                              className: "font-mono",
                              children: null == n ? void 0 : n.symbol,
                            }),
                            value: r.maxTokensPerTxnPercent
                              ? Number(
                                  (0, x.Ob)(
                                    BigInt(
                                      (null == n ? void 0 : n.supply) || 0
                                    ),
                                    BigInt(
                                      Math.round(100 * r.maxTokensPerTxnPercent)
                                    )
                                  )
                                ) || 0
                              : "-",
                          },
                        }),
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "rounded-sm p-0",
                      children: (0, i.jsx)(T.u, {
                        title: "Sniper auto-burn",
                        description:
                          r.autoBurnEnabled &&
                          (0, i.jsxs)("div", {
                            className: "flex flex-col gap-3",
                            children: [
                              (0, i.jsx)("div", {
                                children:
                                  "Sniper auto-burn is enabled and will add an additional 20% tax on buys in the first block, reducing to 13.33% in the second block, 6.66% in the third, and finally 0% from the fourth block on.",
                              }),
                              (0, i.jsx)("div", {
                                children:
                                  "The proceeds from the anti-snipe tax are immediately burned, reducing your total supply. You will not generate additional revenue from this tax and should only use this feature to deter sniping.",
                              }),
                            ],
                          }),
                        alwaysShowDescription: !0,
                        switchProps: {
                          name: "autoBurnEnabled",
                          checkedLabel: "On",
                          uncheckedLabel: "Off",
                          disabled: t || r.driPoolEnabled,
                        },
                      }),
                    }),
                  ],
                }),
                t &&
                  (0, i.jsx)(j.t, {
                    className: "mt-4",
                    chainId: (null == n ? void 0 : n.chainId) || void 0,
                    loading: l,
                    disabled: !o || Object.keys(s).length > 0,
                    size: "lg",
                    fullWidth: !0,
                    htmlType: "submit",
                    children: "Save",
                  }),
              ],
            })
          );
        },
        N = (e) => {
          let { coin: n } = e,
            { address: t } = (0, y.m)(),
            { mutate: l } = (0, r.Z)(n.id),
            { data: s, isLoading: g, refetch: w } = (0, f.b)(n),
            { writeContractAsync: j, isPending: I } = (0, u.S)(),
            T =
              Number(
                (0, x.pC)(
                  null == s ? void 0 : s.maxTokensPerTransaction,
                  null == s ? void 0 : s.totalSupply
                )
              ) / 100,
            N =
              Number(
                (0, x.pC)(
                  null == s ? void 0 : s.maxTokensPerWallet,
                  null == s ? void 0 : s.totalSupply
                )
              ) / 100,
            C = (0, c.useMemo)(
              () =>
                (0, b.dZ)({ minMaxTokensPerTxn: T, minMaxTokensPerWallet: N }),
              [T, N]
            );
          return (0, i.jsx)(h.G6, {
            value: g || (null == s ? void 0 : s.owner) !== t,
            children: (0, i.jsx)(o.U, {
              title: "Anti-bot protection",
              subtitle:
                "Optionally enable these features to protect your token launch from bots and snipers. You can change these settings until you renounce your contract.",
              tipTitle: "Limit bot activity",
              tipText: "Optionally add some basic anti-bot measures.",
              tipIcon: a.ShieldIcon,
              children: (0, i.jsx)(d.U, {
                validationSchema: C,
                onSubmit: async (e) => {
                  let t = e.maxTokensPerTxnEnabled
                      ? Math.round(100 * (e.maxTokensPerTxnPercent || 0))
                      : 0,
                    i = e.maxTokensPerWalletEnabled
                      ? Math.round(100 * (e.maxTokensPerWalletPercent || 0))
                      : 0;
                  await j({
                    abi: p.gH,
                    chainId: n.chainId,
                    address: n.erc20Address,
                    functionName: "setLimits",
                    args: [
                      (0, x.Ob)(s.totalSupply, t),
                      (0, x.Ob)(s.totalSupply, i),
                    ],
                  }),
                    w();
                  let { coin: a } = await (0, m.Z)("/v1/coins/".concat(n.id), {
                    method: "PATCH",
                    body: {
                      maxTokensPerTxnBasisPoints: t,
                      maxTokensPerWalletBasisPoints: i,
                      maxTokensPerTxnEnabled: T > 0,
                      maxTokensPerWalletEnabled: N > 0,
                    },
                  });
                  l({ coin: a });
                },
                enableReinitialize: !0,
                initialValues: g
                  ? { ...n }
                  : {
                      ...n,
                      autoBurnEnabled: s.autoBurnBasisPoints > 0,
                      maxTokensPerTxnEnabled: 0 !== T,
                      maxTokensPerTxnPercent: T,
                      maxTokensPerWalletEnabled: 0 !== N,
                      maxTokensPerWalletPercent: N,
                    },
                children: () =>
                  (0, i.jsx)(v.l0, {
                    className: "contents",
                    children: (0, i.jsx)(P, { postDeploy: !0, coin: n }),
                  }),
              }),
            }),
          });
        },
        C = t(80054),
        k = t(13633);
      let S = {
        tipIcon: a.TransferIcon,
        tipTitle: "Buy/sell taxes",
        tipText:
          "Earn a percentage of every trade through the Uniswap V2 pair. If you choose not to add a tax and launch the token, you won't be able to add one later.",
      };
      function E(e) {
        let { params: n } = e,
          { data: t, isLoading: d } = (0, r.Z)(n.coinId),
          u = null == t ? void 0 : t.coin,
          h = (0, s.useRouter)();
        return (
          (0, c.useEffect)(() => {
            d || t || (l.A.error("Coin not found"), h.push("/app/coins"));
          }, [d, t, h]),
          (null == u ? void 0 : u.erc20Address)
            ? (0, i.jsx)("div", {
                className: "my-10",
                children: (0, i.jsx)(N, { coin: u }),
              })
            : (0, i.jsx)(C.Z, {
                title: "Coin anti-bot",
                coin: u,
                children: (0, i.jsx)("div", {
                  children: (0, i.jsxs)(o.U, {
                    title: "Anti-bot protection",
                    subtitle:
                      "Optionally enable these features to protect your token launch from bots and snipers. You can change these settings until you renounce your contract.",
                    tipTitle: "Limit bot activity",
                    tipText: "Optionally add some basic anti-bot measures.",
                    tipIcon: a.ShieldIcon,
                    children: [
                      (0, i.jsx)(P, { coin: u }),
                      (0, i.jsx)(k._, { current: "anti-bot" }),
                    ],
                  }),
                }),
              })
        );
      }
    },
    7263: function (e, n, t) {
      "use strict";
      t.d(n, {
        G: function () {
          return S;
        },
      });
      var i = t(2067),
        a = t(2384),
        r = t(15955),
        l = t(60107),
        o = t(96560),
        s = t(69436);
      function c(e) {
        return !!e;
      }
      var d = t(43568),
        u = t(71335),
        h = t.n(u),
        m = t(60171),
        f = t(62678);
      function p() {
        (0, m.useRouter)();
        let e = (0, m.useParams)().coinId,
          { requiredCount: n, errorsCount: t } = (0, f.S)();
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
        b = t(42482),
        v = t(36013),
        y = t(74734),
        g = t(44544),
        w = t(59757),
        j = t(9038),
        I = t(637),
        T = t(28967),
        P = t(15039);
      let N = (e) => {
          let { coin: n } = e,
            { coinId: t } = (0, m.useParams)(),
            { mutate: r } = (0, l.Z)(t),
            [o, c] = (0, P.useState)(!1),
            d = (null == n ? void 0 : n.contractVerifiedAt) !== null,
            u =
              (0, b.G)(
                (null == n ? void 0 : n.verificationRequestedAt) &&
                  (0, j.m)(null == n ? void 0 : n.verificationRequestedAt, 10)
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
                  setTimeout(() => r, 5e3);
              } catch (e) {
                x.A.error(e), c(!1);
              }
            };
          return (0, i.jsx)(I.M, {
            initial: !1,
            children:
              !d &&
              (0, i.jsx)(T.E.div, {
                ...(0, y.g)(),
                className: "w-full",
                children: (0, i.jsx)(a.default, {
                  onClick: h,
                  disabled: o || u,
                  fullWidth: !0,
                  children: d ? "Verified" : "Verify Contract",
                }),
              }),
          });
        },
        C = () => {
          let { data: e } = (0, g.Z)(),
            { coinId: n } = (0, m.useParams)(),
            t = null == e ? void 0 : e.user,
            r = (0, m.useRouter)();
          return (null == t ? void 0 : t.isMetadropTeam)
            ? (0, i.jsx)(a.default, {
                onClick: async () => {
                  let { coin: e } = await (0, s.Z)(
                    "/internal/coins/".concat(n, "/duplicate"),
                    { method: "POST" }
                  );
                  r.push("/app/coins/".concat(e.id));
                },
                children: "Duplicate Coin",
              })
            : null;
        },
        k = () => {
          var e, n, t;
          let { coinId: r } = (0, m.useParams)(),
            { data: o } = (0, l.Z)(r);
          return (0, i.jsxs)("div", {
            className: "flex flex-col gap-2",
            children: [
              (0, i.jsx)(C, {}),
              (0, i.jsx)(N, { coin: null == o ? void 0 : o.coin }),
              (0, i.jsx)("hr", { className: "my-1 border-gray-20" }),
              (0, i.jsx)(a.default, {
                target: "_blank",
                as: "/coins/".concat(null == o ? void 0 : o.coin.slug),
                href: "/coins/[slug]?slug=".concat(
                  null == o ? void 0 : o.coin.slug
                ),
                children: "View profile",
              }),
              (0, i.jsxs)(a.default, {
                type: "secondary",
                target: "_blank",
                href: ""
                  .concat(
                    v.kh[
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
                  v.O0[
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
        S = () => {
          var e;
          let n = (0, m.useParams)().coinId,
            { data: t, isLoading: a } = (0, l.Z)(n),
            s = !!(null == t
              ? void 0
              : null === (e = t.coin) || void 0 === e
              ? void 0
              : e.erc20Address),
            d = !w.Y;
          return {
            links: (0, P.useMemo)(() => {
              let e = (e) => ({
                href: "/app/coins/[coinId]".concat(e, "?coinId=").concat(n),
                as: "/app/coins/".concat(n).concat(e),
              });
              return a
                ? [{ label: "Loading Coin...", links: [] }]
                : s
                ? [
                    {
                      label: "Coin Dashboard",
                      links: [
                        {
                          label: "Dashboard",
                          ...e(""),
                          Icon: r.DashboardFastIcon,
                        },
                        {
                          label: "Coin Profile",
                          ...e("/profile"),
                          Icon: r.CryptoIcon,
                        },
                        {
                          label: "Socials",
                          ...e("/socials"),
                          Icon: (e) => {
                            let { className: n } = e;
                            return (0, i.jsx)(r.WebsiteIcon, {
                              className: (0, o.cn)("p-[3px]", n),
                            });
                          },
                        },
                        {
                          label: "Anti-Bot",
                          ...e("/anti-bot"),
                          Icon: r.ShieldIcon,
                        },
                        { label: "Taxes", ...e("/taxes"), Icon: r.PercentIcon },
                        {
                          label: "Liquidity",
                          ...e("/liquidity"),
                          Icon: r.DatabaseIcon,
                        },
                        {
                          label: "Telegram",
                          badge: "soon",
                          Icon: r.TelegramIcon,
                        },
                        {
                          label: "Activity",
                          badge: "soon",
                          Icon: r.AITextIcon,
                        },
                        {
                          label: "Analytics",
                          badge: "soon",
                          Icon: r.TrendingIcon,
                        },
                      ].filter(c),
                    },
                  ]
                : [
                    {
                      links: [
                        { label: "Coin Setup", ...e("/"), Icon: r.CryptoIcon },
                        {
                          label: "Socials",
                          ...e("/socials"),
                          Icon: (e) => {
                            let { className: n } = e;
                            return (0, i.jsx)(r.WebsiteIcon, {
                              className: (0, o.cn)("p-[3px]", n),
                            });
                          },
                        },
                        {
                          label: "Distribution",
                          ...e("/distribution"),
                          Icon: r.TransferIcon,
                        },
                        {
                          label: "Anti-Bot",
                          ...e("/anti-bot"),
                          Icon: r.ShieldIcon,
                        },
                        { label: "Taxes", ...e("/taxes"), Icon: r.PercentIcon },
                        d && {
                          label: "Fair Launch",
                          ...e("/fair-launch"),
                          Icon: r.PoolPaddedIcon,
                        },
                      ].filter(c),
                    },
                  ];
            }, [a, d, s, n, null == t ? void 0 : t.coin.driPoolEnabled]),
            footer: (0, P.useMemo)(
              () => (s ? (0, i.jsx)(k, {}) : (0, i.jsx)(p, {})),
              [s]
            ),
          };
        };
    },
    42747: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = t(2067),
        a = t(96560),
        r = t(15039),
        l = t(37397),
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
            bg: m = "bg-gray-95",
            style: f,
          } = e,
          p = (0, r.useRef)([]),
          [x, b] = (0, r.useState)([]),
          v = (0, r.useCallback)(() => {
            let e = p.current.map((e) => (null == e ? void 0 : e.clientHeight));
            b((n) => (n.length !== p.current.length ? e : n));
          }, [t, b]);
        return (
          (0, r.useLayoutEffect)(() => {
            v();
          }, [v]),
          (0, i.jsx)("div", {
            className: (0, a.cn)(n, "dripping-boxes"),
            style: f,
            children: (0, i.jsx)("div", {
              className: (0, a.cn)("row" === h && "flex"),
              children: (0, i.jsx)(o.M, {
                initial: !1,
                children: r.Children.map(t, (e, n) => {
                  if (!e) return null;
                  let t = (0, a.cn)(e.props.className)
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
                          children: (0, i.jsx)(l.ZP, { bg: m, dir: h }),
                        }),
                      (0, i.jsx)(s.E.div, {
                        className: (0, a.cn)(
                          " overflow-hidden rounded-[var(--drip-rounded)]",
                          m,
                          t,
                          e.props.wrapperClassName
                        ),
                        variants: d(x[n]),
                        initial: "hide",
                        animate: "show",
                        exit: "hide",
                        children: (0, i.jsx)(s.E.div, {
                          ref: (e) => (p.current[n] = e),
                          variants: u,
                          initial: "hide",
                          animate: "show",
                          exit: "hide",
                          children: r.cloneElement(e, {
                            className: (0, a.cn)(
                              "p-4 rounded-[var(--drip-rounded)] mx-auto",
                              m,
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
      "use strict";
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(2067),
        a = t(15039),
        r = (e, n, t) => {
          if (!e) throw Error("useLocalStorage key may not be falsy");
          let i = t ? (t.raw ? (e) => e : t.deserializer) : JSON.parse,
            r = (0, a.useRef)((e) => {
              try {
                let a = t ? (t.raw ? String : t.serializer) : JSON.stringify,
                  r = localStorage.getItem(e);
                if (null !== r) return i(r);
                return n && localStorage.setItem(e, a(n)), n;
              } catch (e) {
                return n;
              }
            }),
            [l, o] = (0, a.useState)(() => r.current(e));
          (0, a.useEffect)(() => o(r.current(e)), [e]);
          let s = (0, a.useCallback)(
            (n) => {
              try {
                let a;
                let r = "function" == typeof n ? n(l) : n;
                if (void 0 === r) return;
                (a = t
                  ? t.raw
                    ? "string" == typeof r
                      ? r
                      : JSON.stringify(r)
                    : t.serializer
                    ? t.serializer(r)
                    : JSON.stringify(r)
                  : JSON.stringify(r)),
                  localStorage.setItem(e, a),
                  o(i(a));
              } catch (e) {}
            },
            [e, o, l]
          );
          return [
            l,
            s,
            (0, a.useCallback)(() => {
              try {
                localStorage.removeItem(e), o(void 0);
              } catch (e) {}
            }, [e, o]),
          ];
        },
        l = t(96560),
        o = t(637),
        s = t(28967),
        c = t(15955);
      function d(e) {
        let {
            color: n = "lavender",
            children: t,
            id: a,
            dismissable: d = !1,
            className: u = "",
          } = e,
          [h, m] = r("drip-notice-".concat(a), !1);
        return (0, i.jsx)(o.M, {
          children:
            !h &&
            (0, i.jsxs)(s.E.div, {
              className: (0, l.cn)(
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
                      m(!0);
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
    43413: function (e, n, t) {
      "use strict";
      t.d(n, {
        t: function () {
          return m;
        },
      });
      var i = t(2067),
        a = t(48902),
        r = t(15039),
        l = t(48213),
        o = t(91818),
        s = t(66392),
        c = t(13984),
        d = t(21704),
        u = t(2384),
        h = t(83297);
      let m = (e) => {
        var n;
        let {
            bypass: t = !1,
            bypassSwitchNetwork: m = !1,
            disconnectedText: f = "Connect wallet",
            chainId: p = l.R.id,
            onClick: x,
            ...b
          } = e,
          { isConnected: v, isConnecting: y, address: g } = (0, o.m)(),
          { chain: w } = (0, o.m)(),
          {
            chains: j,
            switchChainAsync: I,
            isPending: T,
            isIdle: P,
            ...N
          } = (0, s.o)(),
          { data: C } = (0, c.O)({ watch: !0 }),
          k = (0, d.K)({ address: g });
        if (
          ((0, r.useEffect)(() => {
            k.refetch();
          }, [C, k.refetch]),
          t)
        )
          return (0, i.jsx)(u.default, { ...b });
        if (v && (null == w ? void 0 : w.id) !== p && !m) {
          let e = j.find((e) => e.id === p);
          return (0, i.jsx)(u.default, {
            ...b,
            disabled: !P,
            onClick: (n) => {
              I({ chainId: e.id }), n.preventDefault();
            },
            children: T
              ? "Switching to ".concat(null == e ? void 0 : e.name, "...")
              : "Switch to ".concat((null == e ? void 0 : e.name) || "unknown"),
          });
        }
        if (!v)
          return (0, i.jsx)(a.x3.Custom, {
            children: (e) =>
              (0, i.jsx)(u.default, {
                loading: y,
                onClick: (n) => {
                  n.preventDefault(), e.show();
                },
                className: b.className,
                ...b,
                disabled: y,
                children: y ? "Connecting..." : f,
              }),
          });
        if (
          (null === (n = k.data) || void 0 === n ? void 0 : n.value) ===
          BigInt(0)
        )
          return (0, i.jsx)(u.default, {
            ...b,
            onClick: (e) => {
              e.preventDefault(),
                h.A.error(
                  "You don't have enough ETH in your wallet to perform this transaction."
                );
            },
            children: b.children,
          });
        let { children: S, ...E } = b;
        return (0, i.jsx)(u.default, { onClick: x, ...E, children: S });
      };
    },
    91461: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var i = t(2067),
        a = t(52464),
        r = t.n(a),
        l = t(69463),
        o = t(15955),
        s = t(80742),
        c = t(65130),
        d = t(67552),
        u = t(96560),
        h = t(48028),
        m = t(15039);
      function f(e) {
        var n, t, a;
        let {
            ActiveInputComponent: f = c.u,
            DisabledInputComponent: p = s.Z,
            activeInputProps: x,
            disabledInputProps: b,
            jointIcon: v = o.MenuSimpleIcon,
            className: y = "",
            sharedDesc: g = !0,
          } = e,
          w = (0, c.m)({ name: x.name }),
          [j, I] = (0, h.U$)(x.name),
          T = (0, d.B4)(),
          P = (0, m.useRef)("unique-".concat(Math.round(1e5 * Math.random())));
        return (
          (0, m.useLayoutEffect)(() => {
            let e = document.querySelector(
                "#".concat(P.current, " .right-input .input")
              ),
              n = document.querySelector(
                "#".concat(P.current, " .right-input .mid-icon")
              );
            n && (null == e || e.appendChild(n));
          }, []),
          (0, i.jsxs)("div", {
            id: P.current,
            className:
              r().dynamic([["735ee3e88440dec2", [g ? "display: none;" : ""]]]) +
              " dual-container",
            children: [
              (0, i.jsx)(r(), {
                id: "735ee3e88440dec2",
                dynamic: [g ? "display: none;" : ""],
                children:
                  ".dual-container.__jsx-style-dynamic-selector .right-side{--bg-color:var(--gray-10)!important}.dual-container.__jsx-style-dynamic-selector .right-side .input{pointer-events:none}.dual-container.__jsx-style-dynamic-selector .dual-inner .error-or-description{".concat(
                    g ? "display: none;" : "",
                    "\n          }"
                  ),
              }),
              (0, i.jsxs)("div", {
                className:
                  r().dynamic([
                    ["735ee3e88440dec2", [g ? "display: none;" : ""]],
                  ]) +
                  " " +
                  ((0, u.cn)(
                    "grid grid-cols-2 items-start gap-4 p-0 pb-2",
                    "dual-inner",
                    y
                  ) || ""),
                children: [
                  (0, i.jsx)(f, {
                    ...x,
                    innerClassName: (0, u.cn)("w-full", x.innerClassName),
                    className:
                      r().dynamic([
                        ["735ee3e88440dec2", [g ? "display: none;" : ""]],
                      ]) +
                      " " +
                      ((0, u.cn)("mb-0", x.className) || ""),
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      r().dynamic([
                        ["735ee3e88440dec2", [g ? "display: none;" : ""]],
                      ]) + " right-input relative",
                    children: [
                      (0, i.jsx)(v, {
                        className:
                          r().dynamic([
                            ["735ee3e88440dec2", [g ? "display: none;" : ""]],
                          ]) +
                          " " +
                          ((0, u.cn)(
                            "mid-icon",
                            "h-3 w-3 rounded-full bg-gray-30 p-2 text-gray-60",
                            "absolute -left-2 top-5 z-10 -translate-x-1/2 -translate-y-1/2",
                            "border-2 border-gray-10 [box-sizing:content-box]"
                          ) || ""),
                      }),
                      (0, i.jsx)(p, {
                        label: (0, i.jsx)(i.Fragment, { children: "\xa0" }),
                        ...b,
                        disabled: !0,
                        innerClassName: (0, u.cn)(
                          "w-full",
                          "relative",
                          !x.disabled && !T && "!text-gray-95",
                          b.innerClassName
                        ),
                        placeholder: "-",
                        value:
                          "string" == typeof b.value
                            ? b.value
                            : "bigint" == typeof b.value
                            ? Number(b.value).toString()
                            : isNaN(b.value)
                            ? ""
                            : null === (n = b.value) || void 0 === n
                            ? void 0
                            : n.toLocaleString(),
                        description: b.description
                          ? (0, i.jsx)("div", {
                              className:
                                r().dynamic([
                                  [
                                    "735ee3e88440dec2",
                                    [g ? "display: none;" : ""],
                                  ],
                                ]) + " my-1",
                              children: b.description,
                            })
                          : null,
                        className:
                          r().dynamic([
                            ["735ee3e88440dec2", [g ? "display: none;" : ""]],
                          ]) +
                          " " +
                          ((0, u.cn)(
                            "right-side my-0 py-2",
                            !x.disabled && !T && "text-gray-95",
                            b.className
                          ) || ""),
                      }),
                    ],
                  }),
                ],
              }),
              g &&
                (0, i.jsx)(l.Q, {
                  description:
                    null == w
                      ? void 0
                      : null === (a = w.meta) || void 0 === a
                      ? void 0
                      : null === (t = a.props) || void 0 === t
                      ? void 0
                      : t.description,
                  error: I.touched ? I.error : null,
                }),
            ],
          })
        );
      }
    },
    79953: function (e, n, t) {
      "use strict";
      t.d(n, {
        U: function () {
          return l;
        },
      });
      var i = t(2067),
        a = t(48028),
        r = t(27349);
      function l(e) {
        let {
          validationSchema: n,
          onSubmit: t,
          initialValues: l,
          enableReinitialize: o = !0,
          completeResource: s = {},
          schemaContext: c = {},
          ...d
        } = e;
        return (0, i.jsx)(r.G.Provider, {
          value: { schema: n, completeResource: s },
          children: (0, i.jsx)(a.J9, {
            ...d,
            enableReinitialize: o,
            initialValues: l,
            onSubmit: async (e, i) => t(n.cast(e, { stripUnknown: !0 }), i),
            validate: async (e) => {
              try {
                await n.validate(
                  { ...s, ...e },
                  { abortEarly: !1, context: { isFinal: !1, ...s, ...e, ...c } }
                );
              } catch (t) {
                let n = {};
                try {
                  return (
                    t.inner.forEach((e) => {
                      n[e.path] = e.message;
                    }),
                    n
                  );
                } catch (n) {
                  console.log(e),
                    console.log(n),
                    console.log("error", JSON.stringify(t)),
                    console.log(JSON.stringify(n));
                }
              }
              return {};
            },
          }),
        });
      }
    },
    45574: function (e, n, t) {
      "use strict";
      t.d(n, {
        S: function () {
          return h;
        },
      });
      var i = t(15039),
        a = t(83297),
        r = t(91818),
        l = t(53953),
        o = t(13173),
        s = t(8979),
        c = t(13506),
        d = t(38372);
      let u = (e) => {
          let n = /Error: (\w+)/.exec(e.message);
          if (n)
            return (
              { OwnableUnauthorizedAccount: "You must be the owner" }[n[1]] ||
              n[1]
            );
        },
        h = () => {
          let { address: e } = (0, r.m)(),
            { writeContractAsync: n, ...t } = (0, l.S)(),
            h = (0, o.x)(),
            m = (0, s.Z)();
          (0, c.t)();
          let f = (0, i.useCallback)(
            async (e, t) => {
              let {
                loading: i = "Confirm transaction",
                success: r = "Transaction success!",
                error: l = "Failed to send transaction",
                ...o
              } = e;
              return new Promise((e, s) => {
                let c;
                let h = new Promise((i, r) => {
                  (async () => {
                    let l;
                    try {
                      console.log({ writeArgs: o }),
                        (l = await n(o, t)),
                        a.A.loading("Confirming transaction...", { id: c });
                    } catch (n) {
                      let e = u(n);
                      (/User rejected the request/.test(n.message) ||
                        /User denied transaction signature/.test(n.message)) &&
                        (a.A.error("Cancelled", { id: c }), a.A.dismiss(c)),
                        console.log("Error", n),
                        a.A.error("Error sending transaction", { id: c }),
                        r(e),
                        s(e);
                      return;
                    }
                    try {
                      let n = await (0, d.e)(m, { hash: l });
                      i(n), e(n);
                    } catch (e) {
                      r(e), s(e);
                    }
                  })();
                });
                c = a.A.promise(h, {
                  loading: i,
                  success: r,
                  error: (e) => e || l,
                });
              });
            },
            [h, n, m]
          );
          return { ...t, writeContractAsyncNative: n, writeContractAsync: f };
        };
    },
    42482: function (e, n, t) {
      "use strict";
      t.d(n, {
        G: function () {
          return l;
        },
        m: function () {
          return r;
        },
      });
      var i = t(23987),
        a = t(15039);
      let r = function () {
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
        l = (e) => {
          let [n, t] = (0, a.useState)((0, i.R)(new Date(), e));
          return (
            (0, a.useEffect)(() => {
              let a;
              if (!n && !(0, i.R)(new Date(), e)) return;
              let r = () => {
                let n =
                  (null == e ? void 0 : e.getTime()) - new Date().getTime();
                if (!(0, i.R)(new Date(), e)) {
                  t(!1);
                  return;
                }
                t(!0), (a = setTimeout(r, Math.min(n, 1728e6)));
              };
              return r(), () => clearTimeout(a);
            }, [null == e ? void 0 : e.getTime()]),
            n
          );
        };
    },
    55482: function (e, n, t) {
      "use strict";
      t.d(n, {
        G: function () {
          return o;
        },
      });
      var i = t(91610),
        a = t(15039),
        r = t(91873),
        l = t(13984);
      function o(e) {
        let { contracts: n, watch: t, ...o } = e,
          { data: s, ...c } = (0, r.N)({
            allowFailure: !0,
            contracts: n,
            ...o,
          }),
          { data: d } = (0, l.O)({ watch: t });
        (0, a.useEffect)(() => {
          c.refetch();
        }, [d, c.refetch]);
        let u = (0, a.useMemo)(
          () => (c.isLoading ? null : (0, i.X)(n, s)),
          [n, s, c.isLoading]
        );
        return { ...c, data: u };
      }
    },
    36013: function (e, n, t) {
      "use strict";
      t.d(n, {
        HI: function () {
          return b;
        },
        O0: function () {
          return m;
        },
        V3: function () {
          return f;
        },
        ZD: function () {
          return x;
        },
        kh: function () {
          return h;
        },
        s4: function () {
          return p;
        },
      });
      var i = t(48213),
        a = t(57214),
        r = t(13027),
        l = t(33731),
        o = t(5781),
        s = t(12618),
        c = t(23123),
        d = t(18507),
        u = t(67934);
      let h = {
          [i.R.id]: "https://etherscan.io",
          [a.F.id]: "https://sepolia.etherscan.io",
          [r.y.id]: "https://arbiscan.io",
          [l.Z.id]: "https://sepolia.arbiscan.io",
          [o.A.id]: "https://blastscan.io",
          [s.d.id]: "https://sepolia.blastscan.io",
          [c.u.id]: "https://basescan.org",
          [d.L.id]: "https://sepolia.basescan.org",
          [u.c.id]: "https://eth95.dev",
        },
        m = {
          [i.R.id]: "Etherscan",
          [a.F.id]: "Etherscan Sepolia",
          [o.A.id]: "Blastscan",
          [s.d.id]: "Blastscan Sepolia",
          [c.u.id]: "Basescan",
          [d.L.id]: "Basescan Sepolia",
          [r.y.id]: "Arbitrum",
          [l.Z.id]: "Arbitrum Sepolia",
          [u.c.id]: "Eth95",
        },
        f = {
          [i.R.id]: "eth",
          [a.F.id]: "",
          [u.c.id]: "",
          [r.y.id]: "arbitrum",
          [l.Z.id]: "",
          [o.A.id]: "blastmainnet",
          [s.d.id]: "blast",
          [c.u.id]: "base",
          [d.L.id]: "",
        },
        p = {
          [i.R.id]: "ethereum",
          [a.F.id]: "",
          [r.y.id]: "arbitrum",
          [l.Z.id]: "",
          [o.A.id]: "blast",
          [s.d.id]: "",
          [c.u.id]: "base",
          [d.L.id]: "",
          [u.c.id]: "",
        },
        x = {
          [i.R.id]: "eth",
          [a.F.id]: "sepolia-testnet",
          [r.y.id]: "arbitrum",
          [o.A.id]: "blast",
          [s.d.id]: "",
          [c.u.id]: "base",
          [d.L.id]: "base",
          [u.c.id]: "",
        };
      function b(e, n, t) {
        return null === e
          ? void 0
          : p[e] && n
          ? "https://dexscreener.com/"
              .concat(p[e], "/")
              .concat(n, "?embed=1&theme=dark&trades=0&info=0")
          : f[e] && t
          ? "https://www.defined.fi/"
              .concat(f[e], "/")
              .concat(
                t,
                "?embedded=1&hideTxTable=1&hideSidebar=1&embedColorMode=HEX_SCREAMER"
              )
          : null;
      }
    },
    74734: function (e, n, t) {
      "use strict";
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
    91610: function (e, n, t) {
      "use strict";
      function i(e, n) {
        return n
          ? e.reduce(
              (e, t, i) => {
                let a = "string" == typeof t ? t : t.alias || t.functionName;
                return (null == n ? void 0 : n[i]) === void 0
                  ? e
                  : {
                      [a]: (function (e, n) {
                        try {
                          let { parseAs: t } = n,
                            { result: i, error: a } = e,
                            r = null != i ? i : e;
                          if (a)
                            return (
                              console.log(
                                "Couldn't read ".concat(
                                  n.functionName || n,
                                  ": "
                                ),
                                e
                              ),
                              null
                            );
                          switch (!0) {
                            case "function" == typeof t:
                              r = t(e);
                              break;
                            case "number" === t:
                              r = "number" == typeof i ? i : Number(i);
                              break;
                            case "date" === t:
                              if (0 === Number(i)) {
                                r = null;
                                return;
                              }
                              r = new Date(1e3 * Number(i));
                          }
                          return r;
                        } catch (t) {
                          console.log({ getter: n, value: e, err: t });
                        }
                      })(n[i], t),
                      ...e,
                    };
              },
              { __raw: n }
            )
          : null;
      }
      t.d(n, {
        V: function () {
          return a;
        },
        X: function () {
          return i;
        },
      });
      let a = (e, n) => {
        let { address: t, chainId: i, abi: a } = n;
        return e
          .filter(Boolean)
          .map((e) =>
            "string" == typeof e
              ? { functionName: e, address: t, abi: a, chainId: i }
              : { address: t, abi: a, chainId: i, ...e }
          );
      };
    },
    60808: function (e, n, t) {
      "use strict";
      t.d(n, {
        Ob: function () {
          return a;
        },
        _d: function () {
          return i;
        },
        pC: function () {
          return r;
        },
      });
      let i = (e) => (null === e ? null : e / 100),
        a = (e, n) =>
          null === n || null === e || void 0 === n || void 0 === e
            ? null
            : (e * BigInt(n) * BigInt(1e9)) / BigInt(1e4) / BigInt(1e9),
        r = (e, n) => (n ? (e * BigInt(1e4)) / n : BigInt(0));
    },
    25704: function (e, n, t) {
      "use strict";
      t.d(n, {
        VY: function () {
          return N;
        },
        fC: function () {
          return T;
        },
        xz: function () {
          return P;
        },
      });
      var i = t(65122),
        a = t(15039),
        r = t(65727),
        l = t(70686),
        o = t(75347),
        s = t(17772),
        c = t(41633),
        d = t(94221),
        u = t(95502),
        h = t(89219);
      let m = "Collapsible",
        [f, p] = (0, l.b)(m),
        [x, b] = f(m),
        v = (0, a.forwardRef)((e, n) => {
          let {
              __scopeCollapsible: t,
              open: r,
              defaultOpen: l,
              disabled: s,
              onOpenChange: c,
              ...u
            } = e,
            [m = !1, f] = (0, o.T)({ prop: r, defaultProp: l, onChange: c });
          return (0, a.createElement)(
            x,
            {
              scope: t,
              disabled: s,
              contentId: (0, h.M)(),
              open: m,
              onOpenToggle: (0, a.useCallback)(() => f((e) => !e), [f]),
            },
            (0, a.createElement)(
              d.WV.div,
              (0, i.Z)(
                { "data-state": I(m), "data-disabled": s ? "" : void 0 },
                u,
                { ref: n }
              )
            )
          );
        }),
        y = (0, a.forwardRef)((e, n) => {
          let { __scopeCollapsible: t, ...l } = e,
            o = b("CollapsibleTrigger", t);
          return (0, a.createElement)(
            d.WV.button,
            (0, i.Z)(
              {
                type: "button",
                "aria-controls": o.contentId,
                "aria-expanded": o.open || !1,
                "data-state": I(o.open),
                "data-disabled": o.disabled ? "" : void 0,
                disabled: o.disabled,
              },
              l,
              { ref: n, onClick: (0, r.M)(e.onClick, o.onOpenToggle) }
            )
          );
        }),
        g = "CollapsibleContent",
        w = (0, a.forwardRef)((e, n) => {
          let { forceMount: t, ...r } = e,
            l = b(g, e.__scopeCollapsible);
          return (0, a.createElement)(
            u.z,
            { present: t || l.open },
            ({ present: e }) =>
              (0, a.createElement)(j, (0, i.Z)({}, r, { ref: n, present: e }))
          );
        }),
        j = (0, a.forwardRef)((e, n) => {
          let { __scopeCollapsible: t, present: r, children: l, ...o } = e,
            u = b(g, t),
            [h, m] = (0, a.useState)(r),
            f = (0, a.useRef)(null),
            p = (0, c.e)(n, f),
            x = (0, a.useRef)(0),
            v = x.current,
            y = (0, a.useRef)(0),
            w = y.current,
            j = u.open || h,
            T = (0, a.useRef)(j),
            P = (0, a.useRef)();
          return (
            (0, a.useEffect)(() => {
              let e = requestAnimationFrame(() => (T.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            (0, s.b)(() => {
              let e = f.current;
              if (e) {
                (P.current = P.current || {
                  transitionDuration: e.style.transitionDuration,
                  animationName: e.style.animationName,
                }),
                  (e.style.transitionDuration = "0s"),
                  (e.style.animationName = "none");
                let n = e.getBoundingClientRect();
                (x.current = n.height),
                  (y.current = n.width),
                  T.current ||
                    ((e.style.transitionDuration =
                      P.current.transitionDuration),
                    (e.style.animationName = P.current.animationName)),
                  m(r);
              }
            }, [u.open, r]),
            (0, a.createElement)(
              d.WV.div,
              (0, i.Z)(
                {
                  "data-state": I(u.open),
                  "data-disabled": u.disabled ? "" : void 0,
                  id: u.contentId,
                  hidden: !j,
                },
                o,
                {
                  ref: p,
                  style: {
                    "--radix-collapsible-content-height": v ? `${v}px` : void 0,
                    "--radix-collapsible-content-width": w ? `${w}px` : void 0,
                    ...e.style,
                  },
                }
              ),
              j && l
            )
          );
        });
      function I(e) {
        return e ? "open" : "closed";
      }
      let T = v,
        P = y,
        N = w;
    },
    54350: function (e, n, t) {
      "use strict";
      t.d(n, {
        u: function () {
          return a;
        },
      });
      var i = t(92931);
      function a(e, n = {}) {
        let t = (function (e, n = {}) {
          let t;
          try {
            t = e.getClient(n);
          } catch {}
          return t;
        })(e, n);
        return t?.extend(i.I);
      }
    },
    38372: function (e, n, t) {
      "use strict";
      t.d(n, {
        e: function () {
          return s;
        },
      });
      var i = t(91815),
        a = t(27769),
        r = t(96454),
        l = t(22936),
        o = t(85978);
      async function s(e, n) {
        let { chainId: t, timeout: s = 0, ...c } = n,
          d = e.getClient({ chainId: t }),
          u = (0, o.s)(d, a.e, "waitForTransactionReceipt"),
          h = await u({ ...c, timeout: s });
        if ("reverted" === h.status) {
          let e = (0, o.s)(d, r.f, "getTransaction"),
            n = await e({ hash: h.transactionHash }),
            t = (0, o.s)(d, l.RE, "call"),
            a = await t({
              ...n,
              gasPrice: "eip1559" !== n.type ? n.gasPrice : void 0,
              maxFeePerGas: "eip1559" === n.type ? n.maxFeePerGas : void 0,
              maxPriorityFeePerGas:
                "eip1559" === n.type ? n.maxPriorityFeePerGas : void 0,
            });
          throw Error((0, i.rR)(`0x${a.substring(138)}`));
        }
        return { ...h, chainId: d.chain.id };
      }
    },
    42837: function (e, n, t) {
      "use strict";
      t.d(n, {
        n: function () {
          return r;
        },
      });
      var i = t(28194),
        a = t(21596);
      function r(e, n) {
        let t = +(0, i.Q)(e);
        return (0, a.L)(e, t + n);
      }
    },
    9038: function (e, n, t) {
      "use strict";
      t.d(n, {
        m: function () {
          return r;
        },
      });
      var i = t(42837),
        a = t(45823);
      function r(e, n) {
        return (0, i.n)(e, n * a.yJ);
      }
    },
    23987: function (e, n, t) {
      "use strict";
      t.d(n, {
        R: function () {
          return a;
        },
      });
      var i = t(28194);
      function a(e, n) {
        return +(0, i.Q)(e) < +(0, i.Q)(n);
      }
    },
    4897: function (e, n, t) {
      "use strict";
      t.d(n, {
        T: function () {
          return x;
        },
      });
      var i = t(9566),
        a = t(19551),
        r = t(29893),
        l = t(11588),
        o = t(213),
        s = t(98816),
        c = t(38319),
        d = t(12800),
        u = t(93351),
        h = t(31095),
        m = t(72002),
        f = t(40156),
        p = t(30722);
      async function x(e, n) {
        let {
          account: t = e.account,
          chain: x = e.chain,
          accessList: b,
          data: v,
          gas: y,
          gasPrice: g,
          maxFeePerGas: w,
          maxPriorityFeePerGas: j,
          nonce: I,
          to: T,
          value: P,
          ...N
        } = n;
        if (!t)
          throw new a.o({ docsPath: "/docs/actions/wallet/sendTransaction" });
        let C = (0, i.T)(t);
        try {
          let t;
          if (
            ((0, h.F)(n),
            null !== x &&
              ((t = await (0, u.s)(e, m.L, "getChainId")({})),
              (0, r.q)({ currentChainId: t, chain: x })),
            "local" === C.type)
          ) {
            let n = await (0, u.s)(
              e,
              f.Z,
              "prepareTransactionRequest"
            )({
              account: C,
              accessList: b,
              chain: x,
              data: v,
              gas: y,
              gasPrice: g,
              maxFeePerGas: w,
              maxPriorityFeePerGas: j,
              nonce: I,
              to: T,
              value: P,
              ...N,
            });
            t || (t = await (0, u.s)(e, m.L, "getChainId")({}));
            let i = x?.serializers?.transaction,
              a = await C.signTransaction(
                { ...n, chainId: t },
                { serializer: i }
              );
            return await (0, u.s)(
              e,
              p.p,
              "sendRawTransaction"
            )({ serializedTransaction: a });
          }
          let i = e.chain?.formatters?.transactionRequest?.format,
            a = (i || d.tG)({
              ...(0, c.K)(N, { format: i }),
              accessList: b,
              data: v,
              from: C.address,
              gas: y,
              gasPrice: g,
              maxFeePerGas: w,
              maxPriorityFeePerGas: j,
              nonce: I,
              to: T,
              value: P,
            });
          return await e.request(
            { method: "eth_sendTransaction", params: [a] },
            { retryCount: 0 }
          );
        } catch (e) {
          throw (function (e, { docsPath: n, ...t }) {
            let i = (() => {
              let n = (0, s.k)(e, t);
              return n instanceof l.cj ? e : n;
            })();
            return new o.mk(i, { docsPath: n, ...t });
          })(e, { ...n, account: C, chain: n.chain || void 0 });
        }
      }
    },
    81452: function (e, n, t) {
      "use strict";
      t.d(n, {
        n: function () {
          return l;
        },
      });
      var i = t(824),
        a = t(93351),
        r = t(4897);
      async function l(e, n) {
        let {
            abi: t,
            address: l,
            args: o,
            dataSuffix: s,
            functionName: c,
            ...d
          } = n,
          u = (0, i.R)({ abi: t, args: o, functionName: c });
        return (0, a.s)(
          e,
          r.T,
          "sendTransaction"
        )({ data: `${u}${s ? s.replace("0x", "") : ""}`, to: l, ...d });
      }
    },
    29893: function (e, n, t) {
      "use strict";
      t.d(n, {
        q: function () {
          return a;
        },
      });
      var i = t(18741);
      function a({ chain: e, currentChainId: n }) {
        if (!e) throw new i.Bk();
        if (n !== e.id) throw new i.Yl({ chain: e, currentChainId: n });
      }
    },
    13506: function (e, n, t) {
      "use strict";
      t.d(n, {
        t: function () {
          return l;
        },
      });
      var i = t(54350),
        a = t(52635),
        r = t(8979);
      function l(e = {}) {
        let n = (0, r.Z)(e);
        return (0, a.useSyncExternalStoreWithSelector)(
          (e) =>
            (function (e, n) {
              let { onChange: t } = n;
              return e.subscribe(() => (0, i.u)(e), t, {
                equalityFn: (e, n) => e?.uid === n?.uid,
              });
            })(n, { onChange: e }),
          () => (0, i.u)(n, e),
          () => (0, i.u)(n, e),
          (e) => e,
          (e, n) => e?.uid === n?.uid
        );
      }
    },
    91873: function (e, n, t) {
      "use strict";
      t.d(n, {
        N: function () {
          return c;
        },
      });
      var i = t(62383),
        a = t(99631),
        r = t(15039),
        l = t(23753),
        o = t(13173),
        s = t(8979);
      function c(e = {}) {
        let { contracts: n = [], query: t = {} } = e,
          c = (0, s.Z)(e),
          d = (0, o.x)(),
          u = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let a = [],
                  r = t[1].contracts.length;
                for (let e = 0; e < r; e++) {
                  let i = t[1].contracts[e],
                    r = n.contracts?.[e].abi;
                  a.push({ ...i, abi: r });
                }
                let { scopeKey: l, ...o } = t[1];
                return (0, i.J)(e, { ...o, contracts: a });
              },
              queryKey: (function (e = {}) {
                let n = [];
                for (let t of e.contracts ?? []) {
                  let { abi: i, ...a } = t;
                  n.push({ ...a, chainId: a.chainId ?? e.chainId });
                }
                return ["readContracts", (0, a.O)({ ...e, contracts: n })];
              })(n),
            };
          })(c, { ...e, chainId: d }),
          h = (0, r.useMemo)(() => {
            let e = !1;
            for (let t of n) {
              let { abi: n, address: i, functionName: a } = t;
              if (!n || !i || !a) {
                e = !1;
                break;
              }
              e = !0;
            }
            return !!(e && (t.enabled ?? !0));
          }, [n, t.enabled]);
        return (0, l.aM)({
          ...u,
          ...t,
          enabled: h,
          structuralSharing: t.structuralSharing ?? l.if,
        });
      }
    },
    53953: function (e, n, t) {
      "use strict";
      t.d(n, {
        S: function () {
          return u;
        },
      });
      var i = t(29297),
        a = t(81452),
        r = t(85978),
        l = t(13360),
        o = t(9077);
      async function s(e, n) {
        let t;
        let { abi: i, chainId: a, connector: s, ...c } = n;
        t = n.account
          ? n.account
          : (await (0, l.e)(e, { chainId: a, connector: s })).account;
        let d = e.getClient({ chainId: a }),
          u = (0, r.s)(d, o.a, "simulateContract"),
          { result: h, request: m } = await u({ ...c, abi: i, account: t });
        return {
          chainId: d.chain.id,
          result: h,
          request: { __mode: "prepared", ...m, chainId: a },
        };
      }
      async function c(e, n) {
        let t, i;
        let { account: o, chainId: c, connector: d, __mode: u, ...h } = n;
        if (
          ((t =
            "object" == typeof o && "local" === o.type
              ? e.getClient({ chainId: c })
              : await (0, l.e)(e, { account: o, chainId: c, connector: d })),
          "prepared" === u)
        )
          i = h;
        else {
          let { request: n } = await s(e, { ...h, account: o });
          i = n;
        }
        let m = (0, r.s)(t, a.n, "writeContract");
        return await m({
          ...i,
          ...(o ? { account: o } : {}),
          chain: c ? { id: c } : null,
        });
      }
      var d = t(8979);
      function u(e = {}) {
        var n;
        let { mutation: t } = e,
          a =
            ((n = (0, d.Z)(e)),
            { mutationFn: (e) => c(n, e), mutationKey: ["writeContract"] }),
          { mutate: r, mutateAsync: l, ...o } = (0, i.D)({ ...t, ...a });
        return { ...o, writeContract: r, writeContractAsync: l };
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        1765, 6299, 894, 775, 9745, 2005, 1664, 4356, 9041, 8158, 4910, 5060,
        8388, 2469, 8505, 3297, 2105, 4685, 2418, 1164, 4916, 3525, 5428, 2931,
        3152, 5955, 1642, 1329, 3201, 8282, 4665, 1744,
      ],
      function () {
        return e((e.s = 63775));
      }
    ),
      (_N_E = e.O());
  },
]);
