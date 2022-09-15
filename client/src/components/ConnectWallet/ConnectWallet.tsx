import { useEthers, useConfig } from '@usedapp/core';

export const ConnectWallet = () => {
  const { activateBrowserWallet, account, deactivate, chainId } = useEthers();
  const config = useConfig();
  const buttonText = account ? 'Disconnect' : 'Connect';
  if (!config.readOnlyUrls?.[chainId!]) {
    return <p>Please use either Mainnet or Goerli testnet.</p>;
  }

  const handleWalletConnection = () => {
    account ? deactivate() : activateBrowserWallet();
  };

  return (
    <div>
      <button onClick={() => handleWalletConnection()}>{buttonText}</button>
    </div>
  );
};
