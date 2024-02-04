import { SxProps, Typography } from '@mui/material'

type VideoTitleProps = {
  title: string
  sx?: SxProps
}

export function VideoTitle({ title, sx }: VideoTitleProps) {
  return (
    <Typography variant="h2" sx={{ ...sx }}>
      {title}
    </Typography>
  )
}
