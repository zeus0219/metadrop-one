(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6889],
  {
    87710: function (e) {
      e.exports = (function () {
        var e = [],
          t = [],
          r = {},
          n = {},
          o = {};
        function a(e) {
          return "string" == typeof e ? RegExp("^" + e + "$", "i") : e;
        }
        function i(e, t) {
          return e === t
            ? t
            : e === e.toLowerCase()
            ? t.toLowerCase()
            : e === e.toUpperCase()
            ? t.toUpperCase()
            : e[0] === e[0].toUpperCase()
            ? t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
            : t.toLowerCase();
        }
        function s(e, t, n) {
          if (!e.length || r.hasOwnProperty(e)) return t;
          for (var o = n.length; o--; ) {
            var a = n[o];
            if (a[0].test(t))
              return (function (e, t) {
                return e.replace(t[0], function (r, n) {
                  var o,
                    a,
                    s =
                      ((o = t[1]),
                      (a = arguments),
                      o.replace(/\$(\d{1,2})/g, function (e, t) {
                        return a[t] || "";
                      }));
                  return "" === r ? i(e[n - 1], s) : i(r, s);
                });
              })(t, a);
          }
          return t;
        }
        function u(e, t, r) {
          return function (n) {
            var o = n.toLowerCase();
            return t.hasOwnProperty(o)
              ? i(n, o)
              : e.hasOwnProperty(o)
              ? i(n, e[o])
              : s(o, n, r);
          };
        }
        function l(e, t, r, n) {
          return function (n) {
            var o = n.toLowerCase();
            return (
              !!t.hasOwnProperty(o) ||
              (!e.hasOwnProperty(o) && s(o, o, r) === o)
            );
          };
        }
        function c(e, t, r) {
          var n = 1 === t ? c.singular(e) : c.plural(e);
          return (r ? t + " " : "") + n;
        }
        return (
          (c.plural = u(o, n, e)),
          (c.isPlural = l(o, n, e)),
          (c.singular = u(n, o, t)),
          (c.isSingular = l(n, o, t)),
          (c.addPluralRule = function (t, r) {
            e.push([a(t), r]);
          }),
          (c.addSingularRule = function (e, r) {
            t.push([a(e), r]);
          }),
          (c.addUncountableRule = function (e) {
            if ("string" == typeof e) {
              r[e.toLowerCase()] = !0;
              return;
            }
            c.addPluralRule(e, "$0"), c.addSingularRule(e, "$0");
          }),
          (c.addIrregularRule = function (e, t) {
            (t = t.toLowerCase()), (o[(e = e.toLowerCase())] = t), (n[t] = e);
          }),
          [
            ["I", "we"],
            ["me", "us"],
            ["he", "they"],
            ["she", "they"],
            ["them", "them"],
            ["myself", "ourselves"],
            ["yourself", "yourselves"],
            ["itself", "themselves"],
            ["herself", "themselves"],
            ["himself", "themselves"],
            ["themself", "themselves"],
            ["is", "are"],
            ["was", "were"],
            ["has", "have"],
            ["this", "these"],
            ["that", "those"],
            ["echo", "echoes"],
            ["dingo", "dingoes"],
            ["volcano", "volcanoes"],
            ["tornado", "tornadoes"],
            ["torpedo", "torpedoes"],
            ["genus", "genera"],
            ["viscus", "viscera"],
            ["stigma", "stigmata"],
            ["stoma", "stomata"],
            ["dogma", "dogmata"],
            ["lemma", "lemmata"],
            ["schema", "schemata"],
            ["anathema", "anathemata"],
            ["ox", "oxen"],
            ["axe", "axes"],
            ["die", "dice"],
            ["yes", "yeses"],
            ["foot", "feet"],
            ["eave", "eaves"],
            ["goose", "geese"],
            ["tooth", "teeth"],
            ["quiz", "quizzes"],
            ["human", "humans"],
            ["proof", "proofs"],
            ["carve", "carves"],
            ["valve", "valves"],
            ["looey", "looies"],
            ["thief", "thieves"],
            ["groove", "grooves"],
            ["pickaxe", "pickaxes"],
            ["passerby", "passersby"],
          ].forEach(function (e) {
            return c.addIrregularRule(e[0], e[1]);
          }),
          [
            [/s?$/i, "s"],
            [/[^\u0000-\u007F]$/i, "$0"],
            [/([^aeiou]ese)$/i, "$1"],
            [/(ax|test)is$/i, "$1es"],
            [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"],
            [/(e[mn]u)s?$/i, "$1s"],
            [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"],
            [
              /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
              "$1i",
            ],
            [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
            [/(seraph|cherub)(?:im)?$/i, "$1im"],
            [/(her|at|gr)o$/i, "$1oes"],
            [
              /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,
              "$1a",
            ],
            [
              /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,
              "$1a",
            ],
            [/sis$/i, "ses"],
            [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
            [/([^aeiouy]|qu)y$/i, "$1ies"],
            [/([^ch][ieo][ln])ey$/i, "$1ies"],
            [/(x|ch|ss|sh|zz)$/i, "$1es"],
            [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
            [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"],
            [/(pe)(?:rson|ople)$/i, "$1ople"],
            [/(child)(?:ren)?$/i, "$1ren"],
            [/eaux$/i, "$0"],
            [/m[ae]n$/i, "men"],
            ["thou", "you"],
          ].forEach(function (e) {
            return c.addPluralRule(e[0], e[1]);
          }),
          [
            [/s$/i, ""],
            [/(ss)$/i, "$1"],
            [
              /(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,
              "$1fe",
            ],
            [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"],
            [/ies$/i, "y"],
            [
              /\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,
              "$1ie",
            ],
            [/\b(mon|smil)ies$/i, "$1ey"],
            [/\b((?:tit)?m|l)ice$/i, "$1ouse"],
            [/(seraph|cherub)im$/i, "$1"],
            [
              /(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,
              "$1",
            ],
            [
              /(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,
              "$1sis",
            ],
            [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"],
            [/(test)(?:is|es)$/i, "$1is"],
            [
              /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
              "$1us",
            ],
            [
              /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,
              "$1um",
            ],
            [
              /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,
              "$1on",
            ],
            [/(alumn|alg|vertebr)ae$/i, "$1a"],
            [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"],
            [/(matr|append)ices$/i, "$1ix"],
            [/(pe)(rson|ople)$/i, "$1rson"],
            [/(child)ren$/i, "$1"],
            [/(eau)x?$/i, "$1"],
            [/men$/i, "man"],
          ].forEach(function (e) {
            return c.addSingularRule(e[0], e[1]);
          }),
          [
            "adulthood",
            "advice",
            "agenda",
            "aid",
            "aircraft",
            "alcohol",
            "ammo",
            "analytics",
            "anime",
            "athletics",
            "audio",
            "bison",
            "blood",
            "bream",
            "buffalo",
            "butter",
            "carp",
            "cash",
            "chassis",
            "chess",
            "clothing",
            "cod",
            "commerce",
            "cooperation",
            "corps",
            "debris",
            "diabetes",
            "digestion",
            "elk",
            "energy",
            "equipment",
            "excretion",
            "expertise",
            "firmware",
            "flounder",
            "fun",
            "gallows",
            "garbage",
            "graffiti",
            "hardware",
            "headquarters",
            "health",
            "herpes",
            "highjinks",
            "homework",
            "housework",
            "information",
            "jeans",
            "justice",
            "kudos",
            "labour",
            "literature",
            "machinery",
            "mackerel",
            "mail",
            "media",
            "mews",
            "moose",
            "music",
            "mud",
            "manga",
            "news",
            "only",
            "personnel",
            "pike",
            "plankton",
            "pliers",
            "police",
            "pollution",
            "premises",
            "rain",
            "research",
            "rice",
            "salmon",
            "scissors",
            "series",
            "sewage",
            "shambles",
            "shrimp",
            "software",
            "species",
            "staff",
            "swine",
            "tennis",
            "traffic",
            "transportation",
            "trout",
            "tuna",
            "wealth",
            "welfare",
            "whiting",
            "wildebeest",
            "wildlife",
            "you",
            /pok[eé]mon$/i,
            /[^aeiou]ese$/i,
            /deer$/i,
            /fish$/i,
            /measles$/i,
            /o[iu]s$/i,
            /pox$/i,
            /sheep$/i,
          ].forEach(c.addUncountableRule),
          c
        );
      })();
    },
    10105: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = r(15039);
      function o(e) {
        var t = (0, n.useRef)();
        return (
          (0, n.useEffect)(function () {
            t.current = e;
          }),
          t.current
        );
      }
    },
    79648: function (e, t, r) {
      "use strict";
      r.d(t, {
        Dx: function () {
          return Q;
        },
        VY: function () {
          return j;
        },
        aV: function () {
          return K;
        },
        fC: function () {
          return T;
        },
        h_: function () {
          return W;
        },
        x8: function () {
          return B;
        },
        xz: function () {
          return V;
        },
      });
      var n = r(65122),
        o = r(15039),
        a = r(65727),
        i = r(41633),
        s = r(70686),
        u = r(89219),
        l = r(75347),
        c = r(10094),
        f = r(46201),
        d = r(22843),
        p = r(95502),
        h = r(94221),
        m = r(71746),
        g = r(43022),
        $ = r(52871),
        v = r(22353);
      let b = "Dialog",
        [y, w] = (0, s.b)(b),
        [E, C] = y(b),
        R = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: r, ...s } = e,
            u = C("DialogTrigger", r),
            l = (0, i.e)(t, u.triggerRef);
          return (0, o.createElement)(
            h.WV.button,
            (0, n.Z)(
              {
                type: "button",
                "aria-haspopup": "dialog",
                "aria-expanded": u.open,
                "aria-controls": u.contentId,
                "data-state": S(u.open),
              },
              s,
              { ref: l, onClick: (0, a.M)(e.onClick, u.onOpenToggle) }
            )
          );
        }),
        D = "DialogPortal",
        [_, x] = y(D, { forceMount: void 0 }),
        k = "DialogOverlay",
        O = (0, o.forwardRef)((e, t) => {
          let r = x(k, e.__scopeDialog),
            { forceMount: a = r.forceMount, ...i } = e,
            s = C(k, e.__scopeDialog);
          return s.modal
            ? (0, o.createElement)(
                p.z,
                { present: a || s.open },
                (0, o.createElement)(M, (0, n.Z)({}, i, { ref: t }))
              )
            : null;
        }),
        M = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: r, ...a } = e,
            i = C(k, r);
          return (0, o.createElement)(
            g.Z,
            { as: v.g7, allowPinchZoom: !0, shards: [i.contentRef] },
            (0, o.createElement)(
              h.WV.div,
              (0, n.Z)({ "data-state": S(i.open) }, a, {
                ref: t,
                style: { pointerEvents: "auto", ...a.style },
              })
            )
          );
        }),
        I = "DialogContent",
        P = (0, o.forwardRef)((e, t) => {
          let r = x(I, e.__scopeDialog),
            { forceMount: a = r.forceMount, ...i } = e,
            s = C(I, e.__scopeDialog);
          return (0, o.createElement)(
            p.z,
            { present: a || s.open },
            s.modal
              ? (0, o.createElement)(z, (0, n.Z)({}, i, { ref: t }))
              : (0, o.createElement)(F, (0, n.Z)({}, i, { ref: t }))
          );
        }),
        z = (0, o.forwardRef)((e, t) => {
          let r = C(I, e.__scopeDialog),
            s = (0, o.useRef)(null),
            u = (0, i.e)(t, r.contentRef, s);
          return (
            (0, o.useEffect)(() => {
              let e = s.current;
              if (e) return (0, $.Ry)(e);
            }, []),
            (0, o.createElement)(
              Z,
              (0, n.Z)({}, e, {
                ref: u,
                trapFocus: r.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: (0, a.M)(e.onCloseAutoFocus, (e) => {
                  var t;
                  e.preventDefault(),
                    null === (t = r.triggerRef.current) ||
                      void 0 === t ||
                      t.focus();
                }),
                onPointerDownOutside: (0, a.M)(e.onPointerDownOutside, (e) => {
                  let t = e.detail.originalEvent,
                    r = 0 === t.button && !0 === t.ctrlKey;
                  (2 === t.button || r) && e.preventDefault();
                }),
                onFocusOutside: (0, a.M)(e.onFocusOutside, (e) =>
                  e.preventDefault()
                ),
              })
            )
          );
        }),
        F = (0, o.forwardRef)((e, t) => {
          let r = C(I, e.__scopeDialog),
            a = (0, o.useRef)(!1),
            i = (0, o.useRef)(!1);
          return (0, o.createElement)(
            Z,
            (0, n.Z)({}, e, {
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: (t) => {
                var n, o;
                null === (n = e.onCloseAutoFocus) ||
                  void 0 === n ||
                  n.call(e, t),
                  t.defaultPrevented ||
                    (a.current ||
                      null === (o = r.triggerRef.current) ||
                      void 0 === o ||
                      o.focus(),
                    t.preventDefault()),
                  (a.current = !1),
                  (i.current = !1);
              },
              onInteractOutside: (t) => {
                var n, o;
                null === (n = e.onInteractOutside) ||
                  void 0 === n ||
                  n.call(e, t),
                  t.defaultPrevented ||
                    ((a.current = !0),
                    "pointerdown" !== t.detail.originalEvent.type ||
                      (i.current = !0));
                let s = t.target;
                (null === (o = r.triggerRef.current) || void 0 === o
                  ? void 0
                  : o.contains(s)) && t.preventDefault(),
                  "focusin" === t.detail.originalEvent.type &&
                    i.current &&
                    t.preventDefault();
              },
            })
          );
        }),
        Z = (0, o.forwardRef)((e, t) => {
          let {
              __scopeDialog: r,
              trapFocus: a,
              onOpenAutoFocus: s,
              onCloseAutoFocus: u,
              ...l
            } = e,
            d = C(I, r),
            p = (0, o.useRef)(null),
            h = (0, i.e)(t, p);
          return (
            (0, m.EW)(),
            (0, o.createElement)(
              o.Fragment,
              null,
              (0, o.createElement)(
                f.M,
                {
                  asChild: !0,
                  loop: !0,
                  trapped: a,
                  onMountAutoFocus: s,
                  onUnmountAutoFocus: u,
                },
                (0, o.createElement)(
                  c.XB,
                  (0, n.Z)(
                    {
                      role: "dialog",
                      id: d.contentId,
                      "aria-describedby": d.descriptionId,
                      "aria-labelledby": d.titleId,
                      "data-state": S(d.open),
                    },
                    l,
                    { ref: h, onDismiss: () => d.onOpenChange(!1) }
                  )
                )
              ),
              !1
            )
          );
        }),
        q = "DialogTitle",
        L = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: r, ...a } = e,
            i = C(q, r);
          return (0, o.createElement)(
            h.WV.h2,
            (0, n.Z)({ id: i.titleId }, a, { ref: t })
          );
        }),
        A = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: r, ...i } = e,
            s = C("DialogClose", r);
          return (0, o.createElement)(
            h.WV.button,
            (0, n.Z)({ type: "button" }, i, {
              ref: t,
              onClick: (0, a.M)(e.onClick, () => s.onOpenChange(!1)),
            })
          );
        });
      function S(e) {
        return e ? "open" : "closed";
      }
      let [U, N] = (0, s.k)("DialogTitleWarning", {
          contentName: I,
          titleName: q,
          docsSlug: "dialog",
        }),
        T = (e) => {
          let {
              __scopeDialog: t,
              children: r,
              open: n,
              defaultOpen: a,
              onOpenChange: i,
              modal: s = !0,
            } = e,
            c = (0, o.useRef)(null),
            f = (0, o.useRef)(null),
            [d = !1, p] = (0, l.T)({ prop: n, defaultProp: a, onChange: i });
          return (0, o.createElement)(
            E,
            {
              scope: t,
              triggerRef: c,
              contentRef: f,
              contentId: (0, u.M)(),
              titleId: (0, u.M)(),
              descriptionId: (0, u.M)(),
              open: d,
              onOpenChange: p,
              onOpenToggle: (0, o.useCallback)(() => p((e) => !e), [p]),
              modal: s,
            },
            r
          );
        },
        V = R,
        W = (e) => {
          let {
              __scopeDialog: t,
              forceMount: r,
              children: n,
              container: a,
            } = e,
            i = C(D, t);
          return (0, o.createElement)(
            _,
            { scope: t, forceMount: r },
            o.Children.map(n, (e) =>
              (0, o.createElement)(
                p.z,
                { present: r || i.open },
                (0, o.createElement)(d.h, { asChild: !0, container: a }, e)
              )
            )
          );
        },
        K = O,
        j = P,
        Q = L,
        B = A;
    },
    54350: function (e, t, r) {
      "use strict";
      r.d(t, {
        u: function () {
          return o;
        },
      });
      var n = r(92931);
      function o(e, t = {}) {
        let r = (function (e, t = {}) {
          let r;
          try {
            r = e.getClient(t);
          } catch {}
          return r;
        })(e, t);
        return r?.extend(n.I);
      }
    },
    23987: function (e, t, r) {
      "use strict";
      r.d(t, {
        R: function () {
          return o;
        },
      });
      var n = r(28194);
      function o(e, t) {
        return +(0, n.Q)(e) < +(0, n.Q)(t);
      }
    },
    58464: function (e, t, r) {
      "use strict";
      r.d(t, {
        m: function () {
          return o;
        },
      });
      var n = r(34179);
      function o(e, t) {
        var r;
        return (r = Date.now()), +(0, n.z)(e, t) == +(0, n.z)(r, t);
      }
    },
    69134: function (e, t, r) {
      "use strict";
      r.d(t, {
        P: function () {
          return a;
        },
      });
      var n = r(83781),
        o = r(65733);
      function a(e) {
        var t;
        return (t = (0, n.E)(Date.now(), 1)), +(0, o.b)(e) == +(0, o.b)(t);
      }
    },
    67410: function (e, t, r) {
      "use strict";
      r.d(t, {
        k: function () {
          return o;
        },
      });
      var n = r(83781);
      function o(e, t) {
        return (0, n.E)(e, -t);
      }
    },
    89026: function (e, t, r) {
      "use strict";
      r.d(t, {
        zL: function () {
          return o;
        },
        zg: function () {
          return n;
        },
      });
      let n = 2n ** 32n - 1n,
        o = 2n ** 256n - 1n;
    },
    74020: function (e, t, r) {
      "use strict";
      r.d(t, {
        u: function () {
          return u;
        },
      });
      var n = r(64456),
        o = r(99631),
        a = r(23753),
        i = r(13173),
        s = r(8979);
      function u(e = {}) {
        let { abi: t, address: r, functionName: u, query: l = {} } = e,
          c = (0, s.Z)(e),
          f = (0, i.x)(),
          d = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: r }) {
                let o = t.abi;
                if (!o) throw Error("abi is required");
                let { address: a, functionName: i, scopeKey: s, ...u } = r[1];
                if (!a) throw Error("address is required");
                if (!i) throw Error("functionName is required");
                let l = u.args;
                return (0, n.L)(e, {
                  abi: o,
                  address: a,
                  functionName: i,
                  args: l,
                  ...u,
                });
              },
              queryKey: (function (e = {}) {
                let { abi: t, ...r } = e;
                return ["readContract", (0, o.O)(r)];
              })(t),
            };
          })(c, { ...e, chainId: e.chainId ?? f }),
          p = !!(r && t && u && (l.enabled ?? !0));
        return (0, a.aM)({
          ...l,
          ...d,
          enabled: p,
          structuralSharing: l.structuralSharing ?? a.if,
        });
      }
    },
    91873: function (e, t, r) {
      "use strict";
      r.d(t, {
        N: function () {
          return l;
        },
      });
      var n = r(62383),
        o = r(99631),
        a = r(15039),
        i = r(23753),
        s = r(13173),
        u = r(8979);
      function l(e = {}) {
        let { contracts: t = [], query: r = {} } = e,
          l = (0, u.Z)(e),
          c = (0, s.x)(),
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: r }) {
                let o = [],
                  a = r[1].contracts.length;
                for (let e = 0; e < a; e++) {
                  let n = r[1].contracts[e],
                    a = t.contracts?.[e].abi;
                  o.push({ ...n, abi: a });
                }
                let { scopeKey: i, ...s } = r[1];
                return (0, n.J)(e, { ...s, contracts: o });
              },
              queryKey: (function (e = {}) {
                let t = [];
                for (let r of e.contracts ?? []) {
                  let { abi: n, ...o } = r;
                  t.push({ ...o, chainId: o.chainId ?? e.chainId });
                }
                return ["readContracts", (0, o.O)({ ...e, contracts: t })];
              })(t),
            };
          })(l, { ...e, chainId: c }),
          d = (0, a.useMemo)(() => {
            let e = !1;
            for (let r of t) {
              let { abi: t, address: n, functionName: o } = r;
              if (!t || !n || !o) {
                e = !1;
                break;
              }
              e = !0;
            }
            return !!(e && (r.enabled ?? !0));
          }, [t, r.enabled]);
        return (0, i.aM)({
          ...f,
          ...r,
          enabled: d,
          structuralSharing: r.structuralSharing ?? i.if,
        });
      }
    },
  },
]);
