import { Link, SxProps, Typography } from '@mui/material'

type VideoInfoProps = {
  label: string
  info: string
  url?: string
  sx?: SxProps
}

export function VideoInfo({ label, info, sx, url }: VideoInfoProps) {
  return (
    <Typography variant="body2" sx={{ ...sx }}>
      <b>{label}: </b>
      {url && (
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          variant="body2"
          underline="hover"
          sx={theme => ({ color: theme.typography.body2.color })}
        >
          {info}
        </Link>
      )}
      {!url && info}
    </Typography>
  )
}
