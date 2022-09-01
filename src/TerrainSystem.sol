// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "../lib/mud/packages/solecs/src/System.sol";
import {IWorld} from "../lib/mud/packages/solecs/src/interfaces/IWorld.sol";
import {IUint256Component} from "../lib/mud/packages/solecs/src/interfaces/IUint256Component.sol";
import {IComponent} from "../lib/mud/packages/solecs/src/interfaces/IComponent.sol";
import {getAddressById} from "../lib/mud/packages/solecs/src/utils.sol";

import {PositionComponent, ID as PositionComponentID, Coord} from "./PositionComponent.sol";
import {SquareComponent, ID as SquareComponentID, Collider} from "./SquareComponent.sol";

uint256 constant ID = uint256(keccak256("ember.system.terrain"));

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
