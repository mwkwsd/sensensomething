import { Card, CardContent, CardMedia } from "@mui/material";
import { useMemo } from "react";
import { Video } from "../../atoms/video/Video";

const roles = ["director_producer", "camera_operator"] as const;
export type Role = (typeof roles)[number];
const genres = ["documentary", "animation", "series"] as const;
export type Genre = (typeof genres)[number];

// Should this interface live here? Do we want to have a separate file for this type of interface?
export interface IVideoCard {
  url: string; // The URL of the video
  title: string; // The title of the video
  clientName: string; // The name of the client
  roles: Role[]; // The roles Kurt was for this video
  genre: Genre; // The genre of the video
  isRecentWork?: boolean; // If this video should be on the recent work section
}

type VideoCardProps = IVideoCard;
export function VideoCard(props: VideoCardProps) {
  const video = useMemo(() => <Video url={props.url} />, [props.url]);

  return (
    // maxWidth taken from Figma, likely not finalized
    <Card sx={{ maxWidth: 343 }}>
      <CardMedia component={'video'}
      />

    </Card>
  );
}
