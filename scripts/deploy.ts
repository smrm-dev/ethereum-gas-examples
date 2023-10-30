import { ethers } from "hardhat";

async function main() {
  const GasConsumptionExamples = await ethers.getContractFactory("GasConsumptionExamples");
  const gasConsumptionExamples = await GasConsumptionExamples.deploy();

  await gasConsumptionExamples.waitForDeployment();

  console.log(
    `GasConsumptionExamples deployed to ${gasConsumptionExamples.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
