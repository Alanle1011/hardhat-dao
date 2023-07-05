const { network, ethers } = require("hardhat");
const { verify } = require("../utils/verify");
const {
  developmentChains,
  VOTING_DELAY,
  VOTING_PERIOD,
  QUORUM_PERCANTAGE,
} = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts();
  const governanceToken = await get("GovernanceToken");
  const timeLock = await get("TimeLock");

  log("----------------Deploying Governor Contract...--------------------");

  const args = [
    governanceToken.address,
    timeLock.address,
    QUORUM_PERCANTAGE,
    VOTING_PERIOD,
    VOTING_DELAY,
  ];

  const governorContract = await deploy("GovernorContract", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await verify(governorContract.address, args);
  }
};

module.exports.tags = ["all", "governorContract"];
