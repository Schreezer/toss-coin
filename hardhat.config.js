require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      // This value will be replaced on runtime
      url: "https://convincing-light-wave.ethereum-goerli.discover.quiknode.pro/154fed06cbc7a52e90f690f9dc81be6625ffc2ce/",
      accounts: ["726e77ec4bcf97cf316b71c82850c8fc31db4298f96eb334f2580a40d55aafdd"]
    }
    // mainnet: {
    //   url: process.env.PROD_QUICKNODE_KEY,
    //   accounts: [process.env.PRIVATE_KEY],
    // },
  },
};