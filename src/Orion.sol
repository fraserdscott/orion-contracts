// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {World} from "../lib/mud/packages/solecs/src/World.sol";
import {Coord, PositionComponent} from "./PositionComponent.sol";
import {Collider, SquareComponent} from "./SquareComponent.sol";

enum Direction {
    NORTH,
    EAST,
    SOUTH,
    WEST
}

contract Orion is World {
    int256 constant PRECISION = 1 ether;
    int256 constant PLAYER_WIDTH = 0.5 ether;

    int256 constant MOVEMENT_SPEED = 0.25 ether;

    uint256 colliderCount;

    event Destroy(uint256 index);

    function addColliders(Collider[] calldata colliders, Coord[] memory coords)
        external
    {
        PositionComponent c = PositionComponent(
            this.getComponent(uint256(keccak256("example.component.Position")))
        );
        SquareComponent s = SquareComponent(
            this.getComponent(uint256(keccak256("example.component.Square")))
        );

        for (uint256 i; i < colliders.length; i++) {
            c.set(i, coords[i]);
            s.set(i, colliders[i]);

            colliderCount++;
        }
    }

    function move(Direction direction) external {
        PositionComponent c = PositionComponent(
            this.getComponent(uint256(keccak256("example.component.Position")))
        );
        SquareComponent s = SquareComponent(
            this.getComponent(uint256(keccak256("example.component.Square")))
        );

        Coord memory player = c.getValue(uint256(uint160(msg.sender)));

        if (direction == Direction.NORTH) {
            player.y += MOVEMENT_SPEED;
        } else if (direction == Direction.EAST) {
            player.x += MOVEMENT_SPEED;
        } else if (direction == Direction.SOUTH) {
            player.y -= MOVEMENT_SPEED;
        } else {
            player.x -= MOVEMENT_SPEED;
        }

        for (uint256 i; i < colliderCount; i++) {
            Collider memory collider = s.getValue(i);

            require(
                player.x + PLAYER_WIDTH <= collider.x - collider.width ||
                    player.x - PLAYER_WIDTH >= collider.x + collider.width ||
                    player.y + PLAYER_WIDTH <= collider.y - collider.height ||
                    player.y - PLAYER_WIDTH >= collider.y + collider.height,
                "Collision with obstacle"
            );
        }

        c.set(uint256(uint160(msg.sender)), player);
    }

    function shoot(Coord calldata pointer) external {
        PositionComponent c = PositionComponent(
            this.getComponent(uint256(keccak256("example.component.Position")))
        );
        SquareComponent s = SquareComponent(
            this.getComponent(uint256(keccak256("example.component.Square")))
        );

        Coord memory player = c.getValue(uint256(uint160(msg.sender)));

        uint256 minIndex;
        int256 minDistance = 100000 ether;
        for (uint256 i; i < colliderCount; i++) {
            Collider memory collider = s.getValue(i);

            int256 leftX = collider.x - collider.width;
            int256 rightX = collider.x + collider.width;
            int256 bottomY = collider.y - collider.width;
            int256 topY = collider.y + collider.width;

            if (
                intersects(
                    player.x,
                    player.y,
                    pointer.x,
                    pointer.y,
                    leftX,
                    bottomY,
                    leftX,
                    topY
                ) ||
                intersects(
                    player.x,
                    player.y,
                    pointer.x,
                    pointer.y,
                    leftX,
                    bottomY,
                    rightX,
                    bottomY
                ) ||
                intersects(
                    player.x,
                    player.y,
                    pointer.x,
                    pointer.y,
                    rightX,
                    topY,
                    leftX,
                    topY
                ) ||
                intersects(
                    player.x,
                    player.y,
                    pointer.x,
                    pointer.y,
                    rightX,
                    topY,
                    rightX,
                    bottomY
                )
            ) {
                int256 euclid = distance(Coord(collider.x, collider.x), player);
                if (euclid < minDistance) {
                    minDistance = euclid;
                    minIndex = i;
                }
            }
        }

        // This doesn't always work as the centre of a square may be closer
        if (minDistance != 100000 ether) {
            c.set(minIndex, Coord(10000 ether, 10000 ether));

            emit Destroy(minIndex);
        }
    }

    function distance(Coord memory a, Coord memory b)
        private
        pure
        returns (int256 y)
    {
        int256 xDiff = a.x - b.x;
        int256 yDiff = a.y - b.y;

        return sqrt(xDiff * xDiff + yDiff * yDiff);
    }

    function sqrt(int256 x) private pure returns (int256 y) {
        int256 z = (x + 1) / 2;
        y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
    }

    function intersects(
        int256 a,
        int256 b,
        int256 c,
        int256 d,
        int256 p,
        int256 q,
        int256 r,
        int256 s
    ) private pure returns (bool) {
        int256 det = (c - a) * (s - q) - (r - p) * (d - b);

        if (det == 0) {
            return false;
        } else {
            int256 lambda = (((s - q) * (r - a) + (p - r) * (s - b)) *
                PRECISION) / det;
            int256 gamma = (((b - d) * (r - a) + (c - a) * (s - b)) *
                PRECISION) / det;

            return
                (0 < lambda && lambda < PRECISION) &&
                (0 < gamma && gamma < PRECISION);
        }
    }
}
