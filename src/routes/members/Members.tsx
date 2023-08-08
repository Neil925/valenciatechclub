import React from "react";
import MemberCard from "../../components/memberCard/MemberCard";
import membersData from "./test.json";
import "./Members.scss";

export default function Members() {
  return (
    <div className="members">
      <h1>Meet the Members!</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere praesentium consequatur repudiandae! Quod quibusdam dolore
        accusantium veniam iure neque, ut velit quidem ex aspernatur nulla obcaecati, culpa dolorum quisquam perspiciatis earum quam
        voluptatum minus impedit iste ratione possimus excepturi quo maiores. Consectetur labore itaque tempore at iusto suscipit adipisci
        blanditiis reiciendis, architecto error, explicabo ad eveniet saepe a sint maxime dolor. Eius, quos impedit? Qui ad fugiat possimus
        vero molestiae magni dolor soluta accusamus, error numquam consequatur delectus modi nobis veniam, quasi, tempore est sed
        accusantium! Impedit consequatur, optio, a dolorem quos voluptatibus, natus fugit asperiores hic commodi ex nemo!
      </p>
      <div className="member-cards">
        {membersData.map((member, index) => (
          <MemberCard key={index} name={member.name} role={member.role} description={member.description} />
        ))}
      </div>
    </div>
  );
}
