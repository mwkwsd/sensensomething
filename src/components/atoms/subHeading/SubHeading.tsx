import Typography from '@mui/material/Typography';

type SubHeadingProps = {
  subHeading: string;
};

export function SubHeading({ subHeading }: SubHeadingProps) {
  return (
    <Typography >
      {subHeading}
    </Typography>
  );
}
