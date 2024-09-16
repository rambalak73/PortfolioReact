import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"; // Your Navbar component
import Skills from "./Components/Skills";
import Balak from "./Components/Balak";
import About from "./Components/About";
import Home from "./Components/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="Balak" element={<Balak />} />
          <Route path="About" element={<About />} />
        </Routes>
    </Router>
  );
};

export default App;
