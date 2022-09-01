// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import {ID as PositionComponentID, PositionComponent, Coord} from "../src/PositionComponent.sol";
import {Coord, PositionComponent} from "../src/PositionComponent.sol";
import {Collider, SquareComponent} from "../src/SquareComponent.sol";
import {TerrainSystem} from "../src/TerrainSystem.sol";

contract OrionScript is Script {
    Collider[] public newColliders;
    Coord[] newCoords;

    function run() public {
        vm.startBroadcast();

        TerrainSystem terrain = TerrainSystem(
            0x5FC8d32690cc91D4c39d9d3abcBD16989F875707
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
