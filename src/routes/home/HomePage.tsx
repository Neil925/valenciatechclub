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
      <div className="about-us flex-center">
        <div className="text-box">
          <div className="paragraph">
            <h1 className='section'><b>Valencia Technology Club</b></h1>
            <p>text</p>
          </div>
        </div>
        <div className="image-box flex-center">
          <img src="https://www.shutterstock.com/shutterstock/photos/229793107/display_1500/stock-photo-multi-ethnic-group-of-people-and-activity-concept-229793107.jpg" />
        </div>
      </div>
    </div>
  )
}