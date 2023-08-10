import React, { useState, useEffect } from "react";
import MemberCard from "../../components/memberCard/MemberCard";
import config from "../../config.json";
import "./Members.scss";

interface Member {
  name: string;
  role: string;
  description: string;
  image: string;
}

interface Config {
  MembersList: Member[];
}

export default function Members() {
  const { MembersList } = config as Config;
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    Promise.all(
      MembersList.map((member) =>
        import(`../../img/${member.image}`).then((image) => {
          setLoadedImages((prevImages) => ({
            ...prevImages,
            [member.name]: image.default,
          }));
        })
      )
    );
  }, [MembersList]);

  return (
    <div className="members">
      <div className="members-text">
        <h1 className="members-page-title">Our team is comprised of genuinely gifted minds</h1>
        <h5 className="members-page-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequatur voluptas doloribus incidunt ea expedita, ratione
          id laudantium dicta, aperiam, consequuntur sequi sint a nobis harum non possimus. Quae ducimus iste itaque, iure, quo praesentium
          consectetur impedit alias consequuntur, officiis recusandae ut ratione id fugit voluptatum voluptas sed animi fuga molestiae
          officia unde ipsum sunt. Rerum fuga eaque praesentium ducimus optio dicta corporis libero nisi consectetur dolorem, qui aliquam,
          deleniti ipsum amet, alias voluptatum fugiat soluta quaerat tenetur aliquid pariatur necessitatibus et blanditiis consequuntur?
          Repudiandae qui ducimus illum ex aperiam facere, culpa quae maiores reiciendis est libero assumenda minima nihil.
        </h5>
      </div>
      <div className="member-cards">
        {MembersList.map((member, index) => (
          <div key={index}>
            {loadedImages[member.name] && (
              <MemberCard name={member.name} role={member.role} description={member.description} image={loadedImages[member.name]} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
