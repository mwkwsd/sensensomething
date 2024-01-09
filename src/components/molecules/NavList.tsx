import React, { useState } from 'react';
import { List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import { Link } from 'react-router-dom';

const commonStyle = {
  fontWeight: 'bold',
  bgcolor: 'black',
  color: 'white',
  fontSize: 20,
};

function generateButtonStyle(isSelected: boolean) {
  return {
    ...(isSelected && {
      backgroundColor: 'lightgrey',
      padding: '1px 16px',
      borderRadius: '0 24px 24px 0',
      '&:hover': {
        backgroundColor: 'lightgrey',
      },
    }),
  };
}

function NavList() {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
  };

  const isLinkSelected = (link: string) => selectedLink === link;

  return (
    <List sx={{ width: '100%', height: '100%', maxWidth: 360, ...commonStyle }} component="nav">
      <ListItemButton
        component={Link}
        to="/"
        sx={{ ...generateButtonStyle(isLinkSelected('/')) }}
        onClick={() => handleLinkClick('/')}
      >
        <ListItemText primary="Recent Work" sx={{ color: isLinkSelected('/') ? 'black' : 'white', padding: '1px' }} />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/contact"
        sx={{ ...generateButtonStyle(isLinkSelected('/contact')) }}
        onClick={() => handleLinkClick('/contact')}
      >
        <ListItemText primary="Contact" sx={{ color: isLinkSelected('/contact') ? 'black' : 'white', padding: '1px' }} />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/about"
        sx={{ ...generateButtonStyle(isLinkSelected('/about')) }}
        onClick={() => handleLinkClick('/about')}
      >
        <ListItemText primary="About" sx={{ color: isLinkSelected('/about') ? 'black' : 'white', padding: '1px' }} />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/video-list-page"
        sx={{ ...generateButtonStyle(isLinkSelected('/video-list-page')) }}
        onClick={() => handleLinkClick('/video-list-page')}
      >
        <ListItemText primary="Video List" sx={{ color: isLinkSelected('/video-list-page') ? 'black' : 'white', padding: '1px' }} />
      </ListItemButton>

      {/* WIP style sub items */}
      <List component="div">
        <ListSubheader component="div" sx={{ ...commonStyle }}>ROLE</ListSubheader>
        <ListItemButton
          component={Link}
          to="/director-producer"
          sx={{ ...generateButtonStyle(isLinkSelected('/director-producer')) }}
          onClick={() => handleLinkClick('/director-producer')}
        >
          <ListItemText primary="Director & Producer" sx={{ color: isLinkSelected('/director-producer') ? 'black' : 'white', padding: '1px' }} />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/camera-operator"
          sx={{ ...generateButtonStyle(isLinkSelected('/camera-operator')) }}
          onClick={() => handleLinkClick('/camera-operator')}
        >
          <ListItemText primary="Camera Operator" sx={{ color: isLinkSelected('/camera-operator') ? 'black' : 'white', padding: '1px' }} />
        </ListItemButton>
      </List>

      <List component="div">
        <ListSubheader component="div" sx={{ ...commonStyle }}>GENRE</ListSubheader>
        <ListItemButton
          component={Link}
          to="/animation"
          sx={{ ...generateButtonStyle(isLinkSelected('/animation')) }}
          onClick={() => handleLinkClick('/animation')}
        >
          <ListItemText primary="Animation" sx={{ color: isLinkSelected('/animation') ? 'black' : 'white', padding: '1px' }} />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/documentary"
          sx={{ ...generateButtonStyle(isLinkSelected('/documentary')) }}
          onClick={() => handleLinkClick('/documentary')}
        >
          <ListItemText primary="Documentary" sx={{ color: isLinkSelected('/documentary') ? 'black' : 'white', padding: '1px' }} />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/series"
          sx={{ ...generateButtonStyle(isLinkSelected('/series')) }}
          onClick={() => handleLinkClick('/series')}
        >
          <ListItemText primary="Series" sx={{ color: isLinkSelected('/series') ? 'black' : 'white', padding: '1px' }} />
        </ListItemButton>
      </List>
    </List>
  );
}

export default NavList;
