import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./styles/Welcome.css";

export default () => {
  return (
    <div className="welcome">
      <div className="text">
        <img src="/images/avatar.png" alt="Kumail" />
        <h1>
          Hello, I'm <span>Kumail</span>
        </h1>
        <h2>I like web development and machine learning</h2>
        <div className="social">
          <button type="button">GitHub</button>
          <button type="button">Résumé</button>
          <button type="button">LinkedIn</button>
        </div>
        <FontAwesomeIcon icon={faCaretDown} className="fa-arrow" />
      </div>
    </div>
  );
};
