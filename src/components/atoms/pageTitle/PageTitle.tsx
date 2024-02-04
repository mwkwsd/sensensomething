import { Container, SxProps, Typography } from '@mui/material'
import { Genre, Role } from '../../../common/constants/enums'
import { enumMappings } from '../../../common/constants/constants'

type PageTitleProps = {
  title: Genre | Role
  subheaderText?: string
  sx?: SxProps
}

export function PageTitle({ title, subheaderText, sx }: PageTitleProps) {
  const pageTitle = enumMappings[title].text
  return (
    <Container sx={{ ...sx }} disableGutters={true}>
      <Typography variant="h1" sx={{ padding: '0px 0px 8px' }}>
        {pageTitle}
      </Typography>
      {subheaderText && (
        <Typography variant="body1">{subheaderText}</Typography>
      )}
    </Container>
  )
}
