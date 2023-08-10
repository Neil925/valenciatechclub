import React from 'react';
import "./HomePage.scss";
import config from "../../config.json";

export default function HomePage() {
  function randomHook() {
    return config.HomePageHooks[Math.floor(Math.random() * (config.HomePageHooks.length))];
  };

  return (
    <div className="home">
      <div className="header-hook flex-center">
        <div className="content-box flex-center-col">
          {randomHook()}
          <button className='join-us'>
            Join us!
          </button>
        </div>
      </div>
      <div className="about-us">
        <div className="text-box">
          <div className="paragraph">
            <h1 className='section'><b>Valencia Technology Club</b></h1>
            <p>Valencia Technology Club is a palce dedicated to building a friendly environment for 
              fellow tech majors to meet, network, and motivate one another in persuit of our career path.
              <br/><br/>
              We provide various engaging activities such as: programming workshops, desktop building, and
              even resume support. Club members are always welcome to come hangout, work together, or tutor 
              on none event days.</p>
          </div>
        </div>
        <div className="image-box">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft3.ftcdn.net%2Fjpg%2F00%2F72%2F98%2F56%2F360_F_72985661_LU1Xk0YQiPBwOuesuuJgwTn0NPlwP8ob.jpg&f=1&nofb=1&ipt=59b8172b4578e1770cf8af435f648f483eb6ce079a8a110a1012e5fb02fa7d87&ipo=images" />
        </div>
      </div>
    </div>
  )
}