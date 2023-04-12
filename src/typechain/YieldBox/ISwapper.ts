/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ISwapperInterface extends utils.Interface {
  contractName: "ISwapper";
  functions: {
    "swap(uint256,uint256,address,uint256,uint256)": FunctionFragment;
    "swapExact(uint256,uint256,address,address,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "swap",
    values: [BigNumberish, BigNumberish, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExact",
    values: [
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapExact", data: BytesLike): Result;

  events: {};
}

export interface ISwapper extends BaseContract {
  contractName: "ISwapper";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISwapperInterface;

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
    swap(
      fromAssetId: BigNumberish,
      toAssetId: BigNumberish,
      recipient: string,
      shareToMin: BigNumberish,
      shareFrom: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExact(
      fromAssetId: BigNumberish,
      toAssetId: BigNumberish,
      recipient: string,
      refundTo: string,
      shareFromSupplied: BigNumberish,
      shareToExact: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  swap(
    fromAssetId: BigNumberish,
    toAssetId: BigNumberish,
    recipient: string,
    shareToMin: BigNumberish,
    shareFrom: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExact(
    fromAssetId: BigNumberish,
    toAssetId: BigNumberish,
    recipient: string,
    refundTo: string,
    shareFromSupplied: BigNumberish,
    shareToExact: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    swap(
      fromAssetId: BigNumberish,
      toAssetId: BigNumberish,
      recipient: string,
      shareToMin: BigNumberish,
      shareFrom: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        extraShare: BigNumber;
        shareReturned: BigNumber;
      }
    >;

    swapExact(
      fromAssetId: BigNumberish,
      toAssetId: BigNumberish,
      recipient: string,
      refundTo: string,
      shareFromSupplied: BigNumberish,
      shareToExact: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        shareUsed: BigNumber;
        shareReturned: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    swap(
      fromAssetId: BigNumberish,
      toAssetId: BigNumberish,
      recipient: string,
      shareToMin: BigNumberish,
      shareFrom: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExact(
      fromAssetId: BigNumberish,
      toAssetId: BigNumberish,
      recipient: string,
      refundTo: string,
      shareFromSupplied: BigNumberish,
      shareToExact: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    swap(
      fromAssetId: BigNumberish,
      toAssetId: BigNumberish,
      recipient: string,
      shareToMin: BigNumberish,
      shareFrom: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExact(
      fromAssetId: BigNumberish,
      toAssetId: BigNumberish,
      recipient: string,
      refundTo: string,
      shareFromSupplied: BigNumberish,
      shareToExact: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
