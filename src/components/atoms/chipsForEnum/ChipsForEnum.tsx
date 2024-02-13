import Chip from '@mui/material/Chip'
import { Genre, Role } from '../../../common/constants/enums'
import { enumMappings } from '../../../common/constants/constants'
import { SxProps, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export function ChipsForEnum({ value }: { value: Genre | Role }): JSX.Element {
  const { label, url } = enumMappings[value]
  const theme = useTheme()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(url)
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
