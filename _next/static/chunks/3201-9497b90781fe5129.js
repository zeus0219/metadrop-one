"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3201],
  {
    30156: function (e, t, a) {
      a.d(t, {
        U: function () {
          return o;
        },
      });
      var n = a(2067),
        r = a(96560);
      let l = (e) => {
        let { title: t, subtitle: a, className: l = "" } = e;
        return (0, n.jsxs)("div", {
          className: (0, r.cn)("px-4", l),
          children: [
            t &&
              (0, n.jsx)("h1", {
                className: "text-lg leading-normal text-gray-95",
                children: t,
              }),
            a &&
              (0, n.jsx)("p", {
                className: "text-sm text-gray-60",
                children: a,
              }),
          ],
        });
      };
      var i = a(15955),
        s = a(11107);
      function o(e) {
        let {
          children: t,
          className: a,
          title: o,
          subtitle: d,
          childrenClassName: c,
          tipIcon: u,
          tipTitle: p,
          tipText: m,
          tipURL: x,
          tipGuideBar: h,
        } = e;
        return (0, n.jsxs)("section", {
          className: (0, r.cn)(
            "form-section w-full gap-y-4 md:gap-y-6 grid-base-3-cols",
            a
          ),
          children: [
            o &&
              (0, n.jsx)("div", {
                className: "col-start-2 flex flex-col gap-4 md:px-4 pt-4",
                children: (0, n.jsx)(l, {
                  title: o,
                  subtitle: d,
                  className: "",
                }),
              }),
            (0, n.jsx)("div", {
              className: (0, r.cn)("col-start-2 flex flex-col gap-4", c),
              children: t,
            }),
            (0, n.jsx)("div", {
              className: "col-start-3 h-full p-4",
              children:
                (p || m) &&
                (0, n.jsx)(s.U, {
                  title: p,
                  Icon: u,
                  text: m,
                  buttonProps: x
                    ? {
                        href: x,
                        rightIcon: (0, n.jsx)(i.ArrowTopRightLinkIcon, {}),
                        children: "Learn More",
                      }
                    : void 0,
                  guidebar: h,
                }),
            }),
          ],
        });
      }
    },
    11107: function (e, t, a) {
      a.d(t, {
        U: function () {
          return i;
        },
      });
      var n = a(2067),
        r = a(2384),
        l = a(96560);
      let i = (e) => {
        let {
          title: t,
          Icon: a,
          text: i,
          buttonProps: s,
          guidebar: o,
          className: d,
        } = e;
        return (0, n.jsxs)("div", {
          className: (0, l.cn)(
            "relative hidden h-full gap-2 self-baseline px-2 md:flex",
            "max-w-[11.75rem]",
            d
          ),
          children: [
            o &&
              (0, n.jsx)("div", {
                className:
                  "bg-striped-diagonal striped-sm right-0 top-0 inline-block h-full w-2 shrink-0 rounded-full text-highlight",
              }),
            (0, n.jsx)("div", {
              children: (0, n.jsxs)("div", {
                className: "sticky top-20 mt-0 inline-flex flex-col gap-1",
                children: [
                  void 0 !== a &&
                    (0, n.jsx)(a, {
                      className: "h-6 min-h-[1.5rem] w-6 text-highlight",
                    }),
                  t,
                  i &&
                    (0, n.jsx)("p", {
                      className: "text-pretty text-sm text-gray-60",
                      children: i,
                    }),
                  s &&
                    (0, n.jsx)(r.default, {
                      type: "ghost",
                      ...s,
                      className: (0, l.cn)(
                        "-translate-x-2 self-baseline justify-self-start !text-highlight",
                        s.className
                      ),
                    }),
                ],
              }),
            }),
          ],
        });
      };
    },
    44544: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = a(69436),
        r = a(60171),
        l = a(15039),
        i = a(83297),
        s = a(11664);
      function o(e, t) {
        let a = (0, r.useRouter)(),
          o = (0, s.ZP)("/auth/user", async (t) =>
            (0, n.Z)(t, { redirectToLogin: e, throwOnHTTPError: !1 })
          ),
          { data: d, isLoading: c } = o;
        return (
          (0, l.useEffect)(() => {
            var e;
            t &&
              !c &&
              (null == d ||
                !d.user ||
                (null == d
                  ? void 0
                  : null === (e = d.user) || void 0 === e
                  ? void 0
                  : e.isMetadropTeam) ||
                (console.log("redirecting"),
                i.A.error("You must be metadrop to visit this page"),
                a.replace("/app/coins")));
          }, [c, null == d ? void 0 : d.user, t, a]),
          o
        );
      }
    },
    95775: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = a(2067),
        r = a(15039);
      function l() {
        let [e, t] = (0, r.useState)(1);
        return (
          (0, r.useEffect)(() => {
            let e = setInterval(() => {
              t((e) => ++e % 4);
            }, 500);
            return () => clearInterval(e);
          }, []),
          (0, n.jsxs)("span", {
            children: [
              (0, n.jsx)("span", {
                className: e <= 0 ? "invisible" : "",
                children: ".",
              }),
              (0, n.jsx)("span", {
                className: e <= 1 ? "invisible" : "",
                children: ".",
              }),
              (0, n.jsx)("span", {
                className: e <= 2 ? "invisible" : "",
                children: ".",
              }),
            ],
          })
        );
      }
    },
    69463: function (e, t, a) {
      a.d(t, {
        Q: function () {
          return m;
        },
        Z: function () {
          return x;
        },
      });
      var n = a(2067),
        r = a(15955),
        l = a(48259),
        i = a(67552),
        s = a(96560),
        o = a(637),
        d = a(28967),
        c = a(90117),
        u = a(37397);
      let p = (e) => {
          let {
            className: t,
            children: a,
            leaveSpaceForError: r = !1,
            disabled: l,
          } = e;
          return (0, n.jsxs)("div", {
            className: (0, s.cn)(
              "transition",
              !r && "-mt-1 delay-200",
              r && "mt-2",
              l && "-mt-2",
              t
            ),
            style: { "--joint-height": r ? "0px" : "10px" },
            children: [
              (0, n.jsx)(u.ZP, {
                bg: "bg-gray-30 bg-gray-90",
                className: (0, s.cn)(
                  "transition-all",
                  !r && "delay-200",
                  r ? "opacity-0" : "opacity-100"
                ),
              }),
              (0, n.jsx)("div", {
                className:
                  "field-drip-description rounded-sm bg-gray-90 px-3 py-2 text-gray-10 bg-gray-30 text-gray-95",
                children: a,
              }),
            ],
          });
        },
        m = (e) => {
          let { error: t, description: a, disabled: r } = e;
          return (0, n.jsx)(c.Z, {
            fallback: () => "There was an error",
            children: (0, n.jsx)(o.M, {
              initial: !1,
              children:
                (t || a) &&
                (0, n.jsx)(d.E.div, {
                  initial: {
                    opacity: 0,
                    y: -4,
                    maxHeight: 0,
                    paddingTop: "0rem",
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                    maxHeight: "5rem",
                    paddingTop: "0.25rem",
                  },
                  exit: { opacity: 0, y: -4, maxHeight: 0, paddingTop: "0rem" },
                  className: (0, s.cn)(
                    "overflow-hidden",
                    "px-4 text-right text-sm",
                    "text-muted",
                    "error-or-description",
                    r && "text-gray-70",
                    t && "field-error text-negative"
                  ),
                  children: t || a,
                }),
            }),
          });
        };
      function x(e) {
        let {
            label: t,
            name: a,
            focused: o,
            helpText: d,
            disabled: c = !1,
            description: u,
            longDescription: x,
            error: h,
            children: g,
            className: v,
            metadropOnly: f,
            optional: y,
            labelExtra: b,
            WrapperComponent: j = "label",
            id: w,
          } = e,
          N = (0, i.B4)() || c;
        return (0, n.jsxs)(i.G6, {
          value: N,
          children: [
            (0, n.jsxs)(j, {
              id: w,
              htmlFor: a,
              className: (0, s.cn)(
                "flex grow flex-col gap-2",
                "my-2",
                x && "mb-0",
                "text-gray-95",
                { "cursor-not-allowed text-gray-40": c },
                v
              ),
              children: [
                t &&
                  (0, n.jsxs)("div", {
                    className: (0, s.cn)(
                      "flex items-center justify-between gap-2 transition ease-in-out",
                      "px-4",
                      "text-sm font-bold"
                    ),
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex gap-2",
                        children: [
                          (0, n.jsx)("div", { children: t }),
                          y &&
                            (0, n.jsx)("span", {
                              className: "font-normal text-muted",
                              children: "Optional",
                            }),
                          f &&
                            (0, n.jsxs)(l.Tooltip, {
                              children: [
                                (0, n.jsx)(l.TooltipTrigger, {
                                  children: (0, n.jsx)(r.ShowIcon, {
                                    className: (0, s.cn)(
                                      "h-4 w-4 text-gray-70"
                                    ),
                                  }),
                                }),
                                (0, n.jsx)(l.TooltipContent, {
                                  side: "top",
                                  className: "",
                                  children: "Only visible to metadrop admin",
                                }),
                              ],
                            }),
                          d &&
                            (0, n.jsxs)(l.Tooltip, {
                              children: [
                                (0, n.jsx)(l.TooltipTrigger, {
                                  children: (0, n.jsx)(
                                    r.QuestionMarkCircledIcon,
                                    { className: (0, s.cn)("h-4 w-4") }
                                  ),
                                }),
                                (0, n.jsx)(l.TooltipContent, {
                                  side: "top",
                                  className: "",
                                  children: d,
                                }),
                              ],
                            }),
                        ],
                      }),
                      void 0 !== b &&
                        (0, n.jsx)("span", {
                          className: (0, s.cn)(
                            "font-normal text-muted",
                            "number" == typeof b && b < 0 && "text-negative"
                          ),
                          children: b,
                        }),
                    ],
                  }),
                g,
                (0, n.jsx)(m, { error: h, description: u, disabled: c }),
              ],
            }),
            x &&
              (0, n.jsx)(p, {
                disabled: N,
                leaveSpaceForError: !!h,
                children: x,
              }),
          ],
        });
      }
    },
    80742: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = a(2067),
        r = a(15039),
        l = a(69463),
        i = a(67552),
        s = a(96560);
      function o(e) {
        var t;
        let {
            label: a,
            description: o,
            longDescription: d,
            name: c,
            helpText: u,
            className: p,
            innerClassName: m,
            icon: x,
            iconRight: h,
            inlineLabel: g,
            inlineLabelClassName: v,
            textPrefix: f,
            error: y,
            loading: b,
            unit: j,
            rightComponent: w,
            optional: N,
            maxChars: C,
            metadropOnly: T,
            labelExtra: E,
            style: k,
            ...F
          } = e,
          [Z, S] = (0, r.useState)(!1),
          P = (0, i.B4)(),
          M = F.disabled || P || b,
          I = (0, r.useCallback)(
            (e) => {
              "number" === F.type && e.target.blur();
            },
            [F.type]
          ),
          R = C
            ? C -
              ((null === (t = F.value) || void 0 === t ? void 0 : t.length) ||
                0)
            : void 0;
        return (0, n.jsx)(l.Z, {
          label: a,
          name: c,
          focused: Z,
          longDescription: d,
          disabled: M,
          description: d ? null : o,
          error: y,
          helpText: u,
          metadropOnly: T,
          optional: N,
          labelExtra: E || R,
          className: p,
          children: (0, n.jsxs)("div", {
            className: (0, s.cn)(
              "input relative",
              M && "disabled",
              y && "error",
              b && "loading",
              g &&
                "inline-label inline-flex !rounded-md !border-transparent !bg-gray-30 !py-[3.5px] !pr-[3.5px]"
            ),
            style: k,
            children: [
              g &&
                (0, n.jsx)("div", {
                  className: (0, s.cn)(
                    "flex h-full w-1/2 items-center justify-end px-3 text-gray-60",
                    v
                  ),
                  children: g,
                }),
              x &&
                (0, n.jsx)(x, {
                  className: (0, s.cn)(
                    "h-4 w-4 shrink-0",
                    "transition duration-100",
                    "pointer-events-none transition-all ease-in-out",
                    "text-gray-90",
                    {
                      "text-gray-70": M || (!Z && "" === F.value),
                      "text-negative": !!y,
                    }
                  ),
                }),
              f &&
                (0, n.jsx)("div", {
                  className: "pointer-events-none text-gray-70",
                  children: f,
                }),
              (0, n.jsx)("input", {
                className: (0, s.cn)(
                  "border-none bg-transparent",
                  "outline-none ring-0",
                  "focus:outline-none focus:ring-0",
                  "placeholder:text-gray-40",
                  "transition-all",
                  M && "placeholder:text-gray-70",
                  "min-w-[1ch]",
                  "p-0",
                  "grow",
                  g &&
                    "rounded-[15px] !border border-solid !border-gray-40 bg-[var(--bg-input)] px-3 py-2",
                  m
                ),
                name: c,
                id: c,
                onWheel: I,
                ...F,
                placeholder:
                  "number" === F.type && "number" == typeof F.placeholder
                    ? new Intl.NumberFormat().format(F.placeholder)
                    : F.placeholder,
                onFocus: (e) => {
                  var t;
                  S(!0),
                    null === (t = F.onFocus) || void 0 === t || t.call(F, e);
                },
                onBlur: (e) => {
                  var t;
                  S(!1),
                    null === (t = F.onBlur) || void 0 === t || t.call(F, e);
                },
                disabled: M,
                "data-1p-ignore": !0,
                "data-lpignore": "true",
              }),
              h &&
                (0, n.jsx)(h, {
                  className: (0, s.cn)(
                    "h-5 w-5",
                    "transition duration-100",
                    "pointer-events-none transition-all ease-in-out",
                    "text-gray-90",
                    {
                      "opacity-40": M || (!Z && "" === F.value),
                      "text-negative": !!y,
                    }
                  ),
                }),
              j &&
                (0, n.jsx)("div", {
                  className: (0, s.cn)("cursor-text text-muted", {}),
                  children: j,
                }),
              w,
            ],
          }),
        });
      }
    },
    74354: function (e, t, a) {
      a.d(t, {
        nA: function () {
          return g;
        },
        uC: function () {
          return f;
        },
        xv: function () {
          return v;
        },
      });
      var n = a(2067),
        r = a(96560),
        l = a(59757),
        i = a(3476),
        s = a(48028),
        o = a(28967),
        d = a(19539),
        c = a.n(d),
        u = a(15039),
        p = a(83297),
        m = a(27349),
        x = a(95121);
      let h = (e) => {
          let [t, a] = (0, u.useState)(!1);
          return (
            (0, u.useEffect)(() => {
              let t;
              let n = () => {
                  a(!0), (t = setTimeout(() => a(!1), null != e ? e : 0));
                },
                r = () => {
                  clearTimeout(t);
                };
              return (
                window.addEventListener("focus", n),
                window.addEventListener("blur", r),
                () => {
                  window.removeEventListener("focus", n),
                    window.removeEventListener("blur", r);
                }
              );
            }, [e]),
            t
          );
        },
        g = (0, u.createContext)({}),
        v = () => (0, u.useContext)(g) || { fieldStatus: {} },
        f = (e) => {
          let {
              schema: t,
              onSubmit: a,
              completeResource: d,
              resourceReady: v = !!d,
              children: f,
              className: b = "contents",
            } = e,
            [j, w] = (0, u.useState)(v),
            N = h(1e3) || (v && !j);
          (0, u.useEffect)(() => {
            w(!!v);
          }, [v]);
          let C = (0, u.useMemo)(
              () => (0, x.R)(d, t.describe({ value: d }).fields),
              [d, t]
            ),
            [T, E] = (0, u.useState)({}),
            k = (0, u.useCallback)(
              c().throttle(
                async function (e, n) {
                  var r, l;
                  let s =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  if (c().get(d, e) === n) return;
                  let o = { ...d };
                  try {
                    c().set(o, e, n),
                      await t.validateAt(e, o, {
                        abortEarly: !1,
                        context: { isFinal: !1, ...o },
                      });
                  } catch (t) {
                    console.log("Error validating ".concat(e, ": "), t);
                    return;
                  }
                  let u = i.ZP.reach(t, e).cast(n),
                    m = {};
                  c().set(m, e, u),
                    null === (r = s.setSubmitting) ||
                      void 0 === r ||
                      r.call(s, !0);
                  try {
                    await a(m, s), E((t) => ({ ...t, [e]: "success" }));
                  } catch (t) {
                    p.A.error(t), E((t) => ({ ...t, [e]: "error" }));
                  }
                  null === (l = s.setSubmitting) ||
                    void 0 === l ||
                    l.call(s, !1),
                    setTimeout(() => {
                      E((t) => ({ ...t, [e]: void 0 }));
                    }, 3e3);
                },
                500,
                { trailing: !0 }
              ),
              [d, a, t]
            );
          return (0, n.jsx)(g.Provider, {
            value: {
              schema: t,
              completeResource: d,
              onSubmit: k,
              fieldStatus: T,
            },
            children: (0, n.jsxs)(m.G.Provider, {
              value: { schema: t, completeResource: d },
              children: [
                !l.Y &&
                  (0, n.jsxs)(o.E.div, {
                    layoutId: "my",
                    transition: { duration: 0.05 },
                    className:
                      "fixed py-1 px-2 rounded-xs bg-gray-95 border right-4 bottom-4 flex gap-1 items-center text-gray-10 text-xs",
                    children: [
                      (0, n.jsx)("div", {
                        className: (0, r.cn)(
                          "rounded-full w-3 h-3",
                          N ? "bg-positive" : "bg-gray-70"
                        ),
                      }),
                      N ? "Reinitializing form" : "Form frozen",
                    ],
                  }),
                (0, n.jsx)(s.J9, {
                  enableReinitialize: N,
                  validationSchema: t,
                  validateOnChange: !1,
                  validateOnBlur: !1,
                  onSubmit: (0, u.useCallback)(() => {}, []),
                  initialValues: C,
                  initialTouched: {},
                  children: (e) =>
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(s.l0, {
                          className: b,
                          children: f({ submit: k, ...e }),
                        }),
                        (0, n.jsx)(y, {
                          values: e.values,
                          validateForm: e.validateForm,
                        }),
                      ],
                    }),
                }),
              ],
            }),
          });
        },
        y = (e) => {
          let { values: t, validateForm: a } = e,
            n = h(1e3),
            r = (0, u.useMemo)(
              () => (0, d.debounce)(() => a(), 500, { trailing: !0 }),
              [a]
            );
          return (
            (0, u.useEffect)(() => {
              r();
            }, [t, r]),
            (0, u.useEffect)(() => {
              a(),
                setTimeout(() => {
                  a();
                }, 20);
            }, [a, n]),
            null
          );
        };
    },
    65130: function (e, t, a) {
      a.d(t, {
        u: function () {
          return eb;
        },
        m: function () {
          return ey;
        },
      });
      var n = a(2067),
        r = a(90117),
        l = a(15955),
        i = a(48028),
        s = a(18315),
        o = a(52464),
        d = a.n(o),
        c = a(46986),
        u = a(67552);
      let p = (e) =>
        (0, n.jsx)("div", {
          ...e,
          className: (0, s.Z)("-translate-y-[9px] text-[24px] text-gray-50"),
          children: "-",
        });
      var m = (e) => {
          let {
              disabled: t,
              loading: a,
              checked: r = !1,
              className: i,
              indeterminate: o,
              style: m,
              onChange: x,
              label: h,
              name: g,
              ...v
            } = e,
            f = (0, u.B4)(),
            y = t || f || a,
            b = o ? p : l.CheckmarkIcon;
          return (0, n.jsxs)("div", {
            className:
              "jsx-694a54586e7e448a " + ((0, s.Z)("flex flex-row", i) || ""),
            children: [
              (0, n.jsx)(d(), {
                id: "694a54586e7e448a",
                children:
                  '.checkbox[data-state="checked"]{@apply border-gray-95;}',
              }),
              (0, n.jsxs)(c.fC, {
                name: g,
                checked: r,
                onCheckedChange: x,
                disabled: t,
                className: "flex items-center rounded border border-gray-30",
                ...v,
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "jsx-694a54586e7e448a " +
                      ((0, s.Z)(
                        "h-[18px] w-[18px] rounded-[4px]",
                        "border-gray-0/40 focus:border-gray-100/40",
                        " text-gray-10",
                        {
                          " bg-gray-30": !r,
                          " bg-gray-85 ": r,
                          "cursor-not-allowed opacity-40": y,
                          "cursor-wait opacity-40": a,
                        }
                      ) || ""),
                    children: [
                      (0, n.jsx)(b, {
                        className:
                          "jsx-694a54586e7e448a " +
                          ((0, s.Z)(
                            "size-icon-sm ml-[1px] rounded-[4px]",
                            "transition-all",
                            "border-gray-10/40 focus:border-gray-100/40",
                            " text-gray-10",
                            {
                              "opacity-0": !r,
                              " bg-gray-85 ": r,
                              "cursor-not-allowed opacity-40": y,
                              "cursor-wait opacity-40": a,
                            }
                          ) || ""),
                      }),
                      (0, n.jsx)(c.z$, {}),
                    ],
                  }),
                  (0, n.jsx)("label", {
                    htmlFor: g,
                    className:
                      "jsx-694a54586e7e448a " +
                      ((0, s.Z)(" text-gray-95", {
                        "cursor-not-allowed  text-gray-40": t,
                      }) || ""),
                    children:
                      h &&
                      (0, n.jsx)("div", {
                        className:
                          "jsx-694a54586e7e448a " +
                          ((0, s.Z)(
                            "flex items-center justify-between gap-2 transition ease-in-out",
                            "pl-2 text-gray-70",
                            "text-sm "
                          ) || ""),
                        children: h,
                      }),
                  }),
                ],
              }),
            ],
          });
        },
        x = a(74354);
      function h(e) {
        let { name: t } = e,
          [a, r, l] = (0, i.U$)({ name: t, type: "checkbox" }),
          { fieldStatus: o, onSubmit: d } = (0, x.xv)(),
          c = null == o ? void 0 : o[a.name];
        return (
          ("string" != typeof c && c) || r.error,
          (0, n.jsx)("div", {
            className: (0, s.Z)("flex flex-col", e.wrapperClass),
            children: (0, n.jsx)(m, {
              ...e,
              ...a,
              onChange: (a) => {
                var n;
                l.setTouched(!0),
                  l.setValue(a),
                  null == d || d(t, a),
                  null === (n = e.onChange) || void 0 === n || n.call(e, a);
              },
              disabled: "submitting" === c || e.disabled,
            }),
          })
        );
      }
      var g = a(28009),
        v = a(15039),
        f = a(69463);
      function y(e) {
        var t;
        let {
            label: a,
            description: r,
            name: l,
            optional: i,
            className: o,
            error: d,
            action: c,
            resizable: p,
            maxChars: m,
            helpText: x,
            metadropOnly: h,
            labelExtra: g,
            ...y
          } = e,
          [b, j] = (0, v.useState)(!1),
          w = (0, u.B4)(),
          N = y.disabled || w || y.loading,
          C = m
            ? m -
              ((null === (t = y.value) || void 0 === t ? void 0 : t.length) ||
                0)
            : void 0;
        return (0, n.jsx)(f.Z, {
          label: a,
          name: l,
          focused: b,
          description: r,
          error: d,
          disabled: N,
          metadropOnly: h,
          labelExtra: g || C,
          optional: i,
          helpText: x,
          className: o,
          children: (0, n.jsx)("div", {
            className: (0, s.Z)(
              "input",
              y.loading && "loading",
              N && "disabled",
              d && "error"
            ),
            children: (0, n.jsx)("textarea", {
              className: (0, s.Z)(
                "border-none bg-transparent",
                "focus:outline-none focus:ring-0",
                "placeholder:text-gray-40",
                "grow",
                "px-0 py-0",
                p ? "resize-y" : "resize-none"
              ),
              name: l,
              id: l,
              ...y,
              onFocus: (e) => {
                var t;
                j(!0), null === (t = y.onFocus) || void 0 === t || t.call(y, e);
              },
              onBlur: (e) => {
                var t;
                j(!1), null === (t = y.onBlur) || void 0 === t || t.call(y, e);
              },
              disabled: N,
            }),
          }),
        });
      }
      var b = a(64735),
        j = a.n(b);
      function w(e) {
        let { onSubmit: t } = (0, x.xv)(),
          [a, r, { setTouched: l }] = (0, i.U$)(e.name),
          s = (0, v.useCallback)(
            j()((e, a, n) => (null == t ? void 0 : t(e, a, n)), 1e3, {
              trailing: !0,
            }),
            [t]
          ),
          { onChange: o, name: d } = a,
          c = r.error;
        return (0, n.jsx)(y, {
          ...e,
          ...a,
          onChange: (0, v.useCallback)(
            (e) => {
              a.onChange(e), l(!0), null == s || s(d, e.target.value);
            },
            [a, o, d, s, l]
          ),
          error: r.touched && c,
        });
      }
      var N = a(44544),
        C = a(19539),
        T = a.n(C),
        E = a(65031),
        k = a(80742);
      function F(e) {
        let { value: t, onChange: a, ...r } = e;
        return (
          (0, v.useRef)(null),
          (0, n.jsx)(k.Z, {
            type: "datetime-local",
            ...r,
            name: r.name,
            onChange: (e) => {
              let {
                target: { value: t },
              } = e;
              return a(t);
            },
            value: (0, E.p6)(t, "datetimeInput"),
            min: (0, E.p6)(r.min, "datetimeInput"),
            max: (0, E.p6)(r.max, "datetimeInput"),
          })
        );
      }
      function Z(e) {
        let { onSubmit: t } = (0, x.xv)(),
          [a, r, { setTouched: l, setValue: s, setError: o }] = (0, i.U$)(
            e.name
          );
        return (0, n.jsx)(F, {
          ...e,
          ...a,
          onChange: (n) => {
            var r;
            let i = new Date(n);
            if (0 === n.length) {
              o("This is not a valid date");
              return;
            }
            l(!0),
              null === (r = e.onChange) || void 0 === r || r.call(e, i),
              s(i),
              null == t || t(a.name, i);
          },
          error: r.touched && r.error,
        });
      }
      var S = a(96560),
        P = a(94511);
      let M = P.fC,
        I = P.ZA,
        R = P.B4,
        U = v.forwardRef((e, t) => {
          let { className: a, children: r, ...i } = e;
          return (0, n.jsxs)(P.xz, {
            ref: t,
            className: (0, S.cn)(
              "flex items-center justify-between focus:outline-none",
              a
            ),
            ...i,
            children: [
              r,
              (0, n.jsx)(P.JO, {
                asChild: !0,
                children: (0, n.jsx)(l.ChevronBottomIcon, {
                  className: "h-4 w-4",
                }),
              }),
            ],
          });
        });
      U.displayName = P.xz.displayName;
      let O = v.forwardRef((e, t) => {
        let { className: a, children: r, position: l = "popper", ...i } = e;
        return (0, n.jsx)(P.h_, {
          children: (0, n.jsx)(P.VY, {
            ref: t,
            className: (0, S.cn)(
              "relative z-50 mr-0 min-w-[8rem] overflow-hidden rounded-sm border shadow-md animate-in fade-in-80",
              "border border-gray-70 bg-gray-95 text-gray-10 border-gray-30 bg-gray-10 text-gray-95",
              "translate-x-0 translate-y-[0px]",
              "popper" === l && "-translate-y-1",
              a
            ),
            position: l,
            ...i,
            children: (0, n.jsx)(P.l_, {
              className: (0, S.cn)(
                "p-1",
                "popper" === l &&
                  "h-[var(--radix-select-trigger-height)] min-w-[calc(var(--radix-select-trigger-width)-2rem)]"
              ),
              children: r,
            }),
          }),
        });
      });
      O.displayName = P.VY.displayName;
      let L = v.forwardRef((e, t) => {
        let { className: a, children: r, label: l, description: i, ...s } = e;
        return (0, n.jsx)(P.ck, {
          ref: t,
          className: (0, S.cn)(
            "relative flex w-full cursor-default select-none items-center outline-none",
            "cursor-pointer rounded-xs",
            "focus:bg-gray-10 focus:text-gray-95",
            "focus:bg-gray-95 focus:text-gray-10",
            "px-3",
            i ? "pb-[6px] pt-[9px]" : "py-1.5",
            s.disabled && "disabled pointer-events-none",
            a
          ),
          ...s,
          children: (0, n.jsx)(P.eT, {
            children: (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)("div", {
                  className: "text-base disabled:text-gray-60",
                  children: l,
                }),
                (0, n.jsx)("div", {
                  className: "text-sm text-gray-60 disabled:text-gray-70",
                  children: i,
                }),
              ],
            }),
          }),
        });
      });
      (L.displayName = P.ck.displayName),
        (v.forwardRef((e, t) => {
          let { className: a, ...r } = e;
          return (0, n.jsx)(P.Z0, {
            ref: t,
            className: (0, S.cn)("-mx-1 my-1 h-px bg-muted", a),
            ...r,
          });
        }).displayName = P.Z0.displayName);
      var B = (e) => {
        let {
            options: t = [],
            placeholder: a,
            onChange: r,
            defaultValue: l,
            value: i,
            className: s,
            ...o
          } = e,
          {
            disabled: d,
            loading: c,
            error: p,
            label: m,
            name: x,
            labelExtra: h,
            optional: g,
            description: v,
            ...y
          } = o,
          b = (0, u.B4)(),
          j = d || b || c,
          w = t.find((e) => i === e || e.value === i);
        return (0, n.jsx)(f.Z, {
          disabled: d,
          loading: c,
          error: p,
          label: m,
          name: x,
          labelExtra: h,
          optional: g,
          className: s,
          description: v,
          children: (0, n.jsxs)(M, {
            defaultValue: l,
            disabled: j,
            error: p,
            ...o,
            value: String(i),
            onValueChange: r,
            children: [
              (0, n.jsx)(U, {
                disabled: j,
                className: (0, S.cn)(
                  "input",
                  o.error && "error",
                  j && "disabled text-gray-70 text-gray-30",
                  o.loading && "loading"
                ),
                children: (0, n.jsx)(R, {
                  placeholder: a,
                  children: i
                    ? (null == w ? void 0 : w.label) || w
                    : (0, n.jsx)(n.Fragment, { children: a }),
                }),
              }),
              (0, n.jsx)(O, {
                position: "item-aligned",
                children: (0, n.jsx)(I, {
                  children: t.map((e) => {
                    let t = "string" == typeof e,
                      { value: a, label: r, disabled: l, description: i } = e;
                    return (
                      t && (a = e),
                      (0, n.jsx)(
                        L,
                        {
                          value: a,
                          label: r || a,
                          description: i,
                          disabled: j || l,
                        },
                        "".concat(a, "-").concat(r)
                      )
                    );
                  }),
                }),
              }),
            ],
          }),
        });
      };
      let D = (e, t) => {
          let a = e;
          return (
            "seconds" === t ||
              ("minutes" === t
                ? (a = 60 * e)
                : "hours" === t
                ? (a = 3600 * e)
                : "days" === t
                ? (a = 86400 * e)
                : "weeks" === t
                ? (a = 604800 * e)
                : "months" === t
                ? (a = 2678400 * e)
                : "years" === t && (a = 31536e3 * e)),
            a
          );
        },
        A = (e, t) => {
          let a = e;
          return (
            "seconds" === t ||
              ("minutes" === t
                ? (a = Math.round(e / 60))
                : "hours" === t
                ? (a = Math.round(e / 3600))
                : "days" === t
                ? (a = Math.round(e / 86400))
                : "months" === t
                ? (a = Math.round(e / 2678400))
                : "years" === t && (a = Math.round(e / 31536e3))),
            a
          );
        },
        z = (e, t) =>
          t.includes("years") && e % 31536e3 == 0
            ? { value: Math.round(e / 31536e3), unit: "years" }
            : t.includes("months") && e % 2678400 == 0
            ? { value: Math.round(e / 2678400), unit: "months" }
            : t.includes("days") && e % 86400 == 0
            ? { value: Math.round(e / 86400), unit: "days" }
            : t.includes("hours") && e % 3600 == 0
            ? { value: Math.round(e / 3600), unit: "hours" }
            : t.includes("minutes") && e % 60 == 0
            ? { value: e / 60, unit: "minutes" }
            : t.includes("seconds")
            ? { value: e, unit: "seconds" }
            : { value: void 0, unit: void 0 },
        H = (e, t, a) => z(D(e, t), a),
        $ = (e) => {
          var t;
          let {
              name: a,
              options: r = [
                { label: "Seconds", value: "seconds" },
                { label: "Minutes", value: "minutes" },
                { label: "Hours", value: "hours" },
                { label: "Days", value: "days" },
                { label: "Months", value: "months" },
                { label: "Years", value: "years" },
              ],
              baseUnit: l = "seconds",
              allowNull: s = !1,
              ...o
            } = e,
            [d, c, u] = (0, i.U$)(a),
            { value: p, unit: m } =
              null === d.value || void 0 === d.value || "" === d.value
                ? {
                    value: null,
                    unit:
                      null === (t = r[0]) || void 0 === t ? void 0 : t.value,
                  }
                : H(
                    d.value,
                    l,
                    r.map((e) => e.value)
                  ),
            [h, g] = (0, v.useState)(m),
            [y, b] = (0, v.useState)(p),
            { onSubmit: j } = (0, x.xv)();
          return ((0, v.useEffect)(() => {
            let e = A(D(y, h), l);
            if ((null !== y || s) && void 0 !== y && (y !== p || h !== m)) {
              let t = null === y && s ? null : e;
              u.setValue(t), null == j || j(a, t);
            }
          }, [a, h, y, l, p]),
          h)
            ? (0, n.jsx)(f.Z, {
                ...c,
                ...o,
                error: c.touched && c.error,
                children: (0, n.jsxs)("div", {
                  className: "-mt-2 grid grid-cols-2 gap-4",
                  children: [
                    (0, n.jsx)(k.Z, {
                      name: "".concat(a, "-value"),
                      placeholder: "1",
                      type: "number",
                      min: o.min,
                      max: o.max,
                      value: y,
                      onChange: (e) =>
                        b(
                          "" === e.target.value
                            ? null
                            : parseInt(e.target.value, 10)
                        ),
                    }),
                    (0, n.jsx)(B, {
                      name: "".concat(a, "-unit"),
                      onChange: (e) => g(e),
                      value: h,
                      options: r,
                    }),
                  ],
                }),
              })
            : null;
        };
      var G = a(2384),
        Y = a(95775),
        V = a(94329),
        _ = a(69436),
        W = a(83397),
        q = a(6524);
      class J extends q.Z {
        install() {
          this.uppy.addUploader(this.uploadFiles);
        }
        getFilesByIDs(e) {
          return e.map((e) => this.uppy.getFile(e));
        }
        constructor(e, t) {
          super(e, t),
            (this.uploadFile = async (e) => {
              let t = this.uppy.getFile(e),
                a = await this.client.uploadFile(t.data, {
                  onProgress: (a) => {
                    let { isComputable: n, value: r } = a;
                    if (!n) return;
                    this.uploadProgresses[e] = r;
                    let l =
                      Object.values(this.uploadProgresses).reduce(
                        (e, t) => e + t,
                        0
                      ) / Object.keys(this.uploadProgresses).length;
                    this.uppy.emit("progress", 100 * l),
                      this.uppy.emit("upload-progress", t, {
                        uploader: this,
                        bytesUploaded: 100 * r,
                        bytesTotal: 100,
                      });
                  },
                  metadata: this.metadata,
                });
              return this.uppy.emit("upload-success", t, a), a;
            }),
            (this.uploadFiles = async (e) => {
              let t = (function (e) {
                let t = (e) => "error" in e && e.error;
                return e.filter((e) => !t(e));
              })(this.getFilesByIDs(e)).filter(
                (e) => !e.progress.uploadStarted || !e.isRestored
              );
              this.uppy.emit("upload-start", t),
                await Promise.all(
                  e.map(async (t) => {
                    try {
                      this.uppy.emit("upload", { id: t, fileIDs: e });
                      let a = await this.uploadFile(t);
                      this.uppy.setFileState(t, { response: a });
                    } catch (e) {
                      this.uppy.emit("upload-error", this.uppy.getFile(t), e);
                    }
                  })
                );
            });
          let { metadata: a } = t;
          (this.id = "UploadcarePlugin"),
            (this.type = "uploader"),
            (this.metadata = a),
            (this.uploadProgresses = {}),
            (this.client = new W.nT({ publicKey: "24592a40c81a7ecc7355" }));
        }
      }
      var Q = a(11702),
        K = a(39930),
        X = a(19084);
      let ee = function (e, t) {
          let a =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          e.getPlugin("UploadcarePlugin") ||
            e.use(J, { metadata: t, autoProceed: a });
        },
        et = (e, t) => {
          e.getPlugin("AwsS3") ||
            e.use(Q.Z, {
              timeout: 6e4,
              getUploadParameters: async (e) => {
                let { method: a, url: n } = await (0, _.Z)("/v1/upload", {
                  method: "POST",
                  body: {
                    fileName: e.name,
                    parentId: t.id,
                    contentType: e.type,
                  },
                });
                return {
                  method: a,
                  url: n,
                  headers: { "Content-Type": e.type },
                };
              },
            });
        };
      var ea = a(57124),
        en = a(28967),
        er = a(67381),
        el = a.n(er);
      let ei = { image: 25, animation: 100, either: 10 },
        es = {
          image: [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"],
          animation: [".mp4", ".mov", ".webm"],
          either: [
            ".png",
            ".jpg",
            ".jpeg",
            ".gif",
            ".webp",
            ".mp4",
            ".mov",
            ".webm",
          ],
        },
        eo = (0, r.P)((e) => {
          let {
              label: t,
              description: a,
              parentId: r,
              provider: i = "uploadcare",
              type: s = "either",
              restrictions: o = {
                maxFileSize: 1048576 * ei[s],
                allowedFileTypes: es[s],
                maxNumberOfFiles: 1,
              },
              allowedFileTypes: c,
              className: p = "",
              inputClassName: m = "",
              value: x,
              error: h,
              loading: g,
              aspect: y = "aspect-square",
              onChange: b,
              hideInnerLabels: j,
              metadropOnly: w,
              optional: N,
              ...C
            } = e,
            T = (0, u.B4)(),
            E = C.disabled || T || g,
            [k, F] = (0, v.useState)(x);
          (0, v.useEffect)(() => {
            F(x);
          }, [x]);
          let [Z, P] = (0, v.useState)(!1),
            {
              uppy: M,
              progress: I,
              uploading: R,
            } = (function (e) {
              let {
                  provider: t,
                  restrictions: a,
                  metadata: n,
                  autoProceed: r,
                  onUploadedFile: l,
                  onPreviewReady: i,
                } = e,
                [s, o] = (0, v.useState)(!1),
                [d, c] = (0, v.useState)(null),
                [u, p] = (0, v.useState)(null),
                [m, x] = (0, v.useState)([]),
                [h, g] = (0, v.useState)(0),
                [f, y] = (0, v.useState)(!1),
                b = (0, v.useRef)(new K.Z({ restrictions: a, autoProceed: r })),
                j = (0, v.useRef)(new Map()),
                w = (0, v.useCallback)(() => {
                  g(0),
                    (b.current = new K.Z({ restrictions: a, autoProceed: r }));
                }, [a, r]);
              (0, v.useEffect)(() => w, [n.id]);
              let N = () => {
                  b.current.getFiles().forEach((e) => {
                    b.current.removeFile(e.id);
                  }),
                    c(null),
                    p(null),
                    x(null);
                },
                C = (0, v.useCallback)(
                  (e) => {
                    e > h && g(e);
                  },
                  [h]
                );
              return (
                (0, v.useEffect)(() => {
                  if (!n.id) return;
                  b.current.getPlugin("ThumbnailGenerator") ||
                    b.current.use(X.Z);
                  let e = () => {
                    let e = b.current.getFiles();
                    if ((x(e), 1 === e.length && e[0].type.includes("video"))) {
                      var t;
                      ((t = e[0].data),
                      new Promise((e, a) => {
                        let n = URL.createObjectURL(t),
                          r = document.createElement("video");
                        (r.src = n),
                          r.addEventListener("loadeddata", () => {
                            (r.muted = !0),
                              (r.currentTime = 0),
                              r.play(),
                              r.pause();
                          }),
                          r.addEventListener("seeked", () => {
                            let t = document.createElement("canvas");
                            (t.width = r.videoWidth),
                              (t.height = r.videoHeight),
                              t
                                .getContext("2d")
                                .drawImage(r, 0, 0, t.width, t.height);
                            let a = t.toDataURL();
                            URL.revokeObjectURL(n), e(a), r.remove();
                          }),
                          r.addEventListener("error", () => {
                            a("Failed to load video"), r.remove();
                          });
                      })).then((t) => {
                        b.current.setFileState(e[0].id, { preview: t }),
                          x(b.current.getFiles()),
                          null == i || i(t);
                      });
                    }
                  };
                  return (
                    "uploadcare" === t && ee(b.current, n),
                    "s3" === t && et(b.current, n),
                    b.current.on("file-added", e),
                    b.current.on("files-added", e),
                    b.current.on("file-removed", e),
                    b.current.on("upload", () => {
                      o(!0);
                    }),
                    b.current.on("progress", C),
                    b.current.on("cancel-all", () => {
                      o(!1);
                    }),
                    b.current.on("upload-success", (e, t) => {
                      j.current.set(e.id, t);
                    }),
                    b.current.on("complete", (e) => {
                      let a = e.successful.map((e) => {
                        let { id: a, name: n } = e,
                          r = j.current.get(a),
                          l = /\.gif$/.test(n);
                        return "s3" === t
                          ? { uploadURL: r.uploadURL, originalFileName: n }
                          : {
                              uploadURL: "https://ucarecdn.com/"
                                .concat(r.uuid, "/")
                                .concat(l ? "gif2video/" : ""),
                              originalFileName: n,
                            };
                      });
                      l(a, N, e.successful, e.failed),
                        e.successful.length <= 0 && c(void 0),
                        c(a),
                        p(e.failed.length > 0 ? e.failed : void 0),
                        o(!1),
                        x([]),
                        w();
                    }),
                    b.current.on("thumbnail:generated", (e, t) => {
                      b.current.setFileMeta(e.id, { preview: t }),
                        x((t) => t.map((t) => (t.id === e.id ? e : t))),
                        null == i || i(t);
                    }),
                    y(!0),
                    () => {}
                  );
                }, [n, l, C]),
                {
                  uppy: b.current,
                  uploading: s,
                  progress: h,
                  successfulUploads: d,
                  failedUploads: u,
                  addedFiles: m,
                  onUploadedFile: l,
                  reset: N,
                }
              );
            })({
              autoProceed: !0,
              provider: i,
              restrictions: {
                maxFileSize: 1048576 * ei[s],
                allowedFileTypes: es[s],
                maxNumberOfFiles: 1,
              },
              metadata: { id: r },
              onPreviewReady: (e) => {
                F(e);
              },
              onUploadedFile: async (e) => {
                let t = e[0].uploadURL,
                  a = "upload-lock-".concat(t);
                window[a] ||
                  ((window[a] = !0),
                  await (null == b ? void 0 : b(t)),
                  F(t),
                  P(!1),
                  B(!1),
                  setTimeout(() => {
                    delete window[a];
                  }, 500));
              },
            }),
            U = async () => {
              E || (await (null == b ? void 0 : b(null)), F(null));
            },
            O = (0, V.useIsSSR)(),
            [L, B] = (0, v.useState)(!1),
            D = !el()(k),
            A = Z || g;
          return (0, n.jsx)(f.Z, {
            label: t,
            description: a,
            error: h,
            className: p,
            metadropOnly: w,
            optional: N,
            children: (0, n.jsxs)("div", {
              style: { "--stripe-color": "var(--gray-30)" },
              className:
                "jsx-d7d0e4db55c22a26 " +
                ((0, S.cn)(
                  "relative",
                  "grow",
                  "h-full",
                  y,
                  "input overflow-hidden",
                  L && "focus",
                  E && "disabled",
                  h && "error",
                  g && "loading"
                ) || ""),
              children: [
                (0, n.jsx)(d(), {
                  id: "d7d0e4db55c22a26",
                  children:
                    ".uppy-DragDrop-container{opacity:0!important}.uppy-Container,.uppy-Root,.uppy-Dashboard{height:100%;width:100%}",
                }),
                !O &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      D &&
                        (0, n.jsx)(G.default, {
                          className: (0, S.cn)(
                            "absolute right-2 top-2 z-20 bg-gray-10 text-sm text-gray-95",
                            E && "opacity-40"
                          ),
                          size: "xs",
                          title: "remove image",
                          onClick: (e) => {
                            e.stopPropagation(), e.preventDefault(), U();
                          },
                          leftIcon: (0, n.jsx)(l.SubtractIcon, {}),
                        }),
                      r
                        ? M &&
                          (0, n.jsx)(
                            ea.v0,
                            {
                              onDragEnter: (e) => {
                                B("dragenter" === e.type);
                              },
                              onDragEnd: (e) => {
                                B(!1);
                              },
                              onDrop: () => {
                                console.log("dropped"), P(!0), B(!1);
                              },
                              className:
                                "absolute inset-0 z-10 overflow-hidden ",
                              uppy: M,
                            },
                            x
                          )
                        : (0, n.jsx)("div", {
                            className: "jsx-d7d0e4db55c22a26",
                            children: "Please provide a parent Id",
                          }),
                      (0, n.jsxs)("div", {
                        className:
                          "jsx-d7d0e4db55c22a26 " +
                          ((0, S.cn)(
                            "bg-striped-diagonal pointer-events-none  absolute inset-0 ",
                            A && "animated",
                            E && "opacity-40"
                          ) || ""),
                        children: [
                          D
                            ? ("animation" === s && !R) ||
                              (null == k ? void 0 : k.includes("gif2video"))
                              ? (0, n.jsx)("video", {
                                  muted: !0,
                                  autoPlay: !0,
                                  loop: !0,
                                  className: "h-full w-full object-cover",
                                  src: k,
                                })
                              : (0, n.jsx)("img", {
                                  className: "h-full w-full object-cover",
                                  src: ""
                                    .concat(k)
                                    .concat(
                                      R || "s3" === i ? "" : "-/resize/800/"
                                    ),
                                  alt: "image",
                                })
                            : j
                            ? null
                            : (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsx)("div", {
                                    className:
                                      "jsx-d7d0e4db55c22a26 " +
                                      ((0, S.cn)(
                                        "absolute right-2 top-2 rounded-xs bg-gray-20 text-gray-60 px-[0.5rem] text-right text-xs",
                                        "py-1 uppercase",
                                        "font-wide"
                                      ) || ""),
                                    children:
                                      "image" === s
                                        ? (0, n.jsxs)(n.Fragment, {
                                            children: [
                                              "Any image ",
                                              (0, n.jsx)("br", {
                                                className:
                                                  "jsx-d7d0e4db55c22a26",
                                              }),
                                              " up to 25MB",
                                            ],
                                          })
                                        : "animation" === s
                                        ? (0, n.jsxs)(n.Fragment, {
                                            children: [
                                              "Any video ",
                                              (0, n.jsx)("br", {
                                                className:
                                                  "jsx-d7d0e4db55c22a26",
                                              }),
                                              " up to 100MB",
                                            ],
                                          })
                                        : (0, n.jsxs)(n.Fragment, {
                                            children: [
                                              "Any image or video",
                                              (0, n.jsx)("br", {
                                                className:
                                                  "jsx-d7d0e4db55c22a26",
                                              }),
                                              " up to 10MB",
                                            ],
                                          }),
                                  }),
                                  (0, n.jsxs)("div", {
                                    className:
                                      "jsx-d7d0e4db55c22a26 " +
                                      ((0, S.cn)(
                                        "absolute bottom-2 left-2 flex items-center gap-2 font-mono text-sm",
                                        "add-file-label text-gray-60"
                                      ) || ""),
                                    children: [
                                      (0, n.jsx)(l.MoreIcon, {}),
                                      A
                                        ? (0, n.jsxs)("span", {
                                            className: "jsx-d7d0e4db55c22a26",
                                            children: [
                                              "Uploading ",
                                              (0, n.jsx)(Y.Z, {}),
                                            ],
                                          })
                                        : el()(x)
                                        ? "Add File"
                                        : "Replace File",
                                    ],
                                  }),
                                ],
                              }),
                          (0, n.jsx)(en.E.div, {
                            animate: { opacity: R ? 1 : 0 },
                            transition: { delay: R ? 0 : 0.25 },
                            className:
                              "animate-fade absolute inset-0 grid items-end bg-gray-10/40 px-2 pb-2",
                            children: (0, n.jsx)(en.E.div, {
                              animate: { y: R ? 0 : 30 },
                              transition: {
                                type: "spring",
                                damping: 20,
                                stiffness: 500,
                              },
                              className:
                                "animated bg-striped-diagonal striped-xs pverflow-hidden relative h-1 rounded-full",
                              children: (0, n.jsx)("div", {
                                style: { width: "".concat(I, "%") },
                                className:
                                  "jsx-d7d0e4db55c22a26 absolute inset-0 rounded-full bg-gray-90",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          });
        }),
        ed = (0, r.P)((e) => {
          let { onSubmit: t, fieldStatus: a } = (0, x.xv)(),
            [{ value: r }, { error: l }, { setValue: s }] = (0, i.U$)(e.name),
            [o, d] = (0, v.useState)(!1),
            c = (null == a ? void 0 : a[e.name]) === "submitting" || o,
            u = (0, v.useCallback)(() => {
              d(!0);
            }, []),
            p = (0, v.useCallback)(
              (a) => {
                s(a), null == t || t(e.name, a);
              },
              [e.name, t, s]
            ),
            m = (0, v.useMemo)(() => e.restrictions, [e.restrictions]);
          return (0, n.jsx)(eo, {
            ...e,
            restrictions: m,
            loading: c,
            value: r,
            error: l,
            onStartUpload: u,
            onChange: p,
          });
        });
      var ec = a(1585);
      function eu(e) {
        let {
            className: t,
            label: a,
            onChange: r,
            value: l,
            options: i,
            error: o,
            disabled: d,
            loading: c,
            description: p,
            metadropOnly: m,
            optional: x,
            labelExtra: h,
            hideRadio: g,
          } = e,
          v = (0, u.B4)() || d || c;
        return (0, n.jsx)(f.Z, {
          label: a,
          error: o,
          disabled: v,
          description: p,
          metadropOnly: m,
          labelExtra: h,
          optional: x,
          children: (0, n.jsx)(ec.E, {
            value: v ? null : l,
            onChange: r,
            className: (0, s.Z)("flex gap-6 flex-wrap", t),
            disabled: v,
            children: i.map((e) =>
              (0, n.jsx)(
                ec.E.Option,
                {
                  value: e.value,
                  className: (e) => {
                    let { checked: t, active: a } = e;
                    return (0, s.Z)(
                      "input flex grow !items-start !p-2",
                      o && "error",
                      c && "loading",
                      v && "disabled",
                      t && "active"
                    );
                  },
                  disabled: e.disabled || v,
                  children: (t) => {
                    let { checked: a, active: r } = t;
                    return (0, n.jsx)("div", {
                      className: "w-full max-w-full",
                      children: (0, n.jsxs)("span", {
                        className: (0, s.Z)(
                          "flex gap-2",
                          g && "w-full items-center justify-center text-center"
                        ),
                        children: [
                          !g &&
                            (0, n.jsx)("div", {
                              className: (0, s.Z)(
                                "aspect-square h-[18px] rounded-full border-gray-85",
                                "translate-y-[8px] transition-all",
                                a
                                  ? "border-[4px] bg-gray-10"
                                  : "border-[9px] bg-gray-85"
                              ),
                            }),
                          (0, n.jsxs)("span", {
                            className: "flex flex-col",
                            children: [
                              (0, n.jsx)(ec.E.Label, {
                                as: "span",
                                className: "block font-medium ",
                                children: (0, n.jsx)("div", {
                                  className: "mt-[1px]",
                                  children: e.title,
                                }),
                              }),
                              e.subtitle &&
                                (0, n.jsx)(ec.E.Description, {
                                  as: "span",
                                  className: (0, s.Z)(
                                    "mb-[4px] mt-1 flex w-full items-center",
                                    g &&
                                      "items-center justify-center text-center"
                                  ),
                                  children: (0, n.jsx)("div", {
                                    className: "text-sm text-muted",
                                    children: e.subtitle,
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                    });
                  },
                },
                e.value
              )
            ),
          }),
        });
      }
      function ep(e) {
        let { onSubmit: t } = (0, x.xv)(),
          [a, r] = (0, i.U$)(e.name);
        return (0, n.jsx)(eu, {
          ...e,
          ...a,
          onChange: (n) => {
            a.onChange({ target: { value: n, type: "input", name: e.name } }),
              null == t || t(a.name, n);
          },
          error: r.touched && r.error,
        });
      }
      var em = a(11664);
      function ex(e) {
        let { name: t } = e,
          [a, r, { setTouched: l }] = (0, i.U$)(t),
          { fieldStatus: s, onSubmit: o } = (0, x.xv)(),
          d = null == s ? void 0 : s[a.name],
          c =
            ("string" != typeof d && (null == d ? void 0 : d.error)) || r.error;
        return (0, n.jsx)(B, {
          ...a,
          error: r.touched && c,
          disabled: e.disabled,
          ...e,
          onChange: (n) => {
            let r = "number" === e.type ? parseFloat(n) : n;
            l(!0),
              e.onChange
                ? e.onChange(r)
                : a.onChange({ target: { name: a.name, value: r } }),
              null == o || o(t, r);
          },
        });
      }
      let eh = (e) => {
        var t, a;
        let { data: r } = (0, em.ZP)(
            e.optionsFrom ? e.optionsFrom.url : null,
            _.Z
          ),
          l =
            e.options ||
            (null == r
              ? void 0
              : null ===
                  (t =
                    r[
                      null == e
                        ? void 0
                        : null === (a = e.optionsFrom) || void 0 === a
                        ? void 0
                        : a.resourceName
                    ]) || void 0 === t
              ? void 0
              : t.map((e) => ({
                  value: e.id,
                  label: e.title || e.name || e.id,
                })));
        return (0, n.jsx)(ex, { ...e, type: e.type, children: l });
      };
      var eg = a(10025),
        ev = a(27349),
        ef = a(59757);
      let ey = (e) => {
          let { name: t } = e,
            { schema: a, completeResource: n } = (0, v.useContext)(ev.G),
            r = t;
          r = (r = r.split(".").join(".fields.")).replace(
            /(\[\d+\])/g,
            ".innerType"
          );
          let l = T().get(a.describe({ value: n }).fields, r);
          return (
            l || console.log("No field for", r, "from", t, a.describe()), l
          );
        },
        eb = (0, r.P)(
          (e) => {
            var t, a;
            let { name: r, key: i, ...s } = e,
              { completeResource: o } = (0, v.useContext)(ev.G),
              d = ey({ name: r }),
              { data: c } = (0, N.Z)();
            if (!d)
              return (0, n.jsxs)("div", {
                className: "flex items-center",
                children: [
                  (0, n.jsx)(l.ExclamationMarkCircledIcon, {
                    className: "text-negative",
                  }),
                  "Error rendering field ",
                  r,
                ],
              });
            let { type: u, label: p, meta: m = {}, tests: x } = d,
              f = p || r,
              y =
                null === (t = x.find((e) => "min" === e.name)) || void 0 === t
                  ? void 0
                  : t.params.min,
              b =
                null === (a = x.find((e) => "max" === e.name)) || void 0 === a
                  ? void 0
                  : a.params.max,
              j =
                (null == m ? void 0 : m.labelExtra) ||
                (null == s ? void 0 : s.labelExtra);
            if (
              (null == m ? void 0 : m.metadropOnly) &&
              !(null == c ? void 0 : c.user.isMetadropTeam) &&
              ef.Y
            )
              return null;
            (null == m ? void 0 : m.metadropOnly) &&
              (j = (0, n.jsxs)(n.Fragment, { children: [j, " (ADMIN ONLY)"] }));
            let C = {
              ...m.props,
              name: r,
              label: f,
              metadropOnly: null == m ? void 0 : m.metadropOnly,
              ...s,
              labelExtra: j,
            };
            if ("select" === m.widget)
              return (0, n.jsx)(eh, {
                ...C,
                options: C.options,
                optionsFrom: C.optionsFrom,
              });
            if ("date" === u) return (0, n.jsx)(Z, { ...C, min: y, max: b });
            if ("number" === u || "eth" === m.unit) {
              let e = "eth" === m.unit ? l.ETHIcon : void 0;
              return ("eth" === m.unit && ((y = m.min), (b = m.max)),
              "duration" === m.widget)
                ? (0, n.jsx)($, { ...C })
                : "radio-group" === m.widget
                ? (0, n.jsx)(ep, { ...C })
                : (0, n.jsx)(g.Z, {
                    type: "number",
                    min: y,
                    max: b,
                    icon: e,
                    ...C,
                    labelExtra: j,
                  });
            }
            if ("string" === u) {
              if ("textarea" === m.widget)
                return (0, n.jsx)(w, { maxChars: b, ...C });
              if ("media" === m.widget)
                return (0, n.jsx)(ed, {
                  provider: m.provider || "uploadcare",
                  parentId: null == o ? void 0 : o.id,
                  ...C,
                });
              if (!m.widget || "text" === m.widget)
                return (0, n.jsx)(g.Z, { maxChars: b, ...C });
            }
            return "boolean" === u
              ? "switch" === m.widget
                ? (0, n.jsx)(eg.Z, { ...C })
                : (0, n.jsx)(h, { ...C })
              : "radio-group" === m.widget
              ? (0, n.jsx)(ep, { ...C })
              : (console.error("Unkown widget", m.widget),
                (0, n.jsxs)("div", {
                  className: "text-negative",
                  children: ["Unknown widget for ", u, "_", m.widget],
                }));
          },
          {
            fallback: (0, n.jsx)("div", {
              children: "Error rendering this field",
            }),
          }
        );
    },
    28009: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return h;
        },
      });
      var n = a(2067),
        r = a(2384),
        l = a(80742),
        i = a(59757),
        s = a(48028),
        o = a(64735),
        d = a.n(o),
        c = a(15039),
        u = a(54597),
        p = a(89599),
        m = a(91818),
        x = a(74354);
      function h(e) {
        var t, a;
        let { onChange: o, ...h } = e,
          { onSubmit: g } = (0, x.xv)(),
          [v, f, { setTouched: y }] = (0, s.U$)(h.name),
          b = h.labelExtra,
          j = (0, c.useCallback)(
            d()((e, t, a) => (null == g ? void 0 : g(e, t, a)), 1e3, {
              trailing: !0,
            }),
            [g]
          ),
          { onChange: w, name: N } = v,
          { address: C } = (0, m.m)();
        return (
          !i.Y &&
            (null == h
              ? void 0
              : null === (a = h.placeholder) || void 0 === a
              ? void 0
              : null === (t = a.startsWith) || void 0 === t
              ? void 0
              : t.call(a, "0x")) &&
            !b &&
            (b = (0, n.jsxs)("div", {
              className: "flex h-6 gap-2 overflow-visible",
              children: [
                (0, n.jsx)(r.default, {
                  htmlType: "button",
                  type: "ghost",
                  onClick: (e) => {
                    e.stopPropagation(), e.preventDefault();
                    let t = (0, u.w)(),
                      a = (0, p.L)(t);
                    y(!0), w({ target: { name: v.name, value: a.address } });
                  },
                  children: "rdm",
                }),
                (0, n.jsx)(r.default, {
                  htmlType: "button",
                  type: "ghost",
                  onClick: (e) => {
                    e.stopPropagation(),
                      e.preventDefault(),
                      w({ target: { name: v.name, value: C } });
                  },
                  children: "me",
                }),
              ],
            })),
          (0, n.jsx)(l.Z, {
            ...v,
            onChange: (0, c.useCallback)(
              (e) => {
                y(!0),
                  null == o || o(e),
                  w(e),
                  null == j || j(N, e.target.value);
              },
              [y, o, w, N, j]
            ),
            error: f.touched && f.error,
            ...h,
            labelExtra: b,
          })
        );
      }
    },
    10025: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return m;
        },
      });
      var n = a(2067),
        r = a(67552),
        l = a(96560),
        i = a(46986),
        s = a(15039),
        o = a(28967),
        d = (e) => {
          let {
              disabled: t,
              loading: a,
              checked: d = !1,
              className: c,
              indeterminate: u,
              style: p,
              onChange: m,
              invert: x,
              uncheckedLabel: h = "off",
              checkedLabel: g = "on",
              labelClassName: v,
              indicatorClassName: f,
              ...y
            } = e,
            b = (0, r.B4)(),
            j = t || b || a,
            [w, N] = (0, s.useState)(!1),
            C = (0, s.useRef)(),
            T = (0, s.useRef)(),
            [E, k] = (0, s.useState)(null);
          return (
            (0, s.useLayoutEffect)(() => {
              if (!C.current || !T.current) return;
              let e = () =>
                requestAnimationFrame(() => {
                  var e, t;
                  k({
                    on:
                      (null === (e = C.current) || void 0 === e
                        ? void 0
                        : e.getBoundingClientRect().width) || 0,
                    off:
                      (null === (t = T.current) || void 0 === t
                        ? void 0
                        : t.getBoundingClientRect().width) || 0,
                  });
                });
              return (
                window.addEventListener("resize", e),
                e(),
                () => {
                  window.removeEventListener("resize", e);
                }
              );
            }, [g, h]),
            (0, n.jsx)("label", {
              children: (0, n.jsxs)(i.fC, {
                checked: d,
                onCheckedChange: m,
                disabled: t,
                className: (0, l.cn)(
                  "relative overflow-hidden",
                  "flex h-6 items-center rounded-xs",
                  x && "flex-row-reverse",
                  "font-mono text-sm font-bold uppercase",
                  "bg-gray-30 text-gray-95",
                  { "opacity-40": j, "cursor-wait opacity-40": a },
                  c
                ),
                ...y,
                onMouseEnter: () => N(!0),
                onMouseLeave: () => N(!1),
                children: [
                  E
                    ? w
                      ? (0, n.jsx)(o.E.div, {
                          initial: !1,
                          animate: { width: d ? E.on : E.off },
                          layout: !0,
                          className: (0, l.cn)(
                            "absolute h-full rounded-xs bg-gray-95",
                            !x && (d ? "right-0" : "left-0"),
                            x && (d ? "left-0" : "right-0"),
                            u ? "opacity-0" : "opacity-1",
                            f
                          ),
                          transition: {
                            duration: 0.1,
                            type: "spring",
                            stiffness: 800,
                            damping: 40,
                          },
                        })
                      : (0, n.jsx)(o.E.div, {
                          initial: !1,
                          animate: { width: d ? E.on : E.off },
                          className: (0, l.cn)(
                            "absolute h-full rounded-xs bg-gray-95",
                            !x && (d ? "right-0" : "left-0"),
                            x && (d ? "left-0" : "right-0"),
                            u ? "opacity-0" : "opacity-1",
                            f
                          ),
                          transition: {
                            duration: 0.1,
                            type: "spring",
                            stiffness: 800,
                            damping: 40,
                          },
                        })
                    : null,
                  (0, n.jsx)("div", {
                    ref: T,
                    className: (0, l.cn)(
                      "relative flex h-6 items-center px-2 transition-all",
                      "whitespace-nowrap",
                      !d && "text-gray-10",
                      v
                    ),
                    children: h,
                  }),
                  (0, n.jsx)("div", {
                    ref: C,
                    className: (0, l.cn)(
                      "relative flex h-6 items-center px-2 transition-all",
                      "whitespace-nowrap",
                      d && "text-gray-10",
                      v
                    ),
                    children: g,
                  }),
                  (0, n.jsx)(i.z$, {}),
                ],
              }),
            })
          );
        },
        c = a(18315),
        u = a(48028),
        p = a(74354);
      function m(e) {
        let { labelExtra: t, error: a, ...r } = e,
          { onSubmit: l } = (0, p.xv)(),
          [i, s, { setValue: o, setTouched: m }] = (0, u.U$)(e.name);
        return (0, n.jsx)("div", {
          className: (0, c.Z)("flex flex-col", e.wrapperClass),
          children: (0, n.jsx)(d, {
            ...r,
            ...i,
            checked: i.value,
            onChange: (t) => {
              var a;
              null === (a = e.onChange) || void 0 === a || a.call(e, t),
                o(t),
                m(t),
                null == l || l(i.name, t);
            },
            error: s.touched && s.error,
          }),
        });
      }
    },
    27349: function (e, t, a) {
      a.d(t, {
        G: function () {
          return n;
        },
      });
      let n = (0, a(15039).createContext)({});
    },
    95121: function (e, t, a) {
      a.d(t, {
        R: function () {
          return function e(t, a) {
            return Object.keys(t || {}).reduce((r, s) => {
              var o, d, c, u, p, m, x;
              let h = { ...r },
                g = null !== (c = l().get(t, s)) && void 0 !== c ? c : "",
                v = l().get(a, s);
              if (
                ("object" != typeof g ||
                  g instanceof Date ||
                  Array.isArray(g) ||
                  (g = e(
                    g,
                    null === (u = l().get(a, s)) || void 0 === u
                      ? void 0
                      : u.fields
                  )),
                Array.isArray(g))
              ) {
                let t = l().get(a, s),
                  n =
                    null == t
                      ? void 0
                      : null === (p = t.innerType) || void 0 === p
                      ? void 0
                      : p.fields;
                !n ||
                  (null === (m = t.meta) || void 0 === m
                    ? void 0
                    : m.skipInitialize) ||
                  (g = g.map((t) => e(t, n)));
              }
              if (
                null == v
                  ? void 0
                  : null === (o = v.meta) || void 0 === o
                  ? void 0
                  : o.parseToInput
              )
                try {
                  g =
                    null === (x = v.meta) || void 0 === x
                      ? void 0
                      : x.parseToInput(g);
                } catch (e) {
                  i.A.error(
                    "Something went wrong, please reload the page. If this persist, please contact support."
                  );
                }
              return (
                (null == v
                  ? void 0
                  : null === (d = v.meta) || void 0 === d
                  ? void 0
                  : d.widget) === "datetime"
                  ? (g = g ? (0, n.p6)(g, "datetimeInput") : "")
                  : (null == v ? void 0 : v.type) === "date" &&
                    (g = g ? (0, n.p6)(g, "dateInput") : ""),
                l().set(h, s, g),
                h
              );
            }, {});
          };
        },
      });
      var n = a(65031),
        r = a(19539),
        l = a.n(r),
        i = a(83297);
    },
    94329: function (e, t, a) {
      a.r(t),
        a.d(t, {
          SSRProvider: function () {
            return i;
          },
          useIsSSR: function () {
            return s;
          },
        });
      var n = a(2067),
        r = a(15039);
      let l = r.createContext(!0);
      function i(e) {
        let { children: t } = e,
          [a, i] = (0, r.useState)(!0);
        return (
          (0, r.useEffect)(() => {
            i(!1);
          }, []),
          (0, n.jsx)(l.Provider, { value: a, children: t })
        );
      }
      function s() {
        return (0, r.useContext)(l);
      }
    },
    69436: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = a(56837),
        r = a(44249),
        l = a(84824),
        i = a.n(l),
        s = a(36221);
      class o extends Error {
        constructor(...e) {
          var t, a;
          super(...e),
            null === (t = (a = Error).captureStackTrace) ||
              void 0 === t ||
              t.call(a, this, o);
        }
      }
      async function d(e) {
        let t,
          a,
          l,
          d,
          c =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          u = "/" === e[0] ? n.T + e : e,
          p = {};
        try {
          if (
            (c.timeout &&
              ((d = new AbortController()),
              setTimeout(() => {
                if (!a) {
                  let e = new o(
                    "Timeout (".concat(c.method || "GET", " ").concat(u, ")")
                  );
                  throw ((e.code = "timeout"), null == d || d.abort(), e);
                }
              }, c.timeout)),
            (a = await i()(u, {
              ...c,
              agent: t,
              signal: d ? d.signal : void 0,
            })),
            c.throwOnHTTPError && (a.status < 200 || a.status >= 300))
          ) {
            let { type: e } = (0, r.Q)(
              a.headers.get("Content-Type") || "text/plain"
            );
            if ("application/json" === e)
              (p = await a.json()).code && p.message && (p.error = p),
                ((l = new o(
                  p.error
                    ? p.error.message || p.error.code
                    : "Unexpected Error (".concat(c.method, " ").concat(u, ")")
                )).res = a),
                (l.status = a.status),
                (l.code = p.error.code),
                (l.message = p.error.message),
                (l.extra = p.extra);
            else {
              let t = "";
              try {
                t = await a.text();
              } catch (e) {
                console.error(e);
              }
              let n = new o(
                "Unexpected response content-type ("
                  .concat(c.method || "GET", " ")
                  .concat(u, "): ")
                  .concat(e, "(")
                  .concat(a.status, ") ")
                  .concat(t)
              );
              throw (
                ((n.res = a),
                (n.status = a.status),
                console.log("throwing", n),
                n)
              );
            }
          } else
            204 === a.status
              ? (p = {})
              : (a.headers.get("Content-Type") || "").startsWith("text/")
              ? (p = await a.text())
              : (p = await a.json()).json && (p = (0, s.vB)(p));
        } catch (e) {
          l = e;
        }
        if (!l) return p;
        if (
          l.status < 500 ||
          ((l.stack = ""
            .concat(l.stack ? l.stack : "", " ### Fetched URL: ")
            .concat(u)),
          c.body &&
            (l.stack = ""
              .concat(l.stack ? l.stack : "", " ### Request Body: ")
              .concat(JSON.stringify(c.body))),
          c.throwOnHTTPError)
        )
          throw l;
      }
      function c(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { throwOnHTTPError: !0, timeout: 1e4 };
        return (
          (t.headers = t.headers || {}),
          (t.headers.Accept = t.headers.Accept || "application/json"),
          (t.headers["Content-Type"] =
            t.headers["Content-Type"] || "application/json"),
          (t.credentials = "include"),
          (function (e) {
            if ("object" == typeof e && null !== e) {
              let t = Object.getPrototypeOf(e);
              return t === Object.prototype || null === t;
            }
            return !1;
          })(t.body) && (t.body = JSON.stringify(t.body)),
          d(e, { throwOnHTTPError: !0, ...t })
        );
      }
    },
    65031: function (e, t, a) {
      a.d(t, {
        Bb: function () {
          return o;
        },
        p6: function () {
          return s;
        },
      });
      var n = a(35629),
        r = a(23053),
        l = a(25254);
      let i = {
          long: "MMMM d, yyyy hh:mm",
          short: "MMMM dd, yyyy",
          filename: "yyyy-MM-dd-hh-mm-ss",
          local: "PPPp",
          localTime: "p",
          localDate: "PPP",
          dateInput: "yyyy-LL-dd",
          datetimeInput: "yyyy-LL-dd'T'HH:mm",
        },
        s = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "long",
            a = e;
          if (!e) return;
          a instanceof Date || (a = (0, n.D)(a));
          let l = (0, r.WU)(a, i[t] || t);
          return "localDate" === t ? l.replace(/, \d{4}$/, "") : l;
        };
      function o(e) {
        let { short: t } =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { short: !1 },
          a = (0, l.D)(e || 0);
        return (
          (a = "0 seconds" === a ? "just now" : "".concat(a, " ago")),
          t &&
            (a = a
              .replace(/minutes?/, "min")
              .replace(/seconds?/, "sec")
              .replace(/ago/, "")),
          a
        );
      }
    },
  },
]);
