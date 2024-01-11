import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import { useMemo } from "react";
import { Video } from "../../atoms/video/Video";
import { VideoTitle } from "../../atoms/videoTitle/VideoTitle";
import { VideoInfo } from "../../atoms/videoInfo/VideoInfo";
import { IVideoCard } from "../../../common/interfaces/IVideoCard";
import { convertFromEnumToText } from "../../../common/utils/utils";

type VideoCardProps = Omit<IVideoCard, "isRecentWork">;

// TODO: Video needs to take full width of Card
export function VideoCard({
  url,
  title,
  clientName,
  roles,
  genres,
}: VideoCardProps) {
  const mediaCardVideo = useMemo(() => <Video url={url} />, [url]);
  const videoTitle = useMemo(() => <VideoTitle title={title} />, [title]);

  const clientComponent = useMemo(
    () => <VideoInfo label="Client" infoValue={clientName} />,
    [clientName]
  );

  const rolesComponent = useMemo(() => {
    const rolesComponents = roles.map(convertFromEnumToText).join(", ");
    return <VideoInfo label="Roles" infoValue={rolesComponents} />;
  }, [roles]);

  const genresComponent = useMemo(() => {
    const genresComponents = genres.map(convertFromEnumToText).join(", ");
    return <VideoInfo label="Genres" infoValue={genresComponents} />;
  }, [genres]);

  return (
    <Card>
      {mediaCardVideo}
      <CardContent>
        {videoTitle}
        {clientComponent}
        {rolesComponent}
        {genresComponent}
      </CardContent>
    </Card>
  );
}
