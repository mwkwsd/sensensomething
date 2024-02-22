import { Chip, useTheme } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { enumMappings } from '../../../common/constants/constants'
import { Genre, Role } from '../../../common/constants/enums'

export function ChipsForEnum({ value }: { value: Genre | Role }): JSX.Element {
  const { label, url } = enumMappings[value]
  const navigate = useNavigate()
  const theme = useTheme()
  const buttonColor = theme.palette[value].main

  const handleClick = () => {
    navigate(url)
  }

  return (
    <Chip
      component={Link}
      to={url}
      label={label.toLocaleUpperCase()}
      color={value}
      variant="outlined"
      onClick={handleClick}
      sx={{
        '&&:hover': {
          backgroundColor: `${buttonColor}`,
          color: theme.palette.background.default,
        },
        '&&:active': {
          backgroundColor: `${buttonColor}`,
          color: theme.palette.background.default,
        },
      }}
    />
  )
}
