import { CardMedia } from "@mui/material";
import { PlayButton } from "../buttons/PlayButton";
interface VideoProps {
  url: string;
}

export function Video({ url }: VideoProps) {

  return (
    <CardMedia>
      <iframe src={`${url}?controls=0`} title="Video" />

      {PlayButton()}
    </CardMedia>
  );
}


