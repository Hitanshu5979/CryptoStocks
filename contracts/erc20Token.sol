// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract stockcoin is ERC20 {

    address public admin;

    constructor() ERC20("StockCoin", "STC") {
        _mint(msg.sender, 1000000 * 10 ** 18);
        admin = msg.sender;
    }

    function mint (address to, uint amount) external {
        require(msg.sender == admin, "only admin has access");
        _mint(to, amount);
    }

    function burn (uint amount) external {
        _burn(msg.sender, amount);
    }
}