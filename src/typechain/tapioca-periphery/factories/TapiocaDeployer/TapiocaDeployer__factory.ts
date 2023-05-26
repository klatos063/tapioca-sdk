/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  TapiocaDeployer,
  TapiocaDeployerInterface,
} from "../../TapiocaDeployer/TapiocaDeployer";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "bytecodeHash",
        type: "bytes32",
      },
    ],
    name: "computeAddress",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "bytecodeHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "deployer",
        type: "address",
      },
    ],
    name: "computeAddress",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "bytecode",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "contractName",
        type: "string",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610016576103c4908161001c8239f35b600080fdfe6040608081526004908136101561001557600080fd5b6000803560e01c8063481286e61461024c578063780653061461020a57638f3b65931461004157600080fd5b6080366003190112610203578235906001600160401b0360443581811161020657366023820112156102065761008090369060248189013591016102ba565b91606435918211610203573660238301121561020357506100aa90369060248188013591016102ba565b938247106101c057508051151591835192602084017f437265617465323a2062797465636f6465206c656e677468206973207a65726f90528484016d0103337b91031b7b73a3930b1ba160951b905285519380602088019580604e8301906101129189610305565b810103602e81018252604e016101289082610281565b61013191610328565b81516001600160a01b039260243592602090910190f516928251918291602083017f437265617465323a204661696c6564206f6e206465706c6f7920666f7220636f9052848301660373a3930b1ba160cd1b90525190816047840161019592610305565b8101036027810182526047016101ab9082610281565b6101b790831515610328565b51908152602090f35b606490602085519162461bcd60e51b8352820152601d60248201527f437265617465323a20696e73756666696369656e742062616c616e63650000006044820152fd5b80fd5b8280fd5b503461020357606036600319011261020357604435926001600160a01b03918285168503610203575060209361024491602435903561036e565b915191168152f35b5034610203578160031936011261020357506102706020923090602435903561036e565b90516001600160a01b039091168152f35b601f909101601f19168101906001600160401b038211908210176102a457604052565b634e487b7160e01b600052604160045260246000fd5b9192916001600160401b0382116102a457604051916102e3601f8201601f191660200184610281565b829481845281830111610300578281602093846000960137010152565b600080fd5b60005b8381106103185750506000910152565b8181015183820152602001610308565b156103305750565b6044604051809262461bcd60e51b8252602060048301526103608151809281602486015260208686019101610305565b601f01601f19168101030190fd5b90605592600b92604051926040840152602083015281520160ff8153209056fea264697066735822122078eb134ca8b2cc4631b415ba5246d400f333d5365c1aa68a949cb6f4e263f3db64736f6c63430008120033";

type TapiocaDeployerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TapiocaDeployerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TapiocaDeployer__factory extends ContractFactory {
  constructor(...args: TapiocaDeployerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TapiocaDeployer";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TapiocaDeployer> {
    return super.deploy(overrides || {}) as Promise<TapiocaDeployer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TapiocaDeployer {
    return super.attach(address) as TapiocaDeployer;
  }
  override connect(signer: Signer): TapiocaDeployer__factory {
    return super.connect(signer) as TapiocaDeployer__factory;
  }
  static readonly contractName: "TapiocaDeployer";

  public readonly contractName: "TapiocaDeployer";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TapiocaDeployerInterface {
    return new utils.Interface(_abi) as TapiocaDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TapiocaDeployer {
    return new Contract(address, _abi, signerOrProvider) as TapiocaDeployer;
  }
}