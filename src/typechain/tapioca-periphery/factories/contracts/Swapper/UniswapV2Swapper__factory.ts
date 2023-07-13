/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  UniswapV2Swapper,
  UniswapV2SwapperInterface,
} from "../../../contracts/Swapper/UniswapV2Swapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "contract IYieldBox",
        name: "_yieldBox",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AddressNotValid",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withdrawFromYb",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "depositToYb",
        type: "bool",
      },
    ],
    name: "buildSwapData",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareOut",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenOutId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withdrawFromYb",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "depositToYb",
        type: "bool",
      },
    ],
    name: "buildSwapData",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareOut",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract IUniswapV2Factory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDefaultDexOptions",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareOut",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "swapData",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getInputAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareOut",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "swapData",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getOutputAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
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
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareOut",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "swapData",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapRouter",
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
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract IYieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e0346200015457601f62001a8a38819003918201601f19168301916001600160401b03831184841017620001595780849260609460405283398101031262000154576200004d816200016f565b60406200005d602084016200016f565b920151916001600160a01b038084169290838503620001545780620000e1926000543360018060a01b0319821617600055823391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3600180551692620000ca84151562000184565b1692620000d984151562000184565b151562000184565b60805260a05260c0526040516118b89081620001d28239608051818181610297015281816107e9015281816108ff0152610b2c015260a051816108bb015260c051818181610262015281816104ed01528181610593015281816106340152818161076b015281816108770152610acb0152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036200015457565b156200018c57565b60405162461bcd60e51b815260206004820152601a60248201527f537761707065723a2061646472657373206e6f742076616c69640000000000006044820152606490fdfe6040608081526004908136101561001557600080fd5b600091823560e01c80631a16321014610c195780633fa2ef5e14610b865780635bf66e4814610ab3578063715018a614610a565780637b2a8bd2146109495780638da5cb5b14610923578063c31c9c07146108df578063c45a01551461089b578063de40657714610857578063e3c711a014610753578063efa84c6d1461016a5763f2fde38b146100a557600080fd5b34610166576020366003190112610166576100be610c86565b906100c7610d85565b6001600160a01b0380921692831561011457505082546001600160a01b0319811683178455167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8280fd5b5082903461074f5736600319016101a08112610166576101401361074f5761016435916001600160a01b039081841680850361074f57610184359367ffffffffffffffff851161016657366023860112156101665784810135936101cd85610d69565b956101da89519788610d47565b8587526024953687828401011161074b57869392918187926020998a9301838c01378901015260026001541461070a57600260015586908597833582811680820361061757158015906106f5575b1561061b5790604435838116810361061757610245905b836112b3565b9a60843589811580158161060c575b156104a0575050945b61028f7f00000000000000000000000000000000000000000000000000000000000000009660a435908a35878a6114ac565b926102be84877f0000000000000000000000000000000000000000000000000000000000000000168097611372565b5115610492575b8a8180518101031261048e57928992838f8f96908b958f8a908d940151916102eb611304565b15610484575061032530935b519a8b998a9889976338ed173960e01b8952880152610144359087015260a0604487015260a4860190610f39565b92166064840152608483015203925af190811561047a579061034e918891610458575b50610f76565b5198610358611304565b61036f575b8a8a8a8a600180558351928352820152f35b8091929394959697985051600019810190811161044657815181101561043457926103af8a848d9897958c8c9660a49960051b0101511693168093611372565b85519687958694634d4d7cbd60e11b865260643590860152309085015260448401528960648401528160848401525af191821561042957916103fa575b50908480808080808061035d565b61041a9150843d8611610422575b6104128183610d47565b810190611314565b9050846103ec565b503d610408565b8551903d90823e3d90fd5b634e487b7160e01b8852603285528588fd5b634e487b7160e01b8852601185528588fd5b61047491503d808a833e61046c8183610d47565b810190610ebd565b8c610348565b8b513d89823e3d90fd5b61032590936102f7565b8980fd5b5061049b610e82565b6102c5565b90969189359182610562575b5050508d60643590816104c1575b505061025d565b60c43561055b57519063442c159960e01b82528882015260e435898201528a60448201528b81606481897f0000000000000000000000000000000000000000000000000000000000000000165afa801561055057908c91610527575b50505b8e8e6104ba565b813d8311610549575b61053a8183610d47565b8101031261048e578a8f61051d565b503d610530565b508e513d8c823e3d90fd5b5050610520565b92975090911561060557508d519063442c159960e01b82528782015260a435888201528960448201528a81606481887f0000000000000000000000000000000000000000000000000000000000000000165afa9081156105fb578a916105ce575b505b948e80806104ac565b90508a81813d83116105f4575b6105e58183610d47565b8101031261048e57518e6105c3565b503d6105db565b8e513d8c823e3d90fd5b90506105c5565b5060c4351515610254565b8880fd5b508a51630cf35bdd60e41b8082528635868301526080917f00000000000000000000000000000000000000000000000000000000000000008516919083818a81865afa90811561055057918f9594939284928b918e916106d4575b5096518094819382526064358c8301525afa9182156105fb579061024592918b926106a3575b505061023f565b6106c29250803d106106cd575b6106ba8183610d47565b810190610fd1565b505090508e8061069c565b503d6106b0565b6106eb9150843d86116106cd576106ba8183610d47565b5050905038610676565b50604435838116809103610617571515610228565b50601f606492868a519362461bcd60e51b85528401528201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152fd5b8580fd5b5080fd5b5034610166578261076336610cbf565b5050916107b27f000000000000000000000000000000000000000000000000000000000000000061079d610797828761100a565b906112b3565b9460608101359060806020820135910161110a565b85516307c0329d60e21b815292830152506024810184905291829081906107dd906044830190610f39565b03816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa90811561084b5790610828918460209592610830575b5050610f9c565b519051908152f35b61084492503d8091833e61046c8183610d47565b3880610821565b505051903d90823e3d90fd5b50503461074f578160031936011261074f57602090516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b50503461074f578160031936011261074f57602090516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b50503461074f578160031936011261074f57602090516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b50503461074f578160031936011261074f576001600160a01b0360209254169051908152f35b5091903461074f5760c036600319011261074f57610a5292610969610ca1565b90610972610cb0565b9361097b610e3d565b50610984610e3d565b9461098d610ddd565b92604435845260643560208501526109a3610ddd565b928084528684015235602083015260243560608301526109c1610e13565b9315158452151560208401528452602084015281830152519182918291909161012060206040610140840195606081516001600160a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b0390f35b8334610ab05780600319360112610ab057610a6f610d85565b80546001600160a01b03198116825581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b80fd5b50346101665782610ac336610cbf565b505091610af77f000000000000000000000000000000000000000000000000000000000000000061079d610797828761100a565b5090610b208551948593849363d06ca61f60e01b85528401528660248401526044830190610f39565b03816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa90811561084b5790610828918460209592610b6b575b5050610f76565b610b7f92503d8091833e61046c8183610d47565b3880610b64565b828434610ab05760c0366003190112610ab057610ba1610c86565b91602435916001600160a01b0380841680940361074f57610a5294610bc4610ca1565b92610bcd610cb0565b90610bd6610e3d565b50610bdf610e3d565b96610be8610ddd565b9460443586526064356020870152610bfe610ddd565b941684528684015280602084015260608301526109c1610e13565b50503461074f578160031936011261074f57610a5290610c37610e82565b90519182916020835260208301905b919082519283825260005b848110610c72575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610c51565b600435906001600160a01b0382168203610c9c57565b600080fd5b608435908115158203610c9c57565b60a435908115158203610c9c57565b60031981016101608112610c9c5761014013610c9c576004916101443567ffffffffffffffff92838211610c9c5780602383011215610c9c5781850135938411610c9c5760248483010111610c9c576024019190565b6040810190811067ffffffffffffffff821117610d3157604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610d3157604052565b67ffffffffffffffff8111610d3157601f01601f191660200190565b6001600160a01b03600054163303610d9957565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b604051906080820182811067ffffffffffffffff821117610d315760405260006060838281528260208201528260408201520152565b604051906040820182811067ffffffffffffffff821117610d315760405260006020838281520152565b604051906060820182811067ffffffffffffffff821117610d315760405281610e64610ddd565b8152610e6e610ddd565b60208201526040610e7d610e13565b910152565b610e104201804211610ea75760405190602082015260208152610ea481610d15565b90565b634e487b7160e01b600052601160045260246000fd5b906020908183820312610c9c57825167ffffffffffffffff93848211610c9c570181601f82011215610c9c578051938411610d31578360051b9060405194610f0785840187610d47565b85528380860192820101928311610c9c578301905b828210610f2a575050505090565b81518152908301908301610f1c565b90815180825260208080930193019160005b828110610f59575050505090565b83516001600160a01b031685529381019392810192600101610f4b565b805160011015610f865760400190565b634e487b7160e01b600052603260045260246000fd5b805115610f865760200190565b356001600160a01b0381168103610c9c5790565b51906001600160a01b0382168203610c9c57565b9190826080910312610c9c5781516005811015610c9c5791610ff560208201610fbd565b91606061100460408401610fbd565b92015190565b91906001600160a01b03908161101f85610fa9565b16158015906110f4575b15611045575050610ea4604061103e84610fa9565b9301610fa9565b1691604051630cf35bdd60e41b90818152602083013560048201526080928382602481895afa9182156110c75760609385936024926000916110d3575b509760405195869485938452013560048301525afa9182156110c7576000926110aa57505090565b6110c09250803d106106cd576106ba8183610d47565b5050905090565b6040513d6000823e3d90fd5b6110ea9150853d87116106cd576106ba8183610d47565b5050905038611082565b508161110260408601610fa9565b161515611029565b9392843592600092839283929186158015816112a6575b15611136575050505050505060409092013590565b81929394969995989791611206575b50505081611154575b50505050565b909192939450604083013580156000146111fc57509160646020926001600160a01b03606095604051968795869463442c159960e01b8652600486015201356024840152876044840152165afa9182156111f05780926111bc575b50505b903880808061114e565b9091506020823d82116111e8575b816111d760209383610d47565b81010312610ab057505138806111af565b3d91506111ca565b604051903d90823e3d90fd5b93505050506111b2565b92985090911561129f57506040519063442c159960e01b82526004820152602083013560248201528360448201526020816064816001600160a01b038b165afa90811561129457849161125f575b505b95388080611145565b90506020813d821161128c575b8161127960209383610d47565b81010312611288575138611254565b8380fd5b3d915061126c565b6040513d86823e3d90fd5b9050611256565b5060408a01351515611121565b9190604051926060840184811067ffffffffffffffff821117610d31576040526002845260403660208601376112fe846112ec81610f9c565b6001600160a01b038094169052610f76565b91169052565b610124358015158103610c9c5790565b9190826040910312610c9c576020825192015190565b3d15611355573d9061133b82610d69565b916113496040519384610d47565b82523d6000602084013e565b606090565b90816020910312610c9c57518015158103610c9c5790565b919091803b1561146757604051916001600160a01b03602084019463095ea7b360e01b8652166024840152604483015260448252608082019282841067ffffffffffffffff851117610d31576000809493819460405251925af16113d461132a565b81611438575b50156113e257565b60405162461bcd60e51b815260206004820152602860248201527f42617365537761707065723a3a73616665417070726f76653a20617070726f76604482015267194819985a5b195960c21b6064820152608490fd5b805180159250821561144d575b5050386113da565b611460925060208091830101910161135a565b3880611445565b60405162461bcd60e51b815260206004820152601460248201527f537761707065723a206e6f20636f6e74726163740000000000000000000000006044820152606490fd5b9391909293610104358015158103610c9c5761177357505050811561172e576001600160a01b031690604080516370a0823160e01b8082526004923084840152602091602495838588818b5afa948515611723576000956116f4575b50825190848201906323b872dd60e01b8252338984015230604484015260648301526064825260a082019180831067ffffffffffffffff8411176116e057916000808b61159b94828a9897868b5261155f87610d15565b8987527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460c082015251925af161159461132a565b908b6117e5565b80518061166c575b505086835180998193825230898301525afa95861561166157600096611632575b50828611156115f057505083039283116115dd57505090565b601190634e487b7160e01b600052526000fd5b5162461bcd60e51b8152808401919091526018818501527f537761707065723a207472616e73666572206661696c656400000000000000006044820152606490fd5b90958282813d831161165a575b6116498183610d47565b81010312610ab057505194386115c4565b503d61163f565b50513d6000823e3d90fd5b928061167d9394830101910161135a565b1561168b57829038806115a3565b815162461bcd60e51b8152808601849052602a818801527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608490fd5b88604189634e487b7160e01b600052526000fd5b90948482813d831161171c575b61170b8183610d47565b81010312610ab05750519338611508565b503d611701565b83513d6000823e3d90fd5b60405162461bcd60e51b815260206004820152601460248201527f537761707065723a20616d6f756e7420697320300000000000000000000000006044820152606490fd5b604093509060006001600160a01b0360a493869795975197889687956311a5cc7760e31b8752600487015230602487015230604487015260648601526084850152165af19081156110c7576000916117c9575090565b6117e1915060403d8111610422576104128183610d47565b5090565b9192901561184757508151156117f9575090565b3b156118025790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b82519091501561185a5750805190602001fd5b60405162461bcd60e51b81526020600482015290819061187e906024830190610c46565b0390fdfea26469706673582212209ef6934c821ac61a79f3264d6ecda10a9d3a1391c404c842e653c48433360bca64736f6c63430008120033";

type UniswapV2SwapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV2SwapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV2Swapper__factory extends ContractFactory {
  constructor(...args: UniswapV2SwapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "UniswapV2Swapper";
  }

  override deploy(
    _router: PromiseOrValue<string>,
    _factory: PromiseOrValue<string>,
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UniswapV2Swapper> {
    return super.deploy(
      _router,
      _factory,
      _yieldBox,
      overrides || {}
    ) as Promise<UniswapV2Swapper>;
  }
  override getDeployTransaction(
    _router: PromiseOrValue<string>,
    _factory: PromiseOrValue<string>,
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _router,
      _factory,
      _yieldBox,
      overrides || {}
    );
  }
  override attach(address: string): UniswapV2Swapper {
    return super.attach(address) as UniswapV2Swapper;
  }
  override connect(signer: Signer): UniswapV2Swapper__factory {
    return super.connect(signer) as UniswapV2Swapper__factory;
  }
  static readonly contractName: "UniswapV2Swapper";

  public readonly contractName: "UniswapV2Swapper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV2SwapperInterface {
    return new utils.Interface(_abi) as UniswapV2SwapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV2Swapper {
    return new Contract(address, _abi, signerOrProvider) as UniswapV2Swapper;
  }
}
