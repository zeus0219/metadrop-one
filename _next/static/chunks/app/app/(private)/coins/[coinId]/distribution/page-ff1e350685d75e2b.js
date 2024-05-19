(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5527, 7263],
  {
    55850: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 67313));
    },
    43568: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZP: function () {
          return r;
        },
        yA: function () {
          return a;
        },
      });
      var i = n(2067),
        l = n(96560);
      let a = (e) => {
        let { className: t } = e;
        return (0, i.jsx)("svg", {
          viewBox: "0 0 79 33",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: (0, l.cn)("h-full", t),
          children: (0, i.jsx)("path", {
            d: "M76.8328 0.807308C77.708 0.260294 78.8433 0.889519 78.8433 1.92162V14.2464C78.8433 15.6056 78.1431 16.869 76.9904 17.5894L53.8448 32.0554C52.9696 32.6024 51.8343 31.9732 51.8343 30.9411V22.0297C51.8343 19.9655 49.5638 18.7071 47.8133 19.8011L27.9277 32.2296C27.0525 32.7766 25.9172 32.1474 25.9172 31.1153V22.2038C25.9172 20.1396 23.6467 18.8811 21.8963 19.9751L2.01068 32.4036C1.13547 32.9506 0.000190735 32.3214 0.000190735 31.2893V18.9645C0.000190735 17.6053 0.700394 16.342 1.853 15.6216L24.9986 1.15556C25.8739 0.608547 27.0091 1.23777 27.0091 2.26987V11.1814C27.0091 13.2456 29.2797 14.504 31.0301 13.41L50.9157 0.981509C51.7909 0.434496 52.9262 1.06372 52.9262 2.09582V11.0072C52.9262 13.0714 55.1968 14.3298 56.9472 13.2358L76.8328 0.807308Z",
            fill: "currentColor",
          }),
        });
      };
      function s(e) {
        let { responsive: t, className: n } = e;
        return (0, i.jsx)("div", {
          className: (0, l.cn)(
            "font-65 font-wide uppercase leading-none tracking-wider",
            "h-full pt-[4px]",
            { "hidden md:block": t },
            n
          ),
          children: "metadrop",
        });
      }
      function r(e) {
        let {
          include: t = "all",
          tagline: n,
          className: r,
          responsive: o,
          innerClassName: c,
        } = e;
        return n
          ? (0, i.jsxs)("div", {
              className: (0, l.cn)(
                "flex items-center justify-start gap-3 text-gray-95",
                r
              ),
              children: [
                (0, i.jsx)(a, { className: "h-6" }),
                (0, i.jsxs)("div", {
                  className: "hidden flex-col text-sm md:flex",
                  children: [
                    (0, i.jsx)("span", {
                      className: "font-wide uppercase tracking-wide",
                      children: "Metadrop",
                    }),
                    (0, i.jsx)("span", {
                      className: "-mt-[4px] text-gray-70",
                      children: n,
                    }),
                  ],
                }),
              ],
            })
          : (0, i.jsxs)("div", {
              className: (0, l.cn)("flex items-center gap-5", r),
              children: [
                ("all" === t || "logoImage" === t) &&
                  (0, i.jsx)(a, { className: c }),
                ("all" === t || "logoWord" === t) &&
                  (0, i.jsx)(s, { responsive: o, className: c }),
              ],
            });
      }
    },
    60107: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(69436),
        l = n(11664);
      function a(e, t) {
        return (0, l.ZP)(
          e ? "/".concat(t ? "public" : "v1", "/coins/").concat(e) : null,
          (e) => (0, i.Z)(e, { redirectToLogin: !0 })
        );
      }
    },
    80054: function (e, t, n) {
      "use strict";
      var i = n(2067),
        l = n(69436),
        a = n(60107),
        s = n(44544),
        r = n(74354),
        o = n(3476),
        c = n(15039),
        d = n(83297),
        u = n(36221);
      t.Z = function (e) {
        var t;
        let { coin: n, title: p, children: m } = e,
          h = (null == n ? void 0 : n.id) || "",
          { data: x } = (0, s.Z)(),
          { mutate: f } = (0, a.Z)(h),
          v = (0, c.useMemo)(() => {
            var e;
            return (0, o.dZ)({
              deployerAddress:
                null == x
                  ? void 0
                  : null === (e = x.user) || void 0 === e
                  ? void 0
                  : e.ethAddress,
            });
          }, [
            null == x
              ? void 0
              : null === (t = x.user) || void 0 === t
              ? void 0
              : t.ethAddress,
          ]),
          g = (0, c.useCallback)(
            async (e) => {
              let {
                  projectBuyTaxPercent: t,
                  projectSellTaxPercent: n,
                  maxTokensPerWalletPercent: i,
                  maxTokensPerTxnPercent: a,
                  ...s
                } = e,
                r = { ...s };
              void 0 !== t &&
                (r.projectBuyTaxBasisPoints =
                  null === t ? null : Math.round(100 * t)),
                void 0 !== n &&
                  (r.projectSellTaxBasisPoints =
                    null === n ? null : Math.round(100 * n)),
                void 0 !== i &&
                  (r.maxTokensPerWalletBasisPoints =
                    null === i ? null : Math.round(100 * i)),
                void 0 !== a &&
                  (r.maxTokensPerTxnBasisPoints =
                    null === a ? null : Math.round(100 * a)),
                !1 === e.buyTaxEnabled && (r.projectBuyTaxBasisPoints = null),
                !1 === e.sellTaxEnabled && (r.projectSellTaxBasisPoints = null);
              let { coin: o, notice: c } = await (0, l.Z)(
                "/v1/coins/".concat(h),
                { method: "PATCH", body: (0, u.qC)(r) }
              );
              c && d.A.info(c), f({ coin: o });
            },
            [h, f]
          );
        return (0, i.jsx)(r.uC, {
          schema: v,
          completeResource: n,
          resourceReady: !!n,
          onSubmit: g,
          children: () => (0, i.jsx)(i.Fragment, { children: m }),
        });
      };
    },
    13633: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return c;
        },
      });
      var i = n(2067),
        l = n(2384),
        a = n(15955),
        s = n(96560),
        r = n(7263),
        o = n(60171);
      function c(e) {
        var t;
        let { current: n } = e,
          c = (0, o.useParams)().coinId,
          { links: d } = (0, r.G)(),
          u = (null === (t = d[0]) || void 0 === t ? void 0 : t.links) || [];
        if (0 === u.length) return null;
        let p = u.findIndex((e) => {
            var t, i;
            return null === (i = e.as) || void 0 === i
              ? void 0
              : null === (t = i.includes) || void 0 === t
              ? void 0
              : t.call(i, n);
          }),
          m = u[p - 1],
          h = u[p + 1] || {
            href: "/app/coins/[coinId]/review-and-launch?coinId=".concat(c),
            as: "/app/coins/".concat(c, "/review-and-launch"),
            label: "Review & Launch",
          };
        return (
          null == m || delete m.Icon,
          null == h || delete h.Icon,
          (0, i.jsxs)("div", {
            className: (0, s.cn)(
              "col-span-2 col-start-2 mt-4 flex justify-between px-3",
              !m && "justify-end"
            ),
            children: [
              m &&
                (0, i.jsx)(l.default, {
                  type: "secondary",
                  ...m,
                  leftIcon: (0, i.jsx)(a.ArrowLeftIcon, {}),
                  htmlType: "button",
                  children: m.label,
                }),
              h &&
                (0, i.jsx)(l.default, {
                  type: "secondary",
                  ...h,
                  rightIcon: (0, i.jsx)(a.ArrowRightIcon, {}),
                  htmlType: "button",
                  children: h.label,
                }),
            ],
          })
        );
      }
    },
    62678: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return r;
        },
      });
      var i = n(60107),
        l = n(3476),
        a = n(60171),
        s = n(15039);
      let r = () => {
        let e = (0, a.useParams)().coinId,
          { data: t } = (0, i.Z)(e),
          [n, r] = (0, s.useState)({}),
          [o, c] = (0, s.useState)({}),
          [d, u] = (0, s.useState)(0);
        return (
          (0, s.useEffect)(() => {
            let n = async () => {
              let n;
              let i = (0, l.dZ)({ id: e }),
                a = i.cast(null == t ? void 0 : t.coin);
              try {
                await i.validate(a, {
                  abortEarly: !1,
                  context: { isFinal: !0, unit: "wei" },
                });
              } catch (e) {
                "ValidationError" === e.name
                  ? (n = e.inner.reduce((e, t) => {
                      let { path: n, ...i } = t;
                      return { ...e, [n]: i };
                    }, {}))
                  : console.log("Error validating coin:", e);
              }
              let { fields: s } = i.describe({
                  context: { isFinal: !0 },
                  value: a,
                }),
                o =
                  Object.entries(s).filter((e) => {
                    let [t, { optional: n }] = e;
                    return n;
                  }).length - 0;
              c(n), r(s), u(o);
            };
            (null == t ? void 0 : t.coin) && n();
          }, [null == t ? void 0 : t.coin, e]),
          {
            requiredCount: d,
            errorsCount: o ? Object.keys(o).length : 0,
            errors: o,
            fields: n,
          }
        );
      };
    },
    67313: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return Z;
          },
        });
      var i = n(2067),
        l = n(60107),
        a = n(30156),
        s = n(60171),
        r = n(80054),
        o = n(13633),
        c = n(52464),
        d = n.n(c),
        u = n(72598),
        p = n(2384),
        m = n(70956),
        h = n(37397),
        x = n(69463),
        f = n(15955),
        v = n(4619),
        g = n(48259),
        y = n(74354),
        b = n(65130),
        j = n(91461),
        w = n(79953),
        N = n(95121),
        I = n(96560),
        C = n(60808),
        k = n(3476),
        R = n(48028),
        S = n(15039),
        A = n(91818);
      let T = {
          team: {
            titleAdd: "Add team member",
            titleEdit: "Edit team member",
            buttonAdd: "Add member",
            buttonRm: "Done",
            nameLabel: "Name",
          },
          allocation: {
            titleAdd: "Add allocation",
            titleEdit: "Edit allocation",
            buttonAdd: "Add",
            buttonRm: "Done",
            nameLabel: "Category",
          },
        },
        P = (e) => {
          var t, n, l;
          let {
              children: a,
              recipients: s,
              recipient: r,
              onAdd: o,
              onRemove: c,
              index: u,
              type: h = "team",
              symbol: x,
              supply: f,
              projectTaxRecipient: v,
            } = e,
            { address: g } = (0, A.m)(),
            I = void 0 !== u,
            { values: S, errors: P, touched: M } = (0, R.u6)(),
            E = I ? "supplyRecipients[".concat(u, "].") : "",
            L =
              void 0 !== u
                ? null === (t = P.supplyRecipients) || void 0 === t
                  ? void 0
                  : t[u]
                : [],
            Z =
              void 0 !== u
                ? null === (n = S.supplyRecipients) || void 0 === n
                  ? void 0
                  : n[u]
                : [],
            z =
              void 0 !== u
                ? null === (l = M.supplyRecipients) || void 0 === l
                  ? void 0
                  : l[u]
                : [],
            D = (e) => {
              let { values: t, errors: n, touched: l } = e;
              return (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(d(), {
                    id: "ba6a68bc070d641d",
                    children: ".DialogContent{min-height:initial!important}",
                  }),
                  (0, i.jsx)(j.Z, {
                    activeInputProps: {
                      name: "".concat(E, "supplyPercentage"),
                      error: void 0,
                      unit: "%",
                      type: "number",
                      innerClassName: "w-[4ch]",
                      placeholder: "0",
                      step: 0.1,
                    },
                    disabledInputProps: {
                      name: "".concat(E, "supplyPercentage"),
                      value:
                        t.supplyPercentage && f
                          ? Number(
                              (0, C.Ob)(f, Math.round(100 * t.supplyPercentage))
                            )
                          : void 0,
                      unit: (0, i.jsx)("div", {
                        className:
                          "jsx-ba6a68bc070d641d max-w-[5ch] overflow-hidden text-ellipsis whitespace-nowrap font-mono",
                        children: x,
                      }),
                    },
                  }),
                  (0, i.jsx)(b.u, {
                    label: T[h].nameLabel,
                    name: "".concat(E, "name"),
                  }),
                  (0, i.jsx)(b.u, {
                    name: "".concat(E, "address"),
                    placeholder: "0x...",
                  }),
                ],
              });
            };
          return (0, i.jsxs)(m.Vq, {
            children: [
              (0, i.jsx)(m.hg, { children: a }),
              (0, i.jsxs)(m.cZ, {
                children: [
                  (0, i.jsx)(m.$N, {
                    children: T[h][I ? "titleEdit" : "titleAdd"],
                  }),
                  (0, i.jsx)(m.a7, {
                    size: "md",
                    children: I
                      ? (0, i.jsxs)("div", {
                          className: "flex flex-col gap-4",
                          children: [
                            D({ errors: L, touched: z, values: Z }),
                            (0, i.jsx)(m.hg, {
                              asChild: !0,
                              children: (0, i.jsx)(p.default, {
                                size: "lg",
                                children: T[h].buttonRm,
                              }),
                            }),
                          ],
                        })
                      : (0, i.jsx)(y.nA.Provider, {
                          value: {
                            schema: (0, k.A0)({
                              type: h,
                              deployerAddress: g,
                              projectTaxRecipient: v,
                            }),
                            completeResource: r || {},
                            onSubmit: console.log,
                          },
                          children: (0, i.jsx)(w.U, {
                            validationSchema: (0, k.A0)({
                              deployerAddress: g,
                              type: h,
                              projectTaxRecipient: v,
                            }),
                            validateOnMount: !0,
                            completeResource: r,
                            initialValues: (0, N.R)(
                              r,
                              (0, k.A0)({
                                deployerAddress: g,
                                type: h,
                                projectTaxRecipient: v,
                              }).describe().fields
                            ),
                            onSubmit: () => {
                              console.log("submitting");
                            },
                            children: (e) => {
                              let {
                                values: t,
                                isValid: n,
                                errors: l,
                                touched: a,
                              } = e;
                              return (0, i.jsxs)(R.l0, {
                                className: "flex flex-col gap-4 px-2",
                                children: [
                                  D({ errors: l, touched: a, values: t }),
                                  (0, i.jsx)(m.hg, {
                                    disabled: !n,
                                    className: "contents",
                                    children: (0, i.jsx)(p.default, {
                                      size: "lg",
                                      htmlType: "submit",
                                      disabled: !n,
                                      onClick: () => {
                                        null == o ||
                                          o({
                                            ...t,
                                            type: h,
                                            color: "hsl(".concat(
                                              Math.floor(360 * Math.random()),
                                              ", 60%, 60%)"
                                            ),
                                          });
                                      },
                                      children: T[h].buttonAdd,
                                    }),
                                  }),
                                ],
                              });
                            },
                          }),
                        }),
                  }),
                ],
              }),
            ],
          });
        },
        M = (e) => {
          let {
              supplyRecipients: t,
              restLabel: n = "Liquidity Pool",
              description: l = null,
            } = e,
            { errors: a } = (0, R.u6)(),
            s = t.filter((e) => {
              let { type: t } = e;
              return "allocation" === t;
            }),
            r = t.filter((e) => {
              let { type: t } = e;
              return "team" === t;
            }),
            o = t.reduce((e, t) => e + t.supplyPercentage, 0),
            c = (0, S.useRef)(),
            [d, p] = (0, S.useState)(null),
            m = (e) => {
              clearTimeout(c.current), p(e);
            },
            h = () => {
              c.current = setTimeout(() => p(null), 300);
            };
          return (0, i.jsxs)("div", {
            className: "px-1",
            onMouseLeave: () => p(null),
            children: [
              (0, i.jsx)("div", {
                className: (0, I.cn)(
                  "input mb-2 overflow-hidden !rounded-2xs !p-0",
                  (null == a ? void 0 : a.supplyRecipients) && "error"
                ),
                children: (0, i.jsxs)("div", {
                  className:
                    "relative flex h-10 w-full items-center gap-[1px] overflow-hidden bg-gray-10",
                  children: [
                    n &&
                      (0, i.jsxs)(g.Tooltip, {
                        children: [
                          (0, i.jsx)(g.TooltipTrigger, {
                            asChild: !0,
                            children: (0, i.jsx)("div", {
                              className:
                                "bg-striped-diagonal h-full rounded-2xs transition-all",
                              onMouseEnter: () => m("lp"),
                              onMouseLeave: h,
                              style: {
                                ...((!d || "lp" === d) && {
                                  "--stripe-color": "var(--highlight)",
                                  "--stripe-color-2":
                                    "lp" === d
                                      ? "var(--highlight)"
                                      : "hsla(var(--highlight-base), 30%)",
                                }),
                                width: "calc(".concat(100 - o, "%)"),
                              },
                            }),
                          }),
                          (0, i.jsxs)(g.TooltipContent, {
                            side: "top",
                            children: [n, " ", 100 - o, "%"],
                          }),
                        ],
                      }),
                    [...s, ...r].map((e, t) => {
                      var l, a;
                      return (0, i.jsxs)(
                        "div",
                        {
                          className: "flex h-full min-w-[1rem] gap-[1px]",
                          style: { width: "".concat(e.supplyPercentage, "%") },
                          children: [
                            n || 0 !== t
                              ? (0, i.jsx)("div", {
                                  className:
                                    "h-full w-[4px] rounded-full bg-gray-95 shadow-sm transition-all",
                                })
                              : null,
                            (0, i.jsxs)(g.Tooltip, {
                              children: [
                                (0, i.jsx)(g.TooltipTrigger, {
                                  asChild: !0,
                                  children: (0, i.jsx)("div", {
                                    className:
                                      "bg-striped-diagonal h-full grow overflow-hidden rounded-2xs transition-all",
                                    onMouseEnter: () => m(e.address),
                                    onMouseLeave: h,
                                    style: (!d || d === e.address) && {
                                      "--stripe-color": e.color,
                                      "--stripe-color-2":
                                        d === e.address
                                          ? e.color
                                          : "".concat(
                                              null == e
                                                ? void 0
                                                : null === (a = e.color) ||
                                                  void 0 === a
                                                ? void 0
                                                : null ===
                                                    (l = a.replace(
                                                      "hsl",
                                                      "hsla"
                                                    )) || void 0 === l
                                                ? void 0
                                                : l.replace(")", ", 30%"),
                                              ")"
                                            ),
                                    },
                                  }),
                                }),
                                (0, i.jsxs)(g.TooltipContent, {
                                  side: "top",
                                  children: [
                                    "allocation" === e.type
                                      ? e.name
                                      : (0, i.jsx)(u.d, {
                                          expandOnHover: !0,
                                          address: e.address,
                                        }),
                                    " ",
                                    e.supplyPercentage,
                                    "%",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        "".concat(e.address, "-segment")
                      );
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(x.Q, {
                description: l,
                error: a.supplyRecipients
                  ? "string" == typeof a.supplyRecipients
                    ? a.supplyRecipients
                    : a.supplyRecipients
                        .filter(Boolean)
                        .flatMap(Object.values)
                        .join(",")
                  : null,
              }),
            ],
          });
        },
        E = (e) => {
          let { className: t = "", recipients: n } = e,
            l = n ? n.reduce((e, t) => e + t.supplyPercentage, 0) : 0;
          return (0, i.jsxs)("div", {
            className: (0, I.cn)("flex items-center gap-4 px-3 pb-2 pt-2", t),
            children: [
              (0, i.jsxs)("div", {
                className: "relative h-14 w-14 flex-none",
                children: [
                  (0, i.jsx)(v.F, {
                    value: 100 - l,
                    color: "var(--highlight)",
                    className: "absolute left-0 top-0 h-14 w-14",
                    width: 8,
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "m-auto flex h-full w-full items-center justify-center font-mono text-sm tracking-tighter",
                    children: [100 - l, "%"],
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [
                  (0, i.jsx)("h3", {
                    className: "font-medium",
                    children: "Initial liquidity pool",
                  }),
                  (0, i.jsx)("span", {
                    className: "text-sm text-gray-50",
                    children:
                      "Once launched, these tokens will be added to a Uniswap V2 liquidity pool",
                  }),
                ],
              }),
            ],
          });
        };
      function L(e) {
        let { coin: t } = e,
          { onSubmit: n } = (0, y.xv)(),
          { values: l, errors: a } = (0, R.u6)(),
          s = l.supplyRecipients || [];
        return t
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(M, { supplyRecipients: s }),
                (0, i.jsx)("div", {
                  className: "flex flex-col gap-4 rounded-md bg-gray-20 p-2",
                  children: (0, i.jsx)("div", {
                    style: {
                      "--joint-height": "10px",
                      "--joint-width": "100px",
                      "--bg-color": "var(--gray-10)",
                    },
                    children: (0, i.jsxs)("div", {
                      className: "align-center flex flex-col",
                      children: [
                        (0, i.jsx)(E, {
                          className: "rounded-sm bg-gray-10",
                          recipients: l.supplyRecipients,
                        }),
                        (0, i.jsx)(R.F2, {
                          name: "supplyRecipients",
                          render: (e) => {
                            let { push: a, remove: r } = e;
                            return (0, i.jsxs)(i.Fragment, {
                              children: [
                                s.map((e, a) => {
                                  let { type: s, ...o } = e;
                                  return "allocation" !== s
                                    ? null
                                    : (0, i.jsxs)(
                                        S.Fragment,
                                        {
                                          children: [
                                            (0, i.jsx)(h.ZP, {}),
                                            (0, i.jsx)("div", {
                                              className:
                                                "rounded-sm bg-gray-10",
                                              children: (0, i.jsxs)("div", {
                                                className:
                                                  "flex items-start justify-between gap-4 px-3 pb-2 pt-2",
                                                children: [
                                                  (0, i.jsxs)("div", {
                                                    className:
                                                      "flex items-center gap-4",
                                                    children: [
                                                      (0, i.jsxs)("div", {
                                                        className:
                                                          "relative h-14 w-14",
                                                        children: [
                                                          (0, i.jsx)(v.F, {
                                                            value:
                                                              o.supplyPercentage,
                                                            color: o.color,
                                                            className:
                                                              "absolute left-0 top-0 h-14 w-14",
                                                            width: 8,
                                                          }),
                                                          (0, i.jsx)("div", {
                                                            className:
                                                              "m-auto flex h-full w-full items-center justify-center font-mono text-sm tracking-tighter translate-y-0.5",
                                                            children: (0,
                                                            i.jsxs)("span", {
                                                              className:
                                                                "-mt-1",
                                                              children: [
                                                                o.supplyPercentage,
                                                                "%",
                                                              ],
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                      (0, i.jsxs)("div", {
                                                        className:
                                                          "flex flex-col gap-1",
                                                        children: [
                                                          (0, i.jsx)("h3", {
                                                            className:
                                                              "font-medium",
                                                            children: o.name,
                                                          }),
                                                          (0, i.jsx)("div", {
                                                            className:
                                                              "flex items-center gap-12 text-sm text-gray-50",
                                                            children: (0,
                                                            i.jsxs)("span", {
                                                              className:
                                                                "flex items-center gap-1",
                                                              children: [
                                                                (0, i.jsx)(
                                                                  f.WalletIcon,
                                                                  {}
                                                                ),
                                                                (0, i.jsx)(
                                                                  u.d,
                                                                  {
                                                                    address:
                                                                      o.address,
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, i.jsxs)("div", {
                                                    className:
                                                      "flex items-center",
                                                    children: [
                                                      (0, i.jsx)(P, {
                                                        type: "allocation",
                                                        symbol:
                                                          (null == t
                                                            ? void 0
                                                            : t.symbol) || "",
                                                        supply:
                                                          (null == t
                                                            ? void 0
                                                            : t.supply) || 0n,
                                                        recipient: o,
                                                        recipients:
                                                          l.supplyRecipients ||
                                                          [],
                                                        projectTaxRecipient:
                                                          t.projectTaxRecipient ||
                                                          "",
                                                        onRemove: (e) => {
                                                          r(e),
                                                            null == n ||
                                                              n(
                                                                "supplyRecipients[".concat(
                                                                  e,
                                                                  "]"
                                                                ),
                                                                { __rm: !0 }
                                                              );
                                                        },
                                                        index: a,
                                                        children: (0, i.jsx)(
                                                          p.default,
                                                          {
                                                            type: "ghost",
                                                            className:
                                                              "!text-highlight",
                                                            leftIcon: (0,
                                                            i.jsx)(
                                                              f.PencilIcon,
                                                              {
                                                                className:
                                                                  "h-4 w-4",
                                                              }
                                                            ),
                                                          }
                                                        ),
                                                      }),
                                                      (0, i.jsx)(p.default, {
                                                        type: "ghost",
                                                        className:
                                                          "!text-highlight",
                                                        leftIcon: (0, i.jsx)(
                                                          f.LessIcon,
                                                          {}
                                                        ),
                                                        onClick: () => {
                                                          null == n ||
                                                            n(
                                                              "supplyRecipients",
                                                              l.supplyRecipients.map(
                                                                (e, t) =>
                                                                  t === a
                                                                    ? {
                                                                        ...e,
                                                                        __rm: !0,
                                                                      }
                                                                    : e
                                                              )
                                                            );
                                                        },
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                          ],
                                        },
                                        "alloc-".concat(a)
                                      );
                                }),
                                (0, i.jsx)(h.ZP, {}),
                                (0, i.jsx)("div", {
                                  className: "relative mx-auto",
                                  children: (0, i.jsx)(P, {
                                    symbol:
                                      (null == t ? void 0 : t.symbol) || "",
                                    supply:
                                      (null == t ? void 0 : t.supply) || 0n,
                                    type: "allocation",
                                    recipients: l.supplyRecipients || [],
                                    projectTaxRecipient:
                                      t.projectTaxRecipient || "",
                                    onAdd: (e) => {
                                      a(e),
                                        null == n ||
                                          n("supplyRecipients", [
                                            ...(l.supplyRecipients || []),
                                            { ...e },
                                          ]);
                                    },
                                    children: (0, i.jsx)(p.default, {
                                      type: "secondary",
                                      className:
                                        "active:translate-y-[-1px] relative !text-highlight !bg-gray-10 !border-none",
                                      leftIcon: (0, i.jsx)(f.MoreIcon, {}),
                                      children: "Add Allocation",
                                    }),
                                  }),
                                }),
                              ],
                            });
                          },
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          : null;
      }
      function Z(e) {
        let { params: t } = e,
          { data: n, isLoading: c } = (0, l.Z)(t.coinId),
          d = null == n ? void 0 : n.coin;
        return c || n
          ? (null == d ? void 0 : d.erc20Address)
            ? (0, i.jsx)("div", {
                className: "font-mono text-lg flex justify-center my-10",
                children:
                  "(private)/app/coins/[coinId]/distribution/page.tsx — deployed",
              })
            : (0, i.jsx)(r.Z, {
                title: "Coin distribution",
                coin: d,
                children: (0, i.jsx)("div", {
                  children: (0, i.jsxs)(a.U, {
                    title: "Distribution",
                    subtitle:
                      "Setup how your coin should be initially distributed.",
                    children: [
                      (0, i.jsx)(L, { coin: d }),
                      (0, i.jsx)(o._, { current: "distribution" }),
                    ],
                  }),
                }),
              })
          : (0, s.notFound)();
      }
    },
    7263: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return A;
        },
      });
      var i = n(2067),
        l = n(2384),
        a = n(15955),
        s = n(60107),
        r = n(96560),
        o = n(69436);
      function c(e) {
        return !!e;
      }
      var d = n(43568),
        u = n(71335),
        p = n.n(u),
        m = n(60171),
        h = n(62678);
      function x() {
        (0, m.useRouter)();
        let e = (0, m.useParams)().coinId,
          { requiredCount: t, errorsCount: n } = (0, h.S)();
        return (0, i.jsxs)(p(), {
          className: "group relative text-left",
          href: "/app/coins/[coinId]/review-and-launch?coinId=".concat(e),
          as: "/app/coins/".concat(e, "/review-and-launch"),
          prefetch: !0,
          children: [
            (0, i.jsxs)("div", {
              className: (0, r.cn)(
                "relative z-10 flex flex-col gap-2 rounded-md bg-gray-20 px-4 pb-3 pt-4 text-gray-95 transition-all",
                "group-hover:bg-gray-30"
              ),
              children: [
                (0, i.jsx)(d.ZP, { include: "logoImage", className: "h-4" }),
                (0, i.jsx)("div", {
                  className: "font-bold",
                  children: "Launch your coin",
                }),
                (0, i.jsx)("div", {
                  className: (0, r.cn)("mb-1 text-sm", "text-gray-60"),
                  children: "Get your coin ready to launch on Metadrop.",
                }),
                (0, i.jsx)("div", {
                  className: "h-[4px] overflow-hidden rounded-full bg-gray-50",
                  children: (0, i.jsx)("div", {
                    className:
                      "h-full rounded-full bg-highlight !transition-all",
                    style: { width: "".concat((1 - n / t) * 100, "%") },
                  }),
                }),
                (0, i.jsx)(l.default, {
                  className: "-ml-1 mt-2 w-[calc(100%+0.5rem)]",
                  label: "Review & Launch",
                  Component: "div",
                  htmlType: "button",
                  children: "Review & Launch",
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: (0, r.cn)(
                "mx-4 h-2 rounded-b-md opacity-[0.5]",
                "inset-4 bg-gray-20",
                "transition-all group-hover:h-3 group-hover:bg-gray-30 "
              ),
            }),
            (0, i.jsx)("div", {
              className: (0, r.cn)(
                "mx-8 h-2 rounded-b-md opacity-[0.25]",
                "inset-4 bg-gray-20",
                "transition-all group-hover:h-3 group-hover:bg-gray-30"
              ),
            }),
          ],
        });
      }
      var f = n(83297),
        v = n(42482),
        g = n(36013),
        y = n(74734),
        b = n(44544),
        j = n(59757),
        w = n(9038),
        N = n(637),
        I = n(28967),
        C = n(15039);
      let k = (e) => {
          let { coin: t } = e,
            { coinId: n } = (0, m.useParams)(),
            { mutate: a } = (0, s.Z)(n),
            [r, c] = (0, C.useState)(!1),
            d = (null == t ? void 0 : t.contractVerifiedAt) !== null,
            u =
              (0, v.G)(
                (null == t ? void 0 : t.verificationRequestedAt) &&
                  (0, w.m)(null == t ? void 0 : t.verificationRequestedAt, 10)
              ) && !!(null == t ? void 0 : t.verificationRequestedAt),
            p = async () => {
              c(!0);
              try {
                await (0, o.Z)("/v1/coins/".concat(n, "/verify"), {
                  method: "POST",
                }),
                  f.A.success(
                    "Verifying contract. This can take up to 5 minutes."
                  ),
                  setTimeout(() => a, 5e3);
              } catch (e) {
                f.A.error(e), c(!1);
              }
            };
          return (0, i.jsx)(N.M, {
            initial: !1,
            children:
              !d &&
              (0, i.jsx)(I.E.div, {
                ...(0, y.g)(),
                className: "w-full",
                children: (0, i.jsx)(l.default, {
                  onClick: p,
                  disabled: r || u,
                  fullWidth: !0,
                  children: d ? "Verified" : "Verify Contract",
                }),
              }),
          });
        },
        R = () => {
          let { data: e } = (0, b.Z)(),
            { coinId: t } = (0, m.useParams)(),
            n = null == e ? void 0 : e.user,
            a = (0, m.useRouter)();
          return (null == n ? void 0 : n.isMetadropTeam)
            ? (0, i.jsx)(l.default, {
                onClick: async () => {
                  let { coin: e } = await (0, o.Z)(
                    "/internal/coins/".concat(t, "/duplicate"),
                    { method: "POST" }
                  );
                  a.push("/app/coins/".concat(e.id));
                },
                children: "Duplicate Coin",
              })
            : null;
        },
        S = () => {
          var e, t, n;
          let { coinId: a } = (0, m.useParams)(),
            { data: r } = (0, s.Z)(a);
          return (0, i.jsxs)("div", {
            className: "flex flex-col gap-2",
            children: [
              (0, i.jsx)(R, {}),
              (0, i.jsx)(k, { coin: null == r ? void 0 : r.coin }),
              (0, i.jsx)("hr", { className: "my-1 border-gray-20" }),
              (0, i.jsx)(l.default, {
                target: "_blank",
                as: "/coins/".concat(null == r ? void 0 : r.coin.slug),
                href: "/coins/[slug]?slug=".concat(
                  null == r ? void 0 : r.coin.slug
                ),
                children: "View profile",
              }),
              (0, i.jsxs)(l.default, {
                type: "secondary",
                target: "_blank",
                href: ""
                  .concat(
                    g.kh[
                      null == r
                        ? void 0
                        : null === (e = r.coin) || void 0 === e
                        ? void 0
                        : e.chainId
                    ],
                    "/address/"
                  )
                  .concat(
                    null == r
                      ? void 0
                      : null === (t = r.coin) || void 0 === t
                      ? void 0
                      : t.erc20Address
                  ),
                children: [
                  "View on ",
                  g.O0[
                    null == r
                      ? void 0
                      : null === (n = r.coin) || void 0 === n
                      ? void 0
                      : n.chainId
                  ],
                ],
              }),
            ],
          });
        },
        A = () => {
          var e;
          let t = (0, m.useParams)().coinId,
            { data: n, isLoading: l } = (0, s.Z)(t),
            o = !!(null == n
              ? void 0
              : null === (e = n.coin) || void 0 === e
              ? void 0
              : e.erc20Address),
            d = !j.Y;
          return {
            links: (0, C.useMemo)(() => {
              let e = (e) => ({
                href: "/app/coins/[coinId]".concat(e, "?coinId=").concat(t),
                as: "/app/coins/".concat(t).concat(e),
              });
              return l
                ? [{ label: "Loading Coin...", links: [] }]
                : o
                ? [
                    {
                      label: "Coin Dashboard",
                      links: [
                        {
                          label: "Dashboard",
                          ...e(""),
                          Icon: a.DashboardFastIcon,
                        },
                        {
                          label: "Coin Profile",
                          ...e("/profile"),
                          Icon: a.CryptoIcon,
                        },
                        {
                          label: "Socials",
                          ...e("/socials"),
                          Icon: (e) => {
                            let { className: t } = e;
                            return (0, i.jsx)(a.WebsiteIcon, {
                              className: (0, r.cn)("p-[3px]", t),
                            });
                          },
                        },
                        {
                          label: "Anti-Bot",
                          ...e("/anti-bot"),
                          Icon: a.ShieldIcon,
                        },
                        { label: "Taxes", ...e("/taxes"), Icon: a.PercentIcon },
                        {
                          label: "Liquidity",
                          ...e("/liquidity"),
                          Icon: a.DatabaseIcon,
                        },
                        {
                          label: "Telegram",
                          badge: "soon",
                          Icon: a.TelegramIcon,
                        },
                        {
                          label: "Activity",
                          badge: "soon",
                          Icon: a.AITextIcon,
                        },
                        {
                          label: "Analytics",
                          badge: "soon",
                          Icon: a.TrendingIcon,
                        },
                      ].filter(c),
                    },
                  ]
                : [
                    {
                      links: [
                        { label: "Coin Setup", ...e("/"), Icon: a.CryptoIcon },
                        {
                          label: "Socials",
                          ...e("/socials"),
                          Icon: (e) => {
                            let { className: t } = e;
                            return (0, i.jsx)(a.WebsiteIcon, {
                              className: (0, r.cn)("p-[3px]", t),
                            });
                          },
                        },
                        {
                          label: "Distribution",
                          ...e("/distribution"),
                          Icon: a.TransferIcon,
                        },
                        {
                          label: "Anti-Bot",
                          ...e("/anti-bot"),
                          Icon: a.ShieldIcon,
                        },
                        { label: "Taxes", ...e("/taxes"), Icon: a.PercentIcon },
                        d && {
                          label: "Fair Launch",
                          ...e("/fair-launch"),
                          Icon: a.PoolPaddedIcon,
                        },
                      ].filter(c),
                    },
                  ];
            }, [l, d, o, t, null == n ? void 0 : n.coin.driPoolEnabled]),
            footer: (0, C.useMemo)(
              () => (o ? (0, i.jsx)(S, {}) : (0, i.jsx)(x, {})),
              [o]
            ),
          };
        };
    },
    72598: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return x;
        },
      });
      var i = n(2067),
        l = n(32905),
        a = n(68343),
        s = n(96560),
        r = n(15039),
        o = n(95599),
        c = n(81314),
        d = n(637),
        u = n(28967),
        p = n(74734),
        m = n(90117),
        h = n(83297);
      let x = (0, m.P)(
        (e) => {
          let {
              address: t,
              ensName: n,
              zeroXClassName: m = "opacity-40",
              charCount: x = 10,
              chainId: f = 1,
              className: v = "",
              expandOnHover: g,
              canCopy: y = !0,
            } = e,
            b = (0, c.Av)(),
            j = (0, a.F)({ address: t, chainId: f, query: { enabled: !n } }),
            [w, N] = (0, o.Z)(),
            [I, C] = (0, r.useState)(!1),
            [k, R] = (0, r.useState)(x);
          (0, r.useEffect)(() => {
            let e;
            if (g && !b)
              return (
                (e = I
                  ? setInterval(() => {
                      R((e) => Math.min(e + 1, 42));
                    }, 5)
                  : setInterval(() => {
                      R((e) => Math.max(e - 1, x));
                    }, 5)),
                () => clearInterval(e)
              );
          }, [I, x, g, b]);
          let S = (0, l.T)(t, k),
            A = (0, i.jsxs)("span", {
              children: [
                (0, i.jsx)("span", { className: (0, s.cn)(m), children: "0x" }),
                (0, i.jsx)("span", {
                  children: null == S ? void 0 : S.split("x")[1],
                }),
              ],
            });
          return (0, i.jsx)("div", {
            onMouseEnter: () => C(!0),
            onMouseLeave: () => C(!1),
            onClick: y
              ? () => {
                  N(t), h.A.info("Address copied");
                }
              : void 0,
            className: (0, s.cn)("cursor-pointer", v),
            children: (0, i.jsx)(d.M, {
              mode: "wait",
              initial: !1,
              children: j.data
                ? (0, i.jsx)(u.E.div, { ...(0, p.g)(), children: j.data })
                : (0, i.jsx)(u.E.div, { ...(0, p.g)(), children: A }),
            }),
          });
        },
        {
          fallback: (0, i.jsxs)("span", {
            children: [
              (0, i.jsx)("span", { className: "text-muted", children: "0x" }),
              (0, i.jsx)("span", { children: "???" }),
            ],
          }),
        }
      );
    },
    70956: function (e, t, n) {
      "use strict";
      n.d(t, {
        $N: function () {
          return f;
        },
        Hm: function () {
          return b;
        },
        Vq: function () {
          return u;
        },
        a7: function () {
          return g;
        },
        cZ: function () {
          return x;
        },
        hg: function () {
          return p;
        },
      });
      var i = n(2067),
        l = n(52464),
        a = n.n(l),
        s = n(79648),
        r = n(15039),
        o = n(2384),
        c = n(15955),
        d = n(96560);
      let u = (e) =>
          (0, i.jsxs)(s.fC, {
            ...e,
            children: [
              (0, i.jsx)(a(), {
                id: "9f4e6b41a02186e5",
                children:
                  ".DialogContent{-webkit-animation:contentShow.2s cubic-bezier(.16,1,.3,1);-moz-animation:contentShow.2s cubic-bezier(.16,1,.3,1);-o-animation:contentShow.2s cubic-bezier(.16,1,.3,1);animation:contentShow.2s cubic-bezier(.16,1,.3,1)}.DialogOverlay{-webkit-animation:overlayShow 150ms cubic-bezier(.16,1,.3,1);-moz-animation:overlayShow 150ms cubic-bezier(.16,1,.3,1);-o-animation:overlayShow 150ms cubic-bezier(.16,1,.3,1);animation:overlayShow 150ms cubic-bezier(.16,1,.3,1)}@-webkit-keyframes overlayShow{from{opacity:0}to{opacity:1}}@-moz-keyframes overlayShow{from{opacity:0}to{opacity:1}}@-o-keyframes overlayShow{from{opacity:0}to{opacity:1}}@keyframes overlayShow{from{opacity:0}to{opacity:1}}@-webkit-keyframes contentShow{from{opacity:0;-webkit-transform:scale(.96);transform:scale(.96)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-moz-keyframes contentShow{from{opacity:0;-moz-transform:scale(.96);transform:scale(.96)}to{opacity:1;-moz-transform:scale(1);transform:scale(1)}}@-o-keyframes contentShow{from{opacity:0;-o-transform:scale(.96);transform:scale(.96)}to{opacity:1;-o-transform:scale(1);transform:scale(1)}}@keyframes contentShow{from{opacity:0;-webkit-transform:scale(.96);-moz-transform:scale(.96);-o-transform:scale(.96);transform:scale(.96)}to{opacity:1;-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}}",
              }),
              e.children,
            ],
          }),
        p = s.xz,
        m = (e) => {
          let { children: t, ...n } = e;
          return (0, i.jsx)(s.h_, {
            ...n,
            children: (0, i.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-start justify-center sm:items-center",
              children: t,
            }),
          });
        };
      m.displayName = s.h_.displayName;
      let h = r.forwardRef((e, t) => {
        let { className: n, children: l, ...a } = e;
        return (0, i.jsx)(s.aV, {
          ref: t,
          className: (0, d.cn)(
            "DialogOverlay",
            "fixed inset-0 z-50 backdrop-blur-2 transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
            "bg-gray-10/80",
            n
          ),
          ...a,
          children: l,
        });
      });
      h.displayName = s.aV.displayName;
      let x = r.forwardRef((e, t) => {
        let { className: n, children: l, dismissable: a = !0, ...r } = e;
        return (0, i.jsxs)(m, {
          children: [
            (0, i.jsx)(h, {}),
            (0, i.jsxs)(s.VY, {
              ref: t,
              children: [
                a &&
                  (0, i.jsx)(v, {
                    className: (0, d.cn)(
                      "DialogClose fixed right-2 top-2 z-[61] md:left-4 md:top-4"
                    ),
                  }),
                (0, i.jsx)("div", {
                  className: (0, d.cn)(
                    "data-[state=open]:animation-[contentShow] fixed z-50 animate-in",
                    "pointer-events-none",
                    "fixed inset-0",
                    "flex flex-col place-content-center gap-4",
                    "max-h-screen",
                    "py-4",
                    "transform-origin-center",
                    n
                  ),
                  style: { "--tw-enter-scale": ".95" },
                  ...r,
                  children: l,
                }),
              ],
            }),
          ],
        });
      });
      x.displayName = s.VY.displayName;
      let f = r.forwardRef((e, t) => {
        let { className: n, ...l } = e;
        return (0, i.jsx)(s.Dx, {
          ref: t,
          className: (0, d.cn)(
            "w-full text-center font-wide text-lg text-gray-95",
            n
          ),
          ...l,
        });
      });
      f.displayName = s.Dx.displayName;
      let v = (e) => {
          let { className: t } = e;
          return (0, i.jsx)(s.x8, {
            asChild: !0,
            children: (0, i.jsx)(o.default, {
              type: "custom",
              className: (0, d.cn)(
                "z-10 h-8 w-8 cursor-pointer",
                "!border-none bg-gray-10 text-gray-95 bg-gray-100 text-gray-10 hover:!bg-gray-85",
                t
              ),
              "aria-label": "Close",
              htmlType: "button",
              leftIcon: (0, i.jsx)(c.CloseIcon, { className: "h-4 w-4" }),
            }),
          });
        },
        g = (e) => {
          let {
            className: t,
            outerClassName: n,
            children: l,
            size: a = "md",
          } = e;
          return (0, i.jsx)("div", {
            className: (0, d.cn)(
              "relative mx-auto w-screen max-w-full",
              "flex max-h-[calc(100vh-4rem)]",
              "shadow-lg",
              "pointer-events-auto",
              "DialogContent",
              {
                "inline-flex min-h-[80vh] md:max-w-2xl": "lg" === a,
                "md:max-w-md": "md" === a,
              },
              "rounded-md bg-gray-20 text-gray-95",
              n
            ),
            style: { "--joint-width": "30%", "--joint-height": "10px" },
            children: (0, i.jsxs)("div", {
              className: (0, d.cn)("flex w-full flex-col overflow-hidden"),
              children: [
                (0, i.jsx)("div", {
                  className: (0, d.cn)(
                    "flex grow flex-col overflow-y-auto",
                    "p-4 pb-2",
                    t
                  ),
                  children: l,
                }),
                (0, i.jsx)(y, {}),
              ],
            }),
          });
        };
      g.displayName = "DialogBody";
      let y = (e) => {
          let { className: t, children: n } = e;
          return n
            ? (0, i.jsx)("div", {
                className: (0, d.cn)(
                  "dialog-actions mt-2 flex flex-col gap-2 pt-2 *:grow md:flex-row",
                  t
                ),
                children: n,
              })
            : null;
        },
        b = (e) => {
          let {
              title: t,
              subtitle: n,
              children: l,
              triggerButtonProps: a,
              renderTrigger: s,
              confirmButtonProps: c,
              renderConfirm: d,
            } = e,
            [m, h] = r.useState(!1);
          return (0, i.jsxs)(u, {
            open: m,
            onOpenChange: (e) => h(e),
            children: [
              (0, i.jsx)(p, {
                asChild: !0,
                children:
                  (null == s ? void 0 : s()) ||
                  (0, i.jsx)(o.default, { size: "lg", type: "primary", ...a }),
              }),
              (0, i.jsxs)(x, {
                title: t,
                children: [
                  (0, i.jsx)(f, { children: t }),
                  (0, i.jsxs)(g, {
                    className: "flex flex-col gap-4",
                    children: [
                      n &&
                        (0, i.jsx)("div", {
                          className: "mx-auto font-wide",
                          children: n,
                        }),
                      l,
                      (0, i.jsxs)(y, {
                        className: "grid grid-cols-2",
                        children: [
                          (0, i.jsx)(p, {
                            asChild: !0,
                            children: (0, i.jsx)(o.default, {
                              size: "lg",
                              type: "primary",
                              children: "Cancel",
                            }),
                          }),
                          (null == d ? void 0 : d({ close: () => h(!1) })) ||
                            (0, i.jsx)(o.default, {
                              size: "lg",
                              type: "accent",
                              ...c,
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
    37397: function (e, t, n) {
      "use strict";
      n.d(t, {
        UH: function () {
          return s;
        },
      });
      var i = n(2067),
        l = n(96560);
      let a = (e) => {
          let { className: t = "", style: n = {} } = e;
          return (0, i.jsxs)("svg", {
            className: (0, l.cn)("w-auto", t),
            width: "10",
            height: "20",
            viewBox: "0 0 10 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            style: n,
            children: [
              (0, i.jsx)("path", {
                d: "M0 4.37114e-07L9.53674e-07 10C7.12263e-07 4.47715 4.47715 2.41411e-07 10 0L0 4.37114e-07Z",
                fill: "var(--bg-color)",
              }),
              (0, i.jsx)("path", {
                d: "M9.53674e-07 10C1.19509e-06 15.5228 4.47715 20 10 20H9.53674e-07V10Z",
                fill: "var(--bg-color)",
              }),
            ],
          });
        },
        s = (e) => {
          let { className: t = "", useCurrentColor: n = !1 } = e;
          return (0, i.jsx)("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: (0, i.jsx)("path", {
              d: "M20 20H0V0C0 11.0457 8.9543 20 20 20Z",
              fill: n ? "currentColor" : "var(--bg-color)",
            }),
          });
        };
      t.ZP = (e) => {
        let { className: t = "", style: n, bg: s, dir: r = "col" } = e;
        return (0, i.jsxs)("div", {
          className: (0, l.cn)(
            t,
            s,
            "w-full",
            "flex justify-center",
            "col" === r ? "flex-row" : "flex-col"
          ),
          style: {
            color: "var(--bg-color)",
            backgroundColor: "transparent",
            ...n,
          },
          children: [
            (0, i.jsx)(a, {
              className: (0, l.cn)("rotate-180", "row" === r && "rotate-270"),
              style: { height: "var(--joint-height)" },
            }),
            (0, i.jsx)("div", {
              className: "max-w-[80%]",
              style: {
                width: "var(--joint-width)",
                backgroundColor: "var(--bg-color)",
              },
            }),
            (0, i.jsx)(a, {
              className: (0, l.cn)("row" === r && "rotate-90"),
              style: { height: "var(--joint-height)" },
            }),
          ],
        });
      };
    },
    4619: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return r;
        },
      });
      var i = n(2067),
        l = n(96560),
        a = n(28967),
        s = n(15039);
      function r(e) {
        let {
            value: t,
            color: n = "#fff",
            className: r,
            additionalValue: o,
            innerImageSrc: c,
            width: d = 12,
            disableAnimations: u,
            InnerImageComponent: p,
          } = e,
          m = null != o ? o : 0,
          h = 2 * Math.PI * 50,
          x = ((100 - Math.min(t, 100)) / 100) * h,
          [f, v] = (0, s.useState)(120),
          g = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            let e = () => {
              requestAnimationFrame(() => {
                g.current && v(g.current.getBoundingClientRect().width);
              });
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          (0, i.jsxs)("div", {
            className: (0, l.cn)("relative", r),
            children: [
              (0, i.jsxs)("svg", {
                width: "120",
                height: "120",
                viewBox: "0 0 120 120",
                style: { transform: "rotate(-90deg)" },
                className: "progress-circle h-full w-full",
                children: [
                  (0, i.jsx)("circle", {
                    cx: "60",
                    cy: "60",
                    r: "50",
                    stroke: n,
                    strokeOpacity: "0.5",
                    strokeWidth: d,
                    fill: "none",
                    ref: g,
                  }),
                  (0, i.jsx)(a.E.circle, {
                    cx: "60",
                    cy: "60",
                    r: "50",
                    fill: "none",
                    stroke: n,
                    strokeWidth: d,
                    strokeDasharray: "".concat(h, " ").concat(h),
                    strokeDashoffset: h,
                    strokeLinecap: "round",
                    initial: { strokeDashoffset: h },
                    animate: { strokeDashoffset: x },
                    transition: u
                      ? { type: "tween", duration: 0 }
                      : { type: "spring", damping: 24, stiffness: 300 },
                  }),
                  (0, i.jsx)(a.E.circle, {
                    cx: "60",
                    cy: "60",
                    r: "50",
                    fill: "none",
                    stroke: "#000",
                    strokeOpacity: m > 0 ? 1 : 0,
                    strokeWidth: d,
                    strokeDasharray: ""
                      .concat((m / 100) * h, " ")
                      .concat(h * (1 - m / 100)),
                    strokeDashoffset: x - h,
                    strokeLinecap: "round",
                    initial: { strokeDashoffset: x - h },
                    animate: {
                      strokeDasharray: ""
                        .concat((m / 100) * h, " ")
                        .concat(h * (1 - m / 100)),
                    },
                    transition: u
                      ? { type: "tween", duration: 0 }
                      : { type: "spring", damping: 24, stiffness: 300 },
                  }),
                ],
              }),
              t > 0 &&
                (0, i.jsx)(a.E.div, {
                  className: "absolute",
                  style: {
                    width: f + 2 * d,
                    height: f + 2 * d,
                    top: "calc(50% - ".concat(f / 2 + d, "px)"),
                    left: "calc(50% - ".concat(f / 2 + d, "px)"),
                    opacity: t > 100 ? 1 : 0,
                  },
                  transition: u
                    ? { type: "tween", duration: 0 }
                    : { type: "spring", damping: 24, stiffness: 300 },
                  animate: { rotate: 3.6 * t },
                  children: (0, i.jsx)("div", {
                    className:
                      "absolute h-full w-full rounded-full bg-transparent transition-shadow",
                    style: {
                      width: 2 * d + 1,
                      height: 2 * d + 1,
                      left: "calc(50% - ".concat(d, "px)"),
                      boxShadow:
                        t > 100
                          ? "10px 3px 12px rgba(0, 0, 0, 0.3)"
                          : "6px 2px 8px rgba(0, 0, 0, 0.175)",
                    },
                  }),
                }),
              c &&
                (0, i.jsx)("img", {
                  src: c,
                  className:
                    "absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform rounded-full object-cover",
                  alt: "",
                  style: { maxHeight: 0.85 * f, maxWidth: 0.85 * f },
                }),
              p &&
                (0, i.jsx)(p, {
                  className: (0, l.cn)(
                    "absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2",
                    "p-4 drop-shadow-lg"
                  ),
                  alt: "",
                  style: { maxHeight: 0.85 * f, maxWidth: 0.85 * f },
                }),
            ],
          })
        );
      }
    },
    48259: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Tooltip: function () {
            return o;
          },
          TooltipContent: function () {
            return d;
          },
          TooltipProvider: function () {
            return r;
          },
          TooltipTrigger: function () {
            return c;
          },
        });
      var i = n(2067),
        l = n(15039),
        a = n(87907),
        s = n(96560);
      let r = (e) => (0, i.jsx)(a.zt, { delayDuration: 150, ...e }),
        o = a.fC,
        c = (e) =>
          (0, i.jsx)(a.xz, {
            ...e,
            className: (0, s.cn)("cursor-auto", e.className),
            type: "button",
          }),
        d = l.forwardRef((e, t) => {
          let { className: n, sideOffset: l = 8, side: r = "bottom", ...o } = e;
          return (
            o.children &&
            (0, i.jsx)(a.VY, {
              ref: t,
              sideOffset: l,
              side: r,
              className: (0, s.cn)(
                "z-50 animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
                "px-3 pb-[11px] pt-[9px]",
                "popover",
                "text-pretty",
                "shadow-lg",
                "text-sm font-normal",
                "max-w-xs",
                n
              ),
              avoidCollisions: !0,
              ...o,
            })
          );
        });
      d.displayName = a.VY.displayName;
    },
    91461: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var i = n(2067),
        l = n(52464),
        a = n.n(l),
        s = n(69463),
        r = n(15955),
        o = n(80742),
        c = n(65130),
        d = n(67552),
        u = n(96560),
        p = n(48028),
        m = n(15039);
      function h(e) {
        var t, n, l;
        let {
            ActiveInputComponent: h = c.u,
            DisabledInputComponent: x = o.Z,
            activeInputProps: f,
            disabledInputProps: v,
            jointIcon: g = r.MenuSimpleIcon,
            className: y = "",
            sharedDesc: b = !0,
          } = e,
          j = (0, c.m)({ name: f.name }),
          [w, N] = (0, p.U$)(f.name),
          I = (0, d.B4)(),
          C = (0, m.useRef)("unique-".concat(Math.round(1e5 * Math.random())));
        return (
          (0, m.useLayoutEffect)(() => {
            let e = document.querySelector(
                "#".concat(C.current, " .right-input .input")
              ),
              t = document.querySelector(
                "#".concat(C.current, " .right-input .mid-icon")
              );
            t && (null == e || e.appendChild(t));
          }, []),
          (0, i.jsxs)("div", {
            id: C.current,
            className:
              a().dynamic([["735ee3e88440dec2", [b ? "display: none;" : ""]]]) +
              " dual-container",
            children: [
              (0, i.jsx)(a(), {
                id: "735ee3e88440dec2",
                dynamic: [b ? "display: none;" : ""],
                children:
                  ".dual-container.__jsx-style-dynamic-selector .right-side{--bg-color:var(--gray-10)!important}.dual-container.__jsx-style-dynamic-selector .right-side .input{pointer-events:none}.dual-container.__jsx-style-dynamic-selector .dual-inner .error-or-description{".concat(
                    b ? "display: none;" : "",
                    "\n          }"
                  ),
              }),
              (0, i.jsxs)("div", {
                className:
                  a().dynamic([
                    ["735ee3e88440dec2", [b ? "display: none;" : ""]],
                  ]) +
                  " " +
                  ((0, u.cn)(
                    "grid grid-cols-2 items-start gap-4 p-0 pb-2",
                    "dual-inner",
                    y
                  ) || ""),
                children: [
                  (0, i.jsx)(h, {
                    ...f,
                    innerClassName: (0, u.cn)("w-full", f.innerClassName),
                    className:
                      a().dynamic([
                        ["735ee3e88440dec2", [b ? "display: none;" : ""]],
                      ]) +
                      " " +
                      ((0, u.cn)("mb-0", f.className) || ""),
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      a().dynamic([
                        ["735ee3e88440dec2", [b ? "display: none;" : ""]],
                      ]) + " right-input relative",
                    children: [
                      (0, i.jsx)(g, {
                        className:
                          a().dynamic([
                            ["735ee3e88440dec2", [b ? "display: none;" : ""]],
                          ]) +
                          " " +
                          ((0, u.cn)(
                            "mid-icon",
                            "h-3 w-3 rounded-full bg-gray-30 p-2 text-gray-60",
                            "absolute -left-2 top-5 z-10 -translate-x-1/2 -translate-y-1/2",
                            "border-2 border-gray-10 [box-sizing:content-box]"
                          ) || ""),
                      }),
                      (0, i.jsx)(x, {
                        label: (0, i.jsx)(i.Fragment, { children: "\xa0" }),
                        ...v,
                        disabled: !0,
                        innerClassName: (0, u.cn)(
                          "w-full",
                          "relative",
                          !f.disabled && !I && "!text-gray-95",
                          v.innerClassName
                        ),
                        placeholder: "-",
                        value:
                          "string" == typeof v.value
                            ? v.value
                            : "bigint" == typeof v.value
                            ? Number(v.value).toString()
                            : isNaN(v.value)
                            ? ""
                            : null === (t = v.value) || void 0 === t
                            ? void 0
                            : t.toLocaleString(),
                        description: v.description
                          ? (0, i.jsx)("div", {
                              className:
                                a().dynamic([
                                  [
                                    "735ee3e88440dec2",
                                    [b ? "display: none;" : ""],
                                  ],
                                ]) + " my-1",
                              children: v.description,
                            })
                          : null,
                        className:
                          a().dynamic([
                            ["735ee3e88440dec2", [b ? "display: none;" : ""]],
                          ]) +
                          " " +
                          ((0, u.cn)(
                            "right-side my-0 py-2",
                            !f.disabled && !I && "text-gray-95",
                            v.className
                          ) || ""),
                      }),
                    ],
                  }),
                ],
              }),
              b &&
                (0, i.jsx)(s.Q, {
                  description:
                    null == j
                      ? void 0
                      : null === (l = j.meta) || void 0 === l
                      ? void 0
                      : null === (n = l.props) || void 0 === n
                      ? void 0
                      : n.description,
                  error: N.touched ? N.error : null,
                }),
            ],
          })
        );
      }
    },
    79953: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return s;
        },
      });
      var i = n(2067),
        l = n(48028),
        a = n(27349);
      function s(e) {
        let {
          validationSchema: t,
          onSubmit: n,
          initialValues: s,
          enableReinitialize: r = !0,
          completeResource: o = {},
          schemaContext: c = {},
          ...d
        } = e;
        return (0, i.jsx)(a.G.Provider, {
          value: { schema: t, completeResource: o },
          children: (0, i.jsx)(l.J9, {
            ...d,
            enableReinitialize: r,
            initialValues: s,
            onSubmit: async (e, i) => n(t.cast(e, { stripUnknown: !0 }), i),
            validate: async (e) => {
              try {
                await t.validate(
                  { ...o, ...e },
                  { abortEarly: !1, context: { isFinal: !1, ...o, ...e, ...c } }
                );
              } catch (n) {
                let t = {};
                try {
                  return (
                    n.inner.forEach((e) => {
                      t[e.path] = e.message;
                    }),
                    t
                  );
                } catch (t) {
                  console.log(e),
                    console.log(t),
                    console.log("error", JSON.stringify(n)),
                    console.log(JSON.stringify(t));
                }
              }
              return {};
            },
          }),
        });
      }
    },
    81314: function (e, t, n) {
      "use strict";
      n.d(t, {
        Av: function () {
          return r;
        },
        dD: function () {
          return s;
        },
        rx: function () {
          return o;
        },
      });
      var i = n(15039);
      let l = !1,
        a = (e) => {
          let [t, n] = (0, i.useState)(() =>
              l ? window.innerWidth <= e : void 0
            ),
            a = (0, i.useRef)(t);
          a.current = t;
          let s = (0, i.useCallback)((e) => {
            e.matches ? n(!0) : n(!1);
          }, []);
          return (
            (0, i.useEffect)(() => {
              void 0 === a.current && n(window.innerWidth <= e), (l = !0);
              let t = window.matchMedia("(max-width: ".concat(e, "px)"));
              return (
                t.addListener(s), t.matches && n(!0), () => t.removeListener(s)
              );
            }, [s, e]),
            t
          );
        },
        s = () => a(600),
        r = () => a(960),
        o = () => a(768);
      t.ZP = a;
    },
    42482: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return s;
        },
        m: function () {
          return a;
        },
      });
      var i = n(23987),
        l = n(15039);
      let a = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1e3,
            t = arguments.length > 1 ? arguments[1] : void 0,
            [n, i] = (0, l.useState)(new Date());
          return (
            (0, l.useEffect)(() => {
              let n = setInterval(() => {
                let e = new Date();
                t && e > t && clearInterval(n), i(e);
              }, e);
              return () => clearInterval(n);
            }),
            n
          );
        },
        s = (e) => {
          let [t, n] = (0, l.useState)((0, i.R)(new Date(), e));
          return (
            (0, l.useEffect)(() => {
              let l;
              if (!t && !(0, i.R)(new Date(), e)) return;
              let a = () => {
                let t =
                  (null == e ? void 0 : e.getTime()) - new Date().getTime();
                if (!(0, i.R)(new Date(), e)) {
                  n(!1);
                  return;
                }
                n(!0), (l = setTimeout(a, Math.min(t, 1728e6)));
              };
              return a(), () => clearTimeout(l);
            }, [null == e ? void 0 : e.getTime()]),
            t
          );
        };
    },
    36013: function (e, t, n) {
      "use strict";
      n.d(t, {
        HI: function () {
          return v;
        },
        O0: function () {
          return m;
        },
        V3: function () {
          return h;
        },
        ZD: function () {
          return f;
        },
        kh: function () {
          return p;
        },
        s4: function () {
          return x;
        },
      });
      var i = n(48213),
        l = n(57214),
        a = n(13027),
        s = n(33731),
        r = n(5781),
        o = n(12618),
        c = n(23123),
        d = n(18507),
        u = n(67934);
      let p = {
          [i.R.id]: "https://etherscan.io",
          [l.F.id]: "https://sepolia.etherscan.io",
          [a.y.id]: "https://arbiscan.io",
          [s.Z.id]: "https://sepolia.arbiscan.io",
          [r.A.id]: "https://blastscan.io",
          [o.d.id]: "https://sepolia.blastscan.io",
          [c.u.id]: "https://basescan.org",
          [d.L.id]: "https://sepolia.basescan.org",
          [u.c.id]: "https://eth95.dev",
        },
        m = {
          [i.R.id]: "Etherscan",
          [l.F.id]: "Etherscan Sepolia",
          [r.A.id]: "Blastscan",
          [o.d.id]: "Blastscan Sepolia",
          [c.u.id]: "Basescan",
          [d.L.id]: "Basescan Sepolia",
          [a.y.id]: "Arbitrum",
          [s.Z.id]: "Arbitrum Sepolia",
          [u.c.id]: "Eth95",
        },
        h = {
          [i.R.id]: "eth",
          [l.F.id]: "",
          [u.c.id]: "",
          [a.y.id]: "arbitrum",
          [s.Z.id]: "",
          [r.A.id]: "blastmainnet",
          [o.d.id]: "blast",
          [c.u.id]: "base",
          [d.L.id]: "",
        },
        x = {
          [i.R.id]: "ethereum",
          [l.F.id]: "",
          [a.y.id]: "arbitrum",
          [s.Z.id]: "",
          [r.A.id]: "blast",
          [o.d.id]: "",
          [c.u.id]: "base",
          [d.L.id]: "",
          [u.c.id]: "",
        },
        f = {
          [i.R.id]: "eth",
          [l.F.id]: "sepolia-testnet",
          [a.y.id]: "arbitrum",
          [r.A.id]: "blast",
          [o.d.id]: "",
          [c.u.id]: "base",
          [d.L.id]: "base",
          [u.c.id]: "",
        };
      function v(e, t, n) {
        return null === e
          ? void 0
          : x[e] && t
          ? "https://dexscreener.com/"
              .concat(x[e], "/")
              .concat(t, "?embed=1&theme=dark&trades=0&info=0")
          : h[e] && n
          ? "https://www.defined.fi/"
              .concat(h[e], "/")
              .concat(
                n,
                "?embedded=1&hideTxTable=1&hideSidebar=1&embedColorMode=HEX_SCREAMER"
              )
          : null;
      }
    },
    32905: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return i;
        },
        a: function () {
          return l;
        },
      });
      let i = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 8,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "•";
          if (!e) return;
          if (e.length <= t) return e;
          let i = Array(Math.min(3, e.length - t))
            .fill(n)
            .join("");
          return "0x"
            .concat(e.substring(2, Math.ceil(t / 2) + 2))
            .concat(i)
            .concat(e.substring(e.length - Math.floor(t / 2)));
        },
        l = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 64;
          return e
            ? e.length > t && t > 2
              ? "".concat(e.slice(0, t - 1).trim(), "…")
              : e
            : null;
        };
    },
    74734: function (e, t, n) {
      "use strict";
      n.d(t, {
        g: function () {
          return i;
        },
      });
      let i = function () {
        let { delay: e = 0, duration: t = 0.06 } =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return {
          transition: { duration: t, type: "tween", delay: e },
          animate: { opacity: 1, scale: 1 },
          exit: { scale: 0.9, opacity: 0 },
          initial: { opacity: 0, scale: 0.9 },
        };
      };
    },
    60808: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ob: function () {
          return l;
        },
        _d: function () {
          return i;
        },
        pC: function () {
          return a;
        },
      });
      let i = (e) => (null === e ? null : e / 100),
        l = (e, t) =>
          null === t || null === e || void 0 === t || void 0 === e
            ? null
            : (e * BigInt(t) * BigInt(1e9)) / BigInt(1e4) / BigInt(1e9),
        a = (e, t) => (t ? (e * BigInt(1e4)) / t : BigInt(0));
    },
  },
  function (e) {
    e.O(
      0,
      [
        6299, 894, 775, 9745, 2005, 1664, 4356, 9041, 8158, 4910, 5060, 8388,
        8505, 3297, 4685, 1164, 4916, 3525, 5428, 3152, 1952, 5955, 1642, 3201,
        8282, 4665, 1744,
      ],
      function () {
        return e((e.s = 55850));
      }
    ),
      (_N_E = e.O());
  },
]);
