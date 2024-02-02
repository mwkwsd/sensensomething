import Chip from '@mui/material/Chip'
import { Genre, Role, roleTypeChecker } from '../../../common/constants/enums'
import {
  convertFromEnumToText,
  convertFromEnumToUrl,
} from '../../../common/utils/utils'

export function ChipsForEnum({ value }: { value: Genre | Role }) {
  const buildChipProps = (arg: Genre | Role): any => {
    const filterKey = roleTypeChecker(arg) ? 'role' : 'genre'
    const chipProps: any = {
      label: convertFromEnumToText(arg),
      clickable: true,
    }

    if (chipProps.clickable) {
      chipProps.component = 'button'
      chipProps.onClick = () => {
        const url =
          '/video-list-page?' + filterKey + '=' + convertFromEnumToUrl(arg)
        window.location.href = url
      }
    }

    return chipProps
  }

  return <Chip {...buildChipProps(value)} />
} 
