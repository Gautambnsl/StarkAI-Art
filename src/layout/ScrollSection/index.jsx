import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ScrollSection = () => {
  return (
    <div className="section">
      <div className="headerBottom">
        <p className="headerBottomContent">REWARDS</p>
        <p className="headerBottomContent">AIRDROPS</p>
        <p className="headerBottomContent">OWNERSHIP</p>
        <FontAwesomeIcon icon={faGlobe} />
        <p className="headerBottomContent">CREATE</p>
        <p className="headerBottomContent">FROM</p>
        <p className="headerBottomContent">IMAGINATIONS</p>
        <FontAwesomeIcon icon={faGlobe} />
        <p className="headerBottomContent">FIRST</p>
        <p className="headerBottomContent">EVER</p>
        <p className="headerBottomContent">GENERATED</p>
        <p className="headerBottomContent">NFTS</p>
      </div>
    </div>
  );
};

export default ScrollSection;
