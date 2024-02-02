import { Typography } from '@mui/material';
import { Genre, Role } from '../../../common/constants/enums';
import { ReactNode } from 'react';
import { ChipsForEnum } from '../chipsForEnum/ChipsForEnum'; 

type VideoInfoProps = {
  label: string;
  linkableInfo: Genre[] | Role[];
};

export function VideoInfoWithLink({ label, linkableInfo }: VideoInfoProps) {
  const chips: ReactNode = linkableInfo
    .map<ReactNode>((info, index) => (
      <ChipsForEnum value={info} key={`chip-for-enum-${info}-${index}`} />
    ))
    .reduce((acc, value) => [acc, ', ', value]);

  return (
    <Typography variant="body1">
      {chips}
    </Typography>
  );
}
