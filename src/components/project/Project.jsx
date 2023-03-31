import React from "react";
import "./Project.css";
import IMG1 from "../../assets/project1.jfif";
import IMG2 from "../../assets/project2.jpg";
import IMG3 from "../../assets/project3.jpg";
import IMG4 from "../../assets/project4.png";
import IMG5 from "../../assets/project5.png";
import IMG6 from "../../assets/project6.png";

const Project = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title:
        "React Apps : expense-management, to-do",
      github: "https://github.com/pinodo/react",
      demo: "https://github.com/pinodo/react",
    },
    {
      id: 2,
      image: IMG2,
      title:
        "Travel Advisor : Web app that helps users to find restaurants, hotels, and attractions",
      github: "https://github.com/pinodo/TravelAdvisor",
      demo: "https://github.com/pinodo/TravelAdvisor",
    },
    {
      id: 3,
      image: IMG3,
      title: "Django Weather App : Web app that helps users to see the specific area's weather",
      github: "https://github.com/pinodo/DjangoWeatherApp",
      demo: "https://github.com/pinodo/DjangoWeatherApp",
    },
    {
      id: 4,
      image: IMG4,
      title: "Spring Apps : ecommerce (beta)",
      github: "https://github.com/pinodo/spring",
      demo: "https://github.com/pinodo/spring",
    },
    {
      id: 5,
      image: IMG5,
      title: "Algorithm Challenges",
      github: "https://github.com/pinodo/algorithm_python",
      demo: "https://github.com/pinodo/algorithm_python",
    },
    {
      id: 6,
      image: IMG6,
      title: "Dev Note",
      github: "https://github.com/pinodo/dev_note",
      demo: "https://github.com/pinodo/dev_note",
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
                  See Code
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
