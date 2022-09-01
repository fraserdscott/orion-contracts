// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import {Component} from "mud/Component.sol";
import {LibTypes} from "mud/Component.sol";

struct Coord {
    int256 x;
    int256 y;
}

uint256 constant ID = uint256(keccak256("example.component.Position"));

contract PositionComponent is Component {
    constructor(address world) Component(world, ID) {}

    function set(uint256 entity, Coord calldata value) public {
        set(entity, abi.encode(value));
    }

    function getValue(uint256 entity) public view returns (Coord memory) {
        return abi.decode(getRawValue(entity), (Coord));
    }

    function getEntitiesWithValue(Coord calldata value)
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
