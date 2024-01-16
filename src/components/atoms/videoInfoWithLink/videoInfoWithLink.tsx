import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Genre, Role, roleTypeChecker } from '../../../common/constants/enums'
import {
  convertFromEnumToText,
  convertFromEnumToUrl,
} from '../../../common/utils/utils'
import { ReactNode } from 'react'

type VideoInfoProps = {
  label: string
  linkableInfo: Genre[] | Role[]
}

function buildLinkUrl(arg: Genre | Role): string {
  const filterKey = roleTypeChecker(arg) ? 'role' : 'genre'
  return '/video-list-page?' + filterKey + '=' + convertFromEnumToUrl(arg)
}

export function VideoInfoWithLink({ label, linkableInfo }: VideoInfoProps) {
  const links: ReactNode = linkableInfo
    .map<ReactNode>(info => (
      <Link
        style={{ color: 'black', textDecoration: 'none' }}
        to={buildLinkUrl(info)}
      >
        {convertFromEnumToText(info)}
      </Link>
    ))
    .reduce((acc, value) => [acc, ', ', value])
  return (
    <Typography sx={{ color: 'black' }}>
      <b>{label}: </b>
      {links}
    </Typography>
  )
}
