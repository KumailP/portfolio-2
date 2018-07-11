import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/Welcome";

class App extends Component {
  componentDidMount() {
    let loader = document.getElementById("loader");
    setTimeout(() => {
      loader.classList.add("loader-show");
      setTimeout(() => {
        loader.remove();
      }, 500);
    }, 500);
  }
  render() {
    return (
      <div>
        <Welcome />
        {/* <p>Sup</p> */}
      </div>
    );
  }
}

export default App;
