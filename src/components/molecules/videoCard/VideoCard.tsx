import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import { useMemo } from "react";
import { Video } from "../../atoms/video/Video";
import { VideoTitle } from "../../atoms/videoTitle/VideoTitle";
import { VideoInfo } from "../../atoms/videoInfo/VideoInfo";
import { IVideoCard } from "../../../common/interfaces/IVideoCard";
import { convertFromEnumToText } from "../../../common/utils/utils";

type VideoCardProps = Omit<IVideoCard, "isRecentWork" | "genre">;

// TODO: Video needs to take full width of Card
export function VideoCard({ url, title, clientName, roles }: VideoCardProps) {
  const mediaCardVideo = useMemo(() => <Video url={url} />, [url]);
  const videoTitle = useMemo(() => <VideoTitle title={title} />, [title]);

  const clientComponent = useMemo(
    () => <VideoInfo label="Client" text={clientName} />,
    [clientName]
  );

  const rolesComponent = useMemo(() => {
    const rolesText = roles.map(convertFromEnumToText).join(", ");
    return <VideoInfo label="Roles" text={rolesText} />;
  }, [roles]);

  return (
    <Card>
      {mediaCardVideo}
      <CardContent>
        {videoTitle}
        {clientComponent}
        {rolesComponent}
      </CardContent>
    </Card>
  );
}
