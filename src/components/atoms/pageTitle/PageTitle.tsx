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
  fullWidth
}: PageTitleProps) {
  const titleUnderline: SxProps = titleUnderlineColor
    ? {
        paddingBottom: '16px',
        width: fullWidth ? '100%' : '40px',
        ':after': {
          border: `1px solid ${titleUnderlineColor}`,
          display: 'block',
          content: '""',
          width: fullWidth ? '100%' : '40px',
        },
      }
    : { paddingBottom: '16px' }

  return (
    <Container sx={{ ...sx }} disableGutters={true}>
      <Typography variant="h1" sx={titleUnderline}>
        {title?.toLocaleUpperCase()}
      </Typography>
      {subheaderText && (
        <Typography variant="body1">{subheaderText}</Typography>
      )}
    </Container>
  )
}
