import { StarknetWalletConnectors } from '@dynamic-labs/starknet';
import '../styles/globals.css';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import {
  StarknetConfig,
  argent,
  braavos,
  publicProvider,
  useInjectedConnectors,
  voyager,
} from '@starknet-react/core';
import { mainnet, sepolia } from '@starknet-react/chains';

export default function App({ Component, pageProps }) {
  const { connectors } = useInjectedConnectors({
    // Show these connectors if the user has no connector installed.
    recommended: [argent(), braavos()],
    // Hide recommended connectors if the user has any connector installed.
    includeRecommended: 'onlyIfNoConnectors',
    // Randomize the order of the connectors.
    order: 'random',
  });
  return (
    <DynamicContextProvider
      settings={{
        environmentId: 'be72e05e-2712-4d85-8d2f-214df749013f',
        walletConnectors: [StarknetWalletConnectors],
      }}
    >
      <StarknetConfig
        chains={[mainnet, sepolia]}
        provider={publicProvider()}
        connectors={connectors}
        explorer={voyager}
      >
        <Component {...pageProps} />
      </StarknetConfig>
    </DynamicContextProvider>
  );
}
