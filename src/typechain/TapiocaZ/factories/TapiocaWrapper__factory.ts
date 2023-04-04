/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TapiocaWrapper,
  TapiocaWrapperInterface,
} from "../TapiocaWrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_erc20",
        type: "address",
      },
    ],
    name: "TapiocaWrapper__AlreadyDeployed",
    type: "error",
  },
  {
    inputs: [],
    name: "TapiocaWrapper__FailedDeploy",
    type: "error",
  },
  {
    inputs: [],
    name: "TapiocaWrapper__MngmtFeeTooHigh",
    type: "error",
  },
  {
    inputs: [],
    name: "TapiocaWrapper__NoTOFTDeployed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "TapiocaWrapper__TOFTExecutionFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract ITapiocaOFT",
        name: "_tapiocaOFT",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_erc20",
        type: "address",
      },
    ],
    name: "CreateOFT",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
    ],
    name: "HarvestFees",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_newFee",
        type: "uint256",
      },
    ],
    name: "SetFees",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_erc20",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_bytecode",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "_linked",
        type: "bool",
      },
    ],
    name: "createTOFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "toft",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "bytecode",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "revertOnFailure",
            type: "bool",
          },
        ],
        internalType: "struct TapiocaWrapper.ExecutionCall[]",
        name: "_call",
        type: "tuple[]",
      },
    ],
    name: "executeCalls",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_toft",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_bytecode",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "_revertOnFailure",
        type: "bool",
      },
    ],
    name: "executeTOFT",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "harvestFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "harvestableTapiocaOFTsLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTOFT",
    outputs: [
      {
        internalType: "contract ITapiocaOFT",
        name: "",
        type: "address",
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
    inputs: [],
    name: "tapiocaOFTLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tapiocaOFTs",
    outputs: [
      {
        internalType: "contract ITapiocaOFT",
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
        name: "",
        type: "address",
      },
    ],
    name: "tapiocaOFTsByErc20",
    outputs: [
      {
        internalType: "contract ITapiocaOFT",
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
] as const;

const _bytecode =
  "0x60803461007057601f610eea38819003918201601f19168301916001600160401b038311848410176100755780849260209460405283398101031261007057516001600160a01b0381168103610070576100619061005c3361008b565b61008b565b604051610e1790816100d38239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b600080546001600160a01b039283166001600160a01b03198216811783559216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a356fe6040608081526004908136101561001557600080fd5b600091823560e01c8063138cc18f146109dd5780632f3e1b91146109be57806339930d731461099f5780633b6ac5a314610965578063715018a6146108ff5780638da5cb5b146108d9578063b3c7d6a314610531578063b8454db814610467578063c5181c70146103f1578063c99e12b2146103ad578063e4c472061461018e5763f2fde38b146100a557600080fd5b3461018a57602036600319011261018a576100be610ada565b906100c7610bb0565b6001600160a01b0380921692831561012157505082548273ffffffffffffffffffffffffffffffffffffffff198216178455167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152fd5b8280fd5b5060208060031936011261038a5781359067ffffffffffffffff8083116103a957366023840112156103a95782840135938185116103a5576024808501948136918860051b0101116103a1579296939491906101e8610bb0565b84936101f384610cb1565b9661020089519889610c2d565b848852601f1961020f86610cb1565b01875b81811061039257505086945b80861061028c57505050505050835193808501911515855285850152825180915260608401948060608360051b870101940192955b8287106102605785850386f35b90919293828061027c600193605f198a82030186528851610b23565b9601920196019592919092610253565b909192939496809a96506102a1888385610cc9565b356001600160a01b03811680910361038e576102be898486610cc9565b8881013590601e198136030182121561038a57019081359188831161038a57890191803603831361038a578392818e5192839283378101848152039134905af196610307610c81565b610311828b610ceb565b52878a61031f838587610cc9565b0135908115158203610386578161037d575b5061034d5761033f90610c08565b94939291909996959961021e565b846103798b8661035e8b958e610ceb565b5191519485946310847b0960e01b8652850152830190610b23565b0390fd5b90501538610331565b8c80fd5b8380fd5b5080fd5b60608a82018d01528b01610212565b8780fd5b8680fd5b8580fd5b503461018a57602036600319011261018a5735916001548310156103ee57506001600160a01b036103df602093610b63565b92905490519260031b1c168152f35b80fd5b5091346103ee57806003193601126103ee5760015492831561044057600019840193841161042d576020836001600160a01b036103df87610b63565b906011602492634e487b7160e01b835252fd5b82517f4df930f1000000000000000000000000000000000000000000000000000000008152fd5b508260603660031901126103ee5761047d610ada565b9060243567ffffffffffffffff811161038e5761049d9036908501610af5565b6044359391841515850361038a57908392916104b7610bb0565b8188519283928337810184815203916001600160a01b033491165af1916104dc610c81565b9180610529575b610507575061050390835193849315158452806020850152830190610b23565b0390f35b61037960209285519384936310847b0960e01b85528401526024830190610b23565b5082156104e3565b50903461018a57608036600319011261018a5761054c610ada565b60243567ffffffffffffffff81116108d55761056b9036908501610af5565b91909360443594606435938415948515036103a157610588610bb0565b6001600160a01b039384811697888a526020966003885286898c2054166108a657869492888695938b936000146108845791610627610632949261061961063898956105d5368a89610cff565b838151910120955194859384019630908892606894929184526bffffffffffffffffffffffff19809260601b16602085015260601b16603483015260488201520190565b03601f198101835282610c2d565b519020923691610cff565b90610d36565b165b169380517f785e9e8600000000000000000000000000000000000000000000000000000000815284818481895afa90811561087a57879185918a9161083f575b5016036108195760015492680100000000000000009384811015610806578060016106a89201600155610b63565b819291549060031b9188831b921b1916179055858752600384528087209373ffffffffffffffffffffffffffffffffffffffff199486868254161790558151907fc77c2972000000000000000000000000000000000000000000000000000000008252808285818a5afa9283156107fd575088926107c6575b5050610752575b5050507f7512d1d2a31be00735451a10b76db5dca1e1581b1cb23d7910b4741e8eb148768380a380f35b600254918210156107b35760018201806002558210156107a0575082907f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0191825416179055388080610728565b856032602492634e487b7160e01b835252fd5b856041602492634e487b7160e01b835252fd5b90809250813d83116107f6575b6107dd8183610c2d565b810103126103a5575180151581036103a5573880610721565b503d6107d3565b513d8a823e3d90fd5b602489604186634e487b7160e01b835252fd5b517ff083e5f7000000000000000000000000000000000000000000000000000000008152fd5b925050508481813d8311610873575b6108588183610c2d565b810103126103a1575183811681036103a1578387913861067a565b503d61084e565b82513d8a823e3d90fd5b9161062761063294926106196108a098956105d5368a89610cff565b1661063a565b6024868b8b51917f8a8d1425000000000000000000000000000000000000000000000000000000008352820152fd5b8480fd5b50503461038e578160031936011261038e576001600160a01b0360209254169051908152f35b83346103ee57806003193601126103ee57610918610bb0565b806001600160a01b03815473ffffffffffffffffffffffffffffffffffffffff1981168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b50503461038e57602036600319011261038e57602091816001600160a01b03918261098e610ada565b168152600385522054169051908152f35b50503461038e578160031936011261038e576020906002549051908152f35b50503461038e578160031936011261038e576020906001549051908152f35b5091346103ee57806003193601126103ee57805b60028054821015610ab15782526001600160a01b03817f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace015416803b1561018a57828091868651809481937f138cc18f0000000000000000000000000000000000000000000000000000000083525af18015610aa757610a7b575b50610a7690610c08565b6109f1565b67ffffffffffffffff8111610a94578352610a76610a6c565b602483604187634e487b7160e01b835252fd5b84513d85823e3d90fd5b82337ffafa110fb81a7f88423c7aa6e23116f2fbbc14aa953f81c5b5bf1571647f76b98280a280f35b600435906001600160a01b0382168203610af057565b600080fd5b9181601f84011215610af05782359167ffffffffffffffff8311610af05760208381860195010111610af057565b919082519283825260005b848110610b4f575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610b2e565b600154811015610b9a5760016000527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60190600090565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03600054163303610bc457565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b6000198114610c175760010190565b634e487b7160e01b600052601160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610c4f57604052565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff8111610c4f57601f01601f191660200190565b3d15610cac573d90610c9282610c65565b91610ca06040519384610c2d565b82523d6000602084013e565b606090565b67ffffffffffffffff8111610c4f5760051b60200190565b9190811015610b9a5760051b81013590605e1981360301821215610af0570190565b8051821015610b9a5760209160051b010190565b929192610d0b82610c65565b91610d196040519384610c2d565b829481845281830111610af0578281602093846000960137010152565b90805115610d9d576020815191016000f5906001600160a01b03821615610d5957565b606460405162461bcd60e51b815260206004820152601960248201527f437265617465323a204661696c6564206f6e206465706c6f79000000000000006044820152fd5b606460405162461bcd60e51b815260206004820152602060248201527f437265617465323a2062797465636f6465206c656e677468206973207a65726f6044820152fdfea264697066735822122085dafe9e55715b480a86af8ae17cbe7d94364621bc53dd8fee8c2cc1e6d6582664736f6c63430008120033";

type TapiocaWrapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TapiocaWrapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TapiocaWrapper__factory extends ContractFactory {
  constructor(...args: TapiocaWrapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TapiocaWrapper";
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TapiocaWrapper> {
    return super.deploy(_owner, overrides || {}) as Promise<TapiocaWrapper>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): TapiocaWrapper {
    return super.attach(address) as TapiocaWrapper;
  }
  override connect(signer: Signer): TapiocaWrapper__factory {
    return super.connect(signer) as TapiocaWrapper__factory;
  }
  static readonly contractName: "TapiocaWrapper";

  public readonly contractName: "TapiocaWrapper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TapiocaWrapperInterface {
    return new utils.Interface(_abi) as TapiocaWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TapiocaWrapper {
    return new Contract(address, _abi, signerOrProvider) as TapiocaWrapper;
  }
}
