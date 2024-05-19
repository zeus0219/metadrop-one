(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8232],
  {
    61200: function (e, t, s) {
      "use strict";
      var i = s(90275),
        n = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var s,
          r,
          l,
          a,
          o,
          c,
          d,
          u,
          m = !1;
        t || (t = {}), (l = t.debug || !1);
        try {
          if (
            ((o = i()),
            (c = document.createRange()),
            (d = document.getSelection()),
            ((u = document.createElement("span")).textContent = e),
            (u.ariaHidden = "true"),
            (u.style.all = "unset"),
            (u.style.position = "fixed"),
            (u.style.top = 0),
            (u.style.clip = "rect(0, 0, 0, 0)"),
            (u.style.whiteSpace = "pre"),
            (u.style.webkitUserSelect = "text"),
            (u.style.MozUserSelect = "text"),
            (u.style.msUserSelect = "text"),
            (u.style.userSelect = "text"),
            u.addEventListener("copy", function (s) {
              if ((s.stopPropagation(), t.format)) {
                if ((s.preventDefault(), void 0 === s.clipboardData)) {
                  l && console.warn("unable to use e.clipboardData"),
                    l && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var i = n[t.format] || n.default;
                  window.clipboardData.setData(i, e);
                } else
                  s.clipboardData.clearData(),
                    s.clipboardData.setData(t.format, e);
              }
              t.onCopy && (s.preventDefault(), t.onCopy(s.clipboardData));
            }),
            document.body.appendChild(u),
            c.selectNodeContents(u),
            d.addRange(c),
            !document.execCommand("copy"))
          )
            throw Error("copy command was unsuccessful");
          m = !0;
        } catch (i) {
          l && console.error("unable to copy using execCommand: ", i),
            l && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (m = !0);
          } catch (i) {
            l && console.error("unable to copy using clipboardData: ", i),
              l && console.error("falling back to prompt"),
              (s =
                "message" in t
                  ? t.message
                  : "Copy to clipboard: #{key}, Enter"),
              (r =
                (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C"),
              (a = s.replace(/#{\s*key\s*}/g, r)),
              window.prompt(a, e);
          }
        } finally {
          d &&
            ("function" == typeof d.removeRange
              ? d.removeRange(c)
              : d.removeAllRanges()),
            u && document.body.removeChild(u),
            o();
        }
        return m;
      };
    },
    43734: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 15332));
    },
    80054: function (e, t, s) {
      "use strict";
      var i = s(2067),
        n = s(69436),
        r = s(60107),
        l = s(44544),
        a = s(74354),
        o = s(3476),
        c = s(15039),
        d = s(83297),
        u = s(36221);
      t.Z = function (e) {
        var t;
        let { coin: s, title: m, children: h } = e,
          x = (null == s ? void 0 : s.id) || "",
          { data: p } = (0, l.Z)(),
          { mutate: f } = (0, r.Z)(x),
          g = (0, c.useMemo)(() => {
            var e;
            return (0, o.dZ)({
              deployerAddress:
                null == p
                  ? void 0
                  : null === (e = p.user) || void 0 === e
                  ? void 0
                  : e.ethAddress,
            });
          }, [
            null == p
              ? void 0
              : null === (t = p.user) || void 0 === t
              ? void 0
              : t.ethAddress,
          ]),
          v = (0, c.useCallback)(
            async (e) => {
              let {
                  projectBuyTaxPercent: t,
                  projectSellTaxPercent: s,
                  maxTokensPerWalletPercent: i,
                  maxTokensPerTxnPercent: r,
                  ...l
                } = e,
                a = { ...l };
              void 0 !== t &&
                (a.projectBuyTaxBasisPoints =
                  null === t ? null : Math.round(100 * t)),
                void 0 !== s &&
                  (a.projectSellTaxBasisPoints =
                    null === s ? null : Math.round(100 * s)),
                void 0 !== i &&
                  (a.maxTokensPerWalletBasisPoints =
                    null === i ? null : Math.round(100 * i)),
                void 0 !== r &&
                  (a.maxTokensPerTxnBasisPoints =
                    null === r ? null : Math.round(100 * r)),
                !1 === e.buyTaxEnabled && (a.projectBuyTaxBasisPoints = null),
                !1 === e.sellTaxEnabled && (a.projectSellTaxBasisPoints = null);
              let { coin: o, notice: c } = await (0, n.Z)(
                "/v1/coins/".concat(x),
                { method: "PATCH", body: (0, u.qC)(a) }
              );
              c && d.A.info(c), f({ coin: o });
            },
            [x, f]
          );
        return (0, i.jsx)(a.uC, {
          schema: g,
          completeResource: s,
          resourceReady: !!s,
          onSubmit: v,
          children: () => (0, i.jsx)(i.Fragment, { children: h }),
        });
      };
    },
    13633: function (e, t, s) {
      "use strict";
      s.d(t, {
        _: function () {
          return c;
        },
      });
      var i = s(2067),
        n = s(2384),
        r = s(15955),
        l = s(96560),
        a = s(7263),
        o = s(60171);
      function c(e) {
        var t;
        let { current: s } = e,
          c = (0, o.useParams)().coinId,
          { links: d } = (0, a.G)(),
          u = (null === (t = d[0]) || void 0 === t ? void 0 : t.links) || [];
        if (0 === u.length) return null;
        let m = u.findIndex((e) => {
            var t, i;
            return null === (i = e.as) || void 0 === i
              ? void 0
              : null === (t = i.includes) || void 0 === t
              ? void 0
              : t.call(i, s);
          }),
          h = u[m - 1],
          x = u[m + 1] || {
            href: "/app/coins/[coinId]/review-and-launch?coinId=".concat(c),
            as: "/app/coins/".concat(c, "/review-and-launch"),
            label: "Review & Launch",
          };
        return (
          null == h || delete h.Icon,
          null == x || delete x.Icon,
          (0, i.jsxs)("div", {
            className: (0, l.cn)(
              "col-span-2 col-start-2 mt-4 flex justify-between px-3",
              !h && "justify-end"
            ),
            children: [
              h &&
                (0, i.jsx)(n.default, {
                  type: "secondary",
                  ...h,
                  leftIcon: (0, i.jsx)(r.ArrowLeftIcon, {}),
                  htmlType: "button",
                  children: h.label,
                }),
              x &&
                (0, i.jsx)(n.default, {
                  type: "secondary",
                  ...x,
                  rightIcon: (0, i.jsx)(r.ArrowRightIcon, {}),
                  htmlType: "button",
                  children: x.label,
                }),
            ],
          })
        );
      }
    },
    15332: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return I;
          },
        });
      var i = s(2067),
        n = s(52464),
        r = s.n(n),
        l = s(2384),
        a = s(42747),
        o = s(15955),
        c = s(33862),
        d = s(74354),
        u = s(65130),
        m = s(10025),
        h = s(95121),
        x = s(96560),
        p = s(69436),
        f = s(74734),
        g = s(30156),
        v = s(60107),
        j = s(3476),
        b = s(637),
        w = s(28967),
        y = s(60171),
        N = s(15039),
        C = s(95599),
        k = s(83297),
        L = s(80054),
        M = s(13633),
        Z = s(88416);
      let T = (e) => {
          let {
            label: t,
            children: s,
            className: n,
            innerClassName: r = "",
          } = e;
          return (0, i.jsxs)("div", {
            className: n,
            children: [
              (0, i.jsx)(Z.e, { className: "bg-gray-20 px-4", label: t }),
              (0, i.jsx)("div", {
                className: (0, x.cn)(
                  "rounded-md rounded-tl-none bg-gray-20 px-4 pb-[12px] pt-2 text-gray-95",
                  r
                ),
                children: s,
              }),
            ],
          });
        },
        V = j.Mu.pick([
          "telegram",
          "telegramVerificationEnabled",
          "twitter",
          "twitterVerificationEnabled",
          "website",
          "websiteVerificationEnabled",
        ]);
      function I(e) {
        let { params: t } = e,
          { data: s, isLoading: n, mutate: r } = (0, v.Z)(t.coinId),
          l = null == s ? void 0 : s.coin,
          a = (0, y.useRouter)();
        (0, N.useEffect)(() => {
          n || s || (k.A.error("Coin not found"), a.push("/app/coins"));
        }, [n, s, a]);
        let o = !!(null == l ? void 0 : l.erc20Address),
          c = (0, N.useMemo)(() => (0, h.R)(l, V.describe().fields), [l]);
        return o
          ? (0, i.jsx)(d.uC, {
              schema: V,
              completeResource: c,
              onSubmit: async (e) => {
                let { coin: s } = await (0, p.Z)(
                  "/v1/coins/".concat(t.coinId),
                  { method: "PATCH", body: e }
                );
                r({ coin: s });
              },
              children: () => (0, i.jsx)(E, { coin: l, postDeploy: !0 }),
            })
          : (0, i.jsx)(L.Z, {
              title: "Socials",
              coin: l,
              children: (0, i.jsx)(E, { coin: l }),
            });
      }
      function E(e) {
        let { coin: t, postDeploy: s = !1 } = e,
          n = null == t ? void 0 : t.id,
          { mutate: d } = (0, v.Z)(n),
          [, h] = (0, C.Z)(),
          x = (0, N.useMemo)(() => {
            let e = window.screen.width / 2 - 250,
              t = window.screen.height / 2 - 400;
            return "width="
              .concat(500, ",height=")
              .concat(800, ",left=")
              .concat(e, ",top=")
              .concat(
                t,
                ",menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes"
              );
          }, []);
        return (0, i.jsxs)("div", {
          className: "jsx-9c9c872e4477df60",
          children: [
            (0, i.jsx)(r(), {
              id: "9c9c872e4477df60",
              children:
                ".verifiedInput>div.input{background-color:rgb(29,155,240)!important}.verifiedInput>div>div{color:white!important}.verifiedInput>div>input{color:var(--gray-95)!important}",
            }),
            (0, i.jsxs)(g.U, {
              title: "Socials",
              subtitle: s
                ? "Update your Telegram, Twitter, and website links."
                : "Setup your Telegram, Twitter, and website links. These links will be shown in the comments of your smart contract.",
              tipIcon: o.MagicHandsIcon,
              tipTitle: s ? void 0 : "Gain trust",
              tipText: s
                ? void 0
                : 'Verifying your social links can increase the credibility of your project. Links will be marked as "verified" or "unverified" in your contract\'s comments.',
              children: [
                (0, i.jsxs)("div", {
                  className: "jsx-9c9c872e4477df60 rounded-md bg-gray-20 p-2",
                  children: [
                    (0, i.jsx)("div", {
                      className:
                        "jsx-9c9c872e4477df60 mb-2 flex flex-col gap-2",
                      children: (0, i.jsx)(c.Z, {
                        id: "taxes-notice2",
                        children: s
                          ? "Changes you make will be updated only on your coin's profile."
                          : "After launching your coin, you'll be able to update social on your coin profile, but not in contract comments.",
                      }),
                    }),
                    (0, i.jsxs)(a.Z, {
                      bg: "bg-gray-10",
                      style: { "--joint-height": "10px" },
                      children: [
                        (0, i.jsx)("div", {
                          className: "jsx-9c9c872e4477df60 rounded-sm  p-0",
                          children: (0, i.jsxs)("div", {
                            className: "jsx-9c9c872e4477df60 p-2",
                            children: [
                              (0, i.jsxs)("div", {
                                className:
                                  "jsx-9c9c872e4477df60 flex items-center justify-between pl-2 pr-1",
                                children: [
                                  (0, i.jsxs)("div", {
                                    className:
                                      "jsx-9c9c872e4477df60 flex items-center gap-2",
                                    children: [
                                      (0, i.jsx)(o.TelegramIcon, {
                                        className: "h-4 w-4",
                                      }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "jsx-9c9c872e4477df60 flex items-baseline gap-2",
                                        children: [
                                          "Telegram",
                                          (0, i.jsx)("span", {
                                            className:
                                              "jsx-9c9c872e4477df60 text-sm text-muted",
                                            children: "Optional",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)(m.Z, {
                                    checkedLabel: "Verify",
                                    uncheckedLabel: "Don't verify",
                                    name: "telegramVerificationEnabled",
                                  }),
                                ],
                              }),
                              (0, i.jsx)("div", {
                                className: "jsx-9c9c872e4477df60 pt-4",
                                children: (0, i.jsx)(b.M, {
                                  mode: "wait",
                                  initial: !1,
                                  children: (
                                    null == t
                                      ? void 0
                                      : t.telegramVerificationEnabled
                                  )
                                    ? t.telegramVerified
                                      ? (0, i.jsxs)(
                                          w.E.div,
                                          {
                                            ...(0, f.g)(),
                                            className: "relative m-2",
                                            children: [
                                              (0, i.jsx)(T, {
                                                innerClassName:
                                                  "rounded-xs rounded-tl-none",
                                                label: "Telegram",
                                                children: (0, i.jsxs)("div", {
                                                  className:
                                                    "jsx-9c9c872e4477df60 flex justify-between",
                                                  children: [
                                                    "https://t.me/",
                                                    t.telegram,
                                                    (0, i.jsx)(l.default, {
                                                      type: "ghost",
                                                      leftIcon: (0, i.jsx)(
                                                        o.CopyIcon,
                                                        {}
                                                      ),
                                                      className:
                                                        "h-5 !text-highlight",
                                                      onClick: () => {
                                                        h(
                                                          "https://t.me/".concat(
                                                            t.telegram
                                                          )
                                                        ),
                                                          k.A.success(
                                                            "Telegram link was copied to clipboard"
                                                          );
                                                      },
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              (0, i.jsx)(l.default, {
                                                type: "ghost",
                                                className:
                                                  "absolute right-4 top-1 !text-highlight",
                                                onClick: async () => {
                                                  await (0, p.Z)(
                                                    "/v1/coins/".concat(n),
                                                    {
                                                      method: "PATCH",
                                                      body: {
                                                        telegramVerified: !1,
                                                      },
                                                    }
                                                  ),
                                                    d();
                                                },
                                                children: "Replace",
                                              }),
                                            ],
                                          },
                                          "cp"
                                        )
                                      : (0, i.jsx)(
                                          w.E.div,
                                          {
                                            ...(0, f.g)(),
                                            children: (0, i.jsx)(H, {
                                              coin: t,
                                            }),
                                          },
                                          "instr"
                                        )
                                    : (0, i.jsx)(
                                        w.E.div,
                                        {
                                          ...(0, f.g)(),
                                          children: (0, i.jsx)(u.u, {
                                            name: "telegram",
                                            label: null,
                                            inlineLabel: "t.me/",
                                            className: "mx-2",
                                          }),
                                        },
                                        "man"
                                      ),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "jsx-9c9c872e4477df60 rounded-sm  p-0",
                          children: (0, i.jsxs)("div", {
                            className: "jsx-9c9c872e4477df60 p-2",
                            children: [
                              (0, i.jsxs)("div", {
                                className:
                                  "jsx-9c9c872e4477df60 flex items-center justify-between pl-2 pr-1",
                                children: [
                                  (0, i.jsxs)("div", {
                                    className:
                                      "jsx-9c9c872e4477df60 flex items-center gap-2",
                                    children: [
                                      (0, i.jsx)(o.TwitterIcon, {
                                        className: "h-4 w-4",
                                      }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "jsx-9c9c872e4477df60 flex items-baseline gap-2",
                                        children: [
                                          "Twitter",
                                          (0, i.jsx)("span", {
                                            className:
                                              "jsx-9c9c872e4477df60 text-sm text-muted",
                                            children: "Optional",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)(m.Z, {
                                    checkedLabel: "Verify",
                                    uncheckedLabel: "Don't verify",
                                    name: "twitterVerificationEnabled",
                                  }),
                                ],
                              }),
                              (0, i.jsx)("div", {
                                className: "jsx-9c9c872e4477df60 pt-4",
                                children: (0, i.jsx)(b.M, {
                                  mode: "wait",
                                  initial: !1,
                                  children: (
                                    null == t
                                      ? void 0
                                      : t.twitterVerificationEnabled
                                  )
                                    ? (0, i.jsx)(
                                        w.E.div,
                                        {
                                          ...(0, f.g)(),
                                          className:
                                            "flex min-h-[81px] w-full flex-col justify-center",
                                          children: t.twitterVerified
                                            ? (0, i.jsxs)("div", {
                                                className:
                                                  "jsx-9c9c872e4477df60 relative m-2",
                                                children: [
                                                  (0, i.jsx)(T, {
                                                    innerClassName:
                                                      "rounded-xs rounded-tl-none",
                                                    label: "Twitter",
                                                    children: (0, i.jsxs)(
                                                      "div",
                                                      {
                                                        className:
                                                          "jsx-9c9c872e4477df60 flex justify-between",
                                                        children: [
                                                          "https://twitter.com/",
                                                          t.twitter,
                                                          (0, i.jsx)(
                                                            l.default,
                                                            {
                                                              type: "ghost",
                                                              leftIcon: (0,
                                                              i.jsx)(
                                                                o.CopyIcon,
                                                                {}
                                                              ),
                                                              className:
                                                                "h-5 !text-highlight",
                                                              onClick: () => {
                                                                h(
                                                                  "https://twitter.com/".concat(
                                                                    t.twitter
                                                                  )
                                                                ),
                                                                  k.A.success(
                                                                    "Twitter link was copied to clipboard"
                                                                  );
                                                              },
                                                            }
                                                          ),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                  (0, i.jsx)(l.default, {
                                                    type: "ghost",
                                                    className:
                                                      "absolute right-4 top-1 !text-highlight",
                                                    onClick: () =>
                                                      window.open(
                                                        "/app/coins/".concat(
                                                          n,
                                                          "/twitter-verification"
                                                        ),
                                                        "verify-twitter",
                                                        x
                                                      ),
                                                    children: "Replace",
                                                  }),
                                                ],
                                              })
                                            : (0, i.jsx)(
                                                w.E.div,
                                                {
                                                  ...(0, f.g)(),
                                                  children: (0, i.jsx)(S, {
                                                    coinId: n,
                                                    specs: x,
                                                  }),
                                                },
                                                "ins"
                                              ),
                                        },
                                        "on"
                                      )
                                    : (0, i.jsx)(
                                        w.E.div,
                                        {
                                          ...(0, f.g)(),
                                          children: (0, i.jsx)(u.u, {
                                            name: "twitter",
                                            label: null,
                                            inlineLabel: "twitter.com/",
                                            className: "mx-2",
                                          }),
                                        },
                                        "abs"
                                      ),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "jsx-9c9c872e4477df60 rounded-sm  p-0",
                          children: (0, i.jsxs)("div", {
                            className: "jsx-9c9c872e4477df60 p-2",
                            children: [
                              (0, i.jsxs)("div", {
                                className:
                                  "jsx-9c9c872e4477df60 flex items-center justify-between pl-2 pr-1",
                                children: [
                                  (0, i.jsxs)("div", {
                                    className:
                                      "jsx-9c9c872e4477df60 flex items-center gap-2",
                                    children: [
                                      (0, i.jsx)(o.WebsiteIcon, {
                                        className: "h-4 w-4",
                                      }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "jsx-9c9c872e4477df60 flex items-baseline gap-2",
                                        children: [
                                          "Website",
                                          (0, i.jsx)("span", {
                                            className:
                                              "jsx-9c9c872e4477df60 text-sm text-muted",
                                            children: "Optional",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)(m.Z, {
                                    checkedLabel: "Verify",
                                    uncheckedLabel: "Don't verify",
                                    name: "websiteVerificationEnabled",
                                  }),
                                ],
                              }),
                              (0, i.jsx)("div", {
                                className: "jsx-9c9c872e4477df60 pt-4",
                                children: (0, i.jsx)(b.M, {
                                  mode: "wait",
                                  initial: !1,
                                  children: (
                                    null == t
                                      ? void 0
                                      : t.websiteVerificationEnabled
                                  )
                                    ? t.websiteVerified
                                      ? (0, i.jsxs)(
                                          w.E.div,
                                          {
                                            ...(0, f.g)(),
                                            children: [
                                              (0, i.jsx)(T, {
                                                innerClassName:
                                                  "rounded-xs rounded-tl-none",
                                                className: "",
                                                label: "Website",
                                                children: (0, i.jsxs)("div", {
                                                  className:
                                                    "jsx-9c9c872e4477df60 flex justify-between",
                                                  children: [
                                                    "https://",
                                                    t.website,
                                                    (0, i.jsx)(l.default, {
                                                      type: "ghost",
                                                      leftIcon: (0, i.jsx)(
                                                        o.CopyIcon,
                                                        {}
                                                      ),
                                                      className:
                                                        "h-5 !text-highlight",
                                                      onClick: () => {
                                                        h(
                                                          "https://".concat(
                                                            t.website
                                                          )
                                                        ),
                                                          k.A.success(
                                                            "Website link was copied to clipboard"
                                                          );
                                                      },
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              (0, i.jsx)(l.default, {
                                                type: "ghost",
                                                className:
                                                  "absolute right-4 top-1 !text-highlight",
                                                onClick: async () => {
                                                  await (0, p.Z)(
                                                    "/v1/coins/".concat(n),
                                                    {
                                                      method: "PATCH",
                                                      body: {
                                                        websiteVerified: !1,
                                                      },
                                                    }
                                                  ),
                                                    d();
                                                },
                                                children: "Replace",
                                              }),
                                            ],
                                          },
                                          "f"
                                        )
                                      : (0, i.jsx)(
                                          w.E.div,
                                          {
                                            ...(0, f.g)(),
                                            children: (0, i.jsx)(R, {
                                              coin: t,
                                              mutate: d,
                                            }),
                                          },
                                          "d"
                                        )
                                    : (0, i.jsx)(
                                        w.E.div,
                                        {
                                          ...(0, f.g)(),
                                          children: (0, i.jsx)(u.u, {
                                            name: "website",
                                            label: null,
                                            inlineLabel: "https://",
                                            className: "mx-2",
                                          }),
                                        },
                                        "ds"
                                      ),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                !s && (0, i.jsx)(M._, { current: "socials" }),
              ],
            }),
          ],
        });
      }
      function H(e) {
        let { coin: t } = e,
          [, s] = (0, C.Z)();
        return (0, i.jsxs)(a.Z, {
          bg: "bg-gray-20",
          style: { "--joint-height": "10px" },
          children: [
            (0, i.jsx)("div", {
              className: "flex grow gap-2 rounded-sm p-1 pb-4",
              children: (0, i.jsxs)("div", {
                className: "grow pb-1 pr-1 pt-1",
                children: [
                  (0, i.jsx)("div", {
                    className: "flex justify-between",
                    children: (0, i.jsxs)("div", {
                      className: "flex items-center gap-1 pl-1",
                      children: [
                        (0, i.jsx)("div", {
                          className: (0, x.cn)(
                            "grid aspect-square self-start rounded-2xs p-1",
                            "b-shadow-5 shadow-gray-40"
                          ),
                          children: (0, i.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            className: "text-highlight",
                            children: (0, i.jsx)("path", {
                              stroke: "currentColor",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "1.5",
                              d: "M12 3.75H7.781a3 3 0 00-3 3v3.5a3 3 0 003 3h8.438a3 3 0 003-3v-3.5a3 3 0 00-3-3H12zm0 0v-2m-3.25 6v1.5m6.5-1.5v1.5m-9.5 3.25v1.75m0 0V15a6.25 6.25 0 1012.5 0v-.75m-12.5 0l-2 2m14.5-2V12.5m0 1.75l2 2",
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "ml-3 font-bold",
                          children: "Add the Metadrop bot to your group",
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "ml-[59px] mt-3 rounded-sm border border-gray-30",
                    children: [
                      (0, i.jsxs)("div", {
                        className:
                          "flex items-center gap-2 border-b border-gray-30 p-2 text-sm",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "shrink rounded-full bg-gray-30 px-3 py-1",
                            children: (0, i.jsx)(o.StarIcon, {}),
                          }),
                          (0, i.jsxs)("div", {
                            children: [
                              "Official Metadrop bot is ",
                              (0, i.jsx)("code", { children: "@metadropbot" }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "p-4",
                        children: (0, i.jsx)(l.default, {
                          size: "lg",
                          fullWidth: !0,
                          href: "https://t.me/metadropbot",
                          target: "_blank",
                          children: "Add Metadrop bot",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, i.jsx)("div", {
              className: "flex gap-2 rounded-sm p-1 pb-4",
              children: (0, i.jsx)("div", {
                className: "grow pb-1 pr-1 pt-1",
                children: (0, i.jsxs)("div", {
                  className: "flex flex-col",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "flex items-center gap-1 pl-1",
                      children: [
                        (0, i.jsx)("div", {
                          className: (0, x.cn)(
                            "grid aspect-square self-start rounded-2xs p-1",
                            "b-shadow-5 shadow-gray-40"
                          ),
                          children: (0, i.jsx)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "text-highlight",
                            children: (0, i.jsx)("path", {
                              d: "M3.82101 16.8525L1.75 6.75L7.75 10.25L12 3.75L16.25 10.25L22.25 6.75L20.179 16.8525C19.8929 18.2481 18.6647 19.25 17.2401 19.25H6.75989C5.33526 19.25 4.10711 18.2481 3.82101 16.8525Z",
                              stroke: "currentColor",
                              strokeWidth: "1.5",
                              strokeLinecap: "square",
                              strokeLinejoin: "round",
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "ml-3 font-bold",
                          children: "Make the bot a group admin",
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "ml-[59px] mt-3 rounded-sm border border-gray-30",
                      children: (0, i.jsxs)("div", {
                        className: "flex items-center gap-2 p-2 text-sm",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "shrink rounded-full bg-gray-30 px-3 py-1",
                            children: (0, i.jsx)(o.HelpIcon, {}),
                          }),
                          (0, i.jsx)("div", {
                            children:
                              "To verify your group, you need to make the Metadrop bot a group admin with link access. You can remove this admin permission after verification.",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, i.jsx)("div", {
              className: "flex gap-2 rounded-sm p-1 pb-4",
              children: (0, i.jsx)("div", {
                className: "grow pb-1 pr-1 pt-1",
                children: (0, i.jsxs)("div", {
                  className: "flex flex-col",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "flex items-center gap-1 pl-1",
                      children: [
                        (0, i.jsx)("div", {
                          className: (0, x.cn)(
                            "grid aspect-square self-start rounded-2xs p-1",
                            "b-shadow-5 shadow-gray-40"
                          ),
                          children: (0, i.jsx)(o.CheckmarkIcon, {
                            className: "size-icon-md text-highlight",
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "ml-3 font-bold",
                          children: "Verify your group",
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "ml-[59px] mt-3 text-sm text-muted",
                      children:
                        "Use the following slash command to verify your Telegram group.",
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "ml-[59px] mt-3 rounded-full border border-gray-30",
                      children: (0, i.jsxs)("div", {
                        className: "flex items-center gap-2 p-2",
                        children: [
                          (0, i.jsx)("span", {
                            className: "select-none text-sm text-gray-50",
                            children: "Verify your group",
                          }),
                          (0, i.jsxs)("pre", {
                            className: "grow font-mono text-sm !normal-case",
                            onClick: (e) => {
                              var t, s;
                              let i = document.createRange();
                              i.selectNode(e.target),
                                null === (t = window.getSelection()) ||
                                  void 0 === t ||
                                  t.removeAllRanges(),
                                null === (s = window.getSelection()) ||
                                  void 0 === s ||
                                  s.addRange(i);
                            },
                            children: [
                              "/verify ",
                              null == t ? void 0 : t.telegramLinkToken,
                            ],
                          }),
                          (0, i.jsx)(l.default, {
                            type: "ghost",
                            leftIcon: (0, i.jsx)(o.CopyIcon, {}),
                            className: "h-5 !text-highlight",
                            onClick: () => {
                              s(
                                "/verify ".concat(
                                  null == t ? void 0 : t.telegramLinkToken
                                )
                              ),
                                k.A.success(
                                  "Verify command was copied to clipboard"
                                );
                            },
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      function S(e) {
        let { coinId: t, specs: s } = e;
        return (0, i.jsxs)("div", {
          className: "rounded-sm border border-gray-30",
          children: [
            (0, i.jsxs)("div", {
              className:
                "flex items-center gap-2 border-b border-gray-30 p-2 text-sm",
              children: [
                (0, i.jsx)("div", {
                  className: "shrink rounded-full bg-gray-30 px-3 py-1",
                  children: (0, i.jsx)(o.StarIcon, {}),
                }),
                (0, i.jsx)("div", {
                  children: "Connect your Twitter account to verify",
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: "p-4",
              children: (0, i.jsx)(l.default, {
                size: "lg",
                fullWidth: !0,
                onClick: () =>
                  window.open(
                    "/app/coins/".concat(t, "/twitter-verification"),
                    "verify-twitter",
                    s
                  ),
                children: "Verify Twitter",
              }),
            }),
          ],
        });
      }
      function R(e) {
        let { coin: t, mutate: s } = e,
          [, n] = (0, C.Z)(),
          r = (0, N.useMemo)(() => {
            let e = ((null == t ? void 0 : t.id) || "").split("-"),
              s = e[e.length - 1] || "";
            return "metadrop-verification=".concat(s).toUpperCase();
          }, [null == t ? void 0 : t.id]);
        return (0, i.jsxs)(a.Z, {
          bg: "bg-gray-20",
          style: { "--joint-height": "10px" },
          children: [
            (0, i.jsx)("div", {
              className: "flex grow gap-2 rounded-sm p-1 pb-4",
              children: (0, i.jsxs)("div", {
                className: "grow pb-1 pr-1 pt-1",
                children: [
                  (0, i.jsx)("div", {
                    className: "flex justify-between",
                    children: (0, i.jsxs)("div", {
                      className: "flex items-center gap-1 pl-1",
                      children: [
                        (0, i.jsx)("div", {
                          className: (0, x.cn)(
                            "grid aspect-square self-start rounded-2xs p-1",
                            "b-shadow-5 shadow-gray-40"
                          ),
                          children: (0, i.jsxs)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "text-highlight",
                            children: [
                              (0, i.jsx)("path", {
                                d: "M5.38803 19.923L5.72852 19.2548H5.72852L5.38803 19.923ZM4.07698 18.612L3.40873 18.9525H3.40873L4.07698 18.612ZM19.923 18.612L19.2548 18.2715V18.2715L19.923 18.612ZM18.612 19.923L18.2715 19.2548H18.2715L18.612 19.923ZM19.923 5.38803L19.2548 5.72852V5.72852L19.923 5.38803ZM18.612 4.07698L18.9525 3.40873V3.40873L18.612 4.07698ZM4.07698 5.38803L4.74524 5.72852L4.07698 5.38803ZM5.38803 4.07698L5.72852 4.74524L5.38803 4.07698ZM17 8.75C17 8.33579 16.6642 8 16.25 8C15.8358 8 15.5 8.33579 15.5 8.75H17ZM15.5 15.25C15.5 15.6642 15.8358 16 16.25 16C16.6642 16 17 15.6642 17 15.25H15.5ZM19.5 8.55V15.45H21V8.55H19.5ZM15.45 19.5H8.55V21H15.45V19.5ZM4.5 15.45V8.55H3V15.45H4.5ZM8.55 4.5H15.45V3H8.55V4.5ZM8.55 19.5C7.69755 19.5 7.10331 19.4994 6.64068 19.4616C6.1868 19.4245 5.92604 19.3554 5.72852 19.2548L5.04754 20.5913C5.49175 20.8176 5.97189 20.912 6.51853 20.9566C7.05641 21.0006 7.7223 21 8.55 21V19.5ZM3 15.45C3 16.2777 2.99942 16.9436 3.04336 17.4815C3.08803 18.0281 3.18238 18.5082 3.40873 18.9525L4.74524 18.2715C4.6446 18.074 4.57546 17.8132 4.53838 17.3593C4.50058 16.8967 4.5 16.3025 4.5 15.45H3ZM5.72852 19.2548C5.30516 19.039 4.96095 18.6948 4.74524 18.2715L3.40873 18.9525C3.76825 19.6581 4.34193 20.2317 5.04754 20.5913L5.72852 19.2548ZM19.5 15.45C19.5 16.3025 19.4994 16.8967 19.4616 17.3593C19.4245 17.8132 19.3554 18.074 19.2548 18.2715L20.5913 18.9525C20.8176 18.5082 20.912 18.0281 20.9566 17.4815C21.0006 16.9436 21 16.2777 21 15.45H19.5ZM15.45 21C16.2777 21 16.9436 21.0006 17.4815 20.9566C18.0281 20.912 18.5082 20.8176 18.9525 20.5913L18.2715 19.2548C18.074 19.3554 17.8132 19.4245 17.3593 19.4616C16.8967 19.4994 16.3025 19.5 15.45 19.5V21ZM19.2548 18.2715C19.0391 18.6948 18.6948 19.039 18.2715 19.2548L18.9525 20.5913C19.6581 20.2317 20.2318 19.6581 20.5913 18.9525L19.2548 18.2715ZM21 8.55C21 7.7223 21.0006 7.05641 20.9566 6.51853C20.912 5.97189 20.8176 5.49175 20.5913 5.04754L19.2548 5.72852C19.3554 5.92604 19.4245 6.1868 19.4616 6.64068C19.4994 7.10331 19.5 7.69755 19.5 8.55H21ZM15.45 4.5C16.3025 4.5 16.8967 4.50058 17.3593 4.53838C17.8132 4.57546 18.074 4.6446 18.2715 4.74524L18.9525 3.40873C18.5082 3.18238 18.0281 3.08803 17.4815 3.04336C16.9436 2.99942 16.2777 3 15.45 3V4.5ZM20.5913 5.04754C20.2318 4.34193 19.6581 3.76825 18.9525 3.40873L18.2715 4.74524C18.6948 4.96095 19.0391 5.30516 19.2548 5.72852L20.5913 5.04754ZM4.5 8.55C4.5 7.69755 4.50058 7.10331 4.53838 6.64068C4.57546 6.1868 4.6446 5.92604 4.74524 5.72852L3.40873 5.04754C3.18238 5.49175 3.08803 5.97189 3.04336 6.51853C2.99942 7.05641 3 7.7223 3 8.55H4.5ZM8.55 3C7.7223 3 7.05641 2.99942 6.51853 3.04336C5.97189 3.08803 5.49175 3.18238 5.04754 3.40873L5.72852 4.74524C5.92604 4.6446 6.1868 4.57546 6.64068 4.53838C7.10331 4.50058 7.69755 4.5 8.55 4.5V3ZM4.74524 5.72852C4.96095 5.30516 5.30516 4.96095 5.72852 4.74524L5.04754 3.40873C4.34193 3.76825 3.76825 4.34193 3.40873 5.04754L4.74524 5.72852ZM15.5 8.75V15.25H17V8.75H15.5Z",
                                fill: "currentColor",
                              }),
                              (0, i.jsx)("path", {
                                d: "M8 12.75C8.41421 12.75 8.75 12.4142 8.75 12C8.75 11.5858 8.41421 11.25 8 11.25C7.58579 11.25 7.25 11.5858 7.25 12C7.25 12.4142 7.58579 12.75 8 12.75ZM12 12.75C12.4142 12.75 12.75 12.4142 12.75 12C12.75 11.5858 12.4142 11.25 12 11.25C11.5858 11.25 11.25 11.5858 11.25 12C11.25 12.4142 11.5858 12.75 12 12.75Z",
                                fill: "currentColor",
                                stroke: "currentColor",
                                strokeWidth: "0.5",
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "ml-3 font-bold",
                          children: "Enter your website",
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "ml-[59px] mt-3 text-sm text-muted",
                    children:
                      "Enter the website domain name that you want to verify.",
                  }),
                  (0, i.jsx)("div", {
                    className: "ml-[59px] mt-3",
                    children: (0, i.jsx)(u.u, {
                      name: "website",
                      label: null,
                      inlineLabel: "https://",
                      inlineLabelClassName: "w-auto",
                      placeholder: "your-site.com",
                    }),
                  }),
                ],
              }),
            }),
            (0, i.jsx)("div", {
              className: "flex gap-2 rounded-sm p-1 pb-4",
              children: (0, i.jsx)("div", {
                className: "grow pb-1 pr-1 pt-1",
                children: (0, i.jsxs)("div", {
                  className: "flex flex-col",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "flex items-center gap-1 pl-1",
                      children: [
                        (0, i.jsx)("div", {
                          className: (0, x.cn)(
                            "grid aspect-square self-start rounded-2xs p-1",
                            "b-shadow-5 shadow-gray-40"
                          ),
                          children: (0, i.jsx)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "text-highlight",
                            children: (0, i.jsx)("path", {
                              d: "M5.70123 20.254V14.0015M5.70123 10.25V3.74707M11.9998 20.0038V12.7505M11.9998 8.99915V3.99707M18.2984 20.2536V16.002M18.2984 12.2508V3.74707M3.74609 13.7515H7.74982M9.99982 9.24902H13.9998M16.2498 15.752H20.2498",
                              stroke: "currentColor",
                              strokeWidth: "1.5",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "ml-3 font-bold",
                          children:
                            "Add a TXT record to your website's DNS records",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "ml-[59px] mt-3 text-sm text-muted",
                      children: [
                        "In your domain's DNS settings: select “Add Record” → choose “TXT” type → (you may need to add ",
                        (0, i.jsx)("span", {
                          className: "font-mono",
                          children: "'@'",
                        }),
                        " ",
                        "in the “Host” field) → enter the following string in the “Value” field → create the record and wait for propagation.",
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "ml-[59px] mt-3 rounded-full border border-gray-30",
                      children: (0, i.jsxs)("div", {
                        className: "flex items-center gap-2 p-2",
                        children: [
                          (0, i.jsx)("span", {
                            className: "select-none text-sm text-gray-50",
                            children: "TXT",
                          }),
                          (0, i.jsx)("pre", {
                            className: "grow font-mono text-sm !normal-case",
                            onClick: (e) => {
                              var t, s;
                              let i = document.createRange();
                              i.selectNode(e.target),
                                null === (t = window.getSelection()) ||
                                  void 0 === t ||
                                  t.removeAllRanges(),
                                null === (s = window.getSelection()) ||
                                  void 0 === s ||
                                  s.addRange(i);
                            },
                            children: r,
                          }),
                          (0, i.jsx)(l.default, {
                            type: "ghost",
                            leftIcon: (0, i.jsx)(o.CopyIcon, {}),
                            className: "h-5 !text-highlight",
                            onClick: () => {
                              n(r),
                                k.A.success(
                                  "TXT value was copied to clipboard"
                                );
                            },
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, i.jsx)("div", {
              className: "flex grow gap-2 rounded-sm p-1 pb-4",
              children: (0, i.jsxs)("div", {
                className: "grow pb-1 pr-1 pt-1",
                children: [
                  (0, i.jsx)("div", {
                    className: "flex justify-between",
                    children: (0, i.jsxs)("div", {
                      className: "flex items-center gap-1 pl-1",
                      children: [
                        (0, i.jsx)("div", {
                          className: (0, x.cn)(
                            "grid aspect-square self-start rounded-2xs p-1",
                            "b-shadow-5 shadow-gray-40"
                          ),
                          children: (0, i.jsx)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "text-highlight",
                            children: (0, i.jsx)("path", {
                              d: "M9.75027 5.52371L10.7168 4.55722C13.1264 2.14759 17.0332 2.14759 19.4428 4.55722C21.8524 6.96684 21.8524 10.8736 19.4428 13.2832L18.4742 14.2519M5.52886 9.74513L4.55722 10.7168C2.14759 13.1264 2.1476 17.0332 4.55722 19.4428C6.96684 21.8524 10.8736 21.8524 13.2832 19.4428L14.2478 18.4782M9.5 14.5L14.5 9.5",
                              stroke: "currentColor",
                              strokeWidth: "1.5",
                              strokeLinecap: "round",
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "ml-3 font-bold",
                          children: "Verify when you are ready",
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "ml-[59px] mt-3 rounded-sm border border-gray-30",
                    children: [
                      (0, i.jsxs)("div", {
                        className:
                          "flex items-center gap-2 border-b border-gray-30 p-2 text-sm",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "shrink rounded-full bg-gray-30 px-3 py-1",
                            children: (0, i.jsx)(o.StarIcon, {}),
                          }),
                          (0, i.jsx)("div", {
                            children:
                              "DNS changes are usually fast (within 5-10 minutes) but in some cases it may take up to 24h to detect your changes.",
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "p-4",
                        children: (0, i.jsx)(l.default, {
                          size: "lg",
                          fullWidth: !0,
                          disabled: !(null == t ? void 0 : t.website),
                          onClick: async () => {
                            let e = await (0, p.Z)(
                              "/verify/website?coinId="
                                .concat(null == t ? void 0 : t.id, "&website=")
                                .concat(null == t ? void 0 : t.website),
                              { method: "GET" }
                            );
                            (null == e ? void 0 : e.status) !== "success" &&
                              k.A.info("Didn't find the TXT record yet"),
                              s();
                          },
                          children: "Verify website",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    88416: function (e, t, s) {
      "use strict";
      s.d(t, {
        e: function () {
          return l;
        },
      });
      var i = s(2067),
        n = s(96560),
        r = s(37397);
      let l = (e) => {
        let { label: t, className: s = "", Component: l = "div", ...a } = e;
        return (0, i.jsxs)(l, {
          ...a,
          className: (0, n.cn)(
            "relative px-6 pb-1 pt-3 text-sm font-bold text-highlight",
            "table self-baseline",
            "rounded-t-sm",
            s
          ),
          children: [
            t,
            (0, i.jsx)(r.UH, {
              className: "absolute bottom-0 right-0 translate-x-full",
            }),
          ],
        });
      };
    },
    37397: function (e, t, s) {
      "use strict";
      s.d(t, {
        UH: function () {
          return l;
        },
      });
      var i = s(2067),
        n = s(96560);
      let r = (e) => {
          let { className: t = "", style: s = {} } = e;
          return (0, i.jsxs)("svg", {
            className: (0, n.cn)("w-auto", t),
            width: "10",
            height: "20",
            viewBox: "0 0 10 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            style: s,
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
        l = (e) => {
          let { className: t = "", useCurrentColor: s = !1 } = e;
          return (0, i.jsx)("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: (0, i.jsx)("path", {
              d: "M20 20H0V0C0 11.0457 8.9543 20 20 20Z",
              fill: s ? "currentColor" : "var(--bg-color)",
            }),
          });
        };
      t.ZP = (e) => {
        let { className: t = "", style: s, bg: l, dir: a = "col" } = e;
        return (0, i.jsxs)("div", {
          className: (0, n.cn)(
            t,
            l,
            "w-full",
            "flex justify-center",
            "col" === a ? "flex-row" : "flex-col"
          ),
          style: {
            color: "var(--bg-color)",
            backgroundColor: "transparent",
            ...s,
          },
          children: [
            (0, i.jsx)(r, {
              className: (0, n.cn)("rotate-180", "row" === a && "rotate-270"),
              style: { height: "var(--joint-height)" },
            }),
            (0, i.jsx)("div", {
              className: "max-w-[80%]",
              style: {
                width: "var(--joint-width)",
                backgroundColor: "var(--bg-color)",
              },
            }),
            (0, i.jsx)(r, {
              className: (0, n.cn)("row" === a && "rotate-90"),
              style: { height: "var(--joint-height)" },
            }),
          ],
        });
      };
    },
    42747: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = s(2067),
        n = s(96560),
        r = s(15039),
        l = s(37397),
        a = s(637),
        o = s(28967);
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
      var m = (e) => {
        let {
            className: t = "",
            children: s,
            dir: m = "col",
            bg: h = "bg-gray-95",
            style: x,
          } = e,
          p = (0, r.useRef)([]),
          [f, g] = (0, r.useState)([]),
          v = (0, r.useCallback)(() => {
            let e = p.current.map((e) => (null == e ? void 0 : e.clientHeight));
            g((t) => (t.length !== p.current.length ? e : t));
          }, [s, g]);
        return (
          (0, r.useLayoutEffect)(() => {
            v();
          }, [v]),
          (0, i.jsx)("div", {
            className: (0, n.cn)(t, "dripping-boxes"),
            style: x,
            children: (0, i.jsx)("div", {
              className: (0, n.cn)("row" === m && "flex"),
              children: (0, i.jsx)(a.M, {
                initial: !1,
                children: r.Children.map(s, (e, t) => {
                  if (!e) return null;
                  let s = (0, n.cn)(e.props.className)
                    .split(" ")
                    .filter((e) => e.match(/bg|rounded|drips/))
                    .sort((e) => e.indexOf("drips"))
                    .map((e) => e.replace("drips-bg-", "bg-"))
                    .map((e) => e.replace("drips-rounded-", "rounded-"));
                  return (0, i.jsxs)(i.Fragment, {
                    children: [
                      0 !== t &&
                        (0, i.jsx)(o.E.div, {
                          className:
                            "joint flex justify-center overflow-hidden",
                          variants: c,
                          initial: "hide",
                          animate: "show",
                          exit: "hide",
                          children: (0, i.jsx)(l.ZP, { bg: h, dir: m }),
                        }),
                      (0, i.jsx)(o.E.div, {
                        className: (0, n.cn)(
                          " overflow-hidden rounded-[var(--drip-rounded)]",
                          h,
                          s,
                          e.props.wrapperClassName
                        ),
                        variants: d(f[t]),
                        initial: "hide",
                        animate: "show",
                        exit: "hide",
                        children: (0, i.jsx)(o.E.div, {
                          ref: (e) => (p.current[t] = e),
                          variants: u,
                          initial: "hide",
                          animate: "show",
                          exit: "hide",
                          children: r.cloneElement(e, {
                            className: (0, n.cn)(
                              "p-4 rounded-[var(--drip-rounded)] mx-auto",
                              h,
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
    33862: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = s(2067),
        n = s(15039),
        r = (e, t, s) => {
          if (!e) throw Error("useLocalStorage key may not be falsy");
          let i = s ? (s.raw ? (e) => e : s.deserializer) : JSON.parse,
            r = (0, n.useRef)((e) => {
              try {
                let n = s ? (s.raw ? String : s.serializer) : JSON.stringify,
                  r = localStorage.getItem(e);
                if (null !== r) return i(r);
                return t && localStorage.setItem(e, n(t)), t;
              } catch (e) {
                return t;
              }
            }),
            [l, a] = (0, n.useState)(() => r.current(e));
          (0, n.useEffect)(() => a(r.current(e)), [e]);
          let o = (0, n.useCallback)(
            (t) => {
              try {
                let n;
                let r = "function" == typeof t ? t(l) : t;
                if (void 0 === r) return;
                (n = s
                  ? s.raw
                    ? "string" == typeof r
                      ? r
                      : JSON.stringify(r)
                    : s.serializer
                    ? s.serializer(r)
                    : JSON.stringify(r)
                  : JSON.stringify(r)),
                  localStorage.setItem(e, n),
                  a(i(n));
              } catch (e) {}
            },
            [e, a, l]
          );
          return [
            l,
            o,
            (0, n.useCallback)(() => {
              try {
                localStorage.removeItem(e), a(void 0);
              } catch (e) {}
            }, [e, a]),
          ];
        },
        l = s(96560),
        a = s(637),
        o = s(28967),
        c = s(15955);
      function d(e) {
        let {
            color: t = "lavender",
            children: s,
            id: n,
            dismissable: d = !1,
            className: u = "",
          } = e,
          [m, h] = r("drip-notice-".concat(n), !1);
        return (0, i.jsx)(a.M, {
          children:
            !m &&
            (0, i.jsxs)(o.E.div, {
              className: (0, l.cn)(
                " flex items-center justify-between rounded-md border border-lavender px-2 py-1 ",
                {
                  " bg-lavender-background  text-lavender": "lavender" === t,
                  "bg-yellow text-yellow ": "yellow" === t,
                },
                u
              ),
              initial: { opacity: 1, maxHeight: 140 },
              animate: { opacity: 1, maxHeight: 140 },
              exit: { opacity: 0, maxHeight: 0 },
              children: [
                (0, i.jsxs)("div", {
                  className: "flex items-start gap-1",
                  children: [
                    (0, i.jsx)(c.StarIcon, {
                      className: "size-icon-sm shrink-0 translate-y-[3px]",
                    }),
                    (0, i.jsx)("div", {
                      className: "pb-[0.1rem] text-sm",
                      children: s,
                    }),
                  ],
                }),
                d &&
                  (0, i.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      h(!0);
                    },
                    children: (0, i.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "14",
                      height: "14",
                      fill: "none",
                      viewBox: "0 0 14 14",
                      children: (0, i.jsx)("path", {
                        fill: "#fff",
                        fillOpacity: "1",
                        fillRule: "evenodd",
                        d: "M.333 7a6.667 6.667 0 1113.334 0A6.667 6.667 0 01.333 7zm5.139-2.471a.667.667 0 10-.943.942L6.057 7 4.53 8.529a.667.667 0 10.943.942L7 7.943 8.53 9.47a.667.667 0 10.943-.942L7.943 7l1.529-1.529a.667.667 0 10-.943-.942L7 6.057 5.472 4.53z",
                        clipRule: "evenodd",
                      }),
                    }),
                  }),
              ],
            }),
        });
      }
    },
    48259: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          Tooltip: function () {
            return o;
          },
          TooltipContent: function () {
            return d;
          },
          TooltipProvider: function () {
            return a;
          },
          TooltipTrigger: function () {
            return c;
          },
        });
      var i = s(2067),
        n = s(15039),
        r = s(87907),
        l = s(96560);
      let a = (e) => (0, i.jsx)(r.zt, { delayDuration: 150, ...e }),
        o = r.fC,
        c = (e) =>
          (0, i.jsx)(r.xz, {
            ...e,
            className: (0, l.cn)("cursor-auto", e.className),
            type: "button",
          }),
        d = n.forwardRef((e, t) => {
          let { className: s, sideOffset: n = 8, side: a = "bottom", ...o } = e;
          return (
            o.children &&
            (0, i.jsx)(r.VY, {
              ref: t,
              sideOffset: n,
              side: a,
              className: (0, l.cn)(
                "z-50 animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
                "px-3 pb-[11px] pt-[9px]",
                "popover",
                "text-pretty",
                "shadow-lg",
                "text-sm font-normal",
                "max-w-xs",
                s
              ),
              avoidCollisions: !0,
              ...o,
            })
          );
        });
      d.displayName = r.VY.displayName;
    },
    95599: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = s(61200),
        n = s.n(i),
        r = s(15039),
        l = function (e) {
          void 0 === e && (e = {});
          var t = (0, r.useState)(e),
            s = t[0],
            i = t[1];
          return [
            s,
            (0, r.useCallback)(function (e) {
              i(function (t) {
                return Object.assign({}, t, e instanceof Function ? e(t) : e);
              });
            }, []),
          ];
        },
        a = function () {
          var e,
            t,
            s =
              ((e = (0, r.useRef)(!1)),
              (t = (0, r.useCallback)(function () {
                return e.current;
              }, [])),
              (0, r.useEffect)(function () {
                return (
                  (e.current = !0),
                  function () {
                    e.current = !1;
                  }
                );
              }, []),
              t),
            i = l({ value: void 0, error: void 0, noUserInteraction: !0 }),
            a = i[0],
            o = i[1];
          return [
            a,
            (0, r.useCallback)(function (e) {
              if (s())
                try {
                  if ("string" != typeof e && "number" != typeof e) {
                    var t,
                      i,
                      r = Error(
                        "Cannot copy typeof " +
                          typeof e +
                          " to clipboard, must be a string"
                      );
                    o({ value: e, error: r, noUserInteraction: !0 });
                    return;
                  }
                  if ("" === e) {
                    var r = Error("Cannot copy empty string to clipboard.");
                    o({ value: e, error: r, noUserInteraction: !0 });
                    return;
                  }
                  (i = e.toString()),
                    (t = n()(i)),
                    o({ value: i, error: void 0, noUserInteraction: t });
                } catch (e) {
                  o({ value: i, error: e, noUserInteraction: t });
                }
            }, []),
          ];
        };
    },
    90275: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, s = [], i = 0;
          i < e.rangeCount;
          i++
        )
          s.push(e.getRangeAt(i));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                s.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
    42837: function (e, t, s) {
      "use strict";
      s.d(t, {
        n: function () {
          return r;
        },
      });
      var i = s(28194),
        n = s(21596);
      function r(e, t) {
        let s = +(0, i.Q)(e);
        return (0, n.L)(e, s + t);
      }
    },
    9038: function (e, t, s) {
      "use strict";
      s.d(t, {
        m: function () {
          return r;
        },
      });
      var i = s(42837),
        n = s(45823);
      function r(e, t) {
        return (0, i.n)(e, t * n.yJ);
      }
    },
    23987: function (e, t, s) {
      "use strict";
      s.d(t, {
        R: function () {
          return n;
        },
      });
      var i = s(28194);
      function n(e, t) {
        return +(0, i.Q)(e) < +(0, i.Q)(t);
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        6299, 894, 775, 9745, 2005, 1664, 4356, 9041, 5060, 8388, 8505, 3297,
        4685, 1164, 4916, 3525, 5428, 3152, 5955, 1642, 3201, 7263, 8282, 4665,
        1744,
      ],
      function () {
        return e((e.s = 43734));
      }
    ),
      (_N_E = e.O());
  },
]);
