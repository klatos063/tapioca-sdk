/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace UniswapV3SwapperMock {
  export type SwapTokensDataStruct = {
    tokenIn: PromiseOrValue<string>;
    tokenInId: PromiseOrValue<BigNumberish>;
    tokenOut: PromiseOrValue<string>;
    tokenOutId: PromiseOrValue<BigNumberish>;
  };

  export type SwapTokensDataStructOutput = [
    string,
    BigNumber,
    string,
    BigNumber
  ] & {
    tokenIn: string;
    tokenInId: BigNumber;
    tokenOut: string;
    tokenOutId: BigNumber;
  };

  export type SwapAmountDataStruct = {
    amountIn: PromiseOrValue<BigNumberish>;
    shareIn: PromiseOrValue<BigNumberish>;
    amountOut: PromiseOrValue<BigNumberish>;
    shareOut: PromiseOrValue<BigNumberish>;
  };

  export type SwapAmountDataStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    amountIn: BigNumber;
    shareIn: BigNumber;
    amountOut: BigNumber;
    shareOut: BigNumber;
  };

  export type YieldBoxDataStruct = {
    withdrawFromYb: PromiseOrValue<boolean>;
    depositToYb: PromiseOrValue<boolean>;
  };

  export type YieldBoxDataStructOutput = [boolean, boolean] & {
    withdrawFromYb: boolean;
    depositToYb: boolean;
  };

  export type SwapDataStruct = {
    tokensData: UniswapV3SwapperMock.SwapTokensDataStruct;
    amountData: UniswapV3SwapperMock.SwapAmountDataStruct;
    yieldBoxData: UniswapV3SwapperMock.YieldBoxDataStruct;
  };

  export type SwapDataStructOutput = [
    UniswapV3SwapperMock.SwapTokensDataStructOutput,
    UniswapV3SwapperMock.SwapAmountDataStructOutput,
    UniswapV3SwapperMock.YieldBoxDataStructOutput
  ] & {
    tokensData: UniswapV3SwapperMock.SwapTokensDataStructOutput;
    amountData: UniswapV3SwapperMock.SwapAmountDataStructOutput;
    yieldBoxData: UniswapV3SwapperMock.YieldBoxDataStructOutput;
  };
}

export interface UniswapV3SwapperMockInterface extends utils.Interface {
  functions: {
    "buildSwapData(address,address,uint256,uint256,bool,bool)": FunctionFragment;
    "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)": FunctionFragment;
    "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)": FunctionFragment;
    "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)": FunctionFragment;
    "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buildSwapData(address,address,uint256,uint256,bool,bool)"
      | "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)"
      | "getInputAmount"
      | "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"
      | "getOutputAmount"
      | "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"
      | "swap"
      | "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "buildSwapData(address,address,uint256,uint256,bool,bool)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getInputAmount",
    values: [UniswapV3SwapperMock.SwapDataStruct, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)",
    values: [UniswapV3SwapperMock.SwapDataStruct, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOutputAmount",
    values: [UniswapV3SwapperMock.SwapDataStruct, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)",
    values: [UniswapV3SwapperMock.SwapDataStruct, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      UniswapV3SwapperMock.SwapDataStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)",
    values: [
      UniswapV3SwapperMock.SwapDataStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "buildSwapData(address,address,uint256,uint256,bool,bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInputAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOutputAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface UniswapV3SwapperMock extends BaseContract {
  contractName: "UniswapV3SwapperMock";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UniswapV3SwapperMockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    "buildSwapData(address,address,uint256,uint256,bool,bool)"(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[UniswapV3SwapperMock.SwapDataStructOutput]>;

    "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)"(
      tokenInId: PromiseOrValue<BigNumberish>,
      tokenOutId: PromiseOrValue<BigNumberish>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[UniswapV3SwapperMock.SwapDataStructOutput]>;

    getInputAmount(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getOutputAmount(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    swap(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)"(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  "buildSwapData(address,address,uint256,uint256,bool,bool)"(
    tokenIn: PromiseOrValue<string>,
    tokenOut: PromiseOrValue<string>,
    amountIn: PromiseOrValue<BigNumberish>,
    shareIn: PromiseOrValue<BigNumberish>,
    withdrawFromYb: PromiseOrValue<boolean>,
    depositToYb: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<UniswapV3SwapperMock.SwapDataStructOutput>;

  "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)"(
    tokenInId: PromiseOrValue<BigNumberish>,
    tokenOutId: PromiseOrValue<BigNumberish>,
    amountIn: PromiseOrValue<BigNumberish>,
    shareIn: PromiseOrValue<BigNumberish>,
    withdrawFromYb: PromiseOrValue<boolean>,
    depositToYb: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<UniswapV3SwapperMock.SwapDataStructOutput>;

  getInputAmount(
    swapData: UniswapV3SwapperMock.SwapDataStruct,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
    swapData: UniswapV3SwapperMock.SwapDataStruct,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getOutputAmount(
    swapData: UniswapV3SwapperMock.SwapDataStruct,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
    swapData: UniswapV3SwapperMock.SwapDataStruct,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  swap(
    swapData: UniswapV3SwapperMock.SwapDataStruct,
    arg1: PromiseOrValue<BigNumberish>,
    arg2: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)"(
    swapData: UniswapV3SwapperMock.SwapDataStruct,
    arg1: PromiseOrValue<BigNumberish>,
    arg2: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    "buildSwapData(address,address,uint256,uint256,bool,bool)"(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<UniswapV3SwapperMock.SwapDataStructOutput>;

    "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)"(
      tokenInId: PromiseOrValue<BigNumberish>,
      tokenOutId: PromiseOrValue<BigNumberish>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<UniswapV3SwapperMock.SwapDataStructOutput>;

    getInputAmount(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOutputAmount(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountOut: BigNumber; shareOut: BigNumber }
    >;

    "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)"(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountOut: BigNumber; shareOut: BigNumber }
    >;
  };

  filters: {};

  estimateGas: {
    "buildSwapData(address,address,uint256,uint256,bool,bool)"(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)"(
      tokenInId: PromiseOrValue<BigNumberish>,
      tokenOutId: PromiseOrValue<BigNumberish>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getInputAmount(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOutputAmount(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)"(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "buildSwapData(address,address,uint256,uint256,bool,bool)"(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)"(
      tokenInId: PromiseOrValue<BigNumberish>,
      tokenOutId: PromiseOrValue<BigNumberish>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getInputAmount(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOutputAmount(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swap(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)"(
      swapData: UniswapV3SwapperMock.SwapDataStruct,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
