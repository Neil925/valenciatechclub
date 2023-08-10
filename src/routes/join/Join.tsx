import React from "react";
import "./Join.scss";

export default function Join() {
  return (
    <div className="join-us">
      <div className="where-and-when flex">
        <div className="where flex-center-col">
          <h2>Where?</h2>
          <h4>Valencia East Campus Building 8 Room 221</h4>
        </div>
        <div className="when flex-center-col">
          <h2>When?</h2>
          <h4>Every Wednesday starting at 1pm and going to 4pm</h4>
        </div>
      </div>

      <div className="ribbon"></div>

      <div className="discord-engage-box flex">
        <div className="tech-logo-div">
          <img src="./logo512.png" alt="Tech Club logo" />
        </div>
        <div className="discord-and-engage flex">
          <div className="discord">
            <h2>
              Come check out the{" "}
              <a href="https://www.discord.gg/RRkWy4fVMv" target="_blank">
                Discord
              </a>{" "}
              and join the discussion!
            </h2>
          </div>
          <div className="engage">
            <h2>
              Stay up to date with our newest{" "}
              <a href="https://valenciacollege.campuslabs.com/engage/organization/valenciatechclub/events" target="_blank">
                Events
              </a>{" "}
              through Engage!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
