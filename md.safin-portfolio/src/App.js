import React from "react";
import "./App.css";
import Navbar from "./components/NavberComponent/Navbar";
import ProfileImage from "./components/ProfileImage/ProfileImage";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProfileImage/>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
