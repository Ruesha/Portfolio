import React from "react";
import countries from "../../assets/countries.png";
import green from "../../assets/green.png";
import cart from "../../assets/download.png";
import kuda from "../../assets/Kuda.png";
import coolors from "../../assets/coolors.png";
import funiro from "../../assets/funiro.png";
import lectores from "../../assets/Lectores.png";
import luxedrive from "../../assets/Luxedrive.png";
import qmart from "../../assets/Qmart.png";
import "./Projects.css";

const projectsData = [
  {
    img: countries,
    title: "Countries API",
    description:
      "A web application built with JavaScript, HTML, and CSS that fetches data from an external API to provide an interactive experience.",
    repo: "https://github.com/Ruesha/countries",
  },
  {
    img: green,
    title: "Nextcent",
    description:
      "A responsive web project focusing on expert use of HTML and CSS for enhanced media adaptability.",
    repo: "https://github.com/Ruesha/green",
  },
  {
    img: cart,
    title: "Cart Dessert",
    description:
      "An interactive JavaScript web app that enhances user experience with dynamic elements.",
    repo: "https://github.com/Ruesha/cart",
  },
  {
    img: kuda,
    title: "Kuda Clone",
    description:
      "A React-based clone of Kuda bank’s interface, demonstrating UI/UX skills and React components.",
    repo: "https://github.com/Ruesha/Kuda2",
  },
  {
    img: coolors,
    title: "Coolors",
    description:
      "A React project that explores color palettes, UI design, and dynamic styling.",
    repo: "https://github.com/Ruesha/coolors",
  },
  {
    img: funiro,
    title: "Funiro",
    description:
      "A fully responsive web page built with HTML and CSS, focusing on modern layouts and responsiveness.",
    repo: "https://github.com/Ruesha/furniro",
  },
  {
    img: luxedrive,
    title: "Luxedrive",
    description:
      "A sleek, responsive web project designed with HTML and CSS for a premium car rental experience.",
    repo: "https://github.com/Ruesha/luxedrive",
  },
  {
    img: qmart,
    title: "Qmart",
    description:
      "A modern e-commerce interface demonstrating grid-based layouts and CSS styling.",
    repo: "https://github.com/Ruesha/qmart",
  },
  {
    img: lectores,
    title: "Lectores",
    description:
      "An educational platform design with a clean, minimalist UI and responsive structure.",
    repo: "https://github.com/Ruesha/lectores",
  },
];

const Projects = () => {
  return (
    <div className="pro">
      <div className="note">
        <h2>Projects</h2>
        <p>Things I've built so far</p>
      </div>

      <div className="myProjects">
        {projectsData.map((project, index) => (
          <div className="init" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="innote">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div className="links">
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
