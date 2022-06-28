// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  
  const GOV = await ethers.getContractFactory("GOV");
  const gov = await GOV.deploy();
  await gov.deployed();
  console.log("GOV deployed to:", gov.address);
  
  const AssetA = await ethers.getContractFactory("ASSET_A");
  const asset_a = await AssetA.deploy();
  await asset_a.deployed();
  console.log("AssetA deployed to:", asset_a.address);
  
  const AssetB = await ethers.getContractFactory("ASSET_B");
  const asset_b = await AssetB.deploy();
  await asset_b.deployed();
  console.log("AssetB deployed to:", asset_b.address);
    
  const Liquidity = await ethers.getContractFactory("LIQUIDITY");
  const liquidity = await Liquidity.deploy();
  await liquidity.deployed();
  console.log("Liquidity deployed to:", liquidity.address);
  
  const AMM = await ethers.getContractFactory("AMM");
  const amm = await AMM.deploy(gov.address, asset_a.address, asset_b.address, liquidity.address);
  await amm.deployed();
  console.log("AMM deployed to:", amm.address);
  
  await liquidity.setAMM_Address(amm.address);
  
  console.log("Set liquidity address");
  console.log("");
  console.log("*********");
  console.log("All done!");
  console.log("*********");
  console.log("");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
