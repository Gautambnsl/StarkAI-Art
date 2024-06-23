import ScrollSection from '../layout/ScrollSection/index.jsx';
import Header from '../layout/Header/index.jsx';
import HowAiverse from '../layout/HowAiverse/index.jsx';
import Engage from '../layout/Engage/index.jsx';
import Nft from '../layout/Nft/index.jsx';
import Mint from '../layout/Mint/index.jsx';
import { scroller } from 'react-scroll';

export default function Home() {
  const passData = (data) => {
    if (data == 'home') {
      scroller.scrollTo(data, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    } else if (data == 'about') {
      scroller.scrollTo(data, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    } else {
      scroller.scrollTo('mint', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
  };

  return (
    <>
      <Header passData={passData} />
      <ScrollSection />
      <HowAiverse />
      <Engage />
      <Nft />
      <Mint passData={passData} />
    </>
  );
}
