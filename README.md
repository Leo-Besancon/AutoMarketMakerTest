# Automated Market Maker (AMM)

This project demonstrates a very simple AMM project.

Currently, the main features are:
* Trade between two given ERC20s
* Add and substract liquidity to the pool
* Earn liquidity tokens
* Some testing
* Pay trading fees to liquidity providers
* Allow governance voting to set the fee
* A basic React front-end demo accessible at https://leo-besancon.com/amm/

What there is to do:

* Build a better React front-end to the smart-contract. The goal is to have a great UI to:
    * Quickly provide or remove liquidity, while visualizing earned revenue.
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

**Disclamer:** this project has not been properly tested or audited. Do not use in production.

How to run the tests:
```
npm install
npx hardhat test
npx hardhat run scripts/deploy.ts
npx hardhat run scripts/deploy.ts --network goerli
```

On Goerli testnet:

* GOV deployed to: 0x2bb1a06BdF76b608568555Da62d804C93AcCB087
* AssetA deployed to: 0x5609144216aB3850e676A54536fFeFa1a8A9003b
* AssetB deployed to: 0x8592367eD2C96773bF17F82d1447f560Ab285A72
* Liquidity deployed to: 0xe10C71085A233427de2fF973825F91bc538957d5
* AMM deployed to: 0xd40cA4D54c7998E428Bb62F886D85A8Ab9953054

