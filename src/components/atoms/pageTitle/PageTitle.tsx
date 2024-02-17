import { Container, SxProps, Typography } from '@mui/material'

type PageTitleProps = {
  title: string
  titleUnderlineColor?: string
  subheaderText?: string
  sx?: SxProps
}

export function PageTitle({
  title,
  titleUnderlineColor,
  subheaderText,
  sx,
}: PageTitleProps) {
  const titleUnderline: SxProps = titleUnderlineColor
    ? {
        paddingBottom: '16px',
        ':after': {
          border: `1px solid ${titleUnderlineColor}`,
          display: 'block',
          content: '""',
          width: '40px',
        },
      }
    : { paddingBottom: '16px' }

  return (
    <Container sx={{ ...sx }} disableGutters={true}>
      <Typography variant="h1" sx={titleUnderline}>
        {title.toLocaleUpperCase()}
      </Typography>
      {subheaderText && (
        <Typography variant="body1">{subheaderText}</Typography>
      )}
    </Container>
  )
}
