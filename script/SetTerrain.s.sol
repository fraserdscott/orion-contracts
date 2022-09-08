// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import {Coord} from "../src/components/PositionComponent.sol";
import {Collider} from "../src/components/SquareComponent.sol";
import {TerrainSystem} from "../src/systems/TerrainSystem.sol";

contract OrionScript is Script {
    Coord[] newCoords;
    Collider[] newColliders;

    function run() public {
        vm.startBroadcast();

        TerrainSystem terrain = TerrainSystem(
            0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
        );

        newCoords.push(Coord(1 ether, 1 ether));
        newCoords.push(Coord(1 ether, 2 ether));
        newCoords.push(Coord(5 ether, 4 ether));
        newColliders.push(Collider(1 ether, 1 ether, 0.5 ether, 0.5 ether));
        newColliders.push(Collider(1 ether, 2 ether, 0.5 ether, 0.5 ether));
        newColliders.push(Collider(5 ether, 4 ether, 1 ether, 1 ether));

        terrain.executeTyped(newCoords, newColliders);

        vm.stopBroadcast();
    }
}
