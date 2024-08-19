import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';

const ViewImages = ({ images, descriptions, skills }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleImageNext = (e) => {
    e.stopPropagation(); // Prevent the image from opening
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleImagePrev = (e) => {
    e.stopPropagation(); // Prevent the image from opening
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Render forward and back arrows on the image
  const renderArrows = () => {
    return (
      <>
        <ArrowBackIosIcon
          onClick={handleImagePrev}
          style={{ position: 'absolute', left: '10px', top: '75%', cursor: 'pointer', fontSize: '2rem', color: 'black', background: "#37353529", borderRadius: "50%", paddingLeft: "10px", paddingRight: "5px", zIndex: 1000 }}
        />
        <ArrowForwardIosIcon
          onClick={handleImageNext}
          style={{ position: 'absolute', right: '10px', top: '75%', cursor: 'pointer', fontSize: '2rem', color: 'black', background: "#37353529", borderRadius: "50%", paddingLeft: "9px", paddingRight: "6px", zIndex: 1000 }}
        />
      </>
    );
  };

  return (
    <div className="col-md-4">
      <div className="work-box">
        <div className="work-img" onClick={handleOpen} style={{ position: 'relative', cursor: "pointer" }}>
          <img src={images[activeIndex]} alt="" className="img-fluid" />
          {renderArrows()}
        </div>
        <div className="work-content">
          <div className="row">
            <div className="col-sm-8">
              <h2 className="w-title">{descriptions[activeIndex]}</h2>
              <div className="w-more">
                <span className="w-category">{skills}</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={handleClose} BackdropProps={{ invisible: true }}>
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: 'rgba(0, 0, 0, 0.8)' }} onClick={handleClose}>
          <img src={images[activeIndex]} alt="" className="img-fluid" onClick={(e) => e.stopPropagation()} />
          <CloseIcon
            onClick={handleClose}
            style={{ position: 'absolute', top: '20px', right: '20px', cursor: 'pointer', fontSize: '2rem', color: 'black' }}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default ViewImages;
