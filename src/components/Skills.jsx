/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import datas from "../components/skillData";

export default function Skills() {
  const [data, setData] = useState(datas);

  const renderSkills = data.map((skill) => {
    return (
      <div key={skill.language} className="skillBlock">
        <img className="skillimg" src={skill.image} />
        <h1>{skill.language}</h1>
      </div>
    );
  });
  return (
    <div className="skillsContainer">
      <div className="skilled">
        <h1 className="orangeSpan">SKILLS</h1>
        <div className="skills">{renderSkills}</div>
      </div>
      <div className="contactContainer">
        <div className="contactOne">
            <h1 className="orangeSpan">Let's connect and collaborate – drop me a line!</h1>
            <h3>
                +977 9814030951<br/>
                tdiwas321@gmail.com
            </h3>
        </div>
        <a href="mailto:tdiwas321@gmail.com"><button className="contactButton">CONTACT ME</button></a>
      </div>
    </div>
  );
}
