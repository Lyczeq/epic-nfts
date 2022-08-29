import { ethers } from "hardhat";

describe("EpicNFT console log",  ()=>{
it('Logs contract address',async  ()=>{
    const nftContractFactory = await ethers.getContractFactory("EpicNFT");
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();


    const tx  =await  nftContract.makeAnEpicNFT();
    await tx.wait() 
})
})