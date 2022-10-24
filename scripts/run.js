const main = async () => {
    const coinToss = await hre.ethers.getContractFactory("Play");
    const TossContract = await coinToss.deploy({
      value: hre.ethers.utils.parseEther("10"),
    });
    await TossContract.deployed();
    console.log("Contract addy:", TossContract.address);
  
    let contractBalance = await hre.ethers.provider.getBalance(
      TossContract.address
    );
    console.log(
      "Contract balance:",
      hre.ethers.utils.formatEther(contractBalance)
    );
  
    /*
     * Let's try two waves now
     */
    const waveTxn = await TossContract.result("Tails","1000000000000000000");
    await waveTxn.wait();
    console.log(waveTxn);
  
    const waveTxn2 = await TossContract.result("Heads","1000000000000000000");
    await waveTxn2.wait();
    console.log(waveTxn2);
    const waveTxn3 = await TossContract.result("Heads","1000000000000000000");
    await waveTxn3.wait();
    console.log(waveTxn3);
    const waveTxn4 = await TossContract.result("Heads","1000000000000000000");
    await waveTxn4.wait();
    console.log(waveTxn4);
    contractBalance = await hre.ethers.provider.getBalance(TossContract.address);
    console.log(
      "Contract balance:",
      hre.ethers.utils.formatEther(contractBalance)
    );
  
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
  