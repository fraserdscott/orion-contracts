/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface LibQueryInterface extends utils.Interface {
  contractName: "LibQuery";
  functions: {
    "arrayToList(uint256[])": FunctionFragment;
    "listToArray(bytes32,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "arrayToList",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "listToArray",
    values: [BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "arrayToList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "listToArray",
    data: BytesLike
  ): Result;

  events: {};
}

export interface LibQuery extends BaseContract {
  contractName: "LibQuery";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LibQueryInterface;

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
    arrayToList(
      array: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[string] & { list: string }>;

    listToArray(
      list: BytesLike,
      length: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { array: BigNumber[] }>;
  };

  arrayToList(
    array: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<string>;

  listToArray(
    list: BytesLike,
    length: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  callStatic: {
    arrayToList(
      array: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<string>;

    listToArray(
      list: BytesLike,
      length: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    arrayToList(
      array: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    listToArray(
      list: BytesLike,
      length: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    arrayToList(
      array: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    listToArray(
      list: BytesLike,
      length: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
