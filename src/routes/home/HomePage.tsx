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
      <div className="about-us flex">
        <div className="text-box">
          <div className="paragraph">
            <h1 className='section'><b>Valencia Technology Club</b></h1>
            <p>text</p>
          </div>
        </div>
        <div className="image-box ">
          {/* OG image didn't load for me, so just found the same one but this did IDK ¯\_(ツ)_/¯  */}
          {/* <img src="https://www.shutterstock.com/shutterstock/photos/229793107/display_1500/stock-photo-multi-ethnic-group-of-people-and-activity-concept-229793107.jpg" /> */}
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft3.ftcdn.net%2Fjpg%2F00%2F72%2F98%2F56%2F360_F_72985661_LU1Xk0YQiPBwOuesuuJgwTn0NPlwP8ob.jpg&f=1&nofb=1&ipt=59b8172b4578e1770cf8af435f648f483eb6ce079a8a110a1012e5fb02fa7d87&ipo=images" />
        </div>
      </div>
    </div>
  )
}