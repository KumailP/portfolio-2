import React from "react";
import Project from "./Project";
import "./styles/Projects.css";

const projects = [
  {
    bg: "tadrees",
    title: "Tadrees",
    desc:
      "Full stack web development for Tadrees, a local non-profit education organization as a volunteer web developer.",
    tech: ["ReactJS", "NodeJS", "ExpressJS"],
    demo: "http://www.google.com",
    github: "http://www.google.com"
  },
  {
    bg: "epiclms",
    title: "EpicLMS Web",
    desc:
      "Web version of a learning management system with full features for course management, enrollments and course data.",
    tech: ["NodeJS", "ExpressJS", "MySQL"],
    demo: "http://www.google.com",
    github: "http://www.google.com"
  },
  {
    bg: "007",
    title: "Goldeneye World Records",
    desc: "A live Goldeneye 64 speedrun world records table with live editing.",
    tech: ["ReactJS", "NodeJS", "ExpressJS"],
    demo: "http://www.google.com",
    github: "http://www.google.com"
  },
  {
    bg: "thumb",
    title: "Old Portfolio",
    desc:
      "Previous personal portfolio website made on Material UI. First ReactJS app.",
    tech: ["ReactJS", "NodeJS", "ExpressJS"],
    demo: "http://www.google.com",
    github: "http://www.google.com"
  }
];

export default () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.map((project, i) => {
          return <Project {...project} key={i} />;
        })}
      </div>
    </div>
  );
};
