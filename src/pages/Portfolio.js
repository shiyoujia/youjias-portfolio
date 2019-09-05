import React from 'react';
import '../styles/Portfolio.css';
import cloud from '../cloud.png';
import selfie from '../selfie.jpeg';
import RainDrop from '../components/RainDrop';

class ReactOrigin extends React.Component {
  render() {
    return (
    <main className='self-page'>
      <div className='cloud-wrapper'>
        <img src={cloud} alt="cloud"/>
        <header className='cloud-title'>YouJia's Portfolio</header>
      </div>
      <div className='rain-drop'>
        <RainDrop/>
      </div>
      <div className='rain-drop2'>
        <RainDrop/>
      </div>
      <div className='rain-drop3'>
        <RainDrop/>
      </div>
      <div className='rain-drop4'>
        <RainDrop/>
      </div>
      <div className='rain-drop5'>
        <RainDrop/>
      </div>

      <div className='intro'>
        <img src={selfie} alt="selfie"/>
        <span className="about-me">AboutMe</span>
      </div>
    </main>
    )
  }
}

export default ReactOrigin;