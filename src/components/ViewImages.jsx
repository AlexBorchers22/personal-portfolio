import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function ViewImages({ images, descriptions, skills, summary, keyAccomplishments, link }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);

  function handleImageNext(e) {
    e.stopPropagation();
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function handleImagePrev(e) {
    e.stopPropagation();
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function renderArrows() {
    return (
      <>
        <ArrowBackIosIcon
          onClick={handleImagePrev}
          style={{ position: 'absolute', left: '10px', top: '50%', cursor: 'pointer', fontSize: '2rem', color: 'white', background: "#37353529", borderRadius: "50%", paddingLeft: "10px", paddingRight: "5px", zIndex: 1000 }}
        />
        <ArrowForwardIosIcon
          onClick={handleImageNext}
          style={{ position: 'absolute', right: '10px', top: '50%', cursor: 'pointer', fontSize: '2rem', color: 'white', background: "#37353529", borderRadius: "50%", paddingLeft: "9px", paddingRight: "6px", zIndex: 1000 }}
        />
      </>
    );
  }

  function renderDivArrows() {
    return (
      <>
        <div className='d-flex justify-content-between align-items-center mb-2'>
        <ArrowBackIosIcon
          onClick={handleImagePrev}
          style={{fontSize: '2rem', color: 'white', background: "#37353529", borderRadius: "50%", cursor: "pointer", paddingLeft: "10px", paddingRight: "5px"}}
        />
        <ArrowForwardIosIcon
          onClick={handleImageNext}
          style={{fontSize: '2rem', color: 'white', background: "#37353529", borderRadius: "50%", cursor: "pointer", paddingLeft: "9px", paddingRight: "6px"}}
        />
      </div>
      </>
    );
  }

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
            {
              link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary btn-sm mt-3">
                    <OpenInNewIcon className='me-2'/>
                    View Project
                  </button>
                </a>
              )
            }
          </div>
        </div>
      </div>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <div className="d-flex justify-content-between align-items-center">
          {descriptions[activeIndex]}
          <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            color: (theme) => theme.palette.grey[700],
          }}
        >
          <CloseIcon />
        </IconButton>
        </div>
        </DialogTitle>
        <DialogContent dividers sx={{ position: 'relative' }}>
          {renderDivArrows()}
          <img 
            src={images[activeIndex]} 
            alt="" 
            className="img-fluid" 
            style={{ maxHeight: '60vh', objectFit: 'contain', display: 'block', margin: 'auto' }} 
          />
          {summary && (
            <>
              <div className='summary-header'>
                Summary
              </div>
              <Typography variant="body1" className='p-1 m-3' gutterBottom sx={{ marginTop: 2 }}>
                {summary}
              </Typography>
            </>
          )}
          {keyAccomplishments && (
            <>
              <div className='summary-header'>
                Key Accomplishments:
              </div>
              <ul className='p-1 m-3'>
                {keyAccomplishments.map((item, index) => (
                  <Typography component="li" key={index}>
                    {item}
                  </Typography>
                ))}
              </ul>
            </>
          )}
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

export default ViewImages;
