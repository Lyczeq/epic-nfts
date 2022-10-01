import {
  useCall,
  useContractFunction,
  useEthers,
  useNetwork,
} from '@usedapp/core';
import { Contract } from 'ethers';
import { Interface } from 'ethers/lib/utils';
import { EPIC_NFT_CONTRACT } from '../constants';
import myEpicNft from '../utils/MyEpicNFT.json';

export const useMintNFT = () => {
  const { send, state } = useContractFunction(
    new Contract(EPIC_NFT_CONTRACT.address, new Interface(myEpicNft.abi)),
    EPIC_NFT_CONTRACT.makeNFTMethodName
  );

  return { send, state };
};
