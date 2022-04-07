const { assert } = require("chai");

const StockCoin = artifacts.require("StockCoin");

// Start a test series named StockCoin, it will use 10 test accounts
contract ("StockCoin", async accounts => {

    // each it is a new test, and we name our first test initial supply
    it ("initial supply", async() => {

        // wait until stockcoin is deployed, store the results inside stockcoin
        // the result is a client to the Smart Contract API
        stockcoin = await StockCoin.deployed();

        // call our totalSupply function
        let supply = await stockcoin.totalSupply()

        // Assert that the supply matches what we set in migration
        assert.equal(supply.toNumber(), 500000000, "Inital supply was not the same as in migration")

    });

    it ("minting", async() => {

        stockcoin = await StockCoin.deployed();

        // Lets use account 1 since that account should have 0
        let initial_balance = await stockcoin.balanceOf(accounts[1]);

        // Lets verify the balance
        assert.equal(initial_balance.toNumber(), 0, "initial balance for account 1 should be 0")

        // Lets mint 100 tokens to the user and grab the balance again
        let totalSupply = await stockcoin.totalSupply();
        await stockcoin.mint (accounts[1], 100);

        // Grab the balance again to see what it is after calling mint
        let after_balance = await stockcoin.balanceOf(accounts[1]);
        let after_supply = await stockcoin.totalSupply();

        // Assert and check that they match
        assert.equal(after_balance.toNumber(), 100, "The balance after minting 100 should be 100")
        assert.equal(after_supply.toNumber(), totalSupply.toNumber()+100, "The totalSupply should have been increased")

        try {
            
            // Mint with address 0
            await stockcoin.mint ('0x0000000000000000000000000000000000000000', 100);

        } catch (error) {
            
            assert.equal(error.reason, "StockCoin: cannot mint to zero address", "Failed to stop minting on zero address")

        }

    })

    it ("burning", async() => {

        stockcoin = await StockCoin.deployed();

        // Lets continue on account 1 since that account now has 100 tokens
        let initial_balance = await stockcoin.balanceOf(accounts[1]);

        // Burn to address 0
        try {
            
            await stockcoin.burn('0x0000000000000000000000000000000000000000', 100);

        } catch (error) {

            assert.equal(error.reason, "StockCoin: cannot burn from zero address", "Failed to notice burning on 0 address")

        }

        let totalSupply = await stockcoin.totalSupply();

        try {
            
            await stockcoin.burn(accounts[1], initial_balance-50);

        } catch (error) {
            
            assert.fail(error);

        }

        let balance = await stockcoin.balanceOf(accounts[1]);

        // Make sure balance was reduced and that totalSupply reduced
        assert.equal(balance.toNumber(), initial_balance-50, "Burning 50 should reduce users balance")

        let newSupply = await stockcoin.totalSupply();

        assert.equal(newSupply.toNumber(), totalSupply.toNumber()-50, "Total supply not properly reduced ")

    })

    it ("transferring tokens", async() => {

        stockcoin = await StockCoin.deployed();

        // Grab initial balance
        let initial_balance = await stockcoin.balanceOf(accounts[1]);

        // transfer tokens from account 0 to 1
        await stockcoin.transfer(accounts[1], 100);

        let after_balance = await stockcoin.balanceOf(accounts[1]);

        assert.equal(after_balance.toNumber(), initial_balance.toNumber() + 100, "Balance should have increased on reciever")

        // We can change the msg.sender using the FROM value in function calls
        let account2_initial_balance = await stockcoin.balanceOf(accounts[2]);

        await stockcoin.transfer(accounts[2], 20, { from: accounts[1] });
        
        // Make sure balances are switched on both accounts
        let account2_after_balance = await stockcoin.balanceOf(accounts[2]);
        let account1_after_balance = await stockcoin.balanceOf(accounts[1]);

        assert.equal(account1_after_balance.toNumber(), after_balance.toNumber()-20, "Should have reduceed account 1 balance by 20");
        assert.equal(account2_after_balance.toNumber(), account2_initial_balance.toNumber()+20, "Should have given account 2 20 tokens");

        // Try transferring too much
        try {
            
            await stockcoin.transfer(accounts[2], 2000000000000, { from: accounts[1] });

        } catch (error) {
            
            assert.equal(error.reason, "StockCoin: cant transfer more than your account holds");

        }

    });

    it ("allow account some allowance", async () => {

        stockcoin = await StockCoin.deployed();

        try {
            
            // Give account(0) access to 100 tokens on creator
            await stockcoin.approve('0x0000000000000000000000000000000000000000', 100);

        } catch (error) {
            
            assert.equal(error.reason, "StockCoin: approve cannot be to zero address", "Should not be able to approve zero address");

        }

        try {
            
            // Give account 1 access to 100 tokens on zero account
            await stockcoin.approve(accounts[1], 100);

        } catch (error) {
            
            assert.fail(error); // should not fail

        }

        // Verify by checking allowance
        let allowance = await stockcoin.allowance(accounts[0], accounts[1]);

        assert.equal(allowance.toNumber(), 100, "Allowance was not correctly inserted");

    });

    it ("transferring with allowance", async () => {

        stockcoin = await StockCoin.deployed();

        try {
            
            // Account 1 should have 100 tokens by now to use on account 0
            // lets try using using more
            await stockcoin.transferFrom (accounts[0], accounts[2], 200, { from: accounts[1] });

        } catch (error) {
            
            assert.equal(error.reason, "StockCoin: You cannot spend that much on this account", "Failed to detect overspending");

        }

        let init_allowance = await stockcoin.allowance(accounts[0], accounts[1]);

        console.log("init balance: ", init_allowance.toNumber())

        try {
            
            // Account 1 should have 100 tokens by now to use on account 0
            // lets try using more
            let worked = await stockcoin.transferFrom(accounts[0], accounts[2], 50, { from: accounts[1] });

        } catch (error) {
            
            assert.fail(error);

        }

        // Make sure allowance was changed
        let allowance = await stockcoin.allowance(accounts[0], accounts[1]);

        assert.equal(allowance.toNumber(), 50, "The allowance should have been decreased by 50");

    })

});