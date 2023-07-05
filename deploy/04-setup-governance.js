const { network, ethers } = require("hardhat");
const { ADDRESS_ZERO } = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts();

  const timeLockContract = await get("TimeLock");
  const governorContract = await get("GovernorContract");

  const timeLock = await ethers.getContractAt(
    "TimeLock",
    timeLockContract.address
  );

  log("----------------Setting up Roles--------------------");

  const proposerRole = await timeLock.PROPOSER_ROLE();
  const executorRole = await timeLock.EXECUTOR_ROLE();
  const adminRole = await timeLock.TIMELOCK_ADMIN_ROLE();

  const proposerTx = await timeLock.grantRole(
    proposerRole,
    governorContract.address
  );
  await proposerTx.wait(1);
  const executorTx = await timeLock.grantRole(executorRole, ADDRESS_ZERO);
  await executorTx.wait(1);
  const revokeTx = await timeLock.revokeRole(adminRole, deployer);
  await revokeTx.wait(1);
};

module.exports.tags = ["all", "setup"];
