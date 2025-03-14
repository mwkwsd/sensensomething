import { Container, SxProps, Typography } from '@mui/material'

type PageTitleProps = {
  title?: string
  titleUnderlineColor?: string
  subheaderText?: string
  sx?: SxProps
  fullWidth?: boolean
}

export function PageTitle({
  title,
  titleUnderlineColor,
  subheaderText,
  sx,
  fullWidth: _fullWidth,
}: PageTitleProps) {
  const titleUnderline: SxProps = {
    paddingBottom: '8px',
    position: 'relative',
    ':after': {
      border: titleUnderlineColor
        ? `0.125rem solid ${titleUnderlineColor}`
        : 'none',
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
    },
  }

  return (
    <Container sx={{ ...sx }} disableGutters>
      <Typography variant="h1" sx={titleUnderline}>
        {title}
      </Typography>
      {subheaderText && (
        <Typography variant="body1">{subheaderText}</Typography>
      )}
    </Container>
  )
}
