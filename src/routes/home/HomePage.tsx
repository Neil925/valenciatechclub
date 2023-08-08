import React from 'react';
import "./HomePage.scss";
import config from "../../config.json";

export default function HomePage() {
  function randomHook () {
    return config.HomePageHooks[Math.floor(Math.random() * (config.HomePageHooks.length))];
};

  return (
    <div className="home">
      {randomHook()}
      <button className='join-us'>
        Join Us!
      </button>
    </div>
  )
}