import React from 'react';
// import ReactCardFlip from 'react-card-flip';

const Image = ({image, description, skills}) => {
  // [isFlipped, setIsFlipped] = useState(false);
  // const handleClick = () => {
  //   setIsFlipped(!isFlipped);
  // };

  return (
    <div className="col-md-4">
      <div className="work-box">
        <a href={image} data-lightbox="gallery-aguadeluz">
          <div className="work-img">
            <img src={image} alt="" className="img-fluid" />
          </div>
          <div className="work-content">
            <div className="row">
              <div className="col-sm-8">
                <h2 className="w-title">{description}</h2>
                <div className="w-more">
                  <span className="w-ctegory">
                    {skills}
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
  );
};

export default Image;
