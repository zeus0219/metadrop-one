(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8455],
  {
    32815: function (e, t, r) {
      "use strict";
      r.d(t, {
        i: function () {
          return n;
        },
      });
      let n = "abi/5.7.0";
    },
    32481: function (e, t, r) {
      "use strict";
      r.d(t, {
        R: function () {
          return N;
        },
        $: function () {
          return R;
        },
      });
      var n = r(7730),
        i = r(50357),
        o = r(67214),
        s = r(32815),
        a = r(783),
        l = r(56805);
      class u extends a.XI {
        constructor(e) {
          super("address", "address", e, !1);
        }
        defaultValue() {
          return "0x0000000000000000000000000000000000000000";
        }
        encode(e, t) {
          try {
            t = (0, l.getAddress)(t);
          } catch (e) {
            this._throwError(e.message, t);
          }
          return e.writeValue(t);
        }
        decode(e) {
          return (0, l.getAddress)(
            (0, n.hexZeroPad)(e.readValue().toHexString(), 20)
          );
        }
      }
      class c extends a.XI {
        constructor(e) {
          super(e.name, e.type, void 0, e.dynamic), (this.coder = e);
        }
        defaultValue() {
          return this.coder.defaultValue();
        }
        encode(e, t) {
          return this.coder.encode(e, t);
        }
        decode(e) {
          return this.coder.decode(e);
        }
      }
      let f = new o.Logger(s.i);
      function h(e, t, r) {
        let n = null;
        if (Array.isArray(r)) n = r;
        else if (r && "object" == typeof r) {
          let e = {};
          n = t.map((t) => {
            let n = t.localName;
            return (
              n ||
                f.throwError(
                  "cannot encode object for signature with missing names",
                  o.Logger.errors.INVALID_ARGUMENT,
                  { argument: "values", coder: t, value: r }
                ),
              e[n] &&
                f.throwError(
                  "cannot encode object for signature with duplicate names",
                  o.Logger.errors.INVALID_ARGUMENT,
                  { argument: "values", coder: t, value: r }
                ),
              (e[n] = !0),
              r[n]
            );
          });
        } else f.throwArgumentError("invalid tuple value", "tuple", r);
        t.length !== n.length &&
          f.throwArgumentError("types/value length mismatch", "tuple", r);
        let i = new a.QV(e.wordSize),
          s = new a.QV(e.wordSize),
          l = [];
        return (
          t.forEach((e, t) => {
            let r = n[t];
            if (e.dynamic) {
              let t = s.length;
              e.encode(s, r);
              let n = i.writeUpdatableValue();
              l.push((e) => {
                n(e + t);
              });
            } else e.encode(i, r);
          }),
          l.forEach((e) => {
            e(i.length);
          }),
          e.appendWriter(i) + e.appendWriter(s)
        );
      }
      function d(e, t) {
        let r = [],
          n = e.subReader(0);
        t.forEach((t) => {
          let i = null;
          if (t.dynamic) {
            let r = e.readValue(),
              s = n.subReader(r.toNumber());
            try {
              i = t.decode(s);
            } catch (e) {
              if (e.code === o.Logger.errors.BUFFER_OVERRUN) throw e;
              ((i = e).baseType = t.name),
                (i.name = t.localName),
                (i.type = t.type);
            }
          } else
            try {
              i = t.decode(e);
            } catch (e) {
              if (e.code === o.Logger.errors.BUFFER_OVERRUN) throw e;
              ((i = e).baseType = t.name),
                (i.name = t.localName),
                (i.type = t.type);
            }
          void 0 != i && r.push(i);
        });
        let i = t.reduce((e, t) => {
          let r = t.localName;
          return r && (e[r] || (e[r] = 0), e[r]++), e;
        }, {});
        t.forEach((e, t) => {
          let n = e.localName;
          if (
            !n ||
            1 !== i[n] ||
            ("length" === n && (n = "_length"), null != r[n])
          )
            return;
          let o = r[t];
          o instanceof Error
            ? Object.defineProperty(r, n, {
                enumerable: !0,
                get: () => {
                  throw o;
                },
              })
            : (r[n] = o);
        });
        for (let e = 0; e < r.length; e++) {
          let t = r[e];
          t instanceof Error &&
            Object.defineProperty(r, e, {
              enumerable: !0,
              get: () => {
                throw t;
              },
            });
        }
        return Object.freeze(r);
      }
      class p extends a.XI {
        constructor(e, t, r) {
          super(
            "array",
            e.type + "[" + (t >= 0 ? t : "") + "]",
            r,
            -1 === t || e.dynamic
          ),
            (this.coder = e),
            (this.length = t);
        }
        defaultValue() {
          let e = this.coder.defaultValue(),
            t = [];
          for (let r = 0; r < this.length; r++) t.push(e);
          return t;
        }
        encode(e, t) {
          Array.isArray(t) || this._throwError("expected array value", t);
          let r = this.length;
          -1 === r && ((r = t.length), e.writeValue(t.length)),
            f.checkArgumentCount(
              t.length,
              r,
              "coder array" + (this.localName ? " " + this.localName : "")
            );
          let n = [];
          for (let e = 0; e < t.length; e++) n.push(this.coder);
          return h(e, n, t);
        }
        decode(e) {
          let t = this.length;
          -1 === t &&
            32 * (t = e.readValue().toNumber()) > e._data.length &&
            f.throwError(
              "insufficient data length",
              o.Logger.errors.BUFFER_OVERRUN,
              { length: e._data.length, count: t }
            );
          let r = [];
          for (let e = 0; e < t; e++) r.push(new c(this.coder));
          return e.coerce(this.name, d(e, r));
        }
      }
      class g extends a.XI {
        constructor(e) {
          super("bool", "bool", e, !1);
        }
        defaultValue() {
          return !1;
        }
        encode(e, t) {
          return e.writeValue(t ? 1 : 0);
        }
        decode(e) {
          return e.coerce(this.type, !e.readValue().isZero());
        }
      }
      class m extends a.XI {
        constructor(e, t) {
          super(e, e, t, !0);
        }
        defaultValue() {
          return "0x";
        }
        encode(e, t) {
          return (
            (t = (0, n.arrayify)(t)), e.writeValue(t.length) + e.writeBytes(t)
          );
        }
        decode(e) {
          return e.readBytes(e.readValue().toNumber(), !0);
        }
      }
      class y extends m {
        constructor(e) {
          super("bytes", e);
        }
        decode(e) {
          return e.coerce(this.name, (0, n.hexlify)(super.decode(e)));
        }
      }
      class v extends a.XI {
        constructor(e, t) {
          let r = "bytes" + String(e);
          super(r, r, t, !1), (this.size = e);
        }
        defaultValue() {
          return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(
            0,
            2 + 2 * this.size
          );
        }
        encode(e, t) {
          let r = (0, n.arrayify)(t);
          return (
            r.length !== this.size &&
              this._throwError("incorrect data length", t),
            e.writeBytes(r)
          );
        }
        decode(e) {
          return e.coerce(this.name, (0, n.hexlify)(e.readBytes(this.size)));
        }
      }
      class b extends a.XI {
        constructor(e) {
          super("null", "", e, !1);
        }
        defaultValue() {
          return null;
        }
        encode(e, t) {
          return null != t && this._throwError("not null", t), e.writeBytes([]);
        }
        decode(e) {
          return e.readBytes(0), e.coerce(this.name, null);
        }
      }
      var A = r(30466),
        w = r(73890);
      class E extends a.XI {
        constructor(e, t, r) {
          let n = (t ? "int" : "uint") + 8 * e;
          super(n, n, r, !1), (this.size = e), (this.signed = t);
        }
        defaultValue() {
          return 0;
        }
        encode(e, t) {
          let r = A.O$.from(t),
            n = w.Bz.mask(8 * e.wordSize);
          if (this.signed) {
            let e = n.mask(8 * this.size - 1);
            (r.gt(e) || r.lt(e.add(w.fh).mul(w.tL))) &&
              this._throwError("value out-of-bounds", t);
          } else
            (r.lt(w._Y) || r.gt(n.mask(8 * this.size))) &&
              this._throwError("value out-of-bounds", t);
          return (
            (r = r.toTwos(8 * this.size).mask(8 * this.size)),
            this.signed &&
              (r = r.fromTwos(8 * this.size).toTwos(8 * e.wordSize)),
            e.writeValue(r)
          );
        }
        decode(e) {
          let t = e.readValue().mask(8 * this.size);
          return (
            this.signed && (t = t.fromTwos(8 * this.size)),
            e.coerce(this.name, t)
          );
        }
      }
      var x = r(35321);
      class S extends m {
        constructor(e) {
          super("string", e);
        }
        defaultValue() {
          return "";
        }
        encode(e, t) {
          return super.encode(e, (0, x.Y0)(t));
        }
        decode(e) {
          return (0, x.ZN)(super.decode(e));
        }
      }
      class P extends a.XI {
        constructor(e, t) {
          let r = !1,
            n = [];
          e.forEach((e) => {
            e.dynamic && (r = !0), n.push(e.type);
          }),
            super("tuple", "tuple(" + n.join(",") + ")", t, r),
            (this.coders = e);
        }
        defaultValue() {
          let e = [];
          this.coders.forEach((t) => {
            e.push(t.defaultValue());
          });
          let t = this.coders.reduce((e, t) => {
            let r = t.localName;
            return r && (e[r] || (e[r] = 0), e[r]++), e;
          }, {});
          return (
            this.coders.forEach((r, n) => {
              let i = r.localName;
              i &&
                1 === t[i] &&
                ("length" === i && (i = "_length"),
                null == e[i] && (e[i] = e[n]));
            }),
            Object.freeze(e)
          );
        }
        encode(e, t) {
          return h(e, this.coders, t);
        }
        decode(e) {
          return e.coerce(this.name, d(e, this.coders));
        }
      }
      var O = r(56482);
      let k = new o.Logger(s.i),
        _ = new RegExp(/^bytes([0-9]*)$/),
        C = new RegExp(/^(u?int)([0-9]*)$/);
      class N {
        constructor(e) {
          (0, i.defineReadOnly)(this, "coerceFunc", e || null);
        }
        _getCoder(e) {
          switch (e.baseType) {
            case "address":
              return new u(e.name);
            case "bool":
              return new g(e.name);
            case "string":
              return new S(e.name);
            case "bytes":
              return new y(e.name);
            case "array":
              return new p(
                this._getCoder(e.arrayChildren),
                e.arrayLength,
                e.name
              );
            case "tuple":
              return new P(
                (e.components || []).map((e) => this._getCoder(e)),
                e.name
              );
            case "":
              return new b(e.name);
          }
          let t = e.type.match(C);
          if (t) {
            let r = parseInt(t[2] || "256");
            return (
              (0 === r || r > 256 || r % 8 != 0) &&
                k.throwArgumentError(
                  "invalid " + t[1] + " bit length",
                  "param",
                  e
                ),
              new E(r / 8, "int" === t[1], e.name)
            );
          }
          if ((t = e.type.match(_))) {
            let r = parseInt(t[1]);
            return (
              (0 === r || r > 32) &&
                k.throwArgumentError("invalid bytes length", "param", e),
              new v(r, e.name)
            );
          }
          return k.throwArgumentError("invalid type", "type", e.type);
        }
        _getWordSize() {
          return 32;
        }
        _getReader(e, t) {
          return new a.Ej(e, this._getWordSize(), this.coerceFunc, t);
        }
        _getWriter() {
          return new a.QV(this._getWordSize());
        }
        getDefaultValue(e) {
          return new P(
            e.map((e) => this._getCoder(O._R.from(e))),
            "_"
          ).defaultValue();
        }
        encode(e, t) {
          e.length !== t.length &&
            k.throwError(
              "types/values length mismatch",
              o.Logger.errors.INVALID_ARGUMENT,
              {
                count: { types: e.length, values: t.length },
                value: { types: e, values: t },
              }
            );
          let r = new P(
              e.map((e) => this._getCoder(O._R.from(e))),
              "_"
            ),
            n = this._getWriter();
          return r.encode(n, t), n.data;
        }
        decode(e, t, r) {
          return new P(
            e.map((e) => this._getCoder(O._R.from(e))),
            "_"
          ).decode(this._getReader((0, n.arrayify)(t), r));
        }
      }
      let R = new N();
    },
    783: function (e, t, r) {
      "use strict";
      r.d(t, {
        BR: function () {
          return u;
        },
        Ej: function () {
          return h;
        },
        QV: function () {
          return f;
        },
        XI: function () {
          return c;
        },
      });
      var n = r(7730),
        i = r(30466),
        o = r(50357),
        s = r(67214),
        a = r(32815);
      let l = new s.Logger(a.i);
      function u(e) {
        let t = [],
          r = function (e, n) {
            if (Array.isArray(n))
              for (let i in n) {
                let o = e.slice();
                o.push(i);
                try {
                  r(o, n[i]);
                } catch (e) {
                  t.push({ path: o, error: e });
                }
              }
          };
        return r([], e), t;
      }
      class c {
        constructor(e, t, r, n) {
          (this.name = e),
            (this.type = t),
            (this.localName = r),
            (this.dynamic = n);
        }
        _throwError(e, t) {
          l.throwArgumentError(e, this.localName, t);
        }
      }
      class f {
        constructor(e) {
          (0, o.defineReadOnly)(this, "wordSize", e || 32),
            (this._data = []),
            (this._dataLength = 0),
            (this._padding = new Uint8Array(e));
        }
        get data() {
          return (0, n.hexConcat)(this._data);
        }
        get length() {
          return this._dataLength;
        }
        _writeData(e) {
          return this._data.push(e), (this._dataLength += e.length), e.length;
        }
        appendWriter(e) {
          return this._writeData((0, n.concat)(e._data));
        }
        writeBytes(e) {
          let t = (0, n.arrayify)(e),
            r = t.length % this.wordSize;
          return (
            r && (t = (0, n.concat)([t, this._padding.slice(r)])),
            this._writeData(t)
          );
        }
        _getValue(e) {
          let t = (0, n.arrayify)(i.O$.from(e));
          return (
            t.length > this.wordSize &&
              l.throwError(
                "value out-of-bounds",
                s.Logger.errors.BUFFER_OVERRUN,
                { length: this.wordSize, offset: t.length }
              ),
            t.length % this.wordSize &&
              (t = (0, n.concat)([
                this._padding.slice(t.length % this.wordSize),
                t,
              ])),
            t
          );
        }
        writeValue(e) {
          return this._writeData(this._getValue(e));
        }
        writeUpdatableValue() {
          let e = this._data.length;
          return (
            this._data.push(this._padding),
            (this._dataLength += this.wordSize),
            (t) => {
              this._data[e] = this._getValue(t);
            }
          );
        }
      }
      class h {
        constructor(e, t, r, i) {
          (0, o.defineReadOnly)(this, "_data", (0, n.arrayify)(e)),
            (0, o.defineReadOnly)(this, "wordSize", t || 32),
            (0, o.defineReadOnly)(this, "_coerceFunc", r),
            (0, o.defineReadOnly)(this, "allowLoose", i),
            (this._offset = 0);
        }
        get data() {
          return (0, n.hexlify)(this._data);
        }
        get consumed() {
          return this._offset;
        }
        static coerce(e, t) {
          let r = e.match("^u?int([0-9]+)$");
          return r && 48 >= parseInt(r[1]) && (t = t.toNumber()), t;
        }
        coerce(e, t) {
          return this._coerceFunc ? this._coerceFunc(e, t) : h.coerce(e, t);
        }
        _peekBytes(e, t, r) {
          let n = Math.ceil(t / this.wordSize) * this.wordSize;
          return (
            this._offset + n > this._data.length &&
              (this.allowLoose && r && this._offset + t <= this._data.length
                ? (n = t)
                : l.throwError(
                    "data out-of-bounds",
                    s.Logger.errors.BUFFER_OVERRUN,
                    { length: this._data.length, offset: this._offset + n }
                  )),
            this._data.slice(this._offset, this._offset + n)
          );
        }
        subReader(e) {
          return new h(
            this._data.slice(this._offset + e),
            this.wordSize,
            this._coerceFunc,
            this.allowLoose
          );
        }
        readBytes(e, t) {
          let r = this._peekBytes(0, e, !!t);
          return (this._offset += r.length), r.slice(0, e);
        }
        readValue() {
          return i.O$.from(this.readBytes(this.wordSize));
        }
      }
    },
    56482: function (e, t, r) {
      "use strict";
      r.d(t, {
        HY: function () {
          return y;
        },
        IC: function () {
          return P;
        },
        QV: function () {
          return v;
        },
        Xg: function () {
          return E;
        },
        YW: function () {
          return x;
        },
        _R: function () {
          return g;
        },
        pc: function () {
          return d;
        },
      });
      var n = r(30466),
        i = r(50357),
        o = r(67214),
        s = r(32815);
      let a = new o.Logger(s.i),
        l = {},
        u = { calldata: !0, memory: !0, storage: !0 },
        c = { calldata: !0, memory: !0 };
      function f(e, t) {
        if ("bytes" === e || "string" === e) {
          if (u[t]) return !0;
        } else if ("address" === e) {
          if ("payable" === t) return !0;
        } else if ((e.indexOf("[") >= 0 || "tuple" === e) && c[t]) return !0;
        return (
          (u[t] || "payable" === t) &&
            a.throwArgumentError("invalid modifier", "name", t),
          !1
        );
      }
      function h(e, t) {
        for (let r in t) (0, i.defineReadOnly)(e, r, t[r]);
      }
      let d = Object.freeze({
          sighash: "sighash",
          minimal: "minimal",
          full: "full",
          json: "json",
        }),
        p = new RegExp(/^(.*)\[([0-9]*)\]$/);
      class g {
        constructor(e, t) {
          e !== l &&
            a.throwError(
              "use fromString",
              o.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new ParamType()" }
            ),
            h(this, t);
          let r = this.type.match(p);
          r
            ? h(this, {
                arrayLength: parseInt(r[2] || "-1"),
                arrayChildren: g.fromObject({
                  type: r[1],
                  components: this.components,
                }),
                baseType: "array",
              })
            : h(this, {
                arrayLength: null,
                arrayChildren: null,
                baseType: null != this.components ? "tuple" : this.type,
              }),
            (this._isParamType = !0),
            Object.freeze(this);
        }
        format(e) {
          if (
            (e || (e = d.sighash),
            d[e] || a.throwArgumentError("invalid format type", "format", e),
            e === d.json)
          ) {
            let t = {
              type: "tuple" === this.baseType ? "tuple" : this.type,
              name: this.name || void 0,
            };
            return (
              "boolean" == typeof this.indexed && (t.indexed = this.indexed),
              this.components &&
                (t.components = this.components.map((t) =>
                  JSON.parse(t.format(e))
                )),
              JSON.stringify(t)
            );
          }
          let t = "";
          return (
            "array" === this.baseType
              ? (t +=
                  this.arrayChildren.format(e) +
                  "[" +
                  (this.arrayLength < 0 ? "" : String(this.arrayLength)) +
                  "]")
              : "tuple" === this.baseType
              ? (e !== d.sighash && (t += this.type),
                (t +=
                  "(" +
                  this.components
                    .map((t) => t.format(e))
                    .join(e === d.full ? ", " : ",") +
                  ")"))
              : (t += this.type),
            e !== d.sighash &&
              (!0 === this.indexed && (t += " indexed"),
              e === d.full && this.name && (t += " " + this.name)),
            t
          );
        }
        static from(e, t) {
          return "string" == typeof e ? g.fromString(e, t) : g.fromObject(e);
        }
        static fromObject(e) {
          return g.isParamType(e)
            ? e
            : new g(l, {
                name: e.name || null,
                type: O(e.type),
                indexed: null == e.indexed ? null : !!e.indexed,
                components: e.components
                  ? e.components.map(g.fromObject)
                  : null,
              });
        }
        static fromString(e, t) {
          var r;
          return (
            (r = (function (e, t) {
              let r = e;
              function n(t) {
                a.throwArgumentError(
                  `unexpected character at position ${t}`,
                  "param",
                  e
                );
              }
              function i(e) {
                let r = {
                  type: "",
                  name: "",
                  parent: e,
                  state: { allowType: !0 },
                };
                return t && (r.indexed = !1), r;
              }
              e = e.replace(/\s/g, " ");
              let o = { type: "", name: "", state: { allowType: !0 } },
                s = o;
              for (let r = 0; r < e.length; r++) {
                let o = e[r];
                switch (o) {
                  case "(":
                    s.state.allowType && "" === s.type
                      ? (s.type = "tuple")
                      : s.state.allowParams || n(r),
                      (s.state.allowType = !1),
                      (s.type = O(s.type)),
                      (s.components = [i(s)]),
                      (s = s.components[0]);
                    break;
                  case ")":
                    delete s.state,
                      "indexed" === s.name &&
                        (t || n(r), (s.indexed = !0), (s.name = "")),
                      f(s.type, s.name) && (s.name = ""),
                      (s.type = O(s.type));
                    let a = s;
                    (s = s.parent) || n(r),
                      delete a.parent,
                      (s.state.allowParams = !1),
                      (s.state.allowName = !0),
                      (s.state.allowArray = !0);
                    break;
                  case ",":
                    delete s.state,
                      "indexed" === s.name &&
                        (t || n(r), (s.indexed = !0), (s.name = "")),
                      f(s.type, s.name) && (s.name = ""),
                      (s.type = O(s.type));
                    let l = i(s.parent);
                    s.parent.components.push(l), delete s.parent, (s = l);
                    break;
                  case " ":
                    s.state.allowType &&
                      "" !== s.type &&
                      ((s.type = O(s.type)),
                      delete s.state.allowType,
                      (s.state.allowName = !0),
                      (s.state.allowParams = !0)),
                      s.state.allowName &&
                        "" !== s.name &&
                        ("indexed" === s.name
                          ? (t || n(r),
                            s.indexed && n(r),
                            (s.indexed = !0),
                            (s.name = ""))
                          : f(s.type, s.name)
                          ? (s.name = "")
                          : (s.state.allowName = !1));
                    break;
                  case "[":
                    s.state.allowArray || n(r),
                      (s.type += o),
                      (s.state.allowArray = !1),
                      (s.state.allowName = !1),
                      (s.state.readArray = !0);
                    break;
                  case "]":
                    s.state.readArray || n(r),
                      (s.type += o),
                      (s.state.readArray = !1),
                      (s.state.allowArray = !0),
                      (s.state.allowName = !0);
                    break;
                  default:
                    s.state.allowType
                      ? ((s.type += o),
                        (s.state.allowParams = !0),
                        (s.state.allowArray = !0))
                      : s.state.allowName
                      ? ((s.name += o), delete s.state.allowArray)
                      : s.state.readArray
                      ? (s.type += o)
                      : n(r);
                }
              }
              return (
                s.parent && a.throwArgumentError("unexpected eof", "param", e),
                delete o.state,
                "indexed" === s.name
                  ? (t || n(r.length - 7),
                    s.indexed && n(r.length - 7),
                    (s.indexed = !0),
                    (s.name = ""))
                  : f(s.type, s.name) && (s.name = ""),
                (o.type = O(o.type)),
                o
              );
            })(e, !!t)),
            g.fromObject({
              name: r.name,
              type: r.type,
              indexed: r.indexed,
              components: r.components,
            })
          );
        }
        static isParamType(e) {
          return !!(null != e && e._isParamType);
        }
      }
      function m(e, t) {
        return (function (e) {
          e = e.trim();
          let t = [],
            r = "",
            n = 0;
          for (let i = 0; i < e.length; i++) {
            let o = e[i];
            "," === o && 0 === n
              ? (t.push(r), (r = ""))
              : ((r += o),
                "(" === o
                  ? n++
                  : ")" === o &&
                    -1 == --n &&
                    a.throwArgumentError("unbalanced parenthesis", "value", e));
          }
          return r && t.push(r), t;
        })(e).map((e) => g.fromString(e, t));
      }
      class y {
        constructor(e, t) {
          e !== l &&
            a.throwError(
              "use a static from method",
              o.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new Fragment()" }
            ),
            h(this, t),
            (this._isFragment = !0),
            Object.freeze(this);
        }
        static from(e) {
          return y.isFragment(e)
            ? e
            : "string" == typeof e
            ? y.fromString(e)
            : y.fromObject(e);
        }
        static fromObject(e) {
          if (y.isFragment(e)) return e;
          switch (e.type) {
            case "function":
              return x.fromObject(e);
            case "event":
              return v.fromObject(e);
            case "constructor":
              return E.fromObject(e);
            case "error":
              return P.fromObject(e);
            case "fallback":
            case "receive":
              return null;
          }
          return a.throwArgumentError("invalid fragment object", "value", e);
        }
        static fromString(e) {
          return "event" ===
            (e = (e = (e = e.replace(/\s/g, " "))
              .replace(/\(/g, " (")
              .replace(/\)/g, ") ")
              .replace(/\s+/g, " ")).trim()).split(" ")[0]
            ? v.fromString(e.substring(5).trim())
            : "function" === e.split(" ")[0]
            ? x.fromString(e.substring(8).trim())
            : "constructor" === e.split("(")[0].trim()
            ? E.fromString(e.trim())
            : "error" === e.split(" ")[0]
            ? P.fromString(e.substring(5).trim())
            : a.throwArgumentError("unsupported fragment", "value", e);
        }
        static isFragment(e) {
          return !!(e && e._isFragment);
        }
      }
      class v extends y {
        format(e) {
          if (
            (e || (e = d.sighash),
            d[e] || a.throwArgumentError("invalid format type", "format", e),
            e === d.json)
          )
            return JSON.stringify({
              type: "event",
              anonymous: this.anonymous,
              name: this.name,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
            });
          let t = "";
          return (
            e !== d.sighash && (t += "event "),
            (t +=
              this.name +
              "(" +
              this.inputs
                .map((t) => t.format(e))
                .join(e === d.full ? ", " : ",") +
              ") "),
            e !== d.sighash && this.anonymous && (t += "anonymous "),
            t.trim()
          );
        }
        static from(e) {
          return "string" == typeof e ? v.fromString(e) : v.fromObject(e);
        }
        static fromObject(e) {
          return v.isEventFragment(e)
            ? e
            : ("event" !== e.type &&
                a.throwArgumentError("invalid event object", "value", e),
              new v(l, {
                name: _(e.name),
                anonymous: e.anonymous,
                inputs: e.inputs ? e.inputs.map(g.fromObject) : [],
                type: "event",
              }));
        }
        static fromString(e) {
          let t = e.match(C);
          t || a.throwArgumentError("invalid event string", "value", e);
          let r = !1;
          return (
            t[3].split(" ").forEach((e) => {
              switch (e.trim()) {
                case "anonymous":
                  r = !0;
                  break;
                case "":
                  break;
                default:
                  a.warn("unknown modifier: " + e);
              }
            }),
            v.fromObject({
              name: t[1].trim(),
              anonymous: r,
              inputs: m(t[2], !0),
              type: "event",
            })
          );
        }
        static isEventFragment(e) {
          return e && e._isFragment && "event" === e.type;
        }
      }
      function b(e, t) {
        t.gas = null;
        let r = e.split("@");
        return 1 !== r.length
          ? (r.length > 2 &&
              a.throwArgumentError(
                "invalid human-readable ABI signature",
                "value",
                e
              ),
            r[1].match(/^[0-9]+$/) ||
              a.throwArgumentError(
                "invalid human-readable ABI signature gas",
                "value",
                e
              ),
            (t.gas = n.O$.from(r[1])),
            r[0])
          : e;
      }
      function A(e, t) {
        (t.constant = !1),
          (t.payable = !1),
          (t.stateMutability = "nonpayable"),
          e.split(" ").forEach((e) => {
            switch (e.trim()) {
              case "constant":
                t.constant = !0;
                break;
              case "payable":
                (t.payable = !0), (t.stateMutability = "payable");
                break;
              case "nonpayable":
                (t.payable = !1), (t.stateMutability = "nonpayable");
                break;
              case "pure":
                (t.constant = !0), (t.stateMutability = "pure");
                break;
              case "view":
                (t.constant = !0), (t.stateMutability = "view");
                break;
              case "external":
              case "public":
              case "":
                break;
              default:
                console.log("unknown modifier: " + e);
            }
          });
      }
      function w(e) {
        let t = { constant: !1, payable: !0, stateMutability: "payable" };
        return (
          null != e.stateMutability
            ? ((t.stateMutability = e.stateMutability),
              (t.constant =
                "view" === t.stateMutability || "pure" === t.stateMutability),
              null != e.constant &&
                !!e.constant !== t.constant &&
                a.throwArgumentError(
                  "cannot have constant function with mutability " +
                    t.stateMutability,
                  "value",
                  e
                ),
              (t.payable = "payable" === t.stateMutability),
              null != e.payable &&
                !!e.payable !== t.payable &&
                a.throwArgumentError(
                  "cannot have payable function with mutability " +
                    t.stateMutability,
                  "value",
                  e
                ))
            : null != e.payable
            ? ((t.payable = !!e.payable),
              null != e.constant ||
                t.payable ||
                "constructor" === e.type ||
                a.throwArgumentError(
                  "unable to determine stateMutability",
                  "value",
                  e
                ),
              (t.constant = !!e.constant),
              t.constant
                ? (t.stateMutability = "view")
                : (t.stateMutability = t.payable ? "payable" : "nonpayable"),
              t.payable &&
                t.constant &&
                a.throwArgumentError(
                  "cannot have constant payable function",
                  "value",
                  e
                ))
            : null != e.constant
            ? ((t.constant = !!e.constant),
              (t.payable = !t.constant),
              (t.stateMutability = t.constant ? "view" : "payable"))
            : "constructor" !== e.type &&
              a.throwArgumentError(
                "unable to determine stateMutability",
                "value",
                e
              ),
          t
        );
      }
      class E extends y {
        format(e) {
          if (
            (e || (e = d.sighash),
            d[e] || a.throwArgumentError("invalid format type", "format", e),
            e === d.json)
          )
            return JSON.stringify({
              type: "constructor",
              stateMutability:
                "nonpayable" !== this.stateMutability
                  ? this.stateMutability
                  : void 0,
              payable: this.payable,
              gas: this.gas ? this.gas.toNumber() : void 0,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
            });
          e === d.sighash &&
            a.throwError(
              "cannot format a constructor for sighash",
              o.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "format(sighash)" }
            );
          let t =
            "constructor(" +
            this.inputs
              .map((t) => t.format(e))
              .join(e === d.full ? ", " : ",") +
            ") ";
          return (
            this.stateMutability &&
              "nonpayable" !== this.stateMutability &&
              (t += this.stateMutability + " "),
            t.trim()
          );
        }
        static from(e) {
          return "string" == typeof e ? E.fromString(e) : E.fromObject(e);
        }
        static fromObject(e) {
          if (E.isConstructorFragment(e)) return e;
          "constructor" !== e.type &&
            a.throwArgumentError("invalid constructor object", "value", e);
          let t = w(e);
          return (
            t.constant &&
              a.throwArgumentError(
                "constructor cannot be constant",
                "value",
                e
              ),
            new E(l, {
              name: null,
              type: e.type,
              inputs: e.inputs ? e.inputs.map(g.fromObject) : [],
              payable: t.payable,
              stateMutability: t.stateMutability,
              gas: e.gas ? n.O$.from(e.gas) : null,
            })
          );
        }
        static fromString(e) {
          let t = { type: "constructor" },
            r = (e = b(e, t)).match(C);
          return (
            (r && "constructor" === r[1].trim()) ||
              a.throwArgumentError("invalid constructor string", "value", e),
            (t.inputs = m(r[2].trim(), !1)),
            A(r[3].trim(), t),
            E.fromObject(t)
          );
        }
        static isConstructorFragment(e) {
          return e && e._isFragment && "constructor" === e.type;
        }
      }
      class x extends E {
        format(e) {
          if (
            (e || (e = d.sighash),
            d[e] || a.throwArgumentError("invalid format type", "format", e),
            e === d.json)
          )
            return JSON.stringify({
              type: "function",
              name: this.name,
              constant: this.constant,
              stateMutability:
                "nonpayable" !== this.stateMutability
                  ? this.stateMutability
                  : void 0,
              payable: this.payable,
              gas: this.gas ? this.gas.toNumber() : void 0,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
              outputs: this.outputs.map((t) => JSON.parse(t.format(e))),
            });
          let t = "";
          return (
            e !== d.sighash && (t += "function "),
            (t +=
              this.name +
              "(" +
              this.inputs
                .map((t) => t.format(e))
                .join(e === d.full ? ", " : ",") +
              ") "),
            e !== d.sighash &&
              (this.stateMutability
                ? "nonpayable" !== this.stateMutability &&
                  (t += this.stateMutability + " ")
                : this.constant && (t += "view "),
              this.outputs &&
                this.outputs.length &&
                (t +=
                  "returns (" +
                  this.outputs.map((t) => t.format(e)).join(", ") +
                  ") "),
              null != this.gas && (t += "@" + this.gas.toString() + " ")),
            t.trim()
          );
        }
        static from(e) {
          return "string" == typeof e ? x.fromString(e) : x.fromObject(e);
        }
        static fromObject(e) {
          if (x.isFunctionFragment(e)) return e;
          "function" !== e.type &&
            a.throwArgumentError("invalid function object", "value", e);
          let t = w(e);
          return new x(l, {
            type: e.type,
            name: _(e.name),
            constant: t.constant,
            inputs: e.inputs ? e.inputs.map(g.fromObject) : [],
            outputs: e.outputs ? e.outputs.map(g.fromObject) : [],
            payable: t.payable,
            stateMutability: t.stateMutability,
            gas: e.gas ? n.O$.from(e.gas) : null,
          });
        }
        static fromString(e) {
          let t = { type: "function" },
            r = (e = b(e, t)).split(" returns ");
          r.length > 2 &&
            a.throwArgumentError("invalid function string", "value", e);
          let n = r[0].match(C);
          if (
            (n ||
              a.throwArgumentError("invalid function signature", "value", e),
            (t.name = n[1].trim()),
            t.name && _(t.name),
            (t.inputs = m(n[2], !1)),
            A(n[3].trim(), t),
            r.length > 1)
          ) {
            let n = r[1].match(C);
            ("" != n[1].trim() || "" != n[3].trim()) &&
              a.throwArgumentError("unexpected tokens", "value", e),
              (t.outputs = m(n[2], !1));
          } else t.outputs = [];
          return x.fromObject(t);
        }
        static isFunctionFragment(e) {
          return e && e._isFragment && "function" === e.type;
        }
      }
      function S(e) {
        let t = e.format();
        return (
          ("Error(string)" === t || "Panic(uint256)" === t) &&
            a.throwArgumentError(
              `cannot specify user defined ${t} error`,
              "fragment",
              e
            ),
          e
        );
      }
      class P extends y {
        format(e) {
          if (
            (e || (e = d.sighash),
            d[e] || a.throwArgumentError("invalid format type", "format", e),
            e === d.json)
          )
            return JSON.stringify({
              type: "error",
              name: this.name,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
            });
          let t = "";
          return (
            e !== d.sighash && (t += "error "),
            (t +=
              this.name +
              "(" +
              this.inputs
                .map((t) => t.format(e))
                .join(e === d.full ? ", " : ",") +
              ") ").trim()
          );
        }
        static from(e) {
          return "string" == typeof e ? P.fromString(e) : P.fromObject(e);
        }
        static fromObject(e) {
          return P.isErrorFragment(e)
            ? e
            : ("error" !== e.type &&
                a.throwArgumentError("invalid error object", "value", e),
              S(
                new P(l, {
                  type: e.type,
                  name: _(e.name),
                  inputs: e.inputs ? e.inputs.map(g.fromObject) : [],
                })
              ));
        }
        static fromString(e) {
          let t = { type: "error" },
            r = e.match(C);
          return (
            r || a.throwArgumentError("invalid error signature", "value", e),
            (t.name = r[1].trim()),
            t.name && _(t.name),
            (t.inputs = m(r[2], !1)),
            S(P.fromObject(t))
          );
        }
        static isErrorFragment(e) {
          return e && e._isFragment && "error" === e.type;
        }
      }
      function O(e) {
        return (
          e.match(/^uint($|[^1-9])/)
            ? (e = "uint256" + e.substring(4))
            : e.match(/^int($|[^1-9])/) && (e = "int256" + e.substring(3)),
          e
        );
      }
      let k = RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");
      function _(e) {
        return (
          (e && e.match(k)) ||
            a.throwArgumentError(`invalid identifier "${e}"`, "value", e),
          e
        );
      }
      let C = RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
    },
    74153: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          AbiCoder: function () {
            return i.R;
          },
          ConstructorFragment: function () {
            return n.Xg;
          },
          ErrorFragment: function () {
            return n.IC;
          },
          EventFragment: function () {
            return n.QV;
          },
          FormatTypes: function () {
            return n.pc;
          },
          Fragment: function () {
            return n.HY;
          },
          FunctionFragment: function () {
            return n.YW;
          },
          Indexed: function () {
            return o.Hk;
          },
          Interface: function () {
            return o.vU;
          },
          LogDescription: function () {
            return o.CC;
          },
          ParamType: function () {
            return n._R;
          },
          TransactionDescription: function () {
            return o.vk;
          },
          checkResultErrors: function () {
            return s.BR;
          },
          defaultAbiCoder: function () {
            return i.$;
          },
        });
      var n = r(56482),
        i = r(32481),
        o = r(19440),
        s = r(783);
    },
    19440: function (e, t, r) {
      "use strict";
      r.d(t, {
        CC: function () {
          return p;
        },
        Hk: function () {
          return y;
        },
        vU: function () {
          return A;
        },
        vk: function () {
          return g;
        },
      });
      var n = r(56805),
        i = r(30466),
        o = r(7730),
        s = r(57934),
        a = r(14752),
        l = r(50357),
        u = r(32481),
        c = r(56482),
        f = r(67214),
        h = r(32815);
      let d = new f.Logger(h.i);
      class p extends l.Description {}
      class g extends l.Description {}
      class m extends l.Description {}
      class y extends l.Description {
        static isIndexed(e) {
          return !!(e && e._isIndexed);
        }
      }
      let v = {
        "0x08c379a0": {
          signature: "Error(string)",
          name: "Error",
          inputs: ["string"],
          reason: !0,
        },
        "0x4e487b71": {
          signature: "Panic(uint256)",
          name: "Panic",
          inputs: ["uint256"],
        },
      };
      function b(e, t) {
        let r = Error(
          `deferred error during ABI decoding triggered accessing ${e}`
        );
        return (r.error = t), r;
      }
      class A {
        constructor(e) {
          let t = [];
          (t = "string" == typeof e ? JSON.parse(e) : e),
            (0, l.defineReadOnly)(
              this,
              "fragments",
              t.map((e) => c.HY.from(e)).filter((e) => null != e)
            ),
            (0, l.defineReadOnly)(
              this,
              "_abiCoder",
              (0, l.getStatic)(new.target, "getAbiCoder")()
            ),
            (0, l.defineReadOnly)(this, "functions", {}),
            (0, l.defineReadOnly)(this, "errors", {}),
            (0, l.defineReadOnly)(this, "events", {}),
            (0, l.defineReadOnly)(this, "structs", {}),
            this.fragments.forEach((e) => {
              let t = null;
              switch (e.type) {
                case "constructor":
                  if (this.deploy) {
                    d.warn("duplicate definition - constructor");
                    return;
                  }
                  (0, l.defineReadOnly)(this, "deploy", e);
                  return;
                case "function":
                  t = this.functions;
                  break;
                case "event":
                  t = this.events;
                  break;
                case "error":
                  t = this.errors;
                  break;
                default:
                  return;
              }
              let r = e.format();
              if (t[r]) {
                d.warn("duplicate definition - " + r);
                return;
              }
              t[r] = e;
            }),
            this.deploy ||
              (0, l.defineReadOnly)(
                this,
                "deploy",
                c.Xg.from({ payable: !1, type: "constructor" })
              ),
            (0, l.defineReadOnly)(this, "_isInterface", !0);
        }
        format(e) {
          e || (e = c.pc.full),
            e === c.pc.sighash &&
              d.throwArgumentError(
                "interface does not support formatting sighash",
                "format",
                e
              );
          let t = this.fragments.map((t) => t.format(e));
          return e === c.pc.json
            ? JSON.stringify(t.map((e) => JSON.parse(e)))
            : t;
        }
        static getAbiCoder() {
          return u.$;
        }
        static getAddress(e) {
          return (0, n.getAddress)(e);
        }
        static getSighash(e) {
          return (0, o.hexDataSlice)((0, s.id)(e.format()), 0, 4);
        }
        static getEventTopic(e) {
          return (0, s.id)(e.format());
        }
        getFunction(e) {
          if ((0, o.isHexString)(e)) {
            for (let t in this.functions)
              if (e === this.getSighash(t)) return this.functions[t];
            d.throwArgumentError("no matching function", "sighash", e);
          }
          if (-1 === e.indexOf("(")) {
            let t = e.trim(),
              r = Object.keys(this.functions).filter(
                (e) => e.split("(")[0] === t
              );
            return (
              0 === r.length
                ? d.throwArgumentError("no matching function", "name", t)
                : r.length > 1 &&
                  d.throwArgumentError(
                    "multiple matching functions",
                    "name",
                    t
                  ),
              this.functions[r[0]]
            );
          }
          let t = this.functions[c.YW.fromString(e).format()];
          return (
            t || d.throwArgumentError("no matching function", "signature", e), t
          );
        }
        getEvent(e) {
          if ((0, o.isHexString)(e)) {
            let t = e.toLowerCase();
            for (let e in this.events)
              if (t === this.getEventTopic(e)) return this.events[e];
            d.throwArgumentError("no matching event", "topichash", t);
          }
          if (-1 === e.indexOf("(")) {
            let t = e.trim(),
              r = Object.keys(this.events).filter((e) => e.split("(")[0] === t);
            return (
              0 === r.length
                ? d.throwArgumentError("no matching event", "name", t)
                : r.length > 1 &&
                  d.throwArgumentError("multiple matching events", "name", t),
              this.events[r[0]]
            );
          }
          let t = this.events[c.QV.fromString(e).format()];
          return (
            t || d.throwArgumentError("no matching event", "signature", e), t
          );
        }
        getError(e) {
          if ((0, o.isHexString)(e)) {
            let t = (0, l.getStatic)(this.constructor, "getSighash");
            for (let r in this.errors)
              if (e === t(this.errors[r])) return this.errors[r];
            d.throwArgumentError("no matching error", "sighash", e);
          }
          if (-1 === e.indexOf("(")) {
            let t = e.trim(),
              r = Object.keys(this.errors).filter((e) => e.split("(")[0] === t);
            return (
              0 === r.length
                ? d.throwArgumentError("no matching error", "name", t)
                : r.length > 1 &&
                  d.throwArgumentError("multiple matching errors", "name", t),
              this.errors[r[0]]
            );
          }
          let t = this.errors[c.YW.fromString(e).format()];
          return (
            t || d.throwArgumentError("no matching error", "signature", e), t
          );
        }
        getSighash(e) {
          if ("string" == typeof e)
            try {
              e = this.getFunction(e);
            } catch (t) {
              try {
                e = this.getError(e);
              } catch (e) {
                throw t;
              }
            }
          return (0, l.getStatic)(this.constructor, "getSighash")(e);
        }
        getEventTopic(e) {
          return (
            "string" == typeof e && (e = this.getEvent(e)),
            (0, l.getStatic)(this.constructor, "getEventTopic")(e)
          );
        }
        _decodeParams(e, t) {
          return this._abiCoder.decode(e, t);
        }
        _encodeParams(e, t) {
          return this._abiCoder.encode(e, t);
        }
        encodeDeploy(e) {
          return this._encodeParams(this.deploy.inputs, e || []);
        }
        decodeErrorResult(e, t) {
          "string" == typeof e && (e = this.getError(e));
          let r = (0, o.arrayify)(t);
          return (
            (0, o.hexlify)(r.slice(0, 4)) !== this.getSighash(e) &&
              d.throwArgumentError(
                `data signature does not match error ${e.name}.`,
                "data",
                (0, o.hexlify)(r)
              ),
            this._decodeParams(e.inputs, r.slice(4))
          );
        }
        encodeErrorResult(e, t) {
          return (
            "string" == typeof e && (e = this.getError(e)),
            (0, o.hexlify)(
              (0, o.concat)([
                this.getSighash(e),
                this._encodeParams(e.inputs, t || []),
              ])
            )
          );
        }
        decodeFunctionData(e, t) {
          "string" == typeof e && (e = this.getFunction(e));
          let r = (0, o.arrayify)(t);
          return (
            (0, o.hexlify)(r.slice(0, 4)) !== this.getSighash(e) &&
              d.throwArgumentError(
                `data signature does not match function ${e.name}.`,
                "data",
                (0, o.hexlify)(r)
              ),
            this._decodeParams(e.inputs, r.slice(4))
          );
        }
        encodeFunctionData(e, t) {
          return (
            "string" == typeof e && (e = this.getFunction(e)),
            (0, o.hexlify)(
              (0, o.concat)([
                this.getSighash(e),
                this._encodeParams(e.inputs, t || []),
              ])
            )
          );
        }
        decodeFunctionResult(e, t) {
          "string" == typeof e && (e = this.getFunction(e));
          let r = (0, o.arrayify)(t),
            n = null,
            i = "",
            s = null,
            a = null,
            l = null;
          switch (r.length % this._abiCoder._getWordSize()) {
            case 0:
              try {
                return this._abiCoder.decode(e.outputs, r);
              } catch (e) {}
              break;
            case 4: {
              let e = (0, o.hexlify)(r.slice(0, 4)),
                t = v[e];
              if (t)
                (s = this._abiCoder.decode(t.inputs, r.slice(4))),
                  (a = t.name),
                  (l = t.signature),
                  t.reason && (n = s[0]),
                  "Error" === a
                    ? (i = `; VM Exception while processing transaction: reverted with reason string ${JSON.stringify(
                        s[0]
                      )}`)
                    : "Panic" === a &&
                      (i = `; VM Exception while processing transaction: reverted with panic code ${s[0]}`);
              else
                try {
                  let t = this.getError(e);
                  (s = this._abiCoder.decode(t.inputs, r.slice(4))),
                    (a = t.name),
                    (l = t.format());
                } catch (e) {}
            }
          }
          return d.throwError(
            "call revert exception" + i,
            f.Logger.errors.CALL_EXCEPTION,
            {
              method: e.format(),
              data: (0, o.hexlify)(t),
              errorArgs: s,
              errorName: a,
              errorSignature: l,
              reason: n,
            }
          );
        }
        encodeFunctionResult(e, t) {
          return (
            "string" == typeof e && (e = this.getFunction(e)),
            (0, o.hexlify)(this._abiCoder.encode(e.outputs, t || []))
          );
        }
        encodeFilterTopics(e, t) {
          "string" == typeof e && (e = this.getEvent(e)),
            t.length > e.inputs.length &&
              d.throwError(
                "too many arguments for " + e.format(),
                f.Logger.errors.UNEXPECTED_ARGUMENT,
                { argument: "values", value: t }
              );
          let r = [];
          e.anonymous || r.push(this.getEventTopic(e));
          let n = (e, t) =>
            "string" === e.type
              ? (0, s.id)(t)
              : "bytes" === e.type
              ? (0, a.keccak256)((0, o.hexlify)(t))
              : ("bool" === e.type &&
                  "boolean" == typeof t &&
                  (t = t ? "0x01" : "0x00"),
                e.type.match(/^u?int/) && (t = i.O$.from(t).toHexString()),
                "address" === e.type && this._abiCoder.encode(["address"], [t]),
                (0, o.hexZeroPad)((0, o.hexlify)(t), 32));
          for (
            t.forEach((t, i) => {
              let o = e.inputs[i];
              if (!o.indexed) {
                null != t &&
                  d.throwArgumentError(
                    "cannot filter non-indexed parameters; must be null",
                    "contract." + o.name,
                    t
                  );
                return;
              }
              null == t
                ? r.push(null)
                : "array" === o.baseType || "tuple" === o.baseType
                ? d.throwArgumentError(
                    "filtering with tuples or arrays not supported",
                    "contract." + o.name,
                    t
                  )
                : Array.isArray(t)
                ? r.push(t.map((e) => n(o, e)))
                : r.push(n(o, t));
            });
            r.length && null === r[r.length - 1];

          )
            r.pop();
          return r;
        }
        encodeEventLog(e, t) {
          "string" == typeof e && (e = this.getEvent(e));
          let r = [],
            n = [],
            i = [];
          return (
            e.anonymous || r.push(this.getEventTopic(e)),
            t.length !== e.inputs.length &&
              d.throwArgumentError(
                "event arguments/values mismatch",
                "values",
                t
              ),
            e.inputs.forEach((e, o) => {
              let l = t[o];
              if (e.indexed) {
                if ("string" === e.type) r.push((0, s.id)(l));
                else if ("bytes" === e.type) r.push((0, a.keccak256)(l));
                else if ("tuple" === e.baseType || "array" === e.baseType)
                  throw Error("not implemented");
                else r.push(this._abiCoder.encode([e.type], [l]));
              } else n.push(e), i.push(l);
            }),
            { data: this._abiCoder.encode(n, i), topics: r }
          );
        }
        decodeEventLog(e, t, r) {
          if (
            ("string" == typeof e && (e = this.getEvent(e)),
            null != r && !e.anonymous)
          ) {
            let t = this.getEventTopic(e);
            ((0, o.isHexString)(r[0], 32) && r[0].toLowerCase() === t) ||
              d.throwError(
                "fragment/topic mismatch",
                f.Logger.errors.INVALID_ARGUMENT,
                { argument: "topics[0]", expected: t, value: r[0] }
              ),
              (r = r.slice(1));
          }
          let n = [],
            i = [],
            s = [];
          e.inputs.forEach((e, t) => {
            e.indexed
              ? "string" === e.type ||
                "bytes" === e.type ||
                "tuple" === e.baseType ||
                "array" === e.baseType
                ? (n.push(c._R.fromObject({ type: "bytes32", name: e.name })),
                  s.push(!0))
                : (n.push(e), s.push(!1))
              : (i.push(e), s.push(!1));
          });
          let a = null != r ? this._abiCoder.decode(n, (0, o.concat)(r)) : null,
            l = this._abiCoder.decode(i, t, !0),
            u = [],
            h = 0,
            p = 0;
          e.inputs.forEach((e, t) => {
            if (e.indexed) {
              if (null == a) u[t] = new y({ _isIndexed: !0, hash: null });
              else if (s[t]) u[t] = new y({ _isIndexed: !0, hash: a[p++] });
              else
                try {
                  u[t] = a[p++];
                } catch (e) {
                  u[t] = e;
                }
            } else
              try {
                u[t] = l[h++];
              } catch (e) {
                u[t] = e;
              }
            if (e.name && null == u[e.name]) {
              let r = u[t];
              r instanceof Error
                ? Object.defineProperty(u, e.name, {
                    enumerable: !0,
                    get: () => {
                      throw b(`property ${JSON.stringify(e.name)}`, r);
                    },
                  })
                : (u[e.name] = r);
            }
          });
          for (let e = 0; e < u.length; e++) {
            let t = u[e];
            t instanceof Error &&
              Object.defineProperty(u, e, {
                enumerable: !0,
                get: () => {
                  throw b(`index ${e}`, t);
                },
              });
          }
          return Object.freeze(u);
        }
        parseTransaction(e) {
          let t = this.getFunction(e.data.substring(0, 10).toLowerCase());
          return t
            ? new g({
                args: this._abiCoder.decode(
                  t.inputs,
                  "0x" + e.data.substring(10)
                ),
                functionFragment: t,
                name: t.name,
                signature: t.format(),
                sighash: this.getSighash(t),
                value: i.O$.from(e.value || "0"),
              })
            : null;
        }
        parseLog(e) {
          let t = this.getEvent(e.topics[0]);
          return !t || t.anonymous
            ? null
            : new p({
                eventFragment: t,
                name: t.name,
                signature: t.format(),
                topic: this.getEventTopic(t),
                args: this.decodeEventLog(t, e.data, e.topics),
              });
        }
        parseError(e) {
          let t = (0, o.hexlify)(e),
            r = this.getError(t.substring(0, 10).toLowerCase());
          return r
            ? new m({
                args: this._abiCoder.decode(r.inputs, "0x" + t.substring(10)),
                errorFragment: r,
                name: r.name,
                signature: r.format(),
                sighash: this.getSighash(r),
              })
            : null;
        }
        static isInterface(e) {
          return !!(e && e._isInterface);
        }
      }
    },
    62377: function (e, t, r) {
      "use strict";
      r.d(t, {
        Sg: function () {
          return s;
        },
        zt: function () {
          return a;
        },
      });
      var n = r(30466),
        i = r(50357);
      let o = new (r(67214).Logger)("abstract-provider/5.7.0");
      class s extends i.Description {
        static isForkEvent(e) {
          return !!(e && e._isForkEvent);
        }
      }
      class a {
        constructor() {
          o.checkAbstract(new.target, a),
            (0, i.defineReadOnly)(this, "_isProvider", !0);
        }
        getFeeData() {
          var e, t, r, o;
          return (
            (e = this),
            (t = void 0),
            (r = void 0),
            (o = function* () {
              let { block: e, gasPrice: t } = yield (0, i.resolveProperties)({
                  block: this.getBlock("latest"),
                  gasPrice: this.getGasPrice().catch((e) => null),
                }),
                r = null,
                o = null,
                s = null;
              return (
                e &&
                  e.baseFeePerGas &&
                  ((r = e.baseFeePerGas),
                  (s = n.O$.from("1500000000")),
                  (o = e.baseFeePerGas.mul(2).add(s))),
                {
                  lastBaseFeePerGas: r,
                  maxFeePerGas: o,
                  maxPriorityFeePerGas: s,
                  gasPrice: t,
                }
              );
            }),
            new (r || (r = Promise))(function (n, i) {
              function s(e) {
                try {
                  l(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                try {
                  l(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? n(e.value)
                  : ((t = e.value) instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })
                    ).then(s, a);
              }
              l((o = o.apply(e, t || [])).next());
            })
          );
        }
        addListener(e, t) {
          return this.on(e, t);
        }
        removeListener(e, t) {
          return this.off(e, t);
        }
        static isProvider(e) {
          return !!(e && e._isProvider);
        }
      }
    },
    18833: function (e, t, r) {
      "use strict";
      r.d(t, {
        E: function () {
          return u;
        },
        b: function () {
          return c;
        },
      });
      var n = r(50357),
        i = r(67214),
        o = function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s(e) {
              try {
                l(n.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })
                  ).then(s, a);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      let s = new i.Logger("abstract-signer/5.7.0"),
        a = [
          "accessList",
          "ccipReadEnabled",
          "chainId",
          "customData",
          "data",
          "from",
          "gasLimit",
          "gasPrice",
          "maxFeePerGas",
          "maxPriorityFeePerGas",
          "nonce",
          "to",
          "type",
          "value",
        ],
        l = [
          i.Logger.errors.INSUFFICIENT_FUNDS,
          i.Logger.errors.NONCE_EXPIRED,
          i.Logger.errors.REPLACEMENT_UNDERPRICED,
        ];
      class u {
        constructor() {
          s.checkAbstract(new.target, u),
            (0, n.defineReadOnly)(this, "_isSigner", !0);
        }
        getBalance(e) {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getBalance"),
              yield this.provider.getBalance(this.getAddress(), e)
            );
          });
        }
        getTransactionCount(e) {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getTransactionCount"),
              yield this.provider.getTransactionCount(this.getAddress(), e)
            );
          });
        }
        estimateGas(e) {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("estimateGas");
            let t = yield (0, n.resolveProperties)(this.checkTransaction(e));
            return yield this.provider.estimateGas(t);
          });
        }
        call(e, t) {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("call");
            let r = yield (0, n.resolveProperties)(this.checkTransaction(e));
            return yield this.provider.call(r, t);
          });
        }
        sendTransaction(e) {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("sendTransaction");
            let t = yield this.populateTransaction(e),
              r = yield this.signTransaction(t);
            return yield this.provider.sendTransaction(r);
          });
        }
        getChainId() {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getChainId"),
              (yield this.provider.getNetwork()).chainId
            );
          });
        }
        getGasPrice() {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getGasPrice"),
              yield this.provider.getGasPrice()
            );
          });
        }
        getFeeData() {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("getFeeData"),
              yield this.provider.getFeeData()
            );
          });
        }
        resolveName(e) {
          return o(this, void 0, void 0, function* () {
            return (
              this._checkProvider("resolveName"),
              yield this.provider.resolveName(e)
            );
          });
        }
        checkTransaction(e) {
          for (let t in e)
            -1 === a.indexOf(t) &&
              s.throwArgumentError(
                "invalid transaction key: " + t,
                "transaction",
                e
              );
          let t = (0, n.shallowCopy)(e);
          return (
            null == t.from
              ? (t.from = this.getAddress())
              : (t.from = Promise.all([
                  Promise.resolve(t.from),
                  this.getAddress(),
                ]).then(
                  (t) => (
                    t[0].toLowerCase() !== t[1].toLowerCase() &&
                      s.throwArgumentError(
                        "from address mismatch",
                        "transaction",
                        e
                      ),
                    t[0]
                  )
                )),
            t
          );
        }
        populateTransaction(e) {
          return o(this, void 0, void 0, function* () {
            let t = yield (0, n.resolveProperties)(this.checkTransaction(e));
            null != t.to &&
              ((t.to = Promise.resolve(t.to).then((e) =>
                o(this, void 0, void 0, function* () {
                  if (null == e) return null;
                  let t = yield this.resolveName(e);
                  return (
                    null == t &&
                      s.throwArgumentError(
                        "provided ENS name resolves to null",
                        "tx.to",
                        e
                      ),
                    t
                  );
                })
              )),
              t.to.catch((e) => {}));
            let r = null != t.maxFeePerGas || null != t.maxPriorityFeePerGas;
            if (
              (null != t.gasPrice && (2 === t.type || r)
                ? s.throwArgumentError(
                    "eip-1559 transaction do not support gasPrice",
                    "transaction",
                    e
                  )
                : (0 === t.type || 1 === t.type) &&
                  r &&
                  s.throwArgumentError(
                    "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas",
                    "transaction",
                    e
                  ),
              (2 === t.type || null == t.type) &&
                null != t.maxFeePerGas &&
                null != t.maxPriorityFeePerGas)
            )
              t.type = 2;
            else if (0 === t.type || 1 === t.type)
              null == t.gasPrice && (t.gasPrice = this.getGasPrice());
            else {
              let e = yield this.getFeeData();
              if (null == t.type) {
                if (null != e.maxFeePerGas && null != e.maxPriorityFeePerGas) {
                  if (((t.type = 2), null != t.gasPrice)) {
                    let e = t.gasPrice;
                    delete t.gasPrice,
                      (t.maxFeePerGas = e),
                      (t.maxPriorityFeePerGas = e);
                  } else
                    null == t.maxFeePerGas && (t.maxFeePerGas = e.maxFeePerGas),
                      null == t.maxPriorityFeePerGas &&
                        (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas);
                } else
                  null != e.gasPrice
                    ? (r &&
                        s.throwError(
                          "network does not support EIP-1559",
                          i.Logger.errors.UNSUPPORTED_OPERATION,
                          { operation: "populateTransaction" }
                        ),
                      null == t.gasPrice && (t.gasPrice = e.gasPrice),
                      (t.type = 0))
                    : s.throwError(
                        "failed to get consistent fee data",
                        i.Logger.errors.UNSUPPORTED_OPERATION,
                        { operation: "signer.getFeeData" }
                      );
              } else
                2 === t.type &&
                  (null == t.maxFeePerGas && (t.maxFeePerGas = e.maxFeePerGas),
                  null == t.maxPriorityFeePerGas &&
                    (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas));
            }
            return (
              null == t.nonce &&
                (t.nonce = this.getTransactionCount("pending")),
              null == t.gasLimit &&
                (t.gasLimit = this.estimateGas(t).catch((e) => {
                  if (l.indexOf(e.code) >= 0) throw e;
                  return s.throwError(
                    "cannot estimate gas; transaction may fail or may require manual gas limit",
                    i.Logger.errors.UNPREDICTABLE_GAS_LIMIT,
                    { error: e, tx: t }
                  );
                })),
              null == t.chainId
                ? (t.chainId = this.getChainId())
                : (t.chainId = Promise.all([
                    Promise.resolve(t.chainId),
                    this.getChainId(),
                  ]).then(
                    (t) => (
                      0 !== t[1] &&
                        t[0] !== t[1] &&
                        s.throwArgumentError(
                          "chainId address mismatch",
                          "transaction",
                          e
                        ),
                      t[0]
                    )
                  )),
              yield (0, n.resolveProperties)(t)
            );
          });
        }
        _checkProvider(e) {
          this.provider ||
            s.throwError(
              "missing provider",
              i.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: e || "_checkProvider" }
            );
        }
        static isSigner(e) {
          return !!(e && e._isSigner);
        }
      }
      class c extends u {
        constructor(e, t) {
          super(),
            (0, n.defineReadOnly)(this, "address", e),
            (0, n.defineReadOnly)(this, "provider", t || null);
        }
        getAddress() {
          return Promise.resolve(this.address);
        }
        _fail(e, t) {
          return Promise.resolve().then(() => {
            s.throwError(e, i.Logger.errors.UNSUPPORTED_OPERATION, {
              operation: t,
            });
          });
        }
        signMessage(e) {
          return this._fail("VoidSigner cannot sign messages", "signMessage");
        }
        signTransaction(e) {
          return this._fail(
            "VoidSigner cannot sign transactions",
            "signTransaction"
          );
        }
        _signTypedData(e, t, r) {
          return this._fail(
            "VoidSigner cannot sign typed data",
            "signTypedData"
          );
        }
        connect(e) {
          return new c(this.address, e);
        }
      }
    },
    56805: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          getAddress: function () {
            return h;
          },
          getContractAddress: function () {
            return g;
          },
          getCreate2Address: function () {
            return m;
          },
          getIcapAddress: function () {
            return p;
          },
          isAddress: function () {
            return d;
          },
        });
      var n = r(7730),
        i = r(30466),
        o = r(14752),
        s = r(2585);
      let a = new (r(67214).Logger)("address/5.7.0");
      function l(e) {
        (0, n.isHexString)(e, 20) ||
          a.throwArgumentError("invalid address", "address", e);
        let t = (e = e.toLowerCase()).substring(2).split(""),
          r = new Uint8Array(40);
        for (let e = 0; e < 40; e++) r[e] = t[e].charCodeAt(0);
        let i = (0, n.arrayify)((0, o.keccak256)(r));
        for (let e = 0; e < 40; e += 2)
          i[e >> 1] >> 4 >= 8 && (t[e] = t[e].toUpperCase()),
            (15 & i[e >> 1]) >= 8 && (t[e + 1] = t[e + 1].toUpperCase());
        return "0x" + t.join("");
      }
      let u = {};
      for (let e = 0; e < 10; e++) u[String(e)] = String(e);
      for (let e = 0; e < 26; e++)
        u[String.fromCharCode(65 + e)] = String(10 + e);
      let c = Math.floor(
        Math.log10
          ? Math.log10(9007199254740991)
          : Math.log(9007199254740991) / Math.LN10
      );
      function f(e) {
        let t = (e =
          (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00")
          .split("")
          .map((e) => u[e])
          .join("");
        for (; t.length >= c; ) {
          let e = t.substring(0, c);
          t = (parseInt(e, 10) % 97) + t.substring(e.length);
        }
        let r = String(98 - (parseInt(t, 10) % 97));
        for (; r.length < 2; ) r = "0" + r;
        return r;
      }
      function h(e) {
        let t = null;
        if (
          ("string" != typeof e &&
            a.throwArgumentError("invalid address", "address", e),
          e.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          "0x" !== e.substring(0, 2) && (e = "0x" + e),
            (t = l(e)),
            e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              t !== e &&
              a.throwArgumentError("bad address checksum", "address", e);
        else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          for (
            e.substring(2, 4) !== f(e) &&
              a.throwArgumentError("bad icap checksum", "address", e),
              t = (0, i.g$)(e.substring(4));
            t.length < 40;

          )
            t = "0" + t;
          t = l("0x" + t);
        } else a.throwArgumentError("invalid address", "address", e);
        return t;
      }
      function d(e) {
        try {
          return h(e), !0;
        } catch (e) {}
        return !1;
      }
      function p(e) {
        let t = (0, i.t2)(h(e).substring(2)).toUpperCase();
        for (; t.length < 30; ) t = "0" + t;
        return "XE" + f("XE00" + t) + t;
      }
      function g(e) {
        let t = null;
        try {
          t = h(e.from);
        } catch (t) {
          a.throwArgumentError("missing from address", "transaction", e);
        }
        let r = (0, n.stripZeros)(
          (0, n.arrayify)(i.O$.from(e.nonce).toHexString())
        );
        return h(
          (0, n.hexDataSlice)((0, o.keccak256)((0, s.encode)([t, r])), 12)
        );
      }
      function m(e, t, r) {
        return (
          32 !== (0, n.hexDataLength)(t) &&
            a.throwArgumentError("salt must be 32 bytes", "salt", t),
          32 !== (0, n.hexDataLength)(r) &&
            a.throwArgumentError(
              "initCodeHash must be 32 bytes",
              "initCodeHash",
              r
            ),
          h(
            (0, n.hexDataSlice)(
              (0, o.keccak256)((0, n.concat)(["0xff", h(e), t, r])),
              12
            )
          )
        );
      }
    },
    91710: function (e, t, r) {
      "use strict";
      r.d(t, {
        J: function () {
          return i;
        },
        c: function () {
          return o;
        },
      });
      var n = r(7730);
      function i(e) {
        e = atob(e);
        let t = [];
        for (let r = 0; r < e.length; r++) t.push(e.charCodeAt(r));
        return (0, n.arrayify)(t);
      }
      function o(e) {
        e = (0, n.arrayify)(e);
        let t = "";
        for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
        return btoa(t);
      }
    },
    47987: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          decode: function () {
            return n.J;
          },
          encode: function () {
            return n.c;
          },
        });
      var n = r(91710);
    },
    94731: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          Base32: function () {
            return s;
          },
          Base58: function () {
            return a;
          },
          BaseX: function () {
            return o;
          },
        });
      var n = r(7730),
        i = r(50357);
      class o {
        constructor(e) {
          (0, i.defineReadOnly)(this, "alphabet", e),
            (0, i.defineReadOnly)(this, "base", e.length),
            (0, i.defineReadOnly)(this, "_alphabetMap", {}),
            (0, i.defineReadOnly)(this, "_leader", e.charAt(0));
          for (let t = 0; t < e.length; t++) this._alphabetMap[e.charAt(t)] = t;
        }
        encode(e) {
          let t = (0, n.arrayify)(e);
          if (0 === t.length) return "";
          let r = [0];
          for (let e = 0; e < t.length; ++e) {
            let n = t[e];
            for (let e = 0; e < r.length; ++e)
              (n += r[e] << 8),
                (r[e] = n % this.base),
                (n = (n / this.base) | 0);
            for (; n > 0; ) r.push(n % this.base), (n = (n / this.base) | 0);
          }
          let i = "";
          for (let e = 0; 0 === t[e] && e < t.length - 1; ++e)
            i += this._leader;
          for (let e = r.length - 1; e >= 0; --e) i += this.alphabet[r[e]];
          return i;
        }
        decode(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          let t = [];
          if (0 === e.length) return new Uint8Array(t);
          t.push(0);
          for (let r = 0; r < e.length; r++) {
            let n = this._alphabetMap[e[r]];
            if (void 0 === n)
              throw Error("Non-base" + this.base + " character");
            let i = n;
            for (let e = 0; e < t.length; ++e)
              (i += t[e] * this.base), (t[e] = 255 & i), (i >>= 8);
            for (; i > 0; ) t.push(255 & i), (i >>= 8);
          }
          for (let r = 0; e[r] === this._leader && r < e.length - 1; ++r)
            t.push(0);
          return (0, n.arrayify)(new Uint8Array(t.reverse()));
        }
      }
      let s = new o("abcdefghijklmnopqrstuvwxyz234567"),
        a = new o("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
    },
    30761: function (e, t, r) {
      "use strict";
      r.d(t, {
        i: function () {
          return n;
        },
      });
      let n = "bignumber/5.7.0";
    },
    30466: function (e, t, r) {
      "use strict";
      r.d(t, {
        O$: function () {
          return d;
        },
        Zm: function () {
          return f;
        },
        g$: function () {
          return v;
        },
        t2: function () {
          return b;
        },
      });
      var n = r(12261),
        i = r.n(n),
        o = r(7730),
        s = r(67214),
        a = r(30761),
        l = i().BN;
      let u = new s.Logger(a.i),
        c = {};
      function f(e) {
        return (
          null != e &&
          (d.isBigNumber(e) ||
            ("number" == typeof e && e % 1 == 0) ||
            ("string" == typeof e && !!e.match(/^-?[0-9]+$/)) ||
            (0, o.isHexString)(e) ||
            "bigint" == typeof e ||
            (0, o.isBytes)(e))
        );
      }
      let h = !1;
      class d {
        constructor(e, t) {
          e !== c &&
            u.throwError(
              "cannot call constructor directly; use BigNumber.from",
              s.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new (BigNumber)" }
            ),
            (this._hex = t),
            (this._isBigNumber = !0),
            Object.freeze(this);
        }
        fromTwos(e) {
          return g(m(this).fromTwos(e));
        }
        toTwos(e) {
          return g(m(this).toTwos(e));
        }
        abs() {
          return "-" === this._hex[0] ? d.from(this._hex.substring(1)) : this;
        }
        add(e) {
          return g(m(this).add(m(e)));
        }
        sub(e) {
          return g(m(this).sub(m(e)));
        }
        div(e) {
          return (
            d.from(e).isZero() && y("division-by-zero", "div"),
            g(m(this).div(m(e)))
          );
        }
        mul(e) {
          return g(m(this).mul(m(e)));
        }
        mod(e) {
          let t = m(e);
          return t.isNeg() && y("division-by-zero", "mod"), g(m(this).umod(t));
        }
        pow(e) {
          let t = m(e);
          return t.isNeg() && y("negative-power", "pow"), g(m(this).pow(t));
        }
        and(e) {
          let t = m(e);
          return (
            (this.isNegative() || t.isNeg()) &&
              y("unbound-bitwise-result", "and"),
            g(m(this).and(t))
          );
        }
        or(e) {
          let t = m(e);
          return (
            (this.isNegative() || t.isNeg()) &&
              y("unbound-bitwise-result", "or"),
            g(m(this).or(t))
          );
        }
        xor(e) {
          let t = m(e);
          return (
            (this.isNegative() || t.isNeg()) &&
              y("unbound-bitwise-result", "xor"),
            g(m(this).xor(t))
          );
        }
        mask(e) {
          return (
            (this.isNegative() || e < 0) && y("negative-width", "mask"),
            g(m(this).maskn(e))
          );
        }
        shl(e) {
          return (
            (this.isNegative() || e < 0) && y("negative-width", "shl"),
            g(m(this).shln(e))
          );
        }
        shr(e) {
          return (
            (this.isNegative() || e < 0) && y("negative-width", "shr"),
            g(m(this).shrn(e))
          );
        }
        eq(e) {
          return m(this).eq(m(e));
        }
        lt(e) {
          return m(this).lt(m(e));
        }
        lte(e) {
          return m(this).lte(m(e));
        }
        gt(e) {
          return m(this).gt(m(e));
        }
        gte(e) {
          return m(this).gte(m(e));
        }
        isNegative() {
          return "-" === this._hex[0];
        }
        isZero() {
          return m(this).isZero();
        }
        toNumber() {
          try {
            return m(this).toNumber();
          } catch (e) {
            y("overflow", "toNumber", this.toString());
          }
          return null;
        }
        toBigInt() {
          try {
            return BigInt(this.toString());
          } catch (e) {}
          return u.throwError(
            "this platform does not support BigInt",
            s.Logger.errors.UNSUPPORTED_OPERATION,
            { value: this.toString() }
          );
        }
        toString() {
          return (
            arguments.length > 0 &&
              (10 === arguments[0]
                ? h ||
                  ((h = !0),
                  u.warn(
                    "BigNumber.toString does not accept any parameters; base-10 is assumed"
                  ))
                : 16 === arguments[0]
                ? u.throwError(
                    "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
                    s.Logger.errors.UNEXPECTED_ARGUMENT,
                    {}
                  )
                : u.throwError(
                    "BigNumber.toString does not accept parameters",
                    s.Logger.errors.UNEXPECTED_ARGUMENT,
                    {}
                  )),
            m(this).toString(10)
          );
        }
        toHexString() {
          return this._hex;
        }
        toJSON(e) {
          return { type: "BigNumber", hex: this.toHexString() };
        }
        static from(e) {
          if (e instanceof d) return e;
          if ("string" == typeof e)
            return e.match(/^-?0x[0-9a-f]+$/i)
              ? new d(c, p(e))
              : e.match(/^-?[0-9]+$/)
              ? new d(c, p(new l(e)))
              : u.throwArgumentError("invalid BigNumber string", "value", e);
          if ("number" == typeof e)
            return (
              e % 1 && y("underflow", "BigNumber.from", e),
              (e >= 9007199254740991 || e <= -9007199254740991) &&
                y("overflow", "BigNumber.from", e),
              d.from(String(e))
            );
          if ("bigint" == typeof e) return d.from(e.toString());
          if ((0, o.isBytes)(e)) return d.from((0, o.hexlify)(e));
          if (e) {
            if (e.toHexString) {
              let t = e.toHexString();
              if ("string" == typeof t) return d.from(t);
            } else {
              let t = e._hex;
              if (
                (null == t && "BigNumber" === e.type && (t = e.hex),
                "string" == typeof t &&
                  ((0, o.isHexString)(t) ||
                    ("-" === t[0] && (0, o.isHexString)(t.substring(1)))))
              )
                return d.from(t);
            }
          }
          return u.throwArgumentError("invalid BigNumber value", "value", e);
        }
        static isBigNumber(e) {
          return !!(e && e._isBigNumber);
        }
      }
      function p(e) {
        if ("string" != typeof e) return p(e.toString(16));
        if ("-" === e[0])
          return ("-" === (e = e.substring(1))[0] &&
            u.throwArgumentError("invalid hex", "value", e),
          "0x00" === (e = p(e)))
            ? e
            : "-" + e;
        if (("0x" !== e.substring(0, 2) && (e = "0x" + e), "0x" === e))
          return "0x00";
        for (
          e.length % 2 && (e = "0x0" + e.substring(2));
          e.length > 4 && "0x00" === e.substring(0, 4);

        )
          e = "0x" + e.substring(4);
        return e;
      }
      function g(e) {
        return d.from(p(e));
      }
      function m(e) {
        let t = d.from(e).toHexString();
        return "-" === t[0]
          ? new l("-" + t.substring(3), 16)
          : new l(t.substring(2), 16);
      }
      function y(e, t, r) {
        let n = { fault: e, operation: t };
        return (
          null != r && (n.value = r),
          u.throwError(e, s.Logger.errors.NUMERIC_FAULT, n)
        );
      }
      function v(e) {
        return new l(e, 36).toString(16);
      }
      function b(e) {
        return new l(e, 16).toString(36);
      }
    },
    7730: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          arrayify: function () {
            return u;
          },
          concat: function () {
            return c;
          },
          hexConcat: function () {
            return v;
          },
          hexDataLength: function () {
            return m;
          },
          hexDataSlice: function () {
            return y;
          },
          hexStripZeros: function () {
            return A;
          },
          hexValue: function () {
            return b;
          },
          hexZeroPad: function () {
            return w;
          },
          hexlify: function () {
            return g;
          },
          isBytes: function () {
            return l;
          },
          isBytesLike: function () {
            return s;
          },
          isHexString: function () {
            return d;
          },
          joinSignature: function () {
            return x;
          },
          splitSignature: function () {
            return E;
          },
          stripZeros: function () {
            return f;
          },
          zeroPad: function () {
            return h;
          },
        });
      let n = new (r(67214).Logger)("bytes/5.7.0");
      function i(e) {
        return !!e.toHexString;
      }
      function o(e) {
        return (
          e.slice ||
            (e.slice = function () {
              let t = Array.prototype.slice.call(arguments);
              return o(new Uint8Array(Array.prototype.slice.apply(e, t)));
            }),
          e
        );
      }
      function s(e) {
        return (d(e) && !(e.length % 2)) || l(e);
      }
      function a(e) {
        return "number" == typeof e && e == e && e % 1 == 0;
      }
      function l(e) {
        if (null == e) return !1;
        if (e.constructor === Uint8Array) return !0;
        if ("string" == typeof e || !a(e.length) || e.length < 0) return !1;
        for (let t = 0; t < e.length; t++) {
          let r = e[t];
          if (!a(r) || r < 0 || r >= 256) return !1;
        }
        return !0;
      }
      function u(e, t) {
        if ((t || (t = {}), "number" == typeof e)) {
          n.checkSafeUint53(e, "invalid arrayify value");
          let t = [];
          for (; e; ) t.unshift(255 & e), (e = parseInt(String(e / 256)));
          return 0 === t.length && t.push(0), o(new Uint8Array(t));
        }
        if (
          (t.allowMissingPrefix &&
            "string" == typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          i(e) && (e = e.toHexString()),
          d(e))
        ) {
          let r = e.substring(2);
          r.length % 2 &&
            ("left" === t.hexPad
              ? (r = "0" + r)
              : "right" === t.hexPad
              ? (r += "0")
              : n.throwArgumentError("hex data is odd-length", "value", e));
          let i = [];
          for (let e = 0; e < r.length; e += 2)
            i.push(parseInt(r.substring(e, e + 2), 16));
          return o(new Uint8Array(i));
        }
        return l(e)
          ? o(new Uint8Array(e))
          : n.throwArgumentError("invalid arrayify value", "value", e);
      }
      function c(e) {
        let t = e.map((e) => u(e)),
          r = t.reduce((e, t) => e + t.length, 0),
          n = new Uint8Array(r);
        return t.reduce((e, t) => (n.set(t, e), e + t.length), 0), o(n);
      }
      function f(e) {
        let t = u(e);
        if (0 === t.length) return t;
        let r = 0;
        for (; r < t.length && 0 === t[r]; ) r++;
        return r && (t = t.slice(r)), t;
      }
      function h(e, t) {
        (e = u(e)).length > t &&
          n.throwArgumentError("value out of range", "value", arguments[0]);
        let r = new Uint8Array(t);
        return r.set(e, t - e.length), o(r);
      }
      function d(e, t) {
        return (
          "string" == typeof e &&
          !!e.match(/^0x[0-9A-Fa-f]*$/) &&
          (!t || e.length === 2 + 2 * t)
        );
      }
      let p = "0123456789abcdef";
      function g(e, t) {
        if ((t || (t = {}), "number" == typeof e)) {
          n.checkSafeUint53(e, "invalid hexlify value");
          let t = "";
          for (; e; ) (t = p[15 & e] + t), (e = Math.floor(e / 16));
          return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00";
        }
        if ("bigint" == typeof e)
          return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
        if (
          (t.allowMissingPrefix &&
            "string" == typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          i(e))
        )
          return e.toHexString();
        if (d(e))
          return (
            e.length % 2 &&
              ("left" === t.hexPad
                ? (e = "0x0" + e.substring(2))
                : "right" === t.hexPad
                ? (e += "0")
                : n.throwArgumentError("hex data is odd-length", "value", e)),
            e.toLowerCase()
          );
        if (l(e)) {
          let t = "0x";
          for (let r = 0; r < e.length; r++) {
            let n = e[r];
            t += p[(240 & n) >> 4] + p[15 & n];
          }
          return t;
        }
        return n.throwArgumentError("invalid hexlify value", "value", e);
      }
      function m(e) {
        if ("string" != typeof e) e = g(e);
        else if (!d(e) || e.length % 2) return null;
        return (e.length - 2) / 2;
      }
      function y(e, t, r) {
        return ("string" != typeof e
          ? (e = g(e))
          : (!d(e) || e.length % 2) &&
            n.throwArgumentError("invalid hexData", "value", e),
        (t = 2 + 2 * t),
        null != r)
          ? "0x" + e.substring(t, 2 + 2 * r)
          : "0x" + e.substring(t);
      }
      function v(e) {
        let t = "0x";
        return (
          e.forEach((e) => {
            t += g(e).substring(2);
          }),
          t
        );
      }
      function b(e) {
        let t = A(g(e, { hexPad: "left" }));
        return "0x" === t ? "0x0" : t;
      }
      function A(e) {
        "string" != typeof e && (e = g(e)),
          d(e) || n.throwArgumentError("invalid hex string", "value", e),
          (e = e.substring(2));
        let t = 0;
        for (; t < e.length && "0" === e[t]; ) t++;
        return "0x" + e.substring(t);
      }
      function w(e, t) {
        for (
          "string" != typeof e
            ? (e = g(e))
            : d(e) || n.throwArgumentError("invalid hex string", "value", e),
            e.length > 2 * t + 2 &&
              n.throwArgumentError("value out of range", "value", arguments[1]);
          e.length < 2 * t + 2;

        )
          e = "0x0" + e.substring(2);
        return e;
      }
      function E(e) {
        let t = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (s(e)) {
          let r = u(e);
          64 === r.length
            ? ((t.v = 27 + (r[32] >> 7)),
              (r[32] &= 127),
              (t.r = g(r.slice(0, 32))),
              (t.s = g(r.slice(32, 64))))
            : 65 === r.length
            ? ((t.r = g(r.slice(0, 32))),
              (t.s = g(r.slice(32, 64))),
              (t.v = r[64]))
            : n.throwArgumentError("invalid signature string", "signature", e),
            t.v < 27 &&
              (0 === t.v || 1 === t.v
                ? (t.v += 27)
                : n.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    e
                  )),
            (t.recoveryParam = 1 - (t.v % 2)),
            t.recoveryParam && (r[32] |= 128),
            (t._vs = g(r.slice(32, 64)));
        } else {
          if (
            ((t.r = e.r),
            (t.s = e.s),
            (t.v = e.v),
            (t.recoveryParam = e.recoveryParam),
            (t._vs = e._vs),
            null != t._vs)
          ) {
            let r = h(u(t._vs), 32);
            t._vs = g(r);
            let i = r[0] >= 128 ? 1 : 0;
            null == t.recoveryParam
              ? (t.recoveryParam = i)
              : t.recoveryParam !== i &&
                n.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  e
                ),
              (r[0] &= 127);
            let o = g(r);
            null == t.s
              ? (t.s = o)
              : t.s !== o &&
                n.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  e
                );
          }
          if (null == t.recoveryParam)
            null == t.v
              ? n.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  e
                )
              : 0 === t.v || 1 === t.v
              ? (t.recoveryParam = t.v)
              : (t.recoveryParam = 1 - (t.v % 2));
          else if (null == t.v) t.v = 27 + t.recoveryParam;
          else {
            let r = 0 === t.v || 1 === t.v ? t.v : 1 - (t.v % 2);
            t.recoveryParam !== r &&
              n.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                e
              );
          }
          null != t.r && d(t.r)
            ? (t.r = w(t.r, 32))
            : n.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                e
              ),
            null != t.s && d(t.s)
              ? (t.s = w(t.s, 32))
              : n.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  e
                );
          let r = u(t.s);
          r[0] >= 128 &&
            n.throwArgumentError("signature s out of range", "signature", e),
            t.recoveryParam && (r[0] |= 128);
          let i = g(r);
          t._vs &&
            (d(t._vs) ||
              n.throwArgumentError("signature invalid _vs", "signature", e),
            (t._vs = w(t._vs, 32))),
            null == t._vs
              ? (t._vs = i)
              : t._vs !== i &&
                n.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  e
                );
        }
        return (
          (t.yParityAndS = t._vs),
          (t.compact = t.r + t.yParityAndS.substring(2)),
          t
        );
      }
      function x(e) {
        return g(c([(e = E(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]));
      }
    },
    73890: function (e, t, r) {
      "use strict";
      r.d(t, {
        Bz: function () {
          return a;
        },
        _Y: function () {
          return o;
        },
        fh: function () {
          return s;
        },
        tL: function () {
          return i;
        },
      });
      var n = r(30466);
      let i = n.O$.from(-1),
        o = n.O$.from(0),
        s = n.O$.from(1),
        a = n.O$.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        );
    },
    86392: function (e, t, r) {
      "use strict";
      r.d(t, {
        R: function () {
          return n;
        },
      });
      let n =
        "0x0000000000000000000000000000000000000000000000000000000000000000";
    },
    94794: function (e, t, r) {
      "use strict";
      r.d(t, {
        CH: function () {
          return P;
        },
      });
      var n = r(783),
        i = r(19440),
        o = r(62377),
        s = r(18833),
        a = r(56805),
        l = r(30466),
        u = r(7730),
        c = r(50357),
        f = r(11913),
        h = r(67214),
        d = function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s(e) {
              try {
                l(n.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })
                  ).then(s, a);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      let p = new h.Logger("contracts/5.7.0");
      function g(e, t) {
        return d(this, void 0, void 0, function* () {
          let r = yield t;
          "string" != typeof r &&
            p.throwArgumentError("invalid address or ENS name", "name", r);
          try {
            return (0, a.getAddress)(r);
          } catch (e) {}
          e ||
            p.throwError(
              "a provider or signer is needed to resolve ENS names",
              h.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "resolveName" }
            );
          let n = yield e.resolveName(r);
          return (
            null == n &&
              p.throwArgumentError(
                "resolver or addr is not configured for ENS name",
                "name",
                r
              ),
            n
          );
        });
      }
      function m(e, t, r) {
        return d(this, void 0, void 0, function* () {
          let n = {};
          r.length === t.inputs.length + 1 &&
            "object" == typeof r[r.length - 1] &&
            (n = (0, c.shallowCopy)(r.pop())),
            p.checkArgumentCount(
              r.length,
              t.inputs.length,
              "passed to contract"
            ),
            e.signer
              ? n.from
                ? (n.from = (0, c.resolveProperties)({
                    override: g(e.signer, n.from),
                    signer: e.signer.getAddress(),
                  }).then((e) =>
                    d(this, void 0, void 0, function* () {
                      return (
                        (0, a.getAddress)(e.signer) !== e.override &&
                          p.throwError(
                            "Contract with a Signer cannot override from",
                            h.Logger.errors.UNSUPPORTED_OPERATION,
                            { operation: "overrides.from" }
                          ),
                        e.override
                      );
                    })
                  ))
                : (n.from = e.signer.getAddress())
              : n.from && (n.from = g(e.provider, n.from));
          let i = yield (0, c.resolveProperties)({
              args: (function e(t, r, n) {
                return d(this, void 0, void 0, function* () {
                  return Array.isArray(n)
                    ? yield Promise.all(
                        n.map((n, i) =>
                          e(t, Array.isArray(r) ? r[i] : r[n.name], n)
                        )
                      )
                    : "address" === n.type
                    ? yield g(t, r)
                    : "tuple" === n.type
                    ? yield e(t, r, n.components)
                    : "array" === n.baseType
                    ? Array.isArray(r)
                      ? yield Promise.all(
                          r.map((r) => e(t, r, n.arrayChildren))
                        )
                      : Promise.reject(
                          p.makeError(
                            "invalid value for array",
                            h.Logger.errors.INVALID_ARGUMENT,
                            { argument: "value", value: r }
                          )
                        )
                    : r;
                });
              })(e.signer || e.provider, r, t.inputs),
              address: e.resolvedAddress,
              overrides: (0, c.resolveProperties)(n) || {},
            }),
            o = e.interface.encodeFunctionData(t, i.args),
            s = { data: o, to: i.address },
            m = i.overrides;
          if (
            (null != m.nonce && (s.nonce = l.O$.from(m.nonce).toNumber()),
            null != m.gasLimit && (s.gasLimit = l.O$.from(m.gasLimit)),
            null != m.gasPrice && (s.gasPrice = l.O$.from(m.gasPrice)),
            null != m.maxFeePerGas &&
              (s.maxFeePerGas = l.O$.from(m.maxFeePerGas)),
            null != m.maxPriorityFeePerGas &&
              (s.maxPriorityFeePerGas = l.O$.from(m.maxPriorityFeePerGas)),
            null != m.from && (s.from = m.from),
            null != m.type && (s.type = m.type),
            null != m.accessList &&
              (s.accessList = (0, f.accessListify)(m.accessList)),
            null == s.gasLimit && null != t.gas)
          ) {
            let e = 21e3,
              r = (0, u.arrayify)(o);
            for (let t = 0; t < r.length; t++) (e += 4), r[t] && (e += 64);
            s.gasLimit = l.O$.from(t.gas).add(e);
          }
          if (m.value) {
            let e = l.O$.from(m.value);
            e.isZero() ||
              t.payable ||
              p.throwError(
                "non-payable method cannot override value",
                h.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "overrides.value", value: n.value }
              ),
              (s.value = e);
          }
          m.customData && (s.customData = (0, c.shallowCopy)(m.customData)),
            m.ccipReadEnabled && (s.ccipReadEnabled = !!m.ccipReadEnabled),
            delete n.nonce,
            delete n.gasLimit,
            delete n.gasPrice,
            delete n.from,
            delete n.value,
            delete n.type,
            delete n.accessList,
            delete n.maxFeePerGas,
            delete n.maxPriorityFeePerGas,
            delete n.customData,
            delete n.ccipReadEnabled;
          let y = Object.keys(n).filter((e) => null != n[e]);
          return (
            y.length &&
              p.throwError(
                `cannot override ${y.map((e) => JSON.stringify(e)).join(",")}`,
                h.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "overrides", overrides: y }
              ),
            s
          );
        });
      }
      function y(e, t, r) {
        let n = e.signer || e.provider;
        return function (...i) {
          return d(this, void 0, void 0, function* () {
            let o;
            if (
              i.length === t.inputs.length + 1 &&
              "object" == typeof i[i.length - 1]
            ) {
              let e = (0, c.shallowCopy)(i.pop());
              null != e.blockTag && (o = yield e.blockTag),
                delete e.blockTag,
                i.push(e);
            }
            null != e.deployTransaction && (yield e._deployed(o));
            let s = yield m(e, t, i),
              a = yield n.call(s, o);
            try {
              let n = e.interface.decodeFunctionResult(t, a);
              return r && 1 === t.outputs.length && (n = n[0]), n;
            } catch (t) {
              throw (
                (t.code === h.Logger.errors.CALL_EXCEPTION &&
                  ((t.address = e.address), (t.args = i), (t.transaction = s)),
                t)
              );
            }
          });
        };
      }
      function v(e, t, r) {
        return t.constant
          ? y(e, t, r)
          : function (...r) {
              return d(this, void 0, void 0, function* () {
                e.signer ||
                  p.throwError(
                    "sending a transaction requires a signer",
                    h.Logger.errors.UNSUPPORTED_OPERATION,
                    { operation: "sendTransaction" }
                  ),
                  null != e.deployTransaction && (yield e._deployed());
                let n = yield m(e, t, r),
                  i = yield e.signer.sendTransaction(n);
                return (
                  (function (e, t) {
                    let r = t.wait.bind(t);
                    t.wait = (t) =>
                      r(t).then(
                        (t) => (
                          (t.events = t.logs.map((r) => {
                            let n = (0, c.deepCopy)(r),
                              i = null;
                            try {
                              i = e.interface.parseLog(r);
                            } catch (e) {}
                            return (
                              i &&
                                ((n.args = i.args),
                                (n.decode = (t, r) =>
                                  e.interface.decodeEventLog(
                                    i.eventFragment,
                                    t,
                                    r
                                  )),
                                (n.event = i.name),
                                (n.eventSignature = i.signature)),
                              (n.removeListener = () => e.provider),
                              (n.getBlock = () =>
                                e.provider.getBlock(t.blockHash)),
                              (n.getTransaction = () =>
                                e.provider.getTransaction(t.transactionHash)),
                              (n.getTransactionReceipt = () =>
                                Promise.resolve(t)),
                              n
                            );
                          })),
                          t
                        )
                      );
                  })(e, i),
                  i
                );
              });
            };
      }
      function b(e) {
        return e.address && (null == e.topics || 0 === e.topics.length)
          ? "*"
          : (e.address || "*") +
              "@" +
              (e.topics
                ? e.topics
                    .map((e) => (Array.isArray(e) ? e.join("|") : e))
                    .join(":")
                : "");
      }
      class A {
        constructor(e, t) {
          (0, c.defineReadOnly)(this, "tag", e),
            (0, c.defineReadOnly)(this, "filter", t),
            (this._listeners = []);
        }
        addListener(e, t) {
          this._listeners.push({ listener: e, once: t });
        }
        removeListener(e) {
          let t = !1;
          this._listeners = this._listeners.filter(
            (r) => !!t || r.listener !== e || ((t = !0), !1)
          );
        }
        removeAllListeners() {
          this._listeners = [];
        }
        listeners() {
          return this._listeners.map((e) => e.listener);
        }
        listenerCount() {
          return this._listeners.length;
        }
        run(e) {
          let t = this.listenerCount();
          return (
            (this._listeners = this._listeners.filter((t) => {
              let r = e.slice();
              return (
                setTimeout(() => {
                  t.listener.apply(this, r);
                }, 0),
                !t.once
              );
            })),
            t
          );
        }
        prepareEvent(e) {}
        getEmit(e) {
          return [e];
        }
      }
      class w extends A {
        constructor() {
          super("error", null);
        }
      }
      class E extends A {
        constructor(e, t, r, n) {
          let i = { address: e },
            o = t.getEventTopic(r);
          n
            ? (o !== n[0] &&
                p.throwArgumentError("topic mismatch", "topics", n),
              (i.topics = n.slice()))
            : (i.topics = [o]),
            super(b(i), i),
            (0, c.defineReadOnly)(this, "address", e),
            (0, c.defineReadOnly)(this, "interface", t),
            (0, c.defineReadOnly)(this, "fragment", r);
        }
        prepareEvent(e) {
          super.prepareEvent(e),
            (e.event = this.fragment.name),
            (e.eventSignature = this.fragment.format()),
            (e.decode = (e, t) =>
              this.interface.decodeEventLog(this.fragment, e, t));
          try {
            e.args = this.interface.decodeEventLog(
              this.fragment,
              e.data,
              e.topics
            );
          } catch (t) {
            (e.args = null), (e.decodeError = t);
          }
        }
        getEmit(e) {
          let t = (0, n.BR)(e.args);
          if (t.length) throw t[0].error;
          let r = (e.args || []).slice();
          return r.push(e), r;
        }
      }
      class x extends A {
        constructor(e, t) {
          super("*", { address: e }),
            (0, c.defineReadOnly)(this, "address", e),
            (0, c.defineReadOnly)(this, "interface", t);
        }
        prepareEvent(e) {
          super.prepareEvent(e);
          try {
            let t = this.interface.parseLog(e);
            (e.event = t.name),
              (e.eventSignature = t.signature),
              (e.decode = (e, r) =>
                this.interface.decodeEventLog(t.eventFragment, e, r)),
              (e.args = t.args);
          } catch (e) {}
        }
      }
      class S {
        constructor(e, t, r) {
          (0, c.defineReadOnly)(
            this,
            "interface",
            (0, c.getStatic)(new.target, "getInterface")(t)
          ),
            null == r
              ? ((0, c.defineReadOnly)(this, "provider", null),
                (0, c.defineReadOnly)(this, "signer", null))
              : s.E.isSigner(r)
              ? ((0, c.defineReadOnly)(this, "provider", r.provider || null),
                (0, c.defineReadOnly)(this, "signer", r))
              : o.zt.isProvider(r)
              ? ((0, c.defineReadOnly)(this, "provider", r),
                (0, c.defineReadOnly)(this, "signer", null))
              : p.throwArgumentError(
                  "invalid signer or provider",
                  "signerOrProvider",
                  r
                ),
            (0, c.defineReadOnly)(this, "callStatic", {}),
            (0, c.defineReadOnly)(this, "estimateGas", {}),
            (0, c.defineReadOnly)(this, "functions", {}),
            (0, c.defineReadOnly)(this, "populateTransaction", {}),
            (0, c.defineReadOnly)(this, "filters", {});
          {
            let e = {};
            Object.keys(this.interface.events).forEach((t) => {
              let r = this.interface.events[t];
              (0, c.defineReadOnly)(this.filters, t, (...e) => ({
                address: this.address,
                topics: this.interface.encodeFilterTopics(r, e),
              })),
                e[r.name] || (e[r.name] = []),
                e[r.name].push(t);
            }),
              Object.keys(e).forEach((t) => {
                let r = e[t];
                1 === r.length
                  ? (0, c.defineReadOnly)(this.filters, t, this.filters[r[0]])
                  : p.warn(`Duplicate definition of ${t} (${r.join(", ")})`);
              });
          }
          if (
            ((0, c.defineReadOnly)(this, "_runningEvents", {}),
            (0, c.defineReadOnly)(this, "_wrappedEmits", {}),
            null == e &&
              p.throwArgumentError(
                "invalid contract address or ENS name",
                "addressOrName",
                e
              ),
            (0, c.defineReadOnly)(this, "address", e),
            this.provider)
          )
            (0, c.defineReadOnly)(this, "resolvedAddress", g(this.provider, e));
          else
            try {
              (0, c.defineReadOnly)(
                this,
                "resolvedAddress",
                Promise.resolve((0, a.getAddress)(e))
              );
            } catch (e) {
              p.throwError(
                "provider is required to use ENS name as contract address",
                h.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "new Contract" }
              );
            }
          this.resolvedAddress.catch((e) => {});
          let n = {},
            i = {};
          Object.keys(this.interface.functions).forEach((e) => {
            let t = this.interface.functions[e];
            if (i[e]) {
              p.warn(`Duplicate ABI entry for ${JSON.stringify(e)}`);
              return;
            }
            i[e] = !0;
            {
              let r = t.name;
              n[`%${r}`] || (n[`%${r}`] = []), n[`%${r}`].push(e);
            }
            if (
              (null == this[e] &&
                (0, c.defineReadOnly)(this, e, v(this, t, !0)),
              null == this.functions[e] &&
                (0, c.defineReadOnly)(this.functions, e, v(this, t, !1)),
              null == this.callStatic[e] &&
                (0, c.defineReadOnly)(this.callStatic, e, y(this, t, !0)),
              null == this.populateTransaction[e])
            ) {
              var r;
              (0, c.defineReadOnly)(
                this.populateTransaction,
                e,
                ((r = this),
                function (...e) {
                  return m(r, t, e);
                })
              );
            }
            null == this.estimateGas[e] &&
              (0, c.defineReadOnly)(
                this.estimateGas,
                e,
                (function (e, t) {
                  let r = e.signer || e.provider;
                  return function (...n) {
                    return d(this, void 0, void 0, function* () {
                      r ||
                        p.throwError(
                          "estimate require a provider or signer",
                          h.Logger.errors.UNSUPPORTED_OPERATION,
                          { operation: "estimateGas" }
                        );
                      let i = yield m(e, t, n);
                      return yield r.estimateGas(i);
                    });
                  };
                })(this, t)
              );
          }),
            Object.keys(n).forEach((e) => {
              let t = n[e];
              if (t.length > 1) return;
              e = e.substring(1);
              let r = t[0];
              try {
                null == this[e] && (0, c.defineReadOnly)(this, e, this[r]);
              } catch (e) {}
              null == this.functions[e] &&
                (0, c.defineReadOnly)(this.functions, e, this.functions[r]),
                null == this.callStatic[e] &&
                  (0, c.defineReadOnly)(this.callStatic, e, this.callStatic[r]),
                null == this.populateTransaction[e] &&
                  (0, c.defineReadOnly)(
                    this.populateTransaction,
                    e,
                    this.populateTransaction[r]
                  ),
                null == this.estimateGas[e] &&
                  (0, c.defineReadOnly)(
                    this.estimateGas,
                    e,
                    this.estimateGas[r]
                  );
            });
        }
        static getContractAddress(e) {
          return (0, a.getContractAddress)(e);
        }
        static getInterface(e) {
          return i.vU.isInterface(e) ? e : new i.vU(e);
        }
        deployed() {
          return this._deployed();
        }
        _deployed(e) {
          return (
            this._deployedPromise ||
              (this.deployTransaction
                ? (this._deployedPromise = this.deployTransaction
                    .wait()
                    .then(() => this))
                : (this._deployedPromise = this.provider
                    .getCode(this.address, e)
                    .then(
                      (e) => (
                        "0x" === e &&
                          p.throwError(
                            "contract not deployed",
                            h.Logger.errors.UNSUPPORTED_OPERATION,
                            {
                              contractAddress: this.address,
                              operation: "getDeployed",
                            }
                          ),
                        this
                      )
                    ))),
            this._deployedPromise
          );
        }
        fallback(e) {
          this.signer ||
            p.throwError(
              "sending a transactions require a signer",
              h.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "sendTransaction(fallback)" }
            );
          let t = (0, c.shallowCopy)(e || {});
          return (
            ["from", "to"].forEach(function (e) {
              null != t[e] &&
                p.throwError(
                  "cannot override " + e,
                  h.Logger.errors.UNSUPPORTED_OPERATION,
                  { operation: e }
                );
            }),
            (t.to = this.resolvedAddress),
            this.deployed().then(() => this.signer.sendTransaction(t))
          );
        }
        connect(e) {
          "string" == typeof e && (e = new s.b(e, this.provider));
          let t = new this.constructor(this.address, this.interface, e);
          return (
            this.deployTransaction &&
              (0, c.defineReadOnly)(
                t,
                "deployTransaction",
                this.deployTransaction
              ),
            t
          );
        }
        attach(e) {
          return new this.constructor(
            e,
            this.interface,
            this.signer || this.provider
          );
        }
        static isIndexed(e) {
          return i.Hk.isIndexed(e);
        }
        _normalizeRunningEvent(e) {
          return this._runningEvents[e.tag] ? this._runningEvents[e.tag] : e;
        }
        _getRunningEvent(e) {
          if ("string" == typeof e) {
            if ("error" === e) return this._normalizeRunningEvent(new w());
            if ("event" === e)
              return this._normalizeRunningEvent(new A("event", null));
            if ("*" === e)
              return this._normalizeRunningEvent(
                new x(this.address, this.interface)
              );
            let t = this.interface.getEvent(e);
            return this._normalizeRunningEvent(
              new E(this.address, this.interface, t)
            );
          }
          if (e.topics && e.topics.length > 0) {
            try {
              let t = e.topics[0];
              if ("string" != typeof t) throw Error("invalid topic");
              let r = this.interface.getEvent(t);
              return this._normalizeRunningEvent(
                new E(this.address, this.interface, r, e.topics)
              );
            } catch (e) {}
            let t = { address: this.address, topics: e.topics };
            return this._normalizeRunningEvent(new A(b(t), t));
          }
          return this._normalizeRunningEvent(
            new x(this.address, this.interface)
          );
        }
        _checkRunningEvents(e) {
          if (0 === e.listenerCount()) {
            delete this._runningEvents[e.tag];
            let t = this._wrappedEmits[e.tag];
            t &&
              e.filter &&
              (this.provider.off(e.filter, t),
              delete this._wrappedEmits[e.tag]);
          }
        }
        _wrapEvent(e, t, r) {
          let n = (0, c.deepCopy)(t);
          return (
            (n.removeListener = () => {
              r && (e.removeListener(r), this._checkRunningEvents(e));
            }),
            (n.getBlock = () => this.provider.getBlock(t.blockHash)),
            (n.getTransaction = () =>
              this.provider.getTransaction(t.transactionHash)),
            (n.getTransactionReceipt = () =>
              this.provider.getTransactionReceipt(t.transactionHash)),
            e.prepareEvent(n),
            n
          );
        }
        _addEventListener(e, t, r) {
          if (
            (this.provider ||
              p.throwError(
                "events require a provider or a signer with a provider",
                h.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "once" }
              ),
            e.addListener(t, r),
            (this._runningEvents[e.tag] = e),
            !this._wrappedEmits[e.tag])
          ) {
            let r = (r) => {
              let n = this._wrapEvent(e, r, t);
              if (null == n.decodeError)
                try {
                  let t = e.getEmit(n);
                  this.emit(e.filter, ...t);
                } catch (e) {
                  n.decodeError = e.error;
                }
              null != e.filter && this.emit("event", n),
                null != n.decodeError && this.emit("error", n.decodeError, n);
            };
            (this._wrappedEmits[e.tag] = r),
              null != e.filter && this.provider.on(e.filter, r);
          }
        }
        queryFilter(e, t, r) {
          let n = this._getRunningEvent(e),
            i = (0, c.shallowCopy)(n.filter);
          return (
            "string" == typeof t && (0, u.isHexString)(t, 32)
              ? (null != r &&
                  p.throwArgumentError(
                    "cannot specify toBlock with blockhash",
                    "toBlock",
                    r
                  ),
                (i.blockHash = t))
              : ((i.fromBlock = null != t ? t : 0),
                (i.toBlock = null != r ? r : "latest")),
            this.provider
              .getLogs(i)
              .then((e) => e.map((e) => this._wrapEvent(n, e, null)))
          );
        }
        on(e, t) {
          return this._addEventListener(this._getRunningEvent(e), t, !1), this;
        }
        once(e, t) {
          return this._addEventListener(this._getRunningEvent(e), t, !0), this;
        }
        emit(e, ...t) {
          if (!this.provider) return !1;
          let r = this._getRunningEvent(e),
            n = r.run(t) > 0;
          return this._checkRunningEvents(r), n;
        }
        listenerCount(e) {
          return this.provider
            ? null == e
              ? Object.keys(this._runningEvents).reduce(
                  (e, t) => e + this._runningEvents[t].listenerCount(),
                  0
                )
              : this._getRunningEvent(e).listenerCount()
            : 0;
        }
        listeners(e) {
          if (!this.provider) return [];
          if (null == e) {
            let e = [];
            for (let t in this._runningEvents)
              this._runningEvents[t].listeners().forEach((t) => {
                e.push(t);
              });
            return e;
          }
          return this._getRunningEvent(e).listeners();
        }
        removeAllListeners(e) {
          if (!this.provider) return this;
          if (null == e) {
            for (let e in this._runningEvents) {
              let t = this._runningEvents[e];
              t.removeAllListeners(), this._checkRunningEvents(t);
            }
            return this;
          }
          let t = this._getRunningEvent(e);
          return t.removeAllListeners(), this._checkRunningEvents(t), this;
        }
        off(e, t) {
          if (!this.provider) return this;
          let r = this._getRunningEvent(e);
          return r.removeListener(t), this._checkRunningEvents(r), this;
        }
        removeListener(e, t) {
          return this.off(e, t);
        }
      }
      class P extends S {}
    },
    5469: function (e, t, r) {
      "use strict";
      r.d(t, {
        i: function () {
          return n;
        },
      });
      let n = "hash/5.7.0";
    },
    57934: function (e, t, r) {
      "use strict";
      r.d(t, {
        id: function () {
          return o;
        },
      });
      var n = r(14752),
        i = r(35321);
      function o(e) {
        return (0, n.keccak256)((0, i.Y0)(e));
      }
    },
    8749: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          _TypedDataEncoder: function () {
            return s.E;
          },
          dnsEncode: function () {
            return i.Kn;
          },
          ensNormalize: function () {
            return i.w3;
          },
          hashMessage: function () {
            return o.r;
          },
          id: function () {
            return n.id;
          },
          isValidName: function () {
            return i.r1;
          },
          messagePrefix: function () {
            return o.B;
          },
          namehash: function () {
            return i.VM;
          },
        });
      var n = r(57934),
        i = r(92642),
        o = r(75470),
        s = r(22396);
    },
    75470: function (e, t, r) {
      "use strict";
      r.d(t, {
        B: function () {
          return s;
        },
        r: function () {
          return a;
        },
      });
      var n = r(7730),
        i = r(14752),
        o = r(35321);
      let s = "\x19Ethereum Signed Message:\n";
      function a(e) {
        return (
          "string" == typeof e && (e = (0, o.Y0)(e)),
          (0, i.keccak256)(
            (0, n.concat)([(0, o.Y0)(s), (0, o.Y0)(String(e.length)), e])
          )
        );
      }
    },
    92642: function (e, t, r) {
      "use strict";
      let n, i;
      r.d(t, {
        Kn: function () {
          return C;
        },
        w3: function () {
          return O;
        },
        r1: function () {
          return k;
        },
        VM: function () {
          return _;
        },
      });
      var o,
        s = r(7730),
        a = r(35321),
        l = r(14752),
        u = r(67214),
        c = r(5469);
      function f(e, t) {
        null == t && (t = 1);
        let r = [],
          n = r.forEach,
          i = function (e, t) {
            n.call(e, function (e) {
              t > 0 && Array.isArray(e) ? i(e, t - 1) : r.push(e);
            });
          };
        return i(e, t), r;
      }
      function h(e, t) {
        let r = Array(e);
        for (let n = 0, i = -1; n < e; n++) r[n] = i += 1 + t();
        return r;
      }
      function d(e, t) {
        let r = h(e(), e),
          n = e(),
          i = h(n, e),
          o = (function (e, t) {
            let r = Array(e);
            for (let n = 0; n < e; n++) r[n] = 1 + t();
            return r;
          })(n, e);
        for (let e = 0; e < n; e++)
          for (let t = 0; t < o[e]; t++) r.push(i[e] + t);
        return t ? r.map((e) => t[e]) : r;
      }
      function p(e, t, r) {
        let n = Array(e)
          .fill(void 0)
          .map(() => []);
        for (let i = 0; i < t; i++)
          (function (e, t) {
            let r = Array(e);
            for (let i = 0, o = 0; i < e; i++) {
              var n;
              r[i] = o += 1 & (n = t()) ? ~n >> 1 : n >> 1;
            }
            return r;
          })(e, r).forEach((e, t) => n[t].push(e));
        return n;
      }
      let g =
          ((o = (function (e) {
            let t = 0;
            function r() {
              return (e[t++] << 8) | e[t++];
            }
            let n = r(),
              i = 1,
              o = [0, 1];
            for (let e = 1; e < n; e++) o.push((i += r()));
            let s = r(),
              a = t;
            t += s;
            let l = 0,
              u = 0;
            function c() {
              return (
                0 == l && ((u = (u << 8) | e[t++]), (l = 8)), (u >> --l) & 1
              );
            }
            let f = 0;
            for (let e = 0; e < 31; e++) f = (f << 1) | c();
            let h = [],
              d = 0,
              p = 2147483648;
            for (;;) {
              let e = Math.floor(((f - d + 1) * i - 1) / p),
                t = 0,
                r = n;
              for (; r - t > 1; ) {
                let n = (t + r) >>> 1;
                e < o[n] ? (r = n) : (t = n);
              }
              if (0 == t) break;
              h.push(t);
              let s = d + Math.floor((p * o[t]) / i),
                a = d + Math.floor((p * o[t + 1]) / i) - 1;
              for (; ((s ^ a) & 1073741824) == 0; )
                (f = ((f << 1) & 2147483647) | c()),
                  (s = (s << 1) & 2147483647),
                  (a = ((a << 1) & 2147483647) | 1);
              for (; s & ~a & 536870912; )
                (f = (1073741824 & f) | ((f << 1) & 1073741823) | c()),
                  (s = (s << 1) ^ 1073741824),
                  (a = ((1073741824 ^ a) << 1) | 1073741825);
              (d = s), (p = 1 + a - s);
            }
            let g = n - 4;
            return h.map((t) => {
              switch (t - g) {
                case 3:
                  return g + 65792 + ((e[a++] << 16) | (e[a++] << 8) | e[a++]);
                case 2:
                  return g + 256 + ((e[a++] << 8) | e[a++]);
                case 1:
                  return g + e[a++];
                default:
                  return t - 1;
              }
            });
          })(
            (0, r(91710).J)(
              "AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="
            )
          )),
          (i = 0),
          () => o[i++]),
        m = new Set(d(g)),
        y = new Set(d(g)),
        v = (function (e) {
          let t = [];
          for (;;) {
            let r = e();
            if (0 == r) break;
            t.push(
              (function (e, t) {
                let r = 1 + t(),
                  n = t(),
                  i = (function (e) {
                    let t = [];
                    for (;;) {
                      let r = e();
                      if (0 == r) break;
                      t.push(r);
                    }
                    return t;
                  })(t);
                return f(
                  p(i.length, 1 + e, t).map((e, t) => {
                    let o = e[0],
                      s = e.slice(1);
                    return Array(i[t])
                      .fill(void 0)
                      .map((e, t) => {
                        let i = t * n;
                        return [o + t * r, s.map((e) => e + i)];
                      });
                  })
                );
              })(r, e)
            );
          }
          for (;;) {
            let r = e() - 1;
            if (r < 0) break;
            t.push(p(1 + e(), 1 + r, e).map((e) => [e[0], e.slice(1)]));
          }
          return (function (e) {
            let t = {};
            for (let r = 0; r < e.length; r++) {
              let n = e[r];
              t[n[0]] = n[1];
            }
            return t;
          })(f(t));
        })(g),
        b =
          ((n = d(g).sort((e, t) => e - t)),
          (function e() {
            let t = [];
            for (;;) {
              let r = d(g, n);
              if (0 == r.length) break;
              t.push({ set: new Set(r), node: e() });
            }
            t.sort((e, t) => t.set.size - e.set.size);
            let r = g();
            return {
              branches: t,
              valid: r % 3,
              fe0f: !!(1 & (r = (r / 3) | 0)),
              save: 1 == (r >>= 1),
              check: 2 == r,
            };
          })());
      function A(e) {
        return e.filter((e) => 65039 != e);
      }
      function w(e) {
        for (let t of e.split(".")) {
          let e = (0, a.XL)(t);
          try {
            for (let t = e.lastIndexOf(95) - 1; t >= 0; t--)
              if (95 !== e[t]) throw Error("underscore only allowed at start");
            if (
              e.length >= 4 &&
              e.every((e) => e < 128) &&
              45 === e[2] &&
              45 === e[3]
            )
              throw Error("invalid label extension");
          } catch (e) {
            throw Error(`Invalid label "${t}": ${e.message}`);
          }
        }
        return e;
      }
      let E = new u.Logger(c.i),
        x = new Uint8Array(32);
      function S(e) {
        if (0 === e.length) throw Error("invalid ENS name; empty component");
        return e;
      }
      function P(e) {
        let t = (0, a.Y0)(
            w(
              (function (e, t) {
                let r = (0, a.XL)(e).reverse(),
                  n = [];
                for (; r.length; ) {
                  let e = (function (e, t) {
                    var r;
                    let n, i;
                    let o = b,
                      s = [],
                      a = e.length;
                    for (t && (t.length = 0); a; ) {
                      let l = e[--a];
                      if (
                        !(o =
                          null === (r = o.branches.find((e) => e.set.has(l))) ||
                          void 0 === r
                            ? void 0
                            : r.node)
                      )
                        break;
                      if (o.save) i = l;
                      else if (o.check && l === i) break;
                      s.push(l),
                        o.fe0f &&
                          (s.push(65039), a > 0 && 65039 == e[a - 1] && a--),
                        o.valid &&
                          ((n = s.slice()),
                          2 == o.valid && n.splice(1, 1),
                          t && t.push(...e.slice(a).reverse()),
                          (e.length = a));
                    }
                    return n;
                  })(r);
                  if (e) {
                    n.push(...t(e));
                    continue;
                  }
                  let i = r.pop();
                  if (m.has(i)) {
                    n.push(i);
                    continue;
                  }
                  if (y.has(i)) continue;
                  let o = v[i];
                  if (o) {
                    n.push(...o);
                    continue;
                  }
                  throw Error(
                    `Disallowed codepoint: 0x${i.toString(16).toUpperCase()}`
                  );
                }
                return w(String.fromCodePoint(...n).normalize("NFC"));
              })(e, A)
            )
          ),
          r = [];
        if (0 === e.length) return r;
        let n = 0;
        for (let e = 0; e < t.length; e++)
          46 === t[e] && (r.push(S(t.slice(n, e))), (n = e + 1));
        if (n >= t.length) throw Error("invalid ENS name; empty component");
        return r.push(S(t.slice(n))), r;
      }
      function O(e) {
        return P(e)
          .map((e) => (0, a.ZN)(e))
          .join(".");
      }
      function k(e) {
        try {
          return 0 !== P(e).length;
        } catch (e) {}
        return !1;
      }
      function _(e) {
        "string" != typeof e &&
          E.throwArgumentError("invalid ENS name; not a string", "name", e);
        let t = x,
          r = P(e);
        for (; r.length; )
          t = (0, l.keccak256)((0, s.concat)([t, (0, l.keccak256)(r.pop())]));
        return (0, s.hexlify)(t);
      }
      function C(e) {
        return (
          (0, s.hexlify)(
            (0, s.concat)(
              P(e).map((e) => {
                if (e.length > 63)
                  throw Error(
                    "invalid DNS encoded entry; length exceeds 63 bytes"
                  );
                let t = new Uint8Array(e.length + 1);
                return t.set(e, 1), (t[0] = t.length - 1), t;
              })
            )
          ) + "00"
        );
      }
      x.fill(0);
    },
    22396: function (e, t, r) {
      "use strict";
      r.d(t, {
        E: function () {
          return P;
        },
      });
      var n = r(56805),
        i = r(30466),
        o = r(7730),
        s = r(14752),
        a = r(50357),
        l = r(67214),
        u = r(5469),
        c = r(57934);
      let f = new l.Logger(u.i),
        h = new Uint8Array(32);
      h.fill(0);
      let d = i.O$.from(-1),
        p = i.O$.from(0),
        g = i.O$.from(1),
        m = i.O$.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        ),
        y = (0, o.hexZeroPad)(g.toHexString(), 32),
        v = (0, o.hexZeroPad)(p.toHexString(), 32),
        b = {
          name: "string",
          version: "string",
          chainId: "uint256",
          verifyingContract: "address",
          salt: "bytes32",
        },
        A = ["name", "version", "chainId", "verifyingContract", "salt"];
      function w(e) {
        return function (t) {
          return (
            "string" != typeof t &&
              f.throwArgumentError(
                `invalid domain value for ${JSON.stringify(e)}`,
                `domain.${e}`,
                t
              ),
            t
          );
        };
      }
      let E = {
        name: w("name"),
        version: w("version"),
        chainId: function (e) {
          try {
            return i.O$.from(e).toString();
          } catch (e) {}
          return f.throwArgumentError(
            'invalid domain value for "chainId"',
            "domain.chainId",
            e
          );
        },
        verifyingContract: function (e) {
          try {
            return (0, n.getAddress)(e).toLowerCase();
          } catch (e) {}
          return f.throwArgumentError(
            'invalid domain value "verifyingContract"',
            "domain.verifyingContract",
            e
          );
        },
        salt: function (e) {
          try {
            let t = (0, o.arrayify)(e);
            if (32 !== t.length) throw Error("bad length");
            return (0, o.hexlify)(t);
          } catch (e) {}
          return f.throwArgumentError(
            'invalid domain value "salt"',
            "domain.salt",
            e
          );
        },
      };
      function x(e) {
        {
          let t = e.match(/^(u?)int(\d*)$/);
          if (t) {
            let r = "" === t[1],
              n = parseInt(t[2] || "256");
            (n % 8 != 0 || n > 256 || (t[2] && t[2] !== String(n))) &&
              f.throwArgumentError("invalid numeric width", "type", e);
            let s = m.mask(r ? n - 1 : n),
              a = r ? s.add(g).mul(d) : p;
            return function (t) {
              let r = i.O$.from(t);
              return (
                (r.lt(a) || r.gt(s)) &&
                  f.throwArgumentError(
                    `value out-of-bounds for ${e}`,
                    "value",
                    t
                  ),
                (0, o.hexZeroPad)(r.toTwos(256).toHexString(), 32)
              );
            };
          }
        }
        {
          let t = e.match(/^bytes(\d+)$/);
          if (t) {
            let r = parseInt(t[1]);
            return (
              (0 === r || r > 32 || t[1] !== String(r)) &&
                f.throwArgumentError("invalid bytes width", "type", e),
              function (t) {
                return (
                  (0, o.arrayify)(t).length !== r &&
                    f.throwArgumentError(`invalid length for ${e}`, "value", t),
                  (function (e) {
                    let t = (0, o.arrayify)(e),
                      r = t.length % 32;
                    return r
                      ? (0, o.hexConcat)([t, h.slice(r)])
                      : (0, o.hexlify)(t);
                  })(t)
                );
              }
            );
          }
        }
        switch (e) {
          case "address":
            return function (e) {
              return (0, o.hexZeroPad)((0, n.getAddress)(e), 32);
            };
          case "bool":
            return function (e) {
              return e ? y : v;
            };
          case "bytes":
            return function (e) {
              return (0, s.keccak256)(e);
            };
          case "string":
            return function (e) {
              return (0, c.id)(e);
            };
        }
        return null;
      }
      function S(e, t) {
        return `${e}(${t
          .map(({ name: e, type: t }) => t + " " + e)
          .join(",")})`;
      }
      class P {
        constructor(e) {
          (0, a.defineReadOnly)(
            this,
            "types",
            Object.freeze((0, a.deepCopy)(e))
          ),
            (0, a.defineReadOnly)(this, "_encoderCache", {}),
            (0, a.defineReadOnly)(this, "_types", {});
          let t = {},
            r = {},
            n = {};
          for (let i in (Object.keys(e).forEach((e) => {
            (t[e] = {}), (r[e] = []), (n[e] = {});
          }),
          e)) {
            let n = {};
            e[i].forEach((o) => {
              n[o.name] &&
                f.throwArgumentError(
                  `duplicate variable name ${JSON.stringify(
                    o.name
                  )} in ${JSON.stringify(i)}`,
                  "types",
                  e
                ),
                (n[o.name] = !0);
              let s = o.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
              s === i &&
                f.throwArgumentError(
                  `circular type reference to ${JSON.stringify(s)}`,
                  "types",
                  e
                ),
                x(s) ||
                  (r[s] ||
                    f.throwArgumentError(
                      `unknown type ${JSON.stringify(s)}`,
                      "types",
                      e
                    ),
                  r[s].push(i),
                  (t[i][s] = !0));
            });
          }
          let i = Object.keys(r).filter((e) => 0 === r[e].length);
          for (let o in (0 === i.length
            ? f.throwArgumentError("missing primary type", "types", e)
            : i.length > 1 &&
              f.throwArgumentError(
                `ambiguous primary types or unused types: ${i
                  .map((e) => JSON.stringify(e))
                  .join(", ")}`,
                "types",
                e
              ),
          (0, a.defineReadOnly)(this, "primaryType", i[0]),
          !(function i(o, s) {
            s[o] &&
              f.throwArgumentError(
                `circular type reference to ${JSON.stringify(o)}`,
                "types",
                e
              ),
              (s[o] = !0),
              Object.keys(t[o]).forEach((e) => {
                r[e] &&
                  (i(e, s),
                  Object.keys(s).forEach((t) => {
                    n[t][e] = !0;
                  }));
              }),
              delete s[o];
          })(this.primaryType, {}),
          n)) {
            let t = Object.keys(n[o]);
            t.sort(),
              (this._types[o] = S(o, e[o]) + t.map((t) => S(t, e[t])).join(""));
          }
        }
        getEncoder(e) {
          let t = this._encoderCache[e];
          return t || (t = this._encoderCache[e] = this._getEncoder(e)), t;
        }
        _getEncoder(e) {
          {
            let t = x(e);
            if (t) return t;
          }
          let t = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (t) {
            let e = t[1],
              r = this.getEncoder(e),
              n = parseInt(t[3]);
            return (t) => {
              n >= 0 &&
                t.length !== n &&
                f.throwArgumentError(
                  "array length mismatch; expected length ${ arrayLength }",
                  "value",
                  t
                );
              let i = t.map(r);
              return (
                this._types[e] && (i = i.map(s.keccak256)),
                (0, s.keccak256)((0, o.hexConcat)(i))
              );
            };
          }
          let r = this.types[e];
          if (r) {
            let t = (0, c.id)(this._types[e]);
            return (e) => {
              let n = r.map(({ name: t, type: r }) => {
                let n = this.getEncoder(r)(e[t]);
                return this._types[r] ? (0, s.keccak256)(n) : n;
              });
              return n.unshift(t), (0, o.hexConcat)(n);
            };
          }
          return f.throwArgumentError(`unknown type: ${e}`, "type", e);
        }
        encodeType(e) {
          let t = this._types[e];
          return (
            t ||
              f.throwArgumentError(
                `unknown type: ${JSON.stringify(e)}`,
                "name",
                e
              ),
            t
          );
        }
        encodeData(e, t) {
          return this.getEncoder(e)(t);
        }
        hashStruct(e, t) {
          return (0, s.keccak256)(this.encodeData(e, t));
        }
        encode(e) {
          return this.encodeData(this.primaryType, e);
        }
        hash(e) {
          return this.hashStruct(this.primaryType, e);
        }
        _visit(e, t, r) {
          if (x(e)) return r(e, t);
          let n = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (n) {
            let e = n[1],
              i = parseInt(n[3]);
            return (
              i >= 0 &&
                t.length !== i &&
                f.throwArgumentError(
                  "array length mismatch; expected length ${ arrayLength }",
                  "value",
                  t
                ),
              t.map((t) => this._visit(e, t, r))
            );
          }
          let i = this.types[e];
          return i
            ? i.reduce(
                (e, { name: n, type: i }) => (
                  (e[n] = this._visit(i, t[n], r)), e
                ),
                {}
              )
            : f.throwArgumentError(`unknown type: ${e}`, "type", e);
        }
        visit(e, t) {
          return this._visit(this.primaryType, e, t);
        }
        static from(e) {
          return new P(e);
        }
        static getPrimaryType(e) {
          return P.from(e).primaryType;
        }
        static hashStruct(e, t, r) {
          return P.from(t).hashStruct(e, r);
        }
        static hashDomain(e) {
          let t = [];
          for (let r in e) {
            let n = b[r];
            n ||
              f.throwArgumentError(
                `invalid typed-data domain key: ${JSON.stringify(r)}`,
                "domain",
                e
              ),
              t.push({ name: r, type: n });
          }
          return (
            t.sort((e, t) => A.indexOf(e.name) - A.indexOf(t.name)),
            P.hashStruct("EIP712Domain", { EIP712Domain: t }, e)
          );
        }
        static encode(e, t, r) {
          return (0, o.hexConcat)([
            "0x1901",
            P.hashDomain(e),
            P.from(t).hash(r),
          ]);
        }
        static hash(e, t, r) {
          return (0, s.keccak256)(P.encode(e, t, r));
        }
        static resolveNames(e, t, r, n) {
          var i, s, l, u;
          return (
            (i = this),
            (s = void 0),
            (l = void 0),
            (u = function* () {
              e = (0, a.shallowCopy)(e);
              let i = {};
              e.verifyingContract &&
                !(0, o.isHexString)(e.verifyingContract, 20) &&
                (i[e.verifyingContract] = "0x");
              let s = P.from(t);
              for (let e in (s.visit(
                r,
                (e, t) => (
                  "address" !== e || (0, o.isHexString)(t, 20) || (i[t] = "0x"),
                  t
                )
              ),
              i))
                i[e] = yield n(e);
              return (
                e.verifyingContract &&
                  i[e.verifyingContract] &&
                  (e.verifyingContract = i[e.verifyingContract]),
                (r = s.visit(r, (e, t) =>
                  "address" === e && i[t] ? i[t] : t
                )),
                { domain: e, value: r }
              );
            }),
            new (l || (l = Promise))(function (e, t) {
              function r(e) {
                try {
                  o(u.next(e));
                } catch (e) {
                  t(e);
                }
              }
              function n(e) {
                try {
                  o(u.throw(e));
                } catch (e) {
                  t(e);
                }
              }
              function o(t) {
                var i;
                t.done
                  ? e(t.value)
                  : ((i = t.value) instanceof l
                      ? i
                      : new l(function (e) {
                          e(i);
                        })
                    ).then(r, n);
              }
              o((u = u.apply(i, s || [])).next());
            })
          );
        }
        static getPayload(e, t, r) {
          P.hashDomain(e);
          let n = {},
            s = [];
          A.forEach((t) => {
            let r = e[t];
            null != r && ((n[t] = E[t](r)), s.push({ name: t, type: b[t] }));
          });
          let l = P.from(t),
            u = (0, a.shallowCopy)(t);
          return (
            u.EIP712Domain
              ? f.throwArgumentError(
                  "types must not contain EIP712Domain type",
                  "types.EIP712Domain",
                  t
                )
              : (u.EIP712Domain = s),
            l.encode(r),
            {
              types: u,
              domain: n,
              primaryType: l.primaryType,
              message: l.visit(r, (e, t) => {
                if (e.match(/^bytes(\d*)/))
                  return (0, o.hexlify)((0, o.arrayify)(t));
                if (e.match(/^u?int/)) return i.O$.from(t).toString();
                switch (e) {
                  case "address":
                    return t.toLowerCase();
                  case "bool":
                    return !!t;
                  case "string":
                    return (
                      "string" != typeof t &&
                        f.throwArgumentError("invalid string", "value", t),
                      t
                    );
                }
                return f.throwArgumentError("unsupported type", "type", e);
              }),
            }
          );
        }
      }
    },
    98937: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          HDNode: function () {
            return R;
          },
          defaultPath: function () {
            return N;
          },
          entropyToMnemonic: function () {
            return B;
          },
          getAccountPath: function () {
            return F;
          },
          isValidMnemonic: function () {
            return L;
          },
          mnemonicToEntropy: function () {
            return I;
          },
          mnemonicToSeed: function () {
            return T;
          },
        });
      var n = r(94731),
        i = r(7730),
        o = r(30466),
        s = r(35321),
        a = r(34408),
        l = r(50357),
        u = r(65653),
        c = r(53319),
        f = r(53106),
        h = r(11913),
        d = r(57934),
        p = r(67214);
      let g = new p.Logger("wordlists/5.7.0");
      class m {
        constructor(e) {
          g.checkAbstract(new.target, m),
            (0, l.defineReadOnly)(this, "locale", e);
        }
        split(e) {
          return e.toLowerCase().split(/ +/g);
        }
        join(e) {
          return e.join(" ");
        }
        static check(e) {
          let t = [];
          for (let r = 0; r < 2048; r++) {
            let n = e.getWord(r);
            if (r !== e.getWordIndex(n)) return "0x";
            t.push(n);
          }
          return (0, d.id)(t.join("\n") + "\n");
        }
        static register(e, t) {
          t || (t = e.locale);
        }
      }
      let y = null;
      function v(e) {
        if (
          null == y &&
          ((y =
            "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo"
              .replace(/([A-Z])/g, " $1")
              .toLowerCase()
              .substring(1)
              .split(" ")),
          "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60" !==
            m.check(e))
        )
          throw ((y = null), Error("BIP39 Wordlist for en (English) FAILED"));
      }
      class b extends m {
        constructor() {
          super("en");
        }
        getWord(e) {
          return v(this), y[e];
        }
        getWordIndex(e) {
          return v(this), y.indexOf(e);
        }
      }
      let A = new b();
      m.register(A);
      let w = { en: A },
        E = new p.Logger("hdnode/5.7.0"),
        x = o.O$.from(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        S = (0, s.Y0)("Bitcoin seed");
      function P(e) {
        return ((1 << e) - 1) << (8 - e);
      }
      function O(e) {
        return (0, i.hexZeroPad)((0, i.hexlify)(e), 32);
      }
      function k(e) {
        return n.Base58.encode(
          (0, i.concat)([e, (0, i.hexDataSlice)((0, c.JQ)((0, c.JQ)(e)), 0, 4)])
        );
      }
      function _(e) {
        if (null == e) return w.en;
        if ("string" == typeof e) {
          let t = w[e];
          return (
            null == t && E.throwArgumentError("unknown locale", "wordlist", e),
            t
          );
        }
        return e;
      }
      let C = {},
        N = "m/44'/60'/0'/0/0";
      class R {
        constructor(e, t, r, n, o, s, a, f) {
          if (e !== C)
            throw Error("HDNode constructor cannot be called directly");
          if (t) {
            let e = new u.SigningKey(t);
            (0, l.defineReadOnly)(this, "privateKey", e.privateKey),
              (0, l.defineReadOnly)(this, "publicKey", e.compressedPublicKey);
          } else
            (0, l.defineReadOnly)(this, "privateKey", null),
              (0, l.defineReadOnly)(this, "publicKey", (0, i.hexlify)(r));
          (0, l.defineReadOnly)(this, "parentFingerprint", n),
            (0, l.defineReadOnly)(
              this,
              "fingerprint",
              (0, i.hexDataSlice)((0, c.bP)((0, c.JQ)(this.publicKey)), 0, 4)
            ),
            (0, l.defineReadOnly)(
              this,
              "address",
              (0, h.computeAddress)(this.publicKey)
            ),
            (0, l.defineReadOnly)(this, "chainCode", o),
            (0, l.defineReadOnly)(this, "index", s),
            (0, l.defineReadOnly)(this, "depth", a),
            null == f
              ? ((0, l.defineReadOnly)(this, "mnemonic", null),
                (0, l.defineReadOnly)(this, "path", null))
              : "string" == typeof f
              ? ((0, l.defineReadOnly)(this, "mnemonic", null),
                (0, l.defineReadOnly)(this, "path", f))
              : ((0, l.defineReadOnly)(this, "mnemonic", f),
                (0, l.defineReadOnly)(this, "path", f.path));
        }
        get extendedKey() {
          if (this.depth >= 256) throw Error("Depth too large!");
          return k(
            (0, i.concat)([
              null != this.privateKey ? "0x0488ADE4" : "0x0488B21E",
              (0, i.hexlify)(this.depth),
              this.parentFingerprint,
              (0, i.hexZeroPad)((0, i.hexlify)(this.index), 4),
              this.chainCode,
              null != this.privateKey
                ? (0, i.concat)(["0x00", this.privateKey])
                : this.publicKey,
            ])
          );
        }
        neuter() {
          return new R(
            C,
            null,
            this.publicKey,
            this.parentFingerprint,
            this.chainCode,
            this.index,
            this.depth,
            this.path
          );
        }
        _derive(e) {
          if (e > 4294967295) throw Error("invalid index - " + String(e));
          let t = this.path;
          t && (t += "/" + (2147483647 & e));
          let r = new Uint8Array(37);
          if (2147483648 & e) {
            if (!this.privateKey)
              throw Error("cannot derive child of neutered node");
            r.set((0, i.arrayify)(this.privateKey), 1), t && (t += "'");
          } else r.set((0, i.arrayify)(this.publicKey));
          for (let t = 24; t >= 0; t -= 8)
            r[33 + (t >> 3)] = (e >> (24 - t)) & 255;
          let n = (0, i.arrayify)((0, c.Gy)(f.p.sha512, this.chainCode, r)),
            s = n.slice(0, 32),
            a = n.slice(32),
            l = null,
            h = null;
          this.privateKey
            ? (l = O(o.O$.from(s).add(this.privateKey).mod(x)))
            : (h = new u.SigningKey((0, i.hexlify)(s))._addPoint(
                this.publicKey
              ));
          let d = t,
            p = this.mnemonic;
          return (
            p &&
              (d = Object.freeze({
                phrase: p.phrase,
                path: t,
                locale: p.locale || "en",
              })),
            new R(C, l, h, this.fingerprint, O(a), e, this.depth + 1, d)
          );
        }
        derivePath(e) {
          let t = e.split("/");
          if (0 === t.length || ("m" === t[0] && 0 !== this.depth))
            throw Error("invalid path - " + e);
          "m" === t[0] && t.shift();
          let r = this;
          for (let e = 0; e < t.length; e++) {
            let n = t[e];
            if (n.match(/^[0-9]+'$/)) {
              let e = parseInt(n.substring(0, n.length - 1));
              if (e >= 2147483648) throw Error("invalid path index - " + n);
              r = r._derive(2147483648 + e);
            } else if (n.match(/^[0-9]+$/)) {
              let e = parseInt(n);
              if (e >= 2147483648) throw Error("invalid path index - " + n);
              r = r._derive(e);
            } else throw Error("invalid path component - " + n);
          }
          return r;
        }
        static _fromSeed(e, t) {
          let r = (0, i.arrayify)(e);
          if (r.length < 16 || r.length > 64) throw Error("invalid seed");
          let n = (0, i.arrayify)((0, c.Gy)(f.p.sha512, S, r));
          return new R(
            C,
            O(n.slice(0, 32)),
            null,
            "0x00000000",
            O(n.slice(32)),
            0,
            0,
            t
          );
        }
        static fromMnemonic(e, t, r) {
          return (
            (r = _(r)),
            (e = B(I(e, r), r)),
            R._fromSeed(T(e, t), { phrase: e, path: "m", locale: r.locale })
          );
        }
        static fromSeed(e) {
          return R._fromSeed(e, null);
        }
        static fromExtendedKey(e) {
          let t = n.Base58.decode(e);
          (82 !== t.length || k(t.slice(0, 78)) !== e) &&
            E.throwArgumentError(
              "invalid extended key",
              "extendedKey",
              "[REDACTED]"
            );
          let r = t[4],
            o = (0, i.hexlify)(t.slice(5, 9)),
            s = parseInt((0, i.hexlify)(t.slice(9, 13)).substring(2), 16),
            a = (0, i.hexlify)(t.slice(13, 45)),
            l = t.slice(45, 78);
          switch ((0, i.hexlify)(t.slice(0, 4))) {
            case "0x0488b21e":
            case "0x043587cf":
              return new R(C, null, (0, i.hexlify)(l), o, a, s, r, null);
            case "0x0488ade4":
            case "0x04358394 ":
              if (0 !== l[0]) break;
              return new R(
                C,
                (0, i.hexlify)(l.slice(1)),
                null,
                o,
                a,
                s,
                r,
                null
              );
          }
          return E.throwArgumentError(
            "invalid extended key",
            "extendedKey",
            "[REDACTED]"
          );
        }
      }
      function T(e, t) {
        t || (t = "");
        let r = (0, s.Y0)("mnemonic" + t, s.Uj.NFKD);
        return (0, a.n)((0, s.Y0)(e, s.Uj.NFKD), r, 2048, 64, "sha512");
      }
      function I(e, t) {
        (t = _(t)), E.checkNormalize();
        let r = t.split(e);
        if (r.length % 3 != 0) throw Error("invalid mnemonic");
        let n = (0, i.arrayify)(new Uint8Array(Math.ceil((11 * r.length) / 8))),
          o = 0;
        for (let e = 0; e < r.length; e++) {
          let i = t.getWordIndex(r[e].normalize("NFKD"));
          if (-1 === i) throw Error("invalid mnemonic");
          for (let e = 0; e < 11; e++)
            i & (1 << (10 - e)) && (n[o >> 3] |= 1 << (7 - (o % 8))), o++;
        }
        let s = (32 * r.length) / 3,
          a = P(r.length / 3);
        if (
          ((0, i.arrayify)((0, c.JQ)(n.slice(0, s / 8)))[0] & a) !=
          (n[n.length - 1] & a)
        )
          throw Error("invalid checksum");
        return (0, i.hexlify)(n.slice(0, s / 8));
      }
      function B(e, t) {
        if (
          ((t = _(t)),
          (e = (0, i.arrayify)(e)).length % 4 != 0 ||
            e.length < 16 ||
            e.length > 32)
        )
          throw Error("invalid entropy");
        let r = [0],
          n = 11;
        for (let t = 0; t < e.length; t++)
          n > 8
            ? ((r[r.length - 1] <<= 8), (r[r.length - 1] |= e[t]), (n -= 8))
            : ((r[r.length - 1] <<= n),
              (r[r.length - 1] |= e[t] >> (8 - n)),
              r.push(e[t] & ((1 << (8 - n)) - 1)),
              (n += 3));
        let o = e.length / 4,
          s = (0, i.arrayify)((0, c.JQ)(e))[0] & P(o);
        return (
          (r[r.length - 1] <<= o),
          (r[r.length - 1] |= s >> (8 - o)),
          t.join(r.map((e) => t.getWord(e)))
        );
      }
      function L(e, t) {
        try {
          return I(e, t), !0;
        } catch (e) {}
        return !1;
      }
      function F(e) {
        return (
          ("number" != typeof e || e < 0 || e >= 2147483648 || e % 1) &&
            E.throwArgumentError("invalid account index", "index", e),
          `m/44'/60'/${e}'/0/0`
        );
      }
    },
    67578: function (e, t, r) {
      "use strict";
      r.d(t, {
        i: function () {
          return n;
        },
      });
      let n = "json-wallets/5.7.0";
    },
    81174: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          decryptCrowdsale: function () {
            return m;
          },
          decryptJsonWallet: function () {
            return w;
          },
          decryptJsonWalletSync: function () {
            return E;
          },
          decryptKeystore: function () {
            return A.pe;
          },
          decryptKeystoreSync: function () {
            return A.hb;
          },
          encryptKeystore: function () {
            return A.HI;
          },
          getJsonWalletAddress: function () {
            return b;
          },
          isCrowdsaleWallet: function () {
            return y;
          },
          isKeystoreWallet: function () {
            return v;
          },
        });
      var n = r(13929),
        i = r.n(n),
        o = r(56805),
        s = r(7730),
        a = r(14752),
        l = r(34408),
        u = r(35321),
        c = r(50357),
        f = r(67214),
        h = r(67578),
        d = r(88561);
      let p = new f.Logger(h.i);
      class g extends c.Description {
        isCrowdsaleAccount(e) {
          return !!(e && e._isCrowdsaleAccount);
        }
      }
      function m(e, t) {
        let r = JSON.parse(e);
        t = (0, d.Ij)(t);
        let n = (0, o.getAddress)((0, d.gx)(r, "ethaddr")),
          c = (0, d.p3)((0, d.gx)(r, "encseed"));
        (c && c.length % 16 == 0) ||
          p.throwArgumentError("invalid encseed", "json", e);
        let f = (0, s.arrayify)((0, l.n)(t, t, 2e3, 32, "sha256")).slice(0, 16),
          h = c.slice(0, 16),
          m = c.slice(16),
          y = new (i().ModeOfOperation.cbc)(f, h),
          v = i().padding.pkcs7.strip((0, s.arrayify)(y.decrypt(m))),
          b = "";
        for (let e = 0; e < v.length; e++) b += String.fromCharCode(v[e]);
        let A = (0, u.Y0)(b);
        return new g({
          _isCrowdsaleAccount: !0,
          address: n,
          privateKey: (0, a.keccak256)(A),
        });
      }
      function y(e) {
        let t = null;
        try {
          t = JSON.parse(e);
        } catch (e) {
          return !1;
        }
        return t.encseed && t.ethaddr;
      }
      function v(e) {
        let t = null;
        try {
          t = JSON.parse(e);
        } catch (e) {
          return !1;
        }
        return (
          !!t.version &&
          parseInt(t.version) === t.version &&
          3 === parseInt(t.version)
        );
      }
      function b(e) {
        if (y(e))
          try {
            return (0, o.getAddress)(JSON.parse(e).ethaddr);
          } catch (e) {
            return null;
          }
        if (v(e))
          try {
            return (0, o.getAddress)(JSON.parse(e).address);
          } catch (e) {}
        return null;
      }
      var A = r(21553);
      function w(e, t, r) {
        if (y(e)) {
          r && r(0);
          let n = m(e, t);
          return r && r(1), Promise.resolve(n);
        }
        return v(e)
          ? (0, A.pe)(e, t, r)
          : Promise.reject(Error("invalid JSON wallet"));
      }
      function E(e, t) {
        if (y(e)) return m(e, t);
        if (v(e)) return (0, A.hb)(e, t);
        throw Error("invalid JSON wallet");
      }
    },
    21553: function (e, t, r) {
      "use strict";
      r.d(t, {
        HI: function () {
          return k;
        },
        hb: function () {
          return P;
        },
        pe: function () {
          return O;
        },
      });
      var n = r(13929),
        i = r.n(n),
        o = r(37262),
        s = r.n(o),
        a = r(56805),
        l = r(7730),
        u = r(98937),
        c = r(14752),
        f = r(34408),
        h = r(77282),
        d = r(50357),
        p = r(11913),
        g = r(88561),
        m = r(67214),
        y = r(67578);
      let v = new m.Logger(y.i);
      function b(e) {
        return null != e && e.mnemonic && e.mnemonic.phrase;
      }
      class A extends d.Description {
        isKeystoreAccount(e) {
          return !!(e && e._isKeystoreAccount);
        }
      }
      function w(e, t) {
        let r = (0, g.p3)((0, g.gx)(e, "crypto/ciphertext"));
        if (
          (0, l.hexlify)(
            (0, c.keccak256)((0, l.concat)([t.slice(16, 32), r]))
          ).substring(2) !== (0, g.gx)(e, "crypto/mac").toLowerCase()
        )
          throw Error("invalid password");
        let n = (function (e, t, r) {
          if ("aes-128-ctr" === (0, g.gx)(e, "crypto/cipher")) {
            let n = (0, g.p3)((0, g.gx)(e, "crypto/cipherparams/iv")),
              o = new (i().Counter)(n),
              s = new (i().ModeOfOperation.ctr)(t, o);
            return (0, l.arrayify)(s.decrypt(r));
          }
          return null;
        })(e, t.slice(0, 16), r);
        n ||
          v.throwError(
            "unsupported cipher",
            m.Logger.errors.UNSUPPORTED_OPERATION,
            { operation: "decrypt" }
          );
        let o = t.slice(32, 64),
          s = (0, p.computeAddress)(n);
        if (e.address) {
          let t = e.address.toLowerCase();
          if (
            ("0x" !== t.substring(0, 2) && (t = "0x" + t),
            (0, a.getAddress)(t) !== s)
          )
            throw Error("address mismatch");
        }
        let f = {
          _isKeystoreAccount: !0,
          address: s,
          privateKey: (0, l.hexlify)(n),
        };
        if ("0.1" === (0, g.gx)(e, "x-ethers/version")) {
          let t = (0, g.p3)((0, g.gx)(e, "x-ethers/mnemonicCiphertext")),
            r = (0, g.p3)((0, g.gx)(e, "x-ethers/mnemonicCounter")),
            n = new (i().Counter)(r),
            s = new (i().ModeOfOperation.ctr)(o, n),
            a = (0, g.gx)(e, "x-ethers/path") || u.defaultPath,
            c = (0, g.gx)(e, "x-ethers/locale") || "en",
            h = (0, l.arrayify)(s.decrypt(t));
          try {
            let e = (0, u.entropyToMnemonic)(h, c),
              t = u.HDNode.fromMnemonic(e, null, c).derivePath(a);
            if (t.privateKey != f.privateKey) throw Error("mnemonic mismatch");
            f.mnemonic = t.mnemonic;
          } catch (e) {
            if (
              e.code !== m.Logger.errors.INVALID_ARGUMENT ||
              "wordlist" !== e.argument
            )
              throw e;
          }
        }
        return new A(f);
      }
      function E(e, t, r, n, i) {
        return (0, l.arrayify)((0, f.n)(e, t, r, n, i));
      }
      function x(e, t, r, n, i) {
        return Promise.resolve(E(e, t, r, n, i));
      }
      function S(e, t, r, n, i) {
        let o = (0, g.Ij)(t),
          s = (0, g.gx)(e, "crypto/kdf");
        if (s && "string" == typeof s) {
          let t = function (e, t) {
            return v.throwArgumentError(
              "invalid key-derivation function parameters",
              e,
              t
            );
          };
          if ("scrypt" === s.toLowerCase()) {
            let r = (0, g.p3)((0, g.gx)(e, "crypto/kdfparams/salt")),
              a = parseInt((0, g.gx)(e, "crypto/kdfparams/n")),
              l = parseInt((0, g.gx)(e, "crypto/kdfparams/r")),
              u = parseInt((0, g.gx)(e, "crypto/kdfparams/p"));
            (a && l && u) || t("kdf", s), (a & (a - 1)) != 0 && t("N", a);
            let c = parseInt((0, g.gx)(e, "crypto/kdfparams/dklen"));
            return 32 !== c && t("dklen", c), n(o, r, a, l, u, 64, i);
          }
          if ("pbkdf2" === s.toLowerCase()) {
            let n = (0, g.p3)((0, g.gx)(e, "crypto/kdfparams/salt")),
              i = null,
              s = (0, g.gx)(e, "crypto/kdfparams/prf");
            "hmac-sha256" === s
              ? (i = "sha256")
              : "hmac-sha512" === s
              ? (i = "sha512")
              : t("prf", s);
            let a = parseInt((0, g.gx)(e, "crypto/kdfparams/c")),
              l = parseInt((0, g.gx)(e, "crypto/kdfparams/dklen"));
            return 32 !== l && t("dklen", l), r(o, n, a, l, i);
          }
        }
        return v.throwArgumentError(
          "unsupported key-derivation function",
          "kdf",
          s
        );
      }
      function P(e, t) {
        let r = JSON.parse(e),
          n = S(r, t, E, s().syncScrypt);
        return w(r, n);
      }
      function O(e, t, r) {
        var n, i, o, a;
        return (
          (n = this),
          (i = void 0),
          (o = void 0),
          (a = function* () {
            let n = JSON.parse(e),
              i = yield S(n, t, x, s().scrypt, r);
            return w(n, i);
          }),
          new (o || (o = Promise))(function (e, t) {
            function r(e) {
              try {
                l(a.next(e));
              } catch (e) {
                t(e);
              }
            }
            function s(e) {
              try {
                l(a.throw(e));
              } catch (e) {
                t(e);
              }
            }
            function l(t) {
              var n;
              t.done
                ? e(t.value)
                : ((n = t.value) instanceof o
                    ? n
                    : new o(function (e) {
                        e(n);
                      })
                  ).then(r, s);
            }
            l((a = a.apply(n, i || [])).next());
          })
        );
      }
      function k(e, t, r, n) {
        try {
          if (
            (0, a.getAddress)(e.address) !== (0, p.computeAddress)(e.privateKey)
          )
            throw Error("address/privateKey mismatch");
          if (b(e)) {
            let t = e.mnemonic;
            if (
              u.HDNode.fromMnemonic(t.phrase, null, t.locale).derivePath(
                t.path || u.defaultPath
              ).privateKey != e.privateKey
            )
              throw Error("mnemonic mismatch");
          }
        } catch (e) {
          return Promise.reject(e);
        }
        "function" != typeof r || n || ((n = r), (r = {})), r || (r = {});
        let o = (0, l.arrayify)(e.privateKey),
          f = (0, g.Ij)(t),
          d = null,
          m = null,
          y = null;
        if (b(e)) {
          let t = e.mnemonic;
          (d = (0, l.arrayify)(
            (0, u.mnemonicToEntropy)(t.phrase, t.locale || "en")
          )),
            (m = t.path || u.defaultPath),
            (y = t.locale || "en");
        }
        let v = r.client;
        v || (v = "ethers.js");
        let A = null;
        A = r.salt ? (0, l.arrayify)(r.salt) : (0, h.O)(32);
        let w = null;
        if (r.iv) {
          if (16 !== (w = (0, l.arrayify)(r.iv)).length)
            throw Error("invalid iv");
        } else w = (0, h.O)(16);
        let E = null;
        if (r.uuid) {
          if (16 !== (E = (0, l.arrayify)(r.uuid)).length)
            throw Error("invalid uuid");
        } else E = (0, h.O)(16);
        let x = 131072,
          S = 8,
          P = 1;
        return (
          r.scrypt &&
            (r.scrypt.N && (x = r.scrypt.N),
            r.scrypt.r && (S = r.scrypt.r),
            r.scrypt.p && (P = r.scrypt.p)),
          s()
            .scrypt(f, A, x, S, P, 64, n)
            .then((t) => {
              let r = (t = (0, l.arrayify)(t)).slice(0, 16),
                n = t.slice(16, 32),
                s = t.slice(32, 64),
                a = new (i().Counter)(w),
                u = new (i().ModeOfOperation.ctr)(r, a),
                f = (0, l.arrayify)(u.encrypt(o)),
                p = (0, c.keccak256)((0, l.concat)([n, f])),
                b = {
                  address: e.address.substring(2).toLowerCase(),
                  id: (0, g.EH)(E),
                  version: 3,
                  crypto: {
                    cipher: "aes-128-ctr",
                    cipherparams: { iv: (0, l.hexlify)(w).substring(2) },
                    ciphertext: (0, l.hexlify)(f).substring(2),
                    kdf: "scrypt",
                    kdfparams: {
                      salt: (0, l.hexlify)(A).substring(2),
                      n: x,
                      dklen: 32,
                      p: P,
                      r: S,
                    },
                    mac: p.substring(2),
                  },
                };
              if (d) {
                let e = (0, h.O)(16),
                  t = new (i().Counter)(e),
                  r = new (i().ModeOfOperation.ctr)(s, t),
                  n = (0, l.arrayify)(r.encrypt(d)),
                  o = new Date(),
                  a =
                    o.getUTCFullYear() +
                    "-" +
                    (0, g.VP)(o.getUTCMonth() + 1, 2) +
                    "-" +
                    (0, g.VP)(o.getUTCDate(), 2) +
                    "T" +
                    (0, g.VP)(o.getUTCHours(), 2) +
                    "-" +
                    (0, g.VP)(o.getUTCMinutes(), 2) +
                    "-" +
                    (0, g.VP)(o.getUTCSeconds(), 2) +
                    ".0Z";
                b["x-ethers"] = {
                  client: v,
                  gethFilename: "UTC--" + a + "--" + b.address,
                  mnemonicCounter: (0, l.hexlify)(e).substring(2),
                  mnemonicCiphertext: (0, l.hexlify)(n).substring(2),
                  path: m,
                  locale: y,
                  version: "0.1",
                };
              }
              return JSON.stringify(b);
            })
        );
      }
    },
    88561: function (e, t, r) {
      "use strict";
      r.d(t, {
        EH: function () {
          return u;
        },
        Ij: function () {
          return a;
        },
        VP: function () {
          return s;
        },
        gx: function () {
          return l;
        },
        p3: function () {
          return o;
        },
      });
      var n = r(7730),
        i = r(35321);
      function o(e) {
        return (
          "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e),
          (0, n.arrayify)(e)
        );
      }
      function s(e, t) {
        for (e = String(e); e.length < t; ) e = "0" + e;
        return e;
      }
      function a(e) {
        return "string" == typeof e
          ? (0, i.Y0)(e, i.Uj.NFKC)
          : (0, n.arrayify)(e);
      }
      function l(e, t) {
        let r = e,
          n = t.toLowerCase().split("/");
        for (let e = 0; e < n.length; e++) {
          let t = null;
          for (let i in r)
            if (i.toLowerCase() === n[e]) {
              t = r[i];
              break;
            }
          if (null === t) return null;
          r = t;
        }
        return r;
      }
      function u(e) {
        let t = (0, n.arrayify)(e);
        (t[6] = (15 & t[6]) | 64), (t[8] = (63 & t[8]) | 128);
        let r = (0, n.hexlify)(t);
        return [
          r.substring(2, 10),
          r.substring(10, 14),
          r.substring(14, 18),
          r.substring(18, 22),
          r.substring(22, 34),
        ].join("-");
      }
    },
    14752: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          keccak256: function () {
            return s;
          },
        });
      var n = r(58728),
        i = r.n(n),
        o = r(7730);
      function s(e) {
        return "0x" + i().keccak_256((0, o.arrayify)(e));
      }
    },
    67214: function (e, t, r) {
      "use strict";
      var n, i, o, s;
      r.r(t),
        r.d(t, {
          ErrorCode: function () {
            return i;
          },
          LogLevel: function () {
            return n;
          },
          Logger: function () {
            return p;
          },
        });
      let a = !1,
        l = !1,
        u = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 },
        c = 2,
        f = null,
        h = (function () {
          try {
            let e = [];
            if (
              (["NFD", "NFC", "NFKD", "NFKC"].forEach((t) => {
                try {
                  if ("test" !== "test".normalize(t))
                    throw Error("bad normalize");
                } catch (r) {
                  e.push(t);
                }
              }),
              e.length)
            )
              throw Error("missing " + e.join(", "));
            if (
              String.fromCharCode(233).normalize("NFD") !==
              String.fromCharCode(101, 769)
            )
              throw Error("broken implementation");
          } catch (e) {
            return e.message;
          }
          return null;
        })();
      ((o = n || (n = {})).DEBUG = "DEBUG"),
        (o.INFO = "INFO"),
        (o.WARNING = "WARNING"),
        (o.ERROR = "ERROR"),
        (o.OFF = "OFF"),
        ((s = i || (i = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR"),
        (s.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
        (s.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
        (s.NETWORK_ERROR = "NETWORK_ERROR"),
        (s.SERVER_ERROR = "SERVER_ERROR"),
        (s.TIMEOUT = "TIMEOUT"),
        (s.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
        (s.NUMERIC_FAULT = "NUMERIC_FAULT"),
        (s.MISSING_NEW = "MISSING_NEW"),
        (s.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
        (s.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
        (s.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
        (s.CALL_EXCEPTION = "CALL_EXCEPTION"),
        (s.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
        (s.NONCE_EXPIRED = "NONCE_EXPIRED"),
        (s.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
        (s.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
        (s.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
        (s.ACTION_REJECTED = "ACTION_REJECTED");
      let d = "0123456789abcdef";
      class p {
        constructor(e) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: e,
            writable: !1,
          });
        }
        _log(e, t) {
          let r = e.toLowerCase();
          null == u[r] &&
            this.throwArgumentError("invalid log level name", "logLevel", e),
            c > u[r] || console.log.apply(console, t);
        }
        debug(...e) {
          this._log(p.levels.DEBUG, e);
        }
        info(...e) {
          this._log(p.levels.INFO, e);
        }
        warn(...e) {
          this._log(p.levels.WARNING, e);
        }
        makeError(e, t, r) {
          if (l) return this.makeError("censored error", t, {});
          t || (t = p.errors.UNKNOWN_ERROR), r || (r = {});
          let n = [];
          Object.keys(r).forEach((e) => {
            let t = r[e];
            try {
              if (t instanceof Uint8Array) {
                let r = "";
                for (let e = 0; e < t.length; e++)
                  r += d[t[e] >> 4] + d[15 & t[e]];
                n.push(e + "=Uint8Array(0x" + r + ")");
              } else n.push(e + "=" + JSON.stringify(t));
            } catch (t) {
              n.push(e + "=" + JSON.stringify(r[e].toString()));
            }
          }),
            n.push(`code=${t}`),
            n.push(`version=${this.version}`);
          let o = e,
            s = "";
          switch (t) {
            case i.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              let t = e;
              switch (t) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + t;
                  break;
                case "negative-power":
                case "negative-width":
                  s += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  s += "-unbound-result";
              }
              break;
            }
            case i.CALL_EXCEPTION:
            case i.INSUFFICIENT_FUNDS:
            case i.MISSING_NEW:
            case i.NONCE_EXPIRED:
            case i.REPLACEMENT_UNDERPRICED:
            case i.TRANSACTION_REPLACED:
            case i.UNPREDICTABLE_GAS_LIMIT:
              s = t;
          }
          s && (e += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            n.length && (e += " (" + n.join(", ") + ")");
          let a = Error(e);
          return (
            (a.reason = o),
            (a.code = t),
            Object.keys(r).forEach(function (e) {
              a[e] = r[e];
            }),
            a
          );
        }
        throwError(e, t, r) {
          throw this.makeError(e, t, r);
        }
        throwArgumentError(e, t, r) {
          return this.throwError(e, p.errors.INVALID_ARGUMENT, {
            argument: t,
            value: r,
          });
        }
        assert(e, t, r, n) {
          e || this.throwError(t, r, n);
        }
        assertArgument(e, t, r, n) {
          e || this.throwArgumentError(t, r, n);
        }
        checkNormalize(e) {
          null == e && (e = "platform missing String.prototype.normalize"),
            h &&
              this.throwError(
                "platform missing String.prototype.normalize",
                p.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: h }
              );
        }
        checkSafeUint53(e, t) {
          "number" == typeof e &&
            (null == t && (t = "value not safe"),
            (e < 0 || e >= 9007199254740991) &&
              this.throwError(t, p.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: e,
              }),
            e % 1 &&
              this.throwError(t, p.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: e,
              }));
        }
        checkArgumentCount(e, t, r) {
          (r = r ? ": " + r : ""),
            e < t &&
              this.throwError(
                "missing argument" + r,
                p.errors.MISSING_ARGUMENT,
                { count: e, expectedCount: t }
              ),
            e > t &&
              this.throwError(
                "too many arguments" + r,
                p.errors.UNEXPECTED_ARGUMENT,
                { count: e, expectedCount: t }
              );
        }
        checkNew(e, t) {
          (e === Object || null == e) &&
            this.throwError("missing new", p.errors.MISSING_NEW, {
              name: t.name,
            });
        }
        checkAbstract(e, t) {
          e === t
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(t.name) +
                  " directly; use a sub-class",
                p.errors.UNSUPPORTED_OPERATION,
                { name: e.name, operation: "new" }
              )
            : (e === Object || null == e) &&
              this.throwError("missing new", p.errors.MISSING_NEW, {
                name: t.name,
              });
        }
        static globalLogger() {
          return f || (f = new p("logger/5.7.0")), f;
        }
        static setCensorship(e, t) {
          if (
            (!e &&
              t &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                p.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            a)
          ) {
            if (!e) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              p.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (l = !!e), (a = !!t);
        }
        static setLogLevel(e) {
          let t = u[e.toLowerCase()];
          if (null == t) {
            p.globalLogger().warn("invalid log level - " + e);
            return;
          }
          c = t;
        }
        static from(e) {
          return new p(e);
        }
      }
      (p.errors = i), (p.levels = n);
    },
    34408: function (e, t, r) {
      "use strict";
      r.d(t, {
        n: function () {
          return o;
        },
      });
      var n = r(7730),
        i = r(53319);
      function o(e, t, r, o, s) {
        let a, l, u;
        (e = (0, n.arrayify)(e)), (t = (0, n.arrayify)(t));
        let c = 1,
          f = new Uint8Array(o),
          h = new Uint8Array(t.length + 4);
        h.set(t);
        for (let d = 1; d <= c; d++) {
          (h[t.length] = (d >> 24) & 255),
            (h[t.length + 1] = (d >> 16) & 255),
            (h[t.length + 2] = (d >> 8) & 255),
            (h[t.length + 3] = 255 & d);
          let p = (0, n.arrayify)((0, i.Gy)(s, e, h));
          a ||
            ((a = p.length),
            (u = new Uint8Array(a)),
            (c = Math.ceil(o / a)),
            (l = o - (c - 1) * a)),
            u.set(p);
          for (let t = 1; t < r; t++) {
            p = (0, n.arrayify)((0, i.Gy)(s, e, p));
            for (let e = 0; e < a; e++) u[e] ^= p[e];
          }
          let g = (d - 1) * a,
            m = d === c ? l : a;
          f.set((0, n.arrayify)(u).slice(0, m), g);
        }
        return (0, n.hexlify)(f);
      }
    },
    50357: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          Description: function () {
            return f;
          },
          checkProperties: function () {
            return a;
          },
          deepCopy: function () {
            return c;
          },
          defineReadOnly: function () {
            return i;
          },
          getStatic: function () {
            return o;
          },
          resolveProperties: function () {
            return s;
          },
          shallowCopy: function () {
            return l;
          },
        });
      let n = new (r(67214).Logger)("properties/5.7.0");
      function i(e, t, r) {
        Object.defineProperty(e, t, { enumerable: !0, value: r, writable: !1 });
      }
      function o(e, t) {
        for (let r = 0; r < 32; r++) {
          if (e[t]) return e[t];
          if (!e.prototype || "object" != typeof e.prototype) break;
          e = Object.getPrototypeOf(e.prototype).constructor;
        }
        return null;
      }
      function s(e) {
        var t, r, n, i;
        return (
          (t = this),
          (r = void 0),
          (n = void 0),
          (i = function* () {
            let t = Object.keys(e).map((t) =>
              Promise.resolve(e[t]).then((e) => ({ key: t, value: e }))
            );
            return (yield Promise.all(t)).reduce(
              (e, t) => ((e[t.key] = t.value), e),
              {}
            );
          }),
          new (n || (n = Promise))(function (e, o) {
            function s(e) {
              try {
                l(i.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
              try {
                l(i.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function l(t) {
              var r;
              t.done
                ? e(t.value)
                : ((r = t.value) instanceof n
                    ? r
                    : new n(function (e) {
                        e(r);
                      })
                  ).then(s, a);
            }
            l((i = i.apply(t, r || [])).next());
          })
        );
      }
      function a(e, t) {
        (e && "object" == typeof e) ||
          n.throwArgumentError("invalid object", "object", e),
          Object.keys(e).forEach((r) => {
            t[r] ||
              n.throwArgumentError(
                "invalid object key - " + r,
                "transaction:" + r,
                e
              );
          });
      }
      function l(e) {
        let t = {};
        for (let r in e) t[r] = e[r];
        return t;
      }
      let u = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 };
      function c(e) {
        return (function (e) {
          if (
            (function e(t) {
              if (null == t || u[typeof t]) return !0;
              if (Array.isArray(t) || "object" == typeof t) {
                if (!Object.isFrozen(t)) return !1;
                let r = Object.keys(t);
                for (let n = 0; n < r.length; n++) {
                  let i = null;
                  try {
                    i = t[r[n]];
                  } catch (e) {
                    continue;
                  }
                  if (!e(i)) return !1;
                }
                return !0;
              }
              return n.throwArgumentError(
                `Cannot deepCopy ${typeof t}`,
                "object",
                t
              );
            })(e)
          )
            return e;
          if (Array.isArray(e)) return Object.freeze(e.map((e) => c(e)));
          if ("object" == typeof e) {
            let t = {};
            for (let r in e) {
              let n = e[r];
              void 0 !== n && i(t, r, c(n));
            }
            return t;
          }
          return n.throwArgumentError(
            `Cannot deepCopy ${typeof e}`,
            "object",
            e
          );
        })(e);
      }
      class f {
        constructor(e) {
          for (let t in e) this[t] = c(e[t]);
        }
      }
    },
    80806: function (e, t, r) {
      "use strict";
      r.d(t, {
        Q: function () {
          return em;
        },
      });
      var n = r(50357),
        i = r(67214);
      let o = "providers/5.7.2";
      var s = r(18833),
        a = r(30466),
        l = r(7730),
        u = r(22396),
        c = r(35321),
        f = r(11913),
        h = r(12982),
        d = r(62377),
        p = r(91710),
        g = r(94731),
        m = r(86392),
        y = r(92642);
      let v = new i.Logger("networks/5.7.1");
      function b(e) {
        let t = function (t, r) {
          null == r && (r = {});
          let n = [];
          if (t.InfuraProvider && "-" !== r.infura)
            try {
              n.push(new t.InfuraProvider(e, r.infura));
            } catch (e) {}
          if (t.EtherscanProvider && "-" !== r.etherscan)
            try {
              n.push(new t.EtherscanProvider(e, r.etherscan));
            } catch (e) {}
          if (t.AlchemyProvider && "-" !== r.alchemy)
            try {
              n.push(new t.AlchemyProvider(e, r.alchemy));
            } catch (e) {}
          if (t.PocketProvider && "-" !== r.pocket)
            try {
              let i = new t.PocketProvider(e, r.pocket);
              i.network &&
                -1 ===
                  ["goerli", "ropsten", "rinkeby", "sepolia"].indexOf(
                    i.network.name
                  ) &&
                n.push(i);
            } catch (e) {}
          if (t.CloudflareProvider && "-" !== r.cloudflare)
            try {
              n.push(new t.CloudflareProvider(e));
            } catch (e) {}
          if (t.AnkrProvider && "-" !== r.ankr)
            try {
              let i = new t.AnkrProvider(e, r.ankr);
              i.network &&
                -1 === ["ropsten"].indexOf(i.network.name) &&
                n.push(i);
            } catch (e) {}
          if (0 === n.length) return null;
          if (t.FallbackProvider) {
            let i = 1;
            return (
              null != r.quorum ? (i = r.quorum) : "homestead" === e && (i = 2),
              new t.FallbackProvider(n, i)
            );
          }
          return n[0];
        };
        return (
          (t.renetwork = function (e) {
            return b(e);
          }),
          t
        );
      }
      function A(e, t) {
        let r = function (r, n) {
          return r.JsonRpcProvider ? new r.JsonRpcProvider(e, t) : null;
        };
        return (
          (r.renetwork = function (t) {
            return A(e, t);
          }),
          r
        );
      }
      let w = {
          chainId: 1,
          ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          name: "homestead",
          _defaultProvider: b("homestead"),
        },
        E = {
          chainId: 3,
          ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          name: "ropsten",
          _defaultProvider: b("ropsten"),
        },
        x = {
          chainId: 63,
          name: "classicMordor",
          _defaultProvider: A(
            "https://www.ethercluster.com/mordor",
            "classicMordor"
          ),
        },
        S = {
          unspecified: { chainId: 0, name: "unspecified" },
          homestead: w,
          mainnet: w,
          morden: { chainId: 2, name: "morden" },
          ropsten: E,
          testnet: E,
          rinkeby: {
            chainId: 4,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "rinkeby",
            _defaultProvider: b("rinkeby"),
          },
          kovan: { chainId: 42, name: "kovan", _defaultProvider: b("kovan") },
          goerli: {
            chainId: 5,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "goerli",
            _defaultProvider: b("goerli"),
          },
          kintsugi: { chainId: 1337702, name: "kintsugi" },
          sepolia: {
            chainId: 11155111,
            name: "sepolia",
            _defaultProvider: b("sepolia"),
          },
          classic: {
            chainId: 61,
            name: "classic",
            _defaultProvider: A("https://www.ethercluster.com/etc", "classic"),
          },
          classicMorden: { chainId: 62, name: "classicMorden" },
          classicMordor: x,
          classicTestnet: x,
          classicKotti: {
            chainId: 6,
            name: "classicKotti",
            _defaultProvider: A(
              "https://www.ethercluster.com/kotti",
              "classicKotti"
            ),
          },
          xdai: { chainId: 100, name: "xdai" },
          matic: { chainId: 137, name: "matic", _defaultProvider: b("matic") },
          maticmum: { chainId: 80001, name: "maticmum" },
          optimism: {
            chainId: 10,
            name: "optimism",
            _defaultProvider: b("optimism"),
          },
          "optimism-kovan": { chainId: 69, name: "optimism-kovan" },
          "optimism-goerli": { chainId: 420, name: "optimism-goerli" },
          arbitrum: { chainId: 42161, name: "arbitrum" },
          "arbitrum-rinkeby": { chainId: 421611, name: "arbitrum-rinkeby" },
          "arbitrum-goerli": { chainId: 421613, name: "arbitrum-goerli" },
          bnb: { chainId: 56, name: "bnb" },
          bnbt: { chainId: 97, name: "bnbt" },
        };
      var P = r(53319),
        O = r(21032),
        k = r.n(O),
        _ = r(56805);
      let C = new i.Logger(o);
      class N {
        constructor() {
          this.formats = this.getDefaultFormats();
        }
        getDefaultFormats() {
          let e = {},
            t = this.address.bind(this),
            r = this.bigNumber.bind(this),
            i = this.blockTag.bind(this),
            o = this.data.bind(this),
            s = this.hash.bind(this),
            a = this.hex.bind(this),
            l = this.number.bind(this),
            u = this.type.bind(this);
          return (
            (e.transaction = {
              hash: s,
              type: u,
              accessList: N.allowNull(this.accessList.bind(this), null),
              blockHash: N.allowNull(s, null),
              blockNumber: N.allowNull(l, null),
              transactionIndex: N.allowNull(l, null),
              confirmations: N.allowNull(l, null),
              from: t,
              gasPrice: N.allowNull(r),
              maxPriorityFeePerGas: N.allowNull(r),
              maxFeePerGas: N.allowNull(r),
              gasLimit: r,
              to: N.allowNull(t, null),
              value: r,
              nonce: l,
              data: o,
              r: N.allowNull(this.uint256),
              s: N.allowNull(this.uint256),
              v: N.allowNull(l),
              creates: N.allowNull(t, null),
              raw: N.allowNull(o),
            }),
            (e.transactionRequest = {
              from: N.allowNull(t),
              nonce: N.allowNull(l),
              gasLimit: N.allowNull(r),
              gasPrice: N.allowNull(r),
              maxPriorityFeePerGas: N.allowNull(r),
              maxFeePerGas: N.allowNull(r),
              to: N.allowNull(t),
              value: N.allowNull(r),
              data: N.allowNull((e) => this.data(e, !0)),
              type: N.allowNull(l),
              accessList: N.allowNull(this.accessList.bind(this), null),
            }),
            (e.receiptLog = {
              transactionIndex: l,
              blockNumber: l,
              transactionHash: s,
              address: t,
              topics: N.arrayOf(s),
              data: o,
              logIndex: l,
              blockHash: s,
            }),
            (e.receipt = {
              to: N.allowNull(this.address, null),
              from: N.allowNull(this.address, null),
              contractAddress: N.allowNull(t, null),
              transactionIndex: l,
              root: N.allowNull(a),
              gasUsed: r,
              logsBloom: N.allowNull(o),
              blockHash: s,
              transactionHash: s,
              logs: N.arrayOf(this.receiptLog.bind(this)),
              blockNumber: l,
              confirmations: N.allowNull(l, null),
              cumulativeGasUsed: r,
              effectiveGasPrice: N.allowNull(r),
              status: N.allowNull(l),
              type: u,
            }),
            (e.block = {
              hash: N.allowNull(s),
              parentHash: s,
              number: l,
              timestamp: l,
              nonce: N.allowNull(a),
              difficulty: this.difficulty.bind(this),
              gasLimit: r,
              gasUsed: r,
              miner: N.allowNull(t),
              extraData: o,
              transactions: N.allowNull(N.arrayOf(s)),
              baseFeePerGas: N.allowNull(r),
            }),
            (e.blockWithTransactions = (0, n.shallowCopy)(e.block)),
            (e.blockWithTransactions.transactions = N.allowNull(
              N.arrayOf(this.transactionResponse.bind(this))
            )),
            (e.filter = {
              fromBlock: N.allowNull(i, void 0),
              toBlock: N.allowNull(i, void 0),
              blockHash: N.allowNull(s, void 0),
              address: N.allowNull(t, void 0),
              topics: N.allowNull(this.topics.bind(this), void 0),
            }),
            (e.filterLog = {
              blockNumber: N.allowNull(l),
              blockHash: N.allowNull(s),
              transactionIndex: l,
              removed: N.allowNull(this.boolean.bind(this)),
              address: t,
              data: N.allowFalsish(o, "0x"),
              topics: N.arrayOf(s),
              transactionHash: s,
              logIndex: l,
            }),
            e
          );
        }
        accessList(e) {
          return (0, f.accessListify)(e || []);
        }
        number(e) {
          return "0x" === e ? 0 : a.O$.from(e).toNumber();
        }
        type(e) {
          return "0x" === e || null == e ? 0 : a.O$.from(e).toNumber();
        }
        bigNumber(e) {
          return a.O$.from(e);
        }
        boolean(e) {
          if ("boolean" == typeof e) return e;
          if ("string" == typeof e) {
            if ("true" === (e = e.toLowerCase())) return !0;
            if ("false" === e) return !1;
          }
          throw Error("invalid boolean - " + e);
        }
        hex(e, t) {
          return "string" == typeof e &&
            (t || "0x" === e.substring(0, 2) || (e = "0x" + e),
            (0, l.isHexString)(e))
            ? e.toLowerCase()
            : C.throwArgumentError("invalid hash", "value", e);
        }
        data(e, t) {
          let r = this.hex(e, t);
          if (r.length % 2 != 0) throw Error("invalid data; odd-length - " + e);
          return r;
        }
        address(e) {
          return (0, _.getAddress)(e);
        }
        callAddress(e) {
          if (!(0, l.isHexString)(e, 32)) return null;
          let t = (0, _.getAddress)((0, l.hexDataSlice)(e, 12));
          return "0x0000000000000000000000000000000000000000" === t ? null : t;
        }
        contractAddress(e) {
          return (0, _.getContractAddress)(e);
        }
        blockTag(e) {
          if (null == e) return "latest";
          if ("earliest" === e) return "0x0";
          switch (e) {
            case "earliest":
              return "0x0";
            case "latest":
            case "pending":
            case "safe":
            case "finalized":
              return e;
          }
          if ("number" == typeof e || (0, l.isHexString)(e))
            return (0, l.hexValue)(e);
          throw Error("invalid blockTag");
        }
        hash(e, t) {
          let r = this.hex(e, t);
          return 32 !== (0, l.hexDataLength)(r)
            ? C.throwArgumentError("invalid hash", "value", e)
            : r;
        }
        difficulty(e) {
          if (null == e) return null;
          let t = a.O$.from(e);
          try {
            return t.toNumber();
          } catch (e) {}
          return null;
        }
        uint256(e) {
          if (!(0, l.isHexString)(e)) throw Error("invalid uint256");
          return (0, l.hexZeroPad)(e, 32);
        }
        _block(e, t) {
          null != e.author && null == e.miner && (e.miner = e.author);
          let r = null != e._difficulty ? e._difficulty : e.difficulty,
            n = N.check(t, e);
          return (n._difficulty = null == r ? null : a.O$.from(r)), n;
        }
        block(e) {
          return this._block(e, this.formats.block);
        }
        blockWithTransactions(e) {
          return this._block(e, this.formats.blockWithTransactions);
        }
        transactionRequest(e) {
          return N.check(this.formats.transactionRequest, e);
        }
        transactionResponse(e) {
          null != e.gas && null == e.gasLimit && (e.gasLimit = e.gas),
            e.to &&
              a.O$.from(e.to).isZero() &&
              (e.to = "0x0000000000000000000000000000000000000000"),
            null != e.input && null == e.data && (e.data = e.input),
            null == e.to &&
              null == e.creates &&
              (e.creates = this.contractAddress(e)),
            (1 === e.type || 2 === e.type) &&
              null == e.accessList &&
              (e.accessList = []);
          let t = N.check(this.formats.transaction, e);
          if (null != e.chainId) {
            let r = e.chainId;
            (0, l.isHexString)(r) && (r = a.O$.from(r).toNumber()),
              (t.chainId = r);
          } else {
            let r = e.networkId;
            null == r && null == t.v && (r = e.chainId),
              (0, l.isHexString)(r) && (r = a.O$.from(r).toNumber()),
              "number" != typeof r &&
                null != t.v &&
                ((r = (t.v - 35) / 2) < 0 && (r = 0), (r = parseInt(r))),
              "number" != typeof r && (r = 0),
              (t.chainId = r);
          }
          return (
            t.blockHash &&
              "x" === t.blockHash.replace(/0/g, "") &&
              (t.blockHash = null),
            t
          );
        }
        transaction(e) {
          return (0, f.parse)(e);
        }
        receiptLog(e) {
          return N.check(this.formats.receiptLog, e);
        }
        receipt(e) {
          let t = N.check(this.formats.receipt, e);
          if (null != t.root) {
            if (t.root.length <= 4) {
              let e = a.O$.from(t.root).toNumber();
              0 === e || 1 === e
                ? (null != t.status &&
                    t.status !== e &&
                    C.throwArgumentError(
                      "alt-root-status/status mismatch",
                      "value",
                      { root: t.root, status: t.status }
                    ),
                  (t.status = e),
                  delete t.root)
                : C.throwArgumentError(
                    "invalid alt-root-status",
                    "value.root",
                    t.root
                  );
            } else
              66 !== t.root.length &&
                C.throwArgumentError("invalid root hash", "value.root", t.root);
          }
          return null != t.status && (t.byzantium = !0), t;
        }
        topics(e) {
          return Array.isArray(e)
            ? e.map((e) => this.topics(e))
            : null != e
            ? this.hash(e, !0)
            : null;
        }
        filter(e) {
          return N.check(this.formats.filter, e);
        }
        filterLog(e) {
          return N.check(this.formats.filterLog, e);
        }
        static check(e, t) {
          let r = {};
          for (let n in e)
            try {
              let i = e[n](t[n]);
              void 0 !== i && (r[n] = i);
            } catch (e) {
              throw ((e.checkKey = n), (e.checkValue = t[n]), e);
            }
          return r;
        }
        static allowNull(e, t) {
          return function (r) {
            return null == r ? t : e(r);
          };
        }
        static allowFalsish(e, t) {
          return function (r) {
            return r ? e(r) : t;
          };
        }
        static arrayOf(e) {
          return function (t) {
            if (!Array.isArray(t)) throw Error("not an array");
            let r = [];
            return (
              t.forEach(function (t) {
                r.push(e(t));
              }),
              r
            );
          };
        }
      }
      var R = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(e) {
            try {
              l(n.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(s, a);
          }
          l((n = n.apply(e, t || [])).next());
        });
      };
      let T = new i.Logger(o);
      function I(e) {
        return null == e
          ? "null"
          : (32 !== (0, l.hexDataLength)(e) &&
              T.throwArgumentError("invalid topic", "topic", e),
            e.toLowerCase());
      }
      function B(e) {
        for (e = e.slice(); e.length > 0 && null == e[e.length - 1]; ) e.pop();
        return e
          .map((e) => {
            if (!Array.isArray(e)) return I(e);
            {
              let t = {};
              e.forEach((e) => {
                t[I(e)] = !0;
              });
              let r = Object.keys(t);
              return r.sort(), r.join("|");
            }
          })
          .join("&");
      }
      function L(e) {
        if ("string" == typeof e) {
          if (((e = e.toLowerCase()), 32 === (0, l.hexDataLength)(e)))
            return "tx:" + e;
          if (-1 === e.indexOf(":")) return e;
        } else if (Array.isArray(e)) return "filter:*:" + B(e);
        else if (d.Sg.isForkEvent(e))
          throw (T.warn("not implemented"), Error("not implemented"));
        else if (e && "object" == typeof e)
          return "filter:" + (e.address || "*") + ":" + B(e.topics || []);
        throw Error("invalid event - " + e);
      }
      function F() {
        return new Date().getTime();
      }
      function D(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      let M = ["block", "network", "pending", "poll"];
      class U {
        constructor(e, t, r) {
          (0, n.defineReadOnly)(this, "tag", e),
            (0, n.defineReadOnly)(this, "listener", t),
            (0, n.defineReadOnly)(this, "once", r),
            (this._lastBlockNumber = -2),
            (this._inflight = !1);
        }
        get event() {
          switch (this.type) {
            case "tx":
              return this.hash;
            case "filter":
              return this.filter;
          }
          return this.tag;
        }
        get type() {
          return this.tag.split(":")[0];
        }
        get hash() {
          let e = this.tag.split(":");
          return "tx" !== e[0] ? null : e[1];
        }
        get filter() {
          var e;
          let t = this.tag.split(":");
          if ("filter" !== t[0]) return null;
          let r = t[1],
            n =
              "" === (e = t[2])
                ? []
                : e.split(/&/g).map((e) => {
                    if ("" === e) return [];
                    let t = e.split("|").map((e) => ("null" === e ? null : e));
                    return 1 === t.length ? t[0] : t;
                  }),
            i = {};
          return (
            n.length > 0 && (i.topics = n), r && "*" !== r && (i.address = r), i
          );
        }
        pollable() {
          return this.tag.indexOf(":") >= 0 || M.indexOf(this.tag) >= 0;
        }
      }
      let j = {
        0: { symbol: "btc", p2pkh: 0, p2sh: 5, prefix: "bc" },
        2: { symbol: "ltc", p2pkh: 48, p2sh: 50, prefix: "ltc" },
        3: { symbol: "doge", p2pkh: 30, p2sh: 22 },
        60: { symbol: "eth", ilk: "eth" },
        61: { symbol: "etc", ilk: "eth" },
        700: { symbol: "xdai", ilk: "eth" },
      };
      function z(e) {
        return (0, l.hexZeroPad)(a.O$.from(e).toHexString(), 32);
      }
      function H(e) {
        return g.Base58.encode(
          (0, l.concat)([e, (0, l.hexDataSlice)((0, P.JQ)((0, P.JQ)(e)), 0, 4)])
        );
      }
      let G = RegExp("^(ipfs)://(.*)$", "i"),
        K = [
          RegExp("^(https)://(.*)$", "i"),
          RegExp("^(data):(.*)$", "i"),
          G,
          RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i"),
        ];
      function V(e, t) {
        try {
          return (0, c.ZN)(q(e, t));
        } catch (e) {}
        return null;
      }
      function q(e, t) {
        if ("0x" === e) return null;
        let r = a.O$.from((0, l.hexDataSlice)(e, t, t + 32)).toNumber(),
          n = a.O$.from((0, l.hexDataSlice)(e, r, r + 32)).toNumber();
        return (0, l.hexDataSlice)(e, r + 32, r + 32 + n);
      }
      function J(e) {
        return (
          e.match(/^ipfs:\/\/ipfs\//i)
            ? (e = e.substring(12))
            : e.match(/^ipfs:\/\//i)
            ? (e = e.substring(7))
            : T.throwArgumentError("unsupported IPFS format", "link", e),
          `https://gateway.ipfs.io/ipfs/${e}`
        );
      }
      function W(e) {
        let t = (0, l.arrayify)(e);
        if (t.length > 32) throw Error("internal; should not happen");
        let r = new Uint8Array(32);
        return r.set(t, 32 - t.length), r;
      }
      function Q(e) {
        let t = [],
          r = 0;
        for (let n = 0; n < e.length; n++) t.push(null), (r += 32);
        for (let n = 0; n < e.length; n++) {
          let i = (0, l.arrayify)(e[n]);
          (t[n] = W(r)),
            t.push(W(i.length)),
            t.push(
              (function (e) {
                if (e.length % 32 == 0) return e;
                let t = new Uint8Array(32 * Math.ceil(e.length / 32));
                return t.set(e), t;
              })(i)
            ),
            (r += 32 + 32 * Math.ceil(i.length / 32));
        }
        return (0, l.hexConcat)(t);
      }
      class Y {
        constructor(e, t, r, i) {
          (0, n.defineReadOnly)(this, "provider", e),
            (0, n.defineReadOnly)(this, "name", r),
            (0, n.defineReadOnly)(this, "address", e.formatter.address(t)),
            (0, n.defineReadOnly)(this, "_resolvedAddress", i);
        }
        supportsWildcard() {
          return (
            this._supportsEip2544 ||
              (this._supportsEip2544 = this.provider
                .call({
                  to: this.address,
                  data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000",
                })
                .then((e) => a.O$.from(e).eq(1))
                .catch((e) => {
                  if (e.code === i.Logger.errors.CALL_EXCEPTION) return !1;
                  throw ((this._supportsEip2544 = null), e);
                })),
            this._supportsEip2544
          );
        }
        _fetch(e, t) {
          return R(this, void 0, void 0, function* () {
            let r = {
                to: this.address,
                ccipReadEnabled: !0,
                data: (0, l.hexConcat)([e, (0, y.VM)(this.name), t || "0x"]),
              },
              n = !1;
            (yield this.supportsWildcard()) &&
              ((n = !0),
              (r.data = (0, l.hexConcat)([
                "0x9061b923",
                Q([(0, y.Kn)(this.name), r.data]),
              ])));
            try {
              let e = yield this.provider.call(r);
              return (
                (0, l.arrayify)(e).length % 32 == 4 &&
                  T.throwError(
                    "resolver threw error",
                    i.Logger.errors.CALL_EXCEPTION,
                    { transaction: r, data: e }
                  ),
                n && (e = q(e, 0)),
                e
              );
            } catch (e) {
              if (e.code === i.Logger.errors.CALL_EXCEPTION) return null;
              throw e;
            }
          });
        }
        _fetchBytes(e, t) {
          return R(this, void 0, void 0, function* () {
            let r = yield this._fetch(e, t);
            return null != r ? q(r, 0) : null;
          });
        }
        _getAddress(e, t) {
          let r = j[String(e)];
          if (
            (null == r &&
              T.throwError(
                `unsupported coin type: ${e}`,
                i.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: `getAddress(${e})` }
              ),
            "eth" === r.ilk)
          )
            return this.provider.formatter.address(t);
          let n = (0, l.arrayify)(t);
          if (null != r.p2pkh) {
            let e = t.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
            if (e) {
              let t = parseInt(e[1], 16);
              if (e[2].length === 2 * t && t >= 1 && t <= 75)
                return H((0, l.concat)([[r.p2pkh], "0x" + e[2]]));
            }
          }
          if (null != r.p2sh) {
            let e = t.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
            if (e) {
              let t = parseInt(e[1], 16);
              if (e[2].length === 2 * t && t >= 1 && t <= 75)
                return H((0, l.concat)([[r.p2sh], "0x" + e[2]]));
            }
          }
          if (null != r.prefix) {
            let e = n[1],
              t = n[0];
            if (
              (0 === t ? 20 !== e && 32 !== e && (t = -1) : (t = -1),
              t >= 0 && n.length === 2 + e && e >= 1 && e <= 75)
            ) {
              let e = k().toWords(n.slice(2));
              return e.unshift(t), k().encode(r.prefix, e);
            }
          }
          return null;
        }
        getAddress(e) {
          return R(this, void 0, void 0, function* () {
            if ((null == e && (e = 60), 60 === e))
              try {
                let e = yield this._fetch("0x3b3b57de");
                if ("0x" === e || e === m.R) return null;
                return this.provider.formatter.callAddress(e);
              } catch (e) {
                if (e.code === i.Logger.errors.CALL_EXCEPTION) return null;
                throw e;
              }
            let t = yield this._fetchBytes("0xf1cb7e06", z(e));
            if (null == t || "0x" === t) return null;
            let r = this._getAddress(e, t);
            return (
              null == r &&
                T.throwError(
                  "invalid or unsupported coin data",
                  i.Logger.errors.UNSUPPORTED_OPERATION,
                  { operation: `getAddress(${e})`, coinType: e, data: t }
                ),
              r
            );
          });
        }
        getAvatar() {
          return R(this, void 0, void 0, function* () {
            let e = [{ type: "name", content: this.name }];
            try {
              let t = yield this.getText("avatar");
              if (null == t) return null;
              for (let r = 0; r < K.length; r++) {
                let n = t.match(K[r]);
                if (null == n) continue;
                let i = n[1].toLowerCase();
                switch (i) {
                  case "https":
                    return (
                      e.push({ type: "url", content: t }),
                      { linkage: e, url: t }
                    );
                  case "data":
                    return (
                      e.push({ type: "data", content: t }),
                      { linkage: e, url: t }
                    );
                  case "ipfs":
                    return (
                      e.push({ type: "ipfs", content: t }),
                      { linkage: e, url: J(t) }
                    );
                  case "erc721":
                  case "erc1155": {
                    let r = "erc721" === i ? "0xc87b56dd" : "0x0e89341c";
                    e.push({ type: i, content: t });
                    let o = this._resolvedAddress || (yield this.getAddress()),
                      s = (n[2] || "").split("/");
                    if (2 !== s.length) return null;
                    let u = yield this.provider.formatter.address(s[0]),
                      c = (0, l.hexZeroPad)(a.O$.from(s[1]).toHexString(), 32);
                    if ("erc721" === i) {
                      let t = this.provider.formatter.callAddress(
                        yield this.provider.call({
                          to: u,
                          data: (0, l.hexConcat)(["0x6352211e", c]),
                        })
                      );
                      if (o !== t) return null;
                      e.push({ type: "owner", content: t });
                    } else if ("erc1155" === i) {
                      let t = a.O$.from(
                        yield this.provider.call({
                          to: u,
                          data: (0, l.hexConcat)([
                            "0x00fdd58e",
                            (0, l.hexZeroPad)(o, 32),
                            c,
                          ]),
                        })
                      );
                      if (t.isZero()) return null;
                      e.push({ type: "balance", content: t.toString() });
                    }
                    let f = {
                        to: this.provider.formatter.address(s[0]),
                        data: (0, l.hexConcat)([r, c]),
                      },
                      d = V(yield this.provider.call(f), 0);
                    if (null == d) return null;
                    e.push({ type: "metadata-url-base", content: d }),
                      "erc1155" === i &&
                        ((d = d.replace("{id}", c.substring(2))),
                        e.push({ type: "metadata-url-expanded", content: d })),
                      d.match(/^ipfs:/i) && (d = J(d)),
                      e.push({ type: "metadata-url", content: d });
                    let p = yield (0, h.fetchJson)(d);
                    if (!p) return null;
                    e.push({ type: "metadata", content: JSON.stringify(p) });
                    let g = p.image;
                    if ("string" != typeof g) return null;
                    if (g.match(/^(https:\/\/|data:)/i));
                    else {
                      let t = g.match(G);
                      if (null == t) return null;
                      e.push({ type: "url-ipfs", content: g }), (g = J(g));
                    }
                    return (
                      e.push({ type: "url", content: g }),
                      { linkage: e, url: g }
                    );
                  }
                }
              }
            } catch (e) {}
            return null;
          });
        }
        getContentHash() {
          return R(this, void 0, void 0, function* () {
            let e = yield this._fetchBytes("0xbc1c58d1");
            if (null == e || "0x" === e) return null;
            let t = e.match(
              /^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/
            );
            if (t) {
              let e = parseInt(t[3], 16);
              if (t[4].length === 2 * e)
                return "ipfs://" + g.Base58.encode("0x" + t[1]);
            }
            let r = e.match(
              /^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/
            );
            if (r) {
              let e = parseInt(r[3], 16);
              if (r[4].length === 2 * e)
                return "ipns://" + g.Base58.encode("0x" + r[1]);
            }
            let n = e.match(/^0xe40101fa011b20([0-9a-f]*)$/);
            if (n && 64 === n[1].length) return "bzz://" + n[1];
            let o = e.match(/^0x90b2c605([0-9a-f]*)$/);
            if (o && 68 === o[1].length) {
              let e = { "=": "", "+": "-", "/": "_" };
              return (
                "sia://" + (0, p.c)("0x" + o[1]).replace(/[=+\/]/g, (t) => e[t])
              );
            }
            return T.throwError(
              "invalid or unsupported content hash data",
              i.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "getContentHash()", data: e }
            );
          });
        }
        getText(e) {
          return R(this, void 0, void 0, function* () {
            let t = (0, c.Y0)(e);
            (t = (0, l.concat)([z(64), z(t.length), t])).length % 32 != 0 &&
              (t = (0, l.concat)([
                t,
                (0, l.hexZeroPad)("0x", 32 - (e.length % 32)),
              ]));
            let r = yield this._fetchBytes("0x59d1d43c", (0, l.hexlify)(t));
            return null == r || "0x" === r ? null : (0, c.ZN)(r);
          });
        }
      }
      let X = null,
        Z = 1;
      class $ extends d.zt {
        constructor(e) {
          if (
            (super(),
            (this._events = []),
            (this._emitted = { block: -2 }),
            (this.disableCcipRead = !1),
            (this.formatter = new.target.getFormatter()),
            (0, n.defineReadOnly)(this, "anyNetwork", "any" === e),
            this.anyNetwork && (e = this.detectNetwork()),
            e instanceof Promise)
          )
            (this._networkPromise = e),
              e.catch((e) => {}),
              this._ready().catch((e) => {});
          else {
            let t = (0, n.getStatic)(new.target, "getNetwork")(e);
            t
              ? ((0, n.defineReadOnly)(this, "_network", t),
                this.emit("network", t, null))
              : T.throwArgumentError("invalid network", "network", e);
          }
          (this._maxInternalBlockNumber = -1024),
            (this._lastBlockNumber = -2),
            (this._maxFilterBlockRange = 10),
            (this._pollingInterval = 4e3),
            (this._fastQueryDate = 0);
        }
        _ready() {
          return R(this, void 0, void 0, function* () {
            if (null == this._network) {
              let e = null;
              if (this._networkPromise)
                try {
                  e = yield this._networkPromise;
                } catch (e) {}
              null == e && (e = yield this.detectNetwork()),
                e ||
                  T.throwError(
                    "no network detected",
                    i.Logger.errors.UNKNOWN_ERROR,
                    {}
                  ),
                null == this._network &&
                  (this.anyNetwork
                    ? (this._network = e)
                    : (0, n.defineReadOnly)(this, "_network", e),
                  this.emit("network", e, null));
            }
            return this._network;
          });
        }
        get ready() {
          return (0, h.poll)(() =>
            this._ready().then(
              (e) => e,
              (e) => {
                if (
                  e.code !== i.Logger.errors.NETWORK_ERROR ||
                  "noNetwork" !== e.event
                )
                  throw e;
              }
            )
          );
        }
        static getFormatter() {
          return null == X && (X = new N()), X;
        }
        static getNetwork(e) {
          return (function (e) {
            if (null == e) return null;
            if ("number" == typeof e) {
              for (let t in S) {
                let r = S[t];
                if (r.chainId === e)
                  return {
                    name: r.name,
                    chainId: r.chainId,
                    ensAddress: r.ensAddress || null,
                    _defaultProvider: r._defaultProvider || null,
                  };
              }
              return { chainId: e, name: "unknown" };
            }
            if ("string" == typeof e) {
              let t = S[e];
              return null == t
                ? null
                : {
                    name: t.name,
                    chainId: t.chainId,
                    ensAddress: t.ensAddress,
                    _defaultProvider: t._defaultProvider || null,
                  };
            }
            let t = S[e.name];
            if (!t)
              return (
                "number" != typeof e.chainId &&
                  v.throwArgumentError("invalid network chainId", "network", e),
                e
              );
            0 !== e.chainId &&
              e.chainId !== t.chainId &&
              v.throwArgumentError("network chainId mismatch", "network", e);
            let r = e._defaultProvider || null;
            if (null == r && t._defaultProvider) {
              var n;
              r =
                (n = t._defaultProvider) && "function" == typeof n.renetwork
                  ? t._defaultProvider.renetwork(e)
                  : t._defaultProvider;
            }
            return {
              name: e.name,
              chainId: t.chainId,
              ensAddress: e.ensAddress || t.ensAddress || null,
              _defaultProvider: r,
            };
          })(null == e ? "homestead" : e);
        }
        ccipReadFetch(e, t, r) {
          return R(this, void 0, void 0, function* () {
            if (this.disableCcipRead || 0 === r.length) return null;
            let n = e.to.toLowerCase(),
              o = t.toLowerCase(),
              s = [];
            for (let e = 0; e < r.length; e++) {
              let t = r[e],
                a = t.replace("{sender}", n).replace("{data}", o),
                l =
                  t.indexOf("{data}") >= 0
                    ? null
                    : JSON.stringify({ data: o, sender: n }),
                u = yield (0, h.fetchJson)(
                  { url: a, errorPassThrough: !0 },
                  l,
                  (e, t) => ((e.status = t.statusCode), e)
                );
              if (u.data) return u.data;
              let c = u.message || "unknown error";
              if (u.status >= 400 && u.status < 500)
                return T.throwError(
                  `response not found during CCIP fetch: ${c}`,
                  i.Logger.errors.SERVER_ERROR,
                  { url: t, errorMessage: c }
                );
              s.push(c);
            }
            return T.throwError(
              `error encountered during CCIP fetch: ${s
                .map((e) => JSON.stringify(e))
                .join(", ")}`,
              i.Logger.errors.SERVER_ERROR,
              { urls: r, errorMessages: s }
            );
          });
        }
        _getInternalBlockNumber(e) {
          return R(this, void 0, void 0, function* () {
            if ((yield this._ready(), e > 0))
              for (; this._internalBlockNumber; ) {
                let t = this._internalBlockNumber;
                try {
                  let r = yield t;
                  if (F() - r.respTime <= e) return r.blockNumber;
                  break;
                } catch (e) {
                  if (this._internalBlockNumber === t) break;
                }
              }
            let t = F(),
              r = (0, n.resolveProperties)({
                blockNumber: this.perform("getBlockNumber", {}),
                networkError: this.getNetwork().then(
                  (e) => null,
                  (e) => e
                ),
              }).then(({ blockNumber: e, networkError: n }) => {
                if (n)
                  throw (
                    (this._internalBlockNumber === r &&
                      (this._internalBlockNumber = null),
                    n)
                  );
                let i = F();
                return (
                  (e = a.O$.from(e).toNumber()) <
                    this._maxInternalBlockNumber &&
                    (e = this._maxInternalBlockNumber),
                  (this._maxInternalBlockNumber = e),
                  this._setFastBlockNumber(e),
                  { blockNumber: e, reqTime: t, respTime: i }
                );
              });
            return (
              (this._internalBlockNumber = r),
              r.catch((e) => {
                this._internalBlockNumber === r &&
                  (this._internalBlockNumber = null);
              }),
              (yield r).blockNumber
            );
          });
        }
        poll() {
          return R(this, void 0, void 0, function* () {
            let e = Z++,
              t = [],
              r = null;
            try {
              r = yield this._getInternalBlockNumber(
                100 + this.pollingInterval / 2
              );
            } catch (e) {
              this.emit("error", e);
              return;
            }
            if (
              (this._setFastBlockNumber(r),
              this.emit("poll", e, r),
              r === this._lastBlockNumber)
            ) {
              this.emit("didPoll", e);
              return;
            }
            if (
              (-2 === this._emitted.block && (this._emitted.block = r - 1),
              Math.abs(this._emitted.block - r) > 1e3)
            )
              T.warn(
                `network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`
              ),
                this.emit(
                  "error",
                  T.makeError(
                    "network block skew detected",
                    i.Logger.errors.NETWORK_ERROR,
                    {
                      blockNumber: r,
                      event: "blockSkew",
                      previousBlockNumber: this._emitted.block,
                    }
                  )
                ),
                this.emit("block", r);
            else
              for (let e = this._emitted.block + 1; e <= r; e++)
                this.emit("block", e);
            this._emitted.block !== r &&
              ((this._emitted.block = r),
              Object.keys(this._emitted).forEach((e) => {
                if ("block" === e) return;
                let t = this._emitted[e];
                "pending" !== t && r - t > 12 && delete this._emitted[e];
              })),
              -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1),
              this._events.forEach((e) => {
                switch (e.type) {
                  case "tx": {
                    let r = e.hash,
                      n = this.getTransactionReceipt(r)
                        .then(
                          (e) => (
                            e &&
                              null != e.blockNumber &&
                              ((this._emitted["t:" + r] = e.blockNumber),
                              this.emit(r, e)),
                            null
                          )
                        )
                        .catch((e) => {
                          this.emit("error", e);
                        });
                    t.push(n);
                    break;
                  }
                  case "filter":
                    if (!e._inflight) {
                      (e._inflight = !0),
                        -2 === e._lastBlockNumber &&
                          (e._lastBlockNumber = r - 1);
                      let n = e.filter;
                      (n.fromBlock = e._lastBlockNumber + 1), (n.toBlock = r);
                      let i = n.toBlock - this._maxFilterBlockRange;
                      i > n.fromBlock && (n.fromBlock = i),
                        n.fromBlock < 0 && (n.fromBlock = 0);
                      let o = this.getLogs(n)
                        .then((t) => {
                          (e._inflight = !1),
                            0 !== t.length &&
                              t.forEach((t) => {
                                t.blockNumber > e._lastBlockNumber &&
                                  (e._lastBlockNumber = t.blockNumber),
                                  (this._emitted["b:" + t.blockHash] =
                                    t.blockNumber),
                                  (this._emitted["t:" + t.transactionHash] =
                                    t.blockNumber),
                                  this.emit(n, t);
                              });
                        })
                        .catch((t) => {
                          this.emit("error", t), (e._inflight = !1);
                        });
                      t.push(o);
                    }
                }
              }),
              (this._lastBlockNumber = r),
              Promise.all(t)
                .then(() => {
                  this.emit("didPoll", e);
                })
                .catch((e) => {
                  this.emit("error", e);
                });
          });
        }
        resetEventsBlock(e) {
          (this._lastBlockNumber = e - 1), this.polling && this.poll();
        }
        get network() {
          return this._network;
        }
        detectNetwork() {
          return R(this, void 0, void 0, function* () {
            return T.throwError(
              "provider does not support network detection",
              i.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "provider.detectNetwork" }
            );
          });
        }
        getNetwork() {
          return R(this, void 0, void 0, function* () {
            let e = yield this._ready(),
              t = yield this.detectNetwork();
            if (e.chainId !== t.chainId) {
              if (this.anyNetwork)
                return (
                  (this._network = t),
                  (this._lastBlockNumber = -2),
                  (this._fastBlockNumber = null),
                  (this._fastBlockNumberPromise = null),
                  (this._fastQueryDate = 0),
                  (this._emitted.block = -2),
                  (this._maxInternalBlockNumber = -1024),
                  (this._internalBlockNumber = null),
                  this.emit("network", t, e),
                  yield D(0),
                  this._network
                );
              let r = T.makeError(
                "underlying network changed",
                i.Logger.errors.NETWORK_ERROR,
                { event: "changed", network: e, detectedNetwork: t }
              );
              throw (this.emit("error", r), r);
            }
            return e;
          });
        }
        get blockNumber() {
          return (
            this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(
              (e) => {
                this._setFastBlockNumber(e);
              },
              (e) => {}
            ),
            null != this._fastBlockNumber ? this._fastBlockNumber : -1
          );
        }
        get polling() {
          return null != this._poller;
        }
        set polling(e) {
          e && !this._poller
            ? ((this._poller = setInterval(() => {
                this.poll();
              }, this.pollingInterval)),
              this._bootstrapPoll ||
                (this._bootstrapPoll = setTimeout(() => {
                  this.poll(),
                    (this._bootstrapPoll = setTimeout(() => {
                      this._poller || this.poll(), (this._bootstrapPoll = null);
                    }, this.pollingInterval));
                }, 0)))
            : !e &&
              this._poller &&
              (clearInterval(this._poller), (this._poller = null));
        }
        get pollingInterval() {
          return this._pollingInterval;
        }
        set pollingInterval(e) {
          if ("number" != typeof e || e <= 0 || parseInt(String(e)) != e)
            throw Error("invalid polling interval");
          (this._pollingInterval = e),
            this._poller &&
              (clearInterval(this._poller),
              (this._poller = setInterval(() => {
                this.poll();
              }, this._pollingInterval)));
        }
        _getFastBlockNumber() {
          let e = F();
          return (
            e - this._fastQueryDate > 2 * this._pollingInterval &&
              ((this._fastQueryDate = e),
              (this._fastBlockNumberPromise = this.getBlockNumber().then(
                (e) => (
                  (null == this._fastBlockNumber ||
                    e > this._fastBlockNumber) &&
                    (this._fastBlockNumber = e),
                  this._fastBlockNumber
                )
              ))),
            this._fastBlockNumberPromise
          );
        }
        _setFastBlockNumber(e) {
          (null == this._fastBlockNumber || !(e < this._fastBlockNumber)) &&
            ((this._fastQueryDate = F()),
            (null == this._fastBlockNumber || e > this._fastBlockNumber) &&
              ((this._fastBlockNumber = e),
              (this._fastBlockNumberPromise = Promise.resolve(e))));
        }
        waitForTransaction(e, t, r) {
          return R(this, void 0, void 0, function* () {
            return this._waitForTransaction(e, null == t ? 1 : t, r || 0, null);
          });
        }
        _waitForTransaction(e, t, r, n) {
          return R(this, void 0, void 0, function* () {
            let o = yield this.getTransactionReceipt(e);
            return (o ? o.confirmations : 0) >= t
              ? o
              : new Promise((o, s) => {
                  let a = [],
                    l = !1,
                    u = function () {
                      return (
                        !!l ||
                        ((l = !0),
                        a.forEach((e) => {
                          e();
                        }),
                        !1)
                      );
                    },
                    c = (e) => {
                      e.confirmations < t || u() || o(e);
                    };
                  if (
                    (this.on(e, c),
                    a.push(() => {
                      this.removeListener(e, c);
                    }),
                    n)
                  ) {
                    let r = n.startBlock,
                      o = null,
                      c = (a) =>
                        R(this, void 0, void 0, function* () {
                          l ||
                            (yield D(1e3),
                            this.getTransactionCount(n.from).then(
                              (f) =>
                                R(this, void 0, void 0, function* () {
                                  if (!l) {
                                    if (f <= n.nonce) r = a;
                                    else {
                                      {
                                        let t = yield this.getTransaction(e);
                                        if (t && null != t.blockNumber) return;
                                      }
                                      for (
                                        null == o &&
                                        (o = r - 3) < n.startBlock &&
                                        (o = n.startBlock);
                                        o <= a;

                                      ) {
                                        if (l) return;
                                        let r =
                                          yield this.getBlockWithTransactions(
                                            o
                                          );
                                        for (
                                          let o = 0;
                                          o < r.transactions.length;
                                          o++
                                        ) {
                                          let a = r.transactions[o];
                                          if (a.hash === e) return;
                                          if (
                                            a.from === n.from &&
                                            a.nonce === n.nonce
                                          ) {
                                            if (l) return;
                                            let r =
                                              yield this.waitForTransaction(
                                                a.hash,
                                                t
                                              );
                                            if (u()) return;
                                            let o = "replaced";
                                            a.data === n.data &&
                                            a.to === n.to &&
                                            a.value.eq(n.value)
                                              ? (o = "repriced")
                                              : "0x" === a.data &&
                                                a.from === a.to &&
                                                a.value.isZero() &&
                                                (o = "cancelled"),
                                              s(
                                                T.makeError(
                                                  "transaction was replaced",
                                                  i.Logger.errors
                                                    .TRANSACTION_REPLACED,
                                                  {
                                                    cancelled:
                                                      "replaced" === o ||
                                                      "cancelled" === o,
                                                    reason: o,
                                                    replacement:
                                                      this._wrapTransaction(a),
                                                    hash: e,
                                                    receipt: r,
                                                  }
                                                )
                                              );
                                            return;
                                          }
                                        }
                                        o++;
                                      }
                                    }
                                    l || this.once("block", c);
                                  }
                                }),
                              (e) => {
                                l || this.once("block", c);
                              }
                            ));
                        });
                    if (l) return;
                    this.once("block", c),
                      a.push(() => {
                        this.removeListener("block", c);
                      });
                  }
                  if ("number" == typeof r && r > 0) {
                    let e = setTimeout(() => {
                      u() ||
                        s(
                          T.makeError(
                            "timeout exceeded",
                            i.Logger.errors.TIMEOUT,
                            { timeout: r }
                          )
                        );
                    }, r);
                    e.unref && e.unref(),
                      a.push(() => {
                        clearTimeout(e);
                      });
                  }
                });
          });
        }
        getBlockNumber() {
          return R(this, void 0, void 0, function* () {
            return this._getInternalBlockNumber(0);
          });
        }
        getGasPrice() {
          return R(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let e = yield this.perform("getGasPrice", {});
            try {
              return a.O$.from(e);
            } catch (t) {
              return T.throwError(
                "bad result from backend",
                i.Logger.errors.SERVER_ERROR,
                { method: "getGasPrice", result: e, error: t }
              );
            }
          });
        }
        getBalance(e, t) {
          return R(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let r = yield (0, n.resolveProperties)({
                address: this._getAddress(e),
                blockTag: this._getBlockTag(t),
              }),
              o = yield this.perform("getBalance", r);
            try {
              return a.O$.from(o);
            } catch (e) {
              return T.throwError(
                "bad result from backend",
                i.Logger.errors.SERVER_ERROR,
                { method: "getBalance", params: r, result: o, error: e }
              );
            }
          });
        }
        getTransactionCount(e, t) {
          return R(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let r = yield (0, n.resolveProperties)({
                address: this._getAddress(e),
                blockTag: this._getBlockTag(t),
              }),
              o = yield this.perform("getTransactionCount", r);
            try {
              return a.O$.from(o).toNumber();
            } catch (e) {
              return T.throwError(
                "bad result from backend",
                i.Logger.errors.SERVER_ERROR,
                {
                  method: "getTransactionCount",
                  params: r,
                  result: o,
                  error: e,
                }
              );
            }
          });
        }
        getCode(e, t) {
          return R(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let r = yield (0, n.resolveProperties)({
                address: this._getAddress(e),
                blockTag: this._getBlockTag(t),
              }),
              o = yield this.perform("getCode", r);
            try {
              return (0, l.hexlify)(o);
            } catch (e) {
              return T.throwError(
                "bad result from backend",
                i.Logger.errors.SERVER_ERROR,
                { method: "getCode", params: r, result: o, error: e }
              );
            }
          });
        }
        getStorageAt(e, t, r) {
          return R(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let o = yield (0, n.resolveProperties)({
                address: this._getAddress(e),
                blockTag: this._getBlockTag(r),
                position: Promise.resolve(t).then((e) => (0, l.hexValue)(e)),
              }),
              s = yield this.perform("getStorageAt", o);
            try {
              return (0, l.hexlify)(s);
            } catch (e) {
              return T.throwError(
                "bad result from backend",
                i.Logger.errors.SERVER_ERROR,
                { method: "getStorageAt", params: o, result: s, error: e }
              );
            }
          });
        }
        _wrapTransaction(e, t, r) {
          if (null != t && 32 !== (0, l.hexDataLength)(t))
            throw Error("invalid response - sendTransaction");
          return (
            null != t &&
              e.hash !== t &&
              T.throwError(
                "Transaction hash mismatch from Provider.sendTransaction.",
                i.Logger.errors.UNKNOWN_ERROR,
                { expectedHash: e.hash, returnedHash: t }
              ),
            (e.wait = (t, n) =>
              R(this, void 0, void 0, function* () {
                let o;
                null == t && (t = 1),
                  null == n && (n = 0),
                  0 !== t &&
                    null != r &&
                    (o = {
                      data: e.data,
                      from: e.from,
                      nonce: e.nonce,
                      to: e.to,
                      value: e.value,
                      startBlock: r,
                    });
                let s = yield this._waitForTransaction(e.hash, t, n, o);
                return null == s && 0 === t
                  ? null
                  : ((this._emitted["t:" + e.hash] = s.blockNumber),
                    0 === s.status &&
                      T.throwError(
                        "transaction failed",
                        i.Logger.errors.CALL_EXCEPTION,
                        { transactionHash: e.hash, transaction: e, receipt: s }
                      ),
                    s);
              })),
            e
          );
        }
        sendTransaction(e) {
          return R(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let t = yield Promise.resolve(e).then((e) => (0, l.hexlify)(e)),
              r = this.formatter.transaction(e);
            null == r.confirmations && (r.confirmations = 0);
            let n = yield this._getInternalBlockNumber(
              100 + 2 * this.pollingInterval
            );
            try {
              let e = yield this.perform("sendTransaction", {
                signedTransaction: t,
              });
              return this._wrapTransaction(r, e, n);
            } catch (e) {
              throw ((e.transaction = r), (e.transactionHash = r.hash), e);
            }
          });
        }
        _getTransactionRequest(e) {
          return R(this, void 0, void 0, function* () {
            let t = yield e,
              r = {};
            return (
              ["from", "to"].forEach((e) => {
                null != t[e] &&
                  (r[e] = Promise.resolve(t[e]).then((e) =>
                    e ? this._getAddress(e) : null
                  ));
              }),
              [
                "gasLimit",
                "gasPrice",
                "maxFeePerGas",
                "maxPriorityFeePerGas",
                "value",
              ].forEach((e) => {
                null != t[e] &&
                  (r[e] = Promise.resolve(t[e]).then((e) =>
                    e ? a.O$.from(e) : null
                  ));
              }),
              ["type"].forEach((e) => {
                null != t[e] &&
                  (r[e] = Promise.resolve(t[e]).then((e) =>
                    null != e ? e : null
                  ));
              }),
              t.accessList &&
                (r.accessList = this.formatter.accessList(t.accessList)),
              ["data"].forEach((e) => {
                null != t[e] &&
                  (r[e] = Promise.resolve(t[e]).then((e) =>
                    e ? (0, l.hexlify)(e) : null
                  ));
              }),
              this.formatter.transactionRequest(
                yield (0, n.resolveProperties)(r)
              )
            );
          });
        }
        _getFilter(e) {
          return R(this, void 0, void 0, function* () {
            e = yield e;
            let t = {};
            return (
              null != e.address && (t.address = this._getAddress(e.address)),
              ["blockHash", "topics"].forEach((r) => {
                null != e[r] && (t[r] = e[r]);
              }),
              ["fromBlock", "toBlock"].forEach((r) => {
                null != e[r] && (t[r] = this._getBlockTag(e[r]));
              }),
              this.formatter.filter(yield (0, n.resolveProperties)(t))
            );
          });
        }
        _call(e, t, r) {
          return R(this, void 0, void 0, function* () {
            r >= 10 &&
              T.throwError(
                "CCIP read exceeded maximum redirections",
                i.Logger.errors.SERVER_ERROR,
                { redirects: r, transaction: e }
              );
            let n = e.to,
              o = yield this.perform("call", { transaction: e, blockTag: t });
            if (
              r >= 0 &&
              "latest" === t &&
              null != n &&
              "0x556f1830" === o.substring(0, 10) &&
              (0, l.hexDataLength)(o) % 32 == 4
            )
              try {
                let s = (0, l.hexDataSlice)(o, 4),
                  u = (0, l.hexDataSlice)(s, 0, 32);
                a.O$.from(u).eq(n) ||
                  T.throwError(
                    "CCIP Read sender did not match",
                    i.Logger.errors.CALL_EXCEPTION,
                    {
                      name: "OffchainLookup",
                      signature:
                        "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                      transaction: e,
                      data: o,
                    }
                  );
                let c = [],
                  f = a.O$.from((0, l.hexDataSlice)(s, 32, 64)).toNumber(),
                  h = a.O$.from((0, l.hexDataSlice)(s, f, f + 32)).toNumber(),
                  d = (0, l.hexDataSlice)(s, f + 32);
                for (let t = 0; t < h; t++) {
                  let r = V(d, 32 * t);
                  null == r &&
                    T.throwError(
                      "CCIP Read contained corrupt URL string",
                      i.Logger.errors.CALL_EXCEPTION,
                      {
                        name: "OffchainLookup",
                        signature:
                          "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                        transaction: e,
                        data: o,
                      }
                    ),
                    c.push(r);
                }
                let p = q(s, 64);
                a.O$.from((0, l.hexDataSlice)(s, 100, 128)).isZero() ||
                  T.throwError(
                    "CCIP Read callback selector included junk",
                    i.Logger.errors.CALL_EXCEPTION,
                    {
                      name: "OffchainLookup",
                      signature:
                        "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                      transaction: e,
                      data: o,
                    }
                  );
                let g = (0, l.hexDataSlice)(s, 96, 100),
                  m = q(s, 128),
                  y = yield this.ccipReadFetch(e, p, c);
                null == y &&
                  T.throwError(
                    "CCIP Read disabled or provided no URLs",
                    i.Logger.errors.CALL_EXCEPTION,
                    {
                      name: "OffchainLookup",
                      signature:
                        "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                      transaction: e,
                      data: o,
                    }
                  );
                let v = { to: n, data: (0, l.hexConcat)([g, Q([y, m])]) };
                return this._call(v, t, r + 1);
              } catch (e) {
                if (e.code === i.Logger.errors.SERVER_ERROR) throw e;
              }
            try {
              return (0, l.hexlify)(o);
            } catch (r) {
              return T.throwError(
                "bad result from backend",
                i.Logger.errors.SERVER_ERROR,
                {
                  method: "call",
                  params: { transaction: e, blockTag: t },
                  result: o,
                  error: r,
                }
              );
            }
          });
        }
        call(e, t) {
          return R(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let r = yield (0, n.resolveProperties)({
              transaction: this._getTransactionRequest(e),
              blockTag: this._getBlockTag(t),
              ccipReadEnabled: Promise.resolve(e.ccipReadEnabled),
            });
            return this._call(
              r.transaction,
              r.blockTag,
              r.ccipReadEnabled ? 0 : -1
            );
          });
        }
        estimateGas(e) {
          return R(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let t = yield (0, n.resolveProperties)({
                transaction: this._getTransactionRequest(e),
              }),
              r = yield this.perform("estimateGas", t);
            try {
              return a.O$.from(r);
            } catch (e) {
              return T.throwError(
                "bad result from backend",
                i.Logger.errors.SERVER_ERROR,
                { method: "estimateGas", params: t, result: r, error: e }
              );
            }
          });
        }
        _getAddress(e) {
          return R(this, void 0, void 0, function* () {
            "string" != typeof (e = yield e) &&
              T.throwArgumentError("invalid address or ENS name", "name", e);
            let t = yield this.resolveName(e);
            return (
              null == t &&
                T.throwError(
                  "ENS name not configured",
                  i.Logger.errors.UNSUPPORTED_OPERATION,
                  { operation: `resolveName(${JSON.stringify(e)})` }
                ),
              t
            );
          });
        }
        _getBlock(e, t) {
          return R(this, void 0, void 0, function* () {
            yield this.getNetwork(), (e = yield e);
            let r = -128,
              n = { includeTransactions: !!t };
            if ((0, l.isHexString)(e, 32)) n.blockHash = e;
            else
              try {
                (n.blockTag = yield this._getBlockTag(e)),
                  (0, l.isHexString)(n.blockTag) &&
                    (r = parseInt(n.blockTag.substring(2), 16));
              } catch (t) {
                T.throwArgumentError(
                  "invalid block hash or block tag",
                  "blockHashOrBlockTag",
                  e
                );
              }
            return (0, h.poll)(
              () =>
                R(this, void 0, void 0, function* () {
                  let e = yield this.perform("getBlock", n);
                  if (null == e)
                    return (null != n.blockHash &&
                      null == this._emitted["b:" + n.blockHash]) ||
                      (null != n.blockTag && r > this._emitted.block)
                      ? null
                      : void 0;
                  if (t) {
                    let t = null;
                    for (let r = 0; r < e.transactions.length; r++) {
                      let n = e.transactions[r];
                      if (null == n.blockNumber) n.confirmations = 0;
                      else if (null == n.confirmations) {
                        null == t &&
                          (t = yield this._getInternalBlockNumber(
                            100 + 2 * this.pollingInterval
                          ));
                        let e = t - n.blockNumber + 1;
                        e <= 0 && (e = 1), (n.confirmations = e);
                      }
                    }
                    let r = this.formatter.blockWithTransactions(e);
                    return (
                      (r.transactions = r.transactions.map((e) =>
                        this._wrapTransaction(e)
                      )),
                      r
                    );
                  }
                  return this.formatter.block(e);
                }),
              { oncePoll: this }
            );
          });
        }
        getBlock(e) {
          return this._getBlock(e, !1);
        }
        getBlockWithTransactions(e) {
          return this._getBlock(e, !0);
        }
        getTransaction(e) {
          return R(this, void 0, void 0, function* () {
            yield this.getNetwork(), (e = yield e);
            let t = { transactionHash: this.formatter.hash(e, !0) };
            return (0, h.poll)(
              () =>
                R(this, void 0, void 0, function* () {
                  let r = yield this.perform("getTransaction", t);
                  if (null == r)
                    return null == this._emitted["t:" + e] ? null : void 0;
                  let n = this.formatter.transactionResponse(r);
                  if (null == n.blockNumber) n.confirmations = 0;
                  else if (null == n.confirmations) {
                    let e =
                      (yield this._getInternalBlockNumber(
                        100 + 2 * this.pollingInterval
                      )) -
                      n.blockNumber +
                      1;
                    e <= 0 && (e = 1), (n.confirmations = e);
                  }
                  return this._wrapTransaction(n);
                }),
              { oncePoll: this }
            );
          });
        }
        getTransactionReceipt(e) {
          return R(this, void 0, void 0, function* () {
            yield this.getNetwork(), (e = yield e);
            let t = { transactionHash: this.formatter.hash(e, !0) };
            return (0, h.poll)(
              () =>
                R(this, void 0, void 0, function* () {
                  let r = yield this.perform("getTransactionReceipt", t);
                  if (null == r)
                    return null == this._emitted["t:" + e] ? null : void 0;
                  if (null == r.blockHash) return;
                  let n = this.formatter.receipt(r);
                  if (null == n.blockNumber) n.confirmations = 0;
                  else if (null == n.confirmations) {
                    let e =
                      (yield this._getInternalBlockNumber(
                        100 + 2 * this.pollingInterval
                      )) -
                      n.blockNumber +
                      1;
                    e <= 0 && (e = 1), (n.confirmations = e);
                  }
                  return n;
                }),
              { oncePoll: this }
            );
          });
        }
        getLogs(e) {
          return R(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let t = yield (0, n.resolveProperties)({
                filter: this._getFilter(e),
              }),
              r = yield this.perform("getLogs", t);
            return (
              r.forEach((e) => {
                null == e.removed && (e.removed = !1);
              }),
              N.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)
            );
          });
        }
        getEtherPrice() {
          return R(this, void 0, void 0, function* () {
            return yield this.getNetwork(), this.perform("getEtherPrice", {});
          });
        }
        _getBlockTag(e) {
          return R(this, void 0, void 0, function* () {
            if ("number" == typeof (e = yield e) && e < 0) {
              e % 1 && T.throwArgumentError("invalid BlockTag", "blockTag", e);
              let t = yield this._getInternalBlockNumber(
                100 + 2 * this.pollingInterval
              );
              return (t += e) < 0 && (t = 0), this.formatter.blockTag(t);
            }
            return this.formatter.blockTag(e);
          });
        }
        getResolver(e) {
          return R(this, void 0, void 0, function* () {
            let t = e;
            for (;;) {
              if ("" === t || "." === t || ("eth" !== e && "eth" === t))
                return null;
              let r = yield this._getResolver(t, "getResolver");
              if (null != r) {
                let n = new Y(this, r, e);
                if (t !== e && !(yield n.supportsWildcard())) return null;
                return n;
              }
              t = t.split(".").slice(1).join(".");
            }
          });
        }
        _getResolver(e, t) {
          return R(this, void 0, void 0, function* () {
            null == t && (t = "ENS");
            let r = yield this.getNetwork();
            r.ensAddress ||
              T.throwError(
                "network does not support ENS",
                i.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: t, network: r.name }
              );
            try {
              let t = yield this.call({
                to: r.ensAddress,
                data: "0x0178b8bf" + (0, y.VM)(e).substring(2),
              });
              return this.formatter.callAddress(t);
            } catch (e) {}
            return null;
          });
        }
        resolveName(e) {
          return R(this, void 0, void 0, function* () {
            e = yield e;
            try {
              return Promise.resolve(this.formatter.address(e));
            } catch (t) {
              if ((0, l.isHexString)(e)) throw t;
            }
            "string" != typeof e &&
              T.throwArgumentError("invalid ENS name", "name", e);
            let t = yield this.getResolver(e);
            return t ? yield t.getAddress() : null;
          });
        }
        lookupAddress(e) {
          return R(this, void 0, void 0, function* () {
            e = yield e;
            let t =
                (e = this.formatter.address(e)).substring(2).toLowerCase() +
                ".addr.reverse",
              r = yield this._getResolver(t, "lookupAddress");
            if (null == r) return null;
            let n = V(
              yield this.call({
                to: r,
                data: "0x691f3431" + (0, y.VM)(t).substring(2),
              }),
              0
            );
            return (yield this.resolveName(n)) != e ? null : n;
          });
        }
        getAvatar(e) {
          return R(this, void 0, void 0, function* () {
            let t = null;
            if ((0, l.isHexString)(e)) {
              let r =
                  this.formatter.address(e).substring(2).toLowerCase() +
                  ".addr.reverse",
                n = yield this._getResolver(r, "getAvatar");
              if (!n) return null;
              t = new Y(this, n, r);
              try {
                let e = yield t.getAvatar();
                if (e) return e.url;
              } catch (e) {
                if (e.code !== i.Logger.errors.CALL_EXCEPTION) throw e;
              }
              try {
                let e = V(
                  yield this.call({
                    to: n,
                    data: "0x691f3431" + (0, y.VM)(r).substring(2),
                  }),
                  0
                );
                t = yield this.getResolver(e);
              } catch (e) {
                if (e.code !== i.Logger.errors.CALL_EXCEPTION) throw e;
                return null;
              }
            } else if (!(t = yield this.getResolver(e))) return null;
            let r = yield t.getAvatar();
            return null == r ? null : r.url;
          });
        }
        perform(e, t) {
          return T.throwError(
            e + " not implemented",
            i.Logger.errors.NOT_IMPLEMENTED,
            { operation: e }
          );
        }
        _startEvent(e) {
          this.polling = this._events.filter((e) => e.pollable()).length > 0;
        }
        _stopEvent(e) {
          this.polling = this._events.filter((e) => e.pollable()).length > 0;
        }
        _addEventListener(e, t, r) {
          let n = new U(L(e), t, r);
          return this._events.push(n), this._startEvent(n), this;
        }
        on(e, t) {
          return this._addEventListener(e, t, !1);
        }
        once(e, t) {
          return this._addEventListener(e, t, !0);
        }
        emit(e, ...t) {
          let r = !1,
            n = [],
            i = L(e);
          return (
            (this._events = this._events.filter(
              (e) =>
                e.tag !== i ||
                (setTimeout(() => {
                  e.listener.apply(this, t);
                }, 0),
                (r = !0),
                !e.once || (n.push(e), !1))
            )),
            n.forEach((e) => {
              this._stopEvent(e);
            }),
            r
          );
        }
        listenerCount(e) {
          if (!e) return this._events.length;
          let t = L(e);
          return this._events.filter((e) => e.tag === t).length;
        }
        listeners(e) {
          if (null == e) return this._events.map((e) => e.listener);
          let t = L(e);
          return this._events.filter((e) => e.tag === t).map((e) => e.listener);
        }
        off(e, t) {
          if (null == t) return this.removeAllListeners(e);
          let r = [],
            n = !1,
            i = L(e);
          return (
            (this._events = this._events.filter(
              (e) =>
                e.tag !== i ||
                e.listener != t ||
                !!n ||
                ((n = !0), r.push(e), !1)
            )),
            r.forEach((e) => {
              this._stopEvent(e);
            }),
            this
          );
        }
        removeAllListeners(e) {
          let t = [];
          if (null == e) (t = this._events), (this._events = []);
          else {
            let r = L(e);
            this._events = this._events.filter(
              (e) => e.tag !== r || (t.push(e), !1)
            );
          }
          return (
            t.forEach((e) => {
              this._stopEvent(e);
            }),
            this
          );
        }
      }
      var ee = function (e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(e) {
            try {
              l(n.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(s, a);
          }
          l((n = n.apply(e, t || [])).next());
        });
      };
      let et = new i.Logger(o),
        er = ["call", "estimateGas"];
      function en(e, t) {
        if (null == e) return null;
        if ("string" == typeof e.message && e.message.match("reverted")) {
          let r = (0, l.isHexString)(e.data) ? e.data : null;
          if (!t || r) return { message: e.message, data: r };
        }
        if ("object" == typeof e) {
          for (let r in e) {
            let n = en(e[r], t);
            if (n) return n;
          }
          return null;
        }
        if ("string" == typeof e)
          try {
            return en(JSON.parse(e), t);
          } catch (e) {}
        return null;
      }
      function ei(e, t, r) {
        let n = r.transaction || r.signedTransaction;
        if ("call" === e) {
          let e = en(t, !0);
          if (e) return e.data;
          et.throwError(
            "missing revert data in call exception; Transaction reverted without a reason string",
            i.Logger.errors.CALL_EXCEPTION,
            { data: "0x", transaction: n, error: t }
          );
        }
        if ("estimateGas" === e) {
          let r = en(t.body, !1);
          null == r && (r = en(t, !1)),
            r &&
              et.throwError(
                "cannot estimate gas; transaction may fail or may require manual gas limit",
                i.Logger.errors.UNPREDICTABLE_GAS_LIMIT,
                { reason: r.message, method: e, transaction: n, error: t }
              );
        }
        let o = t.message;
        throw (
          (t.code === i.Logger.errors.SERVER_ERROR &&
          t.error &&
          "string" == typeof t.error.message
            ? (o = t.error.message)
            : "string" == typeof t.body
            ? (o = t.body)
            : "string" == typeof t.responseText && (o = t.responseText),
          (o = (o || "").toLowerCase()).match(
            /insufficient funds|base fee exceeds gas limit|InsufficientFunds/i
          ) &&
            et.throwError(
              "insufficient funds for intrinsic transaction cost",
              i.Logger.errors.INSUFFICIENT_FUNDS,
              { error: t, method: e, transaction: n }
            ),
          o.match(/nonce (is )?too low/i) &&
            et.throwError(
              "nonce has already been used",
              i.Logger.errors.NONCE_EXPIRED,
              { error: t, method: e, transaction: n }
            ),
          o.match(
            /replacement transaction underpriced|transaction gas price.*too low/i
          ) &&
            et.throwError(
              "replacement fee too low",
              i.Logger.errors.REPLACEMENT_UNDERPRICED,
              { error: t, method: e, transaction: n }
            ),
          o.match(/only replay-protected/i) &&
            et.throwError(
              "legacy pre-eip-155 transactions not supported",
              i.Logger.errors.UNSUPPORTED_OPERATION,
              { error: t, method: e, transaction: n }
            ),
          er.indexOf(e) >= 0 &&
            o.match(
              /gas required exceeds allowance|always failing transaction|execution reverted|revert/
            ) &&
            et.throwError(
              "cannot estimate gas; transaction may fail or may require manual gas limit",
              i.Logger.errors.UNPREDICTABLE_GAS_LIMIT,
              { error: t, method: e, transaction: n }
            ),
          t)
        );
      }
      function eo(e) {
        return new Promise(function (t) {
          setTimeout(t, e);
        });
      }
      function es(e) {
        if (e.error) {
          let t = Error(e.error.message);
          throw ((t.code = e.error.code), (t.data = e.error.data), t);
        }
        return e.result;
      }
      function ea(e) {
        return e ? e.toLowerCase() : e;
      }
      let el = {};
      class eu extends s.E {
        constructor(e, t, r) {
          if ((super(), e !== el))
            throw Error(
              "do not call the JsonRpcSigner constructor directly; use provider.getSigner"
            );
          (0, n.defineReadOnly)(this, "provider", t),
            null == r && (r = 0),
            "string" == typeof r
              ? ((0, n.defineReadOnly)(
                  this,
                  "_address",
                  this.provider.formatter.address(r)
                ),
                (0, n.defineReadOnly)(this, "_index", null))
              : "number" == typeof r
              ? ((0, n.defineReadOnly)(this, "_index", r),
                (0, n.defineReadOnly)(this, "_address", null))
              : et.throwArgumentError(
                  "invalid address or index",
                  "addressOrIndex",
                  r
                );
        }
        connect(e) {
          return et.throwError(
            "cannot alter JSON-RPC Signer connection",
            i.Logger.errors.UNSUPPORTED_OPERATION,
            { operation: "connect" }
          );
        }
        connectUnchecked() {
          return new ec(el, this.provider, this._address || this._index);
        }
        getAddress() {
          return this._address
            ? Promise.resolve(this._address)
            : this.provider
                .send("eth_accounts", [])
                .then(
                  (e) => (
                    e.length <= this._index &&
                      et.throwError(
                        "unknown account #" + this._index,
                        i.Logger.errors.UNSUPPORTED_OPERATION,
                        { operation: "getAddress" }
                      ),
                    this.provider.formatter.address(e[this._index])
                  )
                );
        }
        sendUncheckedTransaction(e) {
          e = (0, n.shallowCopy)(e);
          let t = this.getAddress().then(
            (e) => (e && (e = e.toLowerCase()), e)
          );
          if (null == e.gasLimit) {
            let r = (0, n.shallowCopy)(e);
            (r.from = t), (e.gasLimit = this.provider.estimateGas(r));
          }
          return (
            null != e.to &&
              (e.to = Promise.resolve(e.to).then((e) =>
                ee(this, void 0, void 0, function* () {
                  if (null == e) return null;
                  let t = yield this.provider.resolveName(e);
                  return (
                    null == t &&
                      et.throwArgumentError(
                        "provided ENS name resolves to null",
                        "tx.to",
                        e
                      ),
                    t
                  );
                })
              )),
            (0, n.resolveProperties)({
              tx: (0, n.resolveProperties)(e),
              sender: t,
            }).then(({ tx: t, sender: r }) => {
              null != t.from
                ? t.from.toLowerCase() !== r &&
                  et.throwArgumentError(
                    "from address mismatch",
                    "transaction",
                    e
                  )
                : (t.from = r);
              let n = this.provider.constructor.hexlifyTransaction(t, {
                from: !0,
              });
              return this.provider.send("eth_sendTransaction", [n]).then(
                (e) => e,
                (e) => (
                  "string" == typeof e.message &&
                    e.message.match(/user denied/i) &&
                    et.throwError(
                      "user rejected transaction",
                      i.Logger.errors.ACTION_REJECTED,
                      { action: "sendTransaction", transaction: t }
                    ),
                  ei("sendTransaction", e, n)
                )
              );
            })
          );
        }
        signTransaction(e) {
          return et.throwError(
            "signing transactions is unsupported",
            i.Logger.errors.UNSUPPORTED_OPERATION,
            { operation: "signTransaction" }
          );
        }
        sendTransaction(e) {
          return ee(this, void 0, void 0, function* () {
            let t = yield this.provider._getInternalBlockNumber(
                100 + 2 * this.provider.pollingInterval
              ),
              r = yield this.sendUncheckedTransaction(e);
            try {
              return yield (0, h.poll)(
                () =>
                  ee(this, void 0, void 0, function* () {
                    let e = yield this.provider.getTransaction(r);
                    if (null !== e)
                      return this.provider._wrapTransaction(e, r, t);
                  }),
                { oncePoll: this.provider }
              );
            } catch (e) {
              throw ((e.transactionHash = r), e);
            }
          });
        }
        signMessage(e) {
          return ee(this, void 0, void 0, function* () {
            let t = "string" == typeof e ? (0, c.Y0)(e) : e,
              r = yield this.getAddress();
            try {
              return yield this.provider.send("personal_sign", [
                (0, l.hexlify)(t),
                r.toLowerCase(),
              ]);
            } catch (t) {
              throw (
                ("string" == typeof t.message &&
                  t.message.match(/user denied/i) &&
                  et.throwError(
                    "user rejected signing",
                    i.Logger.errors.ACTION_REJECTED,
                    { action: "signMessage", from: r, messageData: e }
                  ),
                t)
              );
            }
          });
        }
        _legacySignMessage(e) {
          return ee(this, void 0, void 0, function* () {
            let t = "string" == typeof e ? (0, c.Y0)(e) : e,
              r = yield this.getAddress();
            try {
              return yield this.provider.send("eth_sign", [
                r.toLowerCase(),
                (0, l.hexlify)(t),
              ]);
            } catch (t) {
              throw (
                ("string" == typeof t.message &&
                  t.message.match(/user denied/i) &&
                  et.throwError(
                    "user rejected signing",
                    i.Logger.errors.ACTION_REJECTED,
                    { action: "_legacySignMessage", from: r, messageData: e }
                  ),
                t)
              );
            }
          });
        }
        _signTypedData(e, t, r) {
          return ee(this, void 0, void 0, function* () {
            let n = yield u.E.resolveNames(e, t, r, (e) =>
                this.provider.resolveName(e)
              ),
              o = yield this.getAddress();
            try {
              return yield this.provider.send("eth_signTypedData_v4", [
                o.toLowerCase(),
                JSON.stringify(u.E.getPayload(n.domain, t, n.value)),
              ]);
            } catch (e) {
              throw (
                ("string" == typeof e.message &&
                  e.message.match(/user denied/i) &&
                  et.throwError(
                    "user rejected signing",
                    i.Logger.errors.ACTION_REJECTED,
                    {
                      action: "_signTypedData",
                      from: o,
                      messageData: {
                        domain: n.domain,
                        types: t,
                        value: n.value,
                      },
                    }
                  ),
                e)
              );
            }
          });
        }
        unlock(e) {
          return ee(this, void 0, void 0, function* () {
            let t = this.provider,
              r = yield this.getAddress();
            return t.send("personal_unlockAccount", [r.toLowerCase(), e, null]);
          });
        }
      }
      class ec extends eu {
        sendTransaction(e) {
          return this.sendUncheckedTransaction(e).then((e) => ({
            hash: e,
            nonce: null,
            gasLimit: null,
            gasPrice: null,
            data: null,
            value: null,
            chainId: null,
            confirmations: 0,
            from: null,
            wait: (t) => this.provider.waitForTransaction(e, t),
          }));
        }
      }
      let ef = {
        chainId: !0,
        data: !0,
        gasLimit: !0,
        gasPrice: !0,
        nonce: !0,
        to: !0,
        value: !0,
        type: !0,
        accessList: !0,
        maxFeePerGas: !0,
        maxPriorityFeePerGas: !0,
      };
      class eh extends $ {
        constructor(e, t) {
          let r = t;
          null == r &&
            (r = new Promise((e, t) => {
              setTimeout(() => {
                this.detectNetwork().then(
                  (t) => {
                    e(t);
                  },
                  (e) => {
                    t(e);
                  }
                );
              }, 0);
            })),
            super(r),
            e || (e = (0, n.getStatic)(this.constructor, "defaultUrl")()),
            "string" == typeof e
              ? (0, n.defineReadOnly)(
                  this,
                  "connection",
                  Object.freeze({ url: e })
                )
              : (0, n.defineReadOnly)(
                  this,
                  "connection",
                  Object.freeze((0, n.shallowCopy)(e))
                ),
            (this._nextId = 42);
        }
        get _cache() {
          return (
            null == this._eventLoopCache && (this._eventLoopCache = {}),
            this._eventLoopCache
          );
        }
        static defaultUrl() {
          return "http://localhost:8545";
        }
        detectNetwork() {
          return (
            this._cache.detectNetwork ||
              ((this._cache.detectNetwork = this._uncachedDetectNetwork()),
              setTimeout(() => {
                this._cache.detectNetwork = null;
              }, 0)),
            this._cache.detectNetwork
          );
        }
        _uncachedDetectNetwork() {
          return ee(this, void 0, void 0, function* () {
            yield eo(0);
            let e = null;
            try {
              e = yield this.send("eth_chainId", []);
            } catch (t) {
              try {
                e = yield this.send("net_version", []);
              } catch (e) {}
            }
            if (null != e) {
              let t = (0, n.getStatic)(this.constructor, "getNetwork");
              try {
                return t(a.O$.from(e).toNumber());
              } catch (t) {
                return et.throwError(
                  "could not detect network",
                  i.Logger.errors.NETWORK_ERROR,
                  { chainId: e, event: "invalidNetwork", serverError: t }
                );
              }
            }
            return et.throwError(
              "could not detect network",
              i.Logger.errors.NETWORK_ERROR,
              { event: "noNetwork" }
            );
          });
        }
        getSigner(e) {
          return new eu(el, this, e);
        }
        getUncheckedSigner(e) {
          return this.getSigner(e).connectUnchecked();
        }
        listAccounts() {
          return this.send("eth_accounts", []).then((e) =>
            e.map((e) => this.formatter.address(e))
          );
        }
        send(e, t) {
          let r = { method: e, params: t, id: this._nextId++, jsonrpc: "2.0" };
          this.emit("debug", {
            action: "request",
            request: (0, n.deepCopy)(r),
            provider: this,
          });
          let i = ["eth_chainId", "eth_blockNumber"].indexOf(e) >= 0;
          if (i && this._cache[e]) return this._cache[e];
          let o = (0, h.fetchJson)(this.connection, JSON.stringify(r), es).then(
            (e) => (
              this.emit("debug", {
                action: "response",
                request: r,
                response: e,
                provider: this,
              }),
              e
            ),
            (e) => {
              throw (
                (this.emit("debug", {
                  action: "response",
                  error: e,
                  request: r,
                  provider: this,
                }),
                e)
              );
            }
          );
          return (
            i &&
              ((this._cache[e] = o),
              setTimeout(() => {
                this._cache[e] = null;
              }, 0)),
            o
          );
        }
        prepareRequest(e, t) {
          switch (e) {
            case "getBlockNumber":
              return ["eth_blockNumber", []];
            case "getGasPrice":
              return ["eth_gasPrice", []];
            case "getBalance":
              return ["eth_getBalance", [ea(t.address), t.blockTag]];
            case "getTransactionCount":
              return ["eth_getTransactionCount", [ea(t.address), t.blockTag]];
            case "getCode":
              return ["eth_getCode", [ea(t.address), t.blockTag]];
            case "getStorageAt":
              return [
                "eth_getStorageAt",
                [ea(t.address), (0, l.hexZeroPad)(t.position, 32), t.blockTag],
              ];
            case "sendTransaction":
              return ["eth_sendRawTransaction", [t.signedTransaction]];
            case "getBlock":
              if (t.blockTag)
                return [
                  "eth_getBlockByNumber",
                  [t.blockTag, !!t.includeTransactions],
                ];
              if (t.blockHash)
                return [
                  "eth_getBlockByHash",
                  [t.blockHash, !!t.includeTransactions],
                ];
              break;
            case "getTransaction":
              return ["eth_getTransactionByHash", [t.transactionHash]];
            case "getTransactionReceipt":
              return ["eth_getTransactionReceipt", [t.transactionHash]];
            case "call":
              return [
                "eth_call",
                [
                  (0, n.getStatic)(this.constructor, "hexlifyTransaction")(
                    t.transaction,
                    { from: !0 }
                  ),
                  t.blockTag,
                ],
              ];
            case "estimateGas":
              return [
                "eth_estimateGas",
                [
                  (0, n.getStatic)(this.constructor, "hexlifyTransaction")(
                    t.transaction,
                    { from: !0 }
                  ),
                ],
              ];
            case "getLogs":
              return (
                t.filter &&
                  null != t.filter.address &&
                  (t.filter.address = ea(t.filter.address)),
                ["eth_getLogs", [t.filter]]
              );
          }
          return null;
        }
        perform(e, t) {
          return ee(this, void 0, void 0, function* () {
            if ("call" === e || "estimateGas" === e) {
              let e = t.transaction;
              if (
                e &&
                null != e.type &&
                a.O$.from(e.type).isZero() &&
                null == e.maxFeePerGas &&
                null == e.maxPriorityFeePerGas
              ) {
                let r = yield this.getFeeData();
                null == r.maxFeePerGas &&
                  null == r.maxPriorityFeePerGas &&
                  (((t = (0, n.shallowCopy)(t)).transaction = (0,
                  n.shallowCopy)(e)),
                  delete t.transaction.type);
              }
            }
            let r = this.prepareRequest(e, t);
            null == r &&
              et.throwError(
                e + " not implemented",
                i.Logger.errors.NOT_IMPLEMENTED,
                { operation: e }
              );
            try {
              return yield this.send(r[0], r[1]);
            } catch (r) {
              return ei(e, r, t);
            }
          });
        }
        _startEvent(e) {
          "pending" === e.tag && this._startPending(), super._startEvent(e);
        }
        _startPending() {
          if (null != this._pendingFilter) return;
          let e = this,
            t = this.send("eth_newPendingTransactionFilter", []);
          (this._pendingFilter = t),
            t
              .then(function (r) {
                return (
                  (function n() {
                    e.send("eth_getFilterChanges", [r])
                      .then(function (r) {
                        if (e._pendingFilter != t) return null;
                        let n = Promise.resolve();
                        return (
                          r.forEach(function (t) {
                            (e._emitted["t:" + t.toLowerCase()] = "pending"),
                              (n = n.then(function () {
                                return e.getTransaction(t).then(function (t) {
                                  return e.emit("pending", t), null;
                                });
                              }));
                          }),
                          n.then(function () {
                            return eo(1e3);
                          })
                        );
                      })
                      .then(function () {
                        if (e._pendingFilter != t) {
                          e.send("eth_uninstallFilter", [r]);
                          return;
                        }
                        return (
                          setTimeout(function () {
                            n();
                          }, 0),
                          null
                        );
                      })
                      .catch((e) => {});
                  })(),
                  r
                );
              })
              .catch((e) => {});
        }
        _stopEvent(e) {
          "pending" === e.tag &&
            0 === this.listenerCount("pending") &&
            (this._pendingFilter = null),
            super._stopEvent(e);
        }
        static hexlifyTransaction(e, t) {
          let r = (0, n.shallowCopy)(ef);
          if (t) for (let e in t) t[e] && (r[e] = !0);
          (0, n.checkProperties)(e, r);
          let i = {};
          return (
            [
              "chainId",
              "gasLimit",
              "gasPrice",
              "type",
              "maxFeePerGas",
              "maxPriorityFeePerGas",
              "nonce",
              "value",
            ].forEach(function (t) {
              if (null == e[t]) return;
              let r = (0, l.hexValue)(a.O$.from(e[t]));
              "gasLimit" === t && (t = "gas"), (i[t] = r);
            }),
            ["from", "to", "data"].forEach(function (t) {
              null != e[t] && (i[t] = (0, l.hexlify)(e[t]));
            }),
            e.accessList && (i.accessList = (0, f.accessListify)(e.accessList)),
            i
          );
        }
      }
      let ed = new i.Logger(o),
        ep = 1;
      function eg(e, t) {
        let r = "Web3LegacyFetcher";
        return function (e, i) {
          let o = { method: e, params: i, id: ep++, jsonrpc: "2.0" };
          return new Promise((e, i) => {
            this.emit("debug", {
              action: "request",
              fetcher: r,
              request: (0, n.deepCopy)(o),
              provider: this,
            }),
              t(o, (t, n) => {
                if (t)
                  return (
                    this.emit("debug", {
                      action: "response",
                      fetcher: r,
                      error: t,
                      request: o,
                      provider: this,
                    }),
                    i(t)
                  );
                if (
                  (this.emit("debug", {
                    action: "response",
                    fetcher: r,
                    request: o,
                    response: n,
                    provider: this,
                  }),
                  n.error)
                ) {
                  let e = Error(n.error.message);
                  return (e.code = n.error.code), (e.data = n.error.data), i(e);
                }
                e(n.result);
              });
          });
        };
      }
      class em extends eh {
        constructor(e, t) {
          null == e && ed.throwArgumentError("missing provider", "provider", e);
          let r = null,
            i = null,
            o = null;
          "function" == typeof e
            ? ((r = "unknown:"), (i = e))
            : (((r = e.host || e.path || "") ||
                !e.isMetaMask ||
                (r = "metamask"),
              (o = e),
              e.request)
                ? ("" === r && (r = "eip-1193:"),
                  (i = function (t, r) {
                    null == r && (r = []);
                    let i = { method: t, params: r };
                    return (
                      this.emit("debug", {
                        action: "request",
                        fetcher: "Eip1193Fetcher",
                        request: (0, n.deepCopy)(i),
                        provider: this,
                      }),
                      e.request(i).then(
                        (e) => (
                          this.emit("debug", {
                            action: "response",
                            fetcher: "Eip1193Fetcher",
                            request: i,
                            response: e,
                            provider: this,
                          }),
                          e
                        ),
                        (e) => {
                          throw (
                            (this.emit("debug", {
                              action: "response",
                              fetcher: "Eip1193Fetcher",
                              request: i,
                              error: e,
                              provider: this,
                            }),
                            e)
                          );
                        }
                      )
                    );
                  }))
                : e.sendAsync
                ? (i = eg(e, e.sendAsync.bind(e)))
                : e.send
                ? (i = eg(e, e.send.bind(e)))
                : ed.throwArgumentError("unsupported provider", "provider", e),
              r || (r = "unknown:")),
            super(r, t),
            (0, n.defineReadOnly)(this, "jsonRpcFetchFunc", i),
            (0, n.defineReadOnly)(this, "provider", o);
        }
        send(e, t) {
          return this.jsonRpcFetchFunc(e, t);
        }
      }
    },
    69472: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          randomBytes: function () {
            return n.O;
          },
          shuffled: function () {
            return i;
          },
        });
      var n = r(77282);
      function i(e) {
        e = e.slice();
        for (let t = e.length - 1; t > 0; t--) {
          let r = Math.floor(Math.random() * (t + 1)),
            n = e[t];
          (e[t] = e[r]), (e[r] = n);
        }
        return e;
      }
    },
    77282: function (e, t, r) {
      "use strict";
      r.d(t, {
        O: function () {
          return l;
        },
      });
      var n = r(7730),
        i = r(67214);
      let o = new i.Logger("random/5.7.0"),
        s = (function () {
          if ("undefined" != typeof self) return self;
          if ("undefined" != typeof window) return window;
          if (void 0 !== r.g) return r.g;
          throw Error("unable to locate global object");
        })(),
        a = s.crypto || s.msCrypto;
      function l(e) {
        (e <= 0 || e > 1024 || e % 1 || e != e) &&
          o.throwArgumentError("invalid length", "length", e);
        let t = new Uint8Array(e);
        return a.getRandomValues(t), (0, n.arrayify)(t);
      }
      (a && a.getRandomValues) ||
        (o.warn("WARNING: Missing strong random number source"),
        (a = {
          getRandomValues: function (e) {
            return o.throwError(
              "no secure random source avaialble",
              i.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "crypto.getRandomValues" }
            );
          },
        }));
    },
    2585: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          decode: function () {
            return f;
          },
          encode: function () {
            return l;
          },
        });
      var n = r(7730),
        i = r(67214);
      let o = new i.Logger("rlp/5.7.0");
      function s(e) {
        let t = [];
        for (; e; ) t.unshift(255 & e), (e >>= 8);
        return t;
      }
      function a(e, t, r) {
        let n = 0;
        for (let i = 0; i < r; i++) n = 256 * n + e[t + i];
        return n;
      }
      function l(e) {
        return (0, n.hexlify)(
          (function e(t) {
            if (Array.isArray(t)) {
              let r = [];
              if (
                (t.forEach(function (t) {
                  r = r.concat(e(t));
                }),
                r.length <= 55)
              )
                return r.unshift(192 + r.length), r;
              let n = s(r.length);
              return n.unshift(247 + n.length), n.concat(r);
            }
            (0, n.isBytesLike)(t) ||
              o.throwArgumentError("RLP object must be BytesLike", "object", t);
            let r = Array.prototype.slice.call((0, n.arrayify)(t));
            if (1 === r.length && r[0] <= 127) return r;
            if (r.length <= 55) return r.unshift(128 + r.length), r;
            let i = s(r.length);
            return i.unshift(183 + i.length), i.concat(r);
          })(e)
        );
      }
      function u(e, t, r, n) {
        let s = [];
        for (; r < t + 1 + n; ) {
          let a = c(e, r);
          s.push(a.result),
            (r += a.consumed) > t + 1 + n &&
              o.throwError(
                "child data too short",
                i.Logger.errors.BUFFER_OVERRUN,
                {}
              );
        }
        return { consumed: 1 + n, result: s };
      }
      function c(e, t) {
        if (
          (0 === e.length &&
            o.throwError("data too short", i.Logger.errors.BUFFER_OVERRUN, {}),
          e[t] >= 248)
        ) {
          let r = e[t] - 247;
          t + 1 + r > e.length &&
            o.throwError(
              "data short segment too short",
              i.Logger.errors.BUFFER_OVERRUN,
              {}
            );
          let n = a(e, t + 1, r);
          return (
            t + 1 + r + n > e.length &&
              o.throwError(
                "data long segment too short",
                i.Logger.errors.BUFFER_OVERRUN,
                {}
              ),
            u(e, t, t + 1 + r, r + n)
          );
        }
        if (e[t] >= 192) {
          let r = e[t] - 192;
          return (
            t + 1 + r > e.length &&
              o.throwError(
                "data array too short",
                i.Logger.errors.BUFFER_OVERRUN,
                {}
              ),
            u(e, t, t + 1, r)
          );
        }
        if (e[t] >= 184) {
          let r = e[t] - 183;
          t + 1 + r > e.length &&
            o.throwError(
              "data array too short",
              i.Logger.errors.BUFFER_OVERRUN,
              {}
            );
          let s = a(e, t + 1, r);
          t + 1 + r + s > e.length &&
            o.throwError(
              "data array too short",
              i.Logger.errors.BUFFER_OVERRUN,
              {}
            );
          let l = (0, n.hexlify)(e.slice(t + 1 + r, t + 1 + r + s));
          return { consumed: 1 + r + s, result: l };
        }
        if (e[t] >= 128) {
          let r = e[t] - 128;
          t + 1 + r > e.length &&
            o.throwError("data too short", i.Logger.errors.BUFFER_OVERRUN, {});
          let s = (0, n.hexlify)(e.slice(t + 1, t + 1 + r));
          return { consumed: 1 + r, result: s };
        }
        return { consumed: 1, result: (0, n.hexlify)(e[t]) };
      }
      function f(e) {
        let t = (0, n.arrayify)(e),
          r = c(t, 0);
        return (
          r.consumed !== t.length &&
            o.throwArgumentError("invalid rlp data", "data", e),
          r.result
        );
      }
    },
    49183: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          SupportedAlgorithm: function () {
            return i.p;
          },
          computeHmac: function () {
            return n.Gy;
          },
          ripemd160: function () {
            return n.bP;
          },
          sha256: function () {
            return n.JQ;
          },
          sha512: function () {
            return n.o;
          },
        });
      var n = r(53319),
        i = r(53106);
    },
    53319: function (e, t, r) {
      "use strict";
      r.d(t, {
        Gy: function () {
          return h;
        },
        bP: function () {
          return u;
        },
        JQ: function () {
          return c;
        },
        o: function () {
          return f;
        },
      });
      var n = r(20141),
        i = r.n(n),
        o = r(7730),
        s = r(53106),
        a = r(67214);
      let l = new a.Logger("sha2/5.7.0");
      function u(e) {
        return (
          "0x" +
          i()
            .ripemd160()
            .update((0, o.arrayify)(e))
            .digest("hex")
        );
      }
      function c(e) {
        return (
          "0x" +
          i()
            .sha256()
            .update((0, o.arrayify)(e))
            .digest("hex")
        );
      }
      function f(e) {
        return (
          "0x" +
          i()
            .sha512()
            .update((0, o.arrayify)(e))
            .digest("hex")
        );
      }
      function h(e, t, r) {
        return (
          s.p[e] ||
            l.throwError(
              "unsupported algorithm " + e,
              a.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "hmac", algorithm: e }
            ),
          "0x" +
            i()
              .hmac(i()[e], (0, o.arrayify)(t))
              .update((0, o.arrayify)(r))
              .digest("hex")
        );
      }
    },
    53106: function (e, t, r) {
      "use strict";
      var n, i;
      r.d(t, {
        p: function () {
          return n;
        },
      }),
        ((i = n || (n = {})).sha256 = "sha256"),
        (i.sha512 = "sha512");
    },
    65653: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          SigningKey: function () {
            return H;
          },
          computePublicKey: function () {
            return K;
          },
          recoverPublicKey: function () {
            return G;
          },
        });
      var n = r(12261),
        i = r.n(n),
        o = r(20141),
        s = r.n(o);
      function a(e, t, r) {
        return (
          e(
            (r = {
              path: t,
              exports: {},
              require: function (e, t) {
                return (function () {
                  throw Error(
                    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                  );
                })(e, null == t ? r.path : t);
              },
            }),
            r.exports
          ),
          r.exports
        );
      }
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : void 0 !== r.g
        ? r.g
        : "undefined" != typeof self && self;
      var l = u;
      function u(e, t) {
        if (!e) throw Error(t || "Assertion failed");
      }
      u.equal = function (e, t, r) {
        if (e != t) throw Error(r || "Assertion failed: " + e + " != " + t);
      };
      var c = a(function (e, t) {
          function r(e) {
            return 1 === e.length ? "0" + e : e;
          }
          function n(e) {
            for (var t = "", n = 0; n < e.length; n++)
              t += r(e[n].toString(16));
            return t;
          }
          (t.toArray = function (e, t) {
            if (Array.isArray(e)) return e.slice();
            if (!e) return [];
            var r = [];
            if ("string" != typeof e) {
              for (var n = 0; n < e.length; n++) r[n] = 0 | e[n];
              return r;
            }
            if ("hex" === t) {
              (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
                (e = "0" + e);
              for (var n = 0; n < e.length; n += 2)
                r.push(parseInt(e[n] + e[n + 1], 16));
            } else
              for (var n = 0; n < e.length; n++) {
                var i = e.charCodeAt(n),
                  o = i >> 8,
                  s = 255 & i;
                o ? r.push(o, s) : r.push(s);
              }
            return r;
          }),
            (t.zero2 = r),
            (t.toHex = n),
            (t.encode = function (e, t) {
              return "hex" === t ? n(e) : e;
            });
        }),
        f = a(function (e, t) {
          (t.assert = l),
            (t.toArray = c.toArray),
            (t.zero2 = c.zero2),
            (t.toHex = c.toHex),
            (t.encode = c.encode),
            (t.getNAF = function (e, t, r) {
              var n = Array(Math.max(e.bitLength(), r) + 1);
              n.fill(0);
              for (
                var i = 1 << (t + 1), o = e.clone(), s = 0;
                s < n.length;
                s++
              ) {
                var a,
                  l = o.andln(i - 1);
                o.isOdd()
                  ? ((a = l > (i >> 1) - 1 ? (i >> 1) - l : l), o.isubn(a))
                  : (a = 0),
                  (n[s] = a),
                  o.iushrn(1);
              }
              return n;
            }),
            (t.getJSF = function (e, t) {
              var r = [[], []];
              (e = e.clone()), (t = t.clone());
              for (var n = 0, i = 0; e.cmpn(-n) > 0 || t.cmpn(-i) > 0; ) {
                var o,
                  s,
                  a,
                  l = (e.andln(3) + n) & 3,
                  u = (t.andln(3) + i) & 3;
                3 === l && (l = -1),
                  3 === u && (u = -1),
                  (s =
                    (1 & l) == 0
                      ? 0
                      : (3 == (o = (e.andln(7) + n) & 7) || 5 === o) && 2 === u
                      ? -l
                      : l),
                  r[0].push(s),
                  (a =
                    (1 & u) == 0
                      ? 0
                      : (3 == (o = (t.andln(7) + i) & 7) || 5 === o) && 2 === l
                      ? -u
                      : u),
                  r[1].push(a),
                  2 * n === s + 1 && (n = 1 - n),
                  2 * i === a + 1 && (i = 1 - i),
                  e.iushrn(1),
                  t.iushrn(1);
              }
              return r;
            }),
            (t.cachedProperty = function (e, t, r) {
              var n = "_" + t;
              e.prototype[t] = function () {
                return void 0 !== this[n] ? this[n] : (this[n] = r.call(this));
              };
            }),
            (t.parseBytes = function (e) {
              return "string" == typeof e ? t.toArray(e, "hex") : e;
            }),
            (t.intFromLE = function (e) {
              return new (i())(e, "hex", "le");
            });
        }),
        h = f.getNAF,
        d = f.getJSF,
        p = f.assert;
      function g(e, t) {
        (this.type = e),
          (this.p = new (i())(t.p, 16)),
          (this.red = t.prime ? i().red(t.prime) : i().mont(this.p)),
          (this.zero = new (i())(0).toRed(this.red)),
          (this.one = new (i())(1).toRed(this.red)),
          (this.two = new (i())(2).toRed(this.red)),
          (this.n = t.n && new (i())(t.n, 16)),
          (this.g = t.g && this.pointFromJSON(t.g, t.gRed)),
          (this._wnafT1 = [, , , ,]),
          (this._wnafT2 = [, , , ,]),
          (this._wnafT3 = [, , , ,]),
          (this._wnafT4 = [, , , ,]),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      function m(e, t) {
        (this.curve = e), (this.type = t), (this.precomputed = null);
      }
      (g.prototype.point = function () {
        throw Error("Not implemented");
      }),
        (g.prototype.validate = function () {
          throw Error("Not implemented");
        }),
        (g.prototype._fixedNafMul = function (e, t) {
          p(e.precomputed);
          var r,
            n,
            i = e._getDoubles(),
            o = h(t, 1, this._bitLength),
            s = (1 << (i.step + 1)) - (i.step % 2 == 0 ? 2 : 1);
          s /= 3;
          var a = [];
          for (r = 0; r < o.length; r += i.step) {
            n = 0;
            for (var l = r + i.step - 1; l >= r; l--) n = (n << 1) + o[l];
            a.push(n);
          }
          for (
            var u = this.jpoint(null, null, null),
              c = this.jpoint(null, null, null),
              f = s;
            f > 0;
            f--
          ) {
            for (r = 0; r < a.length; r++)
              (n = a[r]) === f
                ? (c = c.mixedAdd(i.points[r]))
                : n === -f && (c = c.mixedAdd(i.points[r].neg()));
            u = u.add(c);
          }
          return u.toP();
        }),
        (g.prototype._wnafMul = function (e, t) {
          var r = 4,
            n = e._getNAFPoints(r);
          r = n.wnd;
          for (
            var i = n.points,
              o = h(t, r, this._bitLength),
              s = this.jpoint(null, null, null),
              a = o.length - 1;
            a >= 0;
            a--
          ) {
            for (var l = 0; a >= 0 && 0 === o[a]; a--) l++;
            if ((a >= 0 && l++, (s = s.dblp(l)), a < 0)) break;
            var u = o[a];
            p(0 !== u),
              (s =
                "affine" === e.type
                  ? u > 0
                    ? s.mixedAdd(i[(u - 1) >> 1])
                    : s.mixedAdd(i[(-u - 1) >> 1].neg())
                  : u > 0
                  ? s.add(i[(u - 1) >> 1])
                  : s.add(i[(-u - 1) >> 1].neg()));
          }
          return "affine" === e.type ? s.toP() : s;
        }),
        (g.prototype._wnafMulAdd = function (e, t, r, n, i) {
          var o,
            s,
            a,
            l = this._wnafT1,
            u = this._wnafT2,
            c = this._wnafT3,
            f = 0;
          for (o = 0; o < n; o++) {
            var p = (a = t[o])._getNAFPoints(e);
            (l[o] = p.wnd), (u[o] = p.points);
          }
          for (o = n - 1; o >= 1; o -= 2) {
            var g = o - 1,
              m = o;
            if (1 !== l[g] || 1 !== l[m]) {
              (c[g] = h(r[g], l[g], this._bitLength)),
                (c[m] = h(r[m], l[m], this._bitLength)),
                (f = Math.max(c[g].length, f)),
                (f = Math.max(c[m].length, f));
              continue;
            }
            var y = [t[g], null, null, t[m]];
            0 === t[g].y.cmp(t[m].y)
              ? ((y[1] = t[g].add(t[m])),
                (y[2] = t[g].toJ().mixedAdd(t[m].neg())))
              : 0 === t[g].y.cmp(t[m].y.redNeg())
              ? ((y[1] = t[g].toJ().mixedAdd(t[m])),
                (y[2] = t[g].add(t[m].neg())))
              : ((y[1] = t[g].toJ().mixedAdd(t[m])),
                (y[2] = t[g].toJ().mixedAdd(t[m].neg())));
            var v = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
              b = d(r[g], r[m]);
            for (
              s = 0,
                f = Math.max(b[0].length, f),
                c[g] = Array(f),
                c[m] = Array(f);
              s < f;
              s++
            ) {
              var A = 0 | b[0][s],
                w = 0 | b[1][s];
              (c[g][s] = v[(A + 1) * 3 + (w + 1)]), (c[m][s] = 0), (u[g] = y);
            }
          }
          var E = this.jpoint(null, null, null),
            x = this._wnafT4;
          for (o = f; o >= 0; o--) {
            for (var S = 0; o >= 0; ) {
              var P = !0;
              for (s = 0; s < n; s++)
                (x[s] = 0 | c[s][o]), 0 !== x[s] && (P = !1);
              if (!P) break;
              S++, o--;
            }
            if ((o >= 0 && S++, (E = E.dblp(S)), o < 0)) break;
            for (s = 0; s < n; s++) {
              var O = x[s];
              0 !== O &&
                (O > 0
                  ? (a = u[s][(O - 1) >> 1])
                  : O < 0 && (a = u[s][(-O - 1) >> 1].neg()),
                (E = "affine" === a.type ? E.mixedAdd(a) : E.add(a)));
            }
          }
          for (o = 0; o < n; o++) u[o] = null;
          return i ? E : E.toP();
        }),
        (g.BasePoint = m),
        (m.prototype.eq = function () {
          throw Error("Not implemented");
        }),
        (m.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (g.prototype.decodePoint = function (e, t) {
          e = f.toArray(e, t);
          var r = this.p.byteLength();
          if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r)
            return (
              6 === e[0]
                ? p(e[e.length - 1] % 2 == 0)
                : 7 === e[0] && p(e[e.length - 1] % 2 == 1),
              this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r))
            );
          if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
            return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
          throw Error("Unknown point format");
        }),
        (m.prototype.encodeCompressed = function (e) {
          return this.encode(e, !0);
        }),
        (m.prototype._encode = function (e) {
          var t = this.curve.p.byteLength(),
            r = this.getX().toArray("be", t);
          return e
            ? [this.getY().isEven() ? 2 : 3].concat(r)
            : [4].concat(r, this.getY().toArray("be", t));
        }),
        (m.prototype.encode = function (e, t) {
          return f.encode(this._encode(t), e);
        }),
        (m.prototype.precompute = function (e) {
          if (this.precomputed) return this;
          var t = { doubles: null, naf: null, beta: null };
          return (
            (t.naf = this._getNAFPoints(8)),
            (t.doubles = this._getDoubles(4, e)),
            (t.beta = this._getBeta()),
            (this.precomputed = t),
            this
          );
        }),
        (m.prototype._hasDoubles = function (e) {
          if (!this.precomputed) return !1;
          var t = this.precomputed.doubles;
          return (
            !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
          );
        }),
        (m.prototype._getDoubles = function (e, t) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var r = [this], n = this, i = 0; i < t; i += e) {
            for (var o = 0; o < e; o++) n = n.dbl();
            r.push(n);
          }
          return { step: e, points: r };
        }),
        (m.prototype._getNAFPoints = function (e) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var t = [this],
              r = (1 << e) - 1,
              n = 1 === r ? null : this.dbl(),
              i = 1;
            i < r;
            i++
          )
            t[i] = t[i - 1].add(n);
          return { wnd: e, points: t };
        }),
        (m.prototype._getBeta = function () {
          return null;
        }),
        (m.prototype.dblp = function (e) {
          for (var t = this, r = 0; r < e; r++) t = t.dbl();
          return t;
        });
      var y = a(function (e) {
          "function" == typeof Object.create
            ? (e.exports = function (e, t) {
                t &&
                  ((e.super_ = t),
                  (e.prototype = Object.create(t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })));
              })
            : (e.exports = function (e, t) {
                if (t) {
                  e.super_ = t;
                  var r = function () {};
                  (r.prototype = t.prototype),
                    (e.prototype = new r()),
                    (e.prototype.constructor = e);
                }
              });
        }),
        v = f.assert;
      function b(e) {
        g.call(this, "short", e),
          (this.a = new (i())(e.a, 16).toRed(this.red)),
          (this.b = new (i())(e.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(e)),
          (this._endoWnafT1 = [, , , ,]),
          (this._endoWnafT2 = [, , , ,]);
      }
      function A(e, t, r, n) {
        g.BasePoint.call(this, e, "affine"),
          null === t && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new (i())(t, 16)),
              (this.y = new (i())(r, 16)),
              n &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function w(e, t, r, n) {
        g.BasePoint.call(this, e, "jacobian"),
          null === t && null === r && null === n
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new (i())(0)))
            : ((this.x = new (i())(t, 16)),
              (this.y = new (i())(r, 16)),
              (this.z = new (i())(n, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      y(b, g),
        (b.prototype._getEndomorphism = function (e) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            if (e.beta) t = new (i())(e.beta, 16).toRed(this.red);
            else {
              var t,
                r,
                n,
                o = this._getEndoRoots(this.p);
              t = (t = 0 > o[0].cmp(o[1]) ? o[0] : o[1]).toRed(this.red);
            }
            if (e.lambda) r = new (i())(e.lambda, 16);
            else {
              var s = this._getEndoRoots(this.n);
              0 === this.g.mul(s[0]).x.cmp(this.g.x.redMul(t))
                ? (r = s[0])
                : ((r = s[1]),
                  v(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))));
            }
            return (
              (n = e.basis
                ? e.basis.map(function (e) {
                    return { a: new (i())(e.a, 16), b: new (i())(e.b, 16) };
                  })
                : this._getEndoBasis(r)),
              { beta: t, lambda: r, basis: n }
            );
          }
        }),
        (b.prototype._getEndoRoots = function (e) {
          var t = e === this.p ? this.red : i().mont(e),
            r = new (i())(2).toRed(t).redInvm(),
            n = r.redNeg(),
            o = new (i())(3).toRed(t).redNeg().redSqrt().redMul(r);
          return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()];
        }),
        (b.prototype._getEndoBasis = function (e) {
          for (
            var t,
              r,
              n,
              o,
              s,
              a,
              l,
              u,
              c,
              f = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              h = e,
              d = this.n.clone(),
              p = new (i())(1),
              g = new (i())(0),
              m = new (i())(0),
              y = new (i())(1),
              v = 0;
            0 !== h.cmpn(0);

          ) {
            var b = d.div(h);
            (u = d.sub(b.mul(h))), (c = m.sub(b.mul(p)));
            var A = y.sub(b.mul(g));
            if (!n && 0 > u.cmp(f))
              (t = l.neg()), (r = p), (n = u.neg()), (o = c);
            else if (n && 2 == ++v) break;
            (l = u), (d = h), (h = u), (m = p), (p = c), (y = g), (g = A);
          }
          (s = u.neg()), (a = c);
          var w = n.sqr().add(o.sqr());
          return (
            s.sqr().add(a.sqr()).cmp(w) >= 0 && ((s = t), (a = r)),
            n.negative && ((n = n.neg()), (o = o.neg())),
            s.negative && ((s = s.neg()), (a = a.neg())),
            [
              { a: n, b: o },
              { a: s, b: a },
            ]
          );
        }),
        (b.prototype._endoSplit = function (e) {
          var t = this.endo.basis,
            r = t[0],
            n = t[1],
            i = n.b.mul(e).divRound(this.n),
            o = r.b.neg().mul(e).divRound(this.n),
            s = i.mul(r.a),
            a = o.mul(n.a),
            l = i.mul(r.b),
            u = o.mul(n.b);
          return { k1: e.sub(s).sub(a), k2: l.add(u).neg() };
        }),
        (b.prototype.pointFromX = function (e, t) {
          (e = new (i())(e, 16)).red || (e = e.toRed(this.red));
          var r = e
              .redSqr()
              .redMul(e)
              .redIAdd(e.redMul(this.a))
              .redIAdd(this.b),
            n = r.redSqrt();
          if (0 !== n.redSqr().redSub(r).cmp(this.zero))
            throw Error("invalid point");
          var o = n.fromRed().isOdd();
          return ((t && !o) || (!t && o)) && (n = n.redNeg()), this.point(e, n);
        }),
        (b.prototype.validate = function (e) {
          if (e.inf) return !0;
          var t = e.x,
            r = e.y,
            n = this.a.redMul(t),
            i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
          return 0 === r.redSqr().redISub(i).cmpn(0);
        }),
        (b.prototype._endoWnafMulAdd = function (e, t, r) {
          for (
            var n = this._endoWnafT1, i = this._endoWnafT2, o = 0;
            o < e.length;
            o++
          ) {
            var s = this._endoSplit(t[o]),
              a = e[o],
              l = a._getBeta();
            s.k1.negative && (s.k1.ineg(), (a = a.neg(!0))),
              s.k2.negative && (s.k2.ineg(), (l = l.neg(!0))),
              (n[2 * o] = a),
              (n[2 * o + 1] = l),
              (i[2 * o] = s.k1),
              (i[2 * o + 1] = s.k2);
          }
          for (
            var u = this._wnafMulAdd(1, n, i, 2 * o, r), c = 0;
            c < 2 * o;
            c++
          )
            (n[c] = null), (i[c] = null);
          return u;
        }),
        y(A, g.BasePoint),
        (b.prototype.point = function (e, t, r) {
          return new A(this, e, t, r);
        }),
        (b.prototype.pointFromJSON = function (e, t) {
          return A.fromJSON(this, e, t);
        }),
        (A.prototype._getBeta = function () {
          if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var t = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            );
            if (e) {
              var r = this.curve,
                n = function (e) {
                  return r.point(e.x.redMul(r.endo.beta), e.y);
                };
              (e.beta = t),
                (t.precomputed = {
                  beta: null,
                  naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(n) },
                  doubles: e.doubles && {
                    step: e.doubles.step,
                    points: e.doubles.points.map(n),
                  },
                });
            }
            return t;
          }
        }),
        (A.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y];
        }),
        (A.fromJSON = function (e, t, r) {
          "string" == typeof t && (t = JSON.parse(t));
          var n = e.point(t[0], t[1], r);
          if (!t[2]) return n;
          function i(t) {
            return e.point(t[0], t[1], r);
          }
          var o = t[2];
          return (
            (n.precomputed = {
              beta: null,
              doubles: o.doubles && {
                step: o.doubles.step,
                points: [n].concat(o.doubles.points.map(i)),
              },
              naf: o.naf && {
                wnd: o.naf.wnd,
                points: [n].concat(o.naf.points.map(i)),
              },
            }),
            n
          );
        }),
        (A.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">";
        }),
        (A.prototype.isInfinity = function () {
          return this.inf;
        }),
        (A.prototype.add = function (e) {
          if (this.inf) return e;
          if (e.inf) return this;
          if (this.eq(e)) return this.dbl();
          if (this.neg().eq(e) || 0 === this.x.cmp(e.x))
            return this.curve.point(null, null);
          var t = this.y.redSub(e.y);
          0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
          var r = t.redSqr().redISub(this.x).redISub(e.x),
            n = t.redMul(this.x.redSub(r)).redISub(this.y);
          return this.curve.point(r, n);
        }),
        (A.prototype.dbl = function () {
          if (this.inf) return this;
          var e = this.y.redAdd(this.y);
          if (0 === e.cmpn(0)) return this.curve.point(null, null);
          var t = this.curve.a,
            r = this.x.redSqr(),
            n = e.redInvm(),
            i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),
            o = i.redSqr().redISub(this.x.redAdd(this.x)),
            s = i.redMul(this.x.redSub(o)).redISub(this.y);
          return this.curve.point(o, s);
        }),
        (A.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (A.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (A.prototype.mul = function (e) {
          return ((e = new (i())(e, 16)), this.isInfinity())
            ? this
            : this._hasDoubles(e)
            ? this.curve._fixedNafMul(this, e)
            : this.curve.endo
            ? this.curve._endoWnafMulAdd([this], [e])
            : this.curve._wnafMul(this, e);
        }),
        (A.prototype.mulAdd = function (e, t, r) {
          var n = [this, t],
            i = [e, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i)
            : this.curve._wnafMulAdd(1, n, i, 2);
        }),
        (A.prototype.jmulAdd = function (e, t, r) {
          var n = [this, t],
            i = [e, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i, !0)
            : this.curve._wnafMulAdd(1, n, i, 2, !0);
        }),
        (A.prototype.eq = function (e) {
          return (
            this === e ||
            (this.inf === e.inf &&
              (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))))
          );
        }),
        (A.prototype.neg = function (e) {
          if (this.inf) return this;
          var t = this.curve.point(this.x, this.y.redNeg());
          if (e && this.precomputed) {
            var r = this.precomputed,
              n = function (e) {
                return e.neg();
              };
            t.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) },
              doubles: r.doubles && {
                step: r.doubles.step,
                points: r.doubles.points.map(n),
              },
            };
          }
          return t;
        }),
        (A.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        y(w, g.BasePoint),
        (b.prototype.jpoint = function (e, t, r) {
          return new w(this, e, t, r);
        }),
        (w.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var e = this.z.redInvm(),
            t = e.redSqr(),
            r = this.x.redMul(t),
            n = this.y.redMul(t).redMul(e);
          return this.curve.point(r, n);
        }),
        (w.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (w.prototype.add = function (e) {
          if (this.isInfinity()) return e;
          if (e.isInfinity()) return this;
          var t = e.z.redSqr(),
            r = this.z.redSqr(),
            n = this.x.redMul(t),
            i = e.x.redMul(r),
            o = this.y.redMul(t.redMul(e.z)),
            s = e.y.redMul(r.redMul(this.z)),
            a = n.redSub(i),
            l = o.redSub(s);
          if (0 === a.cmpn(0))
            return 0 !== l.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var u = a.redSqr(),
            c = u.redMul(a),
            f = n.redMul(u),
            h = l.redSqr().redIAdd(c).redISub(f).redISub(f),
            d = l.redMul(f.redISub(h)).redISub(o.redMul(c)),
            p = this.z.redMul(e.z).redMul(a);
          return this.curve.jpoint(h, d, p);
        }),
        (w.prototype.mixedAdd = function (e) {
          if (this.isInfinity()) return e.toJ();
          if (e.isInfinity()) return this;
          var t = this.z.redSqr(),
            r = this.x,
            n = e.x.redMul(t),
            i = this.y,
            o = e.y.redMul(t).redMul(this.z),
            s = r.redSub(n),
            a = i.redSub(o);
          if (0 === s.cmpn(0))
            return 0 !== a.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var l = s.redSqr(),
            u = l.redMul(s),
            c = r.redMul(l),
            f = a.redSqr().redIAdd(u).redISub(c).redISub(c),
            h = a.redMul(c.redISub(f)).redISub(i.redMul(u)),
            d = this.z.redMul(s);
          return this.curve.jpoint(f, h, d);
        }),
        (w.prototype.dblp = function (e) {
          if (0 === e || this.isInfinity()) return this;
          if (!e) return this.dbl();
          if (this.curve.zeroA || this.curve.threeA) {
            var t,
              r = this;
            for (t = 0; t < e; t++) r = r.dbl();
            return r;
          }
          var n = this.curve.a,
            i = this.curve.tinv,
            o = this.x,
            s = this.y,
            a = this.z,
            l = a.redSqr().redSqr(),
            u = s.redAdd(s);
          for (t = 0; t < e; t++) {
            var c = o.redSqr(),
              f = u.redSqr(),
              h = f.redSqr(),
              d = c.redAdd(c).redIAdd(c).redIAdd(n.redMul(l)),
              p = o.redMul(f),
              g = d.redSqr().redISub(p.redAdd(p)),
              m = p.redISub(g),
              y = d.redMul(m);
            y = y.redIAdd(y).redISub(h);
            var v = u.redMul(a);
            t + 1 < e && (l = l.redMul(h)), (o = g), (a = v), (u = y);
          }
          return this.curve.jpoint(o, u.redMul(i), a);
        }),
        (w.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (w.prototype._zeroDbl = function () {
          if (this.zOne) {
            var e,
              t,
              r,
              n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            s = s.redIAdd(s);
            var a = n.redAdd(n).redIAdd(n),
              l = a.redSqr().redISub(s).redISub(s),
              u = o.redIAdd(o);
            (u = (u = u.redIAdd(u)).redIAdd(u)),
              (e = l),
              (t = a.redMul(s.redISub(l)).redISub(u)),
              (r = this.y.redAdd(this.y));
          } else {
            var c = this.x.redSqr(),
              f = this.y.redSqr(),
              h = f.redSqr(),
              d = this.x.redAdd(f).redSqr().redISub(c).redISub(h);
            d = d.redIAdd(d);
            var p = c.redAdd(c).redIAdd(c),
              g = p.redSqr(),
              m = h.redIAdd(h);
            (m = (m = m.redIAdd(m)).redIAdd(m)),
              (e = g.redISub(d).redISub(d)),
              (t = p.redMul(d.redISub(e)).redISub(m)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r));
          }
          return this.curve.jpoint(e, t, r);
        }),
        (w.prototype._threeDbl = function () {
          if (this.zOne) {
            var e,
              t,
              r,
              n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            s = s.redIAdd(s);
            var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
              l = a.redSqr().redISub(s).redISub(s);
            e = l;
            var u = o.redIAdd(o);
            (u = (u = u.redIAdd(u)).redIAdd(u)),
              (t = a.redMul(s.redISub(l)).redISub(u)),
              (r = this.y.redAdd(this.y));
          } else {
            var c = this.z.redSqr(),
              f = this.y.redSqr(),
              h = this.x.redMul(f),
              d = this.x.redSub(c).redMul(this.x.redAdd(c));
            d = d.redAdd(d).redIAdd(d);
            var p = h.redIAdd(h),
              g = (p = p.redIAdd(p)).redAdd(p);
            (e = d.redSqr().redISub(g)),
              (r = this.y.redAdd(this.z).redSqr().redISub(f).redISub(c));
            var m = f.redSqr();
            (m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m)),
              (t = d.redMul(p.redISub(e)).redISub(m));
          }
          return this.curve.jpoint(e, t, r);
        }),
        (w.prototype._dbl = function () {
          var e = this.curve.a,
            t = this.x,
            r = this.y,
            n = this.z,
            i = n.redSqr().redSqr(),
            o = t.redSqr(),
            s = r.redSqr(),
            a = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),
            l = t.redAdd(t),
            u = (l = l.redIAdd(l)).redMul(s),
            c = a.redSqr().redISub(u.redAdd(u)),
            f = u.redISub(c),
            h = s.redSqr();
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
          var d = a.redMul(f).redISub(h),
            p = r.redAdd(r).redMul(n);
          return this.curve.jpoint(c, d, p);
        }),
        (w.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var e = this.x.redSqr(),
            t = this.y.redSqr(),
            r = this.z.redSqr(),
            n = t.redSqr(),
            i = e.redAdd(e).redIAdd(e),
            o = i.redSqr(),
            s = this.x.redAdd(t).redSqr().redISub(e).redISub(n),
            a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(
              o
            )).redSqr(),
            l = n.redIAdd(n);
          l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
          var u = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(l),
            c = t.redMul(u);
          c = (c = c.redIAdd(c)).redIAdd(c);
          var f = this.x.redMul(a).redISub(c);
          f = (f = f.redIAdd(f)).redIAdd(f);
          var h = this.y.redMul(u.redMul(l.redISub(u)).redISub(s.redMul(a)));
          h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
          var d = this.z.redAdd(s).redSqr().redISub(r).redISub(a);
          return this.curve.jpoint(f, h, d);
        }),
        (w.prototype.mul = function (e, t) {
          return (e = new (i())(e, t)), this.curve._wnafMul(this, e);
        }),
        (w.prototype.eq = function (e) {
          if ("affine" === e.type) return this.eq(e.toJ());
          if (this === e) return !0;
          var t = this.z.redSqr(),
            r = e.z.redSqr();
          if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
          var n = t.redMul(this.z),
            i = r.redMul(e.z);
          return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0);
        }),
        (w.prototype.eqXToP = function (e) {
          var t = this.z.redSqr(),
            r = e.toRed(this.curve.red).redMul(t);
          if (0 === this.x.cmp(r)) return !0;
          for (var n = e.clone(), i = this.curve.redN.redMul(t); ; ) {
            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(i), 0 === this.x.cmp(r))) return !0;
          }
        }),
        (w.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC JPoint Infinity>"
            : "<EC JPoint x: " +
                this.x.toString(16, 2) +
                " y: " +
                this.y.toString(16, 2) +
                " z: " +
                this.z.toString(16, 2) +
                ">";
        }),
        (w.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
      var E = a(function (e, t) {
          (t.base = g), (t.short = b), (t.mont = null), (t.edwards = null);
        }),
        x = a(function (e, t) {
          var r,
            n = f.assert;
          function i(e) {
            "short" === e.type
              ? (this.curve = new E.short(e))
              : "edwards" === e.type
              ? (this.curve = new E.edwards(e))
              : (this.curve = new E.mont(e)),
              (this.g = this.curve.g),
              (this.n = this.curve.n),
              (this.hash = e.hash),
              n(this.g.validate(), "Invalid curve"),
              n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
          }
          function o(e, r) {
            Object.defineProperty(t, e, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                var n = new i(r);
                return (
                  Object.defineProperty(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                  }),
                  n
                );
              },
            });
          }
          (t.PresetCurve = i),
            o("p192", {
              type: "short",
              prime: "p192",
              p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
              b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
              n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
              hash: s().sha256,
              gRed: !1,
              g: [
                "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
                "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
              ],
            }),
            o("p224", {
              type: "short",
              prime: "p224",
              p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
              b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
              n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
              hash: s().sha256,
              gRed: !1,
              g: [
                "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
                "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
              ],
            }),
            o("p256", {
              type: "short",
              prime: null,
              p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
              a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
              b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
              n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
              hash: s().sha256,
              gRed: !1,
              g: [
                "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
                "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
              ],
            }),
            o("p384", {
              type: "short",
              prime: null,
              p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
              a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
              b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
              n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
              hash: s().sha384,
              gRed: !1,
              g: [
                "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
                "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
              ],
            }),
            o("p521", {
              type: "short",
              prime: null,
              p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
              a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
              b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
              n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
              hash: s().sha512,
              gRed: !1,
              g: [
                "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
              ],
            }),
            o("curve25519", {
              type: "mont",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "76d06",
              b: "1",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: s().sha256,
              gRed: !1,
              g: ["9"],
            }),
            o("ed25519", {
              type: "edwards",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "-1",
              c: "1",
              d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: s().sha256,
              gRed: !1,
              g: [
                "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
                "6666666666666666666666666666666666666666666666666666666666666658",
              ],
            });
          try {
            r = null.crash();
          } catch (e) {
            r = void 0;
          }
          o("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: s().sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda:
              "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [
              {
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3",
              },
              {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15",
              },
            ],
            gRed: !1,
            g: [
              "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
              "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
              r,
            ],
          });
        });
      function S(e) {
        if (!(this instanceof S)) return new S(e);
        (this.hash = e.hash),
          (this.predResist = !!e.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var t = c.toArray(e.entropy, e.entropyEnc || "hex"),
          r = c.toArray(e.nonce, e.nonceEnc || "hex"),
          n = c.toArray(e.pers, e.persEnc || "hex");
        l(
          t.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
        ),
          this._init(t, r, n);
      }
      (S.prototype._init = function (e, t, r) {
        var n = e.concat(t).concat(r);
        (this.K = Array(this.outLen / 8)), (this.V = Array(this.outLen / 8));
        for (var i = 0; i < this.V.length; i++)
          (this.K[i] = 0), (this.V[i] = 1);
        this._update(n),
          (this._reseed = 1),
          (this.reseedInterval = 281474976710656);
      }),
        (S.prototype._hmac = function () {
          return new (s().hmac)(this.hash, this.K);
        }),
        (S.prototype._update = function (e) {
          var t = this._hmac().update(this.V).update([0]);
          e && (t = t.update(e)),
            (this.K = t.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            e &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(e)
                .digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (S.prototype.reseed = function (e, t, r, n) {
          "string" != typeof t && ((n = r), (r = t), (t = null)),
            (e = c.toArray(e, t)),
            (r = c.toArray(r, n)),
            l(
              e.length >= this.minEntropy / 8,
              "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
            ),
            this._update(e.concat(r || [])),
            (this._reseed = 1);
        }),
        (S.prototype.generate = function (e, t, r, n) {
          if (this._reseed > this.reseedInterval)
            throw Error("Reseed is required");
          "string" != typeof t && ((n = r), (r = t), (t = null)),
            r && ((r = c.toArray(r, n || "hex")), this._update(r));
          for (var i = []; i.length < e; )
            (this.V = this._hmac().update(this.V).digest()),
              (i = i.concat(this.V));
          var o = i.slice(0, e);
          return this._update(r), this._reseed++, c.encode(o, t);
        });
      var P = f.assert;
      function O(e, t) {
        (this.ec = e),
          (this.priv = null),
          (this.pub = null),
          t.priv && this._importPrivate(t.priv, t.privEnc),
          t.pub && this._importPublic(t.pub, t.pubEnc);
      }
      (O.fromPublic = function (e, t, r) {
        return t instanceof O ? t : new O(e, { pub: t, pubEnc: r });
      }),
        (O.fromPrivate = function (e, t, r) {
          return t instanceof O ? t : new O(e, { priv: t, privEnc: r });
        }),
        (O.prototype.validate = function () {
          var e = this.getPublic();
          return e.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : e.validate()
            ? e.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: "Public key * N != O" }
            : { result: !1, reason: "Public key is not a point" };
        }),
        (O.prototype.getPublic = function (e, t) {
          return ("string" == typeof e && ((t = e), (e = null)),
          this.pub || (this.pub = this.ec.g.mul(this.priv)),
          t)
            ? this.pub.encode(t, e)
            : this.pub;
        }),
        (O.prototype.getPrivate = function (e) {
          return "hex" === e ? this.priv.toString(16, 2) : this.priv;
        }),
        (O.prototype._importPrivate = function (e, t) {
          (this.priv = new (i())(e, t || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (O.prototype._importPublic = function (e, t) {
          if (e.x || e.y) {
            "mont" === this.ec.curve.type
              ? P(e.x, "Need x coordinate")
              : ("short" === this.ec.curve.type ||
                  "edwards" === this.ec.curve.type) &&
                P(e.x && e.y, "Need both x and y coordinate"),
              (this.pub = this.ec.curve.point(e.x, e.y));
            return;
          }
          this.pub = this.ec.curve.decodePoint(e, t);
        }),
        (O.prototype.derive = function (e) {
          return (
            e.validate() || P(e.validate(), "public point not validated"),
            e.mul(this.priv).getX()
          );
        }),
        (O.prototype.sign = function (e, t, r) {
          return this.ec.sign(e, this, t, r);
        }),
        (O.prototype.verify = function (e, t) {
          return this.ec.verify(e, t, this);
        }),
        (O.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        });
      var k = f.assert;
      function _(e, t) {
        if (e instanceof _) return e;
        this._importDER(e, t) ||
          (k(e.r && e.s, "Signature without r or s"),
          (this.r = new (i())(e.r, 16)),
          (this.s = new (i())(e.s, 16)),
          void 0 === e.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = e.recoveryParam));
      }
      function C() {
        this.place = 0;
      }
      function N(e, t) {
        var r = e[t.place++];
        if (!(128 & r)) return r;
        var n = 15 & r;
        if (0 === n || n > 4) return !1;
        for (var i = 0, o = 0, s = t.place; o < n; o++, s++)
          (i <<= 8), (i |= e[s]), (i >>>= 0);
        return !(i <= 127) && ((t.place = s), i);
      }
      function R(e) {
        for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r; )
          t++;
        return 0 === t ? e : e.slice(t);
      }
      function T(e, t) {
        if (t < 128) {
          e.push(t);
          return;
        }
        var r = 1 + ((Math.log(t) / Math.LN2) >>> 3);
        for (e.push(128 | r); --r; ) e.push((t >>> (r << 3)) & 255);
        e.push(t);
      }
      (_.prototype._importDER = function (e, t) {
        e = f.toArray(e, t);
        var r = new C();
        if (48 !== e[r.place++]) return !1;
        var n = N(e, r);
        if (!1 === n || n + r.place !== e.length || 2 !== e[r.place++])
          return !1;
        var o = N(e, r);
        if (!1 === o) return !1;
        var s = e.slice(r.place, o + r.place);
        if (((r.place += o), 2 !== e[r.place++])) return !1;
        var a = N(e, r);
        if (!1 === a || e.length !== a + r.place) return !1;
        var l = e.slice(r.place, a + r.place);
        if (0 === s[0]) {
          if (!(128 & s[1])) return !1;
          s = s.slice(1);
        }
        if (0 === l[0]) {
          if (!(128 & l[1])) return !1;
          l = l.slice(1);
        }
        return (
          (this.r = new (i())(s)),
          (this.s = new (i())(l)),
          (this.recoveryParam = null),
          !0
        );
      }),
        (_.prototype.toDER = function (e) {
          var t = this.r.toArray(),
            r = this.s.toArray();
          for (
            128 & t[0] && (t = [0].concat(t)),
              128 & r[0] && (r = [0].concat(r)),
              t = R(t),
              r = R(r);
            !r[0] && !(128 & r[1]);

          )
            r = r.slice(1);
          var n = [2];
          T(n, t.length), (n = n.concat(t)).push(2), T(n, r.length);
          var i = n.concat(r),
            o = [48];
          return T(o, i.length), (o = o.concat(i)), f.encode(o, e);
        });
      var I = function () {
          throw Error("unsupported");
        },
        B = f.assert;
      function L(e) {
        if (!(this instanceof L)) return new L(e);
        "string" == typeof e &&
          (B(Object.prototype.hasOwnProperty.call(x, e), "Unknown curve " + e),
          (e = x[e])),
          e instanceof x.PresetCurve && (e = { curve: e }),
          (this.curve = e.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = e.curve.g),
          this.g.precompute(e.curve.n.bitLength() + 1),
          (this.hash = e.hash || e.curve.hash);
      }
      (L.prototype.keyPair = function (e) {
        return new O(this, e);
      }),
        (L.prototype.keyFromPrivate = function (e, t) {
          return O.fromPrivate(this, e, t);
        }),
        (L.prototype.keyFromPublic = function (e, t) {
          return O.fromPublic(this, e, t);
        }),
        (L.prototype.genKeyPair = function (e) {
          e || (e = {});
          for (
            var t = new S({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || "utf8",
                entropy: e.entropy || I(this.hash.hmacStrength),
                entropyEnc: (e.entropy && e.entropyEnc) || "utf8",
                nonce: this.n.toArray(),
              }),
              r = this.n.byteLength(),
              n = this.n.sub(new (i())(2));
            ;

          ) {
            var o = new (i())(t.generate(r));
            if (!(o.cmp(n) > 0)) return o.iaddn(1), this.keyFromPrivate(o);
          }
        }),
        (L.prototype._truncateToN = function (e, t) {
          var r = 8 * e.byteLength() - this.n.bitLength();
          return (r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0)
            ? e.sub(this.n)
            : e;
        }),
        (L.prototype.sign = function (e, t, r, n) {
          "object" == typeof r && ((n = r), (r = null)),
            n || (n = {}),
            (t = this.keyFromPrivate(t, r)),
            (e = this._truncateToN(new (i())(e, 16)));
          for (
            var o = this.n.byteLength(),
              s = t.getPrivate().toArray("be", o),
              a = e.toArray("be", o),
              l = new S({
                hash: this.hash,
                entropy: s,
                nonce: a,
                pers: n.pers,
                persEnc: n.persEnc || "utf8",
              }),
              u = this.n.sub(new (i())(1)),
              c = 0;
            ;
            c++
          ) {
            var f = n.k ? n.k(c) : new (i())(l.generate(this.n.byteLength()));
            if (
              !(0 >= (f = this._truncateToN(f, !0)).cmpn(1) || f.cmp(u) >= 0)
            ) {
              var h = this.g.mul(f);
              if (!h.isInfinity()) {
                var d = h.getX(),
                  p = d.umod(this.n);
                if (0 !== p.cmpn(0)) {
                  var g = f.invm(this.n).mul(p.mul(t.getPrivate()).iadd(e));
                  if (0 !== (g = g.umod(this.n)).cmpn(0)) {
                    var m =
                      (h.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(p) ? 2 : 0);
                    return (
                      n.canonical &&
                        g.cmp(this.nh) > 0 &&
                        ((g = this.n.sub(g)), (m ^= 1)),
                      new _({ r: p, s: g, recoveryParam: m })
                    );
                  }
                }
              }
            }
          }
        }),
        (L.prototype.verify = function (e, t, r, n) {
          (e = this._truncateToN(new (i())(e, 16))),
            (r = this.keyFromPublic(r, n));
          var o,
            s = (t = new _(t, "hex")).r,
            a = t.s;
          if (
            0 > s.cmpn(1) ||
            s.cmp(this.n) >= 0 ||
            0 > a.cmpn(1) ||
            a.cmp(this.n) >= 0
          )
            return !1;
          var l = a.invm(this.n),
            u = l.mul(e).umod(this.n),
            c = l.mul(s).umod(this.n);
          return this.curve._maxwellTrick
            ? !(o = this.g.jmulAdd(u, r.getPublic(), c)).isInfinity() &&
                o.eqXToP(s)
            : !(o = this.g.mulAdd(u, r.getPublic(), c)).isInfinity() &&
                0 === o.getX().umod(this.n).cmp(s);
        }),
        (L.prototype.recoverPubKey = function (e, t, r, n) {
          B((3 & r) === r, "The recovery param is more than two bits"),
            (t = new _(t, n));
          var o = this.n,
            s = new (i())(e),
            a = t.r,
            l = t.s,
            u = 1 & r,
            c = r >> 1;
          if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && c)
            throw Error("Unable to find sencond key candinate");
          a = c
            ? this.curve.pointFromX(a.add(this.curve.n), u)
            : this.curve.pointFromX(a, u);
          var f = t.r.invm(o),
            h = o.sub(s).mul(f).umod(o),
            d = l.mul(f).umod(o);
          return this.g.mulAdd(h, a, d);
        }),
        (L.prototype.getKeyRecoveryParam = function (e, t, r, n) {
          if (null !== (t = new _(t, n)).recoveryParam) return t.recoveryParam;
          for (var i, o = 0; o < 4; o++) {
            try {
              i = this.recoverPubKey(e, t, o);
            } catch (e) {
              continue;
            }
            if (i.eq(r)) return o;
          }
          throw Error("Unable to find valid recovery factor");
        });
      var F = a(function (e, t) {
          (t.version = "6.5.4"),
            (t.utils = f),
            (t.rand = function () {
              throw Error("unsupported");
            }),
            (t.curve = E),
            (t.curves = x),
            (t.ec = L),
            (t.eddsa = null);
        }).ec,
        D = r(7730),
        M = r(50357);
      let U = new (r(67214).Logger)("signing-key/5.7.0"),
        j = null;
      function z() {
        return j || (j = new F("secp256k1")), j;
      }
      class H {
        constructor(e) {
          (0, M.defineReadOnly)(this, "curve", "secp256k1"),
            (0, M.defineReadOnly)(this, "privateKey", (0, D.hexlify)(e)),
            32 !== (0, D.hexDataLength)(this.privateKey) &&
              U.throwArgumentError(
                "invalid private key",
                "privateKey",
                "[[ REDACTED ]]"
              );
          let t = z().keyFromPrivate((0, D.arrayify)(this.privateKey));
          (0, M.defineReadOnly)(
            this,
            "publicKey",
            "0x" + t.getPublic(!1, "hex")
          ),
            (0, M.defineReadOnly)(
              this,
              "compressedPublicKey",
              "0x" + t.getPublic(!0, "hex")
            ),
            (0, M.defineReadOnly)(this, "_isSigningKey", !0);
        }
        _addPoint(e) {
          let t = z().keyFromPublic((0, D.arrayify)(this.publicKey)),
            r = z().keyFromPublic((0, D.arrayify)(e));
          return "0x" + t.pub.add(r.pub).encodeCompressed("hex");
        }
        signDigest(e) {
          let t = z().keyFromPrivate((0, D.arrayify)(this.privateKey)),
            r = (0, D.arrayify)(e);
          32 !== r.length &&
            U.throwArgumentError("bad digest length", "digest", e);
          let n = t.sign(r, { canonical: !0 });
          return (0, D.splitSignature)({
            recoveryParam: n.recoveryParam,
            r: (0, D.hexZeroPad)("0x" + n.r.toString(16), 32),
            s: (0, D.hexZeroPad)("0x" + n.s.toString(16), 32),
          });
        }
        computeSharedSecret(e) {
          let t = z().keyFromPrivate((0, D.arrayify)(this.privateKey)),
            r = z().keyFromPublic((0, D.arrayify)(K(e)));
          return (0, D.hexZeroPad)(
            "0x" + t.derive(r.getPublic()).toString(16),
            32
          );
        }
        static isSigningKey(e) {
          return !!(e && e._isSigningKey);
        }
      }
      function G(e, t) {
        let r = (0, D.splitSignature)(t),
          n = { r: (0, D.arrayify)(r.r), s: (0, D.arrayify)(r.s) };
        return (
          "0x" +
          z()
            .recoverPubKey((0, D.arrayify)(e), n, r.recoveryParam)
            .encode("hex", !1)
        );
      }
      function K(e, t) {
        let r = (0, D.arrayify)(e);
        if (32 === r.length) {
          let e = new H(r);
          return t
            ? "0x" + z().keyFromPrivate(r).getPublic(!0, "hex")
            : e.publicKey;
        }
        return 33 === r.length
          ? t
            ? (0, D.hexlify)(r)
            : "0x" + z().keyFromPublic(r).getPublic(!1, "hex")
          : 65 === r.length
          ? t
            ? "0x" + z().keyFromPublic(r).getPublic(!0, "hex")
            : (0, D.hexlify)(r)
          : U.throwArgumentError(
              "invalid public or private key",
              "key",
              "[REDACTED]"
            );
      }
    },
    17295: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          keccak256: function () {
            return p;
          },
          pack: function () {
            return d;
          },
          sha256: function () {
            return g;
          },
        });
      var n = r(30466),
        i = r(7730),
        o = r(14752),
        s = r(53319),
        a = r(35321),
        l = r(67214);
      let u = RegExp("^bytes([0-9]+)$"),
        c = RegExp("^(u?int)([0-9]*)$"),
        f = RegExp("^(.*)\\[([0-9]*)\\]$"),
        h = new l.Logger("solidity/5.7.0");
      function d(e, t) {
        e.length != t.length &&
          h.throwArgumentError(
            "wrong number of values; expected ${ types.length }",
            "values",
            t
          );
        let r = [];
        return (
          e.forEach(function (e, o) {
            r.push(
              (function e(t, r, o) {
                switch (t) {
                  case "address":
                    if (o) return (0, i.zeroPad)(r, 32);
                    return (0, i.arrayify)(r);
                  case "string":
                    return (0, a.Y0)(r);
                  case "bytes":
                    return (0, i.arrayify)(r);
                  case "bool":
                    if (((r = r ? "0x01" : "0x00"), o))
                      return (0, i.zeroPad)(r, 32);
                    return (0, i.arrayify)(r);
                }
                let s = t.match(c);
                if (s) {
                  let e = parseInt(s[2] || "256");
                  return (
                    ((s[2] && String(e) !== s[2]) ||
                      e % 8 != 0 ||
                      0 === e ||
                      e > 256) &&
                      h.throwArgumentError("invalid number type", "type", t),
                    o && (e = 256),
                    (r = n.O$.from(r).toTwos(e)),
                    (0, i.zeroPad)(r, e / 8)
                  );
                }
                if ((s = t.match(u))) {
                  let e = parseInt(s[1]);
                  return ((String(e) !== s[1] || 0 === e || e > 32) &&
                    h.throwArgumentError("invalid bytes type", "type", t),
                  (0, i.arrayify)(r).byteLength !== e &&
                    h.throwArgumentError(`invalid value for ${t}`, "value", r),
                  o)
                    ? (0, i.arrayify)(
                        (
                          r +
                          "0000000000000000000000000000000000000000000000000000000000000000"
                        ).substring(0, 66)
                      )
                    : r;
                }
                if ((s = t.match(f)) && Array.isArray(r)) {
                  let n = s[1];
                  parseInt(s[2] || String(r.length)) != r.length &&
                    h.throwArgumentError(
                      `invalid array length for ${t}`,
                      "value",
                      r
                    );
                  let o = [];
                  return (
                    r.forEach(function (t) {
                      o.push(e(n, t, !0));
                    }),
                    (0, i.concat)(o)
                  );
                }
                return h.throwArgumentError("invalid type", "type", t);
              })(e, t[o])
            );
          }),
          (0, i.hexlify)((0, i.concat)(r))
        );
      }
      function p(e, t) {
        return (0, o.keccak256)(d(e, t));
      }
      function g(e, t) {
        return (0, s.JQ)(d(e, t));
      }
    },
    93203: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          UnicodeNormalizationForm: function () {
            return o.Uj;
          },
          Utf8ErrorFuncs: function () {
            return o.te;
          },
          Utf8ErrorReason: function () {
            return o.Uw;
          },
          _toEscapedUtf8String: function () {
            return o.U$;
          },
          formatBytes32String: function () {
            return s;
          },
          nameprep: function () {
            return v;
          },
          parseBytes32String: function () {
            return a;
          },
          toUtf8Bytes: function () {
            return o.Y0;
          },
          toUtf8CodePoints: function () {
            return o.XL;
          },
          toUtf8String: function () {
            return o.ZN;
          },
        });
      var n = r(86392),
        i = r(7730),
        o = r(35321);
      function s(e) {
        let t = (0, o.Y0)(e);
        if (t.length > 31)
          throw Error("bytes32 string must be less than 32 bytes");
        return (0, i.hexlify)((0, i.concat)([t, n.R]).slice(0, 32));
      }
      function a(e) {
        let t = (0, i.arrayify)(e);
        if (32 !== t.length) throw Error("invalid bytes32 - not 32 bytes long");
        if (0 !== t[31])
          throw Error("invalid bytes32 string - no null terminator");
        let r = 31;
        for (; 0 === t[r - 1]; ) r--;
        return (0, o.ZN)(t.slice(0, r));
      }
      function l(e, t) {
        t ||
          (t = function (e) {
            return [parseInt(e, 16)];
          });
        let r = 0,
          n = {};
        return (
          e.split(",").forEach((e) => {
            let i = e.split(":");
            n[(r += parseInt(i[0], 16))] = t(i[1]);
          }),
          n
        );
      }
      function u(e) {
        let t = 0;
        return e.split(",").map((e) => {
          let r = e.split("-");
          return (
            1 === r.length ? (r[1] = "0") : "" === r[1] && (r[1] = "1"),
            { l: t + parseInt(r[0], 16), h: (t = parseInt(r[1], 16)) }
          );
        });
      }
      function c(e, t) {
        let r = 0;
        for (let n = 0; n < t.length; n++) {
          let i = t[n];
          if (e >= (r += i.l) && e <= r + i.h && (e - r) % (i.d || 1) == 0) {
            if (i.e && -1 !== i.e.indexOf(e - r)) continue;
            return i;
          }
        }
        return null;
      }
      let f = u(
          "221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"
        ),
        h = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff"
          .split(",")
          .map((e) => parseInt(e, 16)),
        d = [
          { h: 25, s: 32, l: 65 },
          { h: 30, s: 32, e: [23], l: 127 },
          { h: 54, s: 1, e: [48], l: 64, d: 2 },
          { h: 14, s: 1, l: 57, d: 2 },
          { h: 44, s: 1, l: 17, d: 2 },
          { h: 10, s: 1, e: [2, 6, 8], l: 61, d: 2 },
          { h: 16, s: 1, l: 68, d: 2 },
          { h: 84, s: 1, e: [18, 24, 66], l: 19, d: 2 },
          { h: 26, s: 32, e: [17], l: 435 },
          { h: 22, s: 1, l: 71, d: 2 },
          { h: 15, s: 80, l: 40 },
          { h: 31, s: 32, l: 16 },
          { h: 32, s: 1, l: 80, d: 2 },
          { h: 52, s: 1, l: 42, d: 2 },
          { h: 12, s: 1, l: 55, d: 2 },
          { h: 40, s: 1, e: [38], l: 15, d: 2 },
          { h: 14, s: 1, l: 48, d: 2 },
          { h: 37, s: 48, l: 49 },
          { h: 148, s: 1, l: 6351, d: 2 },
          { h: 88, s: 1, l: 160, d: 2 },
          { h: 15, s: 16, l: 704 },
          { h: 25, s: 26, l: 854 },
          { h: 25, s: 32, l: 55915 },
          { h: 37, s: 40, l: 1247 },
          { h: 25, s: -119711, l: 53248 },
          { h: 25, s: -119763, l: 52 },
          { h: 25, s: -119815, l: 52 },
          { h: 25, s: -119867, e: [1, 4, 5, 7, 8, 11, 12, 17], l: 52 },
          { h: 25, s: -119919, l: 52 },
          { h: 24, s: -119971, e: [2, 7, 8, 17], l: 52 },
          { h: 24, s: -120023, e: [2, 7, 13, 15, 16, 17], l: 52 },
          { h: 25, s: -120075, l: 52 },
          { h: 25, s: -120127, l: 52 },
          { h: 25, s: -120179, l: 52 },
          { h: 25, s: -120231, l: 52 },
          { h: 25, s: -120283, l: 52 },
          { h: 25, s: -120335, l: 52 },
          { h: 24, s: -119543, e: [17], l: 56 },
          { h: 24, s: -119601, e: [17], l: 58 },
          { h: 24, s: -119659, e: [17], l: 58 },
          { h: 24, s: -119717, e: [17], l: 58 },
          { h: 24, s: -119775, e: [17], l: 58 },
        ],
        p = l(
          "b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"
        ),
        g = l(
          "179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"
        ),
        m = l(
          "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
          function (e) {
            if (e.length % 4 != 0) throw Error("bad data");
            let t = [];
            for (let r = 0; r < e.length; r += 4)
              t.push(parseInt(e.substring(r, r + 4), 16));
            return t;
          }
        ),
        y = u(
          "80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001"
        );
      function v(e) {
        if (e.match(/^[a-z0-9-]*$/i) && e.length <= 59) return e.toLowerCase();
        let t = (0, o.XL)(e);
        (t = t
          .map((e) =>
            h.indexOf(e) >= 0 || (e >= 65024 && e <= 65039)
              ? []
              : (function (e) {
                  let t = c(e, d);
                  if (t) return [e + t.s];
                  let r = p[e];
                  if (r) return r;
                  let n = g[e];
                  return n ? [e + n[0]] : m[e] || null;
                })(e) || [e]
          )
          .reduce(
            (e, t) => (
              t.forEach((t) => {
                e.push(t);
              }),
              e
            ),
            []
          )),
          (t = (0, o.XL)((0, o.uu)(t), o.Uj.NFKC)).forEach((e) => {
            if (c(e, y)) throw Error("STRINGPREP_CONTAINS_PROHIBITED");
          }),
          t.forEach((e) => {
            if (c(e, f)) throw Error("STRINGPREP_CONTAINS_UNASSIGNED");
          });
        let r = (0, o.uu)(t);
        if (
          "-" === r.substring(0, 1) ||
          "--" === r.substring(2, 4) ||
          "-" === r.substring(r.length - 1)
        )
          throw Error("invalid hyphen");
        return r;
      }
    },
    35321: function (e, t, r) {
      "use strict";
      r.d(t, {
        Uj: function () {
          return o;
        },
        te: function () {
          return c;
        },
        Uw: function () {
          return s;
        },
        U$: function () {
          return p;
        },
        uu: function () {
          return g;
        },
        Y0: function () {
          return h;
        },
        XL: function () {
          return y;
        },
        ZN: function () {
          return m;
        },
      });
      var n,
        i,
        o,
        s,
        a = r(7730);
      let l = new (r(67214).Logger)("strings/5.7.0");
      function u(e, t, r, n, i) {
        if (e === s.BAD_PREFIX || e === s.UNEXPECTED_CONTINUE) {
          let e = 0;
          for (let n = t + 1; n < r.length && r[n] >> 6 == 2; n++) e++;
          return e;
        }
        return e === s.OVERRUN ? r.length - t - 1 : 0;
      }
      ((n = o || (o = {})).current = ""),
        (n.NFC = "NFC"),
        (n.NFD = "NFD"),
        (n.NFKC = "NFKC"),
        (n.NFKD = "NFKD"),
        ((i = s || (s = {})).UNEXPECTED_CONTINUE =
          "unexpected continuation byte"),
        (i.BAD_PREFIX = "bad codepoint prefix"),
        (i.OVERRUN = "string overrun"),
        (i.MISSING_CONTINUE = "missing continuation byte"),
        (i.OUT_OF_RANGE = "out of UTF-8 range"),
        (i.UTF16_SURROGATE = "UTF-16 surrogate"),
        (i.OVERLONG = "overlong representation");
      let c = Object.freeze({
        error: function (e, t, r, n, i) {
          return l.throwArgumentError(
            `invalid codepoint at offset ${t}; ${e}`,
            "bytes",
            r
          );
        },
        ignore: u,
        replace: function (e, t, r, n, i) {
          return e === s.OVERLONG
            ? (n.push(i), 0)
            : (n.push(65533), u(e, t, r, n, i));
        },
      });
      function f(e, t) {
        null == t && (t = c.error), (e = (0, a.arrayify)(e));
        let r = [],
          n = 0;
        for (; n < e.length; ) {
          let i = e[n++];
          if (i >> 7 == 0) {
            r.push(i);
            continue;
          }
          let o = null,
            a = null;
          if ((224 & i) == 192) (o = 1), (a = 127);
          else if ((240 & i) == 224) (o = 2), (a = 2047);
          else if ((248 & i) == 240) (o = 3), (a = 65535);
          else {
            (192 & i) == 128
              ? (n += t(s.UNEXPECTED_CONTINUE, n - 1, e, r))
              : (n += t(s.BAD_PREFIX, n - 1, e, r));
            continue;
          }
          if (n - 1 + o >= e.length) {
            n += t(s.OVERRUN, n - 1, e, r);
            continue;
          }
          let l = i & ((1 << (8 - o - 1)) - 1);
          for (let i = 0; i < o; i++) {
            let i = e[n];
            if ((192 & i) != 128) {
              (n += t(s.MISSING_CONTINUE, n, e, r)), (l = null);
              break;
            }
            (l = (l << 6) | (63 & i)), n++;
          }
          if (null !== l) {
            if (l > 1114111) {
              n += t(s.OUT_OF_RANGE, n - 1 - o, e, r, l);
              continue;
            }
            if (l >= 55296 && l <= 57343) {
              n += t(s.UTF16_SURROGATE, n - 1 - o, e, r, l);
              continue;
            }
            if (l <= a) {
              n += t(s.OVERLONG, n - 1 - o, e, r, l);
              continue;
            }
            r.push(l);
          }
        }
        return r;
      }
      function h(e, t = o.current) {
        t != o.current && (l.checkNormalize(), (e = e.normalize(t)));
        let r = [];
        for (let t = 0; t < e.length; t++) {
          let n = e.charCodeAt(t);
          if (n < 128) r.push(n);
          else if (n < 2048) r.push((n >> 6) | 192), r.push((63 & n) | 128);
          else if ((64512 & n) == 55296) {
            t++;
            let i = e.charCodeAt(t);
            if (t >= e.length || (64512 & i) != 56320)
              throw Error("invalid utf-8 string");
            let o = 65536 + ((1023 & n) << 10) + (1023 & i);
            r.push((o >> 18) | 240),
              r.push(((o >> 12) & 63) | 128),
              r.push(((o >> 6) & 63) | 128),
              r.push((63 & o) | 128);
          } else
            r.push((n >> 12) | 224),
              r.push(((n >> 6) & 63) | 128),
              r.push((63 & n) | 128);
        }
        return (0, a.arrayify)(r);
      }
      function d(e) {
        let t = "0000" + e.toString(16);
        return "\\u" + t.substring(t.length - 4);
      }
      function p(e, t) {
        return (
          '"' +
          f(e, t)
            .map((e) => {
              if (e < 256) {
                switch (e) {
                  case 8:
                    return "\\b";
                  case 9:
                    return "\\t";
                  case 10:
                    return "\\n";
                  case 13:
                    return "\\r";
                  case 34:
                    return '\\"';
                  case 92:
                    return "\\\\";
                }
                if (e >= 32 && e < 127) return String.fromCharCode(e);
              }
              return e <= 65535
                ? d(e)
                : d((((e -= 65536) >> 10) & 1023) + 55296) +
                    d((1023 & e) + 56320);
            })
            .join("") +
          '"'
        );
      }
      function g(e) {
        return e
          .map((e) =>
            e <= 65535
              ? String.fromCharCode(e)
              : String.fromCharCode(
                  (((e -= 65536) >> 10) & 1023) + 55296,
                  (1023 & e) + 56320
                )
          )
          .join("");
      }
      function m(e, t) {
        return g(f(e, t));
      }
      function y(e, t = o.current) {
        return f(h(e, t));
      }
    },
    11913: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          TransactionTypes: function () {
            return i;
          },
          accessListify: function () {
            return x;
          },
          computeAddress: function () {
            return b;
          },
          parse: function () {
            return C;
          },
          recoverAddress: function () {
            return A;
          },
          serialize: function () {
            return k;
          },
        });
      var n,
        i,
        o = r(56805),
        s = r(30466),
        a = r(7730),
        l = r(73890),
        u = r(14752),
        c = r(50357),
        f = r(2585),
        h = r(65653),
        d = r(67214);
      let p = new d.Logger("transactions/5.7.0");
      function g(e) {
        return "0x" === e ? null : (0, o.getAddress)(e);
      }
      function m(e) {
        return "0x" === e ? l._Y : s.O$.from(e);
      }
      ((n = i || (i = {}))[(n.legacy = 0)] = "legacy"),
        (n[(n.eip2930 = 1)] = "eip2930"),
        (n[(n.eip1559 = 2)] = "eip1559");
      let y = [
          { name: "nonce", maxLength: 32, numeric: !0 },
          { name: "gasPrice", maxLength: 32, numeric: !0 },
          { name: "gasLimit", maxLength: 32, numeric: !0 },
          { name: "to", length: 20 },
          { name: "value", maxLength: 32, numeric: !0 },
          { name: "data" },
        ],
        v = {
          chainId: !0,
          data: !0,
          gasLimit: !0,
          gasPrice: !0,
          nonce: !0,
          to: !0,
          type: !0,
          value: !0,
        };
      function b(e) {
        let t = (0, h.computePublicKey)(e);
        return (0, o.getAddress)(
          (0, a.hexDataSlice)((0, u.keccak256)((0, a.hexDataSlice)(t, 1)), 12)
        );
      }
      function A(e, t) {
        return b((0, h.recoverPublicKey)((0, a.arrayify)(e), t));
      }
      function w(e, t) {
        let r = (0, a.stripZeros)(s.O$.from(e).toHexString());
        return (
          r.length > 32 &&
            p.throwArgumentError(
              "invalid length for " + t,
              "transaction:" + t,
              e
            ),
          r
        );
      }
      function E(e, t) {
        return {
          address: (0, o.getAddress)(e),
          storageKeys: (t || []).map(
            (t, r) => (
              32 !== (0, a.hexDataLength)(t) &&
                p.throwArgumentError(
                  "invalid access list storageKey",
                  `accessList[${e}:${r}]`,
                  t
                ),
              t.toLowerCase()
            )
          ),
        };
      }
      function x(e) {
        if (Array.isArray(e))
          return e.map((e, t) =>
            Array.isArray(e)
              ? (e.length > 2 &&
                  p.throwArgumentError(
                    "access list expected to be [ address, storageKeys[] ]",
                    `value[${t}]`,
                    e
                  ),
                E(e[0], e[1]))
              : E(e.address, e.storageKeys)
          );
        let t = Object.keys(e).map((t) => {
          let r = e[t].reduce((e, t) => ((e[t] = !0), e), {});
          return E(t, Object.keys(r).sort());
        });
        return t.sort((e, t) => e.address.localeCompare(t.address)), t;
      }
      function S(e) {
        return x(e).map((e) => [e.address, e.storageKeys]);
      }
      function P(e, t) {
        if (null != e.gasPrice) {
          let t = s.O$.from(e.gasPrice),
            r = s.O$.from(e.maxFeePerGas || 0);
          t.eq(r) ||
            p.throwArgumentError(
              "mismatch EIP-1559 gasPrice != maxFeePerGas",
              "tx",
              { gasPrice: t, maxFeePerGas: r }
            );
        }
        let r = [
          w(e.chainId || 0, "chainId"),
          w(e.nonce || 0, "nonce"),
          w(e.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
          w(e.maxFeePerGas || 0, "maxFeePerGas"),
          w(e.gasLimit || 0, "gasLimit"),
          null != e.to ? (0, o.getAddress)(e.to) : "0x",
          w(e.value || 0, "value"),
          e.data || "0x",
          S(e.accessList || []),
        ];
        if (t) {
          let e = (0, a.splitSignature)(t);
          r.push(w(e.recoveryParam, "recoveryParam")),
            r.push((0, a.stripZeros)(e.r)),
            r.push((0, a.stripZeros)(e.s));
        }
        return (0, a.hexConcat)(["0x02", f.encode(r)]);
      }
      function O(e, t) {
        let r = [
          w(e.chainId || 0, "chainId"),
          w(e.nonce || 0, "nonce"),
          w(e.gasPrice || 0, "gasPrice"),
          w(e.gasLimit || 0, "gasLimit"),
          null != e.to ? (0, o.getAddress)(e.to) : "0x",
          w(e.value || 0, "value"),
          e.data || "0x",
          S(e.accessList || []),
        ];
        if (t) {
          let e = (0, a.splitSignature)(t);
          r.push(w(e.recoveryParam, "recoveryParam")),
            r.push((0, a.stripZeros)(e.r)),
            r.push((0, a.stripZeros)(e.s));
        }
        return (0, a.hexConcat)(["0x01", f.encode(r)]);
      }
      function k(e, t) {
        if (null == e.type || 0 === e.type)
          return (
            null != e.accessList &&
              p.throwArgumentError(
                "untyped transactions do not support accessList; include type: 1",
                "transaction",
                e
              ),
            (function (e, t) {
              (0, c.checkProperties)(e, v);
              let r = [];
              y.forEach(function (t) {
                let n = e[t.name] || [],
                  i = {};
                t.numeric && (i.hexPad = "left"),
                  (n = (0, a.arrayify)((0, a.hexlify)(n, i))),
                  t.length &&
                    n.length !== t.length &&
                    n.length > 0 &&
                    p.throwArgumentError(
                      "invalid length for " + t.name,
                      "transaction:" + t.name,
                      n
                    ),
                  t.maxLength &&
                    (n = (0, a.stripZeros)(n)).length > t.maxLength &&
                    p.throwArgumentError(
                      "invalid length for " + t.name,
                      "transaction:" + t.name,
                      n
                    ),
                  r.push((0, a.hexlify)(n));
              });
              let n = 0;
              if (
                (null != e.chainId
                  ? "number" != typeof (n = e.chainId) &&
                    p.throwArgumentError(
                      "invalid transaction.chainId",
                      "transaction",
                      e
                    )
                  : t &&
                    !(0, a.isBytesLike)(t) &&
                    t.v > 28 &&
                    (n = Math.floor((t.v - 35) / 2)),
                0 !== n &&
                  (r.push((0, a.hexlify)(n)), r.push("0x"), r.push("0x")),
                !t)
              )
                return f.encode(r);
              let i = (0, a.splitSignature)(t),
                o = 27 + i.recoveryParam;
              return (
                0 !== n
                  ? (r.pop(),
                    r.pop(),
                    r.pop(),
                    (o += 2 * n + 8),
                    i.v > 28 &&
                      i.v !== o &&
                      p.throwArgumentError(
                        "transaction.chainId/signature.v mismatch",
                        "signature",
                        t
                      ))
                  : i.v !== o &&
                    p.throwArgumentError(
                      "transaction.chainId/signature.v mismatch",
                      "signature",
                      t
                    ),
                r.push((0, a.hexlify)(o)),
                r.push((0, a.stripZeros)((0, a.arrayify)(i.r))),
                r.push((0, a.stripZeros)((0, a.arrayify)(i.s))),
                f.encode(r)
              );
            })(e, t)
          );
        switch (e.type) {
          case 1:
            return O(e, t);
          case 2:
            return P(e, t);
        }
        return p.throwError(
          `unsupported transaction type: ${e.type}`,
          d.Logger.errors.UNSUPPORTED_OPERATION,
          { operation: "serializeTransaction", transactionType: e.type }
        );
      }
      function _(e, t, r) {
        try {
          let r = m(t[0]).toNumber();
          if (0 !== r && 1 !== r) throw Error("bad recid");
          e.v = r;
        } catch (e) {
          p.throwArgumentError("invalid v for transaction type: 1", "v", t[0]);
        }
        (e.r = (0, a.hexZeroPad)(t[1], 32)),
          (e.s = (0, a.hexZeroPad)(t[2], 32));
        try {
          let t = (0, u.keccak256)(r(e));
          e.from = A(t, { r: e.r, s: e.s, recoveryParam: e.v });
        } catch (e) {}
      }
      function C(e) {
        let t = (0, a.arrayify)(e);
        if (t[0] > 127)
          return (function (e) {
            let t = f.decode(e);
            9 !== t.length &&
              6 !== t.length &&
              p.throwArgumentError(
                "invalid raw transaction",
                "rawTransaction",
                e
              );
            let r = {
              nonce: m(t[0]).toNumber(),
              gasPrice: m(t[1]),
              gasLimit: m(t[2]),
              to: g(t[3]),
              value: m(t[4]),
              data: t[5],
              chainId: 0,
            };
            if (6 === t.length) return r;
            try {
              r.v = s.O$.from(t[6]).toNumber();
            } catch (e) {
              return r;
            }
            if (
              ((r.r = (0, a.hexZeroPad)(t[7], 32)),
              (r.s = (0, a.hexZeroPad)(t[8], 32)),
              s.O$.from(r.r).isZero() && s.O$.from(r.s).isZero())
            )
              (r.chainId = r.v), (r.v = 0);
            else {
              (r.chainId = Math.floor((r.v - 35) / 2)),
                r.chainId < 0 && (r.chainId = 0);
              let n = r.v - 27,
                i = t.slice(0, 6);
              0 !== r.chainId &&
                (i.push((0, a.hexlify)(r.chainId)),
                i.push("0x"),
                i.push("0x"),
                (n -= 2 * r.chainId + 8));
              let o = (0, u.keccak256)(f.encode(i));
              try {
                r.from = A(o, {
                  r: (0, a.hexlify)(r.r),
                  s: (0, a.hexlify)(r.s),
                  recoveryParam: n,
                });
              } catch (e) {}
              r.hash = (0, u.keccak256)(e);
            }
            return (r.type = null), r;
          })(t);
        switch (t[0]) {
          case 1:
            return (function (e) {
              let t = f.decode(e.slice(1));
              8 !== t.length &&
                11 !== t.length &&
                p.throwArgumentError(
                  "invalid component count for transaction type: 1",
                  "payload",
                  (0, a.hexlify)(e)
                );
              let r = {
                type: 1,
                chainId: m(t[0]).toNumber(),
                nonce: m(t[1]).toNumber(),
                gasPrice: m(t[2]),
                gasLimit: m(t[3]),
                to: g(t[4]),
                value: m(t[5]),
                data: t[6],
                accessList: x(t[7]),
              };
              return (
                8 === t.length ||
                  ((r.hash = (0, u.keccak256)(e)), _(r, t.slice(8), O)),
                r
              );
            })(t);
          case 2:
            return (function (e) {
              let t = f.decode(e.slice(1));
              9 !== t.length &&
                12 !== t.length &&
                p.throwArgumentError(
                  "invalid component count for transaction type: 2",
                  "payload",
                  (0, a.hexlify)(e)
                );
              let r = m(t[2]),
                n = m(t[3]),
                i = {
                  type: 2,
                  chainId: m(t[0]).toNumber(),
                  nonce: m(t[1]).toNumber(),
                  maxPriorityFeePerGas: r,
                  maxFeePerGas: n,
                  gasPrice: null,
                  gasLimit: m(t[4]),
                  to: g(t[5]),
                  value: m(t[6]),
                  data: t[7],
                  accessList: x(t[8]),
                };
              return (
                9 === t.length ||
                  ((i.hash = (0, u.keccak256)(e)), _(i, t.slice(9), P)),
                i
              );
            })(t);
        }
        return p.throwError(
          `unsupported transaction type: ${t[0]}`,
          d.Logger.errors.UNSUPPORTED_OPERATION,
          { operation: "parseTransaction", transactionType: t[0] }
        );
      }
    },
    7027: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          commify: function () {
            return E;
          },
          formatEther: function () {
            return P;
          },
          formatUnits: function () {
            return x;
          },
          parseEther: function () {
            return O;
          },
          parseUnits: function () {
            return S;
          },
        });
      var n = r(7730),
        i = r(67214),
        o = r(30761),
        s = r(30466);
      let a = new i.Logger(o.i),
        l = {},
        u = s.O$.from(0),
        c = s.O$.from(-1);
      function f(e, t, r, n) {
        let o = { fault: t, operation: r };
        return (
          void 0 !== n && (o.value = n),
          a.throwError(e, i.Logger.errors.NUMERIC_FAULT, o)
        );
      }
      let h = "0";
      for (; h.length < 256; ) h += h;
      function d(e) {
        if ("number" != typeof e)
          try {
            e = s.O$.from(e).toNumber();
          } catch (e) {}
        return "number" == typeof e && e >= 0 && e <= 256 && !(e % 1)
          ? "1" + h.substring(0, e)
          : a.throwArgumentError("invalid decimal size", "decimals", e);
      }
      function p(e, t) {
        null == t && (t = 0);
        let r = d(t),
          n = (e = s.O$.from(e)).lt(u);
        n && (e = e.mul(c));
        let i = e.mod(r).toString();
        for (; i.length < r.length - 1; ) i = "0" + i;
        i = i.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        let o = e.div(r).toString();
        return (e = 1 === r.length ? o : o + "." + i), n && (e = "-" + e), e;
      }
      function g(e, t) {
        null == t && (t = 0);
        let r = d(t);
        ("string" == typeof e && e.match(/^-?[0-9.]+$/)) ||
          a.throwArgumentError("invalid decimal value", "value", e);
        let n = "-" === e.substring(0, 1);
        n && (e = e.substring(1)),
          "." === e && a.throwArgumentError("missing value", "value", e);
        let i = e.split(".");
        i.length > 2 &&
          a.throwArgumentError("too many decimal points", "value", e);
        let o = i[0],
          l = i[1];
        for (o || (o = "0"), l || (l = "0"); "0" === l[l.length - 1]; )
          l = l.substring(0, l.length - 1);
        for (
          l.length > r.length - 1 &&
            f(
              "fractional component exceeds decimals",
              "underflow",
              "parseFixed"
            ),
            "" === l && (l = "0");
          l.length < r.length - 1;

        )
          l += "0";
        let u = s.O$.from(o),
          h = s.O$.from(l),
          p = u.mul(r).add(h);
        return n && (p = p.mul(c)), p;
      }
      class m {
        constructor(e, t, r, n) {
          e !== l &&
            a.throwError(
              "cannot use FixedFormat constructor; use FixedFormat.from",
              i.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" }
            ),
            (this.signed = t),
            (this.width = r),
            (this.decimals = n),
            (this.name =
              (t ? "" : "u") + "fixed" + String(r) + "x" + String(n)),
            (this._multiplier = d(n)),
            Object.freeze(this);
        }
        static from(e) {
          if (e instanceof m) return e;
          "number" == typeof e && (e = `fixed128x${e}`);
          let t = !0,
            r = 128,
            n = 18;
          if ("string" == typeof e) {
            if ("fixed" === e);
            else if ("ufixed" === e) t = !1;
            else {
              let i = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
              i || a.throwArgumentError("invalid fixed format", "format", e),
                (t = "u" !== i[1]),
                (r = parseInt(i[2])),
                (n = parseInt(i[3]));
            }
          } else if (e) {
            let i = (t, r, n) =>
              null == e[t]
                ? n
                : (typeof e[t] !== r &&
                    a.throwArgumentError(
                      "invalid fixed format (" + t + " not " + r + ")",
                      "format." + t,
                      e[t]
                    ),
                  e[t]);
            (t = i("signed", "boolean", t)),
              (r = i("width", "number", r)),
              (n = i("decimals", "number", n));
          }
          return (
            r % 8 &&
              a.throwArgumentError(
                "invalid fixed format width (not byte aligned)",
                "format.width",
                r
              ),
            n > 80 &&
              a.throwArgumentError(
                "invalid fixed format (decimals too large)",
                "format.decimals",
                n
              ),
            new m(l, t, r, n)
          );
        }
      }
      class y {
        constructor(e, t, r, n) {
          e !== l &&
            a.throwError(
              "cannot use FixedNumber constructor; use FixedNumber.from",
              i.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" }
            ),
            (this.format = n),
            (this._hex = t),
            (this._value = r),
            (this._isFixedNumber = !0),
            Object.freeze(this);
        }
        _checkFormat(e) {
          this.format.name !== e.format.name &&
            a.throwArgumentError(
              "incompatible format; use fixedNumber.toFormat",
              "other",
              e
            );
        }
        addUnsafe(e) {
          this._checkFormat(e);
          let t = g(this._value, this.format.decimals),
            r = g(e._value, e.format.decimals);
          return y.fromValue(t.add(r), this.format.decimals, this.format);
        }
        subUnsafe(e) {
          this._checkFormat(e);
          let t = g(this._value, this.format.decimals),
            r = g(e._value, e.format.decimals);
          return y.fromValue(t.sub(r), this.format.decimals, this.format);
        }
        mulUnsafe(e) {
          this._checkFormat(e);
          let t = g(this._value, this.format.decimals),
            r = g(e._value, e.format.decimals);
          return y.fromValue(
            t.mul(r).div(this.format._multiplier),
            this.format.decimals,
            this.format
          );
        }
        divUnsafe(e) {
          this._checkFormat(e);
          let t = g(this._value, this.format.decimals),
            r = g(e._value, e.format.decimals);
          return y.fromValue(
            t.mul(this.format._multiplier).div(r),
            this.format.decimals,
            this.format
          );
        }
        floor() {
          let e = this.toString().split(".");
          1 === e.length && e.push("0");
          let t = y.from(e[0], this.format),
            r = !e[1].match(/^(0*)$/);
          return (
            this.isNegative() && r && (t = t.subUnsafe(v.toFormat(t.format))), t
          );
        }
        ceiling() {
          let e = this.toString().split(".");
          1 === e.length && e.push("0");
          let t = y.from(e[0], this.format),
            r = !e[1].match(/^(0*)$/);
          return (
            !this.isNegative() && r && (t = t.addUnsafe(v.toFormat(t.format))),
            t
          );
        }
        round(e) {
          null == e && (e = 0);
          let t = this.toString().split(".");
          if (
            (1 === t.length && t.push("0"),
            (e < 0 || e > 80 || e % 1) &&
              a.throwArgumentError("invalid decimal count", "decimals", e),
            t[1].length <= e)
          )
            return this;
          let r = y.from("1" + h.substring(0, e), this.format),
            n = b.toFormat(this.format);
          return this.mulUnsafe(r).addUnsafe(n).floor().divUnsafe(r);
        }
        isZero() {
          return "0.0" === this._value || "0" === this._value;
        }
        isNegative() {
          return "-" === this._value[0];
        }
        toString() {
          return this._value;
        }
        toHexString(e) {
          if (null == e) return this._hex;
          e % 8 && a.throwArgumentError("invalid byte width", "width", e);
          let t = s.O$.from(this._hex)
            .fromTwos(this.format.width)
            .toTwos(e)
            .toHexString();
          return (0, n.hexZeroPad)(t, e / 8);
        }
        toUnsafeFloat() {
          return parseFloat(this.toString());
        }
        toFormat(e) {
          return y.fromString(this._value, e);
        }
        static fromValue(e, t, r) {
          return (
            null != r || null == t || (0, s.Zm)(t) || ((r = t), (t = null)),
            null == t && (t = 0),
            null == r && (r = "fixed"),
            y.fromString(p(e, t), m.from(r))
          );
        }
        static fromString(e, t) {
          null == t && (t = "fixed");
          let r = m.from(t),
            i = g(e, r.decimals);
          !r.signed &&
            i.lt(u) &&
            f("unsigned value cannot be negative", "overflow", "value", e);
          let o = null;
          return (
            r.signed
              ? (o = i.toTwos(r.width).toHexString())
              : ((o = i.toHexString()),
                (o = (0, n.hexZeroPad)(o, r.width / 8))),
            new y(l, o, p(i, r.decimals), r)
          );
        }
        static fromBytes(e, t) {
          null == t && (t = "fixed");
          let r = m.from(t);
          if ((0, n.arrayify)(e).length > r.width / 8) throw Error("overflow");
          let i = s.O$.from(e);
          return (
            r.signed && (i = i.fromTwos(r.width)),
            new y(
              l,
              i.toTwos((r.signed ? 0 : 1) + r.width).toHexString(),
              p(i, r.decimals),
              r
            )
          );
        }
        static from(e, t) {
          if ("string" == typeof e) return y.fromString(e, t);
          if ((0, n.isBytes)(e)) return y.fromBytes(e, t);
          try {
            return y.fromValue(e, 0, t);
          } catch (e) {
            if (e.code !== i.Logger.errors.INVALID_ARGUMENT) throw e;
          }
          return a.throwArgumentError("invalid FixedNumber value", "value", e);
        }
        static isFixedNumber(e) {
          return !!(e && e._isFixedNumber);
        }
      }
      let v = y.from(1),
        b = y.from("0.5"),
        A = new i.Logger("units/5.7.0"),
        w = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
      function E(e) {
        let t = String(e).split(".");
        (t.length > 2 ||
          !t[0].match(/^-?[0-9]*$/) ||
          (t[1] && !t[1].match(/^[0-9]*$/)) ||
          "." === e ||
          "-." === e) &&
          A.throwArgumentError("invalid value", "value", e);
        let r = t[0],
          n = "";
        for (
          "-" === r.substring(0, 1) && ((n = "-"), (r = r.substring(1)));
          "0" === r.substring(0, 1);

        )
          r = r.substring(1);
        "" === r && (r = "0");
        let i = "";
        for (
          2 === t.length && (i = "." + (t[1] || "0"));
          i.length > 2 && "0" === i[i.length - 1];

        )
          i = i.substring(0, i.length - 1);
        let o = [];
        for (; r.length; ) {
          if (r.length <= 3) {
            o.unshift(r);
            break;
          }
          {
            let e = r.length - 3;
            o.unshift(r.substring(e)), (r = r.substring(0, e));
          }
        }
        return n + o.join(",") + i;
      }
      function x(e, t) {
        if ("string" == typeof t) {
          let e = w.indexOf(t);
          -1 !== e && (t = 3 * e);
        }
        return p(e, null != t ? t : 18);
      }
      function S(e, t) {
        if (
          ("string" != typeof e &&
            A.throwArgumentError("value must be a string", "value", e),
          "string" == typeof t)
        ) {
          let e = w.indexOf(t);
          -1 !== e && (t = 3 * e);
        }
        return g(e, null != t ? t : 18);
      }
      function P(e) {
        return x(e, 18);
      }
      function O(e) {
        return S(e, 18);
      }
    },
    11465: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          Wallet: function () {
            return A;
          },
          verifyMessage: function () {
            return w;
          },
          verifyTypedData: function () {
            return E;
          },
        });
      var n = r(56805),
        i = r(62377),
        o = r(18833),
        s = r(7730),
        a = r(75470),
        l = r(22396),
        u = r(98937),
        c = r(14752),
        f = r(50357),
        h = r(77282),
        d = r(65653),
        p = r(21553),
        g = r(81174),
        m = r(11913),
        y = r(67214),
        v = function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function s(e) {
              try {
                l(n.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })
                  ).then(s, a);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      let b = new y.Logger("wallet/5.7.0");
      class A extends o.E {
        constructor(e, t) {
          var r;
          if (
            (super(),
            null != (r = e) &&
              (0, s.isHexString)(r.privateKey, 32) &&
              null != r.address)
          ) {
            let t = new d.SigningKey(e.privateKey);
            if (
              ((0, f.defineReadOnly)(this, "_signingKey", () => t),
              (0, f.defineReadOnly)(
                this,
                "address",
                (0, m.computeAddress)(this.publicKey)
              ),
              this.address !== (0, n.getAddress)(e.address) &&
                b.throwArgumentError(
                  "privateKey/address mismatch",
                  "privateKey",
                  "[REDACTED]"
                ),
              (function (e) {
                let t = e.mnemonic;
                return t && t.phrase;
              })(e))
            ) {
              let t = e.mnemonic;
              (0, f.defineReadOnly)(this, "_mnemonic", () => ({
                phrase: t.phrase,
                path: t.path || u.defaultPath,
                locale: t.locale || "en",
              }));
              let r = this.mnemonic,
                n = u.HDNode.fromMnemonic(r.phrase, null, r.locale).derivePath(
                  r.path
                );
              (0, m.computeAddress)(n.privateKey) !== this.address &&
                b.throwArgumentError(
                  "mnemonic/address mismatch",
                  "privateKey",
                  "[REDACTED]"
                );
            } else (0, f.defineReadOnly)(this, "_mnemonic", () => null);
          } else {
            if (d.SigningKey.isSigningKey(e))
              "secp256k1" !== e.curve &&
                b.throwArgumentError(
                  "unsupported curve; must be secp256k1",
                  "privateKey",
                  "[REDACTED]"
                ),
                (0, f.defineReadOnly)(this, "_signingKey", () => e);
            else {
              "string" == typeof e &&
                e.match(/^[0-9a-f]*$/i) &&
                64 === e.length &&
                (e = "0x" + e);
              let t = new d.SigningKey(e);
              (0, f.defineReadOnly)(this, "_signingKey", () => t);
            }
            (0, f.defineReadOnly)(this, "_mnemonic", () => null),
              (0, f.defineReadOnly)(
                this,
                "address",
                (0, m.computeAddress)(this.publicKey)
              );
          }
          t &&
            !i.zt.isProvider(t) &&
            b.throwArgumentError("invalid provider", "provider", t),
            (0, f.defineReadOnly)(this, "provider", t || null);
        }
        get mnemonic() {
          return this._mnemonic();
        }
        get privateKey() {
          return this._signingKey().privateKey;
        }
        get publicKey() {
          return this._signingKey().publicKey;
        }
        getAddress() {
          return Promise.resolve(this.address);
        }
        connect(e) {
          return new A(this, e);
        }
        signTransaction(e) {
          return (0, f.resolveProperties)(e).then((t) => {
            null != t.from &&
              ((0, n.getAddress)(t.from) !== this.address &&
                b.throwArgumentError(
                  "transaction from address mismatch",
                  "transaction.from",
                  e.from
                ),
              delete t.from);
            let r = this._signingKey().signDigest(
              (0, c.keccak256)((0, m.serialize)(t))
            );
            return (0, m.serialize)(t, r);
          });
        }
        signMessage(e) {
          return v(this, void 0, void 0, function* () {
            return (0,
            s.joinSignature)(this._signingKey().signDigest((0, a.r)(e)));
          });
        }
        _signTypedData(e, t, r) {
          return v(this, void 0, void 0, function* () {
            let n = yield l.E.resolveNames(
              e,
              t,
              r,
              (e) => (
                null == this.provider &&
                  b.throwError(
                    "cannot resolve ENS names without a provider",
                    y.Logger.errors.UNSUPPORTED_OPERATION,
                    { operation: "resolveName", value: e }
                  ),
                this.provider.resolveName(e)
              )
            );
            return (0,
            s.joinSignature)(this._signingKey().signDigest(l.E.hash(n.domain, t, n.value)));
          });
        }
        encrypt(e, t, r) {
          if (
            ("function" != typeof t || r || ((r = t), (t = {})),
            r && "function" != typeof r)
          )
            throw Error("invalid callback");
          return t || (t = {}), (0, p.HI)(this, e, t, r);
        }
        static createRandom(e) {
          let t = (0, h.O)(16);
          e || (e = {}),
            e.extraEntropy &&
              (t = (0, s.arrayify)(
                (0, s.hexDataSlice)(
                  (0, c.keccak256)((0, s.concat)([t, e.extraEntropy])),
                  0,
                  16
                )
              ));
          let r = (0, u.entropyToMnemonic)(t, e.locale);
          return A.fromMnemonic(r, e.path, e.locale);
        }
        static fromEncryptedJson(e, t, r) {
          return (0, g.decryptJsonWallet)(e, t, r).then((e) => new A(e));
        }
        static fromEncryptedJsonSync(e, t) {
          return new A((0, g.decryptJsonWalletSync)(e, t));
        }
        static fromMnemonic(e, t, r) {
          return (
            t || (t = u.defaultPath),
            new A(u.HDNode.fromMnemonic(e, null, r).derivePath(t))
          );
        }
      }
      function w(e, t) {
        return (0, m.recoverAddress)((0, a.r)(e), t);
      }
      function E(e, t, r, n) {
        return (0, m.recoverAddress)(l.E.hash(e, t, r), n);
      }
    },
    12982: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          _fetchData: function () {
            return f;
          },
          fetchJson: function () {
            return h;
          },
          poll: function () {
            return d;
          },
        });
      var n = r(91710),
        i = r(7730),
        o = r(50357),
        s = r(35321),
        a = r(67214);
      let l = new a.Logger("web/5.7.1");
      function u(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      function c(e, t) {
        if (null == e) return null;
        if ("string" == typeof e) return e;
        if ((0, i.isBytesLike)(e)) {
          if (
            t &&
            ("text" === t.split("/")[0] ||
              "application/json" === t.split(";")[0].trim())
          )
            try {
              return (0, s.ZN)(e);
            } catch (e) {}
          return (0, i.hexlify)(e);
        }
        return e;
      }
      function f(e, t, r) {
        let f;
        let h =
          "object" == typeof e && null != e.throttleLimit
            ? e.throttleLimit
            : 12;
        l.assertArgument(
          h > 0 && h % 1 == 0,
          "invalid connection throttle limit",
          "connection.throttleLimit",
          h
        );
        let d = "object" == typeof e ? e.throttleCallback : null,
          p =
            "object" == typeof e && "number" == typeof e.throttleSlotInterval
              ? e.throttleSlotInterval
              : 100;
        l.assertArgument(
          p > 0 && p % 1 == 0,
          "invalid connection throttle slot interval",
          "connection.throttleSlotInterval",
          p
        );
        let g = "object" == typeof e && !!e.errorPassThrough,
          m = {},
          y = null,
          v = { method: "GET" },
          b = !1,
          A = 12e4;
        if ("string" == typeof e) y = e;
        else if ("object" == typeof e) {
          if (
            ((null == e || null == e.url) &&
              l.throwArgumentError("missing URL", "connection.url", e),
            (y = e.url),
            "number" == typeof e.timeout && e.timeout > 0 && (A = e.timeout),
            e.headers)
          )
            for (let t in e.headers)
              (m[t.toLowerCase()] = { key: t, value: String(e.headers[t]) }),
                ["if-none-match", "if-modified-since"].indexOf(
                  t.toLowerCase()
                ) >= 0 && (b = !0);
          if (
            ((v.allowGzip = !!e.allowGzip),
            null != e.user && null != e.password)
          ) {
            "https:" !== y.substring(0, 6) &&
              !0 !== e.allowInsecureAuthentication &&
              l.throwError(
                "basic authentication requires a secure https url",
                a.Logger.errors.INVALID_ARGUMENT,
                {
                  argument: "url",
                  url: y,
                  user: e.user,
                  password: "[REDACTED]",
                }
              );
            let t = e.user + ":" + e.password;
            m.authorization = {
              key: "Authorization",
              value: "Basic " + (0, n.c)((0, s.Y0)(t)),
            };
          }
          null != e.skipFetchSetup && (v.skipFetchSetup = !!e.skipFetchSetup),
            null != e.fetchOptions &&
              (v.fetchOptions = (0, o.shallowCopy)(e.fetchOptions));
        }
        let w = RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
          E = y ? y.match(w) : null;
        if (E)
          try {
            var x;
            let e = {
                statusCode: 200,
                statusMessage: "OK",
                headers: { "content-type": E[1] || "text/plain" },
                body: E[2]
                  ? (0, n.J)(E[3])
                  : ((x = E[3]),
                    (0, s.Y0)(
                      x.replace(/%([0-9a-f][0-9a-f])/gi, (e, t) =>
                        String.fromCharCode(parseInt(t, 16))
                      )
                    )),
              },
              t = e.body;
            return r && (t = r(e.body, e)), Promise.resolve(t);
          } catch (e) {
            l.throwError(
              "processing response error",
              a.Logger.errors.SERVER_ERROR,
              {
                body: c(E[1], E[2]),
                error: e,
                requestBody: null,
                requestMethod: "GET",
                url: y,
              }
            );
          }
        t &&
          ((v.method = "POST"),
          (v.body = t),
          null == m["content-type"] &&
            (m["content-type"] = {
              key: "Content-Type",
              value: "application/octet-stream",
            }),
          null == m["content-length"] &&
            (m["content-length"] = {
              key: "Content-Length",
              value: String(t.length),
            }));
        let S = {};
        Object.keys(m).forEach((e) => {
          let t = m[e];
          S[t.key] = t.value;
        }),
          (v.headers = S);
        let P =
            ((f = null),
            {
              promise: new Promise(function (e, t) {
                A &&
                  (f = setTimeout(() => {
                    null != f &&
                      ((f = null),
                      t(
                        l.makeError("timeout", a.Logger.errors.TIMEOUT, {
                          requestBody: c(v.body, S["content-type"]),
                          requestMethod: v.method,
                          timeout: A,
                          url: y,
                        })
                      ));
                  }, A));
              }),
              cancel: function () {
                null != f && (clearTimeout(f), (f = null));
              },
            }),
          O = (function () {
            var e, t, n, o;
            return (
              (e = this),
              (t = void 0),
              (n = void 0),
              (o = function* () {
                for (let e = 0; e < h; e++) {
                  let t = null;
                  try {
                    if (
                      ((t = yield (function (e, t) {
                        var r, n, o, s;
                        return (
                          (r = this),
                          (n = void 0),
                          (o = void 0),
                          (s = function* () {
                            null == t && (t = {});
                            let r = {
                              method: t.method || "GET",
                              headers: t.headers || {},
                              body: t.body || void 0,
                            };
                            if (
                              (!0 !== t.skipFetchSetup &&
                                ((r.mode = "cors"),
                                (r.cache = "no-cache"),
                                (r.credentials = "same-origin"),
                                (r.redirect = "follow"),
                                (r.referrer = "client")),
                              null != t.fetchOptions)
                            ) {
                              let e = t.fetchOptions;
                              e.mode && (r.mode = e.mode),
                                e.cache && (r.cache = e.cache),
                                e.credentials &&
                                  (r.credentials = e.credentials),
                                e.redirect && (r.redirect = e.redirect),
                                e.referrer && (r.referrer = e.referrer);
                            }
                            let n = yield fetch(e, r),
                              o = yield n.arrayBuffer(),
                              s = {};
                            return (
                              n.headers.forEach
                                ? n.headers.forEach((e, t) => {
                                    s[t.toLowerCase()] = e;
                                  })
                                : n.headers.keys().forEach((e) => {
                                    s[e.toLowerCase()] = n.headers.get(e);
                                  }),
                              {
                                headers: s,
                                statusCode: n.status,
                                statusMessage: n.statusText,
                                body: (0, i.arrayify)(new Uint8Array(o)),
                              }
                            );
                          }),
                          new (o || (o = Promise))(function (e, t) {
                            function i(e) {
                              try {
                                l(s.next(e));
                              } catch (e) {
                                t(e);
                              }
                            }
                            function a(e) {
                              try {
                                l(s.throw(e));
                              } catch (e) {
                                t(e);
                              }
                            }
                            function l(t) {
                              var r;
                              t.done
                                ? e(t.value)
                                : ((r = t.value) instanceof o
                                    ? r
                                    : new o(function (e) {
                                        e(r);
                                      })
                                  ).then(i, a);
                            }
                            l((s = s.apply(r, n || [])).next());
                          })
                        );
                      })(y, v)),
                      e < h)
                    ) {
                      if (301 === t.statusCode || 302 === t.statusCode) {
                        let e = t.headers.location || "";
                        if ("GET" === v.method && e.match(/^https:/)) {
                          y = t.headers.location;
                          continue;
                        }
                      } else if (429 === t.statusCode) {
                        let r = !0;
                        if ((d && (r = yield d(e, y)), r)) {
                          let r = 0,
                            n = t.headers["retry-after"];
                          (r =
                            "string" == typeof n && n.match(/^[1-9][0-9]*$/)
                              ? 1e3 * parseInt(n)
                              : p *
                                parseInt(
                                  String(Math.random() * Math.pow(2, e))
                                )),
                            yield u(r);
                          continue;
                        }
                      }
                    }
                  } catch (e) {
                    null == (t = e.response) &&
                      (P.cancel(),
                      l.throwError(
                        "missing response",
                        a.Logger.errors.SERVER_ERROR,
                        {
                          requestBody: c(v.body, S["content-type"]),
                          requestMethod: v.method,
                          serverError: e,
                          url: y,
                        }
                      ));
                  }
                  let n = t.body;
                  if (
                    (b && 304 === t.statusCode
                      ? (n = null)
                      : !g &&
                        (t.statusCode < 200 || t.statusCode >= 300) &&
                        (P.cancel(),
                        l.throwError(
                          "bad response",
                          a.Logger.errors.SERVER_ERROR,
                          {
                            status: t.statusCode,
                            headers: t.headers,
                            body: c(
                              n,
                              t.headers ? t.headers["content-type"] : null
                            ),
                            requestBody: c(v.body, S["content-type"]),
                            requestMethod: v.method,
                            url: y,
                          }
                        )),
                    r)
                  )
                    try {
                      let e = yield r(n, t);
                      return P.cancel(), e;
                    } catch (r) {
                      if (r.throttleRetry && e < h) {
                        let t = !0;
                        if ((d && (t = yield d(e, y)), t)) {
                          let t =
                            p *
                            parseInt(String(Math.random() * Math.pow(2, e)));
                          yield u(t);
                          continue;
                        }
                      }
                      P.cancel(),
                        l.throwError(
                          "processing response error",
                          a.Logger.errors.SERVER_ERROR,
                          {
                            body: c(
                              n,
                              t.headers ? t.headers["content-type"] : null
                            ),
                            error: r,
                            requestBody: c(v.body, S["content-type"]),
                            requestMethod: v.method,
                            url: y,
                          }
                        );
                    }
                  return P.cancel(), n;
                }
                return l.throwError(
                  "failed response",
                  a.Logger.errors.SERVER_ERROR,
                  {
                    requestBody: c(v.body, S["content-type"]),
                    requestMethod: v.method,
                    url: y,
                  }
                );
              }),
              new (n || (n = Promise))(function (r, i) {
                function s(e) {
                  try {
                    l(o.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function a(e) {
                  try {
                    l(o.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value) instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })
                      ).then(s, a);
                }
                l((o = o.apply(e, t || [])).next());
              })
            );
          })();
        return Promise.race([P.promise, O]);
      }
      function h(e, t, r) {
        let n = null;
        if (null != t) {
          n = (0, s.Y0)(t);
          let r = "string" == typeof e ? { url: e } : (0, o.shallowCopy)(e);
          r.headers
            ? 0 !==
                Object.keys(r.headers).filter(
                  (e) => "content-type" === e.toLowerCase()
                ).length ||
              ((r.headers = (0, o.shallowCopy)(r.headers)),
              (r.headers["content-type"] = "application/json"))
            : (r.headers = { "content-type": "application/json" }),
            (e = r);
        }
        return f(e, n, (e, t) => {
          let n = null;
          if (null != e)
            try {
              n = JSON.parse((0, s.ZN)(e));
            } catch (t) {
              l.throwError("invalid JSON", a.Logger.errors.SERVER_ERROR, {
                body: e,
                error: t,
              });
            }
          return r && (n = r(n, t)), n;
        });
      }
      function d(e, t) {
        return (
          t || (t = {}),
          null == (t = (0, o.shallowCopy)(t)).floor && (t.floor = 0),
          null == t.ceiling && (t.ceiling = 1e4),
          null == t.interval && (t.interval = 250),
          new Promise(function (r, n) {
            let i = null,
              o = !1,
              s = () => !o && ((o = !0), i && clearTimeout(i), !0);
            t.timeout &&
              (i = setTimeout(() => {
                s() && n(Error("timeout"));
              }, t.timeout));
            let a = t.retryLimit,
              l = 0;
            !(function i() {
              return e().then(
                function (e) {
                  if (void 0 !== e) s() && r(e);
                  else if (t.oncePoll) t.oncePoll.once("poll", i);
                  else if (t.onceBlock) t.onceBlock.once("block", i);
                  else if (!o) {
                    if (++l > a) {
                      s() && n(Error("retry limit reached"));
                      return;
                    }
                    let e =
                      t.interval *
                      parseInt(String(Math.random() * Math.pow(2, l)));
                    e < t.floor && (e = t.floor),
                      e > t.ceiling && (e = t.ceiling),
                      setTimeout(i, e);
                  }
                  return null;
                },
                function (e) {
                  s() && n(e);
                }
              );
            })();
          })
        );
      }
    },
    13929: function (e) {
      "use strict";
      !(function (t) {
        function r(e) {
          return parseInt(e) === e;
        }
        function n(e) {
          if (!r(e.length)) return !1;
          for (var t = 0; t < e.length; t++)
            if (!r(e[t]) || e[t] < 0 || e[t] > 255) return !1;
          return !0;
        }
        function i(e, t) {
          if (e.buffer && ArrayBuffer.isView(e) && "Uint8Array" === e.name)
            return (
              t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e
            );
          if (Array.isArray(e)) {
            if (!n(e)) throw Error("Array contains invalid value: " + e);
            return new Uint8Array(e);
          }
          if (r(e.length) && n(e)) return new Uint8Array(e);
          throw Error("unsupported array-like object");
        }
        function o(e) {
          return new Uint8Array(e);
        }
        function s(e, t, r, n, i) {
          (null != n || null != i) &&
            (e = e.slice ? e.slice(n, i) : Array.prototype.slice.call(e, n, i)),
            t.set(e, r);
        }
        var a,
          l =
            ((a = "0123456789abcdef"),
            {
              toBytes: function (e) {
                for (var t = [], r = 0; r < e.length; r += 2)
                  t.push(parseInt(e.substr(r, 2), 16));
                return t;
              },
              fromBytes: function (e) {
                for (var t = [], r = 0; r < e.length; r++) {
                  var n = e[r];
                  t.push(a[(240 & n) >> 4] + a[15 & n]);
                }
                return t.join("");
              },
            }),
          u = { 16: 10, 24: 12, 32: 14 },
          c = [
            1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94,
            188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145,
          ],
          f = [
            99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215,
            171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175,
            156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165,
            229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18,
            128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82,
            59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91,
            106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51,
            133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157,
            56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95,
            151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220,
            34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58,
            10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200,
            55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8,
            186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189,
            139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134,
            193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135,
            233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65,
            153, 45, 15, 176, 84, 187, 22,
          ],
          h = [
            82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215,
            251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196,
            222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11,
            66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162,
            73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212,
            164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185,
            218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188,
            211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202,
            63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79,
            103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172,
            116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110,
            71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190,
            27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120,
            205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89,
            39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122,
            159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200,
            235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38,
            225, 105, 20, 99, 85, 33, 12, 125,
          ],
          d = [
            3328402341, 4168907908, 4000806809, 4135287693, 4294111757,
            3597364157, 3731845041, 2445657428, 1613770832, 33620227,
            3462883241, 1445669757, 3892248089, 3050821474, 1303096294,
            3967186586, 2412431941, 528646813, 2311702848, 4202528135,
            4026202645, 2992200171, 2387036105, 4226871307, 1101901292,
            3017069671, 1604494077, 1169141738, 597466303, 1403299063,
            3832705686, 2613100635, 1974974402, 3791519004, 1033081774,
            1277568618, 1815492186, 2118074177, 4126668546, 2211236943,
            1748251740, 1369810420, 3521504564, 4193382664, 3799085459,
            2883115123, 1647391059, 706024767, 134480908, 2512897874,
            1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301,
            235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841,
            2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870,
            907746093, 3698224818, 3025820398, 1537253627, 2756858614,
            1983593293, 3084310113, 2108928974, 1378429307, 3722699582,
            1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436,
            1075847264, 3825007647, 2041688520, 3059440621, 3563743934,
            2378943302, 1740553945, 1916352843, 2487896798, 2555137236,
            2958579944, 2244988746, 3151024235, 3320835882, 1336584933,
            3992714006, 2252555205, 2588757463, 1714631509, 293963156,
            2319795663, 3925473552, 67240454, 4269768577, 2689618160,
            2017213508, 631218106, 1269344483, 2723238387, 1571005438,
            2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100,
            1673313503, 2008463041, 2950355573, 1109467491, 537923632,
            3858759450, 4260623118, 3218264685, 2177748300, 403442708,
            638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209,
            2479146071, 1437050866, 4236148354, 2050833735, 3362022572,
            3126681063, 840505643, 3866325909, 3227541664, 427917720,
            2655997905, 2749160575, 1143087718, 1412049534, 999329963,
            193497219, 2353415882, 3354324521, 1807268051, 672404540,
            2816401017, 3160301282, 369822493, 2916866934, 3688947771,
            1681011286, 1949973070, 336202270, 2454276571, 201721354,
            1210328172, 3093060836, 2680341085, 3184776046, 1135389935,
            3294782118, 965841320, 831886756, 3554993207, 4068047243,
            3588745010, 2345191491, 1849112409, 3664604599, 26054028,
            2983581028, 2622377682, 1235855840, 3630984372, 2891339514,
            4092916743, 3488279077, 3395642799, 4101667470, 1202630377,
            268961816, 1874508501, 4034427016, 1243948399, 1546530418,
            941366308, 1470539505, 1941222599, 2546386513, 3421038627,
            2715671932, 3899946140, 1042226977, 2521517021, 1639824860,
            227249030, 260737669, 3765465232, 2084453954, 1907733956,
            3429263018, 2420656344, 100860677, 4160157185, 470683154,
            3261161891, 1781871967, 2924959737, 1773779408, 394692241,
            2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851,
            571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662,
            1008606754, 361203602, 3387549984, 2278477385, 2857719295,
            1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935,
            1707065306, 3622233649, 2218934982, 3496503480, 2185314755,
            697932208, 1512910199, 504303377, 2075177163, 2824099068,
            1841019862, 739644986,
          ],
          p = [
            2781242211, 2230877308, 2582542199, 2381740923, 234877682,
            3184946027, 2984144751, 1418839493, 1348481072, 50462977,
            2848876391, 2102799147, 434634494, 1656084439, 3863849899,
            2599188086, 1167051466, 2636087938, 1082771913, 2281340285,
            368048890, 3954334041, 3381544775, 201060592, 3963727277,
            1739838676, 4250903202, 3930435503, 3206782108, 4149453988,
            2531553906, 1536934080, 3262494647, 484572669, 2923271059,
            1783375398, 1517041206, 1098792767, 49674231, 1334037708,
            1550332980, 4098991525, 886171109, 150598129, 2481090929,
            1940642008, 1398944049, 1059722517, 201851908, 1385547719,
            1699095331, 1587397571, 674240536, 2704774806, 252314885,
            3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483,
            1766729511, 3447698098, 2682942837, 454166793, 2652734339,
            1951935532, 775166490, 758520603, 3000790638, 4004797018,
            4217086112, 4137964114, 1299594043, 1639438038, 3464344499,
            2068982057, 1054729187, 1901997871, 2534638724, 4121318227,
            1757008337, 0, 750906861, 1614815264, 535035132, 3363418545,
            3988151131, 3201591914, 1183697867, 3647454910, 1265776953,
            3734260298, 3566750796, 3903871064, 1250283471, 1807470800,
            717615087, 3847203498, 384695291, 3313910595, 3617213773,
            1432761139, 2484176261, 3481945413, 283769337, 100925954,
            2180939647, 4037038160, 1148730428, 3123027871, 3813386408,
            4087501137, 4267549603, 3229630528, 2315620239, 2906624658,
            3156319645, 1215313976, 82966005, 3747855548, 3245848246,
            1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890,
            1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207,
            3431482436, 959321879, 1469301956, 4065699751, 2197585534,
            1199193405, 2898814052, 3887750493, 724703513, 2514908019,
            2696962144, 2551808385, 3516813135, 2141445340, 1715741218,
            2119445034, 2872807568, 2198571144, 3398190662, 700968686,
            3547052216, 1009259540, 2041044702, 3803995742, 487983883,
            1991105499, 1004265696, 1449407026, 1316239930, 504629770,
            3683797321, 168560134, 1816667172, 3837287516, 1570751170,
            1857934291, 4014189740, 2797888098, 2822345105, 2754712981,
            936633572, 2347923833, 852879335, 1133234376, 1500395319,
            3084545389, 2348912013, 1689376213, 3533459022, 3762923945,
            3034082412, 4205598294, 133428468, 634383082, 2949277029,
            2398386810, 3913789102, 403703816, 3580869306, 2297460856,
            1867130149, 1918643758, 607656988, 4049053350, 3346248884,
            1368901318, 600565992, 2090982877, 2632479860, 557719327,
            3717614411, 3697393085, 2249034635, 2232388234, 2430627952,
            1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830,
            303828494, 2747425121, 1600795957, 4188952407, 3496589753,
            2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800,
            3005978776, 857870609, 3151128937, 1890179545, 2298973838,
            2805175444, 3056442267, 574365214, 2450884487, 550103529,
            1233637070, 4289353045, 2018519080, 2057691103, 2399374476,
            4166623649, 2148108681, 387583245, 3664101311, 836232934,
            3330556482, 3100665960, 3280093505, 2955516313, 2002398509,
            287182607, 3413881008, 4238890068, 3597515707, 975967766,
          ],
          g = [
            1671808611, 2089089148, 2006576759, 2072901243, 4061003762,
            1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671,
            729634347, 4263110654, 3613570519, 2883997099, 1989864566,
            3393556426, 2191335298, 3376449993, 2106063485, 4195741690,
            1508618841, 1204391495, 4027317232, 2917941677, 3563566036,
            2734514082, 2951366063, 2629772188, 2767672228, 1922491506,
            3227229120, 3082974647, 4246528509, 2477669779, 644500518,
            911895606, 1061256767, 4144166391, 3427763148, 878471220,
            2784252325, 3845444069, 4043897329, 1905517169, 3631459288,
            827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891,
            405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066,
            2157648768, 3795705826, 3945188843, 661212711, 2999812018,
            1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803,
            1857215598, 1525593178, 2700827552, 1391895634, 994932283,
            3596728278, 3016654259, 695947817, 3812548067, 795958831,
            2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784,
            4229948412, 2982705585, 1542305371, 1790891114, 3410398667,
            3201918910, 961245753, 1256100938, 1289001036, 1491644504,
            3477767631, 3496721360, 4012557807, 2867154858, 4212583931,
            1137018435, 1305975373, 861234739, 2241073541, 1171229253,
            4178635257, 33948674, 2139225727, 1357946960, 1011120188,
            2679776671, 2833468328, 1374921297, 2751356323, 1086357568,
            2408187279, 2460827538, 2646352285, 944271416, 4110742005,
            3168756668, 3066132406, 3665145818, 560153121, 271589392,
            4279952895, 4077846003, 3530407890, 3444343245, 202643468,
            322250259, 3962553324, 1608629855, 2543990167, 1154254916,
            389623319, 3294073796, 2817676711, 2122513534, 1028094525,
            1689045092, 1575467613, 422261273, 1939203699, 1621147744,
            2174228865, 1339137615, 3699352540, 577127458, 712922154,
            2427141008, 2290289544, 1187679302, 3995715566, 3100863416,
            339486740, 3732514782, 1591917662, 186455563, 3681988059,
            3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734,
            611076132, 1558493276, 3260915650, 3547250131, 2901361580,
            1655096418, 2443721105, 2510565781, 3828863972, 2039214713,
            3878868455, 3359869896, 928607799, 1840765549, 2374762893,
            3580146133, 1322425422, 2850048425, 1823791212, 1459268694,
            4094161908, 3928346602, 1706019429, 2056189050, 2934523822,
            135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708,
            2800834470, 3032970164, 3327236038, 3894660072, 3715932637,
            1956440180, 522272287, 1272813131, 3185336765, 2340818315,
            2323976074, 1888542832, 1044544574, 3049550261, 1722469478,
            1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557,
            1475980887, 3117443513, 2257655686, 3243809217, 489110045,
            2662934430, 3778599393, 4162055160, 2561878936, 288563729,
            1773916777, 3648039385, 2391345038, 2493985684, 2612407707,
            505560094, 2274497927, 3911240169, 3460925390, 1442818645,
            678973480, 3749357023, 2358182796, 2717407649, 2306869641,
            219617805, 3218761151, 3862026214, 1120306242, 1756942440,
            1103331905, 2578459033, 762796589, 252780047, 2966125488,
            1425844308, 3151392187, 372911126,
          ],
          m = [
            1667474886, 2088535288, 2004326894, 2071694838, 4075949567,
            1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926,
            724270422, 4278065639, 3621216949, 2880169549, 1987484396,
            3402253711, 2189597983, 3385409673, 2105378810, 4210693615,
            1499065266, 1195886990, 4042263547, 2913856577, 3570689971,
            2728590687, 2947541573, 2627518243, 2762274643, 1920112356,
            3233831835, 3082273397, 4261223649, 2475929149, 640051788,
            909531756, 1061110142, 4160160501, 3435941763, 875846760,
            2779116625, 3857003729, 4059105529, 1903268834, 3638064043,
            825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861,
            404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396,
            2155911963, 3806477791, 3958056653, 656894286, 2998062463,
            1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878,
            1852748508, 1515908788, 2694904667, 1381168804, 993742198,
            3604373943, 3014905469, 690584402, 3823320797, 791638366,
            2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704,
            4244381667, 2981218425, 1532751286, 1785380564, 3419096717,
            3200178535, 960056178, 1246420628, 1280103576, 1482221744,
            3486468741, 3503319995, 4025428677, 2863326543, 4227536621,
            1128514950, 1296947098, 859002214, 2240123921, 1162203018,
            4193849577, 33687044, 2139062782, 1347481760, 1010582648,
            2678045221, 2829640523, 1364325282, 2745433693, 1077985408,
            2408548869, 2459086143, 2644360225, 943212656, 4126475505,
            3166494563, 3065430391, 3671750063, 555836226, 269496352,
            4294908645, 4092792573, 3537006015, 3452783745, 202118168,
            320025894, 3974901699, 1600119230, 2543297077, 1145359496,
            387397934, 3301201811, 2812801621, 2122220284, 1027426170,
            1684319432, 1566435258, 421079858, 1936954854, 1616945344,
            2172753945, 1330631070, 3705438115, 572679748, 707427924,
            2425400123, 2290647819, 1179044492, 4008585671, 3099120491,
            336870440, 3739122087, 1583276732, 185277718, 3688593069,
            3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084,
            606366792, 1549591736, 3267517855, 3553849021, 2897014595,
            1650632388, 2442242105, 2509612081, 3840161747, 2038008818,
            3890688725, 3368567691, 926374254, 1835907034, 2374863873,
            3587531953, 1313788572, 2846482505, 1819063512, 1448540844,
            4109633523, 3941213647, 1701162954, 2054852340, 2930698567,
            134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328,
            2795958615, 3031746419, 3334885783, 3907527627, 3722280097,
            1953799400, 522133822, 1263263126, 3183336545, 2341176845,
            2324333839, 1886425312, 1044267644, 3048588401, 1718004428,
            1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282,
            1465383342, 3115962473, 2256965911, 3250673817, 488449850,
            2661202215, 3789633753, 4177007595, 2560144171, 286339874,
            1768537042, 3654906025, 2391705863, 2492770099, 2610673197,
            505291324, 2273808917, 3924369609, 3469625735, 1431699370,
            673740880, 3755965093, 2358021891, 2711746649, 2307489801,
            218961690, 3217021541, 3873845719, 1111672452, 1751693520,
            1094828930, 2576986153, 757954394, 252645662, 2964376443,
            1414855848, 3149649517, 370555436,
          ],
          y = [
            1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753,
            2902087851, 1273168787, 540080725, 2910219766, 2295101073,
            4110568485, 1340463100, 3307916247, 641025152, 3043140495,
            3736164937, 632953703, 1172967064, 1576976609, 3274667266,
            2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147,
            2505202138, 3569255213, 1484005843, 1239443753, 2395588676,
            1975683434, 4102977912, 2572697195, 666464733, 3202437046,
            4035489047, 3374361702, 2110667444, 1675577880, 3843699074,
            2538681184, 1649639237, 2976151520, 3144396420, 4269907996,
            4178062228, 1883793496, 2403728665, 2497604743, 1383856311,
            2876494627, 1917518562, 3810496343, 1716890410, 3001755655,
            800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362,
            3977675356, 2328828971, 2809771154, 4077384432, 1315562145,
            1708848333, 101039829, 3509871135, 3299278474, 875451293,
            2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582,
            3178106961, 1042385657, 2531067453, 3711829422, 1306967366,
            2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327,
            2302690252, 1742315127, 2968011453, 126454664, 3877198648,
            2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987,
            841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998,
            908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497,
            2472011535, 3035535058, 463180190, 2160117071, 1641816226,
            1517767529, 470948374, 3801332234, 3231722213, 1008918595,
            303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501,
            2943682380, 4003061179, 2743034109, 4144047775, 1551037884,
            1147550661, 1543208500, 2336434550, 3408119516, 3069049960,
            3102011747, 3610369226, 1113818384, 328671808, 2227573024,
            2236228733, 3535486456, 2935566865, 3341394285, 496906059,
            3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682,
            1206477858, 2835123396, 2700099354, 1451044056, 573804783,
            2269728455, 3644379585, 2362090238, 2564033334, 2801107407,
            2776292904, 3669462566, 1068351396, 742039012, 1350078989,
            1784663195, 1417561698, 4136440770, 2430122216, 775550814,
            2193862645, 2673705150, 1775276924, 1876241833, 3475313331,
            3366754619, 270040487, 3902563182, 3678124923, 3441850377,
            1851332852, 3969562369, 2203032232, 3868552805, 2868897406,
            566021896, 4011190502, 3135740889, 1248802510, 3936291284,
            699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047,
            4236429990, 3767586992, 866637845, 4043610186, 1106041591,
            2144161806, 395441711, 1984812685, 1139781709, 3433712980,
            3835036895, 2664543715, 1282050075, 3240894392, 1181045119,
            2640243204, 25965917, 4203181171, 4211818798, 3009879386,
            2463879762, 3910161971, 1842759443, 2597806476, 933301370,
            1509430414, 3943906441, 3467192302, 3076639029, 3776767469,
            2051518780, 2631065433, 1441952575, 404016761, 1942435775,
            1408749034, 1610459739, 3745345300, 2017778566, 3400528769,
            3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627,
            4279080257, 967311729, 135050206, 3635733660, 1683407248,
            2076935265, 3576870512, 1215061108, 3501741890,
          ],
          v = [
            1347548327, 1400783205, 3273267108, 2520393566, 3409685355,
            4045380933, 2880240216, 2471224067, 1428173050, 4138563181,
            2441661558, 636813900, 4233094615, 3620022987, 2149987652,
            2411029155, 1239331162, 1730525723, 2554718734, 3781033664,
            46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972,
            3955191162, 3667219033, 768917123, 3545789473, 692707433,
            1150208456, 1786102409, 2029293177, 1805211710, 3710368113,
            3065962831, 401639597, 1724457132, 3028143674, 409198410,
            2196052529, 1620529459, 1164071807, 3769721975, 2226875310,
            486441376, 2499348523, 1483753576, 428819965, 2274680428,
            3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120,
            53458370, 2592523643, 2782082824, 4063242375, 2988687269,
            3120694122, 1559041666, 730517276, 2460449204, 4042459122,
            2706270690, 3446004468, 3573941694, 533804130, 2328143614,
            2637442643, 2695033685, 839224033, 1973745387, 957055980,
            2856345839, 106852767, 1371368976, 4181598602, 1033297158,
            2933734917, 1179510461, 3046200461, 91341917, 1862534868,
            4284502037, 605657339, 2547432937, 3431546947, 2003294622,
            3182487618, 2282195339, 954669403, 3682191598, 1201765386,
            3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696,
            1315723890, 4227665663, 1443857720, 507358933, 657861945,
            1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535,
            3535072918, 2652609425, 1333838021, 2724322336, 1767536459,
            370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197,
            2918353863, 3106780840, 3356761769, 2237133081, 1286567175,
            3152976349, 4255350624, 2683765030, 3160175349, 3309594171,
            878443390, 1988838185, 3704300486, 1756818940, 1673061617,
            3403100636, 272786309, 1075025698, 545572369, 2105887268,
            4174560061, 296679730, 1841768865, 1260232239, 4091327024,
            3960309330, 3497509347, 1814803222, 2578018489, 4195456072,
            575138148, 3299409036, 446754879, 3629546796, 4011996048,
            3347532110, 3252238545, 4270639778, 915985419, 3483825537,
            681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820,
            1649704518, 3270937875, 3901806776, 1580087799, 4118987695,
            3198115200, 2087309459, 2842678573, 3016697106, 1003007129,
            2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319,
            2827177882, 1709610350, 2125135846, 136428751, 3874428392,
            3652904859, 3460984630, 3572145929, 3593056380, 2939266226,
            824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152,
            355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630,
            1296297904, 1422699085, 3756299780, 3818836405, 457992840,
            3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353,
            1521706781, 1385356242, 870912086, 325965383, 2358957921,
            2050466060, 2388260884, 2313884476, 4006521127, 901210569,
            3990953189, 1014646705, 1503449823, 1062597235, 2031621326,
            3212035895, 3931371469, 1533017514, 350174575, 2256028891,
            2177544179, 1052338372, 741876788, 1606591296, 1914052035,
            213705253, 2334669897, 1107234197, 1899603969, 3725069491,
            2631447780, 2422494913, 1635502980, 1893020342, 1950903388,
            1120974935,
          ],
          b = [
            2807058932, 1699970625, 2764249623, 1586903591, 1808481195,
            1173430173, 1487645946, 59984867, 4199882800, 1844882806,
            1989249228, 1277555970, 3623636965, 3419915562, 1149249077,
            2744104290, 1514790577, 459744698, 244860394, 3235995134,
            1963115311, 4027744588, 2544078150, 4190530515, 1608975247,
            2627016082, 2062270317, 1507497298, 2200818878, 567498868,
            1764313568, 3359936201, 2305455554, 2037970062, 1047239e3,
            1910319033, 1337376481, 2904027272, 2892417312, 984907214,
            1243112415, 830661914, 861968209, 2135253587, 2011214180,
            2927934315, 2686254721, 731183368, 1750626376, 4246310725,
            1820824798, 4172763771, 3542330227, 48394827, 2404901663,
            2871682645, 671593195, 3254988725, 2073724613, 145085239,
            2280796200, 2779915199, 1790575107, 2187128086, 472615631,
            3029510009, 4075877127, 3802222185, 4107101658, 3201631749,
            1646252340, 4270507174, 1402811438, 1436590835, 3778151818,
            3950355702, 3963161475, 4020912224, 2667994737, 273792366,
            2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892,
            3564045318, 369057872, 4213447064, 3919042237, 1137477952,
            2658625497, 1119727848, 2340947849, 1530455833, 4007360968,
            172466556, 266959938, 516552836, 0, 2256734592, 3980931627,
            1890328081, 1917742170, 4294704398, 945164165, 3575528878,
            958871085, 3647212047, 2787207260, 1423022939, 775562294,
            1739656202, 3876557655, 2530391278, 2443058075, 3310321856,
            547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690,
            387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201,
            122466165, 3720081049, 1627235199, 648017665, 4122762354,
            1002783846, 2117360635, 695634755, 3336358691, 4234721005,
            4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898,
            1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670,
            3822090177, 376187827, 3113855344, 1224348052, 1679968233,
            2361698556, 1058709744, 752375421, 2431590963, 1321699145,
            3519142200, 2734591178, 188127444, 2177869557, 3727205754,
            2384911031, 3215212461, 2648976442, 2450346104, 3432737375,
            1180849278, 331544205, 3102249176, 4150144569, 2952102595,
            2159976285, 2474404304, 766078933, 313773861, 2570832044,
            2108100632, 1668212892, 3145456443, 2013908262, 418672217,
            3070356634, 2594734927, 1852171925, 3867060991, 3473416636,
            3907448597, 2614737639, 919489135, 164948639, 2094410160,
            2997825956, 590424639, 2486224549, 1723872674, 3157750862,
            3399941250, 3501252752, 3625268135, 2555048196, 3673637356,
            1343127501, 4130281361, 3599595085, 2957853679, 1297403050,
            81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974,
            895287692, 1953757831, 1093597963, 492483431, 3528626907,
            1446242576, 1192455638, 1636604631, 209336225, 344873464,
            1015671571, 669961897, 3375740769, 3857572124, 2973530695,
            3747192018, 1933530610, 3464042516, 935293895, 3454686199,
            2858115069, 1863638845, 3683022916, 4085369519, 3292445032,
            875313188, 1080017571, 3279033885, 621591778, 1233856572,
            2504130317, 24197544, 3017672716, 3835484340, 3247465558,
            2220981195, 3060847922, 1551124588, 1463996600,
          ],
          A = [
            4104605777, 1097159550, 396673818, 660510266, 2875968315,
            2638606623, 4200115116, 3808662347, 821712160, 1986918061,
            3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325,
            2975484382, 3122358053, 3926825029, 4274053469, 796197571,
            1290801793, 1184342925, 3556361835, 2405426947, 2459735317,
            1836772287, 1381620373, 3196267988, 1948373848, 3764988233,
            3385345166, 3263785589, 2390325492, 1480485785, 3111247143,
            3780097726, 2293045232, 548169417, 3459953789, 3746175075,
            439452389, 1362321559, 1400849762, 1685577905, 1806599355,
            2174754046, 137073913, 1214797936, 1174215055, 3731654548,
            2079897426, 1943217067, 1258480242, 529487843, 1437280870,
            3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299,
            57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110,
            3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170,
            2330014213, 4142626212, 2213296395, 1626319424, 1906247262,
            1846563261, 562755902, 3708173718, 1040559837, 3871163981,
            1418573201, 3294430577, 114585348, 1343618912, 2566595609,
            3186202582, 1078185097, 3651041127, 3896688048, 2307622919,
            425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0,
            2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775,
            2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204,
            174567692, 1474760595, 4002861748, 2610011675, 3234156416,
            3693126241, 2001430874, 303699484, 2478443234, 2687165888,
            585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284,
            4044981591, 1963412655, 2581445614, 2137062819, 19308535,
            1928707164, 1715193156, 4219352155, 1126790795, 600235211,
            3992742070, 3841024952, 836553431, 1669664834, 2535604243,
            3323011204, 1243905413, 3141400786, 4180808110, 698445255,
            2653899549, 2989552604, 2253581325, 3252932727, 3004591147,
            1891211689, 2487810577, 3915653703, 4237083816, 4030667424,
            2100090966, 865136418, 1229899655, 953270745, 3399679628,
            3557504664, 4118925222, 2061379749, 3079546586, 2915017791,
            983426092, 2022837584, 1607244650, 2118541908, 2366882550,
            3635996816, 972512814, 3283088770, 1568718495, 3499326569,
            3576539503, 621982671, 2895723464, 410887952, 2623762152,
            1002142683, 645401037, 1494807662, 2595684844, 1335535747,
            2507040230, 4293295786, 3167684641, 367585007, 3885750714,
            1865862730, 2668221674, 2960971305, 2763173681, 1059270954,
            2777952454, 2724642869, 1320957812, 2194319100, 2429595872,
            2815956275, 77089521, 3973773121, 3444575871, 2448830231,
            1305906550, 4021308739, 2857194700, 2516901860, 3518358430,
            1787304780, 740276417, 1699839814, 1592394909, 2352307457,
            2272556026, 188821243, 1729977011, 3687994002, 274084841,
            3594982253, 3613494426, 2701949495, 4162096729, 322734571,
            2837966542, 1640576439, 484830689, 1202797690, 3537852828,
            4067639125, 349075736, 3342319475, 4157467219, 4255800159,
            1030690015, 1155237496, 2951971274, 1757691577, 607398968,
            2738905026, 499347990, 3794078908, 1011452712, 227885567,
            2818666809, 213114376, 3034881240, 1455525988, 3414450555,
            850817237, 1817998408, 3092726480,
          ],
          w = [
            0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554,
            708780849, 1883793496, 2118214995, 1817866830, 1649639237,
            1215061108, 1181045119, 1417561698, 1517767529, 3767586992,
            4003061179, 4236429990, 4069246893, 3635733660, 3602770327,
            3299278474, 3400528769, 2430122216, 2664543715, 2362090238,
            2193862645, 2835123396, 2801107407, 3035535058, 3135740889,
            3678124923, 3576870512, 3341394285, 3374361702, 3810496343,
            3977675356, 4279080257, 4043610186, 2876494627, 2776292904,
            3076639029, 3110650942, 2472011535, 2640243204, 2403728665,
            2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847,
            226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501,
            1509430414, 1942435775, 2110667444, 1876241833, 1641816226,
            2910219766, 2743034109, 2976151520, 3211623147, 2505202138,
            2606453969, 2302690252, 2269728455, 3711829422, 3543599269,
            3240894392, 3475313331, 3843699074, 3943906441, 4178062228,
            4144047775, 1306967366, 1139781709, 1374988112, 1610459739,
            1975683434, 2076935265, 1775276924, 1742315127, 1034867998,
            866637845, 566021896, 800440835, 92987698, 193195065, 429456164,
            395441711, 1984812685, 2017778566, 1784663195, 1683407248,
            1315562145, 1080094634, 1383856311, 1551037884, 101039829,
            135050206, 437757123, 337553864, 1042385657, 807962610, 573804783,
            742039012, 2531067453, 2564033334, 2328828971, 2227573024,
            2935566865, 2700099354, 3001755655, 3168937228, 3868552805,
            3902563182, 4203181171, 4102977912, 3736164937, 3501741890,
            3265478751, 3433712980, 1106041591, 1340463100, 1576976609,
            1408749034, 2043211483, 2009195472, 1708848333, 1809054150,
            832877231, 1068351396, 766945465, 599762354, 159417987, 126454664,
            361929877, 463180190, 2709260871, 2943682380, 3178106961,
            3009879386, 2572697195, 2538681184, 2236228733, 2336434550,
            3509871135, 3745345300, 3441850377, 3274667266, 3910161971,
            3877198648, 4110568485, 4211818798, 2597806476, 2497604743,
            2261089178, 2295101073, 2733856160, 2902087851, 3202437046,
            2968011453, 3936291284, 3835036895, 4136440770, 4169408201,
            3535486456, 3702665459, 3467192302, 3231722213, 2051518780,
            1951317047, 1716890410, 1750902305, 1113818384, 1282050075,
            1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761,
            841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234,
            4035489047, 4269907996, 3569255213, 3669462566, 3366754619,
            3332740144, 2631065433, 2463879762, 2160117071, 2395588676,
            2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362,
            270040487, 504459436, 875451293, 975658646, 675039627, 641025152,
            2084704233, 1917518562, 1615861247, 1851332852, 1147550661,
            1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972,
            632953703, 260388950, 25965917, 328671808, 496906059, 1206477858,
            1239443753, 1543208500, 1441952575, 2144161806, 1908694277,
            1675577880, 1842759443, 3610369226, 3644379585, 3408119516,
            3307916247, 4011190502, 3776767469, 4077384432, 4245618683,
            2809771154, 2842737049, 3144396420, 3043140495, 2673705150,
            2438237621, 2203032232, 2370213795,
          ],
          E = [
            0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694,
            824852259, 1483753576, 1400783205, 1315723890, 1164071807,
            1950903388, 2135319889, 1649704518, 1767536459, 2967507152,
            3152976349, 2801566410, 2918353863, 2631447780, 2547432937,
            2328143614, 2177544179, 3901806776, 3818836405, 4270639778,
            4118987695, 3299409036, 3483825537, 3535072918, 3652904859,
            2077965243, 1893020342, 1841768865, 1724457132, 1474502543,
            1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569,
            1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355,
            3224740454, 3710368113, 3593056380, 3875770207, 3960309330,
            4045380933, 4195456072, 2471224067, 2554718734, 2237133081,
            2388260884, 3212035895, 3028143674, 2842678573, 2724322336,
            4138563181, 4255350624, 3769721975, 3955191162, 3667219033,
            3516619604, 3431546947, 3347532110, 2933734917, 2782082824,
            3099667487, 3016697106, 2196052529, 2313884476, 2499348523,
            2683765030, 1179510461, 1296297904, 1347548327, 1533017514,
            1786102409, 1635502980, 2087309459, 2003294622, 507358933,
            355706840, 136428751, 53458370, 839224033, 957055980, 605657339,
            790073846, 2373340630, 2256028891, 2607439820, 2422494913,
            2706270690, 2856345839, 3075636216, 3160175349, 3573941694,
            3725069491, 3273267108, 3356761769, 4181598602, 4063242375,
            4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369,
            296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147,
            1945798516, 2029293177, 1239331162, 1120974935, 1606591296,
            1422699085, 4148292826, 4233094615, 3781033664, 3931371469,
            3682191598, 3497509347, 3446004468, 3328955385, 2939266226,
            2755636671, 3106780840, 2988687269, 2198438022, 2282195339,
            2501218972, 2652609425, 1201765386, 1286567175, 1371368976,
            1521706781, 1805211710, 1620529459, 2105887268, 1988838185,
            533804130, 350174575, 164439672, 46346101, 870912086, 954669403,
            636813900, 788204353, 2358957921, 2274680428, 2592523643,
            2441661558, 2695033685, 2880240216, 3065962831, 3182487618,
            3572145929, 3756299780, 3270937875, 3388507166, 4174560061,
            4091327024, 4006521127, 3854606378, 1014646705, 930369212,
            711349675, 560487590, 272786309, 457992840, 106852767, 223377554,
            1678381017, 1862534868, 1914052035, 2031621326, 1211247597,
            1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597,
            486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823,
            1385356242, 1333838021, 1150208456, 1973745387, 2125135846,
            1673061617, 1756818940, 2970356327, 3120694122, 2802849917,
            2887651696, 2637442643, 2520393566, 2334669897, 2149987652,
            3917234703, 3799141122, 4284502037, 4100872472, 3309594171,
            3460984630, 3545789473, 3629546796, 2050466060, 1899603969,
            1814803222, 1730525723, 1443857720, 1560382517, 1075025698,
            1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656,
            91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486,
            3620022987, 3874428392, 3990953189, 4042459122, 4227665663,
            2460449204, 2578018489, 2226875310, 2411029155, 3198115200,
            3046200461, 2827177882, 2743944855,
          ],
          x = [
            0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294,
            590424639, 1750626376, 1699970625, 1917742170, 2135253587,
            1551124588, 1367295589, 1180849278, 1265195639, 3501252752,
            3720081049, 3399941250, 3350065803, 3835484340, 3919042237,
            4270507174, 4085369519, 3102249176, 3051593425, 2734591178,
            2952102595, 2361698556, 2177869557, 2530391278, 2614737639,
            3145456443, 3060847922, 2708326185, 2892417312, 2404901663,
            2187128086, 2504130317, 2555048196, 3542330227, 3727205754,
            3375740769, 3292445032, 3876557655, 3926170974, 4246310725,
            4027744588, 1808481195, 1723872674, 1910319033, 2094410160,
            1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394,
            428169201, 344873464, 935293895, 984907214, 766078933, 547512796,
            1844882806, 1627235199, 2011214180, 2062270317, 1507497298,
            1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772,
            313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286,
            2957853679, 2807058932, 2858115069, 2305455554, 2220981195,
            2474404304, 2658625497, 3575528878, 3625268135, 3473416636,
            3254988725, 3778151818, 3963161475, 4213447064, 4130281361,
            3599595085, 3683022916, 3432737375, 3247465558, 3802222185,
            4020912224, 4172763771, 4122762354, 3201631749, 3017672716,
            2764249623, 2848461854, 2331590177, 2280796200, 2431590963,
            2648976442, 104699613, 188127444, 472615631, 287343814, 840019705,
            1058709744, 671593195, 621591778, 1852171925, 1668212892,
            1953757831, 2037970062, 1514790577, 1463996600, 1080017571,
            1297403050, 3673637356, 3623636965, 3235995134, 3454686199,
            4007360968, 3822090177, 4107101658, 4190530515, 2997825956,
            3215212461, 2830708150, 2779915199, 2256734592, 2340947849,
            2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431,
            1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845,
            2013908262, 1963115311, 1446242576, 1530455833, 1277555970,
            1093597963, 1636604631, 1820824798, 2073724613, 1989249228,
            1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910,
            331544205, 516552836, 1039717051, 821288114, 669961897, 719700128,
            2973530695, 3157750862, 2871682645, 2787207260, 2232435299,
            2283490410, 2667994737, 2450346104, 3647212047, 3564045318,
            3279033885, 3464042516, 3980931627, 3762502690, 4150144569,
            4199882800, 3070356634, 3121275539, 2904027272, 2686254721,
            2200818878, 2384911031, 2570832044, 2486224549, 3747192018,
            3528626907, 3310321856, 3359936201, 3950355702, 3867060991,
            4049844452, 4234721005, 1739656202, 1790575107, 2108100632,
            1890328081, 1402811438, 1586903591, 1233856572, 1149249077,
            266959938, 48394827, 369057872, 418672217, 1002783846, 919489135,
            567498868, 752375421, 209336225, 24197544, 376187827, 459744698,
            945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568,
            2117360635, 1933530610, 1343127501, 1560637892, 1243112415,
            1192455638, 3704280881, 3519142200, 3336358691, 3419915562,
            3907448597, 3857572124, 4075877127, 4294704398, 3029510009,
            3113855344, 2927934315, 2744104290, 2159976285, 2377486676,
            2594734927, 2544078150,
          ],
          S = [
            0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204,
            1059270954, 1214797936, 1097159550, 1517440620, 1400849762,
            1817998408, 1699839814, 2118541908, 2001430874, 2429595872,
            2581445614, 2194319100, 2345119218, 3034881240, 3186202582,
            2801699524, 2951971274, 3635996816, 3518358430, 3399679628,
            3283088770, 4237083816, 4118925222, 4002861748, 3885750714,
            1002142683, 850817237, 698445255, 548169417, 529487843, 377642221,
            227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577,
            1474760595, 1592394909, 1174215055, 1290801793, 2875968315,
            2724642869, 3111247143, 2960971305, 2405426947, 2253581325,
            2638606623, 2487810577, 3808662347, 3926825029, 4044981591,
            4162096729, 3342319475, 3459953789, 3576539503, 3693126241,
            1986918061, 2137062819, 1685577905, 1836772287, 1381620373,
            1532285339, 1078185097, 1229899655, 1040559837, 923313619,
            740276417, 621982671, 439452389, 322734571, 137073913, 19308535,
            3871163981, 4021308739, 4104605777, 4255800159, 3263785589,
            3414450555, 3499326569, 3651041127, 2933202493, 2815956275,
            3167684641, 3049390895, 2330014213, 2213296395, 2566595609,
            2448830231, 1305906550, 1155237496, 1607244650, 1455525988,
            1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376,
            396673818, 514443284, 562755902, 679998e3, 865136418, 983426092,
            3708173718, 3557504664, 3474729866, 3323011204, 4180808110,
            4030667424, 3945269170, 3794078908, 2507040230, 2623762152,
            2272556026, 2390325492, 2975484382, 3092726480, 2738905026,
            2857194700, 3973773121, 3856137295, 4274053469, 4157467219,
            3371096953, 3252932727, 3673476453, 3556361835, 2763173681,
            2915017791, 3064510765, 3215307299, 2156299017, 2307622919,
            2459735317, 2610011675, 2081048481, 1963412655, 1846563261,
            1729977011, 1480485785, 1362321559, 1243905413, 1126790795,
            878845905, 1030690015, 645401037, 796197571, 274084841, 425408743,
            38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568,
            4082475170, 4200115116, 3780097726, 3896688048, 2668221674,
            2516901860, 2366882550, 2216610296, 3141400786, 2989552604,
            2837966542, 2687165888, 1202797690, 1320957812, 1437280870,
            1554391400, 1669664834, 1787304780, 1906247262, 2022837584,
            265905162, 114585348, 499347990, 349075736, 736970802, 585122620,
            972512814, 821712160, 2595684844, 2478443234, 2293045232,
            2174754046, 3196267988, 3079546586, 2895723464, 2777952454,
            3537852828, 3687994002, 3234156416, 3385345166, 4142626212,
            4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952,
            292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068,
            1258480242, 1343618912, 1494807662, 1715193156, 1865862730,
            1948373848, 2100090966, 2701949495, 2818666809, 3004591147,
            3122358053, 2235061775, 2352307457, 2535604243, 2653899549,
            3915653703, 3764988233, 4219352155, 4067639125, 3444575871,
            3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211,
            718002117, 367585007, 484830689, 133361907, 251657213, 2041877159,
            1891211689, 1806599355, 1654886325, 1568718495, 1418573201,
            1335535747, 1184342925,
          ];
        function P(e) {
          for (var t = [], r = 0; r < e.length; r += 4)
            t.push(
              (e[r] << 24) | (e[r + 1] << 16) | (e[r + 2] << 8) | e[r + 3]
            );
          return t;
        }
        var O = function (e) {
          if (!(this instanceof O))
            throw Error("AES must be instanitated with `new`");
          Object.defineProperty(this, "key", { value: i(e, !0) }),
            this._prepare();
        };
        (O.prototype._prepare = function () {
          var e = u[this.key.length];
          if (null == e)
            throw Error("invalid key size (must be 16, 24 or 32 bytes)");
          (this._Ke = []), (this._Kd = []);
          for (var t = 0; t <= e; t++)
            this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
          for (
            var r = (e + 1) * 4,
              n = this.key.length / 4,
              i = P(this.key),
              t = 0;
            t < n;
            t++
          )
            (o = t >> 2),
              (this._Ke[o][t % 4] = i[t]),
              (this._Kd[e - o][t % 4] = i[t]);
          for (var o, s, a = 0, l = n; l < r; ) {
            if (
              ((s = i[n - 1]),
              (i[0] ^=
                (f[(s >> 16) & 255] << 24) ^
                (f[(s >> 8) & 255] << 16) ^
                (f[255 & s] << 8) ^
                f[(s >> 24) & 255] ^
                (c[a] << 24)),
              (a += 1),
              8 != n)
            )
              for (var t = 1; t < n; t++) i[t] ^= i[t - 1];
            else {
              for (var t = 1; t < n / 2; t++) i[t] ^= i[t - 1];
              (s = i[n / 2 - 1]),
                (i[n / 2] ^=
                  f[255 & s] ^
                  (f[(s >> 8) & 255] << 8) ^
                  (f[(s >> 16) & 255] << 16) ^
                  (f[(s >> 24) & 255] << 24));
              for (var t = n / 2 + 1; t < n; t++) i[t] ^= i[t - 1];
            }
            for (var h, d, t = 0; t < n && l < r; )
              (h = l >> 2),
                (d = l % 4),
                (this._Ke[h][d] = i[t]),
                (this._Kd[e - h][d] = i[t++]),
                l++;
          }
          for (var h = 1; h < e; h++)
            for (var d = 0; d < 4; d++)
              (s = this._Kd[h][d]),
                (this._Kd[h][d] =
                  w[(s >> 24) & 255] ^
                  E[(s >> 16) & 255] ^
                  x[(s >> 8) & 255] ^
                  S[255 & s]);
        }),
          (O.prototype.encrypt = function (e) {
            if (16 != e.length)
              throw Error("invalid plaintext size (must be 16 bytes)");
            for (
              var t = this._Ke.length - 1, r = [0, 0, 0, 0], n = P(e), i = 0;
              i < 4;
              i++
            )
              n[i] ^= this._Ke[0][i];
            for (var s = 1; s < t; s++) {
              for (var i = 0; i < 4; i++)
                r[i] =
                  d[(n[i] >> 24) & 255] ^
                  p[(n[(i + 1) % 4] >> 16) & 255] ^
                  g[(n[(i + 2) % 4] >> 8) & 255] ^
                  m[255 & n[(i + 3) % 4]] ^
                  this._Ke[s][i];
              n = r.slice();
            }
            for (var a, l = o(16), i = 0; i < 4; i++)
              (a = this._Ke[t][i]),
                (l[4 * i] = (f[(n[i] >> 24) & 255] ^ (a >> 24)) & 255),
                (l[4 * i + 1] =
                  (f[(n[(i + 1) % 4] >> 16) & 255] ^ (a >> 16)) & 255),
                (l[4 * i + 2] =
                  (f[(n[(i + 2) % 4] >> 8) & 255] ^ (a >> 8)) & 255),
                (l[4 * i + 3] = (f[255 & n[(i + 3) % 4]] ^ a) & 255);
            return l;
          }),
          (O.prototype.decrypt = function (e) {
            if (16 != e.length)
              throw Error("invalid ciphertext size (must be 16 bytes)");
            for (
              var t = this._Kd.length - 1, r = [0, 0, 0, 0], n = P(e), i = 0;
              i < 4;
              i++
            )
              n[i] ^= this._Kd[0][i];
            for (var s = 1; s < t; s++) {
              for (var i = 0; i < 4; i++)
                r[i] =
                  y[(n[i] >> 24) & 255] ^
                  v[(n[(i + 3) % 4] >> 16) & 255] ^
                  b[(n[(i + 2) % 4] >> 8) & 255] ^
                  A[255 & n[(i + 1) % 4]] ^
                  this._Kd[s][i];
              n = r.slice();
            }
            for (var a, l = o(16), i = 0; i < 4; i++)
              (a = this._Kd[t][i]),
                (l[4 * i] = (h[(n[i] >> 24) & 255] ^ (a >> 24)) & 255),
                (l[4 * i + 1] =
                  (h[(n[(i + 3) % 4] >> 16) & 255] ^ (a >> 16)) & 255),
                (l[4 * i + 2] =
                  (h[(n[(i + 2) % 4] >> 8) & 255] ^ (a >> 8)) & 255),
                (l[4 * i + 3] = (h[255 & n[(i + 1) % 4]] ^ a) & 255);
            return l;
          });
        var k = function (e) {
          if (!(this instanceof k))
            throw Error("AES must be instanitated with `new`");
          (this.description = "Electronic Code Block"),
            (this.name = "ecb"),
            (this._aes = new O(e));
        };
        (k.prototype.encrypt = function (e) {
          if ((e = i(e)).length % 16 != 0)
            throw Error(
              "invalid plaintext size (must be multiple of 16 bytes)"
            );
          for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16)
            s(e, r, 0, n, n + 16), s((r = this._aes.encrypt(r)), t, n);
          return t;
        }),
          (k.prototype.decrypt = function (e) {
            if ((e = i(e)).length % 16 != 0)
              throw Error(
                "invalid ciphertext size (must be multiple of 16 bytes)"
              );
            for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16)
              s(e, r, 0, n, n + 16), s((r = this._aes.decrypt(r)), t, n);
            return t;
          });
        var _ = function (e, t) {
          if (!(this instanceof _))
            throw Error("AES must be instanitated with `new`");
          if (
            ((this.description = "Cipher Block Chaining"),
            (this.name = "cbc"),
            t)
          ) {
            if (16 != t.length)
              throw Error(
                "invalid initialation vector size (must be 16 bytes)"
              );
          } else t = o(16);
          (this._lastCipherblock = i(t, !0)), (this._aes = new O(e));
        };
        (_.prototype.encrypt = function (e) {
          if ((e = i(e)).length % 16 != 0)
            throw Error(
              "invalid plaintext size (must be multiple of 16 bytes)"
            );
          for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16) {
            s(e, r, 0, n, n + 16);
            for (var a = 0; a < 16; a++) r[a] ^= this._lastCipherblock[a];
            (this._lastCipherblock = this._aes.encrypt(r)),
              s(this._lastCipherblock, t, n);
          }
          return t;
        }),
          (_.prototype.decrypt = function (e) {
            if ((e = i(e)).length % 16 != 0)
              throw Error(
                "invalid ciphertext size (must be multiple of 16 bytes)"
              );
            for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16) {
              s(e, r, 0, n, n + 16), (r = this._aes.decrypt(r));
              for (var a = 0; a < 16; a++)
                t[n + a] = r[a] ^ this._lastCipherblock[a];
              s(e, this._lastCipherblock, 0, n, n + 16);
            }
            return t;
          });
        var C = function (e, t, r) {
          if (!(this instanceof C))
            throw Error("AES must be instanitated with `new`");
          if (
            ((this.description = "Cipher Feedback"), (this.name = "cfb"), t)
          ) {
            if (16 != t.length)
              throw Error("invalid initialation vector size (must be 16 size)");
          } else t = o(16);
          r || (r = 1),
            (this.segmentSize = r),
            (this._shiftRegister = i(t, !0)),
            (this._aes = new O(e));
        };
        (C.prototype.encrypt = function (e) {
          if (e.length % this.segmentSize != 0)
            throw Error("invalid plaintext size (must be segmentSize bytes)");
          for (
            var t, r = i(e, !0), n = 0;
            n < r.length;
            n += this.segmentSize
          ) {
            t = this._aes.encrypt(this._shiftRegister);
            for (var o = 0; o < this.segmentSize; o++) r[n + o] ^= t[o];
            s(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
              s(
                r,
                this._shiftRegister,
                16 - this.segmentSize,
                n,
                n + this.segmentSize
              );
          }
          return r;
        }),
          (C.prototype.decrypt = function (e) {
            if (e.length % this.segmentSize != 0)
              throw Error(
                "invalid ciphertext size (must be segmentSize bytes)"
              );
            for (
              var t, r = i(e, !0), n = 0;
              n < r.length;
              n += this.segmentSize
            ) {
              t = this._aes.encrypt(this._shiftRegister);
              for (var o = 0; o < this.segmentSize; o++) r[n + o] ^= t[o];
              s(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
                s(
                  e,
                  this._shiftRegister,
                  16 - this.segmentSize,
                  n,
                  n + this.segmentSize
                );
            }
            return r;
          });
        var N = function (e, t) {
          if (!(this instanceof N))
            throw Error("AES must be instanitated with `new`");
          if (
            ((this.description = "Output Feedback"), (this.name = "ofb"), t)
          ) {
            if (16 != t.length)
              throw Error(
                "invalid initialation vector size (must be 16 bytes)"
              );
          } else t = o(16);
          (this._lastPrecipher = i(t, !0)),
            (this._lastPrecipherIndex = 16),
            (this._aes = new O(e));
        };
        (N.prototype.encrypt = function (e) {
          for (var t = i(e, !0), r = 0; r < t.length; r++)
            16 === this._lastPrecipherIndex &&
              ((this._lastPrecipher = this._aes.encrypt(this._lastPrecipher)),
              (this._lastPrecipherIndex = 0)),
              (t[r] ^= this._lastPrecipher[this._lastPrecipherIndex++]);
          return t;
        }),
          (N.prototype.decrypt = N.prototype.encrypt);
        var R = function (e) {
          if (!(this instanceof R))
            throw Error("Counter must be instanitated with `new`");
          0 === e || e || (e = 1),
            "number" == typeof e
              ? ((this._counter = o(16)), this.setValue(e))
              : this.setBytes(e);
        };
        (R.prototype.setValue = function (e) {
          if ("number" != typeof e || parseInt(e) != e)
            throw Error("invalid counter value (must be an integer)");
          for (var t = 15; t >= 0; --t) (this._counter[t] = e % 256), (e >>= 8);
        }),
          (R.prototype.setBytes = function (e) {
            if (16 != (e = i(e, !0)).length)
              throw Error("invalid counter bytes size (must be 16 bytes)");
            this._counter = e;
          }),
          (R.prototype.increment = function () {
            for (var e = 15; e >= 0; e--)
              if (255 === this._counter[e]) this._counter[e] = 0;
              else {
                this._counter[e]++;
                break;
              }
          });
        var T = function (e, t) {
          if (!(this instanceof T))
            throw Error("AES must be instanitated with `new`");
          (this.description = "Counter"),
            (this.name = "ctr"),
            t instanceof R || (t = new R(t)),
            (this._counter = t),
            (this._remainingCounter = null),
            (this._remainingCounterIndex = 16),
            (this._aes = new O(e));
        };
        (T.prototype.encrypt = function (e) {
          for (var t = i(e, !0), r = 0; r < t.length; r++)
            16 === this._remainingCounterIndex &&
              ((this._remainingCounter = this._aes.encrypt(
                this._counter._counter
              )),
              (this._remainingCounterIndex = 0),
              this._counter.increment()),
              (t[r] ^= this._remainingCounter[this._remainingCounterIndex++]);
          return t;
        }),
          (T.prototype.decrypt = T.prototype.encrypt),
          (e.exports = {
            AES: O,
            Counter: R,
            ModeOfOperation: { ecb: k, cbc: _, cfb: C, ofb: N, ctr: T },
            utils: {
              hex: l,
              utf8: {
                toBytes: function (e) {
                  var t = [],
                    r = 0;
                  for (e = encodeURI(e); r < e.length; ) {
                    var n = e.charCodeAt(r++);
                    37 === n
                      ? (t.push(parseInt(e.substr(r, 2), 16)), (r += 2))
                      : t.push(n);
                  }
                  return i(t);
                },
                fromBytes: function (e) {
                  for (var t = [], r = 0; r < e.length; ) {
                    var n = e[r];
                    n < 128
                      ? (t.push(String.fromCharCode(n)), r++)
                      : n > 191 && n < 224
                      ? (t.push(
                          String.fromCharCode(((31 & n) << 6) | (63 & e[r + 1]))
                        ),
                        (r += 2))
                      : (t.push(
                          String.fromCharCode(
                            ((15 & n) << 12) |
                              ((63 & e[r + 1]) << 6) |
                              (63 & e[r + 2])
                          )
                        ),
                        (r += 3));
                  }
                  return t.join("");
                },
              },
            },
            padding: {
              pkcs7: {
                pad: function (e) {
                  var t = 16 - ((e = i(e, !0)).length % 16),
                    r = o(e.length + t);
                  s(e, r);
                  for (var n = e.length; n < r.length; n++) r[n] = t;
                  return r;
                },
                strip: function (e) {
                  if ((e = i(e, !0)).length < 16)
                    throw Error("PKCS#7 invalid length");
                  var t = e[e.length - 1];
                  if (t > 16) throw Error("PKCS#7 padding byte out of range");
                  for (var r = e.length - t, n = 0; n < t; n++)
                    if (e[r + n] !== t)
                      throw Error("PKCS#7 invalid padding byte");
                  var a = o(r);
                  return s(e, a, 0, 0, r), a;
                },
              },
            },
            _arrayTest: { coerceArray: i, createArray: o, copyArray: s },
          });
      })(0);
    },
    21032: function (e) {
      "use strict";
      for (
        var t = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", r = {}, n = 0;
        n < t.length;
        n++
      ) {
        var i = t.charAt(n);
        if (void 0 !== r[i]) throw TypeError(i + " is ambiguous");
        r[i] = n;
      }
      function o(e) {
        var t = e >> 25;
        return (
          ((33554431 & e) << 5) ^
          (996825010 & -((t >> 0) & 1)) ^
          (642813549 & -((t >> 1) & 1)) ^
          (513874426 & -((t >> 2) & 1)) ^
          (1027748829 & -((t >> 3) & 1)) ^
          (705979059 & -((t >> 4) & 1))
        );
      }
      function s(e) {
        for (var t = 1, r = 0; r < e.length; ++r) {
          var n = e.charCodeAt(r);
          if (n < 33 || n > 126) return "Invalid prefix (" + e + ")";
          t = o(t) ^ (n >> 5);
        }
        for (r = 0, t = o(t); r < e.length; ++r) {
          var i = e.charCodeAt(r);
          t = o(t) ^ (31 & i);
        }
        return t;
      }
      function a(e, t) {
        if (((t = t || 90), e.length < 8)) return e + " too short";
        if (e.length > t) return "Exceeds length limit";
        var n = e.toLowerCase(),
          i = e.toUpperCase();
        if (e !== n && e !== i) return "Mixed-case string " + e;
        var a = (e = n).lastIndexOf("1");
        if (-1 === a) return "No separator character for " + e;
        if (0 === a) return "Missing prefix for " + e;
        var l = e.slice(0, a),
          u = e.slice(a + 1);
        if (u.length < 6) return "Data too short";
        var c = s(l);
        if ("string" == typeof c) return c;
        for (var f = [], h = 0; h < u.length; ++h) {
          var d = u.charAt(h),
            p = r[d];
          if (void 0 === p) return "Unknown character " + d;
          (c = o(c) ^ p), h + 6 >= u.length || f.push(p);
        }
        return 1 !== c ? "Invalid checksum for " + e : { prefix: l, words: f };
      }
      function l(e, t, r, n) {
        for (
          var i = 0, o = 0, s = (1 << r) - 1, a = [], l = 0;
          l < e.length;
          ++l
        )
          for (i = (i << t) | e[l], o += t; o >= r; )
            a.push((i >> (o -= r)) & s);
        if (n) o > 0 && a.push((i << (r - o)) & s);
        else {
          if (o >= t) return "Excess padding";
          if ((i << (r - o)) & s) return "Non-zero padding";
        }
        return a;
      }
      e.exports = {
        decodeUnsafe: function () {
          var e = a.apply(null, arguments);
          if ("object" == typeof e) return e;
        },
        decode: function (e) {
          var t = a.apply(null, arguments);
          if ("object" == typeof t) return t;
          throw Error(t);
        },
        encode: function (e, r, n) {
          if (((n = n || 90), e.length + 7 + r.length > n))
            throw TypeError("Exceeds length limit");
          var i = s((e = e.toLowerCase()));
          if ("string" == typeof i) throw Error(i);
          for (var a = e + "1", l = 0; l < r.length; ++l) {
            var u = r[l];
            if (u >> 5 != 0) throw Error("Non 5-bit word");
            (i = o(i) ^ u), (a += t.charAt(u));
          }
          for (l = 0; l < 6; ++l) i = o(i);
          for (i ^= 1, l = 0; l < 6; ++l) {
            var c = (i >> ((5 - l) * 5)) & 31;
            a += t.charAt(c);
          }
          return a;
        },
        toWordsUnsafe: function (e) {
          var t = l(e, 8, 5, !0);
          if (Array.isArray(t)) return t;
        },
        toWords: function (e) {
          var t = l(e, 8, 5, !0);
          if (Array.isArray(t)) return t;
          throw Error(t);
        },
        fromWordsUnsafe: function (e) {
          var t = l(e, 5, 8, !1);
          if (Array.isArray(t)) return t;
        },
        fromWords: function (e) {
          var t = l(e, 5, 8, !1);
          if (Array.isArray(t)) return t;
          throw Error(t);
        },
      };
    },
    42724: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return i(t, e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatBytes32String =
          t.Utf8ErrorFuncs =
          t.toUtf8String =
          t.toUtf8CodePoints =
          t.toUtf8Bytes =
          t._toEscapedUtf8String =
          t.nameprep =
          t.hexDataSlice =
          t.hexDataLength =
          t.hexZeroPad =
          t.hexValue =
          t.hexStripZeros =
          t.hexConcat =
          t.isHexString =
          t.hexlify =
          t.base64 =
          t.base58 =
          t.TransactionDescription =
          t.LogDescription =
          t.Interface =
          t.SigningKey =
          t.HDNode =
          t.defaultPath =
          t.isBytesLike =
          t.isBytes =
          t.zeroPad =
          t.stripZeros =
          t.concat =
          t.arrayify =
          t.shallowCopy =
          t.resolveProperties =
          t.getStatic =
          t.defineReadOnly =
          t.deepCopy =
          t.checkProperties =
          t.poll =
          t.fetchJson =
          t._fetchData =
          t.RLP =
          t.Logger =
          t.checkResultErrors =
          t.FormatTypes =
          t.ParamType =
          t.FunctionFragment =
          t.EventFragment =
          t.ErrorFragment =
          t.ConstructorFragment =
          t.Fragment =
          t.defaultAbiCoder =
          t.AbiCoder =
            void 0),
        (t.Indexed =
          t.Utf8ErrorReason =
          t.UnicodeNormalizationForm =
          t.SupportedAlgorithm =
          t.mnemonicToSeed =
          t.isValidMnemonic =
          t.entropyToMnemonic =
          t.mnemonicToEntropy =
          t.getAccountPath =
          t.verifyTypedData =
          t.verifyMessage =
          t.recoverPublicKey =
          t.computePublicKey =
          t.recoverAddress =
          t.computeAddress =
          t.getJsonWalletAddress =
          t.TransactionTypes =
          t.serializeTransaction =
          t.parseTransaction =
          t.accessListify =
          t.joinSignature =
          t.splitSignature =
          t.soliditySha256 =
          t.solidityKeccak256 =
          t.solidityPack =
          t.shuffled =
          t.randomBytes =
          t.sha512 =
          t.sha256 =
          t.ripemd160 =
          t.keccak256 =
          t.computeHmac =
          t.commify =
          t.parseUnits =
          t.formatUnits =
          t.parseEther =
          t.formatEther =
          t.isAddress =
          t.getCreate2Address =
          t.getContractAddress =
          t.getIcapAddress =
          t.getAddress =
          t._TypedDataEncoder =
          t.id =
          t.isValidName =
          t.namehash =
          t.hashMessage =
          t.dnsEncode =
          t.parseBytes32String =
            void 0);
      var s = r(74153);
      Object.defineProperty(t, "AbiCoder", {
        enumerable: !0,
        get: function () {
          return s.AbiCoder;
        },
      }),
        Object.defineProperty(t, "checkResultErrors", {
          enumerable: !0,
          get: function () {
            return s.checkResultErrors;
          },
        }),
        Object.defineProperty(t, "ConstructorFragment", {
          enumerable: !0,
          get: function () {
            return s.ConstructorFragment;
          },
        }),
        Object.defineProperty(t, "defaultAbiCoder", {
          enumerable: !0,
          get: function () {
            return s.defaultAbiCoder;
          },
        }),
        Object.defineProperty(t, "ErrorFragment", {
          enumerable: !0,
          get: function () {
            return s.ErrorFragment;
          },
        }),
        Object.defineProperty(t, "EventFragment", {
          enumerable: !0,
          get: function () {
            return s.EventFragment;
          },
        }),
        Object.defineProperty(t, "FormatTypes", {
          enumerable: !0,
          get: function () {
            return s.FormatTypes;
          },
        }),
        Object.defineProperty(t, "Fragment", {
          enumerable: !0,
          get: function () {
            return s.Fragment;
          },
        }),
        Object.defineProperty(t, "FunctionFragment", {
          enumerable: !0,
          get: function () {
            return s.FunctionFragment;
          },
        }),
        Object.defineProperty(t, "Indexed", {
          enumerable: !0,
          get: function () {
            return s.Indexed;
          },
        }),
        Object.defineProperty(t, "Interface", {
          enumerable: !0,
          get: function () {
            return s.Interface;
          },
        }),
        Object.defineProperty(t, "LogDescription", {
          enumerable: !0,
          get: function () {
            return s.LogDescription;
          },
        }),
        Object.defineProperty(t, "ParamType", {
          enumerable: !0,
          get: function () {
            return s.ParamType;
          },
        }),
        Object.defineProperty(t, "TransactionDescription", {
          enumerable: !0,
          get: function () {
            return s.TransactionDescription;
          },
        });
      var a = r(56805);
      Object.defineProperty(t, "getAddress", {
        enumerable: !0,
        get: function () {
          return a.getAddress;
        },
      }),
        Object.defineProperty(t, "getCreate2Address", {
          enumerable: !0,
          get: function () {
            return a.getCreate2Address;
          },
        }),
        Object.defineProperty(t, "getContractAddress", {
          enumerable: !0,
          get: function () {
            return a.getContractAddress;
          },
        }),
        Object.defineProperty(t, "getIcapAddress", {
          enumerable: !0,
          get: function () {
            return a.getIcapAddress;
          },
        }),
        Object.defineProperty(t, "isAddress", {
          enumerable: !0,
          get: function () {
            return a.isAddress;
          },
        });
      var l = o(r(47987));
      t.base64 = l;
      var u = r(94731);
      Object.defineProperty(t, "base58", {
        enumerable: !0,
        get: function () {
          return u.Base58;
        },
      });
      var c = r(7730);
      Object.defineProperty(t, "arrayify", {
        enumerable: !0,
        get: function () {
          return c.arrayify;
        },
      }),
        Object.defineProperty(t, "concat", {
          enumerable: !0,
          get: function () {
            return c.concat;
          },
        }),
        Object.defineProperty(t, "hexConcat", {
          enumerable: !0,
          get: function () {
            return c.hexConcat;
          },
        }),
        Object.defineProperty(t, "hexDataSlice", {
          enumerable: !0,
          get: function () {
            return c.hexDataSlice;
          },
        }),
        Object.defineProperty(t, "hexDataLength", {
          enumerable: !0,
          get: function () {
            return c.hexDataLength;
          },
        }),
        Object.defineProperty(t, "hexlify", {
          enumerable: !0,
          get: function () {
            return c.hexlify;
          },
        }),
        Object.defineProperty(t, "hexStripZeros", {
          enumerable: !0,
          get: function () {
            return c.hexStripZeros;
          },
        }),
        Object.defineProperty(t, "hexValue", {
          enumerable: !0,
          get: function () {
            return c.hexValue;
          },
        }),
        Object.defineProperty(t, "hexZeroPad", {
          enumerable: !0,
          get: function () {
            return c.hexZeroPad;
          },
        }),
        Object.defineProperty(t, "isBytes", {
          enumerable: !0,
          get: function () {
            return c.isBytes;
          },
        }),
        Object.defineProperty(t, "isBytesLike", {
          enumerable: !0,
          get: function () {
            return c.isBytesLike;
          },
        }),
        Object.defineProperty(t, "isHexString", {
          enumerable: !0,
          get: function () {
            return c.isHexString;
          },
        }),
        Object.defineProperty(t, "joinSignature", {
          enumerable: !0,
          get: function () {
            return c.joinSignature;
          },
        }),
        Object.defineProperty(t, "zeroPad", {
          enumerable: !0,
          get: function () {
            return c.zeroPad;
          },
        }),
        Object.defineProperty(t, "splitSignature", {
          enumerable: !0,
          get: function () {
            return c.splitSignature;
          },
        }),
        Object.defineProperty(t, "stripZeros", {
          enumerable: !0,
          get: function () {
            return c.stripZeros;
          },
        });
      var f = r(8749);
      Object.defineProperty(t, "_TypedDataEncoder", {
        enumerable: !0,
        get: function () {
          return f._TypedDataEncoder;
        },
      }),
        Object.defineProperty(t, "dnsEncode", {
          enumerable: !0,
          get: function () {
            return f.dnsEncode;
          },
        }),
        Object.defineProperty(t, "hashMessage", {
          enumerable: !0,
          get: function () {
            return f.hashMessage;
          },
        }),
        Object.defineProperty(t, "id", {
          enumerable: !0,
          get: function () {
            return f.id;
          },
        }),
        Object.defineProperty(t, "isValidName", {
          enumerable: !0,
          get: function () {
            return f.isValidName;
          },
        }),
        Object.defineProperty(t, "namehash", {
          enumerable: !0,
          get: function () {
            return f.namehash;
          },
        });
      var h = r(98937);
      Object.defineProperty(t, "defaultPath", {
        enumerable: !0,
        get: function () {
          return h.defaultPath;
        },
      }),
        Object.defineProperty(t, "entropyToMnemonic", {
          enumerable: !0,
          get: function () {
            return h.entropyToMnemonic;
          },
        }),
        Object.defineProperty(t, "getAccountPath", {
          enumerable: !0,
          get: function () {
            return h.getAccountPath;
          },
        }),
        Object.defineProperty(t, "HDNode", {
          enumerable: !0,
          get: function () {
            return h.HDNode;
          },
        }),
        Object.defineProperty(t, "isValidMnemonic", {
          enumerable: !0,
          get: function () {
            return h.isValidMnemonic;
          },
        }),
        Object.defineProperty(t, "mnemonicToEntropy", {
          enumerable: !0,
          get: function () {
            return h.mnemonicToEntropy;
          },
        }),
        Object.defineProperty(t, "mnemonicToSeed", {
          enumerable: !0,
          get: function () {
            return h.mnemonicToSeed;
          },
        });
      var d = r(81174);
      Object.defineProperty(t, "getJsonWalletAddress", {
        enumerable: !0,
        get: function () {
          return d.getJsonWalletAddress;
        },
      });
      var p = r(14752);
      Object.defineProperty(t, "keccak256", {
        enumerable: !0,
        get: function () {
          return p.keccak256;
        },
      });
      var g = r(67214);
      Object.defineProperty(t, "Logger", {
        enumerable: !0,
        get: function () {
          return g.Logger;
        },
      });
      var m = r(49183);
      Object.defineProperty(t, "computeHmac", {
        enumerable: !0,
        get: function () {
          return m.computeHmac;
        },
      }),
        Object.defineProperty(t, "ripemd160", {
          enumerable: !0,
          get: function () {
            return m.ripemd160;
          },
        }),
        Object.defineProperty(t, "sha256", {
          enumerable: !0,
          get: function () {
            return m.sha256;
          },
        }),
        Object.defineProperty(t, "sha512", {
          enumerable: !0,
          get: function () {
            return m.sha512;
          },
        });
      var y = r(17295);
      Object.defineProperty(t, "solidityKeccak256", {
        enumerable: !0,
        get: function () {
          return y.keccak256;
        },
      }),
        Object.defineProperty(t, "solidityPack", {
          enumerable: !0,
          get: function () {
            return y.pack;
          },
        }),
        Object.defineProperty(t, "soliditySha256", {
          enumerable: !0,
          get: function () {
            return y.sha256;
          },
        });
      var v = r(69472);
      Object.defineProperty(t, "randomBytes", {
        enumerable: !0,
        get: function () {
          return v.randomBytes;
        },
      }),
        Object.defineProperty(t, "shuffled", {
          enumerable: !0,
          get: function () {
            return v.shuffled;
          },
        });
      var b = r(50357);
      Object.defineProperty(t, "checkProperties", {
        enumerable: !0,
        get: function () {
          return b.checkProperties;
        },
      }),
        Object.defineProperty(t, "deepCopy", {
          enumerable: !0,
          get: function () {
            return b.deepCopy;
          },
        }),
        Object.defineProperty(t, "defineReadOnly", {
          enumerable: !0,
          get: function () {
            return b.defineReadOnly;
          },
        }),
        Object.defineProperty(t, "getStatic", {
          enumerable: !0,
          get: function () {
            return b.getStatic;
          },
        }),
        Object.defineProperty(t, "resolveProperties", {
          enumerable: !0,
          get: function () {
            return b.resolveProperties;
          },
        }),
        Object.defineProperty(t, "shallowCopy", {
          enumerable: !0,
          get: function () {
            return b.shallowCopy;
          },
        });
      var A = o(r(2585));
      t.RLP = A;
      var w = r(65653);
      Object.defineProperty(t, "computePublicKey", {
        enumerable: !0,
        get: function () {
          return w.computePublicKey;
        },
      }),
        Object.defineProperty(t, "recoverPublicKey", {
          enumerable: !0,
          get: function () {
            return w.recoverPublicKey;
          },
        }),
        Object.defineProperty(t, "SigningKey", {
          enumerable: !0,
          get: function () {
            return w.SigningKey;
          },
        });
      var E = r(93203);
      Object.defineProperty(t, "formatBytes32String", {
        enumerable: !0,
        get: function () {
          return E.formatBytes32String;
        },
      }),
        Object.defineProperty(t, "nameprep", {
          enumerable: !0,
          get: function () {
            return E.nameprep;
          },
        }),
        Object.defineProperty(t, "parseBytes32String", {
          enumerable: !0,
          get: function () {
            return E.parseBytes32String;
          },
        }),
        Object.defineProperty(t, "_toEscapedUtf8String", {
          enumerable: !0,
          get: function () {
            return E._toEscapedUtf8String;
          },
        }),
        Object.defineProperty(t, "toUtf8Bytes", {
          enumerable: !0,
          get: function () {
            return E.toUtf8Bytes;
          },
        }),
        Object.defineProperty(t, "toUtf8CodePoints", {
          enumerable: !0,
          get: function () {
            return E.toUtf8CodePoints;
          },
        }),
        Object.defineProperty(t, "toUtf8String", {
          enumerable: !0,
          get: function () {
            return E.toUtf8String;
          },
        }),
        Object.defineProperty(t, "Utf8ErrorFuncs", {
          enumerable: !0,
          get: function () {
            return E.Utf8ErrorFuncs;
          },
        });
      var x = r(11913);
      Object.defineProperty(t, "accessListify", {
        enumerable: !0,
        get: function () {
          return x.accessListify;
        },
      }),
        Object.defineProperty(t, "computeAddress", {
          enumerable: !0,
          get: function () {
            return x.computeAddress;
          },
        }),
        Object.defineProperty(t, "parseTransaction", {
          enumerable: !0,
          get: function () {
            return x.parse;
          },
        }),
        Object.defineProperty(t, "recoverAddress", {
          enumerable: !0,
          get: function () {
            return x.recoverAddress;
          },
        }),
        Object.defineProperty(t, "serializeTransaction", {
          enumerable: !0,
          get: function () {
            return x.serialize;
          },
        }),
        Object.defineProperty(t, "TransactionTypes", {
          enumerable: !0,
          get: function () {
            return x.TransactionTypes;
          },
        });
      var S = r(7027);
      Object.defineProperty(t, "commify", {
        enumerable: !0,
        get: function () {
          return S.commify;
        },
      }),
        Object.defineProperty(t, "formatEther", {
          enumerable: !0,
          get: function () {
            return S.formatEther;
          },
        }),
        Object.defineProperty(t, "parseEther", {
          enumerable: !0,
          get: function () {
            return S.parseEther;
          },
        }),
        Object.defineProperty(t, "formatUnits", {
          enumerable: !0,
          get: function () {
            return S.formatUnits;
          },
        }),
        Object.defineProperty(t, "parseUnits", {
          enumerable: !0,
          get: function () {
            return S.parseUnits;
          },
        });
      var P = r(11465);
      Object.defineProperty(t, "verifyMessage", {
        enumerable: !0,
        get: function () {
          return P.verifyMessage;
        },
      }),
        Object.defineProperty(t, "verifyTypedData", {
          enumerable: !0,
          get: function () {
            return P.verifyTypedData;
          },
        });
      var O = r(12982);
      Object.defineProperty(t, "_fetchData", {
        enumerable: !0,
        get: function () {
          return O._fetchData;
        },
      }),
        Object.defineProperty(t, "fetchJson", {
          enumerable: !0,
          get: function () {
            return O.fetchJson;
          },
        }),
        Object.defineProperty(t, "poll", {
          enumerable: !0,
          get: function () {
            return O.poll;
          },
        });
      var k = r(49183);
      Object.defineProperty(t, "SupportedAlgorithm", {
        enumerable: !0,
        get: function () {
          return k.SupportedAlgorithm;
        },
      });
      var _ = r(93203);
      Object.defineProperty(t, "UnicodeNormalizationForm", {
        enumerable: !0,
        get: function () {
          return _.UnicodeNormalizationForm;
        },
      }),
        Object.defineProperty(t, "Utf8ErrorReason", {
          enumerable: !0,
          get: function () {
            return _.Utf8ErrorReason;
          },
        });
    },
    20141: function (e, t, r) {
      (t.utils = r(21603)),
        (t.common = r(14984)),
        (t.sha = r(45393)),
        (t.ripemd = r(4643)),
        (t.hmac = r(53624)),
        (t.sha1 = t.sha.sha1),
        (t.sha256 = t.sha.sha256),
        (t.sha224 = t.sha.sha224),
        (t.sha384 = t.sha.sha384),
        (t.sha512 = t.sha.sha512),
        (t.ripemd160 = t.ripemd.ripemd160);
    },
    14984: function (e, t, r) {
      "use strict";
      var n = r(21603),
        i = r(5697);
      function o() {
        (this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = "big"),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32);
      }
      (t.BlockHash = o),
        (o.prototype.update = function (e, t) {
          if (
            ((e = n.toArray(e, t)),
            this.pending
              ? (this.pending = this.pending.concat(e))
              : (this.pending = e),
            (this.pendingTotal += e.length),
            this.pending.length >= this._delta8)
          ) {
            var r = (e = this.pending).length % this._delta8;
            (this.pending = e.slice(e.length - r, e.length)),
              0 === this.pending.length && (this.pending = null),
              (e = n.join32(e, 0, e.length - r, this.endian));
            for (var i = 0; i < e.length; i += this._delta32)
              this._update(e, i, i + this._delta32);
          }
          return this;
        }),
        (o.prototype.digest = function (e) {
          return (
            this.update(this._pad()), i(null === this.pending), this._digest(e)
          );
        }),
        (o.prototype._pad = function () {
          var e = this.pendingTotal,
            t = this._delta8,
            r = t - ((e + this.padLength) % t),
            n = Array(r + this.padLength);
          n[0] = 128;
          for (var i = 1; i < r; i++) n[i] = 0;
          if (((e <<= 3), "big" === this.endian)) {
            for (var o = 8; o < this.padLength; o++) n[i++] = 0;
            (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = (e >>> 24) & 255),
              (n[i++] = (e >>> 16) & 255),
              (n[i++] = (e >>> 8) & 255),
              (n[i++] = 255 & e);
          } else
            for (
              o = 8,
                n[i++] = 255 & e,
                n[i++] = (e >>> 8) & 255,
                n[i++] = (e >>> 16) & 255,
                n[i++] = (e >>> 24) & 255,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0;
              o < this.padLength;
              o++
            )
              n[i++] = 0;
          return n;
        });
    },
    53624: function (e, t, r) {
      "use strict";
      var n = r(21603),
        i = r(5697);
      function o(e, t, r) {
        if (!(this instanceof o)) return new o(e, t, r);
        (this.Hash = e),
          (this.blockSize = e.blockSize / 8),
          (this.outSize = e.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(n.toArray(t, r));
      }
      (e.exports = o),
        (o.prototype._init = function (e) {
          e.length > this.blockSize && (e = new this.Hash().update(e).digest()),
            i(e.length <= this.blockSize);
          for (var t = e.length; t < this.blockSize; t++) e.push(0);
          for (t = 0; t < e.length; t++) e[t] ^= 54;
          for (t = 0, this.inner = new this.Hash().update(e); t < e.length; t++)
            e[t] ^= 106;
          this.outer = new this.Hash().update(e);
        }),
        (o.prototype.update = function (e, t) {
          return this.inner.update(e, t), this;
        }),
        (o.prototype.digest = function (e) {
          return this.outer.update(this.inner.digest()), this.outer.digest(e);
        });
    },
    4643: function (e, t, r) {
      "use strict";
      var n = r(21603),
        i = r(14984),
        o = n.rotl32,
        s = n.sum32,
        a = n.sum32_3,
        l = n.sum32_4,
        u = i.BlockHash;
      function c() {
        if (!(this instanceof c)) return new c();
        u.call(this),
          (this.h = [
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]),
          (this.endian = "little");
      }
      function f(e, t, r, n) {
        return e <= 15
          ? t ^ r ^ n
          : e <= 31
          ? (t & r) | (~t & n)
          : e <= 47
          ? (t | ~r) ^ n
          : e <= 63
          ? (t & n) | (r & ~n)
          : t ^ (r | ~n);
      }
      n.inherits(c, u),
        (t.ripemd160 = c),
        (c.blockSize = 512),
        (c.outSize = 160),
        (c.hmacStrength = 192),
        (c.padLength = 64),
        (c.prototype._update = function (e, t) {
          for (
            var r = this.h[0],
              n = this.h[1],
              i = this.h[2],
              u = this.h[3],
              c = this.h[4],
              m = r,
              y = n,
              v = i,
              b = u,
              A = c,
              w = 0;
            w < 80;
            w++
          ) {
            var E,
              x,
              S = s(
                o(
                  l(
                    r,
                    f(w, n, i, u),
                    e[h[w] + t],
                    (E = w) <= 15
                      ? 0
                      : E <= 31
                      ? 1518500249
                      : E <= 47
                      ? 1859775393
                      : E <= 63
                      ? 2400959708
                      : 2840853838
                  ),
                  p[w]
                ),
                c
              );
            (r = c),
              (c = u),
              (u = o(i, 10)),
              (i = n),
              (n = S),
              (S = s(
                o(
                  l(
                    m,
                    f(79 - w, y, v, b),
                    e[d[w] + t],
                    (x = w) <= 15
                      ? 1352829926
                      : x <= 31
                      ? 1548603684
                      : x <= 47
                      ? 1836072691
                      : x <= 63
                      ? 2053994217
                      : 0
                  ),
                  g[w]
                ),
                A
              )),
              (m = A),
              (A = b),
              (b = o(v, 10)),
              (v = y),
              (y = S);
          }
          (S = a(this.h[1], i, b)),
            (this.h[1] = a(this.h[2], u, A)),
            (this.h[2] = a(this.h[3], c, m)),
            (this.h[3] = a(this.h[4], r, y)),
            (this.h[4] = a(this.h[0], n, v)),
            (this.h[0] = S);
        }),
        (c.prototype._digest = function (e) {
          return "hex" === e
            ? n.toHex32(this.h, "little")
            : n.split32(this.h, "little");
        });
      var h = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
          6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7,
          0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5,
          6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
        ],
        d = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
          13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
          12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
          14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
        ],
        p = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
          11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
          15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5,
          6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5,
          6,
        ],
        g = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
          12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14,
          12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9,
          12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
        ];
    },
    45393: function (e, t, r) {
      "use strict";
      (t.sha1 = r(28635)),
        (t.sha224 = r(79258)),
        (t.sha256 = r(73270)),
        (t.sha384 = r(47008)),
        (t.sha512 = r(27176));
    },
    28635: function (e, t, r) {
      "use strict";
      var n = r(21603),
        i = r(14984),
        o = r(82085),
        s = n.rotl32,
        a = n.sum32,
        l = n.sum32_5,
        u = o.ft_1,
        c = i.BlockHash,
        f = [1518500249, 1859775393, 2400959708, 3395469782];
      function h() {
        if (!(this instanceof h)) return new h();
        c.call(this),
          (this.h = [
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]),
          (this.W = Array(80));
      }
      n.inherits(h, c),
        (e.exports = h),
        (h.blockSize = 512),
        (h.outSize = 160),
        (h.hmacStrength = 80),
        (h.padLength = 64),
        (h.prototype._update = function (e, t) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
          for (; n < r.length; n++)
            r[n] = s(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
          var i = this.h[0],
            o = this.h[1],
            c = this.h[2],
            h = this.h[3],
            d = this.h[4];
          for (n = 0; n < r.length; n++) {
            var p = ~~(n / 20),
              g = l(s(i, 5), u(p, o, c, h), d, r[n], f[p]);
            (d = h), (h = c), (c = s(o, 30)), (o = i), (i = g);
          }
          (this.h[0] = a(this.h[0], i)),
            (this.h[1] = a(this.h[1], o)),
            (this.h[2] = a(this.h[2], c)),
            (this.h[3] = a(this.h[3], h)),
            (this.h[4] = a(this.h[4], d));
        }),
        (h.prototype._digest = function (e) {
          return "hex" === e
            ? n.toHex32(this.h, "big")
            : n.split32(this.h, "big");
        });
    },
    79258: function (e, t, r) {
      "use strict";
      var n = r(21603),
        i = r(73270);
      function o() {
        if (!(this instanceof o)) return new o();
        i.call(this),
          (this.h = [
            3238371032, 914150663, 812702999, 4144912697, 4290775857,
            1750603025, 1694076839, 3204075428,
          ]);
      }
      n.inherits(o, i),
        (e.exports = o),
        (o.blockSize = 512),
        (o.outSize = 224),
        (o.hmacStrength = 192),
        (o.padLength = 64),
        (o.prototype._digest = function (e) {
          return "hex" === e
            ? n.toHex32(this.h.slice(0, 7), "big")
            : n.split32(this.h.slice(0, 7), "big");
        });
    },
    73270: function (e, t, r) {
      "use strict";
      var n = r(21603),
        i = r(14984),
        o = r(82085),
        s = r(5697),
        a = n.sum32,
        l = n.sum32_4,
        u = n.sum32_5,
        c = o.ch32,
        f = o.maj32,
        h = o.s0_256,
        d = o.s1_256,
        p = o.g0_256,
        g = o.g1_256,
        m = i.BlockHash,
        y = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ];
      function v() {
        if (!(this instanceof v)) return new v();
        m.call(this),
          (this.h = [
            1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
            2600822924, 528734635, 1541459225,
          ]),
          (this.k = y),
          (this.W = Array(64));
      }
      n.inherits(v, m),
        (e.exports = v),
        (v.blockSize = 512),
        (v.outSize = 256),
        (v.hmacStrength = 192),
        (v.padLength = 64),
        (v.prototype._update = function (e, t) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
          for (; n < r.length; n++)
            r[n] = l(g(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
          var i = this.h[0],
            o = this.h[1],
            m = this.h[2],
            y = this.h[3],
            v = this.h[4],
            b = this.h[5],
            A = this.h[6],
            w = this.h[7];
          for (s(this.k.length === r.length), n = 0; n < r.length; n++) {
            var E = u(w, d(v), c(v, b, A), this.k[n], r[n]),
              x = a(h(i), f(i, o, m));
            (w = A),
              (A = b),
              (b = v),
              (v = a(y, E)),
              (y = m),
              (m = o),
              (o = i),
              (i = a(E, x));
          }
          (this.h[0] = a(this.h[0], i)),
            (this.h[1] = a(this.h[1], o)),
            (this.h[2] = a(this.h[2], m)),
            (this.h[3] = a(this.h[3], y)),
            (this.h[4] = a(this.h[4], v)),
            (this.h[5] = a(this.h[5], b)),
            (this.h[6] = a(this.h[6], A)),
            (this.h[7] = a(this.h[7], w));
        }),
        (v.prototype._digest = function (e) {
          return "hex" === e
            ? n.toHex32(this.h, "big")
            : n.split32(this.h, "big");
        });
    },
    47008: function (e, t, r) {
      "use strict";
      var n = r(21603),
        i = r(27176);
      function o() {
        if (!(this instanceof o)) return new o();
        i.call(this),
          (this.h = [
            3418070365, 3238371032, 1654270250, 914150663, 2438529370,
            812702999, 355462360, 4144912697, 1731405415, 4290775857,
            2394180231, 1750603025, 3675008525, 1694076839, 1203062813,
            3204075428,
          ]);
      }
      n.inherits(o, i),
        (e.exports = o),
        (o.blockSize = 1024),
        (o.outSize = 384),
        (o.hmacStrength = 192),
        (o.padLength = 128),
        (o.prototype._digest = function (e) {
          return "hex" === e
            ? n.toHex32(this.h.slice(0, 12), "big")
            : n.split32(this.h.slice(0, 12), "big");
        });
    },
    27176: function (e, t, r) {
      "use strict";
      var n = r(21603),
        i = r(14984),
        o = r(5697),
        s = n.rotr64_hi,
        a = n.rotr64_lo,
        l = n.shr64_hi,
        u = n.shr64_lo,
        c = n.sum64,
        f = n.sum64_hi,
        h = n.sum64_lo,
        d = n.sum64_4_hi,
        p = n.sum64_4_lo,
        g = n.sum64_5_hi,
        m = n.sum64_5_lo,
        y = i.BlockHash,
        v = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ];
      function b() {
        if (!(this instanceof b)) return new b();
        y.call(this),
          (this.h = [
            1779033703, 4089235720, 3144134277, 2227873595, 1013904242,
            4271175723, 2773480762, 1595750129, 1359893119, 2917565137,
            2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209,
          ]),
          (this.k = v),
          (this.W = Array(160));
      }
      n.inherits(b, y),
        (e.exports = b),
        (b.blockSize = 1024),
        (b.outSize = 512),
        (b.hmacStrength = 192),
        (b.padLength = 128),
        (b.prototype._prepareBlock = function (e, t) {
          for (var r = this.W, n = 0; n < 32; n++) r[n] = e[t + n];
          for (; n < r.length; n += 2) {
            var i = (function (e, t) {
                var r = s(e, t, 19) ^ s(t, e, 29) ^ l(e, t, 6);
                return r < 0 && (r += 4294967296), r;
              })(r[n - 4], r[n - 3]),
              o = (function (e, t) {
                var r = a(e, t, 19) ^ a(t, e, 29) ^ u(e, t, 6);
                return r < 0 && (r += 4294967296), r;
              })(r[n - 4], r[n - 3]),
              c = r[n - 14],
              f = r[n - 13],
              h = (function (e, t) {
                var r = s(e, t, 1) ^ s(e, t, 8) ^ l(e, t, 7);
                return r < 0 && (r += 4294967296), r;
              })(r[n - 30], r[n - 29]),
              g = (function (e, t) {
                var r = a(e, t, 1) ^ a(e, t, 8) ^ u(e, t, 7);
                return r < 0 && (r += 4294967296), r;
              })(r[n - 30], r[n - 29]),
              m = r[n - 32],
              y = r[n - 31];
            (r[n] = d(i, o, c, f, h, g, m, y)),
              (r[n + 1] = p(i, o, c, f, h, g, m, y));
          }
        }),
        (b.prototype._update = function (e, t) {
          this._prepareBlock(e, t);
          var r = this.W,
            n = this.h[0],
            i = this.h[1],
            l = this.h[2],
            u = this.h[3],
            d = this.h[4],
            p = this.h[5],
            y = this.h[6],
            v = this.h[7],
            b = this.h[8],
            A = this.h[9],
            w = this.h[10],
            E = this.h[11],
            x = this.h[12],
            S = this.h[13],
            P = this.h[14],
            O = this.h[15];
          o(this.k.length === r.length);
          for (var k = 0; k < r.length; k += 2) {
            var _ = P,
              C = O,
              N = (function (e, t) {
                var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
                return r < 0 && (r += 4294967296), r;
              })(b, A),
              R = (function (e, t) {
                var r = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9);
                return r < 0 && (r += 4294967296), r;
              })(b, A),
              T = (function (e, t, r, n, i) {
                var o = (e & r) ^ (~e & i);
                return o < 0 && (o += 4294967296), o;
              })(b, 0, w, 0, x, S),
              I = (function (e, t, r, n, i, o) {
                var s = (t & n) ^ (~t & o);
                return s < 0 && (s += 4294967296), s;
              })(0, A, 0, E, 0, S),
              B = this.k[k],
              L = this.k[k + 1],
              F = r[k],
              D = r[k + 1],
              M = g(_, C, N, R, T, I, B, L, F, D),
              U = m(_, C, N, R, T, I, B, L, F, D);
            _ = (function (e, t) {
              var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
              return r < 0 && (r += 4294967296), r;
            })(n, i);
            var j = f(
                _,
                (C = (function (e, t) {
                  var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7);
                  return r < 0 && (r += 4294967296), r;
                })(n, i)),
                (N = (function (e, t, r, n, i) {
                  var o = (e & r) ^ (e & i) ^ (r & i);
                  return o < 0 && (o += 4294967296), o;
                })(n, 0, l, 0, d, p)),
                (R = (function (e, t, r, n, i, o) {
                  var s = (t & n) ^ (t & o) ^ (n & o);
                  return s < 0 && (s += 4294967296), s;
                })(0, i, 0, u, 0, p))
              ),
              z = h(_, C, N, R);
            (P = x),
              (O = S),
              (x = w),
              (S = E),
              (w = b),
              (E = A),
              (b = f(y, v, M, U)),
              (A = h(v, v, M, U)),
              (y = d),
              (v = p),
              (d = l),
              (p = u),
              (l = n),
              (u = i),
              (n = f(M, U, j, z)),
              (i = h(M, U, j, z));
          }
          c(this.h, 0, n, i),
            c(this.h, 2, l, u),
            c(this.h, 4, d, p),
            c(this.h, 6, y, v),
            c(this.h, 8, b, A),
            c(this.h, 10, w, E),
            c(this.h, 12, x, S),
            c(this.h, 14, P, O);
        }),
        (b.prototype._digest = function (e) {
          return "hex" === e
            ? n.toHex32(this.h, "big")
            : n.split32(this.h, "big");
        });
    },
    82085: function (e, t, r) {
      "use strict";
      var n = r(21603).rotr32;
      function i(e, t, r) {
        return (e & t) ^ (e & r) ^ (t & r);
      }
      (t.ft_1 = function (e, t, r, n) {
        return 0 === e
          ? (t & r) ^ (~t & n)
          : 1 === e || 3 === e
          ? t ^ r ^ n
          : 2 === e
          ? i(t, r, n)
          : void 0;
      }),
        (t.ch32 = function (e, t, r) {
          return (e & t) ^ (~e & r);
        }),
        (t.maj32 = i),
        (t.p32 = function (e, t, r) {
          return e ^ t ^ r;
        }),
        (t.s0_256 = function (e) {
          return n(e, 2) ^ n(e, 13) ^ n(e, 22);
        }),
        (t.s1_256 = function (e) {
          return n(e, 6) ^ n(e, 11) ^ n(e, 25);
        }),
        (t.g0_256 = function (e) {
          return n(e, 7) ^ n(e, 18) ^ (e >>> 3);
        }),
        (t.g1_256 = function (e) {
          return n(e, 17) ^ n(e, 19) ^ (e >>> 10);
        });
    },
    21603: function (e, t, r) {
      "use strict";
      var n = r(5697),
        i = r(55566);
      function o(e) {
        return (
          ((e >>> 24) |
            ((e >>> 8) & 65280) |
            ((e << 8) & 16711680) |
            ((255 & e) << 24)) >>>
          0
        );
      }
      function s(e) {
        return 1 === e.length ? "0" + e : e;
      }
      function a(e) {
        if (7 === e.length) return "0" + e;
        if (6 === e.length) return "00" + e;
        if (5 === e.length) return "000" + e;
        if (4 === e.length) return "0000" + e;
        if (3 === e.length) return "00000" + e;
        if (2 === e.length) return "000000" + e;
        if (1 === e.length) return "0000000" + e;
        else return e;
      }
      (t.inherits = i),
        (t.toArray = function (e, t) {
          if (Array.isArray(e)) return e.slice();
          if (!e) return [];
          var r = [];
          if ("string" == typeof e) {
            if (t) {
              if ("hex" === t)
                for (
                  (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
                    (e = "0" + e),
                    i = 0;
                  i < e.length;
                  i += 2
                )
                  r.push(parseInt(e[i] + e[i + 1], 16));
            } else
              for (var n = 0, i = 0; i < e.length; i++) {
                var o,
                  s,
                  a = e.charCodeAt(i);
                a < 128
                  ? (r[n++] = a)
                  : (a < 2048
                      ? (r[n++] = (a >> 6) | 192)
                      : (((o = e),
                        (s = i),
                        (64512 & o.charCodeAt(s)) != 55296 ||
                        s < 0 ||
                        s + 1 >= o.length
                          ? 1
                          : (64512 & o.charCodeAt(s + 1)) != 56320)
                          ? (r[n++] = (a >> 12) | 224)
                          : ((a =
                              65536 +
                              ((1023 & a) << 10) +
                              (1023 & e.charCodeAt(++i))),
                            (r[n++] = (a >> 18) | 240),
                            (r[n++] = ((a >> 12) & 63) | 128)),
                        (r[n++] = ((a >> 6) & 63) | 128)),
                    (r[n++] = (63 & a) | 128));
              }
          } else for (i = 0; i < e.length; i++) r[i] = 0 | e[i];
          return r;
        }),
        (t.toHex = function (e) {
          for (var t = "", r = 0; r < e.length; r++) t += s(e[r].toString(16));
          return t;
        }),
        (t.htonl = o),
        (t.toHex32 = function (e, t) {
          for (var r = "", n = 0; n < e.length; n++) {
            var i = e[n];
            "little" === t && (i = o(i)), (r += a(i.toString(16)));
          }
          return r;
        }),
        (t.zero2 = s),
        (t.zero8 = a),
        (t.join32 = function (e, t, r, i) {
          var o,
            s = r - t;
          n(s % 4 == 0);
          for (var a = Array(s / 4), l = 0, u = t; l < a.length; l++, u += 4)
            (o =
              "big" === i
                ? (e[u] << 24) | (e[u + 1] << 16) | (e[u + 2] << 8) | e[u + 3]
                : (e[u + 3] << 24) | (e[u + 2] << 16) | (e[u + 1] << 8) | e[u]),
              (a[l] = o >>> 0);
          return a;
        }),
        (t.split32 = function (e, t) {
          for (
            var r = Array(4 * e.length), n = 0, i = 0;
            n < e.length;
            n++, i += 4
          ) {
            var o = e[n];
            "big" === t
              ? ((r[i] = o >>> 24),
                (r[i + 1] = (o >>> 16) & 255),
                (r[i + 2] = (o >>> 8) & 255),
                (r[i + 3] = 255 & o))
              : ((r[i + 3] = o >>> 24),
                (r[i + 2] = (o >>> 16) & 255),
                (r[i + 1] = (o >>> 8) & 255),
                (r[i] = 255 & o));
          }
          return r;
        }),
        (t.rotr32 = function (e, t) {
          return (e >>> t) | (e << (32 - t));
        }),
        (t.rotl32 = function (e, t) {
          return (e << t) | (e >>> (32 - t));
        }),
        (t.sum32 = function (e, t) {
          return (e + t) >>> 0;
        }),
        (t.sum32_3 = function (e, t, r) {
          return (e + t + r) >>> 0;
        }),
        (t.sum32_4 = function (e, t, r, n) {
          return (e + t + r + n) >>> 0;
        }),
        (t.sum32_5 = function (e, t, r, n, i) {
          return (e + t + r + n + i) >>> 0;
        }),
        (t.sum64 = function (e, t, r, n) {
          var i = e[t],
            o = (n + e[t + 1]) >>> 0;
          (e[t] = ((o < n ? 1 : 0) + r + i) >>> 0), (e[t + 1] = o);
        }),
        (t.sum64_hi = function (e, t, r, n) {
          return (((t + n) >>> 0 < t ? 1 : 0) + e + r) >>> 0;
        }),
        (t.sum64_lo = function (e, t, r, n) {
          return (t + n) >>> 0;
        }),
        (t.sum64_4_hi = function (e, t, r, n, i, o, s, a) {
          var l,
            u = t;
          return (
            (e +
              r +
              i +
              s +
              (0 +
                ((u = (u + n) >>> 0) < t ? 1 : 0) +
                ((u = (u + o) >>> 0) < o ? 1 : 0) +
                ((u = (u + a) >>> 0) < a ? 1 : 0))) >>>
            0
          );
        }),
        (t.sum64_4_lo = function (e, t, r, n, i, o, s, a) {
          return (t + n + o + a) >>> 0;
        }),
        (t.sum64_5_hi = function (e, t, r, n, i, o, s, a, l, u) {
          var c,
            f = t;
          return (
            (e +
              r +
              i +
              s +
              l +
              (0 +
                ((f = (f + n) >>> 0) < t ? 1 : 0) +
                ((f = (f + o) >>> 0) < o ? 1 : 0) +
                ((f = (f + a) >>> 0) < a ? 1 : 0) +
                ((f = (f + u) >>> 0) < u ? 1 : 0))) >>>
            0
          );
        }),
        (t.sum64_5_lo = function (e, t, r, n, i, o, s, a, l, u) {
          return (t + n + o + a + u) >>> 0;
        }),
        (t.rotr64_hi = function (e, t, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        }),
        (t.rotr64_lo = function (e, t, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0;
        }),
        (t.shr64_hi = function (e, t, r) {
          return e >>> r;
        }),
        (t.shr64_lo = function (e, t, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0;
        });
    },
    58728: function (e, t, r) {
      var n,
        i = r(26182);
      !(function () {
        "use strict";
        var o = "input is invalid type",
          s = "object" == typeof window,
          a = s ? window : {};
        a.JS_SHA3_NO_WINDOW && (s = !1);
        var l = !s && "object" == typeof self;
        !a.JS_SHA3_NO_NODE_JS &&
        "object" == typeof i &&
        i.versions &&
        i.versions.node
          ? (a = r.g)
          : l && (a = self);
        var u = !a.JS_SHA3_NO_COMMON_JS && e.exports,
          c = r.amdO,
          f = !a.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
          h = "0123456789abcdef".split(""),
          d = [4, 1024, 262144, 67108864],
          p = [0, 8, 16, 24],
          g = [
            1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
            2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0,
            136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139,
            2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648,
            128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545,
            2147483648, 32896, 2147483648, 2147483649, 0, 2147516424,
            2147483648,
          ],
          m = [224, 256, 384, 512],
          y = [128, 256],
          v = ["hex", "buffer", "arrayBuffer", "array", "digest"],
          b = { 128: 168, 256: 136 };
        (a.JS_SHA3_NO_NODE_JS || !Array.isArray) &&
          (Array.isArray = function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          }),
          f &&
            (a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
            (ArrayBuffer.isView = function (e) {
              return (
                "object" == typeof e &&
                e.buffer &&
                e.buffer.constructor === ArrayBuffer
              );
            });
        for (
          var A = function (e, t, r) {
              return function (n) {
                return new L(e, t, e).update(n)[r]();
              };
            },
            w = function (e, t, r) {
              return function (n, i) {
                return new L(e, t, i).update(n)[r]();
              };
            },
            E = function (e, t, r) {
              return function (t, n, i, o) {
                return k["cshake" + e].update(t, n, i, o)[r]();
              };
            },
            x = function (e, t, r) {
              return function (t, n, i, o) {
                return k["kmac" + e].update(t, n, i, o)[r]();
              };
            },
            S = function (e, t, r, n) {
              for (var i = 0; i < v.length; ++i) {
                var o = v[i];
                e[o] = t(r, n, o);
              }
              return e;
            },
            P = function (e, t) {
              var r = A(e, t, "hex");
              return (
                (r.create = function () {
                  return new L(e, t, e);
                }),
                (r.update = function (e) {
                  return r.create().update(e);
                }),
                S(r, A, e, t)
              );
            },
            O = [
              {
                name: "keccak",
                padding: [1, 256, 65536, 16777216],
                bits: m,
                createMethod: P,
              },
              {
                name: "sha3",
                padding: [6, 1536, 393216, 100663296],
                bits: m,
                createMethod: P,
              },
              {
                name: "shake",
                padding: [31, 7936, 2031616, 520093696],
                bits: y,
                createMethod: function (e, t) {
                  var r = w(e, t, "hex");
                  return (
                    (r.create = function (r) {
                      return new L(e, t, r);
                    }),
                    (r.update = function (e, t) {
                      return r.create(t).update(e);
                    }),
                    S(r, w, e, t)
                  );
                },
              },
              {
                name: "cshake",
                padding: d,
                bits: y,
                createMethod: function (e, t) {
                  var r = b[e],
                    n = E(e, t, "hex");
                  return (
                    (n.create = function (n, i, o) {
                      return i || o
                        ? new L(e, t, n).bytepad([i, o], r)
                        : k["shake" + e].create(n);
                    }),
                    (n.update = function (e, t, r, i) {
                      return n.create(t, r, i).update(e);
                    }),
                    S(n, E, e, t)
                  );
                },
              },
              {
                name: "kmac",
                padding: d,
                bits: y,
                createMethod: function (e, t) {
                  var r = b[e],
                    n = x(e, t, "hex");
                  return (
                    (n.create = function (n, i, o) {
                      return new F(e, t, i)
                        .bytepad(["KMAC", o], r)
                        .bytepad([n], r);
                    }),
                    (n.update = function (e, t, r, i) {
                      return n.create(e, r, i).update(t);
                    }),
                    S(n, x, e, t)
                  );
                },
              },
            ],
            k = {},
            _ = [],
            C = 0;
          C < O.length;
          ++C
        )
          for (var N = O[C], R = N.bits, T = 0; T < R.length; ++T) {
            var I = N.name + "_" + R[T];
            if (
              (_.push(I),
              (k[I] = N.createMethod(R[T], N.padding)),
              "sha3" !== N.name)
            ) {
              var B = N.name + R[T];
              _.push(B), (k[B] = k[I]);
            }
          }
        function L(e, t, r) {
          (this.blocks = []),
            (this.s = []),
            (this.padding = t),
            (this.outputBits = r),
            (this.reset = !0),
            (this.finalized = !1),
            (this.block = 0),
            (this.start = 0),
            (this.blockCount = (1600 - (e << 1)) >> 5),
            (this.byteCount = this.blockCount << 2),
            (this.outputBlocks = r >> 5),
            (this.extraBytes = (31 & r) >> 3);
          for (var n = 0; n < 50; ++n) this.s[n] = 0;
        }
        function F(e, t, r) {
          L.call(this, e, t, r);
        }
        (L.prototype.update = function (e) {
          if (this.finalized) throw Error("finalize already called");
          var t,
            r = typeof e;
          if ("string" !== r) {
            if ("object" === r) {
              if (null === e) throw Error(o);
              if (f && e.constructor === ArrayBuffer) e = new Uint8Array(e);
              else if (!Array.isArray(e) && (!f || !ArrayBuffer.isView(e)))
                throw Error(o);
            } else throw Error(o);
            t = !0;
          }
          for (
            var n,
              i,
              s = this.blocks,
              a = this.byteCount,
              l = e.length,
              u = this.blockCount,
              c = 0,
              h = this.s;
            c < l;

          ) {
            if (this.reset)
              for (n = 1, this.reset = !1, s[0] = this.block; n < u + 1; ++n)
                s[n] = 0;
            if (t)
              for (n = this.start; c < l && n < a; ++c)
                s[n >> 2] |= e[c] << p[3 & n++];
            else
              for (n = this.start; c < l && n < a; ++c)
                (i = e.charCodeAt(c)) < 128
                  ? (s[n >> 2] |= i << p[3 & n++])
                  : (i < 2048
                      ? (s[n >> 2] |= (192 | (i >> 6)) << p[3 & n++])
                      : (i < 55296 || i >= 57344
                          ? (s[n >> 2] |= (224 | (i >> 12)) << p[3 & n++])
                          : ((i =
                              65536 +
                              (((1023 & i) << 10) |
                                (1023 & e.charCodeAt(++c)))),
                            (s[n >> 2] |= (240 | (i >> 18)) << p[3 & n++]),
                            (s[n >> 2] |=
                              (128 | ((i >> 12) & 63)) << p[3 & n++])),
                        (s[n >> 2] |= (128 | ((i >> 6) & 63)) << p[3 & n++])),
                    (s[n >> 2] |= (128 | (63 & i)) << p[3 & n++]));
            if (((this.lastByteIndex = n), n >= a)) {
              for (this.start = n - a, this.block = s[u], n = 0; n < u; ++n)
                h[n] ^= s[n];
              D(h), (this.reset = !0);
            } else this.start = n;
          }
          return this;
        }),
          (L.prototype.encode = function (e, t) {
            var r = 255 & e,
              n = 1,
              i = [r];
            for (e >>= 8, r = 255 & e; r > 0; )
              i.unshift(r), (e >>= 8), (r = 255 & e), ++n;
            return t ? i.push(n) : i.unshift(n), this.update(i), i.length;
          }),
          (L.prototype.encodeString = function (e) {
            var t,
              r = typeof e;
            if ("string" !== r) {
              if ("object" === r) {
                if (null === e) throw Error(o);
                if (f && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                else if (!Array.isArray(e) && (!f || !ArrayBuffer.isView(e)))
                  throw Error(o);
              } else throw Error(o);
              t = !0;
            }
            var n = 0,
              i = e.length;
            if (t) n = i;
            else
              for (var s = 0; s < e.length; ++s) {
                var a = e.charCodeAt(s);
                a < 128
                  ? (n += 1)
                  : a < 2048
                  ? (n += 2)
                  : a < 55296 || a >= 57344
                  ? (n += 3)
                  : ((a =
                      65536 +
                      (((1023 & a) << 10) | (1023 & e.charCodeAt(++s)))),
                    (n += 4));
              }
            return (n += this.encode(8 * n)), this.update(e), n;
          }),
          (L.prototype.bytepad = function (e, t) {
            for (var r = this.encode(t), n = 0; n < e.length; ++n)
              r += this.encodeString(e[n]);
            var i = t - (r % t),
              o = [];
            return (o.length = i), this.update(o), this;
          }),
          (L.prototype.finalize = function () {
            if (!this.finalized) {
              this.finalized = !0;
              var e = this.blocks,
                t = this.lastByteIndex,
                r = this.blockCount,
                n = this.s;
              if (
                ((e[t >> 2] |= this.padding[3 & t]),
                this.lastByteIndex === this.byteCount)
              )
                for (t = 1, e[0] = e[r]; t < r + 1; ++t) e[t] = 0;
              for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t];
              D(n);
            }
          }),
          (L.prototype.toString = L.prototype.hex =
            function () {
              this.finalize();
              for (
                var e,
                  t = this.blockCount,
                  r = this.s,
                  n = this.outputBlocks,
                  i = this.extraBytes,
                  o = 0,
                  s = 0,
                  a = "";
                s < n;

              ) {
                for (o = 0; o < t && s < n; ++o, ++s)
                  a +=
                    h[((e = r[o]) >> 4) & 15] +
                    h[15 & e] +
                    h[(e >> 12) & 15] +
                    h[(e >> 8) & 15] +
                    h[(e >> 20) & 15] +
                    h[(e >> 16) & 15] +
                    h[(e >> 28) & 15] +
                    h[(e >> 24) & 15];
                s % t == 0 && (D(r), (o = 0));
              }
              return (
                i &&
                  ((a += h[((e = r[o]) >> 4) & 15] + h[15 & e]),
                  i > 1 && (a += h[(e >> 12) & 15] + h[(e >> 8) & 15]),
                  i > 2 && (a += h[(e >> 20) & 15] + h[(e >> 16) & 15])),
                a
              );
            }),
          (L.prototype.arrayBuffer = function () {
            this.finalize();
            var e,
              t = this.blockCount,
              r = this.s,
              n = this.outputBlocks,
              i = this.extraBytes,
              o = 0,
              s = 0,
              a = this.outputBits >> 3;
            e = new ArrayBuffer(i ? (n + 1) << 2 : a);
            for (var l = new Uint32Array(e); s < n; ) {
              for (o = 0; o < t && s < n; ++o, ++s) l[s] = r[o];
              s % t == 0 && D(r);
            }
            return i && ((l[o] = r[o]), (e = e.slice(0, a))), e;
          }),
          (L.prototype.buffer = L.prototype.arrayBuffer),
          (L.prototype.digest = L.prototype.array =
            function () {
              this.finalize();
              for (
                var e,
                  t,
                  r = this.blockCount,
                  n = this.s,
                  i = this.outputBlocks,
                  o = this.extraBytes,
                  s = 0,
                  a = 0,
                  l = [];
                a < i;

              ) {
                for (s = 0; s < r && a < i; ++s, ++a)
                  (e = a << 2),
                    (t = n[s]),
                    (l[e] = 255 & t),
                    (l[e + 1] = (t >> 8) & 255),
                    (l[e + 2] = (t >> 16) & 255),
                    (l[e + 3] = (t >> 24) & 255);
                a % r == 0 && D(n);
              }
              return (
                o &&
                  ((e = a << 2),
                  (t = n[s]),
                  (l[e] = 255 & t),
                  o > 1 && (l[e + 1] = (t >> 8) & 255),
                  o > 2 && (l[e + 2] = (t >> 16) & 255)),
                l
              );
            }),
          (F.prototype = new L()),
          (F.prototype.finalize = function () {
            return (
              this.encode(this.outputBits, !0), L.prototype.finalize.call(this)
            );
          });
        var D = function (e) {
          var t,
            r,
            n,
            i,
            o,
            s,
            a,
            l,
            u,
            c,
            f,
            h,
            d,
            p,
            m,
            y,
            v,
            b,
            A,
            w,
            E,
            x,
            S,
            P,
            O,
            k,
            _,
            C,
            N,
            R,
            T,
            I,
            B,
            L,
            F,
            D,
            M,
            U,
            j,
            z,
            H,
            G,
            K,
            V,
            q,
            J,
            W,
            Q,
            Y,
            X,
            Z,
            $,
            ee,
            et,
            er,
            en,
            ei,
            eo,
            es,
            ea,
            el,
            eu,
            ec;
          for (n = 0; n < 48; n += 2)
            (i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40]),
              (o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41]),
              (s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42]),
              (a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43]),
              (l = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44]),
              (u = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45]),
              (c = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46]),
              (f = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47]),
              (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]),
              (d = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]),
              (t = h ^ ((s << 1) | (a >>> 31))),
              (r = d ^ ((a << 1) | (s >>> 31))),
              (e[0] ^= t),
              (e[1] ^= r),
              (e[10] ^= t),
              (e[11] ^= r),
              (e[20] ^= t),
              (e[21] ^= r),
              (e[30] ^= t),
              (e[31] ^= r),
              (e[40] ^= t),
              (e[41] ^= r),
              (t = i ^ ((l << 1) | (u >>> 31))),
              (r = o ^ ((u << 1) | (l >>> 31))),
              (e[2] ^= t),
              (e[3] ^= r),
              (e[12] ^= t),
              (e[13] ^= r),
              (e[22] ^= t),
              (e[23] ^= r),
              (e[32] ^= t),
              (e[33] ^= r),
              (e[42] ^= t),
              (e[43] ^= r),
              (t = s ^ ((c << 1) | (f >>> 31))),
              (r = a ^ ((f << 1) | (c >>> 31))),
              (e[4] ^= t),
              (e[5] ^= r),
              (e[14] ^= t),
              (e[15] ^= r),
              (e[24] ^= t),
              (e[25] ^= r),
              (e[34] ^= t),
              (e[35] ^= r),
              (e[44] ^= t),
              (e[45] ^= r),
              (t = l ^ ((h << 1) | (d >>> 31))),
              (r = u ^ ((d << 1) | (h >>> 31))),
              (e[6] ^= t),
              (e[7] ^= r),
              (e[16] ^= t),
              (e[17] ^= r),
              (e[26] ^= t),
              (e[27] ^= r),
              (e[36] ^= t),
              (e[37] ^= r),
              (e[46] ^= t),
              (e[47] ^= r),
              (t = c ^ ((i << 1) | (o >>> 31))),
              (r = f ^ ((o << 1) | (i >>> 31))),
              (e[8] ^= t),
              (e[9] ^= r),
              (e[18] ^= t),
              (e[19] ^= r),
              (e[28] ^= t),
              (e[29] ^= r),
              (e[38] ^= t),
              (e[39] ^= r),
              (e[48] ^= t),
              (e[49] ^= r),
              (p = e[0]),
              (m = e[1]),
              (J = (e[11] << 4) | (e[10] >>> 28)),
              (W = (e[10] << 4) | (e[11] >>> 28)),
              (C = (e[20] << 3) | (e[21] >>> 29)),
              (N = (e[21] << 3) | (e[20] >>> 29)),
              (ea = (e[31] << 9) | (e[30] >>> 23)),
              (el = (e[30] << 9) | (e[31] >>> 23)),
              (G = (e[40] << 18) | (e[41] >>> 14)),
              (K = (e[41] << 18) | (e[40] >>> 14)),
              (L = (e[2] << 1) | (e[3] >>> 31)),
              (F = (e[3] << 1) | (e[2] >>> 31)),
              (y = (e[13] << 12) | (e[12] >>> 20)),
              (v = (e[12] << 12) | (e[13] >>> 20)),
              (Q = (e[22] << 10) | (e[23] >>> 22)),
              (Y = (e[23] << 10) | (e[22] >>> 22)),
              (R = (e[33] << 13) | (e[32] >>> 19)),
              (T = (e[32] << 13) | (e[33] >>> 19)),
              (eu = (e[42] << 2) | (e[43] >>> 30)),
              (ec = (e[43] << 2) | (e[42] >>> 30)),
              (et = (e[5] << 30) | (e[4] >>> 2)),
              (er = (e[4] << 30) | (e[5] >>> 2)),
              (D = (e[14] << 6) | (e[15] >>> 26)),
              (M = (e[15] << 6) | (e[14] >>> 26)),
              (b = (e[25] << 11) | (e[24] >>> 21)),
              (A = (e[24] << 11) | (e[25] >>> 21)),
              (X = (e[34] << 15) | (e[35] >>> 17)),
              (Z = (e[35] << 15) | (e[34] >>> 17)),
              (I = (e[45] << 29) | (e[44] >>> 3)),
              (B = (e[44] << 29) | (e[45] >>> 3)),
              (P = (e[6] << 28) | (e[7] >>> 4)),
              (O = (e[7] << 28) | (e[6] >>> 4)),
              (en = (e[17] << 23) | (e[16] >>> 9)),
              (ei = (e[16] << 23) | (e[17] >>> 9)),
              (U = (e[26] << 25) | (e[27] >>> 7)),
              (j = (e[27] << 25) | (e[26] >>> 7)),
              (w = (e[36] << 21) | (e[37] >>> 11)),
              (E = (e[37] << 21) | (e[36] >>> 11)),
              ($ = (e[47] << 24) | (e[46] >>> 8)),
              (ee = (e[46] << 24) | (e[47] >>> 8)),
              (V = (e[8] << 27) | (e[9] >>> 5)),
              (q = (e[9] << 27) | (e[8] >>> 5)),
              (k = (e[18] << 20) | (e[19] >>> 12)),
              (_ = (e[19] << 20) | (e[18] >>> 12)),
              (eo = (e[29] << 7) | (e[28] >>> 25)),
              (es = (e[28] << 7) | (e[29] >>> 25)),
              (z = (e[38] << 8) | (e[39] >>> 24)),
              (H = (e[39] << 8) | (e[38] >>> 24)),
              (x = (e[48] << 14) | (e[49] >>> 18)),
              (S = (e[49] << 14) | (e[48] >>> 18)),
              (e[0] = p ^ (~y & b)),
              (e[1] = m ^ (~v & A)),
              (e[10] = P ^ (~k & C)),
              (e[11] = O ^ (~_ & N)),
              (e[20] = L ^ (~D & U)),
              (e[21] = F ^ (~M & j)),
              (e[30] = V ^ (~J & Q)),
              (e[31] = q ^ (~W & Y)),
              (e[40] = et ^ (~en & eo)),
              (e[41] = er ^ (~ei & es)),
              (e[2] = y ^ (~b & w)),
              (e[3] = v ^ (~A & E)),
              (e[12] = k ^ (~C & R)),
              (e[13] = _ ^ (~N & T)),
              (e[22] = D ^ (~U & z)),
              (e[23] = M ^ (~j & H)),
              (e[32] = J ^ (~Q & X)),
              (e[33] = W ^ (~Y & Z)),
              (e[42] = en ^ (~eo & ea)),
              (e[43] = ei ^ (~es & el)),
              (e[4] = b ^ (~w & x)),
              (e[5] = A ^ (~E & S)),
              (e[14] = C ^ (~R & I)),
              (e[15] = N ^ (~T & B)),
              (e[24] = U ^ (~z & G)),
              (e[25] = j ^ (~H & K)),
              (e[34] = Q ^ (~X & $)),
              (e[35] = Y ^ (~Z & ee)),
              (e[44] = eo ^ (~ea & eu)),
              (e[45] = es ^ (~el & ec)),
              (e[6] = w ^ (~x & p)),
              (e[7] = E ^ (~S & m)),
              (e[16] = R ^ (~I & P)),
              (e[17] = T ^ (~B & O)),
              (e[26] = z ^ (~G & L)),
              (e[27] = H ^ (~K & F)),
              (e[36] = X ^ (~$ & V)),
              (e[37] = Z ^ (~ee & q)),
              (e[46] = ea ^ (~eu & et)),
              (e[47] = el ^ (~ec & er)),
              (e[8] = x ^ (~p & y)),
              (e[9] = S ^ (~m & v)),
              (e[18] = I ^ (~P & k)),
              (e[19] = B ^ (~O & _)),
              (e[28] = G ^ (~L & D)),
              (e[29] = K ^ (~F & M)),
              (e[38] = $ ^ (~V & J)),
              (e[39] = ee ^ (~q & W)),
              (e[48] = eu ^ (~et & en)),
              (e[49] = ec ^ (~er & ei)),
              (e[0] ^= g[n]),
              (e[1] ^= g[n + 1]);
        };
        if (u) e.exports = k;
        else {
          for (C = 0; C < _.length; ++C) a[_[C]] = k[_[C]];
          c &&
            void 0 !==
              (n = function () {
                return k;
              }.call(t, r, t, e)) &&
            (e.exports = n);
        }
      })();
    },
    38566: function (e, t, r) {
      var n = r(37487),
        i = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, n(e) + 1).replace(i, "") : e;
      };
    },
    37487: function (e) {
      var t = /\s/;
      e.exports = function (e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)); );
        return r;
      };
    },
    64735: function (e, t, r) {
      var n = r(34578),
        i = r(86261),
        o = r(72311),
        s = Math.max,
        a = Math.min;
      e.exports = function (e, t, r) {
        var l,
          u,
          c,
          f,
          h,
          d,
          p = 0,
          g = !1,
          m = !1,
          y = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function v(t) {
          var r = l,
            n = u;
          return (l = u = void 0), (p = t), (f = e.apply(n, r));
        }
        function b(e) {
          var r = e - d,
            n = e - p;
          return void 0 === d || r >= t || r < 0 || (m && n >= c);
        }
        function A() {
          var e,
            r,
            n,
            o = i();
          if (b(o)) return w(o);
          h = setTimeout(
            A,
            ((e = o - d), (r = o - p), (n = t - e), m ? a(n, c - r) : n)
          );
        }
        function w(e) {
          return ((h = void 0), y && l) ? v(e) : ((l = u = void 0), f);
        }
        function E() {
          var e,
            r = i(),
            n = b(r);
          if (((l = arguments), (u = this), (d = r), n)) {
            if (void 0 === h)
              return (p = e = d), (h = setTimeout(A, t)), g ? v(e) : f;
            if (m) return clearTimeout(h), (h = setTimeout(A, t)), v(d);
          }
          return void 0 === h && (h = setTimeout(A, t)), f;
        }
        return (
          (t = o(t) || 0),
          n(r) &&
            ((g = !!r.leading),
            (c = (m = "maxWait" in r) ? s(o(r.maxWait) || 0, t) : c),
            (y = "trailing" in r ? !!r.trailing : y)),
          (E.cancel = function () {
            void 0 !== h && clearTimeout(h), (p = 0), (l = d = u = h = void 0);
          }),
          (E.flush = function () {
            return void 0 === h ? f : w(i());
          }),
          E
        );
      };
    },
    22186: function (e, t, r) {
      var n = r(40389),
        i = r(45376);
      e.exports = function (e) {
        return "symbol" == typeof e || (i(e) && "[object Symbol]" == n(e));
      };
    },
    86261: function (e, t, r) {
      var n = r(29283);
      e.exports = function () {
        return n.Date.now();
      };
    },
    85902: function (e, t, r) {
      var n = r(64735),
        i = r(34578);
      e.exports = function (e, t, r) {
        var o = !0,
          s = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        return (
          i(r) &&
            ((o = "leading" in r ? !!r.leading : o),
            (s = "trailing" in r ? !!r.trailing : s)),
          n(e, t, { leading: o, maxWait: t, trailing: s })
        );
      };
    },
    72311: function (e, t, r) {
      var n = r(38566),
        i = r(34578),
        o = r(22186),
        s = 0 / 0,
        a = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        c = parseInt;
      e.exports = function (e) {
        if ("number" == typeof e) return e;
        if (o(e)) return s;
        if (i(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = i(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var r = l.test(e);
        return r || u.test(e) ? c(e.slice(2), r ? 2 : 8) : a.test(e) ? s : +e;
      };
    },
    5697: function (e) {
      function t(e, t) {
        if (!e) throw Error(t || "Assertion failed");
      }
      (e.exports = t),
        (t.equal = function (e, t, r) {
          if (e != t) throw Error(r || "Assertion failed: " + e + " != " + t);
        });
    },
    87279: function (e) {
      var t = "undefined" != typeof Element,
        r = "function" == typeof Map,
        n = "function" == typeof Set,
        i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
      e.exports = function (e, o) {
        try {
          return (function e(o, s) {
            if (o === s) return !0;
            if (o && s && "object" == typeof o && "object" == typeof s) {
              var a, l, u, c;
              if (o.constructor !== s.constructor) return !1;
              if (Array.isArray(o)) {
                if ((a = o.length) != s.length) return !1;
                for (l = a; 0 != l--; ) if (!e(o[l], s[l])) return !1;
                return !0;
              }
              if (r && o instanceof Map && s instanceof Map) {
                if (o.size !== s.size) return !1;
                for (c = o.entries(); !(l = c.next()).done; )
                  if (!s.has(l.value[0])) return !1;
                for (c = o.entries(); !(l = c.next()).done; )
                  if (!e(l.value[1], s.get(l.value[0]))) return !1;
                return !0;
              }
              if (n && o instanceof Set && s instanceof Set) {
                if (o.size !== s.size) return !1;
                for (c = o.entries(); !(l = c.next()).done; )
                  if (!s.has(l.value[0])) return !1;
                return !0;
              }
              if (i && ArrayBuffer.isView(o) && ArrayBuffer.isView(s)) {
                if ((a = o.length) != s.length) return !1;
                for (l = a; 0 != l--; ) if (o[l] !== s[l]) return !1;
                return !0;
              }
              if (o.constructor === RegExp)
                return o.source === s.source && o.flags === s.flags;
              if (
                o.valueOf !== Object.prototype.valueOf &&
                "function" == typeof o.valueOf &&
                "function" == typeof s.valueOf
              )
                return o.valueOf() === s.valueOf();
              if (
                o.toString !== Object.prototype.toString &&
                "function" == typeof o.toString &&
                "function" == typeof s.toString
              )
                return o.toString() === s.toString();
              if ((a = (u = Object.keys(o)).length) !== Object.keys(s).length)
                return !1;
              for (l = a; 0 != l--; )
                if (!Object.prototype.hasOwnProperty.call(s, u[l])) return !1;
              if (t && o instanceof Element) return !1;
              for (l = a; 0 != l--; )
                if (
                  (("_owner" !== u[l] && "__v" !== u[l] && "__o" !== u[l]) ||
                    !o.$$typeof) &&
                  !e(o[u[l]], s[u[l]])
                )
                  return !1;
              return !0;
            }
            return o != o && s != s;
          })(e, o);
        } catch (e) {
          if ((e.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw e;
        }
      };
    },
    95358: function (e, t, r) {
      "use strict";
      var n,
        i,
        o = r(15039),
        s = function (e, t) {
          return (s =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        },
        a =
          ((n = i =
            {
              path: void 0,
              exports: {},
              require: function (e, t) {
                return (function () {
                  throw Error(
                    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                  );
                })(null == t && i.path);
              },
            }),
          i.exports,
          (function () {
            var e = {}.hasOwnProperty;
            function t() {
              for (var r = [], n = 0; n < arguments.length; n++) {
                var i = arguments[n];
                if (i) {
                  var o = typeof i;
                  if ("string" === o || "number" === o) r.push(i);
                  else if (Array.isArray(i) && i.length) {
                    var s = t.apply(null, i);
                    s && r.push(s);
                  } else if ("object" === o)
                    for (var a in i) e.call(i, a) && i[a] && r.push(a);
                }
              }
              return r.join(" ");
            }
            n.exports
              ? ((t.default = t), (n.exports = t))
              : (window.classNames = t);
          })(),
          i.exports);
      function l(e, t, r) {
        function n() {
          var u = Date.now() - a;
          u < t && u >= 0
            ? (i = setTimeout(n, t - u))
            : ((i = null), r || ((l = e.apply(s, o)), (s = o = null)));
        }
        null == t && (t = 100);
        var i,
          o,
          s,
          a,
          l,
          u = function () {
            (s = this), (o = arguments), (a = Date.now());
            var u = r && !i;
            return (
              i || (i = setTimeout(n, t)),
              u && ((l = e.apply(s, o)), (s = o = null)),
              l
            );
          };
        return (
          (u.clear = function () {
            i && (clearTimeout(i), (i = null));
          }),
          (u.flush = function () {
            i &&
              ((l = e.apply(s, o)),
              (s = o = null),
              clearTimeout(i),
              (i = null));
          }),
          u
        );
      }
      (l.debounce = l),
        (function (e, t) {
          void 0 === t && (t = {});
          var r = t.insertAt;
          if (e && "undefined" != typeof document) {
            var n = document.head || document.getElementsByTagName("head")[0],
              i = document.createElement("style");
            (i.type = "text/css"),
              "top" === r && n.firstChild
                ? n.insertBefore(i, n.firstChild)
                : n.appendChild(i),
              i.styleSheet
                ? (i.styleSheet.cssText = e)
                : i.appendChild(document.createTextNode(e));
          }
        })(
          ".indiana-scroll-container {\n  overflow: auto; }\n  .indiana-scroll-container--dragging {\n    scroll-behavior: auto !important; }\n    .indiana-scroll-container--dragging > * {\n      pointer-events: none;\n      cursor: -webkit-grab;\n      cursor: grab; }\n  .indiana-scroll-container--hide-scrollbars {\n    overflow: hidden;\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none;\n    scrollbar-width: none; }\n    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {\n      display: none !important;\n      height: 0 !important;\n      width: 0 !important;\n      background: transparent !important;\n      -webkit-appearance: none !important; }\n  .indiana-scroll-container--native-scroll {\n    overflow: auto; }\n\n.indiana-dragging {\n  cursor: -webkit-grab;\n  cursor: grab; }\n"
        );
      var u,
        c =
          ((u = "indiana-scroll-container"),
          function (e, t) {
            if (!e) return u;
            "string" == typeof e ? (r = e) : (t = e);
            var r,
              n = u;
            return (
              r && (n += "__" + r),
              n +
                (t
                  ? Object.keys(t).reduce(function (e, r) {
                      var i = t[r];
                      return (
                        i &&
                          (e +=
                            " " +
                            ("boolean" == typeof i
                              ? n + "--" + r
                              : n + "--" + r + "_" + i)),
                        e
                      );
                    }, "")
                  : "")
            );
          }),
        f = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (
              (r.onEndScroll = function () {
                (r.scrolling = !1), !r.pressed && r.started && r.processEnd();
              }),
              (r.onScroll = function (e) {
                var t = r.container.current;
                (t.scrollLeft === r.scrollLeft &&
                  t.scrollTop === r.scrollTop) ||
                  ((r.scrolling = !0), r.processScroll(e), r.onEndScroll());
              }),
              (r.onTouchStart = function (e) {
                var t = r.props.nativeMobileScroll;
                if (r.isDraggable(e.target)) {
                  if (((r.internal = !0), t && r.scrolling)) r.pressed = !0;
                  else {
                    var n = e.touches[0];
                    r.processClick(e, n.clientX, n.clientY),
                      !t && r.props.stopPropagation && e.stopPropagation();
                  }
                }
              }),
              (r.onTouchEnd = function (e) {
                var t = r.props.nativeMobileScroll;
                r.pressed &&
                  (!r.started || (r.scrolling && t)
                    ? (r.pressed = !1)
                    : r.processEnd(),
                  r.forceUpdate());
              }),
              (r.onTouchMove = function (e) {
                var t = r.props.nativeMobileScroll;
                if (r.pressed && (!t || !r.isMobile)) {
                  var n = e.touches[0];
                  n && r.processMove(e, n.clientX, n.clientY),
                    e.preventDefault(),
                    r.props.stopPropagation && e.stopPropagation();
                }
              }),
              (r.onMouseDown = function (e) {
                r.isDraggable(e.target) &&
                  r.isScrollable() &&
                  ((r.internal = !0),
                  -1 !== r.props.buttons.indexOf(e.button) &&
                    (r.processClick(e, e.clientX, e.clientY),
                    e.preventDefault(),
                    r.props.stopPropagation && e.stopPropagation()));
              }),
              (r.onMouseMove = function (e) {
                r.pressed &&
                  (r.processMove(e, e.clientX, e.clientY),
                  e.preventDefault(),
                  r.props.stopPropagation && e.stopPropagation());
              }),
              (r.onMouseUp = function (e) {
                r.pressed &&
                  (r.started
                    ? r.processEnd()
                    : ((r.internal = !1),
                      (r.pressed = !1),
                      r.forceUpdate(),
                      r.props.onClick && r.props.onClick(e)),
                  e.preventDefault(),
                  r.props.stopPropagation && e.stopPropagation());
              }),
              (r.container = o.createRef()),
              (r.onEndScroll = l(r.onEndScroll, 300)),
              (r.scrolling = !1),
              (r.started = !1),
              (r.pressed = !1),
              (r.internal = !1),
              (r.getRef = r.getRef.bind(r)),
              r
            );
          }
          return (
            (function (e, t) {
              function r() {
                this.constructor = e;
              }
              s(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((r.prototype = t.prototype), new r()));
            })(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.props.nativeMobileScroll,
                t = this.container.current;
              window.addEventListener("mouseup", this.onMouseUp),
                window.addEventListener("mousemove", this.onMouseMove),
                window.addEventListener("touchmove", this.onTouchMove, {
                  passive: !1,
                }),
                window.addEventListener("touchend", this.onTouchEnd),
                t.addEventListener("touchstart", this.onTouchStart, {
                  passive: !1,
                }),
                t.addEventListener("mousedown", this.onMouseDown, {
                  passive: !1,
                }),
                e &&
                  ((this.isMobile = this.isMobileDevice()),
                  this.isMobile && this.forceUpdate());
            }),
            (t.prototype.componentWillUnmount = function () {
              window.removeEventListener("mouseup", this.onMouseUp),
                window.removeEventListener("mousemove", this.onMouseMove),
                window.removeEventListener("touchmove", this.onTouchMove),
                window.removeEventListener("touchend", this.onTouchEnd);
            }),
            (t.prototype.getElement = function () {
              return this.container.current;
            }),
            (t.prototype.isMobileDevice = function () {
              return (
                void 0 !== window.orientation ||
                -1 !== navigator.userAgent.indexOf("IEMobile")
              );
            }),
            (t.prototype.isDraggable = function (e) {
              var t = this.props.ignoreElements;
              if (t) {
                var r = e.closest(t);
                return null === r || r.contains(this.getElement());
              }
              return !0;
            }),
            (t.prototype.isScrollable = function () {
              var e = this.container.current;
              return (
                e &&
                (e.scrollWidth > e.clientWidth ||
                  e.scrollHeight > e.clientHeight)
              );
            }),
            (t.prototype.processClick = function (e, t, r) {
              var n = this.container.current;
              (this.scrollLeft = n.scrollLeft),
                (this.scrollTop = n.scrollTop),
                (this.clientX = t),
                (this.clientY = r),
                (this.pressed = !0);
            }),
            (t.prototype.processStart = function (e) {
              void 0 === e && (e = !0);
              var t = this.props.onStartScroll;
              (this.started = !0),
                e && document.body.classList.add("indiana-dragging"),
                t && t({ external: !this.internal }),
                this.forceUpdate();
            }),
            (t.prototype.processScroll = function (e) {
              if (this.started) {
                var t = this.props.onScroll;
                t && t({ external: !this.internal });
              } else this.processStart(!1);
            }),
            (t.prototype.processMove = function (e, t, r) {
              var n = this.props,
                i = n.horizontal,
                o = n.vertical,
                s = n.activationDistance,
                a = n.onScroll,
                l = this.container.current;
              this.started
                ? (i && (l.scrollLeft -= t - this.clientX),
                  o && (l.scrollTop -= r - this.clientY),
                  a && a({ external: !this.internal }),
                  (this.clientX = t),
                  (this.clientY = r),
                  (this.scrollLeft = l.scrollLeft),
                  (this.scrollTop = l.scrollTop))
                : ((i && Math.abs(t - this.clientX) > s) ||
                    (o && Math.abs(r - this.clientY) > s)) &&
                  ((this.clientX = t), (this.clientY = r), this.processStart());
            }),
            (t.prototype.processEnd = function () {
              var e = this.props.onEndScroll;
              this.container.current && e && e({ external: !this.internal }),
                (this.pressed = !1),
                (this.started = !1),
                (this.scrolling = !1),
                (this.internal = !1),
                document.body.classList.remove("indiana-dragging"),
                this.forceUpdate();
            }),
            (t.prototype.getRef = function (e) {
              [this.container, this.props.innerRef].forEach(function (t) {
                t && ("function" == typeof t ? t(e) : (t.current = e));
              });
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.children,
                r = e.draggingClassName,
                n = e.className,
                i = e.style,
                s = e.hideScrollbars,
                l = e.component;
              return o.createElement(
                l,
                {
                  className: a(
                    n,
                    this.pressed && r,
                    c({
                      dragging: this.pressed,
                      "hide-scrollbars": s,
                      "native-scroll": this.isMobile,
                    })
                  ),
                  style: i,
                  ref: this.getRef,
                  onScroll: this.onScroll,
                },
                t
              );
            }),
            (t.defaultProps = {
              nativeMobileScroll: !0,
              hideScrollbars: !0,
              activationDistance: 10,
              vertical: !0,
              horizontal: !0,
              stopPropagation: !1,
              style: {},
              component: "div",
              buttons: [0],
            }),
            t
          );
        })(o.PureComponent);
      t.Z = f;
    },
    6245: function (e, t, r) {
      "use strict";
      r.d(t, {
        D: function () {
          return ey;
        },
      });
      var n,
        i,
        o,
        s,
        a,
        l = r(15039),
        u = r(68946);
      function c(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function f(e) {
        var t = c(e).Element;
        return e instanceof t || e instanceof Element;
      }
      function h(e) {
        var t = c(e).HTMLElement;
        return e instanceof t || e instanceof HTMLElement;
      }
      function d(e) {
        if ("undefined" == typeof ShadowRoot) return !1;
        var t = c(e).ShadowRoot;
        return e instanceof t || e instanceof ShadowRoot;
      }
      var p = Math.max,
        g = Math.min,
        m = Math.round;
      function y() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function v() {
        return !/^((?!chrome|android).)*safari/i.test(y());
      }
      function b(e, t, r) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        var n = e.getBoundingClientRect(),
          i = 1,
          o = 1;
        t &&
          h(e) &&
          ((i = (e.offsetWidth > 0 && m(n.width) / e.offsetWidth) || 1),
          (o = (e.offsetHeight > 0 && m(n.height) / e.offsetHeight) || 1));
        var s = (f(e) ? c(e) : window).visualViewport,
          a = !v() && r,
          l = (n.left + (a && s ? s.offsetLeft : 0)) / i,
          u = (n.top + (a && s ? s.offsetTop : 0)) / o,
          d = n.width / i,
          p = n.height / o;
        return {
          width: d,
          height: p,
          top: u,
          right: l + d,
          bottom: u + p,
          left: l,
          x: l,
          y: u,
        };
      }
      function A(e) {
        var t = c(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function w(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function E(e) {
        return ((f(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function x(e) {
        return b(E(e)).left + A(e).scrollLeft;
      }
      function S(e) {
        return c(e).getComputedStyle(e);
      }
      function P(e) {
        var t = S(e),
          r = t.overflow,
          n = t.overflowX,
          i = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(r + i + n);
      }
      function O(e) {
        var t = b(e),
          r = e.offsetWidth,
          n = e.offsetHeight;
        return (
          1 >= Math.abs(t.width - r) && (r = t.width),
          1 >= Math.abs(t.height - n) && (n = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
        );
      }
      function k(e) {
        return "html" === w(e)
          ? e
          : e.assignedSlot || e.parentNode || (d(e) ? e.host : null) || E(e);
      }
      function _(e, t) {
        void 0 === t && (t = []);
        var r,
          n = (function e(t) {
            return ["html", "body", "#document"].indexOf(w(t)) >= 0
              ? t.ownerDocument.body
              : h(t) && P(t)
              ? t
              : e(k(t));
          })(e),
          i = n === (null == (r = e.ownerDocument) ? void 0 : r.body),
          o = c(n),
          s = i ? [o].concat(o.visualViewport || [], P(n) ? n : []) : n,
          a = t.concat(s);
        return i ? a : a.concat(_(k(s)));
      }
      function C(e) {
        return h(e) && "fixed" !== S(e).position ? e.offsetParent : null;
      }
      function N(e) {
        for (
          var t = c(e), r = C(e);
          r &&
          ["table", "td", "th"].indexOf(w(r)) >= 0 &&
          "static" === S(r).position;

        )
          r = C(r);
        return r &&
          ("html" === w(r) || ("body" === w(r) && "static" === S(r).position))
          ? t
          : r ||
              (function (e) {
                var t = /firefox/i.test(y());
                if (/Trident/i.test(y()) && h(e) && "fixed" === S(e).position)
                  return null;
                var r = k(e);
                for (
                  d(r) && (r = r.host);
                  h(r) && 0 > ["html", "body"].indexOf(w(r));

                ) {
                  var n = S(r);
                  if (
                    "none" !== n.transform ||
                    "none" !== n.perspective ||
                    "paint" === n.contain ||
                    -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                    (t && "filter" === n.willChange) ||
                    (t && n.filter && "none" !== n.filter)
                  )
                    return r;
                  r = r.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      var R = "bottom",
        T = "right",
        I = "left",
        B = "auto",
        L = ["top", R, T, I],
        F = "start",
        D = "viewport",
        M = "popper",
        U = L.reduce(function (e, t) {
          return e.concat([t + "-" + F, t + "-end"]);
        }, []),
        j = [].concat(L, [B]).reduce(function (e, t) {
          return e.concat([t, t + "-" + F, t + "-end"]);
        }, []),
        z = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ],
        H = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function G() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      var K = { passive: !0 };
      function V(e) {
        return e.split("-")[0];
      }
      function q(e) {
        return e.split("-")[1];
      }
      function J(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function W(e) {
        var t,
          r = e.reference,
          n = e.element,
          i = e.placement,
          o = i ? V(i) : null,
          s = i ? q(i) : null,
          a = r.x + r.width / 2 - n.width / 2,
          l = r.y + r.height / 2 - n.height / 2;
        switch (o) {
          case "top":
            t = { x: a, y: r.y - n.height };
            break;
          case R:
            t = { x: a, y: r.y + r.height };
            break;
          case T:
            t = { x: r.x + r.width, y: l };
            break;
          case I:
            t = { x: r.x - n.width, y: l };
            break;
          default:
            t = { x: r.x, y: r.y };
        }
        var u = o ? J(o) : null;
        if (null != u) {
          var c = "y" === u ? "height" : "width";
          switch (s) {
            case F:
              t[u] = t[u] - (r[c] / 2 - n[c] / 2);
              break;
            case "end":
              t[u] = t[u] + (r[c] / 2 - n[c] / 2);
          }
        }
        return t;
      }
      var Q = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Y(e) {
        var t,
          r,
          n,
          i,
          o,
          s,
          a,
          l = e.popper,
          u = e.popperRect,
          f = e.placement,
          h = e.variation,
          d = e.offsets,
          p = e.position,
          g = e.gpuAcceleration,
          y = e.adaptive,
          v = e.roundOffsets,
          b = e.isFixed,
          A = d.x,
          w = void 0 === A ? 0 : A,
          x = d.y,
          P = void 0 === x ? 0 : x,
          O = "function" == typeof v ? v({ x: w, y: P }) : { x: w, y: P };
        (w = O.x), (P = O.y);
        var k = d.hasOwnProperty("x"),
          _ = d.hasOwnProperty("y"),
          C = I,
          B = "top",
          L = window;
        if (y) {
          var F = N(l),
            D = "clientHeight",
            M = "clientWidth";
          F === c(l) &&
            "static" !== S((F = E(l))).position &&
            "absolute" === p &&
            ((D = "scrollHeight"), (M = "scrollWidth")),
            ("top" === f || ((f === I || f === T) && "end" === h)) &&
              ((B = R),
              (P -=
                (b && F === L && L.visualViewport
                  ? L.visualViewport.height
                  : F[D]) - u.height),
              (P *= g ? 1 : -1)),
            (f === I || (("top" === f || f === R) && "end" === h)) &&
              ((C = T),
              (w -=
                (b && F === L && L.visualViewport
                  ? L.visualViewport.width
                  : F[M]) - u.width),
              (w *= g ? 1 : -1));
        }
        var U = Object.assign({ position: p }, y && Q),
          j =
            !0 === v
              ? ((t = { x: w, y: P }),
                (r = c(l)),
                (n = t.x),
                (i = t.y),
                {
                  x: m(n * (o = r.devicePixelRatio || 1)) / o || 0,
                  y: m(i * o) / o || 0,
                })
              : { x: w, y: P };
        return ((w = j.x), (P = j.y), g)
          ? Object.assign(
              {},
              U,
              (((a = {})[B] = _ ? "0" : ""),
              (a[C] = k ? "0" : ""),
              (a.transform =
                1 >= (L.devicePixelRatio || 1)
                  ? "translate(" + w + "px, " + P + "px)"
                  : "translate3d(" + w + "px, " + P + "px, 0)"),
              a)
            )
          : Object.assign(
              {},
              U,
              (((s = {})[B] = _ ? P + "px" : ""),
              (s[C] = k ? w + "px" : ""),
              (s.transform = ""),
              s)
            );
      }
      var X = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function Z(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return X[e];
        });
      }
      var $ = { start: "end", end: "start" };
      function ee(e) {
        return e.replace(/start|end/g, function (e) {
          return $[e];
        });
      }
      function et(e, t) {
        var r = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (r && d(r)) {
          var n = t;
          do {
            if (n && e.isSameNode(n)) return !0;
            n = n.parentNode || n.host;
          } while (n);
        }
        return !1;
      }
      function er(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function en(e, t, r) {
        var n, i, o, s, a, l, u, h, d, g;
        return t === D
          ? er(
              (function (e, t) {
                var r = c(e),
                  n = E(e),
                  i = r.visualViewport,
                  o = n.clientWidth,
                  s = n.clientHeight,
                  a = 0,
                  l = 0;
                if (i) {
                  (o = i.width), (s = i.height);
                  var u = v();
                  (u || (!u && "fixed" === t)) &&
                    ((a = i.offsetLeft), (l = i.offsetTop));
                }
                return { width: o, height: s, x: a + x(e), y: l };
              })(e, r)
            )
          : f(t)
          ? (((n = b(t, !1, "fixed" === r)).top = n.top + t.clientTop),
            (n.left = n.left + t.clientLeft),
            (n.bottom = n.top + t.clientHeight),
            (n.right = n.left + t.clientWidth),
            (n.width = t.clientWidth),
            (n.height = t.clientHeight),
            (n.x = n.left),
            (n.y = n.top),
            n)
          : er(
              ((i = E(e)),
              (s = E(i)),
              (a = A(i)),
              (l = null == (o = i.ownerDocument) ? void 0 : o.body),
              (u = p(
                s.scrollWidth,
                s.clientWidth,
                l ? l.scrollWidth : 0,
                l ? l.clientWidth : 0
              )),
              (h = p(
                s.scrollHeight,
                s.clientHeight,
                l ? l.scrollHeight : 0,
                l ? l.clientHeight : 0
              )),
              (d = -a.scrollLeft + x(i)),
              (g = -a.scrollTop),
              "rtl" === S(l || s).direction &&
                (d += p(s.clientWidth, l ? l.clientWidth : 0) - u),
              { width: u, height: h, x: d, y: g })
            );
      }
      function ei() {
        return { top: 0, right: 0, bottom: 0, left: 0 };
      }
      function eo(e) {
        return Object.assign({}, ei(), e);
      }
      function es(e, t) {
        return t.reduce(function (t, r) {
          return (t[r] = e), t;
        }, {});
      }
      function ea(e, t) {
        void 0 === t && (t = {});
        var r,
          n,
          i,
          o,
          s,
          a,
          l,
          u = t,
          c = u.placement,
          d = void 0 === c ? e.placement : c,
          m = u.strategy,
          y = void 0 === m ? e.strategy : m,
          v = u.boundary,
          A = u.rootBoundary,
          x = u.elementContext,
          P = void 0 === x ? M : x,
          O = u.altBoundary,
          C = u.padding,
          I = void 0 === C ? 0 : C,
          B = eo("number" != typeof I ? I : es(I, L)),
          F = e.rects.popper,
          U = e.elements[void 0 !== O && O ? (P === M ? "reference" : M) : P],
          j =
            ((r = f(U) ? U : U.contextElement || E(e.elements.popper)),
            (a = (s = [].concat(
              "clippingParents" === (n = void 0 === v ? "clippingParents" : v)
                ? ((i = _(k(r))),
                  f(
                    (o =
                      ["absolute", "fixed"].indexOf(S(r).position) >= 0 && h(r)
                        ? N(r)
                        : r)
                  )
                    ? i.filter(function (e) {
                        return f(e) && et(e, o) && "body" !== w(e);
                      })
                    : [])
                : [].concat(n),
              [void 0 === A ? D : A]
            ))[0]),
            ((l = s.reduce(function (e, t) {
              var n = en(r, t, y);
              return (
                (e.top = p(n.top, e.top)),
                (e.right = g(n.right, e.right)),
                (e.bottom = g(n.bottom, e.bottom)),
                (e.left = p(n.left, e.left)),
                e
              );
            }, en(r, a, y))).width = l.right - l.left),
            (l.height = l.bottom - l.top),
            (l.x = l.left),
            (l.y = l.top),
            l),
          z = b(e.elements.reference),
          H = W({
            reference: z,
            element: F,
            strategy: "absolute",
            placement: d,
          }),
          G = er(Object.assign({}, F, H)),
          K = P === M ? G : z,
          V = {
            top: j.top - K.top + B.top,
            bottom: K.bottom - j.bottom + B.bottom,
            left: j.left - K.left + B.left,
            right: K.right - j.right + B.right,
          },
          q = e.modifiersData.offset;
        if (P === M && q) {
          var J = q[d];
          Object.keys(V).forEach(function (e) {
            var t = [T, R].indexOf(e) >= 0 ? 1 : -1,
              r = ["top", R].indexOf(e) >= 0 ? "y" : "x";
            V[e] += J[r] * t;
          });
        }
        return V;
      }
      function el(e, t, r) {
        return p(e, g(t, r));
      }
      function eu(e, t, r) {
        return (
          void 0 === r && (r = { x: 0, y: 0 }),
          {
            top: e.top - t.height - r.y,
            right: e.right - t.width + r.x,
            bottom: e.bottom - t.height + r.y,
            left: e.left - t.width - r.x,
          }
        );
      }
      function ec(e) {
        return ["top", T, R, I].some(function (t) {
          return e[t] >= 0;
        });
      }
      var ef =
          ((o =
            void 0 ===
            (i = (n = {
              defaultModifiers: [
                {
                  name: "eventListeners",
                  enabled: !0,
                  phase: "write",
                  fn: function () {},
                  effect: function (e) {
                    var t = e.state,
                      r = e.instance,
                      n = e.options,
                      i = n.scroll,
                      o = void 0 === i || i,
                      s = n.resize,
                      a = void 0 === s || s,
                      l = c(t.elements.popper),
                      u = [].concat(
                        t.scrollParents.reference,
                        t.scrollParents.popper
                      );
                    return (
                      o &&
                        u.forEach(function (e) {
                          e.addEventListener("scroll", r.update, K);
                        }),
                      a && l.addEventListener("resize", r.update, K),
                      function () {
                        o &&
                          u.forEach(function (e) {
                            e.removeEventListener("scroll", r.update, K);
                          }),
                          a && l.removeEventListener("resize", r.update, K);
                      }
                    );
                  },
                  data: {},
                },
                {
                  name: "popperOffsets",
                  enabled: !0,
                  phase: "read",
                  fn: function (e) {
                    var t = e.state,
                      r = e.name;
                    t.modifiersData[r] = W({
                      reference: t.rects.reference,
                      element: t.rects.popper,
                      strategy: "absolute",
                      placement: t.placement,
                    });
                  },
                  data: {},
                },
                {
                  name: "computeStyles",
                  enabled: !0,
                  phase: "beforeWrite",
                  fn: function (e) {
                    var t = e.state,
                      r = e.options,
                      n = r.gpuAcceleration,
                      i = r.adaptive,
                      o = r.roundOffsets,
                      s = void 0 === o || o,
                      a = {
                        placement: V(t.placement),
                        variation: q(t.placement),
                        popper: t.elements.popper,
                        popperRect: t.rects.popper,
                        gpuAcceleration: void 0 === n || n,
                        isFixed: "fixed" === t.options.strategy,
                      };
                    null != t.modifiersData.popperOffsets &&
                      (t.styles.popper = Object.assign(
                        {},
                        t.styles.popper,
                        Y(
                          Object.assign({}, a, {
                            offsets: t.modifiersData.popperOffsets,
                            position: t.options.strategy,
                            adaptive: void 0 === i || i,
                            roundOffsets: s,
                          })
                        )
                      )),
                      null != t.modifiersData.arrow &&
                        (t.styles.arrow = Object.assign(
                          {},
                          t.styles.arrow,
                          Y(
                            Object.assign({}, a, {
                              offsets: t.modifiersData.arrow,
                              position: "absolute",
                              adaptive: !1,
                              roundOffsets: s,
                            })
                          )
                        )),
                      (t.attributes.popper = Object.assign(
                        {},
                        t.attributes.popper,
                        { "data-popper-placement": t.placement }
                      ));
                  },
                  data: {},
                },
                {
                  name: "applyStyles",
                  enabled: !0,
                  phase: "write",
                  fn: function (e) {
                    var t = e.state;
                    Object.keys(t.elements).forEach(function (e) {
                      var r = t.styles[e] || {},
                        n = t.attributes[e] || {},
                        i = t.elements[e];
                      h(i) &&
                        w(i) &&
                        (Object.assign(i.style, r),
                        Object.keys(n).forEach(function (e) {
                          var t = n[e];
                          !1 === t
                            ? i.removeAttribute(e)
                            : i.setAttribute(e, !0 === t ? "" : t);
                        }));
                    });
                  },
                  effect: function (e) {
                    var t = e.state,
                      r = {
                        popper: {
                          position: t.options.strategy,
                          left: "0",
                          top: "0",
                          margin: "0",
                        },
                        arrow: { position: "absolute" },
                        reference: {},
                      };
                    return (
                      Object.assign(t.elements.popper.style, r.popper),
                      (t.styles = r),
                      t.elements.arrow &&
                        Object.assign(t.elements.arrow.style, r.arrow),
                      function () {
                        Object.keys(t.elements).forEach(function (e) {
                          var n = t.elements[e],
                            i = t.attributes[e] || {},
                            o = Object.keys(
                              t.styles.hasOwnProperty(e) ? t.styles[e] : r[e]
                            ).reduce(function (e, t) {
                              return (e[t] = ""), e;
                            }, {});
                          h(n) &&
                            w(n) &&
                            (Object.assign(n.style, o),
                            Object.keys(i).forEach(function (e) {
                              n.removeAttribute(e);
                            }));
                        });
                      }
                    );
                  },
                  requires: ["computeStyles"],
                },
                {
                  name: "offset",
                  enabled: !0,
                  phase: "main",
                  requires: ["popperOffsets"],
                  fn: function (e) {
                    var t = e.state,
                      r = e.options,
                      n = e.name,
                      i = r.offset,
                      o = void 0 === i ? [0, 0] : i,
                      s = j.reduce(function (e, r) {
                        var n, i, s, a, l, u;
                        return (
                          (e[r] =
                            ((n = t.rects),
                            (s = [I, "top"].indexOf((i = V(r))) >= 0 ? -1 : 1),
                            (l = (a =
                              "function" == typeof o
                                ? o(Object.assign({}, n, { placement: r }))
                                : o)[0]),
                            (u = a[1]),
                            (l = l || 0),
                            (u = (u || 0) * s),
                            [I, T].indexOf(i) >= 0
                              ? { x: u, y: l }
                              : { x: l, y: u })),
                          e
                        );
                      }, {}),
                      a = s[t.placement],
                      l = a.x,
                      u = a.y;
                    null != t.modifiersData.popperOffsets &&
                      ((t.modifiersData.popperOffsets.x += l),
                      (t.modifiersData.popperOffsets.y += u)),
                      (t.modifiersData[n] = s);
                  },
                },
                {
                  name: "flip",
                  enabled: !0,
                  phase: "main",
                  fn: function (e) {
                    var t = e.state,
                      r = e.options,
                      n = e.name;
                    if (!t.modifiersData[n]._skip) {
                      for (
                        var i = r.mainAxis,
                          o = void 0 === i || i,
                          s = r.altAxis,
                          a = void 0 === s || s,
                          l = r.fallbackPlacements,
                          u = r.padding,
                          c = r.boundary,
                          f = r.rootBoundary,
                          h = r.altBoundary,
                          d = r.flipVariations,
                          p = void 0 === d || d,
                          g = r.allowedAutoPlacements,
                          m = t.options.placement,
                          y = V(m) === m,
                          v =
                            l ||
                            (y || !p
                              ? [Z(m)]
                              : (function (e) {
                                  if (V(e) === B) return [];
                                  var t = Z(e);
                                  return [ee(e), t, ee(t)];
                                })(m)),
                          b = [m].concat(v).reduce(function (e, r) {
                            var n, i, o, s, a, l, h, d, m, y, v, b;
                            return e.concat(
                              V(r) === B
                                ? ((i = (n = {
                                    placement: r,
                                    boundary: c,
                                    rootBoundary: f,
                                    padding: u,
                                    flipVariations: p,
                                    allowedAutoPlacements: g,
                                  }).placement),
                                  (o = n.boundary),
                                  (s = n.rootBoundary),
                                  (a = n.padding),
                                  (l = n.flipVariations),
                                  (d =
                                    void 0 === (h = n.allowedAutoPlacements)
                                      ? j
                                      : h),
                                  0 ===
                                    (v = (y = (m = q(i))
                                      ? l
                                        ? U
                                        : U.filter(function (e) {
                                            return q(e) === m;
                                          })
                                      : L).filter(function (e) {
                                      return d.indexOf(e) >= 0;
                                    })).length && (v = y),
                                  Object.keys(
                                    (b = v.reduce(function (e, r) {
                                      return (
                                        (e[r] = ea(t, {
                                          placement: r,
                                          boundary: o,
                                          rootBoundary: s,
                                          padding: a,
                                        })[V(r)]),
                                        e
                                      );
                                    }, {}))
                                  ).sort(function (e, t) {
                                    return b[e] - b[t];
                                  }))
                                : r
                            );
                          }, []),
                          A = t.rects.reference,
                          w = t.rects.popper,
                          E = new Map(),
                          x = !0,
                          S = b[0],
                          P = 0;
                        P < b.length;
                        P++
                      ) {
                        var O = b[P],
                          k = V(O),
                          _ = q(O) === F,
                          C = ["top", R].indexOf(k) >= 0,
                          N = C ? "width" : "height",
                          D = ea(t, {
                            placement: O,
                            boundary: c,
                            rootBoundary: f,
                            altBoundary: h,
                            padding: u,
                          }),
                          M = C ? (_ ? T : I) : _ ? R : "top";
                        A[N] > w[N] && (M = Z(M));
                        var z = Z(M),
                          H = [];
                        if (
                          (o && H.push(D[k] <= 0),
                          a && H.push(D[M] <= 0, D[z] <= 0),
                          H.every(function (e) {
                            return e;
                          }))
                        ) {
                          (S = O), (x = !1);
                          break;
                        }
                        E.set(O, H);
                      }
                      if (x)
                        for (
                          var G = p ? 3 : 1,
                            K = function (e) {
                              var t = b.find(function (t) {
                                var r = E.get(t);
                                if (r)
                                  return r.slice(0, e).every(function (e) {
                                    return e;
                                  });
                              });
                              if (t) return (S = t), "break";
                            },
                            J = G;
                          J > 0 && "break" !== K(J);
                          J--
                        );
                      t.placement !== S &&
                        ((t.modifiersData[n]._skip = !0),
                        (t.placement = S),
                        (t.reset = !0));
                    }
                  },
                  requiresIfExists: ["offset"],
                  data: { _skip: !1 },
                },
                {
                  name: "preventOverflow",
                  enabled: !0,
                  phase: "main",
                  fn: function (e) {
                    var t = e.state,
                      r = e.options,
                      n = e.name,
                      i = r.mainAxis,
                      o = r.altAxis,
                      s = r.boundary,
                      a = r.rootBoundary,
                      l = r.altBoundary,
                      u = r.padding,
                      c = r.tether,
                      f = void 0 === c || c,
                      h = r.tetherOffset,
                      d = void 0 === h ? 0 : h,
                      m = ea(t, {
                        boundary: s,
                        rootBoundary: a,
                        padding: u,
                        altBoundary: l,
                      }),
                      y = V(t.placement),
                      v = q(t.placement),
                      b = !v,
                      A = J(y),
                      w = "x" === A ? "y" : "x",
                      E = t.modifiersData.popperOffsets,
                      x = t.rects.reference,
                      S = t.rects.popper,
                      P =
                        "function" == typeof d
                          ? d(
                              Object.assign({}, t.rects, {
                                placement: t.placement,
                              })
                            )
                          : d,
                      k =
                        "number" == typeof P
                          ? { mainAxis: P, altAxis: P }
                          : Object.assign({ mainAxis: 0, altAxis: 0 }, P),
                      _ = t.modifiersData.offset
                        ? t.modifiersData.offset[t.placement]
                        : null,
                      C = { x: 0, y: 0 };
                    if (E) {
                      if (void 0 === i || i) {
                        var B,
                          L = "y" === A ? "top" : I,
                          D = "y" === A ? R : T,
                          M = "y" === A ? "height" : "width",
                          U = E[A],
                          j = U + m[L],
                          z = U - m[D],
                          H = f ? -S[M] / 2 : 0,
                          G = v === F ? x[M] : S[M],
                          K = v === F ? -S[M] : -x[M],
                          W = t.elements.arrow,
                          Q = f && W ? O(W) : { width: 0, height: 0 },
                          Y = t.modifiersData["arrow#persistent"]
                            ? t.modifiersData["arrow#persistent"].padding
                            : ei(),
                          X = Y[L],
                          Z = Y[D],
                          $ = el(0, x[M], Q[M]),
                          ee = b
                            ? x[M] / 2 - H - $ - X - k.mainAxis
                            : G - $ - X - k.mainAxis,
                          et = b
                            ? -x[M] / 2 + H + $ + Z + k.mainAxis
                            : K + $ + Z + k.mainAxis,
                          er = t.elements.arrow && N(t.elements.arrow),
                          en = er
                            ? "y" === A
                              ? er.clientTop || 0
                              : er.clientLeft || 0
                            : 0,
                          eo = null != (B = null == _ ? void 0 : _[A]) ? B : 0,
                          es = el(
                            f ? g(j, U + ee - eo - en) : j,
                            U,
                            f ? p(z, U + et - eo) : z
                          );
                        (E[A] = es), (C[A] = es - U);
                      }
                      if (void 0 !== o && o) {
                        var eu,
                          ec,
                          ef = "x" === A ? "top" : I,
                          eh = "x" === A ? R : T,
                          ed = E[w],
                          ep = "y" === w ? "height" : "width",
                          eg = ed + m[ef],
                          em = ed - m[eh],
                          ey = -1 !== ["top", I].indexOf(y),
                          ev =
                            null != (ec = null == _ ? void 0 : _[w]) ? ec : 0,
                          eb = ey ? eg : ed - x[ep] - S[ep] - ev + k.altAxis,
                          eA = ey ? ed + x[ep] + S[ep] - ev - k.altAxis : em,
                          ew =
                            f && ey
                              ? (eu = el(eb, ed, eA)) > eA
                                ? eA
                                : eu
                              : el(f ? eb : eg, ed, f ? eA : em);
                        (E[w] = ew), (C[w] = ew - ed);
                      }
                      t.modifiersData[n] = C;
                    }
                  },
                  requiresIfExists: ["offset"],
                },
                {
                  name: "arrow",
                  enabled: !0,
                  phase: "main",
                  fn: function (e) {
                    var t,
                      r,
                      n = e.state,
                      i = e.name,
                      o = e.options,
                      s = n.elements.arrow,
                      a = n.modifiersData.popperOffsets,
                      l = V(n.placement),
                      u = J(l),
                      c = [I, T].indexOf(l) >= 0 ? "height" : "width";
                    if (s && a) {
                      var f = eo(
                          "number" !=
                            typeof (t =
                              "function" == typeof (t = o.padding)
                                ? t(
                                    Object.assign({}, n.rects, {
                                      placement: n.placement,
                                    })
                                  )
                                : t)
                            ? t
                            : es(t, L)
                        ),
                        h = O(s),
                        d = "y" === u ? "top" : I,
                        p = "y" === u ? R : T,
                        g =
                          n.rects.reference[c] +
                          n.rects.reference[u] -
                          a[u] -
                          n.rects.popper[c],
                        m = a[u] - n.rects.reference[u],
                        y = N(s),
                        v = y
                          ? "y" === u
                            ? y.clientHeight || 0
                            : y.clientWidth || 0
                          : 0,
                        b = f[d],
                        A = v - h[c] - f[p],
                        w = v / 2 - h[c] / 2 + (g / 2 - m / 2),
                        E = el(b, w, A);
                      n.modifiersData[i] =
                        (((r = {})[u] = E), (r.centerOffset = E - w), r);
                    }
                  },
                  effect: function (e) {
                    var t = e.state,
                      r = e.options.element,
                      n = void 0 === r ? "[data-popper-arrow]" : r;
                    null != n &&
                      ("string" != typeof n ||
                        (n = t.elements.popper.querySelector(n))) &&
                      et(t.elements.popper, n) &&
                      (t.elements.arrow = n);
                  },
                  requires: ["popperOffsets"],
                  requiresIfExists: ["preventOverflow"],
                },
                {
                  name: "hide",
                  enabled: !0,
                  phase: "main",
                  requiresIfExists: ["preventOverflow"],
                  fn: function (e) {
                    var t = e.state,
                      r = e.name,
                      n = t.rects.reference,
                      i = t.rects.popper,
                      o = t.modifiersData.preventOverflow,
                      s = ea(t, { elementContext: "reference" }),
                      a = ea(t, { altBoundary: !0 }),
                      l = eu(s, n),
                      u = eu(a, i, o),
                      c = ec(l),
                      f = ec(u);
                    (t.modifiersData[r] = {
                      referenceClippingOffsets: l,
                      popperEscapeOffsets: u,
                      isReferenceHidden: c,
                      hasPopperEscaped: f,
                    }),
                      (t.attributes.popper = Object.assign(
                        {},
                        t.attributes.popper,
                        {
                          "data-popper-reference-hidden": c,
                          "data-popper-escaped": f,
                        }
                      ));
                  },
                },
              ],
            }).defaultModifiers)
              ? []
              : i),
          (a = void 0 === (s = n.defaultOptions) ? H : s),
          function (e, t, r) {
            void 0 === r && (r = a);
            var n,
              i = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, H, a),
                modifiersData: {},
                elements: { reference: e, popper: t },
                attributes: {},
                styles: {},
              },
              s = [],
              l = !1,
              u = {
                state: i,
                setOptions: function (r) {
                  var n,
                    l,
                    c,
                    h,
                    p,
                    g = "function" == typeof r ? r(i.options) : r;
                  d(),
                    (i.options = Object.assign({}, a, i.options, g)),
                    (i.scrollParents = {
                      reference: f(e)
                        ? _(e)
                        : e.contextElement
                        ? _(e.contextElement)
                        : [],
                      popper: _(t),
                    });
                  var m =
                    ((l = Object.keys(
                      (n = []
                        .concat(o, i.options.modifiers)
                        .reduce(function (e, t) {
                          var r = e[t.name];
                          return (
                            (e[t.name] = r
                              ? Object.assign({}, r, t, {
                                  options: Object.assign(
                                    {},
                                    r.options,
                                    t.options
                                  ),
                                  data: Object.assign({}, r.data, t.data),
                                })
                              : t),
                            e
                          );
                        }, {}))
                    ).map(function (e) {
                      return n[e];
                    })),
                    (c = new Map()),
                    (h = new Set()),
                    (p = []),
                    l.forEach(function (e) {
                      c.set(e.name, e);
                    }),
                    l.forEach(function (e) {
                      h.has(e.name) ||
                        (function e(t) {
                          h.add(t.name),
                            []
                              .concat(
                                t.requires || [],
                                t.requiresIfExists || []
                              )
                              .forEach(function (t) {
                                if (!h.has(t)) {
                                  var r = c.get(t);
                                  r && e(r);
                                }
                              }),
                            p.push(t);
                        })(e);
                    }),
                    z.reduce(function (e, t) {
                      return e.concat(
                        p.filter(function (e) {
                          return e.phase === t;
                        })
                      );
                    }, []));
                  return (
                    (i.orderedModifiers = m.filter(function (e) {
                      return e.enabled;
                    })),
                    i.orderedModifiers.forEach(function (e) {
                      var t = e.name,
                        r = e.options,
                        n = e.effect;
                      if ("function" == typeof n) {
                        var o = n({
                          state: i,
                          name: t,
                          instance: u,
                          options: void 0 === r ? {} : r,
                        });
                        s.push(o || function () {});
                      }
                    }),
                    u.update()
                  );
                },
                forceUpdate: function () {
                  if (!l) {
                    var e,
                      t,
                      r,
                      n,
                      o,
                      s,
                      a,
                      f,
                      d,
                      p,
                      g,
                      y,
                      v = i.elements,
                      S = v.reference,
                      k = v.popper;
                    if (G(S, k)) {
                      (i.rects = {
                        reference:
                          ((t = N(k)),
                          (r = "fixed" === i.options.strategy),
                          (n = h(t)),
                          (f =
                            h(t) &&
                            ((s =
                              m((o = t.getBoundingClientRect()).width) /
                                t.offsetWidth || 1),
                            (a = m(o.height) / t.offsetHeight || 1),
                            1 !== s || 1 !== a)),
                          (d = E(t)),
                          (p = b(S, f, r)),
                          (g = { scrollLeft: 0, scrollTop: 0 }),
                          (y = { x: 0, y: 0 }),
                          (n || (!n && !r)) &&
                            (("body" !== w(t) || P(d)) &&
                              (g =
                                (e = t) !== c(e) && h(e)
                                  ? {
                                      scrollLeft: e.scrollLeft,
                                      scrollTop: e.scrollTop,
                                    }
                                  : A(e)),
                            h(t)
                              ? ((y = b(t, !0)),
                                (y.x += t.clientLeft),
                                (y.y += t.clientTop))
                              : d && (y.x = x(d))),
                          {
                            x: p.left + g.scrollLeft - y.x,
                            y: p.top + g.scrollTop - y.y,
                            width: p.width,
                            height: p.height,
                          }),
                        popper: O(k),
                      }),
                        (i.reset = !1),
                        (i.placement = i.options.placement),
                        i.orderedModifiers.forEach(function (e) {
                          return (i.modifiersData[e.name] = Object.assign(
                            {},
                            e.data
                          ));
                        });
                      for (var _ = 0; _ < i.orderedModifiers.length; _++) {
                        if (!0 === i.reset) {
                          (i.reset = !1), (_ = -1);
                          continue;
                        }
                        var C = i.orderedModifiers[_],
                          R = C.fn,
                          T = C.options,
                          I = void 0 === T ? {} : T,
                          B = C.name;
                        "function" == typeof R &&
                          (i =
                            R({ state: i, options: I, name: B, instance: u }) ||
                            i);
                      }
                    }
                  }
                },
                update: function () {
                  return (
                    n ||
                      (n = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (n = void 0),
                            e(
                              new Promise(function (e) {
                                u.forceUpdate(), e(i);
                              })
                            );
                        });
                      })),
                    n
                  );
                },
                destroy: function () {
                  d(), (l = !0);
                },
              };
            if (!G(e, t)) return u;
            function d() {
              s.forEach(function (e) {
                return e();
              }),
                (s = []);
            }
            return (
              u.setOptions(r).then(function (e) {
                !l && r.onFirstUpdate && r.onFirstUpdate(e);
              }),
              u
            );
          }),
        eh = r(87279),
        ed = r.n(eh),
        ep = function (e) {
          return e.reduce(function (e, t) {
            var r = t[0],
              n = t[1];
            return (e[r] = n), e;
          }, {});
        },
        eg =
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
            ? l.useLayoutEffect
            : l.useEffect,
        em = [],
        ey = function (e, t, r) {
          void 0 === r && (r = {});
          var n = l.useRef(null),
            i = {
              onFirstUpdate: r.onFirstUpdate,
              placement: r.placement || "bottom",
              strategy: r.strategy || "absolute",
              modifiers: r.modifiers || em,
            },
            o = l.useState({
              styles: {
                popper: { position: i.strategy, left: "0", top: "0" },
                arrow: { position: "absolute" },
              },
              attributes: {},
            }),
            s = o[0],
            a = o[1],
            c = l.useMemo(function () {
              return {
                name: "updateState",
                enabled: !0,
                phase: "write",
                fn: function (e) {
                  var t = e.state,
                    r = Object.keys(t.elements);
                  u.flushSync(function () {
                    a({
                      styles: ep(
                        r.map(function (e) {
                          return [e, t.styles[e] || {}];
                        })
                      ),
                      attributes: ep(
                        r.map(function (e) {
                          return [e, t.attributes[e]];
                        })
                      ),
                    });
                  });
                },
                requires: ["computeStyles"],
              };
            }, []),
            f = l.useMemo(
              function () {
                var e = {
                  onFirstUpdate: i.onFirstUpdate,
                  placement: i.placement,
                  strategy: i.strategy,
                  modifiers: [].concat(i.modifiers, [
                    c,
                    { name: "applyStyles", enabled: !1 },
                  ]),
                };
                return ed()(n.current, e)
                  ? n.current || e
                  : ((n.current = e), e);
              },
              [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c]
            ),
            h = l.useRef();
          return (
            eg(
              function () {
                h.current && h.current.setOptions(f);
              },
              [f]
            ),
            eg(
              function () {
                if (null != e && null != t) {
                  var n = (r.createPopper || ef)(e, t, f);
                  return (
                    (h.current = n),
                    function () {
                      n.destroy(), (h.current = null);
                    }
                  );
                }
              },
              [e, t, r.createPopper]
            ),
            {
              state: h.current ? h.current.state : null,
              styles: s.styles,
              attributes: s.attributes,
              update: h.current ? h.current.update : null,
              forceUpdate: h.current ? h.current.forceUpdate : null,
            }
          );
        };
    },
    10105: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = r(15039);
      function i(e) {
        var t = (0, n.useRef)();
        return (
          (0, n.useEffect)(function () {
            t.current = e;
          }),
          t.current
        );
      }
    },
    86863: function (e, t) {
      "use strict";
      /**
       * @license React
       * react.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = Symbol.for("react.element"),
        n =
          (Symbol.for("react.portal"),
          Symbol.for("react.fragment"),
          Symbol.for("react.strict_mode"),
          Symbol.for("react.profiler"),
          Symbol.for("react.provider"),
          Symbol.for("react.context"),
          Symbol.for("react.forward_ref"),
          Symbol.for("react.suspense"),
          Symbol.for("react.memo"),
          Symbol.for("react.lazy"),
          {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          }),
        i = Object.assign,
        o = {};
      function s(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = o),
          (this.updater = r || n);
      }
      function a() {}
      function l(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = o),
          (this.updater = r || n);
      }
      (s.prototype.isReactComponent = {}),
        (s.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (s.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (a.prototype = s.prototype);
      var u = (l.prototype = new a());
      (u.constructor = l), i(u, s.prototype), (u.isPureReactComponent = !0);
      var c = Object.prototype.hasOwnProperty,
        f = { key: !0, ref: !0, __self: !0, __source: !0 };
      t.createElement = function (e, t, n) {
        var i,
          o = {},
          s = null,
          a = null;
        if (null != t)
          for (i in (void 0 !== t.ref && (a = t.ref),
          void 0 !== t.key && (s = "" + t.key),
          t))
            c.call(t, i) && !f.hasOwnProperty(i) && (o[i] = t[i]);
        var l = arguments.length - 2;
        if (1 === l) o.children = n;
        else if (1 < l) {
          for (var u = Array(l), h = 0; h < l; h++) u[h] = arguments[h + 2];
          o.children = u;
        }
        if (e && e.defaultProps)
          for (i in (l = e.defaultProps)) void 0 === o[i] && (o[i] = l[i]);
        return { $$typeof: r, type: e, key: s, ref: a, props: o, _owner: null };
      };
    },
    81017: function (e, t, r) {
      "use strict";
      e.exports = r(86863);
    },
    37262: function (e) {
      "use strict";
      !(function (t) {
        function r(e) {
          let t = new Uint32Array([
              1116352408, 1899447441, 3049323471, 3921009573, 961987163,
              1508970993, 2453635748, 2870763221, 3624381080, 310598401,
              607225278, 1426881987, 1925078388, 2162078206, 2614888103,
              3248222580, 3835390401, 4022224774, 264347078, 604807628,
              770255983, 1249150122, 1555081692, 1996064986, 2554220882,
              2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
              113926993, 338241895, 666307205, 773529912, 1294757372,
              1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
              2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
              3600352804, 4094571909, 275423344, 430227734, 506948616,
              659060556, 883997877, 958139571, 1322822218, 1537002063,
              1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
              2428436474, 2756734187, 3204031479, 3329325298,
            ]),
            r = 1779033703,
            n = 3144134277,
            i = 1013904242,
            o = 2773480762,
            s = 1359893119,
            a = 2600822924,
            l = 528734635,
            u = 1541459225,
            c = new Uint32Array(64);
          function f(e) {
            let f = 0,
              h = e.length;
            for (; h >= 64; ) {
              let d = r,
                p = n,
                g = i,
                m = o,
                y = s,
                v = a,
                b = l,
                A = u,
                w,
                E,
                x,
                S,
                P;
              for (E = 0; E < 16; E++)
                (x = f + 4 * E),
                  (c[E] =
                    ((255 & e[x]) << 24) |
                    ((255 & e[x + 1]) << 16) |
                    ((255 & e[x + 2]) << 8) |
                    (255 & e[x + 3]));
              for (E = 16; E < 64; E++)
                (S =
                  (((w = c[E - 2]) >>> 17) | (w << 15)) ^
                  ((w >>> 19) | (w << 13)) ^
                  (w >>> 10)),
                  (P =
                    (((w = c[E - 15]) >>> 7) | (w << 25)) ^
                    ((w >>> 18) | (w << 14)) ^
                    (w >>> 3)),
                  (c[E] = (((S + c[E - 7]) | 0) + ((P + c[E - 16]) | 0)) | 0);
              for (E = 0; E < 64; E++)
                (S =
                  ((((((y >>> 6) | (y << 26)) ^
                    ((y >>> 11) | (y << 21)) ^
                    ((y >>> 25) | (y << 7))) +
                    ((y & v) ^ (~y & b))) |
                    0) +
                    ((A + ((t[E] + c[E]) | 0)) | 0)) |
                  0),
                  (P =
                    ((((d >>> 2) | (d << 30)) ^
                      ((d >>> 13) | (d << 19)) ^
                      ((d >>> 22) | (d << 10))) +
                      ((d & p) ^ (d & g) ^ (p & g))) |
                    0),
                  (A = b),
                  (b = v),
                  (v = y),
                  (y = (m + S) | 0),
                  (m = g),
                  (g = p),
                  (p = d),
                  (d = (S + P) | 0);
              (r = (r + d) | 0),
                (n = (n + p) | 0),
                (i = (i + g) | 0),
                (o = (o + m) | 0),
                (s = (s + y) | 0),
                (a = (a + v) | 0),
                (l = (l + b) | 0),
                (u = (u + A) | 0),
                (f += 64),
                (h -= 64);
            }
          }
          f(e);
          let h,
            d = e.length % 64,
            p = (e.length / 536870912) | 0,
            g = e.length << 3,
            m = d < 56 ? 56 : 120,
            y = e.slice(e.length - d, e.length);
          for (y.push(128), h = d + 1; h < m; h++) y.push(0);
          return (
            y.push((p >>> 24) & 255),
            y.push((p >>> 16) & 255),
            y.push((p >>> 8) & 255),
            y.push((p >>> 0) & 255),
            y.push((g >>> 24) & 255),
            y.push((g >>> 16) & 255),
            y.push((g >>> 8) & 255),
            y.push((g >>> 0) & 255),
            f(y),
            [
              (r >>> 24) & 255,
              (r >>> 16) & 255,
              (r >>> 8) & 255,
              (r >>> 0) & 255,
              (n >>> 24) & 255,
              (n >>> 16) & 255,
              (n >>> 8) & 255,
              (n >>> 0) & 255,
              (i >>> 24) & 255,
              (i >>> 16) & 255,
              (i >>> 8) & 255,
              (i >>> 0) & 255,
              (o >>> 24) & 255,
              (o >>> 16) & 255,
              (o >>> 8) & 255,
              (o >>> 0) & 255,
              (s >>> 24) & 255,
              (s >>> 16) & 255,
              (s >>> 8) & 255,
              (s >>> 0) & 255,
              (a >>> 24) & 255,
              (a >>> 16) & 255,
              (a >>> 8) & 255,
              (a >>> 0) & 255,
              (l >>> 24) & 255,
              (l >>> 16) & 255,
              (l >>> 8) & 255,
              (l >>> 0) & 255,
              (u >>> 24) & 255,
              (u >>> 16) & 255,
              (u >>> 8) & 255,
              (u >>> 0) & 255,
            ]
          );
        }
        function n(e, t, n) {
          let i;
          e = e.length <= 64 ? e : r(e);
          let o = 64 + t.length + 4,
            s = Array(o),
            a = Array(64),
            l = [];
          for (i = 0; i < 64; i++) s[i] = 54;
          for (i = 0; i < e.length; i++) s[i] ^= e[i];
          for (i = 0; i < t.length; i++) s[64 + i] = t[i];
          for (i = o - 4; i < o; i++) s[i] = 0;
          for (i = 0; i < 64; i++) a[i] = 92;
          for (i = 0; i < e.length; i++) a[i] ^= e[i];
          function u() {
            for (let e = o - 1; e >= o - 4; e--) {
              if ((s[e]++, s[e] <= 255)) return;
              s[e] = 0;
            }
          }
          for (; n >= 32; ) u(), (l = l.concat(r(a.concat(r(s))))), (n -= 32);
          return (
            n > 0 && (u(), (l = l.concat(r(a.concat(r(s))).slice(0, n)))), l
          );
        }
        function i(e, t, r, n, i) {
          let l;
          for (a(e, (2 * r - 1) * 16, i, 0, 16), l = 0; l < 2 * r; l++)
            s(e, 16 * l, i, 16),
              (function (e, t) {
                a(e, 0, t, 0, 16);
                for (let e = 8; e > 0; e -= 2)
                  (t[4] ^= o(t[0] + t[12], 7)),
                    (t[8] ^= o(t[4] + t[0], 9)),
                    (t[12] ^= o(t[8] + t[4], 13)),
                    (t[0] ^= o(t[12] + t[8], 18)),
                    (t[9] ^= o(t[5] + t[1], 7)),
                    (t[13] ^= o(t[9] + t[5], 9)),
                    (t[1] ^= o(t[13] + t[9], 13)),
                    (t[5] ^= o(t[1] + t[13], 18)),
                    (t[14] ^= o(t[10] + t[6], 7)),
                    (t[2] ^= o(t[14] + t[10], 9)),
                    (t[6] ^= o(t[2] + t[14], 13)),
                    (t[10] ^= o(t[6] + t[2], 18)),
                    (t[3] ^= o(t[15] + t[11], 7)),
                    (t[7] ^= o(t[3] + t[15], 9)),
                    (t[11] ^= o(t[7] + t[3], 13)),
                    (t[15] ^= o(t[11] + t[7], 18)),
                    (t[1] ^= o(t[0] + t[3], 7)),
                    (t[2] ^= o(t[1] + t[0], 9)),
                    (t[3] ^= o(t[2] + t[1], 13)),
                    (t[0] ^= o(t[3] + t[2], 18)),
                    (t[6] ^= o(t[5] + t[4], 7)),
                    (t[7] ^= o(t[6] + t[5], 9)),
                    (t[4] ^= o(t[7] + t[6], 13)),
                    (t[5] ^= o(t[4] + t[7], 18)),
                    (t[11] ^= o(t[10] + t[9], 7)),
                    (t[8] ^= o(t[11] + t[10], 9)),
                    (t[9] ^= o(t[8] + t[11], 13)),
                    (t[10] ^= o(t[9] + t[8], 18)),
                    (t[12] ^= o(t[15] + t[14], 7)),
                    (t[13] ^= o(t[12] + t[15], 9)),
                    (t[14] ^= o(t[13] + t[12], 13)),
                    (t[15] ^= o(t[14] + t[13], 18));
                for (let r = 0; r < 16; ++r) e[r] += t[r];
              })(i, n),
              a(i, 0, e, t + 16 * l, 16);
          for (l = 0; l < r; l++) a(e, t + 32 * l, e, 16 * l, 16);
          for (l = 0; l < r; l++)
            a(e, t + (2 * l + 1) * 16, e, (l + r) * 16, 16);
        }
        function o(e, t) {
          return (e << t) | (e >>> (32 - t));
        }
        function s(e, t, r, n) {
          for (let i = 0; i < n; i++) r[i] ^= e[t + i];
        }
        function a(e, t, r, n, i) {
          for (; i--; ) r[n++] = e[t++];
        }
        function l(e) {
          if (!e || "number" != typeof e.length) return !1;
          for (let t = 0; t < e.length; t++) {
            let r = e[t];
            if ("number" != typeof r || r % 1 || r < 0 || r >= 256) return !1;
          }
          return !0;
        }
        function u(e, t) {
          if ("number" != typeof e || e % 1) throw Error("invalid " + t);
          return e;
        }
        function c(e, t, r, o, c, f, h) {
          let d;
          if (
            ((r = u(r, "N")),
            (o = u(o, "r")),
            (c = u(c, "p")),
            (f = u(f, "dkLen")),
            0 === r || (r & (r - 1)) != 0)
          )
            throw Error("N must be power of 2");
          if (r > 2147483647 / 128 / o) throw Error("N too large");
          if (o > 2147483647 / 128 / c) throw Error("r too large");
          if (!l(e)) throw Error("password must be an array or buffer");
          if (((e = Array.prototype.slice.call(e)), !l(t)))
            throw Error("salt must be an array or buffer");
          t = Array.prototype.slice.call(t);
          let p = n(e, t, 128 * c * o),
            g = new Uint32Array(32 * c * o);
          for (let e = 0; e < g.length; e++) {
            let t = 4 * e;
            g[e] =
              ((255 & p[t + 3]) << 24) |
              ((255 & p[t + 2]) << 16) |
              ((255 & p[t + 1]) << 8) |
              ((255 & p[t + 0]) << 0);
          }
          let m = new Uint32Array(64 * o),
            y = new Uint32Array(32 * o * r),
            v = 32 * o,
            b = new Uint32Array(16),
            A = new Uint32Array(16),
            w = c * r * 2,
            E = 0,
            x = null,
            S = !1,
            P = 0,
            O = 0,
            k,
            _ = h ? parseInt(1e3 / o) : 4294967295,
            C = "undefined" != typeof setImmediate ? setImmediate : setTimeout,
            N = function () {
              let t;
              if (S) return h(Error("cancelled"), E / w);
              switch (P) {
                case 0:
                  a(g, (d = 32 * O * o), m, 0, v), (P = 1), (k = 0);
                case 1:
                  (t = r - k) > _ && (t = _);
                  for (let e = 0; e < t; e++)
                    a(m, 0, y, (k + e) * v, v), i(m, v, o, b, A);
                  if (((k += t), (E += t), h)) {
                    let e = parseInt((1e3 * E) / w);
                    if (e !== x) {
                      if ((S = h(null, E / w))) break;
                      x = e;
                    }
                  }
                  if (k < r) break;
                  (k = 0), (P = 2);
                case 2:
                  (t = r - k) > _ && (t = _);
                  for (let e = 0; e < t; e++)
                    s(y, (m[(2 * o - 1) * 16] & (r - 1)) * v, m, v),
                      i(m, v, o, b, A);
                  if (((k += t), (E += t), h)) {
                    let e = parseInt((1e3 * E) / w);
                    if (e !== x) {
                      if ((S = h(null, E / w))) break;
                      x = e;
                    }
                  }
                  if (k < r) break;
                  if ((a(m, 0, g, d, v), ++O < c)) {
                    P = 0;
                    break;
                  }
                  p = [];
                  for (let e = 0; e < g.length; e++)
                    p.push((g[e] >> 0) & 255),
                      p.push((g[e] >> 8) & 255),
                      p.push((g[e] >> 16) & 255),
                      p.push((g[e] >> 24) & 255);
                  let l = n(e, p, f);
                  return h && h(null, 1, l), l;
              }
              h && C(N);
            };
          if (!h)
            for (;;) {
              let e = N();
              if (void 0 != e) return e;
            }
          N();
        }
        e.exports = {
          scrypt: function (e, t, r, n, i, o, s) {
            return new Promise(function (a, l) {
              let u = 0;
              s && s(0),
                c(e, t, r, n, i, o, function (e, t, r) {
                  if (e) l(e);
                  else if (r) s && 1 !== u && s(1), a(new Uint8Array(r));
                  else if (s && t !== u) return (u = t), s(t);
                });
            });
          },
          syncScrypt: function (e, t, r, n, i, o) {
            return new Uint8Array(c(e, t, r, n, i, o));
          },
        };
      })(0);
    },
    34621: function (e, t, r) {
      "use strict";
      r.d(t, {
        h: function () {
          return b;
        },
      });
      var n = r(15039),
        i = r(68946),
        o = r(89342),
        s = r(15341),
        a = r(16619),
        l = r(41250);
      function u(...e) {
        return (0, n.useMemo)(() => (0, l.r)(...e), [...e]);
      }
      var c = r(60652),
        f = r(81617);
      let h = (0, n.createContext)(!1);
      var d = r(22558),
        p = r(30824);
      let g = n.Fragment,
        m = n.Fragment,
        y = (0, n.createContext)(null),
        v = (0, n.createContext)(null),
        b = Object.assign(
          (0, p.yV)(function (e, t) {
            let r,
              l,
              m = (0, n.useRef)(null),
              b = (0, f.T)(
                (0, f.h)((e) => {
                  m.current = e;
                }),
                t
              ),
              A = u(m),
              w = (function (e) {
                let t = (0, n.useContext)(h),
                  r = (0, n.useContext)(y),
                  i = u(e),
                  [o, s] = (0, n.useState)(() => {
                    if ((!t && null !== r) || d.O.isServer) return null;
                    let e =
                      null == i
                        ? void 0
                        : i.getElementById("headlessui-portal-root");
                    if (e) return e;
                    if (null === i) return null;
                    let n = i.createElement("div");
                    return (
                      n.setAttribute("id", "headlessui-portal-root"),
                      i.body.appendChild(n)
                    );
                  });
                return (
                  (0, n.useEffect)(() => {
                    null !== o &&
                      ((null != i && i.body.contains(o)) ||
                        null == i ||
                        i.body.appendChild(o));
                  }, [o, i]),
                  (0, n.useEffect)(() => {
                    t || (null !== r && s(r.current));
                  }, [r, s, t]),
                  o
                );
              })(m),
              [E] = (0, n.useState)(() => {
                var e;
                return d.O.isServer
                  ? null
                  : null != (e = null == A ? void 0 : A.createElement("div"))
                  ? e
                  : null;
              }),
              x = (0, n.useContext)(v),
              S = (0, c.H)();
            return (
              (0, o.e)(() => {
                !w ||
                  !E ||
                  w.contains(E) ||
                  (E.setAttribute("data-headlessui-portal", ""),
                  w.appendChild(E));
              }, [w, E]),
              (0, o.e)(() => {
                if (E && x) return x.register(E);
              }, [x, E]),
              (r = (0, a.z)(() => {
                var e;
                w &&
                  E &&
                  (E instanceof Node && w.contains(E) && w.removeChild(E),
                  w.childNodes.length <= 0 &&
                    (null == (e = w.parentElement) || e.removeChild(w)));
              })),
              (l = (0, n.useRef)(!1)),
              (0, n.useEffect)(
                () => (
                  (l.current = !1),
                  () => {
                    (l.current = !0),
                      (0, s.Y)(() => {
                        l.current && r();
                      });
                  }
                ),
                [r]
              ),
              S && w && E
                ? (0, i.createPortal)(
                    (0, p.sY)({
                      ourProps: { ref: b },
                      theirProps: e,
                      defaultTag: g,
                      name: "Portal",
                    }),
                    E
                  )
                : null
            );
          }),
          {
            Group: (0, p.yV)(function (e, t) {
              let { target: r, ...i } = e,
                o = { ref: (0, f.T)(t) };
              return n.createElement(
                y.Provider,
                { value: r },
                (0, p.sY)({
                  ourProps: o,
                  theirProps: i,
                  defaultTag: m,
                  name: "Popover.Group",
                })
              );
            }),
          }
        );
    },
    16619: function (e, t, r) {
      "use strict";
      r.d(t, {
        z: function () {
          return o;
        },
      });
      var n = r(15039),
        i = r(61189);
      let o = function (e) {
        let t = (0, i.E)(e);
        return n.useCallback((...e) => t.current(...e), [t]);
      };
    },
    89342: function (e, t, r) {
      "use strict";
      r.d(t, {
        e: function () {
          return o;
        },
      });
      var n = r(15039),
        i = r(22558);
      let o = (e, t) => {
        i.O.isServer ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t);
      };
    },
    61189: function (e, t, r) {
      "use strict";
      r.d(t, {
        E: function () {
          return o;
        },
      });
      var n = r(15039),
        i = r(89342);
      function o(e) {
        let t = (0, n.useRef)(e);
        return (
          (0, i.e)(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
    },
    60652: function (e, t, r) {
      "use strict";
      r.d(t, {
        H: function () {
          return s;
        },
      });
      var n,
        i = r(15039),
        o = r(22558);
      function s() {
        let e;
        let t =
            ((e = "undefined" == typeof document),
            (0, (n || (n = r.t(i, 2))).useSyncExternalStore)(
              () => () => {},
              () => !1,
              () => !e
            )),
          [s, a] = i.useState(o.O.isHandoffComplete);
        return (
          s && !1 === o.O.isHandoffComplete && a(!1),
          i.useEffect(() => {
            !0 !== s && a(!0);
          }, [s]),
          i.useEffect(() => o.O.handoff(), []),
          !t && s
        );
      }
    },
    81617: function (e, t, r) {
      "use strict";
      r.d(t, {
        T: function () {
          return a;
        },
        h: function () {
          return s;
        },
      });
      var n = r(15039),
        i = r(16619);
      let o = Symbol();
      function s(e, t = !0) {
        return Object.assign(e, { [o]: t });
      }
      function a(...e) {
        let t = (0, n.useRef)(e);
        (0, n.useEffect)(() => {
          t.current = e;
        }, [e]);
        let r = (0, i.z)((e) => {
          for (let r of t.current)
            null != r && ("function" == typeof r ? r(e) : (r.current = e));
        });
        return e.every((e) => null == e || (null == e ? void 0 : e[o]))
          ? void 0
          : r;
      }
    },
    22558: function (e, t, r) {
      "use strict";
      r.d(t, {
        O: function () {
          return a;
        },
      });
      var n = Object.defineProperty,
        i = (e, t, r) =>
          t in e
            ? n(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        o = (e, t, r) => (i(e, "symbol" != typeof t ? t + "" : t, r), r);
      class s {
        constructor() {
          o(this, "current", this.detect()),
            o(this, "handoffState", "pending"),
            o(this, "currentId", 0);
        }
        set(e) {
          this.current !== e &&
            ((this.handoffState = "pending"),
            (this.currentId = 0),
            (this.current = e));
        }
        reset() {
          this.set(this.detect());
        }
        nextId() {
          return ++this.currentId;
        }
        get isServer() {
          return "server" === this.current;
        }
        get isClient() {
          return "client" === this.current;
        }
        detect() {
          return "undefined" == typeof window || "undefined" == typeof document
            ? "server"
            : "client";
        }
        handoff() {
          "pending" === this.handoffState && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
          return "complete" === this.handoffState;
        }
      }
      let a = new s();
    },
    57827: function (e, t, r) {
      "use strict";
      function n(e, t, ...r) {
        if (e in t) {
          let n = t[e];
          return "function" == typeof n ? n(...r) : n;
        }
        let i = Error(
          `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t
          )
            .map((e) => `"${e}"`)
            .join(", ")}.`
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(i, n), i);
      }
      r.d(t, {
        E: function () {
          return n;
        },
      });
    },
    15341: function (e, t, r) {
      "use strict";
      function n(e) {
        "function" == typeof queueMicrotask
          ? queueMicrotask(e)
          : Promise.resolve()
              .then(e)
              .catch((e) =>
                setTimeout(() => {
                  throw e;
                })
              );
      }
      r.d(t, {
        Y: function () {
          return n;
        },
      });
    },
    41250: function (e, t, r) {
      "use strict";
      r.d(t, {
        r: function () {
          return i;
        },
      });
      var n = r(22558);
      function i(e) {
        return n.O.isServer
          ? null
          : e instanceof Node
          ? e.ownerDocument
          : null != e &&
            e.hasOwnProperty("current") &&
            e.current instanceof Node
          ? e.current.ownerDocument
          : document;
      }
    },
    30824: function (e, t, r) {
      "use strict";
      r.d(t, {
        oA: function () {
          return g;
        },
        yV: function () {
          return p;
        },
        sY: function () {
          return c;
        },
      });
      var n,
        i,
        o = r(15039);
      function s(...e) {
        return Array.from(
          new Set(e.flatMap((e) => ("string" == typeof e ? e.split(" ") : [])))
        )
          .filter(Boolean)
          .join(" ");
      }
      var a = r(57827),
        l =
          (((n = l || {})[(n.None = 0)] = "None"),
          (n[(n.RenderStrategy = 1)] = "RenderStrategy"),
          (n[(n.Static = 2)] = "Static"),
          n),
        u =
          (((i = u || {})[(i.Unmount = 0)] = "Unmount"),
          (i[(i.Hidden = 1)] = "Hidden"),
          i);
      function c({
        ourProps: e,
        theirProps: t,
        slot: r,
        defaultTag: n,
        features: i,
        visible: o = !0,
        name: s,
        mergeRefs: l,
      }) {
        l = null != l ? l : h;
        let u = d(t, e);
        if (o) return f(u, r, n, s, l);
        let c = null != i ? i : 0;
        if (2 & c) {
          let { static: e = !1, ...t } = u;
          if (e) return f(t, r, n, s, l);
        }
        if (1 & c) {
          let { unmount: e = !0, ...t } = u;
          return (0, a.E)(e ? 0 : 1, {
            0: () => null,
            1: () =>
              f({ ...t, hidden: !0, style: { display: "none" } }, r, n, s, l),
          });
        }
        return f(u, r, n, s, l);
      }
      function f(e, t = {}, r, n, i) {
        let {
            as: a = r,
            children: l,
            refName: u = "ref",
            ...c
          } = m(e, ["unmount", "static"]),
          f = void 0 !== e.ref ? { [u]: e.ref } : {},
          h = "function" == typeof l ? l(t) : l;
        "className" in c &&
          c.className &&
          "function" == typeof c.className &&
          (c.className = c.className(t));
        let p = {};
        if (t) {
          let e = !1,
            r = [];
          for (let [n, i] of Object.entries(t))
            "boolean" == typeof i && (e = !0), !0 === i && r.push(n);
          e && (p["data-headlessui-state"] = r.join(" "));
        }
        if (a === o.Fragment && Object.keys(g(c)).length > 0) {
          if (!(0, o.isValidElement)(h) || (Array.isArray(h) && h.length > 1))
            throw Error(
              [
                'Passing props on "Fragment"!',
                "",
                `The current component <${n} /> is rendering a "Fragment".`,
                "However we need to passthrough the following props:",
                Object.keys(c).map((e) => `  - ${e}`).join(`
`),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ].map((e) => `  - ${e}`).join(`
`),
              ].join(`
`)
            );
          let e = h.props,
            t =
              "function" == typeof (null == e ? void 0 : e.className)
                ? (...t) =>
                    s(null == e ? void 0 : e.className(...t), c.className)
                : s(null == e ? void 0 : e.className, c.className);
          return (0, o.cloneElement)(
            h,
            Object.assign(
              {},
              d(h.props, g(m(c, ["ref"]))),
              p,
              f,
              { ref: i(h.ref, f.ref) },
              t ? { className: t } : {}
            )
          );
        }
        return (0, o.createElement)(
          a,
          Object.assign(
            {},
            m(c, ["ref"]),
            a !== o.Fragment && f,
            a !== o.Fragment && p
          ),
          h
        );
      }
      function h(...e) {
        return e.every((e) => null == e)
          ? void 0
          : (t) => {
              for (let r of e)
                null != r && ("function" == typeof r ? r(t) : (r.current = t));
            };
      }
      function d(...e) {
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let t = {},
          r = {};
        for (let n of e)
          for (let e in n)
            e.startsWith("on") && "function" == typeof n[e]
              ? (null != r[e] || (r[e] = []), r[e].push(n[e]))
              : (t[e] = n[e]);
        if (t.disabled || t["aria-disabled"])
          return Object.assign(
            t,
            Object.fromEntries(Object.keys(r).map((e) => [e, void 0]))
          );
        for (let e in r)
          Object.assign(t, {
            [e](t, ...n) {
              for (let i of r[e]) {
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                i(t, ...n);
              }
            },
          });
        return t;
      }
      function p(e) {
        var t;
        return Object.assign((0, o.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function g(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function m(e, t = []) {
        let r = Object.assign({}, e);
        for (let e of t) e in r && delete r[e];
        return r;
      }
    },
    44394: function (e, t, r) {
      "use strict";
      function n(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      r.d(t, {
        _: function () {
          return n;
        },
      });
    },
    83781: function (e, t, r) {
      "use strict";
      r.d(t, {
        E: function () {
          return o;
        },
      });
      var n = r(28194),
        i = r(21596);
      function o(e, t) {
        let r = (0, n.Q)(e);
        return isNaN(t)
          ? (0, i.L)(e, NaN)
          : (t && r.setDate(r.getDate() + t), r);
      }
    },
    42837: function (e, t, r) {
      "use strict";
      r.d(t, {
        n: function () {
          return o;
        },
      });
      var n = r(28194),
        i = r(21596);
      function o(e, t) {
        let r = +(0, n.Q)(e);
        return (0, i.L)(e, r + t);
      }
    },
    9038: function (e, t, r) {
      "use strict";
      r.d(t, {
        m: function () {
          return o;
        },
      });
      var n = r(42837),
        i = r(45823);
      function o(e, t) {
        return (0, n.n)(e, t * i.yJ);
      }
    },
    23987: function (e, t, r) {
      "use strict";
      r.d(t, {
        R: function () {
          return i;
        },
      });
      var n = r(28194);
      function i(e, t) {
        return +(0, n.Q)(e) < +(0, n.Q)(t);
      }
    },
    73671: function (e, t, r) {
      "use strict";
      r.d(t, {
        v: function () {
          return o;
        },
      });
      var n = r(42529),
        i = r(92931);
      function o(e) {
        let { key: t = "public", name: r = "Public Client" } = e;
        return (0, n.e)({ ...e, key: t, name: r, type: "publicClient" }).extend(
          i.I
        );
      }
    },
    9755: function (e, t, r) {
      "use strict";
      r.d(t, {
        t: function () {
          return s;
        },
      });
      var n = r(814),
        i = r(91389),
        o = r(52887);
      function s(e, t = {}) {
        let {
          key: r = "fallback",
          name: s = "Fallback",
          rank: a = !1,
          retryCount: l,
          retryDelay: u,
        } = t;
        return ({ chain: t, pollingInterval: c = 4e3, timeout: f, ...h }) => {
          let d = e,
            p = () => {},
            g = (0, o.q)(
              {
                key: r,
                name: s,
                async request({ method: e, params: r }) {
                  let i = async (o = 0) => {
                    let s = d[o]({ ...h, chain: t, retryCount: 0, timeout: f });
                    try {
                      let t = await s.request({ method: e, params: r });
                      return (
                        p({
                          method: e,
                          params: r,
                          response: t,
                          transport: s,
                          status: "success",
                        }),
                        t
                      );
                    } catch (t) {
                      if (
                        (p({
                          error: t,
                          method: e,
                          params: r,
                          transport: s,
                          status: "error",
                        }),
                        ("code" in t &&
                          "number" == typeof t.code &&
                          (t.code === n.KB.code ||
                            t.code === n.ab.code ||
                            5e3 === t.code)) ||
                          o === d.length - 1)
                      )
                        throw t;
                      return i(o + 1);
                    }
                  };
                  return i();
                },
                retryCount: l,
                retryDelay: u,
                type: "fallback",
              },
              {
                onResponse: (e) => (p = e),
                transports: d.map((e) => e({ chain: t, retryCount: 0 })),
              }
            );
          if (a) {
            let e = "object" == typeof a ? a : {};
            !(function ({
              chain: e,
              interval: t = 4e3,
              onTransports: r,
              sampleCount: n = 10,
              timeout: o = 1e3,
              transports: s,
              weights: a = {},
            }) {
              let { stability: l = 0.7, latency: u = 0.3 } = a,
                c = [],
                f = async () => {
                  let a = await Promise.all(
                    s.map(async (t) => {
                      let r, n;
                      let i = t({ chain: e, retryCount: 0, timeout: o }),
                        s = Date.now();
                      try {
                        await i.request({ method: "net_listening" }), (n = 1);
                      } catch {
                        n = 0;
                      } finally {
                        r = Date.now();
                      }
                      return { latency: r - s, success: n };
                    })
                  );
                  c.push(a), c.length > n && c.shift();
                  let h = Math.max(
                    ...c.map((e) => Math.max(...e.map(({ latency: e }) => e)))
                  );
                  r(
                    s
                      .map((e, t) => {
                        let r = c.map((e) => e[t].latency),
                          n = r.reduce((e, t) => e + t, 0) / r.length,
                          i = c.map((e) => e[t].success),
                          o = i.reduce((e, t) => e + t, 0) / i.length;
                        return 0 === o ? [0, t] : [u * (1 - n / h) + l * o, t];
                      })
                      .sort((e, t) => t[0] - e[0])
                      .map(([, e]) => s[e])
                  ),
                    await (0, i.D)(t),
                    f();
                };
              f();
            })({
              chain: t,
              interval: e.interval ?? c,
              onTransports: (e) => (d = e),
              sampleCount: e.sampleCount,
              timeout: e.timeout,
              transports: d,
              weights: e.weights,
            });
          }
          return g;
        };
      }
    },
    89026: function (e, t, r) {
      "use strict";
      r.d(t, {
        zL: function () {
          return i;
        },
        zg: function () {
          return n;
        },
      });
      let n = 2n ** 32n - 1n,
        i = 2n ** 256n - 1n;
    },
    91873: function (e, t, r) {
      "use strict";
      r.d(t, {
        N: function () {
          return u;
        },
      });
      var n = r(62383),
        i = r(99631),
        o = r(15039),
        s = r(23753),
        a = r(13173),
        l = r(8979);
      function u(e = {}) {
        let { contracts: t = [], query: r = {} } = e,
          u = (0, l.Z)(e),
          c = (0, a.x)(),
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: r }) {
                let i = [],
                  o = r[1].contracts.length;
                for (let e = 0; e < o; e++) {
                  let n = r[1].contracts[e],
                    o = t.contracts?.[e].abi;
                  i.push({ ...n, abi: o });
                }
                let { scopeKey: s, ...a } = r[1];
                return (0, n.J)(e, { ...a, contracts: i });
              },
              queryKey: (function (e = {}) {
                let t = [];
                for (let r of e.contracts ?? []) {
                  let { abi: n, ...i } = r;
                  t.push({ ...i, chainId: i.chainId ?? e.chainId });
                }
                return ["readContracts", (0, i.O)({ ...e, contracts: t })];
              })(t),
            };
          })(u, { ...e, chainId: c }),
          h = (0, o.useMemo)(() => {
            let e = !1;
            for (let r of t) {
              let { abi: t, address: n, functionName: i } = r;
              if (!t || !n || !i) {
                e = !1;
                break;
              }
              e = !0;
            }
            return !!(e && (r.enabled ?? !0));
          }, [t, r.enabled]);
        return (0, s.aM)({
          ...f,
          ...r,
          enabled: h,
          structuralSharing: r.structuralSharing ?? s.if,
        });
      }
    },
  },
]);
