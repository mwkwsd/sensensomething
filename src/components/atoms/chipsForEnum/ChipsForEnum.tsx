// This file functions, and renders, perfectly fine
// There is an error "squiggle" on the very last curly bracket
// that says, "Declaration or statement expected.ts(1128)"???
import Chip from '@mui/material/Chip'
import { Genre, Role, genreTypeChecker } from '../../../common/constants/enums'
import {
  convertFromEnumToText,
  convertFromEnumToUrl,
} from '../../../common/utils/utils'
import { getColorForEnum } from '../../../common/utils/enumColorUtils'

export function ChipsForEnum({ value }: { value: Genre | Role }): JSX.Element {
  const isGenre = genreTypeChecker(value)
  const filterKey = isGenre ? 'genre' : 'role'
  const label = convertFromEnumToText(value)
  const backgroundColor = getColorForEnum(value)

  const handleClick = () => {
    const url = `/video-list-page?${filterKey}=${convertFromEnumToUrl(value)}`
    window.location.href = url
  }

  return (
    <Chip
      label={label}
      component="button"
      onClick={handleClick}
      style={{ backgroundColor: backgroundColor as any }}
    />
  )
}
