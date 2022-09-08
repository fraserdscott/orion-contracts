/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PositionComponent,
  PositionComponentInterface,
} from "../PositionComponent";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "world",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "writer",
        type: "address",
      },
    ],
    name: "authorizeWriter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntities",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
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
        name: "value",
        type: "tuple",
      },
    ],
    name: "getEntitiesWithValue",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
    ],
    name: "getEntitiesWithValue",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "getRawValue",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSchema",
    outputs: [
      {
        internalType: "string[]",
        name: "keys",
        type: "string[]",
      },
      {
        internalType: "enum LibTypes.SchemaValue[]",
        name: "values",
        type: "uint8[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "getValue",
    outputs: [
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
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "has",
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
    inputs: [],
    name: "id",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "indexer",
        type: "address",
      },
    ],
    name: "registerIndexer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_world",
        type: "address",
      },
    ],
    name: "registerWorld",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
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
        name: "value",
        type: "tuple",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "world",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "writeAccess",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620020673803806200206783398101604081905262000034916200021a565b807f7e8e7c9969e0c310afdcb6eda1d64a4b2de16d6efa693ae872ce6315c474871560001c6040516200006790620001fe565b604051809103906000f08015801562000084573d6000803e3d6000fd5b50600380546001600160a01b0319166001600160a01b0392909216919091179055604051620000b3906200020c565b604051809103906000f080158015620000d0573d6000803e3d6000fd5b50600580546001600160a01b03199081166001600160a01b03938416179091556001805433921682178155600091825260026020526040909120805460ff1916909117905560078290558216156200012d576200012d8262000136565b5050506200024c565b6001546001600160a01b03163314620001825760405162461bcd60e51b815260206004820152600a60248201526927a7262cafa7aba722a960b11b604482015260640160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600754604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b158015620001e257600080fd5b505af1158015620001f7573d6000803e3d6000fd5b5050505050565b6103df80620017fd83390190565b61048b8062001bdc83390190565b6000602082840312156200022d57600080fd5b81516001600160a01b03811681146200024557600080fd5b9392505050565b6115a1806200025c6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80638b282947116100a2578063b361be4611610071578063b361be4614610273578063b8bc073d14610286578063cccf7a8e146102a6578063cd1b72c4146102b9578063f2fde38b146102cc57600080fd5b80638b282947146102255780638da5cb5b146102385780639d2c76b414610249578063af640d0f1461025c57600080fd5b80634fef6a38116100e95780634fef6a38146101a35780636996cb07146101b65780636b122fe0146101c957806375c0669c146101df578063861eb905146101f257600080fd5b80630ff4c9161461011b57806330b67baa1461014e57806331b933b9146101795780634cc822151461018e575b600080fd5b61012e610129366004610e67565b6102df565b604080518251815260209283015192810192909252015b60405180910390f35b600054610161906001600160a01b031681565b6040516001600160a01b039091168152602001610145565b610181610315565b6040516101459190610e80565b6101a161019c366004610e67565b61038c565b005b6101a16101b1366004610ec4565b610661565b6101816101c4366004610f0c565b6106af565b6101d16106eb565b604051610145929190610f84565b6101a16101ed366004610ec4565b610838565b610215610200366004610ec4565b60026020526000908152604090205460ff1681565b6040519015158152602001610145565b6101a16102333660046110f3565b6108b9565b6001546001600160a01b0316610161565b6101a1610257366004610ec4565b610b67565b61026560075481565b604051908152602001610145565b61018161028136600461113a565b610bdb565b610299610294366004610e67565b610c55565b6040516101459190611177565b6102156102b4366004610e67565b610cf7565b6101a16102c736600461118a565b610d65565b6101a16102da366004610ec4565b610da4565b60408051808201909152600080825260208201526102fc82610c55565b80602001905181019061030f91906111b7565b92915050565b60035460408051631043567360e21b815290516060926001600160a01b03169163410d59cc9160048083019260009291908290030181865afa15801561035f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103879190810190611206565b905090565b3360009081526002602052604090205460ff166103c45760405162461bcd60e51b81526004016103bb906112ac565b60405180910390fd5b6005546000828152600460205260409081902090516001600160a01b03909216916385edea13916103f491611305565b60405190819003812060e083901b6001600160e01b03191682526004820152602401602060405180830381865afa158015610433573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610457919061137b565b1561065e576005546000828152600460205260409081902090516001600160a01b0390921691636526db7a9161048c91611305565b60405190819003812060e083901b6001600160e01b0319168252600482015260248101849052604401600060405180830381600087803b1580156104cf57600080fd5b505af11580156104e3573d6000803e3d6000fd5b5050600354604051634cc8221560e01b8152600481018590526001600160a01b039091169250634cc822159150602401600060405180830381600087803b15801561052d57600080fd5b505af1158015610541573d6000803e3d6000fd5b505050600082815260046020526040812061055d925090610e19565b60005b6006548110156105f7576006818154811061057d5761057d611394565b600091825260209091200154604051634cc8221560e01b8152600481018490526001600160a01b0390911690634cc8221590602401600060405180830381600087803b1580156105cc57600080fd5b505af11580156105e0573d6000803e3d6000fd5b5050505080806105ef906113aa565b915050610560565b50600054604051636c01832560e11b8152306004820152602481018390526001600160a01b039091169063d803064a906044015b600060405180830381600087803b15801561064557600080fd5b505af1158015610659573d6000803e3d6000fd5b505050505b50565b6001546001600160a01b0316331461068b5760405162461bcd60e51b81526004016103bb906113d1565b6001600160a01b03166000908152600260205260409020805460ff19166001179055565b606061030f826040516020016106d79190813581526020918201359181019190915260400190565b604051602081830303815290604052610bdb565b6040805160028082526060828101909352829190816020015b60608152602001906001900390816107045750506040805160028082526060820183529294509190602083019080368337019050509050604051806040016040528060018152602001600f60fb1b8152508260008151811061076857610768611394565b602002602001018190525060068160008151811061078857610788611394565b6020026020010190601f8111156107a1576107a1610f6e565b9081601f8111156107b4576107b4610f6e565b81525050604051806040016040528060018152602001607960f81b815250826001815181106107e5576107e5611394565b602002602001018190525060068160018151811061080557610805611394565b6020026020010190601f81111561081e5761081e610f6e565b9081601f81111561083157610831610f6e565b9052509091565b3360009081526002602052604090205460ff166108675760405162461bcd60e51b81526004016103bb906112ac565b600680546001810182556000919091527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0180546001600160a01b0319166001600160a01b0392909216919091179055565b3360009081526002602052604090205460ff166108e85760405162461bcd60e51b81526004016103bb906112ac565b600354604051630801f16960e11b8152600481018490526001600160a01b0390911690631003e2d290602401600060405180830381600087803b15801561092e57600080fd5b505af1158015610942573d6000803e3d6000fd5b50506005546000858152600460205260409081902090516001600160a01b039092169350636526db7a925061097691611305565b60405190819003812060e083901b6001600160e01b0319168252600482015260248101859052604401600060405180830381600087803b1580156109b957600080fd5b505af11580156109cd573d6000803e3d6000fd5b505050600083815260046020526040902090506109ea8282611440565b506005548151602083012060405163771602f760e01b81526001600160a01b039092169163771602f791610a2b918690600401918252602082015260400190565b600060405180830381600087803b158015610a4557600080fd5b505af1158015610a59573d6000803e3d6000fd5b5050505060005b600654811015610afc5760068181548110610a7d57610a7d611394565b6000918252602090912001546040516242d70760e31b81526001600160a01b0390911690630216b83890610ab79086908690600401611500565b600060405180830381600087803b158015610ad157600080fd5b505af1158015610ae5573d6000803e3d6000fd5b505050508080610af4906113aa565b915050610a60565b506000546040516302bc413960e61b81526001600160a01b039091169063af104e4090610b3190309086908690600401611519565b600060405180830381600087803b158015610b4b57600080fd5b505af1158015610b5f573d6000803e3d6000fd5b505050505050565b6001546001600160a01b03163314610b915760405162461bcd60e51b81526004016103bb906113d1565b600080546001600160a01b0319166001600160a01b038316908117909155600754604051630f30347760e41b8152306004820152602481019190915263f30347709060440161062b565b60055481516020830120604051631e5b17a560e21b815260048101919091526060916001600160a01b03169063796c5e9490602401600060405180830381865afa158015610c2d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261030f9190810190611206565b6000818152600460205260409020805460609190610c72906112d1565b80601f0160208091040260200160405190810160405280929190818152602001828054610c9e906112d1565b8015610ceb5780601f10610cc057610100808354040283529160200191610ceb565b820191906000526020600020905b815481529060010190602001808311610cce57829003601f168201915b50505050509050919050565b600354604051636667bd4760e11b8152600481018390526000916001600160a01b03169063cccf7a8e90602401602060405180830381865afa158015610d41573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030f9190611549565b610da08282604051602001610d8c9190813581526020918201359181019190915260400190565b6040516020818303038152906040526108b9565b5050565b6001546001600160a01b03163314610dce5760405162461bcd60e51b81526004016103bb906113d1565b33600090815260026020526040808220805460ff19908116909155600180546001600160a01b0319166001600160a01b03959095169485178155938352912080549091169091179055565b508054610e25906112d1565b6000825580601f10610e35575050565b601f01602090049060005260206000209081019061065e91905b80821115610e635760008155600101610e4f565b5090565b600060208284031215610e7957600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b81811015610eb857835183529284019291840191600101610e9c565b50909695505050505050565b600060208284031215610ed657600080fd5b81356001600160a01b0381168114610eed57600080fd5b9392505050565b600060408284031215610f0657600080fd5b50919050565b600060408284031215610f1e57600080fd5b610eed8383610ef4565b6000815180845260005b81811015610f4e57602081850181015186830182015201610f32565b506000602082860101526020601f19601f83011685010191505092915050565b634e487b7160e01b600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b83811015610fdb57605f19888703018552610fc9868351610f28565b95509382019390820190600101610fad565b50508584038187015286518085528782019482019350915060005b8281101561102f57845182811061101d57634e487b7160e01b600052602160045260246000fd5b84529381019392810192600101610ff6565b5091979650505050505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561107b5761107b61103c565b604052919050565b600082601f83011261109457600080fd5b813567ffffffffffffffff8111156110ae576110ae61103c565b6110c1601f8201601f1916602001611052565b8181528460208386010111156110d657600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561110657600080fd5b82359150602083013567ffffffffffffffff81111561112457600080fd5b61113085828601611083565b9150509250929050565b60006020828403121561114c57600080fd5b813567ffffffffffffffff81111561116357600080fd5b61116f84828501611083565b949350505050565b602081526000610eed6020830184610f28565b6000806060838503121561119d57600080fd5b823591506111ae8460208501610ef4565b90509250929050565b6000604082840312156111c957600080fd5b6040516040810181811067ffffffffffffffff821117156111ec576111ec61103c565b604052825181526020928301519281019290925250919050565b6000602080838503121561121957600080fd5b825167ffffffffffffffff8082111561123157600080fd5b818501915085601f83011261124557600080fd5b8151818111156112575761125761103c565b8060051b9150611268848301611052565b818152918301840191848101908884111561128257600080fd5b938501935b838510156112a057845182529385019390850190611287565b98975050505050505050565b6020808252600b908201526a27a7262cafaba924aa22a960a91b604082015260600190565b600181811c908216806112e557607f821691505b602082108103610f0657634e487b7160e01b600052602260045260246000fd5b6000808354611313816112d1565b6001828116801561132b57600181146113405761136f565b60ff198416875282151583028701945061136f565b8760005260208060002060005b858110156113665781548a82015290840190820161134d565b50505082870194505b50929695505050505050565b60006020828403121561138d57600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b6000600182016113ca57634e487b7160e01b600052601160045260246000fd5b5060010190565b6020808252600a908201526927a7262cafa7aba722a960b11b604082015260600190565b601f82111561143b57600081815260208120601f850160051c8101602086101561141c5750805b601f850160051c820191505b81811015610b5f57828155600101611428565b505050565b815167ffffffffffffffff81111561145a5761145a61103c565b61146e8161146884546112d1565b846113f5565b602080601f8311600181146114a3576000841561148b5750858301515b600019600386901b1c1916600185901b178555610b5f565b600085815260208120601f198616915b828110156114d2578886015182559484019460019091019084016114b3565b50858210156114f05787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b82815260406020820152600061116f6040830184610f28565b60018060a01b03841681528260208201526060604082015260006115406060830184610f28565b95945050505050565b60006020828403121561155b57600080fd5b81518015158114610eed57600080fdfea26469706673582212203c045caada0e4c60454cd353ea0c909f14de63107ef2f9233a81f13824c4fb6764736f6c63430008100033608060405234801561001057600080fd5b506103bf806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80631003e2d21461005c578063410d59cc146100715780634cc822151461008f578063949d225d146100a2578063cccf7a8e146100b3575b600080fd5b61006f61006a3660046102d9565b6100d6565b005b610079610128565b60405161008691906102f2565b60405180910390f35b61006f61009d3660046102d9565b610180565b600054604051908152602001610086565b6100c66100c13660046102d9565b610276565b6040519015158152602001610086565b6100df81610276565b156100e75750565b600080548282526001602081905260408320829055810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630155565b6060600080548060200260200160405190810160405280929190818152602001828054801561017657602002820191906000526020600020905b815481526020019060010190808311610162575b5050505050905090565b61018981610276565b6101905750565b600080546101a090600190610336565b815481106101b0576101b061035d565b906000526020600020015460006001600084815260200190815260200160002054815481106101e1576101e161035d565b600091825260208083209091019290925582815260019182905260408120548154909291908190849081106102185761021861035d565b90600052602060002001548152602001908152602001600020819055506001600082815260200190815260200160002060009055600080548061025d5761025d610373565b6001900381819060005260206000200160009055905550565b60008054810361028857506000919050565b60008281526001602052604081205490036102c45781600080815481106102b1576102b161035d565b9060005260206000200154149050919050565b50600090815260016020526040902054151590565b6000602082840312156102eb57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b8181101561032a5783518352928401929184019160010161030e565b50909695505050505050565b8181038181111561035757634e487b7160e01b600052601160045260246000fd5b92915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea26469706673582212205a41463ee94c5d76095b43f62ab3d50ef2ea707f4aa6908568ec10c04bf1ddde64736f6c63430008100033608060405234801561001057600080fd5b5061046b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80636526db7a1461005c578063771602f714610071578063796c5e941461008457806385edea13146100ad578063a0265ff8146100db575b600080fd5b61006f61006a366004610369565b6100fe565b005b61006f61007f366004610369565b61022d565b61009761009236600461038b565b610276565b6040516100a491906103a4565b60405180910390f35b6100cd6100bb36600461038b565b60009081526020819052604090205490565b6040519081526020016100a4565b6100ee6100e9366004610369565b6102d6565b60405190151581526020016100a4565b61010882826102d6565b610110575050565b6000828152602081905260409020805461012c906001906103e8565b8154811061013c5761013c610409565b6000918252602080832090910154848352828252604080842060018452818520868652909352909220548154811061017657610176610409565b6000918252602080832090910192909255838152600182526040808220848352808452818320548684528385529183208584529381905283549193909291849081106101c4576101c4610409565b600091825260208083209091015483528281019390935260409182018120939093558483526001825280832084845282528083208390558483529082905290208054806102135761021361041f565b600190038181906000526020600020016000905590555050565b61023782826102d6565b15610240575050565b60009182526020828152604080842080546001808552838720868852855292862081905585845291820181558452922090910155565b600081815260208181526040918290208054835181840281018401909452808452606093928301828280156102ca57602002820191906000526020600020905b8154815260200190600101908083116102b6575b50505050509050919050565b60008281526020819052604081205481036102f357506000610363565b60008381526001602090815260408083208584529091528120549003610345576000838152602081905260408120805484929061033257610332610409565b9060005260206000200154149050610363565b50600082815260016020908152604080832084845290915290205415155b92915050565b6000806040838503121561037c57600080fd5b50508035926020909101359150565b60006020828403121561039d57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156103dc578351835292840192918401916001016103c0565b50909695505050505050565b8181038181111561036357634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea2646970667358221220b0c5179b46cd38b54fb5e2f8e092dc34365bdcb0f601f6262cffd8fb46e9757764736f6c63430008100033";

type PositionComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PositionComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PositionComponent__factory extends ContractFactory {
  constructor(...args: PositionComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "PositionComponent";
  }

  deploy(
    world: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PositionComponent> {
    return super.deploy(world, overrides || {}) as Promise<PositionComponent>;
  }
  getDeployTransaction(
    world: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, overrides || {});
  }
  attach(address: string): PositionComponent {
    return super.attach(address) as PositionComponent;
  }
  connect(signer: Signer): PositionComponent__factory {
    return super.connect(signer) as PositionComponent__factory;
  }
  static readonly contractName: "PositionComponent";
  public readonly contractName: "PositionComponent";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PositionComponentInterface {
    return new utils.Interface(_abi) as PositionComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PositionComponent {
    return new Contract(address, _abi, signerOrProvider) as PositionComponent;
  }
}
