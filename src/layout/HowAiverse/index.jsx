import React from 'react';

const HowAiverse = () => {
  return (
    <div className="aiversebg" id="about" style={{ position: 'relative' }}>
      <div className="howToFilter"></div>
      <div className="top-header">
        <h1 className="header-aiverse">How do StarkAI-Art Game NFTs work?</h1>
        <p
          className="p1"
        >
          Welcome to StarkAI Art, an exciting game where creativity meets
          cutting-edge technology on the StarkNet platform! Dive into a world
          where you can play with words to generate unique AI-powered NFTs and
          mint them on the blockchain.
        </p>
      </div>
      <img
        src="https://github.com/Gautambnsl/aiverse-nft/blob/main/final-frontend/src/assets/images/logo4.png?raw=true"
        className="techImg"
      />
      <div style={{ position: 'absolute', bottom: '0', marginLeft: '12%' }}>
        <img
          src="https://github.com/Gautambnsl/aiverse-nft/blob/main/final-frontend/src/assets/images/robot3.png?raw=true"
          className="robot"
        />
        <div className="box">
          <h3 className="imagin">Imaginate to Create</h3>
        </div>
      </div>
    </div>
  );
};

export default HowAiverse;
