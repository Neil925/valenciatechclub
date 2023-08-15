import React, { useState, useEffect, ReactNode } from "react";
import MemberCard from "../../components/memberCard/MemberCard";
import config from "../../config.json";
import "./Members.scss";
import { Member } from "../../utilities/types";
import defaultUser from '../../img/defaultuser.jpg';
import MemberAccordian from "../../components/memberAccordian/MemberAccordian";

export default function Members() {
  const OfficerList = config.Officers as Member[];
  const RetiredOfficerList = config.RetiredOfficers as Member[];
  const MembersOfHonorList = config.MembersOfHonor as Member[];
  const MembersList = config.Members as Member[];

  const [loadedImages, setLoadedImages] = useState<{ [key: string]: string }>({});

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
        <MemberAccordian title="Officers" images={loadedImages} list={OfficerList}/>
      }
      {RetiredOfficerList.length > 0 &&
        <MemberAccordian title="Retired Officers" images={loadedImages} list={RetiredOfficerList} />}
      {MembersOfHonorList.length > 0 &&
        <MemberAccordian title="Members Of Honor" images={loadedImages} list={MembersOfHonorList} />}
      {MembersList.length > 0 &&
        <MemberAccordian title="Members" images={loadedImages} list={MembersList} />}
    </div>
  );
}
