import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();
  const handleRedirect = (pathName) => {
    if (pathName === '/') {
      router.push({
        query: { tabName: '' },
      });
    }

    if (pathName === '/pushProtocol') {
      router.push({
        query: { tabName: 'PushProtocol' },
      });
    }

    if (pathName === '/wakuProtocol') {
      router.push({
        query: { tabName: 'WakuProtocol' },
      });
    }
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-div">
          <div onClick={() => handleRedirect('/')} className="navbar-a">
            <FontAwesomeIcon icon={faHome} className="navbar-icon" />
            <p className="navbar-text">Home</p>
          </div>
        </div>

        <hr className="navbar-border" />

        <div className="navbar-div">
          <div
            onClick={() => handleRedirect('/pushProtocol')}
            className="navbar-a"
          >
            <img
              src="https://storage.googleapis.com/ethglobal-api-production/organizations%2F10a1v%2Flogo%2F1664802172170_aiOxYOJI_400x400.jpeg"
              alt="pushProtocol"
              loading="lazy"
              className="navbar-icon"
            />
            <p className="navbar-text">Push Protocol</p>
          </div>

          <div
            onClick={() => handleRedirect('/wakuProtocol')}
            className="navbar-a"
          >
            <img
              src="https://storage.googleapis.com/ethglobal-api-production/organizations%2Fpyhsm%2Flogo%2F1697648764524_waku%20logo.jpeg"
              alt="pushProtocol"
              loading="lazy"
              className="navbar-icon"
            />
            <p className="navbar-text">Waku Protocol</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
