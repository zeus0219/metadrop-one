"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3323],
  {
    90581: function (e, t, a) {
      a.r(t),
        a.d(t, {
          ActivityFeed: function () {
            return v;
          },
          RelativeTime: function () {
            return g;
          },
        });
      var n = a(2067),
        r = a(27136),
        s = a(15955),
        i = a(48259),
        d = a(81314),
        o = a(96560),
        l = a(69436),
        c = a(65031),
        u = a(20886),
        f = a(36565),
        p = a(76859),
        C = a(46756),
        x = a(9038),
        b = a(637),
        m = a(28967),
        h = a(71335),
        F = a.n(h),
        y = a(15039),
        A = a(11664);
      let D = ["#D9E64C", "#A98DE2", "#3CEAAA", "#7FBDE6", "#FDB840"];
      function v(e) {
        let { limit: t, className: a } = e,
          { data: c } = (0, A.ZP)(
            "/public/coins?".concat(t ? "limit=".concat(t) : ""),
            async (e) => {
              let { coins: t } = await (0, l.Z)(e, { throwOnHTTPError: !1 });
              return {
                events: t
                  .filter((e) => {
                    let { coinType: t } = e;
                    return t === p.CoinType.METADROP;
                  })
                  .map((e) => {
                    var t;
                    return {
                      contractAddress: e.erc20Address || void 0,
                      coinName: e.name || void 0,
                      coinSymbol: e.symbol || void 0,
                      slug: e.slug || void 0,
                      time: e.deployedAt ? new Date(e.deployedAt) : void 0,
                      chainId: e.chainId || void 0,
                      eventName: (0, C.A)(
                        new Date(),
                        (0, x.m)(
                          new Date(e.poolStartDate || "0"),
                          null !== (t = e.poolDurationInMinutes) && void 0 !== t
                            ? t
                            : u.Er.durationInMinutes
                        )
                      )
                        ? "ERC20Created"
                        : "DriPoolStarted",
                    };
                  }),
              };
            },
            { refreshInterval: 1e4 }
          ),
          h = (0, y.useMemo)(
            () => (null == c ? void 0 : c.events) || [],
            [null == c ? void 0 : c.events]
          ),
          v = (0, d.rx)();
        return (0, n.jsxs)("div", {
          className: (0, o.cn)("", a),
          children: [
            (0, n.jsxs)("div", {
              className: "relative z-10 flex flex-col gap-1",
              children: [
                0 === h.length &&
                  (0, n.jsx)(n.Fragment, {
                    children: Array.from({ length: 5 }, (e, t) => t + 1).map(
                      (e) =>
                        (0, n.jsx)(
                          "div",
                          {
                            className:
                              "h-[62px] animate-pulse rounded-md border border-gray-100/10 bg-gray-20 transition-all ease-in-out-quad hover:translate-y-[-1px] hover:bg-[#424242]",
                          },
                          e
                        )
                    ),
                  }),
                (0, n.jsx)(b.M, {
                  mode: "popLayout",
                  initial: !1,
                  children: h.slice(0, t).map((e, t) => {
                    var a;
                    let {
                      time: d,
                      coinSymbol: o,
                      coinName: l,
                      slug: c,
                      eventName: u,
                      chainId: p,
                    } = e;
                    return (0, n.jsx)(
                      m.E.div,
                      {
                        transition: { duration: 0.5, type: "spring" },
                        initial: { scale: 0.98, opacity: 0 },
                        animate: { scale: 1, opacity: 1 },
                        exit: { scale: 0.95, opacity: 0, y: "31px" },
                        layout: !0,
                        children: (0, n.jsxs)(F(), {
                          href: "/coins/"
                            .concat(c)
                            .concat(
                              "DriPoolStarted" === u ? "/fair-launch" : ""
                            ),
                          className:
                            "group flex items-center rounded-md border border-gray-100/10 bg-gray-20 py-1 pl-1 pr-2 transition-all ease-in-out-quad hover:translate-y-[-1px] hover:bg-[#424242] active:scale-[.99] md:pl-1 md:pr-2",
                          children: [
                            (0, n.jsx)("div", {
                              className:
                                "rounded-sm mr-2 rounded-tr-xs p-[7px]",
                              style: {
                                backgroundColor:
                                  D[(h.length - t - 1) % D.length],
                                boxShadow:
                                  "0px 2px 8px -1px rgba(0, 0, 0, 0.08), 0px 1px 4px 1px rgba(0, 0, 0, 0.06)",
                              },
                              children:
                                "DriPoolStarted" === u
                                  ? (0, n.jsx)(s.PoolIconThin, {
                                      className:
                                        "size-icon-lg text-[black] opacity-50",
                                    })
                                  : (0, n.jsx)(s.CryptoCoinIcon, {
                                      className:
                                        "size-icon-lg text-[black] opacity-50",
                                    }),
                            }),
                            (0, n.jsxs)(i.Tooltip, {
                              children: [
                                (0, n.jsx)(i.TooltipTrigger, {
                                  children: (0, n.jsx)(r.f, {
                                    chainId: p || NaN,
                                    className: "size-icon-md",
                                  }),
                                }),
                                (0, n.jsx)(i.TooltipContent, {
                                  side: "top",
                                  className: "pointer-events-none",
                                  children:
                                    null === (a = f.Gw[p || NaN]) ||
                                    void 0 === a
                                      ? void 0
                                      : a.name,
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className:
                                "ml-2 flex-1 overflow-hidden text-sm md:ml-2 md:flex md:text-base",
                              children: [
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex gap-1 overflow-hidden md:gap-2",
                                  children: [
                                    (0, n.jsx)("div", {
                                      className:
                                        "max-w-[10ex] truncate font-mono",
                                      style: {
                                        color: D[(h.length - t - 1) % D.length],
                                      },
                                      children: o,
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "truncate font-semibold text-gray-95",
                                      children: l,
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className: "shrink-0 truncate text-gray-70",
                                  children: [
                                    (0, n.jsx)("span", {
                                      className: "hidden md:inline-block",
                                      children: "\xa0",
                                    }),
                                    "DriPoolStarted" === u
                                      ? "has launched its fair launch pool!"
                                      : "has launched!",
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className:
                                "ml-2 flex items-center gap-1 text-gray-50 md:gap-2",
                              children: [
                                (0, n.jsx)("div", {
                                  className:
                                    "whitespace-nowrap font-mono text-sm",
                                  children: (0, n.jsx)(g, {
                                    timestamp: null == d ? void 0 : d.getTime(),
                                    short: v,
                                  }),
                                }),
                                (0, n.jsx)(s.ChevronLargeRightIcon, {
                                  className:
                                    "size-icon-md transition-transform ease-in-out-quad group-hover:translate-x-[2px]",
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      c
                    );
                  }),
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className:
                "inset-4 mx-4 -mt-1 h-3 rounded-b-md bg-gray-20 opacity-[0.5]",
            }),
            (0, n.jsx)("div", {
              className:
                "inset-4 mx-8 h-2 rounded-b-md bg-gray-20 opacity-[0.25]",
            }),
          ],
        });
      }
      function g(e) {
        let { timestamp: t, short: a = !0 } = e,
          [r, s] = (0, y.useState)((0, c.Bb)(t, { short: a }));
        return ((0, y.useEffect)(() => {
          s((0, c.Bb)(t, { short: a }));
          let e = setInterval(() => {
            s((0, c.Bb)(t, { short: a }));
          }, 6e4);
          return () => clearInterval(e);
        }, [a, t]),
        t)
          ? (0, n.jsx)(m.E.div, { children: r })
          : null;
      }
    },
    27136: function (e, t, a) {
      a.d(t, {
        f: function () {
          return p;
        },
      });
      var n = a(2067),
        r = a(15955),
        s = a(48213),
        i = a(67934),
        d = a(13027),
        o = a(57214),
        l = a(12618),
        c = a(5781),
        u = a(23123);
      let f = {
          [s.R.id]: r.ETHIcon,
          [i.c.id]: (e) =>
            (0, n.jsxs)("svg", {
              width: "60",
              height: "60",
              viewBox: "0 0 60 60",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...e,
              children: [
                (0, n.jsx)("path", {
                  d: "M54.782 43.5929V41.1729C54.782 40.7229 54.025 40.2929 52.666 39.9069L52.699 36.8929C52.699 32.2519 51.259 27.7229 48.573 23.9179C45.8775 20.1063 42.078 17.213 37.687 15.6279L37.59 15.0239C37.5397 14.7003 37.3981 14.3979 37.182 14.1519C36.9648 13.905 36.6823 13.7244 36.367 13.6309C32.1461 12.4036 27.6629 12.4036 23.442 13.6309C23.125 13.7239 22.842 13.9039 22.624 14.1509C22.407 14.3969 22.264 14.6989 22.214 15.0229L22.121 15.5859C17.703 17.1561 13.8756 20.0484 11.159 23.8699C8.45557 27.6741 7.00213 32.2249 6.99999 36.8919V39.9189C5.65999 40.3039 4.91299 40.7289 4.91299 41.1749V43.5959C4.89134 43.738 4.92227 43.883 4.99999 44.0039C5.6684 43.5098 6.4344 43.1638 7.24699 42.9889C9.31899 42.4889 11.426 42.1389 13.55 41.9429C14.1446 41.8764 14.7465 41.9362 15.3163 42.1183C15.8862 42.3005 16.4112 42.6009 16.857 42.9999C18.5037 44.4896 20.6454 45.314 22.866 45.3129H36.83C39.0505 45.3142 41.192 44.4894 42.838 42.9989C43.283 42.5978 43.8077 42.2952 44.3778 42.111C44.9478 41.9267 45.5504 41.865 46.146 41.9299C48.269 42.1249 50.376 42.4729 52.448 42.9719C53.218 43.1179 53.946 43.4339 54.578 43.8959C54.613 43.9309 54.656 43.9619 54.686 43.9959C54.7648 43.8772 54.7989 43.7344 54.782 43.5929Z",
                  fill: "#FFF100",
                }),
                (0, n.jsx)("path", {
                  d: "M16.89 38.4978C16.8712 37.9404 16.8612 37.3826 16.86 36.8248C16.867 28.4088 18.852 20.8608 22.122 15.5898C17.7043 17.1595 13.8769 20.0511 11.16 23.8718C8.45662 27.6754 7.00285 32.2254 7 36.8918V39.9188C10.2477 39.1514 13.5576 38.6761 16.89 38.4988V38.4978Z",
                  fill: "url(#paint0_linear_21663_23237)",
                }),
                (0, n.jsx)("path", {
                  d: "M52.697 36.8921C52.7015 31.6302 50.8555 26.5343 47.482 22.4961C48.9458 27.129 49.6753 31.9625 49.644 36.8211C49.644 37.6411 49.622 38.4511 49.584 39.2561C50.6198 39.4154 51.646 39.6317 52.658 39.9041L52.697 36.8921Z",
                  fill: "url(#paint1_linear_21663_23237)",
                }),
                (0, n.jsx)("path", {
                  d: "M52.448 42.9798C50.375 42.4798 48.268 42.1298 46.145 41.9338C45.5498 41.868 44.9475 41.9288 44.3775 42.1119C43.8074 42.2951 43.2825 42.5966 42.837 42.9968C41.1906 44.4871 39.0487 45.3116 36.828 45.3098H22.87C20.6506 45.3105 18.51 44.4865 16.864 42.9978C16.4193 42.5961 15.8946 42.2931 15.3245 42.1085C14.7544 41.9239 14.1517 41.862 13.556 41.9268C11.432 42.1228 9.32599 42.4718 7.25299 42.9718C6.44149 43.149 5.67629 43.4948 5.00699 43.9868C6.06699 45.5938 16.789 47.2808 29.853 47.2808C42.918 47.2808 53.635 45.5878 54.697 43.9878C54.66 43.9548 54.619 43.9238 54.588 43.8888C53.9482 43.4357 53.2183 43.1257 52.448 42.9798Z",
                  fill: "url(#paint2_radial_21663_23237)",
                }),
                (0, n.jsx)("path", {
                  d: "M29.846 19.8179L24.5 28.8409L29.846 32.1289V19.8179Z",
                  fill: "#0A0A0A",
                }),
                (0, n.jsx)("path", {
                  d: "M29.848 19.8218V32.1268L35.193 28.8428L29.848 19.8218ZM29.848 33.9148V38.2048C29.948 38.0628 35.193 30.6248 35.193 30.6218L29.848 33.9148Z",
                  fill: "#4B4D4D",
                }),
                (0, n.jsx)("path", {
                  d: "M29.848 33.9159L24.502 30.6279L29.848 38.2079V33.9139V33.9159Z",
                  fill: "#0A0A0A",
                }),
                (0, n.jsxs)("defs", {
                  children: [
                    (0, n.jsxs)("linearGradient", {
                      id: "paint0_linear_21663_23237",
                      x1: "14.561",
                      y1: "39.9188",
                      x2: "14.561",
                      y2: "15.5898",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, n.jsx)("stop", { "stop-color": "#EDCF00" }),
                        (0, n.jsx)("stop", {
                          offset: "0.33",
                          stopColor: "#F0D500",
                        }),
                        (0, n.jsx)("stop", {
                          offset: "0.77",
                          stopColor: "#F9E500",
                        }),
                        (0, n.jsx)("stop", {
                          offset: "1",
                          stopColor: "#FFF100",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("linearGradient", {
                      id: "paint1_linear_21663_23237",
                      x1: "50.089",
                      y1: "40.0961",
                      x2: "50.089",
                      y2: "22.4961",
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        (0, n.jsx)("stop", { stopColor: "#EDCF00" }),
                        (0, n.jsx)("stop", {
                          offset: "0.59",
                          stopColor: "#F7E100",
                        }),
                        (0, n.jsx)("stop", {
                          offset: "1",
                          stopColor: "#FFF100",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("radialGradient", {
                      id: "paint2_radial_21663_23237",
                      cx: "0",
                      cy: "0",
                      r: "1",
                      gradientUnits: "userSpaceOnUse",
                      gradientTransform:
                        "translate(7.70099 56.5388) scale(18.5398 18.4136)",
                      children: [
                        (0, n.jsx)("stop", { stopColor: "#FFF100" }),
                        (0, n.jsx)("stop", {
                          offset: "0.23",
                          stopColor: "#F9E500",
                        }),
                        (0, n.jsx)("stop", {
                          offset: "0.67",
                          stopColor: "#F0D500",
                        }),
                        (0, n.jsx)("stop", {
                          offset: "1",
                          stopColor: "#EDCF00",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          [d.y.id]: (e) =>
            (0, n.jsxs)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...e,
              children: [
                (0, n.jsx)("path", {
                  d: "M3.90417 6.03991V9.95991C3.90417 10.2119 4.03617 10.4399 4.25617 10.5679L7.65218 12.5279C7.86818 12.6519 8.13618 12.6519 8.35218 12.5279L11.7482 10.5679C11.9642 10.4439 12.1002 10.2119 12.1002 9.95991V6.03991C12.1002 5.78791 11.9682 5.55991 11.7482 5.43191L8.35218 3.47191C8.13618 3.34791 7.86818 3.34791 7.65218 3.47191L4.25617 5.43191C4.04017 5.55591 3.90817 5.78791 3.90817 6.03991H3.90417Z",
                  fill: "#213147",
                }),
                (0, n.jsx)("path", {
                  d: "M8.74001 8.76005L8.25601 10.0881C8.24401 10.1241 8.24401 10.1641 8.25601 10.2041L9.08801 12.4881L10.052 11.9321L8.89601 8.76005C8.86801 8.68805 8.76801 8.68805 8.74001 8.76005Z",
                  fill: "#12AAFF",
                }),
                (0, n.jsx)("path", {
                  d: "M9.71205 6.52812C9.68405 6.45612 9.58405 6.45612 9.55605 6.52812L9.07205 7.85612C9.06005 7.89212 9.06005 7.93212 9.07205 7.97212L10.436 11.7121L11.4 11.1561L9.71205 6.53212V6.52812Z",
                  fill: "#12AAFF",
                }),
                (0, n.jsx)("path", {
                  d: "M8.00005 3.62C8.02405 3.62 8.04805 3.628 8.06805 3.64L11.7401 5.76C11.7841 5.784 11.8081 5.832 11.8081 5.88V10.12C11.8081 10.168 11.7801 10.216 11.7401 10.24L8.06805 12.36C8.04805 12.372 8.02405 12.38 8.00005 12.38C7.97605 12.38 7.95205 12.372 7.93205 12.36L4.26005 10.24C4.21605 10.216 4.19205 10.168 4.19205 10.12V5.876C4.19205 5.828 4.22005 5.78 4.26005 5.756L7.93205 3.636C7.95205 3.624 7.97605 3.616 8.00005 3.616V3.62ZM8.00005 3C7.86805 3 7.74005 3.032 7.62005 3.1L3.94805 5.22C3.71205 5.356 3.56805 5.604 3.56805 5.876V10.116C3.56805 10.388 3.71205 10.636 3.94805 10.772L7.62005 12.892C7.73605 12.96 7.86805 12.992 8.00005 12.992C8.13205 12.992 8.26005 12.96 8.38005 12.892L12.0521 10.772C12.2881 10.636 12.4321 10.388 12.4321 10.116V5.876C12.4321 5.604 12.2881 5.356 12.0521 5.22L8.37605 3.1C8.26005 3.032 8.12805 3 7.99605 3H8.00005Z",
                  fill: "#9DCCED",
                }),
                (0, n.jsx)("path", {
                  d: "M5.56818 11.7161L5.90818 10.7881L6.58818 11.3521L5.95218 11.9361L5.56818 11.7161Z",
                  fill: "#213147",
                }),
                (0, n.jsx)("path", {
                  d: "M7.68825 5.57578H6.75625C6.68825 5.57578 6.62425 5.61978 6.60025 5.68378L4.60425 11.1558L5.56825 11.7118L7.76825 5.68378C7.78825 5.62778 7.74825 5.57178 7.69225 5.57178L7.68825 5.57578Z",
                  fill: "white",
                }),
                (0, n.jsx)("path", {
                  d: "M9.32027 5.57578H8.38827C8.32027 5.57578 8.25627 5.61978 8.23227 5.68378L5.95227 11.9318L6.91627 12.4878L9.39627 5.68378C9.41627 5.62778 9.37627 5.57178 9.32027 5.57178V5.57578Z",
                  fill: "white",
                }),
              ],
            }),
          [o.F.id]: () =>
            (0, n.jsx)(r.ETHIcon, {
              style: { filter: "contrast(0.5)", opacity: 0.75 },
            }),
          [l.d.id]: r.BlastIcon,
          [c.A.id]: r.BlastIcon,
          [u.u.id]: r.BaseIcon,
        },
        p = (e) => {
          let { chainId: t, ...a } = e,
            r = f[t];
          return r ? (0, n.jsx)(r, { ...a, cl: a.className }) : null;
        };
    },
    20608: function (e, t, a) {
      a.d(t, {
        N: function () {
          return i;
        },
      });
      var n = a(2067),
        r = a(96560),
        s = a(26871);
      let i = (e) => {
        let {
          address: t = "",
          className: a = "",
          imageClassName: i = "",
          size: d,
        } = e;
        return (0, n.jsx)("div", {
          className: (0, r.cn)("overflow-hidden rounded-full bg-gray-50", a),
          style: d
            ? { width: "".concat(d, "px"), height: "".concat(d, "px") }
            : void 0,
          children: (0, n.jsx)("img", {
            src: (0, s.qF)(t, { width: d, height: d }, !0) || void 0,
            alt: "",
            className: (0, r.cn)(
              "object-cover blur-[8px] contrast-125 saturate-200",
              i
            ),
            style: d
              ? {
                  filter: "blur("
                    .concat(d / 5, "px) contrast(1.25) saturate(")
                    .concat(
                      d <= 50 ? 2 : d >= 100 ? 1.5 : 2 - (d - 50) / 100,
                      ")"
                    ),
                }
              : void 0,
          }),
        });
      };
    },
    81314: function (e, t, a) {
      a.d(t, {
        Av: function () {
          return d;
        },
        dD: function () {
          return i;
        },
        rx: function () {
          return o;
        },
      });
      var n = a(15039);
      let r = !1,
        s = (e) => {
          let [t, a] = (0, n.useState)(() =>
              r ? window.innerWidth <= e : void 0
            ),
            s = (0, n.useRef)(t);
          s.current = t;
          let i = (0, n.useCallback)((e) => {
            e.matches ? a(!0) : a(!1);
          }, []);
          return (
            (0, n.useEffect)(() => {
              void 0 === s.current && a(window.innerWidth <= e), (r = !0);
              let t = window.matchMedia("(max-width: ".concat(e, "px)"));
              return (
                t.addListener(i), t.matches && a(!0), () => t.removeListener(i)
              );
            }, [i, e]),
            t
          );
        },
        i = () => s(600),
        d = () => s(960),
        o = () => s(768);
      t.ZP = s;
    },
    65031: function (e, t, a) {
      a.d(t, {
        Bb: function () {
          return o;
        },
        p6: function () {
          return d;
        },
      });
      var n = a(35629),
        r = a(23053),
        s = a(25254);
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
        d = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "long",
            a = e;
          if (!e) return;
          a instanceof Date || (a = (0, n.D)(a));
          let s = (0, r.WU)(a, i[t] || t);
          return "localDate" === t ? s.replace(/, \d{4}$/, "") : s;
        };
      function o(e) {
        let { short: t } =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { short: !1 },
          a = (0, s.D)(e || 0);
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
    77297: function (e, t, a) {
      a.d(t, {
        Bu: function () {
          return o;
        },
        FO: function () {
          return r;
        },
        uf: function () {
          return d;
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
        d = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            {
              isWei: a,
              coinDecimals: s = a ? 18 : void 0,
              decimals: o = 4,
              abbreviate: l = !1,
              rmDecimalsThreshold: c = 1e3,
              subscriptZeros: u = !1,
            } = t;
          if (null == e) return "";
          let f = s ? Number((0, n.b)(e, s)) : Number(e);
          c && f > c && (f = Math.round(f));
          let p = Math.round(f * 10 ** o) / 10 ** o,
            [C, x] = p.toString().split(".");
          if (u && 0 !== e) {
            let [e, t] = f.toFixed(40).split(".");
            if ("0" === e) {
              var b;
              let e =
                null === (b = t.match(/^0+/)) || void 0 === b
                  ? void 0
                  : b[0].length;
              if (e >= 5) {
                let a = Number(t.slice(e)).toPrecision(o),
                  n = "";
                for (let e = 0; e < a.length; e++) {
                  let t = a[e];
                  if ("." !== t && (n += t).length === o) break;
                }
                return "0.0".concat(i(e)).concat(n);
              }
            }
          }
          if (
            (0 === p &&
              p !== f &&
              (x = f
                .toLocaleString("en-US", { maximumFractionDigits: 15 })
                .split(".")[1]),
            p > 1 && x && !u)
          )
            x = d(p - Number(C), {
              ...t,
              isWei: !1,
              coinDecimals: void 0,
            }).split(".")[1];
          else {
            let e = null == x ? void 0 : x.split("");
            if (e && e.length > o) {
              let t = e.findIndex((e) => "0" !== e),
                a = Array(t).fill("0").join("");
              x =
                -1 === t
                  ? e.slice(0, o).join("")
                  : [a, ...e.slice(t).slice(0, Math.max(1, o - t + 1))].join(
                      ""
                    );
            }
          }
          let m =
            l && ("number" != typeof l || Number(C) > l)
              ? r(Number(C))
              : Number(C).toLocaleString();
          return (
            /[a-zA-Z]/.test(m) && (x = void 0),
            [m, x].filter((e) => null != e).join(".")
          );
        },
        o = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          return String(e).padStart(t, "0");
        };
    },
    36565: function (e, t, a) {
      a.d(t, {
        DZ: function () {
          return p;
        },
        Gw: function () {
          return f;
        },
        rq: function () {
          return x;
        },
        zK: function () {
          return C;
        },
      });
      var n = a(48213),
        r = a(5781),
        s = a(23123),
        i = a(13027),
        d = a(12618),
        o = a(57214),
        l = a(18507),
        c = a(33731),
        u = a(56837);
      let f = [n.R, r.A, s.u, !u.Y && [i.y, d.d, o.F, l.L, c.Z], !1]
          .flat()
          .filter(Boolean),
        p = [n.R, s.u, !u.Y && [i.y, d.d, o.F, l.L, c.Z], !1]
          .flat()
          .filter(Boolean),
        C = (e) =>
          f.find((t) => {
            let { id: a } = t;
            return a === e;
          }),
        x = (e) =>
          Object.entries(e).reduce((e, t) => {
            let [a, n] = t;
            return f.map((e) => e.id).includes(Number(a))
              ? { ...e, [a]: n }
              : e;
          }, {});
    },
    20886: function (e, t, a) {
      a.d(t, {
        Er: function () {
          return b;
        },
        GG: function () {
          return A;
        },
        Mr: function () {
          return h;
        },
        Ns: function () {
          return F;
        },
        aK: function () {
          return y;
        },
        gr: function () {
          return x;
        },
        py: function () {
          return D;
        },
        qK: function () {
          return m;
        },
      });
      var n = a(44181),
        r = a(48213),
        s = a(23123),
        i = a(5781),
        d = a(57214),
        o = a(12618),
        l = a(18507),
        c = a(13027),
        u = a(33731),
        f = a(67934),
        p = a(36565),
        C = a(56837);
      let x = 4294967295,
        b = {
          durationInMinutes: C.Y ? 240 : 5,
          poolVestingInSeconds: C.Y ? 14400 : 600,
          poolPerTxnMinWei: (0, n.f)("0.0001").toString(),
        },
        m = 20n,
        h = 100n,
        F = {
          minBuyAbsoluteBasisPoints: 50n,
          minSellAbsoluteBasisPoints: 50n,
          buyProportionBasisPoints: 1000n,
          sellProportionBasisPoints: 1000n,
          taxPeriodInDays: 30n,
          fairLaunchBasisPoints: 1000n,
        },
        y = { basisPoints: 2000n, durationInBlocks: 3n },
        A = 5n,
        D = {
          ...(0, p.rq)({
            [r.R.id]: {
              metadropTreasury: "0xDE3FF2A50bd1BA1bd6a608EA0138946Dddf595bc",
              unicryptV3: {
                address: "0xFD235968e65B0990584585763f837A5b5330e6DE",
                deploymentFee: (0, n.f)("0.1"),
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
              deploymentFee: (0, n.f)("0.2"),
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
            [s.u.id]: {
              metadropTreasury: "0xabec1e70DFE1EA51Fc95e6F699476AbFC2798f96",
              uniswapV2Router: {
                address: "0x8e41F439417261aB62EcD0Bf873Ff93eb0b046e4",
              },
              weth: { address: "0x4200000000000000000000000000000000000006" },
              deploymentFee: (0, n.f)("0.2"),
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
            [i.A.id]: {
              weth: { address: "0x4300000000000000000000000000000000000004" },
              metadropTreasury: "0x046cC4b7561F5CbAa861747f9aAb28477cFa8862",
              uniswapV2Router: {
                address: "0x8e41F439417261aB62EcD0Bf873Ff93eb0b046e4",
              },
              uniswapV2Factory: {
                address: "0xb4A7D971D0ADea1c73198C97d7ab3f9CE4aaFA13",
              },
              deploymentFee: (0, n.f)("0.2"),
              sablierV2LockupDynamic: {
                address: "0xDf578C2c70A86945999c65961417057363530a1c",
              },
              sablierV2LockupLinear: {
                address: "0xcb099EfC90e88690e287259410B9AE63e1658CC6",
              },
            },
            [d.F.id]: {
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
              deploymentFee: (0, n.f)("0.00002"),
              sablierV2LockupDynamic: {
                address: "0xc9940AD8F43aAD8e8f33A4D5dbBf0a8F7FF4429A",
              },
              sablierV2LockupLinear: {
                address: "0x3b0BaF8d25a7cC7E4590247243df54aDbFba78aa",
              },
            },
            [o.d.id]: {
              metadropTreasury: "0x046cC4b7561F5CbAa861747f9aAb28477cFa8862",
              uniswapV2Router: {
                address: "0x0c6579452a0C0Fae133B4f1AA744A7c1763f70cd",
              },
              uniswapV2Factory: {
                address: "0x1ab6334F6B2077bb8B3Cb126fac396Ed1F59b3Fd",
              },
              weth: { address: "0x4200000000000000000000000000000000000023" },
              deploymentFee: (0, n.f)("0.00002"),
              sablierV2LockupDynamic: {
                address: "0xC4CFE91FC326741bCD582F804C15fde2eb226475",
              },
              sablierV2LockupLinear: {
                address: "0x3F530bB78F27910Bb42B3907bf8A12DC30EB351C",
              },
            },
            [l.L.id]: {
              metadropTreasury: "0x046cC4b7561F5CbAa861747f9aAb28477cFa8862",
              uniswapV2Router: {
                address: "0x8b713a85b3bcb744d4AB353a506723c41EAdCC86",
              },
              weth: { address: "0x4200000000000000000000000000000000000006" },
              deploymentFee: (0, n.f)("0.00002"),
              sablierV2LockupDynamic: {
                address: "0xf46d5fa9bfc964e8d06846c8739aec69bc06344d",
              },
              sablierV2LockupLinear: {
                address: "0xbd7aaa2984c0a887e93c66baae222749883763d3",
              },
            },
            [c.y.id]: {
              metadropTreasury: "0x0000000000000000000000000000000000000000",
              uniswapV2Router: {
                address: "0x0000000000000000000000000000000000000000",
              },
              weth: { address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1" },
              deploymentFee: (0, n.f)("0.2"),
            },
            [u.Z.id]: {
              metadropTreasury: "0x046cC4b7561F5CbAa861747f9aAb28477cFa8862",
              weth: { address: "0x1baBFb2Fed96b1A8A050b04C402E46b3D468C650" },
              deploymentFee: (0, n.f)("0.00002"),
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
          [f.c.id]: {
            dripoolFactory: {
              address: "0x8CeA85eC7f3D314c4d144e34F2206C8Ac0bbadA1",
            },
            metadropTreasury: "0xDE3FF2A50bd1BA1bd6a608EA0138946Dddf595bc",
            unicryptV3: {
              address: "0xFD235968e65B0990584585763f837A5b5330e6DE",
              deploymentFee: (0, n.f)("0.1"),
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
            deploymentFee: (0, n.f)("0.2"),
            sablierV2LockupDynamic: {
              address: "0x7CC7e125d83A581ff438608490Cc0f7bDff79127",
            },
            sablierV2LockupLinear: {
              address: "0xAFb979d9afAd1aD27C5eFf4E27226E3AB9e5dCC9",
            },
          },
        };
    },
    76859: function (e, t, a) {
      var n = a(16611);
      a.o(n, "CoinType") &&
        a.d(t, {
          CoinType: function () {
            return n.CoinType;
          },
        }),
        a.o(n, "DeployStatus") &&
          a.d(t, {
            DeployStatus: function () {
              return n.DeployStatus;
            },
          }),
        a.o(n, "PoolStart") &&
          a.d(t, {
            PoolStart: function () {
              return n.PoolStart;
            },
          }),
        a(29180);
    },
    29180: function (e, t, a) {
      a(18240);
    },
  },
]);
