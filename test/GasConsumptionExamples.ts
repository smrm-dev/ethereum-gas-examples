import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("GasConsumptionExamples", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployGasConsumptionExamples() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const GasConsumptionExamples = await ethers.getContractFactory("GasConsumptionExamples");
    const gasConsumptionExamples = await GasConsumptionExamples.deploy();

    return { gasConsumptionExamples, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { gasConsumptionExamples } = await loadFixture(deployGasConsumptionExamples);
      await gasConsumptionExamples.sumOfNaturalNumbers(200);
      await gasConsumptionExamples.fibonacci(20);
      await gasConsumptionExamples.nthPrime(100);
      await gasConsumptionExamples.bitwiseOperation(1000000000000000000000n);
    });
  });
});
