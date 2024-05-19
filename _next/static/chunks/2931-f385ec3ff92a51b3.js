"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2931],
  {
    40688: function (e, t, a) {
      a.d(t, {
        C: function () {
          return l;
        },
        X: function () {
          return c;
        },
      });
      var n = a(8294),
        r = a(93351),
        i = a(72104),
        o = a(60464),
        s = a(80466);
      async function c(e, t) {
        return l(e, t);
      }
      async function l(e, t) {
        let {
            block: a,
            chain: c = e.chain,
            request: l,
            type: u = "eip1559",
          } = t || {},
          f = await (async () =>
            "function" == typeof c?.fees?.baseFeeMultiplier
              ? c.fees.baseFeeMultiplier({ block: a, client: e, request: l })
              : c?.fees?.baseFeeMultiplier ?? 1.2)();
        if (f < 1) throw new n.Fz();
        let d = 10 ** (f.toString().split(".")[1]?.length ?? 0),
          b = (e) => (e * BigInt(Math.ceil(f * d))) / BigInt(d),
          m = a || (await (0, r.s)(e, o.Q, "getBlock")({}));
        if ("function" == typeof c?.fees?.estimateFeesPerGas)
          return c.fees.estimateFeesPerGas({
            block: a,
            client: e,
            multiply: b,
            request: l,
            type: u,
          });
        if ("eip1559" === u) {
          if ("bigint" != typeof m.baseFeePerGas) throw new n.e5();
          let t =
              "bigint" == typeof l?.maxPriorityFeePerGas
                ? l.maxPriorityFeePerGas
                : await (0, i.h)(e, { block: m, chain: c, request: l }),
            a = b(m.baseFeePerGas);
          return {
            maxFeePerGas: l?.maxFeePerGas ?? a + t,
            maxPriorityFeePerGas: t,
          };
        }
        return {
          gasPrice: l?.gasPrice ?? b(await (0, r.s)(e, s.o, "getGasPrice")({})),
        };
      }
    },
    86272: function (e, t, a) {
      a.d(t, {
        Q: function () {
          return p;
        },
      });
      var n = a(9566),
        r = a(98617),
        i = a(51123),
        o = a(20899),
        s = a(70778),
        c = a(213);
      class l extends s.G {
        constructor(
          e,
          {
            account: t,
            docsPath: a,
            chain: n,
            data: r,
            gas: s,
            gasPrice: l,
            maxFeePerGas: u,
            maxPriorityFeePerGas: f,
            nonce: d,
            to: b,
            value: m,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: a,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Estimate Gas Arguments:",
              (0, c.xr)({
                from: t?.address,
                to: b,
                value:
                  void 0 !== m &&
                  `${(0, i.d)(m)} ${n?.nativeCurrency?.symbol || "ETH"}`,
                data: r,
                gas: s,
                gasPrice: void 0 !== l && `${(0, o.o)(l)} gwei`,
                maxFeePerGas: void 0 !== u && `${(0, o.o)(u)} gwei`,
                maxPriorityFeePerGas: void 0 !== f && `${(0, o.o)(f)} gwei`,
                nonce: d,
              }),
            ].filter(Boolean),
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "EstimateGasExecutionError",
            }),
            (this.cause = e);
        }
      }
      var u = a(11588),
        f = a(98816),
        d = a(38319),
        b = a(12800),
        m = a(31095),
        h = a(40156);
      async function p(e, t) {
        let a = t.account ?? e.account,
          i = a ? (0, n.T)(a) : void 0;
        try {
          let {
              accessList: a,
              blockNumber: n,
              blockTag: o,
              data: s,
              gas: c,
              gasPrice: l,
              maxFeePerGas: u,
              maxPriorityFeePerGas: f,
              nonce: p,
              to: g,
              value: y,
              ...w
            } = i?.type === "local" ? await (0, h.Z)(e, t) : t,
            v = (n ? (0, r.eC)(n) : void 0) || o;
          (0, m.F)(t);
          let k = e.chain?.formatters?.transactionRequest?.format,
            P = (k || b.tG)({
              ...(0, d.K)(w, { format: k }),
              from: i?.address,
              accessList: a,
              data: s,
              gas: c,
              gasPrice: l,
              maxFeePerGas: u,
              maxPriorityFeePerGas: f,
              nonce: p,
              to: g,
              value: y,
            }),
            F = await e.request({
              method: "eth_estimateGas",
              params: v ? [P, v] : [P],
            });
          return BigInt(F);
        } catch (a) {
          throw (function (e, { docsPath: t, ...a }) {
            return new l(
              (() => {
                let t = (0, f.k)(e, a);
                return t instanceof u.cj ? e : t;
              })(),
              { docsPath: t, ...a }
            );
          })(a, { ...t, account: i, chain: e.chain });
        }
      }
    },
    72104: function (e, t, a) {
      a.d(t, {
        _: function () {
          return c;
        },
        h: function () {
          return l;
        },
      });
      var n = a(8294),
        r = a(91815),
        i = a(93351),
        o = a(60464),
        s = a(80466);
      async function c(e, t) {
        return l(e, t);
      }
      async function l(e, t) {
        let { block: a, chain: c = e.chain, request: l } = t || {};
        if ("function" == typeof c?.fees?.defaultPriorityFee) {
          let t = a || (await (0, i.s)(e, o.Q, "getBlock")({}));
          return c.fees.defaultPriorityFee({ block: t, client: e, request: l });
        }
        if (void 0 !== c?.fees?.defaultPriorityFee)
          return c?.fees?.defaultPriorityFee;
        try {
          let t = await e.request({ method: "eth_maxPriorityFeePerGas" });
          return (0, r.y_)(t);
        } catch {
          let [t, r] = await Promise.all([
            a ? Promise.resolve(a) : (0, i.s)(e, o.Q, "getBlock")({}),
            (0, i.s)(e, s.o, "getGasPrice")({}),
          ]);
          if ("bigint" != typeof t.baseFeePerGas) throw new n.e5();
          let c = r - t.baseFeePerGas;
          if (c < 0n) return 0n;
          return c;
        }
      }
    },
    60464: function (e, t, a) {
      a.d(t, {
        Q: function () {
          return o;
        },
      });
      var n = a(92172),
        r = a(98617),
        i = a(84803);
      async function o(
        e,
        {
          blockHash: t,
          blockNumber: a,
          blockTag: o,
          includeTransactions: s,
        } = {}
      ) {
        let c = s ?? !1,
          l = void 0 !== a ? (0, r.eC)(a) : void 0,
          u = null;
        if (
          !(u = t
            ? await e.request({ method: "eth_getBlockByHash", params: [t, c] })
            : await e.request({
                method: "eth_getBlockByNumber",
                params: [l || (o ?? "latest"), c],
              }))
        )
          throw new n.f({ blockHash: t, blockNumber: a });
        return (e.chain?.formatters?.block?.format || i.Z)(u);
      }
    },
    72002: function (e, t, a) {
      a.d(t, {
        L: function () {
          return r;
        },
      });
      var n = a(91815);
      async function r(e) {
        let t = await e.request({ method: "eth_chainId" });
        return (0, n.ly)(t);
      }
    },
    80466: function (e, t, a) {
      a.d(t, {
        o: function () {
          return n;
        },
      });
      async function n(e) {
        return BigInt(await e.request({ method: "eth_gasPrice" }));
      }
    },
    96454: function (e, t, a) {
      a.d(t, {
        f: function () {
          return o;
        },
      });
      var n = a(213),
        r = a(98617),
        i = a(35605);
      async function o(
        e,
        { blockHash: t, blockNumber: a, blockTag: o, hash: s, index: c }
      ) {
        let l = o || "latest",
          u = void 0 !== a ? (0, r.eC)(a) : void 0,
          f = null;
        if (
          (s
            ? (f = await e.request({
                method: "eth_getTransactionByHash",
                params: [s],
              }))
            : t
            ? (f = await e.request({
                method: "eth_getTransactionByBlockHashAndIndex",
                params: [t, (0, r.eC)(c)],
              }))
            : (u || l) &&
              (f = await e.request({
                method: "eth_getTransactionByBlockNumberAndIndex",
                params: [u || l, (0, r.eC)(c)],
              })),
          !f)
        )
          throw new n.Bh({
            blockHash: t,
            blockNumber: a,
            blockTag: l,
            hash: s,
            index: c,
          });
        return (e.chain?.formatters?.transaction?.format || i.Tr)(f);
      }
    },
    57335: function (e, t, a) {
      a.d(t, {
        K: function () {
          return i;
        },
      });
      var n = a(91815),
        r = a(98617);
      async function i(
        e,
        { address: t, blockTag: a = "latest", blockNumber: i }
      ) {
        let o = await e.request({
          method: "eth_getTransactionCount",
          params: [t, i ? (0, r.eC)(i) : a],
        });
        return (0, n.ly)(o);
      }
    },
    97680: function (e, t, a) {
      a.d(t, {
        a: function () {
          return i;
        },
      });
      var n = a(213),
        r = a(21096);
      async function i(e, { hash: t }) {
        let a = await e.request({
          method: "eth_getTransactionReceipt",
          params: [t],
        });
        if (!a) throw new n.Yb({ hash: t });
        return (e.chain?.formatters?.transactionReceipt?.format || r.f)(a);
      }
    },
    9077: function (e, t, a) {
      a.d(t, {
        a: function () {
          return l;
        },
      });
      var n = a(9566),
        r = a(91354),
        i = a(824),
        o = a(75467),
        s = a(93351),
        c = a(22936);
      async function l(e, t) {
        let {
            abi: a,
            address: l,
            args: u,
            dataSuffix: f,
            functionName: d,
            ...b
          } = t,
          m = b.account ? (0, n.T)(b.account) : e.account,
          h = (0, i.R)({ abi: a, args: u, functionName: d });
        try {
          let { data: n } = await (0, s.s)(
              e,
              c.RE,
              "call"
            )({
              batch: !1,
              data: `${h}${f ? f.replace("0x", "") : ""}`,
              to: l,
              ...b,
              account: m,
            }),
            i = (0, r.k)({ abi: a, args: u, functionName: d, data: n || "0x" }),
            o = a.filter((e) => "name" in e && e.name === t.functionName);
          return {
            result: i,
            request: {
              abi: o,
              address: l,
              args: u,
              dataSuffix: f,
              functionName: d,
              ...b,
              account: m,
            },
          };
        } catch (e) {
          throw (0, o.S)(e, {
            abi: a,
            address: l,
            args: u,
            docsPath: "/docs/contract/simulateContract",
            functionName: d,
            sender: m?.address,
          });
        }
      }
    },
    27769: function (e, t, a) {
      a.d(t, {
        e: function () {
          return b;
        },
      });
      var n = a(92172),
        r = a(213),
        i = a(93351),
        o = a(59779),
        s = a(46297),
        c = a(75684),
        l = a(60464),
        u = a(96454),
        f = a(97680),
        d = a(63257);
      async function b(
        e,
        {
          confirmations: t = 1,
          hash: a,
          onReplaced: b,
          pollingInterval: m = e.pollingInterval,
          retryCount: h = 6,
          retryDelay: p = ({ count: e }) => 200 * ~~(1 << e),
          timeout: g,
        }
      ) {
        let y, w, v;
        let k = (0, c.P)(["waitForTransactionReceipt", e.uid, a]),
          P = !1;
        return new Promise((c, F) => {
          g && setTimeout(() => F(new r.mc({ hash: a })), g);
          let B = (0, o.N7)(
            k,
            { onReplaced: b, resolve: c, reject: F },
            (o) => {
              let c = (0, i.s)(
                e,
                d.q,
                "watchBlockNumber"
              )({
                emitMissed: !0,
                emitOnBegin: !0,
                poll: !0,
                pollingInterval: m,
                async onBlockNumber(d) {
                  if (P) return;
                  let b = d,
                    m = (e) => {
                      c(), e(), B();
                    };
                  try {
                    if (v) {
                      if (
                        t > 1 &&
                        (!v.blockNumber || b - v.blockNumber + 1n < t)
                      )
                        return;
                      m(() => o.resolve(v));
                      return;
                    }
                    if (
                      (y ||
                        ((P = !0),
                        await (0, s.J)(
                          async () => {
                            (y = await (0, i.s)(
                              e,
                              u.f,
                              "getTransaction"
                            )({ hash: a })).blockNumber && (b = y.blockNumber);
                          },
                          { delay: p, retryCount: h }
                        ),
                        (P = !1)),
                      (v = await (0, i.s)(
                        e,
                        f.a,
                        "getTransactionReceipt"
                      )({ hash: a })),
                      t > 1 && (!v.blockNumber || b - v.blockNumber + 1n < t))
                    )
                      return;
                    m(() => o.resolve(v));
                  } catch (a) {
                    if (a instanceof r.Bh || a instanceof r.Yb) {
                      if (!y) {
                        P = !1;
                        return;
                      }
                      try {
                        (w = y), (P = !0);
                        let a = await (0, s.J)(
                          () =>
                            (0, i.s)(
                              e,
                              l.Q,
                              "getBlock"
                            )({ blockNumber: b, includeTransactions: !0 }),
                          {
                            delay: p,
                            retryCount: h,
                            shouldRetry: ({ error: e }) => e instanceof n.f,
                          }
                        );
                        P = !1;
                        let r = a.transactions.find(
                          ({ from: e, nonce: t }) =>
                            e === w.from && t === w.nonce
                        );
                        if (
                          !r ||
                          ((v = await (0, i.s)(
                            e,
                            f.a,
                            "getTransactionReceipt"
                          )({ hash: r.hash })),
                          t > 1 &&
                            (!v.blockNumber || b - v.blockNumber + 1n < t))
                        )
                          return;
                        let c = "replaced";
                        r.to === w.to && r.value === w.value
                          ? (c = "repriced")
                          : r.from === r.to &&
                            0n === r.value &&
                            (c = "cancelled"),
                          m(() => {
                            o.onReplaced?.({
                              reason: c,
                              replacedTransaction: w,
                              transaction: r,
                              transactionReceipt: v,
                            }),
                              o.resolve(v);
                          });
                      } catch (e) {
                        m(() => o.reject(e));
                      }
                    } else m(() => o.reject(a));
                  }
                },
              });
            }
          );
        });
      }
    },
    40156: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = a(9566),
        r = a(40688),
        i = a(86272),
        o = a(60464),
        s = a(57335),
        c = a(8294),
        l = a(93351),
        u = a(31095),
        f = a(27446);
      async function d(e, t) {
        let {
            account: a = e.account,
            chain: d,
            gas: b,
            nonce: m,
            parameters: h = ["fees", "gas", "nonce", "type"],
            type: p,
          } = t,
          g = a ? (0, n.T)(a) : void 0,
          y = await (0, l.s)(e, o.Q, "getBlock")({ blockTag: "latest" }),
          w = { ...t, ...(g ? { from: g?.address } : {}) };
        if (
          (h.includes("nonce") &&
            void 0 === m &&
            g &&
            (w.nonce = await (0, l.s)(
              e,
              s.K,
              "getTransactionCount"
            )({ address: g.address, blockTag: "pending" })),
          (h.includes("fees") || h.includes("type")) && void 0 === p)
        )
          try {
            w.type = (0, f.l)(w);
          } catch {
            w.type = "bigint" == typeof y.baseFeePerGas ? "eip1559" : "legacy";
          }
        if (h.includes("fees")) {
          if ("eip1559" === w.type) {
            let { maxFeePerGas: a, maxPriorityFeePerGas: n } = await (0, r.C)(
              e,
              { block: y, chain: d, request: w }
            );
            if (
              void 0 === t.maxPriorityFeePerGas &&
              t.maxFeePerGas &&
              t.maxFeePerGas < n
            )
              throw new c.ld({ maxPriorityFeePerGas: n });
            (w.maxPriorityFeePerGas = n), (w.maxFeePerGas = a);
          } else {
            if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas)
              throw new c.e5();
            let { gasPrice: a } = await (0, r.C)(e, {
              block: y,
              chain: d,
              request: w,
              type: "legacy",
            });
            w.gasPrice = a;
          }
        }
        return (
          h.includes("gas") &&
            void 0 === b &&
            (w.gas = await (0, l.s)(
              e,
              i.Q,
              "estimateGas"
            )({
              ...w,
              account: g ? { address: g.address, type: "json-rpc" } : void 0,
            })),
          (0, u.F)(w),
          delete w.parameters,
          w
        );
      }
    },
    30722: function (e, t, a) {
      a.d(t, {
        p: function () {
          return n;
        },
      });
      async function n(e, { serializedTransaction: t }) {
        return e.request(
          { method: "eth_sendRawTransaction", params: [t] },
          { retryCount: 0 }
        );
      }
    },
    92931: function (e, t, a) {
      a.d(t, {
        I: function () {
          return e_;
        },
      });
      var n = a(15633),
        r = a(77438),
        i = a(79895),
        o = a(86626),
        s = a(98617),
        c = a(68490),
        l = a(93351),
        u = a(18158);
      async function f(
        e,
        { blockNumber: t, blockTag: a, name: n, universalResolverAddress: r }
      ) {
        let i = r;
        if (!i) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          i = (0, o.L)({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        let [f] = await (0, l.s)(
          e,
          u.L,
          "readContract"
        )({
          address: i,
          abi: [
            {
              inputs: [{ type: "bytes" }],
              name: "findResolver",
              outputs: [{ type: "address" }, { type: "bytes32" }],
              stateMutability: "view",
              type: "function",
            },
          ],
          functionName: "findResolver",
          args: [(0, s.NC)((0, c.T)(n))],
          blockNumber: t,
          blockTag: a,
        });
        return f;
      }
      var d = a(12415),
        b = a(22936);
      function m(e, { method: t }) {
        let a = {};
        return (
          "fallback" === e.transport.type &&
            e.transport.onResponse?.(
              ({ method: e, response: n, status: r, transport: i }) => {
                "success" === r && t === e && (a[n] = i.request);
              }
            ),
          (t) => a[t] || e.request
        );
      }
      async function h(e) {
        let t = m(e, { method: "eth_newBlockFilter" }),
          a = await e.request({ method: "eth_newBlockFilter" });
        return { id: a, request: t(a), type: "block" };
      }
      var p = a(18007),
        g = a(70778);
      class y extends g.G {
        constructor(e) {
          super(`Filter type "${e}" is not supported.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "FilterTypeNotSupportedError",
            });
        }
      }
      var w = a(52796),
        v = a(66616),
        k = a(39506),
        P = a(68882),
        F = a(615),
        B = a(69210);
      let C = "/docs/contract/encodeEventTopics";
      function T(e) {
        let { abi: t, eventName: a, args: n } = e,
          r = t[0];
        if (a) {
          let e = (0, B.mE)({ abi: t, name: a });
          if (!e) throw new p.mv(a, { docsPath: C });
          r = e;
        }
        if ("event" !== r.type) throw new p.mv(void 0, { docsPath: C });
        let i = (0, F.t)(r),
          o = (0, k.n)(i),
          s = [];
        if (n && "inputs" in r) {
          let e = r.inputs?.filter((e) => "indexed" in e && e.indexed),
            t = Array.isArray(n)
              ? n
              : Object.values(n).length > 0
              ? e?.map((e) => n[e.name]) ?? []
              : [];
          t.length > 0 &&
            (s =
              e?.map((e, a) =>
                Array.isArray(t[a])
                  ? t[a].map((n, r) => G({ param: e, value: t[a][r] }))
                  : t[a]
                  ? G({ param: e, value: t[a] })
                  : null
              ) ?? []);
        }
        return [o, ...s];
      }
      function G({ param: e, value: t }) {
        if ("string" === e.type || "bytes" === e.type)
          return (0, v.w)((0, w.O0)(t));
        if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/))
          throw new y(e.type);
        return (0, P.E)([e], [t]);
      }
      async function E(e, t) {
        let {
            address: a,
            abi: n,
            args: r,
            eventName: i,
            fromBlock: o,
            strict: c,
            toBlock: l,
          } = t,
          u = m(e, { method: "eth_newFilter" }),
          f = i ? T({ abi: n, args: r, eventName: i }) : void 0,
          d = await e.request({
            method: "eth_newFilter",
            params: [
              {
                address: a,
                fromBlock: "bigint" == typeof o ? (0, s.eC)(o) : o,
                toBlock: "bigint" == typeof l ? (0, s.eC)(l) : l,
                topics: f,
              },
            ],
          });
        return {
          abi: n,
          args: r,
          eventName: i,
          id: d,
          request: u(d),
          strict: !!c,
          type: "event",
        };
      }
      async function N(
        e,
        {
          address: t,
          args: a,
          event: n,
          events: r,
          fromBlock: i,
          strict: o,
          toBlock: c,
        } = {}
      ) {
        let l = r ?? (n ? [n] : void 0),
          u = m(e, { method: "eth_newFilter" }),
          f = [];
        l &&
          ((f = [
            l.flatMap((e) => T({ abi: [e], eventName: e.name, args: a })),
          ]),
          n && (f = f[0]));
        let d = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: t,
              fromBlock: "bigint" == typeof i ? (0, s.eC)(i) : i,
              toBlock: "bigint" == typeof c ? (0, s.eC)(c) : c,
              ...(f.length ? { topics: f } : {}),
            },
          ],
        });
        return {
          abi: l,
          args: a,
          eventName: n ? n.name : void 0,
          fromBlock: i,
          id: d,
          request: u(d),
          strict: !!o,
          toBlock: c,
          type: "event",
        };
      }
      async function x(e) {
        let t = m(e, { method: "eth_newPendingTransactionFilter" }),
          a = await e.request({ method: "eth_newPendingTransactionFilter" });
        return { id: a, request: t(a), type: "transaction" };
      }
      var q = a(9566),
        _ = a(824),
        R = a(75467),
        I = a(86272);
      async function M(e, t) {
        let { abi: a, address: n, args: r, functionName: i, ...o } = t,
          s = (0, _.R)({ abi: a, args: r, functionName: i });
        try {
          return await (0, l.s)(
            e,
            I.Q,
            "estimateGas"
          )({ data: s, to: n, ...o });
        } catch (t) {
          let e = o.account ? (0, q.T)(o.account) : void 0;
          throw (0, R.S)(t, {
            abi: a,
            address: n,
            args: r,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: i,
            sender: e?.address,
          });
        }
      }
      var $ = a(40688),
        L = a(72104),
        O = a(85366),
        S = a(60464),
        A = a(48140),
        Q = a(91815);
      async function j(
        e,
        { blockHash: t, blockNumber: a, blockTag: n = "latest" } = {}
      ) {
        let r;
        let i = void 0 !== a ? (0, s.eC)(a) : void 0;
        return (
          (r = t
            ? await e.request({
                method: "eth_getBlockTransactionCountByHash",
                params: [t],
              })
            : await e.request({
                method: "eth_getBlockTransactionCountByNumber",
                params: [i || n],
              })),
          (0, Q.ly)(r)
        );
      }
      async function U(
        e,
        { address: t, blockNumber: a, blockTag: n = "latest" }
      ) {
        let r = void 0 !== a ? (0, s.eC)(a) : void 0,
          i = await e.request({ method: "eth_getCode", params: [t, r || n] });
        if ("0x" !== i) return i;
      }
      var z = a(72002),
        H = a(36338),
        D = a(89667),
        Z = a(24438);
      let K = "/docs/contract/decodeEventLog";
      function J(e) {
        let { abi: t, data: a, strict: n, topics: r } = e,
          i = n ?? !0,
          [o, ...s] = r;
        if (!o) throw new p.FM({ docsPath: K });
        let c = t.find(
          (e) => "event" === e.type && o === (0, k.n)((0, F.t)(e))
        );
        if (!(c && "name" in c) || "event" !== c.type)
          throw new p.lC(o, { docsPath: K });
        let { name: l, inputs: u } = c,
          f = u?.some((e) => !("name" in e && e.name)),
          d = f ? [] : {},
          b = u.filter((e) => "indexed" in e && e.indexed);
        for (let e = 0; e < b.length; e++) {
          let t = b[e],
            a = s[e];
          if (!a) throw new p.Gy({ abiItem: c, param: t });
          d[t.name || e] = (function ({ param: e, value: t }) {
            return "string" === e.type ||
              "bytes" === e.type ||
              "tuple" === e.type ||
              e.type.match(/^(.*)\[(\d+)?\]$/)
              ? t
              : ((0, Z.r)([e], t) || [])[0];
          })({ param: t, value: a });
        }
        let m = u.filter((e) => !("indexed" in e && e.indexed));
        if (m.length > 0) {
          if (a && "0x" !== a)
            try {
              let e = (0, Z.r)(m, a);
              if (e) {
                if (f) d = [...d, ...e];
                else for (let t = 0; t < m.length; t++) d[m[t].name] = e[t];
              }
            } catch (e) {
              if (i) {
                if (e instanceof p.xB || e instanceof D.lQ)
                  throw new p.SM({
                    abiItem: c,
                    data: a,
                    params: m,
                    size: (0, H.d)(a),
                  });
                throw e;
              }
            }
          else if (i)
            throw new p.SM({ abiItem: c, data: "0x", params: m, size: 0 });
        }
        return { eventName: l, args: Object.values(d).length > 0 ? d : void 0 };
      }
      function X({ abi: e, eventName: t, logs: a, strict: n = !0 }) {
        return a
          .map((a) => {
            try {
              let r = J({ ...a, abi: e, strict: n });
              if (t && !t.includes(r.eventName)) return null;
              return { ...r, ...a };
            } catch (r) {
              let e, t;
              if (r instanceof p.lC) return null;
              if (r instanceof p.SM || r instanceof p.Gy) {
                if (n) return null;
                (e = r.abiItem.name),
                  (t = r.abiItem.inputs?.some((e) => !("name" in e && e.name)));
              }
              return { ...a, args: t ? [] : {}, eventName: e };
            }
          })
          .filter(Boolean);
      }
      var Y = a(58445);
      async function W(
        e,
        {
          address: t,
          blockHash: a,
          fromBlock: n,
          toBlock: r,
          event: i,
          events: o,
          args: c,
          strict: l,
        } = {}
      ) {
        let u = o ?? (i ? [i] : void 0),
          f = [];
        u &&
          ((f = [
            u.flatMap((e) => T({ abi: [e], eventName: e.name, args: c })),
          ]),
          i && (f = f[0]));
        let d = (
          a
            ? await e.request({
                method: "eth_getLogs",
                params: [{ address: t, topics: f, blockHash: a }],
              })
            : await e.request({
                method: "eth_getLogs",
                params: [
                  {
                    address: t,
                    topics: f,
                    fromBlock: "bigint" == typeof n ? (0, s.eC)(n) : n,
                    toBlock: "bigint" == typeof r ? (0, s.eC)(r) : r,
                  },
                ],
              })
        ).map((e) => (0, Y.U)(e));
        return u ? X({ abi: u, logs: d, strict: l ?? !1 }) : d;
      }
      async function V(e, t) {
        let {
            abi: a,
            address: n,
            args: r,
            blockHash: i,
            eventName: o,
            fromBlock: s,
            toBlock: c,
            strict: u,
          } = t,
          f = o ? (0, B.mE)({ abi: a, name: o }) : void 0,
          d = f ? void 0 : a.filter((e) => "event" === e.type);
        return (0, l.s)(
          e,
          W,
          "getLogs"
        )({
          address: n,
          args: r,
          blockHash: i,
          event: f,
          events: d,
          fromBlock: s,
          toBlock: c,
          strict: u,
        });
      }
      async function ee(
        e,
        {
          blockCount: t,
          blockNumber: a,
          blockTag: n = "latest",
          rewardPercentiles: r,
        }
      ) {
        var i;
        let o = a ? (0, s.eC)(a) : void 0;
        return {
          baseFeePerGas: (i = await e.request({
            method: "eth_feeHistory",
            params: [(0, s.eC)(t), o || n, r],
          })).baseFeePerGas.map((e) => BigInt(e)),
          gasUsedRatio: i.gasUsedRatio,
          oldestBlock: BigInt(i.oldestBlock),
          reward: i.reward?.map((e) => e.map((e) => BigInt(e))),
        };
      }
      async function et(e, { filter: t }) {
        let a = "strict" in t && t.strict,
          n = await t.request({
            method: "eth_getFilterChanges",
            params: [t.id],
          });
        if ("string" == typeof n[0]) return n;
        let r = n.map((e) => (0, Y.U)(e));
        return "abi" in t && t.abi ? X({ abi: t.abi, logs: r, strict: a }) : r;
      }
      async function ea(e, { filter: t }) {
        let a = t.strict ?? !1,
          n = (
            await t.request({ method: "eth_getFilterLogs", params: [t.id] })
          ).map((e) => (0, Y.U)(e));
        return t.abi ? X({ abi: t.abi, logs: n, strict: a }) : n;
      }
      var en = a(80466);
      async function er(
        e,
        { address: t, blockNumber: a, blockTag: n, storageKeys: r }
      ) {
        var i;
        let o = void 0 !== a ? (0, s.eC)(a) : void 0;
        return {
          ...(i = await e.request({
            method: "eth_getProof",
            params: [t, r, o || (n ?? "latest")],
          })),
          balance: i.balance ? BigInt(i.balance) : void 0,
          nonce: i.nonce ? (0, Q.ly)(i.nonce) : void 0,
          storageProof: i.storageProof
            ? i.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
            : void 0,
        };
      }
      async function ei(
        e,
        { address: t, blockNumber: a, blockTag: n = "latest", slot: r }
      ) {
        let i = void 0 !== a ? (0, s.eC)(a) : void 0;
        return await e.request({
          method: "eth_getStorageAt",
          params: [t, r, i || n],
        });
      }
      var eo = a(96454);
      async function es(e, { hash: t, transactionReceipt: a }) {
        let [n, r] = await Promise.all([
            (0, l.s)(e, A.z, "getBlockNumber")({}),
            t ? (0, l.s)(e, eo.f, "getBlockNumber")({ hash: t }) : void 0,
          ]),
          i = a?.blockNumber || r?.blockNumber;
        return i ? n - i + 1n : 0n;
      }
      var ec = a(57335),
        el = a(97680),
        eu = a(77245),
        ef = a(9077);
      async function ed(e, { filter: t }) {
        return t.request({ method: "eth_uninstallFilter", params: [t.id] });
      }
      var eb = a(78906),
        em = a(40206),
        eh = a(63759),
        ep = a(39014),
        eg = a(82701),
        ey = a(6326);
      async function ew(e, { address: t, hash: a, signature: n, ...r }) {
        let i = (0, eg.v)(n) ? n : (0, s.NC)(n);
        try {
          let { data: n } = await (0, l.s)(
            e,
            b.RE,
            "call"
          )({
            data: (0, ey.w)({
              abi: em.$o,
              args: [t, a, i],
              bytecode:
                "0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572",
            }),
            ...r,
          });
          return (function (e, t) {
            let a = (0, eg.v)(e) ? (0, w.O0)(e) : e,
              n = (0, eg.v)(t) ? (0, w.O0)(t) : t;
            return (0, ep.Wd)(a, n);
          })(n ?? "0x0", "0x1");
        } catch (e) {
          if (e instanceof eh.cg) return !1;
          throw e;
        }
      }
      async function ev(e, { address: t, message: a, signature: n, ...r }) {
        return ew(e, { address: t, hash: (0, eb.r)(a), signature: n, ...r });
      }
      var ek = a(21249);
      async function eP(e, t) {
        let {
          address: a,
          signature: n,
          message: r,
          primaryType: i,
          types: o,
          domain: s,
          ...c
        } = t;
        return ew(e, {
          address: a,
          hash: (0, ek.J)({ message: r, primaryType: i, types: o, domain: s }),
          signature: n,
          ...c,
        });
      }
      var eF = a(27769),
        eB = a(63257),
        eC = a(84803),
        eT = a(59779),
        eG = a(38474),
        eE = a(75684),
        eN = a(814),
        ex = a(40156),
        eq = a(30722);
      function e_(e) {
        return {
          call: (t) => (0, b.RE)(e, t),
          createBlockFilter: () => h(e),
          createContractEventFilter: (t) => E(e, t),
          createEventFilter: (t) => N(e, t),
          createPendingTransactionFilter: () => x(e),
          estimateContractGas: (t) => M(e, t),
          estimateGas: (t) => (0, I.Q)(e, t),
          getBalance: (t) => (0, O.s)(e, t),
          getBlock: (t) => (0, S.Q)(e, t),
          getBlockNumber: (t) => (0, A.z)(e, t),
          getBlockTransactionCount: (t) => j(e, t),
          getBytecode: (t) => U(e, t),
          getChainId: () => (0, z.L)(e),
          getContractEvents: (t) => V(e, t),
          getEnsAddress: (t) => (0, n.O)(e, t),
          getEnsAvatar: (t) => (0, r.r)(e, t),
          getEnsName: (t) => (0, i.w)(e, t),
          getEnsResolver: (t) => f(e, t),
          getEnsText: (t) => (0, d.g)(e, t),
          getFeeHistory: (t) => ee(e, t),
          estimateFeesPerGas: (t) => (0, $.X)(e, t),
          getFilterChanges: (t) => et(e, t),
          getFilterLogs: (t) => ea(e, t),
          getGasPrice: () => (0, en.o)(e),
          getLogs: (t) => W(e, t),
          getProof: (t) => er(e, t),
          estimateMaxPriorityFeePerGas: (t) => (0, L._)(e, t),
          getStorageAt: (t) => ei(e, t),
          getTransaction: (t) => (0, eo.f)(e, t),
          getTransactionConfirmations: (t) => es(e, t),
          getTransactionCount: (t) => (0, ec.K)(e, t),
          getTransactionReceipt: (t) => (0, el.a)(e, t),
          multicall: (t) => (0, eu.A)(e, t),
          prepareTransactionRequest: (t) => (0, ex.Z)(e, t),
          readContract: (t) => (0, u.L)(e, t),
          sendRawTransaction: (t) => (0, eq.p)(e, t),
          simulateContract: (t) => (0, ef.a)(e, t),
          verifyMessage: (t) => ev(e, t),
          verifyTypedData: (t) => eP(e, t),
          uninstallFilter: (t) => ed(e, t),
          waitForTransactionReceipt: (t) => (0, eF.e)(e, t),
          watchBlocks: (t) =>
            (function (
              e,
              {
                blockTag: t = "latest",
                emitMissed: a = !1,
                emitOnBegin: n = !1,
                onBlock: r,
                onError: i,
                includeTransactions: o,
                poll: s,
                pollingInterval: c = e.pollingInterval,
              }
            ) {
              let u, f, d;
              let b = void 0 !== s ? s : "webSocket" !== e.transport.type,
                m = o ?? !1;
              return b
                ? (() => {
                    let o = (0, eE.P)(["watchBlocks", e.uid, a, n, m, c]);
                    return (0, eT.N7)(o, { onBlock: r, onError: i }, (r) =>
                      (0, eG.$)(
                        async () => {
                          try {
                            let n = await (0, l.s)(
                              e,
                              S.Q,
                              "getBlock"
                            )({ blockTag: t, includeTransactions: m });
                            if (n.number && u?.number) {
                              if (n.number === u.number) return;
                              if (n.number - u.number > 1 && a)
                                for (
                                  let t = u?.number + 1n;
                                  t < n.number;
                                  t++
                                ) {
                                  let a = await (0, l.s)(
                                    e,
                                    S.Q,
                                    "getBlock"
                                  )({ blockNumber: t, includeTransactions: m });
                                  r.onBlock(a, u), (u = a);
                                }
                            }
                            (!u?.number ||
                              ("pending" === t && !n?.number) ||
                              (n.number && n.number > u.number)) &&
                              (r.onBlock(n, u), (u = n));
                          } catch (e) {
                            r.onError?.(e);
                          }
                        },
                        { emitOnBegin: n, interval: c }
                      )
                    );
                  })()
                : ((f = !0),
                  (d = () => (f = !1)),
                  (async () => {
                    try {
                      let { unsubscribe: t } = await e.transport.subscribe({
                        params: ["newHeads"],
                        onData(t) {
                          if (!f) return;
                          let a = (e.chain?.formatters?.block?.format || eC.Z)(
                            t.result
                          );
                          r(a, u), (u = a);
                        },
                        onError(e) {
                          i?.(e);
                        },
                      });
                      (d = t), f || d();
                    } catch (e) {
                      i?.(e);
                    }
                  })(),
                  d);
            })(e, t),
          watchBlockNumber: (t) => (0, eB.q)(e, t),
          watchContractEvent: (t) =>
            (function (e, t) {
              let a, n;
              let {
                abi: r,
                address: i,
                args: o,
                batch: s = !0,
                eventName: c,
                onError: u,
                onLogs: f,
                poll: d,
                pollingInterval: b = e.pollingInterval,
                strict: m,
              } = t;
              return (void 0 !== d ? d : "webSocket" !== e.transport.type)
                ? (() => {
                    let t = (0, eE.P)([
                        "watchContractEvent",
                        i,
                        o,
                        s,
                        e.uid,
                        c,
                        b,
                      ]),
                      a = m ?? !1;
                    return (0, eT.N7)(t, { onLogs: f, onError: u }, (t) => {
                      let n, u;
                      let f = !1,
                        d = (0, eG.$)(
                          async () => {
                            if (!f) {
                              try {
                                u = await (0, l.s)(
                                  e,
                                  E,
                                  "createContractEventFilter"
                                )({
                                  abi: r,
                                  address: i,
                                  args: o,
                                  eventName: c,
                                  strict: a,
                                });
                              } catch {}
                              f = !0;
                              return;
                            }
                            try {
                              let f;
                              if (u)
                                f = await (0, l.s)(
                                  e,
                                  et,
                                  "getFilterChanges"
                                )({ filter: u });
                              else {
                                let t = await (0, l.s)(
                                  e,
                                  A.z,
                                  "getBlockNumber"
                                )({});
                                (f =
                                  n && n !== t
                                    ? await (0, l.s)(
                                        e,
                                        V,
                                        "getContractEvents"
                                      )({
                                        abi: r,
                                        address: i,
                                        args: o,
                                        eventName: c,
                                        fromBlock: n + 1n,
                                        toBlock: t,
                                        strict: a,
                                      })
                                    : []),
                                  (n = t);
                              }
                              if (0 === f.length) return;
                              if (s) t.onLogs(f);
                              else for (let e of f) t.onLogs([e]);
                            } catch (e) {
                              u && e instanceof eN.yR && (f = !1),
                                t.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: b }
                        );
                      return async () => {
                        u &&
                          (await (0, l.s)(
                            e,
                            ed,
                            "uninstallFilter"
                          )({ filter: u })),
                          d();
                      };
                    });
                  })()
                : ((a = !0),
                  (n = () => (a = !1)),
                  (async () => {
                    try {
                      let t = c ? T({ abi: r, eventName: c, args: o }) : [],
                        { unsubscribe: s } = await e.transport.subscribe({
                          params: ["logs", { address: i, topics: t }],
                          onData(e) {
                            if (!a) return;
                            let t = e.result;
                            try {
                              let { eventName: e, args: a } = J({
                                  abi: r,
                                  data: t.data,
                                  topics: t.topics,
                                  strict: m,
                                }),
                                n = (0, Y.U)(t, { args: a, eventName: e });
                              f([n]);
                            } catch (r) {
                              let e, a;
                              if (r instanceof p.SM || r instanceof p.Gy) {
                                if (m) return;
                                (e = r.abiItem.name),
                                  (a = r.abiItem.inputs?.some(
                                    (e) => !("name" in e && e.name)
                                  ));
                              }
                              let n = (0, Y.U)(t, {
                                args: a ? [] : {},
                                eventName: e,
                              });
                              f([n]);
                            }
                          },
                          onError(e) {
                            u?.(e);
                          },
                        });
                      (n = s), a || n();
                    } catch (e) {
                      u?.(e);
                    }
                  })(),
                  n);
            })(e, t),
          watchEvent: (t) =>
            (function (
              e,
              {
                address: t,
                args: a,
                batch: n = !0,
                event: r,
                events: i,
                onError: o,
                onLogs: s,
                poll: c,
                pollingInterval: u = e.pollingInterval,
                strict: f,
              }
            ) {
              let d, b;
              let m = void 0 !== c ? c : "webSocket" !== e.transport.type,
                h = f ?? !1;
              return m
                ? (() => {
                    let c = (0, eE.P)(["watchEvent", t, a, n, e.uid, r, u]);
                    return (0, eT.N7)(c, { onLogs: s, onError: o }, (o) => {
                      let s, c;
                      let f = !1,
                        d = (0, eG.$)(
                          async () => {
                            if (!f) {
                              try {
                                c = await (0, l.s)(
                                  e,
                                  N,
                                  "createEventFilter"
                                )({
                                  address: t,
                                  args: a,
                                  event: r,
                                  events: i,
                                  strict: h,
                                });
                              } catch {}
                              f = !0;
                              return;
                            }
                            try {
                              let u;
                              if (c)
                                u = await (0, l.s)(
                                  e,
                                  et,
                                  "getFilterChanges"
                                )({ filter: c });
                              else {
                                let n = await (0, l.s)(
                                  e,
                                  A.z,
                                  "getBlockNumber"
                                )({});
                                (u =
                                  s && s !== n
                                    ? await (0, l.s)(
                                        e,
                                        W,
                                        "getLogs"
                                      )({
                                        address: t,
                                        args: a,
                                        event: r,
                                        events: i,
                                        fromBlock: s + 1n,
                                        toBlock: n,
                                      })
                                    : []),
                                  (s = n);
                              }
                              if (0 === u.length) return;
                              if (n) o.onLogs(u);
                              else for (let e of u) o.onLogs([e]);
                            } catch (e) {
                              c && e instanceof eN.yR && (f = !1),
                                o.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: u }
                        );
                      return async () => {
                        c &&
                          (await (0, l.s)(
                            e,
                            ed,
                            "uninstallFilter"
                          )({ filter: c })),
                          d();
                      };
                    });
                  })()
                : ((d = !0),
                  (b = () => (d = !1)),
                  (async () => {
                    try {
                      let n = i ?? (r ? [r] : void 0),
                        c = [];
                      n &&
                        ((c = [
                          n.flatMap((e) =>
                            T({ abi: [e], eventName: e.name, args: a })
                          ),
                        ]),
                        r && (c = c[0]));
                      let { unsubscribe: l } = await e.transport.subscribe({
                        params: ["logs", { address: t, topics: c }],
                        onData(e) {
                          if (!d) return;
                          let t = e.result;
                          try {
                            let { eventName: e, args: a } = J({
                                abi: n ?? [],
                                data: t.data,
                                topics: t.topics,
                                strict: h,
                              }),
                              r = (0, Y.U)(t, { args: a, eventName: e });
                            s([r]);
                          } catch (r) {
                            let e, a;
                            if (r instanceof p.SM || r instanceof p.Gy) {
                              if (f) return;
                              (e = r.abiItem.name),
                                (a = r.abiItem.inputs?.some(
                                  (e) => !("name" in e && e.name)
                                ));
                            }
                            let n = (0, Y.U)(t, {
                              args: a ? [] : {},
                              eventName: e,
                            });
                            s([n]);
                          }
                        },
                        onError(e) {
                          o?.(e);
                        },
                      });
                      (b = l), d || b();
                    } catch (e) {
                      o?.(e);
                    }
                  })(),
                  b);
            })(e, t),
          watchPendingTransactions: (t) =>
            (function (
              e,
              {
                batch: t = !0,
                onError: a,
                onTransactions: n,
                poll: r,
                pollingInterval: i = e.pollingInterval,
              }
            ) {
              let o, s;
              return (void 0 !== r ? r : "webSocket" !== e.transport.type)
                ? (() => {
                    let r = (0, eE.P)([
                      "watchPendingTransactions",
                      e.uid,
                      t,
                      i,
                    ]);
                    return (0, eT.N7)(
                      r,
                      { onTransactions: n, onError: a },
                      (a) => {
                        let n;
                        let r = (0, eG.$)(
                          async () => {
                            try {
                              if (!n)
                                try {
                                  n = await (0, l.s)(
                                    e,
                                    x,
                                    "createPendingTransactionFilter"
                                  )({});
                                  return;
                                } catch (e) {
                                  throw (r(), e);
                                }
                              let i = await (0, l.s)(
                                e,
                                et,
                                "getFilterChanges"
                              )({ filter: n });
                              if (0 === i.length) return;
                              if (t) a.onTransactions(i);
                              else for (let e of i) a.onTransactions([e]);
                            } catch (e) {
                              a.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: i }
                        );
                        return async () => {
                          n &&
                            (await (0, l.s)(
                              e,
                              ed,
                              "uninstallFilter"
                            )({ filter: n })),
                            r();
                        };
                      }
                    );
                  })()
                : ((o = !0),
                  (s = () => (o = !1)),
                  (async () => {
                    try {
                      let { unsubscribe: t } = await e.transport.subscribe({
                        params: ["newPendingTransactions"],
                        onData(e) {
                          if (!o) return;
                          let t = e.result;
                          n([t]);
                        },
                        onError(e) {
                          a?.(e);
                        },
                      });
                      (s = t), o || s();
                    } catch (e) {
                      a?.(e);
                    }
                  })(),
                  s);
            })(e, t),
        };
      }
    },
    92172: function (e, t, a) {
      a.d(t, {
        f: function () {
          return r;
        },
      });
      var n = a(70778);
      class r extends n.G {
        constructor({ blockHash: e, blockNumber: t }) {
          let a = "Block";
          e && (a = `Block at hash "${e}"`),
            t && (a = `Block at number "${t}"`),
            super(`${a} could not be found.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BlockNotFoundError",
            });
        }
      }
    },
    8294: function (e, t, a) {
      a.d(t, {
        Fz: function () {
          return i;
        },
        e5: function () {
          return o;
        },
        ld: function () {
          return s;
        },
      });
      var n = a(20899),
        r = a(70778);
      class i extends r.G {
        constructor() {
          super("`baseFeeMultiplier` must be greater than 1."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseFeeScalarError",
            });
        }
      }
      class o extends r.G {
        constructor() {
          super("Chain does not support EIP-1559 fees."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Eip1559FeesNotSupportedError",
            });
        }
      }
      class s extends r.G {
        constructor({ maxPriorityFeePerGas: e }) {
          super(
            `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
            n.o)(e)} gwei).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "MaxFeePerGasTooLowError",
            });
        }
      }
    },
    6326: function (e, t, a) {
      a.d(t, {
        w: function () {
          return s;
        },
      });
      var n = a(18007),
        r = a(42196),
        i = a(68882);
      let o = "/docs/contract/encodeDeployData";
      function s(e) {
        let { abi: t, args: a, bytecode: s } = e;
        if (!a || 0 === a.length) return s;
        let c = t.find((e) => "type" in e && "constructor" === e.type);
        if (!c) throw new n.fM({ docsPath: o });
        if (!("inputs" in c) || !c.inputs || 0 === c.inputs.length)
          throw new n.cO({ docsPath: o });
        let l = (0, i.E)(c.inputs, a);
        return (0, r.SM)([s, l]);
      }
    },
  },
]);
