import React from "react";
import "./MemberCard.scss";
import { Member } from "../../utilities/types";

export default function MemberCard(props: {
  member: Member;
  imageUrl: string
}) {
  return (
    <div className="card border">
      <img className="profile-picture border" src={props.imageUrl} alt="club member"/>
      <div className="card-content border">
        <h2 className="card-title">{props.member.name}</h2>
        <h3 className="card-subtitle">{props.member.role}</h3>
        <p className="card-text">{props.member.description}</p>
      </div>
    </div>
  );
};