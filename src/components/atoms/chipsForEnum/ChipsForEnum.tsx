import { Genre, Role } from '../../../common/constants/enums'
import { enumMappings } from '../../../common/constants/constants'
import { Chip } from '@mui/material'

export function ChipsForEnum({ value }: { value: Genre | Role }): JSX.Element {
  const { label, url } = enumMappings[value]

  const handleClick = () => {
    window.location.href = url
  }

  return (
    <Chip
      label={label.toLocaleUpperCase()}
      color={value}
      component="button"
      variant="outlined"
      onClick={handleClick}
    />
  )
}
