import React from 'react';
import fst from '../assets/img/fst.png';
import ViewImages from './ViewImages';
// import ReactCardFlip from 'react-card-flip';

const Work = () => {
  // [isFlipped, setIsFlipped] = useState(false);
  // const handleClick = () => {
  //   setIsFlipped(!isFlipped);
  // };

  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Check out some of my recent work! Click to see the image in full screen.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
          {/*   <div className="col-md-12">
              <ReactCardFlip isFlipped={isFlipped}>
              <div className="work-box">
                <a href={fst} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={fst} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Pierson Wireless FST (Financial Summary Tool)</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ReactJS / ExpressJS / SQL Server
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              </ReactCardFlip>
            </div> */}
            {/* <Image
              description={"Pierson Wireless FST (Financial Summary Tool)"}
              image={fst}
              skills={"ReactJS / ExpressJS / SQL Server"}
            />
            <Image
              description={"Lorem Ipsum"}
              image={fst}
              skills={"HTML5 CSS3 Bootstrap Webpack SmoothScrolling VanillaJS"}
            /> */}
            <ViewImages
              descriptions={["Pierson Wireless FST (Financial Summary Tool)", "Lorem Ipsum"]}
              images={[fst, fst]}
              skills={"ReactJS / ExpressJS / SQL Server"}
              summary={`I designed and developed an online platform using React.js (frontend) and Express.js (backend) to transform how Pierson Wireless, a company with over 100 employees, manages estimations, logistics, and workgroup workflows. The system seamlessly integrates with a SQL Server database, streamlining the entire project lifecycle from inception to completion. It replaces an Excel financial summary spreadsheet with a web-based solution and hooks into our accounting software, Viewpoint by Vista, to include numerous automations for data processing both internally and externally.

The platform incorporates key APIs such as AvaTax for tax calculations, USPS for address validation, Monday Dev for project management, Google Drive for document storage, and OAuth for secure authentication. It is designed with scalability in mind, allowing for future customization by other companies. Every component—from user groups to inventory and asset management—can be tailored to fit different organizational needs.

This platform is deployed in-house on a Microsoft server owned and operated by Pierson Wireless, ensuring full control over its operations.`}
                keyAccomplishments={["Converted a complex Excel financial summary spreadsheet into a dynamic web platform using React.js, Express.js, and SQL Server, improving efficiency in managing estimates, logistics, and workflows.", "Streamlined company-wide processes with automation, integrating Viewpoint by Vista and optimizing project management workflows.", "Successfully integrated a wide range of APIs, including AvaTax, USPS, Monday Dev, Google Drive, and OAuth for tax calculations, address validation, document storage, and authentication.", "Designed the platform with the flexibility to allow other companies to adopt and customize it—from user groups to asset tracking and inventory management.", "Deployed the platform on a Microsoft server owned and operated by Pierson Wireless, ensuring secure and controlled access for over 100 employees."]}
            />
            <ViewImages
              descriptions={["Baller Bets App"]}
              images={[fst]}
              skills={"ReactJS / ExpressJS / MySQL"}
              summary={`Baller Bets is a web application that allows users to bet on the outcome of sports games. It is built with React.js (frontend) and Express.js (backend), and uses a MySQL database. The app includes features such as user authentication, live game updates, and a marketplace.`}
              keyAccomplishments={["Developed a responsive and user-friendly web application using React.js and Express.js, providing a seamless betting experience for users.", "Implemented a secure authentication system to protect user data and ensure privacy.", "Utilized live game updates to provide users with the latest information and enable them to make informed betting decisions.", "Created a marketplace feature that allows users to buy and sell bets, providing a dynamic and interactive platform for sports enthusiasts."]}
              link={"https://main--baller-bets.netlify.app/"}
            />
            <ViewImages
              descriptions={["Pierson Wireless FST (Financial Summary Tool)", "Lorem Ipsum"]}
              images={[fst, fst]}
              skills={"ReactJS / ExpressJS / SQL Server"}
            />
            <ViewImages
              descriptions={["Pierson Wireless FST (Financial Summary Tool)", "Lorem Ipsum"]}
              images={[fst, fst]}
              skills={"ReactJS / ExpressJS / SQL Server"}
            />
          </div>
        </div>
      </section>
  );
};

export default Work;
