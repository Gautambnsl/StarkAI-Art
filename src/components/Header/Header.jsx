import React from 'react';
import Logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <>
      <header className="flex z-[2] w-full min-h-[92px] items-center justify-between px-[48px] fixed top-0 left-0 bg-[#FAF5F0]">
        <img src={Logo} alt="logo" loading='lazy' className='w-16' />
      </header>
    </>
  );
};

export default Header;
