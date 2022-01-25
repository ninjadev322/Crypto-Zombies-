const { expect } = require("chai");

describe("Zombie contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const zombieFactory = await ethers.getContractFactory("ZombieFactory");

    // zombieFactory.feedAndMultiply(1 , 1);

    // const hardhatToken = await Token.deploy();

    // const ownerBalance = await hardhatToken.balanceOf(owner.address);
    // expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    // feedAndMultiply
  });
});