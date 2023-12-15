import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from './components/About/About';
import Certificates from "./components/Certificates/Certificates";
import ExperienceAndEducation from "./components/ExperienceAndEducation/ExperienceAndEducation";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header"></header>
      <div id="about">
        <About />
      </div>

      <div id="certification">
        <Certificates />
      </div>

      <div id="experience&education">
        <ExperienceAndEducation />
      </div>

    </div>
  );
}

export default App;