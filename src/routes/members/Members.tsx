import React from "react";
import MemberCard from "../../components/memberCard/MemberCard";
import config from '../../config.json';
import "./Members.scss";

export default function Members() {
  return (
    <div className="members">
      <div className="member-cards">
        {config.MembersList.map((member, index) => (
          <MemberCard key={index} name={member.name} role={member.role} description={member.description} />
        ))}
      </div>
    </div>
  );
}
