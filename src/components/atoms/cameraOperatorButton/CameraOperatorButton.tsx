import React from 'react';
import { ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface CameraOperatorButtonProps {
  isSelected: boolean;
}

export function CameraOperatorButton({ isSelected }: CameraOperatorButtonProps) {
  return (
    <ListItemButton
      component={Link}
      to="/video-list?filter=camera-operator"
      sx={{
        // ... (button styles)
      }}
      selected={isSelected}
    >
      <ListItemText primary="Camera Operator" />
    </ListItemButton>
  );
}

