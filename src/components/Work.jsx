/* eslint-disable react/no-unescaped-entities */
import eduimg from "../../public/images/edu.svg";
export default function Work() {
  return (
    <div className="workeducation">
      <div className="workContainer">
        <div className="experienceContainer">
          <div className="experience">
            <h1 className="whiteSpan">
              WORK EXPERIENCE : <span className="orangeSpan">{"{"}</span>
            </h1>
            <div className="experienceDesc">
              <ul>
                <li>
                  <span className="bold">id:</span>
                  <span className="listdesc">"1",</span>
                </li>
                <li>
                  <span className="bold">position: </span>
                  <span className="listdesc">
                    "WordPress Developer Intern",
                  </span>
                </li>
                <li>
                  <span className="bold">startDate: </span>{" "}
                  <span className="listdesc">"02/2023",</span>
                </li>
                <li>
                  <span className="bold">endDate: </span>{" "}
                  <span className="listdesc">"05/2023",</span>
                </li>
                <li>
                  <span className="bold">description: </span>{" "}
                  <span className="listdesc">
                    "Assisted in WordPress theme/plugin development, issue
                    troubleshooting, and optimization. Gained hands-on
                    experience in PHP, MySQL, HTML, CSS, JS. Adaptability and
                    problem-solving in a fast-paced environment",
                  </span>
                </li>
              </ul>
            </div>
            <h1 className="orangeSpan">{"}"}</h1>
          </div>
        </div>
        <div className="educationContainer">
          <div className="education">
            <h1 className="blueSpan">EDUCATION</h1>
            <h2 className="orangeSpan">Islington College Kathmandu</h2>
            <ul>
              <li>BSc(Hons) COMPUTING</li>
              <li>DEC 2020 - DEC 2023</li>
            </ul>
            <img className="eduimg" src={eduimg} />
          </div>
        </div>
      </div>
    </div>
  );
}
