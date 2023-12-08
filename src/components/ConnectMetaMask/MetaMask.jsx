import { connectWallet } from '../../backendConnector/ConnectWallet/connectWallet';
import React from 'react';

const MetaMask = () => {
  return (
    <>
      <button class="button" onClick={connectWallet}>
        <img
          src="https://storage.googleapis.com/ethglobal-api-production/organizations%2F4pn9u%2Flogo%2F1679944522371_2Ubgzfgg_400x400.jpeg"
          alt="MetaMask"
          loading="lazy"
          width={25}
          height={25}
        />
        <p class="text">Connect Wallet</p>
      </button>
    </>
  );
};

export default MetaMask;
