import { SxProps, Typography } from '@mui/material'
import { Theme } from '@mui/system'

type ImageOverlayTextProps = {
  text: string
  sx?: SxProps<Theme>
  borderColor: string
}

export function ImageOverlayText({ text, borderColor }: ImageOverlayTextProps) {
  const borderCss = `1px solid ${borderColor}`

  return (
    <Typography
      variant="h3"
      sx={{
        ':after': {
          border: borderCss,
          display: 'block',
          content: '""',
          width: '40px',
        },
      }}
    >
      {text}
    </Typography>
  )
}
