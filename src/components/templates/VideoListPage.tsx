import React from "react";
import { IVideoCard } from "../../common/interfaces/IVideoCard";
import { VideoList } from "../organisms/videoList/VideoList";
import { useQuery } from "../../common/utils/reactUtils";
import { PageTitle } from "../atoms/pageTitle/PageTitle";
import styled from "styled-components";

{
  /* <iframe src="https://player.vimeo.com/video/222272362?h=e078f1bb38&color=ef9700&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/222272362">Meet The Pill Bug</a> from <a href="https://vimeo.com/ksensenb">Kurt Sensenbrenner</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */
}

const videos: IVideoCard[] = [
  {
    url: "https://player.vimeo.com/video/121707380",
    // url: "https://player.vimeo.com/video/121707380?h=d6c613b55d&color=ef9700&portrait=0",
    title: "From Mass to the Mountain",
    clientName: "Self",
    genre: "documentary",
    roles: ["director_producer"],
  },
  {
    url: "https://player.vimeo.com/video/222272362",
    title: "Meet The Pill Bug",
    clientName: "Bugs Everywhere",
    genre: "documentary",
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
      {/* <p>Role: {role}</p>
      <p>Genre: {genre}</p> */}

      <VideoList videos={videos} />
    </VideoListContainer>
  );
}
