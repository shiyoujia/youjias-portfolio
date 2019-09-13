import React from 'react';
import '../styles/Portfolio.css';
import cloud from '../cloud.png';
import Intro from '../components/Intro';
import RainDrop from '../components/RainDrop';
import AboutMe from '../components/AboutMe';
import faceApp from '../faceApp.png';
import pic2 from '../selfie.jpeg';

class Portfolio extends React.Component {
  render() {

    const rainName = [
      {
        Name: 'rain-drop',
        photoLink: faceApp
      },
      {
        Name: 'rain-drop2',
        photoLink: pic2
      }
      // 'rain-drop3', 
      // 'rain-drop4', 
      // 'rain-drop5'
    ]


    return (
      <main className='self-page'>
        <div className='cloud-wrapper'>
          <img src={cloud} alt="cloud" />
          <header className='cloud-title'>YouJia's Portfolio</header>
        </div>
        
      <div className='testing'>
        {rainName.map(drop => (
          <div className={drop.Name}>
            <RainDrop photo={drop.photoLink}/>
          </div>
        ))}
        </div>



        {/* <div className='rain-drop'>
      {pictures.map(picture => (

        <RainDrop photo={picture} /> ))}
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
      </div> */}
        <div className='intro-side'>
          <Intro />
        </div>
        <div className="starter">
          <AboutMe />
        </div>
      </main>
    )
  }
}

export default Portfolio;