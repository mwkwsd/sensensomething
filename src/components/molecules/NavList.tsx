import React from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { RoleListSubheader } from './roleListSubheader/RoleListSubheader';
import { GenreListSubheader } from './genreListSubheader/GenreListSubheader';

const commonStyle = {
  fontWeight: 'bold',
  bgcolor: 'black',
  color: 'white',
  fontSize: 20,
  textAlign: 'right',
};

function generateButtonStyle(isSelected: boolean) {
  return {
    backgroundColor: isSelected ? 'lightgrey' : 'transparent',
    padding: '1px 16px',
    borderRadius: isSelected ? '24px 0 0 24px' : 'unset',
    '&:hover': {
      backgroundColor: 'lightgrey',
    },
    color: isSelected ? 'black' : 'white',
  };
}

export function NavList() {
  const location = useLocation();

  const isLinkSelected = (link: string) => {
    const linkWithoutQuery = link.replace(/(\?.*)$/, '');
    return location.pathname === linkWithoutQuery;
  };

  return (
    <List sx={{ width: '100%', height: '100%', maxWidth: 360, ...commonStyle }} component="nav">
      <ListItemButton
        component={Link}
        to="/"
        sx={{ ...generateButtonStyle(isLinkSelected('/')), textAlign: 'right' }}

      >
        <ListItemText primary="Recent Work" />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/contact"
        sx={{ ...generateButtonStyle(isLinkSelected('/contact')), textAlign: 'right' }}

      >
        <ListItemText primary="Contact" />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/about"
        sx={{ ...generateButtonStyle(isLinkSelected('/about')), textAlign: 'right' }}

      >
        <ListItemText primary="About" />
      </ListItemButton>

      <RoleListSubheader isLinkSelected={isLinkSelected} generateButtonStyle={generateButtonStyle} />

      {/* Genre List Subheader */}
      <GenreListSubheader />
    </List>
  );
}
