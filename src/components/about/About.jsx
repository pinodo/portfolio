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
              <small>* Certificate</small><br />
              <small>Computer Systems</small><br />
              <small>BCIT</small>
              <br />
              <br />
              <small>* Bachelor's Degree</small><br />
              <small>Science - Biology</small><br />
              <small>South Korea</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Experience</h5>
              <br />
              <small>Web Dev Volunteer</small><br />
              <small>ZYP Artgallary</small><br />
              <small>Remote</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Tools</h5>
              <br />
              <b><small>LANGUAGE</small></b>
              <br />
              <small>HTML5 / CSS3 / Java / Python / JavaScript</small>
              <br />
              <br />
              <b><small>TOOLS</small></b>
              <br />
              <small>Spring / Django / Git / Linux / SQL</small>
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
