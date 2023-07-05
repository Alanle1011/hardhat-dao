const { network } = require("hardhat");

async function moveBlock(amount) {
  console.log("Moving Block...");
  for (let i = 0; i < amount; i++) {
    await network.provider.request({
      method: "evm_mine",
      params: [],
    });
  }
}

module.exports = { moveBlock };
