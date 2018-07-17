import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./styles/Welcome.css";

export default class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome" id="welcome">
        <div className="text">
          <h1>
            Hello, I'm <span>Kumail</span>
          </h1>
          <h2>I like web development and machine learning</h2>
          <div className="social">
            <button type="button">
              <FontAwesomeIcon icon={faGithub} />
            </button>
            <button type="button">
              <FontAwesomeIcon icon={faAddressCard} />
            </button>
            <button type="button">
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </div>
          <a data-scroll href="#projects">
            <FontAwesomeIcon icon={faCaretDown} className="fa-arrow" />
          </a>
        </div>
      </div>
    );
  }
}
