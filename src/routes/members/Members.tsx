import React, { useState, useEffect } from "react";
import MemberCard from "../../components/memberCard/MemberCard";
import config from "../../config.json";
import "./Members.scss";
import { Member } from "../../utilities/types";
import defaultUser from '../../img/defaultuser.jpg';

export default function Members() {
  const OfficerList = config.Officers as Member[];
  const RetiredOfficerList = config.RetiredOfficers as Member[];
  const MembersOfHonorList = config.MembersOfHonor as Member[];
  const MembersList = config.Members as Member[];

  const [loadedImages, setLoadedImages] = useState<{ [key: string]: string }>({});

  function MappedList(list: Member[]) {
    return list.map((member, index) => (
      <div key={index} className="grid-item">
        {loadedImages[member.name] && (
          <MemberCard member={member} imageUrl={loadedImages[member.name]} />
        )}
      </div>
    ))
  }

  function LoadImages(people: Member[]) {
    return people.map((member) =>
      import(`../../img/${member.image}`).then((image) => {
        setLoadedImages((prevImages) => ({
          ...prevImages,
          [member.name]: image.default,
        }));
      }).catch(() => {
        setLoadedImages((preList) => ({
          ...preList,
          [member.name]: defaultUser,
        }));
      })
    )
  }

  useEffect(() => {
    Promise.all(LoadImages(OfficerList));
    Promise.all(LoadImages(RetiredOfficerList));
    Promise.all(LoadImages(MembersOfHonorList));
    Promise.all(LoadImages(MembersList));
  }, [OfficerList, RetiredOfficerList, MembersOfHonorList, MembersList]);

  function MembersSection(props: { classes: string, title: string, list: Member[] }) {
    return (
      <div>
        <h2><b>{props.title}</b></h2>
        <div className={props.classes}>
          {MappedList(props.list)}
        </div>
      </div>
    );
  }

  return (
    <div className="members">
      <div className="members-text">
        <h1 className="members-page-title flex-center"><b>Meet The Club Members</b></h1>
        <h5 className="members-page-text flex-center">
          Building a community is a collaborative effort partaken by some of the coolest people on campus.
          Except for that Neil guy, he's just kinda okay.
        </h5>
      </div>
      {OfficerList.length > 0 && 
      <MembersSection classes="member-cards current-officers" title="Officers" list={OfficerList}/>}
      {RetiredOfficerList.length > 0 && 
      <MembersSection classes="member-cards retired-officers" title="Retired Officers" list={RetiredOfficerList}/>}
      {MembersOfHonorList.length > 0 && 
      <MembersSection classes="member-cards honor" title="Members Of Honor" list={MembersOfHonorList}/>}
      {MembersList.length > 0 && 
      <MembersSection classes="member-cards members" title="Members" list={MembersList}/>}
    </div>
  );
}
