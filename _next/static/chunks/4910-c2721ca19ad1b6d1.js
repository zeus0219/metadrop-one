"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4910],
  {
    73198: function (t, e, n) {
      n.d(e, {
        j: function () {
          return s;
        },
      });
      var r = n(94699),
        i = n(36076),
        s = new (class extends r.l {
          #t;
          #e;
          #n;
          constructor() {
            super(),
              (this.#n = (t) => {
                if (!i.sk && window.addEventListener) {
                  let e = () => t();
                  return (
                    window.addEventListener("visibilitychange", e, !1),
                    () => {
                      window.removeEventListener("visibilitychange", e);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#e || this.setEventListener(this.#n);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#e?.(), (this.#e = void 0));
          }
          setEventListener(t) {
            (this.#n = t),
              this.#e?.(),
              (this.#e = t((t) => {
                "boolean" == typeof t ? this.setFocused(t) : this.onFocus();
              }));
          }
          setFocused(t) {
            this.#t !== t && ((this.#t = t), this.onFocus());
          }
          onFocus() {
            let t = this.isFocused();
            this.listeners.forEach((e) => {
              e(t);
            });
          }
          isFocused() {
            return "boolean" == typeof this.#t
              ? this.#t
              : globalThis.document?.visibilityState !== "hidden";
          }
        })();
    },
    29360: function (t, e, n) {
      n.d(e, {
        V: function () {
          return r;
        },
      });
      var r = (function () {
        let t = [],
          e = 0,
          n = (t) => {
            t();
          },
          r = (t) => {
            t();
          },
          i = (t) => setTimeout(t, 0),
          s = (r) => {
            e
              ? t.push(r)
              : i(() => {
                  n(r);
                });
          },
          u = () => {
            let e = t;
            (t = []),
              e.length &&
                i(() => {
                  r(() => {
                    e.forEach((t) => {
                      n(t);
                    });
                  });
                });
          };
        return {
          batch: (t) => {
            let n;
            e++;
            try {
              n = t();
            } finally {
              --e || u();
            }
            return n;
          },
          batchCalls:
            (t) =>
            (...e) => {
              s(() => {
                t(...e);
              });
            },
          schedule: s,
          setNotifyFunction: (t) => {
            n = t;
          },
          setBatchNotifyFunction: (t) => {
            r = t;
          },
          setScheduler: (t) => {
            i = t;
          },
        };
      })();
    },
    11996: function (t, e, n) {
      n.d(e, {
        N: function () {
          return s;
        },
      });
      var r = n(94699),
        i = n(36076),
        s = new (class extends r.l {
          #r = !0;
          #e;
          #n;
          constructor() {
            super(),
              (this.#n = (t) => {
                if (!i.sk && window.addEventListener) {
                  let e = () => t(!0),
                    n = () => t(!1);
                  return (
                    window.addEventListener("online", e, !1),
                    window.addEventListener("offline", n, !1),
                    () => {
                      window.removeEventListener("online", e),
                        window.removeEventListener("offline", n);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#e || this.setEventListener(this.#n);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#e?.(), (this.#e = void 0));
          }
          setEventListener(t) {
            (this.#n = t),
              this.#e?.(),
              (this.#e = t(this.setOnline.bind(this)));
          }
          setOnline(t) {
            this.#r !== t &&
              ((this.#r = t),
              this.listeners.forEach((e) => {
                e(t);
              }));
          }
          isOnline() {
            return this.#r;
          }
        })();
    },
    30558: function (t, e, n) {
      n.d(e, {
        DV: function () {
          return a;
        },
        Kw: function () {
          return o;
        },
        Mz: function () {
          return h;
        },
      });
      var r = n(73198),
        i = n(11996),
        s = n(36076);
      function u(t) {
        return Math.min(1e3 * 2 ** t, 3e4);
      }
      function o(t) {
        return (t ?? "online") !== "online" || i.N.isOnline();
      }
      var c = class {
        constructor(t) {
          (this.revert = t?.revert), (this.silent = t?.silent);
        }
      };
      function a(t) {
        return t instanceof c;
      }
      function h(t) {
        let e,
          n,
          a,
          h = !1,
          l = 0,
          f = !1,
          d = new Promise((t, e) => {
            (n = t), (a = e);
          }),
          p = () =>
            !r.j.isFocused() || ("always" !== t.networkMode && !i.N.isOnline()),
          y = (r) => {
            f || ((f = !0), t.onSuccess?.(r), e?.(), n(r));
          },
          v = (n) => {
            f || ((f = !0), t.onError?.(n), e?.(), a(n));
          },
          b = () =>
            new Promise((n) => {
              (e = (t) => {
                let e = f || !p();
                return e && n(t), e;
              }),
                t.onPause?.();
            }).then(() => {
              (e = void 0), f || t.onContinue?.();
            }),
          R = () => {
            let e;
            if (!f) {
              try {
                e = t.fn();
              } catch (t) {
                e = Promise.reject(t);
              }
              Promise.resolve(e)
                .then(y)
                .catch((e) => {
                  if (f) return;
                  let n = t.retry ?? (s.sk ? 0 : 3),
                    r = t.retryDelay ?? u,
                    i = "function" == typeof r ? r(l, e) : r,
                    o =
                      !0 === n ||
                      ("number" == typeof n && l < n) ||
                      ("function" == typeof n && n(l, e));
                  if (h || !o) {
                    v(e);
                    return;
                  }
                  l++,
                    t.onFail?.(l, e),
                    (0, s._v)(i)
                      .then(() => {
                        if (p()) return b();
                      })
                      .then(() => {
                        h ? v(e) : R();
                      });
                });
            }
          };
        return (
          o(t.networkMode) ? R() : b().then(R),
          {
            promise: d,
            cancel: (e) => {
              f || (v(new c(e)), t.abort?.());
            },
            continue: () => (e?.() ? d : Promise.resolve()),
            cancelRetry: () => {
              h = !0;
            },
            continueRetry: () => {
              h = !1;
            },
          }
        );
      }
    },
    94699: function (t, e, n) {
      n.d(e, {
        l: function () {
          return r;
        },
      });
      var r = class {
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(t) {
          return (
            this.listeners.add(t),
            this.onSubscribe(),
            () => {
              this.listeners.delete(t), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      };
    },
    36076: function (t, e, n) {
      n.d(e, {
        CN: function () {
          return w;
        },
        Ht: function () {
          return g;
        },
        Kp: function () {
          return o;
        },
        PN: function () {
          return u;
        },
        Q$: function () {
          return d;
        },
        Rm: function () {
          return h;
        },
        SE: function () {
          return s;
        },
        VS: function () {
          return p;
        },
        VX: function () {
          return O;
        },
        X7: function () {
          return a;
        },
        Ym: function () {
          return l;
        },
        ZT: function () {
          return i;
        },
        _v: function () {
          return R;
        },
        _x: function () {
          return c;
        },
        oE: function () {
          return m;
        },
        sk: function () {
          return r;
        },
        to: function () {
          return f;
        },
      });
      var r = "undefined" == typeof window || "Deno" in globalThis;
      function i() {}
      function s(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function u(t) {
        return "number" == typeof t && t >= 0 && t !== 1 / 0;
      }
      function o(t, e) {
        return Math.max(t + (e || 0) - Date.now(), 0);
      }
      function c(t, e) {
        let {
          type: n = "all",
          exact: r,
          fetchStatus: i,
          predicate: s,
          queryKey: u,
          stale: o,
        } = t;
        if (u) {
          if (r) {
            if (e.queryHash !== h(u, e.options)) return !1;
          } else if (!f(e.queryKey, u)) return !1;
        }
        if ("all" !== n) {
          let t = e.isActive();
          if (("active" === n && !t) || ("inactive" === n && t)) return !1;
        }
        return (
          ("boolean" != typeof o || e.isStale() === o) &&
          (!i || i === e.state.fetchStatus) &&
          (!s || !!s(e))
        );
      }
      function a(t, e) {
        let { exact: n, status: r, predicate: i, mutationKey: s } = t;
        if (s) {
          if (!e.options.mutationKey) return !1;
          if (n) {
            if (l(e.options.mutationKey) !== l(s)) return !1;
          } else if (!f(e.options.mutationKey, s)) return !1;
        }
        return (!r || e.state.status === r) && (!i || !!i(e));
      }
      function h(t, e) {
        return (e?.queryKeyHashFn || l)(t);
      }
      function l(t) {
        return JSON.stringify(t, (t, e) =>
          v(e)
            ? Object.keys(e)
                .sort()
                .reduce((t, n) => ((t[n] = e[n]), t), {})
            : e
        );
      }
      function f(t, e) {
        return (
          t === e ||
          (typeof t == typeof e &&
            !!t &&
            !!e &&
            "object" == typeof t &&
            "object" == typeof e &&
            !Object.keys(e).some((n) => !f(t[n], e[n])))
        );
      }
      function d(t, e) {
        if (t === e) return t;
        let n = y(t) && y(e);
        if (n || (v(t) && v(e))) {
          let r = n ? t : Object.keys(t),
            i = r.length,
            s = n ? e : Object.keys(e),
            u = s.length,
            o = n ? [] : {},
            c = 0;
          for (let i = 0; i < u; i++) {
            let u = n ? i : s[i];
            !n && void 0 === t[u] && void 0 === e[u] && r.includes(u)
              ? ((o[u] = void 0), c++)
              : ((o[u] = d(t[u], e[u])),
                o[u] === t[u] && void 0 !== t[u] && c++);
          }
          return i === u && c === i ? t : o;
        }
        return e;
      }
      function p(t, e) {
        if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
        for (let n in t) if (t[n] !== e[n]) return !1;
        return !0;
      }
      function y(t) {
        return Array.isArray(t) && t.length === Object.keys(t).length;
      }
      function v(t) {
        if (!b(t)) return !1;
        let e = t.constructor;
        if (void 0 === e) return !0;
        let n = e.prototype;
        return !!(b(n) && n.hasOwnProperty("isPrototypeOf"));
      }
      function b(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }
      function R(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      function m(t, e, n) {
        return "function" == typeof n.structuralSharing
          ? n.structuralSharing(t, e)
          : !1 !== n.structuralSharing
          ? d(t, e)
          : e;
      }
      function O(t, e, n = 0) {
        let r = [...t, e];
        return n && r.length > n ? r.slice(1) : r;
      }
      function g(t, e, n = 0) {
        let r = [e, ...t];
        return n && r.length > n ? r.slice(0, -1) : r;
      }
      var w = Symbol();
    },
    89721: function (t, e, n) {
      n.d(e, {
        NL: function () {
          return u;
        },
        aH: function () {
          return o;
        },
      });
      var r = n(15039),
        i = n(2067),
        s = r.createContext(void 0),
        u = (t) => {
          let e = r.useContext(s);
          if (t) return t;
          if (!e)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return e;
        },
        o = ({ client: t, children: e }) => (
          r.useEffect(
            () => (
              t.mount(),
              () => {
                t.unmount();
              }
            ),
            [t]
          ),
          (0, i.jsx)(s.Provider, { value: t, children: e })
        );
    },
    61174: function (t, e, n) {
      let r;
      n.d(e, {
        a: function () {
          return I;
        },
      });
      var i = n(36076),
        s = n(29360),
        u = n(73198),
        o = n(94699),
        c = n(30558),
        a = class extends o.l {
          constructor(t, e) {
            super(),
              (this.options = e),
              (this.#i = t),
              (this.#s = null),
              this.bindMethods(),
              this.setOptions(e);
          }
          #i;
          #u = void 0;
          #o = void 0;
          #c = void 0;
          #a;
          #h;
          #s;
          #l;
          #f;
          #d;
          #p;
          #y;
          #v;
          #b = new Set();
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              (this.#u.addObserver(this),
              h(this.#u, this.options) ? this.#R() : this.updateResult(),
              this.#m());
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return l(this.#u, this.options, this.options.refetchOnReconnect);
          }
          shouldFetchOnWindowFocus() {
            return l(this.#u, this.options, this.options.refetchOnWindowFocus);
          }
          destroy() {
            (this.listeners = new Set()),
              this.#O(),
              this.#g(),
              this.#u.removeObserver(this);
          }
          setOptions(t, e) {
            let n = this.options,
              r = this.#u;
            if (
              ((this.options = this.#i.defaultQueryOptions(t)),
              void 0 !== this.options.enabled &&
                "boolean" != typeof this.options.enabled)
            )
              throw Error("Expected enabled to be a boolean");
            this.#w(),
              this.#u.setOptions(this.options),
              n._defaulted &&
                !(0, i.VS)(this.options, n) &&
                this.#i
                  .getQueryCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    query: this.#u,
                    observer: this,
                  });
            let s = this.hasListeners();
            s && f(this.#u, r, this.options, n) && this.#R(),
              this.updateResult(e),
              s &&
                (this.#u !== r ||
                  this.options.enabled !== n.enabled ||
                  this.options.staleTime !== n.staleTime) &&
                this.#S();
            let u = this.#E();
            s &&
              (this.#u !== r ||
                this.options.enabled !== n.enabled ||
                u !== this.#v) &&
              this.#Q(u);
          }
          getOptimisticResult(t) {
            let e = this.#i.getQueryCache().build(this.#i, t),
              n = this.createResult(e, t);
            return (
              (0, i.VS)(this.getCurrentResult(), n) ||
                ((this.#c = n),
                (this.#h = this.options),
                (this.#a = this.#u.state)),
              n
            );
          }
          getCurrentResult() {
            return this.#c;
          }
          trackResult(t, e) {
            let n = {};
            return (
              Object.keys(t).forEach((r) => {
                Object.defineProperty(n, r, {
                  configurable: !1,
                  enumerable: !0,
                  get: () => (this.trackProp(r), e?.(r), t[r]),
                });
              }),
              n
            );
          }
          trackProp(t) {
            this.#b.add(t);
          }
          getCurrentQuery() {
            return this.#u;
          }
          refetch({ ...t } = {}) {
            return this.fetch({ ...t });
          }
          fetchOptimistic(t) {
            let e = this.#i.defaultQueryOptions(t),
              n = this.#i.getQueryCache().build(this.#i, e);
            return (
              (n.isFetchingOptimistic = !0),
              n.fetch().then(() => this.createResult(n, e))
            );
          }
          fetch(t) {
            return this.#R({ ...t, cancelRefetch: t.cancelRefetch ?? !0 }).then(
              () => (this.updateResult(), this.#c)
            );
          }
          #R(t) {
            this.#w();
            let e = this.#u.fetch(this.options, t);
            return t?.throwOnError || (e = e.catch(i.ZT)), e;
          }
          #S() {
            if (
              (this.#O(),
              i.sk || this.#c.isStale || !(0, i.PN)(this.options.staleTime))
            )
              return;
            let t = (0, i.Kp)(this.#c.dataUpdatedAt, this.options.staleTime);
            this.#p = setTimeout(() => {
              this.#c.isStale || this.updateResult();
            }, t + 1);
          }
          #E() {
            return (
              ("function" == typeof this.options.refetchInterval
                ? this.options.refetchInterval(this.#u)
                : this.options.refetchInterval) ?? !1
            );
          }
          #Q(t) {
            this.#g(),
              (this.#v = t),
              !i.sk &&
                !1 !== this.options.enabled &&
                (0, i.PN)(this.#v) &&
                0 !== this.#v &&
                (this.#y = setInterval(() => {
                  (this.options.refetchIntervalInBackground ||
                    u.j.isFocused()) &&
                    this.#R();
                }, this.#v));
          }
          #m() {
            this.#S(), this.#Q(this.#E());
          }
          #O() {
            this.#p && (clearTimeout(this.#p), (this.#p = void 0));
          }
          #g() {
            this.#y && (clearInterval(this.#y), (this.#y = void 0));
          }
          createResult(t, e) {
            let n;
            let r = this.#u,
              s = this.options,
              u = this.#c,
              o = this.#a,
              a = this.#h,
              l = t !== r ? t.state : this.#o,
              { state: p } = t,
              { error: y, errorUpdatedAt: v, fetchStatus: b, status: R } = p,
              m = !1;
            if (e._optimisticResults) {
              let n = this.hasListeners(),
                i = !n && h(t, e),
                u = n && f(t, r, e, s);
              (i || u) &&
                ((b = (0, c.Kw)(t.options.networkMode) ? "fetching" : "paused"),
                void 0 === p.data && (R = "pending")),
                "isRestoring" === e._optimisticResults && (b = "idle");
            }
            if (e.select && void 0 !== p.data) {
              if (u && p.data === o?.data && e.select === this.#l) n = this.#f;
              else
                try {
                  (this.#l = e.select),
                    (n = e.select(p.data)),
                    (n = (0, i.oE)(u?.data, n, e)),
                    (this.#f = n),
                    (this.#s = null);
                } catch (t) {
                  this.#s = t;
                }
            } else n = p.data;
            if (
              void 0 !== e.placeholderData &&
              void 0 === n &&
              "pending" === R
            ) {
              let t;
              if (
                u?.isPlaceholderData &&
                e.placeholderData === a?.placeholderData
              )
                t = u.data;
              else if (
                ((t =
                  "function" == typeof e.placeholderData
                    ? e.placeholderData(this.#d?.state.data, this.#d)
                    : e.placeholderData),
                e.select && void 0 !== t)
              )
                try {
                  (t = e.select(t)), (this.#s = null);
                } catch (t) {
                  this.#s = t;
                }
              void 0 !== t &&
                ((R = "success"), (n = (0, i.oE)(u?.data, t, e)), (m = !0));
            }
            this.#s &&
              ((y = this.#s), (n = this.#f), (v = Date.now()), (R = "error"));
            let O = "fetching" === b,
              g = "pending" === R,
              w = "error" === R,
              S = g && O,
              E = void 0 !== p.data;
            return {
              status: R,
              fetchStatus: b,
              isPending: g,
              isSuccess: "success" === R,
              isError: w,
              isInitialLoading: S,
              isLoading: S,
              data: n,
              dataUpdatedAt: p.dataUpdatedAt,
              error: y,
              errorUpdatedAt: v,
              failureCount: p.fetchFailureCount,
              failureReason: p.fetchFailureReason,
              errorUpdateCount: p.errorUpdateCount,
              isFetched: p.dataUpdateCount > 0 || p.errorUpdateCount > 0,
              isFetchedAfterMount:
                p.dataUpdateCount > l.dataUpdateCount ||
                p.errorUpdateCount > l.errorUpdateCount,
              isFetching: O,
              isRefetching: O && !g,
              isLoadingError: w && !E,
              isPaused: "paused" === b,
              isPlaceholderData: m,
              isRefetchError: w && E,
              isStale: d(t, e),
              refetch: this.refetch,
            };
          }
          updateResult(t) {
            let e = this.#c,
              n = this.createResult(this.#u, this.options);
            if (
              ((this.#a = this.#u.state),
              (this.#h = this.options),
              void 0 !== this.#a.data && (this.#d = this.#u),
              (0, i.VS)(n, e))
            )
              return;
            this.#c = n;
            let r = {};
            t?.listeners !== !1 &&
              (() => {
                if (!e) return !0;
                let { notifyOnChangeProps: t } = this.options,
                  n = "function" == typeof t ? t() : t;
                if ("all" === n || (!n && !this.#b.size)) return !0;
                let r = new Set(n ?? this.#b);
                return (
                  this.options.throwOnError && r.add("error"),
                  Object.keys(this.#c).some(
                    (t) => this.#c[t] !== e[t] && r.has(t)
                  )
                );
              })() &&
              (r.listeners = !0),
              this.#C({ ...r, ...t });
          }
          #w() {
            let t = this.#i.getQueryCache().build(this.#i, this.options);
            if (t === this.#u) return;
            let e = this.#u;
            (this.#u = t),
              (this.#o = t.state),
              this.hasListeners() &&
                (e?.removeObserver(this), t.addObserver(this));
          }
          onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#m();
          }
          #C(t) {
            s.V.batch(() => {
              t.listeners &&
                this.listeners.forEach((t) => {
                  t(this.#c);
                }),
                this.#i
                  .getQueryCache()
                  .notify({ query: this.#u, type: "observerResultsUpdated" });
            });
          }
        };
      function h(t, e) {
        return (
          (!1 !== e.enabled &&
            void 0 === t.state.data &&
            !("error" === t.state.status && !1 === e.retryOnMount)) ||
          (void 0 !== t.state.data && l(t, e, e.refetchOnMount))
        );
      }
      function l(t, e, n) {
        if (!1 !== e.enabled) {
          let r = "function" == typeof n ? n(t) : n;
          return "always" === r || (!1 !== r && d(t, e));
        }
        return !1;
      }
      function f(t, e, n, r) {
        return (
          (t !== e || !1 === r.enabled) &&
          (!n.suspense || "error" !== t.state.status) &&
          d(t, n)
        );
      }
      function d(t, e) {
        return !1 !== e.enabled && t.isStaleByTime(e.staleTime);
      }
      var p = n(15039);
      n(2067);
      var y = p.createContext(
          ((r = !1),
          {
            clearReset: () => {
              r = !1;
            },
            reset: () => {
              r = !0;
            },
            isReset: () => r,
          })
        ),
        v = () => p.useContext(y),
        b = n(89721),
        R = p.createContext(!1),
        m = () => p.useContext(R);
      R.Provider;
      var O = n(31370),
        g = (t, e) => {
          (t.suspense || t.throwOnError) &&
            !e.isReset() &&
            (t.retryOnMount = !1);
        },
        w = (t) => {
          p.useEffect(() => {
            t.clearReset();
          }, [t]);
        },
        S = ({ result: t, errorResetBoundary: e, throwOnError: n, query: r }) =>
          t.isError &&
          !e.isReset() &&
          !t.isFetching &&
          r &&
          (0, O.L)(n, [t.error, r]),
        E = (t) => {
          t.suspense && "number" != typeof t.staleTime && (t.staleTime = 1e3);
        },
        Q = (t, e) => t?.suspense && e.isPending,
        C = (t, e, n) =>
          e.fetchOptimistic(t).catch(() => {
            n.clearReset();
          });
      function I(t, e) {
        return (function (t, e, n) {
          let r = (0, b.NL)(n),
            i = m(),
            u = v(),
            o = r.defaultQueryOptions(t);
          (o._optimisticResults = i ? "isRestoring" : "optimistic"),
            E(o),
            g(o, u),
            w(u);
          let [c] = p.useState(() => new e(r, o)),
            a = c.getOptimisticResult(o);
          if (
            (p.useSyncExternalStore(
              p.useCallback(
                (t) => {
                  let e = i ? () => void 0 : c.subscribe(s.V.batchCalls(t));
                  return c.updateResult(), e;
                },
                [c, i]
              ),
              () => c.getCurrentResult(),
              () => c.getCurrentResult()
            ),
            p.useEffect(() => {
              c.setOptions(o, { listeners: !1 });
            }, [o, c]),
            Q(o, a))
          )
            throw C(o, c, u);
          if (
            S({
              result: a,
              errorResetBoundary: u,
              throwOnError: o.throwOnError,
              query: r.getQueryCache().get(o.queryHash),
            })
          )
            throw a.error;
          return o.notifyOnChangeProps ? a : c.trackResult(a);
        })(t, a, e);
      }
    },
    31370: function (t, e, n) {
      function r(t, e) {
        return "function" == typeof t ? t(...e) : !!t;
      }
      function i() {}
      n.d(e, {
        L: function () {
          return r;
        },
        Z: function () {
          return i;
        },
      });
    },
    99631: function (t, e, n) {
      function r(t) {
        return JSON.stringify(t, (t, e) =>
          !(function (t) {
            if (!i(t)) return !1;
            let e = t.constructor;
            if (void 0 === e) return !0;
            let n = e.prototype;
            return !!(i(n) && n.hasOwnProperty("isPrototypeOf"));
          })(e)
            ? "bigint" == typeof e
              ? e.toString()
              : e
            : Object.keys(e)
                .sort()
                .reduce((t, n) => ((t[n] = e[n]), t), {})
        );
      }
      function i(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }
      function s(t) {
        let {
          _defaulted: e,
          behavior: n,
          gcTime: r,
          initialData: i,
          initialDataUpdatedAt: s,
          maxPages: u,
          meta: o,
          networkMode: c,
          queryFn: a,
          queryHash: h,
          queryKey: l,
          queryKeyHashFn: f,
          retry: d,
          retryDelay: p,
          structuralSharing: y,
          getPreviousPageParam: v,
          getNextPageParam: b,
          initialPageParam: R,
          _optimisticResults: m,
          enabled: O,
          notifyOnChangeProps: g,
          placeholderData: w,
          refetchInterval: S,
          refetchIntervalInBackground: E,
          refetchOnMount: Q,
          refetchOnReconnect: C,
          refetchOnWindowFocus: I,
          retryOnMount: k,
          select: F,
          staleTime: P,
          suspense: L,
          throwOnError: T,
          config: j,
          connector: x,
          query: U,
          ...D
        } = t;
        return D;
      }
      n.d(e, {
        O: function () {
          return s;
        },
        k: function () {
          return r;
        },
      });
    },
    85978: function (t, e, n) {
      n.d(e, {
        s: function () {
          return r;
        },
      });
      function r(t, e, n) {
        let r = t[e.name ?? n];
        return "function" == typeof r ? r : (n) => e(t, n);
      }
    },
    13173: function (t, e, n) {
      function r(t) {
        return t.state.chainId;
      }
      n.d(e, {
        x: function () {
          return u;
        },
      });
      var i = n(15039),
        s = n(8979);
      function u(t = {}) {
        let e = (0, s.Z)(t);
        return (0, i.useSyncExternalStore)(
          (t) =>
            (function (t, e) {
              let { onChange: n } = e;
              return t.subscribe((t) => t.chainId, n);
            })(e, { onChange: t }),
          () => r(e),
          () => r(e)
        );
      }
    },
    23753: function (t, e, n) {
      n.d(e, {
        aM: function () {
          return o;
        },
        if: function () {
          return c;
        },
      });
      var r = n(61174),
        i = n(36076),
        s = n(15950),
        u = n(99631);
      function o(t) {
        let e = (0, r.a)({ ...t, queryKeyHashFn: u.k });
        return (e.queryKey = t.queryKey), e;
      }
      function c(t, e) {
        return (0, s.v)(t, e) ? t : (0, i.Q$)(t, e);
      }
    },
  },
]);
