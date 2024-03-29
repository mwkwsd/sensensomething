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
  return (
    <Container sx={{ ...sx }} disableGutters={true}>
      <Typography
        variant="h1"
        sx={{
          paddingBottom: subheaderText ? '16px' : '0', 
          width: fullWidth ? '100%' : '40px',
          ':after': {
            border: titleUnderlineColor
              ? `1px solid ${titleUnderlineColor}`
              : 'none',
            display: 'block',
            content: '""',
            width: fullWidth ? '100%' : '40px',
          },
        }}
      >
        {title?.toLocaleUpperCase()}
      </Typography>
      {subheaderText && (
        <Typography variant="body1">{subheaderText}</Typography>
      )}
    </Container>
  )
}
