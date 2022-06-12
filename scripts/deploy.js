// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const {ethers} = require ("hardhat"); 

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  // https://rinkeby.etherscan.io/address/0xE81B360050221377AFbb980c828792146Dc81612#code

  // We get the contract to deploy
  //const contract = await ethers.getContractAt('IccWithdraw', "0xF39F0a11BbaF5c5f5430f5C64Fa9Fa56De20c4bA") //<-- if you want to instantiate a version of a contract at a specific address!
    // const contract = await ethers.getContractFactory("IccWithdraw")
    // const deployedContract = await contract.deploy()
    // const contract2 = await ethers.getContractFactory("DappToken")
    // const deployedContract2 = await contract2.deploy()

    // console.log("contract token", deployedContract.address)
    // console.log("dapptoken ", deployedContract2.address)

    // const token = await ethers.getContractAt("DappToken", deployedContract2.address)

    // const addToken = await deployedContract.addAllowedTokens(token.address)
    // console.log("token added successfully")
    [owner] = await ethers.getSigners();
    contract = await ethers.getContractAt("IccWithdraw", "0xE81B360050221377AFbb980c828792146Dc81612")
    token = await ethers.getContractAt("DappToken", "0xB386a55a2042684dAe70C6eCa3FFb7855b85d8Cf")
    token2 = await ethers.getContractAt("DappToken", "0x090703FaD5a9107b1DFa661D24dE8e7E19D90055")
    token3 = await ethers.getContractAt("DappToken", "0xd66c6B4F0be8CE5b39D52E0Fd1344c389929B378")

    // const approve = await token3.connect(owner).approve("0xE81B360050221377AFbb980c828792146Dc81612", ethers.utils.parseEther("800000"))
    // const deposit = await contract.connect(owner).deposit("0xd66c6B4F0be8CE5b39D52E0Fd1344c389929B378", ethers.utils.parseEther("800000"))
    // console.log("deposit successfull")

    const withdraw = await contract.connect(owner).withdraw("0xdB01d94217308046a792D864b16A35837aa52B86","0xd66c6B4F0be8CE5b39D52E0Fd1344c389929B378", ethers.utils.parseEther("750000"),"0x05333c1f0af3df88f0dc13897010a772c5cbca67b9a14f74928a6ffdaf6b6ae1")
    console.log("withdraw successfull")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
