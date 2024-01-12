import React from "react";
import { IVideoCard } from "../../common/interfaces/IVideoCard";
import { VideoList } from "../organisms/videoList/VideoList";
import { useQuery } from "../../common/utils/reactUtils";
import { PageTitle } from "../atoms/pageTitle/PageTitle";
import styled from "styled-components";

const videos: IVideoCard[] = [
  {
    url: "https://player.vimeo.com/video/121707380",
    title: "From Mass to the Mountain",
    clientName: "Self",
    genres: ["documentary"],
    roles: ["director_producer"],
  },
  {
    url: "https://player.vimeo.com/video/222272362",
    title: "Meet The Pill Bug",
    clientName: "Bugs Everywhere",
    genres: ["documentary", "animation"],
    roles: ["director_producer", "camera_operator"],
  },
];
const VideoListContainer = styled("div")(() => ({
  display: "grid",
  gap: 24,
  justifyContent: "stretch",
}));

export function VideoListPage() {
  const _query = useQuery();

  return (
    <VideoListContainer>
      <PageTitle title={"documentary"} />
      <VideoList videos={videos} />
    </VideoListContainer>
  );
}
