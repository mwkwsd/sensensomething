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
        paddingBottom: subheaderText ? '16px' : '0',
        width: fullWidth ? '100%' : '40px',
        ':after': {
            border: titleUnderlineColor
              ? `1px solid ${titleUnderlineColor}`
              : 'none',
          display: 'block',
          content: '""',
          width: fullWidth ? '100%' : '40px',
          marginTop: '10px',
        },
      }
    : { paddingBottom: '16px', marginTop: '10px' }

  return (
    <Container sx={{ ...sx }} disableGutters={true}>
      <Typography
        variant="h1"
        sx={titleUnderline}
      >
        {title?.toLocaleUpperCase()}
      </Typography>
      {subheaderText && (
        <Typography variant="body1">{subheaderText}</Typography>
      )}
    </Container>
  )
}
