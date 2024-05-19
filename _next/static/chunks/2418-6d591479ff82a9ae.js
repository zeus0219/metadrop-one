(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2418],
  {
    44975: function (t) {
      function e(t, e, n) {
        function r() {
          var c = Date.now() - s;
          c < e && c >= 0
            ? (i = setTimeout(r, e - c))
            : ((i = null), n || ((u = t.apply(a, o)), (a = o = null)));
        }
        null == e && (e = 100);
        var i,
          o,
          a,
          s,
          u,
          c = function () {
            (a = this), (o = arguments), (s = Date.now());
            var c = n && !i;
            return (
              i || (i = setTimeout(r, e)),
              c && ((u = t.apply(a, o)), (a = o = null)),
              u
            );
          };
        return (
          (c.clear = function () {
            i && (clearTimeout(i), (i = null));
          }),
          (c.flush = function () {
            i &&
              ((u = t.apply(a, o)),
              (a = o = null),
              clearTimeout(i),
              (i = null));
          }),
          c
        );
      }
      (e.debounce = e), (t.exports = e);
    },
    20267: function (t, e, n) {
      "use strict";
      n.d(e, {
        qY: function () {
          return f;
        },
      });
      var r = n(26182),
        i = function (t, e, n) {
          if (n || 2 == arguments.length)
            for (var r, i = 0, o = e.length; i < o; i++)
              (!r && i in e) ||
                (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
          return t.concat(r || Array.prototype.slice.call(e));
        },
        o = function (t, e, n) {
          (this.name = t),
            (this.version = e),
            (this.os = n),
            (this.type = "browser");
        },
        a = function (t) {
          (this.version = t),
            (this.type = "node"),
            (this.name = "node"),
            (this.os = r.platform);
        },
        s = function (t, e, n, r) {
          (this.name = t),
            (this.version = e),
            (this.os = n),
            (this.bot = r),
            (this.type = "bot-device");
        },
        u = function () {
          (this.type = "bot"),
            (this.bot = !0),
            (this.name = "bot"),
            (this.version = null),
            (this.os = null);
        },
        c = function () {
          (this.type = "react-native"),
            (this.name = "react-native"),
            (this.version = null),
            (this.os = null);
        },
        l =
          /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        d = [
          ["aol", /AOLShield\/([0-9\._]+)/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["edge-ios", /EdgiOS\/([0-9\._]+)/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
          ["samsung", /SamsungBrowser\/([0-9\.]+)/],
          ["silk", /\bSilk\/([0-9._-]+)\b/],
          ["miui", /MiuiBrowser\/([0-9\.]+)$/],
          ["beaker", /BeakerBrowser\/([0-9\.]+)/],
          ["edge-chromium", /EdgA?\/([0-9\.]+)/],
          [
            "chromium-webview",
            /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
          ],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["fxios", /FxiOS\/([0-9\.]+)/],
          ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
          ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
          [
            "pie",
            /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
          ],
          ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FB[AS]V\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          ["curl", /^curl\/([0-9\.]+)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        h = [
          ["iOS", /iP(hone|od|ad)/],
          ["Android OS", /Android/],
          ["BlackBerry OS", /BlackBerry|BB10/],
          ["Windows Mobile", /IEMobile/],
          ["Amazon OS", /Kindle/],
          ["Windows 3.11", /Win16/],
          ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
          ["Windows 98", /(Windows 98)|(Win98)/],
          ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
          ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
          ["Windows Server 2003", /(Windows NT 5.2)/],
          ["Windows Vista", /(Windows NT 6.0)/],
          ["Windows 7", /(Windows NT 6.1)/],
          ["Windows 8", /(Windows NT 6.2)/],
          ["Windows 8.1", /(Windows NT 6.3)/],
          ["Windows 10", /(Windows NT 10.0)/],
          ["Windows ME", /Windows ME/],
          ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/],
        ];
      function f(t) {
        return t
          ? p(t)
          : "undefined" == typeof document &&
            "undefined" != typeof navigator &&
            "ReactNative" === navigator.product
          ? new c()
          : "undefined" != typeof navigator
          ? p(navigator.userAgent)
          : void 0 !== r && r.version
          ? new a(r.version.slice(1))
          : null;
      }
      function p(t) {
        var e =
          "" !== t &&
          d.reduce(function (e, n) {
            var r = n[0],
              i = n[1];
            if (e) return e;
            var o = i.exec(t);
            return !!o && [r, o];
          }, !1);
        if (!e) return null;
        var n = e[0],
          r = e[1];
        if ("searchbot" === n) return new u();
        var a = r[1] && r[1].split(".").join("_").split("_").slice(0, 3);
        a
          ? a.length < 3 &&
            (a = i(
              i([], a, !0),
              (function (t) {
                for (var e = [], n = 0; n < t; n++) e.push("0");
                return e;
              })(3 - a.length),
              !0
            ))
          : (a = []);
        var c = a.join("."),
          f = (function (t) {
            for (var e = 0, n = h.length; e < n; e++) {
              var r = h[e],
                i = r[0];
              if (r[1].exec(t)) return i;
            }
            return null;
          })(t),
          p = l.exec(t);
        return p && p[1] ? new s(n, c, f, p[1]) : new o(n, c, f);
      }
    },
    92996: function (t) {
      "use strict";
      var e = {
        single_source_shortest_paths: function (t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            c,
            l,
            d = {},
            h = {};
          h[n] = 0;
          var f = e.PriorityQueue.make();
          for (f.push(n, 0); !f.empty(); )
            for (a in ((o = (i = f.pop()).value),
            (s = i.cost),
            (u = t[o] || {})))
              u.hasOwnProperty(a) &&
                ((c = s + u[a]),
                (l = h[a]),
                (void 0 === h[a] || l > c) &&
                  ((h[a] = c), f.push(a, c), (d[a] = o)));
          if (void 0 !== r && void 0 === h[r])
            throw Error(
              ["Could not find a path from ", n, " to ", r, "."].join("")
            );
          return d;
        },
        extract_shortest_path_from_predecessor_list: function (t, e) {
          for (var n = [], r = e; r; ) n.push(r), t[r], (r = t[r]);
          return n.reverse(), n;
        },
        find_path: function (t, n, r) {
          var i = e.single_source_shortest_paths(t, n, r);
          return e.extract_shortest_path_from_predecessor_list(i, r);
        },
        PriorityQueue: {
          make: function (t) {
            var n,
              r = e.PriorityQueue,
              i = {};
            for (n in ((t = t || {}), r)) r.hasOwnProperty(n) && (i[n] = r[n]);
            return (i.queue = []), (i.sorter = t.sorter || r.default_sorter), i;
          },
          default_sorter: function (t, e) {
            return t.cost - e.cost;
          },
          push: function (t, e) {
            this.queue.push({ value: t, cost: e }),
              this.queue.sort(this.sorter);
          },
          pop: function () {
            return this.queue.shift();
          },
          empty: function () {
            return 0 === this.queue.length;
          },
        },
      };
      t.exports = e;
    },
    18845: function (t) {
      "use strict";
      t.exports = function (t) {
        for (var e = [], n = t.length, r = 0; r < n; r++) {
          var i = t.charCodeAt(r);
          if (i >= 55296 && i <= 56319 && n > r + 1) {
            var o = t.charCodeAt(r + 1);
            o >= 56320 &&
              o <= 57343 &&
              ((i = (i - 55296) * 1024 + o - 56320 + 65536), (r += 1));
          }
          if (i < 128) {
            e.push(i);
            continue;
          }
          if (i < 2048) {
            e.push((i >> 6) | 192), e.push((63 & i) | 128);
            continue;
          }
          if (i < 55296 || (i >= 57344 && i < 65536)) {
            e.push((i >> 12) | 224),
              e.push(((i >> 6) & 63) | 128),
              e.push((63 & i) | 128);
            continue;
          }
          if (i >= 65536 && i <= 1114111) {
            e.push((i >> 18) | 240),
              e.push(((i >> 12) & 63) | 128),
              e.push(((i >> 6) & 63) | 128),
              e.push((63 & i) | 128);
            continue;
          }
          e.push(239, 191, 189);
        }
        return new Uint8Array(e).buffer;
      };
    },
    27156: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return i;
        },
      });
      var r = function () {},
        i = function () {};
    },
    74046: function (t, e, n) {
      let r = n(39667),
        i = n(6856),
        o = n(83073),
        a = n(89065);
      function s(t, e, n, o, a) {
        let s = [].slice.call(arguments, 1),
          u = s.length,
          c = "function" == typeof s[u - 1];
        if (!c && !r()) throw Error("Callback required as last argument");
        if (c) {
          if (u < 2) throw Error("Too few arguments provided");
          2 === u
            ? ((a = n), (n = e), (e = o = void 0))
            : 3 === u &&
              (e.getContext && void 0 === a
                ? ((a = o), (o = void 0))
                : ((a = o), (o = n), (n = e), (e = void 0)));
        } else {
          if (u < 1) throw Error("Too few arguments provided");
          return (
            1 === u
              ? ((n = e), (e = o = void 0))
              : 2 !== u || e.getContext || ((o = n), (n = e), (e = void 0)),
            new Promise(function (r, a) {
              try {
                let a = i.create(n, o);
                r(t(a, e, o));
              } catch (t) {
                a(t);
              }
            })
          );
        }
        try {
          let r = i.create(n, o);
          a(null, t(r, e, o));
        } catch (t) {
          a(t);
        }
      }
      (e.create = i.create),
        (e.toCanvas = s.bind(null, o.render)),
        (e.toDataURL = s.bind(null, o.renderToDataURL)),
        (e.toString = s.bind(null, function (t, e, n) {
          return a.render(t, n);
        }));
    },
    39667: function (t) {
      t.exports = function () {
        return (
          "function" == typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    6738: function (t, e, n) {
      let r = n(24593).getSymbolSize;
      (e.getRowColCoords = function (t) {
        if (1 === t) return [];
        let e = Math.floor(t / 7) + 2,
          n = r(t),
          i = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * e - 2)),
          o = [n - 7];
        for (let t = 1; t < e - 1; t++) o[t] = o[t - 1] - i;
        return o.push(6), o.reverse();
      }),
        (e.getPositions = function (t) {
          let n = [],
            r = e.getRowColCoords(t),
            i = r.length;
          for (let t = 0; t < i; t++)
            for (let e = 0; e < i; e++)
              (0 !== t || 0 !== e) &&
                (0 !== t || e !== i - 1) &&
                (t !== i - 1 || 0 !== e) &&
                n.push([r[t], r[e]]);
          return n;
        });
    },
    42945: function (t, e, n) {
      let r = n(36427),
        i = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          " ",
          "$",
          "%",
          "*",
          "+",
          "-",
          ".",
          "/",
          ":",
        ];
      function o(t) {
        (this.mode = r.ALPHANUMERIC), (this.data = t);
      }
      (o.getBitsLength = function (t) {
        return 11 * Math.floor(t / 2) + (t % 2) * 6;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (t) {
          let e;
          for (e = 0; e + 2 <= this.data.length; e += 2) {
            let n = 45 * i.indexOf(this.data[e]);
            (n += i.indexOf(this.data[e + 1])), t.put(n, 11);
          }
          this.data.length % 2 && t.put(i.indexOf(this.data[e]), 6);
        }),
        (t.exports = o);
    },
    1806: function (t) {
      function e() {
        (this.buffer = []), (this.length = 0);
      }
      (e.prototype = {
        get: function (t) {
          return ((this.buffer[Math.floor(t / 8)] >>> (7 - (t % 8))) & 1) == 1;
        },
        put: function (t, e) {
          for (let n = 0; n < e; n++)
            this.putBit(((t >>> (e - n - 1)) & 1) == 1);
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (t) {
          let e = Math.floor(this.length / 8);
          this.buffer.length <= e && this.buffer.push(0),
            t && (this.buffer[e] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (t.exports = e);
    },
    86058: function (t) {
      function e(t) {
        if (!t || t < 1)
          throw Error("BitMatrix size must be defined and greater than 0");
        (this.size = t),
          (this.data = new Uint8Array(t * t)),
          (this.reservedBit = new Uint8Array(t * t));
      }
      (e.prototype.set = function (t, e, n, r) {
        let i = t * this.size + e;
        (this.data[i] = n), r && (this.reservedBit[i] = !0);
      }),
        (e.prototype.get = function (t, e) {
          return this.data[t * this.size + e];
        }),
        (e.prototype.xor = function (t, e, n) {
          this.data[t * this.size + e] ^= n;
        }),
        (e.prototype.isReserved = function (t, e) {
          return this.reservedBit[t * this.size + e];
        }),
        (t.exports = e);
    },
    42773: function (t, e, n) {
      let r = n(18845),
        i = n(36427);
      function o(t) {
        (this.mode = i.BYTE),
          "string" == typeof t && (t = r(t)),
          (this.data = new Uint8Array(t));
      }
      (o.getBitsLength = function (t) {
        return 8 * t;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (t) {
          for (let e = 0, n = this.data.length; e < n; e++)
            t.put(this.data[e], 8);
        }),
        (t.exports = o);
    },
    95159: function (t, e, n) {
      let r = n(75518),
        i = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
          4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8,
          10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
          11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23,
          25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12,
          23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
          40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51,
          60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74,
          24, 47, 65, 77, 25, 49, 68, 81,
        ],
        o = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
          72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
          160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
          104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280,
          408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650,
          224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
          750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952,
          1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
          1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350,
          1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590,
          1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
          2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (e.getBlocksCount = function (t, e) {
        switch (e) {
          case r.L:
            return i[(t - 1) * 4 + 0];
          case r.M:
            return i[(t - 1) * 4 + 1];
          case r.Q:
            return i[(t - 1) * 4 + 2];
          case r.H:
            return i[(t - 1) * 4 + 3];
          default:
            return;
        }
      }),
        (e.getTotalCodewordsCount = function (t, e) {
          switch (e) {
            case r.L:
              return o[(t - 1) * 4 + 0];
            case r.M:
              return o[(t - 1) * 4 + 1];
            case r.Q:
              return o[(t - 1) * 4 + 2];
            case r.H:
              return o[(t - 1) * 4 + 3];
            default:
              return;
          }
        });
    },
    75518: function (t, e) {
      (e.L = { bit: 1 }),
        (e.M = { bit: 0 }),
        (e.Q = { bit: 3 }),
        (e.H = { bit: 2 }),
        (e.isValid = function (t) {
          return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4;
        }),
        (e.from = function (t, n) {
          if (e.isValid(t)) return t;
          try {
            return (function (t) {
              if ("string" != typeof t) throw Error("Param is not a string");
              switch (t.toLowerCase()) {
                case "l":
                case "low":
                  return e.L;
                case "m":
                case "medium":
                  return e.M;
                case "q":
                case "quartile":
                  return e.Q;
                case "h":
                case "high":
                  return e.H;
                default:
                  throw Error("Unknown EC Level: " + t);
              }
            })(t);
          } catch (t) {
            return n;
          }
        });
    },
    72846: function (t, e, n) {
      let r = n(24593).getSymbolSize;
      e.getPositions = function (t) {
        let e = r(t);
        return [
          [0, 0],
          [e - 7, 0],
          [0, e - 7],
        ];
      };
    },
    36428: function (t, e, n) {
      let r = n(24593),
        i = r.getBCHDigit(1335);
      e.getEncodedBits = function (t, e) {
        let n = (t.bit << 3) | e,
          o = n << 10;
        for (; r.getBCHDigit(o) - i >= 0; ) o ^= 1335 << (r.getBCHDigit(o) - i);
        return ((n << 10) | o) ^ 21522;
      };
    },
    98939: function (t, e) {
      let n = new Uint8Array(512),
        r = new Uint8Array(256);
      !(function () {
        let t = 1;
        for (let e = 0; e < 255; e++)
          (n[e] = t), (r[t] = e), 256 & (t <<= 1) && (t ^= 285);
        for (let t = 255; t < 512; t++) n[t] = n[t - 255];
      })(),
        (e.log = function (t) {
          if (t < 1) throw Error("log(" + t + ")");
          return r[t];
        }),
        (e.exp = function (t) {
          return n[t];
        }),
        (e.mul = function (t, e) {
          return 0 === t || 0 === e ? 0 : n[r[t] + r[e]];
        });
    },
    45498: function (t, e, n) {
      let r = n(36427),
        i = n(24593);
      function o(t) {
        (this.mode = r.KANJI), (this.data = t);
      }
      (o.getBitsLength = function (t) {
        return 13 * t;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (t) {
          let e;
          for (e = 0; e < this.data.length; e++) {
            let n = i.toSJIS(this.data[e]);
            if (n >= 33088 && n <= 40956) n -= 33088;
            else if (n >= 57408 && n <= 60351) n -= 49472;
            else
              throw Error(
                "Invalid SJIS character: " +
                  this.data[e] +
                  "\nMake sure your charset is UTF-8"
              );
            (n = ((n >>> 8) & 255) * 192 + (255 & n)), t.put(n, 13);
          }
        }),
        (t.exports = o);
    },
    79269: function (t, e) {
      e.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      let n = { N1: 3, N2: 3, N3: 40, N4: 10 };
      (e.isValid = function (t) {
        return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7;
      }),
        (e.from = function (t) {
          return e.isValid(t) ? parseInt(t, 10) : void 0;
        }),
        (e.getPenaltyN1 = function (t) {
          let e = t.size,
            r = 0,
            i = 0,
            o = 0,
            a = null,
            s = null;
          for (let u = 0; u < e; u++) {
            (i = o = 0), (a = s = null);
            for (let c = 0; c < e; c++) {
              let e = t.get(u, c);
              e === a
                ? i++
                : (i >= 5 && (r += n.N1 + (i - 5)), (a = e), (i = 1)),
                (e = t.get(c, u)) === s
                  ? o++
                  : (o >= 5 && (r += n.N1 + (o - 5)), (s = e), (o = 1));
            }
            i >= 5 && (r += n.N1 + (i - 5)), o >= 5 && (r += n.N1 + (o - 5));
          }
          return r;
        }),
        (e.getPenaltyN2 = function (t) {
          let e = t.size,
            r = 0;
          for (let n = 0; n < e - 1; n++)
            for (let i = 0; i < e - 1; i++) {
              let e =
                t.get(n, i) +
                t.get(n, i + 1) +
                t.get(n + 1, i) +
                t.get(n + 1, i + 1);
              (4 === e || 0 === e) && r++;
            }
          return r * n.N2;
        }),
        (e.getPenaltyN3 = function (t) {
          let e = t.size,
            r = 0,
            i = 0,
            o = 0;
          for (let n = 0; n < e; n++) {
            i = o = 0;
            for (let a = 0; a < e; a++)
              (i = ((i << 1) & 2047) | t.get(n, a)),
                a >= 10 && (1488 === i || 93 === i) && r++,
                (o = ((o << 1) & 2047) | t.get(a, n)),
                a >= 10 && (1488 === o || 93 === o) && r++;
          }
          return r * n.N3;
        }),
        (e.getPenaltyN4 = function (t) {
          let e = 0,
            r = t.data.length;
          for (let n = 0; n < r; n++) e += t.data[n];
          return Math.abs(Math.ceil((100 * e) / r / 5) - 10) * n.N4;
        }),
        (e.applyMask = function (t, n) {
          let r = n.size;
          for (let i = 0; i < r; i++)
            for (let o = 0; o < r; o++)
              n.isReserved(o, i) ||
                n.xor(
                  o,
                  i,
                  (function (t, n, r) {
                    switch (t) {
                      case e.Patterns.PATTERN000:
                        return (n + r) % 2 == 0;
                      case e.Patterns.PATTERN001:
                        return n % 2 == 0;
                      case e.Patterns.PATTERN010:
                        return r % 3 == 0;
                      case e.Patterns.PATTERN011:
                        return (n + r) % 3 == 0;
                      case e.Patterns.PATTERN100:
                        return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
                      case e.Patterns.PATTERN101:
                        return ((n * r) % 2) + ((n * r) % 3) == 0;
                      case e.Patterns.PATTERN110:
                        return (((n * r) % 2) + ((n * r) % 3)) % 2 == 0;
                      case e.Patterns.PATTERN111:
                        return (((n * r) % 3) + ((n + r) % 2)) % 2 == 0;
                      default:
                        throw Error("bad maskPattern:" + t);
                    }
                  })(t, o, i)
                );
        }),
        (e.getBestMask = function (t, n) {
          let r = Object.keys(e.Patterns).length,
            i = 0,
            o = 1 / 0;
          for (let a = 0; a < r; a++) {
            n(a), e.applyMask(a, t);
            let r =
              e.getPenaltyN1(t) +
              e.getPenaltyN2(t) +
              e.getPenaltyN3(t) +
              e.getPenaltyN4(t);
            e.applyMask(a, t), r < o && ((o = r), (i = a));
          }
          return i;
        });
    },
    36427: function (t, e, n) {
      let r = n(41715),
        i = n(75258);
      (e.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (e.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (e.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (e.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (e.MIXED = { bit: -1 }),
        (e.getCharCountIndicator = function (t, e) {
          if (!t.ccBits) throw Error("Invalid mode: " + t);
          if (!r.isValid(e)) throw Error("Invalid version: " + e);
          return e >= 1 && e < 10
            ? t.ccBits[0]
            : e < 27
            ? t.ccBits[1]
            : t.ccBits[2];
        }),
        (e.getBestModeForData = function (t) {
          return i.testNumeric(t)
            ? e.NUMERIC
            : i.testAlphanumeric(t)
            ? e.ALPHANUMERIC
            : i.testKanji(t)
            ? e.KANJI
            : e.BYTE;
        }),
        (e.toString = function (t) {
          if (t && t.id) return t.id;
          throw Error("Invalid mode");
        }),
        (e.isValid = function (t) {
          return t && t.bit && t.ccBits;
        }),
        (e.from = function (t, n) {
          if (e.isValid(t)) return t;
          try {
            return (function (t) {
              if ("string" != typeof t) throw Error("Param is not a string");
              switch (t.toLowerCase()) {
                case "numeric":
                  return e.NUMERIC;
                case "alphanumeric":
                  return e.ALPHANUMERIC;
                case "kanji":
                  return e.KANJI;
                case "byte":
                  return e.BYTE;
                default:
                  throw Error("Unknown mode: " + t);
              }
            })(t);
          } catch (t) {
            return n;
          }
        });
    },
    84837: function (t, e, n) {
      let r = n(36427);
      function i(t) {
        (this.mode = r.NUMERIC), (this.data = t.toString());
      }
      (i.getBitsLength = function (t) {
        return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (t) {
          let e, n;
          for (e = 0; e + 3 <= this.data.length; e += 3)
            (n = parseInt(this.data.substr(e, 3), 10)), t.put(n, 10);
          let r = this.data.length - e;
          r > 0 &&
            ((n = parseInt(this.data.substr(e), 10)), t.put(n, 3 * r + 1));
        }),
        (t.exports = i);
    },
    32901: function (t, e, n) {
      let r = n(98939);
      (e.mul = function (t, e) {
        let n = new Uint8Array(t.length + e.length - 1);
        for (let i = 0; i < t.length; i++)
          for (let o = 0; o < e.length; o++) n[i + o] ^= r.mul(t[i], e[o]);
        return n;
      }),
        (e.mod = function (t, e) {
          let n = new Uint8Array(t);
          for (; n.length - e.length >= 0; ) {
            let t = n[0];
            for (let i = 0; i < e.length; i++) n[i] ^= r.mul(e[i], t);
            let i = 0;
            for (; i < n.length && 0 === n[i]; ) i++;
            n = n.slice(i);
          }
          return n;
        }),
        (e.generateECPolynomial = function (t) {
          let n = new Uint8Array([1]);
          for (let i = 0; i < t; i++)
            n = e.mul(n, new Uint8Array([1, r.exp(i)]));
          return n;
        });
    },
    6856: function (t, e, n) {
      let r = n(24593),
        i = n(75518),
        o = n(1806),
        a = n(86058),
        s = n(6738),
        u = n(72846),
        c = n(79269),
        l = n(95159),
        d = n(70648),
        h = n(841),
        f = n(36428),
        p = n(36427),
        g = n(34341);
      function m(t, e, n) {
        let r, i;
        let o = t.size,
          a = f.getEncodedBits(e, n);
        for (r = 0; r < 15; r++)
          (i = ((a >> r) & 1) == 1),
            r < 6
              ? t.set(r, 8, i, !0)
              : r < 8
              ? t.set(r + 1, 8, i, !0)
              : t.set(o - 15 + r, 8, i, !0),
            r < 8
              ? t.set(8, o - r - 1, i, !0)
              : r < 9
              ? t.set(8, 15 - r - 1 + 1, i, !0)
              : t.set(8, 15 - r - 1, i, !0);
        t.set(o - 8, 8, 1, !0);
      }
      e.create = function (t, e) {
        let n, f;
        if (void 0 === t || "" === t) throw Error("No input text");
        let v = i.M;
        return (
          void 0 !== e &&
            ((v = i.from(e.errorCorrectionLevel, i.M)),
            (n = h.from(e.version)),
            (f = c.from(e.maskPattern)),
            e.toSJISFunc && r.setToSJISFunction(e.toSJISFunc)),
          (function (t, e, n, i) {
            let f;
            if (Array.isArray(t)) f = g.fromArray(t);
            else if ("string" == typeof t) {
              let r = e;
              if (!r) {
                let e = g.rawSplit(t);
                r = h.getBestVersionForData(e, n);
              }
              f = g.fromString(t, r || 40);
            } else throw Error("Invalid data");
            let v = h.getBestVersionForData(f, n);
            if (!v)
              throw Error(
                "The amount of data is too big to be stored in a QR Code"
              );
            if (e) {
              if (e < v)
                throw Error(
                  "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                    v +
                    ".\n"
                );
            } else e = v;
            let A = (function (t, e, n) {
                let i = new o();
                n.forEach(function (e) {
                  i.put(e.mode.bit, 4),
                    i.put(e.getLength(), p.getCharCountIndicator(e.mode, t)),
                    e.write(i);
                });
                let a =
                  (r.getSymbolTotalCodewords(t) -
                    l.getTotalCodewordsCount(t, e)) *
                  8;
                for (
                  i.getLengthInBits() + 4 <= a && i.put(0, 4);
                  i.getLengthInBits() % 8 != 0;

                )
                  i.putBit(0);
                let s = (a - i.getLengthInBits()) / 8;
                for (let t = 0; t < s; t++) i.put(t % 2 ? 17 : 236, 8);
                return (function (t, e, n) {
                  let i, o;
                  let a = r.getSymbolTotalCodewords(e),
                    s = a - l.getTotalCodewordsCount(e, n),
                    u = l.getBlocksCount(e, n),
                    c = a % u,
                    h = u - c,
                    f = Math.floor(a / u),
                    p = Math.floor(s / u),
                    g = p + 1,
                    m = f - p,
                    v = new d(m),
                    A = 0,
                    y = Array(u),
                    w = Array(u),
                    b = 0,
                    C = new Uint8Array(t.buffer);
                  for (let t = 0; t < u; t++) {
                    let e = t < h ? p : g;
                    (y[t] = C.slice(A, A + e)),
                      (w[t] = v.encode(y[t])),
                      (A += e),
                      (b = Math.max(b, e));
                  }
                  let E = new Uint8Array(a),
                    S = 0;
                  for (i = 0; i < b; i++)
                    for (o = 0; o < u; o++)
                      i < y[o].length && (E[S++] = y[o][i]);
                  for (i = 0; i < m; i++)
                    for (o = 0; o < u; o++) E[S++] = w[o][i];
                  return E;
                })(i, t, e);
              })(e, n, f),
              y = new a(r.getSymbolSize(e));
            return (
              (function (t, e) {
                let n = t.size,
                  r = u.getPositions(e);
                for (let e = 0; e < r.length; e++) {
                  let i = r[e][0],
                    o = r[e][1];
                  for (let e = -1; e <= 7; e++)
                    if (!(i + e <= -1) && !(n <= i + e))
                      for (let r = -1; r <= 7; r++)
                        o + r <= -1 ||
                          n <= o + r ||
                          ((e >= 0 && e <= 6 && (0 === r || 6 === r)) ||
                          (r >= 0 && r <= 6 && (0 === e || 6 === e)) ||
                          (e >= 2 && e <= 4 && r >= 2 && r <= 4)
                            ? t.set(i + e, o + r, !0, !0)
                            : t.set(i + e, o + r, !1, !0));
                }
              })(y, e),
              (function (t) {
                let e = t.size;
                for (let n = 8; n < e - 8; n++) {
                  let e = n % 2 == 0;
                  t.set(n, 6, e, !0), t.set(6, n, e, !0);
                }
              })(y),
              (function (t, e) {
                let n = s.getPositions(e);
                for (let e = 0; e < n.length; e++) {
                  let r = n[e][0],
                    i = n[e][1];
                  for (let e = -2; e <= 2; e++)
                    for (let n = -2; n <= 2; n++)
                      -2 === e ||
                      2 === e ||
                      -2 === n ||
                      2 === n ||
                      (0 === e && 0 === n)
                        ? t.set(r + e, i + n, !0, !0)
                        : t.set(r + e, i + n, !1, !0);
                }
              })(y, e),
              m(y, n, 0),
              e >= 7 &&
                (function (t, e) {
                  let n, r, i;
                  let o = t.size,
                    a = h.getEncodedBits(e);
                  for (let e = 0; e < 18; e++)
                    (n = Math.floor(e / 3)),
                      (r = (e % 3) + o - 8 - 3),
                      (i = ((a >> e) & 1) == 1),
                      t.set(n, r, i, !0),
                      t.set(r, n, i, !0);
                })(y, e),
              (function (t, e) {
                let n = t.size,
                  r = -1,
                  i = n - 1,
                  o = 7,
                  a = 0;
                for (let s = n - 1; s > 0; s -= 2)
                  for (6 === s && s--; ; ) {
                    for (let n = 0; n < 2; n++)
                      if (!t.isReserved(i, s - n)) {
                        let r = !1;
                        a < e.length && (r = ((e[a] >>> o) & 1) == 1),
                          t.set(i, s - n, r),
                          -1 == --o && (a++, (o = 7));
                      }
                    if ((i += r) < 0 || n <= i) {
                      (i -= r), (r = -r);
                      break;
                    }
                  }
              })(y, A),
              isNaN(i) && (i = c.getBestMask(y, m.bind(null, y, n))),
              c.applyMask(i, y),
              m(y, n, i),
              {
                modules: y,
                version: e,
                errorCorrectionLevel: n,
                maskPattern: i,
                segments: f,
              }
            );
          })(t, n, v, f)
        );
      };
    },
    70648: function (t, e, n) {
      let r = n(32901);
      function i(t) {
        (this.genPoly = void 0),
          (this.degree = t),
          this.degree && this.initialize(this.degree);
      }
      (i.prototype.initialize = function (t) {
        (this.degree = t), (this.genPoly = r.generateECPolynomial(this.degree));
      }),
        (i.prototype.encode = function (t) {
          if (!this.genPoly) throw Error("Encoder not initialized");
          let e = new Uint8Array(t.length + this.degree);
          e.set(t);
          let n = r.mod(e, this.genPoly),
            i = this.degree - n.length;
          if (i > 0) {
            let t = new Uint8Array(this.degree);
            return t.set(n, i), t;
          }
          return n;
        }),
        (t.exports = i);
    },
    75258: function (t, e) {
      let n = "[0-9]+",
        r =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        i =
          "(?:(?![A-Z0-9 $%*+\\-./:]|" +
          (r = r.replace(/u/g, "\\u")) +
          ")(?:.|[\r\n]))+";
      (e.KANJI = RegExp(r, "g")),
        (e.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (e.BYTE = RegExp(i, "g")),
        (e.NUMERIC = RegExp(n, "g")),
        (e.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g"));
      let o = RegExp("^" + r + "$"),
        a = RegExp("^" + n + "$"),
        s = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (e.testKanji = function (t) {
        return o.test(t);
      }),
        (e.testNumeric = function (t) {
          return a.test(t);
        }),
        (e.testAlphanumeric = function (t) {
          return s.test(t);
        });
    },
    34341: function (t, e, n) {
      let r = n(36427),
        i = n(84837),
        o = n(42945),
        a = n(42773),
        s = n(45498),
        u = n(75258),
        c = n(24593),
        l = n(92996);
      function d(t) {
        return unescape(encodeURIComponent(t)).length;
      }
      function h(t, e, n) {
        let r;
        let i = [];
        for (; null !== (r = t.exec(n)); )
          i.push({ data: r[0], index: r.index, mode: e, length: r[0].length });
        return i;
      }
      function f(t) {
        let e, n;
        let i = h(u.NUMERIC, r.NUMERIC, t),
          o = h(u.ALPHANUMERIC, r.ALPHANUMERIC, t);
        return (
          c.isKanjiModeEnabled()
            ? ((e = h(u.BYTE, r.BYTE, t)), (n = h(u.KANJI, r.KANJI, t)))
            : ((e = h(u.BYTE_KANJI, r.BYTE, t)), (n = [])),
          i
            .concat(o, e, n)
            .sort(function (t, e) {
              return t.index - e.index;
            })
            .map(function (t) {
              return { data: t.data, mode: t.mode, length: t.length };
            })
        );
      }
      function p(t, e) {
        switch (e) {
          case r.NUMERIC:
            return i.getBitsLength(t);
          case r.ALPHANUMERIC:
            return o.getBitsLength(t);
          case r.KANJI:
            return s.getBitsLength(t);
          case r.BYTE:
            return a.getBitsLength(t);
        }
      }
      function g(t, e) {
        let n;
        let u = r.getBestModeForData(t);
        if ((n = r.from(e, u)) !== r.BYTE && n.bit < u.bit)
          throw Error(
            '"' +
              t +
              '" cannot be encoded with mode ' +
              r.toString(n) +
              ".\n Suggested mode is: " +
              r.toString(u)
          );
        switch ((n !== r.KANJI || c.isKanjiModeEnabled() || (n = r.BYTE), n)) {
          case r.NUMERIC:
            return new i(t);
          case r.ALPHANUMERIC:
            return new o(t);
          case r.KANJI:
            return new s(t);
          case r.BYTE:
            return new a(t);
        }
      }
      (e.fromArray = function (t) {
        return t.reduce(function (t, e) {
          return (
            "string" == typeof e
              ? t.push(g(e, null))
              : e.data && t.push(g(e.data, e.mode)),
            t
          );
        }, []);
      }),
        (e.fromString = function (t, n) {
          let i = (function (t, e) {
              let n = {},
                i = { start: {} },
                o = ["start"];
              for (let a = 0; a < t.length; a++) {
                let s = t[a],
                  u = [];
                for (let t = 0; t < s.length; t++) {
                  let c = s[t],
                    l = "" + a + t;
                  u.push(l), (n[l] = { node: c, lastCount: 0 }), (i[l] = {});
                  for (let t = 0; t < o.length; t++) {
                    let a = o[t];
                    n[a] && n[a].node.mode === c.mode
                      ? ((i[a][l] =
                          p(n[a].lastCount + c.length, c.mode) -
                          p(n[a].lastCount, c.mode)),
                        (n[a].lastCount += c.length))
                      : (n[a] && (n[a].lastCount = c.length),
                        (i[a][l] =
                          p(c.length, c.mode) +
                          4 +
                          r.getCharCountIndicator(c.mode, e)));
                  }
                }
                o = u;
              }
              for (let t = 0; t < o.length; t++) i[o[t]].end = 0;
              return { map: i, table: n };
            })(
              (function (t) {
                let e = [];
                for (let n = 0; n < t.length; n++) {
                  let i = t[n];
                  switch (i.mode) {
                    case r.NUMERIC:
                      e.push([
                        i,
                        {
                          data: i.data,
                          mode: r.ALPHANUMERIC,
                          length: i.length,
                        },
                        { data: i.data, mode: r.BYTE, length: i.length },
                      ]);
                      break;
                    case r.ALPHANUMERIC:
                      e.push([
                        i,
                        { data: i.data, mode: r.BYTE, length: i.length },
                      ]);
                      break;
                    case r.KANJI:
                      e.push([
                        i,
                        { data: i.data, mode: r.BYTE, length: d(i.data) },
                      ]);
                      break;
                    case r.BYTE:
                      e.push([
                        { data: i.data, mode: r.BYTE, length: d(i.data) },
                      ]);
                  }
                }
                return e;
              })(f(t, c.isKanjiModeEnabled())),
              n
            ),
            o = l.find_path(i.map, "start", "end"),
            a = [];
          for (let t = 1; t < o.length - 1; t++) a.push(i.table[o[t]].node);
          return e.fromArray(
            a.reduce(function (t, e) {
              let n = t.length - 1 >= 0 ? t[t.length - 1] : null;
              return (
                n && n.mode === e.mode
                  ? (t[t.length - 1].data += e.data)
                  : t.push(e),
                t
              );
            }, [])
          );
        }),
        (e.rawSplit = function (t) {
          return e.fromArray(f(t, c.isKanjiModeEnabled()));
        });
    },
    24593: function (t, e) {
      let n;
      let r = [
        0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
        655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828,
        1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532,
        3706,
      ];
      (e.getSymbolSize = function (t) {
        if (!t) throw Error('"version" cannot be null or undefined');
        if (t < 1 || t > 40)
          throw Error('"version" should be in range from 1 to 40');
        return 4 * t + 17;
      }),
        (e.getSymbolTotalCodewords = function (t) {
          return r[t];
        }),
        (e.getBCHDigit = function (t) {
          let e = 0;
          for (; 0 !== t; ) e++, (t >>>= 1);
          return e;
        }),
        (e.setToSJISFunction = function (t) {
          if ("function" != typeof t)
            throw Error('"toSJISFunc" is not a valid function.');
          n = t;
        }),
        (e.isKanjiModeEnabled = function () {
          return void 0 !== n;
        }),
        (e.toSJIS = function (t) {
          return n(t);
        });
    },
    41715: function (t, e) {
      e.isValid = function (t) {
        return !isNaN(t) && t >= 1 && t <= 40;
      };
    },
    841: function (t, e, n) {
      let r = n(24593),
        i = n(95159),
        o = n(75518),
        a = n(36427),
        s = n(41715),
        u = r.getBCHDigit(7973);
      function c(t, e) {
        return a.getCharCountIndicator(t, e) + 4;
      }
      (e.from = function (t, e) {
        return s.isValid(t) ? parseInt(t, 10) : e;
      }),
        (e.getCapacity = function (t, e, n) {
          if (!s.isValid(t)) throw Error("Invalid QR Code version");
          void 0 === n && (n = a.BYTE);
          let o =
            (r.getSymbolTotalCodewords(t) - i.getTotalCodewordsCount(t, e)) * 8;
          if (n === a.MIXED) return o;
          let u = o - c(n, t);
          switch (n) {
            case a.NUMERIC:
              return Math.floor((u / 10) * 3);
            case a.ALPHANUMERIC:
              return Math.floor((u / 11) * 2);
            case a.KANJI:
              return Math.floor(u / 13);
            case a.BYTE:
            default:
              return Math.floor(u / 8);
          }
        }),
        (e.getBestVersionForData = function (t, n) {
          let r;
          let i = o.from(n, o.M);
          if (Array.isArray(t)) {
            if (t.length > 1)
              return (function (t, n) {
                for (let r = 1; r <= 40; r++)
                  if (
                    (function (t, e) {
                      let n = 0;
                      return (
                        t.forEach(function (t) {
                          let r = c(t.mode, e);
                          n += r + t.getBitsLength();
                        }),
                        n
                      );
                    })(t, r) <= e.getCapacity(r, n, a.MIXED)
                  )
                    return r;
              })(t, i);
            if (0 === t.length) return 1;
            r = t[0];
          } else r = t;
          return (function (t, n, r) {
            for (let i = 1; i <= 40; i++)
              if (n <= e.getCapacity(i, r, t)) return i;
          })(r.mode, r.getLength(), i);
        }),
        (e.getEncodedBits = function (t) {
          if (!s.isValid(t) || t < 7) throw Error("Invalid QR Code version");
          let e = t << 12;
          for (; r.getBCHDigit(e) - u >= 0; )
            e ^= 7973 << (r.getBCHDigit(e) - u);
          return (t << 12) | e;
        });
    },
    83073: function (t, e, n) {
      let r = n(50026);
      (e.render = function (t, e, n) {
        var i;
        let o = n,
          a = e;
        void 0 !== o || (e && e.getContext) || ((o = e), (e = void 0)),
          e ||
            (a = (function () {
              try {
                return document.createElement("canvas");
              } catch (t) {
                throw Error("You need to specify a canvas element");
              }
            })()),
          (o = r.getOptions(o));
        let s = r.getImageWidth(t.modules.size, o),
          u = a.getContext("2d"),
          c = u.createImageData(s, s);
        return (
          r.qrToImageData(c.data, t, o),
          (i = a),
          u.clearRect(0, 0, i.width, i.height),
          i.style || (i.style = {}),
          (i.height = s),
          (i.width = s),
          (i.style.height = s + "px"),
          (i.style.width = s + "px"),
          u.putImageData(c, 0, 0),
          a
        );
      }),
        (e.renderToDataURL = function (t, n, r) {
          let i = r;
          void 0 !== i || (n && n.getContext) || ((i = n), (n = void 0)),
            i || (i = {});
          let o = e.render(t, n, i),
            a = i.type || "image/png",
            s = i.rendererOpts || {};
          return o.toDataURL(a, s.quality);
        });
    },
    89065: function (t, e, n) {
      let r = n(50026);
      function i(t, e) {
        let n = t.a / 255,
          r = e + '="' + t.hex + '"';
        return n < 1
          ? r + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"'
          : r;
      }
      function o(t, e, n) {
        let r = t + e;
        return void 0 !== n && (r += " " + n), r;
      }
      e.render = function (t, e, n) {
        let a = r.getOptions(e),
          s = t.modules.size,
          u = t.modules.data,
          c = s + 2 * a.margin,
          l = a.color.light.a
            ? "<path " +
              i(a.color.light, "fill") +
              ' d="M0 0h' +
              c +
              "v" +
              c +
              'H0z"/>'
            : "",
          d =
            "<path " +
            i(a.color.dark, "stroke") +
            ' d="' +
            (function (t, e, n) {
              let r = "",
                i = 0,
                a = !1,
                s = 0;
              for (let u = 0; u < t.length; u++) {
                let c = Math.floor(u % e),
                  l = Math.floor(u / e);
                c || a || (a = !0),
                  t[u]
                    ? (s++,
                      (u > 0 && c > 0 && t[u - 1]) ||
                        ((r += a ? o("M", c + n, 0.5 + l + n) : o("m", i, 0)),
                        (i = 0),
                        (a = !1)),
                      (c + 1 < e && t[u + 1]) || ((r += o("h", s)), (s = 0)))
                    : i++;
              }
              return r;
            })(u, s, a.margin) +
            '"/>',
          h =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (a.width
              ? 'width="' + a.width + '" height="' + a.width + '" '
              : "") +
            ('viewBox="0 0 ' + c) +
            " " +
            c +
            '" shape-rendering="crispEdges">' +
            l +
            d +
            "</svg>\n";
        return "function" == typeof n && n(null, h), h;
      };
    },
    50026: function (t, e) {
      function n(t) {
        if (("number" == typeof t && (t = t.toString()), "string" != typeof t))
          throw Error("Color should be defined as hex string");
        let e = t.slice().replace("#", "").split("");
        if (e.length < 3 || 5 === e.length || e.length > 8)
          throw Error("Invalid hex color: " + t);
        (3 === e.length || 4 === e.length) &&
          (e = Array.prototype.concat.apply(
            [],
            e.map(function (t) {
              return [t, t];
            })
          )),
          6 === e.length && e.push("F", "F");
        let n = parseInt(e.join(""), 16);
        return {
          r: (n >> 24) & 255,
          g: (n >> 16) & 255,
          b: (n >> 8) & 255,
          a: 255 & n,
          hex: "#" + e.slice(0, 6).join(""),
        };
      }
      (e.getOptions = function (t) {
        t || (t = {}), t.color || (t.color = {});
        let e =
            void 0 === t.margin || null === t.margin || t.margin < 0
              ? 4
              : t.margin,
          r = t.width && t.width >= 21 ? t.width : void 0,
          i = t.scale || 4;
        return {
          width: r,
          scale: r ? 4 : i,
          margin: e,
          color: {
            dark: n(t.color.dark || "#000000ff"),
            light: n(t.color.light || "#ffffffff"),
          },
          type: t.type,
          rendererOpts: t.rendererOpts || {},
        };
      }),
        (e.getScale = function (t, e) {
          return e.width && e.width >= t + 2 * e.margin
            ? e.width / (t + 2 * e.margin)
            : e.scale;
        }),
        (e.getImageWidth = function (t, n) {
          let r = e.getScale(t, n);
          return Math.floor((t + 2 * n.margin) * r);
        }),
        (e.qrToImageData = function (t, n, r) {
          let i = n.modules.size,
            o = n.modules.data,
            a = e.getScale(i, r),
            s = Math.floor((i + 2 * r.margin) * a),
            u = r.margin * a,
            c = [r.color.light, r.color.dark];
          for (let e = 0; e < s; e++)
            for (let n = 0; n < s; n++) {
              let l = (e * s + n) * 4,
                d = r.color.light;
              e >= u &&
                n >= u &&
                e < s - u &&
                n < s - u &&
                (d =
                  c[
                    o[Math.floor((e - u) / a) * i + Math.floor((n - u) / a)]
                      ? 1
                      : 0
                  ]),
                (t[l++] = d.r),
                (t[l++] = d.g),
                (t[l++] = d.b),
                (t[l] = d.a);
            }
        });
    },
    75403: function (t, e) {
      "use strict";
      /**
       * @license React
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n,
        r = Symbol.for("react.element"),
        i = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        a = Symbol.for("react.strict_mode"),
        s = Symbol.for("react.profiler"),
        u = Symbol.for("react.provider"),
        c = Symbol.for("react.context"),
        l = Symbol.for("react.server_context"),
        d = Symbol.for("react.forward_ref"),
        h = Symbol.for("react.suspense"),
        f = Symbol.for("react.suspense_list"),
        p = Symbol.for("react.memo"),
        g = Symbol.for("react.lazy"),
        m = Symbol.for("react.offscreen");
      (n = Symbol.for("react.module.reference")),
        (e.isValidElementType = function (t) {
          return (
            "string" == typeof t ||
            "function" == typeof t ||
            t === o ||
            t === s ||
            t === a ||
            t === h ||
            t === f ||
            t === m ||
            ("object" == typeof t &&
              null !== t &&
              (t.$$typeof === g ||
                t.$$typeof === p ||
                t.$$typeof === u ||
                t.$$typeof === c ||
                t.$$typeof === d ||
                t.$$typeof === n ||
                void 0 !== t.getModuleId))
          );
        }),
        (e.typeOf = function (t) {
          if ("object" == typeof t && null !== t) {
            var e = t.$$typeof;
            switch (e) {
              case r:
                switch ((t = t.type)) {
                  case o:
                  case s:
                  case a:
                  case h:
                  case f:
                    return t;
                  default:
                    switch ((t = t && t.$$typeof)) {
                      case l:
                      case c:
                      case d:
                      case g:
                      case p:
                      case u:
                        return t;
                      default:
                        return e;
                    }
                }
              case i:
                return e;
            }
          }
        });
    },
    19379: function (t, e, n) {
      "use strict";
      t.exports = n(75403);
    },
    52616: function (t, e, n) {
      "use strict";
      n.d(e, {
        Y: function () {
          return s;
        },
      });
      var r = n(15039),
        i = [
          "preEnter",
          "entering",
          "entered",
          "preExit",
          "exiting",
          "exited",
          "unmounted",
        ],
        o = function (t) {
          return t ? 6 : 5;
        },
        a = function (t, e, n, r, o) {
          clearTimeout(r.current),
            e(t),
            (n.current = t),
            o && o({ state: i[t] });
        },
        s = function (t) {
          var e,
            n,
            s = void 0 === t ? {} : t,
            u = s.enter,
            c = void 0 === u || u,
            l = s.exit,
            d = void 0 === l || l,
            h = s.preEnter,
            f = s.preExit,
            p = s.timeout,
            g = s.initialEntered,
            m = s.mountOnEnter,
            v = s.unmountOnExit,
            A = s.onChange,
            y = (0, r.useState)(g ? 2 : o(m)),
            w = y[0],
            b = y[1],
            C = (0, r.useRef)(w),
            E = (0, r.useRef)();
          "object" == typeof p ? ((e = p.enter), (n = p.exit)) : (e = n = p);
          var S = (0, r.useCallback)(
              function () {
                var t;
                switch (C.current) {
                  case 1:
                  case 0:
                    t = 2;
                    break;
                  case 4:
                  case 3:
                    t = o(v);
                }
                void 0 !== t && a(t, b, C, E, A);
              },
              [A, v]
            ),
            M = (0, r.useCallback)(
              function (t) {
                var r = function t(r) {
                    switch ((a(r, b, C, E, A), r)) {
                      case 1:
                        e >= 0 && (E.current = setTimeout(S, e));
                        break;
                      case 4:
                        n >= 0 && (E.current = setTimeout(S, n));
                        break;
                      case 0:
                      case 3:
                        E.current = setTimeout(function () {
                          return t(r + 1);
                        }, 0);
                    }
                  },
                  i = C.current <= 2;
                "boolean" != typeof t && (t = !i),
                  t
                    ? i || r(c ? (h ? 0 : 1) : 2)
                    : i && r(d ? (f ? 3 : 4) : o(v));
              },
              [S, A, c, d, h, f, e, n, v]
            );
          return (
            (0, r.useEffect)(function () {
              return function () {
                return clearTimeout(E.current);
              };
            }, []),
            [i[w], M, S]
          );
        };
    },
    91456: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return a;
        },
      });
      var r = n(15039),
        i = n(44975),
        o = n.n(i);
      function a(t) {
        var e;
        let {
            debounce: n,
            scroll: i,
            polyfill: a,
            offsetSize: s,
          } = void 0 === t ? { debounce: 0, scroll: !1, offsetSize: !1 } : t,
          c =
            a ||
            ("undefined" == typeof window ? class {} : window.ResizeObserver);
        if (!c)
          throw Error(
            "This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills"
          );
        let [l, d] = (0, r.useState)({
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            bottom: 0,
            right: 0,
            x: 0,
            y: 0,
          }),
          h = (0, r.useRef)({
            element: null,
            scrollContainers: null,
            resizeObserver: null,
            lastBounds: l,
          }),
          f = n ? ("number" == typeof n ? n : n.scroll) : null,
          p = n ? ("number" == typeof n ? n : n.resize) : null,
          g = (0, r.useRef)(!1);
        (0, r.useEffect)(() => ((g.current = !0), () => void (g.current = !1)));
        let [m, v, A] = (0, r.useMemo)(() => {
          let t = () => {
            if (!h.current.element) return;
            let {
                left: t,
                top: e,
                width: n,
                height: r,
                bottom: i,
                right: o,
                x: a,
                y: c,
              } = h.current.element.getBoundingClientRect(),
              l = {
                left: t,
                top: e,
                width: n,
                height: r,
                bottom: i,
                right: o,
                x: a,
                y: c,
              };
            h.current.element instanceof HTMLElement &&
              s &&
              ((l.height = h.current.element.offsetHeight),
              (l.width = h.current.element.offsetWidth)),
              Object.freeze(l),
              g.current &&
                !u(h.current.lastBounds, l) &&
                d((h.current.lastBounds = l));
          };
          return [t, p ? o()(t, p) : t, f ? o()(t, f) : t];
        }, [d, s, f, p]);
        function y() {
          h.current.scrollContainers &&
            (h.current.scrollContainers.forEach((t) =>
              t.removeEventListener("scroll", A, !0)
            ),
            (h.current.scrollContainers = null)),
            h.current.resizeObserver &&
              (h.current.resizeObserver.disconnect(),
              (h.current.resizeObserver = null));
        }
        function w() {
          h.current.element &&
            ((h.current.resizeObserver = new c(A)),
            h.current.resizeObserver.observe(h.current.element),
            i &&
              h.current.scrollContainers &&
              h.current.scrollContainers.forEach((t) =>
                t.addEventListener("scroll", A, { capture: !0, passive: !0 })
              ));
        }
        return (
          (e = !!i),
          (0, r.useEffect)(() => {
            if (e)
              return (
                window.addEventListener("scroll", A, {
                  capture: !0,
                  passive: !0,
                }),
                () => void window.removeEventListener("scroll", A, !0)
              );
          }, [A, e]),
          (0, r.useEffect)(
            () => (
              window.addEventListener("resize", v),
              () => void window.removeEventListener("resize", v)
            ),
            [v]
          ),
          (0, r.useEffect)(() => {
            y(), w();
          }, [i, A, v]),
          (0, r.useEffect)(() => y, []),
          [
            (t) => {
              t &&
                t !== h.current.element &&
                (y(),
                (h.current.element = t),
                (h.current.scrollContainers = (function t(e) {
                  let n = [];
                  if (!e || e === document.body) return n;
                  let {
                    overflow: r,
                    overflowX: i,
                    overflowY: o,
                  } = window.getComputedStyle(e);
                  return (
                    [r, i, o].some((t) => "auto" === t || "scroll" === t) &&
                      n.push(e),
                    [...n, ...t(e.parentElement)]
                  );
                })(t)),
                w());
            },
            l,
            m,
          ]
        );
      }
      let s = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
        u = (t, e) => s.every((n) => t[n] === e[n]);
    },
    54772: function (t, e, n) {
      "use strict";
      var r = (function () {
          if ("undefined" != typeof Map) return Map;
          function t(t, e) {
            var n = -1;
            return (
              t.some(function (t, r) {
                return t[0] === e && ((n = r), !0);
              }),
              n
            );
          }
          return (function () {
            function e() {
              this.__entries__ = [];
            }
            return (
              Object.defineProperty(e.prototype, "size", {
                get: function () {
                  return this.__entries__.length;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.get = function (e) {
                var n = t(this.__entries__, e),
                  r = this.__entries__[n];
                return r && r[1];
              }),
              (e.prototype.set = function (e, n) {
                var r = t(this.__entries__, e);
                ~r
                  ? (this.__entries__[r][1] = n)
                  : this.__entries__.push([e, n]);
              }),
              (e.prototype.delete = function (e) {
                var n = this.__entries__,
                  r = t(n, e);
                ~r && n.splice(r, 1);
              }),
              (e.prototype.has = function (e) {
                return !!~t(this.__entries__, e);
              }),
              (e.prototype.clear = function () {
                this.__entries__.splice(0);
              }),
              (e.prototype.forEach = function (t, e) {
                void 0 === e && (e = null);
                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                  var i = r[n];
                  t.call(e, i[1], i[0]);
                }
              }),
              e
            );
          })();
        })(),
        i =
          "undefined" != typeof window &&
          "undefined" != typeof document &&
          window.document === document,
        o =
          void 0 !== n.g && n.g.Math === Math
            ? n.g
            : "undefined" != typeof self && self.Math === Math
            ? self
            : "undefined" != typeof window && window.Math === Math
            ? window
            : Function("return this")(),
        a =
          "function" == typeof requestAnimationFrame
            ? requestAnimationFrame.bind(o)
            : function (t) {
                return setTimeout(function () {
                  return t(Date.now());
                }, 1e3 / 60);
              },
        s = [
          "top",
          "right",
          "bottom",
          "left",
          "width",
          "height",
          "size",
          "weight",
        ],
        u = "undefined" != typeof MutationObserver,
        c = (function () {
          function t() {
            (this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = (function (t, e) {
                var n = !1,
                  r = !1,
                  i = 0;
                function o() {
                  n && ((n = !1), t()), r && u();
                }
                function s() {
                  a(o);
                }
                function u() {
                  var t = Date.now();
                  if (n) {
                    if (t - i < 2) return;
                    r = !0;
                  } else (n = !0), (r = !1), setTimeout(s, 20);
                  i = t;
                }
                return u;
              })(this.refresh.bind(this), 0));
          }
          return (
            (t.prototype.addObserver = function (t) {
              ~this.observers_.indexOf(t) || this.observers_.push(t),
                this.connected_ || this.connect_();
            }),
            (t.prototype.removeObserver = function (t) {
              var e = this.observers_,
                n = e.indexOf(t);
              ~n && e.splice(n, 1),
                !e.length && this.connected_ && this.disconnect_();
            }),
            (t.prototype.refresh = function () {
              this.updateObservers_() && this.refresh();
            }),
            (t.prototype.updateObservers_ = function () {
              var t = this.observers_.filter(function (t) {
                return t.gatherActive(), t.hasActive();
              });
              return (
                t.forEach(function (t) {
                  return t.broadcastActive();
                }),
                t.length > 0
              );
            }),
            (t.prototype.connect_ = function () {
              i &&
                !this.connected_ &&
                (document.addEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.addEventListener("resize", this.refresh),
                u
                  ? ((this.mutationsObserver_ = new MutationObserver(
                      this.refresh
                    )),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener(
                      "DOMSubtreeModified",
                      this.refresh
                    ),
                    (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0));
            }),
            (t.prototype.disconnect_ = function () {
              i &&
                this.connected_ &&
                (document.removeEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.removeEventListener("resize", this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ &&
                  document.removeEventListener(
                    "DOMSubtreeModified",
                    this.refresh
                  ),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1));
            }),
            (t.prototype.onTransitionEnd_ = function (t) {
              var e = t.propertyName,
                n = void 0 === e ? "" : e;
              s.some(function (t) {
                return !!~n.indexOf(t);
              }) && this.refresh();
            }),
            (t.getInstance = function () {
              return (
                this.instance_ || (this.instance_ = new t()), this.instance_
              );
            }),
            (t.instance_ = null),
            t
          );
        })(),
        l = function (t, e) {
          for (var n = 0, r = Object.keys(e); n < r.length; n++) {
            var i = r[n];
            Object.defineProperty(t, i, {
              value: e[i],
              enumerable: !1,
              writable: !1,
              configurable: !0,
            });
          }
          return t;
        },
        d = function (t) {
          return (t && t.ownerDocument && t.ownerDocument.defaultView) || o;
        },
        h = m(0, 0, 0, 0);
      function f(t) {
        return parseFloat(t) || 0;
      }
      function p(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        return e.reduce(function (e, n) {
          return e + f(t["border-" + n + "-width"]);
        }, 0);
      }
      var g =
        "undefined" != typeof SVGGraphicsElement
          ? function (t) {
              return t instanceof d(t).SVGGraphicsElement;
            }
          : function (t) {
              return (
                t instanceof d(t).SVGElement && "function" == typeof t.getBBox
              );
            };
      function m(t, e, n, r) {
        return { x: t, y: e, width: n, height: r };
      }
      var v = (function () {
          function t(t) {
            (this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = m(0, 0, 0, 0)),
              (this.target = t);
          }
          return (
            (t.prototype.isActive = function () {
              var t = (function (t) {
                if (!i) return h;
                if (g(t)) {
                  var e;
                  return m(0, 0, (e = t.getBBox()).width, e.height);
                }
                return (function (t) {
                  var e = t.clientWidth,
                    n = t.clientHeight;
                  if (!e && !n) return h;
                  var r = d(t).getComputedStyle(t),
                    i = (function (t) {
                      for (
                        var e = {},
                          n = 0,
                          r = ["top", "right", "bottom", "left"];
                        n < r.length;
                        n++
                      ) {
                        var i = r[n],
                          o = t["padding-" + i];
                        e[i] = f(o);
                      }
                      return e;
                    })(r),
                    o = i.left + i.right,
                    a = i.top + i.bottom,
                    s = f(r.width),
                    u = f(r.height);
                  if (
                    ("border-box" === r.boxSizing &&
                      (Math.round(s + o) !== e &&
                        (s -= p(r, "left", "right") + o),
                      Math.round(u + a) !== n &&
                        (u -= p(r, "top", "bottom") + a)),
                    t !== d(t).document.documentElement)
                  ) {
                    var c = Math.round(s + o) - e,
                      l = Math.round(u + a) - n;
                    1 !== Math.abs(c) && (s -= c),
                      1 !== Math.abs(l) && (u -= l);
                  }
                  return m(i.left, i.top, s, u);
                })(t);
              })(this.target);
              return (
                (this.contentRect_ = t),
                t.width !== this.broadcastWidth ||
                  t.height !== this.broadcastHeight
              );
            }),
            (t.prototype.broadcastRect = function () {
              var t = this.contentRect_;
              return (
                (this.broadcastWidth = t.width),
                (this.broadcastHeight = t.height),
                t
              );
            }),
            t
          );
        })(),
        A = function (t, e) {
          var n,
            r,
            i,
            o,
            a,
            s =
              ((n = e.x),
              (r = e.y),
              (i = e.width),
              (o = e.height),
              l(
                (a = Object.create(
                  ("undefined" != typeof DOMRectReadOnly
                    ? DOMRectReadOnly
                    : Object
                  ).prototype
                )),
                {
                  x: n,
                  y: r,
                  width: i,
                  height: o,
                  top: r,
                  right: n + i,
                  bottom: o + r,
                  left: n,
                }
              ),
              a);
          l(this, { target: t, contentRect: s });
        },
        y = (function () {
          function t(t, e, n) {
            if (
              ((this.activeObservations_ = []),
              (this.observations_ = new r()),
              "function" != typeof t)
            )
              throw TypeError(
                "The callback provided as parameter 1 is not a function."
              );
            (this.callback_ = t),
              (this.controller_ = e),
              (this.callbackCtx_ = n);
          }
          return (
            (t.prototype.observe = function (t) {
              if (!arguments.length)
                throw TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof d(t).Element))
                  throw TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) ||
                  (e.set(t, new v(t)),
                  this.controller_.addObserver(this),
                  this.controller_.refresh());
              }
            }),
            (t.prototype.unobserve = function (t) {
              if (!arguments.length)
                throw TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof d(t).Element))
                  throw TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) &&
                  (e.delete(t),
                  e.size || this.controller_.removeObserver(this));
              }
            }),
            (t.prototype.disconnect = function () {
              this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this);
            }),
            (t.prototype.gatherActive = function () {
              var t = this;
              this.clearActive(),
                this.observations_.forEach(function (e) {
                  e.isActive() && t.activeObservations_.push(e);
                });
            }),
            (t.prototype.broadcastActive = function () {
              if (this.hasActive()) {
                var t = this.callbackCtx_,
                  e = this.activeObservations_.map(function (t) {
                    return new A(t.target, t.broadcastRect());
                  });
                this.callback_.call(t, e, t), this.clearActive();
              }
            }),
            (t.prototype.clearActive = function () {
              this.activeObservations_.splice(0);
            }),
            (t.prototype.hasActive = function () {
              return this.activeObservations_.length > 0;
            }),
            t
          );
        })(),
        w = "undefined" != typeof WeakMap ? new WeakMap() : new r(),
        b = function t(e) {
          if (!(this instanceof t))
            throw TypeError("Cannot call a class as a function.");
          if (!arguments.length)
            throw TypeError("1 argument required, but only 0 present.");
          var n = new y(e, c.getInstance(), this);
          w.set(this, n);
        };
      ["observe", "unobserve", "disconnect"].forEach(function (t) {
        b.prototype[t] = function () {
          var e;
          return (e = w.get(this))[t].apply(e, arguments);
        };
      });
      var C = void 0 !== o.ResizeObserver ? o.ResizeObserver : b;
      e.Z = C;
    },
    31426: function (t) {
      t.exports = function (t, e, n, r) {
        var i = n ? n.call(r, t, e) : void 0;
        if (void 0 !== i) return !!i;
        if (t === e) return !0;
        if ("object" != typeof t || !t || "object" != typeof e || !e) return !1;
        var o = Object.keys(t),
          a = Object.keys(e);
        if (o.length !== a.length) return !1;
        for (
          var s = Object.prototype.hasOwnProperty.bind(e), u = 0;
          u < o.length;
          u++
        ) {
          var c = o[u];
          if (!s(c)) return !1;
          var l = t[c],
            d = e[c];
          if (
            !1 === (i = n ? n.call(r, l, d, c) : void 0) ||
            (void 0 === i && l !== d)
          )
            return !1;
        }
        return !0;
      };
    },
    79072: function (t, e, n) {
      "use strict";
      n.d(e, {
        f6: function () {
          return tP;
        },
        iv: function () {
          return ty;
        },
        ZP: function () {
          return tR;
        },
        F4: function () {
          return tk;
        },
      });
      var r,
        i,
        o,
        a = n(19379),
        s = n(15039),
        u = n(31426),
        c = n.n(u),
        l = function (t) {
          function e(t, e, r) {
            var i = e.trim().split(p);
            e = i;
            var o = i.length,
              a = t.length;
            switch (a) {
              case 0:
              case 1:
                var s = 0;
                for (t = 0 === a ? "" : t[0] + " "; s < o; ++s)
                  e[s] = n(t, e[s], r).trim();
                break;
              default:
                var u = (s = 0);
                for (e = []; s < o; ++s)
                  for (var c = 0; c < a; ++c)
                    e[u++] = n(t[c] + " ", i[s], r).trim();
            }
            return e;
          }
          function n(t, e, n) {
            var r = e.charCodeAt(0);
            switch ((33 > r && (r = (e = e.trim()).charCodeAt(0)), r)) {
              case 38:
                return e.replace(g, "$1" + t.trim());
              case 58:
                return t.trim() + e.replace(g, "$1" + t.trim());
              default:
                if (0 < 1 * n && 0 < e.indexOf("\f"))
                  return e.replace(
                    g,
                    (58 === t.charCodeAt(0) ? "" : "$1") + t.trim()
                  );
            }
            return t + e;
          }
          function r(t, e, n, o) {
            var a = t + ";",
              s = 2 * e + 3 * n + 4 * o;
            if (944 === s) {
              t = a.indexOf(":", 9) + 1;
              var u = a.substring(t, a.length - 1).trim();
              return (
                (u = a.substring(0, t).trim() + u + ";"),
                1 === B || (2 === B && i(u, 1)) ? "-webkit-" + u + u : u
              );
            }
            if (0 === B || (2 === B && !i(a, 1))) return a;
            switch (s) {
              case 1015:
                return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
              case 951:
                return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
              case 963:
                return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
              case 1009:
                if (100 !== a.charCodeAt(4)) break;
              case 969:
              case 942:
                return "-webkit-" + a + a;
              case 978:
                return "-webkit-" + a + "-moz-" + a + a;
              case 1019:
              case 983:
                return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
              case 883:
                if (45 === a.charCodeAt(8)) return "-webkit-" + a + a;
                if (0 < a.indexOf("image-set(", 11))
                  return a.replace(M, "$1-webkit-$2") + a;
                break;
              case 932:
                if (45 === a.charCodeAt(4))
                  switch (a.charCodeAt(5)) {
                    case 103:
                      return (
                        "-webkit-box-" +
                        a.replace("-grow", "") +
                        "-webkit-" +
                        a +
                        "-ms-" +
                        a.replace("grow", "positive") +
                        a
                      );
                    case 115:
                      return (
                        "-webkit-" +
                        a +
                        "-ms-" +
                        a.replace("shrink", "negative") +
                        a
                      );
                    case 98:
                      return (
                        "-webkit-" +
                        a +
                        "-ms-" +
                        a.replace("basis", "preferred-size") +
                        a
                      );
                  }
                return "-webkit-" + a + "-ms-" + a + a;
              case 964:
                return "-webkit-" + a + "-ms-flex-" + a + a;
              case 1023:
                if (99 !== a.charCodeAt(8)) break;
                return (
                  "-webkit-box-pack" +
                  (u = a
                    .substring(a.indexOf(":", 15))
                    .replace("flex-", "")
                    .replace("space-between", "justify")) +
                  "-webkit-" +
                  a +
                  "-ms-flex-pack" +
                  u +
                  a
                );
              case 1005:
                return h.test(a)
                  ? a.replace(d, ":-webkit-") + a.replace(d, ":-moz-") + a
                  : a;
              case 1e3:
                switch (
                  ((e = (u = a.substring(13).trim()).indexOf("-") + 1),
                  u.charCodeAt(0) + u.charCodeAt(e))
                ) {
                  case 226:
                    u = a.replace(y, "tb");
                    break;
                  case 232:
                    u = a.replace(y, "tb-rl");
                    break;
                  case 220:
                    u = a.replace(y, "lr");
                    break;
                  default:
                    return a;
                }
                return "-webkit-" + a + "-ms-" + u + a;
              case 1017:
                if (-1 === a.indexOf("sticky", 9)) break;
              case 975:
                switch (
                  ((e = (a = t).length - 10),
                  (s =
                    (u = (33 === a.charCodeAt(e) ? a.substring(0, e) : a)
                      .substring(t.indexOf(":", 7) + 1)
                      .trim()).charCodeAt(0) +
                    (0 | u.charCodeAt(7))))
                ) {
                  case 203:
                    if (111 > u.charCodeAt(8)) break;
                  case 115:
                    a = a.replace(u, "-webkit-" + u) + ";" + a;
                    break;
                  case 207:
                  case 102:
                    a =
                      a.replace(
                        u,
                        "-webkit-" + (102 < s ? "inline-" : "") + "box"
                      ) +
                      ";" +
                      a.replace(u, "-webkit-" + u) +
                      ";" +
                      a.replace(u, "-ms-" + u + "box") +
                      ";" +
                      a;
                }
                return a + ";";
              case 938:
                if (45 === a.charCodeAt(5))
                  switch (a.charCodeAt(6)) {
                    case 105:
                      return (
                        (u = a.replace("-items", "")),
                        "-webkit-" +
                          a +
                          "-webkit-box-" +
                          u +
                          "-ms-flex-" +
                          u +
                          a
                      );
                    case 115:
                      return (
                        "-webkit-" + a + "-ms-flex-item-" + a.replace(C, "") + a
                      );
                    default:
                      return (
                        "-webkit-" +
                        a +
                        "-ms-flex-line-pack" +
                        a.replace("align-content", "").replace(C, "") +
                        a
                      );
                  }
                break;
              case 973:
              case 989:
                if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
              case 931:
              case 953:
                if (!0 === S.test(t))
                  return 115 ===
                    (u = t.substring(t.indexOf(":") + 1)).charCodeAt(0)
                    ? r(
                        t.replace("stretch", "fill-available"),
                        e,
                        n,
                        o
                      ).replace(":fill-available", ":stretch")
                    : a.replace(u, "-webkit-" + u) +
                        a.replace(u, "-moz-" + u.replace("fill-", "")) +
                        a;
                break;
              case 962:
                if (
                  ((a =
                    "-webkit-" +
                    a +
                    (102 === a.charCodeAt(5) ? "-ms-" + a : "") +
                    a),
                  211 === n + o &&
                    105 === a.charCodeAt(13) &&
                    0 < a.indexOf("transform", 10))
                )
                  return (
                    a
                      .substring(0, a.indexOf(";", 27) + 1)
                      .replace(f, "$1-webkit-$2") + a
                  );
            }
            return a;
          }
          function i(t, e) {
            var n = t.indexOf(1 === e ? ":" : "{"),
              r = t.substring(0, 3 !== e ? n : 10);
            return (
              (n = t.substring(n + 1, t.length - 1)),
              T(2 !== e ? r : r.replace(E, "$1"), n, e)
            );
          }
          function o(t, e) {
            var n = r(e, e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2));
            return n !== e + ";"
              ? n.replace(b, " or ($1)").substring(4)
              : "(" + e + ")";
          }
          function a(t, e, n, r, i, o, a, s, c, l) {
            for (var d, h = 0, f = e; h < D; ++h)
              switch ((d = R[h].call(u, t, f, n, r, i, o, a, s, c, l))) {
                case void 0:
                case !1:
                case !0:
                case null:
                  break;
                default:
                  f = d;
              }
            if (f !== e) return f;
          }
          function s(t) {
            return (
              void 0 !== (t = t.prefix) &&
                ((T = null),
                t
                  ? "function" != typeof t
                    ? (B = 1)
                    : ((B = 2), (T = t))
                  : (B = 0)),
              s
            );
          }
          function u(t, n) {
            var s = t;
            if ((33 > s.charCodeAt(0) && (s = s.trim()), (s = [s]), 0 < D)) {
              var u = a(-1, n, s, s, P, x, 0, 0, 0, 0);
              void 0 !== u && "string" == typeof u && (n = u);
            }
            var d = (function t(n, s, u, d, h) {
              for (
                var f,
                  p,
                  g,
                  y,
                  b,
                  C = 0,
                  E = 0,
                  S = 0,
                  M = 0,
                  R = 0,
                  T = 0,
                  L = (g = f = 0),
                  N = 0,
                  V = 0,
                  Q = 0,
                  U = 0,
                  F = u.length,
                  j = F - 1,
                  z = "",
                  H = "",
                  _ = "",
                  K = "";
                N < F;

              ) {
                if (
                  ((p = u.charCodeAt(N)),
                  N === j &&
                    0 !== E + M + S + C &&
                    (0 !== E && (p = 47 === E ? 10 : 47),
                    (M = S = C = 0),
                    F++,
                    j++),
                  0 === E + M + S + C)
                ) {
                  if (
                    N === j &&
                    (0 < V && (z = z.replace(l, "")), 0 < z.trim().length)
                  ) {
                    switch (p) {
                      case 32:
                      case 9:
                      case 59:
                      case 13:
                      case 10:
                        break;
                      default:
                        z += u.charAt(N);
                    }
                    p = 59;
                  }
                  switch (p) {
                    case 123:
                      for (
                        f = (z = z.trim()).charCodeAt(0), g = 1, U = ++N;
                        N < F;

                      ) {
                        switch ((p = u.charCodeAt(N))) {
                          case 123:
                            g++;
                            break;
                          case 125:
                            g--;
                            break;
                          case 47:
                            switch ((p = u.charCodeAt(N + 1))) {
                              case 42:
                              case 47:
                                t: {
                                  for (L = N + 1; L < j; ++L)
                                    switch (u.charCodeAt(L)) {
                                      case 47:
                                        if (
                                          42 === p &&
                                          42 === u.charCodeAt(L - 1) &&
                                          N + 2 !== L
                                        ) {
                                          N = L + 1;
                                          break t;
                                        }
                                        break;
                                      case 10:
                                        if (47 === p) {
                                          N = L + 1;
                                          break t;
                                        }
                                    }
                                  N = L;
                                }
                            }
                            break;
                          case 91:
                            p++;
                          case 40:
                            p++;
                          case 34:
                          case 39:
                            for (; N++ < j && u.charCodeAt(N) !== p; );
                        }
                        if (0 === g) break;
                        N++;
                      }
                      if (
                        ((g = u.substring(U, N)),
                        0 === f &&
                          (f = (z = z.replace(c, "").trim()).charCodeAt(0)),
                        64 === f)
                      ) {
                        switch (
                          (0 < V && (z = z.replace(l, "")),
                          (p = z.charCodeAt(1)))
                        ) {
                          case 100:
                          case 109:
                          case 115:
                          case 45:
                            V = s;
                            break;
                          default:
                            V = k;
                        }
                        if (
                          ((U = (g = t(s, V, g, p, h + 1)).length),
                          0 < D &&
                            ((b = a(
                              3,
                              g,
                              (V = e(k, z, Q)),
                              s,
                              P,
                              x,
                              U,
                              p,
                              h,
                              d
                            )),
                            (z = V.join("")),
                            void 0 !== b &&
                              0 === (U = (g = b.trim()).length) &&
                              ((p = 0), (g = ""))),
                          0 < U)
                        )
                          switch (p) {
                            case 115:
                              z = z.replace(w, o);
                            case 100:
                            case 109:
                            case 45:
                              g = z + "{" + g + "}";
                              break;
                            case 107:
                              (g = (z = z.replace(m, "$1 $2")) + "{" + g + "}"),
                                (g =
                                  1 === B || (2 === B && i("@" + g, 3))
                                    ? "@-webkit-" + g + "@" + g
                                    : "@" + g);
                              break;
                            default:
                              (g = z + g), 112 === d && ((H += g), (g = ""));
                          }
                        else g = "";
                      } else g = t(s, e(s, z, Q), g, d, h + 1);
                      (_ += g),
                        (g = Q = V = L = f = 0),
                        (z = ""),
                        (p = u.charCodeAt(++N));
                      break;
                    case 125:
                    case 59:
                      if (
                        1 <
                        (U = (z = (0 < V ? z.replace(l, "") : z).trim()).length)
                      )
                        switch (
                          (0 === L &&
                            (45 === (f = z.charCodeAt(0)) ||
                              (96 < f && 123 > f)) &&
                            (U = (z = z.replace(" ", ":")).length),
                          0 < D &&
                            void 0 !==
                              (b = a(1, z, s, n, P, x, H.length, d, h, d)) &&
                            0 === (U = (z = b.trim()).length) &&
                            (z = "\x00\x00"),
                          (f = z.charCodeAt(0)),
                          (p = z.charCodeAt(1)),
                          f)
                        ) {
                          case 0:
                            break;
                          case 64:
                            if (105 === p || 99 === p) {
                              K += z + u.charAt(N);
                              break;
                            }
                          default:
                            58 !== z.charCodeAt(U - 1) &&
                              (H += r(z, f, p, z.charCodeAt(2)));
                        }
                      (Q = V = L = f = 0), (z = ""), (p = u.charCodeAt(++N));
                  }
                }
                switch (p) {
                  case 13:
                  case 10:
                    47 === E
                      ? (E = 0)
                      : 0 === 1 + f &&
                        107 !== d &&
                        0 < z.length &&
                        ((V = 1), (z += "\x00")),
                      0 < D * O && a(0, z, s, n, P, x, H.length, d, h, d),
                      (x = 1),
                      P++;
                    break;
                  case 59:
                  case 125:
                    if (0 === E + M + S + C) {
                      x++;
                      break;
                    }
                  default:
                    switch ((x++, (y = u.charAt(N)), p)) {
                      case 9:
                      case 32:
                        if (0 === M + C + E)
                          switch (R) {
                            case 44:
                            case 58:
                            case 9:
                            case 32:
                              y = "";
                              break;
                            default:
                              32 !== p && (y = " ");
                          }
                        break;
                      case 0:
                        y = "\\0";
                        break;
                      case 12:
                        y = "\\f";
                        break;
                      case 11:
                        y = "\\v";
                        break;
                      case 38:
                        0 === M + E + C && ((V = Q = 1), (y = "\f" + y));
                        break;
                      case 108:
                        if (0 === M + E + C + I && 0 < L)
                          switch (N - L) {
                            case 2:
                              112 === R &&
                                58 === u.charCodeAt(N - 3) &&
                                (I = R);
                            case 8:
                              111 === T && (I = T);
                          }
                        break;
                      case 58:
                        0 === M + E + C && (L = N);
                        break;
                      case 44:
                        0 === E + S + M + C && ((V = 1), (y += "\r"));
                        break;
                      case 34:
                      case 39:
                        0 === E && (M = M === p ? 0 : 0 === M ? p : M);
                        break;
                      case 91:
                        0 === M + E + S && C++;
                        break;
                      case 93:
                        0 === M + E + S && C--;
                        break;
                      case 41:
                        0 === M + E + C && S--;
                        break;
                      case 40:
                        0 === M + E + C &&
                          (0 === f && (2 * R + 3 * T == 533 || (f = 1)), S++);
                        break;
                      case 64:
                        0 === E + S + M + C + L + g && (g = 1);
                        break;
                      case 42:
                      case 47:
                        if (!(0 < M + C + S))
                          switch (E) {
                            case 0:
                              switch (2 * p + 3 * u.charCodeAt(N + 1)) {
                                case 235:
                                  E = 47;
                                  break;
                                case 220:
                                  (U = N), (E = 42);
                              }
                              break;
                            case 42:
                              47 === p &&
                                42 === R &&
                                U + 2 !== N &&
                                (33 === u.charCodeAt(U + 2) &&
                                  (H += u.substring(U, N + 1)),
                                (y = ""),
                                (E = 0));
                          }
                    }
                    0 === E && (z += y);
                }
                (T = R), (R = p), N++;
              }
              if (0 < (U = H.length)) {
                if (
                  ((V = s),
                  0 < D &&
                    void 0 !== (b = a(2, H, V, n, P, x, U, d, h, d)) &&
                    0 === (H = b).length)
                )
                  return K + H + _;
                if (((H = V.join(",") + "{" + H + "}"), 0 != B * I)) {
                  switch ((2 !== B || i(H, 2) || (I = 0), I)) {
                    case 111:
                      H = H.replace(A, ":-moz-$1") + H;
                      break;
                    case 112:
                      H =
                        H.replace(v, "::-webkit-input-$1") +
                        H.replace(v, "::-moz-$1") +
                        H.replace(v, ":-ms-input-$1") +
                        H;
                  }
                  I = 0;
                }
              }
              return K + H + _;
            })(k, s, n, 0, 0);
            return (
              0 < D &&
                void 0 !== (u = a(-2, d, s, s, P, x, d.length, 0, 0, 0)) &&
                (d = u),
              (I = 0),
              (x = P = 1),
              d
            );
          }
          var c = /^\0+/g,
            l = /[\0\r\f]/g,
            d = /: */g,
            h = /zoo|gra/,
            f = /([,: ])(transform)/g,
            p = /,\r+?/g,
            g = /([\t\r\n ])*\f?&/g,
            m = /@(k\w+)\s*(\S*)\s*/,
            v = /::(place)/g,
            A = /:(read-only)/g,
            y = /[svh]\w+-[tblr]{2}/,
            w = /\(\s*(.*)\s*\)/g,
            b = /([\s\S]*?);/g,
            C = /-self|flex-/g,
            E = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
            S = /stretch|:\s*\w+\-(?:conte|avail)/,
            M = /([^-])(image-set\()/,
            x = 1,
            P = 1,
            I = 0,
            B = 1,
            k = [],
            R = [],
            D = 0,
            T = null,
            O = 0;
          return (
            (u.use = function t(e) {
              switch (e) {
                case void 0:
                case null:
                  D = R.length = 0;
                  break;
                default:
                  if ("function" == typeof e) R[D++] = e;
                  else if ("object" == typeof e)
                    for (var n = 0, r = e.length; n < r; ++n) t(e[n]);
                  else O = 0 | !!e;
              }
              return t;
            }),
            (u.set = s),
            void 0 !== t && s(t),
            u
          );
        },
        d = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        h =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        f =
          ((r = Object.create(null)),
          function (t) {
            return (
              void 0 === r[t] &&
                (r[t] =
                  h.test(t) ||
                  (111 === t.charCodeAt(0) &&
                    110 === t.charCodeAt(1) &&
                    91 > t.charCodeAt(2))),
              r[t]
            );
          }),
        p = n(44551),
        g = n.n(p),
        m = n(26182);
      function v() {
        return (v =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      var A = function (t, e) {
          for (var n = [t[0]], r = 0, i = e.length; r < i; r += 1)
            n.push(e[r], t[r + 1]);
          return n;
        },
        y = function (t) {
          return (
            null !== t &&
            "object" == typeof t &&
            "[object Object]" ===
              (t.toString ? t.toString() : Object.prototype.toString.call(t)) &&
            !(0, a.typeOf)(t)
          );
        },
        w = Object.freeze([]),
        b = Object.freeze({});
      function C(t) {
        return "function" == typeof t;
      }
      function E(t) {
        return t.displayName || t.name || "Component";
      }
      function S(t) {
        return t && "string" == typeof t.styledComponentId;
      }
      var M =
          (void 0 !== m &&
            void 0 !== m.env &&
            (m.env.REACT_APP_SC_ATTR || m.env.SC_ATTR)) ||
          "data-styled",
        x = "undefined" != typeof window && "HTMLElement" in window,
        P = !!("boolean" == typeof SC_DISABLE_SPEEDY
          ? SC_DISABLE_SPEEDY
          : void 0 !== m &&
            void 0 !== m.env &&
            (void 0 !== m.env.REACT_APP_SC_DISABLE_SPEEDY &&
            "" !== m.env.REACT_APP_SC_DISABLE_SPEEDY
              ? "false" !== m.env.REACT_APP_SC_DISABLE_SPEEDY &&
                m.env.REACT_APP_SC_DISABLE_SPEEDY
              : void 0 !== m.env.SC_DISABLE_SPEEDY &&
                "" !== m.env.SC_DISABLE_SPEEDY &&
                "false" !== m.env.SC_DISABLE_SPEEDY &&
                m.env.SC_DISABLE_SPEEDY));
      function I(t) {
        for (
          var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        throw Error(
          "An error occurred. See https://git.io/JUIaE#" +
            t +
            " for more information." +
            (n.length > 0 ? " Args: " + n.join(", ") : "")
        );
      }
      var B = (function () {
          function t(t) {
            (this.groupSizes = new Uint32Array(512)),
              (this.length = 512),
              (this.tag = t);
          }
          var e = t.prototype;
          return (
            (e.indexOfGroup = function (t) {
              for (var e = 0, n = 0; n < t; n++) e += this.groupSizes[n];
              return e;
            }),
            (e.insertRules = function (t, e) {
              if (t >= this.groupSizes.length) {
                for (var n = this.groupSizes, r = n.length, i = r; t >= i; )
                  (i <<= 1) < 0 && I(16, "" + t);
                (this.groupSizes = new Uint32Array(i)),
                  this.groupSizes.set(n),
                  (this.length = i);
                for (var o = r; o < i; o++) this.groupSizes[o] = 0;
              }
              for (
                var a = this.indexOfGroup(t + 1), s = 0, u = e.length;
                s < u;
                s++
              )
                this.tag.insertRule(a, e[s]) && (this.groupSizes[t]++, a++);
            }),
            (e.clearGroup = function (t) {
              if (t < this.length) {
                var e = this.groupSizes[t],
                  n = this.indexOfGroup(t),
                  r = n + e;
                this.groupSizes[t] = 0;
                for (var i = n; i < r; i++) this.tag.deleteRule(n);
              }
            }),
            (e.getGroup = function (t) {
              var e = "";
              if (t >= this.length || 0 === this.groupSizes[t]) return e;
              for (
                var n = this.groupSizes[t],
                  r = this.indexOfGroup(t),
                  i = r + n,
                  o = r;
                o < i;
                o++
              )
                e += this.tag.getRule(o) + "/*!sc*/\n";
              return e;
            }),
            t
          );
        })(),
        k = new Map(),
        R = new Map(),
        D = 1,
        T = function (t) {
          if (k.has(t)) return k.get(t);
          for (; R.has(D); ) D++;
          var e = D++;
          return k.set(t, e), R.set(e, t), e;
        },
        O = function (t, e) {
          e >= D && (D = e + 1), k.set(t, e), R.set(e, t);
        },
        L = "style[" + M + '][data-styled-version="5.3.11"]',
        N = RegExp("^" + M + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
        V = function (t, e, n) {
          for (var r, i = n.split(","), o = 0, a = i.length; o < a; o++)
            (r = i[o]) && t.registerName(e, r);
        },
        Q = function (t, e) {
          for (
            var n = (e.textContent || "").split("/*!sc*/\n"),
              r = [],
              i = 0,
              o = n.length;
            i < o;
            i++
          ) {
            var a = n[i].trim();
            if (a) {
              var s = a.match(N);
              if (s) {
                var u = 0 | parseInt(s[1], 10),
                  c = s[2];
                0 !== u &&
                  (O(c, u), V(t, c, s[3]), t.getTag().insertRules(u, r)),
                  (r.length = 0);
              } else r.push(a);
            }
          }
        },
        U = function () {
          return n.nc;
        },
        F = function (t) {
          var e = document.head,
            n = t || e,
            r = document.createElement("style"),
            i = (function (t) {
              for (var e = t.childNodes, n = e.length; n >= 0; n--) {
                var r = e[n];
                if (r && 1 === r.nodeType && r.hasAttribute(M)) return r;
              }
            })(n),
            o = void 0 !== i ? i.nextSibling : null;
          r.setAttribute(M, "active"),
            r.setAttribute("data-styled-version", "5.3.11");
          var a = U();
          return a && r.setAttribute("nonce", a), n.insertBefore(r, o), r;
        },
        j = (function () {
          function t(t) {
            var e = (this.element = F(t));
            e.appendChild(document.createTextNode("")),
              (this.sheet = (function (t) {
                if (t.sheet) return t.sheet;
                for (
                  var e = document.styleSheets, n = 0, r = e.length;
                  n < r;
                  n++
                ) {
                  var i = e[n];
                  if (i.ownerNode === t) return i;
                }
                I(17);
              })(e)),
              (this.length = 0);
          }
          var e = t.prototype;
          return (
            (e.insertRule = function (t, e) {
              try {
                return this.sheet.insertRule(e, t), this.length++, !0;
              } catch (t) {
                return !1;
              }
            }),
            (e.deleteRule = function (t) {
              this.sheet.deleteRule(t), this.length--;
            }),
            (e.getRule = function (t) {
              var e = this.sheet.cssRules[t];
              return void 0 !== e && "string" == typeof e.cssText
                ? e.cssText
                : "";
            }),
            t
          );
        })(),
        z = (function () {
          function t(t) {
            var e = (this.element = F(t));
            (this.nodes = e.childNodes), (this.length = 0);
          }
          var e = t.prototype;
          return (
            (e.insertRule = function (t, e) {
              if (t <= this.length && t >= 0) {
                var n = document.createTextNode(e),
                  r = this.nodes[t];
                return (
                  this.element.insertBefore(n, r || null), this.length++, !0
                );
              }
              return !1;
            }),
            (e.deleteRule = function (t) {
              this.element.removeChild(this.nodes[t]), this.length--;
            }),
            (e.getRule = function (t) {
              return t < this.length ? this.nodes[t].textContent : "";
            }),
            t
          );
        })(),
        H = (function () {
          function t(t) {
            (this.rules = []), (this.length = 0);
          }
          var e = t.prototype;
          return (
            (e.insertRule = function (t, e) {
              return (
                t <= this.length &&
                (this.rules.splice(t, 0, e), this.length++, !0)
              );
            }),
            (e.deleteRule = function (t) {
              this.rules.splice(t, 1), this.length--;
            }),
            (e.getRule = function (t) {
              return t < this.length ? this.rules[t] : "";
            }),
            t
          );
        })(),
        _ = x,
        K = { isServer: !x, useCSSOMInjection: !P },
        G = (function () {
          function t(t, e, n) {
            void 0 === t && (t = b),
              void 0 === e && (e = {}),
              (this.options = v({}, K, {}, t)),
              (this.gs = e),
              (this.names = new Map(n)),
              (this.server = !!t.isServer),
              !this.server &&
                x &&
                _ &&
                ((_ = !1),
                (function (t) {
                  for (
                    var e = document.querySelectorAll(L), n = 0, r = e.length;
                    n < r;
                    n++
                  ) {
                    var i = e[n];
                    i &&
                      "active" !== i.getAttribute(M) &&
                      (Q(t, i), i.parentNode && i.parentNode.removeChild(i));
                  }
                })(this));
          }
          t.registerId = function (t) {
            return T(t);
          };
          var e = t.prototype;
          return (
            (e.reconstructWithOptions = function (e, n) {
              return (
                void 0 === n && (n = !0),
                new t(
                  v({}, this.options, {}, e),
                  this.gs,
                  (n && this.names) || void 0
                )
              );
            }),
            (e.allocateGSInstance = function (t) {
              return (this.gs[t] = (this.gs[t] || 0) + 1);
            }),
            (e.getTag = function () {
              var t, e, n, r;
              return (
                this.tag ||
                (this.tag =
                  ((e = (t = this.options).isServer),
                  (n = t.useCSSOMInjection),
                  (r = t.target),
                  new B(e ? new H(r) : n ? new j(r) : new z(r))))
              );
            }),
            (e.hasNameForId = function (t, e) {
              return this.names.has(t) && this.names.get(t).has(e);
            }),
            (e.registerName = function (t, e) {
              if ((T(t), this.names.has(t))) this.names.get(t).add(e);
              else {
                var n = new Set();
                n.add(e), this.names.set(t, n);
              }
            }),
            (e.insertRules = function (t, e, n) {
              this.registerName(t, e), this.getTag().insertRules(T(t), n);
            }),
            (e.clearNames = function (t) {
              this.names.has(t) && this.names.get(t).clear();
            }),
            (e.clearRules = function (t) {
              this.getTag().clearGroup(T(t)), this.clearNames(t);
            }),
            (e.clearTag = function () {
              this.tag = void 0;
            }),
            (e.toString = function () {
              return (function (t) {
                for (
                  var e = t.getTag(), n = e.length, r = "", i = 0;
                  i < n;
                  i++
                ) {
                  var o,
                    a = ((o = i), R.get(o));
                  if (void 0 !== a) {
                    var s = t.names.get(a),
                      u = e.getGroup(i);
                    if (s && u && s.size) {
                      var c = M + ".g" + i + '[id="' + a + '"]',
                        l = "";
                      void 0 !== s &&
                        s.forEach(function (t) {
                          t.length > 0 && (l += t + ",");
                        }),
                        (r += "" + u + c + '{content:"' + l + '"}/*!sc*/\n');
                    }
                  }
                }
                return r;
              })(this);
            }),
            t
          );
        })(),
        J = /(a)(d)/gi,
        W = function (t) {
          return String.fromCharCode(t + (t > 25 ? 39 : 97));
        };
      function Y(t) {
        var e,
          n = "";
        for (e = Math.abs(t); e > 52; e = (e / 52) | 0) n = W(e % 52) + n;
        return (W(e % 52) + n).replace(J, "$1-$2");
      }
      var q = function (t, e) {
          for (var n = e.length; n; ) t = (33 * t) ^ e.charCodeAt(--n);
          return t;
        },
        Z = function (t) {
          return q(5381, t);
        };
      function X(t) {
        for (var e = 0; e < t.length; e += 1) {
          var n = t[e];
          if (C(n) && !S(n)) return !1;
        }
        return !0;
      }
      var $ = Z("5.3.11"),
        tt = (function () {
          function t(t, e, n) {
            (this.rules = t),
              (this.staticRulesId = ""),
              (this.isStatic = (void 0 === n || n.isStatic) && X(t)),
              (this.componentId = e),
              (this.baseHash = q($, e)),
              (this.baseStyle = n),
              G.registerId(e);
          }
          return (
            (t.prototype.generateAndInjectStyles = function (t, e, n) {
              var r = this.componentId,
                i = [];
              if (
                (this.baseStyle &&
                  i.push(this.baseStyle.generateAndInjectStyles(t, e, n)),
                this.isStatic && !n.hash)
              ) {
                if (this.staticRulesId && e.hasNameForId(r, this.staticRulesId))
                  i.push(this.staticRulesId);
                else {
                  var o = tv(this.rules, t, e, n).join(""),
                    a = Y(q(this.baseHash, o) >>> 0);
                  if (!e.hasNameForId(r, a)) {
                    var s = n(o, "." + a, void 0, r);
                    e.insertRules(r, a, s);
                  }
                  i.push(a), (this.staticRulesId = a);
                }
              } else {
                for (
                  var u = this.rules.length,
                    c = q(this.baseHash, n.hash),
                    l = "",
                    d = 0;
                  d < u;
                  d++
                ) {
                  var h = this.rules[d];
                  if ("string" == typeof h) l += h;
                  else if (h) {
                    var f = tv(h, t, e, n),
                      p = Array.isArray(f) ? f.join("") : f;
                    (c = q(c, p + d)), (l += p);
                  }
                }
                if (l) {
                  var g = Y(c >>> 0);
                  if (!e.hasNameForId(r, g)) {
                    var m = n(l, "." + g, void 0, r);
                    e.insertRules(r, g, m);
                  }
                  i.push(g);
                }
              }
              return i.join(" ");
            }),
            t
          );
        })(),
        te = /^\s*\/\/.*$/gm,
        tn = [":", "[", ".", "#"];
      function tr(t) {
        var e,
          n,
          r,
          i,
          o = void 0 === t ? b : t,
          a = o.options,
          s = void 0 === a ? b : a,
          u = o.plugins,
          c = void 0 === u ? w : u,
          d = new l(s),
          h = [],
          f = (function (t) {
            function e(e) {
              if (e)
                try {
                  t(e + "}");
                } catch (t) {}
            }
            return function (n, r, i, o, a, s, u, c, l, d) {
              switch (n) {
                case 1:
                  if (0 === l && 64 === r.charCodeAt(0)) return t(r + ";"), "";
                  break;
                case 2:
                  if (0 === c) return r + "/*|*/";
                  break;
                case 3:
                  switch (c) {
                    case 102:
                    case 112:
                      return t(i[0] + r), "";
                    default:
                      return r + (0 === d ? "/*|*/" : "");
                  }
                case -2:
                  r.split("/*|*/}").forEach(e);
              }
            };
          })(function (t) {
            h.push(t);
          }),
          p = function (t, r, o) {
            return (0 === r && -1 !== tn.indexOf(o[n.length])) || o.match(i)
              ? t
              : "." + e;
          };
        function g(t, o, a, s) {
          void 0 === s && (s = "&");
          var u = t.replace(te, ""),
            c = o && a ? a + " " + o + " { " + u + " }" : u;
          return (
            (e = s),
            (r = RegExp("\\" + (n = o) + "\\b", "g")),
            (i = RegExp("(\\" + n + "\\b){2,}")),
            d(a || !o ? "" : o, c)
          );
        }
        return (
          d.use(
            [].concat(c, [
              function (t, e, i) {
                2 === t &&
                  i.length &&
                  i[0].lastIndexOf(n) > 0 &&
                  (i[0] = i[0].replace(r, p));
              },
              f,
              function (t) {
                if (-2 === t) {
                  var e = h;
                  return (h = []), e;
                }
              },
            ])
          ),
          (g.hash = c.length
            ? c
                .reduce(function (t, e) {
                  return e.name || I(15), q(t, e.name);
                }, 5381)
                .toString()
            : ""),
          g
        );
      }
      var ti = s.createContext(),
        to = (ti.Consumer, s.createContext()),
        ta = (to.Consumer, new G()),
        ts = tr();
      function tu() {
        return (0, s.useContext)(ti) || ta;
      }
      function tc(t) {
        var e = (0, s.useState)(t.stylisPlugins),
          n = e[0],
          r = e[1],
          i = tu(),
          o = (0, s.useMemo)(
            function () {
              var e = i;
              return (
                t.sheet
                  ? (e = t.sheet)
                  : t.target &&
                    (e = e.reconstructWithOptions({ target: t.target }, !1)),
                t.disableCSSOMInjection &&
                  (e = e.reconstructWithOptions({ useCSSOMInjection: !1 })),
                e
              );
            },
            [t.disableCSSOMInjection, t.sheet, t.target]
          ),
          a = (0, s.useMemo)(
            function () {
              return tr({
                options: { prefix: !t.disableVendorPrefixes },
                plugins: n,
              });
            },
            [t.disableVendorPrefixes, n]
          );
        return (
          (0, s.useEffect)(
            function () {
              c()(n, t.stylisPlugins) || r(t.stylisPlugins);
            },
            [t.stylisPlugins]
          ),
          s.createElement(
            ti.Provider,
            { value: o },
            s.createElement(to.Provider, { value: a }, t.children)
          )
        );
      }
      var tl = (function () {
          function t(t, e) {
            var n = this;
            (this.inject = function (t, e) {
              void 0 === e && (e = ts);
              var r = n.name + e.hash;
              t.hasNameForId(n.id, r) ||
                t.insertRules(n.id, r, e(n.rules, r, "@keyframes"));
            }),
              (this.toString = function () {
                return I(12, String(n.name));
              }),
              (this.name = t),
              (this.id = "sc-keyframes-" + t),
              (this.rules = e);
          }
          return (
            (t.prototype.getName = function (t) {
              return void 0 === t && (t = ts), this.name + t.hash;
            }),
            t
          );
        })(),
        td = /([A-Z])/,
        th = /([A-Z])/g,
        tf = /^ms-/,
        tp = function (t) {
          return "-" + t.toLowerCase();
        };
      function tg(t) {
        return td.test(t) ? t.replace(th, tp).replace(tf, "-ms-") : t;
      }
      var tm = function (t) {
        return null == t || !1 === t || "" === t;
      };
      function tv(t, e, n, r) {
        if (Array.isArray(t)) {
          for (var i, o = [], a = 0, s = t.length; a < s; a += 1)
            "" !== (i = tv(t[a], e, n, r)) &&
              (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
          return o;
        }
        return tm(t)
          ? ""
          : S(t)
          ? "." + t.styledComponentId
          : C(t)
          ? "function" != typeof t ||
            (t.prototype && t.prototype.isReactComponent) ||
            !e
            ? t
            : tv(t(e), e, n, r)
          : t instanceof tl
          ? n
            ? (t.inject(n, r), t.getName(r))
            : t
          : y(t)
          ? (function t(e, n) {
              var r,
                i = [];
              for (var o in e)
                e.hasOwnProperty(o) &&
                  !tm(e[o]) &&
                  ((Array.isArray(e[o]) && e[o].isCss) || C(e[o])
                    ? i.push(tg(o) + ":", e[o], ";")
                    : y(e[o])
                    ? i.push.apply(i, t(e[o], o))
                    : i.push(
                        tg(o) +
                          ": " +
                          (null == (r = e[o]) ||
                          "boolean" == typeof r ||
                          "" === r
                            ? ""
                            : "number" != typeof r ||
                              0 === r ||
                              o in d ||
                              o.startsWith("--")
                            ? String(r).trim()
                            : r + "px") +
                          ";"
                      ));
              return n ? [n + " {"].concat(i, ["}"]) : i;
            })(t)
          : t.toString();
      }
      var tA = function (t) {
        return Array.isArray(t) && (t.isCss = !0), t;
      };
      function ty(t) {
        for (
          var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        return C(t) || y(t)
          ? tA(tv(A(w, [t].concat(n))))
          : 0 === n.length && 1 === t.length && "string" == typeof t[0]
          ? t
          : tA(tv(A(t, n)));
      }
      var tw = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        tb = /(^-|-$)/g;
      function tC(t) {
        return t.replace(tw, "-").replace(tb, "");
      }
      var tE = function (t) {
        return Y(Z(t) >>> 0);
      };
      function tS(t) {
        return "string" == typeof t;
      }
      var tM = function (t) {
          return (
            "function" == typeof t ||
            ("object" == typeof t && null !== t && !Array.isArray(t))
          );
        },
        tx = s.createContext();
      function tP(t) {
        var e = (0, s.useContext)(tx),
          n = (0, s.useMemo)(
            function () {
              var n;
              return (n = t.theme)
                ? C(n)
                  ? n(e)
                  : Array.isArray(n) || "object" != typeof n
                  ? I(8)
                  : e
                  ? v({}, e, {}, n)
                  : n
                : I(14);
            },
            [t.theme, e]
          );
        return t.children
          ? s.createElement(tx.Provider, { value: n }, t.children)
          : null;
      }
      tx.Consumer;
      var tI = {},
        tB = function (t) {
          return (function t(e, n, r) {
            if ((void 0 === r && (r = b), !(0, a.isValidElementType)(n)))
              return I(1, String(n));
            var i = function () {
              return e(n, r, ty.apply(void 0, arguments));
            };
            return (
              (i.withConfig = function (i) {
                return t(e, n, v({}, r, {}, i));
              }),
              (i.attrs = function (i) {
                return t(
                  e,
                  n,
                  v({}, r, {
                    attrs: Array.prototype.concat(r.attrs, i).filter(Boolean),
                  })
                );
              }),
              i
            );
          })(function t(e, n, r) {
            var i = S(e),
              o = !tS(e),
              a = n.attrs,
              u = void 0 === a ? w : a,
              c = n.componentId,
              l =
                void 0 === c
                  ? ((y = n.displayName),
                    (M = n.parentComponentId),
                    (tI[(x = "string" != typeof y ? "sc" : tC(y))] =
                      (tI[x] || 0) + 1),
                    (P = x + "-" + tE("5.3.11" + x + tI[x])),
                    M ? M + "-" + P : P)
                  : c,
              d = n.displayName,
              h =
                void 0 === d
                  ? tS(e)
                    ? "styled." + e
                    : "Styled(" + E(e) + ")"
                  : d,
              p =
                n.displayName && n.componentId
                  ? tC(n.displayName) + "-" + n.componentId
                  : n.componentId || l,
              m =
                i && e.attrs
                  ? Array.prototype.concat(e.attrs, u).filter(Boolean)
                  : u,
              A = n.shouldForwardProp;
            i &&
              e.shouldForwardProp &&
              (A = n.shouldForwardProp
                ? function (t, r, i) {
                    return (
                      e.shouldForwardProp(t, r, i) &&
                      n.shouldForwardProp(t, r, i)
                    );
                  }
                : e.shouldForwardProp);
            var y,
              M,
              x,
              P,
              I,
              B = new tt(r, p, i ? e.componentStyle : void 0),
              k = B.isStatic && 0 === u.length,
              R = function (t, e) {
                return (function (t, e, n, r) {
                  var i,
                    o,
                    a,
                    u,
                    c,
                    l,
                    d,
                    h = t.attrs,
                    p = t.componentStyle,
                    g = t.defaultProps,
                    m = t.foldedComponentIds,
                    A = t.shouldForwardProp,
                    y = t.styledComponentId,
                    w = t.target,
                    E =
                      ((i = (0, s.useContext)(tx)),
                      void 0 === (o = g) && (o = b),
                      void 0 ===
                        (a =
                          (e.theme !== o.theme && e.theme) ||
                          i ||
                          o.theme ||
                          b) && (a = b),
                      (u = v({}, e, { theme: a })),
                      (c = {}),
                      h.forEach(function (t) {
                        var e,
                          n,
                          r,
                          i = t;
                        for (e in (C(i) && (i = i(u)), i))
                          u[e] = c[e] =
                            "className" === e
                              ? ((n = c[e]),
                                (r = i[e]),
                                n && r ? n + " " + r : n || r)
                              : i[e];
                      }),
                      [u, c]),
                    S = E[0],
                    M = E[1],
                    x =
                      ((l = tu()),
                      (d = (0, s.useContext)(to) || ts),
                      r
                        ? p.generateAndInjectStyles(b, l, d)
                        : p.generateAndInjectStyles(S, l, d)),
                    P = M.$as || e.$as || M.as || e.as || w,
                    I = tS(P),
                    B = M !== e ? v({}, e, {}, M) : e,
                    k = {};
                  for (var R in B)
                    "$" !== R[0] &&
                      "as" !== R &&
                      ("forwardedAs" === R
                        ? (k.as = B[R])
                        : (A ? A(R, f, P) : !I || f(R)) && (k[R] = B[R]));
                  return (
                    e.style &&
                      M.style !== e.style &&
                      (k.style = v({}, e.style, {}, M.style)),
                    (k.className = Array.prototype
                      .concat(
                        m,
                        y,
                        x !== y ? x : null,
                        e.className,
                        M.className
                      )
                      .filter(Boolean)
                      .join(" ")),
                    (k.ref = n),
                    (0, s.createElement)(P, k)
                  );
                })(I, t, e, k);
              };
            return (
              (R.displayName = h),
              ((I = s.forwardRef(R)).attrs = m),
              (I.componentStyle = B),
              (I.displayName = h),
              (I.shouldForwardProp = A),
              (I.foldedComponentIds = i
                ? Array.prototype.concat(
                    e.foldedComponentIds,
                    e.styledComponentId
                  )
                : w),
              (I.styledComponentId = p),
              (I.target = i ? e.target : e),
              (I.withComponent = function (e) {
                var i = n.componentId,
                  o = (function (t, e) {
                    if (null == t) return {};
                    var n,
                      r,
                      i = {},
                      o = Object.keys(t);
                    for (r = 0; r < o.length; r++)
                      e.indexOf((n = o[r])) >= 0 || (i[n] = t[n]);
                    return i;
                  })(n, ["componentId"]),
                  a = i && i + "-" + (tS(e) ? e : tC(E(e)));
                return t(e, v({}, o, { attrs: m, componentId: a }), r);
              }),
              Object.defineProperty(I, "defaultProps", {
                get: function () {
                  return this._foldedDefaultProps;
                },
                set: function (t) {
                  this._foldedDefaultProps = i
                    ? (function t(e) {
                        for (
                          var n = arguments.length,
                            r = Array(n > 1 ? n - 1 : 0),
                            i = 1;
                          i < n;
                          i++
                        )
                          r[i - 1] = arguments[i];
                        for (var o = 0; o < r.length; o++) {
                          var a = r[o];
                          if (tM(a))
                            for (var s in a)
                              "__proto__" !== s &&
                                "constructor" !== s &&
                                "prototype" !== s &&
                                (function (e, n, r) {
                                  var i = e[r];
                                  tM(n) && tM(i) ? t(i, n) : (e[r] = n);
                                })(e, a[s], s);
                        }
                        return e;
                      })({}, e.defaultProps, t)
                    : t;
                },
              }),
              Object.defineProperty(I, "toString", {
                value: function () {
                  return "." + I.styledComponentId;
                },
              }),
              o &&
                g()(I, e, {
                  attrs: !0,
                  componentStyle: !0,
                  displayName: !0,
                  foldedComponentIds: !0,
                  shouldForwardProp: !0,
                  styledComponentId: !0,
                  target: !0,
                  withComponent: !0,
                }),
              I
            );
          }, t);
        };
      function tk(t) {
        for (
          var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        var i = ty.apply(void 0, [t].concat(n)).join("");
        return new tl(tE(i), i);
      }
      [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "marker",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "textPath",
        "tspan",
      ].forEach(function (t) {
        tB[t] = tB(t);
      }),
        ((i = function (t, e) {
          (this.rules = t),
            (this.componentId = e),
            (this.isStatic = X(t)),
            G.registerId(this.componentId + 1);
        }.prototype).createStyles = function (t, e, n, r) {
          var i = r(tv(this.rules, e, n, r).join(""), ""),
            o = this.componentId + t;
          n.insertRules(o, o, i);
        }),
        (i.removeStyles = function (t, e) {
          e.clearRules(this.componentId + t);
        }),
        (i.renderStyles = function (t, e, n, r) {
          t > 2 && G.registerId(this.componentId + t),
            this.removeStyles(t, n),
            this.createStyles(t, e, n, r);
        }),
        ((o = function () {
          var t = this;
          (this._emitSheetCSS = function () {
            var e = t.instance.toString();
            if (!e) return "";
            var n = U();
            return (
              "<style " +
              [
                n && 'nonce="' + n + '"',
                M + '="true"',
                'data-styled-version="5.3.11"',
              ]
                .filter(Boolean)
                .join(" ") +
              ">" +
              e +
              "</style>"
            );
          }),
            (this.getStyleTags = function () {
              return t.sealed ? I(2) : t._emitSheetCSS();
            }),
            (this.getStyleElement = function () {
              if (t.sealed) return I(2);
              var e,
                n =
                  (((e = {})[M] = ""),
                  (e["data-styled-version"] = "5.3.11"),
                  (e.dangerouslySetInnerHTML = {
                    __html: t.instance.toString(),
                  }),
                  e),
                r = U();
              return (
                r && (n.nonce = r),
                [s.createElement("style", v({}, n, { key: "sc-0-0" }))]
              );
            }),
            (this.seal = function () {
              t.sealed = !0;
            }),
            (this.instance = new G({ isServer: !0 })),
            (this.sealed = !1);
        }.prototype).collectStyles = function (t) {
          return this.sealed
            ? I(2)
            : s.createElement(tc, { sheet: this.instance }, t);
        }),
        (o.interleaveWithNodeStream = function (t) {
          return I(3);
        });
      var tR = tB;
    },
    46783: function (t, e, n) {
      "use strict";
      n.d(e, {
        R: function () {
          return s;
        },
        m: function () {
          return a;
        },
      });
      var r = n(29360),
        i = n(92472),
        o = n(30558),
        a = class extends i.F {
          #t;
          #e;
          #n;
          #r;
          constructor(t) {
            super(),
              (this.mutationId = t.mutationId),
              (this.#e = t.defaultOptions),
              (this.#n = t.mutationCache),
              (this.#t = []),
              (this.state = t.state || s()),
              this.setOptions(t.options),
              this.scheduleGc();
          }
          setOptions(t) {
            (this.options = { ...this.#e, ...t }),
              this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(t) {
            this.#t.includes(t) ||
              (this.#t.push(t),
              this.clearGcTimeout(),
              this.#n.notify({
                type: "observerAdded",
                mutation: this,
                observer: t,
              }));
          }
          removeObserver(t) {
            (this.#t = this.#t.filter((e) => e !== t)),
              this.scheduleGc(),
              this.#n.notify({
                type: "observerRemoved",
                mutation: this,
                observer: t,
              });
          }
          optionalRemove() {
            this.#t.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#n.remove(this));
          }
          continue() {
            return this.#r?.continue() ?? this.execute(this.state.variables);
          }
          async execute(t) {
            let e = "pending" === this.state.status;
            try {
              if (!e) {
                this.#i({ type: "pending", variables: t }),
                  await this.#n.config.onMutate?.(t, this);
                let e = await this.options.onMutate?.(t);
                e !== this.state.context &&
                  this.#i({ type: "pending", context: e, variables: t });
              }
              let n = await ((this.#r = (0, o.Mz)({
                fn: () =>
                  this.options.mutationFn
                    ? this.options.mutationFn(t)
                    : Promise.reject(Error("No mutationFn found")),
                onFail: (t, e) => {
                  this.#i({ type: "failed", failureCount: t, error: e });
                },
                onPause: () => {
                  this.#i({ type: "pause" });
                },
                onContinue: () => {
                  this.#i({ type: "continue" });
                },
                retry: this.options.retry ?? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
              })),
              this.#r.promise);
              return (
                await this.#n.config.onSuccess?.(
                  n,
                  t,
                  this.state.context,
                  this
                ),
                await this.options.onSuccess?.(n, t, this.state.context),
                await this.#n.config.onSettled?.(
                  n,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(n, null, t, this.state.context),
                this.#i({ type: "success", data: n }),
                n
              );
            } catch (e) {
              try {
                throw (
                  (await this.#n.config.onError?.(
                    e,
                    t,
                    this.state.context,
                    this
                  ),
                  await this.options.onError?.(e, t, this.state.context),
                  await this.#n.config.onSettled?.(
                    void 0,
                    e,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    e,
                    t,
                    this.state.context
                  ),
                  e)
                );
              } finally {
                this.#i({ type: "error", error: e });
              }
            }
          }
          #i(t) {
            (this.state = ((e) => {
              switch (t.type) {
                case "failed":
                  return {
                    ...e,
                    failureCount: t.failureCount,
                    failureReason: t.error,
                  };
                case "pause":
                  return { ...e, isPaused: !0 };
                case "continue":
                  return { ...e, isPaused: !1 };
                case "pending":
                  return {
                    ...e,
                    context: t.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: !(0, o.Kw)(this.options.networkMode),
                    status: "pending",
                    variables: t.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...e,
                    data: t.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...e,
                    data: void 0,
                    error: t.error,
                    failureCount: e.failureCount + 1,
                    failureReason: t.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              r.V.batch(() => {
                this.#t.forEach((e) => {
                  e.onMutationUpdate(t);
                }),
                  this.#n.notify({
                    mutation: this,
                    type: "updated",
                    action: t,
                  });
              });
          }
        };
      function s() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        };
      }
    },
    92472: function (t, e, n) {
      "use strict";
      n.d(e, {
        F: function () {
          return i;
        },
      });
      var r = n(36076),
        i = class {
          #o;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, r.PN)(this.gcTime) &&
                (this.#o = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(t) {
            this.gcTime = Math.max(this.gcTime || 0, t ?? (r.sk ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#o && (clearTimeout(this.#o), (this.#o = void 0));
          }
        };
    },
    29297: function (t, e, n) {
      "use strict";
      n.d(e, {
        D: function () {
          return d;
        },
      });
      var r = n(15039),
        i = n(46783),
        o = n(29360),
        a = n(94699),
        s = n(36076),
        u = class extends a.l {
          #a;
          #s = void 0;
          #u;
          #c;
          constructor(t, e) {
            super(),
              (this.#a = t),
              this.setOptions(e),
              this.bindMethods(),
              this.#l();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(t) {
            let e = this.options;
            (this.options = this.#a.defaultMutationOptions(t)),
              (0, s.VS)(this.options, e) ||
                this.#a
                  .getMutationCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#u,
                    observer: this,
                  }),
              e?.mutationKey &&
              this.options.mutationKey &&
              (0, s.Ym)(e.mutationKey) !== (0, s.Ym)(this.options.mutationKey)
                ? this.reset()
                : this.#u?.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#u?.removeObserver(this);
          }
          onMutationUpdate(t) {
            this.#l(), this.#d(t);
          }
          getCurrentResult() {
            return this.#s;
          }
          reset() {
            this.#u?.removeObserver(this),
              (this.#u = void 0),
              this.#l(),
              this.#d();
          }
          mutate(t, e) {
            return (
              (this.#c = e),
              this.#u?.removeObserver(this),
              (this.#u = this.#a
                .getMutationCache()
                .build(this.#a, this.options)),
              this.#u.addObserver(this),
              this.#u.execute(t)
            );
          }
          #l() {
            let t = this.#u?.state ?? (0, i.R)();
            this.#s = {
              ...t,
              isPending: "pending" === t.status,
              isSuccess: "success" === t.status,
              isError: "error" === t.status,
              isIdle: "idle" === t.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #d(t) {
            o.V.batch(() => {
              if (this.#c && this.hasListeners()) {
                let e = this.#s.variables,
                  n = this.#s.context;
                t?.type === "success"
                  ? (this.#c.onSuccess?.(t.data, e, n),
                    this.#c.onSettled?.(t.data, null, e, n))
                  : t?.type === "error" &&
                    (this.#c.onError?.(t.error, e, n),
                    this.#c.onSettled?.(void 0, t.error, e, n));
              }
              this.listeners.forEach((t) => {
                t(this.#s);
              });
            });
          }
        },
        c = n(89721),
        l = n(31370);
      function d(t, e) {
        let n = (0, c.NL)(e),
          [i] = r.useState(() => new u(n, t));
        r.useEffect(() => {
          i.setOptions(t);
        }, [i, t]);
        let a = r.useSyncExternalStore(
            r.useCallback((t) => i.subscribe(o.V.batchCalls(t)), [i]),
            () => i.getCurrentResult(),
            () => i.getCurrentResult()
          ),
          s = r.useCallback(
            (t, e) => {
              i.mutate(t, e).catch(l.Z);
            },
            [i]
          );
        if (a.error && (0, l.L)(i.options.throwOnError, [a.error]))
          throw a.error;
        return { ...a, mutate: s, mutateAsync: a.mutate };
      }
    },
    53683: function (t, e, n) {
      "use strict";
      n.d(e, {
        D: function () {
          return c;
        },
      });
      var r = n(65586),
        i = n(25977),
        o = n(12796),
        a = n(66447),
        s = n(814),
        u = n(98617);
      function c(t) {
        let e, l;
        return (0, r.K)((r) => ({
          id: "coinbaseWalletSDK",
          name: "Coinbase Wallet",
          type: c.type,
          async connect({ chainId: t } = {}) {
            try {
              let e = await this.getProvider(),
                n = (await e.request({ method: "eth_requestAccounts" })).map(
                  (t) => (0, a.K)(t)
                );
              e.on("accountsChanged", this.onAccountsChanged),
                e.on("chainChanged", this.onChainChanged),
                e.on("disconnect", this.onDisconnect.bind(this));
              let r = await this.getChainId();
              if (t && r !== t) {
                let e = await this.switchChain({ chainId: t }).catch((t) => {
                  if (t.code === s.ab.code) throw t;
                  return { id: r };
                });
                r = e?.id ?? r;
              }
              return { accounts: n, chainId: r };
            } catch (t) {
              if (
                /(user closed modal|accounts received is empty|user denied account)/i.test(
                  t.message
                )
              )
                throw new s.ab(t);
              throw t;
            }
          },
          async disconnect() {
            let t = await this.getProvider();
            t.removeListener("accountsChanged", this.onAccountsChanged),
              t.removeListener("chainChanged", this.onChainChanged),
              t.removeListener("disconnect", this.onDisconnect.bind(this)),
              t.disconnect(),
              t.close();
          },
          async getAccounts() {
            let t = await this.getProvider();
            return (await t.request({ method: "eth_accounts" })).map((t) =>
              (0, a.K)(t)
            );
          },
          async getChainId() {
            let t = await this.getProvider(),
              e = await t.request({ method: "eth_chainId" });
            return (0, i.J)(e);
          },
          async getProvider() {
            if (!l) {
              let { default: i } = await Promise.all([
                n.e(2261),
                n.e(6462),
                n.e(6565),
              ]).then(n.t.bind(n, 66462, 19));
              e = new (
                "function" != typeof i && "function" == typeof i.default
                  ? i.default
                  : i
              )({ reloadOnDisconnect: !1, ...t });
              let o = e.walletExtension?.getChainId(),
                a =
                  r.chains.find((e) =>
                    t.chainId ? e.id === t.chainId : e.id === o
                  ) || r.chains[0],
                s = t.chainId || a?.id,
                u = t.jsonRpcUrl || a?.rpcUrls.default.http[0];
              l = e.makeWeb3Provider(u, s);
            }
            return l;
          },
          async isAuthorized() {
            try {
              return !!(await this.getAccounts()).length;
            } catch {
              return !1;
            }
          },
          async switchChain({ chainId: t }) {
            let e = r.chains.find((e) => e.id === t);
            if (!e) throw new s.x3(new o.X4());
            let n = await this.getProvider(),
              i = (0, u.eC)(e.id);
            try {
              return (
                await n.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: i }],
                }),
                e
              );
            } catch (t) {
              if (4902 === t.code)
                try {
                  return (
                    await n.request({
                      method: "wallet_addEthereumChain",
                      params: [
                        {
                          chainId: i,
                          chainName: e.name,
                          nativeCurrency: e.nativeCurrency,
                          rpcUrls: [e.rpcUrls.default?.http[0] ?? ""],
                          blockExplorerUrls: [e.blockExplorers?.default.url],
                        },
                      ],
                    }),
                    e
                  );
                } catch (t) {
                  throw new s.ab(t);
                }
              throw new s.x3(t);
            }
          },
          onAccountsChanged(t) {
            0 === t.length
              ? r.emitter.emit("disconnect")
              : r.emitter.emit("change", {
                  accounts: t.map((t) => (0, a.K)(t)),
                });
          },
          onChainChanged(t) {
            let e = (0, i.J)(t);
            r.emitter.emit("change", { chainId: e });
          },
          async onDisconnect(t) {
            r.emitter.emit("disconnect");
            let e = await this.getProvider();
            e.removeListener("accountsChanged", this.onAccountsChanged),
              e.removeListener("chainChanged", this.onChainChanged),
              e.removeListener("disconnect", this.onDisconnect.bind(this));
          },
        }));
      }
      c.type = "coinbaseWallet";
    },
    74628: function (t, e, n) {
      "use strict";
      n.d(e, {
        T: function () {
          return s;
        },
      });
      var r = n(65586),
        i = n(6812),
        o = n(25977),
        a = n(66447);
      function s(t = {}) {
        let e;
        let { shimDisconnect: u = !1 } = t;
        return (0, r.K)((r) => ({
          id: "safe",
          name: "Safe",
          type: s.type,
          async connect() {
            let t = await this.getProvider();
            if (!t) throw new i.M();
            let e = await this.getAccounts(),
              n = await this.getChainId();
            return (
              t.on("disconnect", this.onDisconnect.bind(this)),
              u && (await r.storage?.removeItem("safe.disconnected")),
              { accounts: e, chainId: n }
            );
          },
          async disconnect() {
            let t = await this.getProvider();
            if (!t) throw new i.M();
            t.removeListener("disconnect", this.onDisconnect.bind(this)),
              u && (await r.storage?.setItem("safe.disconnected", !0));
          },
          async getAccounts() {
            let t = await this.getProvider();
            if (!t) throw new i.M();
            return (await t.request({ method: "eth_accounts" })).map(a.K);
          },
          async getProvider() {
            if ("undefined" != typeof window && window?.parent !== window) {
              if (!e) {
                let { default: r } = await Promise.all([
                    n.e(9042),
                    n.e(718),
                  ]).then(n.t.bind(n, 30718, 19)),
                  i = new (
                    "function" != typeof r && "function" == typeof r.default
                      ? r.default
                      : r
                  )(t),
                  o = await i.safe.getInfo();
                if (!o) throw Error("Could not load Safe information");
                let { SafeAppProvider: a } = await n
                  .e(1574)
                  .then(n.t.bind(n, 61574, 19));
                e = new a(o, i);
              }
              return e;
            }
          },
          async getChainId() {
            let t = await this.getProvider();
            if (!t) throw new i.M();
            return (0, o.J)(t.chainId);
          },
          async isAuthorized() {
            try {
              if (u && (await r.storage?.getItem("safe.disconnected")))
                return !1;
              return !!(await this.getAccounts()).length;
            } catch {
              return !1;
            }
          },
          onAccountsChanged() {},
          onChainChanged() {},
          onDisconnect() {
            r.emitter.emit("disconnect");
          },
        }));
      }
      s.type = "safe";
    },
    80448: function (t, e, n) {
      "use strict";
      n.d(e, {
        a: function () {
          return l;
        },
      });
      var r = n(65586),
        i = n(6812),
        o = n(12796),
        a = n(25977),
        s = n(66447),
        u = n(814),
        c = n(98617);
      function l(t) {
        let e, d;
        let h = t.isNewChainsStale ?? !0,
          f = "eip155";
        return (0, r.K)((r) => ({
          id: "walletConnect",
          name: "WalletConnect",
          type: l.type,
          async setup() {
            let t = await this.getProvider().catch(() => null);
            t &&
              (t.on("connect", this.onConnect.bind(this)),
              t.on("session_delete", this.onSessionDelete.bind(this)));
          },
          async connect({ chainId: t, ...e } = {}) {
            try {
              let n = await this.getProvider();
              if (!n) throw new i.M();
              n.on("display_uri", this.onDisplayUri);
              let o = t;
              if (!o) {
                let t = (await r.storage?.getItem("state")) ?? {};
                o = r.chains.some((e) => e.id === t.chainId)
                  ? t.chainId
                  : r.chains[0]?.id;
              }
              if (!o) throw Error("No chains found on connector.");
              let a = await this.isChainsStale();
              if ((n.session && a && (await n.disconnect()), !n.session || a)) {
                let t = r.chains.filter((t) => t.id !== o).map((t) => t.id);
                await n.connect({
                  optionalChains: [o, ...t],
                  ...("pairingTopic" in e
                    ? { pairingTopic: e.pairingTopic }
                    : {}),
                }),
                  this.setRequestedChainsIds(r.chains.map((t) => t.id));
              }
              let u = (await n.enable()).map((t) => (0, s.K)(t)),
                c = await this.getChainId();
              return (
                n.removeListener("display_uri", this.onDisplayUri),
                n.removeListener("connect", this.onConnect.bind(this)),
                n.on("accountsChanged", this.onAccountsChanged.bind(this)),
                n.on("chainChanged", this.onChainChanged),
                n.on("disconnect", this.onDisconnect.bind(this)),
                n.on("session_delete", this.onSessionDelete.bind(this)),
                { accounts: u, chainId: c }
              );
            } catch (t) {
              if (/(user rejected|connection request reset)/i.test(t?.message))
                throw new u.ab(t);
              throw t;
            }
          },
          async disconnect() {
            let t = await this.getProvider();
            try {
              await t?.disconnect();
            } catch (t) {
              if (!/No matching key/i.test(t.message)) throw t;
            } finally {
              t?.removeListener(
                "accountsChanged",
                this.onAccountsChanged.bind(this)
              ),
                t?.removeListener("chainChanged", this.onChainChanged),
                t?.removeListener("disconnect", this.onDisconnect.bind(this)),
                t?.removeListener(
                  "session_delete",
                  this.onSessionDelete.bind(this)
                ),
                t?.on("connect", this.onConnect.bind(this)),
                this.setRequestedChainsIds([]);
            }
          },
          async getAccounts() {
            return (await this.getProvider()).accounts.map((t) => (0, s.K)(t));
          },
          async getProvider({ chainId: i } = {}) {
            async function o() {
              let e = r.chains.map((t) => t.id);
              if (!e.length) return;
              let { EthereumProvider: i } = await Promise.all([
                n.e(1214),
                n.e(670),
                n.e(3804),
              ]).then(n.bind(n, 70670));
              return await i.init({
                ...t,
                disableProviderPing: !0,
                optionalChains: e,
                projectId: t.projectId,
                rpcMap: Object.fromEntries(
                  r.chains.map((t) => [t.id, t.rpcUrls.default.http[0]])
                ),
                showQrModal: t.showQrModal ?? !0,
              });
            }
            return (
              e ||
                (d || (d = o()),
                (e = await d),
                e?.events.setMaxListeners(1 / 0)),
              i && (await this.switchChain?.({ chainId: i })),
              e
            );
          },
          async getChainId() {
            return (await this.getProvider()).chainId;
          },
          async isAuthorized() {
            try {
              let [t, e] = await Promise.all([
                this.getAccounts(),
                this.getProvider(),
              ]);
              if (!t.length) return !1;
              if ((await this.isChainsStale()) && e.session)
                return await e.disconnect().catch(() => {}), !1;
              return !0;
            } catch {
              return !1;
            }
          },
          async switchChain({ chainId: t }) {
            let e = r.chains.find((e) => e.id === t);
            if (!e) throw new u.x3(new o.X4());
            try {
              let n = await this.getProvider(),
                r = this.getNamespaceChainsIds(),
                i = this.getNamespaceMethods();
              if (!r.includes(t) && i.includes("wallet_addEthereumChain")) {
                await n.request({
                  method: "wallet_addEthereumChain",
                  params: [
                    {
                      chainId: (0, c.eC)(e.id),
                      blockExplorerUrls: [e.blockExplorers?.default.url],
                      chainName: e.name,
                      nativeCurrency: e.nativeCurrency,
                      rpcUrls: [...e.rpcUrls.default.http],
                    },
                  ],
                });
                let r = await this.getRequestedChainsIds();
                this.setRequestedChainsIds([...r, t]);
              }
              return (
                await n.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: (0, c.eC)(t) }],
                }),
                e
              );
            } catch (e) {
              let t = "string" == typeof e ? e : e?.message;
              if (/user rejected request/i.test(t)) throw new u.ab(e);
              throw new u.x3(e);
            }
          },
          onAccountsChanged(t) {
            0 === t.length
              ? this.onDisconnect()
              : r.emitter.emit("change", {
                  accounts: t.map((t) => (0, s.K)(t)),
                });
          },
          onChainChanged(t) {
            let e = (0, a.J)(t);
            r.emitter.emit("change", { chainId: e });
          },
          async onConnect(t) {
            let e = (0, a.J)(t.chainId),
              n = await this.getAccounts();
            r.emitter.emit("connect", { accounts: n, chainId: e });
          },
          async onDisconnect(t) {
            this.setRequestedChainsIds([]), r.emitter.emit("disconnect");
            let e = await this.getProvider();
            e.removeListener(
              "accountsChanged",
              this.onAccountsChanged.bind(this)
            ),
              e.removeListener("chainChanged", this.onChainChanged),
              e.removeListener("disconnect", this.onDisconnect.bind(this)),
              e.removeListener(
                "session_delete",
                this.onSessionDelete.bind(this)
              ),
              e.on("connect", this.onConnect.bind(this));
          },
          onDisplayUri(t) {
            r.emitter.emit("message", { type: "display_uri", data: t });
          },
          onSessionDelete() {
            this.onDisconnect();
          },
          getNamespaceChainsIds: () =>
            e
              ? e.session?.namespaces[f]?.chains?.map((t) =>
                  parseInt(t.split(":")[1] || "")
                ) ?? []
              : [],
          getNamespaceMethods: () =>
            e ? e.session?.namespaces[f]?.methods ?? [] : [],
          async getRequestedChainsIds() {
            return (
              (await r.storage?.getItem(this.requestedChainsStorageKey)) ?? []
            );
          },
          async isChainsStale() {
            if (
              this.getNamespaceMethods().includes("wallet_addEthereumChain") ||
              !h
            )
              return !1;
            let t = r.chains.map((t) => t.id),
              e = this.getNamespaceChainsIds();
            if (e.length && !e.some((e) => t.includes(e))) return !1;
            let n = await this.getRequestedChainsIds();
            return !t.every((t) => n.includes(t));
          },
          async setRequestedChainsIds(t) {
            await r.storage?.setItem(this.requestedChainsStorageKey, t);
          },
          get requestedChainsStorageKey() {
            return `${this.id}.requestedChains`;
          },
        }));
      }
      l.type = "walletConnect";
    },
    13360: function (t, e, n) {
      "use strict";
      n.d(e, {
        e: function () {
          return s;
        },
      });
      var r = n(42529),
        i = n(52887),
        o = n(9566),
        a = n(12796);
      async function s(t, e = {}) {
        let n;
        if (e.connector) {
          let { connector: t } = e,
            [r, i] = await Promise.all([t.getAccounts(), t.getChainId()]);
          n = { accounts: r, chainId: i, connector: t };
        } else n = t.state.connections.get(t.state.current);
        if (!n) throw new a.aH();
        let s = e.chainId ?? n.chainId,
          u = n.connector;
        if (u.getClient) return u.getClient({ chainId: s });
        let c = (0, o.T)(e.account ?? n.accounts[0]),
          l = t.chains.find((t) => t.id === s),
          d = await n.connector.getProvider({ chainId: s });
        if (e.account && !n.accounts.includes(c.address))
          throw new a.JK({ address: c.address, connector: u });
        return (0, r.e)({
          account: c,
          chain: l,
          name: "Connector Client",
          transport: (t) =>
            (function (t, e = {}) {
              let {
                key: n = "custom",
                name: r = "Custom Provider",
                retryDelay: o,
              } = e;
              return ({ retryCount: a }) =>
                (0, i.q)({
                  key: n,
                  name: r,
                  request: t.request.bind(t),
                  retryCount: e.retryCount ?? a,
                  retryDelay: o,
                  type: "custom",
                });
            })(d)({ ...t, retryCount: 0 }),
        });
      }
    },
    65586: function (t, e, n) {
      "use strict";
      function r(t) {
        return t;
      }
      n.d(e, {
        K: function () {
          return r;
        },
      });
    },
    34151: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return f;
        },
      });
      var r = n(66447),
        i = n(814),
        o = n(46297),
        a = n(46973),
        s = n(98617),
        u = n(12796),
        c = n(6812),
        l = n(25977),
        d = n(65586);
      let h = {
        coinbaseWallet: {
          id: "coinbaseWallet",
          name: "Coinbase Wallet",
          provider: (t) =>
            t?.coinbaseWalletExtension
              ? t.coinbaseWalletExtension
              : p(t, "isCoinbaseWallet"),
        },
        metaMask: {
          id: "metaMask",
          name: "MetaMask",
          provider: (t) =>
            p(t, (t) => {
              if (!t.isMetaMask || (t.isBraveWallet && !t._events && !t._state))
                return !1;
              for (let e of [
                "isApexWallet",
                "isAvalanche",
                "isBitKeep",
                "isBlockWallet",
                "isKuCoinWallet",
                "isMathWallet",
                "isOkxWallet",
                "isOKExWallet",
                "isOneInchIOSWallet",
                "isOneInchAndroidWallet",
                "isOpera",
                "isPortal",
                "isRabby",
                "isTokenPocket",
                "isTokenary",
                "isZerion",
              ])
                if (t[e]) return !1;
              return !0;
            }),
        },
        phantom: {
          id: "phantom",
          name: "Phantom",
          provider: (t) =>
            t?.phantom?.ethereum ? t.phantom?.ethereum : p(t, "isPhantom"),
        },
      };
      function f(t = {}) {
        let { shimDisconnect: e = !0, unstable_shimAsyncInject: n } = t;
        function g() {
          let e = t.target;
          if ("function" == typeof e) {
            let t = e();
            if (t) return t;
          }
          return "object" == typeof e
            ? e
            : "string" == typeof e
            ? {
                ...(h[e] ?? {
                  id: e,
                  name: `${e[0].toUpperCase()}${e.slice(1)}`,
                  provider: `is${e[0].toUpperCase()}${e.slice(1)}`,
                }),
              }
            : {
                id: "injected",
                name: "Injected",
                provider: (t) => t?.ethereum,
              };
        }
        return (0, d.K)((d) => ({
          get icon() {
            return g().icon;
          },
          get id() {
            return g().id;
          },
          get name() {
            return g().name;
          },
          type: f.type,
          async setup() {
            let e = await this.getProvider();
            e && t.target && e.on("connect", this.onConnect.bind(this));
          },
          async connect({ chainId: n, isReconnecting: o } = {}) {
            let a = await this.getProvider();
            if (!a) throw new c.M();
            let s = null;
            if (
              !o &&
              ((s = await this.getAccounts().catch(() => null)), s?.length)
            )
              try {
                let t = await a.request({
                  method: "wallet_requestPermissions",
                  params: [{ eth_accounts: {} }],
                });
                s = t[0]?.caveats?.[0]?.value?.map((t) => r.K(t));
              } catch (t) {
                if (t.code === i.ab.code) throw new i.ab(t);
                if (t.code === i.pT.code) throw t;
              }
            try {
              s?.length ||
                (s = (await a.request({ method: "eth_requestAccounts" })).map(
                  (t) => (0, r.K)(t)
                )),
                a.removeListener("connect", this.onConnect.bind(this)),
                a.on("accountsChanged", this.onAccountsChanged.bind(this)),
                a.on("chainChanged", this.onChainChanged),
                a.on("disconnect", this.onDisconnect.bind(this));
              let o = await this.getChainId();
              if (n && o !== n) {
                let t = await this.switchChain({ chainId: n }).catch((t) => {
                  if (t.code === i.ab.code) throw t;
                  return { id: o };
                });
                o = t?.id ?? o;
              }
              return (
                e &&
                  (await d.storage?.removeItem(`${this.id}.disconnected`),
                  t.target ||
                    (await d.storage?.setItem("injected.connected", !0))),
                { accounts: s, chainId: o }
              );
            } catch (t) {
              if (t.code === i.ab.code) throw new i.ab(t);
              if (t.code === i.pT.code) throw new i.pT(t);
              throw t;
            }
          },
          async disconnect() {
            let n = await this.getProvider();
            if (!n) throw new c.M();
            n.removeListener(
              "accountsChanged",
              this.onAccountsChanged.bind(this)
            ),
              n.removeListener("chainChanged", this.onChainChanged),
              n.removeListener("disconnect", this.onDisconnect.bind(this)),
              n.on("connect", this.onConnect.bind(this)),
              e &&
                (await d.storage?.setItem(`${this.id}.disconnected`, !0),
                t.target ||
                  (await d.storage?.removeItem("injected.connected")));
          },
          async getAccounts() {
            let t = await this.getProvider();
            if (!t) throw new c.M();
            return (await t.request({ method: "eth_accounts" })).map((t) =>
              (0, r.K)(t)
            );
          },
          async getChainId() {
            let t = await this.getProvider();
            if (!t) throw new c.M();
            let e = await t.request({ method: "eth_chainId" });
            return (0, l.J)(e);
          },
          async getProvider() {
            let t;
            if ("undefined" == typeof window) return;
            let e = g();
            return (
              (t =
                "function" == typeof e.provider
                  ? e.provider(window)
                  : "string" == typeof e.provider
                  ? p(window, e.provider)
                  : e.provider) &&
                !t.removeListener &&
                ("off" in t && "function" == typeof t.off
                  ? (t.removeListener = t.off)
                  : (t.removeListener = () => {})),
              t
            );
          },
          async isAuthorized() {
            try {
              if (
                (e && (await d.storage?.getItem(`${this.id}.disconnected`))) ||
                (!t.target && !(await d.storage?.getItem("injected.connected")))
              )
                return !1;
              if (!(await this.getProvider())) {
                if (void 0 !== n && !1 !== n) {
                  let t = async () => (
                      "undefined" != typeof window &&
                        window.removeEventListener("ethereum#initialized", t),
                      !!(await this.getProvider())
                    ),
                    e = "number" == typeof n ? n : 1e3;
                  if (
                    await Promise.race([
                      ...("undefined" != typeof window
                        ? [
                            new Promise((e) =>
                              window.addEventListener(
                                "ethereum#initialized",
                                () => e(t()),
                                { once: !0 }
                              )
                            ),
                          ]
                        : []),
                      new Promise((n) => setTimeout(() => n(t()), e)),
                    ])
                  )
                    return !0;
                }
                throw new c.M();
              }
              return !!(
                await (0, o.J)(() =>
                  (0, a.F)(() => this.getAccounts(), { timeout: 100 })
                )
              ).length;
            } catch {
              return !1;
            }
          },
          async switchChain({ chainId: t }) {
            let e = await this.getProvider();
            if (!e) throw new c.M();
            let n = d.chains.find((e) => e.id === t);
            if (!n) throw new i.x3(new u.X4());
            try {
              return (
                await Promise.all([
                  e.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: (0, s.eC)(t) }],
                  }),
                  new Promise((e) =>
                    d.emitter.once("change", ({ chainId: n }) => {
                      n === t && e();
                    })
                  ),
                ]),
                n
              );
            } catch (r) {
              if (4902 === r.code || r?.data?.originalError?.code === 4902)
                try {
                  let { default: r, ...o } = n.blockExplorers ?? {},
                    a = [];
                  if (
                    (r && (a = [r.url, ...Object.values(o).map((t) => t.url)]),
                    await e.request({
                      method: "wallet_addEthereumChain",
                      params: [
                        {
                          chainId: (0, s.eC)(t),
                          chainName: n.name,
                          nativeCurrency: n.nativeCurrency,
                          rpcUrls: [n.rpcUrls.default?.http[0] ?? ""],
                          blockExplorerUrls: a,
                        },
                      ],
                    }),
                    (await this.getChainId()) !== t)
                  )
                    throw new i.ab(
                      Error("User rejected switch after adding network.")
                    );
                  return n;
                } catch (t) {
                  throw new i.ab(t);
                }
              if (r.code === i.ab.code) throw new i.ab(r);
              throw new i.x3(r);
            }
          },
          async onAccountsChanged(t) {
            if (0 === t.length) this.onDisconnect();
            else if (d.emitter.listenerCount("connect")) {
              let t = (await this.getChainId()).toString();
              this.onConnect({ chainId: t }),
                e && (await d.storage?.removeItem(`${this.id}.disconnected`));
            } else
              d.emitter.emit("change", { accounts: t.map((t) => (0, r.K)(t)) });
          },
          onChainChanged(t) {
            let e = (0, l.J)(t);
            d.emitter.emit("change", { chainId: e });
          },
          async onConnect(t) {
            let e = await this.getAccounts();
            if (0 === e.length) return;
            let n = (0, l.J)(t.chainId);
            d.emitter.emit("connect", { accounts: e, chainId: n });
            let r = await this.getProvider();
            r &&
              (r.removeListener("connect", this.onConnect.bind(this)),
              r.on("accountsChanged", this.onAccountsChanged.bind(this)),
              r.on("chainChanged", this.onChainChanged),
              r.on("disconnect", this.onDisconnect.bind(this)));
          },
          async onDisconnect(t) {
            let e = await this.getProvider();
            (t && 1013 === t.code && e && (await this.getAccounts()).length) ||
              (d.emitter.emit("disconnect"),
              e &&
                (e.removeListener(
                  "accountsChanged",
                  this.onAccountsChanged.bind(this)
                ),
                e.removeListener("chainChanged", this.onChainChanged),
                e.removeListener("disconnect", this.onDisconnect.bind(this)),
                e.on("connect", this.onConnect.bind(this))));
          },
        }));
      }
      function p(t, e) {
        function n(t) {
          return "function" == typeof e ? e(t) : "string" != typeof e || t[e];
        }
        let r = t.ethereum;
        return r?.providers
          ? r.providers.find((t) => n(t))
          : r && n(r)
          ? r
          : void 0;
      }
      f.type = "injected";
    },
    19144: function (t, e, n) {
      "use strict";
      let r;
      n.d(e, {
        _: function () {
          return M;
        },
      });
      var i,
        o = n(42529);
      let a = (t) => (e, n, r) => {
          let i = r.subscribe;
          return (
            (r.subscribe = (t, e, n) => {
              let o = t;
              if (e) {
                let i = (null == n ? void 0 : n.equalityFn) || Object.is,
                  a = t(r.getState());
                (o = (n) => {
                  let r = t(n);
                  if (!i(a, r)) {
                    let t = a;
                    e((a = r), t);
                  }
                }),
                  (null == n ? void 0 : n.fireImmediately) && e(a, a);
              }
              return i(o);
            }),
            t(e, n, r)
          );
        },
        s = (t) => (e) => {
          try {
            let n = t(e);
            if (n instanceof Promise) return n;
            return {
              then: (t) => s(t)(n),
              catch(t) {
                return this;
              },
            };
          } catch (t) {
            return {
              then(t) {
                return this;
              },
              catch: (e) => s(e)(t),
            };
          }
        },
        u = (t, e) => (n, r, i) => {
          let o,
            a,
            u = {
              getStorage: () => localStorage,
              serialize: JSON.stringify,
              deserialize: JSON.parse,
              partialize: (t) => t,
              version: 0,
              merge: (t, e) => ({ ...e, ...t }),
              ...e,
            },
            c = !1,
            l = new Set(),
            d = new Set();
          try {
            o = u.getStorage();
          } catch (t) {}
          if (!o)
            return t(
              (...t) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${u.name}', the given storage is currently unavailable.`
                ),
                  n(...t);
              },
              r,
              i
            );
          let h = s(u.serialize),
            f = () => {
              let t;
              let e = h({ state: u.partialize({ ...r() }), version: u.version })
                .then((t) => o.setItem(u.name, t))
                .catch((e) => {
                  t = e;
                });
              if (t) throw t;
              return e;
            },
            p = i.setState;
          i.setState = (t, e) => {
            p(t, e), f();
          };
          let g = t(
              (...t) => {
                n(...t), f();
              },
              r,
              i
            ),
            m = () => {
              var t;
              if (!o) return;
              (c = !1), l.forEach((t) => t(r()));
              let e =
                (null == (t = u.onRehydrateStorage)
                  ? void 0
                  : t.call(u, r())) || void 0;
              return s(o.getItem.bind(o))(u.name)
                .then((t) => {
                  if (t) return u.deserialize(t);
                })
                .then((t) => {
                  if (t) {
                    if ("number" != typeof t.version || t.version === u.version)
                      return t.state;
                    if (u.migrate) return u.migrate(t.state, t.version);
                    console.error(
                      "State loaded from storage couldn't be migrated since no migrate function was provided"
                    );
                  }
                })
                .then((t) => {
                  var e;
                  return (
                    n((a = u.merge(t, null != (e = r()) ? e : g)), !0), f()
                  );
                })
                .then(() => {
                  null == e || e(a, void 0), (c = !0), d.forEach((t) => t(a));
                })
                .catch((t) => {
                  null == e || e(void 0, t);
                });
            };
          return (
            (i.persist = {
              setOptions: (t) => {
                (u = { ...u, ...t }), t.getStorage && (o = t.getStorage());
              },
              clearStorage: () => {
                null == o || o.removeItem(u.name);
              },
              getOptions: () => u,
              rehydrate: () => m(),
              hasHydrated: () => c,
              onHydrate: (t) => (
                l.add(t),
                () => {
                  l.delete(t);
                }
              ),
              onFinishHydration: (t) => (
                d.add(t),
                () => {
                  d.delete(t);
                }
              ),
            }),
            m(),
            a || g
          );
        },
        c = (t, e) => (n, r, i) => {
          let o,
            a = {
              storage: (function (t, e) {
                let n;
                try {
                  n = t();
                } catch (t) {
                  return;
                }
                return {
                  getItem: (t) => {
                    var r;
                    let i = (t) =>
                        null === t
                          ? null
                          : JSON.parse(t, null == e ? void 0 : e.reviver),
                      o = null != (r = n.getItem(t)) ? r : null;
                    return o instanceof Promise ? o.then(i) : i(o);
                  },
                  setItem: (t, r) =>
                    n.setItem(
                      t,
                      JSON.stringify(r, null == e ? void 0 : e.replacer)
                    ),
                  removeItem: (t) => n.removeItem(t),
                };
              })(() => localStorage),
              partialize: (t) => t,
              version: 0,
              merge: (t, e) => ({ ...e, ...t }),
              ...e,
            },
            u = !1,
            c = new Set(),
            l = new Set(),
            d = a.storage;
          if (!d)
            return t(
              (...t) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
                ),
                  n(...t);
              },
              r,
              i
            );
          let h = () => {
              let t = a.partialize({ ...r() });
              return d.setItem(a.name, { state: t, version: a.version });
            },
            f = i.setState;
          i.setState = (t, e) => {
            f(t, e), h();
          };
          let p = t(
              (...t) => {
                n(...t), h();
              },
              r,
              i
            ),
            g = () => {
              var t, e;
              if (!d) return;
              (u = !1),
                c.forEach((t) => {
                  var e;
                  return t(null != (e = r()) ? e : p);
                });
              let i =
                (null == (e = a.onRehydrateStorage)
                  ? void 0
                  : e.call(a, null != (t = r()) ? t : p)) || void 0;
              return s(d.getItem.bind(d))(a.name)
                .then((t) => {
                  if (t) {
                    if ("number" != typeof t.version || t.version === a.version)
                      return t.state;
                    if (a.migrate) return a.migrate(t.state, t.version);
                    console.error(
                      "State loaded from storage couldn't be migrated since no migrate function was provided"
                    );
                  }
                })
                .then((t) => {
                  var e;
                  return (
                    n((o = a.merge(t, null != (e = r()) ? e : p)), !0), h()
                  );
                })
                .then(() => {
                  null == i || i(o, void 0),
                    (o = r()),
                    (u = !0),
                    l.forEach((t) => t(o));
                })
                .catch((t) => {
                  null == i || i(void 0, t);
                });
            };
          return (
            (i.persist = {
              setOptions: (t) => {
                (a = { ...a, ...t }), t.storage && (d = t.storage);
              },
              clearStorage: () => {
                null == d || d.removeItem(a.name);
              },
              getOptions: () => a,
              rehydrate: () => g(),
              hasHydrated: () => u,
              onHydrate: (t) => (
                c.add(t),
                () => {
                  c.delete(t);
                }
              ),
              onFinishHydration: (t) => (
                l.add(t),
                () => {
                  l.delete(t);
                }
              ),
            }),
            a.skipHydration || g(),
            o || p
          );
        },
        l = (t, e) =>
          "getStorage" in e || "serialize" in e || "deserialize" in e
            ? (console.warn(
                "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
              ),
              u(t, e))
            : c(t, e),
        d = (t) => {
          let e;
          let n = new Set(),
            r = (t, r) => {
              let i = "function" == typeof t ? t(e) : t;
              if (!Object.is(i, e)) {
                let t = e;
                (e = (null != r ? r : "object" != typeof i)
                  ? i
                  : Object.assign({}, e, i)),
                  n.forEach((n) => n(e, t));
              }
            },
            i = () => e,
            o = {
              setState: r,
              getState: i,
              subscribe: (t) => (n.add(t), () => n.delete(t)),
              destroy: () => {
                console.warn(
                  "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
                ),
                  n.clear();
              },
            };
          return (e = t(r, i, o)), o;
        },
        h = (t) => (t ? d(t) : d);
      var f = n(34151),
        p = n(6721),
        g = function (t, e, n, r) {
          if ("a" === n && !r)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof e ? t !== e || !r : !e.has(t))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? r : "a" === n ? r.call(t) : r ? r.value : e.get(t);
        };
      class m {
        constructor(t) {
          Object.defineProperty(this, "uid", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          }),
            i.set(this, new p.v());
        }
        on(t, e) {
          g(this, i, "f").on(t, e);
        }
        once(t, e) {
          g(this, i, "f").once(t, e);
        }
        off(t, e) {
          g(this, i, "f").off(t, e);
        }
        emit(t, ...e) {
          let n = e[0];
          g(this, i, "f").emit(t, { uid: this.uid, ...n });
        }
        listenerCount(t) {
          return g(this, i, "f").listenerCount(t);
        }
      }
      function v(t, e) {
        return JSON.parse(t, (t, n) => {
          let r = n;
          return (
            r?.__type === "bigint" && (r = BigInt(r.value)),
            r?.__type === "Map" && (r = new Map(r.value)),
            e?.(t, r) ?? r
          );
        });
      }
      function A(t, e) {
        return t.slice(0, e).join(".") || ".";
      }
      function y(t, e) {
        let { length: n } = t;
        for (let r = 0; r < n; ++r) if (t[r] === e) return r + 1;
        return 0;
      }
      function w(t, e, n, r) {
        return JSON.stringify(
          t,
          (function (t, e) {
            let n = "function" == typeof t,
              r = "function" == typeof e,
              i = [],
              o = [];
            return function (a, s) {
              if ("object" == typeof s) {
                if (i.length) {
                  let t = y(i, this);
                  0 === t ? (i[i.length] = this) : (i.splice(t), o.splice(t)),
                    (o[o.length] = a);
                  let n = y(i, s);
                  if (0 !== n)
                    return r ? e.call(this, a, s, A(o, n)) : `[ref=${A(o, n)}]`;
                } else (i[0] = s), (o[0] = a);
              }
              return n ? t.call(this, a, s) : s;
            };
          })((t, n) => {
            let r = n;
            return (
              "bigint" == typeof r &&
                (r = { __type: "bigint", value: n.toString() }),
              r instanceof Map &&
                (r = { __type: "Map", value: Array.from(n.entries()) }),
              e?.(t, r) ?? r
            );
          }, r),
          n ?? void 0
        );
      }
      i = new WeakMap();
      let b = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
      var C = n(12796);
      let E = 256;
      var S = n(79750);
      function M(t) {
        let e;
        let {
            multiInjectedProviderDiscovery: n = !0,
            storage: i = (function (t) {
              let {
                deserialize: e = v,
                key: n = "wagmi",
                serialize: r = w,
                storage: i = b,
              } = t;
              function o(t) {
                return t instanceof Promise
                  ? t.then((t) => t).catch(() => null)
                  : t;
              }
              return {
                ...i,
                key: n,
                async getItem(t, r) {
                  let a = i.getItem(`${n}.${t}`),
                    s = await o(a);
                  return s ? e(s) ?? null : r ?? null;
                },
                async setItem(t, e) {
                  let a = `${n}.${t}`;
                  null === e
                    ? await o(i.removeItem(a))
                    : await o(i.setItem(a, r(e)));
                },
                async removeItem(t) {
                  await o(i.removeItem(`${n}.${t}`));
                },
              };
            })({
              storage:
                "undefined" != typeof window && window.localStorage
                  ? window.localStorage
                  : b,
            }),
            syncConnectedChain: s = !0,
            ssr: u,
            ...c
          } = t,
          d =
            "undefined" != typeof window && n
              ? (function () {
                  let t = new Set(),
                    e = [],
                    n = () =>
                      (function (t) {
                        let e = (e) => t(e.detail);
                        return (
                          window.addEventListener(
                            "eip6963:announceProvider",
                            e
                          ),
                          window.dispatchEvent(
                            new CustomEvent("eip6963:requestProvider")
                          ),
                          () =>
                            window.removeEventListener(
                              "eip6963:announceProvider",
                              e
                            )
                        );
                      })((n) => {
                        e.some(({ info: t }) => t.uuid === n.info.uuid) ||
                          ((e = [...e, n]),
                          t.forEach((t) => t(e, { added: [n] })));
                      }),
                    r = n();
                  return {
                    _listeners: () => t,
                    clear() {
                      t.forEach((t) => t([], { removed: [...e] })), (e = []);
                    },
                    destroy() {
                      this.clear(), t.clear(), r();
                    },
                    findProvider: ({ rdns: t }) =>
                      e.find((e) => e.info.rdns === t),
                    getProviders: () => e,
                    reset() {
                      this.clear(), r(), (r = n());
                    },
                    subscribe: (n, { emitImmediately: r } = {}) => (
                      t.add(n), r && n(e, { added: e }), () => t.delete(n)
                    ),
                  };
                })()
              : void 0,
          p = h(() => c.chains),
          g = h(() =>
            [
              ...(c.connectors ?? []),
              ...(u ? [] : d?.getProviders().map(y) ?? []),
            ].map(A)
          );
        function A(t) {
          let e = new m(
              (function (t = 11) {
                if (!r || E + t > 512) {
                  (r = ""), (E = 0);
                  for (let t = 0; t < 256; t++)
                    r += ((256 + 256 * Math.random()) | 0)
                      .toString(16)
                      .substring(1);
                }
                return r.substring(E, E++ + t);
              })()
            ),
            n = {
              ...t({ emitter: e, chains: p.getState(), storage: i }),
              emitter: e,
              uid: e.uid,
            };
          return e.on("connect", k), n.setup?.(), n;
        }
        function y(t) {
          let { info: e } = t,
            n = t.provider;
          return (0, f.L)({ target: { ...e, id: e.rdns, provider: n } });
        }
        let M = new Map();
        function x() {
          return {
            chainId: p.getState()[0].id,
            connections: new Map(),
            current: void 0,
            status: "disconnected",
          };
        }
        let P = "0.0.0-canary-";
        e = S.i.startsWith(P)
          ? parseInt(S.i.replace(P, ""))
          : parseInt(S.i.split(".")[0] ?? "0");
        let I = h(
          a(
            i
              ? l(x, {
                  migrate(t, n) {
                    if (n === e) return t;
                    let r = x(),
                      i =
                        t &&
                        "object" == typeof t &&
                        "chainId" in t &&
                        "number" == typeof t.chainId
                          ? t.chainId
                          : r.chainId;
                    return { ...r, chainId: i };
                  },
                  name: "store",
                  partialize: (t) => ({
                    connections: {
                      __type: "Map",
                      value: Array.from(t.connections.entries()).map(
                        ([t, e]) => {
                          let { id: n, name: r, type: i, uid: o } = e.connector;
                          return [
                            t,
                            {
                              ...e,
                              connector: { id: n, name: r, type: i, uid: o },
                            },
                          ];
                        }
                      ),
                    },
                    chainId: t.chainId,
                    current: t.current,
                  }),
                  skipHydration: u,
                  storage: i,
                  version: e,
                })
              : x
          )
        );
        function B(t) {
          I.setState((e) => {
            let n = e.connections.get(t.uid);
            return n
              ? {
                  ...e,
                  connections: new Map(e.connections).set(t.uid, {
                    accounts: t.accounts ?? n.accounts,
                    chainId: t.chainId ?? n.chainId,
                    connector: n.connector,
                  }),
                }
              : e;
          });
        }
        function k(t) {
          "connecting" !== I.getState().status &&
            "reconnecting" !== I.getState().status &&
            I.setState((e) => {
              let n = g.getState().find((e) => e.uid === t.uid);
              return n
                ? {
                    ...e,
                    connections: new Map(e.connections).set(t.uid, {
                      accounts: t.accounts,
                      chainId: t.chainId,
                      connector: n,
                    }),
                    current: t.uid,
                    status: "connected",
                  }
                : e;
            });
        }
        return (
          s &&
            I.subscribe(
              ({ connections: t, current: e }) =>
                e ? t.get(e)?.chainId : void 0,
              (t) => {
                if (p.getState().some((e) => e.id === t))
                  return I.setState((e) => ({ ...e, chainId: t ?? e.chainId }));
              }
            ),
          d?.subscribe((t) => {
            let e = new Map();
            for (let t of g.getState()) e.set(t.id, !0);
            let n = [];
            for (let r of t) {
              let t = A(y(r));
              e.has(t.id) || n.push(t);
            }
            g.setState((t) => [...t, ...n], !0);
          }),
          {
            get chains() {
              return p.getState();
            },
            get connectors() {
              return g.getState();
            },
            storage: i,
            getClient: function (t = {}) {
              let e;
              let n = t.chainId ?? I.getState().chainId,
                r = p.getState().find((t) => t.id === n);
              if (t.chainId && !r) throw new C.X4();
              {
                let t = M.get(I.getState().chainId);
                if (t && !r) return t;
                if (!r) throw new C.X4();
              }
              {
                let t = M.get(n);
                if (t) return t;
              }
              if (c.client) e = c.client({ chain: r });
              else {
                let t = r.id,
                  n = p.getState().map((t) => t.id),
                  i = {};
                for (let [e, r] of Object.entries(c))
                  if (
                    "chains" !== e &&
                    "client" !== e &&
                    "connectors" !== e &&
                    "transports" !== e
                  ) {
                    if ("object" == typeof r) {
                      if (t in r) i[e] = r[t];
                      else {
                        if (n.some((t) => t in r)) continue;
                        i[e] = r;
                      }
                    } else i[e] = r;
                  }
                e = (0, o.e)({
                  ...i,
                  chain: r,
                  batch: i.batch ?? { multicall: !0 },
                  transport: (e) => c.transports[t]({ ...e, connectors: g }),
                });
              }
              return M.set(n, e), e;
            },
            get state() {
              return I.getState();
            },
            setState(t) {
              let e;
              e = "function" == typeof t ? t(I.getState()) : t;
              let n = x();
              "object" != typeof e && (e = n),
                Object.keys(n).some((t) => !(t in e)) && (e = n),
                I.setState(e, !0);
            },
            subscribe: (t, e, n) =>
              I.subscribe(
                t,
                e,
                n ? { ...n, fireImmediately: n.emitImmediately } : void 0
              ),
            _internal: {
              mipd: d,
              store: I,
              ssr: !!u,
              syncConnectedChain: s,
              transports: c.transports,
              chains: {
                setState(t) {
                  let e = "function" == typeof t ? t(p.getState()) : t;
                  if (0 !== e.length) return p.setState(e, !0);
                },
                subscribe: (t) => p.subscribe(t),
              },
              connectors: {
                providerDetailToConnector: y,
                setup: A,
                setState: (t) =>
                  g.setState("function" == typeof t ? t(g.getState()) : t, !0),
                subscribe: (t) => g.subscribe(t),
              },
              events: {
                change: B,
                connect: k,
                disconnect: function t(e) {
                  I.setState((n) => {
                    let r = n.connections.get(e.uid);
                    if (
                      (r &&
                        (r.connector.emitter.off("change", B),
                        r.connector.emitter.off("disconnect", t),
                        r.connector.emitter.on("connect", k)),
                      n.connections.delete(e.uid),
                      0 === n.connections.size)
                    )
                      return {
                        ...n,
                        connections: new Map(),
                        current: void 0,
                        status: "disconnected",
                      };
                    let i = n.connections.values().next().value;
                    return {
                      ...n,
                      connections: new Map(n.connections),
                      current: i.connector.uid,
                    };
                  });
                },
              },
            },
          }
        );
      }
    },
    12796: function (t, e, n) {
      "use strict";
      n.d(e, {
        JK: function () {
          return s;
        },
        X4: function () {
          return i;
        },
        aH: function () {
          return a;
        },
        wi: function () {
          return o;
        },
      });
      var r = n(60045);
      class i extends r.G {
        constructor() {
          super("Chain not configured."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainNotConfiguredError",
            });
        }
      }
      class o extends r.G {
        constructor() {
          super("Connector already connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAlreadyConnectedError",
            });
        }
      }
      class a extends r.G {
        constructor() {
          super("Connector not connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorNotConnectedError",
            });
        }
      }
      class s extends r.G {
        constructor({ address: t, connector: e }) {
          super(`Account "${t}" not found for connector "${e.name}".`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAccountNotFoundError",
            });
        }
      }
    },
    6812: function (t, e, n) {
      "use strict";
      n.d(e, {
        M: function () {
          return i;
        },
        O: function () {
          return o;
        },
      });
      var r = n(60045);
      class i extends r.G {
        constructor() {
          super("Provider not found."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ProviderNotFoundError",
            });
        }
      }
      class o extends r.G {
        constructor({ connector: t }) {
          super(`"${t.name}" does not support programmatic chain switching.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SwitchChainNotSupportedError",
            });
        }
      }
    },
    25977: function (t, e, n) {
      "use strict";
      function r(t) {
        if ("string" == typeof t)
          return Number.parseInt(
            t,
            "0x" === t.trim().substring(0, 2) ? 16 : 10
          );
        if ("bigint" == typeof t) return Number(t);
        if ("number" == typeof t) return t;
        throw Error(`Cannot normalize chainId "${t}" of type "${typeof t}"`);
      }
      n.d(e, {
        J: function () {
          return r;
        },
      });
    },
    44049: function (t, e, n) {
      "use strict";
      n.d(e, {
        M: function () {
          return v;
        },
      });
      var r = n(26211),
        i = n(15039),
        o = n(61308),
        a = n(64615),
        s = n(19520);
      function u() {
        var t = (0, i.useRef)(!1);
        return (
          (0, s.L)(function () {
            return (
              (t.current = !0),
              function () {
                t.current = !1;
              }
            );
          }, []),
          t
        );
      }
      var c = n(5945),
        l = n(38024),
        d = n(27766),
        h = function (t) {
          var e = t.children,
            n = t.initial,
            o = t.isPresent,
            a = t.onExitComplete,
            s = t.custom,
            u = t.presenceAffectsLayout,
            h = (0, l.h)(f),
            p = (0, d.M)(),
            g = (0, i.useMemo)(
              function () {
                return {
                  id: p,
                  initial: n,
                  isPresent: o,
                  custom: s,
                  onExitComplete: function (t) {
                    var e, n;
                    h.set(t, !0);
                    try {
                      for (
                        var i = (0, r.__values)(h.values()), o = i.next();
                        !o.done;
                        o = i.next()
                      )
                        if (!o.value) return;
                    } catch (t) {
                      e = { error: t };
                    } finally {
                      try {
                        o && !o.done && (n = i.return) && n.call(i);
                      } finally {
                        if (e) throw e.error;
                      }
                    }
                    null == a || a();
                  },
                  register: function (t) {
                    return (
                      h.set(t, !1),
                      function () {
                        return h.delete(t);
                      }
                    );
                  },
                };
              },
              u ? void 0 : [o]
            );
          return (
            (0, i.useMemo)(
              function () {
                h.forEach(function (t, e) {
                  return h.set(e, !1);
                });
              },
              [o]
            ),
            i.useEffect(
              function () {
                o || h.size || null == a || a();
              },
              [o]
            ),
            i.createElement(c.O.Provider, { value: g }, e)
          );
        };
      function f() {
        return new Map();
      }
      var p = n(13289),
        g = n(25532),
        m = function (t) {
          return t.key || "";
        },
        v = function (t) {
          var e,
            n,
            c,
            l,
            d,
            f,
            v = t.children,
            A = t.custom,
            y = t.initial,
            w = void 0 === y || y,
            b = t.onExitComplete,
            C = t.exitBeforeEnter,
            E = t.presenceAffectsLayout,
            S = void 0 === E || E,
            M = (0, r.__read)(
              ((e = u()),
              (c = (n = (0, r.__read)((0, i.useState)(0), 2))[0]),
              (l = n[1]),
              (d = (0, i.useCallback)(
                function () {
                  e.current && l(c + 1);
                },
                [c]
              )),
              [
                (0, i.useCallback)(
                  function () {
                    return a.ZP.postRender(d);
                  },
                  [d]
                ),
                c,
              ]),
              1
            )[0],
            x = (0, i.useContext)(p.p).forceRender;
          x && (M = x);
          var P = u(),
            I =
              ((f = []),
              i.Children.forEach(v, function (t) {
                (0, i.isValidElement)(t) && f.push(t);
              }),
              f),
            B = I,
            k = new Set(),
            R = (0, i.useRef)(B),
            D = (0, i.useRef)(new Map()).current,
            T = (0, i.useRef)(!0);
          if (
            ((0, s.L)(function () {
              (T.current = !1),
                (function (t, e) {
                  t.forEach(function (t) {
                    var n = m(t);
                    e.set(n, t);
                  });
                })(I, D),
                (R.current = B);
            }),
            (0, g.z)(function () {
              (T.current = !0), D.clear(), k.clear();
            }),
            T.current)
          )
            return i.createElement(
              i.Fragment,
              null,
              B.map(function (t) {
                return i.createElement(
                  h,
                  {
                    key: m(t),
                    isPresent: !0,
                    initial: !!w && void 0,
                    presenceAffectsLayout: S,
                  },
                  t
                );
              })
            );
          B = (0, r.__spreadArray)([], (0, r.__read)(B), !1);
          for (
            var O = R.current.map(m), L = I.map(m), N = O.length, V = 0;
            V < N;
            V++
          ) {
            var Q = O[V];
            -1 === L.indexOf(Q) && k.add(Q);
          }
          return (
            C && k.size && (B = []),
            k.forEach(function (t) {
              if (-1 === L.indexOf(t)) {
                var e = D.get(t);
                if (e) {
                  var n = O.indexOf(t);
                  B.splice(
                    n,
                    0,
                    i.createElement(
                      h,
                      {
                        key: m(e),
                        isPresent: !1,
                        onExitComplete: function () {
                          D.delete(t), k.delete(t);
                          var e = R.current.findIndex(function (e) {
                            return e.key === t;
                          });
                          if ((R.current.splice(e, 1), !k.size)) {
                            if (((R.current = I), !1 === P.current)) return;
                            M(), b && b();
                          }
                        },
                        custom: A,
                        presenceAffectsLayout: S,
                      },
                      e
                    )
                  );
                }
              }
            }),
            (B = B.map(function (t) {
              var e = t.key;
              return k.has(e)
                ? t
                : i.createElement(
                    h,
                    { key: m(t), isPresent: !0, presenceAffectsLayout: S },
                    t
                  );
            })),
            "production" !== o.O &&
              C &&
              B.length > 1 &&
              console.warn(
                "You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."
              ),
            i.createElement(
              i.Fragment,
              null,
              k.size
                ? B
                : B.map(function (t) {
                    return (0, i.cloneElement)(t);
                  })
            )
          );
        };
    },
    81231: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return u;
        },
      });
      var r = n(26211),
        i = n(15039),
        o = n(33348),
        a = n(12256),
        s = n(38024);
      function u(t) {
        var e = t.children,
          n = t.isValidProp,
          u = (0, r.__rest)(t, ["children", "isValidProp"]);
        n && (0, a.K)(n),
          ((u = (0, r.__assign)(
            (0, r.__assign)({}, (0, i.useContext)(o._)),
            u
          )).isStatic = (0, s.h)(function () {
            return u.isStatic;
          }));
        var c = (0, i.useMemo)(
          function () {
            return u;
          },
          [JSON.stringify(u.transition), u.transformPagePoint, u.reducedMotion]
        );
        return i.createElement(o._.Provider, { value: c }, e);
      }
    },
    13289: function (t, e, n) {
      "use strict";
      n.d(e, {
        p: function () {
          return r;
        },
      });
      var r = (0, n(15039).createContext)({});
    },
    33348: function (t, e, n) {
      "use strict";
      n.d(e, {
        _: function () {
          return r;
        },
      });
      var r = (0, n(15039).createContext)({
        transformPagePoint: function (t) {
          return t;
        },
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    5945: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return r;
        },
      });
      var r = (0, n(15039).createContext)(null);
    },
    18707: function (t, e, n) {
      "use strict";
      n.d(e, {
        E: function () {
          return ij;
        },
      });
      var r,
        i,
        o,
        a,
        s = n(26211),
        u = n(15039),
        c = n(61308),
        l = function (t) {
          return {
            isEnabled: function (e) {
              return t.some(function (t) {
                return !!e[t];
              });
            },
          };
        },
        d = {
          measureLayout: l(["layout", "layoutId", "drag"]),
          animation: l([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: l(["exit"]),
          drag: l(["drag", "dragControls"]),
          focus: l(["whileFocus"]),
          hover: l(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: l(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: l(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: l(["whileInView", "onViewportEnter", "onViewportLeave"]),
        },
        h = n(27156),
        f = (0, u.createContext)({ strict: !1 }),
        p = Object.keys(d),
        g = p.length,
        m = n(33348),
        v = (0, u.createContext)({}),
        A = n(5945),
        y = n(19520),
        w = n(28514),
        b = { current: null },
        C = !1;
      function E(t) {
        return (
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function S(t) {
        return Array.isArray(t);
      }
      function M(t) {
        return "string" == typeof t || S(t);
      }
      function x(t, e, n, r, i) {
        var o;
        return (
          void 0 === r && (r = {}),
          void 0 === i && (i = {}),
          "function" == typeof e && (e = e(null != n ? n : t.custom, r, i)),
          "string" == typeof e &&
            (e = null === (o = t.variants) || void 0 === o ? void 0 : o[e]),
          "function" == typeof e && (e = e(null != n ? n : t.custom, r, i)),
          e
        );
      }
      function P(t, e, n) {
        var r,
          i,
          o = t.getProps();
        return x(
          o,
          e,
          null != n ? n : o.custom,
          ((r = {}),
          t.forEachValue(function (t, e) {
            return (r[e] = t.get());
          }),
          r),
          ((i = {}),
          t.forEachValue(function (t, e) {
            return (i[e] = t.getVelocity());
          }),
          i)
        );
      }
      function I(t) {
        var e;
        return (
          "function" ==
            typeof (null === (e = t.animate) || void 0 === e
              ? void 0
              : e.start) ||
          M(t.initial) ||
          M(t.animate) ||
          M(t.whileHover) ||
          M(t.whileDrag) ||
          M(t.whileTap) ||
          M(t.whileFocus) ||
          M(t.exit)
        );
      }
      function B(t) {
        return !!(I(t) || t.variants);
      }
      function k(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var R = n(38024),
        D = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
        T = 1,
        O = n(13289),
        L = (0, u.createContext)({}),
        N = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, s.__extends)(e, t),
            (e.prototype.getSnapshotBeforeUpdate = function () {
              return this.updateProps(), null;
            }),
            (e.prototype.componentDidUpdate = function () {}),
            (e.prototype.updateProps = function () {
              var t = this.props,
                e = t.visualElement,
                n = t.props;
              e && e.setProps(n);
            }),
            (e.prototype.render = function () {
              return this.props.children;
            }),
            e
          );
        })(u.Component),
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
          "svg",
          "switch",
          "symbol",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function Q(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (V.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
      var U = {},
        F = ["", "X", "Y", "Z"],
        j = ["transformPerspective", "x", "y", "z"];
      function z(t, e) {
        return j.indexOf(t) - j.indexOf(e);
      }
      ["translate", "scale", "rotate", "skew"].forEach(function (t) {
        return F.forEach(function (e) {
          return j.push(t + e);
        });
      });
      var H = new Set(j);
      function _(t) {
        return H.has(t);
      }
      var K = new Set(["originX", "originY", "originZ"]);
      function G(t, e) {
        var n = e.layout,
          r = e.layoutId;
        return (
          _(t) ||
          K.has(t) ||
          ((n || void 0 !== r) && (!!U[t] || "opacity" === t))
        );
      }
      var J = function (t) {
          return !!(null !== t && "object" == typeof t && t.getVelocity);
        },
        W = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        };
      function Y(t) {
        return t.startsWith("--");
      }
      let q = (t, e) => (n) => Math.max(Math.min(n, e), t),
        Z = (t) => (t % 1 ? Number(t.toFixed(5)) : t),
        X = /(-)?([\d]*\.?[\d])+/g,
        $ =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        tt =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
      function te(t) {
        return "string" == typeof t;
      }
      let tn = (t) => ({
          test: (e) => te(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        tr = tn("deg"),
        ti = tn("%"),
        to = tn("px"),
        ta = tn("vh"),
        ts = tn("vw"),
        tu = Object.assign(Object.assign({}, ti), {
          parse: (t) => ti.parse(t) / 100,
          transform: (t) => ti.transform(100 * t),
        }),
        tc = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        tl = Object.assign(Object.assign({}, tc), { transform: q(0, 1) }),
        td = Object.assign(Object.assign({}, tc), { default: 1 });
      var th = (0, s.__assign)((0, s.__assign)({}, tc), {
          transform: Math.round,
        }),
        tf = {
          borderWidth: to,
          borderTopWidth: to,
          borderRightWidth: to,
          borderBottomWidth: to,
          borderLeftWidth: to,
          borderRadius: to,
          radius: to,
          borderTopLeftRadius: to,
          borderTopRightRadius: to,
          borderBottomRightRadius: to,
          borderBottomLeftRadius: to,
          width: to,
          maxWidth: to,
          height: to,
          maxHeight: to,
          size: to,
          top: to,
          right: to,
          bottom: to,
          left: to,
          padding: to,
          paddingTop: to,
          paddingRight: to,
          paddingBottom: to,
          paddingLeft: to,
          margin: to,
          marginTop: to,
          marginRight: to,
          marginBottom: to,
          marginLeft: to,
          rotate: tr,
          rotateX: tr,
          rotateY: tr,
          rotateZ: tr,
          scale: td,
          scaleX: td,
          scaleY: td,
          scaleZ: td,
          skew: tr,
          skewX: tr,
          skewY: tr,
          distance: to,
          translateX: to,
          translateY: to,
          translateZ: to,
          x: to,
          y: to,
          z: to,
          perspective: to,
          transformPerspective: to,
          opacity: tl,
          originX: tu,
          originY: tu,
          originZ: to,
          zIndex: th,
          fillOpacity: tl,
          strokeOpacity: tl,
          numOctaves: th,
        };
      function tp(t, e, n, r) {
        var i,
          o,
          a,
          s,
          u = t.style,
          c = t.vars,
          l = t.transform,
          d = t.transformKeys,
          h = t.transformOrigin;
        d.length = 0;
        var f = !1,
          p = !1,
          g = !0;
        for (var m in e) {
          var v = e[m];
          if (Y(m)) {
            c[m] = v;
            continue;
          }
          var A = tf[m],
            y = A && "number" == typeof v ? A.transform(v) : v;
          if (_(m)) {
            if (((f = !0), (l[m] = y), d.push(m), !g)) continue;
            v !== (null !== (s = A.default) && void 0 !== s ? s : 0) &&
              (g = !1);
          } else K.has(m) ? ((h[m] = y), (p = !0)) : (u[m] = y);
        }
        f
          ? (u.transform = (function (t, e, n, r) {
              var i = t.transform,
                o = t.transformKeys,
                a = e.enableHardwareAcceleration,
                s = e.allowTransformNone,
                u = "";
              o.sort(z);
              for (var c = !1, l = o.length, d = 0; d < l; d++) {
                var h = o[d];
                (u += "".concat(W[h] || h, "(").concat(i[h], ") ")),
                  "z" === h && (c = !0);
              }
              return (
                !c && (void 0 === a || a)
                  ? (u += "translateZ(0)")
                  : (u = u.trim()),
                r
                  ? (u = r(i, n ? "" : u))
                  : (void 0 === s || s) && n && (u = "none"),
                u
              );
            })(t, n, g, r))
          : r
          ? (u.transform = r({}, ""))
          : !e.transform && u.transform && (u.transform = "none"),
          p &&
            (u.transformOrigin =
              ((i = h.originX),
              (o = h.originY),
              (a = h.originZ),
              ""
                .concat(void 0 === i ? "50%" : i, " ")
                .concat(void 0 === o ? "50%" : o, " ")
                .concat(void 0 === a ? 0 : a)));
      }
      var tg = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function tm(t, e, n) {
        for (var r in e) J(e[r]) || G(r, n) || (t[r] = e[r]);
      }
      var tv = n(12256);
      function tA(t, e, n) {
        return "string" == typeof t ? t : to.transform(e + n * t);
      }
      var ty = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        tw = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function tb(t, e, n, r) {
        var i,
          o,
          a,
          u,
          c,
          l,
          d,
          h,
          f = e.attrX,
          p = e.attrY,
          g = e.originX,
          m = e.originY,
          v = e.pathLength,
          A = e.pathSpacing,
          y = e.pathOffset;
        tp(
          t,
          (0, s.__rest)(e, [
            "attrX",
            "attrY",
            "originX",
            "originY",
            "pathLength",
            "pathSpacing",
            "pathOffset",
          ]),
          n,
          r
        ),
          (t.attrs = t.style),
          (t.style = {});
        var w = t.attrs,
          b = t.style,
          C = t.dimensions;
        w.transform && (C && (b.transform = w.transform), delete w.transform),
          C &&
            (void 0 !== g || void 0 !== m || b.transform) &&
            (b.transformOrigin =
              ((i = tA(void 0 !== g ? g : 0.5, C.x, C.width)),
              (o = tA(void 0 !== m ? m : 0.5, C.y, C.height)),
              "".concat(i, " ").concat(o))),
          void 0 !== f && (w.x = f),
          void 0 !== p && (w.y = p),
          void 0 !== v &&
            ((c = !1),
            void 0 === (a = void 0 === A ? 1 : A) && (a = 1),
            void 0 === (u = void 0 === y ? 0 : y) && (u = 0),
            void 0 === c && (c = !0),
            (w.pathLength = 1),
            (w[(l = c ? ty : tw).offset] = to.transform(-u)),
            (d = to.transform(v)),
            (h = to.transform(a)),
            (w[l.array] = "".concat(d, " ").concat(h)));
      }
      var tC = function () {
          return (0, s.__assign)((0, s.__assign)({}, tg()), { attrs: {} });
        },
        tE = /([a-z])([A-Z])/g,
        tS = function (t) {
          return t.replace(tE, "$1-$2").toLowerCase();
        };
      function tM(t, e, n, r) {
        var i = e.style,
          o = e.vars;
        for (var a in (Object.assign(t.style, i, r && r.getProjectionStyles(n)),
        o))
          t.style.setProperty(a, o[a]);
      }
      var tx = new Set([
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
      ]);
      function tP(t, e, n, r) {
        for (var i in (tM(t, e, void 0, r), e.attrs))
          t.setAttribute(tx.has(i) ? i : tS(i), e.attrs[i]);
      }
      function tI(t) {
        var e = t.style,
          n = {};
        for (var r in e) (J(e[r]) || G(r, t)) && (n[r] = e[r]);
        return n;
      }
      function tB(t) {
        var e = tI(t);
        for (var n in t)
          J(t[n]) &&
            (e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]);
        return e;
      }
      function tk(t) {
        return "object" == typeof t && "function" == typeof t.start;
      }
      var tR = function (t) {
          return Array.isArray(t);
        },
        tD = function (t) {
          return tR(t) ? t[t.length - 1] || 0 : t;
        };
      function tT(t) {
        var e = J(t) ? t.get() : t;
        return e && "object" == typeof e && e.mix && e.toValue
          ? e.toValue()
          : e;
      }
      function tO(t, e, n, r) {
        var i = t.scrapeMotionValuesFromProps,
          o = t.createRenderState,
          a = t.onMount,
          u = {
            latestValues: (function (t, e, n, r) {
              var i = {},
                o = (null == n ? void 0 : n.initial) === !1,
                a = r(t);
              for (var u in a) i[u] = tT(a[u]);
              var c = t.initial,
                l = t.animate,
                d = I(t),
                h = B(t);
              e &&
                h &&
                !d &&
                !1 !== t.inherit &&
                (null != c || (c = e.initial), null != l || (l = e.animate));
              var f = o || !1 === c,
                p = f ? l : c;
              return (
                p &&
                  "boolean" != typeof p &&
                  !tk(p) &&
                  (Array.isArray(p) ? p : [p]).forEach(function (e) {
                    var n = x(t, e);
                    if (n) {
                      var r = n.transitionEnd;
                      n.transition;
                      var o = (0, s.__rest)(n, ["transitionEnd", "transition"]);
                      for (var a in o) {
                        var u = o[a];
                        if (Array.isArray(u)) {
                          var c = f ? u.length - 1 : 0;
                          u = u[c];
                        }
                        null !== u && (i[a] = u);
                      }
                      for (var a in r) i[a] = r[a];
                    }
                  }),
                i
              );
            })(e, n, r, i),
            renderState: o(),
          };
        return (
          a &&
            (u.mount = function (t) {
              return a(e, t, u);
            }),
          u
        );
      }
      var tL = function (t) {
          return function (e, n) {
            var r = (0, u.useContext)(v),
              i = (0, u.useContext)(A.O);
            return n
              ? tO(t, e, r, i)
              : (0, R.h)(function () {
                  return tO(t, e, r, i);
                });
          };
        },
        tN = {
          useVisualState: tL({
            scrapeMotionValuesFromProps: tB,
            createRenderState: tC,
            onMount: function (t, e, n) {
              var r = n.renderState,
                i = n.latestValues;
              try {
                r.dimensions =
                  "function" == typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (t) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              tb(r, i, { enableHardwareAcceleration: !1 }, t.transformTemplate),
                tP(e, r);
            },
          }),
        },
        tV = {
          useVisualState: tL({
            scrapeMotionValuesFromProps: tI,
            createRenderState: tg,
          }),
        };
      function tQ(t, e, n, r) {
        return (
          void 0 === r && (r = { passive: !0 }),
          t.addEventListener(e, n, r),
          function () {
            return t.removeEventListener(e, n);
          }
        );
      }
      function tU(t, e, n, r) {
        (0, u.useEffect)(
          function () {
            var i = t.current;
            if (n && i) return tQ(i, e, n, r);
          },
          [t, e, n, r]
        );
      }
      function tF(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }
      ((r = o || (o = {})).Animate = "animate"),
        (r.Hover = "whileHover"),
        (r.Tap = "whileTap"),
        (r.Drag = "whileDrag"),
        (r.Focus = "whileFocus"),
        (r.InView = "whileInView"),
        (r.Exit = "exit");
      var tj = { pageX: 0, pageY: 0 };
      function tz(t, e) {
        var n, r, i;
        return (
          void 0 === e && (e = "page"),
          {
            point: t.touches
              ? (void 0 === (n = e) && (n = "page"),
                {
                  x: (r = t.touches[0] || t.changedTouches[0] || tj)[n + "X"],
                  y: r[n + "Y"],
                })
              : (void 0 === (i = e) && (i = "page"),
                { x: t[i + "X"], y: t[i + "Y"] }),
          }
        );
      }
      var tH = function (t, e) {
          void 0 === e && (e = !1);
          var n = function (e) {
            return t(e, tz(e));
          };
          return e
            ? function (t) {
                var e = t instanceof MouseEvent;
                (!e || (e && 0 === t.button)) && n(t);
              }
            : n;
        },
        t_ = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        tK = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function tG(t) {
        if (w.j && null === window.onpointerdown);
        else if (w.j && null === window.ontouchstart) return tK[t];
        else if (w.j && null === window.onmousedown) return t_[t];
        return t;
      }
      function tJ(t, e, n, r) {
        return tQ(t, tG(e), tH(n, "pointerdown" === e), r);
      }
      function tW(t, e, n, r) {
        return tU(t, tG(e), n && tH(n, "pointerdown" === e), r);
      }
      function tY(t) {
        var e = null;
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null;
            })
          );
        };
      }
      var tq = tY("dragHorizontal"),
        tZ = tY("dragVertical");
      function tX(t) {
        var e = !1;
        if ("y" === t) e = tZ();
        else if ("x" === t) e = tq();
        else {
          var n = tq(),
            r = tZ();
          n && r
            ? (e = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return e;
      }
      function t$() {
        var t = tX(!0);
        return !t || (t(), !1);
      }
      function t0(t, e, n) {
        return function (r, i) {
          var a;
          !tF(r) ||
            t$() ||
            (null === (a = t.animationState) ||
              void 0 === a ||
              a.setActive(o.Hover, e),
            null == n || n(r, i));
        };
      }
      var t1 = function (t, e) {
          return !!e && (t === e || t1(t, e.parentElement));
        },
        t2 = n(25532);
      let t3 = (t, e) => (n) => e(t(n)),
        t4 = (...t) => t.reduce(t3);
      var t5 = new Set(),
        t8 = new WeakMap(),
        t9 = new WeakMap(),
        t6 = function (t) {
          var e;
          null === (e = t8.get(t.target)) || void 0 === e || e(t);
        },
        t7 = function (t) {
          t.forEach(t6);
        },
        et = { some: 0, all: 1 },
        ee = function (t) {
          return function (e) {
            return t(e), null;
          };
        },
        en = {
          inView: ee(function (t) {
            var e = t.visualElement,
              n = t.whileInView,
              r = t.onViewportEnter,
              i = t.onViewportLeave,
              a = t.viewport,
              l = void 0 === a ? {} : a,
              d = (0, u.useRef)({ hasEnteredView: !1, isInView: !1 }),
              h = !!(n || r || i);
            l.once && d.current.hasEnteredView && (h = !1),
              ("undefined" == typeof IntersectionObserver
                ? function (t, e, n, r) {
                    var i = r.fallback,
                      a = void 0 === i || i;
                    (0, u.useEffect)(
                      function () {
                        if (t && a) {
                          if ("production" !== c.O) {
                            var r, i;
                            (r =
                              "IntersectionObserver not available on this device. whileInView animations will trigger on mount."),
                              t5.has(r) ||
                                (console.warn(r),
                                i && console.warn(i),
                                t5.add(r));
                          }
                          requestAnimationFrame(function () {
                            e.hasEnteredView = !0;
                            var t,
                              r = n.getProps().onViewportEnter;
                            null == r || r(null),
                              null === (t = n.animationState) ||
                                void 0 === t ||
                                t.setActive(o.InView, !0);
                          });
                        }
                      },
                      [t]
                    );
                  }
                : function (t, e, n, r) {
                    var i = r.root,
                      a = r.margin,
                      c = r.amount,
                      l = void 0 === c ? "some" : c,
                      d = r.once;
                    (0, u.useEffect)(
                      function () {
                        if (t) {
                          var r,
                            u,
                            c,
                            h,
                            f,
                            p,
                            g,
                            m = {
                              root: null == i ? void 0 : i.current,
                              rootMargin: a,
                              threshold: "number" == typeof l ? l : et[l],
                            };
                          return (
                            (r = n.getInstance()),
                            (u = m.root),
                            (c = (0, s.__rest)(m, ["root"])),
                            (h = u || document),
                            t9.has(h) || t9.set(h, {}),
                            (f = t9.get(h))[(p = JSON.stringify(c))] ||
                              (f[p] = new IntersectionObserver(
                                t7,
                                (0, s.__assign)({ root: u }, c)
                              )),
                            (g = f[p]),
                            t8.set(r, function (t) {
                              var r,
                                i = t.isIntersecting;
                              if (e.isInView !== i) {
                                if (
                                  ((e.isInView = i),
                                  d && !i && e.hasEnteredView)
                                )
                                  return;
                                i && (e.hasEnteredView = !0),
                                  null === (r = n.animationState) ||
                                    void 0 === r ||
                                    r.setActive(o.InView, i);
                                var a = n.getProps(),
                                  s = i ? a.onViewportEnter : a.onViewportLeave;
                                null == s || s(t);
                              }
                            }),
                            g.observe(r),
                            function () {
                              t8.delete(r), g.unobserve(r);
                            }
                          );
                        }
                      },
                      [t, i, a, l]
                    );
                  })(h, d.current, e, l);
          }),
          tap: ee(function (t) {
            var e = t.onTap,
              n = t.onTapStart,
              r = t.onTapCancel,
              i = t.whileTap,
              a = t.visualElement,
              s = e || n || r || i,
              c = (0, u.useRef)(!1),
              l = (0, u.useRef)(null),
              d = { passive: !(n || e || r || m) };
            function h() {
              var t;
              null === (t = l.current) || void 0 === t || t.call(l),
                (l.current = null);
            }
            function f() {
              var t;
              return (
                h(),
                (c.current = !1),
                null === (t = a.animationState) ||
                  void 0 === t ||
                  t.setActive(o.Tap, !1),
                !t$()
              );
            }
            function p(t, n) {
              f() &&
                (t1(a.getInstance(), t.target)
                  ? null == e || e(t, n)
                  : null == r || r(t, n));
            }
            function g(t, e) {
              f() && (null == r || r(t, e));
            }
            function m(t, e) {
              var r;
              h(),
                c.current ||
                  ((c.current = !0),
                  (l.current = t4(
                    tJ(window, "pointerup", p, d),
                    tJ(window, "pointercancel", g, d)
                  )),
                  null === (r = a.animationState) ||
                    void 0 === r ||
                    r.setActive(o.Tap, !0),
                  null == n || n(t, e));
            }
            tW(a, "pointerdown", s ? m : void 0, d), (0, t2.z)(h);
          }),
          focus: ee(function (t) {
            var e = t.whileFocus,
              n = t.visualElement;
            tU(
              n,
              "focus",
              e
                ? function () {
                    var t;
                    null === (t = n.animationState) ||
                      void 0 === t ||
                      t.setActive(o.Focus, !0);
                  }
                : void 0
            ),
              tU(
                n,
                "blur",
                e
                  ? function () {
                      var t;
                      null === (t = n.animationState) ||
                        void 0 === t ||
                        t.setActive(o.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: ee(function (t) {
            var e = t.onHoverStart,
              n = t.onHoverEnd,
              r = t.whileHover,
              i = t.visualElement;
            tW(i, "pointerenter", e || r ? t0(i, !0, e) : void 0, {
              passive: !e,
            }),
              tW(i, "pointerleave", n || r ? t0(i, !1, n) : void 0, {
                passive: !n,
              });
          }),
        },
        er = n(27766);
      function ei() {
        var t = (0, u.useContext)(A.O);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          n = t.onExitComplete,
          r = t.register,
          i = (0, er.M)();
        return (
          (0, u.useEffect)(function () {
            return r(i);
          }, []),
          !e && n
            ? [
                !1,
                function () {
                  return null == n ? void 0 : n(i);
                },
              ]
            : [!0]
        );
      }
      function eo(t, e) {
        if (!Array.isArray(e)) return !1;
        var n = e.length;
        if (n !== t.length) return !1;
        for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      let ea = (t, e, n) => Math.min(Math.max(n, t), e);
      function es(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let eu = ["duration", "bounce"],
        ec = ["stiffness", "damping", "mass"];
      function el(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function ed(t) {
        var { from: e = 0, to: n = 1, restSpeed: r = 2, restDelta: i } = t,
          o = (0, s.__rest)(t, ["from", "to", "restSpeed", "restDelta"]);
        let a = { done: !1, value: e },
          {
            stiffness: u,
            damping: c,
            mass: l,
            velocity: d,
            duration: f,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = Object.assign(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              t
            );
            if (!el(t, ec) && el(t, eu)) {
              let n = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: n = 0,
                mass: r = 1,
              }) {
                let i, o;
                (0, h.K)(
                  t <= 1e4,
                  "Spring duration must be 10 seconds or less"
                );
                let a = 1 - e;
                (a = ea(0.05, 1, a)),
                  (t = ea(0.01, 10, t / 1e3)),
                  a < 1
                    ? ((i = (e) => {
                        let r = e * a,
                          i = r * t;
                        return 0.001 - ((r - n) / es(e, a)) * Math.exp(-i);
                      }),
                      (o = (e) => {
                        let r = e * a * t,
                          o = Math.pow(a, 2) * Math.pow(e, 2) * t,
                          s = es(Math.pow(e, 2), a);
                        return (
                          ((r * n + n - o) *
                            Math.exp(-r) *
                            (-i(e) + 0.001 > 0 ? -1 : 1)) /
                          s
                        );
                      }))
                    : ((i = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - n) * t + 1)),
                      (o = (e) => t * t * (n - e) * Math.exp(-e * t)));
                let s = (function (t, e, n) {
                  let r = n;
                  for (let n = 1; n < 12; n++) r -= t(r) / e(r);
                  return r;
                })(i, o, 5 / t);
                if (((t *= 1e3), isNaN(s)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(s, 2) * r;
                  return {
                    stiffness: e,
                    damping: 2 * a * Math.sqrt(r * e),
                    duration: t,
                  };
                }
              })(t);
              (e = Object.assign(Object.assign(Object.assign({}, e), n), {
                velocity: 0,
                mass: 1,
              })).isResolvedFromDuration = !0;
            }
            return e;
          })(o),
          g = eh,
          m = eh;
        function v() {
          let t = d ? -(d / 1e3) : 0,
            r = n - e,
            o = c / (2 * Math.sqrt(u * l)),
            a = Math.sqrt(u / l) / 1e3;
          if (
            (void 0 === i && (i = Math.min(Math.abs(n - e) / 100, 0.4)), o < 1)
          ) {
            let e = es(a, o);
            (g = (i) =>
              n -
              Math.exp(-o * a * i) *
                (((t + o * a * r) / e) * Math.sin(e * i) +
                  r * Math.cos(e * i))),
              (m = (n) => {
                let i = Math.exp(-o * a * n);
                return (
                  o *
                    a *
                    i *
                    ((Math.sin(e * n) * (t + o * a * r)) / e +
                      r * Math.cos(e * n)) -
                  i *
                    (Math.cos(e * n) * (t + o * a * r) -
                      e * r * Math.sin(e * n))
                );
              });
          } else if (1 === o)
            g = (e) => n - Math.exp(-a * e) * (r + (t + a * r) * e);
          else {
            let e = a * Math.sqrt(o * o - 1);
            g = (i) => {
              let s = Math.exp(-o * a * i),
                u = Math.min(e * i, 300);
              return (
                n -
                (s * ((t + o * a * r) * Math.sinh(u) + e * r * Math.cosh(u))) /
                  e
              );
            };
          }
        }
        return (
          v(),
          {
            next: (t) => {
              let e = g(t);
              if (p) a.done = t >= f;
              else {
                let o = 1e3 * m(t),
                  s = Math.abs(n - e) <= i;
                a.done = Math.abs(o) <= r && s;
              }
              return (a.value = a.done ? n : e), a;
            },
            flipTarget: () => {
              (d = -d), ([e, n] = [n, e]), v();
            },
          }
        );
      }
      ed.needsInterpolation = (t, e) =>
        "string" == typeof t || "string" == typeof e;
      let eh = (t) => 0,
        ef = (t, e, n) => {
          let r = e - t;
          return 0 === r ? 1 : (n - t) / r;
        },
        ep = (t, e, n) => -n * t + n * e + t,
        eg = (t, e) => (n) =>
          !!(
            (te(n) && tt.test(n) && n.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(n, e))
          ),
        em = (t, e, n) => (r) => {
          if (!te(r)) return r;
          let [i, o, a, s] = r.match(X);
          return {
            [t]: parseFloat(i),
            [e]: parseFloat(o),
            [n]: parseFloat(a),
            alpha: void 0 !== s ? parseFloat(s) : 1,
          };
        },
        ev = q(0, 255),
        eA = Object.assign(Object.assign({}, tc), {
          transform: (t) => Math.round(ev(t)),
        }),
        ey = {
          test: eg("rgb", "red"),
          parse: em("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
            "rgba(" +
            eA.transform(t) +
            ", " +
            eA.transform(e) +
            ", " +
            eA.transform(n) +
            ", " +
            Z(tl.transform(r)) +
            ")",
        },
        ew = {
          test: eg("#"),
          parse: function (t) {
            let e = "",
              n = "",
              r = "",
              i = "";
            return (
              t.length > 5
                ? ((e = t.substr(1, 2)),
                  (n = t.substr(3, 2)),
                  (r = t.substr(5, 2)),
                  (i = t.substr(7, 2)))
                : ((e = t.substr(1, 1)),
                  (n = t.substr(2, 1)),
                  (r = t.substr(3, 1)),
                  (i = t.substr(4, 1)),
                  (e += e),
                  (n += n),
                  (r += r),
                  (i += i)),
              {
                red: parseInt(e, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: ey.transform,
        },
        eb = {
          test: eg("hsl", "hue"),
          parse: em("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            ti.transform(Z(e)) +
            ", " +
            ti.transform(Z(n)) +
            ", " +
            Z(tl.transform(r)) +
            ")",
        };
      function eC(t, e, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? t + (e - t) * 6 * n
          : n < 0.5
          ? e
          : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t;
      }
      function eE({ hue: t, saturation: e, lightness: n, alpha: r }) {
        (t /= 360), (n /= 100);
        let i = 0,
          o = 0,
          a = 0;
        if ((e /= 100)) {
          let r = n < 0.5 ? n * (1 + e) : n + e - n * e,
            s = 2 * n - r;
          (i = eC(s, r, t + 1 / 3)),
            (o = eC(s, r, t)),
            (a = eC(s, r, t - 1 / 3));
        } else i = o = a = n;
        return {
          red: Math.round(255 * i),
          green: Math.round(255 * o),
          blue: Math.round(255 * a),
          alpha: r,
        };
      }
      let eS = (t, e, n) => {
          let r = t * t;
          return Math.sqrt(Math.max(0, n * (e * e - r) + r));
        },
        eM = [ew, ey, eb],
        ex = (t) => eM.find((e) => e.test(t)),
        eP = (t) =>
          `'${t}' is not an animatable color. Use the equivalent color code instead.`,
        eI = (t, e) => {
          let n = ex(t),
            r = ex(e);
          (0, h.k)(!!n, eP(t)), (0, h.k)(!!r, eP(e));
          let i = n.parse(t),
            o = r.parse(e);
          n === eb && ((i = eE(i)), (n = ey)),
            r === eb && ((o = eE(o)), (r = ey));
          let a = Object.assign({}, i);
          return (t) => {
            for (let e in a) "alpha" !== e && (a[e] = eS(i[e], o[e], t));
            return (a.alpha = ep(i.alpha, o.alpha, t)), n.transform(a);
          };
        },
        eB = {
          test: (t) => ey.test(t) || ew.test(t) || eb.test(t),
          parse: (t) =>
            ey.test(t) ? ey.parse(t) : eb.test(t) ? eb.parse(t) : ew.parse(t),
          transform: (t) =>
            te(t)
              ? t
              : t.hasOwnProperty("red")
              ? ey.transform(t)
              : eb.transform(t),
        },
        ek = "${c}",
        eR = "${n}";
      function eD(t) {
        "number" == typeof t && (t = `${t}`);
        let e = [],
          n = 0,
          r = t.match($);
        r &&
          ((n = r.length), (t = t.replace($, ek)), e.push(...r.map(eB.parse)));
        let i = t.match(X);
        return (
          i && ((t = t.replace(X, eR)), e.push(...i.map(tc.parse))),
          { values: e, numColors: n, tokenised: t }
        );
      }
      function eT(t) {
        return eD(t).values;
      }
      function eO(t) {
        let { values: e, numColors: n, tokenised: r } = eD(t),
          i = e.length;
        return (t) => {
          let e = r;
          for (let r = 0; r < i; r++)
            e = e.replace(
              r < n ? ek : eR,
              r < n ? eB.transform(t[r]) : Z(t[r])
            );
          return e;
        };
      }
      let eL = (t) => ("number" == typeof t ? 0 : t),
        eN = {
          test: function (t) {
            var e, n, r, i;
            return (
              isNaN(t) &&
              te(t) &&
              (null !==
                (n =
                  null === (e = t.match(X)) || void 0 === e
                    ? void 0
                    : e.length) && void 0 !== n
                ? n
                : 0) +
                (null !==
                  (i =
                    null === (r = t.match($)) || void 0 === r
                      ? void 0
                      : r.length) && void 0 !== i
                  ? i
                  : 0) >
                0
            );
          },
          parse: eT,
          createTransformer: eO,
          getAnimatableNone: function (t) {
            let e = eT(t);
            return eO(t)(e.map(eL));
          },
        },
        eV = (t) => "number" == typeof t;
      function eQ(t, e) {
        return eV(t) ? (n) => ep(t, e, n) : eB.test(t) ? eI(t, e) : ez(t, e);
      }
      let eU = (t, e) => {
          let n = [...t],
            r = n.length,
            i = t.map((t, n) => eQ(t, e[n]));
          return (t) => {
            for (let e = 0; e < r; e++) n[e] = i[e](t);
            return n;
          };
        },
        eF = (t, e) => {
          let n = Object.assign(Object.assign({}, t), e),
            r = {};
          for (let i in n)
            void 0 !== t[i] && void 0 !== e[i] && (r[i] = eQ(t[i], e[i]));
          return (t) => {
            for (let e in r) n[e] = r[e](t);
            return n;
          };
        };
      function ej(t) {
        let e = eN.parse(t),
          n = e.length,
          r = 0,
          i = 0,
          o = 0;
        for (let t = 0; t < n; t++)
          r || "number" == typeof e[t] ? r++ : void 0 !== e[t].hue ? o++ : i++;
        return { parsed: e, numNumbers: r, numRGB: i, numHSL: o };
      }
      let ez = (t, e) => {
          let n = eN.createTransformer(e),
            r = ej(t),
            i = ej(e);
          return r.numHSL === i.numHSL &&
            r.numRGB === i.numRGB &&
            r.numNumbers >= i.numNumbers
            ? t4(eU(r.parsed, i.parsed), n)
            : ((0, h.K)(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              (n) => `${n > 0 ? e : t}`);
        },
        eH = (t, e) => (n) => ep(t, e, n);
      function e_(t, e, { clamp: n = !0, ease: r, mixer: i } = {}) {
        let o = t.length;
        (0, h.k)(
          o === e.length,
          "Both input and output ranges must be the same length"
        ),
          (0, h.k)(
            !r || !Array.isArray(r) || r.length === o - 1,
            "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."
          ),
          t[0] > t[o - 1] &&
            ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse());
        let a = (function (t, e, n) {
            var r;
            let i = [],
              o =
                n ||
                ("number" == typeof (r = t[0])
                  ? eH
                  : "string" == typeof r
                  ? eB.test(r)
                    ? eI
                    : ez
                  : Array.isArray(r)
                  ? eU
                  : "object" == typeof r
                  ? eF
                  : void 0),
              a = t.length - 1;
            for (let n = 0; n < a; n++) {
              let r = o(t[n], t[n + 1]);
              e && (r = t4(Array.isArray(e) ? e[n] : e, r)), i.push(r);
            }
            return i;
          })(e, r, i),
          s =
            2 === o
              ? (function ([t, e], [n]) {
                  return (r) => n(ef(t, e, r));
                })(t, a)
              : (function (t, e) {
                  let n = t.length,
                    r = n - 1;
                  return (i) => {
                    let o = 0,
                      a = !1;
                    if (
                      (i <= t[0]
                        ? (a = !0)
                        : i >= t[r] && ((o = r - 1), (a = !0)),
                      !a)
                    ) {
                      let e = 1;
                      for (; e < n && !(t[e] > i) && e !== r; e++);
                      o = e - 1;
                    }
                    let s = ef(t[o], t[o + 1], i);
                    return e[o](s);
                  };
                })(t, a);
        return n ? (e) => s(ea(t[0], t[o - 1], e)) : s;
      }
      let eK = (t) => (e) => 1 - t(1 - e),
        eG = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        eJ = (t) => (e) => e * e * ((t + 1) * e - t),
        eW = 4 / 11,
        eY = 8 / 11,
        eq = (t) => t,
        eZ = (t) => Math.pow(t, 2),
        eX = eK(eZ),
        e$ = eG(eZ),
        e0 = (t) => 1 - Math.sin(Math.acos(t)),
        e1 = eK(e0),
        e2 = eG(e1),
        e3 = eJ(1.525),
        e4 = eK(e3),
        e5 = eG(e3),
        e8 = ((t) => {
          let e = eJ(1.525);
          return (t) =>
            (t *= 2) < 1 ? 0.5 * e(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
        })(0),
        e9 = 4356 / 361,
        e6 = 35442 / 1805,
        e7 = 16061 / 1805,
        nt = (t) => {
          if (1 === t || 0 === t) return t;
          let e = t * t;
          return t < eW
            ? 7.5625 * e
            : t < eY
            ? 9.075 * e - 9.9 * t + 3.4
            : t < 0.9
            ? e9 * e - e6 * t + e7
            : 10.8 * t * t - 20.52 * t + 10.72;
        },
        ne = eK(nt);
      function nn({
        from: t = 0,
        to: e = 1,
        ease: n,
        offset: r,
        duration: i = 300,
      }) {
        let o = { done: !1, value: t },
          a = Array.isArray(e) ? e : [t, e],
          s = (
            r && r.length === a.length
              ? r
              : (function (t) {
                  let e = t.length;
                  return t.map((t, n) => (0 !== n ? n / (e - 1) : 0));
                })(a)
          ).map((t) => t * i);
        function u() {
          return e_(s, a, {
            ease: Array.isArray(n)
              ? n
              : a.map(() => n || e$).splice(0, a.length - 1),
          });
        }
        let c = u();
        return {
          next: (t) => ((o.value = c(t)), (o.done = t >= i), o),
          flipTarget: () => {
            a.reverse(), (c = u());
          },
        };
      }
      let nr = {
        keyframes: nn,
        spring: ed,
        decay: function ({
          velocity: t = 0,
          from: e = 0,
          power: n = 0.8,
          timeConstant: r = 350,
          restDelta: i = 0.5,
          modifyTarget: o,
        }) {
          let a = { done: !1, value: e },
            s = n * t,
            u = e + s,
            c = void 0 === o ? u : o(u);
          return (
            c !== u && (s = c - e),
            {
              next: (t) => {
                let e = -s * Math.exp(-t / r);
                return (
                  (a.done = !(e > i || e < -i)),
                  (a.value = a.done ? c : c + e),
                  a
                );
              },
              flipTarget: () => {},
            }
          );
        },
      };
      var ni = n(64615);
      function no(t, e, n = 0) {
        return t - e - n;
      }
      let na = (t) => {
        let e = ({ delta: e }) => t(e);
        return {
          start: () => ni.ZP.update(e, !0),
          stop: () => ni.qY.update(e),
        };
      };
      function ns(t) {
        let e, n, r;
        var i,
          {
            from: o,
            autoplay: a = !0,
            driver: u = na,
            elapsed: c = 0,
            repeat: l = 0,
            repeatType: d = "loop",
            repeatDelay: h = 0,
            onPlay: f,
            onStop: p,
            onComplete: g,
            onRepeat: m,
            onUpdate: v,
          } = t,
          A = (0, s.__rest)(t, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]);
        let { to: y } = A,
          w = 0,
          b = A.duration,
          C = !1,
          E = !0,
          S = (function (t) {
            if (Array.isArray(t.to)) return nn;
            if (nr[t.type]) return nr[t.type];
            let e = new Set(Object.keys(t));
            if (e.has("ease") || (e.has("duration") && !e.has("dampingRatio")));
            else if (
              e.has("dampingRatio") ||
              e.has("stiffness") ||
              e.has("mass") ||
              e.has("damping") ||
              e.has("restSpeed") ||
              e.has("restDelta")
            )
              return ed;
            return nn;
          })(A);
        (null === (i = S.needsInterpolation) || void 0 === i
          ? void 0
          : i.call(S, o, y)) &&
          ((r = e_([0, 100], [o, y], { clamp: !1 })), (o = 0), (y = 100));
        let M = S(Object.assign(Object.assign({}, A), { from: o, to: y }));
        return (
          a &&
            (null == f || f(),
            (e = u(function (t) {
              if ((E || (t = -t), (c += t), !C)) {
                let t = M.next(Math.max(0, c));
                (n = t.value), r && (n = r(n)), (C = E ? t.done : c <= 0);
              }
              if ((null == v || v(n), C)) {
                if ((0 === w && (null != b || (b = c)), w < l)) {
                  var i, o;
                  (i = c),
                    (o = b),
                    (E ? i >= o + h : i <= -h) &&
                      (w++,
                      "reverse" === d
                        ? (c = (function (t, e, n = 0, r = !0) {
                            return r ? no(e + -t, e, n) : e - (t - e) + n;
                          })(c, b, h, (E = w % 2 == 0)))
                        : ((c = no(c, b, h)), "mirror" === d && M.flipTarget()),
                      (C = !1),
                      m && m());
                } else e.stop(), g && g();
              }
            })).start()),
          {
            stop: () => {
              null == p || p(), e.stop();
            },
          }
        );
      }
      var nu = function (t) {
        return 1e3 * t;
      };
      let nc = (t, e) => 1 - 3 * e + 3 * t,
        nl = (t, e) => 3 * e - 6 * t,
        nd = (t) => 3 * t,
        nh = (t, e, n) => ((nc(e, n) * t + nl(e, n)) * t + nd(e)) * t,
        nf = (t, e, n) => 3 * nc(e, n) * t * t + 2 * nl(e, n) * t + nd(e);
      var np = {
          linear: eq,
          easeIn: eZ,
          easeInOut: e$,
          easeOut: eX,
          circIn: e0,
          circInOut: e2,
          circOut: e1,
          backIn: e3,
          backInOut: e5,
          backOut: e4,
          anticipate: e8,
          bounceIn: ne,
          bounceInOut: (t) =>
            t < 0.5 ? 0.5 * (1 - nt(1 - 2 * t)) : 0.5 * nt(2 * t - 1) + 0.5,
          bounceOut: nt,
        },
        ng = function (t) {
          if (Array.isArray(t)) {
            (0, h.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            var e = (0, s.__read)(t, 4);
            return (function (t, e, n, r) {
              if (t === e && n === r) return eq;
              let i = new Float32Array(11);
              for (let e = 0; e < 11; ++e) i[e] = nh(0.1 * e, t, n);
              return (o) =>
                0 === o || 1 === o
                  ? o
                  : nh(
                      (function (e) {
                        let r = 0,
                          o = 1;
                        for (; 10 !== o && i[o] <= e; ++o) r += 0.1;
                        let a = r + ((e - i[--o]) / (i[o + 1] - i[o])) * 0.1,
                          s = nf(a, t, n);
                        return s >= 0.001
                          ? (function (t, e, n, r) {
                              for (let i = 0; i < 8; ++i) {
                                let i = nf(e, n, r);
                                if (0 === i) break;
                                let o = nh(e, n, r) - t;
                                e -= o / i;
                              }
                              return e;
                            })(e, a, t, n)
                          : 0 === s
                          ? a
                          : (function (t, e, n, r, i) {
                              let o, a;
                              let s = 0;
                              do
                                (o = nh((a = e + (n - e) / 2), r, i) - t) > 0
                                  ? (n = a)
                                  : (e = a);
                              while (Math.abs(o) > 1e-7 && ++s < 10);
                              return a;
                            })(e, r, r + 0.1, t, n);
                      })(o),
                      e,
                      r
                    );
            })(e[0], e[1], e[2], e[3]);
          }
          return "string" == typeof t
            ? ((0, h.k)(
                void 0 !== np[t],
                "Invalid easing type '".concat(t, "'")
              ),
              np[t])
            : t;
        },
        nm = function (t, e) {
          return (
            "zIndex" !== t &&
            !!(
              "number" == typeof e ||
              Array.isArray(e) ||
              ("string" == typeof e && eN.test(e) && !e.startsWith("url("))
            )
          );
        },
        nv = function () {
          return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
        },
        nA = function (t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          };
        },
        ny = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        nw = function (t) {
          return { type: "keyframes", duration: 0.8, values: t };
        },
        nb = {
          x: nv,
          y: nv,
          z: nv,
          rotate: nv,
          rotateX: nv,
          rotateY: nv,
          rotateZ: nv,
          scaleX: nA,
          scaleY: nA,
          scale: nA,
          opacity: ny,
          backgroundColor: ny,
          color: ny,
          default: nA,
        },
        nC = function (t, e) {
          var n;
          return (
            (n = tR(e) ? nw : nb[t] || nb.default),
            (0, s.__assign)({ to: e }, n(e))
          );
        };
      let nE = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function nS(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [r] = n.match(X) || [];
        if (!r) return t;
        let i = n.replace(r, ""),
          o = nE.has(e) ? 1 : 0;
        return r !== n && (o *= 100), e + "(" + o + i + ")";
      }
      let nM = /([a-z-]*)\(.*?\)/g,
        nx = Object.assign(Object.assign({}, eN), {
          getAnimatableNone: (t) => {
            let e = t.match(nM);
            return e ? e.map(nS).join(" ") : t;
          },
        });
      var nP = (0, s.__assign)((0, s.__assign)({}, tf), {
          color: eB,
          backgroundColor: eB,
          outlineColor: eB,
          fill: eB,
          stroke: eB,
          borderColor: eB,
          borderTopColor: eB,
          borderRightColor: eB,
          borderBottomColor: eB,
          borderLeftColor: eB,
          filter: nx,
          WebkitFilter: nx,
        }),
        nI = function (t) {
          return nP[t];
        };
      function nB(t, e) {
        var n,
          r = nI(t);
        return (
          r !== nx && (r = eN),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, e)
        );
      }
      var nk = { current: !1 },
        nR = !1;
      function nD(t) {
        return (
          0 === t ||
          ("string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" "))
        );
      }
      function nT(t) {
        return "number" == typeof t ? 0 : nB("", t);
      }
      function nO(t, e) {
        return t[e] || t.default || t;
      }
      function nL(t, e, n, r) {
        return (
          void 0 === r && (r = {}),
          nk.current && (r = { type: !1 }),
          e.start(function (i) {
            var o,
              a,
              u,
              c,
              l,
              d,
              f,
              p,
              g,
              m,
              v,
              A =
                ((c = n),
                (f =
                  null !== (l = (d = nO(r, t)).from) && void 0 !== l
                    ? l
                    : e.get()),
                (p = nm(t, c)),
                "none" === f && p && "string" == typeof c
                  ? (f = nB(t, c))
                  : nD(f) && "string" == typeof c
                  ? (f = nT(c))
                  : !Array.isArray(c) &&
                    nD(c) &&
                    "string" == typeof f &&
                    (c = nT(f)),
                (g = nm(t, f)),
                (0, h.K)(
                  g === p,
                  "You are trying to animate "
                    .concat(t, ' from "')
                    .concat(f, '" to "')
                    .concat(c, '". ')
                    .concat(
                      f,
                      " is not an animatable value - to enable this animation set "
                    )
                    .concat(f, " to a value animatable to ")
                    .concat(c, " via the `style` property.")
                ),
                g && p && !1 !== d.type
                  ? function () {
                      var n,
                        r,
                        o,
                        a,
                        u,
                        l,
                        p,
                        g,
                        m,
                        v,
                        A,
                        y,
                        w,
                        b = {
                          from: f,
                          to: c,
                          velocity: e.getVelocity(),
                          onComplete: i,
                          onUpdate: function (t) {
                            return e.set(t);
                          },
                        };
                      return "inertia" === d.type || "decay" === d.type
                        ? (function ({
                            from: t = 0,
                            velocity: e = 0,
                            min: n,
                            max: r,
                            power: i = 0.8,
                            timeConstant: o = 750,
                            bounceStiffness: a = 500,
                            bounceDamping: s = 10,
                            restDelta: u = 1,
                            modifyTarget: c,
                            driver: l,
                            onUpdate: d,
                            onComplete: h,
                            onStop: f,
                          }) {
                            let p;
                            function g(t) {
                              return (
                                (void 0 !== n && t < n) ||
                                (void 0 !== r && t > r)
                              );
                            }
                            function m(t) {
                              return void 0 === n
                                ? r
                                : void 0 === r
                                ? n
                                : Math.abs(n - t) < Math.abs(r - t)
                                ? n
                                : r;
                            }
                            function v(t) {
                              null == p || p.stop(),
                                (p = ns(
                                  Object.assign(Object.assign({}, t), {
                                    driver: l,
                                    onUpdate: (e) => {
                                      var n;
                                      null == d || d(e),
                                        null === (n = t.onUpdate) ||
                                          void 0 === n ||
                                          n.call(t, e);
                                    },
                                    onComplete: h,
                                    onStop: f,
                                  })
                                ));
                            }
                            function A(t) {
                              v(
                                Object.assign(
                                  {
                                    type: "spring",
                                    stiffness: a,
                                    damping: s,
                                    restDelta: u,
                                  },
                                  t
                                )
                              );
                            }
                            if (g(t)) A({ from: t, velocity: e, to: m(t) });
                            else {
                              let r,
                                a,
                                s = i * e + t;
                              void 0 !== c && (s = c(s));
                              let l = m(s),
                                d = l === n ? -1 : 1;
                              v({
                                type: "decay",
                                from: t,
                                velocity: e,
                                timeConstant: o,
                                power: i,
                                restDelta: u,
                                modifyTarget: c,
                                onUpdate: g(s)
                                  ? (t) => {
                                      var n, i;
                                      (r = a),
                                        (a = t),
                                        (n = t - r),
                                        (e = (i = (0, ni.$B)().delta)
                                          ? (1e3 / i) * n
                                          : 0),
                                        ((1 === d && t > l) ||
                                          (-1 === d && t < l)) &&
                                          A({ from: t, to: l, velocity: e });
                                    }
                                  : void 0,
                              });
                            }
                            return {
                              stop: () => (null == p ? void 0 : p.stop()),
                            };
                          })((0, s.__assign)((0, s.__assign)({}, b), d))
                        : ns(
                            (0, s.__assign)(
                              (0, s.__assign)(
                                {},
                                ((n = d),
                                (r = b),
                                (o = t),
                                Array.isArray(r.to) &&
                                  ((null !== (a = n.duration) &&
                                    void 0 !== a) ||
                                    (n.duration = 0.8)),
                                Array.isArray(r.to) &&
                                  null === r.to[0] &&
                                  ((r.to = (0, s.__spreadArray)(
                                    [],
                                    (0, s.__read)(r.to),
                                    !1
                                  )),
                                  (r.to[0] = r.from)),
                                (u = n).when,
                                u.delay,
                                u.delayChildren,
                                u.staggerChildren,
                                u.staggerDirection,
                                u.repeat,
                                u.repeatType,
                                u.repeatDelay,
                                u.from,
                                Object.keys(
                                  (0, s.__rest)(u, [
                                    "when",
                                    "delay",
                                    "delayChildren",
                                    "staggerChildren",
                                    "staggerDirection",
                                    "repeat",
                                    "repeatType",
                                    "repeatDelay",
                                    "from",
                                  ])
                                ).length ||
                                  (n = (0, s.__assign)(
                                    (0, s.__assign)({}, n),
                                    nC(o, r.to)
                                  )),
                                (0, s.__assign)(
                                  (0, s.__assign)({}, r),
                                  ((p = (l = n).ease),
                                  (g = l.times),
                                  (m = l.yoyo),
                                  (v = l.flip),
                                  (A = l.loop),
                                  (y = (0, s.__rest)(l, [
                                    "ease",
                                    "times",
                                    "yoyo",
                                    "flip",
                                    "loop",
                                  ])),
                                  (w = (0, s.__assign)({}, y)),
                                  g && (w.offset = g),
                                  y.duration && (w.duration = nu(y.duration)),
                                  y.repeatDelay &&
                                    (w.repeatDelay = nu(y.repeatDelay)),
                                  p &&
                                    (w.ease =
                                      Array.isArray(p) &&
                                      "number" != typeof p[0]
                                        ? p.map(ng)
                                        : ng(p)),
                                  "tween" === y.type && (w.type = "keyframes"),
                                  (m || A || v) &&
                                    ((0, h.K)(
                                      !nR,
                                      "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."
                                    ),
                                    (nR = !0),
                                    m
                                      ? (w.repeatType = "reverse")
                                      : A
                                      ? (w.repeatType = "loop")
                                      : v && (w.repeatType = "mirror"),
                                    (w.repeat = A || m || v || y.repeat)),
                                  "spring" !== y.type && (w.type = "keyframes"),
                                  w)
                                ))
                              ),
                              {
                                onUpdate: function (t) {
                                  var e;
                                  b.onUpdate(t),
                                    null === (e = d.onUpdate) ||
                                      void 0 === e ||
                                      e.call(d, t);
                                },
                                onComplete: function () {
                                  var t;
                                  b.onComplete(),
                                    null === (t = d.onComplete) ||
                                      void 0 === t ||
                                      t.call(d);
                                },
                              }
                            )
                          );
                    }
                  : function () {
                      var t,
                        n,
                        r = tD(c);
                      return (
                        e.set(r),
                        i(),
                        null === (t = null == d ? void 0 : d.onUpdate) ||
                          void 0 === t ||
                          t.call(d, r),
                        null === (n = null == d ? void 0 : d.onComplete) ||
                          void 0 === n ||
                          n.call(d),
                        { stop: function () {} }
                      );
                    }),
              y =
                null !==
                  (u =
                    null !== (a = (nO((o = r), t) || {}).delay) && void 0 !== a
                      ? a
                      : o.delay) && void 0 !== u
                  ? u
                  : 0,
              w = function () {
                return (v = A());
              };
            return (
              y ? (m = window.setTimeout(w, nu(y))) : w(),
              function () {
                clearTimeout(m), null == v || v.stop();
              }
            );
          })
        );
      }
      function nN(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function nV(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      var nQ = (function () {
          function t() {
            this.subscriptions = [];
          }
          return (
            (t.prototype.add = function (t) {
              var e = this;
              return (
                nN(this.subscriptions, t),
                function () {
                  return nV(e.subscriptions, t);
                }
              );
            }),
            (t.prototype.notify = function (t, e, n) {
              var r = this.subscriptions.length;
              if (r) {
                if (1 === r) this.subscriptions[0](t, e, n);
                else
                  for (var i = 0; i < r; i++) {
                    var o = this.subscriptions[i];
                    o && o(t, e, n);
                  }
              }
            }),
            (t.prototype.getSize = function () {
              return this.subscriptions.length;
            }),
            (t.prototype.clear = function () {
              this.subscriptions.length = 0;
            }),
            t
          );
        })(),
        nU = (function () {
          function t(t) {
            var e = this;
            (this.version = "6.5.1"),
              (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new nQ()),
              (this.velocityUpdateSubscribers = new nQ()),
              (this.renderSubscribers = new nQ()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, n) {
                void 0 === n && (n = !0), (e.prev = e.current), (e.current = t);
                var r = (0, ni.$B)(),
                  i = r.delta,
                  o = r.timestamp;
                e.lastUpdated !== o &&
                  ((e.timeDelta = i),
                  (e.lastUpdated = o),
                  ni.ZP.postRender(e.scheduleVelocityCheck)),
                  e.prev !== e.current && e.updateSubscribers.notify(e.current),
                  e.velocityUpdateSubscribers.getSize() &&
                    e.velocityUpdateSubscribers.notify(e.getVelocity()),
                  n && e.renderSubscribers.notify(e.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return ni.ZP.postRender(e.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== e.lastUpdated &&
                  ((e.prev = e.current),
                  e.velocityUpdateSubscribers.notify(e.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity = !isNaN(parseFloat(this.current)));
          }
          return (
            (t.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t);
            }),
            (t.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t);
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t;
            }),
            (t.prototype.set = function (t, e) {
              void 0 === e && (e = !0),
                e && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, e);
            }),
            (t.prototype.get = function () {
              return this.current;
            }),
            (t.prototype.getPrevious = function () {
              return this.prev;
            }),
            (t.prototype.getVelocity = function () {
              var t, e;
              return this.canTrackVelocity
                ? ((t = parseFloat(this.current) - parseFloat(this.prev)),
                  (e = this.timeDelta) ? (1e3 / e) * t : 0)
                : 0;
            }),
            (t.prototype.start = function (t) {
              var e = this;
              return (
                this.stop(),
                new Promise(function (n) {
                  (e.hasAnimated = !0), (e.stopAnimation = t(n));
                }).then(function () {
                  return e.clearAnimation();
                })
              );
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            }),
            t
          );
        })();
      function nF(t) {
        return new nU(t);
      }
      var nj = function (t) {
          return function (e) {
            return e.test(t);
          };
        },
        nz = [
          tc,
          to,
          ti,
          tr,
          ts,
          ta,
          {
            test: function (t) {
              return "auto" === t;
            },
            parse: function (t) {
              return t;
            },
          },
        ],
        nH = function (t) {
          return nz.find(nj(t));
        },
        n_ = (0, s.__spreadArray)(
          (0, s.__spreadArray)([], (0, s.__read)(nz), !1),
          [eB, eN],
          !1
        );
      function nK(t, e, n) {
        void 0 === n && (n = {});
        var r,
          i = P(t, e, n.custom),
          o = (i || {}).transition,
          a = void 0 === o ? t.getDefaultTransition() || {} : o;
        n.transitionOverride && (a = n.transitionOverride);
        var u = i
            ? function () {
                return nG(t, i, n);
              }
            : function () {
                return Promise.resolve();
              },
          c = (
            null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size
          )
            ? function (r) {
                void 0 === r && (r = 0);
                var i,
                  o,
                  u,
                  c,
                  l,
                  d,
                  h,
                  f = a.delayChildren;
                return (
                  (i = (void 0 === f ? 0 : f) + r),
                  (o = a.staggerChildren),
                  (u = a.staggerDirection),
                  (c = n),
                  void 0 === i && (i = 0),
                  void 0 === o && (o = 0),
                  void 0 === u && (u = 1),
                  (l = []),
                  (d = (t.variantChildren.size - 1) * o),
                  (h =
                    1 === u
                      ? function (t) {
                          return void 0 === t && (t = 0), t * o;
                        }
                      : function (t) {
                          return void 0 === t && (t = 0), d - t * o;
                        }),
                  Array.from(t.variantChildren)
                    .sort(nJ)
                    .forEach(function (t, n) {
                      l.push(
                        nK(
                          t,
                          e,
                          (0, s.__assign)((0, s.__assign)({}, c), {
                            delay: i + h(n),
                          })
                        ).then(function () {
                          return t.notifyAnimationComplete(e);
                        })
                      );
                    }),
                  Promise.all(l)
                );
              }
            : function () {
                return Promise.resolve();
              },
          l = a.when;
        if (!l) return Promise.all([u(), c(n.delay)]);
        var d = (0, s.__read)("beforeChildren" === l ? [u, c] : [c, u], 2),
          h = d[0],
          f = d[1];
        return h().then(f);
      }
      function nG(t, e, n) {
        var r,
          i = void 0 === n ? {} : n,
          o = i.delay,
          a = void 0 === o ? 0 : o,
          u = i.transitionOverride,
          c = i.type,
          l = t.makeTargetAnimatable(e),
          d = l.transition,
          h = void 0 === d ? t.getDefaultTransition() : d,
          f = l.transitionEnd,
          p = (0, s.__rest)(l, ["transition", "transitionEnd"]);
        u && (h = u);
        var g = [],
          m =
            c &&
            (null === (r = t.animationState) || void 0 === r
              ? void 0
              : r.getState()[c]);
        for (var v in p) {
          var A = t.getValue(v),
            y = p[v];
          if (
            !(
              !A ||
              void 0 === y ||
              (m &&
                (function (t, e) {
                  var n = t.protectedKeys,
                    r = t.needsAnimating,
                    i = n.hasOwnProperty(e) && !0 !== r[e];
                  return (r[e] = !1), i;
                })(m, v))
            )
          ) {
            var w = (0, s.__assign)({ delay: a }, h);
            t.shouldReduceMotion &&
              _(v) &&
              (w = (0, s.__assign)((0, s.__assign)({}, w), {
                type: !1,
                delay: 0,
              }));
            var b = nL(v, A, y, w);
            g.push(b);
          }
        }
        return Promise.all(g).then(function () {
          f &&
            (function (t, e) {
              var n = P(t, e),
                r = n ? t.makeTargetAnimatable(n, !1) : {},
                i = r.transitionEnd;
              r.transition;
              var o = (0, s.__rest)(r, ["transitionEnd", "transition"]);
              for (var a in (o = (0, s.__assign)(
                (0, s.__assign)({}, o),
                void 0 === i ? {} : i
              ))) {
                var u = tD(o[a]);
                t.hasValue(a) ? t.getValue(a).set(u) : t.addValue(a, nF(u));
              }
            })(t, f);
        });
      }
      function nJ(t, e) {
        return t.sortNodePosition(e);
      }
      var nW = [o.Animate, o.InView, o.Focus, o.Hover, o.Tap, o.Drag, o.Exit],
        nY = (0, s.__spreadArray)([], (0, s.__read)(nW), !1).reverse(),
        nq = nW.length;
      function nZ(t) {
        return (
          void 0 === t && (t = !1),
          {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          }
        );
      }
      var nX = {
        animation: ee(function (t) {
          var e = t.visualElement,
            n = t.animate;
          e.animationState ||
            (e.animationState = (function (t) {
              var e,
                n = function (e) {
                  return Promise.all(
                    e.map(function (e) {
                      return (function (t, e, n) {
                        if (
                          (void 0 === n && (n = {}),
                          t.notifyAnimationStart(e),
                          Array.isArray(e))
                        ) {
                          var r;
                          r = Promise.all(
                            e.map(function (e) {
                              return nK(t, e, n);
                            })
                          );
                        } else if ("string" == typeof e) r = nK(t, e, n);
                        else {
                          var i =
                            "function" == typeof e ? P(t, e, n.custom) : e;
                          r = nG(t, i, n);
                        }
                        return r.then(function () {
                          return t.notifyAnimationComplete(e);
                        });
                      })(t, e.animation, e.options);
                    })
                  );
                },
                r =
                  (((e = {})[o.Animate] = nZ(!0)),
                  (e[o.InView] = nZ()),
                  (e[o.Hover] = nZ()),
                  (e[o.Tap] = nZ()),
                  (e[o.Drag] = nZ()),
                  (e[o.Focus] = nZ()),
                  (e[o.Exit] = nZ()),
                  e),
                i = {},
                a = !0,
                u = function (e, n) {
                  var r = P(t, n);
                  if (r) {
                    r.transition;
                    var i = r.transitionEnd,
                      o = (0, s.__rest)(r, ["transition", "transitionEnd"]);
                    e = (0, s.__assign)(
                      (0, s.__assign)((0, s.__assign)({}, e), o),
                      i
                    );
                  }
                  return e;
                };
              function c(e, o) {
                for (
                  var c,
                    l = t.getProps(),
                    d = t.getVariantContext(!0) || {},
                    h = [],
                    f = new Set(),
                    p = {},
                    g = 1 / 0,
                    m = 0;
                  m < nq;
                  m++
                )
                  !(function (n) {
                    var i,
                      m = nY[n],
                      v = r[m],
                      A = null !== (c = l[m]) && void 0 !== c ? c : d[m],
                      y = M(A),
                      w = m === o ? v.isActive : null;
                    !1 === w && (g = n);
                    var b = A === d[m] && A !== l[m] && y;
                    if (
                      (b && a && t.manuallyAnimateOnMount && (b = !1),
                      (v.protectedKeys = (0, s.__assign)({}, p)),
                      !(
                        (!v.isActive && null === w) ||
                        (!A && !v.prevProp) ||
                        tk(A)
                      ) && "boolean" != typeof A)
                    ) {
                      var C =
                          ((i = v.prevProp),
                          "string" == typeof A ? A !== i : !!S(A) && !eo(A, i)),
                        E =
                          C ||
                          (m === o && v.isActive && !b && y) ||
                          (n > g && y),
                        x = Array.isArray(A) ? A : [A],
                        P = x.reduce(u, {});
                      !1 === w && (P = {});
                      var I = v.prevResolvedValues,
                        B = void 0 === I ? {} : I,
                        k = (0, s.__assign)((0, s.__assign)({}, B), P),
                        R = function (t) {
                          (E = !0), f.delete(t), (v.needsAnimating[t] = !0);
                        };
                      for (var D in k) {
                        var T = P[D],
                          O = B[D];
                        p.hasOwnProperty(D) ||
                          (T !== O
                            ? tR(T) && tR(O)
                              ? !eo(T, O) || C
                                ? R(D)
                                : (v.protectedKeys[D] = !0)
                              : void 0 !== T
                              ? R(D)
                              : f.add(D)
                            : void 0 !== T && f.has(D)
                            ? R(D)
                            : (v.protectedKeys[D] = !0));
                      }
                      (v.prevProp = A),
                        (v.prevResolvedValues = P),
                        v.isActive &&
                          (p = (0, s.__assign)((0, s.__assign)({}, p), P)),
                        a && t.blockInitialAnimation && (E = !1),
                        E &&
                          !b &&
                          h.push.apply(
                            h,
                            (0, s.__spreadArray)(
                              [],
                              (0, s.__read)(
                                x.map(function (t) {
                                  return {
                                    animation: t,
                                    options: (0, s.__assign)({ type: m }, e),
                                  };
                                })
                              ),
                              !1
                            )
                          );
                    }
                  })(m);
                if (((i = (0, s.__assign)({}, p)), f.size)) {
                  var v = {};
                  f.forEach(function (e) {
                    var n = t.getBaseTarget(e);
                    void 0 !== n && (v[e] = n);
                  }),
                    h.push({ animation: v });
                }
                var A = !!h.length;
                return (
                  a &&
                    !1 === l.initial &&
                    !t.manuallyAnimateOnMount &&
                    (A = !1),
                  (a = !1),
                  A ? n(h) : Promise.resolve()
                );
              }
              return {
                isAnimated: function (t) {
                  return void 0 !== i[t];
                },
                animateChanges: c,
                setActive: function (e, n, i) {
                  if (r[e].isActive === n) return Promise.resolve();
                  null === (o = t.variantChildren) ||
                    void 0 === o ||
                    o.forEach(function (t) {
                      var r;
                      return null === (r = t.animationState) || void 0 === r
                        ? void 0
                        : r.setActive(e, n);
                    }),
                    (r[e].isActive = n);
                  var o,
                    a = c(i, e);
                  for (var s in r) r[s].protectedKeys = {};
                  return a;
                },
                setAnimateFunction: function (e) {
                  n = e(t);
                },
                getState: function () {
                  return r;
                },
              };
            })(e)),
            tk(n) &&
              (0, u.useEffect)(
                function () {
                  return n.subscribe(e);
                },
                [n]
              );
        }),
        exit: ee(function (t) {
          var e = t.custom,
            n = t.visualElement,
            r = (0, s.__read)(ei(), 2),
            i = r[0],
            a = r[1],
            c = (0, u.useContext)(A.O);
          (0, u.useEffect)(
            function () {
              n.isPresent = i;
              var t,
                r,
                s =
                  null === (t = n.animationState) || void 0 === t
                    ? void 0
                    : t.setActive(o.Exit, !i, {
                        custom:
                          null !== (r = null == c ? void 0 : c.custom) &&
                          void 0 !== r
                            ? r
                            : e,
                      });
              i || null == s || s.then(a);
            },
            [i]
          );
        }),
      };
      let n$ = (t) => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
        n0 = (t) => n$(t) && t.hasOwnProperty("z"),
        n1 = (t, e) => Math.abs(t - e);
      function n2(t, e) {
        return eV(t) && eV(e)
          ? n1(t, e)
          : n$(t) && n$(e)
          ? Math.sqrt(
              Math.pow(n1(t.x, e.x), 2) +
                Math.pow(n1(t.y, e.y), 2) +
                Math.pow(n0(t) && n0(e) ? n1(t.z, e.z) : 0, 2)
            )
          : void 0;
      }
      var n3 = (function () {
        function t(t, e, n) {
          var r = this,
            i = (void 0 === n ? {} : n).transformPagePoint;
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (r.lastMoveEvent && r.lastMoveEventInfo) {
                var t = n8(r.lastMoveEventInfo, r.history),
                  e = null !== r.startEvent,
                  n = n2(t.offset, { x: 0, y: 0 }) >= 3;
                if (e || n) {
                  var i = t.point,
                    o = (0, ni.$B)().timestamp;
                  r.history.push(
                    (0, s.__assign)((0, s.__assign)({}, i), { timestamp: o })
                  );
                  var a = r.handlers,
                    u = a.onStart,
                    c = a.onMove;
                  e ||
                    (u && u(r.lastMoveEvent, t),
                    (r.startEvent = r.lastMoveEvent)),
                    c && c(r.lastMoveEvent, t);
                }
              }
            }),
            (this.handlePointerMove = function (t, e) {
              if (
                ((r.lastMoveEvent = t),
                (r.lastMoveEventInfo = n4(e, r.transformPagePoint)),
                tF(t) && 0 === t.buttons)
              ) {
                r.handlePointerUp(t, e);
                return;
              }
              ni.ZP.update(r.updatePoint, !0);
            }),
            (this.handlePointerUp = function (t, e) {
              r.end();
              var n = r.handlers,
                i = n.onEnd,
                o = n.onSessionEnd,
                a = n8(n4(e, r.transformPagePoint), r.history);
              r.startEvent && i && i(t, a), o && o(t, a);
            }),
            !t.touches || !(t.touches.length > 1))
          ) {
            (this.handlers = e), (this.transformPagePoint = i);
            var o = n4(tz(t), this.transformPagePoint),
              a = o.point,
              u = (0, ni.$B)().timestamp;
            this.history = [
              (0, s.__assign)((0, s.__assign)({}, a), { timestamp: u }),
            ];
            var c = e.onSessionStart;
            c && c(t, n8(o, this.history)),
              (this.removeListeners = t4(
                tJ(window, "pointermove", this.handlePointerMove),
                tJ(window, "pointerup", this.handlePointerUp),
                tJ(window, "pointercancel", this.handlePointerUp)
              ));
          }
        }
        return (
          (t.prototype.updateHandlers = function (t) {
            this.handlers = t;
          }),
          (t.prototype.end = function () {
            this.removeListeners && this.removeListeners(),
              ni.qY.update(this.updatePoint);
          }),
          t
        );
      })();
      function n4(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function n5(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function n8(t, e) {
        var n = t.point;
        return {
          point: n,
          delta: n5(n, n9(e)),
          offset: n5(n, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            for (
              var n = t.length - 1, r = null, i = n9(t);
              n >= 0 && ((r = t[n]), !(i.timestamp - r.timestamp > nu(0.1)));

            )
              n--;
            if (!r) return { x: 0, y: 0 };
            var o = (i.timestamp - r.timestamp) / 1e3;
            if (0 === o) return { x: 0, y: 0 };
            var a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
            return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
          })(e, 0),
        };
      }
      function n9(t) {
        return t[t.length - 1];
      }
      function n6(t) {
        return t.max - t.min;
      }
      function n7(t, e, n) {
        return (
          void 0 === e && (e = 0), void 0 === n && (n = 0.01), n2(t, e) < n
        );
      }
      function rt(t, e, n, r) {
        void 0 === r && (r = 0.5),
          (t.origin = r),
          (t.originPoint = ep(e.min, e.max, t.origin)),
          (t.scale = n6(n) / n6(e)),
          (n7(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = ep(n.min, n.max, t.origin) - t.originPoint),
          (n7(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function re(t, e, n, r) {
        rt(t.x, e.x, n.x, null == r ? void 0 : r.originX),
          rt(t.y, e.y, n.y, null == r ? void 0 : r.originY);
      }
      function rn(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + n6(e));
      }
      function rr(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + n6(e));
      }
      function ri(t, e, n) {
        rr(t.x, e.x, n.x), rr(t.y, e.y, n.y);
      }
      function ro(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function ra(t, e) {
        var n,
          r = e.min - t.min,
          i = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min &&
            ((r = (n = (0, s.__read)([i, r], 2))[0]), (i = n[1])),
          { min: r, max: i }
        );
      }
      function rs(t, e, n) {
        return { min: ru(t, e), max: ru(t, n) };
      }
      function ru(t, e) {
        var n;
        return "number" == typeof t
          ? t
          : null !== (n = t[e]) && void 0 !== n
          ? n
          : 0;
      }
      var rc = function () {
          return { translate: 0, scale: 1, origin: 0, originPoint: 0 };
        },
        rl = function () {
          return { x: rc(), y: rc() };
        },
        rd = function () {
          return { min: 0, max: 0 };
        },
        rh = function () {
          return { x: rd(), y: rd() };
        };
      function rf(t) {
        return [t("x"), t("y")];
      }
      function rp(t) {
        var e = t.top;
        return {
          x: { min: t.left, max: t.right },
          y: { min: e, max: t.bottom },
        };
      }
      function rg(t) {
        return void 0 === t || 1 === t;
      }
      function rm(t) {
        var e = t.scale,
          n = t.scaleX,
          r = t.scaleY;
        return !rg(e) || !rg(n) || !rg(r);
      }
      function rv(t) {
        var e, n;
        return (
          rm(t) ||
          ((e = t.x) && "0%" !== e) ||
          ((n = t.y) && "0%" !== n) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY
        );
      }
      function rA(t, e, n, r, i) {
        return void 0 !== i && (t = r + i * (t - r)), r + n * (t - r) + e;
      }
      function ry(t, e, n, r, i) {
        void 0 === e && (e = 0),
          void 0 === n && (n = 1),
          (t.min = rA(t.min, e, n, r, i)),
          (t.max = rA(t.max, e, n, r, i));
      }
      function rw(t, e) {
        var n = e.x,
          r = e.y;
        ry(t.x, n.translate, n.scale, n.originPoint),
          ry(t.y, r.translate, r.scale, r.originPoint);
      }
      function rb(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function rC(t, e, n) {
        var r = (0, s.__read)(n, 3),
          i = r[0],
          o = r[1],
          a = r[2],
          u = void 0 !== e[a] ? e[a] : 0.5,
          c = ep(t.min, t.max, u);
        ry(t, e[i], e[o], c, e.scale);
      }
      var rE = ["x", "scaleX", "originX"],
        rS = ["y", "scaleY", "originY"];
      function rM(t, e) {
        rC(t.x, e, rE), rC(t.y, e, rS);
      }
      function rx(t, e) {
        return rp(
          (function (t, e) {
            if (!e) return t;
            var n = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var rP = new WeakMap(),
        rI = (function () {
          function t(t) {
            (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = rh()),
              (this.visualElement = t);
          }
          return (
            (t.prototype.start = function (t, e) {
              var n = this,
                r = (void 0 === e ? {} : e).snapToCursor,
                i = void 0 !== r && r;
              !1 !== this.visualElement.isPresent &&
                (this.panSession = new n3(
                  t,
                  {
                    onSessionStart: function (t) {
                      n.stopAnimation(),
                        i && n.snapToCursor(tz(t, "page").point);
                    },
                    onStart: function (t, e) {
                      var r,
                        i = n.getProps(),
                        a = i.drag,
                        s = i.dragPropagation,
                        u = i.onDragStart;
                      (!a ||
                        s ||
                        (n.openGlobalLock && n.openGlobalLock(),
                        (n.openGlobalLock = tX(a)),
                        n.openGlobalLock)) &&
                        ((n.isDragging = !0),
                        (n.currentDirection = null),
                        n.resolveConstraints(),
                        n.visualElement.projection &&
                          ((n.visualElement.projection.isAnimationBlocked = !0),
                          (n.visualElement.projection.target = void 0)),
                        rf(function (t) {
                          var e,
                            r,
                            i = n.getAxisMotionValue(t).get() || 0;
                          if (ti.test(i)) {
                            var o =
                              null ===
                                (r =
                                  null === (e = n.visualElement.projection) ||
                                  void 0 === e
                                    ? void 0
                                    : e.layout) || void 0 === r
                                ? void 0
                                : r.actual[t];
                            if (o) {
                              var a = n6(o);
                              i = (parseFloat(i) / 100) * a;
                            }
                          }
                          n.originPoint[t] = i;
                        }),
                        null == u || u(t, e),
                        null === (r = n.visualElement.animationState) ||
                          void 0 === r ||
                          r.setActive(o.Drag, !0));
                    },
                    onMove: function (t, e) {
                      var r = n.getProps(),
                        i = r.dragPropagation,
                        o = r.dragDirectionLock,
                        a = r.onDirectionLock,
                        s = r.onDrag;
                      if (i || n.openGlobalLock) {
                        var u,
                          c,
                          l = e.offset;
                        if (o && null === n.currentDirection) {
                          (n.currentDirection =
                            (void 0 === u && (u = 10),
                            (c = null),
                            Math.abs(l.y) > u
                              ? (c = "y")
                              : Math.abs(l.x) > u && (c = "x"),
                            c)),
                            null !== n.currentDirection &&
                              (null == a || a(n.currentDirection));
                          return;
                        }
                        n.updateAxis("x", e.point, l),
                          n.updateAxis("y", e.point, l),
                          n.visualElement.syncRender(),
                          null == s || s(t, e);
                      }
                    },
                    onSessionEnd: function (t, e) {
                      return n.stop(t, e);
                    },
                  },
                  {
                    transformPagePoint:
                      this.visualElement.getTransformPagePoint(),
                  }
                ));
            }),
            (t.prototype.stop = function (t, e) {
              var n = this.isDragging;
              if ((this.cancel(), n)) {
                var r = e.velocity;
                this.startAnimation(r);
                var i = this.getProps().onDragEnd;
                null == i || i(t, e);
              }
            }),
            (t.prototype.cancel = function () {
              var t, e;
              (this.isDragging = !1),
                this.visualElement.projection &&
                  (this.visualElement.projection.isAnimationBlocked = !1),
                null === (t = this.panSession) || void 0 === t || t.end(),
                (this.panSession = void 0),
                !this.getProps().dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (e = this.visualElement.animationState) ||
                  void 0 === e ||
                  e.setActive(o.Drag, !1);
            }),
            (t.prototype.updateAxis = function (t, e, n) {
              var r = this.getProps().drag;
              if (n && rB(t, r, this.currentDirection)) {
                var i,
                  o,
                  a,
                  s,
                  u,
                  c = this.getAxisMotionValue(t),
                  l = this.originPoint[t] + n[t];
                this.constraints &&
                  this.constraints[t] &&
                  ((i = l),
                  (o = this.constraints[t]),
                  (a = this.elastic[t]),
                  (s = o.min),
                  (u = o.max),
                  void 0 !== s && i < s
                    ? (i = a ? ep(s, i, a.min) : Math.max(i, s))
                    : void 0 !== u &&
                      i > u &&
                      (i = a ? ep(u, i, a.max) : Math.min(i, u)),
                  (l = i)),
                  c.set(l);
              }
            }),
            (t.prototype.resolveConstraints = function () {
              var t,
                e,
                n,
                r,
                i,
                o,
                a = this,
                s = this.getProps(),
                u = s.dragConstraints,
                c = s.dragElastic,
                l = (this.visualElement.projection || {}).layout,
                d = this.constraints;
              u && E(u)
                ? this.constraints ||
                  (this.constraints = this.resolveRefConstraints())
                : u && l
                ? (this.constraints =
                    ((t = l.actual),
                    (e = u.top),
                    (n = u.left),
                    (r = u.bottom),
                    (i = u.right),
                    { x: ro(t.x, n, i), y: ro(t.y, e, r) }))
                : (this.constraints = !1),
                (this.elastic =
                  (void 0 === (o = c) && (o = 0.35),
                  !1 === o ? (o = 0) : !0 === o && (o = 0.35),
                  { x: rs(o, "left", "right"), y: rs(o, "top", "bottom") })),
                d !== this.constraints &&
                  l &&
                  this.constraints &&
                  !this.hasMutatedConstraints &&
                  rf(function (t) {
                    if (a.getAxisMotionValue(t)) {
                      var e, n, r;
                      a.constraints[t] =
                        ((e = l.actual[t]),
                        (n = a.constraints[t]),
                        (r = {}),
                        void 0 !== n.min && (r.min = n.min - e.min),
                        void 0 !== n.max && (r.max = n.max - e.min),
                        r);
                    }
                  });
            }),
            (t.prototype.resolveRefConstraints = function () {
              var t = this.getProps(),
                e = t.dragConstraints,
                n = t.onMeasureDragConstraints;
              if (!e || !E(e)) return !1;
              var r = e.current;
              (0, h.k)(
                null !== r,
                "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
              );
              var i = this.visualElement.projection;
              if (!i || !i.layout) return !1;
              var o =
                  ((s = i.root),
                  (u = rx(r, this.visualElement.getTransformPagePoint())),
                  (c = s.scroll) && (rb(u.x, c.x), rb(u.y, c.y)),
                  u),
                a = { x: ra((l = i.layout.actual).x, o.x), y: ra(l.y, o.y) };
              if (n) {
                var s,
                  u,
                  c,
                  l,
                  d,
                  f,
                  p,
                  g = n(
                    ((f = (d = a).x),
                    {
                      top: (p = d.y).min,
                      right: f.max,
                      bottom: p.max,
                      left: f.min,
                    })
                  );
                (this.hasMutatedConstraints = !!g), g && (a = rp(g));
              }
              return a;
            }),
            (t.prototype.startAnimation = function (t) {
              var e = this,
                n = this.getProps(),
                r = n.drag,
                i = n.dragMomentum,
                o = n.dragElastic,
                a = n.dragTransition,
                u = n.dragSnapToOrigin,
                c = n.onDragTransitionEnd,
                l = this.constraints || {};
              return Promise.all(
                rf(function (n) {
                  if (rB(n, r, e.currentDirection)) {
                    var c,
                      d =
                        null !== (c = null == l ? void 0 : l[n]) && void 0 !== c
                          ? c
                          : {};
                    u && (d = { min: 0, max: 0 });
                    var h = (0, s.__assign)(
                      (0, s.__assign)(
                        {
                          type: "inertia",
                          velocity: i ? t[n] : 0,
                          bounceStiffness: o ? 200 : 1e6,
                          bounceDamping: o ? 40 : 1e7,
                          timeConstant: 750,
                          restDelta: 1,
                          restSpeed: 10,
                        },
                        a
                      ),
                      d
                    );
                    return e.startAxisValueAnimation(n, h);
                  }
                })
              ).then(c);
            }),
            (t.prototype.startAxisValueAnimation = function (t, e) {
              var n = this.getAxisMotionValue(t);
              return nL(t, n, 0, e);
            }),
            (t.prototype.stopAnimation = function () {
              var t = this;
              rf(function (e) {
                return t.getAxisMotionValue(e).stop();
              });
            }),
            (t.prototype.getAxisMotionValue = function (t) {
              var e,
                n,
                r = "_drag" + t.toUpperCase();
              return (
                this.visualElement.getProps()[r] ||
                this.visualElement.getValue(
                  t,
                  null !==
                    (n =
                      null === (e = this.visualElement.getProps().initial) ||
                      void 0 === e
                        ? void 0
                        : e[t]) && void 0 !== n
                    ? n
                    : 0
                )
              );
            }),
            (t.prototype.snapToCursor = function (t) {
              var e = this;
              rf(function (n) {
                if (rB(n, e.getProps().drag, e.currentDirection)) {
                  var r = e.visualElement.projection,
                    i = e.getAxisMotionValue(n);
                  if (r && r.layout) {
                    var o = r.layout.actual[n],
                      a = o.min,
                      s = o.max;
                    i.set(t[n] - ep(a, s, 0.5));
                  }
                }
              });
            }),
            (t.prototype.scalePositionWithinConstraints = function () {
              var t,
                e = this,
                n = this.getProps(),
                r = n.drag,
                i = n.dragConstraints,
                o = this.visualElement.projection;
              if (E(i) && o && this.constraints) {
                this.stopAnimation();
                var a = { x: 0, y: 0 };
                rf(function (t) {
                  var n = e.getAxisMotionValue(t);
                  if (n) {
                    var r,
                      i,
                      o,
                      s,
                      u,
                      c = n.get();
                    a[t] =
                      ((r = { min: c, max: c }),
                      (i = e.constraints[t]),
                      (o = 0.5),
                      (s = n6(r)),
                      (u = n6(i)) > s
                        ? (o = ef(i.min, i.max - s, r.min))
                        : s > u && (o = ef(r.min, r.max - u, i.min)),
                      ea(0, 1, o));
                  }
                });
                var s = this.visualElement.getProps().transformTemplate;
                (this.visualElement.getInstance().style.transform = s
                  ? s({}, "")
                  : "none"),
                  null === (t = o.root) || void 0 === t || t.updateScroll(),
                  o.updateLayout(),
                  this.resolveConstraints(),
                  rf(function (t) {
                    if (rB(t, r, null)) {
                      var n = e.getAxisMotionValue(t),
                        i = e.constraints[t],
                        o = i.min,
                        s = i.max;
                      n.set(ep(o, s, a[t]));
                    }
                  });
              }
            }),
            (t.prototype.addListeners = function () {
              var t,
                e = this;
              rP.set(this.visualElement, this);
              var n = tJ(
                  this.visualElement.getInstance(),
                  "pointerdown",
                  function (t) {
                    var n = e.getProps(),
                      r = n.drag,
                      i = n.dragListener;
                    r && (void 0 === i || i) && e.start(t);
                  }
                ),
                r = function () {
                  E(e.getProps().dragConstraints) &&
                    (e.constraints = e.resolveRefConstraints());
                },
                i = this.visualElement.projection,
                o = i.addEventListener("measure", r);
              i &&
                !i.layout &&
                (null === (t = i.root) || void 0 === t || t.updateScroll(),
                i.updateLayout()),
                r();
              var a = tQ(window, "resize", function () {
                return e.scalePositionWithinConstraints();
              });
              return (
                i.addEventListener("didUpdate", function (t) {
                  var n = t.delta,
                    r = t.hasLayoutChanged;
                  e.isDragging &&
                    r &&
                    (rf(function (t) {
                      var r = e.getAxisMotionValue(t);
                      r &&
                        ((e.originPoint[t] += n[t].translate),
                        r.set(r.get() + n[t].translate));
                    }),
                    e.visualElement.syncRender());
                }),
                function () {
                  a(), n(), o();
                }
              );
            }),
            (t.prototype.getProps = function () {
              var t = this.visualElement.getProps(),
                e = t.drag,
                n = t.dragDirectionLock,
                r = t.dragPropagation,
                i = t.dragConstraints,
                o = t.dragElastic,
                a = t.dragMomentum;
              return (0, s.__assign)((0, s.__assign)({}, t), {
                drag: void 0 !== e && e,
                dragDirectionLock: void 0 !== n && n,
                dragPropagation: void 0 !== r && r,
                dragConstraints: void 0 !== i && i,
                dragElastic: void 0 === o ? 0.35 : o,
                dragMomentum: void 0 === a || a,
              });
            }),
            t
          );
        })();
      function rB(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      var rk = {
          pan: ee(function (t) {
            var e = t.onPan,
              n = t.onPanStart,
              r = t.onPanEnd,
              i = t.onPanSessionStart,
              o = t.visualElement,
              a = (0, u.useRef)(null),
              s = (0, u.useContext)(m._).transformPagePoint,
              c = {
                onSessionStart: i,
                onStart: n,
                onMove: e,
                onEnd: function (t, e) {
                  (a.current = null), r && r(t, e);
                },
              };
            (0, u.useEffect)(function () {
              null !== a.current && a.current.updateHandlers(c);
            }),
              tW(
                o,
                "pointerdown",
                (e || n || r || i) &&
                  function (t) {
                    a.current = new n3(t, c, { transformPagePoint: s });
                  }
              ),
              (0, t2.z)(function () {
                return a.current && a.current.end();
              });
          }),
          drag: ee(function (t) {
            var e = t.dragControls,
              n = t.visualElement,
              r = (0, R.h)(function () {
                return new rI(n);
              });
            (0, u.useEffect)(
              function () {
                return e && e.subscribe(r);
              },
              [r, e]
            ),
              (0, u.useEffect)(
                function () {
                  return r.addListeners();
                },
                [r]
              );
          }),
        },
        rR = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "LayoutAnimationStart",
          "SetAxisTarget",
          "Unmount",
        ],
        rD = function (t) {
          var e = t.treeType,
            n = void 0 === e ? "" : e,
            r = t.build,
            i = t.getBaseTarget,
            o = t.makeTargetAnimatable,
            a = t.measureViewportBox,
            u = t.render,
            c = t.readValueFromInstance,
            l = t.removeValueFromRenderState,
            d = t.sortNodePosition,
            h = t.scrapeMotionValuesFromProps;
          return function (t, e) {
            var f,
              p,
              g,
              m,
              v,
              A = t.parent,
              y = t.props,
              w = t.presenceId,
              b = t.blockInitialAnimation,
              C = t.visualState,
              E = t.shouldReduceMotion;
            void 0 === e && (e = {});
            var S = !1,
              x = C.latestValues,
              P = C.renderState,
              k =
                ((f = rR.map(function () {
                  return new nQ();
                })),
                (p = {}),
                (g = {
                  clearAllListeners: function () {
                    return f.forEach(function (t) {
                      return t.clear();
                    });
                  },
                  updatePropListeners: function (t) {
                    rR.forEach(function (e) {
                      var n,
                        r = "on" + e,
                        i = t[r];
                      null === (n = p[e]) || void 0 === n || n.call(p),
                        i && (p[e] = g[r](i));
                    });
                  },
                }),
                f.forEach(function (t, e) {
                  (g["on" + rR[e]] = function (e) {
                    return t.add(e);
                  }),
                    (g["notify" + rR[e]] = function () {
                      for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                      return t.notify.apply(
                        t,
                        (0, s.__spreadArray)([], (0, s.__read)(e), !1)
                      );
                    });
                }),
                g),
              R = new Map(),
              D = new Map(),
              T = {},
              O = (0, s.__assign)({}, x);
            function L() {
              m && S && (N(), u(m, P, y.style, _.projection));
            }
            function N() {
              r(_, P, x, e, y);
            }
            function V() {
              k.notifyUpdate(x);
            }
            function Q(t, e) {
              var n = e.onChange(function (e) {
                  (x[t] = e), y.onUpdate && ni.ZP.update(V, !1, !0);
                }),
                r = e.onRenderRequest(_.scheduleRender);
              D.set(t, function () {
                n(), r();
              });
            }
            var U = h(y);
            for (var F in U) {
              var j = U[F];
              void 0 !== x[F] && J(j) && j.set(x[F], !1);
            }
            var z = I(y),
              H = B(y),
              _ = (0, s.__assign)(
                (0, s.__assign)(
                  {
                    treeType: n,
                    current: null,
                    depth: A ? A.depth + 1 : 0,
                    parent: A,
                    children: new Set(),
                    presenceId: w,
                    shouldReduceMotion: E,
                    variantChildren: H ? new Set() : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: !!(null == A
                      ? void 0
                      : A.isMounted()),
                    blockInitialAnimation: b,
                    isMounted: function () {
                      return !!m;
                    },
                    mount: function (t) {
                      (S = !0),
                        (m = _.current = t),
                        _.projection && _.projection.mount(t),
                        H &&
                          A &&
                          !z &&
                          (v = null == A ? void 0 : A.addVariantChild(_)),
                        R.forEach(function (t, e) {
                          return Q(e, t);
                        }),
                        null == A || A.children.add(_),
                        _.setProps(y);
                    },
                    unmount: function () {
                      var t;
                      null === (t = _.projection) ||
                        void 0 === t ||
                        t.unmount(),
                        ni.qY.update(V),
                        ni.qY.render(L),
                        D.forEach(function (t) {
                          return t();
                        }),
                        null == v || v(),
                        null == A || A.children.delete(_),
                        k.clearAllListeners(),
                        (m = void 0),
                        (S = !1);
                    },
                    addVariantChild: function (t) {
                      var e,
                        n = _.getClosestVariantNode();
                      if (n)
                        return (
                          null === (e = n.variantChildren) ||
                            void 0 === e ||
                            e.add(t),
                          function () {
                            return n.variantChildren.delete(t);
                          }
                        );
                    },
                    sortNodePosition: function (t) {
                      return d && n === t.treeType
                        ? d(_.getInstance(), t.getInstance())
                        : 0;
                    },
                    getClosestVariantNode: function () {
                      return H
                        ? _
                        : null == A
                        ? void 0
                        : A.getClosestVariantNode();
                    },
                    getLayoutId: function () {
                      return y.layoutId;
                    },
                    getInstance: function () {
                      return m;
                    },
                    getStaticValue: function (t) {
                      return x[t];
                    },
                    setStaticValue: function (t, e) {
                      return (x[t] = e);
                    },
                    getLatestValues: function () {
                      return x;
                    },
                    setVisibility: function (t) {
                      _.isVisible !== t &&
                        ((_.isVisible = t), _.scheduleRender());
                    },
                    makeTargetAnimatable: function (t, e) {
                      return void 0 === e && (e = !0), o(_, t, y, e);
                    },
                    measureViewportBox: function () {
                      return a(m, y);
                    },
                    addValue: function (t, e) {
                      _.hasValue(t) && _.removeValue(t),
                        R.set(t, e),
                        (x[t] = e.get()),
                        Q(t, e);
                    },
                    removeValue: function (t) {
                      var e;
                      R.delete(t),
                        null === (e = D.get(t)) || void 0 === e || e(),
                        D.delete(t),
                        delete x[t],
                        l(t, P);
                    },
                    hasValue: function (t) {
                      return R.has(t);
                    },
                    getValue: function (t, e) {
                      var n = R.get(t);
                      return (
                        void 0 === n &&
                          void 0 !== e &&
                          ((n = nF(e)), _.addValue(t, n)),
                        n
                      );
                    },
                    forEachValue: function (t) {
                      return R.forEach(t);
                    },
                    readValue: function (t) {
                      var n;
                      return null !== (n = x[t]) && void 0 !== n
                        ? n
                        : c(m, t, e);
                    },
                    setBaseTarget: function (t, e) {
                      O[t] = e;
                    },
                    getBaseTarget: function (t) {
                      if (i) {
                        var e = i(y, t);
                        if (void 0 !== e && !J(e)) return e;
                      }
                      return O[t];
                    },
                  },
                  k
                ),
                {
                  build: function () {
                    return N(), P;
                  },
                  scheduleRender: function () {
                    ni.ZP.render(L, !1, !0);
                  },
                  syncRender: L,
                  setProps: function (t) {
                    (t.transformTemplate || y.transformTemplate) &&
                      _.scheduleRender(),
                      (y = t),
                      k.updatePropListeners(t),
                      (T = (function (t, e, n) {
                        var r;
                        for (var i in e) {
                          var o = e[i],
                            a = n[i];
                          if (J(o)) t.addValue(i, o);
                          else if (J(a)) t.addValue(i, nF(o));
                          else if (a !== o) {
                            if (t.hasValue(i)) {
                              var s = t.getValue(i);
                              s.hasAnimated || s.set(o);
                            } else
                              t.addValue(
                                i,
                                nF(
                                  null !== (r = t.getStaticValue(i)) &&
                                    void 0 !== r
                                    ? r
                                    : o
                                )
                              );
                          }
                        }
                        for (var i in n) void 0 === e[i] && t.removeValue(i);
                        return e;
                      })(_, h(y), T));
                  },
                  getProps: function () {
                    return y;
                  },
                  getVariant: function (t) {
                    var e;
                    return null === (e = y.variants) || void 0 === e
                      ? void 0
                      : e[t];
                  },
                  getDefaultTransition: function () {
                    return y.transition;
                  },
                  getTransformPagePoint: function () {
                    return y.transformPagePoint;
                  },
                  getVariantContext: function (t) {
                    if ((void 0 === t && (t = !1), t))
                      return null == A ? void 0 : A.getVariantContext();
                    if (!z) {
                      var e =
                        (null == A ? void 0 : A.getVariantContext()) || {};
                      return void 0 !== y.initial && (e.initial = y.initial), e;
                    }
                    for (var n = {}, r = 0; r < rO; r++) {
                      var i = rT[r],
                        o = y[i];
                      (M(o) || !1 === o) && (n[i] = o);
                    }
                    return n;
                  },
                }
              );
            return _;
          };
        },
        rT = (0, s.__spreadArray)(["initial"], (0, s.__read)(nW), !1),
        rO = rT.length;
      function rL(t) {
        return "string" == typeof t && t.startsWith("var(--");
      }
      var rN = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function rV(t, e, n) {
        void 0 === n && (n = 1),
          (0, h.k)(
            n <= 4,
            'Max CSS variable fallback depth detected in property "'.concat(
              t,
              '". This may indicate a circular fallback dependency.'
            )
          );
        var r = (0, s.__read)(
            (function (t) {
              var e = rN.exec(t);
              if (!e) return [,];
              var n = (0, s.__read)(e, 3);
              return [n[1], n[2]];
            })(t),
            2
          ),
          i = r[0],
          o = r[1];
        if (i) {
          var a = window.getComputedStyle(e).getPropertyValue(i);
          return a ? a.trim() : rL(o) ? rV(o, e, n + 1) : o;
        }
      }
      var rQ = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        rU = function (t) {
          return rQ.has(t);
        },
        rF = function (t, e) {
          t.set(e, !1), t.set(e);
        },
        rj = function (t) {
          return t === tc || t === to;
        };
      ((i = a || (a = {})).width = "width"),
        (i.height = "height"),
        (i.left = "left"),
        (i.right = "right"),
        (i.top = "top"),
        (i.bottom = "bottom");
      var rz = function (t, e) {
          return parseFloat(t.split(", ")[e]);
        },
        rH = function (t, e) {
          return function (n, r) {
            var i = r.transform;
            if ("none" === i || !i) return 0;
            var o = i.match(/^matrix3d\((.+)\)$/);
            if (o) return rz(o[1], e);
            var a = i.match(/^matrix\((.+)\)$/);
            return a ? rz(a[1], t) : 0;
          };
        },
        r_ = new Set(["x", "y", "z"]),
        rK = j.filter(function (t) {
          return !r_.has(t);
        }),
        rG = {
          width: function (t, e) {
            var n = t.x,
              r = e.paddingLeft,
              i = e.paddingRight;
            return (
              n.max -
              n.min -
              parseFloat(void 0 === r ? "0" : r) -
              parseFloat(void 0 === i ? "0" : i)
            );
          },
          height: function (t, e) {
            var n = t.y,
              r = e.paddingTop,
              i = e.paddingBottom;
            return (
              n.max -
              n.min -
              parseFloat(void 0 === r ? "0" : r) -
              parseFloat(void 0 === i ? "0" : i)
            );
          },
          top: function (t, e) {
            return parseFloat(e.top);
          },
          left: function (t, e) {
            return parseFloat(e.left);
          },
          bottom: function (t, e) {
            var n = t.y;
            return parseFloat(e.top) + (n.max - n.min);
          },
          right: function (t, e) {
            var n = t.x;
            return parseFloat(e.left) + (n.max - n.min);
          },
          x: rH(4, 13),
          y: rH(5, 14),
        },
        rJ = function (t, e, n) {
          var r = e.measureViewportBox(),
            i = e.getInstance(),
            o = getComputedStyle(i),
            a = o.display,
            s = {};
          "none" === a && e.setStaticValue("display", t.display || "block"),
            n.forEach(function (t) {
              s[t] = rG[t](r, o);
            }),
            e.syncRender();
          var u = e.measureViewportBox();
          return (
            n.forEach(function (n) {
              rF(e.getValue(n), s[n]), (t[n] = rG[n](u, o));
            }),
            t
          );
        },
        rW = function (t, e, n, r) {
          void 0 === n && (n = {}),
            void 0 === r && (r = {}),
            (e = (0, s.__assign)({}, e)),
            (r = (0, s.__assign)({}, r));
          var i = Object.keys(e).filter(rU),
            o = [],
            a = !1,
            u = [];
          if (
            (i.forEach(function (i) {
              var s,
                c = t.getValue(i);
              if (t.hasValue(i)) {
                var l = n[i],
                  d = nH(l),
                  f = e[i];
                if (tR(f)) {
                  var p = f.length,
                    g = null === f[0] ? 1 : 0;
                  d = nH((l = f[g]));
                  for (var m = g; m < p; m++)
                    s
                      ? (0, h.k)(
                          nH(f[m]) === s,
                          "All keyframes must be of the same type"
                        )
                      : ((s = nH(f[m])),
                        (0, h.k)(
                          s === d || (rj(d) && rj(s)),
                          "Keyframes must be of the same dimension as the current value"
                        ));
                } else s = nH(f);
                if (d !== s) {
                  if (rj(d) && rj(s)) {
                    var v,
                      A = c.get();
                    "string" == typeof A && c.set(parseFloat(A)),
                      "string" == typeof f
                        ? (e[i] = parseFloat(f))
                        : Array.isArray(f) &&
                          s === to &&
                          (e[i] = f.map(parseFloat));
                  } else
                    (null == d ? void 0 : d.transform) &&
                    (null == s ? void 0 : s.transform) &&
                    (0 === l || 0 === f)
                      ? 0 === l
                        ? c.set(s.transform(l))
                        : (e[i] = d.transform(f))
                      : (a ||
                          ((v = []),
                          rK.forEach(function (e) {
                            var n = t.getValue(e);
                            void 0 !== n &&
                              (v.push([e, n.get()]),
                              n.set(e.startsWith("scale") ? 1 : 0));
                          }),
                          v.length && t.syncRender(),
                          (o = v),
                          (a = !0)),
                        u.push(i),
                        (r[i] = void 0 !== r[i] ? r[i] : e[i]),
                        rF(c, f));
                }
              }
            }),
            !u.length)
          )
            return { target: e, transitionEnd: r };
          var c = u.indexOf("height") >= 0 ? window.pageYOffset : null,
            l = rJ(e, t, u);
          return (
            o.length &&
              o.forEach(function (e) {
                var n = (0, s.__read)(e, 2),
                  r = n[0],
                  i = n[1];
                t.getValue(r).set(i);
              }),
            t.syncRender(),
            null !== c && window.scrollTo({ top: c }),
            { target: l, transitionEnd: r }
          );
        },
        rY = function (t, e, n, r) {
          var i,
            o,
            a = (function (t, e, n) {
              var r,
                i = (0, s.__rest)(e, []),
                o = t.getInstance();
              if (!(o instanceof Element))
                return { target: i, transitionEnd: n };
              for (var a in (n && (n = (0, s.__assign)({}, n)),
              t.forEachValue(function (t) {
                var e = t.get();
                if (rL(e)) {
                  var n = rV(e, o);
                  n && t.set(n);
                }
              }),
              i)) {
                var u = i[a];
                if (rL(u)) {
                  var c = rV(u, o);
                  c &&
                    ((i[a] = c),
                    n && ((null !== (r = n[a]) && void 0 !== r) || (n[a] = u)));
                }
              }
              return { target: i, transitionEnd: n };
            })(t, e, r);
          return (
            (i = e = a.target),
            (o = r = a.transitionEnd),
            Object.keys(i).some(rU)
              ? rW(t, i, n, o)
              : { target: i, transitionEnd: o }
          );
        },
        rq = {
          treeType: "dom",
          readValueFromInstance: function (t, e) {
            if (_(e)) {
              var n = nI(e);
              return (n && n.default) || 0;
            }
            var r = window.getComputedStyle(t);
            return (Y(e) ? r.getPropertyValue(e) : r[e]) || 0;
          },
          sortNodePosition: function (t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1;
          },
          getBaseTarget: function (t, e) {
            var n;
            return null === (n = t.style) || void 0 === n ? void 0 : n[e];
          },
          measureViewportBox: function (t, e) {
            return rx(t, e.transformPagePoint);
          },
          resetTransform: function (t, e, n) {
            var r = n.transformTemplate;
            (e.style.transform = r ? r({}, "") : "none"), t.scheduleRender();
          },
          restoreTransform: function (t, e) {
            t.style.transform = e.style.transform;
          },
          removeValueFromRenderState: function (t, e) {
            var n = e.vars,
              r = e.style;
            delete n[t], delete r[t];
          },
          makeTargetAnimatable: function (t, e, n, r) {
            var i = n.transformValues;
            void 0 === r && (r = !0);
            var o = e.transition,
              a = e.transitionEnd,
              u = (0, s.__rest)(e, ["transition", "transitionEnd"]),
              c = (function (t, e, n) {
                var r,
                  i,
                  o = {};
                for (var a in t)
                  o[a] =
                    null !==
                      (r = (function (t, e) {
                        if (e) return (e[t] || e.default || e).from;
                      })(a, e)) && void 0 !== r
                      ? r
                      : null === (i = n.getValue(a)) || void 0 === i
                      ? void 0
                      : i.get();
                return o;
              })(u, o || {}, t);
            if ((i && (a && (a = i(a)), u && (u = i(u)), c && (c = i(c))), r)) {
              !(function (t, e, n) {
                var r,
                  i,
                  o,
                  a = Object.keys(e).filter(function (e) {
                    return !t.hasValue(e);
                  }),
                  s = a.length;
                if (s)
                  for (var u = 0; u < s; u++) {
                    var c,
                      l,
                      d,
                      h = a[u],
                      f = e[h],
                      p = null;
                    Array.isArray(f) && (p = f[0]),
                      null === p &&
                        (p =
                          null !==
                            (i =
                              null !== (r = n[h]) && void 0 !== r
                                ? r
                                : t.readValue(h)) && void 0 !== i
                            ? i
                            : e[h]),
                      null != p &&
                        ("string" == typeof p &&
                        ((c = p),
                        /^\-?\d*\.?\d+$/.test(c) ||
                          ((l = p), /^0[^.\s]+$/.test(l)))
                          ? (p = parseFloat(p))
                          : ((d = p),
                            !n_.find(nj(d)) && eN.test(f) && (p = nB(h, f))),
                        t.addValue(h, nF(p)),
                        (null !== (o = n[h]) && void 0 !== o) || (n[h] = p),
                        t.setBaseTarget(h, p));
                  }
              })(t, u, c);
              var l = rY(t, u, c, a);
              (a = l.transitionEnd), (u = l.target);
            }
            return (0, s.__assign)({ transition: o, transitionEnd: a }, u);
          },
          scrapeMotionValuesFromProps: tI,
          build: function (t, e, n, r, i) {
            void 0 !== t.isVisible &&
              (e.style.visibility = t.isVisible ? "visible" : "hidden"),
              tp(e, n, r, i.transformTemplate);
          },
          render: tM,
        },
        rZ = rD(rq),
        rX = rD(
          (0, s.__assign)((0, s.__assign)({}, rq), {
            getBaseTarget: function (t, e) {
              return t[e];
            },
            readValueFromInstance: function (t, e) {
              var n;
              return _(e)
                ? (null === (n = nI(e)) || void 0 === n ? void 0 : n.default) ||
                    0
                : ((e = tx.has(e) ? e : tS(e)), t.getAttribute(e));
            },
            scrapeMotionValuesFromProps: tB,
            build: function (t, e, n, r, i) {
              tb(e, n, r, i.transformTemplate);
            },
            render: tP,
          })
        ),
        r$ = function (t, e) {
          return Q(t)
            ? rX(e, { enableHardwareAcceleration: !1 })
            : rZ(e, { enableHardwareAcceleration: !0 });
        };
      function r0(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      var r1 = {
          correct: function (t, e) {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!to.test(t)) return t;
              t = parseFloat(t);
            }
            var n = r0(t, e.target.x),
              r = r0(t, e.target.y);
            return "".concat(n, "% ").concat(r, "%");
          },
        },
        r2 = "_$css",
        r3 = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, s.__extends)(e, t),
            (e.prototype.componentDidMount = function () {
              var t = this,
                e = this.props,
                n = e.visualElement,
                r = e.layoutGroup,
                i = e.switchLayoutGroup,
                o = e.layoutId,
                a = n.projection;
              Object.assign(U, r4),
                a &&
                  ((null == r ? void 0 : r.group) && r.group.add(a),
                  (null == i ? void 0 : i.register) && o && i.register(a),
                  a.root.didUpdate(),
                  a.addEventListener("animationComplete", function () {
                    t.safeToRemove();
                  }),
                  a.setOptions(
                    (0, s.__assign)((0, s.__assign)({}, a.options), {
                      onExitComplete: function () {
                        return t.safeToRemove();
                      },
                    })
                  )),
                (D.hasEverUpdated = !0);
            }),
            (e.prototype.getSnapshotBeforeUpdate = function (t) {
              var e = this,
                n = this.props,
                r = n.layoutDependency,
                i = n.visualElement,
                o = n.drag,
                a = n.isPresent,
                s = i.projection;
              return (
                s &&
                  ((s.isPresent = a),
                  o || t.layoutDependency !== r || void 0 === r
                    ? s.willUpdate()
                    : this.safeToRemove(),
                  t.isPresent === a ||
                    (a
                      ? s.promote()
                      : s.relegate() ||
                        ni.ZP.postRender(function () {
                          var t;
                          (null === (t = s.getStack()) || void 0 === t
                            ? void 0
                            : t.members.length) || e.safeToRemove();
                        }))),
                null
              );
            }),
            (e.prototype.componentDidUpdate = function () {
              var t = this.props.visualElement.projection;
              t &&
                (t.root.didUpdate(),
                !t.currentAnimation && t.isLead() && this.safeToRemove());
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this.props,
                e = t.visualElement,
                n = t.layoutGroup,
                r = t.switchLayoutGroup,
                i = e.projection;
              i &&
                (i.scheduleCheckAfterUnmount(),
                (null == n ? void 0 : n.group) && n.group.remove(i),
                (null == r ? void 0 : r.deregister) && r.deregister(i));
            }),
            (e.prototype.safeToRemove = function () {
              var t = this.props.safeToRemove;
              null == t || t();
            }),
            (e.prototype.render = function () {
              return null;
            }),
            e
          );
        })(u.Component),
        r4 = {
          borderRadius: (0, s.__assign)((0, s.__assign)({}, r1), {
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          }),
          borderTopLeftRadius: r1,
          borderTopRightRadius: r1,
          borderBottomLeftRadius: r1,
          borderBottomRightRadius: r1,
          boxShadow: {
            correct: function (t, e) {
              var n = e.treeScale,
                r = e.projectionDelta,
                i = t,
                o = t.includes("var("),
                a = [];
              o &&
                (t = t.replace(rN, function (t) {
                  return a.push(t), r2;
                }));
              var s = eN.parse(t);
              if (s.length > 5) return i;
              var u = eN.createTransformer(t),
                c = "number" != typeof s[0] ? 1 : 0,
                l = r.x.scale * n.x,
                d = r.y.scale * n.y;
              (s[0 + c] /= l), (s[1 + c] /= d);
              var h = ep(l, d, 0.5);
              "number" == typeof s[2 + c] && (s[2 + c] /= h),
                "number" == typeof s[3 + c] && (s[3 + c] /= h);
              var f = u(s);
              if (o) {
                var p = 0;
                f = f.replace(r2, function () {
                  var t = a[p];
                  return p++, t;
                });
              }
              return f;
            },
          },
        },
        r5 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        r8 = r5.length,
        r9 = function (t) {
          return "string" == typeof t ? parseFloat(t) : t;
        },
        r6 = function (t) {
          return "number" == typeof t || to.test(t);
        };
      function r7(t, e) {
        var n;
        return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius;
      }
      var it = ir(0, 0.5, e1),
        ie = ir(0.5, 0.95, eq);
      function ir(t, e, n) {
        return function (r) {
          return r < t ? 0 : r > e ? 1 : n(ef(t, e, r));
        };
      }
      function ii(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function io(t, e) {
        ii(t.x, e.x), ii(t.y, e.y);
      }
      function ia(t, e, n, r, i) {
        return (
          (t -= e),
          (t = r + (1 / n) * (t - r)),
          void 0 !== i && (t = r + (1 / i) * (t - r)),
          t
        );
      }
      function is(t, e, n, r, i) {
        var o = (0, s.__read)(n, 3),
          a = o[0],
          u = o[1],
          c = o[2];
        !(function (t, e, n, r, i, o, a) {
          if (
            (void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = 0.5),
            void 0 === o && (o = t),
            void 0 === a && (a = t),
            ti.test(e) &&
              ((e = parseFloat(e)), (e = ep(a.min, a.max, e / 100) - a.min)),
            "number" == typeof e)
          ) {
            var s = ep(o.min, o.max, r);
            t === o && (s -= e),
              (t.min = ia(t.min, e, n, s, i)),
              (t.max = ia(t.max, e, n, s, i));
          }
        })(t, e[a], e[u], e[c], e.scale, r, i);
      }
      var iu = ["x", "scaleX", "originX"],
        ic = ["y", "scaleY", "originY"];
      function il(t, e, n, r) {
        is(t.x, e, iu, null == n ? void 0 : n.x, null == r ? void 0 : r.x),
          is(t.y, e, ic, null == n ? void 0 : n.y, null == r ? void 0 : r.y);
      }
      function id(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function ih(t) {
        return id(t.x) && id(t.y);
      }
      function ip(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        );
      }
      var ig = (function () {
        function t() {
          this.members = [];
        }
        return (
          (t.prototype.add = function (t) {
            nN(this.members, t), t.scheduleRender();
          }),
          (t.prototype.remove = function (t) {
            if (
              (nV(this.members, t),
              t === this.prevLead && (this.prevLead = void 0),
              t === this.lead)
            ) {
              var e = this.members[this.members.length - 1];
              e && this.promote(e);
            }
          }),
          (t.prototype.relegate = function (t) {
            var e,
              n = this.members.findIndex(function (e) {
                return t === e;
              });
            if (0 === n) return !1;
            for (var r = n; r >= 0; r--) {
              var i = this.members[r];
              if (!1 !== i.isPresent) {
                e = i;
                break;
              }
            }
            return !!e && (this.promote(e), !0);
          }),
          (t.prototype.promote = function (t, e) {
            var n,
              r = this.lead;
            t !== r &&
              ((this.prevLead = r),
              (this.lead = t),
              t.show(),
              r &&
                (r.instance && r.scheduleRender(),
                t.scheduleRender(),
                (t.resumeFrom = r),
                e && (t.resumeFrom.preserveOpacity = !0),
                r.snapshot &&
                  ((t.snapshot = r.snapshot),
                  (t.snapshot.latestValues =
                    r.animationValues || r.latestValues),
                  (t.snapshot.isShared = !0)),
                (null === (n = t.root) || void 0 === n
                  ? void 0
                  : n.isUpdating) && (t.isLayoutDirty = !0),
                !1 === t.options.crossfade && r.hide()));
          }),
          (t.prototype.exitAnimationComplete = function () {
            this.members.forEach(function (t) {
              var e, n, r, i, o;
              null === (n = (e = t.options).onExitComplete) ||
                void 0 === n ||
                n.call(e),
                null ===
                  (o =
                    null === (r = t.resumingFrom) || void 0 === r
                      ? void 0
                      : (i = r.options).onExitComplete) ||
                  void 0 === o ||
                  o.call(i);
            });
          }),
          (t.prototype.scheduleRender = function () {
            this.members.forEach(function (t) {
              t.instance && t.scheduleRender(!1);
            });
          }),
          (t.prototype.removeLeadSnapshot = function () {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
          }),
          t
        );
      })();
      function im(t, e, n) {
        var r = t.x.translate / e.x,
          i = t.y.translate / e.y,
          o = "translate3d(".concat(r, "px, ").concat(i, "px, 0) ");
        if (((o += "scale(".concat(1 / e.x, ", ").concat(1 / e.y, ") ")), n)) {
          var a = n.rotate,
            s = n.rotateX,
            u = n.rotateY;
          a && (o += "rotate(".concat(a, "deg) ")),
            s && (o += "rotateX(".concat(s, "deg) ")),
            u && (o += "rotateY(".concat(u, "deg) "));
        }
        var c = t.x.scale * e.x,
          l = t.y.scale * e.y;
        return "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" ===
          (o += "scale(".concat(c, ", ").concat(l, ")"))
          ? "none"
          : o;
      }
      var iv = function (t, e) {
          return t.depth - e.depth;
        },
        iA = (function () {
          function t() {
            (this.children = []), (this.isDirty = !1);
          }
          return (
            (t.prototype.add = function (t) {
              nN(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.remove = function (t) {
              nV(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.forEach = function (t) {
              this.isDirty && this.children.sort(iv),
                (this.isDirty = !1),
                this.children.forEach(t);
            }),
            t
          );
        })();
      function iy(t) {
        var e = t.attachResizeListener,
          n = t.defaultParent,
          r = t.measureScroll,
          i = t.checkIsScrollRoot,
          o = t.resetTransform;
        return (function () {
          function t(t, e, r) {
            var i = this;
            void 0 === e && (e = {}),
              void 0 === r && (r = null == n ? void 0 : n()),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                i.isUpdating && ((i.isUpdating = !1), i.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                i.nodes.forEach(ix), i.nodes.forEach(iP);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = t),
              (this.latestValues = e),
              (this.root = r ? r.root || r : this),
              (this.path = r
                ? (0, s.__spreadArray)(
                    (0, s.__spreadArray)([], (0, s.__read)(r.path), !1),
                    [r],
                    !1
                  )
                : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (var o = 0; o < this.path.length; o++)
              this.path[o].shouldResetTransform = !0;
            this.root === this && (this.nodes = new iA());
          }
          return (
            (t.prototype.addEventListener = function (t, e) {
              return (
                this.eventHandlers.has(t) ||
                  this.eventHandlers.set(t, new nQ()),
                this.eventHandlers.get(t).add(e)
              );
            }),
            (t.prototype.notifyListeners = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              var r = this.eventHandlers.get(t);
              null == r ||
                r.notify.apply(
                  r,
                  (0, s.__spreadArray)([], (0, s.__read)(e), !1)
                );
            }),
            (t.prototype.hasListeners = function (t) {
              return this.eventHandlers.has(t);
            }),
            (t.prototype.registerPotentialNode = function (t, e) {
              this.potentialNodes.set(t, e);
            }),
            (t.prototype.mount = function (t, n) {
              var r = this;
              if ((void 0 === n && (n = !1), !this.instance)) {
                (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
                  (this.instance = t);
                var i = this.options,
                  o = i.layoutId,
                  a = i.layout,
                  u = i.visualElement;
                if (
                  (u && !u.getInstance() && u.mount(t),
                  this.root.nodes.add(this),
                  null === (c = this.parent) ||
                    void 0 === c ||
                    c.children.add(this),
                  this.id && this.root.potentialNodes.delete(this.id),
                  n && (a || o) && (this.isLayoutDirty = !0),
                  e)
                ) {
                  var c,
                    l,
                    d = function () {
                      return (r.root.updateBlockedByResize = !1);
                    };
                  e(t, function () {
                    (r.root.updateBlockedByResize = !0),
                      clearTimeout(l),
                      (l = window.setTimeout(d, 250)),
                      D.hasAnimatedSinceResize &&
                        ((D.hasAnimatedSinceResize = !1), r.nodes.forEach(iM));
                  });
                }
                o && this.root.registerSharedNode(o, this),
                  !1 !== this.options.animate &&
                    u &&
                    (o || a) &&
                    this.addEventListener("didUpdate", function (t) {
                      var e,
                        n,
                        i,
                        o,
                        a,
                        c = t.delta,
                        l = t.hasLayoutChanged,
                        d = t.hasRelativeTargetChanged,
                        h = t.layout;
                      if (r.isTreeAnimationBlocked()) {
                        (r.target = void 0), (r.relativeTarget = void 0);
                        return;
                      }
                      var f =
                          null !==
                            (n =
                              null !== (e = r.options.transition) &&
                              void 0 !== e
                                ? e
                                : u.getDefaultTransition()) && void 0 !== n
                            ? n
                            : iT,
                        p = u.getProps(),
                        g = p.onLayoutAnimationStart,
                        m = p.onLayoutAnimationComplete,
                        v = !r.targetLayout || !ip(r.targetLayout, h) || d,
                        A = !l && d;
                      if (
                        (null === (i = r.resumeFrom) || void 0 === i
                          ? void 0
                          : i.instance) ||
                        A ||
                        (l && (v || !r.currentAnimation))
                      ) {
                        r.resumeFrom &&
                          ((r.resumingFrom = r.resumeFrom),
                          (r.resumingFrom.resumingFrom = void 0)),
                          r.setAnimationOrigin(c, A);
                        var y = (0, s.__assign)(
                          (0, s.__assign)({}, nO(f, "layout")),
                          { onPlay: g, onComplete: m }
                        );
                        u.shouldReduceMotion && ((y.delay = 0), (y.type = !1)),
                          r.startAnimation(y);
                      } else l || 0 !== r.animationProgress || r.finishAnimation(), r.isLead() && (null === (a = (o = r.options).onExitComplete) || void 0 === a || a.call(o));
                      r.targetLayout = h;
                    });
              }
            }),
            (t.prototype.unmount = function () {
              var t, e;
              this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.remove(this),
                null === (e = this.parent) ||
                  void 0 === e ||
                  e.children.delete(this),
                (this.instance = void 0),
                ni.qY.preRender(this.updateProjection);
            }),
            (t.prototype.blockUpdate = function () {
              this.updateManuallyBlocked = !0;
            }),
            (t.prototype.unblockUpdate = function () {
              this.updateManuallyBlocked = !1;
            }),
            (t.prototype.isUpdateBlocked = function () {
              return this.updateManuallyBlocked || this.updateBlockedByResize;
            }),
            (t.prototype.isTreeAnimationBlocked = function () {
              var t;
              return (
                this.isAnimationBlocked ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isTreeAnimationBlocked()) ||
                !1
              );
            }),
            (t.prototype.startUpdate = function () {
              var t;
              this.isUpdateBlocked() ||
                ((this.isUpdating = !0),
                null === (t = this.nodes) || void 0 === t || t.forEach(iI));
            }),
            (t.prototype.willUpdate = function (t) {
              if ((void 0 === t && (t = !0), this.root.isUpdateBlocked())) {
                null === (n = (e = this.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(e);
                return;
              }
              if (
                (this.root.isUpdating || this.root.startUpdate(),
                !this.isLayoutDirty)
              ) {
                this.isLayoutDirty = !0;
                for (var e, n, r, i = 0; i < this.path.length; i++) {
                  var o = this.path[i];
                  (o.shouldResetTransform = !0), o.updateScroll();
                }
                var a = this.options,
                  s = a.layoutId,
                  u = a.layout;
                if (void 0 !== s || u) {
                  var c =
                    null === (r = this.options.visualElement) || void 0 === r
                      ? void 0
                      : r.getProps().transformTemplate;
                  (this.prevTransformTemplateValue =
                    null == c ? void 0 : c(this.latestValues, "")),
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate");
                }
              }
            }),
            (t.prototype.didUpdate = function () {
              if (this.isUpdateBlocked()) {
                this.unblockUpdate(),
                  this.clearAllSnapshots(),
                  this.nodes.forEach(iE);
                return;
              }
              this.isUpdating &&
                ((this.isUpdating = !1),
                this.potentialNodes.size &&
                  (this.potentialNodes.forEach(iO),
                  this.potentialNodes.clear()),
                this.nodes.forEach(iS),
                this.nodes.forEach(iw),
                this.nodes.forEach(ib),
                this.clearAllSnapshots(),
                ni.iW.update(),
                ni.iW.preRender(),
                ni.iW.render());
            }),
            (t.prototype.clearAllSnapshots = function () {
              this.nodes.forEach(iC), this.sharedNodes.forEach(iB);
            }),
            (t.prototype.scheduleUpdateProjection = function () {
              ni.ZP.preRender(this.updateProjection, !1, !0);
            }),
            (t.prototype.scheduleCheckAfterUnmount = function () {
              var t = this;
              ni.ZP.postRender(function () {
                t.isLayoutDirty
                  ? t.root.didUpdate()
                  : t.root.checkUpdateFailed();
              });
            }),
            (t.prototype.updateSnapshot = function () {
              if (!this.snapshot && this.instance) {
                var t = this.measure(),
                  e = this.removeTransform(this.removeElementScroll(t));
                iN(e),
                  (this.snapshot = {
                    measured: t,
                    layout: e,
                    latestValues: {},
                  });
              }
            }),
            (t.prototype.updateLayout = function () {
              if (
                this.instance &&
                (this.updateScroll(),
                (this.options.alwaysMeasureLayout && this.isLead()) ||
                  this.isLayoutDirty)
              ) {
                if (this.resumeFrom && !this.resumeFrom.instance)
                  for (var t, e = 0; e < this.path.length; e++)
                    this.path[e].updateScroll();
                var n = this.measure();
                iN(n);
                var r = this.layout;
                (this.layout = {
                  measured: n,
                  actual: this.removeElementScroll(n),
                }),
                  (this.layoutCorrected = rh()),
                  (this.isLayoutDirty = !1),
                  (this.projectionDelta = void 0),
                  this.notifyListeners("measure", this.layout.actual),
                  null === (t = this.options.visualElement) ||
                    void 0 === t ||
                    t.notifyLayoutMeasure(
                      this.layout.actual,
                      null == r ? void 0 : r.actual
                    );
              }
            }),
            (t.prototype.updateScroll = function () {
              this.options.layoutScroll &&
                this.instance &&
                ((this.isScrollRoot = i(this.instance)),
                (this.scroll = r(this.instance)));
            }),
            (t.prototype.resetTransform = function () {
              if (o) {
                var t,
                  e = this.isLayoutDirty || this.shouldResetTransform,
                  n = this.projectionDelta && !ih(this.projectionDelta),
                  r =
                    null === (t = this.options.visualElement) || void 0 === t
                      ? void 0
                      : t.getProps().transformTemplate,
                  i = null == r ? void 0 : r(this.latestValues, ""),
                  a = i !== this.prevTransformTemplateValue;
                e &&
                  (n || rv(this.latestValues) || a) &&
                  (o(this.instance, i),
                  (this.shouldResetTransform = !1),
                  this.scheduleRender());
              }
            }),
            (t.prototype.measure = function () {
              var t = this.options.visualElement;
              if (!t) return rh();
              var e = t.measureViewportBox(),
                n = this.root.scroll;
              return n && (rb(e.x, n.x), rb(e.y, n.y)), e;
            }),
            (t.prototype.removeElementScroll = function (t) {
              var e = rh();
              io(e, t);
              for (var n = 0; n < this.path.length; n++) {
                var r = this.path[n],
                  i = r.scroll,
                  o = r.options,
                  a = r.isScrollRoot;
                if (r !== this.root && i && o.layoutScroll) {
                  if (a) {
                    io(e, t);
                    var s = this.root.scroll;
                    s && (rb(e.x, -s.x), rb(e.y, -s.y));
                  }
                  rb(e.x, i.x), rb(e.y, i.y);
                }
              }
              return e;
            }),
            (t.prototype.applyTransform = function (t, e) {
              void 0 === e && (e = !1);
              var n = rh();
              io(n, t);
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r];
                !e &&
                  i.options.layoutScroll &&
                  i.scroll &&
                  i !== i.root &&
                  rM(n, { x: -i.scroll.x, y: -i.scroll.y }),
                  rv(i.latestValues) && rM(n, i.latestValues);
              }
              return rv(this.latestValues) && rM(n, this.latestValues), n;
            }),
            (t.prototype.removeTransform = function (t) {
              var e,
                n = rh();
              io(n, t);
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r];
                if (i.instance && rv(i.latestValues)) {
                  rm(i.latestValues) && i.updateSnapshot();
                  var o = rh();
                  io(o, i.measure()),
                    il(
                      n,
                      i.latestValues,
                      null === (e = i.snapshot) || void 0 === e
                        ? void 0
                        : e.layout,
                      o
                    );
                }
              }
              return rv(this.latestValues) && il(n, this.latestValues), n;
            }),
            (t.prototype.setTargetDelta = function (t) {
              (this.targetDelta = t), this.root.scheduleUpdateProjection();
            }),
            (t.prototype.setOptions = function (t) {
              var e;
              this.options = (0, s.__assign)(
                (0, s.__assign)((0, s.__assign)({}, this.options), t),
                { crossfade: null === (e = t.crossfade) || void 0 === e || e }
              );
            }),
            (t.prototype.clearMeasurements = function () {
              (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
            }),
            (t.prototype.resolveTargetDelta = function () {
              var t,
                e,
                n,
                r,
                i = this.options,
                o = i.layout,
                a = i.layoutId;
              this.layout &&
                (o || a) &&
                (!this.targetDelta &&
                  !this.relativeTarget &&
                  ((this.relativeParent = this.getClosestProjectingParent()),
                  this.relativeParent &&
                    this.relativeParent.layout &&
                    ((this.relativeTarget = rh()),
                    (this.relativeTargetOrigin = rh()),
                    ri(
                      this.relativeTargetOrigin,
                      this.layout.actual,
                      this.relativeParent.layout.actual
                    ),
                    io(this.relativeTarget, this.relativeTargetOrigin))),
                (this.relativeTarget || this.targetDelta) &&
                  ((this.target ||
                    ((this.target = rh()), (this.targetWithTransforms = rh())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    (null === (r = this.relativeParent) || void 0 === r
                      ? void 0
                      : r.target))
                    ? ((t = this.target),
                      (e = this.relativeTarget),
                      (n = this.relativeParent.target),
                      rn(t.x, e.x, n.x),
                      rn(t.y, e.y, n.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.actual
                          ))
                        : io(this.target, this.layout.actual),
                      rw(this.target, this.targetDelta))
                    : io(this.target, this.layout.actual),
                  this.attemptToResolveRelativeTarget &&
                    ((this.attemptToResolveRelativeTarget = !1),
                    (this.relativeParent = this.getClosestProjectingParent()),
                    this.relativeParent &&
                      !!this.relativeParent.resumingFrom ==
                        !!this.resumingFrom &&
                      !this.relativeParent.options.layoutScroll &&
                      this.relativeParent.target &&
                      ((this.relativeTarget = rh()),
                      (this.relativeTargetOrigin = rh()),
                      ri(
                        this.relativeTargetOrigin,
                        this.target,
                        this.relativeParent.target
                      ),
                      io(this.relativeTarget, this.relativeTargetOrigin)))));
            }),
            (t.prototype.getClosestProjectingParent = function () {
              if (!(!this.parent || rv(this.parent.latestValues)))
                return (this.parent.relativeTarget ||
                  this.parent.targetDelta) &&
                  this.parent.layout
                  ? this.parent
                  : this.parent.getClosestProjectingParent();
            }),
            (t.prototype.calcProjection = function () {
              var t,
                e = this.options,
                n = e.layout,
                r = e.layoutId;
              if (
                ((this.isTreeAnimating = !!(
                  (null === (t = this.parent) || void 0 === t
                    ? void 0
                    : t.isTreeAnimating) ||
                  this.currentAnimation ||
                  this.pendingAnimation
                )),
                this.isTreeAnimating ||
                  (this.targetDelta = this.relativeTarget = void 0),
                this.layout && (n || r))
              ) {
                var i = this.getLead();
                io(this.layoutCorrected, this.layout.actual),
                  (function (t, e, n, r) {
                    void 0 === r && (r = !1);
                    var i,
                      o,
                      a,
                      s,
                      u = n.length;
                    if (u) {
                      e.x = e.y = 1;
                      for (var c = 0; c < u; c++)
                        (s = (a = n[c]).projectionDelta),
                          (null ===
                            (o =
                              null === (i = a.instance) || void 0 === i
                                ? void 0
                                : i.style) || void 0 === o
                            ? void 0
                            : o.display) !== "contents" &&
                            (r &&
                              a.options.layoutScroll &&
                              a.scroll &&
                              a !== a.root &&
                              rM(t, { x: -a.scroll.x, y: -a.scroll.y }),
                            s &&
                              ((e.x *= s.x.scale),
                              (e.y *= s.y.scale),
                              rw(t, s)),
                            r && rv(a.latestValues) && rM(t, a.latestValues));
                    }
                  })(
                    this.layoutCorrected,
                    this.treeScale,
                    this.path,
                    !!this.resumingFrom || this !== i
                  );
                var o = i.target;
                if (o) {
                  this.projectionDelta ||
                    ((this.projectionDelta = rl()),
                    (this.projectionDeltaWithTransform = rl()));
                  var a = this.treeScale.x,
                    s = this.treeScale.y,
                    u = this.projectionTransform;
                  re(
                    this.projectionDelta,
                    this.layoutCorrected,
                    o,
                    this.latestValues
                  ),
                    (this.projectionTransform = im(
                      this.projectionDelta,
                      this.treeScale
                    )),
                    (this.projectionTransform !== u ||
                      this.treeScale.x !== a ||
                      this.treeScale.y !== s) &&
                      ((this.hasProjected = !0),
                      this.scheduleRender(),
                      this.notifyListeners("projectionUpdate", o));
                }
              }
            }),
            (t.prototype.hide = function () {
              this.isVisible = !1;
            }),
            (t.prototype.show = function () {
              this.isVisible = !0;
            }),
            (t.prototype.scheduleRender = function (t) {
              var e, n, r;
              void 0 === t && (t = !0),
                null === (n = (e = this.options).scheduleRender) ||
                  void 0 === n ||
                  n.call(e),
                t &&
                  (null === (r = this.getStack()) ||
                    void 0 === r ||
                    r.scheduleRender()),
                this.resumingFrom &&
                  !this.resumingFrom.instance &&
                  (this.resumingFrom = void 0);
            }),
            (t.prototype.setAnimationOrigin = function (t, e) {
              var n,
                r = this;
              void 0 === e && (e = !1);
              var i = this.snapshot,
                o = (null == i ? void 0 : i.latestValues) || {},
                a = (0, s.__assign)({}, this.latestValues),
                u = rl();
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !e);
              var c = rh(),
                l = null == i ? void 0 : i.isShared,
                d =
                  1 >=
                  ((null === (n = this.getStack()) || void 0 === n
                    ? void 0
                    : n.members.length) || 0),
                h = !!(
                  l &&
                  !d &&
                  !0 === this.options.crossfade &&
                  !this.path.some(iD)
                );
              (this.animationProgress = 0),
                (this.mixTargetDelta = function (e) {
                  var n,
                    i,
                    s,
                    f = e / 1e3;
                  ik(u.x, t.x, f),
                    ik(u.y, t.y, f),
                    r.setTargetDelta(u),
                    r.relativeTarget &&
                      r.relativeTargetOrigin &&
                      r.layout &&
                      (null === (s = r.relativeParent) || void 0 === s
                        ? void 0
                        : s.layout) &&
                      (ri(c, r.layout.actual, r.relativeParent.layout.actual),
                      (n = r.relativeTarget),
                      (i = r.relativeTargetOrigin),
                      iR(n.x, i.x, c.x, f),
                      iR(n.y, i.y, c.y, f)),
                    l &&
                      ((r.animationValues = a),
                      (function (t, e, n, r, i, o) {
                        var a, s, u, c;
                        i
                          ? ((t.opacity = ep(
                              0,
                              null !== (a = n.opacity) && void 0 !== a ? a : 1,
                              it(r)
                            )),
                            (t.opacityExit = ep(
                              null !== (s = e.opacity) && void 0 !== s ? s : 1,
                              0,
                              ie(r)
                            )))
                          : o &&
                            (t.opacity = ep(
                              null !== (u = e.opacity) && void 0 !== u ? u : 1,
                              null !== (c = n.opacity) && void 0 !== c ? c : 1,
                              r
                            ));
                        for (var l = 0; l < r8; l++) {
                          var d = "border".concat(r5[l], "Radius"),
                            h = r7(e, d),
                            f = r7(n, d);
                          (void 0 !== h || void 0 !== f) &&
                            (h || (h = 0),
                            f || (f = 0),
                            0 === h || 0 === f || r6(h) === r6(f)
                              ? ((t[d] = Math.max(ep(r9(h), r9(f), r), 0)),
                                (ti.test(f) || ti.test(h)) && (t[d] += "%"))
                              : (t[d] = f));
                        }
                        (e.rotate || n.rotate) &&
                          (t.rotate = ep(e.rotate || 0, n.rotate || 0, r));
                      })(a, o, r.latestValues, f, h, d)),
                    r.root.scheduleUpdateProjection(),
                    r.scheduleRender(),
                    (r.animationProgress = f);
                }),
                this.mixTargetDelta(0);
            }),
            (t.prototype.startAnimation = function (t) {
              var e,
                n,
                r = this;
              this.notifyListeners("animationStart"),
                null === (e = this.currentAnimation) ||
                  void 0 === e ||
                  e.stop(),
                this.resumingFrom &&
                  (null === (n = this.resumingFrom.currentAnimation) ||
                    void 0 === n ||
                    n.stop()),
                this.pendingAnimation &&
                  (ni.qY.update(this.pendingAnimation),
                  (this.pendingAnimation = void 0)),
                (this.pendingAnimation = ni.ZP.update(function () {
                  var e, n;
                  (D.hasAnimatedSinceResize = !0),
                    (r.currentAnimation =
                      (void 0 ===
                        (e = (0, s.__assign)((0, s.__assign)({}, t), {
                          onUpdate: function (e) {
                            var n;
                            r.mixTargetDelta(e),
                              null === (n = t.onUpdate) ||
                                void 0 === n ||
                                n.call(t, e);
                          },
                          onComplete: function () {
                            var e;
                            null === (e = t.onComplete) ||
                              void 0 === e ||
                              e.call(t),
                              r.completeAnimation();
                          },
                        })) && (e = {}),
                      nL("", (n = J(0) ? 0 : nF(0)), 1e3, e),
                      {
                        stop: function () {
                          return n.stop();
                        },
                        isAnimating: function () {
                          return n.isAnimating();
                        },
                      })),
                    r.resumingFrom &&
                      (r.resumingFrom.currentAnimation = r.currentAnimation),
                    (r.pendingAnimation = void 0);
                }));
            }),
            (t.prototype.completeAnimation = function () {
              var t;
              this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0)),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.exitAnimationComplete(),
                (this.resumingFrom =
                  this.currentAnimation =
                  this.animationValues =
                    void 0),
                this.notifyListeners("animationComplete");
            }),
            (t.prototype.finishAnimation = function () {
              var t;
              this.currentAnimation &&
                (null === (t = this.mixTargetDelta) ||
                  void 0 === t ||
                  t.call(this, 1e3),
                this.currentAnimation.stop()),
                this.completeAnimation();
            }),
            (t.prototype.applyTransformsToTarget = function () {
              var t = this.getLead(),
                e = t.targetWithTransforms,
                n = t.target,
                r = t.layout,
                i = t.latestValues;
              e &&
                n &&
                r &&
                (io(e, n),
                rM(e, i),
                re(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  i
                ));
            }),
            (t.prototype.registerSharedNode = function (t, e) {
              var n, r, i;
              this.sharedNodes.has(t) || this.sharedNodes.set(t, new ig()),
                this.sharedNodes.get(t).add(e),
                e.promote({
                  transition:
                    null === (n = e.options.initialPromotionConfig) ||
                    void 0 === n
                      ? void 0
                      : n.transition,
                  preserveFollowOpacity:
                    null ===
                      (i =
                        null === (r = e.options.initialPromotionConfig) ||
                        void 0 === r
                          ? void 0
                          : r.shouldPreserveFollowOpacity) || void 0 === i
                      ? void 0
                      : i.call(r, e),
                });
            }),
            (t.prototype.isLead = function () {
              var t = this.getStack();
              return !t || t.lead === this;
            }),
            (t.prototype.getLead = function () {
              var t;
              return (
                (this.options.layoutId &&
                  (null === (t = this.getStack()) || void 0 === t
                    ? void 0
                    : t.lead)) ||
                this
              );
            }),
            (t.prototype.getPrevLead = function () {
              var t;
              return this.options.layoutId
                ? null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.prevLead
                : void 0;
            }),
            (t.prototype.getStack = function () {
              var t = this.options.layoutId;
              if (t) return this.root.sharedNodes.get(t);
            }),
            (t.prototype.promote = function (t) {
              var e = void 0 === t ? {} : t,
                n = e.needsReset,
                r = e.transition,
                i = e.preserveFollowOpacity,
                o = this.getStack();
              o && o.promote(this, i),
                n && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                r && this.setOptions({ transition: r });
            }),
            (t.prototype.relegate = function () {
              var t = this.getStack();
              return !!t && t.relegate(this);
            }),
            (t.prototype.resetRotation = function () {
              var t = this.options.visualElement;
              if (t) {
                for (var e = !1, n = {}, r = 0; r < F.length; r++) {
                  var i = "rotate" + F[r];
                  t.getStaticValue(i) &&
                    ((e = !0),
                    (n[i] = t.getStaticValue(i)),
                    t.setStaticValue(i, 0));
                }
                if (e) {
                  for (var i in (null == t || t.syncRender(), n))
                    t.setStaticValue(i, n[i]);
                  t.scheduleRender();
                }
              }
            }),
            (t.prototype.getProjectionStyles = function (t) {
              void 0 === t && (t = {});
              var e,
                n,
                r,
                i,
                o,
                a,
                s = {};
              if (!this.instance || this.isSVG) return s;
              if (!this.isVisible) return { visibility: "hidden" };
              s.visibility = "";
              var u =
                null === (e = this.options.visualElement) || void 0 === e
                  ? void 0
                  : e.getProps().transformTemplate;
              if (this.needsReset)
                return (
                  (this.needsReset = !1),
                  (s.opacity = ""),
                  (s.pointerEvents = tT(t.pointerEvents) || ""),
                  (s.transform = u ? u(this.latestValues, "") : "none"),
                  s
                );
              var c = this.getLead();
              if (!this.projectionDelta || !this.layout || !c.target) {
                var l = {};
                return (
                  this.options.layoutId &&
                    ((l.opacity =
                      null !== (n = this.latestValues.opacity) && void 0 !== n
                        ? n
                        : 1),
                    (l.pointerEvents = tT(t.pointerEvents) || "")),
                  this.hasProjected &&
                    !rv(this.latestValues) &&
                    ((l.transform = u ? u({}, "") : "none"),
                    (this.hasProjected = !1)),
                  l
                );
              }
              var d = c.animationValues || c.latestValues;
              this.applyTransformsToTarget(),
                (s.transform = im(
                  this.projectionDeltaWithTransform,
                  this.treeScale,
                  d
                )),
                u && (s.transform = u(d, s.transform));
              var h = this.projectionDelta,
                f = h.x,
                p = h.y;
              for (var g in ((s.transformOrigin = ""
                .concat(100 * f.origin, "% ")
                .concat(100 * p.origin, "% 0")),
              c.animationValues
                ? (s.opacity =
                    c === this
                      ? null !==
                          (i =
                            null !== (r = d.opacity) && void 0 !== r
                              ? r
                              : this.latestValues.opacity) && void 0 !== i
                        ? i
                        : 1
                      : this.preserveOpacity
                      ? this.latestValues.opacity
                      : d.opacityExit)
                : (s.opacity =
                    c === this
                      ? null !== (o = d.opacity) && void 0 !== o
                        ? o
                        : ""
                      : null !== (a = d.opacityExit) && void 0 !== a
                      ? a
                      : 0),
              U))
                if (void 0 !== d[g]) {
                  var m = U[g],
                    v = m.correct,
                    A = m.applyTo,
                    y = v(d[g], c);
                  if (A) for (var w = A.length, b = 0; b < w; b++) s[A[b]] = y;
                  else s[g] = y;
                }
              return (
                this.options.layoutId &&
                  (s.pointerEvents =
                    c === this ? tT(t.pointerEvents) || "" : "none"),
                s
              );
            }),
            (t.prototype.clearSnapshot = function () {
              this.resumeFrom = this.snapshot = void 0;
            }),
            (t.prototype.resetTree = function () {
              this.root.nodes.forEach(function (t) {
                var e;
                return null === (e = t.currentAnimation) || void 0 === e
                  ? void 0
                  : e.stop();
              }),
                this.root.nodes.forEach(iE),
                this.root.sharedNodes.clear();
            }),
            t
          );
        })();
      }
      function iw(t) {
        t.updateLayout();
      }
      function ib(t) {
        var e,
          n,
          r,
          i,
          o =
            null !==
              (n =
                null === (e = t.resumeFrom) || void 0 === e
                  ? void 0
                  : e.snapshot) && void 0 !== n
              ? n
              : t.snapshot;
        if (t.isLead() && t.layout && o && t.hasListeners("didUpdate")) {
          var a = t.layout,
            s = a.actual,
            u = a.measured;
          "size" === t.options.animationType
            ? rf(function (t) {
                var e = o.isShared ? o.measured[t] : o.layout[t],
                  n = n6(e);
                (e.min = s[t].min), (e.max = e.min + n);
              })
            : "position" === t.options.animationType &&
              rf(function (t) {
                var e = o.isShared ? o.measured[t] : o.layout[t],
                  n = n6(s[t]);
                e.max = e.min + n;
              });
          var c = rl();
          re(c, s, o.layout);
          var l = rl();
          o.isShared
            ? re(l, t.applyTransform(u, !0), o.measured)
            : re(l, s, o.layout);
          var d = !ih(c),
            h = !1;
          if (
            !t.resumeFrom &&
            ((t.relativeParent = t.getClosestProjectingParent()),
            t.relativeParent && !t.relativeParent.resumeFrom)
          ) {
            var f = t.relativeParent,
              p = f.snapshot,
              g = f.layout;
            if (p && g) {
              var m = rh();
              ri(m, o.layout, p.layout);
              var v = rh();
              ri(v, s, g.actual), ip(m, v) || (h = !0);
            }
          }
          t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: o,
            delta: l,
            layoutDelta: c,
            hasLayoutChanged: d,
            hasRelativeTargetChanged: h,
          });
        } else
          t.isLead() &&
            (null === (i = (r = t.options).onExitComplete) ||
              void 0 === i ||
              i.call(r));
        t.options.transition = void 0;
      }
      function iC(t) {
        t.clearSnapshot();
      }
      function iE(t) {
        t.clearMeasurements();
      }
      function iS(t) {
        var e = t.options.visualElement;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) &&
          e.notifyBeforeLayoutMeasure(),
          t.resetTransform();
      }
      function iM(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0);
      }
      function ix(t) {
        t.resolveTargetDelta();
      }
      function iP(t) {
        t.calcProjection();
      }
      function iI(t) {
        t.resetRotation();
      }
      function iB(t) {
        t.removeLeadSnapshot();
      }
      function ik(t, e, n) {
        (t.translate = ep(e.translate, 0, n)),
          (t.scale = ep(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function iR(t, e, n, r) {
        (t.min = ep(e.min, n.min, r)), (t.max = ep(e.max, n.max, r));
      }
      function iD(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      var iT = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function iO(t, e) {
        for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
          if (t.path[r].instance) {
            n = t.path[r];
            break;
          }
        var i = (n && n !== t.root ? n.instance : document).querySelector(
          '[data-projection-id="'.concat(e, '"]')
        );
        i && t.mount(i, !0);
      }
      function iL(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }
      function iN(t) {
        iL(t.x), iL(t.y);
      }
      var iV = iy({
          attachResizeListener: function (t, e) {
            return tQ(t, "resize", e);
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
          checkIsScrollRoot: function () {
            return !0;
          },
        }),
        iQ = { current: void 0 },
        iU = iy({
          measureScroll: function (t) {
            return { x: t.scrollLeft, y: t.scrollTop };
          },
          defaultParent: function () {
            if (!iQ.current) {
              var t = new iV(0, {});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (iQ.current = t);
            }
            return iQ.current;
          },
          resetTransform: function (t, e) {
            t.style.transform = null != e ? e : "none";
          },
          checkIsScrollRoot: function (t) {
            return "fixed" === window.getComputedStyle(t).position;
          },
        }),
        iF = (0, s.__assign)(
          (0, s.__assign)((0, s.__assign)((0, s.__assign)({}, nX), en), rk),
          {
            measureLayout: function (t) {
              var e = (0, s.__read)(ei(), 2),
                n = e[0],
                r = e[1],
                i = (0, u.useContext)(O.p);
              return u.createElement(
                r3,
                (0, s.__assign)({}, t, {
                  layoutGroup: i,
                  switchLayoutGroup: (0, u.useContext)(L),
                  isPresent: n,
                  safeToRemove: r,
                })
              );
            },
          }
        ),
        ij = (function (t) {
          function e(e, n) {
            var r, i, o, a, l, S, x;
            return (
              void 0 === n && (n = {}),
              (i = (r = t(e, n)).preloadedFeatures),
              (o = r.createVisualElement),
              (a = r.projectionNodeConstructor),
              (l = r.useRender),
              (S = r.useVisualState),
              (x = r.Component),
              i &&
                (function (t) {
                  for (var e in t)
                    null !== t[e] &&
                      ("projectionNodeConstructor" === e
                        ? (d.projectionNodeConstructor = t[e])
                        : (d[e].Component = t[e]));
                })(i),
              (0, u.forwardRef)(function (t, e) {
                var n,
                  r,
                  P,
                  B,
                  V,
                  Q,
                  U,
                  F,
                  j,
                  z,
                  H,
                  _,
                  K,
                  G,
                  J,
                  W,
                  Y,
                  q,
                  Z,
                  X,
                  $,
                  tt,
                  te,
                  tn,
                  tr,
                  ti,
                  to,
                  ta =
                    ((_ = t.layoutId),
                    (K =
                      null === (H = (0, u.useContext)(O.p)) || void 0 === H
                        ? void 0
                        : H.id) && void 0 !== _
                      ? K + "-" + _
                      : _);
                t = (0, s.__assign)((0, s.__assign)({}, t), { layoutId: ta });
                var ts = (0, u.useContext)(m._),
                  tu = null,
                  tc =
                    ((J = (G = (function (t, e) {
                      if (I(t)) {
                        var n = t.initial,
                          r = t.animate;
                        return {
                          initial: !1 === n || M(n) ? n : void 0,
                          animate: M(r) ? r : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, u.useContext)(v))).initial),
                    (W = G.animate),
                    (0, u.useMemo)(
                      function () {
                        return { initial: J, animate: W };
                      },
                      [k(J), k(W)]
                    )),
                  tl = ts.isStatic
                    ? void 0
                    : (0, R.h)(function () {
                        if (D.hasEverUpdated) return T++;
                      }),
                  td = S(t, ts.isStatic);
                return (
                  !ts.isStatic &&
                    w.j &&
                    ((tc.visualElement =
                      ((Y = (0, s.__assign)((0, s.__assign)({}, ts), t)),
                      (q = o),
                      (Z = (0, u.useContext)(f)),
                      (X = (0, u.useContext)(v).visualElement),
                      ($ = (0, u.useContext)(A.O)),
                      C ||
                        (function () {
                          if (((C = !0), w.j)) {
                            if (window.matchMedia) {
                              var t = window.matchMedia(
                                  "(prefers-reduced-motion)"
                                ),
                                e = function () {
                                  return (b.current = t.matches);
                                };
                              t.addListener(e), e();
                            } else b.current = !1;
                          }
                        })(),
                      (tt = (0, s.__read)((0, u.useState)(b.current), 1)[0]),
                      (tn =
                        "never" !==
                          (te = (0, u.useContext)(m._).reducedMotion) &&
                        ("always" === te || tt)),
                      (tr = (0, u.useRef)(void 0)),
                      q || (q = Z.renderer),
                      !tr.current &&
                        q &&
                        (tr.current = q(x, {
                          visualState: td,
                          parent: X,
                          props: Y,
                          presenceId: null == $ ? void 0 : $.id,
                          blockInitialAnimation:
                            (null == $ ? void 0 : $.initial) === !1,
                          shouldReduceMotion: tn,
                        })),
                      (ti = tr.current),
                      (0, y.L)(function () {
                        null == ti || ti.syncRender();
                      }),
                      (0, u.useEffect)(function () {
                        var t;
                        null ===
                          (t = null == ti ? void 0 : ti.animationState) ||
                          void 0 === t ||
                          t.animateChanges();
                      }),
                      (0, y.L)(function () {
                        return function () {
                          return null == ti ? void 0 : ti.notifyUnmount();
                        };
                      }, []),
                      ti)),
                    (n = t),
                    (r = tc.visualElement),
                    (P = a || d.projectionNodeConstructor),
                    (V = n.layoutId),
                    (Q = n.layout),
                    (U = n.drag),
                    (F = n.dragConstraints),
                    (j = n.layoutScroll),
                    (z = (0, u.useContext)(L)),
                    !P ||
                      !r ||
                      (null == r ? void 0 : r.projection) ||
                      ((r.projection = new P(
                        tl,
                        r.getLatestValues(),
                        null === (B = r.parent) || void 0 === B
                          ? void 0
                          : B.projection
                      )),
                      r.projection.setOptions({
                        layoutId: V,
                        layout: Q,
                        alwaysMeasureLayout: !!U || (F && E(F)),
                        visualElement: r,
                        scheduleRender: function () {
                          return r.scheduleRender();
                        },
                        animationType: "string" == typeof Q ? Q : "both",
                        initialPromotionConfig: z,
                        layoutScroll: j,
                      })),
                    (tu = (function (t, e, n) {
                      var r = [],
                        i = (0, u.useContext)(f);
                      if (!e) return null;
                      "production" !== c.O &&
                        n &&
                        i.strict &&
                        (0, h.k)(
                          !1,
                          "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead."
                        );
                      for (var o = 0; o < g; o++) {
                        var a = p[o],
                          l = d[a],
                          m = l.isEnabled,
                          v = l.Component;
                        m(t) &&
                          v &&
                          r.push(
                            u.createElement(
                              v,
                              (0, s.__assign)({ key: a }, t, {
                                visualElement: e,
                              })
                            )
                          );
                      }
                      return r;
                    })(t, tc.visualElement, i))),
                  u.createElement(
                    N,
                    {
                      visualElement: tc.visualElement,
                      props: (0, s.__assign)((0, s.__assign)({}, ts), t),
                    },
                    tu,
                    u.createElement(
                      v.Provider,
                      { value: tc },
                      l(
                        x,
                        t,
                        tl,
                        ((to = tc.visualElement),
                        (0, u.useCallback)(
                          function (t) {
                            var n;
                            t &&
                              (null === (n = td.mount) ||
                                void 0 === n ||
                                n.call(td, t)),
                              to && (t ? to.mount(t) : to.unmount()),
                              e &&
                                ("function" == typeof e
                                  ? e(t)
                                  : E(e) && (e.current = t));
                          },
                          [to]
                        )),
                        td,
                        ts.isStatic,
                        tc.visualElement
                      )
                    )
                  )
                );
              })
            );
          }
          if ("undefined" == typeof Proxy) return e;
          var n = new Map();
          return new Proxy(e, {
            get: function (t, r) {
              return n.has(r) || n.set(r, e(r)), n.get(r);
            },
          });
        })(function (t, e) {
          var n, r, i;
          return (
            (n = e.forwardMotionProps),
            (r = Q(t) ? tN : tV),
            (0, s.__assign)((0, s.__assign)({}, r), {
              preloadedFeatures: iF,
              useRender:
                (void 0 === (i = void 0 !== n && n) && (i = !1),
                function (t, e, n, r, o, a) {
                  var c = o.latestValues,
                    l = (
                      Q(t)
                        ? function (t, e) {
                            var n = (0, u.useMemo)(
                              function () {
                                var n = tC();
                                return (
                                  tb(
                                    n,
                                    e,
                                    { enableHardwareAcceleration: !1 },
                                    t.transformTemplate
                                  ),
                                  (0, s.__assign)(
                                    (0, s.__assign)({}, n.attrs),
                                    { style: (0, s.__assign)({}, n.style) }
                                  )
                                );
                              },
                              [e]
                            );
                            if (t.style) {
                              var r = {};
                              tm(r, t.style, t),
                                (n.style = (0, s.__assign)(
                                  (0, s.__assign)({}, r),
                                  n.style
                                ));
                            }
                            return n;
                          }
                        : function (t, e, n) {
                            var r,
                              i,
                              o = {},
                              a =
                                (tm((r = {}), t.style || {}, t),
                                Object.assign(
                                  r,
                                  ((i = t.transformTemplate),
                                  (0, u.useMemo)(
                                    function () {
                                      var t = tg();
                                      tp(
                                        t,
                                        e,
                                        { enableHardwareAcceleration: !n },
                                        i
                                      );
                                      var r = t.vars,
                                        o = t.style;
                                      return (0, s.__assign)(
                                        (0, s.__assign)({}, r),
                                        o
                                      );
                                    },
                                    [e]
                                  ))
                                ),
                                t.transformValues && (r = t.transformValues(r)),
                                r);
                            return (
                              t.drag &&
                                !1 !== t.dragListener &&
                                ((o.draggable = !1),
                                (a.userSelect =
                                  a.WebkitUserSelect =
                                  a.WebkitTouchCallout =
                                    "none"),
                                (a.touchAction =
                                  !0 === t.drag
                                    ? "none"
                                    : "pan-".concat(
                                        "x" === t.drag ? "y" : "x"
                                      ))),
                              (o.style = a),
                              o
                            );
                          }
                    )(e, c, a),
                    d = (0, tv.L)(e, "string" == typeof t, i),
                    h = (0, s.__assign)(
                      (0, s.__assign)((0, s.__assign)({}, d), l),
                      { ref: r }
                    );
                  return (
                    n && (h["data-projection-id"] = n),
                    (0, u.createElement)(t, h)
                  );
                }),
              createVisualElement: r$,
              projectionNodeConstructor: iU,
              Component: t,
            })
          );
        });
    },
    12256: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return s;
        },
        K: function () {
          return a;
        },
      });
      var r = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
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
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "whileDrag",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "onHoverStart",
        "onHoverEnd",
        "whileFocus",
        "whileTap",
        "whileHover",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "layoutScroll",
      ]);
      function i(t) {
        return r.has(t);
      }
      var o = function (t) {
        return !i(t);
      };
      function a(t) {
        t &&
          (o = function (e) {
            return e.startsWith("on") ? !i(e) : t(e);
          });
      }
      try {
        a(require("@emotion/is-prop-valid").default);
      } catch (t) {}
      function s(t, e, n) {
        var r = {};
        for (var a in t)
          (o(a) ||
            (!0 === n && i(a)) ||
            (!e && !i(a)) ||
            (t.draggable && a.startsWith("onDrag"))) &&
            (r[a] = t[a]);
        return r;
      }
    },
    28514: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return r;
        },
      });
      var r = "undefined" != typeof document;
    },
    61308: function (t, e, n) {
      "use strict";
      n.d(e, {
        O: function () {
          return i;
        },
      });
      var r = n(26182),
        i = (void 0 === r || r.env, "production");
    },
    38024: function (t, e, n) {
      "use strict";
      n.d(e, {
        h: function () {
          return i;
        },
      });
      var r = n(15039);
      function i(t) {
        var e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    27766: function (t, e, n) {
      "use strict";
      n.d(e, {
        M: function () {
          return a;
        },
      });
      var r = n(38024),
        i = 0,
        o = function () {
          return i++;
        },
        a = function () {
          return (0, r.h)(o);
        };
    },
    19520: function (t, e, n) {
      "use strict";
      n.d(e, {
        L: function () {
          return i;
        },
      });
      var r = n(15039),
        i = n(28514).j ? r.useLayoutEffect : r.useEffect;
    },
    25532: function (t, e, n) {
      "use strict";
      n.d(e, {
        z: function () {
          return i;
        },
      });
      var r = n(15039);
      function i(t) {
        return (0, r.useEffect)(function () {
          return function () {
            return t();
          };
        }, []);
      }
    },
    64615: function (t, e, n) {
      "use strict";
      n.d(e, {
        qY: function () {
          return f;
        },
        ZP: function () {
          return y;
        },
        iW: function () {
          return p;
        },
        $B: function () {
          return A;
        },
      });
      let r = (1 / 60) * 1e3,
        i =
          "undefined" != typeof performance
            ? () => performance.now()
            : () => Date.now(),
        o =
          "undefined" != typeof window
            ? (t) => window.requestAnimationFrame(t)
            : (t) => setTimeout(() => t(i()), r),
        a = !0,
        s = !1,
        u = !1,
        c = { delta: 0, timestamp: 0 },
        l = ["read", "update", "preRender", "render", "postRender"],
        d = l.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                n = [],
                r = 0,
                i = !1,
                o = !1,
                a = new WeakSet(),
                s = {
                  schedule: (t, o = !1, s = !1) => {
                    let u = s && i,
                      c = u ? e : n;
                    return (
                      o && a.add(t),
                      -1 === c.indexOf(t) &&
                        (c.push(t), u && i && (r = e.length)),
                      t
                    );
                  },
                  cancel: (t) => {
                    let e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1), a.delete(t);
                  },
                  process: (u) => {
                    if (i) {
                      o = !0;
                      return;
                    }
                    if (
                      ((i = !0),
                      ([e, n] = [n, e]),
                      (n.length = 0),
                      (r = e.length))
                    )
                      for (let n = 0; n < r; n++) {
                        let r = e[n];
                        r(u), a.has(r) && (s.schedule(r), t());
                      }
                    (i = !1), o && ((o = !1), s.process(u));
                  },
                };
              return s;
            })(() => (s = !0))),
            t
          ),
          {}
        ),
        h = l.reduce((t, e) => {
          let n = d[e];
          return (
            (t[e] = (t, e = !1, r = !1) => (s || v(), n.schedule(t, e, r))), t
          );
        }, {}),
        f = l.reduce((t, e) => ((t[e] = d[e].cancel), t), {}),
        p = l.reduce((t, e) => ((t[e] = () => d[e].process(c)), t), {}),
        g = (t) => d[t].process(c),
        m = (t) => {
          (s = !1),
            (c.delta = a ? r : Math.max(Math.min(t - c.timestamp, 40), 1)),
            (c.timestamp = t),
            (u = !0),
            l.forEach(g),
            (u = !1),
            s && ((a = !1), o(m));
        },
        v = () => {
          (s = !0), (a = !0), u || o(m);
        },
        A = () => c;
      var y = h;
    },
    13947: function (t, e, n) {
      "use strict";
      n.d(e, {
        l: function () {
          return a;
        },
      });
      var r = n(9566),
        i = n(19551),
        o = n(98617);
      async function a(t, { account: e = t.account, message: n }) {
        if (!e) throw new i.o({ docsPath: "/docs/actions/wallet/signMessage" });
        let a = (0, r.T)(e);
        if ("local" === a.type) return a.signMessage({ message: n });
        let s =
          "string" == typeof n
            ? (0, o.$G)(n)
            : n.raw instanceof Uint8Array
            ? (0, o.NC)(n.raw)
            : n.raw;
        return t.request(
          { method: "personal_sign", params: [s, a.address] },
          { retryCount: 0 }
        );
      }
    },
    29550: function (t, e, n) {
      "use strict";
      n.d(e, {
        v: function () {
          return o;
        },
      });
      var r = n(80189),
        i = n(8223);
      let o = (0, r.a)({
        ...i.i,
        id: 10,
        name: "OP Mainnet",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://mainnet.optimism.io"] } },
        blockExplorers: {
          default: {
            name: "Optimism Explorer",
            url: "https://optimistic.etherscan.io",
            apiUrl: "https://api-optimistic.etherscan.io",
          },
        },
        contracts: {
          ...i.i.contracts,
          l2OutputOracle: {
            1: { address: "0xdfe97868233d1aa22e815a266982f2cf17685a27" },
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 4286263,
          },
          portal: {
            1: { address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed" },
          },
          l1StandardBridge: {
            1: { address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1" },
          },
        },
        sourceId: 1,
      });
    },
    11344: function (t, e, n) {
      "use strict";
      n.d(e, {
        y: function () {
          return r;
        },
      });
      let r = (0, n(80189).a)({
        id: 137,
        name: "Polygon",
        nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
        rpcUrls: { default: { http: ["https://polygon-rpc.com"] } },
        blockExplorers: {
          default: {
            name: "PolygonScan",
            url: "https://polygonscan.com",
            apiUrl: "https://api.polygonscan.com/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 25770160,
          },
        },
      });
    },
    19551: function (t, e, n) {
      "use strict";
      n.d(e, {
        o: function () {
          return i;
        },
      });
      var r = n(70778);
      class i extends r.G {
        constructor({ docsPath: t } = {}) {
          super(
            "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",
            { docsPath: t, docsSlug: "account" }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AccountNotFoundError",
            });
        }
      }
    },
    52991: function (t, e, n) {
      "use strict";
      let r, i, o, a, s, u, c, l, d, h, f, p, g, m, v;
      n.d(e, {
        F: function () {
          return K;
        },
      });
      let A = new Map([
        [8217, "apostrophe"],
        [8260, "fraction slash"],
        [12539, "middle dot"],
      ]);
      function y(t) {
        var e;
        let n;
        return (
          (e = (function (t) {
            let e = 0;
            function n() {
              return (t[e++] << 8) | t[e++];
            }
            let r = n(),
              i = 1,
              o = [0, 1];
            for (let t = 1; t < r; t++) o.push((i += n()));
            let a = n(),
              s = e;
            e += a;
            let u = 0,
              c = 0;
            function l() {
              return (
                0 == u && ((c = (c << 8) | t[e++]), (u = 8)), (c >> --u) & 1
              );
            }
            let d = 2147483648 - 1,
              h = 0;
            for (let t = 0; t < 31; t++) h = (h << 1) | l();
            let f = [],
              p = 0,
              g = 2147483648;
            for (;;) {
              let t = Math.floor(((h - p + 1) * i - 1) / g),
                e = 0,
                n = r;
              for (; n - e > 1; ) {
                let r = (e + n) >>> 1;
                t < o[r] ? (n = r) : (e = r);
              }
              if (0 == e) break;
              f.push(e);
              let a = p + Math.floor((g * o[e]) / i),
                s = p + Math.floor((g * o[e + 1]) / i) - 1;
              for (; ((a ^ s) & 1073741824) == 0; )
                (h = ((h << 1) & d) | l()),
                  (a = (a << 1) & d),
                  (s = ((s << 1) & d) | 1);
              for (; a & ~s & 536870912; )
                (h = (1073741824 & h) | ((h << 1) & (d >>> 1)) | l()),
                  (a = (a << 1) ^ 1073741824),
                  (s = ((1073741824 ^ s) << 1) | 1073741825);
              (p = a), (g = 1 + s - a);
            }
            let m = r - 4;
            return f.map((e) => {
              switch (e - m) {
                case 3:
                  return m + 65792 + ((t[s++] << 16) | (t[s++] << 8) | t[s++]);
                case 2:
                  return m + 256 + ((t[s++] << 8) | t[s++]);
                case 1:
                  return m + t[s++];
                default:
                  return e - 1;
              }
            });
          })(
            (function (t) {
              let e = [];
              [
                ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              ].forEach((t, n) => (e[t.charCodeAt(0)] = n));
              let n = t.length,
                r = new Uint8Array((6 * n) >> 3);
              for (let i = 0, o = 0, a = 0, s = 0; i < n; i++)
                (s = (s << 6) | e[t.charCodeAt(i)]),
                  (a += 6) >= 8 && (r[o++] = s >> (a -= 8));
              return r;
            })(t)
          )),
          (n = 0),
          () => e[n++]
        );
      }
      function w(t, e = 0) {
        let n = [];
        for (;;) {
          let r = t(),
            i = t();
          if (!i) break;
          e += r;
          for (let t = 0; t < i; t++) n.push(e + t);
          e += i + 1;
        }
        return n;
      }
      function b(t) {
        return E(() => {
          let e = w(t);
          if (e.length) return e;
        });
      }
      function C(t) {
        let e = [];
        for (;;) {
          let n = t();
          if (0 == n) break;
          e.push(
            (function (t, e) {
              let n = 1 + e(),
                r = e(),
                i = E(e);
              return S(i.length, 1 + t, e).flatMap((t, e) => {
                let [o, ...a] = t;
                return Array(i[e])
                  .fill()
                  .map((t, e) => {
                    let i = e * r;
                    return [o + e * n, a.map((t) => t + i)];
                  });
              });
            })(n, t)
          );
        }
        for (;;) {
          let n = t() - 1;
          if (n < 0) break;
          e.push(S(1 + t(), 1 + n, t).map((t) => [t[0], t.slice(1)]));
        }
        return e.flat();
      }
      function E(t) {
        let e = [];
        for (;;) {
          let n = t(e.length);
          if (!n) break;
          e.push(n);
        }
        return e;
      }
      function S(t, e, n) {
        let r = Array(t)
          .fill()
          .map(() => []);
        for (let i = 0; i < e; i++)
          (function (t, e) {
            let n = Array(t);
            for (let i = 0, o = 0; i < t; i++) {
              var r;
              n[i] = o += 1 & (r = e()) ? ~r >> 1 : r >> 1;
            }
            return n;
          })(t, n).forEach((t, e) => r[e].push(t));
        return r;
      }
      function M(t) {
        return `{${t.toString(16).toUpperCase().padStart(2, "0")}}`;
      }
      function x(t) {
        let e = t.length;
        if (e < 4096) return String.fromCodePoint(...t);
        let n = [];
        for (let r = 0; r < e; )
          n.push(String.fromCodePoint(...t.slice(r, (r += 4096))));
        return n.join("");
      }
      function P(t, e) {
        let n = t.length,
          r = n - e.length;
        for (let i = 0; 0 == r && i < n; i++) r = t[i] - e[i];
        return r;
      }
      function I(t) {
        return (t >> 24) & 255;
      }
      function B(t) {
        return 16777215 & t;
      }
      function k(t) {
        return t >= 44032 && t < 55204;
      }
      function R(t) {
        r ||
          (function () {
            let t = y(
              "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"
            );
            for (let [e, n] of ((r = new Map(
              b(t).flatMap((t, e) => t.map((t) => [t, (e + 1) << 24]))
            )),
            (i = new Set(w(t))),
            (o = new Map()),
            (a = new Map()),
            C(t))) {
              if (!i.has(e) && 2 == n.length) {
                let [t, r] = n,
                  i = a.get(t);
                i || ((i = new Map()), a.set(t, i)), i.set(r, e);
              }
              o.set(e, n.reverse());
            }
          })();
        let e = [],
          n = [],
          s = !1;
        function u(t) {
          let n = r.get(t);
          n && ((s = !0), (t |= n)), e.push(t);
        }
        for (let r of t)
          for (;;) {
            if (r < 128) e.push(r);
            else if (k(r)) {
              let t = r - 44032,
                e = (t / 588) | 0,
                n = ((t % 588) / 28) | 0,
                i = t % 28;
              u(4352 + e), u(4449 + n), i > 0 && u(4519 + i);
            } else {
              let t = o.get(r);
              t ? n.push(...t) : u(r);
            }
            if (!n.length) break;
            r = n.pop();
          }
        if (s && e.length > 1) {
          let t = I(e[0]);
          for (let n = 1; n < e.length; n++) {
            let r = I(e[n]);
            if (0 == r || t <= r) {
              t = r;
              continue;
            }
            let i = n - 1;
            for (;;) {
              let n = e[i + 1];
              if (((e[i + 1] = e[i]), (e[i] = n), !i || (t = I(e[--i])) <= r))
                break;
            }
            t = I(e[n]);
          }
        }
        return e;
      }
      function D(t) {
        return (function (t) {
          let e = [],
            n = [],
            r = -1,
            i = 0;
          for (let o of t) {
            let t = I(o),
              s = B(o);
            if (-1 == r) 0 == t ? (r = s) : e.push(s);
            else if (i > 0 && i >= t)
              0 == t ? (e.push(r, ...n), (n.length = 0), (r = s)) : n.push(s),
                (i = t);
            else {
              let o = (function (t, e) {
                if (t >= 4352 && t < 4371 && e >= 4449 && e < 4470)
                  return 44032 + (t - 4352) * 588 + (e - 4449) * 28;
                if (k(t) && e > 4519 && e < 4547 && (t - 44032) % 28 == 0)
                  return t + (e - 4519);
                {
                  let n = a.get(t);
                  return n && (n = n.get(e)) ? n : -1;
                }
              })(r, s);
              o >= 0
                ? (r = o)
                : 0 == i && 0 == t
                ? (e.push(r), (r = s))
                : (n.push(s), (i = t));
            }
          }
          return r >= 0 && e.push(r, ...n), e;
        })(R(t));
      }
      let T = (t) => Array.from(t);
      function O(t, e) {
        return t.P.has(e) || t.Q.has(e);
      }
      class L extends Array {
        get is_emoji() {
          return !0;
        }
      }
      function N() {
        let t, e;
        if (s) return;
        let n = y(
            "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"
          ),
          r = () => w(n),
          i = () => new Set(r());
        (s = new Map(C(n))),
          (u = i()),
          (c = r()),
          (l = new Set(r().map((t) => c[t]))),
          (c = new Set(c)),
          (d = i()),
          i();
        let o = b(n),
          a = n(),
          A = () =>
            new Set(
              r()
                .flatMap((t) => o[t])
                .concat(r())
            );
        (h = E((t) => {
          let e = E(n).map((t) => t + 96);
          if (e.length) {
            let r = t >= a;
            return (
              (e[0] -= 32),
              (e = x(e)),
              r && (e = `Restricted[${e}]`),
              { N: e, P: A(), Q: A(), M: !n(), R: r }
            );
          }
        })),
          (f = i()),
          (p = new Map());
        let S = r()
          .concat(T(f))
          .sort((t, e) => t - e);
        for (let { V: t, M: e } of (S.forEach((t, e) => {
          let r = n(),
            i = (S[e] = r ? S[e - r] : { V: [], M: new Map() });
          i.V.push(t), f.has(t) || p.set(t, i);
        }),
        new Set(p.values()))) {
          let n = [];
          for (let e of t) {
            let t = h.filter((t) => O(t, e)),
              r = n.find(({ G: e }) => t.some((t) => e.has(t)));
            r || ((r = { G: new Set(), V: [] }), n.push(r)),
              r.V.push(e),
              t.forEach((t) => r.G.add(t));
          }
          let r = n.flatMap((t) => T(t.G));
          for (let { G: t, V: i } of n) {
            let n = new Set(r.filter((e) => !t.has(e)));
            for (let t of i) e.set(t, n);
          }
        }
        let M = new Set(),
          I = new Set(),
          k = (t) => (M.has(t) ? I.add(t) : M.add(t));
        for (let t of h) {
          for (let e of t.P) k(e);
          for (let e of t.Q) k(e);
        }
        for (let t of M) p.has(t) || I.has(t) || p.set(t, 1);
        for (let r of ((g = new Set(T(M).concat(T(R(M).map(B))))),
        (m = ((t = []),
        (e = w(n)),
        (function e({ S: n, B: r }, i, o) {
          if (!(4 & n) || o !== i[i.length - 1])
            for (let a of (2 & n && (o = i[i.length - 1]),
            1 & n && t.push(i),
            r))
              for (let t of a.Q) e(a, [...i, t], o);
        })(
          (function t(r) {
            return {
              S: n(),
              B: E(() => {
                let r = w(n).map((t) => e[t]);
                if (r.length) return t(r);
              }),
              Q: r,
            };
          })([]),
          []
        ),
        t)
          .map((t) => L.from(t))
          .sort(P)),
        (v = new Map()),
        m)) {
          let t = [v];
          for (let e of r) {
            let n = t.map((t) => {
              let n = t.get(e);
              return n || ((n = new Map()), t.set(e, n)), n;
            });
            65039 === e ? t.push(...n) : (t = n);
          }
          for (let e of t) e.V = r;
        }
      }
      function V(t) {
        return (F(t) ? "" : `${Q(U([t]))} `) + M(t);
      }
      function Q(t) {
        return `"${t}"\u200E`;
      }
      function U(t, e = M) {
        var n;
        let r = [];
        (n = t[0]), N(), c.has(n) && r.push("◌");
        let i = 0,
          o = t.length;
        for (let n = 0; n < o; n++) {
          let o = t[n];
          F(o) && (r.push(x(t.slice(i, n))), r.push(e(o)), (i = n + 1));
        }
        return r.push(x(t.slice(i, o))), r.join("");
      }
      function F(t) {
        return N(), d.has(t);
      }
      function j(t) {
        return Error(`disallowed character: ${V(t)}`);
      }
      function z(t, e) {
        let n = V(e),
          r = h.find((t) => t.P.has(e));
        return (
          r && (n = `${r.N} ${n}`), Error(`illegal mixture: ${t.N} + ${n}`)
        );
      }
      function H(t) {
        return Error(`illegal placement: ${t}`);
      }
      function _(t) {
        return t.filter((t) => 65039 != t);
      }
      function K(t) {
        var e;
        return (e = (function (t, e, n) {
          if (!t) return [];
          N();
          let r = 0;
          return t.split(".").map((t) => {
            let i = (function (t) {
                let e = [];
                for (let n = 0, r = t.length; n < r; ) {
                  let r = t.codePointAt(n);
                  (n += r < 65536 ? 1 : 2), e.push(r);
                }
                return e;
              })(t),
              o = { input: i, offset: r };
            r += i.length + 1;
            try {
              let t,
                r = (o.tokens = (function (t, e, n) {
                  let r = [],
                    i = [];
                  for (t = t.slice().reverse(); t.length; ) {
                    let o = (function (t, e) {
                      let n,
                        r = v,
                        i = t.length;
                      for (; i && (r = r.get(t[--i])); ) {
                        let { V: o } = r;
                        o &&
                          ((n = o),
                          e && e.push(...t.slice(i).reverse()),
                          (t.length = i));
                      }
                      return n;
                    })(t);
                    if (o) i.length && (r.push(e(i)), (i = [])), r.push(n(o));
                    else {
                      let e = t.pop();
                      if (g.has(e)) i.push(e);
                      else {
                        let t = s.get(e);
                        if (t) i.push(...t);
                        else if (!u.has(e)) throw j(e);
                      }
                    }
                  }
                  return i.length && r.push(e(i)), r;
                })(i, e, n)),
                a = r.length;
              if (!a) throw Error("empty label");
              let d = (o.output = r.flat());
              if (
                (!(function (t) {
                  for (let e = t.lastIndexOf(95); e > 0; )
                    if (95 !== t[--e])
                      throw Error("underscore allowed only at start");
                })(d),
                !(o.emoji = a > 1 || r[0].is_emoji) && d.every((t) => t < 128))
              )
                !(function (t) {
                  if (t.length >= 4 && 45 == t[2] && 45 == t[3])
                    throw Error(
                      `invalid label extension: "${x(t.slice(0, 4))}"`
                    );
                })(d),
                  (t = "ASCII");
              else {
                let e = r.flatMap((t) => (t.is_emoji ? [] : t));
                if (e.length) {
                  if (c.has(d[0])) throw H("leading combining mark");
                  for (let t = 1; t < a; t++) {
                    let e = r[t];
                    if (!e.is_emoji && c.has(e[0]))
                      throw H(
                        `emoji + combining mark: "${x(r[t - 1])} + ${U([
                          e[0],
                        ])}"`
                      );
                  }
                  !(function (t) {
                    let e = t[0],
                      n = A.get(e);
                    if (n) throw H(`leading ${n}`);
                    let r = t.length,
                      i = -1;
                    for (let o = 1; o < r; o++) {
                      e = t[o];
                      let r = A.get(e);
                      if (r) {
                        if (i == o) throw H(`${n} + ${r}`);
                        (i = o + 1), (n = r);
                      }
                    }
                    if (i == r) throw H(`trailing ${n}`);
                  })(d);
                  let n = T(new Set(e)),
                    [i] = (function (t) {
                      let e = h;
                      for (let n of t) {
                        let t = e.filter((t) => O(t, n));
                        if (!t.length) {
                          if (h.some((t) => O(t, n))) throw z(e[0], n);
                          throw j(n);
                        }
                        if (((e = t), 1 == t.length)) break;
                      }
                      return e;
                    })(n);
                  (function (t, e) {
                    for (let n of e) if (!O(t, n)) throw z(t, n);
                    if (t.M) {
                      let t = R(e).map(B);
                      for (let e = 1, n = t.length; e < n; e++)
                        if (l.has(t[e])) {
                          let r = e + 1;
                          for (let i; r < n && l.has((i = t[r])); r++)
                            for (let n = e; n < r; n++)
                              if (t[n] == i)
                                throw Error(
                                  `duplicate non-spacing marks: ${V(i)}`
                                );
                          if (r - e > 4)
                            throw Error(
                              `excessive non-spacing marks: ${Q(
                                U(t.slice(e - 1, r))
                              )} (${r - e}/4)`
                            );
                          e = r;
                        }
                    }
                  })(i, e),
                    (function (t, e) {
                      let n;
                      let r = [];
                      for (let t of e) {
                        let e = p.get(t);
                        if (1 === e) return;
                        if (e) {
                          let r = e.M.get(t);
                          if (
                            !(n = n ? n.filter((t) => r.has(t)) : T(r)).length
                          )
                            return;
                        } else r.push(t);
                      }
                      if (n) {
                        for (let e of n)
                          if (r.every((t) => O(e, t)))
                            throw Error(
                              `whole-script confusable: ${t.N}/${e.N}`
                            );
                      }
                    })(i, n),
                    (t = i.N);
                } else t = "Emoji";
              }
              o.type = t;
            } catch (t) {
              o.error = t;
            }
            return o;
          });
        })(t, D, _))
          .map(({ input: t, error: n, output: r }) => {
            if (n) {
              let r = n.message;
              throw Error(1 == e.length ? r : `Invalid label ${Q(U(t))}: ${r}`);
            }
            return x(r);
          })
          .join(".");
      }
    },
    82117: function (t, e, n) {
      "use strict";
      n.d(e, {
        E: function () {
          return a;
        },
      });
      var r = n(60745),
        i = n(15039),
        o = n(8979);
      function a(t = {}) {
        let { onConnect: e, onDisconnect: n } = t,
          a = (0, o.Z)(t);
        (0, i.useEffect)(
          () =>
            (0, r.u)(a, {
              onChange(t, r) {
                if (
                  ("reconnecting" === r.status ||
                    ("connecting" === r.status && void 0 === r.address)) &&
                  "connected" === t.status
                ) {
                  let {
                      address: n,
                      addresses: i,
                      chain: o,
                      chainId: a,
                      connector: s,
                    } = t,
                    u = "reconnecting" === r.status || void 0 === r.status;
                  e?.({
                    address: n,
                    addresses: i,
                    chain: o,
                    chainId: a,
                    connector: s,
                    isReconnected: u,
                  });
                } else
                  "connected" === r.status &&
                    "disconnected" === t.status &&
                    n?.();
              },
            }),
          [a, e, n]
        );
      }
    },
    21704: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return A;
        },
      });
      var r = n(63759),
        i = n(91815),
        o = n(72205),
        a = n(30045),
        s = n(85366),
        u = n(85978),
        c = n(67638);
      function l(t) {
        return "number" == typeof t ? t : "wei" === t ? 0 : Math.abs(c.Bd[t]);
      }
      var d = n(62383);
      async function h(t, e) {
        let {
          address: n,
          blockNumber: c,
          blockTag: d,
          chainId: h,
          token: p,
          unit: g = "ether",
        } = e;
        if (p)
          try {
            return f(t, {
              balanceAddress: n,
              chainId: h,
              symbolType: "string",
              tokenAddress: p,
            });
          } catch (e) {
            if (e instanceof r.uq) {
              let e = await f(t, {
                  balanceAddress: n,
                  chainId: h,
                  symbolType: "bytes32",
                  tokenAddress: p,
                }),
                r = (0, i.rR)((0, o.f)(e.symbol, { dir: "right" }));
              return { ...e, symbol: r };
            }
            throw e;
          }
        let m = t.getClient({ chainId: h }),
          v = (0, u.s)(m, s.s, "getBalance"),
          A = await v(
            c ? { address: n, blockNumber: c } : { address: n, blockTag: d }
          ),
          y = t.chains.find((t) => t.id === h) ?? m.chain;
        return {
          decimals: y.nativeCurrency.decimals,
          formatted: (0, a.b)(A, l(g)),
          symbol: y.nativeCurrency.symbol,
          value: A,
        };
      }
      async function f(t, e) {
        let {
            balanceAddress: n,
            chainId: r,
            symbolType: i,
            tokenAddress: o,
            unit: s,
          } = e,
          u = {
            abi: [
              {
                type: "function",
                name: "balanceOf",
                stateMutability: "view",
                inputs: [{ type: "address" }],
                outputs: [{ type: "uint256" }],
              },
              {
                type: "function",
                name: "decimals",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: "uint8" }],
              },
              {
                type: "function",
                name: "symbol",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: i }],
              },
            ],
            address: o,
          },
          [c, h, f] = await (0, d.J)(t, {
            allowFailure: !1,
            contracts: [
              { ...u, functionName: "balanceOf", args: [n], chainId: r },
              { ...u, functionName: "decimals", chainId: r },
              { ...u, functionName: "symbol", chainId: r },
            ],
          }),
          p = (0, a.b)(c ?? "0", l(s ?? h));
        return { decimals: h, formatted: p, symbol: f, value: c };
      }
      var p = n(99631),
        g = n(23753),
        m = n(13173),
        v = n(8979);
      function A(t = {}) {
        let { address: e, query: n = {} } = t,
          r = (0, v.Z)(t),
          i = (0, m.x)(),
          o = (function (t, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { address: n, scopeKey: r, ...i } = e[1];
                if (!n) throw Error("address is required");
                return (await h(t, { ...i, address: n })) ?? null;
              },
              queryKey: (function (t = {}) {
                return ["balance", (0, p.O)(t)];
              })(e),
            };
          })(r, { ...t, chainId: t.chainId ?? i }),
          a = !!(e && (n.enabled ?? !0));
        return (0, g.aM)({ ...n, ...o, enabled: a });
      }
    },
    71993: function (t, e, n) {
      "use strict";
      n.d(e, {
        C: function () {
          return u;
        },
      });
      var r = n(15950);
      let i = [];
      function o(t) {
        let e = t.chains;
        return (0, r.v)(i, e) ? i : ((i = e), e);
      }
      var a = n(15039),
        s = n(8979);
      function u(t = {}) {
        let e = (0, s.Z)(t);
        return (0, a.useSyncExternalStore)(
          (t) =>
            (function (t, e) {
              let { onChange: n } = e;
              return t._internal.chains.subscribe((t, e) => {
                n(t, e);
              });
            })(e, { onChange: t }),
          () => o(e),
          () => o(e)
        );
      }
    },
    81521: function (t, e, n) {
      "use strict";
      n.d(e, {
        $: function () {
          return c;
        },
      });
      var r = n(29297),
        i = n(12796);
      async function o(t, e) {
        let n;
        if (
          (n =
            "function" == typeof e.connector
              ? t._internal.connectors.setup(e.connector)
              : e.connector).uid === t.state.current
        )
          throw new i.wi();
        try {
          t.setState((t) => ({ ...t, status: "connecting" })),
            n.emitter.emit("message", { type: "connecting" });
          let r = await n.connect({ chainId: e.chainId }),
            i = r.accounts;
          return (
            n.emitter.off("connect", t._internal.events.connect),
            n.emitter.on("change", t._internal.events.change),
            n.emitter.on("disconnect", t._internal.events.disconnect),
            await t.storage?.setItem("recentConnectorId", n.id),
            t.setState((t) => ({
              ...t,
              connections: new Map(t.connections).set(n.uid, {
                accounts: i,
                chainId: r.chainId,
                connector: n,
              }),
              current: n.uid,
              status: "connected",
            })),
            { accounts: i, chainId: r.chainId }
          );
        } catch (e) {
          throw (
            (t.setState((t) => ({
              ...t,
              status: t.current ? "connected" : "disconnected",
            })),
            e)
          );
        }
      }
      var a = n(15039),
        s = n(8979),
        u = n(57736);
      function c(t = {}) {
        let { mutation: e } = t,
          n = (0, s.Z)(t),
          i = (0, u.Y)({ config: n }),
          {
            mutate: c,
            mutateAsync: l,
            ...d
          } = (0, r.D)({
            ...e,
            mutationFn: (t) => o(n, t),
            mutationKey: ["connect"],
          });
        return (
          (0, a.useEffect)(
            () =>
              n.subscribe(
                ({ status: t }) => t,
                (t, e) => {
                  "connected" === e && "disconnected" === t && d.reset();
                }
              ),
            [n, d]
          ),
          { ...d, connect: c, connectAsync: l, connectors: i }
        );
      }
    },
    57736: function (t, e, n) {
      "use strict";
      n.d(e, {
        Y: function () {
          return u;
        },
      });
      var r = n(15950);
      let i = [];
      function o(t) {
        let e = t.connectors;
        return (0, r.v)(i, e) ? i : ((i = e), e);
      }
      var a = n(15039),
        s = n(8979);
      function u(t = {}) {
        let e = (0, s.Z)(t);
        return (0, a.useSyncExternalStore)(
          (t) =>
            (function (t, e) {
              let { onChange: n } = e;
              return t._internal.connectors.subscribe((t, e) => {
                n(Object.values(t), e);
              });
            })(e, { onChange: t }),
          () => o(e),
          () => o(e)
        );
      }
    },
    7951: function (t, e, n) {
      "use strict";
      n.d(e, {
        q: function () {
          return l;
        },
      });
      var r = n(29297);
      async function i(t, e = {}) {
        let n;
        if (e.connector) n = e.connector;
        else {
          let { connections: e, current: r } = t.state,
            i = e.get(r);
          n = i?.connector;
        }
        let r = t.state.connections;
        n &&
          (await n.disconnect(),
          n.emitter.off("change", t._internal.events.change),
          n.emitter.off("disconnect", t._internal.events.disconnect),
          n.emitter.on("connect", t._internal.events.connect),
          r.delete(n.uid)),
          t.setState((t) => {
            if (0 === r.size)
              return {
                ...t,
                connections: new Map(),
                current: void 0,
                status: "disconnected",
              };
            let e = r.values().next().value;
            return { ...t, connections: new Map(r), current: e.connector.uid };
          });
        {
          let e = t.state.current;
          if (!e) return;
          let n = t.state.connections.get(e)?.connector;
          if (!n) return;
          await t.storage?.setItem("recentConnectorId", n.id);
        }
      }
      var o = n(8979),
        a = n(15950);
      let s = [];
      function u(t) {
        let e = [...t.state.connections.values()];
        return "reconnecting" === t.state.status || (0, a.v)(s, e)
          ? s
          : ((s = e), e);
      }
      var c = n(15039);
      function l(t = {}) {
        let { mutation: e } = t,
          n = (0, o.Z)(t),
          {
            mutate: s,
            mutateAsync: l,
            ...d
          } = (0, r.D)({
            ...e,
            mutationFn: (t) => i(n, t),
            mutationKey: ["disconnect"],
          });
        return {
          ...d,
          connectors: (function (t = {}) {
            let e = (0, o.Z)(t);
            return (0, c.useSyncExternalStore)(
              (t) =>
                (function (t, e) {
                  let { onChange: n } = e;
                  return t.subscribe(() => u(t), n, { equalityFn: a.v });
                })(e, { onChange: t }),
              () => u(e),
              () => u(e)
            );
          })({ config: n }).map((t) => t.connector),
          disconnect: s,
          disconnectAsync: l,
        };
      }
    },
    66162: function (t, e, n) {
      "use strict";
      n.d(e, {
        S: function () {
          return c;
        },
      });
      var r = n(15633),
        i = n(85978),
        o = n(99631),
        a = n(23753),
        s = n(13173),
        u = n(8979);
      function c(t = {}) {
        let { name: e, query: n = {} } = t,
          c = (0, u.Z)(t),
          l = (0, s.x)(),
          d = (function (t, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { name: n, scopeKey: o, ...a } = e[1];
                if (!n) throw Error("name is required");
                return (function (t, e) {
                  let { chainId: n, ...o } = e,
                    a = t.getClient({ chainId: n });
                  return (0, i.s)(a, r.O, "getEnsAddress")(o);
                })(t, { ...a, name: n });
              },
              queryKey: (function (t = {}) {
                return ["ensAddress", (0, o.O)(t)];
              })(e),
            };
          })(c, { ...t, chainId: t.chainId ?? l }),
          h = !!(e && (n.enabled ?? !0));
        return (0, a.aM)({ ...n, ...d, enabled: h });
      }
    },
    62694: function (t, e, n) {
      "use strict";
      n.d(e, {
        c: function () {
          return c;
        },
      });
      var r = n(77438),
        i = n(85978),
        o = n(99631),
        a = n(23753),
        s = n(13173),
        u = n(8979);
      function c(t = {}) {
        let { name: e, query: n = {} } = t,
          c = (0, u.Z)(t),
          l = (0, s.x)(),
          d = (function (t, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { name: n, scopeKey: o, ...a } = e[1];
                if (!n) throw Error("name is required");
                return (function (t, e) {
                  let { chainId: n, ...o } = e,
                    a = t.getClient({ chainId: n });
                  return (0, i.s)(a, r.r, "getEnsAvatar")(o);
                })(t, { ...a, name: n });
              },
              queryKey: (function (t = {}) {
                return ["ensAvatar", (0, o.O)(t)];
              })(e),
            };
          })(c, { ...t, chainId: t.chainId ?? l }),
          h = !!(e && (n.enabled ?? !0));
        return (0, a.aM)({ ...n, ...d, enabled: h });
      }
    },
    68343: function (t, e, n) {
      "use strict";
      n.d(e, {
        F: function () {
          return c;
        },
      });
      var r = n(79895),
        i = n(85978),
        o = n(99631),
        a = n(23753),
        s = n(13173),
        u = n(8979);
      function c(t = {}) {
        let { address: e, query: n = {} } = t,
          c = (0, u.Z)(t),
          l = (0, s.x)(),
          d = (function (t, e = {}) {
            return {
              async queryFn({ queryKey: e }) {
                let { address: n, scopeKey: o, ...a } = e[1];
                if (!n) throw Error("address is required");
                return (function (t, e) {
                  let { chainId: n, ...o } = e,
                    a = t.getClient({ chainId: n });
                  return (0, i.s)(a, r.w, "getEnsName")(o);
                })(t, { ...a, address: n });
              },
              queryKey: (function (t = {}) {
                return ["ensName", (0, o.O)(t)];
              })(e),
            };
          })(c, { ...t, chainId: t.chainId ?? l }),
          h = !!(e && (n.enabled ?? !0));
        return (0, a.aM)({ ...n, ...d, enabled: h });
      }
    },
    15479: function (t, e, n) {
      "use strict";
      n.d(e, {
        Q: function () {
          return c;
        },
      });
      var r = n(29297),
        i = n(13947),
        o = n(85978),
        a = n(13360);
      async function s(t, e) {
        let n;
        let { account: r, connector: s, ...u } = e;
        return (
          (n =
            "object" == typeof r && "local" === r.type
              ? t.getClient()
              : await (0, a.e)(t, { account: r, connector: s })),
          (0, o.s)(
            n,
            i.l,
            "signMessage"
          )({ ...u, ...(r ? { account: r } : {}) })
        );
      }
      var u = n(8979);
      function c(t = {}) {
        var e;
        let { mutation: n } = t,
          i =
            ((e = (0, u.Z)(t)),
            { mutationFn: (t) => s(e, t), mutationKey: ["signMessage"] }),
          { mutate: o, mutateAsync: a, ...c } = (0, r.D)({ ...n, ...i });
        return { ...c, signMessage: o, signMessageAsync: a };
      }
    },
    66392: function (t, e, n) {
      "use strict";
      n.d(e, {
        o: function () {
          return c;
        },
      });
      var r = n(29297),
        i = n(12796),
        o = n(6812);
      async function a(t, e) {
        let { chainId: n } = e,
          r = t.state.connections.get(e.connector?.uid ?? t.state.current);
        if (r) {
          let t = r.connector;
          if (!t.switchChain) throw new o.O({ connector: t });
          return await t.switchChain({ chainId: n });
        }
        let a = t.chains.find((t) => t.id === n);
        if (!a) throw new i.X4();
        return t.setState((t) => ({ ...t, chainId: n })), a;
      }
      var s = n(71993),
        u = n(8979);
      function c(t = {}) {
        let { mutation: e } = t,
          n = (0, u.Z)(t),
          {
            mutate: i,
            mutateAsync: o,
            ...c
          } = (0, r.D)({
            ...e,
            mutationFn: (t) => a(n, t),
            mutationKey: ["switchChain"],
          });
        return {
          ...c,
          chains: (0, s.C)({ config: n }),
          switchChain: i,
          switchChainAsync: o,
        };
      }
    },
  },
]);
