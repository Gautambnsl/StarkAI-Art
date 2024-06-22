import ScrollSection from '../layout/ScrollSection/index.jsx';
import Header from '../layout/Header/index.jsx';
import HowAiverse from '../layout/HowAiverse/index.jsx';
import Engage from '../layout/Engage/index.jsx';
import Nft from '../layout/Nft/index.jsx';
import Mint from '../layout/Mint/index.jsx';

export default function Home() {
  return (
    <>
      <Header />
      <ScrollSection />
      <HowAiverse />
      <Engage />
      <Nft />
      <Mint />
    </>
  );
}
