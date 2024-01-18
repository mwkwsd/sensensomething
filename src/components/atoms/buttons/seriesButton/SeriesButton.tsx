import React from 'react';
import { ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface SeriesButtonProps {
  isSelected: boolean;
  generateButtonStyle: (isSelected: boolean) => React.CSSProperties;
  isLinkSelected: (link: string) => boolean;
}

export function SeriesButton({ isSelected, generateButtonStyle }: SeriesButtonProps) {
  return (
    <ListItemButton
      component={Link}
      to="/video-list?filter=series"
      sx={{ ...generateButtonStyle(isSelected), textAlign: 'right', paddingRight: '0px' }}
    >
      <ListItemText primary="Series" />
    </ListItemButton>
  );
}
