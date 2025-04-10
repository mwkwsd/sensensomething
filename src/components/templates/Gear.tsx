import { Card, useTheme } from '@mui/material'
import { GearPage } from '../molecules/Gear/GearPage'

export function Gear() {
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
      <GearPage />
    </Card>
  )
}
