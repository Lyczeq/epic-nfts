import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import { ConnectWallet } from './components/ConnectWallet/ConnectWallet';

function App() {
  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);

  return (
    <div>
      <ConnectWallet />
      {etherBalance && (
        <div className="balance">
          <br />
          Balance:
          <p className="bold">{formatEther(etherBalance)}</p>
        </div>
      )}
    </div>
  );
}

export default App;
