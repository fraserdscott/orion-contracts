// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import {World} from "mud/World.sol";
import {ID as PositionComponentID, PositionComponent, Coord} from "../src/PositionComponent.sol";
import {Collider, SquareComponent} from "../src/SquareComponent.sol";
import {MoveSystem, Direction} from "../src/MoveSystem.sol";
import {TerrainSystem} from "../src/TerrainSystem.sol";
import {ShootSystem} from "../src/ShootSystem.sol";

contract OrionTest is Test {
    World public world;
    PositionComponent public position;
    SquareComponent public square;
    MoveSystem public move;
    TerrainSystem public terrain;
    ShootSystem public shoot;

    Coord[] public newCoords;
    Collider[] public newColliders;

    function setUp() public {
        world = new World();
        world.init();

        move = new MoveSystem(world, address(0));
        terrain = new TerrainSystem(world, address(0));
        shoot = new ShootSystem(world, address(0));

        position = new PositionComponent(address(world));
        square = new SquareComponent(address(world));

        position.authorizeWriter(address(move)); // let it move objects
        position.authorizeWriter(address(terrain)); // let it spawn objects
        position.authorizeWriter(address(this)); // let us spawn the player

        square.authorizeWriter(address(terrain)); // let it spawn objects
        square.authorizeWriter(address(shoot)); // let it shoot and destroy objects
    }

    function testStart() public {
        // Spawn the player
        position.set(uint256(uint160(address(this))), Coord(0, 0));

        Coord memory c = position.getValue(uint256(uint160(address(this))));

        assertEq(c.x, 0);
        assertEq(c.y, 0);
    }

    function testMove() public {
        // Spawn the player
        position.set(uint256(uint160(address(this))), Coord(0, 0));

        move.executeTyped(Direction.NORTH);

        Coord memory c = position.getValue(uint256(uint160(address(this))));

        assertEq(c.x, 0);
        assertEq(c.y, 0.25 ether);
    }

    function testMovement() public {
        newColliders.push(Collider(0 ether, 1.5 ether, 0.5 ether, 0.5 ether));
        newCoords.push(Coord(1 ether, 1 ether));

        terrain.executeTyped(newCoords, newColliders);

        // Spawn the player
        position.set(uint256(uint160(address(this))), Coord(0, 0));

        move.executeTyped(Direction.NORTH);
        move.executeTyped(Direction.NORTH);

        vm.expectRevert("Collision with obstacle");
        move.executeTyped(Direction.NORTH);
    }

    function testColliders() public {
        newColliders.push(Collider(1 ether, 1 ether, 0.5 ether, 0.5 ether));
        newColliders.push(Collider(1 ether, 2 ether, 0.5 ether, 0.5 ether));
        newColliders.push(Collider(5 ether, 4 ether, 1 ether, 1 ether));

        newCoords.push(Coord(1 ether, 1 ether));
        newCoords.push(Coord(1 ether, 2 ether));
        newCoords.push(Coord(5 ether, 4 ether));

        terrain.executeTyped(newCoords, newColliders);

        Collider memory item = square.getValue(0);
        assertEq(item.x, 1 ether);

        uint256[] memory cs = square.getEntities();
        assertEq(cs[0], 0);
        assertEq(cs.length, newColliders.length);

        // Spawn the player
        position.set(uint256(uint160(address(this))), Coord(0, 0));
        shoot.executeTyped(Coord(1 ether, 1.1 ether));

        assert(!square.has(0));

        shoot.executeTyped(Coord(0.6 ether, 2.2 ether));
        assert(!square.has(1));
    }
}
