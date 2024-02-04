// This file functions, and renders, perfectly fine
// There is an error "squiggle" on the very last curly bracket
// that says, "Declaration or statement expected.ts(1128)"???
import Chip from '@mui/material/Chip'
import { Genre, Role } from '../../../common/constants/enums'
import { enumMappings } from '../../../common/constants/constants'
import { SxProps, useTheme } from '@mui/material'

export function ChipsForEnum({ value }: { value: Genre | Role }): JSX.Element {
  const { text: label, url } = enumMappings[value]
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
