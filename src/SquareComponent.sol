// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import {Component} from "../lib/mud/packages/solecs/src/Component.sol";
import {LibTypes} from "../lib/mud/packages/solecs/src/Component.sol";

struct Collider {
    int256 x;
    int256 y;
    int256 width;
    int256 height;
}

uint256 constant ID = uint256(keccak256("example.component.Square"));

contract SquareComponent is Component {
    constructor(address world) Component(world, ID) {}

    function set(uint256 entity, Collider calldata value) public {
        set(entity, abi.encode(value));
    }

    function getValue(uint256 entity) public view returns (Collider memory) {
        return abi.decode(getRawValue(entity), (Collider));
    }

    function getEntitiesWithValue(Collider calldata value)
        public
        view
        returns (uint256[] memory)
    {
        return getEntitiesWithValue(abi.encode(value));
    }

    function getSchema()
        public
        pure
        override
        returns (string[] memory keys, LibTypes.SchemaValue[] memory values)
    {
        keys[0] = "x";
        values[0] = LibTypes.SchemaValue.INT256;

        keys[1] = "y";
        values[1] = LibTypes.SchemaValue.INT256;
    }
}
