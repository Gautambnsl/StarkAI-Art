import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/images/logo.png';
import Image from 'next/image';
import MetaMask from '../../components/ConnectMetaMask/MetaMask';
import { createAppUrlWithQuery,  erc6551TokensQuery, newQuery } from './usdcQuery';
import { useQuery } from '@apollo/client';

const Header = () => {
  const [address, setAddress] = useState('');
  // const [data, setData] = useState(null);

  // const newData = createAppUrlWithQuery(
  //   newQuery,
    // {
    //   blockchain: 'polygon',
    //   owner:'0x50E5e9D9143593292A7E4Fb4f4BeD961ECCA0433',
    //   tokenAddress: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359'
    // }
  // );


  const { loading, error, data } = useQuery(newQuery);

  console.log('data', data)
  console.log('loading', loading)
  console.log('error', error)


  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(newData);
  //     console.log('response', response)
  //     setData(response.data);
  //   } catch (error) {
  //     console.error('Failed to fetch data:', error);
  //   }
  // };

  // useEffect(() => {
  //     fetchData();
  // }, []);

  // console.log('data', data)


  return (
    <>
      <header className="header">
        <Image src={Logo} alt="Logo" loading="lazy" width={50} height={50} />
        <div style={{ display: 'flex', gap: '20px' }}>
          <MetaMask />
          {address && (
            <>
              <button className="claim-free-trial-button" onClick={fetchData}>
                Fetch Data
              </button>
              <p className="navbar-text">Prompt Call Available</p>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
