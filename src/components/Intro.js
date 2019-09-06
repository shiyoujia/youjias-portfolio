import React from 'react';
import selfie from '../selfie.jpeg';

class Intro extends React.Component {
  render() {
    return (
      <div className="intro-wrapper">
        <img src={selfie} alt="selfie" />
        <p className="captions">
          YouJia Shi <br/>
          Upcoming Software Engineer <br/>
          Las Vegas - San Jose
        </p>
      </div>
    )
  }
}

export default Intro;