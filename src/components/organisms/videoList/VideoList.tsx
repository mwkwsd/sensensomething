import { Grid } from '@mui/material'
import { IVideoCard } from '../../../common/interfaces/IVideoCard'
import { VideoCard } from '../../molecules/videoCard/VideoCard'

type VideoListProps = {
  videos: IVideoCard[]
}

export function VideoList({ videos }: VideoListProps) {
  const videoComponents = videos.map((iVideo, index) => (
    <Grid item xs={12} md={6} key={`grid-item-video-list-${iVideo.title}`}>
      <VideoCard {...iVideo} />
    </Grid>
  ))
  return (
    <Grid container spacing={2}>
      {videoComponents}
    </Grid>
  )
}
