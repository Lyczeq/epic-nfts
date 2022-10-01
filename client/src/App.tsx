import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import { ConnectWallet } from './components/ConnectWallet/ConnectWallet';

import { useMintNFT } from './hooks/useMintNFT';

function App() {
  const { account } = useEthers();

  const etherBalance = useEtherBalance(account);

  const { send, state } = useMintNFT();

  const onMinftNFT = async () => {
    try {
      send();
    } catch (error) {
    } finally {
    }
  };

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
