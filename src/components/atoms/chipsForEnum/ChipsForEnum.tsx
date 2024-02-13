import { Chip } from '@mui/material'
import { Genre, Role } from '../../../common/constants/enums'
import { enumMappings } from '../../../common/constants/constants'
import { SxProps, useTheme } from '@mui/material'

export function ChipsForEnum({ value }: { value: Genre | Role }): JSX.Element {
  const { label, url } = enumMappings[value]
  const theme = useTheme()

  const handleClick = () => {
    window.location.href = url
  }

  const chipCssProperties: SxProps = {
    ...theme.typography.body2,
    backgroundColor: value + '.main',
  }

  return (
    <Chip
      label={label}
      component="button"
      onClick={handleClick}
      sx={chipCssProperties}
    />
  )
}
