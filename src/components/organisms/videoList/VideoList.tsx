import { Grid2, Stack } from '@mui/material'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Genre, Role } from '../../../common/constants/enums'
import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'
import { OutlinedButton } from '../../atoms/buttons/OutlinedButton'
import { VideoCard } from '../../molecules/videoCard/VideoCard'

type VideoListProps = {
  videos: IVideoInfo[]
  pageCategory: 'genre' | 'role' | 'recent'
  pageType?: Role | Genre
}

const VIDEOS_PER_PAGE = 3

export function VideoList({ videos, pageType, pageCategory }: VideoListProps) {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const [visibleVideos, setVisibleVideos] = useState(
    videos.slice(0, VIDEOS_PER_PAGE)
  )

  const handleShowMore = () => {
    setVisibleVideos(videos.slice(0, visibleVideos.length + VIDEOS_PER_PAGE))
  }

  const allVideosDisplayed = visibleVideos.length === videos.length

  const videoComponents = visibleVideos.map((video: IVideoInfo) => (
    <Grid2 size={{ xs: 12, md: 6 }} key={`grid-item-video-list-${video.title}`}>
      <VideoCard
        video={video}
        pageType={pageType}
        pageCategory={pageCategory}
      />
    </Grid2>
  ))

  return (
    <>
      <Grid2 container spacing={2}>
        {videoComponents}
      </Grid2>
      <Stack
        direction="row"
        spacing={{ xs: 1 }}
        justifyContent="center"
        sx={{ paddingTop: '1rem', paddingBottom: '2rem', paddingX: '1rem' }}
      >
        {!isHomePage && (
          <OutlinedButton
            text="Ready to Hire Me?"
            color="#79DFC1"
            component={Link}
            to="/#contact"
          />
        )}
        {!allVideosDisplayed && (
          <OutlinedButton
            text="Show More Videos"
            color="#FFFFFF"
            onClick={handleShowMore}
          />
        )}
      </Stack>
    </>
  )
}
