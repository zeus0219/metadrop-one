(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1620],
  {
    61200: function (t, e, n) {
      "use strict";
      var r = n(90275),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      t.exports = function (t, e) {
        var n,
          a,
          i,
          c,
          u,
          s,
          f,
          l,
          d = !1;
        e || (e = {}), (i = e.debug || !1);
        try {
          if (
            ((u = r()),
            (s = document.createRange()),
            (f = document.getSelection()),
            ((l = document.createElement("span")).textContent = t),
            (l.ariaHidden = "true"),
            (l.style.all = "unset"),
            (l.style.position = "fixed"),
            (l.style.top = 0),
            (l.style.clip = "rect(0, 0, 0, 0)"),
            (l.style.whiteSpace = "pre"),
            (l.style.webkitUserSelect = "text"),
            (l.style.MozUserSelect = "text"),
            (l.style.msUserSelect = "text"),
            (l.style.userSelect = "text"),
            l.addEventListener("copy", function (n) {
              if ((n.stopPropagation(), e.format)) {
                if ((n.preventDefault(), void 0 === n.clipboardData)) {
                  i && console.warn("unable to use e.clipboardData"),
                    i && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var r = o[e.format] || o.default;
                  window.clipboardData.setData(r, t);
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(e.format, t);
              }
              e.onCopy && (n.preventDefault(), e.onCopy(n.clipboardData));
            }),
            document.body.appendChild(l),
            s.selectNodeContents(l),
            f.addRange(s),
            !document.execCommand("copy"))
          )
            throw Error("copy command was unsuccessful");
          d = !0;
        } catch (r) {
          i && console.error("unable to copy using execCommand: ", r),
            i && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(e.format || "text", t),
              e.onCopy && e.onCopy(window.clipboardData),
              (d = !0);
          } catch (r) {
            i && console.error("unable to copy using clipboardData: ", r),
              i && console.error("falling back to prompt"),
              (n =
                "message" in e
                  ? e.message
                  : "Copy to clipboard: #{key}, Enter"),
              (a =
                (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C"),
              (c = n.replace(/#{\s*key\s*}/g, a)),
              window.prompt(c, t);
          }
        } finally {
          f &&
            ("function" == typeof f.removeRange
              ? f.removeRange(s)
              : f.removeAllRanges()),
            l && document.body.removeChild(l),
            u();
        }
        return d;
      };
    },
    38941: function (t, e, n) {
      var r = n(29283).Symbol;
      t.exports = r;
    },
    40389: function (t, e, n) {
      var r = n(38941),
        o = n(24793),
        a = n(15798),
        i = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : i && i in Object(t)
          ? o(t)
          : a(t);
      };
    },
    12080: function (t, e, n) {
      var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
      t.exports = r;
    },
    24793: function (t, e, n) {
      var r = n(38941),
        o = Object.prototype,
        a = o.hasOwnProperty,
        i = o.toString,
        c = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        var e = a.call(t, c),
          n = t[c];
        try {
          t[c] = void 0;
          var r = !0;
        } catch (t) {}
        var o = i.call(t);
        return r && (e ? (t[c] = n) : delete t[c]), o;
      };
    },
    15798: function (t) {
      var e = Object.prototype.toString;
      t.exports = function (t) {
        return e.call(t);
      };
    },
    29283: function (t, e, n) {
      var r = n(12080),
        o = "object" == typeof self && self && self.Object === Object && self,
        a = r || o || Function("return this")();
      t.exports = a;
    },
    34578: function (t) {
      t.exports = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
    },
    45376: function (t) {
      t.exports = function (t) {
        return null != t && "object" == typeof t;
      };
    },
    95599: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return c;
        },
      });
      var r = n(61200),
        o = n.n(r),
        a = n(15039),
        i = function (t) {
          void 0 === t && (t = {});
          var e = (0, a.useState)(t),
            n = e[0],
            r = e[1];
          return [
            n,
            (0, a.useCallback)(function (t) {
              r(function (e) {
                return Object.assign({}, e, t instanceof Function ? t(e) : t);
              });
            }, []),
          ];
        },
        c = function () {
          var t,
            e,
            n =
              ((t = (0, a.useRef)(!1)),
              (e = (0, a.useCallback)(function () {
                return t.current;
              }, [])),
              (0, a.useEffect)(function () {
                return (
                  (t.current = !0),
                  function () {
                    t.current = !1;
                  }
                );
              }, []),
              e),
            r = i({ value: void 0, error: void 0, noUserInteraction: !0 }),
            c = r[0],
            u = r[1];
          return [
            c,
            (0, a.useCallback)(function (t) {
              if (n())
                try {
                  if ("string" != typeof t && "number" != typeof t) {
                    var e,
                      r,
                      a = Error(
                        "Cannot copy typeof " +
                          typeof t +
                          " to clipboard, must be a string"
                      );
                    u({ value: t, error: a, noUserInteraction: !0 });
                    return;
                  }
                  if ("" === t) {
                    var a = Error("Cannot copy empty string to clipboard.");
                    u({ value: t, error: a, noUserInteraction: !0 });
                    return;
                  }
                  (r = t.toString()),
                    (e = o()(r)),
                    u({ value: r, error: void 0, noUserInteraction: e });
                } catch (t) {
                  u({ value: r, error: t, noUserInteraction: e });
                }
            }, []),
          ];
        };
    },
    90275: function (t) {
      t.exports = function () {
        var t = document.getSelection();
        if (!t.rangeCount) return function () {};
        for (
          var e = document.activeElement, n = [], r = 0;
          r < t.rangeCount;
          r++
        )
          n.push(t.getRangeAt(r));
        switch (e.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            e.blur();
            break;
          default:
            e = null;
        }
        return (
          t.removeAllRanges(),
          function () {
            "Caret" === t.type && t.removeAllRanges(),
              t.rangeCount ||
                n.forEach(function (e) {
                  t.addRange(e);
                }),
              e && e.focus();
          }
        );
      };
    },
    39014: function (t, e, n) {
      "use strict";
      n.d(e, {
        FF: function () {
          return x;
        },
        S5: function () {
          return p;
        },
        Wd: function () {
          return m;
        },
        bytesToNumberBE: function () {
          return f;
        },
        ci: function () {
          return c;
        },
        dQ: function () {
          return g;
        },
        eV: function () {
          return h;
        },
        hexToBytes: function () {
          return s;
        },
        n$: function () {
          return v;
        },
        ql: function () {
          return y;
        },
        tL: function () {
          return d;
        },
        ty: function () {
          return l;
        },
      }),
        BigInt(0);
      let r = BigInt(1),
        o = BigInt(2),
        a = (t) => t instanceof Uint8Array,
        i = Array.from({ length: 256 }, (t, e) =>
          e.toString(16).padStart(2, "0")
        );
      function c(t) {
        if (!a(t)) throw Error("Uint8Array expected");
        let e = "";
        for (let n = 0; n < t.length; n++) e += i[t[n]];
        return e;
      }
      function u(t) {
        if ("string" != typeof t)
          throw Error("hex string expected, got " + typeof t);
        return BigInt("" === t ? "0" : `0x${t}`);
      }
      function s(t) {
        if ("string" != typeof t)
          throw Error("hex string expected, got " + typeof t);
        let e = t.length;
        if (e % 2)
          throw Error(
            "padded hex string expected, got unpadded hex of length " + e
          );
        let n = new Uint8Array(e / 2);
        for (let e = 0; e < n.length; e++) {
          let r = 2 * e,
            o = Number.parseInt(t.slice(r, r + 2), 16);
          if (Number.isNaN(o) || o < 0) throw Error("Invalid byte sequence");
          n[e] = o;
        }
        return n;
      }
      function f(t) {
        return u(c(t));
      }
      function l(t) {
        if (!a(t)) throw Error("Uint8Array expected");
        return u(c(Uint8Array.from(t).reverse()));
      }
      function d(t, e) {
        return s(t.toString(16).padStart(2 * e, "0"));
      }
      function p(t, e) {
        return d(t, e).reverse();
      }
      function y(t, e, n) {
        let r;
        if ("string" == typeof e)
          try {
            r = s(e);
          } catch (n) {
            throw Error(
              `${t} must be valid hex string, got "${e}". Cause: ${n}`
            );
          }
        else if (a(e)) r = Uint8Array.from(e);
        else throw Error(`${t} must be hex string or Uint8Array`);
        let o = r.length;
        if ("number" == typeof n && o !== n)
          throw Error(`${t} expected ${n} bytes, got ${o}`);
        return r;
      }
      function h(...t) {
        let e = new Uint8Array(t.reduce((t, e) => t + e.length, 0)),
          n = 0;
        return (
          t.forEach((t) => {
            if (!a(t)) throw Error("Uint8Array expected");
            e.set(t, n), (n += t.length);
          }),
          e
        );
      }
      function m(t, e) {
        if (t.length !== e.length) return !1;
        for (let n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
        return !0;
      }
      let g = (t) => (o << BigInt(t - 1)) - r,
        w = (t) => new Uint8Array(t),
        b = (t) => Uint8Array.from(t);
      function v(t, e, n) {
        if ("number" != typeof t || t < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof e || e < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof n) throw Error("hmacFn must be a function");
        let r = w(t),
          o = w(t),
          a = 0,
          i = () => {
            r.fill(1), o.fill(0), (a = 0);
          },
          c = (...t) => n(o, r, ...t),
          u = (t = w()) => {
            (o = c(b([0]), t)),
              (r = c()),
              0 !== t.length && ((o = c(b([1]), t)), (r = c()));
          },
          s = () => {
            if (a++ >= 1e3) throw Error("drbg: tried 1000 values");
            let t = 0,
              n = [];
            for (; t < e; ) {
              let e = (r = c()).slice();
              n.push(e), (t += r.length);
            }
            return h(...n);
          };
        return (t, e) => {
          let n;
          for (i(), u(t); !(n = e(s())); ) u();
          return i(), n;
        };
      }
      let C = {
        bigint: (t) => "bigint" == typeof t,
        function: (t) => "function" == typeof t,
        boolean: (t) => "boolean" == typeof t,
        string: (t) => "string" == typeof t,
        stringOrUint8Array: (t) =>
          "string" == typeof t || t instanceof Uint8Array,
        isSafeInteger: (t) => Number.isSafeInteger(t),
        array: (t) => Array.isArray(t),
        field: (t, e) => e.Fp.isValid(t),
        hash: (t) =>
          "function" == typeof t && Number.isSafeInteger(t.outputLen),
      };
      function x(t, e, n = {}) {
        let r = (e, n, r) => {
          let o = C[n];
          if ("function" != typeof o)
            throw Error(`Invalid validator "${n}", expected function`);
          let a = t[e];
          if ((!r || void 0 !== a) && !o(a, t))
            throw Error(
              `Invalid param ${String(e)}=${a} (${typeof a}), expected ${n}`
            );
        };
        for (let [t, n] of Object.entries(e)) r(t, n, !1);
        for (let [t, e] of Object.entries(n)) r(t, e, !0);
        return t;
      }
    },
    54350: function (t, e, n) {
      "use strict";
      n.d(e, {
        u: function () {
          return o;
        },
      });
      var r = n(92931);
      function o(t, e = {}) {
        let n = (function (t, e = {}) {
          let n;
          try {
            n = t.getClient(e);
          } catch {}
          return n;
        })(t, e);
        return n?.extend(r.I);
      }
    },
    4897: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return m;
        },
      });
      var r = n(9566),
        o = n(19551),
        a = n(29893),
        i = n(11588),
        c = n(213),
        u = n(98816),
        s = n(38319),
        f = n(12800),
        l = n(93351),
        d = n(31095),
        p = n(72002),
        y = n(40156),
        h = n(30722);
      async function m(t, e) {
        let {
          account: n = t.account,
          chain: m = t.chain,
          accessList: g,
          data: w,
          gas: b,
          gasPrice: v,
          maxFeePerGas: C,
          maxPriorityFeePerGas: x,
          nonce: E,
          to: I,
          value: T,
          ...q
        } = e;
        if (!n)
          throw new o.o({ docsPath: "/docs/actions/wallet/sendTransaction" });
        let U = (0, r.T)(n);
        try {
          let n;
          if (
            ((0, d.F)(e),
            null !== m &&
              ((n = await (0, l.s)(t, p.L, "getChainId")({})),
              (0, a.q)({ currentChainId: n, chain: m })),
            "local" === U.type)
          ) {
            let e = await (0, l.s)(
              t,
              y.Z,
              "prepareTransactionRequest"
            )({
              account: U,
              accessList: g,
              chain: m,
              data: w,
              gas: b,
              gasPrice: v,
              maxFeePerGas: C,
              maxPriorityFeePerGas: x,
              nonce: E,
              to: I,
              value: T,
              ...q,
            });
            n || (n = await (0, l.s)(t, p.L, "getChainId")({}));
            let r = m?.serializers?.transaction,
              o = await U.signTransaction(
                { ...e, chainId: n },
                { serializer: r }
              );
            return await (0, l.s)(
              t,
              h.p,
              "sendRawTransaction"
            )({ serializedTransaction: o });
          }
          let r = t.chain?.formatters?.transactionRequest?.format,
            o = (r || f.tG)({
              ...(0, s.K)(q, { format: r }),
              accessList: g,
              data: w,
              from: U.address,
              gas: b,
              gasPrice: v,
              maxFeePerGas: C,
              maxPriorityFeePerGas: x,
              nonce: E,
              to: I,
              value: T,
            });
          return await t.request(
            { method: "eth_sendTransaction", params: [o] },
            { retryCount: 0 }
          );
        } catch (t) {
          throw (function (t, { docsPath: e, ...n }) {
            let r = (() => {
              let e = (0, u.k)(t, n);
              return e instanceof i.cj ? t : e;
            })();
            return new c.mk(r, { docsPath: e, ...n });
          })(t, { ...e, account: U, chain: e.chain || void 0 });
        }
      }
    },
    81452: function (t, e, n) {
      "use strict";
      n.d(e, {
        n: function () {
          return i;
        },
      });
      var r = n(824),
        o = n(93351),
        a = n(4897);
      async function i(t, e) {
        let {
            abi: n,
            address: i,
            args: c,
            dataSuffix: u,
            functionName: s,
            ...f
          } = e,
          l = (0, r.R)({ abi: n, args: c, functionName: s });
        return (0, o.s)(
          t,
          a.T,
          "sendTransaction"
        )({ data: `${l}${u ? u.replace("0x", "") : ""}`, to: i, ...f });
      }
    },
    29893: function (t, e, n) {
      "use strict";
      n.d(e, {
        q: function () {
          return o;
        },
      });
      var r = n(18741);
      function o({ chain: t, currentChainId: e }) {
        if (!t) throw new r.Bk();
        if (e !== t.id) throw new r.Yl({ chain: t, currentChainId: e });
      }
    },
    78906: function (t, e, n) {
      "use strict";
      n.d(e, {
        r: function () {
          return i;
        },
      });
      var r = n(42196),
        o = n(52796),
        a = n(66616);
      function i(t, e) {
        let n =
            "string" == typeof t
              ? (0, o.qX)(t)
              : t.raw instanceof Uint8Array
              ? t.raw
              : (0, o.O0)(t.raw),
          i = (0, o.qX)(`Ethereum Signed Message:
${n.length}`);
        return (0, a.w)((0, r.zo)([i, n]), e);
      }
    },
    21249: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return u;
        },
      });
      var r = n(68882),
        o = n(42196),
        a = n(98617),
        i = n(66616),
        c = n(51216);
      function u(t) {
        let { domain: e = {}, message: n, primaryType: r } = t,
          a = { EIP712Domain: (0, c.cj)({ domain: e }), ...t.types };
        (0, c.iC)({ domain: e, message: n, primaryType: r, types: a });
        let u = ["0x1901"];
        return (
          e &&
            u.push(
              (function ({ domain: t, types: e }) {
                return s({ data: t, primaryType: "EIP712Domain", types: e });
              })({ domain: e, types: a })
            ),
          "EIP712Domain" !== r &&
            u.push(s({ data: n, primaryType: r, types: a })),
          (0, i.w)((0, o.zo)(u))
        );
      }
      function s({ data: t, primaryType: e, types: n }) {
        let o = (function t({ data: e, primaryType: n, types: o }) {
          let c = [{ type: "bytes32" }],
            u = [
              (function ({ primaryType: t, types: e }) {
                let n = (0, a.NC)(
                  (function ({ primaryType: t, types: e }) {
                    let n = "",
                      r = (function t(
                        { primaryType: e, types: n },
                        r = new Set()
                      ) {
                        let o = e.match(/^\w*/u),
                          a = o?.[0];
                        if (r.has(a) || void 0 === n[a]) return r;
                        for (let e of (r.add(a), n[a]))
                          t({ primaryType: e.type, types: n }, r);
                        return r;
                      })({ primaryType: t, types: e });
                    for (let o of (r.delete(t), [t, ...Array.from(r).sort()]))
                      n += `${o}(${e[o]
                        .map(({ name: t, type: e }) => `${e} ${t}`)
                        .join(",")})`;
                    return n;
                  })({ primaryType: t, types: e })
                );
                return (0, i.w)(n);
              })({ primaryType: n, types: o }),
            ];
          for (let s of o[n]) {
            let [n, f] = (function e({ types: n, name: o, type: c, value: u }) {
              if (void 0 !== n[c])
                return [
                  { type: "bytes32" },
                  (0, i.w)(t({ data: u, primaryType: c, types: n })),
                ];
              if ("bytes" === c) {
                let t = u.length % 2 ? "0" : "";
                return (
                  (u = `0x${t + u.slice(2)}`),
                  [{ type: "bytes32" }, (0, i.w)(u)]
                );
              }
              if ("string" === c)
                return [{ type: "bytes32" }, (0, i.w)((0, a.NC)(u))];
              if (c.lastIndexOf("]") === c.length - 1) {
                let t = c.slice(0, c.lastIndexOf("[")),
                  a = u.map((r) => e({ name: o, type: t, types: n, value: r }));
                return [
                  { type: "bytes32" },
                  (0, i.w)(
                    (0, r.E)(
                      a.map(([t]) => t),
                      a.map(([, t]) => t)
                    )
                  ),
                ];
              }
              return [{ type: c }, u];
            })({ types: o, name: s.name, type: s.type, value: e[s.name] });
            c.push(n), u.push(f);
          }
          return (0, r.E)(c, u);
        })({ data: t, primaryType: e, types: n });
        return (0, i.w)(o);
      }
    },
    51216: function (t, e, n) {
      "use strict";
      n.d(e, {
        cj: function () {
          return l;
        },
        iC: function () {
          return f;
        },
      });
      var r = n(18007),
        o = n(21997),
        a = n(79173),
        i = n(36338),
        c = n(98617);
      let u = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        s =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
      function f(t) {
        let { domain: e, message: n, primaryType: f, types: l } = t,
          d = (t, e) => {
            for (let n of t) {
              let { name: t, type: f } = n,
                p = e[t],
                y = f.match(s);
              if (y && ("number" == typeof p || "bigint" == typeof p)) {
                let [t, e, n] = y;
                (0, c.eC)(p, { signed: "int" === e, size: parseInt(n) / 8 });
              }
              if ("address" === f && "string" == typeof p && !(0, a.U)(p))
                throw new o.b({ address: p });
              let h = f.match(u);
              if (h) {
                let [t, e] = h;
                if (e && (0, i.d)(p) !== parseInt(e))
                  throw new r.KY({
                    expectedSize: parseInt(e),
                    givenSize: (0, i.d)(p),
                  });
              }
              let m = l[f];
              m && d(m, p);
            }
          };
        l.EIP712Domain && e && d(l.EIP712Domain, e),
          "EIP712Domain" !== f && d(l[f], n);
      }
      function l({ domain: t }) {
        return [
          "string" == typeof t?.name && { name: "name", type: "string" },
          t?.version && { name: "version", type: "string" },
          "number" == typeof t?.chainId && { name: "chainId", type: "uint256" },
          t?.verifyingContract && {
            name: "verifyingContract",
            type: "address",
          },
          t?.salt && { name: "salt", type: "bytes32" },
        ].filter(Boolean);
      }
    },
    74020: function (t, e, n) {
      "use strict";
      n.d(e, {
        u: function () {
          return u;
        },
      });
      var r = n(64456),
        o = n(99631),
        a = n(23753),
        i = n(13173),
        c = n(8979);
      function u(t = {}) {
        let { abi: e, address: n, functionName: u, query: s = {} } = t,
          f = (0, c.Z)(t),
          l = (0, i.x)(),
          d = (function (t, e = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let o = e.abi;
                if (!o) throw Error("abi is required");
                let { address: a, functionName: i, scopeKey: c, ...u } = n[1];
                if (!a) throw Error("address is required");
                if (!i) throw Error("functionName is required");
                let s = u.args;
                return (0, r.L)(t, {
                  abi: o,
                  address: a,
                  functionName: i,
                  args: s,
                  ...u,
                });
              },
              queryKey: (function (t = {}) {
                let { abi: e, ...n } = t;
                return ["readContract", (0, o.O)(n)];
              })(e),
            };
          })(f, { ...t, chainId: t.chainId ?? l }),
          p = !!(n && e && u && (s.enabled ?? !0));
        return (0, a.aM)({
          ...s,
          ...d,
          enabled: p,
          structuralSharing: s.structuralSharing ?? a.if,
        });
      }
    },
    78100: function (t, e, n) {
      "use strict";
      n.d(e, {
        p: function () {
          return B;
        },
      });
      var r = n(89721),
        o = n(72002),
        a = n(98617);
      async function i(t, { chain: e }) {
        let {
          id: n,
          name: r,
          nativeCurrency: o,
          rpcUrls: i,
          blockExplorers: c,
        } = e;
        await t.request(
          {
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: (0, a.eC)(n),
                chainName: r,
                nativeCurrency: o,
                rpcUrls: i.default.http,
                blockExplorerUrls: c
                  ? Object.values(c).map(({ url: t }) => t)
                  : void 0,
              },
            ],
          },
          { retryCount: 0 }
        );
      }
      var c = n(6326),
        u = n(4897),
        s = n(66447);
      async function f(t) {
        return t.account?.type === "local"
          ? [t.account.address]
          : (await t.request({ method: "eth_accounts" })).map((t) =>
              (0, s.x)(t)
            );
      }
      async function l(t) {
        return await t.request({ method: "wallet_getPermissions" });
      }
      var d = n(40156);
      async function p(t) {
        return (
          await t.request({ method: "eth_requestAccounts" }, { retryCount: 0 })
        ).map((t) => (0, s.K)(t));
      }
      async function y(t, e) {
        return t.request(
          { method: "wallet_requestPermissions", params: [e] },
          { retryCount: 0 }
        );
      }
      var h = n(30722),
        m = n(13947),
        g = n(9566),
        w = n(19551),
        b = n(29893),
        v = n(12800),
        C = n(93351),
        x = n(31095);
      async function E(t, e) {
        let { account: n = t.account, chain: r = t.chain, ...i } = e;
        if (!n)
          throw new w.o({ docsPath: "/docs/actions/wallet/signTransaction" });
        let c = (0, g.T)(n);
        (0, x.F)({ account: c, ...e });
        let u = await (0, C.s)(t, o.L, "getChainId")({});
        null !== r && (0, b.q)({ currentChainId: u, chain: r });
        let s = r?.formatters || t.chain?.formatters,
          f = s?.transactionRequest?.format || v.tG;
        return "local" === c.type
          ? c.signTransaction(
              { ...i, chainId: u },
              { serializer: t.chain?.serializers?.transaction }
            )
          : await t.request(
              {
                method: "eth_signTransaction",
                params: [{ ...f(i), chainId: (0, a.eC)(u), from: c.address }],
              },
              { retryCount: 0 }
            );
      }
      var I = n(82701),
        T = n(75684),
        q = n(51216);
      async function U(t, e) {
        let {
          account: n = t.account,
          domain: r,
          message: o,
          primaryType: a,
        } = e;
        if (!n)
          throw new w.o({ docsPath: "/docs/actions/wallet/signTypedData" });
        let i = (0, g.T)(n),
          c = { EIP712Domain: (0, q.cj)({ domain: r }), ...e.types };
        if (
          ((0, q.iC)({ domain: r, message: o, primaryType: a, types: c }),
          "local" === i.type)
        )
          return i.signTypedData({
            domain: r,
            message: o,
            primaryType: a,
            types: c,
          });
        let u = (0, T.P)(
          { domain: r ?? {}, message: o, primaryType: a, types: c },
          (t, e) => ((0, I.v)(e) ? e.toLowerCase() : e)
        );
        return t.request(
          { method: "eth_signTypedData_v4", params: [i.address, u] },
          { retryCount: 0 }
        );
      }
      async function A(t, { id: e }) {
        await t.request(
          {
            method: "wallet_switchEthereumChain",
            params: [{ chainId: (0, a.eC)(e) }],
          },
          { retryCount: 0 }
        );
      }
      async function S(t, e) {
        return await t.request(
          { method: "wallet_watchAsset", params: e },
          { retryCount: 0 }
        );
      }
      var D = n(81452);
      function $(t) {
        return {
          addChain: (e) => i(t, e),
          deployContract: (e) =>
            (function (t, e) {
              let { abi: n, args: r, bytecode: o, ...a } = e,
                i = (0, c.w)({ abi: n, args: r, bytecode: o });
              return (0, u.T)(t, { ...a, data: i });
            })(t, e),
          getAddresses: () => f(t),
          getChainId: () => (0, o.L)(t),
          getPermissions: () => l(t),
          prepareTransactionRequest: (e) => (0, d.Z)(t, e),
          requestAddresses: () => p(t),
          requestPermissions: (e) => y(t, e),
          sendRawTransaction: (e) => (0, h.p)(t, e),
          sendTransaction: (e) => (0, u.T)(t, e),
          signMessage: (e) => (0, m.l)(t, e),
          signTransaction: (e) => E(t, e),
          signTypedData: (e) => U(t, e),
          switchChain: (e) => A(t, e),
          watchAsset: (e) => S(t, e),
          writeContract: (e) => (0, D.n)(t, e),
        };
      }
      var j = n(13360);
      async function N(t, e = {}) {
        let n = await (0, j.e)(t, e);
        return n.extend($), n.extend($);
      }
      var O = n(99631),
        P = n(15039),
        R = n(23753),
        k = n(91818),
        _ = n(13173),
        L = n(8979);
      function B(t = {}) {
        let { query: e = {}, ...n } = t,
          o = (0, L.Z)(n),
          a = (0, r.NL)(),
          { address: i, connector: c, status: u } = (0, k.m)(),
          s = (0, _.x)(),
          { queryKey: f, ...l } = (function (t, e = {}) {
            return {
              gcTime: 0,
              async queryFn({ queryKey: n }) {
                let { connector: r } = e,
                  { connectorUid: o, scopeKey: a, ...i } = n[1];
                return N(t, { ...i, connector: r });
              },
              queryKey: (function (t = {}) {
                let { connector: e, ...n } = t;
                return [
                  "walletClient",
                  { ...(0, O.O)(n), connectorUid: e?.uid },
                ];
              })(e),
            };
          })(o, { ...t, chainId: t.chainId ?? s, connector: t.connector ?? c }),
          d = !!("disconnected" !== u && (e.enabled ?? !0));
        return (
          (0, P.useEffect)(() => {
            i
              ? a.invalidateQueries({ queryKey: f })
              : a.removeQueries({ queryKey: f });
          }, [i, a]),
          (0, R.aM)({ ...e, ...l, queryKey: f, enabled: d, staleTime: 1 / 0 })
        );
      }
    },
  },
]);
