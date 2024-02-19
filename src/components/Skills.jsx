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
    </div>
  );
}
