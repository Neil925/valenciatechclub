import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faDiscord, faTiktok } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="box" style={{justifyContent: 'start'}}>
        <div className="vtechclub">
          <img src="./logo192.png" alt="VTechLogo" />
          vTech Club
        </div>
      </div>
      <div className="box" >
        <div className="socials">
          {/* Please add Real Social Links Later <3 */}
          <a href="https://www.youtube.com/watch?v=z3OKd5b2Rlw" target="_blank">
            <FontAwesomeIcon icon={['fab', 'instagram']} className="social fa-bounce-hover" />
          </a>
          <a href="https://www.discord.gg/RRkWy4fVMv" target="_blank">
            <FontAwesomeIcon icon={['fab', 'discord']} className="social fa-bounce-hover" />
          </a>
          <a href="https://www.youtube.com/watch?v=a8MZBUoQt68" target="_blank">
            <FontAwesomeIcon icon={['fab', 'tiktok']} className="social fa-bounce-hover" />
          </a>
        </div>
      </div>
      <div className="box" style={{justifyContent: 'end'}}>
      <div className="contact">phone number: 123-456-7890</div>
      </div>
    </div>
  );
}
