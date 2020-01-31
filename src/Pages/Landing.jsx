import React from 'react';
import { Link } from 'react-router-dom';

const landingStyles = {
  landingContainer: 'ui column centered grid',
  startButton: 'ui olive button',
  loginLink: 'ui black button',
  discoverHeader: 'absolute start ui header',
  discover: {
    color: '#374141',
    fontSize: '3.5em',
    textShadow: 'black 1px 0 10px',
    textAlign: 'left',
    top: '12vh',
    left: '5vw',
  },
  letsFind: {
    color: '#374141',
    fontSize: '3.5em',
    textAlign: 'left',
    textShadow: 'black 1px 0 10px',
    top: '18vh',
    left: '5vw',
    width: 'inherit',
  },
  start: {
    top: '72vh',
    left: '50vw',
  },
  positionBtn: {
    position: 'absolute',
    top: '72vh',
  },
  posSignin: {
    top: '74vh',
  },
};

const {
  landingContainer,
  startButton,
  discover,
  discoverHeader,
  letsFind,
  loginLink,
  positionBtn,
  posSignin,
} = landingStyles;

const Landing = () => (
  <div className="relative fullScreen bgLanding">
    <div className={landingContainer}>
      <div style={discover} className={discoverHeader}>Discover your next meal.</div>
      <div style={letsFind} className={discoverHeader}>{'Let\'s find it!'}</div>
      <div style={positionBtn}>
        <Link to="/signup">
          <button type="submit" className={startButton}>Start</button>
        </Link>
        <br />
        <br />
        <Link to="/login">
          <button type="submit" className={loginLink} style={posSignin}>Log in</button>
        </Link>
      </div>
    </div>
  </div>
);

export default Landing;
