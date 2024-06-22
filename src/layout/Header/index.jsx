import { DynamicWidget } from '@dynamic-labs/sdk-react-core';

const Header = (props) => {
  const internalLinks = ['HOME', 'ABOUT', 'MINT', 'CONTACT US'];
  const connectWallet = () => {};
  return (
    <div className="headerParent">
      <div className="headerEllipse">
        <div className="headerEllipseTwo" />
      </div>
      <img
        className="spiral"
        src="https://github.com/Gautambnsl/aiverse-nft/blob/main/final-frontend/src/assets/images/spiralBG.png?raw=true"
      />
      <img
        className="bigHand"
        src="https://github.com/Gautambnsl/aiverse-nft/blob/main/final-frontend/src/assets/images/landinghand.png?raw=true"
      />
      <div className="titleBarParent">
        <div className="logoTitleParent">
          <img
            className="headerLogo"
            src="https://github.com/Gautambnsl/aiverse-nft/blob/main/final-frontend/src/assets/images/logo.png?raw=true"
          />
          <div className="headerTitles">
            <p className="aiverse">StarkAI-Art</p>
            <p className="nfts">NFTs</p>
          </div>
        </div>
        <div className="headerInternalLinks">
          {internalLinks.map((item, index) => {
            return (
              <p
                className="headerInternalLink"
                onClick={() => console.log(item)}
                key={index}
              >
                {item}
              </p>
            );
          })}
        </div>
        <div className="headerExternalLink">
          <DynamicWidget />
        </div>
      </div>
      <div className="headerContent">
        <div style={{ backdropFilter: 'blur(1px)' }}>
          <p className="headerAttractiveHeading">
            "Own a piece of
            <br />
            Artificial Intelligence"
          </p>
          <p className="headerSubHeading">Imaginate & Generate</p>
          <p className="headerHeadingContent">
            These are AI generated image NFTs which a user can create by typing
            a phrase and making a NFT of the image.
          </p>
          <div className="poweredBy">
            <button
              className="mintYourNft"
              onClick={() => props.passData('mint')}
            >
              Mint your NFT{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
