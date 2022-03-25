const StockCoin = artifacts.require("./StockCoin.sol");

module.exports = function (deployer) {
  deployer.deploy(StockCoin);
};