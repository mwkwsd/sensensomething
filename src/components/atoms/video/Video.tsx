import ReactPlayer from 'react-player'
import { CardMedia } from '@mui/material'

type VideoProps = {
  url: string
}

export function Video({ url }: VideoProps) {
  return (
    <CardMedia component={'div'} sx={{ aspectRatio: '16/9', border: '0' }}>
      <ReactPlayer
        url={addQueryParamsToVideoUrl(url)}
        controls
        width="100%"
        height="100%"
      />
    </CardMedia>
  )
}

function addQueryParamsToVideoUrl(url: string): string {
  // Add any query parameters if needed
  // color only seems to change the color of the played % on the video controls
  // Not any of the buttons. Might need to look at Kurt's setting for that.
  return url + '?color=0000ff'
}
