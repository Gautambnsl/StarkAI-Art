import React, { useState } from 'react';
import OpenAI from 'openai';
import { useRouter } from 'next/router';
import PushUI from '../PushUI/PushUI';
import WakuUI from '../Waku/Waku';
import Main from '../Main';

const MainSection = () => {
  const router = useRouter();
  const { tabName } = router.query;

  const tabHandler = (tabName) => {
    if (tabName === 'PushProtocol') {
      return <PushUI />;
    } else if (tabName === 'WakuProtocol') {
      return <WakuUI />;
    } else {
      return <Main />;
    }
  };
  return (
    <>
      <div className="main-section">
        {tabHandler(tabName)}
      </div>
    </>
  );
};

export default MainSection;
