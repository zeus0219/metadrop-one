(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2005],
  {
    75715: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "addLocale", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        n(4292);
      let i = function (t) {
        for (
          var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1;
          i < e;
          i++
        )
          n[i - 1] = arguments[i];
        return t;
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    60407: function (t, e, n) {
      "use strict";
      function i(t, e, n, i) {
        return !1;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        n(4292),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    24046: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let i = n(68517)._(n(15039)),
        r = n(28599),
        s = n(26466),
        o = n(53171),
        a = n(31756),
        l = n(75715),
        u = n(4104),
        h = n(25879),
        c = n(65238),
        d = n(60407),
        f = n(85304),
        p = n(30423),
        m = new Set();
      function g(t, e, n, i, r, o) {
        if (o || (0, s.isLocalURL)(e)) {
          if (!i.bypassPrefetchedCheck) {
            let r =
              e +
              "%" +
              n +
              "%" +
              (void 0 !== i.locale
                ? i.locale
                : "locale" in t
                ? t.locale
                : void 0);
            if (m.has(r)) return;
            m.add(r);
          }
          Promise.resolve(o ? t.prefetch(e, r) : t.prefetch(e, n, i)).catch(
            (t) => {}
          );
        }
      }
      function v(t) {
        return "string" == typeof t ? t : (0, o.formatUrl)(t);
      }
      let y = i.default.forwardRef(function (t, e) {
        let n, o;
        let {
          href: m,
          as: y,
          children: x,
          prefetch: P = null,
          passHref: b,
          replace: w,
          shallow: A,
          scroll: S,
          locale: T,
          onClick: E,
          onMouseEnter: R,
          onTouchStart: M,
          legacyBehavior: C = !1,
          ...V
        } = t;
        (n = x),
          C &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = i.default.createElement("a", null, n));
        let j = i.default.useContext(u.RouterContext),
          D = i.default.useContext(h.AppRouterContext),
          k = null != j ? j : D,
          L = !j,
          O = !1 !== P,
          F = null === P ? p.PrefetchKind.AUTO : p.PrefetchKind.FULL,
          { href: B, as: I } = i.default.useMemo(() => {
            if (!j) {
              let t = v(m);
              return { href: t, as: y ? v(y) : t };
            }
            let [t, e] = (0, r.resolveHref)(j, m, !0);
            return { href: t, as: y ? (0, r.resolveHref)(j, y) : e || t };
          }, [j, m, y]),
          N = i.default.useRef(B),
          W = i.default.useRef(I);
        C && (o = i.default.Children.only(n));
        let U = C ? o && "object" == typeof o && o.ref : e,
          [_, $, z] = (0, c.useIntersection)({ rootMargin: "200px" }),
          H = i.default.useCallback(
            (t) => {
              (W.current !== I || N.current !== B) &&
                (z(), (W.current = I), (N.current = B)),
                _(t),
                U &&
                  ("function" == typeof U
                    ? U(t)
                    : "object" == typeof U && (U.current = t));
            },
            [I, U, B, z, _]
          );
        i.default.useEffect(() => {
          k && $ && O && g(k, B, I, { locale: T }, { kind: F }, L);
        }, [I, B, $, T, O, null == j ? void 0 : j.locale, k, L, F]);
        let X = {
          ref: H,
          onClick(t) {
            C || "function" != typeof E || E(t),
              C &&
                o.props &&
                "function" == typeof o.props.onClick &&
                o.props.onClick(t),
              k &&
                !t.defaultPrevented &&
                (function (t, e, n, r, o, a, l, u, h) {
                  let { nodeName: c } = t.currentTarget;
                  if (
                    "A" === c.toUpperCase() &&
                    ((function (t) {
                      let e = t.currentTarget.getAttribute("target");
                      return (
                        (e && "_self" !== e) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) ||
                      (!h && !(0, s.isLocalURL)(n)))
                  )
                    return;
                  t.preventDefault();
                  let d = () => {
                    let t = null == l || l;
                    "beforePopState" in e
                      ? e[o ? "replace" : "push"](n, r, {
                          shallow: a,
                          locale: u,
                          scroll: t,
                        })
                      : e[o ? "replace" : "push"](r || n, { scroll: t });
                  };
                  h ? i.default.startTransition(d) : d();
                })(t, k, B, I, w, A, S, T, L);
          },
          onMouseEnter(t) {
            C || "function" != typeof R || R(t),
              C &&
                o.props &&
                "function" == typeof o.props.onMouseEnter &&
                o.props.onMouseEnter(t),
              k &&
                (O || !L) &&
                g(
                  k,
                  B,
                  I,
                  { locale: T, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: F },
                  L
                );
          },
          onTouchStart(t) {
            C || "function" != typeof M || M(t),
              C &&
                o.props &&
                "function" == typeof o.props.onTouchStart &&
                o.props.onTouchStart(t),
              k &&
                (O || !L) &&
                g(
                  k,
                  B,
                  I,
                  { locale: T, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: F },
                  L
                );
          },
        };
        if ((0, a.isAbsoluteUrl)(I)) X.href = I;
        else if (!C || b || ("a" === o.type && !("href" in o.props))) {
          let t = void 0 !== T ? T : null == j ? void 0 : j.locale,
            e =
              (null == j ? void 0 : j.isLocaleDomain) &&
              (0, d.getDomainLocale)(
                I,
                t,
                null == j ? void 0 : j.locales,
                null == j ? void 0 : j.domainLocales
              );
          X.href =
            e ||
            (0, f.addBasePath)(
              (0, l.addLocale)(I, t, null == j ? void 0 : j.defaultLocale)
            );
        }
        return C
          ? i.default.cloneElement(o, X)
          : i.default.createElement("a", { ...V, ...X }, n);
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    10368: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          requestIdleCallback: function () {
            return n;
          },
          cancelIdleCallback: function () {
            return i;
          },
        });
      let n =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (t) {
            let e = Date.now();
            return self.setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          },
        i =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (t) {
            return clearTimeout(t);
          };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    28599: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "resolveHref", {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let i = n(21270),
        r = n(53171),
        s = n(49481),
        o = n(31756),
        a = n(4292),
        l = n(26466),
        u = n(29155),
        h = n(19418);
      function c(t, e, n) {
        let c;
        let d = "string" == typeof e ? e : (0, r.formatWithValidation)(e),
          f = d.match(/^[a-zA-Z]{1,}:\/\//),
          p = f ? d.slice(f[0].length) : d;
        if ((p.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              d +
              "' passed to next/router in page: '" +
              t.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let e = (0, o.normalizeRepeatedSlashes)(p);
          d = (f ? f[0] : "") + e;
        }
        if (!(0, l.isLocalURL)(d)) return n ? [d] : d;
        try {
          c = new URL(d.startsWith("#") ? t.asPath : t.pathname, "http://n");
        } catch (t) {
          c = new URL("/", "http://n");
        }
        try {
          let t = new URL(d, c);
          t.pathname = (0, a.normalizePathTrailingSlash)(t.pathname);
          let e = "";
          if ((0, u.isDynamicRoute)(t.pathname) && t.searchParams && n) {
            let n = (0, i.searchParamsToUrlQuery)(t.searchParams),
              { result: o, params: a } = (0, h.interpolateAs)(
                t.pathname,
                t.pathname,
                n
              );
            o &&
              (e = (0, r.formatWithValidation)({
                pathname: o,
                hash: t.hash,
                query: (0, s.omit)(n, a),
              }));
          }
          let o =
            t.origin === c.origin ? t.href.slice(t.origin.length) : t.href;
          return n ? [o, e || o] : o;
        } catch (t) {
          return n ? [d] : d;
        }
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    65238: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let i = n(15039),
        r = n(10368),
        s = "function" == typeof IntersectionObserver,
        o = new Map(),
        a = [];
      function l(t) {
        let { rootRef: e, rootMargin: n, disabled: l } = t,
          u = l || !s,
          [h, c] = (0, i.useState)(!1),
          d = (0, i.useRef)(null),
          f = (0, i.useCallback)((t) => {
            d.current = t;
          }, []);
        return (
          (0, i.useEffect)(() => {
            if (s) {
              if (u || h) return;
              let t = d.current;
              if (t && t.tagName)
                return (function (t, e, n) {
                  let {
                    id: i,
                    observer: r,
                    elements: s,
                  } = (function (t) {
                    let e;
                    let n = {
                        root: t.root || null,
                        margin: t.rootMargin || "",
                      },
                      i = a.find(
                        (t) => t.root === n.root && t.margin === n.margin
                      );
                    if (i && (e = o.get(i))) return e;
                    let r = new Map();
                    return (
                      (e = {
                        id: n,
                        observer: new IntersectionObserver((t) => {
                          t.forEach((t) => {
                            let e = r.get(t.target),
                              n = t.isIntersecting || t.intersectionRatio > 0;
                            e && n && e(n);
                          });
                        }, t),
                        elements: r,
                      }),
                      a.push(n),
                      o.set(n, e),
                      e
                    );
                  })(n);
                  return (
                    s.set(t, e),
                    r.observe(t),
                    function () {
                      if ((s.delete(t), r.unobserve(t), 0 === s.size)) {
                        r.disconnect(), o.delete(i);
                        let t = a.findIndex(
                          (t) => t.root === i.root && t.margin === i.margin
                        );
                        t > -1 && a.splice(t, 1);
                      }
                    }
                  );
                })(t, (t) => t && c(t), {
                  root: null == e ? void 0 : e.current,
                  rootMargin: n,
                });
            } else if (!h) {
              let t = (0, r.requestIdleCallback)(() => c(!0));
              return () => (0, r.cancelIdleCallback)(t);
            }
          }, [u, n, e, h, d.current]),
          [
            f,
            h,
            (0, i.useCallback)(() => {
              c(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    76671: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let n = /[|\\{}()[\]^$+*?.-]/,
        i = /[|\\{}()[\]^$+*?.-]/g;
      function r(t) {
        return n.test(t) ? t.replace(i, "\\$&") : t;
      }
    },
    4104: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "RouterContext", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let i = n(68517)._(n(15039)).default.createContext(null);
    },
    53171: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          formatUrl: function () {
            return s;
          },
          urlObjectKeys: function () {
            return o;
          },
          formatWithValidation: function () {
            return a;
          },
        });
      let i = n(53388)._(n(21270)),
        r = /https?|ftp|gopher|file/;
      function s(t) {
        let { auth: e, hostname: n } = t,
          s = t.protocol || "",
          o = t.pathname || "",
          a = t.hash || "",
          l = t.query || "",
          u = !1;
        (e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : ""),
          t.host
            ? (u = e + t.host)
            : n &&
              ((u = e + (~n.indexOf(":") ? "[" + n + "]" : n)),
              t.port && (u += ":" + t.port)),
          l &&
            "object" == typeof l &&
            (l = String(i.urlQueryToSearchParams(l)));
        let h = t.search || (l && "?" + l) || "";
        return (
          s && !s.endsWith(":") && (s += ":"),
          t.slashes || ((!s || r.test(s)) && !1 !== u)
            ? ((u = "//" + (u || "")), o && "/" !== o[0] && (o = "/" + o))
            : u || (u = ""),
          a && "#" !== a[0] && (a = "#" + a),
          h && "?" !== h[0] && (h = "?" + h),
          "" +
            s +
            u +
            (o = o.replace(/[?#]/g, encodeURIComponent)) +
            (h = h.replace("#", "%23")) +
            a
        );
      }
      let o = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function a(t) {
        return s(t);
      }
    },
    29155: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          getSortedRoutes: function () {
            return i.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return r.isDynamicRoute;
          },
        });
      let i = n(40252),
        r = n(95630);
    },
    19418: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let i = n(85736),
        r = n(55422);
      function s(t, e, n) {
        let s = "",
          o = (0, r.getRouteRegex)(t),
          a = o.groups,
          l = (e !== t ? (0, i.getRouteMatcher)(o)(e) : "") || n;
        s = t;
        let u = Object.keys(a);
        return (
          u.every((t) => {
            let e = l[t] || "",
              { repeat: n, optional: i } = a[t],
              r = "[" + (n ? "..." : "") + t + "]";
            return (
              i && (r = (e ? "" : "/") + "[" + r + "]"),
              n && !Array.isArray(e) && (e = [e]),
              (i || t in l) &&
                (s =
                  s.replace(
                    r,
                    n
                      ? e.map((t) => encodeURIComponent(t)).join("/")
                      : encodeURIComponent(e)
                  ) || "/")
            );
          }) || (s = ""),
          { params: u, result: s }
        );
      }
    },
    95630: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let i = n(98675),
        r = /\/\[[^/]+?\](?=\/|$)/;
      function s(t) {
        return (
          (0, i.isInterceptionRouteAppPath)(t) &&
            (t = (0, i.extractInterceptionRouteInformation)(
              t
            ).interceptedRoute),
          r.test(t)
        );
      }
    },
    26466: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let i = n(31756),
        r = n(91781);
      function s(t) {
        if (!(0, i.isAbsoluteUrl)(t)) return !0;
        try {
          let e = (0, i.getLocationOrigin)(),
            n = new URL(t, e);
          return n.origin === e && (0, r.hasBasePath)(n.pathname);
        } catch (t) {
          return !1;
        }
      }
    },
    49481: function (t, e) {
      "use strict";
      function n(t, e) {
        let n = {};
        return (
          Object.keys(t).forEach((i) => {
            e.includes(i) || (n[i] = t[i]);
          }),
          n
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "omit", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    21270: function (t, e) {
      "use strict";
      function n(t) {
        let e = {};
        return (
          t.forEach((t, n) => {
            void 0 === e[n]
              ? (e[n] = t)
              : Array.isArray(e[n])
              ? e[n].push(t)
              : (e[n] = [e[n], t]);
          }),
          e
        );
      }
      function i(t) {
        return "string" != typeof t &&
          ("number" != typeof t || isNaN(t)) &&
          "boolean" != typeof t
          ? ""
          : String(t);
      }
      function r(t) {
        let e = new URLSearchParams();
        return (
          Object.entries(t).forEach((t) => {
            let [n, r] = t;
            Array.isArray(r)
              ? r.forEach((t) => e.append(n, i(t)))
              : e.set(n, i(r));
          }),
          e
        );
      }
      function s(t) {
        for (
          var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1;
          i < e;
          i++
        )
          n[i - 1] = arguments[i];
        return (
          n.forEach((e) => {
            Array.from(e.keys()).forEach((e) => t.delete(e)),
              e.forEach((e, n) => t.append(n, e));
          }),
          t
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          searchParamsToUrlQuery: function () {
            return n;
          },
          urlQueryToSearchParams: function () {
            return r;
          },
          assign: function () {
            return s;
          },
        });
    },
    85736: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let i = n(31756);
      function r(t) {
        let { re: e, groups: n } = t;
        return (t) => {
          let r = e.exec(t);
          if (!r) return !1;
          let s = (t) => {
              try {
                return decodeURIComponent(t);
              } catch (t) {
                throw new i.DecodeError("failed to decode param");
              }
            },
            o = {};
          return (
            Object.keys(n).forEach((t) => {
              let e = n[t],
                i = r[e.pos];
              void 0 !== i &&
                (o[t] = ~i.indexOf("/")
                  ? i.split("/").map((t) => s(t))
                  : e.repeat
                  ? [s(i)]
                  : s(i));
            }),
            o
          );
        };
      }
    },
    55422: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          getRouteRegex: function () {
            return l;
          },
          getNamedRouteRegex: function () {
            return c;
          },
          getNamedMiddlewareRegex: function () {
            return d;
          },
        });
      let i = n(98675),
        r = n(76671),
        s = n(89001);
      function o(t) {
        let e = t.startsWith("[") && t.endsWith("]");
        e && (t = t.slice(1, -1));
        let n = t.startsWith("...");
        return n && (t = t.slice(3)), { key: t, repeat: n, optional: e };
      }
      function a(t) {
        let e = (0, s.removeTrailingSlash)(t).slice(1).split("/"),
          n = {},
          a = 1;
        return {
          parameterizedRoute: e
            .map((t) => {
              let e = i.INTERCEPTION_ROUTE_MARKERS.find((e) => t.startsWith(e)),
                s = t.match(/\[((?:\[.*\])|.+)\]/);
              if (e && s) {
                let { key: t, optional: i, repeat: l } = o(s[1]);
                return (
                  (n[t] = { pos: a++, repeat: l, optional: i }),
                  "/" + (0, r.escapeStringRegexp)(e) + "([^/]+?)"
                );
              }
              if (!s) return "/" + (0, r.escapeStringRegexp)(t);
              {
                let { key: t, repeat: e, optional: i } = o(s[1]);
                return (
                  (n[t] = { pos: a++, repeat: e, optional: i }),
                  e ? (i ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: n,
        };
      }
      function l(t) {
        let { parameterizedRoute: e, groups: n } = a(t);
        return { re: RegExp("^" + e + "(?:/)?$"), groups: n };
      }
      function u(t) {
        let {
            interceptionMarker: e,
            getSafeRouteKey: n,
            segment: i,
            routeKeys: s,
            keyPrefix: a,
          } = t,
          { key: l, optional: u, repeat: h } = o(i),
          c = l.replace(/\W/g, "");
        a && (c = "" + a + c);
        let d = !1;
        (0 === c.length || c.length > 30) && (d = !0),
          isNaN(parseInt(c.slice(0, 1))) || (d = !0),
          d && (c = n()),
          a ? (s[c] = "" + a + l) : (s[c] = l);
        let f = e ? (0, r.escapeStringRegexp)(e) : "";
        return h
          ? u
            ? "(?:/" + f + "(?<" + c + ">.+?))?"
            : "/" + f + "(?<" + c + ">.+?)"
          : "/" + f + "(?<" + c + ">[^/]+?)";
      }
      function h(t, e) {
        let n;
        let o = (0, s.removeTrailingSlash)(t).slice(1).split("/"),
          a =
            ((n = 0),
            () => {
              let t = "",
                e = ++n;
              for (; e > 0; )
                (t += String.fromCharCode(97 + ((e - 1) % 26))),
                  (e = Math.floor((e - 1) / 26));
              return t;
            }),
          l = {};
        return {
          namedParameterizedRoute: o
            .map((t) => {
              let n = i.INTERCEPTION_ROUTE_MARKERS.some((e) => t.startsWith(e)),
                s = t.match(/\[((?:\[.*\])|.+)\]/);
              if (n && s) {
                let [n] = t.split(s[0]);
                return u({
                  getSafeRouteKey: a,
                  interceptionMarker: n,
                  segment: s[1],
                  routeKeys: l,
                  keyPrefix: e ? "nxtI" : void 0,
                });
              }
              return s
                ? u({
                    getSafeRouteKey: a,
                    segment: s[1],
                    routeKeys: l,
                    keyPrefix: e ? "nxtP" : void 0,
                  })
                : "/" + (0, r.escapeStringRegexp)(t);
            })
            .join(""),
          routeKeys: l,
        };
      }
      function c(t, e) {
        let n = h(t, e);
        return {
          ...l(t),
          namedRegex: "^" + n.namedParameterizedRoute + "(?:/)?$",
          routeKeys: n.routeKeys,
        };
      }
      function d(t, e) {
        let { parameterizedRoute: n } = a(t),
          { catchAll: i = !0 } = e;
        if ("/" === n) return { namedRegex: "^/" + (i ? ".*" : "") + "$" };
        let { namedParameterizedRoute: r } = h(t, !1);
        return { namedRegex: "^" + r + (i ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    40252: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      class n {
        insert(t) {
          this._insert(t.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(t) {
          void 0 === t && (t = "/");
          let e = [...this.children.keys()].sort();
          null !== this.slugName && e.splice(e.indexOf("[]"), 1),
            null !== this.restSlugName && e.splice(e.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              e.splice(e.indexOf("[[...]]"), 1);
          let n = e
            .map((e) => this.children.get(e)._smoosh("" + t + e + "/"))
            .reduce((t, e) => [...t, ...e], []);
          if (
            (null !== this.slugName &&
              n.push(
                ...this.children
                  .get("[]")
                  ._smoosh(t + "[" + this.slugName + "]/")
              ),
            !this.placeholder)
          ) {
            let e = "/" === t ? "/" : t.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  e +
                  '" and "' +
                  e +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            n.unshift(e);
          }
          return (
            null !== this.restSlugName &&
              n.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(t + "[..." + this.restSlugName + "]/")
              ),
            null !== this.optionalRestSlugName &&
              n.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(t + "[[..." + this.optionalRestSlugName + "]]/")
              ),
            n
          );
        }
        _insert(t, e, i) {
          if (0 === t.length) {
            this.placeholder = !1;
            return;
          }
          if (i) throw Error("Catch-all must be the last part of the URL.");
          let r = t[0];
          if (r.startsWith("[") && r.endsWith("]")) {
            let n = r.slice(1, -1),
              o = !1;
            if (
              (n.startsWith("[") &&
                n.endsWith("]") &&
                ((n = n.slice(1, -1)), (o = !0)),
              n.startsWith("...") && ((n = n.substring(3)), (i = !0)),
              n.startsWith("[") || n.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  n +
                  "')."
              );
            if (n.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  n +
                  "')."
              );
            function s(t, n) {
              if (null !== t && t !== n)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    t +
                    "' !== '" +
                    n +
                    "')."
                );
              e.forEach((t) => {
                if (t === n)
                  throw Error(
                    'You cannot have the same slug name "' +
                      n +
                      '" repeat within a single dynamic path'
                  );
                if (t.replace(/\W/g, "") === r.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      t +
                      '" and "' +
                      n +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                e.push(n);
            }
            if (i) {
              if (o) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      t[0] +
                      '" ).'
                  );
                s(this.optionalRestSlugName, n),
                  (this.optionalRestSlugName = n),
                  (r = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      t[0] +
                      '").'
                  );
                s(this.restSlugName, n), (this.restSlugName = n), (r = "[...]");
              }
            } else {
              if (o)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    t[0] +
                    '").'
                );
              s(this.slugName, n), (this.slugName = n), (r = "[]");
            }
          }
          this.children.has(r) || this.children.set(r, new n()),
            this.children.get(r)._insert(t.slice(1), e, i);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function i(t) {
        let e = new n();
        return t.forEach((t) => e.insert(t)), e.smoosh();
      }
    },
    31756: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          WEB_VITALS: function () {
            return n;
          },
          execOnce: function () {
            return i;
          },
          isAbsoluteUrl: function () {
            return s;
          },
          getLocationOrigin: function () {
            return o;
          },
          getURL: function () {
            return a;
          },
          getDisplayName: function () {
            return l;
          },
          isResSent: function () {
            return u;
          },
          normalizeRepeatedSlashes: function () {
            return h;
          },
          loadGetInitialProps: function () {
            return c;
          },
          SP: function () {
            return d;
          },
          ST: function () {
            return f;
          },
          DecodeError: function () {
            return p;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return g;
          },
          MissingStaticPage: function () {
            return v;
          },
          MiddlewareNotFoundError: function () {
            return y;
          },
          stringifyError: function () {
            return x;
          },
        });
      let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function i(t) {
        let e,
          n = !1;
        return function () {
          for (var i = arguments.length, r = Array(i), s = 0; s < i; s++)
            r[s] = arguments[s];
          return n || ((n = !0), (e = t(...r))), e;
        };
      }
      let r = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        s = (t) => r.test(t);
      function o() {
        let { protocol: t, hostname: e, port: n } = window.location;
        return t + "//" + e + (n ? ":" + n : "");
      }
      function a() {
        let { href: t } = window.location,
          e = o();
        return t.substring(e.length);
      }
      function l(t) {
        return "string" == typeof t ? t : t.displayName || t.name || "Unknown";
      }
      function u(t) {
        return t.finished || t.headersSent;
      }
      function h(t) {
        let e = t.split("?");
        return (
          e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (e[1] ? "?" + e.slice(1).join("?") : "")
        );
      }
      async function c(t, e) {
        let n = e.res || (e.ctx && e.ctx.res);
        if (!t.getInitialProps)
          return e.ctx && e.Component
            ? { pageProps: await c(e.Component, e.ctx) }
            : {};
        let i = await t.getInitialProps(e);
        if (n && u(n)) return i;
        if (!i)
          throw Error(
            '"' +
              l(t) +
              '.getInitialProps()" should resolve to an object. But found "' +
              i +
              '" instead.'
          );
        return i;
      }
      let d = "undefined" != typeof performance,
        f =
          d &&
          ["mark", "measure", "getEntriesByName"].every(
            (t) => "function" == typeof performance[t]
          );
      class p extends Error {}
      class m extends Error {}
      class g extends Error {
        constructor(t) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + t);
        }
      }
      class v extends Error {
        constructor(t, e) {
          super(),
            (this.message =
              "Failed to load static file for page: " + t + " " + e);
        }
      }
      class y extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function x(t) {
        return JSON.stringify({ message: t.message, stack: t.stack });
      }
    },
    71335: function (t, e, n) {
      t.exports = n(24046);
    },
    97961: function (t, e, n) {
      "use strict";
      n.d(e, {
        y: function () {
          return W;
        },
      });
      var i = n(62370);
      let r = (t, e, n) =>
        (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
      function s(t, e, n, s) {
        if (t === e && n === s) return i.Z;
        let o = (e) =>
          (function (t, e, n, i, s) {
            let o, a;
            let l = 0;
            do (o = r((a = e + (n - e) / 2), i, s) - t) > 0 ? (n = a) : (e = a);
            while (Math.abs(o) > 1e-7 && ++l < 12);
            return a;
          })(e, 0, 1, t, n);
        return (t) => (0 === t || 1 === t ? t : r(o(t), e, s));
      }
      let o = s(0.42, 0, 1, 1),
        a = s(0, 0, 0.58, 1),
        l = s(0.42, 0, 0.58, 1),
        u = (t) => Array.isArray(t) && "number" != typeof t[0];
      var h = n(33324),
        c = n(39085),
        d = n(1873),
        f = n(15455);
      let p = s(0.33, 1.53, 0.69, 0.99),
        m = (0, f.M)(p),
        g = (0, d.o)(m),
        v = {
          linear: i.Z,
          easeIn: o,
          easeInOut: l,
          easeOut: a,
          circIn: c.Z7,
          circInOut: c.X7,
          circOut: c.Bn,
          backIn: m,
          backInOut: g,
          backOut: p,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * m(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        y = (t) => {
          if (Array.isArray(t)) {
            (0, h.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, n, i, r] = t;
            return s(e, n, i, r);
          }
          return "string" == typeof t
            ? ((0, h.k)(void 0 !== v[t], `Invalid easing type '${t}'`), v[t])
            : t;
        };
      var x = n(78314),
        P = n(39276);
      function b({
        duration: t = 300,
        keyframes: e,
        times: n,
        ease: i = "easeInOut",
      }) {
        let r = u(i) ? i.map(y) : y(i),
          s = { done: !1, value: e[0] },
          o = (n && n.length === e.length ? n : (0, P.Y)(e)).map((e) => e * t),
          a = (0, x.s)(o, e, {
            ease: Array.isArray(r)
              ? r
              : e.map(() => r || l).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      var w = n(23376),
        A = n(31792);
      function S(t, e, n) {
        let i = Math.max(e - 5, 0);
        return (0, A.R)(n - t(i), e - i);
      }
      var T = n(99045);
      function E(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let R = ["duration", "bounce"],
        M = ["stiffness", "damping", "mass"];
      function C(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function V({ keyframes: t, restDelta: e, restSpeed: n, ...i }) {
        let r;
        let s = t[0],
          o = t[t.length - 1],
          a = { done: !1, value: s },
          {
            stiffness: l,
            damping: u,
            mass: c,
            duration: d,
            velocity: f,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!C(t, M) && C(t, R)) {
              let n = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: n = 0,
                mass: i = 1,
              }) {
                let r, s;
                (0, h.K)(
                  t <= (0, w.w)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let o = 1 - e;
                (o = (0, T.u)(0.05, 1, o)),
                  (t = (0, T.u)(0.01, 10, (0, w.X)(t))),
                  o < 1
                    ? ((r = (e) => {
                        let i = e * o,
                          r = i * t;
                        return 0.001 - ((i - n) / E(e, o)) * Math.exp(-r);
                      }),
                      (s = (e) => {
                        let i = e * o * t,
                          s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          a = E(Math.pow(e, 2), o);
                        return (
                          ((i * n + n - s) *
                            Math.exp(-i) *
                            (-r(e) + 0.001 > 0 ? -1 : 1)) /
                          a
                        );
                      }))
                    : ((r = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - n) * t + 1)),
                      (s = (e) => t * t * (n - e) * Math.exp(-e * t)));
                let a = (function (t, e, n) {
                  let i = n;
                  for (let n = 1; n < 12; n++) i -= t(i) / e(i);
                  return i;
                })(r, s, 5 / t);
                if (((t = (0, w.w)(t)), isNaN(a)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(a, 2) * i;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(i * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...n, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...i, velocity: -(0, w.X)(i.velocity || 0) }),
          m = f || 0,
          g = u / (2 * Math.sqrt(l * c)),
          v = o - s,
          y = (0, w.X)(Math.sqrt(l / c)),
          x = 5 > Math.abs(v);
        if ((n || (n = x ? 0.01 : 2), e || (e = x ? 0.005 : 0.5), g < 1)) {
          let t = E(y, g);
          r = (e) =>
            o -
            Math.exp(-g * y * e) *
              (((m + g * y * v) / t) * Math.sin(t * e) + v * Math.cos(t * e));
        } else if (1 === g)
          r = (t) => o - Math.exp(-y * t) * (v + (m + y * v) * t);
        else {
          let t = y * Math.sqrt(g * g - 1);
          r = (e) => {
            let n = Math.exp(-g * y * e),
              i = Math.min(t * e, 300);
            return (
              o -
              (n * ((m + g * y * v) * Math.sinh(i) + t * v * Math.cosh(i))) / t
            );
          };
        }
        return {
          calculatedDuration: (p && d) || null,
          next: (t) => {
            let i = r(t);
            if (p) a.done = t >= d;
            else {
              let s = m;
              0 !== t && (s = g < 1 ? S(r, t, i) : 0);
              let l = Math.abs(s) <= n,
                u = Math.abs(o - i) <= e;
              a.done = l && u;
            }
            return (a.value = a.done ? o : i), a;
          },
        };
      }
      function j({
        keyframes: t,
        velocity: e = 0,
        power: n = 0.8,
        timeConstant: i = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c, d;
        let f = t[0],
          p = { done: !1, value: f },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          g = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          v = n * e,
          y = f + v,
          x = void 0 === o ? y : o(y);
        x !== y && (v = x - f);
        let P = (t) => -v * Math.exp(-t / i),
          b = (t) => x + P(t),
          w = (t) => {
            let e = P(t),
              n = b(t);
            (p.done = Math.abs(e) <= u), (p.value = p.done ? x : n);
          },
          A = (t) => {
            m(p.value) &&
              ((c = t),
              (d = V({
                keyframes: [p.value, g(p.value)],
                velocity: S(b, t, p.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          A(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== c || ((e = !0), w(t), A(t)),
              void 0 !== c && t > c)
                ? d.next(t - c)
                : (e || w(t), p);
            },
          }
        );
      }
      var D = n(22908),
        k = n(11417);
      let L = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => k.Wi.update(e, !0),
          stop: () => (0, k.Pn)(e),
          now: () =>
            k.frameData.isProcessing ? k.frameData.timestamp : D.X.now(),
        };
      };
      function O(t) {
        let e = 0,
          n = t.next(e);
        for (; !n.done && e < 2e4; ) (e += 50), (n = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      var F = n(17850),
        B = n(73385);
      let I = { decay: j, inertia: j, tween: b, keyframes: b, spring: V },
        N = (t) => t / 100;
      function W({
        autoplay: t = !0,
        delay: e = 0,
        driver: n = L,
        keyframes: i,
        type: r = "keyframes",
        repeat: s = 0,
        repeatDelay: o = 0,
        repeatType: a = "loop",
        onPlay: l,
        onStop: u,
        onComplete: h,
        onUpdate: c,
        ...d
      }) {
        let f,
          p,
          m,
          g,
          v,
          y = 1,
          x = !1,
          P = () => {
            p = new Promise((t) => {
              f = t;
            });
          };
        P();
        let A = I[r] || b;
        A !== b &&
          "number" != typeof i[0] &&
          ((g = (0, B.z)(N, (0, F.C)(i[0], i[1]))), (i = [0, 100]));
        let S = A({ ...d, keyframes: i });
        "mirror" === a &&
          (v = A({
            ...d,
            keyframes: [...i].reverse(),
            velocity: -(d.velocity || 0),
          }));
        let E = "idle",
          R = null,
          M = null,
          C = null;
        null === S.calculatedDuration && s && (S.calculatedDuration = O(S));
        let { calculatedDuration: V } = S,
          j = 1 / 0,
          D = 1 / 0;
        null !== V && (D = (j = V + o) * (s + 1) - o);
        let k = 0,
          W = (t) => {
            if (null === M) return;
            y > 0 && (M = Math.min(M, t)),
              y < 0 && (M = Math.min(t - D / y, M));
            let n =
                (k = null !== R ? R : Math.round(t - M) * y) -
                e * (y >= 0 ? 1 : -1),
              r = y >= 0 ? n < 0 : n > D;
            (k = Math.max(n, 0)), "finished" === E && null === R && (k = D);
            let l = k,
              u = S;
            if (s) {
              let t = Math.min(k, D) / j,
                e = Math.floor(t),
                n = t % 1;
              !n && t >= 1 && (n = 1),
                1 === n && e--,
                (e = Math.min(e, s + 1)) % 2 &&
                  ("reverse" === a
                    ? ((n = 1 - n), o && (n -= o / j))
                    : "mirror" === a && (u = v)),
                (l = (0, T.u)(0, 1, n) * j);
            }
            let h = r ? { done: !1, value: i[0] } : u.next(l);
            g && (h.value = g(h.value));
            let { done: d } = h;
            r || null === V || (d = y >= 0 ? k >= D : k <= 0);
            let f = null === R && ("finished" === E || ("running" === E && d));
            return c && c(h.value), f && $(), h;
          },
          U = () => {
            m && m.stop(), (m = void 0);
          },
          _ = () => {
            (E = "idle"), U(), f(), P(), (M = C = null);
          },
          $ = () => {
            (E = "finished"), h && h(), U(), f();
          },
          z = () => {
            if (x) return;
            m || (m = n(W));
            let t = m.now();
            l && l(),
              null !== R ? (M = t - R) : (M && "finished" !== E) || (M = t),
              "finished" === E && P(),
              (C = M),
              (R = null),
              (E = "running"),
              m.start();
          };
        t && z();
        let H = {
          then: (t, e) => p.then(t, e),
          get time() {
            return (0, w.X)(k);
          },
          set time(newTime) {
            (k = newTime = (0, w.w)(newTime)),
              null === R && m && 0 !== y
                ? (M = m.now() - newTime / y)
                : (R = newTime);
          },
          get duration() {
            let t = null === S.calculatedDuration ? O(S) : S.calculatedDuration;
            return (0, w.X)(t);
          },
          get speed() {
            return y;
          },
          set speed(newSpeed) {
            if (newSpeed === y || !m) return;
            (y = newSpeed), (H.time = (0, w.X)(k));
          },
          get state() {
            return E;
          },
          play: z,
          pause: () => {
            (E = "paused"), (R = k);
          },
          stop: () => {
            (x = !0), "idle" !== E && ((E = "idle"), u && u(), _());
          },
          cancel: () => {
            null !== C && W(C), _();
          },
          complete: () => {
            E = "finished";
          },
          sample: (t) => ((M = 0), W(t)),
        };
        return H;
      }
    },
    637: function (t, e, n) {
      "use strict";
      n.d(e, {
        M: function () {
          return g;
        },
      });
      var i = n(15039),
        r = n(85422),
        s = n(11518),
        o = n(38676),
        a = n(15644);
      class l extends i.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = this.props.sizeRef.current;
            (t.height = e.offsetHeight || 0),
              (t.width = e.offsetWidth || 0),
              (t.top = e.offsetTop),
              (t.left = e.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function u({ children: t, isPresent: e }) {
        let n = (0, i.useId)(),
          r = (0, i.useRef)(null),
          s = (0, i.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, i.useInsertionEffect)(() => {
            let { width: t, height: i, top: o, left: a } = s.current;
            if (e || !r.current || !t || !i) return;
            r.current.dataset.motionPopId = n;
            let l = document.createElement("style");
            return (
              document.head.appendChild(l),
              l.sheet &&
                l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${i}px !important;
            top: ${o}px !important;
            left: ${a}px !important;
          }
        `),
              () => {
                document.head.removeChild(l);
              }
            );
          }, [e]),
          i.createElement(
            l,
            { isPresent: e, childRef: r, sizeRef: s },
            i.cloneElement(t, { ref: r })
          )
        );
      }
      let h = ({
        children: t,
        initial: e,
        isPresent: n,
        onExitComplete: r,
        custom: s,
        presenceAffectsLayout: l,
        mode: h,
      }) => {
        let d = (0, a.h)(c),
          f = (0, i.useId)(),
          p = (0, i.useMemo)(
            () => ({
              id: f,
              initial: e,
              isPresent: n,
              custom: s,
              onExitComplete: (t) => {
                for (let e of (d.set(t, !0), d.values())) if (!e) return;
                r && r();
              },
              register: (t) => (d.set(t, !1), () => d.delete(t)),
            }),
            l ? void 0 : [n]
          );
        return (
          (0, i.useMemo)(() => {
            d.forEach((t, e) => d.set(e, !1));
          }, [n]),
          i.useEffect(() => {
            n || d.size || !r || r();
          }, [n]),
          "popLayout" === h && (t = i.createElement(u, { isPresent: n }, t)),
          i.createElement(o.O.Provider, { value: p }, t)
        );
      };
      function c() {
        return new Map();
      }
      var d = n(11469),
        f = n(17563),
        p = n(33324);
      let m = (t) => t.key || "",
        g = ({
          children: t,
          custom: e,
          initial: n = !0,
          onExitComplete: o,
          exitBeforeEnter: a,
          presenceAffectsLayout: l = !0,
          mode: u = "sync",
        }) => {
          var c;
          (0, p.k)(!a, "Replace exitBeforeEnter with mode='wait'");
          let g = (0, i.useContext)(d.p).forceRender || (0, r.N)()[0],
            v = (0, s.t)(),
            y = (function (t) {
              let e = [];
              return (
                i.Children.forEach(t, (t) => {
                  (0, i.isValidElement)(t) && e.push(t);
                }),
                e
              );
            })(t),
            x = y,
            P = (0, i.useRef)(new Map()).current,
            b = (0, i.useRef)(x),
            w = (0, i.useRef)(new Map()).current,
            A = (0, i.useRef)(!0);
          if (
            ((0, f.L)(() => {
              (A.current = !1),
                (function (t, e) {
                  t.forEach((t) => {
                    let n = m(t);
                    e.set(n, t);
                  });
                })(y, w),
                (b.current = x);
            }),
            (c = () => {
              (A.current = !0), w.clear(), P.clear();
            }),
            (0, i.useEffect)(() => () => c(), []),
            A.current)
          )
            return i.createElement(
              i.Fragment,
              null,
              x.map((t) =>
                i.createElement(
                  h,
                  {
                    key: m(t),
                    isPresent: !0,
                    initial: !!n && void 0,
                    presenceAffectsLayout: l,
                    mode: u,
                  },
                  t
                )
              )
            );
          x = [...x];
          let S = b.current.map(m),
            T = y.map(m),
            E = S.length;
          for (let t = 0; t < E; t++) {
            let e = S[t];
            -1 !== T.indexOf(e) || P.has(e) || P.set(e, void 0);
          }
          return (
            "wait" === u && P.size && (x = []),
            P.forEach((t, n) => {
              if (-1 !== T.indexOf(n)) return;
              let r = w.get(n);
              if (!r) return;
              let s = S.indexOf(n),
                a = t;
              a ||
                ((a = i.createElement(
                  h,
                  {
                    key: m(r),
                    isPresent: !1,
                    onExitComplete: () => {
                      P.delete(n);
                      let t = Array.from(w.keys()).filter(
                        (t) => !T.includes(t)
                      );
                      if (
                        (t.forEach((t) => w.delete(t)),
                        (b.current = y.filter((e) => {
                          let i = m(e);
                          return i === n || t.includes(i);
                        })),
                        !P.size)
                      ) {
                        if (!1 === v.current) return;
                        g(), o && o();
                      }
                    },
                    custom: e,
                    presenceAffectsLayout: l,
                    mode: u,
                  },
                  r
                )),
                P.set(n, a)),
                x.splice(s, 0, a);
            }),
            (x = x.map((t) => {
              let e = t.key;
              return P.has(e)
                ? t
                : i.createElement(
                    h,
                    {
                      key: m(t),
                      isPresent: !0,
                      presenceAffectsLayout: l,
                      mode: u,
                    },
                    t
                  );
            })),
            i.createElement(
              i.Fragment,
              null,
              P.size ? x : x.map((t) => (0, i.cloneElement)(t))
            )
          );
        };
    },
    11469: function (t, e, n) {
      "use strict";
      n.d(e, {
        p: function () {
          return i;
        },
      });
      let i = (0, n(15039).createContext)({});
    },
    57886: function (t, e, n) {
      "use strict";
      n.d(e, {
        _: function () {
          return i;
        },
      });
      let i = (0, n(15039).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    38676: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return i;
        },
      });
      let i = (0, n(15039).createContext)(null);
    },
    39085: function (t, e, n) {
      "use strict";
      n.d(e, {
        Bn: function () {
          return o;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return s;
        },
      });
      var i = n(1873),
        r = n(15455);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, r.M)(s),
        a = (0, i.o)(s);
    },
    1873: function (t, e, n) {
      "use strict";
      n.d(e, {
        o: function () {
          return i;
        },
      });
      let i = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    15455: function (t, e, n) {
      "use strict";
      n.d(e, {
        M: function () {
          return i;
        },
      });
      let i = (t) => (e) => 1 - t(1 - e);
    },
    90975: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var i = n(85458);
      class r {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(t) {
          if (!this.scheduled.has(t))
            return this.scheduled.add(t), this.order.push(t), !0;
        }
        remove(t) {
          let e = this.order.indexOf(t);
          -1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      }
      let s = [
        "prepare",
        "read",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function o(t, e) {
        let n = !1,
          o = !0,
          a = { delta: 0, timestamp: 0, isProcessing: !1 },
          l = s.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new r(),
                  n = new r(),
                  i = 0,
                  s = !1,
                  o = !1,
                  a = new WeakSet(),
                  l = {
                    schedule: (t, r = !1, o = !1) => {
                      let l = o && s,
                        u = l ? e : n;
                      return (
                        r && a.add(t),
                        u.add(t) && l && s && (i = e.order.length),
                        t
                      );
                    },
                    cancel: (t) => {
                      n.remove(t), a.delete(t);
                    },
                    process: (r) => {
                      if (s) {
                        o = !0;
                        return;
                      }
                      if (
                        ((s = !0),
                        ([e, n] = [n, e]),
                        n.clear(),
                        (i = e.order.length))
                      )
                        for (let n = 0; n < i; n++) {
                          let i = e.order[n];
                          a.has(i) && (l.schedule(i), t()), i(r);
                        }
                      (s = !1), o && ((o = !1), l.process(r));
                    },
                  };
                return l;
              })(() => (n = !0))),
              t
            ),
            {}
          ),
          u = (t) => {
            l[t].process(a);
          },
          h = () => {
            let r = i.c.useManualTiming ? a.timestamp : performance.now();
            (n = !1),
              (a.delta = o
                ? 1e3 / 60
                : Math.max(Math.min(r - a.timestamp, 40), 1)),
              (a.timestamp = r),
              (a.isProcessing = !0),
              s.forEach(u),
              (a.isProcessing = !1),
              n && e && ((o = !1), t(h));
          },
          c = () => {
            (n = !0), (o = !0), a.isProcessing || t(h);
          };
        return {
          schedule: s.reduce((t, e) => {
            let i = l[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (n || c(), i.schedule(t, e, r))), t
            );
          }, {}),
          cancel: (t) => s.forEach((e) => l[e].cancel(t)),
          state: a,
          steps: l,
        };
      }
    },
    11417: function (t, e, n) {
      "use strict";
      n.d(e, {
        Pn: function () {
          return s;
        },
        S6: function () {
          return a;
        },
        Wi: function () {
          return r;
        },
        frameData: function () {
          return o;
        },
      });
      var i = n(62370);
      let {
        schedule: r,
        cancel: s,
        state: o,
        steps: a,
      } = (0, n(90975).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : i.Z,
        !0
      );
    },
    22908: function (t, e, n) {
      "use strict";
      let i;
      n.d(e, {
        X: function () {
          return a;
        },
      });
      var r = n(85458),
        s = n(11417);
      function o() {
        i = void 0;
      }
      let a = {
        now: () => (
          void 0 === i &&
            a.set(
              s.frameData.isProcessing || r.c.useManualTiming
                ? s.frameData.timestamp
                : performance.now()
            ),
          i
        ),
        set: (t) => {
          (i = t), queueMicrotask(o);
        },
      };
    },
    28967: function (t, e, n) {
      "use strict";
      let i;
      n.d(e, {
        E: function () {
          return iI;
        },
      });
      var r,
        s,
        o = n(15039),
        a = n(57886);
      let l = (0, o.createContext)({});
      var u = n(38676),
        h = n(17563);
      let c = (0, o.createContext)({ strict: !1 }),
        d = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
        f = "data-" + d("framerAppearId"),
        { schedule: p, cancel: m } = (0, n(90975).Z)(queueMicrotask, !1);
      function g(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function v(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function y(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      let x = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        P = ["initial", ...x];
      function b(t) {
        return y(t.animate) || P.some((e) => v(t[e]));
      }
      function w(t) {
        return !!(b(t) || t.variants);
      }
      function A(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let S = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        T = {};
      for (let t in S) T[t] = { isEnabled: (e) => S[t].some((t) => !!e[t]) };
      var E = n(7910),
        R = n(11469);
      let M = (0, o.createContext)({}),
        C = Symbol.for("motionComponentSymbol"),
        V = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function j(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (V.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
      let D = {},
        k = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        L = new Set(k);
      function O(t, { layout: e, layoutId: n }) {
        return (
          L.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== n) && (!!D[t] || "opacity" === t))
        );
      }
      var F = n(21487);
      let B = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        I = k.length;
      var N = n(98381);
      let W = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var U = n(63937),
        _ = n(83605);
      let $ = { ...U.Rx, transform: Math.round },
        z = {
          borderWidth: _.px,
          borderTopWidth: _.px,
          borderRightWidth: _.px,
          borderBottomWidth: _.px,
          borderLeftWidth: _.px,
          borderRadius: _.px,
          radius: _.px,
          borderTopLeftRadius: _.px,
          borderTopRightRadius: _.px,
          borderBottomRightRadius: _.px,
          borderBottomLeftRadius: _.px,
          width: _.px,
          maxWidth: _.px,
          height: _.px,
          maxHeight: _.px,
          size: _.px,
          top: _.px,
          right: _.px,
          bottom: _.px,
          left: _.px,
          padding: _.px,
          paddingTop: _.px,
          paddingRight: _.px,
          paddingBottom: _.px,
          paddingLeft: _.px,
          margin: _.px,
          marginTop: _.px,
          marginRight: _.px,
          marginBottom: _.px,
          marginLeft: _.px,
          rotate: _.RW,
          rotateX: _.RW,
          rotateY: _.RW,
          rotateZ: _.RW,
          scale: U.bA,
          scaleX: U.bA,
          scaleY: U.bA,
          scaleZ: U.bA,
          skew: _.RW,
          skewX: _.RW,
          skewY: _.RW,
          distance: _.px,
          translateX: _.px,
          translateY: _.px,
          translateZ: _.px,
          x: _.px,
          y: _.px,
          z: _.px,
          perspective: _.px,
          transformPerspective: _.px,
          opacity: U.Fq,
          originX: _.$C,
          originY: _.$C,
          originZ: _.px,
          zIndex: $,
          fillOpacity: U.Fq,
          strokeOpacity: U.Fq,
          numOctaves: $,
        };
      function H(t, e, n, i) {
        let { style: r, vars: s, transform: o, transformOrigin: a } = t,
          l = !1,
          u = !1,
          h = !0;
        for (let t in e) {
          let n = e[t];
          if ((0, N.f)(t)) {
            s[t] = n;
            continue;
          }
          let i = z[t],
            c = W(n, i);
          if (L.has(t)) {
            if (((l = !0), (o[t] = c), !h)) continue;
            n !== (i.default || 0) && (h = !1);
          } else t.startsWith("origin") ? ((u = !0), (a[t] = c)) : (r[t] = c);
        }
        if (
          (!e.transform &&
            (l || i
              ? (r.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: n = !0,
                  },
                  i,
                  r
                ) {
                  let s = "";
                  for (let e = 0; e < I; e++) {
                    let n = k[e];
                    if (void 0 !== t[n]) {
                      let e = B[n] || n;
                      s += `${e}(${t[n]}) `;
                    }
                  }
                  return (
                    e && !t.z && (s += "translateZ(0)"),
                    (s = s.trim()),
                    r ? (s = r(t, i ? "" : s)) : n && i && (s = "none"),
                    s
                  );
                })(t.transform, n, h, i))
              : r.transform && (r.transform = "none")),
          u)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: n = 0 } = a;
          r.transformOrigin = `${t} ${e} ${n}`;
        }
      }
      let X = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function Z(t, e, n) {
        for (let i in e) (0, F.i)(e[i]) || O(i, n) || (t[i] = e[i]);
      }
      let Y = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function q(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          Y.has(t)
        );
      }
      let K = (t) => !q(t);
      try {
        (r = require("@emotion/is-prop-valid").default) &&
          (K = (t) => (t.startsWith("on") ? !q(t) : r(t)));
      } catch (t) {}
      function G(t, e, n) {
        return "string" == typeof t ? t : _.px.transform(e + n * t);
      }
      let Q = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        J = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function tt(
        t,
        {
          attrX: e,
          attrY: n,
          attrScale: i,
          originX: r,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        c,
        d
      ) {
        if ((H(t, u, h, d), c)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: f, style: p, dimensions: m } = t;
        f.transform && (m && (p.transform = f.transform), delete f.transform),
          m &&
            (void 0 !== r || void 0 !== s || p.transform) &&
            (p.transformOrigin = (function (t, e, n) {
              let i = G(e, t.x, t.width),
                r = G(n, t.y, t.height);
              return `${i} ${r}`;
            })(m, void 0 !== r ? r : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (f.x = e),
          void 0 !== n && (f.y = n),
          void 0 !== i && (f.scale = i),
          void 0 !== o &&
            (function (t, e, n = 1, i = 0, r = !0) {
              t.pathLength = 1;
              let s = r ? Q : J;
              t[s.offset] = _.px.transform(-i);
              let o = _.px.transform(e),
                a = _.px.transform(n);
              t[s.array] = `${o} ${a}`;
            })(f, o, a, l, !1);
      }
      let te = () => ({ ...X(), attrs: {} }),
        tn = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function ti(t, { style: e, vars: n }, i, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(i)),
        n))
          t.style.setProperty(s, n[s]);
      }
      let tr = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function ts(t, e, n, i) {
        for (let n in (ti(t, e, void 0, i), e.attrs))
          t.setAttribute(tr.has(n) ? n : d(n), e.attrs[n]);
      }
      function to(t, e) {
        let { style: n } = t,
          i = {};
        for (let r in n)
          ((0, F.i)(n[r]) || (e.style && (0, F.i)(e.style[r])) || O(r, t)) &&
            (i[r] = n[r]);
        return i;
      }
      function ta(t, e) {
        let n = to(t, e);
        for (let i in t)
          ((0, F.i)(t[i]) || (0, F.i)(e[i])) &&
            (n[
              -1 !== k.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return n;
      }
      function tl(t, e, n, i = {}, r = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)),
          e
        );
      }
      var tu = n(15644);
      let th = (t) => Array.isArray(t),
        tc = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        td = (t) => (th(t) ? t[t.length - 1] || 0 : t);
      function tf(t) {
        let e = (0, F.i)(t) ? t.get() : t;
        return tc(e) ? e.toValue() : e;
      }
      let tp = (t) => (e, n) => {
        let i = (0, o.useContext)(l),
          r = (0, o.useContext)(u.O),
          s = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onMount: n,
              },
              i,
              r,
              s
            ) {
              let o = {
                latestValues: (function (t, e, n, i) {
                  let r = {},
                    s = i(t, {});
                  for (let t in s) r[t] = tf(s[t]);
                  let { initial: o, animate: a } = t,
                    l = b(t),
                    u = w(t);
                  e &&
                    u &&
                    !l &&
                    !1 !== t.inherit &&
                    (void 0 === o && (o = e.initial),
                    void 0 === a && (a = e.animate));
                  let h = !!n && !1 === n.initial,
                    c = (h = h || !1 === o) ? a : o;
                  return (
                    c &&
                      "boolean" != typeof c &&
                      !y(c) &&
                      (Array.isArray(c) ? c : [c]).forEach((e) => {
                        let n = tl(t, e);
                        if (!n) return;
                        let { transitionEnd: i, transition: s, ...o } = n;
                        for (let t in o) {
                          let e = o[t];
                          if (Array.isArray(e)) {
                            let t = h ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (r[t] = e);
                        }
                        for (let t in i) r[t] = i[t];
                      }),
                    r
                  );
                })(i, r, s, t),
                renderState: e(),
              };
              return n && (o.mount = (t) => n(i, t, o)), o;
            })(t, e, i, r);
        return n ? s() : (0, tu.h)(s);
      };
      var tm = n(11417);
      let tg = {
          useVisualState: tp({
            scrapeMotionValuesFromProps: ta,
            createRenderState: te,
            onMount: (t, e, { renderState: n, latestValues: i }) => {
              tm.Wi.read(() => {
                try {
                  n.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                tm.Wi.render(() => {
                  tt(
                    n,
                    i,
                    { enableHardwareAcceleration: !1 },
                    tn(e.tagName),
                    t.transformTemplate
                  ),
                    ts(e, n);
                });
            },
          }),
        },
        tv = {
          useVisualState: tp({
            scrapeMotionValuesFromProps: to,
            createRenderState: X,
          }),
        };
      function ty(t, e, n, i = { passive: !0 }) {
        return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
      }
      let tx = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tP(t, e = "page") {
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      let tb = (t) => (e) => tx(e) && t(e, tP(e));
      function tw(t, e, n, i) {
        return ty(t, e, tb(n), i);
      }
      var tA = n(73385);
      function tS(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let tT = tS("dragHorizontal"),
        tE = tS("dragVertical");
      function tR(t) {
        let e = !1;
        if ("y" === t) e = tE();
        else if ("x" === t) e = tT();
        else {
          let t = tT(),
            n = tE();
          t && n
            ? (e = () => {
                t(), n();
              })
            : (t && t(), n && n());
        }
        return e;
      }
      function tM() {
        let t = tR(!0);
        return !t || (t(), !1);
      }
      class tC {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      function tV(t, e) {
        let n = "onHover" + (e ? "Start" : "End");
        return tw(
          t.current,
          "pointer" + (e ? "enter" : "leave"),
          (i, r) => {
            if ("touch" === i.pointerType || tM()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e),
              s[n] && tm.Wi.update(() => s[n](i, r));
          },
          { passive: !t.getProps()[n] }
        );
      }
      class tj extends tC {
        mount() {
          this.unmount = (0, tA.z)(tV(this.node, !0), tV(this.node, !1));
        }
        unmount() {}
      }
      class tD extends tC {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, tA.z)(
            ty(this.node.current, "focus", () => this.onFocus()),
            ty(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let tk = (t, e) => !!e && (t === e || tk(t, e.parentElement));
      var tL = n(62370);
      function tO(t, e) {
        if (!e) return;
        let n = new PointerEvent("pointer" + t);
        e(n, tP(n));
      }
      class tF extends tC {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = tL.Z),
            (this.removeEndListeners = tL.Z),
            (this.removeAccessibleListeners = tL.Z),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let n = this.node.getProps(),
                i = tw(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                      onTap: n,
                      onTapCancel: i,
                      globalTapTarget: r,
                    } = this.node.getProps();
                    tm.Wi.update(() => {
                      r || tk(this.node.current, t.target)
                        ? n && n(t, e)
                        : i && i(t, e);
                    });
                  },
                  { passive: !(n.onTap || n.onPointerUp) }
                ),
                r = tw(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(n.onTapCancel || n.onPointerCancel) }
                );
              (this.removeEndListeners = (0, tA.z)(i, r)),
                this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = ty(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = ty(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          tO("up", (t, e) => {
                            let { onTap: n } = this.node.getProps();
                            n && tm.Wi.update(() => n(t, e));
                          });
                      }
                    )),
                    tO("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = ty(this.node.current, "blur", () => {
                  this.isPressing &&
                    tO("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, tA.z)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: n, whileTap: i } = this.node.getProps();
          i &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            n && tm.Wi.update(() => n(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !tM()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: n } = this.node.getProps();
          n && tm.Wi.update(() => n(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = tw(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            n = ty(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, tA.z)(e, n);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let tB = new WeakMap(),
        tI = new WeakMap(),
        tN = (t) => {
          let e = tB.get(t.target);
          e && e(t);
        },
        tW = (t) => {
          t.forEach(tN);
        },
        tU = { some: 0, all: 1 };
      class t_ extends tC {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: n, amount: i = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: n,
              threshold: "number" == typeof i ? i : tU[i],
            };
          return (function (t, e, n) {
            let i = (function ({ root: t, ...e }) {
              let n = t || document;
              tI.has(n) || tI.set(n, {});
              let i = tI.get(n),
                r = JSON.stringify(e);
              return (
                i[r] ||
                  (i[r] = new IntersectionObserver(tW, { root: t, ...e })),
                i[r]
              );
            })(e);
            return (
              tB.set(t, n),
              i.observe(t),
              () => {
                tB.delete(t), i.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: n, onViewportLeave: i } =
                this.node.getProps(),
              s = e ? n : i;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (n) => t[n] !== e[n];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      function t$(t, e) {
        if (!Array.isArray(e)) return !1;
        let n = e.length;
        if (n !== t.length) return !1;
        for (let i = 0; i < n; i++) if (e[i] !== t[i]) return !1;
        return !0;
      }
      function tz(t, e, n) {
        let i = t.getProps();
        return tl(
          i,
          e,
          void 0 !== n ? n : i.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, n) => (e[n] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, n) => (e[n] = t.getVelocity())), e;
          })(t)
        );
      }
      var tH = n(33324),
        tX = n(23376);
      let tZ = { current: !1 },
        tY = (t) => Array.isArray(t) && "number" == typeof t[0],
        tq = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
        tK = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: tq([0, 0.65, 0.55, 1]),
          circOut: tq([0.55, 0, 1, 0.45]),
          backIn: tq([0.31, 0.01, 0.66, -0.59]),
          backOut: tq([0.33, 1.53, 0.69, 0.99]),
        };
      var tG = n(97961);
      let tQ =
          ((s = () => Object.hasOwnProperty.call(Element.prototype, "animate")),
          () => (void 0 === i && (i = s()), i)),
        tJ = new Set(["opacity", "clipPath", "filter", "transform"]),
        t0 = (t, e) =>
          "spring" === e.type ||
          "backgroundColor" === t ||
          !(function t(e) {
            return !!(
              !e ||
              ("string" == typeof e && tK[e]) ||
              tY(e) ||
              (Array.isArray(e) && e.every(t))
            );
          })(e.ease),
        t1 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        t5 = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        t3 = { type: "keyframes", duration: 0.8 },
        t2 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        t9 = (t, { keyframes: e }) =>
          e.length > 2
            ? t3
            : L.has(t)
            ? t.startsWith("scale")
              ? t5(e[1])
              : t1
            : t2;
      var t6 = n(43435);
      let t4 = (t, e) =>
        "zIndex" !== t &&
        !!(
          "number" == typeof e ||
          Array.isArray(e) ||
          ("string" == typeof e &&
            (t6.P.test(e) || "0" === e) &&
            !e.startsWith("url("))
        );
      var t8 = n(94964);
      let t7 = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function et(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [i] = n.match(t8.KP) || [];
        if (!i) return t;
        let r = n.replace(i, ""),
          s = t7.has(e) ? 1 : 0;
        return i !== n && (s *= 100), e + "(" + s + r + ")";
      }
      let ee = /([a-z-]*)\(.*?\)/g,
        en = {
          ...t6.P,
          getAnimatableNone: (t) => {
            let e = t.match(ee);
            return e ? e.map(et).join(" ") : t;
          },
        };
      var ei = n(60108);
      let er = {
          ...z,
          color: ei.$,
          backgroundColor: ei.$,
          outlineColor: ei.$,
          fill: ei.$,
          stroke: ei.$,
          borderColor: ei.$,
          borderTopColor: ei.$,
          borderRightColor: ei.$,
          borderBottomColor: ei.$,
          borderLeftColor: ei.$,
          filter: en,
          WebkitFilter: en,
        },
        es = (t) => er[t];
      function eo(t, e) {
        let n = es(t);
        return (
          n !== en && (n = t6.P),
          n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
        );
      }
      let ea = (t) => /^0[^.\s]+$/.test(t);
      function el(t, e) {
        return t[e] || t.default || t;
      }
      var eu = n(85458);
      let eh =
        (t, e, n, i = {}) =>
        (r) => {
          let s = el(i, t) || {},
            o = s.delay || i.delay || 0,
            { elapsed: a = 0 } = i;
          a -= (0, tX.w)(o);
          let l = (function (t, e, n, i) {
              let r, s;
              let o = t4(e, n);
              r = Array.isArray(n) ? [...n] : [null, n];
              let a = void 0 !== i.from ? i.from : t.get(),
                l = [];
              for (let t = 0; t < r.length; t++) {
                var u;
                null === r[t] && (r[t] = 0 === t ? a : r[t - 1]),
                  ("number" == typeof (u = r[t])
                    ? 0 === u
                    : null !== u
                    ? "none" === u || "0" === u || ea(u)
                    : void 0) && l.push(t),
                  "string" == typeof r[t] &&
                    "none" !== r[t] &&
                    "0" !== r[t] &&
                    (s = r[t]);
              }
              if (o && l.length && s)
                for (let t = 0; t < l.length; t++) r[l[t]] = eo(e, s);
              return r;
            })(e, t, n, s),
            u = l[0],
            h = l[l.length - 1],
            c = t4(t, u),
            d = t4(t, h);
          (0, tH.K)(
            c === d,
            `You are trying to animate ${t} from "${u}" to "${h}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${h} via the \`style\` property.`
          );
          let f = {
            keyframes: l,
            velocity: e.getVelocity(),
            ease: "easeOut",
            ...s,
            delay: -a,
            onUpdate: (t) => {
              e.set(t), s.onUpdate && s.onUpdate(t);
            },
            onComplete: () => {
              r(), s.onComplete && s.onComplete();
            },
          };
          if (
            (!(function ({
              when: t,
              delay: e,
              delayChildren: n,
              staggerChildren: i,
              staggerDirection: r,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(s) && (f = { ...f, ...t9(t, f) }),
            f.duration && (f.duration = (0, tX.w)(f.duration)),
            f.repeatDelay && (f.repeatDelay = (0, tX.w)(f.repeatDelay)),
            !c || !d || tZ.current || !1 === s.type || eu.c.skipAnimations)
          )
            return (function ({
              keyframes: t,
              delay: e,
              onUpdate: n,
              onComplete: i,
            }) {
              let r = () => (
                n && n(t[t.length - 1]),
                i && i(),
                {
                  time: 0,
                  speed: 1,
                  duration: 0,
                  play: tL.Z,
                  pause: tL.Z,
                  stop: tL.Z,
                  then: (t) => (t(), Promise.resolve()),
                  cancel: tL.Z,
                  complete: tL.Z,
                }
              );
              return e
                ? (0, tG.y)({
                    keyframes: [0, 1],
                    duration: 0,
                    delay: e,
                    onComplete: r,
                  })
                : r();
            })(tZ.current ? { ...f, delay: 0 } : f);
          if (
            !i.isHandoff &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate
          ) {
            let n = (function (t, e, { onUpdate: n, onComplete: i, ...r }) {
              let s, o;
              if (
                !(
                  tQ() &&
                  tJ.has(e) &&
                  !r.repeatDelay &&
                  "mirror" !== r.repeatType &&
                  0 !== r.damping &&
                  "inertia" !== r.type
                )
              )
                return !1;
              let a = !1,
                l = !1,
                u = () => {
                  o = new Promise((t) => {
                    s = t;
                  });
                };
              u();
              let { keyframes: h, duration: c = 300, ease: d, times: f } = r;
              if (t0(e, r)) {
                let t = (0, tG.y)({ ...r, repeat: 0, delay: 0 }),
                  e = { done: !1, value: h[0] },
                  n = [],
                  i = 0;
                for (; !e.done && i < 2e4; )
                  (e = t.sample(i)), n.push(e.value), (i += 10);
                (f = void 0), (h = n), (c = i - 10), (d = "linear");
              }
              let p = (function (
                  t,
                  e,
                  n,
                  {
                    delay: i = 0,
                    duration: r,
                    repeat: s = 0,
                    repeatType: o = "loop",
                    ease: a,
                    times: l,
                  } = {}
                ) {
                  let u = { [e]: n };
                  l && (u.offset = l);
                  let h = (function t(e) {
                    if (e)
                      return tY(e)
                        ? tq(e)
                        : Array.isArray(e)
                        ? e.map(t)
                        : tK[e];
                  })(a);
                  return (
                    Array.isArray(h) && (u.easing = h),
                    t.animate(u, {
                      delay: i,
                      duration: r,
                      easing: Array.isArray(h) ? "linear" : h,
                      fill: "both",
                      iterations: s + 1,
                      direction: "reverse" === o ? "alternate" : "normal",
                    })
                  );
                })(t.owner.current, e, h, {
                  ...r,
                  duration: c,
                  ease: d,
                  times: f,
                }),
                m = () => {
                  (l = !1), p.cancel();
                },
                g = () => {
                  (l = !0), tm.Wi.update(m), s(), u();
                };
              return (
                (p.onfinish = () => {
                  l ||
                    (t.set(
                      (function (t, { repeat: e, repeatType: n = "loop" }) {
                        let i =
                          e && "loop" !== n && e % 2 == 1 ? 0 : t.length - 1;
                        return t[i];
                      })(h, r)
                    ),
                    i && i(),
                    g());
                }),
                {
                  then: (t, e) => o.then(t, e),
                  attachTimeline: (t) => (
                    (p.timeline = t), (p.onfinish = null), tL.Z
                  ),
                  get time() {
                    return (0, tX.X)(p.currentTime || 0);
                  },
                  set time(newTime) {
                    p.currentTime = (0, tX.w)(newTime);
                  },
                  get speed() {
                    return p.playbackRate;
                  },
                  set speed(newSpeed) {
                    p.playbackRate = newSpeed;
                  },
                  get duration() {
                    return (0, tX.X)(c);
                  },
                  play: () => {
                    a || (p.play(), (0, tm.Pn)(m));
                  },
                  pause: () => p.pause(),
                  stop: () => {
                    if (((a = !0), "idle" === p.playState)) return;
                    let { currentTime: e } = p;
                    if (e) {
                      let n = (0, tG.y)({ ...r, autoplay: !1 });
                      t.setWithVelocity(
                        n.sample(e - 10).value,
                        n.sample(e).value,
                        10
                      );
                    }
                    g();
                  },
                  complete: () => {
                    l || p.finish();
                  },
                  cancel: g,
                }
              );
            })(e, t, f);
            if (n) return n;
          }
          return (0, tG.y)(f);
        };
      function ec(t) {
        return !!((0, F.i)(t) && t.add);
      }
      let ed = (t) => /^\-?\d*\.?\d+$/.test(t);
      var ef = n(76593);
      let ep = (t) => (e) => e.test(t),
        em = [
          U.Rx,
          _.px,
          _.aQ,
          _.RW,
          _.vw,
          _.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        eg = (t) => em.find(ep(t)),
        ev = [...em, ei.$, t6.P],
        ey = (t) => ev.find(ep(t));
      function ex(t, e, { delay: n = 0, transitionOverride: i, type: r } = {}) {
        let {
            transition: s = t.getDefaultTransition(),
            transitionEnd: o,
            ...a
          } = t.makeTargetAnimatable(e),
          l = t.getValue("willChange");
        i && (s = i);
        let u = [],
          h = r && t.animationState && t.animationState.getState()[r];
        for (let e in a) {
          let i = t.getValue(e),
            r = a[e];
          if (
            !i ||
            void 0 === r ||
            (h &&
              (function ({ protectedKeys: t, needsAnimating: e }, n) {
                let i = t.hasOwnProperty(n) && !0 !== e[n];
                return (e[n] = !1), i;
              })(h, e))
          )
            continue;
          let o = { delay: n, elapsed: 0, ...el(s || {}, e) };
          if (window.HandoffAppearAnimations) {
            let n = t.getProps()[f];
            if (n) {
              let t = window.HandoffAppearAnimations(n, e, i, tm.Wi);
              null !== t && ((o.elapsed = t), (o.isHandoff = !0));
            }
          }
          let c =
            !o.isHandoff &&
            !(function (t, e) {
              let n = t.get();
              if (!Array.isArray(e)) return n !== e;
              for (let t = 0; t < e.length; t++) if (e[t] !== n) return !0;
            })(i, r);
          if (
            ("spring" === o.type && (i.getVelocity() || o.velocity) && (c = !1),
            i.animation && (c = !1),
            c)
          )
            continue;
          i.start(
            eh(e, i, r, t.shouldReduceMotion && L.has(e) ? { type: !1 } : o)
          );
          let d = i.animation;
          ec(l) && (l.add(e), d.then(() => l.remove(e))), u.push(d);
        }
        return (
          o &&
            Promise.all(u).then(() => {
              o &&
                (function (t, e) {
                  let n = tz(t, e),
                    {
                      transitionEnd: i = {},
                      transition: r = {},
                      ...s
                    } = n ? t.makeTargetAnimatable(n, !1) : {};
                  for (let e in (s = { ...s, ...i })) {
                    let n = td(s[e]);
                    t.hasValue(e)
                      ? t.getValue(e).set(n)
                      : t.addValue(e, (0, ef.BX)(n));
                  }
                })(t, o);
            }),
          u
        );
      }
      function eP(t, e, n = {}) {
        let i = tz(t, e, n.custom),
          { transition: r = t.getDefaultTransition() || {} } = i || {};
        n.transitionOverride && (r = n.transitionOverride);
        let s = i ? () => Promise.all(ex(t, i, n)) : () => Promise.resolve(),
          o =
            t.variantChildren && t.variantChildren.size
              ? (i = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = r;
                  return (function (t, e, n = 0, i = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * i,
                      l = 1 === r ? (t = 0) => t * i : (t = 0) => a - t * i;
                    return (
                      Array.from(t.variantChildren)
                        .sort(eb)
                        .forEach((t, i) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              eP(t, e, { ...s, delay: n + l(i) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, s + i, o, a, n);
                }
              : () => Promise.resolve(),
          { when: a } = r;
        if (!a) return Promise.all([s(), o(n.delay)]);
        {
          let [t, e] = "beforeChildren" === a ? [s, o] : [o, s];
          return t().then(() => e());
        }
      }
      function eb(t, e) {
        return t.sortNodePosition(e);
      }
      let ew = [...x].reverse(),
        eA = x.length;
      function eS(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      class eT extends tC {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: n }) =>
                        (function (t, e, n = {}) {
                          let i;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            i = Promise.all(e.map((e) => eP(t, e, n)));
                          else if ("string" == typeof e) i = eP(t, e, n);
                          else {
                            let r =
                              "function" == typeof e ? tz(t, e, n.custom) : e;
                            i = Promise.all(ex(t, r, n));
                          }
                          return i.then(() => t.notify("AnimationComplete", e));
                        })(t, e, n)
                      )
                    ),
                  n = {
                    animate: eS(!0),
                    whileInView: eS(),
                    whileHover: eS(),
                    whileTap: eS(),
                    whileDrag: eS(),
                    whileFocus: eS(),
                    exit: eS(),
                  },
                  i = !0,
                  r = (e, n) => {
                    let i = tz(t, n);
                    if (i) {
                      let { transition: t, transitionEnd: n, ...r } = i;
                      e = { ...e, ...r, ...n };
                    }
                    return e;
                  };
                function s(s, o) {
                  let a = t.getProps(),
                    l = t.getVariantContext(!0) || {},
                    u = [],
                    h = new Set(),
                    c = {},
                    d = 1 / 0;
                  for (let e = 0; e < eA; e++) {
                    var f;
                    let p = ew[e],
                      m = n[p],
                      g = void 0 !== a[p] ? a[p] : l[p],
                      x = v(g),
                      P = p === o ? m.isActive : null;
                    !1 === P && (d = e);
                    let b = g === l[p] && g !== a[p] && x;
                    if (
                      (b && i && t.manuallyAnimateOnMount && (b = !1),
                      (m.protectedKeys = { ...c }),
                      (!m.isActive && null === P) ||
                        (!g && !m.prevProp) ||
                        y(g) ||
                        "boolean" == typeof g)
                    )
                      continue;
                    let w =
                        ((f = m.prevProp),
                        ("string" == typeof g
                          ? g !== f
                          : !!Array.isArray(g) && !t$(g, f)) ||
                          (p === o && m.isActive && !b && x) ||
                          (e > d && x)),
                      A = !1,
                      S = Array.isArray(g) ? g : [g],
                      T = S.reduce(r, {});
                    !1 === P && (T = {});
                    let { prevResolvedValues: E = {} } = m,
                      R = { ...E, ...T },
                      M = (t) => {
                        (w = !0),
                          h.has(t) && ((A = !0), h.delete(t)),
                          (m.needsAnimating[t] = !0);
                      };
                    for (let t in R) {
                      let e = T[t],
                        n = E[t];
                      if (!c.hasOwnProperty(t))
                        (th(e) && th(n) ? t$(e, n) : e === n)
                          ? void 0 !== e && h.has(t)
                            ? M(t)
                            : (m.protectedKeys[t] = !0)
                          : void 0 !== e
                          ? M(t)
                          : h.add(t);
                    }
                    (m.prevProp = g),
                      (m.prevResolvedValues = T),
                      m.isActive && (c = { ...c, ...T }),
                      i && t.blockInitialAnimation && (w = !1),
                      w &&
                        (!b || A) &&
                        u.push(
                          ...S.map((t) => ({
                            animation: t,
                            options: { type: p, ...s },
                          }))
                        );
                  }
                  if (h.size) {
                    let e = {};
                    h.forEach((n) => {
                      let i = t.getBaseTarget(n);
                      void 0 !== i && (e[n] = i);
                    }),
                      u.push({ animation: e });
                  }
                  let p = !!u.length;
                  return (
                    i &&
                      (!1 === a.initial || a.initial === a.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (p = !1),
                    (i = !1),
                    p ? e(u) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: s,
                  setActive: function (e, i, r) {
                    var o;
                    if (n[e].isActive === i) return Promise.resolve();
                    null === (o = t.variantChildren) ||
                      void 0 === o ||
                      o.forEach((t) => {
                        var n;
                        return null === (n = t.animationState) || void 0 === n
                          ? void 0
                          : n.setActive(e, i);
                      }),
                      (n[e].isActive = i);
                    let a = s(r, e);
                    for (let t in n) n[t].protectedKeys = {};
                    return a;
                  },
                  setAnimateFunction: function (n) {
                    e = n(t);
                  },
                  getState: () => n,
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          this.unmount(), y(t) && (this.unmount = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {}
      }
      let eE = 0;
      class eR extends tC {
        constructor() {
          super(...arguments), (this.id = eE++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let {
              isPresent: t,
              onExitComplete: e,
              custom: n,
            } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let r = this.node.animationState.setActive("exit", !t, {
            custom: null != n ? n : this.node.getProps().custom,
          });
          e && !t && r.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let eM = (t, e) => Math.abs(t - e);
      class eC {
        constructor(
          t,
          e,
          {
            transformPagePoint: n,
            contextWindow: i,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let n = eD(this.lastMoveEventInfo, this.history),
                i = null !== this.startEvent,
                r =
                  ((t = n.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(eM(t.x, e.x) ** 2 + eM(t.y, e.y) ** 2) >= 3);
              if (!i && !r) return;
              let { point: s } = n,
                { timestamp: o } = tm.frameData;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              i ||
                (a && a(this.lastMoveEvent, n),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, n);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = eV(e, this.transformPagePoint)),
                tm.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: n,
                onSessionEnd: i,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = eD(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : eV(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && n && n(t, s), i && i(t, s);
            }),
            !tx(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = n),
            (this.contextWindow = i || window);
          let s = eV(tP(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = tm.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, eD(s, this.history)),
            (this.removeListeners = (0, tA.z)(
              tw(this.contextWindow, "pointermove", this.handlePointerMove),
              tw(this.contextWindow, "pointerup", this.handlePointerUp),
              tw(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, tm.Pn)(this.updatePoint);
        }
      }
      function eV(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function ej(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function eD({ point: t }, e) {
        return {
          point: t,
          delta: ej(t, ek(e)),
          offset: ej(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let n = t.length - 1,
              i = null,
              r = ek(t);
            for (
              ;
              n >= 0 &&
              ((i = t[n]), !(r.timestamp - i.timestamp > (0, tX.w)(0.1)));

            )
              n--;
            if (!i) return { x: 0, y: 0 };
            let s = (0, tX.X)(r.timestamp - i.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - i.x) / s, y: (r.y - i.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function ek(t) {
        return t[t.length - 1];
      }
      var eL = n(16267),
        eO = n(85816);
      function eF(t) {
        return t.max - t.min;
      }
      function eB(t, e = 0, n = 0.01) {
        return Math.abs(t - e) <= n;
      }
      function eI(t, e, n, i = 0.5) {
        (t.origin = i),
          (t.originPoint = (0, eO.t)(e.min, e.max, t.origin)),
          (t.scale = eF(n) / eF(e)),
          (eB(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = (0, eO.t)(n.min, n.max, t.origin) - t.originPoint),
          (eB(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function eN(t, e, n, i) {
        eI(t.x, e.x, n.x, i ? i.originX : void 0),
          eI(t.y, e.y, n.y, i ? i.originY : void 0);
      }
      function eW(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + eF(e));
      }
      function eU(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + eF(e));
      }
      function e_(t, e, n) {
        eU(t.x, e.x, n.x), eU(t.y, e.y, n.y);
      }
      var e$ = n(99045);
      function ez(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function eH(t, e) {
        let n = e.min - t.min,
          i = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i }
        );
      }
      function eX(t, e, n) {
        return { min: eZ(t, e), max: eZ(t, n) };
      }
      function eZ(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let eY = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        eq = () => ({ x: eY(), y: eY() }),
        eK = () => ({ min: 0, max: 0 }),
        eG = () => ({ x: eK(), y: eK() });
      function eQ(t) {
        return [t("x"), t("y")];
      }
      function eJ({ top: t, left: e, right: n, bottom: i }) {
        return { x: { min: e, max: n }, y: { min: t, max: i } };
      }
      function e0(t) {
        return void 0 === t || 1 === t;
      }
      function e1({ scale: t, scaleX: e, scaleY: n }) {
        return !e0(t) || !e0(e) || !e0(n);
      }
      function e5(t) {
        return e1(t) || e3(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function e3(t) {
        var e, n;
        return ((e = t.x) && "0%" !== e) || ((n = t.y) && "0%" !== n);
      }
      function e2(t, e, n, i, r) {
        return void 0 !== r && (t = i + r * (t - i)), i + n * (t - i) + e;
      }
      function e9(t, e = 0, n = 1, i, r) {
        (t.min = e2(t.min, e, n, i, r)), (t.max = e2(t.max, e, n, i, r));
      }
      function e6(t, { x: e, y: n }) {
        e9(t.x, e.translate, e.scale, e.originPoint),
          e9(t.y, n.translate, n.scale, n.originPoint);
      }
      function e4(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function e8(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function e7(t, e, [n, i, r]) {
        let s = void 0 !== e[r] ? e[r] : 0.5,
          o = (0, eO.t)(t.min, t.max, s);
        e9(t, e[n], e[i], o, e.scale);
      }
      let nt = ["x", "scaleX", "originX"],
        ne = ["y", "scaleY", "originY"];
      function nn(t, e) {
        e7(t.x, e, nt), e7(t.y, e, ne);
      }
      function ni(t, e) {
        return eJ(
          (function (t, e) {
            if (!e) return t;
            let n = e({ x: t.left, y: t.top }),
              i = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: i.y, right: i.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let nr = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        ns = new WeakMap();
      class no {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = eG()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let { dragSnapToOrigin: i } = this.getProps();
          this.panSession = new eC(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: n } = this.getProps();
                n ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(tP(t, "page").point);
              },
              onStart: (t, e) => {
                let {
                  drag: n,
                  dragPropagation: i,
                  onDragStart: r,
                } = this.getProps();
                if (
                  n &&
                  !i &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = tR(n)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  eQ((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (_.aQ.test(e)) {
                      let { projection: n } = this.visualElement;
                      if (n && n.layout) {
                        let i = n.layout.layoutBox[t];
                        if (i) {
                          let t = eF(i);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && tm.Wi.update(() => r(t, e), !1, !0);
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: n,
                  dragDirectionLock: i,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!n && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (i && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let n = null;
                    return (
                      Math.abs(t.y) > e
                        ? (n = "y")
                        : Math.abs(t.x) > e && (n = "x"),
                      n
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                eQ((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: i,
              contextWindow: nr(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: i } = e;
          this.startAnimation(i);
          let { onDragEnd: r } = this.getProps();
          r && tm.Wi.update(() => r(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: n } = this.getProps();
          !n &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, n) {
          let { drag: i } = this.getProps();
          if (!n || !na(t, i, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + n[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: n }, i) {
              return (
                void 0 !== e && t < e
                  ? (t = i ? (0, eO.t)(e, t, i.min) : Math.max(t, e))
                  : void 0 !== n &&
                    t > n &&
                    (t = i ? (0, eO.t)(n, t, i.max) : Math.min(t, n)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: n } = this.getProps(),
            i =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            r = this.constraints;
          e && g(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && i
            ? (this.constraints = (function (
                t,
                { top: e, left: n, bottom: i, right: r }
              ) {
                return { x: ez(t.x, n, r), y: ez(t.y, e, i) };
              })(i.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: eX(t, "left", "right"), y: eX(t, "top", "bottom") }
              );
            })(n)),
            r !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              eQ((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let n = {};
                    return (
                      void 0 !== e.min && (n.min = e.min - t.min),
                      void 0 !== e.max && (n.max = e.max - t.min),
                      n
                    );
                  })(i.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: n } =
            this.getProps();
          if (!e || !g(e)) return !1;
          let i = e.current;
          (0, tH.k)(
            null !== i,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, n) {
              let i = ni(t, n),
                { scroll: r } = e;
              return r && (e8(i.x, r.offset.x), e8(i.y, r.offset.y)), i;
            })(i, r.root, this.visualElement.getTransformPagePoint()),
            o = { x: eH((t = r.layout.layoutBox).x, s.x), y: eH(t.y, s.y) };
          if (n) {
            let t = n(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = eJ(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: n,
              dragElastic: i,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            eQ((o) => {
              if (!na(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: n ? t[o] : 0,
                bounceStiffness: i ? 200 : 1e6,
                bounceDamping: i ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let n = this.getAxisMotionValue(t);
          return n.start(eh(t, n, 0, e));
        }
        stopAnimation() {
          eQ((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          eQ((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = "_drag" + t.toUpperCase(),
            n = this.visualElement.getProps();
          return (
            n[e] ||
            this.visualElement.getValue(
              t,
              (n.initial ? n.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          eQ((e) => {
            let { drag: n } = this.getProps();
            if (!na(e, n, this.currentDirection)) return;
            let { projection: i } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (i && i.layout) {
              let { min: n, max: s } = i.layout.layoutBox[e];
              r.set(t[e] - (0, eO.t)(n, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!g(e) || !n || !this.constraints) return;
          this.stopAnimation();
          let i = { x: 0, y: 0 };
          eQ((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let n = e.get();
              i[t] = (function (t, e) {
                let n = 0.5,
                  i = eF(t),
                  r = eF(e);
                return (
                  r > i
                    ? (n = (0, eL.Y)(e.min, e.max - i, t.min))
                    : i > r && (n = (0, eL.Y)(t.min, t.max - r, e.min)),
                  (0, e$.u)(0, 1, n)
                );
              })({ min: n, max: n }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            this.resolveConstraints(),
            eQ((e) => {
              if (!na(e, t, null)) return;
              let n = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              n.set((0, eO.t)(r, s, i[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          ns.set(this.visualElement, this);
          let t = tw(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: n = !0 } = this.getProps();
              e && n && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              g(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            i = n.addEventListener("measure", e);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            e();
          let r = ty(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = n.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (eQ((e) => {
                    let n = this.getAxisMotionValue(e);
                    n &&
                      ((this.originPoint[e] += t[e].translate),
                      n.set(n.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            r(), t(), i(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: i = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function na(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      class nl extends tC {
        constructor(t) {
          super(t),
            (this.removeGroupControls = tL.Z),
            (this.removeListeners = tL.Z),
            (this.controls = new no(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || tL.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let nu = (t) => (e, n) => {
        t && tm.Wi.update(() => t(e, n));
      };
      class nh extends tC {
        constructor() {
          super(...arguments), (this.removePointerDownListener = tL.Z);
        }
        onPointerDown(t) {
          this.session = new eC(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: nr(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: n,
            onPanEnd: i,
          } = this.node.getProps();
          return {
            onSessionStart: nu(t),
            onStart: nu(e),
            onMove: n,
            onEnd: (t, e) => {
              delete this.session, i && tm.Wi.update(() => i(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = tw(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      let nc = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function nd(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let nf = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!_.px.test(t)) return t;
            t = parseFloat(t);
          }
          let n = nd(t, e.target.x),
            i = nd(t, e.target.y);
          return `${n}% ${i}%`;
        },
      };
      class np extends o.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
              layoutId: i,
            } = this.props,
            { projection: r } = t;
          Object.assign(D, ng),
            r &&
              (e.group && e.group.add(r),
              n && n.register && i && n.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (nc.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: n,
              drag: i,
              isPresent: r,
            } = this.props,
            s = n.projection;
          return (
            s &&
              ((s.isPresent = r),
              i || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    tm.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            p.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
            } = this.props,
            { projection: i } = t;
          i &&
            (i.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(i),
            n && n.deregister && n.deregister(i));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function nm(t) {
        let [e, n] = (function () {
            let t = (0, o.useContext)(u.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: n, register: i } = t,
              r = (0, o.useId)();
            return (
              (0, o.useEffect)(() => i(r), []),
              !e && n ? [!1, () => n && n(r)] : [!0]
            );
          })(),
          i = (0, o.useContext)(R.p);
        return o.createElement(np, {
          ...t,
          layoutGroup: i,
          switchLayoutGroup: (0, o.useContext)(M),
          isPresent: e,
          safeToRemove: n,
        });
      }
      let ng = {
        borderRadius: {
          ...nf,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: nf,
        borderTopRightRadius: nf,
        borderBottomLeftRadius: nf,
        borderBottomRightRadius: nf,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: n }) => {
            let i = t6.P.parse(t);
            if (i.length > 5) return t;
            let r = t6.P.createTransformer(t),
              s = "number" != typeof i[0] ? 1 : 0,
              o = n.x.scale * e.x,
              a = n.y.scale * e.y;
            (i[0 + s] /= o), (i[1 + s] /= a);
            let l = (0, eO.t)(o, a, 0.5);
            return (
              "number" == typeof i[2 + s] && (i[2 + s] /= l),
              "number" == typeof i[3 + s] && (i[3 + s] /= l),
              r(i)
            );
          },
        },
      };
      var nv = n(14267),
        ny = n(39085);
      let nx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        nP = nx.length,
        nb = (t) => ("string" == typeof t ? parseFloat(t) : t),
        nw = (t) => "number" == typeof t || _.px.test(t);
      function nA(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let nS = nE(0, 0.5, ny.Bn),
        nT = nE(0.5, 0.95, tL.Z);
      function nE(t, e, n) {
        return (i) => (i < t ? 0 : i > e ? 1 : n((0, eL.Y)(t, e, i)));
      }
      function nR(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function nM(t, e) {
        nR(t.x, e.x), nR(t.y, e.y);
      }
      function nC(t, e, n, i, r) {
        return (
          (t -= e),
          (t = i + (1 / n) * (t - i)),
          void 0 !== r && (t = i + (1 / r) * (t - i)),
          t
        );
      }
      function nV(t, e, [n, i, r], s, o) {
        !(function (t, e = 0, n = 1, i = 0.5, r, s = t, o = t) {
          if (
            (_.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, eO.t)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, eO.t)(s.min, s.max, i);
          t === s && (a -= e),
            (t.min = nC(t.min, e, n, a, r)),
            (t.max = nC(t.max, e, n, a, r));
        })(t, e[n], e[i], e[r], e.scale, s, o);
      }
      let nj = ["x", "scaleX", "originX"],
        nD = ["y", "scaleY", "originY"];
      function nk(t, e, n, i) {
        nV(t.x, e, nj, n ? n.x : void 0, i ? i.x : void 0),
          nV(t.y, e, nD, n ? n.y : void 0, i ? i.y : void 0);
      }
      function nL(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function nO(t) {
        return nL(t.x) && nL(t.y);
      }
      function nF(t, e) {
        return (
          Math.round(t.x.min) === Math.round(e.x.min) &&
          Math.round(t.x.max) === Math.round(e.x.max) &&
          Math.round(t.y.min) === Math.round(e.y.min) &&
          Math.round(t.y.max) === Math.round(e.y.max)
        );
      }
      function nB(t) {
        return eF(t.x) / eF(t.y);
      }
      var nI = n(16829);
      class nN {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, nI.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, nI.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let n = this.members.findIndex((e) => t === e);
          if (0 === n) return !1;
          for (let t = n; t >= 0; t--) {
            let n = this.members[t];
            if (!1 !== n.isPresent) {
              e = n;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let n = this.lead;
          if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
            n.instance && n.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = n),
              e && (t.resumeFrom.preserveOpacity = !0),
              n.snapshot &&
                ((t.snapshot = n.snapshot),
                (t.snapshot.latestValues =
                  n.animationValues || n.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: i } = t.options;
            !1 === i && n.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: n } = t;
            e.onExitComplete && e.onExitComplete(),
              n && n.options.onExitComplete && n.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function nW(t, e, n) {
        let i = "",
          r = t.x.translate / e.x,
          s = t.y.translate / e.y;
        if (
          ((r || s) && (i = `translate3d(${r}px, ${s}px, 0) `),
          (1 !== e.x || 1 !== e.y) && (i += `scale(${1 / e.x}, ${1 / e.y}) `),
          n)
        ) {
          let { rotate: t, rotateX: e, rotateY: r } = n;
          t && (i += `rotate(${t}deg) `),
            e && (i += `rotateX(${e}deg) `),
            r && (i += `rotateY(${r}deg) `);
        }
        let o = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return (1 !== o || 1 !== a) && (i += `scale(${o}, ${a})`), i || "none";
      }
      let nU = (t, e) => t.depth - e.depth;
      class n_ {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, nI.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, nI.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(nU),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var n$ = n(22908);
      let nz = ["", "X", "Y", "Z"],
        nH = { visibility: "hidden" },
        nX = 0,
        nZ = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function nY({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: i,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, n = null == e ? void 0 : e()) {
            (this.id = nX++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (nZ.totalNodes =
                    nZ.resolvedTargetDeltas =
                    nZ.recalculatedProjection =
                      0),
                  this.nodes.forEach(nG),
                  this.nodes.forEach(n2),
                  this.nodes.forEach(n9),
                  this.nodes.forEach(nQ),
                  window.MotionDebug && window.MotionDebug.record(nZ);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = n ? n.root || n : this),
              (this.path = n ? [...n.path, n] : []),
              (this.parent = n),
              (this.depth = n ? n.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new n_());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new nv.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let n = this.eventHandlers.get(t);
            n && n.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, n = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: i, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              n && (r || i) && (this.isLayoutDirty = !0),
              t)
            ) {
              let n;
              let i = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  n && n(),
                  (n = (function (t, e) {
                    let n = n$.X.now(),
                      i = ({ timestamp: r }) => {
                        let s = r - n;
                        s >= e && ((0, tm.Pn)(i), t(s - e));
                      };
                    return tm.Wi.read(i, !0), () => (0, tm.Pn)(i);
                  })(i, 250)),
                  nc.hasAnimatedSinceResize &&
                    ((nc.hasAnimatedSinceResize = !1), this.nodes.forEach(n3));
              });
            }
            i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                s &&
                (i || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: n,
                    layout: i,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        ie,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !nF(this.targetLayout, i) || n,
                      u = !e && n;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...el(r, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || n3(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = i;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, tm.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(n6),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: n } = this.options;
            if (void 0 === e && !n) return;
            let i = this.getTransformTemplate();
            (this.prevTransformTemplateValue = i
              ? i(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(n0);
              return;
            }
            this.isUpdating || this.nodes.forEach(n1),
              (this.isUpdating = !1),
              window.HandoffCancelAllAnimations &&
                window.HandoffCancelAllAnimations(),
              this.nodes.forEach(n5),
              this.nodes.forEach(nq),
              this.nodes.forEach(nK),
              this.clearAllSnapshots();
            let t = n$.X.now();
            (tm.frameData.delta = (0, e$.u)(
              0,
              1e3 / 60,
              t - tm.frameData.timestamp
            )),
              (tm.frameData.timestamp = t),
              (tm.frameData.isProcessing = !0),
              tm.S6.update.process(tm.frameData),
              tm.S6.preRender.process(tm.frameData),
              tm.S6.render.process(tm.frameData),
              (tm.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), p.read(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(nJ), this.sharedNodes.forEach(n4);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              tm.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            tm.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = eG()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: i(this.instance),
                  offset: n(this.instance),
                });
          }
          resetTransform() {
            if (!r) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !nO(this.projectionDelta),
              n = this.getTransformTemplate(),
              i = n ? n(this.latestValues, "") : void 0,
              s = i !== this.prevTransformTemplateValue;
            t &&
              (e || e5(this.latestValues) || s) &&
              (r(this.instance, i),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let n = this.measurePageBox(),
              i = this.removeElementScroll(n);
            return (
              t && (i = this.removeTransform(i)),
              is((e = i).x),
              is(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: n,
                layoutBox: i,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return eG();
            let e = t.measureViewportBox(),
              { scroll: n } = this.root;
            return n && (e8(e.x, n.offset.x), e8(e.y, n.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = eG();
            nM(e, t);
            for (let n = 0; n < this.path.length; n++) {
              let i = this.path[n],
                { scroll: r, options: s } = i;
              if (i !== this.root && r && s.layoutScroll) {
                if (r.isRoot) {
                  nM(e, t);
                  let { scroll: n } = this.root;
                  n && (e8(e.x, -n.offset.x), e8(e.y, -n.offset.y));
                }
                e8(e.x, r.offset.x), e8(e.y, r.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let n = eG();
            nM(n, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              !e &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                nn(n, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                e5(i.latestValues) && nn(n, i.latestValues);
            }
            return e5(this.latestValues) && nn(n, this.latestValues), n;
          }
          removeTransform(t) {
            let e = eG();
            nM(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              if (!n.instance || !e5(n.latestValues)) continue;
              e1(n.latestValues) && n.updateSnapshot();
              let i = eG();
              nM(i, n.measurePageBox()),
                nk(
                  e,
                  n.latestValues,
                  n.snapshot ? n.snapshot.layoutBox : void 0,
                  i
                );
            }
            return e5(this.latestValues) && nk(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                tm.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, n, i, r;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = tm.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = eG()),
                    (this.relativeTargetOrigin = eG()),
                    e_(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    nM(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = eG()), (this.targetWithTransforms = eG())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (n = this.target),
                      (i = this.relativeTarget),
                      (r = this.relativeParent.target),
                      eW(n.x, i.x, r.x),
                      eW(n.y, i.y, r.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : nM(this.target, this.layout.layoutBox),
                      e6(this.target, this.targetDelta))
                    : nM(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = eG()),
                      (this.relativeTargetOrigin = eG()),
                      e_(this.relativeTargetOrigin, this.target, t.target),
                      nM(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                nZ.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              e1(this.parent.latestValues) ||
              e3(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              n = !!this.resumingFrom || this !== e,
              i = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (i = !1),
              n &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (i = !1),
              this.resolvedRelativeTargetAt === tm.frameData.timestamp &&
                (i = !1),
              i)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            nM(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, n, i = !1) {
              let r, s;
              let o = n.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (r = n[a]).projectionDelta;
                  let o = r.instance;
                  (!o || !o.style || "contents" !== o.style.display) &&
                    (i &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      nn(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), e6(t, s)),
                    i && e5(r.latestValues) && nn(t, r.latestValues));
                }
                (e.x = e4(e.x)), (e.y = e4(e.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, n),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = eG()));
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = eq()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = eq()),
              (this.projectionDeltaWithTransform = eq()));
            let u = this.projectionTransform;
            eN(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = nW(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              nZ.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let n;
            let i = this.snapshot,
              r = i ? i.latestValues : {},
              s = { ...this.latestValues },
              o = eq();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = eG(),
              l =
                (i ? i.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              c = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(it)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let i = e / 1e3;
                if (
                  (n8(o.x, t.x, i),
                  n8(o.y, t.y, i),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, d, f, p;
                  e_(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (f = this.relativeTarget),
                    (p = this.relativeTargetOrigin),
                    n7(f.x, p.x, a.x, i),
                    n7(f.y, p.y, a.y, i),
                    n &&
                      ((u = this.relativeTarget),
                      (d = n),
                      u.x.min === d.x.min &&
                        u.x.max === d.x.max &&
                        u.y.min === d.y.min &&
                        u.y.max === d.y.max) &&
                      (this.isProjectionDirty = !1),
                    n || (n = eG()),
                    nM(n, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, n, i, r, s) {
                    r
                      ? ((t.opacity = (0, eO.t)(
                          0,
                          void 0 !== n.opacity ? n.opacity : 1,
                          nS(i)
                        )),
                        (t.opacityExit = (0, eO.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          nT(i)
                        )))
                      : s &&
                        (t.opacity = (0, eO.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== n.opacity ? n.opacity : 1,
                          i
                        ));
                    for (let r = 0; r < nP; r++) {
                      let s = `border${nx[r]}Radius`,
                        o = nA(e, s),
                        a = nA(n, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || nw(o) === nw(a)
                          ? ((t[s] = Math.max((0, eO.t)(nb(o), nb(a), i), 0)),
                            (_.aQ.test(a) || _.aQ.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || n.rotate) &&
                      (t.rotate = (0, eO.t)(e.rotate || 0, n.rotate || 0, i));
                  })(s, r, this.latestValues, i, c, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = i);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, tm.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tm.Wi.update(() => {
                (nc.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, n) {
                    let i = (0, F.i)(t) ? t : (0, ef.BX)(t);
                    return i.start(eh("", i, 1e3, n)), i.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: n,
                layout: i,
                latestValues: r,
              } = t;
            if (e && n && i) {
              if (
                this !== t &&
                this.layout &&
                i &&
                io(
                  this.options.animationType,
                  this.layout.layoutBox,
                  i.layoutBox
                )
              ) {
                n = this.target || eG();
                let e = eF(this.layout.layoutBox.x);
                (n.x.min = t.target.x.min), (n.x.max = n.x.min + e);
                let i = eF(this.layout.layoutBox.y);
                (n.y.min = t.target.y.min), (n.y.max = n.y.min + i);
              }
              nM(e, n),
                nn(e, r),
                eN(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new nN()),
              this.sharedNodes.get(t).add(e);
            let n = e.options.initialPromotionConfig;
            e.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: n,
          } = {}) {
            let i = this.getStack();
            i && i.promote(this, n),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: n } = t;
            if (
              ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (e = !0),
              !e)
            )
              return;
            let i = {};
            for (let e = 0; e < nz.length; e++) {
              let r = "rotate" + nz[e];
              n[r] && ((i[r] = n[r]), t.setStaticValue(r, 0));
            }
            for (let e in (t.render(), i)) t.setStaticValue(e, i[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, n;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return nH;
            let i = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (i.opacity = ""),
                (i.pointerEvents =
                  tf(null == t ? void 0 : t.pointerEvents) || ""),
                (i.transform = r ? r(this.latestValues, "") : "none"),
                i
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    tf(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !e5(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (i.transform = nW(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              r && (i.transform = r(o, i.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((i.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (i.opacity =
                  s === this
                    ? null !==
                        (n =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== n
                      ? n
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (i.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            D)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: n } = D[t],
                r = "none" === i.transform ? o[t] : e(o[t], s);
              if (n) {
                let t = n.length;
                for (let e = 0; e < t; e++) i[n[e]] = r;
              } else i[t] = r;
            }
            return (
              this.options.layoutId &&
                (i.pointerEvents =
                  s === this
                    ? tf(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              i
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(n0),
              this.root.sharedNodes.clear();
          }
        };
      }
      function nq(t) {
        t.updateLayout();
      }
      function nK(t) {
        var e;
        let n =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: i } = t.layout,
            { animationType: r } = t.options,
            s = n.source !== t.layout.source;
          "size" === r
            ? eQ((t) => {
                let i = s ? n.measuredBox[t] : n.layoutBox[t],
                  r = eF(i);
                (i.min = e[t].min), (i.max = i.min + r);
              })
            : io(r, n.layoutBox, e) &&
              eQ((i) => {
                let r = s ? n.measuredBox[i] : n.layoutBox[i],
                  o = eF(e[i]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[i].max = t.relativeTarget[i].min + o));
              });
          let o = eq();
          eN(o, e, n.layoutBox);
          let a = eq();
          s
            ? eN(a, t.applyTransform(i, !0), n.measuredBox)
            : eN(a, e, n.layoutBox);
          let l = !nO(o),
            u = !1;
          if (!t.resumeFrom) {
            let i = t.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              let { snapshot: r, layout: s } = i;
              if (r && s) {
                let o = eG();
                e_(o, n.layoutBox, r.layoutBox);
                let a = eG();
                e_(a, e, s.layoutBox),
                  nF(o, a) || (u = !0),
                  i.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = i));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: n,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function nG(t) {
        nZ.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function nQ(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function nJ(t) {
        t.clearSnapshot();
      }
      function n0(t) {
        t.clearMeasurements();
      }
      function n1(t) {
        t.isLayoutDirty = !1;
      }
      function n5(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function n3(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function n2(t) {
        t.resolveTargetDelta();
      }
      function n9(t) {
        t.calcProjection();
      }
      function n6(t) {
        t.resetRotation();
      }
      function n4(t) {
        t.removeLeadSnapshot();
      }
      function n8(t, e, n) {
        (t.translate = (0, eO.t)(e.translate, 0, n)),
          (t.scale = (0, eO.t)(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function n7(t, e, n, i) {
        (t.min = (0, eO.t)(e.min, n.min, i)),
          (t.max = (0, eO.t)(e.max, n.max, i));
      }
      function it(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let ie = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        ii = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        ir = ii("applewebkit/") && !ii("chrome/") ? Math.round : tL.Z;
      function is(t) {
        (t.min = ir(t.min)), (t.max = ir(t.max));
      }
      function io(t, e, n) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !eB(nB(e), nB(n), 0.2))
        );
      }
      let ia = nY({
          attachResizeListener: (t, e) => ty(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        il = { current: void 0 },
        iu = nY({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!il.current) {
              let t = new ia({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (il.current = t);
            }
            return il.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        }),
        ih = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function ic(t, e, n = 1) {
        (0, tH.k)(
          n <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        let [i, r] = (function (t) {
          let e = ih.exec(t);
          if (!e) return [,];
          let [, n, i] = e;
          return [n, i];
        })(t);
        if (!i) return;
        let s = window.getComputedStyle(e).getPropertyValue(i);
        if (s) {
          let t = s.trim();
          return ed(t) ? parseFloat(t) : t;
        }
        return (0, N.t)(r) ? ic(r, e, n + 1) : r;
      }
      let id = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        ip = (t) => id.has(t),
        im = (t) => Object.keys(t).some(ip),
        ig = (t) => t === U.Rx || t === _.px,
        iv = (t, e) => parseFloat(t.split(", ")[e]),
        iy =
          (t, e) =>
          (n, { transform: i }) => {
            if ("none" === i || !i) return 0;
            let r = i.match(/^matrix3d\((.+)\)$/);
            if (r) return iv(r[1], e);
            {
              let e = i.match(/^matrix\((.+)\)$/);
              return e ? iv(e[1], t) : 0;
            }
          },
        ix = new Set(["x", "y", "z"]),
        iP = k.filter((t) => !ix.has(t)),
        ib = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(n),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(n),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: iy(4, 13),
          y: iy(5, 14),
        };
      (ib.translateX = ib.x), (ib.translateY = ib.y);
      let iw = (t, e, n) => {
          let i = e.measureViewportBox(),
            r = e.current,
            s = getComputedStyle(r),
            { display: o } = s,
            a = {};
          "none" === o && e.setStaticValue("display", t.display || "block"),
            n.forEach((t) => {
              a[t] = ib[t](i, s);
            }),
            e.render();
          let l = e.measureViewportBox();
          return (
            n.forEach((n) => {
              let i = e.getValue(n);
              i && i.jump(a[n]), (t[n] = ib[n](l, s));
            }),
            t
          );
        },
        iA = (t, e, n = {}, i = {}) => {
          (e = { ...e }), (i = { ...i });
          let r = Object.keys(e).filter(ip),
            s = [],
            o = !1,
            a = [];
          if (
            (r.forEach((r) => {
              let l;
              let u = t.getValue(r);
              if (!t.hasValue(r)) return;
              let h = n[r],
                c = eg(h),
                d = e[r];
              if (th(d)) {
                let t = d.length,
                  e = null === d[0] ? 1 : 0;
                c = eg((h = d[e]));
                for (let n = e; n < t && null !== d[n]; n++)
                  l
                    ? (0, tH.k)(
                        eg(d[n]) === l,
                        "All keyframes must be of the same type"
                      )
                    : ((l = eg(d[n])),
                      (0, tH.k)(
                        l === c || (ig(c) && ig(l)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else l = eg(d);
              if (c !== l) {
                if (ig(c) && ig(l)) {
                  let t = u.get();
                  "string" == typeof t && u.set(parseFloat(t)),
                    "string" == typeof d
                      ? (e[r] = parseFloat(d))
                      : Array.isArray(d) &&
                        l === _.px &&
                        (e[r] = d.map(parseFloat));
                } else
                  (null == c ? void 0 : c.transform) &&
                  (null == l ? void 0 : l.transform) &&
                  (0 === h || 0 === d)
                    ? 0 === h
                      ? u.set(l.transform(h))
                      : (e[r] = c.transform(d))
                    : (o ||
                        ((s = (function (t) {
                          let e = [];
                          return (
                            iP.forEach((n) => {
                              let i = t.getValue(n);
                              void 0 !== i &&
                                (e.push([n, i.get()]),
                                i.set(n.startsWith("scale") ? 1 : 0));
                            }),
                            e.length && t.render(),
                            e
                          );
                        })(t)),
                        (o = !0)),
                      a.push(r),
                      (i[r] = void 0 !== i[r] ? i[r] : e[r]),
                      u.jump(d));
              }
            }),
            !a.length)
          )
            return { target: e, transitionEnd: i };
          {
            let n = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              r = iw(e, t, a);
            return (
              s.length &&
                s.forEach(([e, n]) => {
                  t.getValue(e).set(n);
                }),
              t.render(),
              E.j && null !== n && window.scrollTo({ top: n }),
              { target: r, transitionEnd: i }
            );
          }
        },
        iS = (t, e, n, i) => {
          var r, s;
          let o = (function (t, { ...e }, n) {
            let i = t.current;
            if (!(i instanceof Element)) return { target: e, transitionEnd: n };
            for (let r in (n && (n = { ...n }),
            t.values.forEach((t) => {
              let e = t.get();
              if (!(0, N.t)(e)) return;
              let n = ic(e, i);
              n && t.set(n);
            }),
            e)) {
              let t = e[r];
              if (!(0, N.t)(t)) continue;
              let s = ic(t, i);
              s && ((e[r] = s), n || (n = {}), void 0 === n[r] && (n[r] = t));
            }
            return { target: e, transitionEnd: n };
          })(t, e, i);
          return (
            (e = o.target),
            (i = o.transitionEnd),
            (r = e),
            (s = i),
            im(r) ? iA(t, r, n, s) : { target: r, transitionEnd: s }
          );
        },
        iT = { current: null },
        iE = { current: !1 },
        iR = new WeakMap(),
        iM = Object.keys(T),
        iC = iM.length,
        iV = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        ij = P.length;
      class iD {
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: n,
            reducedMotionConfig: i,
            visualState: r,
          },
          s = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => tm.Wi.render(this.render, !1, !0));
          let { latestValues: o, renderState: a } = r;
          (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = a),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = n),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = i),
            (this.options = s),
            (this.isControllingVariants = b(e)),
            (this.isVariantNode = w(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(e, {});
          for (let t in u) {
            let e = u[t];
            void 0 !== o[t] &&
              (0, F.i)(e) &&
              (e.set(o[t], !1), ec(l) && l.add(t));
          }
        }
        scrapeMotionValuesFromProps(t, e) {
          return {};
        }
        mount(t) {
          (this.current = t),
            iR.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            iE.current ||
              (function () {
                if (((iE.current = !0), E.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (iT.current = t.matches);
                    t.addListener(e), e();
                  } else iT.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || iT.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (iR.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, tm.Pn)(this.notifyUpdate),
          (0, tm.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) this.features[t].unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let n = L.has(t),
            i = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && tm.Wi.update(this.notifyUpdate, !1, !0),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            i(), r();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures({ children: t, ...e }, n, i, r) {
          let s, o;
          for (let t = 0; t < iC; t++) {
            let n = iM[t],
              {
                isEnabled: i,
                Feature: r,
                ProjectionNode: a,
                MeasureLayout: l,
              } = T[n];
            a && (s = a),
              i(e) &&
                (!this.features[n] && r && (this.features[n] = new r(this)),
                l && (o = l));
          }
          if (
            ("html" === this.type || "svg" === this.type) &&
            !this.projection &&
            s
          ) {
            this.projection = new s(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: t,
              layout: n,
              drag: i,
              dragConstraints: o,
              layoutScroll: a,
              layoutRoot: l,
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: n,
              alwaysMeasureLayout: !!i || (o && g(o)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof n ? n : "both",
              initialPromotionConfig: r,
              layoutScroll: a,
              layoutRoot: l,
            });
          }
          return o;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : eG();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, e);
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < iV.length; e++) {
            let n = iV[e];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            let i = t["on" + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i));
          }
          (this.prevMotionValues = (function (t, e, n) {
            let { willChange: i } = e;
            for (let r in e) {
              let s = e[r],
                o = n[r];
              if ((0, F.i)(s)) t.addValue(r, s), ec(i) && i.add(r);
              else if ((0, F.i)(o))
                t.addValue(r, (0, ef.BX)(s, { owner: t })),
                  ec(i) && i.remove(r);
              else if (o !== s) {
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, (0, ef.BX)(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let i in n) void 0 === e[i] && t.removeValue(i);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < ij; t++) {
            let n = P[t],
              i = this.props[n];
            (v(i) || !1 === i) && (e[n] = i);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          e !== this.values.get(t) &&
            (this.removeValue(t), this.bindToMotionValue(t, e)),
            this.values.set(t, e),
            (this.latestValues[t] = e.get());
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let n = this.values.get(t);
          return (
            void 0 === n &&
              void 0 !== e &&
              ((n = (0, ef.BX)(e, { owner: this })), this.addValue(t, n)),
            n
          );
        }
        readValue(t) {
          var e;
          return void 0 === this.latestValues[t] && this.current
            ? null !== (e = this.getBaseTargetFromProps(this.props, t)) &&
              void 0 !== e
              ? e
              : this.readValueFromInstance(this.current, t, this.options)
            : this.latestValues[t];
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let { initial: n } = this.props,
            i =
              "string" == typeof n || "object" == typeof n
                ? null === (e = tl(this.props, n)) || void 0 === e
                  ? void 0
                  : e[t]
                : void 0;
          if (n && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || (0, F.i)(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new nv.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class ik extends iD {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: n }) {
          delete e[t], delete n[t];
        }
        makeTargetAnimatableFromInstance(
          { transition: t, transitionEnd: e, ...n },
          i
        ) {
          let r = (function (t, e, n) {
            let i = {};
            for (let r in t) {
              let t = (function (t, e) {
                if (e) return (e[t] || e.default || e).from;
              })(r, e);
              if (void 0 !== t) i[r] = t;
              else {
                let t = n.getValue(r);
                t && (i[r] = t.get());
              }
            }
            return i;
          })(n, t || {}, this);
          if (i) {
            !(function (t, e, n) {
              var i, r;
              let s = Object.keys(e).filter((e) => !t.hasValue(e)),
                o = s.length;
              if (o)
                for (let a = 0; a < o; a++) {
                  let o = s[a],
                    l = e[o],
                    u = null;
                  Array.isArray(l) && (u = l[0]),
                    null === u &&
                      (u =
                        null !==
                          (r =
                            null !== (i = n[o]) && void 0 !== i
                              ? i
                              : t.readValue(o)) && void 0 !== r
                          ? r
                          : e[o]),
                    null != u &&
                      ("string" == typeof u && (ed(u) || ea(u))
                        ? (u = parseFloat(u))
                        : !ey(u) && t6.P.test(l) && (u = eo(o, l)),
                      t.addValue(o, (0, ef.BX)(u, { owner: t })),
                      void 0 === n[o] && (n[o] = u),
                      null !== u && t.setBaseTarget(o, u));
                }
            })(this, n, r);
            let t = iS(this, n, r, e);
            (e = t.transitionEnd), (n = t.target);
          }
          return { transition: t, transitionEnd: e, ...n };
        }
      }
      class iL extends ik {
        constructor() {
          super(...arguments), (this.type = "html");
        }
        readValueFromInstance(t, e) {
          if (L.has(e)) {
            let t = es(e);
            return (t && t.default) || 0;
          }
          {
            let n = window.getComputedStyle(t),
              i = ((0, N.f)(e) ? n.getPropertyValue(e) : n[e]) || 0;
            return "string" == typeof i ? i.trim() : i;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return ni(t, e);
        }
        build(t, e, n, i) {
          H(t, e, n, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e) {
          return to(t, e);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, F.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, n, i) {
          ti(t, e, n, i);
        }
      }
      class iO extends ik {
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (L.has(e)) {
            let t = es(e);
            return (t && t.default) || 0;
          }
          return (e = tr.has(e) ? e : d(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return eG();
        }
        scrapeMotionValuesFromProps(t, e) {
          return ta(t, e);
        }
        build(t, e, n, i) {
          tt(t, e, n, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, n, i) {
          ts(t, e, n, i);
        }
        mount(t) {
          (this.isSVGTag = tn(t.tagName)), super.mount(t);
        }
      }
      let iF = (t, e) =>
          j(t)
            ? new iO(e, { enableHardwareAcceleration: !1 })
            : new iL(e, { enableHardwareAcceleration: !0 }),
        iB = {
          animation: { Feature: eT },
          exit: { Feature: eR },
          inView: { Feature: t_ },
          tap: { Feature: tF },
          focus: { Feature: tD },
          hover: { Feature: tj },
          pan: { Feature: nh },
          drag: { Feature: nl, ProjectionNode: iu, MeasureLayout: nm },
          layout: { ProjectionNode: iu, MeasureLayout: nm },
        },
        iI = (function (t) {
          function e(e, n = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: n,
              useVisualState: i,
              Component: r,
            }) {
              t &&
                (function (t) {
                  for (let e in t) T[e] = { ...T[e], ...t[e] };
                })(t);
              let s = (0, o.forwardRef)(function (s, d) {
                var m;
                let y;
                let x = {
                    ...(0, o.useContext)(a._),
                    ...s,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, o.useContext)(R.p).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(s),
                  },
                  { isStatic: P } = x,
                  w = (function (t) {
                    let { initial: e, animate: n } = (function (t, e) {
                      if (b(t)) {
                        let { initial: e, animate: n } = t;
                        return {
                          initial: !1 === e || v(e) ? e : void 0,
                          animate: v(n) ? n : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, o.useContext)(l));
                    return (0, o.useMemo)(
                      () => ({ initial: e, animate: n }),
                      [A(e), A(n)]
                    );
                  })(s),
                  S = i(s, P);
                if (!P && E.j) {
                  w.visualElement = (function (t, e, n, i) {
                    let { visualElement: r } = (0, o.useContext)(l),
                      s = (0, o.useContext)(c),
                      d = (0, o.useContext)(u.O),
                      m = (0, o.useContext)(a._).reducedMotion,
                      g = (0, o.useRef)();
                    (i = i || s.renderer),
                      !g.current &&
                        i &&
                        (g.current = i(t, {
                          visualState: e,
                          parent: r,
                          props: n,
                          presenceContext: d,
                          blockInitialAnimation: !!d && !1 === d.initial,
                          reducedMotionConfig: m,
                        }));
                    let v = g.current;
                    (0, o.useInsertionEffect)(() => {
                      v && v.update(n, d);
                    });
                    let y = (0, o.useRef)(!!(n[f] && !window.HandoffComplete));
                    return (
                      (0, h.L)(() => {
                        v &&
                          (p.postRender(v.render),
                          y.current &&
                            v.animationState &&
                            v.animationState.animateChanges());
                      }),
                      (0, o.useEffect)(() => {
                        v &&
                          (v.updateFeatures(),
                          !y.current &&
                            v.animationState &&
                            v.animationState.animateChanges(),
                          y.current &&
                            ((y.current = !1), (window.HandoffComplete = !0)));
                      }),
                      v
                    );
                  })(r, S, x, e);
                  let n = (0, o.useContext)(M),
                    i = (0, o.useContext)(c).strict;
                  w.visualElement &&
                    (y = w.visualElement.loadFeatures(x, i, t, n));
                }
                return o.createElement(
                  l.Provider,
                  { value: w },
                  y && w.visualElement
                    ? o.createElement(y, {
                        visualElement: w.visualElement,
                        ...x,
                      })
                    : null,
                  n(
                    r,
                    s,
                    ((m = w.visualElement),
                    (0, o.useCallback)(
                      (t) => {
                        t && S.mount && S.mount(t),
                          m && (t ? m.mount(t) : m.unmount()),
                          d &&
                            ("function" == typeof d
                              ? d(t)
                              : g(d) && (d.current = t));
                      },
                      [m]
                    )),
                    S,
                    P,
                    w.visualElement
                  )
                );
              });
              return (s[C] = r), s;
            })(t(e, n));
          }
          if ("undefined" == typeof Proxy) return e;
          let n = new Map();
          return new Proxy(e, {
            get: (t, i) => (n.has(i) || n.set(i, e(i)), n.get(i)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, n, i) {
            return {
              ...(j(t) ? tg : tv),
              preloadedFeatures: n,
              useRender: (function (t = !1) {
                return (e, n, i, { latestValues: r }, s) => {
                  let a = (
                      j(e)
                        ? function (t, e, n, i) {
                            let r = (0, o.useMemo)(() => {
                              let n = te();
                              return (
                                tt(
                                  n,
                                  e,
                                  { enableHardwareAcceleration: !1 },
                                  tn(i),
                                  t.transformTemplate
                                ),
                                { ...n.attrs, style: { ...n.style } }
                              );
                            }, [e]);
                            if (t.style) {
                              let e = {};
                              Z(e, t.style, t),
                                (r.style = { ...e, ...r.style });
                            }
                            return r;
                          }
                        : function (t, e, n) {
                            let i = {},
                              r = (function (t, e, n) {
                                let i = t.style || {},
                                  r = {};
                                return (
                                  Z(r, i, t),
                                  Object.assign(
                                    r,
                                    (function ({ transformTemplate: t }, e, n) {
                                      return (0, o.useMemo)(() => {
                                        let i = X();
                                        return (
                                          H(
                                            i,
                                            e,
                                            { enableHardwareAcceleration: !n },
                                            t
                                          ),
                                          Object.assign({}, i.vars, i.style)
                                        );
                                      }, [e]);
                                    })(t, e, n)
                                  ),
                                  r
                                );
                              })(t, e, n);
                            return (
                              t.drag &&
                                !1 !== t.dragListener &&
                                ((i.draggable = !1),
                                (r.userSelect =
                                  r.WebkitUserSelect =
                                  r.WebkitTouchCallout =
                                    "none"),
                                (r.touchAction =
                                  !0 === t.drag
                                    ? "none"
                                    : `pan-${"x" === t.drag ? "y" : "x"}`)),
                              void 0 === t.tabIndex &&
                                (t.onTap || t.onTapStart || t.whileTap) &&
                                (i.tabIndex = 0),
                              (i.style = r),
                              i
                            );
                          }
                    )(n, r, s, e),
                    l = (function (t, e, n) {
                      let i = {};
                      for (let r in t)
                        ("values" !== r || "object" != typeof t.values) &&
                          (K(r) ||
                            (!0 === n && q(r)) ||
                            (!e && !q(r)) ||
                            (t.draggable && r.startsWith("onDrag"))) &&
                          (i[r] = t[r]);
                      return i;
                    })(n, "string" == typeof e, t),
                    u = e !== o.Fragment ? { ...l, ...a, ref: i } : {},
                    { children: h } = n,
                    c = (0, o.useMemo)(() => ((0, F.i)(h) ? h.get() : h), [h]);
                  return (0, o.createElement)(e, { ...u, children: c });
                };
              })(e),
              createVisualElement: i,
              Component: t,
            };
          })(t, e, iB, iF)
        );
    },
    98381: function (t, e, n) {
      "use strict";
      n.d(e, {
        f: function () {
          return r;
        },
        t: function () {
          return o;
        },
      });
      let i = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = i("--"),
        s = i("var(--"),
        o = (t) => !!s(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)$/i;
    },
    85458: function (t, e, n) {
      "use strict";
      n.d(e, {
        c: function () {
          return i;
        },
      });
      let i = { skipAnimations: !1, useManualTiming: !1 };
    },
    16829: function (t, e, n) {
      "use strict";
      function i(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      n.d(e, {
        cl: function () {
          return r;
        },
        y4: function () {
          return i;
        },
      });
    },
    99045: function (t, e, n) {
      "use strict";
      n.d(e, {
        u: function () {
          return i;
        },
      });
      let i = (t, e, n) => (n > e ? e : n < t ? t : n);
    },
    33324: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return s;
        },
      });
      var i = n(62370);
      let r = i.Z,
        s = i.Z;
    },
    78314: function (t, e, n) {
      "use strict";
      n.d(e, {
        s: function () {
          return u;
        },
      });
      var i = n(33324),
        r = n(99045),
        s = n(73385),
        o = n(16267),
        a = n(62370),
        l = n(17850);
      function u(t, e, { clamp: n = !0, ease: u, mixer: h } = {}) {
        let c = t.length;
        if (
          ((0, i.k)(
            c === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === c)
        )
          return () => e[0];
        t[0] > t[c - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let d = (function (t, e, n) {
            let i = [],
              r = n || l.C,
              o = t.length - 1;
            for (let n = 0; n < o; n++) {
              let o = r(t[n], t[n + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[n] || a.Z : e;
                o = (0, s.z)(t, o);
              }
              i.push(o);
            }
            return i;
          })(e, u, h),
          f = d.length,
          p = (e) => {
            let n = 0;
            if (f > 1) for (; n < t.length - 2 && !(e < t[n + 1]); n++);
            let i = (0, o.Y)(t[n], t[n + 1], e);
            return d[n](i);
          };
        return n ? (e) => p((0, r.u)(t[0], t[c - 1], e)) : p;
      }
    },
    7910: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return i;
        },
      });
      let i = "undefined" != typeof document;
    },
    17850: function (t, e, n) {
      "use strict";
      n.d(e, {
        C: function () {
          return S;
        },
      });
      var i = n(85816),
        r = n(33324);
      function s(t, e, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? t + (e - t) * 6 * n
          : n < 0.5
          ? e
          : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t;
      }
      var o = n(87800),
        a = n(95132),
        l = n(20155);
      let u = (t, e, n) => {
          let i = t * t,
            r = n * (e * e - i) + i;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        h = [o.$, a.m, l.J],
        c = (t) => h.find((e) => e.test(t));
      function d(t) {
        let e = c(t);
        (0, r.k)(
          !!e,
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let n = e.parse(t);
        return (
          e === l.J &&
            (n = (function ({ hue: t, saturation: e, lightness: n, alpha: i }) {
              (t /= 360), (n /= 100);
              let r = 0,
                o = 0,
                a = 0;
              if ((e /= 100)) {
                let i = n < 0.5 ? n * (1 + e) : n + e - n * e,
                  l = 2 * n - i;
                (r = s(l, i, t + 1 / 3)),
                  (o = s(l, i, t)),
                  (a = s(l, i, t - 1 / 3));
              } else r = o = a = n;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: i,
              };
            })(n)),
          n
        );
      }
      let f = (t, e) => {
        let n = d(t),
          r = d(e),
          s = { ...n };
        return (t) => (
          (s.red = u(n.red, r.red, t)),
          (s.green = u(n.green, r.green, t)),
          (s.blue = u(n.blue, r.blue, t)),
          (s.alpha = (0, i.t)(n.alpha, r.alpha, t)),
          a.m.transform(s)
        );
      };
      var p = n(73385),
        m = n(60108),
        g = n(43435),
        v = n(98381);
      function y(t, e) {
        return (n) => (n > 0 ? e : t);
      }
      function x(t, e) {
        return (n) => (0, i.t)(t, e, n);
      }
      function P(t) {
        return "number" == typeof t
          ? x
          : "string" == typeof t
          ? (0, v.t)(t)
            ? y
            : m.$.test(t)
            ? f
            : A
          : Array.isArray(t)
          ? b
          : "object" == typeof t
          ? m.$.test(t)
            ? f
            : w
          : y;
      }
      function b(t, e) {
        let n = [...t],
          i = n.length,
          r = t.map((t, n) => P(t)(t, e[n]));
        return (t) => {
          for (let e = 0; e < i; e++) n[e] = r[e](t);
          return n;
        };
      }
      function w(t, e) {
        let n = { ...t, ...e },
          i = {};
        for (let r in n)
          void 0 !== t[r] && void 0 !== e[r] && (i[r] = P(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in i) n[e] = i[e](t);
          return n;
        };
      }
      let A = (t, e) => {
        let n = g.P.createTransformer(e),
          i = (0, g.V)(t),
          s = (0, g.V)(e);
        return i.indexes.var.length === s.indexes.var.length &&
          i.indexes.color.length === s.indexes.color.length &&
          i.indexes.number.length >= s.indexes.number.length
          ? (0, p.z)(
              b(
                (function (t, e) {
                  var n;
                  let i = [],
                    r = { color: 0, var: 0, number: 0 };
                  for (let s = 0; s < e.values.length; s++) {
                    let o = e.types[s],
                      a = t.indexes[o][r[o]],
                      l = null !== (n = t.values[a]) && void 0 !== n ? n : 0;
                    (i[s] = l), r[o]++;
                  }
                  return i;
                })(i, s),
                s.values
              ),
              n
            )
          : ((0, r.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            y(t, e));
      };
      function S(t, e, n) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof n
          ? (0, i.t)(t, e, n)
          : P(t)(t, e);
      }
    },
    85816: function (t, e, n) {
      "use strict";
      n.d(e, {
        t: function () {
          return i;
        },
      });
      let i = (t, e, n) => t + (e - t) * n;
    },
    62370: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      let i = (t) => t;
    },
    39276: function (t, e, n) {
      "use strict";
      n.d(e, {
        Y: function () {
          return s;
        },
      });
      var i = n(85816),
        r = n(16267);
      function s(t) {
        let e = [0];
        return (
          !(function (t, e) {
            let n = t[t.length - 1];
            for (let s = 1; s <= e; s++) {
              let o = (0, r.Y)(0, e, s);
              t.push((0, i.t)(n, 1, o));
            }
          })(e, t.length - 1),
          e
        );
      }
    },
    73385: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return r;
        },
      });
      let i = (t, e) => (n) => e(t(n)),
        r = (...t) => t.reduce(i);
    },
    16267: function (t, e, n) {
      "use strict";
      n.d(e, {
        Y: function () {
          return i;
        },
      });
      let i = (t, e, n) => {
        let i = e - t;
        return 0 === i ? 1 : (n - t) / i;
      };
    },
    14267: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return r;
        },
      });
      var i = n(16829);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, i.y4)(this.subscriptions, t),
            () => (0, i.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, n) {
          let i = this.subscriptions.length;
          if (i) {
            if (1 === i) this.subscriptions[0](t, e, n);
            else
              for (let r = 0; r < i; r++) {
                let i = this.subscriptions[r];
                i && i(t, e, n);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    23376: function (t, e, n) {
      "use strict";
      n.d(e, {
        X: function () {
          return r;
        },
        w: function () {
          return i;
        },
      });
      let i = (t) => 1e3 * t,
        r = (t) => t / 1e3;
    },
    15644: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return r;
        },
      });
      var i = n(15039);
      function r(t) {
        let e = (0, i.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    85422: function (t, e, n) {
      "use strict";
      n.d(e, {
        N: function () {
          return o;
        },
      });
      var i = n(15039),
        r = n(11518),
        s = n(11417);
      function o() {
        let t = (0, r.t)(),
          [e, n] = (0, i.useState)(0),
          o = (0, i.useCallback)(() => {
            t.current && n(e + 1);
          }, [e]);
        return [(0, i.useCallback)(() => s.Wi.postRender(o), [o]), e];
      }
    },
    11518: function (t, e, n) {
      "use strict";
      n.d(e, {
        t: function () {
          return s;
        },
      });
      var i = n(15039),
        r = n(17563);
      function s() {
        let t = (0, i.useRef)(!1);
        return (
          (0, r.L)(
            () => (
              (t.current = !0),
              () => {
                t.current = !1;
              }
            ),
            []
          ),
          t
        );
      }
    },
    17563: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return r;
        },
      });
      var i = n(15039);
      let r = n(7910).j ? i.useLayoutEffect : i.useEffect;
    },
    31792: function (t, e, n) {
      "use strict";
      function i(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
      n.d(e, {
        R: function () {
          return i;
        },
      });
    },
    76593: function (t, e, n) {
      "use strict";
      n.d(e, {
        BX: function () {
          return h;
        },
        S1: function () {
          return l;
        },
      });
      var i = n(14267),
        r = n(31792),
        s = n(22908),
        o = n(11417);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "11.0.8"),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let n = s.X.now();
              this.updatedAt !== n && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.canTrackVelocity = a(this.current)),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t), (this.updatedAt = s.X.now());
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new i.L());
          let n = this.events[t].add(e);
          return "change" === t
            ? () => {
                n(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : n;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, n) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - n);
        }
        jump(t) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = s.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    87800: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return r;
        },
      });
      var i = n(95132);
      let r = {
        test: (0, n(80398).i)("#"),
        parse: function (t) {
          let e = "",
            n = "",
            i = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (n = t.substring(3, 5)),
                (i = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (n = t.substring(2, 3)),
                (i = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (n += n),
                (i += i),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(i, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: i.m.transform,
      };
    },
    20155: function (t, e, n) {
      "use strict";
      n.d(e, {
        J: function () {
          return a;
        },
      });
      var i = n(63937),
        r = n(83605),
        s = n(94964),
        o = n(80398);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: n, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.aQ.transform((0, s.Nw)(e)) +
          ", " +
          r.aQ.transform((0, s.Nw)(n)) +
          ", " +
          (0, s.Nw)(i.Fq.transform(o)) +
          ")",
      };
    },
    60108: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return a;
        },
      });
      var i = n(94964),
        r = n(87800),
        s = n(20155),
        o = n(95132);
      let a = {
        test: (t) => o.m.test(t) || r.$.test(t) || s.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : s.J.test(t)
            ? s.J.parse(t)
            : r.$.parse(t),
        transform: (t) =>
          (0, i.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? o.m.transform(t)
            : s.J.transform(t),
      };
    },
    95132: function (t, e, n) {
      "use strict";
      n.d(e, {
        m: function () {
          return u;
        },
      });
      var i = n(99045),
        r = n(63937),
        s = n(94964),
        o = n(80398);
      let a = (t) => (0, i.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(n) +
            ", " +
            (0, s.Nw)(r.Fq.transform(i)) +
            ")",
        };
    },
    80398: function (t, e, n) {
      "use strict";
      n.d(e, {
        d: function () {
          return s;
        },
        i: function () {
          return r;
        },
      });
      var i = n(94964);
      let r = (t, e) => (n) =>
          !!(
            ((0, i.HD)(n) && i.mj.test(n) && n.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(n, e))
          ),
        s = (t, e, n) => (r) => {
          if (!(0, i.HD)(r)) return r;
          let [s, o, a, l] = r.match(i.KP);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [n]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    43435: function (t, e, n) {
      "use strict";
      n.d(e, {
        P: function () {
          return d;
        },
        V: function () {
          return l;
        },
      });
      var i = n(60108),
        r = n(94964);
      let s = "number",
        o = "color",
        a =
          /(var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\))|(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))|((-)?([\d]*\.?[\d])+)/gi;
      function l(t) {
        let e = t.toString(),
          n = e.match(a) || [],
          r = [],
          l = { color: [], number: [], var: [] },
          u = [];
        for (let t = 0; t < n.length; t++) {
          let e = n[t];
          i.$.test(e)
            ? (l.color.push(t), u.push(o), r.push(i.$.parse(e)))
            : e.startsWith("var(")
            ? (l.var.push(t), u.push("var"), r.push(e))
            : (l.number.push(t), u.push(s), r.push(parseFloat(e)));
        }
        return {
          values: r,
          split: e.replace(a, "${}").split("${}"),
          indexes: l,
          types: u,
        };
      }
      function u(t) {
        return l(t).values;
      }
      function h(t) {
        let { split: e, types: n } = l(t),
          a = e.length;
        return (t) => {
          let l = "";
          for (let u = 0; u < a; u++)
            if (((l += e[u]), void 0 !== t[u])) {
              let e = n[u];
              e === s
                ? (l += (0, r.Nw)(t[u]))
                : e === o
                ? (l += i.$.transform(t[u]))
                : (l += t[u]);
            }
          return l;
        };
      }
      let c = (t) => ("number" == typeof t ? 0 : t),
        d = {
          test: function (t) {
            var e, n;
            return (
              isNaN(t) &&
              (0, r.HD)(t) &&
              ((null === (e = t.match(r.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (n = t.match(r.dA)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: u,
          createTransformer: h,
          getAnimatableNone: function (t) {
            let e = u(t);
            return h(t)(e.map(c));
          },
        };
    },
    63937: function (t, e, n) {
      "use strict";
      n.d(e, {
        Fq: function () {
          return s;
        },
        Rx: function () {
          return r;
        },
        bA: function () {
          return o;
        },
      });
      var i = n(99045);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...r, transform: (t) => (0, i.u)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    83605: function (t, e, n) {
      "use strict";
      n.d(e, {
        $C: function () {
          return h;
        },
        RW: function () {
          return s;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var i = n(94964);
      let r = (t) => ({
          test: (e) =>
            (0, i.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        s = r("deg"),
        o = r("%"),
        a = r("px"),
        l = r("vh"),
        u = r("vw"),
        h = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    94964: function (t, e, n) {
      "use strict";
      n.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return r;
        },
        Nw: function () {
          return i;
        },
        dA: function () {
          return s;
        },
        mj: function () {
          return o;
        },
      });
      let i = (t) => Math.round(1e5 * t) / 1e5,
        r = /(-)?([\d]*\.?[\d])+/g,
        s =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        o =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function a(t) {
        return "string" == typeof t;
      }
    },
    21487: function (t, e, n) {
      "use strict";
      n.d(e, {
        i: function () {
          return i;
        },
      });
      let i = (t) => !!(t && t.getVelocity);
    },
  },
]);
