import React from 'react';
import '../styles/Portfolio.css';
import cloud from '../cloud.png';
import Intro from '../components/Intro';
import RainDrop from '../components/RainDrop';
import AboutMe from '../components/AboutMe';
import faceApp from '../faceApp.png';
import roboApp from '../roboFriends.png';
import coming from '../comingSoon.png'


class Portfolio extends React.Component {
  render() {

    const rainName = [
      {
        Name: 'rain-drop',
        photoLink: faceApp,
        webLink: 'https://face-rec-project.herokuapp.com/'
      },
      {
        Name: 'rain-drop2',
        photoLink: roboApp,
        webLink: 'https://robo-generator.herokuapp.com/'
      },
      {
        Name: 'rain-drop3',
        photoLink: coming,
        webLink: ''
      },
      {
        Name: 'rain-drop4',
        photoLink: coming,
        webLink: ''
      },
      {
        Name: 'rain-drop5',
        photoLink: coming,
        webLink: ''
      }
    ]


    return (
      <main className='self-page'>
        <div className='cloud-wrapper'>
          <img src={cloud} alt="cloud" />
          <header className='cloud-title'>YouJia's Portfolio</header>
        </div>
        
      <div className='hoverArray'>
        {rainName.map(drop => (
          <div className={drop.Name} key={drop.Name}>
            <RainDrop photo={drop.photoLink} redirectLink={drop.webLink}/>
          </div>
        ))}
        </div>

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