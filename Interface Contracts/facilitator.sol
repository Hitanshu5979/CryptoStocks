//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

contract Facilitator {
    address[] public facilitatorCryptoWallet;
    address[] public facilitatorFiatWallet;
    address[] public facilitatorStockWallet;

    struct facilitator {
        address facilitatorCryptoWallet;
        address facilitatorStockWallet;
        address facilitatorFiatWallet;
    }

    struct cryptoWallet {
        string cryLabel;
        uint cryAmount;
        uint cryValue;
    }

    struct stocksWallet {
        string stoLabel;
        uint stoAmount;
        uint stoValue;
    }
}