import React from 'react';
import fst from '../assets/img/fst.png';
import Image from './Image';
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
