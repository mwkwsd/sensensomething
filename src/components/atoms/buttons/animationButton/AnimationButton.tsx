import React from 'react';
import { ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface AnimationButtonProps {
  isSelected: boolean;
  generateButtonStyle: (isSelected: boolean) => React.CSSProperties;
  isLinkSelected: (link: string) => boolean;
}

export function AnimationButton({ isSelected, generateButtonStyle }: AnimationButtonProps) {
  return (
    <ListItemButton
      component={Link}
      to="/video-list?filter=animation"
      sx={{ ...generateButtonStyle(isSelected), textAlign: 'right', paddingRight: '0px' }}
    >
      <ListItemText primary="Animation" />
    </ListItemButton>
  );
}
