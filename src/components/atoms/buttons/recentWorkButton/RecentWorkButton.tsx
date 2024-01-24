import React from 'react';
import { ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface RecentWorkButtonProps {
  isSelected: boolean;
  generateButtonStyle: (isSelected: boolean) => React.CSSProperties;
  isLinkSelected: (link: string) => boolean;
}

export function RecentWorkButton({ isSelected, generateButtonStyle, isLinkSelected }: RecentWorkButtonProps) {
  return (
    <ListItemButton
      component={Link}
      to="/"
      sx={{...generateButtonStyle(isSelected), textAlign: 'right' }}>
      <ListItemText primary="Recent Work" />
    </ListItemButton>
  );
}
