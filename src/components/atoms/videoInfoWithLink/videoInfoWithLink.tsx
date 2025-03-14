import { Grid2, SxProps } from '@mui/material'
import { Genre, Role } from '../../../common/constants/enums'
import { ChipsForEnum } from '../chipsForEnum/ChipsForEnum'

type VideoInfoProps = {
  linkableInfo: readonly (Genre | Role)[]
  sx?: SxProps
}

export function VideoInfoWithLink({ linkableInfo, sx }: VideoInfoProps) {
  return (
    <Grid2 container direction="row" spacing={0.5} sx={{ ...sx }}>
      {linkableInfo.map(info => (
        <ChipsForEnum value={info} key={`chip-for-enum-${info}`} />
      ))}
    </Grid2>
  )
}
