import { SxProps, Typography } from '@mui/material'

type VideoInfoProps = {
  label: string
  info: string
  sx?: SxProps
}

export function VideoInfo({ label, info, sx }: VideoInfoProps) {
  return (
    <Typography variant="body2" sx={{ ...sx }}>
      <b>{label}: </b>
      {info}
    </Typography>
  )
}
