// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "mud/System.sol";
import {IWorld} from "mud/interfaces/IWorld.sol";
import {getAddressById} from "mud/utils.sol";

import {PositionComponent, ID as PositionComponentID, Coord} from "../components/PositionComponent.sol";
import {SquareComponent, ID as SquareComponentID, Collider} from "../components/SquareComponent.sol";

uint256 constant ID = uint256(keccak256("orion.system.shoot"));

enum Direction {
    NORTH,
    EAST,
    SOUTH,
    WEST
}

contract ShootSystem is System {
    int256 constant PRECISION = 1 ether;

    constructor(IWorld _world, address _components)
        System(_world, _components)
    {}

    function execute(bytes memory arguments) public returns (bytes memory) {
        Coord memory pointer = abi.decode(arguments, (Coord));

        SquareComponent square = SquareComponent(
            getAddressById(components, SquareComponentID)
        );

        Coord memory player = PositionComponent(
            getAddressById(components, PositionComponentID)
        ).getValue(uint256(uint160(msg.sender)));

        uint256 minEntity;
        int256 minDistance = 100000 ether;
        uint256[] memory colliders = square.getEntities();
        for (uint256 i; i < colliders.length; i++) {
            if (colliders[i] != uint256(uint160(msg.sender))) {
                Collider memory collider = square.getValue(colliders[i]);

                int256 leftX = collider.x - collider.width;
                int256 rightX = collider.x + collider.width;
                int256 bottomY = collider.y - collider.height;
                int256 topY = collider.y + collider.height;

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
                    int256 euclid = distance(
                        Coord(collider.x, collider.x),
                        player
                    );
                    if (euclid < minDistance) {
                        minDistance = euclid;
                        minEntity = colliders[i];
                    }
                }
            }

            // This doesn't always work as the centre of a square may be closer
            if (minDistance != 100000 ether) {
                square.remove(minEntity);
            }
        }
    }

    function executeTyped(Coord calldata pointer)
        public
        returns (bytes memory)
    {
        return execute(abi.encode(pointer));
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
