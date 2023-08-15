import React from "react";
import "./Join.scss";

export default function Join() {
  return (
    /*
        TODO: Give cards glow
        TODO: Change emojis with FA icons/pngs
    */

    <div className="join-us-div">
      <div className="whitespace"></div>
      <div className="join-us-ribbon flex-center-col">
        <div className="join-us-ribbon-text flex-center-col">
          <h1>📣 Join Us at Valencia Tech Club! 🚀</h1>
          <h3>
            Are you passionate about all things tech? Eager to explore the latest advancements, share your insights, and connect with
            like-minded enthusiasts? Look no further than the Valencia Tech Club! 🌟
          </h3>
        </div>
      </div>
      <div className="location flex">
        <div className="where flex-center-col">
          <h3>🗺️ Where: Valencia East Campus, Building 8, Room 221</h3>
        </div>
        <div className="logo flex-center-col">
          <img src="./logo192.png" alt="vTechClub logo" />
        </div>
        <div className="when flex-center-col">
          <h3>📅 When: Every Wednesday, from 1:00 PM to 4:00 PM</h3>
        </div>
      </div>
      <div className="join-us-body flex">
        <div className="expect flex-center-top">
          <h4>What to expect:</h4>
          <div className="list-box flex-center-col">
            <ul className="no-bullets ">
              <li>
                <h5>🗣️ Engaging discussions on tech trends</h5>
              </li>
              <li>
                <h5>🔧 Hands-on workshops and showcases</h5>
              </li>
              <li>
                <h5>🤝 Networking with fellow tech lovers</h5>
              </li>
              <li>
                <h5>💡 Brainstorming innovative projects</h5>
              </li>
              <li>
                <h5>🎯 Insightful discussions about tech career paths</h5>
              </li>
            </ul>
          </div>
        </div>
        <div className="discord flex-center-col">
          <div className="card flex">
            <h2>Join Us on Discord</h2>
            <p>Stay connected, share ideas, and network with fellow tech enthusiasts.</p>
            <a href="https://www.discord.gg/RRkWy4fVMv" target="_blank" rel="noopener noreferrer">
              Join Discord
            </a>
          </div>
          <div className="card flex">
            <h2>Explore Upcoming Events</h2>
            <p>Discover exciting workshops, presentations, and tech discussions.</p>
            <a
              href="https://valenciacollege.campuslabs.com/engage/organization/valenciatechclub/events"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Engage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
