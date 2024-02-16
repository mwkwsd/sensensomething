import { Typography } from '@mui/material';

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
