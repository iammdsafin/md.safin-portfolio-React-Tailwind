import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/NavbarComponent/Navbar";
import About from './components/AboutComponent/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header"></header>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
