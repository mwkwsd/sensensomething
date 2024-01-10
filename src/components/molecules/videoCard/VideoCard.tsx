import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import { useMemo } from "react";
import { Video } from "../../atoms/video/Video";
import { VideoTitle } from "../../atoms/videoTitle/VideoTitle";
import { VideoInfo } from "../../atoms/videoInfo/VideoInfo";
import { IVideoCard } from "../../../common/interfaces/IVideoCard";
import { convertFromEnumToText } from "../../../common/utils/utils";
import styled from "styled-components";

type VideoCardProps = Omit<IVideoCard, "isRecentWork" | "genre">;

const VideoWrapper = styled("div")(() => ({}));

// TODO: Video needs to take full width of Card
export function VideoCard({ url, title, clientName, roles }: VideoCardProps) {
  const video = useMemo(
    () => (
      <VideoWrapper>
        <Video url={addQueryParamsToVideoUrl(url)} />{" "}
      </VideoWrapper>
    ),
    [url]
  );
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
    // maxWidth taken from Figma, likely not finalized
    <Card>
      {video}
      <CardContent>
        {videoTitle}
        {clientComponent}
        {rolesComponent}
      </CardContent>
    </Card>
  );
}

function addQueryParamsToVideoUrl(url: string): string {
  return url + "";
}
