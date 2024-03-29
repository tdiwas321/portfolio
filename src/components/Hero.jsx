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
          <a href="https://github.com/tdiwas321">
            <img src={githubLogo} />
          </a>
          <a href="https://www.linkedin.com/in/diwas-thapa-1048b9163/">
            <img src={linkedinLogo} />
          </a>
        </div>
      </div>
      <div className="sectionTwo">
        <div className="sectionTwoTextContainer">
          React developer dedicated to crafting seamless web experiences.
          <br />
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
