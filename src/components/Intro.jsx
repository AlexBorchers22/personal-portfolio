import React from "react";
import {ReactTyped } from "react-typed";
import "./stars.scss";
import resume from "../assets/pdf/Resume (3.4.2024).pdf";

const Intro = () => {

    // Handle resume download
    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return (
        // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
        <>
        <div id="page-top"></div>
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
                <p className="pt-1">
                    <button
                      className="btn btn-primary btn js-scroll px-4"
                      onClick={handleDownloadResume}
                    >
                      Checkout My Resume!
                    </button>
                  </p>
              </div>
            </div>
          </div>
        </div>
        </>
    );
}

export default Intro;