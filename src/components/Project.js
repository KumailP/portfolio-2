import React from "react";

const Project = props => {
  return (
    <div
      className="project"
      style={{
        backgroundImage: "url('/images/projects/" + props.bg + ".png')"
      }}
    >
      <div className="project-text">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <div className="project-tools">
          {props.tech.map((v, i) => {
            return <span key={i}>{v}</span>;
          })}
        </div>
        <div className="project-buttons">
          <a href={props.demo}>
            <button type="button">Live Demo</button>
          </a>
          <a href={props.github}>
            <button type="button">GitHub</button>
          </a>
        </div>
      </div>
    </div>
  );
};

Project.defaultProps = {
  bg: "007",
  title: "Project Title",
  desc: "Project Description.",
  tech: ["Tech"],
  demo: "http://www.google.com",
  github: "http://www.google.com"
};

export default Project;
