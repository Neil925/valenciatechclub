import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faDiscord, faTiktok } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="box" style={{ justifyContent: "start" }}>
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
      {/* Add real contact information */}
      <div className="box" style={{ justifyContent: "end" }}>
        <div className="contact">
          <div className="phone">
            <FontAwesomeIcon icon={faPhone} />
            &nbsp;: (407) 364-5700
          </div>
          <div className="email">
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;: elkadineil@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}
