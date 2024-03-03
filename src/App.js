// App.js
import React from "react";
import "./App.css";
import Toolbar from "./components/Toolbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Toolbar />
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
