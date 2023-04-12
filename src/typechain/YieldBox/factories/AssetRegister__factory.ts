/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AssetRegister, AssetRegisterInterface } from "../AssetRegister";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
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
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAsset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "enum TokenType",
        name: "tokenType",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
    ],
    name: "AssetRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [],
    name: "assetCount",
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
    name: "assets",
    outputs: [
      {
        internalType: "enum TokenType",
        name: "tokenType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
        internalType: "address[]",
        name: "owners",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum TokenType",
        name: "",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "contract IStrategy",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ids",
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
    ],
    name: "isApprovedForAsset",
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
    inputs: [
      {
        internalType: "enum TokenType",
        name: "tokenType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "registerAsset",
    outputs: [
      {
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060408051608081018252600480825260006020830181905292820183905260608201839052600580546001808201835591909452825160039094027f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0018054939490939092849260ff1990921691908490811115610091576100916100e7565b021790555060208201518154610100600160a81b0319166101006001600160a01b039283160217825560408301516001830180546001600160a01b031916919092161790556060909101516002909101556100fd565b634e487b7160e01b600052602160045260246000fd5b611f088061010c6000396000f3fe608060405234801561001057600080fd5b50600436106100f45760003560e01c8063a75fcb1e11610097578063cf35bdd011610066578063cf35bdd014610284578063e985e9c5146102a7578063eafe7a74146102d2578063f242432a146102da57600080fd5b8063a75fcb1e1461020a578063b061db941461023e578063b8489fb514610251578063bd85b0391461026457600080fd5b80632d4e1d52116100d35780632d4e1d52146101885780632eb2c2d6146101c25780634e1273f4146101d7578063a22cb465146101f757600080fd5b8062fdd58e146100f957806301ffc9a7146101375780630e89341c1461015a575b600080fd5b610124610107366004611646565b600160209081526000928352604080842090915290825290205481565b6040519081526020015b60405180910390f35b61014a6101453660046116a0565b6102ed565b604051901515815260200161012e565b61017b6101683660046116c4565b5060408051602081019091526000815290565b60405161012e91906116dd565b61012461019636600461175d565b600460209081526000948552604080862082529385528385208152918452828420909152825290205481565b6101d56101d036600461183c565b6103d2565b005b6101ea6101e53660046118fb565b6105bd565b60405161012e9190611967565b6101d56102053660046119c0565b610741565b61014a6102183660046119f5565b600360209081526000938452604080852082529284528284209052825290205460ff1681565b61012461024c36600461175d565b6107d6565b6101d561025f366004611a36565b6108a0565b6101246102723660046116c4565b60026020526000908152604090205481565b6102976102923660046116c4565b6109af565b60405161012e9493929190611aa3565b61014a6102b5366004611b0e565b600060208181529281526040808220909352908152205460ff1681565b600554610124565b6101d56102e8366004611b47565b610a06565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000148061038057507fd9b67a26000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b806103cc57507f0e89341c000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b848314610440576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f455243313135353a204c656e677468206d69736d61746368000000000000000060448201526064015b60405180910390fd5b61044b886000610b7b565b610459888888888888610c44565b73ffffffffffffffffffffffffffffffffffffffff87163b156105b3576040517fbc197c81000000000000000000000000000000000000000000000000000000008082529073ffffffffffffffffffffffffffffffffffffffff89169063bc197c81906104d89033908d908c908c908c908c908c908c90600401611c5b565b602060405180830381600087803b1580156104f257600080fd5b505af1158015610506573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052a9190611ccc565b7fffffffff0000000000000000000000000000000000000000000000000000000016146105b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f57726f6e672072657475726e2076616c756500000000000000000000000000006044820152606401610437565b5050505050505050565b606083828114610629576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f455243313135353a204c656e677468206d69736d6174636800000000000000006044820152606401610437565b8067ffffffffffffffff81111561064257610642611ce9565b60405190808252806020026020018201604052801561066b578160200160208202803683370190505b50915060005b81811015610737576001600088888481811061068f5761068f611d18565b90506020020160208101906106a49190611d47565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008686848181106106f2576106f2611d18565b9050602002013581526020019081526020016000205483828151811061071a5761071a611d18565b60209081029190910101528061072f81611d93565b915050610671565b5050949350505050565b3360008181526020818152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b600060018560048111156107ec576107ec611a74565b14806108095750600285600481111561080757610807611a74565b145b806108255750600385600481111561082357610823611a74565b145b61088b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f41737365744d616e616765723a2063616e6e6f7420616464204e6174697665006044820152606401610437565b61089785858585610e37565b95945050505050565b600554821061090b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f41737365744d616e616765723a206173736574206e6f742076616c69640000006044820152606401610437565b33600081815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff881680855290835281842087855283529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168615159081179091558151878152928301529192917f6aceb1b079beeabdd8c2f30cd221ca27ec52e9d0aef6bb229cc175cf15dd778b910160405180910390a3505050565b600581815481106109bf57600080fd5b600091825260209091206003909102018054600182015460029092015460ff8216935061010090910473ffffffffffffffffffffffffffffffffffffffff90811692169084565b610a11866000610b7b565b610a1d868686866114bc565b73ffffffffffffffffffffffffffffffffffffffff85163b15610b73576040517ff23a6e61000000000000000000000000000000000000000000000000000000008082529073ffffffffffffffffffffffffffffffffffffffff87169063f23a6e6190610a989033908b908a908a908a908a90600401611dcc565b602060405180830381600087803b158015610ab257600080fd5b505af1158015610ac6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aea9190611ccc565b7fffffffff000000000000000000000000000000000000000000000000000000001614610b73576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f57726f6e672072657475726e2076616c756500000000000000000000000000006044820152606401610437565b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216331480610b9c5750805b80610bda575073ffffffffffffffffffffffffffffffffffffffff821660009081526020818152604080832033845290915290205460ff1615156001145b610c40576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5472616e73666572206e6f7420616c6c6f7765640000000000000000000000006044820152606401610437565b5050565b73ffffffffffffffffffffffffffffffffffffffff8516610cc1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f4e6f2030206164647265737300000000000000000000000000000000000000006044820152606401610437565b8260005b81811015610dab576000868683818110610ce157610ce1611d18565b9050602002013590506000858584818110610cfe57610cfe611d18565b73ffffffffffffffffffffffffffffffffffffffff8d16600090815260016020908152604080832088845282528220805493909102949094013594508493925090610d4a908490611e1e565b909155505073ffffffffffffffffffffffffffffffffffffffff8916600090815260016020908152604080832085845290915281208054839290610d8f908490611e35565b9250508190555050508080610da390611d93565b915050610cc5565b508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb88888888604051610e269493929190611e4d565b60405180910390a450505050505050565b600060046000866004811115610e4f57610e4f611a74565b6004811115610e6057610e60611a74565b81526020808201929092526040908101600090812073ffffffffffffffffffffffffffffffffffffffff8089168352908452828220908716825283528181208582529092529020549050806114b457811580610ece57506001856004811115610ecb57610ecb611a74565b14155b610f34576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f5969656c64426f783a204e6f20746f6b656e496420666f7220455243323000006044820152606401610437565b6000856004811115610f4857610f48611a74565b148061112d57508273ffffffffffffffffffffffffffffffffffffffff166330fa738c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610f9557600080fd5b505afa158015610fa9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fcd9190611e7f565b6004811115610fde57610fde611a74565b856004811115610ff057610ff0611a74565b1480156110a557508273ffffffffffffffffffffffffffffffffffffffff1663f6b4dfb46040518163ffffffff1660e01b815260040160206040518083038186803b15801561103e57600080fd5b505afa158015611052573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110769190611e9c565b73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16145b801561112d57508273ffffffffffffffffffffffffffffffffffffffff166317d70f7c6040518163ffffffff1660e01b815260040160206040518083038186803b1580156110f257600080fd5b505afa158015611106573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061112a9190611eb9565b82145b611193576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f5969656c64426f783a205374726174656779206d69736d6174636800000000006044820152606401610437565b60008560048111156111a7576111a7611a74565b1480156111c8575073ffffffffffffffffffffffffffffffffffffffff8416155b806111e9575073ffffffffffffffffffffffffffffffffffffffff84163b15155b61124f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f5969656c64426f783a204e6f74206120746f6b656e00000000000000000000006044820152606401610437565b60058054905090506005604051806080016040528087600481111561127657611276611a74565b815273ffffffffffffffffffffffffffffffffffffffff808816602080840191909152908716604083015260609091018590528254600181810185556000948552919093208251600390940201805492939092909183917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169083600481111561130257611302611a74565b0217905550602082015181547fffffffffffffffffffffff0000000000000000000000000000000000000000ff1661010073ffffffffffffffffffffffffffffffffffffffff9283160217825560408301516001830180547fffffffffffffffffffffffff00000000000000000000000000000000000000001691909216179055606090910151600290910155806004600087828111156113a5576113a5611a74565b60048111156113b6576113b6611a74565b81526020808201929092526040908101600090812073ffffffffffffffffffffffffffffffffffffffff89811683529084528282209088168252835281812086825283528181209390935580518281529182019290925282917f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b910160405180910390a2818473ffffffffffffffffffffffffffffffffffffffff1686600481111561146457611464611a74565b6040805173ffffffffffffffffffffffffffffffffffffffff88168152602081018690527f30605d4cd099421ed12ca1ba642a1ea2659f679b5cdd0ccd032586640eeaff43910160405180910390a45b949350505050565b73ffffffffffffffffffffffffffffffffffffffff8316611539576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f4e6f2030206164647265737300000000000000000000000000000000000000006044820152606401610437565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260016020908152604080832085845290915281208054839290611579908490611e1e565b909155505073ffffffffffffffffffffffffffffffffffffffff83166000908152600160209081526040808320858452909152812080548392906115be908490611e35565b9091555050604080518381526020810183905273ffffffffffffffffffffffffffffffffffffffff808616929087169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a450505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461164357600080fd5b50565b6000806040838503121561165957600080fd5b823561166481611621565b946020939093013593505050565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461164357600080fd5b6000602082840312156116b257600080fd5b81356116bd81611672565b9392505050565b6000602082840312156116d657600080fd5b5035919050565b600060208083528351808285015260005b8181101561170a578581018301518582016040015282016116ee565b8181111561171c576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b6005811061164357600080fd5b6000806000806080858703121561177357600080fd5b843561177e81611750565b9350602085013561178e81611621565b9250604085013561179e81611621565b9396929550929360600135925050565b60008083601f8401126117c057600080fd5b50813567ffffffffffffffff8111156117d857600080fd5b6020830191508360208260051b85010111156117f357600080fd5b9250929050565b60008083601f84011261180c57600080fd5b50813567ffffffffffffffff81111561182457600080fd5b6020830191508360208285010111156117f357600080fd5b60008060008060008060008060a0898b03121561185857600080fd5b883561186381611621565b9750602089013561187381611621565b9650604089013567ffffffffffffffff8082111561189057600080fd5b61189c8c838d016117ae565b909850965060608b01359150808211156118b557600080fd5b6118c18c838d016117ae565b909650945060808b01359150808211156118da57600080fd5b506118e78b828c016117fa565b999c989b5096995094979396929594505050565b6000806000806040858703121561191157600080fd5b843567ffffffffffffffff8082111561192957600080fd5b611935888389016117ae565b9096509450602087013591508082111561194e57600080fd5b5061195b878288016117ae565b95989497509550505050565b6020808252825182820181905260009190848201906040850190845b8181101561199f57835183529284019291840191600101611983565b50909695505050505050565b803580151581146119bb57600080fd5b919050565b600080604083850312156119d357600080fd5b82356119de81611621565b91506119ec602084016119ab565b90509250929050565b600080600060608486031215611a0a57600080fd5b8335611a1581611621565b92506020840135611a2581611621565b929592945050506040919091013590565b600080600060608486031215611a4b57600080fd5b8335611a5681611621565b925060208401359150611a6b604085016119ab565b90509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6080810160058610611ade577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b94815273ffffffffffffffffffffffffffffffffffffffff93841660208201529190921660408201526060015290565b60008060408385031215611b2157600080fd5b8235611b2c81611621565b91506020830135611b3c81611621565b809150509250929050565b60008060008060008060a08789031215611b6057600080fd5b8635611b6b81611621565b95506020870135611b7b81611621565b94506040870135935060608701359250608087013567ffffffffffffffff811115611ba557600080fd5b611bb189828a016117fa565b979a9699509497509295939492505050565b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115611bf557600080fd5b8260051b8083602087013760009401602001938452509192915050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600073ffffffffffffffffffffffffffffffffffffffff808b168352808a1660208401525060a06040830152611c9560a08301888a611bc3565b8281036060840152611ca8818789611bc3565b90508281036080840152611cbd818587611c12565b9b9a5050505050505050505050565b600060208284031215611cde57600080fd5b81516116bd81611672565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215611d5957600080fd5b81356116bd81611621565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611dc557611dc5611d64565b5060010190565b600073ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015284606083015260a06080830152611e1260a083018486611c12565b98975050505050505050565b600082821015611e3057611e30611d64565b500390565b60008219821115611e4857611e48611d64565b500190565b604081526000611e61604083018688611bc3565b8281036020840152611e74818587611bc3565b979650505050505050565b600060208284031215611e9157600080fd5b81516116bd81611750565b600060208284031215611eae57600080fd5b81516116bd81611621565b600060208284031215611ecb57600080fd5b505191905056fea2646970667358221220ac04fccbf8983e3b080d1d0b998a5fd0243a3284beca5a4d81d489dc1065711964736f6c63430008090033";

type AssetRegisterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetRegisterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetRegister__factory extends ContractFactory {
  constructor(...args: AssetRegisterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AssetRegister";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AssetRegister> {
    return super.deploy(overrides || {}) as Promise<AssetRegister>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AssetRegister {
    return super.attach(address) as AssetRegister;
  }
  connect(signer: Signer): AssetRegister__factory {
    return super.connect(signer) as AssetRegister__factory;
  }
  static readonly contractName: "AssetRegister";
  public readonly contractName: "AssetRegister";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetRegisterInterface {
    return new utils.Interface(_abi) as AssetRegisterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetRegister {
    return new Contract(address, _abi, signerOrProvider) as AssetRegister;
  }
}
