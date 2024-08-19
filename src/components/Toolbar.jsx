// Toolbar.js
import React, {useState} from 'react';
// import logo1 from '../assets/img/male1.png';
// import logo2 from '../assets/img/male.png';
import logo1 from '../assets/img/alex1.PNG';
import logo2 from '../assets/img/alex2.PNG';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Tooltip, IconButton, Icon } from '@mui/material';
import { Button, SwipeableDrawer, List, ListItem, ListItemText } from '@mui/material';
import { ListItemButton, ListItemIcon } from '@mui/material';
import Box from '@mui/material/Box';

const Toolbar = ({theme, setTheme}) => {
  
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

  // Set state of drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  
  // Set config for nav-bar
  const config = [
    {
      label: "Home",
      link: "#home"
    },
    {
      label: "About",
      link: "#about"
    },
    {
      label: "Portfolio",
      link: "#work"
    },
    {
      label: "Contact",
      link: "#contact"
    }
  ]

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
          {/* <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>Test</span>
            <span></span>
            <span></span>
          </button> */}
          <div>
            <Button onClick={openDrawer} className="navbar-toggler collapsed">"Test"</Button>
            <SwipeableDrawer
              anchor={'right'}
              open={isDrawerOpen}
              onClose={closeDrawer}
              onOpen={openDrawer}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={closeDrawer}
                // onKeyDown={toggleDrawer(anchor, false)}
              >
                <List>
                  {config.map((text, index) => (
                    <ListItem key={text.label} disablePadding>
                      <ListItemButton>
                        {/* <ListItemText primary={text} /> */}
                        <a className="nav-link js-scroll" href={text.link}>
                          {text.label}
                        </a>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </SwipeableDrawer>
          </div>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              {config.map((item, index) => {
                return (
                  <li className="nav-item" key={index}> {/* Added a key prop */}
                    <a className="nav-link js-scroll" href={item.link}>
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <li className="nav-item">
                <Tooltip title="Toggle Theme" placement="bottom">
                <IconButton
                  onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light");
                  }}
                  style={{
                    backgroundColor: theme === "light" ? "white" : "white",
                  }}
                >
                  {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}  
                </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Toolbar;
