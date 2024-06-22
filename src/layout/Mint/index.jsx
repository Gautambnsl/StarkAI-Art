import axios from 'axios';
import React, { useState } from 'react';
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';

const Mint = () => {
  const [phase, setPhase] = useState('');

  const handlePhaseInput = (event) => {
    setPhase(event.target.value);
  };

  const handleMinting = async () => {
    const options = {
      method: 'POST',
      url: 'https://dalle-3.p.rapidapi.com/api/v1/generate',
      headers: {
        'x-rapidapi-key': '48fdb1ce26msh4844406089f6956p1e0cfcjsn300a44b6459f',
        'x-rapidapi-host': 'dalle-3.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      data: {
        prompt: phase,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="mintParent" id="mint">
      <p className="mintTitle">Mint Your First</p>
      <p className="mintTitleBold">AI Generated NFTs</p>
      <div className="mintButtonParent">
        <input
          className="mintInput"
          placeholder="Enter your prompt"
          onChange={handlePhaseInput}
          value={phase}
        />
        <button
          className="buttonMint"
          style={{ cursor: 'pointer' }}
          onClick={handleMinting}
        >
          Mint Now
        </button>
        <DynamicWidget />
      </div>
      <div className="mintFooter">
        <img
          className="logo"
          src="https://github.com/Gautambnsl/aiverse-nft/blob/main/final-frontend/src/assets/images/logo.png?raw=true"
        />
        <div className="maintFooterTextParent">
          <p className="mintFooterText">Shaping the</p>
          <p className="mintFooterText">AI Industry </p>
        </div>
        <div className="mintFooterLinkParent">
          <div className="mintFooterInternalLink">
            <a className="internalLink" onClick={() => passData('about')}>
              About Us
            </a>
            <a className="internalLink" onClick={() => passData('mint')}>
              Contact
            </a>
            <a className="internalLink" onClick={() => passData('home')}>
              Home
            </a>
            <a
              className="internalLink"
              href="https://drive.google.com/file/d/12wUlejsHPuImzPBrUmNlmody70lU8AcL/view"
            >
              Whitepaper
            </a>
          </div>
        </div>
      </div>
      <div className="mintFooterMobile">
        <img
          className="logoMobile"
          src="https://github.com/Gautambnsl/aiverse-nft/blob/main/final-frontend/src/assets/images/logo.png?raw=true"
        />
        <div className="maintFooterTextParentMobile">
          <p className="mintFooterTextMobile">Shaping the</p>
          <p className="mintFooterTextMobile">AI Industry </p>
        </div>
      </div>
      <div className="mintFooterLinkParentMobile">
        <div className="mintFooterInternalLink">
          <a className="internalLink" onClick={() => passData('about')}>
            About Us
          </a>
          <a className="internalLink" onClick={() => passData('mint')}>
            Contact
          </a>
          <a className="internalLink" onClick={() => passData('home')}>
            Home
          </a>
          <a
            className="internalLink"
            href="https://drive.google.com/file/d/12wUlejsHPuImzPBrUmNlmody70lU8AcL/view"
          >
            Whitepaper
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mint;
