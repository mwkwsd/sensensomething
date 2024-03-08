import { Grid } from '@mui/material'
import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'
import { PageTitle } from '../../atoms/pageTitle/PageTitle'
import { VideoCard } from '../../molecules/videoCard/VideoCard'
import { ShowMoreButton } from '../../atoms/buttons/ShowMoreButton'
import { useState } from 'react'

type VideoListProps = {
  videos: IVideoInfo[]
  pageType: 'genre' | 'role' | 'recent'
}

export function VideoList({ videos, pageType }: VideoListProps) {
  const videosPerPage = 3
  const [visibleVideos, setVisibleVideos] = useState(
    videos.slice(0, videosPerPage)
  )

  const handleShowMore = () => {
    const currentVisibleCount = visibleVideos.length;
    const nextVisibleVideos = videos.slice(currentVisibleCount, currentVisibleCount + videosPerPage);
    setVisibleVideos((prevVisibleVideos: IVideoInfo[]) => [...prevVisibleVideos, ...nextVisibleVideos]);
  };

  const allVideosDisplayed = visibleVideos.length === videos.length;

  const videoComponents = visibleVideos.map((video: IVideoInfo) => (
    <Grid item xs={12} md={6} key={`grid-item-video-list-${video.title}`}>
      <VideoCard video={video} pageType={pageType} />
    </Grid>
  ))
  console.log(videoComponents)
  return (
    <>
      <PageTitle
        title="RECENT WORK"
        sx={{
          padding: '32px 16px 16px',
          fontSize: '1.75rem',
          fontWeight: '400',
        }}
      />
      <Grid container spacing={2}>
        {videoComponents}
      </Grid>
      {!allVideosDisplayed && (
        <ShowMoreButton onClick={handleShowMore} />
      )}
    </>
  )
}
