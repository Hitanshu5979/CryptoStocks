// Make sure the StockCoin contract is included by requiring it
const StockCoin = artifacts.require("StockCoin");
const Ownable = artifacts.require("Ownable")

// This is an async function, it will accept the Deployer account, the network, and eventual accounts
module.exports = async function (deployer, network, accounts) {

  // await while we deploy the StockCoin
  await deployer.deploy(StockCoin, "StockCoin", "STC", 18, "500000000");
  
  const stockcoin = await StockCoin.deployed()

};