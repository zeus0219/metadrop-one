"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1642],
  {
    2384: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return s;
          },
        });
      var r = a(2067),
        n = a(71335),
        i = a.n(n),
        l = a(67552),
        o = a(96560);
      function s(e) {
        let {
            Component: t,
            className: a,
            href: n,
            as: s,
            target: d,
            rel: u,
            disabled: c,
            loading: p,
            htmlType: b,
            leftIcon: m,
            rightIcon: f,
            children: h,
            type: g = "primary",
            fullWidth: x = !1,
            size: y = "md",
            onClick: w,
            forceEnabled: F,
            prefetch: C,
            ...A
          } = e,
          T = (0, l.B4)(),
          v = (c || p || T) && !F;
        n && (v = !!(c || p));
        let E = t || (n && s ? i() : n ? "a" : "button");
        return (0, r.jsxs)(E, {
          tabIndex: v ? -1 : void 0,
          type: b,
          className: (0, o.cn)(
            v && "pointer-events-none",
            "transition-all active:scale-95",
            "select-none",
            "rounded-full font-mono  uppercase leading-[1em]",
            "flex items-center justify-center gap-2 text-center",
            "subpixel-antialiased focus:outline-highlight focus:ring-0",
            "border",
            "whitespace-nowrap",
            "group",
            x && "w-full",
            p && "cursor-wait",
            v && "disabled pointer-events-none",
            "xs" === y && ["text-xs", "py-1", "px-2", m && "pl-1", f && "pr-1"],
            "sm" === y && ["text-sm", "py-2", "px-4", m && "pl-3", f && "pr-3"],
            "md" === y && [
              "text-sm",
              "h-8 min-w-[2rem]",
              "px-4",
              m && "pl-3",
              f && "pr-3",
            ],
            "lg" === y && ["text-lg", "py-4", "px-8"],
            "xl" === y && ["text-lg", "py-5", "px-10"],
            !h && "aspect-square p-1",
            "primary" === g && [
              "border-transparent",
              "bg-gray-10 text-gray-95 hover:bg-gray-20 disabled:bg-gray-50 disabled:text-gray-95",
              "bg-gray-95 text-gray-10 hover:bg-gray-85 disabled:bg-gray-50 disabled:text-gray-30",
            ],
            ("ghost" === g || "secondary" === g) && [
              "border border-gray-100/10 text-gray-95 hover:border-transparent hover:bg-gray-100/10 disabled:text-gray-100/40",
            ],
            "ghost" === g && [
              "rounded-xs",
              "h-auto min-h-[30px]",
              "!hover:border-transparent !border-transparent px-2 py-1",
            ],
            "danger" === g && [
              "border-1 border-negative bg-negative text-gray-100 hover:brightness-125",
              "disabled:opacity-40",
            ],
            "secondary" === g && v && "text-gray-100/40",
            "ghost" === g && v && "text-gray-100/40",
            "accent" === g &&
              "border-highlight bg-highlight text-gray-10 hover:brightness-90",
            "accent" === g && v && "brightness-50",
            a
          ),
          disabled: v,
          onClick: w,
          href: v ? "#" : n,
          as: v ? void 0 : s,
          target: d,
          rel: u,
          prefetch: C,
          ...A,
          children: [m && m, h, f && f],
        });
      }
    },
    90117: function (e, t, a) {
      a.d(t, {
        P: function () {
          return d;
        },
      });
      var r = a(2067),
        n = a(94685),
        i = a(18315),
        l = a(2384),
        o = a(15955);
      let s = (e) =>
          (0, r.jsxs)("div", {
            className: (0, i.Z)(
              "flex flex-col items-center gap-5 text-center text-primary py-4",
              e
            ),
            children: [
              (0, r.jsx)(o.WarningIcon, { className: "h-10 w-10" }),
              (0, r.jsx)("div", {
                className: "text-xl font-bold",
                children: "Sorry, something went wrong.",
              }),
              (0, r.jsx)("div", {
                className: "max-w-prose",
                children:
                  "Hey there, it looks like something went wrong on our end. Don't worry, we're on it and working to fix the issue as soon as possible. Thanks for your patience!",
              }),
              (0, r.jsxs)("div", {
                className: "flex gap-4",
                children: [
                  (0, r.jsx)(l.default, {
                    className: "mt-4",
                    type: "secondary",
                    href: "/",
                    children: "Home",
                  }),
                  (0, r.jsx)(l.default, {
                    className: "mt-4",
                    type: "secondary",
                    onClick: () => window.location.reload(),
                    children: "Reload",
                  }),
                ],
              }),
            ],
          }),
        d = function (e) {
          let { fallback: t = s(), ...a } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (i) =>
            (0, r.jsx)(n.SV, {
              fallback: t,
              ...a,
              children: (0, r.jsx)(e, { ...i }),
            });
        };
      t.Z = (e) => {
        let { className: t = "", children: a, ...i } = e;
        return (0, r.jsx)(n.SV, { fallback: s(t), ...i, children: a });
      };
    },
    67552: function (e, t, a) {
      a.d(t, {
        B4: function () {
          return o;
        },
        G6: function () {
          return l;
        },
        dz: function () {
          return i;
        },
      });
      var r = a(2067),
        n = a(15039);
      let i = (0, n.createContext)(!1),
        l = (e) => {
          let { value: t, bypassParent: a = !1, ...n } = e,
            l = o();
          return (0, r.jsx)(i.Provider, { value: a ? t : l || t, ...n });
        };
      i.displayName = "DisabledContext";
      let o = () => (0, n.useContext)(i);
    },
    59757: function (e, t, a) {
      a.d(t, {
        Y: function () {
          return r.Y;
        },
      });
      var r = a(56837);
    },
    36565: function (e, t, a) {
      a.d(t, {
        DZ: function () {
          return b;
        },
        Gw: function () {
          return p;
        },
        rq: function () {
          return f;
        },
        zK: function () {
          return m;
        },
      });
      var r = a(48213),
        n = a(5781),
        i = a(23123),
        l = a(13027),
        o = a(12618),
        s = a(57214),
        d = a(18507),
        u = a(33731),
        c = a(56837);
      let p = [r.R, n.A, i.u, !c.Y && [l.y, o.d, s.F, d.L, u.Z], !1]
          .flat()
          .filter(Boolean),
        b = [r.R, i.u, !c.Y && [l.y, o.d, s.F, d.L, u.Z], !1]
          .flat()
          .filter(Boolean),
        m = (e) =>
          p.find((t) => {
            let { id: a } = t;
            return a === e;
          }),
        f = (e) =>
          Object.entries(e).reduce((e, t) => {
            let [a, r] = t;
            return p.map((e) => e.id).includes(Number(a))
              ? { ...e, [a]: r }
              : e;
          }, {});
    },
    20886: function (e, t, a) {
      a.d(t, {
        Er: function () {
          return h;
        },
        GG: function () {
          return F;
        },
        Mr: function () {
          return x;
        },
        Ns: function () {
          return y;
        },
        aK: function () {
          return w;
        },
        gr: function () {
          return f;
        },
        py: function () {
          return C;
        },
        qK: function () {
          return g;
        },
      });
      var r = a(44181),
        n = a(48213),
        i = a(23123),
        l = a(5781),
        o = a(57214),
        s = a(12618),
        d = a(18507),
        u = a(13027),
        c = a(33731),
        p = a(67934),
        b = a(36565),
        m = a(56837);
      let f = 4294967295,
        h = {
          durationInMinutes: m.Y ? 240 : 5,
          poolVestingInSeconds: m.Y ? 14400 : 600,
          poolPerTxnMinWei: (0, r.f)("0.0001").toString(),
        },
        g = 20n,
        x = 100n,
        y = {
          minBuyAbsoluteBasisPoints: 50n,
          minSellAbsoluteBasisPoints: 50n,
          buyProportionBasisPoints: 1000n,
          sellProportionBasisPoints: 1000n,
          taxPeriodInDays: 30n,
          fairLaunchBasisPoints: 1000n,
        },
        w = { basisPoints: 2000n, durationInBlocks: 3n },
        F = 5n,
        C = {
          ...(0, b.rq)({
            [n.R.id]: {
              metadropTreasury: "0xDE3FF2A50bd1BA1bd6a608EA0138946Dddf595bc",
              unicryptV3: {
                address: "0xFD235968e65B0990584585763f837A5b5330e6DE",
                deploymentFee: (0, r.f)("0.1"),
              },
              uniswapV2Router: {
                address: "0xF25472588cbC7cDaC9d3CFAD8d65310b48F9F983",
              },
              swapRouter: {
                address: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
              },
              nonFungiblePositionManager: {
                address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
              },
              weth: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
              deploymentFee: (0, r.f)("0.2"),
              sablierV2LockupDynamic: {
                address: "0x7CC7e125d83A581ff438608490Cc0f7bDff79127",
              },
              sablierV2LockupLinear: {
                address: "0xAFb979d9afAd1aD27C5eFf4E27226E3AB9e5dCC9",
              },
              dripoolFactory: {
                address: "0x0744421a674a0ae13961760c9692007da344133c",
              },
            },
            [i.u.id]: {
              metadropTreasury: "0xabec1e70DFE1EA51Fc95e6F699476AbFC2798f96",
              uniswapV2Router: {
                address: "0x8e41F439417261aB62EcD0Bf873Ff93eb0b046e4",
              },
              weth: { address: "0x4200000000000000000000000000000000000006" },
              deploymentFee: (0, r.f)("0.2"),
              sablierV2LockupDynamic: {
                address: "0x461E13056a3a3265CEF4c593F01b2e960755dE91",
              },
              sablierV2LockupLinear: {
                address: "0xFCF737582d167c7D20A336532eb8BCcA8CF8e350",
              },
              dripoolFactory: {
                address: "0x686E79E4A6b5d8bCd434C7b574a36d315dE32ceC",
              },
            },
            [l.A.id]: {
              weth: { address: "0x4300000000000000000000000000000000000004" },
              metadropTreasury: "0x046cC4b7561F5CbAa861747f9aAb28477cFa8862",
              uniswapV2Router: {
                address: "0x8e41F439417261aB62EcD0Bf873Ff93eb0b046e4",
              },
              uniswapV2Factory: {
                address: "0xb4A7D971D0ADea1c73198C97d7ab3f9CE4aaFA13",
              },
              deploymentFee: (0, r.f)("0.2"),
              sablierV2LockupDynamic: {
                address: "0xDf578C2c70A86945999c65961417057363530a1c",
              },
              sablierV2LockupLinear: {
                address: "0xcb099EfC90e88690e287259410B9AE63e1658CC6",
              },
            },
            [o.F.id]: {
              metadropTreasury: "0xDE3FF2A50bd1BA1bd6a608EA0138946Dddf595bc",
              dripoolFactory: {
                address: "0x1Dd9E1A8f05f353cB77562B48f391A96aa123B1c",
              },
              uniswapV2Router: {
                address: "0x3b070eB47E5F28F927F209b389d21B4C5A3c5a8A",
              },
              uniswapV2Factory: {
                address: "0x7E0987E5b3a30e3f2828572Bb659A548460a3003",
              },
              weth: { address: "0x7db333ae52E299C6d338C5Ef1a9AB84A034E1Be8" },
              deploymentFee: (0, r.f)("0.00002"),
              sablierV2LockupDynamic: {
                address: "0xc9940AD8F43aAD8e8f33A4D5dbBf0a8F7FF4429A",
              },
              sablierV2LockupLinear: {
                address: "0x3b0BaF8d25a7cC7E4590247243df54aDbFba78aa",
              },
            },
            [s.d.id]: {
              metadropTreasury: "0x046cC4b7561F5CbAa861747f9aAb28477cFa8862",
              uniswapV2Router: {
                address: "0x0c6579452a0C0Fae133B4f1AA744A7c1763f70cd",
              },
              uniswapV2Factory: {
                address: "0x1ab6334F6B2077bb8B3Cb126fac396Ed1F59b3Fd",
              },
              weth: { address: "0x4200000000000000000000000000000000000023" },
              deploymentFee: (0, r.f)("0.00002"),
              sablierV2LockupDynamic: {
                address: "0xC4CFE91FC326741bCD582F804C15fde2eb226475",
              },
              sablierV2LockupLinear: {
                address: "0x3F530bB78F27910Bb42B3907bf8A12DC30EB351C",
              },
            },
            [d.L.id]: {
              metadropTreasury: "0x046cC4b7561F5CbAa861747f9aAb28477cFa8862",
              uniswapV2Router: {
                address: "0x8b713a85b3bcb744d4AB353a506723c41EAdCC86",
              },
              weth: { address: "0x4200000000000000000000000000000000000006" },
              deploymentFee: (0, r.f)("0.00002"),
              sablierV2LockupDynamic: {
                address: "0xf46d5fa9bfc964e8d06846c8739aec69bc06344d",
              },
              sablierV2LockupLinear: {
                address: "0xbd7aaa2984c0a887e93c66baae222749883763d3",
              },
            },
            [u.y.id]: {
              metadropTreasury: "0x0000000000000000000000000000000000000000",
              uniswapV2Router: {
                address: "0x0000000000000000000000000000000000000000",
              },
              weth: { address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1" },
              deploymentFee: (0, r.f)("0.2"),
            },
            [c.Z.id]: {
              metadropTreasury: "0x046cC4b7561F5CbAa861747f9aAb28477cFa8862",
              weth: { address: "0x1baBFb2Fed96b1A8A050b04C402E46b3D468C650" },
              deploymentFee: (0, r.f)("0.00002"),
              uniswapV2Router: {
                address: "0x4168E53632747202D86ddc4eD9911f5fcC56225e",
              },
              sablierV2LockupDynamic: {
                address: "0xf390cE6f54e4dc7C5A5f7f8689062b7591F7111d",
              },
              sablierV2LockupLinear: {
                address: "0xFDD9d122B451F549f48c4942c6fa6646D849e8C1",
              },
            },
          }),
          [p.c.id]: {
            dripoolFactory: {
              address: "0x8CeA85eC7f3D314c4d144e34F2206C8Ac0bbadA1",
            },
            metadropTreasury: "0xDE3FF2A50bd1BA1bd6a608EA0138946Dddf595bc",
            unicryptV3: {
              address: "0xFD235968e65B0990584585763f837A5b5330e6DE",
              deploymentFee: (0, r.f)("0.1"),
            },
            uniswapV2Router: {
              address: "0xF25472588cbC7cDaC9d3CFAD8d65310b48F9F983",
            },
            swapRouter: {
              address: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
            },
            nonFungiblePositionManager: {
              address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
            },
            weth: { address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2" },
            deploymentFee: (0, r.f)("0.2"),
            sablierV2LockupDynamic: {
              address: "0x7CC7e125d83A581ff438608490Cc0f7bDff79127",
            },
            sablierV2LockupLinear: {
              address: "0xAFb979d9afAd1aD27C5eFf4E27226E3AB9e5dCC9",
            },
          },
        };
    },
    56837: function (e, t, a) {
      a.d(t, {
        T: function () {
          return i;
        },
        Y: function () {
          return n;
        },
      });
      var r = a(26182);
      let n = "master" === r.env.RENDER_GIT_BRANCH || !0,
        i = r.env.NEXT_PUBLIC_API_URL
          ? r.env.NEXT_PUBLIC_API_URL
          : n
          ? "https://api.metadrop.com"
          : "https://".concat("api-nv3a", ".onrender.com");
    },
    76859: function (e, t, a) {
      var r = a(16611);
      a.o(r, "CoinType") &&
        a.d(t, {
          CoinType: function () {
            return r.CoinType;
          },
        }),
        a.o(r, "DeployStatus") &&
          a.d(t, {
            DeployStatus: function () {
              return r.DeployStatus;
            },
          }),
        a.o(r, "PoolStart") &&
          a.d(t, {
            PoolStart: function () {
              return r.PoolStart;
            },
          }),
        a(29180);
    },
    29180: function (e, t, a) {
      a(18240);
    },
    3476: function (e, t, a) {
      a.d(t, {
        Mu: function () {
          return T;
        },
        zn: function () {
          return u;
        },
        ZP: function () {
          return v;
        },
        dZ: function () {
          return A;
        },
        A0: function () {
          return C;
        },
      });
      var r = a(51123),
        n = a(53512),
        i = a(44181),
        l = a(79173),
        o = a(66447),
        s = a(29628);
      [s.mixed, s.string, s.number, s.boolean, s.date].forEach((e) =>
        s.addMethod(e, "requiredIfFinal", function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : (e) => {
                    let { label: t, ...a } = e;
                    return "".concat(t || a.path, " must be set");
                  },
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : (e) => e;
          return this.when("$isFinal", {
            is: !0,
            then: (a) => t(a.nullable().required(e)),
            otherwise: (e) =>
              "function" == typeof e.nullify ? e.nullify() : e.nullable(),
          });
        })
      ),
        s.addMethod(s.array, "requiredIfFinal", function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : (e) => {
                    let { label: t, ...a } = e;
                    return "".concat(t || a.path, " must be set");
                  },
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : (e) => e;
          return this.when("$isFinal", {
            is: !0,
            then: (a) => t(a.required(e).min(0)),
            otherwise: (e) =>
              "function" == typeof e.nullify ? e.nullify() : e.nullable(),
          });
        }),
        s.addMethod(s.string, "eth", function () {
          return this.meta({
            unit: "eth",
            parseToInput: (e) => (e ? (0, r.d)(e) : ""),
          }).when("$unit", {
            is: "wei",
            then: (e) =>
              e.test("valid-wei", "Invalid wei value", function (e) {
                if (!e) return !0;
                try {
                  return (0, n.v)(e, 18).toString(), !0;
                } catch (e) {
                  return !1;
                }
              }),
            otherwise: (e) =>
              e.transform((e) =>
                e && "" !== e ? (0, i.f)(e.toString()).toString() : null
              ),
          });
        }),
        s.addMethod(s.string, "minEth", function (e) {
          var t;
          let a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "Minimum amount is ".concat(
                    "bigint" == typeof e ? (0, r.d)(e) : e,
                    " ETH"
                  ),
            n = "bigint" == typeof e ? parseFloat((0, r.d)(e)) : e;
          return this.meta({
            props: {
              min: n,
              ...(null === (t = this.describe().meta) || void 0 === t
                ? void 0
                : t.props),
            },
          }).test(
            "min-eth",
            a,
            (e) => !e || "" === e || (0, i.f)(n.toString()) <= BigInt(e)
          );
        }),
        s.addMethod(s.string, "maxEth", function (e) {
          var t;
          let a =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "Maximum amount is ".concat(
                  "bigint" == typeof e ? (0, r.d)(e) : e,
                  " ETH"
                );
          if (void 0 === e) return this;
          let n = "bigint" == typeof e ? parseFloat((0, r.d)(e)) : e;
          return this.meta({
            props: {
              max: e,
              ...(null === (t = this.describe().meta) || void 0 === t
                ? void 0
                : t.props),
            },
          }).test(
            "max-eth",
            a,
            (e) => !e || "" === e || (0, i.f)(n.toString()) >= BigInt(e)
          );
        }),
        s.addMethod(s.string, "isAddress", function () {
          var e;
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "is not valid";
          return this.meta({
            props: {
              placeholder: "0x",
              ...(null === (e = this.describe().meta) || void 0 === e
                ? void 0
                : e.props),
            },
          })
            .test("is-address", t, (e) => !e || "" === e || (0, l.U)(e))
            .transform((e) => (e && (0, l.U)(e) ? (0, o.K)(e) : e));
        }),
        s.addMethod(s.number, "nullify", function () {
          return this.transform((e) =>
            "" === e || isNaN(e) ? null : e
          ).nullable();
        }),
        s.addMethod(s.string, "nullify", function () {
          return this.transform((e) => ("" === e ? null : e)).nullable();
        }),
        s.addMethod(s.date, "nullify", function () {
          return this.nullable().transform((e) =>
            "" === e || null === e ? null : e
          );
        }),
        s.addMethod(s.number, "isTwoDecimalMax", function () {
          var e;
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "Maximum two decimal places";
          return this.meta({
            props: {
              ...(null === (e = this.describe().meta) || void 0 === e
                ? void 0
                : e.props),
            },
          }).test("is-two-decimals", t, (e) => {
            if (e) {
              var t, a;
              let r = e.toString().split(".");
              return (
                1 === r.length ||
                (null !==
                  (a =
                    null == r
                      ? void 0
                      : null === (t = r[1]) || void 0 === t
                      ? void 0
                      : t.length) && void 0 !== a
                  ? a
                  : 0) <= 2
              );
            }
            return !0;
          });
        }),
        s.object({
          ethAddress: s.string().required("Address is required"),
          ethNonce: s.string().required("Nonce is required"),
        });
      var d = a(59757);
      let u = s.object().shape({
        tokenAddress: s
          .string()
          .trim()
          .isAddress("Invalid address")
          .label("Token Address to Lock")
          .required("Token address is required"),
        decimals: s.number().required(),
        withdrawRecipientAddress: s
          .string()
          .trim()
          .isAddress("Invalid address")
          .label("Withdrawer Address")
          .required(),
        amountToLock: s
          .number()
          .nullify()
          .label("Amount to lock")
          .min(0)
          .meta({
            props: {
              helpText:
                "The total quantity of tokens will be locked in the vault.",
              placeholder: "1,000,000",
              step: "0.000000000000000001",
            },
          })
          .required("Amount is required"),
        lockingPeriod: s
          .number()
          .label("Locking Period")
          .required("Locking period is required")
          .min(d.Y ? 2592e3 : 1, "Locking period must be at least 30 days")
          .meta({
            widget: "duration",
            props: {
              options: [
                !d.Y && { label: "Minutes", value: "minutes" },
                !d.Y && { label: "Days", value: "days" },
                { label: "Months", value: "months" },
                { label: "Years", value: "years" },
              ].filter(Boolean),
            },
          }),
        customLockingPeriod: s
          .date()
          .when("lockingPeriod", {
            is: "custom",
            then: (e) =>
              e
                .required("Locking period is required")
                .meta({ widget: "datetime" }),
          })
          .meta({ widget: "datetime" })
          .nullable(),
        lockType: s
          .string()
          .meta({ widget: "radio-group", props: { hideRadio: !0 } })
          .trim()
          .label("Lock Type")
          .required("Lock type is required")
          .oneOf(["timelock", "linear", "linearCliff"]),
        cliff: s
          .string()
          .trim()
          .label("Cliff")
          .when("lockType", {
            is: "linearCliff",
            then: (e) => e.required("Cliff is required"),
          })
          .nullable()
          .meta({ widget: "radio-group", props: { hideRadio: !0 } }),
        customCliff: s
          .date()
          .label("Custom Cliff")
          .when("cliff", {
            is: "custom",
            then: (e) => e.required("Cliff period is required"),
          })
          .meta({ widget: "datetime" })
          .nullable(),
        transferrable: s
          .boolean()
          .label("Transferrable")
          .meta({
            widget: "switch",
            props: {
              helpText:
                "Whether the vault can be transferred to another address.",
            },
          })
          .nullable(),
        cancellable: s
          .boolean()
          .label("Cancellable")
          .meta({
            widget: "switch",
            props: {
              helpText:
                "Whether the vault can be cancelled before the locking period ends.",
            },
          })
          .when("lockType", {
            is: "timelock",
            then: (e) => e.isFalse("Timelocks cannot be cancelled"),
          })
          .nullable(),
      });
      var c = a(56837),
        p = a(20886),
        b = a(80119),
        m = a(76859);
      let f = a(36565).DZ.map((e) => {
          let { id: t, name: a } = e;
          return { label: a, value: t };
        }),
        h = s
          .number()
          .label("Network")
          .oneOf(
            f.map((e) => {
              let { value: t } = e;
              return t;
            })
          )
          .meta({
            widget: "select",
            metadropOnly: !1,
            props: {
              type: "number",
              placeholder: "Select a network",
              options: f,
            },
          });
      function g(e, t) {
        return Object.entries(t).reduce((t, a) => {
          let [r, n] = a;
          return { ...t, [r]: n.meta(e) };
        }, {});
      }
      let x = function (e) {
          let t = {
              A: /[AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄ4]/g,
              B: /[BⒷＢḂḄḆɃƂƁß]/g,
              C: /[CⒸＣĆĈĊČÇḈƇȻꜾ]/g,
              D: /[DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ]/g,
              E: /[EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐ3Ǝ∑]/g,
              F: /[FⒻＦḞƑꝻ]/g,
              G: /[GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ]/g,
              H: /[HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ]/g,
              I: /[IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ1]/g,
              J: /[JⒿＪĴɈ]/g,
              K: /[KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ]/g,
              L: /[LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ7]/g,
              M: /[MⓂＭḾṀṂⱮƜ]/g,
              N: /[NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ]/g,
              O: /[OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ0]/g,
              P: /[PⓅＰṔṖƤⱣꝐꝒꝔ]/g,
              Q: /[QⓆＱꝖꝘɊ]/g,
              R: /[RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ]/g,
              S: /[SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ5§]/g,
              T: /[TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ\+]/g,
              U: /[UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ]/g,
              V: /[VⓋＶṼṾƲꝞɅ]/g,
              W: /[WⓌＷẀẂŴẆẄẈⱲ]/g,
              X: /[XⓍＸẊẌ]/g,
              Y: /[YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ]/g,
              Z: /[ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ]/g,
              a: /[aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ]/g,
              b: /[bⓑｂḃḅḇƀƃɓ]/g,
              c: /[cⓒｃćĉċčçḉƈȼꜿↄ]/g,
              d: /[dⓓｄḋďḍḑḓḏđƌɖɗꝺ]/g,
              e: /[eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ69]/g,
              f: /[fⓕｆḟƒꝼ]/g,
              g: /[gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ]/g,
              h: /[hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ]/g,
              i: /[iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı1]/g,
              j: /[jⓙｊĵǰɉ]/g,
              k: /[kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ]/g,
              l: /[lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ]/g,
              m: /[mⓜｍḿṁṃɱɯ]/g,
              n: /[nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ]/g,
              o: /[oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ•]/g,
              p: /[pⓟｐṕṗƥᵽꝑꝓꝕ]/g,
              q: /[qⓠｑɋꝗꝙ]/g,
              r: /[rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ]/g,
              s: /[sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ]/g,
              t: /[tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ]/g,
              u: /[uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ]/g,
              v: /[vⓥｖṽṿʋꝟʌ]/g,
              w: /[wⓦｗẁẃŵẇẅẘẉⱳ]/g,
              x: /[xⓧｘẋẍ]/g,
              y: /[yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ]/g,
              z: /[zⓩｚźẑżžẓẕƶȥɀⱬꝣ]/g,
            },
            a = e;
          for (let e of Object.keys(t)) {
            let r = t[e];
            a = a.replace(r, e);
          }
          return a;
        },
        y = ["metadrop"];
      function w(e) {
        let t = x(e.replace(/[\s]/g, "")).replace(/[\W_]/g, "").toLowerCase();
        return y
          .map((e) => new RegExp(e.split("").join("+")))
          .some((e) => e.test(t));
      }
      let F = ["018c4cda-512b-bfe2-9719-8b4237da9abc"],
        C = function () {
          let {
            type: e = "team",
            projectTaxRecipient: t,
            deployerAddress: a,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          return s.object({
            address: s
              .string()
              .label("Address")
              .isAddress()
              .required()
              .notOneOf([a], "Cannot be the same as the deployer")
              .test(
                "projectTaxRecipient",
                "Cannot be the same as the tax recipient",
                function (e) {
                  return !e || !t || e.toLowerCase() !== t.toLowerCase();
                }
              ),
            name: s
              .string()
              .trim()
              .nullify()
              .when("type", {
                is: "team",
                then: (e) => e.meta({ props: { optional: !0 } }),
                otherwise: (e) => e.required(),
              }),
            supplyPercentage: s
              .number()
              .label("Split amount")
              .min(0)
              .max(20)
              .meta({ props: { textPrefix: "%", placeholder: "0" } })
              .isTwoDecimalMax()
              .nullable()
              .required(),
            type: s
              .string()
              .oneOf(["team", "allocation"])
              .required()
              .default("allocation"),
            color: s.string().nullify(),
          });
        },
        A = function () {
          let {
            id: e,
            minMaxTokensPerWallet: t,
            minMaxTokensPerTxn: a,
            maxProjectBuyTaxPercent: r = 25,
            maxProjectSellTaxPercent: n = 25,
            minProjectBuyTaxPercent: i = 0,
            minProjectSellTaxPercent: l = 0,
            deployerAddress: o,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          return s.object().shape(
            {
              ...g(
                { category: "Coin setup", path: "coin-setup", order: 1 },
                {
                  chainId: h.requiredIfFinal("Chain is required"),
                  name: s
                    .string()
                    .trim()
                    .label("Token name")
                    .min(1)
                    .requiredIfFinal("Token name is required")
                    .test(
                      "contains-blacklisted-word",
                      "Name contains a word that's not allowed.",
                      (e) => !e || !w(e)
                    ),
                  symbol: s
                    .string()
                    .trim()
                    .label("Ticker symbol")
                    .min(1)
                    .max(50)
                    .requiredIfFinal("Ticker is required")
                    .test(
                      "contains-blacklisted-word",
                      "Ticker contains a word that's not allowed.",
                      (e) => !e || !w(e)
                    )
                    .meta({
                      props: {
                        helpText:
                          "Primary identification for your token across exchanges and trading platforms",
                      },
                    }),
                  supply: s
                    .number()
                    .integer()
                    .label("Total supply")
                    .max(0x3940ad9cbfffe)
                    .min(1)
                    .nullify()
                    .meta({
                      props: {
                        step: 1,
                        placeholder: "1000000000",
                        helpText:
                          "The total quantity of tokens that will be available throughout the lifetime of the token",
                      },
                    })
                    .requiredIfFinal("Supply is required"),
                  description: s
                    .string()
                    .label("Short description")
                    .trim()
                    .min(3)
                    .max(240)
                    .nullify()
                    .meta({
                      props: {
                        placeholder: "Describe your coin to your audience",
                        description:
                          "Brief summary of your coin: its features, purpose, community etc.",
                      },
                      widget: "textarea",
                    })
                    .requiredIfFinal("Short Description is required"),
                  coinImageURL: s
                    .string()
                    .url()
                    .label("Coin icon")
                    .meta({
                      provider: "uploadcare",
                      widget: "media",
                      props: {
                        optional: !0,
                        aspect: "aspect-none",
                        type: "image",
                        restrictions: { maxNumberOfFiles: 1 },
                      },
                    })
                    .nullify(),
                }
              ),
              ...g(
                { category: "Socials", path: "socials", order: 3 },
                {
                  telegram: s
                    .string()
                    .nullify()
                    .meta({ props: { optional: !0 } })
                    .trim()
                    .label("Telegram")
                    .matches(
                      /^[^\@]/g,
                      "Enter your handle without the @ symbol"
                    )
                    .matches(/^\+?\w+$/, "Invalid Telegram handle"),
                  telegramVerified: s.boolean().label("Telegram verified"),
                  telegramVerificationEnabled: s
                    .boolean()
                    .label("Verify Telegram"),
                  twitter: s
                    .string()
                    .trim()
                    .label("Twitter")
                    .matches(
                      /^[^\@]/g,
                      "Enter your handle without the @ symbol"
                    )
                    .matches(/^[\w\.]{4,15}$/g, "Invalid Twitter handle")
                    .nullify()
                    .meta({ props: { optional: !0 } }),
                  twitterVerified: s.boolean().label("Twitter verified"),
                  twitterVerificationEnabled: s
                    .boolean()
                    .label("Verify Twitter"),
                  discord: s
                    .string()
                    .trim()
                    .label("Discord")
                    .nullify()
                    .matches(/^[\w\-\.]{1,}$/g, "Invalid Discord handle")
                    .meta({ props: { optional: !0 } }),
                  website: s
                    .string()
                    .trim()
                    .label("Website")
                    .matches(
                      /^(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/i,
                      "Website must match your-domain.com"
                    )
                    .nullify()
                    .meta({ props: { optional: !0 } }),
                  websiteVerified: s.boolean().label("Website verified"),
                  websiteVerificationEnabled: s
                    .boolean()
                    .label("Verify website"),
                }
              ),
              ...g(
                { category: "Distribution", path: "distribution", order: 4 },
                {
                  supplyRecipients: s
                    .array()
                    .when(["projectTaxRecipient"], (e, t) => {
                      let [a] = e;
                      return t.of(
                        C({ projectTaxRecipient: a, deployerAddress: o })
                      );
                    })
                    .test(
                      "distributed-supply",
                      "Team and allocations cannot exceed ".concat(p.qK, "%"),
                      (t) => {
                        if (!t) return !0;
                        let a = t.reduce((e, t) => {
                          let { supplyPercentage: a } = t;
                          return e + a;
                        }, 0);
                        return !!isNaN(a) || a <= (F.includes(e) ? 90 : p.qK);
                      }
                    ),
                }
              ),
              ...g(
                { category: "Anti-Bot", path: "antibot", order: 5 },
                {
                  maxTokensPerWalletEnabled: s
                    .boolean()
                    .label("Max tokens per wallet"),
                  maxTokensPerTxnEnabled: s
                    .boolean()
                    .label("Max tokens per trade"),
                  maxTokensPerWalletPercent: s
                    .number()
                    .label("Max tokens per wallet")
                    .meta({
                      props: {
                        step: 0.01,
                        placeholder: "",
                        textPrefix: "%",
                        description:
                          "The maximum share of the total supply a single wallet address can hold",
                      },
                    })
                    .nullify()
                    .isTwoDecimalMax()
                    .when(
                      ["maxTokensPerWalletEnabled", "maxTokensPerTxnPercent"],
                      (e, a) => {
                        let [r, n] = e;
                        return r
                          ? a
                              .min(
                                Math.max(0, Math.max(t || 0, n || 0)),
                                (e) => {
                                  let { value: a } = e;
                                  switch (!0) {
                                    case t && a < t:
                                      return "Cannot decrease after launch";
                                    case a < 0:
                                      return "Cannot be negative";
                                    case a < n || 0:
                                      return "Must be more than limit per trade";
                                  }
                                }
                              )
                              .max(99)
                              .requiredIfFinal(
                                "Max tokens per wallet is required"
                              )
                          : a;
                      }
                    ),
                  maxTokensPerTxnPercent: s
                    .number()
                    .label("Max tokens per trade")
                    .meta({
                      props: {
                        step: 0.01,
                        placeholder: "",
                        textPrefix: "%",
                        description:
                          "The maximum number of tokens that can be traded in a single trade",
                      },
                    })
                    .nullify()
                    .isTwoDecimalMax()
                    .when(
                      ["maxTokensPerTxnEnabled", "maxTokensPerWalletPercent"],
                      (e, t) => {
                        let [r, n] = e;
                        return r
                          ? t
                              .min(a || 0.1, (e) => {
                                let { value: t } = e;
                                switch (!0) {
                                  case a && t < a:
                                    return "Cannot decrease after launch";
                                  case t < 0.1:
                                    return "Must be at least 0.1%";
                                }
                              })
                              .max(n || 99, (e) => {
                                let { value: t } = e;
                                switch (!0) {
                                  case t > 99:
                                    return "Cannot be more than 99%";
                                  case t > (n || 99):
                                    return "Must be less than max tokens per wallet";
                                }
                              })
                              .requiredIfFinal(
                                "Max tokens per trade is required"
                              )
                          : t;
                      }
                    ),
                  autoBurnEnabled: s
                    .boolean()
                    .label("Sniper auto-burn")
                    .when("driPoolEnabled", {
                      is: !0,
                      then: (e) =>
                        e
                          .meta({ props: { disabled: !0 } })
                          .when("isFinal", {
                            is: !0,
                            then: (e) =>
                              e.equals(
                                [!1],
                                "Auto-burn must be disabled when using fair launch pools"
                              ),
                          }),
                    }),
                }
              ),
              ...g(
                { category: "Taxes", path: "taxes", order: 6 },
                {
                  buyTaxEnabled: s
                    .boolean()
                    .label("Buy tax")
                    .meta({ widget: "switch" }),
                  projectBuyTaxPercent: s
                    .number()
                    .label("Buy tax")
                    .min(i)
                    .max(r)
                    .meta({
                      props: {
                        step: 0.01,
                        placeholder: "",
                        textPrefix: "%",
                        helpText: "Tax taken on token buys",
                      },
                    })
                    .nullify()
                    .when("buyTaxEnabled", {
                      is: !0,
                      then: (e) =>
                        e
                          .requiredIfFinal("Buy tax is required")
                          .isTwoDecimalMax(),
                    }),
                  sellTaxEnabled: s
                    .boolean()
                    .label("Sell tax")
                    .meta({ widget: "switch" }),
                  projectSellTaxPercent: s
                    .number()
                    .label("Sell tax")
                    .min(l)
                    .max(n)
                    .meta({
                      props: {
                        step: 0.01,
                        textPrefix: "%",
                        placeholder: 0,
                        helpText: "Tax taken on token sells",
                      },
                    })
                    .nullify()
                    .when("sellTaxEnabled", {
                      is: !0,
                      then: (e) =>
                        e
                          .requiredIfFinal("Sell tax is required")
                          .isTwoDecimalMax(),
                    }),
                  projectTaxRecipient: s
                    .string()
                    .trim()
                    .label("Tax payout address")
                    .meta({
                      props: {
                        description:
                          "This is the address to which earned taxes will be paid out.",
                        placeholder: "0x",
                      },
                    })
                    .isAddress()
                    .nullify()
                    .when(["sellTaxEnabled", "buyTaxEnabled"], (e, t) => {
                      let [a, r] = e;
                      return a || r
                        ? t.requiredIfFinal(
                            "Tax payout address is required if taxes are set"
                          )
                        : t;
                    })
                    .notOneOf([o], "Cannot be the same as the deployer")
                    .when(["supplyRecipients"], (e, t) => {
                      let [a = []] = e;
                      return a.length
                        ? t.test(
                            "not-project-supply-recipient",
                            "The tax recipient address cannot be part of the distribution.",
                            (e) =>
                              !e ||
                              !a
                                .map((e) => {
                                  let { address: t } = e;
                                  return null == t ? void 0 : t.toLowerCase();
                                })
                                .includes(e.toLowerCase())
                          )
                        : t;
                    }),
                }
              ),
              ...g(
                { category: "Fair launch Pool", path: "fair-launch", order: 7 },
                {
                  driPoolEnabled: s.boolean().label("Use fair launch"),
                  poolDurationInMinutes: s
                    .number()
                    .nullable()
                    .label("Fair launch duration")
                    .meta({
                      widget: "duration",
                      metadropOnly: !0,
                      props: {
                        options: [
                          { label: "Minutes", value: "minutes" },
                          !1,
                          { label: "Days", value: "days" },
                          { label: "Months", value: "months" },
                          { label: "Years", value: "years" },
                        ].filter(Boolean),
                        baseUnit: "minutes",
                        allowNull: !0,
                        min: 1,
                        max: 9999,
                      },
                    }),
                  poolStartType: s
                    .string()
                    .oneOf([
                      m.PoolStart.ON_LAUNCH,
                      m.PoolStart.MANUAL,
                      m.PoolStart.FIXED_DATE,
                      m.PoolStart.NONE,
                    ])
                    .label("Start pool")
                    .nullable()
                    .meta({
                      widget: "select",
                      props: {
                        placeholder: "Select one",
                        options: [
                          {
                            label: "On launch",
                            description:
                              "The pool will start when your coin is launched.",
                            value: m.PoolStart.ON_LAUNCH,
                          },
                          {
                            label: "On a specific date",
                            description:
                              "You define a final date now, and the pool will start at that day and time.",
                            value: m.PoolStart.FIXED_DATE,
                          },
                          {
                            label: "I'll decide later",
                            description:
                              "You will start the pool by pressing a button in your coin's dashboard.",
                            value: m.PoolStart.MANUAL,
                          },
                        ],
                      },
                    })
                    .when("driPoolEnabled", {
                      is: !0,
                      then: (e) =>
                        e.requiredIfFinal("Pool start type is required"),
                    }),
                  poolStartDate: s
                    .date()
                    .meta({ widget: "datetime" })
                    .nullable()
                    .optional()
                    .label("Fair launch start date")
                    .when(
                      ["driPoolEnabled", "$isFinal", "poolStartType"],
                      (e, t) => {
                        let [a, r, n] = e;
                        return (
                          a &&
                            "FIXED_DATE" === n &&
                            ((t = t.min(
                              (0, b.Z)(new Date(), 1),
                              "Choose a date in the future"
                            )),
                            r &&
                              (t = t.requiredIfFinal(
                                "Fair launch start date is required"
                              ))),
                          t
                        );
                      }
                    ),
                  poolMaxInitialBuyWei: s
                    .string()
                    .label("Total snipe max")
                    .eth()
                    .nullify()
                    .meta({
                      props: {
                        step: 0.5,
                        placeholder: "1",
                        helpText:
                          "The maximum total amount of ETH that can be spent on the initial pooled buy. Any ETH contributed beyond this amount will be refunded.",
                        description:
                          "The total pool max is set to 2\xd7 your initial LP funding amount.",
                      },
                    })
                    .when("driPoolEnabled", {
                      is: !0,
                      then: (e) => e.requiredIfFinal("LP funding is missing"),
                    }),
                  lpFundingWei: s
                    .string()
                    .label("Deposit ETH")
                    .eth()
                    .minEth(c.Y ? 0.1 : 0.001)
                    .nullify()
                    .meta({
                      customLabel: "ETH to pair with tokens",
                      props: { step: 0.1, placeholder: "1" },
                    })
                    .when(["driPoolEnabled"], {
                      is: (e) => e,
                      then: (e) => e.requiredIfFinal("LP funding is required"),
                    }),
                  lpLockupInDays: s
                    .number()
                    .integer()
                    .label("LP token lock period")
                    .requiredIfFinal("LP token lock period is required")
                    .nullify()
                    .min(30, "Must be at least 30 days")
                    .max(2147483647, "Must be less than 2,147,483,648 days")
                    .meta({
                      widget: "duration",
                      customLabel: "LP token lock days",
                      props: {
                        options: [
                          { label: "Months", value: "months" },
                          { label: "Years", value: "years" },
                        ].filter(Boolean),
                        baseUnit: "days",
                        min: 1,
                        max: 9999,
                      },
                    }),
                }
              ),
              ...g(
                { category: "Liquidity", path: "liquidity", order: 8 },
                {
                  lpSupply: s
                    .number()
                    .label("Deposit tokens")
                    .integer()
                    .meta({
                      props: {
                        step: 1,
                        placeholder: "1000",
                        helpText:
                          "The entire remainder of the token supply, besides the team supply, will be paired with an amount of ETH of your choosing and added as the initial liquidity on Uniswap.",
                      },
                    })
                    .nullify(),
                  burnLPTokens: s.boolean().label("Burn LP tokens"),
                }
              ),
            },
            [
              ["maxTokensPerWalletPercent", "maxTokensPerTxnPercent"],
              ["supplyRecipients", "projectTaxRecipient"],
            ]
          );
        },
        T = A();
      T.pick([
        "chainId",
        "name",
        "description",
        "symbol",
        "telegram",
        "twitter",
        "website",
      ]).concat(
        s.object({
          slug: s.string().required(),
          erc20Address: s.string().required().isAddress(),
          decimals: s.number().required(),
        })
      );
      var v = s;
    },
  },
]);
