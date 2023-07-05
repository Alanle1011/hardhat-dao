# DAOs Hardhat Project

First you should
```
yarn 
yarn install
```

To deploy the contract on a local node
```
yarn hardhat node
```

Script to interact with the DAOs
1. Propose a new proposal
```
yarn hardhat run scripts/propose.js --network localhost
```
2. Vote
```
yarn hardhat run scripts/votes.js --network localhost
```
3. Queue And Execute
```
yarn hardhat run scripts/queue-and-execute.js --network localhost
```

