import { Typography } from '@mui/material'
import { Genre, Role } from '../../../common/constants/enums'
import { ReactNode } from 'react'
import { LinkForEnum } from '../linkForEnum/LinkForEnum'

type VideoInfoProps = {
  label: string
  linkableInfo: Genre[] | Role[]
}

export function VideoInfoWithLink({ label, linkableInfo }: VideoInfoProps) {
  const links: ReactNode = linkableInfo
    .map<ReactNode>((info, index) => (
      <LinkForEnum value={info} key={`link-for-enum-${info}-${index}`} />
    ))
    .reduce((acc, value) => [acc, ', ', value])
  return (
    <Typography sx={{ color: 'black' }}>
      <b>{label}: </b>
      {links}
    </Typography>
  )
}
