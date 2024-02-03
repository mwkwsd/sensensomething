import { Typography } from '@mui/material'

type VideoInfoProps = {
  label: string
  info: string
}

export function VideoInfo({ label, info }: VideoInfoProps) {
  return (
    <Typography variant="body1">
      <b>{label}: </b>
      {info}
    </Typography>
  )
}
