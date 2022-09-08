// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import {Component, LibTypes} from "mud/Component.sol";

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
        keys = new string[](4);
        values = new LibTypes.SchemaValue[](4);

        keys[0] = "x";
        values[0] = LibTypes.SchemaValue.INT256;

        keys[1] = "y";
        values[1] = LibTypes.SchemaValue.INT256;

        keys[2] = "width";
        values[2] = LibTypes.SchemaValue.INT256;

        keys[3] = "height";
        values[3] = LibTypes.SchemaValue.INT256;
    }
}
