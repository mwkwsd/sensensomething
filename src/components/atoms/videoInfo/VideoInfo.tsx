import { Typography } from "@mui/material";
import { ReactNode } from "react";

type VideoInfoProps = {
  label?: string;
  infoValue: ReactNode
};

export function VideoInfo({ label, infoValue }: VideoInfoProps) {
  return (
    <Typography>
      {!!label && <b>{`${label}: `}</b>}
      {infoValue}
    </Typography>
  );
}
