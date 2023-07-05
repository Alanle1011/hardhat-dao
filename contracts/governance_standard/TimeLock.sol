// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract TimeLock is TimelockController {
    constructor(
        uint256 mintDelay, // How long you have to wait before executing
        address[] memory proposers, // list of addresses that can propose
        address[] memory executors, //who can execute whebnn a proposal passes
        address admin
    ) TimelockController(mintDelay, proposers, executors, admin) {}
}
