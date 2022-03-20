//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

contract Client {

    address public clientAddr;
    address public cryptoAddr;
    address public stockAddr;
    
    struct client {
        address clientCryptoWallet;
        address clientStockWallet;
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

    mapping (address => client) public clients;

    mapping (address => mapping(address => cryptoWallet)) public cryWallets;

    mapping (address => mapping(address => stocksWallet)) public stoWallets;

    function clientAddress() public {
        clientAddr = msg.sender;
    }
    
    function addClient(address _clientCryptoWallet, address _clientStockWallet) public {
        cryptoAddr = _clientCryptoWallet;
        stockAddr = _clientStockWallet;
        clients[clientAddr] = client(cryptoAddr, stockAddr);
    }

    function addCryWallet(string memory _cryLabel, uint _cryAmount, uint _cryValue) public {
        cryWallets[clientAddr][cryptoAddr] = cryptoWallet(_cryLabel, _cryAmount, _cryValue);
    }

    function addStoWallet(string memory _stoLabel, uint _stoAmount, uint _stoValue) public {
        stoWallets[clientAddr][stockAddr] = stocksWallet(_stoLabel, _stoAmount, _stoValue);
    }
}