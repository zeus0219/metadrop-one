"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8158],
  {
    9566: function (e, t, n) {
      n.d(t, {
        T: function () {
          return r;
        },
      });
      function r(e) {
        return "string" == typeof e ? { address: e, type: "json-rpc" } : e;
      }
    },
    22936: function (e, t, n) {
      n.d(t, {
        RE: function () {
          return x;
        },
      });
      var r = n(9566),
        a = n(40206),
        o = n(21997),
        i = n(70778),
        s = n(18741),
        u = n(63759),
        c = n(93790),
        l = n(49251),
        d = n(91354),
        f = n(824),
        p = n(79173),
        b = n(86626),
        y = n(98617),
        m = n(11588),
        h = n(98816),
        v = n(38319),
        g = n(12800),
        w = n(20564),
        P = n(31095);
      async function x(e, t) {
        let {
            account: a = e.account,
            batch: c = !!e.batch?.multicall,
            blockNumber: d,
            blockTag: f = "latest",
            accessList: b,
            data: w,
            gas: x,
            gasPrice: M,
            maxFeePerGas: $,
            maxPriorityFeePerGas: R,
            nonce: E,
            to: C,
            value: G,
            stateOverride: F,
            ...k
          } = t,
          A = a ? (0, r.T)(a) : void 0;
        try {
          (0, P.F)(t);
          let n = (d ? (0, y.eC)(d) : void 0) || f,
            r = (function (e) {
              if (!e) return;
              let t = {};
              for (let { address: n, ...r } of e) {
                if (!(0, p.U)(n, { strict: !1 })) throw new o.b({ address: n });
                if (t[n]) throw new l.Nc({ address: n });
                t[n] = (function (e) {
                  let {
                      balance: t,
                      nonce: n,
                      state: r,
                      stateDiff: a,
                      code: o,
                    } = e,
                    i = {};
                  if (
                    (void 0 !== o && (i.code = o),
                    void 0 !== t && (i.balance = (0, y.eC)(t, { size: 32 })),
                    void 0 !== n && (i.nonce = (0, y.eC)(n, { size: 8 })),
                    void 0 !== r && (i.state = O(r)),
                    void 0 !== a)
                  ) {
                    if (i.state) throw new l.Z8();
                    i.stateDiff = O(a);
                  }
                  return i;
                })(r);
              }
              return t;
            })(F),
            a = e.chain?.formatters?.transactionRequest?.format,
            i = (a || g.tG)({
              ...(0, v.K)(k, { format: a }),
              from: A?.address,
              accessList: b,
              data: w,
              gas: x,
              gasPrice: M,
              maxFeePerGas: $,
              maxPriorityFeePerGas: R,
              nonce: E,
              to: C,
              value: G,
            });
          if (
            c &&
            (function ({ request: e }) {
              let { data: t, to: n, ...r } = e;
              return (
                !(!t || t.startsWith("0x82ad56cb")) &&
                !!n &&
                !(Object.values(r).filter((e) => void 0 !== e).length > 0)
              );
            })({ request: i }) &&
            !r
          )
            try {
              return await j(e, { ...i, blockNumber: d, blockTag: f });
            } catch (e) {
              if (!(e instanceof s.pZ) && !(e instanceof s.mm)) throw e;
            }
          let u = await e.request({
            method: "eth_call",
            params: r ? [i, n, r] : [i, n],
          });
          if ("0x" === u) return { data: void 0 };
          return { data: u };
        } catch (s) {
          let r = (function (e) {
              if (!(e instanceof i.G)) return;
              let t = e.walk();
              return "object" == typeof t.data ? t.data.data : t.data;
            })(s),
            { offchainLookup: a, offchainLookupSignature: o } = await n
              .e(3903)
              .then(n.bind(n, 63903));
          if (r?.slice(0, 10) === o && C)
            return { data: await a(e, { data: r, to: C }) };
          throw (function (e, { docsPath: t, ...n }) {
            let r = (() => {
              let t = (0, h.k)(e, n);
              return t instanceof m.cj ? e : t;
            })();
            return new u.cg(r, { docsPath: t, ...n });
          })(s, { ...t, account: A, chain: e.chain });
        }
      }
      async function j(e, t) {
        let { batchSize: n = 1024, wait: r = 0 } =
            "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
          {
            blockNumber: o,
            blockTag: i = "latest",
            data: c,
            multicallAddress: l,
            to: p,
          } = t,
          m = l;
        if (!m) {
          if (!e.chain) throw new s.pZ();
          m = (0, b.L)({
            blockNumber: o,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        let h = (o ? (0, y.eC)(o) : void 0) || i,
          { schedule: v } = (0, w.S)({
            id: `${e.uid}.${h}`,
            wait: r,
            shouldSplitBatch: (e) =>
              e.reduce((e, { data: t }) => e + (t.length - 2), 0) > 2 * n,
            fn: async (t) => {
              let n = t.map((e) => ({
                  allowFailure: !0,
                  callData: e.data,
                  target: e.to,
                })),
                r = (0, f.R)({
                  abi: a.F8,
                  args: [n],
                  functionName: "aggregate3",
                }),
                o = await e.request({
                  method: "eth_call",
                  params: [{ data: r, to: m }, h],
                });
              return (0, d.k)({
                abi: a.F8,
                args: [n],
                functionName: "aggregate3",
                data: o || "0x",
              });
            },
          }),
          [{ returnData: g, success: P }] = await v({ data: c, to: p });
        if (!P) throw new u.VQ({ data: g });
        return "0x" === g ? { data: void 0 } : { data: g };
      }
      function O(e) {
        if (e && 0 !== e.length)
          return e.reduce((e, { slot: t, value: n }) => {
            if (66 !== t.length)
              throw new c.W_({ size: t.length, targetSize: 66, type: "hex" });
            if (66 !== n.length)
              throw new c.W_({ size: n.length, targetSize: 66, type: "hex" });
            return (e[t] = n), e;
          }, {});
      }
    },
    18158: function (e, t, n) {
      n.d(t, {
        L: function () {
          return u;
        },
      });
      var r = n(91354),
        a = n(824),
        o = n(75467),
        i = n(93351),
        s = n(22936);
      async function u(e, t) {
        let { abi: n, address: u, args: c, functionName: l, ...d } = t,
          f = (0, a.R)({ abi: n, args: c, functionName: l });
        try {
          let { data: t } = await (0, i.s)(
            e,
            s.RE,
            "call"
          )({ ...d, data: f, to: u });
          return (0, r.k)({
            abi: n,
            args: c,
            functionName: l,
            data: t || "0x",
          });
        } catch (e) {
          throw (0, o.S)(e, {
            abi: n,
            address: u,
            args: c,
            docsPath: "/docs/contract/readContract",
            functionName: l,
          });
        }
      }
    },
    40206: function (e, t, n) {
      n.d(t, {
        $o: function () {
          return c;
        },
        F8: function () {
          return r;
        },
        Wo: function () {
          return l;
        },
        X$: function () {
          return u;
        },
        du: function () {
          return i;
        },
        k3: function () {
          return o;
        },
        nZ: function () {
          return s;
        },
      });
      let r = [
          {
            inputs: [
              {
                components: [
                  { name: "target", type: "address" },
                  { name: "allowFailure", type: "bool" },
                  { name: "callData", type: "bytes" },
                ],
                name: "calls",
                type: "tuple[]",
              },
            ],
            name: "aggregate3",
            outputs: [
              {
                components: [
                  { name: "success", type: "bool" },
                  { name: "returnData", type: "bytes" },
                ],
                name: "returnData",
                type: "tuple[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        a = [
          { inputs: [], name: "ResolverNotFound", type: "error" },
          { inputs: [], name: "ResolverWildcardNotSupported", type: "error" },
          { inputs: [], name: "ResolverNotContract", type: "error" },
          {
            inputs: [{ name: "returnData", type: "bytes" }],
            name: "ResolverError",
            type: "error",
          },
          {
            inputs: [
              {
                components: [
                  { name: "status", type: "uint16" },
                  { name: "message", type: "string" },
                ],
                name: "errors",
                type: "tuple[]",
              },
            ],
            name: "HttpError",
            type: "error",
          },
        ],
        o = [
          ...a,
          {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
          {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
              { name: "gateways", type: "string[]" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
        ],
        i = [
          ...a,
          {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [{ type: "bytes", name: "reverseName" }],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolvedAddress" },
              { type: "address", name: "reverseResolver" },
              { type: "address", name: "resolver" },
            ],
          },
          {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [
              { type: "bytes", name: "reverseName" },
              { type: "string[]", name: "gateways" },
            ],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolvedAddress" },
              { type: "address", name: "reverseResolver" },
              { type: "address", name: "resolver" },
            ],
          },
        ],
        s = [
          {
            name: "text",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "key", type: "string" },
            ],
            outputs: [{ name: "", type: "string" }],
          },
        ],
        u = [
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "name", type: "bytes32" }],
            outputs: [{ name: "", type: "address" }],
          },
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "coinType", type: "uint256" },
            ],
            outputs: [{ name: "", type: "bytes" }],
          },
        ],
        c = [
          {
            inputs: [
              { internalType: "address", name: "_signer", type: "address" },
              { internalType: "bytes32", name: "_hash", type: "bytes32" },
              { internalType: "bytes", name: "_signature", type: "bytes" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
        ],
        l = [
          {
            type: "event",
            name: "Approval",
            inputs: [
              { indexed: !0, name: "owner", type: "address" },
              { indexed: !0, name: "spender", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "event",
            name: "Transfer",
            inputs: [
              { indexed: !0, name: "from", type: "address" },
              { indexed: !0, name: "to", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "function",
            name: "allowance",
            stateMutability: "view",
            inputs: [
              { name: "owner", type: "address" },
              { name: "spender", type: "address" },
            ],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "approve",
            stateMutability: "nonpayable",
            inputs: [
              { name: "spender", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "balanceOf",
            stateMutability: "view",
            inputs: [{ name: "account", type: "address" }],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "decimals",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint8" }],
          },
          {
            type: "function",
            name: "name",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "symbol",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "totalSupply",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "transfer",
            stateMutability: "nonpayable",
            inputs: [
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "transferFrom",
            stateMutability: "nonpayable",
            inputs: [
              { name: "sender", type: "address" },
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
        ];
    },
    55237: function (e, t, n) {
      n.d(t, {
        $: function () {
          return r;
        },
        Up: function () {
          return a;
        },
        hZ: function () {
          return o;
        },
      });
      let r = {
          1: "An `assert` condition failed.",
          17: "Arithmetic operation resulted in underflow or overflow.",
          18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
          33: "Attempted to convert to an invalid type.",
          34: "Attempted to access a storage byte array that is incorrectly encoded.",
          49: "Performed `.pop()` on an empty array",
          50: "Array index is out of bounds.",
          65: "Allocated too much memory or created an array which is too large.",
          81: "Attempted to call a zero-initialized variable of internal function type.",
        },
        a = {
          inputs: [{ name: "message", type: "string" }],
          name: "Error",
          type: "error",
        },
        o = {
          inputs: [{ name: "reason", type: "uint256" }],
          name: "Panic",
          type: "error",
        };
    },
    63759: function (e, t, n) {
      n.d(t, {
        cg: function () {
          return h;
        },
        uq: function () {
          return v;
        },
        Lu: function () {
          return g;
        },
        Dk: function () {
          return w;
        },
        VQ: function () {
          return P;
        },
      });
      var r = n(9566),
        a = n(55237),
        o = n(74791),
        i = n(615),
        s = n(75684);
      function u({
        abiItem: e,
        args: t,
        includeFunctionName: n = !0,
        includeName: r = !1,
      }) {
        if ("name" in e && "inputs" in e && e.inputs)
          return `${n ? e.name : ""}(${e.inputs
            .map(
              (e, n) =>
                `${r && e.name ? `${e.name}: ` : ""}${
                  "object" == typeof t[n] ? (0, s.P)(t[n]) : t[n]
                }`
            )
            .join(", ")})`;
      }
      var c = n(69210),
        l = n(51123),
        d = n(20899),
        f = n(18007),
        p = n(70778),
        b = n(49251),
        y = n(213),
        m = n(86336);
      class h extends p.G {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: a,
            data: o,
            gas: i,
            gasPrice: s,
            maxFeePerGas: u,
            maxPriorityFeePerGas: c,
            nonce: f,
            to: p,
            value: m,
            stateOverride: h,
          }
        ) {
          let v = t ? (0, r.T)(t) : void 0,
            g = (0, y.xr)({
              from: v?.address,
              to: p,
              value:
                void 0 !== m &&
                `${(0, l.d)(m)} ${a?.nativeCurrency?.symbol || "ETH"}`,
              data: o,
              gas: i,
              gasPrice: void 0 !== s && `${(0, d.o)(s)} gwei`,
              maxFeePerGas: void 0 !== u && `${(0, d.o)(u)} gwei`,
              maxPriorityFeePerGas: void 0 !== c && `${(0, d.o)(c)} gwei`,
              nonce: f,
            });
          h &&
            (g += `
${(0, b.Bj)(h)}`),
            super(e.shortMessage, {
              cause: e,
              docsPath: n,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                "Raw Call Arguments:",
                g,
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
              value: "CallExecutionError",
            }),
            (this.cause = e);
        }
      }
      class v extends p.G {
        constructor(
          e,
          {
            abi: t,
            args: n,
            contractAddress: r,
            docsPath: a,
            functionName: o,
            sender: s,
          }
        ) {
          let l = (0, c.mE)({ abi: t, args: n, name: o }),
            d = l
              ? u({
                  abiItem: l,
                  args: n,
                  includeFunctionName: !1,
                  includeName: !1,
                })
              : void 0;
          super(
            e.shortMessage ||
              `An unknown error occurred while executing the contract function "${o}".`,
            {
              cause: e,
              docsPath: a,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                "Contract Call:",
                (0, y.xr)({
                  address: r && (0, m.CR)(r),
                  function: l ? (0, i.t)(l, { includeName: !0 }) : void 0,
                  args:
                    d &&
                    "()" !== d &&
                    `${[...Array(o?.length ?? 0).keys()]
                      .map(() => " ")
                      .join("")}${d}`,
                  sender: s,
                }),
              ].filter(Boolean),
            }
          ),
            Object.defineProperty(this, "abi", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "args", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "contractAddress", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "formattedArgs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "functionName", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "sender", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ContractFunctionExecutionError",
            }),
            (this.abi = t),
            (this.args = n),
            (this.cause = e),
            (this.contractAddress = r),
            (this.functionName = o),
            (this.sender = s);
        }
      }
      class g extends p.G {
        constructor({ abi: e, data: t, functionName: n, message: r }) {
          let s, c, l, d, p;
          if (t && "0x" !== t)
            try {
              let {
                abiItem: n,
                errorName: r,
                args: s,
              } = (p = (0, o.p)({ abi: e, data: t }));
              if ("Error" === r) l = s[0];
              else if ("Panic" === r) {
                let [e] = s;
                l = a.$[e];
              } else {
                let e = n ? (0, i.t)(n, { includeName: !0 }) : void 0,
                  t =
                    n && s
                      ? u({
                          abiItem: n,
                          args: s,
                          includeFunctionName: !1,
                          includeName: !1,
                        })
                      : void 0;
                c = [
                  e ? `Error: ${e}` : "",
                  t && "()" !== t
                    ? `       ${[...Array(r?.length ?? 0).keys()]
                        .map(() => " ")
                        .join("")}${t}`
                    : "",
                ];
              }
            } catch (e) {
              s = e;
            }
          else r && (l = r);
          s instanceof f.yP &&
            ((d = s.signature),
            (c = [
              `Unable to decode signature "${d}" as it was not found on the provided ABI.`,
              "Make sure you are using the correct ABI and that the error exists on it.",
              `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`,
            ])),
            super(
              (l && "execution reverted" !== l) || d
                ? [
                    `The contract function "${n}" reverted with the following ${
                      d ? "signature" : "reason"
                    }:`,
                    l || d,
                  ].join("\n")
                : `The contract function "${n}" reverted.`,
              { cause: s, metaMessages: c }
            ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ContractFunctionRevertedError",
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "reason", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = p),
            (this.reason = l),
            (this.signature = d);
        }
      }
      class w extends p.G {
        constructor({ functionName: e }) {
          super(`The contract function "${e}" returned no data ("0x").`, {
            metaMessages: [
              "This could be due to any of the following:",
              `  - The contract does not have the function "${e}",`,
              "  - The parameters passed to the contract function may be invalid, or",
              "  - The address is not a contract.",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ContractFunctionZeroDataError",
            });
        }
      }
      class P extends p.G {
        constructor({ data: e, message: t }) {
          super(t || ""),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 3,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "RawContractError",
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e);
        }
      }
    },
    47082: function (e, t, n) {
      n.d(t, {
        Gg: function () {
          return i;
        },
        W5: function () {
          return u;
        },
        bs: function () {
          return s;
        },
      });
      var r = n(75684),
        a = n(70778),
        o = n(86336);
      class i extends a.G {
        constructor({ body: e, details: t, headers: n, status: a, url: i }) {
          super("HTTP request failed.", {
            details: t,
            metaMessages: [
              a && `Status: ${a}`,
              `URL: ${(0, o.Gr)(i)}`,
              e && `Request body: ${(0, r.P)(e)}`,
            ].filter(Boolean),
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "HttpRequestError",
            }),
            Object.defineProperty(this, "body", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "headers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "status", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.body = e),
            (this.headers = n),
            (this.status = a),
            (this.url = i);
        }
      }
      class s extends a.G {
        constructor({ body: e, error: t, url: n }) {
          super("RPC Request failed.", {
            cause: t,
            details: t.message,
            metaMessages: [
              `URL: ${(0, o.Gr)(n)}`,
              `Request body: ${(0, r.P)(e)}`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "RpcRequestError",
            }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.code = t.code);
        }
      }
      class u extends a.G {
        constructor({ body: e, url: t }) {
          super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [
              `URL: ${(0, o.Gr)(t)}`,
              `Request body: ${(0, r.P)(e)}`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "TimeoutError",
            });
        }
      }
    },
    814: function (e, t, n) {
      n.d(t, {
        B: function () {
          return u;
        },
        GD: function () {
          return v;
        },
        I0: function () {
          return j;
        },
        KB: function () {
          return y;
        },
        LX: function () {
          return c;
        },
        Og: function () {
          return p;
        },
        PE: function () {
          return w;
        },
        Pv: function () {
          return h;
        },
        Ts: function () {
          return P;
        },
        XS: function () {
          return d;
        },
        ab: function () {
          return g;
        },
        gS: function () {
          return m;
        },
        ir: function () {
          return M;
        },
        nY: function () {
          return l;
        },
        pT: function () {
          return b;
        },
        s7: function () {
          return s;
        },
        u5: function () {
          return x;
        },
        x3: function () {
          return O;
        },
        yR: function () {
          return f;
        },
      });
      var r = n(70778),
        a = n(47082);
      class o extends r.G {
        constructor(
          e,
          { code: t, docsPath: n, metaMessages: r, shortMessage: o }
        ) {
          super(o, {
            cause: e,
            docsPath: n,
            metaMessages: r || e?.metaMessages,
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "RpcError",
            }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.name = e.name),
            (this.code = e instanceof a.bs ? e.code : t ?? -1);
        }
      }
      class i extends o {
        constructor(e, t) {
          super(e, t),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ProviderRpcError",
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t.data);
        }
      }
      class s extends o {
        constructor(e) {
          super(e, {
            code: s.code,
            shortMessage:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ParseRpcError",
            });
        }
      }
      Object.defineProperty(s, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32700,
      });
      class u extends o {
        constructor(e) {
          super(e, {
            code: u.code,
            shortMessage: "JSON is not a valid request object.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidRequestRpcError",
            });
        }
      }
      Object.defineProperty(u, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32600,
      });
      class c extends o {
        constructor(e) {
          super(e, {
            code: c.code,
            shortMessage: "The method does not exist / is not available.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "MethodNotFoundRpcError",
            });
        }
      }
      Object.defineProperty(c, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32601,
      });
      class l extends o {
        constructor(e) {
          super(e, {
            code: l.code,
            shortMessage:
              "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParamsRpcError",
            });
        }
      }
      Object.defineProperty(l, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      class d extends o {
        constructor(e) {
          super(e, {
            code: d.code,
            shortMessage: "An internal error was received.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InternalRpcError",
            });
        }
      }
      Object.defineProperty(d, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32603,
      });
      class f extends o {
        constructor(e) {
          super(e, {
            code: f.code,
            shortMessage:
              "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidInputRpcError",
            });
        }
      }
      Object.defineProperty(f, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32e3,
      });
      class p extends o {
        constructor(e) {
          super(e, {
            code: p.code,
            shortMessage: "Requested resource not found.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ResourceNotFoundRpcError",
            });
        }
      }
      Object.defineProperty(p, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32001,
      });
      class b extends o {
        constructor(e) {
          super(e, {
            code: b.code,
            shortMessage: "Requested resource not available.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ResourceUnavailableRpcError",
            });
        }
      }
      Object.defineProperty(b, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32002,
      });
      class y extends o {
        constructor(e) {
          super(e, {
            code: y.code,
            shortMessage: "Transaction creation failed.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "TransactionRejectedRpcError",
            });
        }
      }
      Object.defineProperty(y, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32003,
      });
      class m extends o {
        constructor(e) {
          super(e, {
            code: m.code,
            shortMessage: "Method is not implemented.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "MethodNotSupportedRpcError",
            });
        }
      }
      Object.defineProperty(m, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32004,
      });
      class h extends o {
        constructor(e) {
          super(e, {
            code: h.code,
            shortMessage: "Request exceeds defined limit.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "LimitExceededRpcError",
            });
        }
      }
      Object.defineProperty(h, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32005,
      });
      class v extends o {
        constructor(e) {
          super(e, {
            code: v.code,
            shortMessage: "Version of JSON-RPC protocol is not supported.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "JsonRpcVersionUnsupportedError",
            });
        }
      }
      Object.defineProperty(v, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32006,
      });
      class g extends i {
        constructor(e) {
          super(e, {
            code: g.code,
            shortMessage: "User rejected the request.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UserRejectedRequestError",
            });
        }
      }
      Object.defineProperty(g, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4001,
      });
      class w extends i {
        constructor(e) {
          super(e, {
            code: w.code,
            shortMessage:
              "The requested method and/or account has not been authorized by the user.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnauthorizedProviderError",
            });
        }
      }
      Object.defineProperty(w, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4100,
      });
      class P extends i {
        constructor(e) {
          super(e, {
            code: P.code,
            shortMessage: "The Provider does not support the requested method.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnsupportedProviderMethodError",
            });
        }
      }
      Object.defineProperty(P, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4200,
      });
      class x extends i {
        constructor(e) {
          super(e, {
            code: x.code,
            shortMessage: "The Provider is disconnected from all chains.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ProviderDisconnectedError",
            });
        }
      }
      Object.defineProperty(x, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4900,
      });
      class j extends i {
        constructor(e) {
          super(e, {
            code: j.code,
            shortMessage:
              "The Provider is not connected to the requested chain.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainDisconnectedError",
            });
        }
      }
      Object.defineProperty(j, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4901,
      });
      class O extends i {
        constructor(e) {
          super(e, {
            code: O.code,
            shortMessage: "An error occurred when attempting to switch chain.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SwitchChainError",
            });
        }
      }
      Object.defineProperty(O, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4902,
      });
      class M extends o {
        constructor(e) {
          super(e, { shortMessage: "An unknown RPC error occurred." }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownRpcError",
            });
        }
      }
    },
    49251: function (e, t, n) {
      n.d(t, {
        Bj: function () {
          return s;
        },
        Nc: function () {
          return a;
        },
        Z8: function () {
          return o;
        },
      });
      var r = n(70778);
      class a extends r.G {
        constructor({ address: e }) {
          super(`State for account "${e}" is set multiple times.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AccountStateConflictError",
            });
        }
      }
      class o extends r.G {
        constructor() {
          super("state and stateDiff are set on the same account."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "StateAssignmentConflictError",
            });
        }
      }
      function i(e) {
        return e.reduce(
          (e, { slot: t, value: n }) => `${e}        ${t}: ${n}
`,
          ""
        );
      }
      function s(e) {
        return e
          .reduce((e, { address: t, ...n }) => {
            let r = `${e}    ${t}:
`;
            return (
              n.nonce &&
                (r += `      nonce: ${n.nonce}
`),
              n.balance &&
                (r += `      balance: ${n.balance}
`),
              n.code &&
                (r += `      code: ${n.code}
`),
              n.state && (r += "      state:\n" + i(n.state)),
              n.stateDiff && (r += "      stateDiff:\n" + i(n.stateDiff)),
              r
            );
          }, "  State Override:\n")
          .slice(0, -1);
      }
    },
    24438: function (e, t, n) {
      n.d(t, {
        r: function () {
          return y;
        },
      });
      var r = n(18007),
        a = n(66447),
        o = n(94712),
        i = n(36338),
        s = n(86422),
        u = n(72205),
        c = n(37169),
        l = n(91815),
        d = n(98617);
      function f(e, t = {}) {
        void 0 !== t.size && (0, l.Yf)(e, { size: t.size });
        let n = (0, d.ci)(e, t);
        return (0, l.ly)(n, t);
      }
      var p = n(52796),
        b = n(68882);
      function y(e, t) {
        let n = "string" == typeof t ? (0, p.nr)(t) : t,
          y = (0, o.q)(n);
        if (0 === (0, i.d)(n) && e.length > 0) throw new r.wb();
        if ((0, i.d)(t) && 32 > (0, i.d)(t))
          throw new r.xB({
            data: "string" == typeof t ? t : (0, d.ci)(t),
            params: e,
            size: (0, i.d)(t),
          });
        let h = 0,
          v = [];
        for (let t = 0; t < e.length; ++t) {
          let n = e[t];
          y.setPosition(h);
          let [o, i] = (function e(t, n, { staticPosition: o }) {
            let i = (0, b.S)(n.type);
            if (i) {
              let [r, a] = i;
              return (function (t, n, { length: r, staticPosition: a }) {
                if (!r) {
                  let r = a + f(t.readBytes(32)),
                    o = r + 32;
                  t.setPosition(r);
                  let i = f(t.readBytes(32)),
                    s = m(n),
                    u = 0,
                    c = [];
                  for (let r = 0; r < i; ++r) {
                    t.setPosition(o + (s ? 32 * r : u));
                    let [a, i] = e(t, n, { staticPosition: o });
                    (u += i), c.push(a);
                  }
                  return t.setPosition(a + 32), [c, 32];
                }
                if (m(n)) {
                  let o = a + f(t.readBytes(32)),
                    i = [];
                  for (let a = 0; a < r; ++a) {
                    t.setPosition(o + 32 * a);
                    let [r] = e(t, n, { staticPosition: o });
                    i.push(r);
                  }
                  return t.setPosition(a + 32), [i, 32];
                }
                let o = 0,
                  i = [];
                for (let s = 0; s < r; ++s) {
                  let [r, s] = e(t, n, { staticPosition: a + o });
                  (o += s), i.push(r);
                }
                return [i, o];
              })(t, { ...n, type: a }, { length: r, staticPosition: o });
            }
            if ("tuple" === n.type)
              return (function (t, n, { staticPosition: r }) {
                let a =
                    0 === n.components.length ||
                    n.components.some(({ name: e }) => !e),
                  o = a ? [] : {},
                  i = 0;
                if (m(n)) {
                  let s = r + f(t.readBytes(32));
                  for (let r = 0; r < n.components.length; ++r) {
                    let u = n.components[r];
                    t.setPosition(s + i);
                    let [c, l] = e(t, u, { staticPosition: s });
                    (i += l), (o[a ? r : u?.name] = c);
                  }
                  return t.setPosition(r + 32), [o, 32];
                }
                for (let s = 0; s < n.components.length; ++s) {
                  let u = n.components[s],
                    [c, l] = e(t, u, { staticPosition: r });
                  (o[a ? s : u?.name] = c), (i += l);
                }
                return [o, i];
              })(t, n, { staticPosition: o });
            if ("address" === n.type)
              return (function (e) {
                let t = e.readBytes(32);
                return [(0, a.x)((0, d.ci)((0, s.T4)(t, -20))), 32];
              })(t);
            if ("bool" === n.type)
              return [
                (function (e, t = {}) {
                  let n = e;
                  if (
                    (void 0 !== t.size &&
                      ((0, l.Yf)(n, { size: t.size }), (n = (0, u.f)(n))),
                    n.length > 1 || n[0] > 1)
                  )
                    throw new c.yr(n);
                  return !!n[0];
                })(t.readBytes(32), { size: 32 }),
                32,
              ];
            if (n.type.startsWith("bytes"))
              return (function (e, t, { staticPosition: n }) {
                let [r, a] = t.type.split("bytes");
                if (!a) {
                  let t = f(e.readBytes(32));
                  e.setPosition(n + t);
                  let r = f(e.readBytes(32));
                  if (0 === r) return e.setPosition(n + 32), ["0x", 32];
                  let a = e.readBytes(r);
                  return e.setPosition(n + 32), [(0, d.ci)(a), 32];
                }
                return [(0, d.ci)(e.readBytes(parseInt(a), 32)), 32];
              })(t, n, { staticPosition: o });
            if (n.type.startsWith("uint") || n.type.startsWith("int"))
              return (function (e, t) {
                let n = t.type.startsWith("int"),
                  r = parseInt(t.type.split("int")[1] || "256"),
                  a = e.readBytes(32);
                return [
                  r > 48
                    ? (function (e, t = {}) {
                        void 0 !== t.size && (0, l.Yf)(e, { size: t.size });
                        let n = (0, d.ci)(e, t);
                        return (0, l.y_)(n, t);
                      })(a, { signed: n })
                    : f(a, { signed: n }),
                  32,
                ];
              })(t, n);
            if ("string" === n.type)
              return (function (e, { staticPosition: t }) {
                let n = f(e.readBytes(32));
                e.setPosition(t + n);
                let r = f(e.readBytes(32));
                if (0 === r) return e.setPosition(t + 32), ["", 32];
                let a = e.readBytes(r, 32),
                  o = (function (e, t = {}) {
                    let n = e;
                    return (
                      void 0 !== t.size &&
                        ((0, l.Yf)(n, { size: t.size }),
                        (n = (0, u.f)(n, { dir: "right" }))),
                      new TextDecoder().decode(n)
                    );
                  })((0, u.f)(a));
                return e.setPosition(t + 32), [o, 32];
              })(t, { staticPosition: o });
            throw new r.CI(n.type, {
              docsPath: "/docs/contract/decodeAbiParameters",
            });
          })(y, n, { staticPosition: 0 });
          (h += i), v.push(o);
        }
        return v;
      }
      function m(e) {
        let { type: t } = e;
        if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
        if ("tuple" === t) return e.components?.some(m);
        let n = (0, b.S)(e.type);
        return !!(n && m({ ...e, type: n[1] }));
      }
    },
    74791: function (e, t, n) {
      n.d(t, {
        p: function () {
          return c;
        },
      });
      var r = n(55237),
        a = n(18007),
        o = n(86422),
        i = n(14921),
        s = n(24438),
        u = n(615);
      function c(e) {
        let { abi: t, data: n } = e,
          c = (0, o.tP)(n, 0, 4);
        if ("0x" === c) throw new a.wb();
        let l = [...(t || []), r.Up, r.hZ].find(
          (e) => "error" === e.type && c === (0, i.C)((0, u.t)(e))
        );
        if (!l)
          throw new a.yP(c, { docsPath: "/docs/contract/decodeErrorResult" });
        return {
          abiItem: l,
          args:
            "inputs" in l && l.inputs && l.inputs.length > 0
              ? (0, s.r)(l.inputs, (0, o.tP)(n, 4))
              : void 0,
          errorName: l.name,
        };
      }
    },
    91354: function (e, t, n) {
      n.d(t, {
        k: function () {
          return s;
        },
      });
      var r = n(18007),
        a = n(24438),
        o = n(69210);
      let i = "/docs/contract/decodeFunctionResult";
      function s(e) {
        let { abi: t, args: n, functionName: s, data: u } = e,
          c = t[0];
        if (s) {
          let e = (0, o.mE)({ abi: t, args: n, name: s });
          if (!e) throw new r.xL(s, { docsPath: i });
          c = e;
        }
        if ("function" !== c.type) throw new r.xL(void 0, { docsPath: i });
        if (!c.outputs) throw new r.MX(c.name, { docsPath: i });
        let l = (0, a.r)(c.outputs, u);
        return l && l.length > 1 ? l : l && 1 === l.length ? l[0] : void 0;
      }
    },
    824: function (e, t, n) {
      n.d(t, {
        R: function () {
          return l;
        },
      });
      var r = n(18007),
        a = n(42196),
        o = n(14921),
        i = n(68882),
        s = n(615),
        u = n(69210);
      let c = "/docs/contract/encodeFunctionData";
      function l(e) {
        let { abi: t, args: n, functionName: l } = e,
          d = t[0];
        if (l) {
          let e = (0, u.mE)({ abi: t, args: n, name: l });
          if (!e) throw new r.xL(l, { docsPath: c });
          d = e;
        }
        if ("function" !== d.type) throw new r.xL(void 0, { docsPath: c });
        let f = (0, s.t)(d),
          p = (0, o.C)(f),
          b = "inputs" in d && d.inputs ? (0, i.E)(d.inputs, n ?? []) : void 0;
        return (0, a.SM)([p, b ?? "0x"]);
      }
    },
    69210: function (e, t, n) {
      n.d(t, {
        mE: function () {
          return u;
        },
      });
      var r = n(18007),
        a = n(82701),
        o = n(79173),
        i = n(39506),
        s = n(14921);
      function u(e) {
        let t;
        let { abi: n, args: u = [], name: c } = e,
          l = (0, a.v)(c, { strict: !1 }),
          d = n.filter((e) =>
            l
              ? "function" === e.type
                ? (0, s.C)(e) === c
                : "event" === e.type && (0, i.n)(e) === c
              : "name" in e && e.name === c
          );
        if (0 !== d.length) {
          if (1 === d.length) return d[0];
          for (let e of d)
            if ("inputs" in e) {
              if (!u || 0 === u.length) {
                if (!e.inputs || 0 === e.inputs.length) return e;
                continue;
              }
              if (
                e.inputs &&
                0 !== e.inputs.length &&
                e.inputs.length === u.length &&
                u.every((t, n) => {
                  let r = "inputs" in e && e.inputs[n];
                  return (
                    !!r &&
                    (function e(t, n) {
                      let r = typeof t,
                        a = n.type;
                      switch (a) {
                        case "address":
                          return (0, o.U)(t, { strict: !1 });
                        case "bool":
                          return "boolean" === r;
                        case "function":
                        case "string":
                          return "string" === r;
                        default:
                          if ("tuple" === a && "components" in n)
                            return Object.values(n.components).every((n, r) =>
                              e(Object.values(t)[r], n)
                            );
                          if (
                            /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                              a
                            )
                          )
                            return "number" === r || "bigint" === r;
                          if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(a))
                            return "string" === r || t instanceof Uint8Array;
                          if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(a))
                            return (
                              Array.isArray(t) &&
                              t.every((t) =>
                                e(t, {
                                  ...n,
                                  type: a.replace(/(\[[0-9]{0,}\])$/, ""),
                                })
                              )
                            );
                          return !1;
                      }
                    })(t, r)
                  );
                })
              ) {
                if (t && "inputs" in t && t.inputs) {
                  let n = (function e(t, n, r) {
                    for (let a in t) {
                      let i = t[a],
                        s = n[a];
                      if (
                        "tuple" === i.type &&
                        "tuple" === s.type &&
                        "components" in i &&
                        "components" in s
                      )
                        return e(i.components, s.components, r[a]);
                      let u = [i.type, s.type];
                      if (
                        (u.includes("address") && u.includes("bytes20")) ||
                        (((u.includes("address") && u.includes("string")) ||
                          (u.includes("address") && u.includes("bytes"))) &&
                          (0, o.U)(r[a], { strict: !1 }))
                      )
                        return u;
                    }
                  })(e.inputs, t.inputs, u);
                  if (n)
                    throw new r.S4(
                      { abiItem: e, type: n[0] },
                      { abiItem: t, type: n[1] }
                    );
                }
                t = e;
              }
            }
          return t || d[0];
        }
      }
    },
    86626: function (e, t, n) {
      n.d(t, {
        L: function () {
          return a;
        },
      });
      var r = n(18741);
      function a({ blockNumber: e, chain: t, contract: n }) {
        let a = t?.contracts?.[n];
        if (!a) throw new r.mm({ chain: t, contract: { name: n } });
        if (e && a.blockCreated && a.blockCreated > e)
          throw new r.mm({
            blockNumber: e,
            chain: t,
            contract: { name: n, blockCreated: a.blockCreated },
          });
        return a.address;
      }
    },
    75467: function (e, t, n) {
      n.d(t, {
        S: function () {
          return s;
        },
      });
      var r = n(18007),
        a = n(70778),
        o = n(63759),
        i = n(814);
      function s(
        e,
        { abi: t, address: n, args: s, docsPath: u, functionName: c, sender: l }
      ) {
        let {
            code: d,
            data: f,
            message: p,
            shortMessage: b,
          } = e instanceof o.VQ
            ? e
            : e instanceof a.G
            ? e.walk((e) => "data" in e) || e.walk()
            : {},
          y =
            e instanceof r.wb
              ? new o.Dk({ functionName: c })
              : [3, i.XS.code].includes(d) && (f || p || b)
              ? new o.Lu({
                  abi: t,
                  data: "object" == typeof f ? f.data : f,
                  functionName: c,
                  message: b ?? p,
                })
              : e;
        return new o.uq(y, {
          abi: t,
          args: s,
          contractAddress: n,
          docsPath: u,
          functionName: c,
          sender: l,
        });
      }
    },
    98816: function (e, t, n) {
      n.d(t, {
        k: function () {
          return o;
        },
      });
      var r = n(70778),
        a = n(11588);
      function o(e, t) {
        let n = (e.details || "").toLowerCase(),
          o = e instanceof r.G ? e.walk((e) => e.code === a.M_.code) : e;
        return o instanceof r.G
          ? new a.M_({ cause: e, message: o.details })
          : a.M_.nodeMessage.test(n)
          ? new a.M_({ cause: e, message: e.details })
          : a.Hh.nodeMessage.test(n)
          ? new a.Hh({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : a.G$.nodeMessage.test(n)
          ? new a.G$({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : a.ZI.nodeMessage.test(n)
          ? new a.ZI({ cause: e, nonce: t?.nonce })
          : a.vU.nodeMessage.test(n)
          ? new a.vU({ cause: e, nonce: t?.nonce })
          : a.se.nodeMessage.test(n)
          ? new a.se({ cause: e, nonce: t?.nonce })
          : a.C_.nodeMessage.test(n)
          ? new a.C_({ cause: e })
          : a.WF.nodeMessage.test(n)
          ? new a.WF({ cause: e, gas: t?.gas })
          : a.dR.nodeMessage.test(n)
          ? new a.dR({ cause: e, gas: t?.gas })
          : a.pZ.nodeMessage.test(n)
          ? new a.pZ({ cause: e })
          : a.cs.nodeMessage.test(n)
          ? new a.cs({
              cause: e,
              maxFeePerGas: t?.maxFeePerGas,
              maxPriorityFeePerGas: t?.maxPriorityFeePerGas,
            })
          : new a.cj({ cause: e });
      }
    },
    38319: function (e, t, n) {
      n.d(t, {
        K: function () {
          return r;
        },
      });
      function r(e, { format: t }) {
        if (!t) return {};
        let n = {};
        return (
          !(function t(r) {
            for (let a of Object.keys(r))
              a in e && (n[a] = e[a]),
                r[a] &&
                  "object" == typeof r[a] &&
                  !Array.isArray(r[a]) &&
                  t(r[a]);
          })(t(e || {})),
          n
        );
      }
    },
    12800: function (e, t, n) {
      n.d(t, {
        tG: function () {
          return o;
        },
      });
      var r = n(98617);
      let a = { legacy: "0x0", eip2930: "0x1", eip1559: "0x2", eip4844: "0x3" };
      function o(e) {
        return {
          ...e,
          gas: void 0 !== e.gas ? (0, r.eC)(e.gas) : void 0,
          gasPrice: void 0 !== e.gasPrice ? (0, r.eC)(e.gasPrice) : void 0,
          maxFeePerGas:
            void 0 !== e.maxFeePerGas ? (0, r.eC)(e.maxFeePerGas) : void 0,
          maxPriorityFeePerGas:
            void 0 !== e.maxPriorityFeePerGas
              ? (0, r.eC)(e.maxPriorityFeePerGas)
              : void 0,
          nonce: void 0 !== e.nonce ? (0, r.eC)(e.nonce) : void 0,
          type: void 0 !== e.type ? a[e.type] : void 0,
          value: void 0 !== e.value ? (0, r.eC)(e.value) : void 0,
        };
      }
    },
    93351: function (e, t, n) {
      n.d(t, {
        s: function () {
          return r;
        },
      });
      function r(e, t, n) {
        return (r) => e[t.name || n]?.(r) ?? t(e, r);
      }
    },
    39506: function (e, t, n) {
      n.d(t, {
        n: function () {
          return r;
        },
      });
      let r = n(46797).r;
    },
    14921: function (e, t, n) {
      n.d(t, {
        C: function () {
          return o;
        },
      });
      var r = n(86422),
        a = n(46797);
      let o = (e) => (0, r.tP)((0, a.r)(e), 0, 4);
    },
    46797: function (e, t, n) {
      n.d(t, {
        r: function () {
          return l;
        },
      });
      var r = n(52796),
        a = n(66616);
      let o = (e) => (0, a.w)((0, r.O0)(e)),
        i = /^tuple(?<array>(\[(\d*)\])*)$/;
      function s(e) {
        let t = "",
          n = e.length;
        for (let r = 0; r < n; r++)
          (t += (function e(t) {
            let n = t.type;
            if (i.test(t.type) && "components" in t) {
              n = "(";
              let r = t.components.length;
              for (let a = 0; a < r; a++)
                (n += e(t.components[a])), a < r - 1 && (n += ", ");
              let a = (function (e, t) {
                let n = e.exec(t);
                return n?.groups;
              })(i, t.type);
              return (n += `)${a?.array ?? ""}`), e({ ...t, type: n });
            }
            return ("indexed" in t && t.indexed && (n = `${n} indexed`), t.name)
              ? `${n} ${t.name}`
              : n;
          })(e[r])),
            r !== n - 1 && (t += ", ");
        return t;
      }
      var u = n(70778);
      let c = (e) => {
        var t;
        return (function (e) {
          let t = !0,
            n = "",
            r = 0,
            a = "",
            o = !1;
          for (let i = 0; i < e.length; i++) {
            let s = e[i];
            if (
              (["(", ")", ","].includes(s) && (t = !0),
              "(" === s && r++,
              ")" === s && r--,
              t)
            ) {
              if (0 === r) {
                if (" " === s && ["event", "function", ""].includes(a)) a = "";
                else if (((a += s), ")" === s)) {
                  o = !0;
                  break;
                }
                continue;
              }
              if (" " === s) {
                "," !== e[i - 1] &&
                  "," !== n &&
                  ",(" !== n &&
                  ((n = ""), (t = !1));
                continue;
              }
              (a += s), (n += s);
            }
          }
          if (!o) throw new u.G("Unable to normalize signature.");
          return a;
        })(
          "string" == typeof e
            ? e
            : "function" === (t = e).type
            ? `function ${t.name}(${s(t.inputs)})${
                t.stateMutability && "nonpayable" !== t.stateMutability
                  ? ` ${t.stateMutability}`
                  : ""
              }${t.outputs.length ? ` returns (${s(t.outputs)})` : ""}`
            : "event" === t.type
            ? `event ${t.name}(${s(t.inputs)})`
            : "error" === t.type
            ? `error ${t.name}(${s(t.inputs)})`
            : "constructor" === t.type
            ? `constructor(${s(t.inputs)})${
                "payable" === t.stateMutability ? " payable" : ""
              }`
            : "fallback" === t.type
            ? "fallback()"
            : "receive() external payable"
        );
      };
      function l(e) {
        return o(c(e));
      }
    },
    20564: function (e, t, n) {
      n.d(t, {
        S: function () {
          return a;
        },
      });
      let r = new Map();
      function a({ fn: e, id: t, shouldSplitBatch: n, wait: a = 0, sort: o }) {
        let i = async () => {
            let t = c();
            s();
            let n = t.map(({ args: e }) => e);
            0 !== n.length &&
              e(n)
                .then((e) => {
                  o && Array.isArray(e) && e.sort(o);
                  for (let n = 0; n < t.length; n++) {
                    let { pendingPromise: r } = t[n];
                    r.resolve?.([e[n], e]);
                  }
                })
                .catch((e) => {
                  for (let n = 0; n < t.length; n++) {
                    let { pendingPromise: r } = t[n];
                    r.reject?.(e);
                  }
                });
          },
          s = () => r.delete(t),
          u = () => c().map(({ args: e }) => e),
          c = () => r.get(t) || [],
          l = (e) => r.set(t, [...c(), e]);
        return {
          flush: s,
          async schedule(e) {
            let t = {},
              r = new Promise((e, n) => {
                (t.resolve = e), (t.reject = n);
              });
            return (
              (n?.([...u(), e]) && i(), c().length > 0)
                ? l({ args: e, pendingPromise: t })
                : (l({ args: e, pendingPromise: t }), setTimeout(i, a)),
              r
            );
          },
        };
      }
    },
    75684: function (e, t, n) {
      n.d(t, {
        P: function () {
          return r;
        },
      });
      let r = (e, t, n) =>
        JSON.stringify(
          e,
          (e, n) => {
            let r = "bigint" == typeof n ? n.toString() : n;
            return "function" == typeof t ? t(e, r) : r;
          },
          n
        );
    },
    31095: function (e, t, n) {
      n.d(t, {
        F: function () {
          return u;
        },
      });
      var r = n(9566),
        a = n(21997),
        o = n(11588),
        i = n(213),
        s = n(79173);
      function u(e) {
        let {
            account: t,
            gasPrice: n,
            maxFeePerGas: u,
            maxPriorityFeePerGas: c,
            to: l,
          } = e,
          d = t ? (0, r.T)(t) : void 0;
        if (d && !(0, s.U)(d.address)) throw new a.b({ address: d.address });
        if (l && !(0, s.U)(l)) throw new a.b({ address: l });
        if (void 0 !== n && (void 0 !== u || void 0 !== c)) throw new i.xY();
        if (u && u > 2n ** 256n - 1n) throw new o.Hh({ maxFeePerGas: u });
        if (c && u && c > u)
          throw new o.cs({ maxFeePerGas: u, maxPriorityFeePerGas: c });
      }
    },
  },
]);
