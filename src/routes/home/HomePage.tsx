import React from 'react';
import "./HomePage.scss";
import config from "../../config.json";
import { Link } from 'react-router-dom';

export default function HomePage() {
  function randomHook() {
    return config.HomePageHooks[Math.floor(Math.random() * (config.HomePageHooks.length))];
  };

  return (
    <div className="home">
      <div className="header-hook flex-center">
        <div className="content-box flex-center-col">
          {randomHook()}
          <Link to="/join-us">
            <button className='join-us'>
              Join us!
            </button>
          </Link>
        </div>
      </div>
      <div className="about-us">
        <div className="text-box">
          <div className="paragraph">
            <h1 className='section'><b>About Tech Club</b></h1>
            <p>Valencia Technology Club is a palce dedicated to building a friendly environment for
              fellow tech majors to meet, network, and motivate one another in persuit of our career path.
              <br /><br />
              We provide various engaging activities such as: programming workshops, desktop building, and
              even resume support. Club members are always welcome to come hangout, work together, or tutor
              on none event days.</p>
          </div>
        </div>
        <div className="image-box">
          <img src="./logo512.png" />
        </div>
      </div>
    </div>
  )
}