/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ReceiverTest,
  ReceiverTestInterface,
} from "../../research/ReceiverTest";

const _abi = [
  {
    inputs: [],
    name: "receiveSomeEth",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalEth",
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
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608080604052346100155760bb908161001b8239f35b600080fdfe6080806040526004361015601b575b503615601957600080fd5b005b600090813560e01c9081633c3c9c23146069575063ce5a818703600e57806003193601126066578054348101809111605257815580f35b634e487b7160e01b82526011600452602482fd5b80fd5b90503460815781600319360112608157602091548152f35b5080fdfea2646970667358221220c2a79cddb4297af114e8526a5e77dc75bcb761672d8706f5c08cfd04b13bf3bf64736f6c63430008120033";

type ReceiverTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReceiverTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReceiverTest__factory extends ContractFactory {
  constructor(...args: ReceiverTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ReceiverTest";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReceiverTest> {
    return super.deploy(overrides || {}) as Promise<ReceiverTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ReceiverTest {
    return super.attach(address) as ReceiverTest;
  }
  override connect(signer: Signer): ReceiverTest__factory {
    return super.connect(signer) as ReceiverTest__factory;
  }
  static readonly contractName: "ReceiverTest";

  public readonly contractName: "ReceiverTest";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReceiverTestInterface {
    return new utils.Interface(_abi) as ReceiverTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReceiverTest {
    return new Contract(address, _abi, signerOrProvider) as ReceiverTest;
  }
}
