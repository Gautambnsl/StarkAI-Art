import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
  return (
    <nav className="h-[calc(100vh-92px)] w-[15%] fixed top-[92px] left-0 flex flex-col pl-[48px] pt-[16px]">
      <div className="h-[50%] overflow-auto">
        <Link to="/" className="flex items-center gap-[16px] mb-[32px]">
          <FontAwesomeIcon icon={faHome} className="w-[28px] h-[28px]" />
          <p className="text-xl">Home</p>
        </Link>
      </div>

      <hr className="border-t border-gray-300 my-[16px]" />

      <div className="h-[50%] overflow-auto">
        <Link to="/home2" className="flex items-center gap-[16px] mb-[32px]">
          <FontAwesomeIcon icon={faHome} className="w-[28px] h-[28px]" />
          <p className="text-xl">Home 2</p>
        </Link>
      </div>
    </nav>
  );
};

export default SideBar;
