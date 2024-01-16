import { Typography } from '@mui/material'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type VideoInfoProps = {
  label?: string
  infoValue: ReactNode
}

export function VideoInfo({ label, infoValue }: VideoInfoProps) {
  return (
    <Typography>
      {!!label && <b>{`${label}: `}</b>}
      {label === 'Client' ? (
        <span>{infoValue}</span>
      ) : (
        <Link href={`/${infoValue}`}>{infoValue}</Link>
      )}
    </Typography>
  )
}
