// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/Orion.sol";

contract OrionTest is Test {
    Orion public orion;

    function setUp() public {
        orion = new Orion();
    }

    function testStart() public {
        (int256 x, int256 y) = orion.positions(address(this));
        assertEq(x, 0);
        assertEq(y, 0);
    }

    function testMove() public {
        orion.move(Direction.NORTH);

        (int256 xNew, int256 yNew) = orion.positions(address(this));
        assertEq(xNew, 0);
        assertEq(yNew, 0.25 ether);
    }
}
