import React from 'react';
import ReactDOM from 'react-dom/client';

import { Mainnet, DAppProvider, Config, Goerli } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';
import App from './App';

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Goerli.chainId]: getDefaultProvider('goerli'),
  },
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>
);
