"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4685],
  {
    94685: function (t, e, n) {
      let r, i, o, s, a;
      n.d(e, {
        SV: function () {
          return ek;
        },
      });
      let c = Object.prototype.toString;
      function u(t) {
        switch (c.call(t)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMException]":
            return !0;
          default:
            return v(t, Error);
        }
      }
      function l(t, e) {
        return c.call(t) === `[object ${e}]`;
      }
      function p(t) {
        return l(t, "ErrorEvent");
      }
      function h(t) {
        return l(t, "DOMError");
      }
      function d(t) {
        return l(t, "String");
      }
      function f(t) {
        return (
          "object" == typeof t &&
          null !== t &&
          "__sentry_template_string__" in t &&
          "__sentry_template_values__" in t
        );
      }
      function g(t) {
        return (
          null === t || f(t) || ("object" != typeof t && "function" != typeof t)
        );
      }
      function _(t) {
        return l(t, "Object");
      }
      function m(t) {
        return "undefined" != typeof Event && v(t, Event);
      }
      function y(t) {
        return !!(t && t.then && "function" == typeof t.then);
      }
      function v(t, e) {
        try {
          return t instanceof e;
        } catch (t) {
          return !1;
        }
      }
      function E(t) {
        return !!(
          "object" == typeof t &&
          null !== t &&
          (t.__isVue || t._isVue)
        );
      }
      function S(t) {
        return t && t.Math == Math ? t : void 0;
      }
      let b =
        ("object" == typeof globalThis && S(globalThis)) ||
        ("object" == typeof window && S(window)) ||
        ("object" == typeof self && S(self)) ||
        ("object" == typeof n.g && S(n.g)) ||
        (function () {
          return this;
        })() ||
        {};
      function x(t, e, n) {
        let r = n || b,
          i = (r.__SENTRY__ = r.__SENTRY__ || {});
        return i[t] || (i[t] = e());
      }
      function w() {
        let t = b.crypto || b.msCrypto,
          e = () => 16 * Math.random();
        try {
          if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
          t &&
            t.getRandomValues &&
            (e = () => {
              let e = new Uint8Array(1);
              return t.getRandomValues(e), e[0];
            });
        } catch (t) {}
        return "10000000100040008000100000000000".replace(/[018]/g, (t) =>
          (t ^ ((15 & e()) >> (t / 4))).toString(16)
        );
      }
      function T(t) {
        return t.exception && t.exception.values
          ? t.exception.values[0]
          : void 0;
      }
      function k(t) {
        let { message: e, event_id: n } = t;
        if (e) return e;
        let r = T(t);
        return r
          ? r.type && r.value
            ? `${r.type}: ${r.value}`
            : r.type || r.value || n || "<unknown>"
          : n || "<unknown>";
      }
      function $(t, e, n) {
        let r = (t.exception = t.exception || {}),
          i = (r.values = r.values || []),
          o = (i[0] = i[0] || {});
        o.value || (o.value = e || ""), o.type || (o.type = n || "Error");
      }
      function D(t, e) {
        let n = T(t);
        if (!n) return;
        let r = n.mechanism;
        if (
          ((n.mechanism = { type: "generic", handled: !0, ...r, ...e }),
          e && "data" in e)
        ) {
          let t = { ...(r && r.data), ...e.data };
          n.mechanism.data = t;
        }
      }
      function C() {
        return Date.now() / 1e3;
      }
      let O = (function () {
        let { performance: t } = b;
        if (!t || !t.now) return C;
        let e = Date.now() - t.now(),
          n = void 0 == t.timeOrigin ? e : t.timeOrigin;
        return () => (n + t.now()) / 1e3;
      })();
      (() => {
        let { performance: t } = b;
        if (!t || !t.now) return;
        let e = t.now(),
          n = Date.now(),
          r = t.timeOrigin ? Math.abs(t.timeOrigin + e - n) : 36e5,
          i = t.timing && t.timing.navigationStart,
          o = "number" == typeof i ? Math.abs(i + e - n) : 36e5;
        if (r < 36e5 || o < 36e5) return r <= o ? t.timeOrigin : void 0;
      })();
      let I = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        R = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        N = {};
      function j(t) {
        if (!("console" in b)) return t();
        let e = b.console,
          n = {},
          r = Object.keys(N);
        r.forEach((t) => {
          let r = N[t];
          (n[t] = e[t]), (e[t] = r);
        });
        try {
          return t();
        } finally {
          r.forEach((t) => {
            e[t] = n[t];
          });
        }
      }
      let L = (function () {
          let t = !1,
            e = {
              enable: () => {
                t = !0;
              },
              disable: () => {
                t = !1;
              },
              isEnabled: () => t,
            };
          return (
            I
              ? R.forEach((n) => {
                  e[n] = (...e) => {
                    t &&
                      j(() => {
                        b.console[n](`Sentry Logger [${n}]:`, ...e);
                      });
                  };
                })
              : R.forEach((t) => {
                  e[t] = () => void 0;
                }),
            e
          );
        })(),
        M = "production",
        U = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      ((eS = eb || (eb = {}))[(eS.PENDING = 0)] = "PENDING"),
        (eS[(eS.RESOLVED = 1)] = "RESOLVED"),
        (eS[(eS.REJECTED = 2)] = "REJECTED");
      class A {
        constructor(t) {
          A.prototype.__init.call(this),
            A.prototype.__init2.call(this),
            A.prototype.__init3.call(this),
            A.prototype.__init4.call(this),
            (this._state = eb.PENDING),
            (this._handlers = []);
          try {
            t(this._resolve, this._reject);
          } catch (t) {
            this._reject(t);
          }
        }
        then(t, e) {
          return new A((n, r) => {
            this._handlers.push([
              !1,
              (e) => {
                if (t)
                  try {
                    n(t(e));
                  } catch (t) {
                    r(t);
                  }
                else n(e);
              },
              (t) => {
                if (e)
                  try {
                    n(e(t));
                  } catch (t) {
                    r(t);
                  }
                else r(t);
              },
            ]),
              this._executeHandlers();
          });
        }
        catch(t) {
          return this.then((t) => t, t);
        }
        finally(t) {
          return new A((e, n) => {
            let r, i;
            return this.then(
              (e) => {
                (i = !1), (r = e), t && t();
              },
              (e) => {
                (i = !0), (r = e), t && t();
              }
            ).then(() => {
              if (i) {
                n(r);
                return;
              }
              e(r);
            });
          });
        }
        __init() {
          this._resolve = (t) => {
            this._setResult(eb.RESOLVED, t);
          };
        }
        __init2() {
          this._reject = (t) => {
            this._setResult(eb.REJECTED, t);
          };
        }
        __init3() {
          this._setResult = (t, e) => {
            if (this._state === eb.PENDING) {
              if (y(e)) {
                e.then(this._resolve, this._reject);
                return;
              }
              (this._state = t), (this._value = e), this._executeHandlers();
            }
          };
        }
        __init4() {
          this._executeHandlers = () => {
            if (this._state === eb.PENDING) return;
            let t = this._handlers.slice();
            (this._handlers = []),
              t.forEach((t) => {
                t[0] ||
                  (this._state === eb.RESOLVED && t[1](this._value),
                  this._state === eb.REJECTED && t[2](this._value),
                  (t[0] = !0));
              });
          };
        }
      }
      function P(t, e = {}) {
        if (!t) return "<unknown>";
        try {
          let n,
            r = t,
            i = [],
            o = 0,
            s = 0,
            a = Array.isArray(e) ? e : e.keyAttrs,
            c = (!Array.isArray(e) && e.maxStringLength) || 80;
          for (
            ;
            r &&
            o++ < 5 &&
            ((n = (function (t, e) {
              let n, r, i, o, s;
              let a = [];
              if (!t || !t.tagName) return "";
              if (
                b.HTMLElement &&
                t instanceof HTMLElement &&
                t.dataset &&
                t.dataset.sentryComponent
              )
                return t.dataset.sentryComponent;
              a.push(t.tagName.toLowerCase());
              let c =
                e && e.length
                  ? e
                      .filter((e) => t.getAttribute(e))
                      .map((e) => [e, t.getAttribute(e)])
                  : null;
              if (c && c.length)
                c.forEach((t) => {
                  a.push(`[${t[0]}="${t[1]}"]`);
                });
              else if ((t.id && a.push(`#${t.id}`), (n = t.className) && d(n)))
                for (s = 0, r = n.split(/\s+/); s < r.length; s++)
                  a.push(`.${r[s]}`);
              let u = ["aria-label", "type", "name", "title", "alt"];
              for (s = 0; s < u.length; s++)
                (i = u[s]), (o = t.getAttribute(i)) && a.push(`[${i}="${o}"]`);
              return a.join("");
            })(r, a)),
            "html" !== n && (!(o > 1) || !(s + 3 * i.length + n.length >= c)));

          )
            i.push(n), (s += n.length), (r = r.parentNode);
          return i.reverse().join(" > ");
        } catch (t) {
          return "<unknown>";
        }
      }
      function q(t, e = 0) {
        return "string" != typeof t || 0 === e
          ? t
          : t.length <= e
          ? t
          : `${t.slice(0, e)}...`;
      }
      function H(t, e) {
        if (!Array.isArray(t)) return "";
        let n = [];
        for (let e = 0; e < t.length; e++) {
          let r = t[e];
          try {
            E(r) ? n.push("[VueViewModel]") : n.push(String(r));
          } catch (t) {
            n.push("[value cannot be serialized]");
          }
        }
        return n.join(e);
      }
      function Y(t, e = [], n = !1) {
        return e.some((e) =>
          (function (t, e, n = !1) {
            return (
              !!d(t) &&
              (l(e, "RegExp")
                ? e.test(t)
                : !!d(e) && (n ? t === e : t.includes(e)))
            );
          })(t, e, n)
        );
      }
      function B(t, e, n) {
        if (!(e in t)) return;
        let r = t[e],
          i = n(r);
        "function" == typeof i && W(i, r), (t[e] = i);
      }
      function G(t, e, n) {
        try {
          Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0,
          });
        } catch (n) {
          I &&
            L.log(`Failed to add non-enumerable property "${e}" to object`, t);
        }
      }
      function W(t, e) {
        try {
          let n = e.prototype || {};
          (t.prototype = e.prototype = n), G(t, "__sentry_original__", e);
        } catch (t) {}
      }
      function F(t) {
        return t.__sentry_original__;
      }
      function V(t) {
        if (u(t))
          return { message: t.message, name: t.name, stack: t.stack, ...z(t) };
        if (!m(t)) return t;
        {
          let e = {
            type: t.type,
            target: J(t.target),
            currentTarget: J(t.currentTarget),
            ...z(t),
          };
          return (
            "undefined" != typeof CustomEvent &&
              v(t, CustomEvent) &&
              (e.detail = t.detail),
            e
          );
        }
      }
      function J(t) {
        try {
          return "undefined" != typeof Element && v(t, Element)
            ? P(t)
            : Object.prototype.toString.call(t);
        } catch (t) {
          return "<unknown>";
        }
      }
      function z(t) {
        if ("object" != typeof t || null === t) return {};
        {
          let e = {};
          for (let n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        }
      }
      function X(t) {
        return (function t(e, n) {
          if (
            (function (t) {
              if (!_(t)) return !1;
              try {
                let e = Object.getPrototypeOf(t).constructor.name;
                return !e || "Object" === e;
              } catch (t) {
                return !0;
              }
            })(e)
          ) {
            let r = n.get(e);
            if (void 0 !== r) return r;
            let i = {};
            for (let r of (n.set(e, i), Object.keys(e)))
              void 0 !== e[r] && (i[r] = t(e[r], n));
            return i;
          }
          if (Array.isArray(e)) {
            let r = n.get(e);
            if (void 0 !== r) return r;
            let i = [];
            return (
              n.set(e, i),
              e.forEach((e) => {
                i.push(t(e, n));
              }),
              i
            );
          }
          return e;
        })(t, new Map());
      }
      function K(t, e = {}) {
        if (
          (!e.user ||
            (!t.ipAddress &&
              e.user.ip_address &&
              (t.ipAddress = e.user.ip_address),
            t.did ||
              e.did ||
              (t.did = e.user.id || e.user.email || e.user.username)),
          (t.timestamp = e.timestamp || O()),
          e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism),
          e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
          e.sid && (t.sid = 32 === e.sid.length ? e.sid : w()),
          void 0 !== e.init && (t.init = e.init),
          !t.did && e.did && (t.did = `${e.did}`),
          "number" == typeof e.started && (t.started = e.started),
          t.ignoreDuration)
        )
          t.duration = void 0;
        else if ("number" == typeof e.duration) t.duration = e.duration;
        else {
          let e = t.timestamp - t.started;
          t.duration = e >= 0 ? e : 0;
        }
        e.release && (t.release = e.release),
          e.environment && (t.environment = e.environment),
          !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
          !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
          "number" == typeof e.errors && (t.errors = e.errors),
          e.status && (t.status = e.status);
      }
      function Q(t) {
        return t.transaction;
      }
      function Z(t) {
        return "function" == typeof t.getSpanJSON
          ? t.getSpanJSON()
          : "function" == typeof t.toJSON
          ? t.toJSON()
          : {};
      }
      class tt {
        constructor() {
          (this._notifyingListeners = !1),
            (this._scopeListeners = []),
            (this._eventProcessors = []),
            (this._breadcrumbs = []),
            (this._attachments = []),
            (this._user = {}),
            (this._tags = {}),
            (this._extra = {}),
            (this._contexts = {}),
            (this._sdkProcessingMetadata = {}),
            (this._propagationContext = te());
        }
        static clone(t) {
          return t ? t.clone() : new tt();
        }
        clone() {
          let t = new tt();
          return (
            (t._breadcrumbs = [...this._breadcrumbs]),
            (t._tags = { ...this._tags }),
            (t._extra = { ...this._extra }),
            (t._contexts = { ...this._contexts }),
            (t._user = this._user),
            (t._level = this._level),
            (t._span = this._span),
            (t._session = this._session),
            (t._transactionName = this._transactionName),
            (t._fingerprint = this._fingerprint),
            (t._eventProcessors = [...this._eventProcessors]),
            (t._requestSession = this._requestSession),
            (t._attachments = [...this._attachments]),
            (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
            (t._propagationContext = { ...this._propagationContext }),
            (t._client = this._client),
            t
          );
        }
        setClient(t) {
          this._client = t;
        }
        getClient() {
          return this._client;
        }
        addScopeListener(t) {
          this._scopeListeners.push(t);
        }
        addEventProcessor(t) {
          return this._eventProcessors.push(t), this;
        }
        setUser(t) {
          return (
            (this._user = t || {
              email: void 0,
              id: void 0,
              ip_address: void 0,
              segment: void 0,
              username: void 0,
            }),
            this._session && K(this._session, { user: t }),
            this._notifyScopeListeners(),
            this
          );
        }
        getUser() {
          return this._user;
        }
        getRequestSession() {
          return this._requestSession;
        }
        setRequestSession(t) {
          return (this._requestSession = t), this;
        }
        setTags(t) {
          return (
            (this._tags = { ...this._tags, ...t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setTag(t, e) {
          return (
            (this._tags = { ...this._tags, [t]: e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtras(t) {
          return (
            (this._extra = { ...this._extra, ...t }),
            this._notifyScopeListeners(),
            this
          );
        }
        setExtra(t, e) {
          return (
            (this._extra = { ...this._extra, [t]: e }),
            this._notifyScopeListeners(),
            this
          );
        }
        setFingerprint(t) {
          return (this._fingerprint = t), this._notifyScopeListeners(), this;
        }
        setLevel(t) {
          return (this._level = t), this._notifyScopeListeners(), this;
        }
        setTransactionName(t) {
          return (
            (this._transactionName = t), this._notifyScopeListeners(), this
          );
        }
        setContext(t, e) {
          return (
            null === e ? delete this._contexts[t] : (this._contexts[t] = e),
            this._notifyScopeListeners(),
            this
          );
        }
        setSpan(t) {
          return (this._span = t), this._notifyScopeListeners(), this;
        }
        getSpan() {
          return this._span;
        }
        getTransaction() {
          let t = this._span;
          return t && t.transaction;
        }
        setSession(t) {
          return (
            t ? (this._session = t) : delete this._session,
            this._notifyScopeListeners(),
            this
          );
        }
        getSession() {
          return this._session;
        }
        update(t) {
          if (!t) return this;
          let e = "function" == typeof t ? t(this) : t;
          if (e instanceof tt) {
            let t = e.getScopeData();
            (this._tags = { ...this._tags, ...t.tags }),
              (this._extra = { ...this._extra, ...t.extra }),
              (this._contexts = { ...this._contexts, ...t.contexts }),
              t.user && Object.keys(t.user).length && (this._user = t.user),
              t.level && (this._level = t.level),
              t.fingerprint.length && (this._fingerprint = t.fingerprint),
              e.getRequestSession() &&
                (this._requestSession = e.getRequestSession()),
              t.propagationContext &&
                (this._propagationContext = t.propagationContext);
          } else
            _(e) &&
              ((this._tags = { ...this._tags, ...t.tags }),
              (this._extra = { ...this._extra, ...t.extra }),
              (this._contexts = { ...this._contexts, ...t.contexts }),
              t.user && (this._user = t.user),
              t.level && (this._level = t.level),
              t.fingerprint && (this._fingerprint = t.fingerprint),
              t.requestSession && (this._requestSession = t.requestSession),
              t.propagationContext &&
                (this._propagationContext = t.propagationContext));
          return this;
        }
        clear() {
          return (
            (this._breadcrumbs = []),
            (this._tags = {}),
            (this._extra = {}),
            (this._user = {}),
            (this._contexts = {}),
            (this._level = void 0),
            (this._transactionName = void 0),
            (this._fingerprint = void 0),
            (this._requestSession = void 0),
            (this._span = void 0),
            (this._session = void 0),
            this._notifyScopeListeners(),
            (this._attachments = []),
            (this._propagationContext = te()),
            this
          );
        }
        addBreadcrumb(t, e) {
          let n = "number" == typeof e ? e : 100;
          if (n <= 0) return this;
          let r = { timestamp: C(), ...t },
            i = this._breadcrumbs;
          return (
            i.push(r),
            (this._breadcrumbs = i.length > n ? i.slice(-n) : i),
            this._notifyScopeListeners(),
            this
          );
        }
        getLastBreadcrumb() {
          return this._breadcrumbs[this._breadcrumbs.length - 1];
        }
        clearBreadcrumbs() {
          return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
        }
        addAttachment(t) {
          return this._attachments.push(t), this;
        }
        getAttachments() {
          return this.getScopeData().attachments;
        }
        clearAttachments() {
          return (this._attachments = []), this;
        }
        getScopeData() {
          let {
            _breadcrumbs: t,
            _attachments: e,
            _contexts: n,
            _tags: r,
            _extra: i,
            _user: o,
            _level: s,
            _fingerprint: a,
            _eventProcessors: c,
            _propagationContext: u,
            _sdkProcessingMetadata: l,
            _transactionName: p,
            _span: h,
          } = this;
          return {
            breadcrumbs: t,
            attachments: e,
            contexts: n,
            tags: r,
            extra: i,
            user: o,
            level: s,
            fingerprint: a || [],
            eventProcessors: c,
            propagationContext: u,
            sdkProcessingMetadata: l,
            transactionName: p,
            span: h,
          };
        }
        applyToEvent(t, e = {}, n = []) {
          return (
            !(function (t, e) {
              var n;
              let {
                fingerprint: r,
                span: i,
                breadcrumbs: o,
                sdkProcessingMetadata: s,
              } = e;
              (function (t, e) {
                let {
                    extra: n,
                    tags: r,
                    user: i,
                    contexts: o,
                    level: s,
                    transactionName: a,
                  } = e,
                  c = X(n);
                c && Object.keys(c).length && (t.extra = { ...c, ...t.extra });
                let u = X(r);
                u && Object.keys(u).length && (t.tags = { ...u, ...t.tags });
                let l = X(i);
                l && Object.keys(l).length && (t.user = { ...l, ...t.user });
                let p = X(o);
                p &&
                  Object.keys(p).length &&
                  (t.contexts = { ...p, ...t.contexts }),
                  s && (t.level = s),
                  a && (t.transaction = a);
              })(t, e),
                i &&
                  (function (t, e) {
                    t.contexts = {
                      trace: (function (t) {
                        let { spanId: e, traceId: n } = t.spanContext(),
                          {
                            data: r,
                            op: i,
                            parent_span_id: o,
                            status: s,
                            tags: a,
                            origin: c,
                          } = Z(t);
                        return X({
                          data: r,
                          op: i,
                          parent_span_id: o,
                          span_id: e,
                          status: s,
                          tags: a,
                          trace_id: n,
                          origin: c,
                        });
                      })(e),
                      ...t.contexts,
                    };
                    let n = Q(e);
                    if (n) {
                      t.sdkProcessingMetadata = {
                        dynamicSamplingContext: (function (t) {
                          let e = tf();
                          if (!e) return {};
                          let n = (function (t, e, n) {
                              let r = e.getOptions(),
                                { publicKey: i } = e.getDsn() || {},
                                { segment: o } = (n && n.getUser()) || {},
                                s = X({
                                  environment: r.environment || M,
                                  release: r.release,
                                  user_segment: o,
                                  public_key: i,
                                  trace_id: t,
                                });
                              return e.emit && e.emit("createDsc", s), s;
                            })(Z(t).trace_id || "", e, ts().getScope()),
                            r = Q(t);
                          if (!r) return n;
                          let i = r && r._frozenDynamicSamplingContext;
                          if (i) return i;
                          let { sampleRate: o, source: s } = r.metadata;
                          null != o && (n.sample_rate = `${o}`);
                          let a = Z(r);
                          return (
                            s && "url" !== s && (n.transaction = a.description),
                            (n.sampled = String(
                              (function (t) {
                                let { traceFlags: e } = t.spanContext();
                                return !!(1 & e);
                              })(r)
                            )),
                            e.emit && e.emit("createDsc", n),
                            n
                          );
                        })(e),
                        ...t.sdkProcessingMetadata,
                      };
                      let r = Z(n).description;
                      r && (t.tags = { transaction: r, ...t.tags });
                    }
                  })(t, i),
                (t.fingerprint = t.fingerprint
                  ? Array.isArray((n = t.fingerprint))
                    ? n
                    : [n]
                  : []),
                r && (t.fingerprint = t.fingerprint.concat(r)),
                t.fingerprint && !t.fingerprint.length && delete t.fingerprint,
                (function (t, e) {
                  let n = [...(t.breadcrumbs || []), ...e];
                  t.breadcrumbs = n.length ? n : void 0;
                })(t, o),
                (t.sdkProcessingMetadata = {
                  ...t.sdkProcessingMetadata,
                  ...s,
                });
            })(t, this.getScopeData()),
            (function t(e, n, r, i = 0) {
              return new A((o, s) => {
                let a = e[i];
                if (null === n || "function" != typeof a) o(n);
                else {
                  let c = a({ ...n }, r);
                  U &&
                    a.id &&
                    null === c &&
                    L.log(`Event processor "${a.id}" dropped event`),
                    y(c)
                      ? c.then((n) => t(e, n, r, i + 1).then(o)).then(null, s)
                      : t(e, c, r, i + 1)
                          .then(o)
                          .then(null, s);
                }
              });
            })(
              [
                ...n,
                ...x("globalEventProcessors", () => []),
                ...this._eventProcessors,
              ],
              t,
              e
            )
          );
        }
        setSDKProcessingMetadata(t) {
          return (
            (this._sdkProcessingMetadata = {
              ...this._sdkProcessingMetadata,
              ...t,
            }),
            this
          );
        }
        setPropagationContext(t) {
          return (this._propagationContext = t), this;
        }
        getPropagationContext() {
          return this._propagationContext;
        }
        captureException(t, e) {
          let n = e && e.event_id ? e.event_id : w();
          if (!this._client)
            return (
              L.warn(
                "No client configured on scope - will not capture exception!"
              ),
              n
            );
          let r = Error("Sentry syntheticException");
          return (
            this._client.captureException(
              t,
              {
                originalException: t,
                syntheticException: r,
                ...e,
                event_id: n,
              },
              this
            ),
            n
          );
        }
        captureMessage(t, e, n) {
          let r = n && n.event_id ? n.event_id : w();
          if (!this._client)
            return (
              L.warn(
                "No client configured on scope - will not capture message!"
              ),
              r
            );
          let i = Error(t);
          return (
            this._client.captureMessage(
              t,
              e,
              {
                originalException: t,
                syntheticException: i,
                ...n,
                event_id: r,
              },
              this
            ),
            r
          );
        }
        captureEvent(t, e) {
          let n = e && e.event_id ? e.event_id : w();
          return (
            this._client
              ? this._client.captureEvent(t, { ...e, event_id: n }, this)
              : L.warn(
                  "No client configured on scope - will not capture event!"
                ),
            n
          );
        }
        _notifyScopeListeners() {
          this._notifyingListeners ||
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach((t) => {
              t(this);
            }),
            (this._notifyingListeners = !1));
        }
      }
      function te() {
        return { traceId: w(), spanId: w().substring(16) };
      }
      let tn = parseFloat("7.106.0");
      class tr {
        constructor(t, e, n, r = tn) {
          let i, o;
          (this._version = r),
            e ? (i = e) : (i = new tt()).setClient(t),
            n ? (o = n) : (o = new tt()).setClient(t),
            (this._stack = [{ scope: i }]),
            t && this.bindClient(t),
            (this._isolationScope = o);
        }
        isOlderThan(t) {
          return this._version < t;
        }
        bindClient(t) {
          let e = this.getStackTop();
          (e.client = t),
            e.scope.setClient(t),
            t && t.setupIntegrations && t.setupIntegrations();
        }
        pushScope() {
          let t = this.getScope().clone();
          return (
            this.getStack().push({ client: this.getClient(), scope: t }), t
          );
        }
        popScope() {
          return !(this.getStack().length <= 1) && !!this.getStack().pop();
        }
        withScope(t) {
          let e;
          let n = this.pushScope();
          try {
            e = t(n);
          } catch (t) {
            throw (this.popScope(), t);
          }
          return y(e)
            ? e.then(
                (t) => (this.popScope(), t),
                (t) => {
                  throw (this.popScope(), t);
                }
              )
            : (this.popScope(), e);
        }
        getClient() {
          return this.getStackTop().client;
        }
        getScope() {
          return this.getStackTop().scope;
        }
        getIsolationScope() {
          return this._isolationScope;
        }
        getStack() {
          return this._stack;
        }
        getStackTop() {
          return this._stack[this._stack.length - 1];
        }
        captureException(t, e) {
          let n = (this._lastEventId = e && e.event_id ? e.event_id : w()),
            r = Error("Sentry syntheticException");
          return (
            this.getScope().captureException(t, {
              originalException: t,
              syntheticException: r,
              ...e,
              event_id: n,
            }),
            n
          );
        }
        captureMessage(t, e, n) {
          let r = (this._lastEventId = n && n.event_id ? n.event_id : w()),
            i = Error(t);
          return (
            this.getScope().captureMessage(t, e, {
              originalException: t,
              syntheticException: i,
              ...n,
              event_id: r,
            }),
            r
          );
        }
        captureEvent(t, e) {
          let n = e && e.event_id ? e.event_id : w();
          return (
            t.type || (this._lastEventId = n),
            this.getScope().captureEvent(t, { ...e, event_id: n }),
            n
          );
        }
        lastEventId() {
          return this._lastEventId;
        }
        addBreadcrumb(t, e) {
          let { scope: n, client: r } = this.getStackTop();
          if (!r) return;
          let { beforeBreadcrumb: i = null, maxBreadcrumbs: o = 100 } =
            (r.getOptions && r.getOptions()) || {};
          if (o <= 0) return;
          let s = { timestamp: C(), ...t },
            a = i ? j(() => i(s, e)) : s;
          null !== a &&
            (r.emit && r.emit("beforeAddBreadcrumb", a, e),
            n.addBreadcrumb(a, o));
        }
        setUser(t) {
          this.getScope().setUser(t), this.getIsolationScope().setUser(t);
        }
        setTags(t) {
          this.getScope().setTags(t), this.getIsolationScope().setTags(t);
        }
        setExtras(t) {
          this.getScope().setExtras(t), this.getIsolationScope().setExtras(t);
        }
        setTag(t, e) {
          this.getScope().setTag(t, e), this.getIsolationScope().setTag(t, e);
        }
        setExtra(t, e) {
          this.getScope().setExtra(t, e),
            this.getIsolationScope().setExtra(t, e);
        }
        setContext(t, e) {
          this.getScope().setContext(t, e),
            this.getIsolationScope().setContext(t, e);
        }
        configureScope(t) {
          let { scope: e, client: n } = this.getStackTop();
          n && t(e);
        }
        run(t) {
          let e = to(this);
          try {
            t(this);
          } finally {
            to(e);
          }
        }
        getIntegration(t) {
          let e = this.getClient();
          if (!e) return null;
          try {
            return e.getIntegration(t);
          } catch (e) {
            return (
              U &&
                L.warn(
                  `Cannot retrieve integration ${t.id} from the current Hub`
                ),
              null
            );
          }
        }
        startTransaction(t, e) {
          let n = this._callExtensionMethod("startTransaction", t, e);
          return (
            U &&
              !n &&
              (this.getClient()
                ? L.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`)
                : L.warn(
                    "Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'"
                  )),
            n
          );
        }
        traceHeaders() {
          return this._callExtensionMethod("traceHeaders");
        }
        captureSession(t = !1) {
          if (t) return this.endSession();
          this._sendSessionUpdate();
        }
        endSession() {
          let t = this.getStackTop().scope,
            e = t.getSession();
          if (e) {
            var n;
            let t;
            (t = {}),
              n
                ? (t = { status: n })
                : "ok" === e.status && (t = { status: "exited" }),
              K(e, t);
          }
          this._sendSessionUpdate(), t.setSession();
        }
        startSession(t) {
          let { scope: e, client: n } = this.getStackTop(),
            { release: r, environment: i = M } = (n && n.getOptions()) || {},
            { userAgent: o } = b.navigator || {},
            s = (function (t) {
              let e = O(),
                n = {
                  sid: w(),
                  init: !0,
                  timestamp: e,
                  started: e,
                  duration: 0,
                  status: "ok",
                  errors: 0,
                  ignoreDuration: !1,
                  toJSON: () =>
                    X({
                      sid: `${n.sid}`,
                      init: n.init,
                      started: new Date(1e3 * n.started).toISOString(),
                      timestamp: new Date(1e3 * n.timestamp).toISOString(),
                      status: n.status,
                      errors: n.errors,
                      did:
                        "number" == typeof n.did || "string" == typeof n.did
                          ? `${n.did}`
                          : void 0,
                      duration: n.duration,
                      abnormal_mechanism: n.abnormal_mechanism,
                      attrs: {
                        release: n.release,
                        environment: n.environment,
                        ip_address: n.ipAddress,
                        user_agent: n.userAgent,
                      },
                    }),
                };
              return t && K(n, t), n;
            })({
              release: r,
              environment: i,
              user: e.getUser(),
              ...(o && { userAgent: o }),
              ...t,
            }),
            a = e.getSession && e.getSession();
          return (
            a && "ok" === a.status && K(a, { status: "exited" }),
            this.endSession(),
            e.setSession(s),
            s
          );
        }
        shouldSendDefaultPii() {
          let t = this.getClient(),
            e = t && t.getOptions();
          return !!(e && e.sendDefaultPii);
        }
        _sendSessionUpdate() {
          let { scope: t, client: e } = this.getStackTop(),
            n = t.getSession();
          n && e && e.captureSession && e.captureSession(n);
        }
        _callExtensionMethod(t, ...e) {
          let n = ti().__SENTRY__;
          if (n && n.extensions && "function" == typeof n.extensions[t])
            return n.extensions[t].apply(this, e);
          U &&
            L.warn(`Extension method ${t} couldn't be found, doing nothing.`);
        }
      }
      function ti() {
        return (
          (b.__SENTRY__ = b.__SENTRY__ || { extensions: {}, hub: void 0 }), b
        );
      }
      function to(t) {
        let e = ti(),
          n = ta(e);
        return tc(e, t), n;
      }
      function ts() {
        let t = ti();
        if (t.__SENTRY__ && t.__SENTRY__.acs) {
          let e = t.__SENTRY__.acs.getCurrentHub();
          if (e) return e;
        }
        return (function (t = ti()) {
          return (
            (!(t && t.__SENTRY__ && t.__SENTRY__.hub) ||
              ta(t).isOlderThan(tn)) &&
              tc(t, new tr()),
            ta(t)
          );
        })(t);
      }
      function ta(t) {
        return x("hub", () => new tr(), t);
      }
      function tc(t, e) {
        return !!t && (((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e), !0);
      }
      new WeakMap();
      let tu = [
        "user",
        "level",
        "extra",
        "contexts",
        "tags",
        "fingerprint",
        "requestSession",
        "propagationContext",
      ];
      function tl(t, e) {
        return ts().captureException(
          t,
          e
            ? e instanceof tt ||
              "function" == typeof e ||
              Object.keys(e).some((t) => tu.includes(t))
              ? { captureContext: e }
              : e
            : void 0
        );
      }
      function tp(t, e) {
        return ts().captureEvent(t, e);
      }
      function th(t, e) {
        ts().addBreadcrumb(t, e);
      }
      function td(...t) {
        let e = ts();
        if (2 === t.length) {
          let [n, r] = t;
          return n
            ? e.withScope(() => ((e.getStackTop().scope = n), r(n)))
            : e.withScope(r);
        }
        return e.withScope(t[0]);
      }
      function tf() {
        return ts().getClient();
      }
      function tg(t, e) {
        return Object.assign(
          function (...t) {
            return e(...t);
          },
          { id: t }
        );
      }
      let t_ = [
          /^Script error\.?$/,
          /^Javascript error: Script error\.? on line 0$/,
        ],
        tm = [
          /^.*\/healthcheck$/,
          /^.*\/healthy$/,
          /^.*\/live$/,
          /^.*\/ready$/,
          /^.*\/heartbeat$/,
          /^.*\/health$/,
          /^.*\/healthz$/,
        ],
        ty = "InboundFilters",
        tv = (t = {}) => ({
          name: ty,
          setupOnce() {},
          processEvent: (e, n, r) => {
            var i, o;
            return (
              (i = (function (t = {}, e = {}) {
                return {
                  allowUrls: [...(t.allowUrls || []), ...(e.allowUrls || [])],
                  denyUrls: [...(t.denyUrls || []), ...(e.denyUrls || [])],
                  ignoreErrors: [
                    ...(t.ignoreErrors || []),
                    ...(e.ignoreErrors || []),
                    ...(t.disableErrorDefaults ? [] : t_),
                  ],
                  ignoreTransactions: [
                    ...(t.ignoreTransactions || []),
                    ...(e.ignoreTransactions || []),
                    ...(t.disableTransactionDefaults ? [] : tm),
                  ],
                  ignoreInternal:
                    void 0 === t.ignoreInternal || t.ignoreInternal,
                };
              })(t, r.getOptions())).ignoreInternal &&
              (function (t) {
                try {
                  return "SentryError" === t.exception.values[0].type;
                } catch (t) {}
                return !1;
              })(e)
                ? (U &&
                    L.warn(`Event dropped due to being internal Sentry Error.
Event: ${k(e)}`),
                  0)
                : ((o = i.ignoreErrors),
                  !e.type &&
                    o &&
                    o.length &&
                    (function (t) {
                      let e;
                      let n = [];
                      t.message && n.push(t.message);
                      try {
                        e = t.exception.values[t.exception.values.length - 1];
                      } catch (t) {}
                      return (
                        e &&
                          e.value &&
                          (n.push(e.value),
                          e.type && n.push(`${e.type}: ${e.value}`)),
                        U &&
                          0 === n.length &&
                          L.error(
                            `Could not extract message for event ${k(t)}`
                          ),
                        n
                      );
                    })(e).some((t) => Y(t, o)))
                ? (U &&
                    L.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${k(e)}`),
                  0)
                : !(function (t, e) {
                    if ("transaction" !== t.type || !e || !e.length) return !1;
                    let n = t.transaction;
                    return !!n && Y(n, e);
                  })(e, i.ignoreTransactions)
                ? !(function (t, e) {
                    if (!e || !e.length) return !1;
                    let n = tE(t);
                    return !!n && Y(n, e);
                  })(e, i.denyUrls)
                  ? (function (t, e) {
                      if (!e || !e.length) return !0;
                      let n = tE(t);
                      return !n || Y(n, e);
                    })(e, i.allowUrls) ||
                    (U &&
                      L.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${k(e)}.
Url: ${tE(e)}`),
                    0)
                  : (U &&
                      L.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${k(e)}.
Url: ${tE(e)}`),
                    0)
                : (U &&
                    L.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${k(e)}`),
                  0)
            )
              ? e
              : null;
          },
        });
      function tE(t) {
        try {
          let e;
          try {
            e = t.exception.values[0].stacktrace.frames;
          } catch (t) {}
          return e
            ? (function (t = []) {
                for (let e = t.length - 1; e >= 0; e--) {
                  let n = t[e];
                  if (
                    n &&
                    "<anonymous>" !== n.filename &&
                    "[native code]" !== n.filename
                  )
                    return n.filename || null;
                }
                return null;
              })(e)
            : null;
        } catch (e) {
          return U && L.error(`Cannot extract url for event ${k(t)}`), null;
        }
      }
      tg(ty, tv);
      let tS = "FunctionToString",
        tb = new WeakMap(),
        tx = () => ({
          name: tS,
          setupOnce() {
            r = Function.prototype.toString;
            try {
              Function.prototype.toString = function (...t) {
                let e = F(this),
                  n = tb.has(tf()) && void 0 !== e ? e : this;
                return r.apply(n, t);
              };
            } catch (t) {}
          },
          setup(t) {
            tb.set(t, !0);
          },
        });
      tg(tS, tx);
      let tw =
        /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
      function tT(t) {
        return {
          protocol: t.protocol,
          publicKey: t.publicKey || "",
          pass: t.pass || "",
          host: t.host,
          port: t.port || "",
          path: t.path || "",
          projectId: t.projectId,
        };
      }
      let tk = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        t$ = 0;
      function tD(t, e = {}, n) {
        if ("function" != typeof t) return t;
        try {
          let e = t.__sentry_wrapped__;
          if (e) return e;
          if (F(t)) return t;
        } catch (e) {
          return t;
        }
        let r = function () {
          let r = Array.prototype.slice.call(arguments);
          try {
            n && "function" == typeof n && n.apply(this, arguments);
            let i = r.map((t) => tD(t, e));
            return t.apply(this, i);
          } catch (t) {
            throw (
              (t$++,
              setTimeout(() => {
                t$--;
              }),
              td((n) => {
                n.addEventProcessor(
                  (t) => (
                    e.mechanism && ($(t, void 0, void 0), D(t, e.mechanism)),
                    (t.extra = { ...t.extra, arguments: r }),
                    t
                  )
                ),
                  tl(t);
              }),
              t)
            );
          }
        };
        try {
          for (let e in t)
            Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
        } catch (t) {}
        W(r, t), G(t, "__sentry_wrapped__", r);
        try {
          Object.getOwnPropertyDescriptor(r, "name").configurable &&
            Object.defineProperty(r, "name", { get: () => t.name });
        } catch (t) {}
        return r;
      }
      let tC = "<anonymous>";
      function tO(t) {
        try {
          if (!t || "function" != typeof t) return tC;
          return t.name || tC;
        } catch (t) {
          return tC;
        }
      }
      let tI = {},
        tR = {};
      function tN(t, e) {
        (tI[t] = tI[t] || []), tI[t].push(e);
      }
      function tj(t, e) {
        tR[t] || (e(), (tR[t] = !0));
      }
      function tL(t, e) {
        let n = t && tI[t];
        if (n)
          for (let r of n)
            try {
              r(e);
            } catch (e) {
              I &&
                L.error(
                  `Error while triggering instrumentation handler.
Type: ${t}
Name: ${tO(r)}
Error:`,
                  e
                );
            }
      }
      function tM() {
        "console" in b &&
          R.forEach(function (t) {
            t in b.console &&
              B(b.console, t, function (e) {
                return (
                  (N[t] = e),
                  function (...e) {
                    tL("console", { args: e, level: t });
                    let n = N[t];
                    n && n.apply(b.console, e);
                  }
                );
              });
          });
      }
      function tU() {
        if (!b.document) return;
        let t = tL.bind(null, "dom"),
          e = tA(t, !0);
        b.document.addEventListener("click", e, !1),
          b.document.addEventListener("keypress", e, !1),
          ["EventTarget", "Node"].forEach((e) => {
            let n = b[e] && b[e].prototype;
            n &&
              n.hasOwnProperty &&
              n.hasOwnProperty("addEventListener") &&
              (B(n, "addEventListener", function (e) {
                return function (n, r, i) {
                  if ("click" === n || "keypress" == n)
                    try {
                      let r = (this.__sentry_instrumentation_handlers__ =
                          this.__sentry_instrumentation_handlers__ || {}),
                        o = (r[n] = r[n] || { refCount: 0 });
                      if (!o.handler) {
                        let r = tA(t);
                        (o.handler = r), e.call(this, n, r, i);
                      }
                      o.refCount++;
                    } catch (t) {}
                  return e.call(this, n, r, i);
                };
              }),
              B(n, "removeEventListener", function (t) {
                return function (e, n, r) {
                  if ("click" === e || "keypress" == e)
                    try {
                      let n = this.__sentry_instrumentation_handlers__ || {},
                        i = n[e];
                      i &&
                        (i.refCount--,
                        i.refCount <= 0 &&
                          (t.call(this, e, i.handler, r),
                          (i.handler = void 0),
                          delete n[e]),
                        0 === Object.keys(n).length &&
                          delete this.__sentry_instrumentation_handlers__);
                    } catch (t) {}
                  return t.call(this, e, n, r);
                };
              }));
          });
      }
      function tA(t, e = !1) {
        return (n) => {
          if (!n || n._sentryCaptured) return;
          let r = (function (t) {
            try {
              return t.target;
            } catch (t) {
              return null;
            }
          })(n);
          if (
            "keypress" === n.type &&
            (!r ||
              !r.tagName ||
              ("INPUT" !== r.tagName &&
                "TEXTAREA" !== r.tagName &&
                !r.isContentEditable))
          )
            return;
          G(n, "_sentryCaptured", !0),
            r && !r._sentryId && G(r, "_sentryId", w());
          let a = "keypress" === n.type ? "input" : n.type;
          !(function (t) {
            if (t.type !== o) return !1;
            try {
              if (!t.target || t.target._sentryId !== s) return !1;
            } catch (t) {}
            return !0;
          })(n) &&
            (t({ event: n, name: a, global: e }),
            (o = n.type),
            (s = r ? r._sentryId : void 0)),
            clearTimeout(i),
            (i = b.setTimeout(() => {
              (s = void 0), (o = void 0);
            }, 1e3));
        };
      }
      let tP = "__sentry_xhr_v3__";
      function tq() {
        if (!b.XMLHttpRequest) return;
        let t = XMLHttpRequest.prototype;
        B(t, "open", function (t) {
          return function (...e) {
            let n = Date.now(),
              r = d(e[0]) ? e[0].toUpperCase() : void 0,
              i = (function (t) {
                if (d(t)) return t;
                try {
                  return t.toString();
                } catch (t) {}
              })(e[1]);
            if (!r || !i) return t.apply(this, e);
            (this[tP] = { method: r, url: i, request_headers: {} }),
              "POST" === r &&
                i.match(/sentry_key/) &&
                (this.__sentry_own_request__ = !0);
            let o = () => {
              let t = this[tP];
              if (t && 4 === this.readyState) {
                try {
                  t.status_code = this.status;
                } catch (t) {}
                tL("xhr", {
                  args: [r, i],
                  endTimestamp: Date.now(),
                  startTimestamp: n,
                  xhr: this,
                });
              }
            };
            return (
              "onreadystatechange" in this &&
              "function" == typeof this.onreadystatechange
                ? B(this, "onreadystatechange", function (t) {
                    return function (...e) {
                      return o(), t.apply(this, e);
                    };
                  })
                : this.addEventListener("readystatechange", o),
              B(this, "setRequestHeader", function (t) {
                return function (...e) {
                  let [n, r] = e,
                    i = this[tP];
                  return (
                    i &&
                      d(n) &&
                      d(r) &&
                      (i.request_headers[n.toLowerCase()] = r),
                    t.apply(this, e)
                  );
                };
              }),
              t.apply(this, e)
            );
          };
        }),
          B(t, "send", function (t) {
            return function (...e) {
              let n = this[tP];
              return (
                n &&
                  (void 0 !== e[0] && (n.body = e[0]),
                  tL("xhr", {
                    args: [n.method, n.url],
                    startTimestamp: Date.now(),
                    xhr: this,
                  })),
                t.apply(this, e)
              );
            };
          });
      }
      function tH(t) {
        return (
          t &&
          /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
        );
      }
      function tY() {
        (function () {
          if ("string" == typeof EdgeRuntime) return !0;
          if (
            !(function () {
              if (!("fetch" in b)) return !1;
              try {
                return (
                  new Headers(),
                  new Request("http://www.example.com"),
                  new Response(),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()
          )
            return !1;
          if (tH(b.fetch)) return !0;
          let t = !1,
            e = b.document;
          if (e && "function" == typeof e.createElement)
            try {
              let n = e.createElement("iframe");
              (n.hidden = !0),
                e.head.appendChild(n),
                n.contentWindow &&
                  n.contentWindow.fetch &&
                  (t = tH(n.contentWindow.fetch)),
                e.head.removeChild(n);
            } catch (t) {
              I &&
                L.warn(
                  "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                  t
                );
            }
          return t;
        })() &&
          B(b, "fetch", function (t) {
            return function (...e) {
              let { method: n, url: r } = (function (t) {
                  if (0 === t.length) return { method: "GET", url: "" };
                  if (2 === t.length) {
                    let [e, n] = t;
                    return {
                      url: tG(e),
                      method: tB(n, "method")
                        ? String(n.method).toUpperCase()
                        : "GET",
                    };
                  }
                  let e = t[0];
                  return {
                    url: tG(e),
                    method: tB(e, "method")
                      ? String(e.method).toUpperCase()
                      : "GET",
                  };
                })(e),
                i = {
                  args: e,
                  fetchData: { method: n, url: r },
                  startTimestamp: Date.now(),
                };
              return (
                tL("fetch", { ...i }),
                t.apply(b, e).then(
                  (t) => (
                    tL("fetch", {
                      ...i,
                      endTimestamp: Date.now(),
                      response: t,
                    }),
                    t
                  ),
                  (t) => {
                    throw (
                      (tL("fetch", {
                        ...i,
                        endTimestamp: Date.now(),
                        error: t,
                      }),
                      t)
                    );
                  }
                )
              );
            };
          });
      }
      function tB(t, e) {
        return !!t && "object" == typeof t && !!t[e];
      }
      function tG(t) {
        return "string" == typeof t
          ? t
          : t
          ? tB(t, "url")
            ? t.url
            : t.toString
            ? t.toString()
            : ""
          : "";
      }
      function tW() {
        if (
          !(function () {
            let t = b.chrome,
              e = t && t.app && t.app.runtime,
              n =
                "history" in b &&
                !!b.history.pushState &&
                !!b.history.replaceState;
            return !e && n;
          })()
        )
          return;
        let t = b.onpopstate;
        function e(t) {
          return function (...e) {
            let n = e.length > 2 ? e[2] : void 0;
            if (n) {
              let t = a,
                e = String(n);
              (a = e), tL("history", { from: t, to: e });
            }
            return t.apply(this, e);
          };
        }
        (b.onpopstate = function (...e) {
          let n = b.location.href,
            r = a;
          if (((a = n), tL("history", { from: r, to: n }), t))
            try {
              return t.apply(this, e);
            } catch (t) {}
        }),
          B(b.history, "pushState", e),
          B(b.history, "replaceState", e);
      }
      let tF = ["fatal", "error", "warning", "log", "info", "debug"];
      function tV(t) {
        if (!t) return {};
        let e = t.match(
          /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
        );
        if (!e) return {};
        let n = e[6] || "",
          r = e[8] || "";
        return {
          host: e[4],
          path: e[5],
          protocol: e[2],
          search: n,
          hash: r,
          relative: e[5] + n + r,
        };
      }
      let tJ = "Breadcrumbs",
        tz = (t = {}) => {
          let e = {
            console: !0,
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0,
            ...t,
          };
          return {
            name: tJ,
            setupOnce() {},
            setup(t) {
              var n;
              e.console &&
                (function (t) {
                  let e = "console";
                  tN(e, t), tj(e, tM);
                })(function (e) {
                  var n;
                  if (tf() !== t) return;
                  let r = {
                    category: "console",
                    data: { arguments: e.args, logger: "console" },
                    level:
                      "warn" === (n = e.level)
                        ? "warning"
                        : tF.includes(n)
                        ? n
                        : "log",
                    message: H(e.args, " "),
                  };
                  if ("assert" === e.level) {
                    if (!1 !== e.args[0]) return;
                    (r.message = `Assertion failed: ${
                      H(e.args.slice(1), " ") || "console.assert"
                    }`),
                      (r.data.arguments = e.args.slice(1));
                  }
                  th(r, { input: e.args, level: e.level });
                }),
                e.dom &&
                  (tN(
                    "dom",
                    ((n = e.dom),
                    function (e) {
                      let r, i;
                      if (tf() !== t) return;
                      let o =
                          "object" == typeof n ? n.serializeAttribute : void 0,
                        s =
                          "object" == typeof n &&
                          "number" == typeof n.maxStringLength
                            ? n.maxStringLength
                            : void 0;
                      s &&
                        s > 1024 &&
                        (tk &&
                          L.warn(
                            `\`dom.maxStringLength\` cannot exceed 1024, but a value of ${s} was configured. Sentry will use 1024 instead.`
                          ),
                        (s = 1024)),
                        "string" == typeof o && (o = [o]);
                      try {
                        let t = e.event,
                          n = t && t.target ? t.target : t;
                        (r = P(n, { keyAttrs: o, maxStringLength: s })),
                          (i = (function (t) {
                            if (!b.HTMLElement) return null;
                            let e = t;
                            for (let t = 0; t < 5 && e; t++) {
                              if (
                                e instanceof HTMLElement &&
                                e.dataset.sentryComponent
                              )
                                return e.dataset.sentryComponent;
                              e = e.parentNode;
                            }
                            return null;
                          })(n));
                      } catch (t) {
                        r = "<unknown>";
                      }
                      if (0 === r.length) return;
                      let a = { category: `ui.${e.name}`, message: r };
                      i && (a.data = { "ui.component_name": i }),
                        th(a, {
                          event: e.event,
                          name: e.name,
                          global: e.global,
                        });
                    })
                  ),
                  tj("dom", tU)),
                e.xhr &&
                  (tN("xhr", function (e) {
                    if (tf() !== t) return;
                    let { startTimestamp: n, endTimestamp: r } = e,
                      i = e.xhr[tP];
                    if (!n || !r || !i) return;
                    let { method: o, url: s, status_code: a, body: c } = i;
                    th(
                      {
                        category: "xhr",
                        data: { method: o, url: s, status_code: a },
                        type: "http",
                      },
                      {
                        xhr: e.xhr,
                        input: c,
                        startTimestamp: n,
                        endTimestamp: r,
                      }
                    );
                  }),
                  tj("xhr", tq)),
                e.fetch &&
                  (function (t) {
                    let e = "fetch";
                    tN(e, t), tj(e, tY);
                  })(function (e) {
                    if (tf() !== t) return;
                    let { startTimestamp: n, endTimestamp: r } = e;
                    if (
                      !(
                        !r ||
                        (e.fetchData.url.match(/sentry_key/) &&
                          "POST" === e.fetchData.method)
                      )
                    ) {
                      if (e.error)
                        th(
                          {
                            category: "fetch",
                            data: e.fetchData,
                            level: "error",
                            type: "http",
                          },
                          {
                            data: e.error,
                            input: e.args,
                            startTimestamp: n,
                            endTimestamp: r,
                          }
                        );
                      else {
                        let t = e.response;
                        th(
                          {
                            category: "fetch",
                            data: {
                              ...e.fetchData,
                              status_code: t && t.status,
                            },
                            type: "http",
                          },
                          {
                            input: e.args,
                            response: t,
                            startTimestamp: n,
                            endTimestamp: r,
                          }
                        );
                      }
                    }
                  }),
                e.history &&
                  (function (t) {
                    let e = "history";
                    tN(e, t), tj(e, tW);
                  })(function (e) {
                    if (tf() !== t) return;
                    let n = e.from,
                      r = e.to,
                      i = tV(b.location.href),
                      o = n ? tV(n) : void 0,
                      s = tV(r);
                    (o && o.path) || (o = i),
                      i.protocol === s.protocol &&
                        i.host === s.host &&
                        (r = s.relative),
                      i.protocol === o.protocol &&
                        i.host === o.host &&
                        (n = o.relative),
                      th({ category: "navigation", data: { from: n, to: r } });
                  }),
                e.sentry &&
                  t.on &&
                  t.on("beforeSendEvent", function (e) {
                    tf() === t &&
                      th(
                        {
                          category: `sentry.${
                            "transaction" === e.type ? "transaction" : "event"
                          }`,
                          event_id: e.event_id,
                          level: e.level,
                          message: k(e),
                        },
                        { event: e }
                      );
                  });
            },
          };
        };
      tg(tJ, tz);
      let tX = "Dedupe",
        tK = () => {
          let t;
          return {
            name: tX,
            setupOnce() {},
            processEvent(e) {
              if (e.type) return e;
              try {
                var n;
                if (
                  (n = t) &&
                  ((function (t, e) {
                    let n = t.message,
                      r = e.message;
                    return !!(
                      (n || r) &&
                      (!n || r) &&
                      (n || !r) &&
                      n === r &&
                      tZ(t, e) &&
                      tQ(t, e)
                    );
                  })(e, n) ||
                    (function (t, e) {
                      let n = t0(e),
                        r = t0(t);
                      return !!(
                        n &&
                        r &&
                        n.type === r.type &&
                        n.value === r.value &&
                        tZ(t, e) &&
                        tQ(t, e)
                      );
                    })(e, n))
                )
                  return (
                    tk &&
                      L.warn(
                        "Event dropped due to being a duplicate of previously captured event."
                      ),
                    null
                  );
              } catch (t) {}
              return (t = e);
            },
          };
        };
      function tQ(t, e) {
        let n = t1(t),
          r = t1(e);
        if (!n && !r) return !0;
        if ((n && !r) || (!n && r) || r.length !== n.length) return !1;
        for (let t = 0; t < r.length; t++) {
          let e = r[t],
            i = n[t];
          if (
            e.filename !== i.filename ||
            e.lineno !== i.lineno ||
            e.colno !== i.colno ||
            e.function !== i.function
          )
            return !1;
        }
        return !0;
      }
      function tZ(t, e) {
        let n = t.fingerprint,
          r = e.fingerprint;
        if (!n && !r) return !0;
        if ((n && !r) || (!n && r)) return !1;
        try {
          return !(n.join("") !== r.join(""));
        } catch (t) {
          return !1;
        }
      }
      function t0(t) {
        return t.exception && t.exception.values && t.exception.values[0];
      }
      function t1(t) {
        let e = t.exception;
        if (e)
          try {
            return e.values[0].stacktrace.frames;
          } catch (t) {}
      }
      tg(tX, tK);
      let t2 = null;
      function t5() {
        (t2 = b.onerror),
          (b.onerror = function (t, e, n, r, i) {
            return (
              tL("error", { column: r, error: i, line: n, msg: t, url: e }),
              !!t2 && !t2.__SENTRY_LOADER__ && t2.apply(this, arguments)
            );
          }),
          (b.onerror.__SENTRY_INSTRUMENTED__ = !0);
      }
      let t3 = null;
      function t4() {
        (t3 = b.onunhandledrejection),
          (b.onunhandledrejection = function (t) {
            return (
              tL("unhandledrejection", t),
              !t3 || !!t3.__SENTRY_LOADER__ || t3.apply(this, arguments)
            );
          }),
          (b.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
      }
      function t6(t, e) {
        let n = t7(t, e),
          r = {
            type: e && e.name,
            value: (function (t) {
              let e = t && t.message;
              return e
                ? e.error && "string" == typeof e.error.message
                  ? e.error.message
                  : e
                : "No error message";
            })(e),
          };
        return (
          n.length && (r.stacktrace = { frames: n }),
          void 0 === r.type &&
            "" === r.value &&
            (r.value = "Unrecoverable error caught"),
          r
        );
      }
      function t8(t, e) {
        return { exception: { values: [t6(t, e)] } };
      }
      function t7(t, e) {
        let n = e.stacktrace || e.stack || "",
          r = (function (t) {
            if (t) {
              if ("number" == typeof t.framesToPop) return t.framesToPop;
              if (t9.test(t.message)) return 1;
            }
            return 0;
          })(e);
        try {
          return t(n, r);
        } catch (t) {}
        return [];
      }
      let t9 = /Minified React error #\d+;/i;
      function et(t, e, r, i, o) {
        let s;
        if (p(e) && e.error) return t8(t, e.error);
        if (h(e) || l(e, "DOMException")) {
          if ("stack" in e) s = t8(t, e);
          else {
            let n = e.name || (h(e) ? "DOMError" : "DOMException"),
              o = e.message ? `${n}: ${e.message}` : n;
            $((s = ee(t, o, r, i)), o);
          }
          return (
            "code" in e &&
              (s.tags = { ...s.tags, "DOMException.code": `${e.code}` }),
            s
          );
        }
        return u(e)
          ? t8(t, e)
          : (_(e) || m(e)
              ? D(
                  (s = (function (t, e, r, i) {
                    let o = tf(),
                      s = o && o.getOptions().normalizeDepth,
                      a = {
                        exception: {
                          values: [
                            {
                              type: m(e)
                                ? e.constructor.name
                                : i
                                ? "UnhandledRejection"
                                : "Error",
                              value: (function (
                                t,
                                { isUnhandledRejection: e }
                              ) {
                                let n = (function (t, e = 40) {
                                    let n = Object.keys(V(t));
                                    if ((n.sort(), !n.length))
                                      return "[object has no keys]";
                                    if (n[0].length >= e) return q(n[0], e);
                                    for (let t = n.length; t > 0; t--) {
                                      let r = n.slice(0, t).join(", ");
                                      if (!(r.length > e)) {
                                        if (t === n.length) return r;
                                        return q(r, e);
                                      }
                                    }
                                    return "";
                                  })(t),
                                  r = e ? "promise rejection" : "exception";
                                if (p(t))
                                  return `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``;
                                if (m(t)) {
                                  let e = (function (t) {
                                    try {
                                      let e = Object.getPrototypeOf(t);
                                      return e ? e.constructor.name : void 0;
                                    } catch (t) {}
                                  })(t);
                                  return `Event \`${e}\` (type=${t.type}) captured as ${r}`;
                                }
                                return `Object captured as ${r} with keys: ${n}`;
                              })(e, { isUnhandledRejection: i }),
                            },
                          ],
                        },
                        extra: {
                          __serialized__: (function t(e, r = 3, i = 102400) {
                            let o = (function (t, e = 100, r = Infinity) {
                              try {
                                return (function t(
                                  e,
                                  r,
                                  i = Infinity,
                                  o = Infinity,
                                  s = (function () {
                                    let t = "function" == typeof WeakSet,
                                      e = t ? new WeakSet() : [];
                                    return [
                                      function (n) {
                                        if (t)
                                          return !!e.has(n) || (e.add(n), !1);
                                        for (let t = 0; t < e.length; t++)
                                          if (e[t] === n) return !0;
                                        return e.push(n), !1;
                                      },
                                      function (n) {
                                        if (t) e.delete(n);
                                        else
                                          for (let t = 0; t < e.length; t++)
                                            if (e[t] === n) {
                                              e.splice(t, 1);
                                              break;
                                            }
                                      },
                                    ];
                                  })()
                                ) {
                                  let [a, c] = s;
                                  if (
                                    null == r ||
                                    (["number", "boolean", "string"].includes(
                                      typeof r
                                    ) &&
                                      !("number" == typeof r && r != r))
                                  )
                                    return r;
                                  let u = (function (t, e) {
                                    try {
                                      if (
                                        "domain" === t &&
                                        e &&
                                        "object" == typeof e &&
                                        e._events
                                      )
                                        return "[Domain]";
                                      if ("domainEmitter" === t)
                                        return "[DomainEmitter]";
                                      if (void 0 !== n.g && e === n.g)
                                        return "[Global]";
                                      if (
                                        "undefined" != typeof window &&
                                        e === window
                                      )
                                        return "[Window]";
                                      if (
                                        "undefined" != typeof document &&
                                        e === document
                                      )
                                        return "[Document]";
                                      if (E(e)) return "[VueViewModel]";
                                      if (
                                        _(e) &&
                                        "nativeEvent" in e &&
                                        "preventDefault" in e &&
                                        "stopPropagation" in e
                                      )
                                        return "[SyntheticEvent]";
                                      if ("number" == typeof e && e != e)
                                        return "[NaN]";
                                      if ("function" == typeof e)
                                        return `[Function: ${tO(e)}]`;
                                      if ("symbol" == typeof e)
                                        return `[${String(e)}]`;
                                      if ("bigint" == typeof e)
                                        return `[BigInt: ${String(e)}]`;
                                      let r = (function (t) {
                                        let e = Object.getPrototypeOf(t);
                                        return e
                                          ? e.constructor.name
                                          : "null prototype";
                                      })(e);
                                      if (/^HTML(\w*)Element$/.test(r))
                                        return `[HTMLElement: ${r}]`;
                                      return `[object ${r}]`;
                                    } catch (t) {
                                      return `**non-serializable** (${t})`;
                                    }
                                  })(e, r);
                                  if (!u.startsWith("[object ")) return u;
                                  if (r.__sentry_skip_normalization__) return r;
                                  let l =
                                    "number" ==
                                    typeof r.__sentry_override_normalization_depth__
                                      ? r.__sentry_override_normalization_depth__
                                      : i;
                                  if (0 === l) return u.replace("object ", "");
                                  if (a(r)) return "[Circular ~]";
                                  if (r && "function" == typeof r.toJSON)
                                    try {
                                      let e = r.toJSON();
                                      return t("", e, l - 1, o, s);
                                    } catch (t) {}
                                  let p = Array.isArray(r) ? [] : {},
                                    h = 0,
                                    d = V(r);
                                  for (let e in d) {
                                    if (
                                      !Object.prototype.hasOwnProperty.call(
                                        d,
                                        e
                                      )
                                    )
                                      continue;
                                    if (h >= o) {
                                      p[e] = "[MaxProperties ~]";
                                      break;
                                    }
                                    let n = d[e];
                                    (p[e] = t(e, n, l - 1, o, s)), h++;
                                  }
                                  return c(r), p;
                                })("", t, e, r);
                              } catch (t) {
                                return { ERROR: `**non-serializable** (${t})` };
                              }
                            })(e, r);
                            return ~-encodeURI(JSON.stringify(o)).split(/%..|./)
                              .length > i
                              ? t(e, r - 1, i)
                              : o;
                          })(e, s),
                        },
                      };
                    if (r) {
                      let e = t7(t, r);
                      e.length &&
                        (a.exception.values[0].stacktrace = { frames: e });
                    }
                    return a;
                  })(t, e, r, o)),
                  { synthetic: !0 }
                )
              : ($((s = ee(t, e, r, i)), `${e}`, void 0),
                D(s, { synthetic: !0 })),
            s);
      }
      function ee(t, e, n, r) {
        let i = {};
        if (r && n) {
          let r = t7(t, n);
          r.length &&
            (i.exception = {
              values: [{ value: e, stacktrace: { frames: r } }],
            });
        }
        if (f(e)) {
          let { __sentry_template_string__: t, __sentry_template_values__: n } =
            e;
          return (i.logentry = { message: t, params: n }), i;
        }
        return (i.message = e), i;
      }
      let en = "GlobalHandlers",
        er = (t = {}) => {
          let e = { onerror: !0, onunhandledrejection: !0, ...t };
          return {
            name: en,
            setupOnce() {
              Error.stackTraceLimit = 50;
            },
            setup(t) {
              e.onerror &&
                ((function (t) {
                  let e = "error";
                  tN(e, t), tj(e, t5);
                })((e) => {
                  let { stackParser: n, attachStacktrace: r } = es();
                  if (tf() !== t || t$ > 0) return;
                  let { msg: i, url: o, line: s, column: a, error: c } = e,
                    u =
                      void 0 === c && d(i)
                        ? (function (t, e, n, r) {
                            let i = p(t) ? t.message : t,
                              o = "Error",
                              s = i.match(
                                /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
                              );
                            return (
                              s && ((o = s[1]), (i = s[2])),
                              ei(
                                {
                                  exception: {
                                    values: [{ type: o, value: i }],
                                  },
                                },
                                e,
                                n,
                                r
                              )
                            );
                          })(i, o, s, a)
                        : ei(et(n, c || i, void 0, r, !1), o, s, a);
                  (u.level = "error"),
                    tp(u, {
                      originalException: c,
                      mechanism: { handled: !1, type: "onerror" },
                    });
                }),
                eo("onerror")),
                e.onunhandledrejection &&
                  ((function (t) {
                    let e = "unhandledrejection";
                    tN(e, t), tj(e, t4);
                  })((e) => {
                    let { stackParser: n, attachStacktrace: r } = es();
                    if (tf() !== t || t$ > 0) return;
                    let i = (function (t) {
                        if (g(t)) return t;
                        try {
                          if ("reason" in t) return t.reason;
                          if ("detail" in t && "reason" in t.detail)
                            return t.detail.reason;
                        } catch (t) {}
                        return t;
                      })(e),
                      o = g(i)
                        ? {
                            exception: {
                              values: [
                                {
                                  type: "UnhandledRejection",
                                  value: `Non-Error promise rejection captured with value: ${String(
                                    i
                                  )}`,
                                },
                              ],
                            },
                          }
                        : et(n, i, void 0, r, !0);
                    (o.level = "error"),
                      tp(o, {
                        originalException: i,
                        mechanism: {
                          handled: !1,
                          type: "onunhandledrejection",
                        },
                      });
                  }),
                  eo("onunhandledrejection"));
            },
          };
        };
      function ei(t, e, n, r) {
        let i = (t.exception = t.exception || {}),
          o = (i.values = i.values || []),
          s = (o[0] = o[0] || {}),
          a = (s.stacktrace = s.stacktrace || {}),
          c = (a.frames = a.frames || []),
          u = isNaN(parseInt(r, 10)) ? void 0 : r,
          l = isNaN(parseInt(n, 10)) ? void 0 : n,
          p =
            d(e) && e.length > 0
              ? e
              : (function () {
                  try {
                    return b.document.location.href;
                  } catch (t) {
                    return "";
                  }
                })();
        return (
          0 === c.length &&
            c.push({
              colno: u,
              filename: p,
              function: "?",
              in_app: !0,
              lineno: l,
            }),
          t
        );
      }
      function eo(t) {
        tk && L.log(`Global Handler attached: ${t}`);
      }
      function es() {
        let t = tf();
        return (
          (t && t.getOptions()) || {
            stackParser: () => [],
            attachStacktrace: !1,
          }
        );
      }
      tg(en, er);
      let ea = "HttpContext",
        ec = () => ({
          name: ea,
          setupOnce() {},
          preprocessEvent(t) {
            if (!b.navigator && !b.location && !b.document) return;
            let e =
                (t.request && t.request.url) || (b.location && b.location.href),
              { referrer: n } = b.document || {},
              { userAgent: r } = b.navigator || {},
              i = {
                ...(t.request && t.request.headers),
                ...(n && { Referer: n }),
                ...(r && { "User-Agent": r }),
              },
              o = { ...t.request, ...(e && { url: e }), headers: i };
            t.request = o;
          },
        });
      function eu(t, e) {
        (t.mechanism = t.mechanism || { type: "generic", handled: !0 }),
          (t.mechanism = {
            ...t.mechanism,
            ...("AggregateError" === t.type && { is_exception_group: !0 }),
            exception_id: e,
          });
      }
      function el(t, e, n, r) {
        (t.mechanism = t.mechanism || { type: "generic", handled: !0 }),
          (t.mechanism = {
            ...t.mechanism,
            type: "chained",
            source: e,
            exception_id: n,
            parent_id: r,
          });
      }
      tg(ea, ec);
      let ep = "LinkedErrors",
        eh = (t = {}) => {
          let e = t.limit || 5,
            n = t.key || "cause";
          return {
            name: ep,
            setupOnce() {},
            preprocessEvent(t, r, i) {
              let o = i.getOptions();
              !(function (t, e, n = 250, r, i, o, s) {
                if (
                  !o.exception ||
                  !o.exception.values ||
                  !s ||
                  !v(s.originalException, Error)
                )
                  return;
                let a =
                  o.exception.values.length > 0
                    ? o.exception.values[o.exception.values.length - 1]
                    : void 0;
                a &&
                  (o.exception.values = (function t(e, n, r, i, o, s, a, c) {
                    if (s.length >= r + 1) return s;
                    let u = [...s];
                    if (v(i[o], Error)) {
                      eu(a, c);
                      let s = e(n, i[o]),
                        l = u.length;
                      el(s, o, l, c),
                        (u = t(e, n, r, i[o], o, [s, ...u], s, l));
                    }
                    return (
                      Array.isArray(i.errors) &&
                        i.errors.forEach((i, s) => {
                          if (v(i, Error)) {
                            eu(a, c);
                            let l = e(n, i),
                              p = u.length;
                            el(l, `errors[${s}]`, p, c),
                              (u = t(e, n, r, i, o, [l, ...u], l, p));
                          }
                        }),
                      u
                    );
                  })(
                    t,
                    e,
                    i,
                    s.originalException,
                    r,
                    o.exception.values,
                    a,
                    0
                  ).map((t) => (t.value && (t.value = q(t.value, n)), t)));
              })(t6, o.stackParser, o.maxValueLength, n, e, t, r);
            },
          };
        };
      tg(ep, eh);
      let ed = [
          "EventTarget",
          "Window",
          "Node",
          "ApplicationCache",
          "AudioTrackList",
          "BroadcastChannel",
          "ChannelMergerNode",
          "CryptoOperation",
          "EventSource",
          "FileReader",
          "HTMLUnknownElement",
          "IDBDatabase",
          "IDBRequest",
          "IDBTransaction",
          "KeyOperation",
          "MediaController",
          "MessagePort",
          "ModalWindow",
          "Notification",
          "SVGElementInstance",
          "Screen",
          "SharedWorker",
          "TextTrack",
          "TextTrackCue",
          "TextTrackList",
          "WebSocket",
          "WebSocketWorker",
          "Worker",
          "XMLHttpRequest",
          "XMLHttpRequestEventTarget",
          "XMLHttpRequestUpload",
        ],
        ef = "TryCatch",
        eg = (t = {}) => {
          let e = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            ...t,
          };
          return {
            name: ef,
            setupOnce() {
              e.setTimeout && B(b, "setTimeout", e_),
                e.setInterval && B(b, "setInterval", e_),
                e.requestAnimationFrame && B(b, "requestAnimationFrame", em),
                e.XMLHttpRequest &&
                  "XMLHttpRequest" in b &&
                  B(XMLHttpRequest.prototype, "send", ey);
              let t = e.eventTarget;
              t && (Array.isArray(t) ? t : ed).forEach(ev);
            },
          };
        };
      function e_(t) {
        return function (...e) {
          let n = e[0];
          return (
            (e[0] = tD(n, {
              mechanism: {
                data: { function: tO(t) },
                handled: !1,
                type: "instrument",
              },
            })),
            t.apply(this, e)
          );
        };
      }
      function em(t) {
        return function (e) {
          return t.apply(this, [
            tD(e, {
              mechanism: {
                data: { function: "requestAnimationFrame", handler: tO(t) },
                handled: !1,
                type: "instrument",
              },
            }),
          ]);
        };
      }
      function ey(t) {
        return function (...e) {
          let n = this;
          return (
            ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(
              (t) => {
                t in n &&
                  "function" == typeof n[t] &&
                  B(n, t, function (e) {
                    let n = {
                        mechanism: {
                          data: { function: t, handler: tO(e) },
                          handled: !1,
                          type: "instrument",
                        },
                      },
                      r = F(e);
                    return r && (n.mechanism.data.handler = tO(r)), tD(e, n);
                  });
              }
            ),
            t.apply(this, e)
          );
        };
      }
      function ev(t) {
        let e = b[t] && b[t].prototype;
        e &&
          e.hasOwnProperty &&
          e.hasOwnProperty("addEventListener") &&
          (B(e, "addEventListener", function (e) {
            return function (n, r, i) {
              try {
                "function" == typeof r.handleEvent &&
                  (r.handleEvent = tD(r.handleEvent, {
                    mechanism: {
                      data: {
                        function: "handleEvent",
                        handler: tO(r),
                        target: t,
                      },
                      handled: !1,
                      type: "instrument",
                    },
                  }));
              } catch (t) {}
              return e.apply(this, [
                n,
                tD(r, {
                  mechanism: {
                    data: {
                      function: "addEventListener",
                      handler: tO(r),
                      target: t,
                    },
                    handled: !1,
                    type: "instrument",
                  },
                }),
                i,
              ]);
            };
          }),
          B(e, "removeEventListener", function (t) {
            return function (e, n, r) {
              try {
                let i = n && n.__sentry_wrapped__;
                i && t.call(this, e, i, r);
              } catch (t) {}
              return t.call(this, e, n, r);
            };
          }));
      }
      tg(ef, eg), tv(), tx(), eg(), tz(), er(), eh(), tK(), ec();
      let eE = (t = {}, e = ts()) => {
        if (!b.document) {
          tk && L.error("Global document not defined in showReportDialog call");
          return;
        }
        let { client: n, scope: r } = e.getStackTop(),
          i = t.dsn || (n && n.getDsn());
        if (!i) {
          tk && L.error("DSN not configured for showReportDialog call");
          return;
        }
        r && (t.user = { ...r.getUser(), ...t.user }),
          t.eventId || (t.eventId = e.lastEventId());
        let o = b.document.createElement("script");
        (o.async = !0),
          (o.crossOrigin = "anonymous"),
          (o.src = (function (t, e) {
            let n = (function (t) {
              let e =
                "string" == typeof t
                  ? (function (t) {
                      let e = tw.exec(t);
                      if (!e) {
                        j(() => {
                          console.error(`Invalid Sentry Dsn: ${t}`);
                        });
                        return;
                      }
                      let [n, r, i = "", o, s = "", a] = e.slice(1),
                        c = "",
                        u = a,
                        l = u.split("/");
                      if (
                        (l.length > 1 &&
                          ((c = l.slice(0, -1).join("/")), (u = l.pop())),
                        u)
                      ) {
                        let t = u.match(/^\d+/);
                        t && (u = t[0]);
                      }
                      return tT({
                        host: o,
                        pass: i,
                        path: c,
                        projectId: u,
                        port: s,
                        protocol: n,
                        publicKey: r,
                      });
                    })(t)
                  : tT(t);
              if (
                e &&
                (function (t) {
                  if (!I) return !0;
                  let { port: e, projectId: n, protocol: r } = t;
                  return (
                    !["protocol", "publicKey", "host", "projectId"].find(
                      (e) =>
                        !t[e] &&
                        (L.error(`Invalid Sentry Dsn: ${e} missing`), !0)
                    ) &&
                    (n.match(/^\d+$/)
                      ? "http" === r || "https" === r
                        ? !(e && isNaN(parseInt(e, 10))) ||
                          (L.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1)
                        : (L.error(`Invalid Sentry Dsn: Invalid protocol ${r}`),
                          !1)
                      : (L.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),
                        !1))
                  );
                })(e)
              )
                return e;
            })(t);
            if (!n) return "";
            let r = `${(function (t) {
                let e = t.protocol ? `${t.protocol}:` : "",
                  n = t.port ? `:${t.port}` : "";
                return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`;
              })(n)}embed/error-page/`,
              i = `dsn=${(function (t, e = !1) {
                let {
                  host: n,
                  path: r,
                  pass: i,
                  port: o,
                  projectId: s,
                  protocol: a,
                  publicKey: c,
                } = t;
                return `${a}://${c}${e && i ? `:${i}` : ""}@${n}${
                  o ? `:${o}` : ""
                }/${r ? `${r}/` : r}${s}`;
              })(n)}`;
            for (let t in e)
              if ("dsn" !== t && "onClose" !== t) {
                if ("user" === t) {
                  let t = e.user;
                  if (!t) continue;
                  t.name && (i += `&name=${encodeURIComponent(t.name)}`),
                    t.email && (i += `&email=${encodeURIComponent(t.email)}`);
                } else
                  i += `&${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`;
              }
            return `${r}?${i}`;
          })(i, t)),
          t.onLoad && (o.onload = t.onLoad);
        let { onClose: s } = t;
        if (s) {
          let t = (e) => {
            if ("__sentry_reportdialog_closed__" === e.data)
              try {
                s();
              } finally {
                b.removeEventListener("message", t);
              }
          };
          b.addEventListener("message", t);
        }
        let a = b.document.head || b.document.body;
        a
          ? a.appendChild(o)
          : tk &&
            L.error(
              "Not injecting report dialog. No injection point found in HTML"
            );
      };
      n(44551);
      var eS,
        eb,
        ex = n(15039);
      let ew = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
        eT = { componentStack: null, error: null, eventId: null };
      class ek extends ex.Component {
        constructor(t) {
          super(t),
            ek.prototype.__init.call(this),
            (this.state = eT),
            (this._openFallbackReportDialog = !0);
          let e = tf();
          e &&
            e.on &&
            t.showDialog &&
            ((this._openFallbackReportDialog = !1),
            e.on("afterSendEvent", (e) => {
              e.type ||
                e.event_id !== this._lastEventId ||
                eE({ ...t.dialogOptions, eventId: this._lastEventId });
            }));
        }
        componentDidCatch(t, { componentStack: e }) {
          let {
            beforeCapture: n,
            onError: r,
            showDialog: i,
            dialogOptions: o,
          } = this.props;
          td((s) => {
            if (
              (function (t) {
                let e = t.match(/^([^.]+)/);
                return null !== e && parseInt(e[0]) >= 17;
              })(ex.version) &&
              u(t)
            ) {
              let n = Error(t.message);
              (n.name = `React ErrorBoundary ${t.name}`),
                (n.stack = e),
                (function (t, e) {
                  let n = new WeakMap();
                  !(function t(e, r) {
                    if (!n.has(e)) {
                      if (e.cause) return n.set(e, !0), t(e.cause, r);
                      e.cause = r;
                    }
                  })(t, e);
                })(t, n);
            }
            n && n(s, t, e);
            let a = tl(t, {
              captureContext: { contexts: { react: { componentStack: e } } },
              mechanism: { handled: !1 },
            });
            r && r(t, e, a),
              i &&
                ((this._lastEventId = a),
                this._openFallbackReportDialog && eE({ ...o, eventId: a })),
              this.setState({ error: t, componentStack: e, eventId: a });
          });
        }
        componentDidMount() {
          let { onMount: t } = this.props;
          t && t();
        }
        componentWillUnmount() {
          let { error: t, componentStack: e, eventId: n } = this.state,
            { onUnmount: r } = this.props;
          r && r(t, e, n);
        }
        __init() {
          this.resetErrorBoundary = () => {
            let { onReset: t } = this.props,
              { error: e, componentStack: n, eventId: r } = this.state;
            t && t(e, n, r), this.setState(eT);
          };
        }
        render() {
          let { fallback: t, children: e } = this.props,
            n = this.state;
          if (n.error) {
            let e;
            return ((e =
              "function" == typeof t
                ? t({
                    error: n.error,
                    componentStack: n.componentStack,
                    resetError: this.resetErrorBoundary,
                    eventId: n.eventId,
                  })
                : t),
            ex.isValidElement(e))
              ? e
              : (t &&
                  ew &&
                  L.warn("fallback did not produce a valid ReactElement"),
                null);
          }
          return "function" == typeof e ? e() : e;
        }
      }
    },
  },
]);
