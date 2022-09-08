/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ShootSystem, ShootSystemInterface } from "../ShootSystem";

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
        components: [
          {
            internalType: "int256",
            name: "x",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "y",
            type: "int256",
          },
        ],
        internalType: "struct Coord",
        name: "pointer",
        type: "tuple",
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
  "0x608060405234801561001057600080fd5b50604051610d87380380610d8783398101604081905261002f9161010b565b600280546001600160a01b0319163317905581816001600160a01b0381161561005857806100ba565b816001600160a01b031663ba62fbe46040518163ffffffff1660e01b8152600401602060405180830381865afa158015610096573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100ba9190610145565b600080546001600160a01b039283166001600160a01b031991821617909155600180549490921693169290921790915550610169915050565b6001600160a01b038116811461010857600080fd5b50565b6000806040838503121561011e57600080fd5b8251610129816100f3565b602084015190925061013a816100f3565b809150509250929050565b60006020828403121561015757600080fd5b8151610162816100f3565b9392505050565b610c0f806101786000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806309c5eabe146100465780633d60c76e1461006f5780638da5cb5b14610082575b600080fd5b610059610054366004610840565b61009d565b60405161006691906108d5565b60405180910390f35b61005961007d366004610923565b6104a6565b6002546040516001600160a01b039091168152602001610066565b60606000828060200190518101906100b59190610935565b60008054919250906100f0906001600160a01b03167f6a7cc323a056ef9c1378d529556aaabce7ccad47d7a9f011ed1a41766f374ac76104e8565b600080549192509061012b906001600160a01b03167f7e8e7c9969e0c310afdcb6eda1d64a4b2de16d6efa693ae872ce6315c47487156104e8565b6040516307fa648b60e11b81523360048201526001600160a01b039190911690630ff4c916906024016040805180830381865afa158015610170573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101949190610935565b905060008069152d02c7e14af680000090506000846001600160a01b03166331b933b96040518163ffffffff1660e01b8152600401600060405180830381865afa1580156101e6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261020e9190810190610984565b905060005b815181101561049a57336001600160a01b031682828151811061023857610238610a1e565b60200260200101511461041c576000866001600160a01b0316630ff4c91684848151811061026857610268610a1e565b60200260200101516040518263ffffffff1660e01b815260040161028e91815260200190565b608060405180830381865afa1580156102ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102cf9190610a34565b90506000816040015182600001516102e79190610ab0565b90506000826040015183600001516102ff9190610ad7565b90506000836060015184602001516103179190610ab0565b905060008460600151856020015161032f9190610ad7565b90506103518a600001518b602001518e600001518f6020015188878a886105ce565b8061037757506103778a600001518b602001518e600001518f60200151888789896105ce565b8061039d575061039d8a600001518b602001518e600001518f6020015187868a886105ce565b806103c357506103c38a600001518b602001518e600001518f60200151878689896105ce565b15610416576040805180820190915285518152855160208201526000906103ea908c610744565b9050888112156104145780985087878151811061040957610409610a1e565b602002602001015199505b505b50505050505b8269152d02c7e14af68000001461048857604051634cc8221560e01b8152600481018590526001600160a01b03871690634cc8221590602401600060405180830381600087803b15801561046f57600080fd5b505af1158015610483573d6000803e3d6000fd5b505050505b8061049281610aff565b915050610213565b50505050505050919050565b60606104e2826040516020016104ce9190813581526020918201359181019190915260400190565b60405160208183030381529060405261009d565b92915050565b604051637defd0f560e11b81526004810182905260009081906001600160a01b0385169063fbdfa1ea90602401600060405180830381865afa158015610532573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261055a9190810190610984565b905080516000036105a55760405162461bcd60e51b81526020600482015260116024820152701a59081b9bdd081c9959da5cdd195c9959607a1b604482015260640160405180910390fd5b6105c6816000815181106105bb576105bb610a1e565b602002602001015190565b949350505050565b6000806105db8988610ab0565b6105e58786610ab0565b6105ef9190610b18565b6105f98685610ab0565b6106038c8b610ab0565b61060d9190610b18565b6106179190610ab0565b90508060000361062b576000915050610738565b600081670de0b6b3a76400006106418c87610ab0565b61064b888b610ab0565b6106559190610b18565b61065f8e89610ab0565b6106698a89610ab0565b6106739190610b18565b61067d9190610ad7565b6106879190610b18565b6106919190610b9d565b9050600082670de0b6b3a76400006106a98d88610ab0565b6106b38f8e610ab0565b6106bd9190610b18565b6106c78f8a610ab0565b8c8f6106d39190610ab0565b6106dd9190610b18565b6106e79190610ad7565b6106f19190610b18565b6106fb9190610b9d565b90508160001280156107145750670de0b6b3a764000082125b801561073257508060001280156107325750670de0b6b3a764000081125b93505050505b98975050505050505050565b8051825160009182916107579190610ab0565b905060008360200151856020015161076f9190610ab0565b905061079761077e8280610b18565b6107888480610b18565b6107929190610ad7565b6107a0565b95945050505050565b60008060026107b0846001610ad7565b6107ba9190610b9d565b90508291505b818112156107f3579050806002816107d88186610b9d565b6107e29190610ad7565b6107ec9190610b9d565b90506107c0565b50919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610838576108386107f9565b604052919050565b6000602080838503121561085357600080fd5b823567ffffffffffffffff8082111561086b57600080fd5b818501915085601f83011261087f57600080fd5b813581811115610891576108916107f9565b6108a3601f8201601f1916850161080f565b915080825286848285010111156108b957600080fd5b8084840185840137600090820190930192909252509392505050565b600060208083528351808285015260005b81811015610902578581018301518582016040015282016108e6565b506000604082860101526040601f19601f8301168501019250505092915050565b6000604082840312156107f357600080fd5b60006040828403121561094757600080fd5b6040516040810181811067ffffffffffffffff8211171561096a5761096a6107f9565b604052825181526020928301519281019290925250919050565b6000602080838503121561099757600080fd5b825167ffffffffffffffff808211156109af57600080fd5b818501915085601f8301126109c357600080fd5b8151818111156109d5576109d56107f9565b8060051b91506109e684830161080f565b8181529183018401918481019088841115610a0057600080fd5b938501935b8385101561073857845182529385019390850190610a05565b634e487b7160e01b600052603260045260246000fd5b600060808284031215610a4657600080fd5b6040516080810181811067ffffffffffffffff82111715610a6957610a696107f9565b8060405250825181526020830151602082015260408301516040820152606083015160608201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b8181036000831280158383131683831282161715610ad057610ad0610a9a565b5092915050565b8082018281126000831280158216821582161715610af757610af7610a9a565b505092915050565b600060018201610b1157610b11610a9a565b5060010190565b60006001600160ff1b0381841382841380821686840486111615610b3e57610b3e610a9a565b600160ff1b6000871282811687830589121615610b5d57610b5d610a9a565b60008712925087820587128484161615610b7957610b79610a9a565b87850587128184161615610b8f57610b8f610a9a565b505050929093029392505050565b600082610bba57634e487b7160e01b600052601260045260246000fd5b600160ff1b821460001984141615610bd457610bd4610a9a565b50059056fea2646970667358221220c3bc1bd980a5afd0210d2b9db0851a16dea46c12c70953565baa7d381d3e163364736f6c63430008100033";

type ShootSystemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShootSystemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ShootSystem__factory extends ContractFactory {
  constructor(...args: ShootSystemConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ShootSystem";
  }

  deploy(
    _world: string,
    _components: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ShootSystem> {
    return super.deploy(
      _world,
      _components,
      overrides || {}
    ) as Promise<ShootSystem>;
  }
  getDeployTransaction(
    _world: string,
    _components: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_world, _components, overrides || {});
  }
  attach(address: string): ShootSystem {
    return super.attach(address) as ShootSystem;
  }
  connect(signer: Signer): ShootSystem__factory {
    return super.connect(signer) as ShootSystem__factory;
  }
  static readonly contractName: "ShootSystem";
  public readonly contractName: "ShootSystem";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShootSystemInterface {
    return new utils.Interface(_abi) as ShootSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShootSystem {
    return new Contract(address, _abi, signerOrProvider) as ShootSystem;
  }
}
