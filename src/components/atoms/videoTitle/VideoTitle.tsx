import { Typography } from '@mui/material'

type VideoTitleProps = {
  title: string
}

export function VideoTitle({ title }: VideoTitleProps) {
  return <Typography variant="h3">{title}</Typography>
}
