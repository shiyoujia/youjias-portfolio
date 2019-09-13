import React from 'react';

class AboutMe extends React.Component {
  render() {
    return (
      <div className="about-me-wrapper">
        <h1 className="start-title">
          Let's just start here...
        </h1>
        <p className="hello">
          this is where I will begin my journey as a future software engineer. My name is YouJia, 
          I was a former barista at Linkedin and I was highly inspired by the people around me to be in the 
          computer science industry. I quit my job to be fully focused on taking courses on Udemy and having a tutor to teach me 
          about all the foundations of coding. After months of studying and practicing, I've grasped the knowledge about <strong>Redux, React, 
          Javascript, CSS, HTML, API, and PSQL</strong>. From learning front-end to back-end, my favorite is still front-end so 
          my goal is find a job in the front-end field.
          </p>
          <p className="hint">To see some of the projects I've created, hover your <br/>
            mouse over the raindrops to preview the website <br/>
            and click on the preview to be redirected.
          </p>
          <p className="hello2">Since I learned Javascript without attending school, I want to be 
          a successful prodigy, walking the route of only experience rather than a higher educational background. 
          A prodigy that might change the way of how people see things in the present and future. I am very eager
          to learn and I want to see how far I can go. <strong>As anyone else would say, all I need is a chance</strong>.
          I want to use my chance to prove that I can be as good as anyone else even if I walked a different route. I want to 
          show the world that school is not the only way to be successful in this industry because not everyone 
          have the ability to reach for a higher education.
          </p>
      </div>
    )
  }
}

export default AboutMe;