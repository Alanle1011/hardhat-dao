const fs = require("fs");
const {
  proposalsFile,
  developmentChains,
  VOTING_PERIOD,
} = require("../helper-hardhat-config");
const { moveBlock } = require("../utils/moveBlock");
const { network } = require("hardhat");

async function main(proposalIndex) {
  const proposals = JSON.parse(fs.readFileSync(proposalsFile, "utf8"));

  const proposalId = proposals[network.config.chainId][proposalIndex];

  // 0 = Against, 1 = For, 2 = Abstain for this example
  const voteWay = 1;
  const reason = "I lika do da cha cha";
  await vote(proposalId, voteWay, reason);
  console.log("Voted! Ready to go!")
}

// 0 = Against, 1 = For, 2 = Abstain for this example
async function vote(proposalId, voteWay, reason) {
  console.log("Voting...");
  const governor = await ethers.getContract("GovernorContract");
  const voteTx = await governor.castVoteWithReason(proposalId, voteWay, reason);
  const voteTxReceipt = await voteTx.wait(1);
  console.log(voteTxReceipt.events[0].args.reason);
  const proposalState = await governor.state(proposalId);
  console.log(`Current Proposal State: ${proposalState}`);
  if (developmentChains.includes(network.name)) {
    await moveBlock(VOTING_PERIOD + 1);
  }
}

const index = 0;
main(index)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
