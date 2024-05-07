import { Grid } from '@mui/material'
import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'
import { VideoCard } from '../../molecules/videoCard/VideoCard'
import { ShowMoreButton } from '../../atoms/buttons/ShowMoreButton'
import { HireMeButton } from '../../atoms/buttons/HireMeButton'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

type VideoListProps = {
  videos: IVideoInfo[]
  pageType: 'genre' | 'role' | 'recent'
}

const videosPerPage = 3

export function VideoList({ videos, pageType }: VideoListProps) {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const [visibleVideos, setVisibleVideos] = useState(
    videos.slice(0, videosPerPage)
  )

  const handleShowMore = () => {
    setVisibleVideos(videos.slice(0, visibleVideos.length + videosPerPage))
  }

  const allVideosDisplayed = visibleVideos.length === videos.length

  const videoComponents = visibleVideos.map((video: IVideoInfo) => (
    <Grid item xs={12} md={6} key={`grid-item-video-list-${video.title}`}>
      <VideoCard video={video} pageType={pageType} />
    </Grid>
  ))
  console.log(videoComponents)

  return (
    <>
      <Grid container spacing={2}>
        {videoComponents}
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {!isHomePage && <HireMeButton />}
        {!allVideosDisplayed && <ShowMoreButton onClick={handleShowMore} />}
      </div>
    </>
  )
}
