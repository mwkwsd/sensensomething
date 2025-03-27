import { Card, useTheme } from '@mui/material'
import { AboutPage } from '../molecules/About/AboutPage'

export function About() {
  const {
    palette: {
      background: { default: backgroundColor },
    },
  } = useTheme()

  return (
    <Card
      elevation={0}
      sx={{ backgroundColor: backgroundColor }}
    >
      <AboutPage />
    </Card>
  )
}
