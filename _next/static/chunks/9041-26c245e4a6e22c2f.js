"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9041],
  {
    67635: function (e, t, n) {
      /**
       * @license React
       * use-sync-external-store-shim/with-selector.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = n(15039),
        i = n(94348),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        a = i.useSyncExternalStore,
        c = r.useRef,
        s = r.useEffect,
        u = r.useMemo,
        l = r.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
        var d = c(null);
        if (null === d.current) {
          var f = { hasValue: !1, value: null };
          d.current = f;
        } else f = d.current;
        var h = a(
          e,
          (d = u(
            function () {
              function e(e) {
                if (!s) {
                  if (
                    ((s = !0), (a = e), (e = r(e)), void 0 !== i && f.hasValue)
                  ) {
                    var t = f.value;
                    if (i(t, e)) return (c = t);
                  }
                  return (c = e);
                }
                if (((t = c), o(a, e))) return t;
                var n = r(e);
                return void 0 !== i && i(t, n) ? t : ((a = e), (c = n));
              }
              var a,
                c,
                s = !1,
                u = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === u
                  ? void 0
                  : function () {
                      return e(u());
                    },
              ];
            },
            [t, n, r, i]
          ))[0],
          d[1]
        );
        return (
          s(
            function () {
              (f.hasValue = !0), (f.value = h);
            },
            [h]
          ),
          l(h),
          h
        );
      };
    },
    52635: function (e, t, n) {
      e.exports = n(67635);
    },
    71915: function (e, t, n) {
      n.d(t, {
        D: function () {
          return r;
        },
      });
      function r(e) {
        let t = e.state.current,
          n = e.state.connections.get(t),
          r = n?.accounts,
          i = r?.[0],
          o = e.chains.find((e) => e.id === n?.chainId),
          a = e.state.status;
        switch (a) {
          case "connected":
            return {
              address: i,
              addresses: r,
              chain: o,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !0,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !1,
              status: a,
            };
          case "reconnecting":
            return {
              address: i,
              addresses: r,
              chain: o,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !!i,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !0,
              status: a,
            };
          case "connecting":
            return {
              address: i,
              addresses: r,
              chain: o,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !1,
              isConnecting: !0,
              isDisconnected: !1,
              isReconnecting: !1,
              status: a,
            };
          case "disconnected":
            return {
              address: void 0,
              addresses: void 0,
              chain: void 0,
              chainId: void 0,
              connector: void 0,
              isConnected: !1,
              isConnecting: !1,
              isDisconnected: !0,
              isReconnecting: !1,
              status: a,
            };
        }
      }
    },
    60745: function (e, t, n) {
      n.d(t, {
        u: function () {
          return o;
        },
      });
      var r = n(15950),
        i = n(71915);
      function o(e, t) {
        let { onChange: n } = t;
        return e.subscribe(() => (0, i.D)(e), n, {
          equalityFn(e, t) {
            let { connector: n, ...i } = e,
              { connector: o, ...a } = t;
            return (0, r.v)(i, a) && n?.id === o?.id && n?.uid === o?.uid;
          },
        });
      }
    },
    60045: function (e, t, n) {
      n.d(t, {
        G: function () {
          return s;
        },
      });
      var r,
        i,
        o = n(79750);
      let a = () => `@wagmi/core@${o.i}`;
      var c = function (e, t, n, r) {
        if ("a" === n && !r)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      };
      class s extends Error {
        get docsBaseUrl() {
          return "https://wagmi.sh/core";
        }
        get version() {
          return a();
        }
        constructor(e, t = {}) {
          super(),
            r.add(this),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiCoreError",
            });
          let n =
              t.cause instanceof s
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            i = (t.cause instanceof s && t.cause.docsPath) || t.docsPath;
          (this.message = [
            e || "An error occurred.",
            "",
            ...(t.metaMessages ? [...t.metaMessages, ""] : []),
            ...(i
              ? [
                  `Docs: ${this.docsBaseUrl}${i}.html${
                    t.docsSlug ? `#${t.docsSlug}` : ""
                  }`,
                ]
              : []),
            ...(n ? [`Details: ${n}`] : []),
            `Version: ${this.version}`,
          ].join("\n")),
            t.cause && (this.cause = t.cause),
            (this.details = n),
            (this.docsPath = i),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
        walk(e) {
          return c(this, r, "m", i).call(this, this, e);
        }
      }
      (r = new WeakSet()),
        (i = function e(t, n) {
          return n?.(t)
            ? t
            : t.cause
            ? c(this, r, "m", e).call(this, t.cause, n)
            : t;
        });
    },
    15950: function (e, t, n) {
      n.d(t, {
        v: function () {
          return function e(t, n) {
            if (t === n) return !0;
            if (t && n && "object" == typeof t && "object" == typeof n) {
              let r, i;
              if (t.constructor !== n.constructor) return !1;
              if (Array.isArray(t) && Array.isArray(n)) {
                if ((r = t.length) !== n.length) return !1;
                for (i = r; 0 != i--; ) if (!e(t[i], n[i])) return !1;
                return !0;
              }
              if (t.valueOf !== Object.prototype.valueOf)
                return t.valueOf() === n.valueOf();
              if (t.toString !== Object.prototype.toString)
                return t.toString() === n.toString();
              let o = Object.keys(t);
              if ((r = o.length) !== Object.keys(n).length) return !1;
              for (i = r; 0 != i--; )
                if (!Object.prototype.hasOwnProperty.call(n, o[i])) return !1;
              for (i = r; 0 != i--; ) {
                let r = o[i];
                if (r && !e(t[r], n[r])) return !1;
              }
              return !0;
            }
            return t != t && n != n;
          };
        },
      });
    },
    79750: function (e, t, n) {
      n.d(t, {
        i: function () {
          return r;
        },
      });
      let r = "2.6.5";
    },
    18007: function (e, t, n) {
      n.d(t, {
        CI: function () {
          return A;
        },
        FM: function () {
          return b;
        },
        Gy: function () {
          return x;
        },
        KY: function () {
          return w;
        },
        M4: function () {
          return d;
        },
        MX: function () {
          return y;
        },
        S4: function () {
          return v;
        },
        SM: function () {
          return P;
        },
        cO: function () {
          return c;
        },
        dh: function () {
          return $;
        },
        fM: function () {
          return a;
        },
        fs: function () {
          return f;
        },
        gr: function () {
          return l;
        },
        hn: function () {
          return O;
        },
        lC: function () {
          return p;
        },
        mv: function () {
          return g;
        },
        wM: function () {
          return j;
        },
        wb: function () {
          return u;
        },
        xB: function () {
          return s;
        },
        xL: function () {
          return m;
        },
        yP: function () {
          return h;
        },
      });
      var r = n(615),
        i = n(36338),
        o = n(70778);
      class a extends o.G {
        constructor({ docsPath: e }) {
          super(
            "A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",
            { docsPath: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiConstructorNotFoundError",
            });
        }
      }
      class c extends o.G {
        constructor({ docsPath: e }) {
          super(
            "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
            { docsPath: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiConstructorParamsNotFoundError",
            });
        }
      }
      class s extends o.G {
        constructor({ data: e, params: t, size: n }) {
          super(`Data size of ${n} bytes is too small for given parameters.`, {
            metaMessages: [
              `Params: (${(0, r.h)(t, { includeName: !0 })})`,
              `Data:   ${e} (${n} bytes)`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiDecodingDataSizeTooSmallError",
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e),
            (this.params = t),
            (this.size = n);
        }
      }
      class u extends o.G {
        constructor() {
          super('Cannot decode zero data ("0x") with ABI parameters.'),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiDecodingZeroDataError",
            });
        }
      }
      class l extends o.G {
        constructor({ expectedLength: e, givenLength: t, type: n }) {
          super(`ABI encoding array length mismatch for type ${n}.
Expected length: ${e}
Given length: ${t}`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiEncodingArrayLengthMismatchError",
            });
        }
      }
      class d extends o.G {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${(0, i.d)(
              t
            )}) does not match expected size (bytes${e}).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiEncodingBytesSizeMismatchError",
            });
        }
      }
      class f extends o.G {
        constructor({ expectedLength: e, givenLength: t }) {
          super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiEncodingLengthMismatchError",
            });
        }
      }
      class h extends o.G {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiErrorSignatureNotFoundError",
            }),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.signature = e);
        }
      }
      class b extends o.G {
        constructor({ docsPath: e }) {
          super("Cannot extract event signature from empty topics.", {
            docsPath: e,
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiEventSignatureEmptyTopicsError",
            });
        }
      }
      class p extends o.G {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiEventSignatureNotFoundError",
            });
        }
      }
      class g extends o.G {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Event ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,
            { docsPath: t }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiEventNotFoundError",
            });
        }
      }
      class m extends o.G {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Function ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiFunctionNotFoundError",
            });
        }
      }
      class y extends o.G {
        constructor(e, { docsPath: t }) {
          super(
            `Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiFunctionOutputsNotFoundError",
            });
        }
      }
      class v extends o.G {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [
              `\`${e.type}\` in \`${(0, r.t)(e.abiItem)}\`, and`,
              `\`${t.type}\` in \`${(0, r.t)(t.abiItem)}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItemAmbiguityError",
            });
        }
      }
      class w extends o.G {
        constructor({ expectedSize: e, givenSize: t }) {
          super(`Expected bytes${e}, got bytes${t}.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BytesSizeMismatchError",
            });
        }
      }
      class P extends o.G {
        constructor({ abiItem: e, data: t, params: n, size: i }) {
          super(
            `Data size of ${i} bytes is too small for non-indexed event parameters.`,
            {
              metaMessages: [
                `Params: (${(0, r.h)(n, { includeName: !0 })})`,
                `Data:   ${t} (${i} bytes)`,
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "DecodeLogDataMismatch",
            }),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e),
            (this.data = t),
            (this.params = n),
            (this.size = i);
        }
      }
      class x extends o.G {
        constructor({ abiItem: e, param: t }) {
          super(
            `Expected a topic for indexed event parameter${
              t.name ? ` "${t.name}"` : ""
            } on event "${(0, r.t)(e, { includeName: !0 })}".`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "DecodeLogTopicsMismatch",
            }),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e);
        }
      }
      class $ extends o.G {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,
            { docsPath: t }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiEncodingType",
            });
        }
      }
      class A extends o.G {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,
            { docsPath: t }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiDecodingType",
            });
        }
      }
      class O extends o.G {
        constructor(e) {
          super(`Value "${e}" is not a valid array.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidArrayError",
            });
        }
      }
      class j extends o.G {
        constructor(e) {
          super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidDefinitionTypeError",
            });
        }
      }
    },
    68882: function (e, t, n) {
      n.d(t, {
        E: function () {
          return d;
        },
        S: function () {
          return h;
        },
      });
      var r = n(18007),
        i = n(21997),
        o = n(79173),
        a = n(42196),
        c = n(68975),
        s = n(36338),
        u = n(86422),
        l = n(98617);
      function d(e, t) {
        if (e.length !== t.length)
          throw new r.fs({ expectedLength: e.length, givenLength: t.length });
        let n = f(
          (function ({ params: e, values: t }) {
            let n = [];
            for (let d = 0; d < e.length; d++)
              n.push(
                (function e({ param: t, value: n }) {
                  let d = h(t.type);
                  if (d) {
                    let [i, o] = d;
                    return (function (t, { length: n, param: i }) {
                      let o = null === n;
                      if (!Array.isArray(t)) throw new r.hn(t);
                      if (!o && t.length !== n)
                        throw new r.gr({
                          expectedLength: n,
                          givenLength: t.length,
                          type: `${i.type}[${n}]`,
                        });
                      let c = !1,
                        s = [];
                      for (let n = 0; n < t.length; n++) {
                        let r = e({ param: i, value: t[n] });
                        r.dynamic && (c = !0), s.push(r);
                      }
                      if (o || c) {
                        let e = f(s);
                        if (o) {
                          let t = (0, l.eC)(s.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: s.length > 0 ? (0, a.zo)([t, e]) : t,
                          };
                        }
                        if (c) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, a.zo)(s.map(({ encoded: e }) => e)),
                      };
                    })(n, { length: i, param: { ...t, type: o } });
                  }
                  if ("tuple" === t.type)
                    return (function (t, { param: n }) {
                      let r = !1,
                        i = [];
                      for (let o = 0; o < n.components.length; o++) {
                        let a = n.components[o],
                          c = Array.isArray(t) ? o : a.name,
                          s = e({ param: a, value: t[c] });
                        i.push(s), s.dynamic && (r = !0);
                      }
                      return {
                        dynamic: r,
                        encoded: r
                          ? f(i)
                          : (0, a.zo)(i.map(({ encoded: e }) => e)),
                      };
                    })(n, { param: t });
                  if ("address" === t.type)
                    return (function (e) {
                      if (!(0, o.U)(e)) throw new i.b({ address: e });
                      return {
                        dynamic: !1,
                        encoded: (0, c.gc)(e.toLowerCase()),
                      };
                    })(n);
                  if ("bool" === t.type)
                    return { dynamic: !1, encoded: (0, c.gc)((0, l.C4)(n)) };
                  if (t.type.startsWith("uint") || t.type.startsWith("int"))
                    return (function (e, { signed: t }) {
                      return {
                        dynamic: !1,
                        encoded: (0, l.eC)(e, { size: 32, signed: t }),
                      };
                    })(n, { signed: t.type.startsWith("int") });
                  if (t.type.startsWith("bytes"))
                    return (function (e, { param: t }) {
                      let [, n] = t.type.split("bytes"),
                        i = (0, s.d)(e);
                      if (!n) {
                        let t = e;
                        return (
                          i % 32 != 0 &&
                            (t = (0, c.gc)(t, {
                              dir: "right",
                              size: 32 * Math.ceil((e.length - 2) / 2 / 32),
                            })),
                          {
                            dynamic: !0,
                            encoded: (0, a.zo)([
                              (0, c.gc)((0, l.eC)(i, { size: 32 })),
                              t,
                            ]),
                          }
                        );
                      }
                      if (i !== parseInt(n))
                        throw new r.M4({ expectedSize: parseInt(n), value: e });
                      return {
                        dynamic: !1,
                        encoded: (0, c.gc)(e, { dir: "right" }),
                      };
                    })(n, { param: t });
                  if ("string" === t.type)
                    return (function (e) {
                      let t = (0, l.$G)(e),
                        n = Math.ceil((0, s.d)(t) / 32),
                        r = [];
                      for (let e = 0; e < n; e++)
                        r.push(
                          (0, c.gc)((0, u.tP)(t, 32 * e, (e + 1) * 32), {
                            dir: "right",
                          })
                        );
                      return {
                        dynamic: !0,
                        encoded: (0, a.zo)([
                          (0, c.gc)((0, l.eC)((0, s.d)(t), { size: 32 })),
                          ...r,
                        ]),
                      };
                    })(n);
                  throw new r.dh(t.type, {
                    docsPath: "/docs/contract/encodeAbiParameters",
                  });
                })({ param: e[d], value: t[d] })
              );
            return n;
          })({ params: e, values: t })
        );
        return 0 === n.length ? "0x" : n;
      }
      function f(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let { dynamic: r, encoded: i } = e[n];
          r ? (t += 32) : (t += (0, s.d)(i));
        }
        let n = [],
          r = [],
          i = 0;
        for (let o = 0; o < e.length; o++) {
          let { dynamic: a, encoded: c } = e[o];
          a
            ? (n.push((0, l.eC)(t + i, { size: 32 })),
              r.push(c),
              (i += (0, s.d)(c)))
            : n.push(c);
        }
        return (0, a.zo)([...n, ...r]);
      }
      function h(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
    },
    615: function (e, t, n) {
      n.d(t, {
        h: function () {
          return o;
        },
        t: function () {
          return i;
        },
      });
      var r = n(18007);
      function i(e, { includeName: t = !1 } = {}) {
        if ("function" !== e.type && "event" !== e.type && "error" !== e.type)
          throw new r.wM(e.type);
        return `${e.name}(${o(e.inputs, { includeName: t })})`;
      }
      function o(e, { includeName: t = !1 } = {}) {
        return e
          ? e
              .map((e) =>
                (function (e, { includeName: t }) {
                  return e.type.startsWith("tuple")
                    ? `(${o(e.components, { includeName: t })})${e.type.slice(
                        5
                      )}`
                    : e.type + (t && e.name ? ` ${e.name}` : "");
                })(e, { includeName: t })
              )
              .join(t ? ", " : ",")
          : "";
      }
    },
    86422: function (e, t, n) {
      n.d(t, {
        T4: function () {
          return u;
        },
        tP: function () {
          return a;
        },
      });
      var r = n(93790),
        i = n(82701),
        o = n(36338);
      function a(e, t, n, { strict: r } = {}) {
        return (0, i.v)(e, { strict: !1 })
          ? (function (e, t, n, { strict: r } = {}) {
              c(e, t);
              let i = `0x${e
                .replace("0x", "")
                .slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
              return r && s(i, t, n), i;
            })(e, t, n, { strict: r })
          : u(e, t, n, { strict: r });
      }
      function c(e, t) {
        if ("number" == typeof t && t > 0 && t > (0, o.d)(e) - 1)
          throw new r.mV({ offset: t, position: "start", size: (0, o.d)(e) });
      }
      function s(e, t, n) {
        if (
          "number" == typeof t &&
          "number" == typeof n &&
          (0, o.d)(e) !== n - t
        )
          throw new r.mV({ offset: n, position: "end", size: (0, o.d)(e) });
      }
      function u(e, t, n, { strict: r } = {}) {
        c(e, t);
        let i = e.slice(t, n);
        return r && s(i, t, n), i;
      }
    },
    36602: function (e, t, n) {
      n.d(t, {
        V: function () {
          return c;
        },
        F: function () {
          return s;
        },
      });
      var r = n(15039);
      let i = !1;
      async function o(e, t = {}) {
        let n;
        if (i) return [];
        (i = !0),
          e.setState((e) => ({
            ...e,
            status: e.current ? "reconnecting" : "connecting",
          }));
        let r = [];
        if (t.connectors?.length)
          for (let n of t.connectors) {
            let t;
            (t = "function" == typeof n ? e._internal.connectors.setup(n) : n),
              r.push(t);
          }
        else r.push(...e.connectors);
        try {
          n = await e.storage?.getItem("recentConnectorId");
        } catch {}
        let o = {};
        for (let [, t] of e.state.connections) o[t.connector.id] = 1;
        n && (o[n] = 0);
        let a =
            Object.keys(o).length > 0
              ? [...r].sort((e, t) => (o[e.id] ?? 10) - (o[t.id] ?? 10))
              : r,
          c = !1,
          s = [],
          u = [];
        for (let t of a) {
          let n = await t.getProvider();
          if (!n || u.some((e) => e === n) || !(await t.isAuthorized()))
            continue;
          let r = await t.connect({ isReconnecting: !0 }).catch(() => null);
          r &&
            (t.emitter.off("connect", e._internal.events.connect),
            t.emitter.on("change", e._internal.events.change),
            t.emitter.on("disconnect", e._internal.events.disconnect),
            e.setState((e) => {
              let n = new Map(c ? e.connections : new Map()).set(t.uid, {
                accounts: r.accounts,
                chainId: r.chainId,
                connector: t,
              });
              return { ...e, current: c ? e.current : t.uid, connections: n };
            }),
            s.push({ accounts: r.accounts, chainId: r.chainId, connector: t }),
            u.push(n),
            (c = !0));
        }
        return (
          c
            ? e.setState((e) => ({ ...e, status: "connected" }))
            : e.setState((e) => ({
                ...e,
                connections: new Map(),
                current: void 0,
                status: "disconnected",
              })),
          (i = !1),
          s
        );
      }
      function a(e) {
        let {
            children: t,
            config: n,
            initialState: i,
            reconnectOnMount: a = !0,
          } = e,
          { onMount: c } = (function (e, t) {
            let { initialState: n, reconnectOnMount: r } = t;
            return (
              n &&
                e.setState({
                  ...n,
                  connections: r ? n.connections : new Map(),
                  status: r ? "reconnecting" : "disconnected",
                }),
              {
                async onMount() {
                  if (e._internal.ssr) {
                    await e._internal.store.persist.rehydrate();
                    let t = e._internal.mipd
                      ?.getProviders()
                      .map(e._internal.connectors.providerDetailToConnector)
                      .map(e._internal.connectors.setup);
                    e._internal.connectors.setState((e) => [
                      ...e,
                      ...(t ?? []),
                    ]);
                  }
                  r
                    ? o(e)
                    : e.storage &&
                      e.setState((e) => ({ ...e, connections: new Map() }));
                },
              }
            );
          })(n, { initialState: i, reconnectOnMount: a });
        n._internal.ssr || c();
        let s = (0, r.useRef)(!0);
        return (
          (0, r.useEffect)(() => {
            if (s.current && n._internal.ssr)
              return (
                c(),
                () => {
                  s.current = !1;
                }
              );
          }, []),
          t
        );
      }
      let c = (0, r.createContext)(void 0);
      function s(e) {
        let { children: t, config: n } = e;
        return (0, r.createElement)(
          a,
          e,
          (0, r.createElement)(c.Provider, { value: n }, t)
        );
      }
    },
    91818: function (e, t, n) {
      n.d(t, {
        m: function () {
          return l;
        },
      });
      var r = n(60745),
        i = n(71915),
        o = n(8979),
        a = n(15950),
        c = n(15039),
        s = n(52635);
      let u = (e) => "object" == typeof e && !Array.isArray(e);
      function l(e = {}) {
        let t = (0, o.Z)(e);
        return (function (e, t, n = t, r = a.v) {
          let i = (0, c.useRef)([]),
            o = (0, s.useSyncExternalStoreWithSelector)(
              e,
              t,
              n,
              (e) => e,
              (e, t) => {
                if (u(e) && u(t) && i.current.length) {
                  for (let n of i.current) if (!r(e[n], t[n])) return !1;
                  return !0;
                }
                return r(e, t);
              }
            );
          if (u(o)) {
            let e = { ...o };
            return (
              Object.defineProperties(
                e,
                Object.entries(e).reduce(
                  (e, [t, n]) => ({
                    ...e,
                    [t]: {
                      configurable: !1,
                      enumerable: !0,
                      get: () => (
                        i.current.includes(t) || i.current.push(t), n
                      ),
                    },
                  }),
                  {}
                )
              ),
              e
            );
          }
          return o;
        })(
          (e) => (0, r.u)(t, { onChange: e }),
          () => (0, i.D)(t)
        );
      }
    },
    8979: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(15039),
        i = n(36602),
        o = n(60045);
      let a = () => "wagmi@2.5.7";
      class c extends o.G {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiError",
            });
        }
        get docsBaseUrl() {
          return "https://wagmi.sh/react";
        }
        get version() {
          return a();
        }
      }
      class s extends c {
        constructor() {
          super("`useConfig` must be used within `WagmiProvider`.", {
            docsPath: "https://wagmi.sh/react/api/WagmiProvider",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiProviderNotFoundError",
            });
        }
      }
      function u(e = {}) {
        let t = e.config ?? (0, r.useContext)(i.V);
        if (!t) throw new s();
        return t;
      }
    },
  },
]);
