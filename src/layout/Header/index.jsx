// import LoginButton from '../../button/LoginButton/LoginButton';
import React from 'react';
import Logo from '../../assets/images/logo.png';
import Image from 'next/image';
import LoginButton from '../../button/LoginButton/LoginButton';

const Header = () => {
  return (
    <>
      <header className="header">
        <Image src={Logo} alt="Logo" loading='lazy' width={50} height={50} />
        <LoginButton />
      </header>
    </>
  );
};

export default Header;
