import React from 'react';
import Typography from '@mui/material/Typography';

type SubHeadingProps = {
  subHeading: string;
};

export function SubHeading({ subHeading }: SubHeadingProps) {
  return (
    <Typography sx={{ margin: 0, fontSize: '15px', marginTop: '-10px', '@media (min-width: 1280px)': { fontSize: '20px' } }}>
      {subHeading}
    </Typography>
  );
}
