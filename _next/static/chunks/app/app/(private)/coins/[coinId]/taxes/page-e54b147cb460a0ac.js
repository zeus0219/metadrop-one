(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2565],
  {
    61939: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 11734));
    },
    53720: function (e, t, a) {
      "use strict";
      a.d(t, {
        b: function () {
          return o;
        },
      });
      var n = a(55482),
        r = a(25463),
        c = a(91610),
        i = a(76859);
      let o = function () {
        let {
          erc20Address: e,
          chainId: t,
          coinType: a,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, n.G)({
          contracts: (0, c.V)(
            [
              "owner",
              "projectBuyTaxBasisPoints",
              "metadropBuyTaxBasisPoints",
              "metadropSellTaxBasisPoints",
              "metadropTaxPeriodInDays",
              "projectSellTaxBasisPoints",
              "maxTokensPerTransaction",
              "maxTokensPerWallet",
              "totalSupply",
              "symbol",
              "name",
              "lpLockupInDays",
              { functionName: "fundedDate", parseAs: "date" },
              "lpSupply",
              "autoBurnBasisPoints",
              "burnLPTokens",
            ],
            { address: e, chainId: t, abi: r.gH }
          ),
          query: { enabled: !!(e && a === i.CoinType.METADROP) },
          watch: !0,
        });
      };
    },
    11734: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return q;
          },
          taxSidebarProps: function () {
            return Z;
          },
        });
      var n = a(2067),
        r = a(15955),
        c = a(33862),
        i = a(60107),
        o = a(83297),
        l = a(30156),
        s = a(60171),
        d = a(15039),
        u = a(43413),
        b = a(79953),
        f = a(95121),
        p = a(67552),
        x = a(45574),
        h = a(69436),
        m = a(53720),
        y = a(25463);
      let g = async function () {
          let {
              coinId: e,
              setProjectTaxRates: t,
              curTaxes: a,
              fetchAPI: n,
              reloadSettings: r,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            c = arguments.length > 1 ? arguments[1] : void 0,
            { setFieldValue: i } = arguments.length > 2 ? arguments[2] : void 0;
          if (!e || !T.includes(e)) return !1;
          let o = {
            buy: Math.min(a.projectBuyTaxPercent, 0.01),
            sell: Math.min(a.projectSellTaxPercent, 0.01),
          };
          console.log("submiting", { values: c, minTaxes: o });
          let l = c.buyTaxEnabled
              ? Math.round(100 * c.projectBuyTaxPercent)
              : Math.max(0, o.buy),
            s = c.sellTaxEnabled
              ? Math.round(100 * c.projectSellTaxPercent)
              : Math.max(0, o.sell);
          if (
            !c.sellTaxEnabled ||
            0 === c.projectSellTaxPercent ||
            !c.buyTaxEnabled ||
            0 === c.projectBuyTaxPercent
          ) {
            window.alert(
              "Error setting taxes to 0. Taxes set to 0.01% instead.\nPlease contact support at support@metadrop.com on Twitter."
            );
            let e = Math.max(c.projectBuyTaxPercent, o.buy),
              t = Math.max(c.projectSellTaxPercent, o.sell);
            return (
              i("projectBuyTaxPercent", e),
              i("projectSellTaxPercent", t),
              i("buyTaxEnabled", e > 0),
              i("sellTaxEnabled", t > 0),
              !0
            );
          }
          let { success: d, receipt: u } = await t(0, l, s);
          if ((console.log({ receipt: u }), d))
            return (
              n("/v1/coins/".concat(e), {
                method: "PATCH",
                body: {
                  projectBuyTaxBasisPoints: l,
                  projectSellTaxBasisPoints: s,
                  buyTaxEnabled: l > 0,
                  sellTaxEnabled: s > 0,
                },
              }),
              await r(),
              !0
            );
        },
        T = [
          "018b71db-701d-83c8-6b53-f3a290a07c17",
          "018b7036-31aa-1d30-7a39-96ee1a4b8eba",
          "018b725c-8930-ebfe-2e74-59930d0d1750",
          "018b4ddb-0186-9ae5-b40b-1a2303606360",
          "018b6972-73b5-0c1e-b44d-93d48e32661b",
          "018b6c79-2a37-b5c5-b83f-c686da014dfb",
          "018b5d3a-2d02-8c12-b4ab-1570cc189718",
          "018b496e-69b0-fa99-3b5c-17d533a87331",
          "018b4e94-f5ba-5f15-c75b-a25cc77fbd43",
          "018b4e3d-8efa-b4de-ad24-bb417b85375b",
          "018b489b-14a1-2460-287a-8053392e7118",
          "018b62ed-30f9-201f-7857-a724979cfc4f",
          "018b5f59-b8b0-125c-cad7-075dfd021025",
          "018b5e68-ca2a-7766-6cfb-fa3ffebae34a",
          "018b71db-701d-83c8-6b53-f3a290a07c17",
          "018b71a9-065b-d25b-098f-a450cf73fb1f",
          "018b71f2-cb60-49d1-4cea-c38b27240bea",
          "018b702d-0e71-c907-3834-ffe410b6e6fd",
          "018b729f-bfdd-eaa0-8fd4-20e0e0309c8f",
          "018b6f35-1759-e00d-b682-56f06bfa198a",
          "018b7267-8dc2-da12-3793-b3a9dfccd03d",
          "018b72be-91a3-3d98-635a-f5d8648fbea5",
          "018b7333-9451-c2d0-be79-3091254d18ae",
          "018b73a1-da00-fc63-d6d0-2857020dade4",
          "018b73f7-6f1b-bc39-9e79-b283ccbc2641",
          "018b7460-ee83-8642-dd9e-58a784d7edcc",
          "018b7477-4713-73d1-651e-9bf099c07081",
          "018b7604-d76c-20f7-3fba-f4de8c967c86",
          "018b7635-1499-5f42-718a-f25adac3211f",
          "018b766f-88c6-9453-a993-d7ba1d316cf0",
          "018b76c6-4521-fbb8-0ff9-f18150497fa7",
          "018b7674-a9d6-f078-79bf-1cd35e6260a8",
          "018b7713-6b31-b86a-4d33-bd35c9e9673a",
          "018b772c-7236-be2f-52ac-51fffbc10cc0",
          "018b773a-f9a3-96f9-4f05-e3fce0e44cd3",
          "018b7428-4ce8-1999-7233-70ae5b16bd4f",
          "018b7767-57c5-14bd-d70a-b6ad5e065f11",
          "018b778c-f5e7-c2ce-edf5-a3a926ce6f8e",
          "018b76c5-72da-0f43-a514-2fb51d1a5187",
          "018b7749-ce7e-2529-edbd-7f7b73c1fc3e",
          "018b774b-d8eb-c771-f10e-118e6e8243fd",
          "018b770b-886a-696f-b437-40c503c9305c",
          "018b7752-2271-8453-c67a-cef3d136db94",
          "018b77f2-dbae-19c9-0da2-7d445c7761ac",
          "018b79c6-e1fe-046a-050d-abd737ef5132",
          "018b74b6-54a6-8373-da2c-17fbe3c9c829",
          "018b7a01-a4a0-351b-49e4-4e5028c7c832",
          "018b788b-3694-1d3e-b4fd-5d35b1372e43",
          "018b7b8f-e170-9d6f-6a70-be7e61715286",
          "018b7baf-8814-c8c9-be43-23ae93ec13c4",
          "018b77ec-28c8-f2ca-8c56-050f85aba709",
          "018b79e6-f5a5-175c-9d81-9a78af405085",
          "018b7828-c86b-612f-e4db-0a09886a699b",
          "018b7b99-7b3b-1e01-735d-7fec8605d82a",
          "018b7ea6-1703-fc3e-6a7c-5f942a7662be",
          "018b7378-28bd-de06-2394-9c2838bb4081",
          "018b7e0d-a6b0-02bc-1b05-fa8f9e8bcc1b",
          "018b7bee-abff-879c-9db3-8c2ae9f4222a",
          "018b7c80-40ab-dfb3-ef4e-7c3e192284cc",
          "018b7ebc-45bd-28fb-b4ec-420eabe66e17",
          "018b7e93-937d-baee-32b1-b0aaa670892f",
          "018b7f29-a628-fa4b-1356-e4858a47f2ba",
          "018b7c6e-5216-9c0f-2c50-f3667c634941",
          "018b7ecc-7289-8345-8d75-45e3ecc0eb6f",
          "018b7ed8-0575-ccab-5552-a195e902e606",
          "018b8240-d2bd-a177-c48c-8ff6abebf82e",
          "018b827f-b76b-e820-6e85-d73ce70b465f",
          "018b8291-c0a2-c3e5-a950-3dca742ab30e",
          "018b824b-9b69-2dc7-85ad-a18da6ddc2fd",
          "018b833d-419f-c7a1-8ae6-8fc13b910f6e",
          "018b81d6-3562-c177-1eec-c7657bbdba4a",
          "018b82ad-6fbe-4284-6fe4-2766655e860d",
          "018b82e5-4efc-1066-2379-0c4e3ecb9f34",
          "018b82bb-fe81-402f-5c37-fe4e4c88649c",
          "018b827e-43f4-40fe-eae7-56198d301c15",
          "018b8226-38cb-cf0b-3072-586519385228",
          "018b81cb-6414-892f-8fed-14afab063f89",
          "018b81dd-e6ff-222f-f0a6-adb4a2d3ff6a",
          "018b8262-9999-ee20-4d0a-77d82f676abd",
          "018b82ec-9c06-96d7-4ab7-248c23f28aad",
          "018b6df7-c2f1-c6a4-5965-be9795cf362c",
          "018b8117-e435-6e5e-381e-049fd270eda7",
          "018b8196-4ea6-c2c8-f946-0d6b77532b7f",
          "018b8233-1043-3114-03c2-8ccb15ba5543",
          "018b81ac-31f3-9114-1ac3-36c4d5268ba2",
          "018b8327-8b34-7ee1-cfc2-0468cd614119",
          "018b8355-6e85-9e45-9b34-208ff9d1e2bc",
          "018b835b-8f7e-a24f-afb5-64acf69a46d3",
          "018b8330-67e8-319c-4132-04d0d5977a89",
          "018b834e-68aa-6527-1cbd-5cef4515a825",
          "018b8349-6c4e-888e-9bb0-98a949bec920",
          "018b8355-2d1b-7a6b-3f04-d6bbdbd1ce43",
          "018b833b-44e2-7825-f621-29251f7fdd6a",
          "018b8372-262e-9fa3-1898-ede7686c141d",
          "018b8369-0d30-b115-3a77-76cd2dfaada0",
          "018b8395-c8d7-b405-b958-257a7d2fb121",
          "018b8359-40ba-899b-8161-ce3c8494ae4c",
          "018b844b-15a1-3aaf-e6f2-b1aa04cad9e8",
          "018b8446-94cb-be52-2db5-6517b68bae23",
          "018b8470-2cfe-e3a4-b70c-17da3b7ae1ad",
          "018b8489-d018-1009-1776-edb1a935c667",
          "018b8377-0472-d532-2de5-9523298b6d5f",
          "018b7c4d-9ac5-1e2b-7680-933a5fb35671",
          "018b8453-1b74-885f-6618-a7f868be0a65",
          "018b83ea-d434-2865-47b5-d294b868ec7f",
          "018b8440-7032-b3db-f341-76d19f81e954",
          "018b834d-f9ac-4fd6-a54a-ed64e1054536",
          "018b849b-2557-b849-70b4-c66dd84d0fbf",
          "018b84aa-575f-8ed8-4699-1c48e015b48b",
          "018b848f-eb7c-0f20-554d-da7c56bde252",
        ];
      var v = a(3476),
        j = a(48028),
        w = a(91818),
        P = a(42747),
        N = a(74354),
        C = a(65130),
        S = a(96560),
        B = a(77297),
        E = a(40207),
        k = a(20886),
        I = a(41696);
      let A = "text-icon icon-text",
        M = (e) => {
          let { type: t, metadropTax: a, projectTax: c } = e;
          return (0, n.jsxs)("ul", {
            className: (0, S.cn)("flex flex-col gap-2 text-sm"),
            children: [
              (0, n.jsxs)("li", {
                className: A,
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "rounded-full border-1 border-gray-30 bg-gray-95",
                    children: (0, n.jsx)(r.MoreIcon, {
                      className:
                        "h-[15px] w-[15px] !translate-y-[0px] text-gray-30",
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex grow justify-between",
                    children: [
                      a > 0 &&
                        (0, n.jsxs)("span", {
                          children: [
                            (0, n.jsxs)("span", {
                              className: "tabular-nums",
                              children: [(0, B.uf)(a), "%"],
                            }),
                            " ",
                            "Metadrop tax",
                          ],
                        }),
                      c > 0
                        ? (0, n.jsxs)("span", {
                            children: [
                              "Total ",
                              t,
                              " tax",
                              " ",
                              (0, n.jsxs)("span", {
                                className: "font-wide tabular-nums",
                                children: [(0, B.uf)(a + c), "%"],
                              }),
                            ],
                          })
                        : (0, n.jsxs)("span", {
                            className: "py-[1px]",
                            children: ["No ", t, " tax"],
                          }),
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)("li", {
                className: (0, S.cn)(A, "text-gray-70"),
                children: [
                  (0, n.jsx)(r.ClockSnoozeIcon, {
                    className: "h-[13px] w-[13px] !translate-y-[1px]",
                  }),
                  "Our tax is removed ",
                  k.Ns.taxPeriodInDays.toString(),
                  " days after your coin launches, or when your tax is set to 0%.",
                ],
              }),
            ],
          });
        },
        R = (e) => {
          let t,
            a,
            { coin: r, postDeploy: c, includePayoutAddress: i } = e,
            { values: o, setFieldValue: l, initialValues: s } = (0, j.u6)(),
            { onSubmit: d } = (0, N.xv)();
          if (
            (c &&
              (0 === s.projectBuyTaxPercent && (t = !0),
              0 === s.projectSellTaxPercent && (a = !0)),
            !r)
          )
            return null;
          let { metadropBuyTaxPercent: u, metadropSellTaxPercent: b } = (0,
          I.am)({
            ...r,
            projectBuyTaxBasisPoints: o.projectBuyTaxPercent
              ? 100 * Number(o.projectBuyTaxPercent)
              : 0,
            projectSellTaxBasisPoints: o.projectSellTaxPercent
              ? 100 * Number(o.projectSellTaxPercent)
              : 0,
          });
          return (0, n.jsxs)(P.Z, {
            bg: "bg-gray-10",
            style: { "--joint-height": "10px" },
            children: [
              (0, n.jsx)("div", {
                className: "rounded-sm  p-0",
                children: (0, n.jsx)(E.u, {
                  title: "Buy Tax",
                  switchProps: {
                    checkedLabel: "On",
                    uncheckedLabel: "Off",
                    name: "buyTaxEnabled",
                    disabled: t,
                    onChange: (e) => {
                      !e &&
                        (l("projectBuyTaxPercent", ""),
                        d && d("projectBuyTaxPercent", null));
                    },
                  },
                  children: (0, n.jsx)(C.u, {
                    name: "projectBuyTaxPercent",
                    className: (0, S.cn)("mb-0"),
                    dripDescription: (0, n.jsx)(M, {
                      metadropTax: u,
                      projectTax: o.projectBuyTaxPercent,
                      type: "buy",
                    }),
                  }),
                }),
              }),
              (0, n.jsx)("div", {
                className: "rounded-sm p-0",
                children: (0, n.jsx)(E.u, {
                  title: "Sell Tax",
                  switchProps: {
                    checkedLabel: "On",
                    uncheckedLabel: "Off",
                    name: "sellTaxEnabled",
                    disabled: a,
                    onChange: (e) => {
                      !e &&
                        (l("projectSellTaxPercent", ""),
                        d && d("projectSellTaxPercent", null));
                    },
                  },
                  children: (0, n.jsx)(C.u, {
                    name: "projectSellTaxPercent",
                    className: "mb-0",
                    dripDescription: (0, n.jsx)(M, {
                      metadropTax: b,
                      projectTax: o.projectSellTaxPercent,
                      type: "sell",
                    }),
                  }),
                }),
              }),
              i &&
                (o.sellTaxEnabled || o.buyTaxEnabled) &&
                (0, n.jsx)("div", {
                  className: "rounded-sm p-0",
                  children: (0, n.jsx)("div", {
                    className: "px-4 pb-2 pt-2",
                    children: (0, n.jsx)(C.u, { name: "projectTaxRecipient" }),
                  }),
                }),
            ],
          });
        },
        D = {
          tipIcon: r.TransferIcon,
          tipTitle: "Buy/sell taxes",
          tipText:
            "Earn a percentage of every trade through the tokens pair. If you choose not to add a tax and launch the token, you won't be able to add one later.",
        };
      var O = () => {
          let { coinId: e } = (0, s.useParams)(),
            t = (0, s.useRouter)(),
            { address: a } = (0, w.m)(),
            { data: r, isLoading: o } = (0, i.Z)(e),
            T = null == r ? void 0 : r.coin;
          (0, d.useEffect)(() => {
            !e ||
              o ||
              (null == T ? void 0 : T.erc20Address) ||
              t.push("/app/coins/".concat(e));
          }, [null == T ? void 0 : T.erc20Address, e, o]);
          let {
              data: P,
              isLoading: N,
              refetch: C,
              error: S,
              ...B
            } = (0, m.b)(T),
            { writeContractAsync: E } = (0, x.S)(),
            k = N
              ? {}
              : {
                  projectBuyTaxPercent:
                    Number(null == P ? void 0 : P.projectBuyTaxBasisPoints) /
                    100,
                  projectSellTaxPercent:
                    Number(null == P ? void 0 : P.projectSellTaxBasisPoints) /
                    100,
                },
            I = (0, v.dZ)({
              maxProjectBuyTaxPercent: Number(k.projectBuyTaxPercent),
              maxProjectSellTaxPercent: Number(k.projectSellTaxPercent),
              deployerAddress: null == T ? void 0 : T.deployedBy,
            }),
            A = N
              ? (0, f.R)({}, I.describe().fields)
              : {
                  projectBuyTaxPercent:
                    Number(P.projectBuyTaxBasisPoints) / 100,
                  buyTaxEnabled:
                    (null == P ? void 0 : P.projectBuyTaxBasisPoints) !== 0n,
                  sellTaxEnabled:
                    (null == P ? void 0 : P.projectSellTaxBasisPoints) !== 0n,
                  projectSellTaxPercent:
                    Number(P.projectSellTaxBasisPoints) / 100,
                };
          return (0, n.jsx)(p.G6, {
            value: N || (null == P ? void 0 : P.owner) !== a,
            children: (0, n.jsx)(b.U, {
              validationSchema: I,
              onSubmit: async (t, a) => {
                if (
                  await g(
                    {
                      coinId: e,
                      setProjectTaxRates: E,
                      curTaxes: k,
                      fetchAPI: h.Z,
                      reloadSettings: C,
                    },
                    t,
                    a
                  )
                )
                  return;
                console.log("submiting", { values: t });
                let n = t.buyTaxEnabled
                    ? Math.round(Number(100 * t.projectBuyTaxPercent))
                    : 0,
                  r = t.sellTaxEnabled
                    ? Math.round(Number(100 * t.projectSellTaxPercent))
                    : 0;
                console.log("setting", {
                  projectBuyTaxBasisPoints: n,
                  projectSellTaxBasisPoints: r,
                }),
                  await E({
                    abi: y.gH,
                    chainId: T.chainId,
                    address: T.erc20Address,
                    functionName: "setProjectTaxRates",
                    args: [n, r],
                  }),
                  (0, h.Z)("/v1/coins/".concat(e), {
                    method: "PATCH",
                    body: {
                      projectBuyTaxBasisPoints: n,
                      projectSellTaxBasisPoints: r,
                    },
                  }),
                  await C();
              },
              enableReinitialize: !0,
              initialValues: A,
              children: (e) => {
                let { errors: t, dirty: a, isSubmitting: r } = e;
                return (0, n.jsx)(j.l0, {
                  className: "contents",
                  children: (0, n.jsx)(l.U, {
                    title: "Coin trade tax",
                    subtitle:
                      "Optionally add a buy and/or sell tax on trades. Taxes are auto-sold for ETH at regular intervals.",
                    ...D,
                    children: (0, n.jsxs)("div", {
                      className: "rounded-md bg-gray-20 p-2",
                      children: [
                        (0, n.jsx)(c.Z, {
                          className: "mb-2",
                          children:
                            "Tax values you set now can only be decreased later, never increased.",
                        }),
                        (0, n.jsx)(R, {
                          includePayoutAddress: !1,
                          postDeploy: !0,
                          coin: T,
                        }),
                        (0, n.jsx)(u.t, {
                          className: "mt-4",
                          chainId: null == T ? void 0 : T.chainId,
                          loading: r,
                          disabled: !a || Object.keys(t).length > 0,
                          size: "lg",
                          fullWidth: !0,
                          htmlType: "submit",
                          children: "Save",
                        }),
                      ],
                    }),
                  }),
                });
              },
            }),
          });
        },
        _ = a(80054),
        F = a(13633);
      let Z = {
        tipIcon: r.TransferIcon,
        tipTitle: "Buy/sell taxes",
        tipText:
          "Earn a percentage of every trade through the token pair. If you choose not to add a tax and launch the token, you won't be able to add one later.",
      };
      function q(e) {
        let { params: t } = e,
          { data: a, isLoading: r } = (0, i.Z)(t.coinId),
          u = null == a ? void 0 : a.coin,
          b = (0, s.useRouter)();
        return (
          (0, d.useEffect)(() => {
            r || a || (o.A.error("Coin not found"), b.push("/app/coins"));
          }, [r, a, b]),
          (null == u ? void 0 : u.erc20Address)
            ? (0, n.jsx)("div", {
                className: "my-10",
                children: (0, n.jsx)(O, {}),
              })
            : (0, n.jsx)(_.Z, {
                title: "Coin trade taxes",
                coin: u,
                children: (0, n.jsxs)(l.U, {
                  title: "Coin trade taxes",
                  subtitle:
                    "Optionally add a buy and/or sell tax on trades. Taxes are auto-sold for ETH at regular intervals.",
                  ...Z,
                  children: [
                    (0, n.jsxs)("div", {
                      className: "rounded-md bg-gray-20 p-2",
                      children: [
                        (0, n.jsx)(c.Z, {
                          className: "mb-2",
                          children:
                            "Tax values you set now can only be decreased later, never increased.",
                        }),
                        (0, n.jsx)(R, { coin: u, includePayoutAddress: !0 }),
                      ],
                    }),
                    (0, n.jsx)(F._, { current: "taxes" }),
                  ],
                }),
              })
        );
      }
    },
    43413: function (e, t, a) {
      "use strict";
      a.d(t, {
        t: function () {
          return f;
        },
      });
      var n = a(2067),
        r = a(48902),
        c = a(15039),
        i = a(48213),
        o = a(91818),
        l = a(66392),
        s = a(13984),
        d = a(21704),
        u = a(2384),
        b = a(83297);
      let f = (e) => {
        var t;
        let {
            bypass: a = !1,
            bypassSwitchNetwork: f = !1,
            disconnectedText: p = "Connect wallet",
            chainId: x = i.R.id,
            onClick: h,
            ...m
          } = e,
          { isConnected: y, isConnecting: g, address: T } = (0, o.m)(),
          { chain: v } = (0, o.m)(),
          {
            chains: j,
            switchChainAsync: w,
            isPending: P,
            isIdle: N,
            ...C
          } = (0, l.o)(),
          { data: S } = (0, s.O)({ watch: !0 }),
          B = (0, d.K)({ address: T });
        if (
          ((0, c.useEffect)(() => {
            B.refetch();
          }, [S, B.refetch]),
          a)
        )
          return (0, n.jsx)(u.default, { ...m });
        if (y && (null == v ? void 0 : v.id) !== x && !f) {
          let e = j.find((e) => e.id === x);
          return (0, n.jsx)(u.default, {
            ...m,
            disabled: !N,
            onClick: (t) => {
              w({ chainId: e.id }), t.preventDefault();
            },
            children: P
              ? "Switching to ".concat(null == e ? void 0 : e.name, "...")
              : "Switch to ".concat((null == e ? void 0 : e.name) || "unknown"),
          });
        }
        if (!y)
          return (0, n.jsx)(r.x3.Custom, {
            children: (e) =>
              (0, n.jsx)(u.default, {
                loading: g,
                onClick: (t) => {
                  t.preventDefault(), e.show();
                },
                className: m.className,
                ...m,
                disabled: g,
                children: g ? "Connecting..." : p,
              }),
          });
        if (
          (null === (t = B.data) || void 0 === t ? void 0 : t.value) ===
          BigInt(0)
        )
          return (0, n.jsx)(u.default, {
            ...m,
            onClick: (e) => {
              e.preventDefault(),
                b.A.error(
                  "You don't have enough ETH in your wallet to perform this transaction."
                );
            },
            children: m.children,
          });
        let { children: E, ...k } = m;
        return (0, n.jsx)(u.default, { onClick: h, ...k, children: E });
      };
    },
    79953: function (e, t, a) {
      "use strict";
      a.d(t, {
        U: function () {
          return i;
        },
      });
      var n = a(2067),
        r = a(48028),
        c = a(27349);
      function i(e) {
        let {
          validationSchema: t,
          onSubmit: a,
          initialValues: i,
          enableReinitialize: o = !0,
          completeResource: l = {},
          schemaContext: s = {},
          ...d
        } = e;
        return (0, n.jsx)(c.G.Provider, {
          value: { schema: t, completeResource: l },
          children: (0, n.jsx)(r.J9, {
            ...d,
            enableReinitialize: o,
            initialValues: i,
            onSubmit: async (e, n) => a(t.cast(e, { stripUnknown: !0 }), n),
            validate: async (e) => {
              try {
                await t.validate(
                  { ...l, ...e },
                  { abortEarly: !1, context: { isFinal: !1, ...l, ...e, ...s } }
                );
              } catch (a) {
                let t = {};
                try {
                  return (
                    a.inner.forEach((e) => {
                      t[e.path] = e.message;
                    }),
                    t
                  );
                } catch (t) {
                  console.log(e),
                    console.log(t),
                    console.log("error", JSON.stringify(a)),
                    console.log(JSON.stringify(t));
                }
              }
              return {};
            },
          }),
        });
      }
    },
    45574: function (e, t, a) {
      "use strict";
      a.d(t, {
        S: function () {
          return b;
        },
      });
      var n = a(15039),
        r = a(83297),
        c = a(91818),
        i = a(53953),
        o = a(13173),
        l = a(8979),
        s = a(13506),
        d = a(38372);
      let u = (e) => {
          let t = /Error: (\w+)/.exec(e.message);
          if (t)
            return (
              { OwnableUnauthorizedAccount: "You must be the owner" }[t[1]] ||
              t[1]
            );
        },
        b = () => {
          let { address: e } = (0, c.m)(),
            { writeContractAsync: t, ...a } = (0, i.S)(),
            b = (0, o.x)(),
            f = (0, l.Z)();
          (0, s.t)();
          let p = (0, n.useCallback)(
            async (e, a) => {
              let {
                loading: n = "Confirm transaction",
                success: c = "Transaction success!",
                error: i = "Failed to send transaction",
                ...o
              } = e;
              return new Promise((e, l) => {
                let s;
                let b = new Promise((n, c) => {
                  (async () => {
                    let i;
                    try {
                      console.log({ writeArgs: o }),
                        (i = await t(o, a)),
                        r.A.loading("Confirming transaction...", { id: s });
                    } catch (t) {
                      let e = u(t);
                      (/User rejected the request/.test(t.message) ||
                        /User denied transaction signature/.test(t.message)) &&
                        (r.A.error("Cancelled", { id: s }), r.A.dismiss(s)),
                        console.log("Error", t),
                        r.A.error("Error sending transaction", { id: s }),
                        c(e),
                        l(e);
                      return;
                    }
                    try {
                      let t = await (0, d.e)(f, { hash: i });
                      n(t), e(t);
                    } catch (e) {
                      c(e), l(e);
                    }
                  })();
                });
                s = r.A.promise(b, {
                  loading: n,
                  success: c,
                  error: (e) => e || i,
                });
              });
            },
            [b, t, f]
          );
          return { ...a, writeContractAsyncNative: t, writeContractAsync: p };
        };
    },
    55482: function (e, t, a) {
      "use strict";
      a.d(t, {
        G: function () {
          return o;
        },
      });
      var n = a(91610),
        r = a(15039),
        c = a(91873),
        i = a(13984);
      function o(e) {
        let { contracts: t, watch: a, ...o } = e,
          { data: l, ...s } = (0, c.N)({
            allowFailure: !0,
            contracts: t,
            ...o,
          }),
          { data: d } = (0, i.O)({ watch: a });
        (0, r.useEffect)(() => {
          s.refetch();
        }, [d, s.refetch]);
        let u = (0, r.useMemo)(
          () => (s.isLoading ? null : (0, n.X)(t, l)),
          [t, l, s.isLoading]
        );
        return { ...s, data: u };
      }
    },
    77297: function (e, t, a) {
      "use strict";
      a.d(t, {
        Bu: function () {
          return l;
        },
        FO: function () {
          return r;
        },
        uf: function () {
          return o;
        },
      });
      var n = a(30045);
      function r(e) {
        let t = "",
          a = 1;
        if (Math.abs(e) >= 1e9) (t = "B"), (a = 1e9);
        else if (Math.abs(e) >= 1e6) (t = "M"), (a = 1e6);
        else if (Math.abs(e) >= 1e3) (t = "K"), (a = 1e3);
        else if (1e3 > Math.abs(e)) return e.toLocaleString();
        return (e / a).toFixed(2).replace(/\.0+$/, "") + t;
      }
      let c = (e) =>
          "0" === e
            ? "₀"
            : "1" === e
            ? "₁"
            : "2" === e
            ? "₂"
            : "3" === e
            ? "₃"
            : "4" === e
            ? "₄"
            : "5" === e
            ? "₅"
            : "6" === e
            ? "₆"
            : "7" === e
            ? "₇"
            : "8" === e
            ? "₈"
            : "9" === e
            ? "₉"
            : void 0,
        i = (e) => [...String(e)].map(c).join(""),
        o = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            {
              isWei: a,
              coinDecimals: c = a ? 18 : void 0,
              decimals: l = 4,
              abbreviate: s = !1,
              rmDecimalsThreshold: d = 1e3,
              subscriptZeros: u = !1,
            } = t;
          if (null == e) return "";
          let b = c ? Number((0, n.b)(e, c)) : Number(e);
          d && b > d && (b = Math.round(b));
          let f = Math.round(b * 10 ** l) / 10 ** l,
            [p, x] = f.toString().split(".");
          if (u && 0 !== e) {
            let [e, t] = b.toFixed(40).split(".");
            if ("0" === e) {
              var h;
              let e =
                null === (h = t.match(/^0+/)) || void 0 === h
                  ? void 0
                  : h[0].length;
              if (e >= 5) {
                let a = Number(t.slice(e)).toPrecision(l),
                  n = "";
                for (let e = 0; e < a.length; e++) {
                  let t = a[e];
                  if ("." !== t && (n += t).length === l) break;
                }
                return "0.0".concat(i(e)).concat(n);
              }
            }
          }
          if (
            (0 === f &&
              f !== b &&
              (x = b
                .toLocaleString("en-US", { maximumFractionDigits: 15 })
                .split(".")[1]),
            f > 1 && x && !u)
          )
            x = o(f - Number(p), {
              ...t,
              isWei: !1,
              coinDecimals: void 0,
            }).split(".")[1];
          else {
            let e = null == x ? void 0 : x.split("");
            if (e && e.length > l) {
              let t = e.findIndex((e) => "0" !== e),
                a = Array(t).fill("0").join("");
              x =
                -1 === t
                  ? e.slice(0, l).join("")
                  : [a, ...e.slice(t).slice(0, Math.max(1, l - t + 1))].join(
                      ""
                    );
            }
          }
          let m =
            s && ("number" != typeof s || Number(p) > s)
              ? r(Number(p))
              : Number(p).toLocaleString();
          return (
            /[a-zA-Z]/.test(m) && (x = void 0),
            [m, x].filter((e) => null != e).join(".")
          );
        },
        l = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          return String(e).padStart(t, "0");
        };
    },
    91610: function (e, t, a) {
      "use strict";
      function n(e, t) {
        return t
          ? e.reduce(
              (e, a, n) => {
                let r = "string" == typeof a ? a : a.alias || a.functionName;
                return (null == t ? void 0 : t[n]) === void 0
                  ? e
                  : {
                      [r]: (function (e, t) {
                        try {
                          let { parseAs: a } = t,
                            { result: n, error: r } = e,
                            c = null != n ? n : e;
                          if (r)
                            return (
                              console.log(
                                "Couldn't read ".concat(
                                  t.functionName || t,
                                  ": "
                                ),
                                e
                              ),
                              null
                            );
                          switch (!0) {
                            case "function" == typeof a:
                              c = a(e);
                              break;
                            case "number" === a:
                              c = "number" == typeof n ? n : Number(n);
                              break;
                            case "date" === a:
                              if (0 === Number(n)) {
                                c = null;
                                return;
                              }
                              c = new Date(1e3 * Number(n));
                          }
                          return c;
                        } catch (a) {
                          console.log({ getter: t, value: e, err: a });
                        }
                      })(t[n], a),
                      ...e,
                    };
              },
              { __raw: t }
            )
          : null;
      }
      a.d(t, {
        V: function () {
          return r;
        },
        X: function () {
          return n;
        },
      });
      let r = (e, t) => {
        let { address: a, chainId: n, abi: r } = t;
        return e
          .filter(Boolean)
          .map((e) =>
            "string" == typeof e
              ? { functionName: e, address: a, abi: r, chainId: n }
              : { address: a, abi: r, chainId: n, ...e }
          );
      };
    },
    25704: function (e, t, a) {
      "use strict";
      a.d(t, {
        VY: function () {
          return C;
        },
        fC: function () {
          return P;
        },
        xz: function () {
          return N;
        },
      });
      var n = a(65122),
        r = a(15039),
        c = a(65727),
        i = a(70686),
        o = a(75347),
        l = a(17772),
        s = a(41633),
        d = a(94221),
        u = a(95502),
        b = a(89219);
      let f = "Collapsible",
        [p, x] = (0, i.b)(f),
        [h, m] = p(f),
        y = (0, r.forwardRef)((e, t) => {
          let {
              __scopeCollapsible: a,
              open: c,
              defaultOpen: i,
              disabled: l,
              onOpenChange: s,
              ...u
            } = e,
            [f = !1, p] = (0, o.T)({ prop: c, defaultProp: i, onChange: s });
          return (0, r.createElement)(
            h,
            {
              scope: a,
              disabled: l,
              contentId: (0, b.M)(),
              open: f,
              onOpenToggle: (0, r.useCallback)(() => p((e) => !e), [p]),
            },
            (0, r.createElement)(
              d.WV.div,
              (0, n.Z)(
                { "data-state": w(f), "data-disabled": l ? "" : void 0 },
                u,
                { ref: t }
              )
            )
          );
        }),
        g = (0, r.forwardRef)((e, t) => {
          let { __scopeCollapsible: a, ...i } = e,
            o = m("CollapsibleTrigger", a);
          return (0, r.createElement)(
            d.WV.button,
            (0, n.Z)(
              {
                type: "button",
                "aria-controls": o.contentId,
                "aria-expanded": o.open || !1,
                "data-state": w(o.open),
                "data-disabled": o.disabled ? "" : void 0,
                disabled: o.disabled,
              },
              i,
              { ref: t, onClick: (0, c.M)(e.onClick, o.onOpenToggle) }
            )
          );
        }),
        T = "CollapsibleContent",
        v = (0, r.forwardRef)((e, t) => {
          let { forceMount: a, ...c } = e,
            i = m(T, e.__scopeCollapsible);
          return (0, r.createElement)(
            u.z,
            { present: a || i.open },
            ({ present: e }) =>
              (0, r.createElement)(j, (0, n.Z)({}, c, { ref: t, present: e }))
          );
        }),
        j = (0, r.forwardRef)((e, t) => {
          let { __scopeCollapsible: a, present: c, children: i, ...o } = e,
            u = m(T, a),
            [b, f] = (0, r.useState)(c),
            p = (0, r.useRef)(null),
            x = (0, s.e)(t, p),
            h = (0, r.useRef)(0),
            y = h.current,
            g = (0, r.useRef)(0),
            v = g.current,
            j = u.open || b,
            P = (0, r.useRef)(j),
            N = (0, r.useRef)();
          return (
            (0, r.useEffect)(() => {
              let e = requestAnimationFrame(() => (P.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            (0, l.b)(() => {
              let e = p.current;
              if (e) {
                (N.current = N.current || {
                  transitionDuration: e.style.transitionDuration,
                  animationName: e.style.animationName,
                }),
                  (e.style.transitionDuration = "0s"),
                  (e.style.animationName = "none");
                let t = e.getBoundingClientRect();
                (h.current = t.height),
                  (g.current = t.width),
                  P.current ||
                    ((e.style.transitionDuration =
                      N.current.transitionDuration),
                    (e.style.animationName = N.current.animationName)),
                  f(c);
              }
            }, [u.open, c]),
            (0, r.createElement)(
              d.WV.div,
              (0, n.Z)(
                {
                  "data-state": w(u.open),
                  "data-disabled": u.disabled ? "" : void 0,
                  id: u.contentId,
                  hidden: !j,
                },
                o,
                {
                  ref: x,
                  style: {
                    "--radix-collapsible-content-height": y ? `${y}px` : void 0,
                    "--radix-collapsible-content-width": v ? `${v}px` : void 0,
                    ...e.style,
                  },
                }
              ),
              j && i
            )
          );
        });
      function w(e) {
        return e ? "open" : "closed";
      }
      let P = y,
        N = g,
        C = v;
    },
    54350: function (e, t, a) {
      "use strict";
      a.d(t, {
        u: function () {
          return r;
        },
      });
      var n = a(92931);
      function r(e, t = {}) {
        let a = (function (e, t = {}) {
          let a;
          try {
            a = e.getClient(t);
          } catch {}
          return a;
        })(e, t);
        return a?.extend(n.I);
      }
    },
    38372: function (e, t, a) {
      "use strict";
      a.d(t, {
        e: function () {
          return l;
        },
      });
      var n = a(91815),
        r = a(27769),
        c = a(96454),
        i = a(22936),
        o = a(85978);
      async function l(e, t) {
        let { chainId: a, timeout: l = 0, ...s } = t,
          d = e.getClient({ chainId: a }),
          u = (0, o.s)(d, r.e, "waitForTransactionReceipt"),
          b = await u({ ...s, timeout: l });
        if ("reverted" === b.status) {
          let e = (0, o.s)(d, c.f, "getTransaction"),
            t = await e({ hash: b.transactionHash }),
            a = (0, o.s)(d, i.RE, "call"),
            r = await a({
              ...t,
              gasPrice: "eip1559" !== t.type ? t.gasPrice : void 0,
              maxFeePerGas: "eip1559" === t.type ? t.maxFeePerGas : void 0,
              maxPriorityFeePerGas:
                "eip1559" === t.type ? t.maxPriorityFeePerGas : void 0,
            });
          throw Error((0, n.rR)(`0x${r.substring(138)}`));
        }
        return { ...b, chainId: d.chain.id };
      }
    },
    42837: function (e, t, a) {
      "use strict";
      a.d(t, {
        n: function () {
          return c;
        },
      });
      var n = a(28194),
        r = a(21596);
      function c(e, t) {
        let a = +(0, n.Q)(e);
        return (0, r.L)(e, a + t);
      }
    },
    9038: function (e, t, a) {
      "use strict";
      a.d(t, {
        m: function () {
          return c;
        },
      });
      var n = a(42837),
        r = a(45823);
      function c(e, t) {
        return (0, n.n)(e, t * r.yJ);
      }
    },
    23987: function (e, t, a) {
      "use strict";
      a.d(t, {
        R: function () {
          return r;
        },
      });
      var n = a(28194);
      function r(e, t) {
        return +(0, n.Q)(e) < +(0, n.Q)(t);
      }
    },
    4897: function (e, t, a) {
      "use strict";
      a.d(t, {
        T: function () {
          return h;
        },
      });
      var n = a(9566),
        r = a(19551),
        c = a(29893),
        i = a(11588),
        o = a(213),
        l = a(98816),
        s = a(38319),
        d = a(12800),
        u = a(93351),
        b = a(31095),
        f = a(72002),
        p = a(40156),
        x = a(30722);
      async function h(e, t) {
        let {
          account: a = e.account,
          chain: h = e.chain,
          accessList: m,
          data: y,
          gas: g,
          gasPrice: T,
          maxFeePerGas: v,
          maxPriorityFeePerGas: j,
          nonce: w,
          to: P,
          value: N,
          ...C
        } = t;
        if (!a)
          throw new r.o({ docsPath: "/docs/actions/wallet/sendTransaction" });
        let S = (0, n.T)(a);
        try {
          let a;
          if (
            ((0, b.F)(t),
            null !== h &&
              ((a = await (0, u.s)(e, f.L, "getChainId")({})),
              (0, c.q)({ currentChainId: a, chain: h })),
            "local" === S.type)
          ) {
            let t = await (0, u.s)(
              e,
              p.Z,
              "prepareTransactionRequest"
            )({
              account: S,
              accessList: m,
              chain: h,
              data: y,
              gas: g,
              gasPrice: T,
              maxFeePerGas: v,
              maxPriorityFeePerGas: j,
              nonce: w,
              to: P,
              value: N,
              ...C,
            });
            a || (a = await (0, u.s)(e, f.L, "getChainId")({}));
            let n = h?.serializers?.transaction,
              r = await S.signTransaction(
                { ...t, chainId: a },
                { serializer: n }
              );
            return await (0, u.s)(
              e,
              x.p,
              "sendRawTransaction"
            )({ serializedTransaction: r });
          }
          let n = e.chain?.formatters?.transactionRequest?.format,
            r = (n || d.tG)({
              ...(0, s.K)(C, { format: n }),
              accessList: m,
              data: y,
              from: S.address,
              gas: g,
              gasPrice: T,
              maxFeePerGas: v,
              maxPriorityFeePerGas: j,
              nonce: w,
              to: P,
              value: N,
            });
          return await e.request(
            { method: "eth_sendTransaction", params: [r] },
            { retryCount: 0 }
          );
        } catch (e) {
          throw (function (e, { docsPath: t, ...a }) {
            let n = (() => {
              let t = (0, l.k)(e, a);
              return t instanceof i.cj ? e : t;
            })();
            return new o.mk(n, { docsPath: t, ...a });
          })(e, { ...t, account: S, chain: t.chain || void 0 });
        }
      }
    },
    81452: function (e, t, a) {
      "use strict";
      a.d(t, {
        n: function () {
          return i;
        },
      });
      var n = a(824),
        r = a(93351),
        c = a(4897);
      async function i(e, t) {
        let {
            abi: a,
            address: i,
            args: o,
            dataSuffix: l,
            functionName: s,
            ...d
          } = t,
          u = (0, n.R)({ abi: a, args: o, functionName: s });
        return (0, r.s)(
          e,
          c.T,
          "sendTransaction"
        )({ data: `${u}${l ? l.replace("0x", "") : ""}`, to: i, ...d });
      }
    },
    73671: function (e, t, a) {
      "use strict";
      a.d(t, {
        v: function () {
          return c;
        },
      });
      var n = a(42529),
        r = a(92931);
      function c(e) {
        let { key: t = "public", name: a = "Public Client" } = e;
        return (0, n.e)({ ...e, key: t, name: a, type: "publicClient" }).extend(
          r.I
        );
      }
    },
    9755: function (e, t, a) {
      "use strict";
      a.d(t, {
        t: function () {
          return i;
        },
      });
      var n = a(814),
        r = a(91389),
        c = a(52887);
      function i(e, t = {}) {
        let {
          key: a = "fallback",
          name: i = "Fallback",
          rank: o = !1,
          retryCount: l,
          retryDelay: s,
        } = t;
        return ({ chain: t, pollingInterval: d = 4e3, timeout: u, ...b }) => {
          let f = e,
            p = () => {},
            x = (0, c.q)(
              {
                key: a,
                name: i,
                async request({ method: e, params: a }) {
                  let r = async (c = 0) => {
                    let i = f[c]({ ...b, chain: t, retryCount: 0, timeout: u });
                    try {
                      let t = await i.request({ method: e, params: a });
                      return (
                        p({
                          method: e,
                          params: a,
                          response: t,
                          transport: i,
                          status: "success",
                        }),
                        t
                      );
                    } catch (t) {
                      if (
                        (p({
                          error: t,
                          method: e,
                          params: a,
                          transport: i,
                          status: "error",
                        }),
                        ("code" in t &&
                          "number" == typeof t.code &&
                          (t.code === n.KB.code ||
                            t.code === n.ab.code ||
                            5e3 === t.code)) ||
                          c === f.length - 1)
                      )
                        throw t;
                      return r(c + 1);
                    }
                  };
                  return r();
                },
                retryCount: l,
                retryDelay: s,
                type: "fallback",
              },
              {
                onResponse: (e) => (p = e),
                transports: f.map((e) => e({ chain: t, retryCount: 0 })),
              }
            );
          if (o) {
            let e = "object" == typeof o ? o : {};
            !(function ({
              chain: e,
              interval: t = 4e3,
              onTransports: a,
              sampleCount: n = 10,
              timeout: c = 1e3,
              transports: i,
              weights: o = {},
            }) {
              let { stability: l = 0.7, latency: s = 0.3 } = o,
                d = [],
                u = async () => {
                  let o = await Promise.all(
                    i.map(async (t) => {
                      let a, n;
                      let r = t({ chain: e, retryCount: 0, timeout: c }),
                        i = Date.now();
                      try {
                        await r.request({ method: "net_listening" }), (n = 1);
                      } catch {
                        n = 0;
                      } finally {
                        a = Date.now();
                      }
                      return { latency: a - i, success: n };
                    })
                  );
                  d.push(o), d.length > n && d.shift();
                  let b = Math.max(
                    ...d.map((e) => Math.max(...e.map(({ latency: e }) => e)))
                  );
                  a(
                    i
                      .map((e, t) => {
                        let a = d.map((e) => e[t].latency),
                          n = a.reduce((e, t) => e + t, 0) / a.length,
                          r = d.map((e) => e[t].success),
                          c = r.reduce((e, t) => e + t, 0) / r.length;
                        return 0 === c ? [0, t] : [s * (1 - n / b) + l * c, t];
                      })
                      .sort((e, t) => t[0] - e[0])
                      .map(([, e]) => i[e])
                  ),
                    await (0, r.D)(t),
                    u();
                };
              u();
            })({
              chain: t,
              interval: e.interval ?? d,
              onTransports: (e) => (f = e),
              sampleCount: e.sampleCount,
              timeout: e.timeout,
              transports: f,
              weights: e.weights,
            });
          }
          return x;
        };
      }
    },
    29893: function (e, t, a) {
      "use strict";
      a.d(t, {
        q: function () {
          return r;
        },
      });
      var n = a(18741);
      function r({ chain: e, currentChainId: t }) {
        if (!e) throw new n.Bk();
        if (t !== e.id) throw new n.Yl({ chain: e, currentChainId: t });
      }
    },
    13506: function (e, t, a) {
      "use strict";
      a.d(t, {
        t: function () {
          return i;
        },
      });
      var n = a(54350),
        r = a(52635),
        c = a(8979);
      function i(e = {}) {
        let t = (0, c.Z)(e);
        return (0, r.useSyncExternalStoreWithSelector)(
          (e) =>
            (function (e, t) {
              let { onChange: a } = t;
              return e.subscribe(() => (0, n.u)(e), a, {
                equalityFn: (e, t) => e?.uid === t?.uid,
              });
            })(t, { onChange: e }),
          () => (0, n.u)(t, e),
          () => (0, n.u)(t, e),
          (e) => e,
          (e, t) => e?.uid === t?.uid
        );
      }
    },
    91873: function (e, t, a) {
      "use strict";
      a.d(t, {
        N: function () {
          return s;
        },
      });
      var n = a(62383),
        r = a(99631),
        c = a(15039),
        i = a(23753),
        o = a(13173),
        l = a(8979);
      function s(e = {}) {
        let { contracts: t = [], query: a = {} } = e,
          s = (0, l.Z)(e),
          d = (0, o.x)(),
          u = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: a }) {
                let r = [],
                  c = a[1].contracts.length;
                for (let e = 0; e < c; e++) {
                  let n = a[1].contracts[e],
                    c = t.contracts?.[e].abi;
                  r.push({ ...n, abi: c });
                }
                let { scopeKey: i, ...o } = a[1];
                return (0, n.J)(e, { ...o, contracts: r });
              },
              queryKey: (function (e = {}) {
                let t = [];
                for (let a of e.contracts ?? []) {
                  let { abi: n, ...r } = a;
                  t.push({ ...r, chainId: r.chainId ?? e.chainId });
                }
                return ["readContracts", (0, r.O)({ ...e, contracts: t })];
              })(t),
            };
          })(s, { ...e, chainId: d }),
          b = (0, c.useMemo)(() => {
            let e = !1;
            for (let a of t) {
              let { abi: t, address: n, functionName: r } = a;
              if (!t || !n || !r) {
                e = !1;
                break;
              }
              e = !0;
            }
            return !!(e && (a.enabled ?? !0));
          }, [t, a.enabled]);
        return (0, i.aM)({
          ...u,
          ...a,
          enabled: b,
          structuralSharing: a.structuralSharing ?? i.if,
        });
      }
    },
    53953: function (e, t, a) {
      "use strict";
      a.d(t, {
        S: function () {
          return u;
        },
      });
      var n = a(29297),
        r = a(81452),
        c = a(85978),
        i = a(13360),
        o = a(9077);
      async function l(e, t) {
        let a;
        let { abi: n, chainId: r, connector: l, ...s } = t;
        a = t.account
          ? t.account
          : (await (0, i.e)(e, { chainId: r, connector: l })).account;
        let d = e.getClient({ chainId: r }),
          u = (0, c.s)(d, o.a, "simulateContract"),
          { result: b, request: f } = await u({ ...s, abi: n, account: a });
        return {
          chainId: d.chain.id,
          result: b,
          request: { __mode: "prepared", ...f, chainId: r },
        };
      }
      async function s(e, t) {
        let a, n;
        let { account: o, chainId: s, connector: d, __mode: u, ...b } = t;
        if (
          ((a =
            "object" == typeof o && "local" === o.type
              ? e.getClient({ chainId: s })
              : await (0, i.e)(e, { account: o, chainId: s, connector: d })),
          "prepared" === u)
        )
          n = b;
        else {
          let { request: t } = await l(e, { ...b, account: o });
          n = t;
        }
        let f = (0, c.s)(a, r.n, "writeContract");
        return await f({
          ...n,
          ...(o ? { account: o } : {}),
          chain: s ? { id: s } : null,
        });
      }
      var d = a(8979);
      function u(e = {}) {
        var t;
        let { mutation: a } = e,
          r =
            ((t = (0, d.Z)(e)),
            { mutationFn: (e) => s(t, e), mutationKey: ["writeContract"] }),
          { mutate: c, mutateAsync: i, ...o } = (0, n.D)({ ...a, ...r });
        return { ...o, writeContract: c, writeContractAsync: i };
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        1765, 6299, 894, 775, 9745, 2005, 1664, 4356, 9041, 8158, 4910, 5060,
        8388, 2469, 8505, 3297, 2105, 4685, 2418, 1164, 4916, 3525, 5428, 2931,
        3152, 5955, 1642, 1329, 3201, 1763, 8282, 4665, 1744,
      ],
      function () {
        return e((e.s = 61939));
      }
    ),
      (_N_E = e.O());
  },
]);
