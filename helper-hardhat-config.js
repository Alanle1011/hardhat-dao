const networkConfig = {
  5: {
    name: "goerli",
    ethUsePriceFeedAddress: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
  },
  11155111: {
    name: "sepolia",
    ethUsePriceFeedAddress: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
  },
};

const developmentChains = ["hardhat", "localhost"];
const MINT_DELAY = 3600; //1 hour
const VOTING_PERIOD = 5;
const VOTING_DELAY = 1;
const QUORUM_PERCANTAGE = 4;
const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
const NEW_STORE_VALUE = 77;
const FUNC = "store";
const PROPOSAL_DESCRIPTION = "Proposal #1: Store 77 in the Box";
const proposalsFile = "proposals.json";
module.exports = {
  networkConfig,
  developmentChains,
  MINT_DELAY,
  VOTING_DELAY,
  VOTING_PERIOD,
  QUORUM_PERCANTAGE,
  ADDRESS_ZERO,
  NEW_STORE_VALUE,
  FUNC,
  PROPOSAL_DESCRIPTION,
  proposalsFile,
};
