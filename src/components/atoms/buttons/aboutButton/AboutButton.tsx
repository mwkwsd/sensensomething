import React from 'react';
import { ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface AboutButtonProps {
  isSelected: boolean;
  generateButtonStyle: (isSelected: boolean) => React.CSSProperties;
  isLinkSelected: (link: string) => boolean;
}

export function AboutButton({ isSelected, generateButtonStyle, isLinkSelected }: AboutButtonProps) {
  return (
    <ListItemButton
      component={Link}
      to="/about"
      sx={{...generateButtonStyle(isSelected), textAlign: 'right' }}>
      <ListItemText primary="About" />
    </ListItemButton>
  );
}
