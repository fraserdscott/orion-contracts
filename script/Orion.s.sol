// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/Orion.sol";

contract OrionScript is Script {
    Collider[] public newColliders;
    Coord[] newCoords;

    function run() public {
        vm.startBroadcast();

        Orion orion = new Orion();

        newColliders.push(Collider(1 ether, 1 ether, 0.5 ether, 0.5 ether));
        newColliders.push(Collider(1 ether, 2 ether, 0.5 ether, 0.5 ether));
        newColliders.push(Collider(5 ether, 4 ether, 1 ether, 1 ether));
        newCoords.push(Coord(1 ether, 1 ether));
        newCoords.push(Coord(1 ether, 2 ether));
        newCoords.push(Coord(5 ether, 4 ether));

        orion.addColliders(newColliders, newCoords);

        vm.stopBroadcast();
    }
}
