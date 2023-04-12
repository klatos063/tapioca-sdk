/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IERC721Enumerable,
  IERC721EnumerableInterface,
} from "../IERC721Enumerable";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
    name: "totalSupply",
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
];

export class IERC721Enumerable__factory {
  static readonly abi = _abi;
  static createInterface(): IERC721EnumerableInterface {
    return new utils.Interface(_abi) as IERC721EnumerableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC721Enumerable {
    return new Contract(address, _abi, signerOrProvider) as IERC721Enumerable;
  }
}
