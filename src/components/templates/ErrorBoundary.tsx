import { Card, Typography, useTheme } from '@mui/material'

export function ErrorBoundary() {
  const theme = useTheme()

  return (
    <Card sx={{paddingY: 4, backgroundColor: theme.palette.background.default}}>
      <Typography variant="h3">Sorry, this route doesn't exist.</Typography>
    </Card>
  )
}

