import React from 'react';
import { 
  Paper, Box, Chip, Stack, Button,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import InfoIcon from '@mui/icons-material/Info';
import LockIcon from '@mui/icons-material/Lock';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloudIcon from '@mui/icons-material/Cloud';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

const WorkCard = ({ 
  project, 
  onOpenDialog, 
  onFullscreen,
  mediaRef 
}) => {
  const localRef = React.useRef(null);
  const ref = mediaRef || localRef;

  const handleFullscreenClick = () => {
    if (ref && ref.current) {
      onFullscreen(ref.current);
    }
  };

  const renderMedia = () => {
    switch (project.mediaType) {
      case 'image':
        return (
          <img 
            src={project.mediaUrl} 
            alt={project.title} 
            ref={ref}
            style={{
              width: '100%',
              height: '250px',
              objectFit: 'cover',
              borderRadius: '4px 4px 0 0'
            }}
          />
        );
      case 'video':
        return (
          <video
            autoPlay
            muted
            loop
            ref={ref}
            style={{
              width: '100%',
              height: '250px',
              objectFit: 'cover',
              borderRadius: '4px 4px 0 0'
            }}
          >
            <source src={project.mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      case 'iframe':
        return (
          <iframe 
            src={project.mediaUrl} 
            title={project.title}
            ref={ref}
            style={{ 
              width: '100%',
              height: '250px',
              border: 'none',
              borderRadius: '4px 4px 0 0',
              overflow: 'hidden'
            }}
          />
        );
      case 'pdf':
        return (
          <object
            data={project.mediaUrl}
            type="application/pdf"
            ref={ref}
            style={{
              width: '100%',
              height: '250px',
              borderRadius: '4px 4px 0 0'
            }}
          >
            <p>PDF preview not available</p>
          </object>
        );
      default:
        return null;
    }
  };

  const getStatusChip = () => {
    const statusConfig = {
      internal: { label: 'Internal Tool', color: 'warning', icon: <LockIcon /> },
      public: { label: 'Public Project', color: 'success' },
      opensource: { label: 'Open Source', color: 'success' },
      research: { label: 'Research', color: 'info' },
      inprogress: { label: 'In Progress', color: 'warning', icon: <HourglassTopIcon /> }
    };

    const config = statusConfig[project.status];
    return (
      <Chip 
        label={config.label}
        color={config.color}
        icon={config.icon}
        size="small"
        sx={{ ml: 2 }}
      />
    );
  };

  return (
    <Paper elevation={3} className="project-showcase">
      <Box sx={{ position: 'relative', width: '100%' }}>
        <Box sx={{ position: 'relative' }}>
          {renderMedia()}
          {project.allowFullscreen && (
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
              onClick={handleFullscreenClick}
            >
              <FullscreenIcon />
            </Button>
          )}
        </Box>
        <Box sx={{ p: 3 }}>
          <div className="d-flex align-items-center mb-2">
            <h4 className="mb-0">{project.title}</h4>
            {getStatusChip()}
          </div>

          {project.note && (
            <p className="text-muted small">
              <InfoIcon sx={{ fontSize: 16, mr: 1, verticalAlign: 'text-bottom' }} />
              {project.note}
            </p>
          )}

          <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
            {project.techStack.map((tech, index) => (
              <Chip 
                key={index}
                icon={tech.icon === 'code' ? <CodeIcon /> : tech.icon === 'storage' ? <StorageIcon /> : tech.icon === 'smart_toy' ? <SmartToyIcon /> : tech.icon === 'cloud' ? <CloudIcon /> : null}
                label={tech.label}
                color="primary"
                variant="outlined"
              />
            ))}
          </Stack>

          <p>{project.description}</p>

          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            {project.showDetails && (
              <Button 
                variant="outlined" 
                startIcon={<InfoIcon />}
                onClick={() => onOpenDialog(project.id)}
              >
                See More Details
              </Button>
            )}
            {project.actions?.map((action, index) => (
              <Button
                key={index}
                variant={action.primary ? "contained" : "outlined"}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                download={action.download}
              >
                {action.label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
};

export default WorkCard; 