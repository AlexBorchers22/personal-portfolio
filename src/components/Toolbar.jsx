// Toolbar.js
import React, {useState} from 'react';
// import logo1 from '../assets/img/male1.png';
// import logo2 from '../assets/img/male.png';
import logo1 from '../assets/img/alex1.PNG';
import logo2 from '../assets/img/alex2.PNG';

const Toolbar = () => {
  
  // Add event listener to modify nav-bar when scrolling
  const [logo, setLogo] = useState(logo1);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      document.querySelector(".navbar-expand-md").classList.add("navbar-reduce");
      document.querySelector(".navbar-expand-md").classList.remove("navbar-trans");
      setLogo(logo2);
    } else {
      document.querySelector(".navbar-expand-md").classList.add("navbar-trans");
      document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce");
      setLogo(logo1);
    }
  });
  

  return (
    <>
    <nav
        className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll" href="#page-top">
            <img
              src={logo}
              alt="logo"
              style={{ maxWidth: "100px" }}
              className='img-fluid rounded-circle img-thumbnail border border-5 border-secondary'
            />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#work">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Toolbar;
