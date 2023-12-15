import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from './components/About/About';
import Certificates from "./components/Certificates/Certificates";
import ExperienceAndEducation from "./components/ExperienceAndEducation/ExperienceAndEducation";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

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

      <div id="contact-me">
        <ContactMe />
        <Footer />
      </div>

    </div>
  );
}

export default App;