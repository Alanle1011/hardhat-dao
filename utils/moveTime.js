async function moveTime(amount) {
  console.log("Moving Times...");
  amount = amount + 1;
  await network.provider.send("evm_increaseTime", [amount]);

  console.log(`Moved forward in time ${amount} seconds`);
}

module.exports = { moveTime };
