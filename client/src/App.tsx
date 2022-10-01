import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import { ConnectWallet } from './components/ConnectWallet/ConnectWallet';
import { useMintNFT } from './hooks/useMintNFT';
import { EPIC_NFT_CONTRACT } from './constants';
import { useEffect } from 'react';
function App() {
  const { account } = useEthers();

  const etherBalance = useEtherBalance(account);

  const { send, state, events = [] } = useMintNFT();

  const onMinftNFT = async () => {
    try {
      send();
    } catch (error) {
    } finally {
    }
  };

  // const filter = {
  //   contract: EPIC_NFT_CONTRACT.address,
  //   event: 'NewEpicNFTMinted',
  //   args: [null],
  // };

  useEffect(() => {
    const newEpicNFTEvent = events.find(e => e.name === 'NewEpicNFTMinted');
    const tokenId = newEpicNFTEvent?.args.tokenId.toNumber();
    // alert(
    //   `Hey there! We've minted your NFT. It may be blank right now. It can take a max of 10 min to show up on Pixxiti. Here's the link: <https://goerli.pixxiti.com/nfts/${EPIC_NFT_CONTRACT.address}/${tokenId}>`
    // );
  }, [events]);

  return (
    <div>
      <ConnectWallet />
      {etherBalance && (
        <div className="balance">
          <br />
          Balance:
          <p className="bold">{formatEther(etherBalance)}</p>
          <button onClick={onMinftNFT}>Make NFT</button>
        </div>
      )}
    </div>
  );
}
export default App;
