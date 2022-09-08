/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MoveSystem, MoveSystemInterface } from "../MoveSystem";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IWorld",
        name: "_world",
        type: "address",
      },
      {
        internalType: "address",
        name: "_components",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "arguments",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum Direction",
        name: "direction",
        type: "uint8",
      },
    ],
    name: "executeTyped",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610b87380380610b8783398101604081905261002f9161010b565b600280546001600160a01b0319163317905581816001600160a01b0381161561005857806100ba565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa158015610096573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100ba9190610145565b600080546001600160a01b039283166001600160a01b031991821617909155600180549490921693169290921790915550610169915050565b6001600160a01b038116811461010857600080fd5b50565b6000806040838503121561011e57600080fd5b8251610129816100f3565b602084015190925061013a816100f3565b809150509250929050565b60006020828403121561015757600080fd5b8151610162816100f3565b9392505050565b610a0f806101786000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806309c5eabe146100465780634b2857a91461006f5780638da5cb5b14610082575b600080fd5b610059610054366004610678565b61009d565b604051610066919061070d565b60405180910390f35b61005961007d36600461076b565b61051f565b6002546040516001600160a01b039091168152602001610066565b60606000828060200190518101906100b5919061078f565b60008054919250906100f0906001600160a01b03167f7e8e7c9969e0c310afdcb6eda1d64a4b2de16d6efa693ae872ce6315c474871561054f565b600080549192509061012b906001600160a01b03167f6a7cc323a056ef9c1378d529556aaabce7ccad47d7a9f011ed1a41766f374ac761054f565b6040516307fa648b60e11b81523360048201529091506000906001600160a01b03841690630ff4c916906024016040805180830381865afa158015610174573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019891906107ac565b905060008460038111156101ae576101ae6107fb565b036101d5576703782dace9d90000816020018181516101cd9190610827565b905250610259565b60018460038111156101e9576101e96107fb565b03610208576703782dace9d90000816000018181516101cd9190610827565b600284600381111561021c5761021c6107fb565b0361023b576703782dace9d90000816020018181516101cd919061084f565b6703782dace9d9000081600001818151610255919061084f565b9052505b6000826001600160a01b03166331b933b96040518163ffffffff1660e01b8152600401600060405180830381865afa158015610299573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102c19190810190610876565b905060005b81518110156104aa57336001600160a01b03168282815181106102eb576102eb61091c565b602002602001015114610498576000846001600160a01b0316630ff4c91684848151811061031b5761031b61091c565b60200260200101516040518263ffffffff1660e01b815260040161034191815260200190565b608060405180830381865afa15801561035e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103829190610932565b604081015181519192506103959161084f565b84516103aa906706f05b59d3b2000090610827565b1315806103db5750604081015181516103c39190610827565b84516103d8906706f05b59d3b200009061084f565b12155b806104105750806060015181602001516103f5919061084f565b6706f05b59d3b20000856020015161040d9190610827565b13155b8061044557508060600151816020015161042a9190610827565b6706f05b59d3b200008560200151610442919061084f565b12155b6104965760405162461bcd60e51b815260206004820152601760248201527f436f6c6c6973696f6e2077697468206f62737461636c6500000000000000000060448201526064015b60405180910390fd5b505b806104a281610998565b9150506102c6565b50604051633346dcb160e21b815233600482015282516024820152602083015160448201526001600160a01b0385169063cd1b72c490606401600060405180830381600087803b1580156104fd57600080fd5b505af1158015610511573d6000803e3d6000fd5b505050505050505050919050565b60606105498260405160200161053591906109b1565b60405160208183030381529060405261009d565b92915050565b604051637defd0f560e11b81526004810182905260009081906001600160a01b0385169063fbdfa1ea90602401600060405180830381865afa158015610599573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105c19190810190610876565b905080516000036106085760405162461bcd60e51b81526020600482015260116024820152701a59081b9bdd081c9959da5cdd195c9959607a1b604482015260640161048d565b6106298160008151811061061e5761061e61091c565b602002602001015190565b949350505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561067057610670610631565b604052919050565b6000602080838503121561068b57600080fd5b823567ffffffffffffffff808211156106a357600080fd5b818501915085601f8301126106b757600080fd5b8135818111156106c9576106c9610631565b6106db601f8201601f19168501610647565b915080825286848285010111156106f157600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b8181101561073a5785810183015185820160400152820161071e565b506000604082860101526040601f19601f8301168501019250505092915050565b6004811061076857600080fd5b50565b60006020828403121561077d57600080fd5b81356107888161075b565b9392505050565b6000602082840312156107a157600080fd5b81516107888161075b565b6000604082840312156107be57600080fd5b6040516040810181811067ffffffffffffffff821117156107e1576107e1610631565b604052825181526020928301519281019290925250919050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201828112600083128015821682158216171561084757610847610811565b505092915050565b818103600083128015838313168383128216171561086f5761086f610811565b5092915050565b6000602080838503121561088957600080fd5b825167ffffffffffffffff808211156108a157600080fd5b818501915085601f8301126108b557600080fd5b8151818111156108c7576108c7610631565b8060051b91506108d8848301610647565b81815291830184019184810190888411156108f257600080fd5b938501935b83851015610910578451825293850193908501906108f7565b98975050505050505050565b634e487b7160e01b600052603260045260246000fd5b60006080828403121561094457600080fd5b6040516080810181811067ffffffffffffffff8211171561096757610967610631565b8060405250825181526020830151602082015260408301516040820152606083015160608201528091505092915050565b6000600182016109aa576109aa610811565b5060010190565b60208101600483106109d357634e487b7160e01b600052602160045260246000fd5b9190529056fea2646970667358221220e0a84d93d3d5522804bb9e0645dd8d3603c04328a2105f6818483aa0bc32d7d064736f6c63430008100033";

type MoveSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MoveSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MoveSystem__factory extends ContractFactory {
  constructor(...args: MoveSystemConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MoveSystem";
  }

  deploy(
    _world: string,
    _components: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MoveSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<MoveSystem>;
  }
  getDeployTransaction(
    _world: string,
    _components: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  attach(address: string): MoveSystem {
    return super.attach(address) as MoveSystem;
  }
  connect(signer: Signer): MoveSystem__factory {
    return super.connect(signer) as MoveSystem__factory;
  }
  static readonly contractName: "MoveSystem";
  public readonly contractName: "MoveSystem";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MoveSystemInterface {
    return new utils.Interface(_abi) as MoveSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MoveSystem {
    return new Contract(address, _abi, signerOrProvider) as MoveSystem;
  }
}
