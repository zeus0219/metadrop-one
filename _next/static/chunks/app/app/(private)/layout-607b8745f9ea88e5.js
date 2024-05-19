(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2680],
  {
    22089: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 94978));
    },
    43568: function (e, t, r) {
      "use strict";
      r.d(t, {
        ZP: function () {
          return l;
        },
        yA: function () {
          return a;
        },
      });
      var n = r(2067),
        s = r(96560);
      let a = (e) => {
        let { className: t } = e;
        return (0, n.jsx)("svg", {
          viewBox: "0 0 79 33",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: (0, s.cn)("h-full", t),
          children: (0, n.jsx)("path", {
            d: "M76.8328 0.807308C77.708 0.260294 78.8433 0.889519 78.8433 1.92162V14.2464C78.8433 15.6056 78.1431 16.869 76.9904 17.5894L53.8448 32.0554C52.9696 32.6024 51.8343 31.9732 51.8343 30.9411V22.0297C51.8343 19.9655 49.5638 18.7071 47.8133 19.8011L27.9277 32.2296C27.0525 32.7766 25.9172 32.1474 25.9172 31.1153V22.2038C25.9172 20.1396 23.6467 18.8811 21.8963 19.9751L2.01068 32.4036C1.13547 32.9506 0.000190735 32.3214 0.000190735 31.2893V18.9645C0.000190735 17.6053 0.700394 16.342 1.853 15.6216L24.9986 1.15556C25.8739 0.608547 27.0091 1.23777 27.0091 2.26987V11.1814C27.0091 13.2456 29.2797 14.504 31.0301 13.41L50.9157 0.981509C51.7909 0.434496 52.9262 1.06372 52.9262 2.09582V11.0072C52.9262 13.0714 55.1968 14.3298 56.9472 13.2358L76.8328 0.807308Z",
            fill: "currentColor",
          }),
        });
      };
      function c(e) {
        let { responsive: t, className: r } = e;
        return (0, n.jsx)("div", {
          className: (0, s.cn)(
            "font-65 font-wide uppercase leading-none tracking-wider",
            "h-full pt-[4px]",
            { "hidden md:block": t },
            r
          ),
          children: "metadrop",
        });
      }
      function l(e) {
        let {
          include: t = "all",
          tagline: r,
          className: l,
          responsive: i,
          innerClassName: d,
        } = e;
        return r
          ? (0, n.jsxs)("div", {
              className: (0, s.cn)(
                "flex items-center justify-start gap-3 text-gray-95",
                l
              ),
              children: [
                (0, n.jsx)(a, { className: "h-6" }),
                (0, n.jsxs)("div", {
                  className: "hidden flex-col text-sm md:flex",
                  children: [
                    (0, n.jsx)("span", {
                      className: "font-wide uppercase tracking-wide",
                      children: "Metadrop",
                    }),
                    (0, n.jsx)("span", {
                      className: "-mt-[4px] text-gray-70",
                      children: r,
                    }),
                  ],
                }),
              ],
            })
          : (0, n.jsxs)("div", {
              className: (0, s.cn)("flex items-center gap-5", l),
              children: [
                ("all" === t || "logoImage" === t) &&
                  (0, n.jsx)(a, { className: d }),
                ("all" === t || "logoWord" === t) &&
                  (0, n.jsx)(c, { responsive: i, className: d }),
              ],
            });
      }
    },
    94978: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          RequireSignIn: function () {
            return H;
          },
        });
      var n = r(2067),
        s = r(74734),
        a = r(43568),
        c = r(61174),
        l = r(48902),
        i = r(637),
        d = r(28967),
        o = r(52464),
        u = r.n(o),
        f = r(96560),
        m = r(13070),
        x = r(46993),
        h = r(46489),
        g = r(12067),
        p = r(90567),
        b = r(42636),
        v = r(18951),
        j = r(14091),
        y = r.n(j),
        w = r(15039);
      function N(e) {
        let { children: t, baseVelocity: r = 100 } = e,
          s = (0, w.useRef)(null),
          a = (0, x.c)(0),
          { scrollY: c } = (0, h.v)(),
          l = (0, g.T)(c),
          i = (0, p.q)(l, { damping: 50, stiffness: 400 }),
          o = (0, b.H)(i, [0, 1e3], [0, 5], { clamp: !1 }),
          u = (0, b.H)(a, (e) => {
            var t;
            let r =
              null === (t = s.current) || void 0 === t ? void 0 : t.offsetWidth;
            return r < window.innerWidth
              ? (0, m.r)(-r, 0, e)
              : (0, m.r)(-2 * r, -r, e);
          }),
          j = (0, w.useRef)(1);
        (0, v.p)((e, t) => {
          let n = j.current * r * (t / 1e3);
          0 > o.get() ? (j.current = -1) : o.get() > 0 && (j.current = 1),
            (n += j.current * n * o.get()),
            a.set(a.get() + n);
        });
        let y = "inline-flex flex-nowrap gap-[var(--gap)] pr-[var(--gap)]";
        return t.length
          ? (0, n.jsx)("div", {
              className: "w-full overflow-hidden leading-[0]",
              children: (0, n.jsxs)(d.E.div, {
                className:
                  "inline-block w-[calc(2rem+4*100%)] flex-row gap-[var(--gap)] whitespace-nowrap",
                style: { x: u },
                children: [
                  (0, n.jsx)("span", { ref: s, className: y, children: t }),
                  (0, n.jsxs)("span", { className: y, children: [t, " "] }),
                  (0, n.jsxs)("span", { className: y, children: [t, " "] }),
                  (0, n.jsxs)("span", {
                    className: (0, f.cn)(y, "pr-0"),
                    children: [t, " "],
                  }),
                ],
              }),
            })
          : null;
      }
      var C = (e) => {
        let { images: t, className: r, rows: s = 3 } = e,
          [a, c] = (0, w.useState)([]),
          [l, i] = (0, w.useState)(4),
          d = a.slice(0, l),
          o = a.slice(l, 2 * l),
          u = a.slice(2 * l, 3 * l),
          m = "h-40 w-40 md:h-40 md:w-40 rounded-md inline-block";
        return (
          (0, w.useEffect)(() => {
            c(y()(t));
          }, []),
          (0, w.useEffect)(() => {
            let e = () =>
              i(
                window.innerWidth < 767 ? 4 : window.innerWidth < 1280 ? 8 : 12
              );
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          (0, n.jsxs)("section", {
            className: (0, f.cn)(
              "flex select-none flex-col gap-[var(--gap)]",
              r
            ),
            style: { "--gap": "0.25rem" },
            onClick: () => c(y()(t)),
            children: [
              (0, n.jsx)(N, {
                baseVelocity: 20,
                children: z(d, l).map((e, t) =>
                  (0, n.jsx)("img", { className: m, alt: "NFT", src: e }, t)
                ),
              }),
              s >= 2 &&
                (0, n.jsx)(N, {
                  baseVelocity: -20,
                  children: z(o, l).map((e, t) =>
                    (0, n.jsx)("img", { className: m, alt: "NFT", src: e }, t)
                  ),
                }),
              s >= 3 &&
                (0, n.jsx)(N, {
                  baseVelocity: 20,
                  children: z(u, l).map((e, t) =>
                    (0, n.jsx)("img", { className: m, alt: "NFT", src: e }, t)
                  ),
                }),
            ],
          })
        );
      };
      function k(e) {
        let { children: t, className: r, baseVelocity: s = 100 } = e,
          a = (0, w.useRef)(null),
          c = (0, x.c)(0),
          { scrollY: l } = (0, h.v)(),
          i = (0, g.T)(l),
          o = (0, p.q)(i, { damping: 50, stiffness: 400 }),
          u = (0, b.H)(o, [0, 1e3], [0, 5], { clamp: !1 }),
          j = (0, b.H)(c, (e) => {
            var t;
            let r =
              null === (t = a.current) || void 0 === t
                ? void 0
                : t.offsetHeight;
            return r < window.innerHeight
              ? (0, m.r)(-r, 0, e)
              : (0, m.r)(-2 * r, -r + 40, e);
          }),
          y = (0, w.useRef)(1);
        (0, v.p)((e, t) => {
          let r = y.current * s * (t / 1e3);
          0 > u.get() ? (y.current = -1) : u.get() > 0 && (y.current = 1),
            (r += y.current * r * u.get()),
            c.set(c.get() + r);
        });
        let N = "inline-flex flex-col gap-[var(--gap)] h-full o";
        return t.length
          ? (0, n.jsx)("div", {
              className: (0, f.cn)("h-full overflow-hidden leading-[0]", r),
              children: (0, n.jsxs)(d.E.div, {
                className: (0, f.cn)(
                  "inline-flex w-full flex-col gap-[var(--gap)]"
                ),
                style: { y: j },
                children: [
                  (0, n.jsx)("span", { ref: a, className: N, children: t }),
                  (0, n.jsxs)("span", { className: N, children: [t, " "] }),
                  (0, n.jsxs)("span", { className: N, children: [t, " "] }),
                  (0, n.jsxs)("span", {
                    className: (0, f.cn)(N, "pr-0"),
                    children: [t, " "],
                  }),
                ],
              }),
            })
          : null;
      }
      let z = (e, t) => {
        let r = [...e],
          n = 0;
        for (; r.length < t; ) r.push(r[n++]);
        return r;
      };
      var M = r(26933),
        E = r(81314),
        V = r(71335),
        L = r.n(V),
        W = r(2384);
      function q() {
        let { openSIWE: e } = (0, l.dd)();
        return (0, n.jsx)(l.x3.Custom, {
          children: (t) => {
            let { isConnected: r, isConnecting: s, show: a } = t;
            return s
              ? (0, n.jsx)(W.default, {
                  size: "lg",
                  onClick: a,
                  disabled: !0,
                  children: "Connecting...",
                })
              : r
              ? (0, n.jsx)(W.default, {
                  size: "lg",
                  onClick: async () => {
                    e();
                  },
                  children: "Sign In",
                })
              : (0, n.jsx)(W.default, {
                  size: "lg",
                  onClick: a,
                  children: "Connect",
                });
          },
        });
      }
      let P = w.memo((e) => {
          let { img: t, x: r, y: s, w: a } = e;
          return (0, n.jsx)("div", {
            "data-test": s,
            className: (0, f.cn)(
              "flex w-full",
              s <= 0.33
                ? "justify-center"
                : s <= 0.66
                ? "justify-start"
                : "justify-end"
            ),
            children: (0, n.jsx)("img", {
              loading: "lazy",
              alt: "NFT",
              src: (0, M.s)(t, { resize: "600x" }),
              className: (0, f.cn)(
                "inline-block aspect-square rounded-xs object-cover transition-all"
              ),
              width: 600,
              height: 600,
              style: { width: "".concat(70 + 25 * a, "%") },
            }),
          });
        }),
        S = [
          "https://ucarecdn.com/69f0ac19-5680-45dc-9def-fe0a43ba7146/",
          "https://ucarecdn.com/cfbd56f3-7583-4562-814e-fc9b2b789fe8/",
          "https://ucarecdn.com/8529dd96-d089-48b2-9c5a-7cf47d280010/",
          "https://ucarecdn.com/ef3847a1-31fb-412c-804a-31e08ee47c40/",
          "https://ucarecdn.com/418ec46a-5afc-4ab3-90ce-083a4e63f54f/",
          "https://ucarecdn.com/d6fbb92a-d17d-4c99-befc-7e59a50da31f/",
          "https://ucarecdn.com/c70934bc-128e-4a2f-bb4b-487fe40ee780/",
          "https://ucarecdn.com/dfef4e41-6cdc-4315-b252-11a196f378cc/",
          "https://ucarecdn.com/34fcefff-3c54-4f0b-9eb8-42706a294021/",
          "https://ucarecdn.com/5ec072bb-a278-420c-b288-c13d0ad244a0/",
          "https://ucarecdn.com/3dfbb7f9-8a56-45ff-a494-3a2a9d847926/",
          "https://ucarecdn.com/20c1b55d-b5e3-46c7-ae7e-83df02cb605b/",
          "https://ucarecdn.com/cef6fc1a-45c3-40dc-afe7-ba1c075f0762/",
          "https://ucarecdn.com/40466843-d237-4ca3-9d6d-40050e86b267/",
          "https://ucarecdn.com/77b660b9-eb51-4e14-938d-8665b97ff65a/",
        ],
        _ = w.memo(() => {
          let e = (0, w.useMemo)(
              () =>
                S.map(() => ({
                  x: Math.random(),
                  y: Math.random(),
                  w: Math.random(),
                })),
              [S]
            ),
            t = (0, w.useMemo)(
              () =>
                y()(S).map((t, r) =>
                  (0, n.jsx)(P, { img: t, ...e[r] }, "left-".concat(r))
                ),
              [S, e]
            ),
            r = (0, w.useMemo)(
              () =>
                y()(S).map((t, r) =>
                  (0, n.jsx)(P, { img: t, ...e[r] }, "right-".concat(r))
                ),
              [S, e]
            ),
            s = (0, E.ZP)(767);
          return (0, n.jsxs)("div", {
            className: (0, f.cn)("relative flex items-center self-stretch"),
            style: { "--gap": s ? "1rem" : "2rem" },
            children: [
              (0, n.jsx)("div", {
                className:
                  "absolute inset-0 grid items-center gap-4 px-4 md:grid-cols-2 ",
                children: s
                  ? (0, n.jsx)(C, { images: y()(S), rows: 2 })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(k, { baseVelocity: 30, children: t }),
                        (0, n.jsx)(k, { baseVelocity: -30, children: r }),
                      ],
                    }),
              }),
              (0, n.jsxs)("div", {
                className:
                  "relative mx-auto mt-4 aspect-square overflow-hidden rounded-lg border-[10px] border-gray-95 bg-gray-10/40 backdrop-blur-1 md:mt-0 md:w-[calc(100%-4.5rem)]",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "corner-t-r !absolute right-0 top-0 h-12 w-2/5 bg-gray-95",
                    children: "\xa0",
                  }),
                  (0, n.jsx)(L(), {
                    href: "/",
                    children: (0, n.jsx)(a.yA, { className: "mx-auto w-3/5" }),
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "corner-b-l !absolute bottom-0 left-0 h-12 w-2/5 bg-gray-95",
                    children: "\xa0",
                  }),
                ],
              }),
            ],
          });
        });
      function F() {
        let e = (0, w.useMemo)(() => (0, n.jsx)(_, {}), []);
        return (0, n.jsx)(i.M, {
          children: (0, n.jsxs)(d.E.div, {
            ...(0, s.g)(),
            className:
              "fixed inset-0 flex grow justify-center bg-gray-10 z-[100]",
            children: [
              (0, n.jsx)(u(), {
                id: "9c45ea3d72994155",
                children: "main{padding-bottom:0!important}",
              }),
              (0, n.jsx)("div", {
                className:
                  "jsx-9c45ea3d72994155 relative flex w-full max-w-4xl flex-col items-center  justify-center",
                children: (0, n.jsx)("div", {
                  className:
                    "jsx-9c45ea3d72994155 h-full  border-x border-gray-20",
                  children: (0, n.jsxs)("div", {
                    className:
                      "jsx-9c45ea3d72994155 " +
                      ((0, f.cn)(
                        "mx-auto h-full flex-col  md:items-center",
                        "grid grid-rows-[auto,1fr] md:grid-cols-2 md:grid-rows-none",
                        "w-full",
                        "relative z-10"
                      ) || ""),
                    children: [
                      e,
                      (0, n.jsxs)("div", {
                        className:
                          "jsx-9c45ea3d72994155 z-10 mx-auto mt-8 flex h-full w-full flex-col border-l border-gray-20 px-4 text-center text-gray-95 md:mt-0 md:items-center md:justify-center",
                        children: [
                          (0, n.jsx)("h3", {
                            className:
                              "jsx-9c45ea3d72994155 mb-5 text-h2 font-bold",
                            children: "Welcome",
                          }),
                          (0, n.jsx)("p", {
                            className: "jsx-9c45ea3d72994155 text-pretty px-4",
                            children:
                              "Connect your wallet to create, launch, and manage coins.",
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "jsx-9c45ea3d72994155 mt-8 flex w-full flex-col gap-2 font-normal",
                            children: (0, n.jsx)(q, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function H(e) {
        let { children: t } = e,
          { isSignedIn: r } = (0, l.Pe)(),
          { isFetched: o } = (0, c.a)({ queryKey: ["ckSiweSession"] });
        return o
          ? (0, n.jsx)(i.M, {
              children: r
                ? (0, n.jsx)(d.E.div, { ...(0, s.g)(), children: t })
                : (0, n.jsx)(F, {}),
            })
          : (0, n.jsx)("div", {
              className:
                "fixed inset-0 bg-gray-10 z-[100] grid place-content-center",
              children: (0, n.jsx)(a.ZP, {
                include: "logoImage",
                className: "text-gray-70 h-20 w-20 animate-pulse",
              }),
            });
      }
    },
    2384: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return i;
          },
        });
      var n = r(2067),
        s = r(71335),
        a = r.n(s),
        c = r(67552),
        l = r(96560);
      function i(e) {
        let {
            Component: t,
            className: r,
            href: s,
            as: i,
            target: d,
            rel: o,
            disabled: u,
            loading: f,
            htmlType: m,
            leftIcon: x,
            rightIcon: h,
            children: g,
            type: p = "primary",
            fullWidth: b = !1,
            size: v = "md",
            onClick: j,
            forceEnabled: y,
            prefetch: w,
            ...N
          } = e,
          C = (0, c.B4)(),
          k = (u || f || C) && !y;
        s && (k = !!(u || f));
        let z = t || (s && i ? a() : s ? "a" : "button");
        return (0, n.jsxs)(z, {
          tabIndex: k ? -1 : void 0,
          type: m,
          className: (0, l.cn)(
            k && "pointer-events-none",
            "transition-all active:scale-95",
            "select-none",
            "rounded-full font-mono  uppercase leading-[1em]",
            "flex items-center justify-center gap-2 text-center",
            "subpixel-antialiased focus:outline-highlight focus:ring-0",
            "border",
            "whitespace-nowrap",
            "group",
            b && "w-full",
            f && "cursor-wait",
            k && "disabled pointer-events-none",
            "xs" === v && ["text-xs", "py-1", "px-2", x && "pl-1", h && "pr-1"],
            "sm" === v && ["text-sm", "py-2", "px-4", x && "pl-3", h && "pr-3"],
            "md" === v && [
              "text-sm",
              "h-8 min-w-[2rem]",
              "px-4",
              x && "pl-3",
              h && "pr-3",
            ],
            "lg" === v && ["text-lg", "py-4", "px-8"],
            "xl" === v && ["text-lg", "py-5", "px-10"],
            !g && "aspect-square p-1",
            "primary" === p && [
              "border-transparent",
              "bg-gray-10 text-gray-95 hover:bg-gray-20 disabled:bg-gray-50 disabled:text-gray-95",
              "bg-gray-95 text-gray-10 hover:bg-gray-85 disabled:bg-gray-50 disabled:text-gray-30",
            ],
            ("ghost" === p || "secondary" === p) && [
              "border border-gray-100/10 text-gray-95 hover:border-transparent hover:bg-gray-100/10 disabled:text-gray-100/40",
            ],
            "ghost" === p && [
              "rounded-xs",
              "h-auto min-h-[30px]",
              "!hover:border-transparent !border-transparent px-2 py-1",
            ],
            "danger" === p && [
              "border-1 border-negative bg-negative text-gray-100 hover:brightness-125",
              "disabled:opacity-40",
            ],
            "secondary" === p && k && "text-gray-100/40",
            "ghost" === p && k && "text-gray-100/40",
            "accent" === p &&
              "border-highlight bg-highlight text-gray-10 hover:brightness-90",
            "accent" === p && k && "brightness-50",
            r
          ),
          disabled: k,
          onClick: j,
          href: k ? "#" : s,
          as: k ? void 0 : i,
          target: d,
          rel: o,
          prefetch: w,
          ...N,
          children: [x && x, g, h && h],
        });
      }
    },
    26933: function (e, t, r) {
      "use strict";
      r.d(t, {
        s: function () {
          return c;
        },
      });
      var n = r(2067),
        s = r(96560),
        a = r(15039);
      t.Z = (e) => {
        let {
            src: t,
            type: r = "image",
            transforms: l = { resize: "1600" },
            className: i,
            alt: d,
            ...o
          } = e,
          { src_: u, type: f } = (0, a.useMemo)(() => {
            let e = r;
            return (
              /gif2video/.test(t) && (e = "video"),
              { src_: "video" === e ? t : c(t, l), type: e }
            );
          }, [t, l, r]);
        return "image" === f
          ? (0, n.jsx)("img", {
              className: (0, s.cn)("no-fallback h-full object-cover", i),
              alt: null != d ? d : "decorative",
              src: u,
              ...o,
            })
          : "video" === f
          ? (0, n.jsx)("video", {
              className: i,
              autoPlay: !0,
              loop: !0,
              src: u,
              ...o,
              muted: !0,
            })
          : void 0;
      };
      let c = (e, t) => {
        if (!/ucarecdn/.test(e)) return e;
        let r = Object.entries(null != t ? t : {}).reduce((e, t) => {
          let [r, n] = t;
          return "".concat(e, "-/").concat(r, "/").concat(n, "/");
        }, "-/quality/best/-/format/auto/");
        return "".concat(e).concat(r);
      };
    },
    67552: function (e, t, r) {
      "use strict";
      r.d(t, {
        B4: function () {
          return l;
        },
        G6: function () {
          return c;
        },
        dz: function () {
          return a;
        },
      });
      var n = r(2067),
        s = r(15039);
      let a = (0, s.createContext)(!1),
        c = (e) => {
          let { value: t, bypassParent: r = !1, ...s } = e,
            c = l();
          return (0, n.jsx)(a.Provider, { value: r ? t : c || t, ...s });
        };
      a.displayName = "DisabledContext";
      let l = () => (0, s.useContext)(a);
    },
    81314: function (e, t, r) {
      "use strict";
      r.d(t, {
        Av: function () {
          return l;
        },
        dD: function () {
          return c;
        },
        rx: function () {
          return i;
        },
      });
      var n = r(15039);
      let s = !1,
        a = (e) => {
          let [t, r] = (0, n.useState)(() =>
              s ? window.innerWidth <= e : void 0
            ),
            a = (0, n.useRef)(t);
          a.current = t;
          let c = (0, n.useCallback)((e) => {
            e.matches ? r(!0) : r(!1);
          }, []);
          return (
            (0, n.useEffect)(() => {
              void 0 === a.current && r(window.innerWidth <= e), (s = !0);
              let t = window.matchMedia("(max-width: ".concat(e, "px)"));
              return (
                t.addListener(c), t.matches && r(!0), () => t.removeListener(c)
              );
            }, [c, e]),
            t
          );
        },
        c = () => a(600),
        l = () => a(960),
        i = () => a(768);
      t.ZP = a;
    },
    96560: function (e, t, r) {
      "use strict";
      r.d(t, {
        cn: function () {
          return a;
        },
      });
      var n = r(18315),
        s = r(39315);
      function a() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, s.m6)((0, n.W)(t));
      }
    },
    74734: function (e, t, r) {
      "use strict";
      r.d(t, {
        g: function () {
          return n;
        },
      });
      let n = function () {
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
  },
  function (e) {
    e.O(
      0,
      [
        1765, 894, 775, 9745, 2005, 9041, 8158, 4910, 5060, 2469, 2105, 2418,
        8074, 8282, 4665, 1744,
      ],
      function () {
        return e((e.s = 22089));
      }
    ),
      (_N_E = e.O());
  },
]);
