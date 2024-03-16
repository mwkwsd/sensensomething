import { Grid } from '@mui/material'
import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'
import { PageTitle } from '../../atoms/pageTitle/PageTitle'
import { VideoCard } from '../../molecules/videoCard/VideoCard'

type VideoListProps = {
  videos: IVideoInfo[]
  pageType: 'genre' | 'role' | 'recent'
}

export function VideoList({ videos, pageType }: VideoListProps) {
  const videoComponents = videos.map(video => (
    <Grid item xs={12} md={6} key={`grid-item-video-list-${video.title}`}>
      <VideoCard video={video} pageType={pageType} />
    </Grid>
  ))
  return (
    <>
      <PageTitle
        sx={{ padding: '32px 16px 16px', fontSize: '1.75rem', fontWeight: '400' }}
      />
      <Grid container spacing={2}>
        {videoComponents}
      </Grid>
    </>
  )
}
