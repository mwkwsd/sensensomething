import React from 'react'
import { CardMedia, SxProps } from '@mui/material'

type VideoProps = {
  url: string
  sx?: SxProps
}

// WIP
export function Video({ url, sx }: VideoProps) {
  return (
    <CardMedia
      component={'iframe'}
      src={addQueryParamsToVideoUrl(url)}
      sx={{ aspectRatio: '16/9', border: '0', ...sx }}
    />
  )
}
function addQueryParamsToVideoUrl(url: string): string {
  // color only seems to change the color of the played % on the video controls
  // Not any of the buttons. Might need to look at Kurt's setting for that.
  return url + '?color=0000ff'
}
