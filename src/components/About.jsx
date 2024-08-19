// Home.js
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ReactImage from '../assets/img/react-js.png'
import NodeJsImage from '../assets/img/node-js.png'
import Html5Image from '../assets/img/html5.png'
import JavaScriptImage from '../assets/img/javascript.png'
import PhpImage from '../assets/img/php.png'
import PythonImage from '../assets/img/python.jfif'
import MySqlImage from '../assets/img/mysql.png'
import SqlServerImage from '../assets/img/sql-server.png'

const Home = () => {
  const skills = [
    {
      id: "ReactJS_skill",
      content: "ReactJS",
      start_date: "2023-10-01",
      image_url: ReactImage
    },
    {
      id: "NodeJS_skill",
      content: "ExpressJS",
      start_date: "2023-10-01",
      image_url: NodeJsImage
    },
    { id: "HTML5_skill", content: "HTML5 / CSS", start_date: "2017-01-01", image_url: Html5Image },
    {
      id: "JavaScript_skill",
      content: "JavaScript",
      start_date: "2017-09-01",
      image_url: JavaScriptImage
    },
    { id: "PHP_skill", content: "PHP", start_date: "2017-09-01", image_url: PhpImage },
    {
      id: "Python_skill",
      content: "Python",
      start_date: "2021-05-01",
      image_url: PythonImage
    },
    {
      id: "SQL_skill",
      content: "MySQL",
      start_date: "2018-01-01",
      image_url: MySqlImage
    },
    {
      id: "SQLserver_skill",
      content: "SQL Server",
      start_date: "2023-10-01",
      image_url: SqlServerImage
    }
  ];
  const about_me= [
    {
      id: "first-p-about",
      content:
        "Tech enthusiast with a passion for learning and a love for problem solving. I have a strong background in computer science and software development. I am a self-motivated, hard-working, and goal-oriented individual who is eager to learn and grow."
    },
    {
      id: "second-p-about",
      content:
        "Team oriented and collaborative with a strong work ethic. I am a quick learner and a creative thinker who is able to adapt to new environments and situations. I am a strong communicator with excellent interpersonal skills. Leader who has a strong desire to help others."
    },
    {
      id: "third-p-about",
      content:
        "I am passionate about technology and innovation. I am always looking for ways to improve and optimize processes. I am a problem solver who enjoys finding solutions to complex problems. I am a detail-oriented individual who takes pride in my work and strives for excellence."
    },
    {
      id: "fourth-p-about",
      content:
        "Open to new opportunities and challenges. Please feel free to connect with me on LinkedIn or send me an email if you would like to discuss potential opportunities or collaborations."
    }
  ];

  // Calculate experience
  const calculateExperience = (startDate) => {
    const start = new Date(startDate);
    const today = new Date();
    const diff = today - start;
    const years = diff / (1000 * 60 * 60 * 24 * 365);
    const yearFloored = Math.floor(years);
    const yearValue = yearFloored === 0 ? 1 : yearFloored;
    return yearValue > 1 ? `${yearValue} Years` : `${yearValue} Year`;
  };

  // Formats date
  const formatDate = (date) => {
    const d = new Date(date);

    // Return Month - Year
    return d.toLocaleString('default', { month: 'long' }) + " " + d.getFullYear();
  }

  return (
    <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-4" style={{paddingRight: "3em"}}>
                  <div className="title-box-2">
                        <h5 className="title-left">Skills</h5>
                      </div>
                    <div className="skill-mf">
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {skills.map(skill => {
                      return (
                        <React.Fragment key={skill.id}>
                          <>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar style={{background: "white", borderRadius: "0px"}}>
                                  <img src={skill.image_url} alt={skill.content} style={{width: "100%"}}/>
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText primary={skill.content} secondary={`${calculateExperience(skill.start_date)} (Since ${formatDate(skill.start_date)})`} />
                            </ListItem>                           
                          </>
                        </React.Fragment>
                      );
                    })}
                    </List>
                  </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Home;
