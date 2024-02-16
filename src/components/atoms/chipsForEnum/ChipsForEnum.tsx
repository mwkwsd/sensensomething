import { Chip } from '@mui/material'
import { Genre, Role } from '../../../common/constants/enums'
import { enumMappings } from '../../../common/constants/constants'
import { useNavigate } from 'react-router-dom'

export function ChipsForEnum({ value }: { value: Genre | Role }): JSX.Element {
  const { label, url } = enumMappings[value]
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(url)
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
