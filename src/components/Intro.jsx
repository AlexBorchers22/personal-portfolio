import React from "react";
import {ReactTyped } from "react-typed";
import "./stars.scss";

const Intro = () => {
    return (
        // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
        <div id="home" className="intro route bg-image background">
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
  
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <h1 className="intro-title mb-4">Alex Borchers</h1>
                <p className="intro-subtitle">
                  <span className="text-slider-items"></span>
                  <strong className="text-slider">
                    <ReactTyped 
                      strings={[
                        "M.S. in Computer Science",
                        "Senior Software Developer",
                        "React JS / Express JS Expert",
                      ]}
                      typeSpeed={80}
                      backDelay={1100}
                      backSpeed={30}
                      loop
                    />
                  </strong>
                </p>
                <p className="pt-3">
                  <a
                    className="btn btn-primary btn js-scroll px-4"
                    href="#work"
                    role="button"
                  >
                    View My Work
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Intro;