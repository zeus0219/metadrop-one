"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8451],
  {
    51563: function (e, t, r) {
      r.d(t, {
        i: function () {
          return f;
        },
        t: function () {
          return n;
        },
      });
      var a = r(2067),
        o = r(26933),
        s = r(96560),
        i = r(26871),
        l = r(15039);
      function n(e) {
        let { erc20Address: t, coinImageURL: r } = e;
        return (0, l.useMemo)(
          () => r || (t ? (0, i.qF)(t, { width: 200, height: 200 }) : null),
          [r, t]
        );
      }
      function f(e) {
        let { coin: t, className: r = "" } = e,
          i = n(t);
        return (0, a.jsx)(o.Z, {
          src: i,
          transforms: { resize: "400" },
          className: (0, s.cn)("aspect-square rounded-full bg-highlight", r),
        });
      }
    },
    75325: function (e, t, r) {
      var a = r(2067);
      t.Z = () =>
        (0, a.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "124",
          height: "221",
          fill: "none",
          viewBox: "0 0 124 221",
          children: [
            (0, a.jsx)("path", {
              stroke: "url(#paint0_linear_10825_22510)",
              strokeLinecap: "round",
              strokeWidth: "40",
              d: "M62 120.5v80",
            }),
            (0, a.jsxs)("g", {
              clipPath: "url(#clip0_10825_22510)",
              children: [
                (0, a.jsxs)("g", {
                  filter: "url(#filter0_di_10825_22510)",
                  opacity: "0.33",
                  children: [
                    (0, a.jsxs)("g", {
                      clipPath: "url(#clip1_10825_22510)",
                      children: [
                        (0, a.jsx)("rect", {
                          width: "40",
                          height: "40",
                          x: "42",
                          y: "160.5",
                          fill: "#75BFF0",
                          rx: "20",
                          transform: "rotate(-90 42 160.5)",
                        }),
                        (0, a.jsx)("circle", {
                          cx: "62",
                          cy: "140.5",
                          r: "20",
                          fill: "url(#paint1_radial_10825_22510)",
                          transform: "rotate(-90 62 140.5)",
                        }),
                      ],
                    }),
                    (0, a.jsx)("rect", {
                      width: "39",
                      height: "39",
                      x: "42.5",
                      y: "160",
                      stroke: "#fff",
                      strokeOpacity: "0.4",
                      rx: "19.5",
                      transform: "rotate(-90 42.5 160)",
                    }),
                  ],
                }),
                (0, a.jsxs)("g", {
                  filter: "url(#filter1_di_10825_22510)",
                  opacity: "0.66",
                  children: [
                    (0, a.jsxs)("g", {
                      clipPath: "url(#clip2_10825_22510)",
                      children: [
                        (0, a.jsx)("rect", {
                          width: "40",
                          height: "40",
                          x: "42",
                          y: "150.5",
                          fill: "#75BFF0",
                          rx: "20",
                          transform: "rotate(-90 42 150.5)",
                        }),
                        (0, a.jsx)("circle", {
                          cx: "62",
                          cy: "130.5",
                          r: "20",
                          fill: "url(#paint2_radial_10825_22510)",
                          transform: "rotate(-90 62 130.5)",
                        }),
                      ],
                    }),
                    (0, a.jsx)("rect", {
                      width: "39",
                      height: "39",
                      x: "42.5",
                      y: "150",
                      stroke: "#fff",
                      strokeOpacity: "0.4",
                      rx: "19.5",
                      transform: "rotate(-90 42.5 150)",
                    }),
                  ],
                }),
                (0, a.jsxs)("g", {
                  filter: "url(#filter2_di_10825_22510)",
                  children: [
                    (0, a.jsxs)("g", {
                      clipPath: "url(#clip3_10825_22510)",
                      children: [
                        (0, a.jsx)("rect", {
                          width: "40",
                          height: "40",
                          x: "42",
                          y: "140.5",
                          fill: "#75BFF0",
                          rx: "20",
                          transform: "rotate(-90 42 140.5)",
                        }),
                        (0, a.jsx)("circle", {
                          cx: "62",
                          cy: "120.5",
                          r: "20",
                          fill: "url(#paint3_radial_10825_22510)",
                          transform: "rotate(-90 62 120.5)",
                        }),
                      ],
                    }),
                    (0, a.jsx)("rect", {
                      width: "39",
                      height: "39",
                      x: "42.5",
                      y: "140",
                      stroke: "#fff",
                      strokeOpacity: "0.4",
                      rx: "19.5",
                      transform: "rotate(-90 42.5 140)",
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("path", {
              stroke: "url(#paint4_linear_10825_22510)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "40",
              d: "M104 20.5v180",
            }),
            (0, a.jsxs)("g", {
              clipPath: "url(#clip4_10825_22510)",
              children: [
                (0, a.jsxs)("g", {
                  filter: "url(#filter3_di_10825_22510)",
                  opacity: "0.33",
                  children: [
                    (0, a.jsxs)("g", {
                      clipPath: "url(#clip5_10825_22510)",
                      children: [
                        (0, a.jsx)("rect", {
                          width: "40",
                          height: "40",
                          x: "84",
                          y: "60.5",
                          fill: "#CDF460",
                          rx: "20",
                          transform: "rotate(-90 84 60.5)",
                        }),
                        (0, a.jsx)("circle", {
                          cx: "104",
                          cy: "40.5",
                          r: "20",
                          fill: "url(#paint5_radial_10825_22510)",
                          transform: "rotate(-90 104 40.5)",
                        }),
                      ],
                    }),
                    (0, a.jsx)("rect", {
                      width: "39",
                      height: "39",
                      x: "84.5",
                      y: "60",
                      stroke: "#fff",
                      strokeOpacity: "0.4",
                      rx: "19.5",
                      transform: "rotate(-90 84.5 60)",
                    }),
                  ],
                }),
                (0, a.jsxs)("g", {
                  filter: "url(#filter4_di_10825_22510)",
                  opacity: "0.66",
                  children: [
                    (0, a.jsxs)("g", {
                      clipPath: "url(#clip6_10825_22510)",
                      children: [
                        (0, a.jsx)("rect", {
                          width: "40",
                          height: "40",
                          x: "84",
                          y: "50.5",
                          fill: "#CDF460",
                          rx: "20",
                          transform: "rotate(-90 84 50.5)",
                        }),
                        (0, a.jsx)("circle", {
                          cx: "104",
                          cy: "30.5",
                          r: "20",
                          fill: "url(#paint6_radial_10825_22510)",
                          transform: "rotate(-90 104 30.5)",
                        }),
                      ],
                    }),
                    (0, a.jsx)("rect", {
                      width: "39",
                      height: "39",
                      x: "84.5",
                      y: "50",
                      stroke: "#fff",
                      strokeOpacity: "0.4",
                      rx: "19.5",
                      transform: "rotate(-90 84.5 50)",
                    }),
                  ],
                }),
                (0, a.jsxs)("g", {
                  filter: "url(#filter5_di_10825_22510)",
                  children: [
                    (0, a.jsxs)("g", {
                      clipPath: "url(#clip7_10825_22510)",
                      children: [
                        (0, a.jsx)("rect", {
                          width: "40",
                          height: "40",
                          x: "84",
                          y: "40.5",
                          fill: "#CDF460",
                          rx: "20",
                          transform: "rotate(-90 84 40.5)",
                        }),
                        (0, a.jsx)("circle", {
                          cx: "104",
                          cy: "20.5",
                          r: "20",
                          fill: "url(#paint7_radial_10825_22510)",
                          transform: "rotate(-90 104 20.5)",
                        }),
                      ],
                    }),
                    (0, a.jsx)("rect", {
                      width: "39",
                      height: "39",
                      x: "84.5",
                      y: "40",
                      stroke: "#fff",
                      strokeOpacity: "0.4",
                      rx: "19.5",
                      transform: "rotate(-90 84.5 40)",
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("path", {
              stroke: "url(#paint8_linear_10825_22510)",
              strokeLinecap: "round",
              strokeWidth: "40",
              d: "M20 70.5v130",
            }),
            (0, a.jsxs)("g", {
              clipPath: "url(#clip8_10825_22510)",
              children: [
                (0, a.jsxs)("g", {
                  filter: "url(#filter6_di_10825_22510)",
                  opacity: "0.33",
                  children: [
                    (0, a.jsxs)("g", {
                      clipPath: "url(#clip9_10825_22510)",
                      children: [
                        (0, a.jsx)("rect", {
                          width: "40",
                          height: "40",
                          y: "110.5",
                          fill: "#F396E8",
                          rx: "20",
                          transform: "rotate(-90 0 110.5)",
                        }),
                        (0, a.jsx)("circle", {
                          cx: "20",
                          cy: "90.5",
                          r: "20",
                          fill: "url(#paint9_radial_10825_22510)",
                          transform: "rotate(-90 20 90.5)",
                        }),
                      ],
                    }),
                    (0, a.jsx)("rect", {
                      width: "39",
                      height: "39",
                      x: "0.5",
                      y: "110",
                      stroke: "#fff",
                      strokeOpacity: "0.4",
                      rx: "19.5",
                      transform: "rotate(-90 .5 110)",
                    }),
                  ],
                }),
                (0, a.jsxs)("g", {
                  filter: "url(#filter7_di_10825_22510)",
                  opacity: "0.66",
                  children: [
                    (0, a.jsxs)("g", {
                      clipPath: "url(#clip10_10825_22510)",
                      children: [
                        (0, a.jsx)("rect", {
                          width: "40",
                          height: "40",
                          y: "100.5",
                          fill: "#F396E8",
                          rx: "20",
                          transform: "rotate(-90 0 100.5)",
                        }),
                        (0, a.jsx)("circle", {
                          cx: "20",
                          cy: "80.5",
                          r: "20",
                          fill: "url(#paint10_radial_10825_22510)",
                          transform: "rotate(-90 20 80.5)",
                        }),
                      ],
                    }),
                    (0, a.jsx)("rect", {
                      width: "39",
                      height: "39",
                      x: "0.5",
                      y: "100",
                      stroke: "#fff",
                      strokeOpacity: "0.4",
                      rx: "19.5",
                      transform: "rotate(-90 .5 100)",
                    }),
                  ],
                }),
                (0, a.jsxs)("g", {
                  filter: "url(#filter8_di_10825_22510)",
                  children: [
                    (0, a.jsxs)("g", {
                      clipPath: "url(#clip11_10825_22510)",
                      children: [
                        (0, a.jsx)("rect", {
                          width: "40",
                          height: "40",
                          y: "90.5",
                          fill: "#F396E8",
                          rx: "20",
                          transform: "rotate(-90 0 90.5)",
                        }),
                        (0, a.jsx)("circle", {
                          cx: "20",
                          cy: "70.5",
                          r: "20",
                          fill: "url(#paint11_radial_10825_22510)",
                          transform: "rotate(-90 20 70.5)",
                        }),
                      ],
                    }),
                    (0, a.jsx)("rect", {
                      width: "39",
                      height: "39",
                      x: "0.5",
                      y: "90",
                      stroke: "#fff",
                      strokeOpacity: "0.4",
                      rx: "19.5",
                      transform: "rotate(-90 .5 90)",
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("defs", {
              children: [
                (0, a.jsxs)("filter", {
                  id: "filter0_di_10825_22510",
                  width: "48",
                  height: "48",
                  x: "37",
                  y: "117.5",
                  colorInterpolationFilters: "sRGB",
                  filterUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("feFlood", {
                      floodOpacity: "0",
                      result: "BackgroundImageFix",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      result: "hardAlpha",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    }),
                    (0, a.jsx)("feMorphology", {
                      in: "SourceAlpha",
                      operator: "dilate",
                      radius: "1",
                      result: "effect1_dropShadow_10825_22510",
                    }),
                    (0, a.jsx)("feOffset", { dx: "-1", dy: "1" }),
                    (0, a.jsx)("feGaussianBlur", { stdDeviation: "1.5" }),
                    (0, a.jsx)("feComposite", {
                      in2: "hardAlpha",
                      operator: "out",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
                    }),
                    (0, a.jsx)("feBlend", {
                      in2: "BackgroundImageFix",
                      result: "effect1_dropShadow_10825_22510",
                    }),
                    (0, a.jsx)("feBlend", {
                      in: "SourceGraphic",
                      in2: "effect1_dropShadow_10825_22510",
                      result: "shape",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      result: "hardAlpha",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    }),
                    (0, a.jsx)("feMorphology", {
                      in: "SourceAlpha",
                      radius: "1",
                      result: "effect2_innerShadow_10825_22510",
                    }),
                    (0, a.jsx)("feOffset", { dx: "-2", dy: "2" }),
                    (0, a.jsx)("feGaussianBlur", { stdDeviation: "0.5" }),
                    (0, a.jsx)("feComposite", {
                      in2: "hardAlpha",
                      k2: "-1",
                      k3: "1",
                      operator: "arithmetic",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0",
                    }),
                    (0, a.jsx)("feBlend", {
                      in2: "shape",
                      result: "effect2_innerShadow_10825_22510",
                    }),
                  ],
                }),
                (0, a.jsxs)("filter", {
                  id: "filter1_di_10825_22510",
                  width: "48",
                  height: "48",
                  x: "37",
                  y: "107.5",
                  colorInterpolationFilters: "sRGB",
                  filterUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("feFlood", {
                      floodOpacity: "0",
                      result: "BackgroundImageFix",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      result: "hardAlpha",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    }),
                    (0, a.jsx)("feMorphology", {
                      in: "SourceAlpha",
                      operator: "dilate",
                      radius: "1",
                      result: "effect1_dropShadow_10825_22510",
                    }),
                    (0, a.jsx)("feOffset", { dx: "-1", dy: "1" }),
                    (0, a.jsx)("feGaussianBlur", { stdDeviation: "1.5" }),
                    (0, a.jsx)("feComposite", {
                      in2: "hardAlpha",
                      operator: "out",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
                    }),
                    (0, a.jsx)("feBlend", {
                      in2: "BackgroundImageFix",
                      result: "effect1_dropShadow_10825_22510",
                    }),
                    (0, a.jsx)("feBlend", {
                      in: "SourceGraphic",
                      in2: "effect1_dropShadow_10825_22510",
                      result: "shape",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      result: "hardAlpha",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    }),
                    (0, a.jsx)("feMorphology", {
                      in: "SourceAlpha",
                      radius: "1",
                      result: "effect2_innerShadow_10825_22510",
                    }),
                    (0, a.jsx)("feOffset", { dx: "-2", dy: "2" }),
                    (0, a.jsx)("feGaussianBlur", { stdDeviation: "0.5" }),
                    (0, a.jsx)("feComposite", {
                      in2: "hardAlpha",
                      k2: "-1",
                      k3: "1",
                      operator: "arithmetic",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0",
                    }),
                    (0, a.jsx)("feBlend", {
                      in2: "shape",
                      result: "effect2_innerShadow_10825_22510",
                    }),
                  ],
                }),
                (0, a.jsxs)("filter", {
                  id: "filter2_di_10825_22510",
                  width: "48",
                  height: "48",
                  x: "37",
                  y: "97.5",
                  colorInterpolationFilters: "sRGB",
                  filterUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("feFlood", {
                      floodOpacity: "0",
                      result: "BackgroundImageFix",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      result: "hardAlpha",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    }),
                    (0, a.jsx)("feMorphology", {
                      in: "SourceAlpha",
                      operator: "dilate",
                      radius: "1",
                      result: "effect1_dropShadow_10825_22510",
                    }),
                    (0, a.jsx)("feOffset", { dx: "-1", dy: "1" }),
                    (0, a.jsx)("feGaussianBlur", { stdDeviation: "1.5" }),
                    (0, a.jsx)("feComposite", {
                      in2: "hardAlpha",
                      operator: "out",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
                    }),
                    (0, a.jsx)("feBlend", {
                      in2: "BackgroundImageFix",
                      result: "effect1_dropShadow_10825_22510",
                    }),
                    (0, a.jsx)("feBlend", {
                      in: "SourceGraphic",
                      in2: "effect1_dropShadow_10825_22510",
                      result: "shape",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      result: "hardAlpha",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    }),
                    (0, a.jsx)("feMorphology", {
                      in: "SourceAlpha",
                      radius: "1",
                      result: "effect2_innerShadow_10825_22510",
                    }),
                    (0, a.jsx)("feOffset", { dx: "-2", dy: "2" }),
                    (0, a.jsx)("feGaussianBlur", { stdDeviation: "0.5" }),
                    (0, a.jsx)("feComposite", {
                      in2: "hardAlpha",
                      k2: "-1",
                      k3: "1",
                      operator: "arithmetic",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0",
                    }),
                    (0, a.jsx)("feBlend", {
                      in2: "shape",
                      result: "effect2_innerShadow_10825_22510",
                    }),
                  ],
                }),
                (0, a.jsxs)("filter", {
                  id: "filter3_di_10825_22510",
                  width: "48",
                  height: "48",
                  x: "79",
                  y: "17.5",
                  colorInterpolationFilters: "sRGB",
                  filterUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("feFlood", {
                      floodOpacity: "0",
                      result: "BackgroundImageFix",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      result: "hardAlpha",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    }),
                    (0, a.jsx)("feMorphology", {
                      in: "SourceAlpha",
                      operator: "dilate",
                      radius: "1",
                      result: "effect1_dropShadow_10825_22510",
                    }),
                    (0, a.jsx)("feOffset", { dx: "-1", dy: "1" }),
                    (0, a.jsx)("feGaussianBlur", { stdDeviation: "1.5" }),
                    (0, a.jsx)("feComposite", {
                      in2: "hardAlpha",
                      operator: "out",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
                    }),
                    (0, a.jsx)("feBlend", {
                      in2: "BackgroundImageFix",
                      result: "effect1_dropShadow_10825_22510",
                    }),
                    (0, a.jsx)("feBlend", {
                      in: "SourceGraphic",
                      in2: "effect1_dropShadow_10825_22510",
                      result: "shape",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      result: "hardAlpha",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    }),
                    (0, a.jsx)("feMorphology", {
                      in: "SourceAlpha",
                      radius: "1",
                      result: "effect2_innerShadow_10825_22510",
                    }),
                    (0, a.jsx)("feOffset", { dx: "-2", dy: "2" }),
                    (0, a.jsx)("feGaussianBlur", { stdDeviation: "0.5" }),
                    (0, a.jsx)("feComposite", {
                      in2: "hardAlpha",
                      k2: "-1",
                      k3: "1",
                      operator: "arithmetic",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0",
                    }),
                    (0, a.jsx)("feBlend", {
                      in2: "shape",
                      result: "effect2_innerShadow_10825_22510",
                    }),
                  ],
                }),
                (0, a.jsxs)("filter", {
                  id: "filter4_di_10825_22510",
                  width: "48",
                  height: "48",
                  x: "79",
                  y: "7.5",
                  colorInterpolationFilters: "sRGB",
                  filterUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("feFlood", {
                      floodOpacity: "0",
                      result: "BackgroundImageFix",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      result: "hardAlpha",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    }),
                    (0, a.jsx)("feMorphology", {
                      in: "SourceAlpha",
                      operator: "dilate",
                      radius: "1",
                      result: "effect1_dropShadow_10825_22510",
                    }),
                    (0, a.jsx)("feOffset", { dx: "-1", dy: "1" }),
                    (0, a.jsx)("feGaussianBlur", { stdDeviation: "1.5" }),
                    (0, a.jsx)("feComposite", {
                      in2: "hardAlpha",
                      operator: "out",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
                    }),
                    (0, a.jsx)("feBlend", {
                      in2: "BackgroundImageFix",
                      result: "effect1_dropShadow_10825_22510",
                    }),
                    (0, a.jsx)("feBlend", {
                      in: "SourceGraphic",
                      in2: "effect1_dropShadow_10825_22510",
                      result: "shape",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      result: "hardAlpha",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    }),
                    (0, a.jsx)("feMorphology", {
                      in: "SourceAlpha",
                      radius: "1",
                      result: "effect2_innerShadow_10825_22510",
                    }),
                    (0, a.jsx)("feOffset", { dx: "-2", dy: "2" }),
                    (0, a.jsx)("feGaussianBlur", { stdDeviation: "0.5" }),
                    (0, a.jsx)("feComposite", {
                      in2: "hardAlpha",
                      k2: "-1",
                      k3: "1",
                      operator: "arithmetic",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0",
                    }),
                    (0, a.jsx)("feBlend", {
                      in2: "shape",
                      result: "effect2_innerShadow_10825_22510",
                    }),
                  ],
                }),
                (0, a.jsxs)("filter", {
                  id: "filter5_di_10825_22510",
                  width: "48",
                  height: "48",
                  x: "79",
                  y: "-2.5",
                  colorInterpolationFilters: "sRGB",
                  filterUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("feFlood", {
                      floodOpacity: "0",
                      result: "BackgroundImageFix",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      result: "hardAlpha",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    }),
                    (0, a.jsx)("feMorphology", {
                      in: "SourceAlpha",
                      operator: "dilate",
                      radius: "1",
                      result: "effect1_dropShadow_10825_22510",
                    }),
                    (0, a.jsx)("feOffset", { dx: "-1", dy: "1" }),
                    (0, a.jsx)("feGaussianBlur", { stdDeviation: "1.5" }),
                    (0, a.jsx)("feComposite", {
                      in2: "hardAlpha",
                      operator: "out",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
                    }),
                    (0, a.jsx)("feBlend", {
                      in2: "BackgroundImageFix",
                      result: "effect1_dropShadow_10825_22510",
                    }),
                    (0, a.jsx)("feBlend", {
                      in: "SourceGraphic",
                      in2: "effect1_dropShadow_10825_22510",
                      result: "shape",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      result: "hardAlpha",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    }),
                    (0, a.jsx)("feMorphology", {
                      in: "SourceAlpha",
                      radius: "1",
                      result: "effect2_innerShadow_10825_22510",
                    }),
                    (0, a.jsx)("feOffset", { dx: "-2", dy: "2" }),
                    (0, a.jsx)("feGaussianBlur", { stdDeviation: "0.5" }),
                    (0, a.jsx)("feComposite", {
                      in2: "hardAlpha",
                      k2: "-1",
                      k3: "1",
                      operator: "arithmetic",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0",
                    }),
                    (0, a.jsx)("feBlend", {
                      in2: "shape",
                      result: "effect2_innerShadow_10825_22510",
                    }),
                  ],
                }),
                (0, a.jsxs)("filter", {
                  id: "filter6_di_10825_22510",
                  width: "48",
                  height: "48",
                  x: "-5",
                  y: "67.5",
                  colorInterpolationFilters: "sRGB",
                  filterUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("feFlood", {
                      floodOpacity: "0",
                      result: "BackgroundImageFix",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      result: "hardAlpha",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    }),
                    (0, a.jsx)("feMorphology", {
                      in: "SourceAlpha",
                      operator: "dilate",
                      radius: "1",
                      result: "effect1_dropShadow_10825_22510",
                    }),
                    (0, a.jsx)("feOffset", { dx: "-1", dy: "1" }),
                    (0, a.jsx)("feGaussianBlur", { stdDeviation: "1.5" }),
                    (0, a.jsx)("feComposite", {
                      in2: "hardAlpha",
                      operator: "out",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
                    }),
                    (0, a.jsx)("feBlend", {
                      in2: "BackgroundImageFix",
                      result: "effect1_dropShadow_10825_22510",
                    }),
                    (0, a.jsx)("feBlend", {
                      in: "SourceGraphic",
                      in2: "effect1_dropShadow_10825_22510",
                      result: "shape",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      result: "hardAlpha",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    }),
                    (0, a.jsx)("feMorphology", {
                      in: "SourceAlpha",
                      radius: "1",
                      result: "effect2_innerShadow_10825_22510",
                    }),
                    (0, a.jsx)("feOffset", { dx: "-2", dy: "2" }),
                    (0, a.jsx)("feGaussianBlur", { stdDeviation: "0.5" }),
                    (0, a.jsx)("feComposite", {
                      in2: "hardAlpha",
                      k2: "-1",
                      k3: "1",
                      operator: "arithmetic",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0",
                    }),
                    (0, a.jsx)("feBlend", {
                      in2: "shape",
                      result: "effect2_innerShadow_10825_22510",
                    }),
                  ],
                }),
                (0, a.jsxs)("filter", {
                  id: "filter7_di_10825_22510",
                  width: "48",
                  height: "48",
                  x: "-5",
                  y: "57.5",
                  colorInterpolationFilters: "sRGB",
                  filterUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("feFlood", {
                      floodOpacity: "0",
                      result: "BackgroundImageFix",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      result: "hardAlpha",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    }),
                    (0, a.jsx)("feMorphology", {
                      in: "SourceAlpha",
                      operator: "dilate",
                      radius: "1",
                      result: "effect1_dropShadow_10825_22510",
                    }),
                    (0, a.jsx)("feOffset", { dx: "-1", dy: "1" }),
                    (0, a.jsx)("feGaussianBlur", { stdDeviation: "1.5" }),
                    (0, a.jsx)("feComposite", {
                      in2: "hardAlpha",
                      operator: "out",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
                    }),
                    (0, a.jsx)("feBlend", {
                      in2: "BackgroundImageFix",
                      result: "effect1_dropShadow_10825_22510",
                    }),
                    (0, a.jsx)("feBlend", {
                      in: "SourceGraphic",
                      in2: "effect1_dropShadow_10825_22510",
                      result: "shape",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      result: "hardAlpha",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    }),
                    (0, a.jsx)("feMorphology", {
                      in: "SourceAlpha",
                      radius: "1",
                      result: "effect2_innerShadow_10825_22510",
                    }),
                    (0, a.jsx)("feOffset", { dx: "-2", dy: "2" }),
                    (0, a.jsx)("feGaussianBlur", { stdDeviation: "0.5" }),
                    (0, a.jsx)("feComposite", {
                      in2: "hardAlpha",
                      k2: "-1",
                      k3: "1",
                      operator: "arithmetic",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0",
                    }),
                    (0, a.jsx)("feBlend", {
                      in2: "shape",
                      result: "effect2_innerShadow_10825_22510",
                    }),
                  ],
                }),
                (0, a.jsxs)("filter", {
                  id: "filter8_di_10825_22510",
                  width: "48",
                  height: "48",
                  x: "-5",
                  y: "47.5",
                  colorInterpolationFilters: "sRGB",
                  filterUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("feFlood", {
                      floodOpacity: "0",
                      result: "BackgroundImageFix",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      result: "hardAlpha",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    }),
                    (0, a.jsx)("feMorphology", {
                      in: "SourceAlpha",
                      operator: "dilate",
                      radius: "1",
                      result: "effect1_dropShadow_10825_22510",
                    }),
                    (0, a.jsx)("feOffset", { dx: "-1", dy: "1" }),
                    (0, a.jsx)("feGaussianBlur", { stdDeviation: "1.5" }),
                    (0, a.jsx)("feComposite", {
                      in2: "hardAlpha",
                      operator: "out",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
                    }),
                    (0, a.jsx)("feBlend", {
                      in2: "BackgroundImageFix",
                      result: "effect1_dropShadow_10825_22510",
                    }),
                    (0, a.jsx)("feBlend", {
                      in: "SourceGraphic",
                      in2: "effect1_dropShadow_10825_22510",
                      result: "shape",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      in: "SourceAlpha",
                      result: "hardAlpha",
                      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    }),
                    (0, a.jsx)("feMorphology", {
                      in: "SourceAlpha",
                      radius: "1",
                      result: "effect2_innerShadow_10825_22510",
                    }),
                    (0, a.jsx)("feOffset", { dx: "-2", dy: "2" }),
                    (0, a.jsx)("feGaussianBlur", { stdDeviation: "0.5" }),
                    (0, a.jsx)("feComposite", {
                      in2: "hardAlpha",
                      k2: "-1",
                      k3: "1",
                      operator: "arithmetic",
                    }),
                    (0, a.jsx)("feColorMatrix", {
                      values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0",
                    }),
                    (0, a.jsx)("feBlend", {
                      in2: "shape",
                      result: "effect2_innerShadow_10825_22510",
                    }),
                  ],
                }),
                (0, a.jsxs)("linearGradient", {
                  id: "paint0_linear_10825_22510",
                  x1: "62.5",
                  x2: "62.5",
                  y1: "120.5",
                  y2: "201.571",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { stopColor: "#75BFF0" }),
                    (0, a.jsx)("stop", { offset: "1", stopColor: "#A17DE8" }),
                  ],
                }),
                (0, a.jsxs)("radialGradient", {
                  id: "paint1_radial_10825_22510",
                  cx: "0",
                  cy: "0",
                  r: "1",
                  gradientTransform: "rotate(135 16.044 77.233) scale(56.5685)",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { offset: "0.065", stopColor: "#fff" }),
                    (0, a.jsx)("stop", {
                      offset: "0.205",
                      stopColor: "#fff",
                      stopOpacity: "0.33",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.693",
                      stopColor: "#fff",
                      stopOpacity: "0",
                    }),
                    (0, a.jsx)("stop", { offset: "0.851", stopOpacity: "0.1" }),
                  ],
                }),
                (0, a.jsxs)("radialGradient", {
                  id: "paint2_radial_10825_22510",
                  cx: "0",
                  cy: "0",
                  r: "1",
                  gradientTransform: "rotate(135 18.115 72.233) scale(56.5685)",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { offset: "0.065", stopColor: "#fff" }),
                    (0, a.jsx)("stop", {
                      offset: "0.205",
                      stopColor: "#fff",
                      stopOpacity: "0.33",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.693",
                      stopColor: "#fff",
                      stopOpacity: "0",
                    }),
                    (0, a.jsx)("stop", { offset: "0.851", stopOpacity: "0.1" }),
                  ],
                }),
                (0, a.jsxs)("radialGradient", {
                  id: "paint3_radial_10825_22510",
                  cx: "0",
                  cy: "0",
                  r: "1",
                  gradientTransform: "rotate(135 20.186 67.233) scale(56.5685)",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { offset: "0.065", stopColor: "#fff" }),
                    (0, a.jsx)("stop", {
                      offset: "0.205",
                      stopColor: "#fff",
                      stopOpacity: "0.33",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.693",
                      stopColor: "#fff",
                      stopOpacity: "0",
                    }),
                    (0, a.jsx)("stop", { offset: "0.851", stopOpacity: "0.1" }),
                  ],
                }),
                (0, a.jsxs)("linearGradient", {
                  id: "paint4_linear_10825_22510",
                  x1: "104.5",
                  x2: "104.5",
                  y1: "20.5",
                  y2: "200.5",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { stopColor: "#CDF460" }),
                    (0, a.jsx)("stop", { offset: "1", stopColor: "#5AF280" }),
                  ],
                }),
                (0, a.jsxs)("radialGradient", {
                  id: "paint5_radial_10825_22510",
                  cx: "0",
                  cy: "0",
                  r: "1",
                  gradientTransform: "rotate(135 57.754 35.931) scale(56.5685)",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { offset: "0.065", stopColor: "#fff" }),
                    (0, a.jsx)("stop", {
                      offset: "0.205",
                      stopColor: "#fff",
                      stopOpacity: "0.33",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.693",
                      stopColor: "#fff",
                      stopOpacity: "0",
                    }),
                    (0, a.jsx)("stop", { offset: "0.851", stopOpacity: "0.1" }),
                  ],
                }),
                (0, a.jsxs)("radialGradient", {
                  id: "paint6_radial_10825_22510",
                  cx: "0",
                  cy: "0",
                  r: "1",
                  gradientTransform: "rotate(135 59.825 30.931) scale(56.5685)",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { offset: "0.065", stopColor: "#fff" }),
                    (0, a.jsx)("stop", {
                      offset: "0.205",
                      stopColor: "#fff",
                      stopOpacity: "0.33",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.693",
                      stopColor: "#fff",
                      stopOpacity: "0",
                    }),
                    (0, a.jsx)("stop", { offset: "0.851", stopOpacity: "0.1" }),
                  ],
                }),
                (0, a.jsxs)("radialGradient", {
                  id: "paint7_radial_10825_22510",
                  cx: "0",
                  cy: "0",
                  r: "1",
                  gradientTransform: "rotate(135 61.896 25.931) scale(56.5685)",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { offset: "0.065", stopColor: "#fff" }),
                    (0, a.jsx)("stop", {
                      offset: "0.205",
                      stopColor: "#fff",
                      stopOpacity: "0.33",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.693",
                      stopColor: "#fff",
                      stopOpacity: "0",
                    }),
                    (0, a.jsx)("stop", { offset: "0.851", stopOpacity: "0.1" }),
                  ],
                }),
                (0, a.jsxs)("linearGradient", {
                  id: "paint8_linear_10825_22510",
                  x1: "20.5",
                  x2: "20.5",
                  y1: "70.5",
                  y2: "202.241",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { stopColor: "#F396E8" }),
                    (0, a.jsx)("stop", { offset: "1", stopColor: "#FDB840" }),
                  ],
                }),
                (0, a.jsxs)("radialGradient", {
                  id: "paint9_radial_10825_22510",
                  cx: "0",
                  cy: "0",
                  r: "1",
                  gradientTransform: "rotate(135 5.399 43.534) scale(56.5685)",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { offset: "0.065", stopColor: "#fff" }),
                    (0, a.jsx)("stop", {
                      offset: "0.205",
                      stopColor: "#fff",
                      stopOpacity: "0.33",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.693",
                      stopColor: "#fff",
                      stopOpacity: "0",
                    }),
                    (0, a.jsx)("stop", { offset: "0.851", stopOpacity: "0.1" }),
                  ],
                }),
                (0, a.jsxs)("radialGradient", {
                  id: "paint10_radial_10825_22510",
                  cx: "0",
                  cy: "0",
                  r: "1",
                  gradientTransform: "rotate(135 7.47 38.534) scale(56.5685)",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { offset: "0.065", stopColor: "#fff" }),
                    (0, a.jsx)("stop", {
                      offset: "0.205",
                      stopColor: "#fff",
                      stopOpacity: "0.33",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.693",
                      stopColor: "#fff",
                      stopOpacity: "0",
                    }),
                    (0, a.jsx)("stop", { offset: "0.851", stopOpacity: "0.1" }),
                  ],
                }),
                (0, a.jsxs)("radialGradient", {
                  id: "paint11_radial_10825_22510",
                  cx: "0",
                  cy: "0",
                  r: "1",
                  gradientTransform: "rotate(135 9.541 33.534) scale(56.5685)",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { offset: "0.065", stopColor: "#fff" }),
                    (0, a.jsx)("stop", {
                      offset: "0.205",
                      stopColor: "#fff",
                      stopOpacity: "0.33",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.693",
                      stopColor: "#fff",
                      stopOpacity: "0",
                    }),
                    (0, a.jsx)("stop", { offset: "0.851", stopOpacity: "0.1" }),
                  ],
                }),
                (0, a.jsx)("clipPath", {
                  id: "clip0_10825_22510",
                  children: (0, a.jsx)("path", {
                    fill: "#fff",
                    d: "M0 0H60V40H0z",
                    transform: "rotate(-90 101.25 59.25)",
                  }),
                }),
                (0, a.jsx)("clipPath", {
                  id: "clip1_10825_22510",
                  children: (0, a.jsx)("rect", {
                    width: "40",
                    height: "40",
                    x: "42",
                    y: "160.5",
                    fill: "#fff",
                    rx: "20",
                    transform: "rotate(-90 42 160.5)",
                  }),
                }),
                (0, a.jsx)("clipPath", {
                  id: "clip2_10825_22510",
                  children: (0, a.jsx)("rect", {
                    width: "40",
                    height: "40",
                    x: "42",
                    y: "150.5",
                    fill: "#fff",
                    rx: "20",
                    transform: "rotate(-90 42 150.5)",
                  }),
                }),
                (0, a.jsx)("clipPath", {
                  id: "clip3_10825_22510",
                  children: (0, a.jsx)("rect", {
                    width: "40",
                    height: "40",
                    x: "42",
                    y: "140.5",
                    fill: "#fff",
                    rx: "20",
                    transform: "rotate(-90 42 140.5)",
                  }),
                }),
                (0, a.jsx)("clipPath", {
                  id: "clip4_10825_22510",
                  children: (0, a.jsx)("path", {
                    fill: "#fff",
                    d: "M0 0H60V40H0z",
                    transform: "rotate(-90 72.25 -11.75)",
                  }),
                }),
                (0, a.jsx)("clipPath", {
                  id: "clip5_10825_22510",
                  children: (0, a.jsx)("rect", {
                    width: "40",
                    height: "40",
                    x: "84",
                    y: "60.5",
                    fill: "#fff",
                    rx: "20",
                    transform: "rotate(-90 84 60.5)",
                  }),
                }),
                (0, a.jsx)("clipPath", {
                  id: "clip6_10825_22510",
                  children: (0, a.jsx)("rect", {
                    width: "40",
                    height: "40",
                    x: "84",
                    y: "50.5",
                    fill: "#fff",
                    rx: "20",
                    transform: "rotate(-90 84 50.5)",
                  }),
                }),
                (0, a.jsx)("clipPath", {
                  id: "clip7_10825_22510",
                  children: (0, a.jsx)("rect", {
                    width: "40",
                    height: "40",
                    x: "84",
                    y: "40.5",
                    fill: "#fff",
                    rx: "20",
                    transform: "rotate(-90 84 40.5)",
                  }),
                }),
                (0, a.jsx)("clipPath", {
                  id: "clip8_10825_22510",
                  children: (0, a.jsx)("path", {
                    fill: "#fff",
                    d: "M0 0H60V40H0z",
                    transform: "rotate(-90 55.25 55.25)",
                  }),
                }),
                (0, a.jsx)("clipPath", {
                  id: "clip9_10825_22510",
                  children: (0, a.jsx)("rect", {
                    width: "40",
                    height: "40",
                    y: "110.5",
                    fill: "#fff",
                    rx: "20",
                    transform: "rotate(-90 0 110.5)",
                  }),
                }),
                (0, a.jsx)("clipPath", {
                  id: "clip10_10825_22510",
                  children: (0, a.jsx)("rect", {
                    width: "40",
                    height: "40",
                    y: "100.5",
                    fill: "#fff",
                    rx: "20",
                    transform: "rotate(-90 0 100.5)",
                  }),
                }),
                (0, a.jsx)("clipPath", {
                  id: "clip11_10825_22510",
                  children: (0, a.jsx)("rect", {
                    width: "40",
                    height: "40",
                    y: "90.5",
                    fill: "#fff",
                    rx: "20",
                    transform: "rotate(-90 0 90.5)",
                  }),
                }),
              ],
            }),
          ],
        });
    },
    77977: function (e, t, r) {
      r.d(t, {
        L: function () {
          return s;
        },
      });
      var a = r(75325),
        o = r(65692);
      let s = {
        appIcon:
          "https://ucarecdn.com/8a53aafb-0eaf-4cf5-b5f9-b35b3a75f555/-/format/auto/-/quality/smart_retina/-/preview/",
        ogImage:
          "https://ucarecdn.com/c385b808-860a-485b-80a0-0de4da952be6/-/format/auto/-/quality/smart_retina/-/preview/",
        footerNFTIcon:
          "https://ucarecdn.com/832839d1-fecf-4179-917a-a7db11a0b323/-/format/auto/-/quality/smart_retina/-/preview/",
        footerLogo:
          "https://ucarecdn.com/5a069d8f-a4da-40e3-ad85-f979b44e5385/-/format/auto/-/quality/smart_retina/-/preview/",
        footerImage1:
          "https://ucarecdn.com/be0b28dd-c8c5-4cb1-b67a-84d1cfa20dd7/-/format/auto/-/quality/smart_retina/-/preview/-/resize/600/",
        footerImage2:
          "https://ucarecdn.com/02a5582c-54f5-49c9-a2e8-21ff975fd8bb/-/format/auto/-/quality/smart_retina/-/preview/-/resize/600/",
        navCoins:
          "https://ucarecdn.com/00384130-2644-42b1-8eea-68e8abdd440c/-/format/auto/-/quality/smart_retina/-/preview/",
        navNFTs:
          "https://ucarecdn.com/c95819b2-ddbf-45ca-86a5-df113eb86f13/-/format/auto/-/quality/smart_retina/-/preview/",
        navTextLogo:
          "https://ucarecdn.com/3ebde448-e51b-456b-914d-5d0d628505ab/-/format/auto/-/quality/smart_retina/-/preview/",
        mdBgDark:
          "https://ucarecdn.com/6583b5ff-9a96-4a25-90ae-c96a352eeb23/mdbgdark.svg",
        mdBg: "https://ucarecdn.com/6910150f-8dcc-4155-b8e8-c187575ebd17/mdbg.svg",
        dripsCorner:
          "https://ucarecdn.com/f215ff73-6423-43cf-8a7a-ed6646546b04/corner.svg",
        coinBlueprint:
          "https://ucarecdn.com/3e0bb7e8-72ab-468a-8fe5-bc69236a44ed/-/format/auto/-/quality/smart_retina/",
        profileExample:
          "https://ucarecdn.com/71831488-14fb-4a3b-91f6-6f7da36704df/-/format/auto/-/quality/smart_retina/",
        contractBlueprint:
          "https://ucarecdn.com/7718b0c2-df16-42e7-9ef2-609a6795f6b2/-/format/auto/-/quality/smart_retina/",
        poolRings:
          "https://ucarecdn.com/5f31e700-c0e3-487b-9e85-5ef4ab28f3ed/-/format/auto/-/quality/smart_retina/",
        coinBuilder: { emptyGraphic: a.Z, newCoinGraphic: o.Z },
        documents: {
          termsOfUse:
            "https://ucarecdn.com/8a03ad26-f7ed-4f79-9d75-8a99694b8718/MetadropTermsofUseOctober2023.pdf",
          privacyPolicy:
            "https://ucarecdn.com/d8964352-ff4c-426a-8b1c-a51deefb2c2c/Metadrop_Privacy_Policy__Feb_2023_o3veth.pdf",
        },
        fonts: {
          polySansNeutral:
            "https://ucarecdn.com/18ff7e52-7eeb-4fb7-b249-f2cc4b311dd4/PolySansNeutral_ydvq84.woff2",
          polySansMedian:
            "https://ucarecdn.com/1967ff23-0aee-4078-9f18-b8f6a783c132/PolySansMedian_g0tsa4.woff2",
          polySansMedianWide:
            "https://ucarecdn.com/5cc2b55d-f6b8-400a-a4b0-798f36ccffab/PolySansMedianWide_cqzgag.woff2",
          nbArchitektRegular:
            "https://ucarecdn.com/7e2d1b67-6a1d-476d-8939-1ba3d741b3a1/nb_architekt_r_regularwebfont_f2xtaz.woff2",
          nbArchitektBold:
            "https://ucarecdn.com/d4294df0-0573-494f-9f8e-ed8f7816a81e/nb_architekt_r_boldwebfont_klo1os.woff2",
        },
        favicon: {
          safariPinnedTab:
            "https://ucarecdn.com/851e6188-dd46-4629-915e-a3ffb3ac03f2/safaripinnedtab.svg",
          msTile150x150:
            "https://ucarecdn.com/f6246ff6-19d2-482d-8036-35ffec788348/mstile150x150.png",
          favicon32x32:
            "https://ucarecdn.com/1f9305a8-2185-4b93-bf8f-a9aea99a822b/favicon32x32.png",
          androidChrome512x512:
            "https://ucarecdn.com/2b764b44-513b-48a3-b748-6d102435a7b3/androidchrome512x512.png",
          faviconIco:
            "https://ucarecdn.com/0da1018e-015f-4042-b26d-a30376b56969/favicon.ico",
          siteWebmanifest:
            "https://ucarecdn.com/b2127003-c951-4105-b9b5-e713a729938a/site.webmanifest",
          browserconfigXml:
            "https://ucarecdn.com/49f0ec8f-2ed7-493f-bc1d-f045c7b03926/browserconfig.xml",
          androidChrome192x192:
            "https://ucarecdn.com/83d1c8d7-8ece-43d8-a5b9-571d65729102/androidchrome192x192.png",
          appleTouchIcon:
            "https://ucarecdn.com/0b0ab3d6-414b-402d-bbd3-4c377f125dd2/appletouchicon.png",
          favicon16x16:
            "https://ucarecdn.com/841b35d1-e929-4a97-bb06-e54821e9bfc5/favicon16x16.png",
        },
      };
    },
    65692: function (e, t, r) {
      var a = r(2067);
      t.Z = (e) =>
        (0, a.jsxs)("svg", {
          width: "80",
          height: "80",
          viewBox: "0 0 80 80",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, a.jsx)("path", {
              d: "M40.8941 10.4724C40.6301 10.0558 40.2116 9.82615 39.7771 9.78335C39.6947 9.77523 39.6274 9.84315 39.6274 9.92599V32.0545L58.3486 40.2721C58.4377 40.3112 58.54 40.2564 58.5506 40.1597C58.6215 39.517 58.4861 38.8462 58.118 38.2524L40.8941 10.4724Z",
              stroke: "#F2F2F2",
              strokeWidth: "1.5",
            }),
            (0, a.jsx)("path", {
              d: "M39.6277 9.92587C39.6277 9.84303 39.5604 9.77511 39.478 9.78323C39.043 9.82609 38.624 10.0563 38.3601 10.4738L21.1271 38.2677C20.7663 38.8578 20.634 39.5225 20.7044 40.1597C20.7151 40.2563 20.8174 40.3111 20.9065 40.272L39.6277 32.0544V9.92587Z",
              fill: "#F2F2F2",
              stroke: "#F2F2F2",
              strokeWidth: "1.5",
            }),
            (0, a.jsx)("path", {
              d: "M39.6276 70.9722C39.6276 71.055 39.6949 71.1229 39.7773 71.1148C40.1816 71.0748 40.5723 70.8722 40.8392 70.507L57.6919 47.4374C58.1528 46.7851 57.4032 45.955 56.7049 46.3557L41.8683 54.8704C41.1744 55.2686 40.401 55.4676 39.6276 55.4675V70.9722Z",
              stroke: "#F2F2F2",
              strokeWidth: "1.5",
            }),
            (0, a.jsx)("path", {
              d: "M21.5826 47.4477L38.4164 70.5059C38.6831 70.8712 39.0737 71.0739 39.4779 71.114C39.5603 71.1222 39.6276 71.0543 39.6276 70.9714V55.4668C38.8543 55.4666 38.081 55.2674 37.3874 54.8691L22.5618 46.3551C21.8596 45.9518 21.1051 46.7937 21.5826 47.4477Z",
              fill: "#F2F2F2",
              stroke: "#F2F2F2",
              strokeWidth: "1.5",
            }),
            (0, a.jsx)("path", {
              d: "M58.5011 40.4655C58.5156 40.398 58.4791 40.3305 58.4159 40.3027L39.6274 32.0549V51.6126C39.6274 51.6955 39.6946 51.7629 39.7774 51.7601C40.5009 51.736 41.2199 51.5375 41.8691 51.1645L57.0932 42.4175C57.8442 41.9745 58.3308 41.2551 58.5011 40.4655Z",
              stroke: "#F2F2F2",
              strokeWidth: "1.5",
            }),
            (0, a.jsx)("path", {
              d: "M39.4775 51.7601C39.5603 51.7629 39.6275 51.6955 39.6275 51.6126V31.9978L20.8382 40.2992C20.7752 40.3271 20.7389 40.3944 20.7533 40.4618C20.9252 41.2632 21.4229 41.9925 22.1922 42.4345L37.3857 51.1644C38.0349 51.5374 38.7539 51.736 39.4775 51.7601Z",
              fill: "#F2F2F2",
              stroke: "#F2F2F2",
              strokeWidth: "1.5",
            }),
            (0, a.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M40 2.50049C40 2.22435 39.7761 2.00049 39.5 2.00049C39.2239 2.00049 39 2.22435 39 2.50049V4.50073C39 8.64287 35.6421 12.0007 31.5 12.0007H29.5C29.2239 12.0007 29 12.2246 29 12.5007C29 12.7769 29.2239 13.0007 29.5 13.0007H31.5C35.6421 13.0007 39 16.3586 39 20.5007V21.501C39 21.7771 39.2239 22.001 39.5 22.001C39.7761 22.001 40 21.7771 40 21.501V20.5007C40 16.3586 43.3579 13.0007 47.5 13.0007H48.5C48.7761 13.0007 49 12.7769 49 12.5007C49 12.2246 48.7761 12.0007 48.5 12.0007H47.5C43.3579 12.0007 40 8.64287 40 4.50073V2.50049Z",
              fill: "#F2F2F2",
            }),
            (0, a.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M49.6 53.3005C49.6 53.1348 49.4657 53.0005 49.3 53.0005C49.1343 53.0005 49 53.1348 49 53.3005V54.5006C49 56.9859 46.9853 59.0006 44.5 59.0006H43.3C43.1343 59.0006 43 59.135 43 59.3006C43 59.4663 43.1343 59.6006 43.3 59.6006H44.5C46.9853 59.6006 49 61.6154 49 64.1006V64.7008C49 64.8665 49.1343 65.0008 49.3 65.0008C49.4657 65.0008 49.6 64.8665 49.6 64.7008V64.1006C49.6 61.6154 51.6147 59.6006 54.1 59.6006H54.7C54.8657 59.6006 55 59.4663 55 59.3006C55 59.135 54.8657 59.0006 54.7 59.0006H54.1C51.6147 59.0006 49.6 56.9859 49.6 54.5006V53.3005Z",
              fill: "#F2F2F2",
            }),
          ],
        });
    },
    2384: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return n;
          },
        });
      var a = r(2067),
        o = r(71335),
        s = r.n(o),
        i = r(67552),
        l = r(96560);
      function n(e) {
        let {
            Component: t,
            className: r,
            href: o,
            as: n,
            target: f,
            rel: c,
            disabled: d,
            loading: p,
            htmlType: h,
            leftIcon: x,
            rightIcon: u,
            children: _,
            type: j = "primary",
            fullWidth: g = !1,
            size: m = "md",
            onClick: y,
            forceEnabled: b,
            prefetch: C,
            ...w
          } = e,
          v = (0, i.B4)(),
          S = (d || p || v) && !b;
        o && (S = !!(d || p));
        let k = t || (o && n ? s() : o ? "a" : "button");
        return (0, a.jsxs)(k, {
          tabIndex: S ? -1 : void 0,
          type: h,
          className: (0, l.cn)(
            S && "pointer-events-none",
            "transition-all active:scale-95",
            "select-none",
            "rounded-full font-mono  uppercase leading-[1em]",
            "flex items-center justify-center gap-2 text-center",
            "subpixel-antialiased focus:outline-highlight focus:ring-0",
            "border",
            "whitespace-nowrap",
            "group",
            g && "w-full",
            p && "cursor-wait",
            S && "disabled pointer-events-none",
            "xs" === m && ["text-xs", "py-1", "px-2", x && "pl-1", u && "pr-1"],
            "sm" === m && ["text-sm", "py-2", "px-4", x && "pl-3", u && "pr-3"],
            "md" === m && [
              "text-sm",
              "h-8 min-w-[2rem]",
              "px-4",
              x && "pl-3",
              u && "pr-3",
            ],
            "lg" === m && ["text-lg", "py-4", "px-8"],
            "xl" === m && ["text-lg", "py-5", "px-10"],
            !_ && "aspect-square p-1",
            "primary" === j && [
              "border-transparent",
              "bg-gray-10 text-gray-95 hover:bg-gray-20 disabled:bg-gray-50 disabled:text-gray-95",
              "bg-gray-95 text-gray-10 hover:bg-gray-85 disabled:bg-gray-50 disabled:text-gray-30",
            ],
            ("ghost" === j || "secondary" === j) && [
              "border border-gray-100/10 text-gray-95 hover:border-transparent hover:bg-gray-100/10 disabled:text-gray-100/40",
            ],
            "ghost" === j && [
              "rounded-xs",
              "h-auto min-h-[30px]",
              "!hover:border-transparent !border-transparent px-2 py-1",
            ],
            "danger" === j && [
              "border-1 border-negative bg-negative text-gray-100 hover:brightness-125",
              "disabled:opacity-40",
            ],
            "secondary" === j && S && "text-gray-100/40",
            "ghost" === j && S && "text-gray-100/40",
            "accent" === j &&
              "border-highlight bg-highlight text-gray-10 hover:brightness-90",
            "accent" === j && S && "brightness-50",
            r
          ),
          disabled: S,
          onClick: y,
          href: S ? "#" : o,
          as: S ? void 0 : n,
          target: f,
          rel: c,
          prefetch: C,
          ...w,
          children: [x && x, _, u && u],
        });
      }
    },
    26933: function (e, t, r) {
      r.d(t, {
        s: function () {
          return i;
        },
      });
      var a = r(2067),
        o = r(96560),
        s = r(15039);
      t.Z = (e) => {
        let {
            src: t,
            type: r = "image",
            transforms: l = { resize: "1600" },
            className: n,
            alt: f,
            ...c
          } = e,
          { src_: d, type: p } = (0, s.useMemo)(() => {
            let e = r;
            return (
              /gif2video/.test(t) && (e = "video"),
              { src_: "video" === e ? t : i(t, l), type: e }
            );
          }, [t, l, r]);
        return "image" === p
          ? (0, a.jsx)("img", {
              className: (0, o.cn)("no-fallback h-full object-cover", n),
              alt: null != f ? f : "decorative",
              src: d,
              ...c,
            })
          : "video" === p
          ? (0, a.jsx)("video", {
              className: n,
              autoPlay: !0,
              loop: !0,
              src: d,
              ...c,
              muted: !0,
            })
          : void 0;
      };
      let i = (e, t) => {
        if (!/ucarecdn/.test(e)) return e;
        let r = Object.entries(null != t ? t : {}).reduce((e, t) => {
          let [r, a] = t;
          return "".concat(e, "-/").concat(r, "/").concat(a, "/");
        }, "-/quality/best/-/format/auto/");
        return "".concat(e).concat(r);
      };
    },
    67552: function (e, t, r) {
      r.d(t, {
        B4: function () {
          return l;
        },
        G6: function () {
          return i;
        },
        dz: function () {
          return s;
        },
      });
      var a = r(2067),
        o = r(15039);
      let s = (0, o.createContext)(!1),
        i = (e) => {
          let { value: t, bypassParent: r = !1, ...o } = e,
            i = l();
          return (0, a.jsx)(s.Provider, { value: r ? t : i || t, ...o });
        };
      s.displayName = "DisabledContext";
      let l = () => (0, o.useContext)(s);
    },
    26871: function (e, t, r) {
      r.d(t, {
        qF: function () {
          return d;
        },
      });
      var a = r(13359),
        o = r.n(a),
        s = r(69239),
        i = r.n(s),
        l = r(81345),
        n = r.n(l),
        f = r(79173);
      let c = () => Math.floor(Math.random() * Date.now()),
        d = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
          if (!e) return null;
          let a = e.toString(),
            { width: s = 200, height: l = 200, startColor: d = null } = t || {},
            x = n()(a),
            u = i()(x % 360, 1, 0.5),
            _ = d ? h(d) : (0, f.U)(a) ? h(p(a, "hex")) : null,
            j = o()(u[0][0], u[0][1], u[0][2]),
            g = o()(u[1][0], u[1][1], u[1][2]),
            m = _
              ? (function (e) {
                  let [t, r, a] = e.split(", ").map(parseFloat),
                    o = a / 100,
                    s = (r / 100) * Math.min(o, 1 - o),
                    i = (e) => {
                      let r = (e + t / 30) % 12;
                      return o - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
                    },
                    l = Math.round(255 * i(0)),
                    n = Math.round(255 * i(8)),
                    f = Math.round(255 * i(4));
                  return "rgb(".concat(l, ", ").concat(n, ", ").concat(f, ")");
                })(_)
              : "rgb(".concat(j[0], ", ").concat(j[1], ", ").concat(j[2], ")"),
            y = "rgb(".concat(g[0], ", ").concat(g[1], ", ").concat(g[2], ")"),
            b = c(),
            C = '<?xml version="1.0" encoding="UTF-8"?>\n<svg '
              .concat(s ? 'width="'.concat(s, 'px"') : "", " ")
              .concat(
                l ? 'height="'.concat(l, 'px"') : "",
                ' viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="'
              )
              .concat(b, '">\n      <stop stop-color="')
              .concat(m, '" offset="0%"></stop>\n      <stop stop-color="')
              .concat(
                y,
                '" offset="100%"></stop>\n    </linearGradient>\n  </defs>\n  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <rect id="Rectangle" fill="url(#'
              )
              .concat(
                b,
                ')" x="0" y="0" width="80" height="80"></rect>\n  </g>\n</svg>'
              );
          return r ? "data:image/svg+xml;base64,".concat(btoa(C)) : C;
        },
        p = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "hsl";
          return "hex" === t
            ? "#".concat(null == e ? void 0 : e.slice(2, 8))
            : h("#".concat(null == e ? void 0 : e.slice(2, 8)), !0);
        };
      function h(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (!e) return null;
        if (e.startsWith("#")) {
          let r = e.slice(1);
          if (3 === r.length) {
            let t = r[0],
              a = r[1],
              o = r[2];
            e = "#".concat(t).concat(t).concat(a).concat(a).concat(o).concat(o);
          }
          let a = parseInt(e.slice(1, 3), 16) / 255,
            o = parseInt(e.slice(3, 5), 16) / 255,
            s = parseInt(e.slice(5, 7), 16) / 255,
            i = Math.max(a, o, s),
            l = Math.min(a, o, s),
            n = (i + l) / 2;
          t && n < 0.5 && (n = 0.5);
          let f = 0,
            c = 0;
          if (i !== l) {
            let e = i - l;
            switch (((c = n > 0.5 ? e / (2 - i - l) : e / (i + l)), i)) {
              case a:
                f = (o - s) / e + (o < s ? 6 : 0);
                break;
              case o:
                f = (s - a) / e + 2;
                break;
              case s:
                f = (a - o) / e + 4;
            }
            f /= 6;
          }
          return ""
            .concat(360 * f, ", ")
            .concat(100 * c, "%, ")
            .concat(100 * n, "%");
        }
        if (e.startsWith("rgb")) {
          let r = e
              .slice(4, -1)
              .split(",")
              .map((e) => parseInt(e, 10)),
            a = r[0] / 255,
            o = r[1] / 255,
            s = r[2] / 255,
            i = Math.max(a, o, s),
            l = Math.min(a, o, s),
            n = 0,
            f = 0,
            c = (i + l) / 2;
          if ((t && c < 0.5 && (c = 0.5), i !== l)) {
            let e = i - l;
            switch (((f = c > 0.5 ? e / (2 - i - l) : e / (i + l)), i)) {
              case a:
                n = (o - s) / e + (o < s ? 6 : 0);
                break;
              case o:
                n = (s - a) / e + 2;
                break;
              case s:
                n = (a - o) / e + 4;
            }
            n /= 6;
          }
          return ""
            .concat(360 * n, ", ")
            .concat(100 * f, "%, ")
            .concat(100 * c, "%");
        }
        return e.startsWith("hsl")
          ? e
              .slice(4, -1)
              .split(",")
              .map((e, r) =>
                t && 2 === r && 50 > parseInt(e, 10) ? "50%" : parseInt(e, 10)
              )
              .join(", ")
          : e;
      }
    },
    69436: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = r(56837),
        o = r(44249),
        s = r(84824),
        i = r.n(s),
        l = r(36221);
      class n extends Error {
        constructor(...e) {
          var t, r;
          super(...e),
            null === (t = (r = Error).captureStackTrace) ||
              void 0 === t ||
              t.call(r, this, n);
        }
      }
      async function f(e) {
        let t,
          r,
          s,
          f,
          c =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          d = "/" === e[0] ? a.T + e : e,
          p = {};
        try {
          if (
            (c.timeout &&
              ((f = new AbortController()),
              setTimeout(() => {
                if (!r) {
                  let e = new n(
                    "Timeout (".concat(c.method || "GET", " ").concat(d, ")")
                  );
                  throw ((e.code = "timeout"), null == f || f.abort(), e);
                }
              }, c.timeout)),
            (r = await i()(d, {
              ...c,
              agent: t,
              signal: f ? f.signal : void 0,
            })),
            c.throwOnHTTPError && (r.status < 200 || r.status >= 300))
          ) {
            let { type: e } = (0, o.Q)(
              r.headers.get("Content-Type") || "text/plain"
            );
            if ("application/json" === e)
              (p = await r.json()).code && p.message && (p.error = p),
                ((s = new n(
                  p.error
                    ? p.error.message || p.error.code
                    : "Unexpected Error (".concat(c.method, " ").concat(d, ")")
                )).res = r),
                (s.status = r.status),
                (s.code = p.error.code),
                (s.message = p.error.message),
                (s.extra = p.extra);
            else {
              let t = "";
              try {
                t = await r.text();
              } catch (e) {
                console.error(e);
              }
              let a = new n(
                "Unexpected response content-type ("
                  .concat(c.method || "GET", " ")
                  .concat(d, "): ")
                  .concat(e, "(")
                  .concat(r.status, ") ")
                  .concat(t)
              );
              throw (
                ((a.res = r),
                (a.status = r.status),
                console.log("throwing", a),
                a)
              );
            }
          } else
            204 === r.status
              ? (p = {})
              : (r.headers.get("Content-Type") || "").startsWith("text/")
              ? (p = await r.text())
              : (p = await r.json()).json && (p = (0, l.vB)(p));
        } catch (e) {
          s = e;
        }
        if (!s) return p;
        if (
          s.status < 500 ||
          ((s.stack = ""
            .concat(s.stack ? s.stack : "", " ### Fetched URL: ")
            .concat(d)),
          c.body &&
            (s.stack = ""
              .concat(s.stack ? s.stack : "", " ### Request Body: ")
              .concat(JSON.stringify(c.body))),
          c.throwOnHTTPError)
        )
          throw s;
      }
      function c(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { throwOnHTTPError: !0, timeout: 1e4 };
        return (
          (t.headers = t.headers || {}),
          (t.headers.Accept = t.headers.Accept || "application/json"),
          (t.headers["Content-Type"] =
            t.headers["Content-Type"] || "application/json"),
          (t.credentials = "include"),
          (function (e) {
            if ("object" == typeof e && null !== e) {
              let t = Object.getPrototypeOf(e);
              return t === Object.prototype || null === t;
            }
            return !1;
          })(t.body) && (t.body = JSON.stringify(t.body)),
          f(e, { throwOnHTTPError: !0, ...t })
        );
      }
    },
    56837: function (e, t, r) {
      r.d(t, {
        T: function () {
          return s;
        },
        Y: function () {
          return o;
        },
      });
      var a = r(26182);
      let o = "master" === a.env.RENDER_GIT_BRANCH || !0,
        s = a.env.NEXT_PUBLIC_API_URL
          ? a.env.NEXT_PUBLIC_API_URL
          : o
          ? "https://api.metadrop.com"
          : "https://".concat("api-nv3a", ".onrender.com");
    },
  },
]);
