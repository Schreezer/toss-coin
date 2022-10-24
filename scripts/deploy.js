const main = async () => {
  const coinToss = await hre.ethers.getContractFactory("Play");
  const TossContract = await coinToss.deploy({
    value: hre.ethers.utils.parseEther("0.1"),
  });
  await TossContract.deployed();

  console.log("WavePortal address: ", TossContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();