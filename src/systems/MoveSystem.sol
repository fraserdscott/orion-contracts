// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "mud/System.sol";
import {IWorld} from "mud/interfaces/IWorld.sol";
import {IUint256Component} from "mud/interfaces/IUint256Component.sol";
import {IComponent} from "mud/interfaces/IComponent.sol";
import {getAddressById} from "mud/utils.sol";

import {PositionComponent, ID as PositionComponentID, Coord} from "../components/PositionComponent.sol";
import {SquareComponent, ID as SquareComponentID, Collider} from "../components/SquareComponent.sol";

uint256 constant ID = uint256(keccak256("orion.system.move"));

enum Direction {
    NORTH,
    EAST,
    SOUTH,
    WEST
}

contract MoveSystem is System {
    int256 constant MOVEMENT_SPEED = 0.25 ether;
    int256 constant PLAYER_WIDTH = 0.5 ether;

    constructor(IWorld _world, address _components)
        System(_world, _components)
    {}

    function execute(bytes memory arguments) public returns (bytes memory) {
        Direction direction = abi.decode(arguments, (Direction));

        PositionComponent position = PositionComponent(
            getAddressById(components, PositionComponentID)
        );
        SquareComponent square = SquareComponent(
            getAddressById(components, SquareComponentID)
        );

        Coord memory player = position.getValue(uint256(uint160(msg.sender)));

        if (direction == Direction.NORTH) {
            player.y += MOVEMENT_SPEED;
        } else if (direction == Direction.EAST) {
            player.x += MOVEMENT_SPEED;
        } else if (direction == Direction.SOUTH) {
            player.y -= MOVEMENT_SPEED;
        } else {
            player.x -= MOVEMENT_SPEED;
        }

        uint256[] memory colliders = square.getEntities();
        for (uint256 i; i < colliders.length; i++) {
            if (colliders[i] != uint256(uint160(msg.sender))) {
                Collider memory collider = square.getValue(colliders[i]);

                require(
                    player.x + PLAYER_WIDTH <= collider.x - collider.width ||
                        player.x - PLAYER_WIDTH >=
                        collider.x + collider.width ||
                        player.y + PLAYER_WIDTH <=
                        collider.y - collider.height ||
                        player.y - PLAYER_WIDTH >= collider.y + collider.height,
                    "Collision with obstacle"
                );
            }
        }

        position.set(uint256(uint160(msg.sender)), player);
    }

    function executeTyped(Direction direction) public returns (bytes memory) {
        return execute(abi.encode(direction));
    }
}
