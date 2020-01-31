import React from 'react';
import { Link } from 'react-router-dom';
import gifLand from '../images/gifLandd.gif';

const landingStyles = {
  landingContainer: 'ui column centered grid',
  startButton: 'start ui pink button',
  loginLink: 'ui tiny purple button',
  discoverHeader: 'absolute start ui header',
  discover: {
    color: '#374141',
    fontSize: '2em',
    textShadow: 'black 1px 0 10px',
    top: '9em',
    left: 'auto',
  },
  letsFind: {
    color: '#374141',
    fontSize: '2em',
    textShadow: 'black 1px 0 10px',
    top: '9.5em',
    left: 'auto',
  },
  start: {
    top: '10em',
    left: '50vw',
  },
  positionBtn: {
    position: 'absolute',
    top: '90vh',
  },
  posSignin: {
    top: '91vh',
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
  <div className="relative">
    <div className={landingContainer}>
      <div style={discover} className={discoverHeader}>Discover your next meal.</div>
      <div style={letsFind} className={discoverHeader}>{'Let\'s find it!'}</div>
      <img src={gifLand} alt="" className="img-landing" />
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
