import { Genre, Role } from '../../../common/constants/enums'
import { convertFromEnumToText } from '../../../common/utils/utils'

type PageTitleProps = {
  title: Genre | Role
}

export function PageTitle({ title }: PageTitleProps) {
  const pageTitle = convertFromEnumToText(title)
  return <h2>{pageTitle}</h2>
}
