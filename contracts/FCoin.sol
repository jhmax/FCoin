// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol";

contract FCoin is ERC20PresetFixedSupply {

    uint256 public constant INITIAL_SUPPLY = 10000000 * (10 ** uint256(18)); 

    constructor () ERC20PresetFixedSupply("FCoin", "FC", INITIAL_SUPPLY, msg.sender) {
        
    }
}