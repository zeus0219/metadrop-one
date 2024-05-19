"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1329],
  {
    37397: function (e, t, n) {
      n.d(t, {
        UH: function () {
          return p;
        },
      });
      var a = n(2067),
        i = n(96560);
      let b = (e) => {
          let { className: t = "", style: n = {} } = e;
          return (0, a.jsxs)("svg", {
            className: (0, i.cn)("w-auto", t),
            width: "10",
            height: "20",
            viewBox: "0 0 10 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            style: n,
            children: [
              (0, a.jsx)("path", {
                d: "M0 4.37114e-07L9.53674e-07 10C7.12263e-07 4.47715 4.47715 2.41411e-07 10 0L0 4.37114e-07Z",
                fill: "var(--bg-color)",
              }),
              (0, a.jsx)("path", {
                d: "M9.53674e-07 10C1.19509e-06 15.5228 4.47715 20 10 20H9.53674e-07V10Z",
                fill: "var(--bg-color)",
              }),
            ],
          });
        },
        p = (e) => {
          let { className: t = "", useCurrentColor: n = !1 } = e;
          return (0, a.jsx)("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: (0, a.jsx)("path", {
              d: "M20 20H0V0C0 11.0457 8.9543 20 20 20Z",
              fill: n ? "currentColor" : "var(--bg-color)",
            }),
          });
        };
      t.ZP = (e) => {
        let { className: t = "", style: n, bg: p, dir: d = "col" } = e;
        return (0, a.jsxs)("div", {
          className: (0, i.cn)(
            t,
            p,
            "w-full",
            "flex justify-center",
            "col" === d ? "flex-row" : "flex-col"
          ),
          style: {
            color: "var(--bg-color)",
            backgroundColor: "transparent",
            ...n,
          },
          children: [
            (0, a.jsx)(b, {
              className: (0, i.cn)("rotate-180", "row" === d && "rotate-270"),
              style: { height: "var(--joint-height)" },
            }),
            (0, a.jsx)("div", {
              className: "max-w-[80%]",
              style: {
                width: "var(--joint-width)",
                backgroundColor: "var(--bg-color)",
              },
            }),
            (0, a.jsx)(b, {
              className: (0, i.cn)("row" === d && "rotate-90"),
              style: { height: "var(--joint-height)" },
            }),
          ],
        });
      };
    },
    48259: function (e, t, n) {
      n.r(t),
        n.d(t, {
          Tooltip: function () {
            return u;
          },
          TooltipContent: function () {
            return s;
          },
          TooltipProvider: function () {
            return d;
          },
          TooltipTrigger: function () {
            return f;
          },
        });
      var a = n(2067),
        i = n(15039),
        b = n(87907),
        p = n(96560);
      let d = (e) => (0, a.jsx)(b.zt, { delayDuration: 150, ...e }),
        u = b.fC,
        f = (e) =>
          (0, a.jsx)(b.xz, {
            ...e,
            className: (0, p.cn)("cursor-auto", e.className),
            type: "button",
          }),
        s = i.forwardRef((e, t) => {
          let { className: n, sideOffset: i = 8, side: d = "bottom", ...u } = e;
          return (
            u.children &&
            (0, a.jsx)(b.VY, {
              ref: t,
              sideOffset: i,
              side: d,
              className: (0, p.cn)(
                "z-50 animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
                "px-3 pb-[11px] pt-[9px]",
                "popover",
                "text-pretty",
                "shadow-lg",
                "text-sm font-normal",
                "max-w-xs",
                n
              ),
              avoidCollisions: !0,
              ...u,
            })
          );
        });
      s.displayName = b.VY.displayName;
    },
    25463: function (e, t, n) {
      n.d(t, {
        vQ: function () {
          return f;
        },
        gH: function () {
          return i;
        },
        BT: function () {
          return b;
        },
        BU: function () {
          return a;
        },
        mC: function () {
          return u;
        },
        Ai: function () {
          return p;
        },
        gP: function () {
          return d;
        },
      });
      let a = [
          {
            inputs: [
              { internalType: "address", name: "factory_", type: "address" },
              { internalType: "address", name: "WETH_", type: "address" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "totalAmount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "totalFee",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "feeBasisPoints",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "address",
                name: "recipient",
                type: "address",
              },
            ],
            name: "Fee",
            type: "event",
          },
          {
            inputs: [],
            name: "WETH",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "tokenA", type: "address" },
              { internalType: "address", name: "tokenB", type: "address" },
              {
                internalType: "uint256",
                name: "amountADesired",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountBDesired",
                type: "uint256",
              },
              { internalType: "uint256", name: "amountAMin", type: "uint256" },
              { internalType: "uint256", name: "amountBMin", type: "uint256" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "addLiquidity",
            outputs: [
              { internalType: "uint256", name: "amountA", type: "uint256" },
              { internalType: "uint256", name: "amountB", type: "uint256" },
              { internalType: "uint256", name: "liquidity", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
              {
                internalType: "uint256",
                name: "amountTokenDesired",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountTokenMin",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountETHMin",
                type: "uint256",
              },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "addLiquidityETH",
            outputs: [
              { internalType: "uint256", name: "amountToken", type: "uint256" },
              { internalType: "uint256", name: "amountETH", type: "uint256" },
              { internalType: "uint256", name: "liquidity", type: "uint256" },
            ],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "factory",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountOut", type: "uint256" },
              { internalType: "uint256", name: "reserveIn", type: "uint256" },
              { internalType: "uint256", name: "reserveOut", type: "uint256" },
            ],
            name: "getAmountIn",
            outputs: [
              { internalType: "uint256", name: "amountIn", type: "uint256" },
            ],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountIn", type: "uint256" },
              { internalType: "uint256", name: "reserveIn", type: "uint256" },
              { internalType: "uint256", name: "reserveOut", type: "uint256" },
            ],
            name: "getAmountOut",
            outputs: [
              { internalType: "uint256", name: "amountOut", type: "uint256" },
            ],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountOut", type: "uint256" },
              { internalType: "address[]", name: "path", type: "address[]" },
            ],
            name: "getAmountsIn",
            outputs: [
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountIn", type: "uint256" },
              { internalType: "address[]", name: "path", type: "address[]" },
            ],
            name: "getAmountsOut",
            outputs: [
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "feeBasisPoints_",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "feeRecipient_",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256",
              },
              { internalType: "address[]", name: "path", type: "address[]" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "mdSwapExactETHForTokensSupportingFeeOnTransferTokens",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "feeBasisPoints_",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "feeRecipient_",
                type: "address",
              },
              { internalType: "uint256", name: "amountIn", type: "uint256" },
              {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256",
              },
              { internalType: "address[]", name: "path", type: "address[]" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "mdSwapExactTokensForETHSupportingFeeOnTransferTokens",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountA", type: "uint256" },
              { internalType: "uint256", name: "reserveA", type: "uint256" },
              { internalType: "uint256", name: "reserveB", type: "uint256" },
            ],
            name: "quote",
            outputs: [
              { internalType: "uint256", name: "amountB", type: "uint256" },
            ],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "tokenA", type: "address" },
              { internalType: "address", name: "tokenB", type: "address" },
              { internalType: "uint256", name: "liquidity", type: "uint256" },
              { internalType: "uint256", name: "amountAMin", type: "uint256" },
              { internalType: "uint256", name: "amountBMin", type: "uint256" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "removeLiquidity",
            outputs: [
              { internalType: "uint256", name: "amountA", type: "uint256" },
              { internalType: "uint256", name: "amountB", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
              { internalType: "uint256", name: "liquidity", type: "uint256" },
              {
                internalType: "uint256",
                name: "amountTokenMin",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountETHMin",
                type: "uint256",
              },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "removeLiquidityETH",
            outputs: [
              { internalType: "uint256", name: "amountToken", type: "uint256" },
              { internalType: "uint256", name: "amountETH", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
              { internalType: "uint256", name: "liquidity", type: "uint256" },
              {
                internalType: "uint256",
                name: "amountTokenMin",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountETHMin",
                type: "uint256",
              },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "removeLiquidityETHSupportingFeeOnTransferTokens",
            outputs: [
              { internalType: "uint256", name: "amountETH", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
              { internalType: "uint256", name: "liquidity", type: "uint256" },
              {
                internalType: "uint256",
                name: "amountTokenMin",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountETHMin",
                type: "uint256",
              },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
              { internalType: "bool", name: "approveMax", type: "bool" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "removeLiquidityETHWithPermit",
            outputs: [
              { internalType: "uint256", name: "amountToken", type: "uint256" },
              { internalType: "uint256", name: "amountETH", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
              { internalType: "uint256", name: "liquidity", type: "uint256" },
              {
                internalType: "uint256",
                name: "amountTokenMin",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountETHMin",
                type: "uint256",
              },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
              { internalType: "bool", name: "approveMax", type: "bool" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
            outputs: [
              { internalType: "uint256", name: "amountETH", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "tokenA", type: "address" },
              { internalType: "address", name: "tokenB", type: "address" },
              { internalType: "uint256", name: "liquidity", type: "uint256" },
              { internalType: "uint256", name: "amountAMin", type: "uint256" },
              { internalType: "uint256", name: "amountBMin", type: "uint256" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
              { internalType: "bool", name: "approveMax", type: "bool" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "removeLiquidityWithPermit",
            outputs: [
              { internalType: "uint256", name: "amountA", type: "uint256" },
              { internalType: "uint256", name: "amountB", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountOut", type: "uint256" },
              { internalType: "address[]", name: "path", type: "address[]" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swapETHForExactTokens",
            outputs: [
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            ],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256",
              },
              { internalType: "address[]", name: "path", type: "address[]" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swapExactETHForTokens",
            outputs: [
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            ],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256",
              },
              { internalType: "address[]", name: "path", type: "address[]" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountIn", type: "uint256" },
              {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256",
              },
              { internalType: "address[]", name: "path", type: "address[]" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swapExactTokensForETH",
            outputs: [
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountIn", type: "uint256" },
              {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256",
              },
              { internalType: "address[]", name: "path", type: "address[]" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountIn", type: "uint256" },
              {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256",
              },
              { internalType: "address[]", name: "path", type: "address[]" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swapExactTokensForTokens",
            outputs: [
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountIn", type: "uint256" },
              {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256",
              },
              { internalType: "address[]", name: "path", type: "address[]" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountOut", type: "uint256" },
              { internalType: "uint256", name: "amountInMax", type: "uint256" },
              { internalType: "address[]", name: "path", type: "address[]" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swapTokensForExactETH",
            outputs: [
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountOut", type: "uint256" },
              { internalType: "uint256", name: "amountInMax", type: "uint256" },
              { internalType: "address[]", name: "path", type: "address[]" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swapTokensForExactTokens",
            outputs: [
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
        i = [
          {
            inputs: [
              {
                components: [
                  { internalType: "string", name: "name", type: "string" },
                  { internalType: "string", name: "symbol", type: "string" },
                  {
                    internalType: "address",
                    name: "metadropTreasury",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "initialOwner",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "uniswapV2Router",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "tokenVault",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "totalSupply",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "deploymentFee",
                    type: "uint256",
                  },
                  {
                    internalType: "address[]",
                    name: "supplyRecipients",
                    type: "address[]",
                  },
                  {
                    internalType: "uint256[]",
                    name: "supplyAmounts",
                    type: "uint256[]",
                  },
                ],
                internalType: "struct IMetadropERC20.ERC20BaseParams",
                name: "baseParams_",
                type: "tuple",
              },
              {
                components: [
                  { internalType: "address", name: "lpOwner", type: "address" },
                ],
                internalType: "struct IMetadropERC20.ERC20LiquidityParams",
                name: "liquidityParams_",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "autoBurnDurationInBlocks",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "autoBurnBasisPoints",
                    type: "uint256",
                  },
                ],
                internalType: "struct IMetadropERC20.ERC20AutoburnParams",
                name: "autoburnParams_",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "limitProtectionDurationInSeconds",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "maxTokensPerTransaction",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "maxTokensPerWallet",
                    type: "uint256",
                  },
                ],
                internalType: "struct IMetadropERC20.ERC20LimitParams",
                name: "limitParams_",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "projectBuyTaxBasisPoints",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "projectSellTaxBasisPoints",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "autoswapThresholdBasisPoints",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "metadropBuyTaxBasisPoints",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "metadropSellTaxBasisPoints",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "metadropTaxPeriodInDays",
                    type: "uint256",
                  },
                  {
                    internalType: "address",
                    name: "projectTaxRecipient",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "metadropTaxRecipient",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "metadropMinBuyTaxBasisPoints",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "metadropMinSellTaxBasisPoints",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "metadropBuyTaxProportionBasisPoints",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "metadropSellTaxProportionBasisPoints",
                    type: "uint256",
                  },
                ],
                internalType: "struct IMetadropERC20.ERC20TaxParams",
                name: "taxParams_",
                type: "tuple",
              },
            ],
            stateMutability: "payable",
            type: "constructor",
          },
          { inputs: [], name: "AmountExceedsAvailable", type: "error" },
          { inputs: [], name: "AutoswapThresholdTooLow", type: "error" },
          { inputs: [], name: "CanOnlyReduce", type: "error" },
          { inputs: [], name: "CannotPerformDuringAutoswap", type: "error" },
          { inputs: [], name: "CannotWithdrawThisToken", type: "error" },
          {
            inputs: [],
            name: "DeductionsOnBuyExceedOrEqualOneHundredPercent",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "allowance", type: "uint256" },
              { internalType: "uint256", name: "needed", type: "uint256" },
            ],
            name: "ERC20InsufficientAllowance",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "uint256", name: "balance", type: "uint256" },
              { internalType: "uint256", name: "needed", type: "uint256" },
            ],
            name: "ERC20InsufficientBalance",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "approver", type: "address" },
            ],
            name: "ERC20InvalidApprover",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "receiver", type: "address" },
            ],
            name: "ERC20InvalidReceiver",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
            ],
            name: "ERC20InvalidSender",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "ERC20InvalidSpender",
            type: "error",
          },
          { inputs: [], name: "IncorrectETHValueProvided", type: "error" },
          { inputs: [], name: "InitialLiquidityAlreadyAdded", type: "error" },
          { inputs: [], name: "InitialLiquidityNotYetAdded", type: "error" },
          { inputs: [], name: "InsufficientLockupPeriod", type: "error" },
          {
            inputs: [],
            name: "InsufficientTokensForInitialLiquidity",
            type: "error",
          },
          { inputs: [], name: "LPTokensBalanceMismatch", type: "error" },
          { inputs: [], name: "LimitCannotBeChanged", type: "error" },
          { inputs: [], name: "LimitMustBeHigherOrUnchanged", type: "error" },
          { inputs: [], name: "LimitTooHigh", type: "error" },
          {
            inputs: [],
            name: "LiquidityPoolCannotBeAddressZero",
            type: "error",
          },
          { inputs: [], name: "MaxBuysPerBlockExceeded", type: "error" },
          {
            inputs: [],
            name: "MaxTokensPerTransactionExceeded",
            type: "error",
          },
          { inputs: [], name: "MaxTokensPerWalletExceeded", type: "error" },
          { inputs: [], name: "NoETHForLiquidityPair", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "OwnableInvalidOwner",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "OwnableUnauthorizedAccount",
            type: "error",
          },
          { inputs: [], name: "PlatformFeeAlreadyDistributed", type: "error" },
          { inputs: [], name: "RecipientsAndAmountsMismatch", type: "error" },
          { inputs: [], name: "TotalSupplyNotMinted", type: "error" },
          { inputs: [], name: "TransferFailed", type: "error" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "oldThreshold",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newThreshold",
                type: "uint256",
              },
            ],
            name: "AutoswapThresholdUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "identifier",
                type: "uint256",
              },
            ],
            name: "ExternalCallError",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "tokenA",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "tokenB",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "lpToken",
                type: "uint256",
              },
            ],
            name: "InitialLiquidityAdded",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "lpTokens",
                type: "uint256",
              },
            ],
            name: "LiquidityBurned",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "lpTokens",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "lpLockupInDays",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "streamId",
                type: "uint256",
              },
            ],
            name: "LiquidityLocked",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "bool",
                name: "isLiquidityPool",
                type: "bool",
              },
            ],
            name: "LiquidityPoolAddressUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "addedPool",
                type: "address",
              },
            ],
            name: "LiquidityPoolCreated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "previousLimit",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newLimit",
                type: "uint256",
              },
            ],
            name: "MaxTokensPerTransactionLimitUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "previousLimit",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newLimit",
                type: "uint256",
              },
            ],
            name: "MaxTokensPerWalletLimitUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "oldBuyBasisPoints",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newBuyBasisPoints",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "oldSellBasisPoints",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newSellBasisPoints",
                type: "uint256",
              },
            ],
            name: "MetadropTaxBasisPointsChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [],
            name: "PlatformFeeDistributed",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "oldBuyBasisPoints",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newBuyBasisPoints",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "oldSellBasisPoints",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newSellBasisPoints",
                type: "uint256",
              },
            ],
            name: "ProjectTaxBasisPointsChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "treasury",
                type: "address",
              },
            ],
            name: "ProjectTaxRecipientUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "bool",
                name: "isTaxExempt",
                type: "bool",
              },
            ],
            name: "TaxExemptAddressUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "bool",
                name: "isUnlimited",
                type: "bool",
              },
            ],
            name: "UnlimitedAddressUpdated",
            type: "event",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "lpLockupInDays_",
                type: "uint256",
              },
              { internalType: "bool", name: "burnLPTokens_", type: "bool" },
            ],
            name: "addInitialLiquidity",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "autoBurnBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "autoBurnDurationInBlocks",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "autoswapThresholdBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount_", type: "uint256" },
            ],
            name: "burn",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from_", type: "address" },
              { internalType: "uint256", name: "amount_", type: "uint256" },
            ],
            name: "burnFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "burnLPTokens",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "distributePlatformFee",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "fundedBlock",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "fundedDate",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getMetadropBuyTaxBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getMetadropSellTaxBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "initialLiquidityAdded",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "isLiquidityPool",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "isTaxExempt",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "isUnlimited",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "limitProtectionDurationInSeconds",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "limitsEnforced",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "lpLockupInDays",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "lpOwner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "lpSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "maxTokensPerTransaction",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "maxTokensPerWallet",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "metadropBuyTaxBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "metadropBuyTaxProportionBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "metadropMinBuyTaxBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "metadropMinSellTaxBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "metadropSellTaxBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "metadropSellTaxProportionBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "metadropTaxPendingSwap",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "metadropTaxPeriodInDays",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "metadropTaxRecipient",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "metadropTreasury",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "platformFeeDistributed",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "projectBuyTaxBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "projectSellTaxBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "projectTaxPendingSwap",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "projectTaxRecipient",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "autoswapThresholdBasisPoints_",
                type: "uint256",
              },
            ],
            name: "setAutoswapThresholdBasisPoints",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "address_", type: "address" },
              { internalType: "bool", name: "isLiquidityPool_", type: "bool" },
            ],
            name: "setIsLiquidityPool",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "address_", type: "address" },
              { internalType: "bool", name: "isTaxExempt_", type: "bool" },
            ],
            name: "setIsTaxExempt",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "address_", type: "address" },
              { internalType: "bool", name: "isUnlimited_", type: "bool" },
            ],
            name: "setIsUnlimited",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "newMaxTokensPerTransaction_",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "newMaxTokensPerWallet_",
                type: "uint256",
              },
            ],
            name: "setLimits",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "newProjectBuyTaxBasisPoints_",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "newProjectSellTaxBasisPoints_",
                type: "uint256",
              },
            ],
            name: "setProjectTaxRates",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "projectTaxRecipient_",
                type: "address",
              },
            ],
            name: "setProjectTaxRecipient",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "tokenVault",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalBuyTaxBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSellTaxBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalTaxPendingSwap",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "uniswapV2Pair",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "uniswapV2Router",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "x_META_ID_HASH",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
        b = [
          {
            inputs: [
              {
                components: [
                  { internalType: "string", name: "name", type: "string" },
                  { internalType: "string", name: "symbol", type: "string" },
                  {
                    internalType: "address",
                    name: "metadropTreasury",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "initialOwner",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "uniswapV2Router",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "tokenVault",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "totalSupply",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "deploymentFee",
                    type: "uint256",
                  },
                  {
                    internalType: "address[]",
                    name: "supplyRecipients",
                    type: "address[]",
                  },
                  {
                    internalType: "uint256[]",
                    name: "supplyAmounts",
                    type: "uint256[]",
                  },
                ],
                internalType: "struct IMetadropERC20.ERC20BaseParams",
                name: "baseParams_",
                type: "tuple",
              },
              {
                components: [
                  { internalType: "address", name: "lpOwner", type: "address" },
                ],
                internalType: "struct IMetadropERC20.ERC20LiquidityParams",
                name: "liquidityParams_",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "autoBurnDurationInBlocks",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "autoBurnBasisPoints",
                    type: "uint256",
                  },
                ],
                internalType: "struct IMetadropERC20.ERC20AutoburnParams",
                name: "autoburnParams_",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "limitProtectionDurationInSeconds",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "maxTokensPerTransaction",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "maxTokensPerWallet",
                    type: "uint256",
                  },
                ],
                internalType: "struct IMetadropERC20.ERC20LimitParams",
                name: "limitParams_",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "projectBuyTaxBasisPoints",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "projectSellTaxBasisPoints",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "autoswapThresholdBasisPoints",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "metadropBuyTaxBasisPoints",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "metadropSellTaxBasisPoints",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "metadropTaxPeriodInDays",
                    type: "uint256",
                  },
                  {
                    internalType: "address",
                    name: "projectTaxRecipient",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "metadropTaxRecipient",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "metadropMinBuyTaxBasisPoints",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "metadropMinSellTaxBasisPoints",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "metadropBuyTaxProportionBasisPoints",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "metadropSellTaxProportionBasisPoints",
                    type: "uint256",
                  },
                ],
                internalType: "struct IMetadropERC20.ERC20TaxParams",
                name: "taxParams_",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "poolType",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "poolSupply",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "poolStartDate",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "poolEndDate",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "poolVestingInSeconds",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "poolMaxETH",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "poolPerAddressMaxETH",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "poolMinETH",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "poolPerTransactionMinETH",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "poolContributionFeeBasisPoints",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "poolMaxInitialBuy",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "poolMaxInitialLiquidity",
                    type: "uint256",
                  },
                  {
                    internalType: "address",
                    name: "poolFeeRecipient",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "poolOwner",
                    type: "address",
                  },
                ],
                internalType:
                  "struct MetadropERC20FairLaunchAdapter.ERC20PoolParameters",
                name: "poolParameters_",
                type: "tuple",
              },
              {
                internalType: "address",
                name: "poolFactory_",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "lpLockupInDays_",
                type: "uint256",
              },
            ],
            stateMutability: "payable",
            type: "constructor",
          },
          { inputs: [], name: "AmountExceedsAvailable", type: "error" },
          { inputs: [], name: "AutoswapThresholdTooLow", type: "error" },
          { inputs: [], name: "CanOnlyReduce", type: "error" },
          { inputs: [], name: "CannotPerformDuringAutoswap", type: "error" },
          { inputs: [], name: "CannotWithdrawThisToken", type: "error" },
          {
            inputs: [],
            name: "DeductionsOnBuyExceedOrEqualOneHundredPercent",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "allowance", type: "uint256" },
              { internalType: "uint256", name: "needed", type: "uint256" },
            ],
            name: "ERC20InsufficientAllowance",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "uint256", name: "balance", type: "uint256" },
              { internalType: "uint256", name: "needed", type: "uint256" },
            ],
            name: "ERC20InsufficientBalance",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "approver", type: "address" },
            ],
            name: "ERC20InvalidApprover",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "receiver", type: "address" },
            ],
            name: "ERC20InvalidReceiver",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
            ],
            name: "ERC20InvalidSender",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "ERC20InvalidSpender",
            type: "error",
          },
          { inputs: [], name: "IncorrectETHValueProvided", type: "error" },
          { inputs: [], name: "InitialLiquidityAlreadyAdded", type: "error" },
          { inputs: [], name: "InitialLiquidityNotYetAdded", type: "error" },
          { inputs: [], name: "InsufficientLockupPeriod", type: "error" },
          {
            inputs: [],
            name: "InsufficientTokensForInitialLiquidity",
            type: "error",
          },
          { inputs: [], name: "LPTokensBalanceMismatch", type: "error" },
          { inputs: [], name: "LimitCannotBeChanged", type: "error" },
          { inputs: [], name: "LimitMustBeHigherOrUnchanged", type: "error" },
          { inputs: [], name: "LimitTooHigh", type: "error" },
          {
            inputs: [],
            name: "LiquidityMustBeAddedByFairLaunchPool",
            type: "error",
          },
          {
            inputs: [],
            name: "LiquidityPoolCannotBeAddressZero",
            type: "error",
          },
          { inputs: [], name: "MaxBuysPerBlockExceeded", type: "error" },
          {
            inputs: [],
            name: "MaxTokensPerTransactionExceeded",
            type: "error",
          },
          { inputs: [], name: "MaxTokensPerWalletExceeded", type: "error" },
          { inputs: [], name: "NoETHForLiquidityPair", type: "error" },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "OwnableInvalidOwner",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "OwnableUnauthorizedAccount",
            type: "error",
          },
          { inputs: [], name: "PlatformFeeAlreadyDistributed", type: "error" },
          { inputs: [], name: "RecipientsAndAmountsMismatch", type: "error" },
          { inputs: [], name: "TotalSupplyNotMinted", type: "error" },
          { inputs: [], name: "TransferFailed", type: "error" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "oldThreshold",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newThreshold",
                type: "uint256",
              },
            ],
            name: "AutoswapThresholdUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "identifier",
                type: "uint256",
              },
            ],
            name: "ExternalCallError",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "tokenA",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "tokenB",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "lpToken",
                type: "uint256",
              },
            ],
            name: "InitialLiquidityAdded",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "lpTokens",
                type: "uint256",
              },
            ],
            name: "LiquidityBurned",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "lpTokens",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "lpLockupInDays",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "streamId",
                type: "uint256",
              },
            ],
            name: "LiquidityLocked",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "bool",
                name: "isLiquidityPool",
                type: "bool",
              },
            ],
            name: "LiquidityPoolAddressUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "addedPool",
                type: "address",
              },
            ],
            name: "LiquidityPoolCreated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "previousLimit",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newLimit",
                type: "uint256",
              },
            ],
            name: "MaxTokensPerTransactionLimitUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "previousLimit",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newLimit",
                type: "uint256",
              },
            ],
            name: "MaxTokensPerWalletLimitUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "oldBuyBasisPoints",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newBuyBasisPoints",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "oldSellBasisPoints",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newSellBasisPoints",
                type: "uint256",
              },
            ],
            name: "MetadropTaxBasisPointsChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [],
            name: "PlatformFeeDistributed",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "oldBuyBasisPoints",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newBuyBasisPoints",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "oldSellBasisPoints",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "newSellBasisPoints",
                type: "uint256",
              },
            ],
            name: "ProjectTaxBasisPointsChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "treasury",
                type: "address",
              },
            ],
            name: "ProjectTaxRecipientUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "bool",
                name: "isTaxExempt",
                type: "bool",
              },
            ],
            name: "TaxExemptAddressUpdated",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "bool",
                name: "isUnlimited",
                type: "bool",
              },
            ],
            name: "UnlimitedAddressUpdated",
            type: "event",
          },
          {
            inputs: [
              { internalType: "uint256", name: "", type: "uint256" },
              { internalType: "uint256", name: "", type: "uint256" },
              { internalType: "bool", name: "", type: "bool" },
            ],
            name: "addInitialLiquidity",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "", type: "uint256" },
              { internalType: "bool", name: "", type: "bool" },
            ],
            name: "addInitialLiquidity",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "autoBurnBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "autoBurnDurationInBlocks",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "autoswapThresholdBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount_", type: "uint256" },
            ],
            name: "burn",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from_", type: "address" },
              { internalType: "uint256", name: "amount_", type: "uint256" },
            ],
            name: "burnFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "burnLPTokens",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "distributePlatformFee",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "fairLaunch",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "fundedBlock",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "fundedDate",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getMetadropBuyTaxBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getMetadropSellTaxBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "initialLiquidityAdded",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "isLiquidityPool",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "isTaxExempt",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "isUnlimited",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "limitProtectionDurationInSeconds",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "limitsEnforced",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "lpLockupInDays",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "lpOwner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "lpSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "maxTokensPerTransaction",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "maxTokensPerWallet",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "metadropBuyTaxBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "metadropBuyTaxProportionBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "metadropMinBuyTaxBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "metadropMinSellTaxBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "metadropSellTaxBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "metadropSellTaxProportionBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "metadropTaxPendingSwap",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "metadropTaxPeriodInDays",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "metadropTaxRecipient",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "metadropTreasury",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "platformFeeDistributed",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "projectBuyTaxBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "projectSellTaxBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "projectTaxPendingSwap",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "projectTaxRecipient",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "autoswapThresholdBasisPoints_",
                type: "uint256",
              },
            ],
            name: "setAutoswapThresholdBasisPoints",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "address_", type: "address" },
              { internalType: "bool", name: "isLiquidityPool_", type: "bool" },
            ],
            name: "setIsLiquidityPool",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "address_", type: "address" },
              { internalType: "bool", name: "isTaxExempt_", type: "bool" },
            ],
            name: "setIsTaxExempt",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "address_", type: "address" },
              { internalType: "bool", name: "isUnlimited_", type: "bool" },
            ],
            name: "setIsUnlimited",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "newMaxTokensPerTransaction_",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "newMaxTokensPerWallet_",
                type: "uint256",
              },
            ],
            name: "setLimits",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "newProjectBuyTaxBasisPoints_",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "newProjectSellTaxBasisPoints_",
                type: "uint256",
              },
            ],
            name: "setProjectTaxRates",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "projectTaxRecipient_",
                type: "address",
              },
            ],
            name: "setProjectTaxRecipient",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "tokenVault",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalBuyTaxBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSellTaxBasisPoints",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalTaxPendingSwap",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "uniswapV2Pair",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "uniswapV2Router",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "x_META_ID_HASH",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
        p =
          "0x610280604052604051620059d8380380620059d8833981016040819052620000279162001a5a565b606085015185516020870151600362000041838262001c82565b50600462000050828262001c82565b5050506001600160a01b0381166200008357604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b6200008e8162000368565b5060e08501516080819052620000a490620003ba565b60808501516001600160a01b039081166102205260a0808701518216610200526040870151909116905260c0850151610100860151610120870151620000ec929190620003de565b5082516102405260208301516102605280511580156200010e57506020810151155b80156200011d57506060810151155b80156200012c57506080810151155b156200013e5760006101205262000235565b6001610120526020830151606082015182516127109291620001609162001d64565b6200016c919062001d64565b106200018b5760405163e410db6160e01b815260040160405180910390fd5b8051600a556020810151600b556060810151600c556080810151600d55604081015160011115620001cf57604051630310435760e31b815260040160405180910390fd5b604081015160105560a081015161014090815260e08201516001600160a01b039081166101e05260c0830151601180546001600160a01b03191691909216179055810151610160908152810151610180526101008101516101a0526101208101516101c0525b83516001600160a01b031660c0528151610100526040820151600e556020820151600f81905560001914806200026e5750600019600e54145b156200028d576040516342027b1360e11b815260040160405180910390fd5b306000908152601760205260408082208054600160ff1991821681179092557fd840e16649f6b9a295d95876f4633d3a6b10b55e8162971cf78afd886d5ec89b80548216831790557f43fedf50e12e5c047fbe3576d03ab50250348e9a6030f531ab6d4ce10f5b03038054821683179055610220516001600160a01b039081168552838520805483168417905561020051168452919092208054909116909117905560c08501516200033e60025490565b146200035d576040516307a0bc6160e11b815260040160405180910390fd5b505050505062001eb6565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b803414620003db5760405163d676ec1760e01b815260040160405180910390fd5b50565b6000815183511462000403576040516366d5293b60e11b815260040160405180910390fd5b506000805b8351811015620004eb576001601760008684815181106200042d576200042d62001d7a565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff021916908315150217905550620004b684828151811062000485576200048562001d7a565b6020026020010151848381518110620004a257620004a262001d7a565b60200260200101516200050a60201b60201c565b828181518110620004cb57620004cb62001d7a565b602002602001015182620004e0919062001d64565b915060010162000408565b506200050330620004fd838762001d90565b6200050a565b9392505050565b6001600160a01b038216620005365760405163ec442f0560e01b8152600060048201526024016200007a565b620005446000838362000548565b5050565b8062000555600854151590565b620005b3576200056462000662565b6001600160a01b0316836001600160a01b03161480156200058e57506001600160a01b0384163014155b15620005ad57604051630d970b4560e21b815260040160405180910390fd5b6200064f565b620005c08484846200082b565b620005cc848462000910565b620005d784620009e7565b6000620005e684868562000a75565b905080156200060a57620005fb818362001d90565b91506200060a85308362000ccb565b60006200061986868662000dfe565b905080156200063f576200062e818462001d90565b92506200063f8661dead8362000ccb565b6200064c86868562000f03565b50505b6200065c84848362000ccb565b50505050565b600080610220516001600160a01b031663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa158015620006a7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620006cd919062001da6565b90506000806001600160a01b0383163010620006eb578230620006ee565b30835b91509150610220516001600160a01b031663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000734573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200075a919062001da6565b6040516001600160601b0319606085811b8216602084015284901b166034820152604801604051602081830303815290604052805190602001206040516020016200080a9291907fff00000000000000000000000000000000000000000000000000000000000000815260609290921b6001600160601b031916600183015260158201527f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f603582015260550190565b6040516020818303038152906040528051906020012060001c935050505090565b6200083562000fbf565b8015620008435750600f5415155b8015620008d657506001600160a01b03831660009081526016602052604090205460ff1680156200088d57506001600160a01b03821660009081526017602052604090205460ff16155b80620008d657506001600160a01b03821660009081526016602052604090205460ff168015620008d657506001600160a01b03831660009081526017602052604090205460ff16155b156200090b57600f54620008ea906200101b565b8111156200090b57604051637f4b310960e01b815260040160405180910390fd5b505050565b6101205115620005445760006200092662001034565b60105460025491925082916000916127109162000944919062001dc4565b62000950919062001dde565b905062000960858584846200104d565b15620009e0576006805460ff60b01b1916600160b01b1790554360009081526014602052604081208054600192906200099b90849062001d64565b90915550620009ae905060148262001dc4565b821115620009c657620009c360148262001dc4565b91505b620009d28284620010f9565b6006805460ff60b01b191690555b5050505050565b6001600160a01b03811660009081526016602052604090205460ff1615620003db5732600090815260156020908152604080832043845290915290205460011162000a45576040516301ae70bf60e01b815260040160405180910390fd5b326000908152601560209081526040808320438452909152812080549162000a6d8362001e01565b919050555050565b600061012051801562000a925750600654600160b01b900460ff16155b1562000503576001600160a01b03841660009081526016602052604090205460ff16801562000aca5750600062000ac862001395565b115b801562000af057506001600160a01b03831660009081526018602052604090205460ff16155b1562000bb157600b541562000b4c576000612710600b548462000b14919062001dc4565b62000b20919062001dde565b9050806012600082825462000b36919062001d64565b9091555062000b489050818362001d64565b9150505b600062000b58620013b0565b9050801562000baa57600061271062000b72838662001dc4565b62000b7e919062001dde565b9050806013600082825462000b94919062001d64565b9091555062000ba69050818462001d64565b9250505b5062000503565b6001600160a01b03831660009081526016602052604090205460ff16801562000be35750600062000be1620013cf565b115b801562000c0957506001600160a01b03841660009081526018602052604090205460ff16155b156200050357600a541562000c65576000612710600a548462000c2d919062001dc4565b62000c39919062001dde565b9050806012600082825462000c4f919062001d64565b9091555062000c619050818362001d64565b9150505b600062000c71620013ea565b9050801562000cc357600061271062000c8b838662001dc4565b62000c97919062001dde565b9050806013600082825462000cad919062001d64565b9091555062000cbf9050818462001d64565b9250505b509392505050565b6001600160a01b03831662000cfa57806002600082825462000cee919062001d64565b9091555062000d6e9050565b6001600160a01b0383166000908152602081905260409020548181101562000d4f5760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016200007a565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821662000d8c5760028054829003905562000dab565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000df191815260200190565b60405180910390a3505050565b60006102405160001415801562000e1757506102605115155b801562000e2e5750600654600160b01b900460ff16155b801562000e5357506001600160a01b03841660009081526016602052604090205460ff165b801562000e7957506001600160a01b03831660009081526018602052604090205460ff16155b15620005035760006009544362000e91919062001d90565b90506102405181101562000cc3576000816102405162000eb2919062001d90565b90506000610240516102605162000eca919062001dde565b9050600062000eda828462001dc4565b905061271062000eeb828862001dc4565b62000ef7919062001dde565b98975050505050505050565b62000f0d62000fbf565b801562000f1b5750600e5415155b801562000f4157506001600160a01b03821660009081526017602052604090205460ff16155b801562000f6657506001600160a01b03831660009081526016602052604090205460ff165b156200090b57600e5462000f7a906200101b565b6001600160a01b03831660009081526020819052604090205462000f9f908362001d64565b11156200090b57604051633b016a6d60e11b815260040160405180910390fd5b60008062000fd56005546001600160a01b031690565b6001600160a01b031614801562000ffd57506101005160085462000ffa919062001d64565b42115b80620010095750600854155b15620010155750600090565b50600190565b60006200102e64174876e8008362001d64565b92915050565b600060135460125462001048919062001d64565b905090565b60008183101580156200106a5750600654600160b01b900460ff16155b80156200109057506001600160a01b03851660009081526016602052604090205460ff16155b8015620010b25750610220516001600160a01b0316856001600160a01b031614155b8015620010d45750610220516001600160a01b0316846001600160a01b031614155b8015620010f05750436000908152601460205260409020546001115b95945050505050565b60408051600280825260608201835247926000929190602083019080368337019050509050308160008151811062001135576200113562001d7a565b60200260200101906001600160a01b031690816001600160a01b031681525050610220516001600160a01b031663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa15801562001197573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620011bd919062001da6565b81600181518110620011d357620011d362001d7a565b6001600160a01b039283166020918202929092010152610220511663791ac9478560008430620012064261025862001d64565b6040518663ffffffff1660e01b81526004016200122895949392919062001e1d565b600060405180830381600087803b1580156200124357600080fd5b505af192505050801562001255575060015b620012835760405160058152600080516020620059b88339815191529060200160405180910390a16200065c565b47600062001292848362001d90565b905060008560125483620012a7919062001dc4565b620012b3919062001dde565b905060008660135484620012c8919062001dc4565b620012d4919062001dde565b905086881015620013465760008789601254620012f2919062001dc4565b620012fe919062001dde565b9050806012600082825462001314919062001d90565b90915550620013269050818a62001d90565b6013600082825462001339919062001d90565b9091555062001351915050565b600060138190556012555b8115620013725760115462001372906001600160a01b031683600062001409565b80156200138b576101e0516200138b9082600162001409565b5050505050505050565b6000620013a1620013b0565b600b5462001048919062001d64565b6000620013bc6200162b565b15620013c85750600090565b50600d5490565b6000620013db620013ea565b600a5462001048919062001d64565b6000620013f66200162b565b15620014025750600090565b50600c5490565b6000610220516001600160a01b031663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200144d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001473919062001da6565b905060005a61c350116200148a5761c3506200148c565b5a5b90506000856001600160a01b0316858390604051600060405180830381858888f193505050503d8060008114620014e0576040519150601f19603f3d011682016040523d82523d6000602084013e620014e5565b606091505b50509050806200162357826001600160a01b031663d0e30db0866040518263ffffffff1660e01b81526004016000604051808303818588803b1580156200152b57600080fd5b505af1935050505080156200153e575060015b6200158057600080516020620059b8833981519152846200156157600262001564565b60045b60405160ff90911681526020015b60405180910390a162001623565b60405163a9059cbb60e01b81526001600160a01b0387811660048301526024820187905284169063a9059cbb906044016020604051808303816000875af1925050508015620015ee575060408051601f3d908101601f19168201909252620015eb9181019062001e92565b60015b6200162157600080516020620059b8833981519152846200161157600162001564565b6040516003815260200162001572565b505b505050505050565b6000610140516201518062001641919062001dc4565b60085462001650919062001d64565b4211905090565b634e487b7160e01b600052604160045260246000fd5b60405161018081016001600160401b038111828210171562001693576200169362001657565b60405290565b60405161014081016001600160401b038111828210171562001693576200169362001657565b604051601f8201601f191681016001600160401b0381118282101715620016ea57620016ea62001657565b604052919050565b600082601f8301126200170457600080fd5b81516001600160401b0381111562001720576200172062001657565b602062001736601f8301601f19168201620016bf565b82815285828487010111156200174b57600080fd5b60005b838110156200176b5785810183015182820184015282016200174e565b506000928101909101919091529392505050565b80516001600160a01b03811681146200179757600080fd5b919050565b60006001600160401b03821115620017b857620017b862001657565b5060051b60200190565b600082601f830112620017d457600080fd5b81516020620017ed620017e7836200179c565b620016bf565b8083825260208201915060208460051b8701019350868411156200181057600080fd5b602086015b84811015620018375762001829816200177f565b835291830191830162001815565b509695505050505050565b600082601f8301126200185457600080fd5b8151602062001867620017e7836200179c565b8083825260208201915060208460051b8701019350868411156200188a57600080fd5b602086015b848110156200183757805183529183019183016200188f565b600060208284031215620018bb57600080fd5b604051602081016001600160401b0381118282101715620018e057620018e062001657565b604052905080620018f1836200177f565b905292915050565b6000604082840312156200190c57600080fd5b604080519081016001600160401b038111828210171562001931576200193162001657565b604052825181526020928301519281019290925250919050565b6000606082840312156200195e57600080fd5b604051606081016001600160401b038111828210171562001983576200198362001657565b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101808284031215620019be57600080fd5b620019c86200166d565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015262001a0e60c083016200177f565b60c082015262001a2160e083016200177f565b60e08201526101008281015190820152610120808301519082015261014080830151908201526101609182015191810191909152919050565b6000806000806000610260868803121562001a7457600080fd5b85516001600160401b038082111562001a8c57600080fd5b90870190610140828a03121562001aa257600080fd5b62001aac62001699565b82518281111562001abc57600080fd5b62001aca8b828601620016f2565b82525060208301518281111562001ae057600080fd5b62001aee8b828601620016f2565b60208301525062001b02604084016200177f565b604082015262001b15606084016200177f565b606082015262001b28608084016200177f565b608082015262001b3b60a084016200177f565b60a082015260c083015160c082015260e083015160e0820152610100808401518381111562001b6957600080fd5b62001b778c828701620017c2565b828401525050610120808401518381111562001b9257600080fd5b62001ba08c82870162001842565b82840152505080975050505062001bbb8760208801620018a8565b935062001bcc8760408801620018f9565b925062001bdd87608088016200194b565b915062001bee8760e08801620019aa565b90509295509295909350565b600181811c9082168062001c0f57607f821691505b60208210810362001c3057634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200090b576000816000526020600020601f850160051c8101602086101562001c615750805b601f850160051c820191505b81811015620016235782815560010162001c6d565b81516001600160401b0381111562001c9e5762001c9e62001657565b62001cb68162001caf845462001bfa565b8462001c36565b602080601f83116001811462001cee576000841562001cd55750858301515b600019600386901b1c1916600185901b17855562001623565b600085815260208120601f198616915b8281101562001d1f5788860151825594840194600190910190840162001cfe565b508582101562001d3e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b808201808211156200102e576200102e62001d4e565b634e487b7160e01b600052603260045260246000fd5b818103818111156200102e576200102e62001d4e565b60006020828403121562001db957600080fd5b62000503826200177f565b80820281158282048414176200102e576200102e62001d4e565b60008262001dfc57634e487b7160e01b600052601260045260246000fd5b500490565b60006001820162001e165762001e1662001d4e565b5060010190565b600060a08201878352602087602085015260a0604085015281875180845260c08601915060208901935060005b8181101562001e715784516001600160a01b03168352938301939183019160010162001e4a565b50506001600160a01b03969096166060850152505050608001529392505050565b60006020828403121562001ea557600080fd5b815180151581146200050357600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051613964620020546000396000818161067401528181612b080152612c1e01526000818161053a01528181612ade01528181612ba201528181612bd00152612bfd0152600081816104c101528181611a3c01528181611a6a01528181611b6101528181611bf201528181611d63015281816122e30152818161238801528181612efa01528181612f3801528181612fec01528181613097015261326b01526000818161079d015281816121a001526122590152600081816107690152613236015260008181610a7e0152818161168601526116ae015260008181610ad3015281816115e001526116080152600081816105c2015261165301526000818161095101526115ad015260008181610a3701526119590152600081816125d1015261275d0152600081816108740152610dc0015260006106a8015260008181610c3d015261222d01526000818161045f01526113240152600061134701526139646000f3fe6080604052600436106103c75760003560e01c806375220b9f116101f2578063b92306111161010d578063ea8b2424116100a0578063f444324b1161006f578063f444324b14610c2b578063f85aff9414610c5f578063fe4522b014610c75578063fe6a0bbf14610c9557600080fd5b8063ea8b242414610bc0578063eb95ca7014610be0578063eeae0f9714610bf6578063f2fde38b14610c0b57600080fd5b8063dd604f1e116100dc578063dd604f1e14610b15578063dd62ed3e14610b2a578063e3ab3b1414610b70578063e85455d714610b9057600080fd5b8063b923061114610a6c578063bb88603c14610aa0578063be841baa14610ac1578063c4590d3f14610af557600080fd5b8063a35b4cef11610185578063b0d7509711610154578063b0d75097146109f9578063b2c5c9eb14610a0f578063b2e9cb3814610a25578063b6585dc614610a5957600080fd5b8063a35b4cef14610973578063a45cae02146109a3578063a9059cbb146109b9578063ad5f5d80146109d957600080fd5b80638da5cb5b116101c15780638da5cb5b146108ec57806395d89b411461090a5780639808751d1461091f578063a0aaf2481461093f57600080fd5b806375220b9f14610862578063780850b91461089657806379cc6790146108b65780638c804321146108d657600080fd5b8063374a4a70116102e25780635b8e7979116102755780636edb9a91116102445780636edb9a91146107ea57806370a0823114610800578063715018a61461083657806373bd699a1461084b57600080fd5b80635b8e7979146107575780635bc789d91461078b57806360f47d5f146107bf57806363854565146107d557600080fd5b806342966c68116102b157806342966c68146106df578063469132ce1461070157806349bd5a5e146107175780635b4f638d1461073757600080fd5b8063374a4a7014610641578063390a168f146106625780633b22fc03146106965780633e4e9e5d146106ca57600080fd5b806318f490cf1161035a57806329c6b3481161032957806329c6b348146105e4578063313ce567146105f9578063320589991461061557806336520ace1461062b57600080fd5b806318f490cf146105285780631b5e609b1461055c57806323b872dd1461059057806325100bd4146105b057600080fd5b806310b828c91161039657806310b828c9146104995780631694505e146104af57806316c2be6b146104e357806318160ddd1461051357600080fd5b8063038272b6146103d357806306fdde03146103fb578063095ea7b31461041d5780630e03f4141461044d57600080fd5b366103ce57005b600080fd5b3480156103df57600080fd5b506103e8610caa565b6040519081526020015b60405180910390f35b34801561040757600080fd5b50610410610cc6565b6040516103f291906134b3565b34801561042957600080fd5b5061043d610438366004613517565b610d58565b60405190151581526020016103f2565b34801561045957600080fd5b506104817f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016103f2565b3480156104a557600080fd5b506103e860085481565b3480156104bb57600080fd5b506104817f000000000000000000000000000000000000000000000000000000000000000081565b3480156104ef57600080fd5b5061043d6104fe366004613543565b60186020526000908152604090205460ff1681565b34801561051f57600080fd5b506002546103e8565b34801561053457600080fd5b506103e87f000000000000000000000000000000000000000000000000000000000000000081565b34801561056857600080fd5b506103e87f4d45544144524f504d45544144524f504d45544144524f504d45544144524f5081565b34801561059c57600080fd5b5061043d6105ab366004613560565b610d72565b3480156105bc57600080fd5b506103e87f000000000000000000000000000000000000000000000000000000000000000081565b3480156105f057600080fd5b5061043d610d98565b34801561060557600080fd5b50604051601281526020016103f2565b34801561062157600080fd5b506103e860105481565b34801561063757600080fd5b506103e8600d5481565b34801561064d57600080fd5b5060065461043d90600160a01b900460ff1681565b34801561066e57600080fd5b506103e87f000000000000000000000000000000000000000000000000000000000000000081565b3480156106a257600080fd5b506103e87f000000000000000000000000000000000000000000000000000000000000000081565b3480156106d657600080fd5b506103e8610e0b565b3480156106eb57600080fd5b506106ff6106fa3660046135a1565b610e1d565b005b34801561070d57600080fd5b506103e8600e5481565b34801561072357600080fd5b50600654610481906001600160a01b031681565b34801561074357600080fd5b506106ff6107523660046135c8565b610e2a565b34801561076357600080fd5b506104817f000000000000000000000000000000000000000000000000000000000000000081565b34801561079757600080fd5b506104817f000000000000000000000000000000000000000000000000000000000000000081565b3480156107cb57600080fd5b506103e860095481565b3480156107e157600080fd5b506103e8610e96565b3480156107f657600080fd5b506103e860135481565b34801561080c57600080fd5b506103e861081b366004613543565b6001600160a01b031660009081526020819052604090205490565b34801561084257600080fd5b506106ff610eb2565b34801561085757600080fd5b50600854151561043d565b34801561086e57600080fd5b506103e87f000000000000000000000000000000000000000000000000000000000000000081565b3480156108a257600080fd5b506106ff6108b13660046135c8565b610ec6565b3480156108c257600080fd5b506106ff6108d1366004613517565b610f2a565b3480156108e257600080fd5b506103e8600c5481565b3480156108f857600080fd5b506005546001600160a01b0316610481565b34801561091657600080fd5b50610410610f43565b34801561092b57600080fd5b506106ff61093a366004613543565b610f52565b34801561094b57600080fd5b506103e87f000000000000000000000000000000000000000000000000000000000000000081565b34801561097f57600080fd5b5061043d61098e366004613543565b60176020526000908152604090205460ff1681565b3480156109af57600080fd5b506103e8600a5481565b3480156109c557600080fd5b5061043d6109d4366004613517565b610fbc565b3480156109e557600080fd5b506106ff6109f43660046135c8565b610fca565b348015610a0557600080fd5b506103e860125481565b348015610a1b57600080fd5b506103e8600b5481565b348015610a3157600080fd5b506103e87f000000000000000000000000000000000000000000000000000000000000000081565b6106ff610a67366004613601565b61106e565b348015610a7857600080fd5b506103e87f000000000000000000000000000000000000000000000000000000000000000081565b348015610aac57600080fd5b5060065461043d90600160a81b900460ff1681565b348015610acd57600080fd5b506103e87f000000000000000000000000000000000000000000000000000000000000000081565b348015610b0157600080fd5b506106ff610b10366004613626565b611139565b348015610b2157600080fd5b506106ff6112d5565b348015610b3657600080fd5b506103e8610b45366004613648565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b348015610b7c57600080fd5b506106ff610b8b3660046135a1565b61143d565b348015610b9c57600080fd5b5061043d610bab366004613543565b60166020526000908152604090205460ff1681565b348015610bcc57600080fd5b50601154610481906001600160a01b031681565b348015610bec57600080fd5b506103e860075481565b348015610c0257600080fd5b506103e86114c0565b348015610c1757600080fd5b506106ff610c26366004613543565b6114d7565b348015610c3757600080fd5b506104817f000000000000000000000000000000000000000000000000000000000000000081565b348015610c6b57600080fd5b506103e8600f5481565b348015610c8157600080fd5b506106ff610c90366004613626565b611530565b348015610ca157600080fd5b506103e8611792565b6000610cb4611792565b600b54610cc1919061368c565b905090565b606060038054610cd59061369f565b80601f0160208091040260200160405190810160405280929190818152602001828054610d019061369f565b8015610d4e5780601f10610d2357610100808354040283529160200191610d4e565b820191906000526020600020905b815481529060010190602001808311610d3157829003601f168201915b5050505050905090565b600033610d668185856117ae565b60019150505b92915050565b600033610d808582856117c0565b610d8b858585611857565b60019150505b9392505050565b600080610dad6005546001600160a01b031690565b6001600160a01b0316148015610def57507f0000000000000000000000000000000000000000000000000000000000000000600854610dec919061368c565b42115b80610dfa5750600854155b15610e055750600090565b50600190565b6000601354601254610cc1919061368c565b610e2733826118cf565b50565b610e3261190c565b6001600160a01b038216600081815260186020908152604091829020805460ff19168515159081179091558251938452908301527f306dcbe443e8f026f074a7e1e96de23ceb598ba75c3de88d8b087b84ce328bfc91015b60405180910390a15050565b6000610ea0611952565b15610eab5750600090565b50600c5490565b610eba61190c565b610ec46000611995565b565b610ece61190c565b6001600160a01b038216600081815260176020908152604091829020805460ff19168515159081179091558251938452908301527f08cb8fbd3f235844cb0931281a83bc6772ccdf59629c8920d782e44b90cd36a09101610e8a565b610f358233836117c0565b610f3f82826118cf565b5050565b606060048054610cd59061369f565b610f5a61190c565b6011805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527fa4eea51cd2f21eac6612ba054a363ae2fd59698fc258ab414313cd73f69f2b85906020015b60405180910390a150565b600033610d66818585611857565b610fd261190c565b6001600160a01b038216611012576040517fb47cdee500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b038216600081815260166020908152604091829020805460ff19168515159081179091558251938452908301527f014ddeafe46f4124c4af768b48de643f90eab06bb0cbb87a5d7ce35f91c66dea9101610e8a565b61107661190c565b346000036110b0576040517f796017ae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6006805482158015600160a81b81027fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff909316929092179092556110f45750601e82105b1561112b576040517f310795d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6007829055610f3f346119f4565b61114161190c565b600f5415801561115057508115155b1561116e5760405163c827c15f60e01b815260040160405180910390fd5b600e5415801561117d57508015155b1561119b5760405163c827c15f60e01b815260040160405180910390fd5b81158015906111ab5750600f5482105b156111c957604051635fffe54760e01b815260040160405180910390fd5b80158015906111d95750600e5481105b156111f757604051635fffe54760e01b815260040160405180910390fd5b600019821480611208575060001981145b1561123f576040517f8404f62600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600f54821461128a57600f5460408051918252602082018490527f4378b25ac563a9cfb725b694a8178c787794b33b21d51fc2437d11599ca36eb2910160405180910390a1600f8290555b600e548114610f3f57600e5460408051918252602082018390527f3c28c7b8d78a063d97428fb0828d666b45766c68f1f6703a16d1af5ed43f786f910160405180910390a1600e5550565b600654600160a01b900460ff1661140b57600680547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16600160a01b1790556040516000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016907f0000000000000000000000000000000000000000000000000000000000000000908381818185875af1925050503d806000811461139f576040519150601f19603f3d011682016040523d82523d6000602084013e6113a4565b606091505b50509050806113df576040517f90b8ec1800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f398e4c9450dda484d0641a82d59daaea35f17ee8ea3f6a2a2c3bc1461b5fc2cb90600090a150565b6040517fb615d53500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61144561190c565b60016010541015611482576040517f18821ab800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b601080549082905560408051828152602081018490527f70bb2dea47325890ad4c56e9cea510be76761453061ad71ac5525167228d04999101610e8a565b60006114ca610e96565b600a54610cc1919061368c565b6114df61190c565b6001600160a01b038116611527576040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600060048201526024015b60405180910390fd5b610e2781611995565b61153861190c565b600a54600b548184111561155f57604051637924ff4760e11b815260040160405180910390fd5b8083111561158057604051637924ff4760e11b815260040160405180910390fd5b600a849055600b839055600c54600d5460008690036115a3576000600c55611637565b60006127106115d27f0000000000000000000000000000000000000000000000000000000000000000896136d9565b6115dc91906136f0565b90507f000000000000000000000000000000000000000000000000000000000000000081101561162f577f0000000000000000000000000000000000000000000000000000000000000000600c55611635565b600c8190555b505b84600003611649576000600d556116dd565b60006127106116787f0000000000000000000000000000000000000000000000000000000000000000886136d9565b61168291906136f0565b90507f00000000000000000000000000000000000000000000000000000000000000008110156116d5577f0000000000000000000000000000000000000000000000000000000000000000600d556116db565b600d8190555b505b600c54821415806116f05750600d548114155b1561174257600c54600d54604080518581526020810193909352820183905260608201527fc62aec06e6c0bd9801f57464e310b42dd2d884cbfaf006c84a761b622aea4f089060800160405180910390a15b6040805185815260208101889052908101849052606081018690527f8da1f77a22734510b762a9625e69e737d7c0cc48984e810e5802fb341eb80a3e9060800160405180910390a1505050505050565b600061179c611952565b156117a75750600090565b50600d5490565b6117bb8383836001611eb1565b505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146118515781811015611842576040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526001600160a01b0384166004820152602481018290526044810183905260640161151e565b61185184848484036000611eb1565b50505050565b6001600160a01b03831661188157604051634b637e8f60e11b81526000600482015260240161151e565b6001600160a01b0382166118c4576040517fec442f050000000000000000000000000000000000000000000000000000000081526000600482015260240161151e565b6117bb838383611fb8565b61deac196001600160a01b038316016118ff57604051634b637e8f60e11b815261dead600482015260240161151e565b610f3f8261dead83611fb8565b6005546001600160a01b03163314610ec4576040517f118cdaa700000000000000000000000000000000000000000000000000000000815233600482015260240161151e565b60006119817f0000000000000000000000000000000000000000000000000000000000000000620151806136d9565b60085461198e919061368c565b4211905090565b600580546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60085415611a2e576040517fb1f3376700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4260085543600955611a63307f00000000000000000000000000000000000000000000000000000000000000006000196117ae565b60008060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f305d7198530611ab8306001600160a01b031660009081526020819052604090205490565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b1681526001600160a01b039092166004830152602482015260006044820181905260648201523060848201524260a482015260c40160606040518083038185885af1158015611b34573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190611b599190613712565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611bbd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611be19190613740565b6001600160a01b031663e6a43905307f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa158015611c4e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c729190613740565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381865afa158015611cd5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cf99190613740565b6006805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392831690811782556000908152601760209081526040808320805460ff199081166001908117909255945490951683526016909152902080549091169091179055611d8a307f00000000000000000000000000000000000000000000000000000000000000006000196117ae565b60408051848152602081018490529081018290527fbf59dda00152e02f20e18cab7307c8afe0714e7f69cf24a1377cbbddcb40f9bb9060600160405180910390a16006546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa158015611e2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e50919061375d565b8114611e88576040517fe150afc000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600654600160a81b900460ff1615611ea857611ea3816120c6565b611851565b6118518161216d565b6001600160a01b038416611ef4576040517fe602df050000000000000000000000000000000000000000000000000000000081526000600482015260240161151e565b6001600160a01b038316611f37576040517f94280d620000000000000000000000000000000000000000000000000000000081526000600482015260240161151e565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561185157826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051611faa91815260200190565b60405180910390a350505050565b80611fc4600854151590565b61203557611fd06122de565b6001600160a01b0316836001600160a01b0316148015611ff957506001600160a01b0384163014155b15612030576040517f365c2d1400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6120bb565b6120408484846124e2565b61204a84846125cf565b612053846126b6565b6000612060848685612759565b9050801561207f576120728183613776565b915061207f853083612997565b600061208c868686612ada565b905080156120ad5761209e8184613776565b92506120ad8661dead83612997565b6120b8868685612c75565b50505b611851848483612997565b60065460405163a9059cbb60e01b815260006004820152602481018390526001600160a01b039091169063a9059cbb906044016020604051808303816000875af1158015612118573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061213c9190613789565b506040518181527f781a9d251db551fc7922f7facbbe49bc3fd61d3e236a8dafa34afd0539ebfa7290602001610fb1565b6006546040517f095ea7b30000000000000000000000000000000000000000000000000000000081526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018490529091169063095ea7b3906044016020604051808303816000875af11580156121f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061221d9190613789565b5060065460075460009161228d917f0000000000000000000000000000000000000000000000000000000000000000916001600160a01b0316907f000000000000000000000000000000000000000000000000000000000000000090869061228890620151806136d9565b612d3e565b90507fc5ee8f43592edc71599ac13d277d2800a8c3a613a7ea15e3f8566057e1922b9e82600754620151806122c291906136d9565b6040805192835260208301919091528101839052606001610e8a565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa15801561233f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123639190613740565b90506000806001600160a01b038316301061237f578230612382565b30835b915091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa1580156123e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124089190613740565b6040516bffffffffffffffffffffffff19606085811b8216602084015284901b166034820152604801604051602081830303815290604052805190602001206040516020016124c19291907fff00000000000000000000000000000000000000000000000000000000000000815260609290921b6bffffffffffffffffffffffff1916600183015260158201527f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f603582015260550190565b6040516020818303038152906040528051906020012060001c935050505090565b6124ea610d98565b80156124f75750600f5415155b801561258657506001600160a01b03831660009081526016602052604090205460ff16801561253f57506001600160a01b03821660009081526017602052604090205460ff16155b8061258657506001600160a01b03821660009081526016602052604090205460ff16801561258657506001600160a01b03831660009081526017602052604090205460ff16155b156117bb57612596600f54612e9f565b8111156117bb576040517f7f4b310900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000015610f3f5760006125ff610e0b565b90506000819050600061271060105461261760025490565b61262191906136d9565b61262b91906136f0565b905061263985858484612eb0565b156126af576006805460ff60b01b1916600160b01b17905543600090815260146020526040812080546001929061267190849061368c565b9091555061268290506014826136d9565b821115612697576126946014826136d9565b91505b6126a18284612f91565b6006805460ff60b01b191690555b5050505050565b6001600160a01b03811660009081526016602052604090205460ff1615610e275732600090815260156020908152604080832043845290915290205460011161272b576040517f01ae70bf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3260009081526015602090815260408083204384529091528120805491612751836137a6565b919050555050565b60007f000000000000000000000000000000000000000000000000000000000000000080156127925750600654600160b01b900460ff16155b15610d91576001600160a01b03841660009081526016602052604090205460ff1680156127c6575060006127c4610caa565b115b80156127eb57506001600160a01b03831660009081526018602052604090205460ff16155b1561289657600b541561283d576000612710600b548461280b91906136d9565b61281591906136f0565b90508060126000828254612829919061368c565b909155506128399050818361368c565b9150505b6000612847611792565b9050801561289057600061271061285e83866136d9565b61286891906136f0565b9050806013600082825461287c919061368c565b9091555061288c9050818461368c565b9250505b50610d91565b6001600160a01b03831660009081526016602052604090205460ff1680156128c5575060006128c36114c0565b115b80156128ea57506001600160a01b03841660009081526018602052604090205460ff16155b15610d9157600a541561293c576000612710600a548461290a91906136d9565b61291491906136f0565b90508060126000828254612928919061368c565b909155506129389050818361368c565b9150505b6000612946610e96565b9050801561298f57600061271061295d83866136d9565b61296791906136f0565b9050806013600082825461297b919061368c565b9091555061298b9050818461368c565b9250505b509392505050565b6001600160a01b0383166129c25780600260008282546129b7919061368c565b90915550612a4d9050565b6001600160a01b03831660009081526020819052604090205481811015612a2e576040517fe450d38c0000000000000000000000000000000000000000000000000000000081526001600160a01b0385166004820152602481018290526044810183905260640161151e565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216612a6957600280548290039055612a88565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051612acd91815260200190565b60405180910390a3505050565b60007f000000000000000000000000000000000000000000000000000000000000000015801590612b2a57507f000000000000000000000000000000000000000000000000000000000000000015155b8015612b405750600654600160b01b900460ff16155b8015612b6457506001600160a01b03841660009081526016602052604090205460ff165b8015612b8957506001600160a01b03831660009081526018602052604090205460ff16155b15610d9157600060095443612b9e9190613776565b90507f000000000000000000000000000000000000000000000000000000000000000081101561298f576000612bf4827f0000000000000000000000000000000000000000000000000000000000000000613776565b90506000612c427f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006136f0565b90506000612c5082846136d9565b9050612710612c5f82886136d9565b612c6991906136f0565b98975050505050505050565b612c7d610d98565b8015612c8a5750600e5415155b8015612caf57506001600160a01b03821660009081526017602052604090205460ff16155b8015612cd357506001600160a01b03831660009081526016602052604090205460ff165b156117bb57612ce3600e54612e9f565b6001600160a01b038316600090815260208190526040902054612d06908361368c565b11156117bb576040517f7602d4da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000612da2604080516101008101825260008082526020808301829052828401829052606083018290526080830182905260a083018290528351808501855282815280820183905260c084015283518085019094528184528301529060e082015290565b3381526001600160a01b0387811660208301526fffffffffffffffffffffffffffffffff8516604080840191909152908716606083015260006080830152805180820190915280612df46001866137bf565b64ffffffffff9081168252851660209091015260c08201526040517fab167ccc0000000000000000000000000000000000000000000000000000000081526001600160a01b0386169063ab167ccc90612e519084906004016137e4565b6020604051808303816000875af1158015612e70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e94919061375d565b979650505050505050565b6000610d6c64174876e8008361368c565b6000818310158015612ecc5750600654600160b01b900460ff16155b8015612ef157506001600160a01b03851660009081526016602052604090205460ff16155b8015612f2f57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316856001600160a01b031614155b8015612f6d57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316846001600160a01b031614155b8015612f885750436000908152601460205260409020546001115b95945050505050565b604080516002808252606082018352479260009291906020830190803683370190505090503081600081518110612fca57612fca6138a5565b60200260200101906001600160a01b031690816001600160a01b0316815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa158015613048573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061306c9190613740565b8160018151811061307f5761307f6138a5565b6001600160a01b0392831660209182029290920101527f00000000000000000000000000000000000000000000000000000000000000001663791ac94785600084306130cd4261025861368c565b6040518663ffffffff1660e01b81526004016130ed9594939291906138bb565b600060405180830381600087803b15801561310757600080fd5b505af1925050508015613118575060015b61315557604051600581527f60dc41faad9fe4f70f304dcef26d96d71e98ec8e21e4a340921d94dfe46307dc9060200160405180910390a1611851565b4760006131628483613776565b90506000856012548361317591906136d9565b61317f91906136f0565b90506000866013548461319291906136d9565b61319c91906136f0565b90508688101561320257600087896012546131b791906136d9565b6131c191906136f0565b905080601260008282546131d59190613776565b909155506131e59050818a613776565b601360008282546131f69190613776565b9091555061320d915050565b600060138190556012555b811561322b5760115461322b906001600160a01b0316836000613267565b801561325d5761325d7f0000000000000000000000000000000000000000000000000000000000000000826001613267565b5050505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa1580156132c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906132eb9190613740565b905060005a61c350116133005761c350613302565b5a5b90506000856001600160a01b0316858390604051600060405180830381858888f193505050503d8060008114613354576040519150601f19603f3d011682016040523d82523d6000602084013e613359565b606091505b50509050806134ab57826001600160a01b031663d0e30db0866040518263ffffffff1660e01b81526004016000604051808303818588803b15801561339d57600080fd5b505af1935050505080156133af575060015b6133fe577f60dc41faad9fe4f70f304dcef26d96d71e98ec8e21e4a340921d94dfe46307dc846133e05760026133e3565b60045b60405160ff90911681526020015b60405180910390a16134ab565b60405163a9059cbb60e01b81526001600160a01b0387811660048301526024820187905284169063a9059cbb906044016020604051808303816000875af1925050508015613469575060408051601f3d908101601f1916820190925261346691810190613789565b60015b6134a9577f60dc41faad9fe4f70f304dcef26d96d71e98ec8e21e4a340921d94dfe46307dc8461349a5760016133e3565b604051600381526020016133f1565b505b505050505050565b60006020808352835180602085015260005b818110156134e1578581018301518582016040015282016134c5565b506000604082860101526040601f19601f8301168501019250505092915050565b6001600160a01b0381168114610e2757600080fd5b6000806040838503121561352a57600080fd5b823561353581613502565b946020939093013593505050565b60006020828403121561355557600080fd5b8135610d9181613502565b60008060006060848603121561357557600080fd5b833561358081613502565b9250602084013561359081613502565b929592945050506040919091013590565b6000602082840312156135b357600080fd5b5035919050565b8015158114610e2757600080fd5b600080604083850312156135db57600080fd5b82356135e681613502565b915060208301356135f6816135ba565b809150509250929050565b6000806040838503121561361457600080fd5b8235915060208301356135f6816135ba565b6000806040838503121561363957600080fd5b50508035926020909101359150565b6000806040838503121561365b57600080fd5b823561366681613502565b915060208301356135f681613502565b634e487b7160e01b600052601160045260246000fd5b80820180821115610d6c57610d6c613676565b600181811c908216806136b357607f821691505b6020821081036136d357634e487b7160e01b600052602260045260246000fd5b50919050565b8082028115828204841417610d6c57610d6c613676565b60008261370d57634e487b7160e01b600052601260045260246000fd5b500490565b60008060006060848603121561372757600080fd5b8351925060208401519150604084015190509250925092565b60006020828403121561375257600080fd5b8151610d9181613502565b60006020828403121561376f57600080fd5b5051919050565b81810381811115610d6c57610d6c613676565b60006020828403121561379b57600080fd5b8151610d91816135ba565b6000600182016137b8576137b8613676565b5060010190565b64ffffffffff8281168282160390808211156137dd576137dd613676565b5092915050565b6000610140820190506001600160a01b038084511683528060208501511660208401526fffffffffffffffffffffffffffffffff6040850151166040840152806060850151166060840152506080830151613843608084018215159052565b5060a083015161385760a084018215159052565b5060c083015161387e60c0840182805164ffffffffff908116835260209182015116910152565b5060e083015180516001600160a01b031661010084015260208101516101208401526137dd565b634e487b7160e01b600052603260045260246000fd5b600060a08201878352602087602085015260a0604085015281875180845260c08601915060208901935060005b8181101561390d5784516001600160a01b0316835293830193918301916001016138e8565b50506001600160a01b0396909616606085015250505060800152939250505056fea2646970667358221220aa5eb58177298ed16ab24451923cbb83e696490f4bf4f03733e1cb68a657035264736f6c6343000818003360dc41faad9fe4f70f304dcef26d96d71e98ec8e21e4a340921d94dfe46307dc",
        d =
          "0x6102a060405260405162005e1a38038062005e1a833981016040819052620000279162001c7d565b878787878784606001518560000151866020015181600390816200004c919062001ed7565b5060046200005b828262001ed7565b5050506001600160a01b0381166200008e57604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b620000998162000490565b5060e08501516080819052620000af90620004e2565b60808501516001600160a01b039081166102205260a0808701518216610200526040870151909116905260c0850151610100860151610120870151620000f792919062000506565b5082516102405260208301516102605280511580156200011957506020810151155b80156200012857506060810151155b80156200013757506080810151155b15620001495760006101205262000240565b60016101205260208301516060820151825161271092916200016b9162001fb9565b62000177919062001fb9565b10620001965760405163e410db6160e01b815260040160405180910390fd5b8051600a556020810151600b556060810151600c556080810151600d55604081015160011115620001da57604051630310435760e31b815260040160405180910390fd5b604081015160105560a081015161014090815260e08201516001600160a01b039081166101e05260c0830151601180546001600160a01b03191691909216179055810151610160908152810151610180526101008101516101a0526101208101516101c0525b83516001600160a01b031660c0528151610100526040820151600e556020820151600f8190556000191480620002795750600019600e54145b1562000298576040516342027b1360e11b815260040160405180910390fd5b306000908152601760205260408082208054600160ff1991821681179092557fd840e16649f6b9a295d95876f4633d3a6b10b55e8162971cf78afd886d5ec89b80548216831790557f43fedf50e12e5c047fbe3576d03ab50250348e9a6030f531ab6d4ce10f5b03038054821683179055610220516001600160a01b039081168552838520805483168417905561020051168452919092208054909116909117905560c08501516200034960025490565b1462000368576040516307a0bc6160e11b815260040160405180910390fd5b505050505060008860e001513462000381919062001fcf565b9050826001600160a01b0316638622a1d98286604051602001620003a6919062001fe5565b604051602081830303815290604052336040518463ffffffff1660e01b8152600401620003d59291906200209e565b60206040518083038185885af1158015620003f4573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906200041b919062002130565b6001600160a01b031661028081905260009081526017602090815260408083208054600160ff1991821681179092556018909352922080549091169091179055601e8210156200047e5760405163310795d160e01b815260040160405180910390fd5b50600755506200225695505050505050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b803411620005035760405163d676ec1760e01b815260040160405180910390fd5b50565b600081518351146200052b576040516366d5293b60e11b815260040160405180910390fd5b506000805b835181101562000613576001601760008684815181106200055557620005556200214e565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff021916908315150217905550620005de848281518110620005ad57620005ad6200214e565b6020026020010151848381518110620005ca57620005ca6200214e565b60200260200101516200063260201b60201c565b828181518110620005f357620005f36200214e565b60200260200101518262000608919062001fb9565b915060010162000530565b506200062b3062000625838762001fcf565b62000632565b9392505050565b6001600160a01b0382166200065e5760405163ec442f0560e01b81526000600482015260240162000085565b6200066c6000838362000670565b5050565b806200067d600854151590565b620006db576200068c6200078a565b6001600160a01b0316836001600160a01b0316148015620006b657506001600160a01b0384163014155b15620006d557604051630d970b4560e21b815260040160405180910390fd5b62000777565b620006e884848462000953565b620006f4848462000a38565b620006ff8462000b0f565b60006200070e84868562000b9d565b90508015620007325762000723818362001fcf565b91506200073285308362000df3565b60006200074186868662000f26565b90508015620007675762000756818462001fcf565b9250620007678661dead8362000df3565b620007748686856200102b565b50505b6200078484848362000df3565b50505050565b600080610220516001600160a01b031663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa158015620007cf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620007f5919062002130565b90506000806001600160a01b03831630106200081357823062000816565b30835b91509150610220516001600160a01b031663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200085c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000882919062002130565b6040516001600160601b0319606085811b8216602084015284901b16603482015260480160405160208183030381529060405280519060200120604051602001620009329291907fff00000000000000000000000000000000000000000000000000000000000000815260609290921b6001600160601b031916600183015260158201527f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f603582015260550190565b6040516020818303038152906040528051906020012060001c935050505090565b6200095d620010e7565b80156200096b5750600f5415155b8015620009fe57506001600160a01b03831660009081526016602052604090205460ff168015620009b557506001600160a01b03821660009081526017602052604090205460ff16155b80620009fe57506001600160a01b03821660009081526016602052604090205460ff168015620009fe57506001600160a01b03831660009081526017602052604090205460ff16155b1562000a3357600f5462000a129062001143565b81111562000a3357604051637f4b310960e01b815260040160405180910390fd5b505050565b61012051156200066c57600062000a4e6200115c565b60105460025491925082916000916127109162000a6c919062002164565b62000a7891906200217e565b905062000a888585848462001175565b1562000b08576006805460ff60b01b1916600160b01b17905543600090815260146020526040812080546001929062000ac390849062001fb9565b9091555062000ad6905060148262002164565b82111562000aee5762000aeb60148262002164565b91505b62000afa828462001221565b6006805460ff60b01b191690555b5050505050565b6001600160a01b03811660009081526016602052604090205460ff1615620005035732600090815260156020908152604080832043845290915290205460011162000b6d576040516301ae70bf60e01b815260040160405180910390fd5b326000908152601560209081526040808320438452909152812080549162000b9583620021a1565b919050555050565b600061012051801562000bba5750600654600160b01b900460ff16155b156200062b576001600160a01b03841660009081526016602052604090205460ff16801562000bf25750600062000bf0620014bd565b115b801562000c1857506001600160a01b03831660009081526018602052604090205460ff16155b1562000cd957600b541562000c74576000612710600b548462000c3c919062002164565b62000c4891906200217e565b9050806012600082825462000c5e919062001fb9565b9091555062000c709050818362001fb9565b9150505b600062000c80620014d8565b9050801562000cd257600061271062000c9a838662002164565b62000ca691906200217e565b9050806013600082825462000cbc919062001fb9565b9091555062000cce9050818462001fb9565b9250505b506200062b565b6001600160a01b03831660009081526016602052604090205460ff16801562000d0b5750600062000d09620014f7565b115b801562000d3157506001600160a01b03841660009081526018602052604090205460ff16155b156200062b57600a541562000d8d576000612710600a548462000d55919062002164565b62000d6191906200217e565b9050806012600082825462000d77919062001fb9565b9091555062000d899050818362001fb9565b9150505b600062000d9962001512565b9050801562000deb57600061271062000db3838662002164565b62000dbf91906200217e565b9050806013600082825462000dd5919062001fb9565b9091555062000de79050818462001fb9565b9250505b509392505050565b6001600160a01b03831662000e2257806002600082825462000e16919062001fb9565b9091555062000e969050565b6001600160a01b0383166000908152602081905260409020548181101562000e775760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640162000085565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821662000eb45760028054829003905562000ed3565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000f1991815260200190565b60405180910390a3505050565b60006102405160001415801562000f3f57506102605115155b801562000f565750600654600160b01b900460ff16155b801562000f7b57506001600160a01b03841660009081526016602052604090205460ff165b801562000fa157506001600160a01b03831660009081526018602052604090205460ff16155b156200062b5760006009544362000fb9919062001fcf565b90506102405181101562000deb576000816102405162000fda919062001fcf565b90506000610240516102605162000ff291906200217e565b9050600062001002828462002164565b905061271062001013828862002164565b6200101f91906200217e565b98975050505050505050565b62001035620010e7565b8015620010435750600e5415155b80156200106957506001600160a01b03821660009081526017602052604090205460ff16155b80156200108e57506001600160a01b03831660009081526016602052604090205460ff165b1562000a3357600e54620010a29062001143565b6001600160a01b038316600090815260208190526040902054620010c7908362001fb9565b111562000a3357604051633b016a6d60e11b815260040160405180910390fd5b600080620010fd6005546001600160a01b031690565b6001600160a01b03161480156200112557506101005160085462001122919062001fb9565b42115b80620011315750600854155b156200113d5750600090565b50600190565b60006200115664174876e8008362001fb9565b92915050565b600060135460125462001170919062001fb9565b905090565b6000818310158015620011925750600654600160b01b900460ff16155b8015620011b857506001600160a01b03851660009081526016602052604090205460ff16155b8015620011da5750610220516001600160a01b0316856001600160a01b031614155b8015620011fc5750610220516001600160a01b0316846001600160a01b031614155b8015620012185750436000908152601460205260409020546001115b95945050505050565b6040805160028082526060820183524792600092919060208301908036833701905050905030816000815181106200125d576200125d6200214e565b60200260200101906001600160a01b031690816001600160a01b031681525050610220516001600160a01b031663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa158015620012bf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620012e5919062002130565b81600181518110620012fb57620012fb6200214e565b6001600160a01b039283166020918202929092010152610220511663791ac94785600084306200132e4261025862001fb9565b6040518663ffffffff1660e01b815260040162001350959493929190620021bd565b600060405180830381600087803b1580156200136b57600080fd5b505af19250505080156200137d575060015b620013ab576040516005815260008051602062005dfa8339815191529060200160405180910390a162000784565b476000620013ba848362001fcf565b905060008560125483620013cf919062002164565b620013db91906200217e565b905060008660135484620013f0919062002164565b620013fc91906200217e565b9050868810156200146e57600087896012546200141a919062002164565b6200142691906200217e565b905080601260008282546200143c919062001fcf565b909155506200144e9050818a62001fcf565b6013600082825462001461919062001fcf565b9091555062001479915050565b600060138190556012555b81156200149a576011546200149a906001600160a01b031683600062001531565b8015620014b3576101e051620014b39082600162001531565b5050505050505050565b6000620014c9620014d8565b600b5462001170919062001fb9565b6000620014e462001753565b15620014f05750600090565b50600d5490565b60006200150362001512565b600a5462001170919062001fb9565b60006200151e62001753565b156200152a5750600090565b50600c5490565b6000610220516001600160a01b031663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa15801562001575573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200159b919062002130565b905060005a61c35011620015b25761c350620015b4565b5a5b90506000856001600160a01b0316858390604051600060405180830381858888f193505050503d806000811462001608576040519150601f19603f3d011682016040523d82523d6000602084013e6200160d565b606091505b50509050806200174b57826001600160a01b031663d0e30db0866040518263ffffffff1660e01b81526004016000604051808303818588803b1580156200165357600080fd5b505af19350505050801562001666575060015b620016a85760008051602062005dfa83398151915284620016895760026200168c565b60045b60405160ff90911681526020015b60405180910390a16200174b565b60405163a9059cbb60e01b81526001600160a01b0387811660048301526024820187905284169063a9059cbb906044016020604051808303816000875af192505050801562001716575060408051601f3d908101601f19168201909252620017139181019062002232565b60015b620017495760008051602062005dfa83398151915284620017395760016200168c565b604051600381526020016200169a565b505b505050505050565b6000610140516201518062001769919062002164565b60085462001778919062001fb9565b4211905090565b634e487b7160e01b600052604160045260246000fd5b60405161018081016001600160401b0381118282101715620017bb57620017bb6200177f565b60405290565b6040516101c081016001600160401b0381118282101715620017bb57620017bb6200177f565b60405161014081016001600160401b0381118282101715620017bb57620017bb6200177f565b604051601f8201601f191681016001600160401b03811182821017156200183857620018386200177f565b604052919050565b60005b838110156200185d57818101518382015260200162001843565b50506000910152565b600082601f8301126200187857600080fd5b81516001600160401b038111156200189457620018946200177f565b620018a9601f8201601f19166020016200180d565b818152846020838601011115620018bf57600080fd5b620018d282602083016020870162001840565b949350505050565b80516001600160a01b0381168114620018f257600080fd5b919050565b60006001600160401b038211156200191357620019136200177f565b5060051b60200190565b600082601f8301126200192f57600080fd5b81516020620019486200194283620018f7565b6200180d565b8083825260208201915060208460051b8701019350868411156200196b57600080fd5b602086015b8481101562001992576200198481620018da565b835291830191830162001970565b509695505050505050565b600082601f830112620019af57600080fd5b81516020620019c26200194283620018f7565b8083825260208201915060208460051b870101935086841115620019e557600080fd5b602086015b84811015620019925780518352918301918301620019ea565b60006020828403121562001a1657600080fd5b604051602081016001600160401b038111828210171562001a3b5762001a3b6200177f565b60405290508062001a4c83620018da565b905292915050565b60006040828403121562001a6757600080fd5b604080519081016001600160401b038111828210171562001a8c5762001a8c6200177f565b604052825181526020928301519281019290925250919050565b60006060828403121562001ab957600080fd5b604051606081016001600160401b038111828210171562001ade5762001ade6200177f565b80604052508091508251815260208301516020820152604083015160408201525092915050565b6000610180828403121562001b1957600080fd5b62001b2362001795565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015262001b6960c08301620018da565b60c082015262001b7c60e08301620018da565b60e08201526101008281015190820152610120808301519082015261014080830151908201526101609182015191810191909152919050565b60006101c0828403121562001bc957600080fd5b62001bd3620017c1565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525061012080830151818301525061014080830151818301525061016080830151818301525061018062001c5f818401620018da565b908201526101a062001c73838201620018da565b9082015292915050565b600080600080600080600080610460898b03121562001c9b57600080fd5b88516001600160401b038082111562001cb357600080fd5b908a0190610140828d03121562001cc957600080fd5b62001cd3620017e7565b82518281111562001ce357600080fd5b62001cf18e82860162001866565b82525060208301518281111562001d0757600080fd5b62001d158e82860162001866565b60208301525062001d2960408401620018da565b604082015262001d3c60608401620018da565b606082015262001d4f60808401620018da565b608082015262001d6260a08401620018da565b60a082015260c083015160c082015260e083015160e0820152610100808401518381111562001d9057600080fd5b62001d9e8f8287016200191d565b828401525050610120808401518381111562001db957600080fd5b62001dc78f8287016200199d565b828401525050809a5050505062001de28a60208b0162001a03565b965062001df38a60408b0162001a54565b955062001e048a60808b0162001aa6565b945062001e158a60e08b0162001b05565b935062001e278a6102608b0162001bb5565b925062001e386104208a01620018da565b915061044089015190509295985092959890939650565b600181811c9082168062001e6457607f821691505b60208210810362001e8557634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111562000a33576000816000526020600020601f850160051c8101602086101562001eb65750805b601f850160051c820191505b818110156200174b5782815560010162001ec2565b81516001600160401b0381111562001ef35762001ef36200177f565b62001f0b8162001f04845462001e4f565b8462001e8b565b602080601f83116001811462001f43576000841562001f2a5750858301515b600019600386901b1c1916600185901b1785556200174b565b600085815260208120601f198616915b8281101562001f745788860151825594840194600190910190840162001f53565b508582101562001f935787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b8082018082111562001156576200115662001fa3565b8181038181111562001156576200115662001fa3565b60006101c082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015181840152506101608084015181840152506101808084015162002084828501826001600160a01b03169052565b50506101a0928301516001600160a01b0316919092015290565b6080815260008351806080840152620020bf8160a085016020880162001840565b601f19601f8201168301905060018060a01b038416602084015282810360a081016040850152600d60a08301526c222924a837b7b6102a37b5b2b760991b60c083015260e08101606085015250600460e0820152630445249560e41b61010082015261012081019150509392505050565b6000602082840312156200214357600080fd5b6200062b82620018da565b634e487b7160e01b600052603260045260246000fd5b808202811582820484141762001156576200115662001fa3565b6000826200219c57634e487b7160e01b600052601260045260246000fd5b500490565b600060018201620021b657620021b662001fa3565b5060010190565b600060a08201878352602087602085015260a0604085015281875180845260c08601915060208901935060005b81811015620022115784516001600160a01b031683529383019391830191600101620021ea565b50506001600160a01b03969096166060850152505050608001529392505050565b6000602082840312156200224557600080fd5b815180151581146200062b57600080fd5b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161026051610280516139f462002406600039600081816109650152610fcb0152600081816106aa01528181612b5f0152612c7501526000818161057001528181612b3501528181612bf901528181612c270152612c540152600081816104f701528181611a9301528181611ac101528181611bb801528181611c4901528181611dba0152818161233a015281816123df01528181612f5101528181612f8f01528181613043015281816130ee01526132c20152600081816107d3015281816121f701526122b001526000818161079f015261328d015260008181610afb015281816116e2015261170a015260008181610b500152818161163c01526116640152600081816105f801526116af0152600081816109ce0152611609015260008181610ab401526119b001526000818161262801526127b40152600081816108aa0152610e3d015260006106de015260008181610cba01526122840152600081816104950152611380015260006113a301526139f46000f3fe6080604052600436106103fd5760003560e01c8063780850b91161020d578063b6585dc611610128578063e85455d7116100bb578063f2fde38b1161008a578063f85aff941161006f578063f85aff9414610cdc578063fe4522b014610cf2578063fe6a0bbf14610d1257600080fd5b8063f2fde38b14610c88578063f444324b14610ca857600080fd5b8063e85455d714610c0d578063ea8b242414610c3d578063eb95ca7014610c5d578063eeae0f9714610c7357600080fd5b8063c4590d3f116100f7578063c4590d3f14610b72578063dd604f1e14610b92578063dd62ed3e14610ba7578063e3ab3b1414610bed57600080fd5b8063b6585dc614610ad6578063b923061114610ae9578063bb88603c14610b1d578063be841baa14610b3e57600080fd5b8063a0aaf248116101a0578063ad5f5d801161016f578063ad5f5d8014610a56578063b0d7509714610a76578063b2c5c9eb14610a8c578063b2e9cb3814610aa257600080fd5b8063a0aaf248146109bc578063a35b4cef146109f0578063a45cae0214610a20578063a9059cbb14610a3657600080fd5b806393bf5705116101dc57806393bf57051461094057806394e1cf961461095357806395d89b41146109875780639808751d1461099c57600080fd5b8063780850b9146108cc57806379cc6790146108ec5780638c8043211461090c5780638da5cb5b1461092257600080fd5b8063374a4a70116103185780635b8e7979116102ab5780636edb9a911161027a578063715018a61161025f578063715018a61461086c57806373bd699a1461088157806375220b9f1461089857600080fd5b80636edb9a911461082057806370a082311461083657600080fd5b80635b8e79791461078d5780635bc789d9146107c157806360f47d5f146107f5578063638545651461080b57600080fd5b806342966c68116102e757806342966c6814610715578063469132ce1461073757806349bd5a5e1461074d5780635b4f638d1461076d57600080fd5b8063374a4a7014610677578063390a168f146106985780633b22fc03146106cc5780633e4e9e5d1461070057600080fd5b806318f490cf1161039057806329c6b3481161035f57806329c6b3481461061a578063313ce5671461062f578063320589991461064b57806336520ace1461066157600080fd5b806318f490cf1461055e5780631b5e609b1461059257806323b872dd146105c657806325100bd4146105e657600080fd5b806310b828c9116103cc57806310b828c9146104cf5780631694505e146104e557806316c2be6b1461051957806318160ddd1461054957600080fd5b8063038272b61461040957806306fdde0314610431578063095ea7b3146104535780630e03f4141461048357600080fd5b3661040457005b600080fd5b34801561041557600080fd5b5061041e610d27565b6040519081526020015b60405180910390f35b34801561043d57600080fd5b50610446610d43565b604051610428919061350a565b34801561045f57600080fd5b5061047361046e36600461356e565b610dd5565b6040519015158152602001610428565b34801561048f57600080fd5b506104b77f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610428565b3480156104db57600080fd5b5061041e60085481565b3480156104f157600080fd5b506104b77f000000000000000000000000000000000000000000000000000000000000000081565b34801561052557600080fd5b5061047361053436600461359a565b60186020526000908152604090205460ff1681565b34801561055557600080fd5b5060025461041e565b34801561056a57600080fd5b5061041e7f000000000000000000000000000000000000000000000000000000000000000081565b34801561059e57600080fd5b5061041e7f4d45544144524f504d45544144524f504d45544144524f504d45544144524f5081565b3480156105d257600080fd5b506104736105e13660046135b7565b610def565b3480156105f257600080fd5b5061041e7f000000000000000000000000000000000000000000000000000000000000000081565b34801561062657600080fd5b50610473610e15565b34801561063b57600080fd5b5060405160128152602001610428565b34801561065757600080fd5b5061041e60105481565b34801561066d57600080fd5b5061041e600d5481565b34801561068357600080fd5b5060065461047390600160a01b900460ff1681565b3480156106a457600080fd5b5061041e7f000000000000000000000000000000000000000000000000000000000000000081565b3480156106d857600080fd5b5061041e7f000000000000000000000000000000000000000000000000000000000000000081565b34801561070c57600080fd5b5061041e610e88565b34801561072157600080fd5b506107356107303660046135f8565b610e9a565b005b34801561074357600080fd5b5061041e600e5481565b34801561075957600080fd5b506006546104b7906001600160a01b031681565b34801561077957600080fd5b5061073561078836600461361f565b610ea7565b34801561079957600080fd5b506104b77f000000000000000000000000000000000000000000000000000000000000000081565b3480156107cd57600080fd5b506104b77f000000000000000000000000000000000000000000000000000000000000000081565b34801561080157600080fd5b5061041e60095481565b34801561081757600080fd5b5061041e610f13565b34801561082c57600080fd5b5061041e60135481565b34801561084257600080fd5b5061041e61085136600461359a565b6001600160a01b031660009081526020819052604090205490565b34801561087857600080fd5b50610735610f2f565b34801561088d57600080fd5b506008541515610473565b3480156108a457600080fd5b5061041e7f000000000000000000000000000000000000000000000000000000000000000081565b3480156108d857600080fd5b506107356108e736600461361f565b610f43565b3480156108f857600080fd5b5061073561090736600461356e565b610fa7565b34801561091857600080fd5b5061041e600c5481565b34801561092e57600080fd5b506005546001600160a01b03166104b7565b61073561094e366004613658565b610fc0565b34801561095f57600080fd5b506104b77f000000000000000000000000000000000000000000000000000000000000000081565b34801561099357600080fd5b50610446611051565b3480156109a857600080fd5b506107356109b736600461359a565b611060565b3480156109c857600080fd5b5061041e7f000000000000000000000000000000000000000000000000000000000000000081565b3480156109fc57600080fd5b50610473610a0b36600461359a565b60176020526000908152604090205460ff1681565b348015610a2c57600080fd5b5061041e600a5481565b348015610a4257600080fd5b50610473610a5136600461356e565b6110ca565b348015610a6257600080fd5b50610735610a7136600461361f565b6110d8565b348015610a8257600080fd5b5061041e60125481565b348015610a9857600080fd5b5061041e600b5481565b348015610aae57600080fd5b5061041e7f000000000000000000000000000000000000000000000000000000000000000081565b610735610ae4366004613691565b61117c565b348015610af557600080fd5b5061041e7f000000000000000000000000000000000000000000000000000000000000000081565b348015610b2957600080fd5b5060065461047390600160a81b900460ff1681565b348015610b4a57600080fd5b5061041e7f000000000000000000000000000000000000000000000000000000000000000081565b348015610b7e57600080fd5b50610735610b8d3660046136b6565b611195565b348015610b9e57600080fd5b50610735611331565b348015610bb357600080fd5b5061041e610bc23660046136d8565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b348015610bf957600080fd5b50610735610c083660046135f8565b611499565b348015610c1957600080fd5b50610473610c2836600461359a565b60166020526000908152604090205460ff1681565b348015610c4957600080fd5b506011546104b7906001600160a01b031681565b348015610c6957600080fd5b5061041e60075481565b348015610c7f57600080fd5b5061041e61151c565b348015610c9457600080fd5b50610735610ca336600461359a565b611533565b348015610cb457600080fd5b506104b77f000000000000000000000000000000000000000000000000000000000000000081565b348015610ce857600080fd5b5061041e600f5481565b348015610cfe57600080fd5b50610735610d0d3660046136b6565b61158c565b348015610d1e57600080fd5b5061041e6117ee565b6000610d316117ee565b600b54610d3e919061371c565b905090565b606060038054610d529061372f565b80601f0160208091040260200160405190810160405280929190818152602001828054610d7e9061372f565b8015610dcb5780601f10610da057610100808354040283529160200191610dcb565b820191906000526020600020905b815481529060010190602001808311610dae57829003601f168201915b5050505050905090565b600033610de381858561180a565b60019150505b92915050565b600033610dfd858285611817565b610e088585856118ae565b60019150505b9392505050565b600080610e2a6005546001600160a01b031690565b6001600160a01b0316148015610e6c57507f0000000000000000000000000000000000000000000000000000000000000000600854610e69919061371c565b42115b80610e775750600854155b15610e825750600090565b50600190565b6000601354601254610d3e919061371c565b610ea43382611926565b50565b610eaf611963565b6001600160a01b038216600081815260186020908152604091829020805460ff19168515159081179091558251938452908301527f306dcbe443e8f026f074a7e1e96de23ceb598ba75c3de88d8b087b84ce328bfc91015b60405180910390a15050565b6000610f1d6119a9565b15610f285750600090565b50600c5490565b610f37611963565b610f4160006119ec565b565b610f4b611963565b6001600160a01b038216600081815260176020908152604091829020805460ff19168515159081179091558251938452908301527f08cb8fbd3f235844cb0931281a83bc6772ccdf59629c8920d782e44b90cd36a09101610f07565b610fb2823383611817565b610fbc8282611926565b5050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146110095760405163079abfc960e01b815260040160405180910390fd5b34600003611043576040517f796017ae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61104c34611a4b565b505050565b606060048054610d529061372f565b611068611963565b6011805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527fa4eea51cd2f21eac6612ba054a363ae2fd59698fc258ab414313cd73f69f2b85906020015b60405180910390a150565b600033610de38185856118ae565b6110e0611963565b6001600160a01b038216611120576040517fb47cdee500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b038216600081815260166020908152604091829020805460ff19168515159081179091558251938452908301527f014ddeafe46f4124c4af768b48de643f90eab06bb0cbb87a5d7ce35f91c66dea9101610f07565b60405163079abfc960e01b815260040160405180910390fd5b61119d611963565b600f541580156111ac57508115155b156111ca5760405163c827c15f60e01b815260040160405180910390fd5b600e541580156111d957508015155b156111f75760405163c827c15f60e01b815260040160405180910390fd5b81158015906112075750600f5482105b1561122557604051635fffe54760e01b815260040160405180910390fd5b80158015906112355750600e5481105b1561125357604051635fffe54760e01b815260040160405180910390fd5b600019821480611264575060001981145b1561129b576040517f8404f62600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600f5482146112e657600f5460408051918252602082018490527f4378b25ac563a9cfb725b694a8178c787794b33b21d51fc2437d11599ca36eb2910160405180910390a1600f8290555b600e548114610fbc57600e5460408051918252602082018390527f3c28c7b8d78a063d97428fb0828d666b45766c68f1f6703a16d1af5ed43f786f910160405180910390a1600e5550565b600654600160a01b900460ff1661146757600680547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16600160a01b1790556040516000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016907f0000000000000000000000000000000000000000000000000000000000000000908381818185875af1925050503d80600081146113fb576040519150601f19603f3d011682016040523d82523d6000602084013e611400565b606091505b505090508061143b576040517f90b8ec1800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f398e4c9450dda484d0641a82d59daaea35f17ee8ea3f6a2a2c3bc1461b5fc2cb90600090a150565b6040517fb615d53500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114a1611963565b600160105410156114de576040517f18821ab800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b601080549082905560408051828152602081018490527f70bb2dea47325890ad4c56e9cea510be76761453061ad71ac5525167228d04999101610f07565b6000611526610f13565b600a54610d3e919061371c565b61153b611963565b6001600160a01b038116611583576040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600060048201526024015b60405180910390fd5b610ea4816119ec565b611594611963565b600a54600b54818411156115bb57604051637924ff4760e11b815260040160405180910390fd5b808311156115dc57604051637924ff4760e11b815260040160405180910390fd5b600a849055600b839055600c54600d5460008690036115ff576000600c55611693565b600061271061162e7f000000000000000000000000000000000000000000000000000000000000000089613769565b6116389190613780565b90507f000000000000000000000000000000000000000000000000000000000000000081101561168b577f0000000000000000000000000000000000000000000000000000000000000000600c55611691565b600c8190555b505b846000036116a5576000600d55611739565b60006127106116d47f000000000000000000000000000000000000000000000000000000000000000088613769565b6116de9190613780565b90507f0000000000000000000000000000000000000000000000000000000000000000811015611731577f0000000000000000000000000000000000000000000000000000000000000000600d55611737565b600d8190555b505b600c548214158061174c5750600d548114155b1561179e57600c54600d54604080518581526020810193909352820183905260608201527fc62aec06e6c0bd9801f57464e310b42dd2d884cbfaf006c84a761b622aea4f089060800160405180910390a15b6040805185815260208101889052908101849052606081018690527f8da1f77a22734510b762a9625e69e737d7c0cc48984e810e5802fb341eb80a3e9060800160405180910390a1505050505050565b60006117f86119a9565b156118035750600090565b50600d5490565b61104c8383836001611f08565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146118a85781811015611899576040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526001600160a01b0384166004820152602481018290526044810183905260640161157a565b6118a884848484036000611f08565b50505050565b6001600160a01b0383166118d857604051634b637e8f60e11b81526000600482015260240161157a565b6001600160a01b03821661191b576040517fec442f050000000000000000000000000000000000000000000000000000000081526000600482015260240161157a565b61104c83838361200f565b61deac196001600160a01b0383160161195657604051634b637e8f60e11b815261dead600482015260240161157a565b610fbc8261dead8361200f565b6005546001600160a01b03163314610f41576040517f118cdaa700000000000000000000000000000000000000000000000000000000815233600482015260240161157a565b60006119d87f000000000000000000000000000000000000000000000000000000000000000062015180613769565b6008546119e5919061371c565b4211905090565b600580546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60085415611a85576040517fb1f3376700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4260085543600955611aba307f000000000000000000000000000000000000000000000000000000000000000060001961180a565b60008060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f305d7198530611b0f306001600160a01b031660009081526020819052604090205490565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b1681526001600160a01b039092166004830152602482015260006044820181905260648201523060848201524260a482015260c40160606040518083038185885af1158015611b8b573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190611bb091906137a2565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa158015611c14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c3891906137d0565b6001600160a01b031663e6a43905307f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa158015611ca5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cc991906137d0565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381865afa158015611d2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d5091906137d0565b6006805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392831690811782556000908152601760209081526040808320805460ff199081166001908117909255945490951683526016909152902080549091169091179055611de1307f000000000000000000000000000000000000000000000000000000000000000060001961180a565b60408051848152602081018490529081018290527fbf59dda00152e02f20e18cab7307c8afe0714e7f69cf24a1377cbbddcb40f9bb9060600160405180910390a16006546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa158015611e83573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ea791906137ed565b8114611edf576040517fe150afc000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600654600160a81b900460ff1615611eff57611efa8161211d565b6118a8565b6118a8816121c4565b6001600160a01b038416611f4b576040517fe602df050000000000000000000000000000000000000000000000000000000081526000600482015260240161157a565b6001600160a01b038316611f8e576040517f94280d620000000000000000000000000000000000000000000000000000000081526000600482015260240161157a565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156118a857826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161200191815260200190565b60405180910390a350505050565b8061201b600854151590565b61208c57612027612335565b6001600160a01b0316836001600160a01b031614801561205057506001600160a01b0384163014155b15612087576040517f365c2d1400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612112565b612097848484612539565b6120a18484612626565b6120aa8461270d565b60006120b78486856127b0565b905080156120d6576120c98183613806565b91506120d68530836129ee565b60006120e3868686612b31565b90508015612104576120f58184613806565b92506121048661dead836129ee565b61210f868685612ccc565b50505b6118a88484836129ee565b60065460405163a9059cbb60e01b815260006004820152602481018390526001600160a01b039091169063a9059cbb906044016020604051808303816000875af115801561216f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121939190613819565b506040518181527f781a9d251db551fc7922f7facbbe49bc3fd61d3e236a8dafa34afd0539ebfa72906020016110bf565b6006546040517f095ea7b30000000000000000000000000000000000000000000000000000000081526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018490529091169063095ea7b3906044016020604051808303816000875af1158015612250573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122749190613819565b506006546007546000916122e4917f0000000000000000000000000000000000000000000000000000000000000000916001600160a01b0316907f00000000000000000000000000000000000000000000000000000000000000009086906122df9062015180613769565b612d95565b90507fc5ee8f43592edc71599ac13d277d2800a8c3a613a7ea15e3f8566057e1922b9e82600754620151806123199190613769565b6040805192835260208301919091528101839052606001610f07565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa158015612396573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123ba91906137d0565b90506000806001600160a01b03831630106123d65782306123d9565b30835b915091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa15801561243b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061245f91906137d0565b6040516bffffffffffffffffffffffff19606085811b8216602084015284901b166034820152604801604051602081830303815290604052805190602001206040516020016125189291907fff00000000000000000000000000000000000000000000000000000000000000815260609290921b6bffffffffffffffffffffffff1916600183015260158201527f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f603582015260550190565b6040516020818303038152906040528051906020012060001c935050505090565b612541610e15565b801561254e5750600f5415155b80156125dd57506001600160a01b03831660009081526016602052604090205460ff16801561259657506001600160a01b03821660009081526017602052604090205460ff16155b806125dd57506001600160a01b03821660009081526016602052604090205460ff1680156125dd57506001600160a01b03831660009081526017602052604090205460ff16155b1561104c576125ed600f54612ef6565b81111561104c576040517f7f4b310900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000015610fbc576000612656610e88565b90506000819050600061271060105461266e60025490565b6126789190613769565b6126829190613780565b905061269085858484612f07565b15612706576006805460ff60b01b1916600160b01b1790554360009081526014602052604081208054600192906126c890849061371c565b909155506126d99050601482613769565b8211156126ee576126eb601482613769565b91505b6126f88284612fe8565b6006805460ff60b01b191690555b5050505050565b6001600160a01b03811660009081526016602052604090205460ff1615610ea457326000908152601560209081526040808320438452909152902054600111612782576040517f01ae70bf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b32600090815260156020908152604080832043845290915281208054916127a883613836565b919050555050565b60007f000000000000000000000000000000000000000000000000000000000000000080156127e95750600654600160b01b900460ff16155b15610e0e576001600160a01b03841660009081526016602052604090205460ff16801561281d5750600061281b610d27565b115b801561284257506001600160a01b03831660009081526018602052604090205460ff16155b156128ed57600b5415612894576000612710600b54846128629190613769565b61286c9190613780565b90508060126000828254612880919061371c565b909155506128909050818361371c565b9150505b600061289e6117ee565b905080156128e75760006127106128b58386613769565b6128bf9190613780565b905080601360008282546128d3919061371c565b909155506128e39050818461371c565b9250505b50610e0e565b6001600160a01b03831660009081526016602052604090205460ff16801561291c5750600061291a61151c565b115b801561294157506001600160a01b03841660009081526018602052604090205460ff16155b15610e0e57600a5415612993576000612710600a54846129619190613769565b61296b9190613780565b9050806012600082825461297f919061371c565b9091555061298f9050818361371c565b9150505b600061299d610f13565b905080156129e65760006127106129b48386613769565b6129be9190613780565b905080601360008282546129d2919061371c565b909155506129e29050818461371c565b9250505b509392505050565b6001600160a01b038316612a19578060026000828254612a0e919061371c565b90915550612aa49050565b6001600160a01b03831660009081526020819052604090205481811015612a85576040517fe450d38c0000000000000000000000000000000000000000000000000000000081526001600160a01b0385166004820152602481018290526044810183905260640161157a565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216612ac057600280548290039055612adf565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051612b2491815260200190565b60405180910390a3505050565b60007f000000000000000000000000000000000000000000000000000000000000000015801590612b8157507f000000000000000000000000000000000000000000000000000000000000000015155b8015612b975750600654600160b01b900460ff16155b8015612bbb57506001600160a01b03841660009081526016602052604090205460ff165b8015612be057506001600160a01b03831660009081526018602052604090205460ff16155b15610e0e57600060095443612bf59190613806565b90507f00000000000000000000000000000000000000000000000000000000000000008110156129e6576000612c4b827f0000000000000000000000000000000000000000000000000000000000000000613806565b90506000612c997f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000613780565b90506000612ca78284613769565b9050612710612cb68288613769565b612cc09190613780565b98975050505050505050565b612cd4610e15565b8015612ce15750600e5415155b8015612d0657506001600160a01b03821660009081526017602052604090205460ff16155b8015612d2a57506001600160a01b03831660009081526016602052604090205460ff165b1561104c57612d3a600e54612ef6565b6001600160a01b038316600090815260208190526040902054612d5d908361371c565b111561104c576040517f7602d4da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000612df9604080516101008101825260008082526020808301829052828401829052606083018290526080830182905260a083018290528351808501855282815280820183905260c084015283518085019094528184528301529060e082015290565b3381526001600160a01b0387811660208301526fffffffffffffffffffffffffffffffff8516604080840191909152908716606083015260006080830152805180820190915280612e4b60018661384f565b64ffffffffff9081168252851660209091015260c08201526040517fab167ccc0000000000000000000000000000000000000000000000000000000081526001600160a01b0386169063ab167ccc90612ea8908490600401613874565b6020604051808303816000875af1158015612ec7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612eeb91906137ed565b979650505050505050565b6000610de964174876e8008361371c565b6000818310158015612f235750600654600160b01b900460ff16155b8015612f4857506001600160a01b03851660009081526016602052604090205460ff16155b8015612f8657507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316856001600160a01b031614155b8015612fc457507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316846001600160a01b031614155b8015612fdf5750436000908152601460205260409020546001115b95945050505050565b60408051600280825260608201835247926000929190602083019080368337019050509050308160008151811061302157613021613935565b60200260200101906001600160a01b031690816001600160a01b0316815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa15801561309f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130c391906137d0565b816001815181106130d6576130d6613935565b6001600160a01b0392831660209182029290920101527f00000000000000000000000000000000000000000000000000000000000000001663791ac94785600084306131244261025861371c565b6040518663ffffffff1660e01b815260040161314495949392919061394b565b600060405180830381600087803b15801561315e57600080fd5b505af192505050801561316f575060015b6131ac57604051600581527f60dc41faad9fe4f70f304dcef26d96d71e98ec8e21e4a340921d94dfe46307dc9060200160405180910390a16118a8565b4760006131b98483613806565b9050600085601254836131cc9190613769565b6131d69190613780565b9050600086601354846131e99190613769565b6131f39190613780565b905086881015613259576000878960125461320e9190613769565b6132189190613780565b9050806012600082825461322c9190613806565b9091555061323c9050818a613806565b6013600082825461324d9190613806565b90915550613264915050565b600060138190556012555b811561328257601154613282906001600160a01b03168360006132be565b80156132b4576132b47f00000000000000000000000000000000000000000000000000000000000000008260016132be565b5050505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa15801561331e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061334291906137d0565b905060005a61c350116133575761c350613359565b5a5b90506000856001600160a01b0316858390604051600060405180830381858888f193505050503d80600081146133ab576040519150601f19603f3d011682016040523d82523d6000602084013e6133b0565b606091505b505090508061350257826001600160a01b031663d0e30db0866040518263ffffffff1660e01b81526004016000604051808303818588803b1580156133f457600080fd5b505af193505050508015613406575060015b613455577f60dc41faad9fe4f70f304dcef26d96d71e98ec8e21e4a340921d94dfe46307dc8461343757600261343a565b60045b60405160ff90911681526020015b60405180910390a1613502565b60405163a9059cbb60e01b81526001600160a01b0387811660048301526024820187905284169063a9059cbb906044016020604051808303816000875af19250505080156134c0575060408051601f3d908101601f191682019092526134bd91810190613819565b60015b613500577f60dc41faad9fe4f70f304dcef26d96d71e98ec8e21e4a340921d94dfe46307dc846134f157600161343a565b60405160038152602001613448565b505b505050505050565b60006020808352835180602085015260005b818110156135385785810183015185820160400152820161351c565b506000604082860101526040601f19601f8301168501019250505092915050565b6001600160a01b0381168114610ea457600080fd5b6000806040838503121561358157600080fd5b823561358c81613559565b946020939093013593505050565b6000602082840312156135ac57600080fd5b8135610e0e81613559565b6000806000606084860312156135cc57600080fd5b83356135d781613559565b925060208401356135e781613559565b929592945050506040919091013590565b60006020828403121561360a57600080fd5b5035919050565b8015158114610ea457600080fd5b6000806040838503121561363257600080fd5b823561363d81613559565b9150602083013561364d81613611565b809150509250929050565b60008060006060848603121561366d57600080fd5b8335925060208401359150604084013561368681613611565b809150509250925092565b600080604083850312156136a457600080fd5b82359150602083013561364d81613611565b600080604083850312156136c957600080fd5b50508035926020909101359150565b600080604083850312156136eb57600080fd5b82356136f681613559565b9150602083013561364d81613559565b634e487b7160e01b600052601160045260246000fd5b80820180821115610de957610de9613706565b600181811c9082168061374357607f821691505b60208210810361376357634e487b7160e01b600052602260045260246000fd5b50919050565b8082028115828204841417610de957610de9613706565b60008261379d57634e487b7160e01b600052601260045260246000fd5b500490565b6000806000606084860312156137b757600080fd5b8351925060208401519150604084015190509250925092565b6000602082840312156137e257600080fd5b8151610e0e81613559565b6000602082840312156137ff57600080fd5b5051919050565b81810381811115610de957610de9613706565b60006020828403121561382b57600080fd5b8151610e0e81613611565b60006001820161384857613848613706565b5060010190565b64ffffffffff82811682821603908082111561386d5761386d613706565b5092915050565b6000610140820190506001600160a01b038084511683528060208501511660208401526fffffffffffffffffffffffffffffffff60408501511660408401528060608501511660608401525060808301516138d3608084018215159052565b5060a08301516138e760a084018215159052565b5060c083015161390e60c0840182805164ffffffffff908116835260209182015116910152565b5060e083015180516001600160a01b0316610100840152602081015161012084015261386d565b634e487b7160e01b600052603260045260246000fd5b600060a08201878352602087602085015260a0604085015281875180845260c08601915060208901935060005b8181101561399d5784516001600160a01b031683529383019391830191600101613978565b50506001600160a01b0396909616606085015250505060800152939250505056fea264697066735822122019fd5679c496a4be1a3e458b6e53d5b64b79a43ff5bc929b98e9a64d1f195fb364736f6c6343000818003360dc41faad9fe4f70f304dcef26d96d71e98ec8e21e4a340921d94dfe46307dc",
        u = [
          {
            inputs: [
              { internalType: "address", name: "_factory", type: "address" },
              { internalType: "address", name: "_WETH", type: "address" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [],
            name: "WETH",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "tokenA", type: "address" },
              { internalType: "address", name: "tokenB", type: "address" },
              {
                internalType: "uint256",
                name: "amountADesired",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountBDesired",
                type: "uint256",
              },
              { internalType: "uint256", name: "amountAMin", type: "uint256" },
              { internalType: "uint256", name: "amountBMin", type: "uint256" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "addLiquidity",
            outputs: [
              { internalType: "uint256", name: "amountA", type: "uint256" },
              { internalType: "uint256", name: "amountB", type: "uint256" },
              { internalType: "uint256", name: "liquidity", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
              {
                internalType: "uint256",
                name: "amountTokenDesired",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountTokenMin",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountETHMin",
                type: "uint256",
              },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "addLiquidityETH",
            outputs: [
              { internalType: "uint256", name: "amountToken", type: "uint256" },
              { internalType: "uint256", name: "amountETH", type: "uint256" },
              { internalType: "uint256", name: "liquidity", type: "uint256" },
            ],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "factory",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountOut", type: "uint256" },
              { internalType: "uint256", name: "reserveIn", type: "uint256" },
              { internalType: "uint256", name: "reserveOut", type: "uint256" },
            ],
            name: "getAmountIn",
            outputs: [
              { internalType: "uint256", name: "amountIn", type: "uint256" },
            ],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountIn", type: "uint256" },
              { internalType: "uint256", name: "reserveIn", type: "uint256" },
              { internalType: "uint256", name: "reserveOut", type: "uint256" },
            ],
            name: "getAmountOut",
            outputs: [
              { internalType: "uint256", name: "amountOut", type: "uint256" },
            ],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountOut", type: "uint256" },
              { internalType: "address[]", name: "path", type: "address[]" },
            ],
            name: "getAmountsIn",
            outputs: [
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountIn", type: "uint256" },
              { internalType: "address[]", name: "path", type: "address[]" },
            ],
            name: "getAmountsOut",
            outputs: [
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountA", type: "uint256" },
              { internalType: "uint256", name: "reserveA", type: "uint256" },
              { internalType: "uint256", name: "reserveB", type: "uint256" },
            ],
            name: "quote",
            outputs: [
              { internalType: "uint256", name: "amountB", type: "uint256" },
            ],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "tokenA", type: "address" },
              { internalType: "address", name: "tokenB", type: "address" },
              { internalType: "uint256", name: "liquidity", type: "uint256" },
              { internalType: "uint256", name: "amountAMin", type: "uint256" },
              { internalType: "uint256", name: "amountBMin", type: "uint256" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "removeLiquidity",
            outputs: [
              { internalType: "uint256", name: "amountA", type: "uint256" },
              { internalType: "uint256", name: "amountB", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
              { internalType: "uint256", name: "liquidity", type: "uint256" },
              {
                internalType: "uint256",
                name: "amountTokenMin",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountETHMin",
                type: "uint256",
              },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "removeLiquidityETH",
            outputs: [
              { internalType: "uint256", name: "amountToken", type: "uint256" },
              { internalType: "uint256", name: "amountETH", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
              { internalType: "uint256", name: "liquidity", type: "uint256" },
              {
                internalType: "uint256",
                name: "amountTokenMin",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountETHMin",
                type: "uint256",
              },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "removeLiquidityETHSupportingFeeOnTransferTokens",
            outputs: [
              { internalType: "uint256", name: "amountETH", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
              { internalType: "uint256", name: "liquidity", type: "uint256" },
              {
                internalType: "uint256",
                name: "amountTokenMin",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountETHMin",
                type: "uint256",
              },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
              { internalType: "bool", name: "approveMax", type: "bool" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "removeLiquidityETHWithPermit",
            outputs: [
              { internalType: "uint256", name: "amountToken", type: "uint256" },
              { internalType: "uint256", name: "amountETH", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
              { internalType: "uint256", name: "liquidity", type: "uint256" },
              {
                internalType: "uint256",
                name: "amountTokenMin",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountETHMin",
                type: "uint256",
              },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
              { internalType: "bool", name: "approveMax", type: "bool" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
            outputs: [
              { internalType: "uint256", name: "amountETH", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "tokenA", type: "address" },
              { internalType: "address", name: "tokenB", type: "address" },
              { internalType: "uint256", name: "liquidity", type: "uint256" },
              { internalType: "uint256", name: "amountAMin", type: "uint256" },
              { internalType: "uint256", name: "amountBMin", type: "uint256" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
              { internalType: "bool", name: "approveMax", type: "bool" },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "removeLiquidityWithPermit",
            outputs: [
              { internalType: "uint256", name: "amountA", type: "uint256" },
              { internalType: "uint256", name: "amountB", type: "uint256" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountOut", type: "uint256" },
              { internalType: "address[]", name: "path", type: "address[]" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swapETHForExactTokens",
            outputs: [
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            ],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256",
              },
              { internalType: "address[]", name: "path", type: "address[]" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swapExactETHForTokens",
            outputs: [
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            ],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256",
              },
              { internalType: "address[]", name: "path", type: "address[]" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountIn", type: "uint256" },
              {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256",
              },
              { internalType: "address[]", name: "path", type: "address[]" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swapExactTokensForETH",
            outputs: [
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountIn", type: "uint256" },
              {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256",
              },
              { internalType: "address[]", name: "path", type: "address[]" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountIn", type: "uint256" },
              {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256",
              },
              { internalType: "address[]", name: "path", type: "address[]" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swapExactTokensForTokens",
            outputs: [
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountIn", type: "uint256" },
              {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256",
              },
              { internalType: "address[]", name: "path", type: "address[]" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountOut", type: "uint256" },
              { internalType: "uint256", name: "amountInMax", type: "uint256" },
              { internalType: "address[]", name: "path", type: "address[]" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swapTokensForExactETH",
            outputs: [
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amountOut", type: "uint256" },
              { internalType: "uint256", name: "amountInMax", type: "uint256" },
              { internalType: "address[]", name: "path", type: "address[]" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "deadline", type: "uint256" },
            ],
            name: "swapTokensForExactTokens",
            outputs: [
              { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
        f = [
          {
            inputs: [
              { internalType: "address", name: "router_", type: "address" },
              { internalType: "address", name: "oracle_", type: "address" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          { inputs: [], name: "AdapterParamsMustBeEmpty", type: "error" },
          {
            inputs: [],
            name: "AdditionToPoolIsBelowPerTransactionMinimum",
            type: "error",
          },
          {
            inputs: [],
            name: "AdditionToPoolWouldExceedPerAddressCap",
            type: "error",
          },
          {
            inputs: [],
            name: "AdditionToPoolWouldExceedPoolCap",
            type: "error",
          },
          { inputs: [], name: "AddressAlreadySet", type: "error" },
          { inputs: [], name: "AllowanceDecreasedBelowZero", type: "error" },
          { inputs: [], name: "AlreadyInitialised", type: "error" },
          { inputs: [], name: "AmountExceedsAvailable", type: "error" },
          {
            inputs: [],
            name: "ApprovalCallerNotOwnerNorApproved",
            type: "error",
          },
          {
            inputs: [],
            name: "ApprovalQueryForNonexistentToken",
            type: "error",
          },
          { inputs: [], name: "ApproveFromTheZeroAddress", type: "error" },
          { inputs: [], name: "ApproveToTheZeroAddress", type: "error" },
          { inputs: [], name: "AuctionStatusIsNotEnded", type: "error" },
          { inputs: [], name: "AuctionStatusIsNotOpen", type: "error" },
          {
            inputs: [
              { internalType: "address[]", name: "modules", type: "address[]" },
              { internalType: "uint256", name: "value", type: "uint256" },
              { internalType: "bytes", name: "data", type: "bytes" },
              { internalType: "uint256", name: "txGas", type: "uint256" },
            ],
            name: "AuxCallFailed",
            type: "error",
          },
          { inputs: [], name: "BalanceMismatch", type: "error" },
          { inputs: [], name: "BalanceQueryForZeroAddress", type: "error" },
          {
            inputs: [],
            name: "BidMustBeBelowTheFloorForRefundDuringAuction",
            type: "error",
          },
          {
            inputs: [],
            name: "BidMustBeBelowTheFloorWhenReducingQuantity",
            type: "error",
          },
          {
            inputs: [
              {
                internalType: "enum IErrors.BondingCurveErrorType",
                name: "error",
                type: "uint8",
              },
            ],
            name: "BondingCurveError",
            type: "error",
          },
          { inputs: [], name: "BurnExceedsBalance", type: "error" },
          { inputs: [], name: "BurnFromTheZeroAddress", type: "error" },
          { inputs: [], name: "CallerIsNotDepositBoxOwner", type: "error" },
          { inputs: [], name: "CallerIsNotFactory", type: "error" },
          {
            inputs: [],
            name: "CallerIsNotFactoryOrProjectOwner",
            type: "error",
          },
          {
            inputs: [],
            name: "CallerIsNotFactoryProjectOwnerOrPool",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "caller", type: "address" },
            ],
            name: "CallerIsNotPlatformAdmin",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "caller", type: "address" },
            ],
            name: "CallerIsNotSuperAdmin",
            type: "error",
          },
          { inputs: [], name: "CallerIsNotTheFeeRecipient", type: "error" },
          { inputs: [], name: "CallerIsNotTheManager", type: "error" },
          { inputs: [], name: "CallerIsNotTheOwner", type: "error" },
          { inputs: [], name: "CallerMustBeLzApp", type: "error" },
          { inputs: [], name: "CanOnlyReduce", type: "error" },
          {
            inputs: [],
            name: "CannotAddLiquidityOnCreateAndUseDRIPool",
            type: "error",
          },
          {
            inputs: [],
            name: "CannotManuallyFundLPWhenUsingADRIPool",
            type: "error",
          },
          { inputs: [], name: "CannotPerformDuringAutoswap", type: "error" },
          { inputs: [], name: "CannotPerformPriorToFunding", type: "error" },
          {
            inputs: [],
            name: "CannotSetNewManagerToTheZeroAddress",
            type: "error",
          },
          {
            inputs: [],
            name: "CannotSetNewOwnerToTheZeroAddress",
            type: "error",
          },
          { inputs: [], name: "CannotSetToZeroAddress", type: "error" },
          { inputs: [], name: "CannotWithdrawThisToken", type: "error" },
          { inputs: [], name: "CollectionAlreadyRevealed", type: "error" },
          { inputs: [], name: "ContractIsDecommissioned", type: "error" },
          { inputs: [], name: "ContractIsNotPaused", type: "error" },
          { inputs: [], name: "ContractIsPaused", type: "error" },
          { inputs: [], name: "DecreasedAllowanceBelowZero", type: "error" },
          {
            inputs: [],
            name: "DeductionsOnBuyExceedOrEqualOneHundredPercent",
            type: "error",
          },
          { inputs: [], name: "DeployerOnly", type: "error" },
          { inputs: [], name: "DeploymentError", type: "error" },
          { inputs: [], name: "DepositBoxIsNotOpen", type: "error" },
          { inputs: [], name: "DestinationIsNotTrustedSource", type: "error" },
          {
            inputs: [],
            name: "DriPoolAddressCannotBeAddressZero",
            type: "error",
          },
          { inputs: [], name: "GasLimitIsTooLow", type: "error" },
          { inputs: [], name: "IncorrectConfirmationValue", type: "error" },
          { inputs: [], name: "IncorrectPayment", type: "error" },
          { inputs: [], name: "InitialLiquidityAlreadyAdded", type: "error" },
          { inputs: [], name: "InitialLiquidityNotYetAdded", type: "error" },
          { inputs: [], name: "InsufficientAllowance", type: "error" },
          { inputs: [], name: "InvalidAdapterParams", type: "error" },
          { inputs: [], name: "InvalidAddress", type: "error" },
          { inputs: [], name: "InvalidEndpointCaller", type: "error" },
          { inputs: [], name: "InvalidHash", type: "error" },
          { inputs: [], name: "InvalidMinGas", type: "error" },
          { inputs: [], name: "InvalidOracleSignature", type: "error" },
          { inputs: [], name: "InvalidPayload", type: "error" },
          { inputs: [], name: "InvalidReceiver", type: "error" },
          { inputs: [], name: "InvalidSourceSendingContract", type: "error" },
          { inputs: [], name: "InvalidTotalShares", type: "error" },
          { inputs: [], name: "LPLockUpMustFitUint88", type: "error" },
          { inputs: [], name: "LPTokensBalanceMismatch", type: "error" },
          { inputs: [], name: "LimitTooHigh", type: "error" },
          { inputs: [], name: "LimitsCanOnlyBeRaised", type: "error" },
          {
            inputs: [],
            name: "LiquidityPoolCannotBeAddressZero",
            type: "error",
          },
          {
            inputs: [],
            name: "LiquidityPoolMustBeAContractAddress",
            type: "error",
          },
          { inputs: [], name: "ListLengthMismatch", type: "error" },
          {
            inputs: [],
            name: "MachineAddressCannotBeAddressZero",
            type: "error",
          },
          { inputs: [], name: "ManagerUnauthorizedAccount", type: "error" },
          { inputs: [], name: "MaxBidQuantityIs255", type: "error" },
          { inputs: [], name: "MaxBuysPerBlockExceeded", type: "error" },
          {
            inputs: [
              { internalType: "uint256", name: "requested", type: "uint256" },
              {
                internalType: "uint256",
                name: "alreadyMinted",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "maxAllowance",
                type: "uint256",
              },
            ],
            name: "MaxPublicMintAllowanceExceeded",
            type: "error",
          },
          { inputs: [], name: "MaxSupplyTooHigh", type: "error" },
          { inputs: [], name: "MaxTokensPerTxnExceeded", type: "error" },
          { inputs: [], name: "MaxTokensPerWalletExceeded", type: "error" },
          { inputs: [], name: "MetadataIsLocked", type: "error" },
          {
            inputs: [],
            name: "MetadropFactoryOnlyOncePerReveal",
            type: "error",
          },
          { inputs: [], name: "MetadropModulesOnly", type: "error" },
          {
            inputs: [],
            name: "MetadropOracleCannotBeAddressZero",
            type: "error",
          },
          { inputs: [], name: "MinETHCannotExceedMaxBuy", type: "error" },
          { inputs: [], name: "MinETHCannotExceedMaxLiquidity", type: "error" },
          { inputs: [], name: "MinGasLimitNotSet", type: "error" },
          {
            inputs: [],
            name: "MintERC2309QuantityExceedsLimit",
            type: "error",
          },
          { inputs: [], name: "MintToZeroAddress", type: "error" },
          { inputs: [], name: "MintZeroQuantity", type: "error" },
          { inputs: [], name: "MintingIsClosedForever", type: "error" },
          {
            inputs: [],
            name: "NewBuyTaxBasisPointsExceedsMaximum",
            type: "error",
          },
          {
            inputs: [],
            name: "NewSellTaxBasisPointsExceedsMaximum",
            type: "error",
          },
          { inputs: [], name: "NoETHForLiquidityPair", type: "error" },
          { inputs: [], name: "NoPaymentDue", type: "error" },
          { inputs: [], name: "NoRefundForCaller", type: "error" },
          { inputs: [], name: "NoStoredMessage", type: "error" },
          { inputs: [], name: "NoTokenForLiquidityPair", type: "error" },
          { inputs: [], name: "NoTrustedPathRecord", type: "error" },
          { inputs: [], name: "NothingToClaim", type: "error" },
          { inputs: [], name: "OperationDidNotSucceed", type: "error" },
          { inputs: [], name: "OracleSignatureHasExpired", type: "error" },
          { inputs: [], name: "OwnableUnauthorizedAccount", type: "error" },
          { inputs: [], name: "OwnerQueryForNonexistentToken", type: "error" },
          {
            inputs: [],
            name: "OwnershipNotInitializedForExtraData",
            type: "error",
          },
          { inputs: [], name: "ParamTooLargeContributionFee", type: "error" },
          { inputs: [], name: "ParamTooLargeEndDate", type: "error" },
          { inputs: [], name: "ParamTooLargeMaxInitialBuy", type: "error" },
          {
            inputs: [],
            name: "ParamTooLargeMaxInitialLiquidity",
            type: "error",
          },
          { inputs: [], name: "ParamTooLargeMinETH", type: "error" },
          { inputs: [], name: "ParamTooLargePerAddressMax", type: "error" },
          { inputs: [], name: "ParamTooLargePoolMaxETH", type: "error" },
          { inputs: [], name: "ParamTooLargePoolPerTxnMinETH", type: "error" },
          { inputs: [], name: "ParamTooLargePoolSupply", type: "error" },
          { inputs: [], name: "ParamTooLargeStartDate", type: "error" },
          { inputs: [], name: "ParamTooLargeVestingDays", type: "error" },
          {
            inputs: [],
            name: "ParametersDoNotMatchSignedMessage",
            type: "error",
          },
          {
            inputs: [],
            name: "PassedConfigDoesNotMatchApproved",
            type: "error",
          },
          { inputs: [], name: "PauseCutOffHasPassed", type: "error" },
          { inputs: [], name: "PaymentMustCoverPerMintFee", type: "error" },
          { inputs: [], name: "PermitDidNotSucceed", type: "error" },
          {
            inputs: [],
            name: "PlatformAdminCannotBeAddressZero",
            type: "error",
          },
          {
            inputs: [],
            name: "PlatformTreasuryCannotBeAddressZero",
            type: "error",
          },
          { inputs: [], name: "PoolCannotBeManuallyStarted", type: "error" },
          { inputs: [], name: "PoolIsAboveMinimum", type: "error" },
          { inputs: [], name: "PoolIsBelowMinimum", type: "error" },
          {
            inputs: [],
            name: "PoolMustBeSeededWithETHForInitialLiquidity",
            type: "error",
          },
          { inputs: [], name: "PoolPhaseIsNotFailed", type: "error" },
          { inputs: [], name: "PoolPhaseIsNotOpen", type: "error" },
          { inputs: [], name: "PoolPhaseIsNotSucceeded", type: "error" },
          { inputs: [], name: "PoolVestingNotYetComplete", type: "error" },
          {
            inputs: [],
            name: "ProjectOwnerCannotBeAddressZero",
            type: "error",
          },
          { inputs: [], name: "ProofInvalid", type: "error" },
          {
            inputs: [],
            name: "QuantityExceedsMaxPossibleCollectionSupply",
            type: "error",
          },
          {
            inputs: [],
            name: "QuantityExceedsRemainingCollectionSupply",
            type: "error",
          },
          {
            inputs: [],
            name: "QuantityExceedsRemainingPhaseSupply",
            type: "error",
          },
          { inputs: [], name: "RecipientsAndAmountsMismatch", type: "error" },
          { inputs: [], name: "ReferralIdAlreadyUsed", type: "error" },
          {
            inputs: [],
            name: "RequestingMoreThanAvailableBalance",
            type: "error",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "previouslyMinted",
                type: "uint256",
              },
              { internalType: "uint256", name: "requested", type: "uint256" },
              {
                internalType: "uint256",
                name: "remainingAllocation",
                type: "uint256",
              },
            ],
            name: "RequestingMoreThanRemainingAllocation",
            type: "error",
          },
          { inputs: [], name: "RouterCannotBeZeroAddress", type: "error" },
          { inputs: [], name: "RoyaltyFeeWillExceedSalePrice", type: "error" },
          { inputs: [], name: "ShareTotalCannotBeZero", type: "error" },
          { inputs: [], name: "SliceOutOfBounds", type: "error" },
          { inputs: [], name: "SliceOverflow", type: "error" },
          { inputs: [], name: "SuperAdminCannotBeAddressZero", type: "error" },
          { inputs: [], name: "SupplyTotalMismatch", type: "error" },
          { inputs: [], name: "SupportWindowIsNotOpen", type: "error" },
          { inputs: [], name: "SwapThresholdTooLow", type: "error" },
          {
            inputs: [],
            name: "TaxFreeAddressCannotBeAddressZero",
            type: "error",
          },
          { inputs: [], name: "TaxPeriodStillInForce", type: "error" },
          { inputs: [], name: "TemplateCannotBeAddressZero", type: "error" },
          { inputs: [], name: "TemplateNotFound", type: "error" },
          { inputs: [], name: "ThisMintIsClosed", type: "error" },
          {
            inputs: [],
            name: "TotalSharesMustMatchDenominator",
            type: "error",
          },
          { inputs: [], name: "TransferAmountExceedsBalance", type: "error" },
          {
            inputs: [],
            name: "TransferCallerNotOwnerNorApproved",
            type: "error",
          },
          { inputs: [], name: "TransferFailed", type: "error" },
          { inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
          { inputs: [], name: "TransferFromZeroAddress", type: "error" },
          {
            inputs: [],
            name: "TransferToNonERC721ReceiverImplementer",
            type: "error",
          },
          { inputs: [], name: "TransferToZeroAddress", type: "error" },
          { inputs: [], name: "URIQueryForNonexistentToken", type: "error" },
          { inputs: [], name: "UnrecognisedType", type: "error" },
          { inputs: [], name: "UnrecognisedVRFMode", type: "error" },
          {
            inputs: [],
            name: "VRFCoordinatorCannotBeAddressZero",
            type: "error",
          },
          { inputs: [], name: "ValueExceedsMaximum", type: "error" },
          {
            inputs: [],
            name: "VestedBalanceExceedsTotalBalance",
            type: "error",
          },
          {
            inputs: [],
            name: "botProtectionDurationInSecondsMustFitUint128",
            type: "error",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "dripHolder",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "ethPooled",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "ethFee",
                type: "uint256",
              },
            ],
            name: "AddToPool",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "participant",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "dripTokenBurned",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "pooledTokenClaimed",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "pooledTokenBurnt",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "ethRefunded",
                type: "uint256",
              },
            ],
            name: "ClaimFromPool",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [],
            name: "DRIPoolCreatedAndInitialised",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "participant",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "ethRefunded",
                type: "uint256",
              },
            ],
            name: "ExcessRefunded",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "ethBuy",
                type: "uint256",
              },
            ],
            name: "InitialBuyMade",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferStarted",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "totalETHPooled",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "totalETHFee",
                type: "uint256",
              },
            ],
            name: "PoolClosedSuccessfully",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "participant",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "dripTokenBurned",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "ethRefunded",
                type: "uint256",
              },
            ],
            name: "RefundFromFailedPool",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "totalETHPooled",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "contractBalance",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "totalETHFundedToLPAndTokenBuy",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "totalExcessETHRefunded",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "projectSeedContributionETH",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "accumulatedFees",
                type: "uint256",
              },
            ],
            name: "UnexpectedTotalETHPooled",
            type: "event",
          },
          { stateMutability: "payable", type: "fallback" },
          {
            inputs: [],
            name: "acceptOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "accumulatedFees",
            outputs: [{ internalType: "uint96", name: "", type: "uint96" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "addToPool",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "claimFromPool",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "createdERC20",
            outputs: [
              {
                internalType: "contract IERC20ByMetadrop",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
              },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "driType",
            outputs: [
              {
                internalType: "enum IERC20ConfigByMetadrop.DRIPoolType",
                name: "",
                type: "uint8",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes", name: "poolParams_", type: "bytes" },
              { internalType: "string", name: "name_", type: "string" },
              { internalType: "string", name: "symbol_", type: "string" },
            ],
            name: "initialiseDRIP",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "initialised",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "createdERC20_",
                type: "address",
              },
              {
                internalType: "address",
                name: "poolCreator_",
                type: "address",
              },
            ],
            name: "loadERC20AddressAndSeedETH",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "maxInitialBuy",
            outputs: [{ internalType: "uint96", name: "", type: "uint96" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "maxInitialBuyExceeded",
            outputs: [
              {
                internalType: "bool",
                name: "maxInitialBuyExceeded_",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "maxInitialLiquidity",
            outputs: [{ internalType: "uint96", name: "", type: "uint96" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "maxInitialLiquidityExceeded",
            outputs: [
              {
                internalType: "bool",
                name: "maxInitialLiquidityExceeded_",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "metadropOracleAddress",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "participant",
            outputs: [
              {
                internalType: "uint128",
                name: "contribution",
                type: "uint128",
              },
              {
                internalType: "uint128",
                name: "excessRefunded",
                type: "uint128",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "participant_",
                type: "address",
              },
            ],
            name: "participantETHPooled",
            outputs: [
              {
                internalType: "uint256",
                name: "participantETHPooled_",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "participant_",
                type: "address",
              },
            ],
            name: "participantExcessETHRefunded",
            outputs: [
              {
                internalType: "uint256",
                name: "participantExcessETHRefunded_",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "participant_",
                type: "address",
              },
            ],
            name: "participantExcessRefundAvailable",
            outputs: [
              {
                internalType: "uint256",
                name: "participantExcessRefund_",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "pendingOwner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "poolContributionFeeBasisPoints",
            outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "poolEndDate",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "poolFeeRecipient",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "poolIsAboveMinimum",
            outputs: [
              {
                internalType: "bool",
                name: "poolIsAboveMinimum_",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "poolIsAtMaximum",
            outputs: [
              { internalType: "bool", name: "poolIsAtMaximum_", type: "bool" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "poolMaxETH",
            outputs: [{ internalType: "uint96", name: "", type: "uint96" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "poolMinETH",
            outputs: [{ internalType: "uint96", name: "", type: "uint96" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "poolPerAddressMaxETH",
            outputs: [{ internalType: "uint80", name: "", type: "uint80" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "poolPerTransactionMinETH",
            outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "poolPhaseStatus",
            outputs: [
              {
                internalType: "string",
                name: "poolPhaseStatus_",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "poolStartDate",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "poolVestingInSeconds",
            outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "projectSeedContributionAddress",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "projectSeedContributionETH",
            outputs: [{ internalType: "uint96", name: "", type: "uint96" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "refundExcess",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "refundFromFailedPool",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "token_", type: "address" },
              { internalType: "uint256", name: "amount_", type: "uint256" },
            ],
            name: "rescueERC20",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount_", type: "uint256" },
            ],
            name: "rescueETH",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "poolDuration_",
                type: "uint256",
              },
            ],
            name: "startPool",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [],
            name: "supplyForLP",
            outputs: [
              {
                internalType: "uint256",
                name: "supplyForLP_",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "supplyInThePool",
            outputs: [{ internalType: "uint120", name: "", type: "uint120" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "lockerFeeButUsedAsLPLockupDaysForV3Integration_",
                type: "uint256",
              },
            ],
            name: "supplyLiquidity",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalETHContributed",
            outputs: [
              {
                internalType: "uint256",
                name: "totalETHContributed_",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalETHFundedToLPAndTokenBuy",
            outputs: [{ internalType: "uint96", name: "", type: "uint96" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalETHPooled",
            outputs: [
              {
                internalType: "uint256",
                name: "totalETHPooled_",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalExcessETHPooled",
            outputs: [
              {
                internalType: "uint256",
                name: "totalExcessETHPooled_",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalExcessETHRefunded",
            outputs: [{ internalType: "uint96", name: "", type: "uint96" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "uniswapRouter",
            outputs: [
              {
                internalType: "contract IUniswapV2Router02",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "holder_", type: "address" },
            ],
            name: "vestedBalanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "vestingEndDate",
            outputs: [
              {
                internalType: "uint256",
                name: "vestingEndDate_",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ];
    },
  },
]);
