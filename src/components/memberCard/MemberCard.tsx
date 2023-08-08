import React from "react";
import "./MemberCard.scss";

type MemberProp = {
  name: string;
  role: string;
  description: string;
};

const MemberCard = (props: MemberProp) => {
  return (
    <div className="card">
      <img className="profile-picture" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cb08UhKHU2XF7BRKhq8jawHaHZ%26pid%3DApi&f=1&ipt=61ca1f1e1228619ff5f967454c632c25a3db4e893b9e02b9c7c62f789e044a70&ipo=images" />
      <div className="card-content">
        <h2 className="card-title">{props.name}</h2>
        <h3 className="card-subtitle">{props.role}</h3>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
};

export default MemberCard;
