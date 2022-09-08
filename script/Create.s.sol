// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import {World} from "mud/World.sol";
import {ID as PositionComponentID, PositionComponent, Coord} from "../src/components/PositionComponent.sol";
import {Coord, PositionComponent} from "../src/components/PositionComponent.sol";
import {Collider, SquareComponent} from "../src/components/SquareComponent.sol";
import {MoveSystem} from "../src/systems/MoveSystem.sol";
import {TerrainSystem} from "../src/systems/TerrainSystem.sol";
import {ShootSystem} from "../src/systems/ShootSystem.sol";
import {SpawnSystem} from "../src/systems/SpawnSystem.sol";

contract OrionScript is Script {
    Coord[] newCoords;
    Collider[] public newColliders;

    function run() public {
        vm.startBroadcast();

        World world = new World();
        world.init();

        MoveSystem move = new MoveSystem(world, address(0));
        TerrainSystem terrain = new TerrainSystem(world, address(0));
        ShootSystem shoot = new ShootSystem(world, address(0));
        SpawnSystem spawn = new SpawnSystem(world, address(0));

        PositionComponent position = new PositionComponent(address(world));
        SquareComponent square = new SquareComponent(address(world));

        position.authorizeWriter(address(move)); // let it move objects
        position.authorizeWriter(address(terrain)); // let it spawn objects
        position.authorizeWriter(address(spawn)); // let it move objects

        square.authorizeWriter(address(terrain)); // let it spawn objects
        square.authorizeWriter(address(shoot)); // let it shoot and destroy objects
        square.authorizeWriter(address(spawn)); // let it spawn objects

        vm.stopBroadcast();
    }
}
