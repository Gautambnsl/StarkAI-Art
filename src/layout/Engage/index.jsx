import React from 'react';

const Engage = () => {
  return (
    <div className="engagePage">
      <div className="engageFilter" />
      <div className="engageParent">
        <p className="engageTitle">Engage yourself with StarkAI-Art</p>
        <div className="engageStepBox">
          <div className="engageSteps">
            <p className="engageStepNum">01/</p>
            <p className="engageStepName">AI Generated Art</p>
          </div>
          <div className="engageSteps">
            <p className="engageStepNum">02/</p>
            <p className="engageStepName">Whitelists & Airdrop</p>
          </div>
          <div className="engageSteps">
            <p className="engageStepNum">03/</p>
            <p className="engageStepName">Get Rewards & Early Access</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engage;
