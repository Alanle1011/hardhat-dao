const { network, ethers } = require("hardhat");
const { verify } = require("../utils/verify");
const { developmentChains, MINT_DELAY } = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  log("--------------Deploying Timelock...----------------");

  const args = [MINT_DELAY, [], [], deployer];

  const timeLock = await deploy("TimeLock", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await verify(timeLock.address, args);
  }
};

module.exports.tags = ["all", "timeLock"];
