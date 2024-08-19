// Footer.js
// Setup links to socials (linkedin, github, twitter, etc.)
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton, Tooltip } from '@mui/material';

const Footer = ({theme, setTheme}) => {
  // Handle button click
  // const handleSocialClick = (social) => {
  //   switch (social) {
  //     case 'github':
  //       window.open('https://github.com/Alex-Borchers-22');
  //       break;
  //     case 'linkedin':
  //       window.open('
  //       break;
  //     case 'twitter':
  //       window.open('
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <>
      <div>
        <footer className="footer">
          <div className="footer-widget">
            <a href='https://github.com/Alex-Borchers-22' target='_blank' rel='noopener'>
              <Tooltip title="GitHub">
                <IconButton>
                  <GitHubIcon className='footer-link'/>
                </IconButton>
              </Tooltip>
            </a>
            <a href='https://www.linkedin.com/in/alex-borchers-7597b8152/' target='_blank' rel='noopener'>
              <Tooltip title="LinkedIn">
                <IconButton>
                  <LinkedInIcon className='footer-link'/>
                </IconButton>
              </Tooltip>
            </a>
            <a href='https://twitter.com/BOOOOORCH' target='_blank'  rel='noopener'>
              <Tooltip title="Twitter">
                <IconButton>
                  <TwitterIcon className='footer-link'/>
                </IconButton>
              </Tooltip>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
