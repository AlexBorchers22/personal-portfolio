// Import Components
import React from "react";
import Toolbar from "./components/Toolbar";
import About from "./components/About";
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
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
