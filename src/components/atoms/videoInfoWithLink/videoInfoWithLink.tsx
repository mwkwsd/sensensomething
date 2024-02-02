import { Typography } from '@mui/material'
import { Genre, Role } from '../../../common/constants/enums'
import { ReactNode } from 'react'
import { ChipsForEnum } from '../chipsForEnum/ChipsForEnum'

type VideoInfoProps = {
  label: string
  linkableInfo: Genre[] | Role[]
}

export function VideoInfoWithLink({ linkableInfo }: VideoInfoProps) {
  const chips: ReactNode[] = linkableInfo.map((info, index) => (
    <ChipsForEnum value={info} key={`chip-for-enum-${info}-${index}`} />
  ))

  return (
    // The styling below was my attempt at rendering the Chips horizontally across the page. No dice.
    // <Typography variant="body1" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
    <Typography
      variant="body1"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {chips}
    </Typography>
  )
}
