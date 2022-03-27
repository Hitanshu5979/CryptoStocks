// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.12;

contract StockCoin {
    // Set the total number of tokens
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    // Constructor
    constructor(uint256 _initialSupply) {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;

        //allocate the initial supply
    }
}
