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
  fullWidth,
}: PageTitleProps) {
  const titleUnderline = {
    paddingBottom: '16px',
    position: 'relative',
    ':after': {
      border: titleUnderlineColor ? `1px solid ${titleUnderlineColor}` : 'none',
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: fullWidth ? '100%' : '40px',
      marginTop: '10px',
    },
  }

  return (
    <Container sx={{ ...sx }} disableGutters={true}>
      <Typography variant="h1" sx={titleUnderline}>
        {title?.toLocaleUpperCase()}
      </Typography>
      {subheaderText && (
        <Typography variant="body2">{subheaderText}</Typography>
      )}
    </Container>
  )
}
