
# Automated Market Maker (AMM)

This project demonstrates a very simple AMM project. Auto Market Makers let users buy and sell assets from and to liquidity reserves instead of with an other user. This project allowed me discover the field of decentralized finance.

**Disclamer:** this project has not been properly tested or audited. Do not use in production.

Currently, the main features are:
* Trade between two given ERC20s
* Add and substract liquidity to the pool
* Earn liquidity tokens
* Some testing

What there is to do:
* Pay trading fees to liquidity providers
* Allow governance voting to set the fee
* Build a React front-end to the smart-contract
    * Quickly provide or remove liquidity
    * Trade, visualize price history, available liquidity and slippage
* More thorough testing

More advanced features considered:
* Allow pooling and trading between any two assets
* Make use of the concentrated liquidity concept introduced in Uniswap v3

This project uses:
* OpenZeppelin ERC20 and AccessControl contracts
* Inspiration from Uniswap v2

This project uses:
* Hardhat
* Typescript
* React

How to run the tests:
```
npm install
npx hardhat test
```
