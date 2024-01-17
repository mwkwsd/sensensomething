import { Link } from 'react-router-dom'
import { Genre, Role, roleTypeChecker } from '../../../common/constants/enums'
import {
  convertFromEnumToText,
  convertFromEnumToUrl,
} from '../../../common/utils/utils'

function buildLinkUrl(arg: Genre | Role): string {
  const filterKey = roleTypeChecker(arg) ? 'role' : 'genre'
  return '/video-list-page?' + filterKey + '=' + convertFromEnumToUrl(arg)
}

type LinkForEnumProps = {
  value: Genre | Role
}

export function LinkForEnum({ value }: LinkForEnumProps) {
  return (
    <Link
      style={{ color: 'black', textDecoration: 'none' }}
      to={buildLinkUrl(value)}
    >
      {convertFromEnumToText(value)}
    </Link>
  )
}
