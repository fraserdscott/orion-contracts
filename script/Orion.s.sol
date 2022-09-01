// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import {World} from "mud/World.sol";
import {ID as PositionComponentID, PositionComponent, Coord} from "../src/PositionComponent.sol";
import {Coord, PositionComponent} from "../src/PositionComponent.sol";
import {Collider, SquareComponent} from "../src/SquareComponent.sol";
import {MoveSystem} from "../src/MoveSystem.sol";
import {TerrainSystem} from "../src/TerrainSystem.sol";
import {ShootSystem} from "../src/ShootSystem.sol";

contract OrionScript is Script {
    Collider[] public newColliders;
    Coord[] newCoords;

    function run() public {
        vm.startBroadcast();

        World world = new World();
        world.init();

        MoveSystem move = new MoveSystem(world, address(0));
        TerrainSystem terrain = new TerrainSystem(world, address(0));
        ShootSystem shoot = new ShootSystem(world, address(0));

        PositionComponent position = new PositionComponent(address(world));
        SquareComponent square = new SquareComponent(address(world));

        position.authorizeWriter(address(move)); // let it move objects
        position.authorizeWriter(address(terrain)); // let it spawn objects

        square.authorizeWriter(address(terrain)); // let it spawn objects
        square.authorizeWriter(address(shoot)); // let it shoot and destroy objects

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
