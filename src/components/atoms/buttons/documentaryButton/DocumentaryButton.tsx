import React from 'react';
import { ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface DocumentaryButtonProps {
  isSelected: boolean;
  generateButtonStyle: (isSelected: boolean) => React.CSSProperties;
  isLinkSelected: (link: string) => boolean;
}

export function DocumentaryButton({ isSelected, generateButtonStyle }: DocumentaryButtonProps) {
  return (
    <ListItemButton
      component={Link}
      to="/video-list?filter=documentary"
      sx={{ ...generateButtonStyle(isSelected), textAlign: 'right', paddingRight: '0px' }}
    >
      <ListItemText primary="Documentary" />
    </ListItemButton>
  );
}
