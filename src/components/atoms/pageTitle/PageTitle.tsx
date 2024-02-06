import { Container, SxProps, Typography } from '@mui/material'

type PageTitleProps = {
  title: string
  subheaderText?: string
  sx?: SxProps
}

export function PageTitle({ title, subheaderText, sx }: PageTitleProps) {
  return (
    <Container sx={{ ...sx }} disableGutters={true}>
      <Typography variant="h1" sx={{ padding: '0px 0px 8px' }}>
        {title}
      </Typography>
      {subheaderText && (
        <Typography variant="body1">{subheaderText}</Typography>
      )}
    </Container>
  )
}
