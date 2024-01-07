import { Typography } from "@mui/material";

type VideoInfoProps = {
  label?: string;
  text: string;
};

export function VideoInfo({ label, text }: VideoInfoProps) {
  return (
    <Typography>
      {!!label && <b>{`${label}: `}</b>}
      {text}
    </Typography>
  );
}
