import { Link } from 'react-router-dom'
import { Genre, Role } from '../../../common/constants/enums'
import { enumMappings } from '../../../common/constants/constants'

type LinkForEnumProps = {
  value: Genre | Role
}

export function LinkForEnum({ value }: LinkForEnumProps) {
  const { url, label } = enumMappings[value]

  return (
    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={url}>
      {label}
    </Link>
  )
}
