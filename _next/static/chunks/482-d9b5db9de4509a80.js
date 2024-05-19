"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [482],
  {
    61844: function (e, t, n) {
      n.r(t),
        n.d(t, {
          CoinProfileHero: function () {
            return E;
          },
        });
      var a = n(2067),
        l = n(72598),
        i = n(2384),
        s = n(27136),
        o = n(15955),
        r = n(48259),
        c = n(54213),
        d = n(36013),
        u = n(51563),
        p = n(96560),
        f = n(87907),
        x = n(76859),
        h = n(71335),
        m = n.n(h),
        g = n(15039),
        v = n(5781),
        b = n(12618),
        j = n(71993),
        y = n(91818),
        w = n(53720),
        C = n(61590),
        I = n(60171);
      function N(e) {
        let { items: t, active: n, mode: l = "nav" } = e,
          [i, s] = (0, g.useState)(0),
          [o, r] = (0, g.useState)(null),
          [c, d] = (0, g.useState)(0),
          [u, f] = (0, g.useState)(0),
          [x, h] = (0, g.useState)(30),
          v = (0, g.useRef)(null);
        (0, g.useEffect)(() => {
          var e, t, a;
          if ((null == o ? void 0 : o.tagName) === "LI") {
            let t =
                (null === (e = v.current) || void 0 === e
                  ? void 0
                  : e.getBoundingClientRect().left) || 0,
              n = o.getBoundingClientRect(),
              a = n.left - t,
              l = c + u / 2,
              i = a + n.width / 2;
            l !== i &&
              (h(30 - Math.max(0, 2 * Math.floor(Math.abs(l - i) / (1.1 * u)))),
              setTimeout(() => {
                h(30);
              }, 100)),
              d(a),
              f(n.width);
          }
          if (!o) {
            let e =
              null === (t = v.current) || void 0 === t
                ? void 0
                : t.querySelector("#".concat(n.replace("#", "")));
            if (e) {
              let t =
                  (null === (a = v.current) || void 0 === a
                    ? void 0
                    : a.getBoundingClientRect().left) || 0,
                n = e.getBoundingClientRect(),
                l = n.left - t,
                i = c + u / 2,
                s = l + n.width / 2;
              i !== s &&
                (h(
                  30 - Math.max(0, 2 * Math.floor(Math.abs(i - s) / (1.1 * u)))
                ),
                setTimeout(() => {
                  h(30);
                }, 100)),
                d(l),
                f(n.width);
            }
          }
        }, [o, n, c, u]),
          (0, g.useEffect)(() => {
            var e, t;
            let a =
              null === (e = v.current) || void 0 === e
                ? void 0
                : e.querySelector("#".concat(n.replace("#", "")));
            if (a) {
              let e =
                  (null === (t = v.current) || void 0 === t
                    ? void 0
                    : t.getBoundingClientRect().left) || 0,
                n = a.getBoundingClientRect();
              d(n.left - e), f(n.width);
            }
          }, [n]),
          (0, g.useEffect)(() => {
            let e = () => {
              var e;
              s(
                (null === (e = v.current) || void 0 === e
                  ? void 0
                  : e.getBoundingClientRect().width) || 0
              );
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []);
        let b = "nav" === l ? m() : "div";
        return (0, a.jsx)("nav", {
          className:
            "z-10 flex rounded-sm border border-gray-100/10 bg-gray-20 p-1",
          children: (0, a.jsxs)("ul", {
            className: "relative flex items-center gap-0",
            ref: v,
            onMouseLeave: () => r(null),
            children: [
              (0, a.jsx)("div", {
                className:
                  "pointer-events-none absolute left-0 top-0 h-full w-[90px] cursor-pointer rounded-[10px] bg-gray-95",
                style: { width: u, left: c },
              }),
              t.map((e) =>
                (0, a.jsx)(
                  "li",
                  {
                    className: (0, p.cn)(
                      "flex h-[30px] items-center px-3 font-mono text-sm uppercase",
                      e.disabled ? "cursor-not-allowed" : "cursor-pointer"
                    ),
                    id: e.id,
                    children: e.disabled
                      ? (0, a.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, a.jsx)("span", {
                              className: "text-gray-40 blur-[1px]",
                              children: e.label,
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "absolute left-0 top-[3px] w-full whitespace-nowrap text-center font-wide text-[10px] text-highlight shadow",
                              children: "soon ser",
                            }),
                          ],
                        })
                      : (0, a.jsx)(b, {
                          as: e.as,
                          href: e.href,
                          onClick: e.onClick,
                          ...("menu" === l ? { type: "button" } : {}),
                          className: "flex h-full items-center text-center",
                          children: e.label,
                        }),
                  },
                  e.label
                )
              ),
              (0, a.jsx)("div", {
                className:
                  "pointer-events-none absolute left-0 top-0 flex items-center gap-0 text-gray-20",
                style: {
                  clipPath: "inset(0px "
                    .concat(i - c - u, "px 0px ")
                    .concat(c, "px)"),
                },
                children: t.map((e) =>
                  (0, a.jsx)(
                    "div",
                    {
                      className: (0, p.cn)(
                        "px-3 py-1 font-mono text-sm uppercase",
                        e.disabled && "opacity-10 blur-[1px]"
                      ),
                      children: e.label,
                    },
                    e.label
                  )
                ),
              }),
            ],
          }),
        });
      }
      let T = (e) => [
        {
          href: "/coins/".concat(e),
          label: "Trade",
          disabled: !1,
          id: "trade",
        },
        {
          href: "/coins/".concat(e, "/fair-launch"),
          label: "Fair Launch",
          disabled: !1,
          id: "fair-launch",
        },
      ];
      function B() {
        let e = (0, I.usePathname)(),
          t = (0, I.useParams)(),
          n = (0, g.useMemo)(
            () => (t.slug && e.endsWith(t.slug) ? "trade" : e.split("/").pop()),
            [e, t.slug]
          );
        return (0, a.jsx)(N, { items: T(t.slug), active: n });
      }
      let E = (e) => {
          let { coin: t, className: n, hideDetails: i } = e,
            s = (0, g.useRef)(null),
            r = (0, g.useRef)(null),
            [d, f] = (0, c.m)(),
            { status: h } = (0, C.Ep)(),
            m = (0, g.useMemo)(
              () =>
                !t.driPoolEnabled ||
                (t.driPoolEnabled && ("before" === h || "open" === h)),
              [t.driPoolEnabled, h]
            );
          if (!t) return null;
          let { symbol: v, name: b, description: j } = t;
          return (0, a.jsxs)("div", {
            className: (0, p.cn)(
              "relative flex w-full justify-between py-4 transition-all duration-150",
              "pt-6",
              n
            ),
            ref: s,
            children: [
              (0, a.jsx)("div", {
                className: (0, p.cn)(
                  "absolute left-0 top-1 flex w-full items-center justify-center",
                  "EXTERNAL" === t.coinType && "mt-[80px]"
                ),
                children: !m && (0, a.jsx)(B, {}),
              }),
              (0, a.jsxs)("div", {
                className: "flex w-full flex-col gap-4",
                children: [
                  "EXTERNAL" === t.coinType &&
                    (0, a.jsxs)("div", {
                      className: (0, p.cn)(
                        "flex w-full flex-col rounded-md bg-highlight px-6 py-4 text-center font-mono text-sm text-gray-0",
                        "mb-10"
                      ),
                      children: [
                        (0, a.jsx)("span", {
                          className: "font-bold tracking-wider",
                          children:
                            "This coin is tradeable on Metadrop, but was not launched through Metadrop.",
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "text-xs font-bold subpixel-antialiased opacity-50",
                          children:
                            "Metadrop is not affiliated with this project in any way and any action you take with it is at your own risk.",
                        }),
                      ],
                    }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex w-full grow flex-col justify-between gap-8 lg:flex-row lg:items-end",
                    children: [
                      (0, a.jsxs)("div", {
                        className: " flex h-full flex-col gap-4",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "flex h-full flex-col gap-4 lg:flex-row lg:items-center",
                            children: [
                              (0, a.jsxs)("div", {
                                className: (0, p.cn)(
                                  "relative aspect-square h-20 min-h-20 w-20 min-w-20 overflow-hidden rounded-md p-2",
                                  "filter backdrop-blur-2"
                                ),
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "absolute left-0 top-0 h-full w-full rounded-md border border-gray-100/10 bg-gray-100/10",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "bg-striped-diagonal z-50 h-full w-full overflow-hidden rounded-full text-muted",
                                    children: (0, a.jsx)(u.i, {
                                      coin: t,
                                      className: "w-full",
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "flex h-full w-full flex-col justify-center gap-2",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className:
                                          " whitespace-nowrap font-mono text-highlight",
                                        children: v,
                                      }),
                                      (0, a.jsxs)("pre", {
                                        className: (0, p.cn)(
                                          "cursor-pointer select-none rounded-full bg-gray-20 text-gray-95",
                                          "font-mono text-[16px]",
                                          "flex items-center",
                                          "h-6 pl-2 pr-3"
                                        ),
                                        onClick: () => {
                                          f(t.erc20Address);
                                        },
                                        children: [
                                          (0, a.jsx)("button", {
                                            type: "button",
                                            className:
                                              "pointer-events-none mr-1",
                                            children: d
                                              ? (0, a.jsx)(o.CheckmarkIcon, {
                                                  className:
                                                    "size-[18px] translate-y-[1px]",
                                                })
                                              : (0, a.jsx)(o.CopyIcon, {
                                                  className:
                                                    "size-[18px] translate-y-[1px]",
                                                }),
                                          }),
                                          (0, a.jsx)(l.d, {
                                            address: t.erc20Address,
                                            expandOnHover: !0,
                                            charCount: 8,
                                            canCopy: !1,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: (0, p.cn)(
                                      "w-full text-2xl font-semibold",
                                      "truncate lg:max-w-[calc(min(100vw_-_30px,_1250px)_-_480px)]",
                                      "whitespace-normal lg:whitespace-nowrap",
                                      "-mb-1 pb-1"
                                    ),
                                    title: b,
                                    ref: r,
                                    children: b,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          j &&
                            (0, a.jsx)("div", {
                              className: "mt-2 max-w-lg",
                              children: j,
                            }),
                        ],
                      }),
                      !i &&
                        (0, a.jsxs)("aside", {
                          className:
                            "flex h-full w-full flex-col  items-end justify-between gap-4 justify-self-end pt-2 lg:max-w-[320px]",
                          children: [
                            (0, a.jsx)(k, { coin: t }),
                            t.coinType === x.CoinType.METADROP &&
                              (0, a.jsx)(L, { coin: t }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        M = (e) => Math.round(100 * e) / 100,
        L = (e) => {
          var t;
          let { coin: n } = e,
            l = (0, j.C)(),
            { data: i } = (0, w.b)(n),
            s = "Loading...",
            o = "Loading...";
          if (i) {
            let e = Number(i.totalSupply);
            (s =
              i.maxTokensPerWallet === BigInt(0)
                ? "Unlimited"
                : "".concat(M((100 * Number(i.maxTokensPerWallet)) / e), "%")),
              (o =
                i.maxTokensPerTransaction === BigInt(0)
                  ? "Unlimited"
                  : "".concat(
                      M((100 * Number(i.maxTokensPerTransaction)) / e),
                      "%"
                    ));
          }
          return (0, a.jsxs)("div", {
            className: "flex w-full flex-col justify-between",
            children: [
              (0, a.jsx)(S, { left: "Max per wallet limit", right: s }),
              (0, a.jsx)(S, { left: "Max per tx limit", right: o }),
              (0, a.jsx)(S, {
                left: "Chain",
                right:
                  (null === (t = l.find((e) => e.id === n.chainId)) ||
                  void 0 === t
                    ? void 0
                    : t.name) || "Unknown",
              }),
              (0, a.jsx)(S, {
                left: "Buy tax",
                right: i
                  ? "".concat(Number(i.projectBuyTaxBasisPoints) / 100, "%")
                  : "Loading...",
              }),
              (0, a.jsx)(S, {
                left: "Sell tax",
                right: i
                  ? "".concat(Number(i.projectSellTaxBasisPoints) / 100, "%")
                  : "Loading...",
              }),
            ],
          });
        },
        k = (e) => {
          var t;
          let { coin: n } = e,
            { address: l } = (0, y.m)(),
            c = (0, j.C)();
          return (0, a.jsxs)("div", {
            className: "flex items-center gap-4",
            children: [
              l === n.deployedBy &&
                (0, a.jsx)(i.default, {
                  rightIcon: (0, a.jsx)(o.ArrowTopRightIcon, {}),
                  type: "ghost",
                  as: "/app/coins/".concat(n.id),
                  href: "/app/coins/[id]?id=".concat(n.id),
                  target: "_blank",
                  children: "Dashboard",
                }),
              (0, a.jsxs)(f.u, {
                children: [
                  (0, a.jsx)(r.TooltipTrigger, {
                    children: (0, a.jsx)(s.f, {
                      chainId: n.chainId,
                      className: "size-icon-md",
                    }),
                  }),
                  (0, a.jsxs)(r.TooltipContent, {
                    children: [
                      "Deployed on",
                      " ",
                      (null ===
                        (t = c.find((e) => {
                          let { id: t } = e;
                          return t === n.chainId;
                        })) || void 0 === t
                        ? void 0
                        : t.name) || "Unknown chain",
                    ],
                  }),
                ],
              }),
              n.website &&
                (0, a.jsxs)(m(), {
                  href: "https://".concat(n.website),
                  target: "_blank",
                  className:
                    "relative cursor-pointer transition-all active:scale-90",
                  children: [
                    (0, a.jsx)(o.WebsiteIcon, { className: "size-icon-md" }),
                    n.websiteVerified &&
                      (0, a.jsx)(o.VerifiedIcon, {
                        className:
                          "absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5",
                      }),
                  ],
                }),
              n.erc20Address &&
                (0, a.jsxs)(m(), {
                  href: ""
                    .concat(d.kh[n.chainId], "/token/")
                    .concat(n.erc20Address),
                  target: "_blank",
                  className:
                    "relative cursor-pointer transition-all active:scale-90",
                  children: [
                    [v.A.id, b.d.id].includes(n.chainId)
                      ? (0, a.jsx)("div", {
                          className:
                            "size-icon-md rounded-full border border-gray-100 p-0.5",
                          children: (0, a.jsx)(o.BlastIcon, {
                            className: "h-full w-full text-gray-100",
                          }),
                        })
                      : (0, a.jsx)(o.EtherscanIcon, {
                          className: "size-icon-md",
                        }),
                    !!n.contractVerifiedAt &&
                      (0, a.jsx)(o.VerifiedIcon, {
                        className:
                          "absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5",
                      }),
                  ],
                }),
              n.erc20Address &&
                (0, a.jsxs)(m(), {
                  href: "https://dexscreener.com/"
                    .concat(
                      null === d.s4 || void 0 === d.s4
                        ? void 0
                        : d.s4[n.chainId],
                      "/"
                    )
                    .concat(n.erc20Address),
                  target: "_blank",
                  className:
                    "relative cursor-pointer transition-all active:scale-90",
                  children: [
                    (0, a.jsx)(o.DEXScreenerIcon, {
                      className: "size-icon-md",
                    }),
                    (0, a.jsx)(o.VerifiedIcon, {
                      className: "absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5",
                    }),
                  ],
                }),
              n.twitter &&
                (0, a.jsxs)(m(), {
                  href: "https://twitter.com/".concat(n.twitter),
                  target: "_blank",
                  className:
                    "relative cursor-pointer transition-all active:scale-90",
                  children: [
                    (0, a.jsx)(o.TwitterOutlineIcon, {
                      className: "size-icon-md",
                    }),
                    n.twitterVerified &&
                      (0, a.jsx)(o.VerifiedIcon, {
                        className:
                          "absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5",
                      }),
                  ],
                }),
              n.telegram &&
                (0, a.jsxs)(m(), {
                  href: "https://t.me/".concat(n.telegram),
                  target: "_blank",
                  className:
                    "relative cursor-pointer transition-all active:scale-90",
                  children: [
                    (0, a.jsx)(o.TelegramOutlineIcon, {
                      className: "size-icon-md",
                    }),
                    n.telegramVerified &&
                      (0, a.jsx)(o.VerifiedIcon, {
                        className:
                          "absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5",
                      }),
                  ],
                }),
            ],
          });
        },
        S = (e) => {
          let { left: t, right: n } = e;
          return (0, a.jsxs)("div", {
            className: "flex items-baseline justify-between",
            children: [
              (0, a.jsx)("span", { className: "text-gray-50", children: t }),
              (0, a.jsx)("div", {
                className: "mx-2 grow border-b border-dashed border-gray-30",
              }),
              (0, a.jsx)("span", { children: n }),
            ],
          });
        };
    },
    61590: function (e, t, n) {
      n.d(t, {
        XJ: function () {
          return M;
        },
        Ep: function () {
          return k;
        },
        E7: function () {
          return T;
        },
        $_: function () {
          return L;
        },
      });
      var a = n(2067),
        l = n(42482),
        i = n(55482),
        s = n(56213),
        o = n(4124),
        r = n(81205),
        c = n(25463),
        d = n(20886),
        u = n(91610),
        p = n(76859),
        f = n(9038),
        x = n(83781),
        h = n(15039),
        m = n(10105),
        g = n(91818),
        v = n(8979),
        b = n(13984),
        j = n(13173),
        y = n(11664),
        w = n(60464),
        C = n(61722);
      let I = () => {
          let e = (0, b.O)(),
            t = (0, j.x)();
          return (0, y.ZP)(e.isFetched ? "block-timestamp" : null, async () => {
            let e = await (0, w.Q)((0, C.s3)(t));
            return null == e ? void 0 : e.timestamp;
          });
        },
        N = (0, h.createContext)({ coin: {} }),
        T = (e) => {
          var t, n, a, l;
          let [s, o] = (0, h.useState)(!0),
            { address: d } = (0, g.m)(),
            f = (0, i.G)({
              contracts: [
                ...(0, u.V)((0, r.Yh)(d), {
                  address: e.erc20driPoolAddress,
                  chainId: e.chainId,
                  abi: c.vQ,
                }),
                ...(0, u.V)(
                  [
                    "burnLPTokens",
                    { functionName: "totalSupply", alias: "mainTokenSupply" },
                  ],
                  { address: e.erc20Address, chainId: e.chainId, abi: c.gH }
                ),
              ],
              query: {
                enabled: !!(
                  e.erc20driPoolAddress && e.coinType === p.CoinType.METADROP
                ),
              },
              watch: !0,
            }),
            { data: x } = L(
              e.erc20driPoolAddress,
              e.chainId,
              BigInt(e.deployedBlockNumber)
            ),
            m = ["succeeded", "failed"].includes(
              null === (t = f.data) || void 0 === t ? void 0 : t.poolPhaseStatus
            ),
            v =
              (null === (n = f.data) || void 0 === n
                ? void 0
                : n.participantExcessRefundAvailable) > 0 ||
              !m ||
              (null === (a = f.data) || void 0 === a ? void 0 : a.balanceOf) >
                0 ||
              (null === (l = f.data) || void 0 === l
                ? void 0
                : l.totalETHFundedToLPAndTokenBuy) <= 0;
          return (
            (0, h.useEffect)(() => {
              o(v);
            }, [v]),
            { contractData: f, participants: x }
          );
        },
        B = (e) => {
          let t = Date.now();
          return null === e.poolEndDate || t <= e.poolStartDate.getTime()
            ? "before"
            : t <= e.poolEndDate.getTime()
            ? "open"
            : "succeeded";
        },
        E = (e) => {
          var t;
          let {
              coin: n,
              contractData: a,
              participants: i,
              myClaimEvent: o,
            } = e,
            { erc20driPoolAddress: c, chainId: u } = n,
            { data: p } = (0, s.x)(),
            { data: g, isLoading: b, refetch: j } = a,
            [y, w] = (0, h.useState)(!0),
            [C, N] = (0, h.useState)({
              driPoolType: 1,
              poolPerAddressMaxETH: BigInt(n.poolPerAddressCapWei || 0),
              poolPerTransactionMinETH: BigInt(n.poolPerTxnMinWei || 0),
              poolMaxETH: BigInt(n.poolMaxETHWei || "0"),
              maxInitialBuy: BigInt(n.poolMaxInitialBuyWei || "0"),
              poolMinETH: BigInt(n.poolMinWei || "0"),
              poolContributionFeeBasisPoints: d.Ns.fairLaunchBasisPoints,
              participant: [0n, 0n],
              participantExcessRefundAvailable: 0n,
              poolStartDate: n.poolStartDate,
              poolVestingInSeconds: n.poolVestingInSeconds,
              poolEndDate:
                n.poolStartDate &&
                (0, f.m)(
                  n.poolStartDate,
                  Number(
                    null !== (t = n.poolDurationInMinutes) && void 0 !== t
                      ? t
                      : d.Er.durationInMinutes
                  )
                ),
              poolStartType: n.poolStartType,
              lpSupply: n.lpSupplyWei,
              supplyInThePool: n.lpSupplyWei,
              mainTokenSupply: n.supplyWei,
              vestingEndDate:
                n.poolStartDate &&
                (0, x.E)(n.poolStartDate, n.poolVestingInSeconds),
              poolPhaseStatus: B(n),
              lpFunding: BigInt(n.lpFundingWei || 0) - (n.burnLPTokens, 0n),
            }),
            [T, E] = (0, h.useState)(0n),
            M =
              (0, m.Z)(null == g ? void 0 : g.balanceOf) !==
              (null == g ? void 0 : g.balanceOf),
            L = (0, v.Z)();
          (0, h.useEffect)(() => {
            !b &&
              g &&
              p &&
              (async () => {
                let e =
                    (null == g ? void 0 : g.poolPhaseStatus) === "succeeded" ||
                    M,
                  t = await (0, r.K7)(n, g, L, {
                    pendingETH: e ? 0n : T,
                    ethPrice: p,
                    unicryptFee: 0n,
                  });
                e && E(0n), N({ ...C, ...g, ...t }), w(!1);
              })();
          }, [n, g, p, b, T, M]);
          let k = (0, l.G)(C.vestingEndDate),
            { data: S } = I(),
            A =
              S &&
              (null == g ? void 0 : g.vestingEndDate) &&
              1000n * S > (null == g ? void 0 : g.vestingEndDate.getTime()),
            P = C.poolPhaseStatus;
          return (0, h.useMemo)(
            () => ({
              myClaimEvent: o,
              refetch: j,
              data: { ...C },
              participants: i,
              setPendingETH: E,
              ethPrice: p,
              isLoading: y || !g,
              status: P,
              isVested: !k,
              isVestingBlockMined: A,
              coin: { chainId: u, erc20driPoolAddress: c, ...n },
            }),
            [j, C, i, y, p, g, P, k, A, u, c, n, L, o]
          );
        },
        M = (e) => {
          let {
              children: t,
              coin: n,
              contractData: l,
              participants: i,
              myClaimEvent: s,
            } = e,
            o = E({
              coin: n,
              contractData: l,
              participants: i,
              myClaimEvent: s,
            });
          return (0, a.jsx)(N.Provider, { value: o, children: t });
        },
        L = (e, t, n) => {
          let { data: a, ...l } = (0, o.p)({
              address: e,
              abi: c.vQ,
              eventName: "AddToPool",
              chainId: t,
              fromBlock: n,
            }),
            i = (0, h.useMemo)(
              () =>
                null == a
                  ? void 0
                  : a.reduce((e, t) => {
                      let n = t.args;
                      return {
                        ...e,
                        [n.dripHolder]:
                          BigInt(n.ethPooled || 0n) +
                          (e[n.dripHolder]
                            ? BigInt(e[n.dripHolder] || 0n)
                            : 0n),
                      };
                    }, {}),
              [null == a ? void 0 : a.length]
            );
          return { ...l, data: i || {} };
        },
        k = () => (0, h.useContext)(N);
    },
    51563: function (e, t, n) {
      n.d(t, {
        i: function () {
          return c;
        },
        t: function () {
          return r;
        },
      });
      var a = n(2067),
        l = n(26933),
        i = n(96560),
        s = n(26871),
        o = n(15039);
      function r(e) {
        let { erc20Address: t, coinImageURL: n } = e;
        return (0, o.useMemo)(
          () => n || (t ? (0, s.qF)(t, { width: 200, height: 200 }) : null),
          [n, t]
        );
      }
      function c(e) {
        let { coin: t, className: n = "" } = e,
          s = r(t);
        return (0, a.jsx)(l.Z, {
          src: s,
          transforms: { resize: "400" },
          className: (0, i.cn)("aspect-square rounded-full bg-highlight", n),
        });
      }
    },
    56213: function (e, t, n) {
      n.d(t, {
        x: function () {
          return s;
        },
      });
      var a = n(30045),
        l = n(74020);
      let i = [
          {
            inputs: [],
            name: "latestRoundData",
            outputs: [
              { internalType: "uint80", name: "roundId", type: "uint80" },
              { internalType: "int256", name: "answer", type: "int256" },
              { internalType: "uint256", name: "startedAt", type: "uint256" },
              { internalType: "uint256", name: "updatedAt", type: "uint256" },
              {
                internalType: "uint80",
                name: "answeredInRound",
                type: "uint80",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        s = () => {
          let {
            data: e,
            isError: t,
            isLoading: n,
            refetch: s,
          } = (0, l.u)({
            address: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
            abi: i,
            chainId: 1,
            functionName: "latestRoundData",
          });
          return {
            data: e ? Number((0, a.b)(e[1], 8)) : null,
            refetch: s,
            isError: t,
            isLoading: n,
          };
        };
    },
    4124: function (e, t, n) {
      n.d(t, {
        p: function () {
          return o;
        },
      });
      var a = n(11664),
        l = n(8979),
        i = n(34200),
        s = n(54350);
      let o = (e) => {
        let {
            address: t,
            abi: n,
            eventName: o,
            chainId: r,
            swrOptions: c,
            fromBlock: d = 0n,
            watch: u = !1,
          } = e,
          p = (0, l.Z)(),
          f = (0, s.u)(p, { chainId: r }),
          x = n.find((e) => e.name === o && "event" === e.type),
          h = (0, a.ZP)(
            "".concat(o, "+").concat(t, "+").concat(r, "+").concat(d),
            async () => {
              let e = (e, n) =>
                f.getLogs({ fromBlock: e, toBlock: n, address: t, event: x });
              try {
                return await e(d, void 0);
              } catch (t) {
                if (
                  (console.log("Error fetching logs", { e: t }),
                  "InvalidParamsRpcError" === t.name)
                ) {
                  console.log("Falling back to smaller batches");
                  let t = await f.getBlockNumber(),
                    n = [];
                  for (let a = d; a < t; a += 2000n) n.push(e(a, a + 2000n));
                  return (await Promise.all(n)).flat();
                }
              }
            },
            { ...c }
          );
        return (
          (0, i.x)({
            onBlockNumber() {
              h.mutate();
            },
          }),
          h
        );
      };
    },
    53720: function (e, t, n) {
      n.d(t, {
        b: function () {
          return o;
        },
      });
      var a = n(55482),
        l = n(25463),
        i = n(91610),
        s = n(76859);
      let o = function () {
        let {
          erc20Address: e,
          chainId: t,
          coinType: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, a.G)({
          contracts: (0, i.V)(
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
            { address: e, chainId: t, abi: l.gH }
          ),
          query: { enabled: !!(e && n === s.CoinType.METADROP) },
          watch: !0,
        });
      };
    },
    81205: function (e, t, n) {
      n.d(t, {
        uQ: function () {
          return h;
        },
        K7: function () {
          return x;
        },
        Yh: function () {
          return p;
        },
      });
      var a = n(60808),
        l = n(76859),
        i = n(89026),
        s = n(51123);
      let o = (e) => {
        let { tokensCount: t, pooledETH: n } = e;
        return n && t ? n / BigInt(t) : BigInt(0);
      };
      var r = n(25463),
        c = n(40731),
        d = n(64456);
      async function u(e, t, n, a) {
        let { wagmiConfig: l, chainId: i } = a;
        return e <= 0
          ? BigInt(0)
          : (0, d.L)(l, {
              abi: r.mC,
              address: c.p[i].uniswapV2Router.address,
              functionName: "getAmountOut",
              args: [e, t, n],
              chainId: i,
            });
      }
      let p = (e) => [
          "poolPerAddressMaxETH",
          "poolPerTransactionMinETH",
          "poolMaxETH",
          "poolMinETH",
          "supplyInThePool",
          "maxInitialBuy",
          "totalSupply",
          "poolIsAboveMinimum",
          "poolPhaseStatus",
          "totalETHContributed",
          "projectSeedContributionAddress",
          "totalETHPooled",
          "poolContributionFeeBasisPoints",
          "totalETHFundedToLPAndTokenBuy",
          "owner",
          { functionName: "poolVestingInSeconds", parseAs: "number" },
          {
            parseAs: (e) => {
              let { result: t } = e;
              return BigInt(t) === BigInt(0)
                ? l.PoolStart.ON_LAUNCH
                : BigInt(t) === BigInt(i.zg)
                ? l.PoolStart.MANUAL
                : l.PoolStart.FIXED_DATE;
            },
            alias: "poolStartType",
            functionName: "poolStartDate",
          },
          {
            functionName: "poolStartDate",
            parseAs: (e) => {
              let { result: t } = e;
              return BigInt(t) === BigInt(0) || BigInt(t) === BigInt(i.zg)
                ? null
                : new Date(1e3 * t);
            },
          },
          { parseAs: "date", functionName: "poolEndDate" },
          { parseAs: "date", functionName: "vestingEndDate" },
          "projectSeedContributionETH",
          e && { functionName: "balanceOf", args: [e] },
          e && { functionName: "vestedBalanceOf", args: [e] },
          e && { functionName: "participant", args: [e] },
          e && { functionName: "participantExcessRefundAvailable", args: [e] },
          e && { functionName: "participantExcessETHRefunded", args: [e] },
        ],
        f = (e) => (e / BigInt(1e12)) * BigInt(1e12),
        x = async (e, t, n, l) => {
          let i,
            { ethPrice: r, unicryptFee: c, pendingETH: d } = l,
            { totalETHContributed: p, balanceOf: x, totalSupply: v } = t,
            { participant: b = [BigInt(0), BigInt(0)] } = t,
            j = b[0],
            y = j > BigInt(0);
          if (d > 0) {
            let e = f(
                (0, a.Ob)(
                  d,
                  null == t ? void 0 : t.poolContributionFeeBasisPoints
                )
              ),
              n = d - e,
              l = n * BigInt(1e6);
            (p += n), (x += l), (v += l), (j += n);
          }
          let w = m(
              p,
              (null == t ? void 0 : t.maxInitialBuy) > 0
                ? null == t
                  ? void 0
                  : t.maxInitialBuy
                : null
            ),
            C =
              (null == t ? void 0 : t.totalETHFundedToLPAndTokenBuy) ===
              BigInt(0)
                ? null == t
                  ? void 0
                  : t.projectSeedContributionETH
                : (null == t ? void 0 : t.totalETHFundedToLPAndTokenBuy) - w,
            I = h(
              null == t ? void 0 : t.poolMaxETH,
              null == t ? void 0 : t.maxInitialBuy
            ),
            N = BigInt((null == e ? void 0 : e.lpSupplyWei) || 0),
            T = await u(w, C, N, { wagmiConfig: n, chainId: e.chainId }),
            B = Number((0, a.pC)(p, I)) / 1e4,
            E = o({ tokensCount: Number(N / BigInt(1e18)), pooledETH: C }),
            M = o({
              tokensCount: Number((N - T) / BigInt(1e18)),
              pooledETH: w + C,
            }),
            L = (0, a.pC)(j, p),
            k =
              B > 1 && (null == t ? void 0 : t.maxInitialBuy) > 0
                ? (0, a.Ob)(null == t ? void 0 : t.maxInitialBuy, L)
                : j,
            S = x || BigInt(0),
            A = (0, a.pC)(S, v),
            P = (0, a.pC)(null == t ? void 0 : t.vestedBalanceOf, S),
            D = (0, a.Ob)(T, A),
            F = (0, a.Ob)(T, L),
            H = (0, a.Ob)(F, P),
            R = (0, a.pC)(F, t.mainTokenSupply),
            _ = j - k,
            V = (F * M) / BigInt(1e18),
            Z = r * parseFloat((0, s.d)(E)),
            O = r * parseFloat((0, s.d)(M)),
            z = Number(e.supply),
            W = m(
              (null == t ? void 0 : t.poolPerAddressMaxETH) > 0
                ? (null == t ? void 0 : t.poolPerAddressMaxETH) - j
                : null,
              (null == t ? void 0 : t.poolMaxETH) > 0
                ? (null == t ? void 0 : t.poolMaxETH) -
                    (null == t ? void 0 : t.totalETHContributed)
                : null
            );
          null !== W &&
            (i = f(
              (W /
                BigInt(
                  1e4 - (null == t ? void 0 : t.poolContributionFeeBasisPoints)
                )) *
                BigInt(1e4)
            ));
          let U =
            (null == t ? void 0 : t.projectSeedContributionETH) -
            ((null == t ? void 0 : t.burnLPTokens) ? BigInt(0) : c);
          return {
            poolFilledPercent: 100 * B,
            filledRatio:
              g(
                null == t ? void 0 : t.totalETHContributed,
                null == t ? void 0 : t.maxInitialBuy
              ) / 100,
            totalETHContributed: null == t ? void 0 : t.totalETHContributed,
            initialCoinPriceUSD: Z,
            coinPriceUSD: O,
            marketCapUSD: z * O,
            totalTokensPurchased: T,
            initialMarketCapUSD: z * Z,
            maxAddToPoolWithFees: i,
            lpFunding: U,
            myPurchase: k,
            myDrips: S,
            myDripsShare: A,
            myTokens: F,
            myVestedTokens: H,
            myVestedBP: P,
            myClaimableTokens: D,
            myShareOfTotalSupply: R,
            myTokensInETH: V,
            myPooledETH: j,
            myRefund: _,
            myShareOfPoolBasisPoints: L,
            balanceOf: x,
            totalSupply: v,
            _hasActuallyContributed: y,
          };
        },
        h = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce((e, t) => (t > e ? t : e));
        },
        m = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce((e, t) => (t < e ? t : e));
        },
        g = (e, t) =>
          t
            ? 100 *
              parseFloat(((e * BigInt(1e10)) / t / BigInt(1e8)).toString())
            : 0;
    },
    72598: function (e, t, n) {
      n.d(t, {
        d: function () {
          return h;
        },
      });
      var a = n(2067),
        l = n(32905),
        i = n(68343),
        s = n(96560),
        o = n(15039),
        r = n(95599),
        c = n(81314),
        d = n(637),
        u = n(28967),
        p = n(74734),
        f = n(90117),
        x = n(83297);
      let h = (0, f.P)(
        (e) => {
          let {
              address: t,
              ensName: n,
              zeroXClassName: f = "opacity-40",
              charCount: h = 10,
              chainId: m = 1,
              className: g = "",
              expandOnHover: v,
              canCopy: b = !0,
            } = e,
            j = (0, c.Av)(),
            y = (0, i.F)({ address: t, chainId: m, query: { enabled: !n } }),
            [w, C] = (0, r.Z)(),
            [I, N] = (0, o.useState)(!1),
            [T, B] = (0, o.useState)(h);
          (0, o.useEffect)(() => {
            let e;
            if (v && !j)
              return (
                (e = I
                  ? setInterval(() => {
                      B((e) => Math.min(e + 1, 42));
                    }, 5)
                  : setInterval(() => {
                      B((e) => Math.max(e - 1, h));
                    }, 5)),
                () => clearInterval(e)
              );
          }, [I, h, v, j]);
          let E = (0, l.T)(t, T),
            M = (0, a.jsxs)("span", {
              children: [
                (0, a.jsx)("span", { className: (0, s.cn)(f), children: "0x" }),
                (0, a.jsx)("span", {
                  children: null == E ? void 0 : E.split("x")[1],
                }),
              ],
            });
          return (0, a.jsx)("div", {
            onMouseEnter: () => N(!0),
            onMouseLeave: () => N(!1),
            onClick: b
              ? () => {
                  C(t), x.A.info("Address copied");
                }
              : void 0,
            className: (0, s.cn)("cursor-pointer", g),
            children: (0, a.jsx)(d.M, {
              mode: "wait",
              initial: !1,
              children: y.data
                ? (0, a.jsx)(u.E.div, { ...(0, p.g)(), children: y.data })
                : (0, a.jsx)(u.E.div, { ...(0, p.g)(), children: M }),
            }),
          });
        },
        {
          fallback: (0, a.jsxs)("span", {
            children: [
              (0, a.jsx)("span", { className: "text-muted", children: "0x" }),
              (0, a.jsx)("span", { children: "???" }),
            ],
          }),
        }
      );
    },
    27136: function (e, t, n) {
      n.d(t, {
        f: function () {
          return f;
        },
      });
      var a = n(2067),
        l = n(15955),
        i = n(48213),
        s = n(67934),
        o = n(13027),
        r = n(57214),
        c = n(12618),
        d = n(5781),
        u = n(23123);
      let p = {
          [i.R.id]: l.ETHIcon,
          [s.c.id]: (e) =>
            (0, a.jsxs)("svg", {
              width: "60",
              height: "60",
              viewBox: "0 0 60 60",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...e,
              children: [
                (0, a.jsx)("path", {
                  d: "M54.782 43.5929V41.1729C54.782 40.7229 54.025 40.2929 52.666 39.9069L52.699 36.8929C52.699 32.2519 51.259 27.7229 48.573 23.9179C45.8775 20.1063 42.078 17.213 37.687 15.6279L37.59 15.0239C37.5397 14.7003 37.3981 14.3979 37.182 14.1519C36.9648 13.905 36.6823 13.7244 36.367 13.6309C32.1461 12.4036 27.6629 12.4036 23.442 13.6309C23.125 13.7239 22.842 13.9039 22.624 14.1509C22.407 14.3969 22.264 14.6989 22.214 15.0229L22.121 15.5859C17.703 17.1561 13.8756 20.0484 11.159 23.8699C8.45557 27.6741 7.00213 32.2249 6.99999 36.8919V39.9189C5.65999 40.3039 4.91299 40.7289 4.91299 41.1749V43.5959C4.89134 43.738 4.92227 43.883 4.99999 44.0039C5.6684 43.5098 6.4344 43.1638 7.24699 42.9889C9.31899 42.4889 11.426 42.1389 13.55 41.9429C14.1446 41.8764 14.7465 41.9362 15.3163 42.1183C15.8862 42.3005 16.4112 42.6009 16.857 42.9999C18.5037 44.4896 20.6454 45.314 22.866 45.3129H36.83C39.0505 45.3142 41.192 44.4894 42.838 42.9989C43.283 42.5978 43.8077 42.2952 44.3778 42.111C44.9478 41.9267 45.5504 41.865 46.146 41.9299C48.269 42.1249 50.376 42.4729 52.448 42.9719C53.218 43.1179 53.946 43.4339 54.578 43.8959C54.613 43.9309 54.656 43.9619 54.686 43.9959C54.7648 43.8772 54.7989 43.7344 54.782 43.5929Z",
                  fill: "#FFF100",
                }),
                (0, a.jsx)("path", {
                  d: "M16.89 38.4978C16.8712 37.9404 16.8612 37.3826 16.86 36.8248C16.867 28.4088 18.852 20.8608 22.122 15.5898C17.7043 17.1595 13.8769 20.0511 11.16 23.8718C8.45662 27.6754 7.00285 32.2254 7 36.8918V39.9188C10.2477 39.1514 13.5576 38.6761 16.89 38.4988V38.4978Z",
                  fill: "url(#paint0_linear_21663_23237)",
                }),
                (0, a.jsx)("path", {
                  d: "M52.697 36.8921C52.7015 31.6302 50.8555 26.5343 47.482 22.4961C48.9458 27.129 49.6753 31.9625 49.644 36.8211C49.644 37.6411 49.622 38.4511 49.584 39.2561C50.6198 39.4154 51.646 39.6317 52.658 39.9041L52.697 36.8921Z",
                  fill: "url(#paint1_linear_21663_23237)",
                }),
                (0, a.jsx)("path", {
                  d: "M52.448 42.9798C50.375 42.4798 48.268 42.1298 46.145 41.9338C45.5498 41.868 44.9475 41.9288 44.3775 42.1119C43.8074 42.2951 43.2825 42.5966 42.837 42.9968C41.1906 44.4871 39.0487 45.3116 36.828 45.3098H22.87C20.6506 45.3105 18.51 44.4865 16.864 42.9978C16.4193 42.5961 15.8946 42.2931 15.3245 42.1085C14.7544 41.9239 14.1517 41.862 13.556 41.9268C11.432 42.1228 9.32599 42.4718 7.25299 42.9718C6.44149 43.149 5.67629 43.4948 5.00699 43.9868C6.06699 45.5938 16.789 47.2808 29.853 47.2808C42.918 47.2808 53.635 45.5878 54.697 43.9878C54.66 43.9548 54.619 43.9238 54.588 43.8888C53.9482 43.4357 53.2183 43.1257 52.448 42.9798Z",
                  fill: "url(#paint2_radial_21663_23237)",
                }),
                (0, a.jsx)("path", {
                  d: "M29.846 19.8179L24.5 28.8409L29.846 32.1289V19.8179Z",
                  fill: "#0A0A0A",
                }),
                (0, a.jsx)("path", {
                  d: "M29.848 19.8218V32.1268L35.193 28.8428L29.848 19.8218ZM29.848 33.9148V38.2048C29.948 38.0628 35.193 30.6248 35.193 30.6218L29.848 33.9148Z",
                  fill: "#4B4D4D",
                }),
                (0, a.jsx)("path", {
                  d: "M29.848 33.9159L24.502 30.6279L29.848 38.2079V33.9139V33.9159Z",
                  fill: "#0A0A0A",
                }),
                (0, a.jsxs)("defs", {
                  children: [
                    (0, a.jsxs)("linearGradient", {
                      id: "paint0_linear_21663_23237",
                      x1: "14.561",
                      y1: "39.9188",
                      x2: "14.561",
                      y2: "15.5898",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, a.jsx)("stop", { "stop-color": "#EDCF00" }),
                        (0, a.jsx)("stop", {
                          offset: "0.33",
                          stopColor: "#F0D500",
                        }),
                        (0, a.jsx)("stop", {
                          offset: "0.77",
                          stopColor: "#F9E500",
                        }),
                        (0, a.jsx)("stop", {
                          offset: "1",
                          stopColor: "#FFF100",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("linearGradient", {
                      id: "paint1_linear_21663_23237",
                      x1: "50.089",
                      y1: "40.0961",
                      x2: "50.089",
                      y2: "22.4961",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, a.jsx)("stop", { stopColor: "#EDCF00" }),
                        (0, a.jsx)("stop", {
                          offset: "0.59",
                          stopColor: "#F7E100",
                        }),
                        (0, a.jsx)("stop", {
                          offset: "1",
                          stopColor: "#FFF100",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("radialGradient", {
                      id: "paint2_radial_21663_23237",
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(7.70099 56.5388) scale(18.5398 18.4136)",
                      children: [
                        (0, a.jsx)("stop", { stopColor: "#FFF100" }),
                        (0, a.jsx)("stop", {
                          offset: "0.23",
                          stopColor: "#F9E500",
                        }),
                        (0, a.jsx)("stop", {
                          offset: "0.67",
                          stopColor: "#F0D500",
                        }),
                        (0, a.jsx)("stop", {
                          offset: "1",
                          stopColor: "#EDCF00",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          [o.y.id]: (e) =>
            (0, a.jsxs)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...e,
              children: [
                (0, a.jsx)("path", {
                  d: "M3.90417 6.03991V9.95991C3.90417 10.2119 4.03617 10.4399 4.25617 10.5679L7.65218 12.5279C7.86818 12.6519 8.13618 12.6519 8.35218 12.5279L11.7482 10.5679C11.9642 10.4439 12.1002 10.2119 12.1002 9.95991V6.03991C12.1002 5.78791 11.9682 5.55991 11.7482 5.43191L8.35218 3.47191C8.13618 3.34791 7.86818 3.34791 7.65218 3.47191L4.25617 5.43191C4.04017 5.55591 3.90817 5.78791 3.90817 6.03991H3.90417Z",
                  fill: "#213147",
                }),
                (0, a.jsx)("path", {
                  d: "M8.74001 8.76005L8.25601 10.0881C8.24401 10.1241 8.24401 10.1641 8.25601 10.2041L9.08801 12.4881L10.052 11.9321L8.89601 8.76005C8.86801 8.68805 8.76801 8.68805 8.74001 8.76005Z",
                  fill: "#12AAFF",
                }),
                (0, a.jsx)("path", {
                  d: "M9.71205 6.52812C9.68405 6.45612 9.58405 6.45612 9.55605 6.52812L9.07205 7.85612C9.06005 7.89212 9.06005 7.93212 9.07205 7.97212L10.436 11.7121L11.4 11.1561L9.71205 6.53212V6.52812Z",
                  fill: "#12AAFF",
                }),
                (0, a.jsx)("path", {
                  d: "M8.00005 3.62C8.02405 3.62 8.04805 3.628 8.06805 3.64L11.7401 5.76C11.7841 5.784 11.8081 5.832 11.8081 5.88V10.12C11.8081 10.168 11.7801 10.216 11.7401 10.24L8.06805 12.36C8.04805 12.372 8.02405 12.38 8.00005 12.38C7.97605 12.38 7.95205 12.372 7.93205 12.36L4.26005 10.24C4.21605 10.216 4.19205 10.168 4.19205 10.12V5.876C4.19205 5.828 4.22005 5.78 4.26005 5.756L7.93205 3.636C7.95205 3.624 7.97605 3.616 8.00005 3.616V3.62ZM8.00005 3C7.86805 3 7.74005 3.032 7.62005 3.1L3.94805 5.22C3.71205 5.356 3.56805 5.604 3.56805 5.876V10.116C3.56805 10.388 3.71205 10.636 3.94805 10.772L7.62005 12.892C7.73605 12.96 7.86805 12.992 8.00005 12.992C8.13205 12.992 8.26005 12.96 8.38005 12.892L12.0521 10.772C12.2881 10.636 12.4321 10.388 12.4321 10.116V5.876C12.4321 5.604 12.2881 5.356 12.0521 5.22L8.37605 3.1C8.26005 3.032 8.12805 3 7.99605 3H8.00005Z",
                  fill: "#9DCCED",
                }),
                (0, a.jsx)("path", {
                  d: "M5.56818 11.7161L5.90818 10.7881L6.58818 11.3521L5.95218 11.9361L5.56818 11.7161Z",
                  fill: "#213147",
                }),
                (0, a.jsx)("path", {
                  d: "M7.68825 5.57578H6.75625C6.68825 5.57578 6.62425 5.61978 6.60025 5.68378L4.60425 11.1558L5.56825 11.7118L7.76825 5.68378C7.78825 5.62778 7.74825 5.57178 7.69225 5.57178L7.68825 5.57578Z",
                  fill: "white",
                }),
                (0, a.jsx)("path", {
                  d: "M9.32027 5.57578H8.38827C8.32027 5.57578 8.25627 5.61978 8.23227 5.68378L5.95227 11.9318L6.91627 12.4878L9.39627 5.68378C9.41627 5.62778 9.37627 5.57178 9.32027 5.57178V5.57578Z",
                  fill: "white",
                }),
              ],
            }),
          [r.F.id]: () =>
            (0, a.jsx)(l.ETHIcon, {
              style: { filter: "contrast(0.5)", opacity: 0.75 },
            }),
          [c.d.id]: l.BlastIcon,
          [d.A.id]: l.BlastIcon,
          [u.u.id]: l.BaseIcon,
        },
        f = (e) => {
          let { chainId: t, ...n } = e,
            l = p[t];
          return l ? (0, a.jsx)(l, { ...n, cl: n.className }) : null;
        };
    },
    88416: function (e, t, n) {
      n.d(t, {
        e: function () {
          return s;
        },
      });
      var a = n(2067),
        l = n(96560),
        i = n(37397);
      let s = (e) => {
        let { label: t, className: n = "", Component: s = "div", ...o } = e;
        return (0, a.jsxs)(s, {
          ...o,
          className: (0, l.cn)(
            "relative px-6 pb-1 pt-3 text-sm font-bold text-highlight",
            "table self-baseline",
            "rounded-t-sm",
            n
          ),
          children: [
            t,
            (0, a.jsx)(i.UH, {
              className: "absolute bottom-0 right-0 translate-x-full",
            }),
          ],
        });
      };
    },
    26933: function (e, t, n) {
      n.d(t, {
        s: function () {
          return s;
        },
      });
      var a = n(2067),
        l = n(96560),
        i = n(15039);
      t.Z = (e) => {
        let {
            src: t,
            type: n = "image",
            transforms: o = { resize: "1600" },
            className: r,
            alt: c,
            ...d
          } = e,
          { src_: u, type: p } = (0, i.useMemo)(() => {
            let e = n;
            return (
              /gif2video/.test(t) && (e = "video"),
              { src_: "video" === e ? t : s(t, o), type: e }
            );
          }, [t, o, n]);
        return "image" === p
          ? (0, a.jsx)("img", {
              className: (0, l.cn)("no-fallback h-full object-cover", r),
              alt: null != c ? c : "decorative",
              src: u,
              ...d,
            })
          : "video" === p
          ? (0, a.jsx)("video", {
              className: r,
              autoPlay: !0,
              loop: !0,
              src: u,
              ...d,
              muted: !0,
            })
          : void 0;
      };
      let s = (e, t) => {
        if (!/ucarecdn/.test(e)) return e;
        let n = Object.entries(null != t ? t : {}).reduce((e, t) => {
          let [n, a] = t;
          return "".concat(e, "-/").concat(n, "/").concat(a, "/");
        }, "-/quality/best/-/format/auto/");
        return "".concat(e).concat(n);
      };
    },
    43413: function (e, t, n) {
      n.d(t, {
        t: function () {
          return f;
        },
      });
      var a = n(2067),
        l = n(48902),
        i = n(15039),
        s = n(48213),
        o = n(91818),
        r = n(66392),
        c = n(13984),
        d = n(21704),
        u = n(2384),
        p = n(83297);
      let f = (e) => {
        var t;
        let {
            bypass: n = !1,
            bypassSwitchNetwork: f = !1,
            disconnectedText: x = "Connect wallet",
            chainId: h = s.R.id,
            onClick: m,
            ...g
          } = e,
          { isConnected: v, isConnecting: b, address: j } = (0, o.m)(),
          { chain: y } = (0, o.m)(),
          {
            chains: w,
            switchChainAsync: C,
            isPending: I,
            isIdle: N,
            ...T
          } = (0, r.o)(),
          { data: B } = (0, c.O)({ watch: !0 }),
          E = (0, d.K)({ address: j });
        if (
          ((0, i.useEffect)(() => {
            E.refetch();
          }, [B, E.refetch]),
          n)
        )
          return (0, a.jsx)(u.default, { ...g });
        if (v && (null == y ? void 0 : y.id) !== h && !f) {
          let e = w.find((e) => e.id === h);
          return (0, a.jsx)(u.default, {
            ...g,
            disabled: !N,
            onClick: (t) => {
              C({ chainId: e.id }), t.preventDefault();
            },
            children: I
              ? "Switching to ".concat(null == e ? void 0 : e.name, "...")
              : "Switch to ".concat((null == e ? void 0 : e.name) || "unknown"),
          });
        }
        if (!v)
          return (0, a.jsx)(l.x3.Custom, {
            children: (e) =>
              (0, a.jsx)(u.default, {
                loading: b,
                onClick: (t) => {
                  t.preventDefault(), e.show();
                },
                className: g.className,
                ...g,
                disabled: b,
                children: b ? "Connecting..." : x,
              }),
          });
        if (
          (null === (t = E.data) || void 0 === t ? void 0 : t.value) ===
          BigInt(0)
        )
          return (0, a.jsx)(u.default, {
            ...g,
            onClick: (e) => {
              e.preventDefault(),
                p.A.error(
                  "You don't have enough ETH in your wallet to perform this transaction."
                );
            },
            children: g.children,
          });
        let { children: M, ...L } = g;
        return (0, a.jsx)(u.default, { onClick: m, ...L, children: M });
      };
    },
    8138: function (e, t, n) {
      n.d(t, {
        WU: function () {
          return o;
        },
        iL: function () {
          return r;
        },
        th: function () {
          return c;
        },
      });
      var a = n(2067),
        l = n(96560),
        i = n(15955),
        s = n(77297);
      let o = (e) => {
          let { value: t, className: n, ...i } = e;
          return (0, a.jsx)(a.Fragment, {
            children:
              null == t
                ? (0, a.jsx)("div", {
                    className: (0, l.cn)(
                      "placeholder striped-sm animated inline-block h-[1em] w-[4ch]",
                      n
                    ),
                  })
                : (0, s.uf)(t, i),
          });
        },
        r = (e) => {
          let {
            value: t,
            unit: n,
            className: s,
            placeholderClassName: r,
            size: c = "base",
            isLoading: d = null == t,
            supDollar: u = !0,
            ...p
          } = e;
          return null == t
            ? (0, a.jsx)("div", {
                className: (0, l.cn)(
                  "placeholder inline-block h-[1em] w-[4ch]",
                  d && "animated",
                  {
                    "striped-xs text-xs": "sm" === c,
                    "striped-sm text-sm": "base" === c,
                    "striped-sm text-base": "lg" === c,
                    "striped-sm text-h2": "h2" === c,
                  },
                  s
                ),
              })
            : (0, a.jsxs)("div", {
                className: (0, l.cn)(
                  "flex items-center gap-1",
                  "font-wide tabular-nums",
                  {
                    "gap-[2px] text-xs": "xs" === c,
                    "gap-[2px] text-sm": "sm" === c,
                    "gap-1 text-base": "base" === c,
                    "text-lg": "lg" === c,
                    "text-h2": "h2" === c,
                    "translate-y-[4px]": !u,
                  },
                  s
                ),
                children: [
                  "usd" === n
                    ? (0, a.jsx)("xs" === c ? "span" : u ? "sup" : "span", {
                        className: (0, l.cn)(
                          "inline-block",
                          "xs" !== c
                            ? u
                              ? "mr-1 translate-x-[6px] translate-y-[5px] "
                              : "translate-y-[0px]"
                            : null,
                          {
                            "text-xs": "sm" === c,
                            "text-sm": "base" === c,
                            "text-base": "lg" === c,
                            "text-xl": "h2" === c,
                          }
                        ),
                        children: "$",
                      })
                    : "eth" === n
                    ? (0, a.jsx)(i.ETHIcon, {
                        className: (0, l.cn)({
                          "h-[12px] w-[12px] -translate-y-[1px]": "sm" === c,
                          "size-icon-sm -translate-y-[1px]": "base" === c,
                          "size-icon-md -translate-y-[3px]": "lg" === c,
                          "size-icon-h2 -translate-y-[3px]": "h2" === c,
                        }),
                      })
                    : "%" !== n && n,
                  (0, a.jsx)(o, { className: r, ...p, value: t }),
                  "%" === n && n,
                ],
              });
        },
        c = (e) => {
          let {
            label: t,
            Icon: n,
            children: i,
            className: s = "",
            borderT: o = !0,
            badge: c,
            size: d = "lg",
            ...u
          } = e;
          return (0, a.jsxs)("div", {
            className: (0, l.cn)(
              "py-1",
              o && [
                "border-t border-gray-30",
                "base" === d && "pt-2",
                "lg" === d && "pt-3",
              ],
              c && "relative",
              s
            ),
            children: [
              (0, a.jsxs)("div", {
                className: "flex justify-between pr-2",
                children: [
                  (0, a.jsxs)("label", {
                    className: (0, l.cn)(
                      "icon-text mb-2 flex items-center gap-1.5 text-gray-60",
                      "sm" === d && "mb-0 text-xs",
                      "base" === d && "mb-1 text-sm",
                      "lg" === d && "text-base"
                    ),
                    children: [
                      n &&
                        (0, a.jsx)("div", {
                          children: (0, a.jsx)(n, {
                            className: (0, l.cn)(
                              "xs" === d && "size-icon-xs",
                              "sm" === d && "size-icon-xs",
                              "base" === d && "size-icon-sm",
                              "lg" === d && "size-icon-md"
                            ),
                          }),
                        }),
                      (0, a.jsx)("div", {
                        className: "text-[16px]",
                        children: t,
                      }),
                    ],
                  }),
                  c,
                ],
              }),
              i || (0, a.jsx)(r, { size: d, value: u.value, ...u }),
            ],
          });
        };
    },
    54213: function (e, t, n) {
      n.d(t, {
        m: function () {
          return i;
        },
      });
      var a = n(15039),
        l = n(95599);
      let i = () => {
        let [e, t] = (0, a.useState)(!1),
          [n, i] = (0, l.Z)(),
          s = (0, a.useRef)(null);
        return [
          e,
          (0, a.useCallback)(
            (e) => {
              clearTimeout(s.current),
                i(e),
                t(!0),
                (s.current = setTimeout(() => {
                  t(!1);
                }, 1e3));
            },
            [i]
          ),
        ];
      };
    },
    81314: function (e, t, n) {
      n.d(t, {
        Av: function () {
          return o;
        },
        dD: function () {
          return s;
        },
        rx: function () {
          return r;
        },
      });
      var a = n(15039);
      let l = !1,
        i = (e) => {
          let [t, n] = (0, a.useState)(() =>
              l ? window.innerWidth <= e : void 0
            ),
            i = (0, a.useRef)(t);
          i.current = t;
          let s = (0, a.useCallback)((e) => {
            e.matches ? n(!0) : n(!1);
          }, []);
          return (
            (0, a.useEffect)(() => {
              void 0 === i.current && n(window.innerWidth <= e), (l = !0);
              let t = window.matchMedia("(max-width: ".concat(e, "px)"));
              return (
                t.addListener(s), t.matches && n(!0), () => t.removeListener(s)
              );
            }, [s, e]),
            t
          );
        },
        s = () => i(600),
        o = () => i(960),
        r = () => i(768);
      t.ZP = i;
    },
    42482: function (e, t, n) {
      n.d(t, {
        G: function () {
          return s;
        },
        m: function () {
          return i;
        },
      });
      var a = n(23987),
        l = n(15039);
      let i = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1e3,
            t = arguments.length > 1 ? arguments[1] : void 0,
            [n, a] = (0, l.useState)(new Date());
          return (
            (0, l.useEffect)(() => {
              let n = setInterval(() => {
                let e = new Date();
                t && e > t && clearInterval(n), a(e);
              }, e);
              return () => clearInterval(n);
            }),
            n
          );
        },
        s = (e) => {
          let [t, n] = (0, l.useState)((0, a.R)(new Date(), e));
          return (
            (0, l.useEffect)(() => {
              let l;
              if (!t && !(0, a.R)(new Date(), e)) return;
              let i = () => {
                let t =
                  (null == e ? void 0 : e.getTime()) - new Date().getTime();
                if (!(0, a.R)(new Date(), e)) {
                  n(!1);
                  return;
                }
                n(!0), (l = setTimeout(i, Math.min(t, 1728e6)));
              };
              return i(), () => clearTimeout(l);
            }, [null == e ? void 0 : e.getTime()]),
            t
          );
        };
    },
    55482: function (e, t, n) {
      n.d(t, {
        G: function () {
          return o;
        },
      });
      var a = n(91610),
        l = n(15039),
        i = n(91873),
        s = n(13984);
      function o(e) {
        let { contracts: t, watch: n, ...o } = e,
          { data: r, ...c } = (0, i.N)({
            allowFailure: !0,
            contracts: t,
            ...o,
          }),
          { data: d } = (0, s.O)({ watch: n });
        (0, l.useEffect)(() => {
          c.refetch();
        }, [d, c.refetch]);
        let u = (0, l.useMemo)(
          () => (c.isLoading ? null : (0, a.X)(t, r)),
          [t, r, c.isLoading]
        );
        return { ...c, data: u };
      }
    },
    26871: function (e, t, n) {
      n.d(t, {
        qF: function () {
          return u;
        },
      });
      var a = n(13359),
        l = n.n(a),
        i = n(69239),
        s = n.n(i),
        o = n(81345),
        r = n.n(o),
        c = n(79173);
      let d = () => Math.floor(Math.random() * Date.now()),
        u = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
          if (!e) return null;
          let a = e.toString(),
            { width: i = 200, height: o = 200, startColor: u = null } = t || {},
            x = r()(a),
            h = s()(x % 360, 1, 0.5),
            m = u ? f(u) : (0, c.U)(a) ? f(p(a, "hex")) : null,
            g = l()(h[0][0], h[0][1], h[0][2]),
            v = l()(h[1][0], h[1][1], h[1][2]),
            b = m
              ? (function (e) {
                  let [t, n, a] = e.split(", ").map(parseFloat),
                    l = a / 100,
                    i = (n / 100) * Math.min(l, 1 - l),
                    s = (e) => {
                      let n = (e + t / 30) % 12;
                      return l - i * Math.max(Math.min(n - 3, 9 - n, 1), -1);
                    },
                    o = Math.round(255 * s(0)),
                    r = Math.round(255 * s(8)),
                    c = Math.round(255 * s(4));
                  return "rgb(".concat(o, ", ").concat(r, ", ").concat(c, ")");
                })(m)
              : "rgb(".concat(g[0], ", ").concat(g[1], ", ").concat(g[2], ")"),
            j = "rgb(".concat(v[0], ", ").concat(v[1], ", ").concat(v[2], ")"),
            y = d(),
            w = '<?xml version="1.0" encoding="UTF-8"?>\n<svg '
              .concat(i ? 'width="'.concat(i, 'px"') : "", " ")
              .concat(
                o ? 'height="'.concat(o, 'px"') : "",
                ' viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="'
              )
              .concat(y, '">\n      <stop stop-color="')
              .concat(b, '" offset="0%"></stop>\n      <stop stop-color="')
              .concat(
                j,
                '" offset="100%"></stop>\n    </linearGradient>\n  </defs>\n  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <rect id="Rectangle" fill="url(#'
              )
              .concat(
                y,
                ')" x="0" y="0" width="80" height="80"></rect>\n  </g>\n</svg>'
              );
          return n ? "data:image/svg+xml;base64,".concat(btoa(w)) : w;
        },
        p = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "hsl";
          return "hex" === t
            ? "#".concat(null == e ? void 0 : e.slice(2, 8))
            : f("#".concat(null == e ? void 0 : e.slice(2, 8)), !0);
        };
      function f(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (!e) return null;
        if (e.startsWith("#")) {
          let n = e.slice(1);
          if (3 === n.length) {
            let t = n[0],
              a = n[1],
              l = n[2];
            e = "#".concat(t).concat(t).concat(a).concat(a).concat(l).concat(l);
          }
          let a = parseInt(e.slice(1, 3), 16) / 255,
            l = parseInt(e.slice(3, 5), 16) / 255,
            i = parseInt(e.slice(5, 7), 16) / 255,
            s = Math.max(a, l, i),
            o = Math.min(a, l, i),
            r = (s + o) / 2;
          t && r < 0.5 && (r = 0.5);
          let c = 0,
            d = 0;
          if (s !== o) {
            let e = s - o;
            switch (((d = r > 0.5 ? e / (2 - s - o) : e / (s + o)), s)) {
              case a:
                c = (l - i) / e + (l < i ? 6 : 0);
                break;
              case l:
                c = (i - a) / e + 2;
                break;
              case i:
                c = (a - l) / e + 4;
            }
            c /= 6;
          }
          return ""
            .concat(360 * c, ", ")
            .concat(100 * d, "%, ")
            .concat(100 * r, "%");
        }
        if (e.startsWith("rgb")) {
          let n = e
              .slice(4, -1)
              .split(",")
              .map((e) => parseInt(e, 10)),
            a = n[0] / 255,
            l = n[1] / 255,
            i = n[2] / 255,
            s = Math.max(a, l, i),
            o = Math.min(a, l, i),
            r = 0,
            c = 0,
            d = (s + o) / 2;
          if ((t && d < 0.5 && (d = 0.5), s !== o)) {
            let e = s - o;
            switch (((c = d > 0.5 ? e / (2 - s - o) : e / (s + o)), s)) {
              case a:
                r = (l - i) / e + (l < i ? 6 : 0);
                break;
              case l:
                r = (i - a) / e + 2;
                break;
              case i:
                r = (a - l) / e + 4;
            }
            r /= 6;
          }
          return ""
            .concat(360 * r, ", ")
            .concat(100 * c, "%, ")
            .concat(100 * d, "%");
        }
        return e.startsWith("hsl")
          ? e
              .slice(4, -1)
              .split(",")
              .map((e, n) =>
                t && 2 === n && 50 > parseInt(e, 10) ? "50%" : parseInt(e, 10)
              )
              .join(", ")
          : e;
      }
    },
    36013: function (e, t, n) {
      n.d(t, {
        HI: function () {
          return g;
        },
        O0: function () {
          return f;
        },
        V3: function () {
          return x;
        },
        ZD: function () {
          return m;
        },
        kh: function () {
          return p;
        },
        s4: function () {
          return h;
        },
      });
      var a = n(48213),
        l = n(57214),
        i = n(13027),
        s = n(33731),
        o = n(5781),
        r = n(12618),
        c = n(23123),
        d = n(18507),
        u = n(67934);
      let p = {
          [a.R.id]: "https://etherscan.io",
          [l.F.id]: "https://sepolia.etherscan.io",
          [i.y.id]: "https://arbiscan.io",
          [s.Z.id]: "https://sepolia.arbiscan.io",
          [o.A.id]: "https://blastscan.io",
          [r.d.id]: "https://sepolia.blastscan.io",
          [c.u.id]: "https://basescan.org",
          [d.L.id]: "https://sepolia.basescan.org",
          [u.c.id]: "https://eth95.dev",
        },
        f = {
          [a.R.id]: "Etherscan",
          [l.F.id]: "Etherscan Sepolia",
          [o.A.id]: "Blastscan",
          [r.d.id]: "Blastscan Sepolia",
          [c.u.id]: "Basescan",
          [d.L.id]: "Basescan Sepolia",
          [i.y.id]: "Arbitrum",
          [s.Z.id]: "Arbitrum Sepolia",
          [u.c.id]: "Eth95",
        },
        x = {
          [a.R.id]: "eth",
          [l.F.id]: "",
          [u.c.id]: "",
          [i.y.id]: "arbitrum",
          [s.Z.id]: "",
          [o.A.id]: "blastmainnet",
          [r.d.id]: "blast",
          [c.u.id]: "base",
          [d.L.id]: "",
        },
        h = {
          [a.R.id]: "ethereum",
          [l.F.id]: "",
          [i.y.id]: "arbitrum",
          [s.Z.id]: "",
          [o.A.id]: "blast",
          [r.d.id]: "",
          [c.u.id]: "base",
          [d.L.id]: "",
          [u.c.id]: "",
        },
        m = {
          [a.R.id]: "eth",
          [l.F.id]: "sepolia-testnet",
          [i.y.id]: "arbitrum",
          [o.A.id]: "blast",
          [r.d.id]: "",
          [c.u.id]: "base",
          [d.L.id]: "base",
          [u.c.id]: "",
        };
      function g(e, t, n) {
        return null === e
          ? void 0
          : h[e] && t
          ? "https://dexscreener.com/"
              .concat(h[e], "/")
              .concat(t, "?embed=1&theme=dark&trades=0&info=0")
          : x[e] && n
          ? "https://www.defined.fi/"
              .concat(x[e], "/")
              .concat(
                n,
                "?embedded=1&hideTxTable=1&hideSidebar=1&embedColorMode=HEX_SCREAMER"
              )
          : null;
      }
    },
    32905: function (e, t, n) {
      n.d(t, {
        T: function () {
          return a;
        },
        a: function () {
          return l;
        },
      });
      let a = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 8,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "•";
          if (!e) return;
          if (e.length <= t) return e;
          let a = Array(Math.min(3, e.length - t))
            .fill(n)
            .join("");
          return "0x"
            .concat(e.substring(2, Math.ceil(t / 2) + 2))
            .concat(a)
            .concat(e.substring(e.length - Math.floor(t / 2)));
        },
        l = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 64;
          return e
            ? e.length > t && t > 2
              ? "".concat(e.slice(0, t - 1).trim(), "…")
              : e
            : null;
        };
    },
    74734: function (e, t, n) {
      n.d(t, {
        g: function () {
          return a;
        },
      });
      let a = function () {
        let { delay: e = 0, duration: t = 0.06 } =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return {
          transition: { duration: t, type: "tween", delay: e },
          animate: { opacity: 1, scale: 1 },
          exit: { scale: 0.9, opacity: 0 },
          initial: { opacity: 0, scale: 0.9 },
        };
      };
    },
    40731: function (e, t, n) {
      n.d(t, {
        p: function () {
          return a.py;
        },
      });
      var a = n(20886);
    },
    61722: function (e, t, n) {
      n.d(t, {
        s3: function () {
          return a;
        },
      }),
        n(73671),
        n(32013),
        n(9755),
        n(67934),
        n(48213),
        n(57214),
        n(12618),
        n(5781),
        n(18507),
        n(23123),
        n(33731),
        n(13027),
        n(26182);
      let a = (e) => null;
    },
    91610: function (e, t, n) {
      function a(e, t) {
        return t
          ? e.reduce(
              (e, n, a) => {
                let l = "string" == typeof n ? n : n.alias || n.functionName;
                return (null == t ? void 0 : t[a]) === void 0
                  ? e
                  : {
                      [l]: (function (e, t) {
                        try {
                          let { parseAs: n } = t,
                            { result: a, error: l } = e,
                            i = null != a ? a : e;
                          if (l)
                            return (
                              console.log(
                                "Couldn't read ".concat(
                                  t.functionName || t,
                                  ": "
                                ),
                                e
                              ),
                              null
                            );
                          switch (!0) {
                            case "function" == typeof n:
                              i = n(e);
                              break;
                            case "number" === n:
                              i = "number" == typeof a ? a : Number(a);
                              break;
                            case "date" === n:
                              if (0 === Number(a)) {
                                i = null;
                                return;
                              }
                              i = new Date(1e3 * Number(a));
                          }
                          return i;
                        } catch (n) {
                          console.log({ getter: t, value: e, err: n });
                        }
                      })(t[a], n),
                      ...e,
                    };
              },
              { __raw: t }
            )
          : null;
      }
      n.d(t, {
        V: function () {
          return l;
        },
        X: function () {
          return a;
        },
      });
      let l = (e, t) => {
        let { address: n, chainId: a, abi: l } = t;
        return e
          .filter(Boolean)
          .map((e) =>
            "string" == typeof e
              ? { functionName: e, address: n, abi: l, chainId: a }
              : { address: n, abi: l, chainId: a, ...e }
          );
      };
    },
    60808: function (e, t, n) {
      n.d(t, {
        Ob: function () {
          return l;
        },
        _d: function () {
          return a;
        },
        pC: function () {
          return i;
        },
      });
      let a = (e) => (null === e ? null : e / 100),
        l = (e, t) =>
          null === t || null === e || void 0 === t || void 0 === e
            ? null
            : (e * BigInt(t) * BigInt(1e9)) / BigInt(1e4) / BigInt(1e9),
        i = (e, t) => (t ? (e * BigInt(1e4)) / t : BigInt(0));
    },
  },
]);
