import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { XMTPProvider } from '@xmtp/react-sdk';
import { AirstackProvider } from '@airstack/airstack-react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new ApolloClient({
  uri: 'https://api.airstack.xyz/gql',
  cache: new InMemoryCache(),
});
root.render(
  <>
    <ApolloProvider client={client}>
      <AirstackProvider apiKey={'1b33a36e9898e4fc7a2b9731002461150'}>
        <XMTPProvider>
          <App />
        </XMTPProvider>
      </AirstackProvider>
    </ApolloProvider>
  </>
);

reportWebVitals();
