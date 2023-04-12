/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MasterContractMock,
  MasterContractMockInterface,
} from "../MasterContractMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract YieldBox",
        name: "_yieldBox",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "setApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract YieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516103f13803806103f183398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b60805161035961009860003960008181606a0152818161011f01526101db01526103596000f3fe60806040526004361061003f5760003560e01c80634ddf47d414610044578063de40657714610058578063e18c6b19146100b5578063e2bbb158146100ca575b600080fd5b61005661005236600461026b565b5050565b005b34801561006457600080fd5b5061008c7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100c157600080fd5b506100566100ea565b3480156100d657600080fd5b506100566100e53660046102dd565b610192565b6040517fa22cb465000000000000000000000000000000000000000000000000000000008152336004820152600160248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063a22cb46590604401600060405180830381600087803b15801561017857600080fd5b505af115801561018c573d6000803e3d6000fd5b50505050565b6040517f9a9af97a0000000000000000000000000000000000000000000000000000000081526004810183905233602482015230604482015260006064820152608481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690639a9af97a9060a4016040805180830381600087803b15801561023357600080fd5b505af1158015610247573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061018c91906102ff565b6000806020838503121561027e57600080fd5b823567ffffffffffffffff8082111561029657600080fd5b818501915085601f8301126102aa57600080fd5b8135818111156102b957600080fd5b8660208285010111156102cb57600080fd5b60209290920196919550909350505050565b600080604083850312156102f057600080fd5b50508035926020909101359150565b6000806040838503121561031257600080fd5b50508051602090910151909290915056fea2646970667358221220b324545549832e6674da3ae69f0c369d5b19e201791dc06643812b811ad44a9364736f6c63430008090033";

type MasterContractMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MasterContractMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MasterContractMock__factory extends ContractFactory {
  constructor(...args: MasterContractMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MasterContractMock";
  }

  deploy(
    _yieldBox: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MasterContractMock> {
    return super.deploy(
      _yieldBox,
      overrides || {}
    ) as Promise<MasterContractMock>;
  }
  getDeployTransaction(
    _yieldBox: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_yieldBox, overrides || {});
  }
  attach(address: string): MasterContractMock {
    return super.attach(address) as MasterContractMock;
  }
  connect(signer: Signer): MasterContractMock__factory {
    return super.connect(signer) as MasterContractMock__factory;
  }
  static readonly contractName: "MasterContractMock";
  public readonly contractName: "MasterContractMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MasterContractMockInterface {
    return new utils.Interface(_abi) as MasterContractMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MasterContractMock {
    return new Contract(address, _abi, signerOrProvider) as MasterContractMock;
  }
}
