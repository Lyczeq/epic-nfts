import { useEtherBalance, useEthers, useConfig } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';

function App() {
  const { activateBrowserWallet, account, deactivate, chainId } = useEthers();
  const etherBalance = useEtherBalance(account);
  const config = useConfig();

  if (!config.readOnlyUrls?.[chainId!]) {
    return <p>Please use either Mainnet or Goerli testnet.</p>;
  }

  return (
    <div>
      {!account && (
        <button onClick={() => activateBrowserWallet()}>Connect</button>
      )}
      {account && <button onClick={() => deactivate()}>Disconnect</button>}
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
