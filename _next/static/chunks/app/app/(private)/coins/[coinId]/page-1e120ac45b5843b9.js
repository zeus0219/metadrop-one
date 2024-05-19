(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3313, 7263],
  {
    8624: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 99622));
    },
    61590: function (e, t, n) {
      "use strict";
      n.d(t, {
        XJ: function () {
          return k;
        },
        Ep: function () {
          return C;
        },
        E7: function () {
          return B;
        },
        $_: function () {
          return A;
        },
      });
      var i = n(2067),
        l = n(42482),
        a = n(55482),
        o = n(56213),
        r = n(4124),
        s = n(81205),
        c = n(25463),
        d = n(20886),
        u = n(91610),
        p = n(76859),
        m = n(9038),
        f = n(83781),
        h = n(15039),
        v = n(10105),
        x = n(91818),
        g = n(8979),
        b = n(13984),
        y = n(13173),
        I = n(11664),
        j = n(60464),
        w = n(61722);
      let T = () => {
          let e = (0, b.O)(),
            t = (0, y.x)();
          return (0, I.ZP)(e.isFetched ? "block-timestamp" : null, async () => {
            let e = await (0, j.Q)((0, w.s3)(t));
            return null == e ? void 0 : e.timestamp;
          });
        },
        N = (0, h.createContext)({ coin: {} }),
        B = (e) => {
          var t, n, i, l;
          let [o, r] = (0, h.useState)(!0),
            { address: d } = (0, x.m)(),
            m = (0, a.G)({
              contracts: [
                ...(0, u.V)((0, s.Yh)(d), {
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
            { data: f } = A(
              e.erc20driPoolAddress,
              e.chainId,
              BigInt(e.deployedBlockNumber)
            ),
            v = ["succeeded", "failed"].includes(
              null === (t = m.data) || void 0 === t ? void 0 : t.poolPhaseStatus
            ),
            g =
              (null === (n = m.data) || void 0 === n
                ? void 0
                : n.participantExcessRefundAvailable) > 0 ||
              !v ||
              (null === (i = m.data) || void 0 === i ? void 0 : i.balanceOf) >
                0 ||
              (null === (l = m.data) || void 0 === l
                ? void 0
                : l.totalETHFundedToLPAndTokenBuy) <= 0;
          return (
            (0, h.useEffect)(() => {
              r(g);
            }, [g]),
            { contractData: m, participants: f }
          );
        },
        S = (e) => {
          let t = Date.now();
          return null === e.poolEndDate || t <= e.poolStartDate.getTime()
            ? "before"
            : t <= e.poolEndDate.getTime()
            ? "open"
            : "succeeded";
        },
        P = (e) => {
          var t;
          let {
              coin: n,
              contractData: i,
              participants: a,
              myClaimEvent: r,
            } = e,
            { erc20driPoolAddress: c, chainId: u } = n,
            { data: p } = (0, o.x)(),
            { data: x, isLoading: b, refetch: y } = i,
            [I, j] = (0, h.useState)(!0),
            [w, N] = (0, h.useState)({
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
                (0, m.m)(
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
                (0, f.E)(n.poolStartDate, n.poolVestingInSeconds),
              poolPhaseStatus: S(n),
              lpFunding: BigInt(n.lpFundingWei || 0) - (n.burnLPTokens, 0n),
            }),
            [B, P] = (0, h.useState)(0n),
            k =
              (0, v.Z)(null == x ? void 0 : x.balanceOf) !==
              (null == x ? void 0 : x.balanceOf),
            A = (0, g.Z)();
          (0, h.useEffect)(() => {
            !b &&
              x &&
              p &&
              (async () => {
                let e =
                    (null == x ? void 0 : x.poolPhaseStatus) === "succeeded" ||
                    k,
                  t = await (0, s.K7)(n, x, A, {
                    pendingETH: e ? 0n : B,
                    ethPrice: p,
                    unicryptFee: 0n,
                  });
                e && P(0n), N({ ...w, ...x, ...t }), j(!1);
              })();
          }, [n, x, p, b, B, k]);
          let C = (0, l.G)(w.vestingEndDate),
            { data: E } = T(),
            M =
              E &&
              (null == x ? void 0 : x.vestingEndDate) &&
              1000n * E > (null == x ? void 0 : x.vestingEndDate.getTime()),
            D = w.poolPhaseStatus;
          return (0, h.useMemo)(
            () => ({
              myClaimEvent: r,
              refetch: y,
              data: { ...w },
              participants: a,
              setPendingETH: P,
              ethPrice: p,
              isLoading: I || !x,
              status: D,
              isVested: !C,
              isVestingBlockMined: M,
              coin: { chainId: u, erc20driPoolAddress: c, ...n },
            }),
            [y, w, a, I, p, x, D, C, M, u, c, n, A, r]
          );
        },
        k = (e) => {
          let {
              children: t,
              coin: n,
              contractData: l,
              participants: a,
              myClaimEvent: o,
            } = e,
            r = P({
              coin: n,
              contractData: l,
              participants: a,
              myClaimEvent: o,
            });
          return (0, i.jsx)(N.Provider, { value: r, children: t });
        },
        A = (e, t, n) => {
          let { data: i, ...l } = (0, r.p)({
              address: e,
              abi: c.vQ,
              eventName: "AddToPool",
              chainId: t,
              fromBlock: n,
            }),
            a = (0, h.useMemo)(
              () =>
                null == i
                  ? void 0
                  : i.reduce((e, t) => {
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
              [null == i ? void 0 : i.length]
            );
          return { ...l, data: a || {} };
        },
        C = () => (0, h.useContext)(N);
    },
    51563: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return c;
        },
        t: function () {
          return s;
        },
      });
      var i = n(2067),
        l = n(26933),
        a = n(96560),
        o = n(26871),
        r = n(15039);
      function s(e) {
        let { erc20Address: t, coinImageURL: n } = e;
        return (0, r.useMemo)(
          () => n || (t ? (0, o.qF)(t, { width: 200, height: 200 }) : null),
          [n, t]
        );
      }
      function c(e) {
        let { coin: t, className: n = "" } = e,
          o = s(t);
        return (0, i.jsx)(l.Z, {
          src: o,
          transforms: { resize: "400" },
          className: (0, a.cn)("aspect-square rounded-full bg-highlight", n),
        });
      }
    },
    43568: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZP: function () {
          return r;
        },
        yA: function () {
          return a;
        },
      });
      var i = n(2067),
        l = n(96560);
      let a = (e) => {
        let { className: t } = e;
        return (0, i.jsx)("svg", {
          viewBox: "0 0 79 33",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: (0, l.cn)("h-full", t),
          children: (0, i.jsx)("path", {
            d: "M76.8328 0.807308C77.708 0.260294 78.8433 0.889519 78.8433 1.92162V14.2464C78.8433 15.6056 78.1431 16.869 76.9904 17.5894L53.8448 32.0554C52.9696 32.6024 51.8343 31.9732 51.8343 30.9411V22.0297C51.8343 19.9655 49.5638 18.7071 47.8133 19.8011L27.9277 32.2296C27.0525 32.7766 25.9172 32.1474 25.9172 31.1153V22.2038C25.9172 20.1396 23.6467 18.8811 21.8963 19.9751L2.01068 32.4036C1.13547 32.9506 0.000190735 32.3214 0.000190735 31.2893V18.9645C0.000190735 17.6053 0.700394 16.342 1.853 15.6216L24.9986 1.15556C25.8739 0.608547 27.0091 1.23777 27.0091 2.26987V11.1814C27.0091 13.2456 29.2797 14.504 31.0301 13.41L50.9157 0.981509C51.7909 0.434496 52.9262 1.06372 52.9262 2.09582V11.0072C52.9262 13.0714 55.1968 14.3298 56.9472 13.2358L76.8328 0.807308Z",
            fill: "currentColor",
          }),
        });
      };
      function o(e) {
        let { responsive: t, className: n } = e;
        return (0, i.jsx)("div", {
          className: (0, l.cn)(
            "font-65 font-wide uppercase leading-none tracking-wider",
            "h-full pt-[4px]",
            { "hidden md:block": t },
            n
          ),
          children: "metadrop",
        });
      }
      function r(e) {
        let {
          include: t = "all",
          tagline: n,
          className: r,
          responsive: s,
          innerClassName: c,
        } = e;
        return n
          ? (0, i.jsxs)("div", {
              className: (0, l.cn)(
                "flex items-center justify-start gap-3 text-gray-95",
                r
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
                      children: n,
                    }),
                  ],
                }),
              ],
            })
          : (0, i.jsxs)("div", {
              className: (0, l.cn)("flex items-center gap-5", r),
              children: [
                ("all" === t || "logoImage" === t) &&
                  (0, i.jsx)(a, { className: c }),
                ("all" === t || "logoWord" === t) &&
                  (0, i.jsx)(o, { responsive: s, className: c }),
              ],
            });
      }
    },
    21675: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return c;
        },
      });
      var i = n(2067),
        l = n(15955),
        a = n(96560),
        o = n(74734),
        r = n(28967),
        s = n(637);
      n(15039), (0, r.E)(l.CheckmarkIcon), (0, r.E)(l.CopyIcon);
      let c = (e) => {
        let { copied: t, className: n, ...c } = e;
        return (0, i.jsx)("div", {
          "aria-label": "copy",
          className: "transition active:scale-95",
          ...c,
          children: (0, i.jsx)(s.M, {
            mode: "wait",
            children: t
              ? (0, i.jsx)(
                  r.E.div,
                  {
                    ...(0, o.g)(),
                    children: (0, i.jsx)(l.CheckmarkIcon, {
                      className: (0, a.cn)(
                        "block cursor-pointer transition active:scale-95",
                        n
                      ),
                    }),
                  },
                  "o"
                )
              : (0, i.jsx)(
                  r.E.div,
                  {
                    ...(0, o.g)(),
                    children: (0, i.jsx)(l.CopyIcon, {
                      ...(0, o.g)(),
                      className: (0, a.cn)(
                        "block cursor-pointer transition active:scale-95",
                        n
                      ),
                    }),
                  },
                  "on"
                ),
          }),
        });
      };
    },
    60107: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(69436),
        l = n(11664);
      function a(e, t) {
        return (0, l.ZP)(
          e ? "/".concat(t ? "public" : "v1", "/coins/").concat(e) : null,
          (e) => (0, i.Z)(e, { redirectToLogin: !0 })
        );
      }
    },
    56213: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return o;
        },
      });
      var i = n(30045),
        l = n(74020);
      let a = [
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
        o = () => {
          let {
            data: e,
            isError: t,
            isLoading: n,
            refetch: o,
          } = (0, l.u)({
            address: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
            abi: a,
            chainId: 1,
            functionName: "latestRoundData",
          });
          return {
            data: e ? Number((0, i.b)(e[1], 8)) : null,
            refetch: o,
            isError: t,
            isLoading: n,
          };
        };
    },
    4124: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return r;
        },
      });
      var i = n(11664),
        l = n(8979),
        a = n(34200),
        o = n(54350);
      let r = (e) => {
        let {
            address: t,
            abi: n,
            eventName: r,
            chainId: s,
            swrOptions: c,
            fromBlock: d = 0n,
            watch: u = !1,
          } = e,
          p = (0, l.Z)(),
          m = (0, o.u)(p, { chainId: s }),
          f = n.find((e) => e.name === r && "event" === e.type),
          h = (0, i.ZP)(
            "".concat(r, "+").concat(t, "+").concat(s, "+").concat(d),
            async () => {
              let e = (e, n) =>
                m.getLogs({ fromBlock: e, toBlock: n, address: t, event: f });
              try {
                return await e(d, void 0);
              } catch (t) {
                if (
                  (console.log("Error fetching logs", { e: t }),
                  "InvalidParamsRpcError" === t.name)
                ) {
                  console.log("Falling back to smaller batches");
                  let t = await m.getBlockNumber(),
                    n = [];
                  for (let i = d; i < t; i += 2000n) n.push(e(i, i + 2000n));
                  return (await Promise.all(n)).flat();
                }
              }
            },
            { ...c }
          );
        return (
          (0, a.x)({
            onBlockNumber() {
              h.mutate();
            },
          }),
          h
        );
      };
    },
    53720: function (e, t, n) {
      "use strict";
      n.d(t, {
        b: function () {
          return r;
        },
      });
      var i = n(55482),
        l = n(25463),
        a = n(91610),
        o = n(76859);
      let r = function () {
        let {
          erc20Address: e,
          chainId: t,
          coinType: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, i.G)({
          contracts: (0, a.V)(
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
          query: { enabled: !!(e && n === o.CoinType.METADROP) },
          watch: !0,
        });
      };
    },
    81205: function (e, t, n) {
      "use strict";
      n.d(t, {
        uQ: function () {
          return h;
        },
        K7: function () {
          return f;
        },
        Yh: function () {
          return p;
        },
      });
      var i = n(60808),
        l = n(76859),
        a = n(89026),
        o = n(51123);
      let r = (e) => {
        let { tokensCount: t, pooledETH: n } = e;
        return n && t ? n / BigInt(t) : BigInt(0);
      };
      var s = n(25463),
        c = n(40731),
        d = n(64456);
      async function u(e, t, n, i) {
        let { wagmiConfig: l, chainId: a } = i;
        return e <= 0
          ? BigInt(0)
          : (0, d.L)(l, {
              abi: s.mC,
              address: c.p[a].uniswapV2Router.address,
              functionName: "getAmountOut",
              args: [e, t, n],
              chainId: a,
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
                : BigInt(t) === BigInt(a.zg)
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
              return BigInt(t) === BigInt(0) || BigInt(t) === BigInt(a.zg)
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
        m = (e) => (e / BigInt(1e12)) * BigInt(1e12),
        f = async (e, t, n, l) => {
          let a,
            { ethPrice: s, unicryptFee: c, pendingETH: d } = l,
            { totalETHContributed: p, balanceOf: f, totalSupply: g } = t,
            { participant: b = [BigInt(0), BigInt(0)] } = t,
            y = b[0],
            I = y > BigInt(0);
          if (d > 0) {
            let e = m(
                (0, i.Ob)(
                  d,
                  null == t ? void 0 : t.poolContributionFeeBasisPoints
                )
              ),
              n = d - e,
              l = n * BigInt(1e6);
            (p += n), (f += l), (g += l), (y += n);
          }
          let j = v(
              p,
              (null == t ? void 0 : t.maxInitialBuy) > 0
                ? null == t
                  ? void 0
                  : t.maxInitialBuy
                : null
            ),
            w =
              (null == t ? void 0 : t.totalETHFundedToLPAndTokenBuy) ===
              BigInt(0)
                ? null == t
                  ? void 0
                  : t.projectSeedContributionETH
                : (null == t ? void 0 : t.totalETHFundedToLPAndTokenBuy) - j,
            T = h(
              null == t ? void 0 : t.poolMaxETH,
              null == t ? void 0 : t.maxInitialBuy
            ),
            N = BigInt((null == e ? void 0 : e.lpSupplyWei) || 0),
            B = await u(j, w, N, { wagmiConfig: n, chainId: e.chainId }),
            S = Number((0, i.pC)(p, T)) / 1e4,
            P = r({ tokensCount: Number(N / BigInt(1e18)), pooledETH: w }),
            k = r({
              tokensCount: Number((N - B) / BigInt(1e18)),
              pooledETH: j + w,
            }),
            A = (0, i.pC)(y, p),
            C =
              S > 1 && (null == t ? void 0 : t.maxInitialBuy) > 0
                ? (0, i.Ob)(null == t ? void 0 : t.maxInitialBuy, A)
                : y,
            E = f || BigInt(0),
            M = (0, i.pC)(E, g),
            D = (0, i.pC)(null == t ? void 0 : t.vestedBalanceOf, E),
            L = (0, i.Ob)(B, M),
            F = (0, i.Ob)(B, A),
            H = (0, i.Ob)(F, D),
            R = (0, i.pC)(F, t.mainTokenSupply),
            Z = y - C,
            O = (F * k) / BigInt(1e18),
            V = s * parseFloat((0, o.d)(P)),
            W = s * parseFloat((0, o.d)(k)),
            q = Number(e.supply),
            _ = v(
              (null == t ? void 0 : t.poolPerAddressMaxETH) > 0
                ? (null == t ? void 0 : t.poolPerAddressMaxETH) - y
                : null,
              (null == t ? void 0 : t.poolMaxETH) > 0
                ? (null == t ? void 0 : t.poolMaxETH) -
                    (null == t ? void 0 : t.totalETHContributed)
                : null
            );
          null !== _ &&
            (a = m(
              (_ /
                BigInt(
                  1e4 - (null == t ? void 0 : t.poolContributionFeeBasisPoints)
                )) *
                BigInt(1e4)
            ));
          let U =
            (null == t ? void 0 : t.projectSeedContributionETH) -
            ((null == t ? void 0 : t.burnLPTokens) ? BigInt(0) : c);
          return {
            poolFilledPercent: 100 * S,
            filledRatio:
              x(
                null == t ? void 0 : t.totalETHContributed,
                null == t ? void 0 : t.maxInitialBuy
              ) / 100,
            totalETHContributed: null == t ? void 0 : t.totalETHContributed,
            initialCoinPriceUSD: V,
            coinPriceUSD: W,
            marketCapUSD: q * W,
            totalTokensPurchased: B,
            initialMarketCapUSD: q * V,
            maxAddToPoolWithFees: a,
            lpFunding: U,
            myPurchase: C,
            myDrips: E,
            myDripsShare: M,
            myTokens: F,
            myVestedTokens: H,
            myVestedBP: D,
            myClaimableTokens: L,
            myShareOfTotalSupply: R,
            myTokensInETH: O,
            myPooledETH: y,
            myRefund: Z,
            myShareOfPoolBasisPoints: A,
            balanceOf: f,
            totalSupply: g,
            _hasActuallyContributed: I,
          };
        },
        h = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce((e, t) => (t > e ? t : e));
        },
        v = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce((e, t) => (t < e ? t : e));
        },
        x = (e, t) =>
          t
            ? 100 *
              parseFloat(((e * BigInt(1e10)) / t / BigInt(1e8)).toString())
            : 0;
    },
    80054: function (e, t, n) {
      "use strict";
      var i = n(2067),
        l = n(69436),
        a = n(60107),
        o = n(44544),
        r = n(74354),
        s = n(3476),
        c = n(15039),
        d = n(83297),
        u = n(36221);
      t.Z = function (e) {
        var t;
        let { coin: n, title: p, children: m } = e,
          f = (null == n ? void 0 : n.id) || "",
          { data: h } = (0, o.Z)(),
          { mutate: v } = (0, a.Z)(f),
          x = (0, c.useMemo)(() => {
            var e;
            return (0, s.dZ)({
              deployerAddress:
                null == h
                  ? void 0
                  : null === (e = h.user) || void 0 === e
                  ? void 0
                  : e.ethAddress,
            });
          }, [
            null == h
              ? void 0
              : null === (t = h.user) || void 0 === t
              ? void 0
              : t.ethAddress,
          ]),
          g = (0, c.useCallback)(
            async (e) => {
              let {
                  projectBuyTaxPercent: t,
                  projectSellTaxPercent: n,
                  maxTokensPerWalletPercent: i,
                  maxTokensPerTxnPercent: a,
                  ...o
                } = e,
                r = { ...o };
              void 0 !== t &&
                (r.projectBuyTaxBasisPoints =
                  null === t ? null : Math.round(100 * t)),
                void 0 !== n &&
                  (r.projectSellTaxBasisPoints =
                    null === n ? null : Math.round(100 * n)),
                void 0 !== i &&
                  (r.maxTokensPerWalletBasisPoints =
                    null === i ? null : Math.round(100 * i)),
                void 0 !== a &&
                  (r.maxTokensPerTxnBasisPoints =
                    null === a ? null : Math.round(100 * a)),
                !1 === e.buyTaxEnabled && (r.projectBuyTaxBasisPoints = null),
                !1 === e.sellTaxEnabled && (r.projectSellTaxBasisPoints = null);
              let { coin: s, notice: c } = await (0, l.Z)(
                "/v1/coins/".concat(f),
                { method: "PATCH", body: (0, u.qC)(r) }
              );
              c && d.A.info(c), v({ coin: s });
            },
            [f, v]
          );
        return (0, i.jsx)(r.uC, {
          schema: x,
          completeResource: n,
          resourceReady: !!n,
          onSubmit: g,
          children: () => (0, i.jsx)(i.Fragment, { children: m }),
        });
      };
    },
    13633: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return c;
        },
      });
      var i = n(2067),
        l = n(2384),
        a = n(15955),
        o = n(96560),
        r = n(7263),
        s = n(60171);
      function c(e) {
        var t;
        let { current: n } = e,
          c = (0, s.useParams)().coinId,
          { links: d } = (0, r.G)(),
          u = (null === (t = d[0]) || void 0 === t ? void 0 : t.links) || [];
        if (0 === u.length) return null;
        let p = u.findIndex((e) => {
            var t, i;
            return null === (i = e.as) || void 0 === i
              ? void 0
              : null === (t = i.includes) || void 0 === t
              ? void 0
              : t.call(i, n);
          }),
          m = u[p - 1],
          f = u[p + 1] || {
            href: "/app/coins/[coinId]/review-and-launch?coinId=".concat(c),
            as: "/app/coins/".concat(c, "/review-and-launch"),
            label: "Review & Launch",
          };
        return (
          null == m || delete m.Icon,
          null == f || delete f.Icon,
          (0, i.jsxs)("div", {
            className: (0, o.cn)(
              "col-span-2 col-start-2 mt-4 flex justify-between px-3",
              !m && "justify-end"
            ),
            children: [
              m &&
                (0, i.jsx)(l.default, {
                  type: "secondary",
                  ...m,
                  leftIcon: (0, i.jsx)(a.ArrowLeftIcon, {}),
                  htmlType: "button",
                  children: m.label,
                }),
              f &&
                (0, i.jsx)(l.default, {
                  type: "secondary",
                  ...f,
                  rightIcon: (0, i.jsx)(a.ArrowRightIcon, {}),
                  htmlType: "button",
                  children: f.label,
                }),
            ],
          })
        );
      }
    },
    62678: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return r;
        },
      });
      var i = n(60107),
        l = n(3476),
        a = n(60171),
        o = n(15039);
      let r = () => {
        let e = (0, a.useParams)().coinId,
          { data: t } = (0, i.Z)(e),
          [n, r] = (0, o.useState)({}),
          [s, c] = (0, o.useState)({}),
          [d, u] = (0, o.useState)(0);
        return (
          (0, o.useEffect)(() => {
            let n = async () => {
              let n;
              let i = (0, l.dZ)({ id: e }),
                a = i.cast(null == t ? void 0 : t.coin);
              try {
                await i.validate(a, {
                  abortEarly: !1,
                  context: { isFinal: !0, unit: "wei" },
                });
              } catch (e) {
                "ValidationError" === e.name
                  ? (n = e.inner.reduce((e, t) => {
                      let { path: n, ...i } = t;
                      return { ...e, [n]: i };
                    }, {}))
                  : console.log("Error validating coin:", e);
              }
              let { fields: o } = i.describe({
                  context: { isFinal: !0 },
                  value: a,
                }),
                s =
                  Object.entries(o).filter((e) => {
                    let [t, { optional: n }] = e;
                    return n;
                  }).length - 0;
              c(n), r(o), u(s);
            };
            (null == t ? void 0 : t.coin) && n();
          }, [null == t ? void 0 : t.coin, e]),
          {
            requiredCount: d,
            errorsCount: s ? Object.keys(s).length : 0,
            errors: s,
            fields: n,
          }
        );
      };
    },
    99622: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return J;
          },
        });
      var i = n(2067),
        l = n(52464),
        a = n.n(l),
        o = n(15955),
        r = n(65130),
        s = n(2384),
        c = n(80742),
        d = n(74354),
        u = n(96560),
        p = n(21714),
        m = n(48028),
        f = n(64735),
        h = n.n(f),
        v = n(15039),
        x = (e) => {
          var t;
          let {
              name: n,
              label: l,
              placeholder: a,
              className: r,
              presets: f,
              icon: x,
              helpText: g,
              description: b,
            } = e,
            [y, I] = (0, v.useState)(!1),
            [j, w, T] = (0, m.U$)(n),
            { onSubmit: N } = (0, d.xv)(),
            B = (0, v.useCallback)(
              h()((e, t, n) => (null == N ? void 0 : N(e, t, n)), 1e3, {
                trailing: !0,
              }),
              [N]
            ),
            S = (e) => e.toString().replace(/[^0-9]/g, "");
          return (0, i.jsxs)("div", {
            className: (0, u.cn)(
              "relative col-span-2 col-start-2 flex flex-col gap-2",
              r
            ),
            children: [
              (0, i.jsx)(c.Z, {
                className: "w-full",
                label: l,
                placeholder: a,
                type: "string",
                step: 1,
                ...j,
                value:
                  null === (t = j.value) || void 0 === t
                    ? void 0
                    : t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                description: b,
                icon: x,
                error: w.error,
                onChange: (e) => {
                  let t = S(e.target.value);
                  T.setValue(t), null == B || B(n, t);
                },
                helpText: g,
              }),
              f.length > 0 &&
                (0, i.jsxs)(p.fC, {
                  open: y,
                  children: [
                    (0, i.jsx)(p.xz, {
                      children: (0, i.jsxs)(s.default, {
                        htmlType: "button",
                        type: "ghost",
                        className: "absolute right-2 top-10 !text-gray-60",
                        onClick: () => I(!y),
                        children: [
                          "Presets ",
                          (0, i.jsx)(o.ChevronBottomIcon, {}),
                        ],
                      }),
                    }),
                    (0, i.jsx)(p.h_, {
                      children: (0, i.jsx)(p.VY, {
                        align: "end",
                        className: (0, u.cn)(
                          "text-gray-80 z-50 -mt-2 flex w-40 flex-col items-end rounded-md bg-gray-20 p-2 shadow-lg outline-none",
                          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                        ),
                        onInteractOutside: () => I(!1),
                        children: f.map((e) =>
                          (0, i.jsx)(
                            s.default,
                            {
                              htmlType: "button",
                              type: "ghost",
                              fullWidth: !0,
                              className:
                                "justify-end text-right !text-gray-60 hover:!text-gray-85",
                              onClick: () => {
                                let t = S(e);
                                T.setValue(t), null == B || B(n, t), I(!1);
                              },
                              children: e,
                            },
                            "preset-".concat(e)
                          )
                        ),
                      }),
                    }),
                  ],
                }),
            ],
          });
        },
        g = n(30156),
        b = n(60107),
        y = n(60171),
        I = n(83297),
        j = n(42482),
        w = n(36013),
        T = n(53720),
        N = n(20886),
        B = n(76859),
        S = n(83781),
        P = n(88416);
      let k = (e) => {
        let { label: t, children: n, className: l } = e;
        return (0, i.jsxs)("div", {
          className: l,
          children: [
            (0, i.jsx)(P.e, { className: "bg-gray-20 px-4", label: t }),
            (0, i.jsx)("div", {
              className:
                "rounded-md rounded-tl-none bg-gray-20 px-4 pb-[12px] pt-2 text-gray-95",
              children: n,
            }),
          ],
        });
      };
      var A = n(54213),
        C = n(65031),
        E = n(77297),
        M = n(21675),
        D = n(61590),
        L = n(51123),
        F = n(91818),
        H = n(43413);
      let R = (e) => {
        let { icon: t, notice: n, isWeb3: l = !1, ...a } = e;
        return (0, i.jsxs)("div", {
          className:
            "flex items-center justify-between gap-2 rounded-full bg-gray-100/10 py-1 pl-4 pr-1 text-gray-95",
          children: [
            (0, i.jsxs)("div", {
              className: "inline-flex items-center gap-2 text-sm leading-none",
              children: [t, n],
            }),
            l ? (0, i.jsx)(H.t, { ...a }) : (0, i.jsx)(s.default, { ...a }),
          ],
        });
      };
      var Z = n(26933),
        O = n(26871),
        V = n(51563);
      let W = (e) => {
        let { coin: t, className: n = "" } = e,
          { symbol: l, name: a, erc20Address: o } = t,
          [r, s] = (0, v.useState)(50),
          c = (0, v.useRef)(null),
          d = (0, v.useMemo)(
            () => (0, O.qF)(o, { width: 929, height: 666 }),
            [o]
          );
        return (
          (0, v.useEffect)(() => {
            let e = () => {
              c.current && s(0.05 * c.current.clientWidth);
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, i.jsxs)("div", {
            className: (0, u.cn)(
              "relative overflow-hidden",
              "flex flex-col justify-between",
              "rounded-md !rounded-bl-none bg-center",
              "justify-end",
              "aspect-square",
              !d && "bg-striped-diagonal",
              n
            ),
            style: {
              backgroundImage: d
                ? "url(".concat((0, Z.s)(d, { resize: "1600x" }), ")")
                : void 0,
              backgroundSize: "140%",
            },
            ref: c,
            children: [
              (0, i.jsx)("div", { className: "grow" }),
              (0, i.jsx)("div", {
                className: "mt-40 w-24 lg:w-[7.5rem]",
                children: (0, i.jsx)("div", {
                  className: (0, u.cn)(
                    "aspect-square rounded-md p-2",
                    "backdrop-blur-lg bg-gray-100/10 filter"
                  ),
                  children: (0, i.jsx)(V.i, { coin: t }),
                }),
              }),
              (0, i.jsxs)("div", {
                className: "flex flex-col",
                children: [
                  (0, i.jsx)("div", {
                    className: "w-full",
                    children: (0, i.jsx)("div", {
                      className: (0, u.cn)(
                        "corner-b-l bg-black !inline-flex bg-gray-10 !pt-2 font-bold",
                        "!min-h-[2.5rem] !min-w-[25%]",
                        "max-w-[calc(100%-4rem-3rem)]"
                      ),
                      children: (0, i.jsx)("div", {
                        className: "relative ml-1 w-full overflow-hidden pr-8",
                        children: (0, i.jsxs)("span", {
                          className:
                            "whitespace-nowrap font-mono text-highlight",
                          children: ["$", l],
                        }),
                      }),
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "w-full",
                    children: (0, i.jsx)("div", {
                      className: (0, u.cn)(
                        "inline-block",
                        "relative",
                        "w-full min-w-[50%] max-w-[90%] md:w-auto lg:max-w-[90%]"
                      ),
                      children: (0, i.jsx)("div", {
                        className:
                          "corner-b-l relative w-full bg-gray-10 text-2xl",
                        children: (0, i.jsx)("div", {
                          className:
                            "w-full overflow-hidden text-ellipsis rounded-bl-md rounded-tr-md bg-gray-10 text-2xl",
                          children: (0, i.jsx)("div", {
                            className: (0, u.cn)(
                              "relative flex w-auto translate-y-1 items-center overflow-hidden text-ellipsis pl-1 text-2xl font-bold",
                              "over text-gray-95",
                              a.length <= 30 && "whitespace-nowrap"
                            ),
                            style: {
                              paddingTop: r / 2 - 5,
                              paddingBottom: "calc(".concat(r / 2, "px + 5px)"),
                            },
                            children: (0, i.jsx)("h1", {
                              style: { fontSize: r },
                              children: a,
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var q = n(45574),
        _ = n(25463),
        U = n(93961),
        z = (e) => {
          let { coinId: t, maxAmounts: n } = e,
            { data: l } = (0, b.Z)(t),
            { data: a, refetch: r } = (0, T.b)({
              erc20Address: l.coin.erc20Address,
              chainId: l.coin.chainId,
            }),
            s = l.coin.erc20Address,
            { writeContractAsync: c, isPending: d } = (0, q.S)(),
            u = !(null == a ? void 0 : a.fundedDate),
            p = (null == l ? void 0 : l.coin.projectSellTaxBasisPoints) > 500,
            m = (null == l ? void 0 : l.coin.projectBuyTaxBasisPoints) / 100,
            f = (null == l ? void 0 : l.coin.projectSellTaxBasisPoints) / 100,
            h = m > 0 || f > 0,
            v =
              (null == a ? void 0 : a.maxTokensPerWallet) > 0 ||
              (null == a ? void 0 : a.maxTokensPerTransaction) > 0;
          return (null == a ? void 0 : a.owner) === U.D
            ? null
            : (0, i.jsx)(R, {
                icon: (0, i.jsx)(o.Scissors, {}),
                isWeb3: !0,
                notice: p
                  ? "Sell tax must be less than 5% to renounce your contract."
                  : u
                  ? "You must fund the liquidity pool to renounce your contract."
                  : "Renounce your contract to lock in your settings forever.",
                loading: !1,
                disabled: p || u,
                onClick: async () => {
                  if (v || h) {
                    let e =
                        v &&
                        [
                          "Max tokens per wallet: ".concat(
                            n(
                              null == a ? void 0 : a.maxTokensPerWallet,
                              null == a ? void 0 : a.totalSupply
                            )
                          ),
                          "Max tokens per transaction: ".concat(
                            n(
                              null == a ? void 0 : a.maxTokensPerTransaction,
                              null == a ? void 0 : a.totalSupply
                            )
                          ),
                        ].join("\n"),
                      t =
                        h &&
                        [
                          "Final buy tax: ".concat(m, "%"),
                          "Final sell tax: ".concat(f, "%"),
                        ].join("\n");
                    if (
                      !window.confirm(
                        "Are you sure you want to renounce your contract?\n This will lock in your settings forever.\n\n".concat(
                          [t, e].join("\n\n")
                        )
                      )
                    )
                      return;
                  }
                  await c({
                    abi: _.gH,
                    chainId: null == l ? void 0 : l.coin.chainId,
                    address: s,
                    functionName: "renounceOwnership",
                  }),
                    r();
                },
                chainId: null == l ? void 0 : l.coin.chainId,
                children: "Renounce Ownership",
              });
        };
      let G = (e, t) =>
          t && e && e !== BigInt(0)
            ? "".concat(
                parseFloat(((Number(e) / Number(t)) * 100).toFixed(2)),
                "%"
              )
            : "Unlimited",
        Y = (e, t) => {
          if (!e) return "No tax";
          let n = Number.parseFloat(e.toString()) / 100;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("span", { children: [(0, E.uf)(n), "%"] }),
              " ",
              t > 0 &&
                (0, i.jsxs)("span", {
                  className: "text-sm",
                  children: [
                    "+ ",
                    (0, E.uf)(Number(t) / 100),
                    "% Metadrop tax",
                  ],
                }),
            ],
          });
        },
        K = {
          Twitter: "https://twitter.com/",
          Telegram: "https://t.me/",
          Website: "https://",
        };
      function X(e) {
        let { coinId: t } = e,
          { address: n } = (0, F.m)(),
          [l, a] = (0, A.m)(),
          { data: r } = (0, b.Z)(t),
          { data: s } = (0, T.b)(
            r
              ? {
                  coinType: B.CoinType.METADROP,
                  chainId: r.coin.chainId,
                  erc20Address: r.coin.erc20Address,
                }
              : null
          ),
          { data: c } = (0, D.Ep)(),
          { coin: d } = r,
          p = (0, j.G)(
            (0, S.E)(
              d.deployedAt,
              Number(null == s ? void 0 : s.metadropTaxPeriodInDays) ||
                Number(N.Ns.taxPeriodInDays)
            )
          ),
          m = !!(null == s ? void 0 : s.fundedDate),
          f = null == c ? void 0 : c.poolPhaseStatus,
          h = d.erc20driPoolAddress && "succeeded" !== f,
          v = (0, i.jsx)(R, {
            icon: (0, i.jsx)(o.CryptoCoinIcon, {}),
            href: d.erc20driPoolAddress
              ? void 0
              : "/app/coins/[coinId]/liquidity?coinId=".concat(d.id),
            as: d.erc20driPoolAddress
              ? void 0
              : "/app/coins/".concat(d.id, "/liquidity"),
            onClick: () => {
              d.erc20driPoolAddress &&
                window.open(
                  "/app/coins/[coinId]/liquidity?coinId=".concat(d.id)
                );
            },
            notice: d.erc20driPoolAddress
              ? "Supply the liquidity to the pool. Any address can call this."
              : "Deposit ETH to provide liquidity for your coin.",
            children: d.erc20driPoolAddress ? "Supply now" : "Deposit Now",
          }),
          x = { Twitter: d.twitter, Telegram: d.telegram, Website: d.website };
        return (0, i.jsx)(g.U, {
          children: (0, i.jsxs)("div", {
            className: "col-start-2 flex flex-col py-4",
            children: [
              (0, i.jsxs)("div", {
                className: "mb-2 flex flex-col gap-2",
                children: [
                  !m && !h && v,
                  (null == s ? void 0 : s.owner) === n &&
                    (0, i.jsx)(z, { coinId: d.id, maxAmounts: G }),
                ],
              }),
              (0, i.jsx)(W, { coin: d, className: "aspect-auto" }),
              d.description &&
                (0, i.jsx)("div", {
                  className: "p-4",
                  children: d.description,
                }),
              (0, i.jsxs)("div", {
                className: "mt-4 grid grid-cols-2 gap-4",
                children: [
                  (0, i.jsxs)("div", {
                    className: "relative col-span-2",
                    children: [
                      (0, i.jsx)(k, {
                        className: "",
                        label: "Contract",
                        children: (0, i.jsxs)("div", {
                          className: "flex items-center justify-between",
                          onClick: () => a(d.erc20Address),
                          children: [
                            d.erc20Address,
                            (0, i.jsx)(M.K, { copied: l }),
                          ],
                        }),
                      }),
                      (0, i.jsxs)("a", {
                        href: ""
                          .concat(w.kh[d.chainId], "/address/")
                          .concat(d.erc20Address),
                        target: "_blank",
                        rel: "noreferrer",
                        className: (0, u.cn)(
                          "group absolute right-4 top-2 flex items-center gap-2 font-mono text-sm text-highlight active:scale-95",
                          "!transition-transform !ease-in-out-quad"
                        ),
                        children: [
                          (0, i.jsxs)("span", {
                            className:
                              "transition-transform ease-in-out-quad group-hover:translate-x-[3px]",
                            children: ["View on ", w.O0[d.chainId]],
                          }),
                          (0, i.jsx)(o.ArrowTopRightLinkIcon, {
                            className:
                              "h-[10px] w-[10px] translate-y-[1px] transition-transform ease-in-out-quad group-hover:translate-y-0 group-hover:rotate-45",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)(k, {
                    label: "Deployed",
                    className: "col-span-1",
                    children: d.deployedAt
                      ? (0, C.p6)(d.deployedAt, "local")
                      : "",
                  }),
                  (0, i.jsx)(k, {
                    label: "Total supply",
                    className: "col-span-1",
                    children: (null == s ? void 0 : s.totalSupply)
                      ? (0, E.uf)(
                          Number.parseInt(
                            (0, L.d)(null == s ? void 0 : s.totalSupply),
                            10
                          )
                        )
                      : "—",
                  }),
                  (0, i.jsx)(k, {
                    label: "Max tokens per wallet",
                    className: "col-span-1",
                    children: G(
                      null == s ? void 0 : s.maxTokensPerWallet,
                      null == s ? void 0 : s.totalSupply
                    ),
                  }),
                  (0, i.jsx)(k, {
                    label: "Max tokens per txn",
                    className: "col-span-1",
                    children: G(
                      null == s ? void 0 : s.maxTokensPerTransaction,
                      null == s ? void 0 : s.totalSupply
                    ),
                  }),
                  (0, i.jsx)(k, {
                    label: "Buy tax",
                    className: "col-span-1",
                    children: Y(
                      null == s ? void 0 : s.projectBuyTaxBasisPoints,
                      p
                        ? null == s
                          ? void 0
                          : s.metadropBuyTaxBasisPoints
                        : 0n
                    ),
                  }),
                  (0, i.jsx)(k, {
                    label: "Sell tax",
                    className: "col-span-1",
                    children: Y(
                      null == s ? void 0 : s.projectSellTaxBasisPoints,
                      p
                        ? null == s
                          ? void 0
                          : s.metadropSellTaxBasisPoints
                        : 0n
                    ),
                  }),
                  Object.entries(x).map((e) => {
                    let [t, n] = e;
                    return n
                      ? (0, i.jsxs)(
                          k,
                          {
                            className: "col-span-2",
                            label: t,
                            children: [K[t], n],
                          },
                          t
                        )
                      : null;
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var Q = n(80054),
        $ = n(13633);
      function J(e) {
        let { params: t } = e,
          { data: n, isLoading: l } = (0, b.Z)(t.coinId),
          s = null == n ? void 0 : n.coin,
          c = (0, y.useRouter)();
        return (
          (0, v.useEffect)(() => {
            l || n || (I.A.error("Coin not found"), c.push("/app/coins"));
          }, [l, n, c]),
          (null == s ? void 0 : s.erc20Address)
            ? (0, i.jsx)(X, { coinId: t.coinId })
            : (0, i.jsx)(Q.Z, {
                title: "Coin Setup",
                coin: s,
                children: (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsxs)(g.U, {
                      title: "Let's get you started",
                      subtitle:
                        "Set up the on-chain properties of your coin and how it will appear when viewed in wallets.",
                      tipIcon: o.StarIcon,
                      tipTitle: "Immutable options",
                      tipText:
                        "Token name, token symbol, total supply and social links are stored on-chain and cannot be changed once the token is deployed.",
                      tipGuideBar: !0,
                      className: "mb-4",
                      children: [
                        (0, i.jsx)(r.u, { name: "chainId" }),
                        (0, i.jsx)(r.u, { name: "name" }),
                        (0, i.jsxs)("div", {
                          className:
                            "col-span-2 col-start-2 grid grid-cols-2 gap-8",
                          children: [
                            (0, i.jsx)(r.u, { name: "symbol" }),
                            (0, i.jsx)(x, {
                              name: "supply",
                              label: "Total supply",
                              placeholder: "",
                              presets: [
                                "10,000",
                                "1,000,000",
                                "10,000,000",
                                "69,420,000",
                                "100,000,000",
                                "1,000,000,000",
                                "10,000,000,000",
                                "100,000,000,000",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(g.U, {
                      children: [
                        (0, i.jsxs)("div", {
                          className:
                            "jsx-6e0101c574811fdb -mb-1 md:flex-row flex-col flex gap-8",
                          children: [
                            (0, i.jsx)(r.u, {
                              aspect: "aspect-square w-40 h-40 grow-0",
                              name: "coinImageURL",
                              parentId: null == s ? void 0 : s.id,
                            }),
                            (0, i.jsx)(r.u, { name: "description" }),
                            (0, i.jsx)(a(), {
                              id: "6e0101c574811fdb",
                              children:
                                '@media(min-width:768px){label[for="description"] .input{height:10rem}label[for="description"] textarea{height:100%}}',
                            }),
                          ],
                        }),
                        (0, i.jsx)($._, { current: "" }),
                      ],
                    }),
                  ],
                }),
              })
        );
      }
    },
    7263: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return k;
        },
      });
      var i = n(2067),
        l = n(2384),
        a = n(15955),
        o = n(60107),
        r = n(96560),
        s = n(69436);
      function c(e) {
        return !!e;
      }
      var d = n(43568),
        u = n(71335),
        p = n.n(u),
        m = n(60171),
        f = n(62678);
      function h() {
        (0, m.useRouter)();
        let e = (0, m.useParams)().coinId,
          { requiredCount: t, errorsCount: n } = (0, f.S)();
        return (0, i.jsxs)(p(), {
          className: "group relative text-left",
          href: "/app/coins/[coinId]/review-and-launch?coinId=".concat(e),
          as: "/app/coins/".concat(e, "/review-and-launch"),
          prefetch: !0,
          children: [
            (0, i.jsxs)("div", {
              className: (0, r.cn)(
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
                  className: (0, r.cn)("mb-1 text-sm", "text-gray-60"),
                  children: "Get your coin ready to launch on Metadrop.",
                }),
                (0, i.jsx)("div", {
                  className: "h-[4px] overflow-hidden rounded-full bg-gray-50",
                  children: (0, i.jsx)("div", {
                    className:
                      "h-full rounded-full bg-highlight !transition-all",
                    style: { width: "".concat((1 - n / t) * 100, "%") },
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
              className: (0, r.cn)(
                "mx-4 h-2 rounded-b-md opacity-[0.5]",
                "inset-4 bg-gray-20",
                "transition-all group-hover:h-3 group-hover:bg-gray-30 "
              ),
            }),
            (0, i.jsx)("div", {
              className: (0, r.cn)(
                "mx-8 h-2 rounded-b-md opacity-[0.25]",
                "inset-4 bg-gray-20",
                "transition-all group-hover:h-3 group-hover:bg-gray-30"
              ),
            }),
          ],
        });
      }
      var v = n(83297),
        x = n(42482),
        g = n(36013),
        b = n(74734),
        y = n(44544),
        I = n(59757),
        j = n(9038),
        w = n(637),
        T = n(28967),
        N = n(15039);
      let B = (e) => {
          let { coin: t } = e,
            { coinId: n } = (0, m.useParams)(),
            { mutate: a } = (0, o.Z)(n),
            [r, c] = (0, N.useState)(!1),
            d = (null == t ? void 0 : t.contractVerifiedAt) !== null,
            u =
              (0, x.G)(
                (null == t ? void 0 : t.verificationRequestedAt) &&
                  (0, j.m)(null == t ? void 0 : t.verificationRequestedAt, 10)
              ) && !!(null == t ? void 0 : t.verificationRequestedAt),
            p = async () => {
              c(!0);
              try {
                await (0, s.Z)("/v1/coins/".concat(n, "/verify"), {
                  method: "POST",
                }),
                  v.A.success(
                    "Verifying contract. This can take up to 5 minutes."
                  ),
                  setTimeout(() => a, 5e3);
              } catch (e) {
                v.A.error(e), c(!1);
              }
            };
          return (0, i.jsx)(w.M, {
            initial: !1,
            children:
              !d &&
              (0, i.jsx)(T.E.div, {
                ...(0, b.g)(),
                className: "w-full",
                children: (0, i.jsx)(l.default, {
                  onClick: p,
                  disabled: r || u,
                  fullWidth: !0,
                  children: d ? "Verified" : "Verify Contract",
                }),
              }),
          });
        },
        S = () => {
          let { data: e } = (0, y.Z)(),
            { coinId: t } = (0, m.useParams)(),
            n = null == e ? void 0 : e.user,
            a = (0, m.useRouter)();
          return (null == n ? void 0 : n.isMetadropTeam)
            ? (0, i.jsx)(l.default, {
                onClick: async () => {
                  let { coin: e } = await (0, s.Z)(
                    "/internal/coins/".concat(t, "/duplicate"),
                    { method: "POST" }
                  );
                  a.push("/app/coins/".concat(e.id));
                },
                children: "Duplicate Coin",
              })
            : null;
        },
        P = () => {
          var e, t, n;
          let { coinId: a } = (0, m.useParams)(),
            { data: r } = (0, o.Z)(a);
          return (0, i.jsxs)("div", {
            className: "flex flex-col gap-2",
            children: [
              (0, i.jsx)(S, {}),
              (0, i.jsx)(B, { coin: null == r ? void 0 : r.coin }),
              (0, i.jsx)("hr", { className: "my-1 border-gray-20" }),
              (0, i.jsx)(l.default, {
                target: "_blank",
                as: "/coins/".concat(null == r ? void 0 : r.coin.slug),
                href: "/coins/[slug]?slug=".concat(
                  null == r ? void 0 : r.coin.slug
                ),
                children: "View profile",
              }),
              (0, i.jsxs)(l.default, {
                type: "secondary",
                target: "_blank",
                href: ""
                  .concat(
                    g.kh[
                      null == r
                        ? void 0
                        : null === (e = r.coin) || void 0 === e
                        ? void 0
                        : e.chainId
                    ],
                    "/address/"
                  )
                  .concat(
                    null == r
                      ? void 0
                      : null === (t = r.coin) || void 0 === t
                      ? void 0
                      : t.erc20Address
                  ),
                children: [
                  "View on ",
                  g.O0[
                    null == r
                      ? void 0
                      : null === (n = r.coin) || void 0 === n
                      ? void 0
                      : n.chainId
                  ],
                ],
              }),
            ],
          });
        },
        k = () => {
          var e;
          let t = (0, m.useParams)().coinId,
            { data: n, isLoading: l } = (0, o.Z)(t),
            s = !!(null == n
              ? void 0
              : null === (e = n.coin) || void 0 === e
              ? void 0
              : e.erc20Address),
            d = !I.Y;
          return {
            links: (0, N.useMemo)(() => {
              let e = (e) => ({
                href: "/app/coins/[coinId]".concat(e, "?coinId=").concat(t),
                as: "/app/coins/".concat(t).concat(e),
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
                            let { className: t } = e;
                            return (0, i.jsx)(a.WebsiteIcon, {
                              className: (0, r.cn)("p-[3px]", t),
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
                            let { className: t } = e;
                            return (0, i.jsx)(a.WebsiteIcon, {
                              className: (0, r.cn)("p-[3px]", t),
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
            }, [l, d, s, t, null == n ? void 0 : n.coin.driPoolEnabled]),
            footer: (0, N.useMemo)(
              () => (s ? (0, i.jsx)(P, {}) : (0, i.jsx)(h, {})),
              [s]
            ),
          };
        };
    },
    88416: function (e, t, n) {
      "use strict";
      n.d(t, {
        e: function () {
          return o;
        },
      });
      var i = n(2067),
        l = n(96560),
        a = n(37397);
      let o = (e) => {
        let { label: t, className: n = "", Component: o = "div", ...r } = e;
        return (0, i.jsxs)(o, {
          ...r,
          className: (0, l.cn)(
            "relative px-6 pb-1 pt-3 text-sm font-bold text-highlight",
            "table self-baseline",
            "rounded-t-sm",
            n
          ),
          children: [
            t,
            (0, i.jsx)(a.UH, {
              className: "absolute bottom-0 right-0 translate-x-full",
            }),
          ],
        });
      };
    },
    26933: function (e, t, n) {
      "use strict";
      n.d(t, {
        s: function () {
          return o;
        },
      });
      var i = n(2067),
        l = n(96560),
        a = n(15039);
      t.Z = (e) => {
        let {
            src: t,
            type: n = "image",
            transforms: r = { resize: "1600" },
            className: s,
            alt: c,
            ...d
          } = e,
          { src_: u, type: p } = (0, a.useMemo)(() => {
            let e = n;
            return (
              /gif2video/.test(t) && (e = "video"),
              { src_: "video" === e ? t : o(t, r), type: e }
            );
          }, [t, r, n]);
        return "image" === p
          ? (0, i.jsx)("img", {
              className: (0, l.cn)("no-fallback h-full object-cover", s),
              alt: null != c ? c : "decorative",
              src: u,
              ...d,
            })
          : "video" === p
          ? (0, i.jsx)("video", {
              className: s,
              autoPlay: !0,
              loop: !0,
              src: u,
              ...d,
              muted: !0,
            })
          : void 0;
      };
      let o = (e, t) => {
        if (!/ucarecdn/.test(e)) return e;
        let n = Object.entries(null != t ? t : {}).reduce((e, t) => {
          let [n, i] = t;
          return "".concat(e, "-/").concat(n, "/").concat(i, "/");
        }, "-/quality/best/-/format/auto/");
        return "".concat(e).concat(n);
      };
    },
    43413: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return m;
        },
      });
      var i = n(2067),
        l = n(48902),
        a = n(15039),
        o = n(48213),
        r = n(91818),
        s = n(66392),
        c = n(13984),
        d = n(21704),
        u = n(2384),
        p = n(83297);
      let m = (e) => {
        var t;
        let {
            bypass: n = !1,
            bypassSwitchNetwork: m = !1,
            disconnectedText: f = "Connect wallet",
            chainId: h = o.R.id,
            onClick: v,
            ...x
          } = e,
          { isConnected: g, isConnecting: b, address: y } = (0, r.m)(),
          { chain: I } = (0, r.m)(),
          {
            chains: j,
            switchChainAsync: w,
            isPending: T,
            isIdle: N,
            ...B
          } = (0, s.o)(),
          { data: S } = (0, c.O)({ watch: !0 }),
          P = (0, d.K)({ address: y });
        if (
          ((0, a.useEffect)(() => {
            P.refetch();
          }, [S, P.refetch]),
          n)
        )
          return (0, i.jsx)(u.default, { ...x });
        if (g && (null == I ? void 0 : I.id) !== h && !m) {
          let e = j.find((e) => e.id === h);
          return (0, i.jsx)(u.default, {
            ...x,
            disabled: !N,
            onClick: (t) => {
              w({ chainId: e.id }), t.preventDefault();
            },
            children: T
              ? "Switching to ".concat(null == e ? void 0 : e.name, "...")
              : "Switch to ".concat((null == e ? void 0 : e.name) || "unknown"),
          });
        }
        if (!g)
          return (0, i.jsx)(l.x3.Custom, {
            children: (e) =>
              (0, i.jsx)(u.default, {
                loading: b,
                onClick: (t) => {
                  t.preventDefault(), e.show();
                },
                className: x.className,
                ...x,
                disabled: b,
                children: b ? "Connecting..." : f,
              }),
          });
        if (
          (null === (t = P.data) || void 0 === t ? void 0 : t.value) ===
          BigInt(0)
        )
          return (0, i.jsx)(u.default, {
            ...x,
            onClick: (e) => {
              e.preventDefault(),
                p.A.error(
                  "You don't have enough ETH in your wallet to perform this transaction."
                );
            },
            children: x.children,
          });
        let { children: k, ...A } = x;
        return (0, i.jsx)(u.default, { onClick: v, ...A, children: k });
      };
    },
    45574: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return p;
        },
      });
      var i = n(15039),
        l = n(83297),
        a = n(91818),
        o = n(53953),
        r = n(13173),
        s = n(8979),
        c = n(13506),
        d = n(38372);
      let u = (e) => {
          let t = /Error: (\w+)/.exec(e.message);
          if (t)
            return (
              { OwnableUnauthorizedAccount: "You must be the owner" }[t[1]] ||
              t[1]
            );
        },
        p = () => {
          let { address: e } = (0, a.m)(),
            { writeContractAsync: t, ...n } = (0, o.S)(),
            p = (0, r.x)(),
            m = (0, s.Z)();
          (0, c.t)();
          let f = (0, i.useCallback)(
            async (e, n) => {
              let {
                loading: i = "Confirm transaction",
                success: a = "Transaction success!",
                error: o = "Failed to send transaction",
                ...r
              } = e;
              return new Promise((e, s) => {
                let c;
                let p = new Promise((i, a) => {
                  (async () => {
                    let o;
                    try {
                      console.log({ writeArgs: r }),
                        (o = await t(r, n)),
                        l.A.loading("Confirming transaction...", { id: c });
                    } catch (t) {
                      let e = u(t);
                      (/User rejected the request/.test(t.message) ||
                        /User denied transaction signature/.test(t.message)) &&
                        (l.A.error("Cancelled", { id: c }), l.A.dismiss(c)),
                        console.log("Error", t),
                        l.A.error("Error sending transaction", { id: c }),
                        a(e),
                        s(e);
                      return;
                    }
                    try {
                      let t = await (0, d.e)(m, { hash: o });
                      i(t), e(t);
                    } catch (e) {
                      a(e), s(e);
                    }
                  })();
                });
                c = l.A.promise(p, {
                  loading: i,
                  success: a,
                  error: (e) => e || o,
                });
              });
            },
            [p, t, m]
          );
          return { ...n, writeContractAsyncNative: t, writeContractAsync: f };
        };
    },
    54213: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return a;
        },
      });
      var i = n(15039),
        l = n(95599);
      let a = () => {
        let [e, t] = (0, i.useState)(!1),
          [n, a] = (0, l.Z)(),
          o = (0, i.useRef)(null);
        return [
          e,
          (0, i.useCallback)(
            (e) => {
              clearTimeout(o.current),
                a(e),
                t(!0),
                (o.current = setTimeout(() => {
                  t(!1);
                }, 1e3));
            },
            [a]
          ),
        ];
      };
    },
    42482: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return o;
        },
        m: function () {
          return a;
        },
      });
      var i = n(23987),
        l = n(15039);
      let a = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1e3,
            t = arguments.length > 1 ? arguments[1] : void 0,
            [n, i] = (0, l.useState)(new Date());
          return (
            (0, l.useEffect)(() => {
              let n = setInterval(() => {
                let e = new Date();
                t && e > t && clearInterval(n), i(e);
              }, e);
              return () => clearInterval(n);
            }),
            n
          );
        },
        o = (e) => {
          let [t, n] = (0, l.useState)((0, i.R)(new Date(), e));
          return (
            (0, l.useEffect)(() => {
              let l;
              if (!t && !(0, i.R)(new Date(), e)) return;
              let a = () => {
                let t =
                  (null == e ? void 0 : e.getTime()) - new Date().getTime();
                if (!(0, i.R)(new Date(), e)) {
                  n(!1);
                  return;
                }
                n(!0), (l = setTimeout(a, Math.min(t, 1728e6)));
              };
              return a(), () => clearTimeout(l);
            }, [null == e ? void 0 : e.getTime()]),
            t
          );
        };
    },
    55482: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return r;
        },
      });
      var i = n(91610),
        l = n(15039),
        a = n(91873),
        o = n(13984);
      function r(e) {
        let { contracts: t, watch: n, ...r } = e,
          { data: s, ...c } = (0, a.N)({
            allowFailure: !0,
            contracts: t,
            ...r,
          }),
          { data: d } = (0, o.O)({ watch: n });
        (0, l.useEffect)(() => {
          c.refetch();
        }, [d, c.refetch]);
        let u = (0, l.useMemo)(
          () => (c.isLoading ? null : (0, i.X)(t, s)),
          [t, s, c.isLoading]
        );
        return { ...c, data: u };
      }
    },
    26871: function (e, t, n) {
      "use strict";
      n.d(t, {
        qF: function () {
          return u;
        },
      });
      var i = n(13359),
        l = n.n(i),
        a = n(69239),
        o = n.n(a),
        r = n(81345),
        s = n.n(r),
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
          let i = e.toString(),
            { width: a = 200, height: r = 200, startColor: u = null } = t || {},
            f = s()(i),
            h = o()(f % 360, 1, 0.5),
            v = u ? m(u) : (0, c.U)(i) ? m(p(i, "hex")) : null,
            x = l()(h[0][0], h[0][1], h[0][2]),
            g = l()(h[1][0], h[1][1], h[1][2]),
            b = v
              ? (function (e) {
                  let [t, n, i] = e.split(", ").map(parseFloat),
                    l = i / 100,
                    a = (n / 100) * Math.min(l, 1 - l),
                    o = (e) => {
                      let n = (e + t / 30) % 12;
                      return l - a * Math.max(Math.min(n - 3, 9 - n, 1), -1);
                    },
                    r = Math.round(255 * o(0)),
                    s = Math.round(255 * o(8)),
                    c = Math.round(255 * o(4));
                  return "rgb(".concat(r, ", ").concat(s, ", ").concat(c, ")");
                })(v)
              : "rgb(".concat(x[0], ", ").concat(x[1], ", ").concat(x[2], ")"),
            y = "rgb(".concat(g[0], ", ").concat(g[1], ", ").concat(g[2], ")"),
            I = d(),
            j = '<?xml version="1.0" encoding="UTF-8"?>\n<svg '
              .concat(a ? 'width="'.concat(a, 'px"') : "", " ")
              .concat(
                r ? 'height="'.concat(r, 'px"') : "",
                ' viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="'
              )
              .concat(I, '">\n      <stop stop-color="')
              .concat(b, '" offset="0%"></stop>\n      <stop stop-color="')
              .concat(
                y,
                '" offset="100%"></stop>\n    </linearGradient>\n  </defs>\n  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <rect id="Rectangle" fill="url(#'
              )
              .concat(
                I,
                ')" x="0" y="0" width="80" height="80"></rect>\n  </g>\n</svg>'
              );
          return n ? "data:image/svg+xml;base64,".concat(btoa(j)) : j;
        },
        p = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "hsl";
          return "hex" === t
            ? "#".concat(null == e ? void 0 : e.slice(2, 8))
            : m("#".concat(null == e ? void 0 : e.slice(2, 8)), !0);
        };
      function m(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (!e) return null;
        if (e.startsWith("#")) {
          let n = e.slice(1);
          if (3 === n.length) {
            let t = n[0],
              i = n[1],
              l = n[2];
            e = "#".concat(t).concat(t).concat(i).concat(i).concat(l).concat(l);
          }
          let i = parseInt(e.slice(1, 3), 16) / 255,
            l = parseInt(e.slice(3, 5), 16) / 255,
            a = parseInt(e.slice(5, 7), 16) / 255,
            o = Math.max(i, l, a),
            r = Math.min(i, l, a),
            s = (o + r) / 2;
          t && s < 0.5 && (s = 0.5);
          let c = 0,
            d = 0;
          if (o !== r) {
            let e = o - r;
            switch (((d = s > 0.5 ? e / (2 - o - r) : e / (o + r)), o)) {
              case i:
                c = (l - a) / e + (l < a ? 6 : 0);
                break;
              case l:
                c = (a - i) / e + 2;
                break;
              case a:
                c = (i - l) / e + 4;
            }
            c /= 6;
          }
          return ""
            .concat(360 * c, ", ")
            .concat(100 * d, "%, ")
            .concat(100 * s, "%");
        }
        if (e.startsWith("rgb")) {
          let n = e
              .slice(4, -1)
              .split(",")
              .map((e) => parseInt(e, 10)),
            i = n[0] / 255,
            l = n[1] / 255,
            a = n[2] / 255,
            o = Math.max(i, l, a),
            r = Math.min(i, l, a),
            s = 0,
            c = 0,
            d = (o + r) / 2;
          if ((t && d < 0.5 && (d = 0.5), o !== r)) {
            let e = o - r;
            switch (((c = d > 0.5 ? e / (2 - o - r) : e / (o + r)), o)) {
              case i:
                s = (l - a) / e + (l < a ? 6 : 0);
                break;
              case l:
                s = (a - i) / e + 2;
                break;
              case a:
                s = (i - l) / e + 4;
            }
            s /= 6;
          }
          return ""
            .concat(360 * s, ", ")
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
      "use strict";
      n.d(t, {
        HI: function () {
          return x;
        },
        O0: function () {
          return m;
        },
        V3: function () {
          return f;
        },
        ZD: function () {
          return v;
        },
        kh: function () {
          return p;
        },
        s4: function () {
          return h;
        },
      });
      var i = n(48213),
        l = n(57214),
        a = n(13027),
        o = n(33731),
        r = n(5781),
        s = n(12618),
        c = n(23123),
        d = n(18507),
        u = n(67934);
      let p = {
          [i.R.id]: "https://etherscan.io",
          [l.F.id]: "https://sepolia.etherscan.io",
          [a.y.id]: "https://arbiscan.io",
          [o.Z.id]: "https://sepolia.arbiscan.io",
          [r.A.id]: "https://blastscan.io",
          [s.d.id]: "https://sepolia.blastscan.io",
          [c.u.id]: "https://basescan.org",
          [d.L.id]: "https://sepolia.basescan.org",
          [u.c.id]: "https://eth95.dev",
        },
        m = {
          [i.R.id]: "Etherscan",
          [l.F.id]: "Etherscan Sepolia",
          [r.A.id]: "Blastscan",
          [s.d.id]: "Blastscan Sepolia",
          [c.u.id]: "Basescan",
          [d.L.id]: "Basescan Sepolia",
          [a.y.id]: "Arbitrum",
          [o.Z.id]: "Arbitrum Sepolia",
          [u.c.id]: "Eth95",
        },
        f = {
          [i.R.id]: "eth",
          [l.F.id]: "",
          [u.c.id]: "",
          [a.y.id]: "arbitrum",
          [o.Z.id]: "",
          [r.A.id]: "blastmainnet",
          [s.d.id]: "blast",
          [c.u.id]: "base",
          [d.L.id]: "",
        },
        h = {
          [i.R.id]: "ethereum",
          [l.F.id]: "",
          [a.y.id]: "arbitrum",
          [o.Z.id]: "",
          [r.A.id]: "blast",
          [s.d.id]: "",
          [c.u.id]: "base",
          [d.L.id]: "",
          [u.c.id]: "",
        },
        v = {
          [i.R.id]: "eth",
          [l.F.id]: "sepolia-testnet",
          [a.y.id]: "arbitrum",
          [r.A.id]: "blast",
          [s.d.id]: "",
          [c.u.id]: "base",
          [d.L.id]: "base",
          [u.c.id]: "",
        };
      function x(e, t, n) {
        return null === e
          ? void 0
          : h[e] && t
          ? "https://dexscreener.com/"
              .concat(h[e], "/")
              .concat(t, "?embed=1&theme=dark&trades=0&info=0")
          : f[e] && n
          ? "https://www.defined.fi/"
              .concat(f[e], "/")
              .concat(
                n,
                "?embedded=1&hideTxTable=1&hideSidebar=1&embedColorMode=HEX_SCREAMER"
              )
          : null;
      }
    },
    77297: function (e, t, n) {
      "use strict";
      n.d(t, {
        Bu: function () {
          return s;
        },
        FO: function () {
          return l;
        },
        uf: function () {
          return r;
        },
      });
      var i = n(30045);
      function l(e) {
        let t = "",
          n = 1;
        if (Math.abs(e) >= 1e9) (t = "B"), (n = 1e9);
        else if (Math.abs(e) >= 1e6) (t = "M"), (n = 1e6);
        else if (Math.abs(e) >= 1e3) (t = "K"), (n = 1e3);
        else if (1e3 > Math.abs(e)) return e.toLocaleString();
        return (e / n).toFixed(2).replace(/\.0+$/, "") + t;
      }
      let a = (e) =>
          "0" === e
            ? "₀"
            : "1" === e
            ? "₁"
            : "2" === e
            ? "₂"
            : "3" === e
            ? "₃"
            : "4" === e
            ? "₄"
            : "5" === e
            ? "₅"
            : "6" === e
            ? "₆"
            : "7" === e
            ? "₇"
            : "8" === e
            ? "₈"
            : "9" === e
            ? "₉"
            : void 0,
        o = (e) => [...String(e)].map(a).join(""),
        r = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            {
              isWei: n,
              coinDecimals: a = n ? 18 : void 0,
              decimals: s = 4,
              abbreviate: c = !1,
              rmDecimalsThreshold: d = 1e3,
              subscriptZeros: u = !1,
            } = t;
          if (null == e) return "";
          let p = a ? Number((0, i.b)(e, a)) : Number(e);
          d && p > d && (p = Math.round(p));
          let m = Math.round(p * 10 ** s) / 10 ** s,
            [f, h] = m.toString().split(".");
          if (u && 0 !== e) {
            let [e, t] = p.toFixed(40).split(".");
            if ("0" === e) {
              var v;
              let e =
                null === (v = t.match(/^0+/)) || void 0 === v
                  ? void 0
                  : v[0].length;
              if (e >= 5) {
                let n = Number(t.slice(e)).toPrecision(s),
                  i = "";
                for (let e = 0; e < n.length; e++) {
                  let t = n[e];
                  if ("." !== t && (i += t).length === s) break;
                }
                return "0.0".concat(o(e)).concat(i);
              }
            }
          }
          if (
            (0 === m &&
              m !== p &&
              (h = p
                .toLocaleString("en-US", { maximumFractionDigits: 15 })
                .split(".")[1]),
            m > 1 && h && !u)
          )
            h = r(m - Number(f), {
              ...t,
              isWei: !1,
              coinDecimals: void 0,
            }).split(".")[1];
          else {
            let e = null == h ? void 0 : h.split("");
            if (e && e.length > s) {
              let t = e.findIndex((e) => "0" !== e),
                n = Array(t).fill("0").join("");
              h =
                -1 === t
                  ? e.slice(0, s).join("")
                  : [n, ...e.slice(t).slice(0, Math.max(1, s - t + 1))].join(
                      ""
                    );
            }
          }
          let x =
            c && ("number" != typeof c || Number(f) > c)
              ? l(Number(f))
              : Number(f).toLocaleString();
          return (
            /[a-zA-Z]/.test(x) && (h = void 0),
            [x, h].filter((e) => null != e).join(".")
          );
        },
        s = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          return String(e).padStart(t, "0");
        };
    },
    74734: function (e, t, n) {
      "use strict";
      n.d(t, {
        g: function () {
          return i;
        },
      });
      let i = function () {
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
      "use strict";
      n.d(t, {
        p: function () {
          return i.py;
        },
      });
      var i = n(20886);
    },
    61722: function (e, t, n) {
      "use strict";
      n.d(t, {
        s3: function () {
          return i;
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
      let i = (e) => null;
    },
    91610: function (e, t, n) {
      "use strict";
      function i(e, t) {
        return t
          ? e.reduce(
              (e, n, i) => {
                let l = "string" == typeof n ? n : n.alias || n.functionName;
                return (null == t ? void 0 : t[i]) === void 0
                  ? e
                  : {
                      [l]: (function (e, t) {
                        try {
                          let { parseAs: n } = t,
                            { result: i, error: l } = e,
                            a = null != i ? i : e;
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
                              a = n(e);
                              break;
                            case "number" === n:
                              a = "number" == typeof i ? i : Number(i);
                              break;
                            case "date" === n:
                              if (0 === Number(i)) {
                                a = null;
                                return;
                              }
                              a = new Date(1e3 * Number(i));
                          }
                          return a;
                        } catch (n) {
                          console.log({ getter: t, value: e, err: n });
                        }
                      })(t[i], n),
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
          return i;
        },
      });
      let l = (e, t) => {
        let { address: n, chainId: i, abi: l } = t;
        return e
          .filter(Boolean)
          .map((e) =>
            "string" == typeof e
              ? { functionName: e, address: n, abi: l, chainId: i }
              : { address: n, abi: l, chainId: i, ...e }
          );
      };
    },
    60808: function (e, t, n) {
      "use strict";
      n.d(t, {
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
        l = (e, t) =>
          null === t || null === e || void 0 === t || void 0 === e
            ? null
            : (e * BigInt(t) * BigInt(1e9)) / BigInt(1e4) / BigInt(1e9),
        a = (e, t) => (t ? (e * BigInt(1e4)) / t : BigInt(0));
    },
  },
  function (e) {
    e.O(
      0,
      [
        1765, 6299, 894, 775, 9745, 2005, 1664, 4356, 9041, 8158, 4910, 5060,
        8388, 2469, 8505, 3297, 2105, 4685, 2418, 1164, 4916, 3525, 5428, 2931,
        3152, 4563, 5955, 1642, 1329, 3201, 8282, 4665, 1744,
      ],
      function () {
        return e((e.s = 8624));
      }
    ),
      (_N_E = e.O());
  },
]);
