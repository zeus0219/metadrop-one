"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2469],
  {
    64456: function (t, e, n) {
      n.d(e, {
        L: function () {
          return l;
        },
      });
      var r = n(18158),
        a = n(85978);
      function l(t, e) {
        let { chainId: n, ...l } = e,
          c = t.getClient({ chainId: n });
        return (0, a.s)(c, r.L, "readContract")(l);
      }
    },
    62383: function (t, e, n) {
      n.d(e, {
        J: function () {
          return u;
        },
      });
      var r = n(63759),
        a = n(77245),
        l = n(85978);
      async function c(t, e) {
        let { allowFailure: n = !0, chainId: r, contracts: c, ...i } = e,
          u = t.getClient({ chainId: r });
        return (0, l.s)(
          u,
          a.A,
          "multicall"
        )({ allowFailure: n, contracts: c, ...i });
      }
      var i = n(64456);
      async function u(t, e) {
        let { allowFailure: n = !0, blockNumber: a, blockTag: l, ...u } = e,
          o = e.contracts;
        try {
          let e = o.reduce((e, n, r) => {
              let a = n.chainId ?? t.state.chainId;
              return {
                ...e,
                [a]: [...(e[a] || []), { contract: n, index: r }],
              };
            }, {}),
            r = (
              await Promise.all(
                Object.entries(e).map(([e, r]) =>
                  c(t, {
                    ...u,
                    allowFailure: n,
                    blockNumber: a,
                    blockTag: l,
                    chainId: parseInt(e),
                    contracts: r.map(({ contract: t }) => t),
                  })
                )
              )
            ).flat(),
            i = Object.values(e).flatMap((t) => t.map(({ index: t }) => t));
          return r.reduce((t, e, n) => (t && (t[i[n]] = e), t), []);
        } catch (c) {
          if (c instanceof r.uq) throw c;
          let e = () =>
            o.map((e) => (0, i.L)(t, { ...e, blockNumber: a, blockTag: l }));
          if (n)
            return (await Promise.allSettled(e())).map((t) =>
              "fulfilled" === t.status
                ? { result: t.value, status: "success" }
                : { error: t.reason, result: void 0, status: "failure" }
            );
          return await Promise.all(e());
        }
      }
    },
    48140: function (t, e, n) {
      n.d(e, {
        z: function () {
          return i;
        },
      });
      let r = new Map(),
        a = new Map();
      async function l(t, { cacheKey: e, cacheTime: n = 1 / 0 }) {
        let l = (function (t) {
            let e = (t, e) => ({
                clear: () => e.delete(t),
                get: () => e.get(t),
                set: (n) => e.set(t, n),
              }),
              n = e(t, r),
              l = e(t, a);
            return {
              clear: () => {
                n.clear(), l.clear();
              },
              promise: n,
              response: l,
            };
          })(e),
          c = l.response.get();
        if (c && n > 0 && new Date().getTime() - c.created.getTime() < n)
          return c.data;
        let i = l.promise.get();
        i || ((i = t()), l.promise.set(i));
        try {
          let t = await i;
          return l.response.set({ created: new Date(), data: t }), t;
        } finally {
          l.promise.clear();
        }
      }
      let c = (t) => `blockNumber.${t}`;
      async function i(t, { cacheTime: e = t.cacheTime } = {}) {
        return BigInt(
          await l(() => t.request({ method: "eth_blockNumber" }), {
            cacheKey: c(t.uid),
            cacheTime: e,
          })
        );
      }
    },
    77245: function (t, e, n) {
      n.d(e, {
        A: function () {
          return d;
        },
      });
      var r = n(40206),
        a = n(18007),
        l = n(70778),
        c = n(63759),
        i = n(91354),
        u = n(824),
        o = n(86626),
        s = n(75467),
        f = n(93351),
        h = n(18158);
      async function d(t, e) {
        let {
            allowFailure: n = !0,
            batchSize: d,
            blockNumber: m,
            blockTag: w,
            multicallAddress: g,
            stateOverride: b,
          } = e,
          p = e.contracts,
          y =
            d ??
            (("object" == typeof t.batch?.multicall &&
              t.batch.multicall.batchSize) ||
              1024),
          v = g;
        if (!v) {
          if (!t.chain)
            throw Error(
              "client chain not configured. multicallAddress is required."
            );
          v = (0, o.L)({
            blockNumber: m,
            chain: t.chain,
            contract: "multicall3",
          });
        }
        let k = [[]],
          N = 0,
          I = 0;
        for (let t = 0; t < p.length; t++) {
          let { abi: e, address: r, args: a, functionName: l } = p[t];
          try {
            let t = (0, u.R)({ abi: e, args: a, functionName: l });
            (I += (t.length - 2) / 2),
              y > 0 &&
                I > y &&
                k[N].length > 0 &&
                (N++, (I = (t.length - 2) / 2), (k[N] = [])),
              (k[N] = [...k[N], { allowFailure: !0, callData: t, target: r }]);
          } catch (c) {
            let t = (0, s.S)(c, {
              abi: e,
              address: r,
              args: a,
              docsPath: "/docs/contract/multicall",
              functionName: l,
            });
            if (!n) throw t;
            k[N] = [...k[N], { allowFailure: !0, callData: "0x", target: r }];
          }
        }
        let C = await Promise.allSettled(
            k.map((e) =>
              (0, f.s)(
                t,
                h.L,
                "readContract"
              )({
                abi: r.F8,
                address: v,
                args: [e],
                blockNumber: m,
                blockTag: w,
                functionName: "aggregate3",
                stateOverride: b,
              })
            )
          ),
          q = [];
        for (let t = 0; t < C.length; t++) {
          let e = C[t];
          if ("rejected" === e.status) {
            if (!n) throw e.reason;
            for (let n = 0; n < k[t].length; n++)
              q.push({ status: "failure", error: e.reason, result: void 0 });
            continue;
          }
          let r = e.value;
          for (let e = 0; e < r.length; e++) {
            let { returnData: l, success: u } = r[e],
              { callData: o } = k[t][e],
              { abi: f, address: h, functionName: d, args: m } = p[q.length];
            try {
              if ("0x" === o) throw new a.wb();
              if (!u) throw new c.VQ({ data: l });
              let t = (0, i.k)({ abi: f, args: m, data: l, functionName: d });
              q.push(n ? { result: t, status: "success" } : t);
            } catch (e) {
              let t = (0, s.S)(e, {
                abi: f,
                address: h,
                args: m,
                docsPath: "/docs/contract/multicall",
                functionName: d,
              });
              if (!n) throw t;
              q.push({ error: t, result: void 0, status: "failure" });
            }
          }
        }
        if (q.length !== p.length) throw new l.G("multicall results mismatch");
        return q;
      }
    },
    63257: function (t, e, n) {
      n.d(e, {
        q: function () {
          return o;
        },
      });
      var r = n(91815),
        a = n(93351),
        l = n(59779),
        c = n(38474),
        i = n(75684),
        u = n(48140);
      function o(
        t,
        {
          emitOnBegin: e = !1,
          emitMissed: n = !1,
          onBlockNumber: o,
          onError: s,
          poll: f,
          pollingInterval: h = t.pollingInterval,
        }
      ) {
        let d, m, w;
        return (void 0 !== f ? f : "webSocket" !== t.transport.type)
          ? (() => {
              let r = (0, i.P)(["watchBlockNumber", t.uid, e, n, h]);
              return (0, l.N7)(r, { onBlockNumber: o, onError: s }, (r) =>
                (0, c.$)(
                  async () => {
                    try {
                      let e = await (0, a.s)(
                        t,
                        u.z,
                        "getBlockNumber"
                      )({ cacheTime: 0 });
                      if (d) {
                        if (e === d) return;
                        if (e - d > 1 && n)
                          for (let t = d + 1n; t < e; t++)
                            r.onBlockNumber(t, d), (d = t);
                      }
                      (!d || e > d) && (r.onBlockNumber(e, d), (d = e));
                    } catch (t) {
                      r.onError?.(t);
                    }
                  },
                  { emitOnBegin: e, interval: h }
                )
              );
            })()
          : ((m = !0),
            (w = () => (m = !1)),
            (async () => {
              try {
                let { unsubscribe: e } = await t.transport.subscribe({
                  params: ["newHeads"],
                  onData(t) {
                    if (!m) return;
                    let e = (0, r.y_)(t.result?.number);
                    o(e, d), (d = e);
                  },
                  onError(t) {
                    s?.(t);
                  },
                });
                (w = e), m || w();
              } catch (t) {
                s?.(t);
              }
            })(),
            w);
      }
    },
    59779: function (t, e, n) {
      n.d(e, {
        N7: function () {
          return c;
        },
      });
      let r = new Map(),
        a = new Map(),
        l = 0;
      function c(t, e, n) {
        let c = ++l,
          i = () => r.get(t) || [],
          u = () => {
            let e = i();
            r.set(
              t,
              e.filter((t) => t.id !== c)
            );
          },
          o = () => {
            let e = a.get(t);
            1 === i().length && e && e(), u();
          },
          s = i();
        if ((r.set(t, [...s, { id: c, fns: e }]), s && s.length > 0)) return o;
        let f = {};
        for (let t in e)
          f[t] = (...e) => {
            let n = i();
            if (0 !== n.length) for (let r of n) r.fns[t]?.(...e);
          };
        let h = n(f);
        return "function" == typeof h && a.set(t, h), o;
      }
    },
    38474: function (t, e, n) {
      n.d(e, {
        $: function () {
          return a;
        },
      });
      var r = n(91389);
      function a(t, { emitOnBegin: e, initialWaitTime: n, interval: a }) {
        let l = !0,
          c = () => (l = !1);
        return (
          (async () => {
            let i;
            e && (i = await t({ unpoll: c }));
            let u = (await n?.(i)) ?? a;
            await (0, r.D)(u);
            let o = async () => {
              l && (await t({ unpoll: c }), await (0, r.D)(a), o());
            };
            o();
          })(),
          c
        );
      }
    },
    91389: function (t, e, n) {
      n.d(e, {
        D: function () {
          return r;
        },
      });
      async function r(t) {
        return new Promise((e) => setTimeout(e, t));
      }
    },
    13984: function (t, e, n) {
      n.d(e, {
        O: function () {
          return f;
        },
      });
      var r = n(89721),
        a = n(48140),
        l = n(85978),
        c = n(99631),
        i = n(23753),
        u = n(13173),
        o = n(8979),
        s = n(34200);
      function f(t = {}) {
        let { query: e = {}, watch: n } = t,
          f = (0, o.Z)(t),
          h = (0, r.NL)(),
          d = (0, u.x)(),
          m = t.chainId ?? d,
          w = (function (t, e = {}) {
            return {
              gcTime: 0,
              async queryFn({ queryKey: e }) {
                let { scopeKey: n, ...r } = e[1];
                return (
                  (await (function (t, e = {}) {
                    let { chainId: n, ...r } = e,
                      c = t.getClient({ chainId: n });
                    return (0, l.s)(c, a.z, "getBlockNumber")(r);
                  })(t, r)) ?? null
                );
              },
              queryKey: (function (t = {}) {
                return ["blockNumber", (0, c.O)(t)];
              })(e),
            };
          })(f, { ...t, chainId: m });
        return (
          (0, s.x)({
            ...{
              config: t.config,
              chainId: t.chainId,
              ...("object" == typeof n ? n : {}),
            },
            enabled: !!(
              (e.enabled ?? !0) &&
              ("object" == typeof n ? n.enabled : n)
            ),
            onBlockNumber(t) {
              h.setQueryData(w.queryKey, t);
            },
          }),
          (0, i.aM)({ ...e, ...w })
        );
      }
    },
    34200: function (t, e, n) {
      n.d(e, {
        x: function () {
          return u;
        },
      });
      var r = n(63257),
        a = n(85978),
        l = n(15039),
        c = n(13173),
        i = n(8979);
      function u(t = {}) {
        let { enabled: e = !0, onBlockNumber: n, config: u, ...o } = t,
          s = (0, i.Z)(t),
          f = (0, c.x)(),
          h = t.chainId ?? f;
        (0, l.useEffect)(() => {
          if (e && n)
            return (function (t, e) {
              let n, l;
              let {
                  syncConnectedChain: c = t._internal.syncConnectedChain,
                  ...i
                } = e,
                u = (e) => {
                  n && n();
                  let l = t.getClient({ chainId: e });
                  return (n = (0, a.s)(l, r.q, "watchBlockNumber")(i));
                },
                o = u(e.chainId);
              return (
                c &&
                  !e.chainId &&
                  (l = t.subscribe(
                    ({ chainId: t }) => t,
                    async (t) => u(t)
                  )),
                () => {
                  o?.(), l?.();
                }
              );
            })(s, { ...o, chainId: h, onBlockNumber: n });
        }, [h, s, e, n, o]);
      }
    },
  },
]);
