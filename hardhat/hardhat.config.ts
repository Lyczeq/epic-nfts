import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';
import { HardhatUserConfig } from "hardhat/config";

dotenv.config({path: ".env"})

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks:{
    goerli: {
      url: process.env.ALCHEMY_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY!],
    }
  }
};

export default config;
