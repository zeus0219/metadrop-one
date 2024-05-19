(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5723],
  {
    14101: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 90717));
    },
    30156: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return o;
        },
      });
      var a = n(2067),
        r = n(96560);
      let s = (e) => {
        let { title: t, subtitle: n, className: s = "" } = e;
        return (0, a.jsxs)("div", {
          className: (0, r.cn)("px-4", s),
          children: [
            t &&
              (0, a.jsx)("h1", {
                className: "text-lg leading-normal text-gray-95",
                children: t,
              }),
            n &&
              (0, a.jsx)("p", {
                className: "text-sm text-gray-60",
                children: n,
              }),
          ],
        });
      };
      var l = n(15955),
        i = n(11107);
      function o(e) {
        let {
          children: t,
          className: n,
          title: o,
          subtitle: d,
          childrenClassName: c,
          tipIcon: u,
          tipTitle: p,
          tipText: x,
          tipURL: m,
          tipGuideBar: h,
        } = e;
        return (0, a.jsxs)("section", {
          className: (0, r.cn)(
            "form-section w-full gap-y-4 md:gap-y-6 grid-base-3-cols",
            n
          ),
          children: [
            o &&
              (0, a.jsx)("div", {
                className: "col-start-2 flex flex-col gap-4 md:px-4 pt-4",
                children: (0, a.jsx)(s, {
                  title: o,
                  subtitle: d,
                  className: "",
                }),
              }),
            (0, a.jsx)("div", {
              className: (0, r.cn)("col-start-2 flex flex-col gap-4", c),
              children: t,
            }),
            (0, a.jsx)("div", {
              className: "col-start-3 h-full p-4",
              children:
                (p || x) &&
                (0, a.jsx)(i.U, {
                  title: p,
                  Icon: u,
                  text: x,
                  buttonProps: m
                    ? {
                        href: m,
                        rightIcon: (0, a.jsx)(l.ArrowTopRightLinkIcon, {}),
                        children: "Learn More",
                      }
                    : void 0,
                  guidebar: h,
                }),
            }),
          ],
        });
      }
    },
    11107: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return l;
        },
      });
      var a = n(2067),
        r = n(2384),
        s = n(96560);
      let l = (e) => {
        let {
          title: t,
          Icon: n,
          text: l,
          buttonProps: i,
          guidebar: o,
          className: d,
        } = e;
        return (0, a.jsxs)("div", {
          className: (0, s.cn)(
            "relative hidden h-full gap-2 self-baseline px-2 md:flex",
            "max-w-[11.75rem]",
            d
          ),
          children: [
            o &&
              (0, a.jsx)("div", {
                className:
                  "bg-striped-diagonal striped-sm right-0 top-0 inline-block h-full w-2 shrink-0 rounded-full text-highlight",
              }),
            (0, a.jsx)("div", {
              children: (0, a.jsxs)("div", {
                className: "sticky top-20 mt-0 inline-flex flex-col gap-1",
                children: [
                  void 0 !== n &&
                    (0, a.jsx)(n, {
                      className: "h-6 min-h-[1.5rem] w-6 text-highlight",
                    }),
                  t,
                  l &&
                    (0, a.jsx)("p", {
                      className: "text-pretty text-sm text-gray-60",
                      children: l,
                    }),
                  i &&
                    (0, a.jsx)(r.default, {
                      type: "ghost",
                      ...i,
                      className: (0, s.cn)(
                        "-translate-x-2 self-baseline justify-self-start !text-highlight",
                        i.className
                      ),
                    }),
                ],
              }),
            }),
          ],
        });
      };
    },
    60107: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = n(69436),
        r = n(11664);
      function s(e, t) {
        return (0, r.ZP)(
          e ? "/".concat(t ? "public" : "v1", "/coins/").concat(e) : null,
          (e) => (0, a.Z)(e, { redirectToLogin: !0 })
        );
      }
    },
    56213: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return l;
        },
      });
      var a = n(30045),
        r = n(74020);
      let s = [
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
        l = () => {
          let {
            data: e,
            isError: t,
            isLoading: n,
            refetch: l,
          } = (0, r.u)({
            address: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
            abi: s,
            chainId: 1,
            functionName: "latestRoundData",
          });
          return {
            data: e ? Number((0, a.b)(e[1], 8)) : null,
            refetch: l,
            isError: t,
            isLoading: n,
          };
        };
    },
    44544: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = n(69436),
        r = n(60171),
        s = n(15039),
        l = n(83297),
        i = n(11664);
      function o(e, t) {
        let n = (0, r.useRouter)(),
          o = (0, i.ZP)("/auth/user", async (t) =>
            (0, a.Z)(t, { redirectToLogin: e, throwOnHTTPError: !1 })
          ),
          { data: d, isLoading: c } = o;
        return (
          (0, s.useEffect)(() => {
            var e;
            t &&
              !c &&
              (null == d ||
                !d.user ||
                (null == d
                  ? void 0
                  : null === (e = d.user) || void 0 === e
                  ? void 0
                  : e.isMetadropTeam) ||
                (console.log("redirecting"),
                l.A.error("You must be metadrop to visit this page"),
                n.replace("/app/coins")));
          }, [c, null == d ? void 0 : d.user, t, n]),
          o
        );
      }
    },
    37788: function (e, t, n) {
      "use strict";
      function a(e) {
        let { totalSupply: t, lpSupply: n, ethPrice: a, fundingEth: r } = e,
          s = a && r && n ? (r * a) / n : null,
          l = s && t ? parseFloat((s * t).toFixed(2)) : null;
        return { tokenPrice: s, marketCap: l };
      }
      n.d(t, {
        V: function () {
          return a;
        },
      });
    },
    62678: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return i;
        },
      });
      var a = n(60107),
        r = n(3476),
        s = n(60171),
        l = n(15039);
      let i = () => {
        let e = (0, s.useParams)().coinId,
          { data: t } = (0, a.Z)(e),
          [n, i] = (0, l.useState)({}),
          [o, d] = (0, l.useState)({}),
          [c, u] = (0, l.useState)(0);
        return (
          (0, l.useEffect)(() => {
            let n = async () => {
              let n;
              let a = (0, r.dZ)({ id: e }),
                s = a.cast(null == t ? void 0 : t.coin);
              try {
                await a.validate(s, {
                  abortEarly: !1,
                  context: { isFinal: !0, unit: "wei" },
                });
              } catch (e) {
                "ValidationError" === e.name
                  ? (n = e.inner.reduce((e, t) => {
                      let { path: n, ...a } = t;
                      return { ...e, [n]: a };
                    }, {}))
                  : console.log("Error validating coin:", e);
              }
              let { fields: l } = a.describe({
                  context: { isFinal: !0 },
                  value: s,
                }),
                o =
                  Object.entries(l).filter((e) => {
                    let [t, { optional: n }] = e;
                    return n;
                  }).length - 0;
              d(n), i(l), u(o);
            };
            (null == t ? void 0 : t.coin) && n();
          }, [null == t ? void 0 : t.coin, e]),
          {
            requiredCount: c,
            errorsCount: o ? Object.keys(o).length : 0,
            errors: o,
            fields: n,
          }
        );
      };
    },
    90717: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return ey;
          },
        });
      var a = n(2067),
        r = n(68020),
        s = n(60107),
        l = n(2384),
        i = n(69722),
        o = n(32600),
        d = n(637),
        c = n(28967),
        u = n(15039);
      let p = (e) => {
        let {
          buttons: t,
          title: n,
          linkLabel: r,
          path: s,
          truncatedPath: p,
          open: x,
        } = e;
        return (
          (0, u.useEffect)(() => {
            let e = document.body.style.overflow || "";
            return (
              x
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = e),
              () => {
                document.body.style.overflow = e;
              }
            );
          }, [x]),
          (0, a.jsx)(d.M, {
            children:
              x &&
              (0, a.jsx)(c.E.div, {
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                className:
                  "fixed inset-0 z-[100] flex max-h-screen items-center justify-center overflow-y-auto bg-gray-10 py-6 text-gray-95",
                children: (0, a.jsxs)("div", {
                  className: "mx-auto max-w-xl text-center",
                  children: [
                    (0, a.jsx)(i.R, {
                      className: "mx-auto",
                      seed: "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199",
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-2 px-8 py-4",
                      children: [
                        (0, a.jsx)("h1", {
                          className: "font-wide text-2xl font-bold",
                          children: n,
                        }),
                        (0, a.jsx)("div", { children: r }),
                        (0, a.jsx)(o.I, {
                          className: "mx-auto self-baseline",
                          fullUrl: "".concat(window.location.origin).concat(s),
                          truncatedUrl:
                            p && "".concat(window.location.origin).concat(p),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "mx-auto mt-4 inline-flex gap-2",
                      children: t.map((e, t) => {
                        let { children: n, ...r } = e;
                        return (0, a.jsx)(
                          l.default,
                          { ...r, children: n },
                          "success-btn-".concat(t)
                        );
                      }),
                    }),
                  ],
                }),
              }),
          })
        );
      };
      var x = n(60171),
        m = n(52464),
        h = n.n(m),
        g = n(72598),
        f = n(37397),
        y = n(15955),
        j = (e) => {
          let { progress: t, ...n } = e,
            r = 2 * Math.PI * 45;
          return (0, a.jsxs)("svg", {
            width: "100",
            height: "100",
            viewBox: "0 0 100 100",
            ...n,
            children: [
              (0, a.jsx)("circle", {
                cx: "50",
                cy: "50",
                r: 45,
                stroke: "var(--gray-30)",
                strokeWidth: "8",
                fill: "none",
              }),
              (0, a.jsx)(c.E.circle, {
                cx: "50",
                cy: "50",
                r: 45,
                stroke: "hsl(var(--highlight-base))",
                strokeWidth: "8",
                fill: "none",
                strokeDasharray: r,
                strokeDashoffset: "0 1",
                transform: "rotate(-90 50 50)",
                animate: { strokeDashoffset: Math.floor(r * (1 - t)) },
              }),
            ],
          });
        },
        v = n(48259),
        b = n(43413),
        N = n(96560),
        T = n(69436),
        w = n(65031),
        E = n(77297),
        P = n(30156),
        I = n(56213),
        S = n(44544),
        k = n(37788),
        L = n(25704),
        C = n(56837),
        M = n(36565),
        F = n(60808),
        D = n(20886),
        W = n(25463),
        B = n(76859),
        A = n(27106),
        R = n(93961),
        V = n(66616),
        O = n(52796),
        Z = n(83165);
      let H = (e) => {
          var t;
          let n = null,
            a = null,
            r = null;
          return (
            e.sellTaxEnabled || (n = 0n),
            e.buyTaxEnabled || (a = 0n),
            e.sellTaxEnabled || e.buyTaxEnabled || (r = R.D),
            [
              null != a ? a : e.projectBuyTaxBasisPoints,
              null != n ? n : e.projectSellTaxBasisPoints,
              Z.GG,
              null != a ? a : e.metadropBuyTaxBasisPoints,
              null != n ? n : e.metadropSellTaxBasisPoints,
              null !== (t = e.metadropTaxPeriodInDays) && void 0 !== t ? t : 0,
              null != r ? r : e.projectTaxRecipient,
              e.metadropTaxRecipient,
              null != a ? a : e.metadropMinBuyTaxBasisPoints,
              null != n ? n : e.metadropMinSellTaxBasisPoints,
              null != a ? a : e.metadropBuyTaxProportionBasisPoints,
              null != n ? n : e.metadropSellTaxProportionBasisPoints,
            ]
          );
        },
        q = (e, t) => {
          let n = Z.py[e.chainId];
          return [
            e.name,
            e.symbol,
            n.metadropTreasury,
            t,
            n.uniswapV2Router.address,
            Z.py[e.chainId].sablierV2LockupLinear.address,
            e.supplyWei,
            Z.py[e.chainId].deploymentFee,
            e.supplyRecipients.map((e) => {
              let { address: t } = e;
              return t;
            }),
            e.supplyRecipients.map((e) => {
              let { amountWei: t } = e;
              return t;
            }),
          ];
        },
        U = (e) => [e],
        _ = (e) => {
          let t = 0n,
            n = 0n;
          return (
            e.autoBurnEnabled &&
              !e.driPoolEnabled &&
              ((n = Z.aK.basisPoints), (t = Z.aK.durationInBlocks)),
            [t, n]
          );
        },
        G = (e) => {
          let t = 0n,
            n = 0n;
          return (
            !e.driPoolEnabled &&
              (e.maxTokensPerTxnEnabled &&
                (t = BigInt(e.maxTokensPerTransactionWei)),
              e.maxTokensPerWalletEnabled &&
                (n = BigInt(e.maxTokensPerWalletWei))),
            [e.limitProtectionDurationInSeconds, t, n]
          );
        },
        z = (e, t) => {
          var n, a, r, s;
          let l, i;
          if (e.poolStartType === B.PoolStart.MANUAL) (l = Z.gr), (i = 0);
          else if (e.poolStartType === B.PoolStart.ON_LAUNCH)
            (l = 0), (i = 60 * e.poolDurationInMinutes);
          else if (e.poolStartType === B.PoolStart.FIXED_DATE) {
            if (!e.poolStartDate)
              throw Error("Pool start date must be set for FIXED_DATE pool");
            (l = Math.floor(e.poolStartDate.getTime() / 1e3)),
              (i = Math.floor(
                (0, A.Z)(e.poolStartDate, e.poolDurationInMinutes).getTime() /
                  1e3
              ));
          } else
            throw Error("Invalid pool start type: ".concat(e.poolStartType));
          return [
            1n,
            e.lpSupply,
            l,
            i,
            e.poolVestingInSeconds,
            null !== (n = e.poolMaxETHWei) && void 0 !== n ? n : 0n,
            null !== (a = e.poolPerAddressCapWei) && void 0 !== a ? a : 0n,
            null !== (r = e.poolMinWei) && void 0 !== r ? r : 0n,
            e.poolPerTxnMinWei,
            Z.Ns.fairLaunchBasisPoints,
            e.poolMaxInitialBuyWei,
            null !== (s = e.poolMaxInitialLiquidityWei) && void 0 !== s
              ? s
              : 0n,
            Z.py[e.chainId].metadropTreasury,
            t,
          ];
        },
        X = (e) => Z.py[e.chainId].dripoolFactory.address,
        Y = (e, t) => {
          var n;
          let a =
              Z.py[e.chainId].deploymentFee +
              BigInt(null !== (n = e.lpFundingWei) && void 0 !== n ? n : "0"),
            {
              abi: r,
              bytecode: s,
              contractName: l,
              verificationCode: i,
            } = $(e);
          return {
            abi: r,
            bytecode: s,
            args: K(e, t),
            contractName: l,
            verificationCode: i,
            value: a,
          };
        },
        K = (e, t) => {
          let n = [q(e, t), U(t), _(e), G(e), H(e)];
          return e.driPoolEnabled ? [...n, z(e, t), X(e), e.lpLockupInDays] : n;
        },
        $ = (e) => {
          let t, n, a, r;
          e.driPoolEnabled
            ? ((t = W.BT),
              (n = W.gP.toString()),
              (a = "MetadropERC20FairLaunchAdapter"),
              (r = "MetadropERC20FairLaunchAdapterVerificationCode.sol"))
            : ((t = W.gH),
              (n = W.Ai.toString()),
              (a = "MetadropERC20"),
              (r = "MetadropERC20VerificationCode.sol"));
          let s = (0, V.w)((0, O.O0)(e.id)),
            l = s.startsWith("0x") ? s.slice(2) : s;
          return {
            abi: t,
            bytecode: (n = (n = n.replace(
              "4d45544144524f504d45544144524f504d45544144524f504d45544144524f50",
              l.toLowerCase()
            )).startsWith("0x")
              ? n.slice(2)
              : n),
            contractName: a,
            verificationCode: r,
          };
        };
      var J = n(20413),
        Q = n(22064),
        ee = n(67381),
        et = n.n(ee),
        en = n(71335),
        ea = n.n(en),
        er = n(80276),
        es = n.n(er),
        el = n(83297),
        ei = n(51123),
        eo = n(91818),
        ed = n(78100),
        ec = n(13506),
        eu = n(62678),
        ep = n(21704),
        ex = (e) => {
          var t, n, l;
          let {
              coinId: i,
              gasEstimateSWR: o,
              lockerFee: p,
              deploymentFee: x,
              isLoading: m,
              totalValue: h = 0n,
            } = e,
            { data: g } = (0, S.Z)(!0),
            f = null == g ? void 0 : g.user,
            { data: j } = (0, s.Z)(i),
            v = null == j ? void 0 : j.coin.chainId,
            b = (0, u.useRef)(m),
            [T, w] = (0, u.useState)(!1);
          (0, u.useEffect)(() => {
            !m && b.current && w(!0), (b.current = m);
          }, [m]);
          let P = (0, ep.K)({
              chainId: v || void 0,
              address: null == f ? void 0 : f.ethAddress,
            }),
            I = [
              0n !== x && { label: "Metadrop service fee", value: x },
              (null == j
                ? void 0
                : null === (t = j.coin) || void 0 === t
                ? void 0
                : t.driPoolEnabled) && {
                label: "ETH required for liquidity pool",
                value: j.coin.lpFundingWei
                  ? (0, E.uf)(j.coin.lpFundingWei, { isWei: !0 })
                  : "Not set",
              },
            ].filter(Boolean),
            k =
              ((null === (n = P.data) || void 0 === n ? void 0 : n.value) ||
                0) >=
              h + (o.data || 0n);
          return (0, a.jsxs)("div", {
            children: [
              (0, a.jsx)("div", {
                className: (0, N.cn)(
                  " rounded-md border border-gray-20",
                  "transition-all",
                  m &&
                    !T &&
                    "grid h-[200px] place-content-center place-items-center"
                ),
                children:
                  m && !T
                    ? (0, a.jsx)(r.Z, {})
                    : (0, a.jsx)(d.M, {
                        children: (0, a.jsxs)(c.E.div, {
                          initial: { maxHeight: 100, y: -4, opacity: 0 },
                          animate: { maxHeight: 350, y: 0, opacity: 1 },
                          transition: { stiffness: 100, damping: 20 },
                          children: [
                            I.map((e, t) =>
                              e
                                ? (0, a.jsxs)(
                                    "div",
                                    {
                                      className: (0, N.cn)(
                                        "flex items-center gap-2  pl-2 pr-4 text-sm last:border-b-0",
                                        "py-[7px]"
                                      ),
                                      children: [
                                        (0, a.jsx)("div", {
                                          className:
                                            "shrink rounded-full bg-gray-30 px-3 py-1",
                                          children: (0, a.jsx)(y.StarIcon, {
                                            className: "text-gray-79",
                                          }),
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "grow",
                                          children: e.label,
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "flex items-center gap-1 font-wide tabular-nums",
                                          children: [
                                            "string" != typeof e.value &&
                                              (0, a.jsx)(y.ETHIcon, {
                                                className: "-translate-y-[2px]",
                                              }),
                                            e.value
                                              ? "string" == typeof e.value
                                                ? e.value
                                                : (0, E.uf)(e.value, {
                                                    isWei: !0,
                                                  })
                                              : (0, a.jsx)(r.Z, {
                                                  className: "h-4 w-4",
                                                }),
                                          ],
                                        }),
                                      ],
                                    },
                                    e.label
                                  )
                                : null
                            ),
                            (0, a.jsxs)("div", {
                              className: (0, N.cn)(
                                "text-md flex items-center gap-2 border-t border-gray-20 py-[7px] pl-2 pr-4",
                                !k && "text-negative"
                              ),
                              children: [
                                (0, a.jsx)("div", {
                                  className: "grow pl-3",
                                  children: !k && "Not enough ETH",
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "flex items-center gap-1 font-wide tabular-nums",
                                  children: [
                                    (0, a.jsx)(y.ETHIcon, {
                                      className: "-translate-y-[2px]",
                                    }),
                                    (0, E.uf)(h, { isWei: !0 }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "mt-3 flex items-baseline justify-end gap-1 pr-4 text-sm",
                children: [
                  (0, a.jsx)("span", {
                    className: "mr-1 text-gray-60",
                    children: "Balance ",
                  }),
                  (0, a.jsx)(y.ETHIcon, { className: "translate-y-[2px]" }),
                  (0, a.jsx)("span", {
                    className: "font-wide tabular-nums",
                    children: parseFloat(
                      (null === (l = P.data) || void 0 === l
                        ? void 0
                        : l.formatted) || ""
                    ).toLocaleString(),
                  }),
                ],
              }),
            ],
          });
        };
      let em = (e) => {
        let { coin: t, setIsLaunched: n } = e,
          { mutate: r } = (0, s.Z)(t.id),
          { data: l } = (0, S.Z)(),
          { address: i } = (0, eo.m)(),
          { data: o } = (0, ed.p)({ chainId: t.chainId || void 0 }),
          {
            errorsCount: d,
            requiredCount: c,
            errors: p,
            fields: x,
          } = (0, eu.S)(),
          m = 0 === d,
          h = (0, u.useMemo)(() => p || {}, [p]),
          g = !C.Y,
          [v, w] = (0, u.useState)(!1),
          {
            gasEstimateSWR: E,
            isLoadingConfig: M,
            lockerFee: F,
            deploymentFee: W,
            totalValue: A,
          } = (0, u.useMemo)(() => {
            var e;
            let n =
              (null === (e = D.py[t.chainId || 1]) || void 0 === e
                ? void 0
                : e.deploymentFee) || 0n;
            return {
              gasEstimateSWR: { isLoading: !1, data: 0n },
              isLoadingConfig: !1,
              lockerFee: 0n,
              deploymentFee: n,
              totalValue:
                0n +
                n +
                (t.driPoolEnabled && t.lpFundingWei
                  ? BigInt(t.lpFundingWei)
                  : 0n),
            };
          }, [t.chainId]),
          R = (0, u.useRef)(t.deployStatus);
        (0, u.useEffect)(() => {
          R.current = t.deployStatus;
        }, [t.deployStatus]),
          (0, ec.t)();
        let V = (0, u.useCallback)(async () => {
            let e;
            if (
              (w(!0),
              (null == l ? void 0 : l.user.ethAddress) !== i ||
                t.ownerId !== (null == l ? void 0 : l.user.id))
            ) {
              window.alert("The coin belongs to another user.");
              return;
            }
            let { args: a, bytecode: s, abi: d, value: c } = Y(t, i);
            console.log("█ deployContract", {
              account: i,
              abi: d,
              bytecode: s,
              args: a,
              value: c,
            });
            let u = new Promise((l, u) => {
              !(async function () {
                let p;
                try {
                  (p = await (null == o
                    ? void 0
                    : o.deployContract({
                        account: i,
                        abi: d,
                        bytecode: s,
                        args: a,
                        value: c,
                      }))),
                    el.A.loading("Launching coin...", { id: e }),
                    await (0, T.Z)("/v1/coins/".concat(t.id, "/deployed"), {
                      method: "POST",
                      body: { transactionHash: p },
                    });
                } catch (e) {
                  w(!1),
                    /User denied transaction signature/.test(e.details) &&
                      u("Cancelled"),
                    u("Failed to deploy contract");
                }
                r();
                let x = setInterval(() => {
                  if (R.current === B.DeployStatus.DEPLOYED) {
                    clearInterval(x), w(!1), n(!0), l(null);
                    return;
                  }
                  if (R.current === B.DeployStatus.INVALID) {
                    clearInterval(x),
                      w(!1),
                      n(!1),
                      u(
                        "There was an issue with your coin, please contact support"
                      );
                    return;
                  }
                  r();
                }, 1e3);
              })();
            });
            e = el.A.promise(u, {
              loading: "Confirm transaction",
              success: "Coin launched!",
              error: (e) => e,
            });
          }, [null == l ? void 0 : l.user, o, i, t, W, n, r]),
          { data: O } = (0, I.x)(),
          { marketCap: Z, tokenPrice: H } = (0, u.useMemo)(() => {
            let { supply: e, lpSupply: n, lpFundingWei: a } = t;
            if (!e) return { marketCap: null, tokenPrice: null };
            let r = e ? Number.parseFloat(e.toString()) : null,
              s = n ? Number(n) : null,
              l = a ? Number.parseFloat((0, ei.d)(BigInt(a))) : null;
            return (0, k.V)({
              totalSupply: r,
              lpSupply: s,
              ethPrice: O,
              fundingEth: l,
            });
          }, [t, O]),
          [q, U] = (0, u.useReducer)((e, t) => ({ ...e, ...t }), {}),
          _ = (0, u.useMemo)(() => {
            var e;
            let { discord: t, coinImageURL: n, ...a } = x,
              r = Object.entries(
                null === (e = Object.entries(a)) || void 0 === e
                  ? void 0
                  : e.reduce((e, t) => {
                      var n;
                      let [a, r] = t,
                        { meta: s } = r;
                      if (null == s ? void 0 : s.metadropOnly) return e;
                      let l =
                        null !== (n = null == s ? void 0 : s.category) &&
                        void 0 !== n
                          ? n
                          : "Misc";
                      return (
                        e[l] ||
                          (e[l] = {
                            fields: {},
                            path: null == s ? void 0 : s.path,
                            order: null == s ? void 0 : s.order,
                          }),
                        (e[l].fields[a] = r),
                        e
                      );
                    }, {})
              )
                .map((e) => {
                  let [t, { fields: n, path: a, order: r }] = e,
                    s = Object.values(n).filter((e) => !e.optional).length,
                    l = Object.keys(n).reduce((e, t) => (h[t] ? e + 1 : e), 0);
                  return {
                    category: t,
                    fields: n,
                    path: a,
                    order: r,
                    requiredCount: s,
                    errorsCount: l,
                  };
                })
                .sort((e, t) => (e.order < t.order ? -1 : 1))
                .filter((e) => "Misc" !== e.category)
                .filter((e) => "Chain" !== e.category)
                .filter((e) => "Fair Launch Pool" !== e.category || g)
                .filter((e) => "Liquidity" !== e.category);
            return (
              U(
                r.reduce((e, t) => {
                  let { category: n, errorsCount: a } = t;
                  return { ...e, [n]: !0 };
                }, {})
              ),
              r
            );
          }, [h, g, x]),
          G = (0, u.useRef)(null),
          z = (0, u.useRef)(0);
        return (
          (0, u.useLayoutEffect)(() => {
            if (!G.current) return;
            let e = G.current.querySelectorAll("[data-label]");
            if (z.current > 0) {
              e.forEach((e) => {
                e.style.width = "".concat(z.current + 1, "px");
              });
              return;
            }
            e.forEach((e) => {
              let t = e.offsetWidth;
              t > z.current && (z.current = t);
            }),
              e.forEach((e) => {
                e.style.width = "".concat(z.current + 1, "px");
              });
          }, [_, q]),
          (0, a.jsx)(P.U, {
            title: "Ready to review?",
            subtitle:
              "Almost there! Track your coin builder progress and once finished you’re all good to launch.",
            children: (0, a.jsxs)("div", {
              ref: G,
              style: {
                "--joint-height": "20px",
                "--bg-color": "var(--gray-20)",
              },
              children: [
                (0, a.jsx)("div", {
                  className: "rounded-md bg-gray-20 p-2",
                  children: (0, a.jsxs)("div", {
                    className:
                      "flex items-center gap-2 rounded-sm bg-gray-10 p-2",
                    children: [
                      (0, a.jsx)("div", {
                        className: (0, N.cn)(
                          "grid aspect-square self-start rounded-2xs p-1",
                          "b-shadow-5 shadow-gray-40"
                        ),
                        children: (0, a.jsx)(y.CheckmarkIcon, {
                          className: (0, N.cn)(
                            "h-[28px] w-[28px]",
                            !d && "text-highlight",
                            d && "text-gray-20"
                          ),
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "grow pr-1",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex justify-between",
                            children: [
                              (0, a.jsx)("div", {
                                className: "ml-3 font-bold",
                                children: "Complete the coin builder",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "-mt-1 h-8 min-h-[1.5rem] w-8 rounded-full bg-gray-20 pl-[1px] pt-[1px]",
                                children: (0, a.jsx)(j, {
                                  className:
                                    "h-[calc(100%-3px)] w-[calc(100%-3px)] translate-x-[1px] translate-y-[1px]",
                                  progress: 1 - d / c,
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "mt-3 rounded-md border border-gray-20 text-sm",
                            children: _.map((e) => {
                              let {
                                category: n,
                                fields: r,
                                path: s,
                                requiredCount: l,
                                errorsCount: i,
                              } = e;
                              return (0, a.jsxs)(
                                L.fC,
                                {
                                  className:
                                    "border-b border-gray-20 px-2 py-1 last:border-b-0 ".concat(
                                      es()(n.toLowerCase()),
                                      "-category"
                                    ),
                                  open: q[n],
                                  onOpenChange: (e) => U({ [n]: e }),
                                  children: [
                                    (0, a.jsx)(L.xz, {
                                      className: "category-trigger w-full",
                                      children: (0, a.jsxs)("div", {
                                        className:
                                          "flex h-6 items-center gap-2",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className:
                                              " flex h-5 items-center rounded-full bg-gray-20 px-2 font-mono text-gray-70",
                                            children:
                                              0 === i
                                                ? (0, a.jsx)(
                                                    y.CheckmarkFilledIcon,
                                                    {}
                                                  )
                                                : (0, a.jsxs)("span", {
                                                    className:
                                                      "-translate-y-[1px] ",
                                                    children: [
                                                      l - i,
                                                      (0, a.jsx)("span", {
                                                        className:
                                                          "text-gray-40",
                                                        children: "/",
                                                      }),
                                                      l,
                                                    ],
                                                  }),
                                          }),
                                          (0, a.jsx)("span", {
                                            className: "grow text-left",
                                            children: n,
                                          }),
                                          q[n]
                                            ? (0, a.jsx)(y.LessIcon, {
                                                width: 24,
                                                height: 24,
                                                className: "text-highlight",
                                              })
                                            : (0, a.jsx)(y.MoreIcon, {
                                                width: 24,
                                                height: 24,
                                                className: "text-highlight",
                                              }),
                                        ],
                                      }),
                                    }),
                                    (0, a.jsxs)(L.VY, {
                                      className: "CollapsibleContent px-2 pr-1",
                                      children: [
                                        (0, a.jsx)("div", { className: "h-1" }),
                                        (0, a.jsx)("div", {
                                          className: (0, N.cn)(
                                            "actual-collapsible-content",
                                            "py-1 text-gray-85",
                                            "grid grid-cols-[max-content,auto] gap-x-2 gap-y-4"
                                          ),
                                          children: Object.entries(r).map(
                                            (e) => {
                                              var r, s;
                                              let [l, i] = e,
                                                o =
                                                  ("maxTokensPerWalletEnabled" ===
                                                    l ||
                                                    "maxTokensPerTxnEnabled" ===
                                                      l) &&
                                                  !0 === t[l],
                                                d =
                                                  ("maxTokensPerWalletPercent" ===
                                                    l &&
                                                    !1 ===
                                                      t.maxTokensPerWalletEnabled) ||
                                                  ("maxTokensPerTxnPercent" ===
                                                    l &&
                                                    !1 ===
                                                      t.maxTokensPerTxnEnabled),
                                                c = !0 === t[l],
                                                p =
                                                  "Liquidity" === n &&
                                                  "addLiquidityOnCreate" !==
                                                    l &&
                                                  !1 === t.addLiquidityOnCreate,
                                                x =
                                                  "burnLPTokens" === l &&
                                                  !1 === t[l],
                                                m =
                                                  ["lpLockupInDays"].includes(
                                                    l
                                                  ) && !0 === t.burnLPTokens,
                                                g = [
                                                  "twitterVerified",
                                                  "telegramVerified",
                                                  "websiteVerified",
                                                  "twitterVerificationEnabled",
                                                  "telegramVerificationEnabled",
                                                  "websiteVerificationEnabled",
                                                ].includes(l),
                                                f =
                                                  (!1 === t.driPoolEnabled &&
                                                    "Fair Launch Pool" === n &&
                                                    ![
                                                      "driPoolEnabled",
                                                    ].includes(l) &&
                                                    !1 === t.driPoolEnabled) ||
                                                  (!1 ===
                                                    t.poolPerAddressCapEnabled &&
                                                    "poolPerAddressCapWei" ===
                                                      l) ||
                                                  "poolStartType" === l;
                                              return ([
                                                "projectBuyTaxPercent",
                                              ].includes(l) &&
                                                !1 === t.buyTaxEnabled) ||
                                                ("buyTaxEnabled" === l &&
                                                  !0 === t[l]) ||
                                                ([
                                                  "projectSellTaxPercent",
                                                ].includes(l) &&
                                                  !1 === t.sellTaxEnabled) ||
                                                ("sellTaxEnabled" === l &&
                                                  !0 === t[l]) ||
                                                ("projectTaxRecipient" === l &&
                                                  !1 === t.buyTaxEnabled &&
                                                  !1 === t.sellTaxEnabled) ||
                                                o ||
                                                d ||
                                                c ||
                                                p ||
                                                x ||
                                                m ||
                                                g ||
                                                f
                                                ? null
                                                : (0, a.jsx)(
                                                    u.Fragment,
                                                    {
                                                      children:
                                                        "lpSupply" === l
                                                          ? (0, a.jsxs)(
                                                              a.Fragment,
                                                              {
                                                                children: [
                                                                  (0, a.jsx)(
                                                                    eh,
                                                                    {
                                                                      label:
                                                                        "Tokens for LP",
                                                                      renderedValue:
                                                                        (0,
                                                                        a.jsx)(
                                                                          eg,
                                                                          {
                                                                            name: "lpSupply",
                                                                            value:
                                                                              t.lpSupply ||
                                                                              null,
                                                                            symbol:
                                                                              t.symbol,
                                                                          }
                                                                        ),
                                                                    }
                                                                  ),
                                                                  (0, a.jsx)(
                                                                    eh,
                                                                    {
                                                                      label:
                                                                        "Market Cap",
                                                                      renderedValue:
                                                                        Z
                                                                          ? "$".concat(
                                                                              Z.toLocaleString()
                                                                            )
                                                                          : "—",
                                                                    }
                                                                  ),
                                                                  (0, a.jsx)(
                                                                    eh,
                                                                    {
                                                                      label:
                                                                        "Token Price",
                                                                      renderedValue:
                                                                        H
                                                                          ? "$".concat(
                                                                              H.toLocaleString(
                                                                                "en-US",
                                                                                {
                                                                                  maximumFractionDigits: 16,
                                                                                }
                                                                              )
                                                                            )
                                                                          : "—",
                                                                    }
                                                                  ),
                                                                ],
                                                              }
                                                            )
                                                          : "supplyRecipients" ===
                                                            l
                                                          ? (0, a.jsx)(ef, {
                                                              value:
                                                                t.supplyRecipients,
                                                              errors: h,
                                                            })
                                                          : (0, a.jsx)(eh, {
                                                              label:
                                                                (null == i
                                                                  ? void 0
                                                                  : null ===
                                                                      (r =
                                                                        i.meta) ||
                                                                    void 0 === r
                                                                  ? void 0
                                                                  : r.customLabel) ||
                                                                (null == i
                                                                  ? void 0
                                                                  : i.label),
                                                              renderedValue: (0,
                                                              a.jsx)(eg, {
                                                                coin: t,
                                                                name: l,
                                                                value: t[l],
                                                                symbol:
                                                                  t.symbol,
                                                                totalSupply:
                                                                  t.supply ||
                                                                  null,
                                                              }),
                                                              error:
                                                                null ===
                                                                  (s = h[l]) ||
                                                                void 0 === s
                                                                  ? void 0
                                                                  : s.errors,
                                                            }),
                                                    },
                                                    l
                                                  );
                                            }
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                s
                              );
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)(f.ZP, {}),
                (0, a.jsx)("div", {
                  className: "rounded-md bg-gray-20 p-2",
                  children: (0, a.jsx)("div", {
                    className: "rounded-sm bg-gray-10 p-2",
                    children: (0, a.jsxs)("div", {
                      className: "flex grow gap-2",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "b-shadow-5 grid aspect-square self-start rounded-[5px] p-1 shadow-gray-40",
                          children: (0, a.jsx)(y.BillIcon, {
                            className: (0, N.cn)(
                              "h-[28px] w-[28px] text-highlight"
                            ),
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "grow pb-1 pr-1 pt-1",
                          children: [
                            (0, a.jsx)("div", {
                              className: "mb-4 ml-3  font-bold",
                              children: "Total",
                            }),
                            (0, a.jsx)(ex, {
                              coinId: t.id,
                              gasEstimateSWR: E,
                              lockerFee: F || 0n,
                              deploymentFee: W || 0n,
                              isLoading: M,
                              totalValue: A || 0n,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                t.driPoolEnabled &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(f.ZP, {}),
                      (0, a.jsx)("div", {
                        className: "rounded-md bg-gray-20 p-2",
                        children: (0, a.jsx)("div", {
                          className: "rounded-sm bg-gray-10 p-2",
                          children: (0, a.jsxs)("div", {
                            className: "flex grow gap-2",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "b-shadow-5 grid aspect-square self-start rounded-[5px] p-1 shadow-gray-40",
                                children: (0, a.jsx)(y.EthereumIcon, {
                                  className: (0, N.cn)(
                                    "h-[28px] w-[28px] text-highlight"
                                  ),
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: "grow pb-1 pr-1 pt-1",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className:
                                      "mb-4 ml-3 flex items-center justify-between font-bold",
                                    children: [
                                      (0, a.jsx)("span", {
                                        children: "Liquidity Pool",
                                      }),
                                      (0, a.jsxs)("span", {
                                        className: (0, N.cn)(
                                          "flex items-center gap-1 font-wide tabular-nums",
                                          t.lpFundingWei &&
                                            "0" !== t.lpFundingWei
                                            ? ""
                                            : "text-negative"
                                        ),
                                        children: [
                                          (0, a.jsx)(y.ETHIcon, {}),
                                          (0, ei.d)(
                                            BigInt(t.lpFundingWei || 0)
                                          ),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className:
                                      "flex items-center gap-2 rounded-md border border-gray-20 px-2 py-1 text-sm",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "shrink rounded-full bg-gray-30 px-3 py-1",
                                        children: (0, a.jsx)(y.StarIcon, {}),
                                      }),
                                      "When launching, your wallet will be charged the deposit amount to fund the liquidity pool.",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                (0, a.jsx)(f.ZP, {}),
                (0, a.jsx)("div", {
                  className: "rounded-md bg-gray-20 p-2",
                  children: (0, a.jsx)("div", {
                    className: "rounded-sm bg-gray-10 p-2",
                    children: (0, a.jsxs)("div", {
                      className: "flex grow gap-2",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "b-shadow-5 grid aspect-square self-start rounded-[5px] p-1 shadow-gray-40",
                          children: (0, a.jsx)(y.CryptoCoinIcon, {
                            className: (0, N.cn)(
                              "h-[28px] w-[28px]",
                              m && "text-highlight"
                            ),
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "grow pb-1 pr-1 pt-1",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "mb-4 ml-3  font-bold",
                              children: [
                                "Launch ",
                                et()(t.symbol)
                                  ? "your coin"
                                  : "".concat(t.symbol),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "rounded-md border border-gray-20",
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "flex items-center gap-2 border-b border-gray-20 px-2 py-1 text-sm",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "shrink rounded-full bg-gray-30 px-3 py-1",
                                      children: (0, a.jsx)(y.StarIcon, {}),
                                    }),
                                    "Deploy your contract and add initial liquidity later.",
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className: "px-4 py-2",
                                  children: (0, a.jsx)(b.t, {
                                    size: "lg",
                                    fullWidth: !0,
                                    chainId: t.chainId || void 0,
                                    loading: v,
                                    disabled:
                                      !m ||
                                      d > 0 ||
                                      v ||
                                      [
                                        B.DeployStatus.PENDING,
                                        B.DeployStatus.DEPLOYED,
                                      ].includes(t.deployStatus),
                                    onClick: (e) => {
                                      e.preventDefault(), V();
                                    },
                                    children: v ? "Launching…" : "Launch",
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "text-right text-xs text-gray-85 pr-6 mt-2",
                              children: [
                                "By deploying this contract you are agreeing to Metadrop's",
                                " ",
                                (0, a.jsx)(ea(), {
                                  href: "/legal",
                                  className: "underline",
                                  target: "_blank",
                                  children: "terms of use",
                                }),
                                ".",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      };
      function eh(e) {
        let { label: t, renderedValue: n, error: r } = e,
          s = (0, a.jsx)("div", {
            "data-label": !0,
            className: (0, N.cn)(
              "text-right font-mono uppercase text-gray-50",
              "overflow-hidden break-words",
              !!r && "text-negative"
            ),
            children: t,
          });
        return (0, a.jsxs)(a.Fragment, {
          children: [
            r
              ? (0, a.jsx)(v.TooltipProvider, {
                  children: (0, a.jsxs)(v.Tooltip, {
                    children: [
                      (0, a.jsx)(v.TooltipTrigger, {
                        asChild: !0,
                        children: s,
                      }),
                      (0, a.jsx)(v.TooltipContent, {
                        children: null == r ? void 0 : r.join(", "),
                      }),
                    ],
                  }),
                })
              : s,
            (0, a.jsx)("div", {
              className: "overflow-hidden break-words",
              children: n,
            }),
          ],
        });
      }
      function eg(e) {
        let { name: t, value: n, symbol: r, totalSupply: s, coin: l } = e,
          i = (0, a.jsx)("div", {
            className: "font-mono uppercase text-gray-50",
            children: "—",
          }),
          o = () =>
            (0, a.jsxs)("div", {
              className: "flex items-center gap-[2px]",
              children: [
                (0, a.jsx)(y.ETHIcon, { width: 12, height: 12 }),
                (0, E.uf)(n, { isWei: !0 }),
              ],
            });
        if (
          !(
            (null == l ? void 0 : l.poolStartType) !== B.PoolStart.FIXED_DATE &&
            "poolStartDate" === t
          ) &&
          ("" === n || null == n || Number.isNaN(n))
        )
          return i;
        let d = r ? " ".concat(r) : "";
        switch (t) {
          case "poolStartDate":
            switch (null == l ? void 0 : l.poolStartType) {
              case B.PoolStart.FIXED_DATE:
                return (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, w.p6)(new Date(n), "localDate"),
                    ", ",
                    (0, w.p6)(new Date(n), "localTime"),
                  ],
                });
              case B.PoolStart.MANUAL:
                return (0, a.jsx)(a.Fragment, { children: "When you choose" });
              case B.PoolStart.ON_LAUNCH:
                return (0, a.jsx)(a.Fragment, {
                  children: "When you launch the coin",
                });
            }
          case "chainId":
            var c, u;
            return null !==
              (u =
                null === (c = M.Gw.find((e) => e.id === n)) || void 0 === c
                  ? void 0
                  : c.name) && void 0 !== u
              ? u
              : n;
          case "lpLockupInDays":
            return n
              ? (0, J.L)(
                  (0, Q.y)({
                    start: Date.now(),
                    end: Date.now() + 864e5 * Number(n),
                  })
                )
              : "-";
          case "supply":
          case "lpSupply":
            return (0, a.jsx)(a.Fragment, {
              children: n
                ? "".concat(Number(n).toLocaleString()).concat(d)
                : "—",
            });
          case "projectBuyTaxPercent":
          case "projectSellTaxPercent": {
            let e =
              ("projectBuyTaxPercent" === t
                ? null == l
                  ? void 0
                  : l.metadropBuyTaxPercent
                : null == l
                ? void 0
                : l.metadropSellTaxPercent) || 0;
            return (0, a.jsxs)(a.Fragment, {
              children: [
                (0, E.uf)(n),
                "%",
                e > 0 &&
                  (0, a.jsxs)("span", {
                    className: "text-xs",
                    children: [" ", "+ ", (0, E.uf)(e), "% Metadrop tax"],
                  }),
              ],
            });
          }
          case "maxTokensPerWalletPercent":
          case "maxTokensPerTxnPercent":
            return (0, a.jsxs)(a.Fragment, {
              children: [
                Number(n).toLocaleString(),
                " %",
                s
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        " ",
                        (0, a.jsx)("span", {
                          className: "font-mono uppercase text-gray-50",
                          children: "=",
                        }),
                        " ",
                        Number(
                          (0, F.Ob)(BigInt(s), BigInt(Math.round(100 * n)))
                        ).toLocaleString(),
                        d,
                      ],
                    })
                  : (0, a.jsxs)("span", {
                      className: "font-mono uppercase text-gray-50",
                      children: [" = —", d],
                    }),
              ],
            });
          case "poolMaxETHWei":
            return (null == l ? void 0 : l.driPoolEnabled) ? o() : i;
          case "poolPerAddressCapWei":
            return (null == l ? void 0 : l.poolPerAddressCapEnabled) ? o() : i;
          case "lpFundingWei":
          case "poolMaxInitialBuyWei":
            return o();
          case "buyTaxEnabled":
          case "sellTaxEnabled":
          case "maxTokensPerWalletEnabled":
          case "maxTokensPerTxnEnabled":
          case "autoBurnEnabled":
          case "burnLPTokens":
          case "twitterVerified":
          case "telegramVerified":
          case "websiteVerified":
          case "twitterVerificationEnabled":
          case "telegramVerificationEnabled":
          case "websiteVerificationEnabled":
          case "poolPerAddressCapEnabled":
          case "driPoolEnabled":
            return (0, a.jsx)(a.Fragment, { children: n ? "Yes" : "No" });
          case "coinImageURL":
            return (0, a.jsx)("img", {
              className: "max-h-10 rounded",
              src: n || "",
              alt: "",
            });
          case "telegram":
            return (0, a.jsxs)("span", {
              className: "flex items-end gap-2",
              children: [
                "https://t.me/".concat(n),
                (0, a.jsx)("span", {
                  className: (0, N.cn)(
                    "translate-y-[-0.5px] font-mono text-xs uppercase text-gray-50"
                  ),
                  children: (null == l ? void 0 : l.telegramVerified)
                    ? " verified"
                    : " not verified",
                }),
              ],
            });
          case "twitter":
            return (0, a.jsxs)("span", {
              className: "flex items-end gap-2",
              children: [
                "https://twitter.com/".concat(n),
                (0, a.jsx)("span", {
                  className: (0, N.cn)(
                    "translate-y-[-0.5px] font-mono text-xs uppercase text-gray-50",
                    (null == l ? void 0 : l.twitterVerified) &&
                      "text-[rgb(29,155,240)]"
                  ),
                  children: (null == l ? void 0 : l.twitterVerified)
                    ? "verified"
                    : "not verified",
                }),
              ],
            });
          case "website":
            return (0, a.jsxs)("span", {
              className: "flex items-end gap-2",
              children: [
                "https://".concat(n),
                (0, a.jsx)("span", {
                  className: (0, N.cn)(
                    "translate-y-[-0.5px] font-mono text-xs uppercase text-gray-50",
                    (null == l ? void 0 : l.websiteVerified) &&
                      "text-[rgb(29,155,240)]"
                  ),
                  children: (null == l ? void 0 : l.websiteVerified)
                    ? " verified"
                    : " not verified",
                }),
              ],
            });
          case "discord":
            return (0, a.jsx)(a.Fragment, {
              children: "https://discord.gg/".concat(n),
            });
          case "projectTaxRecipient":
            return (0, a.jsx)(g.d, {
              zeroXClassName: "text-inherit",
              charCount: 200,
              address: n,
            });
          default:
            return (0, a.jsx)(a.Fragment, { children: n });
        }
      }
      function ef(e) {
        var t, n, r;
        let { value: s, errors: l } = e,
          i = s.filter((e) => {
            let { type: t } = e;
            return "allocation" === t;
          }),
          o = s.filter((e) => {
            let { type: t } = e;
            return "team" === t;
          }),
          d = o.reduce((e, t) => {
            let { supplyPercentage: n } = t;
            return e + n;
          }, 0),
          c =
            100 -
            s.reduce((e, t) => {
              let { supplyPercentage: n } = t;
              return e + n;
            }, 0);
        return (0, a.jsxs)("table", {
          className: "jsx-67f0702de676d471 col-span-2 ",
          children: [
            (0, a.jsx)(h(), {
              id: "67f0702de676d471",
              children:
                '.distribution-category{padding-left:0;padding-right:0;padding-bottom:0}.distribution-category .category-trigger{padding:0rem .5rem 0}.distribution-category .actual-collapsible-content{padding:0 0}th.jsx-67f0702de676d471,td.jsx-67f0702de676d471{padding:.5rem .75rem}.perc.jsx-67f0702de676d471{color:var(--gray-60);font-family:"NB Arkitekt",Times,serif}',
            }),
            (0, a.jsxs)("tr", {
              className:
                "jsx-67f0702de676d471 border-b border-gray-20 text-left font-mono text-sm text-gray-50",
              children: [
                (0, a.jsx)("th", {
                  className: "jsx-67f0702de676d471",
                  children: "%",
                }),
                (0, a.jsx)("th", {
                  className: "jsx-67f0702de676d471",
                  children: "Category",
                }),
                (0, a.jsx)("th", {
                  className: "jsx-67f0702de676d471",
                  children: "Address",
                }),
              ],
            }),
            (0, a.jsxs)("tbody", {
              className: "jsx-67f0702de676d471",
              children: [
                (0, a.jsxs)("tr", {
                  className:
                    "jsx-67f0702de676d471 " +
                    ((0, N.cn)(
                      (null == l ? void 0 : l.supplyRecipients) &&
                        "text-negative"
                    ) || ""),
                  children: [
                    (0, a.jsxs)("td", {
                      className:
                        "jsx-67f0702de676d471 " +
                        ((0, N.cn)(
                          (null == l ? void 0 : l.supplyRecipients) &&
                            "!text-negative",
                          "perc"
                        ) || ""),
                      children: [c, "%"],
                    }),
                    (0, a.jsx)("td", {
                      className: "jsx-67f0702de676d471",
                      children: (0, a.jsxs)(v.Tooltip, {
                        children: [
                          (0, a.jsx)(v.TooltipTrigger, {
                            children: "Initial liquidity pool",
                          }),
                          (0, a.jsx)(v.TooltipContent, {
                            children:
                              null == l
                                ? void 0
                                : null === (r = l.errors) || void 0 === r
                                ? void 0
                                : null === (n = r.supplyRecipients) ||
                                  void 0 === n
                                ? void 0
                                : null === (t = n.join) || void 0 === t
                                ? void 0
                                : t.call(n, ", "),
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("td", {
                      className: "jsx-67f0702de676d471",
                      children: "N/A",
                    }),
                  ],
                }),
                i.map((e) => {
                  let { name: t, supplyPercentage: n, address: r } = e;
                  return (0, a.jsxs)(
                    "tr",
                    {
                      className: "jsx-67f0702de676d471 ",
                      children: [
                        (0, a.jsxs)("td", {
                          className: "jsx-67f0702de676d471 perc",
                          children: [n, "%"],
                        }),
                        (0, a.jsx)("td", {
                          className: "jsx-67f0702de676d471",
                          children: t,
                        }),
                        (0, a.jsx)("td", {
                          className: "jsx-67f0702de676d471",
                          children: (0, a.jsx)(g.d, {
                            zeroXClassName: "text-inherit",
                            address: r,
                          }),
                        }),
                      ],
                    },
                    r
                  );
                }),
                d > 0 &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsxs)("tr", {
                        className:
                          "jsx-67f0702de676d471 border-t border-gray-20 bg-gray-0/10",
                        children: [
                          (0, a.jsxs)("td", {
                            className: "jsx-67f0702de676d471 perc",
                            children: [d, "%"],
                          }),
                          (0, a.jsx)("td", {
                            className: "jsx-67f0702de676d471",
                            children: "Team",
                          }),
                          (0, a.jsx)("td", {
                            className: "jsx-67f0702de676d471",
                          }),
                        ],
                      }),
                      o.map((e, t) => {
                        var n;
                        let { name: r, supplyPercentage: s, address: i } = e,
                          o =
                            null ===
                              (n =
                                l[
                                  "supplyRecipients[".concat(
                                    t,
                                    "].supplyPercentage"
                                  )
                                ]) || void 0 === n
                              ? void 0
                              : n.message;
                        return (0, a.jsxs)(
                          "tr",
                          {
                            className:
                              "jsx-67f0702de676d471 " +
                              ((0, N.cn)(
                                "bg-gray-0/10",
                                o && "text-negative"
                              ) || ""),
                            children: [
                              (0, a.jsx)("td", {
                                className: "jsx-67f0702de676d471 ",
                                children: (0, a.jsx)(y.CornerDownRightIcon, {
                                  className: "size-icon-md text-gray-60 ",
                                }),
                              }),
                              (0, a.jsx)("td", {
                                className: "jsx-67f0702de676d471 flex",
                                children: (0, a.jsxs)(v.Tooltip, {
                                  children: [
                                    (0, a.jsxs)(v.TooltipTrigger, {
                                      className: "flex items-center",
                                      children: [
                                        (0, a.jsxs)("span", {
                                          className:
                                            "jsx-67f0702de676d471 " +
                                            ((0, N.cn)(
                                              "bg-gray-0/10",
                                              "perc w-[5ch]",
                                              o && "!text-negative"
                                            ) || ""),
                                          children: [null != s ? s : "–", "%"],
                                        }),
                                        (0, a.jsx)(g.d, {
                                          zeroXClassName: "text-inherit",
                                          address: i,
                                        }),
                                        r &&
                                          (0, a.jsxs)("span", {
                                            className:
                                              "jsx-67f0702de676d471 text-gray-60",
                                            children: [" (", r, ")"],
                                          }),
                                      ],
                                    }),
                                    (0, a.jsx)(v.TooltipContent, {
                                      children: o,
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)("td", {
                                className: "jsx-67f0702de676d471",
                              }),
                            ],
                          },
                          i
                        );
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function ey(e) {
        let { params: t } = e,
          { data: n, isLoading: l } = (0, s.Z)(t.coinId),
          i = null == n ? void 0 : n.coin,
          o = !!(null == i ? void 0 : i.erc20Address),
          [d, c] = (0, u.useState)(o);
        return i
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(p, {
                  open: d,
                  title: "".concat(i.name, " Launched!"),
                  linkLabel: "View your coin at this url",
                  path: "/coins/".concat(i.slug),
                  truncatedPath: "/coins/".concat(i.slug),
                  buttons: [
                    {
                      children: "Manage coin",
                      as: "/app/coins/".concat(i.id),
                      href: "/app/coins/[coinId]?coinId=".concat(i.id),
                      size: "lg",
                    },
                  ],
                }),
                (0, a.jsx)(em, { coin: i, setIsLaunched: c }),
              ],
            })
          : l
          ? (0, a.jsx)(r.Z, { fullScreen: !0, className: "ll" })
          : (0, x.notFound)();
      }
    },
    72598: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return h;
        },
      });
      var a = n(2067),
        r = n(32905),
        s = n(68343),
        l = n(96560),
        i = n(15039),
        o = n(95599),
        d = n(81314),
        c = n(637),
        u = n(28967),
        p = n(74734),
        x = n(90117),
        m = n(83297);
      let h = (0, x.P)(
        (e) => {
          let {
              address: t,
              ensName: n,
              zeroXClassName: x = "opacity-40",
              charCount: h = 10,
              chainId: g = 1,
              className: f = "",
              expandOnHover: y,
              canCopy: j = !0,
            } = e,
            v = (0, d.Av)(),
            b = (0, s.F)({ address: t, chainId: g, query: { enabled: !n } }),
            [N, T] = (0, o.Z)(),
            [w, E] = (0, i.useState)(!1),
            [P, I] = (0, i.useState)(h);
          (0, i.useEffect)(() => {
            let e;
            if (y && !v)
              return (
                (e = w
                  ? setInterval(() => {
                      I((e) => Math.min(e + 1, 42));
                    }, 5)
                  : setInterval(() => {
                      I((e) => Math.max(e - 1, h));
                    }, 5)),
                () => clearInterval(e)
              );
          }, [w, h, y, v]);
          let S = (0, r.T)(t, P),
            k = (0, a.jsxs)("span", {
              children: [
                (0, a.jsx)("span", { className: (0, l.cn)(x), children: "0x" }),
                (0, a.jsx)("span", {
                  children: null == S ? void 0 : S.split("x")[1],
                }),
              ],
            });
          return (0, a.jsx)("div", {
            onMouseEnter: () => E(!0),
            onMouseLeave: () => E(!1),
            onClick: j
              ? () => {
                  T(t), m.A.info("Address copied");
                }
              : void 0,
            className: (0, l.cn)("cursor-pointer", f),
            children: (0, a.jsx)(c.M, {
              mode: "wait",
              initial: !1,
              children: b.data
                ? (0, a.jsx)(u.E.div, { ...(0, p.g)(), children: b.data })
                : (0, a.jsx)(u.E.div, { ...(0, p.g)(), children: k }),
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
    81314: function (e, t, n) {
      "use strict";
      n.d(t, {
        Av: function () {
          return i;
        },
        dD: function () {
          return l;
        },
        rx: function () {
          return o;
        },
      });
      var a = n(15039);
      let r = !1,
        s = (e) => {
          let [t, n] = (0, a.useState)(() =>
              r ? window.innerWidth <= e : void 0
            ),
            s = (0, a.useRef)(t);
          s.current = t;
          let l = (0, a.useCallback)((e) => {
            e.matches ? n(!0) : n(!1);
          }, []);
          return (
            (0, a.useEffect)(() => {
              void 0 === s.current && n(window.innerWidth <= e), (r = !0);
              let t = window.matchMedia("(max-width: ".concat(e, "px)"));
              return (
                t.addListener(l), t.matches && n(!0), () => t.removeListener(l)
              );
            }, [l, e]),
            t
          );
        },
        l = () => s(600),
        i = () => s(960),
        o = () => s(768);
      t.ZP = s;
    },
    69436: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = n(56837),
        r = n(44249),
        s = n(84824),
        l = n.n(s),
        i = n(36221);
      class o extends Error {
        constructor(...e) {
          var t, n;
          super(...e),
            null === (t = (n = Error).captureStackTrace) ||
              void 0 === t ||
              t.call(n, this, o);
        }
      }
      async function d(e) {
        let t,
          n,
          s,
          d,
          c =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          u = "/" === e[0] ? a.T + e : e,
          p = {};
        try {
          if (
            (c.timeout &&
              ((d = new AbortController()),
              setTimeout(() => {
                if (!n) {
                  let e = new o(
                    "Timeout (".concat(c.method || "GET", " ").concat(u, ")")
                  );
                  throw ((e.code = "timeout"), null == d || d.abort(), e);
                }
              }, c.timeout)),
            (n = await l()(u, {
              ...c,
              agent: t,
              signal: d ? d.signal : void 0,
            })),
            c.throwOnHTTPError && (n.status < 200 || n.status >= 300))
          ) {
            let { type: e } = (0, r.Q)(
              n.headers.get("Content-Type") || "text/plain"
            );
            if ("application/json" === e)
              (p = await n.json()).code && p.message && (p.error = p),
                ((s = new o(
                  p.error
                    ? p.error.message || p.error.code
                    : "Unexpected Error (".concat(c.method, " ").concat(u, ")")
                )).res = n),
                (s.status = n.status),
                (s.code = p.error.code),
                (s.message = p.error.message),
                (s.extra = p.extra);
            else {
              let t = "";
              try {
                t = await n.text();
              } catch (e) {
                console.error(e);
              }
              let a = new o(
                "Unexpected response content-type ("
                  .concat(c.method || "GET", " ")
                  .concat(u, "): ")
                  .concat(e, "(")
                  .concat(n.status, ") ")
                  .concat(t)
              );
              throw (
                ((a.res = n),
                (a.status = n.status),
                console.log("throwing", a),
                a)
              );
            }
          } else
            204 === n.status
              ? (p = {})
              : (n.headers.get("Content-Type") || "").startsWith("text/")
              ? (p = await n.text())
              : (p = await n.json()).json && (p = (0, i.vB)(p));
        } catch (e) {
          s = e;
        }
        if (!s) return p;
        if (
          s.status < 500 ||
          ((s.stack = ""
            .concat(s.stack ? s.stack : "", " ### Fetched URL: ")
            .concat(u)),
          c.body &&
            (s.stack = ""
              .concat(s.stack ? s.stack : "", " ### Request Body: ")
              .concat(JSON.stringify(c.body))),
          c.throwOnHTTPError)
        )
          throw s;
      }
      function c(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { throwOnHTTPError: !0, timeout: 1e4 };
        return (
          (t.headers = t.headers || {}),
          (t.headers.Accept = t.headers.Accept || "application/json"),
          (t.headers["Content-Type"] =
            t.headers["Content-Type"] || "application/json"),
          (t.credentials = "include"),
          (function (e) {
            if ("object" == typeof e && null !== e) {
              let t = Object.getPrototypeOf(e);
              return t === Object.prototype || null === t;
            }
            return !1;
          })(t.body) && (t.body = JSON.stringify(t.body)),
          d(e, { throwOnHTTPError: !0, ...t })
        );
      }
    },
    65031: function (e, t, n) {
      "use strict";
      n.d(t, {
        Bb: function () {
          return o;
        },
        p6: function () {
          return i;
        },
      });
      var a = n(35629),
        r = n(23053),
        s = n(25254);
      let l = {
          long: "MMMM d, yyyy hh:mm",
          short: "MMMM dd, yyyy",
          filename: "yyyy-MM-dd-hh-mm-ss",
          local: "PPPp",
          localTime: "p",
          localDate: "PPP",
          dateInput: "yyyy-LL-dd",
          datetimeInput: "yyyy-LL-dd'T'HH:mm",
        },
        i = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "long",
            n = e;
          if (!e) return;
          n instanceof Date || (n = (0, a.D)(n));
          let s = (0, r.WU)(n, l[t] || t);
          return "localDate" === t ? s.replace(/, \d{4}$/, "") : s;
        };
      function o(e) {
        let { short: t } =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { short: !1 },
          n = (0, s.D)(e || 0);
        return (
          (n = "0 seconds" === n ? "just now" : "".concat(n, " ago")),
          t &&
            (n = n
              .replace(/minutes?/, "min")
              .replace(/seconds?/, "sec")
              .replace(/ago/, "")),
          n
        );
      }
    },
    61722: function (e, t, n) {
      "use strict";
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
    83165: function (e, t, n) {
      "use strict";
      n.d(t, {
        Er: function () {
          return a.Er;
        },
        GG: function () {
          return a.GG;
        },
        Ns: function () {
          return a.Ns;
        },
        aK: function () {
          return a.aK;
        },
        gr: function () {
          return a.gr;
        },
        py: function () {
          return a.py;
        },
      });
      var a = n(20886);
      n(56837), n(36565), n(61722);
    },
    60808: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ob: function () {
          return r;
        },
        _d: function () {
          return a;
        },
        pC: function () {
          return s;
        },
      });
      let a = (e) => (null === e ? null : e / 100),
        r = (e, t) =>
          null === t || null === e || void 0 === t || void 0 === e
            ? null
            : (e * BigInt(t) * BigInt(1e9)) / BigInt(1e4) / BigInt(1e9),
        s = (e, t) => (t ? (e * BigInt(1e4)) / t : BigInt(0));
    },
  },
  function (e) {
    e.O(
      0,
      [
        1765, 894, 775, 9745, 2005, 1664, 4356, 9041, 8158, 4910, 5060, 8388,
        2469, 8505, 3297, 2105, 4685, 2418, 1164, 4916, 2931, 7113, 1620, 127,
        5955, 1642, 1329, 5373, 8282, 4665, 1744,
      ],
      function () {
        return e((e.s = 14101));
      }
    ),
      (_N_E = e.O());
  },
]);
