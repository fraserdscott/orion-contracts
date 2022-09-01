// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/Orion.sol";
import "../src/PositionComponent.sol";
import {Collider, SquareComponent} from "../src/SquareComponent.sol";

contract OrionTest is Test {
    Orion public orion;
    PositionComponent public positionComponent;
    SquareComponent public squareComponent;

    Collider[] public newColliders;
    Coord[] public newCoords;

    function setUp() public {
        orion = new Orion();
        orion.init();
        positionComponent = new PositionComponent(address(orion));
        positionComponent.authorizeWriter(address(orion));

        squareComponent = new SquareComponent(address(orion));
        squareComponent.authorizeWriter(address(orion));
    }

    function testRegister() public {
        assertEq(
            orion.getComponent(
                uint256(keccak256("example.component.Position"))
            ),
            address(positionComponent)
        );
    }

    function testStart() public {
        // Spawn the player
        positionComponent.set(uint256(uint160(address(this))), Coord(0, 0));

        Coord memory c = positionComponent.getValue(
            uint256(uint160(address(this)))
        );

        assertEq(c.x, 0);
        assertEq(c.y, 0);
    }

    function testMove() public {
        // Spawn the player
        positionComponent.set(uint256(uint160(address(this))), Coord(0, 0));

        orion.move(Direction.NORTH);

        Coord memory c = positionComponent.getValue(
            uint256(uint160(address(this)))
        );

        assertEq(c.x, 0);
        assertEq(c.y, 0.25 ether);
    }

    function testShoot() public {
        // Spawn the player
        positionComponent.set(uint256(uint160(address(this))), Coord(0, 0));

        orion.shoot(Coord(3, 3));
    }

    function testColliders() public {
        newColliders.push(Collider(1 ether, 1 ether, 0.5 ether, 0.5 ether));
        newColliders.push(Collider(1 ether, 2 ether, 0.5 ether, 0.5 ether));
        newColliders.push(Collider(5 ether, 4 ether, 1 ether, 1 ether));

        newCoords.push(Coord(1 ether, 1 ether));
        newCoords.push(Coord(1 ether, 2 ether));
        newCoords.push(Coord(5 ether, 4 ether));

        orion.addColliders(newColliders, newCoords);

        Coord memory item = positionComponent.getValue(0);
        assertEq(item.x, 1 ether);
    }
}
