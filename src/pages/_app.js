import { StarknetWalletConnectors } from '@dynamic-labs/starknet';
import '../styles/globals.css';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';

export default function App({ Component, pageProps }) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: 'be72e05e-2712-4d85-8d2f-214df749013f',
        walletConnectors: [StarknetWalletConnectors],
      }}
    >
      <Component {...pageProps} />;
    </DynamicContextProvider>
  );
}
