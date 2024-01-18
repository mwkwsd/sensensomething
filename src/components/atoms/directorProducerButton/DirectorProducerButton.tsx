import React from 'react';
import { ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface DirectorProducerButtonProps {
  isSelected: boolean;
  generateButtonStyle: (isSelected: boolean) => React.CSSProperties;
  isLinkSelected: (link: string) => boolean;
}

export function DirectorProducerButton({ isSelected, generateButtonStyle, isLinkSelected }: DirectorProducerButtonProps) {
  return (
    <ListItemButton
      component={Link}
      to="/video-list?filter=director-producer"
      sx={{
        ...generateButtonStyle(isSelected),
        textAlign: 'right',
      }}
    >
      <ListItemText primary="Director & Producer" />
    </ListItemButton>
  );
}
