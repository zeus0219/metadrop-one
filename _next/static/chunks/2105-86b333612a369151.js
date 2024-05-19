"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2105],
  {
    15633: function (e, t, r) {
      r.d(t, {
        O: function () {
          return h;
        },
      });
      var n = r(40206),
        a = r(91354),
        i = r(824),
        s = r(86626),
        o = r(72205),
        c = r(98617),
        u = r(73600),
        l = r(96131),
        d = r(68490),
        f = r(93351),
        w = r(18158);
      async function h(
        e,
        {
          blockNumber: t,
          blockTag: r,
          coinType: h,
          name: p,
          gatewayUrls: g,
          strict: v,
          universalResolverAddress: m,
        }
      ) {
        let y = m;
        if (!y) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          y = (0, s.L)({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        try {
          let s = (0, i.R)({
              abi: n.X$,
              functionName: "addr",
              ...(null != h
                ? { args: [(0, l.V)(p), BigInt(h)] }
                : { args: [(0, l.V)(p)] }),
            }),
            u = {
              address: y,
              abi: n.k3,
              functionName: "resolve",
              args: [(0, c.NC)((0, d.T)(p)), s],
              blockNumber: t,
              blockTag: r,
            },
            v = (0, f.s)(e, w.L, "readContract"),
            m = g ? await v({ ...u, args: [...u.args, g] }) : await v(u);
          if ("0x" === m[0]) return null;
          let b = (0, a.k)({
            abi: n.X$,
            args: null != h ? [(0, l.V)(p), BigInt(h)] : void 0,
            functionName: "addr",
            data: m[0],
          });
          if ("0x" === b || "0x00" === (0, o.f)(b)) return null;
          return b;
        } catch (e) {
          if (v) throw e;
          if ((0, u.c)(e, "resolve")) return null;
          throw e;
        }
      }
    },
    77438: function (e, t, r) {
      r.d(t, {
        r: function () {
          return E;
        },
      });
      var n = r(18158),
        a = r(70778);
      class i extends a.G {
        constructor({ data: e }) {
          super(
            "Unable to extract image from metadata. The metadata may be malformed or invalid.",
            {
              metaMessages: [
                "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
                "",
                `Provided data: ${JSON.stringify(e)}`,
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "EnsAvatarInvalidMetadataError",
            });
        }
      }
      class s extends a.G {
        constructor({ reason: e }) {
          super(`ENS NFT avatar URI is invalid. ${e}`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "EnsAvatarInvalidNftUriError",
            });
        }
      }
      class o extends a.G {
        constructor({ uri: e }) {
          super(
            `Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "EnsAvatarUriResolutionError",
            });
        }
      }
      class c extends a.G {
        constructor({ namespace: e }) {
          super(
            `ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "EnsAvatarUnsupportedNamespaceError",
            });
        }
      }
      let u =
          /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
        l =
          /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
        d = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
        f = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
      async function w(e) {
        try {
          let t = await fetch(e, { method: "HEAD" });
          if (200 === t.status) {
            let e = t.headers.get("content-type");
            return e?.startsWith("image/");
          }
          return !1;
        } catch (t) {
          if (
            ("object" == typeof t && void 0 !== t.response) ||
            !globalThis.hasOwnProperty("Image")
          )
            return !1;
          return new Promise((t) => {
            let r = new Image();
            (r.onload = () => {
              t(!0);
            }),
              (r.onerror = () => {
                t(!1);
              }),
              (r.src = e);
          });
        }
      }
      function h(e, t) {
        return e ? (e.endsWith("/") ? e.slice(0, -1) : e) : t;
      }
      function p({ uri: e, gatewayUrls: t }) {
        let r = d.test(e);
        if (r) return { uri: e, isOnChain: !0, isEncoded: r };
        let n = h(t?.ipfs, "https://ipfs.io"),
          a = h(t?.arweave, "https://arweave.net"),
          i = e.match(u),
          {
            protocol: s,
            subpath: c,
            target: w,
            subtarget: p = "",
          } = i?.groups || {},
          g = "ipns:/" === s || "ipns/" === c,
          v = "ipfs:/" === s || "ipfs/" === c || l.test(e);
        if (e.startsWith("http") && !g && !v) {
          let r = e;
          return (
            t?.arweave && (r = e.replace(/https:\/\/arweave.net/g, t?.arweave)),
            { uri: r, isOnChain: !1, isEncoded: !1 }
          );
        }
        if ((g || v) && w)
          return {
            uri: `${n}/${g ? "ipns" : "ipfs"}/${w}${p}`,
            isOnChain: !1,
            isEncoded: !1,
          };
        if ("ar:/" === s && w)
          return { uri: `${a}/${w}${p || ""}`, isOnChain: !1, isEncoded: !1 };
        let m = e.replace(f, "");
        if (
          (m.startsWith("<svg") && (m = `data:image/svg+xml;base64,${btoa(m)}`),
          m.startsWith("data:") || m.startsWith("{"))
        )
          return { uri: m, isOnChain: !0, isEncoded: !1 };
        throw new o({ uri: e });
      }
      function g(e) {
        if (
          "object" != typeof e ||
          (!("image" in e) && !("image_url" in e) && !("image_data" in e))
        )
          throw new i({ data: e });
        return e.image || e.image_url || e.image_data;
      }
      async function v({ gatewayUrls: e, uri: t }) {
        try {
          let r = await fetch(t).then((e) => e.json());
          return await m({ gatewayUrls: e, uri: g(r) });
        } catch {
          throw new o({ uri: t });
        }
      }
      async function m({ gatewayUrls: e, uri: t }) {
        let { uri: r, isOnChain: n } = p({ uri: t, gatewayUrls: e });
        if (n || (await w(r))) return r;
        throw new o({ uri: t });
      }
      async function y(e, { nft: t }) {
        if ("erc721" === t.namespace)
          return (0, n.L)(e, {
            address: t.contractAddress,
            abi: [
              {
                name: "tokenURI",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "tokenId", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "tokenURI",
            args: [BigInt(t.tokenID)],
          });
        if ("erc1155" === t.namespace)
          return (0, n.L)(e, {
            address: t.contractAddress,
            abi: [
              {
                name: "uri",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "_id", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "uri",
            args: [BigInt(t.tokenID)],
          });
        throw new c({ namespace: t.namespace });
      }
      async function b(e, { gatewayUrls: t, record: r }) {
        return /eip155:/i.test(r)
          ? N(e, { gatewayUrls: t, record: r })
          : m({ uri: r, gatewayUrls: t });
      }
      async function N(e, { gatewayUrls: t, record: r }) {
        let n = (function (e) {
            let t = e;
            t.startsWith("did:nft:") &&
              (t = t.replace("did:nft:", "").replace(/_/g, "/"));
            let [r, n, a] = t.split("/"),
              [i, o] = r.split(":"),
              [c, u] = n.split(":");
            if (!i || "eip155" !== i.toLowerCase())
              throw new s({ reason: "Only EIP-155 supported" });
            if (!o) throw new s({ reason: "Chain ID not found" });
            if (!u) throw new s({ reason: "Contract address not found" });
            if (!a) throw new s({ reason: "Token ID not found" });
            if (!c) throw new s({ reason: "ERC namespace not found" });
            return {
              chainID: parseInt(o),
              namespace: c.toLowerCase(),
              contractAddress: u,
              tokenID: a,
            };
          })(r),
          {
            uri: a,
            isOnChain: i,
            isEncoded: o,
          } = p({ uri: await y(e, { nft: n }), gatewayUrls: t });
        if (
          i &&
          (a.includes("data:application/json;base64,") || a.startsWith("{"))
        )
          return m({
            uri: g(
              JSON.parse(
                o ? atob(a.replace("data:application/json;base64,", "")) : a
              )
            ),
            gatewayUrls: t,
          });
        let c = n.tokenID;
        return (
          "erc1155" === n.namespace &&
            (c = c.replace("0x", "").padStart(64, "0")),
          v({ gatewayUrls: t, uri: a.replace(/(?:0x)?{id}/, c) })
        );
      }
      var A = r(93351),
        C = r(12415);
      async function E(
        e,
        {
          blockNumber: t,
          blockTag: r,
          assetGatewayUrls: n,
          name: a,
          gatewayUrls: i,
          strict: s,
          universalResolverAddress: o,
        }
      ) {
        let c = await (0, A.s)(
          e,
          C.g,
          "getEnsText"
        )({
          blockNumber: t,
          blockTag: r,
          key: "avatar",
          name: a,
          universalResolverAddress: o,
          gatewayUrls: i,
          strict: s,
        });
        if (!c) return null;
        try {
          return await b(e, { record: c, gatewayUrls: n });
        } catch {
          return null;
        }
      }
    },
    79895: function (e, t, r) {
      r.d(t, {
        w: function () {
          return l;
        },
      });
      var n = r(40206),
        a = r(86626),
        i = r(98617),
        s = r(73600),
        o = r(68490),
        c = r(93351),
        u = r(18158);
      async function l(
        e,
        {
          address: t,
          blockNumber: r,
          blockTag: l,
          gatewayUrls: d,
          strict: f,
          universalResolverAddress: w,
        }
      ) {
        let h = w;
        if (!h) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          h = (0, a.L)({
            blockNumber: r,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        let p = `${t.toLowerCase().substring(2)}.addr.reverse`;
        try {
          let a = {
              address: h,
              abi: n.du,
              functionName: "reverse",
              args: [(0, i.NC)((0, o.T)(p))],
              blockNumber: r,
              blockTag: l,
            },
            s = (0, c.s)(e, u.L, "readContract"),
            [f, w] = d ? await s({ ...a, args: [...a.args, d] }) : await s(a);
          if (t.toLowerCase() !== w.toLowerCase()) return null;
          return f;
        } catch (e) {
          if (f) throw e;
          if ((0, s.c)(e, "reverse")) return null;
          throw e;
        }
      }
    },
    12415: function (e, t, r) {
      r.d(t, {
        g: function () {
          return w;
        },
      });
      var n = r(40206),
        a = r(91354),
        i = r(824),
        s = r(86626),
        o = r(98617),
        c = r(73600),
        u = r(96131),
        l = r(68490),
        d = r(93351),
        f = r(18158);
      async function w(
        e,
        {
          blockNumber: t,
          blockTag: r,
          name: w,
          key: h,
          gatewayUrls: p,
          strict: g,
          universalResolverAddress: v,
        }
      ) {
        let m = v;
        if (!m) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          m = (0, s.L)({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        try {
          let s = {
              address: m,
              abi: n.k3,
              functionName: "resolve",
              args: [
                (0, o.NC)((0, l.T)(w)),
                (0, i.R)({
                  abi: n.nZ,
                  functionName: "text",
                  args: [(0, u.V)(w), h],
                }),
              ],
              blockNumber: t,
              blockTag: r,
            },
            c = (0, d.s)(e, f.L, "readContract"),
            g = p ? await c({ ...s, args: [...s.args, p] }) : await c(s);
          if ("0x" === g[0]) return null;
          let v = (0, a.k)({ abi: n.nZ, functionName: "text", data: g[0] });
          return "" === v ? null : v;
        } catch (e) {
          if (g) throw e;
          if ((0, c.c)(e, "resolve")) return null;
          throw e;
        }
      }
    },
    85366: function (e, t, r) {
      r.d(t, {
        s: function () {
          return a;
        },
      });
      var n = r(98617);
      async function a(
        e,
        { address: t, blockNumber: r, blockTag: a = "latest" }
      ) {
        let i = r ? (0, n.eC)(r) : void 0;
        return BigInt(
          await e.request({ method: "eth_getBalance", params: [t, i || a] })
        );
      }
    },
    42529: function (e, t, r) {
      let n;
      r.d(t, {
        e: function () {
          return s;
        },
      });
      var a = r(9566);
      let i = 256;
      function s(e) {
        let {
            batch: t,
            cacheTime: r = e.pollingInterval ?? 4e3,
            key: s = "base",
            name: o = "Base Client",
            pollingInterval: c = 4e3,
            type: u = "base",
          } = e,
          l = e.chain,
          d = e.account ? (0, a.T)(e.account) : void 0,
          {
            config: f,
            request: w,
            value: h,
          } = e.transport({ chain: l, pollingInterval: c }),
          p = {
            account: d,
            batch: t,
            cacheTime: r,
            chain: l,
            key: s,
            name: o,
            pollingInterval: c,
            request: w,
            transport: { ...f, ...h },
            type: u,
            uid: (function (e = 11) {
              if (!n || i + e > 512) {
                (n = ""), (i = 0);
                for (let e = 0; e < 256; e++)
                  n += ((256 + 256 * Math.random()) | 0)
                    .toString(16)
                    .substring(1);
              }
              return n.substring(i, i++ + e);
            })(),
          };
        return Object.assign(p, {
          extend: (function e(t) {
            return (r) => {
              let n = r(t);
              for (let e in p) delete n[e];
              let a = { ...t, ...n };
              return Object.assign(a, { extend: e(a) });
            };
          })(p),
        });
      }
    },
    52887: function (e, t, r) {
      r.d(t, {
        q: function () {
          return o;
        },
      });
      var n = r(70778),
        a = r(47082),
        i = r(814),
        s = r(46297);
      function o(
        {
          key: e,
          name: t,
          request: r,
          retryCount: o = 3,
          retryDelay: c = 150,
          timeout: u,
          type: l,
        },
        d
      ) {
        return {
          config: {
            key: e,
            name: t,
            request: r,
            retryCount: o,
            retryDelay: c,
            timeout: u,
            type: l,
          },
          request: (function (e, t = {}) {
            return async (r, o = {}) => {
              let { retryDelay: c = 150, retryCount: u = 3 } = { ...t, ...o };
              return (0, s.J)(
                async () => {
                  try {
                    return await e(r);
                  } catch (e) {
                    switch (e.code) {
                      case i.s7.code:
                        throw new i.s7(e);
                      case i.B.code:
                        throw new i.B(e);
                      case i.LX.code:
                        throw new i.LX(e);
                      case i.nY.code:
                        throw new i.nY(e);
                      case i.XS.code:
                        throw new i.XS(e);
                      case i.yR.code:
                        throw new i.yR(e);
                      case i.Og.code:
                        throw new i.Og(e);
                      case i.pT.code:
                        throw new i.pT(e);
                      case i.KB.code:
                        throw new i.KB(e);
                      case i.gS.code:
                        throw new i.gS(e);
                      case i.Pv.code:
                        throw new i.Pv(e);
                      case i.GD.code:
                        throw new i.GD(e);
                      case i.ab.code:
                        throw new i.ab(e);
                      case i.PE.code:
                        throw new i.PE(e);
                      case i.Ts.code:
                        throw new i.Ts(e);
                      case i.u5.code:
                        throw new i.u5(e);
                      case i.I0.code:
                        throw new i.I0(e);
                      case i.x3.code:
                        throw new i.x3(e);
                      case 5e3:
                        throw new i.ab(e);
                      default:
                        if (e instanceof n.G) throw e;
                        throw new i.ir(e);
                    }
                  }
                },
                {
                  delay: ({ count: e, error: t }) => {
                    if (t && t instanceof a.Gg) {
                      let e = t?.headers?.get("Retry-After");
                      if (e?.match(/\d/)) return 1e3 * parseInt(e);
                    }
                    return ~~(1 << e) * c;
                  },
                  retryCount: u,
                  shouldRetry: ({ error: e }) =>
                    "code" in e && "number" == typeof e.code
                      ? -1 === e.code ||
                        e.code === i.Pv.code ||
                        e.code === i.XS.code
                      : !(e instanceof a.Gg) ||
                        !e.status ||
                        403 === e.status ||
                        408 === e.status ||
                        413 === e.status ||
                        429 === e.status ||
                        500 === e.status ||
                        502 === e.status ||
                        503 === e.status ||
                        504 === e.status,
                }
              );
            };
          })(r, { retryCount: o, retryDelay: c }),
          value: d,
        };
      }
    },
    32013: function (e, t, r) {
      r.d(t, {
        d: function () {
          return d;
        },
      });
      var n = r(47082),
        a = r(70778);
      class i extends a.G {
        constructor() {
          super(
            "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
            { docsPath: "/docs/clients/intro" }
          );
        }
      }
      var s = r(20564),
        o = r(46973),
        c = r(75684);
      let u = {
        current: 0,
        take() {
          return this.current++;
        },
        reset() {
          this.current = 0;
        },
      };
      var l = r(52887);
      function d(e, t = {}) {
        let {
          batch: r,
          fetchOptions: a,
          key: d = "http",
          name: f = "HTTP JSON-RPC",
          retryDelay: w,
        } = t;
        return ({ chain: h, retryCount: p, timeout: g }) => {
          let { batchSize: v = 1e3, wait: m = 0 } =
              "object" == typeof r ? r : {},
            y = t.retryCount ?? p,
            b = g ?? t.timeout ?? 1e4,
            N = e || h?.rpcUrls.default.http[0];
          if (!N) throw new i();
          let A = (function (e, t = {}) {
            return {
              async request(r) {
                let {
                    body: a,
                    fetchOptions: i = {},
                    timeout: s = t.timeout ?? 1e4,
                  } = r,
                  {
                    headers: l,
                    method: d,
                    signal: f,
                  } = { ...t.fetchOptions, ...i };
                try {
                  let t;
                  let r = await (0, o.F)(
                    async ({ signal: t }) =>
                      await fetch(e, {
                        ...i,
                        body: Array.isArray(a)
                          ? (0, c.P)(
                              a.map((e) => ({
                                jsonrpc: "2.0",
                                id: e.id ?? u.take(),
                                ...e,
                              }))
                            )
                          : (0, c.P)({
                              jsonrpc: "2.0",
                              id: a.id ?? u.take(),
                              ...a,
                            }),
                        headers: { ...l, "Content-Type": "application/json" },
                        method: d || "POST",
                        signal: f || (s > 0 ? t : void 0),
                      }),
                    {
                      errorInstance: new n.W5({ body: a, url: e }),
                      timeout: s,
                      signal: !0,
                    }
                  );
                  if (
                    ((t = r.headers
                      .get("Content-Type")
                      ?.startsWith("application/json")
                      ? await r.json()
                      : await r.text()),
                    !r.ok)
                  )
                    throw new n.Gg({
                      body: a,
                      details: (0, c.P)(t.error) || r.statusText,
                      headers: r.headers,
                      status: r.status,
                      url: e,
                    });
                  return t;
                } catch (t) {
                  if (t instanceof n.Gg || t instanceof n.W5) throw t;
                  throw new n.Gg({ body: a, details: t.message, url: e });
                }
              },
            };
          })(N, { fetchOptions: a, timeout: b });
          return (0, l.q)(
            {
              key: d,
              name: f,
              async request({ method: t, params: a }) {
                let i = { method: t, params: a },
                  { schedule: o } = (0, s.S)({
                    id: `${e}`,
                    wait: m,
                    shouldSplitBatch: (e) => e.length > v,
                    fn: (e) => A.request({ body: e }),
                    sort: (e, t) => e.id - t.id,
                  }),
                  c = async (e) => (r ? o(e) : [await A.request({ body: e })]),
                  [{ error: u, result: l }] = await c(i);
                if (u) throw new n.bs({ body: i, error: u, url: N });
                return l;
              },
              retryCount: y,
              retryDelay: w,
              timeout: b,
              type: "http",
            },
            { fetchOptions: a, url: N }
          );
        };
      }
    },
    93676: function (e, t, r) {
      r.d(t, {
        i: function () {
          return a;
        },
      });
      var n = r(82701);
      function a(e) {
        if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]"))
          return null;
        let t = `0x${e.slice(1, 65)}`;
        return (0, n.v)(t) ? t : null;
      }
    },
    73600: function (e, t, r) {
      r.d(t, {
        c: function () {
          return s;
        },
      });
      var n = r(55237),
        a = r(70778),
        i = r(63759);
      function s(e, t) {
        if (!(e instanceof a.G)) return !1;
        let r = e.walk((e) => e instanceof i.Lu);
        return (
          r instanceof i.Lu &&
          (!!(
            r.data?.errorName === "ResolverNotFound" ||
            r.data?.errorName === "ResolverWildcardNotSupported" ||
            r.data?.errorName === "ResolverNotContract" ||
            r.data?.errorName === "ResolverError" ||
            r.data?.errorName === "HttpError" ||
            r.reason?.includes(
              "Wildcard on non-extended resolvers is not supported"
            )
          ) ||
            ("reverse" === t && r.reason === n.$[50]))
        );
      }
    },
    96131: function (e, t, r) {
      r.d(t, {
        V: function () {
          return c;
        },
      });
      var n = r(42196),
        a = r(52796),
        i = r(98617),
        s = r(66616),
        o = r(93676);
      function c(e) {
        let t = new Uint8Array(32).fill(0);
        if (!e) return (0, i.ci)(t);
        let r = e.split(".");
        for (let e = r.length - 1; e >= 0; e -= 1) {
          let i = (0, o.i)(r[e]),
            c = i ? (0, a.O0)(i) : (0, s.w)((0, a.qX)(r[e]), "bytes");
          t = (0, s.w)((0, n.zo)([t, c]), "bytes");
        }
        return (0, i.ci)(t);
      }
    },
    68490: function (e, t, r) {
      r.d(t, {
        T: function () {
          return o;
        },
      });
      var n = r(52796),
        a = r(98617),
        i = r(66616),
        s = r(93676);
      function o(e) {
        let t = e.replace(/^\.|\.$/gm, "");
        if (0 === t.length) return new Uint8Array(1);
        let r = new Uint8Array((0, n.qX)(t).byteLength + 2),
          o = 0,
          c = t.split(".");
        for (let e = 0; e < c.length; e++) {
          let t = (0, n.qX)(c[e]);
          if (t.byteLength > 255) {
            var u;
            t = (0, n.qX)(
              ((u = (function (e) {
                let t = new Uint8Array(32).fill(0);
                return e ? (0, s.i)(e) || (0, i.w)((0, n.qX)(e)) : (0, a.ci)(t);
              })(c[e])),
              `[${u.slice(2)}]`)
            );
          }
          (r[o] = t.length), r.set(t, o + 1), (o += t.length + 1);
        }
        return r.byteLength !== o + 1 ? r.slice(0, o + 1) : r;
      }
    },
    46297: function (e, t, r) {
      r.d(t, {
        J: function () {
          return a;
        },
      });
      var n = r(91389);
      function a(
        e,
        { delay: t = 100, retryCount: r = 2, shouldRetry: a = () => !0 } = {}
      ) {
        return new Promise((i, s) => {
          let o = async ({ count: c = 0 } = {}) => {
            let u = async ({ error: e }) => {
              let r = "function" == typeof t ? t({ count: c, error: e }) : t;
              r && (await (0, n.D)(r)), o({ count: c + 1 });
            };
            try {
              let t = await e();
              i(t);
            } catch (e) {
              if (c < r && (await a({ count: c, error: e })))
                return u({ error: e });
              s(e);
            }
          };
          o();
        });
      }
    },
    46973: function (e, t, r) {
      r.d(t, {
        F: function () {
          return n;
        },
      });
      function n(
        e,
        { errorInstance: t = Error("timed out"), timeout: r, signal: n }
      ) {
        return new Promise((a, i) => {
          (async () => {
            let s;
            try {
              let o = new AbortController();
              r > 0 &&
                (s = setTimeout(() => {
                  n ? o.abort() : i(t);
                }, r)),
                a(await e({ signal: o?.signal }));
            } catch (e) {
              "AbortError" === e.name && i(t), i(e);
            } finally {
              clearTimeout(s);
            }
          })();
        });
      }
    },
  },
]);
