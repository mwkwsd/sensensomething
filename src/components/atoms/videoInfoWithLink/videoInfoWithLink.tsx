import { Stack, SxProps } from '@mui/material'
import { Genre, Role } from '../../../common/constants/enums'
import { ReactNode } from 'react'
import { ChipsForEnum } from '../chipsForEnum/ChipsForEnum'

type VideoInfoProps = {
  linkableInfo: (Genre | Role)[]
  sx?: SxProps
}

export function VideoInfoWithLink({ linkableInfo, sx }: VideoInfoProps) {
  const chips: ReactNode[] = linkableInfo.map((info, index) => (
    <ChipsForEnum value={info} key={`chip-for-enum-${info}-${index}`} />
  ))

  return (
    <Stack direction="row" spacing={0.5} sx={{ ...sx }}>
      {chips}
    </Stack>
  )
}
