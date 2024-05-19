(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3041],
  {
    24851: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 46590)),
        Promise.resolve().then(l.bind(l, 42916)),
        Promise.resolve().then(l.bind(l, 42237)),
        Promise.resolve().then(l.bind(l, 2384));
    },
    71609: function (e, t, l) {
      "use strict";
      l.d(t, {
        S: function () {
          return r;
        },
      });
      var s = l(2067),
        n = l(28967),
        a = l(15039);
      let r = (e) => {
        let { href: t, children: l, borderless: r, trailingArrow: i = !0 } = e,
          [o, c] = (0, a.useState)(!1);
        return (0, s.jsxs)("a", {
          href: t,
          target: "_blank",
          className:
            "relative flex w-full border-spacing-2 items-center gap-2 px-2 py-3 font-mono text-gray-10",
          rel: "noreferrer",
          onMouseEnter: () => c(!0),
          onMouseLeave: () => c(!1),
          children: [
            !i &&
              (0, s.jsx)(n.E.svg, {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 21 21",
                animate: { rotate: o ? 45 : 0 },
                className: "size-icon-lg flex-none",
                children: (0, s.jsx)("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2.5",
                  d: "M1.75 19.25L17.875 3.125M19 15.5v-12A1.5 1.5 0 0017.5 2h-12",
                }),
              }),
            (0, s.jsxs)("div", {
              className: "flex w-full items-center justify-between",
              children: [
                (0, s.jsx)(n.E.span, {
                  animate: { x: o ? 15 : 0 },
                  children: l,
                }),
                i &&
                  (0, s.jsx)(n.E.svg, {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 21 21",
                    animate: { rotate: o ? 45 : 0 },
                    className: "size-icon-lg flex-none",
                    children: (0, s.jsx)("path", {
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2.5",
                      d: "M1.75 19.25L17.875 3.125M19 15.5v-12A1.5 1.5 0 0017.5 2h-12",
                    }),
                  }),
              ],
            }),
            !r &&
              (0, s.jsx)("div", {
                className: "absolute bottom-0 left-0 w-full",
                children: (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "100%",
                  height: "2",
                  fill: "none",
                  viewBox: "0 0 360 2",
                  children: (0, s.jsx)("path", {
                    stroke: "var(--gray-85)",
                    strokeDasharray: "4 6",
                    strokeLinecap: "square",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M0 1h360",
                  }),
                }),
              }),
          ],
        });
      };
    },
    46590: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          MarketingNav: function () {
            return B;
          },
        });
      var s = l(2067),
        n = l(77977),
        a = l(2384),
        r = l(32065),
        i = l(37397),
        o = l(15955),
        c = l(96560),
        d = l(20454),
        x = l(15039);
      let u = x.forwardRef((e, t) => {
        let { className: l, children: n, ...a } = e;
        return (0, s.jsx)(d.fC, {
          ref: t,
          className: (0, c.cn)(
            "relative z-10 flex max-w-max flex-1 items-center justify-center",
            l
          ),
          ...a,
          children: n,
        });
      });
      u.displayName = d.fC.displayName;
      let m = x.forwardRef((e, t) => {
        let { className: l, ...n } = e;
        return (0, s.jsx)(d.aV, {
          ref: t,
          className: (0, c.cn)(
            "group flex flex-1 list-none items-center justify-center space-x-1",
            l
          ),
          ...n,
        });
      });
      m.displayName = d.aV.displayName;
      let h = d.ck,
        f = x.forwardRef((e, t) => {
          let { className: l, children: n, ...a } = e;
          return (0, s.jsxs)(d.xz, {
            ref: t,
            className: (0, c.cn)(
              "group inline-flex w-max items-center justify-center px-4 py-2 text-sm",
              "group",
              l
            ),
            ...a,
            children: [
              n,
              " ",
              (0, s.jsx)(o.ChevronBottomIcon, {
                className:
                  "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
                "aria-hidden": "true",
              }),
            ],
          });
        });
      f.displayName = d.xz.displayName;
      let p = x.forwardRef((e, t) => {
        let { className: l, ...n } = e;
        return (0, s.jsx)(d.VY, {
          ref: t,
          className: (0, c.cn)("left-0 top-0 w-full md:absolute md:w-auto ", l),
          ...n,
        });
      });
      (p.displayName = d.VY.displayName), d.rU;
      let g = x.forwardRef((e, t) => {
        let { className: l, ...n } = e;
        return (0, s.jsx)("div", {
          className: (0, c.cn)("absolute left-0 top-full flex justify-center"),
          children: (0, s.jsx)(d.l_, {
            className: (0, c.cn)(
              "origin-top-center bg-popover text-popover-foreground relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
              l
            ),
            ref: t,
            ...n,
          }),
        });
      });
      (g.displayName = d.l_.displayName),
        (x.forwardRef((e, t) => {
          let { className: l, ...n } = e;
          return (0, s.jsx)(d.z$, {
            ref: t,
            className: (0, c.cn)(
              "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
              l
            ),
            ...n,
            children: (0, s.jsx)("div", {
              className:
                "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md",
            }),
          });
        }).displayName = d.z$.displayName);
      var v = l(65182),
        j = l(81314),
        y = l(77297),
        w = l(11850),
        b = l(48901),
        N = l(81188),
        z = l(69436),
        k = l(11664),
        C = l(637),
        L = l(28967),
        E = l(46489),
        M = l(58222),
        S = l(71335),
        P = l.n(S),
        R = l(60171),
        Z = l(91818),
        I = l(71609),
        T = l(26182);
      function _() {
        var e;
        let { data: t } = (function () {
          let e = (0, N.n)("leaderboard");
          return (0, k.ZP)(e ? "/public/leaderboard" : null, (e) =>
            (0, z.Z)(e)
          );
        })();
        return (
          (null == t ? void 0 : t.me) &&
          (0, s.jsxs)("div", {
            className: "flex justify-end gap-2 pr-2 text-right text-sm",
            children: [
              (0, s.jsx)("span", { children: "Reward Balance: " }),
              (0, s.jsxs)("span", {
                className: "flex items-center font-semibold",
                children: [
                  (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "70",
                    height: "124",
                    viewBox: "0 0 70 124",
                    className: "h-4 w-4",
                    children: (0, s.jsx)("g", {
                      fill: "none",
                      fillRule: "evenodd",
                      stroke: "none",
                      strokeWidth: "1",
                      children: (0, s.jsx)("g", {
                        transform: "translate(-78 -52)",
                        children: (0, s.jsxs)("g", {
                          transform: "translate(78.92 59)",
                          children: [
                            (0, s.jsx)("path", {
                              fill: "currentColor",
                              fillRule: "nonzero",
                              d: "M0 86.356C0 93.493 3.691 97 11.074 97H30.64c24.548 0 37.529-14.52 37.529-41.959 0-27.501-12.981-42.02-37.53-42.02H11.075C3.691 13.02 0 16.527 0 23.664v62.692zm16.611-2.953V26.556h11.936c15.38 0 22.64 9.105 22.64 28.485 0 19.257-7.198 28.362-22.64 28.362H16.61z",
                            }),
                            (0, s.jsx)("path", {
                              stroke: "currentColor",
                              strokeLinecap: "round",
                              strokeWidth: "14",
                              d: "M26.079 0L26.079 19",
                            }),
                            (0, s.jsx)("path", {
                              stroke: "currentColor",
                              strokeLinecap: "round",
                              strokeWidth: "14",
                              d: "M26.079 91L26.079 110",
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  (0, y.uf)(
                    null == t
                      ? void 0
                      : null === (e = t.me) || void 0 === e
                      ? void 0
                      : e.points
                  ),
                ],
              }),
            ],
          })
        );
      }
      let q = [
        {
          heading: { text: "Coins", Icon: o.CryptoCoinIcon },
          links: [
            { text: "Activity", href: "/activity", Icon: o.TrendingIcon },
          ],
          cta: { text: "Launch a Coin", href: "/app/coins" },
        },
      ];
      function A(e) {
        let { className: t } = e;
        return (0, s.jsx)("div", {
          className: (0, c.cn)("z-50 font-mono text-sm", t),
          children: (0, s.jsx)(C.M, {
            children: (0, s.jsxs)(u, {
              delayDuration: 0,
              children: [
                (0, s.jsx)(m, {
                  children: (0, s.jsxs)(h, {
                    children: [
                      (0, s.jsx)(f, {
                        className: (0, c.cn)(
                          "h-8 rounded-sm bg-gray-20 px-4 py-3 font-mono",
                          "hover:bg-gray-30 active:scale-95"
                        ),
                        children: "Products",
                      }),
                      (0, s.jsx)(p, {
                        children: (0, s.jsx)(L.E.div, {
                          className:
                            "rounded-md border border-gray-40/40 bg-gray-10/80 p-3 shadow-2xl backdrop-blur-2",
                          initial: {
                            opacity: 0,
                            scale: 0.97,
                            y: -15,
                            rotateX: -20,
                            transformPerspective: 1e3,
                            translateZ: -100,
                          },
                          animate: {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            rotateX: 0,
                            transformPerspective: 1e3,
                            translateZ: 0,
                          },
                          exit: {
                            opacity: 0,
                            scale: 0.97,
                            y: -20,
                            rotateX: -10,
                            transformPerspective: 1e3,
                            translateZ: -100,
                          },
                          children: q.map((e, t) => {
                            let { heading: l, links: n, cta: r } = e;
                            return (0, s.jsxs)(
                              x.Fragment,
                              {
                                children: [
                                  (0, s.jsxs)(
                                    "div",
                                    {
                                      children: [
                                        (0, s.jsxs)("div", {
                                          className:
                                            "flex items-center gap-1 text-highlight",
                                          children: [
                                            (0, s.jsx)(l.Icon, {
                                              className: (0, c.cn)(
                                                "size-icon-sm translate-y-[-1px] "
                                              ),
                                            }),
                                            (0, s.jsx)("div", {
                                              className:
                                                "font-wide font-bold uppercase",
                                              children: l.text,
                                            }),
                                          ],
                                        }),
                                        (0, s.jsxs)("div", {
                                          className: "mt-1 flex flex-col gap-2",
                                          children: [
                                            n.map((e) =>
                                              (0, s.jsxs)(
                                                P(),
                                                {
                                                  href: e.href,
                                                  className:
                                                    "-mx-2 flex items-center justify-start gap-2 rounded-2xs px-2 py-1 hover:bg-gray-50/10 active:scale-95",
                                                  children: [
                                                    (0, s.jsx)(e.Icon, {
                                                      className: (0, c.cn)(
                                                        "size-icon-md translate-y-[1px] text-highlight"
                                                      ),
                                                    }),
                                                    e.text,
                                                  ],
                                                },
                                                e.text
                                              )
                                            ),
                                            (0, s.jsx)(a.default, {
                                              href: r.href,
                                              as: r.href,
                                              className: (0, c.cn)(
                                                "mt-2 w-full py-2"
                                              ),
                                              children: r.text,
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    l.text
                                  ),
                                  t < q.length - 1 &&
                                    (0, s.jsx)("div", {
                                      className:
                                        "-mx-3 my-3 border-t-1 border-t-gray-40/40",
                                    }),
                                ],
                              },
                              t
                            );
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)(g, { className: "mt-0.5 border-none" }),
              ],
            }),
          }),
        });
      }
      function B(e) {
        let {
            pageTitle: t,
            pageSubtitle: l,
            pageThumbnail: d,
            pageLinks: u,
            disableScrollTransition: m,
            alwaysShowBorder: h,
            searchEnabled: f,
          } = e,
          p = (0, R.usePathname)(),
          [g, y] = (0, x.useState)(!1),
          N = (0, Z.m)(),
          [z, k] = (0, x.useState)(!1),
          [S, B] = (0, x.useState)(!1),
          [H, V] = (0, x.useState)(!1),
          { searchValue: W, setSearchValue: D } = (0, b.useCoinSearch)(),
          F = (0, j.dD)(),
          O = x.useRef(null),
          [X, U] = (0, x.useState)(),
          { scrollY: Y } = (0, E.v)();
        return ((0, M.W)(Y, "change", (e) => {
          m || k(e > 60);
        }),
        (0, x.useEffect)(() => {
          g
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "auto");
        }, [g]),
        (0, x.useEffect)(() => {
          let e = () => {
            if (O.current) {
              var e;
              U(
                null === (e = O.current) || void 0 === e
                  ? void 0
                  : e.getBoundingClientRect()
              );
            }
          };
          return (
            e(),
            window.addEventListener("resize", e),
            () => {
              window.removeEventListener("resize", e);
            }
          );
        }, []),
        p.startsWith("/app"))
          ? null
          : (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)("nav", {
                  className: (0, c.cn)(
                    "relative flex items-center justify-between gap-2 overflow-hidden px-2 py-3 md:overflow-visible lg:gap-4",
                    {
                      "sticky left-0 top-0 z-50 border-b border-transparent !py-3 backdrop-blur-[20px] transition-all ":
                        !!t,
                      "border-gray-20 bg-gray-10/80": (t && z) || h,
                    }
                  ),
                  children: [
                    (0, s.jsxs)("div", {
                      className: (0, c.cn)(
                        "relative flex h-8 items-center",
                        t ? "max-w-[220px]" : "max-w-[390px]"
                      ),
                      children: [
                        (0, s.jsx)(P(), {
                          href: "/",
                          className: (0, c.cn)(
                            !!t &&
                              "absolute left-0 top-1 translate-y-0 opacity-100 transition-all duration-200 ease-in-out-quad",
                            {
                              "pointer-events-none -translate-y-4 opacity-0":
                                !!t && z,
                            }
                          ),
                          children: (0, s.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [
                              (0, s.jsx)("div", {
                                className: "hidden lg:block",
                                children: (0, s.jsx)(o.LogoWithTextIcon, {}),
                              }),
                              (0, s.jsx)("div", {
                                className: "block lg:hidden",
                                children: (0, s.jsx)(o.LogoIcon, {}),
                              }),
                            ],
                          }),
                        }),
                        !!t &&
                          (0, s.jsxs)("div", {
                            className: (0, c.cn)(
                              "pointer-events-none absolute left-0 top-1 flex w-full grow translate-y-4 gap-2 opacity-0 transition-all duration-200 ease-in-out-quad",
                              "items-center",
                              {
                                "pointer-events-auto -translate-y-2 opacity-100":
                                  !!t && z,
                              }
                            ),
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "!rounded-xs border-1 border-gray-30 bg-gray-100/10 p-[4px]",
                                children:
                                  "string" == typeof d
                                    ? (0, s.jsx)("img", {
                                        className:
                                          "inline-block aspect-square h-8 w-8 min-w-8 !rounded-full ",
                                        alt: "string" == typeof t ? t : "",
                                        src: d,
                                      })
                                    : d &&
                                      (() => {
                                        let e = x.cloneElement(d);
                                        return x.cloneElement(d, {
                                          className: (0, c.cn)(
                                            e.props.className,
                                            "h-8 w-8 min-w-8 aspect-square !rounded-full"
                                          ),
                                        });
                                      })(),
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "-mt-0.5 flex  flex-col leading-[1.16em]",
                                children: [
                                  (0, s.jsx)("span", {
                                    className: (0, c.cn)(
                                      "w-full max-w-[40vw] overflow-hidden text-ellipsis whitespace-nowrap font-mono text-highlight",
                                      "text-sm"
                                    ),
                                    children: t,
                                  }),
                                  (0, s.jsx)("span", {
                                    className:
                                      "whitespace-nowrap font-bold text-gray-95",
                                    children: l || "on Metadrop",
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                    f &&
                      (0, s.jsx)("div", {
                        className:
                          "hidden grow items-center justify-center md:flex",
                        children: (0, s.jsxs)("div", {
                          className:
                            "relative flex h-8 w-full max-w-[260px] items-center justify-center rounded-full border border-gray-100/10 text-sm",
                          children: [
                            (0, s.jsx)("input", {
                              className:
                                "h-full w-full rounded-full border-0 bg-transparent pl-8 placeholder-gray-50 !outline-none outline-0 transition-all ease-in-out-quad focus:ring-gray-30",
                              placeholder: "Search",
                              value: W,
                              onChange: (e) => {
                                D(e.target.value);
                              },
                              ref: O,
                              id: "coin-search-input",
                              onFocus: () => {
                                B(!0);
                              },
                            }),
                            (0, s.jsx)("span", {
                              className: "absolute left-2 top-2",
                              children: (0, s.jsx)(o.SearchIcon, {
                                className:
                                  "size-icon-md translate-y-[-3px] text-gray-50",
                              }),
                            }),
                          ],
                        }),
                      }),
                    (0, s.jsxs)("div", {
                      className: "flex items-center gap-4",
                      children: [
                        (0, s.jsx)("div", {
                          className: (0, c.cn)(
                            "items-center",
                            "hidden md:flex"
                          ),
                          children: u || (0, s.jsx)(s.Fragment, {}),
                        }),
                        (0, s.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            t
                              ? (0, s.jsx)(A, { className: "hidden md:block" })
                              : (0, s.jsx)(a.default, {
                                  type: "secondary",
                                  href: "/app",
                                  as: "/app",
                                  className: (0, c.cn)(
                                    "px-4 py-2",
                                    "hidden md:flex"
                                  ),
                                  children: "Launch a Coin",
                                }),
                            (0, s.jsxs)("div", {
                              className: "flex items-center gap-1.5",
                              children: [
                                (null == N ? void 0 : N.address) &&
                                  !T.env.NEXT_PUBLIC_HIDE_REWARDS &&
                                  (0, s.jsx)(_, {}),
                                (0, s.jsx)(w.C, { shorten: !!t && z }),
                                (0, s.jsx)(a.default, {
                                  size: "lg",
                                  className: "z-50 px-3 py-2 md:hidden",
                                  onClick: () => {
                                    y(!g);
                                  },
                                  children: (0, s.jsx)(o.MenuIcon, {}),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)(v.h, {
                  children: (0, s.jsx)(r.Z, {
                    active: S,
                    onClick: () => {
                      B(!1);
                    },
                    exclude: F
                      ? "#coin-search-input-mobile"
                      : "#coin-search-input",
                    render: (e) => {
                      let { innerRef: l } = e;
                      return (0, s.jsx)("div", {
                        ref: l,
                        children: (0, s.jsx)(b.CoinSearchResults, {
                          as: L.E.div,
                          className: (0, c.cn)(
                            "top-16 z-50 max-h-[320px] lg:top-12",
                            t ? "fixed" : "absolute"
                          ),
                          style: F
                            ? { width: "80vw", left: "10vw" }
                            : {
                                width:
                                  ((null == X ? void 0 : X.width) || 0) + 100,
                                left: ((null == X ? void 0 : X.left) || 0) - 50,
                              },
                          onLinkClick: () => {
                            B(!1);
                          },
                          resultsVisible: S,
                          initial: {
                            opacity: 0,
                            scale: 0.97,
                            y: -15,
                            rotateX: -20,
                            transformPerspective: 1e3,
                            translateZ: -100,
                          },
                          animate: {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            rotateX: 0,
                            transformPerspective: 1e3,
                            translateZ: 0,
                          },
                          exit: {
                            opacity: 0,
                            scale: 0.97,
                            y: -20,
                            rotateX: -10,
                            transformPerspective: 1e3,
                            translateZ: -100,
                          },
                        }),
                      });
                    },
                  }),
                }),
                (0, s.jsx)(v.h, {
                  children: (0, s.jsx)(C.M, {
                    children:
                      g &&
                      (0, s.jsxs)(L.E.div, {
                        className:
                          "backdrop-blur fixed left-0 top-0 z-40 h-screen w-screen bg-gray-0/40 px-2 pt-20 backdrop-blur-1 md:hidden",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        children: [
                          (0, s.jsxs)(L.E.div, {
                            className:
                              "relative mt-2 flex items-center rounded-lg bg-gray-10 p-5 text-gray-50",
                            style: { opacity: 0, scale: 0.98, y: -10 },
                            initial: { opacity: 0, scale: 0.98, y: -10 },
                            animate: { opacity: 1, scale: 1, y: 0 },
                            exit: { opacity: 0, scale: 0.98, y: -10 },
                            transition: {
                              delay: 0.2,
                              type: "spring",
                              stiffness: 200,
                              damping: 15,
                            },
                            children: [
                              (0, s.jsxs)("button", {
                                type: "button",
                                className:
                                  "flex w-full items-center justify-between gap-2 text-gray-50",
                                onClick: () => {
                                  y(!1),
                                    V(!0),
                                    setTimeout(() => {
                                      let e = document.querySelector(
                                        "#coin-search-modal-input"
                                      );
                                      null == e || e.focus();
                                    }, 1);
                                },
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "font-mono text-lg font-medium uppercase",
                                    children: "Search",
                                  }),
                                  (0, s.jsx)(o.SearchIcon, {
                                    className: "h-5 w-5",
                                  }),
                                ],
                              }),
                              (0, s.jsx)(i.ZP, {
                                className:
                                  "absolute -bottom-2 left-[20%] h-2 !w-3/5 bg-gray-10",
                                style: { "--bg-color": "var(--gray-10)" },
                              }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            children: q.map((e) => {
                              let { heading: t, links: l } = e;
                              return (0, s.jsx)(
                                "div",
                                {
                                  children: l.map((e) =>
                                    (0, s.jsxs)(
                                      L.E.div,
                                      {
                                        className:
                                          "relative mt-2 flex items-center rounded-lg bg-highlight p-5 text-gray-10",
                                        style: {
                                          opacity: 0,
                                          scale: 0.98,
                                          y: -10,
                                        },
                                        initial: {
                                          opacity: 0,
                                          scale: 0.98,
                                          y: -10,
                                        },
                                        animate: { opacity: 1, scale: 1, y: 0 },
                                        exit: {
                                          opacity: 0,
                                          scale: 0.98,
                                          y: -10,
                                        },
                                        transition: {
                                          delay: 0.2,
                                          type: "spring",
                                          stiffness: 200,
                                          damping: 15,
                                        },
                                        children: [
                                          (0, s.jsxs)(P(), {
                                            href: e.href,
                                            className:
                                              "flex w-full items-center justify-between gap-2 text-[#14523D]",
                                            children: [
                                              (0, s.jsx)("span", {
                                                className:
                                                  "font-mono text-lg font-medium uppercase",
                                                children: e.text,
                                              }),
                                              (0, s.jsx)(e.Icon, {
                                                className: "h-5 w-5",
                                              }),
                                            ],
                                          }),
                                          (0, s.jsx)(i.ZP, {
                                            className:
                                              "absolute -bottom-2 left-[20%] h-2 !w-3/5 bg-highlight",
                                            style: {
                                              "--bg-color": "var(--highlight)",
                                            },
                                          }),
                                        ],
                                      },
                                      e.text
                                    )
                                  ),
                                },
                                t.text
                              );
                            }),
                          }),
                          (0, s.jsxs)(L.E.div, {
                            className:
                              "relative mt-2 flex flex-col rounded-lg bg-[#A281E4] p-5 text-gray-95",
                            style: { opacity: 0, scale: 0.98, y: -10 },
                            initial: { opacity: 0, scale: 0.98, y: -10 },
                            animate: { opacity: 1, scale: 1, y: 0 },
                            exit: { opacity: 0, scale: 0.98, y: -10 },
                            transition: {
                              delay: 0.4,
                              type: "spring",
                              stiffness: 200,
                              damping: 15,
                            },
                            children: [
                              (0, s.jsxs)(P(), {
                                href: "/app",
                                as: "/app",
                                className:
                                  "flex w-full items-center justify-between gap-2 text-highlight",
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "font-mono text-lg font-medium uppercase 2xl:text-lg",
                                    children: "Launch a Coin",
                                  }),
                                  (0, s.jsx)(o.MoreIcon, {
                                    className: "h-5 w-5",
                                  }),
                                ],
                              }),
                              (0, s.jsx)(i.ZP, {
                                className:
                                  "absolute -bottom-2 left-[20%] h-2 !w-3/5",
                                style: { "--bg-color": "#A281E4" },
                              }),
                            ],
                          }),
                          (0, s.jsx)(L.E.div, {
                            className:
                              "relative mt-2 rounded-lg bg-gray-95 p-5 text-lg text-gray-10",
                            style: { opacity: 0, scale: 0.98, y: -10 },
                            initial: { opacity: 0, scale: 0.98, y: -10 },
                            animate: { opacity: 1, scale: 1, y: 0 },
                            exit: { opacity: 0, scale: 0.98, y: -10 },
                            transition: {
                              delay: 0.5,
                              type: "spring",
                              stiffness: 200,
                              damping: 15,
                            },
                            children: (0, s.jsx)(I.S, {
                              href: "https://twitter.com/metadropmeta",
                              trailingArrow: !0,
                              borderless: !0,
                              children: "Twitter",
                            }),
                          }),
                          (0, s.jsx)(L.E.div, {
                            className: "absolute bottom-0 left-0 w-full pb-2",
                            style: { opacity: 0, x: 50 },
                            initial: { opacity: 0, x: 50 },
                            animate: { opacity: 1, x: 0 },
                            exit: { opacity: 0, x: 50 },
                            transition: {
                              delay: 0.6,
                              ease: "easeOut",
                              duration: 0.5,
                            },
                            children: (0, s.jsx)("div", {
                              className: "flex justify-center px-2",
                              children: (0, s.jsx)("img", {
                                src: n.L.navTextLogo,
                                alt: "",
                              }),
                            }),
                          }),
                        ],
                      }),
                  }),
                }),
                (0, s.jsx)(b.CoinSearchModal, { active: H, setActive: V }),
              ],
            });
      }
    },
    42916: function (e, t, l) {
      "use strict";
      l.r(t);
      var s = l(2067),
        n = l(60171),
        a = l(15039),
        r = l(83844);
      t.default = (e) => {
        let { children: t } = e,
          [l] = (0, a.useState)(() => new r.qH());
        return (
          (0, n.useServerInsertedHTML)(() => {
            let e = l.getStyleElement();
            return (
              l.instance.clearTag(), (0, s.jsx)(s.Fragment, { children: e })
            );
          }),
          (0, s.jsx)(s.Fragment, { children: t })
        );
      };
    },
    42237: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          Ticker: function () {
            return d;
          },
          TickerSymbol: function () {
            return x;
          },
        });
      var s = l(2067),
        n = l(15955),
        a = l(96560),
        r = l(77297),
        i = l(28967),
        o = l(15039),
        c = l(78688);
      function d(e) {
        let { className: t, currency: l = "usd", coins: n = [] } = e,
          r = (0, o.useMemo)(
            () =>
              n.filter((e) => {
                let { price: t, price_1d_change: l } = e;
                return (t || 0 === t) && (l || 0 === l);
              }),
            [n]
          );
        return (0, s.jsx)("div", {
          className: (0, a.cn)("h-6 w-full overflow-hidden rounded-full", t),
          children:
            0 === n.length
              ? null
              : (0, s.jsx)(c.Z, {
                  pauseOnHover: !0,
                  speed: 60,
                  gradientColor: "rgb(25,27,27)",
                  children: (0, s.jsxs)(i.E.div, {
                    className: "flex gap-1 overflow-hidden whitespace-nowrap",
                    initial: "hidden",
                    animate: "visible",
                    variants: {
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { duration: 0.1 } },
                    },
                    children: [
                      null == r
                        ? void 0
                        : r.map((e) => {
                            let { id: t, ...n } = e;
                            return (0, s.jsx)(
                              x,
                              { className: "flex-none", currency: l, ...n },
                              t
                            );
                          }),
                      (0, s.jsx)("div", {}),
                    ],
                  }),
                }),
        });
      }
      function x(e) {
        let {
          symbol: t,
          price: l,
          price_1d_change: o,
          className: c,
          url: d,
          currency: x = "usd",
        } = e;
        return (0, s.jsxs)(i.E.div, {
          whileTap: { scale: 0.99 },
          className: (0, a.cn)(
            "flex h-6 cursor-pointer items-center gap-1 rounded-full bg-gray-20 px-3 text-sm",
            c
          ),
          onClick: () => d && window.open(d, "_blank"),
          children: [
            (0, s.jsx)("span", { className: "font-semibold", children: t }),
            (0, s.jsxs)("span", {
              className: "flex items-center gap-[2px] font-mono text-gray-60",
              children: [
                "eth" === x
                  ? (0, s.jsx)(n.ETHIcon, {
                      className: "translate-y-[1px]",
                      width: 12,
                      height: 12,
                    })
                  : "$",
                l ? (0, r.uf)(l) : "—",
              ],
            }),
            (0, s.jsxs)("span", {
              className: (0, a.cn)(
                "flex items-center gap-[4px] font-mono",
                0 !== o && o
                  ? o > 0
                    ? "text-positive"
                    : "text-negative"
                  : "text-gray-60"
              ),
              children: [
                0 !== o && o
                  ? o > 0
                    ? (0, s.jsx)(n.TickerUp, {
                        className: "translate-y-[1px]",
                        width: "auto",
                        height: 11,
                      })
                    : (0, s.jsx)(n.TickerDown, {
                        className: "translate-y-[1px]",
                        width: "auto",
                        height: 11,
                      })
                  : null,
                (0, r.uf)(o ? Math.abs(o) : o, { decimals: 2 }),
                "%",
              ],
            }),
          ],
        });
      }
    },
    11850: function (e, t, l) {
      "use strict";
      l.d(t, {
        C: function () {
          return N;
        },
      });
      var s = l(2067),
        n = l(2384),
        a = l(96560),
        r = l(15039),
        i = l(55433);
      let o = (e) => {
          let { className: t, colors: l, size: n = "md" } = e,
            [o, c] = (0, r.useMemo)(
              () => [
                (null == l ? void 0 : l[0]) || "var(--gray-95)",
                (null == l ? void 0 : l[1]) || "var(--gray-95)",
              ],
              [l]
            ),
            d = (0, r.useMemo)(() => (0, i.Z)(), []);
          return (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 18 24",
            fill: "none",
            className: (0, a.cn)("-mx-1 w-4", t),
            children: [
              (0, s.jsx)("path", {
                d: "M0 0L1.12495 1.43744C5.12869 6.55333 12.8713 6.55333 16.875 1.43744L18 0V24L16.875 22.5626C12.8713 17.4467 5.12869 17.4467 1.12495 22.5626L0 24V0Z",
                fill: "url(#".concat(d, ")"),
              }),
              (0, s.jsx)("defs", {
                children: (0, s.jsxs)("linearGradient", {
                  id: d,
                  x1: "0%",
                  y1: "50%",
                  x2: "100%",
                  y2: "50%",
                  children: [
                    (0, s.jsx)("stop", { offset: "0%", stopColor: o }),
                    (0, s.jsx)("stop", { offset: "20%", stopColor: o }),
                    (0, s.jsx)("stop", { offset: "80%", stopColor: c }),
                    (0, s.jsx)("stop", { offset: "100%", stopColor: c }),
                  ],
                }),
              }),
            ],
          });
        },
        c = (e) => {
          let { children: t, className: l, colors: n, size: i = "md" } = e,
            c = r.Children.toArray(t);
          return (0, s.jsx)("div", {
            className: (0, a.cn)("relative flex items-center", l),
            children: c.map((e, t) =>
              (0, s.jsxs)(
                r.Fragment,
                {
                  children: [
                    (0, s.jsxs)("div", {
                      className: "relative z-10",
                      children: [
                        e,
                        t >= 1 &&
                          (0, s.jsx)("div", {
                            style: { background: null == n ? void 0 : n[t] },
                            className:
                              "absolute bottom-[max(1px,3%)] left-0 top-[max(1px,3%)] z-[-1] aspect-square rounded-full",
                          }),
                        t < c.length - 1 &&
                          (0, s.jsx)("div", {
                            style: { background: null == n ? void 0 : n[t] },
                            className:
                              "absolute bottom-[max(1px,3%)] right-0 top-[max(1px,3%)] z-[-1] aspect-square rounded-full",
                          }),
                      ],
                    }),
                    t < c.length - 1 &&
                      (0, s.jsx)(o, {
                        colors: [
                          null == n ? void 0 : n[t],
                          null == n ? void 0 : n[t + 1],
                        ],
                        size: i,
                        className: (0, a.cn)("-mx-1", {
                          "-mx-[3.5px] w-3": ["xs"].includes(i),
                          "w-4": ["sm", "md"].includes(i),
                          "-mx-1.5": "lg" === i,
                          "w-6": ["lg", "xl"].includes(i),
                        }),
                      }),
                  ],
                },
                t
              )
            ),
          });
        };
      var d = l(68020),
        x = l(94329),
        u = l(2989),
        m = l(32905),
        h = l(48902),
        f = l(28967);
      let p = () =>
        (0, s.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1.07em",
          height: "1em",
          viewBox: "0 0 256 240",
          children: [
            (0, s.jsx)("path", {
              fill: "#e17726",
              d: "M250.066 0L140.219 81.279l20.427-47.9z",
            }),
            (0, s.jsx)("path", {
              fill: "#e27625",
              d: "m6.191.096l89.181 33.289l19.396 48.528zM205.86 172.858l48.551.924l-16.968 57.642l-59.243-16.311zm-155.721 0l27.557 42.255l-59.143 16.312l-16.865-57.643z",
            }),
            (0, s.jsx)("path", {
              fill: "#e27625",
              d: "m112.131 69.552l1.984 64.083l-59.371-2.701l16.888-25.478l.214-.245zm31.123-.715l40.9 36.376l.212.244l16.888 25.478l-59.358 2.7zM79.435 173.044l32.418 25.259l-37.658 18.181zm97.136-.004l5.131 43.445l-37.553-18.184z",
            }),
            (0, s.jsx)("path", {
              fill: "#d5bfb2",
              d: "m144.978 195.922l38.107 18.452l-35.447 16.846l.368-11.134zm-33.967.008l-2.909 23.974l.239 11.303l-35.53-16.833z",
            }),
            (0, s.jsx)("path", {
              fill: "#233447",
              d: "m100.007 141.999l9.958 20.928l-33.903-9.932zm55.985.002l24.058 10.994l-34.014 9.929z",
            }),
            (0, s.jsx)("path", {
              fill: "#cc6228",
              d: "m82.026 172.83l-5.48 45.04l-29.373-44.055zm91.95.001l34.854.984l-29.483 44.057zm28.136-44.444l-25.365 25.851l-19.557-8.937l-9.363 19.684l-6.138-33.849zm-148.237 0l60.435 2.749l-6.139 33.849l-9.365-19.681l-19.453 8.935z",
            }),
            (0, s.jsx)("path", {
              fill: "#e27525",
              d: "m52.166 123.082l28.698 29.121l.994 28.749zm151.697-.052l-29.746 57.973l1.12-28.8zm-90.956 1.826l1.155 7.27l2.854 18.111l-1.835 55.625l-8.675-44.685l-.003-.462zm30.171-.101l6.521 35.96l-.003.462l-8.697 44.797l-.344-11.205l-1.357-44.862z",
            }),
            (0, s.jsx)("path", {
              fill: "#f5841f",
              d: "m177.788 151.046l-.971 24.978l-30.274 23.587l-6.12-4.324l6.86-35.335zm-99.471 0l30.399 8.906l6.86 35.335l-6.12 4.324l-30.275-23.589z",
            }),
            (0, s.jsx)("path", {
              fill: "#c0ac9d",
              d: "m67.018 208.858l38.732 18.352l-.164-7.837l3.241-2.845h38.334l3.358 2.835l-.248 7.831l38.487-18.29l-18.728 15.476l-22.645 15.553h-38.869l-22.63-15.617z",
            }),
            (0, s.jsx)("path", {
              fill: "#161616",
              d: "m142.204 193.479l5.476 3.869l3.209 25.604l-4.644-3.921h-36.476l-4.556 4l3.104-25.681l5.478-3.871z",
            }),
            (0, s.jsx)("path", {
              fill: "#763e1a",
              d: "M242.814 2.25L256 41.807l-8.235 39.997l5.864 4.523l-7.935 6.054l5.964 4.606l-7.897 7.191l4.848 3.511l-12.866 15.026l-52.77-15.365l-.457-.245l-38.027-32.078zm-229.628 0l98.326 72.777l-38.028 32.078l-.457.245l-52.77 15.365l-12.866-15.026l4.844-3.508l-7.892-7.194l5.952-4.601l-8.054-6.071l6.085-4.526L0 41.809z",
            }),
            (0, s.jsx)("path", {
              fill: "#f5841f",
              d: "m180.392 103.99l55.913 16.279l18.165 55.986h-47.924l-33.02.416l24.014-46.808zm-104.784 0l-17.151 25.873l24.017 46.808l-33.005-.416H1.631l18.063-55.985zm87.776-70.878l-15.639 42.239l-3.319 57.06l-1.27 17.885l-.101 45.688h-30.111l-.098-45.602l-1.274-17.986l-3.32-57.045l-15.637-42.239z",
            }),
          ],
        });
      var g = (e) => {
          let { className: t, avatar: l, shorten: r, ...i } = e,
            o = (0, x.useIsSSR)(),
            [c, { width: g }] = (0, u.x)();
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", {
                ref: c,
                children: (0, s.jsx)(h.x3.Custom, {
                  children: (e) => {
                    let { isConnected: c, show: d, address: x, ensName: u } = e;
                    return (0, s.jsx)(n.default, {
                      onClick: d,
                      ...i,
                      className: (0, a.cn)(
                        "w-full px-4 py-2 font-mono text-sm font-medium uppercase transition-all",
                        c &&
                          l &&
                          "items-center justify-center !bg-transparent p-0",
                        t
                      ),
                      children:
                        c && !o
                          ? l
                            ? (0, s.jsx)(h.qE, { address: x, size: 40 })
                            : (0, s.jsx)(s.Fragment, {
                                children:
                                  u ||
                                  (0, m.T)(
                                    (null == x ? void 0 : x.toLowerCase()) ||
                                      "",
                                    6
                                  ),
                              })
                          : (0, s.jsx)(f.E.div, {
                              transition: { duration: 0.2, ease: "easeInOut" },
                              animate: { width: r ? 16 : 64 },
                              children: r ? (0, s.jsx)(p, {}) : "connect",
                            }),
                    });
                  },
                }),
              }),
              !g &&
                (0, s.jsxs)(n.default, {
                  className: "relative",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                      children: (0, s.jsx)(d.Z, {
                        className: "h-4 w-4 text-gray-85",
                      }),
                    }),
                    (0, s.jsx)("span", {
                      className: "text-transparent",
                      children: "connect",
                    }),
                  ],
                }),
            ],
          });
        },
        v = l(81188),
        j = l(69436),
        y = l(11664),
        w = l(91818),
        b = l(81314);
      let N = (e) => {
        var t;
        let { shorten: l } = e,
          a = (0, b.Av)(),
          { data: r } = (function () {
            let { address: e } = (0, w.m)(),
              t = (0, v.n)("leaderboard");
            return (0, y.ZP)(
              e && t ? "/public/points/leaderboard?me=".concat(e) : null,
              j.Z
            );
          })();
        return (0, s.jsxs)(c, {
          colors: ["var(--gray-95)", "hsl(var(--highlight-base))"],
          children: [
            (0, s.jsx)(g, { avatar: a, shorten: l }),
            (0, s.jsxs)(n.default, {
              size: "sm",
              type: "accent",
              className: "cursor-not-allowed border-transparent",
              children: [
                (0, s.jsx)("span", {
                  className: "-mr-1 text-sm text-gray-0/80 lg:mr-0",
                  children:
                    (null == r
                      ? void 0
                      : null === (t = r.me) || void 0 === t
                      ? void 0
                      : t.totalPoints) || "0",
                }),
                (0, s.jsx)("span", {
                  className: "text-xs text-gray-0/40 lg:hidden",
                  children: "pts",
                }),
                (0, s.jsx)("span", {
                  className: "hidden text-gray-0/40 lg:inline",
                  children: "points",
                }),
              ],
            }),
          ],
        });
      };
    },
    37397: function (e, t, l) {
      "use strict";
      l.d(t, {
        UH: function () {
          return r;
        },
      });
      var s = l(2067),
        n = l(96560);
      let a = (e) => {
          let { className: t = "", style: l = {} } = e;
          return (0, s.jsxs)("svg", {
            className: (0, n.cn)("w-auto", t),
            width: "10",
            height: "20",
            viewBox: "0 0 10 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            style: l,
            children: [
              (0, s.jsx)("path", {
                d: "M0 4.37114e-07L9.53674e-07 10C7.12263e-07 4.47715 4.47715 2.41411e-07 10 0L0 4.37114e-07Z",
                fill: "var(--bg-color)",
              }),
              (0, s.jsx)("path", {
                d: "M9.53674e-07 10C1.19509e-06 15.5228 4.47715 20 10 20H9.53674e-07V10Z",
                fill: "var(--bg-color)",
              }),
            ],
          });
        },
        r = (e) => {
          let { className: t = "", useCurrentColor: l = !1 } = e;
          return (0, s.jsx)("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: (0, s.jsx)("path", {
              d: "M20 20H0V0C0 11.0457 8.9543 20 20 20Z",
              fill: l ? "currentColor" : "var(--bg-color)",
            }),
          });
        };
      t.ZP = (e) => {
        let { className: t = "", style: l, bg: r, dir: i = "col" } = e;
        return (0, s.jsxs)("div", {
          className: (0, n.cn)(
            t,
            r,
            "w-full",
            "flex justify-center",
            "col" === i ? "flex-row" : "flex-col"
          ),
          style: {
            color: "var(--bg-color)",
            backgroundColor: "transparent",
            ...l,
          },
          children: [
            (0, s.jsx)(a, {
              className: (0, n.cn)("rotate-180", "row" === i && "rotate-270"),
              style: { height: "var(--joint-height)" },
            }),
            (0, s.jsx)("div", {
              className: "max-w-[80%]",
              style: {
                width: "var(--joint-width)",
                backgroundColor: "var(--bg-color)",
              },
            }),
            (0, s.jsx)(a, {
              className: (0, n.cn)("row" === i && "rotate-90"),
              style: { height: "var(--joint-height)" },
            }),
          ],
        });
      };
    },
    48259: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          Tooltip: function () {
            return o;
          },
          TooltipContent: function () {
            return d;
          },
          TooltipProvider: function () {
            return i;
          },
          TooltipTrigger: function () {
            return c;
          },
        });
      var s = l(2067),
        n = l(15039),
        a = l(87907),
        r = l(96560);
      let i = (e) => (0, s.jsx)(a.zt, { delayDuration: 150, ...e }),
        o = a.fC,
        c = (e) =>
          (0, s.jsx)(a.xz, {
            ...e,
            className: (0, r.cn)("cursor-auto", e.className),
            type: "button",
          }),
        d = n.forwardRef((e, t) => {
          let { className: l, sideOffset: n = 8, side: i = "bottom", ...o } = e;
          return (
            o.children &&
            (0, s.jsx)(a.VY, {
              ref: t,
              sideOffset: n,
              side: i,
              className: (0, r.cn)(
                "z-50 animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
                "px-3 pb-[11px] pt-[9px]",
                "popover",
                "text-pretty",
                "shadow-lg",
                "text-sm font-normal",
                "max-w-xs",
                l
              ),
              avoidCollisions: !0,
              ...o,
            })
          );
        });
      d.displayName = a.VY.displayName;
    },
    94329: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          SSRProvider: function () {
            return r;
          },
          useIsSSR: function () {
            return i;
          },
        });
      var s = l(2067),
        n = l(15039);
      let a = n.createContext(!0);
      function r(e) {
        let { children: t } = e,
          [l, r] = (0, n.useState)(!0);
        return (
          (0, n.useEffect)(() => {
            r(!1);
          }, []),
          (0, s.jsx)(a.Provider, { value: l, children: t })
        );
      }
      function i() {
        return (0, n.useContext)(a);
      }
    },
    81188: function (e, t, l) {
      "use strict";
      l.d(t, {
        n: function () {
          return a;
        },
      });
      var s = l(91818);
      let n = {
          "fair-snipes": !1,
          "coin-profiles": !0,
          "coin-liquidity": !0,
          leaderboard: !1,
        },
        a = (e) => {
          let { address: t } = (0, s.m)();
          return n[e];
        };
    },
    2989: function (e, t, l) {
      "use strict";
      l.d(t, {
        x: function () {
          return n;
        },
      });
      var s = l(15039);
      function n() {
        let e = (0, s.useRef)(null),
          [t, l] = (0, s.useState)({});
        return (
          (0, s.useLayoutEffect)(() => {
            if (!e.current) return;
            let t = new ResizeObserver((e) => {
              let [t] = e;
              t &&
                t.contentRect &&
                l({ width: t.contentRect.width, height: t.contentRect.height });
            });
            return (
              t.observe(e.current),
              () => {
                t.disconnect();
              }
            );
          }, []),
          [e, t]
        );
      }
    },
    81314: function (e, t, l) {
      "use strict";
      l.d(t, {
        Av: function () {
          return i;
        },
        dD: function () {
          return r;
        },
        rx: function () {
          return o;
        },
      });
      var s = l(15039);
      let n = !1,
        a = (e) => {
          let [t, l] = (0, s.useState)(() =>
              n ? window.innerWidth <= e : void 0
            ),
            a = (0, s.useRef)(t);
          a.current = t;
          let r = (0, s.useCallback)((e) => {
            e.matches ? l(!0) : l(!1);
          }, []);
          return (
            (0, s.useEffect)(() => {
              void 0 === a.current && l(window.innerWidth <= e), (n = !0);
              let t = window.matchMedia("(max-width: ".concat(e, "px)"));
              return (
                t.addListener(r), t.matches && l(!0), () => t.removeListener(r)
              );
            }, [r, e]),
            t
          );
        },
        r = () => a(600),
        i = () => a(960),
        o = () => a(768);
      t.ZP = a;
    },
    32905: function (e, t, l) {
      "use strict";
      l.d(t, {
        T: function () {
          return s;
        },
        a: function () {
          return n;
        },
      });
      let s = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 8,
            l =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "•";
          if (!e) return;
          if (e.length <= t) return e;
          let s = Array(Math.min(3, e.length - t))
            .fill(l)
            .join("");
          return "0x"
            .concat(e.substring(2, Math.ceil(t / 2) + 2))
            .concat(s)
            .concat(e.substring(e.length - Math.floor(t / 2)));
        },
        n = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 64;
          return e
            ? e.length > t && t > 2
              ? "".concat(e.slice(0, t - 1).trim(), "…")
              : e
            : null;
        };
    },
  },
  function (e) {
    e.O(
      0,
      [
        1765, 894, 775, 9745, 2005, 1664, 4356, 9041, 8158, 4910, 5060, 8388,
        2469, 2105, 2418, 4505, 3844, 9175, 5955, 8451, 5906, 8282, 4665, 1744,
      ],
      function () {
        return e((e.s = 24851));
      }
    ),
      (_N_E = e.O());
  },
]);
