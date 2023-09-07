import map from "../../img/map.png";
import calendar from "../../img/calendar.png";
import discord from "../../img/Discord.png";
import engage from "../../img/Engage.png";
import "./Join.scss";

export default function Join() {
  function toggleSpin() {
    var element = document.getElementById('engageImg')!;

    if (element.classList.contains("spin"))
      element.classList.remove("spin");
    else
      element.classList.add("spin");
  }

  function toggleBounce() {
    var element = document.getElementById('discordImg')!;

    if (element.classList.contains("bounce"))
      element.classList.remove("bounce");
    else
      element.classList.add("bounce");
  }


  return (
    /*
        TODO: Give cards glow
        TODO: Change emojis with FA icons/pngs/SVGs
    */

    <div className="join-us-div">
      <div className="join-us-ribbon flex-center-col">
        <div className="join-us-ribbon-text flex-center-col">
          <h1>Join the Valencia Tech Club!</h1>
        </div>
      </div>
      <div className="location flex">
        <div className="where flex-center-col">
          <h3>
            <img src={map} alt="map icon" className="icon" />
            &nbsp; Where: Valencia East Campus, Building 8, Room 221
          </h3>
        </div>
        <div className="logo flex-center-col">
          <img src="./logo192.png" alt="vTechClub logo" />
        </div>
        <div className="when flex-center-col">
          <h3>
            <img src={calendar} alt="calendar icon" className="icon" />
            &nbsp; When: Every Wednesday, from 1:00 PM to 4:00 PM
          </h3>
        </div>
      </div>
      <div className="join-us-links flex-center">
        <div className="flex-between small-card">
          <a href="https://www.discord.gg/RRkWy4fVMv" className="social-card flex-center-col discord"
          onMouseOver={toggleBounce} onMouseOut={toggleBounce}>
            <img src={discord} alt="discord" id="discordImg"/>
            <h3>Join the Discord!</h3>
          </a>
          <a href="https://valenciacollege.campuslabs.com/engage/organization/valenciatechclub/events"
            className="social-card flex-center-col engage" onMouseOver={toggleSpin} onMouseOut={toggleSpin}>
            <img src={engage} alt="engage" id="engageImg" />
            <h3>Keep up on Engage!</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
