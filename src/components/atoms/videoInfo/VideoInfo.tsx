import { Link, SxProps, Typography } from '@mui/material'

type VideoInfoProps = {
  label: string
  info: string
  url?: string
  sx?: SxProps
}

export function VideoInfo({ label, info, sx, url }: VideoInfoProps) {
  return (
    <Typography variant="body1" sx={{ ...sx }}>
      {label}:
      {url && (
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          variant="body1"
          underline="hover"
          sx={theme => ({ color: theme.typography.body1.color })}
        >
          {info}
        </Link>
      )}
      {!url && info}
    </Typography>
  )
}
