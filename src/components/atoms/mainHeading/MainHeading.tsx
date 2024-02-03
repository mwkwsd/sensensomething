import React from 'react';
import Typography from '@mui/material/Typography';

type MainHeadingProps = {
  mainHeading: string;
};

export function MainHeading({ mainHeading }: MainHeadingProps) {
  return (
    <Typography sx={{ margin: 0, fontSize: '50px', '@media (min-width: 1280px)': { fontSize: '65px' } }}>
      {mainHeading}
    </Typography>
  );
}
