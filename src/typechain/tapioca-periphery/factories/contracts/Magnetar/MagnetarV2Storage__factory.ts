/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MagnetarV2Storage,
  MagnetarV2StorageInterface,
} from "../../../contracts/Magnetar/MagnetarV2Storage";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
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
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608080604052346100155760bd908161001b8239f35b600080fdfe6080806040526004361015601b575b503615601957600080fd5b005b600090813560e01c63e985e9c51460315750600e565b3460835760403660031901126083576001600160a01b0360043581811690819003607f57602435918216809203607f5783526020838152604080852092855291815292205460ff1615158152f35b8380fd5b5080fdfea26469706673582212206a78cb7c64d8e72c5e7ff52ba87288038490b0e58f755ffccbab969a53f7afb564736f6c63430008120033";

type MagnetarV2StorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MagnetarV2StorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MagnetarV2Storage__factory extends ContractFactory {
  constructor(...args: MagnetarV2StorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MagnetarV2Storage";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MagnetarV2Storage> {
    return super.deploy(overrides || {}) as Promise<MagnetarV2Storage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MagnetarV2Storage {
    return super.attach(address) as MagnetarV2Storage;
  }
  override connect(signer: Signer): MagnetarV2Storage__factory {
    return super.connect(signer) as MagnetarV2Storage__factory;
  }
  static readonly contractName: "MagnetarV2Storage";

  public readonly contractName: "MagnetarV2Storage";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MagnetarV2StorageInterface {
    return new utils.Interface(_abi) as MagnetarV2StorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MagnetarV2Storage {
    return new Contract(address, _abi, signerOrProvider) as MagnetarV2Storage;
  }
}
