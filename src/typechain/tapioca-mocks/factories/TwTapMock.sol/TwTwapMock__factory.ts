/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  TwTwapMock,
  TwTwapMockInterface,
} from "../../TwTapMock.sol/TwTwapMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "addRewardToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardTokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "distributeReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "rewardTokenIndex",
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
    name: "rewardTokens",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608080604052346100165761035a908161001c8239f35b600080fdfe60406080815260048036101561001457600080fd5b600091823560e01c80631c03e6cc1461024c578063415be3b5146102135780637bb7bed1146101cf5763e3bcd27c1461004c57600080fd5b346101cb57806003193601126101cb5761006682356102da565b9190549080516020938482016323b872dd60e01b81526024943386850152306044850152853560648501526064845260a084019367ffffffffffffffff94818110868211176101b957865251899384939192849160031b1c6001600160a01b03165af1903d156101b1573d81811161019f57835191601f8201601f19908116603f011683019081118382101761018d57845281523d878683013e5b81610150575b5015610111578480f35b5162461bcd60e51b81529283018290528201527f426f72696e6745524332303a205472616e7366657246726f6d206661696c6564604482015260649150fd5b80915051848115918215610169575b5050905038610107565b83809293500103126101895783015180151581036101895780843861015f565b8580fd5b634e487b7160e01b8952604188528589fd5b634e487b7160e01b8852604187528488fd5b506060610101565b634e487b7160e01b8b5260418a52878bfd5b8280fd5b5090346101cb5760203660031901126101cb573591805483101561021057506001600160a01b036102016020936102da565b92905490519260031b1c168152f35b80fd5b5090346101cb5760203660031901126101cb57356001600160a01b0381168091036101cb57828291602094526001845220549051908152f35b508290346102d65760203660031901126102d6578235916001600160a01b03928381168091036102d657815493680100000000000000008510156102c3576020955091839185936001850183556102a2856102da565b819291549060031b9184831b921b1916179055815260018652205551908152f35b634e487b7160e01b835260418652602483fd5b5080fd5b906000918254811015610310578280527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563019190565b634e487b7160e01b83526032600452602483fdfea264697066735822122082013d63faf8503324126f0a5d701d8f3c92b80c62221cf43ffad51633a9bbe864736f6c63430008120033";

type TwTwapMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TwTwapMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TwTwapMock__factory extends ContractFactory {
  constructor(...args: TwTwapMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TwTwapMock";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TwTwapMock> {
    return super.deploy(overrides || {}) as Promise<TwTwapMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TwTwapMock {
    return super.attach(address) as TwTwapMock;
  }
  override connect(signer: Signer): TwTwapMock__factory {
    return super.connect(signer) as TwTwapMock__factory;
  }
  static readonly contractName: "TwTwapMock";

  public readonly contractName: "TwTwapMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TwTwapMockInterface {
    return new utils.Interface(_abi) as TwTwapMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TwTwapMock {
    return new Contract(address, _abi, signerOrProvider) as TwTwapMock;
  }
}
