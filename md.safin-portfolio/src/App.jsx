import React from "react";
import "./App.css";
import Navbar from "./components/NavbarComponent/Navbar";
import About from './components/AboutComponent/About';
import Certificates from "./components/CertificationComponent/Certificates";

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

    </div>
  );
}

export default App;