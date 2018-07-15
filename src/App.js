import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import About from "./components/About";

class App extends Component {
  constructor(props) {
    super(props);
    this.loader = document.getElementById("loader");
  }
  componentDidMount() {
    setTimeout(() => {
      document.getElementById("welcome").style.display = "block";
      this.loader.style.display = "none";
    }, 1000);
  }
  render() {
    return (
      <div>
        <Welcome />
        <Projects />
        <About />
      </div>
    );
  }
}

export default App;
