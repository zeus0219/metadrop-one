(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9745],
  {
    35842: function (e, t, n) {
      var r = n(26182);
      n(46808);
      var i = n(15039),
        s = i && "object" == typeof i && "default" in i ? i : { default: i };
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var a = void 0 !== r && r.env && !0,
        u = function (e) {
          return "[object String]" === Object.prototype.toString.call(e);
        },
        c = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              n = t.name,
              r = void 0 === n ? "stylesheet" : n,
              i = t.optimizeForSpeed,
              s = void 0 === i ? a : i;
            l(u(r), "`name` must be a string"),
              (this._name = r),
              (this._deletedRulePlaceholder = "#" + r + "-deleted-rule____{}"),
              l("boolean" == typeof s, "`optimizeForSpeed` must be a boolean"),
              (this._optimizeForSpeed = s),
              (this._serverSheet = void 0),
              (this._tags = []),
              (this._injected = !1),
              (this._rulesCount = 0);
            var o = document.querySelector('meta[property="csp-nonce"]');
            this._nonce = o ? o.getAttribute("content") : null;
          }
          var t,
            n = e.prototype;
          return (
            (n.setOptimizeForSpeed = function (e) {
              l(
                "boolean" == typeof e,
                "`setOptimizeForSpeed` accepts a boolean"
              ),
                l(
                  0 === this._rulesCount,
                  "optimizeForSpeed cannot be when rules have already been inserted"
                ),
                this.flush(),
                (this._optimizeForSpeed = e),
                this.inject();
            }),
            (n.isOptimizeForSpeed = function () {
              return this._optimizeForSpeed;
            }),
            (n.inject = function () {
              var e = this;
              if (
                (l(!this._injected, "sheet already injected"),
                (this._injected = !0),
                this._optimizeForSpeed)
              ) {
                (this._tags[0] = this.makeStyleTag(this._name)),
                  (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                  this._optimizeForSpeed ||
                    (a ||
                      console.warn(
                        "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                      ),
                    this.flush(),
                    (this._injected = !0));
                return;
              }
              this._serverSheet = {
                cssRules: [],
                insertRule: function (t, n) {
                  return (
                    "number" == typeof n
                      ? (e._serverSheet.cssRules[n] = { cssText: t })
                      : e._serverSheet.cssRules.push({ cssText: t }),
                    n
                  );
                },
                deleteRule: function (t) {
                  e._serverSheet.cssRules[t] = null;
                },
              };
            }),
            (n.getSheetForTag = function (e) {
              if (e.sheet) return e.sheet;
              for (var t = 0; t < document.styleSheets.length; t++)
                if (document.styleSheets[t].ownerNode === e)
                  return document.styleSheets[t];
            }),
            (n.getSheet = function () {
              return this.getSheetForTag(this._tags[this._tags.length - 1]);
            }),
            (n.insertRule = function (e, t) {
              if (
                (l(u(e), "`insertRule` accepts only strings"),
                this._optimizeForSpeed)
              ) {
                var n = this.getSheet();
                "number" != typeof t && (t = n.cssRules.length);
                try {
                  n.insertRule(e, t);
                } catch (t) {
                  return (
                    a ||
                      console.warn(
                        "StyleSheet: illegal rule: \n\n" +
                          e +
                          "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                      ),
                    -1
                  );
                }
              } else {
                var r = this._tags[t];
                this._tags.push(this.makeStyleTag(this._name, e, r));
              }
              return this._rulesCount++;
            }),
            (n.replaceRule = function (e, t) {
              if (this._optimizeForSpeed) {
                var n = this.getSheet();
                if (
                  (t.trim() || (t = this._deletedRulePlaceholder),
                  !n.cssRules[e])
                )
                  return e;
                n.deleteRule(e);
                try {
                  n.insertRule(t, e);
                } catch (r) {
                  a ||
                    console.warn(
                      "StyleSheet: illegal rule: \n\n" +
                        t +
                        "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                    ),
                    n.insertRule(this._deletedRulePlaceholder, e);
                }
              } else {
                var r = this._tags[e];
                l(r, "old rule at index `" + e + "` not found"),
                  (r.textContent = t);
              }
              return e;
            }),
            (n.deleteRule = function (e) {
              if (this._optimizeForSpeed) this.replaceRule(e, "");
              else {
                var t = this._tags[e];
                l(t, "rule at index `" + e + "` not found"),
                  t.parentNode.removeChild(t),
                  (this._tags[e] = null);
              }
            }),
            (n.flush = function () {
              (this._injected = !1),
                (this._rulesCount = 0),
                this._tags.forEach(function (e) {
                  return e && e.parentNode.removeChild(e);
                }),
                (this._tags = []);
            }),
            (n.cssRules = function () {
              var e = this;
              return this._tags.reduce(function (t, n) {
                return (
                  n
                    ? (t = t.concat(
                        Array.prototype.map.call(
                          e.getSheetForTag(n).cssRules,
                          function (t) {
                            return t.cssText === e._deletedRulePlaceholder
                              ? null
                              : t;
                          }
                        )
                      ))
                    : t.push(null),
                  t
                );
              }, []);
            }),
            (n.makeStyleTag = function (e, t, n) {
              t &&
                l(
                  u(t),
                  "makeStyleTag accepts only strings as second parameter"
                );
              var r = document.createElement("style");
              this._nonce && r.setAttribute("nonce", this._nonce),
                (r.type = "text/css"),
                r.setAttribute("data-" + e, ""),
                t && r.appendChild(document.createTextNode(t));
              var i = document.head || document.getElementsByTagName("head")[0];
              return n ? i.insertBefore(r, n) : i.appendChild(r), r;
            }),
            o(e.prototype, [
              {
                key: "length",
                get: function () {
                  return this._rulesCount;
                },
              },
            ]),
            t && o(e, t),
            e
          );
        })();
      function l(e, t) {
        if (!e) throw Error("StyleSheet: " + t + ".");
      }
      var h = function (e) {
          for (var t = 5381, n = e.length; n; )
            t = (33 * t) ^ e.charCodeAt(--n);
          return t >>> 0;
        },
        f = {};
      function d(e, t) {
        if (!t) return "jsx-" + e;
        var n = String(t),
          r = e + n;
        return f[r] || (f[r] = "jsx-" + h(e + "-" + n)), f[r];
      }
      function p(e, t) {
        var n = e + t;
        return (
          f[n] || (f[n] = t.replace(/__jsx-style-dynamic-selector/g, e)), f[n]
        );
      }
      var b = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              n = t.styleSheet,
              r = void 0 === n ? null : n,
              i = t.optimizeForSpeed,
              s = void 0 !== i && i;
            (this._sheet =
              r || new c({ name: "styled-jsx", optimizeForSpeed: s })),
              this._sheet.inject(),
              r &&
                "boolean" == typeof s &&
                (this._sheet.setOptimizeForSpeed(s),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {});
          }
          var t = e.prototype;
          return (
            (t.add = function (e) {
              var t = this;
              void 0 === this._optimizeForSpeed &&
                ((this._optimizeForSpeed = Array.isArray(e.children)),
                this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                this._fromServer ||
                  ((this._fromServer = this.selectFromServer()),
                  (this._instancesCounts = Object.keys(this._fromServer).reduce(
                    function (e, t) {
                      return (e[t] = 0), e;
                    },
                    {}
                  )));
              var n = this.getIdAndRules(e),
                r = n.styleId,
                i = n.rules;
              if (r in this._instancesCounts) {
                this._instancesCounts[r] += 1;
                return;
              }
              var s = i
                .map(function (e) {
                  return t._sheet.insertRule(e);
                })
                .filter(function (e) {
                  return -1 !== e;
                });
              (this._indices[r] = s), (this._instancesCounts[r] = 1);
            }),
            (t.remove = function (e) {
              var t = this,
                n = this.getIdAndRules(e).styleId;
              if (
                ((function (e, t) {
                  if (!e) throw Error("StyleSheetRegistry: " + t + ".");
                })(
                  n in this._instancesCounts,
                  "styleId: `" + n + "` not found"
                ),
                (this._instancesCounts[n] -= 1),
                this._instancesCounts[n] < 1)
              ) {
                var r = this._fromServer && this._fromServer[n];
                r
                  ? (r.parentNode.removeChild(r), delete this._fromServer[n])
                  : (this._indices[n].forEach(function (e) {
                      return t._sheet.deleteRule(e);
                    }),
                    delete this._indices[n]),
                  delete this._instancesCounts[n];
              }
            }),
            (t.update = function (e, t) {
              this.add(t), this.remove(e);
            }),
            (t.flush = function () {
              this._sheet.flush(),
                this._sheet.inject(),
                (this._fromServer = void 0),
                (this._indices = {}),
                (this._instancesCounts = {});
            }),
            (t.cssRules = function () {
              var e = this,
                t = this._fromServer
                  ? Object.keys(this._fromServer).map(function (t) {
                      return [t, e._fromServer[t]];
                    })
                  : [],
                n = this._sheet.cssRules();
              return t.concat(
                Object.keys(this._indices)
                  .map(function (t) {
                    return [
                      t,
                      e._indices[t]
                        .map(function (e) {
                          return n[e].cssText;
                        })
                        .join(e._optimizeForSpeed ? "" : "\n"),
                    ];
                  })
                  .filter(function (e) {
                    return !!e[1];
                  })
              );
            }),
            (t.styles = function (e) {
              var t, n;
              return (
                (t = this.cssRules()),
                void 0 === (n = e) && (n = {}),
                t.map(function (e) {
                  var t = e[0],
                    r = e[1];
                  return s.default.createElement("style", {
                    id: "__" + t,
                    key: "__" + t,
                    nonce: n.nonce ? n.nonce : void 0,
                    dangerouslySetInnerHTML: { __html: r },
                  });
                })
              );
            }),
            (t.getIdAndRules = function (e) {
              var t = e.children,
                n = e.dynamic,
                r = e.id;
              if (n) {
                var i = d(r, n);
                return {
                  styleId: i,
                  rules: Array.isArray(t)
                    ? t.map(function (e) {
                        return p(i, e);
                      })
                    : [p(i, t)],
                };
              }
              return { styleId: d(r), rules: Array.isArray(t) ? t : [t] };
            }),
            (t.selectFromServer = function () {
              return Array.prototype.slice
                .call(document.querySelectorAll('[id^="__jsx-"]'))
                .reduce(function (e, t) {
                  return (e[t.id.slice(2)] = t), e;
                }, {});
            }),
            e
          );
        })(),
        g = i.createContext(null);
      g.displayName = "StyleSheetContext";
      var m = s.default.useInsertionEffect || s.default.useLayoutEffect,
        y = new b();
      function v(e) {
        var t = y || i.useContext(g);
        return (
          t &&
            m(
              function () {
                return (
                  t.add(e),
                  function () {
                    t.remove(e);
                  }
                );
              },
              [e.id, String(e.dynamic)]
            ),
          null
        );
      }
      (v.dynamic = function (e) {
        return e
          .map(function (e) {
            return d(e[0], e[1]);
          })
          .join(" ");
      }),
        (t.style = v);
    },
    52464: function (e, t, n) {
      e.exports = n(35842).style;
    },
    46808: function () {},
    81089: function (e, t, n) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = n(15039),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        s = r.useState,
        o = r.useEffect,
        a = r.useLayoutEffect,
        u = r.useDebugValue;
      function c(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !i(e, n);
        } catch (e) {
          return !0;
        }
      }
      var l =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                r = s({ inst: { value: n, getSnapshot: t } }),
                i = r[0].inst,
                l = r[1];
              return (
                a(
                  function () {
                    (i.value = n), (i.getSnapshot = t), c(i) && l({ inst: i });
                  },
                  [e, n, t]
                ),
                o(
                  function () {
                    return (
                      c(i) && l({ inst: i }),
                      e(function () {
                        c(i) && l({ inst: i });
                      })
                    );
                  },
                  [e]
                ),
                u(n),
                n
              );
            };
      t.useSyncExternalStore =
        void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l;
    },
    94348: function (e, t, n) {
      "use strict";
      e.exports = n(81089);
    },
    81069: function (e, t, n) {
      "use strict";
      function r(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error(`Wrong positive integer: ${e}`);
      }
      function i(e, ...t) {
        if (!(e instanceof Uint8Array)) throw Error("Expected Uint8Array");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            `Expected Uint8Array of length ${t}, not of length=${e.length}`
          );
      }
      function s(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        r(e.outputLen), r(e.blockLen);
      }
      function o(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function a(e, t) {
        i(e);
        let n = t.outputLen;
        if (e.length < n)
          throw Error(
            `digestInto() expects output buffer of length at least ${n}`
          );
      }
      n.d(t, {
        Gg: function () {
          return o;
        },
        J8: function () {
          return a;
        },
        Rx: function () {
          return r;
        },
        aI: function () {
          return i;
        },
        vp: function () {
          return s;
        },
      });
    },
    57857: function (e, t, n) {
      "use strict";
      n.d(t, {
        kb: function () {
          return l;
        },
        eV: function () {
          return c;
        },
        GL: function () {
          return o;
        },
        O6: function () {
          return f;
        },
        np: function () {
          return a;
        },
        O0: function () {
          return u;
        },
        Jq: function () {
          return s;
        },
        hE: function () {
          return h;
        },
      });
      let r =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0,
        i = (e) => e instanceof Uint8Array,
        s = (e) =>
          new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        o = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        a = (e, t) => (e << (32 - t)) | (e >>> t);
      if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0])
        throw Error("Non little-endian hardware is not supported");
      function u(e) {
        if (
          ("string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error(`utf8ToBytes expected string, got ${typeof e}`);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          !i(e))
        )
          throw Error(`expected Uint8Array, got ${typeof e}`);
        return e;
      }
      function c(...e) {
        let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
          n = 0;
        return (
          e.forEach((e) => {
            if (!i(e)) throw Error("Uint8Array expected");
            t.set(e, n), (n += e.length);
          }),
          t
        );
      }
      class l {
        clone() {
          return this._cloneInto();
        }
      }
      function h(e) {
        let t = (t) => e().update(u(t)).digest(),
          n = e();
        return (
          (t.outputLen = n.outputLen),
          (t.blockLen = n.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function f(e = 32) {
        if (r && "function" == typeof r.getRandomValues)
          return r.getRandomValues(new Uint8Array(e));
        throw Error("crypto.getRandomValues must be defined");
      }
    },
    13027: function (e, t, n) {
      "use strict";
      n.d(t, {
        y: function () {
          return r;
        },
      });
      let r = (0, n(80189).a)({
        id: 42161,
        name: "Arbitrum One",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://arb1.arbitrum.io/rpc"] } },
        blockExplorers: {
          default: {
            name: "Arbiscan",
            url: "https://arbiscan.io",
            apiUrl: "https://api.arbiscan.io/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 7654707,
          },
        },
      });
    },
    48213: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return r;
        },
      });
      let r = (0, n(80189).a)({
        id: 1,
        name: "Ethereum",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://cloudflare-eth.com"] } },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://etherscan.io",
            apiUrl: "https://api.etherscan.io/api",
          },
        },
        contracts: {
          ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
          ensUniversalResolver: {
            address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
            blockCreated: 19258213,
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 14353601,
          },
        },
      });
    },
    8223: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return p;
        },
      });
      var r = n(91815),
        i = n(84803),
        s = n(35605),
        o = n(21096);
      let a = {
        block: (0, i.G)({
          format: (e) => ({
            transactions: e.transactions?.map((e) => {
              if ("string" == typeof e) return e;
              let t = s.Tr(e);
              return (
                "0x7e" === t.typeHex &&
                  ((t.isSystemTx = e.isSystemTx),
                  (t.mint = e.mint ? r.y_(e.mint) : void 0),
                  (t.sourceHash = e.sourceHash),
                  (t.type = "deposit")),
                t
              );
            }),
            stateRoot: e.stateRoot,
          }),
        }),
        transaction: (0, s.y_)({
          format(e) {
            let t = {};
            return (
              "0x7e" === e.type &&
                ((t.isSystemTx = e.isSystemTx),
                (t.mint = e.mint ? (0, r.y_)(e.mint) : void 0),
                (t.sourceHash = e.sourceHash),
                (t.type = "deposit")),
              t
            );
          },
        }),
        transactionReceipt: (0, o.d)({
          format: (e) => ({
            l1GasPrice: e.l1GasPrice ? (0, r.y_)(e.l1GasPrice) : null,
            l1GasUsed: e.l1GasUsed ? (0, r.y_)(e.l1GasUsed) : null,
            l1Fee: e.l1Fee ? (0, r.y_)(e.l1Fee) : null,
            l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null,
          }),
        }),
      };
      var u = n(21997),
        c = n(79173),
        l = n(42196),
        h = n(98617),
        f = n(1155),
        d = n(71553);
      let p = {
        contracts: {
          gasPriceOracle: {
            address: "0x420000000000000000000000000000000000000F",
          },
          l1Block: { address: "0x4200000000000000000000000000000000000015" },
          l2CrossDomainMessenger: {
            address: "0x4200000000000000000000000000000000000007",
          },
          l2Erc721Bridge: {
            address: "0x4200000000000000000000000000000000000014",
          },
          l2StandardBridge: {
            address: "0x4200000000000000000000000000000000000010",
          },
          l2ToL1MessagePasser: {
            address: "0x4200000000000000000000000000000000000016",
          },
        },
        formatters: a,
        serializers: {
          transaction: (e, t) =>
            "deposit" === e.type || void 0 !== e.sourceHash
              ? (function (e) {
                  !(function (e) {
                    let { from: t, to: n } = e;
                    if (t && !(0, c.U)(t)) throw new u.b({ address: t });
                    if (n && !(0, c.U)(n)) throw new u.b({ address: n });
                  })(e);
                  let {
                      sourceHash: t,
                      data: n,
                      from: r,
                      gas: i,
                      isSystemTx: s,
                      mint: o,
                      to: a,
                      value: d,
                    } = e,
                    p = [
                      t,
                      r,
                      a ?? "0x",
                      o ? (0, h.NC)(o) : "0x",
                      d ? (0, h.NC)(d) : "0x",
                      i ? (0, h.NC)(i) : "0x",
                      s ? "0x1" : "0x",
                      n ?? "0x",
                    ];
                  return (0, l.SM)(["0x7e", (0, f.LV)(p)]);
                })(e)
              : (0, d.D)(e, t),
        },
      };
    },
    67638: function (e, t, n) {
      "use strict";
      n.d(t, {
        Bd: function () {
          return s;
        },
        Zn: function () {
          return i;
        },
        ez: function () {
          return r;
        },
      });
      let r = { gwei: 9, wei: 18 },
        i = { ether: -9, wei: 9 },
        s = { ether: -18, gwei: -9 };
    },
    21997: function (e, t, n) {
      "use strict";
      n.d(t, {
        b: function () {
          return i;
        },
      });
      var r = n(70778);
      class i extends r.G {
        constructor({ address: e }) {
          super(`Address "${e}" is invalid.`, {
            metaMessages: [
              "- Address must be a hex value of 20 bytes (40 hex characters).",
              "- Address must match its checksum counterpart.",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAddressError",
            });
        }
      }
    },
    70778: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return i;
        },
      });
      var r = n(86336);
      class i extends Error {
        constructor(e, t = {}) {
          super(),
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
              value: "ViemError",
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: (0, r.bo)(),
            });
          let n =
              t.cause instanceof i
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            s = (t.cause instanceof i && t.cause.docsPath) || t.docsPath;
          (this.message = [
            e || "An error occurred.",
            "",
            ...(t.metaMessages ? [...t.metaMessages, ""] : []),
            ...(s
              ? [
                  `Docs: https://viem.sh${s}${
                    t.docsSlug ? `#${t.docsSlug}` : ""
                  }`,
                ]
              : []),
            ...(n ? [`Details: ${n}`] : []),
            `Version: ${this.version}`,
          ].join("\n")),
            t.cause && (this.cause = t.cause),
            (this.details = n),
            (this.docsPath = s),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
        walk(e) {
          return (function e(t, n) {
            return n?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t
              ? e(t.cause, n)
              : n
              ? null
              : t;
          })(this, e);
        }
      }
    },
    18741: function (e, t, n) {
      "use strict";
      n.d(t, {
        Bk: function () {
          return o;
        },
        Yl: function () {
          return s;
        },
        hJ: function () {
          return u;
        },
        mm: function () {
          return i;
        },
        pZ: function () {
          return a;
        },
      });
      var r = n(70778);
      class i extends r.G {
        constructor({ blockNumber: e, chain: t, contract: n }) {
          super(`Chain "${t.name}" does not support contract "${n.name}".`, {
            metaMessages: [
              "This could be due to any of the following:",
              ...(e && n.blockCreated && n.blockCreated > e
                ? [
                    `- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`,
                  ]
                : [
                    `- The chain does not have the contract "${n.name}" configured.`,
                  ]),
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainDoesNotSupportContract",
            });
        }
      }
      class s extends r.G {
        constructor({ chain: e, currentChainId: t }) {
          super(
            `The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${t}`,
                `Expected Chain ID: ${e.id} – ${e.name}`,
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainMismatchError",
            });
        }
      }
      class o extends r.G {
        constructor() {
          super(
            "No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainNotFoundError",
            });
        }
      }
      class a extends r.G {
        constructor() {
          super("No chain was provided to the Client."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ClientChainNotConfiguredError",
            });
        }
      }
      class u extends r.G {
        constructor({ chainId: e }) {
          super(
            "number" == typeof e
              ? `Chain ID "${e}" is invalid.`
              : "Chain ID is invalid."
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidChainIdError",
            });
        }
      }
    },
    89667: function (e, t, n) {
      "use strict";
      n.d(t, {
        KD: function () {
          return o;
        },
        T_: function () {
          return i;
        },
        lQ: function () {
          return s;
        },
      });
      var r = n(70778);
      class i extends r.G {
        constructor({ offset: e }) {
          super(`Offset \`${e}\` cannot be negative.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "NegativeOffsetError",
            });
        }
      }
      class s extends r.G {
        constructor({ length: e, position: t }) {
          super(
            `Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PositionOutOfBoundsError",
            });
        }
      }
      class o extends r.G {
        constructor({ count: e, limit: t }) {
          super(
            `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "RecursiveReadLimitExceededError",
            });
        }
      }
    },
    93790: function (e, t, n) {
      "use strict";
      n.d(t, {
        $s: function () {
          return s;
        },
        W_: function () {
          return o;
        },
        mV: function () {
          return i;
        },
      });
      var r = n(70778);
      class i extends r.G {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset "${e}" is out-of-bounds (size: ${n}).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SliceOffsetOutOfBoundsError",
            });
        }
      }
      class s extends r.G {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (${e}) exceeds padding size (${t}).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SizeExceedsPaddingSizeError",
            });
        }
      }
      class o extends r.G {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} is expected to be ${t} ${n} long, but is ${e} ${n} long.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidBytesLengthError",
            });
        }
      }
    },
    37169: function (e, t, n) {
      "use strict";
      n.d(t, {
        J5: function () {
          return i;
        },
        M6: function () {
          return o;
        },
        yr: function () {
          return s;
        },
      });
      var r = n(70778);
      class i extends r.G {
        constructor({ max: e, min: t, signed: n, size: r, value: i }) {
          super(
            `Number "${i}" is not in safe ${
              r ? `${8 * r}-bit ${n ? "signed" : "unsigned"} ` : ""
            }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "IntegerOutOfRangeError",
            });
        }
      }
      class s extends r.G {
        constructor(e) {
          super(
            `Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidBytesBooleanError",
            });
        }
      }
      class o extends r.G {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SizeOverflowError",
            });
        }
      }
    },
    11588: function (e, t, n) {
      "use strict";
      n.d(t, {
        C_: function () {
          return h;
        },
        G$: function () {
          return a;
        },
        Hh: function () {
          return o;
        },
        M_: function () {
          return s;
        },
        WF: function () {
          return f;
        },
        ZI: function () {
          return u;
        },
        cj: function () {
          return g;
        },
        cs: function () {
          return b;
        },
        dR: function () {
          return d;
        },
        pZ: function () {
          return p;
        },
        se: function () {
          return l;
        },
        vU: function () {
          return c;
        },
      });
      var r = n(20899),
        i = n(70778);
      class s extends i.G {
        constructor({ cause: e, message: t } = {}) {
          let n = t
            ?.replace("execution reverted: ", "")
            ?.replace("execution reverted", "");
          super(
            `Execution reverted ${
              n ? `with reason: ${n}` : "for an unknown reason"
            }.`,
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ExecutionRevertedError",
            });
        }
      }
      Object.defineProperty(s, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3,
      }),
        Object.defineProperty(s, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /execution reverted/,
        });
      class o extends i.G {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, r.o)(t)} gwei` : ""
            }) cannot be higher than the maximum allowed value (2^256-1).`,
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "FeeCapTooHigh",
            });
        }
      }
      Object.defineProperty(o, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
      });
      class a extends i.G {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, r.o)(t)}` : ""
            } gwei) cannot be lower than the block base fee.`,
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "FeeCapTooLow",
            });
        }
      }
      Object.defineProperty(a, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
      });
      class u extends i.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is higher than the next one expected.`,
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "NonceTooHighError",
            });
        }
      }
      Object.defineProperty(u, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too high/,
      });
      class c extends i.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "NonceTooLowError",
            });
        }
      }
      Object.defineProperty(c, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too low|transaction already imported|already known/,
      });
      class l extends i.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }exceeds the maximum allowed nonce.`,
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "NonceMaxValueError",
            });
        }
      }
      Object.defineProperty(l, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce has max value/,
      });
      class h extends i.G {
        constructor({ cause: e } = {}) {
          super(
            "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
            {
              cause: e,
              metaMessages: [
                "This error could arise when the account does not have enough funds to:",
                " - pay for the total gas fee,",
                " - pay for the value to send.",
                " ",
                "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
                " - `gas` is the amount of gas needed for transaction to execute,",
                " - `gas fee` is the gas fee,",
                " - `value` is the amount of ether to send to the recipient.",
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InsufficientFundsError",
            });
        }
      }
      Object.defineProperty(h, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /insufficient funds/,
      });
      class f extends i.G {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction exceeds the limit allowed for the block.`,
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "IntrinsicGasTooHighError",
            });
        }
      }
      Object.defineProperty(f, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too high|gas limit reached/,
      });
      class d extends i.G {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction is too low.`,
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "IntrinsicGasTooLowError",
            });
        }
      }
      Object.defineProperty(d, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too low/,
      });
      class p extends i.G {
        constructor({ cause: e }) {
          super("The transaction type is not supported for this chain.", {
            cause: e,
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "TransactionTypeNotSupportedError",
            });
        }
      }
      Object.defineProperty(p, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /transaction type not valid/,
      });
      class b extends i.G {
        constructor({
          cause: e,
          maxPriorityFeePerGas: t,
          maxFeePerGas: n,
        } = {}) {
          super(
            `The provided tip (\`maxPriorityFeePerGas\`${
              t ? ` = ${(0, r.o)(t)} gwei` : ""
            }) cannot be higher than the fee cap (\`maxFeePerGas\`${
              n ? ` = ${(0, r.o)(n)} gwei` : ""
            }).`,
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "TipAboveFeeCapError",
            });
        }
      }
      Object.defineProperty(b, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
      });
      class g extends i.G {
        constructor({ cause: e }) {
          super(`An error occurred while executing: ${e?.shortMessage}`, {
            cause: e,
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownNodeError",
            });
        }
      }
    },
    213: function (e, t, n) {
      "use strict";
      n.d(t, {
        Bh: function () {
          return f;
        },
        JC: function () {
          return l;
        },
        Yb: function () {
          return d;
        },
        j3: function () {
          return c;
        },
        mc: function () {
          return p;
        },
        mk: function () {
          return h;
        },
        vl: function () {
          return u;
        },
        xY: function () {
          return a;
        },
        xr: function () {
          return o;
        },
      });
      var r = n(51123),
        i = n(20899),
        s = n(70778);
      function o(e) {
        let t = Object.entries(e)
            .map(([e, t]) => (void 0 === t || !1 === t ? null : [e, t]))
            .filter(Boolean),
          n = t.reduce((e, [t]) => Math.max(e, t.length), 0);
        return t.map(([e, t]) => `  ${`${e}:`.padEnd(n + 1)}  ${t}`).join("\n");
      }
      class a extends s.G {
        constructor() {
          super(
            "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "FeeConflictError",
            });
        }
      }
      class u extends s.G {
        constructor({ v: e }) {
          super(`Invalid \`v\` value "${e}". Expected 27 or 28.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidLegacyVError",
            });
        }
      }
      class c extends s.G {
        constructor({ transaction: e }) {
          super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: [
              "Provided Transaction:",
              "{",
              o(e),
              "}",
              "",
              "To infer the type, either provide:",
              "- a `type` to the Transaction, or",
              "- an EIP-1559 Transaction with `maxFeePerGas`, or",
              "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
              "- a Legacy Transaction with `gasPrice`",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidSerializableTransactionError",
            });
        }
      }
      class l extends s.G {
        constructor({ storageKey: e }) {
          super(
            `Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor(
              (e.length - 2) / 2
            )} bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidStorageKeySizeError",
            });
        }
      }
      class h extends s.G {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: s,
            data: a,
            gas: u,
            gasPrice: c,
            maxFeePerGas: l,
            maxPriorityFeePerGas: h,
            nonce: f,
            to: d,
            value: p,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Request Arguments:",
              o({
                chain: s && `${s?.name} (id: ${s?.id})`,
                from: t?.address,
                to: d,
                value:
                  void 0 !== p &&
                  `${(0, r.d)(p)} ${s?.nativeCurrency?.symbol || "ETH"}`,
                data: a,
                gas: u,
                gasPrice: void 0 !== c && `${(0, i.o)(c)} gwei`,
                maxFeePerGas: void 0 !== l && `${(0, i.o)(l)} gwei`,
                maxPriorityFeePerGas: void 0 !== h && `${(0, i.o)(h)} gwei`,
                nonce: f,
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
              value: "TransactionExecutionError",
            }),
            (this.cause = e);
        }
      }
      class f extends s.G {
        constructor({
          blockHash: e,
          blockNumber: t,
          blockTag: n,
          hash: r,
          index: i,
        }) {
          let s = "Transaction";
          n &&
            void 0 !== i &&
            (s = `Transaction at block time "${n}" at index "${i}"`),
            e &&
              void 0 !== i &&
              (s = `Transaction at block hash "${e}" at index "${i}"`),
            t &&
              void 0 !== i &&
              (s = `Transaction at block number "${t}" at index "${i}"`),
            r && (s = `Transaction with hash "${r}"`),
            super(`${s} could not be found.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "TransactionNotFoundError",
            });
        }
      }
      class d extends s.G {
        constructor({ hash: e }) {
          super(
            `Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "TransactionReceiptNotFoundError",
            });
        }
      }
      class p extends s.G {
        constructor({ hash: e }) {
          super(
            `Timed out while waiting for transaction with hash "${e}" to be confirmed.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WaitForTransactionReceiptTimeoutError",
            });
        }
      }
    },
    86336: function (e, t, n) {
      "use strict";
      n.d(t, {
        CR: function () {
          return r;
        },
        Gr: function () {
          return i;
        },
        bo: function () {
          return s;
        },
      });
      let r = (e) => e,
        i = (e) => e,
        s = () => "viem@2.7.22";
    },
    66447: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return u;
        },
        x: function () {
          return a;
        },
      });
      var r = n(21997),
        i = n(52796),
        s = n(66616),
        o = n(79173);
      function a(e, t) {
        let n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
          r = (0, s.w)((0, i.qX)(n), "bytes"),
          o = (t ? n.substring(`${t}0x`.length) : n).split("");
        for (let e = 0; e < 40; e += 2)
          r[e >> 1] >> 4 >= 8 && o[e] && (o[e] = o[e].toUpperCase()),
            (15 & r[e >> 1]) >= 8 &&
              o[e + 1] &&
              (o[e + 1] = o[e + 1].toUpperCase());
        return `0x${o.join("")}`;
      }
      function u(e, t) {
        if (!(0, o.U)(e)) throw new r.b({ address: e });
        return a(e, t);
      }
    },
    79173: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return a;
        },
      });
      class r extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        set(e, t) {
          return (
            super.set(e, t),
            this.maxSize &&
              this.size > this.maxSize &&
              this.delete(this.keys().next().value),
            this
          );
        }
      }
      var i = n(66447);
      let s = /^0x[a-fA-F0-9]{40}$/,
        o = new r(8192);
      function a(e, { strict: t = !0 } = {}) {
        if (o.has(e)) return o.get(e);
        let n =
          !!s.test(e) && (e.toLowerCase() === e || !t || (0, i.x)(e) === e);
        return o.set(e, n), n;
      }
    },
    80189: function (e, t, n) {
      "use strict";
      function r(e) {
        return { formatters: void 0, fees: void 0, serializers: void 0, ...e };
      }
      n.d(t, {
        a: function () {
          return r;
        },
      });
    },
    94712: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return s;
        },
      });
      var r = n(89667);
      let i = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: 1 / 0,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new r.KD({
              count: this.recursiveReadCount + 1,
              limit: this.recursiveReadLimit,
            });
        },
        assertPosition(e) {
          if (e < 0 || e > this.bytes.length - 1)
            throw new r.lQ({ length: this.bytes.length, position: e });
        },
        decrementPosition(e) {
          if (e < 0) throw new r.T_({ offset: e });
          let t = this.position - e;
          this.assertPosition(t), (this.position = t);
        },
        getReadCount(e) {
          return this.positionReadCount.get(e || this.position) || 0;
        },
        incrementPosition(e) {
          if (e < 0) throw new r.T_({ offset: e });
          let t = this.position + e;
          this.assertPosition(t), (this.position = t);
        },
        inspectByte(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectBytes(e, t) {
          let n = t ?? this.position;
          return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
        },
        inspectUint8(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectUint16(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 1), this.dataView.getUint16(t);
        },
        inspectUint24(e) {
          let t = e ?? this.position;
          return (
            this.assertPosition(t + 2),
            (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
          );
        },
        inspectUint32(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 3), this.dataView.getUint32(t);
        },
        pushByte(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushBytes(e) {
          this.assertPosition(this.position + e.length - 1),
            this.bytes.set(e, this.position),
            (this.position += e.length);
        },
        pushUint8(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushUint16(e) {
          this.assertPosition(this.position + 1),
            this.dataView.setUint16(this.position, e),
            (this.position += 2);
        },
        pushUint24(e) {
          this.assertPosition(this.position + 2),
            this.dataView.setUint16(this.position, e >> 8),
            this.dataView.setUint8(this.position + 2, 255 & e),
            (this.position += 3);
        },
        pushUint32(e) {
          this.assertPosition(this.position + 3),
            this.dataView.setUint32(this.position, e),
            (this.position += 4);
        },
        readByte() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectByte();
          return this.position++, e;
        },
        readBytes(e, t) {
          this.assertReadLimit(), this._touch();
          let n = this.inspectBytes(e);
          return (this.position += t ?? e), n;
        },
        readUint8() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint8();
          return (this.position += 1), e;
        },
        readUint16() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint16();
          return (this.position += 2), e;
        },
        readUint24() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint24();
          return (this.position += 3), e;
        },
        readUint32() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint32();
          return (this.position += 4), e;
        },
        setPosition(e) {
          let t = this.position;
          return (
            this.assertPosition(e),
            (this.position = e),
            () => (this.position = t)
          );
        },
        _touch() {
          if (this.recursiveReadLimit === 1 / 0) return;
          let e = this.getReadCount();
          this.positionReadCount.set(this.position, e + 1),
            e > 0 && this.recursiveReadCount++;
        },
      };
      function s(e, { recursiveReadLimit: t = 8192 } = {}) {
        let n = Object.create(i);
        return (
          (n.bytes = e),
          (n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
          (n.positionReadCount = new Map()),
          (n.recursiveReadLimit = t),
          n
        );
      }
    },
    42196: function (e, t, n) {
      "use strict";
      function r(e) {
        return "string" == typeof e[0]
          ? i(e)
          : (function (e) {
              let t = 0;
              for (let n of e) t += n.length;
              let n = new Uint8Array(t),
                r = 0;
              for (let t of e) n.set(t, r), (r += t.length);
              return n;
            })(e);
      }
      function i(e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      n.d(t, {
        SM: function () {
          return i;
        },
        zo: function () {
          return r;
        },
      });
    },
    82701: function (e, t, n) {
      "use strict";
      function r(e, { strict: t = !0 } = {}) {
        return (
          !!e &&
          "string" == typeof e &&
          (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
        );
      }
      n.d(t, {
        v: function () {
          return r;
        },
      });
    },
    68975: function (e, t, n) {
      "use strict";
      n.d(t, {
        gc: function () {
          return s;
        },
        vk: function () {
          return i;
        },
      });
      var r = n(93790);
      function i(e, { dir: t, size: n = 32 } = {}) {
        return "string" == typeof e
          ? s(e, { dir: t, size: n })
          : (function (e, { dir: t, size: n = 32 } = {}) {
              if (null === n) return e;
              if (e.length > n)
                throw new r.$s({
                  size: e.length,
                  targetSize: n,
                  type: "bytes",
                });
              let i = new Uint8Array(n);
              for (let r = 0; r < n; r++) {
                let s = "right" === t;
                i[s ? r : n - r - 1] = e[s ? r : e.length - r - 1];
              }
              return i;
            })(e, { dir: t, size: n });
      }
      function s(e, { dir: t, size: n = 32 } = {}) {
        if (null === n) return e;
        let i = e.replace("0x", "");
        if (i.length > 2 * n)
          throw new r.$s({
            size: Math.ceil(i.length / 2),
            targetSize: n,
            type: "hex",
          });
        return `0x${i["right" === t ? "padEnd" : "padStart"](2 * n, "0")}`;
      }
    },
    36338: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return i;
        },
      });
      var r = n(82701);
      function i(e) {
        return (0, r.v)(e, { strict: !1 })
          ? Math.ceil((e.length - 2) / 2)
          : e.length;
      }
    },
    72205: function (e, t, n) {
      "use strict";
      function r(e, { dir: t = "left" } = {}) {
        let n = "string" == typeof e ? e.replace("0x", "") : e,
          r = 0;
        for (
          let e = 0;
          e < n.length - 1 &&
          "0" === n["left" === t ? e : n.length - e - 1].toString();
          e++
        )
          r++;
        return ((n = "left" === t ? n.slice(r) : n.slice(0, n.length - r)),
        "string" == typeof e)
          ? (1 === n.length && "right" === t && (n = `${n}0`),
            `0x${n.length % 2 == 1 ? `0${n}` : n}`)
          : n;
      }
      n.d(t, {
        f: function () {
          return r;
        },
      });
    },
    91815: function (e, t, n) {
      "use strict";
      n.d(t, {
        Yf: function () {
          return a;
        },
        ly: function () {
          return c;
        },
        rR: function () {
          return l;
        },
        y_: function () {
          return u;
        },
      });
      var r = n(37169),
        i = n(36338),
        s = n(72205),
        o = n(52796);
      function a(e, { size: t }) {
        if ((0, i.d)(e) > t)
          throw new r.M6({ givenSize: (0, i.d)(e), maxSize: t });
      }
      function u(e, t = {}) {
        let { signed: n } = t;
        t.size && a(e, { size: t.size });
        let r = BigInt(e);
        if (!n) return r;
        let i = (e.length - 2) / 2;
        return r <= (1n << (8n * BigInt(i) - 1n)) - 1n
          ? r
          : r - BigInt(`0x${"f".padStart(2 * i, "f")}`) - 1n;
      }
      function c(e, t = {}) {
        return Number(u(e, t));
      }
      function l(e, t = {}) {
        let n = (0, o.nr)(e);
        return (
          t.size &&
            (a(n, { size: t.size }), (n = (0, s.f)(n, { dir: "right" }))),
          new TextDecoder().decode(n)
        );
      }
    },
    52796: function (e, t, n) {
      "use strict";
      n.d(t, {
        O0: function () {
          return c;
        },
        nr: function () {
          return f;
        },
        qX: function () {
          return d;
        },
      });
      var r = n(70778),
        i = n(82701),
        s = n(68975),
        o = n(91815),
        a = n(98617);
      let u = new TextEncoder();
      function c(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? f((0, a.eC)(e, t))
          : "boolean" == typeof e
          ? (function (e, t = {}) {
              let n = new Uint8Array(1);
              return ((n[0] = Number(e)), "number" == typeof t.size)
                ? ((0, o.Yf)(n, { size: t.size }),
                  (0, s.vk)(n, { size: t.size }))
                : n;
            })(e, t)
          : (0, i.v)(e)
          ? f(e, t)
          : d(e, t);
      }
      let l = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function h(e) {
        return e >= l.zero && e <= l.nine
          ? e - l.zero
          : e >= l.A && e <= l.F
          ? e - (l.A - 10)
          : e >= l.a && e <= l.f
          ? e - (l.a - 10)
          : void 0;
      }
      function f(e, t = {}) {
        let n = e;
        t.size &&
          ((0, o.Yf)(n, { size: t.size }),
          (n = (0, s.vk)(n, { dir: "right", size: t.size })));
        let i = n.slice(2);
        i.length % 2 && (i = `0${i}`);
        let a = i.length / 2,
          u = new Uint8Array(a);
        for (let e = 0, t = 0; e < a; e++) {
          let n = h(i.charCodeAt(t++)),
            s = h(i.charCodeAt(t++));
          if (void 0 === n || void 0 === s)
            throw new r.G(
              `Invalid byte sequence ("${i[t - 2]}${i[t - 1]}" in "${i}").`
            );
          u[e] = 16 * n + s;
        }
        return u;
      }
      function d(e, t = {}) {
        let n = u.encode(e);
        return "number" == typeof t.size
          ? ((0, o.Yf)(n, { size: t.size }),
            (0, s.vk)(n, { dir: "right", size: t.size }))
          : n;
      }
    },
    98617: function (e, t, n) {
      "use strict";
      n.d(t, {
        $G: function () {
          return f;
        },
        C4: function () {
          return u;
        },
        NC: function () {
          return a;
        },
        ci: function () {
          return c;
        },
        eC: function () {
          return l;
        },
      });
      var r = n(37169),
        i = n(68975),
        s = n(91815);
      let o = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function a(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? l(e, t)
          : "string" == typeof e
          ? f(e, t)
          : "boolean" == typeof e
          ? u(e, t)
          : c(e, t);
      }
      function u(e, t = {}) {
        let n = `0x${Number(e)}`;
        return "number" == typeof t.size
          ? ((0, s.Yf)(n, { size: t.size }), (0, i.vk)(n, { size: t.size }))
          : n;
      }
      function c(e, t = {}) {
        let n = "";
        for (let t = 0; t < e.length; t++) n += o[e[t]];
        let r = `0x${n}`;
        return "number" == typeof t.size
          ? ((0, s.Yf)(r, { size: t.size }),
            (0, i.vk)(r, { dir: "right", size: t.size }))
          : r;
      }
      function l(e, t = {}) {
        let n;
        let { signed: s, size: o } = t,
          a = BigInt(e);
        o
          ? (n = s
              ? (1n << (8n * BigInt(o) - 1n)) - 1n
              : 2n ** (8n * BigInt(o)) - 1n)
          : "number" == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
        let u = "bigint" == typeof n && s ? -n - 1n : 0;
        if ((n && a > n) || a < u) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new r.J5({
            max: n ? `${n}${t}` : void 0,
            min: `${u}${t}`,
            signed: s,
            size: o,
            value: `${e}${t}`,
          });
        }
        let c = `0x${(s && a < 0
          ? (1n << BigInt(8 * o)) + BigInt(a)
          : a
        ).toString(16)}`;
        return o ? (0, i.vk)(c, { size: o }) : c;
      }
      let h = new TextEncoder();
      function f(e, t = {}) {
        return c(h.encode(e), t);
      }
    },
    1155: function (e, t, n) {
      "use strict";
      n.d(t, {
        LV: function () {
          return a;
        },
      });
      var r = n(70778),
        i = n(94712),
        s = n(52796),
        o = n(98617);
      function a(e, t = "hex") {
        let n = (function e(t) {
            return Array.isArray(t)
              ? (function (e) {
                  let t = e.reduce((e, t) => e + t.length, 0),
                    n = u(t);
                  return {
                    length: t <= 55 ? 1 + t : 1 + n + t,
                    encode(r) {
                      for (let { encode: i } of (t <= 55
                        ? r.pushByte(192 + t)
                        : (r.pushByte(247 + n),
                          1 === n
                            ? r.pushUint8(t)
                            : 2 === n
                            ? r.pushUint16(t)
                            : 3 === n
                            ? r.pushUint24(t)
                            : r.pushUint32(t)),
                      e))
                        i(r);
                    },
                  };
                })(t.map((t) => e(t)))
              : (function (e) {
                  let t = "string" == typeof e ? (0, s.nr)(e) : e,
                    n = u(t.length);
                  return {
                    length:
                      1 === t.length && t[0] < 128
                        ? 1
                        : t.length <= 55
                        ? 1 + t.length
                        : 1 + n + t.length,
                    encode(e) {
                      (1 === t.length && t[0] < 128) ||
                        (t.length <= 55
                          ? e.pushByte(128 + t.length)
                          : (e.pushByte(183 + n),
                            1 === n
                              ? e.pushUint8(t.length)
                              : 2 === n
                              ? e.pushUint16(t.length)
                              : 3 === n
                              ? e.pushUint24(t.length)
                              : e.pushUint32(t.length))),
                        e.pushBytes(t);
                    },
                  };
                })(t);
          })(e),
          r = (0, i.q)(new Uint8Array(n.length));
        return (n.encode(r), "hex" === t) ? (0, o.ci)(r.bytes) : r.bytes;
      }
      function u(e) {
        if (e < 256) return 1;
        if (e < 65536) return 2;
        if (e < 16777216) return 3;
        if (e < 4294967296) return 4;
        throw new r.G("Length is too large.");
      }
    },
    84803: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return o;
        },
        Z: function () {
          return s;
        },
      });
      var r = n(98877),
        i = n(35605);
      function s(e) {
        let t = e.transactions?.map((e) =>
          "string" == typeof e ? e : i.Tr(e)
        );
        return {
          ...e,
          baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
          blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
          difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
          excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
          gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
          hash: e.hash ? e.hash : null,
          logsBloom: e.logsBloom ? e.logsBloom : null,
          nonce: e.nonce ? e.nonce : null,
          number: e.number ? BigInt(e.number) : null,
          size: e.size ? BigInt(e.size) : void 0,
          timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
          transactions: t,
          totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
        };
      }
      let o = (0, r.$)("block", s);
    },
    98877: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return ({ exclude: n, format: r }) => ({
          exclude: n,
          format: (e) => {
            let i = t(e);
            if (n) for (let e of n) delete i[e];
            return { ...i, ...r(e) };
          },
          type: e,
        });
      }
      n.d(t, {
        $: function () {
          return r;
        },
      });
    },
    58445: function (e, t, n) {
      "use strict";
      function r(e, { args: t, eventName: n } = {}) {
        return {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          logIndex: e.logIndex ? Number(e.logIndex) : null,
          transactionHash: e.transactionHash ? e.transactionHash : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          ...(n ? { args: t, eventName: n } : {}),
        };
      }
      n.d(t, {
        U: function () {
          return r;
        },
      });
    },
    35605: function (e, t, n) {
      "use strict";
      n.d(t, {
        Tr: function () {
          return o;
        },
        c8: function () {
          return s;
        },
        y_: function () {
          return a;
        },
      });
      var r = n(91815),
        i = n(98877);
      let s = {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
        "0x3": "eip4844",
      };
      function o(e) {
        let t = {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          chainId: e.chainId ? (0, r.ly)(e.chainId) : void 0,
          gas: e.gas ? BigInt(e.gas) : void 0,
          gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
          maxFeePerBlobGas: e.maxFeePerBlobGas
            ? BigInt(e.maxFeePerBlobGas)
            : void 0,
          maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: e.maxPriorityFeePerGas
            ? BigInt(e.maxPriorityFeePerGas)
            : void 0,
          nonce: e.nonce ? (0, r.ly)(e.nonce) : void 0,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          type: e.type ? s[e.type] : void 0,
          typeHex: e.type ? e.type : void 0,
          value: e.value ? BigInt(e.value) : void 0,
          v: e.v ? BigInt(e.v) : void 0,
        };
        return (
          (t.yParity = (() => {
            if (e.yParity) return Number(e.yParity);
            if ("bigint" == typeof t.v) {
              if (0n === t.v || 27n === t.v) return 0;
              if (1n === t.v || 28n === t.v) return 1;
              if (t.v >= 35n) return t.v % 2n === 0n ? 1 : 0;
            }
          })()),
          "legacy" === t.type &&
            (delete t.accessList,
            delete t.maxFeePerBlobGas,
            delete t.maxFeePerGas,
            delete t.maxPriorityFeePerGas,
            delete t.yParity),
          "eip2930" === t.type &&
            (delete t.maxFeePerBlobGas,
            delete t.maxFeePerGas,
            delete t.maxPriorityFeePerGas),
          "eip1559" === t.type && delete t.maxFeePerBlobGas,
          t
        );
      }
      let a = (0, i.$)("transaction", o);
    },
    21096: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return c;
        },
        f: function () {
          return u;
        },
      });
      var r = n(91815),
        i = n(98877),
        s = n(58445),
        o = n(35605);
      let a = { "0x0": "reverted", "0x1": "success" };
      function u(e) {
        let t = {
          ...e,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          contractAddress: e.contractAddress ? e.contractAddress : null,
          cumulativeGasUsed: e.cumulativeGasUsed
            ? BigInt(e.cumulativeGasUsed)
            : null,
          effectiveGasPrice: e.effectiveGasPrice
            ? BigInt(e.effectiveGasPrice)
            : null,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
          logs: e.logs ? e.logs.map((e) => (0, s.U)(e)) : null,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? (0, r.ly)(e.transactionIndex)
            : null,
          status: e.status ? a[e.status] : null,
          type: e.type ? o.c8[e.type] || e.type : null,
        };
        return (
          e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)),
          e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)),
          t
        );
      }
      let c = (0, i.$)("transactionReceipt", u);
    },
    66616: function (e, t, n) {
      "use strict";
      n.d(t, {
        w: function () {
          return E;
        },
      });
      var r = n(81069);
      let i = BigInt(4294967296 - 1),
        s = BigInt(32),
        o = (e, t, n) => (e << n) | (t >>> (32 - n)),
        a = (e, t, n) => (t << n) | (e >>> (32 - n)),
        u = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n)),
        c = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
      var l = n(57857);
      let [h, f, d] = [[], [], []],
        p = BigInt(0),
        b = BigInt(1),
        g = BigInt(2),
        m = BigInt(7),
        y = BigInt(256),
        v = BigInt(113);
      for (let e = 0, t = b, n = 1, r = 0; e < 24; e++) {
        ([n, r] = [r, (2 * n + 3 * r) % 5]),
          h.push(2 * (5 * r + n)),
          f.push((((e + 1) * (e + 2)) / 2) % 64);
        let i = p;
        for (let e = 0; e < 7; e++)
          (t = ((t << b) ^ ((t >> m) * v)) % y) & g &&
            (i ^= b << ((b << BigInt(e)) - b));
        d.push(i);
      }
      let [w, x] = (function (e, t = !1) {
          let n = new Uint32Array(e.length),
            r = new Uint32Array(e.length);
          for (let o = 0; o < e.length; o++) {
            let { h: a, l: u } = (function (e, t = !1) {
              return t
                ? { h: Number(e & i), l: Number((e >> s) & i) }
                : { h: 0 | Number((e >> s) & i), l: 0 | Number(e & i) };
            })(e[o], t);
            [n[o], r[o]] = [a, u];
          }
          return [n, r];
        })(d, !0),
        P = (e, t, n) => (n > 32 ? u(e, t, n) : o(e, t, n)),
        S = (e, t, n) => (n > 32 ? c(e, t, n) : a(e, t, n));
      class $ extends l.kb {
        constructor(e, t, n, i = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = n),
            (this.enableXOF = i),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, r.Rx)(n),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, l.Jq)(this.state));
        }
        keccak() {
          !(function (e, t = 24) {
            let n = new Uint32Array(10);
            for (let r = 24 - t; r < 24; r++) {
              for (let t = 0; t < 10; t++)
                n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
              for (let t = 0; t < 10; t += 2) {
                let r = (t + 8) % 10,
                  i = (t + 2) % 10,
                  s = n[i],
                  o = n[i + 1],
                  a = P(s, o, 1) ^ n[r],
                  u = S(s, o, 1) ^ n[r + 1];
                for (let n = 0; n < 50; n += 10)
                  (e[t + n] ^= a), (e[t + n + 1] ^= u);
              }
              let t = e[2],
                i = e[3];
              for (let n = 0; n < 24; n++) {
                let r = f[n],
                  s = P(t, i, r),
                  o = S(t, i, r),
                  a = h[n];
                (t = e[a]), (i = e[a + 1]), (e[a] = s), (e[a + 1] = o);
              }
              for (let t = 0; t < 50; t += 10) {
                for (let r = 0; r < 10; r++) n[r] = e[t + r];
                for (let r = 0; r < 10; r++)
                  e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10];
              }
              (e[0] ^= w[r]), (e[1] ^= x[r]);
            }
            n.fill(0);
          })(this.state32, this.rounds),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, r.Gg)(this);
          let { blockLen: t, state: n } = this,
            i = (e = (0, l.O0)(e)).length;
          for (let r = 0; r < i; ) {
            let s = Math.min(t - this.pos, i - r);
            for (let t = 0; t < s; t++) n[this.pos++] ^= e[r++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: n, blockLen: r } = this;
          (e[n] ^= t),
            (128 & t) != 0 && n === r - 1 && this.keccak(),
            (e[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, r.Gg)(this, !1), (0, r.aI)(e), this.finish();
          let t = this.state,
            { blockLen: n } = this;
          for (let r = 0, i = e.length; r < i; ) {
            this.posOut >= n && this.keccak();
            let s = Math.min(n - this.posOut, i - r);
            e.set(t.subarray(this.posOut, this.posOut + s), r),
              (this.posOut += s),
              (r += s);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, r.Rx)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, r.J8)(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: n,
            outputLen: r,
            rounds: i,
            enableXOF: s,
          } = this;
          return (
            e || (e = new $(t, n, r, s, i)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = i),
            (e.suffix = n),
            (e.outputLen = r),
            (e.enableXOF = s),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let _ = (0, l.hE)(() => new $(136, 1, 32));
      var C = n(82701),
        G = n(52796),
        I = n(98617);
      function E(e, t) {
        let n = _((0, C.v)(e, { strict: !1 }) ? (0, G.O0)(e) : e);
        return "bytes" === (t || "hex") ? n : (0, I.NC)(n);
      }
    },
    27446: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return i;
        },
      });
      var r = n(213);
      function i(e) {
        if (e.type) return e.type;
        if (void 0 !== e.maxFeePerGas || void 0 !== e.maxPriorityFeePerGas)
          return "eip1559";
        if (void 0 !== e.gasPrice)
          return void 0 !== e.accessList ? "eip2930" : "legacy";
        throw new r.j3({ transaction: e });
      }
    },
    71553: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return b;
        },
      });
      var r = n(213),
        i = n(42196),
        s = n(72205),
        o = n(98617),
        a = n(1155),
        u = n(21997),
        c = n(70778),
        l = n(18741),
        h = n(11588),
        f = n(79173),
        d = n(27446);
      function p(e) {
        if (!e || 0 === e.length) return [];
        let t = [];
        for (let n = 0; n < e.length; n++) {
          let { address: i, storageKeys: s } = e[n];
          for (let e = 0; e < s.length; e++)
            if (s[e].length - 2 != 64) throw new r.JC({ storageKey: s[e] });
          if (!(0, f.U)(i, { strict: !1 })) throw new u.b({ address: i });
          t.push([i, s]);
        }
        return t;
      }
      function b(e, t) {
        let n = (0, d.l)(e);
        return "eip1559" === n
          ? (function (e, t) {
              let {
                chainId: n,
                gas: r,
                nonce: d,
                to: b,
                value: g,
                maxFeePerGas: m,
                maxPriorityFeePerGas: y,
                accessList: v,
                data: w,
              } = e;
              !(function (e) {
                let {
                  chainId: t,
                  maxPriorityFeePerGas: n,
                  gasPrice: r,
                  maxFeePerGas: i,
                  to: s,
                } = e;
                if (t <= 0) throw new l.hJ({ chainId: t });
                if (s && !(0, f.U)(s)) throw new u.b({ address: s });
                if (r)
                  throw new c.G(
                    "`gasPrice` is not a valid EIP-1559 Transaction attribute."
                  );
                if (i && i > 2n ** 256n - 1n)
                  throw new h.Hh({ maxFeePerGas: i });
                if (n && i && n > i)
                  throw new h.cs({ maxFeePerGas: i, maxPriorityFeePerGas: n });
              })(e);
              let x = p(v),
                P = [
                  (0, o.NC)(n),
                  d ? (0, o.NC)(d) : "0x",
                  y ? (0, o.NC)(y) : "0x",
                  m ? (0, o.NC)(m) : "0x",
                  r ? (0, o.NC)(r) : "0x",
                  b ?? "0x",
                  g ? (0, o.NC)(g) : "0x",
                  w ?? "0x",
                  x,
                ];
              if (t) {
                let e =
                  0n === t.v
                    ? "0x"
                    : 1n === t.v
                    ? (0, o.NC)(1)
                    : 27n === t.v
                    ? "0x"
                    : (0, o.NC)(1);
                P.push(e, (0, s.f)(t.r), (0, s.f)(t.s));
              }
              return (0, i.SM)(["0x02", (0, a.LV)(P)]);
            })(e, t)
          : "eip2930" === n
          ? (function (e, t) {
              let {
                chainId: n,
                gas: r,
                data: d,
                nonce: b,
                to: g,
                value: m,
                accessList: y,
                gasPrice: v,
              } = e;
              !(function (e) {
                let {
                  chainId: t,
                  maxPriorityFeePerGas: n,
                  gasPrice: r,
                  maxFeePerGas: i,
                  to: s,
                } = e;
                if (t <= 0) throw new l.hJ({ chainId: t });
                if (s && !(0, f.U)(s)) throw new u.b({ address: s });
                if (n || i)
                  throw new c.G(
                    "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute."
                  );
                if (r && r > 2n ** 256n - 1n)
                  throw new h.Hh({ maxFeePerGas: r });
              })(e);
              let w = p(y),
                x = [
                  (0, o.NC)(n),
                  b ? (0, o.NC)(b) : "0x",
                  v ? (0, o.NC)(v) : "0x",
                  r ? (0, o.NC)(r) : "0x",
                  g ?? "0x",
                  m ? (0, o.NC)(m) : "0x",
                  d ?? "0x",
                  w,
                ];
              if (t) {
                let e =
                  0n === t.v
                    ? "0x"
                    : 1n === t.v
                    ? (0, o.NC)(1)
                    : 27n === t.v
                    ? "0x"
                    : (0, o.NC)(1);
                x.push(e, (0, s.f)(t.r), (0, s.f)(t.s));
              }
              return (0, i.SM)(["0x01", (0, a.LV)(x)]);
            })(e, t)
          : (function (e, t) {
              let {
                chainId: n = 0,
                gas: i,
                data: s,
                nonce: d,
                to: p,
                value: b,
                gasPrice: g,
              } = e;
              !(function (e) {
                let {
                  chainId: t,
                  maxPriorityFeePerGas: n,
                  gasPrice: r,
                  maxFeePerGas: i,
                  to: s,
                  accessList: o,
                } = e;
                if (s && !(0, f.U)(s)) throw new u.b({ address: s });
                if (void 0 !== t && t <= 0) throw new l.hJ({ chainId: t });
                if (n || i)
                  throw new c.G(
                    "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute."
                  );
                if (r && r > 2n ** 256n - 1n)
                  throw new h.Hh({ maxFeePerGas: r });
                if (o)
                  throw new c.G(
                    "`accessList` is not a valid Legacy Transaction attribute."
                  );
              })(e);
              let m = [
                d ? (0, o.NC)(d) : "0x",
                g ? (0, o.NC)(g) : "0x",
                i ? (0, o.NC)(i) : "0x",
                p ?? "0x",
                b ? (0, o.NC)(b) : "0x",
                s ?? "0x",
              ];
              if (t) {
                let e = (() => {
                  if (t.v >= 35n)
                    return (t.v - 35n) / 2n > 0
                      ? t.v
                      : 27n + (35n === t.v ? 0n : 1n);
                  if (n > 0) return BigInt(2 * n) + BigInt(35n + t.v - 27n);
                  let e = 27n + (27n === t.v ? 0n : 1n);
                  if (t.v !== e) throw new r.vl({ v: t.v });
                  return e;
                })();
                m = [...m, (0, o.NC)(e), t.r, t.s];
              } else n > 0 && (m = [...m, (0, o.NC)(n), "0x", "0x"]);
              return (0, a.LV)(m);
            })(e, t);
      }
    },
    51123: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return s;
        },
      });
      var r = n(67638),
        i = n(30045);
      function s(e, t = "wei") {
        return (0, i.b)(e, r.ez[t]);
      }
    },
    20899: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return s;
        },
      });
      var r = n(67638),
        i = n(30045);
      function s(e, t = "wei") {
        return (0, i.b)(e, r.Zn[t]);
      }
    },
    30045: function (e, t, n) {
      "use strict";
      function r(e, t) {
        let n = e.toString(),
          r = n.startsWith("-");
        r && (n = n.slice(1));
        let [i, s] = [
          (n = n.padStart(t, "0")).slice(0, n.length - t),
          n.slice(n.length - t),
        ];
        return (
          (s = s.replace(/(0+)$/, "")),
          `${r ? "-" : ""}${i || "0"}${s ? `.${s}` : ""}`
        );
      }
      n.d(t, {
        b: function () {
          return r;
        },
      });
    },
  },
]);
