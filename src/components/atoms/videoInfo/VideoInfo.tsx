import { Typography } from '@mui/material'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type VideoInfoProps = {
  label: string
  info: string
}

export function VideoInfo({ label, info }: VideoInfoProps) {
  return (
    <div>
      <Typography variant="body1">
        <b>{label}: </b>
        {info}
      </Typography>
    </div>
  )
}
