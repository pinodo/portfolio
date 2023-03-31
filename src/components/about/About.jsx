import React from "react";
import "./About.css";
import SELFIE from "../../assets/selfie2.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={SELFIE} alt="selfie" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Education</h5>
              <br />
              <b><small>* Certificate</small></b><br />
              <small>Computer Systems</small><br />
              <small>BCIT</small>
              <br />
              <br />
              <b><small>* Bachelor's Degree</small></b><br />
              <small>Science - Biology</small><br />
              <small>South Korea</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Experience</h5>
              <br />
              <b><small>Web Dev Volunteer</small></b><br />
              <small>ZYP Artgallary</small><br />
              <small>Remote</small>
              <br />
              <br />
              <b><small>Lab Assistant</small></b><br />
              <small>University Coop</small><br />
              <small>South Korea</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Tools I</h5>
              <br />
              <b><small>LANGUAGE</small></b>
              <br />
              <small>HTML5 / CSS3</small><br />
              <small>Java / Python</small><br />
              <small>JavaScript</small>
              <br />
              <br />
              <b><small>FRAMEWORK</small></b>
              <br />
              <small>Spring / Django</small><br />
              <small>React</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Tools II</h5>
              <br />
              <b><small>DATABASE</small></b>
              <br />
              <small>SQL / Oracle</small><br />
              <small>PostgreSQL / Firebase</small>
              <br />
              <br />
              <b><small>ETC</small></b>
              <br />
              <small>Git / Linux</small><br />
              <small>JUnit / Selenium</small>
            </article>
          </div>

          <p>
            I am an ambitious, motivated, and passionate learner recently
            graduated from BCIT.
            <br />
            A bunch of knowledge and projects at BCIT fostered a sense of
            curiosity for development.
            <br />I am a well-rounded person and easily coordinates to a team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
