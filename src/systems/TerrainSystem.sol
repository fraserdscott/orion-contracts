// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "mud/System.sol";
import {IWorld} from "mud/interfaces/IWorld.sol";
import {IUint256Component} from "mud/interfaces/IUint256Component.sol";
import {IComponent} from "mud/interfaces/IComponent.sol";
import {getAddressById} from "mud/utils.sol";

import {PositionComponent, ID as PositionComponentID, Coord} from "../components/PositionComponent.sol";
import {SquareComponent, ID as SquareComponentID, Collider} from "../components/SquareComponent.sol";

uint256 constant ID = uint256(keccak256("orion.system.terrain"));

contract TerrainSystem is System {
    constructor(IWorld _world, address _components)
        System(_world, _components)
    {}

    function execute(bytes memory arguments) public returns (bytes memory) {
        (Coord[] memory coords, Collider[] memory colliders) = abi.decode(
            arguments,
            (Coord[], Collider[])
        );

        PositionComponent position = PositionComponent(
            getAddressById(components, PositionComponentID)
        );
        SquareComponent square = SquareComponent(
            getAddressById(components, SquareComponentID)
        );

        for (uint256 i; i < colliders.length; i++) {
            position.set(i, coords[i]);
            square.set(i, colliders[i]);
        }
    }

    function executeTyped(Coord[] memory coords, Collider[] memory colliders)
        public
        returns (bytes memory)
    {
        return execute(abi.encode(coords, colliders));
    }
}
