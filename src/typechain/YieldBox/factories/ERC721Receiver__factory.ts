/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721Receiver,
  ERC721ReceiverInterface,
} from "../ERC721Receiver";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610197806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063150b7a0214610030575b600080fd5b61006861003e3660046100c6565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200160405180910390f35b803573ffffffffffffffffffffffffffffffffffffffff811681146100c157600080fd5b919050565b6000806000806000608086880312156100de57600080fd5b6100e78661009d565b94506100f56020870161009d565b935060408601359250606086013567ffffffffffffffff8082111561011957600080fd5b818801915088601f83011261012d57600080fd5b81358181111561013c57600080fd5b89602082850101111561014e57600080fd5b969995985093965060200194939250505056fea26469706673582212201ab649adf42d0f0b8d1eb75b5663966bcae61b477a60566518201ca8ae1155af64736f6c63430008090033";

type ERC721ReceiverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ReceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Receiver__factory extends ContractFactory {
  constructor(...args: ERC721ReceiverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC721Receiver";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721Receiver> {
    return super.deploy(overrides || {}) as Promise<ERC721Receiver>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC721Receiver {
    return super.attach(address) as ERC721Receiver;
  }
  connect(signer: Signer): ERC721Receiver__factory {
    return super.connect(signer) as ERC721Receiver__factory;
  }
  static readonly contractName: "ERC721Receiver";
  public readonly contractName: "ERC721Receiver";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721ReceiverInterface {
    return new utils.Interface(_abi) as ERC721ReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Receiver {
    return new Contract(address, _abi, signerOrProvider) as ERC721Receiver;
  }
}
