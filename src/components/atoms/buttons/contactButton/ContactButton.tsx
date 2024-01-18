import React from 'react';
import { ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface ContactButtonProps {
  isSelected: boolean;
  generateButtonStyle: (isSelected: boolean) => React.CSSProperties;
  isLinkSelected: (link: string) => boolean;
}

export function ContactButton({ isSelected, generateButtonStyle, isLinkSelected }: ContactButtonProps) {
  return (
    <ListItemButton
      component={Link}
      to="/contact"
      sx={{...generateButtonStyle(isSelected), textAlign: 'right' }}>
      <ListItemText primary="Contact" />
    </ListItemButton>
  );
}
