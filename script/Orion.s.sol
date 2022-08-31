// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/Orion.sol";

contract OrionScript is Script {
    Collider[] newColliders;

    function run() public {
        vm.startBroadcast();

        Orion orion = new Orion();
        newColliders.push(Collider(0.5 ether, Coord(1 ether, 1 ether)));
        newColliders.push(Collider(0.5 ether, Coord(1 ether, 2 ether)));
        newColliders.push(Collider(1 ether, Coord(5 ether, 4 ether)));

        orion.addColliders(newColliders);

        vm.stopBroadcast();
    }
}
