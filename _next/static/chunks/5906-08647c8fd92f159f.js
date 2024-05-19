"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5906],
  {
    97216: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(2067),
        l = n(87907),
        s = n(48259),
        i = n(96560);
      function a(e) {
        let { className: t } = e;
        return (0, r.jsx)(s.TooltipProvider, {
          children: (0, r.jsxs)(s.Tooltip, {
            children: [
              (0, r.jsx)(s.TooltipTrigger, {
                asChild: !0,
                children: (0, r.jsx)("span", {
                  className: (0, i.cn)(
                    "relative z-50 inline-flex items-center rounded-full !bg-highlight px-2.5 py-0.5 !font-mono text-xs !font-bold tracking-wider !text-gray-0 !subpixel-antialiased",
                    t
                  ),
                  children: "Non-Metadrop",
                }),
              }),
              (0, r.jsx)(l.h_, {
                children: (0, r.jsx)(l._v, {
                  children: (0, r.jsxs)("div", {
                    className:
                      "max-w-[300px] overflow-hidden whitespace-normal rounded-md border border-gray-30 bg-gray-10/40 px-4 py-3 font-mono text-sm font-semibold text-gray-90 shadow-lg backdrop-blur-2",
                    children: [
                      "This coin is tradeable on Metadrop, but was",
                      " ",
                      (0, r.jsx)("span", {
                        className: "text-highlight",
                        children: "not launched through Metadrop.",
                      }),
                      (0, r.jsx)("br", {}),
                      (0, r.jsx)("br", {}),
                      "Metadrop is",
                      " ",
                      (0, r.jsx)("span", {
                        className: "text-highlight",
                        children: "not affiliated with this project",
                      }),
                      " ",
                      "in any way and any action you take with it is at your own risk.",
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
      }
    },
    48901: function (e, t, n) {
      n.r(t),
        n.d(t, {
          CoinSearchModal: function () {
            return P;
          },
          CoinSearchProvider: function () {
            return I;
          },
          CoinSearchResults: function () {
            return K;
          },
          useCoinSearch: function () {
            return R;
          },
        });
      var r,
        l = n(2067),
        s = n(95775),
        i = n(15955),
        a = n(2384),
        o = n(15039);
      let c =
        ((r = (e) => {
          let { children: t } = e;
          return t;
        }),
        class extends o.Component {
          componentDidMount() {
            this.isActive() &&
              document.addEventListener("keydown", this.handleKeyDown);
          }
          componentDidUpdate() {
            this.isActive()
              ? document.addEventListener("keydown", this.handleKeyDown)
              : document.removeEventListener("keydown", this.handleKeyDown);
          }
          componentWillUnmount() {
            this.isActive() &&
              document.removeEventListener("keydown", this.handleKeyDown);
          }
          render() {
            let { active: e, ...t } = this.props;
            return (0, l.jsx)(r, { ...t });
          }
          constructor(...e) {
            super(...e),
              (this.handleKeyDown = (e) => {
                let { handlers: t } = this.props;
                Object.keys((t && (t.keydown || t)) || {}).forEach((n) => {
                  var r;
                  if (
                    (null == e
                      ? void 0
                      : null === (r = e.key) || void 0 === r
                      ? void 0
                      : r.toLowerCase()) === n.toLowerCase() &&
                    (this.props.enableMeta || !e.metaKey) &&
                    (this.props.enableShift || !e.shiftKey) &&
                    (this.props.enableAlt || !e.altKey) &&
                    (this.props.enablePlainWithModifiers ||
                      (!e.metaKey && !e.shiftKey && !e.altKey))
                  ) {
                    let r = t[n];
                    r &&
                      (this.props.preventDefault && e.preventDefault(),
                      r(e.metaKey, e.shiftKey, e.altKey, e));
                  }
                });
              }),
              (this.isActive = () => {
                let e =
                  document.querySelectorAll("input:focus").length > 0 ||
                  document.querySelectorAll("textarea:focus").length > 0 ||
                  document.querySelectorAll("select:focus").length > 0;
                return (
                  this.props.active && !e && !this.props.disableInputSafety
                );
              });
          }
        });
      var d = n(32065),
        u = n(18315),
        h = n(62263),
        m = n.n(h),
        f = n(28967),
        p = n(65182);
      let x = 0,
        v = (e) => {
          let t = e.target;
          for (; t; ) {
            if ("dialog" === t.getAttribute("role")) return;
            t = t.parentElement;
          }
          e.preventDefault();
        };
      function y(e) {
        let { active: t, children: n, className: r, onClick: s } = e;
        return (
          (0, o.useEffect)(
            () => (
              0 === x &&
                (document.addEventListener("touchmove", v, { passive: !1 }),
                document.addEventListener("wheel", v, { passive: !1 })),
              (x += 1),
              () =>
                void (
                  0 == (x -= 1) &&
                  (document.removeEventListener("touchmove", v),
                  document.removeEventListener("wheel", v))
                )
            ),
            []
          ),
          (0, l.jsx)(p.h, {
            children: (0, l.jsxs)("div", {
              className: (0, u.Z)(
                "duration-mdth-duration fixed inset-0 z-50 flex h-screen w-screen flex-col content-center items-center justify-center overflow-auto opacity-0 transition-all",
                r,
                { "opacity-100": t }
              ),
              style: {
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
              },
              children: [
                (0, l.jsx)("div", {
                  className: (0, u.Z)(
                    "pointer-events-none fixed inset-0 z-0 h-full w-full bg-gray-10 opacity-0 transition-opacity duration-200 ease-in-out",
                    { "pointer-events-auto opacity-80": t }
                  ),
                  onClick: s,
                }),
                n,
              ],
            }),
          })
        );
      }
      let g = "production" !== n(26182).env.NEXT_PUBLIC_VERSION;
      var b = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { enterDelay: 0, exitDelay: 0 },
          [n, r] = (0, o.useState)(e),
          [l, s] = (0, o.useState)(!1),
          i = (0, o.useRef)(),
          a = (0, o.useRef)(null),
          c = (0, o.useRef)(t);
        return (
          (0, o.useEffect)(() => {
            if (g) {
              if (t.enterDelay && t.enterDelay < -1)
                throw Error(
                  "Invalid enterDelay, cannot use negative numbers other than -1"
                );
              if (t.exitDelay && t.exitDelay < 0)
                throw Error("Invalid exitDelay, cannot use negative numbers");
            }
            c.current = t;
          }, [t]),
          (0, o.useEffect)(() => {
            clearTimeout(i.current);
            let { enterDelay: t, exitDelay: n, onUnmount: l } = c.current;
            if (e)
              (a.current = Date.now()),
                r(!0),
                -1 === t
                  ? "requestIdleCallback" in window
                    ? window.requestIdleCallback(
                        () => {
                          s(!0);
                        },
                        { timeout: 100 }
                      )
                    : setTimeout(() => {
                        s(!0);
                      }, 1)
                  : 0 === t
                  ? s(!0)
                  : (i.current = setTimeout(() => {
                      s(!0);
                    }, t));
            else {
              s(!1);
              let e = n;
              if (a.current) {
                let r = Date.now() - a.current;
                t && r < t ? (e = 0) : n && r < n && (e = r);
              }
              0 === e
                ? (r(!1), a.current && (null == l || l()))
                : (i.current = setTimeout(() => {
                    r(!1), a.current && (null == l || l());
                  }, e));
            }
          }, [e]),
          { mounted: n, rendered: l }
        );
      };
      let w = (0, o.createContext)(!1);
      w.displayName = "LoadingContext";
      var j = (e) => {
        let {
            active: t,
            activeRenderDelay: n,
            children: r,
            onAnimationDone: s,
            onClickOutside: o,
            nonDismissable: h,
            hideCloseButton: p,
            loading: x,
            className: v,
            size: g = "md",
            overlayProps: j,
          } = e,
          { mounted: N, rendered: k } = b(t, {
            enterDelay: n || -1,
            exitDelay: n || 250,
            onUnmount: s,
          }),
          C = h ? () => {} : o;
        return N
          ? (0, l.jsx)(w.Provider, {
              value: x,
              children: (0, l.jsx)(c, {
                handlers: { Escape: C },
                active: k,
                children: (0, l.jsx)(d.Z, {
                  onClick: C,
                  render: (e) => {
                    let { innerRef: t } = e;
                    return (0, l.jsx)(y, {
                      active: k,
                      ...j,
                      children: (0, l.jsxs)(f.E.div, {
                        ref: t,
                        className: (0, u.Z)(
                          "flex scale-105 flex-col opacity-0 sm:my-8 sm:w-full  sm:translate-y-0 sm:scale-95 sm:align-middle",
                          "w-full max-w-full",
                          {
                            "md:max-w-2xl": "lg" === g,
                            "md:max-w-md": "md" === g,
                          },
                          v
                        ),
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-labelledby": "modal-headline",
                        animate: { opacity: k ? 1 : 0, scale: k ? 1 : 1.05 },
                        initial: { opacity: 0, scale: 1.05 },
                        transition: { type: "easeInOut", duration: 0.2 },
                        children: [
                          x &&
                            (0, l.jsx)("div", {
                              className: (0, u.Z)(
                                "pointer-events-none absolute -left-1/2 -top-1/2 -z-10 block h-[200%] w-[200%] -rotate-45 overflow-hidden"
                              ),
                            }),
                          (0, l.jsx)(m(), {
                            className: (0, u.Z)(
                              "relative outline-none focus:ring-0",
                              x && "overflow-hidden"
                            ),
                            children: (0, l.jsxs)("div", {
                              className: "relative sm:block",
                              children: [
                                !h &&
                                  !p &&
                                  (0, l.jsx)(a.default, {
                                    onClick: C,
                                    tabIndex: 0,
                                    className:
                                      "absolute -right-3 -top-3 z-10 h-8 w-8 ",
                                    "aria-label": "Close",
                                    leftIcon: (0, l.jsx)(i.CloseIcon, {
                                      className: "h-4 w-4",
                                    }),
                                  }),
                                (0, l.jsx)("div", {
                                  className: "flex flex-col items-center",
                                  children: r,
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    });
                  },
                }),
              }),
            })
          : null;
      };
      n(42747);
      var N = n(69436),
        k = n(11664),
        C = n(96560),
        E = n(51563),
        S = n(97216),
        L = n(637),
        D = n(71335),
        M = n.n(D);
      let Z = (0, o.createContext)({
        searchValue: "",
        setSearchValue: () => {},
        results: [],
        reset: () => {},
      });
      function I(e) {
        let { children: t } = e,
          [n, r] = (0, o.useState)(""),
          [s, i] = (0, o.useState)(null),
          a = (function (e, t) {
            let [n, r] = (0, o.useState)(e);
            return (
              (0, o.useEffect)(() => {
                let n = setTimeout(() => r(e), t || 500);
                return () => {
                  clearTimeout(n);
                };
              }, [e, t]),
              n
            );
          })(n, 500),
          { data: c } = (0, k.ZP)(
            a.length > 0 ? "/public/coins/search?q=".concat(a) : null,
            N.Z
          );
        (0, o.useEffect)(() => {
          (null == c ? void 0 : c.coins) && i(c.coins);
        }, [null == c ? void 0 : c.coins]),
          (0, o.useEffect)(() => {
            0 === n.length && i(null);
          }, [n]);
        let d = (0, o.useCallback)(function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "results";
          setTimeout(() => {
            "results" === e && i(null), "all" === e && (i(null), r(""));
          }, 1);
        }, []);
        return (0, l.jsx)(Z.Provider, {
          value: { searchValue: n, setSearchValue: r, results: s, reset: d },
          children: t,
        });
      }
      let R = () => {
          let e = (0, o.useContext)(Z);
          if (void 0 === e)
            throw Error(
              "useCoinSearch must be used within a CoinSearchProvider"
            );
          return e;
        },
        T = (e) => {
          let { onLinkClick: t } = e,
            { data: n } = (0, k.ZP)("/public/homepage/coins", (e) =>
              (0, N.Z)(e)
            ),
            r = (0, o.useMemo)(() => (n ? n.coins : []), [n]);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)("h5", {
                className: "p-2 pt-3.5 font-mono text-sm text-highlight",
                children: "Top Coins",
              }),
              r.length > 0
                ? r.map((e) =>
                    (0, l.jsxs)(
                      M(),
                      {
                        type: "button",
                        className: (0, C.cn)(
                          "flex cursor-pointer items-center justify-start gap-2 rounded-xs px-2 py-1 hover:bg-gray-50/10",
                          "first:mt-2 last:mb-2"
                        ),
                        href: e.url || "#",
                        onClick: (n) => {
                          null == t || t(n, e);
                        },
                        children: [
                          (0, l.jsx)(E.i, {
                            coin: {
                              ...e,
                              coinImageURL: e.logo,
                              erc20Address: e.address,
                            },
                            className: "h-8 w-8",
                          }),
                          (0, l.jsxs)("div", {
                            className:
                              "flex flex-col items-start overflow-hidden text-ellipsis",
                            children: [
                              (0, l.jsxs)("span", {
                                className:
                                  "w-full overflow-hidden text-ellipsis whitespace-nowrap font-mono text-xs text-gray-70",
                                children: [
                                  "$",
                                  e.symbol,
                                  "EXTERNAL" === e.coinType &&
                                    (0, l.jsx)(S.Z, { className: "scale-90" }),
                                ],
                              }),
                              (0, l.jsx)("span", {
                                className:
                                  "w-full overflow-hidden text-ellipsis whitespace-nowrap text-[16px] text-gray-95",
                                children: e.name,
                              }),
                            ],
                          }),
                        ],
                      },
                      "search-".concat(e.address)
                    )
                  )
                : null,
            ],
          });
        },
        K = (e) => {
          let {
              onLinkClick: t,
              className: n,
              as: r = "div",
              resultsVisible: s,
              raw: i,
              ...a
            } = e,
            { searchValue: o, results: c } = R();
          return (0, l.jsx)(L.M, {
            children:
              o.length > 0 && s
                ? (0, l.jsx)(r, {
                    className: (0, C.cn)(
                      "h-full origin-center flex-col overflow-auto lg:flex",
                      !i &&
                        "max-h-[260px] rounded-md border border-gray-40/40  bg-gray-10/80 px-2 shadow-2xl backdrop-blur-2",
                      n
                    ),
                    ...a,
                    children:
                      (null == c ? void 0 : c.length) > 0
                        ? c.map((e) =>
                            (0, l.jsxs)(
                              M(),
                              {
                                type: "button",
                                className: (0, C.cn)(
                                  "flex cursor-pointer items-center justify-start gap-2 rounded-xs px-2 py-1 hover:bg-gray-50/10",
                                  "first:mt-2 last:mb-2"
                                ),
                                href: "/coins/".concat(e.slug),
                                onClick: (n) => {
                                  null == t || t(n, e);
                                },
                                children: [
                                  (0, l.jsx)(E.i, {
                                    coin: e,
                                    className: "h-8 w-8",
                                  }),
                                  (0, l.jsxs)("div", {
                                    className:
                                      "flex flex-col items-start overflow-hidden text-ellipsis",
                                    children: [
                                      (0, l.jsxs)("span", {
                                        className:
                                          "w-full overflow-hidden text-ellipsis whitespace-nowrap font-mono text-xs text-gray-70 ",
                                        children: [
                                          e.symbol,
                                          "EXTERNAL" === e.coinType &&
                                            (0, l.jsx)(S.Z, {
                                              className: "scale-90",
                                            }),
                                        ],
                                      }),
                                      (0, l.jsx)("span", {
                                        className:
                                          " w-full overflow-hidden text-ellipsis whitespace-nowrap text-base text-gray-95 ",
                                        children: e.name,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              "search-".concat(e.id)
                            )
                          )
                        : (0, l.jsx)("div", {
                            className:
                              "flex h-64 w-full items-center justify-center font-mono text-sm text-gray-40",
                            children: "No coins found",
                          }),
                  })
                : s
                ? (0, l.jsx)(r, {
                    className: (0, C.cn)(
                      "h-full origin-center flex-col overflow-auto backdrop-blur-2 lg:flex",
                      !i &&
                        "max-h-[320px] rounded-md border border-gray-40/40 bg-gray-10/80  px-2 shadow-2xl backdrop-blur-2",
                      n
                    ),
                    ...a,
                    children: (0, l.jsx)(T, { onLinkClick: t }),
                  })
                : null,
          });
        },
        P = (e) => {
          let { active: t, setActive: n } = e,
            { results: r, searchValue: a, setSearchValue: c } = R(),
            d = (0, o.useCallback)(() => {
              n(!1), c("");
            }, [n, c]);
          return (0, l.jsx)(j, {
            className: "max-w-[90vw] lg:max-w-md",
            active: t,
            onClickOutside: d,
            hideCloseButton: !0,
            overlayProps: {
              className: "!justify-start pt-10 md:pt-0 md:!justify-center",
            },
            children: (0, l.jsxs)("div", {
              className:
                "flex h-[385px] w-full max-w-[90vw] flex-col overflow-hidden rounded-md border border-gray-20 bg-gray-10 p-4 pb-0 text-gray-95 outline-0 ring-0 md:h-[480px] lg:max-w-md",
              tabIndex: 0,
              children: [
                (0, l.jsxs)("div", {
                  className: "mb-3 flex items-center justify-between px-2",
                  children: [
                    (0, l.jsx)("h4", {
                      className: "text-base",
                      children: "Search Tokens",
                    }),
                    (0, l.jsx)("button", {
                      type: "button",
                      onClick: d,
                      children: (0, l.jsx)(i.CloseIcon, {}),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className:
                    "relative mb-2 flex h-8 min-h-[36px] w-full items-center justify-center rounded-full border border-gray-20 text-sm",
                  children: [
                    (0, l.jsx)("input", {
                      className:
                        "h-full w-full rounded-full border-0 bg-transparent pl-8 text-base placeholder-gray-50 !outline-none outline-0 transition-all ease-in-out-quad focus:ring-gray-30",
                      placeholder: "Search",
                      value: a,
                      onChange: (e) => {
                        c(e.target.value);
                      },
                      id: "coin-search-modal-input",
                    }),
                    (0, l.jsx)("span", {
                      className: "absolute left-2 top-2",
                      children: (0, l.jsx)(i.SearchIcon, {
                        className: "h-4 w-4 text-gray-50",
                      }),
                    }),
                  ],
                }),
                r
                  ? (0, l.jsx)(K, {
                      coins: r,
                      resultsVisible: !0,
                      className: "max-h-[100%] grow pb-2",
                      onLinkClick: () => {
                        n(!1), c("");
                      },
                      raw: !0,
                    })
                  : (0, l.jsx)("div", {
                      className:
                        "flex h-64 w-full items-center justify-center font-mono text-sm text-gray-40",
                      children:
                        a.length > 0
                          ? (0, l.jsxs)("span", {
                              children: ["Searching", (0, l.jsx)(s.Z, {})],
                            })
                          : (0, l.jsx)("div", {
                              className:
                                "h-full w-full origin-center flex-col overflow-auto lg:flex",
                              children: (0, l.jsx)(T, {}),
                            }),
                    }),
              ],
            }),
          });
        };
    },
    32065: function (e, t, n) {
      var r = n(15039);
      function l(e, t) {
        return (null == t ? void 0 : t.contains(e)) && !!e.closest("body");
      }
      class s extends r.Component {
        componentDidMount() {
          let { active: e } = this.props;
          e && this.addListeners();
        }
        componentDidUpdate(e) {
          !e.active && this.props.active && this.addListeners(),
            e.active && !this.props.active && this.removeListeners();
        }
        componentWillUnmount() {
          this.props.active && this.removeListeners();
        }
        addListeners() {
          document.addEventListener("mousedown", this.handleClick),
            document.addEventListener("touchstart", this.handleClick),
            document.addEventListener("keyup", this.handleKeyboard);
        }
        removeListeners() {
          document.removeEventListener("mousedown", this.handleClick),
            document.removeEventListener("touchstart", this.handleClick),
            document.removeEventListener("keyup", this.handleKeyboard);
        }
        render() {
          return this.props.render({ innerRef: this.handleRef });
        }
        constructor(...e) {
          super(...e),
            (this.handleRef = (e) => {
              this.element = e;
            }),
            (this.handleClick = (e) => {
              let { onClick: t, exclude: n } = this.props;
              if (!l(e.target, this.element)) {
                if (n && l(e.target, document.querySelector(n))) return;
                "function" == typeof t && t(e);
              }
            }),
            (this.handleKeyboard = (e) => {
              "Escape" === e.key && this.handleClick(e);
            });
        }
      }
      t.Z = s;
    },
    42747: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var r = n(2067),
        l = n(96560),
        s = n(15039),
        i = n(37397),
        a = n(637),
        o = n(28967);
      let c = {
          initial: { maxHeight: 0 },
          show: { maxHeight: 20 },
          hide: { maxHeight: 0, transition: { delay: 0.1, duration: 0.1 } },
        },
        d = (e) => ({
          initial: { paddingBottom: 0, height: 0 },
          show: {
            height: e,
            transition: { delay: 0.05, duration: 0.1 },
            transitionEnd: { height: "auto" },
          },
          hide: { height: 0, transition: { delay: 0.05, duration: 0.1 } },
        }),
        u = {
          initial: { opacity: 0, scale: 0.95 },
          show: {
            opacity: 1,
            scale: 1,
            transition: { delay: 0.15, duration: 0.05 },
          },
          hide: { opacity: 0, scale: 0.95 },
        };
      var h = (e) => {
        let {
            className: t = "",
            children: n,
            dir: h = "col",
            bg: m = "bg-gray-95",
            style: f,
          } = e,
          p = (0, s.useRef)([]),
          [x, v] = (0, s.useState)([]),
          y = (0, s.useCallback)(() => {
            let e = p.current.map((e) => (null == e ? void 0 : e.clientHeight));
            v((t) => (t.length !== p.current.length ? e : t));
          }, [n, v]);
        return (
          (0, s.useLayoutEffect)(() => {
            y();
          }, [y]),
          (0, r.jsx)("div", {
            className: (0, l.cn)(t, "dripping-boxes"),
            style: f,
            children: (0, r.jsx)("div", {
              className: (0, l.cn)("row" === h && "flex"),
              children: (0, r.jsx)(a.M, {
                initial: !1,
                children: s.Children.map(n, (e, t) => {
                  if (!e) return null;
                  let n = (0, l.cn)(e.props.className)
                    .split(" ")
                    .filter((e) => e.match(/bg|rounded|drips/))
                    .sort((e) => e.indexOf("drips"))
                    .map((e) => e.replace("drips-bg-", "bg-"))
                    .map((e) => e.replace("drips-rounded-", "rounded-"));
                  return (0, r.jsxs)(r.Fragment, {
                    children: [
                      0 !== t &&
                        (0, r.jsx)(o.E.div, {
                          className:
                            "joint flex justify-center overflow-hidden",
                          variants: c,
                          initial: "hide",
                          animate: "show",
                          exit: "hide",
                          children: (0, r.jsx)(i.ZP, { bg: m, dir: h }),
                        }),
                      (0, r.jsx)(o.E.div, {
                        className: (0, l.cn)(
                          " overflow-hidden rounded-[var(--drip-rounded)]",
                          m,
                          n,
                          e.props.wrapperClassName
                        ),
                        variants: d(x[t]),
                        initial: "hide",
                        animate: "show",
                        exit: "hide",
                        children: (0, r.jsx)(o.E.div, {
                          ref: (e) => (p.current[t] = e),
                          variants: u,
                          initial: "hide",
                          animate: "show",
                          exit: "hide",
                          children: s.cloneElement(e, {
                            className: (0, l.cn)(
                              "p-4 rounded-[var(--drip-rounded)] mx-auto",
                              m,
                              e.props.className
                            ),
                          }),
                        }),
                      }),
                    ],
                  });
                }),
              }),
            }),
          })
        );
      };
    },
    95775: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(2067),
        l = n(15039);
      function s() {
        let [e, t] = (0, l.useState)(1);
        return (
          (0, l.useEffect)(() => {
            let e = setInterval(() => {
              t((e) => ++e % 4);
            }, 500);
            return () => clearInterval(e);
          }, []),
          (0, r.jsxs)("span", {
            children: [
              (0, r.jsx)("span", {
                className: e <= 0 ? "invisible" : "",
                children: ".",
              }),
              (0, r.jsx)("span", {
                className: e <= 1 ? "invisible" : "",
                children: ".",
              }),
              (0, r.jsx)("span", {
                className: e <= 2 ? "invisible" : "",
                children: ".",
              }),
            ],
          })
        );
      }
    },
    65182: function (e, t, n) {
      n.d(t, {
        h: function () {
          return c;
        },
      });
      var r = n(2067),
        l = n(59757),
        s = n(15039),
        i = n(68946),
        a = n(35371);
      let o = (e) => {
          let { children: t, type: n = "reach-portal", containerRef: o } = e,
            c = s.useRef(null),
            d = s.useRef(null),
            u = (function () {
              let [, e] = (0, s.useState)(Object.create(null));
              return (0, s.useCallback)(() => {
                e(Object.create(null));
              }, []);
            })();
          return (
            l.Y ||
              s.useEffect(() => {
                null != o &&
                  ("object" == typeof o && "current" in o
                    ? null == o.current &&
                      console.warn(
                        "@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."
                      )
                    : console.warn(
                        "@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`."
                      ));
              }, [o]),
            (0, a.Z)(() => {
              if (!c.current) return;
              let e = c.current.ownerDocument,
                t = (null == o ? void 0 : o.current) || e.body;
              return (
                (d.current = null == e ? void 0 : e.createElement(n)),
                t.appendChild(d.current),
                u(),
                () => {
                  d.current && t && t.removeChild(d.current);
                }
              );
            }, [n, u, o]),
            d.current
              ? (0, i.createPortal)(t, d.current)
              : (0, r.jsx)("span", { ref: c })
          );
        },
        c = (e) => {
          let { unstable_skipInitialRender: t, ...n } = e,
            [l, i] = s.useState(!1);
          return (s.useEffect(() => {
            t && i(!0);
          }, [t]),
          t && !l)
            ? null
            : (0, r.jsx)(o, { ...n });
        };
      c.displayName = "Portal";
    },
    68020: function (e, t, n) {
      var r = n(2067),
        l = n(96560);
      let s = (e) => {
        let { className: t = "" } = e;
        return (0, r.jsxs)("svg", {
          "data-testid": "spinner",
          className: (0, l.cn)(
            "inline w-[24px] h-[24px] animate-spin text-gray-20",
            t
          ),
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, r.jsx)("path", {
              d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
              stroke: "currentColor",
              strokeOpacity: "0.25",
              strokeWidth: "4",
            }),
            (0, r.jsx)("path", {
              d: "M12 2C6.47715 2 2 6.47715 2 12C2 14.5361 2.94409 16.8517 4.5 18.6146",
              stroke: "currentColor",
              strokeOpacity: "1",
              strokeWidth: "4",
            }),
          ],
        });
      };
      t.Z = (e) => {
        let { fullScreen: t = !1, className: n = "" } = e;
        return t
          ? (0, r.jsx)("div", {
              className: "absolute inset-x-0 inset-y-0 bg-mdth-body",
              children: (0, r.jsx)("div", {
                className: "flex h-full w-full items-center justify-center",
                children: (0, r.jsx)(s, { className: n }),
              }),
            })
          : (0, r.jsx)(s, { className: n });
      };
    },
    77297: function (e, t, n) {
      n.d(t, {
        Bu: function () {
          return o;
        },
        FO: function () {
          return l;
        },
        uf: function () {
          return a;
        },
      });
      var r = n(30045);
      function l(e) {
        let t = "",
          n = 1;
        if (Math.abs(e) >= 1e9) (t = "B"), (n = 1e9);
        else if (Math.abs(e) >= 1e6) (t = "M"), (n = 1e6);
        else if (Math.abs(e) >= 1e3) (t = "K"), (n = 1e3);
        else if (1e3 > Math.abs(e)) return e.toLocaleString();
        return (e / n).toFixed(2).replace(/\.0+$/, "") + t;
      }
      let s = (e) =>
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
        i = (e) => [...String(e)].map(s).join(""),
        a = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            {
              isWei: n,
              coinDecimals: s = n ? 18 : void 0,
              decimals: o = 4,
              abbreviate: c = !1,
              rmDecimalsThreshold: d = 1e3,
              subscriptZeros: u = !1,
            } = t;
          if (null == e) return "";
          let h = s ? Number((0, r.b)(e, s)) : Number(e);
          d && h > d && (h = Math.round(h));
          let m = Math.round(h * 10 ** o) / 10 ** o,
            [f, p] = m.toString().split(".");
          if (u && 0 !== e) {
            let [e, t] = h.toFixed(40).split(".");
            if ("0" === e) {
              var x;
              let e =
                null === (x = t.match(/^0+/)) || void 0 === x
                  ? void 0
                  : x[0].length;
              if (e >= 5) {
                let n = Number(t.slice(e)).toPrecision(o),
                  r = "";
                for (let e = 0; e < n.length; e++) {
                  let t = n[e];
                  if ("." !== t && (r += t).length === o) break;
                }
                return "0.0".concat(i(e)).concat(r);
              }
            }
          }
          if (
            (0 === m &&
              m !== h &&
              (p = h
                .toLocaleString("en-US", { maximumFractionDigits: 15 })
                .split(".")[1]),
            m > 1 && p && !u)
          )
            p = a(m - Number(f), {
              ...t,
              isWei: !1,
              coinDecimals: void 0,
            }).split(".")[1];
          else {
            let e = null == p ? void 0 : p.split("");
            if (e && e.length > o) {
              let t = e.findIndex((e) => "0" !== e),
                n = Array(t).fill("0").join("");
              p =
                -1 === t
                  ? e.slice(0, o).join("")
                  : [n, ...e.slice(t).slice(0, Math.max(1, o - t + 1))].join(
                      ""
                    );
            }
          }
          let v =
            c && ("number" != typeof c || Number(f) > c)
              ? l(Number(f))
              : Number(f).toLocaleString();
          return (
            /[a-zA-Z]/.test(v) && (p = void 0),
            [v, p].filter((e) => null != e).join(".")
          );
        },
        o = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          return String(e).padStart(t, "0");
        };
    },
    59757: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return r.Y;
        },
      });
      var r = n(56837);
    },
  },
]);
