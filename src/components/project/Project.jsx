import React from "react";
import "./Project.css";
import IMG1 from "../../assets/project1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const Project = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title:
        "How Recycle - Web app that finds the transfer station near the user's location",
      github: "https://github.com/jsalvin-temp/How-Recycle",
      demo: "#",
    },
    {
      id: 2,
      image: IMG2,
      title: "Project 2",
      github: "https://github.com",
      demo: "https://dribbble.com/Alien_pixels",
    },
    {
      id: 3,
      image: IMG3,
      title: "Project 3",
      github: "https://github.com",
      demo: "https://dribbble.com/Alien_pixels",
    },
  ];
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;