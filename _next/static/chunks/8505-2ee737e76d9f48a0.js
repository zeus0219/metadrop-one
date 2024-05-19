(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8505],
  {
    33340: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      let {
          Decimal: r,
          objectEnumValues: i,
          makeStrictEnum: s,
          Public: o,
          getRuntime: a,
        } = n(62285),
        u = {};
      (t.Prisma = u),
        (t.$Enums = {}),
        (u.prismaVersion = {
          client: "5.11.0",
          engine: "efd2449663b3d73d637ea1fd226bafbcf45b3102",
        }),
        (u.PrismaClientKnownRequestError = () => {
          let e = a().prettyName;
          throw Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (u.PrismaClientUnknownRequestError = () => {
          let e = a().prettyName;
          throw Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (u.PrismaClientRustPanicError = () => {
          let e = a().prettyName;
          throw Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (u.PrismaClientInitializationError = () => {
          let e = a().prettyName;
          throw Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (u.PrismaClientValidationError = () => {
          let e = a().prettyName;
          throw Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (u.NotFoundError = () => {
          let e = a().prettyName;
          throw Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (u.Decimal = r),
        (u.sql = () => {
          let e = a().prettyName;
          throw Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (u.empty = () => {
          let e = a().prettyName;
          throw Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (u.join = () => {
          let e = a().prettyName;
          throw Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (u.raw = () => {
          let e = a().prettyName;
          throw Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (u.validator = o.validator),
        (u.getExtensionContext = () => {
          let e = a().prettyName;
          throw Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (u.defineExtension = () => {
          let e = a().prettyName;
          throw Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
        }),
        (u.DbNull = i.instances.DbNull),
        (u.JsonNull = i.instances.JsonNull),
        (u.AnyNull = i.instances.AnyNull),
        (u.NullTypes = {
          DbNull: i.classes.DbNull,
          JsonNull: i.classes.JsonNull,
          AnyNull: i.classes.AnyNull,
        }),
        (t.Prisma.TransactionIsolationLevel = s({
          ReadUncommitted: "ReadUncommitted",
          ReadCommitted: "ReadCommitted",
          RepeatableRead: "RepeatableRead",
          Serializable: "Serializable",
        })),
        (t.Prisma.EventScalarFieldEnum = {
          id: "id",
          contract: "contract",
          chainId: "chainId",
          blockNumber: "blockNumber",
          transactionIndex: "transactionIndex",
          transactionHash: "transactionHash",
          name: "name",
          topics: "topics",
          args: "args",
          timestamp: "timestamp",
          createdAt: "createdAt",
          sortId: "sortId",
          to: "to",
          from: "from",
        }),
        (t.Prisma.UserScalarFieldEnum = {
          id: "id",
          ethAddress: "ethAddress",
          ethNonce: "ethNonce",
          createdAt: "createdAt",
          updatedAt: "updatedAt",
          refCode: "refCode",
          referrerId: "referrerId",
          referredAt: "referredAt",
        }),
        (t.Prisma.CoinScalarFieldEnum = {
          id: "id",
          createdAt: "createdAt",
          updatedAt: "updatedAt",
          deletedAt: "deletedAt",
          name: "name",
          symbol: "symbol",
          supply: "supply",
          chainId: "chainId",
          decimals: "decimals",
          buyTaxEnabled: "buyTaxEnabled",
          sellTaxEnabled: "sellTaxEnabled",
          projectBuyTaxBasisPoints: "projectBuyTaxBasisPoints",
          projectSellTaxBasisPoints: "projectSellTaxBasisPoints",
          metadropTaxRecipient: "metadropTaxRecipient",
          maxTokensPerWalletBasisPoints: "maxTokensPerWalletBasisPoints",
          maxTokensPerWalletEnabled: "maxTokensPerWalletEnabled",
          maxTokensPerTxnBasisPoints: "maxTokensPerTxnBasisPoints",
          maxTokensPerTxnEnabled: "maxTokensPerTxnEnabled",
          autoBurnEnabled: "autoBurnEnabled",
          website: "website",
          websiteVerified: "websiteVerified",
          websiteVerificationEnabled: "websiteVerificationEnabled",
          twitter: "twitter",
          twitterVerified: "twitterVerified",
          twitterVerificationEnabled: "twitterVerificationEnabled",
          discord: "discord",
          telegram: "telegram",
          telegramVerified: "telegramVerified",
          telegramVerificationEnabled: "telegramVerificationEnabled",
          supplyRecipients: "supplyRecipients",
          burnLPTokens: "burnLPTokens",
          lpLockupInDays: "lpLockupInDays",
          erc20Address: "erc20Address",
          description: "description",
          coinImageURL: "coinImageURL",
          lpFundingWei: "lpFundingWei",
          slug: "slug",
          telegramLinkToken: "telegramLinkToken",
          telegramChatId: "telegramChatId",
          telegramChatLinkedBy: "telegramChatLinkedBy",
          telegramChatInviteLink: "telegramChatInviteLink",
          telegramChatPreferences: "telegramChatPreferences",
          projectTaxRecipient: "projectTaxRecipient",
          driPoolEnabled: "driPoolEnabled",
          poolStartDate: "poolStartDate",
          poolEndDate: "poolEndDate",
          poolVestingInSeconds: "poolVestingInSeconds",
          poolMaxETHWei: "poolMaxETHWei",
          poolStartType: "poolStartType",
          poolDurationInMinutes: "poolDurationInMinutes",
          poolMaxInitialBuyWei: "poolMaxInitialBuyWei",
          poolMaxInitialLiquidityWei: "poolMaxInitialLiquidityWei",
          poolMinWei: "poolMinWei",
          poolPerAddressCapWei: "poolPerAddressCapWei",
          poolPerAddressCapEnabled: "poolPerAddressCapEnabled",
          poolPerTxnMinWei: "poolPerTxnMinWei",
          erc20driPoolAddress: "erc20driPoolAddress",
          uniswapV2PairAddress: "uniswapV2PairAddress",
          contractVerifiedAt: "contractVerifiedAt",
          deployedTxnHash: "deployedTxnHash",
          deployedBlockNumber: "deployedBlockNumber",
          deployedAt: "deployedAt",
          deployedBy: "deployedBy",
          deployedArgs: "deployedArgs",
          verificationRequestedAt: "verificationRequestedAt",
          deployStatus: "deployStatus",
          lastObservedBlock: "lastObservedBlock",
          coinType: "coinType",
          promotionStart: "promotionStart",
          promotionEnd: "promotionEnd",
          promotionMultiplier: "promotionMultiplier",
          pointsEligible: "pointsEligible",
          ownerId: "ownerId",
        }),
        (t.Prisma.PointsLedgerScalarFieldEnum = {
          id: "id",
          createdAt: "createdAt",
          updatedAt: "updatedAt",
          type: "type",
          ethAddress: "ethAddress",
          points: "points",
          coinId: "coinId",
        }),
        (t.Prisma.SortOrder = { asc: "asc", desc: "desc" }),
        (t.Prisma.JsonNullValueInput = { JsonNull: u.JsonNull }),
        (t.Prisma.NullableJsonNullValueInput = {
          DbNull: u.DbNull,
          JsonNull: u.JsonNull,
        }),
        (t.Prisma.QueryMode = {
          default: "default",
          insensitive: "insensitive",
        }),
        (t.Prisma.JsonNullValueFilter = {
          DbNull: u.DbNull,
          JsonNull: u.JsonNull,
          AnyNull: u.AnyNull,
        }),
        (t.Prisma.NullsOrder = { first: "first", last: "last" }),
        (t.PoolStart = t.$Enums.PoolStart =
          {
            ON_LAUNCH: "ON_LAUNCH",
            MANUAL: "MANUAL",
            FIXED_DATE: "FIXED_DATE",
            NONE: "NONE",
          }),
        (t.DeployStatus = t.$Enums.DeployStatus =
          {
            NONE: "NONE",
            PENDING: "PENDING",
            DEPLOYED: "DEPLOYED",
            INVALID: "INVALID",
          }),
        (t.CoinType = t.$Enums.CoinType =
          { METADROP: "METADROP", EXTERNAL: "EXTERNAL" }),
        (t.PointsType = t.$Enums.PointsType =
          {
            USER_VOLUME: "USER_VOLUME",
            USER_HOLDING: "USER_HOLDING",
            USER_FAIR_SNIPE_CONTRIBUTION: "USER_FAIR_SNIPE_CONTRIBUTION",
            COIN_INITIAL_DEPLOY: "COIN_INITIAL_DEPLOY",
            COIN_LOCKED_FOR: "COIN_LOCKED_FOR",
            COIN_LIQUIDITY_ADDITION: "COIN_LIQUIDITY_ADDITION",
            COIN_FAIR_SNIPE_LAUNCH: "COIN_FAIR_SNIPE_LAUNCH",
            COIN_FAIR_SNIPE_CONTRIBUTION: "COIN_FAIR_SNIPE_CONTRIBUTION",
            COIN_VOLUME: "COIN_VOLUME",
            COIN_MARKETCAP_PEAK: "COIN_MARKETCAP_PEAK",
          }),
        (t.Prisma.ModelName = {
          event: "event",
          user: "user",
          coin: "coin",
          pointsLedger: "pointsLedger",
        });
      class l {
        constructor() {
          return new Proxy(this, {
            get(e, t) {
              let n = a();
              throw Error(
                (n.isEdge
                  ? `PrismaClient is not configured to run in ${n.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`
                  : "PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `" +
                    n.prettyName +
                    "`).") +
                  `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`
              );
            },
          });
        }
      }
      (t.PrismaClient = l), Object.assign(t, u);
    },
    16611: function (e, t, n) {
      let r = n(33340);
      e.exports = r;
    },
    62285: function (e) {
      "use strict";
      var t = Object.defineProperty,
        n = Object.getOwnPropertyDescriptor,
        r = Object.getOwnPropertyNames,
        i = Object.prototype.hasOwnProperty,
        s = (e, n) => {
          for (var r in n) t(e, r, { get: n[r], enumerable: !0 });
        },
        o = {};
      s(o, {
        Decimal: () => e1,
        Public: () => a,
        getRuntime: () => E,
        makeStrictEnum: () => N,
        objectEnumValues: () => g,
      }),
        (e.exports = ((e, s, o, a) => {
          if ((s && "object" == typeof s) || "function" == typeof s)
            for (let o of r(s))
              i.call(e, o) ||
                void 0 === o ||
                t(e, o, {
                  get: () => s[o],
                  enumerable: !(a = n(s, o)) || a.enumerable,
                });
          return e;
        })(t({}, "__esModule", { value: !0 }), o));
      var a = {};
      function u(...e) {
        return (e) => e;
      }
      s(a, { validator: () => u });
      var l = Symbol(),
        c = new WeakMap(),
        d = class {
          constructor(e) {
            e === l
              ? c.set(this, "Prisma.".concat(this._getName()))
              : c.set(
                  this,
                  "new Prisma."
                    .concat(this._getNamespace(), ".")
                    .concat(this._getName(), "()")
                );
          }
          _getName() {
            return this.constructor.name;
          }
          toString() {
            return c.get(this);
          }
        },
        h = class extends d {
          _getNamespace() {
            return "NullTypes";
          }
        },
        f = class extends h {};
      b(f, "DbNull");
      var p = class extends h {};
      b(p, "JsonNull");
      var m = class extends h {};
      b(m, "AnyNull");
      var g = {
        classes: { DbNull: f, JsonNull: p, AnyNull: m },
        instances: { DbNull: new f(l), JsonNull: new p(l), AnyNull: new m(l) },
      };
      function b(e, t) {
        Object.defineProperty(e, "name", { value: t, configurable: !0 });
      }
      var w = new Set([
        "toJSON",
        "$$typeof",
        "asymmetricMatch",
        Symbol.iterator,
        Symbol.toStringTag,
        Symbol.isConcatSpreadable,
        Symbol.toPrimitive,
      ]);
      function N(e) {
        return new Proxy(e, {
          get(e, t) {
            if (t in e) return e[t];
            if (!w.has(t))
              throw TypeError("Invalid enum value: ".concat(String(t)));
          },
        });
      }
      var y = {
        node: "Node.js",
        workerd: "Cloudflare Workers",
        deno: "Deno and Deno Deploy",
        netlify: "Netlify Edge Functions",
        "edge-light": "Vercel Edge Functions or Edge Middleware",
      };
      function E() {
        var e, t, n;
        let r =
          "object" == typeof Netlify
            ? "netlify"
            : "string" == typeof EdgeRuntime
            ? "edge-light"
            : (null == (e = globalThis.navigator) ? void 0 : e.userAgent) ===
              "Cloudflare-Workers"
            ? "workerd"
            : globalThis.Deno
            ? "deno"
            : globalThis.__lagon__
            ? "lagon"
            : (null ==
              (n = null == (t = globalThis.process) ? void 0 : t.release)
                ? void 0
                : n.name) === "node"
            ? "node"
            : globalThis.Bun
            ? "bun"
            : globalThis.fastly
            ? "fastly"
            : "unknown";
        return {
          id: r,
          prettyName: y[r] || r,
          isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(r),
        };
      }
      var v,
        x,
        A = "0123456789abcdef",
        I =
          "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
        T =
          "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
        O = {
          precision: 20,
          rounding: 4,
          modulo: 1,
          toExpNeg: -7,
          toExpPos: 21,
          minE: -9e15,
          maxE: 9e15,
          crypto: !1,
        },
        C = !0,
        P = "[DecimalError] ",
        S = P + "Invalid argument: ",
        _ = P + "Precision limit exceeded",
        R = P + "crypto unavailable",
        D = "[object Decimal]",
        M = Math.floor,
        F = Math.pow,
        k = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        U = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        V = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        L = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        B = I.length - 1,
        q = T.length - 1,
        $ = { toStringTag: D };
      function j(e) {
        var t,
          n,
          r,
          i = e.length - 1,
          s = "",
          o = e[0];
        if (i > 0) {
          for (s += o, t = 1; t < i; t++)
            (n = 7 - (r = e[t] + "").length) && (s += ee(n)), (s += r);
          (n = 7 - (r = (o = e[t]) + "").length) && (s += ee(n));
        } else if (0 === o) return "0";
        for (; o % 10 == 0; ) o /= 10;
        return s + o;
      }
      function H(e, t, n) {
        if (e !== ~~e || e < t || e > n) throw Error(S + e);
      }
      function Z(e, t, n, r) {
        var i, s, o, a;
        for (s = e[0]; s >= 10; s /= 10) --t;
        return (
          --t < 0
            ? ((t += 7), (i = 0))
            : ((i = Math.ceil((t + 1) / 7)), (t %= 7)),
          (s = F(10, 7 - t)),
          (a = e[i] % s | 0),
          null == r
            ? t < 3
              ? (0 == t ? (a = (a / 100) | 0) : 1 == t && (a = (a / 10) | 0),
                (o =
                  (n < 4 && 99999 == a) ||
                  (n > 3 && 49999 == a) ||
                  5e4 == a ||
                  0 == a))
              : (o =
                  (((n < 4 && a + 1 == s) || (n > 3 && a + 1 == s / 2)) &&
                    ((e[i + 1] / s / 100) | 0) == F(10, t - 2) - 1) ||
                  ((a == s / 2 || 0 == a) && ((e[i + 1] / s / 100) | 0) == 0))
            : t < 4
            ? (0 == t
                ? (a = (a / 1e3) | 0)
                : 1 == t
                ? (a = (a / 100) | 0)
                : 2 == t && (a = (a / 10) | 0),
              (o = ((r || n < 4) && 9999 == a) || (!r && n > 3 && 4999 == a)))
            : (o =
                (((r || n < 4) && a + 1 == s) ||
                  (!r && n > 3 && a + 1 == s / 2)) &&
                ((e[i + 1] / s / 1e3) | 0) == F(10, t - 3) - 1),
          o
        );
      }
      function W(e, t, n) {
        for (var r, i, s = [0], o = 0, a = e.length; o < a; ) {
          for (i = s.length; i--; ) s[i] *= t;
          for (s[0] += A.indexOf(e.charAt(o++)), r = 0; r < s.length; r++)
            s[r] > n - 1 &&
              (void 0 === s[r + 1] && (s[r + 1] = 0),
              (s[r + 1] += (s[r] / n) | 0),
              (s[r] %= n));
        }
        return s.reverse();
      }
      ($.absoluteValue = $.abs =
        function () {
          var e = new this.constructor(this);
          return e.s < 0 && (e.s = 1), X(e);
        }),
        ($.ceil = function () {
          return X(new this.constructor(this), this.e + 1, 2);
        }),
        ($.clampedTo = $.clamp =
          function (e, t) {
            var n = this.constructor;
            if (((e = new n(e)), (t = new n(t)), !e.s || !t.s))
              return new n(NaN);
            if (e.gt(t)) throw Error(S + t);
            return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new n(this);
          }),
        ($.comparedTo = $.cmp =
          function (e) {
            var t,
              n,
              r,
              i,
              s = this.d,
              o = (e = new this.constructor(e)).d,
              a = this.s,
              u = e.s;
            if (!s || !o)
              return a && u
                ? a !== u
                  ? a
                  : s === o
                  ? 0
                  : !s ^ (a < 0)
                  ? 1
                  : -1
                : NaN;
            if (!s[0] || !o[0]) return s[0] ? a : o[0] ? -u : 0;
            if (a !== u) return a;
            if (this.e !== e.e) return (this.e > e.e) ^ (a < 0) ? 1 : -1;
            for (
              r = s.length, i = o.length, t = 0, n = r < i ? r : i;
              t < n;
              ++t
            )
              if (s[t] !== o[t]) return (s[t] > o[t]) ^ (a < 0) ? 1 : -1;
            return r === i ? 0 : (r > i) ^ (a < 0) ? 1 : -1;
          }),
        ($.cosine = $.cos =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return n.d
              ? n.d[0]
                ? ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + Math.max(n.e, n.sd()) + 7),
                  (r.rounding = 1),
                  (n = (function (e, t) {
                    var n, r, i;
                    if (t.isZero()) return t;
                    (r = t.d.length) < 32
                      ? (i = (1 / el(4, (n = Math.ceil(r / 3)))).toString())
                      : ((n = 16), (i = "2.3283064365386962890625e-10")),
                      (e.precision += n),
                      (t = eu(e, 1, t.times(i), new e(1)));
                    for (var s = n; s--; ) {
                      var o = t.times(t);
                      t = o.times(o).minus(o).times(8).plus(1);
                    }
                    return (e.precision -= n), t;
                  })(r, ec(r, n))),
                  (r.precision = e),
                  (r.rounding = t),
                  X(2 == x || 3 == x ? n.neg() : n, e, t, !0))
                : new r(1)
              : new r(NaN);
          }),
        ($.cubeRoot = $.cbrt =
          function () {
            var e,
              t,
              n,
              r,
              i,
              s,
              o,
              a,
              u,
              l,
              c = this.constructor;
            if (!this.isFinite() || this.isZero()) return new c(this);
            for (
              C = !1,
                (s = this.s * F(this.s * this, 1 / 3)) && Math.abs(s) != 1 / 0
                  ? (r = new c(s.toString()))
                  : ((n = j(this.d)),
                    (s = ((e = this.e) - n.length + 1) % 3) &&
                      (n += 1 == s || -2 == s ? "0" : "00"),
                    (s = F(n, 1 / 3)),
                    (e = M((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                    ((r = new c(
                      (n =
                        s == 1 / 0
                          ? "5e" + e
                          : (n = s.toExponential()).slice(
                              0,
                              n.indexOf("e") + 1
                            ) + e)
                    )).s = this.s)),
                o = (e = c.precision) + 3;
              ;

            )
              if (
                ((r = J(
                  (l = (u = (a = r).times(a).times(a)).plus(this))
                    .plus(this)
                    .times(a),
                  l.plus(u),
                  o + 2,
                  1
                )),
                j(a.d).slice(0, o) === (n = j(r.d)).slice(0, o))
              ) {
                if (
                  "9999" != (n = n.slice(o - 3, o + 1)) &&
                  (i || "4999" != n)
                ) {
                  (+n && (+n.slice(1) || "5" != n.charAt(0))) ||
                    (X(r, e + 1, 1), (t = !r.times(r).times(r).eq(this)));
                  break;
                }
                if (!i && (X(a, e + 1, 0), a.times(a).times(a).eq(this))) {
                  r = a;
                  break;
                }
                (o += 4), (i = 1);
              }
            return (C = !0), X(r, e, c.rounding, t);
          }),
        ($.decimalPlaces = $.dp =
          function () {
            var e,
              t = this.d,
              n = NaN;
            if (t) {
              if (((n = ((e = t.length - 1) - M(this.e / 7)) * 7), (e = t[e])))
                for (; e % 10 == 0; e /= 10) n--;
              n < 0 && (n = 0);
            }
            return n;
          }),
        ($.dividedBy = $.div =
          function (e) {
            return J(this, new this.constructor(e));
          }),
        ($.dividedToIntegerBy = $.divToInt =
          function (e) {
            var t = this.constructor;
            return X(J(this, new t(e), 0, 1, 1), t.precision, t.rounding);
          }),
        ($.equals = $.eq =
          function (e) {
            return 0 === this.cmp(e);
          }),
        ($.floor = function () {
          return X(new this.constructor(this), this.e + 1, 3);
        }),
        ($.greaterThan = $.gt =
          function (e) {
            return this.cmp(e) > 0;
          }),
        ($.greaterThanOrEqualTo = $.gte =
          function (e) {
            var t = this.cmp(e);
            return 1 == t || 0 === t;
          }),
        ($.hyperbolicCosine = $.cosh =
          function () {
            var e,
              t,
              n,
              r,
              i,
              s = this,
              o = s.constructor,
              a = new o(1);
            if (!s.isFinite()) return new o(s.s ? 1 / 0 : NaN);
            if (s.isZero()) return a;
            (n = o.precision),
              (r = o.rounding),
              (o.precision = n + Math.max(s.e, s.sd()) + 4),
              (o.rounding = 1),
              (i = s.d.length) < 32
                ? (t = (1 / el(4, (e = Math.ceil(i / 3)))).toString())
                : ((e = 16), (t = "2.3283064365386962890625e-10")),
              (s = eu(o, 1, s.times(t), new o(1), !0));
            for (var u, l = e, c = new o(8); l--; )
              (u = s.times(s)), (s = a.minus(u.times(c.minus(u.times(c)))));
            return X(s, (o.precision = n), (o.rounding = r), !0);
          }),
        ($.hyperbolicSine = $.sinh =
          function () {
            var e,
              t,
              n,
              r,
              i = this,
              s = i.constructor;
            if (!i.isFinite() || i.isZero()) return new s(i);
            if (
              ((t = s.precision),
              (n = s.rounding),
              (s.precision = t + Math.max(i.e, i.sd()) + 4),
              (s.rounding = 1),
              (r = i.d.length) < 3)
            )
              i = eu(s, 2, i, i, !0);
            else {
              (e = (e = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | e),
                (i = eu(s, 2, (i = i.times(1 / el(5, e))), i, !0));
              for (var o, a = new s(5), u = new s(16), l = new s(20); e--; )
                (o = i.times(i)),
                  (i = i.times(a.plus(o.times(u.times(o).plus(l)))));
            }
            return (s.precision = t), (s.rounding = n), X(i, t, n, !0);
          }),
        ($.hyperbolicTangent = $.tanh =
          function () {
            var e,
              t,
              n = this.constructor;
            return this.isFinite()
              ? this.isZero()
                ? new n(this)
                : ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + 7),
                  (n.rounding = 1),
                  J(
                    this.sinh(),
                    this.cosh(),
                    (n.precision = e),
                    (n.rounding = t)
                  ))
              : new n(this.s);
          }),
        ($.inverseCosine = $.acos =
          function () {
            var e,
              t = this,
              n = t.constructor,
              r = t.abs().cmp(1),
              i = n.precision,
              s = n.rounding;
            return -1 !== r
              ? 0 === r
                ? t.isNeg()
                  ? G(n, i, s)
                  : new n(0)
                : new n(NaN)
              : t.isZero()
              ? G(n, i + 4, s).times(0.5)
              : ((n.precision = i + 6),
                (n.rounding = 1),
                (t = t.asin()),
                (e = G(n, i + 4, s).times(0.5)),
                (n.precision = i),
                (n.rounding = s),
                e.minus(t));
          }),
        ($.inverseHyperbolicCosine = $.acosh =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return n.lte(1)
              ? new r(n.eq(1) ? 0 : NaN)
              : n.isFinite()
              ? ((e = r.precision),
                (t = r.rounding),
                (r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4),
                (r.rounding = 1),
                (C = !1),
                (n = n.times(n).minus(1).sqrt().plus(n)),
                (C = !0),
                (r.precision = e),
                (r.rounding = t),
                n.ln())
              : new r(n);
          }),
        ($.inverseHyperbolicSine = $.asinh =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return !n.isFinite() || n.isZero()
              ? new r(n)
              : ((e = r.precision),
                (t = r.rounding),
                (r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6),
                (r.rounding = 1),
                (C = !1),
                (n = n.times(n).plus(1).sqrt().plus(n)),
                (C = !0),
                (r.precision = e),
                (r.rounding = t),
                n.ln());
          }),
        ($.inverseHyperbolicTangent = $.atanh =
          function () {
            var e,
              t,
              n,
              r,
              i = this,
              s = i.constructor;
            return i.isFinite()
              ? i.e >= 0
                ? new s(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
                : ((e = s.precision),
                  (t = s.rounding),
                  Math.max((r = i.sd()), e) < -(2 * i.e) - 1
                    ? X(new s(i), e, t, !0)
                    : ((s.precision = n = r - i.e),
                      (i = J(i.plus(1), new s(1).minus(i), n + e, 1)),
                      (s.precision = e + 4),
                      (s.rounding = 1),
                      (i = i.ln()),
                      (s.precision = e),
                      (s.rounding = t),
                      i.times(0.5)))
              : new s(NaN);
          }),
        ($.inverseSine = $.asin =
          function () {
            var e,
              t,
              n,
              r,
              i = this,
              s = i.constructor;
            return i.isZero()
              ? new s(i)
              : ((t = i.abs().cmp(1)),
                (n = s.precision),
                (r = s.rounding),
                -1 !== t
                  ? 0 === t
                    ? (((e = G(s, n + 4, r).times(0.5)).s = i.s), e)
                    : new s(NaN)
                  : ((s.precision = n + 6),
                    (s.rounding = 1),
                    (i = i
                      .div(new s(1).minus(i.times(i)).sqrt().plus(1))
                      .atan()),
                    (s.precision = n),
                    (s.rounding = r),
                    i.times(2)));
          }),
        ($.inverseTangent = $.atan =
          function () {
            var e,
              t,
              n,
              r,
              i,
              s,
              o,
              a,
              u,
              l = this,
              c = l.constructor,
              d = c.precision,
              h = c.rounding;
            if (l.isFinite()) {
              if (l.isZero()) return new c(l);
              if (l.abs().eq(1) && d + 4 <= q)
                return ((o = G(c, d + 4, h).times(0.25)).s = l.s), o;
            } else {
              if (!l.s) return new c(NaN);
              if (d + 4 <= q)
                return ((o = G(c, d + 4, h).times(0.5)).s = l.s), o;
            }
            for (
              c.precision = a = d + 10,
                c.rounding = 1,
                e = n = Math.min(28, (a / 7 + 2) | 0);
              e;
              --e
            )
              l = l.div(l.times(l).plus(1).sqrt().plus(1));
            for (
              C = !1,
                t = Math.ceil(a / 7),
                r = 1,
                u = l.times(l),
                o = new c(l),
                i = l;
              -1 !== e;

            )
              if (
                ((i = i.times(u)),
                (s = o.minus(i.div((r += 2)))),
                (i = i.times(u)),
                void 0 !== (o = s.plus(i.div((r += 2)))).d[t])
              )
                for (e = t; o.d[e] === s.d[e] && e--; );
            return (
              n && (o = o.times(2 << (n - 1))),
              (C = !0),
              X(o, (c.precision = d), (c.rounding = h), !0)
            );
          }),
        ($.isFinite = function () {
          return !!this.d;
        }),
        ($.isInteger = $.isInt =
          function () {
            return !!this.d && M(this.e / 7) > this.d.length - 2;
          }),
        ($.isNaN = function () {
          return !this.s;
        }),
        ($.isNegative = $.isNeg =
          function () {
            return this.s < 0;
          }),
        ($.isPositive = $.isPos =
          function () {
            return this.s > 0;
          }),
        ($.isZero = function () {
          return !!this.d && 0 === this.d[0];
        }),
        ($.lessThan = $.lt =
          function (e) {
            return 0 > this.cmp(e);
          }),
        ($.lessThanOrEqualTo = $.lte =
          function (e) {
            return 1 > this.cmp(e);
          }),
        ($.logarithm = $.log =
          function (e) {
            var t,
              n,
              r,
              i,
              s,
              o,
              a,
              u = this.constructor,
              l = u.precision,
              c = u.rounding;
            if (null == e) (e = new u(10)), (t = !0);
            else {
              if (((n = (e = new u(e)).d), e.s < 0 || !n || !n[0] || e.eq(1)))
                return new u(NaN);
              t = e.eq(10);
            }
            if (((n = this.d), this.s < 0 || !n || !n[0] || this.eq(1)))
              return new u(
                n && !n[0] ? -1 / 0 : 1 != this.s ? NaN : n ? 0 : 1 / 0
              );
            if (t) {
              if (n.length > 1) i = !0;
              else {
                for (r = n[0]; r % 10 == 0; ) r /= 10;
                i = 1 !== r;
              }
            }
            if (
              ((C = !1),
              Z(
                (a = J(
                  es(this, (o = l + 5)),
                  t ? z(u, o + 10) : es(e, o),
                  o,
                  1
                )).d,
                (r = l),
                c
              ))
            )
              do
                if (
                  ((o += 10),
                  (a = J(es(this, o), t ? z(u, o + 10) : es(e, o), o, 1)),
                  !i)
                ) {
                  +j(a.d).slice(r + 1, r + 15) + 1 == 1e14 &&
                    (a = X(a, l + 1, 0));
                  break;
                }
              while (Z(a.d, (r += 10), c));
            return (C = !0), X(a, l, c);
          }),
        ($.minus = $.sub =
          function (e) {
            var t,
              n,
              r,
              i,
              s,
              o,
              a,
              u,
              l,
              c,
              d,
              h,
              f = this.constructor;
            if (((e = new f(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d
                    ? (e.s = -e.s)
                    : (e = new f(e.d || this.s !== e.s ? this : NaN))
                  : (e = new f(NaN)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.plus(e);
            if (
              ((l = this.d),
              (h = e.d),
              (a = f.precision),
              (u = f.rounding),
              !l[0] || !h[0])
            ) {
              if (h[0]) e.s = -e.s;
              else {
                if (!l[0]) return new f(3 === u ? -0 : 0);
                e = new f(this);
              }
              return C ? X(e, a, u) : e;
            }
            if (
              ((n = M(e.e / 7)),
              (c = M(this.e / 7)),
              (l = l.slice()),
              (s = c - n))
            ) {
              for (
                (d = s < 0)
                  ? ((t = l), (s = -s), (o = h.length))
                  : ((t = h), (n = c), (o = l.length)),
                  s > (r = Math.max(Math.ceil(a / 7), o) + 2) &&
                    ((s = r), (t.length = 1)),
                  t.reverse(),
                  r = s;
                r--;

              )
                t.push(0);
              t.reverse();
            } else {
              for (
                (d = (r = l.length) < (o = h.length)) && (o = r), r = 0;
                r < o;
                r++
              )
                if (l[r] != h[r]) {
                  d = l[r] < h[r];
                  break;
                }
              s = 0;
            }
            for (
              d && ((t = l), (l = h), (h = t), (e.s = -e.s)),
                o = l.length,
                r = h.length - o;
              r > 0;
              --r
            )
              l[o++] = 0;
            for (r = h.length; r > s; ) {
              if (l[--r] < h[r]) {
                for (i = r; i && 0 === l[--i]; ) l[i] = 1e7 - 1;
                --l[i], (l[r] += 1e7);
              }
              l[r] -= h[r];
            }
            for (; 0 === l[--o]; ) l.pop();
            for (; 0 === l[0]; l.shift()) --n;
            return l[0]
              ? ((e.d = l), (e.e = Y(l, n)), C ? X(e, a, u) : e)
              : new f(3 === u ? -0 : 0);
          }),
        ($.modulo = $.mod =
          function (e) {
            var t,
              n = this.constructor;
            return (
              (e = new n(e)),
              this.d && e.s && (!e.d || e.d[0])
                ? e.d && (!this.d || this.d[0])
                  ? ((C = !1),
                    9 == n.modulo
                      ? ((t = J(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
                      : (t = J(this, e, 0, n.modulo, 1)),
                    (t = t.times(e)),
                    (C = !0),
                    this.minus(t))
                  : X(new n(this), n.precision, n.rounding)
                : new n(NaN)
            );
          }),
        ($.naturalExponential = $.exp =
          function () {
            return ei(this);
          }),
        ($.naturalLogarithm = $.ln =
          function () {
            return es(this);
          }),
        ($.negated = $.neg =
          function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), X(e);
          }),
        ($.plus = $.add =
          function (e) {
            var t,
              n,
              r,
              i,
              s,
              o,
              a,
              u,
              l,
              c,
              d = this.constructor;
            if (((e = new d(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d || (e = new d(e.d || this.s === e.s ? this : NaN))
                  : (e = new d(NaN)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.minus(e);
            if (
              ((l = this.d),
              (c = e.d),
              (a = d.precision),
              (u = d.rounding),
              !l[0] || !c[0])
            )
              return c[0] || (e = new d(this)), C ? X(e, a, u) : e;
            if (
              ((s = M(this.e / 7)),
              (r = M(e.e / 7)),
              (l = l.slice()),
              (i = s - r))
            ) {
              for (
                i < 0
                  ? ((n = l), (i = -i), (o = c.length))
                  : ((n = c), (r = s), (o = l.length)),
                  i > (o = (s = Math.ceil(a / 7)) > o ? s + 1 : o + 1) &&
                    ((i = o), (n.length = 1)),
                  n.reverse();
                i--;

              )
                n.push(0);
              n.reverse();
            }
            for (
              (o = l.length) - (i = c.length) < 0 &&
                ((i = o), (n = c), (c = l), (l = n)),
                t = 0;
              i;

            )
              (t = ((l[--i] = l[i] + c[i] + t) / 1e7) | 0), (l[i] %= 1e7);
            for (t && (l.unshift(t), ++r), o = l.length; 0 == l[--o]; ) l.pop();
            return (e.d = l), (e.e = Y(l, r)), C ? X(e, a, u) : e;
          }),
        ($.precision = $.sd =
          function (e) {
            var t;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e)
              throw Error(S + e);
            return (
              this.d
                ? ((t = Q(this.d)), e && this.e + 1 > t && (t = this.e + 1))
                : (t = NaN),
              t
            );
          }),
        ($.round = function () {
          var e = this.constructor;
          return X(new e(this), this.e + 1, e.rounding);
        }),
        ($.sine = $.sin =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return n.isFinite()
              ? n.isZero()
                ? new r(n)
                : ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + Math.max(n.e, n.sd()) + 7),
                  (r.rounding = 1),
                  (n = (function (e, t) {
                    var n,
                      r = t.d.length;
                    if (r < 3) return t.isZero() ? t : eu(e, 2, t, t);
                    (n = (n = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | n),
                      (t = eu(e, 2, (t = t.times(1 / el(5, n))), t));
                    for (
                      var i, s = new e(5), o = new e(16), a = new e(20);
                      n--;

                    )
                      (i = t.times(t)),
                        (t = t.times(s.plus(i.times(o.times(i).minus(a)))));
                    return t;
                  })(r, ec(r, n))),
                  (r.precision = e),
                  (r.rounding = t),
                  X(x > 2 ? n.neg() : n, e, t, !0))
              : new r(NaN);
          }),
        ($.squareRoot = $.sqrt =
          function () {
            var e,
              t,
              n,
              r,
              i,
              s,
              o = this.d,
              a = this.e,
              u = this.s,
              l = this.constructor;
            if (1 !== u || !o || !o[0])
              return new l(
                !u || (u < 0 && (!o || o[0])) ? NaN : o ? this : 1 / 0
              );
            for (
              C = !1,
                0 == (u = Math.sqrt(+this)) || u == 1 / 0
                  ? (((t = j(o)).length + a) % 2 == 0 && (t += "0"),
                    (u = Math.sqrt(t)),
                    (a = M((a + 1) / 2) - (a < 0 || a % 2)),
                    (r = new l(
                      (t =
                        u == 1 / 0
                          ? "5e" + a
                          : (t = u.toExponential()).slice(
                              0,
                              t.indexOf("e") + 1
                            ) + a)
                    )))
                  : (r = new l(u.toString())),
                n = (a = l.precision) + 3;
              ;

            )
              if (
                ((r = (s = r).plus(J(this, s, n + 2, 1)).times(0.5)),
                j(s.d).slice(0, n) === (t = j(r.d)).slice(0, n))
              ) {
                if (
                  "9999" != (t = t.slice(n - 3, n + 1)) &&
                  (i || "4999" != t)
                ) {
                  (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                    (X(r, a + 1, 1), (e = !r.times(r).eq(this)));
                  break;
                }
                if (!i && (X(s, a + 1, 0), s.times(s).eq(this))) {
                  r = s;
                  break;
                }
                (n += 4), (i = 1);
              }
            return (C = !0), X(r, a, l.rounding, e);
          }),
        ($.tangent = $.tan =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return n.isFinite()
              ? n.isZero()
                ? new r(n)
                : ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + 10),
                  (r.rounding = 1),
                  ((n = n.sin()).s = 1),
                  (n = J(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0)),
                  (r.precision = e),
                  (r.rounding = t),
                  X(2 == x || 4 == x ? n.neg() : n, e, t, !0))
              : new r(NaN);
          }),
        ($.times = $.mul =
          function (e) {
            var t,
              n,
              r,
              i,
              s,
              o,
              a,
              u,
              l,
              c = this.constructor,
              d = this.d,
              h = (e = new c(e)).d;
            if (((e.s *= this.s), !d || !d[0] || !h || !h[0]))
              return new c(
                e.s && (!d || d[0] || h) && (!h || h[0] || d)
                  ? d && h
                    ? 0 * e.s
                    : e.s / 0
                  : NaN
              );
            for (
              n = M(this.e / 7) + M(e.e / 7),
                (u = d.length) < (l = h.length) &&
                  ((s = d), (d = h), (h = s), (o = u), (u = l), (l = o)),
                s = [],
                r = o = u + l;
              r--;

            )
              s.push(0);
            for (r = l; --r >= 0; ) {
              for (t = 0, i = u + r; i > r; )
                (a = s[i] + h[r] * d[i - r - 1] + t),
                  (s[i--] = a % 1e7 | 0),
                  (t = (a / 1e7) | 0);
              s[i] = (s[i] + t) % 1e7 | 0;
            }
            for (; !s[--o]; ) s.pop();
            return (
              t ? ++n : s.shift(),
              (e.d = s),
              (e.e = Y(s, n)),
              C ? X(e, c.precision, c.rounding) : e
            );
          }),
        ($.toBinary = function (e, t) {
          return ed(this, 2, e, t);
        }),
        ($.toDecimalPlaces = $.toDP =
          function (e, t) {
            var n = this,
              r = n.constructor;
            return (
              (n = new r(n)),
              void 0 === e
                ? n
                : (H(e, 0, 1e9),
                  void 0 === t ? (t = r.rounding) : H(t, 0, 8),
                  X(n, e + n.e + 1, t))
            );
          }),
        ($.toExponential = function (e, t) {
          var n,
            r = this,
            i = r.constructor;
          return (
            void 0 === e
              ? (n = K(r, !0))
              : (H(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : H(t, 0, 8),
                (n = K((r = X(new i(r), e + 1, t)), !0, e + 1))),
            r.isNeg() && !r.isZero() ? "-" + n : n
          );
        }),
        ($.toFixed = function (e, t) {
          var n,
            r,
            i = this.constructor;
          return (
            void 0 === e
              ? (n = K(this))
              : (H(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : H(t, 0, 8),
                (n = K(
                  (r = X(new i(this), e + this.e + 1, t)),
                  !1,
                  e + r.e + 1
                ))),
            this.isNeg() && !this.isZero() ? "-" + n : n
          );
        }),
        ($.toFraction = function (e) {
          var t,
            n,
            r,
            i,
            s,
            o,
            a,
            u,
            l,
            c,
            d,
            h,
            f = this.d,
            p = this.constructor;
          if (!f) return new p(this);
          if (
            ((l = n = new p(1)),
            (r = u = new p(0)),
            (o = (s = (t = new p(r)).e = Q(f) - this.e - 1) % 7),
            (t.d[0] = F(10, o < 0 ? 7 + o : o)),
            null == e)
          )
            e = s > 0 ? t : l;
          else {
            if (!(a = new p(e)).isInt() || a.lt(l)) throw Error(S + a);
            e = a.gt(t) ? (s > 0 ? t : l) : a;
          }
          for (
            C = !1,
              a = new p(j(f)),
              c = p.precision,
              p.precision = s = 14 * f.length;
            (d = J(a, t, 0, 1, 1)), 1 != (i = n.plus(d.times(r))).cmp(e);

          )
            (n = r),
              (r = i),
              (i = l),
              (l = u.plus(d.times(i))),
              (u = i),
              (i = t),
              (t = a.minus(d.times(i))),
              (a = i);
          return (
            (i = J(e.minus(n), r, 0, 1, 1)),
            (u = u.plus(i.times(l))),
            (n = n.plus(i.times(r))),
            (u.s = l.s = this.s),
            (h =
              1 >
              J(l, r, s, 1)
                .minus(this)
                .abs()
                .cmp(J(u, n, s, 1).minus(this).abs())
                ? [l, r]
                : [u, n]),
            (p.precision = c),
            (C = !0),
            h
          );
        }),
        ($.toHexadecimal = $.toHex =
          function (e, t) {
            return ed(this, 16, e, t);
          }),
        ($.toNearest = function (e, t) {
          var n = this,
            r = n.constructor;
          if (((n = new r(n)), null == e)) {
            if (!n.d) return n;
            (e = new r(1)), (t = r.rounding);
          } else {
            if (
              ((e = new r(e)),
              void 0 === t ? (t = r.rounding) : H(t, 0, 8),
              !n.d)
            )
              return e.s ? n : e;
            if (!e.d) return e.s && (e.s = n.s), e;
          }
          return (
            e.d[0]
              ? ((C = !1), (n = J(n, e, 0, t, 1).times(e)), (C = !0), X(n))
              : ((e.s = n.s), (n = e)),
            n
          );
        }),
        ($.toNumber = function () {
          return +this;
        }),
        ($.toOctal = function (e, t) {
          return ed(this, 8, e, t);
        }),
        ($.toPower = $.pow =
          function (e) {
            var t,
              n,
              r,
              i,
              s,
              o,
              a = this,
              u = a.constructor,
              l = +(e = new u(e));
            if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new u(F(+a, l));
            if ((a = new u(a)).eq(1)) return a;
            if (((r = u.precision), (s = u.rounding), e.eq(1)))
              return X(a, r, s);
            if (
              (t = M(e.e / 7)) >= e.d.length - 1 &&
              (n = l < 0 ? -l : l) <= 9007199254740991
            )
              return (
                (i = et(u, a, n, r)), e.s < 0 ? new u(1).div(i) : X(i, r, s)
              );
            if ((o = a.s) < 0) {
              if (t < e.d.length - 1) return new u(NaN);
              if (
                (1 & e.d[t] || (o = 1),
                0 == a.e && 1 == a.d[0] && 1 == a.d.length)
              )
                return (a.s = o), a;
            }
            return (t =
              0 != (n = F(+a, l)) && isFinite(n)
                ? new u(n + "").e
                : M(l * (Math.log("0." + j(a.d)) / Math.LN10 + a.e + 1))) >
              u.maxE + 1 || t < u.minE - 1
              ? new u(t > 0 ? o / 0 : 0)
              : ((C = !1),
                (u.rounding = a.s = 1),
                (n = Math.min(12, (t + "").length)),
                (i = ei(e.times(es(a, r + n)), r)).d &&
                  Z((i = X(i, r + 5, 1)).d, r, s) &&
                  ((t = r + 10),
                  +j((i = X(ei(e.times(es(a, t + n)), t), t + 5, 1)).d).slice(
                    r + 1,
                    r + 15
                  ) +
                    1 ==
                    1e14 && (i = X(i, r + 1, 0))),
                (i.s = o),
                (C = !0),
                (u.rounding = s),
                X(i, r, s));
          }),
        ($.toPrecision = function (e, t) {
          var n,
            r = this,
            i = r.constructor;
          return (
            void 0 === e
              ? (n = K(r, r.e <= i.toExpNeg || r.e >= i.toExpPos))
              : (H(e, 1, 1e9),
                void 0 === t ? (t = i.rounding) : H(t, 0, 8),
                (n = K(
                  (r = X(new i(r), e, t)),
                  e <= r.e || r.e <= i.toExpNeg,
                  e
                ))),
            r.isNeg() && !r.isZero() ? "-" + n : n
          );
        }),
        ($.toSignificantDigits = $.toSD =
          function (e, t) {
            var n = this.constructor;
            return (
              void 0 === e
                ? ((e = n.precision), (t = n.rounding))
                : (H(e, 1, 1e9), void 0 === t ? (t = n.rounding) : H(t, 0, 8)),
              X(new n(this), e, t)
            );
          }),
        ($.toString = function () {
          var e = this.constructor,
            t = K(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
          return this.isNeg() && !this.isZero() ? "-" + t : t;
        }),
        ($.truncated = $.trunc =
          function () {
            return X(new this.constructor(this), this.e + 1, 1);
          }),
        ($.valueOf = $.toJSON =
          function () {
            var e = this.constructor,
              t = K(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? "-" + t : t;
          });
      var J = (function () {
        function e(e, t, n) {
          var r,
            i = 0,
            s = e.length;
          for (e = e.slice(); s--; )
            (r = e[s] * t + i), (e[s] = r % n | 0), (i = (r / n) | 0);
          return i && e.unshift(i), e;
        }
        function t(e, t, n, r) {
          var i, s;
          if (n != r) s = n > r ? 1 : -1;
          else
            for (i = s = 0; i < n; i++)
              if (e[i] != t[i]) {
                s = e[i] > t[i] ? 1 : -1;
                break;
              }
          return s;
        }
        function n(e, t, n, r) {
          for (var i = 0; n--; )
            (e[n] -= i),
              (i = e[n] < t[n] ? 1 : 0),
              (e[n] = i * r + e[n] - t[n]);
          for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (r, i, s, o, a, u) {
          var l,
            c,
            d,
            h,
            f,
            p,
            m,
            g,
            b,
            w,
            N,
            y,
            E,
            x,
            A,
            I,
            T,
            O,
            C,
            P,
            S = r.constructor,
            _ = r.s == i.s ? 1 : -1,
            R = r.d,
            D = i.d;
          if (!R || !R[0] || !D || !D[0])
            return new S(
              r.s && i.s && (R ? !D || R[0] != D[0] : D)
                ? (R && 0 == R[0]) || !D
                  ? 0 * _
                  : _ / 0
                : NaN
            );
          for (
            u
              ? ((f = 1), (c = r.e - i.e))
              : ((u = 1e7), (f = 7), (c = M(r.e / f) - M(i.e / f))),
              C = D.length,
              T = R.length,
              w = (b = new S(_)).d = [],
              d = 0;
            D[d] == (R[d] || 0);
            d++
          );
          if (
            (D[d] > (R[d] || 0) && c--,
            null == s
              ? ((x = s = S.precision), (o = S.rounding))
              : (x = a ? s + (r.e - i.e) + 1 : s),
            x < 0)
          )
            w.push(1), (p = !0);
          else {
            if (((x = (x / f + 2) | 0), (d = 0), 1 == C)) {
              for (h = 0, D = D[0], x++; (d < T || h) && x--; d++)
                (A = h * u + (R[d] || 0)),
                  (w[d] = (A / D) | 0),
                  (h = A % D | 0);
              p = h || d < T;
            } else {
              for (
                (h = (u / (D[0] + 1)) | 0) > 1 &&
                  ((D = e(D, h, u)),
                  (R = e(R, h, u)),
                  (C = D.length),
                  (T = R.length)),
                  I = C,
                  y = (N = R.slice(0, C)).length;
                y < C;

              )
                N[y++] = 0;
              (P = D.slice()).unshift(0), (O = D[0]), D[1] >= u / 2 && ++O;
              do
                (h = 0),
                  (l = t(D, N, C, y)) < 0
                    ? ((E = N[0]),
                      C != y && (E = E * u + (N[1] || 0)),
                      (h = (E / O) | 0) > 1
                        ? (h >= u && (h = u - 1),
                          (g = (m = e(D, h, u)).length),
                          (y = N.length),
                          1 == (l = t(m, N, g, y)) &&
                            (h--, n(m, C < g ? P : D, g, u)))
                        : (0 == h && (l = h = 1), (m = D.slice())),
                      (g = m.length) < y && m.unshift(0),
                      n(N, m, y, u),
                      -1 == l &&
                        ((y = N.length),
                        (l = t(D, N, C, y)) < 1 &&
                          (h++, n(N, C < y ? P : D, y, u))),
                      (y = N.length))
                    : 0 === l && (h++, (N = [0])),
                  (w[d++] = h),
                  l && N[0] ? (N[y++] = R[I] || 0) : ((N = [R[I]]), (y = 1));
              while ((I++ < T || void 0 !== N[0]) && x--);
              p = void 0 !== N[0];
            }
            w[0] || w.shift();
          }
          if (1 == f) (b.e = c), (v = p);
          else {
            for (d = 1, h = w[0]; h >= 10; h /= 10) d++;
            (b.e = d + c * f - 1), X(b, a ? s + b.e + 1 : s, o, p);
          }
          return b;
        };
      })();
      function X(e, t, n, r) {
        var i,
          s,
          o,
          a,
          u,
          l,
          c,
          d,
          h,
          f = e.constructor;
        e: if (null != t) {
          if (!(d = e.d)) return e;
          for (i = 1, a = d[0]; a >= 10; a /= 10) i++;
          if ((s = t - i) < 0)
            (s += 7),
              (o = t),
              (u = ((c = d[(h = 0)]) / F(10, i - o - 1)) % 10 | 0);
          else if ((h = Math.ceil((s + 1) / 7)) >= (a = d.length)) {
            if (r) {
              for (; a++ <= h; ) d.push(0);
              (c = u = 0), (i = 1), (s %= 7), (o = s - 7 + 1);
            } else break e;
          } else {
            for (c = a = d[h], i = 1; a >= 10; a /= 10) i++;
            (s %= 7),
              (u = (o = s - 7 + i) < 0 ? 0 : (c / F(10, i - o - 1)) % 10 | 0);
          }
          if (
            ((r =
              r ||
              t < 0 ||
              void 0 !== d[h + 1] ||
              (o < 0 ? c : c % F(10, i - o - 1))),
            (l =
              n < 4
                ? (u || r) && (0 == n || n == (e.s < 0 ? 3 : 2))
                : u > 5 ||
                  (5 == u &&
                    (4 == n ||
                      r ||
                      (6 == n &&
                        (s > 0 ? (o > 0 ? c / F(10, i - o) : 0) : d[h - 1]) %
                          10 &
                          1) ||
                      n == (e.s < 0 ? 8 : 7)))),
            t < 1 || !d[0])
          )
            return (
              (d.length = 0),
              l
                ? ((t -= e.e + 1),
                  (d[0] = F(10, (7 - (t % 7)) % 7)),
                  (e.e = -t || 0))
                : (d[0] = e.e = 0),
              e
            );
          if (
            (0 == s
              ? ((d.length = h), (a = 1), h--)
              : ((d.length = h + 1),
                (a = F(10, 7 - s)),
                (d[h] = o > 0 ? ((c / F(10, i - o)) % F(10, o) | 0) * a : 0)),
            l)
          )
            for (;;)
              if (0 == h) {
                for (s = 1, o = d[0]; o >= 10; o /= 10) s++;
                for (o = d[0] += a, a = 1; o >= 10; o /= 10) a++;
                s != a && (e.e++, 1e7 == d[0] && (d[0] = 1));
                break;
              } else {
                if (((d[h] += a), 1e7 != d[h])) break;
                (d[h--] = 0), (a = 1);
              }
          for (s = d.length; 0 === d[--s]; ) d.pop();
        }
        return (
          C &&
            (e.e > f.maxE
              ? ((e.d = null), (e.e = NaN))
              : e.e < f.minE && ((e.e = 0), (e.d = [0]))),
          e
        );
      }
      function K(e, t, n) {
        if (!e.isFinite()) return eo(e);
        var r,
          i = e.e,
          s = j(e.d),
          o = s.length;
        return (
          t
            ? (n && (r = n - o) > 0
                ? (s = s.charAt(0) + "." + s.slice(1) + ee(r))
                : o > 1 && (s = s.charAt(0) + "." + s.slice(1)),
              (s = s + (e.e < 0 ? "e" : "e+") + e.e))
            : i < 0
            ? ((s = "0." + ee(-i - 1) + s),
              n && (r = n - o) > 0 && (s += ee(r)))
            : i >= o
            ? ((s += ee(i + 1 - o)),
              n && (r = n - i - 1) > 0 && (s = s + "." + ee(r)))
            : ((r = i + 1) < o && (s = s.slice(0, r) + "." + s.slice(r)),
              n &&
                (r = n - o) > 0 &&
                (i + 1 === o && (s += "."), (s += ee(r)))),
          s
        );
      }
      function Y(e, t) {
        var n = e[0];
        for (t *= 7; n >= 10; n /= 10) t++;
        return t;
      }
      function z(e, t, n) {
        if (t > B) throw ((C = !0), n && (e.precision = n), Error(_));
        return X(new e(I), t, 1, !0);
      }
      function G(e, t, n) {
        if (t > q) throw Error(_);
        return X(new e(T), t, n, !0);
      }
      function Q(e) {
        var t = e.length - 1,
          n = 7 * t + 1;
        if ((t = e[t])) {
          for (; t % 10 == 0; t /= 10) n--;
          for (t = e[0]; t >= 10; t /= 10) n++;
        }
        return n;
      }
      function ee(e) {
        for (var t = ""; e--; ) t += "0";
        return t;
      }
      function et(e, t, n, r) {
        var i,
          s = new e(1),
          o = Math.ceil(r / 7 + 4);
        for (C = !1; ; ) {
          if (
            (n % 2 && eh((s = s.times(t)).d, o) && (i = !0),
            0 === (n = M(n / 2)))
          ) {
            (n = s.d.length - 1), i && 0 === s.d[n] && ++s.d[n];
            break;
          }
          eh((t = t.times(t)).d, o);
        }
        return (C = !0), s;
      }
      function en(e) {
        return 1 & e.d[e.d.length - 1];
      }
      function er(e, t, n) {
        for (var r, i = new e(t[0]), s = 0; ++s < t.length; )
          if ((r = new e(t[s])).s) i[n](r) && (i = r);
          else {
            i = r;
            break;
          }
        return i;
      }
      function ei(e, t) {
        var n,
          r,
          i,
          s,
          o,
          a,
          u,
          l = 0,
          c = 0,
          d = 0,
          h = e.constructor,
          f = h.rounding,
          p = h.precision;
        if (!e.d || !e.d[0] || e.e > 17)
          return new h(
            e.d
              ? e.d[0]
                ? e.s < 0
                  ? 0
                  : 1 / 0
                : 1
              : e.s
              ? e.s < 0
                ? 0
                : e
              : NaN
          );
        for (
          null == t ? ((C = !1), (u = p)) : (u = t), a = new h(0.03125);
          e.e > -2;

        )
          (e = e.times(a)), (d += 5);
        for (
          u += r = ((Math.log(F(2, d)) / Math.LN10) * 2 + 5) | 0,
            n = s = o = new h(1),
            h.precision = u;
          ;

        ) {
          if (
            ((s = X(s.times(e), u, 1)),
            (n = n.times(++c)),
            j((a = o.plus(J(s, n, u, 1))).d).slice(0, u) === j(o.d).slice(0, u))
          ) {
            for (i = d; i--; ) o = X(o.times(o), u, 1);
            if (null != t) return (h.precision = p), o;
            if (!(l < 3 && Z(o.d, u - r, f, l)))
              return X(o, (h.precision = p), f, (C = !0));
            (h.precision = u += 10), (n = s = a = new h(1)), (c = 0), l++;
          }
          o = a;
        }
      }
      function es(e, t) {
        var n,
          r,
          i,
          s,
          o,
          a,
          u,
          l,
          c,
          d,
          h,
          f = 1,
          p = e,
          m = p.d,
          g = p.constructor,
          b = g.rounding,
          w = g.precision;
        if (p.s < 0 || !m || !m[0] || (!p.e && 1 == m[0] && 1 == m.length))
          return new g(m && !m[0] ? -1 / 0 : 1 != p.s ? NaN : m ? 0 : p);
        if (
          (null == t ? ((C = !1), (c = w)) : (c = t),
          (g.precision = c += 10),
          (r = (n = j(m)).charAt(0)),
          !(15e14 > Math.abs((s = p.e))))
        )
          return (
            (l = z(g, c + 2, w).times(s + "")),
            (p = es(new g(r + "." + n.slice(1)), c - 10).plus(l)),
            (g.precision = w),
            null == t ? X(p, w, b, (C = !0)) : p
          );
        for (; (r < 7 && 1 != r) || (1 == r && n.charAt(1) > 3); )
          (r = (n = j((p = p.times(e)).d)).charAt(0)), f++;
        for (
          s = p.e,
            r > 1
              ? ((p = new g("0." + n)), s++)
              : (p = new g(r + "." + n.slice(1))),
            d = p,
            u = o = p = J(p.minus(1), p.plus(1), c, 1),
            h = X(p.times(p), c, 1),
            i = 3;
          ;

        ) {
          if (
            ((o = X(o.times(h), c, 1)),
            j((l = u.plus(J(o, new g(i), c, 1))).d).slice(0, c) ===
              j(u.d).slice(0, c))
          ) {
            if (
              ((u = u.times(2)),
              0 !== s && (u = u.plus(z(g, c + 2, w).times(s + ""))),
              (u = J(u, new g(f), c, 1)),
              null != t)
            )
              return (g.precision = w), u;
            if (!Z(u.d, c - 10, b, a))
              return X(u, (g.precision = w), b, (C = !0));
            (g.precision = c += 10),
              (l = o = p = J(d.minus(1), d.plus(1), c, 1)),
              (h = X(p.times(p), c, 1)),
              (i = a = 1);
          }
          (u = l), (i += 2);
        }
      }
      function eo(e) {
        return String((e.s * e.s) / 0);
      }
      function ea(e, t) {
        var n, r, i;
        for (
          (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
            (r = t.search(/e/i)) > 0
              ? (n < 0 && (n = r),
                (n += +t.slice(r + 1)),
                (t = t.substring(0, r)))
              : n < 0 && (n = t.length),
            r = 0;
          48 === t.charCodeAt(r);
          r++
        );
        for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
        if ((t = t.slice(r, i))) {
          if (
            ((i -= r),
            (e.e = n = n - r - 1),
            (e.d = []),
            (r = (n + 1) % 7),
            n < 0 && (r += 7),
            r < i)
          ) {
            for (r && e.d.push(+t.slice(0, r)), i -= 7; r < i; )
              e.d.push(+t.slice(r, (r += 7)));
            r = 7 - (t = t.slice(r)).length;
          } else r -= i;
          for (; r--; ) t += "0";
          e.d.push(+t),
            C &&
              (e.e > e.constructor.maxE
                ? ((e.d = null), (e.e = NaN))
                : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
        } else (e.e = 0), (e.d = [0]);
        return e;
      }
      function eu(e, t, n, r, i) {
        var s,
          o,
          a,
          u,
          l = e.precision,
          c = Math.ceil(l / 7);
        for (C = !1, u = n.times(n), a = new e(r); ; ) {
          if (
            ((o = J(a.times(u), new e(t++ * t++), l, 1)),
            (a = i ? r.plus(o) : r.minus(o)),
            (r = J(o.times(u), new e(t++ * t++), l, 1)),
            void 0 !== (o = a.plus(r)).d[c])
          ) {
            for (s = c; o.d[s] === a.d[s] && s--; );
            if (-1 == s) break;
          }
          (s = a), (a = r), (r = o), (o = s);
        }
        return (C = !0), (o.d.length = c + 1), o;
      }
      function el(e, t) {
        for (var n = e; --t; ) n *= e;
        return n;
      }
      function ec(e, t) {
        var n,
          r = t.s < 0,
          i = G(e, e.precision, 1),
          s = i.times(0.5);
        if ((t = t.abs()).lte(s)) return (x = r ? 4 : 1), t;
        if ((n = t.divToInt(i)).isZero()) x = r ? 3 : 2;
        else {
          if ((t = t.minus(n.times(i))).lte(s))
            return (x = en(n) ? (r ? 2 : 3) : r ? 4 : 1), t;
          x = en(n) ? (r ? 1 : 4) : r ? 3 : 2;
        }
        return t.minus(i).abs();
      }
      function ed(e, t, n, r) {
        var i,
          s,
          o,
          a,
          u,
          l,
          c,
          d,
          h,
          f = e.constructor,
          p = void 0 !== n;
        if (
          (p
            ? (H(n, 1, 1e9), void 0 === r ? (r = f.rounding) : H(r, 0, 8))
            : ((n = f.precision), (r = f.rounding)),
          e.isFinite())
        ) {
          for (
            o = (c = K(e)).indexOf("."),
              p
                ? ((i = 2),
                  16 == t ? (n = 4 * n - 3) : 8 == t && (n = 3 * n - 2))
                : (i = t),
              o >= 0 &&
                ((c = c.replace(".", "")),
                ((h = new f(1)).e = c.length - o),
                (h.d = W(K(h), 10, i)),
                (h.e = h.d.length)),
              s = u = (d = W(c, 10, i)).length;
            0 == d[--u];

          )
            d.pop();
          if (d[0]) {
            if (
              (o < 0
                ? s--
                : (((e = new f(e)).d = d),
                  (e.e = s),
                  (d = (e = J(e, h, n, r, 0, i)).d),
                  (s = e.e),
                  (l = v)),
              (o = d[n]),
              (a = i / 2),
              (l = l || void 0 !== d[n + 1]),
              (l =
                r < 4
                  ? (void 0 !== o || l) && (0 === r || r === (e.s < 0 ? 3 : 2))
                  : o > a ||
                    (o === a &&
                      (4 === r ||
                        l ||
                        (6 === r && 1 & d[n - 1]) ||
                        r === (e.s < 0 ? 8 : 7)))),
              (d.length = n),
              l)
            )
              for (; ++d[--n] > i - 1; ) (d[n] = 0), n || (++s, d.unshift(1));
            for (u = d.length; !d[u - 1]; --u);
            for (o = 0, c = ""; o < u; o++) c += A.charAt(d[o]);
            if (p) {
              if (u > 1) {
                if (16 == t || 8 == t) {
                  for (o = 16 == t ? 4 : 3, --u; u % o; u++) c += "0";
                  for (u = (d = W(c, i, t)).length; !d[u - 1]; --u);
                  for (o = 1, c = "1."; o < u; o++) c += A.charAt(d[o]);
                } else c = c.charAt(0) + "." + c.slice(1);
              }
              c = c + (s < 0 ? "p" : "p+") + s;
            } else if (s < 0) {
              for (; ++s; ) c = "0" + c;
              c = "0." + c;
            } else if (++s > u) for (s -= u; s--; ) c += "0";
            else s < u && (c = c.slice(0, s) + "." + c.slice(s));
          } else c = p ? "0p+0" : "0";
          c = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + c;
        } else c = eo(e);
        return e.s < 0 ? "-" + c : c;
      }
      function eh(e, t) {
        if (e.length > t) return (e.length = t), !0;
      }
      function ef(e) {
        return new this(e).abs();
      }
      function ep(e) {
        return new this(e).acos();
      }
      function em(e) {
        return new this(e).acosh();
      }
      function eg(e, t) {
        return new this(e).plus(t);
      }
      function eb(e) {
        return new this(e).asin();
      }
      function ew(e) {
        return new this(e).asinh();
      }
      function eN(e) {
        return new this(e).atan();
      }
      function ey(e) {
        return new this(e).atanh();
      }
      function eE(e, t) {
        (e = new this(e)), (t = new this(t));
        var n,
          r = this.precision,
          i = this.rounding,
          s = r + 4;
        return (
          e.s && t.s
            ? e.d || t.d
              ? !t.d || e.isZero()
                ? ((n = t.s < 0 ? G(this, r, i) : new this(0)).s = e.s)
                : !e.d || t.isZero()
                ? ((n = G(this, s, 1).times(0.5)).s = e.s)
                : t.s < 0
                ? ((this.precision = s),
                  (this.rounding = 1),
                  (n = this.atan(J(e, t, s, 1))),
                  (t = G(this, s, 1)),
                  (this.precision = r),
                  (this.rounding = i),
                  (n = e.s < 0 ? n.minus(t) : n.plus(t)))
                : (n = this.atan(J(e, t, s, 1)))
              : ((n = G(this, s, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (n = new this(NaN)),
          n
        );
      }
      function ev(e) {
        return new this(e).cbrt();
      }
      function ex(e) {
        return X((e = new this(e)), e.e + 1, 2);
      }
      function eA(e, t, n) {
        return new this(e).clamp(t, n);
      }
      function eI(e) {
        if (!e || "object" != typeof e) throw Error(P + "Object expected");
        var t,
          n,
          r,
          i = !0 === e.defaults,
          s = [
            "precision",
            1,
            1e9,
            "rounding",
            0,
            8,
            "toExpNeg",
            -9e15,
            0,
            "toExpPos",
            0,
            9e15,
            "maxE",
            0,
            9e15,
            "minE",
            -9e15,
            0,
            "modulo",
            0,
            9,
          ];
        for (t = 0; t < s.length; t += 3)
          if (((n = s[t]), i && (this[n] = O[n]), void 0 !== (r = e[n]))) {
            if (M(r) === r && r >= s[t + 1] && r <= s[t + 2]) this[n] = r;
            else throw Error(S + n + ": " + r);
          }
        if (((n = "crypto"), i && (this[n] = O[n]), void 0 !== (r = e[n]))) {
          if (!0 === r || !1 === r || 0 === r || 1 === r) {
            if (r) {
              if (
                "u" > typeof crypto &&
                crypto &&
                (crypto.getRandomValues || crypto.randomBytes)
              )
                this[n] = !0;
              else throw Error(R);
            } else this[n] = !1;
          } else throw Error(S + n + ": " + r);
        }
        return this;
      }
      function eT(e) {
        return new this(e).cos();
      }
      function eO(e) {
        return new this(e).cosh();
      }
      function eC(e, t) {
        return new this(e).div(t);
      }
      function eP(e) {
        return new this(e).exp();
      }
      function eS(e) {
        return X((e = new this(e)), e.e + 1, 3);
      }
      function e_() {
        var e,
          t,
          n = new this(0);
        for (C = !1, e = 0; e < arguments.length; )
          if (((t = new this(arguments[e++])), t.d))
            n.d && (n = n.plus(t.times(t)));
          else {
            if (t.s) return (C = !0), new this(1 / 0);
            n = t;
          }
        return (C = !0), n.sqrt();
      }
      function eR(e) {
        return e instanceof eQ || (e && e.toStringTag === D) || !1;
      }
      function eD(e) {
        return new this(e).ln();
      }
      function eM(e, t) {
        return new this(e).log(t);
      }
      function eF(e) {
        return new this(e).log(2);
      }
      function ek(e) {
        return new this(e).log(10);
      }
      function eU() {
        return er(this, arguments, "lt");
      }
      function eV() {
        return er(this, arguments, "gt");
      }
      function eL(e, t) {
        return new this(e).mod(t);
      }
      function eB(e, t) {
        return new this(e).mul(t);
      }
      function eq(e, t) {
        return new this(e).pow(t);
      }
      function e$(e) {
        var t,
          n,
          r,
          i,
          s = 0,
          o = new this(1),
          a = [];
        if (
          (void 0 === e ? (e = this.precision) : H(e, 1, 1e9),
          (r = Math.ceil(e / 7)),
          this.crypto)
        ) {
          if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(r)); s < r; )
              (i = t[s]) >= 429e7
                ? (t[s] = crypto.getRandomValues(new Uint32Array(1))[0])
                : (a[s++] = i % 1e7);
          else if (crypto.randomBytes) {
            for (t = crypto.randomBytes((r *= 4)); s < r; )
              (i =
                t[s] +
                (t[s + 1] << 8) +
                (t[s + 2] << 16) +
                ((127 & t[s + 3]) << 24)) >= 214e7
                ? crypto.randomBytes(4).copy(t, s)
                : (a.push(i % 1e7), (s += 4));
            s = r / 4;
          } else throw Error(R);
        } else for (; s < r; ) a[s++] = (1e7 * Math.random()) | 0;
        for (
          r = a[--s],
            e %= 7,
            r && e && ((i = F(10, 7 - e)), (a[s] = ((r / i) | 0) * i));
          0 === a[s];
          s--
        )
          a.pop();
        if (s < 0) (n = 0), (a = [0]);
        else {
          for (n = -1; 0 === a[0]; n -= 7) a.shift();
          for (r = 1, i = a[0]; i >= 10; i /= 10) r++;
          r < 7 && (n -= 7 - r);
        }
        return (o.e = n), (o.d = a), o;
      }
      function ej(e) {
        return X((e = new this(e)), e.e + 1, this.rounding);
      }
      function eH(e) {
        return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
      }
      function eZ(e) {
        return new this(e).sin();
      }
      function eW(e) {
        return new this(e).sinh();
      }
      function eJ(e) {
        return new this(e).sqrt();
      }
      function eX(e, t) {
        return new this(e).sub(t);
      }
      function eK() {
        var e = 0,
          t = arguments,
          n = new this(t[e]);
        for (C = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
        return (C = !0), X(n, this.precision, this.rounding);
      }
      function eY(e) {
        return new this(e).tan();
      }
      function ez(e) {
        return new this(e).tanh();
      }
      function eG(e) {
        return X((e = new this(e)), e.e + 1, 1);
      }
      ($[Symbol.for("nodejs.util.inspect.custom")] = $.toString),
        ($[Symbol.toStringTag] = "Decimal");
      var eQ = ($.constructor = (function e(t) {
        var n, r, i;
        function s(e) {
          var t, n, r;
          if (!(this instanceof s)) return new s(e);
          if (((this.constructor = s), eR(e))) {
            (this.s = e.s),
              C
                ? !e.d || e.e > s.maxE
                  ? ((this.e = NaN), (this.d = null))
                  : e.e < s.minE
                  ? ((this.e = 0), (this.d = [0]))
                  : ((this.e = e.e), (this.d = e.d.slice()))
                : ((this.e = e.e), (this.d = e.d ? e.d.slice() : e.d));
            return;
          }
          if ("number" == (r = typeof e)) {
            if (0 === e) {
              (this.s = 1 / e < 0 ? -1 : 1), (this.e = 0), (this.d = [0]);
              return;
            }
            if (
              (e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1),
              e === ~~e && e < 1e7)
            ) {
              for (t = 0, n = e; n >= 10; n /= 10) t++;
              C
                ? t > s.maxE
                  ? ((this.e = NaN), (this.d = null))
                  : t < s.minE
                  ? ((this.e = 0), (this.d = [0]))
                  : ((this.e = t), (this.d = [e]))
                : ((this.e = t), (this.d = [e]));
              return;
            }
            if (0 * e != 0) {
              e || (this.s = NaN), (this.e = NaN), (this.d = null);
              return;
            }
            return ea(this, e.toString());
          }
          if ("string" !== r) throw Error(S + e);
          return (
            45 === (n = e.charCodeAt(0))
              ? ((e = e.slice(1)), (this.s = -1))
              : (43 === n && (e = e.slice(1)), (this.s = 1)),
            L.test(e)
              ? ea(this, e)
              : (function (e, t) {
                  var n, r, i, s, o, a, u, l, c;
                  if (t.indexOf("_") > -1) {
                    if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), L.test(t)))
                      return ea(e, t);
                  } else if ("Infinity" === t || "NaN" === t)
                    return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
                  if (U.test(t)) (n = 16), (t = t.toLowerCase());
                  else if (k.test(t)) n = 2;
                  else if (V.test(t)) n = 8;
                  else throw Error(S + t);
                  for (
                    (s = t.search(/p/i)) > 0
                      ? ((u = +t.slice(s + 1)), (t = t.substring(2, s)))
                      : (t = t.slice(2)),
                      o = (s = t.indexOf(".")) >= 0,
                      r = e.constructor,
                      o &&
                        ((s = (a = (t = t.replace(".", "")).length) - s),
                        (i = et(r, new r(n), s, 2 * s))),
                      s = c = (l = W(t, n, 1e7)).length - 1;
                    0 === l[s];
                    --s
                  )
                    l.pop();
                  return s < 0
                    ? new r(0 * e.s)
                    : ((e.e = Y(l, c)),
                      (e.d = l),
                      (C = !1),
                      o && (e = J(e, i, 4 * a)),
                      u &&
                        (e = e.times(
                          54 > Math.abs(u) ? F(2, u) : eQ.pow(2, u)
                        )),
                      (C = !0),
                      e);
                })(this, e)
          );
        }
        if (
          ((s.prototype = $),
          (s.ROUND_UP = 0),
          (s.ROUND_DOWN = 1),
          (s.ROUND_CEIL = 2),
          (s.ROUND_FLOOR = 3),
          (s.ROUND_HALF_UP = 4),
          (s.ROUND_HALF_DOWN = 5),
          (s.ROUND_HALF_EVEN = 6),
          (s.ROUND_HALF_CEIL = 7),
          (s.ROUND_HALF_FLOOR = 8),
          (s.EUCLID = 9),
          (s.config = s.set = eI),
          (s.clone = e),
          (s.isDecimal = eR),
          (s.abs = ef),
          (s.acos = ep),
          (s.acosh = em),
          (s.add = eg),
          (s.asin = eb),
          (s.asinh = ew),
          (s.atan = eN),
          (s.atanh = ey),
          (s.atan2 = eE),
          (s.cbrt = ev),
          (s.ceil = ex),
          (s.clamp = eA),
          (s.cos = eT),
          (s.cosh = eO),
          (s.div = eC),
          (s.exp = eP),
          (s.floor = eS),
          (s.hypot = e_),
          (s.ln = eD),
          (s.log = eM),
          (s.log10 = ek),
          (s.log2 = eF),
          (s.max = eU),
          (s.min = eV),
          (s.mod = eL),
          (s.mul = eB),
          (s.pow = eq),
          (s.random = e$),
          (s.round = ej),
          (s.sign = eH),
          (s.sin = eZ),
          (s.sinh = eW),
          (s.sqrt = eJ),
          (s.sub = eX),
          (s.sum = eK),
          (s.tan = eY),
          (s.tanh = ez),
          (s.trunc = eG),
          void 0 === t && (t = {}),
          t && !0 !== t.defaults)
        )
          for (
            i = [
              "precision",
              "rounding",
              "toExpNeg",
              "toExpPos",
              "maxE",
              "minE",
              "modulo",
              "crypto",
            ],
              n = 0;
            n < i.length;

          )
            t.hasOwnProperty((r = i[n++])) || (t[r] = this[r]);
        return s.config(t), s;
      })(O));
      (I = new eQ(I)), (T = new eQ(T));
      var e1 = eQ; /*! Bundled license information:

decimal.js/decimal.mjs:
  (*!
   *  decimal.js v10.4.3
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   *)
*/
    },
    18240: function (e, t, n) {
      let { Ulid: r } = n(64810),
        { UlidMonotonic: i } = n(11351),
        { Uuid: s } = n(21932),
        { Uuid1: o } = n(68151),
        { Uuid4: a } = n(74299),
        { Uuid6: u } = n(69106),
        { UuidNil: l } = n(53138),
        c = n(24243),
        d = n(41785),
        h = n(43750),
        { IdFactory: f } = n(75568),
        { VersionedIdFactory: p } = n(54602),
        m = {
          idCompare: function (e, t) {
            return e.compare(t);
          },
          idEqual: function (e, t) {
            return e.equal(t);
          },
          Exception: n(80520),
          Ulid: new f({ id: r, canonical_coder: c, raw_coder: d }),
          UlidMonotonic: new f({ id: i, canonical_coder: c, raw_coder: d }),
          Uuid: new p({
            abstract_id: s,
            versioned_ids: [o, a, u, l],
            canonical_coder: h,
            raw_coder: d,
          }),
        };
      m.Uuid.versioned_ids.reduce(
        (e, t) => Object.assign(e, { [t.name]: t }),
        m
      ),
        (e.exports = m);
    },
    55877: function (e, t, n) {
      "use strict";
      let { InvalidEncoding: r, InvalidBytes: i } = n(80520),
        s = Symbol("valid_encoding_pattern");
      class o {
        constructor({ valid_encoding_pattern: e } = {}) {
          this[s] = e;
        }
        decode(e) {
          if (this.isValidEncoding(e)) return this.decodeTrusted(e);
          throw new r(`Encoding [${e}] does not satisfy ${this[s]}`);
        }
        decodeTrusted(e) {
          return ByteArray.generateRandomFilled();
        }
        encode(e) {
          if (this.isValidBytes(e)) return this.encodeTrusted(e);
          throw new i("Requires a 16-byte Uint8Array");
        }
        encodeTrusted(e) {
          return "";
        }
        isValidBytes(e) {
          return e instanceof Uint8Array && 16 === e.length;
        }
        isValidEncoding(e) {
          return (
            ("string" == typeof e || e instanceof String) && this[s].test(e)
          );
        }
      }
      e.exports = { BaseCoder: o };
    },
    24243: function (e, t, n) {
      "use strict";
      let { BaseCoder: r } = n(55877),
        i = "0123456789ABCDEFGHJKMNPQRSTVWXYZ",
        s = Array.from(i).reduce(
          (e, t, n) => ((e[t] = e[t.toLowerCase()] = n), e),
          {
            I: i.indexOf("1"),
            i: i.indexOf("1"),
            L: i.indexOf("1"),
            l: i.indexOf("1"),
            O: i.indexOf("0"),
            o: i.indexOf("0"),
            U: i.indexOf("V"),
            u: i.indexOf("V"),
          }
        ),
        o = Array.from(i);
      class a extends r {
        constructor() {
          super({ valid_encoding_pattern: /^[0-7][^\W_]{25}$/ });
        }
        decodeTrusted(e) {
          let t = new Uint8Array(16),
            n = [];
          for (let t = 0, r = e.length; t < r; ++t) n.push(s[e[t]]);
          return (
            (t[0] = (n[0] << 5) | n[1]),
            (t[1] = (n[2] << 3) | (n[3] >> 2)),
            (t[2] = (n[3] << 6) | (n[4] << 1) | (n[5] >> 4)),
            (t[3] = (n[5] << 4) | (n[6] >> 1)),
            (t[4] = (n[6] << 7) | (n[7] << 2) | (n[8] >> 3)),
            (t[5] = (n[8] << 5) | n[9]),
            (t[6] = (n[10] << 3) | (n[11] >> 2)),
            (t[7] = (n[11] << 6) | (n[12] << 1) | (n[13] >> 4)),
            (t[8] = (n[13] << 4) | (n[14] >> 1)),
            (t[9] = (n[14] << 7) | (n[15] << 2) | (n[16] >> 3)),
            (t[10] = (n[16] << 5) | n[17]),
            (t[11] = (n[18] << 3) | (n[19] >> 2)),
            (t[12] = (n[19] << 6) | (n[20] << 1) | (n[21] >> 4)),
            (t[13] = (n[21] << 4) | (n[22] >> 1)),
            (t[14] = (n[22] << 7) | (n[23] << 2) | (n[24] >> 3)),
            (t[15] = (n[24] << 5) | n[25]),
            t
          );
        }
        encodeTrusted(e) {
          let t = [
              e[0] >> 5,
              e[0],
              e[1] >> 3,
              (e[1] << 2) | (e[2] >> 6),
              e[2] >> 1,
              (e[2] << 4) | (e[3] >> 4),
              (e[3] << 1) | (e[4] >> 7),
              e[4] >> 2,
              (e[4] << 3) | (e[5] >> 5),
              e[5],
              e[6] >> 3,
              (e[6] << 2) | (e[7] >> 6),
              e[7] >> 1,
              (e[7] << 4) | (e[8] >> 4),
              (e[8] << 1) | (e[9] >> 7),
              e[9] >> 2,
              (e[9] << 3) | (e[10] >> 5),
              e[10],
              e[11] >> 3,
              (e[11] << 2) | (e[12] >> 6),
              e[12] >> 1,
              (e[12] << 4) | (e[13] >> 4),
              (e[13] << 1) | (e[14] >> 7),
              e[14] >> 2,
              (e[14] << 3) | (e[15] >> 5),
              e[15],
            ],
            n = "";
          for (let e = 0, r = t.length; e < r; ++e) n += o[31 & t[e]];
          return n;
        }
      }
      e.exports = new a();
    },
    41785: function (e, t, n) {
      "use strict";
      let { BaseCoder: r } = n(55877),
        i = "0123456789ABCDEF",
        s = Array.from({ length: i.length * i.length }).map(
          (e, t) => "" + i.charAt(t / i.length) + i.charAt(t % i.length)
        ),
        o = Array.from(i).reduce(
          (e, t, n) =>
            Object.assign(e, { [t.toUpperCase()]: n, [t.toLowerCase()]: n }),
          Object.create(null)
        );
      class a extends r {
        constructor() {
          super({ valid_encoding_pattern: /^[0-9A-Fa-f]{32}$/ });
        }
        decodeTrusted(e) {
          let t = new Uint8Array(16);
          for (let n = 0, r = !0, i = 0, s = e.length; i < s; ++i) {
            let s = e[i];
            r ? (t[n] = o[s] << 4) : (t[n++] |= o[s]), (r = !r);
          }
          return t;
        }
        encodeTrusted(e) {
          let t = "";
          for (let n = 0, r = e.length; n < r; ++n) t += s[e[n]];
          return t;
        }
      }
      e.exports = new a();
    },
    43750: function (e, t, n) {
      "use strict";
      let { BaseCoder: r } = n(55877),
        i = "0123456789ABCDEF",
        s = Array.from({ length: i.length * i.length }).map(
          (e, t) => "" + i.charAt(t / i.length) + i.charAt(t % i.length)
        ),
        o = Array.from(i).reduce(
          (e, t, n) =>
            Object.assign(e, { [t.toUpperCase()]: n, [t.toLowerCase()]: n }),
          Object.create(null)
        );
      class a extends r {
        constructor() {
          super({
            valid_encoding_pattern: /^[0-9A-Fa-f]{4}(?:-?[0-9A-Fa-f]{4}){7}$/,
          });
        }
        decodeTrusted(e) {
          let t = new Uint8Array(16);
          for (let n = 0, r = !0, i = 0, s = e.length; i < s; ++i) {
            let s = e[i];
            "-" !== s && (r ? (t[n] = o[s] << 4) : (t[n++] |= o[s]), (r = !r));
          }
          return t;
        }
        encodeTrusted(e) {
          let t = -1;
          return (
            "" +
            s[e[++t]] +
            s[e[++t]] +
            s[e[++t]] +
            s[e[++t]] +
            "-" +
            s[e[++t]] +
            s[e[++t]] +
            "-" +
            s[e[++t]] +
            s[e[++t]] +
            "-" +
            s[e[++t]] +
            s[e[++t]] +
            "-" +
            s[e[++t]] +
            s[e[++t]] +
            s[e[++t]] +
            s[e[++t]] +
            s[e[++t]] +
            s[e[++t]]
          );
        }
      }
      e.exports = new a();
    },
    9245: function (e, t, n) {
      let { randomBytes: r } = n(21922);
      class i {
        compare(e, t) {
          let n = e.findIndex((e, n) => e !== t[n]);
          return ~n && Math.sign(e[n] - t[n]);
        }
        generateOneFilled() {
          return new Uint8Array(16).fill(255);
        }
        generateRandomFilled() {
          return r(16);
        }
        generateZeroFilled() {
          return new Uint8Array(16).fill(0);
        }
      }
      e.exports = new i();
    },
    2926: function (e, t, n) {
      let { InvalidEpoch: r } = n(80520);
      class i {
        fromEpoch(e, t) {
          return new Date(t + e);
        }
        toEpoch(e, t = null) {
          let n =
            (null === t
              ? Date.now()
              : Number.isInteger(t)
              ? t
              : t instanceof Date
              ? t.getTime()
              : (() => {
                  throw new r(`Failed to coerce time [${t}] to epoch`);
                })()) - e;
          if (n < 0 || n >= 281474976710656) {
            let t = new Date(0 + e).toISOString(),
              n = new Date(0xffffffffffff + e).toISOString();
            throw new r(`Epoch must be between ${t} and ${n}`);
          }
          return n;
        }
      }
      e.exports = new i();
    },
    80520: function (e) {
      class t extends Error {
        get name() {
          return this.constructor.name;
        }
      }
      class n extends t {}
      class r extends t {}
      class i extends t {}
      class s extends t {}
      class o extends t {}
      e.exports = {
        Id128Error: t,
        ClockSequenceOverflow: n,
        InvalidBytes: r,
        InvalidEncoding: i,
        InvalidEpoch: s,
        UnsupportedVersion: o,
      };
    },
    36777: function (e, t, n) {
      let { randomBytes: r } = n(21922),
        i = Symbol("mac-address");
      class s {
        constructor() {
          this.reset();
        }
        get mac_address() {
          let e = this[i];
          return e || ((e = this[i] = r(6)), (e[0] |= 1)), e;
        }
        reset() {
          this[i] = null;
        }
      }
      e.exports = new s();
    },
    21922: function (e) {
      let t = self.crypto;
      e.exports = {
        randomBytes: function (e) {
          let n = new Uint8Array(e);
          return t.getRandomValues(n), n;
        },
      };
    },
    75568: function (e) {
      "use strict";
      let t = Symbol("id"),
        n = Symbol("canonical_coder"),
        r = Symbol("raw_coder");
      class i {
        constructor({ id: e, canonical_coder: i, raw_coder: s } = {}) {
          (this[t] = class extends e {
            static get name() {
              return e.name;
            }
            static get [Symbol.species]() {
              return e;
            }
            get [Symbol.toStringTag]() {
              return `${e.name} ${this.toRaw()}`;
            }
            toCanonical() {
              return i.encodeTrusted(this.bytes);
            }
            toRaw() {
              return s.encodeTrusted(this.bytes);
            }
          }),
            (this[n] = i),
            (this[r] = s);
        }
        get name() {
          return this[t].name;
        }
        get type() {
          return this[t][Symbol.species];
        }
        construct(e) {
          return new this[t](e);
        }
        generate() {
          return this[t].generate(...arguments);
        }
        MIN() {
          return this[t].MIN(...arguments);
        }
        MAX() {
          return this[t].MAX(...arguments);
        }
        fromCanonical(e) {
          return this.construct(this[n].decode(e));
        }
        fromCanonicalTrusted(e) {
          return this.construct(this[n].decodeTrusted(e));
        }
        fromRaw(e) {
          return this.construct(this[r].decode(e));
        }
        fromRawTrusted(e) {
          return this.construct(this[r].decodeTrusted(e));
        }
        toCanonical(e) {
          return this[n].encode(e.bytes);
        }
        toRaw(e) {
          return this[r].encode(e.bytes);
        }
        compare(e, t) {
          return (
            console.warn("Deprecated: use generic idCompare instead."),
            e.compare(t)
          );
        }
        equal(e, t) {
          return (
            console.warn("Deprecated: use generic idEqual instead."), e.equal(t)
          );
        }
        isCanonical(e) {
          return this[n].isValidEncoding(e);
        }
        isRaw(e) {
          return this[r].isValidEncoding(e);
        }
      }
      e.exports = { IdFactory: i };
    },
    54602: function (e, t, n) {
      "use strict";
      let { IdFactory: r } = n(75568),
        { UnsupportedVersion: i } = n(80520),
        s = Symbol("id_by_version");
      function o(e, { version: t } = {}) {
        return (
          e[s][t] ||
          (() => {
            throw new i(`No support for version [${t}]`);
          })()
        );
      }
      class a extends r {
        constructor({
          abstract_id: e,
          versioned_ids: t,
          canonical_coder: n,
          raw_coder: i,
        }) {
          super({ id: e, canonical_coder: n, raw_coder: i }),
            (this[s] = t.reduce(
              (e, t) =>
                Object.assign(e, {
                  [t.MIN().version]: new r({
                    id: t,
                    canonical_coder: n,
                    raw_coder: i,
                  }),
                }),
              Object.create(null)
            ));
        }
        get versioned_ids() {
          return Object.values(this[s]);
        }
        construct(e) {
          let t = super.construct(e),
            n = t.version;
          try {
            return o(this, { version: n }).construct(e);
          } catch (e) {
            if (e instanceof i) return t;
            throw e;
          }
        }
        generate() {
          return o(this, ...arguments).generate(...arguments);
        }
        MIN() {
          return o(this, ...arguments).MIN();
        }
        MAX() {
          return o(this, ...arguments).MAX();
        }
      }
      e.exports = { VersionedIdFactory: a };
    },
    2036: function (e, t, n) {
      "use strict";
      let r = n(9245),
        i = Symbol("bytes");
      class s {
        constructor(e) {
          this[i] = e;
        }
        clone() {
          return new this.constructor(this.bytes.slice());
        }
        get bytes() {
          return this[i];
        }
        get [Symbol.toStringTag]() {
          return this.constructor.name;
        }
        compare(e) {
          return r.compare(this.bytes, e.bytes);
        }
        equal(e) {
          return 0 === this.compare(e);
        }
      }
      e.exports = { BaseId: s };
    },
    11351: function (e, t, n) {
      let r, i;
      let { Ulid: s, setTime: o } = n(64810),
        a = n(9245),
        u = n(2926),
        { ClockSequenceOverflow: l } = n(80520);
      class c extends s {
        static reset() {
          (i = -1), (r = this.MIN());
        }
        static generate({ time: e } = {}) {
          e = u.toEpoch(0, e);
          let t = a.generateRandomFilled();
          return (
            e <= i
              ? (!(function (e) {
                  for (let t = 0; t < 8; ++t) e[t] = r.bytes[t];
                })(t),
                (function (e) {
                  for (let t = 7; t > 5; --t)
                    if (255 === e[t]) e[t] = 0;
                    else {
                      ++e[t];
                      return;
                    }
                  throw new l("Exhausted clock sequence");
                })(t))
              : (o(e, t), (t[6] &= 127), (i = e)),
            (r = new this(t))
          );
        }
      }
      c.reset(), (e.exports = { UlidMonotonic: c });
    },
    64810: function (e, t, n) {
      let r = n(9245),
        i = n(2926),
        { BaseId: s } = n(2036);
      function o(e, t) {
        let n = e % 4294967296,
          r = (e - n) / 4294967296,
          i = -1;
        (t[++i] = (r >>> 8) & 255),
          (t[++i] = (r >>> 0) & 255),
          (t[++i] = (n >>> 24) & 255),
          (t[++i] = (n >>> 16) & 255),
          (t[++i] = (n >>> 8) & 255),
          (t[++i] = (n >>> 0) & 255);
      }
      class a extends s {
        static generate({ time: e } = {}) {
          e = i.toEpoch(0, e);
          let t = r.generateRandomFilled();
          return o(e, t), new this(t);
        }
        static MIN() {
          return new this(r.generateZeroFilled());
        }
        static MAX() {
          return new this(r.generateOneFilled());
        }
        get time() {
          let e = -1,
            t = 0 | (this.bytes[++e] << 8) | (this.bytes[++e] << 0),
            n =
              0 |
              (this.bytes[++e] << 24) |
              (this.bytes[++e] << 16) |
              (this.bytes[++e] << 8) |
              (this.bytes[++e] << 0);
          return i.fromEpoch(0, 4294967296 * t + (n >>> 0));
        }
      }
      e.exports = { Ulid: a, setTime: o };
    },
    68151: function (e, t, n) {
      "use strict";
      let r, i, s;
      let o = n(9245),
        a = n(2926),
        u = n(36777),
        { Uuid: l, setVariant: c, setVersion: d } = n(21932),
        h = Date.parse("1582-10-15Z");
      function f() {
        r = (r + 1) % 16384;
      }
      class p extends l {
        static get VARIANT() {
          return 1;
        }
        static get VERSION() {
          return 1;
        }
        static reset() {
          (r = null), (i = -1), (s = -1);
        }
        static generate({ node: e, time: t } = {}) {
          t = a.toEpoch(h, t);
          let n = o.generateZeroFilled();
          return (
            !(function (e, t) {
              4096 === (i = e > s ? 0 : i + 1) && ((i = 0), f());
              let n = e % 1048576,
                r = 4096 * n + i,
                o = (e - n) / 1048576,
                a = -1;
              (t[++a] = (r >>> 24) & 255),
                (t[++a] = (r >>> 16) & 255),
                (t[++a] = (r >>> 8) & 255),
                (t[++a] = (r >>> 0) & 255),
                (t[++a] = (o >>> 8) & 255),
                (t[++a] = (o >>> 0) & 255),
                (t[++a] = (o >>> 24) & 255),
                (t[++a] = (o >>> 16) & 255);
            })(t, n),
            !(function (e, t) {
              if (null === r) {
                let e = o.generateRandomFilled();
                r = (0 | (e[8] << 8) | (e[9] << 0)) % 16384;
              } else e < s && f();
              let n = 7;
              (t[++n] = (r >>> 8) & 255), (t[++n] = (r >>> 0) & 255);
            })(t, n),
            !(function (e, t) {
              for (let n = 0; n < 6; ++n) t[10 + n] = e[n];
            })(e || u.mac_address, n),
            c(this.VARIANT, n),
            d(this.VERSION, n),
            t > s && (s = t),
            new this(n)
          );
        }
        get clock_sequence() {
          return (0 | (this.bytes[8] << 8) | this.bytes[9]) & 16383;
        }
        get hires_time() {
          return (0 | (this.bytes[2] << 8) | this.bytes[3]) & 4095;
        }
        get node() {
          return this.bytes.slice(10);
        }
        get time() {
          let e = -1,
            t =
              0 |
              (this.bytes[++e] << 12) |
              (this.bytes[++e] << 4) |
              (this.bytes[++e] >>> 4);
          ++e;
          let n =
            0 |
            (this.bytes[++e] << 8) |
            (this.bytes[++e] << 0) |
            ((15 & this.bytes[++e]) << 24) |
            (this.bytes[++e] << 16);
          return a.fromEpoch(h, 1048576 * n + t);
        }
      }
      p.reset(), (e.exports = { Uuid1: p });
    },
    74299: function (e, t, n) {
      "use strict";
      let r = n(9245),
        { Uuid: i, setVariant: s, setVersion: o } = n(21932);
      class a extends i {
        static get VARIANT() {
          return 1;
        }
        static get VERSION() {
          return 4;
        }
        static generate() {
          let e = r.generateRandomFilled();
          return s(this.VARIANT, e), o(this.VERSION, e), new this(e);
        }
      }
      e.exports = { Uuid4: a };
    },
    69106: function (e, t, n) {
      "use strict";
      let r, i, s;
      let o = n(9245),
        a = n(2926),
        u = n(36777),
        { Uuid: l, setVariant: c, setVersion: d } = n(21932),
        h = Date.parse("1582-10-15Z");
      function f() {
        r = (r + 1) % 16384;
      }
      class p extends l {
        static get VARIANT() {
          return 1;
        }
        static get VERSION() {
          return 6;
        }
        static reset() {
          (r = null), (i = -1), (s = -1);
        }
        static generate({ node: e, time: t } = {}) {
          t = a.toEpoch(h, t);
          let n = o.generateZeroFilled();
          return (
            !(function (e, t) {
              4096 === (i = e > s ? 0 : i + 1) && ((i = 0), f());
              let n = e % 4294967296,
                r = (e - n) / 4294967296,
                o = -1;
              (t[++o] = (r >>> 8) & 255),
                (t[++o] = (r >>> 0) & 255),
                (t[++o] = (n >>> 24) & 255),
                (t[++o] = (n >>> 16) & 255),
                (t[++o] = (n >>> 8) & 255),
                (t[++o] = (n >>> 0) & 255),
                (t[++o] = (i >>> 8) & 255),
                (t[++o] = (i >>> 0) & 255);
            })(t, n),
            !(function (e, t) {
              if (null === r) {
                let e = o.generateRandomFilled();
                r = (0 | (e[8] << 8) | (e[9] << 0)) % 16384;
              } else e < s && f();
              let n = 7;
              (t[++n] = (r >>> 8) & 255), (t[++n] = (r >>> 0) & 255);
            })(t, n),
            !(function (e, t) {
              for (let n = 0; n < 6; ++n) t[10 + n] = e[n];
            })(e || u.mac_address, n),
            c(this.VARIANT, n),
            d(this.VERSION, n),
            t > s && (s = t),
            new this(n)
          );
        }
        get clock_sequence() {
          return (0 | (this.bytes[8] << 8) | this.bytes[9]) & 16383;
        }
        get hires_time() {
          return (0 | (this.bytes[6] << 8) | this.bytes[7]) & 4095;
        }
        get node() {
          return this.bytes.slice(10);
        }
        get time() {
          let e = -1,
            t = 0 | (this.bytes[++e] << 8) | (this.bytes[++e] << 0),
            n =
              0 |
              (this.bytes[++e] << 24) |
              (this.bytes[++e] << 16) |
              (this.bytes[++e] << 8) |
              (this.bytes[++e] << 0);
          return a.fromEpoch(h, 4294967296 * t + (n >>> 0));
        }
      }
      p.reset(), (e.exports = { Uuid6: p });
    },
    53138: function (e, t, n) {
      "use strict";
      let r = n(9245),
        { Uuid: i, setVariant: s, setVersion: o } = n(21932);
      class a extends i {
        static get VARIANT() {
          return 0;
        }
        static get VERSION() {
          return 0;
        }
        static generate() {
          let e = r.generateZeroFilled();
          return s(this.VARIANT, e), o(this.VERSION, e), new this(e);
        }
        static MAX() {
          let e = r.generateZeroFilled();
          return s(this.VARIANT, e), o(this.VERSION, e), new this(e);
        }
      }
      e.exports = { UuidNil: a };
    },
    21932: function (e, t, n) {
      "use strict";
      let { BaseId: r } = n(2036),
        i = n(9245);
      function s(e, t) {
        (t[8] &= 255 >>> (e + 1)), (t[8] |= ((7 << (3 - e)) & 7) << 5);
      }
      function o(e, t) {
        (t[6] &= 15), (t[6] |= e << 4);
      }
      class a extends r {
        static MIN() {
          let e = i.generateZeroFilled();
          return s(this.VARIANT, e), o(this.VERSION, e), new this(e);
        }
        static MAX() {
          let e = i.generateOneFilled();
          return s(this.VARIANT, e), o(this.VERSION, e), new this(e);
        }
        get variant() {
          let e = this.bytes[8] >>> 5;
          return 7 === e ? 3 : (6 & e) == 6 ? 2 : (4 & e) == 4 ? 1 : 0;
        }
        get version() {
          return this.bytes[6] >>> 4;
        }
      }
      e.exports = { Uuid: a, setVersion: o, setVariant: s };
    },
    45823: function (e, t, n) {
      "use strict";
      n.d(t, {
        H_: function () {
          return l;
        },
        UU: function () {
          return a;
        },
        dP: function () {
          return i;
        },
        fH: function () {
          return u;
        },
        jE: function () {
          return r;
        },
        vh: function () {
          return o;
        },
        yJ: function () {
          return s;
        },
      });
      let r = 6048e5,
        i = 864e5,
        s = 6e4,
        o = 36e5,
        a = 525600,
        u = 43200,
        l = 1440;
    },
    21596: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return e instanceof Date ? new e.constructor(t) : new Date(t);
      }
      n.d(t, {
        L: function () {
          return r;
        },
      });
    },
    28194: function (e, t, n) {
      "use strict";
      function r(e) {
        let t = Object.prototype.toString.call(e);
        return e instanceof Date ||
          ("object" == typeof e && "[object Date]" === t)
          ? new e.constructor(+e)
          : new Date(
              "number" == typeof e ||
              "[object Number]" === t ||
              "string" == typeof e ||
              "[object String]" === t
                ? e
                : NaN
            );
      }
      n.d(t, {
        Q: function () {
          return r;
        },
      });
    },
    33731: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(80189).a)({
        id: 421614,
        name: "Arbitrum Sepolia",
        nativeCurrency: {
          name: "Arbitrum Sepolia Ether",
          symbol: "ETH",
          decimals: 18,
        },
        rpcUrls: {
          default: { http: ["https://sepolia-rollup.arbitrum.io/rpc"] },
        },
        blockExplorers: {
          default: {
            name: "Arbiscan",
            url: "https://sepolia.arbiscan.io",
            apiUrl: "https://sepolia.arbiscan.io/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 81930,
          },
        },
        testnet: !0,
      });
    },
    23123: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return s;
        },
      });
      var r = n(80189),
        i = n(8223);
      let s = (0, r.a)({
        ...i.i,
        id: 8453,
        name: "Base",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://mainnet.base.org"] } },
        blockExplorers: {
          default: {
            name: "Basescan",
            url: "https://basescan.org",
            apiUrl: "https://api.basescan.org/api",
          },
        },
        contracts: {
          ...i.i.contracts,
          l2OutputOracle: {
            1: { address: "0x56315b90c40730925ec5485cf004d835058518A0" },
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 5022,
          },
          portal: {
            1: {
              address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
              blockCreated: 17482143,
            },
          },
          l1StandardBridge: {
            1: {
              address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
              blockCreated: 17482143,
            },
          },
        },
        sourceId: 1,
      });
    },
    18507: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return s;
        },
      });
      var r = n(80189),
        i = n(8223);
      let s = (0, r.a)({
        ...i.i,
        id: 84532,
        network: "base-sepolia",
        name: "Base Sepolia",
        nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://sepolia.base.org"] } },
        blockExplorers: {
          default: {
            name: "Basescan",
            url: "https://sepolia.basescan.org",
            apiUrl: "https://api-sepolia.basescan.org/api",
          },
        },
        contracts: {
          ...i.i.contracts,
          l2OutputOracle: {
            11155111: { address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254" },
          },
          portal: {
            11155111: {
              address: "0x49f53e41452c74589e85ca1677426ba426459e85",
              blockCreated: 4446677,
            },
          },
          l1StandardBridge: {
            11155111: {
              address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120",
              blockCreated: 4446677,
            },
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 1059647,
          },
        },
        testnet: !0,
        sourceId: 11155111,
      });
    },
    5781: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return r;
        },
      });
      let r = (0, n(80189).a)({
        id: 81457,
        name: "Blast",
        nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
        rpcUrls: { default: { http: ["https://rpc.blast.io"] } },
        blockExplorers: {
          default: { name: "Blastscan", url: "https://blastscan.io" },
        },
        contracts: {
          multicall3: {
            address: "0xcA11bde05977b3631167028862bE2a173976CA11",
            blockCreated: 212929,
          },
        },
        sourceId: 1,
      });
    },
    12618: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return r;
        },
      });
      let r = (0, n(80189).a)({
        id: 168587773,
        name: "Blast Sepolia",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://sepolia.blast.io"] } },
        blockExplorers: {
          default: { name: "Blastscan", url: "https://testnet.blastscan.io" },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 756690,
          },
        },
        testnet: !0,
        sourceId: 11155111,
      });
    },
    67934: function (e, t, n) {
      "use strict";
      n.d(t, {
        c: function () {
          return r;
        },
      });
      let r = (0, n(80189).a)({
        id: 31337,
        name: "Hardhat",
        nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
        rpcUrls: { default: { http: ["http://127.0.0.1:8545"] } },
      });
    },
    57214: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return r;
        },
      });
      let r = (0, n(80189).a)({
        id: 11155111,
        name: "Sepolia",
        nativeCurrency: { name: "Sepolia Ether", symbol: "SEP", decimals: 18 },
        rpcUrls: { default: { http: ["https://rpc.sepolia.org"] } },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://sepolia.etherscan.io",
            apiUrl: "https://api-sepolia.etherscan.io/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 751532,
          },
          ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
          ensUniversalResolver: {
            address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
            blockCreated: 5317080,
          },
        },
        testnet: !0,
      });
    },
    44181: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return s;
        },
      });
      var r = n(67638),
        i = n(53512);
      function s(e, t = "wei") {
        return (0, i.v)(e, r.ez[t]);
      }
    },
    53512: function (e, t, n) {
      "use strict";
      function r(e, t) {
        let [n, r = "0"] = e.split("."),
          i = n.startsWith("-");
        if ((i && (n = n.slice(1)), (r = r.replace(/(0+)$/, "")), 0 === t))
          1 === Math.round(Number(`.${r}`)) && (n = `${BigInt(n) + 1n}`),
            (r = "");
        else if (r.length > t) {
          let [e, i, s] = [r.slice(0, t - 1), r.slice(t - 1, t), r.slice(t)],
            o = Math.round(Number(`${i}.${s}`));
          (r =
            o > 9
              ? `${BigInt(e) + BigInt(1)}0`.padStart(e.length + 1, "0")
              : `${e}${o}`).length > t &&
            ((r = r.slice(1)), (n = `${BigInt(n) + 1n}`)),
            (r = r.slice(0, t));
        } else r = r.padEnd(t, "0");
        return BigInt(`${i ? "-" : ""}${n}${r}`);
      }
      n.d(t, {
        v: function () {
          return r;
        },
      });
    },
  },
]);
