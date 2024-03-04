import React from 'react';
import stock from '../assets/img/image1.jpg';
import fst from '../assets/img/fst.png';
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
                  Check out some of my recent work!
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* <ReactCardFlip isFlipped={isFlipped}> */}
              <div className="work-box">
                {/* <a href={fst} data-lightbox="gallery-vmarine"> */}
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
                {/* </a> */}
              </div>
              {/* </ReactCardFlip> */}
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem Ipsum</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap Webpack SmoothScrolling
                            VanillaJS
                          </span>{" "}
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
            </div>
          </div>
        </div>
      </section>
  );
};

export default Work;
