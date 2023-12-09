import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/images/logo.png';
import Image from 'next/image';
import MetaMask from '../../components/ConnectMetaMask/MetaMask';
import { getAddress } from '../../backendConnector/ConnectWallet/connectWallet';

const Header = () => {
  const [address, setAddress] = useState('');

  const fetchAddress = async () => {
    const addressFromMetaMask = await getAddress();
    setAddress(addressFromMetaMask);
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  return (
    <>
      <header className="header">
        <Image src={Logo} alt="Logo" loading="lazy" width={50} height={50} />
        <div style={{ display: 'flex', gap: '20px' }}>
          <MetaMask />
          {address && (
            <>
              <button className="claim-free-trial-button">Fetch Data</button>
              <p className="navbar-text">Prompt Call Available</p>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
