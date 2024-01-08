import React from 'react'
import { IVideoCard } from '../../common/interfaces/IVideoCard';
import { VideoCard } from '../molecules/videoCard/VideoCard';

function Home() {
  const video: IVideoCard = {
    url: "https://player.vimeo.com/video/121707380",
    // url: "https://player.vimeo.com/video/121707380?h=d6c613b55d&color=ef9700&portrait=0",
    title: "From Mass to the Mountain",
    clientName: "Self",
    genre: "documentary",
    roles: ["director_producer"],
  };
  
  return (
    <div>
      <h1>Landing Page</h1>
      <VideoCard {...video} />
    </div>
  )
}

export default Home