import { ethers } from 'hardhat';

async function main() {
  const EpicNFT = await ethers.getContractFactory('EpicNFT');
  const epicNFT = await EpicNFT.deploy();

  await epicNFT.deployed();
  console.log('Contract has been deploed to: ', epicNFT.address);
  // Call the function.
  let txn = await epicNFT.makeAnEpicNFT();
  // Wait for it to be mined.
  await txn.wait();
  console.log('Minted NFT #1');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
