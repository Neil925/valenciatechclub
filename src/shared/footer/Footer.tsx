import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faDiscord, faTiktok } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="box" style={{ justifyContent: "start" }}>
        <div className="vtechclub">
          <img src="./logo192.png" alt="VTechLogo" />
          VTech Club
        </div>
      </div>
      <div className="box">
        <div className="socials">
          {/* Please add Real Social Links Later <3 */}
          <a href="https://www.youtube.com/watch?v=z3OKd5b2Rlw" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="social fa-bounce-hover" />
          </a>
          <a href="https://www.discord.gg/RRkWy4fVMv" target="_blank">
            <FontAwesomeIcon icon={faDiscord} className="social fa-bounce-hover" />
          </a>
          <a href="https://www.youtube.com/watch?v=a8MZBUoQt68" target="_blank">
            <FontAwesomeIcon icon={faTiktok} className="social fa-bounce-hover" />
          </a>
        </div>
      </div>
      {/* Add real contact information */}
      <div className="box" style={{ justifyContent: "end" }}>
        <div className="contact">
          <div className="phone">
            <FontAwesomeIcon icon={faPhone} />
            &nbsp;:123-456-7890
          </div>
          <div className="email">
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;:vtechclub@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}
