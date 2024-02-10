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
  const updatedSx: SxProps | undefined = titleUnderlineColor
    ? {
        ...sx,
        ':after': {
          border: `1px solid ${titleUnderlineColor}`,
          display: 'block',
          content: '""',
          width: '40px',
        },
      }
    : sx
  return (
    <Container sx={{ ...sx }} disableGutters={true}>
      <Typography variant="h1" sx={updatedSx}>
        {title}
      </Typography>
      {subheaderText && (
        <Typography variant="body1">{subheaderText}</Typography>
      )}
    </Container>
  )
}
