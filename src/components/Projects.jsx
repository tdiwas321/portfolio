import ppbs from "../../public/images/ppbs.png";
import tj from "../../public/images/tj.png";
import UI from "../../public/images/UI.png";
import reactLogo from "../../public/images/react.png";
import nodeLogo from "../../public/images/node.png";
import figmaLogo from "../../public/images/figma.webp";
import mongoLogo from "../../public/images/mongo.svg";

export default function Projects() {
  return (
    <div className="projectContainer">
      <h1>
        <span className="orangeSpan">{"<"}</span>PROJECTS
        <span className="orangeSpan">{"/>"}</span>
      </h1>
      <div className="projects">
        <div className="projectBox">
          <a href="https://github.com/tdiwas321/final">
            <img className="projectImg"src={ppbs} />
          </a>
          <div className="pDescription">
            <h2>PARTY PALACE BOOKING SYSTEM</h2>
            <div className="pLanguage">
              <img src={reactLogo} />
              <img src={nodeLogo} />
              <img src={mongoLogo} />
            </div>
            <p>
              Dynamic MERN Stack web app for effortless party palace bookings,
              ensuring seamless event planning.
            </p>
          </div>
        </div>
        <div className="projectBox">
          <a href="https://github.com/tdiwas321/scrimbatraveljourney">
            <img className="projectImg" src={tj} />
          </a>
          <div className="pDescription">
            <h2>TRAVEL JOURNAL</h2>
            <div className="pLanguage">
              <img src={reactLogo} />
            </div>
            <p>
              Minimalistic React web app for travel journaling, showcasing
              multiple props via mapping, designed with simplicity in mind.
            </p>
          </div>
        </div>
        <div className="projectBox">
          <a href="https://www.figma.com/file/lMwx5LWCnd09L7LWlrI3gr/portfolio?type=design&node-id=3%3A2&mode=design&t=UrSxjam6JHJjOnNs-1">
            <img className="projectImg" src={UI} />
          </a>
          <div className="pDescription">
            <h2>UI/UX</h2>
            <div className="pLanguage">
              <img src={figmaLogo} />
            </div>
            <p>
              Sleek, intuitive UI/UX for portfolio website crafted in Figma,
              prioritizing visual appeal and seamless navigation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
