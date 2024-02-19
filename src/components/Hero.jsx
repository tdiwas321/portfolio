/* eslint-disable react/no-unescaped-entities */
import githubLogo from "../../public/images/github.png";
import linkedinLogo from "../../public/images/linkedin.png";

export default function Hero() {
  return (
    <div className="heroContainer">
      <div className="sectionOne">
        <h1>DIWAS THAPA</h1>
        <h3>Full-Stack Developer</h3>
        <div className="socialsContainer">
          <img src={githubLogo} />
          <img src={linkedinLogo} />
        </div>
      </div>
      <div className="sectionTwo">
        <div className="sectionTwoTextContainer">
          React developer dedicated to crafting seamless web experiences.
          <br/>
          <span className="orangetxt">Let's innovate together!</span>
        </div>
      </div>
      <div className="circles">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
