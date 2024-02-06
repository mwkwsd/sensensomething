import { Grid } from '@mui/material'
import { VideoCard } from '../../molecules/videoCard/VideoCard'
import { PageEnum } from '../../../common/constants/constants'
import { IVideoInfo } from '../../../common/interfaces/IVideoInfo'

type VideoListProps = {
  videos: IVideoInfo[]
  pageEnum: PageEnum
}

export function VideoList({ videos, pageEnum }: VideoListProps) {
  const videoComponents = videos.map(video => (
    <Grid item xs={12} md={6} key={`grid-item-video-list-${video.title}`}>
      <VideoCard video={video} pageEnum={pageEnum} />
    </Grid>
  ))
  return (
    <Grid container spacing={2}>
      {videoComponents}
    </Grid>
  )
}
