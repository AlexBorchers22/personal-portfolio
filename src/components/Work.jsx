import React, { useState } from 'react';
import fst from '../assets/img/fst.png';
import mlResearch from '../assets/pdf/Project_Borchers_Masters_Final.pdf';
import sajfResearch from '../assets/pdf/SAJF Report.pdf';
import viteSupabaseDemo from '../assets/mp4/vite-supabase-example.mp4';
import reactNativeDemo from '../assets/mp4/react-native-project.mp4';
import { 
  Paper, Box, Chip, Stack, Button, 
  Dialog, DialogTitle, DialogContent, 
  DialogActions, List, ListItem, 
  ListItemIcon, ListItemText 
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import InfoIcon from '@mui/icons-material/Info';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

const Work = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const viteVideoRef = React.useRef(null);
  const fstImageRef = React.useRef(null);

  const handleOpenDialog = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  const handleFullscreen = (mediaElement) => {
    if (mediaElement) {
      // Create a wrapper div for fullscreen
      const wrapper = document.createElement('div');
      wrapper.style.width = '100vw';
      wrapper.style.height = '100vh';
      wrapper.style.backgroundColor = 'black';
      wrapper.style.display = 'flex';
      wrapper.style.alignItems = 'center';
      wrapper.style.justifyContent = 'center';
      wrapper.style.position = 'fixed';
      wrapper.style.top = '0';
      wrapper.style.left = '0';
      wrapper.style.zIndex = '9999';
      
      // For videos, we need to handle the clone differently
      const clone = mediaElement.tagName === 'VIDEO' 
        ? mediaElement
        : mediaElement.cloneNode(true);
        
      clone.style.width = 'auto';
      clone.style.height = 'auto';
      clone.style.maxWidth = '95vw';
      clone.style.maxHeight = '95vh';
      clone.style.objectFit = 'contain';
      
      wrapper.appendChild(clone);
      document.body.appendChild(wrapper);

      // For videos, ensure it's playing
      if (clone.tagName === 'VIDEO') {
        clone.play();
      }
      
      // Add close button
      const closeButton = document.createElement('button');
      closeButton.innerHTML = '×';
      closeButton.style.position = 'absolute';
      closeButton.style.top = '20px';
      closeButton.style.right = '20px';
      closeButton.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      closeButton.style.border = 'none';
      closeButton.style.borderRadius = '50%';
      closeButton.style.width = '40px';
      closeButton.style.height = '40px';
      closeButton.style.fontSize = '24px';
      closeButton.style.cursor = 'pointer';
      closeButton.style.display = 'flex';
      closeButton.style.alignItems = 'center';
      closeButton.style.justifyContent = 'center';
      
      closeButton.onclick = () => {
        if (clone.tagName === 'VIDEO') {
          // Move video back to original container
          mediaElement.parentNode.insertBefore(clone, mediaElement);
          mediaElement.remove();
        }
        document.body.removeChild(wrapper);
      };
      
      wrapper.appendChild(closeButton);

      // Handle ESC key
      const handleEsc = (event) => {
        if (event.key === 'Escape') {
          closeButton.onclick();
          document.removeEventListener('keydown', handleEsc);
        }
      };
      
      document.addEventListener('keydown', handleEsc);
    }
  };

  const projectDetails = {
    fst: {
      title: "Pierson Wireless FST",
      contributions: [
        "Developed and maintained a complex financial estimation platform",
        "Implemented real-time collaboration features for 100+ concurrent users",
        "Integrated with multiple third-party APIs for data synchronization",
        "Reduced estimation time by 60% through automated calculations",
        "Built custom reporting dashboard with exportable analytics"
      ]
    },
    // ballerBets: {
    //   title: "Baller Bets App",
    //   contributions: [
    //     "Architected full-stack application using React and Express",
    //     "Implemented secure user authentication and authorization",
    //     "Created real-time sports betting marketplace",
    //     "Developed automated odds calculation system",
    //     "Built responsive mobile-first UI with Material-UI"
    //   ],
    //   previewUrl: "https://main--baller-bets.netlify.app/"
    // },
    research: {
      title: "Machine Learning Research",
      contributions: [
        "Conducted research on advanced machine learning algorithms",
        "Developed novel approaches to data analysis",
        "Published findings in academic paper",
        "Implemented proof-of-concept models",
        "Created reproducible research methodology"
      ]
    },
    sajfResearch: {
      title: "Sustainable Aviation Fuel Research",
      contributions: [
        "Conducted comprehensive market analysis of sustainable aviation fuel industry",
        "Analyzed market trends and economic viability of alternative jet fuels",
        "Developed data-driven insights for company stakeholders",
        "Evaluated environmental impact and sustainability metrics"
      ]
    },
    viteSupabase: {
      title: "Vite Supabase Chakra Template",
      contributions: [
        "Created a full-stack template with React (Vite), Supabase, and Chakra UI",
        "Implemented secure authentication with Google OAuth integration",
        "Built protected routing system with role-based access control",
        "Developed reusable components and clean project structure",
        "Published as open-source template for developer community"
      ]
    },
    crawl: {
      title: "The Crawl - Party Planning App",
      contributions: [
        "Developed a mobile app for planning and organizing social events",
        "Integrated Google Maps and Places APIs for real-time location data",
        "Built responsive UI with React Native and Tailwind CSS",
        "Implemented secure user authentication with Supabase",
        "Created intuitive party planning workflow with real-time updates"
      ]
    },
  };

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
          {/* Add this new project card before existing cards */}
          <div className="col-md-6 mb-4">
            <Paper elevation={3} className="project-showcase">
              <Box sx={{ position: 'relative', width: '100%' }}>
                <Box sx={{ position: 'relative' }}>
                  <video
                    autoPlay
                    muted
                    loop
                    ref={viteVideoRef}
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      borderRadius: '4px 4px 0 0'
                    }}
                  >
                    <source src={viteSupabaseDemo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <Button
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      minWidth: 'auto',
                      p: 0.5,
                      bgcolor: 'rgba(255, 255, 255, 0.8)',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                      }
                    }}
                    onClick={() => handleFullscreen(viteVideoRef.current)}
                  >
                    <FullscreenIcon />
                  </Button>
                </Box>
                <Box sx={{ p: 3 }}>
                  <div className="d-flex align-items-center mb-2">
                    <h4 className="mb-0">Vite Supabase Template</h4>
                    <Chip 
                      label="Open Source" 
                      color="success" 
                      size="small" 
                      sx={{ ml: 2 }}
                    />
                  </div>

                  <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                    <Chip icon={<CodeIcon />} label="React + Vite" color="primary" variant="outlined" />
                    <Chip icon={<StorageIcon />} label="Supabase" color="primary" variant="outlined" />
                    <Chip icon={<CodeIcon />} label="Chakra UI" color="primary" variant="outlined" />
                  </Stack>

                  <p>
                    A modern full-stack template featuring React with Vite, Supabase authentication,
                    and Chakra UI components. Includes Google OAuth and protected routing.
                  </p>

                  <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <Button 
                      variant="outlined" 
                      startIcon={<InfoIcon />}
                      onClick={() => handleOpenDialog('viteSupabase')}
                    >
                      See More Details
                    </Button>
                    <Button 
                      variant="contained" 
                      href="https://github.com/Alex-Borchers-22/vite-supabase-chakra-template"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Paper>
          </div>

          {/* Internal Project Showcase */}
          <div className="col-md-6 mb-4">
            <Paper elevation={3} className="project-showcase">
              <Box sx={{ position: 'relative', width: '100%' }}>
                <Box sx={{ position: 'relative' }}>
                  <img 
                    src={fst} 
                    alt="FST Dashboard" 
                    className="showcase-image"
                    ref={fstImageRef}
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      borderRadius: '4px 4px 0 0'
                    }}
                  />
                  <Button
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      minWidth: 'auto',
                      p: 0.5,
                      bgcolor: 'rgba(255, 255, 255, 0.8)',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                      }
                    }}
                    onClick={() => handleFullscreen(fstImageRef.current)}
                  >
                    <FullscreenIcon />
                  </Button>
                </Box>
                <Box sx={{ p: 3 }}>
                  <div className="d-flex align-items-center mb-2">
                    <h4 className="mb-0">Pierson Wireless FST</h4>
                    <Chip 
                      icon={<LockIcon />} 
                      label="Internal Tool" 
                      color="warning" 
                      size="small" 
                      sx={{ ml: 2 }}
                    />
                  </div>
                  
                  <p className="text-muted small">
                    <InfoIcon sx={{ fontSize: 16, mr: 1, verticalAlign: 'text-bottom' }} />
                    Note: Due to confidentiality agreements, limited information can be shared about this internal project.
                  </p>
                  
                  {/* Tech Stack */}
                  <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                    <Chip icon={<CodeIcon />} label="React.js" color="primary" variant="outlined" />
                    <Chip icon={<IntegrationInstructionsIcon />} label="Express.js" color="primary" variant="outlined" />
                    <Chip icon={<StorageIcon />} label="SQL Server" color="primary" variant="outlined" />
                  </Stack>

                  {/* Brief Overview */}
                  <p>
                    Enterprise-level financial management and estimation platform serving 100+ employees.
                    Integrates with multiple third-party services and handles complex workflows.
                  </p>

                  {/* Action Buttons */}
                  <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <Button 
                      variant="outlined" 
                      startIcon={<InfoIcon />}
                      onClick={() => handleOpenDialog('fst')}
                    >
                      See More Details
                    </Button>
                    {/* <Button variant="outlined" startIcon={<DownloadIcon />}>
                      Download UI Preview
                    </Button> */}
                  </Stack>
                </Box>
              </Box>
            </Paper>
          </div>

          {/* Self chat bot  */}
          {/* https://alex-chat-eight.vercel.app/ */}
          <div className="col-md-6 mb-4">
            <Paper elevation={3} className="project-showcase">
              <Box sx={{ position: 'relative', width: '100%' }}>
                <Box sx={{ position: 'relative' }}>
                  <iframe 
                    src="https://alex-chat-eight.vercel.app/" 
                    title="Alex Chat Bot" 
                    className="showcase-image" 
                    style={{ 
                      width: '100%',
                      height: '250px',
                      border: 'none',
                      borderRadius: '4px 4px 0 0',
                      overflow: 'hidden'
                    }}
                  />
                  <Button
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      minWidth: 'auto',
                      p: 0.5,
                      bgcolor: 'rgba(255, 255, 255, 0.8)',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                      }
                    }}
                    onClick={() => window.open('https://alex-chat-eight.vercel.app/', '_blank')}
                  >
                    <FullscreenIcon />
                  </Button>
                </Box>
                <Box sx={{ p: 3 }}>
                  <div className="d-flex align-items-center mb-2">
                    <h4 className="mb-0">Alex Chat Bot</h4>
                    <Chip 
                      label="Public Project" 
                      color="success" 
                      size="small" 
                      sx={{ ml: 2 }}
                    />
                  </div>

                  <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                    <Chip icon={<CodeIcon />} label="NextJs" color="primary" variant="outlined" />
                    <Chip label="Claude API" color="primary" variant="outlined" />
                    <Chip label="Vercel" color="primary" variant="outlined" />
                  </Stack>

                  <p>
                    A self-chat bot built with NextJs and the Claude API.
                  </p>

                  <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <Button 
                      variant="contained" 
                      href="https://alex-chat-eight.vercel.app/" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check it out!
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Paper>
          </div>

          {/* Baller Bets Project */}
          {/* <div className="col-md-6 mb-4">
            <Paper elevation={3} className="project-showcase">
              <Box sx={{ position: 'relative', width: '100%' }}>
                <iframe 
                  src="https://main--baller-bets.netlify.app/" 
                  title="Baller Bets App" 
                  className="showcase-image" 
                  style={{ 
                    width: '100%',
                    height: '250px',
                    border: 'none',
                    pointerEvents: 'none',
                    borderRadius: '4px 4px 0 0',
                    overflow: 'hidden'
                  }}
                />
                <Box sx={{ p: 3 }}>
                  <div className="d-flex align-items-center mb-2">
                    <h4 className="mb-0">Baller Bets App</h4>
                    <Chip 
                      label="Public Project" 
                      color="success" 
                      size="small" 
                      sx={{ ml: 2 }}
                    />
                  </div>

                  <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                    <Chip icon={<CodeIcon />} label="React.js" color="primary" variant="outlined" />
                    <Chip icon={<IntegrationInstructionsIcon />} label="Express.js" color="primary" variant="outlined" />
                    <Chip icon={<StorageIcon />} label="MySQL" color="primary" variant="outlined" />
                  </Stack>

                  <p>
                    A modern sports betting platform with real-time updates, user authentication,
                    and an interactive marketplace for betting enthusiasts.
                  </p>

                  <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <Button 
                      variant="outlined" 
                      startIcon={<InfoIcon />}
                      onClick={() => handleOpenDialog('ballerBets')}
                    >
                      See More Details
                    </Button>
                    <Button 
                      variant="contained" 
                      href="https://main--baller-bets.netlify.app/" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Live Site
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Paper>
          </div> */}

          {/* Research Project */}
          <div className="col-md-6 mb-4">
            <Paper elevation={3} className="project-showcase">
              <Box sx={{ position: 'relative', width: '100%' }}>
                <object
                  data={mlResearch}
                  type="application/pdf"
                  style={{
                    width: '100%',
                    height: '250px',
                    borderRadius: '4px 4px 0 0'
                  }}
                >
                  <p>PDF preview not available</p>
                </object>
                <Box sx={{ p: 3 }}>
                  <div className="d-flex align-items-center mb-2">
                    <h4 className="mb-0">Machine Learning Research</h4>
                    <Chip 
                      label="Research" 
                      color="info" 
                      size="small" 
                      sx={{ ml: 2 }}
                    />
                  </div>

                  {/* Tech Stack */}
                  <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                    <Chip icon={<CodeIcon />} label="Python" color="primary" variant="outlined" />
                    <Chip icon={<CodeIcon />} label="TensorFlow" color="primary" variant="outlined" />
                    <Chip icon={<StorageIcon />} label="Data Analysis" color="primary" variant="outlined" />
                  </Stack>

                  {/* Brief Overview */}
                  <p>
                    Academic research focusing on advanced machine learning algorithms 
                    and their applications in real-world scenarios.
                  </p>

                  {/* Action Buttons */}
                  <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <Button 
                      variant="outlined" 
                      startIcon={<InfoIcon />}
                      onClick={() => handleOpenDialog('research')}
                    >
                      See More Details
                    </Button>
                    <Button 
                      variant="contained"
                      href={mlResearch}
                      download="Project_Borchers_Masters_Final.pdf"
                    >
                      Download Paper
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Paper>
          </div>

          {/* SAJF Research Project */}
          <div className="col-md-6 mb-4">
            <Paper elevation={3} className="project-showcase">
              <Box sx={{ position: 'relative', width: '100%' }}>
                <object
                  data={sajfResearch}
                  type="application/pdf"
                  style={{
                    width: '100%',
                    height: '250px',
                    borderRadius: '4px 4px 0 0'
                  }}
                >
                  <p>PDF preview not available</p>
                </object>
                <Box sx={{ p: 3 }}>
                  <div className="d-flex align-items-center mb-2">
                    <h4 className="mb-0">Sustainable Aviation Fuel Research</h4>
                    <Chip 
                      label="Research" 
                      color="info" 
                      size="small" 
                      sx={{ ml: 2 }}
                    />
                  </div>

                  {/* Tech Stack */}
                  <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                    <Chip icon={<StorageIcon />} label="Market Analysis" color="primary" variant="outlined" />
                    <Chip icon={<StorageIcon />} label="Data Analysis" color="primary" variant="outlined" />
                  </Stack>

                  {/* Brief Overview */}
                  <p>
                    Market research and data analysis focused on the sustainable aviation fuel industry,
                    examining economic viability and environmental impact.
                  </p>

                  {/* Action Buttons */}
                  <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <Button 
                      variant="outlined" 
                      startIcon={<InfoIcon />}
                      onClick={() => handleOpenDialog('sajfResearch')}
                    >
                      See More Details
                    </Button>
                    <Button 
                      variant="contained"
                      href={sajfResearch}
                      download="SAJF Report.pdf"
                    >
                      Download Report
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Paper>
          </div>

          {/* Add this new project card before other cards */}
          <div className="col-md-6 mb-4">
            <Paper elevation={3} className="project-showcase">
              <Box sx={{ position: 'relative', width: '100%' }}>
                <Box sx={{ position: 'relative' }}>
                  <video
                    autoPlay
                    muted
                    loop
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      borderRadius: '4px 4px 0 0'
                    }}
                  >
                    <source src={reactNativeDemo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <Button
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      minWidth: 'auto',
                      p: 0.5,
                      bgcolor: 'rgba(255, 255, 255, 0.8)',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                      }
                    }}
                    onClick={() => handleFullscreen(viteVideoRef.current)}
                  >
                    <FullscreenIcon />
                  </Button>
                </Box>
                <Box sx={{ p: 3 }}>
                  <div className="d-flex align-items-center mb-2">
                    <h4 className="mb-0">The Crawl</h4>
                    <Chip 
                      label="Open Source" 
                      color="success" 
                      size="small" 
                      sx={{ ml: 2 }}
                    />
                  </div>

                  <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                    <Chip icon={<CodeIcon />} label="React Native" color="primary" variant="outlined" />
                    <Chip icon={<CodeIcon />} label="Expo" color="primary" variant="outlined" />
                    <Chip icon={<StorageIcon />} label="Supabase" color="primary" variant="outlined" />
                    <Chip icon={<CodeIcon />} label="Tailwind" color="primary" variant="outlined" />
                  </Stack>

                  <p>
                    A mobile party planning app that helps users organize social events using
                    Google Maps API for real-time location data and route planning.
                  </p>

                  <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <Button 
                      variant="outlined" 
                      startIcon={<InfoIcon />}
                      onClick={() => handleOpenDialog('crawl')}
                    >
                      See More Details
                    </Button>
                    <Button 
                      variant="contained" 
                      href="https://github.com/Alex-Borchers-22/crawl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Paper>
          </div>
        </div>
      </div>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          {selectedProject && projectDetails[selectedProject].title}
        </DialogTitle>
        <DialogContent>
          <h6 className="mb-3">Key Contributions:</h6>
          <List>
            {selectedProject && projectDetails[selectedProject].contributions.map((contribution, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={contribution} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default Work;
