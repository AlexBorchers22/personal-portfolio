// Home.js
import React from 'react';

const Home = () => {
  const skills = [
    {
      id: "ReactJS_skill",
      content: "ReactJS",
      start_date: "2019-01-01" // Example start date
    },
    {
      id: "NodeJS_skill",
      content: "ExpressJS",
      start_date: "2020-03-15" // Example start date
    },
    { id: "HTML5_skill", content: "HTML5 / CSS", start_date: "2018-06-01" },
    {
      id: "JavaScript_skill",
      content: "JavaScript",
      start_date: "2017-05-01" // Example start date
    },
    { id: "PHP_skill", content: "PHP", start_date: "2019-09-01" },
    {
      id: "Python_skill",
      content: "Python",
      start_date: "2020-11-01" // Example start date
    },
    {
      id: "SQL_skill",
      content: "MySQL / SQL Server",
      start_date: "2016-12-01" // Example start date
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
        "Team oriented and collaborative with a strong work ethic. I am a quick learner and a creative thinker who is able to adapt to new environments and situations. I am a strong communicator with excellent interpersonal skills. Point-guard mentality with a strong desire to lead and help others."
    },
    {
      id: "third-p-about",
      content:
        "Open to new opportunities and challenges. I am looking for a position where I can utilize my skills and experience to help a company grow and succeed."
    }];

  // Calculate experience
  const calculateExperience = (startDate) => {
    const start = new Date(startDate);
    const today = new Date();
    const diff = today - start;
    const years = diff / (1000 * 60 * 60 * 24 * 365);
    return Math.floor(years) + (years >= 2 ? "+" : "") + " years of experience";
  };

  return (
    <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                    {skills.map(skill => {
                      return (
                        <React.Fragment key={skill.id}>
                          <div>
                          <span>{skill.content}</span>{" "}
                          <span className="pull-right">
                            {calculateExperience(skill.start_date)}
                          </span>
                          </div>
                        </React.Fragment>
                      );
                    })}
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
