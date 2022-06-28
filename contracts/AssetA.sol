//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ASSET_A is ERC20 {
    constructor() ERC20("ASSET_A", "AAA") {
	    _mint(msg.sender, 10000);
    }
}

