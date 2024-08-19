// Import Components
import React, { useState } from "react";
import Toolbar from "./components/Toolbar";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

// Import CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  // Set theme
  const [theme, setTheme] = useState("dark");

  return (
    <div>
      <Toolbar theme={theme} setTheme={setTheme} />
      <Intro theme={theme} />
      <About theme={theme} />
      <Work theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
