import React from 'react';
import { ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface CameraOperatorButtonProps {
  isSelected: boolean;
  generateButtonStyle: (isSelected: boolean) => React.CSSProperties;
  isLinkSelected: (link: string) => boolean;
}

export function CameraOperatorButton({ isSelected, generateButtonStyle, isLinkSelected }: CameraOperatorButtonProps) {
  return (
    <ListItemButton
      component={Link}
      to="/video-list?filter=camera-operator"
      sx={{ ...generateButtonStyle(isSelected), textAlign: 'right', paddingRight: '0px' }}
    >
      <ListItemText primary="Camera Operator" />
    </ListItemButton>
  );
}
