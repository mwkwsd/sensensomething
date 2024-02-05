import React from 'react';
import Typography from '@mui/material/Typography';

type MainHeadingProps = {
  mainHeading: string;
};

export function MainHeading({ mainHeading }: MainHeadingProps) {
  return (
    <Typography >
      {mainHeading}
    </Typography>
  );
}
