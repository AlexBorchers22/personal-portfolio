// Import Components
import React from "react";
import Toolbar from "./components/Toolbar";
import Home from "./components/Home";
import About from "./components/About1";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Intro from "./components/Intro";

// Import CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div>
      <Toolbar />
      <Intro />
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
