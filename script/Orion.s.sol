// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import {World} from "../lib/mud/packages/solecs/src/World.sol";
import {Coord} from "../src/PositionComponent.sol";
import {Collider} from "../src/SquareComponent.sol";
import {TerrainSystem} from "../src/TerrainSystem.sol";

contract OrionScript is Script {
    Collider[] public newColliders;
    Coord[] newCoords;

    function run() public {
        vm.startBroadcast();

        World world = new World();
        TerrainSystem terrain = new TerrainSystem(world, address(0));

        newColliders.push(Collider(1 ether, 1 ether, 0.5 ether, 0.5 ether));
        newColliders.push(Collider(1 ether, 2 ether, 0.5 ether, 0.5 ether));
        newColliders.push(Collider(5 ether, 4 ether, 1 ether, 1 ether));
        newCoords.push(Coord(1 ether, 1 ether));
        newCoords.push(Coord(1 ether, 2 ether));
        newCoords.push(Coord(5 ether, 4 ether));

        terrain.executeTyped(newCoords, newColliders);

        vm.stopBroadcast();
    }
}
